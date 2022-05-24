/** @type {import('next').NextConfig} */

require("dotenv").config();
const withCss = require("@zeit/next-css");
const withPurgeCss = require("next-purgecss");
module.exports = withCss(withPurgeCss());
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
    reactStrictMode: true,
    images: {
        loader: "default",
        domains: ["localhost"],
        formats: ['image/webp'],
    },
    i18n: {
        locales: ["en", "nl"],
        defaultLocale: "nl",
    },
    nextConfig,
    webpack5: true,
    webpack: (config) => {
        config.resolve.fallback = { fs: false };

        return config;
    },
};
