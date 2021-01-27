---
author: Markus
tags:
  - JavaScript
  - Interview
---

# 2021 前端开发面试标准

## 电面

1.  自我介绍
2.  最近/主要项目经历（主要考察思维逻辑&语言沟通&筛选部分候选人特殊能力
    - 项目中担任角色
    - 项目中具体实现功能简述
    - 项目中特色功能简述
3.  vue、react 基础(运用及响应式绑定原理等)
4.  js/es/ts 基础(主要)
5.  css/html 基础(盒装模型/css 运用)
6.  网络&网络安全(http/s 协议常见问题、常见状态码、xss、csrf 等常见防御)
7.  扩展问题(加分项)

- umd、amd、esm 等模块标准,了解 Tree Shaking 优化
- babel 相关生态开发、AST 的了解及使用等
- nodejs 成熟运用及 Npm 相关生态
- graphql、http/2 等
- webpack、rollup、vite 等
- WebAssembly
- webcomponent、shadowDom
- 微前端及框架使用
- docker、k8s
- 参加或自研开源项目

8.  面试官收尾，询问是否有问题需要解答

> 以上仅为面试时可以进行考察的标准，可根据候选人的水平进行选择，电面应保持 15-25 分钟之间，通过不同分支中的具体问题进行考核。

## 现场面试

### 请写出下列输出的结果

```js
console.log("r1: ", 0.1 + 0.2 === 0.3, 0.4 + 0.5 === 1);
console.log("r2: ", NaN === null, {} === null, undefined === null);
console.log("r3:", !1 === false, !0 === false);
```

### 请写出你了解的 js 的类型

```js
// TODO
```

### 请实现数组去重

```js
let arr = [
  { val: 1 },
  { val: 2 },
  { val: 3 },
  { val: 4 },
  { val: 1 },
  { val: 3 },
];
let arr2 = [1, 3, 4, 10, "0", "10", 1];
// TODO
```

### 在不改变 Fn 的情况下使用以下代码输出 hello world 这句话

```js
function Fn() {
  this.parmas = "hello";
}
const chars = "world";
// TODO
```

### 如何不使用循环进行 1-100 求和计算

```js
```

### 请实现一个函数来返回变量的类型

```js
function getType() {
  // TODO
}
```

### 使用 js 实现继承

```js
// TODO
```

### 请写出以下代码输出值

```js
console.log(1);
setTimeout(() => {
  console.log(2);
  new Promise(() => {
    console.log(3);
  }).then(() => {
    console.log(4);
  });
}, 0);
await console.log(5);
new Promise(() => {
  console.log(6);
}).then(console.log(7));
console.log(8);
setTimeout(async () => {
  await Promise.resolve(console.log(9));
});
console.log(10);
```

### Display:none 和 Visibility:hidden 的区别？

### CSS 选择器有哪些？并写出优先级

### 如何实现垂直居中和横向居中

```css
.center {
}
```

### 简述 BFC 作用域

### 如何用 css 实现淡入淡出效果

### 请实现一个基于 Vue 的插件模块

要求在插件中实现混入 created 钩子并输出 console.log(1)

```ts
import Vue from "vue";
function MyPlugin() {}
```

### 两数相加

> 给定一个整数数组 nums  和一个整数目标值 target，请你在该数组中找出 和为目标值 的那两个整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

你可以按任意顺序返回答案。

输入：nums = [2,7,11,15], target = 9

输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

输入：nums = [3,2,4], target = 6
输出：[1,2]
示例 3：
输入：nums = [3,3], target = 6
输出：[0,1]

```js
```
