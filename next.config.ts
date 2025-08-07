import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "/api/portraits/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dezfej6wq/image/upload/v1748285799/uploads/file.png",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co.com",
        pathname: "/**",
      },
    ],
    domains: [
      "randomuser.me",
      "res.cloudinary.com",
      "i.ibb.co.com",
    ],
  },
};
export default nextConfig;
