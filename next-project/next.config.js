/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config,options) => {
    console.log(config,'-------')
    return config
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://weather.cma.cn',
        pathRewrite: { '^/api': '/api' },
      },
    },
  }
}

module.exports = nextConfig
