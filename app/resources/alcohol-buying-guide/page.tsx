import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "The Ultimate Alcohol Buying Guide for Weddings & Events | TOAST Mobile Bar",
    description: "How much alcohol do you need for your wedding? Use our professional buying guide to calculate quantities, choose the right brands, and save money.",
    keywords: ["Alcohol buying guide wedding", "wedding bar calculator", "how much alcohol for 100 guests", "wedding bar shopping list"],
};

export default function AlcoholBuyingGuide() {
    return (
        <main className="min-h-screen bg-brand-dark text-white selection:bg-brand-gold selection:text-brand-dark pt-32 pb-20">
            <article className="container mx-auto px-6 max-w-4xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-brand-gold mb-4 font-mono text-sm tracking-widest uppercase">Professional Advice</p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight">
                        The Toast Alcohol Buying Guide
                    </h1>
                    <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
                        Professional advice for the perfect pour. Calculate exactly what you need with our industry-standard formulas.
                    </p>
                </div>

                {/* The Golden Rule */}
                <section className="mb-16 bg-white/5 p-8 md:p-12 rounded-2xl border border-white/10 backdrop-blur-sm">
                    <h2 className="text-3xl font-serif text-brand-gold mb-6">The Golden Rule: "The One Hour Formula"</h2>
                    <p className="text-lg text-white/80 mb-6">
                        The industry standard calculation for alcohol consumption is simple: <strong className="text-white">1 Guest = 1 Drink per Hour.</strong>
                    </p>

                    <div className="bg-brand-dark/50 p-6 rounded-lg border border-white/5 mb-6">
                        <h3 className="font-mono text-sm text-brand-gold uppercase tracking-wider mb-2">The Math</h3>
                        <p className="text-xl md:text-2xl font-serif text-white">
                            [Guest Count] x [Hours of Service] = Total Drinks Needed
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-bold text-white mb-2">Example Calculation</h4>
                            <p className="text-white/70">100 Guests x 4 Hours = <span className="text-white font-bold">400 Drinks</span></p>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-2">The Buffer</h4>
                            <p className="text-white/70">Always add a 10-15% safety buffer. It is better to return unopened bottles than to run dry.</p>
                        </div>
                    </div>
                </section>

                {/* The Ratios */}
                <section className="mb-16">
                    <h2 className="text-3xl font-serif text-white mb-8">The Ratios: Know Your Crowd</h2>
                    <p className="text-lg text-white/60 mb-8">Not every party is the same. Choose the profile that fits your guest list.</p>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Standard Wedding */}
                        <div className="bg-zinc-900/50 p-8 rounded-xl border border-white/5">
                            <h3 className="text-xl font-serif text-brand-gold mb-2">1. The "Standard Wedding"</h3>
                            <p className="text-sm text-white/40 mb-6">(Balanced)</p>
                            <ul className="space-y-3 font-mono text-sm">
                                <li className="flex justify-between border-b border-white/5 pb-2">
                                    <span>Beer</span>
                                    <span className="text-brand-gold">20%</span>
                                </li>
                                <li className="flex justify-between border-b border-white/5 pb-2">
                                    <span>Wine</span>
                                    <span className="text-brand-gold">30%</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Liquor</span>
                                    <span className="text-brand-gold">50%</span>
                                </li>
                            </ul>
                        </div>

                        {/* Party Crowd */}
                        <div className="bg-zinc-900/50 p-8 rounded-xl border border-white/5">
                            <h3 className="text-xl font-serif text-brand-gold mb-2">2. The "Party Crowd"</h3>
                            <p className="text-sm text-white/40 mb-6">(Younger / Heavy Drinkers)</p>
                            <ul className="space-y-3 font-mono text-sm">
                                <li className="flex justify-between border-b border-white/5 pb-2">
                                    <span>Beer</span>
                                    <span className="text-brand-gold">15%</span>
                                </li>
                                <li className="flex justify-between border-b border-white/5 pb-2">
                                    <span>Wine</span>
                                    <span className="text-brand-gold">15%</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Liquor</span>
                                    <span className="text-brand-gold">70%</span>
                                </li>
                            </ul>
                        </div>

                        {/* Daytime Affair */}
                        <div className="bg-zinc-900/50 p-8 rounded-xl border border-white/5">
                            <h3 className="text-xl font-serif text-brand-gold mb-2">3. The "Daytime Affair"</h3>
                            <p className="text-sm text-white/40 mb-6">(Showers / Brunches)</p>
                            <ul className="space-y-3 font-mono text-sm">
                                <li className="flex justify-between border-b border-white/5 pb-2">
                                    <span>Beer</span>
                                    <span className="text-brand-gold">10%</span>
                                </li>
                                <li className="flex justify-between border-b border-white/5 pb-2">
                                    <span>Wine</span>
                                    <span className="text-brand-gold">60%</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Liquor</span>
                                    <span className="text-brand-gold">30%</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Bottle Breakdown */}
                <section className="mb-16">
                    <h2 className="text-3xl font-serif text-white mb-8">The Quantities: Bottle Breakdown</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-white/10 text-white/40 font-mono text-sm">
                                    <th className="py-4 pr-4 font-normal">Bottle Type</th>
                                    <th className="py-4 px-4 font-normal">Size</th>
                                    <th className="py-4 px-4 font-normal">Approx. Servings</th>
                                    <th className="py-4 pl-4 font-normal">Note</th>
                                </tr>
                            </thead>
                            <tbody className="text-white/80">
                                <tr className="border-b border-white/5">
                                    <td className="py-4 pr-4 font-serif text-brand-gold text-lg">Standard Wine</td>
                                    <td className="py-4 px-4">750ml</td>
                                    <td className="py-4 px-4">5 Glasses</td>
                                    <td className="py-4 pl-4 text-white/50 text-sm">Buy by the case (12 bottles) for discounts.</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="py-4 pr-4 font-serif text-brand-gold text-lg">Champagne</td>
                                    <td className="py-4 px-4">750ml</td>
                                    <td className="py-4 px-4">6 Flutes</td>
                                    <td className="py-4 pl-4 text-white/50 text-sm">For toasts only. If serving mimosas, calculate as Wine.</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="py-4 pr-4 font-serif text-brand-gold text-lg">Standard Liquor</td>
                                    <td className="py-4 px-4">750ml</td>
                                    <td className="py-4 px-4">16 Drinks</td>
                                    <td className="py-4 pl-4 text-white/50 text-sm">Good for top-shelf options or niche spirits.</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="py-4 pr-4 font-serif text-brand-gold text-lg">"Handle" Liquor</td>
                                    <td className="py-4 px-4">1.75L</td>
                                    <td className="py-4 px-4">39 Drinks</td>
                                    <td className="py-4 pl-4 text-white/50 text-sm"><span className="text-brand-gold font-bold">TOAST RECOMMENDS.</span> Best value. Buy these for Vodka/Tequila.</td>
                                </tr>
                                <tr>
                                    <td className="py-4 pr-4 font-serif text-brand-gold text-lg">Beer Case</td>
                                    <td className="py-4 px-4">24 Pack</td>
                                    <td className="py-4 px-4">24 Drinks</td>
                                    <td className="py-4 pl-4 text-white/50 text-sm">Cans cool faster and are safer than glass bottles.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Brand Guide */}
                <section className="mb-16">
                    <h2 className="text-3xl font-serif text-white mb-6">The Brand Guide: Good, Better, Best</h2>
                    <p className="text-lg text-white/60 mb-8">
                        We recommend avoiding "bottom shelf" plastic bottles (bad hangovers) and "super premium" (lost in mixers). Aim for the <span className="text-white font-semibold">"Solid Mid-Range."</span>
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/5">
                            <h3 className="text-xl font-serif text-brand-gold mb-4">VODKA (The Crowd Pleaser)</h3>
                            <ul className="space-y-2">
                                <li className="text-white/60"><span className="text-white/40 text-sm w-20 inline-block uppercase tracking-wider">Budget</span> Smirnoff</li>
                                <li className="text-white"><span className="text-brand-gold text-sm w-20 inline-block uppercase tracking-wider font-bold">TOAST Pick</span> Tito’s or Deep Eddy (Texas Favorites)</li>
                                <li className="text-white/60"><span className="text-white/40 text-sm w-20 inline-block uppercase tracking-wider">Splurge</span> Grey Goose or Kettle One</li>
                            </ul>
                        </div>

                        <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/5">
                            <h3 className="text-xl font-serif text-brand-gold mb-4">TEQUILA (The Party Starter)</h3>
                            <ul className="space-y-2">
                                <li className="text-white/60"><span className="text-white/40 text-sm w-20 inline-block uppercase tracking-wider">Budget</span> Sauza Silver</li>
                                <li className="text-white"><span className="text-brand-gold text-sm w-20 inline-block uppercase tracking-wider font-bold">TOAST Pick</span> Espolòn Blanco (Best value/taste ratio)</li>
                                <li className="text-white/60"><span className="text-white/40 text-sm w-20 inline-block uppercase tracking-wider">Splurge</span> Casamigos or Don Julio</li>
                            </ul>
                        </div>

                        <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/5">
                            <h3 className="text-xl font-serif text-brand-gold mb-4">WHISKEY / BOURBON</h3>
                            <ul className="space-y-2">
                                <li className="text-white/60"><span className="text-white/40 text-sm w-20 inline-block uppercase tracking-wider">Budget</span> Evan Williams</li>
                                <li className="text-white"><span className="text-brand-gold text-sm w-20 inline-block uppercase tracking-wider font-bold">TOAST Pick</span> Maker's Mark or Bulleit</li>
                                <li className="text-white/60"><span className="text-white/40 text-sm w-20 inline-block uppercase tracking-wider">Splurge</span> Woodford Reserve</li>
                            </ul>
                        </div>

                        <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/5">
                            <h3 className="text-xl font-serif text-brand-gold mb-4">GIN</h3>
                            <ul className="space-y-2">
                                <li className="text-white/60"><span className="text-white/40 text-sm w-20 inline-block uppercase tracking-wider">Budget</span> Gordon's</li>
                                <li className="text-white"><span className="text-brand-gold text-sm w-20 inline-block uppercase tracking-wider font-bold">TOAST Pick</span> Bombay Sapphire or Tanqueray</li>
                                <li className="text-white/60"><span className="text-white/40 text-sm w-20 inline-block uppercase tracking-wider">Splurge</span> Hendrix</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Secret Shopping List Tips */}
                <section className="mb-20 bg-brand-gold/10 p-8 md:p-12 rounded-2xl border border-brand-gold/20">
                    <h2 className="text-3xl font-serif text-brand-gold mb-8">The "Secret" Shopping List Tips</h2>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">1. The "Returnable" Rule</h3>
                            <p className="text-white/80 mb-2">Shop at major retailers like Spec's or Total Wine. They usually allow you to return unopened, unchilled bottles with a receipt.</p>
                            <p className="text-white/60 text-sm italic">Strategy: Buy 20% more than you think you need. Keep the extras in a separate box under the table. If we don't open them, you get your money back.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">2. Cans &gt; Kegs</h3>
                            <p className="text-white/80 mb-2">We strongly recommend cans over kegs.</p>
                            <p className="text-white/60 text-sm italic">Why? Kegs require taps, heavy lifting, and deposit fees. If you don't finish a keg, you throw the beer away. If you don't finish a case of cans, you take them home.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">3. Don't Forget the Ice</h3>
                            <p className="text-white/80 mb-2">If your venue does not have an ice machine, you must provide ice.</p>
                            <ul className="text-white/60 text-sm list-disc pl-5 space-y-1">
                                <li><strong className="text-white">Cooling Ice:</strong> 1 lb per guest (To chill beer/wine).</li>
                                <li><strong className="text-white">Service Ice:</strong> 1 lb per guest (To put in drinks).</li>
                                <li><strong className="text-white">Total:</strong> For 100 guests, buy 200 lbs of ice.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <div className="text-center py-12 border-t border-white/5">
                    <h2 className="text-4xl font-serif text-white mb-6">Ready to Shop?</h2>
                    <p className="text-white/60 mb-8 max-w-xl mx-auto">
                        Once you have your list, feel free to text it to us or email <a href="mailto:hello@toastmobile.bar" className="text-brand-gold underline decoration-1 underline-offset-4">hello@toastmobile.bar</a> and we will double-check your math before you checkout.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-brand-gold text-brand-dark font-bold py-4 px-10 rounded-full hover:bg-white transition-colors duration-300"
                    >
                        Book Your Bar
                    </a>
                </div>

            </article>
        </main>
    );
}
