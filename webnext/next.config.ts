import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone", // สำคัญสำหรับ deploy ขึ้น Vercel
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.vercel.app", // อนุญาตให้โหลดรูปจากโดเมนนี้
      },
    ],
  },
};

export default nextConfig;
