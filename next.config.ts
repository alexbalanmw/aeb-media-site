import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Printed QR code on business cards points here (old site URL).
      // Temporary (307) so the destination can be repointed without
      // browsers caching it forever; UTM tags attribute card scans.
      {
        source: "/audit",
        destination: "/free-audit?utm_source=qr&utm_medium=business-card",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
