(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{174:function(s,n,e){"use strict";e.r(n);var a=e(0),t=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("div",{staticClass:"content"},[e("h2",{attrs:{id:"前端基础"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前端基础","aria-hidden":"true"}},[s._v("#")]),s._v(" 前端基础")]),s._v(" "),e("h3",{attrs:{id:"一-数据持久化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-数据持久化","aria-hidden":"true"}},[s._v("#")]),s._v(" 一 数据持久化")]),s._v(" "),e("ul",[e("li",[s._v("cookie 生命期为只在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭。 存放数据大小为4K左右 。有个数限制（各浏览器不同），一般不能超过20个。与服务器端通信：每次都会携带在HTTP头中，如果使用cookie保存过多数据会带来性能问题。")]),s._v(" "),e("li",[s._v("localStorage 生命周期是永久，这意味着除非用户显示在浏览器提供的UI上清除localStorage信息，否则这些信息将永远存在。存放数据大小为一般为5MB,而且它仅在客户端（即浏览器）中保存，不参与和服务器的通信。")]),s._v(" "),e("li",[s._v("sessionStorage 为每一个数据源维持一个存储区域，在浏览器打开期间存在，包括页面重新加载。不同的浏览器存储的上限也不一样，但大多数浏览器把上限限制在5MB以下。")])]),s._v(" "),e("h3",{attrs:{id:"二-function传值属于值传递"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二-function传值属于值传递","aria-hidden":"true"}},[s._v("#")]),s._v(" 二 function传值属于值传递")]),s._v(" "),e("ul",[e("li",[s._v("值类型，当为函数传递参数的时候，是将此值复制一份传递给函数，所以在函数执行之后，num本身的值并没有被改变，函数中被改变的值仅仅是一个副本而已。例如"),e("code",[s._v("string")]),s._v("，12")]),s._v(" "),e("li",[s._v("引用类型，当为函数传递参数的时候，是传递的web对象的引用，也就是此对象的内存地址，所以在函数中修改属性的对象就是函数外面创建的对象本身。")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('function setName(obj)\n{ \n  obj.name="青岛新锐"; \n  obj=new Object(); \n  obj.name="蚂蚁部落"; \n} \nvar web=new Object(); \nsetName(web); \nconsole.log(web.name);\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("以上代码的弹出值是:青岛新锐，很多人可能会以为将会弹出“蚂蚁部落”，下面进行一下简单的分析:\n在函数外面创建一个对象，并将对象的引用赋值给变量web，web中存储的是对象在内存中的存储地址，当为函数传递参数时，就是传递的在函数外面创建的对象的地址。在函数中，为外面创建的对象创建一个自定义属性name并赋值为“青岛新锐”，然后又创建一个新的对象，并将新对象的地址赋值给obj，这个时候obj指向的并不是函数外面创建的对象，所以外面对象name属性不会被改变。简单地说，就是传入的参数是一个引用的副本，通过这个副本引用，我们可以访问到外部的对象，但是在我们手动将引用地址修改后，函数内访问的是另一个对象，而不是外部的对象。")]),s._v(" "),e("blockquote",[e("p",[s._v("重点就是我们传入的是一个值引用的副本！！！")])]),s._v(" "),e("h3",{attrs:{id:"三-bind-apply-call和this的关系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三-bind-apply-call和this的关系","aria-hidden":"true"}},[s._v("#")]),s._v(" 三 bind,apply,call和this的关系")]),s._v(" "),e("p",[s._v("其实三个方法实际上的作用都是改变函数运行时this的指向，所以我要先来理一理this的指向问题。就我的理解而言，实际上ES6之后很少关注this的指向问题了。")]),s._v(" "),e("ul",[e("li",[s._v("方法调用模式：this指向当前对象。")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("let a =1;\nlet obj={\na:2,\nfn:function(){\nconsole.log(this.a)\n}\n}\nobj.fn()\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("ul",[e("li",[s._v("普通函数调用：此时this被绑定到window上")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("function fn1(){\n    console.log(this)//window;\n}\n//包括函数嵌套也是一样\nfunction fn1(){\n    function fn2(){\n        console.log(this)//window\n    }\n}\n// 把函数赋值之后再调用\nlet a =1;\nlet obj = {\n    a:2,\n    fn:function(){\n        console.log(this.a)\n    }\n}\nlet fn1=obj.fn;\nfn1()//1\nfn1()调用实际上就是不带任何修饰的函数调用，相当于function(){ console.log(this.a) }.call(undefined),对于传入的context是null或者undefined,那么window对象就是默认的context（严格模式下默认 context 是 undefined）。因此上面的this绑定的就是window，这也被称为隐形绑定。\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br")])]),e("ul",[e("li",[s._v("构造器调用：new一个函数时，背地里会将创建一个连接到prototype成员的新对象，同时this会被绑定到那个新对象上")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("   function Person(name='name',age=18){\n       //this都指向创建的实例\n       this.name=name;\n       this.age=age;\n       this.sayAge=function(){\n           console.log(this.age)\n       }\n   }\n   let dot =new Person('Dot',2);\n   dot.sayAge() //2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("ul",[e("li",[s._v("call call方法的第一个参数是要绑定给this的值，后面传入的是一个参数列表。当第一个参数为null，undefined的时候，默认指向window。")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("let obj = {\n    message: 'My name is: '\n}\nfunction getName(firstName, lastName) {\n    console.log(this.message + firstName + ' ' + lastName)\n}\ngetName.call(obj, 'Dot', 'Dolby')\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("ul",[e("li",[s._v("apply apply接受两个参数，第一个参数是要绑定给this的值，第二个参数是一个参数数组。当第一个参数为null、undefined的时候，默认指向window。")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("let obj = {\n    message: 'My name is: '\n}\nfunction getName(firstName, lastName) {\n    console.log(this.message + firstName + ' ' + lastName)\n}\ngetName.apply(obj, ['Dot', 'Dolby'])// My name is: Dot Dolby\n可以看到，obj 是作为函数上下文的对象，函数 getName 中 this 指向了 obj 这个对象。参数 firstName 和 lastName 是放在数组中传入 getName 函数。\n事实上apply 和 call 的用法几乎相同, 唯一的差别在于：当函数需要传递多个变量时, apply 可以接受一个数组作为参数输入, call 则是接受一系列的单独变量。\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("ul",[e("li",[s._v("bind 和call很相似，第一个参数是this的指向，从第二个参数开始是接收的参数列表。区别在于bind方法返回值是函数以及bind接收的参数列表的使用。")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("let obj = {\n    name: 'Dot'\n}\nfunction printName() {\n    console.log(this.name)\n}\nlet dot = printName.bind(obj)\nconsole.log(dot) // function () { … }\ndot()  // Dot\nbind 方法不会立即执行，而是返回一个改变了上下文 this 后的函数。而原函数 printName 中的 this 并没有被改变，依旧指向全局对象 window。\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("h3",{attrs:{id:"四-深究scoped模块私有化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四-深究scoped模块私有化","aria-hidden":"true"}},[s._v("#")]),s._v(" 四 深究scoped模块私有化")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("scoped 主要作用再于：当一个style标签有scoped属性时，由它定义的css样式只能作用于当前的vue组件，可以使组件的样式不互相污染。")])]),s._v(" "),e("li",[e("p",[s._v("实现原理：通过postcss为转译后的dom添加唯一的动态属性，css编译为对应的属性选择器，这样就使的当前的样式只作用于含有该属性的dom元素。")])]),s._v(" "),e("li",[e("p",[s._v("如何对子组件进行scoped穿透：")]),s._v(" "),e("blockquote",[e("p",[s._v("在stylus中：使用 >>> 例如：.warpper>>>.swiper-pagination")])]),s._v(" "),e("blockquote",[e("p",[s._v("在sass和less中，使用/deep/ 例如：.warpper /deep/ .swiper-pagination")])])]),s._v(" "),e("li",[e("p",[s._v("在组件中修改第三方组件库样式的其他方法：使用两个style标签，一个使用scoped，一个不使用，6不6 ，就是这么简单...")])])]),s._v(" "),e("h3",{attrs:{id:"五-发布自己的npm包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#五-发布自己的npm包","aria-hidden":"true"}},[s._v("#")]),s._v(" 五 发布自己的NPM包")]),s._v(" "),e("ul",[e("li",[s._v("npm adduser 添加用户")]),s._v(" "),e("li",[s._v("npm publish 发布NPM包，完事...")])]),s._v(" "),e("h3",{attrs:{id:"六-将1-2版本的elementui升级到最新版本的尝试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#六-将1-2版本的elementui升级到最新版本的尝试","aria-hidden":"true"}},[s._v("#")]),s._v(" 六 将1.2版本的elementUI升级到最新版本的尝试")]),s._v(" "),e("ul",[e("li",[s._v("克隆elementUI最新版")]),s._v(" "),e("li",[s._v("改名，将elementUI改名为axx-element-ui")]),s._v(" "),e("li",[s._v("发布axx-element-ui npm包")]),s._v(" "),e("li",[s._v("在项目中引入axx-element-ui，修改.babelrc文件")]),s._v(" "),e("li",[s._v("引入成功\nBUT：由于element最新版依赖的vue版本跟现有版本不同，所以有些UI组件的功能并不能使用，比如$attr这个API在vue2.4以后才能使用；尝试升级vue版本，各种报错，当前项目太大太老，要单独升级某个依赖并不可能，个人感觉只有全局依赖一起升级这条路，升级的话，还需要改原有的业务代码，实际上相当于重写当前项目，工作量还是蛮大的，暂时搁浅。")])]),s._v(" "),e("h3",{attrs:{id:"七-restful"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#七-restful","aria-hidden":"true"}},[s._v("#")]),s._v(" 七 restful")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("用URL定位资源，用HTTP描述操作：\n在设计web接口的时候，REST主要是用于定义接口名，接口名一般是用名次写，不用动词，那怎么表达“获取”或者“删除”或者“更新”这样的操作呢——用请求类型来区分。比如，我们有一个friends接口，对于“朋友”我们有增删改查四种操作，怎么定义REST接口？")]),s._v(" "),e("p",[s._v("1、增加一个朋友，uri: generalcode.cn/v1/friends 接口类型：POST")]),s._v(" "),e("p",[s._v("2、删除一个朋友，uri: generalcode.cn/va/friends 接口类型：DELETE")]),s._v(" "),e("p",[s._v("3、修改一个朋友，uri: generalcode.cn/va/friends 接口类型：PUT")]),s._v(" "),e("p",[s._v("4、查找朋友，uri: generalcode.cn/va/friends 接口类型：GET")]),s._v(" "),e("p",[s._v("上面我们定义的四个接口就是符合REST协议的，请注意，这几个接口都没有动词，只有名词friends，都是通过Http请求的接口类型来判断是什么业务操作。\n举个反例：generalcode.cn/va/deleteFriends 该接口用来表示删除朋友，这就是不符合REST协议的接口。")]),s._v(" "),e("p",[s._v("用HTTP Status Code传递Server的状态信息。比如最常用的 200 表示成功，500 表示Server内部错误，403表示Bad Request等。（反例：传统web开发返回的状态码一律都是200，其实不可取。）")]),s._v(" "),e("p",[s._v("那这种风格的接口有什么好处呢？前后端分离。前端拿到数据只负责展示和渲染，不对数据做任何处理。后端处理数据并以JSON格式传输出去，定义这样一套统一的接口，在web，ios，android三端都可以用相同的接口，是不是很爽？！")])])])])}],!1,null,null,null);n.default=t.exports}}]);