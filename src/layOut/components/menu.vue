<!--
 * @Author: qianhn@neusoft.com
 * @Date: 2020年10月27日11时00分01秒
 * @LastEditTime: 2020年11月02日13时32分55秒
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @多读书多看报少吃零食多睡觉
-->
<template>
    <div class="scroll-wrapper">
        <vuescroll :ops="ops">
            <a-menu
                class="menu-container"
                :style="{ width: menuCollapsed ? '86px' : '210px' }"
                :default-selected-keys="['1']"
                :open-keys.sync="openKeys"
                mode="inline"
                @click="handleClick"
                :inline-collapsed="menuCollapsed"
                theme="dark"
            >
                <component @titleClick="handleClick(item)" v-for="item in menuRouters" :key="item.name" :is="item.list ? 'a-sub-menu' : 'a-menu-item'">
                    <template v-if="!item.list">
                        <a-icon :type="item.meta.icon" />
                        <span>
                            {{ item.meta.title }}
                        </span>
                    </template>
                    <template v-if="item.list">
                        <span slot="title"
                            ><a-icon :type="item.meta.icon" /><span>{{ item.meta.title }}</span></span
                        >
                        <a-menu-item v-for="child in item.list" :key="child.id">
                            <a-icon :type="item.icon" /><span>{{ child.title }}</span>
                        </a-menu-item>
                    </template>
                </component>
            </a-menu>
        </vuescroll>
    </div>
</template>

<script>
import vuescroll from 'vuescroll'
import { mapState, mapMutations } from 'vuex'
export default {
    props: {
        menuData: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            current: ['mail'],
            openKeys: ['sub1'],
            // 配置项
            ops: {
                bar: {
                    background: '#e6f7ff'
                }
            },
            collapsed: true
        }
    },
    components: {
        vuescroll
    },
    methods: {
        ...mapMutations(['setMenuCollapsed']),
        handleClick({ key, domEvent }) {
            
            let name = this.menuRouters.filter(item => item.name === key)[0].name
            if (this.$route.name === name) {
                return
            }
            this.$router.push({
                name: this.menuRouters.filter(item => item.name === key)[0].name
            })
        },
        titleClick({ key, domEvent }, val) {
            debugger
            console.log('click', e)
        },
        toggleCollapsed() {
            this.collapsed = !this.collapsed
        },
        // 菜单根据窗口大小变化
        menuSizeChangeOnResize() {
            window.addEventListener('resize', () => {
                let width = document.documentElement.clientWidth || document.body.clientWidth
                if (width <= 1024) {
                    this.setMenuCollapsed(true)
                }
            })
        }
    },
    computed: {
        ...mapState({
            menuCollapsed: store => store.menuCollapsed,
            permissionRouters: store => store.permissionRouters
        }),
        menuRouters: {
            get() {
                return [{
                    path: '/dashboard',
                    name: 'dashboard',
                    meta: {
                        title: '首页',
                        active: true,
                        icon: 'bar-chart'
                    },
                    component: '@views/dashboard/'
                }].concat(this.permissionRouters)
            }
        }
    },
    watch: {},
    created() {
        console.log(this.menuRouters)
    },
    mounted() {
        this.menuSizeChangeOnResize()
    },
    destoryed() {}
}
</script>
<style lang="less" scoped>
.scroll-wrapper {
    // width: 210px;
    height: 100%;
    .menu-container {
        min-height: 100vh;
        text-align: left;
        width: 210px;
    }
    @media screen and (max-width: 500px) {
        .menu-container {
            width: 0px !important;
        }
    }
}
</style>
