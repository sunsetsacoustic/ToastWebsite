import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Drink } from '../types/drink';
import { menuData } from '../data/menuData';

interface MenuState {
    drinks: Drink[];
    addDrink: (drink: Drink) => void;
    updateDrink: (id: string, updatedDrink: Partial<Drink>) => void;
    deleteDrink: (id: string) => void;
    setDrinks: (drinks: Drink[]) => void;
}

export const useMenuStore = create<MenuState>()(
    persist(
        (set) => ({
            drinks: menuData,
            addDrink: (drink) =>
                set((state) => ({ drinks: [...state.drinks, drink] })),
            updateDrink: (id, updatedDrink) =>
                set((state) => ({
                    drinks: state.drinks.map((drink) =>
                        drink.id === id ? { ...drink, ...updatedDrink } : drink
                    ),
                })),
            deleteDrink: (id) =>
                set((state) => ({
                    drinks: state.drinks.filter((drink) => drink.id !== id),
                })),
            setDrinks: (drinks) => set({ drinks }),
        }),
        {
            name: 'menu-storage', // name of the item in the storage (must be unique)
        }
    )
);
