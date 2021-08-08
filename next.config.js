const path = require('path');
const withImages = require('next-images');

module.exports = withImages({
   reactStrictMode: true,
   sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
   },
   webpack(config, options) {
      return config;
   },
});
