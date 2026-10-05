import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/iron-man",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/iron-man",
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;