/*
 * @Author: qianhn@neusoft.com
 * @Date: 2020年10月26日13时07分31秒
 * @LastEditTime: 2020年11月02日17时59分37秒
 * @LastEditors: Please set LastEditors
 * @Description:
 * @多读书多看报少吃零食多睡觉
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './router/router.guard'
import './styles/index.less'
import { Menu, Icon,Button,Breadcrumb,Select,Tabs,Input,Form,FormModel,message,Avatar,Popover} from 'ant-design-vue'
Vue.config.productionTip = false
Vue.use(Menu)
Vue.use(Icon)
Vue.use(Button)
Vue.use(Breadcrumb)
Vue.use(Select)
Vue.use(Tabs)
Vue.use(Input)
Vue.use(FormModel)
Vue.use(FormModel)
Vue.use(Avatar)
Vue.use(Popover)
Vue.prototype.$message = message
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
