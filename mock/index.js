/*
 * @Author: qianhn@neusoft.com
 * @Date: 2020年10月27日09时05分40秒
 * @LastEditTime: 2020年11月02日15时33分21秒
 * @LastEditors: Please set LastEditors
 * @Description:
 * @多读书多看报少吃零食多睡觉
 */
const layOut = require('./layOut')
const login = require('./login')
const mocks = [...layOut,...login]
module.exports = {
    mocks
}
