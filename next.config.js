/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ctfassets.imgix.net",
        port: "",
        pathname: "/vh7r69kgcki3/**",
      },
      {
        protocol: "https",
        hostname: "ctfassets.imgix.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
