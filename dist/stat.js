!function(){"use strict";var n={4982:function(n,t,r){var e,o,u,c=r(5638);window.statistics=(e=0,o=!1,u=function(){return e++},c(document).on("click",u),{destroy:function(){c(document).off("click",u),o=!0},getClicks:function(){return o?"Statistics is fully destroyed.":e}})}},t={};function r(e){if(t[e])return t[e].exports;var o=t[e]={exports:{}};return n[e].call(o.exports,o,o.exports,r),o.exports}r.m=n,r.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(t,{a:t}),t},r.d=function(n,t){for(var e in t)r.o(t,e)&&!r.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})},r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},function(){var n={537:0},t=[[4982,638]],e=function(){};function o(){for(var e,o=0;o<t.length;o++){for(var u=t[o],c=!0,i=1;i<u.length;i++){var f=u[i];0!==n[f]&&(c=!1)}c&&(t.splice(o--,1),e=r(r.s=u[0]))}return 0===t.length&&(r.x(),r.x=function(){}),e}r.x=function(){r.x=function(){},c=c.slice();for(var n=0;n<c.length;n++)u(c[n]);return(e=o)()};var u=function(o){for(var u,c,f=o[0],s=o[1],a=o[2],l=o[3],p=0,h=[];p<f.length;p++)c=f[p],r.o(n,c)&&n[c]&&h.push(n[c][0]),n[c]=0;for(u in s)r.o(s,u)&&(r.m[u]=s[u]);for(a&&a(r),i(o);h.length;)h.shift()();return l&&t.push.apply(t,l),e()},c=self.webpackChunk=self.webpackChunk||[],i=c.push.bind(c);c.push=u}(),r.x()}();
//# sourceMappingURL=stat.js.map