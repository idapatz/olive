/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fix für Windows file system Probleme
  experimental: {
    esmExternals: 'loose'
  },
  // Webpack config für bessere Windows Kompatibilität
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
  // Optimierung für Development
  swcMinify: true,
}

module.exports = nextConfig 