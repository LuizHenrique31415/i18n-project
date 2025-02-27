import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: "pt",
    locales: ["pt", "en", "es"],
  },
};

export default nextConfig;
