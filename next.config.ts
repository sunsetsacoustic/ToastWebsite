import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/services',
        destination: '/#services',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
