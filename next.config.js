/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['127.0.0.1'],
      remotePatterns: [
          {
              protocol: 'https',
              hostname: '**',
              port: '**',
              pathname: '**',
          },
      ],
  },
}

module.exports = nextConfig