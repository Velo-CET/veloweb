import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
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
      {
        source: "/wishlist",
        destination: "/support#sponsor-a-part",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
