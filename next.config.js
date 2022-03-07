/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  assetPrefix: '/',
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  }
}

module.exports = nextConfig
