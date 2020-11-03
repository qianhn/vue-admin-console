<!--
 * @Author: qianhn@neusoft.com
 * @Date: 2020年10月30日10时40分05秒
 * @LastEditTime: 2020年10月30日13时04分00秒
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @多读书多看报少吃零食多睡觉
-->
<template>
    <a-icon :type="isFullScreen ? 'fullscreen-exit' : 'fullscreen'" :style="{ fontSize: '20px' }" class="butt" @click="handleFullScreen"  />
</template>

<script>
import screenfull from 'screenfull'
export default {
    name: 'ScreenFull',
    data() {
        return {
            isFullScreen: false
        }
    },
    components: {},
    methods: {
        handleFullScreen() {
            if (!screenfull.enabled) {
                console.error('不支持全屏')
                return false
            }
            screenfull.toggle()
        },
        change(val) {
            console.log( screenfull.isFullscreen)
            this.isFullScreen = screenfull.isFullscreen
            console.log(this.isFullScreen)
        },
        init() {
            if (screenfull.enabled) {
                screenfull.on('change',this.change)
            }
        },
        destroy() {
            if (screenfull.enabled) {
                screenfull.off('change', this.change)
            }
        }
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {
        this.init()
    },
    destoryed() {
        this.destroy()
    }
}
</script>
<style lang="less" scoped></style>
