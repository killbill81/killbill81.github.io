(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const Iw=()=>{};var cp={};/**
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
 */const W_={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const V=function(n,e){if(!n)throw js(e)},js=function(n){return new Error("Firebase Database ("+W_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const K_=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ew=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ih={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,u=l?n[s+2]:0,d=i>>2,f=(i&3)<<4|a>>4;let m=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(m=64)),r.push(t[d],t[f],t[m],t[g])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(K_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ew(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const f=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||a==null||u==null||f==null)throw new Tw;const m=i<<2|a>>4;if(r.push(m),u!==64){const g=a<<4&240|u>>2;if(r.push(g),f!==64){const A=u<<6&192|f;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Tw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const H_=function(n){const e=K_(n);return ih.encodeByteArray(e,!0)},Da=function(n){return H_(n).replace(/\./g,"")},xa=function(n){try{return ih.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ww(n){return Q_(void 0,n)}function Q_(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!vw(t)||(n[t]=Q_(n[t],e[t]));return n}function vw(n){return n!=="__proto__"}/**
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
 */function Y_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Aw=()=>Y_().__FIREBASE_DEFAULTS__,Sw=()=>{if(typeof process>"u"||typeof cp>"u")return;const n=cp.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},bw=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&xa(n[1]);return e&&JSON.parse(e)},Ec=()=>{try{return Iw()||Aw()||Sw()||bw()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},J_=n=>Ec()?.emulatorHosts?.[n],oh=n=>{const e=J_(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},X_=()=>Ec()?.config,Z_=n=>Ec()?.[`_${n}`];/**
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
 */class kt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function bt(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Eo(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function eg(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Da(JSON.stringify(t)),Da(JSON.stringify(o)),""].join(".")}const Oi={};function Rw(){const n={prod:[],emulator:[]};for(const e of Object.keys(Oi))Oi[e]?n.emulator.push(e):n.prod.push(e);return n}function Cw(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let lp=!1;function Tc(n,e){if(typeof window>"u"||typeof document>"u"||!bt(window.location.host)||Oi[n]===e||Oi[n]||lp)return;Oi[n]=e;function t(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=Rw().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function a(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,g){m.setAttribute("width","24"),m.setAttribute("id",g),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{lp=!0,o()},m}function d(m,g){m.setAttribute("id",g),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function f(){const m=Cw(r),g=t("text"),A=document.getElementById(g)||document.createElement("span"),N=t("learnmore"),k=document.getElementById(N)||document.createElement("a"),F=t("preprendIcon"),G=document.getElementById(F)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const B=m.element;a(B),d(k,N);const ie=u();l(G,F),B.append(G,A,k,ie),document.body.appendChild(B)}i?(A.innerText="Preview backend disconnected.",G.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(G.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,A.innerText="Preview backend running in this workspace."),A.setAttribute("id",g)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
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
 */function Ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ah(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ve())}function tg(){const n=Ec()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Pw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Nw(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ng(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kw(){const n=Ve();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Dw(){return W_.NODE_ADMIN===!0}function rg(){return!tg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function sg(){return!tg()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function ig(){try{return typeof indexedDB=="object"}catch{return!1}}function xw(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}/**
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
 */const Vw="FirebaseError";class qt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Vw,Object.setPrototypeOf(this,qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,To.prototype.create)}}class To{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Ow(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new qt(s,a,r)}}function Ow(n,e){return n.replace(Mw,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Mw=/\{\$([^}]+)}/g;/**
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
 */function Yi(n){return JSON.parse(n)}function Ge(n){return JSON.stringify(n)}/**
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
 */const og=function(n){let e={},t={},r={},s="";try{const i=n.split(".");e=Yi(xa(i[0])||""),t=Yi(xa(i[1])||""),s=i[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:s}},Lw=function(n){const e=og(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Fw=function(n){const e=og(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Gt(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function ps(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Va(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Oa(n,e,t){const r={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=e.call(t,n[s],s,n));return r}function gt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(up(i)&&up(o)){if(!gt(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function up(n){return n!==null&&typeof n=="object"}/**
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
 */function zs(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class Uw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let f=0;f<16;f++)r[f]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let f=16;f<80;f++){const m=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(m<<1|m>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,d;for(let f=0;f<80;f++){f<40?f<20?(u=a^i&(o^a),d=1518500249):(u=i^o^a,d=1859775393):f<60?(u=i&o|a&(i|o),d=2400959708):(u=i^o^a,d=3395469782);const m=(s<<5|s>>>27)+u+l+d+r[f]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=m}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<t;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function Bw(n,e){const t=new qw(n,e);return t.subscribe.bind(t)}class qw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Gw(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Ll),s.error===void 0&&(s.error=Ll),s.complete===void 0&&(s.complete=Ll);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Gw(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ll(){}function ms(n,e){return`${n} failed: ${e} argument `}/**
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
 */const jw=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,V(r<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},wc=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function ne(n){return n&&n._delegate?n._delegate:n}class Qt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const sr="[DEFAULT]";/**
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
 */class zw{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new kt;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ww(e))try{this.getOrInitializeService({instanceIdentifier:sr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=sr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=sr){return this.instances.has(e)}getOptions(e=sr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$w(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=sr){return this.component?this.component.multipleInstances?e:sr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $w(n){return n===sr?void 0:n}function Ww(n){return n.instantiationMode==="EAGER"}/**
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
 */class Kw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new zw(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Z||(Z={}));const Hw={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},Qw=Z.INFO,Yw={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},Jw=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Yw[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vc{constructor(e){this.name=e,this._logLevel=Qw,this._logHandler=Jw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Hw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const Xw=(n,e)=>e.some(t=>n instanceof t);let hp,dp;function Zw(){return hp||(hp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ev(){return dp||(dp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ag=new WeakMap,ou=new WeakMap,cg=new WeakMap,Fl=new WeakMap,ch=new WeakMap;function tv(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(Rn(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&ag.set(t,n)}).catch(()=>{}),ch.set(e,n),e}function nv(n){if(ou.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});ou.set(n,e)}let au={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ou.get(n);if(e==="objectStoreNames")return n.objectStoreNames||cg.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Rn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function rv(n){au=n(au)}function sv(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ul(this),e,...t);return cg.set(r,e.sort?e.sort():[e]),Rn(r)}:ev().includes(n)?function(...e){return n.apply(Ul(this),e),Rn(ag.get(this))}:function(...e){return Rn(n.apply(Ul(this),e))}}function iv(n){return typeof n=="function"?sv(n):(n instanceof IDBTransaction&&nv(n),Xw(n,Zw())?new Proxy(n,au):n)}function Rn(n){if(n instanceof IDBRequest)return tv(n);if(Fl.has(n))return Fl.get(n);const e=iv(n);return e!==n&&(Fl.set(n,e),ch.set(e,n)),e}const Ul=n=>ch.get(n);function ov(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),a=Rn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Rn(o.result),l.oldVersion,l.newVersion,Rn(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const av=["get","getKey","getAll","getAllKeys","count"],cv=["put","add","delete","clear"],Bl=new Map;function fp(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Bl.get(e))return Bl.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=cv.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||av.includes(t)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),s&&l.done]))[0]};return Bl.set(e,i),i}rv(n=>({...n,get:(e,t,r)=>fp(e,t)||n.get(e,t,r),has:(e,t)=>!!fp(e,t)||n.has(e,t)}));/**
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
 */class lv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(uv(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function uv(n){return n.getComponent()?.type==="VERSION"}const cu="@firebase/app",pp="0.14.3";/**
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
 */const Yt=new vc("@firebase/app"),hv="@firebase/app-compat",dv="@firebase/analytics-compat",fv="@firebase/analytics",pv="@firebase/app-check-compat",mv="@firebase/app-check",_v="@firebase/auth",gv="@firebase/auth-compat",yv="@firebase/database",Iv="@firebase/data-connect",Ev="@firebase/database-compat",Tv="@firebase/functions",wv="@firebase/functions-compat",vv="@firebase/installations",Av="@firebase/installations-compat",Sv="@firebase/messaging",bv="@firebase/messaging-compat",Rv="@firebase/performance",Cv="@firebase/performance-compat",Pv="@firebase/remote-config",Nv="@firebase/remote-config-compat",kv="@firebase/storage",Dv="@firebase/storage-compat",xv="@firebase/firestore",Vv="@firebase/ai",Ov="@firebase/firestore-compat",Mv="firebase",Lv="12.3.0";/**
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
 */const Ma="[DEFAULT]",Fv={[cu]:"fire-core",[hv]:"fire-core-compat",[fv]:"fire-analytics",[dv]:"fire-analytics-compat",[mv]:"fire-app-check",[pv]:"fire-app-check-compat",[_v]:"fire-auth",[gv]:"fire-auth-compat",[yv]:"fire-rtdb",[Iv]:"fire-data-connect",[Ev]:"fire-rtdb-compat",[Tv]:"fire-fn",[wv]:"fire-fn-compat",[vv]:"fire-iid",[Av]:"fire-iid-compat",[Sv]:"fire-fcm",[bv]:"fire-fcm-compat",[Rv]:"fire-perf",[Cv]:"fire-perf-compat",[Pv]:"fire-rc",[Nv]:"fire-rc-compat",[kv]:"fire-gcs",[Dv]:"fire-gcs-compat",[xv]:"fire-fst",[Ov]:"fire-fst-compat",[Vv]:"fire-vertex","fire-js":"fire-js",[Mv]:"fire-js-all"};/**
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
 */const La=new Map,Uv=new Map,lu=new Map;function mp(n,e){try{n.container.addComponent(e)}catch(t){Yt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function xn(n){const e=n.name;if(lu.has(e))return Yt.debug(`There were multiple attempts to register component ${e}.`),!1;lu.set(e,n);for(const t of La.values())mp(t,n);for(const t of Uv.values())mp(t,n);return!0}function xr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Bv(n,e,t=Ma){xr(n,e).clearInstance(t)}function pt(n){return n==null?!1:n.settings!==void 0}/**
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
 */const qv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Cn=new To("app","Firebase",qv);/**
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
 */class Gv{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Qt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Cn.create("app-deleted",{appName:this._name})}}/**
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
 */const Vr=Lv;function lg(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Ma,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Cn.create("bad-app-name",{appName:String(s)});if(t||(t=X_()),!t)throw Cn.create("no-options");const i=La.get(s);if(i){if(gt(t,i.options)&&gt(r,i.config))return i;throw Cn.create("duplicate-app",{appName:s})}const o=new Kw(s);for(const l of lu.values())o.addComponent(l);const a=new Gv(t,r,o);return La.set(s,a),a}function Ac(n=Ma){const e=La.get(n);if(!e&&n===Ma&&X_())return lg();if(!e)throw Cn.create("no-app",{appName:n});return e}function _t(n,e,t){let r=Fv[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Yt.warn(o.join(" "));return}xn(new Qt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const jv="firebase-heartbeat-database",zv=1,Ji="firebase-heartbeat-store";let ql=null;function ug(){return ql||(ql=ov(jv,zv,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ji)}catch(t){console.warn(t)}}}}).catch(n=>{throw Cn.create("idb-open",{originalErrorMessage:n.message})})),ql}async function $v(n){try{const t=(await ug()).transaction(Ji),r=await t.objectStore(Ji).get(hg(n));return await t.done,r}catch(e){if(e instanceof qt)Yt.warn(e.message);else{const t=Cn.create("idb-get",{originalErrorMessage:e?.message});Yt.warn(t.message)}}}async function _p(n,e){try{const r=(await ug()).transaction(Ji,"readwrite");await r.objectStore(Ji).put(e,hg(n)),await r.done}catch(t){if(t instanceof qt)Yt.warn(t.message);else{const r=Cn.create("idb-set",{originalErrorMessage:t?.message});Yt.warn(r.message)}}}function hg(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Wv=1024,Kv=30;class Hv{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Yv(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=gp();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>Kv){const s=Jv(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Yt.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=gp(),{heartbeatsToSend:t,unsentEntries:r}=Qv(this._heartbeatsCache.heartbeats),s=Da(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Yt.warn(e),""}}}function gp(){return new Date().toISOString().substring(0,10)}function Qv(n,e=Wv){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),yp(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),yp(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Yv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ig()?xw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await $v(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return _p(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return _p(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function yp(n){return Da(JSON.stringify({version:2,heartbeats:n})).length}function Jv(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function Xv(n){xn(new Qt("platform-logger",e=>new lv(e),"PRIVATE")),xn(new Qt("heartbeat",e=>new Hv(e),"PRIVATE")),_t(cu,pp,n),_t(cu,pp,"esm2020"),_t("fire-js","")}Xv("");function dg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Zv=dg,fg=new To("auth","Firebase",dg());/**
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
 */const Fa=new vc("@firebase/auth");function eA(n,...e){Fa.logLevel<=Z.WARN&&Fa.warn(`Auth (${Vr}): ${n}`,...e)}function _a(n,...e){Fa.logLevel<=Z.ERROR&&Fa.error(`Auth (${Vr}): ${n}`,...e)}/**
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
 */function Jt(n,...e){throw lh(n,...e)}function Vt(n,...e){return lh(n,...e)}function pg(n,e,t){const r={...Zv(),[e]:t};return new To("auth","Firebase",r).create(e,{appName:n.name})}function pr(n){return pg(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function lh(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return fg.create(n,...e)}function W(n,e,...t){if(!n)throw lh(e,...t)}function zt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw _a(e),new Error(e)}function Xt(n,e){n||zt(e)}/**
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
 */function uu(){return typeof self<"u"&&self.location?.href||""}function tA(){return Ip()==="http:"||Ip()==="https:"}function Ip(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function nA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tA()||Nw()||"connection"in navigator)?navigator.onLine:!0}function rA(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class wo{constructor(e,t){this.shortDelay=e,this.longDelay=t,Xt(t>e,"Short delay should be less than long delay!"),this.isMobile=ah()||ng()}get(){return nA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function uh(n,e){Xt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class mg{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const sA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const iA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],oA=new wo(3e4,6e4);function hh(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function $s(n,e,t,r,s={}){return _g(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=zs({key:n.config.apiKey,...o}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const u={method:e,headers:l,...i};return Pw()||(u.referrerPolicy="no-referrer"),n.emulatorConfig&&bt(n.emulatorConfig.host)&&(u.credentials="include"),mg.fetch()(await gg(n,n.config.apiHost,t,a),u)})}async function _g(n,e,t){n._canInitEmulator=!1;const r={...sA,...e};try{const s=new cA(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ia(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ia(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ia(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw ia(n,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw pg(n,d,u);Jt(n,d)}}catch(s){if(s instanceof qt)throw s;Jt(n,"network-request-failed",{message:String(s)})}}async function aA(n,e,t,r,s={}){const i=await $s(n,e,t,r,s);return"mfaPendingCredential"in i&&Jt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function gg(n,e,t,r){const s=`${e}${t}?${r}`,i=n,o=i.config.emulator?uh(n.config,s):`${n.config.apiScheme}://${s}`;return iA.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class cA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Vt(this.auth,"network-request-failed")),oA.get())})}}function ia(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Vt(n,e,r);return s.customData._tokenResponse=t,s}/**
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
 */async function lA(n,e){return $s(n,"POST","/v1/accounts:delete",e)}async function Ua(n,e){return $s(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Mi(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function uA(n,e=!1){const t=ne(n),r=await t.getIdToken(e),s=dh(r);W(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:Mi(Gl(s.auth_time)),issuedAtTime:Mi(Gl(s.iat)),expirationTime:Mi(Gl(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Gl(n){return Number(n)*1e3}function dh(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return _a("JWT malformed, contained fewer than 3 sections"),null;try{const s=xa(t);return s?JSON.parse(s):(_a("Failed to decode base64 JWT payload"),null)}catch(s){return _a("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Ep(n){const e=dh(n);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Xi(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof qt&&hA(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function hA({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class dA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class hu{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mi(this.lastLoginAt),this.creationTime=Mi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ba(n){const e=n.auth,t=await n.getIdToken(),r=await Xi(n,Ua(e,{idToken:t}));W(r?.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=s.providerUserInfo?.length?yg(s.providerUserInfo):[],o=pA(n.providerData,i),a=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!o?.length,u=a?l:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new hu(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(n,d)}async function fA(n){const e=ne(n);await Ba(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function pA(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function yg(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function mA(n,e){const t=await _g(n,{},async()=>{const r=zs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=await gg(n,s,"/v1/token",`key=${i}`),a=await n._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return n.emulatorConfig&&bt(n.emulatorConfig.host)&&(l.credentials="include"),mg.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function _A(n,e){return $s(n,"POST","/v2/accounts:revokeToken",hh(n,e))}/**
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
 */class os{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ep(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){W(e.length!==0,"internal-error");const t=Ep(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await mA(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new os;return r&&(W(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(W(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(W(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new os,this.toJSON())}_performRefresh(){return zt("not implemented")}}/**
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
 */function fn(n,e){W(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Tt{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new dA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new hu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Xi(this,this.stsTokenManager.getToken(this.auth,e));return W(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return uA(this,e)}reload(){return fA(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Tt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ba(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(pt(this.auth.app))return Promise.reject(pr(this.auth));const e=await this.getIdToken();return await Xi(this,lA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,a=t.tenantId??void 0,l=t._redirectEventId??void 0,u=t.createdAt??void 0,d=t.lastLoginAt??void 0,{uid:f,emailVerified:m,isAnonymous:g,providerData:A,stsTokenManager:N}=t;W(f&&N,e,"internal-error");const k=os.fromJSON(this.name,N);W(typeof f=="string",e,"internal-error"),fn(r,e.name),fn(s,e.name),W(typeof m=="boolean",e,"internal-error"),W(typeof g=="boolean",e,"internal-error"),fn(i,e.name),fn(o,e.name),fn(a,e.name),fn(l,e.name),fn(u,e.name),fn(d,e.name);const F=new Tt({uid:f,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:g,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:k,createdAt:u,lastLoginAt:d});return A&&Array.isArray(A)&&(F.providerData=A.map(G=>({...G}))),l&&(F._redirectEventId=l),F}static async _fromIdTokenResponse(e,t,r=!1){const s=new os;s.updateFromServerResponse(t);const i=new Tt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ba(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];W(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?yg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,a=new os;a.updateFromIdToken(r);const l=new Tt({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new hu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,u),l}}/**
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
 */const Tp=new Map;function $t(n){Xt(n instanceof Function,"Expected a class definition");let e=Tp.get(n);return e?(Xt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Tp.set(n,e),e)}/**
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
 */class Ig{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ig.type="NONE";const wp=Ig;/**
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
 */function ga(n,e,t){return`firebase:${n}:${e}:${t}`}class as{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ga(this.userKey,s.apiKey,i),this.fullPersistenceKey=ga("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ua(this.auth,{idToken:e}).catch(()=>{});return t?Tt._fromGetAccountInfoResponse(this.auth,t,e):null}return Tt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new as($t(wp),e,r);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||$t(wp);const o=ga(r,e.config.apiKey,e.name);let a=null;for(const u of t)try{const d=await u._get(o);if(d){let f;if(typeof d=="string"){const m=await Ua(e,{idToken:d}).catch(()=>{});if(!m)break;f=await Tt._fromGetAccountInfoResponse(e,m,d)}else f=Tt._fromJSON(e,d);u!==i&&(a=f),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new as(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new as(i,e,r))}}/**
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
 */function vp(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Eg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Sg(e))return"Blackberry";if(bg(e))return"Webos";if(Tg(e))return"Safari";if((e.includes("chrome/")||wg(e))&&!e.includes("edge/"))return"Chrome";if(Ag(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function Eg(n=Ve()){return/firefox\//i.test(n)}function Tg(n=Ve()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function wg(n=Ve()){return/crios\//i.test(n)}function vg(n=Ve()){return/iemobile/i.test(n)}function Ag(n=Ve()){return/android/i.test(n)}function Sg(n=Ve()){return/blackberry/i.test(n)}function bg(n=Ve()){return/webos/i.test(n)}function fh(n=Ve()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function gA(n=Ve()){return fh(n)&&!!window.navigator?.standalone}function yA(){return kw()&&document.documentMode===10}function Rg(n=Ve()){return fh(n)||Ag(n)||bg(n)||Sg(n)||/windows phone/i.test(n)||vg(n)}/**
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
 */function Cg(n,e=[]){let t;switch(n){case"Browser":t=vp(Ve());break;case"Worker":t=`${vp(Ve())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Vr}/${r}`}/**
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
 */class IA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function EA(n,e={}){return $s(n,"GET","/v2/passwordPolicy",hh(n,e))}/**
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
 */const TA=6;class wA{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??TA,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class vA{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ap(this),this.idTokenSubscription=new Ap(this),this.beforeStateQueue=new IA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=$t(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await as.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ua(this,{idToken:e}),r=await Tt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(pt(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,a=await this.tryRedirectSignIn(e);(!i||i===o)&&a?.user&&(r=a.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ba(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(pt(this.app))return Promise.reject(pr(this));const t=e?ne(e):null;return t&&W(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return pt(this.app)?Promise.reject(pr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return pt(this.app)?Promise.reject(pr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence($t(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await EA(this),t=new wA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new To("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await _A(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&$t(e)||this._popupRedirectResolver;W(t,this,"argument-error"),this.redirectPersistenceManager=await as.create(this,[$t(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Cg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(pt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&eA(`Error while retrieving App Check token: ${e.error}`),e?.token}}function ph(n){return ne(n)}class Ap{constructor(e){this.auth=e,this.observer=null,this.addObserver=Bw(t=>this.observer=t)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let mh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function AA(n){mh=n}function SA(n){return mh.loadJS(n)}function bA(){return mh.gapiScript}function RA(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function CA(n,e){const t=xr(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(gt(i,e??{}))return s;Jt(s,"already-initialized")}return t.initialize({options:e})}function PA(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map($t);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function NA(n,e,t){const r=ph(n);W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Pg(e),{host:o,port:a}=kA(e),l=a===null?"":`:${a}`,u={url:`${i}//${o}${l}/`},d=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){W(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),W(gt(u,r.config.emulator)&&gt(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,bt(o)?(Eo(`${i}//${o}${l}`),Tc("Auth",!0)):DA()}function Pg(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function kA(n){const e=Pg(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Sp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Sp(o)}}}function Sp(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function DA(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Ng{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return zt("not implemented")}_getIdTokenResponse(e){return zt("not implemented")}_linkToIdToken(e,t){return zt("not implemented")}_getReauthenticationResolver(e){return zt("not implemented")}}/**
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
 */async function cs(n,e){return aA(n,"POST","/v1/accounts:signInWithIdp",hh(n,e))}/**
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
 */const xA="http://localhost";class yr extends Ng{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new yr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Jt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const o=new yr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return cs(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,cs(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,cs(e,t)}buildRequest(){const e={requestUri:xA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=zs(t)}return e}}/**
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
 */class kg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class vo extends kg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class gn extends vo{constructor(){super("facebook.com")}static credential(e){return yr._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gn.credential(e.oauthAccessToken)}catch{return null}}}gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";gn.PROVIDER_ID="facebook.com";/**
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
 */class yn extends vo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return yr._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return yn.credential(t,r)}catch{return null}}}yn.GOOGLE_SIGN_IN_METHOD="google.com";yn.PROVIDER_ID="google.com";/**
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
 */class In extends vo{constructor(){super("github.com")}static credential(e){return yr._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return In.credential(e.oauthAccessToken)}catch{return null}}}In.GITHUB_SIGN_IN_METHOD="github.com";In.PROVIDER_ID="github.com";/**
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
 */class En extends vo{constructor(){super("twitter.com")}static credential(e,t){return yr._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return En.credential(t,r)}catch{return null}}}En.TWITTER_SIGN_IN_METHOD="twitter.com";En.PROVIDER_ID="twitter.com";/**
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
 */class _s{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Tt._fromIdTokenResponse(e,r,s),o=bp(r);return new _s({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=bp(r);return new _s({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function bp(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class qa extends qt{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,qa.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new qa(e,t,r,s)}}function Dg(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?qa._fromErrorAndOperation(n,i,e,r):i})}async function VA(n,e,t=!1){const r=await Xi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return _s._forOperation(n,"link",r)}/**
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
 */async function OA(n,e,t=!1){const{auth:r}=n;if(pt(r.app))return Promise.reject(pr(r));const s="reauthenticate";try{const i=await Xi(n,Dg(r,s,e,n),t);W(i.idToken,r,"internal-error");const o=dh(i.idToken);W(o,r,"internal-error");const{sub:a}=o;return W(n.uid===a,r,"user-mismatch"),_s._forOperation(n,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&Jt(r,"user-mismatch"),i}}/**
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
 */async function MA(n,e,t=!1){if(pt(n.app))return Promise.reject(pr(n));const r="signIn",s=await Dg(n,r,e),i=await _s._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function LA(n,e,t,r){return ne(n).onIdTokenChanged(e,t,r)}function FA(n,e,t){return ne(n).beforeAuthStateChanged(e,t)}function DD(n,e,t,r){return ne(n).onAuthStateChanged(e,t,r)}function xD(n){return ne(n).signOut()}const Ga="__sak";/**
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
 */class xg{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ga,"1"),this.storage.removeItem(Ga),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const UA=1e3,BA=10;class Vg extends xg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Rg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);yA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,BA):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},UA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Vg.type="LOCAL";const qA=Vg;/**
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
 */class Og extends xg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Og.type="SESSION";const Mg=Og;/**
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
 */function GA(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Sc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Sc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(t.origin,i)),l=await GA(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Sc.receivers=[];/**
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
 */function _h(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class jA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=_h("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const m=f;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(m.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ot(){return window}function zA(n){Ot().location.href=n}/**
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
 */function Lg(){return typeof Ot().WorkerGlobalScope<"u"&&typeof Ot().importScripts=="function"}async function $A(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function WA(){return navigator?.serviceWorker?.controller||null}function KA(){return Lg()?self:null}/**
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
 */const Fg="firebaseLocalStorageDb",HA=1,ja="firebaseLocalStorage",Ug="fbase_key";class Ao{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function bc(n,e){return n.transaction([ja],e?"readwrite":"readonly").objectStore(ja)}function QA(){const n=indexedDB.deleteDatabase(Fg);return new Ao(n).toPromise()}function du(){const n=indexedDB.open(Fg,HA);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ja,{keyPath:Ug})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ja)?e(r):(r.close(),await QA(),e(await du()))})})}async function Rp(n,e,t){const r=bc(n,!0).put({[Ug]:e,value:t});return new Ao(r).toPromise()}async function YA(n,e){const t=bc(n,!1).get(e),r=await new Ao(t).toPromise();return r===void 0?null:r.value}function Cp(n,e){const t=bc(n,!0).delete(e);return new Ao(t).toPromise()}const JA=800,XA=3;class Bg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await du(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>XA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Lg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Sc._getInstance(KA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await $A(),!this.activeServiceWorker)return;this.sender=new jA(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||WA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await du();return await Rp(e,Ga,"1"),await Cp(e,Ga),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Rp(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>YA(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Cp(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=bc(s,!1).getAll();return new Ao(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),JA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Bg.type="LOCAL";const ZA=Bg;new wo(3e4,6e4);/**
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
 */function eS(n,e){return e?$t(e):(W(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class gh extends Ng{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return cs(e,this._buildIdpRequest())}_linkToIdToken(e,t){return cs(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return cs(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function tS(n){return MA(n.auth,new gh(n),n.bypassAuthState)}function nS(n){const{auth:e,user:t}=n;return W(t,e,"internal-error"),OA(t,new gh(n),n.bypassAuthState)}async function rS(n){const{auth:e,user:t}=n;return W(t,e,"internal-error"),VA(t,new gh(n),n.bypassAuthState)}/**
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
 */class qg{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tS;case"linkViaPopup":case"linkViaRedirect":return rS;case"reauthViaPopup":case"reauthViaRedirect":return nS;default:Jt(this.auth,"internal-error")}}resolve(e){Xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const sS=new wo(2e3,1e4);class rs extends qg{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,rs.currentPopupAction&&rs.currentPopupAction.cancel(),rs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){Xt(this.filter.length===1,"Popup operations only handle one event");const e=_h();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Vt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rs.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Vt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,sS.get())};e()}}rs.currentPopupAction=null;/**
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
 */const iS="pendingRedirect",ya=new Map;class oS extends qg{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=ya.get(this.auth._key());if(!e){try{const r=await aS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}ya.set(this.auth._key(),e)}return this.bypassAuthState||ya.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function aS(n,e){const t=uS(e),r=lS(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function cS(n,e){ya.set(n._key(),e)}function lS(n){return $t(n._redirectPersistence)}function uS(n){return ga(iS,n.config.apiKey,n.name)}async function hS(n,e,t=!1){if(pt(n.app))return Promise.reject(pr(n));const r=ph(n),s=eS(r,e),o=await new oS(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const dS=600*1e3;class fS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pS(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Gg(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(Vt(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=dS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pp(e))}saveEventToCache(e){this.cachedEventUids.add(Pp(e)),this.lastProcessedEventTime=Date.now()}}function Pp(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Gg({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function pS(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Gg(n);default:return!1}}/**
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
 */async function mS(n,e={}){return $s(n,"GET","/v1/projects",e)}/**
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
 */const _S=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gS=/^https?/;async function yS(n){if(n.config.emulator)return;const{authorizedDomains:e}=await mS(n);for(const t of e)try{if(IS(t))return}catch{}Jt(n,"unauthorized-domain")}function IS(n){const e=uu(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!gS.test(t))return!1;if(_S.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const ES=new wo(3e4,6e4);function Np(){const n=Ot().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function TS(n){return new Promise((e,t)=>{function r(){Np(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Np(),t(Vt(n,"network-request-failed"))},timeout:ES.get()})}if(Ot().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Ot().gapi?.load)r();else{const s=RA("iframefcb");return Ot()[s]=()=>{gapi.load?r():t(Vt(n,"network-request-failed"))},SA(`${bA()}?onload=${s}`).catch(i=>t(i))}}).catch(e=>{throw Ia=null,e})}let Ia=null;function wS(n){return Ia=Ia||TS(n),Ia}/**
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
 */const vS=new wo(5e3,15e3),AS="__/auth/iframe",SS="emulator/auth/iframe",bS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},RS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function CS(n){const e=n.config;W(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?uh(e,SS):`https://${n.config.authDomain}/${AS}`,r={apiKey:e.apiKey,appName:n.name,v:Vr},s=RS.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${zs(r).slice(1)}`}async function PS(n){const e=await wS(n),t=Ot().gapi;return W(t,n,"internal-error"),e.open({where:document.body,url:CS(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Vt(n,"network-request-failed"),a=Ot().setTimeout(()=>{i(o)},vS.get());function l(){Ot().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const NS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kS=500,DS=600,xS="_blank",VS="http://localhost";class kp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function OS(n,e,t,r=kS,s=DS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...NS,width:r.toString(),height:s.toString(),top:i,left:o},u=Ve().toLowerCase();t&&(a=wg(u)?xS:t),Eg(u)&&(e=e||VS,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[g,A])=>`${m}${g}=${A},`,"");if(gA(u)&&a!=="_self")return MS(e||"",a),new kp(null);const f=window.open(e||"",a,d);W(f,n,"popup-blocked");try{f.focus()}catch{}return new kp(f)}function MS(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const LS="__/auth/handler",FS="emulator/auth/handler",US=encodeURIComponent("fac");async function Dp(n,e,t,r,s,i){W(n.config.authDomain,n,"auth-domain-config-required"),W(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Vr,eventId:s};if(e instanceof kg){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Va(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof vo){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await n._getAppCheckToken(),u=l?`#${US}=${encodeURIComponent(l)}`:"";return`${BS(n)}?${zs(a).slice(1)}${u}`}function BS({config:n}){return n.emulator?uh(n,FS):`https://${n.authDomain}/${LS}`}/**
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
 */const jl="webStorageSupport";class qS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Mg,this._completeRedirectFn=hS,this._overrideRedirectResult=cS}async _openPopup(e,t,r,s){Xt(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Dp(e,t,r,uu(),s);return OS(e,i,_h())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Dp(e,t,r,uu(),s);return zA(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Xt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await PS(e),r=new fS(e);return t.register("authEvent",s=>(W(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(jl,{type:jl},s=>{const i=s?.[0]?.[jl];i!==void 0&&t(!!i),Jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=yS(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Rg()||Tg()||fh()}}const GS=qS;var xp="@firebase/auth",Vp="1.11.0";/**
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
 */class jS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function zS(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $S(n){xn(new Qt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Cg(n)},u=new vA(r,s,i,l);return PA(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),xn(new Qt("auth-internal",e=>{const t=ph(e.getProvider("auth").getImmediate());return(r=>new jS(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),_t(xp,Vp,zS(n)),_t(xp,Vp,"esm2020")}/**
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
 */const WS=300,KS=Z_("authIdTokenMaxAge")||WS;let Op=null;const HS=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>KS)return;const s=t?.token;Op!==s&&(Op=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function QS(n=Ac()){const e=xr(n,"auth");if(e.isInitialized())return e.getImmediate();const t=CA(n,{popupRedirectResolver:GS,persistence:[ZA,qA,Mg]}),r=Z_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=HS(i.toString());FA(t,o,()=>o(t.currentUser)),LA(t,a=>o(a))}}const s=J_("auth");return s&&NA(t,`http://${s}`),t}function YS(){return document.getElementsByTagName("head")?.[0]??document}AA({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Vt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",YS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$S("Browser");var JS="firebase",XS="12.3.0";/**
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
 */_t(JS,XS,"app");var Mp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Pn,jg;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,y){function E(){}E.prototype=y.prototype,T.F=y.prototype,T.prototype=new E,T.prototype.constructor=T,T.D=function(v,w,C){for(var I=Array(arguments.length-2),tt=2;tt<arguments.length;tt++)I[tt-2]=arguments[tt];return y.prototype[w].apply(v,I)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,y,E){E||(E=0);const v=Array(16);if(typeof y=="string")for(var w=0;w<16;++w)v[w]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(w=0;w<16;++w)v[w]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=T.g[0],E=T.g[1],w=T.g[2];let C=T.g[3],I;I=y+(C^E&(w^C))+v[0]+3614090360&4294967295,y=E+(I<<7&4294967295|I>>>25),I=C+(w^y&(E^w))+v[1]+3905402710&4294967295,C=y+(I<<12&4294967295|I>>>20),I=w+(E^C&(y^E))+v[2]+606105819&4294967295,w=C+(I<<17&4294967295|I>>>15),I=E+(y^w&(C^y))+v[3]+3250441966&4294967295,E=w+(I<<22&4294967295|I>>>10),I=y+(C^E&(w^C))+v[4]+4118548399&4294967295,y=E+(I<<7&4294967295|I>>>25),I=C+(w^y&(E^w))+v[5]+1200080426&4294967295,C=y+(I<<12&4294967295|I>>>20),I=w+(E^C&(y^E))+v[6]+2821735955&4294967295,w=C+(I<<17&4294967295|I>>>15),I=E+(y^w&(C^y))+v[7]+4249261313&4294967295,E=w+(I<<22&4294967295|I>>>10),I=y+(C^E&(w^C))+v[8]+1770035416&4294967295,y=E+(I<<7&4294967295|I>>>25),I=C+(w^y&(E^w))+v[9]+2336552879&4294967295,C=y+(I<<12&4294967295|I>>>20),I=w+(E^C&(y^E))+v[10]+4294925233&4294967295,w=C+(I<<17&4294967295|I>>>15),I=E+(y^w&(C^y))+v[11]+2304563134&4294967295,E=w+(I<<22&4294967295|I>>>10),I=y+(C^E&(w^C))+v[12]+1804603682&4294967295,y=E+(I<<7&4294967295|I>>>25),I=C+(w^y&(E^w))+v[13]+4254626195&4294967295,C=y+(I<<12&4294967295|I>>>20),I=w+(E^C&(y^E))+v[14]+2792965006&4294967295,w=C+(I<<17&4294967295|I>>>15),I=E+(y^w&(C^y))+v[15]+1236535329&4294967295,E=w+(I<<22&4294967295|I>>>10),I=y+(w^C&(E^w))+v[1]+4129170786&4294967295,y=E+(I<<5&4294967295|I>>>27),I=C+(E^w&(y^E))+v[6]+3225465664&4294967295,C=y+(I<<9&4294967295|I>>>23),I=w+(y^E&(C^y))+v[11]+643717713&4294967295,w=C+(I<<14&4294967295|I>>>18),I=E+(C^y&(w^C))+v[0]+3921069994&4294967295,E=w+(I<<20&4294967295|I>>>12),I=y+(w^C&(E^w))+v[5]+3593408605&4294967295,y=E+(I<<5&4294967295|I>>>27),I=C+(E^w&(y^E))+v[10]+38016083&4294967295,C=y+(I<<9&4294967295|I>>>23),I=w+(y^E&(C^y))+v[15]+3634488961&4294967295,w=C+(I<<14&4294967295|I>>>18),I=E+(C^y&(w^C))+v[4]+3889429448&4294967295,E=w+(I<<20&4294967295|I>>>12),I=y+(w^C&(E^w))+v[9]+568446438&4294967295,y=E+(I<<5&4294967295|I>>>27),I=C+(E^w&(y^E))+v[14]+3275163606&4294967295,C=y+(I<<9&4294967295|I>>>23),I=w+(y^E&(C^y))+v[3]+4107603335&4294967295,w=C+(I<<14&4294967295|I>>>18),I=E+(C^y&(w^C))+v[8]+1163531501&4294967295,E=w+(I<<20&4294967295|I>>>12),I=y+(w^C&(E^w))+v[13]+2850285829&4294967295,y=E+(I<<5&4294967295|I>>>27),I=C+(E^w&(y^E))+v[2]+4243563512&4294967295,C=y+(I<<9&4294967295|I>>>23),I=w+(y^E&(C^y))+v[7]+1735328473&4294967295,w=C+(I<<14&4294967295|I>>>18),I=E+(C^y&(w^C))+v[12]+2368359562&4294967295,E=w+(I<<20&4294967295|I>>>12),I=y+(E^w^C)+v[5]+4294588738&4294967295,y=E+(I<<4&4294967295|I>>>28),I=C+(y^E^w)+v[8]+2272392833&4294967295,C=y+(I<<11&4294967295|I>>>21),I=w+(C^y^E)+v[11]+1839030562&4294967295,w=C+(I<<16&4294967295|I>>>16),I=E+(w^C^y)+v[14]+4259657740&4294967295,E=w+(I<<23&4294967295|I>>>9),I=y+(E^w^C)+v[1]+2763975236&4294967295,y=E+(I<<4&4294967295|I>>>28),I=C+(y^E^w)+v[4]+1272893353&4294967295,C=y+(I<<11&4294967295|I>>>21),I=w+(C^y^E)+v[7]+4139469664&4294967295,w=C+(I<<16&4294967295|I>>>16),I=E+(w^C^y)+v[10]+3200236656&4294967295,E=w+(I<<23&4294967295|I>>>9),I=y+(E^w^C)+v[13]+681279174&4294967295,y=E+(I<<4&4294967295|I>>>28),I=C+(y^E^w)+v[0]+3936430074&4294967295,C=y+(I<<11&4294967295|I>>>21),I=w+(C^y^E)+v[3]+3572445317&4294967295,w=C+(I<<16&4294967295|I>>>16),I=E+(w^C^y)+v[6]+76029189&4294967295,E=w+(I<<23&4294967295|I>>>9),I=y+(E^w^C)+v[9]+3654602809&4294967295,y=E+(I<<4&4294967295|I>>>28),I=C+(y^E^w)+v[12]+3873151461&4294967295,C=y+(I<<11&4294967295|I>>>21),I=w+(C^y^E)+v[15]+530742520&4294967295,w=C+(I<<16&4294967295|I>>>16),I=E+(w^C^y)+v[2]+3299628645&4294967295,E=w+(I<<23&4294967295|I>>>9),I=y+(w^(E|~C))+v[0]+4096336452&4294967295,y=E+(I<<6&4294967295|I>>>26),I=C+(E^(y|~w))+v[7]+1126891415&4294967295,C=y+(I<<10&4294967295|I>>>22),I=w+(y^(C|~E))+v[14]+2878612391&4294967295,w=C+(I<<15&4294967295|I>>>17),I=E+(C^(w|~y))+v[5]+4237533241&4294967295,E=w+(I<<21&4294967295|I>>>11),I=y+(w^(E|~C))+v[12]+1700485571&4294967295,y=E+(I<<6&4294967295|I>>>26),I=C+(E^(y|~w))+v[3]+2399980690&4294967295,C=y+(I<<10&4294967295|I>>>22),I=w+(y^(C|~E))+v[10]+4293915773&4294967295,w=C+(I<<15&4294967295|I>>>17),I=E+(C^(w|~y))+v[1]+2240044497&4294967295,E=w+(I<<21&4294967295|I>>>11),I=y+(w^(E|~C))+v[8]+1873313359&4294967295,y=E+(I<<6&4294967295|I>>>26),I=C+(E^(y|~w))+v[15]+4264355552&4294967295,C=y+(I<<10&4294967295|I>>>22),I=w+(y^(C|~E))+v[6]+2734768916&4294967295,w=C+(I<<15&4294967295|I>>>17),I=E+(C^(w|~y))+v[13]+1309151649&4294967295,E=w+(I<<21&4294967295|I>>>11),I=y+(w^(E|~C))+v[4]+4149444226&4294967295,y=E+(I<<6&4294967295|I>>>26),I=C+(E^(y|~w))+v[11]+3174756917&4294967295,C=y+(I<<10&4294967295|I>>>22),I=w+(y^(C|~E))+v[2]+718787259&4294967295,w=C+(I<<15&4294967295|I>>>17),I=E+(C^(w|~y))+v[9]+3951481745&4294967295,T.g[0]=T.g[0]+y&4294967295,T.g[1]=T.g[1]+(w+(I<<21&4294967295|I>>>11))&4294967295,T.g[2]=T.g[2]+w&4294967295,T.g[3]=T.g[3]+C&4294967295}r.prototype.v=function(T,y){y===void 0&&(y=T.length);const E=y-this.blockSize,v=this.C;let w=this.h,C=0;for(;C<y;){if(w==0)for(;C<=E;)s(this,T,C),C+=this.blockSize;if(typeof T=="string"){for(;C<y;)if(v[w++]=T.charCodeAt(C++),w==this.blockSize){s(this,v),w=0;break}}else for(;C<y;)if(v[w++]=T[C++],w==this.blockSize){s(this,v),w=0;break}}this.h=w,this.o+=y},r.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var y=1;y<T.length-8;++y)T[y]=0;y=this.o*8;for(var E=T.length-8;E<T.length;++E)T[E]=y&255,y/=256;for(this.v(T),T=Array(16),y=0,E=0;E<4;++E)for(let v=0;v<32;v+=8)T[y++]=this.g[E]>>>v&255;return T};function i(T,y){var E=a;return Object.prototype.hasOwnProperty.call(E,T)?E[T]:E[T]=y(T)}function o(T,y){this.h=y;const E=[];let v=!0;for(let w=T.length-1;w>=0;w--){const C=T[w]|0;v&&C==y||(E[w]=C,v=!1)}this.g=E}var a={};function l(T){return-128<=T&&T<128?i(T,function(y){return new o([y|0],y<0?-1:0)}):new o([T|0],T<0?-1:0)}function u(T){if(isNaN(T)||!isFinite(T))return f;if(T<0)return k(u(-T));const y=[];let E=1;for(let v=0;T>=E;v++)y[v]=T/E|0,E*=4294967296;return new o(y,0)}function d(T,y){if(T.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(T.charAt(0)=="-")return k(d(T.substring(1),y));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=u(Math.pow(y,8));let v=f;for(let C=0;C<T.length;C+=8){var w=Math.min(8,T.length-C);const I=parseInt(T.substring(C,C+w),y);w<8?(w=u(Math.pow(y,w)),v=v.j(w).add(u(I))):(v=v.j(E),v=v.add(u(I)))}return v}var f=l(0),m=l(1),g=l(16777216);n=o.prototype,n.m=function(){if(N(this))return-k(this).m();let T=0,y=1;for(let E=0;E<this.g.length;E++){const v=this.i(E);T+=(v>=0?v:4294967296+v)*y,y*=4294967296}return T},n.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(A(this))return"0";if(N(this))return"-"+k(this).toString(T);const y=u(Math.pow(T,6));var E=this;let v="";for(;;){const w=ie(E,y).g;E=F(E,w.j(y));let C=((E.g.length>0?E.g[0]:E.h)>>>0).toString(T);if(E=w,A(E))return C+v;for(;C.length<6;)C="0"+C;v=C+v}},n.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function A(T){if(T.h!=0)return!1;for(let y=0;y<T.g.length;y++)if(T.g[y]!=0)return!1;return!0}function N(T){return T.h==-1}n.l=function(T){return T=F(this,T),N(T)?-1:A(T)?0:1};function k(T){const y=T.g.length,E=[];for(let v=0;v<y;v++)E[v]=~T.g[v];return new o(E,~T.h).add(m)}n.abs=function(){return N(this)?k(this):this},n.add=function(T){const y=Math.max(this.g.length,T.g.length),E=[];let v=0;for(let w=0;w<=y;w++){let C=v+(this.i(w)&65535)+(T.i(w)&65535),I=(C>>>16)+(this.i(w)>>>16)+(T.i(w)>>>16);v=I>>>16,C&=65535,I&=65535,E[w]=I<<16|C}return new o(E,E[E.length-1]&-2147483648?-1:0)};function F(T,y){return T.add(k(y))}n.j=function(T){if(A(this)||A(T))return f;if(N(this))return N(T)?k(this).j(k(T)):k(k(this).j(T));if(N(T))return k(this.j(k(T)));if(this.l(g)<0&&T.l(g)<0)return u(this.m()*T.m());const y=this.g.length+T.g.length,E=[];for(var v=0;v<2*y;v++)E[v]=0;for(v=0;v<this.g.length;v++)for(let w=0;w<T.g.length;w++){const C=this.i(v)>>>16,I=this.i(v)&65535,tt=T.i(w)>>>16,Jn=T.i(w)&65535;E[2*v+2*w]+=I*Jn,G(E,2*v+2*w),E[2*v+2*w+1]+=C*Jn,G(E,2*v+2*w+1),E[2*v+2*w+1]+=I*tt,G(E,2*v+2*w+1),E[2*v+2*w+2]+=C*tt,G(E,2*v+2*w+2)}for(T=0;T<y;T++)E[T]=E[2*T+1]<<16|E[2*T];for(T=y;T<2*y;T++)E[T]=0;return new o(E,0)};function G(T,y){for(;(T[y]&65535)!=T[y];)T[y+1]+=T[y]>>>16,T[y]&=65535,y++}function B(T,y){this.g=T,this.h=y}function ie(T,y){if(A(y))throw Error("division by zero");if(A(T))return new B(f,f);if(N(T))return y=ie(k(T),y),new B(k(y.g),k(y.h));if(N(y))return y=ie(T,k(y)),new B(k(y.g),y.h);if(T.g.length>30){if(N(T)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var E=m,v=y;v.l(T)<=0;)E=oe(E),v=oe(v);var w=re(E,1),C=re(v,1);for(v=re(v,2),E=re(E,2);!A(v);){var I=C.add(v);I.l(T)<=0&&(w=w.add(E),C=I),v=re(v,1),E=re(E,1)}return y=F(T,w.j(y)),new B(w,y)}for(w=f;T.l(y)>=0;){for(E=Math.max(1,Math.floor(T.m()/y.m())),v=Math.ceil(Math.log(E)/Math.LN2),v=v<=48?1:Math.pow(2,v-48),C=u(E),I=C.j(y);N(I)||I.l(T)>0;)E-=v,C=u(E),I=C.j(y);A(C)&&(C=m),w=w.add(C),T=F(T,I)}return new B(w,T)}n.B=function(T){return ie(this,T).h},n.and=function(T){const y=Math.max(this.g.length,T.g.length),E=[];for(let v=0;v<y;v++)E[v]=this.i(v)&T.i(v);return new o(E,this.h&T.h)},n.or=function(T){const y=Math.max(this.g.length,T.g.length),E=[];for(let v=0;v<y;v++)E[v]=this.i(v)|T.i(v);return new o(E,this.h|T.h)},n.xor=function(T){const y=Math.max(this.g.length,T.g.length),E=[];for(let v=0;v<y;v++)E[v]=this.i(v)^T.i(v);return new o(E,this.h^T.h)};function oe(T){const y=T.g.length+1,E=[];for(let v=0;v<y;v++)E[v]=T.i(v)<<1|T.i(v-1)>>>31;return new o(E,T.h)}function re(T,y){const E=y>>5;y%=32;const v=T.g.length-E,w=[];for(let C=0;C<v;C++)w[C]=y>0?T.i(C+E)>>>y|T.i(C+E+1)<<32-y:T.i(C+E);return new o(w,T.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,jg=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,Pn=o}).apply(typeof Mp<"u"?Mp:typeof self<"u"?self:typeof window<"u"?window:{});var oa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zg,ki,$g,Ea,fu,Wg,Kg,Hg;(function(){var n,e=Object.defineProperty;function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof oa=="object"&&oa];for(var h=0;h<c.length;++h){var p=c[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=t(this);function s(c,h){if(h)e:{var p=r;c=c.split(".");for(var _=0;_<c.length-1;_++){var b=c[_];if(!(b in p))break e;p=p[b]}c=c[c.length-1],_=p[c],h=h(_),h!=_&&h!=null&&e(p,c,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(c){return c||function(h){var p=[],_;for(_ in h)Object.prototype.hasOwnProperty.call(h,_)&&p.push([_,h[_]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function a(c){var h=typeof c;return h=="object"&&c!=null||h=="function"}function l(c,h,p){return c.call.apply(c.bind,arguments)}function u(c,h,p){return u=l,u.apply(null,arguments)}function d(c,h){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),c.apply(this,_)}}function f(c,h){function p(){}p.prototype=h.prototype,c.Z=h.prototype,c.prototype=new p,c.prototype.constructor=c,c.Ob=function(_,b,P){for(var L=Array(arguments.length-2),H=2;H<arguments.length;H++)L[H-2]=arguments[H];return h.prototype[b].apply(_,L)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function g(c){const h=c.length;if(h>0){const p=Array(h);for(let _=0;_<h;_++)p[_]=c[_];return p}return[]}function A(c,h){for(let _=1;_<arguments.length;_++){const b=arguments[_];var p=typeof b;if(p=p!="object"?p:b?Array.isArray(b)?"array":p:"null",p=="array"||p=="object"&&typeof b.length=="number"){p=c.length||0;const P=b.length||0;c.length=p+P;for(let L=0;L<P;L++)c[p+L]=b[L]}else c.push(b)}}class N{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function k(c){o.setTimeout(()=>{throw c},0)}function F(){var c=T;let h=null;return c.g&&(h=c.g,c.g=c.g.next,c.g||(c.h=null),h.next=null),h}class G{constructor(){this.h=this.g=null}add(h,p){const _=B.get();_.set(h,p),this.h?this.h.next=_:this.g=_,this.h=_}}var B=new N(()=>new ie,c=>c.reset());class ie{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let oe,re=!1,T=new G,y=()=>{const c=Promise.resolve(void 0);oe=()=>{c.then(E)}};function E(){for(var c;c=F();){try{c.h.call(c.g)}catch(p){k(p)}var h=B;h.j(c),h.h<100&&(h.h++,c.next=h.g,h.g=c)}re=!1}function v(){this.u=this.u,this.C=this.C}v.prototype.u=!1,v.prototype.dispose=function(){this.u||(this.u=!0,this.N())},v.prototype[Symbol.dispose]=function(){this.dispose()},v.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function w(c,h){this.type=c,this.g=this.target=h,this.defaultPrevented=!1}w.prototype.h=function(){this.defaultPrevented=!0};var C=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var c=!1,h=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const p=()=>{};o.addEventListener("test",p,h),o.removeEventListener("test",p,h)}catch{}return c})();function I(c){return/^[\s\xa0]*$/.test(c)}function tt(c,h){w.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,h)}f(tt,w),tt.prototype.init=function(c,h){const p=this.type=c.type,_=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=h,h=c.relatedTarget,h||(p=="mouseover"?h=c.fromElement:p=="mouseout"&&(h=c.toElement)),this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&tt.Z.h.call(this)},tt.prototype.h=function(){tt.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Jn="closure_listenable_"+(Math.random()*1e6|0),qT=0;function GT(c,h,p,_,b){this.listener=c,this.proxy=null,this.src=h,this.type=p,this.capture=!!_,this.ha=b,this.key=++qT,this.da=this.fa=!1}function zo(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function $o(c,h,p){for(const _ in c)h.call(p,c[_],_,c)}function jT(c,h){for(const p in c)h.call(void 0,c[p],p,c)}function af(c){const h={};for(const p in c)h[p]=c[p];return h}const cf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function lf(c,h){let p,_;for(let b=1;b<arguments.length;b++){_=arguments[b];for(p in _)c[p]=_[p];for(let P=0;P<cf.length;P++)p=cf[P],Object.prototype.hasOwnProperty.call(_,p)&&(c[p]=_[p])}}function Wo(c){this.src=c,this.g={},this.h=0}Wo.prototype.add=function(c,h,p,_,b){const P=c.toString();c=this.g[P],c||(c=this.g[P]=[],this.h++);const L=pl(c,h,_,b);return L>-1?(h=c[L],p||(h.fa=!1)):(h=new GT(h,this.src,P,!!_,b),h.fa=p,c.push(h)),h};function fl(c,h){const p=h.type;if(p in c.g){var _=c.g[p],b=Array.prototype.indexOf.call(_,h,void 0),P;(P=b>=0)&&Array.prototype.splice.call(_,b,1),P&&(zo(h),c.g[p].length==0&&(delete c.g[p],c.h--))}}function pl(c,h,p,_){for(let b=0;b<c.length;++b){const P=c[b];if(!P.da&&P.listener==h&&P.capture==!!p&&P.ha==_)return b}return-1}var ml="closure_lm_"+(Math.random()*1e6|0),_l={};function uf(c,h,p,_,b){if(Array.isArray(h)){for(let P=0;P<h.length;P++)uf(c,h[P],p,_,b);return null}return p=ff(p),c&&c[Jn]?c.J(h,p,a(_)?!!_.capture:!1,b):zT(c,h,p,!1,_,b)}function zT(c,h,p,_,b,P){if(!h)throw Error("Invalid event type");const L=a(b)?!!b.capture:!!b;let H=yl(c);if(H||(c[ml]=H=new Wo(c)),p=H.add(h,p,_,L,P),p.proxy)return p;if(_=$T(),p.proxy=_,_.src=c,_.listener=p,c.addEventListener)C||(b=L),b===void 0&&(b=!1),c.addEventListener(h.toString(),_,b);else if(c.attachEvent)c.attachEvent(df(h.toString()),_);else if(c.addListener&&c.removeListener)c.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function $T(){function c(p){return h.call(c.src,c.listener,p)}const h=WT;return c}function hf(c,h,p,_,b){if(Array.isArray(h))for(var P=0;P<h.length;P++)hf(c,h[P],p,_,b);else _=a(_)?!!_.capture:!!_,p=ff(p),c&&c[Jn]?(c=c.i,P=String(h).toString(),P in c.g&&(h=c.g[P],p=pl(h,p,_,b),p>-1&&(zo(h[p]),Array.prototype.splice.call(h,p,1),h.length==0&&(delete c.g[P],c.h--)))):c&&(c=yl(c))&&(h=c.g[h.toString()],c=-1,h&&(c=pl(h,p,_,b)),(p=c>-1?h[c]:null)&&gl(p))}function gl(c){if(typeof c!="number"&&c&&!c.da){var h=c.src;if(h&&h[Jn])fl(h.i,c);else{var p=c.type,_=c.proxy;h.removeEventListener?h.removeEventListener(p,_,c.capture):h.detachEvent?h.detachEvent(df(p),_):h.addListener&&h.removeListener&&h.removeListener(_),(p=yl(h))?(fl(p,c),p.h==0&&(p.src=null,h[ml]=null)):zo(c)}}}function df(c){return c in _l?_l[c]:_l[c]="on"+c}function WT(c,h){if(c.da)c=!0;else{h=new tt(h,this);const p=c.listener,_=c.ha||c.src;c.fa&&gl(c),c=p.call(_,h)}return c}function yl(c){return c=c[ml],c instanceof Wo?c:null}var Il="__closure_events_fn_"+(Math.random()*1e9>>>0);function ff(c){return typeof c=="function"?c:(c[Il]||(c[Il]=function(h){return c.handleEvent(h)}),c[Il])}function Ke(){v.call(this),this.i=new Wo(this),this.M=this,this.G=null}f(Ke,v),Ke.prototype[Jn]=!0,Ke.prototype.removeEventListener=function(c,h,p,_){hf(this,c,h,p,_)};function Xe(c,h){var p,_=c.G;if(_)for(p=[];_;_=_.G)p.push(_);if(c=c.M,_=h.type||h,typeof h=="string")h=new w(h,c);else if(h instanceof w)h.target=h.target||c;else{var b=h;h=new w(_,c),lf(h,b)}b=!0;let P,L;if(p)for(L=p.length-1;L>=0;L--)P=h.g=p[L],b=Ko(P,_,!0,h)&&b;if(P=h.g=c,b=Ko(P,_,!0,h)&&b,b=Ko(P,_,!1,h)&&b,p)for(L=0;L<p.length;L++)P=h.g=p[L],b=Ko(P,_,!1,h)&&b}Ke.prototype.N=function(){if(Ke.Z.N.call(this),this.i){var c=this.i;for(const h in c.g){const p=c.g[h];for(let _=0;_<p.length;_++)zo(p[_]);delete c.g[h],c.h--}}this.G=null},Ke.prototype.J=function(c,h,p,_){return this.i.add(String(c),h,!1,p,_)},Ke.prototype.K=function(c,h,p,_){return this.i.add(String(c),h,!0,p,_)};function Ko(c,h,p,_){if(h=c.i.g[String(h)],!h)return!0;h=h.concat();let b=!0;for(let P=0;P<h.length;++P){const L=h[P];if(L&&!L.da&&L.capture==p){const H=L.listener,xe=L.ha||L.src;L.fa&&fl(c.i,L),b=H.call(xe,_)!==!1&&b}}return b&&!_.defaultPrevented}function KT(c,h){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=u(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(c,h||0)}function pf(c){c.g=KT(()=>{c.g=null,c.i&&(c.i=!1,pf(c))},c.l);const h=c.h;c.h=null,c.m.apply(null,h)}class HT extends v{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:pf(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function oi(c){v.call(this),this.h=c,this.g={}}f(oi,v);var mf=[];function _f(c){$o(c.g,function(h,p){this.g.hasOwnProperty(p)&&gl(h)},c),c.g={}}oi.prototype.N=function(){oi.Z.N.call(this),_f(this)},oi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var El=o.JSON.stringify,QT=o.JSON.parse,YT=class{stringify(c){return o.JSON.stringify(c,void 0)}parse(c){return o.JSON.parse(c,void 0)}};function gf(){}function yf(){}var ai={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Tl(){w.call(this,"d")}f(Tl,w);function wl(){w.call(this,"c")}f(wl,w);var Xn={},If=null;function Ho(){return If=If||new Ke}Xn.Ia="serverreachability";function Ef(c){w.call(this,Xn.Ia,c)}f(Ef,w);function ci(c){const h=Ho();Xe(h,new Ef(h))}Xn.STAT_EVENT="statevent";function Tf(c,h){w.call(this,Xn.STAT_EVENT,c),this.stat=h}f(Tf,w);function Ze(c){const h=Ho();Xe(h,new Tf(h,c))}Xn.Ja="timingevent";function wf(c,h){w.call(this,Xn.Ja,c),this.size=h}f(wf,w);function li(c,h){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){c()},h)}function ui(){this.g=!0}ui.prototype.ua=function(){this.g=!1};function JT(c,h,p,_,b,P){c.info(function(){if(c.g)if(P){var L="",H=P.split("&");for(let fe=0;fe<H.length;fe++){var xe=H[fe].split("=");if(xe.length>1){const Me=xe[0];xe=xe[1];const Ct=Me.split("_");L=Ct.length>=2&&Ct[1]=="type"?L+(Me+"="+xe+"&"):L+(Me+"=redacted&")}}}else L=null;else L=P;return"XMLHTTP REQ ("+_+") [attempt "+b+"]: "+h+`
`+p+`
`+L})}function XT(c,h,p,_,b,P,L){c.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+b+"]: "+h+`
`+p+`
`+P+" "+L})}function jr(c,h,p,_){c.info(function(){return"XMLHTTP TEXT ("+h+"): "+ew(c,p)+(_?" "+_:"")})}function ZT(c,h){c.info(function(){return"TIMEOUT: "+h})}ui.prototype.info=function(){};function ew(c,h){if(!c.g)return h;if(!h)return null;try{const P=JSON.parse(h);if(P){for(c=0;c<P.length;c++)if(Array.isArray(P[c])){var p=P[c];if(!(p.length<2)){var _=p[1];if(Array.isArray(_)&&!(_.length<1)){var b=_[0];if(b!="noop"&&b!="stop"&&b!="close")for(let L=1;L<_.length;L++)_[L]=""}}}}return El(P)}catch{return h}}var Qo={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},vf={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Af;function vl(){}f(vl,gf),vl.prototype.g=function(){return new XMLHttpRequest},Af=new vl;function hi(c){return encodeURIComponent(String(c))}function tw(c){var h=1;c=c.split(":");const p=[];for(;h>0&&c.length;)p.push(c.shift()),h--;return c.length&&p.push(c.join(":")),p}function an(c,h,p,_){this.j=c,this.i=h,this.l=p,this.S=_||1,this.V=new oi(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Sf}function Sf(){this.i=null,this.g="",this.h=!1}var bf={},Al={};function Sl(c,h,p){c.M=1,c.A=Jo(Rt(h)),c.u=p,c.R=!0,Rf(c,null)}function Rf(c,h){c.F=Date.now(),Yo(c),c.B=Rt(c.A);var p=c.B,_=c.S;Array.isArray(_)||(_=[String(_)]),Bf(p.i,"t",_),c.C=0,p=c.j.L,c.h=new Sf,c.g=sp(c.j,p?h:null,!c.u),c.P>0&&(c.O=new HT(u(c.Y,c,c.g),c.P)),h=c.V,p=c.g,_=c.ba;var b="readystatechange";Array.isArray(b)||(b&&(mf[0]=b.toString()),b=mf);for(let P=0;P<b.length;P++){const L=uf(p,b[P],_||h.handleEvent,!1,h.h||h);if(!L)break;h.g[L.key]=L}h=c.J?af(c.J):{},c.u?(c.v||(c.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,h)):(c.v="GET",c.g.ea(c.B,c.v,null,h)),ci(),JT(c.i,c.v,c.B,c.l,c.S,c.u)}an.prototype.ba=function(c){c=c.target;const h=this.O;h&&un(c)==3?h.j():this.Y(c)},an.prototype.Y=function(c){try{if(c==this.g)e:{const H=un(this.g),xe=this.g.ya(),fe=this.g.ca();if(!(H<3)&&(H!=3||this.g&&(this.h.h||this.g.la()||Kf(this.g)))){this.K||H!=4||xe==7||(xe==8||fe<=0?ci(3):ci(2)),bl(this);var h=this.g.ca();this.X=h;var p=nw(this);if(this.o=h==200,XT(this.i,this.v,this.B,this.l,this.S,H,h),this.o){if(this.U&&!this.L){t:{if(this.g){var _,b=this.g;if((_=b.g?b.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(_)){var P=_;break t}}P=null}if(c=P)jr(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Rl(this,c);else{this.o=!1,this.m=3,Ze(12),Zn(this),di(this);break e}}if(this.R){c=!0;let Me;for(;!this.K&&this.C<p.length;)if(Me=rw(this,p),Me==Al){H==4&&(this.m=4,Ze(14),c=!1),jr(this.i,this.l,null,"[Incomplete Response]");break}else if(Me==bf){this.m=4,Ze(15),jr(this.i,this.l,p,"[Invalid Chunk]"),c=!1;break}else jr(this.i,this.l,Me,null),Rl(this,Me);if(Cf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),H!=4||p.length!=0||this.h.h||(this.m=1,Ze(16),c=!1),this.o=this.o&&c,!c)jr(this.i,this.l,p,"[Invalid Chunked Response]"),Zn(this),di(this);else if(p.length>0&&!this.W){this.W=!0;var L=this.j;L.g==this&&L.aa&&!L.P&&(L.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),Ol(L),L.P=!0,Ze(11))}}else jr(this.i,this.l,p,null),Rl(this,p);H==4&&Zn(this),this.o&&!this.K&&(H==4?ep(this.j,this):(this.o=!1,Yo(this)))}else gw(this.g),h==400&&p.indexOf("Unknown SID")>0?(this.m=3,Ze(12)):(this.m=0,Ze(13)),Zn(this),di(this)}}}catch{}finally{}};function nw(c){if(!Cf(c))return c.g.la();const h=Kf(c.g);if(h==="")return"";let p="";const _=h.length,b=un(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return Zn(c),di(c),"";c.h.i=new o.TextDecoder}for(let P=0;P<_;P++)c.h.h=!0,p+=c.h.i.decode(h[P],{stream:!(b&&P==_-1)});return h.length=0,c.h.g+=p,c.C=0,c.h.g}function Cf(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function rw(c,h){var p=c.C,_=h.indexOf(`
`,p);return _==-1?Al:(p=Number(h.substring(p,_)),isNaN(p)?bf:(_+=1,_+p>h.length?Al:(h=h.slice(_,_+p),c.C=_+p,h)))}an.prototype.cancel=function(){this.K=!0,Zn(this)};function Yo(c){c.T=Date.now()+c.H,Pf(c,c.H)}function Pf(c,h){if(c.D!=null)throw Error("WatchDog timer not null");c.D=li(u(c.aa,c),h)}function bl(c){c.D&&(o.clearTimeout(c.D),c.D=null)}an.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(ZT(this.i,this.B),this.M!=2&&(ci(),Ze(17)),Zn(this),this.m=2,di(this)):Pf(this,this.T-c)};function di(c){c.j.I==0||c.K||ep(c.j,c)}function Zn(c){bl(c);var h=c.O;h&&typeof h.dispose=="function"&&h.dispose(),c.O=null,_f(c.V),c.g&&(h=c.g,c.g=null,h.abort(),h.dispose())}function Rl(c,h){try{var p=c.j;if(p.I!=0&&(p.g==c||Cl(p.h,c))){if(!c.L&&Cl(p.h,c)&&p.I==3){try{var _=p.Ba.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var b=_;if(b[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<c.F)na(p),ea(p);else break e;Vl(p),Ze(18)}}else p.xa=b[1],0<p.xa-p.K&&b[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=li(u(p.Va,p),6e3));Df(p.h)<=1&&p.ta&&(p.ta=void 0)}else tr(p,11)}else if((c.L||p.g==c)&&na(p),!I(h))for(b=p.Ba.g.parse(h),h=0;h<b.length;h++){let fe=b[h];const Me=fe[0];if(!(Me<=p.K))if(p.K=Me,fe=fe[1],p.I==2)if(fe[0]=="c"){p.M=fe[1],p.ba=fe[2];const Ct=fe[3];Ct!=null&&(p.ka=Ct,p.j.info("VER="+p.ka));const nr=fe[4];nr!=null&&(p.za=nr,p.j.info("SVER="+p.za));const hn=fe[5];hn!=null&&typeof hn=="number"&&hn>0&&(_=1.5*hn,p.O=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const dn=c.g;if(dn){const sa=dn.g?dn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(sa){var P=_.h;P.g||sa.indexOf("spdy")==-1&&sa.indexOf("quic")==-1&&sa.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Pl(P,P.h),P.h=null))}if(_.G){const Ml=dn.g?dn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ml&&(_.wa=Ml,ge(_.J,_.G,Ml))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-c.F,p.j.info("Handshake RTT: "+p.T+"ms")),_=p;var L=c;if(_.na=rp(_,_.L?_.ba:null,_.W),L.L){xf(_.h,L);var H=L,xe=_.O;xe&&(H.H=xe),H.D&&(bl(H),Yo(H)),_.g=L}else Xf(_);p.i.length>0&&ta(p)}else fe[0]!="stop"&&fe[0]!="close"||tr(p,7);else p.I==3&&(fe[0]=="stop"||fe[0]=="close"?fe[0]=="stop"?tr(p,7):xl(p):fe[0]!="noop"&&p.l&&p.l.qa(fe),p.A=0)}}ci(4)}catch{}}var sw=class{constructor(c,h){this.g=c,this.map=h}};function Nf(c){this.l=c||10,o.PerformanceNavigationTiming?(c=o.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function kf(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Df(c){return c.h?1:c.g?c.g.size:0}function Cl(c,h){return c.h?c.h==h:c.g?c.g.has(h):!1}function Pl(c,h){c.g?c.g.add(h):c.h=h}function xf(c,h){c.h&&c.h==h?c.h=null:c.g&&c.g.has(h)&&c.g.delete(h)}Nf.prototype.cancel=function(){if(this.i=Vf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Vf(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let h=c.i;for(const p of c.g.values())h=h.concat(p.G);return h}return g(c.i)}var Of=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function iw(c,h){if(c){c=c.split("&");for(let p=0;p<c.length;p++){const _=c[p].indexOf("=");let b,P=null;_>=0?(b=c[p].substring(0,_),P=c[p].substring(_+1)):b=c[p],h(b,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function cn(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;c instanceof cn?(this.l=c.l,fi(this,c.j),this.o=c.o,this.g=c.g,pi(this,c.u),this.h=c.h,Nl(this,qf(c.i)),this.m=c.m):c&&(h=String(c).match(Of))?(this.l=!1,fi(this,h[1]||"",!0),this.o=mi(h[2]||""),this.g=mi(h[3]||"",!0),pi(this,h[4]),this.h=mi(h[5]||"",!0),Nl(this,h[6]||"",!0),this.m=mi(h[7]||"")):(this.l=!1,this.i=new gi(null,this.l))}cn.prototype.toString=function(){const c=[];var h=this.j;h&&c.push(_i(h,Mf,!0),":");var p=this.g;return(p||h=="file")&&(c.push("//"),(h=this.o)&&c.push(_i(h,Mf,!0),"@"),c.push(hi(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&c.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&c.push("/"),c.push(_i(p,p.charAt(0)=="/"?cw:aw,!0))),(p=this.i.toString())&&c.push("?",p),(p=this.m)&&c.push("#",_i(p,uw)),c.join("")},cn.prototype.resolve=function(c){const h=Rt(this);let p=!!c.j;p?fi(h,c.j):p=!!c.o,p?h.o=c.o:p=!!c.g,p?h.g=c.g:p=c.u!=null;var _=c.h;if(p)pi(h,c.u);else if(p=!!c.h){if(_.charAt(0)!="/")if(this.g&&!this.h)_="/"+_;else{var b=h.h.lastIndexOf("/");b!=-1&&(_=h.h.slice(0,b+1)+_)}if(b=_,b==".."||b==".")_="";else if(b.indexOf("./")!=-1||b.indexOf("/.")!=-1){_=b.lastIndexOf("/",0)==0,b=b.split("/");const P=[];for(let L=0;L<b.length;){const H=b[L++];H=="."?_&&L==b.length&&P.push(""):H==".."?((P.length>1||P.length==1&&P[0]!="")&&P.pop(),_&&L==b.length&&P.push("")):(P.push(H),_=!0)}_=P.join("/")}else _=b}return p?h.h=_:p=c.i.toString()!=="",p?Nl(h,qf(c.i)):p=!!c.m,p&&(h.m=c.m),h};function Rt(c){return new cn(c)}function fi(c,h,p){c.j=p?mi(h,!0):h,c.j&&(c.j=c.j.replace(/:$/,""))}function pi(c,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);c.u=h}else c.u=null}function Nl(c,h,p){h instanceof gi?(c.i=h,hw(c.i,c.l)):(p||(h=_i(h,lw)),c.i=new gi(h,c.l))}function ge(c,h,p){c.i.set(h,p)}function Jo(c){return ge(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function mi(c,h){return c?h?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function _i(c,h,p){return typeof c=="string"?(c=encodeURI(c).replace(h,ow),p&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function ow(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Mf=/[#\/\?@]/g,aw=/[#\?:]/g,cw=/[#\?]/g,lw=/[#\?@]/g,uw=/#/g;function gi(c,h){this.h=this.g=null,this.i=c||null,this.j=!!h}function er(c){c.g||(c.g=new Map,c.h=0,c.i&&iw(c.i,function(h,p){c.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}n=gi.prototype,n.add=function(c,h){er(this),this.i=null,c=zr(this,c);let p=this.g.get(c);return p||this.g.set(c,p=[]),p.push(h),this.h+=1,this};function Lf(c,h){er(c),h=zr(c,h),c.g.has(h)&&(c.i=null,c.h-=c.g.get(h).length,c.g.delete(h))}function Ff(c,h){return er(c),h=zr(c,h),c.g.has(h)}n.forEach=function(c,h){er(this),this.g.forEach(function(p,_){p.forEach(function(b){c.call(h,b,_,this)},this)},this)};function Uf(c,h){er(c);let p=[];if(typeof h=="string")Ff(c,h)&&(p=p.concat(c.g.get(zr(c,h))));else for(c=Array.from(c.g.values()),h=0;h<c.length;h++)p=p.concat(c[h]);return p}n.set=function(c,h){return er(this),this.i=null,c=zr(this,c),Ff(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[h]),this.h+=1,this},n.get=function(c,h){return c?(c=Uf(this,c),c.length>0?String(c[0]):h):h};function Bf(c,h,p){Lf(c,h),p.length>0&&(c.i=null,c.g.set(zr(c,h),g(p)),c.h+=p.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],h=Array.from(this.g.keys());for(let _=0;_<h.length;_++){var p=h[_];const b=hi(p);p=Uf(this,p);for(let P=0;P<p.length;P++){let L=b;p[P]!==""&&(L+="="+hi(p[P])),c.push(L)}}return this.i=c.join("&")};function qf(c){const h=new gi;return h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),h}function zr(c,h){return h=String(h),c.j&&(h=h.toLowerCase()),h}function hw(c,h){h&&!c.j&&(er(c),c.i=null,c.g.forEach(function(p,_){const b=_.toLowerCase();_!=b&&(Lf(this,_),Bf(this,b,p))},c)),c.j=h}function dw(c,h){const p=new ui;if(o.Image){const _=new Image;_.onload=d(ln,p,"TestLoadImage: loaded",!0,h,_),_.onerror=d(ln,p,"TestLoadImage: error",!1,h,_),_.onabort=d(ln,p,"TestLoadImage: abort",!1,h,_),_.ontimeout=d(ln,p,"TestLoadImage: timeout",!1,h,_),o.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=c}else h(!1)}function fw(c,h){const p=new ui,_=new AbortController,b=setTimeout(()=>{_.abort(),ln(p,"TestPingServer: timeout",!1,h)},1e4);fetch(c,{signal:_.signal}).then(P=>{clearTimeout(b),P.ok?ln(p,"TestPingServer: ok",!0,h):ln(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(b),ln(p,"TestPingServer: error",!1,h)})}function ln(c,h,p,_,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),_(p)}catch{}}function pw(){this.g=new YT}function kl(c){this.i=c.Sb||null,this.h=c.ab||!1}f(kl,gf),kl.prototype.g=function(){return new Xo(this.i,this.h)};function Xo(c,h){Ke.call(this),this.H=c,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}f(Xo,Ke),n=Xo.prototype,n.open=function(c,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=h,this.readyState=1,Ii(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(h.body=c),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,yi(this)),this.readyState=0},n.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Ii(this)),this.g&&(this.readyState=3,Ii(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Gf(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function Gf(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}n.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var h=c.value?c.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!c.done}))&&(this.response=this.responseText+=h)}c.done?yi(this):Ii(this),this.readyState==3&&Gf(this)}},n.Oa=function(c){this.g&&(this.response=this.responseText=c,yi(this))},n.Na=function(c){this.g&&(this.response=c,yi(this))},n.ga=function(){this.g&&yi(this)};function yi(c){c.readyState=4,c.l=null,c.j=null,c.B=null,Ii(c)}n.setRequestHeader=function(c,h){this.A.append(c,h)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,c.push(p[0]+": "+p[1]),p=h.next();return c.join(`\r
`)};function Ii(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Xo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function jf(c){let h="";return $o(c,function(p,_){h+=_,h+=":",h+=p,h+=`\r
`}),h}function Dl(c,h,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=jf(p),typeof c=="string"?p!=null&&hi(p):ge(c,h,p))}function be(c){Ke.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}f(be,Ke);var mw=/^https?$/i,_w=["POST","PUT"];n=be.prototype,n.Fa=function(c){this.H=c},n.ea=function(c,h,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);h=h?h.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Af.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(c),!0),this.B=!1}catch(P){zf(this,P);return}if(c=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var b in _)p.set(b,_[b]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const P of _.keys())p.set(P,_.get(P));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(P=>P.toLowerCase()=="content-type"),b=o.FormData&&c instanceof o.FormData,!(Array.prototype.indexOf.call(_w,h,void 0)>=0)||_||b||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,L]of p)this.g.setRequestHeader(P,L);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(P){zf(this,P)}};function zf(c,h){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=h,c.o=5,$f(c),Zo(c)}function $f(c){c.A||(c.A=!0,Xe(c,"complete"),Xe(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,Xe(this,"complete"),Xe(this,"abort"),Zo(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Zo(this,!0)),be.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Wf(this):this.Xa())},n.Xa=function(){Wf(this)};function Wf(c){if(c.h&&typeof i<"u"){if(c.v&&un(c)==4)setTimeout(c.Ca.bind(c),0);else if(Xe(c,"readystatechange"),un(c)==4){c.h=!1;try{const P=c.ca();e:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var _;if(_=P===0){let L=String(c.D).match(Of)[1]||null;!L&&o.self&&o.self.location&&(L=o.self.location.protocol.slice(0,-1)),_=!mw.test(L?L.toLowerCase():"")}p=_}if(p)Xe(c,"complete"),Xe(c,"success");else{c.o=6;try{var b=un(c)>2?c.g.statusText:""}catch{b=""}c.l=b+" ["+c.ca()+"]",$f(c)}}finally{Zo(c)}}}}function Zo(c,h){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const p=c.g;c.g=null,h||Xe(c,"ready");try{p.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function un(c){return c.g?c.g.readyState:0}n.ca=function(){try{return un(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(c){if(this.g){var h=this.g.responseText;return c&&h.indexOf(c)==0&&(h=h.substring(c.length)),QT(h)}};function Kf(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function gw(c){const h={};c=(c.g&&un(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<c.length;_++){if(I(c[_]))continue;var p=tw(c[_]);const b=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const P=h[b]||[];h[b]=P,P.push(p)}jT(h,function(_){return _.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ei(c,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[c]||h}function Hf(c){this.za=0,this.i=[],this.j=new ui,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ei("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ei("baseRetryDelayMs",5e3,c),this.Za=Ei("retryDelaySeedMs",1e4,c),this.Ta=Ei("forwardChannelMaxRetries",2,c),this.va=Ei("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new Nf(c&&c.concurrentRequestLimit),this.Ba=new pw,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Hf.prototype,n.ka=8,n.I=1,n.connect=function(c,h,p,_){Ze(0),this.W=c,this.H=h||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.J=rp(this,null,this.W),ta(this)};function xl(c){if(Qf(c),c.I==3){var h=c.V++,p=Rt(c.J);if(ge(p,"SID",c.M),ge(p,"RID",h),ge(p,"TYPE","terminate"),Ti(c,p),h=new an(c,c.j,h),h.M=2,h.A=Jo(Rt(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=h.A,p=!0),p||(h.g=sp(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Yo(h)}np(c)}function ea(c){c.g&&(Ol(c),c.g.cancel(),c.g=null)}function Qf(c){ea(c),c.v&&(o.clearTimeout(c.v),c.v=null),na(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&o.clearTimeout(c.m),c.m=null)}function ta(c){if(!kf(c.h)&&!c.m){c.m=!0;var h=c.Ea;oe||y(),re||(oe(),re=!0),T.add(h,c),c.D=0}}function yw(c,h){return Df(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=h.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=li(u(c.Ea,c,h),tp(c,c.D)),c.D++,!0)}n.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const b=new an(this,this.j,c);let P=this.o;if(this.U&&(P?(P=af(P),lf(P,this.U)):P=this.U),this.u!==null||this.R||(b.J=P,P=null),this.S)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,h>4096){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Jf(this,b,h),p=Rt(this.J),ge(p,"RID",c),ge(p,"CVER",22),this.G&&ge(p,"X-HTTP-Session-Id",this.G),Ti(this,p),P&&(this.R?h="headers="+hi(jf(P))+"&"+h:this.u&&Dl(p,this.u,P)),Pl(this.h,b),this.Ra&&ge(p,"TYPE","init"),this.S?(ge(p,"$req",h),ge(p,"SID","null"),b.U=!0,Sl(b,p,null)):Sl(b,p,h),this.I=2}}else this.I==3&&(c?Yf(this,c):this.i.length==0||kf(this.h)||Yf(this))};function Yf(c,h){var p;h?p=h.l:p=c.V++;const _=Rt(c.J);ge(_,"SID",c.M),ge(_,"RID",p),ge(_,"AID",c.K),Ti(c,_),c.u&&c.o&&Dl(_,c.u,c.o),p=new an(c,c.j,p,c.D+1),c.u===null&&(p.J=c.o),h&&(c.i=h.G.concat(c.i)),h=Jf(c,p,1e3),p.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),Pl(c.h,p),Sl(p,_,h)}function Ti(c,h){c.H&&$o(c.H,function(p,_){ge(h,_,p)}),c.l&&$o({},function(p,_){ge(h,_,p)})}function Jf(c,h,p){p=Math.min(c.i.length,p);const _=c.l?u(c.l.Ka,c.l,c):null;e:{var b=c.i;let H=-1;for(;;){const xe=["count="+p];H==-1?p>0?(H=b[0].g,xe.push("ofs="+H)):H=0:xe.push("ofs="+H);let fe=!0;for(let Me=0;Me<p;Me++){var P=b[Me].g;const Ct=b[Me].map;if(P-=H,P<0)H=Math.max(0,b[Me].g-100),fe=!1;else try{P="req"+P+"_"||"";try{var L=Ct instanceof Map?Ct:Object.entries(Ct);for(const[nr,hn]of L){let dn=hn;a(hn)&&(dn=El(hn)),xe.push(P+nr+"="+encodeURIComponent(dn))}}catch(nr){throw xe.push(P+"type="+encodeURIComponent("_badmap")),nr}}catch{_&&_(Ct)}}if(fe){L=xe.join("&");break e}}L=void 0}return c=c.i.splice(0,p),h.G=c,L}function Xf(c){if(!c.g&&!c.v){c.Y=1;var h=c.Da;oe||y(),re||(oe(),re=!0),T.add(h,c),c.A=0}}function Vl(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=li(u(c.Da,c),tp(c,c.A)),c.A++,!0)}n.Da=function(){if(this.v=null,Zf(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=li(u(this.Wa,this),c)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ze(10),ea(this),Zf(this))};function Ol(c){c.B!=null&&(o.clearTimeout(c.B),c.B=null)}function Zf(c){c.g=new an(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var h=Rt(c.na);ge(h,"RID","rpc"),ge(h,"SID",c.M),ge(h,"AID",c.K),ge(h,"CI",c.F?"0":"1"),!c.F&&c.ia&&ge(h,"TO",c.ia),ge(h,"TYPE","xmlhttp"),Ti(c,h),c.u&&c.o&&Dl(h,c.u,c.o),c.O&&(c.g.H=c.O);var p=c.g;c=c.ba,p.M=1,p.A=Jo(Rt(h)),p.u=null,p.R=!0,Rf(p,c)}n.Va=function(){this.C!=null&&(this.C=null,ea(this),Vl(this),Ze(19))};function na(c){c.C!=null&&(o.clearTimeout(c.C),c.C=null)}function ep(c,h){var p=null;if(c.g==h){na(c),Ol(c),c.g=null;var _=2}else if(Cl(c.h,h))p=h.G,xf(c.h,h),_=1;else return;if(c.I!=0){if(h.o)if(_==1){p=h.u?h.u.length:0,h=Date.now()-h.F;var b=c.D;_=Ho(),Xe(_,new wf(_,p)),ta(c)}else Xf(c);else if(b=h.m,b==3||b==0&&h.X>0||!(_==1&&yw(c,h)||_==2&&Vl(c)))switch(p&&p.length>0&&(h=c.h,h.i=h.i.concat(p)),b){case 1:tr(c,5);break;case 4:tr(c,10);break;case 3:tr(c,6);break;default:tr(c,2)}}}function tp(c,h){let p=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(p*=2),p*h}function tr(c,h){if(c.j.info("Error code "+h),h==2){var p=u(c.bb,c),_=c.Ua;const b=!_;_=new cn(_||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||fi(_,"https"),Jo(_),b?dw(_.toString(),p):fw(_.toString(),p)}else Ze(2);c.I=0,c.l&&c.l.pa(h),np(c),Qf(c)}n.bb=function(c){c?(this.j.info("Successfully pinged google.com"),Ze(2)):(this.j.info("Failed to ping google.com"),Ze(1))};function np(c){if(c.I=0,c.ja=[],c.l){const h=Vf(c.h);(h.length!=0||c.i.length!=0)&&(A(c.ja,h),A(c.ja,c.i),c.h.i.length=0,g(c.i),c.i.length=0),c.l.oa()}}function rp(c,h,p){var _=p instanceof cn?Rt(p):new cn(p);if(_.g!="")h&&(_.g=h+"."+_.g),pi(_,_.u);else{var b=o.location;_=b.protocol,h=h?h+"."+b.hostname:b.hostname,b=+b.port;const P=new cn(null);_&&fi(P,_),h&&(P.g=h),b&&pi(P,b),p&&(P.h=p),_=P}return p=c.G,h=c.wa,p&&h&&ge(_,p,h),ge(_,"VER",c.ka),Ti(c,_),_}function sp(c,h,p){if(h&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=c.Aa&&!c.ma?new be(new kl({ab:p})):new be(c.ma),h.Fa(c.L),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ip(){}n=ip.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function ra(){}ra.prototype.g=function(c,h){return new ct(c,h)};function ct(c,h){Ke.call(this),this.g=new Hf(h),this.l=c,this.h=h&&h.messageUrlParams||null,c=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(c?c["X-WebChannel-Content-Type"]=h.messageContentType:c={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(c?c["X-WebChannel-Client-Profile"]=h.sa:c={"X-WebChannel-Client-Profile":h.sa}),this.g.U=c,(c=h&&h.Qb)&&!I(c)&&(this.g.u=c),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!I(h)&&(this.g.G=h,c=this.h,c!==null&&h in c&&(c=this.h,h in c&&delete c[h])),this.j=new $r(this)}f(ct,Ke),ct.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},ct.prototype.close=function(){xl(this.g)},ct.prototype.o=function(c){var h=this.g;if(typeof c=="string"){var p={};p.__data__=c,c=p}else this.v&&(p={},p.__data__=El(c),c=p);h.i.push(new sw(h.Ya++,c)),h.I==3&&ta(h)},ct.prototype.N=function(){this.g.l=null,delete this.j,xl(this.g),delete this.g,ct.Z.N.call(this)};function op(c){Tl.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var h=c.__sm__;if(h){e:{for(const p in h){c=p;break e}c=void 0}(this.i=c)&&(c=this.i,h=h!==null&&c in h?h[c]:void 0),this.data=h}else this.data=c}f(op,Tl);function ap(){wl.call(this),this.status=1}f(ap,wl);function $r(c){this.g=c}f($r,ip),$r.prototype.ra=function(){Xe(this.g,"a")},$r.prototype.qa=function(c){Xe(this.g,new op(c))},$r.prototype.pa=function(c){Xe(this.g,new ap)},$r.prototype.oa=function(){Xe(this.g,"b")},ra.prototype.createWebChannel=ra.prototype.g,ct.prototype.send=ct.prototype.o,ct.prototype.open=ct.prototype.m,ct.prototype.close=ct.prototype.close,Hg=function(){return new ra},Kg=function(){return Ho()},Wg=Xn,fu={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Qo.NO_ERROR=0,Qo.TIMEOUT=8,Qo.HTTP_ERROR=6,Ea=Qo,vf.COMPLETE="complete",$g=vf,yf.EventType=ai,ai.OPEN="a",ai.CLOSE="b",ai.ERROR="c",ai.MESSAGE="d",Ke.prototype.listen=Ke.prototype.J,ki=yf,be.prototype.listenOnce=be.prototype.K,be.prototype.getLastError=be.prototype.Ha,be.prototype.getLastErrorCode=be.prototype.ya,be.prototype.getStatus=be.prototype.ca,be.prototype.getResponseJson=be.prototype.La,be.prototype.getResponseText=be.prototype.la,be.prototype.send=be.prototype.ea,be.prototype.setWithCredentials=be.prototype.Fa,zg=be}).apply(typeof oa<"u"?oa:typeof self<"u"?self:typeof window<"u"?window:{});const Lp="@firebase/firestore",Fp="4.9.2";/**
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
 */class Ue{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ue.UNAUTHENTICATED=new Ue(null),Ue.GOOGLE_CREDENTIALS=new Ue("google-credentials-uid"),Ue.FIRST_PARTY=new Ue("first-party-uid"),Ue.MOCK_USER=new Ue("mock-user");/**
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
 */let Ws="12.3.0";/**
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
 */const Vn=new vc("@firebase/firestore");function Zr(){return Vn.logLevel}function VD(n){Vn.setLogLevel(n)}function x(n,...e){if(Vn.logLevel<=Z.DEBUG){const t=e.map(yh);Vn.debug(`Firestore (${Ws}): ${n}`,...t)}}function Pe(n,...e){if(Vn.logLevel<=Z.ERROR){const t=e.map(yh);Vn.error(`Firestore (${Ws}): ${n}`,...t)}}function yt(n,...e){if(Vn.logLevel<=Z.WARN){const t=e.map(yh);Vn.warn(`Firestore (${Ws}): ${n}`,...t)}}function yh(n){if(typeof n=="string")return n;try{/**
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
 */function U(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Qg(n,r,t)}function Qg(n,e,t){let r=`FIRESTORE (${Ws}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Pe(r),new Error(r)}function q(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Qg(e,s,r)}function OD(n,e){n||U(57014,e)}function M(n,e){return n}/**
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
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends qt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class je{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class Yg{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ZS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ue.UNAUTHENTICATED)))}shutdown(){}}class eb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class tb{constructor(e){this.t=e,this.currentUser=Ue.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){q(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new je;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new je,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},a=l=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>a(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new je)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(q(typeof r.accessToken=="string",31837,{l:r}),new Yg(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return q(e===null||typeof e=="string",2055,{h:e}),new Ue(e)}}class nb{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Ue.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class rb{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new nb(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ue.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class pu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class sb{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,pt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){q(this.o===void 0,3512);const r=i=>{i.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,x("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new pu(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(q(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new pu(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}class MD{getToken(){return Promise.resolve(new pu(""))}invalidateToken(){}start(e,t){}shutdown(){}}/**
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
 */function ib(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Ih{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=ib(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function z(n,e){return n<e?-1:n>e?1:0}function mu(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return zl(s)===zl(i)?z(s,i):zl(s)?1:-1}return z(n.length,e.length)}const ob=55296,ab=57343;function zl(n){const e=n.charCodeAt(0);return e>=ob&&e<=ab}function gs(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}function Jg(n){return n+"\0"}/**
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
 */const _u="__name__";class Pt{constructor(e,t,r){t===void 0?t=0:t>e.length&&U(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&U(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Pt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Pt?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Pt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return z(e.length,t.length)}static compareSegments(e,t){const r=Pt.isNumericId(e),s=Pt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Pt.extractNumericId(e).compare(Pt.extractNumericId(t)):mu(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Pn.fromString(e.substring(4,e.length-2))}}class J extends Pt{construct(e,t,r){return new J(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new D(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new J(t)}static emptyPath(){return new J([])}}const cb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ee extends Pt{construct(e,t,r){return new Ee(e,t,r)}static isValidIdentifier(e){return cb.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ee.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===_u}static keyField(){return new Ee([_u])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new D(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new D(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new D(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new D(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ee(t)}static emptyPath(){return new Ee([])}}/**
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
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(J.fromString(e))}static fromName(e){return new O(J.fromString(e).popFirst(5))}static empty(){return new O(J.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&J.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return J.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new J(e.slice()))}}/**
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
 */function Eh(n,e,t){if(!t)throw new D(R.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function lb(n,e,t,r){if(e===!0&&r===!0)throw new D(R.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Up(n){if(!O.isDocumentKey(n))throw new D(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Bp(n){if(O.isDocumentKey(n))throw new D(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Xg(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Rc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":U(12329,{type:typeof n})}function ee(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new D(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Rc(n);throw new D(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function Zg(n,e){if(e<=0)throw new D(R.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */function De(n,e){const t={typeString:n};return e&&(t.value=e),t}function Or(n,e){if(!Xg(n))throw new D(R.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(s&&typeof o!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new D(R.INVALID_ARGUMENT,t);return!0}/**
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
 */const qp=-62135596800,Gp=1e6;class ce{static now(){return ce.fromMillis(Date.now())}static fromDate(e){return ce.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Gp);return new ce(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new D(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new D(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<qp)throw new D(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Gp}_compareTo(e){return this.seconds===e.seconds?z(this.nanoseconds,e.nanoseconds):z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ce._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Or(e,ce._jsonSchema))return new ce(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-qp;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ce._jsonSchemaVersion="firestore/timestamp/1.0",ce._jsonSchema={type:De("string",ce._jsonSchemaVersion),seconds:De("number"),nanoseconds:De("number")};/**
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
 */class j{static fromTimestamp(e){return new j(e)}static min(){return new j(new ce(0,0))}static max(){return new j(new ce(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ys=-1;class Is{constructor(e,t,r,s){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=s}}function gu(n){return n.fields.find((e=>e.kind===2))}function ir(n){return n.fields.filter((e=>e.kind!==2))}function ub(n,e){let t=z(n.collectionGroup,e.collectionGroup);if(t!==0)return t;for(let r=0;r<Math.min(n.fields.length,e.fields.length);++r)if(t=hb(n.fields[r],e.fields[r]),t!==0)return t;return z(n.fields.length,e.fields.length)}Is.UNKNOWN_ID=-1;class mr{constructor(e,t){this.fieldPath=e,this.kind=t}}function hb(n,e){const t=Ee.comparator(n.fieldPath,e.fieldPath);return t!==0?t:z(n.kind,e.kind)}class Es{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Es(0,ft.min())}}function ey(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=j.fromTimestamp(r===1e9?new ce(t+1,0):new ce(t,r));return new ft(s,O.empty(),e)}function ty(n){return new ft(n.readTime,n.key,ys)}class ft{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new ft(j.min(),O.empty(),ys)}static max(){return new ft(j.max(),O.empty(),ys)}}function Th(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=O.comparator(n.documentKey,e.documentKey),t!==0?t:z(n.largestBatchId,e.largestBatchId))}/**
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
 */const ny="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ry{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function zn(n){if(n.code!==R.FAILED_PRECONDITION||n.message!==ny)throw n;x("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&U(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new S(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof S?t:S.resolve(t)}catch(t){return S.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):S.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):S.reject(t)}static resolve(e){return new S(((t,r)=>{t(e)}))}static reject(e){return new S(((t,r)=>{r(e)}))}static waitFor(e){return new S(((t,r)=>{let s=0,i=0,o=!1;e.forEach((a=>{++s,a.next((()=>{++i,o&&i===s&&t()}),(l=>r(l)))})),o=!0,i===s&&t()}))}static or(e){let t=S.resolve(!1);for(const r of e)t=t.next((s=>s?S.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,i)=>{r.push(t.call(this,s,i))})),this.waitFor(r)}static mapArray(e,t){return new S(((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const u=l;t(e[u]).next((d=>{o[u]=d,++a,a===i&&r(o)}),(d=>s(d)))}}))}static doWhile(e,t){return new S(((r,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):r()};i()}))}}/**
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
 */const lt="SimpleDb";class Cc{static open(e,t,r,s){try{return new Cc(t,e.transaction(s,r))}catch(i){throw new Li(t,i)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new je,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new Li(e,t.error)):this.S.resolve()},this.transaction.onerror=r=>{const s=wh(r.target.error);this.S.reject(new Li(e,s))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(x(lt,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new fb(t)}}class Mt{static delete(e){return x(lt,"Removing database:",e),cr(Y_().indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!ig())return!1;if(Mt.F())return!0;const e=Ve(),t=Mt.M(e),r=0<t&&t<10,s=sy(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static F(){return typeof process<"u"&&process.__PRIVATE_env?.__PRIVATE_USE_MOCK_PERSISTENCE==="YES"}static O(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,t,r){this.name=e,this.version=t,this.N=r,this.B=null,Mt.M(Ve())===12.2&&Pe("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async L(e){return this.db||(x(lt,"Opening database:",this.name),this.db=await new Promise(((t,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{r(new Li(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new D(R.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new D(R.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Li(e,o))},s.onupgradeneeded=i=>{x(lt,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.N.k(o,s.transaction,i.oldVersion,this.version).next((()=>{x(lt,"Database upgrade to version "+this.version+" complete")}))}}))),this.q&&(this.db.onversionchange=t=>this.q(t)),this.db}$(e){this.q=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.L(e);const a=Cc.open(this.db,e,i?"readonly":"readwrite",r),l=s(a).next((u=>(a.C(),u))).catch((u=>(a.abort(u),S.reject(u)))).toPromise();return l.catch((()=>{})),await a.D,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&o<3;if(x(lt,"Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function sy(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class db{constructor(e){this.U=e,this.K=!1,this.W=null}get isDone(){return this.K}get G(){return this.W}set cursor(e){this.U=e}done(){this.K=!0}j(e){this.W=e}delete(){return cr(this.U.delete())}}class Li extends D{constructor(e,t){super(R.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function $n(n){return n.name==="IndexedDbTransactionError"}class fb{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(x(lt,"PUT",this.store.name,e,t),r=this.store.put(t,e)):(x(lt,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),cr(r)}add(e){return x(lt,"ADD",this.store.name,e,e),cr(this.store.add(e))}get(e){return cr(this.store.get(e)).next((t=>(t===void 0&&(t=null),x(lt,"GET",this.store.name,e,t),t)))}delete(e){return x(lt,"DELETE",this.store.name,e),cr(this.store.delete(e))}count(){return x(lt,"COUNT",this.store.name),cr(this.store.count())}J(e,t){const r=this.options(e,t),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new S(((o,a)=>{i.onerror=l=>{a(l.target.error)},i.onsuccess=l=>{o(l.target.result)}}))}{const i=this.cursor(r),o=[];return this.H(i,((a,l)=>{o.push(l)})).next((()=>o))}}Y(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new S(((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}}))}Z(e,t){x(lt,"DELETE ALL",this.store.name);const r=this.options(e,t);r.X=!1;const s=this.cursor(r);return this.H(s,((i,o,a)=>a.delete()))}ee(e,t){let r;t?r=e:(r={},t=e);const s=this.cursor(r);return this.H(s,t)}te(e){const t=this.cursor({});return new S(((r,s)=>{t.onerror=i=>{const o=wh(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next((a=>{a?o.continue():r()})):r()}}))}H(e,t){const r=[];return new S(((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const l=new db(a),u=t(a.primaryKey,a.value,l);if(u instanceof S){const d=u.catch((f=>(l.done(),S.reject(f))));r.push(d)}l.isDone?s():l.G===null?a.continue():a.continue(l.G)}})).next((()=>S.waitFor(r)))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.X?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function cr(n){return new S(((e,t)=>{n.onsuccess=r=>{const s=r.target.result;e(s)},n.onerror=r=>{const s=wh(r.target.error);t(s)}}))}let jp=!1;function wh(n){const e=Mt.M(Ve());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new D("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return jp||(jp=!0,setTimeout((()=>{throw r}),0)),r}}return n}const Fi="IndexBackfiller";class pb{constructor(e,t){this.asyncQueue=e,this.ne=t,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}re(e){x(Fi,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{const t=await this.ne.ie();x(Fi,`Documents written: ${t}`)}catch(t){$n(t)?x(Fi,"Ignoring IndexedDB error during index backfill: ",t):await zn(t)}await this.re(6e4)}))}}class mb{constructor(e,t){this.localStore=e,this.persistence=t}async ie(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.se(t,e)))}se(e,t){const r=new Set;let s=t,i=!0;return S.doWhile((()=>i===!0&&s>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((o=>{if(o!==null&&!r.has(o))return x(Fi,`Processing collection: ${o}`),this.oe(e,o,s).next((a=>{s-=a,r.add(o)}));i=!1})))).next((()=>t-s))}oe(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((s=>this.localStore.localDocuments.getNextDocuments(e,t,s,r).next((i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next((()=>this._e(s,i))).next((a=>(x(Fi,`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a)))).next((()=>o.size))}))))}_e(e,t){let r=e;return t.changes.forEach(((s,i)=>{const o=ty(i);Th(o,r)>0&&(r=o)})),new ft(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class nt{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}nt.ce=-1;/**
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
 */const Nn=-1;function So(n){return n==null}function Zi(n){return n===0&&1/n==-1/0}function iy(n){return typeof n=="number"&&Number.isInteger(n)&&!Zi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const za="";function Ye(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=zp(e)),e=_b(n.get(t),e);return zp(e)}function _b(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case za:t+="";break;default:t+=i}}return t}function zp(n){return n+za+""}function Dt(n){const e=n.length;if(q(e>=2,64408,{path:n}),e===2)return q(n.charAt(0)===za&&n.charAt(1)==="",56145,{path:n}),J.emptyPath();const t=e-2,r=[];let s="";for(let i=0;i<e;){const o=n.indexOf(za,i);switch((o<0||o>t)&&U(50515,{path:n}),n.charAt(o+1)){case"":const a=n.substring(i,o);let l;s.length===0?l=a:(s+=a,l=s,s=""),r.push(l);break;case"":s+=n.substring(i,o),s+="\0";break;case"":s+=n.substring(i,o+1);break;default:U(61167,{path:n})}i=o+2}return new J(r)}/**
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
 */const or="remoteDocuments",bo="owner",Wr="owner",eo="mutationQueues",gb="userId",It="mutations",$p="batchId",dr="userMutationsIndex",Wp=["userId","batchId"];/**
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
 */function Ta(n,e){return[n,Ye(e)]}function oy(n,e,t){return[n,Ye(e),t]}const yb={},Ts="documentMutations",$a="remoteDocumentsV14",Ib=["prefixPath","collectionGroup","readTime","documentId"],wa="documentKeyIndex",Eb=["prefixPath","collectionGroup","documentId"],ay="collectionGroupIndex",Tb=["collectionGroup","readTime","prefixPath","documentId"],to="remoteDocumentGlobal",yu="remoteDocumentGlobalKey",ws="targets",cy="queryTargetsIndex",wb=["canonicalId","targetId"],vs="targetDocuments",vb=["targetId","path"],vh="documentTargetsIndex",Ab=["path","targetId"],Wa="targetGlobalKey",_r="targetGlobal",no="collectionParents",Sb=["collectionId","parent"],As="clientMetadata",bb="clientId",Pc="bundles",Rb="bundleId",Nc="namedQueries",Cb="name",Ah="indexConfiguration",Pb="indexId",Iu="collectionGroupIndex",Nb="collectionGroup",Ui="indexState",kb=["indexId","uid"],ly="sequenceNumberIndex",Db=["uid","sequenceNumber"],Bi="indexEntries",xb=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],uy="documentKeyIndex",Vb=["indexId","uid","orderedDocumentKey"],kc="documentOverlays",Ob=["userId","collectionPath","documentId"],Eu="collectionPathOverlayIndex",Mb=["userId","collectionPath","largestBatchId"],hy="collectionGroupOverlayIndex",Lb=["userId","collectionGroup","largestBatchId"],Sh="globals",Fb="name",dy=[eo,It,Ts,or,ws,bo,_r,vs,As,to,no,Pc,Nc],Ub=[...dy,kc],fy=[eo,It,Ts,$a,ws,bo,_r,vs,As,to,no,Pc,Nc,kc],py=fy,bh=[...py,Ah,Ui,Bi],Bb=bh,my=[...bh,Sh],qb=my;/**
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
 */class Tu extends ry{constructor(e,t){super(),this.le=e,this.currentSequenceNumber=t}}function Oe(n,e){const t=M(n);return Mt.O(t.le,e)}/**
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
 */function Kp(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Wn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function _y(n,e){const t=[];for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.push(e(n[r],r,n));return t}function gy(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */let Ae=class wu{constructor(e,t){this.comparator=e,this.root=t||kn.EMPTY}insert(e,t){return new wu(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,kn.BLACK,null,null))}remove(e){return new wu(this.comparator,this.root.remove(e,this.comparator).copy(null,null,kn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new aa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new aa(this.root,e,this.comparator,!1)}getReverseIterator(){return new aa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new aa(this.root,e,this.comparator,!0)}},aa=class{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},kn=class jt{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??jt.RED,this.left=s??jt.EMPTY,this.right=i??jt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new jt(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return jt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return jt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,jt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,jt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw U(43730,{key:this.key,value:this.value});if(this.right.isRed())throw U(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw U(27949);return e+(this.isRed()?0:1)}};kn.EMPTY=null,kn.RED=!0,kn.BLACK=!1;kn.EMPTY=new class{constructor(){this.size=0}get key(){throw U(57766)}get value(){throw U(16141)}get color(){throw U(16727)}get left(){throw U(29726)}get right(){throw U(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new kn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ue{constructor(e){this.comparator=e,this.data=new Ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Hp(this.data.getIterator())}getIteratorFrom(e){return new Hp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof ue)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new ue(this.comparator);return t.data=e,t}}class Hp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Kr(n){return n.hasNext()?n.getNext():void 0}/**
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
 */class rt{constructor(e){this.fields=e,e.sort(Ee.comparator)}static empty(){return new rt([])}unionWith(e){let t=new ue(Ee.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new rt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return gs(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class yy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function UD(){return typeof atob<"u"}/**
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
 */class Re{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new yy("Invalid base64 string: "+i):i}})(e);return new Re(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new Re(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Re.EMPTY_BYTE_STRING=new Re("");const Gb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zt(n){if(q(!!n,39018),typeof n=="string"){let e=0;const t=Gb.exec(n);if(q(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ie(n.seconds),nanos:Ie(n.nanos)}}function Ie(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function en(n){return typeof n=="string"?Re.fromBase64String(n):Re.fromUint8Array(n)}/**
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
 */const Iy="server_timestamp",Ey="__type__",Ty="__previous_value__",wy="__local_write_time__";function Dc(n){return(n?.mapValue?.fields||{})[Ey]?.stringValue===Iy}function xc(n){const e=n.mapValue.fields[Ty];return Dc(e)?xc(e):e}function ro(n){const e=Zt(n.mapValue.fields[wy].timestampValue);return new ce(e.seconds,e.nanos)}/**
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
 */class jb{constructor(e,t,r,s,i,o,a,l,u,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=d}}const so="(default)";class Ir{constructor(e,t){this.projectId=e,this.database=t||so}static empty(){return new Ir("","")}get isDefaultDatabase(){return this.database===so}isEqual(e){return e instanceof Ir&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Rh="__type__",vy="__max__",vn={mapValue:{fields:{__type__:{stringValue:vy}}}},Ch="__vector__",Ss="value",va={nullValue:"NULL_VALUE"};function On(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Dc(n)?4:Ay(n)?9007199254740991:Vc(n)?10:11:U(28295,{value:n})}function Bt(n,e){if(n===e)return!0;const t=On(n);if(t!==On(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ro(n).isEqual(ro(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Zt(s.timestampValue),a=Zt(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,i){return en(s.bytesValue).isEqual(en(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,i){return Ie(s.geoPointValue.latitude)===Ie(i.geoPointValue.latitude)&&Ie(s.geoPointValue.longitude)===Ie(i.geoPointValue.longitude)})(n,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Ie(s.integerValue)===Ie(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ie(s.doubleValue),a=Ie(i.doubleValue);return o===a?Zi(o)===Zi(a):isNaN(o)&&isNaN(a)}return!1})(n,e);case 9:return gs(n.arrayValue.values||[],e.arrayValue.values||[],Bt);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Kp(o)!==Kp(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Bt(o[l],a[l])))return!1;return!0})(n,e);default:return U(52216,{left:n})}}function io(n,e){return(n.values||[]).find((t=>Bt(t,e)))!==void 0}function Mn(n,e){if(n===e)return 0;const t=On(n),r=On(e);if(t!==r)return z(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return z(n.booleanValue,e.booleanValue);case 2:return(function(i,o){const a=Ie(i.integerValue||i.doubleValue),l=Ie(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1})(n,e);case 3:return Qp(n.timestampValue,e.timestampValue);case 4:return Qp(ro(n),ro(e));case 5:return mu(n.stringValue,e.stringValue);case 6:return(function(i,o){const a=en(i),l=en(o);return a.compareTo(l)})(n.bytesValue,e.bytesValue);case 7:return(function(i,o){const a=i.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const d=z(a[u],l[u]);if(d!==0)return d}return z(a.length,l.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,o){const a=z(Ie(i.latitude),Ie(o.latitude));return a!==0?a:z(Ie(i.longitude),Ie(o.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Yp(n.arrayValue,e.arrayValue);case 10:return(function(i,o){const a=i.fields||{},l=o.fields||{},u=a[Ss]?.arrayValue,d=l[Ss]?.arrayValue,f=z(u?.values?.length||0,d?.values?.length||0);return f!==0?f:Yp(u,d)})(n.mapValue,e.mapValue);case 11:return(function(i,o){if(i===vn.mapValue&&o===vn.mapValue)return 0;if(i===vn.mapValue)return 1;if(o===vn.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),u=o.fields||{},d=Object.keys(u);l.sort(),d.sort();for(let f=0;f<l.length&&f<d.length;++f){const m=mu(l[f],d[f]);if(m!==0)return m;const g=Mn(a[l[f]],u[d[f]]);if(g!==0)return g}return z(l.length,d.length)})(n.mapValue,e.mapValue);default:throw U(23264,{he:t})}}function Qp(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return z(n,e);const t=Zt(n),r=Zt(e),s=z(t.seconds,r.seconds);return s!==0?s:z(t.nanos,r.nanos)}function Yp(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Mn(t[s],r[s]);if(i)return i}return z(t.length,r.length)}function bs(n){return vu(n)}function vu(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Zt(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return en(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return O.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=vu(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${vu(t.fields[o])}`;return s+"}"})(n.mapValue):U(61005,{value:n})}function Aa(n){switch(On(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=xc(n);return e?16+Aa(e):16;case 5:return 2*n.stringValue.length;case 6:return en(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Aa(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return Wn(r.fields,((i,o)=>{s+=i.length+Aa(o)})),s})(n.mapValue);default:throw U(13486,{value:n})}}function Er(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Au(n){return!!n&&"integerValue"in n}function oo(n){return!!n&&"arrayValue"in n}function Jp(n){return!!n&&"nullValue"in n}function Xp(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Sa(n){return!!n&&"mapValue"in n}function Vc(n){return(n?.mapValue?.fields||{})[Rh]?.stringValue===Ch}function qi(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Wn(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=qi(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=qi(n.arrayValue.values[t]);return e}return{...n}}function Ay(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===vy}const Sy={mapValue:{fields:{[Rh]:{stringValue:Ch},[Ss]:{arrayValue:{}}}}};function zb(n){return"nullValue"in n?va:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Er(Ir.empty(),O.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?Vc(n)?Sy:{mapValue:{}}:U(35942,{value:n})}function $b(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Er(Ir.empty(),O.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?Sy:"mapValue"in n?Vc(n)?{mapValue:{}}:vn:U(61959,{value:n})}function Zp(n,e){const t=Mn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function em(n,e){const t=Mn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
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
 */class We{constructor(e){this.value=e}static empty(){return new We({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Sa(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=qi(t)}setAll(e){let t=Ee.emptyPath(),r={},s=[];e.forEach(((o,a)=>{if(!t.isImmediateParentOf(a)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=a.popLast()}o?r[a.lastSegment()]=qi(o):s.push(a.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Sa(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Bt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Sa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Wn(t,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new We(qi(this.value))}}function by(n){const e=[];return Wn(n.fields,((t,r)=>{const s=new Ee([t]);if(Sa(r)){const i=by(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new rt(e)}/**
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
 */class ye{constructor(e,t,r,s,i,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ye(e,0,j.min(),j.min(),j.min(),We.empty(),0)}static newFoundDocument(e,t,r,s){return new ye(e,1,t,j.min(),r,s,0)}static newNoDocument(e,t){return new ye(e,2,t,j.min(),j.min(),We.empty(),0)}static newUnknownDocument(e,t){return new ye(e,3,t,j.min(),j.min(),We.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(j.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=We.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=We.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ye&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ye(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ln{constructor(e,t){this.position=e,this.inclusive=t}}function tm(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=O.comparator(O.fromName(o.referenceValue),t.key):r=Mn(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function nm(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Bt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class ao{constructor(e,t="asc"){this.field=e,this.dir=t}}function Wb(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Ry{}class te extends Ry{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Kb(e,t,r):t==="array-contains"?new Yb(e,r):t==="in"?new xy(e,r):t==="not-in"?new Jb(e,r):t==="array-contains-any"?new Xb(e,r):new te(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Hb(e,r):new Qb(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Mn(t,this.value)):t!==null&&On(this.value)===On(t)&&this.matchesComparison(Mn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class le extends Ry{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new le(e,t)}matches(e){return Rs(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Rs(n){return n.op==="and"}function Su(n){return n.op==="or"}function Ph(n){return Cy(n)&&Rs(n)}function Cy(n){for(const e of n.filters)if(e instanceof le)return!1;return!0}function bu(n){if(n instanceof te)return n.field.canonicalString()+n.op.toString()+bs(n.value);if(Ph(n))return n.filters.map((e=>bu(e))).join(",");{const e=n.filters.map((t=>bu(t))).join(",");return`${n.op}(${e})`}}function Py(n,e){return n instanceof te?(function(r,s){return s instanceof te&&r.op===s.op&&r.field.isEqual(s.field)&&Bt(r.value,s.value)})(n,e):n instanceof le?(function(r,s){return s instanceof le&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,a)=>i&&Py(o,s.filters[a])),!0):!1})(n,e):void U(19439)}function Ny(n,e){const t=n.filters.concat(e);return le.create(t,n.op)}function ky(n){return n instanceof te?(function(t){return`${t.field.canonicalString()} ${t.op} ${bs(t.value)}`})(n):n instanceof le?(function(t){return t.op.toString()+" {"+t.getFilters().map(ky).join(" ,")+"}"})(n):"Filter"}class Kb extends te{constructor(e,t,r){super(e,t,r),this.key=O.fromName(r.referenceValue)}matches(e){const t=O.comparator(e.key,this.key);return this.matchesComparison(t)}}class Hb extends te{constructor(e,t){super(e,"in",t),this.keys=Dy("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Qb extends te{constructor(e,t){super(e,"not-in",t),this.keys=Dy("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Dy(n,e){return(e.arrayValue?.values||[]).map((t=>O.fromName(t.referenceValue)))}class Yb extends te{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return oo(t)&&io(t.arrayValue,this.value)}}class xy extends te{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&io(this.value.arrayValue,t)}}class Jb extends te{constructor(e,t){super(e,"not-in",t)}matches(e){if(io(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!io(this.value.arrayValue,t)}}class Xb extends te{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!oo(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>io(this.value.arrayValue,r)))}}/**
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
 */class Zb{constructor(e,t=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.Te=null}}function Ru(n,e=null,t=[],r=[],s=null,i=null,o=null){return new Zb(n,e,t,r,s,i,o)}function Tr(n){const e=M(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>bu(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),So(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>bs(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>bs(r))).join(",")),e.Te=t}return e.Te}function Ro(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Wb(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Py(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!nm(n.startAt,e.startAt)&&nm(n.endAt,e.endAt)}function Ka(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Ha(n,e){return n.filters.filter((t=>t instanceof te&&t.field.isEqual(e)))}function rm(n,e,t){let r=va,s=!0;for(const i of Ha(n,e)){let o=va,a=!0;switch(i.op){case"<":case"<=":o=zb(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,a=!1;break;case"!=":case"not-in":o=va}Zp({value:r,inclusive:s},{value:o,inclusive:a})<0&&(r=o,s=a)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];Zp({value:r,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}function sm(n,e,t){let r=vn,s=!0;for(const i of Ha(n,e)){let o=vn,a=!0;switch(i.op){case">=":case">":o=$b(i.value),a=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,a=!1;break;case"!=":case"not-in":o=vn}em({value:r,inclusive:s},{value:o,inclusive:a})>0&&(r=o,s=a)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];em({value:r,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}/**
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
 */class nn{constructor(e,t=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Vy(n,e,t,r,s,i,o,a){return new nn(n,e,t,r,s,i,o,a)}function Ks(n){return new nn(n)}function im(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Nh(n){return n.collectionGroup!==null}function ls(n){const e=M(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ue(Ee.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((u=>{u.isInequality()&&(a=a.add(u.field))}))})),a})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new ao(i,r))})),t.has(Ee.keyField().canonicalString())||e.Ie.push(new ao(Ee.keyField(),r))}return e.Ie}function Je(n){const e=M(n);return e.Ee||(e.Ee=My(e,ls(n))),e.Ee}function Oy(n){const e=M(n);return e.de||(e.de=My(e,n.explicitOrderBy)),e.de}function My(n,e){if(n.limitType==="F")return Ru(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new ao(s.field,i)}));const t=n.endAt?new Ln(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ln(n.startAt.position,n.startAt.inclusive):null;return Ru(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Cu(n,e){const t=n.filters.concat([e]);return new nn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Qa(n,e,t){return new nn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Co(n,e){return Ro(Je(n),Je(e))&&n.limitType===e.limitType}function Ly(n){return`${Tr(Je(n))}|lt:${n.limitType}`}function es(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>ky(s))).join(", ")}]`),So(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>bs(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>bs(s))).join(",")),`Target(${r})`})(Je(n))}; limitType=${n.limitType})`}function Po(n,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):O.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,e)&&(function(r,s){for(const i of ls(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(o,a,l){const u=tm(o,a,l);return o.inclusive?u<=0:u<0})(r.startAt,ls(r),s)||r.endAt&&!(function(o,a,l){const u=tm(o,a,l);return o.inclusive?u>=0:u>0})(r.endAt,ls(r),s))})(n,e)}function Fy(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Uy(n){return(e,t)=>{let r=!1;for(const s of ls(n)){const i=eR(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function eR(n,e,t){const r=n.field.isKeyField()?O.comparator(e.key,t.key):(function(i,o,a){const l=o.data.field(i),u=a.data.field(i);return l!==null&&u!==null?Mn(l,u):U(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return U(19790,{direction:n.dir})}}/**
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
 */class rn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Wn(this.inner,((t,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return gy(this.inner)}size(){return this.innerSize}}/**
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
 */const tR=new Ae(O.comparator);function st(){return tR}const By=new Ae(O.comparator);function Di(...n){let e=By;for(const t of n)e=e.insert(t.key,t);return e}function qy(n){let e=By;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function xt(){return Gi()}function Gy(){return Gi()}function Gi(){return new rn((n=>n.toString()),((n,e)=>n.isEqual(e)))}const nR=new Ae(O.comparator),rR=new ue(O.comparator);function K(...n){let e=rR;for(const t of n)e=e.add(t);return e}const sR=new ue(z);function kh(){return sR}/**
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
 */function Dh(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zi(e)?"-0":e}}function jy(n){return{integerValue:""+n}}function zy(n,e){return iy(e)?jy(e):Dh(n,e)}/**
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
 */class Oc{constructor(){this._=void 0}}function iR(n,e,t){return n instanceof Cs?(function(s,i){const o={fields:{[Ey]:{stringValue:Iy},[wy]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Dc(i)&&(i=xc(i)),i&&(o.fields[Ty]=i),{mapValue:o}})(t,e):n instanceof wr?Wy(n,e):n instanceof vr?Ky(n,e):(function(s,i){const o=$y(s,i),a=om(o)+om(s.Ae);return Au(o)&&Au(s.Ae)?jy(a):Dh(s.serializer,a)})(n,e)}function oR(n,e,t){return n instanceof wr?Wy(n,e):n instanceof vr?Ky(n,e):t}function $y(n,e){return n instanceof Ps?(function(r){return Au(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class Cs extends Oc{}class wr extends Oc{constructor(e){super(),this.elements=e}}function Wy(n,e){const t=Hy(e);for(const r of n.elements)t.some((s=>Bt(s,r)))||t.push(r);return{arrayValue:{values:t}}}class vr extends Oc{constructor(e){super(),this.elements=e}}function Ky(n,e){let t=Hy(e);for(const r of n.elements)t=t.filter((s=>!Bt(s,r)));return{arrayValue:{values:t}}}class Ps extends Oc{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function om(n){return Ie(n.integerValue||n.doubleValue)}function Hy(n){return oo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class No{constructor(e,t){this.field=e,this.transform=t}}function aR(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof wr&&s instanceof wr||r instanceof vr&&s instanceof vr?gs(r.elements,s.elements,Bt):r instanceof Ps&&s instanceof Ps?Bt(r.Ae,s.Ae):r instanceof Cs&&s instanceof Cs})(n.transform,e.transform)}class cR{constructor(e,t){this.version=e,this.transformResults=t}}class Te{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Te}static exists(e){return new Te(void 0,e)}static updateTime(e){return new Te(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ba(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Mc{}function Qy(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Qs(n.key,Te.none()):new Hs(n.key,n.data,Te.none());{const t=n.data,r=We.empty();let s=new ue(Ee.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new sn(n.key,r,new rt(s.toArray()),Te.none())}}function lR(n,e,t){n instanceof Hs?(function(s,i,o){const a=s.value.clone(),l=cm(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()})(n,e,t):n instanceof sn?(function(s,i,o){if(!ba(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=cm(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Yy(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(n,e,t):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function ji(n,e,t,r){return n instanceof Hs?(function(i,o,a,l){if(!ba(i.precondition,o))return a;const u=i.value.clone(),d=lm(i.fieldTransforms,l,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(n,e,t,r):n instanceof sn?(function(i,o,a,l){if(!ba(i.precondition,o))return a;const u=lm(i.fieldTransforms,l,o),d=o.data;return d.setAll(Yy(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((f=>f.field)))})(n,e,t,r):(function(i,o,a){return ba(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a})(n,e,t)}function uR(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=$y(r.transform,s||null);i!=null&&(t===null&&(t=We.empty()),t.set(r.field,i))}return t||null}function am(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&gs(r,s,((i,o)=>aR(i,o)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Hs extends Mc{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class sn extends Mc{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Yy(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function cm(n,e,t){const r=new Map;q(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,oR(o,a,t[s]))}return r}function lm(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,iR(i,o,e))}return r}class Qs extends Mc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class xh extends Mc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Vh{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&lR(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ji(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ji(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Gy();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(s.key)?null:a;const l=Qy(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(j.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),K())}isEqual(e){return this.batchId===e.batchId&&gs(this.mutations,e.mutations,((t,r)=>am(t,r)))&&gs(this.baseMutations,e.baseMutations,((t,r)=>am(t,r)))}}class Oh{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){q(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return nR})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Oh(e,t,r,s)}}/**
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
 */class Mh{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Jy{constructor(e,t,r){this.alias=e,this.aggregateType=t,this.fieldPath=r}}/**
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
 */class hR{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ke,se;function Xy(n){switch(n){case R.OK:return U(64938);case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0;default:return U(15467,{code:n})}}function Zy(n){if(n===void 0)return Pe("GRPC error has no .code"),R.UNKNOWN;switch(n){case ke.OK:return R.OK;case ke.CANCELLED:return R.CANCELLED;case ke.UNKNOWN:return R.UNKNOWN;case ke.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case ke.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case ke.INTERNAL:return R.INTERNAL;case ke.UNAVAILABLE:return R.UNAVAILABLE;case ke.UNAUTHENTICATED:return R.UNAUTHENTICATED;case ke.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case ke.NOT_FOUND:return R.NOT_FOUND;case ke.ALREADY_EXISTS:return R.ALREADY_EXISTS;case ke.PERMISSION_DENIED:return R.PERMISSION_DENIED;case ke.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case ke.ABORTED:return R.ABORTED;case ke.OUT_OF_RANGE:return R.OUT_OF_RANGE;case ke.UNIMPLEMENTED:return R.UNIMPLEMENTED;case ke.DATA_LOSS:return R.DATA_LOSS;default:return U(39323,{code:n})}}(se=ke||(ke={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */let Pu=null;/**
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
 */function eI(){return new TextEncoder}/**
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
 */const dR=new Pn([4294967295,4294967295],0);function um(n){const e=eI().encode(n),t=new jg;return t.update(e),new Uint8Array(t.digest())}function hm(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Pn([t,r],0),new Pn([s,i],0)]}class Lh{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new xi(`Invalid padding: ${t}`);if(r<0)throw new xi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new xi(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new xi(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Pn.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(Pn.fromNumber(r)));return s.compare(dR)===1&&(s=new Pn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=um(e),[r,s]=hm(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Lh(i,s,t);return r.forEach((a=>o.insert(a))),o}insert(e){if(this.ge===0)return;const t=um(e),[r,s]=hm(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class xi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ko{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Do.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ko(j.min(),s,new Ae(z),st(),K())}}class Do{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Do(r,t,K(),K(),K())}}/**
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
 */class Ra{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class tI{constructor(e,t){this.targetId=e,this.Ce=t}}class nI{constructor(e,t,r=Re.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class dm{constructor(){this.ve=0,this.Fe=fm(),this.Me=Re.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=K(),t=K(),r=K();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:U(38017,{changeType:i})}})),new Do(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=fm()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,q(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class fR{constructor(e){this.Ge=e,this.ze=new Map,this.je=st(),this.Je=ca(),this.He=ca(),this.Ye=new Ae(z)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:U(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((r,s)=>{this.rt(s)&&t(s)}))}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(Ka(i))if(r===0){const o=new O(i.path);this.et(t,o,ye.newNoDocument(o,j.min()))}else q(r===1,20013,{expectedCount:r});else{const o=this._t(t);if(o!==r){const a=this.ut(e),l=a?this.ct(a,e,o):1;if(l!==0){this.it(t);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,u)}Pu?.lt((function(d,f,m,g,A){const N={localCacheCount:d,existenceFilterCount:f.count,databaseId:m.database,projectId:m.projectId},k=f.unchangedNames;return k&&(N.bloomFilter={applied:A===0,hashCount:k?.hashCount??0,bitmapLength:k?.bits?.bitmap?.length??0,padding:k?.bits?.padding??0,mightContain:F=>g?.mightContain(F)??!1}),N})(o,e.Ce,this.Ge.ht(),a,l))}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,a;try{o=en(r).toUint8Array()}catch(l){if(l instanceof yy)return yt("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Lh(o,s,i)}catch(l){return yt(l instanceof xi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.ge===0?null:a}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach((i=>{const o=this.Ge.ht(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.et(t,i,null),s++)})),s}Tt(e){const t=new Map;this.ze.forEach(((i,o)=>{const a=this.ot(o);if(a){if(i.current&&Ka(a.target)){const l=new O(a.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,ye.newNoDocument(l,e))}i.Be&&(t.set(o,i.ke()),i.qe())}}));let r=K();this.He.forEach(((i,o)=>{let a=!0;o.forEachWhile((l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)})),a&&(r=r.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const s=new ko(e,t,this.Ye,this.je,r);return this.je=st(),this.Je=ca(),this.He=ca(),this.Ye=new Ae(z),s}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.Qe(t,1):s.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new dm,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new ue(z),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new ue(z),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||x("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new dm),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function ca(){return new Ae(O.comparator)}function fm(){return new Ae(O.comparator)}const pR={asc:"ASCENDING",desc:"DESCENDING"},mR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},_R={and:"AND",or:"OR"};class gR{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Nu(n,e){return n.useProto3Json||So(e)?e:{value:e}}function Ns(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function rI(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function yR(n,e){return Ns(n,e.toTimestamp())}function Ne(n){return q(!!n,49232),j.fromTimestamp((function(t){const r=Zt(t);return new ce(r.seconds,r.nanos)})(n))}function Fh(n,e){return ku(n,e).canonicalString()}function ku(n,e){const t=(function(s){return new J(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function sI(n){const e=J.fromString(n);return q(fI(e),10190,{key:e.toString()}),e}function co(n,e){return Fh(n.databaseId,e.path)}function Lt(n,e){const t=sI(e);if(t.get(1)!==n.databaseId.projectId)throw new D(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new D(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new O(aI(t))}function iI(n,e){return Fh(n.databaseId,e)}function oI(n){const e=sI(n);return e.length===4?J.emptyPath():aI(e)}function Du(n){return new J(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function aI(n){return q(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function pm(n,e,t){return{name:co(n,e),fields:t.value.mapValue.fields}}function Lc(n,e,t){const r=Lt(n,e.name),s=Ne(e.updateTime),i=e.createTime?Ne(e.createTime):j.min(),o=new We({mapValue:{fields:e.fields}}),a=ye.newFoundDocument(r,s,i,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function IR(n,e){return"found"in e?(function(r,s){q(!!s.found,43571),s.found.name,s.found.updateTime;const i=Lt(r,s.found.name),o=Ne(s.found.updateTime),a=s.found.createTime?Ne(s.found.createTime):j.min(),l=new We({mapValue:{fields:s.found.fields}});return ye.newFoundDocument(i,o,a,l)})(n,e):"missing"in e?(function(r,s){q(!!s.missing,3894),q(!!s.readTime,22933);const i=Lt(r,s.missing),o=Ne(s.readTime);return ye.newNoDocument(i,o)})(n,e):U(7234,{result:e})}function ER(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:U(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,d){return u.useProto3Json?(q(d===void 0||typeof d=="string",58123),Re.fromBase64String(d||"")):(q(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Re.fromUint8Array(d||new Uint8Array))})(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&(function(u){const d=u.code===void 0?R.UNKNOWN:Zy(u.code);return new D(d,u.message||"")})(o);t=new nI(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Lt(n,r.document.name),i=Ne(r.document.updateTime),o=r.document.createTime?Ne(r.document.createTime):j.min(),a=new We({mapValue:{fields:r.document.fields}}),l=ye.newFoundDocument(s,i,o,a),u=r.targetIds||[],d=r.removedTargetIds||[];t=new Ra(u,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Lt(n,r.document),i=r.readTime?Ne(r.readTime):j.min(),o=ye.newNoDocument(s,i),a=r.removedTargetIds||[];t=new Ra([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Lt(n,r.document),i=r.removedTargetIds||[];t=new Ra([],i,s,null)}else{if(!("filter"in e))return U(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new hR(s,i),a=r.targetId;t=new tI(a,o)}}return t}function lo(n,e){let t;if(e instanceof Hs)t={update:pm(n,e.key,e.value)};else if(e instanceof Qs)t={delete:co(n,e.key)};else if(e instanceof sn)t={update:pm(n,e.key,e.data),updateMask:bR(e.fieldMask)};else{if(!(e instanceof xh))return U(16599,{Vt:e.type});t={verify:co(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const a=o.transform;if(a instanceof Cs)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof wr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof vr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ps)return{fieldPath:o.field.canonicalString(),increment:a.Ae};throw U(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:yR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:U(27497)})(n,e.precondition)),t}function xu(n,e){const t=e.currentDocument?(function(i){return i.updateTime!==void 0?Te.updateTime(Ne(i.updateTime)):i.exists!==void 0?Te.exists(i.exists):Te.none()})(e.currentDocument):Te.none(),r=e.updateTransforms?e.updateTransforms.map((s=>(function(o,a){let l=null;if("setToServerValue"in a)q(a.setToServerValue==="REQUEST_TIME",16630,{proto:a}),l=new Cs;else if("appendMissingElements"in a){const d=a.appendMissingElements.values||[];l=new wr(d)}else if("removeAllFromArray"in a){const d=a.removeAllFromArray.values||[];l=new vr(d)}else"increment"in a?l=new Ps(o,a.increment):U(16584,{proto:a});const u=Ee.fromServerFormat(a.fieldPath);return new No(u,l)})(n,s))):[];if(e.update){e.update.name;const s=Lt(n,e.update.name),i=new We({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=(function(l){const u=l.fieldPaths||[];return new rt(u.map((d=>Ee.fromServerFormat(d))))})(e.updateMask);return new sn(s,i,o,t,r)}return new Hs(s,i,t,r)}if(e.delete){const s=Lt(n,e.delete);return new Qs(s,t)}if(e.verify){const s=Lt(n,e.verify);return new xh(s,t)}return U(1463,{proto:e})}function TR(n,e){return n&&n.length>0?(q(e!==void 0,14353),n.map((t=>(function(s,i){let o=s.updateTime?Ne(s.updateTime):Ne(i);return o.isEqual(j.min())&&(o=Ne(i)),new cR(o,s.transformResults||[])})(t,e)))):[]}function cI(n,e){return{documents:[iI(n,e.path)]}}function Fc(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=iI(n,s);const i=(function(u){if(u.length!==0)return dI(le.create(u,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((d=>(function(m){return{field:Tn(m.field),direction:vR(m.dir)}})(d)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=Nu(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:t,parent:s}}function lI(n,e,t,r){const{ft:s,parent:i}=Fc(n,e),o={},a=[];let l=0;return t.forEach((u=>{const d=r?u.alias:"aggregate_"+l++;o[d]=u.alias,u.aggregateType==="count"?a.push({alias:d,count:{}}):u.aggregateType==="avg"?a.push({alias:d,avg:{field:Tn(u.fieldPath)}}):u.aggregateType==="sum"&&a.push({alias:d,sum:{field:Tn(u.fieldPath)}})})),{request:{structuredAggregationQuery:{aggregations:a,structuredQuery:s.structuredQuery},parent:s.parent},gt:o,parent:i}}function uI(n){let e=oI(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){q(r===1,65062);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=(function(f){const m=hI(f);return m instanceof le&&Ph(m)?m.getFilters():[m]})(t.where));let o=[];t.orderBy&&(o=(function(f){return f.map((m=>(function(A){return new ao(ts(A.field),(function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(A.direction))})(m)))})(t.orderBy));let a=null;t.limit&&(a=(function(f){let m;return m=typeof f=="object"?f.value:f,So(m)?null:m})(t.limit));let l=null;t.startAt&&(l=(function(f){const m=!!f.before,g=f.values||[];return new Ln(g,m)})(t.startAt));let u=null;return t.endAt&&(u=(function(f){const m=!f.before,g=f.values||[];return new Ln(g,m)})(t.endAt)),Vy(e,s,o,i,a,"F",l,u)}function wR(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function hI(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=ts(t.unaryFilter.field);return te.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ts(t.unaryFilter.field);return te.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ts(t.unaryFilter.field);return te.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ts(t.unaryFilter.field);return te.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return U(61313);default:return U(60726)}})(n):n.fieldFilter!==void 0?(function(t){return te.create(ts(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return U(58110);default:return U(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return le.create(t.compositeFilter.filters.map((r=>hI(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return U(1026)}})(t.compositeFilter.op))})(n):U(30097,{filter:n})}function vR(n){return pR[n]}function AR(n){return mR[n]}function SR(n){return _R[n]}function Tn(n){return{fieldPath:n.canonicalString()}}function ts(n){return Ee.fromServerFormat(n.fieldPath)}function dI(n){return n instanceof te?(function(t){if(t.op==="=="){if(Xp(t.value))return{unaryFilter:{field:Tn(t.field),op:"IS_NAN"}};if(Jp(t.value))return{unaryFilter:{field:Tn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Xp(t.value))return{unaryFilter:{field:Tn(t.field),op:"IS_NOT_NAN"}};if(Jp(t.value))return{unaryFilter:{field:Tn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Tn(t.field),op:AR(t.op),value:t.value}}})(n):n instanceof le?(function(t){const r=t.getFilters().map((s=>dI(s)));return r.length===1?r[0]:{compositeFilter:{op:SR(t.op),filters:r}}})(n):U(54877,{filter:n})}function bR(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function fI(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Wt{constructor(e,t,r,s,i=j.min(),o=j.min(),a=Re.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Wt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class pI{constructor(e){this.yt=e}}function RR(n,e){let t;if(e.document)t=Lc(n.yt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=O.fromSegments(e.noDocument.path),s=Sr(e.noDocument.readTime);t=ye.newNoDocument(r,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return U(56709);{const r=O.fromSegments(e.unknownDocument.path),s=Sr(e.unknownDocument.version);t=ye.newUnknownDocument(r,s)}}return e.readTime&&t.setReadTime((function(s){const i=new ce(s[0],s[1]);return j.fromTimestamp(i)})(e.readTime)),t}function mm(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Ya(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=(function(i,o){return{name:co(i,o.key),fields:o.data.value.mapValue.fields,updateTime:Ns(i,o.version.toTimestamp()),createTime:Ns(i,o.createTime.toTimestamp())}})(n.yt,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Ar(e.version)};else{if(!e.isUnknownDocument())return U(57904,{document:e});r.unknownDocument={path:t.path.toArray(),version:Ar(e.version)}}return r}function Ya(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Ar(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Sr(n){const e=new ce(n.seconds,n.nanoseconds);return j.fromTimestamp(e)}function lr(n,e){const t=(e.baseMutations||[]).map((i=>xu(n.yt,i)));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map((i=>xu(n.yt,i))),s=ce.fromMillis(e.localWriteTimeMs);return new Vh(e.batchId,s,t,r)}function Vi(n){const e=Sr(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Sr(n.lastLimboFreeSnapshotVersion):j.min();let r;return r=(function(i){return i.documents!==void 0})(n.query)?(function(i){const o=i.documents.length;return q(o===1,1966,{count:o}),Je(Ks(oI(i.documents[0])))})(n.query):(function(i){return Je(uI(i))})(n.query),new Wt(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Re.fromBase64String(n.resumeToken))}function mI(n,e){const t=Ar(e.snapshotVersion),r=Ar(e.lastLimboFreeSnapshotVersion);let s;s=Ka(e.target)?cI(n.yt,e.target):Fc(n.yt,e.target).ft;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Tr(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function Uc(n){const e=uI({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Qa(e,e.limit,"L"):e}function $l(n,e){return new Mh(e.largestBatchId,xu(n.yt,e.overlayMutation))}function _m(n,e){const t=e.path.lastSegment();return[n,Ye(e.path.popLast()),t]}function gm(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:Ar(r.readTime),documentKey:Ye(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class CR{getBundleMetadata(e,t){return ym(e).get(t).next((r=>{if(r)return(function(i){return{id:i.bundleId,createTime:Sr(i.createTime),version:i.version}})(r)}))}saveBundleMetadata(e,t){return ym(e).put((function(s){return{bundleId:s.id,createTime:Ar(Ne(s.createTime)),version:s.version}})(t))}getNamedQuery(e,t){return Im(e).get(t).next((r=>{if(r)return(function(i){return{name:i.name,query:Uc(i.bundledQuery),readTime:Sr(i.readTime)}})(r)}))}saveNamedQuery(e,t){return Im(e).put((function(s){return{name:s.name,readTime:Ar(Ne(s.readTime)),bundledQuery:s.bundledQuery}})(t))}}function ym(n){return Oe(n,Pc)}function Im(n){return Oe(n,Nc)}/**
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
 */class Bc{constructor(e,t){this.serializer=e,this.userId=t}static wt(e,t){const r=t.uid||"";return new Bc(e,r)}getOverlay(e,t){return wi(e).get(_m(this.userId,t)).next((r=>r?$l(this.serializer,r):null))}getOverlays(e,t){const r=xt();return S.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,t,r){const s=[];return r.forEach(((i,o)=>{const a=new Mh(t,o);s.push(this.St(e,a))})),S.waitFor(s)}removeOverlaysForBatchId(e,t,r){const s=new Set;t.forEach((o=>s.add(Ye(o.getCollectionPath()))));const i=[];return s.forEach((o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);i.push(wi(e).Z(Eu,a))})),S.waitFor(i)}getOverlaysForCollection(e,t,r){const s=xt(),i=Ye(t),o=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return wi(e).J(Eu,o).next((a=>{for(const l of a){const u=$l(this.serializer,l);s.set(u.getKey(),u)}return s}))}getOverlaysForCollectionGroup(e,t,r,s){const i=xt();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return wi(e).ee({index:hy,range:a},((l,u,d)=>{const f=$l(this.serializer,u);i.size()<s||f.largestBatchId===o?(i.set(f.getKey(),f),o=f.largestBatchId):d.done()})).next((()=>i))}St(e,t){return wi(e).put((function(s,i,o){const[a,l,u]=_m(i,o.mutation.key);return{userId:i,collectionPath:l,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:lo(s.yt,o.mutation)}})(this.serializer,this.userId,t))}}function wi(n){return Oe(n,kc)}/**
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
 */class PR{bt(e){return Oe(e,Sh)}getSessionToken(e){return this.bt(e).get("sessionToken").next((t=>{const r=t?.value;return r?Re.fromUint8Array(r):Re.EMPTY_BYTE_STRING}))}setSessionToken(e,t){return this.bt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class ur{constructor(){}Dt(e,t){this.Ct(e,t),t.vt()}Ct(e,t){if("nullValue"in e)this.Ft(t,5);else if("booleanValue"in e)this.Ft(t,10),t.Mt(e.booleanValue?1:0);else if("integerValue"in e)this.Ft(t,15),t.Mt(Ie(e.integerValue));else if("doubleValue"in e){const r=Ie(e.doubleValue);isNaN(r)?this.Ft(t,13):(this.Ft(t,15),Zi(r)?t.Mt(0):t.Mt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Ft(t,20),typeof r=="string"&&(r=Zt(r)),t.xt(`${r.seconds||""}`),t.Mt(r.nanos||0)}else if("stringValue"in e)this.Ot(e.stringValue,t),this.Nt(t);else if("bytesValue"in e)this.Ft(t,30),t.Bt(en(e.bytesValue)),this.Nt(t);else if("referenceValue"in e)this.Lt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.Ft(t,45),t.Mt(r.latitude||0),t.Mt(r.longitude||0)}else"mapValue"in e?Ay(e)?this.Ft(t,Number.MAX_SAFE_INTEGER):Vc(e)?this.kt(e.mapValue,t):(this.qt(e.mapValue,t),this.Nt(t)):"arrayValue"in e?(this.Qt(e.arrayValue,t),this.Nt(t)):U(19022,{$t:e})}Ot(e,t){this.Ft(t,25),this.Ut(e,t)}Ut(e,t){t.xt(e)}qt(e,t){const r=e.fields||{};this.Ft(t,55);for(const s of Object.keys(r))this.Ot(s,t),this.Ct(r[s],t)}kt(e,t){const r=e.fields||{};this.Ft(t,53);const s=Ss,i=r[s].arrayValue?.values?.length||0;this.Ft(t,15),t.Mt(Ie(i)),this.Ot(s,t),this.Ct(r[s],t)}Qt(e,t){const r=e.values||[];this.Ft(t,50);for(const s of r)this.Ct(s,t)}Lt(e,t){this.Ft(t,37),O.fromName(e).path.forEach((r=>{this.Ft(t,60),this.Ut(r,t)}))}Ft(e,t){e.Mt(t)}Nt(e){e.Mt(2)}}ur.Kt=new ur;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr=255;function NR(n){if(n===0)return 8;let e=0;return n>>4||(e+=4,n<<=4),n>>6||(e+=2,n<<=2),n>>7||(e+=1),e}function Em(n){const e=64-(function(r){let s=0;for(let i=0;i<8;++i){const o=NR(255&r[i]);if(s+=o,o!==8)break}return s})(n);return Math.ceil(e/8)}class kR{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Wt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Gt(r.value),r=t.next();this.zt()}jt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Jt(r.value),r=t.next();this.Ht()}Yt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Gt(r);else if(r<2048)this.Gt(960|r>>>6),this.Gt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Gt(480|r>>>12),this.Gt(128|63&r>>>6),this.Gt(128|63&r);else{const s=t.codePointAt(0);this.Gt(240|s>>>18),this.Gt(128|63&s>>>12),this.Gt(128|63&s>>>6),this.Gt(128|63&s)}}this.zt()}Zt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Jt(r);else if(r<2048)this.Jt(960|r>>>6),this.Jt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Jt(480|r>>>12),this.Jt(128|63&r>>>6),this.Jt(128|63&r);else{const s=t.codePointAt(0);this.Jt(240|s>>>18),this.Jt(128|63&s>>>12),this.Jt(128|63&s>>>6),this.Jt(128|63&s)}}this.Ht()}Xt(e){const t=this.en(e),r=Em(t);this.tn(1+r),this.buffer[this.position++]=255&r;for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=255&t[s]}nn(e){const t=this.en(e),r=Em(t);this.tn(1+r),this.buffer[this.position++]=~(255&r);for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}rn(){this.sn(Hr),this.sn(255)}_n(){this.an(Hr),this.an(255)}reset(){this.position=0}seed(e){this.tn(e.length),this.buffer.set(e,this.position),this.position+=e.length}un(){return this.buffer.slice(0,this.position)}en(e){const t=(function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)})(e),r=!!(128&t[0]);t[0]^=r?255:128;for(let s=1;s<t.length;++s)t[s]^=r?255:0;return t}Gt(e){const t=255&e;t===0?(this.sn(0),this.sn(255)):t===Hr?(this.sn(Hr),this.sn(0)):this.sn(t)}Jt(e){const t=255&e;t===0?(this.an(0),this.an(255)):t===Hr?(this.an(Hr),this.an(0)):this.an(e)}zt(){this.sn(0),this.sn(1)}Ht(){this.an(0),this.an(1)}sn(e){this.tn(1),this.buffer[this.position++]=e}an(e){this.tn(1),this.buffer[this.position++]=~e}tn(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class DR{constructor(e){this.cn=e}Bt(e){this.cn.Wt(e)}xt(e){this.cn.Yt(e)}Mt(e){this.cn.Xt(e)}vt(){this.cn.rn()}}class xR{constructor(e){this.cn=e}Bt(e){this.cn.jt(e)}xt(e){this.cn.Zt(e)}Mt(e){this.cn.nn(e)}vt(){this.cn._n()}}class vi{constructor(){this.cn=new kR,this.ln=new DR(this.cn),this.hn=new xR(this.cn)}seed(e){this.cn.seed(e)}Pn(e){return e===0?this.ln:this.hn}un(){return this.cn.un()}reset(){this.cn.reset()}}/**
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
 */class hr{constructor(e,t,r,s){this.Tn=e,this.In=t,this.En=r,this.dn=s}An(){const e=this.dn.length,t=e===0||this.dn[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.dn,0),t!==e?r.set([0],this.dn.length):++r[r.length-1],new hr(this.Tn,this.In,this.En,r)}Rn(e,t,r){return{indexId:this.Tn,uid:e,arrayValue:Ca(this.En),directionalValue:Ca(this.dn),orderedDocumentKey:Ca(t),documentKey:r.path.toArray()}}Vn(e,t,r){const s=this.Rn(e,t,r);return[s.indexId,s.uid,s.arrayValue,s.directionalValue,s.orderedDocumentKey,s.documentKey]}}function pn(n,e){let t=n.Tn-e.Tn;return t!==0?t:(t=Tm(n.En,e.En),t!==0?t:(t=Tm(n.dn,e.dn),t!==0?t:O.comparator(n.In,e.In)))}function Tm(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}function Ca(n){return sg()?(function(t){let r="";for(let s=0;s<t.length;s++)r+=String.fromCharCode(t[s]);return r})(n):n}function wm(n){return typeof n!="string"?n:(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(n)}class vm{constructor(e){this.mn=new ue(((t,r)=>Ee.comparator(t.field,r.field))),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.fn=e.orderBy,this.gn=[];for(const t of e.filters){const r=t;r.isInequality()?this.mn=this.mn.add(r):this.gn.push(r)}}get pn(){return this.mn.size>1}yn(e){if(q(e.collectionGroup===this.collectionId,49279),this.pn)return!1;const t=gu(e);if(t!==void 0&&!this.wn(t))return!1;const r=ir(e);let s=new Set,i=0,o=0;for(;i<r.length&&this.wn(r[i]);++i)s=s.add(r[i].fieldPath.canonicalString());if(i===r.length)return!0;if(this.mn.size>0){const a=this.mn.getIterator().getNext();if(!s.has(a.field.canonicalString())){const l=r[i];if(!this.Sn(a,l)||!this.bn(this.fn[o++],l))return!1}++i}for(;i<r.length;++i){const a=r[i];if(o>=this.fn.length||!this.bn(this.fn[o++],a))return!1}return!0}Dn(){if(this.pn)return null;let e=new ue(Ee.comparator);const t=[];for(const r of this.gn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new mr(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new mr(r.field,0))}for(const r of this.fn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new mr(r.field,r.dir==="asc"?0:1)));return new Is(Is.UNKNOWN_ID,this.collectionId,t,Es.empty())}wn(e){for(const t of this.gn)if(this.Sn(t,e))return!0;return!1}Sn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}bn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function _I(n){if(q(n instanceof te||n instanceof le,20012),n instanceof te){if(n instanceof xy){const t=n.value.arrayValue?.values?.map((r=>te.create(n.field,"==",r)))||[];return le.create(t,"or")}return n}const e=n.filters.map((t=>_I(t)));return le.create(e,n.op)}function VR(n){if(n.getFilters().length===0)return[];const e=Mu(_I(n));return q(gI(e),7391),Vu(e)||Ou(e)?[e]:e.getFilters()}function Vu(n){return n instanceof te}function Ou(n){return n instanceof le&&Ph(n)}function gI(n){return Vu(n)||Ou(n)||(function(t){if(t instanceof le&&Su(t)){for(const r of t.getFilters())if(!Vu(r)&&!Ou(r))return!1;return!0}return!1})(n)}function Mu(n){if(q(n instanceof te||n instanceof le,34018),n instanceof te)return n;if(n.filters.length===1)return Mu(n.filters[0]);const e=n.filters.map((r=>Mu(r)));let t=le.create(e,n.op);return t=Ja(t),gI(t)?t:(q(t instanceof le,64498),q(Rs(t),40251),q(t.filters.length>1,57927),t.filters.reduce(((r,s)=>Uh(r,s))))}function Uh(n,e){let t;return q(n instanceof te||n instanceof le,38388),q(e instanceof te||e instanceof le,25473),t=n instanceof te?e instanceof te?(function(s,i){return le.create([s,i],"and")})(n,e):Am(n,e):e instanceof te?Am(e,n):(function(s,i){if(q(s.filters.length>0&&i.filters.length>0,48005),Rs(s)&&Rs(i))return Ny(s,i.getFilters());const o=Su(s)?s:i,a=Su(s)?i:s,l=o.filters.map((u=>Uh(u,a)));return le.create(l,"or")})(n,e),Ja(t)}function Am(n,e){if(Rs(e))return Ny(e,n.getFilters());{const t=e.filters.map((r=>Uh(n,r)));return le.create(t,"or")}}function Ja(n){if(q(n instanceof te||n instanceof le,11850),n instanceof te)return n;const e=n.getFilters();if(e.length===1)return Ja(e[0]);if(Cy(n))return n;const t=e.map((s=>Ja(s))),r=[];return t.forEach((s=>{s instanceof te?r.push(s):s instanceof le&&(s.op===n.op?r.push(...s.filters):r.push(s))})),r.length===1?r[0]:le.create(r,n.op)}/**
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
 */class OR{constructor(){this.Cn=new Bh}addToCollectionParentIndex(e,t){return this.Cn.add(t),S.resolve()}getCollectionParents(e,t){return S.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return S.resolve()}deleteFieldIndex(e,t){return S.resolve()}deleteAllFieldIndexes(e){return S.resolve()}createTargetIndexes(e,t){return S.resolve()}getDocumentsMatchingTarget(e,t){return S.resolve(null)}getIndexType(e,t){return S.resolve(0)}getFieldIndexes(e,t){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,t){return S.resolve(ft.min())}getMinOffsetFromCollectionGroup(e,t){return S.resolve(ft.min())}updateCollectionGroup(e,t,r){return S.resolve()}updateIndexEntries(e,t){return S.resolve()}}class Bh{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new ue(J.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ue(J.comparator)).toArray()}}/**
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
 */const Sm="IndexedDbIndexManager",la=new Uint8Array(0);class MR{constructor(e,t){this.databaseId=t,this.vn=new Bh,this.Fn=new rn((r=>Tr(r)),((r,s)=>Ro(r,s))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.vn.has(t)){const r=t.lastSegment(),s=t.popLast();e.addOnCommittedListener((()=>{this.vn.add(t)}));const i={collectionId:r,parent:Ye(s)};return bm(e).put(i)}return S.resolve()}getCollectionParents(e,t){const r=[],s=IDBKeyRange.bound([t,""],[Jg(t),""],!1,!0);return bm(e).J(s).next((i=>{for(const o of i){if(o.collectionId!==t)break;r.push(Dt(o.parent))}return r}))}addFieldIndex(e,t){const r=Ai(e),s=(function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map((l=>[l.fieldPath.canonicalString(),l.kind]))}})(t);delete s.indexId;const i=r.add(s);if(t.indexState){const o=Yr(e);return i.next((a=>{o.put(gm(a,this.uid,t.indexState.sequenceNumber,t.indexState.offset))}))}return i.next()}deleteFieldIndex(e,t){const r=Ai(e),s=Yr(e),i=Qr(e);return r.delete(t.indexId).next((()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}deleteAllFieldIndexes(e){const t=Ai(e),r=Qr(e),s=Yr(e);return t.Z().next((()=>r.Z())).next((()=>s.Z()))}createTargetIndexes(e,t){return S.forEach(this.Mn(t),(r=>this.getIndexType(e,r).next((s=>{if(s===0||s===1){const i=new vm(r).Dn();if(i!=null)return this.addFieldIndex(e,i)}}))))}getDocumentsMatchingTarget(e,t){const r=Qr(e);let s=!0;const i=new Map;return S.forEach(this.Mn(t),(o=>this.xn(e,o).next((a=>{s&&(s=!!a),i.set(o,a)})))).next((()=>{if(s){let o=K();const a=[];return S.forEach(i,((l,u)=>{x(Sm,`Using index ${(function(B){return`id=${B.indexId}|cg=${B.collectionGroup}|f=${B.fields.map((ie=>`${ie.fieldPath}:${ie.kind}`)).join(",")}`})(l)} to execute ${Tr(t)}`);const d=(function(B,ie){const oe=gu(ie);if(oe===void 0)return null;for(const re of Ha(B,oe.fieldPath))switch(re.op){case"array-contains-any":return re.value.arrayValue.values||[];case"array-contains":return[re.value]}return null})(u,l),f=(function(B,ie){const oe=new Map;for(const re of ir(ie))for(const T of Ha(B,re.fieldPath))switch(T.op){case"==":case"in":oe.set(re.fieldPath.canonicalString(),T.value);break;case"not-in":case"!=":return oe.set(re.fieldPath.canonicalString(),T.value),Array.from(oe.values())}return null})(u,l),m=(function(B,ie){const oe=[];let re=!0;for(const T of ir(ie)){const y=T.kind===0?rm(B,T.fieldPath,B.startAt):sm(B,T.fieldPath,B.startAt);oe.push(y.value),re&&(re=y.inclusive)}return new Ln(oe,re)})(u,l),g=(function(B,ie){const oe=[];let re=!0;for(const T of ir(ie)){const y=T.kind===0?sm(B,T.fieldPath,B.endAt):rm(B,T.fieldPath,B.endAt);oe.push(y.value),re&&(re=y.inclusive)}return new Ln(oe,re)})(u,l),A=this.On(l,u,m),N=this.On(l,u,g),k=this.Nn(l,u,f),F=this.Bn(l.indexId,d,A,m.inclusive,N,g.inclusive,k);return S.forEach(F,(G=>r.Y(G,t.limit).next((B=>{B.forEach((ie=>{const oe=O.fromSegments(ie.documentKey);o.has(oe)||(o=o.add(oe),a.push(oe))}))}))))})).next((()=>a))}return S.resolve(null)}))}Mn(e){let t=this.Fn.get(e);return t||(e.filters.length===0?t=[e]:t=VR(le.create(e.filters,"and")).map((r=>Ru(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt))),this.Fn.set(e,t),t)}Bn(e,t,r,s,i,o,a){const l=(t!=null?t.length:1)*Math.max(r.length,i.length),u=l/(t!=null?t.length:1),d=[];for(let f=0;f<l;++f){const m=t?this.Ln(t[f/u]):la,g=this.kn(e,m,r[f%u],s),A=this.qn(e,m,i[f%u],o),N=a.map((k=>this.kn(e,m,k,!0)));d.push(...this.createRange(g,A,N))}return d}kn(e,t,r,s){const i=new hr(e,O.empty(),t,r);return s?i:i.An()}qn(e,t,r,s){const i=new hr(e,O.empty(),t,r);return s?i.An():i}xn(e,t){const r=new vm(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next((i=>{let o=null;for(const a of i)r.yn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o}))}getIndexType(e,t){let r=2;const s=this.Mn(t);return S.forEach(s,(i=>this.xn(e,i).next((o=>{o?r!==0&&o.fields.length<(function(l){let u=new ue(Ee.comparator),d=!1;for(const f of l.filters)for(const m of f.getFlattenedFilters())m.field.isKeyField()||(m.op==="array-contains"||m.op==="array-contains-any"?d=!0:u=u.add(m.field));for(const f of l.orderBy)f.field.isKeyField()||(u=u.add(f.field));return u.size+(d?1:0)})(i)&&(r=1):r=0})))).next((()=>(function(o){return o.limit!==null})(t)&&s.length>1&&r===2?1:r))}Qn(e,t){const r=new vi;for(const s of ir(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=r.Pn(s.kind);ur.Kt.Dt(i,o)}return r.un()}Ln(e){const t=new vi;return ur.Kt.Dt(e,t.Pn(0)),t.un()}$n(e,t){const r=new vi;return ur.Kt.Dt(Er(this.databaseId,t),r.Pn((function(i){const o=ir(i);return o.length===0?0:o[o.length-1].kind})(e))),r.un()}Nn(e,t,r){if(r===null)return[];let s=[];s.push(new vi);let i=0;for(const o of ir(e)){const a=r[i++];for(const l of s)if(this.Un(t,o.fieldPath)&&oo(a))s=this.Kn(s,o,a);else{const u=l.Pn(o.kind);ur.Kt.Dt(a,u)}}return this.Wn(s)}On(e,t,r){return this.Nn(e,t,r.position)}Wn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].un();return t}Kn(e,t,r){const s=[...e],i=[];for(const o of r.arrayValue.values||[])for(const a of s){const l=new vi;l.seed(a.un()),ur.Kt.Dt(o,l.Pn(t.kind)),i.push(l)}return i}Un(e,t){return!!e.filters.find((r=>r instanceof te&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in")))}getFieldIndexes(e,t){const r=Ai(e),s=Yr(e);return(t?r.J(Iu,IDBKeyRange.bound(t,t)):r.J()).next((i=>{const o=[];return S.forEach(i,(a=>s.get([a.indexId,this.uid]).next((l=>{o.push((function(d,f){const m=f?new Es(f.sequenceNumber,new ft(Sr(f.readTime),new O(Dt(f.documentKey)),f.largestBatchId)):Es.empty(),g=d.fields.map((([A,N])=>new mr(Ee.fromServerFormat(A),N)));return new Is(d.indexId,d.collectionGroup,g,m)})(a,l))})))).next((()=>o))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((t=>t.length===0?null:(t.sort(((r,s)=>{const i=r.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:z(r.collectionGroup,s.collectionGroup)})),t[0].collectionGroup)))}updateCollectionGroup(e,t,r){const s=Ai(e),i=Yr(e);return this.Gn(e).next((o=>s.J(Iu,IDBKeyRange.bound(t,t)).next((a=>S.forEach(a,(l=>i.put(gm(l.indexId,this.uid,o,r))))))))}updateIndexEntries(e,t){const r=new Map;return S.forEach(t,((s,i)=>{const o=r.get(s.collectionGroup);return(o?S.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next((a=>(r.set(s.collectionGroup,a),S.forEach(a,(l=>this.zn(e,s,l).next((u=>{const d=this.jn(i,l);return u.isEqual(d)?S.resolve():this.Jn(e,i,l,u,d)})))))))}))}Hn(e,t,r,s){return Qr(e).put(s.Rn(this.uid,this.$n(r,t.key),t.key))}Yn(e,t,r,s){return Qr(e).delete(s.Vn(this.uid,this.$n(r,t.key),t.key))}zn(e,t,r){const s=Qr(e);let i=new ue(pn);return s.ee({index:uy,range:IDBKeyRange.only([r.indexId,this.uid,Ca(this.$n(r,t))])},((o,a)=>{i=i.add(new hr(r.indexId,t,wm(a.arrayValue),wm(a.directionalValue)))})).next((()=>i))}jn(e,t){let r=new ue(pn);const s=this.Qn(t,e);if(s==null)return r;const i=gu(t);if(i!=null){const o=e.data.field(i.fieldPath);if(oo(o))for(const a of o.arrayValue.values||[])r=r.add(new hr(t.indexId,e.key,this.Ln(a),s))}else r=r.add(new hr(t.indexId,e.key,la,s));return r}Jn(e,t,r,s,i){x(Sm,"Updating index entries for document '%s'",t.key);const o=[];return(function(l,u,d,f,m){const g=l.getIterator(),A=u.getIterator();let N=Kr(g),k=Kr(A);for(;N||k;){let F=!1,G=!1;if(N&&k){const B=d(N,k);B<0?G=!0:B>0&&(F=!0)}else N!=null?G=!0:F=!0;F?(f(k),k=Kr(A)):G?(m(N),N=Kr(g)):(N=Kr(g),k=Kr(A))}})(s,i,pn,(a=>{o.push(this.Hn(e,t,r,a))}),(a=>{o.push(this.Yn(e,t,r,a))})),S.waitFor(o)}Gn(e){let t=1;return Yr(e).ee({index:ly,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((r,s,i)=>{i.done(),t=s.sequenceNumber+1})).next((()=>t))}createRange(e,t,r){r=r.sort(((o,a)=>pn(o,a))).filter(((o,a,l)=>!a||pn(o,l[a-1])!==0));const s=[];s.push(e);for(const o of r){const a=pn(o,e),l=pn(o,t);if(a===0)s[0]=e.An();else if(a>0&&l<0)s.push(o),s.push(o.An());else if(l>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.Zn(s[o],s[o+1]))return[];const a=s[o].Vn(this.uid,la,O.empty()),l=s[o+1].Vn(this.uid,la,O.empty());i.push(IDBKeyRange.bound(a,l))}return i}Zn(e,t){return pn(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Rm)}getMinOffset(e,t){return S.mapArray(this.Mn(t),(r=>this.xn(e,r).next((s=>s||U(44426))))).next(Rm)}}function bm(n){return Oe(n,no)}function Qr(n){return Oe(n,Bi)}function Ai(n){return Oe(n,Ah)}function Yr(n){return Oe(n,Ui)}function Rm(n){q(n.length!==0,28825);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const s=n[r].indexState.offset;Th(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new ft(e.readTime,e.documentKey,t)}/**
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
 */const Cm={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},yI=41943040;class Qe{static withCacheSize(e){return new Qe(e,Qe.DEFAULT_COLLECTION_PERCENTILE,Qe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */function II(n,e,t){const r=n.store(It),s=n.store(Ts),i=[],o=IDBKeyRange.only(t.batchId);let a=0;const l=r.ee({range:o},((d,f,m)=>(a++,m.delete())));i.push(l.next((()=>{q(a===1,47070,{batchId:t.batchId})})));const u=[];for(const d of t.mutations){const f=oy(e,d.key.path,t.batchId);i.push(s.delete(f)),u.push(d.key)}return S.waitFor(i).next((()=>u))}function Xa(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw U(14731);e=n.noDocument}return JSON.stringify(e).length}/**
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
 */Qe.DEFAULT_COLLECTION_PERCENTILE=10,Qe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Qe.DEFAULT=new Qe(yI,Qe.DEFAULT_COLLECTION_PERCENTILE,Qe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Qe.DISABLED=new Qe(-1,0,0);class qc{constructor(e,t,r,s){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=s,this.Xn={}}static wt(e,t,r,s){q(e.uid!=="",64387);const i=e.isAuthenticated()?e.uid:"";return new qc(i,t,r,s)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return mn(e).ee({index:dr,range:r},((s,i,o)=>{t=!1,o.done()})).next((()=>t))}addMutationBatch(e,t,r,s){const i=ns(e),o=mn(e);return o.add({}).next((a=>{q(typeof a=="number",49019);const l=new Vh(a,t,r,s),u=(function(g,A,N){const k=N.baseMutations.map((G=>lo(g.yt,G))),F=N.mutations.map((G=>lo(g.yt,G)));return{userId:A,batchId:N.batchId,localWriteTimeMs:N.localWriteTime.toMillis(),baseMutations:k,mutations:F}})(this.serializer,this.userId,l),d=[];let f=new ue(((m,g)=>z(m.canonicalString(),g.canonicalString())));for(const m of s){const g=oy(this.userId,m.key.path,a);f=f.add(m.key.path.popLast()),d.push(o.put(u)),d.push(i.put(g,yb))}return f.forEach((m=>{d.push(this.indexManager.addToCollectionParentIndex(e,m))})),e.addOnCommittedListener((()=>{this.Xn[a]=l.keys()})),S.waitFor(d).next((()=>l))}))}lookupMutationBatch(e,t){return mn(e).get(t).next((r=>r?(q(r.userId===this.userId,48,"Unexpected user for mutation batch",{userId:r.userId,batchId:t}),lr(this.serializer,r)):null))}er(e,t){return this.Xn[t]?S.resolve(this.Xn[t]):this.lookupMutationBatch(e,t).next((r=>{if(r){const s=r.keys();return this.Xn[t]=s,s}return null}))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return mn(e).ee({index:dr,range:s},((o,a,l)=>{a.userId===this.userId&&(q(a.batchId>=r,47524,{tr:r}),i=lr(this.serializer,a)),l.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=Nn;return mn(e).ee({index:dr,range:t,reverse:!0},((s,i,o)=>{r=i.batchId,o.done()})).next((()=>r))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,Nn],[this.userId,Number.POSITIVE_INFINITY]);return mn(e).J(dr,t).next((r=>r.map((s=>lr(this.serializer,s)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=Ta(this.userId,t.path),s=IDBKeyRange.lowerBound(r),i=[];return ns(e).ee({range:s},((o,a,l)=>{const[u,d,f]=o,m=Dt(d);if(u===this.userId&&t.path.isEqual(m))return mn(e).get(f).next((g=>{if(!g)throw U(61480,{nr:o,batchId:f});q(g.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:g.userId,batchId:f}),i.push(lr(this.serializer,g))}));l.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ue(z);const s=[];return t.forEach((i=>{const o=Ta(this.userId,i.path),a=IDBKeyRange.lowerBound(o),l=ns(e).ee({range:a},((u,d,f)=>{const[m,g,A]=u,N=Dt(g);m===this.userId&&i.path.isEqual(N)?r=r.add(A):f.done()}));s.push(l)})),S.waitFor(s).next((()=>this.rr(e,r)))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1,i=Ta(this.userId,r),o=IDBKeyRange.lowerBound(i);let a=new ue(z);return ns(e).ee({range:o},((l,u,d)=>{const[f,m,g]=l,A=Dt(m);f===this.userId&&r.isPrefixOf(A)?A.length===s&&(a=a.add(g)):d.done()})).next((()=>this.rr(e,a)))}rr(e,t){const r=[],s=[];return t.forEach((i=>{s.push(mn(e).get(i).next((o=>{if(o===null)throw U(35274,{batchId:i});q(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:i}),r.push(lr(this.serializer,o))})))})),S.waitFor(s).next((()=>r))}removeMutationBatch(e,t){return II(e.le,this.userId,t).next((r=>(e.addOnCommittedListener((()=>{this.ir(t.batchId)})),S.forEach(r,(s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))))}ir(e){delete this.Xn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return S.resolve();const r=IDBKeyRange.lowerBound((function(o){return[o]})(this.userId)),s=[];return ns(e).ee({range:r},((i,o,a)=>{if(i[0]===this.userId){const l=Dt(i[1]);s.push(l)}else a.done()})).next((()=>{q(s.length===0,56720,{sr:s.map((i=>i.canonicalString()))})}))}))}containsKey(e,t){return EI(e,this.userId,t)}_r(e){return TI(e).get(this.userId).next((t=>t||{userId:this.userId,lastAcknowledgedBatchId:Nn,lastStreamToken:""}))}}function EI(n,e,t){const r=Ta(e,t.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return ns(n).ee({range:i,X:!0},((a,l,u)=>{const[d,f,m]=a;d===e&&f===s&&(o=!0),u.done()})).next((()=>o))}function mn(n){return Oe(n,It)}function ns(n){return Oe(n,Ts)}function TI(n){return Oe(n,eo)}/**
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
 */class br{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new br(0)}static cr(){return new br(-1)}}/**
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
 */class LR{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.lr(e).next((t=>{const r=new br(t.highestTargetId);return t.highestTargetId=r.next(),this.hr(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.lr(e).next((t=>j.fromTimestamp(new ce(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.lr(e).next((t=>t.highestListenSequenceNumber))}setTargetsMetadata(e,t,r){return this.lr(e).next((s=>(s.highestListenSequenceNumber=t,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.hr(e,s))))}addTargetData(e,t){return this.Pr(e,t).next((()=>this.lr(e).next((r=>(r.targetCount+=1,this.Tr(t,r),this.hr(e,r))))))}updateTargetData(e,t){return this.Pr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>Jr(e).delete(t.targetId))).next((()=>this.lr(e))).next((r=>(q(r.targetCount>0,8065),r.targetCount-=1,this.hr(e,r))))}removeTargets(e,t,r){let s=0;const i=[];return Jr(e).ee(((o,a)=>{const l=Vi(a);l.sequenceNumber<=t&&r.get(l.targetId)===null&&(s++,i.push(this.removeTargetData(e,l)))})).next((()=>S.waitFor(i))).next((()=>s))}forEachTarget(e,t){return Jr(e).ee(((r,s)=>{const i=Vi(s);t(i)}))}lr(e){return Pm(e).get(Wa).next((t=>(q(t!==null,2888),t)))}hr(e,t){return Pm(e).put(Wa,t)}Pr(e,t){return Jr(e).put(mI(this.serializer,t))}Tr(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.lr(e).next((t=>t.targetCount))}getTargetData(e,t){const r=Tr(t),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return Jr(e).ee({range:s,index:cy},((o,a,l)=>{const u=Vi(a);Ro(t,u.target)&&(i=u,l.done())})).next((()=>i))}addMatchingKeys(e,t,r){const s=[],i=wn(e);return t.forEach((o=>{const a=Ye(o.path);s.push(i.put({targetId:r,path:a})),s.push(this.referenceDelegate.addReference(e,r,o))})),S.waitFor(s)}removeMatchingKeys(e,t,r){const s=wn(e);return S.forEach(t,(i=>{const o=Ye(i.path);return S.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])}))}removeMatchingKeysForTargetId(e,t){const r=wn(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),s=wn(e);let i=K();return s.ee({range:r,X:!0},((o,a,l)=>{const u=Dt(o[1]),d=new O(u);i=i.add(d)})).next((()=>i))}containsKey(e,t){const r=Ye(t.path),s=IDBKeyRange.bound([r],[Jg(r)],!1,!0);let i=0;return wn(e).ee({index:vh,X:!0,range:s},(([o,a],l,u)=>{o!==0&&(i++,u.done())})).next((()=>i>0))}At(e,t){return Jr(e).get(t).next((r=>r?Vi(r):null))}}function Jr(n){return Oe(n,ws)}function Pm(n){return Oe(n,_r)}function wn(n){return Oe(n,vs)}/**
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
 */const Nm="LruGarbageCollector",wI=1048576;function km([n,e],[t,r]){const s=z(n,t);return s===0?z(e,r):s}class FR{constructor(e){this.Ir=e,this.buffer=new ue(km),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();km(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class vI{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){x(Nm,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){$n(t)?x(Nm,"Ignoring IndexedDB error during garbage collection: ",t):await zn(t)}await this.Vr(3e5)}))}}class UR{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return S.resolve(nt.ce);const r=new FR(t);return this.mr.forEachTarget(e,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(e,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(x("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(Cm)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(x("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Cm):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,s,i,o,a,l,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((f=>(f>this.params.maximumSequenceNumbersToCollect?(x("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),s=this.params.maximumSequenceNumbersToCollect):s=f,o=Date.now(),this.nthSequenceNumber(e,s)))).next((f=>(r=f,a=Date.now(),this.removeTargets(e,r,t)))).next((f=>(i=f,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((f=>(u=Date.now(),Zr()<=Z.DEBUG&&x("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(l-a)+`ms
	Removed ${f} documents in `+(u-l)+`ms
Total Duration: ${u-d}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:f}))))}}function AI(n,e){return new UR(n,e)}/**
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
 */class BR{constructor(e,t){this.db=e,this.garbageCollector=AI(this,t)}gr(e){const t=this.wr(e);return this.db.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}wr(e){let t=0;return this.pr(e,(r=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}pr(e,t){return this.Sr(e,((r,s)=>t(s)))}addReference(e,t,r){return ua(e,r)}removeReference(e,t,r){return ua(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return ua(e,t)}br(e,t){return(function(s,i){let o=!1;return TI(s).te((a=>EI(s,a,i).next((l=>(l&&(o=!0),S.resolve(!l)))))).next((()=>o))})(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.Sr(e,((o,a)=>{if(a<=t){const l=this.br(e,o).next((u=>{if(!u)return i++,r.getEntry(e,o).next((()=>(r.removeEntry(o,j.min()),wn(e).delete((function(f){return[0,Ye(f.path)]})(o)))))}));s.push(l)}})).next((()=>S.waitFor(s))).next((()=>r.apply(e))).next((()=>i))}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return ua(e,t)}Sr(e,t){const r=wn(e);let s,i=nt.ce;return r.ee({index:vh},(([o,a],{path:l,sequenceNumber:u})=>{o===0?(i!==nt.ce&&t(new O(Dt(s)),i),i=u,s=l):i=nt.ce})).next((()=>{i!==nt.ce&&t(new O(Dt(s)),i)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function ua(n,e){return wn(n).put((function(r,s){return{targetId:0,path:Ye(r.path),sequenceNumber:s}})(e,n.currentSequenceNumber))}/**
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
 */class SI{constructor(){this.changes=new rn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ye.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?S.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class qR{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return rr(e).put(r)}removeEntry(e,t,r){return rr(e).delete((function(i,o){const a=i.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Ya(o),a[a.length-1]]})(t,r))}updateMetadata(e,t){return this.getMetadata(e).next((r=>(r.byteSize+=t,this.Dr(e,r))))}getEntry(e,t){let r=ye.newInvalidDocument(t);return rr(e).ee({index:wa,range:IDBKeyRange.only(Si(t))},((s,i)=>{r=this.Cr(t,i)})).next((()=>r))}vr(e,t){let r={size:0,document:ye.newInvalidDocument(t)};return rr(e).ee({index:wa,range:IDBKeyRange.only(Si(t))},((s,i)=>{r={document:this.Cr(t,i),size:Xa(i)}})).next((()=>r))}getEntries(e,t){let r=st();return this.Fr(e,t,((s,i)=>{const o=this.Cr(s,i);r=r.insert(s,o)})).next((()=>r))}Mr(e,t){let r=st(),s=new Ae(O.comparator);return this.Fr(e,t,((i,o)=>{const a=this.Cr(i,o);r=r.insert(i,a),s=s.insert(i,Xa(o))})).next((()=>({documents:r,Or:s})))}Fr(e,t,r){if(t.isEmpty())return S.resolve();let s=new ue(Vm);t.forEach((l=>s=s.add(l)));const i=IDBKeyRange.bound(Si(s.first()),Si(s.last())),o=s.getIterator();let a=o.getNext();return rr(e).ee({index:wa,range:i},((l,u,d)=>{const f=O.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&Vm(a,f)<0;)r(a,null),a=o.getNext();a&&a.isEqual(f)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?d.j(Si(a)):d.done()})).next((()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null}))}getDocumentsMatchingQuery(e,t,r,s,i){const o=t.path,a=[o.popLast().toArray(),o.lastSegment(),Ya(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return rr(e).J(IDBKeyRange.bound(a,l,!0)).next((u=>{i?.incrementDocumentReadCount(u.length);let d=st();for(const f of u){const m=this.Cr(O.fromSegments(f.prefixPath.concat(f.collectionGroup,f.documentId)),f);m.isFoundDocument()&&(Po(t,m)||s.has(m.key))&&(d=d.insert(m.key,m))}return d}))}getAllFromCollectionGroup(e,t,r,s){let i=st();const o=xm(t,r),a=xm(t,ft.max());return rr(e).ee({index:ay,range:IDBKeyRange.bound(o,a,!0)},((l,u,d)=>{const f=this.Cr(O.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);i=i.insert(f.key,f),i.size===s&&d.done()})).next((()=>i))}newChangeBuffer(e){return new GR(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((t=>t.byteSize))}getMetadata(e){return Dm(e).get(yu).next((t=>(q(!!t,20021),t)))}Dr(e,t){return Dm(e).put(yu,t)}Cr(e,t){if(t){const r=RR(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(j.min())))return r}return ye.newInvalidDocument(e)}}function bI(n){return new qR(n)}class GR extends SI{constructor(e,t){super(),this.Nr=e,this.trackRemovals=t,this.Br=new rn((r=>r.toString()),((r,s)=>r.isEqual(s)))}applyChanges(e){const t=[];let r=0,s=new ue(((i,o)=>z(i.canonicalString(),o.canonicalString())));return this.changes.forEach(((i,o)=>{const a=this.Br.get(i);if(t.push(this.Nr.removeEntry(e,i,a.readTime)),o.isValidDocument()){const l=mm(this.Nr.serializer,o);s=s.add(i.path.popLast());const u=Xa(l);r+=u-a.size,t.push(this.Nr.addEntry(e,i,l))}else if(r-=a.size,this.trackRemovals){const l=mm(this.Nr.serializer,o.convertToNoDocument(j.min()));t.push(this.Nr.addEntry(e,i,l))}})),s.forEach((i=>{t.push(this.Nr.indexManager.addToCollectionParentIndex(e,i))})),t.push(this.Nr.updateMetadata(e,r)),S.waitFor(t)}getFromCache(e,t){return this.Nr.vr(e,t).next((r=>(this.Br.set(t,{size:r.size,readTime:r.document.readTime}),r.document)))}getAllFromCache(e,t){return this.Nr.Mr(e,t).next((({documents:r,Or:s})=>(s.forEach(((i,o)=>{this.Br.set(i,{size:o,readTime:r.get(i).readTime})})),r)))}}function Dm(n){return Oe(n,to)}function rr(n){return Oe(n,$a)}function Si(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function xm(n,e){const t=e.documentKey.path.toArray();return[n,Ya(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Vm(n,e){const t=n.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<r.length-2;++i)if(s=z(t[i],r[i]),s)return s;return s=z(t.length,r.length),s||(s=z(t[t.length-2],r[r.length-2]),s||z(t[t.length-1],r[r.length-1]))}/**
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
 */class jR{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class RI{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&ji(r.mutation,s,rt.empty(),ce.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,K()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=K()){const s=xt();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((i=>{let o=Di();return i.forEach(((a,l)=>{o=o.insert(a,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const r=xt();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,K())))}populateOverlays(e,t,r){const s=[];return r.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,a)=>{t.set(o,a)}))}))}computeViews(e,t,r,s){let i=st();const o=Gi(),a=(function(){return Gi()})();return t.forEach(((l,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof sn)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),ji(d.mutation,u,d.mutation.getFieldMask(),ce.now())):o.set(u.key,rt.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((u,d)=>o.set(u,d))),t.forEach(((u,d)=>a.set(u,new jR(d,o.get(u)??null)))),a)))}recalculateAndSaveOverlays(e,t){const r=Gi();let s=new Ae(((o,a)=>o-a)),i=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const a of o)a.keys().forEach((l=>{const u=t.get(l);if(u===null)return;let d=r.get(l)||rt.empty();d=a.applyToLocalView(u,d),r.set(l,d);const f=(s.get(a.batchId)||K()).add(l);s=s.insert(a.batchId,f)}))})).next((()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,d=l.value,f=Gy();d.forEach((m=>{if(!i.has(m)){const g=Qy(t.get(m),r.get(m));g!==null&&f.set(m,g),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return S.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(o){return O.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Nh(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):S.resolve(xt());let a=ys,l=i;return o.next((u=>S.forEach(u,((d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(d)?S.resolve():this.remoteDocumentCache.getEntry(e,d).next((m=>{l=l.insert(d,m)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,l,u,K()))).next((d=>({batchId:a,changes:qy(d)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new O(t)).next((r=>{let s=Di();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=Di();return this.indexManager.getCollectionParents(e,i).next((a=>S.forEach(a,(l=>{const u=(function(f,m){return new nn(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)})(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((d=>{d.forEach(((f,m)=>{o=o.insert(f,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s)))).next((o=>{i.forEach(((l,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,ye.newInvalidDocument(d)))}));let a=Di();return o.forEach(((l,u)=>{const d=i.get(l);d!==void 0&&ji(d.mutation,u,rt.empty(),ce.now()),Po(t,u)&&(a=a.insert(l,u))})),a}))}}/**
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
 */class zR{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return S.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:Ne(s.createTime)}})(t)),S.resolve()}getNamedQuery(e,t){return S.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(s){return{name:s.name,query:Uc(s.bundledQuery),readTime:Ne(s.readTime)}})(t)),S.resolve()}}/**
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
 */class $R{constructor(){this.overlays=new Ae(O.comparator),this.qr=new Map}getOverlay(e,t){return S.resolve(this.overlays.get(t))}getOverlays(e,t){const r=xt();return S.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,i)=>{this.St(e,t,i)})),S.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(r)),S.resolve()}getOverlaysForCollection(e,t,r){const s=xt(),i=t.length+1,o=new O(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return S.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Ae(((u,d)=>u-d));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=xt(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const a=xt(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((u,d)=>a.set(u,d))),!(a.size()>=s)););return S.resolve(a)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Mh(t,r));let i=this.qr.get(t);i===void 0&&(i=K(),this.qr.set(t,i)),this.qr.set(t,i.add(r.key))}}/**
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
 */class WR{constructor(){this.sessionToken=Re.EMPTY_BYTE_STRING}getSessionToken(e){return S.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,S.resolve()}}/**
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
 */class qh{constructor(){this.Qr=new ue(Fe.$r),this.Ur=new ue(Fe.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new Fe(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Gr(new Fe(e,t))}zr(e,t){e.forEach((r=>this.removeReference(r,t)))}jr(e){const t=new O(new J([])),r=new Fe(t,e),s=new Fe(t,e+1),i=[];return this.Ur.forEachInRange([r,s],(o=>{this.Gr(o),i.push(o.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new O(new J([])),r=new Fe(t,e),s=new Fe(t,e+1);let i=K();return this.Ur.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const t=new Fe(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Fe{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return O.comparator(e.key,t.key)||z(e.Yr,t.Yr)}static Kr(e,t){return z(e.Yr,t.Yr)||O.comparator(e.key,t.key)}}/**
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
 */class KR{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new ue(Fe.$r)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Vh(i,t,r,s);this.mutationQueue.push(o);for(const a of s)this.Zr=this.Zr.add(new Fe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,t){return S.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ei(r),i=s<0?0:s;return S.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?Nn:this.tr-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Fe(t,0),s=new Fe(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],(o=>{const a=this.Xr(o.Yr);i.push(a)})),S.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ue(z);return t.forEach((s=>{const i=new Fe(s,0),o=new Fe(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],(a=>{r=r.add(a.Yr)}))})),S.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;O.isDocumentKey(i)||(i=i.child(""));const o=new Fe(new O(i),0);let a=new ue(z);return this.Zr.forEachWhile((l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(l.Yr)),!0)}),o),S.resolve(this.ti(a))}ti(e){const t=[];return e.forEach((r=>{const s=this.Xr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){q(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return S.forEach(t.mutations,(s=>{const i=new Fe(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,t){const r=new Fe(t,0),s=this.Zr.firstAfterOrEqual(r);return S.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class HR{constructor(e){this.ri=e,this.docs=(function(){return new Ae(O.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return S.resolve(r?r.document.mutableCopy():ye.newInvalidDocument(t))}getEntries(e,t){let r=st();return t.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ye.newInvalidDocument(s))})),S.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=st();const o=t.path,a=new O(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:d}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Th(ty(d),r)<=0||(s.has(d.key)||Po(t,d))&&(i=i.insert(d.key,d.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(e,t,r,s){U(9500)}ii(e,t){return S.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new QR(this)}getSize(e){return S.resolve(this.size)}}class QR extends SI{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)})),S.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class YR{constructor(e){this.persistence=e,this.si=new rn((t=>Tr(t)),Ro),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.oi=0,this._i=new qh,this.targetCount=0,this.ai=br.ur()}forEachTarget(e,t){return this.si.forEach(((r,s)=>t(s))),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),S.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new br(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,S.resolve()}updateTargetData(e,t){return this.Pr(t),S.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.si.forEach(((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)})),S.waitFor(i).next((()=>s))}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return S.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),S.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),S.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),S.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return S.resolve(r)}containsKey(e,t){return S.resolve(this._i.containsKey(t))}}/**
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
 */class Gh{constructor(e,t){this.ui={},this.overlays={},this.ci=new nt(0),this.li=!1,this.li=!0,this.hi=new WR,this.referenceDelegate=e(this),this.Pi=new YR(this),this.indexManager=new OR,this.remoteDocumentCache=(function(s){return new HR(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new pI(t),this.Ii=new zR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new $R,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new KR(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){x("MemoryPersistence","Starting transaction:",e);const s=new JR(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(e,t){return S.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,t))))}}class JR extends ry{constructor(e){super(),this.currentSequenceNumber=e}}class Gc{constructor(e){this.persistence=e,this.Ri=new qh,this.Vi=null}static mi(e){return new Gc(e)}get fi(){if(this.Vi)return this.Vi;throw U(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),S.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),S.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>r.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.fi,(r=>{const s=O.fromPath(r);return this.gi(e,s).next((i=>{i||t.removeEntry(s,j.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return S.or([()=>S.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Za{constructor(e,t){this.persistence=e,this.pi=new rn((r=>Ye(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=AI(this,t)}static mi(e,t){return new Za(e,t)}Ei(){}di(e){return S.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}wr(e){let t=0;return this.pr(e,(r=>{t++})).next((()=>t))}pr(e,t){return S.forEach(this.pi,((r,s)=>this.br(e,r,s).next((i=>i?S.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,(o=>this.br(e,o,t).next((a=>{a||(r++,i.removeEntry(o,j.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),S.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),S.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),S.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),S.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Aa(e.data.value)),t}br(e,t,r){return S.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.pi.get(t);return S.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class XR{constructor(e){this.serializer=e}k(e,t,r,s){const i=new Cc("createOrUpgrade",t);r<1&&s>=1&&((function(l){l.createObjectStore(bo)})(e),(function(l){l.createObjectStore(eo,{keyPath:gb}),l.createObjectStore(It,{keyPath:$p,autoIncrement:!0}).createIndex(dr,Wp,{unique:!0}),l.createObjectStore(Ts)})(e),Om(e),(function(l){l.createObjectStore(or)})(e));let o=S.resolve();return r<3&&s>=3&&(r!==0&&((function(l){l.deleteObjectStore(vs),l.deleteObjectStore(ws),l.deleteObjectStore(_r)})(e),Om(e)),o=o.next((()=>(function(l){const u=l.store(_r),d={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:j.min().toTimestamp(),targetCount:0};return u.put(Wa,d)})(i)))),r<4&&s>=4&&(r!==0&&(o=o.next((()=>(function(l,u){return u.store(It).J().next((f=>{l.deleteObjectStore(It),l.createObjectStore(It,{keyPath:$p,autoIncrement:!0}).createIndex(dr,Wp,{unique:!0});const m=u.store(It),g=f.map((A=>m.put(A)));return S.waitFor(g)}))})(e,i)))),o=o.next((()=>{(function(l){l.createObjectStore(As,{keyPath:bb})})(e)}))),r<5&&s>=5&&(o=o.next((()=>this.yi(i)))),r<6&&s>=6&&(o=o.next((()=>((function(l){l.createObjectStore(to)})(e),this.wi(i))))),r<7&&s>=7&&(o=o.next((()=>this.Si(i)))),r<8&&s>=8&&(o=o.next((()=>this.bi(e,i)))),r<9&&s>=9&&(o=o.next((()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)}))),r<10&&s>=10&&(o=o.next((()=>this.Di(i)))),r<11&&s>=11&&(o=o.next((()=>{(function(l){l.createObjectStore(Pc,{keyPath:Rb})})(e),(function(l){l.createObjectStore(Nc,{keyPath:Cb})})(e)}))),r<12&&s>=12&&(o=o.next((()=>{(function(l){const u=l.createObjectStore(kc,{keyPath:Ob});u.createIndex(Eu,Mb,{unique:!1}),u.createIndex(hy,Lb,{unique:!1})})(e)}))),r<13&&s>=13&&(o=o.next((()=>(function(l){const u=l.createObjectStore($a,{keyPath:Ib});u.createIndex(wa,Eb),u.createIndex(ay,Tb)})(e))).next((()=>this.Ci(e,i))).next((()=>e.deleteObjectStore(or)))),r<14&&s>=14&&(o=o.next((()=>this.Fi(e,i)))),r<15&&s>=15&&(o=o.next((()=>(function(l){l.createObjectStore(Ah,{keyPath:Pb,autoIncrement:!0}).createIndex(Iu,Nb,{unique:!1}),l.createObjectStore(Ui,{keyPath:kb}).createIndex(ly,Db,{unique:!1}),l.createObjectStore(Bi,{keyPath:xb}).createIndex(uy,Vb,{unique:!1})})(e)))),r<16&&s>=16&&(o=o.next((()=>{t.objectStore(Ui).clear()})).next((()=>{t.objectStore(Bi).clear()}))),r<17&&s>=17&&(o=o.next((()=>{(function(l){l.createObjectStore(Sh,{keyPath:Fb})})(e)}))),r<18&&s>=18&&sg()&&(o=o.next((()=>{t.objectStore(Ui).clear()})).next((()=>{t.objectStore(Bi).clear()}))),o}wi(e){let t=0;return e.store(or).ee(((r,s)=>{t+=Xa(s)})).next((()=>{const r={byteSize:t};return e.store(to).put(yu,r)}))}yi(e){const t=e.store(eo),r=e.store(It);return t.J().next((s=>S.forEach(s,(i=>{const o=IDBKeyRange.bound([i.userId,Nn],[i.userId,i.lastAcknowledgedBatchId]);return r.J(dr,o).next((a=>S.forEach(a,(l=>{q(l.userId===i.userId,18650,"Cannot process batch from unexpected user",{batchId:l.batchId});const u=lr(this.serializer,l);return II(e,i.userId,u).next((()=>{}))}))))}))))}Si(e){const t=e.store(vs),r=e.store(or);return e.store(_r).get(Wa).next((s=>{const i=[];return r.ee(((o,a)=>{const l=new J(o),u=(function(f){return[0,Ye(f)]})(l);i.push(t.get(u).next((d=>d?S.resolve():(f=>t.put({targetId:0,path:Ye(f),sequenceNumber:s.highestListenSequenceNumber}))(l))))})).next((()=>S.waitFor(i)))}))}bi(e,t){e.createObjectStore(no,{keyPath:Sb});const r=t.store(no),s=new Bh,i=o=>{if(s.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:Ye(l)})}};return t.store(or).ee({X:!0},((o,a)=>{const l=new J(o);return i(l.popLast())})).next((()=>t.store(Ts).ee({X:!0},(([o,a,l],u)=>{const d=Dt(a);return i(d.popLast())}))))}Di(e){const t=e.store(ws);return t.ee(((r,s)=>{const i=Vi(s),o=mI(this.serializer,i);return t.put(o)}))}Ci(e,t){const r=t.store(or),s=[];return r.ee(((i,o)=>{const a=t.store($a),l=(function(f){return f.document?new O(J.fromString(f.document.name).popFirst(5)):f.noDocument?O.fromSegments(f.noDocument.path):f.unknownDocument?O.fromSegments(f.unknownDocument.path):U(36783)})(o).path.toArray(),u={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(a.put(u))})).next((()=>S.waitFor(s)))}Fi(e,t){const r=t.store(It),s=bI(this.serializer),i=new Gh(Gc.mi,this.serializer.yt);return r.J().next((o=>{const a=new Map;return o.forEach((l=>{let u=a.get(l.userId)??K();lr(this.serializer,l).keys().forEach((d=>u=u.add(d))),a.set(l.userId,u)})),S.forEach(a,((l,u)=>{const d=new Ue(u),f=Bc.wt(this.serializer,d),m=i.getIndexManager(d),g=qc.wt(d,this.serializer,m,i.referenceDelegate);return new RI(s,g,f,m).recalculateAndSaveOverlaysForDocumentKeys(new Tu(t,nt.ce),l).next()}))}))}}function Om(n){n.createObjectStore(vs,{keyPath:vb}).createIndex(vh,Ab,{unique:!0}),n.createObjectStore(ws,{keyPath:"targetId"}).createIndex(cy,wb,{unique:!0}),n.createObjectStore(_r)}const _n="IndexedDbPersistence",Wl=18e5,Kl=5e3,Hl="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",CI="main";class jh{constructor(e,t,r,s,i,o,a,l,u,d,f=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Mi=i,this.window=o,this.document=a,this.xi=u,this.Oi=d,this.Ni=f,this.ci=null,this.li=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Bi=null,this.inForeground=!1,this.Li=null,this.ki=null,this.qi=Number.NEGATIVE_INFINITY,this.Qi=m=>Promise.resolve(),!jh.v())throw new D(R.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new BR(this,s),this.$i=t+CI,this.serializer=new pI(l),this.Ui=new Mt(this.$i,this.Ni,new XR(this.serializer)),this.hi=new PR,this.Pi=new LR(this.referenceDelegate,this.serializer),this.remoteDocumentCache=bI(this.serializer),this.Ii=new CR,this.window&&this.window.localStorage?this.Ki=this.window.localStorage:(this.Ki=null,d===!1&&Pe(_n,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Wi().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new D(R.FAILED_PRECONDITION,Hl);return this.Gi(),this.zi(),this.ji(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.Pi.getHighestSequenceNumber(e)))})).then((e=>{this.ci=new nt(e,this.xi)})).then((()=>{this.li=!0})).catch((e=>(this.Ui&&this.Ui.close(),Promise.reject(e))))}Ji(e){return this.Qi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ui.$((async t=>{t.newVersion===null&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Mi.enqueueAndForget((async()=>{this.started&&await this.Wi()})))}Wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>ha(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.Hi(e).next((t=>{t||(this.isPrimary=!1,this.Mi.enqueueRetryable((()=>this.Qi(!1))))}))})).next((()=>this.Yi(e))).next((t=>this.isPrimary&&!t?this.Zi(e).next((()=>!1)):!!t&&this.Xi(e).next((()=>!0)))))).catch((e=>{if($n(e))return x(_n,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return x(_n,"Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Mi.enqueueRetryable((()=>this.Qi(e))),this.isPrimary=e}))}Hi(e){return bi(e).get(Wr).next((t=>S.resolve(this.es(t))))}ts(e){return ha(e).delete(this.clientId)}async ns(){if(this.isPrimary&&!this.rs(this.qi,Wl)){this.qi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(t=>{const r=Oe(t,As);return r.J().next((s=>{const i=this.ss(s,Wl),o=s.filter((a=>i.indexOf(a)===-1));return S.forEach(o,(a=>r.delete(a.clientId))).next((()=>o))}))})).catch((()=>[]));if(this.Ki)for(const t of e)this.Ki.removeItem(this._s(t.clientId))}}ji(){this.ki=this.Mi.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.Wi().then((()=>this.ns())).then((()=>this.ji()))))}es(e){return!!e&&e.ownerId===this.clientId}Yi(e){return this.Oi?S.resolve(!0):bi(e).get(Wr).next((t=>{if(t!==null&&this.rs(t.leaseTimestampMs,Kl)&&!this.us(t.ownerId)){if(this.es(t)&&this.networkEnabled)return!0;if(!this.es(t)){if(!t.allowTabSynchronization)throw new D(R.FAILED_PRECONDITION,Hl);return!1}}return!(!this.networkEnabled||!this.inForeground)||ha(e).J().next((r=>this.ss(r,Kl).find((s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,a=this.networkEnabled===s.networkEnabled;if(i||o&&a)return!0}return!1}))===void 0))})).next((t=>(this.isPrimary!==t&&x(_n,`Client ${t?"is":"is not"} eligible for a primary lease.`),t)))}async shutdown(){this.li=!1,this.cs(),this.ki&&(this.ki.cancel(),this.ki=null),this.ls(),this.hs(),await this.Ui.runTransaction("shutdown","readwrite",[bo,As],(e=>{const t=new Tu(e,nt.ce);return this.Zi(t).next((()=>this.ts(t)))})),this.Ui.close(),this.Ps()}ss(e,t){return e.filter((r=>this.rs(r.updateTimeMs,t)&&!this.us(r.clientId)))}Ts(){return this.runTransaction("getActiveClients","readonly",(e=>ha(e).J().next((t=>this.ss(t,Wl).map((r=>r.clientId))))))}get started(){return this.li}getGlobalsCache(){return this.hi}getMutationQueue(e,t){return qc.wt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new MR(e,this.serializer.yt.databaseId)}getDocumentOverlayCache(e){return Bc.wt(this.serializer,e)}getBundleCache(){return this.Ii}runTransaction(e,t,r){x(_n,"Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=(function(l){return l===18?qb:l===17?my:l===16?Bb:l===15?bh:l===14?py:l===13?fy:l===12?Ub:l===11?dy:void U(60245)})(this.Ni);let o;return this.Ui.runTransaction(e,s,i,(a=>(o=new Tu(a,this.ci?this.ci.next():nt.ce),t==="readwrite-primary"?this.Hi(o).next((l=>!!l||this.Yi(o))).next((l=>{if(!l)throw Pe(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Mi.enqueueRetryable((()=>this.Qi(!1))),new D(R.FAILED_PRECONDITION,ny);return r(o)})).next((l=>this.Xi(o).next((()=>l)))):this.Is(o).next((()=>r(o)))))).then((a=>(o.raiseOnCommittedEvent(),a)))}Is(e){return bi(e).get(Wr).next((t=>{if(t!==null&&this.rs(t.leaseTimestampMs,Kl)&&!this.us(t.ownerId)&&!this.es(t)&&!(this.Oi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new D(R.FAILED_PRECONDITION,Hl)}))}Xi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return bi(e).put(Wr,t)}static v(){return Mt.v()}Zi(e){const t=bi(e);return t.get(Wr).next((r=>this.es(r)?(x(_n,"Releasing primary lease."),t.delete(Wr)):S.resolve()))}rs(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(Pe(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Gi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Li=()=>{this.Mi.enqueueAndForget((()=>(this.inForeground=this.document.visibilityState==="visible",this.Wi())))},this.document.addEventListener("visibilitychange",this.Li),this.inForeground=this.document.visibilityState==="visible")}ls(){this.Li&&(this.document.removeEventListener("visibilitychange",this.Li),this.Li=null)}zi(){typeof this.window?.addEventListener=="function"&&(this.Bi=()=>{this.cs();const e=/(?:Version|Mobile)\/1[456]/;rg()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.Mi.enterRestrictedMode(!0),this.Mi.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Bi))}hs(){this.Bi&&(this.window.removeEventListener("pagehide",this.Bi),this.Bi=null)}us(e){try{const t=this.Ki?.getItem(this._s(e))!==null;return x(_n,`Client '${e}' ${t?"is":"is not"} zombied in LocalStorage`),t}catch(t){return Pe(_n,"Failed to get zombied client id.",t),!1}}cs(){if(this.Ki)try{this.Ki.setItem(this._s(this.clientId),String(Date.now()))}catch(e){Pe("Failed to set zombie client id.",e)}}Ps(){if(this.Ki)try{this.Ki.removeItem(this._s(this.clientId))}catch{}}_s(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function bi(n){return Oe(n,bo)}function ha(n){return Oe(n,As)}function zh(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class $h{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=s}static As(e,t){let r=K(),s=K();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new $h(e,t.fromCache,r,s)}}/**
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
 */class ZR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class PI{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return rg()?8:sy(Ve())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ys(e,t).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ws(e,t,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new ZR;return this.Ss(e,t,o).next((a=>{if(i.result=a,this.Vs)return this.bs(e,t,o,a.size)}))})).next((()=>i.result))}bs(e,t,r,s){return r.documentReadCount<this.fs?(Zr()<=Z.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",es(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),S.resolve()):(Zr()<=Z.DEBUG&&x("QueryEngine","Query:",es(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Zr()<=Z.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",es(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Je(t))):S.resolve())}ys(e,t){if(im(t))return S.resolve(null);let r=Je(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=Qa(t,null,"F"),r=Je(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=K(...i);return this.ps.getDocuments(e,o).next((a=>this.indexManager.getMinOffset(e,r).next((l=>{const u=this.Ds(t,a);return this.Cs(t,u,o,l.readTime)?this.ys(e,Qa(t,null,"F")):this.vs(e,u,t,l)}))))})))))}ws(e,t,r,s){return im(t)||s.isEqual(j.min())?S.resolve(null):this.ps.getDocuments(e,r).next((i=>{const o=this.Ds(t,i);return this.Cs(t,o,r,s)?S.resolve(null):(Zr()<=Z.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),es(t)),this.vs(e,o,t,ey(s,ys)).next((a=>a)))}))}Ds(e,t){let r=new ue(Uy(e));return t.forEach(((s,i)=>{Po(e,i)&&(r=r.add(i))})),r}Cs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,t,r){return Zr()<=Z.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",es(t)),this.ps.getDocumentsMatchingQuery(e,t,ft.min(),r)}vs(e,t,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next((i=>(t.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
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
 */const Wh="LocalStore",eC=3e8;class tC{constructor(e,t,r,s){this.persistence=e,this.Fs=t,this.serializer=s,this.Ms=new Ae(z),this.xs=new rn((i=>Tr(i)),Ro),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new RI(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function NI(n,e,t,r){return new tC(n,e,t,r)}async function kI(n,e){const t=M(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,t.Bs(e),t.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],a=[];let l=K();for(const u of s){o.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}for(const u of i){a.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}return t.localDocuments.getDocuments(r,l).next((u=>({Ls:u,removedBatchIds:o,addedBatchIds:a})))}))}))}function nC(n,e){const t=M(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(a,l,u,d){const f=u.batch,m=f.keys();let g=S.resolve();return m.forEach((A=>{g=g.next((()=>d.getEntry(l,A))).next((N=>{const k=u.docVersions.get(A);q(k!==null,48541),N.version.compareTo(k)<0&&(f.applyToRemoteDocument(N,u),N.isValidDocument()&&(N.setReadTime(u.commitVersion),d.addEntry(N)))}))})),g.next((()=>a.mutationQueue.removeMutationBatch(l,f)))})(t,r,e,i).next((()=>i.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(a){let l=K();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function DI(n){const e=M(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function rC(n,e){const t=M(n),r=e.snapshotVersion;let s=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=t.Ns.newChangeBuffer({trackRemovals:!0});s=t.Ms;const a=[];e.targetChanges.forEach(((d,f)=>{const m=s.get(f);if(!m)return;a.push(t.Pi.removeMatchingKeys(i,d.removedDocuments,f).next((()=>t.Pi.addMatchingKeys(i,d.addedDocuments,f))));let g=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?g=g.withResumeToken(Re.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):d.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(d.resumeToken,r)),s=s.insert(f,g),(function(N,k,F){return N.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=eC?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0})(m,g,d)&&a.push(t.Pi.updateTargetData(i,g))}));let l=st(),u=K();if(e.documentUpdates.forEach((d=>{e.resolvedLimboDocuments.has(d)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))})),a.push(xI(i,o,e.documentUpdates).next((d=>{l=d.ks,u=d.qs}))),!r.isEqual(j.min())){const d=t.Pi.getLastRemoteSnapshotVersion(i).next((f=>t.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r)));a.push(d)}return S.waitFor(a).next((()=>o.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,l,u))).next((()=>l))})).then((i=>(t.Ms=s,i)))}function xI(n,e,t){let r=K(),s=K();return t.forEach((i=>r=r.add(i))),e.getEntries(n,r).next((i=>{let o=st();return t.forEach(((a,l)=>{const u=i.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(j.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):x(Wh,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)})),{ks:o,qs:s}}))}function sC(n,e){const t=M(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Nn),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function ks(n,e){const t=M(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.Pi.getTargetData(r,e).next((i=>i?(s=i,S.resolve(s)):t.Pi.allocateTargetId(r).next((o=>(s=new Wt(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r}))}async function Ds(n,e,t){const r=M(n),s=r.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!$n(o))throw o;x(Wh,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function ec(n,e,t){const r=M(n);let s=j.min(),i=K();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,u,d){const f=M(l),m=f.xs.get(d);return m!==void 0?S.resolve(f.Ms.get(m)):f.Pi.getTargetData(u,d)})(r,o,Je(e)).next((a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,a.targetId).next((l=>{i=l}))})).next((()=>r.Fs.getDocumentsMatchingQuery(o,e,t?s:j.min(),t?i:K()))).next((a=>(MI(r,Fy(e),a),{documents:a,Qs:i})))))}function VI(n,e){const t=M(n),r=M(t.Pi),s=t.Ms.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",(i=>r.At(i,e).next((o=>o?o.target:null))))}function OI(n,e){const t=M(n),r=t.Os.get(e)||j.min();return t.persistence.runTransaction("Get new document changes","readonly",(s=>t.Ns.getAllFromCollectionGroup(s,e,ey(r,ys),Number.MAX_SAFE_INTEGER))).then((s=>(MI(t,e,s),s)))}function MI(n,e,t){let r=n.Os.get(e)||j.min();t.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),n.Os.set(e,r)}async function iC(n,e,t,r){const s=M(n);let i=K(),o=st();for(const u of t){const d=e.$s(u.metadata.name);u.document&&(i=i.add(d));const f=e.Us(u);f.setReadTime(e.Ks(u.metadata.readTime)),o=o.insert(d,f)}const a=s.Ns.newChangeBuffer({trackRemovals:!0}),l=await ks(s,(function(d){return Je(Ks(J.fromString(`__bundle__/docs/${d}`)))})(r));return s.persistence.runTransaction("Apply bundle documents","readwrite",(u=>xI(u,a,o).next((d=>(a.apply(u),d))).next((d=>s.Pi.removeMatchingKeysForTargetId(u,l.targetId).next((()=>s.Pi.addMatchingKeys(u,i,l.targetId))).next((()=>s.localDocuments.getLocalViewOfDocuments(u,d.ks,d.qs))).next((()=>d.ks))))))}async function oC(n,e,t=K()){const r=await ks(n,Je(Uc(e.bundledQuery))),s=M(n);return s.persistence.runTransaction("Save named query","readwrite",(i=>{const o=Ne(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return s.Ii.saveNamedQuery(i,e);const a=r.withResumeToken(Re.EMPTY_BYTE_STRING,o);return s.Ms=s.Ms.insert(a.targetId,a),s.Pi.updateTargetData(i,a).next((()=>s.Pi.removeMatchingKeysForTargetId(i,r.targetId))).next((()=>s.Pi.addMatchingKeys(i,t,r.targetId))).next((()=>s.Ii.saveNamedQuery(i,e)))}))}/**
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
 */const LI="firestore_clients";function Mm(n,e){return`${LI}_${n}_${e}`}const FI="firestore_mutations";function Lm(n,e,t){let r=`${FI}_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}const UI="firestore_targets";function Ql(n,e){return`${UI}_${n}_${e}`}/**
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
 */const Nt="SharedClientState";class tc{constructor(e,t,r,s){this.user=e,this.batchId=t,this.state=r,this.error=s}static Ws(e,t,r){const s=JSON.parse(r);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new D(s.error.code,s.error.message))),o?new tc(e,t,s.state,i):(Pe(Nt,`Failed to parse mutation state for ID '${t}': ${r}`),null)}Gs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class zi{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Ws(e,t){const r=JSON.parse(t);let s,i=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return i&&r.error&&(i=typeof r.error.message=="string"&&typeof r.error.code=="string",i&&(s=new D(r.error.code,r.error.message))),i?new zi(e,r.state,s):(Pe(Nt,`Failed to parse target state for ID '${e}': ${t}`),null)}Gs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class nc{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ws(e,t){const r=JSON.parse(t);let s=typeof r=="object"&&r.activeTargetIds instanceof Array,i=kh();for(let o=0;s&&o<r.activeTargetIds.length;++o)s=iy(r.activeTargetIds[o]),i=i.add(r.activeTargetIds[o]);return s?new nc(e,i):(Pe(Nt,`Failed to parse client data for instance '${e}': ${t}`),null)}}class Kh{constructor(e,t){this.clientId=e,this.onlineState=t}static Ws(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Kh(t.clientId,t.onlineState):(Pe(Nt,`Failed to parse online state: ${e}`),null)}}class Lu{constructor(){this.activeTargetIds=kh()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Yl{constructor(e,t,r,s,i){this.window=e,this.Mi=t,this.persistenceKey=r,this.Js=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Hs=this.Ys.bind(this),this.Zs=new Ae(z),this.started=!1,this.Xs=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.eo=Mm(this.persistenceKey,this.Js),this.no=(function(l){return`firestore_sequence_number_${l}`})(this.persistenceKey),this.Zs=this.Zs.insert(this.Js,new Lu),this.ro=new RegExp(`^${LI}_${o}_([^_]*)$`),this.io=new RegExp(`^${FI}_${o}_(\\d+)(?:_(.*))?$`),this.so=new RegExp(`^${UI}_${o}_(\\d+)$`),this.oo=(function(l){return`firestore_online_state_${l}`})(this.persistenceKey),this._o=(function(l){return`firestore_bundle_loaded_v2_${l}`})(this.persistenceKey),this.window.addEventListener("storage",this.Hs)}static v(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Ts();for(const r of e){if(r===this.Js)continue;const s=this.getItem(Mm(this.persistenceKey,r));if(s){const i=nc.Ws(r,s);i&&(this.Zs=this.Zs.insert(i.clientId,i))}}this.ao();const t=this.storage.getItem(this.oo);if(t){const r=this.uo(t);r&&this.co(r)}for(const r of this.Xs)this.Ys(r);this.Xs=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.no,JSON.stringify(e))}getAllActiveQueryTargets(){return this.lo(this.Zs)}isActiveQueryTarget(e){let t=!1;return this.Zs.forEach(((r,s)=>{s.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.ho(e,"pending")}updateMutationState(e,t,r){this.ho(e,t,r),this.Po(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(Ql(this.persistenceKey,e));if(s){const i=zi.Ws(e,s);i&&(r=i.state)}}return t&&this.To.zs(e),this.ao(),r}removeLocalQueryTarget(e){this.To.js(e),this.ao()}isLocalQueryTarget(e){return this.To.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Ql(this.persistenceKey,e))}updateQueryState(e,t,r){this.Io(e,t,r)}handleUserChange(e,t,r){t.forEach((s=>{this.Po(s)})),this.currentUser=e,r.forEach((s=>{this.addPendingMutation(s)}))}setOnlineState(e){this.Eo(e)}notifyBundleLoaded(e){this.Ao(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Hs),this.removeItem(this.eo),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return x(Nt,"READ",e,t),t}setItem(e,t){x(Nt,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){x(Nt,"REMOVE",e),this.storage.removeItem(e)}Ys(e){const t=e;if(t.storageArea===this.storage){if(x(Nt,"EVENT",t.key,t.newValue),t.key===this.eo)return void Pe("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Mi.enqueueRetryable((async()=>{if(this.started){if(t.key!==null){if(this.ro.test(t.key)){if(t.newValue==null){const r=this.Ro(t.key);return this.Vo(r,null)}{const r=this.mo(t.key,t.newValue);if(r)return this.Vo(r.clientId,r)}}else if(this.io.test(t.key)){if(t.newValue!==null){const r=this.fo(t.key,t.newValue);if(r)return this.po(r)}}else if(this.so.test(t.key)){if(t.newValue!==null){const r=this.yo(t.key,t.newValue);if(r)return this.wo(r)}}else if(t.key===this.oo){if(t.newValue!==null){const r=this.uo(t.newValue);if(r)return this.co(r)}}else if(t.key===this.no){const r=(function(i){let o=nt.ce;if(i!=null)try{const a=JSON.parse(i);q(typeof a=="number",30636,{So:i}),o=a}catch(a){Pe(Nt,"Failed to read sequence number from WebStorage",a)}return o})(t.newValue);r!==nt.ce&&this.sequenceNumberHandler(r)}else if(t.key===this._o){const r=this.bo(t.newValue);await Promise.all(r.map((s=>this.syncEngine.Do(s))))}}}else this.Xs.push(t)}))}}get To(){return this.Zs.get(this.Js)}ao(){this.setItem(this.eo,this.To.Gs())}ho(e,t,r){const s=new tc(this.currentUser,e,t,r),i=Lm(this.persistenceKey,this.currentUser,e);this.setItem(i,s.Gs())}Po(e){const t=Lm(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Eo(e){const t={clientId:this.Js,onlineState:e};this.storage.setItem(this.oo,JSON.stringify(t))}Io(e,t,r){const s=Ql(this.persistenceKey,e),i=new zi(e,t,r);this.setItem(s,i.Gs())}Ao(e){const t=JSON.stringify(Array.from(e));this.setItem(this._o,t)}Ro(e){const t=this.ro.exec(e);return t?t[1]:null}mo(e,t){const r=this.Ro(e);return nc.Ws(r,t)}fo(e,t){const r=this.io.exec(e),s=Number(r[1]),i=r[2]!==void 0?r[2]:null;return tc.Ws(new Ue(i),s,t)}yo(e,t){const r=this.so.exec(e),s=Number(r[1]);return zi.Ws(s,t)}uo(e){return Kh.Ws(e)}bo(e){return JSON.parse(e)}async po(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Co(e.batchId,e.state,e.error);x(Nt,`Ignoring mutation for non-active user ${e.user.uid}`)}wo(e){return this.syncEngine.vo(e.targetId,e.state,e.error)}Vo(e,t){const r=t?this.Zs.insert(e,t):this.Zs.remove(e),s=this.lo(this.Zs),i=this.lo(r),o=[],a=[];return i.forEach((l=>{s.has(l)||o.push(l)})),s.forEach((l=>{i.has(l)||a.push(l)})),this.syncEngine.Fo(o,a).then((()=>{this.Zs=r}))}co(e){this.Zs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}lo(e){let t=kh();return e.forEach(((r,s)=>{t=t.unionWith(s.activeTargetIds)})),t}}class BI{constructor(){this.Mo=new Lu,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Lu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class aC{Oo(e){}shutdown(){}}/**
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
 */const Fm="ConnectivityMonitor";class Um{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){x(Fm,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){x(Fm,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let da=null;function Fu(){return da===null?da=(function(){return 268435456+Math.round(2147483648*Math.random())})():da++,"0x"+da.toString(16)}/**
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
 */const Jl="RestConnection",cC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class lC{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===so?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,t,r,s,i){const o=Fu(),a=this.zo(e,t.toUriEncodedString());x(Jl,`Sending RPC '${e}' ${o}:`,a,r);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:u}=new URL(a),d=bt(u);return this.Jo(e,a,l,r,d).then((f=>(x(Jl,`Received RPC '${e}' ${o}: `,f),f)),(f=>{throw yt(Jl,`RPC '${e}' ${o} failed with error: `,f,"url: ",a,"request:",r),f}))}Ho(e,t,r,s,i,o){return this.Go(e,t,r,s,i)}jo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ws})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}zo(e,t){const r=cC[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
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
 */class uC{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const He="WebChannelConnection";class hC extends lC{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,s,i){const o=Fu();return new Promise(((a,l)=>{const u=new zg;u.setWithCredentials(!0),u.listenOnce($g.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case Ea.NO_ERROR:const f=u.getResponseJson();x(He,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),a(f);break;case Ea.TIMEOUT:x(He,`RPC '${e}' ${o} timed out`),l(new D(R.DEADLINE_EXCEEDED,"Request time out"));break;case Ea.HTTP_ERROR:const m=u.getStatus();if(x(He,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const A=g?.error;if(A&&A.status&&A.message){const N=(function(F){const G=F.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(G)>=0?G:R.UNKNOWN})(A.status);l(new D(N,A.message))}else l(new D(R.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new D(R.UNAVAILABLE,"Connection failed."));break;default:U(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{x(He,`RPC '${e}' ${o} completed.`)}}));const d=JSON.stringify(s);x(He,`RPC '${e}' ${o} sending request:`,s),u.send(t,"POST",d,r,15)}))}T_(e,t,r){const s=Fu(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Hg(),a=Kg(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const d=i.join("");x(He,`Creating RPC '${e}' stream ${s}: ${d}`,l);const f=o.createWebChannel(d,l);this.I_(f);let m=!1,g=!1;const A=new uC({Yo:k=>{g?x(He,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(m||(x(He,`Opening RPC '${e}' stream ${s} transport.`),f.open(),m=!0),x(He,`RPC '${e}' stream ${s} sending:`,k),f.send(k))},Zo:()=>f.close()}),N=(k,F,G)=>{k.listen(F,(B=>{try{G(B)}catch(ie){setTimeout((()=>{throw ie}),0)}}))};return N(f,ki.EventType.OPEN,(()=>{g||(x(He,`RPC '${e}' stream ${s} transport opened.`),A.o_())})),N(f,ki.EventType.CLOSE,(()=>{g||(g=!0,x(He,`RPC '${e}' stream ${s} transport closed`),A.a_(),this.E_(f))})),N(f,ki.EventType.ERROR,(k=>{g||(g=!0,yt(He,`RPC '${e}' stream ${s} transport errored. Name:`,k.name,"Message:",k.message),A.a_(new D(R.UNAVAILABLE,"The operation could not be completed")))})),N(f,ki.EventType.MESSAGE,(k=>{if(!g){const F=k.data[0];q(!!F,16349);const G=F,B=G?.error||G[0]?.error;if(B){x(He,`RPC '${e}' stream ${s} received error:`,B);const ie=B.status;let oe=(function(y){const E=ke[y];if(E!==void 0)return Zy(E)})(ie),re=B.message;oe===void 0&&(oe=R.INTERNAL,re="Unknown error status: "+ie+" with message "+B.message),g=!0,A.a_(new D(oe,re)),f.close()}else x(He,`RPC '${e}' stream ${s} received:`,F),A.u_(F)}})),N(a,Wg.STAT_EVENT,(k=>{k.stat===fu.PROXY?x(He,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===fu.NOPROXY&&x(He,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{A.__()}),0),A}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}/**
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
 */function qI(){return typeof window<"u"?window:null}function Pa(){return typeof document<"u"?document:null}/**
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
 */function Mr(n){return new gR(n,!0)}/**
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
 */class Hh{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&x("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Bm="PersistentStream";class GI{constructor(e,t,r,s,i,o,a,l){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Hh(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===R.RESOURCE_EXHAUSTED?(Pe(t.toString()),Pe("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===t&&this.G_(r,s)}),(r=>{e((()=>{const s=new D(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return x(Bm,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(x(Bm,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class dC extends GI{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=ER(this.serializer,e),r=(function(i){if(!("targetChange"in i))return j.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?j.min():o.readTime?Ne(o.readTime):j.min()})(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=Du(this.serializer),t.addTarget=(function(i,o){let a;const l=o.target;if(a=Ka(l)?{documents:cI(i,l)}:{query:Fc(i,l).ft},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=rI(i,o.resumeToken);const u=Nu(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(j.min())>0){a.readTime=Ns(i,o.snapshotVersion.toTimestamp());const u=Nu(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a})(this.serializer,e);const r=wR(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=Du(this.serializer),t.removeTarget=e,this.q_(t)}}class fC extends GI{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return q(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,q(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){q(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=TR(e.writeResults,e.commitTime),r=Ne(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=Du(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>lo(this.serializer,r)))};this.q_(t)}}/**
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
 */class pC{}class mC extends pC{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new D(R.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Go(e,ku(t,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new D(R.UNKNOWN,i.toString())}))}Ho(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Ho(e,ku(t,r),s,o,a,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new D(R.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class _C{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Pe(t),this.aa=!1):x("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Rr="RemoteStore";class gC{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((o=>{r.enqueueAndForget((async()=>{Kn(this)&&(x(Rr,"Restarting streams for network reachability change."),await(async function(l){const u=M(l);u.Ea.add(4),await Ys(u),u.Ra.set("Unknown"),u.Ea.delete(4),await xo(u)})(this))}))})),this.Ra=new _C(r,s)}}async function xo(n){if(Kn(n))for(const e of n.da)await e(!0)}async function Ys(n){for(const e of n.da)await e(!1)}function jc(n,e){const t=M(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Jh(t)?Yh(t):Xs(t).O_()&&Qh(t,e))}function xs(n,e){const t=M(n),r=Xs(t);t.Ia.delete(e),r.O_()&&jI(t,e),t.Ia.size===0&&(r.O_()?r.L_():Kn(t)&&t.Ra.set("Unknown"))}function Qh(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(j.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Xs(n).Y_(e)}function jI(n,e){n.Va.Ue(e),Xs(n).Z_(e)}function Yh(n){n.Va=new fR({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Xs(n).start(),n.Ra.ua()}function Jh(n){return Kn(n)&&!Xs(n).x_()&&n.Ia.size>0}function Kn(n){return M(n).Ea.size===0}function zI(n){n.Va=void 0}async function yC(n){n.Ra.set("Online")}async function IC(n){n.Ia.forEach(((e,t)=>{Qh(n,e)}))}async function EC(n,e){zI(n),Jh(n)?(n.Ra.ha(e),Yh(n)):n.Ra.set("Unknown")}async function TC(n,e,t){if(n.Ra.set("Online"),e instanceof nI&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const a of i.targetIds)s.Ia.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.Ia.delete(a),s.Va.removeTarget(a))})(n,e)}catch(r){x(Rr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await rc(n,r)}else if(e instanceof Ra?n.Va.Ze(e):e instanceof tI?n.Va.st(e):n.Va.tt(e),!t.isEqual(j.min()))try{const r=await DI(n.localStore);t.compareTo(r)>=0&&await(function(i,o){const a=i.Va.Tt(o);return a.targetChanges.forEach(((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.Ia.get(u);d&&i.Ia.set(u,d.withResumeToken(l.resumeToken,o))}})),a.targetMismatches.forEach(((l,u)=>{const d=i.Ia.get(l);if(!d)return;i.Ia.set(l,d.withResumeToken(Re.EMPTY_BYTE_STRING,d.snapshotVersion)),jI(i,l);const f=new Wt(d.target,l,u,d.sequenceNumber);Qh(i,f)})),i.remoteSyncer.applyRemoteEvent(a)})(n,t)}catch(r){x(Rr,"Failed to raise snapshot:",r),await rc(n,r)}}async function rc(n,e,t){if(!$n(e))throw e;n.Ea.add(1),await Ys(n),n.Ra.set("Offline"),t||(t=()=>DI(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{x(Rr,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await xo(n)}))}function $I(n,e){return e().catch((t=>rc(n,t,e)))}async function Js(n){const e=M(n),t=Fn(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Nn;for(;wC(e);)try{const s=await sC(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,vC(e,s)}catch(s){await rc(e,s)}WI(e)&&KI(e)}function wC(n){return Kn(n)&&n.Ta.length<10}function vC(n,e){n.Ta.push(e);const t=Fn(n);t.O_()&&t.X_&&t.ea(e.mutations)}function WI(n){return Kn(n)&&!Fn(n).x_()&&n.Ta.length>0}function KI(n){Fn(n).start()}async function AC(n){Fn(n).ra()}async function SC(n){const e=Fn(n);for(const t of n.Ta)e.ea(t.mutations)}async function bC(n,e,t){const r=n.Ta.shift(),s=Oh.from(r,e,t);await $I(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Js(n)}async function RC(n,e){e&&Fn(n).X_&&await(async function(r,s){if((function(o){return Xy(o)&&o!==R.ABORTED})(s.code)){const i=r.Ta.shift();Fn(r).B_(),await $I(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Js(r)}})(n,e),WI(n)&&KI(n)}async function qm(n,e){const t=M(n);t.asyncQueue.verifyOperationInProgress(),x(Rr,"RemoteStore received new credentials");const r=Kn(t);t.Ea.add(3),await Ys(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await xo(t)}async function Uu(n,e){const t=M(n);e?(t.Ea.delete(2),await xo(t)):e||(t.Ea.add(2),await Ys(t),t.Ra.set("Unknown"))}function Xs(n){return n.ma||(n.ma=(function(t,r,s){const i=M(t);return i.sa(),new dC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Xo:yC.bind(null,n),t_:IC.bind(null,n),r_:EC.bind(null,n),H_:TC.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),Jh(n)?Yh(n):n.Ra.set("Unknown")):(await n.ma.stop(),zI(n))}))),n.ma}function Fn(n){return n.fa||(n.fa=(function(t,r,s){const i=M(t);return i.sa(),new fC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:AC.bind(null,n),r_:RC.bind(null,n),ta:SC.bind(null,n),na:bC.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await Js(n)):(await n.fa.stop(),n.Ta.length>0&&(x(Rr,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
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
 */class Xh{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new je,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,a=new Xh(e,t,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zs(n,e){if(Pe("AsyncQueue",`${e}: ${n}`),$n(n))return new D(R.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class gr{static emptySet(e){return new gr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||O.comparator(t.key,r.key):(t,r)=>O.comparator(t.key,r.key),this.keyedMap=Di(),this.sortedSet=new Ae(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof gr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new gr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Gm{constructor(){this.ga=new Ae(O.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):U(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,r)=>{e.push(r)})),e}}class Cr{constructor(e,t,r,s,i,o,a,l,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach((a=>{o.push({type:0,doc:a})})),new Cr(e,t,gr.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Co(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class CC{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class PC{constructor(){this.queries=jm(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=M(t),i=s.queries;s.queries=jm(),i.forEach(((o,a)=>{for(const l of a.Sa)l.onError(r)}))})(this,new D(R.ABORTED,"Firestore shutting down"))}}function jm(){return new rn((n=>Ly(n)),Co)}async function Zh(n,e){const t=M(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new CC,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const a=Zs(o,`Initialization of query '${es(e.query)}' failed`);return void e.onError(a)}t.queries.set(s,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&td(t)}async function ed(n,e){const t=M(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function NC(n,e){const t=M(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const a of o.Sa)a.Fa(s)&&(r=!0);o.wa=s}}r&&td(t)}function kC(n,e,t){const r=M(n),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(t);r.queries.delete(e)}function td(n){n.Ca.forEach((e=>{e.next()}))}var Bu,zm;(zm=Bu||(Bu={})).Ma="default",zm.Cache="cache";class nd{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Cr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Cr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Bu.Cache}}/**
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
 */class HI{constructor(e,t){this.Qa=e,this.byteLength=t}$a(){return"metadata"in this.Qa}}/**
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
 */class $m{constructor(e){this.serializer=e}$s(e){return Lt(this.serializer,e)}Us(e){return e.metadata.exists?Lc(this.serializer,e.document,!1):ye.newNoDocument(this.$s(e.metadata.name),this.Ks(e.metadata.readTime))}Ks(e){return Ne(e)}}class rd{constructor(e,t){this.Ua=e,this.serializer=t,this.Ka=[],this.Wa=[],this.collectionGroups=new Set,this.progress=QI(e)}get queries(){return this.Ka}get documents(){return this.Wa}Ga(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Qa.namedQuery)this.Ka.push(e.Qa.namedQuery);else if(e.Qa.documentMetadata){this.Wa.push({metadata:e.Qa.documentMetadata}),e.Qa.documentMetadata.exists||++t;const r=J.fromString(e.Qa.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Qa.document&&(this.Wa[this.Wa.length-1].document=e.Qa.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,{...this.progress}):null}za(e){const t=new Map,r=new $m(this.serializer);for(const s of e)if(s.metadata.queries){const i=r.$s(s.metadata.name);for(const o of s.metadata.queries){const a=(t.get(o)||K()).add(i);t.set(o,a)}}return t}async ja(e){const t=await iC(e,new $m(this.serializer),this.Wa,this.Ua.id),r=this.za(this.documents);for(const s of this.Ka)await oC(e,s,r.get(s.name));return this.progress.taskState="Success",{progress:this.progress,Ja:this.collectionGroups,Ha:t}}}function QI(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
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
 */class YI{constructor(e){this.key=e}}class JI{constructor(e){this.key=e}}class XI{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=K(),this.mutatedKeys=K(),this.eu=Uy(e),this.tu=new gr(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new Gm,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((d,f)=>{const m=s.get(d),g=Po(this.query,f)?f:null,A=!!m&&this.mutatedKeys.has(m.key),N=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let k=!1;m&&g?m.data.isEqual(g.data)?A!==N&&(r.track({type:3,doc:g}),k=!0):this.su(m,g)||(r.track({type:2,doc:g}),k=!0,(l&&this.eu(g,l)>0||u&&this.eu(g,u)<0)&&(a=!0)):!m&&g?(r.track({type:0,doc:g}),k=!0):m&&!g&&(r.track({type:1,doc:m}),k=!0,(l||u)&&(a=!0)),k&&(g?(o=o.add(g),i=N?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{tu:o,iu:r,Cs:a,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((d,f)=>(function(g,A){const N=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U(20277,{Rt:k})}};return N(g)-N(A)})(d.type,f.type)||this.eu(d.doc,f.doc))),this.ou(r),s=s??!1;const a=t&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,u=l!==this.Za;return this.Za=l,o.length!==0||u?{snapshot:new Cr(this.query,e.tu,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Gm,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=K(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const t=[];return e.forEach((r=>{this.Xa.has(r)||t.push(new JI(r))})),this.Xa.forEach((r=>{e.has(r)||t.push(new YI(r))})),t}cu(e){this.Ya=e.Qs,this.Xa=K();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Cr.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Hn="SyncEngine";class DC{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class xC{constructor(e){this.key=e,this.hu=!1}}class VC{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new rn((a=>Ly(a)),Co),this.Iu=new Map,this.Eu=new Set,this.du=new Ae(O.comparator),this.Au=new Map,this.Ru=new qh,this.Vu={},this.mu=new Map,this.fu=br.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function OC(n,e,t=!0){const r=zc(n);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await ZI(r,e,t,!0),s}async function MC(n,e){const t=zc(n);await ZI(t,e,!0,!1)}async function ZI(n,e,t,r){const s=await ks(n.localStore,Je(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let a;return r&&(a=await sd(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&jc(n.remoteStore,s),a}async function sd(n,e,t,r,s){n.pu=(f,m,g)=>(async function(N,k,F,G){let B=k.view.ru(F);B.Cs&&(B=await ec(N.localStore,k.query,!1).then((({documents:T})=>k.view.ru(T,B))));const ie=G&&G.targetChanges.get(k.targetId),oe=G&&G.targetMismatches.get(k.targetId)!=null,re=k.view.applyChanges(B,N.isPrimaryClient,ie,oe);return qu(N,k.targetId,re.au),re.snapshot})(n,f,m,g);const i=await ec(n.localStore,e,!0),o=new XI(e,i.Qs),a=o.ru(i.documents),l=Do.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),u=o.applyChanges(a,n.isPrimaryClient,l);qu(n,t,u.au);const d=new DC(e,t,o);return n.Tu.set(e,d),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),u.snapshot}async function LC(n,e,t){const r=M(n),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((o=>!Co(o,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ds(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&xs(r.remoteStore,s.targetId),Vs(r,s.targetId)})).catch(zn)):(Vs(r,s.targetId),await Ds(r.localStore,s.targetId,!0))}async function FC(n,e){const t=M(n),r=t.Tu.get(e),s=t.Iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),xs(t.remoteStore,r.targetId))}async function UC(n,e,t){const r=cd(n);try{const s=await(function(o,a){const l=M(o),u=ce.now(),d=a.reduce(((g,A)=>g.add(A.key)),K());let f,m;return l.persistence.runTransaction("Locally write mutations","readwrite",(g=>{let A=st(),N=K();return l.Ns.getEntries(g,d).next((k=>{A=k,A.forEach(((F,G)=>{G.isValidDocument()||(N=N.add(F))}))})).next((()=>l.localDocuments.getOverlayedDocuments(g,A))).next((k=>{f=k;const F=[];for(const G of a){const B=uR(G,f.get(G.key).overlayedDocument);B!=null&&F.push(new sn(G.key,B,by(B.value.mapValue),Te.exists(!0)))}return l.mutationQueue.addMutationBatch(g,u,F,a)})).next((k=>{m=k;const F=k.applyToLocalDocumentSet(f,N);return l.documentOverlayCache.saveOverlays(g,k.batchId,F)}))})).then((()=>({batchId:m.batchId,changes:qy(f)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,a,l){let u=o.Vu[o.currentUser.toKey()];u||(u=new Ae(z)),u=u.insert(a,l),o.Vu[o.currentUser.toKey()]=u})(r,s.batchId,t),await on(r,s.changes),await Js(r.remoteStore)}catch(s){const i=Zs(s,"Failed to persist write");t.reject(i)}}async function eE(n,e){const t=M(n);try{const r=await rC(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=t.Au.get(i);o&&(q(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?q(o.hu,14607):s.removedDocuments.size>0&&(q(o.hu,42227),o.hu=!1))})),await on(t,r,e)}catch(r){await zn(r)}}function Wm(n,e,t){const r=M(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach(((i,o)=>{const a=o.view.va(e);a.snapshot&&s.push(a.snapshot)})),(function(o,a){const l=M(o);l.onlineState=a;let u=!1;l.queries.forEach(((d,f)=>{for(const m of f.Sa)m.va(a)&&(u=!0)})),u&&td(l)})(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function BC(n,e,t){const r=M(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Ae(O.comparator);o=o.insert(i,ye.newNoDocument(i,j.min()));const a=K().add(i),l=new ko(j.min(),new Map,new Ae(z),o,a);await eE(r,l),r.du=r.du.remove(i),r.Au.delete(e),ad(r)}else await Ds(r.localStore,e,!1).then((()=>Vs(r,e,t))).catch(zn)}async function qC(n,e){const t=M(n),r=e.batch.batchId;try{const s=await nC(t.localStore,e);od(t,r,null),id(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await on(t,s)}catch(s){await zn(s)}}async function GC(n,e,t){const r=M(n);try{const s=await(function(o,a){const l=M(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let d;return l.mutationQueue.lookupMutationBatch(u,a).next((f=>(q(f!==null,37113),d=f.keys(),l.mutationQueue.removeMutationBatch(u,f)))).next((()=>l.mutationQueue.performConsistencyCheck(u))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(u,d,a))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d))).next((()=>l.localDocuments.getDocuments(u,d)))}))})(r.localStore,e);od(r,e,t),id(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await on(r,s)}catch(s){await zn(s)}}async function jC(n,e){const t=M(n);Kn(t.remoteStore)||x(Hn,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await(function(o){const a=M(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(l=>a.mutationQueue.getHighestUnacknowledgedBatchId(l)))})(t.localStore);if(r===Nn)return void e.resolve();const s=t.mu.get(r)||[];s.push(e),t.mu.set(r,s)}catch(r){const s=Zs(r,"Initialization of waitForPendingWrites() operation failed");e.reject(s)}}function id(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function od(n,e,t){const r=M(n);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Vs(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((r=>{n.Ru.containsKey(r)||tE(n,r)}))}function tE(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(xs(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),ad(n))}function qu(n,e,t){for(const r of t)r instanceof YI?(n.Ru.addReference(r.key,e),zC(n,r)):r instanceof JI?(x(Hn,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||tE(n,r.key)):U(19791,{wu:r})}function zC(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(x(Hn,"New document in limbo: "+t),n.Eu.add(r),ad(n))}function ad(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new O(J.fromString(e)),r=n.fu.next();n.Au.set(r,new xC(t)),n.du=n.du.insert(t,r),jc(n.remoteStore,new Wt(Je(Ks(t.path)),r,"TargetPurposeLimboResolution",nt.ce))}}async function on(n,e,t){const r=M(n),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach(((a,l)=>{o.push(r.pu(l,e,t).then((u=>{if((u||t)&&r.isPrimaryClient){const d=u?!u.fromCache:t?.targetChanges.get(l.targetId)?.current;r.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(u){s.push(u);const d=$h.As(l.targetId,u);i.push(d)}})))})),await Promise.all(o),r.Pu.H_(s),await(async function(l,u){const d=M(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(f=>S.forEach(u,(m=>S.forEach(m.Es,(g=>d.persistence.referenceDelegate.addReference(f,m.targetId,g))).next((()=>S.forEach(m.ds,(g=>d.persistence.referenceDelegate.removeReference(f,m.targetId,g)))))))))}catch(f){if(!$n(f))throw f;x(Wh,"Failed to update sequence numbers: "+f)}for(const f of u){const m=f.targetId;if(!f.fromCache){const g=d.Ms.get(m),A=g.snapshotVersion,N=g.withLastLimboFreeSnapshotVersion(A);d.Ms=d.Ms.insert(m,N)}}})(r.localStore,i))}async function $C(n,e){const t=M(n);if(!t.currentUser.isEqual(e)){x(Hn,"User change. New user:",e.toKey());const r=await kI(t.localStore,e);t.currentUser=e,(function(i,o){i.mu.forEach((a=>{a.forEach((l=>{l.reject(new D(R.CANCELLED,o))}))})),i.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await on(t,r.Ls)}}function WC(n,e){const t=M(n),r=t.Au.get(e);if(r&&r.hu)return K().add(r.key);{let s=K();const i=t.Iu.get(e);if(!i)return s;for(const o of i){const a=t.Tu.get(o);s=s.unionWith(a.view.nu)}return s}}async function KC(n,e){const t=M(n),r=await ec(t.localStore,e.query,!0),s=e.view.cu(r);return t.isPrimaryClient&&qu(t,e.targetId,s.au),s}async function HC(n,e){const t=M(n);return OI(t.localStore,e).then((r=>on(t,r)))}async function QC(n,e,t,r){const s=M(n),i=await(function(a,l){const u=M(a),d=M(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",(f=>d.er(f,l).next((m=>m?u.localDocuments.getDocuments(f,m):S.resolve(null)))))})(s.localStore,e);i!==null?(t==="pending"?await Js(s.remoteStore):t==="acknowledged"||t==="rejected"?(od(s,e,r||null),id(s,e),(function(a,l){M(M(a).mutationQueue).ir(l)})(s.localStore,e)):U(6720,"Unknown batchState",{Su:t}),await on(s,i)):x(Hn,"Cannot apply mutation batch with id: "+e)}async function YC(n,e){const t=M(n);if(zc(t),cd(t),e===!0&&t.gu!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),s=await Km(t,r.toArray());t.gu=!0,await Uu(t.remoteStore,!0);for(const i of s)jc(t.remoteStore,i)}else if(e===!1&&t.gu!==!1){const r=[];let s=Promise.resolve();t.Iu.forEach(((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):s=s.then((()=>(Vs(t,o),Ds(t.localStore,o,!0)))),xs(t.remoteStore,o)})),await s,await Km(t,r),(function(o){const a=M(o);a.Au.forEach(((l,u)=>{xs(a.remoteStore,u)})),a.Ru.Jr(),a.Au=new Map,a.du=new Ae(O.comparator)})(t),t.gu=!1,await Uu(t.remoteStore,!1)}}async function Km(n,e,t){const r=M(n),s=[],i=[];for(const o of e){let a;const l=r.Iu.get(o);if(l&&l.length!==0){a=await ks(r.localStore,Je(l[0]));for(const u of l){const d=r.Tu.get(u),f=await KC(r,d);f.snapshot&&i.push(f.snapshot)}}else{const u=await VI(r.localStore,o);a=await ks(r.localStore,u),await sd(r,nE(u),o,!1,a.resumeToken)}s.push(a)}return r.Pu.H_(i),s}function nE(n){return Vy(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function JC(n){return(function(t){return M(M(t).persistence).Ts()})(M(n).localStore)}async function XC(n,e,t,r){const s=M(n);if(s.gu)return void x(Hn,"Ignoring unexpected query state notification.");const i=s.Iu.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await OI(s.localStore,Fy(i[0])),a=ko.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Re.EMPTY_BYTE_STRING);await on(s,o,a);break}case"rejected":await Ds(s.localStore,e,!0),Vs(s,e,r);break;default:U(64155,t)}}async function ZC(n,e,t){const r=zc(n);if(r.gu){for(const s of e){if(r.Iu.has(s)&&r.sharedClientState.isActiveQueryTarget(s)){x(Hn,"Adding an already active target "+s);continue}const i=await VI(r.localStore,s),o=await ks(r.localStore,i);await sd(r,nE(i),o.targetId,!1,o.resumeToken),jc(r.remoteStore,o)}for(const s of t)r.Iu.has(s)&&await Ds(r.localStore,s,!1).then((()=>{xs(r.remoteStore,s),Vs(r,s)})).catch(zn)}}function zc(n){const e=M(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=eE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=WC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=BC.bind(null,e),e.Pu.H_=NC.bind(null,e.eventManager),e.Pu.yu=kC.bind(null,e.eventManager),e}function cd(n){const e=M(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=qC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=GC.bind(null,e),e}function eP(n,e,t){const r=M(n);(async function(i,o,a){try{const l=await o.getMetadata();if(await(function(g,A){const N=M(g),k=Ne(A.createTime);return N.persistence.runTransaction("hasNewerBundle","readonly",(F=>N.Ii.getBundleMetadata(F,A.id))).then((F=>!!F&&F.createTime.compareTo(k)>=0))})(i.localStore,l))return await o.close(),a._completeWith((function(g){return{taskState:"Success",documentsLoaded:g.totalDocuments,bytesLoaded:g.totalBytes,totalDocuments:g.totalDocuments,totalBytes:g.totalBytes}})(l)),Promise.resolve(new Set);a._updateProgress(QI(l));const u=new rd(l,o.serializer);let d=await o.bu();for(;d;){const m=await u.Ga(d);m&&a._updateProgress(m),d=await o.bu()}const f=await u.ja(i.localStore);return await on(i,f.Ha,void 0),await(function(g,A){const N=M(g);return N.persistence.runTransaction("Save bundle","readwrite",(k=>N.Ii.saveBundleMetadata(k,A)))})(i.localStore,l),a._completeWith(f.progress),Promise.resolve(f.Ja)}catch(l){return yt(Hn,`Loading bundle failed with ${l}`),a._failWith(l),Promise.resolve(new Set)}})(r,e,t).then((s=>{r.sharedClientState.notifyBundleLoaded(s)}))}class Os{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Mr(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return NI(this.persistence,new PI,e.initialUser,this.serializer)}Cu(e){return new Gh(Gc.mi,this.serializer)}Du(e){return new BI}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Os.provider={build:()=>new Os};class ld extends Os{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){q(this.persistence.referenceDelegate instanceof Za,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new vI(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Qe.withCacheSize(this.cacheSizeBytes):Qe.DEFAULT;return new Gh((r=>Za.mi(r,t)),this.serializer)}}class ud extends Os{constructor(e,t,r){super(),this.xu=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.xu.initialize(this,e),await cd(this.xu.syncEngine),await Js(this.xu.remoteStore),await this.persistence.Ji((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}vu(e){return NI(this.persistence,new PI,e.initialUser,this.serializer)}Fu(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new vI(r,e.asyncQueue,t)}Mu(e,t){const r=new mb(t,this.persistence);return new pb(e.asyncQueue,r)}Cu(e){const t=zh(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Qe.withCacheSize(this.cacheSizeBytes):Qe.DEFAULT;return new jh(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,qI(),Pa(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Du(e){return new BI}}class rE extends ud{constructor(e,t){super(e,t,!1),this.xu=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.xu.syncEngine;this.sharedClientState instanceof Yl&&(this.sharedClientState.syncEngine={Co:QC.bind(null,t),vo:XC.bind(null,t),Fo:ZC.bind(null,t),Ts:JC.bind(null,t),Do:HC.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ji((async r=>{await YC(this.xu.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())}))}Du(e){const t=qI();if(!Yl.v(t))throw new D(R.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=zh(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Yl(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Un{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Wm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=$C.bind(null,this.syncEngine),await Uu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new PC})()}createDatastore(e){const t=Mr(e.databaseInfo.databaseId),r=(function(i){return new hC(i)})(e.databaseInfo);return(function(i,o,a,l){return new mC(i,o,a,l)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,i,o,a){return new gC(r,s,i,o,a)})(this.localStore,this.datastore,e.asyncQueue,(t=>Wm(this.syncEngine,t,0)),(function(){return Um.v()?new Um:new aC})())}createSyncEngine(e,t){return(function(s,i,o,a,l,u,d){const f=new VC(s,i,o,a,l,u);return d&&(f.gu=!0),f})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const r=M(t);x(Rr,"RemoteStore shutting down."),r.Ea.add(5),await Ys(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Un.provider={build:()=>new Un};function Hm(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class $c{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Pe("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */class tP{constructor(e,t){this.Bu=e,this.serializer=t,this.metadata=new je,this.buffer=new Uint8Array,this.Lu=(function(){return new TextDecoder("utf-8")})(),this.ku().then((r=>{r&&r.$a()?this.metadata.resolve(r.Qa.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r?.Qa)}`))}),(r=>this.metadata.reject(r)))}close(){return this.Bu.cancel()}async getMetadata(){return this.metadata.promise}async bu(){return await this.getMetadata(),this.ku()}async ku(){const e=await this.qu();if(e===null)return null;const t=this.Lu.decode(e),r=Number(t);isNaN(r)&&this.Qu(`length string (${t}) is not valid number`);const s=await this.$u(r);return new HI(JSON.parse(s),e.length+r)}Uu(){return this.buffer.findIndex((e=>e===123))}async qu(){for(;this.Uu()<0&&!await this.Ku(););if(this.buffer.length===0)return null;const e=this.Uu();e<0&&this.Qu("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async $u(e){for(;this.buffer.length<e;)await this.Ku()&&this.Qu("Reached the end of bundle when more is expected.");const t=this.Lu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Qu(e){throw this.Bu.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ku(){const e=await this.Bu.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class nP{constructor(e,t){this.bundleData=e,this.serializer=t,this.cursor=0,this.elements=[];let r=this.bu();if(!r||!r.$a())throw new Error(`The first element of the bundle is not a metadata object, it is
         ${JSON.stringify(r?.Qa)}`);this.metadata=r;do r=this.bu(),r!==null&&this.elements.push(r);while(r!==null)}getMetadata(){return this.metadata}Wu(){return this.elements}bu(){if(this.cursor===this.bundleData.length)return null;const e=this.qu(),t=this.$u(e);return new HI(JSON.parse(t),e)}$u(e){if(this.cursor+e>this.bundleData.length)throw new D(R.INTERNAL,"Reached the end of bundle when more is expected.");return this.bundleData.slice(this.cursor,this.cursor+=e)}qu(){const e=this.cursor;let t=this.cursor;for(;t<this.bundleData.length;){if(this.bundleData[t]==="{"){if(t===e)throw new Error("First character is a bracket and not a number");return this.cursor=t,Number(this.bundleData.slice(e,t))}t++}throw new Error("Reached the end of bundle when more is expected.")}}/**
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
 */class rP{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new D(R.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await(async function(s,i){const o=M(s),a={documents:i.map((f=>co(o.serializer,f)))},l=await o.Ho("BatchGetDocuments",o.serializer.databaseId,J.emptyPath(),a,i.length),u=new Map;l.forEach((f=>{const m=IR(o.serializer,f);u.set(m.key.toString(),m)}));const d=[];return i.forEach((f=>{const m=u.get(f.toString());q(!!m,55234,{key:f}),d.push(m)})),d})(this.datastore,e);return t.forEach((r=>this.recordVersion(r))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Qs(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((t,r)=>{const s=O.fromPath(r);this.mutations.push(new xh(s,this.precondition(s)))})),await(async function(r,s){const i=M(r),o={writes:s.map((a=>lo(i.serializer,a)))};await i.Go("Commit",i.serializer.databaseId,J.emptyPath(),o)})(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw U(50498,{Gu:e.constructor.name});t=j.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new D(R.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(j.min())?Te.exists(!1):Te.updateTime(t):Te.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(j.min()))throw new D(R.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Te.updateTime(t)}return Te.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class sP{constructor(e,t,r,s,i){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=s,this.deferred=i,this.zu=r.maxAttempts,this.M_=new Hh(this.asyncQueue,"transaction_retry")}ju(){this.zu-=1,this.Ju()}Ju(){this.M_.p_((async()=>{const e=new rP(this.datastore),t=this.Hu(e);t&&t.then((r=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(r)})).catch((s=>{this.Yu(s)}))))})).catch((r=>{this.Yu(r)}))}))}Hu(e){try{const t=this.updateFunction(e);return!So(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Yu(e){this.zu>0&&this.Zu(e)?(this.zu-=1,this.asyncQueue.enqueueAndForget((()=>(this.Ju(),Promise.resolve())))):this.deferred.reject(e)}Zu(e){if(e?.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!Xy(t)}return!1}}/**
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
 */const Bn="FirestoreClient";class iP{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Ue.UNAUTHENTICATED,this.clientId=Ih.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{x(Bn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(x(Bn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new je;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Zs(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Xl(n,e){n.asyncQueue.verifyOperationInProgress(),x(Bn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await kI(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Qm(n,e){n.asyncQueue.verifyOperationInProgress();const t=await hd(n);x(Bn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>qm(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>qm(e.remoteStore,s))),n._onlineComponents=e}async function hd(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){x(Bn,"Using user provided OfflineComponentProvider");try{await Xl(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===R.FAILED_PRECONDITION||s.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;yt("Error using user provided cache. Falling back to memory cache: "+t),await Xl(n,new Os)}}else x(Bn,"Using default OfflineComponentProvider"),await Xl(n,new ld(void 0));return n._offlineComponents}async function Wc(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(x(Bn,"Using user provided OnlineComponentProvider"),await Qm(n,n._uninitializedComponentsProvider._online)):(x(Bn,"Using default OnlineComponentProvider"),await Qm(n,new Un))),n._onlineComponents}function sE(n){return hd(n).then((e=>e.persistence))}function ei(n){return hd(n).then((e=>e.localStore))}function iE(n){return Wc(n).then((e=>e.remoteStore))}function dd(n){return Wc(n).then((e=>e.syncEngine))}function oE(n){return Wc(n).then((e=>e.datastore))}async function Ms(n){const e=await Wc(n),t=e.eventManager;return t.onListen=OC.bind(null,e.syncEngine),t.onUnlisten=LC.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=MC.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=FC.bind(null,e.syncEngine),t}function oP(n){return n.asyncQueue.enqueue((async()=>{const e=await sE(n),t=await iE(n);return e.setNetworkEnabled(!0),(function(s){const i=M(s);return i.Ea.delete(0),xo(i)})(t)}))}function aP(n){return n.asyncQueue.enqueue((async()=>{const e=await sE(n),t=await iE(n);return e.setNetworkEnabled(!1),(async function(s){const i=M(s);i.Ea.add(0),await Ys(i),i.Ra.set("Offline")})(t)}))}function cP(n,e){const t=new je;return n.asyncQueue.enqueueAndForget((async()=>(async function(s,i,o){try{const a=await(function(u,d){const f=M(u);return f.persistence.runTransaction("read document","readonly",(m=>f.localDocuments.getDocument(m,d)))})(s,i);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new D(R.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const l=Zs(a,`Failed to get document '${i} from cache`);o.reject(l)}})(await ei(n),e,t))),t.promise}function aE(n,e,t={}){const r=new je;return n.asyncQueue.enqueueAndForget((async()=>(function(i,o,a,l,u){const d=new $c({next:m=>{d.Nu(),o.enqueueAndForget((()=>ed(i,f)));const g=m.docs.has(a);!g&&m.fromCache?u.reject(new D(R.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&m.fromCache&&l&&l.source==="server"?u.reject(new D(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new nd(Ks(a.path),d,{includeMetadataChanges:!0,qa:!0});return Zh(i,f)})(await Ms(n),n.asyncQueue,e,t,r))),r.promise}function lP(n,e){const t=new je;return n.asyncQueue.enqueueAndForget((async()=>(async function(s,i,o){try{const a=await ec(s,i,!0),l=new XI(i,a.Qs),u=l.ru(a.documents),d=l.applyChanges(u,!1);o.resolve(d.snapshot)}catch(a){const l=Zs(a,`Failed to execute query '${i} against cache`);o.reject(l)}})(await ei(n),e,t))),t.promise}function cE(n,e,t={}){const r=new je;return n.asyncQueue.enqueueAndForget((async()=>(function(i,o,a,l,u){const d=new $c({next:m=>{d.Nu(),o.enqueueAndForget((()=>ed(i,f))),m.fromCache&&l.source==="server"?u.reject(new D(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new nd(a,d,{includeMetadataChanges:!0,qa:!0});return Zh(i,f)})(await Ms(n),n.asyncQueue,e,t,r))),r.promise}function uP(n,e,t){const r=new je;return n.asyncQueue.enqueueAndForget((async()=>{try{const s=await oE(n);r.resolve((async function(o,a,l){const u=M(o),{request:d,gt:f,parent:m}=lI(u.serializer,Oy(a),l);u.connection.$o||delete d.parent;const g=(await u.Ho("RunAggregationQuery",u.serializer.databaseId,m,d,1)).filter((N=>!!N.result));q(g.length===1,64727);const A=g[0].result?.aggregateFields;return Object.keys(A).reduce(((N,k)=>(N[f[k]]=A[k],N)),{})})(s,e,t))}catch(s){r.reject(s)}})),r.promise}function hP(n,e){const t=new $c(e);return n.asyncQueue.enqueueAndForget((async()=>(function(s,i){M(s).Ca.add(i),i.next()})(await Ms(n),t))),()=>{t.Nu(),n.asyncQueue.enqueueAndForget((async()=>(function(s,i){M(s).Ca.delete(i)})(await Ms(n),t)))}}function dP(n,e,t,r){const s=(function(o,a){let l;return l=typeof o=="string"?eI().encode(o):o,(function(d,f){return new tP(d,f)})((function(d,f){if(d instanceof Uint8Array)return Hm(d,f);if(d instanceof ArrayBuffer)return Hm(new Uint8Array(d),f);if(d instanceof ReadableStream)return d.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")})(l),a)})(t,Mr(e));n.asyncQueue.enqueueAndForget((async()=>{eP(await dd(n),s,r)}))}function fP(n,e){return n.asyncQueue.enqueue((async()=>(function(r,s){const i=M(r);return i.persistence.runTransaction("Get named query","readonly",(o=>i.Ii.getNamedQuery(o,s)))})(await ei(n),e)))}function lE(n,e){return(function(r,s){return new nP(r,s)})(n,e)}function pP(n,e){return n.asyncQueue.enqueue((async()=>(async function(r,s){const i=M(r),o=i.indexManager,a=[];return i.persistence.runTransaction("Configure indexes","readwrite",(l=>o.getFieldIndexes(l).next((u=>(function(f,m,g,A,N){f=[...f],m=[...m],f.sort(g),m.sort(g);const k=f.length,F=m.length;let G=0,B=0;for(;G<F&&B<k;){const ie=g(f[B],m[G]);ie<0?N(f[B++]):ie>0?A(m[G++]):(G++,B++)}for(;G<F;)A(m[G++]);for(;B<k;)N(f[B++])})(u,s,ub,(d=>{a.push(o.addFieldIndex(l,d))}),(d=>{a.push(o.deleteFieldIndex(l,d))})))).next((()=>S.waitFor(a)))))})(await ei(n),e)))}function mP(n,e){return n.asyncQueue.enqueue((async()=>(function(r,s){M(r).Fs.Vs=s})(await ei(n),e)))}function _P(n){return n.asyncQueue.enqueue((async()=>(function(t){const r=M(t),s=r.indexManager;return r.persistence.runTransaction("Delete All Indexes","readwrite",(i=>s.deleteAllFieldIndexes(i)))})(await ei(n))))}/**
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
 */function uE(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Ym=new Map;/**
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
 */const hE="firestore.googleapis.com",Jm=!0;class Xm{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new D(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=hE,this.ssl=Jm}else this.host=e.host,this.ssl=e.ssl??Jm;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=yI;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<wI)throw new D(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}lb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=uE(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new D(R.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new D(R.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new D(R.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Vo{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xm({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new D(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new D(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xm(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new ZS;switch(r.type){case"firstParty":return new rb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new D(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Ym.get(t);r&&(x("ComponentProvider","Removing Datastore"),Ym.delete(t),r.terminate())})(this),Promise.resolve()}}function gP(n,e,t,r={}){n=ee(n,Vo);const s=bt(e),i=n._getSettings(),o={...i,emulatorOptions:n._getEmulatorOptions()},a=`${e}:${t}`;s&&(Eo(`https://${a}`),Tc("Firestore",!0)),i.host!==hE&&i.host!==a&&yt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:a,ssl:s,emulatorOptions:r};if(!gt(l,o)&&(n._setSettings(l),r.mockUserToken)){let u,d;if(typeof r.mockUserToken=="string")u=r.mockUserToken,d=Ue.MOCK_USER;else{u=eg(r.mockUserToken,n._app?.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new D(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new Ue(f)}n._authCredentials=new eb(new Yg(u,d))}}/**
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
 */class ze{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ze(this.firestore,e,this._query)}}class de{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ft(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new de(this.firestore,e,this._key)}toJSON(){return{type:de._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Or(t,de._jsonSchema))return new de(e,r||null,new O(J.fromString(t.referencePath)))}}de._jsonSchemaVersion="firestore/documentReference/1.0",de._jsonSchema={type:De("string",de._jsonSchemaVersion),referencePath:De("string")};class Ft extends ze{constructor(e,t,r){super(e,t,Ks(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new de(this.firestore,null,new O(e))}withConverter(e){return new Ft(this.firestore,e,this._path)}}function BD(n,e,...t){if(n=ne(n),Eh("collection","path",e),n instanceof Vo){const r=J.fromString(e,...t);return Bp(r),new Ft(n,null,r)}{if(!(n instanceof de||n instanceof Ft))throw new D(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(J.fromString(e,...t));return Bp(r),new Ft(n.firestore,null,r)}}function qD(n,e){if(n=ee(n,Vo),Eh("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new D(R.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new ze(n,null,(function(r){return new nn(J.emptyPath(),r)})(e))}function yP(n,e,...t){if(n=ne(n),arguments.length===1&&(e=Ih.newId()),Eh("doc","path",e),n instanceof Vo){const r=J.fromString(e,...t);return Up(r),new de(n,null,new O(r))}{if(!(n instanceof de||n instanceof Ft))throw new D(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(J.fromString(e,...t));return Up(r),new de(n.firestore,n instanceof Ft?n.converter:null,new O(r))}}function GD(n,e){return n=ne(n),e=ne(e),(n instanceof de||n instanceof Ft)&&(e instanceof de||e instanceof Ft)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function dE(n,e){return n=ne(n),e=ne(e),n instanceof ze&&e instanceof ze&&n.firestore===e.firestore&&Co(n._query,e._query)&&n.converter===e.converter}/**
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
 */const Zm="AsyncQueue";class e_{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Hh(this,"async_queue_retry"),this._c=()=>{const r=Pa();r&&x(Zm,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=Pa();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Pa();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new je;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!$n(e))throw e;x(Zm,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,Pe("INTERNAL UNHANDLED ERROR: ",t_(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=Xh.createAndSchedule(this,e,t,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&U(47125,{Pc:t_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function t_(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function us(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(n,["next","error","complete"])}class IP{constructor(){this._progressObserver={},this._taskCompletionResolver=new je,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const jD=-1;class me extends Vo{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new e_,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new e_(e),this._firestoreClient=void 0,await e}}}function zD(n,e,t){t||(t=so);const r=xr(n,"firestore");if(r.isInitialized(t)){const s=r.getImmediate({identifier:t}),i=r.getOptions(t);if(gt(i,e))return s;throw new D(R.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new D(R.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<wI)throw new D(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&bt(e.host)&&Eo(e.host),r.initialize({options:e,instanceIdentifier:t})}function EP(n,e){const t=typeof n=="object"?n:Ac(),r=typeof n=="string"?n:e||so,s=xr(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=oh("firestore");i&&gP(s,...i)}return s}function Se(n){if(n._terminated)throw new D(R.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||fE(n),n._firestoreClient}function fE(n){const e=n._freezeSettings(),t=(function(s,i,o,a){return new jb(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,uE(a.experimentalLongPollingOptions),a.useFetchStreams,a.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new iP(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}})(n._componentsProvider))}function $D(n,e){yt("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings();return pE(n,Un.provider,{build:r=>new ud(r,t.cacheSizeBytes,e?.forceOwnership)}),Promise.resolve()}async function WD(n){yt("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=n._freezeSettings();pE(n,Un.provider,{build:t=>new rE(t,e.cacheSizeBytes)})}function pE(n,e,t){if((n=ee(n,me))._firestoreClient||n._terminated)throw new D(R.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(n._componentsProvider||n._getSettings().localCache)throw new D(R.FAILED_PRECONDITION,"SDK cache is already specified.");n._componentsProvider={_online:e,_offline:t},fE(n)}function KD(n){if(n._initialized&&!n._terminated)throw new D(R.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new je;return n._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await(async function(r){if(!Mt.v())return Promise.resolve();const s=r+CI;await Mt.delete(s)})(zh(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}})),e.promise}function HD(n){return(function(t){const r=new je;return t.asyncQueue.enqueueAndForget((async()=>jC(await dd(t),r))),r.promise})(Se(n=ee(n,me)))}function QD(n){return oP(Se(n=ee(n,me)))}function YD(n){return aP(Se(n=ee(n,me)))}function JD(n){return Bv(n.app,"firestore",n._databaseId.database),n._delete()}function n_(n,e){const t=Se(n=ee(n,me)),r=new IP;return dP(t,n._databaseId,e,r),r}function TP(n,e){return fP(Se(n=ee(n,me)),e).then((t=>t?new ze(n,null,t.query):null))}/**
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
 */class uo{constructor(e="count",t){this._internalFieldPath=t,this.type="AggregateField",this.aggregateType=e}}class wP{constructor(e,t,r){this._userDataWriter=t,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
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
 */class ut{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ut(Re.fromBase64String(e))}catch(t){throw new D(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ut(Re.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ut._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Or(e,ut._jsonSchema))return ut.fromBase64String(e.bytes)}}ut._jsonSchemaVersion="firestore/bytes/1.0",ut._jsonSchema={type:De("string",ut._jsonSchemaVersion),bytes:De("string")};/**
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
 */class Lr{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new D(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ee(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function XD(){return new Lr(_u)}/**
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
 */class Fr{constructor(e){this._methodName=e}}/**
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
 */class Ut{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new D(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new D(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return z(this._lat,e._lat)||z(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ut._jsonSchemaVersion}}static fromJSON(e){if(Or(e,Ut._jsonSchema))return new Ut(e.latitude,e.longitude)}}Ut._jsonSchemaVersion="firestore/geoPoint/1.0",Ut._jsonSchema={type:De("string",Ut._jsonSchemaVersion),latitude:De("number"),longitude:De("number")};/**
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
 */class vt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:vt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Or(e,vt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new vt(e.vectorValues);throw new D(R.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}vt._jsonSchemaVersion="firestore/vectorValue/1.0",vt._jsonSchema={type:De("string",vt._jsonSchemaVersion),vectorValues:De("object")};/**
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
 */const vP=/^__.*__$/;class AP{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new sn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Hs(e,this.data,t,this.fieldTransforms)}}class mE{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new sn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function _E(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U(40011,{Ac:n})}}class Kc{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Kc({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return sc(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(_E(this.Ac)&&vP.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class SP{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Mr(e)}Cc(e,t,r,s=!1){return new Kc({Ac:e,methodName:t,Dc:r,path:Ee.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ur(n){const e=n._freezeSettings(),t=Mr(n._databaseId);return new SP(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Hc(n,e,t,r,s,i={}){const o=n.Cc(i.merge||i.mergeFields?2:0,e,t,s);Id("Data must be an object, but it was:",o,r);const a=IE(r,o);let l,u;if(i.merge)l=new rt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const f of i.mergeFields){const m=ho(e,f,t);if(!o.contains(m))throw new D(R.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);TE(d,m)||d.push(m)}l=new rt(d),u=o.fieldTransforms.filter((f=>l.covers(f.field)))}else l=null,u=o.fieldTransforms;return new AP(new We(a),l,u)}class Oo extends Fr{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Oo}}function gE(n,e,t){return new Kc({Ac:3,Dc:e.settings.Dc,methodName:n._methodName,fc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class fd extends Fr{_toFieldTransform(e){return new No(e.path,new Cs)}isEqual(e){return e instanceof fd}}class pd extends Fr{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=gE(this,e,!0),r=this.vc.map((i=>Br(i,t))),s=new wr(r);return new No(e.path,s)}isEqual(e){return e instanceof pd&&gt(this.vc,e.vc)}}class md extends Fr{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=gE(this,e,!0),r=this.vc.map((i=>Br(i,t))),s=new vr(r);return new No(e.path,s)}isEqual(e){return e instanceof md&&gt(this.vc,e.vc)}}class _d extends Fr{constructor(e,t){super(e),this.Fc=t}_toFieldTransform(e){const t=new Ps(e.serializer,zy(e.serializer,this.Fc));return new No(e.path,t)}isEqual(e){return e instanceof _d&&this.Fc===e.Fc}}function gd(n,e,t,r){const s=n.Cc(1,e,t);Id("Data must be an object, but it was:",s,r);const i=[],o=We.empty();Wn(r,((l,u)=>{const d=Qc(e,l,t);u=ne(u);const f=s.yc(d);if(u instanceof Oo)i.push(d);else{const m=Br(u,f);m!=null&&(i.push(d),o.set(d,m))}}));const a=new rt(i);return new mE(o,a,s.fieldTransforms)}function yd(n,e,t,r,s,i){const o=n.Cc(1,e,t),a=[ho(e,r,t)],l=[s];if(i.length%2!=0)throw new D(R.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)a.push(ho(e,i[m])),l.push(i[m+1]);const u=[],d=We.empty();for(let m=a.length-1;m>=0;--m)if(!TE(u,a[m])){const g=a[m];let A=l[m];A=ne(A);const N=o.yc(g);if(A instanceof Oo)u.push(g);else{const k=Br(A,N);k!=null&&(u.push(g),d.set(g,k))}}const f=new rt(u);return new mE(d,f,o.fieldTransforms)}function yE(n,e,t,r=!1){return Br(t,n.Cc(r?4:3,e))}function Br(n,e){if(EE(n=ne(n)))return Id("Unsupported field value:",e,n),IE(n,e);if(n instanceof Fr)return(function(r,s){if(!_E(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const a of r){let l=Br(a,s.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}})(n,e)}return(function(r,s){if((r=ne(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return zy(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ce.fromDate(r);return{timestampValue:Ns(s.serializer,i)}}if(r instanceof ce){const i=new ce(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ns(s.serializer,i)}}if(r instanceof Ut)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ut)return{bytesValue:rI(s.serializer,r._byteString)};if(r instanceof de){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Fh(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof vt)return(function(o,a){return{mapValue:{fields:{[Rh]:{stringValue:Ch},[Ss]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw a.Sc("VectorValues must only contain numeric values.");return Dh(a.serializer,u)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${Rc(r)}`)})(n,e)}function IE(n,e){const t={};return gy(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Wn(n,((r,s)=>{const i=Br(s,e.mc(r));i!=null&&(t[r]=i)})),{mapValue:{fields:t}}}function EE(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ce||n instanceof Ut||n instanceof ut||n instanceof de||n instanceof Fr||n instanceof vt)}function Id(n,e,t){if(!EE(t)||!Xg(t)){const r=Rc(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function ho(n,e,t){if((e=ne(e))instanceof Lr)return e._internalPath;if(typeof e=="string")return Qc(n,e);throw sc("Field path arguments must be of type string or ",n,!1,void 0,t)}const bP=new RegExp("[~\\*/\\[\\]]");function Qc(n,e,t){if(e.search(bP)>=0)throw sc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Lr(...e.split("."))._internalPath}catch{throw sc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function sc(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new D(R.INVALID_ARGUMENT,a+n+l)}function TE(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class fo{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new de(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new RP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Yc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class RP extends fo{data(){return super.data()}}function Yc(n,e){return typeof e=="string"?Qc(n,e):e instanceof Lr?e._internalPath:e._delegate._internalPath}/**
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
 */function wE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new D(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ed{}class Mo extends Ed{}function ZD(n,e,...t){let r=[];e instanceof Ed&&r.push(e),r=r.concat(t),(function(i){const o=i.filter((l=>l instanceof ti)).length,a=i.filter((l=>l instanceof Lo)).length;if(o>1||o>0&&a>0)throw new D(R.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class Lo extends Mo{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Lo(e,t,r)}_apply(e){const t=this._parse(e);return AE(e._query,t),new ze(e.firestore,e.converter,Cu(e._query,t))}_parse(e){const t=Ur(e.firestore);return(function(i,o,a,l,u,d,f){let m;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new D(R.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){s_(f,d);const A=[];for(const N of f)A.push(r_(l,i,N));m={arrayValue:{values:A}}}else m=r_(l,i,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||s_(f,d),m=yE(a,o,f,d==="in"||d==="not-in");return te.create(u,d,m)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function ex(n,e,t){const r=e,s=Yc("where",n);return Lo._create(s,r,t)}class ti extends Ed{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ti(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:le.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let o=s;const a=i.getFlattenedFilters();for(const l of a)AE(o,l),o=Cu(o,l)})(e._query,t),new ze(e.firestore,e.converter,Cu(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function tx(...n){return n.forEach((e=>SE("or",e))),ti._create("or",n)}function nx(...n){return n.forEach((e=>SE("and",e))),ti._create("and",n)}class Td extends Mo{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Td(e,t)}_apply(e){const t=(function(s,i,o){if(s.startAt!==null)throw new D(R.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new D(R.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ao(i,o)})(e._query,this._field,this._direction);return new ze(e.firestore,e.converter,(function(s,i){const o=s.explicitOrderBy.concat([i]);return new nn(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,t))}}function rx(n,e="asc"){const t=e,r=Yc("orderBy",n);return Td._create(r,t)}class Jc extends Mo{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Jc(e,t,r)}_apply(e){return new ze(e.firestore,e.converter,Qa(e._query,this._limit,this._limitType))}}function sx(n){return Zg("limit",n),Jc._create("limit",n,"F")}function ix(n){return Zg("limitToLast",n),Jc._create("limitToLast",n,"L")}class Xc extends Mo{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Xc(e,t,r)}_apply(e){const t=vE(e,this.type,this._docOrFields,this._inclusive);return new ze(e.firestore,e.converter,(function(s,i){return new nn(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)})(e._query,t))}}function ox(...n){return Xc._create("startAt",n,!0)}function ax(...n){return Xc._create("startAfter",n,!1)}class Zc extends Mo{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Zc(e,t,r)}_apply(e){const t=vE(e,this.type,this._docOrFields,this._inclusive);return new ze(e.firestore,e.converter,(function(s,i){return new nn(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,i)})(e._query,t))}}function cx(...n){return Zc._create("endBefore",n,!1)}function lx(...n){return Zc._create("endAt",n,!0)}function vE(n,e,t,r){if(t[0]=ne(t[0]),t[0]instanceof fo)return(function(i,o,a,l,u){if(!l)throw new D(R.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const d=[];for(const f of ls(i))if(f.field.isKeyField())d.push(Er(o,l.key));else{const m=l.data.field(f.field);if(Dc(m))throw new D(R.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(m===null){const g=f.field.canonicalString();throw new D(R.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${g}' (used as the orderBy) does not exist.`)}d.push(m)}return new Ln(d,u)})(n._query,n.firestore._databaseId,e,t[0]._document,r);{const s=Ur(n.firestore);return(function(o,a,l,u,d,f){const m=o.explicitOrderBy;if(d.length>m.length)throw new D(R.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const g=[];for(let A=0;A<d.length;A++){const N=d[A];if(m[A].field.isKeyField()){if(typeof N!="string")throw new D(R.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof N}`);if(!Nh(o)&&N.indexOf("/")!==-1)throw new D(R.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${N}' contains a slash.`);const k=o.path.child(J.fromString(N));if(!O.isDocumentKey(k))throw new D(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${k}' is not because it contains an odd number of segments.`);const F=new O(k);g.push(Er(a,F))}else{const k=yE(l,u,N);g.push(k)}}return new Ln(g,f)})(n._query,n.firestore._databaseId,s,e,t,r)}}function r_(n,e,t){if(typeof(t=ne(t))=="string"){if(t==="")throw new D(R.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Nh(e)&&t.indexOf("/")!==-1)throw new D(R.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(J.fromString(t));if(!O.isDocumentKey(r))throw new D(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Er(n,new O(r))}if(t instanceof de)return Er(n,t._key);throw new D(R.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Rc(t)}.`)}function s_(n,e){if(!Array.isArray(n)||n.length===0)throw new D(R.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function AE(n,e){const t=(function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new D(R.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new D(R.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function SE(n,e){if(!(e instanceof Lo||e instanceof ti))throw new D(R.INVALID_ARGUMENT,`Function ${n}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class bE{convertValue(e,t="none"){switch(On(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ie(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(en(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw U(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Wn(e,((s,i)=>{r[s]=this.convertValue(i,t)})),r}convertVectorValue(e){const t=e.fields?.[Ss].arrayValue?.values?.map((r=>Ie(r.doubleValue)));return new vt(t)}convertGeoPoint(e){return new Ut(Ie(e.latitude),Ie(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=xc(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ro(e));default:return null}}convertTimestamp(e){const t=Zt(e);return new ce(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=J.fromString(e);q(fI(r),9688,{name:e});const s=new Ir(r.get(1),r.get(3)),i=new O(r.popFirst(5));return s.isEqual(t)||Pe(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function el(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class wd extends bE{constructor(e){super(),this.firestore=e}convertBytes(e){return new ut(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new de(this.firestore,null,t)}}/**
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
 */function ux(n){return new uo("sum",ho("sum",n))}function hx(n){return new uo("avg",ho("average",n))}function CP(){return new uo("count")}function dx(n,e){return n instanceof uo&&e instanceof uo&&n.aggregateType===e.aggregateType&&n._internalFieldPath?.canonicalString()===e._internalFieldPath?.canonicalString()}function fx(n,e){return dE(n.query,e.query)&&gt(n.data(),e.data())}/**
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
 *//**
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
 */const RE="NOT SUPPORTED";class An{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ht extends fo{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Na(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Yc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new D(R.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ht._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}function px(n,e,t){if(Or(e,ht._jsonSchema)){if(e.bundle===RE)throw new D(R.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.");const r=Mr(n._databaseId),s=lE(e.bundle,r),i=s.Wu(),o=new rd(s.getMetadata(),r);for(const d of i)o.Ga(d);const a=o.documents;if(a.length!==1)throw new D(R.INVALID_ARGUMENT,`Expected bundle data to contain 1 document, but it contains ${a.length} documents.`);const l=Lc(r,a[0].document),u=new O(J.fromString(e.bundleName));return new ht(n,new wd(n),u,l,new An(!1,!1),t||null)}}ht._jsonSchemaVersion="firestore/documentSnapshot/1.0",ht._jsonSchema={type:De("string",ht._jsonSchemaVersion),bundleSource:De("string","DocumentSnapshot"),bundleName:De("string"),bundle:De("string")};class Na extends ht{data(e={}){return super.data(e)}}class dt{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new An(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new Na(this._firestore,this._userDataWriter,r.key,r,new An(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new D(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((a=>{const l=new Na(s._firestore,s._userDataWriter,a.doc.key,a.doc,new An(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((a=>i||a.type!==3)).map((a=>{const l=new Na(s._firestore,s._userDataWriter,a.doc.key,a.doc,new An(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:PP(a.type),doc:l,oldIndex:u,newIndex:d}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new D(R.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=dt._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ih.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function mx(n,e,t){if(Or(e,dt._jsonSchema)){if(e.bundle===RE)throw new D(R.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.");const r=Mr(n._databaseId),s=lE(e.bundle,r),i=s.Wu(),o=new rd(s.getMetadata(),r);for(const m of i)o.Ga(m);if(o.queries.length!==1)throw new D(R.INVALID_ARGUMENT,`Snapshot data expected 1 query but found ${o.queries.length} queries.`);const a=Uc(o.queries[0].bundledQuery),l=o.documents;let u=new gr;l.map((m=>{const g=Lc(r,m.document);u=u.add(g)}));const d=Cr.fromInitialDocuments(a,u,K(),!1,!1),f=new ze(n,t||null,a);return new dt(n,new wd(n),f,d)}}function PP(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U(61501,{type:n})}}function _x(n,e){return n instanceof ht&&e instanceof ht?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof dt&&e instanceof dt&&n._firestore===e._firestore&&dE(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
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
 */function gx(n){n=ee(n,de);const e=ee(n.firestore,me);return aE(Se(e),n._key).then((t=>vd(e,n,t)))}dt._jsonSchemaVersion="firestore/querySnapshot/1.0",dt._jsonSchema={type:De("string",dt._jsonSchemaVersion),bundleSource:De("string","QuerySnapshot"),bundleName:De("string"),bundle:De("string")};class Qn extends bE{constructor(e){super(),this.firestore=e}convertBytes(e){return new ut(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new de(this.firestore,null,t)}}function yx(n){n=ee(n,de);const e=ee(n.firestore,me),t=Se(e),r=new Qn(e);return cP(t,n._key).then((s=>new ht(e,r,n._key,s,new An(s!==null&&s.hasLocalMutations,!0),n.converter)))}function Ix(n){n=ee(n,de);const e=ee(n.firestore,me);return aE(Se(e),n._key,{source:"server"}).then((t=>vd(e,n,t)))}function Ex(n){n=ee(n,ze);const e=ee(n.firestore,me),t=Se(e),r=new Qn(e);return wE(n._query),cE(t,n._query).then((s=>new dt(e,r,n,s)))}function Tx(n){n=ee(n,ze);const e=ee(n.firestore,me),t=Se(e),r=new Qn(e);return lP(t,n._query).then((s=>new dt(e,r,n,s)))}function wx(n){n=ee(n,ze);const e=ee(n.firestore,me),t=Se(e),r=new Qn(e);return cE(t,n._query,{source:"server"}).then((s=>new dt(e,r,n,s)))}function vx(n,e,t){n=ee(n,de);const r=ee(n.firestore,me),s=el(n.converter,e,t);return Fo(r,[Hc(Ur(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Te.none())])}function Ax(n,e,t,...r){n=ee(n,de);const s=ee(n.firestore,me),i=Ur(s);let o;return o=typeof(e=ne(e))=="string"||e instanceof Lr?yd(i,"updateDoc",n._key,e,t,r):gd(i,"updateDoc",n._key,e),Fo(s,[o.toMutation(n._key,Te.exists(!0))])}function Sx(n){return Fo(ee(n.firestore,me),[new Qs(n._key,Te.none())])}function bx(n,e){const t=ee(n.firestore,me),r=yP(n),s=el(n.converter,e);return Fo(t,[Hc(Ur(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Te.exists(!1))]).then((()=>r))}function i_(n,...e){n=ne(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||us(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(us(e[r])){const l=e[r];e[r]=l.next?.bind(l),e[r+1]=l.error?.bind(l),e[r+2]=l.complete?.bind(l)}let i,o,a;if(n instanceof de)o=ee(n.firestore,me),a=Ks(n._key.path),i={next:l=>{e[r]&&e[r](vd(o,n,l))},error:e[r+1],complete:e[r+2]};else{const l=ee(n,ze);o=ee(l.firestore,me),a=l._query;const u=new Qn(o);i={next:d=>{e[r]&&e[r](new dt(o,u,l,d))},error:e[r+1],complete:e[r+2]},wE(n._query)}return(function(u,d,f,m){const g=new $c(m),A=new nd(d,g,f);return u.asyncQueue.enqueueAndForget((async()=>Zh(await Ms(u),A))),()=>{g.Nu(),u.asyncQueue.enqueueAndForget((async()=>ed(await Ms(u),A)))}})(Se(o),a,s,i)}function Rx(n,e,...t){const r=ne(n),s=(function(l){const u={bundle:"",bundleName:"",bundleSource:""},d=["bundle","bundleName","bundleSource"];for(const f of d){if(!(f in l)){u.error=`snapshotJson missing required field: ${f}`;break}const m=l[f];if(typeof m!="string"){u.error=`snapshotJson field '${f}' must be a string.`;break}if(m.length===0){u.error=`snapshotJson field '${f}' cannot be an empty string.`;break}f==="bundle"?u.bundle=m:f==="bundleName"?u.bundleName=m:f==="bundleSource"&&(u.bundleSource=m)}return u})(e);if(s.error)throw new D(R.INVALID_ARGUMENT,s.error);let i,o=0;if(typeof t[o]!="object"||us(t[o])||(i=t[o++]),s.bundleSource==="QuerySnapshot"){let a=null;if(typeof t[o]=="object"&&us(t[o])){const l=t[o++];a={next:l.next,error:l.error,complete:l.complete}}else a={next:t[o++],error:t[o++],complete:t[o++]};return(function(u,d,f,m,g){let A,N=!1;return n_(u,d.bundle).then((()=>TP(u,d.bundleName))).then((F=>{F&&!N&&(g&&F.withConverter(g),A=i_(F,f||{},m))})).catch((F=>(m.error&&m.error(F),()=>{}))),()=>{N||(N=!0,A&&A())}})(r,s,i,a,t[o])}if(s.bundleSource==="DocumentSnapshot"){let a=null;if(typeof t[o]=="object"&&us(t[o])){const l=t[o++];a={next:l.next,error:l.error,complete:l.complete}}else a={next:t[o++],error:t[o++],complete:t[o++]};return(function(u,d,f,m,g){let A,N=!1;return n_(u,d.bundle).then((()=>{if(!N){const F=new de(u,g||null,O.fromPath(d.bundleName));A=i_(F,f||{},m)}})).catch((F=>(m.error&&m.error(F),()=>{}))),()=>{N||(N=!0,A&&A())}})(r,s,i,a,t[o])}throw new D(R.INVALID_ARGUMENT,`unsupported bundle source: ${s.bundleSource}`)}function Cx(n,e){return hP(Se(n=ee(n,me)),us(e)?e:{next:e})}function Fo(n,e){return(function(r,s){const i=new je;return r.asyncQueue.enqueueAndForget((async()=>UC(await dd(r),s,i))),i.promise})(Se(n),e)}function vd(n,e,t){const r=t.docs.get(e._key),s=new Qn(n);return new ht(n,s,e._key,r,new An(t.hasPendingWrites,t.fromCache),e.converter)}function Px(n){return NP(n,{count:CP()})}function NP(n,e){const t=ee(n.firestore,me),r=Se(t),s=_y(e,((i,o)=>new Jy(o,i.aggregateType,i._internalFieldPath)));return uP(r,n._query,s).then((i=>(function(a,l,u){const d=new Qn(a);return new wP(l,d,u)})(t,n,i)))}class kP{constructor(e){this.kind="memory",this._onlineComponentProvider=Un.provider,this._offlineComponentProvider=e?.garbageCollector?e.garbageCollector._offlineComponentProvider:{build:()=>new ld(void 0)}}toJSON(){return{kind:this.kind}}}class DP{constructor(e){let t;this.kind="persistent",e?.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=LP(void 0),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class xP{constructor(){this.kind="memoryEager",this._offlineComponentProvider=Os.provider}toJSON(){return{kind:this.kind}}}class VP{constructor(e){this.kind="memoryLru",this._offlineComponentProvider={build:()=>new ld(e)}}toJSON(){return{kind:this.kind}}}function Nx(){return new xP}function kx(n){return new VP(n?.cacheSizeBytes)}function Dx(n){return new kP(n)}function xx(n){return new DP(n)}class OP{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Un.provider,this._offlineComponentProvider={build:t=>new ud(t,e?.cacheSizeBytes,this.forceOwnership)}}}class MP{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Un.provider,this._offlineComponentProvider={build:t=>new rE(t,e?.cacheSizeBytes)}}}function LP(n){return new OP(n?.forceOwnership)}function Vx(){return new MP}/**
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
 */const FP={maxAttempts:5};/**
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
 */class UP{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Ur(e)}set(e,t,r){this._verifyNotCommitted();const s=Sn(e,this._firestore),i=el(s.converter,t,r),o=Hc(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,Te.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=Sn(e,this._firestore);let o;return o=typeof(t=ne(t))=="string"||t instanceof Lr?yd(this._dataReader,"WriteBatch.update",i._key,t,r,s):gd(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,Te.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Sn(e,this._firestore);return this._mutations=this._mutations.concat(new Qs(t._key,Te.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new D(R.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Sn(n,e){if((n=ne(n)).firestore!==e)throw new D(R.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */class BP{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Ur(e)}get(e){const t=Sn(e,this._firestore),r=new wd(this._firestore);return this._transaction.lookup([t._key]).then((s=>{if(!s||s.length!==1)return U(24041);const i=s[0];if(i.isFoundDocument())return new fo(this._firestore,r,i.key,i,t.converter);if(i.isNoDocument())return new fo(this._firestore,r,t._key,null,t.converter);throw U(18433,{doc:i})}))}set(e,t,r){const s=Sn(e,this._firestore),i=el(s.converter,t,r),o=Hc(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,r);return this._transaction.set(s._key,o),this}update(e,t,r,...s){const i=Sn(e,this._firestore);let o;return o=typeof(t=ne(t))=="string"||t instanceof Lr?yd(this._dataReader,"Transaction.update",i._key,t,r,s):gd(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,o),this}delete(e){const t=Sn(e,this._firestore);return this._transaction.delete(t._key),this}}/**
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
 */class qP extends BP{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Sn(e,this._firestore),r=new Qn(this._firestore);return super.get(e).then((s=>new ht(this._firestore,r,t._key,s._document,new An(!1,!1),t.converter)))}}function Ox(n,e,t){n=ee(n,me);const r={...FP,...t};return(function(i){if(i.maxAttempts<1)throw new D(R.INVALID_ARGUMENT,"Max attempts must be at least 1")})(r),(function(i,o,a){const l=new je;return i.asyncQueue.enqueueAndForget((async()=>{const u=await oE(i);new sP(i.asyncQueue,u,a,o,l).ju()})),l.promise})(Se(n),(s=>e(new qP(n,s))),r)}/**
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
 */function Mx(){return new Oo("deleteField")}function Lx(){return new fd("serverTimestamp")}function Fx(...n){return new pd("arrayUnion",n)}function Ux(...n){return new md("arrayRemove",n)}function Bx(n){return new _d("increment",n)}function qx(n){return new vt(n)}/**
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
 */function Gx(n){return Se(n=ee(n,me)),new UP(n,(e=>Fo(n,e)))}/**
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
 */function jx(n,e){const t=Se(n=ee(n,me));if(!t._uninitializedComponentsProvider||t._uninitializedComponentsProvider._offline.kind==="memory")return yt("Cannot enable indexes when persistence is disabled"),Promise.resolve();const r=(function(i){const o=typeof i=="string"?(function(u){try{return JSON.parse(u)}catch(d){throw new D(R.INVALID_ARGUMENT,"Failed to parse JSON: "+d?.message)}})(i):i,a=[];if(Array.isArray(o.indexes))for(const l of o.indexes){const u=o_(l,"collectionGroup"),d=[];if(Array.isArray(l.fields))for(const f of l.fields){const m=Qc("setIndexConfiguration",o_(f,"fieldPath"));f.arrayConfig==="CONTAINS"?d.push(new mr(m,2)):f.order==="ASCENDING"?d.push(new mr(m,0)):f.order==="DESCENDING"&&d.push(new mr(m,1))}a.push(new Is(Is.UNKNOWN_ID,u,d,Es.empty()))}return a})(e);return pP(t,r)}function o_(n,e){if(typeof n[e]!="string")throw new D(R.INVALID_ARGUMENT,"Missing string value for: "+e);return n[e]}/**
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
 */class GP{constructor(e){this._firestore=e,this.type="PersistentCacheIndexManager"}}function zx(n){n=ee(n,me);const e=a_.get(n);if(e)return e;if(Se(n)._uninitializedComponentsProvider?._offline.kind!=="persistent")return null;const r=new GP(n);return a_.set(n,r),r}function $x(n){CE(n,!0)}function Wx(n){CE(n,!1)}function Kx(n){_P(Se(n._firestore)).then((e=>x("deleting all persistent cache indexes succeeded"))).catch((e=>yt("deleting all persistent cache indexes failed",e)))}function CE(n,e){mP(Se(n._firestore),e).then((t=>x(`setting persistent cache index auto creation isEnabled=${e} succeeded`))).catch((t=>yt(`setting persistent cache index auto creation isEnabled=${e} failed`,t)))}const a_=new WeakMap;/**
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
 */function Hx(n){const e=Se(ee(n.firestore,me)),t=e._onlineComponents?.datastore.serializer;return t===void 0?null:Fc(t,Je(n._query)).ft}function Qx(n,e){const t=_y(e,((i,o)=>new Jy(o,i.aggregateType,i._internalFieldPath))),r=Se(ee(n.firestore,me)),s=r._onlineComponents?.datastore.serializer;return s===void 0?null:lI(s,Oy(n._query),t,!0).request}/**
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
 */class Yx{constructor(){throw new Error("instances of this class should not be created")}static onExistenceFilterMismatch(e){return Ad.instance.onExistenceFilterMismatch(e)}}class Ad{constructor(){this.Mc=new Map}static get instance(){return fa||(fa=new Ad,(function(t){if(Pu)throw new Error("a TestingHooksSpi instance is already set");Pu=t})(fa)),fa}lt(e){this.Mc.forEach((t=>t(e)))}onExistenceFilterMismatch(e){const t=Symbol(),r=this.Mc;return r.set(t,e),()=>r.delete(t)}}let fa=null;(function(e,t=!0){(function(s){Ws=s})(Vr),xn(new Qt("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new me(new tb(r.getProvider("auth-internal")),new sb(o,r.getProvider("app-check-internal")),(function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new D(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ir(u.options.projectId,d)})(o,s),o);return i={useFetchStreams:t,...i},a._setSettings(i),a}),"PUBLIC").setMultipleInstances(!0)),_t(Lp,Fp,e),_t(Lp,Fp,"esm2020")})();var c_={};const l_="@firebase/database",u_="1.1.0";/**
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
 */let PE="";function jP(n){PE=n}/**
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
 */class zP{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ge(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Yi(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class $P{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Gt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const NE=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new zP(e)}}catch{}return new $P},fr=NE("localStorage"),WP=NE("sessionStorage");/**
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
 */const hs=new vc("@firebase/database"),KP=(function(){let n=1;return function(){return n++}})(),kE=function(n){const e=jw(n),t=new Uw;t.update(e);const r=t.digest();return ih.encodeByteArray(r)},Uo=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Uo.apply(null,r):typeof r=="object"?e+=Ge(r):e+=r,e+=" "}return e};let $i=null,h_=!0;const HP=function(n,e){V(!0,"Can't turn on custom loggers persistently."),hs.logLevel=Z.VERBOSE,$i=hs.log.bind(hs)},qe=function(...n){if(h_===!0&&(h_=!1,$i===null&&WP.get("logging_enabled")===!0&&HP()),$i){const e=Uo.apply(null,n);$i(e)}},Bo=function(n){return function(...e){qe(n,...e)}},Gu=function(...n){const e="FIREBASE INTERNAL ERROR: "+Uo(...n);hs.error(e)},tn=function(...n){const e=`FIREBASE FATAL ERROR: ${Uo(...n)}`;throw hs.error(e),new Error(e)},et=function(...n){const e="FIREBASE WARNING: "+Uo(...n);hs.warn(e)},QP=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&et("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},tl=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},YP=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Ls="[MIN_NAME]",Pr="[MAX_NAME]",qr=function(n,e){if(n===e)return 0;if(n===Ls||e===Pr)return-1;if(e===Ls||n===Pr)return 1;{const t=d_(n),r=d_(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},JP=function(n,e){return n===e?0:n<e?-1:1},Ri=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Ge(e))},Sd=function(n){if(typeof n!="object"||n===null)return Ge(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=Ge(e[r]),t+=":",t+=Sd(n[e[r]]);return t+="}",t},DE=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let s=0;s<t;s+=e)s+e>t?r.push(n.substring(s,t)):r.push(n.substring(s,s+e));return r};function $e(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const xE=function(n){V(!tl(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let s,i,o,a,l;n===0?(i=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),r),i=a+r,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(i=0,o=Math.round(n/Math.pow(2,1-r-t))));const u=[];for(l=t;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(s?1:0),u.reverse();const d=u.join("");let f="";for(l=0;l<64;l+=8){let m=parseInt(d.substr(l,8),2).toString(16);m.length===1&&(m="0"+m),f=f+m}return f.toLowerCase()},XP=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ZP=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function eN(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const r=new Error(n+" at "+e._path.toString()+": "+t);return r.code=n.toUpperCase(),r}const tN=new RegExp("^-?(0*)\\d{1,10}$"),nN=-2147483648,rN=2147483647,d_=function(n){if(tN.test(n)){const e=Number(n);if(e>=nN&&e<=rN)return e}return null},ni=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw et("Exception was thrown by user callback.",t),e},Math.floor(0))}},sN=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Wi=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class iN{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,pt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){et(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class oN{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(qe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',et(e)}}class ka{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ka.OWNER="owner";/**
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
 */const bd="5",VE="v",OE="s",ME="r",LE="f",FE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,UE="ls",BE="p",ju="ac",qE="websocket",GE="long_polling";/**
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
 */class jE{constructor(e,t,r,s,i=!1,o="",a=!1,l=!1,u=null){this.secure=t,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=fr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&fr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function aN(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function zE(n,e,t){V(typeof e=="string","typeof type must == string"),V(typeof t=="object","typeof params must == object");let r;if(e===qE)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===GE)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);aN(n)&&(t.ns=n.namespace);const s=[];return $e(t,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
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
 */class cN{constructor(){this.counters_={}}incrementCounter(e,t=1){Gt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return ww(this.counters_)}}/**
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
 */const Zl={},eu={};function Rd(n){const e=n.toString();return Zl[e]||(Zl[e]=new cN),Zl[e]}function lN(n,e){const t=n.toString();return eu[t]||(eu[t]=e()),eu[t]}/**
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
 */class uN{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&ni(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const f_="start",hN="close",dN="pLPCommand",fN="pRTLPCB",$E="id",WE="pw",KE="ser",pN="cb",mN="seg",_N="ts",gN="d",yN="dframe",HE=1870,QE=30,IN=HE-QE,EN=25e3,TN=3e4;class ss{constructor(e,t,r,s,i,o,a){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Bo(e),this.stats_=Rd(t),this.urlFn=l=>(this.appCheckToken&&(l[ju]=this.appCheckToken),zE(t,GE,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new uN(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(TN)),YP(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Cd((...i)=>{const[o,a,l,u,d]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===f_)this.id=a,this.password=l;else if(o===hN)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[f_]="t",r[KE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[pN]=this.scriptTagHolder.uniqueCallbackIdentifier),r[VE]=bd,this.transportSessionId&&(r[OE]=this.transportSessionId),this.lastSessionId&&(r[UE]=this.lastSessionId),this.applicationId&&(r[BE]=this.applicationId),this.appCheckToken&&(r[ju]=this.appCheckToken),typeof location<"u"&&location.hostname&&FE.test(location.hostname)&&(r[ME]=LE);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ss.forceAllow_=!0}static forceDisallow(){ss.forceDisallow_=!0}static isAvailable(){return ss.forceAllow_?!0:!ss.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!XP()&&!ZP()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Ge(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=H_(t),s=DE(r,IN);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[yN]="t",r[$E]=e,r[WE]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Ge(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Cd{constructor(e,t,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=KP(),window[dN+this.uniqueCallbackIdentifier]=e,window[fN+this.uniqueCallbackIdentifier]=t,this.myIFrame=Cd.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){qe("frame writing exception"),a.stack&&qe(a.stack),qe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||qe("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[$E]=this.myID,e[WE]=this.myPW,e[KE]=this.currentSerial;let t=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+QE+r.length<=HE;){const o=this.pendingSegs.shift();r=r+"&"+mN+s+"="+o.seg+"&"+_N+s+"="+o.ts+"&"+gN+s+"="+o.d,s++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(r,Math.floor(EN)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{qe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const wN=16384,vN=45e3;let ic=null;typeof MozWebSocket<"u"?ic=MozWebSocket:typeof WebSocket<"u"&&(ic=WebSocket);class Et{constructor(e,t,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Bo(this.connId),this.stats_=Rd(t),this.connURL=Et.connectionURL_(t,o,a,s,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,s,i){const o={};return o[VE]=bd,typeof location<"u"&&location.hostname&&FE.test(location.hostname)&&(o[ME]=LE),t&&(o[OE]=t),r&&(o[UE]=r),s&&(o[ju]=s),i&&(o[BE]=i),zE(e,qE,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,fr.set("previous_websocket_failure",!0);try{let r;Dw(),this.mySock=new ic(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Et.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&ic!==null&&!Et.forceDisallow_}static previouslyFailed(){return fr.isInMemoryStorage||fr.get("previous_websocket_failure")===!0}markConnectionHealthy(){fr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=Yi(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(V(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=Ge(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=DE(t,wN);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(vN))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Et.responsesRequiredToBeHealthy=2;Et.healthyTimeout=3e4;/**
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
 */class po{static get ALL_TRANSPORTS(){return[ss,Et]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Et&&Et.isAvailable();let r=t&&!Et.previouslyFailed();if(e.webSocketOnly&&(t||et("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Et];else{const s=this.transports_=[];for(const i of po.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);po.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}po.globalTransportInitialized_=!1;/**
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
 */const AN=6e4,SN=5e3,bN=10*1024,RN=100*1024,tu="t",p_="d",CN="s",m_="r",PN="e",__="o",g_="a",y_="n",I_="p",NN="h";class kN{constructor(e,t,r,s,i,o,a,l,u,d){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Bo("c:"+this.id+":"),this.transportManager_=new po(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Wi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>RN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>bN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(tu in e){const t=e[tu];t===g_?this.upgradeIfSecondaryHealthy_():t===m_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===__&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Ri("t",e),r=Ri("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:I_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:g_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:y_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Ri("t",e),r=Ri("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Ri(tu,e);if(p_ in e){const r=e[p_];if(t===NN){const s={...r};this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===y_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===CN?this.onConnectionShutdown_(r):t===m_?this.onReset_(r):t===PN?Gu("Server Error: "+r):t===__?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Gu("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),bd!==r&&et("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),Wi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(AN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Wi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(SN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:I_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(fr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class YE{put(e,t,r,s){}merge(e,t,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class JE{constructor(e){this.allowedEvents_=e,this.listeners_={},V(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const s=this.getInitialEvent(e);s&&t.apply(r,s)}off(e,t,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===t&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){V(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class oc extends JE{static getInstance(){return new oc}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ah()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return V(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const E_=32,T_=768;class he{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function ae(){return new he("")}function Q(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function qn(n){return n.pieces_.length-n.pieceNum_}function pe(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new he(n.pieces_,e)}function Pd(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function DN(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function mo(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function XE(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new he(e,0)}function we(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof he)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&t.push(r[s])}return new he(t,0)}function Y(n){return n.pieceNum_>=n.pieces_.length}function it(n,e){const t=Q(n),r=Q(e);if(t===null)return e;if(t===r)return it(pe(n),pe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function xN(n,e){const t=mo(n,0),r=mo(e,0);for(let s=0;s<t.length&&s<r.length;s++){const i=qr(t[s],r[s]);if(i!==0)return i}return t.length===r.length?0:t.length<r.length?-1:1}function Nd(n,e){if(qn(n)!==qn(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function mt(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(qn(n)>qn(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class VN{constructor(e,t){this.errorPrefix_=t,this.parts_=mo(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=wc(this.parts_[r]);ZE(this)}}function ON(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=wc(e),ZE(n)}function MN(n){const e=n.parts_.pop();n.byteLength_-=wc(e),n.parts_.length>0&&(n.byteLength_-=1)}function ZE(n){if(n.byteLength_>T_)throw new Error(n.errorPrefix_+"has a key path longer than "+T_+" bytes ("+n.byteLength_+").");if(n.parts_.length>E_)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+E_+") or object contains a cycle "+ar(n))}function ar(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class kd extends JE{static getInstance(){return new kd}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return V(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ci=1e3,LN=300*1e3,w_=30*1e3,FN=1.3,UN=3e4,BN="server_kill",v_=3;class Ht extends YE{constructor(e,t,r,s,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Ht.nextPersistentConnectionId_++,this.log_=Bo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ci,this.maxReconnectDelay_=LN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");kd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&oc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const s=++this.requestNumber_,i={r:s,a:e,b:t};this.log_(Ge(i)),V(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const t=new kt,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),V(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),V(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,u=a.s;Ht.warnOnListenWarnings_(l,t),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Gt(e,"w")){const r=ps(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();et(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Fw(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=w_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Lw(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),V(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,t)}sendUnlisten_(e,t,r,s){this.log_("Unlisten on "+e+" for "+t);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,s){const i={p:t,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,r,s){this.putInternal("p",e,t,r,s)}merge(e,t,r,s){this.putInternal("m",e,t,r,s)}putInternal(e,t,r,s,i){this.initConnection_();const o={p:t,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,i=>{this.log_(t+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ge(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Gu("Unrecognized action received from server: "+Ge(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){V(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ci,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ci,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>UN&&(this.reconnectDelay_=Ci),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*FN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Ht.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(f){V(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,m]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?qe("getToken() completed but was canceled"):(qe("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=m&&m.token,a=new kN(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,g=>{et(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(BN)},i))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&et(f),l())}}}interrupt(e){qe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){qe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Va(this.interruptReasons_)&&(this.reconnectDelay_=Ci,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(i=>Sd(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const r=new he(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(t),i.delete(t),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,t){qe("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=v_&&(this.reconnectDelay_=w_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){qe("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=v_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+PE.replace(/\./g,"-")]=1,ah()?e["framework.cordova"]=1:ng()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=oc.getInstance().currentlyOnline();return Va(this.interruptReasons_)&&e}}Ht.nextPersistentConnectionId_=0;Ht.nextConnectionId_=0;/**
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
 */class X{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new X(e,t)}}/**
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
 */class nl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new X(Ls,e),s=new X(Ls,t);return this.compare(r,s)!==0}minPost(){return X.MIN}}/**
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
 */let pa;class eT extends nl{static get __EMPTY_NODE(){return pa}static set __EMPTY_NODE(e){pa=e}compare(e,t){return qr(e.name,t.name)}isDefinedOn(e){throw js("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return X.MIN}maxPost(){return new X(Pr,pa)}makePost(e,t){return V(typeof e=="string","KeyIndex indexValue must always be a string."),new X(e,pa)}toString(){return".key"}}const ds=new eT;/**
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
 */class ma{constructor(e,t,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?r(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Be{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Be.RED,this.left=s??ot.EMPTY_NODE,this.right=i??ot.EMPTY_NODE}copy(e,t,r,s,i){return new Be(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return ot.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,s;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return ot.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Be.RED=!0;Be.BLACK=!1;class qN{copy(e,t,r,s,i){return this}insert(e,t,r){return new Be(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ot{constructor(e,t=ot.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ot(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Be.BLACK,null,null))}remove(e){return new ot(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Be.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,s=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ma(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ma(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ma(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ma(this.root_,null,this.comparator_,!0,e)}}ot.EMPTY_NODE=new qN;/**
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
 */function GN(n,e){return qr(n.name,e.name)}function Dd(n,e){return qr(n,e)}/**
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
 */let zu;function jN(n){zu=n}const tT=function(n){return typeof n=="number"?"number:"+xE(n):"string:"+n},nT=function(n){if(n.isLeafNode()){const e=n.val();V(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Gt(e,".sv"),"Priority must be a string or number.")}else V(n===zu||n.isEmpty(),"priority of unexpected type.");V(n===zu||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let A_;class Le{static set __childrenNodeConstructor(e){A_=e}static get __childrenNodeConstructor(){return A_}constructor(e,t=Le.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,V(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),nT(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Le(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Le.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Y(e)?this:Q(e)===".priority"?this.priorityNode_:Le.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Le.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=Q(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(V(r!==".priority"||qn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Le.__childrenNodeConstructor.EMPTY_NODE.updateChild(pe(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+tT(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=xE(this.value_):e+=this.value_,this.lazyHash_=kE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Le.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Le.__childrenNodeConstructor?-1:(V(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,s=Le.VALUE_TYPE_ORDER.indexOf(t),i=Le.VALUE_TYPE_ORDER.indexOf(r);return V(s>=0,"Unknown leaf type: "+t),V(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Le.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let rT,sT;function zN(n){rT=n}function $N(n){sT=n}class WN extends nl{compare(e,t){const r=e.node.getPriority(),s=t.node.getPriority(),i=r.compareTo(s);return i===0?qr(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return X.MIN}maxPost(){return new X(Pr,new Le("[PRIORITY-POST]",sT))}makePost(e,t){const r=rT(e);return new X(t,new Le("[PRIORITY-POST]",r))}toString(){return".priority"}}const ve=new WN;/**
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
 */const KN=Math.log(2);class HN{constructor(e){const t=i=>parseInt(Math.log(i)/KN,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ac=function(n,e,t,r){n.sort(e);const s=function(l,u){const d=u-l;let f,m;if(d===0)return null;if(d===1)return f=n[l],m=t?t(f):f,new Be(m,f.node,Be.BLACK,null,null);{const g=parseInt(d/2,10)+l,A=s(l,g),N=s(g+1,u);return f=n[g],m=t?t(f):f,new Be(m,f.node,Be.BLACK,A,N)}},i=function(l){let u=null,d=null,f=n.length;const m=function(A,N){const k=f-A,F=f;f-=A;const G=s(k+1,F),B=n[k],ie=t?t(B):B;g(new Be(ie,B.node,N,null,G))},g=function(A){u?(u.left=A,u=A):(d=A,u=A)};for(let A=0;A<l.count;++A){const N=l.nextBitIsOne(),k=Math.pow(2,l.count-(A+1));N?m(k,Be.BLACK):(m(k,Be.BLACK),m(k,Be.RED))}return d},o=new HN(n.length),a=i(o);return new ot(r||e,a)};/**
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
 */let nu;const Xr={};class Kt{static get Default(){return V(Xr&&ve,"ChildrenNode.ts has not been loaded"),nu=nu||new Kt({".priority":Xr},{".priority":ve}),nu}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=ps(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ot?t:null}hasIndex(e){return Gt(this.indexSet_,e.toString())}addIndex(e,t){V(e!==ds,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=t.getIterator(X.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=ac(r,e.getCompare()):a=Xr;const l=e.toString(),u={...this.indexSet_};u[l]=e;const d={...this.indexes_};return d[l]=a,new Kt(d,u)}addToIndexes(e,t){const r=Oa(this.indexes_,(s,i)=>{const o=ps(this.indexSet_,i);if(V(o,"Missing index implementation for "+i),s===Xr)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(X.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),ac(a,o.getCompare())}else return Xr;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new X(e.name,a))),l.insert(e,e.node)}});return new Kt(r,this.indexSet_)}removeFromIndexes(e,t){const r=Oa(this.indexes_,s=>{if(s===Xr)return s;{const i=t.get(e.name);return i?s.remove(new X(e.name,i)):s}});return new Kt(r,this.indexSet_)}}/**
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
 */let Pi;class ${static get EMPTY_NODE(){return Pi||(Pi=new $(new ot(Dd),null,Kt.Default))}constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&nT(this.priorityNode_),this.children_.isEmpty()&&V(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Pi}updatePriority(e){return this.children_.isEmpty()?this:new $(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Pi:t}}getChild(e){const t=Q(e);return t===null?this:this.getImmediateChild(t).getChild(pe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(V(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new X(e,t);let s,i;t.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?Pi:this.priorityNode_;return new $(s,o,i)}}updateChild(e,t){const r=Q(e);if(r===null)return t;{V(Q(e)!==".priority"||qn(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(pe(e),t);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,s=0,i=!0;if(this.forEachChild(ve,(o,a)=>{t[o]=a.val(e),r++,i&&$.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+tT(this.getPriority().val())+":"),this.forEachChild(ve,(t,r)=>{const s=r.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":kE(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new X(e,t));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new X(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new X(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,X.Wrap);let i=s.peek();for(;i!=null&&t.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,X.Wrap);let i=s.peek();for(;i!=null&&t.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===qo?-1:0}withIndex(e){if(e===ds||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new $(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===ds||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(ve),s=t.getIterator(ve);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ds?null:this.indexMap_.get(e.toString())}}$.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class QN extends ${constructor(){super(new ot(Dd),$.EMPTY_NODE,Kt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return $.EMPTY_NODE}isEmpty(){return!1}}const qo=new QN;Object.defineProperties(X,{MIN:{value:new X(Ls,$.EMPTY_NODE)},MAX:{value:new X(Pr,qo)}});eT.__EMPTY_NODE=$.EMPTY_NODE;Le.__childrenNodeConstructor=$;jN(qo);$N(qo);/**
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
 */const YN=!0;function Ce(n,e=null){if(n===null)return $.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),V(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Le(t,Ce(e))}if(!(n instanceof Array)&&YN){const t=[];let r=!1;if($e(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ce(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),t.push(new X(o,l)))}}),t.length===0)return $.EMPTY_NODE;const i=ac(t,GN,o=>o.name,Dd);if(r){const o=ac(t,ve.getCompare());return new $(i,Ce(e),new Kt({".priority":o},{".priority":ve}))}else return new $(i,Ce(e),Kt.Default)}else{let t=$.EMPTY_NODE;return $e(n,(r,s)=>{if(Gt(n,r)&&r.substring(0,1)!=="."){const i=Ce(s);(i.isLeafNode()||!i.isEmpty())&&(t=t.updateImmediateChild(r,i))}}),t.updatePriority(Ce(e))}}zN(Ce);/**
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
 */class JN extends nl{constructor(e){super(),this.indexPath_=e,V(!Y(e)&&Q(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),s=this.extractChild(t.node),i=r.compareTo(s);return i===0?qr(e.name,t.name):i}makePost(e,t){const r=Ce(e),s=$.EMPTY_NODE.updateChild(this.indexPath_,r);return new X(t,s)}maxPost(){const e=$.EMPTY_NODE.updateChild(this.indexPath_,qo);return new X(Pr,e)}toString(){return mo(this.indexPath_,0).join("/")}}/**
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
 */class XN extends nl{compare(e,t){const r=e.node.compareTo(t.node);return r===0?qr(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return X.MIN}maxPost(){return X.MAX}makePost(e,t){const r=Ce(e);return new X(t,r)}toString(){return".value"}}const ZN=new XN;/**
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
 */function iT(n){return{type:"value",snapshotNode:n}}function Fs(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function _o(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function go(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function e0(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class xd{constructor(e){this.index_=e}updateChild(e,t,r,s,i,o){V(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(r.getChild(s))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(t)?o.trackChildChange(_o(t,a)):V(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Fs(t,r)):o.trackChildChange(go(t,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(t,r).withIndex(this.index_)}updateFullNode(e,t,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ve,(s,i)=>{t.hasChild(s)||r.trackChildChange(_o(s,i))}),t.isLeafNode()||t.forEachChild(ve,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||r.trackChildChange(go(s,i,o))}else r.trackChildChange(Fs(s,i))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?$.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class yo{constructor(e){this.indexedFilter_=new xd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=yo.getStartPost_(e),this.endPost_=yo.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&r}updateChild(e,t,r,s,i,o){return this.matches(new X(t,r))||(r=$.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,r,s,i,o)}updateFullNode(e,t,r){t.isLeafNode()&&(t=$.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority($.EMPTY_NODE);const i=this;return t.forEachChild(ve,(o,a)=>{i.matches(new X(o,a))||(s=s.updateImmediateChild(o,$.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class t0{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=t=>{const r=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new yo(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,r,s,i,o){return this.rangedFilter_.matches(new X(t,r))||(r=$.EMPTY_NODE),e.getImmediateChild(t).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,r,s,i,o):this.fullLimitUpdateChild_(e,t,r,i,o)}updateFullNode(e,t,r){let s;if(t.isLeafNode()||t.isEmpty())s=$.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=$.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority($.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,$.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,r,s,i){let o;if(this.reverse_){const f=this.index_.getCompare();o=(m,g)=>f(g,m)}else o=this.index_.getCompare();const a=e;V(a.numChildren()===this.limit_,"");const l=new X(t,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(t)){const f=a.getImmediateChild(t);let m=s.getChildAfterChild(this.index_,u,this.reverse_);for(;m!=null&&(m.name===t||a.hasChild(m.name));)m=s.getChildAfterChild(this.index_,m,this.reverse_);const g=m==null?1:o(m,l);if(d&&!r.isEmpty()&&g>=0)return i?.trackChildChange(go(t,r,f)),a.updateImmediateChild(t,r);{i?.trackChildChange(_o(t,f));const N=a.updateImmediateChild(t,$.EMPTY_NODE);return m!=null&&this.rangedFilter_.matches(m)?(i?.trackChildChange(Fs(m.name,m.node)),N.updateImmediateChild(m.name,m.node)):N}}else return r.isEmpty()?e:d&&o(u,l)>=0?(i!=null&&(i.trackChildChange(_o(u.name,u.node)),i.trackChildChange(Fs(t,r))),a.updateImmediateChild(t,r).updateImmediateChild(u.name,$.EMPTY_NODE)):e}}/**
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
 */class Vd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ve}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return V(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return V(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ls}hasEnd(){return this.endSet_}getIndexEndValue(){return V(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return V(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Pr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return V(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ve}copy(){const e=new Vd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function n0(n){return n.loadsAllData()?new xd(n.getIndex()):n.hasLimit()?new t0(n):new yo(n)}function S_(n){const e={};if(n.isDefault())return e;let t;if(n.index_===ve?t="$priority":n.index_===ZN?t="$value":n.index_===ds?t="$key":(V(n.index_ instanceof JN,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Ge(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=Ge(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+Ge(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=Ge(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+Ge(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function b_(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==ve&&(e.i=n.index_.toString()),e}/**
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
 */class cc extends YE{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(V(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=Bo("p:rest:"),this.listens_={}}listen(e,t,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=cc.getListenId_(e,r),a={};this.listens_[o]=a;const l=S_(e._queryParams);this.restRequest_(i+".json",l,(u,d)=>{let f=d;if(u===404&&(f=null,u=null),u===null&&this.onDataUpdate_(i,f,!1,r),ps(this.listens_,o)===a){let m;u?u===401?m="permission_denied":m="rest_error:"+u:m="ok",s(m,null)}})}unlisten(e,t){const r=cc.getListenId_(e,t);delete this.listens_[r]}get(e){const t=S_(e._queryParams),r=e._path.toString(),s=new kt;return this.restRequest_(r+".json",t,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(t.auth=s.accessToken),i&&i.token&&(t.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+zs(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Yi(a.responseText)}catch{et("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&et("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class r0{constructor(){this.rootNode_=$.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function lc(){return{value:null,children:new Map}}function ri(n,e,t){if(Y(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=Q(e);n.children.has(r)||n.children.set(r,lc());const s=n.children.get(r);e=pe(e),ri(s,e,t)}}function $u(n,e){if(Y(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(ve,(r,s)=>{ri(n,new he(r),s)}),$u(n,e)}}else if(n.children.size>0){const t=Q(e);return e=pe(e),n.children.has(t)&&$u(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function Wu(n,e,t){n.value!==null?t(e,n.value):s0(n,(r,s)=>{const i=new he(e.toString()+"/"+r);Wu(s,i,t)})}function s0(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
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
 */class i0{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&$e(this.last_,(r,s)=>{t[r]=t[r]-s}),this.last_=e,t}}/**
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
 */const R_=10*1e3,o0=30*1e3,a0=300*1e3;class c0{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new i0(e);const r=R_+(o0-R_)*Math.random();Wi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;$e(e,(s,i)=>{i>0&&Gt(this.statsToReport_,s)&&(t[s]=i,r=!0)}),r&&this.server_.reportStats(t),Wi(this.reportStats_.bind(this),Math.floor(Math.random()*2*a0))}}/**
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
 */var wt;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(wt||(wt={}));function Od(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Md(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ld(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class uc{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=wt.ACK_USER_WRITE,this.source=Od()}operationForChild(e){if(Y(this.path)){if(this.affectedTree.value!=null)return V(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new he(e));return new uc(ae(),t,this.revert)}}else return V(Q(this.path)===e,"operationForChild called for unrelated child."),new uc(pe(this.path),this.affectedTree,this.revert)}}/**
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
 */class Io{constructor(e,t){this.source=e,this.path=t,this.type=wt.LISTEN_COMPLETE}operationForChild(e){return Y(this.path)?new Io(this.source,ae()):new Io(this.source,pe(this.path))}}/**
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
 */class Nr{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=wt.OVERWRITE}operationForChild(e){return Y(this.path)?new Nr(this.source,ae(),this.snap.getImmediateChild(e)):new Nr(this.source,pe(this.path),this.snap)}}/**
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
 */class Us{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=wt.MERGE}operationForChild(e){if(Y(this.path)){const t=this.children.subtree(new he(e));return t.isEmpty()?null:t.value?new Nr(this.source,ae(),t.value):new Us(this.source,ae(),t)}else return V(Q(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Us(this.source,pe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class kr{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Y(e))return this.isFullyInitialized()&&!this.filtered_;const t=Q(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class l0{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function u0(n,e,t,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(e0(o.childName,o.snapshotNode))}),Ni(n,s,"child_removed",e,r,t),Ni(n,s,"child_added",e,r,t),Ni(n,s,"child_moved",i,r,t),Ni(n,s,"child_changed",e,r,t),Ni(n,s,"value",e,r,t),s}function Ni(n,e,t,r,s,i){const o=r.filter(a=>a.type===t);o.sort((a,l)=>d0(n,a,l)),o.forEach(a=>{const l=h0(n,a,i);s.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,n.query_))})})}function h0(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function d0(n,e,t){if(e.childName==null||t.childName==null)throw js("Should only compare child_ events.");const r=new X(e.childName,e.snapshotNode),s=new X(t.childName,t.snapshotNode);return n.index_.compare(r,s)}/**
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
 */function rl(n,e){return{eventCache:n,serverCache:e}}function Ki(n,e,t,r){return rl(new kr(e,t,r),n.serverCache)}function oT(n,e,t,r){return rl(n.eventCache,new kr(e,t,r))}function Ku(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Dr(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let ru;const f0=()=>(ru||(ru=new ot(JP)),ru);class _e{static fromObject(e){let t=new _e(null);return $e(e,(r,s)=>{t=t.set(new he(r),s)}),t}constructor(e,t=f0()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:ae(),value:this.value};if(Y(e))return null;{const r=Q(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(pe(e),t);return i!=null?{path:we(new he(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Y(e))return this;{const t=Q(e),r=this.children.get(t);return r!==null?r.subtree(pe(e)):new _e(null)}}set(e,t){if(Y(e))return new _e(t,this.children);{const r=Q(e),i=(this.children.get(r)||new _e(null)).set(pe(e),t),o=this.children.insert(r,i);return new _e(this.value,o)}}remove(e){if(Y(e))return this.children.isEmpty()?new _e(null):new _e(null,this.children);{const t=Q(e),r=this.children.get(t);if(r){const s=r.remove(pe(e));let i;return s.isEmpty()?i=this.children.remove(t):i=this.children.insert(t,s),this.value===null&&i.isEmpty()?new _e(null):new _e(this.value,i)}else return this}}get(e){if(Y(e))return this.value;{const t=Q(e),r=this.children.get(t);return r?r.get(pe(e)):null}}setTree(e,t){if(Y(e))return t;{const r=Q(e),i=(this.children.get(r)||new _e(null)).setTree(pe(e),t);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new _e(this.value,o)}}fold(e){return this.fold_(ae(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(we(e,s),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,ae(),t)}findOnPath_(e,t,r){const s=this.value?r(t,this.value):!1;if(s)return s;if(Y(e))return null;{const i=Q(e),o=this.children.get(i);return o?o.findOnPath_(pe(e),we(t,i),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ae(),t)}foreachOnPath_(e,t,r){if(Y(e))return this;{this.value&&r(t,this.value);const s=Q(e),i=this.children.get(s);return i?i.foreachOnPath_(pe(e),we(t,s),r):new _e(null)}}foreach(e){this.foreach_(ae(),e)}foreach_(e,t){this.children.inorderTraversal((r,s)=>{s.foreach_(we(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
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
 */class At{constructor(e){this.writeTree_=e}static empty(){return new At(new _e(null))}}function Hi(n,e,t){if(Y(e))return new At(new _e(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=it(s,e);return i=i.updateChild(o,t),new At(n.writeTree_.set(s,i))}else{const s=new _e(t),i=n.writeTree_.setTree(e,s);return new At(i)}}}function Hu(n,e,t){let r=n;return $e(t,(s,i)=>{r=Hi(r,we(e,s),i)}),r}function C_(n,e){if(Y(e))return At.empty();{const t=n.writeTree_.setTree(e,new _e(null));return new At(t)}}function Qu(n,e){return Gr(n,e)!=null}function Gr(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(it(t.path,e)):null}function P_(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(ve,(r,s)=>{e.push(new X(r,s))}):n.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new X(r,s.value))}),e}function Dn(n,e){if(Y(e))return n;{const t=Gr(n,e);return t!=null?new At(new _e(t)):new At(n.writeTree_.subtree(e))}}function Yu(n){return n.writeTree_.isEmpty()}function Bs(n,e){return aT(ae(),n.writeTree_,e)}function aT(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(V(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):t=aT(we(n,s),i,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(we(n,".priority"),r)),t}}/**
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
 */function Fd(n,e){return hT(e,n)}function p0(n,e,t,r,s){V(r>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:s}),s&&(n.visibleWrites=Hi(n.visibleWrites,e,t)),n.lastWriteId=r}function m0(n,e,t,r){V(r>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:r,visible:!0}),n.visibleWrites=Hu(n.visibleWrites,e,t),n.lastWriteId=r}function _0(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function g0(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);V(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let s=r.visible,i=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&y0(a,r.path)?s=!1:mt(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return I0(n),!0;if(r.snap)n.visibleWrites=C_(n.visibleWrites,r.path);else{const a=r.children;$e(a,l=>{n.visibleWrites=C_(n.visibleWrites,we(r.path,l))})}return!0}else return!1}function y0(n,e){if(n.snap)return mt(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&mt(we(n.path,t),e))return!0;return!1}function I0(n){n.visibleWrites=cT(n.allWrites,E0,ae()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function E0(n){return n.visible}function cT(n,e,t){let r=At.empty();for(let s=0;s<n.length;++s){const i=n[s];if(e(i)){const o=i.path;let a;if(i.snap)mt(t,o)?(a=it(t,o),r=Hi(r,a,i.snap)):mt(o,t)&&(a=it(o,t),r=Hi(r,ae(),i.snap.getChild(a)));else if(i.children){if(mt(t,o))a=it(t,o),r=Hu(r,a,i.children);else if(mt(o,t))if(a=it(o,t),Y(a))r=Hu(r,ae(),i.children);else{const l=ps(i.children,Q(a));if(l){const u=l.getChild(pe(a));r=Hi(r,ae(),u)}}}else throw js("WriteRecord should have .snap or .children")}}return r}function lT(n,e,t,r,s){if(!r&&!s){const i=Gr(n.visibleWrites,e);if(i!=null)return i;{const o=Dn(n.visibleWrites,e);if(Yu(o))return t;if(t==null&&!Qu(o,ae()))return null;{const a=t||$.EMPTY_NODE;return Bs(o,a)}}}else{const i=Dn(n.visibleWrites,e);if(!s&&Yu(i))return t;if(!s&&t==null&&!Qu(i,ae()))return null;{const o=function(u){return(u.visible||s)&&(!r||!~r.indexOf(u.writeId))&&(mt(u.path,e)||mt(e,u.path))},a=cT(n.allWrites,o,e),l=t||$.EMPTY_NODE;return Bs(a,l)}}}function T0(n,e,t){let r=$.EMPTY_NODE;const s=Gr(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(ve,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(t){const i=Dn(n.visibleWrites,e);return t.forEachChild(ve,(o,a)=>{const l=Bs(Dn(i,new he(o)),a);r=r.updateImmediateChild(o,l)}),P_(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=Dn(n.visibleWrites,e);return P_(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function w0(n,e,t,r,s){V(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=we(e,t);if(Qu(n.visibleWrites,i))return null;{const o=Dn(n.visibleWrites,i);return Yu(o)?s.getChild(t):Bs(o,s.getChild(t))}}function v0(n,e,t,r){const s=we(e,t),i=Gr(n.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(t)){const o=Dn(n.visibleWrites,s);return Bs(o,r.getNode().getImmediateChild(t))}else return null}function A0(n,e){return Gr(n.visibleWrites,e)}function S0(n,e,t,r,s,i,o){let a;const l=Dn(n.visibleWrites,e),u=Gr(l,ae());if(u!=null)a=u;else if(t!=null)a=Bs(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],f=o.getCompare(),m=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=m.getNext();for(;g&&d.length<s;)f(g,r)!==0&&d.push(g),g=m.getNext();return d}else return[]}function b0(){return{visibleWrites:At.empty(),allWrites:[],lastWriteId:-1}}function hc(n,e,t,r){return lT(n.writeTree,n.treePath,e,t,r)}function Ud(n,e){return T0(n.writeTree,n.treePath,e)}function N_(n,e,t,r){return w0(n.writeTree,n.treePath,e,t,r)}function dc(n,e){return A0(n.writeTree,we(n.treePath,e))}function R0(n,e,t,r,s,i){return S0(n.writeTree,n.treePath,e,t,r,s,i)}function Bd(n,e,t){return v0(n.writeTree,n.treePath,e,t)}function uT(n,e){return hT(we(n.treePath,e),n.writeTree)}function hT(n,e){return{treePath:n,writeTree:e}}/**
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
 */class C0{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;V(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),V(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(t==="child_added"&&i==="child_removed")this.changeMap.set(r,go(r,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&i==="child_changed")this.changeMap.set(r,_o(r,s.oldSnap));else if(t==="child_changed"&&i==="child_added")this.changeMap.set(r,Fs(r,e.snapshotNode));else if(t==="child_changed"&&i==="child_changed")this.changeMap.set(r,go(r,e.snapshotNode,s.oldSnap));else throw js("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class P0{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const dT=new P0;class qd{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new kr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Bd(this.writes_,e,r)}}getChildAfterChild(e,t,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Dr(this.viewCache_),i=R0(this.writes_,s,t,1,r,e);return i.length===0?null:i[0]}}/**
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
 */function N0(n){return{filter:n}}function k0(n,e){V(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),V(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function D0(n,e,t,r,s){const i=new C0;let o,a;if(t.type===wt.OVERWRITE){const u=t;u.source.fromUser?o=Ju(n,e,u.path,u.snap,r,s,i):(V(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!Y(u.path),o=fc(n,e,u.path,u.snap,r,s,a,i))}else if(t.type===wt.MERGE){const u=t;u.source.fromUser?o=V0(n,e,u.path,u.children,r,s,i):(V(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Xu(n,e,u.path,u.children,r,s,a,i))}else if(t.type===wt.ACK_USER_WRITE){const u=t;u.revert?o=L0(n,e,u.path,r,s,i):o=O0(n,e,u.path,u.affectedTree,r,s,i)}else if(t.type===wt.LISTEN_COMPLETE)o=M0(n,e,t.path,r,i);else throw js("Unknown operation type: "+t.type);const l=i.getChanges();return x0(e,o,l),{viewCache:o,changes:l}}function x0(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=Ku(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&t.push(iT(Ku(e)))}}function fT(n,e,t,r,s,i){const o=e.eventCache;if(dc(r,t)!=null)return e;{let a,l;if(Y(t))if(V(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Dr(e),d=u instanceof $?u:$.EMPTY_NODE,f=Ud(r,d);a=n.filter.updateFullNode(e.eventCache.getNode(),f,i)}else{const u=hc(r,Dr(e));a=n.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=Q(t);if(u===".priority"){V(qn(t)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const f=N_(r,t,d,l);f!=null?a=n.filter.updatePriority(d,f):a=o.getNode()}else{const d=pe(t);let f;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const m=N_(r,t,o.getNode(),l);m!=null?f=o.getNode().getImmediateChild(u).updateChild(d,m):f=o.getNode().getImmediateChild(u)}else f=Bd(r,u,e.serverCache);f!=null?a=n.filter.updateChild(o.getNode(),u,f,d,s,i):a=o.getNode()}}return Ki(e,a,o.isFullyInitialized()||Y(t),n.filter.filtersNodes())}}function fc(n,e,t,r,s,i,o,a){const l=e.serverCache;let u;const d=o?n.filter:n.filter.getIndexedFilter();if(Y(t))u=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(t,r);u=d.updateFullNode(l.getNode(),g,null)}else{const g=Q(t);if(!l.isCompleteForPath(t)&&qn(t)>1)return e;const A=pe(t),k=l.getNode().getImmediateChild(g).updateChild(A,r);g===".priority"?u=d.updatePriority(l.getNode(),k):u=d.updateChild(l.getNode(),g,k,A,dT,null)}const f=oT(e,u,l.isFullyInitialized()||Y(t),d.filtersNodes()),m=new qd(s,f,i);return fT(n,f,t,s,m,a)}function Ju(n,e,t,r,s,i,o){const a=e.eventCache;let l,u;const d=new qd(s,e,i);if(Y(t))u=n.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Ki(e,u,!0,n.filter.filtersNodes());else{const f=Q(t);if(f===".priority")u=n.filter.updatePriority(e.eventCache.getNode(),r),l=Ki(e,u,a.isFullyInitialized(),a.isFiltered());else{const m=pe(t),g=a.getNode().getImmediateChild(f);let A;if(Y(m))A=r;else{const N=d.getCompleteChild(f);N!=null?Pd(m)===".priority"&&N.getChild(XE(m)).isEmpty()?A=N:A=N.updateChild(m,r):A=$.EMPTY_NODE}if(g.equals(A))l=e;else{const N=n.filter.updateChild(a.getNode(),f,A,m,d,o);l=Ki(e,N,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function k_(n,e){return n.eventCache.isCompleteForChild(e)}function V0(n,e,t,r,s,i,o){let a=e;return r.foreach((l,u)=>{const d=we(t,l);k_(e,Q(d))&&(a=Ju(n,a,d,u,s,i,o))}),r.foreach((l,u)=>{const d=we(t,l);k_(e,Q(d))||(a=Ju(n,a,d,u,s,i,o))}),a}function D_(n,e,t){return t.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function Xu(n,e,t,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;Y(t)?u=r:u=new _e(null).setTree(t,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((f,m)=>{if(d.hasChild(f)){const g=e.serverCache.getNode().getImmediateChild(f),A=D_(n,g,m);l=fc(n,l,new he(f),A,s,i,o,a)}}),u.children.inorderTraversal((f,m)=>{const g=!e.serverCache.isCompleteForChild(f)&&m.value===null;if(!d.hasChild(f)&&!g){const A=e.serverCache.getNode().getImmediateChild(f),N=D_(n,A,m);l=fc(n,l,new he(f),N,s,i,o,a)}}),l}function O0(n,e,t,r,s,i,o){if(dc(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(Y(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return fc(n,e,t,l.getNode().getChild(t),s,i,a,o);if(Y(t)){let u=new _e(null);return l.getNode().forEachChild(ds,(d,f)=>{u=u.set(new he(d),f)}),Xu(n,e,t,u,s,i,a,o)}else return e}else{let u=new _e(null);return r.foreach((d,f)=>{const m=we(t,d);l.isCompleteForPath(m)&&(u=u.set(d,l.getNode().getChild(m)))}),Xu(n,e,t,u,s,i,a,o)}}function M0(n,e,t,r,s){const i=e.serverCache,o=oT(e,i.getNode(),i.isFullyInitialized()||Y(t),i.isFiltered());return fT(n,o,t,r,dT,s)}function L0(n,e,t,r,s,i){let o;if(dc(r,t)!=null)return e;{const a=new qd(r,e,s),l=e.eventCache.getNode();let u;if(Y(t)||Q(t)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=hc(r,Dr(e));else{const f=e.serverCache.getNode();V(f instanceof $,"serverChildren would be complete if leaf node"),d=Ud(r,f)}d=d,u=n.filter.updateFullNode(l,d,i)}else{const d=Q(t);let f=Bd(r,d,e.serverCache);f==null&&e.serverCache.isCompleteForChild(d)&&(f=l.getImmediateChild(d)),f!=null?u=n.filter.updateChild(l,d,f,pe(t),a,i):e.eventCache.getNode().hasChild(d)?u=n.filter.updateChild(l,d,$.EMPTY_NODE,pe(t),a,i):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=hc(r,Dr(e)),o.isLeafNode()&&(u=n.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||dc(r,ae())!=null,Ki(e,u,o,n.filter.filtersNodes())}}/**
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
 */class F0{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new xd(r.getIndex()),i=n0(r);this.processor_=N0(i);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode($.EMPTY_NODE,o.getNode(),null),u=i.updateFullNode($.EMPTY_NODE,a.getNode(),null),d=new kr(l,o.isFullyInitialized(),s.filtersNodes()),f=new kr(u,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=rl(f,d),this.eventGenerator_=new l0(this.query_)}get query(){return this.query_}}function U0(n){return n.viewCache_.serverCache.getNode()}function B0(n,e){const t=Dr(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Y(e)&&!t.getImmediateChild(Q(e)).isEmpty())?t.getChild(e):null}function x_(n){return n.eventRegistrations_.length===0}function q0(n,e){n.eventRegistrations_.push(e)}function V_(n,e,t){const r=[];if(t){V(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(t,s);o&&r.push(o)})}if(e){let s=[];for(let i=0;i<n.eventRegistrations_.length;++i){const o=n.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(i+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return r}function O_(n,e,t,r){e.type===wt.MERGE&&e.source.queryId!==null&&(V(Dr(n.viewCache_),"We should always have a full cache before handling merges"),V(Ku(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,i=D0(n.processor_,s,e,t,r);return k0(n.processor_,i.viewCache),V(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=i.viewCache,pT(n,i.changes,i.viewCache.eventCache.getNode(),null)}function G0(n,e){const t=n.viewCache_.eventCache,r=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(ve,(i,o)=>{r.push(Fs(i,o))}),t.isFullyInitialized()&&r.push(iT(t.getNode())),pT(n,r,t.getNode(),e)}function pT(n,e,t,r){const s=r?[r]:n.eventRegistrations_;return u0(n.eventGenerator_,e,t,s)}/**
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
 */let pc;class j0{constructor(){this.views=new Map}}function z0(n){V(!pc,"__referenceConstructor has already been defined"),pc=n}function $0(){return V(pc,"Reference.ts has not been loaded"),pc}function W0(n){return n.views.size===0}function Gd(n,e,t,r){const s=e.source.queryId;if(s!==null){const i=n.views.get(s);return V(i!=null,"SyncTree gave us an op for an invalid query."),O_(i,e,t,r)}else{let i=[];for(const o of n.views.values())i=i.concat(O_(o,e,t,r));return i}}function K0(n,e,t,r,s){const i=e._queryIdentifier,o=n.views.get(i);if(!o){let a=hc(t,s?r:null),l=!1;a?l=!0:r instanceof $?(a=Ud(t,r),l=!1):(a=$.EMPTY_NODE,l=!1);const u=rl(new kr(a,l,!1),new kr(r,s,!1));return new F0(e,u)}return o}function H0(n,e,t,r,s,i){const o=K0(n,e,r,s,i);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),q0(o,t),G0(o,t)}function Q0(n,e,t,r){const s=e._queryIdentifier,i=[];let o=[];const a=Gn(n);if(s==="default")for(const[l,u]of n.views.entries())o=o.concat(V_(u,t,r)),x_(u)&&(n.views.delete(l),u.query._queryParams.loadsAllData()||i.push(u.query));else{const l=n.views.get(s);l&&(o=o.concat(V_(l,t,r)),x_(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||i.push(l.query)))}return a&&!Gn(n)&&i.push(new($0())(e._repo,e._path)),{removed:i,events:o}}function mT(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function fs(n,e){let t=null;for(const r of n.views.values())t=t||B0(r,e);return t}function _T(n,e){if(e._queryParams.loadsAllData())return sl(n);{const r=e._queryIdentifier;return n.views.get(r)}}function gT(n,e){return _T(n,e)!=null}function Gn(n){return sl(n)!=null}function sl(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let mc;function Y0(n){V(!mc,"__referenceConstructor has already been defined"),mc=n}function J0(){return V(mc,"Reference.ts has not been loaded"),mc}let X0=1;class M_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new _e(null),this.pendingWriteTree_=b0(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function yT(n,e,t,r,s){return p0(n.pendingWriteTree_,e,t,r,s),s?si(n,new Nr(Od(),e,t)):[]}function Z0(n,e,t,r){m0(n.pendingWriteTree_,e,t,r);const s=_e.fromObject(t);return si(n,new Us(Od(),e,s))}function bn(n,e,t=!1){const r=_0(n.pendingWriteTree_,e);if(g0(n.pendingWriteTree_,e)){let i=new _e(null);return r.snap!=null?i=i.set(ae(),!0):$e(r.children,o=>{i=i.set(new he(o),!0)}),si(n,new uc(r.path,i,t))}else return[]}function il(n,e,t){return si(n,new Nr(Md(),e,t))}function ek(n,e,t){const r=_e.fromObject(t);return si(n,new Us(Md(),e,r))}function tk(n,e){return si(n,new Io(Md(),e))}function nk(n,e,t){const r=zd(n,t);if(r){const s=$d(r),i=s.path,o=s.queryId,a=it(i,e),l=new Io(Ld(o),a);return Wd(n,i,l)}else return[]}function Zu(n,e,t,r,s=!1){const i=e._path,o=n.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||gT(o,e))){const l=Q0(o,e,t,r);W0(o)&&(n.syncPointTree_=n.syncPointTree_.remove(i));const u=l.removed;if(a=l.events,!s){const d=u.findIndex(m=>m._queryParams.loadsAllData())!==-1,f=n.syncPointTree_.findOnPath(i,(m,g)=>Gn(g));if(d&&!f){const m=n.syncPointTree_.subtree(i);if(!m.isEmpty()){const g=ik(m);for(let A=0;A<g.length;++A){const N=g[A],k=N.query,F=TT(n,N);n.listenProvider_.startListening(Qi(k),_c(n,k),F.hashFn,F.onComplete)}}}!f&&u.length>0&&!r&&(d?n.listenProvider_.stopListening(Qi(e),null):u.forEach(m=>{const g=n.queryToTagMap.get(ol(m));n.listenProvider_.stopListening(Qi(m),g)}))}ok(n,u)}return a}function rk(n,e,t,r){const s=zd(n,r);if(s!=null){const i=$d(s),o=i.path,a=i.queryId,l=it(o,e),u=new Nr(Ld(a),l,t);return Wd(n,o,u)}else return[]}function sk(n,e,t,r){const s=zd(n,r);if(s){const i=$d(s),o=i.path,a=i.queryId,l=it(o,e),u=_e.fromObject(t),d=new Us(Ld(a),l,u);return Wd(n,o,d)}else return[]}function L_(n,e,t,r=!1){const s=e._path;let i=null,o=!1;n.syncPointTree_.foreachOnPath(s,(m,g)=>{const A=it(m,s);i=i||fs(g,A),o=o||Gn(g)});let a=n.syncPointTree_.get(s);a?(o=o||Gn(a),i=i||fs(a,ae())):(a=new j0,n.syncPointTree_=n.syncPointTree_.set(s,a));let l;i!=null?l=!0:(l=!1,i=$.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((g,A)=>{const N=fs(A,ae());N&&(i=i.updateImmediateChild(g,N))}));const u=gT(a,e);if(!u&&!e._queryParams.loadsAllData()){const m=ol(e);V(!n.queryToTagMap.has(m),"View does not exist, but we have a tag");const g=ak();n.queryToTagMap.set(m,g),n.tagToQueryMap.set(g,m)}const d=Fd(n.pendingWriteTree_,s);let f=H0(a,e,t,d,i,l);if(!u&&!o&&!r){const m=_T(a,e);f=f.concat(ck(n,e,m))}return f}function jd(n,e,t){const s=n.pendingWriteTree_,i=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=it(o,e),u=fs(a,l);if(u)return u});return lT(s,e,i,t,!0)}function si(n,e){return IT(e,n.syncPointTree_,null,Fd(n.pendingWriteTree_,ae()))}function IT(n,e,t,r){if(Y(n.path))return ET(n,e,t,r);{const s=e.get(ae());t==null&&s!=null&&(t=fs(s,ae()));let i=[];const o=Q(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const u=t?t.getImmediateChild(o):null,d=uT(r,o);i=i.concat(IT(a,l,u,d))}return s&&(i=i.concat(Gd(s,n,r,t))),i}}function ET(n,e,t,r){const s=e.get(ae());t==null&&s!=null&&(t=fs(s,ae()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,u=uT(r,o),d=n.operationForChild(o);d&&(i=i.concat(ET(d,a,l,u)))}),s&&(i=i.concat(Gd(s,n,r,t))),i}function TT(n,e){const t=e.query,r=_c(n,t);return{hashFn:()=>(U0(e)||$.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?nk(n,t._path,r):tk(n,t._path);{const i=eN(s,t);return Zu(n,t,null,i)}}}}function _c(n,e){const t=ol(e);return n.queryToTagMap.get(t)}function ol(n){return n._path.toString()+"$"+n._queryIdentifier}function zd(n,e){return n.tagToQueryMap.get(e)}function $d(n){const e=n.indexOf("$");return V(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new he(n.substr(0,e))}}function Wd(n,e,t){const r=n.syncPointTree_.get(e);V(r,"Missing sync point for query tag that we're tracking");const s=Fd(n.pendingWriteTree_,e);return Gd(r,t,s,null)}function ik(n){return n.fold((e,t,r)=>{if(t&&Gn(t))return[sl(t)];{let s=[];return t&&(s=mT(t)),$e(r,(i,o)=>{s=s.concat(o)}),s}})}function Qi(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(J0())(n._repo,n._path):n}function ok(n,e){for(let t=0;t<e.length;++t){const r=e[t];if(!r._queryParams.loadsAllData()){const s=ol(r),i=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(i)}}}function ak(){return X0++}function ck(n,e,t){const r=e._path,s=_c(n,e),i=TT(n,t),o=n.listenProvider_.startListening(Qi(e),s,i.hashFn,i.onComplete),a=n.syncPointTree_.subtree(r);if(s)V(!Gn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,d,f)=>{if(!Y(u)&&d&&Gn(d))return[sl(d).query];{let m=[];return d&&(m=m.concat(mT(d).map(g=>g.query))),$e(f,(g,A)=>{m=m.concat(A)}),m}});for(let u=0;u<l.length;++u){const d=l[u];n.listenProvider_.stopListening(Qi(d),_c(n,d))}}return o}/**
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
 */class Kd{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Kd(t)}node(){return this.node_}}class Hd{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=we(this.path_,e);return new Hd(this.syncTree_,t)}node(){return jd(this.syncTree_,this.path_)}}const lk=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},F_=function(n,e,t){if(!n||typeof n!="object")return n;if(V(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return uk(n[".sv"],e,t);if(typeof n[".sv"]=="object")return hk(n[".sv"],e);V(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},uk=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:V(!1,"Unexpected server value: "+n)}},hk=function(n,e,t){n.hasOwnProperty("increment")||V(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&V(!1,"Unexpected increment value: "+r);const s=e.node();if(V(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},wT=function(n,e,t,r){return Qd(e,new Hd(t,n),r)},vT=function(n,e,t){return Qd(n,new Kd(e),t)};function Qd(n,e,t){const r=n.getPriority().val(),s=F_(r,e.getImmediateChild(".priority"),t);let i;if(n.isLeafNode()){const o=n,a=F_(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new Le(a,Ce(s)):n}else{const o=n;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new Le(s))),o.forEachChild(ve,(a,l)=>{const u=Qd(l,e.getImmediateChild(a),t);u!==l&&(i=i.updateImmediateChild(a,u))}),i}}/**
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
 */class Yd{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function Jd(n,e){let t=e instanceof he?e:new he(e),r=n,s=Q(t);for(;s!==null;){const i=ps(r.node.children,s)||{children:{},childCount:0};r=new Yd(s,r,i),t=pe(t),s=Q(t)}return r}function ii(n){return n.node.value}function AT(n,e){n.node.value=e,eh(n)}function ST(n){return n.node.childCount>0}function dk(n){return ii(n)===void 0&&!ST(n)}function al(n,e){$e(n.node.children,(t,r)=>{e(new Yd(t,n,r))})}function bT(n,e,t,r){t&&e(n),al(n,s=>{bT(s,e,!0)})}function fk(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Go(n){return new he(n.parent===null?n.name:Go(n.parent)+"/"+n.name)}function eh(n){n.parent!==null&&pk(n.parent,n.name,n)}function pk(n,e,t){const r=dk(t),s=Gt(n.node.children,e);r&&s?(delete n.node.children[e],n.node.childCount--,eh(n)):!r&&!s&&(n.node.children[e]=t.node,n.node.childCount++,eh(n))}/**
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
 */const mk=/[\[\].#$\/\u0000-\u001F\u007F]/,_k=/[\[\].#$\u0000-\u001F\u007F]/,su=10*1024*1024,Xd=function(n){return typeof n=="string"&&n.length!==0&&!mk.test(n)},RT=function(n){return typeof n=="string"&&n.length!==0&&!_k.test(n)},gk=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),RT(n)},CT=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!tl(n)||n&&typeof n=="object"&&Gt(n,".sv")},th=function(n,e,t,r){cl(ms(n,"value"),e,t)},cl=function(n,e,t){const r=t instanceof he?new VN(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+ar(r));if(typeof e=="function")throw new Error(n+"contains a function "+ar(r)+" with contents = "+e.toString());if(tl(e))throw new Error(n+"contains "+e.toString()+" "+ar(r));if(typeof e=="string"&&e.length>su/3&&wc(e)>su)throw new Error(n+"contains a string greater than "+su+" utf8 bytes "+ar(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if($e(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!Xd(o)))throw new Error(n+" contains an invalid key ("+o+") "+ar(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);ON(r,o),cl(n,a,r),MN(r)}),s&&i)throw new Error(n+' contains ".value" child '+ar(r)+" in addition to actual children.")}},yk=function(n,e){let t,r;for(t=0;t<e.length;t++){r=e[t];const i=mo(r);for(let o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!Xd(i[o]))throw new Error(n+"contains an invalid key ("+i[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(xN);let s=null;for(t=0;t<e.length;t++){if(r=e[t],s!==null&&mt(s,r))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},PT=function(n,e,t,r){const s=ms(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const i=[];$e(e,(o,a)=>{const l=new he(o);if(cl(s,a,we(t,l)),Pd(l)===".priority"&&!CT(a))throw new Error(s+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");i.push(l)}),yk(s,i)},Ik=function(n,e,t){if(tl(e))throw new Error(ms(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!CT(e))throw new Error(ms(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},NT=function(n,e,t,r){if(!RT(t))throw new Error(ms(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Ek=function(n,e,t,r){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),NT(n,e,t)},is=function(n,e){if(Q(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},Tk=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Xd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!gk(t))throw new Error(ms(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class wk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ll(n,e){let t=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();t!==null&&!Nd(i,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:i}),t.events.push(s)}t&&n.eventLists_.push(t)}function kT(n,e,t){ll(n,t),DT(n,r=>Nd(r,e))}function St(n,e,t){ll(n,t),DT(n,r=>mt(r,e)||mt(e,r))}function DT(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const s=n.eventLists_[r];if(s){const i=s.path;e(i)?(vk(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function vk(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();$i&&qe("event: "+t.toString()),ni(r)}}}/**
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
 */const Ak="repo_interrupt",Sk=25;class bk{constructor(e,t,r,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new wk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=lc(),this.transactionQueueTree_=new Yd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Rk(n,e,t){if(n.stats_=Rd(n.repoInfo_),n.forceRestClient_||sN())n.server_=new cc(n.repoInfo_,(r,s,i,o)=>{U_(n,r,s,i,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>B_(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ge(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new Ht(n.repoInfo_,e,(r,s,i,o)=>{U_(n,r,s,i,o)},r=>{B_(n,r)},r=>{Pk(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=lN(n.repoInfo_,()=>new c0(n.stats_,n.server_)),n.infoData_=new r0,n.infoSyncTree_=new M_({startListening:(r,s,i,o)=>{let a=[];const l=n.infoData_.getNode(r._path);return l.isEmpty()||(a=il(n.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Zd(n,"connected",!1),n.serverSyncTree_=new M_({startListening:(r,s,i,o)=>(n.server_.listen(r,i,s,(a,l)=>{const u=o(a,l);St(n.eventQueue_,r._path,u)}),[]),stopListening:(r,s)=>{n.server_.unlisten(r,s)}})}function Ck(n){const t=n.infoData_.getNode(new he(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function ul(n){return lk({timestamp:Ck(n)})}function U_(n,e,t,r,s){n.dataUpdateCount++;const i=new he(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(r){const l=Oa(t,u=>Ce(u));o=sk(n.serverSyncTree_,i,l,s)}else{const l=Ce(t);o=rk(n.serverSyncTree_,i,l,s)}else if(r){const l=Oa(t,u=>Ce(u));o=ek(n.serverSyncTree_,i,l)}else{const l=Ce(t);o=il(n.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=qs(n,i)),St(n.eventQueue_,a,o)}function B_(n,e){Zd(n,"connected",e),e===!1&&Dk(n)}function Pk(n,e){$e(e,(t,r)=>{Zd(n,t,r)})}function Zd(n,e,t){const r=new he("/.info/"+e),s=Ce(t);n.infoData_.updateSnapshot(r,s);const i=il(n.infoSyncTree_,r,s);St(n.eventQueue_,r,i)}function ef(n){return n.nextWriteId_++}function Nk(n,e,t,r,s){hl(n,"set",{path:e.toString(),value:t,priority:r});const i=ul(n),o=Ce(t,r),a=jd(n.serverSyncTree_,e),l=vT(o,a,i),u=ef(n),d=yT(n.serverSyncTree_,e,l,u,!0);ll(n.eventQueue_,d),n.server_.put(e.toString(),o.val(!0),(m,g)=>{const A=m==="ok";A||et("set at "+e+" failed: "+m);const N=bn(n.serverSyncTree_,u,!A);St(n.eventQueue_,e,N),jn(n,s,m,g)});const f=nf(n,e);qs(n,f),St(n.eventQueue_,f,[])}function kk(n,e,t,r){hl(n,"update",{path:e.toString(),value:t});let s=!0;const i=ul(n),o={};if($e(t,(a,l)=>{s=!1,o[a]=wT(we(e,a),Ce(l),n.serverSyncTree_,i)}),s)qe("update() called with empty data.  Don't do anything."),jn(n,r,"ok",void 0);else{const a=ef(n),l=Z0(n.serverSyncTree_,e,o,a);ll(n.eventQueue_,l),n.server_.merge(e.toString(),t,(u,d)=>{const f=u==="ok";f||et("update at "+e+" failed: "+u);const m=bn(n.serverSyncTree_,a,!f),g=m.length>0?qs(n,e):e;St(n.eventQueue_,g,m),jn(n,r,u,d)}),$e(t,u=>{const d=nf(n,we(e,u));qs(n,d)}),St(n.eventQueue_,e,[])}}function Dk(n){hl(n,"onDisconnectEvents");const e=ul(n),t=lc();Wu(n.onDisconnect_,ae(),(s,i)=>{const o=wT(s,i,n.serverSyncTree_,e);ri(t,s,o)});let r=[];Wu(t,ae(),(s,i)=>{r=r.concat(il(n.serverSyncTree_,s,i));const o=nf(n,s);qs(n,o)}),n.onDisconnect_=lc(),St(n.eventQueue_,ae(),r)}function xk(n,e,t){n.server_.onDisconnectCancel(e.toString(),(r,s)=>{r==="ok"&&$u(n.onDisconnect_,e),jn(n,t,r,s)})}function q_(n,e,t,r){const s=Ce(t);n.server_.onDisconnectPut(e.toString(),s.val(!0),(i,o)=>{i==="ok"&&ri(n.onDisconnect_,e,s),jn(n,r,i,o)})}function Vk(n,e,t,r,s){const i=Ce(t,r);n.server_.onDisconnectPut(e.toString(),i.val(!0),(o,a)=>{o==="ok"&&ri(n.onDisconnect_,e,i),jn(n,s,o,a)})}function Ok(n,e,t,r){if(Va(t)){qe("onDisconnect().update() called with empty data.  Don't do anything."),jn(n,r,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(s,i)=>{s==="ok"&&$e(t,(o,a)=>{const l=Ce(a);ri(n.onDisconnect_,we(e,o),l)}),jn(n,r,s,i)})}function Mk(n,e,t){let r;Q(e._path)===".info"?r=L_(n.infoSyncTree_,e,t):r=L_(n.serverSyncTree_,e,t),kT(n.eventQueue_,e._path,r)}function Lk(n,e,t){let r;Q(e._path)===".info"?r=Zu(n.infoSyncTree_,e,t):r=Zu(n.serverSyncTree_,e,t),kT(n.eventQueue_,e._path,r)}function Fk(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Ak)}function hl(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),qe(t,...e)}function jn(n,e,t,r){e&&ni(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let i=s;r&&(i+=": "+r);const o=new Error(i);o.code=s,e(o)}})}function xT(n,e,t){return jd(n.serverSyncTree_,e,t)||$.EMPTY_NODE}function tf(n,e=n.transactionQueueTree_){if(e||dl(n,e),ii(e)){const t=OT(n,e);V(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&Uk(n,Go(e),t)}else ST(e)&&al(e,t=>{tf(n,t)})}function Uk(n,e,t){const r=t.map(u=>u.currentWriteId),s=xT(n,e,r);let i=s;const o=s.hash();for(let u=0;u<t.length;u++){const d=t[u];V(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const f=it(e,d.path);i=i.updateChild(f,d.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;n.server_.put(l.toString(),a,u=>{hl(n,"transaction put response",{path:l.toString(),status:u});let d=[];if(u==="ok"){const f=[];for(let m=0;m<t.length;m++)t[m].status=2,d=d.concat(bn(n.serverSyncTree_,t[m].currentWriteId)),t[m].onComplete&&f.push(()=>t[m].onComplete(null,!0,t[m].currentOutputSnapshotResolved)),t[m].unwatcher();dl(n,Jd(n.transactionQueueTree_,e)),tf(n,n.transactionQueueTree_),St(n.eventQueue_,e,d);for(let m=0;m<f.length;m++)ni(f[m])}else{if(u==="datastale")for(let f=0;f<t.length;f++)t[f].status===3?t[f].status=4:t[f].status=0;else{et("transaction at "+l.toString()+" failed: "+u);for(let f=0;f<t.length;f++)t[f].status=4,t[f].abortReason=u}qs(n,e)}},o)}function qs(n,e){const t=VT(n,e),r=Go(t),s=OT(n,t);return Bk(n,s,r),r}function Bk(n,e,t){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=it(t,l.path);let d=!1,f;if(V(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,f=l.abortReason,s=s.concat(bn(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Sk)d=!0,f="maxretry",s=s.concat(bn(n.serverSyncTree_,l.currentWriteId,!0));else{const m=xT(n,l.path,o);l.currentInputSnapshot=m;const g=e[a].update(m.val());if(g!==void 0){cl("transaction failed: Data returned ",g,l.path);let A=Ce(g);typeof g=="object"&&g!=null&&Gt(g,".priority")||(A=A.updatePriority(m.getPriority()));const k=l.currentWriteId,F=ul(n),G=vT(A,m,F);l.currentOutputSnapshotRaw=A,l.currentOutputSnapshotResolved=G,l.currentWriteId=ef(n),o.splice(o.indexOf(k),1),s=s.concat(yT(n.serverSyncTree_,l.path,G,l.currentWriteId,l.applyLocally)),s=s.concat(bn(n.serverSyncTree_,k,!0))}else d=!0,f="nodata",s=s.concat(bn(n.serverSyncTree_,l.currentWriteId,!0))}St(n.eventQueue_,t,s),s=[],d&&(e[a].status=2,(function(m){setTimeout(m,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}dl(n,n.transactionQueueTree_);for(let a=0;a<r.length;a++)ni(r[a]);tf(n,n.transactionQueueTree_)}function VT(n,e){let t,r=n.transactionQueueTree_;for(t=Q(e);t!==null&&ii(r)===void 0;)r=Jd(r,t),e=pe(e),t=Q(e);return r}function OT(n,e){const t=[];return MT(n,e,t),t.sort((r,s)=>r.order-s.order),t}function MT(n,e,t){const r=ii(e);if(r)for(let s=0;s<r.length;s++)t.push(r[s]);al(e,s=>{MT(n,s,t)})}function dl(n,e){const t=ii(e);if(t){let r=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[r]=t[s],r++);t.length=r,AT(e,t.length>0?t:void 0)}al(e,r=>{dl(n,r)})}function nf(n,e){const t=Go(VT(n,e)),r=Jd(n.transactionQueueTree_,e);return fk(r,s=>{iu(n,s)}),iu(n,r),bT(r,s=>{iu(n,s)}),t}function iu(n,e){const t=ii(e);if(t){const r=[];let s=[],i=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(V(i===o-1,"All SENT items should be at beginning of queue."),i=o,t[o].status=3,t[o].abortReason="set"):(V(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(bn(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&r.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?AT(e,void 0):t.length=i+1,St(n.eventQueue_,Go(e),s);for(let o=0;o<r.length;o++)ni(r[o])}}/**
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
 */function qk(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let s=t[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Gk(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):et(`Invalid query segment '${t}' in query '${n}'`)}return e}const G_=function(n,e){const t=jk(n),r=t.namespace;t.domain==="firebase.com"&&tn(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&tn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||QP();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new jE(t.host,t.secure,r,s,e,"",r!==t.subdomain),path:new he(t.pathString)}},jk=function(n){let e="",t="",r="",s="",i="",o=!0,a="https",l=443;if(typeof n=="string"){let u=n.indexOf("//");u>=0&&(a=n.substring(0,u-1),n=n.substring(u+2));let d=n.indexOf("/");d===-1&&(d=n.length);let f=n.indexOf("?");f===-1&&(f=n.length),e=n.substring(0,Math.min(d,f)),d<f&&(s=qk(n.substring(d,f)));const m=Gk(n.substring(Math.min(n.length,f)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")t="localhost";else if(g.split(".").length<=2)t=g;else{const A=e.indexOf(".");r=e.substring(0,A).toLowerCase(),t=e.substring(A+1),i=r}"ns"in m&&(i=m.ns)}return{host:e,port:l,domain:t,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
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
 */class zk{constructor(e,t,r,s){this.eventType=e,this.eventRegistration=t,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ge(this.snapshot.exportVal())}}class $k{constructor(e,t,r){this.eventRegistration=e,this.error=t,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Wk{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return V(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Kk{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new kt;return xk(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){is("OnDisconnect.remove",this._path);const e=new kt;return q_(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){is("OnDisconnect.set",this._path),th("OnDisconnect.set",e,this._path);const t=new kt;return q_(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){is("OnDisconnect.setWithPriority",this._path),th("OnDisconnect.setWithPriority",e,this._path),Ik("OnDisconnect.setWithPriority",t);const r=new kt;return Vk(this._repo,this._path,e,t,r.wrapCallback(()=>{})),r.promise}update(e){is("OnDisconnect.update",this._path),PT("OnDisconnect.update",e,this._path);const t=new kt;return Ok(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
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
 */class rf{constructor(e,t,r,s){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=s}get key(){return Y(this._path)?null:Pd(this._path)}get ref(){return new Yn(this._repo,this._path)}get _queryIdentifier(){const e=b_(this._queryParams),t=Sd(e);return t==="{}"?"default":t}get _queryObject(){return b_(this._queryParams)}isEqual(e){if(e=ne(e),!(e instanceof rf))return!1;const t=this._repo===e._repo,r=Nd(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+DN(this._path)}}class Yn extends rf{constructor(e,t){super(e,t,new Vd,!1)}get parent(){const e=XE(this._path);return e===null?null:new Yn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class gc{constructor(e,t,r){this._node=e,this.ref=t,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new he(e),r=nh(this.ref,e);return new gc(this._node.getChild(t),r,ve)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new gc(s,nh(this.ref,r),ve)))}hasChild(e){const t=new he(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Jx(n,e){return n=ne(n),n._checkNotDeleted("ref"),e!==void 0?nh(n._root,e):n._root}function nh(n,e){return n=ne(n),Q(n._path)===null?Ek("child","path",e):NT("child","path",e),new Yn(n._repo,we(n._path,e))}function Xx(n){return n=ne(n),new Kk(n._repo,n._path)}function Zx(n){return is("remove",n._path),Hk(n,null)}function Hk(n,e){n=ne(n),is("set",n._path),th("set",e,n._path);const t=new kt;return Nk(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function eV(n,e){PT("update",e,n._path);const t=new kt;return kk(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}class sf{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const r=t._queryParams.getIndex();return new zk("value",this,new gc(e.snapshotNode,new Yn(t._repo,t._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new $k(this,e,t):null}matches(e){return e instanceof sf?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Qk(n,e,t,r,s){const i=new Wk(t,void 0),o=new sf(i);return Mk(n._repo,n,o),()=>Lk(n._repo,n,o)}function tV(n,e,t,r){return Qk(n,"value",e)}z0(Yn);Y0(Yn);/**
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
 */const Yk="FIREBASE_DATABASE_EMULATOR_HOST",rh={};let Jk=!1;function Xk(n,e,t,r){const s=e.lastIndexOf(":"),i=e.substring(0,s),o=bt(i);n.repoInfo_=new jE(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),r&&(n.authTokenProvider_=r)}function Zk(n,e,t,r,s){let i=r||n.options.databaseURL;i===void 0&&(n.options.projectId||tn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),qe("Using default host for project ",n.options.projectId),i=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=G_(i,s),a=o.repoInfo,l;typeof process<"u"&&c_&&(l=c_[Yk]),l?(i=`http://${l}?ns=${a.namespace}`,o=G_(i,s),a=o.repoInfo):o.repoInfo.secure;const u=new oN(n.name,n.options,e);Tk("Invalid Firebase Database URL",o),Y(o.path)||tn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=tD(a,n,u,new iN(n,t));return new nD(d,n)}function eD(n,e){const t=rh[e];(!t||t[n.key]!==n)&&tn(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Fk(n),delete t[n.key]}function tD(n,e,t,r){let s=rh[e.name];s||(s={},rh[e.name]=s);let i=s[n.toURLString()];return i&&tn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new bk(n,Jk,t,r),s[n.toURLString()]=i,i}class nD{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Rk(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Yn(this._repo,ae())),this._rootInternal}_delete(){return this._rootInternal!==null&&(eD(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&tn("Cannot call "+e+" on a deleted database.")}}function rD(n=Ac(),e){const t=xr(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=oh("database");r&&sD(t,...r)}return t}function sD(n,e,t,r={}){n=ne(n),n._checkNotDeleted("useEmulator");const s=`${e}:${t}`,i=n._repoInternal;if(n._instanceStarted){if(s===n._repoInternal.repoInfo_.host&&gt(r,i.repoInfo_.emulatorOptions))return;tn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&tn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new ka(ka.OWNER);else if(r.mockUserToken){const a=typeof r.mockUserToken=="string"?r.mockUserToken:eg(r.mockUserToken,n.app.options.projectId);o=new ka(a)}bt(e)&&(Eo(e),Tc("Database",!0)),Xk(i,s,r,o)}/**
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
 */function iD(n){jP(Vr),xn(new Qt("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return Zk(r,s,i,t)},"PUBLIC").setMultipleInstances(!0)),_t(l_,u_,n),_t(l_,u_,"esm2020")}/**
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
 */const oD={".sv":"timestamp"};function nV(){return oD}Ht.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Ht.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};iD();/**
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
 */const aD="type.googleapis.com/google.protobuf.Int64Value",cD="type.googleapis.com/google.protobuf.UInt64Value";function LT(n,e){const t={};for(const r in n)n.hasOwnProperty(r)&&(t[r]=e(n[r]));return t}function yc(n){if(n==null)return null;if(n instanceof Number&&(n=n.valueOf()),typeof n=="number"&&isFinite(n)||n===!0||n===!1||Object.prototype.toString.call(n)==="[object String]")return n;if(n instanceof Date)return n.toISOString();if(Array.isArray(n))return n.map(e=>yc(e));if(typeof n=="function"||typeof n=="object")return LT(n,e=>yc(e));throw new Error("Data cannot be encoded in JSON: "+n)}function Gs(n){if(n==null)return n;if(n["@type"])switch(n["@type"]){case aD:case cD:{const e=Number(n.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+n);return e}default:throw new Error("Data cannot be decoded from JSON: "+n)}return Array.isArray(n)?n.map(e=>Gs(e)):typeof n=="function"||typeof n=="object"?LT(n,e=>Gs(e)):n}/**
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
 */const of="functions";/**
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
 */const j_={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class at extends qt{constructor(e,t,r){super(`${of}/${e}`,t||""),this.details=r,Object.setPrototypeOf(this,at.prototype)}}function lD(n){if(n>=200&&n<300)return"ok";switch(n){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function Ic(n,e){let t=lD(n),r=t,s;try{const i=e&&e.error;if(i){const o=i.status;if(typeof o=="string"){if(!j_[o])return new at("internal","internal");t=j_[o],r=o}const a=i.message;typeof a=="string"&&(r=a),s=i.details,s!==void 0&&(s=Gs(s))}}catch{}return t==="ok"?null:new at(t,r,s)}/**
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
 */class uD{constructor(e,t,r,s){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,pt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=t.getImmediate({optional:!0}),this.messaging=r.getImmediate({optional:!0}),this.auth||t.get().then(i=>this.auth=i,()=>{}),this.messaging||r.get().then(i=>this.messaging=i,()=>{}),this.appCheck||s?.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(this.auth)try{return(await this.auth.getToken())?.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){const t=await this.getAuthToken(),r=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:t,messagingToken:r,appCheckToken:s}}}/**
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
 */const sh="us-central1",hD=/^data: (.*?)(?:\n|$)/;function dD(n){let e=null;return{promise:new Promise((t,r)=>{e=setTimeout(()=>{r(new at("deadline-exceeded","deadline-exceeded"))},n)}),cancel:()=>{e&&clearTimeout(e)}}}class fD{constructor(e,t,r,s,i=sh,o=(...a)=>fetch(...a)){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new uD(e,t,r,s),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(i);this.customDomain=a.origin+(a.pathname==="/"?"":a.pathname),this.region=sh}catch{this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${t}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function pD(n,e,t){const r=bt(e);n.emulatorOrigin=`http${r?"s":""}://${e}:${t}`,r&&(Eo(n.emulatorOrigin+"/backends"),Tc("Functions",!0))}function mD(n,e,t){const r=s=>gD(n,e,s,{});return r.stream=(s,i)=>ID(n,e,s,i),r}function FT(n){return n.emulatorOrigin&&bt(n.emulatorOrigin)?"include":void 0}async function _D(n,e,t,r,s){t["Content-Type"]="application/json";let i;try{i=await r(n,{method:"POST",body:JSON.stringify(e),headers:t,credentials:FT(s)})}catch{return{status:0,json:null}}let o=null;try{o=await i.json()}catch{}return{status:i.status,json:o}}async function UT(n,e){const t={},r=await n.contextProvider.getContext(e.limitedUseAppCheckTokens);return r.authToken&&(t.Authorization="Bearer "+r.authToken),r.messagingToken&&(t["Firebase-Instance-ID-Token"]=r.messagingToken),r.appCheckToken!==null&&(t["X-Firebase-AppCheck"]=r.appCheckToken),t}function gD(n,e,t,r){const s=n._url(e);return yD(n,s,t,r)}async function yD(n,e,t,r){t=yc(t);const s={data:t},i=await UT(n,r),o=r.timeout||7e4,a=dD(o),l=await Promise.race([_D(e,s,i,n.fetchImpl,n),a.promise,n.cancelAllRequests]);if(a.cancel(),!l)throw new at("cancelled","Firebase Functions instance was deleted.");const u=Ic(l.status,l.json);if(u)throw u;if(!l.json)throw new at("internal","Response is not valid JSON object.");let d=l.json.data;if(typeof d>"u"&&(d=l.json.result),typeof d>"u")throw new at("internal","Response is missing data field.");return{data:Gs(d)}}function ID(n,e,t,r){const s=n._url(e);return ED(n,s,t,r||{})}async function ED(n,e,t,r){t=yc(t);const s={data:t},i=await UT(n,r);i["Content-Type"]="application/json",i.Accept="text/event-stream";let o;try{o=await n.fetchImpl(e,{method:"POST",body:JSON.stringify(s),headers:i,signal:r?.signal,credentials:FT(n)})}catch(m){if(m instanceof Error&&m.name==="AbortError"){const A=new at("cancelled","Request was cancelled.");return{data:Promise.reject(A),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(A)}}}}}}const g=Ic(0,null);return{data:Promise.reject(g),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(g)}}}}}}let a,l;const u=new Promise((m,g)=>{a=m,l=g});r?.signal?.addEventListener("abort",()=>{const m=new at("cancelled","Request was cancelled.");l(m)});const d=o.body.getReader(),f=TD(d,a,l,r?.signal);return{stream:{[Symbol.asyncIterator](){const m=f.getReader();return{async next(){const{value:g,done:A}=await m.read();return{value:g,done:A}},async return(){return await m.cancel(),{done:!0,value:void 0}}}}},data:u}}function TD(n,e,t,r){const s=(o,a)=>{const l=o.match(hD);if(!l)return;const u=l[1];try{const d=JSON.parse(u);if("result"in d){e(Gs(d.result));return}if("message"in d){a.enqueue(Gs(d.message));return}if("error"in d){const f=Ic(0,d);a.error(f),t(f);return}}catch(d){if(d instanceof at){a.error(d),t(d);return}}},i=new TextDecoder;return new ReadableStream({start(o){let a="";return l();async function l(){if(r?.aborted){const u=new at("cancelled","Request was cancelled");return o.error(u),t(u),Promise.resolve()}try{const{value:u,done:d}=await n.read();if(d){a.trim()&&s(a.trim(),o),o.close();return}if(r?.aborted){const m=new at("cancelled","Request was cancelled");o.error(m),t(m),await n.cancel();return}a+=i.decode(u,{stream:!0});const f=a.split(`
`);a=f.pop()||"";for(const m of f)m.trim()&&s(m.trim(),o);return l()}catch(u){const d=u instanceof at?u:Ic(0,null);o.error(d),t(d)}}},cancel(){return n.cancel()}})}const z_="@firebase/functions",$_="0.13.1";/**
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
 */const wD="auth-internal",vD="app-check-internal",AD="messaging-internal";function SD(n){const e=(t,{instanceIdentifier:r})=>{const s=t.getProvider("app").getImmediate(),i=t.getProvider(wD),o=t.getProvider(AD),a=t.getProvider(vD);return new fD(s,i,o,a,r)};xn(new Qt(of,e,"PUBLIC").setMultipleInstances(!0)),_t(z_,$_,n),_t(z_,$_,"esm2020")}/**
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
 */function bD(n=Ac(),e=sh){const r=xr(ne(n),of).getImmediate({identifier:e}),s=oh("functions");return s&&RD(r,...s),r}function RD(n,e,t){pD(ne(n),e,t)}function rV(n,e,t){return mD(ne(n),e)}SD();const BT={apiKey:"AIzaSyDif5g62oVWT460e5q3Kpg7txgRN8VXk24",authDomain:"gustoplan-dev.firebaseapp.com",projectId:"gustoplan-dev",storageBucket:"gustoplan-dev.firebasestorage.app",messagingSenderId:"554162135180",appId:"1:554162135180:web:f5addf322a0977ffe31ba9",databaseURL:"https://gustoplan-dev-default-rtdb.europe-west1.firebasedatabase.app"},jo=lg(BT),CD=EP(jo),PD=QS(jo),ND=rD(jo),kD=bD(jo),sV=Object.freeze(Object.defineProperty({__proto__:null,auth:PD,db:CD,firebaseApp:jo,firebaseConfig:BT,functions:kD,rtdb:ND},Symbol.toStringTag,{value:"Module"}));export{An as $,Ox as A,BT as B,bE as C,uo as D,wP as E,ut as F,jD as G,Ft as H,de as I,ht as J,Lr as K,Fr as L,me as M,D as N,Ut as O,IP as P,GP as Q,ze as R,ti as S,Mo as T,Na as U,Zc as V,Lo as W,Jc as X,Td as Y,dt as Z,Xc as _,bx as a,Vx as a$,ce as a0,qP as a1,vt as a2,UP as a3,Ih as a4,Re as a5,Ir as a6,O as a7,MD as a8,ZS as a9,WD as aA,QD as aB,$x as aC,lx as aD,cx as aE,Se as aF,Fo as aG,NP as aH,Px as aI,yx as aJ,Ix as aK,Tx as aL,wx as aM,zx as aN,Bx as aO,zD as aP,sx as aQ,ix as aR,n_ as aS,Nx as aT,Dx as aU,kx as aV,TP as aW,Rx as aX,Cx as aY,tx as aZ,xx as a_,Ee as aa,Yx as ab,ee as ac,OD as ad,Qx as ae,Hx as af,UD as ag,yt as ah,lb as ai,dx as aj,fx as ak,nx as al,Ux as am,Fx as an,hx as ao,KD as ap,qD as aq,gP as ar,CP as as,Kx as at,Mx as au,YD as av,Wx as aw,XD as ax,px as ay,$D as az,yP as b,LP as b0,dE as b1,mx as b2,GD as b3,Lx as b4,jx as b5,VD as b6,_x as b7,ax as b8,ox as b9,ux as ba,JD as bb,qx as bc,HD as bd,DD as be,xD as bf,PD as bg,sV as bh,BD as c,CD as d,Gx as e,Sx as f,Ex as g,bD as h,rV as i,gx as j,EP as k,Jx as l,Xx as m,Hk as n,i_ as o,tV as p,ZD as q,ND as r,vx as s,eV as t,Ax as u,Zx as v,ex as w,nV as x,rx as y,kD as z};
