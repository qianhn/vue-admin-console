<!--
 * @Author: qianhn@neusoft.com
 * @Date: 2020年10月30日14时19分51秒
 * @LastEditTime: 2020年10月30日14时19分57秒
 * @LastEditors: 
 * @Description: 
 * @多读书多看报少吃零食多睡觉
-->
<template>
    <a-breadcrumb separator="/" :routes="routes">
        <transition-group name="breadcrumb">
            <a-breadcrumb-item v-for="(item, index) of matched" :key="item.name" @click="goRouter(item.name, index)">
                <span @click="goRouter(item.name, index)">{{ item.meta.title }}</span>
            </a-breadcrumb-item>
        </transition-group>
    </a-breadcrumb>
</template>

<script>
export default {
    data() {
        return {}
    },
    components: {},
    methods: {},
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    destoryed() {}
}
</script>
<style lang="less" scoped></style>
