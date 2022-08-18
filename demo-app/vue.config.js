
module.exports = {
    configureWebpack: {
        optimization: {
            splitChunks: false
        }
    },
    chainWebpack: (config) => {
        config.resolve.symlinks(false);
        config.externals({
            vue: 'Vue',
        });
    }    
}