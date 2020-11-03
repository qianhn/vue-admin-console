/*
 * @Author: qianhn@neusoft.com
 * @Date: 2020年10月26日14时58分25秒
 * @LastEditTime: 2020年11月02日17时47分48秒
 * @LastEditors: Please set LastEditors
 * @Description: 路由守卫 权限控制
 * @多读书多看报少吃零食多睡觉
 */
import router from './index'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '@store'
import layOutService from '@api/layOut'
// 全局前置钩子
router.beforeEach((to, from, next) => {
    debugger
    // 进度条开始
    NProgress.start()
    setRouterPermission(next, to)
    setCacheRouter(to)
    to.meta.title ? (document.title = to.meta.title) : (document.title = from.meta.title)
})
// 全局前置钩子  所有组件内守卫和异步路由组件被解析之后
router.beforeResolve((from, to, next) => {
    next()
})
// 进入路由后
router.afterEach((to, from) => {
    // 进度条结束
    NProgress.done()
})
// 设置缓存路由信息
function setCacheRouter(toRouter) {
    let cacheRouters = store.state.cacheRouters
    let currentRouterTitle = toRouter.meta.title
    let currentRouterName = toRouter.name
    // 当没有缓存路由情况
    if (cacheRouters.length === 0) {
        // 不是首页 在缓存路由前多加一个 首页
        if (currentRouterName !== 'dashboard') {
            cacheRouters.unshift({
                title: '首页',
                active: false,
                name: 'dashboard'
            })
        }
    }
    // 判断是否有重复的缓存路由 有 相当于激活缓存路由的active
    if (cacheRouters.some(item => item.name === toRouter.name)) {
        cacheRouters.map(item => {
            if (item.name === toRouter.name) {
                item.active = true
            } else {
                item.active = false
            }
        })
    } else {
        if (currentRouterName !== 'login' && currentRouterName !== '404') {
            // 没有在末尾添加并激活active
            cacheRouters.map(item => {
                item.active = false
            })
            cacheRouters.push({
                title: currentRouterTitle,
                active: true,
                name: currentRouterName
            })
        }
    }
    store.commit('setCacheRouters', cacheRouters)
}
// 用户路由权限控制
function setRouterPermission(next, to) {
    // 本地存储的权限记录
    const Permission = localStorage.getItem('Permission')
    debugger
    if (Permission) {
        // 如果没有路由
        debugger
        if (store.state.permissionRouters.length === 0) {
            // Permission.id
            debugger
            layOutService.getPermisssionRouters
                .then(res => {
                    if (!check404Router(res.response, to.path) && to.path !== '/dashboard' && to.path !== '/login') {
                        next('/404')
                    }
                    debugger
                    store.commit('setPermissionRouters', res.response)
                    router.addRoutes(mergeRouter(res.response))
                    next(to.path)
                })
                .catch(err => {
                    next('/login')
                })
        } else {
            if (!check404Router(store.state.permissionRouters, to.path) && to.path !== '/dashboard' && to.path !== '/login' && to.path !== '/404') {
                next('/404')
            } else {
                next()
            }
        }
    } else {
        if (to.path === '/login') {
            next()
        } else {
            next('/login')
            NProgress.done()
        }
    }
}
// 将后端返回权限路由设置到routes 中
function mergeRouter(accessRouters) {
    accessRouters.forEach(item => {
        let url = item.component
        item.component = () => import(`../${url}index.vue`)
    })
    router.options.routes[0].children = [router.options.routes[0].children[0], ...accessRouters]
    return router.options.routes
}
// 检查是否是404 (此处突然想到一个问题 这种动态添加路由无法处理是具体的404 还是 401 两种状态 此处 可先把路由全部加载 后对比 后加入routers)
function check404Router(routers, toRouterPath) {
    return routers.find(router => {
        return router.path === toRouterPath
    })
}
