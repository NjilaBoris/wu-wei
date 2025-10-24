import type { NextConfig } from "next";

// @ts-ignore
const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignore ESLint errors during builds for the entire project
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
