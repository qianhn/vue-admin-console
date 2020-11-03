/*
 * @Author: qianhn@neusoft.com
 * @Date: 2020年10月26日13时07分31秒
 * @LastEditTime: 2020年10月26日16时48分25秒
 * @LastEditors: Please set LastEditors
 * @Description:
 * @多读书多看报少吃零食多睡觉
 */
module.exports = {
    presets: ['@vue/cli-plugin-babel/preset'],
    // 自动引入样式文件
    plugins: [
      [
        "import",
        { libraryName: "ant-design-vue", libraryDirectory: "es", style: 'css'}
      ]
    ]
}
