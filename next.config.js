/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: "/",
                destination: "/devices",
                permanent: false,
            },
        ];
    },
};

module.exports = nextConfig;
