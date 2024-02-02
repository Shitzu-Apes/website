/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/shitzu-website" : "",
};

export default nextConfig;
