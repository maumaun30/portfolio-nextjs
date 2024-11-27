import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http", // or "https"
        hostname: "localhost",
        port: "8000", // Include the port if required
        pathname: "/storage/media/**", // Match the image path
      },
      {
        protocol: "https",
        hostname: "your-production-domain.com",
        pathname: "/**", // Match all paths on this domain
      },
    ],
  },
};

export default nextConfig;
