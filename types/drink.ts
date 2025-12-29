export type DrinkCategory = 'Featured' | 'Signature' | 'Classic';

export interface Drink {
    id: string;
    name: string;
    description: string;
    category: DrinkCategory;
    image?: string;
    ingredients: string[];
}
