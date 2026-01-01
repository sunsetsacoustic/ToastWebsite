import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://toastmobile.bar';
    const lastModified = new Date();

    return [
        {
            url: baseUrl,
            lastModified: lastModified,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/mini`,
            lastModified: lastModified,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: lastModified,
            changeFrequency: 'monthly',
            priority: 0.9, // Assuming services is high value
        },
        {
            url: `${baseUrl}/calculator`,
            lastModified: lastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: lastModified,
            changeFrequency: 'yearly',
            priority: 0.8,
        },
    ];
}
