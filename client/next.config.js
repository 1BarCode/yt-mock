// images: next requires a whitelist of domains to pull images from

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [],
    },
};

module.exports = nextConfig;
