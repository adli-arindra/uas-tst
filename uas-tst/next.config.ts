import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['www.flaticon.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,  // Disable ESLint during production builds
  },
};

export default nextConfig;
