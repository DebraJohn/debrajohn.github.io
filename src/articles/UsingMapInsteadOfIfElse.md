# js - 用遍历代替if/else
<html><div class="articleTime">2019.07.29</div></html>

---

## 前言

最近利用改完 bug 的空闲期，优化了一下比较不优雅的代码。  
这里分享一种用遍历代替`if else`的写法。

## 需求

调用接口返回一个 code, 前端需要根据不同的 code 设置不同的图标。多个 code 可能使用同一个图标。

## 改造前

改造前的代码逻辑比较平铺直叙，用了大量的`if...else`语句。  
首先，这种方法是完全 OK 的（工作上，以能够实现业务为第一目标。）  
但是在写法上呢，篇幅又长又臭。

```
const changeWeatherCode = (code) => {
  if ((code > 0 && code <= 2) ||  code == 5 || code == 30 || (code > 32 && code <= 34)) {
    return 'SUNNY';
  } else if ((code > 2 && code <= 4) || (code > 5 && code <= 6) || (code > 34 && code <= 36)) {
    return 'CLOUDY';
  } else if ((code > 6 && code <= 8) || code == 31 || (code > 36 && code <= 38)) {
    return 'DREARY';
  } else if (code == 11) {
    return 'FOG';
  } else if ((code > 11 && code <= 14) || (code > 38 && code <= 40)) {
    return 'SHOWERS';
  } else if ((code > 14 && code <= 17) || (code > 40 && code <= 42)) {
    return 'T_STORMS';
  } else if (code == 18) {
    return 'RAIN';
  } else if ((code > 18 && code <= 24) || (code > 42 && code <= 44)) {
    return 'SNOW';
  } else if (code > 24 && code <= 29) {
    return 'RAIN_SNOW';
  } else if (code == 32) {
    return 'WIND';
  }
}
```
（而且，每个if里面都有返回值，就不需要再else了，直接下一个if即可）

## 改造思路

这些 code 是从 0~44，并分为 10 大类。  
是不是可以用对象形式储存，更为直观呢？

```
const codeToName = {
  SUNNY: [1, 2, 5, 30, 33, 34],
  CLOUDY: [3, 4, 6, 35, 36],
  DREARY: [7, 8, 31, 37, 38],
  T_STORMS: [15, 16, 17, 41, 42],
  SHOWERS: [12, 13, 14, 39, 40],
  SNOW: [19, 20, 21, 22, 23, 24, 43, 44],
  RAIN_SNOW: [25, 26, 27, 28, 29],
  RAIN: [18],
  WIND: [32],
  FOG: [11]
};
```

这里的改写各位千万别自己手动写进去，费时费力又容易出错。  
可以利用原来的代码，用 for 循环 44 次+push 的方法直接生成一个这样的对象。  
接下来，我们就要开始遍历了。通过传进来的 code，来找到对应的键名。

## 改造后

遍历的方法有很多种，`for `循环、`filter`、`find`、`findIndex`、`indexOf`、`includes`等等都是可以用的，但是注意返回的值是不同的。

#### for

```
const changeWeatherCode = (code) => {
  for (let i in codeToName) {
    for (const j of codeToName[i]) {
       if (j === code) return i
    }
  }
}
```
#### filter
```
const changeWeatherCode = (code) => {
  for (let i in codeToName) {
    const result = codeToName[i].filter(item => item === code)
    if (result.length) return i // filter会返回一个数组，没有找到则返回空数组
  }
}
```
#### find
```
const changeWeatherCode = (code) => {
  for (let i in codeToName) {
    const result = codeToName[i].find(item => item === code)
    if (result) return i // find返回键值，没有找到则返回undefined
  }
}
```
#### findIndex
```
const changeWeatherCode = (code) => {
  for (let i in codeToName) {
    const result = codeToName[i].find(item => item === code)
    if (result !== -1) return i // findIndex返回索引值，没有找到则返回-1
  }
}
```
#### 补充indexOf和includes
大神说用indexOf和includes更方便，这里也记录一下。
```
const changeWeatherCode = (code) => {
  for (let i in codeToName) {
    // if (codeToName[i].indexOf(code) > -1) return i   或者
    if (codeToName[i].includes(code)) return i
  }
}
```

## 总结
这几种写法都大同小异，只需要注意返回值即可。  
相比起原先大白话的写法，后者把代码抽象化，简洁明了，也更加优雅。  
另外，如果返回的code具有规律的话，也可以用正则来判断区间。