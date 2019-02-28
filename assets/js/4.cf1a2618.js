(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{172:function(t,e,n){"use strict";n.r(e);var s=n(0),r=Object(s.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("hr"),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("vue项目 报Uncaught SyntaxError: Unexpected token < 错误，一般是路径有问题（这里说是当js引用的文件是项目路径下的文件夹时,会报这个错误）。当时出现这个问题 是因为求助我的人他用了CDN 导致  (缓存)   访问了不存在的js，然后这个404错误又重新指向了一个提示的自定义页面，由于脚本里面不允许出现标签因为标签带了<>符号，所以，就会抛出这个异常 从而报错。")]),t._v(" "),n("p",[t._v("还有一个原因，可能是nginx配置与代码静态资源打包方式不匹配\n"),n("a",{attrs:{href:"https://www.jianshu.com/p/5714ec0b9102",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nginx解决VUE的history模式下刷新404报错"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("当然了，最直接的，就是先看你的引用路径对不对，这次的问题就是在本地build之后，dist目录下的index不能被自动提交到Git上导致的，此次采用的是对index.html进行单独提交")]),t._v(" "),n("hr"),t._v(" "),t._m(2),t._v(" "),n("p",[t._v("具体表现是css书写完成，必须刷新页面才能看到结果，按理说vue-cli3.0生成的脚手架中应该配置了热更新，但却没有生效。")]),t._v(" "),n("p",[t._v("具体解决办法是：vue.config.js中直接显式声明开启热更新：")]),t._v(" "),t._m(3)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"bug-list"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bug-list","aria-hidden":"true"}},[this._v("#")]),this._v(" bug-list")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"一-js报uncaught-syntaxerror-unexpected-token-错误"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-js报uncaught-syntaxerror-unexpected-token-错误","aria-hidden":"true"}},[this._v("#")]),this._v(" 一 js报Uncaught SyntaxError: Unexpected token <错误")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"二-做某个项目时热更新突然失效"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二-做某个项目时热更新突然失效","aria-hidden":"true"}},[this._v("#")]),this._v(" 二 做某个项目时热更新突然失效")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("module.exports={\n    devServer:{\n        hot:true\n    }\n}\n\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br")])])}],!1,null,null,null);e.default=r.exports}}]);