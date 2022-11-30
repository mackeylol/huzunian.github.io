"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[7165],{6669:(e,t,n)=>{n.d(t,{Z:()=>N});var o=n(5697),i=n.n(o),a=n(9748),r=n(5858),s=n(1893),l=n(6727),d=n(278),c=n(710),p=n(111),m=n(8855),h=n(9563),u=n(4135),f,g,v;const y=(0,l.ZP)({resolved:{},chunkName:()=>"app-components-svg-FullscreenButton",isReady(e){const t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:()=>n.e(8511).then(n.bind(n,7034)),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((e=>(this.resolved[t]=!0,e)))},requireSync(e){const t=this.resolve(e);return n(t)},resolve(){return 7034}}),x=(0,l.ZP)({resolved:{},chunkName:()=>"app-components-Voting",isReady(e){const t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:()=>Promise.all([n.e(65),n.e(5322),n.e(1804)]).then(n.bind(n,7655)),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((e=>(this.resolved[t]=!0,e)))},requireSync(e){const t=this.resolve(e);return n(t)},resolve(){return 7655}}),w=(0,l.ZP)({resolved:{},chunkName:()=>"app-components-svg-SVGIcon",isReady(e){const t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:()=>Promise.resolve().then(n.bind(n,7447)),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((e=>(this.resolved[t]=!0,e)))},requireSync(e){const t=this.resolve(e);return n(t)},resolve(){return 7447}}),b=(0,l.ZP)({resolved:{},chunkName:()=>"app-components-Logo",isReady(e){const t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:()=>Promise.resolve().then(n.bind(n,8223)),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((e=>(this.resolved[t]=!0,e)))},requireSync(e){const t=this.resolve(e);return n(t)},resolve(){return 8223}}),_=(0,l.ZP)({resolved:{},chunkName:()=>"app-components-DetailedTile",isReady(e){const t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:()=>n.e(9432).then(n.bind(n,3511)),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((e=>(this.resolved[t]=!0,e)))},requireSync(e){const t=this.resolve(e);return n(t)},resolve(){return 3511}}),P=s.ZP.div.withConfig({displayName:"GameInfo__GameInfoContainer",componentId:"sc-1thi3bz-0"})(["overflow:hidden;flex-grow:0;flex-shrink:0;display:flex;justify-content:space-between;height:var(--gameInfoHeight);align-self:stretch;background:#fff;position:relative;z-index:3;padding:0 16px 0 0;"]),G=s.ZP.div.withConfig({displayName:"GameInfo__GameInfoVoting",componentId:"sc-1thi3bz-1"})(["margin-left:auto;display:flex;align-items:center;"]),E=(0,s.ZP)(w).withConfig({displayName:"GameInfo__GameInfoSVG",componentId:"sc-1thi3bz-2"})(["stroke:var(--grey-3);fill:transparent;padding:6px;height:36px;"]),I=(0,s.ZP)(y).withConfig({displayName:"GameInfo__GameInfoFullscreen",componentId:"sc-1thi3bz-3"})(["position:absolute;top:12px;right:16px;"]),C=s.ZP.div.withConfig({displayName:"GameInfo__GameInfoAdStatusContainer",componentId:"sc-1thi3bz-4"})(["display:flex;height:100%;width:100%;align-items:center;background:#fff;padding:14px;pointer-events:none;user-select:none;position:absolute;top:0;left:0;opacity:",";transition:opacity .5s ease-in;will-change:opacity;"],(e=>{let{showAdStatus:t}=e;return t?"1":"0"})),A=s.ZP.div.withConfig({displayName:"GameInfo__GameInfoTextContainer",componentId:"sc-1thi3bz-5"})(["display:inline-block;margin-left:16px;h2{font:700 16px/20px var(--fontProximaNova);}p{font:12px/16px var(--fontProximaNova);color:var(--grey-3);}"]),Z=(0,s.ZP)(b).withConfig({displayName:"GameInfo__GameInfoLogo",componentId:"sc-1thi3bz-6"})(["&&{position:absolute;width:auto;height:28px;left:50%;top:50%;transform:translate(-50%,-50%);}"]),k=s.ZP.div.withConfig({displayName:"GameInfo__GameInfoDetailedTileWrapper",componentId:"sc-1thi3bz-7"})(["font-size:21px;display:flex;margin:12px;"]);function N(e){let{data:t,showFullscreenButton:n}=e;const{isMobile:o}=(0,a.useContext)(u.kn),i=(0,r.v9)((e=>(0,m.hS)(e))),s=(0,r.v9)((e=>(0,m.lC)(e))),l=(0,r.v9)((e=>(0,m.VF)(e))),c=(0,r.v9)((e=>(0,m.ad)(e))),y=(0,r.v9)((e=>(0,p.B)(e))),w=(0,r.v9)((e=>(0,m.Eo)(e))),b=(0,r.v9)((e=>(0,m.n8)(e))),{details:N}=t;let S=y.preparing;if(s===h.Zg)S=y.loading;else if(s===h.T4){const e=l-c,t=Math.floor(e/60),n=String(Math.round(e%60)).padStart(2,"0");S="".concat(y.playingad," ").concat(t,":").concat(n)}const R=!o&&!w&&!b;return a.default.createElement(P,null,a.default.createElement(k,null,a.default.createElement(_,{contentDetails:N})),w&&!o&&(f||(f=a.default.createElement(Z,null))),R&&a.default.createElement(d.Z,{whenIdle:!0},a.default.createElement(G,null,a.default.createElement(x,{gameId:N.id,rating:t.rating}))),n&&!b&&(g||(g=a.default.createElement(d.Z,{on:"mouseover"},a.default.createElement(I,null)))),a.default.createElement(C,{showAdStatus:i},v||(v=a.default.createElement(E,{name:"fav",height:"36",width:"36"})),a.default.createElement(A,null,a.default.createElement("h2",null,y.wellbeback),a.default.createElement("p",null,S))))}N.defaultProps={showFullscreenButton:!1}},8164:(e,t,n)=>{n.r(t),n.d(t,{default:()=>M,tagContent:()=>O,targetAspectRatio:()=>A});var o=n(9748),i=n(5858),a=n(1893),r=n(6727),s=n(710),l=n(5533),d=n(6669),c=n(7447),p=n(8855),m=n(6084),h=n(7344),u=n(6151),f=n(9761),g=n(111),v=n(9317),y=n(4243),x=n(8656),w=n(4135),b=n(6712),_=n(3032),P=n(4481),G,E;const I=(0,r.ZP)({resolved:{},chunkName:()=>"app-components-GameNotAvailable",isReady(e){const t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:()=>Promise.all([n.e(5709),n.e(9252)]).then(n.bind(n,7544)),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((e=>(this.resolved[t]=!0,e)))},requireSync(e){const t=this.resolve(e);return n(t)},resolve(){return 7544}}),C=(0,r.ZP)({resolved:{},chunkName:()=>"app-components-ExternallyHostedCommunication",isReady(e){const t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:()=>n.e(9313).then(n.bind(n,8756)),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((e=>(this.resolved[t]=!0,e)))},requireSync(e){const t=this.resolve(e);return n(t)},resolve(){return 8756}}),A=16/9,Z=a.ZP.div.withConfig({displayName:"GamePlayer__GamePlayerOuterContainer",componentId:"sc-1nfyi8d-0"})(["display:flex;justify-content:center;margin:0 auto;width:",";height:",";z-index:10;","{width:640px;height:424px;}","{width:836px;height:534px;}","{width:836px;height:534px;}","{width:1031px;height:644px;}","{width:1031px;height:644px;}"],(e=>e.isFullscreen?"100% !important":"100%"),(e=>e.isFullscreen?"100% !important":"100%"),(0,_.w5)(1,11),(0,_.w5)(11,12),(0,_.w5)(12,14),(0,_.w5)(14,17),(0,_.w5)(17,18)),k=a.ZP.div.withConfig({displayName:"GamePlayer__GamePlayerContainer",componentId:"sc-1nfyi8d-1"})(["display:flex;align-items:center;flex-direction:column;flex-grow:0;width:100%;height:100%;background:var(--denim-blue);box-shadow:0 6px 12px 0 rgba(0,0,0,.24);"]),N=a.ZP.div.withConfig({displayName:"GamePlayer__GamePlayerGameContainer",componentId:"sc-1nfyi8d-2"})(["display:flex;align-items:center;justify-content:center;flex-grow:1;position:relative;width:100%;height:100%;"]),S=a.ZP.div.withConfig({displayName:"GamePlayer__GamePlayerGame",componentId:"sc-1nfyi8d-3"})(["position:absolute;top:0;right:0;bottom:0;left:0;> div,embed,object{position:absolute;top:0;left:0;width:100%;height:100%;border:0;}iframe{position:absolute;top:0;left:0;border:0;height:100%;width:100%;}"]),R=(0,a.F4)(["0%{visibility:visible;transform:translate(0,0);}90%{visibility:visible;transform:translate(0,150%);}100%{visibility:hidden;transform:translate(0,150%);}"]),q=(0,a.F4)(["26%{transform:rotate(0deg);}28%{transform:rotate(14deg);}32%{transform:rotate(-6deg);}34%{transform:rotate(6deg);}36%{transform:rotate(-8deg);}39%{transform:rotate(2deg);}44%{transform:rotate(0deg);}"]),z=a.ZP.strong.withConfig({displayName:"GamePlayer__GamePlayerRotateText",componentId:"sc-1nfyi8d-4"})([""]),F=(0,a.ZP)(c.default).withConfig({displayName:"GamePlayer__GamePlayerRotateIcon",componentId:"sc-1nfyi8d-5"})(["width:23px;height:16px;margin:0 8px 0 0;animation:"," 4s ease-in-out 2s infinite;flex-shrink:0;@media (orientation:landscape){width:18px;height:24px;margin:0 21px 0 6px;}"],q),D=a.ZP.span.withConfig({displayName:"GamePlayer__GamePlayerRotateScreenBtn",componentId:"sc-1nfyi8d-6"})(["border:3px solid #fff;border-radius:30px;padding:1px 29px;font-size:21px;margin:50px auto 0;"]),L=a.ZP.div.withConfig({displayName:"GamePlayer__GamePlayerRotateScreenWrapper",componentId:"sc-1nfyi8d-7"})(["display:contents;"]),B=a.ZP.div.withConfig({displayName:"GamePlayer__GamePlayerRotateScreen",componentId:"sc-1nfyi8d-8"})(["position:absolute;right:0;bottom:0;z-index:2;width:100%;background:var(--grey-3);display:flex;align-items:center;justify-content:center;padding:6px;animation:"," .5s linear 15s forwards;pointer-events:none;color:var(--grey-9);font:400 14px/140% var(--fontTorus);@media (orientation:landscape){border-radius:4px;max-width:230px;margin:20px;padding:17px 14px 15px;}",""],R,(e=>{let{showExplicitOrientationnMessage:t}=e;return t&&(0,a.iv)(["&&{flex-direction:column;animation:none;height:100%;pointer-events:auto;font-size:28px;background:#0b2645;border-radius:0;@media (orientation:portrait){","{margin:0 0 32px;width:102px;height:106px;}","{max-width:70%;text-align:center;}}@media (orientation:landscape){max-width:100%;padding:20px;margin:0;","{display:flex;max-width:370px;flex-direction:row;align-items:center;}","{width:61px;height:64px;}}}"],F,z,L,F)}));function O(e,t){return["localhost","games.poki.com"].some((t=>e.includes("//".concat(t))))?e=(0,P.SK)(e,{tag:"pg-v".concat("3.50.1"),...t}):e}function M(e){let{data:t}=e;const[n,a]=(0,o.useState)(!1),{isMobile:r}=(0,o.useContext)(w.kn),s=(0,i.v9)((e=>(0,p.WW)(e))),c=(0,i.v9)((e=>(0,v.lu)(e))),_=(0,i.v9)((e=>(0,p.n8)(e))),P=(0,i.v9)((e=>(0,p.Eo)(e))),A=(0,i.v9)((e=>(0,p.dW)(e))),R=(0,i.v9)((e=>(0,m.R)(e))),q=(0,i.v9)((e=>(0,m.d)(e))),M=(0,i.v9)((e=>(0,h.lH)(e))),j=(0,i.v9)((e=>(0,u.$9)(e))),T=(0,i.v9)((e=>(0,u.Zn)(e))),H=(0,i.v9)((e=>(0,u.rQ)(e,t.details.id))),V=(0,i.v9)((e=>(0,f.PC)(e))),W=(0,i.v9)((e=>(0,y.J)(e))),K=(0,i.v9)((e=>(0,x.GD)(e))),U=(0,i.v9)((e=>(0,g.B)(e))),J=(0,i.v9)((e=>(0,u.At)(e)));let $=t.file.content;const Q=t.details.id,X=O($,{...s,...c,site_id:M.id,categories:(t.categories||[]).map((e=>{let{id:t}=e;return t})),iso_lang:M.iso_lang,country:T,poki_url:"https://".concat(M.domain).concat(K),...R?{ab:R}:{},...q?{experiment:q}:{},...V,...W}),Y=!r&&(A||J),ee=!(r&&"landscape"===j),te="undefined"!=typeof window&&!H&&!r&&t.details.externally_hosted&&b.vO.includes(window.pokiCountry);(0,o.useLayoutEffect)((()=>{if(r){const{orientation:e}=t.file;a("both"!==e&&e!==j)}}),[j]);const{showExplicitOrientationnMessage:ne=!1}=t;return o.default.createElement(Z,{isFullscreen:P},o.default.createElement(k,null,o.default.createElement(N,null,o.default.createElement(o.default.Fragment,null,n&&o.default.createElement(B,{showExplicitOrientationnMessage:ne,onClick:()=>{a(!1)}},o.default.createElement(L,null,G||(G=o.default.createElement(F,{name:"rotation"})),o.default.createElement(z,null,U.rotate_device)),ne&&o.default.createElement(D,null,U.got_it)),_?E||(E=o.default.createElement(I,null)):o.default.createElement(S,null,te?o.default.createElement(C,{showBackground:!0,startCollapsed:!1,data:t}):o.default.createElement(l.Z,{content:X,gameId:Q})))),ee&&o.default.createElement(d.Z,{data:t,showFullscreenButton:Y})))}},5533:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(4942),i=(n(5697),n(9748)),a=n(5858),r=n(905);class s extends i.default.PureComponent{constructor(){super(...arguments),(0,o.Z)(this,"handleRef",(e=>{const{dispatch:t}=this.props;e&&t((0,r.Gq)({el:e}))}))}render(){const{content:e,gameId:t}=this.props;return i.default.createElement("iframe",{id:"game-element",allowFullScreen:!0,allow:"autoplay; fullscreen; camera; focus-without-user-activation *; monetization; gamepad; keyboard-map *; xr-spatial-tracking; clipboard-write",name:"gameFrame",scrolling:"no",sandbox:"allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-scripts allow-same-origin allow-downloads",src:e,ref:this.handleRef,title:"Game",key:"gameFrame".concat(t)})}}const l=(0,a.$j)()(s)},4243:(e,t,n)=>{n.d(t,{J:()=>a});var o=n(2222),i=n(9761);const a=(0,o.P1)((e=>(0,i.CG)(e)),(e=>{const t={},n=new URLSearchParams(e);return["preroll","pokiDebug","pokiLogging","force_ad","playtest"].forEach((e=>{const o=n.get(e);o&&(t[e]=o)})),t}))}}]);