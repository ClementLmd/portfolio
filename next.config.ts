import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,

  async redirects() {
    return [
      {
        source: "/gh",
        destination:
          "/fr?utm_source=github&utm_medium=profile&utm_campaign=portfolio2025",
        permanent: true,
      },
      {
        source: "/li",
        destination:
          "/fr?utm_source=linkedin&utm_medium=profile&utm_campaign=portfolio2025",
        permanent: true,
      },
      {
        source: "/ghreadme",
        destination:
          "/fr?utm_source=github&utm_medium=readme&utm_campaign=portfolio2025",
        permanent: true,
      },
      {
        source: "/wttj",
        destination:
          "/fr?utm_source=cv&utm_medium=wttj&utm_campaign=portfolio2025",
        permanent: true,
      },
      {
        source: "/indeed",
        destination:
          "/fr?utm_source=cv&utm_medium=indeed&utm_campaign=portfolio2025",
        permanent: true,
      },
      {
        source: "/email",
        destination:
          "/fr?utm_source=email&utm_medium=candidature&utm_campaign=portfolio2025",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
