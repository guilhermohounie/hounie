/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl:
    process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://www.hounie.me",
  generateRobotsTxt: true,
};

module.exports = config;
