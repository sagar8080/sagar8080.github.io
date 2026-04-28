const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/sagar8080.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/sagar8080.github.io/' : '',
  // Turbopack (default in Next 16) can mis-infer the workspace root; lock it to this package.
  turbopack: {
    root: path.resolve(__dirname),
  },
}

module.exports = nextConfig
