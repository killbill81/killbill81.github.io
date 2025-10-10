const jf=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const qf=()=>{};var ol={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},$f=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},qu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,u=s+2<n.length,h=u?n[s+2]:0,m=i>>2,p=(i&3)<<4|l>>4;let _=(l&15)<<2|h>>6,R=h&63;u||(R=64,a||(_=64)),r.push(t[m],t[p],t[_],t[R])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ju(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):$f(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new Hf;const _=i<<2|l>>4;if(r.push(_),h!==64){const R=l<<4&240|h>>2;if(r.push(R),p!==64){const P=h<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Hf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zf=function(n){const e=ju(n);return qu.encodeByteArray(e,!0)},mi=function(n){return zf(n).replace(/\./g,"")},$u=function(n){try{return qu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf=()=>Gf().__FIREBASE_DEFAULTS__,Kf=()=>{if(typeof process>"u"||typeof ol>"u")return;const n=ol.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Qf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&$u(n[1]);return e&&JSON.parse(e)},ji=()=>{try{return qf()||Wf()||Kf()||Qf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Hu=n=>ji()?.emulatorHosts?.[n],Jf=n=>{const e=Hu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},zu=()=>ji()?.config,Gu=n=>ji()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Wu(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yf(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[mi(JSON.stringify(t)),mi(JSON.stringify(a)),""].join(".")}const cs={};function Zf(){const n={prod:[],emulator:[]};for(const e of Object.keys(cs))cs[e]?n.emulator.push(e):n.prod.push(e);return n}function em(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let al=!1;function Ku(n,e){if(typeof window>"u"||typeof document>"u"||!Mr(window.location.host)||cs[n]===e||cs[n]||al)return;cs[n]=e;function t(_){return`__firebase__banner__${_}`}const r="__firebase__banner",i=Zf().prod.length>0;function a(){const _=document.getElementById(r);_&&_.remove()}function l(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function u(_,R){_.setAttribute("width","24"),_.setAttribute("id",R),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function h(){const _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{al=!0,a()},_}function m(_,R){_.setAttribute("id",R),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function p(){const _=em(r),R=t("text"),P=document.getElementById(R)||document.createElement("span"),M=t("learnmore"),D=document.getElementById(M)||document.createElement("a"),W=t("preprendIcon"),ce=document.getElementById(W)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){const $=_.element;l($),m(D,M);const ne=h();u(ce,W),$.append(ce,P,D,ne),document.body.appendChild($)}i?(P.innerText="Preview backend disconnected.",ce.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ce.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mt())}function nm(){const n=ji()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function rm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function sm(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function im(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function om(){const n=mt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function am(){return!nm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function cm(){try{return typeof indexedDB=="object"}catch{return!1}}function lm(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um="FirebaseError";class hn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=um,Object.setPrototypeOf(this,hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ss.prototype.create)}}class Ss{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?dm(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new hn(s,l,r)}}function dm(n,e){return n.replace(hm,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const hm=/\{\$([^}]+)}/g;function fm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function on(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(cl(i)&&cl(a)){if(!on(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function cl(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function mm(n,e){const t=new pm(n,e);return t.subscribe.bind(t)}class pm{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");gm(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=To),s.error===void 0&&(s.error=To),s.complete===void 0&&(s.complete=To);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gm(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function To(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(n){return n&&n._delegate?n._delegate:n}class rr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Xf;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vm(e))try{this.getOrInitializeService({instanceIdentifier:Xn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Xn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xn){return this.instances.has(e)}getOptions(e=Xn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:_m(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Xn){return this.component?this.component.multipleInstances?e:Xn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _m(n){return n===Xn?void 0:n}function vm(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ym(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ye||(ye={}));const Im={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},wm=ye.INFO,bm={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},Tm=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=bm[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ea{constructor(e){this.name=e,this._logLevel=wm,this._logHandler=Tm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Im[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const Am=(n,e)=>e.some(t=>n instanceof t);let ll,ul;function Cm(){return ll||(ll=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Sm(){return ul||(ul=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qu=new WeakMap,jo=new WeakMap,Ju=new WeakMap,Ao=new WeakMap,Ia=new WeakMap;function Rm(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Pn(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Qu.set(t,n)}).catch(()=>{}),Ia.set(e,n),e}function Pm(n){if(jo.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});jo.set(n,e)}let qo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return jo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ju.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Pn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function xm(n){qo=n(qo)}function km(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Co(this),e,...t);return Ju.set(r,e.sort?e.sort():[e]),Pn(r)}:Sm().includes(n)?function(...e){return n.apply(Co(this),e),Pn(Qu.get(this))}:function(...e){return Pn(n.apply(Co(this),e))}}function Nm(n){return typeof n=="function"?km(n):(n instanceof IDBTransaction&&Pm(n),Am(n,Cm())?new Proxy(n,qo):n)}function Pn(n){if(n instanceof IDBRequest)return Rm(n);if(Ao.has(n))return Ao.get(n);const e=Nm(n);return e!==n&&(Ao.set(n,e),Ia.set(e,n)),e}const Co=n=>Ia.get(n);function Lm(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=Pn(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Pn(a.result),u.oldVersion,u.newVersion,Pn(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Dm=["get","getKey","getAll","getAllKeys","count"],Vm=["put","add","delete","clear"],So=new Map;function dl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(So.get(e))return So.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Vm.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Dm.includes(t)))return;const i=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),s&&u.done]))[0]};return So.set(e,i),i}xm(n=>({...n,get:(e,t,r)=>dl(e,t)||n.get(e,t,r),has:(e,t)=>!!dl(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Om(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Om(n){return n.getComponent()?.type==="VERSION"}const $o="@firebase/app",hl="0.14.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an=new Ea("@firebase/app"),Fm="@firebase/app-compat",Um="@firebase/analytics-compat",Bm="@firebase/analytics",jm="@firebase/app-check-compat",qm="@firebase/app-check",$m="@firebase/auth",Hm="@firebase/auth-compat",zm="@firebase/database",Gm="@firebase/data-connect",Wm="@firebase/database-compat",Km="@firebase/functions",Qm="@firebase/functions-compat",Jm="@firebase/installations",Xm="@firebase/installations-compat",Ym="@firebase/messaging",Zm="@firebase/messaging-compat",ep="@firebase/performance",tp="@firebase/performance-compat",np="@firebase/remote-config",rp="@firebase/remote-config-compat",sp="@firebase/storage",ip="@firebase/storage-compat",op="@firebase/firestore",ap="@firebase/ai",cp="@firebase/firestore-compat",lp="firebase",up="12.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho="[DEFAULT]",dp={[$o]:"fire-core",[Fm]:"fire-core-compat",[Bm]:"fire-analytics",[Um]:"fire-analytics-compat",[qm]:"fire-app-check",[jm]:"fire-app-check-compat",[$m]:"fire-auth",[Hm]:"fire-auth-compat",[zm]:"fire-rtdb",[Gm]:"fire-data-connect",[Wm]:"fire-rtdb-compat",[Km]:"fire-fn",[Qm]:"fire-fn-compat",[Jm]:"fire-iid",[Xm]:"fire-iid-compat",[Ym]:"fire-fcm",[Zm]:"fire-fcm-compat",[ep]:"fire-perf",[tp]:"fire-perf-compat",[np]:"fire-rc",[rp]:"fire-rc-compat",[sp]:"fire-gcs",[ip]:"fire-gcs-compat",[op]:"fire-fst",[cp]:"fire-fst-compat",[ap]:"fire-vertex","fire-js":"fire-js",[lp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi=new Map,hp=new Map,zo=new Map;function fl(n,e){try{n.container.addComponent(e)}catch(t){an.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ar(n){const e=n.name;if(zo.has(e))return an.debug(`There were multiple attempts to register component ${e}.`),!1;zo.set(e,n);for(const t of pi.values())fl(t,n);for(const t of hp.values())fl(t,n);return!0}function wa(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function zt(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xn=new Ss("app","Firebase",fp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=up;function Xu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Ho,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw xn.create("bad-app-name",{appName:String(s)});if(t||(t=zu()),!t)throw xn.create("no-options");const i=pi.get(s);if(i){if(on(t,i.options)&&on(r,i.config))return i;throw xn.create("duplicate-app",{appName:s})}const a=new Em(s);for(const u of zo.values())a.addComponent(u);const l=new mp(t,r,a);return pi.set(s,l),l}function Yu(n=Ho){const e=pi.get(n);if(!e&&n===Ho&&zu())return Xu();if(!e)throw xn.create("no-app",{appName:n});return e}function kn(n,e,t){let r=dp[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),an.warn(a.join(" "));return}Ar(new rr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp="firebase-heartbeat-database",gp=1,ys="firebase-heartbeat-store";let Ro=null;function Zu(){return Ro||(Ro=Lm(pp,gp,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ys)}catch(t){console.warn(t)}}}}).catch(n=>{throw xn.create("idb-open",{originalErrorMessage:n.message})})),Ro}async function yp(n){try{const t=(await Zu()).transaction(ys),r=await t.objectStore(ys).get(ed(n));return await t.done,r}catch(e){if(e instanceof hn)an.warn(e.message);else{const t=xn.create("idb-get",{originalErrorMessage:e?.message});an.warn(t.message)}}}async function ml(n,e){try{const r=(await Zu()).transaction(ys,"readwrite");await r.objectStore(ys).put(e,ed(n)),await r.done}catch(t){if(t instanceof hn)an.warn(t.message);else{const r=xn.create("idb-set",{originalErrorMessage:t?.message});an.warn(r.message)}}}function ed(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p=1024,vp=30;class Ep{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new wp(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=pl();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>vp){const s=bp(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){an.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=pl(),{heartbeatsToSend:t,unsentEntries:r}=Ip(this._heartbeatsCache.heartbeats),s=mi(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return an.warn(e),""}}}function pl(){return new Date().toISOString().substring(0,10)}function Ip(n,e=_p){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),gl(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),gl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class wp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cm()?lm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await yp(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ml(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ml(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function gl(n){return mi(JSON.stringify({version:2,heartbeats:n})).length}function bp(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(n){Ar(new rr("platform-logger",e=>new Mm(e),"PRIVATE")),Ar(new rr("heartbeat",e=>new Ep(e),"PRIVATE")),kn($o,hl,n),kn($o,hl,"esm2020"),kn("fire-js","")}Tp("");function td(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ap=td,nd=new Ss("auth","Firebase",td());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=new Ea("@firebase/auth");function Cp(n,...e){gi.logLevel<=ye.WARN&&gi.warn(`Auth (${Or}): ${n}`,...e)}function si(n,...e){gi.logLevel<=ye.ERROR&&gi.error(`Auth (${Or}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(n,...e){throw ba(n,...e)}function Gt(n,...e){return ba(n,...e)}function rd(n,e,t){const r={...Ap(),[e]:t};return new Ss("auth","Firebase",r).create(e,{appName:n.name})}function er(n){return rd(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ba(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return nd.create(n,...e)}function oe(n,e,...t){if(!n)throw ba(e,...t)}function rn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw si(e),new Error(e)}function ln(n,e){n||rn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(){return typeof self<"u"&&self.location?.href||""}function Sp(){return yl()==="http:"||yl()==="https:"}function yl(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Sp()||sm()||"connection"in navigator)?navigator.onLine:!0}function Pp(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,t){this.shortDelay=e,this.longDelay=t,ln(t>e,"Short delay should be less than long delay!"),this.isMobile=tm()||im()}get(){return Rp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(n,e){ln(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Np=new Ps(3e4,6e4);function Aa(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Fr(n,e,t,r,s={}){return id(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=Rs({key:n.config.apiKey,...a}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:u,...i};return rm()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&Mr(n.emulatorConfig.host)&&(h.credentials="include"),sd.fetch()(await od(n,n.config.apiHost,t,l),h)})}async function id(n,e,t){n._canInitEmulator=!1;const r={...xp,...e};try{const s=new Dp(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Xs(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xs(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Xs(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Xs(n,"user-disabled",a);const m=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw rd(n,m,h);cn(n,m)}}catch(s){if(s instanceof hn)throw s;cn(n,"network-request-failed",{message:String(s)})}}async function Lp(n,e,t,r,s={}){const i=await Fr(n,e,t,r,s);return"mfaPendingCredential"in i&&cn(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function od(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?Ta(n.config,s):`${n.config.apiScheme}://${s}`;return kp.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class Dp{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Gt(this.auth,"network-request-failed")),Np.get())})}}function Xs(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Gt(n,e,r);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vp(n,e){return Fr(n,"POST","/v1/accounts:delete",e)}async function yi(n,e){return Fr(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Mp(n,e=!1){const t=qe(n),r=await t.getIdToken(e),s=Ca(r);oe(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i?.sign_in_provider;return{claims:s,token:r,authTime:ls(Po(s.auth_time)),issuedAtTime:ls(Po(s.iat)),expirationTime:ls(Po(s.exp)),signInProvider:a||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Po(n){return Number(n)*1e3}function Ca(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return si("JWT malformed, contained fewer than 3 sections"),null;try{const s=$u(t);return s?JSON.parse(s):(si("Failed to decode base64 JWT payload"),null)}catch(s){return si("Caught error parsing JWT payload as JSON",s?.toString()),null}}function _l(n){const e=Ca(n);return oe(e,"internal-error"),oe(typeof e.exp<"u","internal-error"),oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _s(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof hn&&Op(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Op({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ls(this.lastLoginAt),this.creationTime=ls(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _i(n){const e=n.auth,t=await n.getIdToken(),r=await _s(n,yi(e,{idToken:t}));oe(r?.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=s.providerUserInfo?.length?ad(s.providerUserInfo):[],a=Bp(n.providerData,i),l=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!a?.length,h=l?u:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Wo(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,m)}async function Up(n){const e=qe(n);await _i(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Bp(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function ad(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jp(n,e){const t=await id(n,{},async()=>{const r=Rs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await od(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return n.emulatorConfig&&Mr(n.emulatorConfig.host)&&(u.credentials="include"),sd.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function qp(n,e){return Fr(n,"POST","/v2/accounts:revokeToken",Aa(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){oe(e.idToken,"internal-error"),oe(typeof e.idToken<"u","internal-error"),oe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_l(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){oe(e.length!==0,"internal-error");const t=_l(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(oe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await jp(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Ir;return r&&(oe(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(oe(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(oe(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ir,this.toJSON())}_performRefresh(){return rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(n,e){oe(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Vt{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Fp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Wo(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await _s(this,this.stsTokenManager.getToken(this.auth,e));return oe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Mp(this,e)}reload(){return Up(this)}_assign(e){this!==e&&(oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Vt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await _i(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(zt(this.auth.app))return Promise.reject(er(this.auth));const e=await this.getIdToken();return await _s(this,Vp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,l=t.tenantId??void 0,u=t._redirectEventId??void 0,h=t.createdAt??void 0,m=t.lastLoginAt??void 0,{uid:p,emailVerified:_,isAnonymous:R,providerData:P,stsTokenManager:M}=t;oe(p&&M,e,"internal-error");const D=Ir.fromJSON(this.name,M);oe(typeof p=="string",e,"internal-error"),wn(r,e.name),wn(s,e.name),oe(typeof _=="boolean",e,"internal-error"),oe(typeof R=="boolean",e,"internal-error"),wn(i,e.name),wn(a,e.name),wn(l,e.name),wn(u,e.name),wn(h,e.name),wn(m,e.name);const W=new Vt({uid:p,auth:e,email:s,emailVerified:_,displayName:r,isAnonymous:R,photoURL:a,phoneNumber:i,tenantId:l,stsTokenManager:D,createdAt:h,lastLoginAt:m});return P&&Array.isArray(P)&&(W.providerData=P.map(ce=>({...ce}))),u&&(W._redirectEventId=u),W}static async _fromIdTokenResponse(e,t,r=!1){const s=new Ir;s.updateFromServerResponse(t);const i=new Vt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await _i(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];oe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?ad(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!i?.length,l=new Ir;l.updateFromIdToken(r);const u=new Vt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Wo(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl=new Map;function sn(n){ln(n instanceof Function,"Expected a class definition");let e=vl.get(n);return e?(ln(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,vl.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}cd.type="NONE";const El=cd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(n,e,t){return`firebase:${n}:${e}:${t}`}class wr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ii(this.userKey,s.apiKey,i),this.fullPersistenceKey=ii("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await yi(this.auth,{idToken:e}).catch(()=>{});return t?Vt._fromGetAccountInfoResponse(this.auth,t,e):null}return Vt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new wr(sn(El),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||sn(El);const a=ii(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const m=await h._get(a);if(m){let p;if(typeof m=="string"){const _=await yi(e,{idToken:m}).catch(()=>{});if(!_)break;p=await Vt._fromGetAccountInfoResponse(e,_,m)}else p=Vt._fromJSON(e,m);h!==i&&(l=p),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new wr(i,e,r):(i=u[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new wr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(hd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ld(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(md(e))return"Blackberry";if(pd(e))return"Webos";if(ud(e))return"Safari";if((e.includes("chrome/")||dd(e))&&!e.includes("edge/"))return"Chrome";if(fd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function ld(n=mt()){return/firefox\//i.test(n)}function ud(n=mt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dd(n=mt()){return/crios\//i.test(n)}function hd(n=mt()){return/iemobile/i.test(n)}function fd(n=mt()){return/android/i.test(n)}function md(n=mt()){return/blackberry/i.test(n)}function pd(n=mt()){return/webos/i.test(n)}function Sa(n=mt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function $p(n=mt()){return Sa(n)&&!!window.navigator?.standalone}function Hp(){return om()&&document.documentMode===10}function gd(n=mt()){return Sa(n)||fd(n)||pd(n)||md(n)||/windows phone/i.test(n)||hd(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yd(n,e=[]){let t;switch(n){case"Browser":t=Il(mt());break;case"Worker":t=`${Il(mt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Or}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,l)=>{try{const u=e(i);a(u)}catch(u){l(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gp(n,e={}){return Fr(n,"GET","/v2/passwordPolicy",Aa(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp=6;class Kp{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Wp,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wl(this),this.idTokenSubscription=new wl(this),this.beforeStateQueue=new zp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=nd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=sn(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await wr.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await yi(this,{idToken:e}),r=await Vt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(zt(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(a,a))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,a=r?._redirectEventId,l=await this.tryRedirectSignIn(e);(!i||i===a)&&l?.user&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await _i(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Pp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(zt(this.app))return Promise.reject(er(this));const t=e?qe(e):null;return t&&oe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return zt(this.app)?Promise.reject(er(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return zt(this.app)?Promise.reject(er(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(sn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Gp(this),t=new Kp(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ss("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await qp(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&sn(e)||this._popupRedirectResolver;oe(t,this,"argument-error"),this.redirectPersistenceManager=await wr.create(this,[sn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(oe(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=yd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(zt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Cp(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Ra(n){return qe(n)}class wl{constructor(e){this.auth=e,this.observer=null,this.addObserver=mm(t=>this.observer=t)}get next(){return oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Jp(n){Pa=n}function Xp(n){return Pa.loadJS(n)}function Yp(){return Pa.gapiScript}function Zp(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eg(n,e){const t=wa(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(on(i,e??{}))return s;cn(s,"already-initialized")}return t.initialize({options:e})}function tg(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(sn);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function ng(n,e,t){const r=Ra(n);oe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=_d(e),{host:a,port:l}=rg(e),u=l===null?"":`:${l}`,h={url:`${i}//${a}${u}/`},m=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){oe(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),oe(on(h,r.config.emulator)&&on(m,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=m,r.settings.appVerificationDisabledForTesting=!0,Mr(a)?(Wu(`${i}//${a}${u}`),Ku("Auth",!0)):sg()}function _d(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function rg(n){const e=_d(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:bl(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:bl(a)}}}function bl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function sg(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return rn("not implemented")}_getIdTokenResponse(e){return rn("not implemented")}_linkToIdToken(e,t){return rn("not implemented")}_getReauthenticationResolver(e){return rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function br(n,e){return Lp(n,"POST","/v1/accounts:signInWithIdp",Aa(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig="http://localhost";class sr extends vd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new sr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):cn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const a=new sr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return br(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,br(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,br(e,t)}buildRequest(){const e={requestUri:ig,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Rs(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs extends Ed{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends xs{constructor(){super("facebook.com")}static credential(e){return sr._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.FACEBOOK_SIGN_IN_METHOD="facebook.com";bn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends xs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return sr._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Tn.credential(t,r)}catch{return null}}}Tn.GOOGLE_SIGN_IN_METHOD="google.com";Tn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends xs{constructor(){super("github.com")}static credential(e){return sr._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return An.credential(e.oauthAccessToken)}catch{return null}}}An.GITHUB_SIGN_IN_METHOD="github.com";An.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends xs{constructor(){super("twitter.com")}static credential(e,t){return sr._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Cn.credential(t,r)}catch{return null}}}Cn.TWITTER_SIGN_IN_METHOD="twitter.com";Cn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Vt._fromIdTokenResponse(e,r,s),a=Tl(r);return new Cr({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Tl(r);return new Cr({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Tl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi extends hn{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,vi.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new vi(e,t,r,s)}}function Id(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?vi._fromErrorAndOperation(n,i,e,r):i})}async function og(n,e,t=!1){const r=await _s(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Cr._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ag(n,e,t=!1){const{auth:r}=n;if(zt(r.app))return Promise.reject(er(r));const s="reauthenticate";try{const i=await _s(n,Id(r,s,e,n),t);oe(i.idToken,r,"internal-error");const a=Ca(i.idToken);oe(a,r,"internal-error");const{sub:l}=a;return oe(n.uid===l,r,"user-mismatch"),Cr._forOperation(n,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&cn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cg(n,e,t=!1){if(zt(n.app))return Promise.reject(er(n));const r="signIn",s=await Id(n,r,e),i=await Cr._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function lg(n,e,t,r){return qe(n).onIdTokenChanged(e,t,r)}function ug(n,e,t){return qe(n).beforeAuthStateChanged(e,t)}function dg(n,e,t,r){return qe(n).onAuthStateChanged(e,t,r)}function hg(n){return qe(n).signOut()}const Ei="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ei,"1"),this.storage.removeItem(Ei),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg=1e3,mg=10;class bd extends wd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=gd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);Hp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,mg):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},fg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}bd.type="LOCAL";const pg=bd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td extends wd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Td.type="SESSION";const Ad=Td;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new qi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async h=>h(t.origin,i)),u=await gg(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,u)=>{const h=xa("",20);s.port1.start();const m=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const _=p;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(_.data.response);break;default:clearTimeout(m),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(){return window}function _g(n){Wt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(){return typeof Wt().WorkerGlobalScope<"u"&&typeof Wt().importScripts=="function"}async function vg(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Eg(){return navigator?.serviceWorker?.controller||null}function Ig(){return Cd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd="firebaseLocalStorageDb",wg=1,Ii="firebaseLocalStorage",Rd="fbase_key";class ks{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function $i(n,e){return n.transaction([Ii],e?"readwrite":"readonly").objectStore(Ii)}function bg(){const n=indexedDB.deleteDatabase(Sd);return new ks(n).toPromise()}function Ko(){const n=indexedDB.open(Sd,wg);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ii,{keyPath:Rd})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ii)?e(r):(r.close(),await bg(),e(await Ko()))})})}async function Al(n,e,t){const r=$i(n,!0).put({[Rd]:e,value:t});return new ks(r).toPromise()}async function Tg(n,e){const t=$i(n,!1).get(e),r=await new ks(t).toPromise();return r===void 0?null:r.value}function Cl(n,e){const t=$i(n,!0).delete(e);return new ks(t).toPromise()}const Ag=800,Cg=3;class Pd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ko(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Cg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Cd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qi._getInstance(Ig()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await vg(),!this.activeServiceWorker)return;this.sender=new yg(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Eg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ko();return await Al(e,Ei,"1"),await Cl(e,Ei),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Al(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Tg(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Cl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=$i(s,!1).getAll();return new ks(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ag)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pd.type="LOCAL";const Sg=Pd;new Ps(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rg(n,e){return e?sn(e):(oe(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka extends vd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return br(e,this._buildIdpRequest())}_linkToIdToken(e,t){return br(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return br(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Pg(n){return cg(n.auth,new ka(n),n.bypassAuthState)}function xg(n){const{auth:e,user:t}=n;return oe(t,e,"internal-error"),ag(t,new ka(n),n.bypassAuthState)}async function kg(n){const{auth:e,user:t}=n;return oe(t,e,"internal-error"),og(t,new ka(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Pg;case"linkViaPopup":case"linkViaRedirect":return kg;case"reauthViaPopup":case"reauthViaRedirect":return xg;default:cn(this.auth,"internal-error")}}resolve(e){ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng=new Ps(2e3,1e4);class vr extends xd{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,vr.currentPopupAction&&vr.currentPopupAction.cancel(),vr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return oe(e,this.auth,"internal-error"),e}async onExecution(){ln(this.filter.length===1,"Popup operations only handle one event");const e=xa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vr.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ng.get())};e()}}vr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg="pendingRedirect",oi=new Map;class Dg extends xd{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=oi.get(this.auth._key());if(!e){try{const r=await Vg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}oi.set(this.auth._key(),e)}return this.bypassAuthState||oi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Vg(n,e){const t=Fg(e),r=Og(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Mg(n,e){oi.set(n._key(),e)}function Og(n){return sn(n._redirectPersistence)}function Fg(n){return ii(Lg,n.config.apiKey,n.name)}async function Ug(n,e,t=!1){if(zt(n.app))return Promise.reject(er(n));const r=Ra(n),s=Rg(r,e),a=await new Dg(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg=600*1e3;class jg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qg(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!kd(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(Gt(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Bg&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sl(e))}saveEventToCache(e){this.cachedEventUids.add(Sl(e)),this.lastProcessedEventTime=Date.now()}}function Sl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function kd({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function qg(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kd(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $g(n,e={}){return Fr(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zg=/^https?/;async function Gg(n){if(n.config.emulator)return;const{authorizedDomains:e}=await $g(n);for(const t of e)try{if(Wg(t))return}catch{}cn(n,"unauthorized-domain")}function Wg(n){const e=Go(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!zg.test(t))return!1;if(Hg.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg=new Ps(3e4,6e4);function Rl(){const n=Wt().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Qg(n){return new Promise((e,t)=>{function r(){Rl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Rl(),t(Gt(n,"network-request-failed"))},timeout:Kg.get()})}if(Wt().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Wt().gapi?.load)r();else{const s=Zp("iframefcb");return Wt()[s]=()=>{gapi.load?r():t(Gt(n,"network-request-failed"))},Xp(`${Yp()}?onload=${s}`).catch(i=>t(i))}}).catch(e=>{throw ai=null,e})}let ai=null;function Jg(n){return ai=ai||Qg(n),ai}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg=new Ps(5e3,15e3),Yg="__/auth/iframe",Zg="emulator/auth/iframe",ey={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ty=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ny(n){const e=n.config;oe(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ta(e,Zg):`https://${n.config.authDomain}/${Yg}`,r={apiKey:e.apiKey,appName:n.name,v:Or},s=ty.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Rs(r).slice(1)}`}async function ry(n){const e=await Jg(n),t=Wt().gapi;return oe(t,n,"internal-error"),e.open({where:document.body,url:ny(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ey,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Gt(n,"network-request-failed"),l=Wt().setTimeout(()=>{i(a)},Xg.get());function u(){Wt().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},iy=500,oy=600,ay="_blank",cy="http://localhost";class Pl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ly(n,e,t,r=iy,s=oy){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...sy,width:r.toString(),height:s.toString(),top:i,left:a},h=mt().toLowerCase();t&&(l=dd(h)?ay:t),ld(h)&&(e=e||cy,u.scrollbars="yes");const m=Object.entries(u).reduce((_,[R,P])=>`${_}${R}=${P},`,"");if($p(h)&&l!=="_self")return uy(e||"",l),new Pl(null);const p=window.open(e||"",l,m);oe(p,n,"popup-blocked");try{p.focus()}catch{}return new Pl(p)}function uy(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy="__/auth/handler",hy="emulator/auth/handler",fy=encodeURIComponent("fac");async function xl(n,e,t,r,s,i){oe(n.config.authDomain,n,"auth-domain-config-required"),oe(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Or,eventId:s};if(e instanceof Ed){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",fm(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,p]of Object.entries({}))a[m]=p}if(e instanceof xs){const m=e.getScopes().filter(p=>p!=="");m.length>0&&(a.scopes=m.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const m of Object.keys(l))l[m]===void 0&&delete l[m];const u=await n._getAppCheckToken(),h=u?`#${fy}=${encodeURIComponent(u)}`:"";return`${my(n)}?${Rs(l).slice(1)}${h}`}function my({config:n}){return n.emulator?Ta(n,hy):`https://${n.authDomain}/${dy}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo="webStorageSupport";class py{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ad,this._completeRedirectFn=Ug,this._overrideRedirectResult=Mg}async _openPopup(e,t,r,s){ln(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await xl(e,t,r,Go(),s);return ly(e,i,xa())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await xl(e,t,r,Go(),s);return _g(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(ln(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await ry(e),r=new jg(e);return t.register("authEvent",s=>(oe(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(xo,{type:xo},s=>{const i=s?.[0]?.[xo];i!==void 0&&t(!!i),cn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Gg(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return gd()||ud()||Sa()}}const gy=py;var kl="@firebase/auth",Nl="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _y(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function vy(n){Ar(new rr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;oe(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yd(n)},h=new Qp(r,s,i,u);return tg(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Ar(new rr("auth-internal",e=>{const t=Ra(e.getProvider("auth").getImmediate());return(r=>new yy(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),kn(kl,Nl,_y(n)),kn(kl,Nl,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey=300,Iy=Gu("authIdTokenMaxAge")||Ey;let Ll=null;const wy=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Iy)return;const s=t?.token;Ll!==s&&(Ll=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function by(n=Yu()){const e=wa(n,"auth");if(e.isInitialized())return e.getImmediate();const t=eg(n,{popupRedirectResolver:gy,persistence:[Sg,pg,Ad]}),r=Gu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=wy(i.toString());ug(t,a,()=>a(t.currentUser)),lg(t,l=>a(l))}}const s=Hu("auth");return s&&ng(t,`http://${s}`),t}function Ty(){return document.getElementsByTagName("head")?.[0]??document}Jp({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Gt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",Ty().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});vy("Browser");var Ay="firebase",Cy="12.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kn(Ay,Cy,"app");var Dl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Nn,Nd;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,g){function y(){}y.prototype=g.prototype,I.F=g.prototype,I.prototype=new y,I.prototype.constructor=I,I.D=function(w,E,b){for(var v=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)v[xe-2]=arguments[xe];return g.prototype[E].apply(w,v)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,g,y){y||(y=0);const w=Array(16);if(typeof g=="string")for(var E=0;E<16;++E)w[E]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(E=0;E<16;++E)w[E]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=I.g[0],y=I.g[1],E=I.g[2];let b=I.g[3],v;v=g+(b^y&(E^b))+w[0]+3614090360&4294967295,g=y+(v<<7&4294967295|v>>>25),v=b+(E^g&(y^E))+w[1]+3905402710&4294967295,b=g+(v<<12&4294967295|v>>>20),v=E+(y^b&(g^y))+w[2]+606105819&4294967295,E=b+(v<<17&4294967295|v>>>15),v=y+(g^E&(b^g))+w[3]+3250441966&4294967295,y=E+(v<<22&4294967295|v>>>10),v=g+(b^y&(E^b))+w[4]+4118548399&4294967295,g=y+(v<<7&4294967295|v>>>25),v=b+(E^g&(y^E))+w[5]+1200080426&4294967295,b=g+(v<<12&4294967295|v>>>20),v=E+(y^b&(g^y))+w[6]+2821735955&4294967295,E=b+(v<<17&4294967295|v>>>15),v=y+(g^E&(b^g))+w[7]+4249261313&4294967295,y=E+(v<<22&4294967295|v>>>10),v=g+(b^y&(E^b))+w[8]+1770035416&4294967295,g=y+(v<<7&4294967295|v>>>25),v=b+(E^g&(y^E))+w[9]+2336552879&4294967295,b=g+(v<<12&4294967295|v>>>20),v=E+(y^b&(g^y))+w[10]+4294925233&4294967295,E=b+(v<<17&4294967295|v>>>15),v=y+(g^E&(b^g))+w[11]+2304563134&4294967295,y=E+(v<<22&4294967295|v>>>10),v=g+(b^y&(E^b))+w[12]+1804603682&4294967295,g=y+(v<<7&4294967295|v>>>25),v=b+(E^g&(y^E))+w[13]+4254626195&4294967295,b=g+(v<<12&4294967295|v>>>20),v=E+(y^b&(g^y))+w[14]+2792965006&4294967295,E=b+(v<<17&4294967295|v>>>15),v=y+(g^E&(b^g))+w[15]+1236535329&4294967295,y=E+(v<<22&4294967295|v>>>10),v=g+(E^b&(y^E))+w[1]+4129170786&4294967295,g=y+(v<<5&4294967295|v>>>27),v=b+(y^E&(g^y))+w[6]+3225465664&4294967295,b=g+(v<<9&4294967295|v>>>23),v=E+(g^y&(b^g))+w[11]+643717713&4294967295,E=b+(v<<14&4294967295|v>>>18),v=y+(b^g&(E^b))+w[0]+3921069994&4294967295,y=E+(v<<20&4294967295|v>>>12),v=g+(E^b&(y^E))+w[5]+3593408605&4294967295,g=y+(v<<5&4294967295|v>>>27),v=b+(y^E&(g^y))+w[10]+38016083&4294967295,b=g+(v<<9&4294967295|v>>>23),v=E+(g^y&(b^g))+w[15]+3634488961&4294967295,E=b+(v<<14&4294967295|v>>>18),v=y+(b^g&(E^b))+w[4]+3889429448&4294967295,y=E+(v<<20&4294967295|v>>>12),v=g+(E^b&(y^E))+w[9]+568446438&4294967295,g=y+(v<<5&4294967295|v>>>27),v=b+(y^E&(g^y))+w[14]+3275163606&4294967295,b=g+(v<<9&4294967295|v>>>23),v=E+(g^y&(b^g))+w[3]+4107603335&4294967295,E=b+(v<<14&4294967295|v>>>18),v=y+(b^g&(E^b))+w[8]+1163531501&4294967295,y=E+(v<<20&4294967295|v>>>12),v=g+(E^b&(y^E))+w[13]+2850285829&4294967295,g=y+(v<<5&4294967295|v>>>27),v=b+(y^E&(g^y))+w[2]+4243563512&4294967295,b=g+(v<<9&4294967295|v>>>23),v=E+(g^y&(b^g))+w[7]+1735328473&4294967295,E=b+(v<<14&4294967295|v>>>18),v=y+(b^g&(E^b))+w[12]+2368359562&4294967295,y=E+(v<<20&4294967295|v>>>12),v=g+(y^E^b)+w[5]+4294588738&4294967295,g=y+(v<<4&4294967295|v>>>28),v=b+(g^y^E)+w[8]+2272392833&4294967295,b=g+(v<<11&4294967295|v>>>21),v=E+(b^g^y)+w[11]+1839030562&4294967295,E=b+(v<<16&4294967295|v>>>16),v=y+(E^b^g)+w[14]+4259657740&4294967295,y=E+(v<<23&4294967295|v>>>9),v=g+(y^E^b)+w[1]+2763975236&4294967295,g=y+(v<<4&4294967295|v>>>28),v=b+(g^y^E)+w[4]+1272893353&4294967295,b=g+(v<<11&4294967295|v>>>21),v=E+(b^g^y)+w[7]+4139469664&4294967295,E=b+(v<<16&4294967295|v>>>16),v=y+(E^b^g)+w[10]+3200236656&4294967295,y=E+(v<<23&4294967295|v>>>9),v=g+(y^E^b)+w[13]+681279174&4294967295,g=y+(v<<4&4294967295|v>>>28),v=b+(g^y^E)+w[0]+3936430074&4294967295,b=g+(v<<11&4294967295|v>>>21),v=E+(b^g^y)+w[3]+3572445317&4294967295,E=b+(v<<16&4294967295|v>>>16),v=y+(E^b^g)+w[6]+76029189&4294967295,y=E+(v<<23&4294967295|v>>>9),v=g+(y^E^b)+w[9]+3654602809&4294967295,g=y+(v<<4&4294967295|v>>>28),v=b+(g^y^E)+w[12]+3873151461&4294967295,b=g+(v<<11&4294967295|v>>>21),v=E+(b^g^y)+w[15]+530742520&4294967295,E=b+(v<<16&4294967295|v>>>16),v=y+(E^b^g)+w[2]+3299628645&4294967295,y=E+(v<<23&4294967295|v>>>9),v=g+(E^(y|~b))+w[0]+4096336452&4294967295,g=y+(v<<6&4294967295|v>>>26),v=b+(y^(g|~E))+w[7]+1126891415&4294967295,b=g+(v<<10&4294967295|v>>>22),v=E+(g^(b|~y))+w[14]+2878612391&4294967295,E=b+(v<<15&4294967295|v>>>17),v=y+(b^(E|~g))+w[5]+4237533241&4294967295,y=E+(v<<21&4294967295|v>>>11),v=g+(E^(y|~b))+w[12]+1700485571&4294967295,g=y+(v<<6&4294967295|v>>>26),v=b+(y^(g|~E))+w[3]+2399980690&4294967295,b=g+(v<<10&4294967295|v>>>22),v=E+(g^(b|~y))+w[10]+4293915773&4294967295,E=b+(v<<15&4294967295|v>>>17),v=y+(b^(E|~g))+w[1]+2240044497&4294967295,y=E+(v<<21&4294967295|v>>>11),v=g+(E^(y|~b))+w[8]+1873313359&4294967295,g=y+(v<<6&4294967295|v>>>26),v=b+(y^(g|~E))+w[15]+4264355552&4294967295,b=g+(v<<10&4294967295|v>>>22),v=E+(g^(b|~y))+w[6]+2734768916&4294967295,E=b+(v<<15&4294967295|v>>>17),v=y+(b^(E|~g))+w[13]+1309151649&4294967295,y=E+(v<<21&4294967295|v>>>11),v=g+(E^(y|~b))+w[4]+4149444226&4294967295,g=y+(v<<6&4294967295|v>>>26),v=b+(y^(g|~E))+w[11]+3174756917&4294967295,b=g+(v<<10&4294967295|v>>>22),v=E+(g^(b|~y))+w[2]+718787259&4294967295,E=b+(v<<15&4294967295|v>>>17),v=y+(b^(E|~g))+w[9]+3951481745&4294967295,I.g[0]=I.g[0]+g&4294967295,I.g[1]=I.g[1]+(E+(v<<21&4294967295|v>>>11))&4294967295,I.g[2]=I.g[2]+E&4294967295,I.g[3]=I.g[3]+b&4294967295}r.prototype.v=function(I,g){g===void 0&&(g=I.length);const y=g-this.blockSize,w=this.C;let E=this.h,b=0;for(;b<g;){if(E==0)for(;b<=y;)s(this,I,b),b+=this.blockSize;if(typeof I=="string"){for(;b<g;)if(w[E++]=I.charCodeAt(b++),E==this.blockSize){s(this,w),E=0;break}}else for(;b<g;)if(w[E++]=I[b++],E==this.blockSize){s(this,w),E=0;break}}this.h=E,this.o+=g},r.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var g=1;g<I.length-8;++g)I[g]=0;g=this.o*8;for(var y=I.length-8;y<I.length;++y)I[y]=g&255,g/=256;for(this.v(I),I=Array(16),g=0,y=0;y<4;++y)for(let w=0;w<32;w+=8)I[g++]=this.g[y]>>>w&255;return I};function i(I,g){var y=l;return Object.prototype.hasOwnProperty.call(y,I)?y[I]:y[I]=g(I)}function a(I,g){this.h=g;const y=[];let w=!0;for(let E=I.length-1;E>=0;E--){const b=I[E]|0;w&&b==g||(y[E]=b,w=!1)}this.g=y}var l={};function u(I){return-128<=I&&I<128?i(I,function(g){return new a([g|0],g<0?-1:0)}):new a([I|0],I<0?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return p;if(I<0)return D(h(-I));const g=[];let y=1;for(let w=0;I>=y;w++)g[w]=I/y|0,y*=4294967296;return new a(g,0)}function m(I,g){if(I.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(I.charAt(0)=="-")return D(m(I.substring(1),g));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=h(Math.pow(g,8));let w=p;for(let b=0;b<I.length;b+=8){var E=Math.min(8,I.length-b);const v=parseInt(I.substring(b,b+E),g);E<8?(E=h(Math.pow(g,E)),w=w.j(E).add(h(v))):(w=w.j(y),w=w.add(h(v)))}return w}var p=u(0),_=u(1),R=u(16777216);n=a.prototype,n.m=function(){if(M(this))return-D(this).m();let I=0,g=1;for(let y=0;y<this.g.length;y++){const w=this.i(y);I+=(w>=0?w:4294967296+w)*g,g*=4294967296}return I},n.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(P(this))return"0";if(M(this))return"-"+D(this).toString(I);const g=h(Math.pow(I,6));var y=this;let w="";for(;;){const E=ne(y,g).g;y=W(y,E.j(g));let b=((y.g.length>0?y.g[0]:y.h)>>>0).toString(I);if(y=E,P(y))return b+w;for(;b.length<6;)b="0"+b;w=b+w}},n.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function P(I){if(I.h!=0)return!1;for(let g=0;g<I.g.length;g++)if(I.g[g]!=0)return!1;return!0}function M(I){return I.h==-1}n.l=function(I){return I=W(this,I),M(I)?-1:P(I)?0:1};function D(I){const g=I.g.length,y=[];for(let w=0;w<g;w++)y[w]=~I.g[w];return new a(y,~I.h).add(_)}n.abs=function(){return M(this)?D(this):this},n.add=function(I){const g=Math.max(this.g.length,I.g.length),y=[];let w=0;for(let E=0;E<=g;E++){let b=w+(this.i(E)&65535)+(I.i(E)&65535),v=(b>>>16)+(this.i(E)>>>16)+(I.i(E)>>>16);w=v>>>16,b&=65535,v&=65535,y[E]=v<<16|b}return new a(y,y[y.length-1]&-2147483648?-1:0)};function W(I,g){return I.add(D(g))}n.j=function(I){if(P(this)||P(I))return p;if(M(this))return M(I)?D(this).j(D(I)):D(D(this).j(I));if(M(I))return D(this.j(D(I)));if(this.l(R)<0&&I.l(R)<0)return h(this.m()*I.m());const g=this.g.length+I.g.length,y=[];for(var w=0;w<2*g;w++)y[w]=0;for(w=0;w<this.g.length;w++)for(let E=0;E<I.g.length;E++){const b=this.i(w)>>>16,v=this.i(w)&65535,xe=I.i(E)>>>16,re=I.i(E)&65535;y[2*w+2*E]+=v*re,ce(y,2*w+2*E),y[2*w+2*E+1]+=b*re,ce(y,2*w+2*E+1),y[2*w+2*E+1]+=v*xe,ce(y,2*w+2*E+1),y[2*w+2*E+2]+=b*xe,ce(y,2*w+2*E+2)}for(I=0;I<g;I++)y[I]=y[2*I+1]<<16|y[2*I];for(I=g;I<2*g;I++)y[I]=0;return new a(y,0)};function ce(I,g){for(;(I[g]&65535)!=I[g];)I[g+1]+=I[g]>>>16,I[g]&=65535,g++}function $(I,g){this.g=I,this.h=g}function ne(I,g){if(P(g))throw Error("division by zero");if(P(I))return new $(p,p);if(M(I))return g=ne(D(I),g),new $(D(g.g),D(g.h));if(M(g))return g=ne(I,D(g)),new $(D(g.g),g.h);if(I.g.length>30){if(M(I)||M(g))throw Error("slowDivide_ only works with positive integers.");for(var y=_,w=g;w.l(I)<=0;)y=Q(y),w=Q(w);var E=Z(y,1),b=Z(w,1);for(w=Z(w,2),y=Z(y,2);!P(w);){var v=b.add(w);v.l(I)<=0&&(E=E.add(y),b=v),w=Z(w,1),y=Z(y,1)}return g=W(I,E.j(g)),new $(E,g)}for(E=p;I.l(g)>=0;){for(y=Math.max(1,Math.floor(I.m()/g.m())),w=Math.ceil(Math.log(y)/Math.LN2),w=w<=48?1:Math.pow(2,w-48),b=h(y),v=b.j(g);M(v)||v.l(I)>0;)y-=w,b=h(y),v=b.j(g);P(b)&&(b=_),E=E.add(b),I=W(I,v)}return new $(E,I)}n.B=function(I){return ne(this,I).h},n.and=function(I){const g=Math.max(this.g.length,I.g.length),y=[];for(let w=0;w<g;w++)y[w]=this.i(w)&I.i(w);return new a(y,this.h&I.h)},n.or=function(I){const g=Math.max(this.g.length,I.g.length),y=[];for(let w=0;w<g;w++)y[w]=this.i(w)|I.i(w);return new a(y,this.h|I.h)},n.xor=function(I){const g=Math.max(this.g.length,I.g.length),y=[];for(let w=0;w<g;w++)y[w]=this.i(w)^I.i(w);return new a(y,this.h^I.h)};function Q(I){const g=I.g.length+1,y=[];for(let w=0;w<g;w++)y[w]=I.i(w)<<1|I.i(w-1)>>>31;return new a(y,I.h)}function Z(I,g){const y=g>>5;g%=32;const w=I.g.length-y,E=[];for(let b=0;b<w;b++)E[b]=g>0?I.i(b+y)>>>g|I.i(b+y+1)<<32-g:I.i(b+y);return new a(E,I.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Nd=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=m,Nn=a}).apply(typeof Dl<"u"?Dl:typeof self<"u"?self:typeof window<"u"?window:{});var Ys=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ld,is,Dd,ci,Qo,Vd,Md,Od;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ys=="object"&&Ys];for(var c=0;c<o.length;++c){var d=o[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(o,c){if(c)e:{var d=r;o=o.split(".");for(var f=0;f<o.length-1;f++){var T=o[f];if(!(T in d))break e;d=d[T]}o=o[o.length-1],f=d[o],c=c(f),c!=f&&c!=null&&e(d,o,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(c){var d=[],f;for(f in c)Object.prototype.hasOwnProperty.call(c,f)&&d.push([f,c[f]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function l(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function u(o,c,d){return o.call.apply(o.bind,arguments)}function h(o,c,d){return h=u,h.apply(null,arguments)}function m(o,c){var d=Array.prototype.slice.call(arguments,1);return function(){var f=d.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function p(o,c){function d(){}d.prototype=c.prototype,o.Z=c.prototype,o.prototype=new d,o.prototype.constructor=o,o.Ob=function(f,T,S){for(var U=Array(arguments.length-2),me=2;me<arguments.length;me++)U[me-2]=arguments[me];return c.prototype[T].apply(f,U)}}var _=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function R(o){const c=o.length;if(c>0){const d=Array(c);for(let f=0;f<c;f++)d[f]=o[f];return d}return[]}function P(o,c){for(let f=1;f<arguments.length;f++){const T=arguments[f];var d=typeof T;if(d=d!="object"?d:T?Array.isArray(T)?"array":d:"null",d=="array"||d=="object"&&typeof T.length=="number"){d=o.length||0;const S=T.length||0;o.length=d+S;for(let U=0;U<S;U++)o[d+U]=T[U]}else o.push(T)}}class M{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function D(o){a.setTimeout(()=>{throw o},0)}function W(){var o=I;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class ce{constructor(){this.h=this.g=null}add(c,d){const f=$.get();f.set(c,d),this.h?this.h.next=f:this.g=f,this.h=f}}var $=new M(()=>new ne,o=>o.reset());class ne{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Q,Z=!1,I=new ce,g=()=>{const o=Promise.resolve(void 0);Q=()=>{o.then(y)}};function y(){for(var o;o=W();){try{o.h.call(o.g)}catch(d){D(d)}var c=$;c.j(o),c.h<100&&(c.h++,o.next=c.g,c.g=o)}Z=!1}function w(){this.u=this.u,this.C=this.C}w.prototype.u=!1,w.prototype.dispose=function(){this.u||(this.u=!0,this.N())},w.prototype[Symbol.dispose]=function(){this.dispose()},w.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var b=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};a.addEventListener("test",d,c),a.removeEventListener("test",d,c)}catch{}return o})();function v(o){return/^[\s\xa0]*$/.test(o)}function xe(o,c){E.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,c)}p(xe,E),xe.prototype.init=function(o,c){const d=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget,c||(d=="mouseover"?c=o.fromElement:d=="mouseout"&&(c=o.toElement)),this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&xe.Z.h.call(this)},xe.prototype.h=function(){xe.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var re="closure_listenable_"+(Math.random()*1e6|0),z=0;function pe(o,c,d,f,T){this.listener=o,this.proxy=null,this.src=c,this.type=d,this.capture=!!f,this.ha=T,this.key=++z,this.da=this.fa=!1}function de(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Ae(o,c,d){for(const f in o)c.call(d,o[f],f,o)}function Te(o,c){for(const d in o)c.call(void 0,o[d],d,o)}function Fe(o){const c={};for(const d in o)c[d]=o[d];return c}const ge="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ke(o,c){let d,f;for(let T=1;T<arguments.length;T++){f=arguments[T];for(d in f)o[d]=f[d];for(let S=0;S<ge.length;S++)d=ge[S],Object.prototype.hasOwnProperty.call(f,d)&&(o[d]=f[d])}}function Ne(o){this.src=o,this.g={},this.h=0}Ne.prototype.add=function(o,c,d,f,T){const S=o.toString();o=this.g[S],o||(o=this.g[S]=[],this.h++);const U=ie(o,c,f,T);return U>-1?(c=o[U],d||(c.fa=!1)):(c=new pe(c,this.src,S,!!f,T),c.fa=d,o.push(c)),c};function $e(o,c){const d=c.type;if(d in o.g){var f=o.g[d],T=Array.prototype.indexOf.call(f,c,void 0),S;(S=T>=0)&&Array.prototype.splice.call(f,T,1),S&&(de(c),o.g[d].length==0&&(delete o.g[d],o.h--))}}function ie(o,c,d,f){for(let T=0;T<o.length;++T){const S=o[T];if(!S.da&&S.listener==c&&S.capture==!!d&&S.ha==f)return T}return-1}var ee="closure_lm_"+(Math.random()*1e6|0),G={};function K(o,c,d,f,T){if(Array.isArray(c)){for(let S=0;S<c.length;S++)K(o,c[S],d,f,T);return null}return d=js(d),o&&o[re]?o.J(c,d,l(f)?!!f.capture:!1,T):le(o,c,d,!1,f,T)}function le(o,c,d,f,T,S){if(!c)throw Error("Invalid event type");const U=l(T)?!!T.capture:!!T;let me=kt(o);if(me||(o[ee]=me=new Ne(o)),d=me.add(c,d,f,U,S),d.proxy)return d;if(f=Ce(),d.proxy=f,f.src=o,f.listener=d,o.addEventListener)b||(T=U),T===void 0&&(T=!1),o.addEventListener(c.toString(),f,T);else if(o.attachEvent)o.attachEvent(tn(c.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Ce(){function o(d){return c.call(o.src,o.listener,d)}const c=fn;return o}function jt(o,c,d,f,T){if(Array.isArray(c))for(var S=0;S<c.length;S++)jt(o,c[S],d,f,T);else f=l(f)?!!f.capture:!!f,d=js(d),o&&o[re]?(o=o.i,S=String(c).toString(),S in o.g&&(c=o.g[S],d=ie(c,d,f,T),d>-1&&(de(c[d]),Array.prototype.splice.call(c,d,1),c.length==0&&(delete o.g[S],o.h--)))):o&&(o=kt(o))&&(c=o.g[c.toString()],o=-1,c&&(o=ie(c,d,f,T)),(d=o>-1?c[o]:null)&&en(d))}function en(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[re])$e(c.i,o);else{var d=o.type,f=o.proxy;c.removeEventListener?c.removeEventListener(d,f,o.capture):c.detachEvent?c.detachEvent(tn(d),f):c.addListener&&c.removeListener&&c.removeListener(f),(d=kt(c))?($e(d,o),d.h==0&&(d.src=null,c[ee]=null)):de(o)}}}function tn(o){return o in G?G[o]:G[o]="on"+o}function fn(o,c){if(o.da)o=!0;else{c=new xe(c,this);const d=o.listener,f=o.ha||o.src;o.fa&&en(o),o=d.call(f,c)}return o}function kt(o){return o=o[ee],o instanceof Ne?o:null}var Wr="__closure_events_fn_"+(Math.random()*1e9>>>0);function js(o){return typeof o=="function"?o:(o[Wr]||(o[Wr]=function(c){return o.handleEvent(c)}),o[Wr])}function et(){w.call(this),this.i=new Ne(this),this.M=this,this.G=null}p(et,w),et.prototype[re]=!0,et.prototype.removeEventListener=function(o,c,d,f){jt(this,o,c,d,f)};function A(o,c){var d,f=o.G;if(f)for(d=[];f;f=f.G)d.push(f);if(o=o.M,f=c.type||c,typeof c=="string")c=new E(c,o);else if(c instanceof E)c.target=c.target||o;else{var T=c;c=new E(f,o),ke(c,T)}T=!0;let S,U;if(d)for(U=d.length-1;U>=0;U--)S=c.g=d[U],T=C(S,f,!0,c)&&T;if(S=c.g=o,T=C(S,f,!0,c)&&T,T=C(S,f,!1,c)&&T,d)for(U=0;U<d.length;U++)S=c.g=d[U],T=C(S,f,!1,c)&&T}et.prototype.N=function(){if(et.Z.N.call(this),this.i){var o=this.i;for(const c in o.g){const d=o.g[c];for(let f=0;f<d.length;f++)de(d[f]);delete o.g[c],o.h--}}this.G=null},et.prototype.J=function(o,c,d,f){return this.i.add(String(o),c,!1,d,f)},et.prototype.K=function(o,c,d,f){return this.i.add(String(o),c,!0,d,f)};function C(o,c,d,f){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();let T=!0;for(let S=0;S<c.length;++S){const U=c[S];if(U&&!U.da&&U.capture==d){const me=U.listener,Xe=U.ha||U.src;U.fa&&$e(o.i,U),T=me.call(Xe,f)!==!1&&T}}return T&&!f.defaultPrevented}function V(o,c){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=h(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(o,c||0)}function L(o){o.g=V(()=>{o.g=null,o.i&&(o.i=!1,L(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class x extends w{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:L(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function O(o){w.call(this),this.h=o,this.g={}}p(O,w);var H=[];function j(o){Ae(o.g,function(c,d){this.g.hasOwnProperty(d)&&en(c)},o),o.g={}}O.prototype.N=function(){O.Z.N.call(this),j(this)},O.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var X=a.JSON.stringify,he=a.JSON.parse,J=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function ue(){}function Se(){}var Le={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function pt(){E.call(this,"d")}p(pt,E);function st(){E.call(this,"c")}p(st,E);var He={},Et=null;function gt(){return Et=Et||new et}He.Ia="serverreachability";function ze(o){E.call(this,He.Ia,o)}p(ze,E);function Pt(o){const c=gt();A(c,new ze(c))}He.STAT_EVENT="statevent";function ut(o,c){E.call(this,He.STAT_EVENT,o),this.stat=c}p(ut,E);function be(o){const c=gt();A(c,new ut(c,o))}He.Ja="timingevent";function Nt(o,c){E.call(this,He.Ja,o),this.size=c}p(Nt,E);function Lt(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},c)}function It(){this.g=!0}It.prototype.ua=function(){this.g=!1};function Dt(o,c,d,f,T,S){o.info(function(){if(o.g)if(S){var U="",me=S.split("&");for(let Pe=0;Pe<me.length;Pe++){var Xe=me[Pe].split("=");if(Xe.length>1){const tt=Xe[0];Xe=Xe[1];const $t=tt.split("_");U=$t.length>=2&&$t[1]=="type"?U+(tt+"="+Xe+"&"):U+(tt+"=redacted&")}}}else U=null;else U=S;return"XMLHTTP REQ ("+f+") [attempt "+T+"]: "+c+`
`+d+`
`+U})}function mn(o,c,d,f,T,S,U){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+T+"]: "+c+`
`+d+`
`+S+" "+U})}function yt(o,c,d,f){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+zn(o,d)+(f?" "+f:"")})}function Hn(o,c){o.info(function(){return"TIMEOUT: "+c})}It.prototype.info=function(){};function zn(o,c){if(!o.g)return c;if(!c)return null;try{const S=JSON.parse(c);if(S){for(o=0;o<S.length;o++)if(Array.isArray(S[o])){var d=S[o];if(!(d.length<2)){var f=d[1];if(Array.isArray(f)&&!(f.length<1)){var T=f[0];if(T!="noop"&&T!="stop"&&T!="close")for(let U=1;U<f.length;U++)f[U]=""}}}}return X(S)}catch{return c}}var xt={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},pn={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},bt;function lo(){}p(lo,ue),lo.prototype.g=function(){return new XMLHttpRequest},bt=new lo;function Kr(o){return encodeURIComponent(String(o))}function bf(o){var c=1;o=o.split(":");const d=[];for(;c>0&&o.length;)d.push(o.shift()),c--;return o.length&&d.push(o.join(":")),d}function gn(o,c,d,f){this.j=o,this.i=c,this.l=d,this.S=f||1,this.V=new O(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new bc}function bc(){this.i=null,this.g="",this.h=!1}var Tc={},uo={};function ho(o,c,d){o.M=1,o.A=$s(qt(c)),o.u=d,o.R=!0,Ac(o,null)}function Ac(o,c){o.F=Date.now(),qs(o),o.B=qt(o.A);var d=o.B,f=o.S;Array.isArray(f)||(f=[String(f)]),Fc(d.i,"t",f),o.C=0,d=o.j.L,o.h=new bc,o.g=nl(o.j,d?c:null,!o.u),o.P>0&&(o.O=new x(h(o.Y,o,o.g),o.P)),c=o.V,d=o.g,f=o.ba;var T="readystatechange";Array.isArray(T)||(T&&(H[0]=T.toString()),T=H);for(let S=0;S<T.length;S++){const U=K(d,T[S],f||c.handleEvent,!1,c.h||c);if(!U)break;c.g[U.key]=U}c=o.J?Fe(o.J):{},o.u?(o.v||(o.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,c)):(o.v="GET",o.g.ea(o.B,o.v,null,c)),Pt(),Dt(o.i,o.v,o.B,o.l,o.S,o.u)}gn.prototype.ba=function(o){o=o.target;const c=this.O;c&&vn(o)==3?c.j():this.Y(o)},gn.prototype.Y=function(o){try{if(o==this.g)e:{const me=vn(this.g),Xe=this.g.ya(),Pe=this.g.ca();if(!(me<3)&&(me!=3||this.g&&(this.h.h||this.g.la()||zc(this.g)))){this.K||me!=4||Xe==7||(Xe==8||Pe<=0?Pt(3):Pt(2)),fo(this);var c=this.g.ca();this.X=c;var d=Tf(this);if(this.o=c==200,mn(this.i,this.v,this.B,this.l,this.S,me,c),this.o){if(this.U&&!this.L){t:{if(this.g){var f,T=this.g;if((f=T.g?T.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(f)){var S=f;break t}}S=null}if(o=S)yt(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,mo(this,o);else{this.o=!1,this.m=3,be(12),Gn(this),Qr(this);break e}}if(this.R){o=!0;let tt;for(;!this.K&&this.C<d.length;)if(tt=Af(this,d),tt==uo){me==4&&(this.m=4,be(14),o=!1),yt(this.i,this.l,null,"[Incomplete Response]");break}else if(tt==Tc){this.m=4,be(15),yt(this.i,this.l,d,"[Invalid Chunk]"),o=!1;break}else yt(this.i,this.l,tt,null),mo(this,tt);if(Cc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),me!=4||d.length!=0||this.h.h||(this.m=1,be(16),o=!1),this.o=this.o&&o,!o)yt(this.i,this.l,d,"[Invalid Chunked Response]"),Gn(this),Qr(this);else if(d.length>0&&!this.W){this.W=!0;var U=this.j;U.g==this&&U.aa&&!U.P&&(U.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),wo(U),U.P=!0,be(11))}}else yt(this.i,this.l,d,null),mo(this,d);me==4&&Gn(this),this.o&&!this.K&&(me==4?Yc(this.j,this):(this.o=!1,qs(this)))}else Uf(this.g),c==400&&d.indexOf("Unknown SID")>0?(this.m=3,be(12)):(this.m=0,be(13)),Gn(this),Qr(this)}}}catch{}finally{}};function Tf(o){if(!Cc(o))return o.g.la();const c=zc(o.g);if(c==="")return"";let d="";const f=c.length,T=vn(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return Gn(o),Qr(o),"";o.h.i=new a.TextDecoder}for(let S=0;S<f;S++)o.h.h=!0,d+=o.h.i.decode(c[S],{stream:!(T&&S==f-1)});return c.length=0,o.h.g+=d,o.C=0,o.h.g}function Cc(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function Af(o,c){var d=o.C,f=c.indexOf(`
`,d);return f==-1?uo:(d=Number(c.substring(d,f)),isNaN(d)?Tc:(f+=1,f+d>c.length?uo:(c=c.slice(f,f+d),o.C=f+d,c)))}gn.prototype.cancel=function(){this.K=!0,Gn(this)};function qs(o){o.T=Date.now()+o.H,Sc(o,o.H)}function Sc(o,c){if(o.D!=null)throw Error("WatchDog timer not null");o.D=Lt(h(o.aa,o),c)}function fo(o){o.D&&(a.clearTimeout(o.D),o.D=null)}gn.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(Hn(this.i,this.B),this.M!=2&&(Pt(),be(17)),Gn(this),this.m=2,Qr(this)):Sc(this,this.T-o)};function Qr(o){o.j.I==0||o.K||Yc(o.j,o)}function Gn(o){fo(o);var c=o.O;c&&typeof c.dispose=="function"&&c.dispose(),o.O=null,j(o.V),o.g&&(c=o.g,o.g=null,c.abort(),c.dispose())}function mo(o,c){try{var d=o.j;if(d.I!=0&&(d.g==o||po(d.h,o))){if(!o.L&&po(d.h,o)&&d.I==3){try{var f=d.Ba.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var T=f;if(T[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<o.F)Ks(d),Gs(d);else break e;Io(d),be(18)}}else d.xa=T[1],0<d.xa-d.K&&T[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Lt(h(d.Va,d),6e3));xc(d.h)<=1&&d.ta&&(d.ta=void 0)}else Kn(d,11)}else if((o.L||d.g==o)&&Ks(d),!v(c))for(T=d.Ba.g.parse(c),c=0;c<T.length;c++){let Pe=T[c];const tt=Pe[0];if(!(tt<=d.K))if(d.K=tt,Pe=Pe[1],d.I==2)if(Pe[0]=="c"){d.M=Pe[1],d.ba=Pe[2];const $t=Pe[3];$t!=null&&(d.ka=$t,d.j.info("VER="+d.ka));const Qn=Pe[4];Qn!=null&&(d.za=Qn,d.j.info("SVER="+d.za));const En=Pe[5];En!=null&&typeof En=="number"&&En>0&&(f=1.5*En,d.O=f,d.j.info("backChannelRequestTimeoutMs_="+f)),f=d;const In=o.g;if(In){const Js=In.g?In.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Js){var S=f.h;S.g||Js.indexOf("spdy")==-1&&Js.indexOf("quic")==-1&&Js.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(go(S,S.h),S.h=null))}if(f.G){const bo=In.g?In.g.getResponseHeader("X-HTTP-Session-Id"):null;bo&&(f.wa=bo,De(f.J,f.G,bo))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-o.F,d.j.info("Handshake RTT: "+d.T+"ms")),f=d;var U=o;if(f.na=tl(f,f.L?f.ba:null,f.W),U.L){kc(f.h,U);var me=U,Xe=f.O;Xe&&(me.H=Xe),me.D&&(fo(me),qs(me)),f.g=U}else Jc(f);d.i.length>0&&Ws(d)}else Pe[0]!="stop"&&Pe[0]!="close"||Kn(d,7);else d.I==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?Kn(d,7):Eo(d):Pe[0]!="noop"&&d.l&&d.l.qa(Pe),d.A=0)}}Pt(4)}catch{}}var Cf=class{constructor(o,c){this.g=o,this.map=c}};function Rc(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Pc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function xc(o){return o.h?1:o.g?o.g.size:0}function po(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function go(o,c){o.g?o.g.add(c):o.h=c}function kc(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}Rc.prototype.cancel=function(){if(this.i=Nc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Nc(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const d of o.g.values())c=c.concat(d.G);return c}return R(o.i)}var Lc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Sf(o,c){if(o){o=o.split("&");for(let d=0;d<o.length;d++){const f=o[d].indexOf("=");let T,S=null;f>=0?(T=o[d].substring(0,f),S=o[d].substring(f+1)):T=o[d],c(T,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function yn(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;o instanceof yn?(this.l=o.l,Jr(this,o.j),this.o=o.o,this.g=o.g,Xr(this,o.u),this.h=o.h,yo(this,Uc(o.i)),this.m=o.m):o&&(c=String(o).match(Lc))?(this.l=!1,Jr(this,c[1]||"",!0),this.o=Yr(c[2]||""),this.g=Yr(c[3]||"",!0),Xr(this,c[4]),this.h=Yr(c[5]||"",!0),yo(this,c[6]||"",!0),this.m=Yr(c[7]||"")):(this.l=!1,this.i=new es(null,this.l))}yn.prototype.toString=function(){const o=[];var c=this.j;c&&o.push(Zr(c,Dc,!0),":");var d=this.g;return(d||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Zr(c,Dc,!0),"@"),o.push(Kr(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&o.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Zr(d,d.charAt(0)=="/"?xf:Pf,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Zr(d,Nf)),o.join("")},yn.prototype.resolve=function(o){const c=qt(this);let d=!!o.j;d?Jr(c,o.j):d=!!o.o,d?c.o=o.o:d=!!o.g,d?c.g=o.g:d=o.u!=null;var f=o.h;if(d)Xr(c,o.u);else if(d=!!o.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var T=c.h.lastIndexOf("/");T!=-1&&(f=c.h.slice(0,T+1)+f)}if(T=f,T==".."||T==".")f="";else if(T.indexOf("./")!=-1||T.indexOf("/.")!=-1){f=T.lastIndexOf("/",0)==0,T=T.split("/");const S=[];for(let U=0;U<T.length;){const me=T[U++];me=="."?f&&U==T.length&&S.push(""):me==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),f&&U==T.length&&S.push("")):(S.push(me),f=!0)}f=S.join("/")}else f=T}return d?c.h=f:d=o.i.toString()!=="",d?yo(c,Uc(o.i)):d=!!o.m,d&&(c.m=o.m),c};function qt(o){return new yn(o)}function Jr(o,c,d){o.j=d?Yr(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function Xr(o,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);o.u=c}else o.u=null}function yo(o,c,d){c instanceof es?(o.i=c,Lf(o.i,o.l)):(d||(c=Zr(c,kf)),o.i=new es(c,o.l))}function De(o,c,d){o.i.set(c,d)}function $s(o){return De(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Yr(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Zr(o,c,d){return typeof o=="string"?(o=encodeURI(o).replace(c,Rf),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Rf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Dc=/[#\/\?@]/g,Pf=/[#\?:]/g,xf=/[#\?]/g,kf=/[#\?@]/g,Nf=/#/g;function es(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function Wn(o){o.g||(o.g=new Map,o.h=0,o.i&&Sf(o.i,function(c,d){o.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}n=es.prototype,n.add=function(o,c){Wn(this),this.i=null,o=dr(this,o);let d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(c),this.h+=1,this};function Vc(o,c){Wn(o),c=dr(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function Mc(o,c){return Wn(o),c=dr(o,c),o.g.has(c)}n.forEach=function(o,c){Wn(this),this.g.forEach(function(d,f){d.forEach(function(T){o.call(c,T,f,this)},this)},this)};function Oc(o,c){Wn(o);let d=[];if(typeof c=="string")Mc(o,c)&&(d=d.concat(o.g.get(dr(o,c))));else for(o=Array.from(o.g.values()),c=0;c<o.length;c++)d=d.concat(o[c]);return d}n.set=function(o,c){return Wn(this),this.i=null,o=dr(this,o),Mc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=Oc(this,o),o.length>0?String(o[0]):c):c};function Fc(o,c,d){Vc(o,c),d.length>0&&(o.i=null,o.g.set(dr(o,c),R(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(let f=0;f<c.length;f++){var d=c[f];const T=Kr(d);d=Oc(this,d);for(let S=0;S<d.length;S++){let U=T;d[S]!==""&&(U+="="+Kr(d[S])),o.push(U)}}return this.i=o.join("&")};function Uc(o){const c=new es;return c.i=o.i,o.g&&(c.g=new Map(o.g),c.h=o.h),c}function dr(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function Lf(o,c){c&&!o.j&&(Wn(o),o.i=null,o.g.forEach(function(d,f){const T=f.toLowerCase();f!=T&&(Vc(this,f),Fc(this,T,d))},o)),o.j=c}function Df(o,c){const d=new It;if(a.Image){const f=new Image;f.onload=m(_n,d,"TestLoadImage: loaded",!0,c,f),f.onerror=m(_n,d,"TestLoadImage: error",!1,c,f),f.onabort=m(_n,d,"TestLoadImage: abort",!1,c,f),f.ontimeout=m(_n,d,"TestLoadImage: timeout",!1,c,f),a.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else c(!1)}function Vf(o,c){const d=new It,f=new AbortController,T=setTimeout(()=>{f.abort(),_n(d,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:f.signal}).then(S=>{clearTimeout(T),S.ok?_n(d,"TestPingServer: ok",!0,c):_n(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(T),_n(d,"TestPingServer: error",!1,c)})}function _n(o,c,d,f,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),f(d)}catch{}}function Mf(){this.g=new J}function _o(o){this.i=o.Sb||null,this.h=o.ab||!1}p(_o,ue),_o.prototype.g=function(){return new Hs(this.i,this.h)};function Hs(o,c){et.call(this),this.H=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Hs,et),n=Hs.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=c,this.readyState=1,ns(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(c.body=o),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ts(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ns(this)),this.g&&(this.readyState=3,ns(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Bc(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Bc(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?ts(this):ns(this),this.readyState==3&&Bc(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,ts(this))},n.Na=function(o){this.g&&(this.response=o,ts(this))},n.ga=function(){this.g&&ts(this)};function ts(o){o.readyState=4,o.l=null,o.j=null,o.B=null,ns(o)}n.setRequestHeader=function(o,c){this.A.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=c.next();return o.join(`\r
`)};function ns(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Hs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function jc(o){let c="";return Ae(o,function(d,f){c+=f,c+=":",c+=d,c+=`\r
`}),c}function vo(o,c,d){e:{for(f in d){var f=!1;break e}f=!0}f||(d=jc(d),typeof o=="string"?d!=null&&Kr(d):De(o,c,d))}function Ue(o){et.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Ue,et);var Of=/^https?$/i,Ff=["POST","PUT"];n=Ue.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,c,d,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():bt.g(),this.g.onreadystatechange=_(h(this.Ca,this));try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(S){qc(this,S);return}if(o=d||"",d=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var T in f)d.set(T,f[T]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const S of f.keys())d.set(S,f.get(S));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(d.keys()).find(S=>S.toLowerCase()=="content-type"),T=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Ff,c,void 0)>=0)||f||T||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,U]of d)this.g.setRequestHeader(S,U);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(S){qc(this,S)}};function qc(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.o=5,$c(o),zs(o)}function $c(o){o.A||(o.A=!0,A(o,"complete"),A(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,A(this,"complete"),A(this,"abort"),zs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),zs(this,!0)),Ue.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Hc(this):this.Xa())},n.Xa=function(){Hc(this)};function Hc(o){if(o.h&&typeof i<"u"){if(o.v&&vn(o)==4)setTimeout(o.Ca.bind(o),0);else if(A(o,"readystatechange"),vn(o)==4){o.h=!1;try{const S=o.ca();e:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var f;if(f=S===0){let U=String(o.D).match(Lc)[1]||null;!U&&a.self&&a.self.location&&(U=a.self.location.protocol.slice(0,-1)),f=!Of.test(U?U.toLowerCase():"")}d=f}if(d)A(o,"complete"),A(o,"success");else{o.o=6;try{var T=vn(o)>2?o.g.statusText:""}catch{T=""}o.l=T+" ["+o.ca()+"]",$c(o)}}finally{zs(o)}}}}function zs(o,c){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const d=o.g;o.g=null,c||A(o,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function vn(o){return o.g?o.g.readyState:0}n.ca=function(){try{return vn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),he(c)}};function zc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Uf(o){const c={};o=(o.g&&vn(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(v(o[f]))continue;var d=bf(o[f]);const T=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const S=c[T]||[];c[T]=S,S.push(d)}Te(c,function(f){return f.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function rs(o,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||c}function Gc(o){this.za=0,this.i=[],this.j=new It,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=rs("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=rs("baseRetryDelayMs",5e3,o),this.Za=rs("retryDelaySeedMs",1e4,o),this.Ta=rs("forwardChannelMaxRetries",2,o),this.va=rs("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new Rc(o&&o.concurrentRequestLimit),this.Ba=new Mf,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Gc.prototype,n.ka=8,n.I=1,n.connect=function(o,c,d,f){be(0),this.W=o,this.H=c||{},d&&f!==void 0&&(this.H.OSID=d,this.H.OAID=f),this.F=this.X,this.J=tl(this,null,this.W),Ws(this)};function Eo(o){if(Wc(o),o.I==3){var c=o.V++,d=qt(o.J);if(De(d,"SID",o.M),De(d,"RID",c),De(d,"TYPE","terminate"),ss(o,d),c=new gn(o,o.j,c),c.M=2,c.A=$s(qt(d)),d=!1,a.navigator&&a.navigator.sendBeacon)try{d=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!d&&a.Image&&(new Image().src=c.A,d=!0),d||(c.g=nl(c.j,null),c.g.ea(c.A)),c.F=Date.now(),qs(c)}el(o)}function Gs(o){o.g&&(wo(o),o.g.cancel(),o.g=null)}function Wc(o){Gs(o),o.v&&(a.clearTimeout(o.v),o.v=null),Ks(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function Ws(o){if(!Pc(o.h)&&!o.m){o.m=!0;var c=o.Ea;Q||g(),Z||(Q(),Z=!0),I.add(c,o),o.D=0}}function Bf(o,c){return xc(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=c.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=Lt(h(o.Ea,o,c),Zc(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const T=new gn(this,this.j,o);let S=this.o;if(this.U&&(S?(S=Fe(S),ke(S,this.U)):S=this.U),this.u!==null||this.R||(T.J=S,S=null),this.S)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var f=this.i[d];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,c>4096){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=Qc(this,T,c),d=qt(this.J),De(d,"RID",o),De(d,"CVER",22),this.G&&De(d,"X-HTTP-Session-Id",this.G),ss(this,d),S&&(this.R?c="headers="+Kr(jc(S))+"&"+c:this.u&&vo(d,this.u,S)),go(this.h,T),this.Ra&&De(d,"TYPE","init"),this.S?(De(d,"$req",c),De(d,"SID","null"),T.U=!0,ho(T,d,null)):ho(T,d,c),this.I=2}}else this.I==3&&(o?Kc(this,o):this.i.length==0||Pc(this.h)||Kc(this))};function Kc(o,c){var d;c?d=c.l:d=o.V++;const f=qt(o.J);De(f,"SID",o.M),De(f,"RID",d),De(f,"AID",o.K),ss(o,f),o.u&&o.o&&vo(f,o.u,o.o),d=new gn(o,o.j,d,o.D+1),o.u===null&&(d.J=o.o),c&&(o.i=c.G.concat(o.i)),c=Qc(o,d,1e3),d.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),go(o.h,d),ho(d,f,c)}function ss(o,c){o.H&&Ae(o.H,function(d,f){De(c,f,d)}),o.l&&Ae({},function(d,f){De(c,f,d)})}function Qc(o,c,d){d=Math.min(o.i.length,d);const f=o.l?h(o.l.Ka,o.l,o):null;e:{var T=o.i;let me=-1;for(;;){const Xe=["count="+d];me==-1?d>0?(me=T[0].g,Xe.push("ofs="+me)):me=0:Xe.push("ofs="+me);let Pe=!0;for(let tt=0;tt<d;tt++){var S=T[tt].g;const $t=T[tt].map;if(S-=me,S<0)me=Math.max(0,T[tt].g-100),Pe=!1;else try{S="req"+S+"_"||"";try{var U=$t instanceof Map?$t:Object.entries($t);for(const[Qn,En]of U){let In=En;l(En)&&(In=X(En)),Xe.push(S+Qn+"="+encodeURIComponent(In))}}catch(Qn){throw Xe.push(S+"type="+encodeURIComponent("_badmap")),Qn}}catch{f&&f($t)}}if(Pe){U=Xe.join("&");break e}}U=void 0}return o=o.i.splice(0,d),c.G=o,U}function Jc(o){if(!o.g&&!o.v){o.Y=1;var c=o.Da;Q||g(),Z||(Q(),Z=!0),I.add(c,o),o.A=0}}function Io(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=Lt(h(o.Da,o),Zc(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,Xc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=Lt(h(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,be(10),Gs(this),Xc(this))};function wo(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Xc(o){o.g=new gn(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var c=qt(o.na);De(c,"RID","rpc"),De(c,"SID",o.M),De(c,"AID",o.K),De(c,"CI",o.F?"0":"1"),!o.F&&o.ia&&De(c,"TO",o.ia),De(c,"TYPE","xmlhttp"),ss(o,c),o.u&&o.o&&vo(c,o.u,o.o),o.O&&(o.g.H=o.O);var d=o.g;o=o.ba,d.M=1,d.A=$s(qt(c)),d.u=null,d.R=!0,Ac(d,o)}n.Va=function(){this.C!=null&&(this.C=null,Gs(this),Io(this),be(19))};function Ks(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Yc(o,c){var d=null;if(o.g==c){Ks(o),wo(o),o.g=null;var f=2}else if(po(o.h,c))d=c.G,kc(o.h,c),f=1;else return;if(o.I!=0){if(c.o)if(f==1){d=c.u?c.u.length:0,c=Date.now()-c.F;var T=o.D;f=gt(),A(f,new Nt(f,d)),Ws(o)}else Jc(o);else if(T=c.m,T==3||T==0&&c.X>0||!(f==1&&Bf(o,c)||f==2&&Io(o)))switch(d&&d.length>0&&(c=o.h,c.i=c.i.concat(d)),T){case 1:Kn(o,5);break;case 4:Kn(o,10);break;case 3:Kn(o,6);break;default:Kn(o,2)}}}function Zc(o,c){let d=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(d*=2),d*c}function Kn(o,c){if(o.j.info("Error code "+c),c==2){var d=h(o.bb,o),f=o.Ua;const T=!f;f=new yn(f||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Jr(f,"https"),$s(f),T?Df(f.toString(),d):Vf(f.toString(),d)}else be(2);o.I=0,o.l&&o.l.pa(c),el(o),Wc(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),be(2)):(this.j.info("Failed to ping google.com"),be(1))};function el(o){if(o.I=0,o.ja=[],o.l){const c=Nc(o.h);(c.length!=0||o.i.length!=0)&&(P(o.ja,c),P(o.ja,o.i),o.h.i.length=0,R(o.i),o.i.length=0),o.l.oa()}}function tl(o,c,d){var f=d instanceof yn?qt(d):new yn(d);if(f.g!="")c&&(f.g=c+"."+f.g),Xr(f,f.u);else{var T=a.location;f=T.protocol,c=c?c+"."+T.hostname:T.hostname,T=+T.port;const S=new yn(null);f&&Jr(S,f),c&&(S.g=c),T&&Xr(S,T),d&&(S.h=d),f=S}return d=o.G,c=o.wa,d&&c&&De(f,d,c),De(f,"VER",o.ka),ss(o,f),f}function nl(o,c,d){if(c&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Aa&&!o.ma?new Ue(new _o({ab:d})):new Ue(o.ma),c.Fa(o.L),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function rl(){}n=rl.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Qs(){}Qs.prototype.g=function(o,c){return new Tt(o,c)};function Tt(o,c){et.call(this),this.g=new Gc(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(o?o["X-WebChannel-Client-Profile"]=c.sa:o={"X-WebChannel-Client-Profile":c.sa}),this.g.U=o,(o=c&&c.Qb)&&!v(o)&&(this.g.u=o),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!v(c)&&(this.g.G=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new hr(this)}p(Tt,et),Tt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Tt.prototype.close=function(){Eo(this.g)},Tt.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.v&&(d={},d.__data__=X(o),o=d);c.i.push(new Cf(c.Ya++,o)),c.I==3&&Ws(c)},Tt.prototype.N=function(){this.g.l=null,delete this.j,Eo(this.g),delete this.g,Tt.Z.N.call(this)};function sl(o){pt.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const d in c){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}p(sl,pt);function il(){st.call(this),this.status=1}p(il,st);function hr(o){this.g=o}p(hr,rl),hr.prototype.ra=function(){A(this.g,"a")},hr.prototype.qa=function(o){A(this.g,new sl(o))},hr.prototype.pa=function(o){A(this.g,new il)},hr.prototype.oa=function(){A(this.g,"b")},Qs.prototype.createWebChannel=Qs.prototype.g,Tt.prototype.send=Tt.prototype.o,Tt.prototype.open=Tt.prototype.m,Tt.prototype.close=Tt.prototype.close,Od=function(){return new Qs},Md=function(){return gt()},Vd=He,Qo={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},xt.NO_ERROR=0,xt.TIMEOUT=8,xt.HTTP_ERROR=6,ci=xt,pn.COMPLETE="complete",Dd=pn,Se.EventType=Le,Le.OPEN="a",Le.CLOSE="b",Le.ERROR="c",Le.MESSAGE="d",et.prototype.listen=et.prototype.J,is=Se,Ue.prototype.listenOnce=Ue.prototype.K,Ue.prototype.getLastError=Ue.prototype.Ha,Ue.prototype.getLastErrorCode=Ue.prototype.ya,Ue.prototype.getStatus=Ue.prototype.ca,Ue.prototype.getResponseJson=Ue.prototype.La,Ue.prototype.getResponseText=Ue.prototype.la,Ue.prototype.send=Ue.prototype.ea,Ue.prototype.setWithCredentials=Ue.prototype.Fa,Ld=Ue}).apply(typeof Ys<"u"?Ys:typeof self<"u"?self:typeof window<"u"?window:{});const Vl="@firebase/firestore",Ml="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ht.UNAUTHENTICATED=new ht(null),ht.GOOGLE_CREDENTIALS=new ht("google-credentials-uid"),ht.FIRST_PARTY=new ht("first-party-uid"),ht.MOCK_USER=new ht("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ur="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=new Ea("@firebase/firestore");function pr(){return ir.logLevel}function q(n,...e){if(ir.logLevel<=ye.DEBUG){const t=e.map(Na);ir.debug(`Firestore (${Ur}): ${n}`,...t)}}function un(n,...e){if(ir.logLevel<=ye.ERROR){const t=e.map(Na);ir.error(`Firestore (${Ur}): ${n}`,...t)}}function Sr(n,...e){if(ir.logLevel<=ye.WARN){const t=e.map(Na);ir.warn(`Firestore (${Ur}): ${n}`,...t)}}function Na(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Fd(n,r,t)}function Fd(n,e,t){let r=`FIRESTORE (${Ur}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw un(r),new Error(r)}function we(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Fd(e,s,r)}function ae(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends hn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Sy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(ht.UNAUTHENTICATED)))}shutdown(){}}class Ry{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Py{constructor(e){this.t=e,this.currentUser=ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){we(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new Kt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Kt,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const u=i;e.enqueueRetryable((async()=>{await u.promise,await s(this.currentUser)}))},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((u=>l(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Kt)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(we(typeof r.accessToken=="string",31837,{l:r}),new Ud(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return we(e===null||typeof e=="string",2055,{h:e}),new ht(e)}}class xy{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=ht.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class ky{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new xy(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(ht.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ol{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ny{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,zt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){we(this.o===void 0,3512);const r=i=>{i.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,q("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Ol(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(we(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ol(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ly(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Ly(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function _e(n,e){return n<e?-1:n>e?1:0}function Jo(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return ko(s)===ko(i)?_e(s,i):ko(s)?1:-1}return _e(n.length,e.length)}const Dy=55296,Vy=57343;function ko(n){const e=n.charCodeAt(0);return e>=Dy&&e<=Vy}function Rr(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl="__name__";class Ht{constructor(e,t,r){t===void 0?t=0:t>e.length&&te(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&te(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ht.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ht?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Ht.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return _e(e.length,t.length)}static compareSegments(e,t){const r=Ht.isNumericId(e),s=Ht.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Ht.extractNumericId(e).compare(Ht.extractNumericId(t)):Jo(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Nn.fromString(e.substring(4,e.length-2))}}class Re extends Ht{construct(e,t,r){return new Re(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new Re(t)}static emptyPath(){return new Re([])}}const My=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends Ht{construct(e,t,r){return new at(e,t,r)}static isValidIdentifier(e){return My.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Fl}static keyField(){return new at([Fl])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new B(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new B(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new B(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new B(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new at(t)}static emptyPath(){return new at([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(Re.fromString(e))}static fromName(e){return new Y(Re.fromString(e).popFirst(5))}static empty(){return new Y(Re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Re.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new Re(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bd(n,e,t){if(!t)throw new B(k.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Oy(n,e,t,r){if(e===!0&&r===!0)throw new B(k.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Ul(n){if(!Y.isDocumentKey(n))throw new B(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Bl(n){if(Y.isDocumentKey(n))throw new B(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function jd(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Hi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":te(12329,{type:typeof n})}function ft(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new B(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Hi(n);throw new B(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(n,e){const t={typeString:n};return e&&(t.value=e),t}function Ns(n,e){if(!jd(n))throw new B(k.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new B(k.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl=-62135596800,ql=1e6;class Ve{static now(){return Ve.fromMillis(Date.now())}static fromDate(e){return Ve.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*ql);return new Ve(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new B(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new B(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<jl)throw new B(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ql}_compareTo(e){return this.seconds===e.seconds?_e(this.nanoseconds,e.nanoseconds):_e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ve._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ns(e,Ve._jsonSchema))return new Ve(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-jl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ve._jsonSchemaVersion="firestore/timestamp/1.0",Ve._jsonSchema={type:Qe("string",Ve._jsonSchemaVersion),seconds:Qe("number"),nanoseconds:Qe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{static fromTimestamp(e){return new se(e)}static min(){return new se(new Ve(0,0))}static max(){return new se(new Ve(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=-1;function Fy(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=se.fromTimestamp(r===1e9?new Ve(t+1,0):new Ve(t,r));return new Vn(s,Y.empty(),e)}function Uy(n){return new Vn(n.readTime,n.key,vs)}class Vn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Vn(se.min(),Y.empty(),vs)}static max(){return new Vn(se.max(),Y.empty(),vs)}}function By(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Y.comparator(n.documentKey,e.documentKey),t!==0?t:_e(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qy{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Br(n){if(n.code!==k.FAILED_PRECONDITION||n.message!==jy)throw n;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&te(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new N(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof N?t:N.resolve(t)}catch(t){return N.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):N.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):N.reject(t)}static resolve(e){return new N(((t,r)=>{t(e)}))}static reject(e){return new N(((t,r)=>{r(e)}))}static waitFor(e){return new N(((t,r)=>{let s=0,i=0,a=!1;e.forEach((l=>{++s,l.next((()=>{++i,a&&i===s&&t()}),(u=>r(u)))})),a=!0,i===s&&t()}))}static or(e){let t=N.resolve(!1);for(const r of e)t=t.next((s=>s?N.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,i)=>{r.push(t.call(this,s,i))})),this.waitFor(r)}static mapArray(e,t){return new N(((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let u=0;u<i;u++){const h=u;t(e[h]).next((m=>{a[h]=m,++l,l===i&&r(a)}),(m=>s(m)))}}))}static doWhile(e,t){return new N(((r,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):r()};i()}))}}function $y(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function jr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}zi.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da=-1;function Ls(n){return n==null}function wi(n){return n===0&&1/n==-1/0}function Hy(n){return typeof n=="number"&&Number.isInteger(n)&&!wi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd="";function zy(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=$l(e)),e=Gy(n.get(t),e);return $l(e)}function Gy(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case qd:t+="";break;default:t+=i}}return t}function $l(n){return n+qd+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function qn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function $d(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,t){this.comparator=e,this.root=t||it.EMPTY}insert(e,t){return new Oe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,it.BLACK,null,null))}remove(e){return new Oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,it.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Zs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Zs(this.root,e,this.comparator,!1)}getReverseIterator(){return new Zs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Zs(this.root,e,this.comparator,!0)}}class Zs{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class it{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??it.RED,this.left=s??it.EMPTY,this.right=i??it.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new it(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return it.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw te(43730,{key:this.key,value:this.value});if(this.right.isRed())throw te(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw te(27949);return e+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw te(57766)}get value(){throw te(16141)}get color(){throw te(16727)}get left(){throw te(29726)}get right(){throw te(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new it(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.comparator=e,this.data=new Oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new zl(this.data.getIterator())}getIteratorFrom(e){return new zl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof Ze)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ze(this.comparator);return t.data=e,t}}class zl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.fields=e,e.sort(at.comparator)}static empty(){return new Ct([])}unionWith(e){let t=new Ze(at.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ct(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Rr(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Hd("Invalid base64 string: "+i):i}})(e);return new lt(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(e);return new lt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const Wy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mn(n){if(we(!!n,39018),typeof n=="string"){let e=0;const t=Wy.exec(n);if(we(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:je(n.seconds),nanos:je(n.nanos)}}function je(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function On(n){return typeof n=="string"?lt.fromBase64String(n):lt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd="server_timestamp",Gd="__type__",Wd="__previous_value__",Kd="__local_write_time__";function Va(n){return(n?.mapValue?.fields||{})[Gd]?.stringValue===zd}function Gi(n){const e=n.mapValue.fields[Wd];return Va(e)?Gi(e):e}function Es(n){const e=Mn(n.mapValue.fields[Kd].timestampValue);return new Ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(e,t,r,s,i,a,l,u,h,m){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=m}}const bi="(default)";class Is{constructor(e,t){this.projectId=e,this.database=t||bi}static empty(){return new Is("","")}get isDefaultDatabase(){return this.database===bi}isEqual(e){return e instanceof Is&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd="__type__",Qy="__max__",ei={mapValue:{}},Jd="__vector__",Ti="value";function Fn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Va(n)?4:Xy(n)?9007199254740991:Jy(n)?10:11:te(28295,{value:n})}function Zt(n,e){if(n===e)return!0;const t=Fn(n);if(t!==Fn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Es(n).isEqual(Es(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Mn(s.timestampValue),l=Mn(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,i){return On(s.bytesValue).isEqual(On(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,i){return je(s.geoPointValue.latitude)===je(i.geoPointValue.latitude)&&je(s.geoPointValue.longitude)===je(i.geoPointValue.longitude)})(n,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return je(s.integerValue)===je(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=je(s.doubleValue),l=je(i.doubleValue);return a===l?wi(a)===wi(l):isNaN(a)&&isNaN(l)}return!1})(n,e);case 9:return Rr(n.arrayValue.values||[],e.arrayValue.values||[],Zt);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Hl(a)!==Hl(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!Zt(a[u],l[u])))return!1;return!0})(n,e);default:return te(52216,{left:n})}}function ws(n,e){return(n.values||[]).find((t=>Zt(t,e)))!==void 0}function Pr(n,e){if(n===e)return 0;const t=Fn(n),r=Fn(e);if(t!==r)return _e(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return _e(n.booleanValue,e.booleanValue);case 2:return(function(i,a){const l=je(i.integerValue||i.doubleValue),u=je(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1})(n,e);case 3:return Gl(n.timestampValue,e.timestampValue);case 4:return Gl(Es(n),Es(e));case 5:return Jo(n.stringValue,e.stringValue);case 6:return(function(i,a){const l=On(i),u=On(a);return l.compareTo(u)})(n.bytesValue,e.bytesValue);case 7:return(function(i,a){const l=i.split("/"),u=a.split("/");for(let h=0;h<l.length&&h<u.length;h++){const m=_e(l[h],u[h]);if(m!==0)return m}return _e(l.length,u.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,a){const l=_e(je(i.latitude),je(a.latitude));return l!==0?l:_e(je(i.longitude),je(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Wl(n.arrayValue,e.arrayValue);case 10:return(function(i,a){const l=i.fields||{},u=a.fields||{},h=l[Ti]?.arrayValue,m=u[Ti]?.arrayValue,p=_e(h?.values?.length||0,m?.values?.length||0);return p!==0?p:Wl(h,m)})(n.mapValue,e.mapValue);case 11:return(function(i,a){if(i===ei.mapValue&&a===ei.mapValue)return 0;if(i===ei.mapValue)return 1;if(a===ei.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),h=a.fields||{},m=Object.keys(h);u.sort(),m.sort();for(let p=0;p<u.length&&p<m.length;++p){const _=Jo(u[p],m[p]);if(_!==0)return _;const R=Pr(l[u[p]],h[m[p]]);if(R!==0)return R}return _e(u.length,m.length)})(n.mapValue,e.mapValue);default:throw te(23264,{he:t})}}function Gl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return _e(n,e);const t=Mn(n),r=Mn(e),s=_e(t.seconds,r.seconds);return s!==0?s:_e(t.nanos,r.nanos)}function Wl(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Pr(t[s],r[s]);if(i)return i}return _e(t.length,r.length)}function xr(n){return Xo(n)}function Xo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Mn(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return On(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return Y.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Xo(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Xo(t.fields[a])}`;return s+"}"})(n.mapValue):te(61005,{value:n})}function li(n){switch(Fn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Gi(n);return e?16+li(e):16;case 5:return 2*n.stringValue.length;case 6:return On(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+li(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return qn(r.fields,((i,a)=>{s+=i.length+li(a)})),s})(n.mapValue);default:throw te(13486,{value:n})}}function Kl(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Yo(n){return!!n&&"integerValue"in n}function Ma(n){return!!n&&"arrayValue"in n}function Ql(n){return!!n&&"nullValue"in n}function Jl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ui(n){return!!n&&"mapValue"in n}function Jy(n){return(n?.mapValue?.fields||{})[Qd]?.stringValue===Jd}function us(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return qn(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=us(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=us(n.arrayValue.values[t]);return e}return{...n}}function Xy(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Qy}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.value=e}static empty(){return new _t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ui(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=us(t)}setAll(e){let t=at.emptyPath(),r={},s=[];e.forEach(((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=us(a):s.push(l.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());ui(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Zt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];ui(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){qn(t,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new _t(us(this.value))}}function Xd(n){const e=[];return qn(n.fields,((t,r)=>{const s=new at([t]);if(ui(r)){const i=Xd(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)})),new Ct(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,t,r,s,i,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new rt(e,0,se.min(),se.min(),se.min(),_t.empty(),0)}static newFoundDocument(e,t,r,s){return new rt(e,1,t,se.min(),r,s,0)}static newNoDocument(e,t){return new rt(e,2,t,se.min(),se.min(),_t.empty(),0)}static newUnknownDocument(e,t){return new rt(e,3,t,se.min(),se.min(),_t.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,t){this.position=e,this.inclusive=t}}function Xl(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=Y.comparator(Y.fromName(a.referenceValue),t.key):r=Pr(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Yl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Zt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,t="asc"){this.field=e,this.dir=t}}function Yy(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{}class We extends Yd{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new e_(e,t,r):t==="array-contains"?new r_(e,r):t==="in"?new s_(e,r):t==="not-in"?new i_(e,r):t==="array-contains-any"?new o_(e,r):new We(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new t_(e,r):new n_(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Pr(t,this.value)):t!==null&&Fn(this.value)===Fn(t)&&this.matchesComparison(Pr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Mt extends Yd{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Mt(e,t)}matches(e){return Zd(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Zd(n){return n.op==="and"}function eh(n){return Zy(n)&&Zd(n)}function Zy(n){for(const e of n.filters)if(e instanceof Mt)return!1;return!0}function Zo(n){if(n instanceof We)return n.field.canonicalString()+n.op.toString()+xr(n.value);if(eh(n))return n.filters.map((e=>Zo(e))).join(",");{const e=n.filters.map((t=>Zo(t))).join(",");return`${n.op}(${e})`}}function th(n,e){return n instanceof We?(function(r,s){return s instanceof We&&r.op===s.op&&r.field.isEqual(s.field)&&Zt(r.value,s.value)})(n,e):n instanceof Mt?(function(r,s){return s instanceof Mt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,l)=>i&&th(a,s.filters[l])),!0):!1})(n,e):void te(19439)}function nh(n){return n instanceof We?(function(t){return`${t.field.canonicalString()} ${t.op} ${xr(t.value)}`})(n):n instanceof Mt?(function(t){return t.op.toString()+" {"+t.getFilters().map(nh).join(" ,")+"}"})(n):"Filter"}class e_ extends We{constructor(e,t,r){super(e,t,r),this.key=Y.fromName(r.referenceValue)}matches(e){const t=Y.comparator(e.key,this.key);return this.matchesComparison(t)}}class t_ extends We{constructor(e,t){super(e,"in",t),this.keys=rh("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class n_ extends We{constructor(e,t){super(e,"not-in",t),this.keys=rh("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function rh(n,e){return(e.arrayValue?.values||[]).map((t=>Y.fromName(t.referenceValue)))}class r_ extends We{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ma(t)&&ws(t.arrayValue,this.value)}}class s_ extends We{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ws(this.value.arrayValue,t)}}class i_ extends We{constructor(e,t){super(e,"not-in",t)}matches(e){if(ws(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ws(this.value.arrayValue,t)}}class o_ extends We{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ma(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>ws(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Te=null}}function Zl(n,e=null,t=[],r=[],s=null,i=null,a=null){return new a_(n,e,t,r,s,i,a)}function Oa(n){const e=ae(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>Zo(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Ls(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>xr(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>xr(r))).join(",")),e.Te=t}return e.Te}function Fa(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Yy(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!th(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Yl(n.startAt,e.startAt)&&Yl(n.endAt,e.endAt)}function ea(n){return Y.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function c_(n,e,t,r,s,i,a,l){return new Ds(n,e,t,r,s,i,a,l)}function Wi(n){return new Ds(n)}function eu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function sh(n){return n.collectionGroup!==null}function ds(n){const e=ae(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Ze(at.comparator);return a.filters.forEach((u=>{u.getFlattenedFilters().forEach((h=>{h.isInequality()&&(l=l.add(h.field))}))})),l})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Ci(i,r))})),t.has(at.keyField().canonicalString())||e.Ie.push(new Ci(at.keyField(),r))}return e.Ie}function Qt(n){const e=ae(n);return e.Ee||(e.Ee=l_(e,ds(n))),e.Ee}function l_(n,e){if(n.limitType==="F")return Zl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Ci(s.field,i)}));const t=n.endAt?new Ai(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ai(n.startAt.position,n.startAt.inclusive):null;return Zl(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function ta(n,e){const t=n.filters.concat([e]);return new Ds(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function na(n,e,t){return new Ds(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ki(n,e){return Fa(Qt(n),Qt(e))&&n.limitType===e.limitType}function ih(n){return`${Oa(Qt(n))}|lt:${n.limitType}`}function gr(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>nh(s))).join(", ")}]`),Ls(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>xr(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>xr(s))).join(",")),`Target(${r})`})(Qt(n))}; limitType=${n.limitType})`}function Qi(n,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Y.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,e)&&(function(r,s){for(const i of ds(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(a,l,u){const h=Xl(a,l,u);return a.inclusive?h<=0:h<0})(r.startAt,ds(r),s)||r.endAt&&!(function(a,l,u){const h=Xl(a,l,u);return a.inclusive?h>=0:h>0})(r.endAt,ds(r),s))})(n,e)}function u_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function oh(n){return(e,t)=>{let r=!1;for(const s of ds(n)){const i=d_(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function d_(n,e,t){const r=n.field.isKeyField()?Y.comparator(e.key,t.key):(function(i,a,l){const u=a.data.field(i),h=l.data.field(i);return u!==null&&h!==null?Pr(u,h):te(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return te(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){qn(this.inner,((t,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return $d(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_=new Oe(Y.comparator);function dn(){return h_}const ah=new Oe(Y.comparator);function os(...n){let e=ah;for(const t of n)e=e.insert(t.key,t);return e}function ch(n){let e=ah;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function Yn(){return hs()}function lh(){return hs()}function hs(){return new ar((n=>n.toString()),((n,e)=>n.isEqual(e)))}const f_=new Oe(Y.comparator),m_=new Ze(Y.comparator);function ve(...n){let e=m_;for(const t of n)e=e.add(t);return e}const p_=new Ze(_e);function g_(){return p_}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wi(e)?"-0":e}}function uh(n){return{integerValue:""+n}}function y_(n,e){return Hy(e)?uh(e):Ua(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(){this._=void 0}}function __(n,e,t){return n instanceof bs?(function(s,i){const a={fields:{[Gd]:{stringValue:zd},[Kd]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Va(i)&&(i=Gi(i)),i&&(a.fields[Wd]=i),{mapValue:a}})(t,e):n instanceof kr?hh(n,e):n instanceof Nr?fh(n,e):(function(s,i){const a=dh(s,i),l=tu(a)+tu(s.Ae);return Yo(a)&&Yo(s.Ae)?uh(l):Ua(s.serializer,l)})(n,e)}function v_(n,e,t){return n instanceof kr?hh(n,e):n instanceof Nr?fh(n,e):t}function dh(n,e){return n instanceof Si?(function(r){return Yo(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class bs extends Ji{}class kr extends Ji{constructor(e){super(),this.elements=e}}function hh(n,e){const t=mh(e);for(const r of n.elements)t.some((s=>Zt(s,r)))||t.push(r);return{arrayValue:{values:t}}}class Nr extends Ji{constructor(e){super(),this.elements=e}}function fh(n,e){let t=mh(e);for(const r of n.elements)t=t.filter((s=>!Zt(s,r)));return{arrayValue:{values:t}}}class Si extends Ji{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function tu(n){return je(n.integerValue||n.doubleValue)}function mh(n){return Ma(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,t){this.field=e,this.transform=t}}function E_(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof kr&&s instanceof kr||r instanceof Nr&&s instanceof Nr?Rr(r.elements,s.elements,Zt):r instanceof Si&&s instanceof Si?Zt(r.Ae,s.Ae):r instanceof bs&&s instanceof bs})(n.transform,e.transform)}class I_{constructor(e,t){this.version=e,this.transformResults=t}}class Ke{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ke}static exists(e){return new Ke(void 0,e)}static updateTime(e){return new Ke(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function di(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Xi{}function ph(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ms(n.key,Ke.none()):new Vs(n.key,n.data,Ke.none());{const t=n.data,r=_t.empty();let s=new Ze(at.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new $n(n.key,r,new Ct(s.toArray()),Ke.none())}}function w_(n,e,t){n instanceof Vs?(function(s,i,a){const l=s.value.clone(),u=ru(s.fieldTransforms,i,a.transformResults);l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,e,t):n instanceof $n?(function(s,i,a){if(!di(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=ru(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(gh(s)),u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(n,e,t):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function fs(n,e,t,r){return n instanceof Vs?(function(i,a,l,u){if(!di(i.precondition,a))return l;const h=i.value.clone(),m=su(i.fieldTransforms,u,a);return h.setAll(m),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null})(n,e,t,r):n instanceof $n?(function(i,a,l,u){if(!di(i.precondition,a))return l;const h=su(i.fieldTransforms,u,a),m=a.data;return m.setAll(gh(i)),m.setAll(h),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(n,e,t,r):(function(i,a,l){return di(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l})(n,e,t)}function b_(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=dh(r.transform,s||null);i!=null&&(t===null&&(t=_t.empty()),t.set(r.field,i))}return t||null}function nu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Rr(r,s,((i,a)=>E_(i,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Vs extends Xi{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class $n extends Xi{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function gh(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function ru(n,e,t){const r=new Map;we(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,v_(a,l,t[s]))}return r}function su(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,__(i,a,e))}return r}class Ms extends Xi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yh extends Xi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&w_(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=fs(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=fs(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=lh();return this.mutations.forEach((s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const u=ph(a,l);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(se.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ve())}isEqual(e){return this.batchId===e.batchId&&Rr(this.mutations,e.mutations,((t,r)=>nu(t,r)))&&Rr(this.baseMutations,e.baseMutations,((t,r)=>nu(t,r)))}}class ja{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){we(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return f_})();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new ja(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ge,Ee;function _h(n){switch(n){case k.OK:return te(64938);case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0;default:return te(15467,{code:n})}}function vh(n){if(n===void 0)return un("GRPC error has no .code"),k.UNKNOWN;switch(n){case Ge.OK:return k.OK;case Ge.CANCELLED:return k.CANCELLED;case Ge.UNKNOWN:return k.UNKNOWN;case Ge.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case Ge.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case Ge.INTERNAL:return k.INTERNAL;case Ge.UNAVAILABLE:return k.UNAVAILABLE;case Ge.UNAUTHENTICATED:return k.UNAUTHENTICATED;case Ge.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case Ge.NOT_FOUND:return k.NOT_FOUND;case Ge.ALREADY_EXISTS:return k.ALREADY_EXISTS;case Ge.PERMISSION_DENIED:return k.PERMISSION_DENIED;case Ge.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case Ge.ABORTED:return k.ABORTED;case Ge.OUT_OF_RANGE:return k.OUT_OF_RANGE;case Ge.UNIMPLEMENTED:return k.UNIMPLEMENTED;case Ge.DATA_LOSS:return k.DATA_LOSS;default:return te(39323,{code:n})}}(Ee=Ge||(Ge={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_=new Nn([4294967295,4294967295],0);function iu(n){const e=S_().encode(n),t=new Nd;return t.update(e),new Uint8Array(t.digest())}function ou(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Nn([t,r],0),new Nn([s,i],0)]}class qa{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new as(`Invalid padding: ${t}`);if(r<0)throw new as(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new as(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new as(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Nn.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(Nn.fromNumber(r)));return s.compare(R_)===1&&(s=new Nn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=iu(e),[r,s]=ou(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new qa(i,s,t);return r.forEach((l=>a.insert(l))),a}insert(e){if(this.ge===0)return;const t=iu(e),[r,s]=ou(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class as extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Os.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Yi(se.min(),s,new Oe(_e),dn(),ve())}}class Os{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Os(r,t,ve(),ve(),ve())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class Eh{constructor(e,t){this.targetId=e,this.Ce=t}}class Ih{constructor(e,t,r=lt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class au{constructor(){this.ve=0,this.Fe=cu(),this.Me=lt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ve(),t=ve(),r=ve();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:te(38017,{changeType:i})}})),new Os(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=cu()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,we(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class P_{constructor(e){this.Ge=e,this.ze=new Map,this.je=dn(),this.Je=ti(),this.He=ti(),this.Ye=new Oe(_e)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:te(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((r,s)=>{this.rt(s)&&t(s)}))}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(ea(i))if(r===0){const a=new Y(i.path);this.et(t,a,rt.newNoDocument(a,se.min()))}else we(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const l=this.ut(e),u=l?this.ct(l,e,a):1;if(u!==0){this.it(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=On(r).toUint8Array()}catch(u){if(u instanceof Hd)return Sr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new qa(a,s,i)}catch(u){return Sr(u instanceof as?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach((i=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(t,i,null),s++)})),s}Tt(e){const t=new Map;this.ze.forEach(((i,a)=>{const l=this.ot(a);if(l){if(i.current&&ea(l.target)){const u=new Y(l.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,rt.newNoDocument(u,e))}i.Be&&(t.set(a,i.ke()),i.qe())}}));let r=ve();this.He.forEach(((i,a)=>{let l=!0;a.forEachWhile((u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(i))})),this.je.forEach(((i,a)=>a.setReadTime(e)));const s=new Yi(e,t,this.Ye,this.je,r);return this.je=dn(),this.Je=ti(),this.He=ti(),this.Ye=new Oe(_e),s}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.Qe(t,1):s.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new au,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Ze(_e),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Ze(_e),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||q("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new au),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function ti(){return new Oe(Y.comparator)}function cu(){return new Oe(Y.comparator)}const x_={asc:"ASCENDING",desc:"DESCENDING"},k_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},N_={and:"AND",or:"OR"};class L_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ra(n,e){return n.useProto3Json||Ls(e)?e:{value:e}}function Ri(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function wh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function D_(n,e){return Ri(n,e.toTimestamp())}function St(n){return we(!!n,49232),se.fromTimestamp((function(t){const r=Mn(t);return new Ve(r.seconds,r.nanos)})(n))}function $a(n,e){return sa(n,e).canonicalString()}function sa(n,e){const t=(function(s){return new Re(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function bh(n){const e=Re.fromString(n);return we(Ph(e),10190,{key:e.toString()}),e}function Pi(n,e){return $a(n.databaseId,e.path)}function ms(n,e){const t=bh(e);if(t.get(1)!==n.databaseId.projectId)throw new B(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new B(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Y(Ah(t))}function Th(n,e){return $a(n.databaseId,e)}function V_(n){const e=bh(n);return e.length===4?Re.emptyPath():Ah(e)}function ia(n){return new Re(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ah(n){return we(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function lu(n,e,t){return{name:Pi(n,e),fields:t.value.mapValue.fields}}function M_(n,e){return"found"in e?(function(r,s){we(!!s.found,43571),s.found.name,s.found.updateTime;const i=ms(r,s.found.name),a=St(s.found.updateTime),l=s.found.createTime?St(s.found.createTime):se.min(),u=new _t({mapValue:{fields:s.found.fields}});return rt.newFoundDocument(i,a,l,u)})(n,e):"missing"in e?(function(r,s){we(!!s.missing,3894),we(!!s.readTime,22933);const i=ms(r,s.missing),a=St(s.readTime);return rt.newNoDocument(i,a)})(n,e):te(7234,{result:e})}function O_(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:te(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(h,m){return h.useProto3Json?(we(m===void 0||typeof m=="string",58123),lt.fromBase64String(m||"")):(we(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),lt.fromUint8Array(m||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&(function(h){const m=h.code===void 0?k.UNKNOWN:vh(h.code);return new B(m,h.message||"")})(a);t=new Ih(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ms(n,r.document.name),i=St(r.document.updateTime),a=r.document.createTime?St(r.document.createTime):se.min(),l=new _t({mapValue:{fields:r.document.fields}}),u=rt.newFoundDocument(s,i,a,l),h=r.targetIds||[],m=r.removedTargetIds||[];t=new hi(h,m,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ms(n,r.document),i=r.readTime?St(r.readTime):se.min(),a=rt.newNoDocument(s,i),l=r.removedTargetIds||[];t=new hi([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ms(n,r.document),i=r.removedTargetIds||[];t=new hi([],i,s,null)}else{if(!("filter"in e))return te(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new C_(s,i),l=r.targetId;t=new Eh(l,a)}}return t}function Ch(n,e){let t;if(e instanceof Vs)t={update:lu(n,e.key,e.value)};else if(e instanceof Ms)t={delete:Pi(n,e.key)};else if(e instanceof $n)t={update:lu(n,e.key,e.data),updateMask:G_(e.fieldMask)};else{if(!(e instanceof yh))return te(16599,{Vt:e.type});t={verify:Pi(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(i,a){const l=a.transform;if(l instanceof bs)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof kr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Nr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Si)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw te(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:D_(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:te(27497)})(n,e.precondition)),t}function F_(n,e){return n&&n.length>0?(we(e!==void 0,14353),n.map((t=>(function(s,i){let a=s.updateTime?St(s.updateTime):St(i);return a.isEqual(se.min())&&(a=St(i)),new I_(a,s.transformResults||[])})(t,e)))):[]}function U_(n,e){return{documents:[Th(n,e.path)]}}function B_(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Th(n,s);const i=(function(h){if(h.length!==0)return Rh(Mt.create(h,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const a=(function(h){if(h.length!==0)return h.map((m=>(function(_){return{field:yr(_.field),direction:$_(_.dir)}})(m)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=ra(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{ft:t,parent:s}}function j_(n){let e=V_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){we(r===1,65062);const m=t.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let i=[];t.where&&(i=(function(p){const _=Sh(p);return _ instanceof Mt&&eh(_)?_.getFilters():[_]})(t.where));let a=[];t.orderBy&&(a=(function(p){return p.map((_=>(function(P){return new Ci(_r(P.field),(function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(P.direction))})(_)))})(t.orderBy));let l=null;t.limit&&(l=(function(p){let _;return _=typeof p=="object"?p.value:p,Ls(_)?null:_})(t.limit));let u=null;t.startAt&&(u=(function(p){const _=!!p.before,R=p.values||[];return new Ai(R,_)})(t.startAt));let h=null;return t.endAt&&(h=(function(p){const _=!p.before,R=p.values||[];return new Ai(R,_)})(t.endAt)),c_(e,s,a,i,l,"F",u,h)}function q_(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return te(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Sh(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=_r(t.unaryFilter.field);return We.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=_r(t.unaryFilter.field);return We.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=_r(t.unaryFilter.field);return We.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=_r(t.unaryFilter.field);return We.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return te(61313);default:return te(60726)}})(n):n.fieldFilter!==void 0?(function(t){return We.create(_r(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return te(58110);default:return te(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Mt.create(t.compositeFilter.filters.map((r=>Sh(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return te(1026)}})(t.compositeFilter.op))})(n):te(30097,{filter:n})}function $_(n){return x_[n]}function H_(n){return k_[n]}function z_(n){return N_[n]}function yr(n){return{fieldPath:n.canonicalString()}}function _r(n){return at.fromServerFormat(n.fieldPath)}function Rh(n){return n instanceof We?(function(t){if(t.op==="=="){if(Jl(t.value))return{unaryFilter:{field:yr(t.field),op:"IS_NAN"}};if(Ql(t.value))return{unaryFilter:{field:yr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Jl(t.value))return{unaryFilter:{field:yr(t.field),op:"IS_NOT_NAN"}};if(Ql(t.value))return{unaryFilter:{field:yr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:yr(t.field),op:H_(t.op),value:t.value}}})(n):n instanceof Mt?(function(t){const r=t.getFilters().map((s=>Rh(s)));return r.length===1?r[0]:{compositeFilter:{op:z_(t.op),filters:r}}})(n):te(54877,{filter:n})}function G_(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Ph(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e,t,r,s,i=se.min(),a=se.min(),l=lt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Sn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Sn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Sn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Sn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e){this.yt=e}}function K_(n){const e=j_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?na(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(){this.Cn=new J_}addToCollectionParentIndex(e,t){return this.Cn.add(t),N.resolve()}getCollectionParents(e,t){return N.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return N.resolve()}deleteFieldIndex(e,t){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,t){return N.resolve()}getDocumentsMatchingTarget(e,t){return N.resolve(null)}getIndexType(e,t){return N.resolve(0)}getFieldIndexes(e,t){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,t){return N.resolve(Vn.min())}getMinOffsetFromCollectionGroup(e,t){return N.resolve(Vn.min())}updateCollectionGroup(e,t,r){return N.resolve()}updateIndexEntries(e,t){return N.resolve()}}class J_{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Ze(Re.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ze(Re.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},xh=41943040;class wt{static withCacheSize(e){return new wt(e,wt.DEFAULT_COLLECTION_PERCENTILE,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wt.DEFAULT_COLLECTION_PERCENTILE=10,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,wt.DEFAULT=new wt(xh,wt.DEFAULT_COLLECTION_PERCENTILE,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),wt.DISABLED=new wt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Lr(0)}static cr(){return new Lr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const du="LruGarbageCollector",X_=1048576;function hu([n,e],[t,r]){const s=_e(n,t);return s===0?_e(e,r):s}class Y_{constructor(e){this.Ir=e,this.buffer=new Ze(hu),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();hu(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Z_{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){q(du,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){jr(t)?q(du,"Ignoring IndexedDB error during garbage collection: ",t):await Br(t)}await this.Vr(3e5)}))}}class ev{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return N.resolve(zi.ce);const r=new Y_(t);return this.mr.forEachTarget(e,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(e,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),N.resolve(uu)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),uu):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,s,i,a,l,u,h;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,l=Date.now(),this.removeTargets(e,r,t)))).next((p=>(i=p,u=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(h=Date.now(),pr()<=ye.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(h-u)+`ms
Total Duration: ${h-m}ms`),N.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function tv(n,e){return new ev(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(){this.changes=new ar((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,rt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?N.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&fs(r.mutation,s,Ct.empty(),Ve.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,ve()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=ve()){const s=Yn();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((i=>{let a=os();return i.forEach(((l,u)=>{a=a.insert(l,u.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const r=Yn();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,ve())))}populateOverlays(e,t,r){const s=[];return r.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((a,l)=>{t.set(a,l)}))}))}computeViews(e,t,r,s){let i=dn();const a=hs(),l=(function(){return hs()})();return t.forEach(((u,h)=>{const m=r.get(h.key);s.has(h.key)&&(m===void 0||m.mutation instanceof $n)?i=i.insert(h.key,h):m!==void 0?(a.set(h.key,m.mutation.getFieldMask()),fs(m.mutation,h,m.mutation.getFieldMask(),Ve.now())):a.set(h.key,Ct.empty())})),this.recalculateAndSaveOverlays(e,i).next((u=>(u.forEach(((h,m)=>a.set(h,m))),t.forEach(((h,m)=>l.set(h,new rv(m,a.get(h)??null)))),l)))}recalculateAndSaveOverlays(e,t){const r=hs();let s=new Oe(((a,l)=>a-l)),i=ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const l of a)l.keys().forEach((u=>{const h=t.get(u);if(h===null)return;let m=r.get(u)||Ct.empty();m=l.applyToLocalView(h,m),r.set(u,m);const p=(s.get(l.batchId)||ve()).add(u);s=s.insert(l.batchId,p)}))})).next((()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,m=u.value,p=lh();m.forEach((_=>{if(!i.has(_)){const R=ph(t.get(_),r.get(_));R!==null&&p.set(_,R),i=i.add(_)}})),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return N.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(a){return Y.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):sh(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):N.resolve(Yn());let l=vs,u=i;return a.next((h=>N.forEach(h,((m,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(m)?N.resolve():this.remoteDocumentCache.getEntry(e,m).next((_=>{u=u.insert(m,_)}))))).next((()=>this.populateOverlays(e,h,i))).next((()=>this.computeViews(e,u,h,ve()))).next((m=>({batchId:l,changes:ch(m)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Y(t)).next((r=>{let s=os();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=os();return this.indexManager.getCollectionParents(e,i).next((l=>N.forEach(l,(u=>{const h=(function(p,_){return new Ds(_,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next((m=>{m.forEach(((p,_)=>{a=a.insert(p,_)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s)))).next((a=>{i.forEach(((u,h)=>{const m=h.getKey();a.get(m)===null&&(a=a.insert(m,rt.newInvalidDocument(m)))}));let l=os();return a.forEach(((u,h)=>{const m=i.get(u);m!==void 0&&fs(m.mutation,h,Ct.empty(),Ve.now()),Qi(t,h)&&(l=l.insert(u,h))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return N.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:St(s.createTime)}})(t)),N.resolve()}getNamedQuery(e,t){return N.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(s){return{name:s.name,query:K_(s.bundledQuery),readTime:St(s.readTime)}})(t)),N.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(){this.overlays=new Oe(Y.comparator),this.qr=new Map}getOverlay(e,t){return N.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Yn();return N.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,i)=>{this.St(e,t,i)})),N.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(r)),N.resolve()}getOverlaysForCollection(e,t,r){const s=Yn(),i=t.length+1,a=new Y(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return N.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Oe(((h,m)=>h-m));const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let m=i.get(h.largestBatchId);m===null&&(m=Yn(),i=i.insert(h.largestBatchId,m)),m.set(h.getKey(),h)}}const l=Yn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((h,m)=>l.set(h,m))),!(l.size()>=s)););return N.resolve(l)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new A_(t,r));let i=this.qr.get(t);i===void 0&&(i=ve(),this.qr.set(t,i)),this.qr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,N.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(){this.Qr=new Ze(nt.$r),this.Ur=new Ze(nt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new nt(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Gr(new nt(e,t))}zr(e,t){e.forEach((r=>this.removeReference(r,t)))}jr(e){const t=new Y(new Re([])),r=new nt(t,e),s=new nt(t,e+1),i=[];return this.Ur.forEachInRange([r,s],(a=>{this.Gr(a),i.push(a.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new Y(new Re([])),r=new nt(t,e),s=new nt(t,e+1);let i=ve();return this.Ur.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(e){const t=new nt(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class nt{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return Y.comparator(e.key,t.key)||_e(e.Yr,t.Yr)}static Kr(e,t){return _e(e.Yr,t.Yr)||Y.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Ze(nt.$r)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new T_(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.Zr=this.Zr.add(new nt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return N.resolve(a)}lookupMutationBatch(e,t){return N.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ei(r),i=s<0?0:s;return N.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?Da:this.tr-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new nt(t,0),s=new nt(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],(a=>{const l=this.Xr(a.Yr);i.push(l)})),N.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ze(_e);return t.forEach((s=>{const i=new nt(s,0),a=new nt(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],(l=>{r=r.add(l.Yr)}))})),N.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;Y.isDocumentKey(i)||(i=i.child(""));const a=new nt(new Y(i),0);let l=new Ze(_e);return this.Zr.forEachWhile((u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(u.Yr)),!0)}),a),N.resolve(this.ti(l))}ti(e){const t=[];return e.forEach((r=>{const s=this.Xr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){we(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return N.forEach(t.mutations,(s=>{const i=new nt(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,t){const r=new nt(t,0),s=this.Zr.firstAfterOrEqual(r);return N.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e){this.ri=e,this.docs=(function(){return new Oe(Y.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return N.resolve(r?r.document.mutableCopy():rt.newInvalidDocument(t))}getEntries(e,t){let r=dn();return t.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():rt.newInvalidDocument(s))})),N.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=dn();const a=t.path,l=new Y(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:m}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||By(Uy(m),r)<=0||(s.has(m.key)||Qi(t,m))&&(i=i.insert(m.key,m.mutableCopy()))}return N.resolve(i)}getAllFromCollectionGroup(e,t,r,s){te(9500)}ii(e,t){return N.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new uv(this)}getSize(e){return N.resolve(this.size)}}class uv extends nv{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)})),N.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(e){this.persistence=e,this.si=new ar((t=>Oa(t)),Fa),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.oi=0,this._i=new Ha,this.targetCount=0,this.ai=Lr.ur()}forEachTarget(e,t){return this.si.forEach(((r,s)=>t(s))),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),N.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Lr(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,N.resolve()}updateTargetData(e,t){return this.Pr(t),N.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.si.forEach(((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)})),N.waitFor(i).next((()=>s))}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return N.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),N.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((a=>{i.push(s.markPotentiallyOrphaned(e,a))})),N.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),N.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return N.resolve(r)}containsKey(e,t){return N.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e,t){this.ui={},this.overlays={},this.ci=new zi(0),this.li=!1,this.li=!0,this.hi=new av,this.referenceDelegate=e(this),this.Pi=new dv(this),this.indexManager=new Q_,this.remoteDocumentCache=(function(s){return new lv(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new W_(t),this.Ii=new iv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ov,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new cv(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){q("MemoryPersistence","Starting transaction:",e);const s=new hv(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(e,t){return N.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,t))))}}class hv extends qy{constructor(e){super(),this.currentSequenceNumber=e}}class za{constructor(e){this.persistence=e,this.Ri=new Ha,this.Vi=null}static mi(e){return new za(e)}get fi(){if(this.Vi)return this.Vi;throw te(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),N.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),N.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>r.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.fi,(r=>{const s=Y.fromPath(r);return this.gi(e,s).next((i=>{i||t.removeEntry(s,se.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return N.or([()=>N.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class xi{constructor(e,t){this.persistence=e,this.pi=new ar((r=>zy(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=tv(this,t)}static mi(e,t){return new xi(e,t)}Ei(){}di(e){return N.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}wr(e){let t=0;return this.pr(e,(r=>{t++})).next((()=>t))}pr(e,t){return N.forEach(this.pi,((r,s)=>this.br(e,r,s).next((i=>i?N.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,(a=>this.br(e,a,t).next((l=>{l||(r++,i.removeEntry(a,se.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),N.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),N.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),N.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),N.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=li(e.data.value)),t}br(e,t,r){return N.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.pi.get(t);return N.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=s}static As(e,t){let r=ve(),s=ve();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ga(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return am()?8:$y(mt())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ys(e,t).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ws(e,t,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new fv;return this.Ss(e,t,a).next((l=>{if(i.result=l,this.Vs)return this.bs(e,t,a,l.size)}))})).next((()=>i.result))}bs(e,t,r,s){return r.documentReadCount<this.fs?(pr()<=ye.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",gr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),N.resolve()):(pr()<=ye.DEBUG&&q("QueryEngine","Query:",gr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(pr()<=ye.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",gr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Qt(t))):N.resolve())}ys(e,t){if(eu(t))return N.resolve(null);let r=Qt(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=na(t,null,"F"),r=Qt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const a=ve(...i);return this.ps.getDocuments(e,a).next((l=>this.indexManager.getMinOffset(e,r).next((u=>{const h=this.Ds(t,l);return this.Cs(t,h,a,u.readTime)?this.ys(e,na(t,null,"F")):this.vs(e,h,t,u)}))))})))))}ws(e,t,r,s){return eu(t)||s.isEqual(se.min())?N.resolve(null):this.ps.getDocuments(e,r).next((i=>{const a=this.Ds(t,i);return this.Cs(t,a,r,s)?N.resolve(null):(pr()<=ye.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),gr(t)),this.vs(e,a,t,Fy(s,vs)).next((l=>l)))}))}Ds(e,t){let r=new Ze(oh(e));return t.forEach(((s,i)=>{Qi(e,i)&&(r=r.add(i))})),r}Cs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,t,r){return pr()<=ye.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",gr(t)),this.ps.getDocumentsMatchingQuery(e,t,Vn.min(),r)}vs(e,t,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next((i=>(t.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa="LocalStore",pv=3e8;class gv{constructor(e,t,r,s){this.persistence=e,this.Fs=t,this.serializer=s,this.Ms=new Oe(_e),this.xs=new ar((i=>Oa(i)),Fa),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sv(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function yv(n,e,t,r){return new gv(n,e,t,r)}async function Nh(n,e){const t=ae(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,t.Bs(e),t.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],l=[];let u=ve();for(const h of s){a.push(h.batchId);for(const m of h.mutations)u=u.add(m.key)}for(const h of i){l.push(h.batchId);for(const m of h.mutations)u=u.add(m.key)}return t.localDocuments.getDocuments(r,u).next((h=>({Ls:h,removedBatchIds:a,addedBatchIds:l})))}))}))}function _v(n,e){const t=ae(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(l,u,h,m){const p=h.batch,_=p.keys();let R=N.resolve();return _.forEach((P=>{R=R.next((()=>m.getEntry(u,P))).next((M=>{const D=h.docVersions.get(P);we(D!==null,48541),M.version.compareTo(D)<0&&(p.applyToRemoteDocument(M,h),M.isValidDocument()&&(M.setReadTime(h.commitVersion),m.addEntry(M)))}))})),R.next((()=>l.mutationQueue.removeMutationBatch(u,p)))})(t,r,e,i).next((()=>i.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let u=ve();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function Lh(n){const e=ae(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function vv(n,e){const t=ae(n),r=e.snapshotVersion;let s=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=t.Ns.newChangeBuffer({trackRemovals:!0});s=t.Ms;const l=[];e.targetChanges.forEach(((m,p)=>{const _=s.get(p);if(!_)return;l.push(t.Pi.removeMatchingKeys(i,m.removedDocuments,p).next((()=>t.Pi.addMatchingKeys(i,m.addedDocuments,p))));let R=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?R=R.withResumeToken(lt.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):m.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(m.resumeToken,r)),s=s.insert(p,R),(function(M,D,W){return M.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=pv?!0:W.addedDocuments.size+W.modifiedDocuments.size+W.removedDocuments.size>0})(_,R,m)&&l.push(t.Pi.updateTargetData(i,R))}));let u=dn(),h=ve();if(e.documentUpdates.forEach((m=>{e.resolvedLimboDocuments.has(m)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,m))})),l.push(Ev(i,a,e.documentUpdates).next((m=>{u=m.ks,h=m.qs}))),!r.isEqual(se.min())){const m=t.Pi.getLastRemoteSnapshotVersion(i).next((p=>t.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r)));l.push(m)}return N.waitFor(l).next((()=>a.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,u,h))).next((()=>u))})).then((i=>(t.Ms=s,i)))}function Ev(n,e,t){let r=ve(),s=ve();return t.forEach((i=>r=r.add(i))),e.getEntries(n,r).next((i=>{let a=dn();return t.forEach(((l,u)=>{const h=i.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(se.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):q(Wa,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)})),{ks:a,qs:s}}))}function Iv(n,e){const t=ae(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Da),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function wv(n,e){const t=ae(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.Pi.getTargetData(r,e).next((i=>i?(s=i,N.resolve(s)):t.Pi.allocateTargetId(r).next((a=>(s=new Sn(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r}))}async function oa(n,e,t){const r=ae(n),s=r.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!jr(a))throw a;q(Wa,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function fu(n,e,t){const r=ae(n);let s=se.min(),i=ve();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(u,h,m){const p=ae(u),_=p.xs.get(m);return _!==void 0?N.resolve(p.Ms.get(_)):p.Pi.getTargetData(h,m)})(r,a,Qt(e)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,l.targetId).next((u=>{i=u}))})).next((()=>r.Fs.getDocumentsMatchingQuery(a,e,t?s:se.min(),t?i:ve()))).next((l=>(bv(r,u_(e),l),{documents:l,Qs:i})))))}function bv(n,e,t){let r=n.Os.get(e)||se.min();t.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),n.Os.set(e,r)}class mu{constructor(){this.activeTargetIds=g_()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Tv{constructor(){this.Mo=new mu,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new mu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pu="ConnectivityMonitor";class gu{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){q(pu,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){q(pu,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ni=null;function aa(){return ni===null?ni=(function(){return 268435456+Math.round(2147483648*Math.random())})():ni++,"0x"+ni.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No="RestConnection",Cv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Sv{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===bi?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,t,r,s,i){const a=aa(),l=this.zo(e,t.toUriEncodedString());q(No,`Sending RPC '${e}' ${a}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:h}=new URL(l),m=Mr(h);return this.Jo(e,l,u,r,m).then((p=>(q(No,`Received RPC '${e}' ${a}: `,p),p)),(p=>{throw Sr(No,`RPC '${e}' ${a} failed with error: `,p,"url: ",l,"request:",r),p}))}Ho(e,t,r,s,i,a){return this.Go(e,t,r,s,i)}jo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ur})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}zo(e,t){const r=Cv[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt="WebChannelConnection";class Pv extends Sv{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,s,i){const a=aa();return new Promise(((l,u)=>{const h=new Ld;h.setWithCredentials(!0),h.listenOnce(Dd.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case ci.NO_ERROR:const p=h.getResponseJson();q(dt,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),l(p);break;case ci.TIMEOUT:q(dt,`RPC '${e}' ${a} timed out`),u(new B(k.DEADLINE_EXCEEDED,"Request time out"));break;case ci.HTTP_ERROR:const _=h.getStatus();if(q(dt,`RPC '${e}' ${a} failed with status:`,_,"response text:",h.getResponseText()),_>0){let R=h.getResponseJson();Array.isArray(R)&&(R=R[0]);const P=R?.error;if(P&&P.status&&P.message){const M=(function(W){const ce=W.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(ce)>=0?ce:k.UNKNOWN})(P.status);u(new B(M,P.message))}else u(new B(k.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new B(k.UNAVAILABLE,"Connection failed."));break;default:te(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{q(dt,`RPC '${e}' ${a} completed.`)}}));const m=JSON.stringify(s);q(dt,`RPC '${e}' ${a} sending request:`,s),h.send(t,"POST",m,r,15)}))}T_(e,t,r){const s=aa(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Od(),l=Md(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const m=i.join("");q(dt,`Creating RPC '${e}' stream ${s}: ${m}`,u);const p=a.createWebChannel(m,u);this.I_(p);let _=!1,R=!1;const P=new Rv({Yo:D=>{R?q(dt,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(_||(q(dt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),_=!0),q(dt,`RPC '${e}' stream ${s} sending:`,D),p.send(D))},Zo:()=>p.close()}),M=(D,W,ce)=>{D.listen(W,($=>{try{ce($)}catch(ne){setTimeout((()=>{throw ne}),0)}}))};return M(p,is.EventType.OPEN,(()=>{R||(q(dt,`RPC '${e}' stream ${s} transport opened.`),P.o_())})),M(p,is.EventType.CLOSE,(()=>{R||(R=!0,q(dt,`RPC '${e}' stream ${s} transport closed`),P.a_(),this.E_(p))})),M(p,is.EventType.ERROR,(D=>{R||(R=!0,Sr(dt,`RPC '${e}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),P.a_(new B(k.UNAVAILABLE,"The operation could not be completed")))})),M(p,is.EventType.MESSAGE,(D=>{if(!R){const W=D.data[0];we(!!W,16349);const ce=W,$=ce?.error||ce[0]?.error;if($){q(dt,`RPC '${e}' stream ${s} received error:`,$);const ne=$.status;let Q=(function(g){const y=Ge[g];if(y!==void 0)return vh(y)})(ne),Z=$.message;Q===void 0&&(Q=k.INTERNAL,Z="Unknown error status: "+ne+" with message "+$.message),R=!0,P.a_(new B(Q,Z)),p.close()}else q(dt,`RPC '${e}' stream ${s} received:`,W),P.u_(W)}})),M(l,Vd.STAT_EVENT,(D=>{D.stat===Qo.PROXY?q(dt,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===Qo.NOPROXY&&q(dt,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{P.__()}),0),P}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function Lo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(n){return new L_(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu="PersistentStream";class Dh{constructor(e,t,r,s,i,a,l,u){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Ka(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===k.RESOURCE_EXHAUSTED?(un(t.toString()),un("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===t&&this.G_(r,s)}),(r=>{e((()=>{const s=new B(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return q(yu,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(q(yu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class xv extends Dh{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=O_(this.serializer,e),r=(function(i){if(!("targetChange"in i))return se.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?se.min():a.readTime?St(a.readTime):se.min()})(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=ia(this.serializer),t.addTarget=(function(i,a){let l;const u=a.target;if(l=ea(u)?{documents:U_(i,u)}:{query:B_(i,u).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=wh(i,a.resumeToken);const h=ra(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(se.min())>0){l.readTime=Ri(i,a.snapshotVersion.toTimestamp());const h=ra(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l})(this.serializer,e);const r=q_(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=ia(this.serializer),t.removeTarget=e,this.q_(t)}}class kv extends Dh{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return we(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,we(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){we(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=F_(e.writeResults,e.commitTime),r=St(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=ia(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>Ch(this.serializer,r)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{}class Lv extends Nv{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new B(k.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Go(e,sa(t,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(k.UNKNOWN,i.toString())}))}Ho(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.Ho(e,sa(t,r),s,a,l,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new B(k.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class Dv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(un(t),this.aa=!1):q("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or="RemoteStore";class Vv{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((a=>{r.enqueueAndForget((async()=>{cr(this)&&(q(or,"Restarting streams for network reachability change."),await(async function(u){const h=ae(u);h.Ea.add(4),await Fs(h),h.Ra.set("Unknown"),h.Ea.delete(4),await eo(h)})(this))}))})),this.Ra=new Dv(r,s)}}async function eo(n){if(cr(n))for(const e of n.da)await e(!0)}async function Fs(n){for(const e of n.da)await e(!1)}function Vh(n,e){const t=ae(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Ya(t)?Xa(t):qr(t).O_()&&Ja(t,e))}function Qa(n,e){const t=ae(n),r=qr(t);t.Ia.delete(e),r.O_()&&Mh(t,e),t.Ia.size===0&&(r.O_()?r.L_():cr(t)&&t.Ra.set("Unknown"))}function Ja(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}qr(n).Y_(e)}function Mh(n,e){n.Va.Ue(e),qr(n).Z_(e)}function Xa(n){n.Va=new P_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),qr(n).start(),n.Ra.ua()}function Ya(n){return cr(n)&&!qr(n).x_()&&n.Ia.size>0}function cr(n){return ae(n).Ea.size===0}function Oh(n){n.Va=void 0}async function Mv(n){n.Ra.set("Online")}async function Ov(n){n.Ia.forEach(((e,t)=>{Ja(n,e)}))}async function Fv(n,e){Oh(n),Ya(n)?(n.Ra.ha(e),Xa(n)):n.Ra.set("Unknown")}async function Uv(n,e,t){if(n.Ra.set("Online"),e instanceof Ih&&e.state===2&&e.cause)try{await(async function(s,i){const a=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ia.delete(l),s.Va.removeTarget(l))})(n,e)}catch(r){q(or,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ki(n,r)}else if(e instanceof hi?n.Va.Ze(e):e instanceof Eh?n.Va.st(e):n.Va.tt(e),!t.isEqual(se.min()))try{const r=await Lh(n.localStore);t.compareTo(r)>=0&&await(function(i,a){const l=i.Va.Tt(a);return l.targetChanges.forEach(((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const m=i.Ia.get(h);m&&i.Ia.set(h,m.withResumeToken(u.resumeToken,a))}})),l.targetMismatches.forEach(((u,h)=>{const m=i.Ia.get(u);if(!m)return;i.Ia.set(u,m.withResumeToken(lt.EMPTY_BYTE_STRING,m.snapshotVersion)),Mh(i,u);const p=new Sn(m.target,u,h,m.sequenceNumber);Ja(i,p)})),i.remoteSyncer.applyRemoteEvent(l)})(n,t)}catch(r){q(or,"Failed to raise snapshot:",r),await ki(n,r)}}async function ki(n,e,t){if(!jr(e))throw e;n.Ea.add(1),await Fs(n),n.Ra.set("Offline"),t||(t=()=>Lh(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{q(or,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await eo(n)}))}function Fh(n,e){return e().catch((t=>ki(n,t,e)))}async function to(n){const e=ae(n),t=Un(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Da;for(;Bv(e);)try{const s=await Iv(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,jv(e,s)}catch(s){await ki(e,s)}Uh(e)&&Bh(e)}function Bv(n){return cr(n)&&n.Ta.length<10}function jv(n,e){n.Ta.push(e);const t=Un(n);t.O_()&&t.X_&&t.ea(e.mutations)}function Uh(n){return cr(n)&&!Un(n).x_()&&n.Ta.length>0}function Bh(n){Un(n).start()}async function qv(n){Un(n).ra()}async function $v(n){const e=Un(n);for(const t of n.Ta)e.ea(t.mutations)}async function Hv(n,e,t){const r=n.Ta.shift(),s=ja.from(r,e,t);await Fh(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await to(n)}async function zv(n,e){e&&Un(n).X_&&await(async function(r,s){if((function(a){return _h(a)&&a!==k.ABORTED})(s.code)){const i=r.Ta.shift();Un(r).B_(),await Fh(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await to(r)}})(n,e),Uh(n)&&Bh(n)}async function _u(n,e){const t=ae(n);t.asyncQueue.verifyOperationInProgress(),q(or,"RemoteStore received new credentials");const r=cr(t);t.Ea.add(3),await Fs(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await eo(t)}async function Gv(n,e){const t=ae(n);e?(t.Ea.delete(2),await eo(t)):e||(t.Ea.add(2),await Fs(t),t.Ra.set("Unknown"))}function qr(n){return n.ma||(n.ma=(function(t,r,s){const i=ae(t);return i.sa(),new xv(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Xo:Mv.bind(null,n),t_:Ov.bind(null,n),r_:Fv.bind(null,n),H_:Uv.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),Ya(n)?Xa(n):n.Ra.set("Unknown")):(await n.ma.stop(),Oh(n))}))),n.ma}function Un(n){return n.fa||(n.fa=(function(t,r,s){const i=ae(t);return i.sa(),new kv(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:qv.bind(null,n),r_:zv.bind(null,n),ta:$v.bind(null,n),na:Hv.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await to(n)):(await n.fa.stop(),n.Ta.length>0&&(q(or,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Kt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new Za(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ec(n,e){if(un("AsyncQueue",`${e}: ${n}`),jr(n))return new B(k.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{static emptySet(e){return new Tr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||Y.comparator(t.key,r.key):(t,r)=>Y.comparator(t.key,r.key),this.keyedMap=os(),this.sortedSet=new Oe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Tr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Tr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(){this.ga=new Oe(Y.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):te(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,r)=>{e.push(r)})),e}}class Dr{constructor(e,t,r,s,i,a,l,u,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach((l=>{a.push({type:0,doc:l})})),new Dr(e,t,Tr.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ki(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class Kv{constructor(){this.queries=Eu(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=ae(t),i=s.queries;s.queries=Eu(),i.forEach(((a,l)=>{for(const u of l.Sa)u.onError(r)}))})(this,new B(k.ABORTED,"Firestore shutting down"))}}function Eu(){return new ar((n=>ih(n)),Ki)}async function tc(n,e){const t=ae(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new Wv,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=ec(a,`Initialization of query '${gr(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&rc(t)}async function nc(n,e){const t=ae(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Qv(n,e){const t=ae(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.Sa)l.Fa(s)&&(r=!0);a.wa=s}}r&&rc(t)}function Jv(n,e,t){const r=ae(n),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(t);r.queries.delete(e)}function rc(n){n.Ca.forEach((e=>{e.next()}))}var ca,Iu;(Iu=ca||(ca={})).Ma="default",Iu.Cache="cache";class sc{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Dr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Dr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==ca.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(e){this.key=e}}class qh{constructor(e){this.key=e}}class Xv{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=ve(),this.mutatedKeys=ve(),this.eu=oh(e),this.tu=new Tr(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new vu,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((m,p)=>{const _=s.get(m),R=Qi(this.query,p)?p:null,P=!!_&&this.mutatedKeys.has(_.key),M=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let D=!1;_&&R?_.data.isEqual(R.data)?P!==M&&(r.track({type:3,doc:R}),D=!0):this.su(_,R)||(r.track({type:2,doc:R}),D=!0,(u&&this.eu(R,u)>0||h&&this.eu(R,h)<0)&&(l=!0)):!_&&R?(r.track({type:0,doc:R}),D=!0):_&&!R&&(r.track({type:1,doc:_}),D=!0,(u||h)&&(l=!0)),D&&(R?(a=a.add(R),i=M?i.add(m):i.delete(m)):(a=a.delete(m),i=i.delete(m)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),i=i.delete(m.key),r.track({type:1,doc:m})}return{tu:a,iu:r,Cs:l,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort(((m,p)=>(function(R,P){const M=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return te(20277,{Rt:D})}};return M(R)-M(P)})(m.type,p.type)||this.eu(m.doc,p.doc))),this.ou(r),s=s??!1;const l=t&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,h=u!==this.Za;return this.Za=u,a.length!==0||h?{snapshot:new Dr(this.query,e.tu,i,a,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new vu,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=ve(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const t=[];return e.forEach((r=>{this.Xa.has(r)||t.push(new qh(r))})),this.Xa.forEach((r=>{e.has(r)||t.push(new jh(r))})),t}cu(e){this.Ya=e.Qs,this.Xa=ve();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Dr.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const ic="SyncEngine";class Yv{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Zv{constructor(e){this.key=e,this.hu=!1}}class eE{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new ar((l=>ih(l)),Ki),this.Iu=new Map,this.Eu=new Set,this.du=new Oe(Y.comparator),this.Au=new Map,this.Ru=new Ha,this.Vu={},this.mu=new Map,this.fu=Lr.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function tE(n,e,t=!0){const r=Kh(n);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await $h(r,e,t,!0),s}async function nE(n,e){const t=Kh(n);await $h(t,e,!0,!1)}async function $h(n,e,t,r){const s=await wv(n.localStore,Qt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await rE(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Vh(n.remoteStore,s),l}async function rE(n,e,t,r,s){n.pu=(p,_,R)=>(async function(M,D,W,ce){let $=D.view.ru(W);$.Cs&&($=await fu(M.localStore,D.query,!1).then((({documents:I})=>D.view.ru(I,$))));const ne=ce&&ce.targetChanges.get(D.targetId),Q=ce&&ce.targetMismatches.get(D.targetId)!=null,Z=D.view.applyChanges($,M.isPrimaryClient,ne,Q);return bu(M,D.targetId,Z.au),Z.snapshot})(n,p,_,R);const i=await fu(n.localStore,e,!0),a=new Xv(e,i.Qs),l=a.ru(i.documents),u=Os.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(l,n.isPrimaryClient,u);bu(n,t,h.au);const m=new Yv(e,t,a);return n.Tu.set(e,m),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),h.snapshot}async function sE(n,e,t){const r=ae(n),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((a=>!Ki(a,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await oa(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Qa(r.remoteStore,s.targetId),la(r,s.targetId)})).catch(Br)):(la(r,s.targetId),await oa(r.localStore,s.targetId,!0))}async function iE(n,e){const t=ae(n),r=t.Tu.get(e),s=t.Iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Qa(t.remoteStore,r.targetId))}async function oE(n,e,t){const r=fE(n);try{const s=await(function(a,l){const u=ae(a),h=Ve.now(),m=l.reduce(((R,P)=>R.add(P.key)),ve());let p,_;return u.persistence.runTransaction("Locally write mutations","readwrite",(R=>{let P=dn(),M=ve();return u.Ns.getEntries(R,m).next((D=>{P=D,P.forEach(((W,ce)=>{ce.isValidDocument()||(M=M.add(W))}))})).next((()=>u.localDocuments.getOverlayedDocuments(R,P))).next((D=>{p=D;const W=[];for(const ce of l){const $=b_(ce,p.get(ce.key).overlayedDocument);$!=null&&W.push(new $n(ce.key,$,Xd($.value.mapValue),Ke.exists(!0)))}return u.mutationQueue.addMutationBatch(R,h,W,l)})).next((D=>{_=D;const W=D.applyToLocalDocumentSet(p,M);return u.documentOverlayCache.saveOverlays(R,D.batchId,W)}))})).then((()=>({batchId:_.batchId,changes:ch(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(a,l,u){let h=a.Vu[a.currentUser.toKey()];h||(h=new Oe(_e)),h=h.insert(l,u),a.Vu[a.currentUser.toKey()]=h})(r,s.batchId,t),await Us(r,s.changes),await to(r.remoteStore)}catch(s){const i=ec(s,"Failed to persist write");t.reject(i)}}async function Hh(n,e){const t=ae(n);try{const r=await vv(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const a=t.Au.get(i);a&&(we(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?we(a.hu,14607):s.removedDocuments.size>0&&(we(a.hu,42227),a.hu=!1))})),await Us(t,r,e)}catch(r){await Br(r)}}function wu(n,e,t){const r=ae(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach(((i,a)=>{const l=a.view.va(e);l.snapshot&&s.push(l.snapshot)})),(function(a,l){const u=ae(a);u.onlineState=l;let h=!1;u.queries.forEach(((m,p)=>{for(const _ of p.Sa)_.va(l)&&(h=!0)})),h&&rc(u)})(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function aE(n,e,t){const r=ae(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),i=s&&s.key;if(i){let a=new Oe(Y.comparator);a=a.insert(i,rt.newNoDocument(i,se.min()));const l=ve().add(i),u=new Yi(se.min(),new Map,new Oe(_e),a,l);await Hh(r,u),r.du=r.du.remove(i),r.Au.delete(e),oc(r)}else await oa(r.localStore,e,!1).then((()=>la(r,e,t))).catch(Br)}async function cE(n,e){const t=ae(n),r=e.batch.batchId;try{const s=await _v(t.localStore,e);Gh(t,r,null),zh(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Us(t,s)}catch(s){await Br(s)}}async function lE(n,e,t){const r=ae(n);try{const s=await(function(a,l){const u=ae(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let m;return u.mutationQueue.lookupMutationBatch(h,l).next((p=>(we(p!==null,37113),m=p.keys(),u.mutationQueue.removeMutationBatch(h,p)))).next((()=>u.mutationQueue.performConsistencyCheck(h))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(h,m,l))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,m))).next((()=>u.localDocuments.getDocuments(h,m)))}))})(r.localStore,e);Gh(r,e,t),zh(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Us(r,s)}catch(s){await Br(s)}}function zh(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function Gh(n,e,t){const r=ae(n);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function la(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((r=>{n.Ru.containsKey(r)||Wh(n,r)}))}function Wh(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Qa(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),oc(n))}function bu(n,e,t){for(const r of t)r instanceof jh?(n.Ru.addReference(r.key,e),uE(n,r)):r instanceof qh?(q(ic,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||Wh(n,r.key)):te(19791,{wu:r})}function uE(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(q(ic,"New document in limbo: "+t),n.Eu.add(r),oc(n))}function oc(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new Y(Re.fromString(e)),r=n.fu.next();n.Au.set(r,new Zv(t)),n.du=n.du.insert(t,r),Vh(n.remoteStore,new Sn(Qt(Wi(t.path)),r,"TargetPurposeLimboResolution",zi.ce))}}async function Us(n,e,t){const r=ae(n),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach(((l,u)=>{a.push(r.pu(u,e,t).then((h=>{if((h||t)&&r.isPrimaryClient){const m=h?!h.fromCache:t?.targetChanges.get(u.targetId)?.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){s.push(h);const m=Ga.As(u.targetId,h);i.push(m)}})))})),await Promise.all(a),r.Pu.H_(s),await(async function(u,h){const m=ae(u);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>N.forEach(h,(_=>N.forEach(_.Es,(R=>m.persistence.referenceDelegate.addReference(p,_.targetId,R))).next((()=>N.forEach(_.ds,(R=>m.persistence.referenceDelegate.removeReference(p,_.targetId,R)))))))))}catch(p){if(!jr(p))throw p;q(Wa,"Failed to update sequence numbers: "+p)}for(const p of h){const _=p.targetId;if(!p.fromCache){const R=m.Ms.get(_),P=R.snapshotVersion,M=R.withLastLimboFreeSnapshotVersion(P);m.Ms=m.Ms.insert(_,M)}}})(r.localStore,i))}async function dE(n,e){const t=ae(n);if(!t.currentUser.isEqual(e)){q(ic,"User change. New user:",e.toKey());const r=await Nh(t.localStore,e);t.currentUser=e,(function(i,a){i.mu.forEach((l=>{l.forEach((u=>{u.reject(new B(k.CANCELLED,a))}))})),i.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Us(t,r.Ls)}}function hE(n,e){const t=ae(n),r=t.Au.get(e);if(r&&r.hu)return ve().add(r.key);{let s=ve();const i=t.Iu.get(e);if(!i)return s;for(const a of i){const l=t.Tu.get(a);s=s.unionWith(l.view.nu)}return s}}function Kh(n){const e=ae(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Hh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=hE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=aE.bind(null,e),e.Pu.H_=Qv.bind(null,e.eventManager),e.Pu.yu=Jv.bind(null,e.eventManager),e}function fE(n){const e=ae(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=cE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=lE.bind(null,e),e}class Ni{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Zi(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return yv(this.persistence,new mv,e.initialUser,this.serializer)}Cu(e){return new kh(za.mi,this.serializer)}Du(e){return new Tv}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ni.provider={build:()=>new Ni};class mE extends Ni{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){we(this.persistence.referenceDelegate instanceof xi,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Z_(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?wt.withCacheSize(this.cacheSizeBytes):wt.DEFAULT;return new kh((r=>xi.mi(r,t)),this.serializer)}}class ua{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>wu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=dE.bind(null,this.syncEngine),await Gv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Kv})()}createDatastore(e){const t=Zi(e.databaseInfo.databaseId),r=(function(i){return new Pv(i)})(e.databaseInfo);return(function(i,a,l,u){return new Lv(i,a,l,u)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,i,a,l){return new Vv(r,s,i,a,l)})(this.localStore,this.datastore,e.asyncQueue,(t=>wu(this.syncEngine,t,0)),(function(){return gu.v()?new gu:new Av})())}createSyncEngine(e,t){return(function(s,i,a,l,u,h,m){const p=new eE(s,i,a,l,u,h);return m&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const r=ae(t);q(or,"RemoteStore shutting down."),r.Ea.add(5),await Fs(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}ua.provider={build:()=>new ua};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):un("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new B(k.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await(async function(s,i){const a=ae(s),l={documents:i.map((p=>Pi(a.serializer,p)))},u=await a.Ho("BatchGetDocuments",a.serializer.databaseId,Re.emptyPath(),l,i.length),h=new Map;u.forEach((p=>{const _=M_(a.serializer,p);h.set(_.key.toString(),_)}));const m=[];return i.forEach((p=>{const _=h.get(p.toString());we(!!_,55234,{key:p}),m.push(_)})),m})(this.datastore,e);return t.forEach((r=>this.recordVersion(r))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ms(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((t,r)=>{const s=Y.fromPath(r);this.mutations.push(new yh(s,this.precondition(s)))})),await(async function(r,s){const i=ae(r),a={writes:s.map((l=>Ch(i.serializer,l)))};await i.Go("Commit",i.serializer.databaseId,Re.emptyPath(),a)})(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw te(50498,{Gu:e.constructor.name});t=se.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new B(k.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(se.min())?Ke.exists(!1):Ke.updateTime(t):Ke.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(se.min()))throw new B(k.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ke.updateTime(t)}return Ke.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e,t,r,s,i){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=s,this.deferred=i,this.zu=r.maxAttempts,this.M_=new Ka(this.asyncQueue,"transaction_retry")}ju(){this.zu-=1,this.Ju()}Ju(){this.M_.p_((async()=>{const e=new pE(this.datastore),t=this.Hu(e);t&&t.then((r=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(r)})).catch((s=>{this.Yu(s)}))))})).catch((r=>{this.Yu(r)}))}))}Hu(e){try{const t=this.updateFunction(e);return!Ls(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Yu(e){this.zu>0&&this.Zu(e)?(this.zu-=1,this.asyncQueue.enqueueAndForget((()=>(this.Ju(),Promise.resolve())))):this.deferred.reject(e)}Zu(e){if(e?.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!_h(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn="FirestoreClient";class yE{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=ht.UNAUTHENTICATED,this.clientId=La.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{q(Bn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(q(Bn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Kt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ec(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Do(n,e){n.asyncQueue.verifyOperationInProgress(),q(Bn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Nh(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Tu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await _E(n);q(Bn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>_u(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>_u(e.remoteStore,s))),n._onlineComponents=e}async function _E(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){q(Bn,"Using user provided OfflineComponentProvider");try{await Do(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===k.FAILED_PRECONDITION||s.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;Sr("Error using user provided cache. Falling back to memory cache: "+t),await Do(n,new Ni)}}else q(Bn,"Using default OfflineComponentProvider"),await Do(n,new mE(void 0));return n._offlineComponents}async function cc(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(q(Bn,"Using user provided OnlineComponentProvider"),await Tu(n,n._uninitializedComponentsProvider._online)):(q(Bn,"Using default OnlineComponentProvider"),await Tu(n,new ua))),n._onlineComponents}function vE(n){return cc(n).then((e=>e.syncEngine))}function EE(n){return cc(n).then((e=>e.datastore))}async function Li(n){const e=await cc(n),t=e.eventManager;return t.onListen=tE.bind(null,e.syncEngine),t.onUnlisten=sE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=nE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=iE.bind(null,e.syncEngine),t}function IE(n,e,t={}){const r=new Kt;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,l,u,h){const m=new ac({next:_=>{m.Nu(),a.enqueueAndForget((()=>nc(i,p)));const R=_.docs.has(l);!R&&_.fromCache?h.reject(new B(k.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&_.fromCache&&u&&u.source==="server"?h.reject(new B(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(_)},error:_=>h.reject(_)}),p=new sc(Wi(l.path),m,{includeMetadataChanges:!0,qa:!0});return tc(i,p)})(await Li(n),n.asyncQueue,e,t,r))),r.promise}function wE(n,e,t={}){const r=new Kt;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,l,u,h){const m=new ac({next:_=>{m.Nu(),a.enqueueAndForget((()=>nc(i,p))),_.fromCache&&u.source==="server"?h.reject(new B(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(_)},error:_=>h.reject(_)}),p=new sc(l,m,{includeMetadataChanges:!0,qa:!0});return tc(i,p)})(await Li(n),n.asyncQueue,e,t,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qh(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh="firestore.googleapis.com",Cu=!0;class Su{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new B(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Jh,this.ssl=Cu}else this.host=e.host,this.ssl=e.ssl??Cu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=xh;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<X_)throw new B(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Oy("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Qh(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new B(k.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new B(k.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new B(k.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class no{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Su({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Su(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Sy;switch(r.type){case"firstParty":return new ky(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Au.get(t);r&&(q("ComponentProvider","Removing Datastore"),Au.delete(t),r.terminate())})(this),Promise.resolve()}}function bE(n,e,t,r={}){n=ft(n,no);const s=Mr(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;s&&(Wu(`https://${l}`),Ku("Firestore",!0)),i.host!==Jh&&i.host!==l&&Sr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!on(u,a)&&(n._setSettings(u),r.mockUserToken)){let h,m;if(typeof r.mockUserToken=="string")h=r.mockUserToken,m=ht.MOCK_USER;else{h=Yf(r.mockUserToken,n._app?.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new B(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new ht(p)}n._authCredentials=new Ry(new Ud(h,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new lr(this.firestore,e,this._query)}}class Me{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ln(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Me(this.firestore,e,this._key)}toJSON(){return{type:Me._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Ns(t,Me._jsonSchema))return new Me(e,r||null,new Y(Re.fromString(t.referencePath)))}}Me._jsonSchemaVersion="firestore/documentReference/1.0",Me._jsonSchema={type:Qe("string",Me._jsonSchemaVersion),referencePath:Qe("string")};class Ln extends lr{constructor(e,t,r){super(e,t,Wi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Me(this.firestore,null,new Y(e))}withConverter(e){return new Ln(this.firestore,e,this._path)}}function Ie(n,e,...t){if(n=qe(n),Bd("collection","path",e),n instanceof no){const r=Re.fromString(e,...t);return Bl(r),new Ln(n,null,r)}{if(!(n instanceof Me||n instanceof Ln))throw new B(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Re.fromString(e,...t));return Bl(r),new Ln(n.firestore,null,r)}}function fe(n,e,...t){if(n=qe(n),arguments.length===1&&(e=La.newId()),Bd("doc","path",e),n instanceof no){const r=Re.fromString(e,...t);return Ul(r),new Me(n,null,new Y(r))}{if(!(n instanceof Me||n instanceof Ln))throw new B(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Re.fromString(e,...t));return Ul(r),new Me(n.firestore,n instanceof Ln?n.converter:null,new Y(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru="AsyncQueue";class Pu{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Ka(this,"async_queue_retry"),this._c=()=>{const r=Lo();r&&q(Ru,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=Lo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Lo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Kt;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!jr(e))throw e;q(Ru,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,un("INTERNAL UNHANDLED ERROR: ",xu(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=Za.createAndSchedule(this,e,t,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&te(47125,{Pc:xu(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function xu(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(n,["next","error","complete"])}class Ot extends no{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Pu,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Pu(e),this._firestoreClient=void 0,await e}}}function Xh(n,e){const t=typeof n=="object"?n:Yu(),r=typeof n=="string"?n:bi,s=wa(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Jf("firestore");i&&bE(s,...i)}return s}function $r(n){if(n._terminated)throw new B(k.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||TE(n),n._firestoreClient}function TE(n){const e=n._freezeSettings(),t=(function(s,i,a,l){return new Ky(s,i,a,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Qh(l.experimentalLongPollingOptions),l.useFetchStreams,l.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new yE(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this._byteString=e}static fromBase64String(e){try{return new At(lt.fromBase64String(e))}catch(t){throw new B(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new At(lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:At._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ns(e,At._jsonSchema))return At.fromBase64String(e.bytes)}}At._jsonSchemaVersion="firestore/bytes/1.0",At._jsonSchema={type:Qe("string",At._jsonSchemaVersion),bytes:Qe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new B(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new B(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new B(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return _e(this._lat,e._lat)||_e(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Jt._jsonSchemaVersion}}static fromJSON(e){if(Ns(e,Jt._jsonSchema))return new Jt(e.latitude,e.longitude)}}Jt._jsonSchemaVersion="firestore/geoPoint/1.0",Jt._jsonSchema={type:Qe("string",Jt._jsonSchemaVersion),latitude:Qe("number"),longitude:Qe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Xt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ns(e,Xt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Xt(e.vectorValues);throw new B(k.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Xt._jsonSchemaVersion="firestore/vectorValue/1.0",Xt._jsonSchema={type:Qe("string",Xt._jsonSchemaVersion),vectorValues:Qe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AE=/^__.*__$/;class CE{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new $n(e,this.data,this.fieldMask,t,this.fieldTransforms):new Vs(e,this.data,t,this.fieldTransforms)}}class Yh{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new $n(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Zh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te(40011,{Ac:n})}}class ro{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new ro({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Di(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Zh(this.Ac)&&AE.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class SE{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Zi(e)}Cc(e,t,r,s=!1){return new ro({Ac:e,methodName:t,Dc:r,path:at.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Gr(n){const e=n._freezeSettings(),t=Zi(n._databaseId);return new SE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function so(n,e,t,r,s,i={}){const a=n.Cc(i.merge||i.mergeFields?2:0,e,t,s);mc("Data must be an object, but it was:",a,r);const l=tf(r,a);let u,h;if(i.merge)u=new Ct(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const m=[];for(const p of i.mergeFields){const _=da(e,p,t);if(!a.contains(_))throw new B(k.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);rf(m,_)||m.push(_)}u=new Ct(m),h=a.fieldTransforms.filter((p=>u.covers(p.field)))}else u=null,h=a.fieldTransforms;return new CE(new _t(l),u,h)}class io extends zr{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof io}}function ef(n,e,t){return new ro({Ac:3,Dc:e.settings.Dc,methodName:n._methodName,fc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class lc extends zr{_toFieldTransform(e){return new Ba(e.path,new bs)}isEqual(e){return e instanceof lc}}class uc extends zr{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=ef(this,e,!0),r=this.vc.map((i=>ur(i,t))),s=new kr(r);return new Ba(e.path,s)}isEqual(e){return e instanceof uc&&on(this.vc,e.vc)}}class dc extends zr{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=ef(this,e,!0),r=this.vc.map((i=>ur(i,t))),s=new Nr(r);return new Ba(e.path,s)}isEqual(e){return e instanceof dc&&on(this.vc,e.vc)}}function hc(n,e,t,r){const s=n.Cc(1,e,t);mc("Data must be an object, but it was:",s,r);const i=[],a=_t.empty();qn(r,((u,h)=>{const m=pc(e,u,t);h=qe(h);const p=s.yc(m);if(h instanceof io)i.push(m);else{const _=ur(h,p);_!=null&&(i.push(m),a.set(m,_))}}));const l=new Ct(i);return new Yh(a,l,s.fieldTransforms)}function fc(n,e,t,r,s,i){const a=n.Cc(1,e,t),l=[da(e,r,t)],u=[s];if(i.length%2!=0)throw new B(k.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<i.length;_+=2)l.push(da(e,i[_])),u.push(i[_+1]);const h=[],m=_t.empty();for(let _=l.length-1;_>=0;--_)if(!rf(h,l[_])){const R=l[_];let P=u[_];P=qe(P);const M=a.yc(R);if(P instanceof io)h.push(R);else{const D=ur(P,M);D!=null&&(h.push(R),m.set(R,D))}}const p=new Ct(h);return new Yh(m,p,a.fieldTransforms)}function RE(n,e,t,r=!1){return ur(t,n.Cc(r?4:3,e))}function ur(n,e){if(nf(n=qe(n)))return mc("Unsupported field value:",e,n),tf(n,e);if(n instanceof zr)return(function(r,s){if(!Zh(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,s){const i=[];let a=0;for(const l of r){let u=ur(l,s.wc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}})(n,e)}return(function(r,s){if((r=qe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return y_(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ve.fromDate(r);return{timestampValue:Ri(s.serializer,i)}}if(r instanceof Ve){const i=new Ve(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ri(s.serializer,i)}}if(r instanceof Jt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof At)return{bytesValue:wh(s.serializer,r._byteString)};if(r instanceof Me){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:$a(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Xt)return(function(a,l){return{mapValue:{fields:{[Qd]:{stringValue:Jd},[Ti]:{arrayValue:{values:a.toArray().map((h=>{if(typeof h!="number")throw l.Sc("VectorValues must only contain numeric values.");return Ua(l.serializer,h)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${Hi(r)}`)})(n,e)}function tf(n,e){const t={};return $d(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):qn(n,((r,s)=>{const i=ur(s,e.mc(r));i!=null&&(t[r]=i)})),{mapValue:{fields:t}}}function nf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ve||n instanceof Jt||n instanceof At||n instanceof Me||n instanceof zr||n instanceof Xt)}function mc(n,e,t){if(!nf(t)||!jd(t)){const r=Hi(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function da(n,e,t){if((e=qe(e))instanceof Hr)return e._internalPath;if(typeof e=="string")return pc(n,e);throw Di("Field path arguments must be of type string or ",n,!1,void 0,t)}const PE=new RegExp("[~\\*/\\[\\]]");function pc(n,e,t){if(e.search(PE)>=0)throw Di(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Hr(...e.split("."))._internalPath}catch{throw Di(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Di(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new B(k.INVALID_ARGUMENT,l+n+u)}function rf(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Me(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new xE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(gc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class xE extends Vi{data(){return super.data()}}function gc(n,e){return typeof e=="string"?pc(n,e):e instanceof Hr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new B(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class yc{}class kE extends yc{}function vt(n,e,...t){let r=[];e instanceof yc&&r.push(e),r=r.concat(t),(function(i){const a=i.filter((u=>u instanceof _c)).length,l=i.filter((u=>u instanceof oo)).length;if(a>1||a>0&&l>0)throw new B(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class oo extends kE{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new oo(e,t,r)}_apply(e){const t=this._parse(e);return of(e._query,t),new lr(e.firestore,e.converter,ta(e._query,t))}_parse(e){const t=Gr(e.firestore);return(function(i,a,l,u,h,m,p){let _;if(h.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new B(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Lu(p,m);const P=[];for(const M of p)P.push(Nu(u,i,M));_={arrayValue:{values:P}}}else _=Nu(u,i,p)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Lu(p,m),_=RE(l,a,p,m==="in"||m==="not-in");return We.create(h,m,_)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Je(n,e,t){const r=e,s=gc("where",n);return oo._create(s,r,t)}class _c extends yc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new _c(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:Mt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let a=s;const l=i.getFlattenedFilters();for(const u of l)of(a,u),a=ta(a,u)})(e._query,t),new lr(e.firestore,e.converter,ta(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Nu(n,e,t){if(typeof(t=qe(t))=="string"){if(t==="")throw new B(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!sh(e)&&t.indexOf("/")!==-1)throw new B(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Re.fromString(t));if(!Y.isDocumentKey(r))throw new B(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Kl(n,new Y(r))}if(t instanceof Me)return Kl(n,t._key);throw new B(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Hi(t)}.`)}function Lu(n,e){if(!Array.isArray(n)||n.length===0)throw new B(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function of(n,e){const t=(function(s,i){for(const a of s)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new B(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class af{convertValue(e,t="none"){switch(Fn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(On(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw te(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return qn(e,((s,i)=>{r[s]=this.convertValue(i,t)})),r}convertVectorValue(e){const t=e.fields?.[Ti].arrayValue?.values?.map((r=>je(r.doubleValue)));return new Xt(t)}convertGeoPoint(e){return new Jt(je(e.latitude),je(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Gi(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Es(e));default:return null}}convertTimestamp(e){const t=Mn(e);return new Ve(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Re.fromString(e);we(Ph(r),9688,{name:e});const s=new Is(r.get(1),r.get(3)),i=new Y(r.popFirst(5));return s.isEqual(t)||un(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class NE extends af{constructor(e){super(),this.firestore=e}convertBytes(e){return new At(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Me(this.firestore,null,t)}}class Er{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Dn extends Vi{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new fi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(gc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new B(k.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Dn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Dn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Dn._jsonSchema={type:Qe("string",Dn._jsonSchemaVersion),bundleSource:Qe("string","DocumentSnapshot"),bundleName:Qe("string"),bundle:Qe("string")};class fi extends Dn{data(e={}){return super.data(e)}}class tr{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Er(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new fi(this._firestore,this._userDataWriter,r.key,r,new Er(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new B(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((l=>{const u=new fi(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Er(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const u=new fi(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Er(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,m=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),m=a.indexOf(l.doc.key)),{type:LE(l.type),doc:u,oldIndex:h,newIndex:m}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new B(k.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=tr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=La.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function LE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return te(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(n){n=ft(n,Me);const e=ft(n.firestore,Ot);return IE($r(e),n._key).then((t=>cf(e,n,t)))}tr._jsonSchemaVersion="firestore/querySnapshot/1.0",tr._jsonSchema={type:Qe("string",tr._jsonSchemaVersion),bundleSource:Qe("string","QuerySnapshot"),bundleName:Qe("string"),bundle:Qe("string")};class co extends af{constructor(e){super(),this.firestore=e}convertBytes(e){return new At(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Me(this.firestore,null,t)}}function ct(n){n=ft(n,lr);const e=ft(n.firestore,Ot),t=$r(e),r=new co(e);return sf(n._query),wE(t,n._query).then((s=>new tr(e,r,n,s)))}function Mi(n,e,t){n=ft(n,Me);const r=ft(n.firestore,Ot),s=ao(n.converter,e,t);return Bs(r,[so(Gr(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Ke.none())])}function Yt(n,e,t,...r){n=ft(n,Me);const s=ft(n.firestore,Ot),i=Gr(s);let a;return a=typeof(e=qe(e))=="string"||e instanceof Hr?fc(i,"updateDoc",n._key,e,t,r):hc(i,"updateDoc",n._key,e),Bs(s,[a.toMutation(n._key,Ke.exists(!0))])}function jn(n){return Bs(ft(n.firestore,Ot),[new Ms(n._key,Ke.none())])}function Ut(n,e){const t=ft(n.firestore,Ot),r=fe(n),s=ao(n.converter,e);return Bs(t,[so(Gr(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Ke.exists(!1))]).then((()=>r))}function Vr(n,...e){n=qe(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||ku(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(ku(e[r])){const u=e[r];e[r]=u.next?.bind(u),e[r+1]=u.error?.bind(u),e[r+2]=u.complete?.bind(u)}let i,a,l;if(n instanceof Me)a=ft(n.firestore,Ot),l=Wi(n._key.path),i={next:u=>{e[r]&&e[r](cf(a,n,u))},error:e[r+1],complete:e[r+2]};else{const u=ft(n,lr);a=ft(u.firestore,Ot),l=u._query;const h=new co(a);i={next:m=>{e[r]&&e[r](new tr(a,h,u,m))},error:e[r+1],complete:e[r+2]},sf(n._query)}return(function(h,m,p,_){const R=new ac(_),P=new sc(m,R,p);return h.asyncQueue.enqueueAndForget((async()=>tc(await Li(h),P))),()=>{R.Nu(),h.asyncQueue.enqueueAndForget((async()=>nc(await Li(h),P)))}})($r(a),l,s,i)}function Bs(n,e){return(function(r,s){const i=new Kt;return r.asyncQueue.enqueueAndForget((async()=>oE(await vE(r),s,i))),i.promise})($r(n),e)}function cf(n,e,t){const r=t.docs.get(e._key),s=new co(n);return new Dn(n,s,e._key,r,new Er(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Gr(e)}set(e,t,r){this._verifyNotCommitted();const s=Rn(e,this._firestore),i=ao(s.converter,t,r),a=so(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(a.toMutation(s._key,Ke.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=Rn(e,this._firestore);let a;return a=typeof(t=qe(t))=="string"||t instanceof Hr?fc(this._dataReader,"WriteBatch.update",i._key,t,r,s):hc(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(a.toMutation(i._key,Ke.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Rn(e,this._firestore);return this._mutations=this._mutations.concat(new Ms(t._key,Ke.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new B(k.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Rn(n,e){if((n=qe(n)).firestore!==e)throw new B(k.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Gr(e)}get(e){const t=Rn(e,this._firestore),r=new NE(this._firestore);return this._transaction.lookup([t._key]).then((s=>{if(!s||s.length!==1)return te(24041);const i=s[0];if(i.isFoundDocument())return new Vi(this._firestore,r,i.key,i,t.converter);if(i.isNoDocument())return new Vi(this._firestore,r,t._key,null,t.converter);throw te(18433,{doc:i})}))}set(e,t,r){const s=Rn(e,this._firestore),i=ao(s.converter,t,r),a=so(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,r);return this._transaction.set(s._key,a),this}update(e,t,r,...s){const i=Rn(e,this._firestore);let a;return a=typeof(t=qe(t))=="string"||t instanceof Hr?fc(this._dataReader,"Transaction.update",i._key,t,r,s):hc(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,a),this}delete(e){const t=Rn(e,this._firestore);return this._transaction.delete(t._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE extends ME{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Rn(e,this._firestore),r=new co(this._firestore);return super.get(e).then((s=>new Dn(this._firestore,r,t._key,s._document,new Er(!1,!1),t.converter)))}}function FE(n,e,t){n=ft(n,Ot);const r={...DE,...t};return(function(i){if(i.maxAttempts<1)throw new B(k.INVALID_ARGUMENT,"Max attempts must be at least 1")})(r),(function(i,a,l){const u=new Kt;return i.asyncQueue.enqueueAndForget((async()=>{const h=await EE(i);new gE(i.asyncQueue,h,l,a,u).ju()})),u.promise})($r(n),(s=>e(new OE(n,s))),r)}function UE(){return new lc("serverTimestamp")}function Du(...n){return new uc("arrayUnion",n)}function ha(...n){return new dc("arrayRemove",n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(n){return $r(n=ft(n,Ot)),new VE(n,(e=>Bs(n,e)))}(function(e,t=!0){(function(s){Ur=s})(Or),Ar(new rr("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new Ot(new Py(r.getProvider("auth-internal")),new Ny(a,r.getProvider("app-check-internal")),(function(h,m){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new B(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Is(h.options.projectId,m)})(a,s),a);return i={useFetchStreams:t,...i},l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),kn(Vl,Ml,e),kn(Vl,Ml,"esm2020")})();const BE={apiKey:"AIzaSyDSefvdakWHETVykVqO221bk3JSekUOkk4",authDomain:"gustoplan-dev.firebaseapp.com",projectId:"gustoplan-dev",storageBucket:"gustoplan-dev.firebasestorage.app",messagingSenderId:"554162135180",appId:"1:554162135180:web:f5addf322a0977ffe31ba9"},vc=Xu(BE),F=Xh(vc),fa=by(vc),jE=Object.freeze(Object.defineProperty({__proto__:null,auth:fa,db:F,firebaseApp:vc},Symbol.toStringTag,{value:"Module"}));let Fi=null;function lf(){return new Promise(n=>{dg(fa,e=>{if(Fi=e,e){console.log("User is logged in:",e.uid);const t=document.getElementById("logout-btn"),r=document.getElementById("profile-btn");t&&t.classList.remove("hidden"),r&&r.classList.remove("hidden"),t&&!t.hasAttribute("data-listener-attached")&&(t.addEventListener("click",()=>{hg(fa).catch(s=>{console.error("Sign Out Error",s)})}),t.setAttribute("data-listener-attached","true")),n(e)}else{console.log("User not logged in. Redirecting to login.html");const t=window.location.origin+"/login.html";window.location.href!==t&&(window.location.href=t),n(null)}})})}function Rt(){return Fi?Fi.uid:null}function Bt(){return Fi}const qE=Object.freeze(Object.defineProperty({__proto__:null,getCurrentUser:Bt,getCurrentUserId:Rt,protectPage:lf},Symbol.toStringTag,{value:"Module"}));class Ec{constructor(e,t,r,s,i,a,l,u,h,m,p,_,R,P,M,D){this.db=e,this.modal=document.getElementById(t),this.form=document.getElementById(r),this.modalTitle=document.getElementById(s),this.recipeIdInput=document.getElementById(i),this.recipeNameInput=document.getElementById(a),this.recipeCategoryInput=document.getElementById(l),this.recipeServingsInput=document.getElementById(u),this.recipePrepTimeInput=document.getElementById(h),this.recipeDifficultyInput=document.getElementById(m),this.recipeStepsTextarea=document.getElementById(p),this.ingredientsListDiv=document.getElementById(_),this.addIngredientBtn=document.getElementById(R),this.saveRecipeBtn=document.getElementById(P),this.closeButton=document.getElementById(M),this.cancelButton=document.getElementById(D),this.masterIngredientList=[],this.boundAddIngredient=()=>this.addIngredientInput(void 0,this.form.ingredients),this.boundCloseForm=()=>this.closeForm(),this.boundHandleSubmit=W=>this.handleSubmit(W),this.addIngredientBtn.addEventListener("click",this.boundAddIngredient),this.closeButton.addEventListener("click",this.boundCloseForm),this.cancelButton.addEventListener("click",this.boundCloseForm),this.saveRecipeBtn.addEventListener("click",this.boundHandleSubmit)}destroy(){this.addIngredientBtn.removeEventListener("click",this.boundAddIngredient),this.closeButton.removeEventListener("click",this.boundCloseForm),this.cancelButton.removeEventListener("click",this.boundCloseForm),this.saveRecipeBtn.removeEventListener("click",this.boundHandleSubmit)}async openForm(e=null,t="Ajouter une recette"){await this.fetchMasterIngredients(),console.log("openForm called with recipe:",e,"and title:",t),this.form.reset(),this.ingredientsListDiv.innerHTML="",this.modalTitle.textContent=t;const r=[];if(this.form.ingredients=r,e){this.recipeIdInput.value=e.id||"",this.recipeNameInput.value=e.name||"";const s=e.category||"Plat";for(const i of this.recipeCategoryInput.options)if(i.value.toLowerCase()===s.toLowerCase()){i.selected=!0;break}this.recipeServingsInput.value=parseInt(e.servings)||"",this.recipePrepTimeInput.value=parseInt(e.prepTime)||"",this.recipeDifficultyInput.value=e.difficulty||"Moyen",this.recipeStepsTextarea.value=e.steps||"",e.ingredients&&e.ingredients.length>0?e.ingredients.forEach(i=>this.addIngredientInput({...i},r)):this.addIngredientInput(void 0,r)}else this.recipeIdInput.value="",this.addIngredientInput(void 0,r);this.modal.classList.remove("hidden")}closeForm(){this.modal.classList.add("hidden")}async fetchMasterIngredients(){if(this.masterIngredientList=[],!!this.db)try{const e=await ct(Ie(this.db,"ingredients"));this.masterIngredientList=e.docs.map(t=>({id:t.id,...t.data()})),this.masterIngredientList.sort((t,r)=>t.name.localeCompare(r.name))}catch(e){console.error("Erreur lors de la récupération de la liste des ingrédients: ",e),alert("Impossible de charger la liste des ingrédients de base. La recherche ne fonctionnera pas.")}}addIngredientInput(e={quantity:"",name:"",unit:""},t){const r=document.createElement("div");r.className="relative flex items-stretch space-x-2 ingredient-row";const s={...e};t.push(s);const i=t.length-1,a=document.createElement("input");a.type="text",a.className="ingredient-quantity mt-1 block w-1/4 rounded-md border-gray-300 shadow-sm",a.placeholder="Qté",a.value=s.quantity,a.addEventListener("change",_=>{t[i].quantity=_.target.value});const l=document.createElement("input");l.type="text",l.className="ingredient-unit mt-1 block w-1/4 rounded-md border-gray-300 shadow-sm bg-gray-100",l.placeholder="Unité",l.readOnly=!0,l.value=s.unit||"";const u=document.createElement("div");u.className="relative w-1/2";const h=document.createElement("input");h.type="text",h.className="ingredient-name mt-1 block w-full rounded-md border-gray-300 shadow-sm",h.placeholder="Chercher un ingrédient...",h.value=s.name,u.appendChild(h);const m=document.createElement("div");m.className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg mt-1 hidden max-h-48 overflow-y-auto",u.appendChild(m),h.addEventListener("input",()=>{const _=h.value.toLowerCase();if(!_){m.classList.add("hidden");return}const R=this.masterIngredientList.filter(M=>M.name.toLowerCase().includes(_));m.innerHTML="",R.forEach(M=>{const D=document.createElement("div");D.className="p-2 hover:bg-tomato hover:text-white cursor-pointer",D.textContent=M.name,D.addEventListener("click",()=>{h.value=M.name,l.value=M.unit,m.classList.add("hidden"),t[i].name=M.name,t[i].unit=M.unit,t[i].id=M.id}),m.appendChild(D)});const P=document.createElement("div");P.className="p-2 bg-blue-50 hover:bg-blue-200 cursor-pointer font-bold text-blue-700",P.textContent=`+ Créer "${h.value}"`,P.addEventListener("click",async()=>{const M=h.value,D="pièce(s)";try{const W=await Ut(Ie(this.db,"ingredients"),{name:M,unit:D});await this.fetchMasterIngredients(),h.value=M,l.value=D,m.classList.add("hidden"),t[i].name=M,t[i].unit=D,t[i].id=W.id}catch(W){console.error("Erreur d'ajout d'ingrédient",W),alert("L'ingrédient n'a pas pu être créé.")}}),m.appendChild(P),m.classList.remove("hidden")});const p=document.createElement("button");p.type="button",p.className="btn btn-ghost text-red-500 hover:bg-red-50 btn-sm mt-1",p.innerHTML='<i class="fas fa-trash"></i>',p.addEventListener("click",()=>{r.remove(),t[i]=null}),r.appendChild(u),r.appendChild(a),r.appendChild(l),r.appendChild(p),this.ingredientsListDiv.appendChild(r)}async handleSubmit(e){e.preventDefault(),this.saveRecipeBtn.disabled=!0,this.saveRecipeBtn.innerHTML='<i class="fas fa-spinner fa-spin mr-2"></i> Sauvegarde...',console.log("Ingredients array from form before filter:",this.form.ingredients);const t=this.form.ingredients.filter(i=>i!==null&&i.quantity&&i.name);console.log("Ingredients array after filter:",t);const r={name:this.recipeNameInput.value,category:this.recipeCategoryInput.value,servings:parseInt(this.recipeServingsInput.value)||0,prepTime:parseInt(this.recipePrepTimeInput.value)||0,difficulty:this.recipeDifficultyInput.value,steps:this.recipeStepsTextarea.value,ingredients:t,imageUrl:""};console.log("Recipe data being sent to Firebase:",r);const s=this.recipeIdInput.value;try{s?await Mi(fe(this.db,"recipes",s),r):await Ut(Ie(this.db,"recipes"),r),this.closeForm(),console.log("Recipe saved successfully!"),this.onSaveCallback&&this.onSaveCallback()}catch(i){console.error("Erreur de sauvegarde: ",i),alert("Une erreur est survenue lors de la sauvegarde.")}finally{this.saveRecipeBtn.disabled=!1,this.saveRecipeBtn.textContent="Sauvegarder"}}setOnSaveCallback(e){this.onSaveCallback=e}}const $E=Object.freeze(Object.defineProperty({__proto__:null,RecipeFormHandler:Ec},Symbol.toStringTag,{value:"Module"}));let ma=()=>{};function HE(){const n=document.getElementById("search-friends-input");return document.getElementById("search-friends-btn").addEventListener("click",()=>Vu(n.value)),n.addEventListener("keyup",t=>{t.key==="Enter"&&Vu(n.value)}),zE(),uf(),()=>{ma&&ma()}}async function zE(){const n=document.getElementById("friends-list-container"),e=Bt()?.uid;if(!e||!n)return;n.innerHTML='<p class="text-gray-500">Chargement...</p>';const t=fe(F,"users",e);ma=Vr(t,async r=>{if(!r.exists()){n.innerHTML='<p class="text-red-500">Erreur: Utilisateur non trouvé.</p>';return}const s=r.data().friends||[];if(n.innerHTML="",s.length===0){n.innerHTML=`<p class="text-gray-500">Vous n'avez pas encore d'amis. Utilisez la recherche pour en ajouter.</p>`;return}for(const i of s)try{const a=await Ft(fe(F,"users",i));a.exists()&&n.appendChild(GE(a.data()))}catch(a){console.error("Erreur de chargement d'un ami",a)}})}function GE(n){const e=document.createElement("div");e.className="bg-white p-3 rounded-lg flex items-center justify-between shadow-sm";const t=document.createElement("div");t.className="flex items-center",t.innerHTML=`
        <img src="${n.photoURL||"https://placehold.co/40"}" alt="Avatar" class="w-10 h-10 rounded-full mr-3">
        <div>
            <p class="font-bold">${n.displayName}</p>
            <p class="text-sm text-gray-500">${n.email}</p>
        </div>
    `;const r=document.createElement("button");return r.className="btn btn-ghost text-red-500 btn-sm",r.innerHTML='<i class="fas fa-user-times"></i>',r.title="Retirer cet ami",r.addEventListener("click",()=>WE(n.uid)),e.appendChild(t),e.appendChild(r),e}async function WE(n){const e=Bt()?.uid;if(!e||!n||!confirm("Voulez-vous vraiment retirer cet ami ?"))return;const t=fe(F,"users",e),r=fe(F,"users",n),s=Oi(F);s.update(t,{friends:ha(n)}),s.update(r,{friends:ha(e)});try{await s.commit()}catch(i){console.error("Erreur lors de la suppression de l'ami: ",i),alert("Une erreur est survenue.")}}async function Vu(n){const e=document.getElementById("search-results-container"),t=Bt()?.uid;if(!(!n||!e)){e.innerHTML='<p class="text-gray-500">Recherche en cours...</p>';try{const r=n.toLowerCase(),s=vt(Ie(F,"users"),Je("keywords","array-contains",r)),i=await ct(s);if(e.innerHTML="",i.empty){e.innerHTML='<p class="text-gray-500">Aucun utilisateur trouvé.</p>';return}i.forEach(a=>{const l=a.data();if(l.uid===t)return;const u=document.createElement("div");u.className="bg-gray-50 p-2 rounded-lg flex items-center justify-between",u.innerHTML=`
                <div class="flex items-center">
                    <img src="${l.photoURL||"https://placehold.co/32"}" class="w-8 h-8 rounded-full mr-2">
                    <span class="font-medium text-sm">${l.displayName}</span>
                </div>
            `;const h=document.createElement("button");h.className="btn btn-secondary btn-xs",h.innerHTML='<i class="fas fa-user-plus"></i>',h.addEventListener("click",()=>KE(l.uid)),u.appendChild(h),e.appendChild(u)})}catch(r){console.error("Erreur de recherche: ",r),e.innerHTML='<p class="text-red-500">Erreur de recherche.</p>'}}}async function KE(n){const e=Bt()?.uid;if(!e||e===n)return;const t=vt(Ie(F,"friend_requests"),Je("senderId","in",[e,n]),Je("receiverId","in",[e,n]));if(!(await ct(t)).empty)return alert("Une demande d'ami existe déjà avec cet utilisateur.");if((await Ft(fe(F,"users",e))).data()?.friends?.includes(n))return alert("Vous êtes déjà ami avec cet utilisateur.");try{await addDoc(Ie(F,"friend_requests"),{senderId:e,receiverId:n,status:"pending",createdAt:UE()}),alert("Demande d'ami envoyée !")}catch(i){console.error("Erreur lors de l'envoi de la demande d'ami: ",i),alert("Une erreur est survenue.")}}async function uf(){const n=document.getElementById("pending-requests-container"),e=document.getElementById("declined-requests-container"),t=Bt()?.uid;if(!(!t||!n||!e)){n.innerHTML='<p class="text-gray-500">Chargement...</p>',e.innerHTML='<p class="text-gray-500">Chargement...</p>';try{const r=vt(Ie(F,"friend_requests"),Je("senderId","==",t)),s=await ct(r),i=[],a=[];for(const l of s.docs){const u={id:l.id,...l.data()},h=await Ft(fe(F,"users",u.receiverId));h.exists()&&(u.receiver=h.data()),u.status==="pending"?i.push(u):u.status==="declined"&&a.push(u)}n.innerHTML="",i.length>0?i.forEach(l=>n.appendChild(Mu(l))):n.innerHTML='<p class="text-gray-500">Aucune demande en attente.</p>',e.innerHTML="",a.length>0?a.forEach(l=>e.appendChild(Mu(l))):e.innerHTML='<p class="text-gray-500">Aucune demande rejetée.</p>'}catch(r){console.error("Erreur lors du chargement des demandes envoyées: ",r),n.innerHTML='<p class="text-red-500">Erreur de chargement.</p>',e.innerHTML='<p class="text-red-500">Erreur de chargement.</p>'}}}function Mu(n){const e=document.createElement("div");e.className="bg-white p-3 rounded-lg flex items-center justify-between shadow-sm";const t=n.receiver,r=document.createElement("div");r.className="flex items-center",r.innerHTML=`
        <img src="${t?.photoURL||"https://placehold.co/40"}" alt="Avatar" class="w-10 h-10 rounded-full mr-3">
        <div>
            <p class="font-bold">${t?.displayName||"Utilisateur inconnu"}</p>
            <p class="text-sm text-gray-500">Statut : <span class="font-medium">${n.status}</span></p>
        </div>
    `;const s=document.createElement("button");return s.className="btn btn-ghost text-red-500 btn-sm",s.innerHTML='<i class="fas fa-times-circle"></i>',s.title="Annuler la demande",s.addEventListener("click",async()=>{confirm("Voulez-vous vraiment annuler cette demande ?")&&(await deleteDoc(fe(F,"friend_requests",n.id)),uf())}),e.appendChild(r),e.appendChild(s),e}async function df(n,e){const t=Bt()?.uid;if(!t||!e)return;const r=fe(F,"users",t),s=fe(F,"users",e),i=fe(F,"friend_requests",n),a=Oi(F);a.update(r,{friends:Du(e)}),a.update(s,{friends:Du(t)}),a.delete(i);try{await a.commit()}catch(l){throw console.error("Erreur lors de l'acceptation de la demande d'ami: ",l),l}}async function hf(n){try{const e=fe(F,"friend_requests",n);await Yt(e,{status:"declined"})}catch(e){throw console.error("Erreur lors du refus de la demande d'ami: ",e),e}}const QE=Object.freeze(Object.defineProperty({__proto__:null,acceptFriendRequest:df,declineFriendRequest:hf,default:HE},Symbol.toStringTag,{value:"Module"}));function JE(){const n=document.getElementById("ingredients-list-container"),e=document.getElementById("add-ingredient-btn"),t=document.getElementById("category-tabs"),r=document.getElementById("search-bar"),s=document.getElementById("ingredient-form-modal"),i=document.getElementById("ingredient-modal-title"),a=document.getElementById("close-ingredient-modal"),l=document.getElementById("cancel-ingredient-btn"),u=document.getElementById("ingredient-form"),h=document.getElementById("ingredient-id"),m=document.getElementById("ingredient-name"),p=document.getElementById("ingredient-unit"),_=document.getElementById("ingredient-category"),R=document.getElementById("manage-categories-btn"),P=document.getElementById("category-management-modal"),M=document.getElementById("close-category-modal"),D=document.getElementById("done-category-modal-btn"),W=document.getElementById("add-category-form"),ce=document.getElementById("new-category-name"),$=document.getElementById("category-list");let ne=[],Q=[],Z="",I="",g=null;const y=["g","kg","ml","l","pièce(s)","c.à.s.","c.à.c.","pincée(s)"];async function w(){await E(),await b()}async function E(){if(F)try{Q=(await ct(Ie(F,"ingredient_categories"))).docs.map(ee=>({id:ee.id,...ee.data()})),Q.sort((ee,G)=>ee.name.localeCompare(G.name))}catch(ie){console.error("Erreur lors de la récupération des catégories: ",ie)}}async function b(){if(F)try{ne=(await ct(Ie(F,"ingredients"))).docs.map(ee=>({id:ee.id,...ee.data()})),ge(),Ne()}catch(ie){console.error("Erreur de chargement des ingrédients: ",ie)}}function v(ie=null){u.reset(),p.innerHTML="",y.forEach(le=>{const Ce=document.createElement("option");Ce.value=le,Ce.textContent=le,p.appendChild(Ce)});const ee=Q.map(le=>le.name),G=[...new Set(ne.map(le=>le.category).filter(Boolean))],K=[...new Set([...ee,...G])];K.sort((le,Ce)=>le.localeCompare(Ce.name)),_.innerHTML="",K.forEach(le=>{const Ce=document.createElement("option");Ce.value=le,Ce.textContent=le,_.appendChild(Ce)}),ie?(i.textContent="Modifier l'ingrédient",h.value=ie.id,m.value=ie.name,p.value=ie.unit||"",_.value=ie.category||(K.length>0?K[0]:"")):(i.textContent="Ajouter un ingrédient",h.value="",p.value=y[0],_.value=Z||(K.length>0?K[0]:"")),s.classList.remove("hidden")}function xe(){s.classList.add("hidden")}async function re(ie){ie.preventDefault();const ee=h.value,G={name:m.value,unit:p.value,category:_.value};if(!G.name||!G.category){alert("Le nom et la catégorie sont requis.");return}try{ee?await Mi(fe(F,"ingredients",ee),G):await Ut(Ie(F,"ingredients"),G),xe(),await b()}catch(K){console.error("Erreur de sauvegarde de l'ingrédient: ",K)}}function z(){de(),P.classList.remove("hidden")}function pe(){P.classList.add("hidden")}function de(){if($.innerHTML="",Q.length===0){$.innerHTML='<p class="text-gray-500">Aucune catégorie définie.</p>';return}Q.forEach(ie=>{const ee=document.createElement("div");ee.className="flex items-center justify-between p-2 border-b";const G=document.createElement("span");G.textContent=ie.name,ee.appendChild(G);const K=document.createElement("div");K.className="flex space-x-2";const le=document.createElement("button");le.className="btn btn-ghost btn-xs text-blue-500",le.innerHTML='<i class="fas fa-edit"></i>',le.addEventListener("click",()=>Te(ie)),K.appendChild(le);const Ce=document.createElement("button");Ce.className="btn btn-ghost btn-xs text-red-500",Ce.innerHTML='<i class="fas fa-trash"></i>',Ce.addEventListener("click",()=>Fe(ie)),K.appendChild(Ce),ee.appendChild(K),$.appendChild(ee)})}async function Ae(ie){ie.preventDefault();const ee=ce.value.trim();if(ee&&!Q.find(G=>G.name.toLowerCase()===ee.toLowerCase()))try{await Ut(Ie(F,"ingredient_categories"),{name:ee}),ce.value="",await E(),de(),ge()}catch(G){console.error("Erreur d'ajout de catégorie: ",G)}else alert("Cette catégorie existe déjà ou le nom est invalide.")}async function Te(ie){const ee=ie.name,G=prompt(`Entrez le nouveau nom pour la catégorie "${ee}":`,ee);if(G&&G.trim()!==""&&G!==ee)try{await Mi(fe(F,"ingredient_categories",ie.id),{name:G});const K=vt(Ie(F,"ingredients"),Je("category","==",ee)),le=await ct(K),Ce=Oi(F);le.forEach(jt=>{Ce.update(jt.ref,{category:G})}),await Ce.commit(),await w(),de()}catch(K){console.error("Erreur de renommage: ",K)}}async function Fe(ie){if(confirm(`Êtes-vous sûr de vouloir supprimer la catégorie "${ie.name}"?

Tous les ingrédients associés seront déplacés vers la catégorie "Inconnue".`))try{await jn(fe(F,"ingredient_categories",ie.id));const ee=vt(Ie(F,"ingredients"),Je("category","==",ie.name)),G=await ct(ee),K=Oi(F);G.forEach(le=>{K.update(le.ref,{category:"Inconnue"})}),await K.commit(),Z="",await w(),de()}catch(ee){console.error("Erreur de suppression: ",ee)}}function ge(){t.innerHTML="";const ie=Q.map(K=>K.name),ee=[...new Set(ne.map(K=>K.category||"Inconnue"))];let G=[...new Set([...ie,...ee])];G.sort((K,le)=>K.localeCompare(le)),G.includes("Inconnue")&&(G=G.filter(K=>K!=="Inconnue"),G.push("Inconnue")),G.length===0&&ne.length>0&&G.push("Inconnue"),!Z&&G.length>0&&(Z=G[0]),G.forEach(K=>{const le=document.createElement("button"),Ce=K===Z;le.className=`px-4 py-2 text-sm font-medium rounded-t-lg ${Ce?"bg-tomato text-white":"text-gray-500 hover:text-tomato"}`,le.textContent=K,le.addEventListener("click",()=>ke(K)),t.appendChild(le)})}function ke(ie){Z=ie,ge(),Ne()}function Ne(){n.innerHTML="";const ie=Z||(Q.length>0?Q[0].name:"Inconnue");let ee=ne.filter(K=>(K.category||"Inconnue")===ie);if(I){const K=I.toLowerCase();ee=ee.filter(le=>le.name.toLowerCase().includes(K))}if(ee.length===0){n.innerHTML='<p class="text-center text-gray-500 p-10">Aucun ingrédient dans cette catégorie.</p>';return}ee.sort((K,le)=>K.name.localeCompare(le.name,"fr",{sensitivity:"base"}));const G=document.createElement("div");G.className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4",ee.forEach(K=>{const le=document.createElement("div");le.className="p-3 bg-white shadow-sm rounded-lg flex flex-col items-start space-y-2";const Ce=document.createElement("div");Ce.className="flex-grow w-full flex justify-between items-center";const jt=document.createElement("span");jt.className="font-medium text-gray-800",jt.textContent=K.name;const en=document.createElement("span");en.className="text-gray-500 text-sm bg-gray-100 px-2 py-1 rounded-full",en.textContent=K.unit,Ce.appendChild(jt),Ce.appendChild(en);const tn=document.createElement("div");tn.className="w-full flex justify-end items-center space-x-2 border-t pt-2 mt-2";const fn=document.createElement("button");fn.className="btn btn-ghost btn-xs text-blue-500 hover:bg-blue-50",fn.innerHTML='<i class="fas fa-edit"></i>',fn.addEventListener("click",()=>v(K));const kt=document.createElement("button");kt.className="btn btn-ghost btn-xs text-red-500 hover:bg-red-50",kt.innerHTML='<i class="fas fa-trash-alt"></i>',kt.addEventListener("click",()=>$e(K.id,K.name)),tn.appendChild(fn),tn.appendChild(kt),le.appendChild(Ce),le.appendChild(tn),G.appendChild(le)}),n.appendChild(G)}async function $e(ie,ee){if(confirm(`Êtes-vous sûr de vouloir supprimer l'ingrédient "${ee}" ?`))try{await jn(fe(F,"ingredients",ie)),await b()}catch(G){console.error("Erreur de suppression de l'ingrédient: ",G)}}r.addEventListener("input",ie=>{const ee=ie.target.value.toLowerCase();if(!I&&ee&&(g=Z),I=ee,I){const G=ne.find(K=>K.name.toLowerCase().includes(I));G&&(Z=G.category||"Inconnue")}else g&&(Z=g,g=null);ge(),Ne()}),e.addEventListener("click",()=>v()),a.addEventListener("click",xe),l.addEventListener("click",xe),u.addEventListener("submit",re),R.addEventListener("click",z),M.addEventListener("click",pe),D.addEventListener("click",pe),W.addEventListener("submit",Ae),w()}const XE=Object.freeze(Object.defineProperty({__proto__:null,default:JE},Symbol.toStringTag,{value:"Module"})),ot={modal:document.getElementById("share-modal"),closeBtn:document.getElementById("close-share-modal"),title:document.getElementById("share-modal-title"),friendsList:document.getElementById("share-friends-list"),sharePlanCheckbox:document.getElementById("share-planning-checkbox"),shareShoppingListCheckbox:document.getElementById("share-shopping-list-checkbox"),confirmBtn:document.getElementById("confirm-share-btn")};let nn={};function Ic(){ot.modal.classList.add("hidden")}async function YE(){const n=Rt();if(!n||!nn.plan)return;const e=Array.from(ot.friendsList.querySelectorAll('input[type="checkbox"]:checked')).map(r=>r.value),t=document.querySelector('input[name="share-mode"]:checked')?.value;if(e.length===0){alert("Veuillez sélectionner au moins un ami.");return}if(!t){alert("Veuillez sélectionner un mode de partage.");return}ot.confirmBtn.disabled=!0,ot.confirmBtn.textContent="Envoi en cours...";try{const r=Ie(F,"shares");let s={};t==="collaborate"?s={senderId:n,createdAt:new Date,type:"collaborative_plan_invite",planId:nn.plan.id,planName:nn.plan.name}:s={senderId:n,createdAt:new Date,type:"share",plan:{name:nn.plan.name,weeks:nn.plan.weeks||{},manualItems:nn.plan.manualItems||[],defaultNumPeople:nn.plan.defaultNumPeople||1,startDay:nn.plan.startDay||"Lundi"}};for(const i of e)await Ut(r,{...s,receiverId:i,status:"pending"});Ic(),alert("Partage envoyé avec succès !")}catch(r){console.error("Erreur lors de l'envoi du partage : ",r),alert("Une erreur est survenue lors de l'envoi du partage.")}finally{ot.confirmBtn.disabled=!1,ot.confirmBtn.textContent="Envoyer le partage"}}async function wc(n={}){const{plan:e}=n;if(!e){alert("Aucun plan sélectionné à partager.");return}nn={plan:e},ot.title.textContent=`Partager le plan "${e.name}"`,ot.friendsList.innerHTML='<p class="text-gray-500">Chargement des amis...</p>',ot.modal.classList.remove("hidden");const t=Rt();if(t)try{const r=await Ft(fe(F,"users",t));if(r.exists()){const i=r.data().friends||[];if(i.length===0){ot.friendsList.innerHTML=`<p class="text-gray-500">Vous n'avez pas d'amis à qui partager.</p>`;return}ot.friendsList.innerHTML="";for(const a of i){const l=await Ft(fe(F,"users",a));if(l.exists()){const u=l.data(),h=document.createElement("label");h.className="flex items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer";const m=document.createElement("input");m.type="checkbox",m.value=u.uid,m.className="form-checkbox h-5 w-5 text-tomato rounded focus:ring-tomato",h.appendChild(m);const p=document.createElement("img");p.src=u.photoURL||"https://placehold.co/40x40",p.alt=u.displayName,p.className="w-8 h-8 rounded-full ml-3 mr-3",h.appendChild(p);const _=document.createElement("span");_.className="font-medium",_.textContent=u.displayName||u.email,h.appendChild(_),ot.friendsList.appendChild(h)}}}}catch(r){console.error("Erreur lors du chargement des amis pour le partage : ",r),ot.friendsList.innerHTML='<p class="text-red-500">Une erreur est survenue.</p>'}}ot.closeBtn?.addEventListener("click",Ic);ot.modal?.addEventListener("click",n=>{n.target===ot.modal&&Ic()});ot.confirmBtn?.addEventListener("click",YE);const ZE=Object.freeze(Object.defineProperty({__proto__:null,openShareModal:wc},Symbol.toStringTag,{value:"Module"}));function eI(){const n=document.getElementById("search-bar"),e=document.getElementById("lists-container"),t=document.getElementById("add-list-btn"),r=document.getElementById("shared-lists-container"),s=document.getElementById("list-form-modal"),i=document.getElementById("list-modal-title"),a=document.getElementById("close-list-modal"),l=document.getElementById("cancel-list-btn"),u=document.getElementById("list-form"),h=document.getElementById("list-id"),m=document.getElementById("list-name"),p=document.getElementById("ingredients-list"),_=document.getElementById("add-ingredient-btn"),R=document.getElementById("save-list-btn");let P=[],M="",D=[],W=[];async function ce(){await $(),await ne(),await Q()}async function $(){if(F)try{D=(await ct(Ie(F,"ingredients"))).docs.map(z=>({id:z.id,...z.data()})),D.sort((z,pe)=>z.name.localeCompare(pe.name))}catch(re){console.error("Erreur lors de la récupération de la liste des ingrédients: ",re)}}async function ne(){const re=Rt();if(!(!F||!re))try{const z=vt(Ie(F,"shopping_lists"),Je("userId","==",re));P=(await ct(z)).docs.map(de=>({id:de.id,...de.data()})).filter(de=>de.isShared!==!0),w()}catch(z){console.error("Erreur de chargement des listes: ",z)}}async function Q(){const re=Rt();if(!(!F||!re)){console.log(`Recherche de listes partagées pour userId: ${re}`);try{const z=vt(Ie(F,"shopping_lists"),Je("userId","==",re),Je("isShared","==",!0)),pe=await ct(z);console.log(`Trouvé ${pe.size} liste(s) partagée(s).`);const de=pe.docs.map(Ae=>({id:Ae.id,...Ae.data()}));E(de)}catch(z){console.error("Erreur de chargement des listes partagées: ",z)}}}async function Z(re=null){await $(),u.reset(),p.innerHTML="",W=[],re?(i.textContent="Modifier la liste",h.value=re.id,m.value=re.name,re.ingredients&&re.ingredients.length>0?re.ingredients.forEach(z=>y(z)):y()):(i.textContent="Créer une liste",h.value="",y()),s.classList.remove("hidden")}function I(){s.classList.add("hidden")}async function g(re){re.preventDefault(),R.disabled=!0;const z=Rt();if(!z){alert("Erreur : utilisateur non connecté."),R.disabled=!1;return}const pe=W.filter(Te=>Te&&Te.name&&Te.quantity),de={name:m.value,ingredients:pe,userId:z};if(!de.name){alert("Le nom de la liste est requis."),R.disabled=!1;return}const Ae=h.value;try{Ae?await Mi(fe(F,"shopping_lists",Ae),de):await Ut(Ie(F,"shopping_lists"),de),I(),await ne()}catch(Te){console.error("Erreur de sauvegarde de la liste: ",Te)}finally{R.disabled=!1}}function y(re={quantity:"",name:"",unit:""}){const z=document.createElement("div");z.className="relative flex items-stretch space-x-2 ingredient-row";const pe={...re};W.push(pe);const de=W.length-1,Ae=document.createElement("input");Ae.type="text",Ae.className="ingredient-quantity mt-1 block w-1/4 rounded-md border-gray-300 shadow-sm",Ae.placeholder="Qté",Ae.value=pe.quantity,Ae.addEventListener("change",$e=>{W[de].quantity=$e.target.value});const Te=document.createElement("input");Te.type="text",Te.className="ingredient-unit mt-1 block w-1/4 rounded-md border-gray-300 shadow-sm bg-gray-100",Te.placeholder="Unité",Te.readOnly=!0,Te.value=pe.unit||"";const Fe=document.createElement("div");Fe.className="relative w-1/2";const ge=document.createElement("input");ge.type="text",ge.className="ingredient-name mt-1 block w-full rounded-md border-gray-300 shadow-sm",ge.placeholder="Chercher un ingrédient...",ge.value=pe.name,Fe.appendChild(ge);const ke=document.createElement("div");ke.className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg mt-1 hidden max-h-48 overflow-y-auto",Fe.appendChild(ke),ge.addEventListener("input",()=>{const $e=ge.value.toLowerCase();if(!$e){ke.classList.add("hidden");return}const ie=D.filter(G=>G.name.toLowerCase().includes($e));ke.innerHTML="",ie.forEach(G=>{const K=document.createElement("div");K.className="p-2 hover:bg-tomato hover:text-white cursor-pointer",K.textContent=G.name,K.addEventListener("click",()=>{ge.value=G.name,Te.value=G.unit,ke.classList.add("hidden"),W[de].name=G.name,W[de].unit=G.unit,W[de].id=G.id}),ke.appendChild(K)});const ee=document.createElement("div");ee.className="p-2 bg-blue-50 hover:bg-blue-200 cursor-pointer font-bold text-blue-700",ee.textContent=`+ Créer "${ge.value}"`,ee.addEventListener("click",async()=>{const G=ge.value,K="pièce(s)";try{const le=await Ut(Ie(F,"ingredients"),{name:G,unit:K,category:"Inconnue"});await $(),ge.value=G,Te.value=K,ke.classList.add("hidden"),W[de].name=G,W[de].unit=K,W[de].id=le.id}catch(le){console.error("Erreur d'ajout d'ingrédient",le),alert("L'ingrédient n'a pas pu être créé.")}}),ke.appendChild(ee),ke.classList.remove("hidden")});const Ne=document.createElement("button");Ne.type="button",Ne.className="btn btn-ghost text-red-500 hover:bg-red-50 btn-sm mt-1",Ne.innerHTML='<i class="fas fa-trash"></i>',Ne.addEventListener("click",()=>{z.remove(),W[de]=null}),z.appendChild(Fe),z.appendChild(Ae),z.appendChild(Te),z.appendChild(Ne),p.appendChild(z)}function w(){e.innerHTML="";let re=P;if(M){const z=M.toLowerCase();re=P.filter(pe=>pe.name.toLowerCase().includes(z))}if(re.length===0){e.innerHTML='<p class="text-center text-gray-500 p-10 col-span-full">Aucune liste de courses trouvée.</p>';return}re.sort((z,pe)=>z.name.localeCompare(pe.name)),re.forEach(z=>{const pe=document.createElement("div");pe.className="bg-white rounded-lg shadow-md p-4 flex flex-col";const de=document.createElement("div");de.className="flex justify-between items-start border-b pb-2 mb-2";const Ae=document.createElement("h4");Ae.className="text-lg font-bold text-gray-800",Ae.textContent=z.name,de.appendChild(Ae);const Te=document.createElement("div");Te.className="flex space-x-2";const Fe=document.createElement("button");Fe.className="btn btn-ghost btn-sm text-blue-500",Fe.innerHTML='<i class="fas fa-edit"></i>',Fe.addEventListener("click",()=>Z(z)),Te.appendChild(Fe);const ge=document.createElement("button");ge.className="btn btn-ghost btn-sm text-green-500",ge.innerHTML='<i class="fas fa-share-alt"></i>',ge.addEventListener("click",()=>wc({})),Te.appendChild(ge);const ke=document.createElement("button");ke.className="btn btn-ghost btn-sm text-red-500",ke.innerHTML='<i class="fas fa-trash"></i>',ke.addEventListener("click",()=>b(z.id,z.name)),Te.appendChild(ke),de.appendChild(Te);const Ne=document.createElement("ul");Ne.className="space-y-1 text-sm text-gray-600 flex-grow",z.ingredients&&z.ingredients.length>0?z.ingredients.forEach($e=>{const ie=document.createElement("li");ie.textContent=`${$e.quantity} ${$e.unit||""} - ${$e.name}`.trim(),Ne.appendChild(ie)}):Ne.innerHTML='<li class="italic text-gray-400">Cette liste est vide.</li>',pe.appendChild(de),pe.appendChild(Ne),e.appendChild(pe)})}function E(re){if(r.innerHTML="",re.length===0){r.innerHTML='<p class="text-center text-gray-500 p-10 col-span-full">Aucune liste de courses partagée trouvée.</p>';return}re.sort((z,pe)=>z.name.localeCompare(pe.name)),re.forEach(z=>{const pe=document.createElement("div");pe.className="bg-white rounded-lg shadow-md p-4 flex flex-col";const de=document.createElement("div");de.className="flex justify-between items-start border-b pb-2 mb-2";const Ae=document.createElement("h4");Ae.className="text-lg font-bold text-gray-800",Ae.textContent=z.name,de.appendChild(Ae);const Te=document.createElement("div");Te.className="flex space-x-2";const Fe=document.createElement("button");Fe.className="btn btn-secondary btn-sm",Fe.innerHTML='<i class="fas fa-copy mr-2"></i> Copier dans mes listes',Fe.title="Copier cette liste dans vos listes personnelles",Fe.addEventListener("click",()=>xe(z.id)),Te.appendChild(Fe);const ge=document.createElement("button");ge.className="btn btn-ghost btn-sm text-red-500",ge.innerHTML='<i class="fas fa-trash"></i>',ge.title="Supprimer cette liste partagée",ge.addEventListener("click",()=>v(z.id,z.name)),Te.appendChild(ge),de.appendChild(Te);const ke=document.createElement("ul");ke.className="space-y-1 text-sm text-gray-600 flex-grow",z.ingredients&&z.ingredients.length>0?z.ingredients.forEach(Ne=>{const $e=document.createElement("li");$e.textContent=`${Ne.quantity} ${Ne.unit||""} - ${Ne.name}`.trim(),ke.appendChild($e)}):ke.innerHTML='<li class="italic text-gray-400">Cette liste est vide.</li>',pe.appendChild(de),pe.appendChild(ke),r.appendChild(pe)})}async function b(re,z){if(confirm(`Êtes-vous sûr de vouloir supprimer la liste "${z}" ?`))try{await jn(fe(F,"shopping_lists",re)),await ne()}catch(pe){console.error("Erreur de suppression de la liste: ",pe)}}async function v(re,z){if(confirm(`Êtes-vous sûr de vouloir supprimer la liste partagée "${z}" ?`))try{await jn(fe(F,"shopping_lists",re)),await Q()}catch(pe){console.error("Erreur de suppression de la liste partagée: ",pe),alert("Une erreur est survenue.")}}async function xe(re){if(confirm("Voulez-vous vraiment copier cette liste dans vos listes personnelles ? Elle ne sera plus considérée comme une liste partagée."))try{const z=fe(F,"shopping_lists",re);await Yt(z,{isShared:!1}),await ce()}catch(z){console.error("Erreur lors de la copie de la liste: ",z),alert("Une erreur est survenue.")}}n.addEventListener("input",re=>{M=re.target.value,w()}),t.addEventListener("click",()=>Z()),a.addEventListener("click",I),l.addEventListener("click",I),u.addEventListener("submit",g),_.addEventListener("click",()=>y()),F&&ce()}const tI=Object.freeze(Object.defineProperty({__proto__:null,default:eI},Symbol.toStringTag,{value:"Module"}));let ff=[],mf=[],pf=()=>{},gf=()=>{};const Ye={btn:null,badge:null,dropdown:null,list:null};async function nI(n,e,t){const r=Rt();if(r)try{const s=fe(F,"shares",n);if(await Yt(s,{status:"accepted"}),e.plan){const i=t.displayName||"Inconnu",a=`Copie de "${e.plan.name}" (de ${i})`,l={...e.plan,userId:r,name:a,isShared:!0,originalOwnerId:e.senderId,sharedAt:new Date,collaborators:[]};delete l.id,await Ut(Ie(F,"plans"),l)}e.shoppingList&&await Ut(Ie(F,"shopping_lists"),{name:`${e.shoppingList.name} (de ${t.displayName})`,ingredients:e.shoppingList.ingredients,userId:r,isShared:!0,originalOwner:t.uid,sharedAt:new Date})}catch(s){console.error("Erreur lors de l'acceptation du partage : ",s),alert("Une erreur est survenue.")}}async function rI(n){try{const e=fe(F,"shares",n);await Yt(e,{status:"accepted"})}catch(e){console.error("Erreur lors de l'acceptation de l'invitation : ",e),alert("Une erreur est survenue.")}}async function Ou(n){try{const e=fe(F,"shares",n);await Yt(e,{status:"declined"})}catch(e){console.error("Erreur lors du refus du partage : ",e),alert("Une erreur est survenue.")}}async function sI(n,e){try{await df(n,e)}catch{alert("Erreur lors de l'acceptation.")}}async function iI(n){try{await hf(n)}catch{alert("Erreur lors du refus.")}}function yf(){if(!Ye.list)return;const n=[...ff,...mf];n.sort((e,t)=>t.createdAt.toMillis()-e.createdAt.toMillis()),n.length>0?(Ye.badge.textContent=n.length,Ye.badge.classList.remove("hidden")):Ye.badge.classList.add("hidden"),Ye.list.innerHTML="",n.length===0?Ye.list.innerHTML='<p class="text-gray-500 text-center p-4">Aucune nouvelle notification.</p>':n.forEach(e=>{const t=oI(e);Ye.list.appendChild(t)})}function oI(n){const e=document.createElement("div");e.className="p-3 border-b border-gray-100 hover:bg-gray-50";const t=document.createElement("p");t.className="text-sm font-medium text-gray-800";const r=document.createElement("p");r.className="text-xs text-gray-500 mb-3";const s=document.createElement("div");if(s.className="flex space-x-2 justify-end",n.data.type==="collaborative_plan_invite"){t.textContent="Invitation à collaborer",r.textContent=`${n.sender.displayName} vous invite à modifier son plan "${n.data.planName}".`;const i=fr("Accepter","btn-secondary",l=>{l.target.textContent="...",l.target.disabled=!0,rI(n.id)}),a=fr("Refuser","btn-ghost text-red-500",l=>{l.target.disabled=!0,Ou(n.id)});s.append(i,a)}else if(n.type==="share"){t.textContent=`Partage de ${n.sender.displayName||n.sender.email}`;let i=[];n.data.plan&&i.push("planification"),n.data.shoppingList&&i.push("liste de courses"),r.textContent=`Contenu : ${i.join(" et ")}`;const a=fr("Accepter","btn-secondary",u=>{u.target.textContent="...",u.target.disabled=!0,nI(n.id,n.data,n.sender)}),l=fr("Refuser","btn-ghost text-red-500",u=>{u.target.disabled=!0,Ou(n.id)});s.append(a,l)}else if(n.type==="friend_request"){t.textContent="Invitation d'ami",r.textContent=`${n.sender.displayName||n.sender.email} vous a envoyé une invitation.`;const i=fr("Accepter","btn-secondary",l=>{l.target.textContent="...",l.target.disabled=!0,sI(n.id,n.data.senderId)}),a=fr("Refuser","btn-ghost text-red-500",l=>{l.target.disabled=!0,iI(n.id)});s.append(i,a)}return e.append(t,r,s),e}function fr(n,e,t){const r=document.createElement("button");return r.className=`btn btn-xs ${e}`,r.textContent=n,r.addEventListener("click",s=>{s.stopPropagation(),t(s)}),r}function aI(n){const e=Ie(F,"shares"),t=vt(e,Je("receiverId","==",n),Je("status","==","pending"));pf=Vr(t,async r=>{const s=[];for(const i of r.docs){const a=i.data(),l=await Ft(fe(F,"users",a.senderId));l.exists()&&s.push({type:"share",id:i.id,data:a,sender:l.data(),createdAt:a.createdAt})}ff=s,yf()},r=>{console.error("Erreur d'écoute des partages:",r)})}function cI(n){const e=Ie(F,"friend_requests"),t=vt(e,Je("receiverId","==",n),Je("status","==","pending"));gf=Vr(t,async r=>{const s=[];for(const i of r.docs){const a=i.data(),l=await Ft(fe(F,"users",a.senderId));l.exists()&&s.push({type:"friend_request",id:i.id,data:a,sender:l.data(),createdAt:a.createdAt})}mf=s,yf()},r=>{console.error("Erreur d'écoute des invitations d'amis:",r)})}function _f(){if(Ye.btn=document.getElementById("notifications-btn"),Ye.badge=document.getElementById("notifications-badge"),Ye.dropdown=document.getElementById("notifications-dropdown"),Ye.list=document.getElementById("notifications-list"),!Ye.btn)return;const n=Rt();n&&(pf(),gf(),aI(n),cI(n),Ye.btn.addEventListener("click",e=>{e.stopPropagation(),Ye.dropdown.classList.toggle("hidden")}),document.addEventListener("click",e=>{Ye.dropdown&&!Ye.dropdown.classList.contains("hidden")&&!Ye.btn.contains(e.target)&&!Ye.dropdown.contains(e.target)&&Ye.dropdown.classList.add("hidden")}))}const lI=Object.freeze(Object.defineProperty({__proto__:null,initNotifications:_f},Symbol.toStringTag,{value:"Module"})),nr=Xh();let Ts,Vo,Mo,ps,Be,As,Oo,Fo,gs,Zn,Cs,Uo,Bo,pa,ga,Ui=null,Bi=null;function uI(){Ts&&Ts.classList.remove("hidden")}function ya(){Ts&&Ts.classList.add("hidden"),ps&&ps.reset()}function dI(n,e){Bi=n,Zn&&(Zn.value=e),As&&As.classList.remove("hidden"),Zn&&Zn.focus()}function _a(){Bi=null,As&&As.classList.add("hidden"),gs&&gs.reset()}function hI(n,e){Ui=n,pa&&(pa.textContent="Confirmer la suppression"),ga&&(ga.textContent=`Êtes-vous sûr de vouloir supprimer le plan "${e}" ? Cette action est irréversible.`),Cs&&Cs.classList.remove("hidden")}function Fu(){Ui=null,Cs&&Cs.classList.add("hidden")}async function fI(n){const e=Bt();if(e)try{await Ut(Ie(nr,"plans"),{userId:e.uid,name:n,type:"personal",weeks:{},manualItems:[],defaultNumPeople:1,startDay:"Lundi",lastUpdated:new Date}),ya()}catch(t){console.error("Error creating plan: ",t),alert("Erreur lors de la création du plan.")}}async function mI(n,e){if(!(!n||!e))try{const t=fe(nr,"plans",n);await Yt(t,{name:e}),_a()}catch(t){console.error("Error renaming plan: ",t),alert("Erreur lors du renommage du plan.")}}async function pI(n){const e=Bt()?.uid;if(!(!n||!e)&&confirm("Voulez-vous vraiment quitter ce plan partagé ? Il n'apparaîtra plus dans votre liste."))try{const t=fe(nr,"plans",n);await Yt(t,{collaborators:ha(e)})}catch(t){console.error("Erreur pour quitter le plan: ",t),alert("Une erreur est survenue.")}}async function gI(n){if(n)try{await jn(fe(nr,"plans",n))}catch(e){console.error("Error deleting plan: ",e),alert("Erreur lors de la suppression du plan.")}}function vf(n){const e=Bt();if(!e)return()=>{};let t=new Map;const r=()=>{n(Array.from(t.values()).sort((h,m)=>h.name.localeCompare(m.name)))},s=async h=>{const p=[h.userId,...h.collaborators||[]].map(R=>Ft(fe(nr,"users",R)));return(await Promise.all(p)).map(R=>R.exists()?R.data():{uid:R.id,displayName:"Inconnu"})},i=vt(Ie(nr,"plans"),Je("userId","==",e.uid)),a=Vr(i,async h=>{const p=h.docChanges().map(async _=>{if(_.type==="removed")t.delete(_.doc.id);else{const R=_.doc.data(),P=await s(R);t.set(_.doc.id,{id:_.doc.id,...R,isOwner:!0,participants:P})}});await Promise.all(p),r()}),l=vt(Ie(nr,"plans"),Je("collaborators","array-contains",e.uid)),u=Vr(l,async h=>{const p=h.docChanges().map(async _=>{if(_.type==="removed")t.delete(_.doc.id);else{const R=_.doc.data(),P=await s(R),M=P.find(D=>D.uid===R.userId);t.set(_.doc.id,{id:_.doc.id,...R,isOwner:!1,ownerName:M?.displayName||"Inconnu",participants:P})}});await Promise.all(p),r()});return()=>{a(),u()}}function Ef(n){if(!Be)return;const e=Be.value;if(Be.innerHTML="",n.length===0){const t=document.createElement("option");t.value="",t.textContent="Aucun plan personnel",t.disabled=!0,Be.appendChild(t);return}n.forEach(t=>{const r=document.createElement("option");r.value=t.id;let s=t.name;t.collaborators&&t.collaborators.length>0&&(t.isOwner?s=`👑 ${t.name} [Collab]`:s=`👥 ${t.name} [Collab] (de ${t.ownerName})`),r.textContent=s,Be.appendChild(r)}),e&&Be.querySelector(`option[value="${e}"]`)?Be.value=e:Be.selectedIndex=0}function If(){Ts=document.getElementById("create-plan-modal"),Vo=document.getElementById("close-create-plan-modal"),Mo=document.getElementById("cancel-create-plan-btn"),ps=document.getElementById("create-plan-form"),Be=document.getElementById("plan-select"),As=document.getElementById("rename-plan-modal"),Oo=document.getElementById("close-rename-plan-modal"),Fo=document.getElementById("cancel-rename-plan-btn"),gs=document.getElementById("rename-plan-form"),Zn=document.getElementById("new-plan-name"),Cs=document.getElementById("delete-confirm-modal"),Uo=document.getElementById("cancel-delete-btn"),Bo=document.getElementById("confirm-delete-btn"),pa=document.getElementById("delete-confirm-title"),ga=document.getElementById("delete-confirm-message");const n=document.getElementById("create-plan-btn"),e=document.getElementById("rename-plan-btn"),t=document.getElementById("leave-plan-btn"),r=document.getElementById("delete-plan-btn");n&&n.addEventListener("click",uI),e&&e.addEventListener("click",()=>{if(Be&&Be.value){const s=Be.options[Be.selectedIndex];dI(Be.value,s.text)}else alert("Veuillez sélectionner un plan à renommer.")}),t&&t.addEventListener("click",()=>{Be&&Be.value?pI(Be.value):alert("Veuillez sélectionner un plan.")}),r&&r.addEventListener("click",()=>{if(Be&&Be.value){const s=Be.options[Be.selectedIndex].text;hI(Be.value,s)}else alert("Veuillez sélectionner un plan à supprimer.")}),Vo&&Vo.addEventListener("click",ya),Mo&&Mo.addEventListener("click",ya),ps&&ps.addEventListener("submit",s=>{s.preventDefault();const i=document.getElementById("plan-name");i&&i.value&&fI(i.value)}),Oo&&Oo.addEventListener("click",_a),Fo&&Fo.addEventListener("click",_a),gs&&gs.addEventListener("submit",s=>{s.preventDefault(),Bi&&Zn.value&&mI(Bi,Zn.value)}),Uo&&Uo.addEventListener("click",Fu),Bo&&Bo.addEventListener("click",()=>{Ui&&gI(Ui).then(()=>{Fu()})})}const yI=Object.freeze(Object.defineProperty({__proto__:null,getUserPlans:vf,initPlanManagement:If,populatePlanSelector:Ef},Symbol.toStringTag,{value:"Module"}));let mr=null;function _I(){const n=document.getElementById("search-bar"),e=document.getElementById("category-tabs"),t=document.getElementById("recipe-list-container"),r=document.getElementById("add-recipe-btn");mr&&mr.destroy(),mr=new Ec(F,"recipe-form-modal","recipe-form","recipe-modal-title","recipe-id","recipe-name","recipe-category","recipe-servings","recipe-prep-time","recipe-difficulty","recipe-steps","ingredients-list","add-ingredient-btn","save-recipe-btn","close-recipe-modal","cancel-recipe-btn"),mr.setOnSaveCallback(R);let s=[],i="",a="",l=null;const u=["Entrée","Plat","Accompagnement","Dessert"],h={PLAT:"bg-orange-100",DESSERT:"bg-amber-100",ENTREE:"bg-lime-100",ACCOMPAGNEMENT:"bg-stone-200","PETIT-DEJEUNER":"bg-orange-100",BOISSON:"bg-cyan-100",SAUCE:"bg-red-100"},m={PLAT:"text-orange-800",DESSERT:"text-amber-800",ENTREE:"text-lime-800",ACCOMPAGNEMENT:"text-stone-800","PETIT-DEJEUNER":"text-orange-800",BOISSON:"text-cyan-800",SAUCE:"text-red-800"},p="bg-gray-100",_="text-gray-800";async function R(){if(console.log("fetchAllRecipes called."),!!F)try{s=(await ct(Ie(F,"recipes"))).docs.map(ne=>({id:ne.id,...ne.data()})),console.log("Fetched recipes:",s),M(),D()}catch($){console.error("Erreur lors de la récupération des recettes: ",$)}}function P($){i=$,M(),D()}function M(){if(!e)return;e.innerHTML="";const ne=[...new Set(s.map(Q=>Q.category||"Non classé"))].sort((Q,Z)=>{const I=w=>{const E=w.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();for(let b=0;b<u.length;b++)if(u[b].normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()===E)return b;return-1},g=I(Q),y=I(Z);return g>-1&&y>-1?g-y:g>-1?-1:y>-1?1:Q.localeCompare(Z)});!i&&ne.length>0&&(i=ne[0]),ne.forEach(Q=>{const Z=document.createElement("button"),I=Q.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toUpperCase();if(Q===i){const y=h[I]||p,w=m[I]||_;Z.className=`px-4 py-2 text-sm font-bold rounded-t-lg ${y} ${w}`}else Z.className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-tomato";Z.textContent=Q,Z.addEventListener("click",()=>P(Q)),e.appendChild(Z)})}function D(){if(!t)return;t.innerHTML="";let $=s.filter(Q=>(Q.category||"Non classé")===i);if(a){const Q=a.toLowerCase();$=$.filter(Z=>Z.name.toLowerCase().includes(Q))}if($.sort((Q,Z)=>Q.name.localeCompare(Z.name)),$.length===0){t.innerHTML='<p class="text-gray-500 text-center p-10">Aucune recette trouvée.</p>';return}const ne=document.createElement("div");ne.className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4",$.forEach(Q=>{ne.appendChild(W(Q))}),t.appendChild(ne)}function W($){let ne=p;if($.category){const b=$.category.normalize("NFD").replace(/[̀-ͯ]/g,"").toUpperCase();ne=h[b]||p}const Q=document.createElement("div");Q.className=`rounded-lg shadow-sm flex flex-col p-2 ${ne}`;const Z=document.createElement("h4");Z.className="text-sm font-bold text-gray-800 truncate",Z.textContent=$.name,Z.title=$.name,Q.appendChild(Z);const I=document.createElement("p");I.className="text-xs text-gray-600 mt-1",I.textContent=`${$.difficulty||""} - Pour ${$.servings||"?"} pers.`,Q.appendChild(I);const g=document.createElement("div");g.className="flex-grow",Q.appendChild(g);const y=document.createElement("div");y.className="flex justify-end space-x-2 mt-2";const w=document.createElement("button");w.className="btn btn-outline btn-xs border-gray-400 hover:bg-gray-200",w.innerHTML='<i class="fas fa-edit"></i>',w.title="Modifier",w.addEventListener("click",()=>mr.openForm($,"Modifier la recette")),y.appendChild(w);const E=document.createElement("button");return E.className="btn btn-ghost text-red-700 hover:bg-red-100 btn-xs",E.innerHTML='<i class="fas fa-trash-alt"></i>',E.title="Supprimer",E.addEventListener("click",()=>ce($.id,$.name)),y.appendChild(E),Q.appendChild(y),Q}async function ce($,ne){if(confirm(`Êtes-vous sûr de vouloir supprimer la recette "${ne}" ?`))try{await jn(fe(F,"recipes",$)),R()}catch(Q){console.error("Erreur lors de la suppression: ",Q)}}r.addEventListener("click",()=>mr.openForm(null,"Ajouter une recette")),n.addEventListener("input",$=>{const ne=$.target.value;if(!a&&ne&&(l=i),a=ne,a){const Q=a.toLowerCase(),Z=s.find(I=>I.name.toLowerCase().includes(Q));Z&&(i=Z.category||"Non classé")}else l&&(i=l,l=null);M(),D()}),F&&R()}const vI=Object.freeze(Object.defineProperty({__proto__:null,default:_I},Symbol.toStringTag,{value:"Module"}));let Jn=null;function EI(){const n={mealPlanGrid:document.getElementById("meal-plan-grid"),currentWeekDisplay:document.getElementById("current-week-display"),prevWeekBtn:document.getElementById("prev-week-btn"),nextWeekBtn:document.getElementById("next-week-btn"),clearMenuBtn:document.getElementById("clear-menu-btn"),shoppingListContainer:document.getElementById("shopping-list"),startDaySelect:document.getElementById("start-day-select"),defaultServingsControl:document.getElementById("default-servings-control"),mealSelectModal:document.getElementById("meal-select-modal"),closeMealSelectModalBtn:document.getElementById("close-meal-select-modal"),mealSelectModalTitle:document.getElementById("meal-select-modal-title"),mealSelectList:document.getElementById("meal-select-list"),recipeFormModal:document.getElementById("edit-recipe-form-modal"),closeRecipeModalBtn:document.getElementById("close-edit-recipe-modal"),cancelRecipeBtn:document.getElementById("edit-cancel-recipe-btn"),recipeForm:document.getElementById("edit-recipe-form"),addItemInput:document.getElementById("add-item-input"),addItemBtn:document.getElementById("add-item-btn"),addItemResults:document.getElementById("add-item-results"),importListBtn:document.getElementById("import-list-btn"),importListModal:document.getElementById("import-list-modal"),closeImportListModalBtn:document.getElementById("close-import-list-modal"),importListContainer:document.getElementById("import-list-container"),exportTxtBtn:document.getElementById("export-txt-btn"),exportPdfBtn:document.getElementById("export-pdf-btn"),sharePlanBtn:document.getElementById("share-plan-btn"),planSelect:document.getElementById("plan-select")};function e(A,C){const V=document.createElement("div");V.className="flex items-center space-x-2";const L=document.createElement("button");L.className="btn btn-outline btn-xs",L.textContent="-";const x=document.createElement("span");x.className="font-medium text-center w-6",x.textContent=A;const O=document.createElement("button");return O.className="btn btn-outline btn-xs",O.textContent="+",L.addEventListener("click",()=>{let H=parseInt(x.textContent,10);H>1&&(H--,x.textContent=H,C(H))}),O.addEventListener("click",()=>{let H=parseInt(x.textContent,10);H++,x.textContent=H,C(H)}),V.appendChild(L),V.appendChild(x),V.appendChild(O),V}function t(A,C,V,L=!1){const x=document.createElement("div");x.className="flex flex-col items-center justify-center h-full";const O=document.createElement("button");O.className="btn btn-ghost btn-xs p-0 h-4 flex items-center justify-center w-full",O.innerHTML='<i class="fas fa-plus"></i>',O.disabled=L;const H=document.createElement("span");H.className="font-medium text-center text-sm my-1",H.textContent=A;const j=document.createElement("button");return j.className="btn btn-ghost btn-xs p-0 h-4 flex items-center justify-center w-full",j.innerHTML='<i class="fas fa-minus"></i>',j.disabled=L,C&&(O.classList.add("text-white"),H.classList.add("text-white"),j.classList.add("text-white")),L||(O.addEventListener("click",()=>{let X=parseInt(H.textContent,10);X++,H.textContent=X,V(X)}),j.addEventListener("click",()=>{let X=parseInt(H.textContent,10);X>1&&(X--,H.textContent=X,V(X))})),x.appendChild(O),x.appendChild(H),x.appendChild(j),x}Jn&&Jn.destroy(),Jn=new Ec(F,"edit-recipe-form-modal","edit-recipe-form","edit-recipe-modal-title","edit-recipe-id","edit-recipe-name","edit-recipe-category","edit-recipe-servings","edit-recipe-prep-time","edit-recipe-difficulty","edit-recipe-steps","edit-ingredients-list","edit-add-ingredient-btn","edit-save-recipe-btn","close-edit-recipe-modal","edit-cancel-recipe-btn"),Jn.setOnSaveCallback(async()=>{await ce();for(const A in i){const C=i[A];if(Array.isArray(C)){const V=C.map(L=>{if(L&&L.id){const x=m.find(O=>O.id===L.id);return x?{...x}:L}return L});i[A]=V}}ne(n.mealPlanGrid,{menuData:i,servingsData:a,remarksData:l,defaultNumPeople:_,startDay:s},!1),await xe()});let r=1,s="Lundi",i={},a={},l={};const u=[];let h=null,m=[],p=[],_=1,R=[],P=null;function M(A){return A?A.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase():""}async function D(A){const C=document.getElementById("unit-select-modal"),V=document.getElementById("unit-modal-title"),L=document.getElementById("unit-modal-list"),x=document.getElementById("unit-modal-cancel");return V.textContent=`Choisir une unité pour "${A}"`,L.innerHTML="",new Promise((O,H)=>{const j=["g","kg","ml","l","pièce(s)","c.à.s.","c.à.c.","pincée(s)"],X=J=>{C.classList.add("hidden"),O(J)};j.forEach(J=>{const ue=document.createElement("button");ue.className="btn btn-outline",ue.textContent=J,ue.addEventListener("click",()=>X(J)),L.appendChild(ue)});const he=()=>{C.classList.add("hidden"),H()};x.addEventListener("click",he,{once:!0}),C.addEventListener("click",J=>{J.target===C&&he()},{once:!0}),C.classList.remove("hidden")})}async function W(){if(F)try{p=(await ct(Ie(F,"ingredients"))).docs.map(C=>({id:C.id,...C.data()})),p.sort((C,V)=>C.name.localeCompare(V.name))}catch(A){console.error("Erreur lors de la récupération des ingrédients: ",A)}}async function ce(){if(!F)return;const A=Ie(F,"recipes");try{m=(await ct(A)).docs.map(V=>({id:V.id,...V.data()}))}catch(C){console.error("Error loading available meals from Firebase:",C)}}function $(){if(!P)i={},a={},l={},_=1,s="Lundi";else{const A=P.weeks?P.weeks[r]||{}:{};i=A.menuData||{},a=A.servingsData||{},l=A.remarksData||{},_=P.defaultNumPeople||1,s=P.startDay||"Lundi"}if(n.startDaySelect&&(n.startDaySelect.value=s),n.defaultServingsControl){n.defaultServingsControl.innerHTML="";const A=e(_,async C=>{if(_=C,P){const V=fe(F,"plans",P.id);await Yt(V,{defaultNumPeople:C,lastUpdated:new Date})}});n.defaultServingsControl.appendChild(A)}jt(),ne(n.mealPlanGrid,{menuData:i,servingsData:a,remarksData:l,defaultNumPeople:_,startDay:s},!1),xe()}function ne(A,C,V=!1){if(!A)return;const L=C.menuData||{},x=C.servingsData||{},O=C.remarksData||{},H=C.defaultNumPeople||1,j=C.startDay||"Lundi",X=document.createDocumentFragment(),he=["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"],J=["lunch","dinner"],ue=5,Se=he.indexOf(j);[...he.slice(Se),...he.slice(0,Se)].forEach(pt=>{const st=he.indexOf(pt),He=document.createElement("div");He.className="grid grid-cols-[100px_35px_repeat(5,_minmax(0,_1fr))_35px_repeat(5,_minmax(0,_1fr))] items-stretch border-b border-gray-300";const Et=document.createElement("div");Et.className="font-bold p-2 flex items-center justify-center bg-gray-100 text-sm border-r border-gray-300",Et.textContent=pt.toUpperCase(),He.appendChild(Et),J.forEach(gt=>{const ze=`${st}-${gt}`,Pt=x[ze]||H,ut=x.hasOwnProperty(ze),be=document.createElement("div"),Nt=t(Pt,ut,It=>{Wr(ze,It)},V);let Lt="border-r border-gray-300 flex items-center justify-center transition-colors duration-300";ut?Lt+=" bg-tomato":Lt+=gt==="lunch"?" bg-amber-50":" bg-stone-100",be.className=Lt,be.appendChild(Nt),He.appendChild(be);for(let It=0;It<ue;It++){const Dt=`${st}-${gt}-${It}`,mn=L[Dt],yt=document.createElement("div"),Hn=ge(Dt);let zn="meal-slot p-1 min-h-[70px] flex flex-col justify-start border-r border-gray-300";if(zn+=gt==="lunch"?" bg-amber-50":" bg-stone-100",yt.className=zn,yt.dataset.slotId=Dt,Hn==="Remarque")yt.appendChild(ie(Dt,O,V));else if(Array.isArray(mn)&&mn.length>0){const xt=document.createElement("div");xt.className="w-full",mn.forEach((pn,bt)=>{xt.appendChild(ke(pn,Dt,bt,V))}),yt.appendChild(xt),V||yt.appendChild($e(Dt,!0))}else V||yt.appendChild($e(Dt,!1));He.appendChild(yt)}}),X.appendChild(He)}),A.innerHTML="",A.appendChild(X),V||ee()}async function Q(){const A=Rt();if(!F||!A)return[];try{const C=vt(Ie(F,"shopping_lists"),Je("userId","==",A));return(await ct(C)).docs.map(O=>({id:O.id,...O.data()})).filter(O=>O.isShared!==!0)}catch(C){return console.error("Erreur de chargement des listes de courses sauvegardées: ",C),[]}}async function Z(){const A=await Q();if(n.importListContainer.innerHTML="",A.length===0){n.importListContainer.innerHTML='<p class="text-center text-gray-500">Aucune liste sauvegardée.</p>';return}A.forEach(C=>{const V=document.createElement("button");V.className="w-full text-left p-2 hover:bg-gray-100 rounded-lg transition-colors duration-150",V.textContent=C.name,V.addEventListener("click",()=>{confirm(`Voulez-vous vraiment importer les ingrédients de la liste "${C.name}" ?`)&&(C.ingredients.forEach(L=>{const x=parseFloat(String(L.quantity).replace(",","."))||0;E(L.name,x,L.unit)}),I())}),n.importListContainer.appendChild(V)}),n.importListModal.classList.remove("hidden")}function I(){n.importListModal.classList.add("hidden")}function g(){n.addItemInput?.addEventListener("input",()=>{const A=n.addItemInput.value.toLowerCase(),C=n.addItemResults;if(C.innerHTML="",!A){C.classList.add("hidden");return}p.filter(x=>x.name.toLowerCase().includes(A)).forEach(x=>{const O=document.createElement("div");O.className="p-2 hover:bg-gray-100 cursor-pointer",O.textContent=x.name,O.addEventListener("click",()=>{E(x.name,1,x.unit),n.addItemInput.value="",C.classList.add("hidden")}),C.appendChild(O)});const L=document.createElement("div");L.className="p-2 bg-green-50 hover:bg-green-200 cursor-pointer font-bold text-green-700",L.textContent=`+ Créer "${n.addItemInput.value}"`,L.addEventListener("click",async()=>{const x=n.addItemInput.value;try{const O=await D(x);await Ut(Ie(F,"ingredients"),{name:x,unit:O}),await W(),E(x,1,O),n.addItemInput.value="",C.classList.add("hidden")}catch{}}),C.appendChild(L),C.classList.remove("hidden")}),n.addItemBtn?.addEventListener("click",()=>{const A=n.addItemInput.value;A&&(E(A,1,""),n.addItemInput.value="",n.addItemResults.classList.add("hidden"))}),document.addEventListener("click",A=>{n.addItemInput&&!n.addItemInput.contains(A.target)&&!n.addItemResults.contains(A.target)&&n.addItemResults.classList.add("hidden")})}function y(){if(u.length===0){alert("La liste de courses est vide.");return}const A=u.reduce((x,O)=>{const H=O.category||"Inconnue";return x[H]||(x[H]=[]),x[H].push(O),x},{}),C=Object.keys(A).sort((x,O)=>x==="Inconnue"?1:O==="Inconnue"?-1:x.localeCompare(O));let V=`Liste de courses - GustoPlan

`;C.forEach(x=>{V+=`--- ${x.toUpperCase()} ---
`,A[x].sort((H,j)=>H.name.localeCompare(j.name)).forEach(H=>{let X=`${Number.isInteger(H.totalQuantity)?H.totalQuantity:parseFloat(H.totalQuantity.toFixed(2))} ${H.unit||""} ${H.name}`;if(H.sources&&H.sources.length>0){const he=H.sources.reduce((ue,Se)=>{const Le=`${Se.recipeName} (${Se.day} ${Se.time})`;return ue[Le]||(ue[Le]=0),ue[Le]+=Se.quantity,ue},{}),J=Object.keys(he).join(" / ");X+=` *** ${J} ***`}V+=X+`
`}),V+=`
`});const L=new Blob([V],{type:"text/plain;charset=utf-8"});saveAs(L,"liste-de-courses.txt")}function w(){if(u.length===0){alert("La liste de courses est vide.");return}const{jsPDF:A}=window.jspdf,C=new A,V=u.reduce((X,he)=>{const J=he.category||"Inconnue";return X[J]||(X[J]=[]),X[J].push(he),X},{}),L=Object.keys(V).sort((X,he)=>X==="Inconnue"?1:he==="Inconnue"?-1:X.localeCompare(he));C.setFontSize(18),C.text("Liste de courses - GustoPlan",14,22);let x=35;const O=C.internal.pageSize.height,H=20,j=()=>{x>O-H&&(C.addPage(),x=20)};L.forEach(X=>{j(),C.setFontSize(14),C.setFont(void 0,"bold"),C.text(`--- ${X.toUpperCase()} ---`,14,x),x+=8,C.setFont(void 0,"normal"),V[X].sort((J,ue)=>J.name.localeCompare(ue.name)).forEach(J=>{j(),C.setFontSize(12);const ue=Number.isInteger(J.totalQuantity)?J.totalQuantity:parseFloat(J.totalQuantity.toFixed(2));if(C.text(`${ue} ${J.unit||""} ${J.name}`,14,x),x+=6,J.sources&&J.sources.length>0){const Se=J.sources.reduce((Le,pt)=>{const st=`${pt.recipeName} (${pt.day} ${pt.time})`;return Le[st]||(Le[st]=0),Le[st]+=pt.quantity,Le},{});C.setFontSize(9),C.setTextColor(100);for(const Le in Se)j(),C.text(`  * ${Le}`,18,x),x+=5;C.setTextColor(0)}x+=2}),x+=5}),C.save("liste-de-courses.pdf")}async function E(A,C,V,L=!1){if(!P)return alert("Veuillez sélectionner un plan.");const x=fe(F,"plans",P.id);try{await FE(F,async O=>{const H=await O.get(x);if(!H.exists())throw"Le plan n'existe plus.";const j=H.data().manualItems||[],X=`${A.trim().toLowerCase()}_${V||""}`,he=j.findIndex(ue=>`${ue.name.trim().toLowerCase()}_${ue.unit||""}`===X);if(he>-1)j[he].totalQuantity+=C;else{const ue=p.find(Se=>Se.name.toLowerCase()===A.trim().toLowerCase());j.push({name:A.trim(),totalQuantity:C,unit:V,source:"manual",category:ue?ue.category:"Inconnue"})}const J=j.filter(ue=>ue.totalQuantity!==0);O.update(x,{manualItems:J,lastUpdated:new Date})})}catch(O){console.error("Erreur transactionnelle lors de l'ajustement de l'ingrédient: ",O),alert("Une erreur de synchronisation est survenue. Veuillez réessayer.")}}function b(A){const C=A?A.toLowerCase():"";return C.includes("g")||C.includes("ml")?10:1}function v(){const A=n.shoppingListContainer;if(!A)return;if(A.innerHTML="",u.length===0){A.innerHTML='<p class="text-center text-gray-500 italic py-4">Votre liste de courses est vide.</p>';return}const C=u.reduce((L,x)=>{const O=x.category||"Inconnue";return L[O]||(L[O]=[]),L[O].push(x),L},{});Object.keys(C).sort((L,x)=>L==="Inconnue"?1:x==="Inconnue"?-1:L.localeCompare(x)).forEach(L=>{const x=document.createElement("h4");x.className="text-sm font-bold text-stone-800 bg-stone-200 mt-4 mb-2 px-3 py-1 rounded-md",x.textContent=L,A.appendChild(x);const O=document.createElement("ul");O.className="space-y-2",C[L].sort((j,X)=>j.name.localeCompare(X.name)).forEach(j=>{const X=document.createElement("li");let he="p-2 rounded";X.className=he+(j.source==="manual"?" bg-lemon":" bg-gray-50");const J=document.createElement("div");J.className="flex justify-between items-center";const ue=document.createElement("span");ue.className="flex-grow text-sm font-medium",ue.textContent=j.name,J.appendChild(ue);const Se=document.createElement("div");Se.className="flex items-center space-x-2 mx-2";const Le=document.createElement("span");Le.className="font-medium w-20 text-center text-sm";const pt=Number.isInteger(j.totalQuantity)?j.totalQuantity:parseFloat(j.totalQuantity.toFixed(2));Le.textContent=`${pt} ${j.unit||""}`.trim();const st=document.createElement("div");st.className="flex flex-col";const He=document.createElement("button");He.className="btn btn-outline btn-xs rounded-b-none",He.textContent="+",He.addEventListener("click",async()=>{const ze=b(j.unit);await E(j.name,ze,j.unit)});const Et=document.createElement("button");Et.className="btn btn-outline btn-xs rounded-t-none -mt-px",Et.textContent="-",Et.addEventListener("click",async()=>{const ze=b(j.unit);await E(j.name,-ze,j.unit)}),st.appendChild(He),st.appendChild(Et),Se.appendChild(Le),Se.appendChild(st),J.appendChild(Se);const gt=document.createElement("button");if(gt.className="delete-item-btn text-red-500 hover:text-red-700",gt.innerHTML='<i class="fas fa-trash-alt"></i>',gt.addEventListener("click",()=>{E(j.name,-j.totalQuantity,j.unit,!0)}),J.appendChild(gt),X.appendChild(J),j.sources&&j.sources.length>0){const ze=document.createElement("div");ze.className="p-2 mt-1 ml-4 rounded-md bg-stone-100";const Pt=j.sources.reduce((ut,be)=>{const Nt=`${be.recipeName} (${be.day} ${be.time})`;return ut[Nt]||(ut[Nt]=0),ut[Nt]+=be.quantity,ut},{});for(const ut in Pt){const be=document.createElement("span");be.className="block text-xs text-gray-500",be.textContent=`↳ ${ut}`,ze.appendChild(be)}X.appendChild(ze)}O.appendChild(X)}),A.appendChild(O)})}async function xe(){if(!P){u.length=0,v();return}const A=P.manualItems?JSON.parse(JSON.stringify(P.manualItems)):[],C=new Map(A.map(x=>[`${x.name.trim().toLowerCase()}_${x.unit||""}`,x])),V=["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];if(P.weeks)for(const x in P.weeks){const O=P.weeks[x],H=O.menuData||{},j=O.servingsData||{};for(const X in H){const he=H[X];if(!Array.isArray(he))continue;const[J,ue]=X.split("-"),Se=parseInt(J,10),Le=V[Se]||"Jour inconnu",pt=ue==="lunch"?"midi":"soir",st=`${Se}-${ue}`,He=parseInt(j[st]||P.defaultNumPeople,10);for(const Et of he){const ze=m.find(ut=>ut.id===Et.id)||Et;if(!ze||!Array.isArray(ze.ingredients))continue;const Pt=ze.servings||1;Pt<=0||ze.ingredients.forEach(ut=>{const{name:be,quantity:Nt,unit:Lt}=ut;if(!be||!Nt)return;const It=p.find(bt=>bt.name.toLowerCase()===be.trim().toLowerCase()),Dt=It?It.category:"Inconnue",mn=parseFloat(String(Nt).replace(",","."));if(isNaN(mn))return;const Hn=mn/Pt*He,zn=Lt||"",xt=`${be.trim().toLowerCase()}_${zn}`,pn={recipeName:ze.name,day:`${Le} (S${x})`,time:pt,quantity:Hn};if(C.has(xt)){const bt=C.get(xt);bt.totalQuantity+=Hn,bt.source==="manual"&&(bt.source="mixed"),Array.isArray(bt.sources)?bt.sources.push(pn):bt.sources=[pn]}else C.set(xt,{name:be.trim(),totalQuantity:Hn,unit:zn,source:"plan",category:Dt,sources:[pn]})})}}}const L=Array.from(C.values()).filter(x=>x.totalQuantity>0);u.length=0,u.push(...L.sort((x,O)=>x.name.localeCompare(O.name))),v()}function re(A){const C=ge(A);if(!C||!n.mealSelectModal)return;n.mealSelectModalTitle.textContent=`Sélectionner : ${C}`,n.mealSelectList.innerHTML="";const V=document.createElement("input");V.type="text",V.placeholder="Rechercher dans la catégorie...",V.className="w-full p-2 mb-4 border border-gray-300 rounded-lg",n.mealSelectList.appendChild(V);const L=M(C),x=m.filter(j=>M(j.category)===L).sort((j,X)=>j.name.localeCompare(X.name)),O=document.createElement("div");O.className="space-y-1 max-h-80 overflow-y-auto",n.mealSelectList.appendChild(O);function H(j=""){O.innerHTML="";const X=j.toLowerCase(),he=x.filter(J=>J.name.toLowerCase().includes(X));he.length===0?O.innerHTML='<p class="text-gray-500 p-4">Aucun plat ne correspond à votre recherche.</p>':he.forEach(J=>{const ue=document.createElement("button");ue.className="w-full text-left p-2 hover:bg-gray-100 rounded-lg transition-colors duration-150";const Se=document.createElement("p");Se.className="font-medium text-gray-800 text-sm",Se.textContent=J.name,ue.appendChild(Se),ue.addEventListener("click",()=>{G(A,J),z()}),O.appendChild(ue)})}V.addEventListener("input",j=>H(j.target.value)),H(),n.mealSelectModal.classList.remove("hidden"),V.focus()}function z(){n.mealSelectModal&&n.mealSelectModal.classList.add("hidden")}function pe(A){h=A.target.closest(".meal-card");const C=h.closest(".meal-slot").dataset.slotId;A.dataTransfer.setData("text/plain",C),setTimeout(()=>{h&&(h.style.opacity="0.5")},0)}function de(){h&&(h.style.opacity="1",h=null)}function Ae(A){A.preventDefault();const C=A.target.closest(".meal-slot");C&&ge(C.dataset.slotId)!=="Remarque"&&C.classList.add("bg-gray-200")}function Te(A){const C=A.target.closest(".meal-slot");C&&C.classList.remove("bg-gray-200")}async function Fe(A){A.preventDefault();const C=A.dataTransfer.getData("text/plain"),V=A.target.closest(".meal-slot");if(V){V.classList.remove("bg-gray-200");const L=V.dataset.slotId,x=ge(L);if(x==="Remarque")return;if(C&&L&&C!==L){const O=i[C],H=ge(C);if(M(H)!==M(x)){alert(`Action impossible : un(e) "${H}" ne peut pas aller dans la catégorie "${x}".`);return}const j=i[L];i[L]=O,j?i[C]=j:delete i[C],ne(n.mealPlanGrid,{menuData:i,servingsData:a,remarksData:l,defaultNumPeople:_,startDay:s},!1),await saveCurrentPlan(),await xe()}}}function ge(A){switch(A.split("-")[2]){case"0":return"Entrée";case"1":return"Plat";case"2":return"Accompagnement";case"3":return"Dessert";case"4":return"Remarque";default:return""}}function ke(A,C,V,L=!1){const x=document.createElement("div");x.className="meal-card p-1 flex flex-col items-center bg-white rounded shadow-sm text-center relative w-full mb-1",L||(x.classList.add("cursor-grab"),x.draggable=!0);const O=document.createElement("span");if(O.className="text-xs font-medium p-1 break-words w-full",O.textContent=A.name,x.appendChild(O),!L){const X=document.createElement("div");X.className="absolute top-0 left-0 flex";const he=document.createElement("button");he.className="edit-meal-btn text-gray-600 hover:text-gray-800 hidden px-1 py-0.5",he.innerHTML='<i class="fas fa-pencil-alt fa-xs"></i>',he.title="Modifier la recette",he.addEventListener("click",ue=>{ue.stopPropagation();const Se=m.find(Le=>Le.id===A.id);Jn.openForm(Se||A,"Modifier la recette")}),X.appendChild(he);const J=document.createElement("button");J.className="delete-meal-btn text-red-700 hover:text-red-900 hidden px-1 py-0.5",J.innerHTML='<i class="fas fa-times-circle fa-xs"></i>',J.title="Retirer du planning",J.addEventListener("click",ue=>{ue.stopPropagation(),K(C,V)}),X.appendChild(J),x.appendChild(X),x.addEventListener("mouseenter",()=>{he.classList.remove("hidden"),J.classList.remove("hidden")}),x.addEventListener("mouseleave",()=>{he.classList.add("hidden"),J.classList.add("hidden")})}const H=document.createElement("div");H.className="absolute bottom-1 right-1";const j=document.createElement("button");return j.className="info-meal-btn bg-gray-500 text-white hover:bg-gray-600 rounded w-3 h-3 flex items-center justify-center shadow-sm",j.innerHTML='<i class="fas fa-plus fa-xs"></i>',j.title="Plus d'infos",j.dataset.slotId=C,j.dataset.mealIndex=V,H.appendChild(j),x.appendChild(H),x}function Ne(A,C){const V=A.classList.contains("info-open");if(document.querySelectorAll(".planner-ingredient-tooltip").forEach(L=>L.remove()),document.querySelectorAll(".info-meal-btn").forEach(L=>{L.classList.remove("info-open"),L.innerHTML='<i class="fas fa-plus fa-xs"></i>'}),!V){A.innerHTML='<i class="fas fa-times fa-xs"></i>',A.classList.add("info-open");const L=document.createElement("div");if(L.className="planner-ingredient-tooltip z-50 w-64 p-3 bg-white border border-gray-200 rounded-lg shadow-lg text-left text-sm",C.ingredients&&C.ingredients.length>0){if(C.servings&&C.servings>0){const J=document.createElement("p");J.className="mb-2 text-sm text-gray-600 flex items-center",J.innerHTML=`<i class="fas fa-users mr-2"></i> Pour ${C.servings} ${C.servings>1?"personnes":"personne"}`,L.appendChild(J)}const X=document.createElement("h4");X.className="font-bold mb-2 text-gray-800",X.textContent="Ingrédients :",L.appendChild(X);const he=document.createElement("ul");he.className="space-y-1 text-gray-600",C.ingredients.forEach(J=>{const ue=document.createElement("li");ue.textContent=`• ${J.quantity||""} ${J.unit||""} ${J.name}`.trim(),he.appendChild(ue)}),L.appendChild(he)}else L.textContent="Aucun ingrédient spécifié pour cette recette.";document.body.appendChild(L);const x=A.closest(".meal-card").getBoundingClientRect(),O=L.getBoundingClientRect();let H=x.right+10;H+O.width>window.innerWidth&&(H=x.left-O.width-10);let j=x.top;j+O.height>window.innerHeight&&(j=x.bottom-O.height),j<10&&(j=10),L.style.position="fixed",L.style.left=`${H}px`,L.style.top=`${j}px`}}function $e(A,C=!1){const V=document.createElement("div"),L=document.createElement("button");return C?(V.className="w-full flex justify-center pt-1",L.className="add-more-meal-btn text-gray-400 hover:text-green-500 transition-colors duration-150",L.innerHTML='<i class="fas fa-plus-circle"></i>',L.title="Ajouter une autre recette"):(V.className="flex items-center justify-center h-full",L.className="add-meal-btn text-green-500 hover:text-green-700 transition-transform duration-150 hover:scale-125",L.innerHTML='<i class="fas fa-plus-circle text-lg"></i>'),L.addEventListener("click",()=>re(A)),V.appendChild(L),V}function ie(A,C,V=!1){if(V){const x=document.createElement("p");return x.className="w-full h-full p-1 text-xs text-gray-700",x.textContent=C[A]||"",x}const L=document.createElement("textarea");return L.className="w-full h-full p-1 text-xs bg-transparent border-0 rounded focus:outline-none focus:ring-1 focus:ring-tomato resize-none",L.placeholder="Remarque...",L.value=l[A]||"",L.addEventListener("change",x=>{const O=x.target.value;O?l[A]=O:delete l[A],saveCurrentPlan()}),L}function ee(){document.querySelectorAll(".meal-card").forEach(A=>{A.addEventListener("dragstart",pe),A.addEventListener("dragend",de)}),document.querySelectorAll(".meal-slot").forEach(A=>{A.addEventListener("dragover",Ae),A.addEventListener("dragleave",Te),A.addEventListener("drop",Fe)})}async function G(A,C){const V=JSON.parse(JSON.stringify(i)),L=V[A];Array.isArray(L)?L.push({...C}):V[A]=[C];const x=fe(F,"plans",P.id);try{await Yt(x,{[`weeks.${r}.menuData`]:V,lastUpdated:new Date}),z()}catch(O){console.error("Erreur lors de l'ajout de la recette: ",O),alert("Une erreur est survenue.")}}async function K(A,C){if(!P||!i[A]||!Array.isArray(i[A]))return;const V=JSON.parse(JSON.stringify(i));V[A].splice(C,1),V[A].length===0&&delete V[A];const L=fe(F,"plans",P.id);try{await Yt(L,{[`weeks.${r}.menuData`]:V,lastUpdated:new Date})}catch(x){console.error("Erreur lors de la suppression de la recette: ",x),alert("Une erreur est survenue.")}}async function le(){if(confirm("Voulez-vous vraiment vider le menu de cette semaine ?")){const A={id:availablePlans.length>0?availablePlans[0].id:`${Rt()}_semaine-${r}`,name:availablePlans.length>0?availablePlans[0].name:"Mon plan",menuData:{},servingsData:{},remarksData:{},defaultNumPeople:_,startDay:s,lastUpdated:new Date};loadPlan(A),availablePlans.length>0?availablePlans[0]=A:availablePlans.push(A),await saveCurrentPlan()}}function Ce(A){A>=1&&A<=52&&(r=A,$())}function jt(){n.currentWeekDisplay&&(n.currentWeekDisplay.textContent=`Semaine ${r}`)}function en(){n.prevWeekBtn?.addEventListener("click",()=>Ce(r-1)),n.nextWeekBtn?.addEventListener("click",()=>Ce(r+1)),n.clearMenuBtn?.addEventListener("click",le),n.startDaySelect?.addEventListener("change",A=>{s=A.target.value,P&&(P.startDay=s),ne(n.mealPlanGrid,{menuData:i,servingsData:a,remarksData:l,defaultNumPeople:_,startDay:s},!1),saveCurrentPlan()}),n.planSelect?.addEventListener("change",kt),n.closeMealSelectModalBtn?.addEventListener("click",z),n.mealSelectModal?.addEventListener("click",A=>{A.target===n.mealSelectModal&&z()}),n.closeRecipeModalBtn?.addEventListener("click",()=>Jn.closeForm()),n.cancelRecipeBtn?.addEventListener("click",()=>Jn.closeForm()),n.importListBtn?.addEventListener("click",Z),n.closeImportListModalBtn?.addEventListener("click",I),n.importListModal?.addEventListener("click",A=>{A.target===n.importListModal&&I()}),n.exportTxtBtn?.addEventListener("click",y),n.exportPdfBtn?.addEventListener("click",w),n.mealPlanGrid?.addEventListener("click",A=>{const C=A.target.closest(".info-meal-btn");if(C){const V=C.dataset.slotId,L=parseInt(C.dataset.mealIndex,10);if(V&&!isNaN(L)){const x=i[V]?.[L];x&&Ne(C,x)}}}),n.sharePlanBtn?.addEventListener("click",()=>{if(!P){alert("Veuillez sélectionner un plan à partager.");return}wc({plan:P})})}function tn(A=""){return A.split(" ").map(L=>L[0]).join("").substring(0,2).toUpperCase()}function fn(A=[]){const C=document.getElementById("collaborators-bar"),V=document.getElementById("name-tooltip");if(!(!C||!V)){if(C.innerHTML="",A.length<=1){C.classList.add("hidden");return}A.forEach(L=>{const x=document.createElement("div");x.className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-300 text-white font-bold text-xs ring-2 ring-white cursor-pointer",x.dataset.name=L.displayName||"Inconnu",L.photoURL?x.innerHTML=`<img src="${L.photoURL}" alt="${L.displayName}" class="w-full h-full rounded-full object-cover">`:x.textContent=tn(L.displayName),x.addEventListener("mouseenter",O=>{V.textContent=O.currentTarget.dataset.name,V.classList.remove("hidden");const H=O.currentTarget.getBoundingClientRect();V.style.left=`${H.left+H.width/2-V.offsetWidth/2}px`,V.style.top=`${H.top-V.offsetHeight-5}px`}),x.addEventListener("mouseleave",()=>{V.classList.add("hidden")}),C.appendChild(x)}),C.classList.remove("hidden")}}function kt(){const A=n.planSelect.value;P=R.find(x=>x.id===A)||null;const C=document.getElementById("delete-plan-btn"),V=document.getElementById("rename-plan-btn"),L=document.getElementById("leave-plan-btn");C&&(C.style.display=P&&P.isOwner?"inline-flex":"none"),V&&(V.style.display=P&&P.isOwner?"inline-flex":"none"),L&&(L.style.display=P&&!P.isOwner?"inline-flex":"none"),fn(P?.participants),P&&(P.manualItems=P.manualItems||[]),$()}async function Wr(A,C){C===_?delete a[A]:a[A]=C,ne(n.mealPlanGrid,{menuData:i,servingsData:a,remarksData:l,defaultNumPeople:_,startDay:s},!1),await saveCurrentPlan(),await xe()}async function js(){return F?(If(),en(),g(),await W(),await ce(),await ce(),vf(C=>{R=C,Ef(C),kt()})):void 0}const et=js();return async()=>{const A=await et;typeof A=="function"&&A()}}const II=Object.freeze(Object.defineProperty({__proto__:null,default:EI},Symbol.toStringTag,{value:"Module"}));function wI(){const n=wf();return va(),()=>{typeof n=="function"&&n()}}async function va(){const n=document.getElementById("received-shares-container"),e=Rt();if(!(!e||!n)){n.innerHTML='<p class="text-gray-500">Chargement des partages reçus...</p>';try{const t=vt(Ie(F,"plans"),Je("userId","==",e),Je("isShared","==",!0)),r=vt(Ie(F,"plans"),Je("collaborators","array-contains",e)),[s,i]=await Promise.all([ct(t),ct(r)]);let a=[];if(s.forEach(l=>a.push({id:l.id,type:"Planification (Copie)",...l.data()})),i.forEach(l=>a.push({id:l.id,type:"Planification (Collaboratif)",...l.data()})),a.length===0){n.innerHTML=`<p class="text-gray-500">Vous n'avez aucun contenu partagé par d'autres utilisateurs.</p>`;return}a.sort((l,u)=>(u.sharedAt?.seconds||u.lastUpdated?.seconds||0)-(l.sharedAt?.seconds||l.lastUpdated?.seconds||0)),n.innerHTML="";for(const l of a){const u=l.originalOwnerId||l.userId;if(!u)continue;const h=await Ft(fe(F,"users",u)),m=h.exists()?h.data().displayName:"Utilisateur inconnu";n.appendChild(bI(l,m))}}catch(t){console.error("Erreur lors du chargement des partages reçus : ",t),n.innerHTML='<p class="text-red-500">Une erreur est survenue.</p>'}}}function bI(n,e){const t=document.createElement("div");t.className="bg-white rounded-lg p-4 flex justify-between items-center shadow-sm";const r=document.createElement("div"),s=document.createElement("p");s.className="font-bold text-gray-800";let i="";n.type.includes("Collaboratif")?i=' <span class="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Collab</span>':n.type.includes("Copie")&&(i=' <span class="text-xs font-medium bg-gray-200 text-gray-800 px-2 py-1 rounded-full">Copie</span>'),s.innerHTML=`${n.name}${i}`;const a=document.createElement("p");a.className="text-sm text-gray-500 mt-1";const l=n.sharedAt?new Date(n.sharedAt.seconds*1e3).toLocaleDateString("fr-FR"):n.lastUpdated?new Date(n.lastUpdated.seconds*1e3).toLocaleDateString("fr-FR"):"date inconnue";a.textContent=`Partagé par ${e} le ${l}`,r.appendChild(s),r.appendChild(a),t.appendChild(r);const u=document.createElement("button");return u.className="btn btn-ghost text-red-500 btn-sm",u.innerHTML='<i class="fas fa-trash"></i>',u.title="Supprimer ce contenu partagé",u.addEventListener("click",()=>TI(n.id,n.type)),t.appendChild(u),t}async function TI(n,e){if(confirm(`Voulez-vous vraiment supprimer cette ${e.toLowerCase()} partagée ?`))try{const t=e.startsWith("Planification")?"plans":"shopping_lists",r=fe(F,t,n),s=await Ft(r);s.exists()&&s.data().userId===Rt()?(await jn(r),va()):(alert("Vous n'avez pas la permission de supprimer cet élément ou il a déjà été supprimé."),va())}catch(t){console.error("Erreur de suppression: ",t),alert("Une erreur est survenue.")}}async function wf(){const n=document.getElementById("sent-shares-container"),e=Rt();if(!e||!n)return()=>{};n.innerHTML='<p class="text-gray-500">Chargement des partages envoyés...</p>';const t=Ie(F,"shares"),r=vt(t,Je("senderId","==",e));return Vr(r,async s=>{if(s.empty){n.innerHTML=`<p class="text-gray-500">Vous n'avez envoyé aucun partage.</p>`;return}const i=s.docs.sort((a,l)=>(l.data().createdAt?.seconds||0)-(a.data().createdAt?.seconds||0));n.innerHTML="";for(const a of i){const l=a.data();try{const u=await Ft(fe(F,"users",l.receiverId));if(u.exists()){const h=u.data();n.appendChild(AI(l,h.displayName,a.id))}}catch(u){console.error("Could not load receiver for sent share",u)}}},s=>{console.error("Erreur lors du chargement des partages envoyés : ",s),n&&(n.innerHTML='<p class="text-red-500">Une erreur est survenue.</p>')})}function AI(n,e,t){const r=document.createElement("div");r.className="bg-white rounded-lg p-4 flex justify-between items-center shadow-sm";const s=document.createElement("div"),i=document.createElement("p");i.className="font-bold text-gray-800";let a=[];n.plan&&a.push("Planification"),n.shoppingList&&a.push("Liste de courses"),i.textContent=a.join(" et ");const l=document.createElement("p");l.className="text-sm text-gray-500";const u=new Date(n.createdAt.seconds*1e3).toLocaleDateString("fr-FR");l.textContent=`Envoyé à ${e} le ${u}`,s.appendChild(i),s.appendChild(l),r.appendChild(s);const h=document.createElement("div");h.className="flex items-center space-x-4";const m=document.createElement("span");m.textContent=n.status;let p="bg-gray-200 text-gray-800";switch(n.status){case"accepted":p="bg-green-100 text-green-800";break;case"declined":p="bg-red-100 text-red-800";break;case"pending":p="bg-yellow-100 text-yellow-800";break}m.className=`text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full ${p}`,h.appendChild(m);const _=document.createElement("button");return _.className="btn btn-ghost text-red-500 btn-sm",_.innerHTML='<i class="fas fa-trash"></i>',_.title="Annuler le partage",_.addEventListener("click",()=>CI(t)),h.appendChild(_),r.appendChild(h),r}async function CI(n){if(confirm("Voulez-vous vraiment annuler ce partage ? L'autre utilisateur ne le verra plus."))try{await jn(fe(F,"shares",n)),wf()}catch(e){console.error("Erreur lors de la suppression du partage: ",e),alert("Une erreur est survenue.")}}const SI=Object.freeze(Object.defineProperty({__proto__:null,default:wI},Symbol.toStringTag,{value:"Module"})),Uu=document.querySelector("main"),RI={menu:{html:`
        <div class="flex flex-col md:flex-row md:space-x-2">

            <!-- Left Column: Meal Planner -->
            <div class="w-full md:w-5/6">
                <section id="meal-planning-section" aria-labelledby="meal-planning-heading" class="mb-8 md:mb-12">
                                    <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                                        <h2 id="meal-planning-heading" class="text-xl md:text-2xl font-bold text-gray-800">Planification des repas</h2>
                                        <div class="mt-3 md:mt-0 flex items-center space-x-2 md:space-x-3">
                                            <button id="generate-plan-ai-btn" class="btn btn-primary btn-sm">
                                                <i class="fas fa-robot mr-1 md:mr-2"></i> IA Semaine
                                            </button>
                                            <button id="clear-menu-btn" class="btn btn-outline btn-sm text-red-800 hover:bg-red-100">
                                                <i class="fas fa-trash-alt mr-1 md:mr-2"></i> Vider le menu
                                            </button>
                                            <button id="share-plan-btn" class="btn btn-secondary btn-sm">
                                                <i class="fas fa-share-alt mr-1 md:mr-2"></i> Partager
                                            </button>
                                        </div>
                                    </div>
                            
                                    <!-- Week Navigation & Plan Selector -->
                                    <div class="flex flex-col md:flex-row justify-between items-center mb-4 space-y-3 md:space-y-0">
                                        <!-- Week Navigation -->
                                        <div class="flex justify-between items-center bg-white p-2 md:p-3 rounded-lg shadow-sm">
                                            <button id="prev-week-btn" class="btn btn-ghost btn-sm" aria-label="Semaine précédente">
                                                <i class="fas fa-chevron-left mr-1 md:mr-2"></i> Préc.
                                            </button>
                                            <div id="current-week-display" class="text-gray-700 font-medium text-sm md:text-base text-center mx-4">Semaine X</div>
                                            <button id="next-week-btn" class="btn btn-ghost btn-sm" aria-label="Semaine suivante">
                                                Suiv. <i class="fas fa-chevron-right ml-1 md:ml-2"></i>
                                            </button>
                                        </div>
                                        <!-- Plan Selector -->
                                        <div class="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-sm">
                                            <label for="plan-select" class="text-sm font-medium text-gray-700">Plan affiché:</label>
                                            <select id="plan-select" class="rounded-md border-gray-300 shadow-sm focus:border-tomato focus:ring focus:ring-tomato focus:ring-opacity-50 text-sm py-1">
                                                <!-- Options will be generated by JS -->
                                            </select>
                                            <button id="create-plan-btn" class="btn btn-primary btn-sm" title="Créer un nouveau plan">
                                                <i class="fas fa-plus"></i>
                                            </button>
                                            <button id="rename-plan-btn" class="btn btn-ghost text-blue-500 hover:bg-blue-100 btn-sm" title="Renommer le plan sélectionné">
                                                <i class="fas fa-pencil-alt"></i>
                                            </button>
                                            <button id="leave-plan-btn" class="btn btn-ghost text-yellow-600 hover:bg-yellow-100 btn-sm" title="Quitter le plan collaboratif">
                                                <i class="fas fa-door-open"></i>
                                            </button>
                                            <button id="delete-plan-btn" class="btn btn-ghost text-red-500 hover:bg-red-100 btn-sm" title="Supprimer le plan sélectionné">
                                                <i class="fas fa-trash"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <!-- Collaborators Bar -->
                                    <div id="collaborators-bar" class="flex items-center space-x-2 mb-4 hidden">
                                        <!-- Avatars will be injected here -->
                                    </div>
                            
                                            <!-- Settings Section -->
                                            <div class="inline-flex items-center space-x-6 bg-white p-3 rounded-lg shadow-sm mb-4">                                        <div>
                                            <label for="start-day-select" class="text-sm font-medium text-gray-700">Début de semaine:</label>
                                            <select id="start-day-select" class="rounded-md border-gray-300 shadow-sm focus:border-tomato focus:ring-tomato text-sm py-1">
                                                <option>Lundi</option>
                                                <option>Mardi</option>
                                                <option>Mercredi</option>
                                                <option>Jeudi</option>
                                                <option>Vendredi</option>
                                                <option>Samedi</option>
                                                <option>Dimanche</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label for="default-servings-input" class="text-sm font-medium text-gray-700">Personnes par défaut:</label>
                                            <div id="default-servings-control" class="mt-1"></div>
                                        </div>
                                    </div>                    <!-- Meal Plan Grid -->
                    <div class="bg-white rounded-xl shadow-md p-4 overflow-x-auto">
                        <div id="meal-plan-grid-layout" class="min-w-[1400px]">
                            <!-- Header -->
                            <div class="grid grid-cols-[100px_35px_repeat(5,_minmax(0,_1fr))_35px_repeat(5,_minmax(0,_1fr))] gap-1 text-center mb-1">
                                <div class="p-2"></div> <!-- Empty corner -->
                                <div class="p-2 rounded-t-lg bg-amber-100 text-amber-800 font-bold col-span-6">MIDI</div>
                                <div class="p-2 rounded-t-lg bg-stone-200 text-stone-800 font-bold col-span-6">SOIR</div>
                                
                                <div class="p-1"></div> <!-- Empty under day name -->
                                <div class="p-1 text-xs font-semibold"><i class="fas fa-users"></i></div>
                                <div class="p-1 text-xs font-semibold text-gray-600">Entrée</div>
                                <div class="p-1 text-xs font-semibold text-gray-600">Plat</div>
                                <div class="p-1 text-xs font-semibold text-gray-600">Accomp.</div>
                                <div class="p-1 text-xs font-semibold text-gray-600">Dessert</div>
                                <div class="p-1 text-xs font-semibold text-gray-600">Remarque</div>

                                <div class="p-1 text-xs font-semibold"><i class="fas fa-users"></i></div>
                                <div class="p-1 text-xs font-semibold text-gray-600">Entrée</div>
                                <div class="p-1 text-xs font-semibold text-gray-600">Plat</div>
                                <div class="p-1 text-xs font-semibold text-gray-600">Accomp.</div>
                                <div class="p-1 text-xs font-semibold text-gray-600">Dessert</div>
                                <div class="p-1 text-xs font-semibold text-gray-600">Remarque</div>
                            </div>
                            <!-- Rows generated by JS -->
                            <div id="meal-plan-grid" class="space-y-1">
                                <div class="p-10 text-center text-gray-500 italic col-span-full">Chargement du planning...</div>
                            </div>                                            </div>
                                        </div>
                                    </section>


                                </div>
                    
                                <!-- Right Column: Shopping List -->
                                <div class="w-full md:w-1/6">
                                    <section id="shopping-list-section" aria-labelledby="shopping-list-heading" class="mb-8 md:mb-12 md:sticky md:top-24">
                                        <div class="bg-white rounded-xl shadow-md p-4 md:p-6">
                                            <h2 id="shopping-list-heading" class="text-xl md:text-2xl font-bold text-gray-800 mb-4">Liste de courses</h2>
                                            <div class="flex justify-end space-x-2 mb-4">
                                                <button id="import-list-btn" class="btn btn-secondary btn-sm">
                                                    <i class="fas fa-download mr-2"></i>Importer une liste
                                                </button>
                                                <div id="export-buttons-container" class="flex space-x-2">
                                                    <button id="export-txt-btn" class="btn btn-outline btn-sm">
                                                        <i class="fas fa-file-alt mr-2"></i>TXT
                                                    </button>
                                                    <button id="export-pdf-btn" class="btn btn-outline btn-sm">
                                                        <i class="fas fa-file-pdf mr-2"></i>PDF
                                                    </button>
                                                </div>
                                            </div>
                    
                                            <!-- Shopping List Container -->
                                            <div id="shopping-list-container" class="mb-4 max-h-[70vh] overflow-y-auto pr-2">                            <ul id="shopping-list" class="space-y-2 text-sm">
                                <!-- Les articles de la liste de courses seront générés ici -->
                            </ul>
                        </div>

                        <!-- Add Item Input -->
                        <div class="mt-4 flex items-stretch">
                            <div class="relative flex-grow">
                                <input type="text" id="add-item-input" placeholder="Chercher ou ajouter..." class="w-full border border-gray-300 rounded-l-lg px-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-tomato focus:border-transparent">
                                <div id="add-item-results" class="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg mt-1 hidden max-h-48 overflow-y-auto bottom-full mb-2"></div>
                            </div>
                            <button id="add-item-btn" class="btn btn-primary rounded-l-none -ml-px btn-xs" aria-label="Ajouter l'article">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>

                         <!-- AI Shopping Tips Placeholder -->
                        <div id="ai-shopping-tip" class="mt-6 bg-avocado bg-opacity-10 rounded-lg p-3 hidden">
                            <div class="flex items-start">
                                 <div class="w-8 h-8 bg-avocado bg-opacity-20 rounded-full flex items-center justify-center mr-3 shrink-0">
                                    <i class="fas fa-lightbulb text-avocado"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold text-avocado mb-1 text-sm">Astuce Économique</h4>
                                    <p id="ai-shopping-tip-text" class="text-sm text-gray-700">...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>

        <!-- Shared Plans Modal -->
        <div id="shared-plans-modal" class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[100] hidden">
            <div class="bg-white rounded-xl p-6 w-11/12 max-w-6xl max-h-[90vh] overflow-y-auto relative">
                <button id="close-shared-plans-modal" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600" aria-label="Fermer">
                    <i class="fas fa-times text-xl"></i>
                </button>
                <h3 id="shared-plans-modal-title" class="text-2xl font-bold mb-6">Plans partagés pour la Semaine X</h3>
                <div id="shared-plans-modal-container" class="space-y-6">
                    <!-- Shared plans will be loaded here -->
                </div>
            </div>
        </div>
        `,script:"./script.js"},recipes:{html:`
        <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-800">Mes Recettes</h2>
            <button id="add-recipe-btn" class="btn btn-primary">
                <i class="fas fa-plus mr-2"></i> Ajouter une recette
            </button>
        </div>

        <!-- Search Bar -->
        <div class="mb-6">
            <input type="text" id="search-bar" placeholder="Rechercher une recette..." class="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-tomato focus:border-tomato">
        </div>

        <!-- Tabs Navigation -->
        <div id="category-tabs" class="mb-6 border-b border-gray-200 flex space-x-4 flex-nowrap overflow-x-auto pb-2">
            <!-- Tabs will be generated by recipes.js here -->
        </div>

        <!-- Recipe List Container -->
        <div id="recipe-list-container">
            <!-- Recipes for the selected tab will be loaded here -->
        </div>

        <!-- Reconstructed Recipe Form Modal -->
        <div id="recipe-form-modal" class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[100] hidden">
            <div class="bg-white rounded-xl p-6 w-11/12 max-w-3xl max-h-[90vh] overflow-y-auto relative">
                <button id="close-recipe-modal" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600" aria-label="Fermer">
                    <i class="fas fa-times text-xl"></i>
                </button>
                <h3 id="recipe-modal-title" class="text-2xl font-bold mb-6">Ajouter/Modifier une recette</h3>
                <form id="recipe-form" class="space-y-4">
                    <input type="hidden" id="recipe-id">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="md:col-span-2">
                            <label for="recipe-name" class="block text-sm font-medium text-gray-700">Nom de la recette</label>
                            <input type="text" id="recipe-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" required>
                        </div>
                        <div>
                            <label for="recipe-category" class="block text-sm font-medium text-gray-700">Catégorie</label>
                            <select id="recipe-category" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" required>
                                <option>ENTREE</option>
                                <option>PLAT</option>
                                <option>ACCOMPAGNEMENT</option>
                                <option>DESSERT</option>
                            </select>
                        </div>
                        <div>
                            <label for="recipe-servings" class="block text-sm font-medium text-gray-700">Nombre de personnes</label>
                            <input type="number" id="recipe-servings" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" min="1">
                        </div>
                        <div>
                            <label for="recipe-prep-time" class="block text-sm font-medium text-gray-700">Temps de préparation (min)</label>
                            <input type="number" id="recipe-prep-time" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" min="0">
                        </div>
                         <div>
                            <label for="recipe-difficulty" class="block text-sm font-medium text-gray-700">Difficulté</label>
                            <select id="recipe-difficulty" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                                <option>Très facile</option>
                                <option>Facile</option>
                                <option>Moyen</option>
                                <option>Difficile</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <h4 class="text-lg font-medium text-gray-800 mb-2">Ingrédients</h4>
                        <div id="ingredients-list" class="space-y-2"></div>
                        <button type="button" id="add-ingredient-btn" class="btn btn-outline btn-sm mt-2">
                            <i class="fas fa-plus mr-2"></i> Ajouter un ingrédient
                        </button>
                    </div>
                    <div>
                        <label for="recipe-steps" class="block text-lg font-medium text-gray-800">Préparation</label>
                        <textarea id="recipe-steps" rows="8" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"></textarea>
                    </div>
                    <div class="flex justify-end space-x-4 pt-4">
                        <button type="button" id="cancel-recipe-btn" class="btn btn-ghost">Annuler</button>
                        <button type="submit" id="save-recipe-btn" class="btn btn-primary">Sauvegarder</button>
                    </div>
                </form>
            </div>
        </div>
        `,script:"./recipes.js"},ingredients:{html:`
        <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-800">Mes Ingrédients</h2>
            <div class="flex space-x-2">
                <button id="manage-categories-btn" class="btn btn-outline">
                    <i class="fas fa-tags mr-2"></i> Gérer les catégories
                </button>
                <button id="add-ingredient-btn" class="btn btn-primary">
                    <i class="fas fa-plus mr-2"></i> Ajouter un ingrédient
                </button>
            </div>
        </div>

        <!-- Search Bar -->
        <div class="mb-6">
            <input type="text" id="search-bar" placeholder="Rechercher un ingrédient..." class="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-tomato focus:border-tomato">
        </div>

        <!-- Tabs Navigation -->
        <div id="category-tabs" class="mb-6 border-b border-gray-200 flex space-x-4 flex-nowrap overflow-x-auto pb-2">
            <!-- Tabs will be generated by ingredients.js here -->
        </div>

        <!-- Ingredient List Container -->
        <div id="ingredients-list-container">
            <p class="text-center text-gray-500 p-10">Chargement des ingrédients...</p>
        </div>

        <!-- Ingredient Form Modal -->
        <div id="ingredient-form-modal" class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[100] hidden">
            <div class="bg-white rounded-xl p-6 w-11/12 max-w-md relative">
                <button id="close-ingredient-modal" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600"><i class="fas fa-times text-xl"></i></button>
                <h3 id="ingredient-modal-title" class="text-lg font-bold mb-4">Ajouter un Ingrédient</h3>
                <form id="ingredient-form" class="space-y-4">
                    <input type="hidden" id="ingredient-id">
                    <div>
                        <label for="ingredient-name" class="block text-sm font-medium text-gray-700">Nom</label>
                        <input type="text" id="ingredient-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" required>
                    </div>
                    <div>
                        <label for="ingredient-unit" class="block text-sm font-medium text-gray-700">Unité par défaut</label>
                        <select id="ingredient-unit" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"></select>
                    </div>
                    <div>
                        <label for="ingredient-category" class="block text-sm font-medium text-gray-700">Catégorie</label>
                        <select id="ingredient-category" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" required></select>
                    </div>
                    <div class="flex justify-end space-x-4 pt-2">
                        <button type="button" id="cancel-ingredient-btn" class="btn btn-ghost">Annuler</button>
                        <button type="submit" id="save-ingredient-btn" class="btn btn-primary">Sauvegarder</button>
                    </div>
                </form>
            </div>
        </div>

        <!-- Category Management Modal -->
        <div id="category-management-modal" class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[100] hidden">
            <div class="bg-white rounded-xl p-6 w-11/12 max-w-lg relative">
                <h3 class="text-lg font-bold mb-4">Gérer les catégories d'ingrédients</h3>
                <form id="add-category-form" class="flex items-center space-x-2 mb-4">
                    <input type="text" id="new-category-name" placeholder="Nom de la nouvelle catégorie" class="flex-grow mt-1 block w-full rounded-md border-gray-300 shadow-sm" required>
                    <button type="submit" class="btn btn-secondary">Ajouter</button>
                </form>
                <div id="category-list" class="max-h-64 overflow-y-auto border rounded-lg p-2"></div>
                <div class="flex justify-end space-x-4 mt-4">
                     <button type="button" id="close-category-modal" class="btn btn-ghost">Annuler</button>
                    <button type="button" id="done-category-modal-btn" class="btn btn-primary">Terminé</button>
                </div>
            </div>
        </div>
        `,script:"./ingredients.js"},lists:{html:`
        <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-800">Mes Listes de Courses</h2>
            <button id="add-list-btn" class="btn btn-primary">
                <i class="fas fa-plus mr-2"></i> Créer une liste
            </button>
        </div>

        <!-- Search Bar -->
        <div class="mb-6">
            <input type="text" id="search-bar" placeholder="Rechercher une liste..." class="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-tomato focus:border-tomato">
        </div>

        <!-- Lists Container -->
        <div id="lists-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>

        <div class="mt-12">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Listes Partagées</h2>
            <div id="shared-lists-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Les listes partagées seront chargées ici par JS -->
            </div>
        </div>

        <!-- List Form Modal -->
        <div id="list-form-modal" class="fixed inset-0 bg-black bg-opacity-60 flex items-start justify-center z-[100] hidden pt-20">
            <div class="bg-white rounded-xl p-6 w-11/12 max-w-3xl min-h-[75vh] max-h-[90vh] overflow-y-auto relative">
                <button id="close-list-modal" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"><i class="fas fa-times text-xl"></i></button>
                <h3 id="list-modal-title" class="text-lg font-bold mb-4">Créer une liste</h3>
                <form id="list-form" class="space-y-4 pb-20">
                    <input type="hidden" id="list-id">
                    <div>
                        <label for="list-name" class="block text-sm font-medium text-gray-700">Nom de la liste</label>
                        <input type="text" id="list-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" required>
                    </div>
                    <div>
                        <h4 class="text-md font-medium text-gray-800 mb-2">Ingrédients</h4>
                        <div id="ingredients-list" class="space-y-2"></div>
                        <button type="button" id="add-ingredient-btn" class="btn btn-outline btn-sm mt-2">
                            <i class="fas fa-plus mr-2"></i> Ajouter un ingrédient
                        </button>
                    </div>
                </form>
                <div class="absolute bottom-0 left-0 right-0 px-6 py-4 bg-white/95 backdrop-blur-sm border-t border-gray-200 flex justify-end space-x-4">
                    <button type="button" id="cancel-list-btn" class="btn btn-ghost">Annuler</button>
                    <button type="submit" form="list-form" id="save-list-btn" class="btn btn-primary">Sauvegarder la liste</button>
                </div>
            </div>
        </div>
        `,script:"./lists.js"},friends:{html:`
        <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-800">Mes Amis</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="md:col-span-2 space-y-8">
                <div>
                    <h3 class="text-xl font-bold text-gray-800 mb-4">Liste d'amis</h3>
                    <div id="friends-list-container" class="space-y-4">
                        <!-- La liste d'amis sera chargée ici -->
                    </div>
                </div>
                <div>
                    <h3 class="text-xl font-bold text-gray-800 mb-4">Demandes envoyées en attente</h3>
                    <div id="pending-requests-container" class="space-y-4">
                        <!-- Les demandes envoyées en attente seront chargées ici -->
                    </div>
                </div>
                <div>
                    <h3 class="text-xl font-bold text-gray-800 mb-4">Demandes rejetées</h3>
                    <div id="declined-requests-container" class="space-y-4">
                        <!-- Les demandes rejetées seront chargées ici -->
                    </div>
                </div>
            </div>
            <div>
                <div class="bg-white rounded-xl shadow-md p-6">
                    <h3 class="text-xl font-bold text-gray-800 mb-4">Rechercher un ami</h3>
                    <div class="mb-4">
                        <div class="flex items-center space-x-2">
                            <input type="text" id="search-friends-input" placeholder="Nom ou email..." class="flex-grow p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-tomato focus:border-tomato">
                            <button id="search-friends-btn" class="btn btn-primary"><i class="fas fa-search"></i></button>
                        </div>
                        <div id="search-results-container" class="mt-2 space-y-2"></div>
                    </div>
                </div>
            </div>
        </div>
        `,script:"./friends.js"},shared:{html:`
        <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-800">Mes Partages</h2>
        </div>

        <div class="space-y-12">
            <div>
                <h3 class="text-xl font-bold text-gray-700 border-b pb-2 mb-4">Partages Reçus</h3>
                <div id="received-shares-container" class="space-y-4">
                    <!-- L'historique des partages acceptés sera chargé ici -->
                </div>
            </div>
            <div>
                <h3 class="text-xl font-bold text-gray-700 border-b pb-2 mb-4">Mes Partages Envoyés</h3>
                <div id="sent-shares-container" class="space-y-4">
                    <!-- L'historique des partages envoyés sera chargé ici -->
                </div>
            </div>
        </div>
        `,script:"./shared.js"}},PI=Object.assign({"./auth.js":qE,"./firebase-config.js":jE,"./form-handler.js":$E,"./friends.js":QE,"./ingredients.js":XE,"./lists.js":tI,"./main.js":jf,"./notifications.js":lI,"./plans.js":yI,"./recipes.js":vI,"./script.js":II,"./shared.js":SI,"./sharing.js":ZE});let ri=null;async function Bu(n){typeof ri=="function"&&(ri(),ri=null);const e=RI[n];if(e&&Uu){if(Uu.innerHTML=e.html,e.script){const t=PI[e.script];t?t.default&&typeof t.default=="function"&&(ri=t.default()):console.error(`Module not found for path: ${e.script}`)}}else console.error(`Route not found: ${n}`)}function xI(){const n=Bt();if(n){const t=document.getElementById("user-display-name");t&&(t.textContent=n.displayName||n.email)}const e=document.querySelectorAll(".nav-btn");e.forEach(t=>{t.addEventListener("click",r=>{const s=r.currentTarget.dataset.path;Bu(s),e.forEach(i=>{i.classList.remove("bg-tomato","text-white"),i.classList.add("bg-white","text-tomato")}),r.currentTarget.classList.add("bg-tomato","text-white"),r.currentTarget.classList.remove("bg-white","text-tomato")})}),Bu("menu"),_f()}document.addEventListener("DOMContentLoaded",()=>{lf().then(n=>{n&&xI()})});
