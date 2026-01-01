import React from "react";

const JsonLd = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "MobileFoodService",
        "name": "TOAST Mobile Bar Co.",
        "image": "https://toastmobile.bar/logo.png",
        "priceRange": "$$$",
        "telephone": "[Your Phone Number]",
        "address": {
            "@type": "PostalAddress",
            "addressRegion": "TX",
            "addressCountry": "US"
        },
        "areaServed": ["Austin", "Round Rock", "Georgetown", "Dripping Springs"]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

export default JsonLd;
