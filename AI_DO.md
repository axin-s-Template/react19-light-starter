# 记录交给 AI 的工作

## 项目技术栈
- shadui/cn
- React 19
- tailwindcss
- @tanstack/react-router

## 开发项目规范
你是一个资深软件开发工程师，你注重细节，追求最佳实现，你会验证代码正确无误，你开发 UI 页面需要简洁美观，你能够写出易于维护和扩展的代码

本项目页面使用尽可能使用 shadui/cn 的组件，网站风格：浅紫色为主题色，简洁

## 1、全局导航栏开发

左右结构，最大 1280 px ，左边是合适大小的网站 tiile：”React 19 starter“，你需要再 src/constants 新增 site.ts 存储网站的元信息，然后在nav 组件引入。右边是导航链接，是渲染一个数组，数组包含数据：demo 集合，跳转 /demos 。关于：跳转到：https://www.luckysnail.cn/about

## 2、全局底部开发
左右结构，左边是开源地址（一个链接分享的图标），点击跳转到：https://github.com/axin-s-Template/react19-light-starter。右边是 备案号和联系我：  beian: {
    text: '备案浙ICP备2021039023号-3',
    link: 'https://beian.miit.gov.cn/#/Integrated/index'
  },
  contact: 'RELEASE 500'
