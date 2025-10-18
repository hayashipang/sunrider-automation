/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'vercel.app'],
    unoptimized: true
  },
  // App Router is enabled by default in Next.js 14
  // No need for experimental.appDir
}

module.exports = nextConfig
