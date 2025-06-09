/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true, // Bu özellik Next 13+ sürümlerinde destekleniyor
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
    ],
  },
};

export default nextConfig;
