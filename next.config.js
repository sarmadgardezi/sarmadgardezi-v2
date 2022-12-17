/** @type {import('next').NextConfig} */
module.exports = {
  typescript: {
  
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  images: {
    domains: [
      'img.youtube.com',
      'i.imgur.com',
      'i.ytimg.com',
    ],
  },
  async redirects() {
    return [
      {
        source: '/start-blog-in-pakistan-guide-2020',
        destination: '/blog/start-blog-in-pakistan-guide-2020',
        permanent: true,
      },
      {
        source: '/blog/earning/teenagers-make-money-pakistan/2709',
        destination: '/blog/teenagers-make-money-pakistan',
        permanent: true,
      },
      {
        source: '/blog/instagram/verify-instagram-account-pakistan/6578',
        destination: '/blog/verify-instagram-account-pakistan',
        permanent: true,
      },
      {
        source: '/blog/freelancing/photographers-earn-money-pakistan/7147',
        destination: '/blog/photographers-earn-money-pakistan',
        permanent: true,
      },
      {
        source: '/blog/earning/earn-money-shutterstock-pakistan/2580',
        destination: '/blog/earn-money-shutterstock-pakistan',
        permanent: true,
      },
    ]
  },
  
}

const config = {
  siteUrl: 'https://sarmadgardezi.com',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap-index.xml'], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://example.com/sitemap/sitemap-index.xml', // <==== Add here
    ],
  },
}
