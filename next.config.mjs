/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  output: "export",
  basePath: process.env.BASEPATH,
};

export default nextConfig;
