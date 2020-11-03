/*
 * @Author: qianhn@neusoft.com
 * @Date: 2020年10月27日09时10分09秒
 * @LastEditTime: 2020年11月02日17时11分31秒
 * @LastEditors: Please set LastEditors
 * @Description:
 * @多读书多看报少吃零食多睡觉
 */
module.exports = [
    {
        url: '/mock/api/layOutMenu',
        response: config => {
            return {
                'list|8': [
                    {
                        id: '@id',
                        title: '首页',
                        name: 'dashboard',
                        icon: 'bar-chart'
                    },
                    {
                        id: '@id',
                        title: '测试',
                        name: 'test',
                        icon: 'qq'
                    },
                    {
                        id: '@id',
                        title: '测试2',
                        name: 'test2',
                        icon: 'alipay'
                    },
                    {
                        id: '@id',
                        title: '测试3',
                        name: 'test3',
                        icon: 'zhihu'
                    },
                    {
                        id: '@id',
                        title: '@csentence(3,5)',
                        'list|0-5': [
                            {
                                id: '@id',
                                title: '@csentence(3,5)'
                            }
                        ],
                        icon: 'zhihu'
                    },
                    {
                        id: '@id',
                        title: '@csentence(3,5)',
                        icon: 'zhihu'
                    }
                ]
            }
        },
        type: 'get'
    },
    {
        url: '/mock/api/permissionRouters',
        type: 'get',
        response: config => {
            return {
                response:[
                    {
                        path: '/test',
                        name: 'test',
                        meta: {
                            title: '测试',
                            active: false,
                            icon:'alipay'
                        },
                        component: 'views/test/'
                    },
                    {
                        path: '/test2',
                        name: 'test2',
                        meta: {
                            title: '测试2',
                            active: false,
                            icon: 'qq'
                        },
                        component: 'views/test2/'
                    },
                    {
                        path: '/test3',
                        name: 'test3',
                        meta: {
                            title: '测试3',
                            active: false,
                            icon:'zhihu'
                        },
                        component: 'views/test3/'
                    }
                ]
            }
        }
    }
]
