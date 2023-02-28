/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        unoptimized: true,
        domains: [
            'vnxpedia.3i.com.vn',
        ],
    },
    // async rewrites() {
    //     return [
    //         { source: '/destination', destination: '/destination.html' },
    //         { source: '/way-to-travel', destination: '/way-to-travel.html' },
    //         { source: '/tour-detail', destination: '/tour-detail.html' },
    //         { source: '/hotel-detail', destination: '/hotel-detail.html' },
    //         { source: '/transfer-detail', destination: '/transfer-detail.html' },
    //         { source: '/payment', destination: '/payment.html' },
    //         { source: '/blog-detail', destination: '/blog-detail.html' },
    //     ]
    // },
}

module.exports = nextConfig;
