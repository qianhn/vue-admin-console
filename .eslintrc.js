/*
 * @Author: qianhn@neusoft.com
 * @Date: 2020年10月26日13时07分31秒
 * @LastEditTime: 2020年10月26日15时21分50秒
 * @LastEditors: 
 * @Description: 
 * @多读书多看报少吃零食多睡觉
 */
module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        // "eslint:recommended",
        '@vue/prettier'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    },
    overrides: [
        {
            files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
            env: {
                jest: true
            }
        }
    ]
}
