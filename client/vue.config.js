module.exports = {
    configureWebpack: {
        devServer: {
            watchOptions: {
                poll: true
            },
            proxy: {
                '^/api': {
                    target: process.env.API_BASEURL
                }
            }
        }
    }
}