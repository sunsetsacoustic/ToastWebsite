import { useState, useMemo } from 'react';

export type VibeType = 'light' | 'average' | 'heavy';
export type SpiritType = 'Vodka' | 'Gin' | 'Tequila' | 'Whiskey' | 'Rum';

const SPIRIT_WEIGHTS: Record<SpiritType, number> = {
    Vodka: 0.30,
    Tequila: 0.25,
    Whiskey: 0.25,
    Rum: 0.10,
    Gin: 0.10,
};

export const usePartyCalculator = (initialGuests = 100, initialHours = 4, initialVibe: VibeType = 'average') => {
    const [guests, setGuests] = useState(initialGuests);
    const [hours, setHours] = useState(initialHours);
    const [vibe, setVibe] = useState<VibeType>(initialVibe);
    const [selectedSpirits, setSelectedSpirits] = useState<SpiritType[]>(['Vodka', 'Tequila', 'Whiskey']);

    const toggleSpirit = (spirit: SpiritType) => {
        setSelectedSpirits(prev =>
            prev.includes(spirit)
                ? prev.filter(s => s !== spirit)
                : [...prev, spirit]
        );
    };

    const results = useMemo(() => {
        // Base Rule: 2 drinks first hour + 1 drink per additional hour.
        const getModifier = () => {
            switch (vibe) {
                case "light": return 0.7;
                case "heavy": return 1.3;
                default: return 1.0;
            }
        };

        const drinksPerPersonBase = (hours - 1) + 2;
        const totalDrinks = Math.ceil((guests * drinksPerPersonBase) * getModifier());

        // Estimations
        const beerCases = Math.ceil((totalDrinks * 0.50) / 24);
        const wineBottles = Math.ceil((totalDrinks * 0.25) / 5);
        const liquorBottlesTotal = Math.ceil((totalDrinks * 0.25) / 17);

        // Smart Distribution
        const liquorBreakdown: Partial<Record<SpiritType, number>> = {};

        if (selectedSpirits.length > 0 && liquorBottlesTotal > 0) {
            // Calculate total weight of selected spirits
            const totalWeight = selectedSpirits.reduce((sum, spirit) => sum + SPIRIT_WEIGHTS[spirit], 0);

            // Distribute
            let allocated = 0;
            // Sort by weight desc to handle rounding better on big items first? No, simple map is fine.
            selectedSpirits.forEach(spirit => {
                const share = (SPIRIT_WEIGHTS[spirit] / totalWeight);
                const bottles = Math.round(liquorBottlesTotal * share);
                liquorBreakdown[spirit] = bottles > 0 ? bottles : 1; // Ensure at least 1 if selected (optional, but good UX)
                // Actually, if bottles is 0 but it's selected, maybe we want it to show up. 
                // But Math.round could be 0 for very small parties. Let's stick to Math.round.
            });

            // Re-sum to check against total (not strictly enforcing matching total, as these are buying guides)
            // But we can update logic to be precise if needed. 
            // For now, rough estimate per type is safer.
        }

        // Cost Estimation
        // Prices: Beer Case $20, Wine Bottle $20, Liquor Bottle $30
        const estimatedCost = (beerCases * 20) + (wineBottles * 20) + (liquorBottlesTotal * 30);

        return {
            totalDrinks,
            beerCases,
            wineBottles,
            liquorBottles: liquorBottlesTotal,
            liquorBreakdown,
            estimatedCost
        };
    }, [guests, hours, vibe, selectedSpirits]);

    return {
        guests,
        setGuests,
        hours,
        setHours,
        vibe,
        setVibe,
        selectedSpirits,
        toggleSpirit,
        results
    };
};
