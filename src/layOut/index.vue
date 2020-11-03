<!--
 * @Author: qianhn@neusoft.com
 * @Date: 2020年10月26日13时46分57秒
 * @LastEditTime: 2020年10月30日14时26分18秒
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @多读书多看报少吃零食多睡觉
-->
<template>
    <div class="layOut-container">
        <LMenu class="scroll-wrapper" :menuData="menuData"></LMenu>
        <div class="right-scorll-wrap" :style="{ ['margin-left']: menuCollapsed ? '86px' : '210px' }">
            <vuescroll :ops="ops" style="width:100%">
                <Lheader></Lheader>
                <LBar></LBar>
                <transition name="routerChange">
                    <router-view></router-view>
                </transition>
            </vuescroll>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
// import { Menu,Icon} from 'ant-design-vue'
import LMenu from './components/menu'
import Lheader from './components/header'
import LBar from './components/bar'
import layOutService from '../api/layOut'
import vuescroll from 'vuescroll'
export default {
    data() {
        return {
            menuData: [],
            ops: {
                bar: {
                    background: '#e6f7ff'
                },
                scrollPanel: {
                    scrollingX: false
                }
            }
        }
    },
    components: {
        LMenu,
        Lheader,
        LBar,
        vuescroll
    },
    methods: {
        fetchMenuData() {
            layOutService.getMenu
                .then(res => {
                    debugger
                    this.menuData = res.list
                })
                .catch(err => {})
        }
    },
    computed: {
        ...mapState({
            menuCollapsed: store => store.menuCollapsed
        })
    },
    watch: {},
    created() {
        this.fetchMenuData()
    },
    mounted() {},
    destoryed() {}
}
</script>
<style lang="less" scoped>
.layOut-container {
    width: 100%;
    // display: flex;
    height: 100%;
    .scroll-wrapper {
        // width: 210px;
        height: 100%;
        position: fixed;
        left: 0;
    }
    .right-scorll-wrap {
        position: relative;
        transition: all 0.3s;
        .flex-col();
    }
    @media screen and (max-width: 500px) {
        .right-scorll-wrap {
            margin-left: 0px !important;
        }
    }
}
</style>
