/*
 * @Author: qianhn@neusoft.com
 * @Date: 2020年10月26日13时16分27秒
 * @LastEditTime: 2020年11月03日09时21分55秒
 * @LastEditors: Please set LastEditors
 * @Description:
 * @多读书多看报少吃零食多睡觉
 */
const port = process.env.PORT || 8989
const devServer = {
    port: port,
    // 启动之后 自动打开浏览器
    open: true,
    // 报错的时候全屏显示错误
    overlay: {
        warnings: false,
        errors: true
    },
    watchOptions: {
        poll: true
    },
    // disableHostCheck: true,
    // hot: true,
    // hotOnly: false,
    // https: false,
    //代理
    // proxy: {
    //     '/': {
    //         target: '/',
    //         ws: false,
    //         changeOrigin: true
    //     }
    // },
    before: require('./mock/devServer.js')
}
module.exports = devServer
