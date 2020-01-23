const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    lintOnSave: true,
    configureWebpack: config => {
        config.resolve = {
            extensions: ['.js', '.ts', '.vue'],
            alias: {
                '@': resolve('src'),
                '@assets': resolve('src/assets')
            }
        };
    }
};
