"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[8039],{9631:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var r=n(9748),a=n(4593),l=n(5858),o=n(9430),c=n(4927),s=n(8656);function d(){const e=(0,l.I0)(),t=(0,l.v9)((e=>(0,s.Zp)(e)));(0,r.useEffect)((()=>{e((0,c.ZB)())}),[]);const{mostPlayed:n}=(null==t?void 0:t.content)||{},d=(e=>{let{mostPlayed:t}=e;try{return t[Math.floor(Math.random()*t.length)]}catch(e){return}})({mostPlayed:n});return r.default.createElement(r.default.Fragment,null,!!t.jsonLD&&r.default.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(t.jsonLD)}}),r.default.createElement(a.q,null,t.meta.title&&r.default.createElement("title",null,t.meta.title),t.meta.description&&r.default.createElement("meta",{name:"description",content:t.meta.description}),r.default.createElement("link",{key:"canonical",rel:"canonical",href:t.meta.canonical}),(t.meta.alternates||[]).map((e=>{let{href:t,hrefLang:n}=e;return r.default.createElement("link",{key:n,rel:"alternate",href:t,hrefLang:n})})),t.og&&Object.entries(t.og).map((e=>{let[t,n]=e;return r.default.createElement("meta",{property:"og:".concat(t),content:n})}))),r.default.createElement(o.Z,{data:{randomGame:d}}))}},9430:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(9748),a=n(5697),l=n.n(a),o=n(5858),c=n(6727),s=n(710),d=n(6151);const i=(0,c.ZP)({resolved:{},chunkName:()=>"Error",isReady(e){const t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:()=>Promise.all([n.e(5709),n.e(619),n.e(7192),n.e(185)]).then(n.bind(n,3177)),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((e=>(this.resolved[t]=!0,e)))},requireSync(e){const t=this.resolve(e);return n(t)},resolve(){return 3177}}),u=["#83ffe7","#eac0fc","#faeb59","#ffc2d6"],m={background:u[0],width:"100%",height:"100%",position:"fixed",left:"0",top:"0"};function f(e){let{data:t}=e;const n=(0,o.v9)((e=>(0,d.jL)(e))),{randomGame:a}=t,l=u[Math.floor(n*u.length)];return r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{style:{...m,background:l}}),"undefined"!=typeof window&&r.default.createElement(i,{randomGame:a}))}}}]);