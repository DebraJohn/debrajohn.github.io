(function(t){function e(e){for(var r,a,u=e[0],s=e[1],c=e[2],l=0,p=[];l<u.length;l++)a=u[l],o[a]&&p.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);f&&f(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={app:0},i=[];function a(t){return u.p+"../js/"+({about:"about"}[t]||t)+"."+{about:"860443fb"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise(function(e,r){n=o[t]=[e,r]});e.push(n[2]=r);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=a(t),i=function(e){s.onerror=s.onload=null,clearTimeout(c);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+r+": "+i+")");a.type=r,a.request=i,n[1](a)}o[t]=void 0}};var c=setTimeout(function(){i({type:"timeout",target:s})},12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var f=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"49b7":function(t,e,n){"use strict";var r=n("75ad"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Menu"),n("router-view")],1)},i=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu_container"},[n("div",{staticClass:"menu"},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),n("router-link",{attrs:{to:"/music",title:"Songs I wrote"}},[t._v("Music")]),n("router-link",{attrs:{to:"/thoughts",title:"Things I saw"}},[t._v("Thoughts")]),n("router-link",{attrs:{to:"/about",title:"Something about me"}},[t._v("About")])],1),n("div",{staticClass:"description"},[t._v(t._s(t.description))])])},u=[],s=(n("7f7f"),{name:"Menu",data:function(){return{description:"Welcome to whalsper."}},props:{msg:String},methods:{getDescription:function(){var t=this.$route.name,e="Welcome to Whalsper.";switch(t){case"music":e="Songs I wrote.";break;case"thoughts":e="Things I saw.";break;case"about":e="Who I am.";break;default:break}return this.description=e}},watch:{$route:"getDescription"}}),c=s,l=(n("49b7"),n("2877")),f=Object(l["a"])(c,a,u,!1,null,"8ba0cf9e",null),p=f.exports,d={name:"home",components:{Menu:p}},h=d,v=(n("034f"),Object(l["a"])(h,o,i,!1,null,null,null)),m=v.exports,b=n("8c4f"),g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"card profile"},[n("div",[t._v("Name: DebraJohn")]),n("div",[t._v("Major: Front-End Engineer")]),n("div",[t._v("Sideline: Song Writer")]),n("div",[t._v("Hobbies: Movies | Books | Rock n Roll")]),n("div",{staticClass:"follow-me"},[t._v("github | douban | music | subscription")]),n("div",{staticClass:"contact-me"},[t._v("email: nihaozzihui@163.com")]),n("div",[t._v("......")]),n("div",[t._v("Not finished yet")])])])}],w={name:"home",components:{}},y=w,j=(n("573b"),Object(l["a"])(y,g,_,!1,null,"2c8324b2",null)),k=j.exports;r["a"].use(b["a"]);var O=new b["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:k},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/thoughts",name:"thoughts"},{path:"/music",name:"music"}]});r["a"].config.productionTip=!1,new r["a"]({router:O,render:function(t){return t(m)}}).$mount("#app")},"573b":function(t,e,n){"use strict";var r=n("dd0a"),o=n.n(r);o.a},"64a9":function(t,e,n){},"75ad":function(t,e,n){},dd0a:function(t,e,n){}});
//# sourceMappingURL=app.285ebec3.js.map