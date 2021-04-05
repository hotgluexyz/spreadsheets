const withImages = require("next-images");
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['gluestick-elements']);

module.exports = withPlugins([
    withTM,
    [
        withImages,
        {
            exclude: /\.svg$/
        }
    ]
],
{
    webpack: (config) => {
        config.module.rules.push({
          test: /\.svg$/,
          use: ['@svgr/webpack']
        });
    
        return config;
    }
});
