/*
 * @Author: qianhn@neusoft.com
 * @Date: 2020年10月26日13时07分31秒
 * @LastEditTime: 2020年11月02日17时55分02秒
 * @LastEditors: Please set LastEditors
 * @Description:
 * @多读书多看报少吃零食多睡觉
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import LayOut from '@layOut'
// 路由这 的设计 应该是根据权限 分配 不同的路由 其中有 普通的无权限路由
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: LayOut,
        name: 'layOut',
        meta: {
            title: '首页'
        },
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                meta: {
                    title: '首页',
                    active: true
                },
                component: () => import(/* webpackChunkName: "dashboard" */ '@views/dashboard/')
            },
        ],
        redirect: 'dashboard'
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            title: '登录'
        },
        component: () => import(/* webpackChunkName: "login" */ '@views/login/')
    },
    {
        path: '/404',
        name: '404',
        meta: {
            title: '出错了'
        },
        component: () => import(/* webpackChunkName: "404" */ '@views/404/')
    },
    {
        path: '/401',
        name: '401',
        meta: {
            title: '出错了'
        },
        component: () => import(/* webpackChunkName: "401" */ '@views/401/')
    },
    // {
    //     path: '*',
    //     redirect: '404'
    // }
]

const router = new VueRouter({
    routes,
    // 路由跳转时 滚动到顶部
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})

export default router
