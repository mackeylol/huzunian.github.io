"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[4138],{8273:(t,n,r)=>{function e(t){return"/"===t.charAt(0)}function f(t,n){for(var r=n,e=r+1,f=t.length;e<f;r+=1,e+=1)t[r]=t[e];t.pop()}r.d(n,{Z:()=>i});const i=function(t,n){void 0===n&&(n="");var r,i=t&&t.split("/")||[],s=n&&n.split("/")||[],o=t&&e(t),_=n&&e(n),l=o||_;if(t&&e(t)?s=i:i.length&&(s.pop(),s=s.concat(i)),!s.length)return"/";if(s.length){var u=s[s.length-1];r="."===u||".."===u||""===u}else r=!1;for(var h=0,a=s.length;a>=0;a--){var c=s[a];"."===c?f(s,a):".."===c?(f(s,a),h++):h&&(f(s,a),h--)}if(!l)for(;h--;h)s.unshift("..");!l||""===s[0]||s[0]&&e(s[0])||s.unshift("");var p=s.join("/");return r&&"/"!==p.substr(-1)&&(p+="/"),p}}}]);