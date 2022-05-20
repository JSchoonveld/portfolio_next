/** @type {import('next').NextConfig} */

require("dotenv").config();

const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
    reactStrictMode: true,
    images: {
        loader: "default",
        domains: ["localhost"],
    },
    i18n: {
        locales: ["en", "nl"],
        defaultLocale: "nl",
    },
    nextConfig
};
