/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
};

module.exports = (nextConfig = {}) => {
  const plugins = [];
  const config = plugins.reduce((acc, next) => next(acc), {
    ...nextConfig,
    images: {
      domains: ['images.prismic.io'],
    },
  });
  return config;
};
