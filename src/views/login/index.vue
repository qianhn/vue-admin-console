<!--
 * @Author: qianhn@neusoft.com
 * @Date: 2020年10月26日13时53分49秒
 * @LastEditTime: 2020年11月02日16时35分28秒
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @多读书多看报少吃零食多睡觉
-->
<template>
    <div class="login-container">
        <div class="main-login">
            <div class="main-left"></div>
            <div class="main-right">
                <a-tabs default-active-key="1" size="large" :tabBarStyle="{ ['font-size']: '20px' }">
                    <a-tab-pane key="1" tab="账号密码登录" style="font-size:20px">
                        <div class="login-content">
                            <a-form-model ref="ruleForm" :model="form" :rules="rules">
                                <a-form-model-item ref="username" label="用户名" prop="username">
                                    <a-input placeholder="请输入用户名" size="large" style="  margin-bottom: 20px;" v-model="form.username">
                                        <a-icon slot="prefix" type="user" />
                                    </a-input>
                                </a-form-model-item>
                                <a-form-model-item ref="password" label="密码" prop="password">
                                    <a-input-password placeholder="请输入密码" size="large" v-model="form.password">
                                        <a-icon slot="prefix" type="lock" />
                                    </a-input-password>
                                </a-form-model-item>
                            </a-form-model>
                            <a-button type="primary" block size="large" class="login-bt" :disabled="buttonDisabled" @click="loginSubmit">
                                登录
                            </a-button>
                        </div>
                    </a-tab-pane>
                </a-tabs>
            </div>
        </div>
    </div>
</template>

<script>
import service from '@api/login'
export default {
    data() {
        return {
            // buttonDisabled: true,
            form: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' }
                    // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
                ],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
            }
        }
    },
    components: {},
    methods: {
        loginSubmit() {
            let body = {
                username: this.form.username,
                password: this.form.password
            }
            service.submit
                .save(body)
                .then(res => {
                    if (res.Permission) {
                        localStorage.setItem('Permission', res.Permission)
                        this.$router.push({
                            name: 'dashboard'
                        })
                    } else {
                        this.$message.error('密码错误')
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }
    },
    computed: {
        buttonDisabled: {
            get() {
                return !this.form.username || !this.form.password
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
.login-container {
    // background: url('~@image/login/background.png');
    height: 100%;
    width: 100%;
    .bg-cover();
    .main-login {
        width: 920px;
        height: 600px;
        top: 50%;
        left: 50%;
        position: absolute;
        transform: translate(-50%, -50%);
        overflow: hidden;
        box-shadow: 0 0 15px rgba(0, 138, 233, 0.15);
        border-radius: 10px;
        background: #fff;
        .flex-row();
        .main-left {
            width: 380px;
            .bg-cover();
            background: url('~@image/login/left.png');
        }
        .main-right {
            padding: 50px 60px;
            flex: 1;
            text-align: left;
            position: relative;
            height: 600px;
            .login-content {
                padding-top: 10px;
                height: 400px;
            }
        }
        .login-bt {
            position: absolute;
            bottom: 20px;
            width: 100%;
            left: 0px;
        }
    }
}
</style>
