/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: 'export', // 关键：强制静态导出，完全不依赖服务器
  trailingSlash: true,
}

module.exports = nextConfig
