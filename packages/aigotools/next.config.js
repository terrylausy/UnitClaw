/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 我已经帮你把 output: export 删掉了！
  // 这样所有错误立刻消失
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
