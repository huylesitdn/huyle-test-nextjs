/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d11unjture0ske.cloudfront.net",
        port: "",
        pathname: "/**",
      },
    ],
    unoptimized: true,
  },
  // distDir: "dist",
};

module.exports = nextConfig;
