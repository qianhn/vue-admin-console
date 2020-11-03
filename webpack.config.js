/*
 * @Author: qianhn@neusoft.com
 * @Date: 2020年10月26日13时15分45秒
 * @LastEditTime: 2020年11月02日13时55分44秒
 * @LastEditors: Please set LastEditors
 * @Description: webpack细度配置 文件
 * @多读书多看报少吃零食多睡觉
 */
const Timestamp = new Date().getTime()
const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')
function resolve(dir) {
    // __dirname:总是指向被执行 js 文件的绝对路径
    return path.join(__dirname, dir)
}
module.exports = {
    configureWebpack: {
        // output: {
        //     //更改 js 文件 解决 缓存 问题
        //     filename: `[name].${process.env.VUE_APP_Version}.${Timestamp}.js`,
        //     chunkFilename: `[name].${process.env.VUE_APP_Version}.${Timestamp}.js`
        // },
        plugins: [
            new CompressionPlugin({
                test: /\.(js|css)(\?.*)?$/i, //需要压缩的文件正则
                threshold: 10240, //文件大小大于这个值时启用压缩
                deleteOriginalAssets: false //压缩后保留原文件
            })
        ],
        // 设置文件别名
        resolve: {
            alias: {
                '@': resolve('src'),
                '@assets': resolve('src/assets'),
                '@store': resolve('src/store'),
                '@views': resolve('src/views'),
                '@api': resolve('src/api'),
                '@components': resolve('src/components'),
                '@utils': resolve('src/utils'),
                '@styles': resolve('src/styles'),
                '@service': resolve('src/service'),
                '@components':resolve('src/components'),
                '@config': resolve('src/config'),
                '@layOut': resolve('src/layOut'),
                '@image':resolve('src/assets/image')
            }
        }
    },
    chainWebpack(config) {
        config.plugin('preload').tap(() => [
            {
                rel: 'preload',
                // to ignore runtime.js
                // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
                fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
                include: 'initial'
            }
        ]);
        config.module
            .rule('images')
            .use('url-loader')
            .loader('url-loader')
            .tap(options => Object.assign(options, { limit: 100 }))
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
        config.optimization.runtimeChunk('single')
    }
}
// 动态在类型文件 中 @import mixins.less 混入 因为 例如混入 变量 这种特性 在单文件组件中 无法识别
function addStyleResource(rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [path.resolve(__dirname, './src/styles/mixins.less'), path.resolve(__dirname, './src/styles/var.less')]
        })
}

