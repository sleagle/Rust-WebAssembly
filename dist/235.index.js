"use strict";(self.webpackChunkrust_project=self.webpackChunkrust_project||[]).push([[235],{235:(e,n,t)=>{t.a(e,(async(e,r)=>{try{t.r(n),t.d(n,{__wbg_log_e8ba7b992c7ad0eb:()=>o.kq,__wbindgen_object_drop_ref:()=>o.ug,__wbindgen_string_new:()=>o.h4,__wbindgen_throw:()=>o.Or,grayscale:()=>o.se});var o=t(838),c=e([o]);o=(c.then?(await c)():c)[0],r()}catch(e){r(e)}}))},838:(e,n,t)=>{t.a(e,(async(r,o)=>{try{t.d(n,{Or:()=>A,h4:()=>T,kq:()=>q,se:()=>x,ug:()=>j});var c=t(530);e=t.hmd(e);var u=r([c]);c=(u.then?(await u)():u)[0];let i=new("undefined"==typeof TextDecoder?(0,e.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});i.decode();let _=null;function a(){return null!==_&&_.buffer===c.memory.buffer||(_=new Uint8Array(c.memory.buffer)),_}function d(e,n){return i.decode(a().subarray(e,e+n))}const f=new Array(32).fill(void 0);f.push(void 0,null,!0,!1);let l=f.length;function s(e){l===f.length&&f.push(f.length+1);const n=l;return l=f[n],f[n]=e,n}function b(e){return f[e]}function g(e){e<36||(f[e]=l,l=e)}function w(e){const n=b(e);return g(e),n}let h=0,y=new("undefined"==typeof TextEncoder?(0,e.require)("util").TextEncoder:TextEncoder)("utf-8");const p="function"==typeof y.encodeInto?function(e,n){return y.encodeInto(e,n)}:function(e,n){const t=y.encode(e);return n.set(t),{read:e.length,written:t.length}};function k(e,n,t){if(void 0===t){const t=y.encode(e),r=n(t.length);return a().subarray(r,r+t.length).set(t),h=t.length,r}let r=e.length,o=n(r);const c=a();let u=0;for(;u<r;u++){const n=e.charCodeAt(u);if(n>127)break;c[o+u]=n}if(u!==r){0!==u&&(e=e.slice(u)),o=t(o,r,r=u+3*e.length);const n=a().subarray(o+u,o+r);u+=p(e,n).written}return h=u,o}let m=null;function v(){return null!==m&&m.buffer===c.memory.buffer||(m=new Int32Array(c.memory.buffer)),m}function x(e){try{const r=c.__wbindgen_add_to_stack_pointer(-16),o=k(e,c.__wbindgen_malloc,c.__wbindgen_realloc),u=h;c.grayscale(r,o,u);var n=v()[r/4+0],t=v()[r/4+1];return d(n,t)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_free(n,t)}}function T(e,n){return s(d(e,n))}function j(e){w(e)}function q(e){console.log(b(e))}function A(e,n){throw new Error(d(e,n))}o()}catch(E){o(E)}}))},530:(e,n,t)=>{t.a(e,(async(r,o)=>{try{var c,u=r([c=t(838)]),[c]=u.then?(await u)():u;await t.v(n,e.id,"6c334d688d105b77f1c7",{"./index_bg.js":{__wbindgen_string_new:c.h4,__wbindgen_object_drop_ref:c.ug,__wbg_log_e8ba7b992c7ad0eb:c.kq,__wbindgen_throw:c.Or}}),o()}catch(e){o(e)}}),1)}}]);