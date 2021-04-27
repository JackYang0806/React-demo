const path = require('path');
module.exports = {
    webpack: {
        alias: {
            '@': path.join(__dirname, 'src')
        }
    },
    chainWebpack(config) {
        config.module
            .rule('scss')
            .test(/\.s[ac]ss$/)
            .use('css-loader')
            .use('style-loader')
            .use('sass-loader')
            .end()
    }
}