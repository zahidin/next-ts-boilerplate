const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
    };
  },
};

module.exports = withPlugins([withSass, withImages]);
