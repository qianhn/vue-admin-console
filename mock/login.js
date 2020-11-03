/*
 * @Author: qianhn@neusoft.com
 * @Date: 2020年10月29日17时16分51秒
 * @LastEditTime: 2020年11月02日15时40分30秒
 * @LastEditors: Please set LastEditors
 * @Description:
 * @多读书多看报少吃零食多睡觉
 */
const login = [
    {
        type: 'post',
        url: '/mock/api/login',
        response: req => {
            console.log(req.body)
            if (req.body.username === 'admin' && req.body.password == '123456') {
                return {
                    Permission: 'admin'
                }
            } else {
                return {
                    Permission: ''
                }
            }
        }
    }
]
module.exports = login
