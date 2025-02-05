import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/, // Assure que seul JS/TSX utilise SVGR
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
