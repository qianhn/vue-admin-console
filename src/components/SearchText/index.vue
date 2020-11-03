<!--
 * @Author: qianhn@neusoft.com
 * @Date: 2020年10月30日13时07分56秒
 * @LastEditTime: 2020年10月30日13时57分03秒
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @多读书多看报少吃零食多睡觉
-->
<template>
    <div class="search-text-conatiner">
        <a-icon type="search" :style="{ fontSize: '20px' }" class="butt" @click="expandSearch" />
        <!-- label-in-value -->
        <a-select
            show-search
            :value="SearchValue"
            :show-arrow="false"
            placeholder="搜索项"
            :filter-option="false"
            :style="{ width: ShowSearch ? '200px' : '0px', transition: 'all .3s', opacity: ShowSearch ? 1 : 0 }"
            @search="fetchText"
            @change="handleChange"
        >
            <!-- :not-found-content="fetching ? undefined : null" -->
            <a-spin v-if="fetching" slot="notFoundContent" size="small" />
            <a-select-option v-for="d in searchData" :key="d.value">
                {{ d.text }}
            </a-select-option>
        </a-select>
    </div>
</template>

<script>
export default {
    name: 'SearchText',
    data() {
        return {
            ShowSearch: false,
            SearchValue: undefined,
            searchData: [],
            fetching: false
        }
    },
    components: {},
    methods: {
        expandSearch() {
            this.ShowSearch = !this.ShowSearch
        },
        fetchText() {},
        handleChange(value) {
            debugger
            console.log(value)
            this.SearchValue = value
        }
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    destoryed() {}
}
</script>
<style lang="less" scoped>
.search-text-conatiner {
    .flex-row();
    align-items: center;
    > * {
        margin: 5px;
    }
    > :last-child {
        margin-right: 0px;
    }
}
</style>
