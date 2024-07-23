/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://obamacare.onrender.com/:path*' 
      }
    ];
  },
};

export default nextConfig;
