module.exports = {
  siteUrl: 'https://zivlar.com',
  generateRobotsTxt: true,
  exclude: ['/admin'],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};