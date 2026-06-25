import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/support",
        destination: "/sponsorship",
        permanent: true,
      },
      {
        source: "/sponsorships",
        destination: "/sponsorship",
        permanent: true,
      },
      {
        source: "/projects",
        destination: "/project",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
