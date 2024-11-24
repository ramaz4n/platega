import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Отключает проверки во время билда
  },
  /* config options here */
};

export default nextConfig;
