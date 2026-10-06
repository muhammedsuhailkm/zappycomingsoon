import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve sharper images: AVIF first, then WebP, at high quality.
    formats: ["image/avif", "image/webp"],
    qualities: [75, 95],
  },
};

export default nextConfig;
