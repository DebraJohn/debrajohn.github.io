(function(e){function n(n){for(var o,i,a=n[0],l=n[1],s=n[2],d=0,p=[];d<a.length;d++)i=a[d],r[i]&&p.push(r[i][0]),r[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(n);while(p.length)p.shift()();return c.push.apply(c,s||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],o=!0,i=1;i<t.length;i++){var l=t[i];0!==r[l]&&(o=!1)}o&&(c.splice(n--,1),e=a(a.s=t[0]))}return e}var o={},r={app:0},c=[];function i(e){return a.p+"js/"+({about:"about"}[e]||e)+"."+{about:"526aeccf"}[e]+".js"}function a(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var o=new Promise(function(n,o){t=r[e]=[n,o]});n.push(t[2]=o);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.src=i(e),c=function(n){l.onerror=l.onload=null,clearTimeout(s);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src,i=new Error("Loading chunk "+e+" failed.\n("+o+": "+c+")");i.type=o,i.request=c,t[1](i)}r[e]=void 0}};var s=setTimeout(function(){c({type:"timeout",target:l})},12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(n)},a.m=e,a.c=o,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)a.d(t,o,function(n){return e[n]}.bind(null,o));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/dist/",a.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=n,l=l.slice();for(var d=0;d<l.length;d++)n(l[d]);var u=s;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var o=t("64a9"),r=t.n(o);r.a},"30a9":function(e,n,t){var o=["Array"],r=function(){var e={};return o.map(function(n){e[n]=t("ee45")("./"+n+".md")}),e};e.exports.ARTICLE_LIST=r()},"3c97":function(e,n,t){"use strict";var o=t("83a3"),r=t.n(o);r.a},"3e10":function(e,n,t){"use strict";var o=t("da51"),r=t.n(o);r.a},"4d3a":function(e,n,t){"use strict";var o=t("e212"),r=t.n(o);r.a},"53f6":function(e,n){e.exports='<h1 id="js基础--数组">JS基础 | 数组</h1>\n<h2 id="创建数组">创建数组</h2>\n<ol>\n<li><p>数组字面量</p>\n<pre><code>const values = [1,2,,];  // values.length ?</code></pre><p>大部分浏览器会返回<code>values</code>的<code>length</code>是3，因为js允许数组中的值以<code>,</code>结尾。 \n但是，在IE8以及以前的浏览器，会把<code>length</code>当作4，然后<code>values[4] === undefined</code></p>\n</li>\n<li><p><code>Array</code>构造器</p>\n<pre><code>const array1 = new Array(3, 4);\nconst array2 = Array(3,4); // 可以省略new操作符\nconst array3 = new Array(3); // 创建一个length为3的空数组(稀疏数组)\nconst array4 = Array.of(3); // ES6方法，生成[3]</code></pre></li>\n<li><p>ES6方法  </p>\n<ol>\n<li><code>Array.of()</code><br>与<code>Array</code>构造器的区别：不考虑参数的数量或类型</li>\n<li><code>Array.from()</code><br>从一个类数组或可迭代对象中创建一个新的数组实例。<ul>\n<li>分割字符串 \n<code>Array.from(&#39;foo&#39;) // [&#39;f&#39;, &#39;o&#39;, &#39;o&#39;]</code></li>\n<li>==类数组对象==转数组<pre><code>const arrayLike = {\n0: &#39;html&#39;,\n1: &#39;js&#39;,\n2: &#39;css&#39;,\nlength: 3 // 必需\n}\nArray.from(arrayLike) // [&#39;html&#39;, &#39;js, &#39;css&#39;]</code></pre></li>\n<li>可迭代对象转数组<pre><code>const MapArray = new Map([[&#39;a&#39;, 1], [&#39;b&#39;, 5], [&#39;c&#39;, 8]])\nArray.from(MapArray) // ][&quot;a&quot;, 1],  [&quot;b&quot;, 5], [&quot;c&quot;, 8]]</code></pre></li>\n<li>数组去重<pre><code>const SetArray = new Set([1, 2, 2, 3, 4, 4, 4])\nArray.from(SetArray) // [1,2,3,4]用作数组去重</code></pre></li>\n</ul>\n</li>\n</ol>\n</li>\n</ol>\n<h2 id="读取设置数组">读取/设置数组</h2>\n<ol>\n<li>索引值直接访问或设置</li>\n<li>改变length<pre><code>const colors2 = [1,2,3];\ncolors2.length = 2;\ncolors2;  // [1, 2]\ncolors2.length = 4;\ncolors2;  // [1, 2, undefined, undefined]</code></pre>数组max-length:2^32</li>\n</ol>\n<p>==数组索引和对象key的关系==</p>\n<h2 id="检测数组">检测数组</h2>\n<p>ES3: <code>value instanceof Array</code><br>前提是假定只有一个全局执行环境，如果有多窗口或窗体（frame）存在，检测的时候可能会存在错误。<br>因为<code>instanceof</code>的本质是用来检测<code>constructor.prototype</code>是否存在于参数<code>object</code>的原型链上，如果没有走构造方法，返回的结果可能会有出入。<br>比如：</p>\n<pre><code>const numberA = 1;\nnumberA instanceof Number // false\nconst numberB = new Number(1)\nnumberB instanceof Number // true</code></pre><p>ES5: <code>Array.isArray(value)</code><br>兼容性写法:</p>\n<pre><code>var isArray = Function.isArray || function(o) {\n    return typeof o === &#39;object&#39; &amp;&amp;\n    Object.prototype.toString.call(o) === &#39;[Object Array]&#39;;\n}</code></pre><h2 id="数组方法">数组方法</h2>\n<h3 id="栈方法last-in-first-out">栈方法(Last-In-First-Out)</h3>\n<ol>\n<li><code>push()</code></li>\n<li><code>pop()</code></li>\n</ol>\n<h3 id="队列方法first-in-first-out">队列方法(First-In-First-Out)</h3>\n<ol>\n<li><code>shift()</code></li>\n<li><code>unshift()</code></li>\n</ol>\n<p>==性能比较==\n栈方法只改变最后一项和数组长度，而队列方法则要改变每一项的索引值，所以栈方法的性能更好</p>\n<h3 id="重排序方法">重排序方法</h3>\n<ol>\n<li><code>reverse()</code></li>\n<li><code>sort()</code> 如果不传参数会先将每一项进行<code>toString()</code>操作，然后按照<code>unicode</code>字符串顺序排列</li>\n</ol>\n<h3 id="操作方法">操作方法</h3>\n<ol>\n<li><code>concat()</code> 创建副本</li>\n<li><code>slice()</code> 不会改变原数组</li>\n<li><code>splice()</code><ol>\n<li>删除 <code>splice(startIndex, howMany)</code> ==howMany和数组长度以及startIndex的关系==\n<code>howmany = startIndex &gt; 0 ? Math.min(array.length, howmany) : Math.min(Math.abs(startIndex), howmany)</code></li>\n<li>插入/替换 <code>splice(startIndex, howMany, ...insertVal)</code></li>\n</ol>\n</li>\n</ol>\n<h3 id="位置方法">位置方法</h3>\n<ol>\n<li><code>indexOf()</code></li>\n<li><code>lastIndexOf()</code></li>\n</ol>\n<h3 id="迭代方法">迭代方法</h3>\n<ol>\n<li><code>every()</code></li>\n<li><code>filter()</code></li>\n<li><code>forEach()</code></li>\n<li><code>map()</code></li>\n<li><code>some()</code></li>\n</ol>\n<h3 id="归并方法">归并方法</h3>\n<ol>\n<li><code>reduce()</code></li>\n<li><code>reduceRight()</code></li>\n</ol>\n<h3 id="es6和es7新增">ES6和ES7新增</h3>\n<ol>\n<li><p><code>includes()</code></p>\n</li>\n<li><p><code>find()</code>和<code>findIndex()</code></p>\n</li>\n<li><p><code>keys()</code>和<code>values()</code>\n<code>keys()</code>返回一个新的Array迭代器，它包含数组中每个索引的键。<br><code>values()</code>返回一个新的Array迭代器，它包含数组中每个索引的值。\n如果是==稀疏数组==则会跳过空位，如</p>\n<pre><code>const array = [,,1]\nObject.keys(array) // [&quot;2&quot;]\nObject.values(array) // [1]</code></pre></li>\n<li><p>扩展运算符在数组中的应用</p>\n<pre><code>const arr1 = [0, 1, 2];\nconst arr2 = [3, 4, 5];\narr1.push(...arr2);\nMath.max(...arr1);</code></pre></li>\n<li><p><code>copyWithin()</code>方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，而不修改其大小。</p>\n</li>\n<li><p><code>fill()</code>方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。</p>\n</li>\n<li><p><code>flat()</code>和<code>flatMap()</code></p>\n</li>\n</ol>\n<h2 id="概念扩展">概念扩展</h2>\n<h3 id="数组索引和对象key的关系">数组索引和对象key的关系</h3>\n<p>数组是对象的特殊形式，所有的数组都是对象，可以为其创建任意名字的属性。但是只有小于2^32的非负整数才是索引，才会更新length。如：</p>\n<pre><code>const arr = [];\narr[&quot;a&quot;] = 1;\narr // arr是[a:1] length是0</code></pre><h3 id="稀疏数组">稀疏数组</h3>\n<p>稀疏数组就是包含从0开始的不连续索引的数组。通常数组的length属性值代表数组中元素的个数。如果数组是稀疏的，length属性值大于元素的个数。</p>\n<pre><code>const a4 = [,undefined];\n0 in a4 // fasle: a4在索引0处没有元素\n1 in a4 // true: a4在索引1处有一个值为undefined的元素</code></pre><h3 id="类数组对象">类数组对象</h3>\n<p>拥有一个数值length属性和对应非负整数属性的对象看做一种类型的数组。</p>\n<pre><code>const arrayLike = {\n  0: &#39;name&#39;,\n  1: &#39;age&#39;,\n  2: &#39;address&#39;,\n  length: 3\n}</code></pre><h2 id="数组应用">数组应用</h2>\n<ol>\n<li>做逻辑判断</li>\n<li>变量交换<pre><code>let a = 1;\nlet b = 2;\na = [b, b = a][0]\n[a, b] = [b, a]; //ES6方法</code></pre></li>\n<li>分割字符串<pre><code>Array.from(&#39;foo&#39;);\n&#39;foo&#39;.split(&#39;&#39;);\n[...&#39;foo&#39;];</code></pre></li>\n<li>深拷贝数组<pre><code>const arrA = [1, 2, 3]\nconst newArr1 = arrA.concat()\nconst newArr2 = [...arrA]  // 或者 const [...newArr2] = arrA;\nconst newArr3 = arrA.filter(i =&gt; i)\nconst newArr4 = arrA.slice(0)</code></pre></li>\n</ol>\n'},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var o=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("Menu"),t("router-view")],1)},c=[],i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{ref:"menu_container",staticClass:"menu_container",class:e.stick?"stick":""},[t("div",{staticClass:"menu"},[t("router-link",{attrs:{to:"/"}},[e._v("Home")]),t("router-link",{attrs:{to:"/music",title:"Songs I wrote."}},[e._v("Music")]),t("router-link",{attrs:{to:"/projects",title:"Projects I build."}},[e._v("Projects")]),t("router-link",{attrs:{to:"/about",title:"Who I am."}},[e._v("About")])],1),e.stick?e._e():t("div",{staticClass:"description"},[e._v(e._s(e.description))])])},a=[],l=(t("7f7f"),new o["a"]),s=l,d={name:"Menu",data:function(){return{description:"Welcome to whalsper.",stick:!1}},props:{msg:String},mounted:function(){window.addEventListener("scroll",this.stickMenu,!0),this.menuPadding=this.$refs.menu_container.height,console.log(this.menuPadding)},methods:{getDescription:function(){var e=this.$route.name,n="Welcome to whalsper.";switch(e){case"music":n="Songs I wrote.";break;case"thoughts":n="Things I saw.";break;case"projects":n="Projects I build.";break;case"about":n="Who I am.";break;default:break}return this.description=n},stickMenu:function(){var e=document.documentElement.scrollTop||document.body.scrollTop;this.stick=e>80,s.$emit("stickMenu",this.stick)},scrollToTop:function(){document.getElementById("app").scrollIntoView("false"),this.stick=!1}},watch:{$route:"getDescription"}},u=d,p=(t("3e10"),t("2877")),f=Object(p["a"])(u,i,a,!1,null,"74638502",null),h=f.exports,m=(t("e222"),{name:"home",components:{Menu:h}}),b=m,y=(t("034f"),Object(p["a"])(b,r,c,!1,null,null,null)),v=y.exports,g=t("8c4f"),k=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"home",class:e.stick?"stick":""},[t("Article")],1)},w=[],A=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"article"},e._l(e.article,function(n,o){return t("div",{key:o,staticClass:"article-content",domProps:{innerHTML:e._s(n)}})}),0)},j=[],_=t("30a9"),x=_.ARTICLE_LIST,O={name:"article",components:{},data:function(){return{article:x}},methods:{},created:function(){}},M=O,E=Object(p["a"])(M,A,j,!1,null,"04aebd92",null),I=E.exports,S={name:"home",components:{Article:I},data:function(){return{Article:I,stick:!1}},methods:{},created:function(){},mounted:function(){var e=this;s.$on("stickMenu",function(n){e.stick=n})}},T=S,C=(t("4d3a"),Object(p["a"])(T,k,w,!1,null,"d815b746",null)),P=C.exports,L=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"projects"},e._l(e.projectsData,function(n,o){return t("div",{key:o,staticClass:"item",on:{click:function(t){return e.goToLink(n.link)}}},[t("img",{attrs:{src:n.thumbnail,alt:n.title}}),t("div",[t("div",{staticClass:"title"},[e._v(e._s(n.title))]),t("div",{staticClass:"tag"},[e._v(e._s(n.tag))])])])}),0)},q=[],$={name:"Projects",data:function(){return{projectsData:[{title:"Calculator",tag:"React",thumbnail:t("b76a"),link:"https://debrajohn.github.io/calculator-react/build"},{title:"Greatest Dad",tag:"Vue",thumbnail:t("d739"),link:"https://debrajohn.github.io/Greatest-Dad/dist/"}]}},methods:{goToLink:function(e){window.open(e)}}},D=$,F=(t("3c97"),Object(p["a"])(D,L,q,!1,null,"717b0f20",null)),N=F.exports;o["a"].use(g["a"]);var W=new g["a"]({mode:"history",base:"/dist/",routes:[{path:"/",name:"home",component:P},{path:"/about",name:"about",component:function(){return t.e("about").then(t.bind(null,"f820"))}},{path:"/thoughts",name:"thoughts"},{path:"/music",name:"music"},{path:"/projects",name:"projects",component:N}]});o["a"].config.productionTip=!1,new o["a"]({router:W,render:function(e){return e(v)}}).$mount("#app")},"64a9":function(e,n,t){},"83a3":function(e,n,t){},b76a:function(e,n,t){e.exports=t.p+"img/calculator.341778a6.png"},d739:function(e,n,t){e.exports=t.p+"img/greatest-dad.2882fe18.png"},da51:function(e,n,t){},e212:function(e,n,t){},e222:function(e,n,t){},ee45:function(e,n,t){var o={"./Array.md":"53f6"};function r(e){var n=c(e);return t(n)}function c(e){var n=o[e];if(!(n+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n}r.keys=function(){return Object.keys(o)},r.resolve=c,e.exports=r,r.id="ee45"}});
//# sourceMappingURL=app.df167c99.js.map