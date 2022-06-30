/**
 * @type {import('next').NextConfig}
 */
const config = {
  reactStrictMode: true,

  experimental: {
    outputStandalone: true,
    newNextLinkBehavior: true,
  },
};

module.exports = config;
