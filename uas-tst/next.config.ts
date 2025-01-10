import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '*',
      },
      {
        protocol: 'https',
        hostname: '*',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,  // Disable ESLint during production builds
  },
};

export default nextConfig;
