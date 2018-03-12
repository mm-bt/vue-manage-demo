# vue-manage-demo

> 项目基于Vue.js 2.x + vue-router + vuex + axios + Element UI集成的后端管理系统。
>[线上预览地址](http://demo.liangxinghua.com/vue/login)

## 说明
该项目使用vue-cli脚手架生成目录，然后引用Element UI组件库，参考网上的一些后端框架思想，然后精简优化，最终集成一套后端基础框架，可以直接下载下来使用，目前我们项目也在使用。

## 功能 ##
- [x] Element UI
- [x] 登录/注销---登录用户状态管理
- [x] 表格
- [x] 表单
- [x] 图片拖拽/裁剪上传
- [x] NProgress页面切换特效
- [x] Echarts集成
- [x] axios封装

## 目录结构介绍 ##

	|-- build                            // webpack配置文件
	|-- config                           // 项目打包路径
	|-- src                              // 源码目录
	|	|-- api                          // 接口API封装
	|	|-- assets                       // 静态资源文件
	|	|-- components                   // 组件
	|	|-- router                       // 路由信息
	|	|-- util                         // 工具包
	|  	    |-- fetch.js                 // axios封装
	|       |-- storage.js           	 // 数据存储封装
	|       |-- validate.js              // 自定义表单验证
	|   |-- view                         // 页面包
	|       |-- base                     // 基础组件
	|           |-- file.vue             // 文件上传
	|           |-- form.vue           	 // 表单
	|           |-- table.vue            // 表格
	|       |-- common                   // 基础组件
	|           |-- header.vue           // 头部
	|           |-- sidebar.vue          // 左侧导航
	|		|-- echarts                  // echarts
	|           |-- bar.vue              // 柱状图
	|           |-- line.vue             // 折线图
	|           |-- pie.vue              // 饼图
	|		|-- error                    // 异常包
	|           |-- 404.vue              // 404
	|		|-- home                     // 首页
	|           |-- home.vue             
	|		|-- login                    // 登录
	|           |-- login.vue            
	|   |-- vuex                         // vuex包
	|   |-- App.vue                      // 页面入口文件
	|   |-- main.js                      // 程序入口文件，加载各种公共组件
	|-- .babelrc                         // ES6语法编译配置
	|-- .editorconfig                    // 代码编写规格
	|-- .gitignore                       // 忽略的文件
	|-- index.html                       // 入口html文件
	|-- package.json                     // 项目及工具的依赖配置文件
	|-- README.md                        // 说明

## 前提 ##

	//本地安装vue-cli脚手架
	npm i -g vue-cli

## 安装步骤 ##

	git clone https://github.com/mm-bt/vue-manage-demo      // 把模板下载到本地
	cd vue-manage-demo    // 进入模板目录
	npm install         // 安装项目依赖，等待安装完成之后

## 本地开发 ##

	// 开启服务器，浏览器访问 http://localhost:8080
	npm run dev

## 构建生产 ##

	// 执行构建命令，生成的dist文件夹放在服务器下即可访问
	npm run build

## BUG说明 ##

	1、如果npm run dev的时候出现以下错误，请将package.json文件中的18行图片上传插件由
	"vue-core-image-upload": "^2.4.2"改为"vue-core-image-upload": "2.4.2";重新npm install以下即可，或者 npm install --save vue-core-image-upload@2.4.2  由于2.4.4最新版本作者还在调试请降低版本，等后续没问题了再升级上去即可。

	 ERROR  Failed to compile with 1 errors                                                                                                                                                 14:18:23

	This dependency was not found:

	* vue-core-image-upload in ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/view/base/file.vue

	To install it, you can run: npm install --save vue-core-image-upload


