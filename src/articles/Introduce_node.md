# 基础概念 | NodeJs
<html><div class="articleTime">2019.05.05</div></html>

---

资料原文：[http://nqdeng.github.io/7-days-nodejs/](http://nqdeng.github.io/7-days-nodejs/)

## 概念
JS是脚本语言，脚本语言都需要一个解析器才能运行  
对于写在HTML页面里的JS，浏览器充当了解析器的角色  
而对于需要独立运行的JS，NodeJS就是一个解析器

## 用处
实现高性能Web服务器

## 运行
1. 在终端输入`node console.log('Hello World')`
2. 创建一个hello.js文件，输入`console.log('Hello World')`， 然后在终端输入`node hello`

## 模块
#### require
`require`函数用于在当前模块中引用别的模块，也可以引用一个json文件。如：
```
var foo1 = require('./foo');
var foo2 = require('./foo.js');
var foo3 = require('/home/user/foo');

var data = require('./data.json');
```
#### exports
`exports`对象是当前模块的导出对象，用于导出模块公有方法和属性。如：
```
exports.hello = () => {
    console.log('Hello World!');
};
```
#### module
通过`module`对象可以访问到当前模块的一些相关信息，但最多的用途是替换当前模块的导出对象，导出一个**函数**。如:
```
module.exports = function () {
    console.log('Hello World!');
};
```
`exports`和`module`的区别：在require引用的时候，exports导出的为对象，而module导出的是函数。

#### 模块初始化
一个模块中的JS代码仅在模块第一次被使用时执行一次，并在执行过程中初始化模块的导出对象。之后，缓存起来的导出对象被重复利用。

#### 主模块
通过命令行启动程序的模块成为主模块，如：`node main`, `main.js`就是主模块。

## 总结
- NodeJS是一个JS脚本解析器，任何操作系统下安装NodeJS本质上做的事情都是把NodeJS执行程序复制到一个目录，然后保证这个目录在系统PATH环境变量下，以便终端下可以使用node命令。

- 终端下直接输入node命令可进入命令交互模式，很适合用来测试一些JS代码片段，比如正则表达式。

- NodeJS使用CMD模块系统，主模块作为程序入口点，所有模块在执行过程中只初始化一次。