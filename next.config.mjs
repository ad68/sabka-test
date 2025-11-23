/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.torob.com",
      },
      {
        protocol: "https",
        hostname: "mag.tazminyadak.com",
      },
      {
        protocol: "https",
        hostname: "cc.bakapp.ir",
      },
    ],
  },
};

export default nextConfig;
