(function(t){function e(e){for(var r,a,i=e[0],s=e[1],c=e[2],l=0,p=[];l<i.length;l++)a=i[l],o[a]&&p.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);f&&f(e);while(p.length)p.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(u.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},u=[];function a(t){return i.p+"../js/"+({about:"about"}[t]||t)+"."+{about:"860443fb"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise(function(e,r){n=o[t]=[e,r]});e.push(n[2]=r);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=a(t),u=function(e){s.onerror=s.onload=null,clearTimeout(c);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),u=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+r+": "+u+")");a.type=r,a.request=u,n[1](a)}o[t]=void 0}};var c=setTimeout(function(){u({type:"timeout",target:s})},12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var f=c;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"0d4b":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Menu"),n("router-view")],1)},u=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu_container"},[n("div",{staticClass:"menu"},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),n("router-link",{attrs:{to:"/music",title:"Songs I wrote"}},[t._v("Music")]),n("router-link",{attrs:{to:"/thoughts",title:"Things I saw"}},[t._v("Thoughts")]),n("router-link",{attrs:{to:"/about",title:"Something about me"}},[t._v("About")])],1),n("div",{staticClass:"description"},[t._v(t._s(t.description))])])},i=[],s=(n("7f7f"),{name:"Menu",data:function(){return{description:"Welcome to whalsper."}},props:{msg:String},methods:{getDescription:function(){var t=this.$route.name,e="Welcome to whalsper.";switch(t){case"music":e="Songs I wrote.";break;case"thoughts":e="Things I saw.";break;case"about":e="Who I am.";break;default:break}return this.description=e}},watch:{$route:"getDescription"}}),c=s,l=(n("85af"),n("2877")),f=Object(l["a"])(c,a,i,!1,null,"299b129e",null),p=f.exports,d={name:"home",components:{Menu:p}},h=d,m=(n("034f"),Object(l["a"])(h,o,u,!1,null,null,null)),v=m.exports,b=n("8c4f"),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"})},w=[],_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"profile"})},y=[],j={name:"Profile",props:{msg:String}},O=j,k=(n("590c"),Object(l["a"])(O,_,y,!1,null,"64bd2d80",null)),x=k.exports,P={name:"home",components:{Profile:x}},S=P,M=Object(l["a"])(S,g,w,!1,null,null,null),T=M.exports;r["a"].use(b["a"]);var $=new b["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:T},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/thoughts",name:"thoughts"},{path:"/music",name:"music"}]});r["a"].config.productionTip=!1,new r["a"]({router:$,render:function(t){return t(v)}}).$mount("#app")},"590c":function(t,e,n){"use strict";var r=n("0d4b"),o=n.n(r);o.a},"64a9":function(t,e,n){},"85af":function(t,e,n){"use strict";var r=n("8706"),o=n.n(r);o.a},8706:function(t,e,n){}});
//# sourceMappingURL=app.10dbf63b.js.map