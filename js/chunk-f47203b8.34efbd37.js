(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f47203b8"],{"25f0":function(t,n,e){"use strict";var i=e("e330"),r=e("5e77").PROPER,s=e("6eeb"),c=e("825a"),a=e("3a9b"),o=e("577e"),u=e("d039"),f=e("ad6d"),h="toString",d=RegExp.prototype,l=d[h],p=i(f),v=u((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),g=r&&l.name!=h;(v||g)&&s(RegExp.prototype,h,(function(){var t=c(this),n=o(t.source),e=t.flags,i=o(void 0===e&&a(d,t)&&!("flags"in d)?p(t):e);return"/"+n+"/"+i}),{unsafe:!0})},"2ca0":function(t,n,e){"use strict";var i=e("23e7"),r=e("e330"),s=e("06cf").f,c=e("50c4"),a=e("577e"),o=e("5a34"),u=e("1d80"),f=e("ab13"),h=e("c430"),d=r("".startsWith),l=r("".slice),p=Math.min,v=f("startsWith"),g=!h&&!v&&!!function(){var t=s(String.prototype,"startsWith");return t&&!t.writable}();i({target:"String",proto:!0,forced:!g&&!v},{startsWith:function(t){var n=a(u(this));o(t);var e=c(p(arguments.length>1?arguments[1]:void 0,n.length)),i=a(t);return d?d(n,i,e):l(n,e,e+i.length)===i}})},"32c7":function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("Generic",{attrs:{item:t.item},scopedSlots:t._u([{key:"indicator",fn:function(){return[t.status?e("div",{staticClass:"status",class:t.status},[t._v(" "+t._s(t.status)+" ")]):t._e()]},proxy:!0}])})},r=[],s=e("1da1"),c=(e("96cf"),e("c55c")),a=e("fd6b"),o={name:"Ping",mixins:[c["a"]],props:{item:Object},components:{Generic:a["default"]},data:function(){return{status:null}},created:function(){this.fetchStatus()},methods:{fetchStatus:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.fetch("/",{method:"HEAD",cache:"no-cache"},!1).then((function(){n.status="online"})).catch((function(){n.status="offline"}));case 1:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}()}},u=o,f=(e("425b"),e("2877")),h=Object(f["a"])(u,i,r,!1,null,"5bccb064",null);n["default"]=h.exports},"425b":function(t,n,e){"use strict";e("7299")},7299:function(t,n,e){},"8a79":function(t,n,e){"use strict";var i=e("23e7"),r=e("e330"),s=e("06cf").f,c=e("50c4"),a=e("577e"),o=e("5a34"),u=e("1d80"),f=e("ab13"),h=e("c430"),d=r("".endsWith),l=r("".slice),p=Math.min,v=f("endsWith"),g=!h&&!v&&!!function(){var t=s(String.prototype,"endsWith");return t&&!t.writable}();i({target:"String",proto:!0,forced:!g&&!v},{endsWith:function(t){var n=a(u(this));o(t);var e=arguments.length>1?arguments[1]:void 0,i=n.length,r=void 0===e?i:p(c(e),i),s=a(t);return d?d(n,s,r):l(n,r-s.length,r)===s}})},c55c:function(t,n,e){"use strict";e("8a79"),e("fb6a"),e("d3b7"),e("25f0"),e("2ca0"),e("99af");n["a"]={props:{proxy:Object},created:function(){this.endpoint=this.item.endpoint||this.item.url,this.endpoint.endsWith("/")&&(this.endpoint=this.endpoint.slice(0,-1))},methods:{fetch:function(t){function n(n,e){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(t,n){var e,i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r={};null!==(e=this.proxy)&&void 0!==e&&e.useCredentials&&(r.credentials="include"),void 0!==this.item.useCredentials&&(r.credentials=!0===this.item.useCredentials?"include":"omit"),r=Object.assign(r,n),t.startsWith("/")&&(t=t.slice(1));var s=this.endpoint;return t&&(s="".concat(this.endpoint,"/").concat(t)),fetch(s,r).then((function(t){if(!t.ok)throw new Error("Not 2xx response");return i?t.json():t}))}))}}}}]);
//# sourceMappingURL=chunk-f47203b8.34efbd37.js.map