// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: true,
//     images: {
//       domains: ['localhost'], // Add any other domains you need for Image component
//     },
//   }
  
//   export default nextConfig
  
  /** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-src 'self' https://www.google.com;",
          },
        ],
      },
    ]
  },
}

export default nextConfig

