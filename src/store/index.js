import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        //控制菜单折叠
        menuCollapsed: true,
        // 权限路由 
        permissionRouters: [],
        // 缓存路由曾经点开的路由
        cacheRouters: []
    },
    mutations: {
        // 设置菜单是否折叠
        setMenuCollapsed(state, val) {
            state.menuCollapsed = val
        },
        // 设置tags上面缓存路由记录
        setCacheRouters(state, val) {
            state.cacheRouters = val
        },
        // 设置用户权限路由
        setPermissionRouters(state, val) {
            state.permissionRouters = val
        },
    },
    actions: {},
    modules: {},
    // plugins: [persistedState()]
})
