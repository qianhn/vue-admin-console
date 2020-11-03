/*
 * @Author: qianhn@neusoft.com
 * @Date: 2020年10月26日13时16分05秒
 * @LastEditTime: 2020年10月27日10时22分06秒
 * @LastEditors: Please set LastEditors
 * @Description:
 * @多读书多看报少吃零食多睡觉
 */
const baseConfig = {
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'static',
    filenameHashing: true,
    // map 文件 用于 项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错。 有了map就可以像未加密的代码一样，准确的输出是哪一行哪一列有错，线上版本不需要
    productionSourceMap: true,
    css: {}
}
module.exports = baseConfig
    