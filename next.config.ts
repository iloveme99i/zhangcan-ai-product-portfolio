import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const githubBasePath = isGitHubPages ? "/zhangcan-ai-product-portfolio" : "";

const nextConfig: NextConfig = {
  ...(isGitHubPages ? { output: "export" as const } : {}),
  basePath: "",
  assetPrefix: githubBasePath,
  trailingSlash: false,
};

export default nextConfig;
