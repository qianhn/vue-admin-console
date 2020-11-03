/*
 * @Author: qianhn@neusoft.com
 * @Date: 2020年10月27日13时16分39秒
 * @LastEditTime: 2020年11月02日09时54分05秒
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @多读书多看报少吃零食多睡觉
 */
import Service from '@service'
const menu =  new Service('api/layOutMenu')
const permission = new Service('api/permission')
const permissonRouters = new Service('api/permissionRouters')
const  layOutService = {
    getMenu:menu.mock(),
    getPermission:permission.mock(),
    getPermisssionRouters:permissonRouters.mock()
}
export default layOutService

