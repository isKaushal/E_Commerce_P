/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    NEXTAUTH_URI: "mongodb://localhost:27017/Ecommerce_website",
    NEXTAUTH_SECRET: "o5iww8ND2bJc75elZsNmI0DvyArFRcLIDZgwdREVcEw=",
  },
};

module.exports = nextConfig;
