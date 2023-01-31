/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'vnxpedia.3i.com.vn',
                port: '',
                pathname: '/uploads/images/**',
            },
        ],
    },
}

module.exports = nextConfig