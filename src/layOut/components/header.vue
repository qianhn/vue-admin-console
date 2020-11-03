<!--
 * @Author: qianhn@neusoft.com
 * @Date: 2020年10月27日10时59分47秒
 * @LastEditTime: 2020年11月02日17时59分00秒
 * @LastEditors: Please set LastEditors
 * @Description: header
 * @多读书多看报少吃零食多睡觉
-->
<template>
    <div class="header-container">
        <div class="header-left">
            <a-button type="primary" @click="toggleCollapsed" class="butt">
                <a-icon :type="menuCollapsed ? 'menu-unfold' : 'menu-fold'" />
            </a-button>
            <!-- 这个组件 因为会检查 下面 的 元素 是不是只包含a-breadcrumb-item  和  sp / 所以会报错 需要去掉 源码中 breadcrumb.js 中 154 行代码 -->
            <a-breadcrumb separator="/" :routes="routes">
                <transition-group name="breadcrumb">
                    <a-breadcrumb-item v-for="(item, index) of matched" :key="item.name" @click="goRouter(item.name, index)">
                        <span @click="goRouter(item.name, index)">{{ item.meta.title }}</span>
                    </a-breadcrumb-item>
                </transition-group>
            </a-breadcrumb>
        </div>
        <div class="header-right">
            <SearchText></SearchText>
            <ScreenFull></ScreenFull>
            <a-popover placement="bottom">
                <template v-slot:content>
                    <p>Content</p>
                    <p>Content</p>
                </template>
                <template v-slot:title>
                    <span>Title</span>
                </template>
                <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </a-popover>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import ScreenFull from '@components/ScreenFull'
import SearchText from '@components/SearchText'
export default {
    data() {
        return {}
    },
    components: {
        ScreenFull,
        SearchText
    },
    methods: {
        ...mapMutations(['setMenuCollapsed']),
        // 折叠菜单
        toggleCollapsed() {
            this.setMenuCollapsed(!this.menuCollapsed)
        },
        goRouter(name, index) {
            if (index !== this.matched.length - 1) {
                this.$router.push({
                    name: name
                })
            }
        }
    },
    computed: {
        ...mapState({
            menuCollapsed: store => store.menuCollapsed
        }),
        matched: {
            get() {
                return this.$route.matched[1].name === 'dashboard' ? [this.$route.matched[0]] : this.$route.matched
            }
        },
        routes: {
            get() {
                return this.$router.options.routers
            }
        }
    },
    watch: {},
    created() {},
    mounted() {},
    destoryed() {}
}
</script>
<style lang="less" scoped>
.header-container {
    .flex-row();
    justify-content: space-between;
    padding: 10px;
    height: 50px;
    box-shadow: @boxShadowLight;
    .header-left {
        .flex-row();
        align-items: center;
        > :first-child {
            margin-right: 10px;
        }
    }
    .butt {
        .big-hover();
    }
    .header-right {
        .flex-row();
        align-items: center;
        > * {
            margin: 0 5px;
            cursor: pointer;
        }
    }
}
</style>
