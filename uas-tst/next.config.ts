import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['www.flaticon.com', "127.0.0.1", "3.107.86.100"],
  },
  eslint: {
    ignoreDuringBuilds: true,  // Disable ESLint during production builds
  },
};

export default nextConfig;
