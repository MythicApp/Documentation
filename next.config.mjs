import createMDX from 'fumadocs-mdx/config';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  output: "export",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default withMDX(config);
