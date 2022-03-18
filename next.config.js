/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "avatars.dicebear.com",
      "demos.creative-tim.com",
      "cdn.onlinewebfonts.com",
    ],
  },
};

module.exports = nextConfig;
