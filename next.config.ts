import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['next-mdx-remote'],
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
