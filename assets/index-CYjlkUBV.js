(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function F6(c,a){const e=new Set(c.split(","));return r=>e.has(r)}const r1={},D2=[],A1=()=>{},Al=()=>!1,u4=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&(c.charCodeAt(2)>122||c.charCodeAt(2)<97),E6=c=>c.startsWith("onUpdate:"),m1=Object.assign,D6=(c,a)=>{const e=c.indexOf(a);e>-1&&c.splice(e,1)},wl=Object.prototype.hasOwnProperty,j=(c,a)=>wl.call(c,a),U=Array.isArray,s3=c=>p4(c)==="[object Map]",yl=c=>p4(c)==="[object Set]",G=c=>typeof c=="function",z1=c=>typeof c=="string",A3=c=>typeof c=="symbol",l1=c=>c!==null&&typeof c=="object",R5=c=>(l1(c)||G(c))&&G(c.then)&&G(c.catch),kl=Object.prototype.toString,p4=c=>kl.call(c),Pl=c=>p4(c).slice(8,-1),Tl=c=>p4(c)==="[object Object]",_6=c=>z1(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,i3=F6(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),V4=c=>{const a=Object.create(null);return e=>a[e]||(a[e]=c(e))},Rl=/-(\w)/g,W1=V4(c=>c.replace(Rl,(a,e)=>e?e.toUpperCase():"")),Bl=/\B([A-Z])/g,W2=V4(c=>c.replace(Bl,"-$1").toLowerCase()),M4=V4(c=>c.charAt(0).toUpperCase()+c.slice(1)),$4=V4(c=>c?`on${M4(c)}`:""),z2=(c,a)=>!Object.is(c,a),K4=(c,a)=>{for(let e=0;e<c.length;e++)c[e](a)},B5=(c,a,e,r=!1)=>{Object.defineProperty(c,a,{configurable:!0,enumerable:!1,writable:r,value:e})},Fl=c=>{const a=parseFloat(c);return isNaN(a)?c:a};let h0;const F5=()=>h0||(h0=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function q6(c){if(U(c)){const a={};for(let e=0;e<c.length;e++){const r=c[e],s=z1(r)?ql(r):q6(r);if(s)for(const i in s)a[i]=s[i]}return a}else if(z1(c)||l1(c))return c}const El=/;(?![^(]*\))/g,Dl=/:([^]+)/,_l=/\/\*[^]*?\*\//g;function ql(c){const a={};return c.replace(_l,"").split(El).forEach(e=>{if(e){const r=e.split(Dl);r.length>1&&(a[r[0].trim()]=r[1].trim())}}),a}function O6(c){let a="";if(z1(c))a=c;else if(U(c))for(let e=0;e<c.length;e++){const r=O6(c[e]);r&&(a+=r+" ")}else if(l1(c))for(const e in c)c[e]&&(a+=e+" ");return a.trim()}const Ol="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ul=F6(Ol);function E5(c){return!!c||c===""}/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let y1;class Il{constructor(a=!1){this.detached=a,this._active=!0,this.effects=[],this.cleanups=[],this.parent=y1,!a&&y1&&(this.index=(y1.scopes||(y1.scopes=[])).push(this)-1)}get active(){return this._active}run(a){if(this._active){const e=y1;try{return y1=this,a()}finally{y1=e}}}on(){y1=this}off(){y1=this.parent}stop(a){if(this._active){let e,r;for(e=0,r=this.effects.length;e<r;e++)this.effects[e].stop();for(e=0,r=this.cleanups.length;e<r;e++)this.cleanups[e]();if(this.scopes)for(e=0,r=this.scopes.length;e<r;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!a){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Gl(c,a=y1){a&&a.active&&a.effects.push(c)}function Wl(){return y1}let x2;class U6{constructor(a,e,r,s){this.fn=a,this.trigger=e,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Gl(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,p2();for(let a=0;a<this._depsLength;a++){const e=this.deps[a];if(e.computed&&(jl(e.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),V2()}return this._dirtyLevel>=4}set dirty(a){this._dirtyLevel=a?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let a=m2,e=x2;try{return m2=!0,x2=this,this._runnings++,H0(this),this.fn()}finally{u0(this),this._runnings--,x2=e,m2=a}}stop(){this.active&&(H0(this),u0(this),this.onStop&&this.onStop(),this.active=!1)}}function jl(c){return c.value}function H0(c){c._trackId++,c._depsLength=0}function u0(c){if(c.deps.length>c._depsLength){for(let a=c._depsLength;a<c.deps.length;a++)D5(c.deps[a],c);c.deps.length=c._depsLength}}function D5(c,a){const e=c.get(a);e!==void 0&&a._trackId!==e&&(c.delete(a),c.size===0&&c.cleanup())}let m2=!0,o6=0;const _5=[];function p2(){_5.push(m2),m2=!1}function V2(){const c=_5.pop();m2=c===void 0?!0:c}function I6(){o6++}function G6(){for(o6--;!o6&&t6.length;)t6.shift()()}function q5(c,a,e){if(a.get(c)!==c._trackId){a.set(c,c._trackId);const r=c.deps[c._depsLength];r!==a?(r&&D5(r,c),c.deps[c._depsLength++]=a):c._depsLength++}}const t6=[];function O5(c,a,e){I6();for(const r of c.keys()){let s;r._dirtyLevel<a&&(s??(s=c.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=a),r._shouldSchedule&&(s??(s=c.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&t6.push(r.scheduler)))}G6()}const U5=(c,a)=>{const e=new Map;return e.cleanup=c,e.computed=a,e},m6=new WeakMap,N2=Symbol(""),v6=Symbol("");function g1(c,a,e){if(m2&&x2){let r=m6.get(c);r||m6.set(c,r=new Map);let s=r.get(e);s||r.set(e,s=U5(()=>r.delete(e))),q5(x2,s)}}function K1(c,a,e,r,s,i){const n=m6.get(c);if(!n)return;let f=[];if(a==="clear")f=[...n.values()];else if(e==="length"&&U(c)){const l=Number(r);n.forEach((t,o)=>{(o==="length"||!A3(o)&&o>=l)&&f.push(t)})}else switch(e!==void 0&&f.push(n.get(e)),a){case"add":U(c)?_6(e)&&f.push(n.get("length")):(f.push(n.get(N2)),s3(c)&&f.push(n.get(v6)));break;case"delete":U(c)||(f.push(n.get(N2)),s3(c)&&f.push(n.get(v6)));break;case"set":s3(c)&&f.push(n.get(N2));break}I6();for(const l of f)l&&O5(l,4);G6()}const Zl=F6("__proto__,__v_isRef,__isVue"),I5=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(A3)),p0=$l();function $l(){const c={};return["includes","indexOf","lastIndexOf"].forEach(a=>{c[a]=function(...e){const r=$(this);for(let i=0,n=this.length;i<n;i++)g1(r,"get",i+"");const s=r[a](...e);return s===-1||s===!1?r[a](...e.map($)):s}}),["push","pop","shift","unshift","splice"].forEach(a=>{c[a]=function(...e){p2(),I6();const r=$(this)[a].apply(this,e);return G6(),V2(),r}}),c}function Kl(c){A3(c)||(c=String(c));const a=$(this);return g1(a,"has",c),a.hasOwnProperty(c)}class G5{constructor(a=!1,e=!1){this._isReadonly=a,this._isShallow=e}get(a,e,r){const s=this._isReadonly,i=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return i;if(e==="__v_raw")return r===(s?i?of:$5:i?Z5:j5).get(a)||Object.getPrototypeOf(a)===Object.getPrototypeOf(r)?a:void 0;const n=U(a);if(!s){if(n&&j(p0,e))return Reflect.get(p0,e,r);if(e==="hasOwnProperty")return Kl}const f=Reflect.get(a,e,r);return(A3(e)?I5.has(e):Zl(e))||(s||g1(a,"get",e),i)?f:b1(f)?n&&_6(e)?f:f.value:l1(f)?s?Y5(f):d4(f):f}}class W5 extends G5{constructor(a=!1){super(!1,a)}set(a,e,r,s){let i=a[e];if(!this._isShallow){const l=H3(i);if(!f4(r)&&!H3(r)&&(i=$(i),r=$(r)),!U(a)&&b1(i)&&!b1(r))return l?!1:(i.value=r,!0)}const n=U(a)&&_6(e)?Number(e)<a.length:j(a,e),f=Reflect.set(a,e,r,s);return a===$(s)&&(n?z2(r,i)&&K1(a,"set",e,r):K1(a,"add",e,r)),f}deleteProperty(a,e){const r=j(a,e);a[e];const s=Reflect.deleteProperty(a,e);return s&&r&&K1(a,"delete",e,void 0),s}has(a,e){const r=Reflect.has(a,e);return(!A3(e)||!I5.has(e))&&g1(a,"has",e),r}ownKeys(a){return g1(a,"iterate",U(a)?"length":N2),Reflect.ownKeys(a)}}class Yl extends G5{constructor(a=!1){super(!0,a)}set(a,e){return!0}deleteProperty(a,e){return!0}}const Ql=new W5,Xl=new Yl,Jl=new W5(!0);const W6=c=>c,C4=c=>Reflect.getPrototypeOf(c);function _3(c,a,e=!1,r=!1){c=c.__v_raw;const s=$(c),i=$(a);e||(z2(a,i)&&g1(s,"get",a),g1(s,"get",i));const{has:n}=C4(s),f=r?W6:e?$6:u3;if(n.call(s,a))return f(c.get(a));if(n.call(s,i))return f(c.get(i));c!==s&&c.get(a)}function q3(c,a=!1){const e=this.__v_raw,r=$(e),s=$(c);return a||(z2(c,s)&&g1(r,"has",c),g1(r,"has",s)),c===s?e.has(c):e.has(c)||e.has(s)}function O3(c,a=!1){return c=c.__v_raw,!a&&g1($(c),"iterate",N2),Reflect.get(c,"size",c)}function V0(c){c=$(c);const a=$(this);return C4(a).has.call(a,c)||(a.add(c),K1(a,"add",c,c)),this}function M0(c,a){a=$(a);const e=$(this),{has:r,get:s}=C4(e);let i=r.call(e,c);i||(c=$(c),i=r.call(e,c));const n=s.call(e,c);return e.set(c,a),i?z2(a,n)&&K1(e,"set",c,a):K1(e,"add",c,a),this}function C0(c){const a=$(this),{has:e,get:r}=C4(a);let s=e.call(a,c);s||(c=$(c),s=e.call(a,c)),r&&r.call(a,c);const i=a.delete(c);return s&&K1(a,"delete",c,void 0),i}function d0(){const c=$(this),a=c.size!==0,e=c.clear();return a&&K1(c,"clear",void 0,void 0),e}function U3(c,a){return function(r,s){const i=this,n=i.__v_raw,f=$(n),l=a?W6:c?$6:u3;return!c&&g1(f,"iterate",N2),n.forEach((t,o)=>r.call(s,l(t),l(o),i))}}function I3(c,a,e){return function(...r){const s=this.__v_raw,i=$(s),n=s3(i),f=c==="entries"||c===Symbol.iterator&&n,l=c==="keys"&&n,t=s[c](...r),o=e?W6:a?$6:u3;return!a&&g1(i,"iterate",l?v6:N2),{next(){const{value:z,done:h}=t.next();return h?{value:z,done:h}:{value:f?[o(z[0]),o(z[1])]:o(z),done:h}},[Symbol.iterator](){return this}}}}function s2(c){return function(...a){return c==="delete"?!1:c==="clear"?void 0:this}}function cf(){const c={get(i){return _3(this,i)},get size(){return O3(this)},has:q3,add:V0,set:M0,delete:C0,clear:d0,forEach:U3(!1,!1)},a={get(i){return _3(this,i,!1,!0)},get size(){return O3(this)},has:q3,add:V0,set:M0,delete:C0,clear:d0,forEach:U3(!1,!0)},e={get(i){return _3(this,i,!0)},get size(){return O3(this,!0)},has(i){return q3.call(this,i,!0)},add:s2("add"),set:s2("set"),delete:s2("delete"),clear:s2("clear"),forEach:U3(!0,!1)},r={get(i){return _3(this,i,!0,!0)},get size(){return O3(this,!0)},has(i){return q3.call(this,i,!0)},add:s2("add"),set:s2("set"),delete:s2("delete"),clear:s2("clear"),forEach:U3(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{c[i]=I3(i,!1,!1),e[i]=I3(i,!0,!1),a[i]=I3(i,!1,!0),r[i]=I3(i,!0,!0)}),[c,e,a,r]}const[af,ef,rf,sf]=cf();function j6(c,a){const e=a?c?sf:rf:c?ef:af;return(r,s,i)=>s==="__v_isReactive"?!c:s==="__v_isReadonly"?c:s==="__v_raw"?r:Reflect.get(j(e,s)&&s in r?e:r,s,i)}const nf={get:j6(!1,!1)},lf={get:j6(!1,!0)},ff={get:j6(!0,!1)};const j5=new WeakMap,Z5=new WeakMap,$5=new WeakMap,of=new WeakMap;function tf(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function mf(c){return c.__v_skip||!Object.isExtensible(c)?0:tf(Pl(c))}function d4(c){return H3(c)?c:Z6(c,!1,Ql,nf,j5)}function K5(c){return Z6(c,!1,Jl,lf,Z5)}function Y5(c){return Z6(c,!0,Xl,ff,$5)}function Z6(c,a,e,r,s){if(!l1(c)||c.__v_raw&&!(a&&c.__v_isReactive))return c;const i=s.get(c);if(i)return i;const n=mf(c);if(n===0)return c;const f=new Proxy(c,n===2?r:e);return s.set(c,f),f}function n3(c){return H3(c)?n3(c.__v_raw):!!(c&&c.__v_isReactive)}function H3(c){return!!(c&&c.__v_isReadonly)}function f4(c){return!!(c&&c.__v_isShallow)}function Q5(c){return c?!!c.__v_raw:!1}function $(c){const a=c&&c.__v_raw;return a?$(a):c}function vf(c){return Object.isExtensible(c)&&B5(c,"__v_skip",!0),c}const u3=c=>l1(c)?d4(c):c,$6=c=>l1(c)?Y5(c):c;class X5{constructor(a,e,r,s){this.getter=a,this._setter=e,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new U6(()=>a(this._value),()=>c4(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const a=$(this);return(!a._cacheable||a.effect.dirty)&&z2(a._value,a._value=a.effect.run())&&c4(a,4),J5(a),a.effect._dirtyLevel>=2&&c4(a,2),a._value}set value(a){this._setter(a)}get _dirty(){return this.effect.dirty}set _dirty(a){this.effect.dirty=a}}function zf(c,a,e=!1){let r,s;const i=G(c);return i?(r=c,s=A1):(r=c.get,s=c.set),new X5(r,s,i||!s,e)}function J5(c){var a;m2&&x2&&(c=$(c),q5(x2,(a=c.dep)!=null?a:c.dep=U5(()=>c.dep=void 0,c instanceof X5?c:void 0)))}function c4(c,a=4,e){c=$(c);const r=c.dep;r&&O5(r,a)}function b1(c){return!!(c&&c.__v_isRef===!0)}function hf(c){return c7(c,!1)}function Hf(c){return c7(c,!0)}function c7(c,a){return b1(c)?c:new uf(c,a)}class uf{constructor(a,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?a:$(a),this._value=e?a:u3(a)}get value(){return J5(this),this._value}set value(a){const e=this.__v_isShallow||f4(a)||H3(a);a=e?a:$(a),z2(a,this._rawValue)&&(this._rawValue=a,this._value=e?a:u3(a),c4(this,4))}}function S2(c){return b1(c)?c.value:c}const pf={get:(c,a,e)=>S2(Reflect.get(c,a,e)),set:(c,a,e,r)=>{const s=c[a];return b1(s)&&!b1(e)?(s.value=e,!0):Reflect.set(c,a,e,r)}};function a7(c){return n3(c)?c:new Proxy(c,pf)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function v2(c,a,e,r){try{return r?c(...r):c()}catch(s){L4(s,a,e)}}function R1(c,a,e,r){if(G(c)){const s=v2(c,a,e,r);return s&&R5(s)&&s.catch(i=>{L4(i,a,e)}),s}if(U(c)){const s=[];for(let i=0;i<c.length;i++)s.push(R1(c[i],a,e,r));return s}}function L4(c,a,e,r=!0){const s=a?a.vnode:null;if(a){let i=a.parent;const n=a.proxy,f=`https://vuejs.org/error-reference/#runtime-${e}`;for(;i;){const t=i.ec;if(t){for(let o=0;o<t.length;o++)if(t[o](c,n,f)===!1)return}i=i.parent}const l=a.appContext.config.errorHandler;if(l){p2(),v2(l,null,10,[c,n,f]),V2();return}}Vf(c,e,s,r)}function Vf(c,a,e,r=!0){console.error(c)}let p3=!1,z6=!1;const p1=[];let I1=0;const _2=[];let l2=null,L2=0;const e7=Promise.resolve();let K6=null;function r7(c){const a=K6||e7;return c?a.then(this?c.bind(this):c):a}function Mf(c){let a=I1+1,e=p1.length;for(;a<e;){const r=a+e>>>1,s=p1[r],i=V3(s);i<c||i===c&&s.pre?a=r+1:e=r}return a}function Y6(c){(!p1.length||!p1.includes(c,p3&&c.allowRecurse?I1+1:I1))&&(c.id==null?p1.push(c):p1.splice(Mf(c.id),0,c),s7())}function s7(){!p3&&!z6&&(z6=!0,K6=e7.then(n7))}function Cf(c){const a=p1.indexOf(c);a>I1&&p1.splice(a,1)}function df(c){U(c)?_2.push(...c):(!l2||!l2.includes(c,c.allowRecurse?L2+1:L2))&&_2.push(c),s7()}function L0(c,a,e=p3?I1+1:0){for(;e<p1.length;e++){const r=p1[e];if(r&&r.pre){if(c&&r.id!==c.uid)continue;p1.splice(e,1),e--,r()}}}function i7(c){if(_2.length){const a=[...new Set(_2)].sort((e,r)=>V3(e)-V3(r));if(_2.length=0,l2){l2.push(...a);return}for(l2=a,L2=0;L2<l2.length;L2++)l2[L2]();l2=null,L2=0}}const V3=c=>c.id==null?1/0:c.id,Lf=(c,a)=>{const e=V3(c)-V3(a);if(e===0){if(c.pre&&!a.pre)return-1;if(a.pre&&!c.pre)return 1}return e};function n7(c){z6=!1,p3=!0,p1.sort(Lf);try{for(I1=0;I1<p1.length;I1++){const a=p1[I1];a&&a.active!==!1&&v2(a,null,14)}}finally{I1=0,p1.length=0,i7(),p3=!1,K6=null,(p1.length||_2.length)&&n7()}}function gf(c,a,...e){if(c.isUnmounted)return;const r=c.vnode.props||r1;let s=e;const i=a.startsWith("update:"),n=i&&a.slice(7);if(n&&n in r){const o=`${n==="modelValue"?"model":n}Modifiers`,{number:z,trim:h}=r[o]||r1;h&&(s=e.map(u=>z1(u)?u.trim():u)),z&&(s=e.map(Fl))}let f,l=r[f=$4(a)]||r[f=$4(W1(a))];!l&&i&&(l=r[f=$4(W2(a))]),l&&R1(l,c,6,s);const t=r[f+"Once"];if(t){if(!c.emitted)c.emitted={};else if(c.emitted[f])return;c.emitted[f]=!0,R1(t,c,6,s)}}function l7(c,a,e=!1){const r=a.emitsCache,s=r.get(c);if(s!==void 0)return s;const i=c.emits;let n={},f=!1;if(!G(c)){const l=t=>{const o=l7(t,a,!0);o&&(f=!0,m1(n,o))};!e&&a.mixins.length&&a.mixins.forEach(l),c.extends&&l(c.extends),c.mixins&&c.mixins.forEach(l)}return!i&&!f?(l1(c)&&r.set(c,null),null):(U(i)?i.forEach(l=>n[l]=null):m1(n,i),l1(c)&&r.set(c,n),n)}function g4(c,a){return!c||!u4(a)?!1:(a=a.slice(2).replace(/Once$/,""),j(c,a[0].toLowerCase()+a.slice(1))||j(c,W2(a))||j(c,a))}let k1=null,f7=null;function o4(c){const a=k1;return k1=c,f7=c&&c.type.__scopeId||null,a}function c3(c,a=k1,e){if(!a||c._n)return c;const r=(...s)=>{r._d&&T0(-1);const i=o4(a);let n;try{n=c(...s)}finally{o4(i),r._d&&T0(1)}return n};return r._n=!0,r._c=!0,r._d=!0,r}function Y4(c){const{type:a,vnode:e,proxy:r,withProxy:s,propsOptions:[i],slots:n,attrs:f,emit:l,render:t,renderCache:o,props:z,data:h,setupState:u,ctx:N,inheritAttrs:y}=c,E=o4(c);let M,d;try{if(e.shapeFlag&4){const _=s||r,I=_;M=U1(t.call(I,_,o,z,u,h,N)),d=f}else{const _=a;M=U1(_.length>1?_(z,{attrs:f,slots:n,emit:l}):_(z,null)),d=a.props?f:bf(f)}}catch(_){t3.length=0,L4(_,c,1),M=n1(M3)}let w=M;if(d&&y!==!1){const _=Object.keys(d),{shapeFlag:I}=w;_.length&&I&7&&(i&&_.some(E6)&&(d=xf(d,i)),w=O2(w,d,!1,!0))}return e.dirs&&(w=O2(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(e.dirs):e.dirs),e.transition&&(w.transition=e.transition),M=w,o4(E),M}const bf=c=>{let a;for(const e in c)(e==="class"||e==="style"||u4(e))&&((a||(a={}))[e]=c[e]);return a},xf=(c,a)=>{const e={};for(const r in c)(!E6(r)||!(r.slice(9)in a))&&(e[r]=c[r]);return e};function Nf(c,a,e){const{props:r,children:s,component:i}=c,{props:n,children:f,patchFlag:l}=a,t=i.emitsOptions;if(a.dirs||a.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return r?g0(r,n,t):!!n;if(l&8){const o=a.dynamicProps;for(let z=0;z<o.length;z++){const h=o[z];if(n[h]!==r[h]&&!g4(t,h))return!0}}}else return(s||f)&&(!f||!f.$stable)?!0:r===n?!1:r?n?g0(r,n,t):!0:!!n;return!1}function g0(c,a,e){const r=Object.keys(a);if(r.length!==Object.keys(c).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(a[i]!==c[i]&&!g4(e,i))return!0}return!1}function Sf({vnode:c,parent:a},e){for(;a;){const r=a.subTree;if(r.suspense&&r.suspense.activeBranch===c&&(r.el=c.el),r===c)(c=a.vnode).el=e,a=a.parent;else break}}const Af="components";function o7(c,a){return yf(Af,c,!0,a)||c}const wf=Symbol.for("v-ndc");function yf(c,a,e=!0,r=!1){const s=k1||V1;if(s){const i=s.type;{const f=xo(i,!1);if(f&&(f===a||f===W1(a)||f===M4(W1(a))))return i}const n=b0(s[c]||i[c],a)||b0(s.appContext[c],a);return!n&&r?i:n}}function b0(c,a){return c&&(c[a]||c[W1(a)]||c[M4(W1(a))])}const kf=c=>c.__isSuspense;function Pf(c,a){a&&a.pendingBranch?U(c)?a.effects.push(...c):a.effects.push(c):df(c)}const Tf=Symbol.for("v-scx"),Rf=()=>Y1(Tf),G3={};function l3(c,a,e){return t7(c,a,e)}function t7(c,a,{immediate:e,deep:r,flush:s,once:i,onTrack:n,onTrigger:f}=r1){if(a&&i){const D=a;a=(...J)=>{D(...J),I()}}const l=V1,t=D=>r===!0?D:B2(D,r===!1?1:void 0);let o,z=!1,h=!1;if(b1(c)?(o=()=>c.value,z=f4(c)):n3(c)?(o=()=>t(c),z=!0):U(c)?(h=!0,z=c.some(D=>n3(D)||f4(D)),o=()=>c.map(D=>{if(b1(D))return D.value;if(n3(D))return t(D);if(G(D))return v2(D,l,2)})):G(c)?a?o=()=>v2(c,l,2):o=()=>(u&&u(),R1(c,l,3,[N])):o=A1,a&&r){const D=o;o=()=>B2(D())}let u,N=D=>{u=w.onStop=()=>{v2(D,l,4),u=w.onStop=void 0}},y;if(N4)if(N=A1,a?e&&R1(a,l,3,[o(),h?[]:void 0,N]):o(),s==="sync"){const D=Rf();y=D.__watcherHandles||(D.__watcherHandles=[])}else return A1;let E=h?new Array(c.length).fill(G3):G3;const M=()=>{if(!(!w.active||!w.dirty))if(a){const D=w.run();(r||z||(h?D.some((J,h1)=>z2(J,E[h1])):z2(D,E)))&&(u&&u(),R1(a,l,3,[D,E===G3?void 0:h&&E[0]===G3?[]:E,N]),E=D)}else w.run()};M.allowRecurse=!!a;let d;s==="sync"?d=M:s==="post"?d=()=>L1(M,l&&l.suspense):(M.pre=!0,l&&(M.id=l.uid),d=()=>Y6(M));const w=new U6(o,A1,d),_=Wl(),I=()=>{w.stop(),_&&D6(_.effects,w)};return a?e?M():E=w.run():s==="post"?L1(w.run.bind(w),l&&l.suspense):w.run(),y&&y.push(I),I}function Bf(c,a,e){const r=this.proxy,s=z1(c)?c.includes(".")?m7(r,c):()=>r[c]:c.bind(r,r);let i;G(a)?i=a:(i=a.handler,e=a);const n=w3(this),f=t7(s,i.bind(r),e);return n(),f}function m7(c,a){const e=a.split(".");return()=>{let r=c;for(let s=0;s<e.length&&r;s++)r=r[e[s]];return r}}function B2(c,a=1/0,e){if(a<=0||!l1(c)||c.__v_skip||(e=e||new Set,e.has(c)))return c;if(e.add(c),a--,b1(c))B2(c.value,a,e);else if(U(c))for(let r=0;r<c.length;r++)B2(c[r],a,e);else if(yl(c)||s3(c))c.forEach(r=>{B2(r,a,e)});else if(Tl(c))for(const r in c)B2(c[r],a,e);return c}function C2(c,a,e,r){const s=c.dirs,i=a&&a.dirs;for(let n=0;n<s.length;n++){const f=s[n];i&&(f.oldValue=i[n].value);let l=f.dir[r];l&&(p2(),R1(l,e,8,[c.el,f,c,a]),V2())}}/*! #__NO_SIDE_EFFECTS__ */function Q6(c,a){return G(c)?m1({name:c.name},a,{setup:c}):c}const a4=c=>!!c.type.__asyncLoader,v7=c=>c.type.__isKeepAlive;function Ff(c,a){z7(c,"a",a)}function Ef(c,a){z7(c,"da",a)}function z7(c,a,e=V1){const r=c.__wdc||(c.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return c()});if(b4(a,r,e),e){let s=e.parent;for(;s&&s.parent;)v7(s.parent.vnode)&&Df(r,a,e,s),s=s.parent}}function Df(c,a,e,r){const s=b4(a,c,r,!0);h7(()=>{D6(r[a],s)},e)}function b4(c,a,e=V1,r=!1){if(e){const s=e[c]||(e[c]=[]),i=a.__weh||(a.__weh=(...n)=>{if(e.isUnmounted)return;p2();const f=w3(e),l=R1(a,e,c,n);return f(),V2(),l});return r?s.unshift(i):s.push(i),i}}const c2=c=>(a,e=V1)=>(!N4||c==="sp")&&b4(c,(...r)=>a(...r),e),_f=c2("bm"),qf=c2("m"),Of=c2("bu"),Uf=c2("u"),If=c2("bum"),h7=c2("um"),Gf=c2("sp"),Wf=c2("rtg"),jf=c2("rtc");function Zf(c,a=V1){b4("ec",c,a)}const h6=c=>c?w7(c)?a8(c)||c.proxy:h6(c.parent):null,f3=m1(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>h6(c.parent),$root:c=>h6(c.root),$emit:c=>c.emit,$options:c=>X6(c),$forceUpdate:c=>c.f||(c.f=()=>{c.effect.dirty=!0,Y6(c.update)}),$nextTick:c=>c.n||(c.n=r7.bind(c.proxy)),$watch:c=>Bf.bind(c)}),Q4=(c,a)=>c!==r1&&!c.__isScriptSetup&&j(c,a),$f={get({_:c},a){if(a==="__v_skip")return!0;const{ctx:e,setupState:r,data:s,props:i,accessCache:n,type:f,appContext:l}=c;let t;if(a[0]!=="$"){const u=n[a];if(u!==void 0)switch(u){case 1:return r[a];case 2:return s[a];case 4:return e[a];case 3:return i[a]}else{if(Q4(r,a))return n[a]=1,r[a];if(s!==r1&&j(s,a))return n[a]=2,s[a];if((t=c.propsOptions[0])&&j(t,a))return n[a]=3,i[a];if(e!==r1&&j(e,a))return n[a]=4,e[a];H6&&(n[a]=0)}}const o=f3[a];let z,h;if(o)return a==="$attrs"&&g1(c.attrs,"get",""),o(c);if((z=f.__cssModules)&&(z=z[a]))return z;if(e!==r1&&j(e,a))return n[a]=4,e[a];if(h=l.config.globalProperties,j(h,a))return h[a]},set({_:c},a,e){const{data:r,setupState:s,ctx:i}=c;return Q4(s,a)?(s[a]=e,!0):r!==r1&&j(r,a)?(r[a]=e,!0):j(c.props,a)||a[0]==="$"&&a.slice(1)in c?!1:(i[a]=e,!0)},has({_:{data:c,setupState:a,accessCache:e,ctx:r,appContext:s,propsOptions:i}},n){let f;return!!e[n]||c!==r1&&j(c,n)||Q4(a,n)||(f=i[0])&&j(f,n)||j(r,n)||j(f3,n)||j(s.config.globalProperties,n)},defineProperty(c,a,e){return e.get!=null?c._.accessCache[a]=0:j(e,"value")&&this.set(c,a,e.value,null),Reflect.defineProperty(c,a,e)}};function x0(c){return U(c)?c.reduce((a,e)=>(a[e]=null,a),{}):c}let H6=!0;function Kf(c){const a=X6(c),e=c.proxy,r=c.ctx;H6=!1,a.beforeCreate&&N0(a.beforeCreate,c,"bc");const{data:s,computed:i,methods:n,watch:f,provide:l,inject:t,created:o,beforeMount:z,mounted:h,beforeUpdate:u,updated:N,activated:y,deactivated:E,beforeDestroy:M,beforeUnmount:d,destroyed:w,unmounted:_,render:I,renderTracked:D,renderTriggered:J,errorCaptured:h1,serverPrefetch:H1,expose:S1,inheritAttrs:e2,components:M2,directives:F1,filters:Y2}=a;if(t&&Yf(t,r,null),n)for(const Q in n){const Z=n[Q];G(Z)&&(r[Q]=Z.bind(e))}if(s){const Q=s.call(e,e);l1(Q)&&(c.data=d4(Q))}if(H6=!0,i)for(const Q in i){const Z=i[Q],j1=G(Z)?Z.bind(e,e):G(Z.get)?Z.get.bind(e,e):A1,r2=!G(Z)&&G(Z.set)?Z.set.bind(e):A1,E1=v1({get:j1,set:r2});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>E1.value,set:C1=>E1.value=C1})}if(f)for(const Q in f)H7(f[Q],r,e,Q);if(l){const Q=G(l)?l.call(e):l;Reflect.ownKeys(Q).forEach(Z=>{e4(Z,Q[Z])})}o&&N0(o,c,"c");function o1(Q,Z){U(Z)?Z.forEach(j1=>Q(j1.bind(e))):Z&&Q(Z.bind(e))}if(o1(_f,z),o1(qf,h),o1(Of,u),o1(Uf,N),o1(Ff,y),o1(Ef,E),o1(Zf,h1),o1(jf,D),o1(Wf,J),o1(If,d),o1(h7,_),o1(Gf,H1),U(S1))if(S1.length){const Q=c.exposed||(c.exposed={});S1.forEach(Z=>{Object.defineProperty(Q,Z,{get:()=>e[Z],set:j1=>e[Z]=j1})})}else c.exposed||(c.exposed={});I&&c.render===A1&&(c.render=I),e2!=null&&(c.inheritAttrs=e2),M2&&(c.components=M2),F1&&(c.directives=F1)}function Yf(c,a,e=A1){U(c)&&(c=u6(c));for(const r in c){const s=c[r];let i;l1(s)?"default"in s?i=Y1(s.from||r,s.default,!0):i=Y1(s.from||r):i=Y1(s),b1(i)?Object.defineProperty(a,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:n=>i.value=n}):a[r]=i}}function N0(c,a,e){R1(U(c)?c.map(r=>r.bind(a.proxy)):c.bind(a.proxy),a,e)}function H7(c,a,e,r){const s=r.includes(".")?m7(e,r):()=>e[r];if(z1(c)){const i=a[c];G(i)&&l3(s,i)}else if(G(c))l3(s,c.bind(e));else if(l1(c))if(U(c))c.forEach(i=>H7(i,a,e,r));else{const i=G(c.handler)?c.handler.bind(e):a[c.handler];G(i)&&l3(s,i,c)}}function X6(c){const a=c.type,{mixins:e,extends:r}=a,{mixins:s,optionsCache:i,config:{optionMergeStrategies:n}}=c.appContext,f=i.get(a);let l;return f?l=f:!s.length&&!e&&!r?l=a:(l={},s.length&&s.forEach(t=>t4(l,t,n,!0)),t4(l,a,n)),l1(a)&&i.set(a,l),l}function t4(c,a,e,r=!1){const{mixins:s,extends:i}=a;i&&t4(c,i,e,!0),s&&s.forEach(n=>t4(c,n,e,!0));for(const n in a)if(!(r&&n==="expose")){const f=Qf[n]||e&&e[n];c[n]=f?f(c[n],a[n]):a[n]}return c}const Qf={data:S0,props:A0,emits:A0,methods:a3,computed:a3,beforeCreate:M1,created:M1,beforeMount:M1,mounted:M1,beforeUpdate:M1,updated:M1,beforeDestroy:M1,beforeUnmount:M1,destroyed:M1,unmounted:M1,activated:M1,deactivated:M1,errorCaptured:M1,serverPrefetch:M1,components:a3,directives:a3,watch:Jf,provide:S0,inject:Xf};function S0(c,a){return a?c?function(){return m1(G(c)?c.call(this,this):c,G(a)?a.call(this,this):a)}:a:c}function Xf(c,a){return a3(u6(c),u6(a))}function u6(c){if(U(c)){const a={};for(let e=0;e<c.length;e++)a[c[e]]=c[e];return a}return c}function M1(c,a){return c?[...new Set([].concat(c,a))]:a}function a3(c,a){return c?m1(Object.create(null),c,a):a}function A0(c,a){return c?U(c)&&U(a)?[...new Set([...c,...a])]:m1(Object.create(null),x0(c),x0(a??{})):a}function Jf(c,a){if(!c)return a;if(!a)return c;const e=m1(Object.create(null),c);for(const r in a)e[r]=M1(c[r],a[r]);return e}function u7(){return{app:null,config:{isNativeTag:Al,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let co=0;function ao(c,a){return function(r,s=null){G(r)||(r=m1({},r)),s!=null&&!l1(s)&&(s=null);const i=u7(),n=new WeakSet;let f=!1;const l=i.app={_uid:co++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:So,get config(){return i.config},set config(t){},use(t,...o){return n.has(t)||(t&&G(t.install)?(n.add(t),t.install(l,...o)):G(t)&&(n.add(t),t(l,...o))),l},mixin(t){return i.mixins.includes(t)||i.mixins.push(t),l},component(t,o){return o?(i.components[t]=o,l):i.components[t]},directive(t,o){return o?(i.directives[t]=o,l):i.directives[t]},mount(t,o,z){if(!f){const h=n1(r,s);return h.appContext=i,z===!0?z="svg":z===!1&&(z=void 0),o&&a?a(h,t):c(h,t,z),f=!0,l._container=t,t.__vue_app__=l,a8(h.component)||h.component.proxy}},unmount(){f&&(c(null,l._container),delete l._container.__vue_app__)},provide(t,o){return i.provides[t]=o,l},runWithContext(t){const o=o3;o3=l;try{return t()}finally{o3=o}}};return l}}let o3=null;function e4(c,a){if(V1){let e=V1.provides;const r=V1.parent&&V1.parent.provides;r===e&&(e=V1.provides=Object.create(r)),e[c]=a}}function Y1(c,a,e=!1){const r=V1||k1;if(r||o3){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:o3._context.provides;if(s&&c in s)return s[c];if(arguments.length>1)return e&&G(a)?a.call(r&&r.proxy):a}}const p7={},V7=()=>Object.create(p7),M7=c=>Object.getPrototypeOf(c)===p7;function eo(c,a,e,r=!1){const s={},i=V7();c.propsDefaults=Object.create(null),C7(c,a,s,i);for(const n in c.propsOptions[0])n in s||(s[n]=void 0);e?c.props=r?s:K5(s):c.type.props?c.props=s:c.props=i,c.attrs=i}function ro(c,a,e,r){const{props:s,attrs:i,vnode:{patchFlag:n}}=c,f=$(s),[l]=c.propsOptions;let t=!1;if((r||n>0)&&!(n&16)){if(n&8){const o=c.vnode.dynamicProps;for(let z=0;z<o.length;z++){let h=o[z];if(g4(c.emitsOptions,h))continue;const u=a[h];if(l)if(j(i,h))u!==i[h]&&(i[h]=u,t=!0);else{const N=W1(h);s[N]=p6(l,f,N,u,c,!1)}else u!==i[h]&&(i[h]=u,t=!0)}}}else{C7(c,a,s,i)&&(t=!0);let o;for(const z in f)(!a||!j(a,z)&&((o=W2(z))===z||!j(a,o)))&&(l?e&&(e[z]!==void 0||e[o]!==void 0)&&(s[z]=p6(l,f,z,void 0,c,!0)):delete s[z]);if(i!==f)for(const z in i)(!a||!j(a,z))&&(delete i[z],t=!0)}t&&K1(c.attrs,"set","")}function C7(c,a,e,r){const[s,i]=c.propsOptions;let n=!1,f;if(a)for(let l in a){if(i3(l))continue;const t=a[l];let o;s&&j(s,o=W1(l))?!i||!i.includes(o)?e[o]=t:(f||(f={}))[o]=t:g4(c.emitsOptions,l)||(!(l in r)||t!==r[l])&&(r[l]=t,n=!0)}if(i){const l=$(e),t=f||r1;for(let o=0;o<i.length;o++){const z=i[o];e[z]=p6(s,l,z,t[z],c,!j(t,z))}}return n}function p6(c,a,e,r,s,i){const n=c[e];if(n!=null){const f=j(n,"default");if(f&&r===void 0){const l=n.default;if(n.type!==Function&&!n.skipFactory&&G(l)){const{propsDefaults:t}=s;if(e in t)r=t[e];else{const o=w3(s);r=t[e]=l.call(null,a),o()}}else r=l}n[0]&&(i&&!f?r=!1:n[1]&&(r===""||r===W2(e))&&(r=!0))}return r}function d7(c,a,e=!1){const r=a.propsCache,s=r.get(c);if(s)return s;const i=c.props,n={},f=[];let l=!1;if(!G(c)){const o=z=>{l=!0;const[h,u]=d7(z,a,!0);m1(n,h),u&&f.push(...u)};!e&&a.mixins.length&&a.mixins.forEach(o),c.extends&&o(c.extends),c.mixins&&c.mixins.forEach(o)}if(!i&&!l)return l1(c)&&r.set(c,D2),D2;if(U(i))for(let o=0;o<i.length;o++){const z=W1(i[o]);w0(z)&&(n[z]=r1)}else if(i)for(const o in i){const z=W1(o);if(w0(z)){const h=i[o],u=n[z]=U(h)||G(h)?{type:h}:m1({},h);if(u){const N=P0(Boolean,u.type),y=P0(String,u.type);u[0]=N>-1,u[1]=y<0||N<y,(N>-1||j(u,"default"))&&f.push(z)}}}const t=[n,f];return l1(c)&&r.set(c,t),t}function w0(c){return c[0]!=="$"&&!i3(c)}function y0(c){return c===null?"null":typeof c=="function"?c.name||"":typeof c=="object"&&c.constructor&&c.constructor.name||""}function k0(c,a){return y0(c)===y0(a)}function P0(c,a){return U(a)?a.findIndex(e=>k0(e,c)):G(a)&&k0(a,c)?0:-1}const L7=c=>c[0]==="_"||c==="$stable",J6=c=>U(c)?c.map(U1):[U1(c)],so=(c,a,e)=>{if(a._n)return a;const r=c3((...s)=>J6(a(...s)),e);return r._c=!1,r},g7=(c,a,e)=>{const r=c._ctx;for(const s in c){if(L7(s))continue;const i=c[s];if(G(i))a[s]=so(s,i,r);else if(i!=null){const n=J6(i);a[s]=()=>n}}},b7=(c,a)=>{const e=J6(a);c.slots.default=()=>e},io=(c,a)=>{const e=c.slots=V7();if(c.vnode.shapeFlag&32){const r=a._;r?(m1(e,a),B5(e,"_",r,!0)):g7(a,e)}else a&&b7(c,a)},no=(c,a,e)=>{const{vnode:r,slots:s}=c;let i=!0,n=r1;if(r.shapeFlag&32){const f=a._;f?e&&f===1?i=!1:(m1(s,a),!e&&f===1&&delete s._):(i=!a.$stable,g7(a,s)),n=a}else a&&(b7(c,a),n={default:1});if(i)for(const f in s)!L7(f)&&n[f]==null&&delete s[f]};function V6(c,a,e,r,s=!1){if(U(c)){c.forEach((h,u)=>V6(h,a&&(U(a)?a[u]:a),e,r,s));return}if(a4(r)&&!s)return;const i=r.shapeFlag&4?a8(r.component)||r.component.proxy:r.el,n=s?null:i,{i:f,r:l}=c,t=a&&a.r,o=f.refs===r1?f.refs={}:f.refs,z=f.setupState;if(t!=null&&t!==l&&(z1(t)?(o[t]=null,j(z,t)&&(z[t]=null)):b1(t)&&(t.value=null)),G(l))v2(l,f,12,[n,o]);else{const h=z1(l),u=b1(l);if(h||u){const N=()=>{if(c.f){const y=h?j(z,l)?z[l]:o[l]:l.value;s?U(y)&&D6(y,i):U(y)?y.includes(i)||y.push(i):h?(o[l]=[i],j(z,l)&&(z[l]=o[l])):(l.value=[i],c.k&&(o[c.k]=l.value))}else h?(o[l]=n,j(z,l)&&(z[l]=n)):u&&(l.value=n,c.k&&(o[c.k]=n))};n?(N.id=-1,L1(N,e)):N()}}}const L1=Pf;function lo(c){return fo(c)}function fo(c,a){const e=F5();e.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:n,createText:f,createComment:l,setText:t,setElementText:o,parentNode:z,nextSibling:h,setScopeId:u=A1,insertStaticContent:N}=c,y=(m,v,H,C=null,p=null,b=null,A=void 0,g=null,x=!!v.dynamicChildren)=>{if(m===v)return;m&&!X2(m,v)&&(C=V(m),C1(m,p,b,!0),m=null),v.patchFlag===-2&&(x=!1,v.dynamicChildren=null);const{type:L,ref:T,shapeFlag:q}=v;switch(L){case x4:E(m,v,H,C);break;case M3:M(m,v,H,C);break;case r4:m==null&&d(v,H,C,A);break;case q1:M2(m,v,H,C,p,b,A,g,x);break;default:q&1?I(m,v,H,C,p,b,A,g,x):q&6?F1(m,v,H,C,p,b,A,g,x):(q&64||q&128)&&L.process(m,v,H,C,p,b,A,g,x,B)}T!=null&&p&&V6(T,m&&m.ref,b,v||m,!v)},E=(m,v,H,C)=>{if(m==null)r(v.el=f(v.children),H,C);else{const p=v.el=m.el;v.children!==m.children&&t(p,v.children)}},M=(m,v,H,C)=>{m==null?r(v.el=l(v.children||""),H,C):v.el=m.el},d=(m,v,H,C)=>{[m.el,m.anchor]=N(m.children,v,H,C,m.el,m.anchor)},w=({el:m,anchor:v},H,C)=>{let p;for(;m&&m!==v;)p=h(m),r(m,H,C),m=p;r(v,H,C)},_=({el:m,anchor:v})=>{let H;for(;m&&m!==v;)H=h(m),s(m),m=H;s(v)},I=(m,v,H,C,p,b,A,g,x)=>{v.type==="svg"?A="svg":v.type==="math"&&(A="mathml"),m==null?D(v,H,C,p,b,A,g,x):H1(m,v,p,b,A,g,x)},D=(m,v,H,C,p,b,A,g)=>{let x,L;const{props:T,shapeFlag:q,transition:F,dirs:O}=m;if(x=m.el=n(m.type,b,T&&T.is,T),q&8?o(x,m.children):q&16&&h1(m.children,x,null,C,p,X4(m,b),A,g),O&&C2(m,null,C,"created"),J(x,m,m.scopeId,A,C),T){for(const X in T)X!=="value"&&!i3(X)&&i(x,X,null,T[X],b,m.children,C,p,u1);"value"in T&&i(x,"value",null,T.value,b),(L=T.onVnodeBeforeMount)&&_1(L,C,m)}O&&C2(m,null,C,"beforeMount");const W=oo(p,F);W&&F.beforeEnter(x),r(x,v,H),((L=T&&T.onVnodeMounted)||W||O)&&L1(()=>{L&&_1(L,C,m),W&&F.enter(x),O&&C2(m,null,C,"mounted")},p)},J=(m,v,H,C,p)=>{if(H&&u(m,H),C)for(let b=0;b<C.length;b++)u(m,C[b]);if(p){let b=p.subTree;if(v===b){const A=p.vnode;J(m,A,A.scopeId,A.slotScopeIds,p.parent)}}},h1=(m,v,H,C,p,b,A,g,x=0)=>{for(let L=x;L<m.length;L++){const T=m[L]=g?f2(m[L]):U1(m[L]);y(null,T,v,H,C,p,b,A,g)}},H1=(m,v,H,C,p,b,A)=>{const g=v.el=m.el;let{patchFlag:x,dynamicChildren:L,dirs:T}=v;x|=m.patchFlag&16;const q=m.props||r1,F=v.props||r1;let O;if(H&&d2(H,!1),(O=F.onVnodeBeforeUpdate)&&_1(O,H,v,m),T&&C2(v,m,H,"beforeUpdate"),H&&d2(H,!0),L?S1(m.dynamicChildren,L,g,H,C,X4(v,p),b):A||Z(m,v,g,null,H,C,X4(v,p),b,!1),x>0){if(x&16)e2(g,v,q,F,H,C,p);else if(x&2&&q.class!==F.class&&i(g,"class",null,F.class,p),x&4&&i(g,"style",q.style,F.style,p),x&8){const W=v.dynamicProps;for(let X=0;X<W.length;X++){const e1=W[X],t1=q[e1],w1=F[e1];(w1!==t1||e1==="value")&&i(g,e1,t1,w1,p,m.children,H,C,u1)}}x&1&&m.children!==v.children&&o(g,v.children)}else!A&&L==null&&e2(g,v,q,F,H,C,p);((O=F.onVnodeUpdated)||T)&&L1(()=>{O&&_1(O,H,v,m),T&&C2(v,m,H,"updated")},C)},S1=(m,v,H,C,p,b,A)=>{for(let g=0;g<v.length;g++){const x=m[g],L=v[g],T=x.el&&(x.type===q1||!X2(x,L)||x.shapeFlag&70)?z(x.el):H;y(x,L,T,null,C,p,b,A,!0)}},e2=(m,v,H,C,p,b,A)=>{if(H!==C){if(H!==r1)for(const g in H)!i3(g)&&!(g in C)&&i(m,g,H[g],null,A,v.children,p,b,u1);for(const g in C){if(i3(g))continue;const x=C[g],L=H[g];x!==L&&g!=="value"&&i(m,g,L,x,A,v.children,p,b,u1)}"value"in C&&i(m,"value",H.value,C.value,A)}},M2=(m,v,H,C,p,b,A,g,x)=>{const L=v.el=m?m.el:f(""),T=v.anchor=m?m.anchor:f("");let{patchFlag:q,dynamicChildren:F,slotScopeIds:O}=v;O&&(g=g?g.concat(O):O),m==null?(r(L,H,C),r(T,H,C),h1(v.children||[],H,T,p,b,A,g,x)):q>0&&q&64&&F&&m.dynamicChildren?(S1(m.dynamicChildren,F,H,p,b,A,g),(v.key!=null||p&&v===p.subTree)&&x7(m,v,!0)):Z(m,v,H,T,p,b,A,g,x)},F1=(m,v,H,C,p,b,A,g,x)=>{v.slotScopeIds=g,m==null?v.shapeFlag&512?p.ctx.activate(v,H,C,A,x):Y2(v,H,C,p,b,A,x):y2(m,v,x)},Y2=(m,v,H,C,p,b,A)=>{const g=m.component=Mo(m,C,p);if(v7(m)&&(g.ctx.renderer=B),Co(g),g.asyncDep){if(p&&p.registerDep(g,o1),!m.el){const x=g.subTree=n1(M3);M(null,x,v,H)}}else o1(g,m,v,H,p,b,A)},y2=(m,v,H)=>{const C=v.component=m.component;if(Nf(m,v,H))if(C.asyncDep&&!C.asyncResolved){Q(C,v,H);return}else C.next=v,Cf(C.update),C.effect.dirty=!0,C.update();else v.el=m.el,C.vnode=v},o1=(m,v,H,C,p,b,A)=>{const g=()=>{if(m.isMounted){let{next:T,bu:q,u:F,parent:O,vnode:W}=m;{const T2=N7(m);if(T2){T&&(T.el=W.el,Q(m,T,A)),T2.asyncDep.then(()=>{m.isUnmounted||g()});return}}let X=T,e1;d2(m,!1),T?(T.el=W.el,Q(m,T,A)):T=W,q&&K4(q),(e1=T.props&&T.props.onVnodeBeforeUpdate)&&_1(e1,O,T,W),d2(m,!0);const t1=Y4(m),w1=m.subTree;m.subTree=t1,y(w1,t1,z(w1.el),V(w1),m,p,b),T.el=t1.el,X===null&&Sf(m,t1.el),F&&L1(F,p),(e1=T.props&&T.props.onVnodeUpdated)&&L1(()=>_1(e1,O,T,W),p)}else{let T;const{el:q,props:F}=v,{bm:O,m:W,parent:X}=m,e1=a4(v);if(d2(m,!1),O&&K4(O),!e1&&(T=F&&F.onVnodeBeforeMount)&&_1(T,X,v),d2(m,!0),q&&s1){const t1=()=>{m.subTree=Y4(m),s1(q,m.subTree,m,p,null)};e1?v.type.__asyncLoader().then(()=>!m.isUnmounted&&t1()):t1()}else{const t1=m.subTree=Y4(m);y(null,t1,H,C,m,p,b),v.el=t1.el}if(W&&L1(W,p),!e1&&(T=F&&F.onVnodeMounted)){const t1=v;L1(()=>_1(T,X,t1),p)}(v.shapeFlag&256||X&&a4(X.vnode)&&X.vnode.shapeFlag&256)&&m.a&&L1(m.a,p),m.isMounted=!0,v=H=C=null}},x=m.effect=new U6(g,A1,()=>Y6(L),m.scope),L=m.update=()=>{x.dirty&&x.run()};L.id=m.uid,d2(m,!0),L()},Q=(m,v,H)=>{v.component=m;const C=m.vnode.props;m.vnode=v,m.next=null,ro(m,v.props,C,H),no(m,v.children,H),p2(),L0(m),V2()},Z=(m,v,H,C,p,b,A,g,x=!1)=>{const L=m&&m.children,T=m?m.shapeFlag:0,q=v.children,{patchFlag:F,shapeFlag:O}=v;if(F>0){if(F&128){r2(L,q,H,C,p,b,A,g,x);return}else if(F&256){j1(L,q,H,C,p,b,A,g,x);return}}O&8?(T&16&&u1(L,p,b),q!==L&&o(H,q)):T&16?O&16?r2(L,q,H,C,p,b,A,g,x):u1(L,p,b,!0):(T&8&&o(H,""),O&16&&h1(q,H,C,p,b,A,g,x))},j1=(m,v,H,C,p,b,A,g,x)=>{m=m||D2,v=v||D2;const L=m.length,T=v.length,q=Math.min(L,T);let F;for(F=0;F<q;F++){const O=v[F]=x?f2(v[F]):U1(v[F]);y(m[F],O,H,null,p,b,A,g,x)}L>T?u1(m,p,b,!0,!1,q):h1(v,H,C,p,b,A,g,x,q)},r2=(m,v,H,C,p,b,A,g,x)=>{let L=0;const T=v.length;let q=m.length-1,F=T-1;for(;L<=q&&L<=F;){const O=m[L],W=v[L]=x?f2(v[L]):U1(v[L]);if(X2(O,W))y(O,W,H,null,p,b,A,g,x);else break;L++}for(;L<=q&&L<=F;){const O=m[q],W=v[F]=x?f2(v[F]):U1(v[F]);if(X2(O,W))y(O,W,H,null,p,b,A,g,x);else break;q--,F--}if(L>q){if(L<=F){const O=F+1,W=O<T?v[O].el:C;for(;L<=F;)y(null,v[L]=x?f2(v[L]):U1(v[L]),H,W,p,b,A,g,x),L++}}else if(L>F)for(;L<=q;)C1(m[L],p,b,!0),L++;else{const O=L,W=L,X=new Map;for(L=W;L<=F;L++){const x1=v[L]=x?f2(v[L]):U1(v[L]);x1.key!=null&&X.set(x1.key,L)}let e1,t1=0;const w1=F-W+1;let T2=!1,m0=0;const Q2=new Array(w1);for(L=0;L<w1;L++)Q2[L]=0;for(L=O;L<=q;L++){const x1=m[L];if(t1>=w1){C1(x1,p,b,!0);continue}let D1;if(x1.key!=null)D1=X.get(x1.key);else for(e1=W;e1<=F;e1++)if(Q2[e1-W]===0&&X2(x1,v[e1])){D1=e1;break}D1===void 0?C1(x1,p,b,!0):(Q2[D1-W]=L+1,D1>=m0?m0=D1:T2=!0,y(x1,v[D1],H,null,p,b,A,g,x),t1++)}const v0=T2?to(Q2):D2;for(e1=v0.length-1,L=w1-1;L>=0;L--){const x1=W+L,D1=v[x1],z0=x1+1<T?v[x1+1].el:C;Q2[L]===0?y(null,D1,H,z0,p,b,A,g,x):T2&&(e1<0||L!==v0[e1]?E1(D1,H,z0,2):e1--)}}},E1=(m,v,H,C,p=null)=>{const{el:b,type:A,transition:g,children:x,shapeFlag:L}=m;if(L&6){E1(m.component.subTree,v,H,C);return}if(L&128){m.suspense.move(v,H,C);return}if(L&64){A.move(m,v,H,B);return}if(A===q1){r(b,v,H);for(let q=0;q<x.length;q++)E1(x[q],v,H,C);r(m.anchor,v,H);return}if(A===r4){w(m,v,H);return}if(C!==2&&L&1&&g)if(C===0)g.beforeEnter(b),r(b,v,H),L1(()=>g.enter(b),p);else{const{leave:q,delayLeave:F,afterLeave:O}=g,W=()=>r(b,v,H),X=()=>{q(b,()=>{W(),O&&O()})};F?F(b,W,X):X()}else r(b,v,H)},C1=(m,v,H,C=!1,p=!1)=>{const{type:b,props:A,ref:g,children:x,dynamicChildren:L,shapeFlag:T,patchFlag:q,dirs:F}=m;if(g!=null&&V6(g,null,H,m,!0),T&256){v.ctx.deactivate(m);return}const O=T&1&&F,W=!a4(m);let X;if(W&&(X=A&&A.onVnodeBeforeUnmount)&&_1(X,v,m),T&6)D3(m.component,H,C);else{if(T&128){m.suspense.unmount(H,C);return}O&&C2(m,null,v,"beforeUnmount"),T&64?m.type.remove(m,v,H,p,B,C):L&&(b!==q1||q>0&&q&64)?u1(L,v,H,!1,!0):(b===q1&&q&384||!p&&T&16)&&u1(x,v,H),C&&k2(m)}(W&&(X=A&&A.onVnodeUnmounted)||O)&&L1(()=>{X&&_1(X,v,m),O&&C2(m,null,v,"unmounted")},H)},k2=m=>{const{type:v,el:H,anchor:C,transition:p}=m;if(v===q1){P2(H,C);return}if(v===r4){_(m);return}const b=()=>{s(H),p&&!p.persisted&&p.afterLeave&&p.afterLeave()};if(m.shapeFlag&1&&p&&!p.persisted){const{leave:A,delayLeave:g}=p,x=()=>A(H,b);g?g(m.el,b,x):x()}else b()},P2=(m,v)=>{let H;for(;m!==v;)H=h(m),s(m),m=H;s(v)},D3=(m,v,H)=>{const{bum:C,scope:p,update:b,subTree:A,um:g}=m;C&&K4(C),p.stop(),b&&(b.active=!1,C1(A,m,v,H)),g&&L1(g,v),L1(()=>{m.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},u1=(m,v,H,C=!1,p=!1,b=0)=>{for(let A=b;A<m.length;A++)C1(m[A],v,H,C,p)},V=m=>m.shapeFlag&6?V(m.component.subTree):m.shapeFlag&128?m.suspense.next():h(m.anchor||m.el);let P=!1;const S=(m,v,H)=>{m==null?v._vnode&&C1(v._vnode,null,null,!0):y(v._vnode||null,m,v,null,null,null,H),P||(P=!0,L0(),i7(),P=!1),v._vnode=m},B={p:y,um:C1,m:E1,r:k2,mt:Y2,mc:h1,pc:Z,pbc:S1,n:V,o:c};let K,s1;return{render:S,hydrate:K,createApp:ao(S,K)}}function X4({type:c,props:a},e){return e==="svg"&&c==="foreignObject"||e==="mathml"&&c==="annotation-xml"&&a&&a.encoding&&a.encoding.includes("html")?void 0:e}function d2({effect:c,update:a},e){c.allowRecurse=a.allowRecurse=e}function oo(c,a){return(!c||c&&!c.pendingBranch)&&a&&!a.persisted}function x7(c,a,e=!1){const r=c.children,s=a.children;if(U(r)&&U(s))for(let i=0;i<r.length;i++){const n=r[i];let f=s[i];f.shapeFlag&1&&!f.dynamicChildren&&((f.patchFlag<=0||f.patchFlag===32)&&(f=s[i]=f2(s[i]),f.el=n.el),e||x7(n,f)),f.type===x4&&(f.el=n.el)}}function to(c){const a=c.slice(),e=[0];let r,s,i,n,f;const l=c.length;for(r=0;r<l;r++){const t=c[r];if(t!==0){if(s=e[e.length-1],c[s]<t){a[r]=s,e.push(r);continue}for(i=0,n=e.length-1;i<n;)f=i+n>>1,c[e[f]]<t?i=f+1:n=f;t<c[e[i]]&&(i>0&&(a[r]=e[i-1]),e[i]=r)}}for(i=e.length,n=e[i-1];i-- >0;)e[i]=n,n=a[n];return e}function N7(c){const a=c.subTree.component;if(a)return a.asyncDep&&!a.asyncResolved?a:N7(a)}const mo=c=>c.__isTeleport,q1=Symbol.for("v-fgt"),x4=Symbol.for("v-txt"),M3=Symbol.for("v-cmt"),r4=Symbol.for("v-stc"),t3=[];let P1=null;function j2(c=!1){t3.push(P1=c?null:[])}function vo(){t3.pop(),P1=t3[t3.length-1]||null}let C3=1;function T0(c){C3+=c}function zo(c){return c.dynamicChildren=C3>0?P1||D2:null,vo(),C3>0&&P1&&P1.push(c),c}function Z2(c,a,e,r,s,i){return zo(O1(c,a,e,r,s,i,!0))}function M6(c){return c?c.__v_isVNode===!0:!1}function X2(c,a){return c.type===a.type&&c.key===a.key}const S7=({key:c})=>c??null,s4=({ref:c,ref_key:a,ref_for:e})=>(typeof c=="number"&&(c=""+c),c!=null?z1(c)||b1(c)||G(c)?{i:k1,r:c,k:a,f:!!e}:c:null);function O1(c,a=null,e=null,r=0,s=null,i=c===q1?0:1,n=!1,f=!1){const l={__v_isVNode:!0,__v_skip:!0,type:c,props:a,key:a&&S7(a),ref:a&&s4(a),scopeId:f7,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:k1};return f?(c8(l,e),i&128&&c.normalize(l)):e&&(l.shapeFlag|=z1(e)?8:16),C3>0&&!n&&P1&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&P1.push(l),l}const n1=ho;function ho(c,a=null,e=null,r=0,s=null,i=!1){if((!c||c===wf)&&(c=M3),M6(c)){const f=O2(c,a,!0);return e&&c8(f,e),C3>0&&!i&&P1&&(f.shapeFlag&6?P1[P1.indexOf(c)]=f:P1.push(f)),f.patchFlag|=-2,f}if(No(c)&&(c=c.__vccOpts),a){a=Ho(a);let{class:f,style:l}=a;f&&!z1(f)&&(a.class=O6(f)),l1(l)&&(Q5(l)&&!U(l)&&(l=m1({},l)),a.style=q6(l))}const n=z1(c)?1:kf(c)?128:mo(c)?64:l1(c)?4:G(c)?2:0;return O1(c,a,e,r,s,n,i,!0)}function Ho(c){return c?Q5(c)||M7(c)?m1({},c):c:null}function O2(c,a,e=!1,r=!1){const{props:s,ref:i,patchFlag:n,children:f,transition:l}=c,t=a?uo(s||{},a):s,o={__v_isVNode:!0,__v_skip:!0,type:c.type,props:t,key:t&&S7(t),ref:a&&a.ref?e&&i?U(i)?i.concat(s4(a)):[i,s4(a)]:s4(a):i,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:f,target:c.target,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:a&&c.type!==q1?n===-1?16:n|16:n,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:l,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&O2(c.ssContent),ssFallback:c.ssFallback&&O2(c.ssFallback),el:c.el,anchor:c.anchor,ctx:c.ctx,ce:c.ce};return l&&r&&(o.transition=l.clone(o)),o}function e3(c=" ",a=0){return n1(x4,null,c,a)}function A7(c,a){const e=n1(r4,null,c);return e.staticCount=a,e}function U1(c){return c==null||typeof c=="boolean"?n1(M3):U(c)?n1(q1,null,c.slice()):typeof c=="object"?f2(c):n1(x4,null,String(c))}function f2(c){return c.el===null&&c.patchFlag!==-1||c.memo?c:O2(c)}function c8(c,a){let e=0;const{shapeFlag:r}=c;if(a==null)a=null;else if(U(a))e=16;else if(typeof a=="object")if(r&65){const s=a.default;s&&(s._c&&(s._d=!1),c8(c,s()),s._c&&(s._d=!0));return}else{e=32;const s=a._;!s&&!M7(a)?a._ctx=k1:s===3&&k1&&(k1.slots._===1?a._=1:(a._=2,c.patchFlag|=1024))}else G(a)?(a={default:a,_ctx:k1},e=32):(a=String(a),r&64?(e=16,a=[e3(a)]):e=8);c.children=a,c.shapeFlag|=e}function uo(...c){const a={};for(let e=0;e<c.length;e++){const r=c[e];for(const s in r)if(s==="class")a.class!==r.class&&(a.class=O6([a.class,r.class]));else if(s==="style")a.style=q6([a.style,r.style]);else if(u4(s)){const i=a[s],n=r[s];n&&i!==n&&!(U(i)&&i.includes(n))&&(a[s]=i?[].concat(i,n):n)}else s!==""&&(a[s]=r[s])}return a}function _1(c,a,e,r=null){R1(c,a,7,[e,r])}const po=u7();let Vo=0;function Mo(c,a,e){const r=c.type,s=(a?a.appContext:c.appContext)||po,i={uid:Vo++,vnode:c,type:r,parent:a,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Il(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:d7(r,s),emitsOptions:l7(r,s),emit:null,emitted:null,propsDefaults:r1,inheritAttrs:r.inheritAttrs,ctx:r1,data:r1,props:r1,attrs:r1,slots:r1,refs:r1,setupState:r1,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=a?a.root:i,i.emit=gf.bind(null,i),c.ce&&c.ce(i),i}let V1=null,m4,C6;{const c=F5(),a=(e,r)=>{let s;return(s=c[e])||(s=c[e]=[]),s.push(r),i=>{s.length>1?s.forEach(n=>n(i)):s[0](i)}};m4=a("__VUE_INSTANCE_SETTERS__",e=>V1=e),C6=a("__VUE_SSR_SETTERS__",e=>N4=e)}const w3=c=>{const a=V1;return m4(c),c.scope.on(),()=>{c.scope.off(),m4(a)}},R0=()=>{V1&&V1.scope.off(),m4(null)};function w7(c){return c.vnode.shapeFlag&4}let N4=!1;function Co(c,a=!1){a&&C6(a);const{props:e,children:r}=c.vnode,s=w7(c);eo(c,e,s,a),io(c,r);const i=s?Lo(c,a):void 0;return a&&C6(!1),i}function Lo(c,a){const e=c.type;c.accessCache=Object.create(null),c.proxy=new Proxy(c.ctx,$f);const{setup:r}=e;if(r){const s=c.setupContext=r.length>1?bo(c):null,i=w3(c);p2();const n=v2(r,c,0,[c.props,s]);if(V2(),i(),R5(n)){if(n.then(R0,R0),a)return n.then(f=>{B0(c,f,a)}).catch(f=>{L4(f,c,0)});c.asyncDep=n}else B0(c,n,a)}else y7(c,a)}function B0(c,a,e){G(a)?c.type.__ssrInlineRender?c.ssrRender=a:c.render=a:l1(a)&&(c.setupState=a7(a)),y7(c,e)}let F0;function y7(c,a,e){const r=c.type;if(!c.render){if(!a&&F0&&!r.render){const s=r.template||X6(c).template;if(s){const{isCustomElement:i,compilerOptions:n}=c.appContext.config,{delimiters:f,compilerOptions:l}=r,t=m1(m1({isCustomElement:i,delimiters:f},n),l);r.render=F0(s,t)}}c.render=r.render||A1}{const s=w3(c);p2();try{Kf(c)}finally{V2(),s()}}}const go={get(c,a){return g1(c,"get",""),c[a]}};function bo(c){const a=e=>{c.exposed=e||{}};return{attrs:new Proxy(c.attrs,go),slots:c.slots,emit:c.emit,expose:a}}function a8(c){if(c.exposed)return c.exposeProxy||(c.exposeProxy=new Proxy(a7(vf(c.exposed)),{get(a,e){if(e in a)return a[e];if(e in f3)return f3[e](c)},has(a,e){return e in a||e in f3}}))}function xo(c,a=!0){return G(c)?c.displayName||c.name:c.name||a&&c.__name}function No(c){return G(c)&&"__vccOpts"in c}const v1=(c,a)=>zf(c,a,N4);function e8(c,a,e){const r=arguments.length;return r===2?l1(a)&&!U(a)?M6(a)?n1(c,null,[a]):n1(c,a):n1(c,null,a):(r>3?e=Array.prototype.slice.call(arguments,2):r===3&&M6(e)&&(e=[e]),n1(c,a,e))}const So="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Ao="http://www.w3.org/2000/svg",wo="http://www.w3.org/1998/Math/MathML",o2=typeof document<"u"?document:null,E0=o2&&o2.createElement("template"),yo={insert:(c,a,e)=>{a.insertBefore(c,e||null)},remove:c=>{const a=c.parentNode;a&&a.removeChild(c)},createElement:(c,a,e,r)=>{const s=a==="svg"?o2.createElementNS(Ao,c):a==="mathml"?o2.createElementNS(wo,c):o2.createElement(c,e?{is:e}:void 0);return c==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:c=>o2.createTextNode(c),createComment:c=>o2.createComment(c),setText:(c,a)=>{c.nodeValue=a},setElementText:(c,a)=>{c.textContent=a},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>o2.querySelector(c),setScopeId(c,a){c.setAttribute(a,"")},insertStaticContent(c,a,e,r,s,i){const n=e?e.previousSibling:a.lastChild;if(s&&(s===i||s.nextSibling))for(;a.insertBefore(s.cloneNode(!0),e),!(s===i||!(s=s.nextSibling)););else{E0.innerHTML=r==="svg"?`<svg>${c}</svg>`:r==="mathml"?`<math>${c}</math>`:c;const f=E0.content;if(r==="svg"||r==="mathml"){const l=f.firstChild;for(;l.firstChild;)f.appendChild(l.firstChild);f.removeChild(l)}a.insertBefore(f,e)}return[n?n.nextSibling:a.firstChild,e?e.previousSibling:a.lastChild]}},ko=Symbol("_vtc");function Po(c,a,e){const r=c[ko];r&&(a=(a?[a,...r]:[...r]).join(" ")),a==null?c.removeAttribute("class"):e?c.setAttribute("class",a):c.className=a}const D0=Symbol("_vod"),To=Symbol("_vsh"),Ro=Symbol(""),Bo=/(^|;)\s*display\s*:/;function Fo(c,a,e){const r=c.style,s=z1(e);let i=!1;if(e&&!s){if(a)if(z1(a))for(const n of a.split(";")){const f=n.slice(0,n.indexOf(":")).trim();e[f]==null&&i4(r,f,"")}else for(const n in a)e[n]==null&&i4(r,n,"");for(const n in e)n==="display"&&(i=!0),i4(r,n,e[n])}else if(s){if(a!==e){const n=r[Ro];n&&(e+=";"+n),r.cssText=e,i=Bo.test(e)}}else a&&c.removeAttribute("style");D0 in c&&(c[D0]=i?r.display:"",c[To]&&(r.display="none"))}const _0=/\s*!important$/;function i4(c,a,e){if(U(e))e.forEach(r=>i4(c,a,r));else if(e==null&&(e=""),a.startsWith("--"))c.setProperty(a,e);else{const r=Eo(c,a);_0.test(e)?c.setProperty(W2(r),e.replace(_0,""),"important"):c[r]=e}}const q0=["Webkit","Moz","ms"],J4={};function Eo(c,a){const e=J4[a];if(e)return e;let r=W1(a);if(r!=="filter"&&r in c)return J4[a]=r;r=M4(r);for(let s=0;s<q0.length;s++){const i=q0[s]+r;if(i in c)return J4[a]=i}return a}const O0="http://www.w3.org/1999/xlink";function Do(c,a,e,r,s){if(r&&a.startsWith("xlink:"))e==null?c.removeAttributeNS(O0,a.slice(6,a.length)):c.setAttributeNS(O0,a,e);else{const i=Ul(a);e==null||i&&!E5(e)?c.removeAttribute(a):c.setAttribute(a,i?"":e)}}function _o(c,a,e,r,s,i,n){if(a==="innerHTML"||a==="textContent"){r&&n(r,s,i),c[a]=e??"";return}const f=c.tagName;if(a==="value"&&f!=="PROGRESS"&&!f.includes("-")){const t=f==="OPTION"?c.getAttribute("value")||"":c.value,o=e??"";(t!==o||!("_value"in c))&&(c.value=o),e==null&&c.removeAttribute(a),c._value=e;return}let l=!1;if(e===""||e==null){const t=typeof c[a];t==="boolean"?e=E5(e):e==null&&t==="string"?(e="",l=!0):t==="number"&&(e=0,l=!0)}try{c[a]=e}catch{}l&&c.removeAttribute(a)}function qo(c,a,e,r){c.addEventListener(a,e,r)}function Oo(c,a,e,r){c.removeEventListener(a,e,r)}const U0=Symbol("_vei");function Uo(c,a,e,r,s=null){const i=c[U0]||(c[U0]={}),n=i[a];if(r&&n)n.value=r;else{const[f,l]=Io(a);if(r){const t=i[a]=jo(r,s);qo(c,f,t,l)}else n&&(Oo(c,f,n,l),i[a]=void 0)}}const I0=/(?:Once|Passive|Capture)$/;function Io(c){let a;if(I0.test(c)){a={};let r;for(;r=c.match(I0);)c=c.slice(0,c.length-r[0].length),a[r[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):W2(c.slice(2)),a]}let c6=0;const Go=Promise.resolve(),Wo=()=>c6||(Go.then(()=>c6=0),c6=Date.now());function jo(c,a){const e=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=e.attached)return;R1(Zo(r,e.value),a,5,[r])};return e.value=c,e.attached=Wo(),e}function Zo(c,a){if(U(a)){const e=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{e.call(c),c._stopped=!0},a.map(r=>s=>!s._stopped&&r&&r(s))}else return a}const G0=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&c.charCodeAt(2)>96&&c.charCodeAt(2)<123,$o=(c,a,e,r,s,i,n,f,l)=>{const t=s==="svg";a==="class"?Po(c,r,t):a==="style"?Fo(c,e,r):u4(a)?E6(a)||Uo(c,a,e,r,n):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):Ko(c,a,r,t))?_o(c,a,r,i,n,f,l):(a==="true-value"?c._trueValue=r:a==="false-value"&&(c._falseValue=r),Do(c,a,r,t))};function Ko(c,a,e,r){if(r)return!!(a==="innerHTML"||a==="textContent"||a in c&&G0(a)&&G(e));if(a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&c.tagName==="INPUT"||a==="type"&&c.tagName==="TEXTAREA")return!1;if(a==="width"||a==="height"){const s=c.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return G0(a)&&z1(e)?!1:a in c}const Yo=m1({patchProp:$o},yo);let W0;function Qo(){return W0||(W0=lo(Yo))}const Xo=(...c)=>{const a=Qo().createApp(...c),{mount:e}=a;return a.mount=r=>{const s=ct(r);if(!s)return;const i=a._component;!G(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const n=e(s,!1,Jo(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),n},a};function Jo(c){if(c instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&c instanceof MathMLElement)return"mathml"}function ct(c){return z1(c)?document.querySelector(c):c}/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const R2=typeof document<"u";function at(c){return c.__esModule||c[Symbol.toStringTag]==="Module"}const Y=Object.assign;function a6(c,a){const e={};for(const r in a){const s=a[r];e[r]=B1(s)?s.map(c):c(s)}return e}const m3=()=>{},B1=Array.isArray,k7=/#/g,et=/&/g,rt=/\//g,st=/=/g,it=/\?/g,P7=/\+/g,nt=/%5B/g,lt=/%5D/g,T7=/%5E/g,ft=/%60/g,R7=/%7B/g,ot=/%7C/g,B7=/%7D/g,tt=/%20/g;function r8(c){return encodeURI(""+c).replace(ot,"|").replace(nt,"[").replace(lt,"]")}function mt(c){return r8(c).replace(R7,"{").replace(B7,"}").replace(T7,"^")}function d6(c){return r8(c).replace(P7,"%2B").replace(tt,"+").replace(k7,"%23").replace(et,"%26").replace(ft,"`").replace(R7,"{").replace(B7,"}").replace(T7,"^")}function vt(c){return d6(c).replace(st,"%3D")}function zt(c){return r8(c).replace(k7,"%23").replace(it,"%3F")}function ht(c){return c==null?"":zt(c).replace(rt,"%2F")}function d3(c){try{return decodeURIComponent(""+c)}catch{}return""+c}const Ht=/\/$/,ut=c=>c.replace(Ht,"");function e6(c,a,e="/"){let r,s={},i="",n="";const f=a.indexOf("#");let l=a.indexOf("?");return f<l&&f>=0&&(l=-1),l>-1&&(r=a.slice(0,l),i=a.slice(l+1,f>-1?f:a.length),s=c(i)),f>-1&&(r=r||a.slice(0,f),n=a.slice(f,a.length)),r=Ct(r??a,e),{fullPath:r+(i&&"?")+i+n,path:r,query:s,hash:d3(n)}}function pt(c,a){const e=a.query?c(a.query):"";return a.path+(e&&"?")+e+(a.hash||"")}function j0(c,a){return!a||!c.toLowerCase().startsWith(a.toLowerCase())?c:c.slice(a.length)||"/"}function Vt(c,a,e){const r=a.matched.length-1,s=e.matched.length-1;return r>-1&&r===s&&U2(a.matched[r],e.matched[s])&&F7(a.params,e.params)&&c(a.query)===c(e.query)&&a.hash===e.hash}function U2(c,a){return(c.aliasOf||c)===(a.aliasOf||a)}function F7(c,a){if(Object.keys(c).length!==Object.keys(a).length)return!1;for(const e in c)if(!Mt(c[e],a[e]))return!1;return!0}function Mt(c,a){return B1(c)?Z0(c,a):B1(a)?Z0(a,c):c===a}function Z0(c,a){return B1(a)?c.length===a.length&&c.every((e,r)=>e===a[r]):c.length===1&&c[0]===a}function Ct(c,a){if(c.startsWith("/"))return c;if(!c)return a;const e=a.split("/"),r=c.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=e.length-1,n,f;for(n=0;n<r.length;n++)if(f=r[n],f!==".")if(f==="..")i>1&&i--;else break;return e.slice(0,i).join("/")+"/"+r.slice(n).join("/")}var L3;(function(c){c.pop="pop",c.push="push"})(L3||(L3={}));var v3;(function(c){c.back="back",c.forward="forward",c.unknown=""})(v3||(v3={}));function dt(c){if(!c)if(R2){const a=document.querySelector("base");c=a&&a.getAttribute("href")||"/",c=c.replace(/^\w+:\/\/[^\/]+/,"")}else c="/";return c[0]!=="/"&&c[0]!=="#"&&(c="/"+c),ut(c)}const Lt=/^[^#]+#/;function gt(c,a){return c.replace(Lt,"#")+a}function bt(c,a){const e=document.documentElement.getBoundingClientRect(),r=c.getBoundingClientRect();return{behavior:a.behavior,left:r.left-e.left-(a.left||0),top:r.top-e.top-(a.top||0)}}const S4=()=>({left:window.scrollX,top:window.scrollY});function xt(c){let a;if("el"in c){const e=c.el,r=typeof e=="string"&&e.startsWith("#"),s=typeof e=="string"?r?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!s)return;a=bt(s,c)}else a=c;"scrollBehavior"in document.documentElement.style?window.scrollTo(a):window.scrollTo(a.left!=null?a.left:window.scrollX,a.top!=null?a.top:window.scrollY)}function $0(c,a){return(history.state?history.state.position-a:-1)+c}const L6=new Map;function Nt(c,a){L6.set(c,a)}function St(c){const a=L6.get(c);return L6.delete(c),a}let At=()=>location.protocol+"//"+location.host;function E7(c,a){const{pathname:e,search:r,hash:s}=a,i=c.indexOf("#");if(i>-1){let f=s.includes(c.slice(i))?c.slice(i).length:1,l=s.slice(f);return l[0]!=="/"&&(l="/"+l),j0(l,"")}return j0(e,c)+r+s}function wt(c,a,e,r){let s=[],i=[],n=null;const f=({state:h})=>{const u=E7(c,location),N=e.value,y=a.value;let E=0;if(h){if(e.value=u,a.value=h,n&&n===N){n=null;return}E=y?h.position-y.position:0}else r(u);s.forEach(M=>{M(e.value,N,{delta:E,type:L3.pop,direction:E?E>0?v3.forward:v3.back:v3.unknown})})};function l(){n=e.value}function t(h){s.push(h);const u=()=>{const N=s.indexOf(h);N>-1&&s.splice(N,1)};return i.push(u),u}function o(){const{history:h}=window;h.state&&h.replaceState(Y({},h.state,{scroll:S4()}),"")}function z(){for(const h of i)h();i=[],window.removeEventListener("popstate",f),window.removeEventListener("beforeunload",o)}return window.addEventListener("popstate",f),window.addEventListener("beforeunload",o,{passive:!0}),{pauseListeners:l,listen:t,destroy:z}}function K0(c,a,e,r=!1,s=!1){return{back:c,current:a,forward:e,replaced:r,position:window.history.length,scroll:s?S4():null}}function yt(c){const{history:a,location:e}=window,r={value:E7(c,e)},s={value:a.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:a.length-1,replaced:!0,scroll:null},!0);function i(l,t,o){const z=c.indexOf("#"),h=z>-1?(e.host&&document.querySelector("base")?c:c.slice(z))+l:At()+c+l;try{a[o?"replaceState":"pushState"](t,"",h),s.value=t}catch(u){console.error(u),e[o?"replace":"assign"](h)}}function n(l,t){const o=Y({},a.state,K0(s.value.back,l,s.value.forward,!0),t,{position:s.value.position});i(l,o,!0),r.value=l}function f(l,t){const o=Y({},s.value,a.state,{forward:l,scroll:S4()});i(o.current,o,!0);const z=Y({},K0(r.value,l,null),{position:o.position+1},t);i(l,z,!1),r.value=l}return{location:r,state:s,push:f,replace:n}}function kt(c){c=dt(c);const a=yt(c),e=wt(c,a.state,a.location,a.replace);function r(i,n=!0){n||e.pauseListeners(),history.go(i)}const s=Y({location:"",base:c,go:r,createHref:gt.bind(null,c)},a,e);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>a.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>a.state.value}),s}function Pt(c){return typeof c=="string"||c&&typeof c=="object"}function D7(c){return typeof c=="string"||typeof c=="symbol"}const i2={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},_7=Symbol("");var Y0;(function(c){c[c.aborted=4]="aborted",c[c.cancelled=8]="cancelled",c[c.duplicated=16]="duplicated"})(Y0||(Y0={}));function I2(c,a){return Y(new Error,{type:c,[_7]:!0},a)}function Z1(c,a){return c instanceof Error&&_7 in c&&(a==null||!!(c.type&a))}const Q0="[^/]+?",Tt={sensitive:!1,strict:!1,start:!0,end:!0},Rt=/[.+*?^${}()[\]/\\]/g;function Bt(c,a){const e=Y({},Tt,a),r=[];let s=e.start?"^":"";const i=[];for(const t of c){const o=t.length?[]:[90];e.strict&&!t.length&&(s+="/");for(let z=0;z<t.length;z++){const h=t[z];let u=40+(e.sensitive?.25:0);if(h.type===0)z||(s+="/"),s+=h.value.replace(Rt,"\\$&"),u+=40;else if(h.type===1){const{value:N,repeatable:y,optional:E,regexp:M}=h;i.push({name:N,repeatable:y,optional:E});const d=M||Q0;if(d!==Q0){u+=10;try{new RegExp(`(${d})`)}catch(_){throw new Error(`Invalid custom RegExp for param "${N}" (${d}): `+_.message)}}let w=y?`((?:${d})(?:/(?:${d}))*)`:`(${d})`;z||(w=E&&t.length<2?`(?:/${w})`:"/"+w),E&&(w+="?"),s+=w,u+=20,E&&(u+=-8),y&&(u+=-20),d===".*"&&(u+=-50)}o.push(u)}r.push(o)}if(e.strict&&e.end){const t=r.length-1;r[t][r[t].length-1]+=.7000000000000001}e.strict||(s+="/?"),e.end?s+="$":e.strict&&(s+="(?:/|$)");const n=new RegExp(s,e.sensitive?"":"i");function f(t){const o=t.match(n),z={};if(!o)return null;for(let h=1;h<o.length;h++){const u=o[h]||"",N=i[h-1];z[N.name]=u&&N.repeatable?u.split("/"):u}return z}function l(t){let o="",z=!1;for(const h of c){(!z||!o.endsWith("/"))&&(o+="/"),z=!1;for(const u of h)if(u.type===0)o+=u.value;else if(u.type===1){const{value:N,repeatable:y,optional:E}=u,M=N in t?t[N]:"";if(B1(M)&&!y)throw new Error(`Provided param "${N}" is an array but it is not repeatable (* or + modifiers)`);const d=B1(M)?M.join("/"):M;if(!d)if(E)h.length<2&&(o.endsWith("/")?o=o.slice(0,-1):z=!0);else throw new Error(`Missing required param "${N}"`);o+=d}}return o||"/"}return{re:n,score:r,keys:i,parse:f,stringify:l}}function Ft(c,a){let e=0;for(;e<c.length&&e<a.length;){const r=a[e]-c[e];if(r)return r;e++}return c.length<a.length?c.length===1&&c[0]===80?-1:1:c.length>a.length?a.length===1&&a[0]===80?1:-1:0}function Et(c,a){let e=0;const r=c.score,s=a.score;for(;e<r.length&&e<s.length;){const i=Ft(r[e],s[e]);if(i)return i;e++}if(Math.abs(s.length-r.length)===1){if(X0(r))return 1;if(X0(s))return-1}return s.length-r.length}function X0(c){const a=c[c.length-1];return c.length>0&&a[a.length-1]<0}const Dt={type:0,value:""},_t=/[a-zA-Z0-9_]/;function qt(c){if(!c)return[[]];if(c==="/")return[[Dt]];if(!c.startsWith("/"))throw new Error(`Invalid path "${c}"`);function a(u){throw new Error(`ERR (${e})/"${t}": ${u}`)}let e=0,r=e;const s=[];let i;function n(){i&&s.push(i),i=[]}let f=0,l,t="",o="";function z(){t&&(e===0?i.push({type:0,value:t}):e===1||e===2||e===3?(i.length>1&&(l==="*"||l==="+")&&a(`A repeatable param (${t}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:t,regexp:o,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):a("Invalid state to consume buffer"),t="")}function h(){t+=l}for(;f<c.length;){if(l=c[f++],l==="\\"&&e!==2){r=e,e=4;continue}switch(e){case 0:l==="/"?(t&&z(),n()):l===":"?(z(),e=1):h();break;case 4:h(),e=r;break;case 1:l==="("?e=2:_t.test(l)?h():(z(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&f--);break;case 2:l===")"?o[o.length-1]=="\\"?o=o.slice(0,-1)+l:e=3:o+=l;break;case 3:z(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&f--,o="";break;default:a("Unknown state");break}}return e===2&&a(`Unfinished custom RegExp for param "${t}"`),z(),n(),s}function Ot(c,a,e){const r=Bt(qt(c.path),e),s=Y(r,{record:c,parent:a,children:[],alias:[]});return a&&!s.record.aliasOf==!a.record.aliasOf&&a.children.push(s),s}function Ut(c,a){const e=[],r=new Map;a=a5({strict:!1,end:!0,sensitive:!1},a);function s(o){return r.get(o)}function i(o,z,h){const u=!h,N=It(o);N.aliasOf=h&&h.record;const y=a5(a,o),E=[N];if("alias"in o){const w=typeof o.alias=="string"?[o.alias]:o.alias;for(const _ of w)E.push(Y({},N,{components:h?h.record.components:N.components,path:_,aliasOf:h?h.record:N}))}let M,d;for(const w of E){const{path:_}=w;if(z&&_[0]!=="/"){const I=z.record.path,D=I[I.length-1]==="/"?"":"/";w.path=z.record.path+(_&&D+_)}if(M=Ot(w,z,y),h?h.alias.push(M):(d=d||M,d!==M&&d.alias.push(M),u&&o.name&&!c5(M)&&n(o.name)),N.children){const I=N.children;for(let D=0;D<I.length;D++)i(I[D],M,h&&h.children[D])}h=h||M,(M.record.components&&Object.keys(M.record.components).length||M.record.name||M.record.redirect)&&l(M)}return d?()=>{n(d)}:m3}function n(o){if(D7(o)){const z=r.get(o);z&&(r.delete(o),e.splice(e.indexOf(z),1),z.children.forEach(n),z.alias.forEach(n))}else{const z=e.indexOf(o);z>-1&&(e.splice(z,1),o.record.name&&r.delete(o.record.name),o.children.forEach(n),o.alias.forEach(n))}}function f(){return e}function l(o){let z=0;for(;z<e.length&&Et(o,e[z])>=0&&(o.record.path!==e[z].record.path||!q7(o,e[z]));)z++;e.splice(z,0,o),o.record.name&&!c5(o)&&r.set(o.record.name,o)}function t(o,z){let h,u={},N,y;if("name"in o&&o.name){if(h=r.get(o.name),!h)throw I2(1,{location:o});y=h.record.name,u=Y(J0(z.params,h.keys.filter(d=>!d.optional).concat(h.parent?h.parent.keys.filter(d=>d.optional):[]).map(d=>d.name)),o.params&&J0(o.params,h.keys.map(d=>d.name))),N=h.stringify(u)}else if(o.path!=null)N=o.path,h=e.find(d=>d.re.test(N)),h&&(u=h.parse(N),y=h.record.name);else{if(h=z.name?r.get(z.name):e.find(d=>d.re.test(z.path)),!h)throw I2(1,{location:o,currentLocation:z});y=h.record.name,u=Y({},z.params,o.params),N=h.stringify(u)}const E=[];let M=h;for(;M;)E.unshift(M.record),M=M.parent;return{name:y,path:N,params:u,matched:E,meta:Wt(E)}}return c.forEach(o=>i(o)),{addRoute:i,resolve:t,removeRoute:n,getRoutes:f,getRecordMatcher:s}}function J0(c,a){const e={};for(const r of a)r in c&&(e[r]=c[r]);return e}function It(c){return{path:c.path,redirect:c.redirect,name:c.name,meta:c.meta||{},aliasOf:void 0,beforeEnter:c.beforeEnter,props:Gt(c),children:c.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in c?c.components||null:c.component&&{default:c.component}}}function Gt(c){const a={},e=c.props||!1;if("component"in c)a.default=e;else for(const r in c.components)a[r]=typeof e=="object"?e[r]:e;return a}function c5(c){for(;c;){if(c.record.aliasOf)return!0;c=c.parent}return!1}function Wt(c){return c.reduce((a,e)=>Y(a,e.meta),{})}function a5(c,a){const e={};for(const r in c)e[r]=r in a?a[r]:c[r];return e}function q7(c,a){return a.children.some(e=>e===c||q7(c,e))}function jt(c){const a={};if(c===""||c==="?")return a;const r=(c[0]==="?"?c.slice(1):c).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(P7," "),n=i.indexOf("="),f=d3(n<0?i:i.slice(0,n)),l=n<0?null:d3(i.slice(n+1));if(f in a){let t=a[f];B1(t)||(t=a[f]=[t]),t.push(l)}else a[f]=l}return a}function e5(c){let a="";for(let e in c){const r=c[e];if(e=vt(e),r==null){r!==void 0&&(a+=(a.length?"&":"")+e);continue}(B1(r)?r.map(i=>i&&d6(i)):[r&&d6(r)]).forEach(i=>{i!==void 0&&(a+=(a.length?"&":"")+e,i!=null&&(a+="="+i))})}return a}function Zt(c){const a={};for(const e in c){const r=c[e];r!==void 0&&(a[e]=B1(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return a}const $t=Symbol(""),r5=Symbol(""),s8=Symbol(""),O7=Symbol(""),g6=Symbol("");function J2(){let c=[];function a(r){return c.push(r),()=>{const s=c.indexOf(r);s>-1&&c.splice(s,1)}}function e(){c=[]}return{add:a,list:()=>c.slice(),reset:e}}function t2(c,a,e,r,s,i=n=>n()){const n=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((f,l)=>{const t=h=>{h===!1?l(I2(4,{from:e,to:a})):h instanceof Error?l(h):Pt(h)?l(I2(2,{from:a,to:h})):(n&&r.enterCallbacks[s]===n&&typeof h=="function"&&n.push(h),f())},o=i(()=>c.call(r&&r.instances[s],a,e,t));let z=Promise.resolve(o);c.length<3&&(z=z.then(t)),z.catch(h=>l(h))})}function r6(c,a,e,r,s=i=>i()){const i=[];for(const n of c)for(const f in n.components){let l=n.components[f];if(!(a!=="beforeRouteEnter"&&!n.instances[f]))if(Kt(l)){const o=(l.__vccOpts||l)[a];o&&i.push(t2(o,e,r,n,f,s))}else{let t=l();i.push(()=>t.then(o=>{if(!o)return Promise.reject(new Error(`Couldn't resolve component "${f}" at "${n.path}"`));const z=at(o)?o.default:o;n.components[f]=z;const u=(z.__vccOpts||z)[a];return u&&t2(u,e,r,n,f,s)()}))}}return i}function Kt(c){return typeof c=="object"||"displayName"in c||"props"in c||"__vccOpts"in c}function s5(c){const a=Y1(s8),e=Y1(O7),r=v1(()=>{const l=S2(c.to);return a.resolve(l)}),s=v1(()=>{const{matched:l}=r.value,{length:t}=l,o=l[t-1],z=e.matched;if(!o||!z.length)return-1;const h=z.findIndex(U2.bind(null,o));if(h>-1)return h;const u=i5(l[t-2]);return t>1&&i5(o)===u&&z[z.length-1].path!==u?z.findIndex(U2.bind(null,l[t-2])):h}),i=v1(()=>s.value>-1&&Jt(e.params,r.value.params)),n=v1(()=>s.value>-1&&s.value===e.matched.length-1&&F7(e.params,r.value.params));function f(l={}){return Xt(l)?a[S2(c.replace)?"replace":"push"](S2(c.to)).catch(m3):Promise.resolve()}return{route:r,href:v1(()=>r.value.href),isActive:i,isExactActive:n,navigate:f}}const Yt=Q6({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:s5,setup(c,{slots:a}){const e=d4(s5(c)),{options:r}=Y1(s8),s=v1(()=>({[n5(c.activeClass,r.linkActiveClass,"router-link-active")]:e.isActive,[n5(c.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const i=a.default&&a.default(e);return c.custom?i:e8("a",{"aria-current":e.isExactActive?c.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:s.value},i)}}}),Qt=Yt;function Xt(c){if(!(c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)&&!c.defaultPrevented&&!(c.button!==void 0&&c.button!==0)){if(c.currentTarget&&c.currentTarget.getAttribute){const a=c.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(a))return}return c.preventDefault&&c.preventDefault(),!0}}function Jt(c,a){for(const e in a){const r=a[e],s=c[e];if(typeof r=="string"){if(r!==s)return!1}else if(!B1(s)||s.length!==r.length||r.some((i,n)=>i!==s[n]))return!1}return!0}function i5(c){return c?c.aliasOf?c.aliasOf.path:c.path:""}const n5=(c,a,e)=>c??a??e,cm=Q6({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(c,{attrs:a,slots:e}){const r=Y1(g6),s=v1(()=>c.route||r.value),i=Y1(r5,0),n=v1(()=>{let t=S2(i);const{matched:o}=s.value;let z;for(;(z=o[t])&&!z.components;)t++;return t}),f=v1(()=>s.value.matched[n.value]);e4(r5,v1(()=>n.value+1)),e4($t,f),e4(g6,s);const l=hf();return l3(()=>[l.value,f.value,c.name],([t,o,z],[h,u,N])=>{o&&(o.instances[z]=t,u&&u!==o&&t&&t===h&&(o.leaveGuards.size||(o.leaveGuards=u.leaveGuards),o.updateGuards.size||(o.updateGuards=u.updateGuards))),t&&o&&(!u||!U2(o,u)||!h)&&(o.enterCallbacks[z]||[]).forEach(y=>y(t))},{flush:"post"}),()=>{const t=s.value,o=c.name,z=f.value,h=z&&z.components[o];if(!h)return l5(e.default,{Component:h,route:t});const u=z.props[o],N=u?u===!0?t.params:typeof u=="function"?u(t):u:null,E=e8(h,Y({},N,a,{onVnodeUnmounted:M=>{M.component.isUnmounted&&(z.instances[o]=null)},ref:l}));return l5(e.default,{Component:E,route:t})||E}}});function l5(c,a){if(!c)return null;const e=c(a);return e.length===1?e[0]:e}const U7=cm;function am(c){const a=Ut(c.routes,c),e=c.parseQuery||jt,r=c.stringifyQuery||e5,s=c.history,i=J2(),n=J2(),f=J2(),l=Hf(i2);let t=i2;R2&&c.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const o=a6.bind(null,V=>""+V),z=a6.bind(null,ht),h=a6.bind(null,d3);function u(V,P){let S,B;return D7(V)?(S=a.getRecordMatcher(V),B=P):B=V,a.addRoute(B,S)}function N(V){const P=a.getRecordMatcher(V);P&&a.removeRoute(P)}function y(){return a.getRoutes().map(V=>V.record)}function E(V){return!!a.getRecordMatcher(V)}function M(V,P){if(P=Y({},P||l.value),typeof V=="string"){const v=e6(e,V,P.path),H=a.resolve({path:v.path},P),C=s.createHref(v.fullPath);return Y(v,H,{params:h(H.params),hash:d3(v.hash),redirectedFrom:void 0,href:C})}let S;if(V.path!=null)S=Y({},V,{path:e6(e,V.path,P.path).path});else{const v=Y({},V.params);for(const H in v)v[H]==null&&delete v[H];S=Y({},V,{params:z(v)}),P.params=z(P.params)}const B=a.resolve(S,P),K=V.hash||"";B.params=o(h(B.params));const s1=pt(r,Y({},V,{hash:mt(K),path:B.path})),m=s.createHref(s1);return Y({fullPath:s1,hash:K,query:r===e5?Zt(V.query):V.query||{}},B,{redirectedFrom:void 0,href:m})}function d(V){return typeof V=="string"?e6(e,V,l.value.path):Y({},V)}function w(V,P){if(t!==V)return I2(8,{from:P,to:V})}function _(V){return J(V)}function I(V){return _(Y(d(V),{replace:!0}))}function D(V){const P=V.matched[V.matched.length-1];if(P&&P.redirect){const{redirect:S}=P;let B=typeof S=="function"?S(V):S;return typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=d(B):{path:B},B.params={}),Y({query:V.query,hash:V.hash,params:B.path!=null?{}:V.params},B)}}function J(V,P){const S=t=M(V),B=l.value,K=V.state,s1=V.force,m=V.replace===!0,v=D(S);if(v)return J(Y(d(v),{state:typeof v=="object"?Y({},K,v.state):K,force:s1,replace:m}),P||S);const H=S;H.redirectedFrom=P;let C;return!s1&&Vt(r,B,S)&&(C=I2(16,{to:H,from:B}),E1(B,B,!0,!1)),(C?Promise.resolve(C):S1(H,B)).catch(p=>Z1(p)?Z1(p,2)?p:r2(p):Z(p,H,B)).then(p=>{if(p){if(Z1(p,2))return J(Y({replace:m},d(p.to),{state:typeof p.to=="object"?Y({},K,p.to.state):K,force:s1}),P||H)}else p=M2(H,B,!0,m,K);return e2(H,B,p),p})}function h1(V,P){const S=w(V,P);return S?Promise.reject(S):Promise.resolve()}function H1(V){const P=P2.values().next().value;return P&&typeof P.runWithContext=="function"?P.runWithContext(V):V()}function S1(V,P){let S;const[B,K,s1]=em(V,P);S=r6(B.reverse(),"beforeRouteLeave",V,P);for(const v of B)v.leaveGuards.forEach(H=>{S.push(t2(H,V,P))});const m=h1.bind(null,V,P);return S.push(m),u1(S).then(()=>{S=[];for(const v of i.list())S.push(t2(v,V,P));return S.push(m),u1(S)}).then(()=>{S=r6(K,"beforeRouteUpdate",V,P);for(const v of K)v.updateGuards.forEach(H=>{S.push(t2(H,V,P))});return S.push(m),u1(S)}).then(()=>{S=[];for(const v of s1)if(v.beforeEnter)if(B1(v.beforeEnter))for(const H of v.beforeEnter)S.push(t2(H,V,P));else S.push(t2(v.beforeEnter,V,P));return S.push(m),u1(S)}).then(()=>(V.matched.forEach(v=>v.enterCallbacks={}),S=r6(s1,"beforeRouteEnter",V,P,H1),S.push(m),u1(S))).then(()=>{S=[];for(const v of n.list())S.push(t2(v,V,P));return S.push(m),u1(S)}).catch(v=>Z1(v,8)?v:Promise.reject(v))}function e2(V,P,S){f.list().forEach(B=>H1(()=>B(V,P,S)))}function M2(V,P,S,B,K){const s1=w(V,P);if(s1)return s1;const m=P===i2,v=R2?history.state:{};S&&(B||m?s.replace(V.fullPath,Y({scroll:m&&v&&v.scroll},K)):s.push(V.fullPath,K)),l.value=V,E1(V,P,S,m),r2()}let F1;function Y2(){F1||(F1=s.listen((V,P,S)=>{if(!D3.listening)return;const B=M(V),K=D(B);if(K){J(Y(K,{replace:!0}),B).catch(m3);return}t=B;const s1=l.value;R2&&Nt($0(s1.fullPath,S.delta),S4()),S1(B,s1).catch(m=>Z1(m,12)?m:Z1(m,2)?(J(m.to,B).then(v=>{Z1(v,20)&&!S.delta&&S.type===L3.pop&&s.go(-1,!1)}).catch(m3),Promise.reject()):(S.delta&&s.go(-S.delta,!1),Z(m,B,s1))).then(m=>{m=m||M2(B,s1,!1),m&&(S.delta&&!Z1(m,8)?s.go(-S.delta,!1):S.type===L3.pop&&Z1(m,20)&&s.go(-1,!1)),e2(B,s1,m)}).catch(m3)}))}let y2=J2(),o1=J2(),Q;function Z(V,P,S){r2(V);const B=o1.list();return B.length?B.forEach(K=>K(V,P,S)):console.error(V),Promise.reject(V)}function j1(){return Q&&l.value!==i2?Promise.resolve():new Promise((V,P)=>{y2.add([V,P])})}function r2(V){return Q||(Q=!V,Y2(),y2.list().forEach(([P,S])=>V?S(V):P()),y2.reset()),V}function E1(V,P,S,B){const{scrollBehavior:K}=c;if(!R2||!K)return Promise.resolve();const s1=!S&&St($0(V.fullPath,0))||(B||!S)&&history.state&&history.state.scroll||null;return r7().then(()=>K(V,P,s1)).then(m=>m&&xt(m)).catch(m=>Z(m,V,P))}const C1=V=>s.go(V);let k2;const P2=new Set,D3={currentRoute:l,listening:!0,addRoute:u,removeRoute:N,hasRoute:E,getRoutes:y,resolve:M,options:c,push:_,replace:I,go:C1,back:()=>C1(-1),forward:()=>C1(1),beforeEach:i.add,beforeResolve:n.add,afterEach:f.add,onError:o1.add,isReady:j1,install(V){const P=this;V.component("RouterLink",Qt),V.component("RouterView",U7),V.config.globalProperties.$router=P,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>S2(l)}),R2&&!k2&&l.value===i2&&(k2=!0,_(s.location).catch(K=>{}));const S={};for(const K in i2)Object.defineProperty(S,K,{get:()=>l.value[K],enumerable:!0});V.provide(s8,P),V.provide(O7,K5(S)),V.provide(g6,l);const B=V.unmount;P2.add(V),V.unmount=function(){P2.delete(V),P2.size<1&&(t=i2,F1&&F1(),F1=null,l.value=i2,k2=!1,Q=!1),B()}}};function u1(V){return V.reduce((P,S)=>P.then(()=>H1(S)),Promise.resolve())}return D3}function em(c,a){const e=[],r=[],s=[],i=Math.max(a.matched.length,c.matched.length);for(let n=0;n<i;n++){const f=a.matched[n];f&&(c.matched.find(t=>U2(t,f))?r.push(f):e.push(f));const l=c.matched[n];l&&(a.matched.find(t=>U2(t,l))||s.push(l))}return[e,r,s]}const $2=(c,a)=>{const e=c.__vccOpts||c;for(const[r,s]of a)e[r]=s;return e},rm={name:"NavBar"},sm={class:"navbar"},im={class:"nav-items"};function nm(c,a,e,r,s,i){const n=o7("RouterLink");return j2(),Z2("nav",sm,[O1("div",im,[O1("ul",null,[O1("li",null,[n1(n,{to:"/",class:"nav-link"},{default:c3(()=>[e3("Profile")]),_:1})]),O1("li",null,[n1(n,{to:"/Friends",class:"nav-link"},{default:c3(()=>[e3("Friends")]),_:1})]),O1("li",null,[n1(n,{to:"/Messages",class:"nav-link"},{default:c3(()=>[e3("Messages")]),_:1})]),O1("li",null,[n1(n,{to:"/Notification",class:"nav-link"},{default:c3(()=>[e3("Notifications")]),_:1})])])])])}const I7=$2(rm,[["render",nm]]);function f5(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(c,s).enumerable})),e.push.apply(e,r)}return e}function k(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?f5(Object(e),!0).forEach(function(r){f1(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):f5(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function v4(c){"@babel/helpers - typeof";return v4=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},v4(c)}function lm(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function fm(c,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}function om(c,a,e){return a&&fm(c.prototype,a),Object.defineProperty(c,"prototype",{writable:!1}),c}function f1(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function i8(c,a){return mm(c)||zm(c,a)||G7(c,a)||Hm()}function y3(c){return tm(c)||vm(c)||G7(c)||hm()}function tm(c){if(Array.isArray(c))return b6(c)}function mm(c){if(Array.isArray(c))return c}function vm(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function zm(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var r=[],s=!0,i=!1,n,f;try{for(e=e.call(c);!(s=(n=e.next()).done)&&(r.push(n.value),!(a&&r.length===a));s=!0);}catch(l){i=!0,f=l}finally{try{!s&&e.return!=null&&e.return()}finally{if(i)throw f}}return r}}function G7(c,a){if(c){if(typeof c=="string")return b6(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return b6(c,a)}}function b6(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}function hm(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Hm(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o5=function(){},n8={},W7={},j7=null,Z7={mark:o5,measure:o5};try{typeof window<"u"&&(n8=window),typeof document<"u"&&(W7=document),typeof MutationObserver<"u"&&(j7=MutationObserver),typeof performance<"u"&&(Z7=performance)}catch{}var um=n8.navigator||{},t5=um.userAgent,m5=t5===void 0?"":t5,h2=n8,a1=W7,v5=j7,W3=Z7;h2.document;var a2=!!a1.documentElement&&!!a1.head&&typeof a1.addEventListener=="function"&&typeof a1.createElement=="function",$7=~m5.indexOf("MSIE")||~m5.indexOf("Trident/"),j3,Z3,$3,K3,Y3,Q1="___FONT_AWESOME___",x6=16,K7="fa",Y7="svg-inline--fa",A2="data-fa-i2svg",N6="data-fa-pseudo-element",pm="data-fa-pseudo-element-pending",l8="data-prefix",f8="data-icon",z5="fontawesome-i2svg",Vm="async",Mm=["HTML","HEAD","STYLE","SCRIPT"],Q7=function(){try{return!0}catch{return!1}}(),c1="classic",i1="sharp",o8=[c1,i1];function k3(c){return new Proxy(c,{get:function(e,r){return r in e?e[r]:e[c1]}})}var g3=k3((j3={},f1(j3,c1,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),f1(j3,i1,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),j3)),b3=k3((Z3={},f1(Z3,c1,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),f1(Z3,i1,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Z3)),x3=k3(($3={},f1($3,c1,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),f1($3,i1,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),$3)),Cm=k3((K3={},f1(K3,c1,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),f1(K3,i1,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),K3)),dm=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,X7="fa-layers-text",Lm=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,gm=k3((Y3={},f1(Y3,c1,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),f1(Y3,i1,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Y3)),J7=[1,2,3,4,5,6,7,8,9,10],bm=J7.concat([11,12,13,14,15,16,17,18,19,20]),xm=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],g2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},N3=new Set;Object.keys(b3[c1]).map(N3.add.bind(N3));Object.keys(b3[i1]).map(N3.add.bind(N3));var Nm=[].concat(o8,y3(N3),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",g2.GROUP,g2.SWAP_OPACITY,g2.PRIMARY,g2.SECONDARY]).concat(J7.map(function(c){return"".concat(c,"x")})).concat(bm.map(function(c){return"w-".concat(c)})),z3=h2.FontAwesomeConfig||{};function Sm(c){var a=a1.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function Am(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(a1&&typeof a1.querySelector=="function"){var wm=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];wm.forEach(function(c){var a=i8(c,2),e=a[0],r=a[1],s=Am(Sm(e));s!=null&&(z3[r]=s)})}var c9={styleDefault:"solid",familyDefault:"classic",cssPrefix:K7,replacementClass:Y7,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};z3.familyPrefix&&(z3.cssPrefix=z3.familyPrefix);var G2=k(k({},c9),z3);G2.autoReplaceSvg||(G2.observeMutations=!1);var R={};Object.keys(c9).forEach(function(c){Object.defineProperty(R,c,{enumerable:!0,set:function(e){G2[c]=e,h3.forEach(function(r){return r(R)})},get:function(){return G2[c]}})});Object.defineProperty(R,"familyPrefix",{enumerable:!0,set:function(a){G2.cssPrefix=a,h3.forEach(function(e){return e(R)})},get:function(){return G2.cssPrefix}});h2.FontAwesomeConfig=R;var h3=[];function ym(c){return h3.push(c),function(){h3.splice(h3.indexOf(c),1)}}var n2=x6,G1={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function km(c){if(!(!c||!a2)){var a=a1.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=a1.head.childNodes,r=null,s=e.length-1;s>-1;s--){var i=e[s],n=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(r=i)}return a1.head.insertBefore(a,r),c}}var Pm="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function S3(){for(var c=12,a="";c-- >0;)a+=Pm[Math.random()*62|0];return a}function K2(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function t8(c){return c.classList?K2(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function a9(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Tm(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(a9(c[e]),'" ')},"").trim()}function A4(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function m8(c){return c.size!==G1.size||c.x!==G1.x||c.y!==G1.y||c.rotate!==G1.rotate||c.flipX||c.flipY}function Rm(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,s={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(i," ").concat(n," ").concat(f)},t={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:l,path:t}}function Bm(c){var a=c.transform,e=c.width,r=e===void 0?x6:e,s=c.height,i=s===void 0?x6:s,n=c.startCentered,f=n===void 0?!1:n,l="";return f&&$7?l+="translate(".concat(a.x/n2-r/2,"em, ").concat(a.y/n2-i/2,"em) "):f?l+="translate(calc(-50% + ".concat(a.x/n2,"em), calc(-50% + ").concat(a.y/n2,"em)) "):l+="translate(".concat(a.x/n2,"em, ").concat(a.y/n2,"em) "),l+="scale(".concat(a.size/n2*(a.flipX?-1:1),", ").concat(a.size/n2*(a.flipY?-1:1),") "),l+="rotate(".concat(a.rotate,"deg) "),l}var Fm=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function e9(){var c=K7,a=Y7,e=R.cssPrefix,r=R.replacementClass,s=Fm;if(e!==c||r!==a){var i=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),f=new RegExp("\\.".concat(a),"g");s=s.replace(i,".".concat(e,"-")).replace(n,"--".concat(e,"-")).replace(f,".".concat(r))}return s}var h5=!1;function s6(){R.autoAddCss&&!h5&&(km(e9()),h5=!0)}var Em={mixout:function(){return{dom:{css:e9,insertCss:s6}}},hooks:function(){return{beforeDOMElementCreation:function(){s6()},beforeI2svg:function(){s6()}}}},X1=h2||{};X1[Q1]||(X1[Q1]={});X1[Q1].styles||(X1[Q1].styles={});X1[Q1].hooks||(X1[Q1].hooks={});X1[Q1].shims||(X1[Q1].shims=[]);var T1=X1[Q1],r9=[],Dm=function c(){a1.removeEventListener("DOMContentLoaded",c),z4=1,r9.map(function(a){return a()})},z4=!1;a2&&(z4=(a1.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(a1.readyState),z4||a1.addEventListener("DOMContentLoaded",Dm));function _m(c){a2&&(z4?setTimeout(c,0):r9.push(c))}function P3(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,s=c.children,i=s===void 0?[]:s;return typeof c=="string"?a9(c):"<".concat(a," ").concat(Tm(r),">").concat(i.map(P3).join(""),"</").concat(a,">")}function H5(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var i6=function(a,e,r,s){var i=Object.keys(a),n=i.length,f=e,l,t,o;for(r===void 0?(l=1,o=a[i[0]]):(l=0,o=r);l<n;l++)t=i[l],o=f(o,a[t],t,a);return o};function qm(c){for(var a=[],e=0,r=c.length;e<r;){var s=c.charCodeAt(e++);if(s>=55296&&s<=56319&&e<r){var i=c.charCodeAt(e++);(i&64512)==56320?a.push(((s&1023)<<10)+(i&1023)+65536):(a.push(s),e--)}else a.push(s)}return a}function S6(c){var a=qm(c);return a.length===1?a[0].toString(16):null}function Om(c,a){var e=c.length,r=c.charCodeAt(a),s;return r>=55296&&r<=56319&&e>a+1&&(s=c.charCodeAt(a+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function u5(c){return Object.keys(c).reduce(function(a,e){var r=c[e],s=!!r.icon;return s?a[r.iconName]=r.icon:a[e]=r,a},{})}function A6(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,s=r===void 0?!1:r,i=u5(a);typeof T1.hooks.addPack=="function"&&!s?T1.hooks.addPack(c,u5(a)):T1.styles[c]=k(k({},T1.styles[c]||{}),i),c==="fas"&&A6("fa",a)}var Q3,X3,J3,F2=T1.styles,Um=T1.shims,Im=(Q3={},f1(Q3,c1,Object.values(x3[c1])),f1(Q3,i1,Object.values(x3[i1])),Q3),v8=null,s9={},i9={},n9={},l9={},f9={},Gm=(X3={},f1(X3,c1,Object.keys(g3[c1])),f1(X3,i1,Object.keys(g3[i1])),X3);function Wm(c){return~Nm.indexOf(c)}function jm(c,a){var e=a.split("-"),r=e[0],s=e.slice(1).join("-");return r===c&&s!==""&&!Wm(s)?s:null}var o9=function(){var a=function(i){return i6(F2,function(n,f,l){return n[l]=i6(f,i,{}),n},{})};s9=a(function(s,i,n){if(i[3]&&(s[i[3]]=n),i[2]){var f=i[2].filter(function(l){return typeof l=="number"});f.forEach(function(l){s[l.toString(16)]=n})}return s}),i9=a(function(s,i,n){if(s[n]=n,i[2]){var f=i[2].filter(function(l){return typeof l=="string"});f.forEach(function(l){s[l]=n})}return s}),f9=a(function(s,i,n){var f=i[2];return s[n]=n,f.forEach(function(l){s[l]=n}),s});var e="far"in F2||R.autoFetchSvg,r=i6(Um,function(s,i){var n=i[0],f=i[1],l=i[2];return f==="far"&&!e&&(f="fas"),typeof n=="string"&&(s.names[n]={prefix:f,iconName:l}),typeof n=="number"&&(s.unicodes[n.toString(16)]={prefix:f,iconName:l}),s},{names:{},unicodes:{}});n9=r.names,l9=r.unicodes,v8=w4(R.styleDefault,{family:R.familyDefault})};ym(function(c){v8=w4(c.styleDefault,{family:R.familyDefault})});o9();function z8(c,a){return(s9[c]||{})[a]}function Zm(c,a){return(i9[c]||{})[a]}function b2(c,a){return(f9[c]||{})[a]}function t9(c){return n9[c]||{prefix:null,iconName:null}}function $m(c){var a=l9[c],e=z8("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function H2(){return v8}var h8=function(){return{prefix:null,iconName:null,rest:[]}};function w4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?c1:e,s=g3[r][c],i=b3[r][c]||b3[r][s],n=c in T1.styles?c:null;return i||n||null}var p5=(J3={},f1(J3,c1,Object.keys(x3[c1])),f1(J3,i1,Object.keys(x3[i1])),J3);function y4(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,s=r===void 0?!1:r,i=(a={},f1(a,c1,"".concat(R.cssPrefix,"-").concat(c1)),f1(a,i1,"".concat(R.cssPrefix,"-").concat(i1)),a),n=null,f=c1;(c.includes(i[c1])||c.some(function(t){return p5[c1].includes(t)}))&&(f=c1),(c.includes(i[i1])||c.some(function(t){return p5[i1].includes(t)}))&&(f=i1);var l=c.reduce(function(t,o){var z=jm(R.cssPrefix,o);if(F2[o]?(o=Im[f].includes(o)?Cm[f][o]:o,n=o,t.prefix=o):Gm[f].indexOf(o)>-1?(n=o,t.prefix=w4(o,{family:f})):z?t.iconName=z:o!==R.replacementClass&&o!==i[c1]&&o!==i[i1]&&t.rest.push(o),!s&&t.prefix&&t.iconName){var h=n==="fa"?t9(t.iconName):{},u=b2(t.prefix,t.iconName);h.prefix&&(n=null),t.iconName=h.iconName||u||t.iconName,t.prefix=h.prefix||t.prefix,t.prefix==="far"&&!F2.far&&F2.fas&&!R.autoFetchSvg&&(t.prefix="fas")}return t},h8());return(c.includes("fa-brands")||c.includes("fab"))&&(l.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(l.prefix="fad"),!l.prefix&&f===i1&&(F2.fass||R.autoFetchSvg)&&(l.prefix="fass",l.iconName=b2(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||n==="fa")&&(l.prefix=H2()||"fas"),l}var Km=function(){function c(){lm(this,c),this.definitions={}}return om(c,[{key:"add",value:function(){for(var e=this,r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];var n=s.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(f){e.definitions[f]=k(k({},e.definitions[f]||{}),n[f]),A6(f,n[f]);var l=x3[c1][f];l&&A6(l,n[f]),o9()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(i){var n=s[i],f=n.prefix,l=n.iconName,t=n.icon,o=t[2];e[f]||(e[f]={}),o.length>0&&o.forEach(function(z){typeof z=="string"&&(e[f][z]=t)}),e[f][l]=t}),e}}]),c}(),V5=[],E2={},q2={},Ym=Object.keys(q2);function Qm(c,a){var e=a.mixoutsTo;return V5=c,E2={},Object.keys(q2).forEach(function(r){Ym.indexOf(r)===-1&&delete q2[r]}),V5.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(n){typeof s[n]=="function"&&(e[n]=s[n]),v4(s[n])==="object"&&Object.keys(s[n]).forEach(function(f){e[n]||(e[n]={}),e[n][f]=s[n][f]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(n){E2[n]||(E2[n]=[]),E2[n].push(i[n])})}r.provides&&r.provides(q2)}),e}function w6(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),s=2;s<e;s++)r[s-2]=arguments[s];var i=E2[c]||[];return i.forEach(function(n){a=n.apply(null,[a].concat(r))}),a}function w2(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var s=E2[c]||[];s.forEach(function(i){i.apply(null,e)})}function J1(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return q2[c]?q2[c].apply(null,a):void 0}function y6(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||H2();if(a)return a=b2(e,a)||a,H5(m9.definitions,e,a)||H5(T1.styles,e,a)}var m9=new Km,Xm=function(){R.autoReplaceSvg=!1,R.observeMutations=!1,w2("noAuto")},Jm={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return a2?(w2("beforeI2svg",a),J1("pseudoElements2svg",a),J1("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;R.autoReplaceSvg===!1&&(R.autoReplaceSvg=!0),R.observeMutations=!0,_m(function(){av({autoReplaceSvgRoot:e}),w2("watch",a)})}},cv={icon:function(a){if(a===null)return null;if(v4(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:b2(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=w4(a[0]);return{prefix:r,iconName:b2(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(R.cssPrefix,"-"))>-1||a.match(dm))){var s=y4(a.split(" "),{skipLookups:!0});return{prefix:s.prefix||H2(),iconName:b2(s.prefix,s.iconName)||s.iconName}}if(typeof a=="string"){var i=H2();return{prefix:i,iconName:b2(i,a)||a}}}},N1={noAuto:Xm,config:R,dom:Jm,parse:cv,library:m9,findIconDefinition:y6,toHtml:P3},av=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?a1:e;(Object.keys(T1.styles).length>0||R.autoFetchSvg)&&a2&&R.autoReplaceSvg&&N1.dom.i2svg({node:r})};function k4(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return P3(r)})}}),Object.defineProperty(c,"node",{get:function(){if(a2){var r=a1.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function ev(c){var a=c.children,e=c.main,r=c.mask,s=c.attributes,i=c.styles,n=c.transform;if(m8(n)&&e.found&&!r.found){var f=e.width,l=e.height,t={x:f/l/2,y:.5};s.style=A4(k(k({},i),{},{"transform-origin":"".concat(t.x+n.x/16,"em ").concat(t.y+n.y/16,"em")}))}return[{tag:"svg",attributes:s,children:a}]}function rv(c){var a=c.prefix,e=c.iconName,r=c.children,s=c.attributes,i=c.symbol,n=i===!0?"".concat(a,"-").concat(R.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:k(k({},s),{},{id:n}),children:r}]}]}function H8(c){var a=c.icons,e=a.main,r=a.mask,s=c.prefix,i=c.iconName,n=c.transform,f=c.symbol,l=c.title,t=c.maskId,o=c.titleId,z=c.extra,h=c.watchable,u=h===void 0?!1:h,N=r.found?r:e,y=N.width,E=N.height,M=s==="fak",d=[R.replacementClass,i?"".concat(R.cssPrefix,"-").concat(i):""].filter(function(H1){return z.classes.indexOf(H1)===-1}).filter(function(H1){return H1!==""||!!H1}).concat(z.classes).join(" "),w={children:[],attributes:k(k({},z.attributes),{},{"data-prefix":s,"data-icon":i,class:d,role:z.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(E)})},_=M&&!~z.classes.indexOf("fa-fw")?{width:"".concat(y/E*16*.0625,"em")}:{};u&&(w.attributes[A2]=""),l&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(o||S3())},children:[l]}),delete w.attributes.title);var I=k(k({},w),{},{prefix:s,iconName:i,main:e,mask:r,maskId:t,transform:n,symbol:f,styles:k(k({},_),z.styles)}),D=r.found&&e.found?J1("generateAbstractMask",I)||{children:[],attributes:{}}:J1("generateAbstractIcon",I)||{children:[],attributes:{}},J=D.children,h1=D.attributes;return I.children=J,I.attributes=h1,f?rv(I):ev(I)}function M5(c){var a=c.content,e=c.width,r=c.height,s=c.transform,i=c.title,n=c.extra,f=c.watchable,l=f===void 0?!1:f,t=k(k(k({},n.attributes),i?{title:i}:{}),{},{class:n.classes.join(" ")});l&&(t[A2]="");var o=k({},n.styles);m8(s)&&(o.transform=Bm({transform:s,startCentered:!0,width:e,height:r}),o["-webkit-transform"]=o.transform);var z=A4(o);z.length>0&&(t.style=z);var h=[];return h.push({tag:"span",attributes:t,children:[a]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function sv(c){var a=c.content,e=c.title,r=c.extra,s=k(k(k({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),i=A4(r.styles);i.length>0&&(s.style=i);var n=[];return n.push({tag:"span",attributes:s,children:[a]}),e&&n.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),n}var n6=T1.styles;function k6(c){var a=c[0],e=c[1],r=c.slice(4),s=i8(r,1),i=s[0],n=null;return Array.isArray(i)?n={tag:"g",attributes:{class:"".concat(R.cssPrefix,"-").concat(g2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(R.cssPrefix,"-").concat(g2.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(R.cssPrefix,"-").concat(g2.PRIMARY),fill:"currentColor",d:i[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:e,icon:n}}var iv={found:!1,width:512,height:512};function nv(c,a){!Q7&&!R.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function P6(c,a){var e=a;return a==="fa"&&R.styleDefault!==null&&(a=H2()),new Promise(function(r,s){if(J1("missingIconAbstract"),e==="fa"){var i=t9(c)||{};c=i.iconName||c,a=i.prefix||a}if(c&&a&&n6[a]&&n6[a][c]){var n=n6[a][c];return r(k6(n))}nv(c,a),r(k(k({},iv),{},{icon:R.showMissingIcons&&c?J1("missingIconAbstract")||{}:{}}))})}var C5=function(){},T6=R.measurePerformance&&W3&&W3.mark&&W3.measure?W3:{mark:C5,measure:C5},r3='FA "6.5.2"',lv=function(a){return T6.mark("".concat(r3," ").concat(a," begins")),function(){return v9(a)}},v9=function(a){T6.mark("".concat(r3," ").concat(a," ends")),T6.measure("".concat(r3," ").concat(a),"".concat(r3," ").concat(a," begins"),"".concat(r3," ").concat(a," ends"))},u8={begin:lv,end:v9},n4=function(){};function d5(c){var a=c.getAttribute?c.getAttribute(A2):null;return typeof a=="string"}function fv(c){var a=c.getAttribute?c.getAttribute(l8):null,e=c.getAttribute?c.getAttribute(f8):null;return a&&e}function ov(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(R.replacementClass)}function tv(){if(R.autoReplaceSvg===!0)return l4.replace;var c=l4[R.autoReplaceSvg];return c||l4.replace}function mv(c){return a1.createElementNS("http://www.w3.org/2000/svg",c)}function vv(c){return a1.createElement(c)}function z9(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?mv:vv:e;if(typeof c=="string")return a1.createTextNode(c);var s=r(c.tag);Object.keys(c.attributes||[]).forEach(function(n){s.setAttribute(n,c.attributes[n])});var i=c.children||[];return i.forEach(function(n){s.appendChild(z9(n,{ceFn:r}))}),s}function zv(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var l4={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(s){e.parentNode.insertBefore(z9(s),e)}),e.getAttribute(A2)===null&&R.keepOriginalSource){var r=a1.createComment(zv(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~t8(e).indexOf(R.replacementClass))return l4.replace(a);var s=new RegExp("".concat(R.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(f,l){return l===R.replacementClass||l.match(s)?f.toSvg.push(l):f.toNode.push(l),f},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var n=r.map(function(f){return P3(f)}).join(`
`);e.setAttribute(A2,""),e.innerHTML=n}};function L5(c){c()}function h9(c,a){var e=typeof a=="function"?a:n4;if(c.length===0)e();else{var r=L5;R.mutateApproach===Vm&&(r=h2.requestAnimationFrame||L5),r(function(){var s=tv(),i=u8.begin("mutate");c.map(s),i(),e()})}}var p8=!1;function H9(){p8=!0}function R6(){p8=!1}var h4=null;function g5(c){if(v5&&R.observeMutations){var a=c.treeCallback,e=a===void 0?n4:a,r=c.nodeCallback,s=r===void 0?n4:r,i=c.pseudoElementsCallback,n=i===void 0?n4:i,f=c.observeMutationsRoot,l=f===void 0?a1:f;h4=new v5(function(t){if(!p8){var o=H2();K2(t).forEach(function(z){if(z.type==="childList"&&z.addedNodes.length>0&&!d5(z.addedNodes[0])&&(R.searchPseudoElements&&n(z.target),e(z.target)),z.type==="attributes"&&z.target.parentNode&&R.searchPseudoElements&&n(z.target.parentNode),z.type==="attributes"&&d5(z.target)&&~xm.indexOf(z.attributeName))if(z.attributeName==="class"&&fv(z.target)){var h=y4(t8(z.target)),u=h.prefix,N=h.iconName;z.target.setAttribute(l8,u||o),N&&z.target.setAttribute(f8,N)}else ov(z.target)&&s(z.target)})}}),a2&&h4.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function hv(){h4&&h4.disconnect()}function Hv(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,s){var i=s.split(":"),n=i[0],f=i.slice(1);return n&&f.length>0&&(r[n]=f.join(":").trim()),r},{})),e}function uv(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",s=y4(t8(c));return s.prefix||(s.prefix=H2()),a&&e&&(s.prefix=a,s.iconName=e),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=Zm(s.prefix,c.innerText)||z8(s.prefix,S6(c.innerText))),!s.iconName&&R.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=c.firstChild.data)),s}function pv(c){var a=K2(c.attributes).reduce(function(s,i){return s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return R.autoA11y&&(e?a["aria-labelledby"]="".concat(R.replacementClass,"-title-").concat(r||S3()):(a["aria-hidden"]="true",a.focusable="false")),a}function Vv(){return{iconName:null,title:null,titleId:null,prefix:null,transform:G1,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function b5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=uv(c),r=e.iconName,s=e.prefix,i=e.rest,n=pv(c),f=w6("parseNodeAttributes",{},c),l=a.styleParser?Hv(c):[];return k({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:G1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:n}},f)}var Mv=T1.styles;function u9(c){var a=R.autoReplaceSvg==="nest"?b5(c,{styleParser:!1}):b5(c);return~a.extra.classes.indexOf(X7)?J1("generateLayersText",c,a):J1("generateSvgReplacementMutation",c,a)}var u2=new Set;o8.map(function(c){u2.add("fa-".concat(c))});Object.keys(g3[c1]).map(u2.add.bind(u2));Object.keys(g3[i1]).map(u2.add.bind(u2));u2=y3(u2);function x5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!a2)return Promise.resolve();var e=a1.documentElement.classList,r=function(z){return e.add("".concat(z5,"-").concat(z))},s=function(z){return e.remove("".concat(z5,"-").concat(z))},i=R.autoFetchSvg?u2:o8.map(function(o){return"fa-".concat(o)}).concat(Object.keys(Mv));i.includes("fa")||i.push("fa");var n=[".".concat(X7,":not([").concat(A2,"])")].concat(i.map(function(o){return".".concat(o,":not([").concat(A2,"])")})).join(", ");if(n.length===0)return Promise.resolve();var f=[];try{f=K2(c.querySelectorAll(n))}catch{}if(f.length>0)r("pending"),s("complete");else return Promise.resolve();var l=u8.begin("onTree"),t=f.reduce(function(o,z){try{var h=u9(z);h&&o.push(h)}catch(u){Q7||u.name==="MissingIcon"&&console.error(u)}return o},[]);return new Promise(function(o,z){Promise.all(t).then(function(h){h9(h,function(){r("active"),r("complete"),s("pending"),typeof a=="function"&&a(),l(),o()})}).catch(function(h){l(),z(h)})})}function Cv(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;u9(c).then(function(e){e&&h9([e],a)})}function dv(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:y6(a||{}),s=e.mask;return s&&(s=(s||{}).icon?s:y6(s||{})),c(r,k(k({},e),{},{mask:s}))}}var Lv=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,s=r===void 0?G1:r,i=e.symbol,n=i===void 0?!1:i,f=e.mask,l=f===void 0?null:f,t=e.maskId,o=t===void 0?null:t,z=e.title,h=z===void 0?null:z,u=e.titleId,N=u===void 0?null:u,y=e.classes,E=y===void 0?[]:y,M=e.attributes,d=M===void 0?{}:M,w=e.styles,_=w===void 0?{}:w;if(a){var I=a.prefix,D=a.iconName,J=a.icon;return k4(k({type:"icon"},a),function(){return w2("beforeDOMElementCreation",{iconDefinition:a,params:e}),R.autoA11y&&(h?d["aria-labelledby"]="".concat(R.replacementClass,"-title-").concat(N||S3()):(d["aria-hidden"]="true",d.focusable="false")),H8({icons:{main:k6(J),mask:l?k6(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:I,iconName:D,transform:k(k({},G1),s),symbol:n,title:h,maskId:o,titleId:N,extra:{attributes:d,styles:_,classes:E}})})}},gv={mixout:function(){return{icon:dv(Lv)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=x5,e.nodeCallback=Cv,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,s=r===void 0?a1:r,i=e.callback,n=i===void 0?function(){}:i;return x5(s,n)},a.generateSvgReplacementMutation=function(e,r){var s=r.iconName,i=r.title,n=r.titleId,f=r.prefix,l=r.transform,t=r.symbol,o=r.mask,z=r.maskId,h=r.extra;return new Promise(function(u,N){Promise.all([P6(s,f),o.iconName?P6(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var E=i8(y,2),M=E[0],d=E[1];u([e,H8({icons:{main:M,mask:d},prefix:f,iconName:s,transform:l,symbol:t,maskId:z,title:i,titleId:n,extra:h,watchable:!0})])}).catch(N)})},a.generateAbstractIcon=function(e){var r=e.children,s=e.attributes,i=e.main,n=e.transform,f=e.styles,l=A4(f);l.length>0&&(s.style=l);var t;return m8(n)&&(t=J1("generateAbstractTransformGrouping",{main:i,transform:n,containerWidth:i.width,iconWidth:i.width})),r.push(t||i.icon),{children:r,attributes:s}}}},bv={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,i=s===void 0?[]:s;return k4({type:"layer"},function(){w2("beforeDOMElementCreation",{assembler:e,params:r});var n=[];return e(function(f){Array.isArray(f)?f.map(function(l){n=n.concat(l.abstract)}):n=n.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(R.cssPrefix,"-layers")].concat(y3(i)).join(" ")},children:n}]})}}}},xv={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.title,i=s===void 0?null:s,n=r.classes,f=n===void 0?[]:n,l=r.attributes,t=l===void 0?{}:l,o=r.styles,z=o===void 0?{}:o;return k4({type:"counter",content:e},function(){return w2("beforeDOMElementCreation",{content:e,params:r}),sv({content:e.toString(),title:i,extra:{attributes:t,styles:z,classes:["".concat(R.cssPrefix,"-layers-counter")].concat(y3(f))}})})}}}},Nv={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,i=s===void 0?G1:s,n=r.title,f=n===void 0?null:n,l=r.classes,t=l===void 0?[]:l,o=r.attributes,z=o===void 0?{}:o,h=r.styles,u=h===void 0?{}:h;return k4({type:"text",content:e},function(){return w2("beforeDOMElementCreation",{content:e,params:r}),M5({content:e,transform:k(k({},G1),i),title:f,extra:{attributes:z,styles:u,classes:["".concat(R.cssPrefix,"-layers-text")].concat(y3(t))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var s=r.title,i=r.transform,n=r.extra,f=null,l=null;if($7){var t=parseInt(getComputedStyle(e).fontSize,10),o=e.getBoundingClientRect();f=o.width/t,l=o.height/t}return R.autoA11y&&!s&&(n.attributes["aria-hidden"]="true"),Promise.resolve([e,M5({content:e.innerHTML,width:f,height:l,transform:i,title:s,extra:n,watchable:!0})])}}},Sv=new RegExp('"',"ug"),N5=[1105920,1112319];function Av(c){var a=c.replace(Sv,""),e=Om(a,0),r=e>=N5[0]&&e<=N5[1],s=a.length===2?a[0]===a[1]:!1;return{value:S6(s?a[0]:a),isSecondary:r||s}}function S5(c,a){var e="".concat(pm).concat(a.replace(":","-"));return new Promise(function(r,s){if(c.getAttribute(e)!==null)return r();var i=K2(c.children),n=i.filter(function(J){return J.getAttribute(N6)===a})[0],f=h2.getComputedStyle(c,a),l=f.getPropertyValue("font-family").match(Lm),t=f.getPropertyValue("font-weight"),o=f.getPropertyValue("content");if(n&&!l)return c.removeChild(n),r();if(l&&o!=="none"&&o!==""){var z=f.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?i1:c1,u=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?b3[h][l[2].toLowerCase()]:gm[h][t],N=Av(z),y=N.value,E=N.isSecondary,M=l[0].startsWith("FontAwesome"),d=z8(u,y),w=d;if(M){var _=$m(y);_.iconName&&_.prefix&&(d=_.iconName,u=_.prefix)}if(d&&!E&&(!n||n.getAttribute(l8)!==u||n.getAttribute(f8)!==w)){c.setAttribute(e,w),n&&c.removeChild(n);var I=Vv(),D=I.extra;D.attributes[N6]=a,P6(d,u).then(function(J){var h1=H8(k(k({},I),{},{icons:{main:J,mask:h8()},prefix:u,iconName:w,extra:D,watchable:!0})),H1=a1.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(H1,c.firstChild):c.appendChild(H1),H1.outerHTML=h1.map(function(S1){return P3(S1)}).join(`