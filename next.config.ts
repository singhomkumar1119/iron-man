import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/iron-man",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
