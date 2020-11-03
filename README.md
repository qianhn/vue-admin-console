<!--
 * @Author: qianhn@neusoft.com
 * @Date: 2020年10月26日13时08分33秒
 * @LastEditTime: 2020年11月03日17时14分31秒
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @多读书多看报少吃零食多睡觉
-->
# v-h5-pc
 
## 控制台工程 

### 目前实现功能 

  - router部分对于不同角色 动态添加路由

  - CacheRouter 的缓存路由记录

  - 本地 server 型 mock功能  修改 热更新 

  - element ui 据说不维护了  此项目 采用antd-design for vue

  - layOut 控制台风格 
  

## 安装依赖

```
npm install
```

### 开发运行

```
npm run serve
```

### 打包线上

```
npm run build
```

### 单元测试

```
npm run test
```

### esLint 代码风格检查

```
npm run lint
```

### 单元测试

```
npm run test:unit
```

### vue cli 配置 查看

See [Configuration Reference](https://cli.vuejs.org/config/).

### 支持 stylus

### 云打版 (手动打版)

```
npm run build
cd dist
git init
git add .
git commit -m "commit message"
git branch cloud
git remote add origin git ssh://git@manager.ihrss.neusoft.com:7003/cloud-h5-new/v-h5-pc.git
git push -f -u origin cloud 
```

### 云打版 (jenkins 打版)

```
https://manager.ihrss.neusoft.com:9990/jenkins/
```


##  注意习惯 

### 1. 必要的注释

  - 变量名，方法 加注释说明一下

### 2. 命名规范

  - 路由name和path命名需相同，在页面中最外层class命名也和name相同，views里面页面文件夹首字母大写,vue文件首字母大写

  - 公用组件写在components文件夹中，页面拆分的组件写在页面文件夹内

### 3. HTML和CSS规则

  - div标签不要滥用，保证效果的情况下嵌套尽量少，多用css提供的伪类与选择器来保证代码简洁

  - css id,class命名用`-`连接, 非特殊情况下不使用id，只使用class

  - 通用样式 写入 styles/index.less | common.less 中  less 特性混入、变量 分别写入 mixins.less 以及 var.less 中

  - 页面使用flex布局，不要出现float