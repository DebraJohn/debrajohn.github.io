(function(e){function n(n){for(var o,r,a=n[0],d=n[1],l=n[2],s=0,u=[];s<a.length;s++)r=a[s],i[r]&&u.push(i[r][0]),i[r]=0;for(o in d)Object.prototype.hasOwnProperty.call(d,o)&&(e[o]=d[o]);f&&f(n);while(u.length)u.shift()();return c.push.apply(c,l||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],o=!0,r=1;r<t.length;r++){var a=t[r];0!==i[a]&&(o=!1)}o&&(c.splice(n--,1),e=d(d.s=t[0]))}return e}var o={},r={app:0},i={app:0},c=[];function a(e){return d.p+"../js/"+({about:"about"}[e]||e)+"."+{about:"529920bb"}[e]+".js"}function d(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.e=function(e){var n=[],t={about:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise(function(n,t){for(var o="../css/"+({about:"about"}[e]||e)+"."+{about:"092fb05c"}[e]+".css",i=d.p+o,c=document.getElementsByTagName("link"),a=0;a<c.length;a++){var l=c[a],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===o||s===i))return n()}var u=document.getElementsByTagName("style");for(a=0;a<u.length;a++){l=u[a],s=l.getAttribute("data-href");if(s===o||s===i)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var o=n&&n.target&&n.target.src||i,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=o,delete r[e],f.parentNode.removeChild(f),t(c)},f.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){r[e]=0}));var o=i[e];if(0!==o)if(o)n.push(o[2]);else{var c=new Promise(function(n,t){o=i[e]=[n,t]});n.push(o[2]=c);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,d.nc&&s.setAttribute("nonce",d.nc),s.src=a(e),l=function(n){s.onerror=s.onload=null,clearTimeout(u);var t=i[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src,c=new Error("Loading chunk "+e+" failed.\n("+o+": "+r+")");c.type=o,c.request=r,t[1](c)}i[e]=void 0}};var u=setTimeout(function(){l({type:"timeout",target:s})},12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(n)},d.m=e,d.c=o,d.d=function(e,n,t){d.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,n){if(1&n&&(e=d(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)d.d(t,o,function(n){return e[n]}.bind(null,o));return t},d.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(n,"a",n),n},d.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},d.p="/",d.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=n,l=l.slice();for(var u=0;u<l.length;u++)n(l[u]);var f=s;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"005e":function(e,n){e.exports='<h1 id="用遍历代替ifelse--js">用遍历代替if/else | JS</h1>\n<html><div class="articleTime">2019.07.29</div></html>\n\n<hr>\n<h2 id="前言">前言</h2>\n<p>最近利用改完 bug 的空闲期，优化了一下比较不优雅的代码。<br>这里分享一种用遍历代替<code>if else</code>的写法。</p>\n<h2 id="需求">需求</h2>\n<p>调用接口返回一个 code, 前端需要根据不同的 code 设置不同的图标。多个 code 可能使用同一个图标。</p>\n<h2 id="改造前">改造前</h2>\n<p>改造前的代码逻辑比较平铺直叙，用了大量的<code>if...else</code>语句。<br>首先，这种方法是完全 OK 的（工作上，以能够实现业务为第一目标。）<br>但是在写法上呢，篇幅又长又臭。</p>\n<pre><code>const changeWeatherCode = (code) =&gt; {\n  if ((code &gt; 0 &amp;&amp; code &lt;= 2) ||  code == 5 || code == 30 || (code &gt; 32 &amp;&amp; code &lt;= 34)) {\n    return &#39;SUNNY&#39;;\n  } else if ((code &gt; 2 &amp;&amp; code &lt;= 4) || (code &gt; 5 &amp;&amp; code &lt;= 6) || (code &gt; 34 &amp;&amp; code &lt;= 36)) {\n    return &#39;CLOUDY&#39;;\n  } else if ((code &gt; 6 &amp;&amp; code &lt;= 8) || code == 31 || (code &gt; 36 &amp;&amp; code &lt;= 38)) {\n    return &#39;DREARY&#39;;\n  } else if (code == 11) {\n    return &#39;FOG&#39;;\n  } else if ((code &gt; 11 &amp;&amp; code &lt;= 14) || (code &gt; 38 &amp;&amp; code &lt;= 40)) {\n    return &#39;SHOWERS&#39;;\n  } else if ((code &gt; 14 &amp;&amp; code &lt;= 17) || (code &gt; 40 &amp;&amp; code &lt;= 42)) {\n    return &#39;T_STORMS&#39;;\n  } else if (code == 18) {\n    return &#39;RAIN&#39;;\n  } else if ((code &gt; 18 &amp;&amp; code &lt;= 24) || (code &gt; 42 &amp;&amp; code &lt;= 44)) {\n    return &#39;SNOW&#39;;\n  } else if (code &gt; 24 &amp;&amp; code &lt;= 29) {\n    return &#39;RAIN_SNOW&#39;;\n  } else if (code == 32) {\n    return &#39;WIND&#39;;\n  }\n}</code></pre><p>（而且，每个if里面都有返回值，就不需要再else了，直接下一个if即可）</p>\n<h2 id="改造思路">改造思路</h2>\n<p>这些 code 是从 0~44，并分为 10 大类。<br>是不是可以用对象形式储存，更为直观呢？</p>\n<pre><code>const codeToName = {\n  SUNNY: [1, 2, 5, 30, 33, 34],\n  CLOUDY: [3, 4, 6, 35, 36],\n  DREARY: [7, 8, 31, 37, 38],\n  T_STORMS: [15, 16, 17, 41, 42],\n  SHOWERS: [12, 13, 14, 39, 40],\n  SNOW: [19, 20, 21, 22, 23, 24, 43, 44],\n  RAIN_SNOW: [25, 26, 27, 28, 29],\n  RAIN: [18],\n  WIND: [32],\n  FOG: [11]\n};</code></pre><p>这里的改写各位千万别自己手动写进去，费时费力又容易出错。<br>可以利用原来的代码，用 for 循环 44 次+push 的方法直接生成一个这样的对象。<br>接下来，我们就要开始遍历了。通过传进来的 code，来找到对应的键名。</p>\n<h2 id="改造后">改造后</h2>\n<p>遍历的方法有很多种，<code>for</code>循环、<code>filter</code>、<code>find</code>、<code>findIndex</code>、<code>indexOf</code>、<code>includes</code>等等都是可以用的，但是注意返回的值是不同的。</p>\n<h4 id="for">for</h4>\n<pre><code>const changeWeatherCode = (code) =&gt; {\n  for (let i in codeToName) {\n    for (const j of codeToName[i]) {\n       if (j === code) return i\n    }\n  }\n}</code></pre><h4 id="filter">filter</h4>\n<pre><code>const changeWeatherCode = (code) =&gt; {\n  for (let i in codeToName) {\n    const result = codeToName[i].filter(item =&gt; item === code)\n    if (result.length) return i // filter会返回一个数组，没有找到则返回空数组\n  }\n}</code></pre><h4 id="find">find</h4>\n<pre><code>const changeWeatherCode = (code) =&gt; {\n  for (let i in codeToName) {\n    const result = codeToName[i].find(item =&gt; item === code)\n    if (result) return i // find返回键值，没有找到则返回undefined\n  }\n}</code></pre><h4 id="findindex">findIndex</h4>\n<pre><code>const changeWeatherCode = (code) =&gt; {\n  for (let i in codeToName) {\n    const result = codeToName[i].find(item =&gt; item === code)\n    if (result !== -1) return i // findIndex返回索引值，没有找到则返回-1\n  }\n}</code></pre><h4 id="补充indexof和includes">补充indexOf和includes</h4>\n<p>大神说用indexOf和includes更方便，这里也记录一下。</p>\n<pre><code>const changeWeatherCode = (code) =&gt; {\n  for (let i in codeToName) {\n    // if (codeToName[i].indexOf(code) &gt; -1) return i   或者\n    if (codeToName[i].includes(code)) return i\n  }\n}</code></pre><h2 id="总结">总结</h2>\n<p>这几种写法都大同小异，只需要注意返回值即可。<br>相比起原先大白话的写法，后者把代码抽象化，简洁明了，也更加优雅。<br>另外，如果返回的code具有规律的话，也可以用正则来判断区间。</p>\n'},"034f":function(e,n,t){"use strict";var o=t("64a9"),r=t.n(o);r.a},"05e4":function(e,n){e.exports='<h1 id="基础概念--nodejs">基础概念 | NodeJs</h1>\n<html><div class="articleTime">2019.05.05</div></html>\n\n<hr>\n<p>资料原文：<a href="http://nqdeng.github.io/7-days-nodejs/">http://nqdeng.github.io/7-days-nodejs/</a></p>\n<h2 id="概念">概念</h2>\n<p>JS是脚本语言，脚本语言都需要一个解析器才能运行<br>对于写在HTML页面里的JS，浏览器充当了解析器的角色<br>而对于需要独立运行的JS，NodeJS就是一个解析器</p>\n<h2 id="用处">用处</h2>\n<p>实现高性能Web服务器</p>\n<h2 id="运行">运行</h2>\n<ol>\n<li>在终端输入<code>node console.log(&#39;Hello World&#39;)</code></li>\n<li>创建一个hello.js文件，输入<code>console.log(&#39;Hello World&#39;)</code>， 然后在终端输入<code>node hello</code></li>\n</ol>\n<h2 id="模块">模块</h2>\n<h4 id="require">require</h4>\n<p><code>require</code>函数用于在当前模块中引用别的模块，也可以引用一个json文件。如：</p>\n<pre><code>var foo1 = require(&#39;./foo&#39;);\nvar foo2 = require(&#39;./foo.js&#39;);\nvar foo3 = require(&#39;/home/user/foo&#39;);\n\nvar data = require(&#39;./data.json&#39;);</code></pre><h4 id="exports">exports</h4>\n<p><code>exports</code>对象是当前模块的导出对象，用于导出模块公有方法和属性。如：</p>\n<pre><code>exports.hello = () =&gt; {\n    console.log(&#39;Hello World!&#39;);\n};</code></pre><h4 id="module">module</h4>\n<p>通过<code>module</code>对象可以访问到当前模块的一些相关信息，但最多的用途是替换当前模块的导出对象，导出一个<strong>函数</strong>。如:</p>\n<pre><code>module.exports = function () {\n    console.log(&#39;Hello World!&#39;);\n};</code></pre><p><code>exports</code>和<code>module</code>的区别：在require引用的时候，exports导出的为对象，而module导出的是函数。</p>\n<h4 id="模块初始化">模块初始化</h4>\n<p>一个模块中的JS代码仅在模块第一次被使用时执行一次，并在执行过程中初始化模块的导出对象。之后，缓存起来的导出对象被重复利用。</p>\n<h4 id="主模块">主模块</h4>\n<p>通过命令行启动程序的模块成为主模块，如：<code>node main</code>, <code>main.js</code>就是主模块。</p>\n<h2 id="总结">总结</h2>\n<ul>\n<li><p>NodeJS是一个JS脚本解析器，任何操作系统下安装NodeJS本质上做的事情都是把NodeJS执行程序复制到一个目录，然后保证这个目录在系统PATH环境变量下，以便终端下可以使用node命令。</p>\n</li>\n<li><p>终端下直接输入node命令可进入命令交互模式，很适合用来测试一些JS代码片段，比如正则表达式。</p>\n</li>\n<li><p>NodeJS使用CMD模块系统，主模块作为程序入口点，所有模块在执行过程中只初始化一次。</p>\n</li>\n</ul>\n'},"060b":function(e,n,t){"use strict";t.r(n);var o=t("427b"),r=t.n(o);for(var i in o)"default"!==i&&function(e){t.d(n,e,function(){return o[e]})}(i);n["default"]=r.a},1408:function(e,n,t){"use strict";var o=t("6f3f"),r=t.n(o);r.a},"199c":function(e,n,t){"use strict";var o=t("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t("fb62"));t("e222");var i={name:"home",components:{Menu:r.default}};n.default=i},"23be":function(e,n,t){"use strict";t.r(n);var o=t("199c"),r=t.n(o);for(var i in o)"default"!==i&&function(e){t.d(n,e,function(){return o[e]})}(i);n["default"]=r.a},"29b4":function(e,n,t){"use strict";var o=t("bca1"),r=t.n(o);r.a},"2f35":function(e,n,t){"use strict";var o=t("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,t("7f7f");var r=o(t("f6a5")),i={name:"Menu",data:function(){return{description:"Welcome to whalsper.",stick:!1}},props:{msg:String},mounted:function(){},methods:{getDescription:function(){var e=this.$route.name,n="";switch(e){case"home":n="Welcome to whalsper.";break;case"music":n="Songs I wrote.";break;case"articles":n="Things I saw.";break;case"projects":n="Projects I build.";break;case"about":n="Who I am.";break;default:n="";break}return this.description=n},stickMenu:function(){var e=document.documentElement.scrollTop||document.body.scrollTop;this.stick=e>80,r.default.$emit("stickMenu",this.stick)},scrollToTop:function(){document.getElementById("app").scrollIntoView("false"),this.stick=!1}},watch:{$route:"getDescription"}};n.default=i},"30a9":function(e,n,t){"use strict";var o=t("288e");t("ac6a"),t("4f7f"),t("5df3"),t("1c4c");var r=o(t("75fc")),i=[{id:"ToKillAMockingBird",title:"Walk My Shoes And See | Book Review",postTime:"2019.09.01",tag:["book"]},{id:"Array",title:"数组基础 | JS",postTime:"2019.08.13",tag:["js"]},{id:"UsingMapInsteadOfIfElse",title:"用遍历代替if/else | JS",postTime:"2019.07.29",tag:["js"]},{id:"Introduce_node",title:"基础概念 | NodeJs",postTime:"2019.05.05",tag:["node"]}],c=function(e){return e.map(function(e){return e.content=t("ee45")("./".concat(e.id,".md"))}),e},a=function(e){var n=[];return e.map(function(e){n.push.apply(n,(0,r.default)(e.tag))}),Array.from(new Set(n))},d=c(i),l=a(i);e.exports={ARTICLE_LIST:d,TAG_LIST:l}},"318c":function(e,n,t){"use strict";var o=t("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t("ac1f")),i={name:"Projects",data:function(){return{projectsData:r.default}},methods:{goToLink:function(e){window.open(e)}}};n.default=i},3967:function(e,n,t){"use strict";t.r(n);var o=t("e09a"),r=t("060b");for(var i in r)"default"!==i&&function(e){t.d(n,e,function(){return r[e]})}(i);t("8986");var c=t("2877"),a=Object(c["a"])(r["default"],o["a"],o["b"],!1,null,"7a2cdb7d",null);n["default"]=a.exports},"3dfd":function(e,n,t){"use strict";t.r(n);var o=t("ac6c"),r=t("23be");for(var i in r)"default"!==i&&function(e){t.d(n,e,function(){return r[e]})}(i);t("034f");var c=t("2877"),a=Object(c["a"])(r["default"],o["a"],o["b"],!1,null,null,null);n["default"]=a.exports},"41cb":function(e,n,t){"use strict";var o=t("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t("2b0e")),i=o(t("8c4f")),c=o(t("bb51")),a=o(t("8fd7")),d=o(t("5d22"));r.default.use(i.default);var l=new i.default({mode:"hash",base:"/",routes:[{path:"*",name:"home",component:c.default},{path:"/about",name:"about",component:function(){return t.e("about").then(t.bind(null,"8ab4"))}},{path:"/articles",name:"articles",component:d.default},{path:"/music",name:"music"},{path:"/projects",name:"projects",component:a.default},{path:"/articles/:articleId",name:"article",component:function(){return Promise.resolve().then(t.bind(null,"3967"))}}]});n.default=l},"427b":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,t("7514");var o=t("5678"),r=t("30a9"),i=r.ARTICLE_LIST,c={name:"article",components:{},data:function(){return{ARTICLE_LIST:i,activeIndex:-1,showCategoryFlag:!1,thisArticle:{}}},props:{showCategory:Boolean},methods:{findThisArticle:function(e){this.thisArticle=i.find(function(n){return n.id===e})},scrollToThisArticle:function(e){this.$refs.articleContent[e].scrollIntoView()},handleTouch:function(e){(0,o.isPhone)()&&(this.showCategoryFlag=e.target.className.indexOf("category")>-1)},toThisArticle:function(e){this.$router.push({name:"test",params:{testId:e}})}},created:function(){},mounted:function(){this.findThisArticle(this.$route.params.articleId),document.querySelector("#app").addEventListener("click",this.handleTouch,!0)},beforeDestroy:function(){document.querySelector("#app").removeEventListener("touch",this.handleTouch,!0)}};n.default=c},"53f6":function(e,n){e.exports='<h1 id="数组基础--js">数组基础 | JS</h1>\n<html><div class="articleTime">2019.08.13</div></html>\n\n<hr>\n<h2 id="创建数组">创建数组</h2>\n<ol>\n<li><p>数组字面量</p>\n<pre><code>const values = [1,2,,];  // values.length ?</code></pre><p>大部分浏览器会返回<code>values</code>的<code>length</code>是3，因为js允许数组中的值以<code>,</code>结尾。 \n但是，在IE8以及以前的浏览器，会把<code>length</code>当作4，然后<code>values[4] === undefined</code></p>\n</li>\n<li><p><code>Array</code>构造器</p>\n<pre><code>const array1 = new Array(3, 4);\nconst array2 = Array(3,4); // 可以省略new操作符\nconst array3 = new Array(3); // 创建一个length为3的空数组(稀疏数组)\nconst array4 = Array.of(3); // ES6方法，生成[3]</code></pre></li>\n<li><p>ES6方法  </p>\n<ol>\n<li><code>Array.of()</code><br>与<code>Array</code>构造器的区别：不考虑参数的数量或类型</li>\n<li><code>Array.from()</code><br>从一个类数组或可迭代对象中创建一个新的数组实例。<ul>\n<li>分割字符串 \n<code>Array.from(&#39;foo&#39;) // [&#39;f&#39;, &#39;o&#39;, &#39;o&#39;]</code></li>\n<li>==类数组对象==转数组<pre><code>const arrayLike = {\n0: &#39;html&#39;,\n1: &#39;js&#39;,\n2: &#39;css&#39;,\nlength: 3 // 必需\n}\nArray.from(arrayLike) // [&#39;html&#39;, &#39;js, &#39;css&#39;]</code></pre></li>\n<li>可迭代对象转数组<pre><code>const MapArray = new Map([[&#39;a&#39;, 1], [&#39;b&#39;, 5], [&#39;c&#39;, 8]])\nArray.from(MapArray) // ][&quot;a&quot;, 1],  [&quot;b&quot;, 5], [&quot;c&quot;, 8]]</code></pre></li>\n<li>数组去重<pre><code>const SetArray = new Set([1, 2, 2, 3, 4, 4, 4])\nArray.from(SetArray) // [1,2,3,4]用作数组去重</code></pre></li>\n</ul>\n</li>\n</ol>\n</li>\n</ol>\n<h2 id="读取设置数组">读取/设置数组</h2>\n<ol>\n<li>索引值直接访问或设置</li>\n<li>改变length<pre><code>const colors2 = [1,2,3];\ncolors2.length = 2;\ncolors2;  // [1, 2]\ncolors2.length = 4;\ncolors2;  // [1, 2, undefined, undefined]</code></pre>数组max-length:2^32</li>\n</ol>\n<p>==数组索引和对象key的关系==</p>\n<h2 id="检测数组">检测数组</h2>\n<p>ES3: <code>value instanceof Array</code><br>前提是假定只有一个全局执行环境，如果有多窗口或窗体（frame）存在，检测的时候可能会存在错误。<br>因为<code>instanceof</code>的本质是用来检测<code>constructor.prototype</code>是否存在于参数<code>object</code>的原型链上，如果没有走构造方法，返回的结果可能会有出入。<br>比如：</p>\n<pre><code>const numberA = 1;\nnumberA instanceof Number // false\nconst numberB = new Number(1)\nnumberB instanceof Number // true</code></pre><p>ES5: <code>Array.isArray(value)</code><br>兼容性写法:</p>\n<pre><code>var isArray = Function.isArray || function(o) {\n    return typeof o === &#39;object&#39; &amp;&amp;\n    Object.prototype.toString.call(o) === &#39;[Object Array]&#39;;\n}</code></pre><h2 id="数组方法">数组方法</h2>\n<h3 id="栈方法last-in-first-out">栈方法(Last-In-First-Out)</h3>\n<ol>\n<li><code>push()</code></li>\n<li><code>pop()</code></li>\n</ol>\n<h3 id="队列方法first-in-first-out">队列方法(First-In-First-Out)</h3>\n<ol>\n<li><code>shift()</code></li>\n<li><code>unshift()</code></li>\n</ol>\n<p>==性能比较==\n栈方法只改变最后一项和数组长度，而队列方法则要改变每一项的索引值，所以栈方法的性能更好</p>\n<h3 id="重排序方法">重排序方法</h3>\n<ol>\n<li><code>reverse()</code></li>\n<li><code>sort()</code> 如果不传参数会先将每一项进行<code>toString()</code>操作，然后按照<code>unicode</code>字符串顺序排列</li>\n</ol>\n<h3 id="操作方法">操作方法</h3>\n<ol>\n<li><code>concat()</code> 创建副本</li>\n<li><code>slice()</code> 不会改变原数组</li>\n<li><code>splice()</code><ol>\n<li>删除 <code>splice(startIndex, howMany)</code> ==howMany和数组长度以及startIndex的关系==\n<code>howmany = startIndex &gt; 0 ? Math.min(array.length, howmany) : Math.min(Math.abs(startIndex), howmany)</code></li>\n<li>插入/替换 <code>splice(startIndex, howMany, ...insertVal)</code></li>\n</ol>\n</li>\n</ol>\n<h3 id="位置方法">位置方法</h3>\n<ol>\n<li><code>indexOf()</code></li>\n<li><code>lastIndexOf()</code></li>\n</ol>\n<h3 id="迭代方法">迭代方法</h3>\n<ol>\n<li><code>every()</code></li>\n<li><code>filter()</code></li>\n<li><code>forEach()</code></li>\n<li><code>map()</code></li>\n<li><code>some()</code></li>\n</ol>\n<h3 id="归并方法">归并方法</h3>\n<ol>\n<li><code>reduce()</code></li>\n<li><code>reduceRight()</code></li>\n</ol>\n<h3 id="es6和es7新增">ES6和ES7新增</h3>\n<ol>\n<li><p><code>includes()</code></p>\n</li>\n<li><p><code>find()</code>和<code>findIndex()</code></p>\n</li>\n<li><p><code>keys()</code>和<code>values()</code>\n<code>keys()</code>返回一个新的Array迭代器，它包含数组中每个索引的键。<br><code>values()</code>返回一个新的Array迭代器，它包含数组中每个索引的值。\n如果是==稀疏数组==则会跳过空位，如</p>\n<pre><code>const array = [,,1]\nObject.keys(array) // [&quot;2&quot;]\nObject.values(array) // [1]</code></pre></li>\n<li><p>扩展运算符在数组中的应用</p>\n<pre><code>const arr1 = [0, 1, 2];\nconst arr2 = [3, 4, 5];\narr1.push(...arr2);\nMath.max(...arr1);</code></pre></li>\n<li><p><code>copyWithin()</code>方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，而不修改其大小。</p>\n</li>\n<li><p><code>fill()</code>方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。</p>\n</li>\n<li><p><code>flat()</code>和<code>flatMap()</code></p>\n</li>\n</ol>\n<h2 id="概念扩展">概念扩展</h2>\n<h3 id="数组索引和对象key的关系">数组索引和对象key的关系</h3>\n<p>数组是对象的特殊形式，所有的数组都是对象，可以为其创建任意名字的属性。但是只有小于2^32的非负整数才是索引，才会更新length。如：</p>\n<pre><code>const arr = [];\narr[&quot;a&quot;] = 1;\narr // arr是[a:1] length是0</code></pre><h3 id="稀疏数组">稀疏数组</h3>\n<p>稀疏数组就是包含从0开始的不连续索引的数组。通常数组的length属性值代表数组中元素的个数。如果数组是稀疏的，length属性值大于元素的个数。</p>\n<pre><code>const a4 = [,undefined];\n0 in a4 // fasle: a4在索引0处没有元素\n1 in a4 // true: a4在索引1处有一个值为undefined的元素</code></pre><h3 id="类数组对象">类数组对象</h3>\n<p>拥有一个数值length属性和对应非负整数属性的对象看做一种类型的数组。</p>\n<pre><code>const arrayLike = {\n  0: &#39;name&#39;,\n  1: &#39;age&#39;,\n  2: &#39;address&#39;,\n  length: 3\n}</code></pre><h2 id="数组应用">数组应用</h2>\n<ol>\n<li>做逻辑判断</li>\n<li>变量交换<pre><code>let a = 1;\nlet b = 2;\na = [b, b = a][0]\n[a, b] = [b, a]; //ES6方法</code></pre></li>\n<li>分割字符串<pre><code>Array.from(&#39;foo&#39;);\n&#39;foo&#39;.split(&#39;&#39;);\n[...&#39;foo&#39;];</code></pre></li>\n<li>深拷贝数组<pre><code>const arrA = [1, 2, 3]\nconst newArr1 = arrA.concat()\nconst newArr2 = [...arrA]  // 或者 const [...newArr2] = arrA;\nconst newArr3 = arrA.filter(i =&gt; i)\nconst newArr4 = arrA.slice(0)</code></pre></li>\n</ol>\n'},5678:function(e,n,t){"use strict";function o(){return/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)}Object.defineProperty(n,"__esModule",{value:!0}),n.isPhone=o},"56d7":function(e,n,t){"use strict";var o=t("288e");t("cadf"),t("551c"),t("f751"),t("097d");var r=o(t("2b0e")),i=o(t("3dfd")),c=o(t("41cb"));r.default.config.productionTip=!1,new r.default({router:c.default,render:function(e){return e(i.default)}}).$mount("#app")},"5a71":function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"home",class:e.stick?"stick":""})},r=[];t.d(n,"a",function(){return o}),t.d(n,"b",function(){return r})},"5d22":function(e,n,t){"use strict";t.r(n);var o=t("6c19"),r=t("f2be");for(var i in r)"default"!==i&&function(e){t.d(n,e,function(){return r[e]})}(i);t("7f24");var c=t("2877"),a=Object(c["a"])(r["default"],o["a"],o["b"],!1,null,"288aed7a",null);n["default"]=a.exports},"64a9":function(e,n,t){},"683d":function(e,n,t){"use strict";var o=t("d1f5"),r=t.n(o);r.a},"6c19":function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"articles",class:e.stick?"stick":""},[t("div",{staticClass:"article-container"},e._l(e.ARTICLE_LIST,function(n,o){return t("div",{key:o,ref:"articleContent",refInFor:!0,staticClass:"article-list"},[t("div",{staticClass:"article-title",on:{click:function(t){return e.toArticleDetail(n.id)}}},[e._v(e._s(n.title))]),t("span",{staticClass:"article-time"},[e._v(e._s(n.postTime)+"\n        "),e._l(n.tag,function(n,o){return t("span",{key:o,staticClass:"article-tag"},[e._v(e._s(n))])})],2)])}),0)])},r=[];t.d(n,"a",function(){return o}),t.d(n,"b",function(){return r})},"6e80":function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{ref:"menu_container",staticClass:"menu_container",class:e.stick?"stick":""},[t("div",{staticClass:"menu"},[t("router-link",{attrs:{to:"/"}},[e._v("Home")]),t("router-link",{attrs:{to:"/music",title:"Songs I wrote."}},[e._v("Music")]),t("router-link",{attrs:{to:"/articles",title:"Things I saw."}},[e._v("Articles")]),t("router-link",{attrs:{to:"/projects",title:"Projects I build."}},[e._v("Projects")]),t("router-link",{attrs:{to:"/about",title:"Who I am."}},[e._v("About")])],1),e.stick?e._e():t("div",{staticClass:"description"},[e._v(e._s(e.description))])])},r=[];t.d(n,"a",function(){return o}),t.d(n,"b",function(){return r})},"6f3f":function(e,n,t){},"7ad4":function(e,n,t){"use strict";t.r(n);var o=t("9cae"),r=t.n(o);for(var i in o)"default"!==i&&function(e){t.d(n,e,function(){return o[e]})}(i);n["default"]=r.a},"7f24":function(e,n,t){"use strict";var o=t("d0a2"),r=t.n(o);r.a},"81de":function(e,n,t){e.exports=t.p+"../img/CollectGame.aa4e39a7.svg"},8986:function(e,n,t){"use strict";var o=t("bf3b"),r=t.n(o);r.a},"8fd7":function(e,n,t){"use strict";t.r(n);var o=t("bc02"),r=t("ad6f");for(var i in r)"default"!==i&&function(e){t.d(n,e,function(){return r[e]})}(i);t("1408");var c=t("2877"),a=Object(c["a"])(r["default"],o["a"],o["b"],!1,null,"691ad31c",null);n["default"]=a.exports},"8ff5":function(e,n,t){e.exports=t.p+"../img/Calculator.5371cc51.svg"},"95ab":function(e,n){e.exports='<h1 id="walk-my-shoes-and-see">Walk My Shoes And See</h1>\n<html><div class="articleTime">2019.09.01</div></html>\n\n<h6 id="《杀死一只知更鸟》书评">《杀死一只知更鸟》书评</h6>\n<hr>\n<p>这是一本关于成长、勇敢以及善良正义的书（在豆瓣标记了 1639 天想看，今天才把它看了）。书的大概内容就是讲南北战争之后，因为社会对黑人的歧视并未完全消除，父亲阿蒂克斯（白人律师）为被污蔑的黑人辩护，而遭到众人不解和瞧不起；而阿蒂克斯却十分绅士来应对一切问题，同时以身作则来教育自己的孩子，学会尊重和勇敢。</p>\n<p>一是勇气。在阿蒂克斯得知自己几乎没有胜算的时候，他依然决定要为黑人辩护，他告诉孩子“不能因为我们在此之前已经失败了一百年，就认为我们没有理由去争取胜利”；</p>\n<p>二是正义。在种族歧视深入人心，不歧视就会成为异类的小镇里，阿蒂克斯仍然可以用“人人生来平等”来对待每一个人。</p>\n<p>三是真诚。在教育孩子的时候能够真的以身作则，而非只是讲大道理和哄骗。</p>\n<p>长大之后人会变得越来越冷漠，比如小时候看到乞丐、流浪汉等人会觉得他们特别可怜，梦想长大开收容机构来帮助他们，想做很多很多的好事来造福社会。现在还期望着社会来造福一下自己呢。但是抛开这些伟大梦想，生活中自己是否能抛开偏见，保持善良呢。</p>\n<p>而在我看来，生活中的歧视处处可见。贫富歧视、性别歧视、性取向歧视等等。比如“女生就应该差不多时候就找个人嫁了，然后好好持家”，“同性恋就是性取向不正常”……很多歧视都来源于偏见，而偏见来源于无知（包括一些文化在大脑里根深蒂固，而无法看清人类本质）。</p>\n<p>这本书让我想到了小时候最经常听到的教育，那就是做个善良的人。我觉得做个善良的人最基础的就是不要瞎BB，不要随便评价一个人。</p>\n<p>就像书里说的，“除非你穿上一个人的鞋子，像他一样走来走去，否则你永远无法真正了解一个人”。</p>\n<p>也正如《了不起的盖茨比》的开头部分： “每逢你想要批评任何人的时候，你就记住，这个世界上所有的人， 并不是个个都有过你拥有的那些优越条件。”</p>\n'},9738:function(e,n,t){"use strict";t.r(n);var o=t("2f35"),r=t.n(o);for(var i in o)"default"!==i&&function(e){t.d(n,e,function(){return o[e]})}(i);n["default"]=r.a},"9cae":function(e,n,t){"use strict";var o=t("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t("f6a5")),i={name:"home",components:{},data:function(){return{stick:!1}},methods:{},created:function(){},mounted:function(){var e=this;r.default.$on("stickMenu",function(n){e.stick=n})}};n.default=i},ac1f:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=[{title:"Calculator",tag:"React",thumbnail:t("8ff5"),link:"https://debrajohn.github.io/calculator-react/build"},{title:"Collecting Game",tag:"React",thumbnail:t("81de"),link:"https://debrajohn.github.io/Collect-Number/"}],r=o;n.default=r},ac6c:function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("Menu"),t("transition",{attrs:{name:"slide-fade",mode:"out-in"}},[t("router-view")],1)],1)},r=[];t.d(n,"a",function(){return o}),t.d(n,"b",function(){return r})},ad6f:function(e,n,t){"use strict";t.r(n);var o=t("318c"),r=t.n(o);for(var i in o)"default"!==i&&function(e){t.d(n,e,function(){return o[e]})}(i);n["default"]=r.a},bb51:function(e,n,t){"use strict";t.r(n);var o=t("5a71"),r=t("7ad4");for(var i in r)"default"!==i&&function(e){t.d(n,e,function(){return r[e]})}(i);t("683d");var c=t("2877"),a=Object(c["a"])(r["default"],o["a"],o["b"],!1,null,"4f6fd69e",null);n["default"]=a.exports},bc02:function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"projects"},e._l(e.projectsData,function(n,o){return t("div",{key:o,staticClass:"item",on:{click:function(t){return e.goToLink(n.link)}}},[t("img",{attrs:{src:n.thumbnail,title:n.title}}),t("div",{staticClass:"right-content"},[t("div",{staticClass:"title"},[e._v(e._s(n.title))]),t("div",{staticClass:"tag"},[e._v(e._s(n.tag))])])])}),0)},r=[];t.d(n,"a",function(){return o}),t.d(n,"b",function(){return r})},bca1:function(e,n,t){},bf3b:function(e,n,t){},d0a2:function(e,n,t){},d1f5:function(e,n,t){},e09a:function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"article"},[e.showCategory?t("div",{staticClass:"category",class:e.showCategoryFlag&&"show"},[t("div",{staticClass:"category-trigger"}),t("div",{staticClass:"category-item title"},[e._v("文章目录")]),e._l(e.article,function(n,o){return t("div",{key:o,staticClass:"category-item item",on:{click:function(t){return e.toThisArticle(n.id)}}},[e._v(e._s(n.title))])})],2):e._e(),t("div",{staticClass:"article-container"},[t("div",{ref:"articleContent",staticClass:"article-content"},[t("div",{staticClass:"content",domProps:{innerHTML:e._s(e.thisArticle.content)}})])])])},r=[];t.d(n,"a",function(){return o}),t.d(n,"b",function(){return r})},e222:function(e,n,t){},ee45:function(e,n,t){var o={"./Array.md":"53f6","./Introduce_node.md":"05e4","./ToKillAMockingBird.md":"95ab","./UsingMapInsteadOfIfElse.md":"005e"};function r(e){var n=i(e);return t(n)}function i(e){var n=o[e];if(!(n+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n}r.keys=function(){return Object.keys(o)},r.resolve=i,e.exports=r,r.id="ee45"},f2be:function(e,n,t){"use strict";t.r(n);var o=t("f88c"),r=t.n(o);for(var i in o)"default"!==i&&function(e){t.d(n,e,function(){return o[e]})}(i);n["default"]=r.a},f6a5:function(e,n,t){"use strict";var o=t("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t("2b0e")),i=new r.default,c=i;n.default=c},f88c:function(e,n,t){"use strict";var o=t("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t("3967")),i=o(t("f6a5")),c=t("30a9"),a=c.ARTICLE_LIST,d=c.TAG_LIST,l={name:"articles",components:{Article:r.default},data:function(){return{ARTICLE_LIST:a,TAG_LIST:d,stick:!1}},methods:{toArticleDetail:function(e){this.$router.push({name:"article",params:{articleId:e}})}},created:function(){console.log(a)},mounted:function(){var e=this;i.default.$on("stickMenu",function(n){e.stick=n})}};n.default=l},fb62:function(e,n,t){"use strict";t.r(n);var o=t("6e80"),r=t("9738");for(var i in r)"default"!==i&&function(e){t.d(n,e,function(){return r[e]})}(i);t("29b4");var c=t("2877"),a=Object(c["a"])(r["default"],o["a"],o["b"],!1,null,"7b847804",null);n["default"]=a.exports}});
//# sourceMappingURL=app.f3b67537.js.map