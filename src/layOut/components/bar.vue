<!--
 * @Author: qianhn@neusoft.com
 * @Date: 2020年10月27日11时00分14秒
 * @LastEditTime: 2020年11月02日13时34分17秒
 * @LastEditors: Please set LastEditors
 * @Description:  
 * @多读书多看报少吃零食多睡觉
-->
<template>
    <div class="bar-container">
        <vuescroll :ops="ops">
            <transition-group name="tags" class="tags">
                <span :class="item.active ? 'tags-container-active' : 'tags-container'" v-for="(item, index) in cacheRouters" :key="item.name" @click="goRouter(item)">
                    <span class="dot" v-show="item.active"></span>
                    <span style="margin-left:5px;margin-right:5px">{{ item.title }}</span>
                    <a-icon type="close" @click.stop="closeRouter(item, index)" class="close" />
                </span>
            </transition-group>
        </vuescroll>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import vuescroll from 'vuescroll'
export default {
    data() {
        return {
            ops: {
                bar: {
                    background: '#e6f7ff'
                },
                scrollPanel: {
                    scrollingY: false
                }
            }
        }
    },
    components: {
        vuescroll
    },
    methods: {
        ...mapMutations(['setCacheRouters']),
        goRouter(item) {
            if (this.$route.name === item.name) {
                return
            }
            this.$router.push({
                name: item.name
            })
        },
        closeRouter(item, index) {
            if (item.name === 'dashboard') {
                return
            }
            let filterRouter = this.cacheRouters.filter(i => item.name !== i.name)
            if (item.active) {
                if (this.cacheRouters.length - 1 === index) {
                    this.$router.push({
                        name: this.cacheRouters[index - 1]['name']
                    })
                } else {
                    this.$router.push({
                        name: this.cacheRouters[index + 1]['name']
                    })
                }
            }
            this.setCacheRouters(filterRouter)
        }
    },
    computed: {
        ...mapState({
            cacheRouters: store => store.cacheRouters
        })
    },
    watch: {},
    created() {},
    mounted() {},
    destoryed() {}
}
</script>
<style lang="less" scoped>
.bar-container {
    // .flex-row();
    // height: 40px;
    border-bottom: 1px solid #d8dce5;
    box-shadow: @boxShadowHeavy;
    align-items: center;
    width: 100%;
    .tags-container {
        height: 26px;
        line-height: 26px;
        border: 1px solid #d8dce5;
        color: #495060;
        margin: 0 5px;
        font-size: 12px;
        padding: 0 8px;
        box-sizing: border-box;
        white-space: nowrap;
        display: inline-block;
        cursor: pointer;
        border-radius: 2px;
    }
    .tags {
        .flex-row();
        > :first-child {
            margin-left: 15px;
        }
        align-items: center;
        height: 40px;
    }
    .tags-container-active {
        cursor: pointer;
        height: 26px;
        line-height: 26px;
        border: 1px solid #1890ff;
        color: #fff;
        margin: 0 5px;
        font-size: 12px;
        padding: 0 8px;
        background: #1890ff;
        white-space: nowrap;
        display: inline-block;
        border-radius: 2px;
        .dot {
            width: 10px;
            height: 10px;
            line-height: 26px;
            background: #fff;
            border-radius: 100%;
            display: inline-block;
        }
    }
    .close {
        line-height: 26px;
        font-size: 8px;
        transition: all 0.3s;
        &:hover {
            font-size: 10px;
        }
    }
}
</style>
