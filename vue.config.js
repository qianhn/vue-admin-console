/*
 * @Author: qianhn@neusoft.com
 * @Date: 2020年10月26日13时10分54秒
 * @LastEditTime: 2020年10月26日15时14分50秒
 * @LastEditors: Please set LastEditors
 * @Description: vue cli 配置 
 * @多读书多看报少吃零食多睡觉
 */
const webpackConfig = require("./webpack.config");
const baseConfig = require("./base.config");
const devServerConfig = require("./devServer.config");
module.exports = {
    ...webpackConfig,
    ...baseConfig,
    devServer:devServerConfig
};
