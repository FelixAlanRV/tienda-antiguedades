import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "szlfsysxskkbprapwwwt.supabase.co",
      },
    ],
  },
};

export default nextConfig;
