import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'FAQ | TOAST Mobile Bar Co.',
    description: 'Frequently asked questions about our mobile bar services, pricing, and logistics.',
};

export default function FAQPage() {
    const faqs = [
        {
            question: "What exactly is a 'Dry Hire' bar?",
            answer: "Great question! 'Dry Hire' means that you provide the alcohol, and we provide everything else. Due to Texas TABC liquor laws, mobile bars cannot legally sell alcohol. This actually benefits you—it saves you the huge markup venues charge for liquor. You buy the bottles at retail price (from Specs, Total Wine, etc.), and we turn them into a luxury experience."
        },
        {
            question: "Do you help us decide how much to buy?",
            answer: "Absolutely. We don't leave you guessing. Once you book, we provide a detailed **Custom Shopping List** based on your guest count and menu choices. We calculate exactly how many bottles of vodka, tequila, and wine you need so you don't run out or overspend."
        },
        {
            question: "How much space does the mobile bar need?",
            answer: "Our standard bar setup requires a **6x4 foot footprint**. We need flat ground (no steep hills!) and access to a standard 120V outlet if you want the bar lights or coffee service. If your venue is remote, we can bring a whisper-quiet generator for a small fee."
        },
        {
            question: "Can you do both 'Dirty Sodas' and Cocktails?",
            answer: "Yes! This is our most popular 'Hybrid' package. We can set up a **TOAST Mini** station for the kids (or non-drinkers) with Dirty Sodas and Mocktails, while running a full bar for the adults. It keeps everyone happy and hydrated."
        },
        {
            question: "Do you carry General Liability & Liquor Liability Insurance?",
            answer: "Yes, we carry a $1M General Liability policy and Liquor Liability insurance. We can provide a COI (Certificate of Insurance) to your venue upon request."
        },
        {
            question: "What is your travel radius?",
            answer: "We are based in Kingwood and the first **20 miles are free**. Beyond that, we charge a modest travel fee ($2/mile) to cover gas and crew time. We regularly serve Austin, Round Rock, Dripping Springs, and the surrounding Hill Country."
        },
        {
            question: "How do I book my date?",
            answer: "A **50% non-refundable deposit** locks in your date. The remaining balance is due 14 days before your event. Dates fill up fast (especially Saturdays), so we recommend booking as soon as you have your venue secured."
        }
    ];

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };

    return (
        <div className="min-h-screen bg-[#001F3F] text-white py-20 px-4 md:px-8">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="max-w-3xl mx-auto space-y-12">
                <header className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-serif text-amber-50">Frequently Asked Questions</h1>
                    <p className="text-blue-200 text-lg">Everything you need to know about booking TOAST.</p>
                </header>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <details
                            key={index}
                            className="group bg-[#0a2a4d] rounded-lg border border-white/10 open:bg-[#0f355c] transition-colors duration-200"
                        >
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                <h3 className="text-lg font-medium text-amber-50 pr-4">{faq.question}</h3>
                                <span className="text-amber-200 transition-transform duration-300 group-open:rotate-180">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </span>
                            </summary>
                            <div className="px-6 pb-6 text-blue-100 leading-relaxed space-y-2">
                                <div dangerouslySetInnerHTML={{ __html: faq.answer.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </div>
    );
}
