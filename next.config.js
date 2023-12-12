/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms-dac.okhub.tech'
      },
      {
        protocol: 'https',
        hostname: 'cms.asiavivatravel.com'
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      }
    ]
  },
  staticPageGenerationTimeout: 1000,
  output: 'standalone',
}

module.exports = nextConfig
