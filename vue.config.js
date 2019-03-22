module.exports = {
    devServer: {
        port: 8888,     // 端口
        proxy: {
            '/api': {
                target: 'http://192.168.99.210:8080',
                ws: false,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
    },
    outputDir: 'dist',
    lintOnSave: false,   // 取消 eslint 验证
    css: {
        loaderOptions: { // 向 CSS 相关的 loader 传递选项
            less: {
                javascriptEnabled: true,
                modifyVars: {
                    'primary-color': '#1DA57A',
                    'link-color': '#1DA57A',
                    'border-radius-base': '2px',
                }
            }
        }
    },
}