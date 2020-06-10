# 2020Vue经典面试题总结

## 什么是MVVM？
MVVM是Model-View-ViewModel的缩写。MVVM是一种设计思想。Model 层代表数据模型，也可以在Model中定义数据修改和操作的业务逻辑；View 代表UI 组件，它负责将数据模型转化成UI 展现出来，ViewModel 是一个同步View 和 Model的对象。

在MVVM架构下，View 和 Model 之间并没有直接的联系，而是通过ViewModel进行交互，Model 和 ViewModel 之间的交互是双向的， 因此View 数据的变化会同步到Model中，而Model 数据的变化也会立即反应到View 上。

ViewModel 通过双向数据绑定把 View 层和 Model 层连接了起来，而View 和 Model 之间的同步工作完全是自动的，无需人为干涉，因此开发者只需关注业务逻辑，不需要手动操作DOM, 不需要关注数据状态的同步问题，复杂的数据状态维护完全由 MVVM 来统一管理。
## MVVM和MVC区别？它和其它框架（jquery）的区别是什么？哪些场景适合？
MVC和MVVM其实区别并不大。都是一种设计思想。主要就是MVC中Controller演变成MVVM中的ViewModel。MVVM主要解决了MVC中大量的DOM 操作使页面渲染性能降低，加载速度变慢，影响用户体验。

区别：vue数据驱动，通过数据来显示视图层而不是节点操作。

场景：数据操作比较多的场景，更加便捷

#### MVC
+ M：模型层
+ V：视图层
+ P：控制器层

#### MVVM
+ M：负责存储数据（模型层）
+ V：负责显示数据（视图层）
+ VM：Vue自带的层（内置）MVVM 不用关注ViewModel如何实现的，它是Vue内置的最重的是M层，dom操作被极大简化，使用MVVM是面向数据进行编程

## vue的优点是什么？
#### 1、轻量级框架
只关注视图层,是一个构建数据的视图集合,大小只有几十kb

Vue.js通过简洁的API提供高效的数据绑定和灵活的组件系统

#### 2、简单易学
国人开发,中文文档,不存在语言障碍,易于理解和学习

#### 3、双向数据绑定
也就是所谓的响应式数据绑定。这里的响应式不是@media 媒体查询中的响应式布局，而是指vue.js会自动对页面中某些数据的变化做出同步的响应。

也就是说，vue.js会自动响应数据的变化情况，并且根据用户在代码中预先写好的绑定关系，对所有绑定在一起的数据和视图内容都进行修改。而这种绑定关系，就是以input 标签的v-model属性来声明的，因此你在别的地方可能也会看到有人粗略的称vue.js为声明式渲染的模版引擎。

这也就是vue.js最大的优点，通过MVVM思想实现数据的双向绑定，让开发者不用再操作dom对象，有更多的时间去思考业务逻辑。

#### 4、组件化
在前端应用，我们是否也可以像编程一样把模块封装呢？这就引入了组件化开发的思想。

Vue.js通过组件，把一个单页应用中的各种模块拆分到一个一个单独的组件（component）中，我们只要先在父级应用中写好各种组件标签（占坑），并且在组件标签中写好要传入组件的参数（就像给函数传入参数一样，这个参数叫做组件的属性），然后再分别写好各种组件的实现（填坑），然后整个应用就算做完了。

#### 5、视图,数据,结构分离
使数据的更改更为简单,不需要进行逻辑代码的修改,只需要操作数据就能完成相关操作

#### 6、虚拟DOM
现在的网速越来越快了，很多人家里都是几十甚至上百M的光纤，手机也是4G起步了，按道理一个网页才几百K，而且浏览器本身还会缓存很多资源文件，那么几十M的光纤为什么打开一个之前已经打开过，已经有缓存的页面还是感觉很慢呢？这就是因为浏览器本身处理DOM也是有性能瓶颈的，尤其是在传统开发中，用JQuery或者原生的JavaScript DOM操作函数对DOM进行频繁操作的时候，浏览器要不停的渲染新的DOM树，导致页面看起来非常卡顿。

而Virtual DOM则是虚拟DOM的英文，简单来说，他就是一种可以预先通过JavaScript进行各种计算，把最终的DOM操作计算出来并优化，由于这个DOM操作属于预处理操作，并没有真实的操作DOM，所以叫做虚拟DOM。最后在计算完毕才真正将DOM操作提交，将DOM操作变化反映到DOM树上。

#### 7、运行速度更快
像比较与react而言,同样都是操作虚拟dom,就性能而言,vue存在很大的优势

## vue.js的两个核心是什么？
数据驱动和组件化。

## 组件之间的传值？
父组件与子组件传值

父组件通过标签上面定义传值

子组件通过props方法接受数据

子组件向父组件传递数据

子组件通过$emit方法传递参数

## 路由之间跳转
声明式（标签跳转） 编程式（ js跳转）

## vue.cli中怎样使用自定义的组件？有遇到过哪些问题吗？
第一步：在components目录新建你的组件文件（indexPage.vue），script一定要export default {}

第二步：在需要用的页面（组件）中导入：import indexPage from ‘@/components/indexPage.vue’

第三步：注入到vue的子组件的components属性上面,components:{indexPage}

第四步：在template视图view中使用，

例如有indexPage命名，使用的时候则index-page


## vue如何实现按需加载配合webpack设置
webpack中提供了require.ensure()来实现按需加载。以前引入路由是通过import 这样的方式引入，改为const定义的方式进行引入。

不进行页面按需加载引入方式：import home from ‘…/…/common/home.vue’

进行页面按需加载的引入方式：const home = r => require.ensure( [], () => r (require(’…/…/common/home.vue’)))

## vuex面试相关
（1）vuex是什么？怎么使用？哪种功能场景使用它？

vue框架中状态管理。在main.js引入store，注入。新建一个目录store，…… export 。场景有：单页应用中，组件之间的状态。音乐播放、登录状态、加入购物车

（2）vuex有哪几种属性？

有五种，分别是 State、 Getter、Mutation 、Action、 Module

vuex的State特性

A、Vuex就是一个仓库，仓库里面放了很多对象。其中state就是数据源存放地，对应于一般Vue对象里面的data

B、state里面存放的数据是响应式的，Vue组件从store中读取数据，若是store中的数据发生改变，依赖这个数据的组件也会发生更新

C、它通过mapState把全局的 state 和 getters 映射到当前组件的 computed 计算属性中

vuex的Getter特性

A、getters 可以对State进行计算操作，它就是Store的计算属性

B、 虽然在组件内也可以做计算属性，但是getters 可以在多组件之间复用

C、 如果一个状态只在一个组件内使用，是可以不用getters

vuex的Mutation特性

Action 类似于 mutation，不同在于：Action 提交的是 mutation，而不是直接变更状态；Action 可以包含任意异步操作。

（3）不用Vuex会带来什么问题？

可维护性会下降，想修改数据要维护三个地方；

可读性会下降，因为一个组件里的数据，根本就看不出来是从哪来的；

增加耦合，大量的上传派发，会让耦合性大大增加，本来Vue用Component就是为了减少耦合，现在这么用，和组件化的初衷相背。

## v-show和v-if指令的共同点和不同点
#### 相同点
两者都是在判断DOM节点是否要显示。
#### 不同点
- 实现方式： v-if是根据后面数据的真假值判断直接从Dom树上删除或重建元素节点。  v-show只是在修改元素的css样式，也就是display的属性值，元素始终在Dom树上。
- 编译过程：v-if切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件；  v-show只是简单的基于css切换；
- 编译条件：v-if是惰性的，如果初始条件为假，则什么也不做；只有在条件第一次变为真时才开始局部编译； v-show是在任何条件下（首次条件是否为真）都被编译，然后被缓存，而且DOM元素始终被保留；
- 性能消耗：v-if有更高的切换消耗，不适合做频繁的切换；  v-show有更高的初始渲染消耗，适合做频繁的额切换；

## 如何让CSS只在当前组件中起作用
将当前组件的

## `<keep-alive></keep-alive>`的作用是什么?
包裹动态组件时，会缓存不活动的组件实例，主要用于保留组件状态或避免重新渲染。

## Vue中引入组件的步骤?
1）采用ES6的import … from …语法或CommonJS的require()方法引入组件
```javascript
import HelloWorld from 'HelloWorld';
```
2）对组件进行注册,代码如下
```javascript
components:{HelloWorld}
```

3）在html中引用这个组件
```html
<template>
    <div>
        <hello-world />
    </div>
</template>
```

## 指令v-el的作用是什么?
提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标.可以是 CSS 选择器，也可以是一个 HTMLElement 实例


## 在Vue中使用插件的步骤
采用ES6的import … from …语法或CommonJSd的require()方法引入插件

使用全局方法Vue.use( plugin )使用插件,可以传入一个选项对象Vue.use(MyPlugin, { someOption: true })

## 请列举出3个Vue中常用的生命周期钩子函数
created: 实例已经创建完成之后调用,在这一步,实例已经完成数据观测, 属性和方法的运算, watch/event事件回调. 然而, 挂载阶段还没有开始, $el属性目前还不可见

mounted: el被新创建的 vm.el替换，并挂载到实例上去之后调用该钩子。如果root实例挂载了一个文档内元素，当mounted被调用时vm. el 替换，并挂载到实例上去之后调用该钩子。如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.el替换，并挂载到实例上去之后调用该钩子。如果root实例挂载了一个文档内元素，当mounted被调用时vm.el 也在文档内。

activated: keep-alive组件激活时调用

## active-class是哪个组件的属性？
vue-router模块的router-link组件。

## 怎么定义vue-router的动态路由以及如何获取传过来的动态参数？
在router目录下的index.js文件中，对path属性加上/:id。

使用router对象的params.id。

## vue-router有哪几种导航钩子？
三种，一种是全局导航钩子：router.beforeEach(to,from,next)，作用：跳转前进行判断拦截。

第二种：组件内的钩子；

第三种：单独路由独享组件

## 生命周期相关面试题

总共分为8个阶段创建前/后，载入前/后，更新前/后，销毁前/后。

创建前/后： 在beforeCreate阶段，vue实例的挂载元素el和数据对象data都为undefined，还未初始化。在created阶段，vue实例的数据对象data有了，el还没有。

载入前/后：在beforeMount阶段，vue实例的$el和data都初始化了，但还是挂载之前为虚拟的dom节点，data.message还未替换。在mounted阶段，vue实例挂载完成，data.message成功渲染。

更新前/后：当data变化时，会触发beforeUpdate和updated方法。

销毁前/后：在执行destroy方法后，对data的改变不会再触发周期函数，说明此时vue实例已经解除了事件监听以及和dom的绑定，但是dom结构依然存在

（1）、什么是vue生命周期

答： Vue 实例从创建到销毁的过程，就是生命周期。也就是从开始创建、初始化数据、编译模板、挂载Dom→渲染、更新→渲染、卸载等一系列过程，我们称这是 Vue 的生命周期。

（2）、vue生命周期的作用是什么

答：它的生命周期中有多个事件钩子，让我们在控制整个Vue实例的过程时更容易形成好的逻辑。

（3）、vue生命周期总共有几个阶段

答：可以总共分为8个阶段：创建前/后, 载入前/后,更新前/后,销毁前/销毁后

（4）、第一次页面加载会触发哪几个钩子

答：第一次页面加载时会触发 beforeCreate, created, beforeMount, mounted 这几个钩子

（5）、DOM 渲染在 哪个周期中就已经完成

答：DOM 渲染在 mounted 中就已经完成了。

（6）、简单描述每个周期具体适合哪些场景

答：生命周期钩子的一些使用方法：

beforecreate : 可以在这加个loading事件，在加载实例时触发

created : 初始化完成时的事件写在这里，如在这结束loading事件，异步请求也适宜在这里调用

mounted : 挂载元素，获取到DOM节点

updated : 如果对数据统一处理，在这里写上相应函数

beforeDestroy : 可以做一个确认停止事件的确认框

nextTick : 更新数据后立即操作dom

## 说出至少4种vue当中的指令和它的用法？
v-if：判断是否隐藏；v-for：数据循环；v-bind:class：绑定一个属性；v-model：实现双向绑定

Vue如何创建自定义指令？

## vue-loader是什么？使用它的用途有哪些？
解析.vue文件的一个加载器。

用途：js可以写es6、style样式可以scss或less、template可以加jade等


## scss是什么？在vue.cli中的安装使用步骤是？有哪几大特性？
答：css的预编译。

使用步骤：

第一步：先装css-loader、node-loader、sass-loader等加载器模块

第二步：在build目录找到webpack.base.config.js，在那个extends属性中加一个拓展.scss

第三步：在同一个文件，配置一个module属性

第四步：然后在组件的style标签加上lang属性 ，例如：lang=”scss”

特性:

可以用变量，例如（$变量名称=值）；

可以用混合器，例如（）

可以嵌套

## 为什么使用key？
当有相同标签名的元素切换时，需要通过 key 特性设置唯一的值来标记以让 Vue 区分它们，否则 Vue 为了效率只会替换相同标签内部的内容。

## 为什么避免 v-if 和 v-for 用在一起
当 Vue 处理指令时，v-for 比 v-if 具有更高的优先级，通过v-if 移动到容器元素，不会再重复遍历列表中的每个值。取而代之的是，我们只检查它一次，且不会在 v-if 为否的时候运算 v-for。

## VNode是什么？虚拟 DOM是什么？
Vue在 页面上渲染的节点，及其子节点称为“虚拟节点 (Virtual Node)”，简写为“VNode”。“虚拟 DOM”是由 Vue 组件树建立起来的整个 VNode 树的称呼。

## 动态绑定Class有几种方式？

#### 对象方法

 -最简单的绑定（这里的active加不加单引号都可以，以下也一样都能渲染）

```
:class="{ 'active': isActive }"
判断是否绑定一个active
:class="{'active':isActive==-1}"
或者
:class="{'active':isActive==index}"

绑定并判断多个
第一种（用逗号隔开）
:class="{ 'active': isActive, 'sort': isSort }"
第二种（放在data里面）
//也可以把后面绑定的对象写在一个变量放在data里面，可以变成下面这样
:class="classObject"
data() {
  return {
    classObject:{ active: true, sort:false }
  }
}
第三种（使用computed属性）
:class="classObject"
data() {
  return {
    isActive: true,
    isSort: false
  }
},
computed: {
  classObject: function () {
    return {
      active: this.isActive,
      sort:this.isSort
    }
  }
}
```

#### 数组方法

1)单纯数组

```html
:class="[isActive,isSort]"
```
```javascript
data() {
  return{
    isActive:'active',
    isSort:'sort'
 }
}
```

2)数组与三元运算符结合判断选择需要的class

注意：三元运算符后面的“：”两边的class需要加上单引号，否则不能正确渲染

```
:class="[isActive?'active':'']"
或者
:class="[isActive==1?'active':'']"
或者
:class="[isActive==index?'active':'']"
或者
:class="[isActive==index?'active':'otherActiveClass']"
```

#### <font color=#00f>数组对象</font>结合动态判断

前面这个active在对象里面可以不加单引号，后面这个sort要加单引号

```
:class="[{ active: isActive }, 'sort']"
或者
:class="[{ active: isActive==1 }, 'sort']"
或者
:class="[{ active: isActive==index }, 'sort']"
```
