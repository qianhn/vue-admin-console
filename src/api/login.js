/*
 * @Author: qianhn@neusoft.com
 * @Date: 2020年11月02日15时30分48秒
 * @LastEditTime: 2020年11月02日15时56分12秒
 * @LastEditors: Please set LastEditors
 * @Description:
 * @多读书多看报少吃零食多睡觉
 */
import Service from '@service'
const loginService = {
    submit: new Service('/api/login')
}
export default loginService
