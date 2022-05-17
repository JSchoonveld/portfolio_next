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
    nextConfig
};

// module.exports = nextConfig
