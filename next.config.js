/**
 * @type {import('next').NextConfig}
 */
const config = {
  reactStrictMode: true,
  output: "standalone",
  experimental: {
    newNextLinkBehavior: true,
  },
};

module.exports = config;
