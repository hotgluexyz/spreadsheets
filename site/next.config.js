const isProd = process.env.NODE_ENV === 'production';
const withImages = require('next-images');

module.exports = withImages({
    assetPrefix: isProd ? 'https://cdn.statically.io/gh/hotgluexyz/gluestick/website/' : ''
});
