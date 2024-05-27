/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '3.8.190.210',
      },
    ],
  },
}
export default nextConfig
