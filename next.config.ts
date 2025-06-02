import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blogs.wordsonus.ng",
      },
    ],
  },
};

export default nextConfig;
