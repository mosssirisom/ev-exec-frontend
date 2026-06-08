/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  reactStrictMode: false,
  trailingSlash: false,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/',
          destination: '/_premium-home.html'
        }
      ]
    };
  }
};

module.exports = nextConfig;
