!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){n(1),t.exports=n(11)},function(t,e,n){Nova.booting(function(t,e){e.addRoutes([{name:"nova-routes",path:"/nova-routes",component:n(2)}])})},function(t,e,n){var r=n(8)(n(9),n(10),!1,function(t){n(3)},"data-v-77694505",null);t.exports=r.exports},function(t,e,n){var r=n(4);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(6)("318afc82",r,!0,{})},function(t,e,n){(t.exports=n(5)(!1)).push([t.i,".table th[data-v-77694505]{padding:1.1rem 1.1rem .8rem}",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),s=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(s).concat([o]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var s=this[o][0];"number"==typeof s&&(r[s]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o=n(7),s={},a=r&&(document.head||document.getElementsByTagName("head")[0]),i=null,u=0,c=!1,l=function(){},d=null,f="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(t){for(var e=0;e<t.length;e++){var n=t[e],r=s[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(m(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(o=0;o<n.parts.length;o++)a.push(m(n.parts[o]));s[n.id]={id:n.id,refs:1,parts:a}}}}function h(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function m(t){var e,n,r=document.querySelector("style["+f+'~="'+t.id+'"]');if(r){if(c)return l;r.parentNode.removeChild(r)}if(p){var o=u++;r=i||(i=h()),e=b.bind(null,r,o,!1),n=b.bind(null,r,o,!0)}else r=h(),e=function(t,e){var n=e.css,r=e.media,o=e.sourceMap;r&&t.setAttribute("media",r);d.ssrId&&t.setAttribute(f,e.id);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}t.exports=function(t,e,n,r){c=n,d=r||{};var a=o(t,e);return v(a),function(e){for(var n=[],r=0;r<a.length;r++){var i=a[r];(u=s[i.id]).refs--,n.push(u)}e?v(a=o(t,e)):a=[];for(r=0;r<n.length;r++){var u;if(0===(u=n[r]).refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete s[u.id]}}}};var _,g=(_=[],function(t,e){return _[t]=e,_.filter(Boolean).join("\n")});function b(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=g(e,o);else{var s=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(s,a[e]):t.appendChild(s)}}},function(t,e){t.exports=function(t,e){for(var n=[],r={},o=0;o<e.length;o++){var s=e[o],a=s[0],i={id:t+":"+o,css:s[1],media:s[2],sourceMap:s[3]};r[a]?r[a].parts.push(i):n.push(r[a]={id:a,parts:[i]})}return n}},function(t,e){t.exports=function(t,e,n,r,o,s){var a,i=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(a=t,i=t.default);var c,l="function"==typeof i?i.options:i;if(e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),o&&(l._scopeId=o),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=c):r&&(c=r),c){var d=l.functional,f=d?l.render:l.beforeCreate;d?(l._injectStyles=c,l.render=function(t,e){return c.call(e),f(t,e)}):l.beforeCreate=f?[].concat(f,c):[c]}return{esModule:a,exports:i,options:l}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{routes:[],search:null}},mounted:function(){var t=this;axios.get("/nova-vendor/nova-routes").then(function(e){var n=e.data;t.routes=n})},methods:{cacheRoutes:function(){var t=this;axios.post("/nova-vendor/nova-routes").then(function(e){var n=e.data;t.$toasted.show(n,{type:"success"})}).catch(function(e){var n=e.response;t.$toasted.show(n.data,{type:"error"})})},clearRoutes:function(){var t=this;axios.delete("/nova-vendor/nova-routes").then(function(e){var n=e.data;t.$toasted.show(n,{type:"success"})}).catch(function(e){var n=e.response;t.$toasted.show(n.data,{type:"error"})})},filterRoutes:function(){var t=this.search.toLowerCase();this.routes.map(function(e){e.show=e.domain&&e.domain.toLowerCase().includes(t)||e.uri&&e.uri.toLowerCase().includes(t)||e.method&&e.method.toLowerCase().includes(t)||e.name&&e.name.toLowerCase().includes(t)||e.action&&e.action.toLowerCase().includes(t)})},handleInput:function(){var t=this;this.debounceInput(function(){t.filterRoutes()})},debounceInput:_.debounce(function(t){return t()},500)}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("heading",{staticClass:"mb-6"},[t._v("Routes")]),t._v(" "),n("div",{staticClass:"flex justify-between"},[n("div",{staticClass:"relative h-9 flex items-center mb-6"},[n("svg",{staticClass:"fill-current absolute ml-3 text-70",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20","aria-labelledby":"search",role:"presentation"}},[n("path",{attrs:{"fill-rule":"nonzero",d:"M14.32 12.906l5.387 5.387a1 1 0 0 1-1.414 1.414l-5.387-5.387a8 8 0 1 1 1.414-1.414zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"}})]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"appearance-none form-control form-input w-search pl-search",attrs:{placeholder:"Search",type:"search"},domProps:{value:t.search},on:{keyup:t.handleInput,input:function(e){e.target.composing||(t.search=e.target.value)}}})]),t._v(" "),n("span",{staticClass:"ml-aut0 mb-6"},[n("button",{staticClass:"btn btn-default btn-primary",on:{click:t.cacheRoutes}},[t._v("Cache Routes")]),t._v(" "),n("button",{staticClass:"btn btn-default btn-danger",on:{click:t.clearRoutes}},[t._v("Clear Route Cache")])])]),t._v(" "),n("div",{staticClass:"card rounded overflow-hidden shadow-lg"},[n("table",{staticClass:"table w-full"},[t._m(0),t._v(" "),n("tbody",t._l(t.routes,function(e){return e.show?n("tr",{key:e.uri},[n("td",[t._v(t._s(e.domain))]),t._v(" "),n("td",[n("p",{staticClass:"text-90"},[t._v(t._s(e.uri))]),t._v(" "),n("p",{staticClass:"text-xs mt-1 text-80"},[t._v(t._s(e.method))])]),t._v(" "),n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v(t._s(e.action))])]):t._e()}))])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{staticClass:"text-left"},[this._v("Domain")]),this._v(" "),e("th",{staticClass:"text-left"},[this._v("URI")]),this._v(" "),e("th",{staticClass:"text-left"},[this._v("Name")]),this._v(" "),e("th",{staticClass:"text-left"},[this._v("Action")])])])}]}},function(t,e){}]);