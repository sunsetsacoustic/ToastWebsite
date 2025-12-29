'use client';

import React, { useState } from 'react';
import { useMenuStore } from '../store/useMenuStore';
import { Drink, DrinkCategory } from '../types/drink';

const initialDrinkState: Omit<Drink, 'id'> = {
    name: '',
    description: '',
    category: 'Signature',
    ingredients: [],
    image: '',
};

const MenuManager: React.FC = () => {
    const { drinks, addDrink, updateDrink, deleteDrink } = useMenuStore();
    const [isEditing, setIsEditing] = useState(false);
    const [currentDrink, setCurrentDrink] = useState<Partial<Drink>>(initialDrinkState);
    const [ingredientInput, setIngredientInput] = useState('');

    const handleEdit = (drink: Drink) => {
        setCurrentDrink(drink);
        setIsEditing(true);
    };

    const handleDelete = (id: string) => {
        if (confirm('Are you sure you want to delete this drink?')) {
            deleteDrink(id);
        }
    };

    const handleAddNew = () => {
        setCurrentDrink(initialDrinkState);
        setIsEditing(true);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (currentDrink.id) {
            updateDrink(currentDrink.id, currentDrink);
        } else {
            addDrink({ ...currentDrink, id: Date.now().toString() } as Drink);
        }
        setIsEditing(false);
        setCurrentDrink(initialDrinkState);
    };

    const addIngredient = () => {
        if (ingredientInput.trim()) {
            setCurrentDrink({
                ...currentDrink,
                ingredients: [...(currentDrink.ingredients || []), ingredientInput.trim()],
            });
            setIngredientInput('');
        }
    };

    const removeIngredient = (index: number) => {
        setCurrentDrink({
            ...currentDrink,
            ingredients: currentDrink.ingredients?.filter((_, i) => i !== index),
        });
    };

    if (isEditing) {
        return (
            <div className="max-w-2xl mx-auto p-6 bg-brand-dark/50 rounded-lg border border-brand-primary/20 backdrop-blur-sm">
                <h2 className="text-2xl font-display text-brand-primary mb-6">{currentDrink.id ? 'Edit Drink' : 'Create New Drink'}</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-sans text-brand-secondary/70 mb-2">Name</label>
                        <input
                            type="text"
                            required
                            value={currentDrink.name || ''}
                            onChange={(e) => setCurrentDrink({ ...currentDrink, name: e.target.value })}
                            className="w-full px-4 py-2 bg-brand-dark border border-brand-primary/30 rounded focus:outline-none focus:border-brand-primary text-brand-cream"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-sans text-brand-secondary/70 mb-2">Description</label>
                        <textarea
                            required
                            rows={3}
                            value={currentDrink.description || ''}
                            onChange={(e) => setCurrentDrink({ ...currentDrink, description: e.target.value })}
                            className="w-full px-4 py-2 bg-brand-dark border border-brand-primary/30 rounded focus:outline-none focus:border-brand-primary text-brand-cream"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-sans text-brand-secondary/70 mb-2">Category</label>
                        <select
                            value={currentDrink.category || 'Signature'}
                            onChange={(e) => setCurrentDrink({ ...currentDrink, category: e.target.value as DrinkCategory })}
                            className="w-full px-4 py-2 bg-brand-dark border border-brand-primary/30 rounded focus:outline-none focus:border-brand-primary text-brand-cream"
                        >
                            {['Featured', 'Signature', 'Classic'].map((cat) => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-sans text-brand-secondary/70 mb-2">Image URL</label>
                        <input
                            type="text"
                            value={currentDrink.image || ''}
                            onChange={(e) => setCurrentDrink({ ...currentDrink, image: e.target.value })}
                            className="w-full px-4 py-2 bg-brand-dark border border-brand-primary/30 rounded focus:outline-none focus:border-brand-primary text-brand-cream"
                            placeholder="e.g. /images/menu/my-drink.jpg"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-sans text-brand-secondary/70 mb-2">Ingredients</label>
                        <div className="flex gap-2 mb-3">
                            <input
                                type="text"
                                value={ingredientInput}
                                onChange={(e) => setIngredientInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addIngredient())}
                                className="flex-1 px-4 py-2 bg-brand-dark border border-brand-primary/30 rounded focus:outline-none focus:border-brand-primary text-brand-cream"
                                placeholder="Type and press Enter..."
                            />
                            <button
                                type="button"
                                onClick={addIngredient}
                                className="px-4 py-2 bg-brand-primary/20 text-brand-primary hover:bg-brand-primary/30 rounded transition-colors"
                            >
                                Add
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {currentDrink.ingredients?.map((ing, i) => (
                                <span key={i} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono bg-brand-secondary/10 text-brand-secondary border border-brand-secondary/20">
                                    {ing}
                                    <button
                                        type="button"
                                        onClick={() => removeIngredient(i)}
                                        className="ml-2 hover:text-red-400"
                                    >
                                        ×
                                    </button>
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-end gap-4 pt-4 border-t border-brand-primary/10">
                        <button
                            type="button"
                            onClick={() => setIsEditing(false)}
                            className="px-6 py-2 text-brand-secondary hover:text-brand-cream transition-colors font-sans"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2 bg-brand-primary text-brand-dark font-medium rounded hover:bg-brand-primary/90 transition-colors"
                        >
                            Save Drink
                        </button>
                    </div>
                </form>
            </div>
        );
    };

    return (
        <div className="w-full max-w-5xl mx-auto px-6 py-12">
            <div className="flex justify-between items-center mb-12">
                <h2 className="text-3xl font-display text-brand-primary">Menu Management</h2>
                <button
                    onClick={handleAddNew}
                    className="px-6 py-3 bg-brand-primary text-brand-dark font-medium rounded hover:bg-brand-primary/90 transition-colors flex items-center gap-2"
                >
                    <span>+</span> Create New Drink
                </button>
            </div>

            <div className="bg-brand-dark/50 rounded-lg border border-brand-primary/10 overflow-hidden">
                {drinks.length === 0 ? (
                    <div className="p-12 text-center text-brand-secondary/50">
                        No drinks found. Create one to get started.
                    </div>
                ) : (
                    <div className="divide-y divide-brand-primary/10">
                        {drinks.map((drink) => (
                            <div key={drink.id} className="p-6 flex items-center justify-between hover:bg-brand-primary/5 transition-colors group">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-1">
                                        <h3 className="font-display text-lg text-brand-cream">{drink.name}</h3>
                                        <span className={`px-2 py-0.5 text-[10px] uppercase tracking-wider rounded border border-brand-primary/20 ${drink.category === 'Featured' ? 'bg-brand-primary/20 text-brand-primary' : 'bg-brand-secondary/10 text-brand-secondary'}`}>
                                            {drink.category}
                                        </span>
                                    </div>
                                    <p className="text-sm text-brand-secondary/60 font-sans mb-1">{drink.description}</p>
                                </div>
                                <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button
                                        onClick={() => handleEdit(drink)}
                                        className="text-brand-primary hover:text-brand-cream transition-colors text-sm font-medium"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(drink.id)}
                                        className="text-red-400 hover:text-red-300 transition-colors text-sm font-medium"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MenuManager;
