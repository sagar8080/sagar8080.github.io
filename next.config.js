const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // GitHub User Pages (`username.github.io` repo) publishes `out/` at the site root — not under `/repo-name`.
  // A non-empty basePath breaks JS/CSS URLs (404) on https://sagar8080.github.io/ and custom domains.
  basePath: '',
  assetPrefix: '',
  // Turbopack (default in Next 16) can mis-infer the workspace root; lock it to this package.
  turbopack: {
    root: path.resolve(__dirname),
  },
}

module.exports = nextConfig
