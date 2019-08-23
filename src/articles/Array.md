# JS基础 | 数组

## 创建数组

1. 数组字面量
```
const values = [1,2,,];  // values.length ?
```
大部分浏览器会返回`values`的`length`是3，因为js允许数组中的值以`,`结尾。 
但是，在IE8以及以前的浏览器，会把`length`当作4，然后`values[4] === undefined`

2. `Array`构造器
```
const array1 = new Array(3, 4);
const array2 = Array(3,4); // 可以省略new操作符
const array3 = new Array(3); // 创建一个length为3的空数组(稀疏数组)
const array4 = Array.of(3); // ES6方法，生成[3]
```

3. ES6方法  
    1. `Array.of()`  
   与`Array`构造器的区别：不考虑参数的数量或类型
    2. `Array.from()`  
   从一个类数组或可迭代对象中创建一个新的数组实例。
   - 分割字符串 
`Array.from('foo') // ['f', 'o', 'o']`
   - ==类数组对象==转数组
```
const arrayLike = {
   0: 'html',
   1: 'js',
   2: 'css',
  length: 3 // 必需
 }
Array.from(arrayLike) // ['html', 'js, 'css']
```
   - 可迭代对象转数组
```
 const MapArray = new Map([['a', 1], ['b', 5], ['c', 8]])
Array.from(MapArray) // ]["a", 1],  ["b", 5], ["c", 8]]
```
   - 数组去重
```
const SetArray = new Set([1, 2, 2, 3, 4, 4, 4])
Array.from(SetArray) // [1,2,3,4]用作数组去重
```

## 读取/设置数组
1. 索引值直接访问或设置
2. 改变length
```
const colors2 = [1,2,3];
colors2.length = 2;
colors2;  // [1, 2]
colors2.length = 4;
colors2;  // [1, 2, undefined, undefined]
```
数组max-length:2^32

==数组索引和对象key的关系==

## 检测数组
ES3: `value instanceof Array`  
前提是假定只有一个全局执行环境，如果有多窗口或窗体（frame）存在，检测的时候可能会存在错误。  
因为`instanceof`的本质是用来检测`constructor.prototype`是否存在于参数`object`的原型链上，如果没有走构造方法，返回的结果可能会有出入。  
比如：
```
const numberA = 1;
numberA instanceof Number // false
const numberB = new Number(1)
numberB instanceof Number // true
```

ES5: `Array.isArray(value)`  
兼容性写法:
```
var isArray = Function.isArray || function(o) {
    return typeof o === 'object' &&
    Object.prototype.toString.call(o) === '[Object Array]';
}
```

## 数组方法
### 栈方法(Last-In-First-Out)
1. `push()`
2. `pop()`

### 队列方法(First-In-First-Out)
1. `shift()`
2. `unshift()`

==性能比较==
栈方法只改变最后一项和数组长度，而队列方法则要改变每一项的索引值，所以栈方法的性能更好

### 重排序方法
1. `reverse()`
2. `sort()` 如果不传参数会先将每一项进行`toString()`操作，然后按照`unicode`字符串顺序排列

### 操作方法
1. `concat()` 创建副本
2. `slice()` 不会改变原数组
3. `splice()`
    1. 删除 `splice(startIndex, howMany)` ==howMany和数组长度以及startIndex的关系==
`howmany = startIndex > 0 ? Math.min(array.length, howmany) : Math.min(Math.abs(startIndex), howmany)`
    2. 插入/替换 `splice(startIndex, howMany, ...insertVal)`

### 位置方法
1. `indexOf()`
2. `lastIndexOf()`

### 迭代方法
1. `every()`
2. `filter()`
3. `forEach()`
4. `map()`
5. `some()`

### 归并方法
1. `reduce()`
2. `reduceRight()`

### ES6和ES7新增
1. `includes()`
2. `find()`和`findIndex()`
3. `keys()`和`values()`
`keys()`返回一个新的Array迭代器，它包含数组中每个索引的键。  
`values()`返回一个新的Array迭代器，它包含数组中每个索引的值。
如果是==稀疏数组==则会跳过空位，如
```
const array = [,,1]
Object.keys(array) // ["2"]
Object.values(array) // [1]
```
4. 扩展运算符在数组中的应用
```
const arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];
arr1.push(...arr2);
Math.max(...arr1);
```

5. `copyWithin()`方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，而不修改其大小。
6. `fill()`方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。
7. `flat()`和`flatMap()`

## 概念扩展
### 数组索引和对象key的关系  
数组是对象的特殊形式，所有的数组都是对象，可以为其创建任意名字的属性。但是只有小于2^32的非负整数才是索引，才会更新length。如：
```
const arr = [];
arr["a"] = 1;
arr // arr是[a:1] length是0
```
### 稀疏数组
稀疏数组就是包含从0开始的不连续索引的数组。通常数组的length属性值代表数组中元素的个数。如果数组是稀疏的，length属性值大于元素的个数。
```
const a4 = [,undefined];
0 in a4 // fasle: a4在索引0处没有元素
1 in a4 // true: a4在索引1处有一个值为undefined的元素
```
### 类数组对象
拥有一个数值length属性和对应非负整数属性的对象看做一种类型的数组。
```
const arrayLike = {
  0: 'name',
  1: 'age',
  2: 'address',
  length: 3
}
```

## 数组应用
1. 做逻辑判断
2. 变量交换
```
let a = 1;
let b = 2;
a = [b, b = a][0]
[a, b] = [b, a]; //ES6方法
```
3. 分割字符串
```
Array.from('foo');
'foo'.split('');
[...'foo'];
```
4. 深拷贝数组
```
const arrA = [1, 2, 3]
const newArr1 = arrA.concat()
const newArr2 = [...arrA]  // 或者 const [...newArr2] = arrA;
const newArr3 = arrA.filter(i => i)
const newArr4 = arrA.slice(0)
```