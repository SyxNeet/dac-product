/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms-dac.okhub.tech'
      }
    ]
  },
}

module.exports = nextConfig
