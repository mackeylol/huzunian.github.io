"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[1271],{1271:(e,s,t)=>{t.d(s,{Z:()=>h});var i=t(4942),l=(t(5697),t(9748)),n=t(9590),r=t.n(n);function o(){const e=[];for(var s=arguments.length,t=new Array(s),i=0;i<s;i++)t[i]=arguments[i];return t.forEach((s=>{if(!s)return;const t=typeof s;if("string"===t||"number"===t)e.push(s);else if(Array.isArray(s)&&s.length){const t=o(...s);t&&e.push(t)}else"object"===t&&Object.keys(s).forEach((t=>{s[t]&&e.push(t)}))})),0===e.length?null:e.join(" ")}var a=t(7253);class h extends l.default.Component{constructor(e){super(e),(0,i.Z)(this,"refHandler",(e=>{e!==this.el&&(e&&(0,a.N7)("default",e,(()=>{this.setState({visible:!0});const{props:e}=this;e.onVisible&&e.onVisible()})),this.el&&(0,a.p_)("default",this.el),this.el=e)})),this.state={visible:!1}}shouldComponentUpdate(e,s){const{props:t}=this;return["visible","children"].some((e=>!r()(s[e],t[e])))}componentWillUnmount(){this.el&&(0,a.p_)("default",this.el)}render(){const{className:e,children:s,bot:t}=this.props,{visible:i}=this.state,n=o(e);return t||i?s:l.default.createElement("div",{className:n,ref:this.refHandler})}}h.defaultProps={bot:!1,className:void 0,onVisible:void 0}}}]);