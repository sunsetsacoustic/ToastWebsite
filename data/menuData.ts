import { Drink } from '../types/drink';

export const menuData: Drink[] = [
    // Signature Collections
    {
        id: 'sig-1',
        name: 'Strawberry Basil Smash',
        description: 'Fresh strawberries muddles with aromatic basil and lime.',
        category: 'Signature',
        ingredients: ['Vodka', 'Fresh Strawberries', 'Basil', 'Lime Juice', 'Soda Water'],
        image: '/images/menu/strawberry-basil-smash.jpg',
    },
    {
        id: 'sig-2',
        name: 'Spicy Cucumber Margarita',
        description: 'Cool cucumber meets fiery jalapeño for a refreshing kick.',
        category: 'Signature',
        ingredients: ['Blanco Tequila', 'Cucumber', 'Jalapeño', 'Lime', 'Agave'],
        image: '/images/menu/spicy-cucumber-margarita.jpg',
    },
    {
        id: 'sig-3',
        name: 'Lavender Lemonade',
        description: 'A floral twist on a childhood favorite, spiked for the adults.',
        category: 'Signature',
        ingredients: ['Gin', 'Lavender Syrup', 'Fresh Lemon Juice', 'Sparkling Water'],
        image: '/images/menu/lavender-lemonade.jpg',
    },

    // Classic Collections
    {
        id: 'classic-1',
        name: 'Old Fashioned',
        description: 'The definition of a cocktail. Bold, simple, and timeless.',
        category: 'Classic',
        ingredients: ['Bourbon', 'Angostura Bitters', 'Sugar Cube', 'Orange Peel'],
        image: '/images/menu/old-fashioned.webp',
    },
    {
        id: 'classic-2',
        name: 'French 75',
        description: 'Effervescent and sophisticated. A celebration in a glass.',
        category: 'Classic',
        ingredients: ['Gin', 'Lemon Juice', 'Simple Syrup', 'Champagne'],
        image: '/images/menu/french-75.jpg',
    },
    {
        id: 'classic-3',
        name: 'Espresso Martini',
        description: 'Rich, creamy, and energizing. The perfect pick-me-up.',
        category: 'Classic',
        ingredients: ['Vodka', 'Coffee Liqueur', 'Fresh Espresso', 'Simple Syrup'],
        image: '/images/menu/espresso-martini.webp',
    },

    // Featured Highlights (Mixing some for display)
    {
        id: 'feat-1',
        name: 'Smoked Pecan Old Fashioned',
        description: 'A Texas twist on the classic, featuring smoked pecan wood chips.',
        category: 'Featured',
        ingredients: ['Texas Bourbon', 'Pecan Syrup', 'Angostura Bitters', 'Smoke'],
        image: '/images/menu/smoked-pecan-old-fashioned.jpg',
    }
];
