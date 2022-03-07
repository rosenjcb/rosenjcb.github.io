/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: '/',
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  }
}

module.exports = nextConfig
