import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    // Local, trusted placeholder/illustration assets only.
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
