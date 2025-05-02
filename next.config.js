/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Custom webpack config if needed
  webpack: (config, { dev, isServer }) => {
    return config;
  },
}

module.exports = nextConfig
