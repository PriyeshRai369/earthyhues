module.exports = {
    siteUrl: 'https://earthyhues-sage.vercel.app/',
    generateRobotsTxt: true,
    transform: async (config, path) => {
        return {
          loc: path, 
          changefreq: 'daily',
          priority: 0.7,
          lastmod: new Date().toISOString(),
        };
      },
  };