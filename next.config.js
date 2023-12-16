/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    NEXTAUTH_URI: "mongodb://localhost:27017/Ecommerce_website",
    NEXTAUTH_SECRET: "nextjsauthanticationbykaushalkumnarsoni",
  },
};

module.exports = nextConfig;
