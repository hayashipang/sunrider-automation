/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'vercel.app'],
    unoptimized: true
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
