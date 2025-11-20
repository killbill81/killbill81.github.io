(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const Tw=()=>{};var ip={};/**
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
 */const F_={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const V=function(r,e){if(!r)throw Gs(e)},Gs=function(r){return new Error("Firebase Database ("+F_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+r)};/**
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
 */const U_=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},ww=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const s=r[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[t++];e[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[t++],o=r[t++],a=r[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[n++]=String.fromCharCode(55296+(l>>10)),e[n++]=String.fromCharCode(56320+(l&1023))}else{const i=r[t++],o=r[t++];e[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},nh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],o=s+1<r.length,a=o?r[s+1]:0,l=s+2<r.length,u=l?r[s+2]:0,d=i>>2,f=(i&3)<<4|a>>4;let m=(a&15)<<2|u>>6,y=u&63;l||(y=64,o||(m=64)),n.push(t[d],t[f],t[m],t[y])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(U_(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):ww(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=t[r.charAt(s++)],a=s<r.length?t[r.charAt(s)]:0;++s;const u=s<r.length?t[r.charAt(s)]:64;++s;const f=s<r.length?t[r.charAt(s)]:64;if(++s,i==null||a==null||u==null||f==null)throw new vw;const m=i<<2|a>>4;if(n.push(m),u!==64){const y=a<<4&240|u>>2;if(n.push(y),f!==64){const S=u<<6&192|f;n.push(S)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class vw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const B_=function(r){const e=U_(r);return nh.encodeByteArray(e,!0)},ka=function(r){return B_(r).replace(/\./g,"")},Da=function(r){try{return nh.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Aw(r){return q_(void 0,r)}function q_(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Sw(t)||(r[t]=q_(r[t],e[t]));return r}function Sw(r){return r!=="__proto__"}/**
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
 */function G_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const bw=()=>G_().__FIREBASE_DEFAULTS__,Rw=()=>{if(typeof process>"u"||typeof ip>"u")return;const r=ip.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Cw=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Da(r[1]);return e&&JSON.parse(e)},gc=()=>{try{return Tw()||bw()||Rw()||Cw()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},z_=r=>gc()?.emulatorHosts?.[r],j_=r=>{const e=z_(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},W_=()=>gc()?.config,$_=r=>gc()?.[`_${r}`];/**
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
 */class Nt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
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
 */function Zt(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function yc(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function K_(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",s=r.iat||0,i=r.sub||r.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...r};return[ka(JSON.stringify(t)),ka(JSON.stringify(o)),""].join(".")}const Li={};function Pw(){const r={prod:[],emulator:[]};for(const e of Object.keys(Li))Li[e]?r.emulator.push(e):r.prod.push(e);return r}function Nw(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let op=!1;function rh(r,e){if(typeof window>"u"||typeof document>"u"||!Zt(window.location.host)||Li[r]===e||Li[r]||op)return;Li[r]=e;function t(m){return`__firebase__banner__${m}`}const n="__firebase__banner",i=Pw().prod.length>0;function o(){const m=document.getElementById(n);m&&m.remove()}function a(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,y){m.setAttribute("width","24"),m.setAttribute("id",y),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{op=!0,o()},m}function d(m,y){m.setAttribute("id",y),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function f(){const m=Nw(n),y=t("text"),S=document.getElementById(y)||document.createElement("span"),N=t("learnmore"),k=document.getElementById(N)||document.createElement("a"),F=t("preprendIcon"),G=document.getElementById(F)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const B=m.element;a(B),d(k,N);const se=u();l(G,F),B.append(G,S,k,se),document.body.appendChild(B)}i?(S.innerText="Preview backend disconnected.",G.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,S.innerText="Preview backend running in this workspace."),S.setAttribute("id",y)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
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
 */function Ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ve())}function H_(){const r=gc()?.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function kw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Dw(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Q_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xw(){const r=Ve();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Vw(){return F_.NODE_ADMIN===!0}function Y_(){return!H_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function J_(){return!H_()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function X_(){try{return typeof indexedDB=="object"}catch{return!1}}function Ow(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}/**
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
 */const Mw="FirebaseError";class en extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=Mw,Object.setPrototypeOf(this,en.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wo.prototype.create)}}class wo{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Lw(i,n):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new en(s,a,n)}}function Lw(r,e){return r.replace(Fw,(t,n)=>{const s=e[n];return s!=null?String(s):`<${n}?>`})}const Fw=/\{\$([^}]+)}/g;/**
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
 */function Zi(r){return JSON.parse(r)}function ze(r){return JSON.stringify(r)}/**
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
 */const Z_=function(r){let e={},t={},n={},s="";try{const i=r.split(".");e=Zi(Da(i[0])||""),t=Zi(Da(i[1])||""),s=i[2],n=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:n,signature:s}},Uw=function(r){const e=Z_(r),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Bw=function(r){const e=Z_(r).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Ut(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function fs(r,e){if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}function xa(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Va(r,e,t){const n={};for(const s in r)Object.prototype.hasOwnProperty.call(r,s)&&(n[s]=e.call(t,r[s],s,r));return n}function _t(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const i=r[s],o=e[s];if(ap(i)&&ap(o)){if(!_t(i,o))return!1}else if(i!==o)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function ap(r){return r!==null&&typeof r=="object"}/**
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
 */function zs(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}/**
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
 */class qw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)n[f]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let f=0;f<16;f++)n[f]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let f=16;f<80;f++){const m=n[f-3]^n[f-8]^n[f-14]^n[f-16];n[f]=(m<<1|m>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,d;for(let f=0;f<80;f++){f<40?f<20?(u=a^i&(o^a),d=1518500249):(u=i^o^a,d=1859775393):f<60?(u=i&o|a&(i|o),d=2400959708):(u=i^o^a,d=3395469782);const m=(s<<5|s>>>27)+u+l+d+n[f]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=m}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const n=t-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=n;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<t;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let n=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[s]>>i&255,++n;return e}}function Gw(r,e){const t=new zw(r,e);return t.subscribe.bind(t)}class zw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let s;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");jw(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:n},s.next===void 0&&(s.next=xl),s.error===void 0&&(s.error=xl),s.complete===void 0&&(s.complete=xl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jw(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function xl(){}function ps(r,e){return`${r} failed: ${e} argument `}/**
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
 */const Ww=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);if(s>=55296&&s<=56319){const i=s-55296;n++,V(n<r.length,"Surrogate pair missing trail surrogate.");const o=r.charCodeAt(n)-56320;s=65536+(i<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ic=function(r){let e=0;for(let t=0;t<r.length;t++){const n=r.charCodeAt(t);n<128?e++:n<2048?e+=2:n>=55296&&n<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function ie(r){return r&&r._delegate?r._delegate:r}class kn{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ir="[DEFAULT]";/**
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
 */class $w{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new Nt;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),n=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(n)return null;throw s}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Hw(e))try{this.getOrInitializeService({instanceIdentifier:ir})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(e=ir){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ir){return this.instances.has(e)}getOptions(e=ir){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);n===a&&o.resolve(s)}return s}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(n)??new Set;s.add(e),this.onInitCallbacks.set(n,s);const i=this.instances.get(n);return i&&e(i,n),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Kw(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=ir){return this.component?this.component.multipleInstances?e:ir:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Kw(r){return r===ir?void 0:r}function Hw(r){return r.instantiationMode==="EAGER"}/**
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
 */class Qw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new $w(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ee;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(ee||(ee={}));const Yw={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},Jw=ee.INFO,Xw={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},Zw=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),s=Xw[e];if(s)console[s](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ec{constructor(e){this.name=e,this._logLevel=Jw,this._logHandler=Zw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Yw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const ev=(r,e)=>e.some(t=>r instanceof t);let cp,lp;function tv(){return cp||(cp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nv(){return lp||(lp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const eg=new WeakMap,nu=new WeakMap,tg=new WeakMap,Vl=new WeakMap,ih=new WeakMap;function rv(r){const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",o)},i=()=>{t(Sn(r.result)),s()},o=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&eg.set(t,r)}).catch(()=>{}),ih.set(e,r),e}function sv(r){if(nu.has(r))return;const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",o),r.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",o),r.addEventListener("abort",o)});nu.set(r,e)}let ru={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return nu.get(r);if(e==="objectStoreNames")return r.objectStoreNames||tg.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Sn(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function iv(r){ru=r(ru)}function ov(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(Ol(this),e,...t);return tg.set(n,e.sort?e.sort():[e]),Sn(n)}:nv().includes(r)?function(...e){return r.apply(Ol(this),e),Sn(eg.get(this))}:function(...e){return Sn(r.apply(Ol(this),e))}}function av(r){return typeof r=="function"?ov(r):(r instanceof IDBTransaction&&sv(r),ev(r,tv())?new Proxy(r,ru):r)}function Sn(r){if(r instanceof IDBRequest)return rv(r);if(Vl.has(r))return Vl.get(r);const e=av(r);return e!==r&&(Vl.set(r,e),ih.set(e,r)),e}const Ol=r=>ih.get(r);function cv(r,e,{blocked:t,upgrade:n,blocking:s,terminated:i}={}){const o=indexedDB.open(r,e),a=Sn(o);return n&&o.addEventListener("upgradeneeded",l=>{n(Sn(o.result),l.oldVersion,l.newVersion,Sn(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const lv=["get","getKey","getAll","getAllKeys","count"],uv=["put","add","delete","clear"],Ml=new Map;function up(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Ml.get(e))return Ml.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,s=uv.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||lv.includes(t)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return n&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),s&&l.done]))[0]};return Ml.set(e,i),i}iv(r=>({...r,get:(e,t,n)=>up(e,t)||r.get(e,t,n),has:(e,t)=>!!up(e,t)||r.has(e,t)}));/**
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
 */class hv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(dv(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function dv(r){return r.getComponent()?.type==="VERSION"}const su="@firebase/app",hp="0.14.3";/**
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
 */const Kt=new Ec("@firebase/app"),fv="@firebase/app-compat",pv="@firebase/analytics-compat",mv="@firebase/analytics",_v="@firebase/app-check-compat",gv="@firebase/app-check",yv="@firebase/auth",Iv="@firebase/auth-compat",Ev="@firebase/database",Tv="@firebase/data-connect",wv="@firebase/database-compat",vv="@firebase/functions",Av="@firebase/functions-compat",Sv="@firebase/installations",bv="@firebase/installations-compat",Rv="@firebase/messaging",Cv="@firebase/messaging-compat",Pv="@firebase/performance",Nv="@firebase/performance-compat",kv="@firebase/remote-config",Dv="@firebase/remote-config-compat",xv="@firebase/storage",Vv="@firebase/storage-compat",Ov="@firebase/firestore",Mv="@firebase/ai",Lv="@firebase/firestore-compat",Fv="firebase",Uv="12.3.0";/**
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
 */const Oa="[DEFAULT]",Bv={[su]:"fire-core",[fv]:"fire-core-compat",[mv]:"fire-analytics",[pv]:"fire-analytics-compat",[gv]:"fire-app-check",[_v]:"fire-app-check-compat",[yv]:"fire-auth",[Iv]:"fire-auth-compat",[Ev]:"fire-rtdb",[Tv]:"fire-data-connect",[wv]:"fire-rtdb-compat",[vv]:"fire-fn",[Av]:"fire-fn-compat",[Sv]:"fire-iid",[bv]:"fire-iid-compat",[Rv]:"fire-fcm",[Cv]:"fire-fcm-compat",[Pv]:"fire-perf",[Nv]:"fire-perf-compat",[kv]:"fire-rc",[Dv]:"fire-rc-compat",[xv]:"fire-gcs",[Vv]:"fire-gcs-compat",[Ov]:"fire-fst",[Lv]:"fire-fst-compat",[Mv]:"fire-vertex","fire-js":"fire-js",[Fv]:"fire-js-all"};/**
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
 */const Ma=new Map,qv=new Map,iu=new Map;function dp(r,e){try{r.container.addComponent(e)}catch(t){Kt.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Ir(r){const e=r.name;if(iu.has(e))return Kt.debug(`There were multiple attempts to register component ${e}.`),!1;iu.set(e,r);for(const t of Ma.values())dp(t,r);for(const t of qv.values())dp(t,r);return!0}function js(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Gv(r,e,t=Oa){js(r,e).clearInstance(t)}function yt(r){return r==null?!1:r.settings!==void 0}/**
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
 */const zv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},bn=new wo("app","Firebase",zv);/**
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
 */class jv{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bn.create("app-deleted",{appName:this._name})}}/**
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
 */const Vr=Uv;function ng(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n={name:Oa,automaticDataCollectionEnabled:!0,...e},s=n.name;if(typeof s!="string"||!s)throw bn.create("bad-app-name",{appName:String(s)});if(t||(t=W_()),!t)throw bn.create("no-options");const i=Ma.get(s);if(i){if(_t(t,i.options)&&_t(n,i.config))return i;throw bn.create("duplicate-app",{appName:s})}const o=new Qw(s);for(const l of iu.values())o.addComponent(l);const a=new jv(t,n,o);return Ma.set(s,a),a}function oh(r=Oa){const e=Ma.get(r);if(!e&&r===Oa&&W_())return ng();if(!e)throw bn.create("no-app",{appName:r});return e}function xt(r,e,t){let n=Bv[r]??r;t&&(n+=`-${t}`);const s=n.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${n}" with version "${e}":`];s&&o.push(`library name "${n}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Kt.warn(o.join(" "));return}Ir(new kn(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
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
 */const Wv="firebase-heartbeat-database",$v=1,eo="firebase-heartbeat-store";let Ll=null;function rg(){return Ll||(Ll=cv(Wv,$v,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(eo)}catch(t){console.warn(t)}}}}).catch(r=>{throw bn.create("idb-open",{originalErrorMessage:r.message})})),Ll}async function Kv(r){try{const t=(await rg()).transaction(eo),n=await t.objectStore(eo).get(sg(r));return await t.done,n}catch(e){if(e instanceof en)Kt.warn(e.message);else{const t=bn.create("idb-get",{originalErrorMessage:e?.message});Kt.warn(t.message)}}}async function fp(r,e){try{const n=(await rg()).transaction(eo,"readwrite");await n.objectStore(eo).put(e,sg(r)),await n.done}catch(t){if(t instanceof en)Kt.warn(t.message);else{const n=bn.create("idb-set",{originalErrorMessage:t?.message});Kt.warn(n.message)}}}function sg(r){return`${r.name}!${r.options.appId}`}/**
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
 */const Hv=1024,Qv=30;class Yv{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Xv(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=pp();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(s=>s.date===n))return;if(this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats.length>Qv){const s=Zv(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Kt.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=pp(),{heartbeatsToSend:t,unsentEntries:n}=Jv(this._heartbeatsCache.heartbeats),s=ka(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Kt.warn(e),""}}}function pp(){return new Date().toISOString().substring(0,10)}function Jv(r,e=Hv){const t=[];let n=r.slice();for(const s of r){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),mp(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),mp(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class Xv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return X_()?Ow().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Kv(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return fp(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return fp(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function mp(r){return ka(JSON.stringify({version:2,heartbeats:r})).length}function Zv(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let n=1;n<r.length;n++)r[n].date<t&&(t=r[n].date,e=n);return e}/**
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
 */function eA(r){Ir(new kn("platform-logger",e=>new hv(e),"PRIVATE")),Ir(new kn("heartbeat",e=>new Yv(e),"PRIVATE")),xt(su,hp,r),xt(su,hp,"esm2020"),xt("fire-js","")}eA("");var tA="firebase",nA="12.3.0";/**
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
 */xt(tA,nA,"app");var _p=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rn,ig;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,g){function E(){}E.prototype=g.prototype,T.F=g.prototype,T.prototype=new E,T.prototype.constructor=T,T.D=function(v,w,C){for(var I=Array(arguments.length-2),tt=2;tt<arguments.length;tt++)I[tt-2]=arguments[tt];return g.prototype[w].apply(v,I)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(n,t),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,g,E){E||(E=0);const v=Array(16);if(typeof g=="string")for(var w=0;w<16;++w)v[w]=g.charCodeAt(E++)|g.charCodeAt(E++)<<8|g.charCodeAt(E++)<<16|g.charCodeAt(E++)<<24;else for(w=0;w<16;++w)v[w]=g[E++]|g[E++]<<8|g[E++]<<16|g[E++]<<24;g=T.g[0],E=T.g[1],w=T.g[2];let C=T.g[3],I;I=g+(C^E&(w^C))+v[0]+3614090360&4294967295,g=E+(I<<7&4294967295|I>>>25),I=C+(w^g&(E^w))+v[1]+3905402710&4294967295,C=g+(I<<12&4294967295|I>>>20),I=w+(E^C&(g^E))+v[2]+606105819&4294967295,w=C+(I<<17&4294967295|I>>>15),I=E+(g^w&(C^g))+v[3]+3250441966&4294967295,E=w+(I<<22&4294967295|I>>>10),I=g+(C^E&(w^C))+v[4]+4118548399&4294967295,g=E+(I<<7&4294967295|I>>>25),I=C+(w^g&(E^w))+v[5]+1200080426&4294967295,C=g+(I<<12&4294967295|I>>>20),I=w+(E^C&(g^E))+v[6]+2821735955&4294967295,w=C+(I<<17&4294967295|I>>>15),I=E+(g^w&(C^g))+v[7]+4249261313&4294967295,E=w+(I<<22&4294967295|I>>>10),I=g+(C^E&(w^C))+v[8]+1770035416&4294967295,g=E+(I<<7&4294967295|I>>>25),I=C+(w^g&(E^w))+v[9]+2336552879&4294967295,C=g+(I<<12&4294967295|I>>>20),I=w+(E^C&(g^E))+v[10]+4294925233&4294967295,w=C+(I<<17&4294967295|I>>>15),I=E+(g^w&(C^g))+v[11]+2304563134&4294967295,E=w+(I<<22&4294967295|I>>>10),I=g+(C^E&(w^C))+v[12]+1804603682&4294967295,g=E+(I<<7&4294967295|I>>>25),I=C+(w^g&(E^w))+v[13]+4254626195&4294967295,C=g+(I<<12&4294967295|I>>>20),I=w+(E^C&(g^E))+v[14]+2792965006&4294967295,w=C+(I<<17&4294967295|I>>>15),I=E+(g^w&(C^g))+v[15]+1236535329&4294967295,E=w+(I<<22&4294967295|I>>>10),I=g+(w^C&(E^w))+v[1]+4129170786&4294967295,g=E+(I<<5&4294967295|I>>>27),I=C+(E^w&(g^E))+v[6]+3225465664&4294967295,C=g+(I<<9&4294967295|I>>>23),I=w+(g^E&(C^g))+v[11]+643717713&4294967295,w=C+(I<<14&4294967295|I>>>18),I=E+(C^g&(w^C))+v[0]+3921069994&4294967295,E=w+(I<<20&4294967295|I>>>12),I=g+(w^C&(E^w))+v[5]+3593408605&4294967295,g=E+(I<<5&4294967295|I>>>27),I=C+(E^w&(g^E))+v[10]+38016083&4294967295,C=g+(I<<9&4294967295|I>>>23),I=w+(g^E&(C^g))+v[15]+3634488961&4294967295,w=C+(I<<14&4294967295|I>>>18),I=E+(C^g&(w^C))+v[4]+3889429448&4294967295,E=w+(I<<20&4294967295|I>>>12),I=g+(w^C&(E^w))+v[9]+568446438&4294967295,g=E+(I<<5&4294967295|I>>>27),I=C+(E^w&(g^E))+v[14]+3275163606&4294967295,C=g+(I<<9&4294967295|I>>>23),I=w+(g^E&(C^g))+v[3]+4107603335&4294967295,w=C+(I<<14&4294967295|I>>>18),I=E+(C^g&(w^C))+v[8]+1163531501&4294967295,E=w+(I<<20&4294967295|I>>>12),I=g+(w^C&(E^w))+v[13]+2850285829&4294967295,g=E+(I<<5&4294967295|I>>>27),I=C+(E^w&(g^E))+v[2]+4243563512&4294967295,C=g+(I<<9&4294967295|I>>>23),I=w+(g^E&(C^g))+v[7]+1735328473&4294967295,w=C+(I<<14&4294967295|I>>>18),I=E+(C^g&(w^C))+v[12]+2368359562&4294967295,E=w+(I<<20&4294967295|I>>>12),I=g+(E^w^C)+v[5]+4294588738&4294967295,g=E+(I<<4&4294967295|I>>>28),I=C+(g^E^w)+v[8]+2272392833&4294967295,C=g+(I<<11&4294967295|I>>>21),I=w+(C^g^E)+v[11]+1839030562&4294967295,w=C+(I<<16&4294967295|I>>>16),I=E+(w^C^g)+v[14]+4259657740&4294967295,E=w+(I<<23&4294967295|I>>>9),I=g+(E^w^C)+v[1]+2763975236&4294967295,g=E+(I<<4&4294967295|I>>>28),I=C+(g^E^w)+v[4]+1272893353&4294967295,C=g+(I<<11&4294967295|I>>>21),I=w+(C^g^E)+v[7]+4139469664&4294967295,w=C+(I<<16&4294967295|I>>>16),I=E+(w^C^g)+v[10]+3200236656&4294967295,E=w+(I<<23&4294967295|I>>>9),I=g+(E^w^C)+v[13]+681279174&4294967295,g=E+(I<<4&4294967295|I>>>28),I=C+(g^E^w)+v[0]+3936430074&4294967295,C=g+(I<<11&4294967295|I>>>21),I=w+(C^g^E)+v[3]+3572445317&4294967295,w=C+(I<<16&4294967295|I>>>16),I=E+(w^C^g)+v[6]+76029189&4294967295,E=w+(I<<23&4294967295|I>>>9),I=g+(E^w^C)+v[9]+3654602809&4294967295,g=E+(I<<4&4294967295|I>>>28),I=C+(g^E^w)+v[12]+3873151461&4294967295,C=g+(I<<11&4294967295|I>>>21),I=w+(C^g^E)+v[15]+530742520&4294967295,w=C+(I<<16&4294967295|I>>>16),I=E+(w^C^g)+v[2]+3299628645&4294967295,E=w+(I<<23&4294967295|I>>>9),I=g+(w^(E|~C))+v[0]+4096336452&4294967295,g=E+(I<<6&4294967295|I>>>26),I=C+(E^(g|~w))+v[7]+1126891415&4294967295,C=g+(I<<10&4294967295|I>>>22),I=w+(g^(C|~E))+v[14]+2878612391&4294967295,w=C+(I<<15&4294967295|I>>>17),I=E+(C^(w|~g))+v[5]+4237533241&4294967295,E=w+(I<<21&4294967295|I>>>11),I=g+(w^(E|~C))+v[12]+1700485571&4294967295,g=E+(I<<6&4294967295|I>>>26),I=C+(E^(g|~w))+v[3]+2399980690&4294967295,C=g+(I<<10&4294967295|I>>>22),I=w+(g^(C|~E))+v[10]+4293915773&4294967295,w=C+(I<<15&4294967295|I>>>17),I=E+(C^(w|~g))+v[1]+2240044497&4294967295,E=w+(I<<21&4294967295|I>>>11),I=g+(w^(E|~C))+v[8]+1873313359&4294967295,g=E+(I<<6&4294967295|I>>>26),I=C+(E^(g|~w))+v[15]+4264355552&4294967295,C=g+(I<<10&4294967295|I>>>22),I=w+(g^(C|~E))+v[6]+2734768916&4294967295,w=C+(I<<15&4294967295|I>>>17),I=E+(C^(w|~g))+v[13]+1309151649&4294967295,E=w+(I<<21&4294967295|I>>>11),I=g+(w^(E|~C))+v[4]+4149444226&4294967295,g=E+(I<<6&4294967295|I>>>26),I=C+(E^(g|~w))+v[11]+3174756917&4294967295,C=g+(I<<10&4294967295|I>>>22),I=w+(g^(C|~E))+v[2]+718787259&4294967295,w=C+(I<<15&4294967295|I>>>17),I=E+(C^(w|~g))+v[9]+3951481745&4294967295,T.g[0]=T.g[0]+g&4294967295,T.g[1]=T.g[1]+(w+(I<<21&4294967295|I>>>11))&4294967295,T.g[2]=T.g[2]+w&4294967295,T.g[3]=T.g[3]+C&4294967295}n.prototype.v=function(T,g){g===void 0&&(g=T.length);const E=g-this.blockSize,v=this.C;let w=this.h,C=0;for(;C<g;){if(w==0)for(;C<=E;)s(this,T,C),C+=this.blockSize;if(typeof T=="string"){for(;C<g;)if(v[w++]=T.charCodeAt(C++),w==this.blockSize){s(this,v),w=0;break}}else for(;C<g;)if(v[w++]=T[C++],w==this.blockSize){s(this,v),w=0;break}}this.h=w,this.o+=g},n.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var g=1;g<T.length-8;++g)T[g]=0;g=this.o*8;for(var E=T.length-8;E<T.length;++E)T[E]=g&255,g/=256;for(this.v(T),T=Array(16),g=0,E=0;E<4;++E)for(let v=0;v<32;v+=8)T[g++]=this.g[E]>>>v&255;return T};function i(T,g){var E=a;return Object.prototype.hasOwnProperty.call(E,T)?E[T]:E[T]=g(T)}function o(T,g){this.h=g;const E=[];let v=!0;for(let w=T.length-1;w>=0;w--){const C=T[w]|0;v&&C==g||(E[w]=C,v=!1)}this.g=E}var a={};function l(T){return-128<=T&&T<128?i(T,function(g){return new o([g|0],g<0?-1:0)}):new o([T|0],T<0?-1:0)}function u(T){if(isNaN(T)||!isFinite(T))return f;if(T<0)return k(u(-T));const g=[];let E=1;for(let v=0;T>=E;v++)g[v]=T/E|0,E*=4294967296;return new o(g,0)}function d(T,g){if(T.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(T.charAt(0)=="-")return k(d(T.substring(1),g));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=u(Math.pow(g,8));let v=f;for(let C=0;C<T.length;C+=8){var w=Math.min(8,T.length-C);const I=parseInt(T.substring(C,C+w),g);w<8?(w=u(Math.pow(g,w)),v=v.j(w).add(u(I))):(v=v.j(E),v=v.add(u(I)))}return v}var f=l(0),m=l(1),y=l(16777216);r=o.prototype,r.m=function(){if(N(this))return-k(this).m();let T=0,g=1;for(let E=0;E<this.g.length;E++){const v=this.i(E);T+=(v>=0?v:4294967296+v)*g,g*=4294967296}return T},r.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(S(this))return"0";if(N(this))return"-"+k(this).toString(T);const g=u(Math.pow(T,6));var E=this;let v="";for(;;){const w=se(E,g).g;E=F(E,w.j(g));let C=((E.g.length>0?E.g[0]:E.h)>>>0).toString(T);if(E=w,S(E))return C+v;for(;C.length<6;)C="0"+C;v=C+v}},r.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function S(T){if(T.h!=0)return!1;for(let g=0;g<T.g.length;g++)if(T.g[g]!=0)return!1;return!0}function N(T){return T.h==-1}r.l=function(T){return T=F(this,T),N(T)?-1:S(T)?0:1};function k(T){const g=T.g.length,E=[];for(let v=0;v<g;v++)E[v]=~T.g[v];return new o(E,~T.h).add(m)}r.abs=function(){return N(this)?k(this):this},r.add=function(T){const g=Math.max(this.g.length,T.g.length),E=[];let v=0;for(let w=0;w<=g;w++){let C=v+(this.i(w)&65535)+(T.i(w)&65535),I=(C>>>16)+(this.i(w)>>>16)+(T.i(w)>>>16);v=I>>>16,C&=65535,I&=65535,E[w]=I<<16|C}return new o(E,E[E.length-1]&-2147483648?-1:0)};function F(T,g){return T.add(k(g))}r.j=function(T){if(S(this)||S(T))return f;if(N(this))return N(T)?k(this).j(k(T)):k(k(this).j(T));if(N(T))return k(this.j(k(T)));if(this.l(y)<0&&T.l(y)<0)return u(this.m()*T.m());const g=this.g.length+T.g.length,E=[];for(var v=0;v<2*g;v++)E[v]=0;for(v=0;v<this.g.length;v++)for(let w=0;w<T.g.length;w++){const C=this.i(v)>>>16,I=this.i(v)&65535,tt=T.i(w)>>>16,Xn=T.i(w)&65535;E[2*v+2*w]+=I*Xn,G(E,2*v+2*w),E[2*v+2*w+1]+=C*Xn,G(E,2*v+2*w+1),E[2*v+2*w+1]+=I*tt,G(E,2*v+2*w+1),E[2*v+2*w+2]+=C*tt,G(E,2*v+2*w+2)}for(T=0;T<g;T++)E[T]=E[2*T+1]<<16|E[2*T];for(T=g;T<2*g;T++)E[T]=0;return new o(E,0)};function G(T,g){for(;(T[g]&65535)!=T[g];)T[g+1]+=T[g]>>>16,T[g]&=65535,g++}function B(T,g){this.g=T,this.h=g}function se(T,g){if(S(g))throw Error("division by zero");if(S(T))return new B(f,f);if(N(T))return g=se(k(T),g),new B(k(g.g),k(g.h));if(N(g))return g=se(T,k(g)),new B(k(g.g),g.h);if(T.g.length>30){if(N(T)||N(g))throw Error("slowDivide_ only works with positive integers.");for(var E=m,v=g;v.l(T)<=0;)E=oe(E),v=oe(v);var w=ne(E,1),C=ne(v,1);for(v=ne(v,2),E=ne(E,2);!S(v);){var I=C.add(v);I.l(T)<=0&&(w=w.add(E),C=I),v=ne(v,1),E=ne(E,1)}return g=F(T,w.j(g)),new B(w,g)}for(w=f;T.l(g)>=0;){for(E=Math.max(1,Math.floor(T.m()/g.m())),v=Math.ceil(Math.log(E)/Math.LN2),v=v<=48?1:Math.pow(2,v-48),C=u(E),I=C.j(g);N(I)||I.l(T)>0;)E-=v,C=u(E),I=C.j(g);S(C)&&(C=m),w=w.add(C),T=F(T,I)}return new B(w,T)}r.B=function(T){return se(this,T).h},r.and=function(T){const g=Math.max(this.g.length,T.g.length),E=[];for(let v=0;v<g;v++)E[v]=this.i(v)&T.i(v);return new o(E,this.h&T.h)},r.or=function(T){const g=Math.max(this.g.length,T.g.length),E=[];for(let v=0;v<g;v++)E[v]=this.i(v)|T.i(v);return new o(E,this.h|T.h)},r.xor=function(T){const g=Math.max(this.g.length,T.g.length),E=[];for(let v=0;v<g;v++)E[v]=this.i(v)^T.i(v);return new o(E,this.h^T.h)};function oe(T){const g=T.g.length+1,E=[];for(let v=0;v<g;v++)E[v]=T.i(v)<<1|T.i(v-1)>>>31;return new o(E,T.h)}function ne(T,g){const E=g>>5;g%=32;const v=T.g.length-E,w=[];for(let C=0;C<v;C++)w[C]=g>0?T.i(C+E)>>>g|T.i(C+E+1)<<32-g:T.i(C+E);return new o(w,T.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,ig=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,Rn=o}).apply(typeof _p<"u"?_p:typeof self<"u"?self:typeof window<"u"?window:{});var ia=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var og,xi,ag,_a,ou,cg,lg,ug;(function(){var r,e=Object.defineProperty;function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof ia=="object"&&ia];for(var h=0;h<c.length;++h){var p=c[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var n=t(this);function s(c,h){if(h)e:{var p=n;c=c.split(".");for(var _=0;_<c.length-1;_++){var b=c[_];if(!(b in p))break e;p=p[b]}c=c[c.length-1],_=p[c],h=h(_),h!=_&&h!=null&&e(p,c,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(c){return c||function(h){var p=[],_;for(_ in h)Object.prototype.hasOwnProperty.call(h,_)&&p.push([_,h[_]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function a(c){var h=typeof c;return h=="object"&&c!=null||h=="function"}function l(c,h,p){return c.call.apply(c.bind,arguments)}function u(c,h,p){return u=l,u.apply(null,arguments)}function d(c,h){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),c.apply(this,_)}}function f(c,h){function p(){}p.prototype=h.prototype,c.Z=h.prototype,c.prototype=new p,c.prototype.constructor=c,c.Ob=function(_,b,P){for(var L=Array(arguments.length-2),H=2;H<arguments.length;H++)L[H-2]=arguments[H];return h.prototype[b].apply(_,L)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function y(c){const h=c.length;if(h>0){const p=Array(h);for(let _=0;_<h;_++)p[_]=c[_];return p}return[]}function S(c,h){for(let _=1;_<arguments.length;_++){const b=arguments[_];var p=typeof b;if(p=p!="object"?p:b?Array.isArray(b)?"array":p:"null",p=="array"||p=="object"&&typeof b.length=="number"){p=c.length||0;const P=b.length||0;c.length=p+P;for(let L=0;L<P;L++)c[p+L]=b[L]}else c.push(b)}}class N{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function k(c){o.setTimeout(()=>{throw c},0)}function F(){var c=T;let h=null;return c.g&&(h=c.g,c.g=c.g.next,c.g||(c.h=null),h.next=null),h}class G{constructor(){this.h=this.g=null}add(h,p){const _=B.get();_.set(h,p),this.h?this.h.next=_:this.g=_,this.h=_}}var B=new N(()=>new se,c=>c.reset());class se{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let oe,ne=!1,T=new G,g=()=>{const c=Promise.resolve(void 0);oe=()=>{c.then(E)}};function E(){for(var c;c=F();){try{c.h.call(c.g)}catch(p){k(p)}var h=B;h.j(c),h.h<100&&(h.h++,c.next=h.g,h.g=c)}ne=!1}function v(){this.u=this.u,this.C=this.C}v.prototype.u=!1,v.prototype.dispose=function(){this.u||(this.u=!0,this.N())},v.prototype[Symbol.dispose]=function(){this.dispose()},v.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function w(c,h){this.type=c,this.g=this.target=h,this.defaultPrevented=!1}w.prototype.h=function(){this.defaultPrevented=!0};var C=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var c=!1,h=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const p=()=>{};o.addEventListener("test",p,h),o.removeEventListener("test",p,h)}catch{}return c})();function I(c){return/^[\s\xa0]*$/.test(c)}function tt(c,h){w.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,h)}f(tt,w),tt.prototype.init=function(c,h){const p=this.type=c.type,_=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=h,h=c.relatedTarget,h||(p=="mouseover"?h=c.fromElement:p=="mouseout"&&(h=c.toElement)),this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&tt.Z.h.call(this)},tt.prototype.h=function(){tt.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Xn="closure_listenable_"+(Math.random()*1e6|0),zT=0;function jT(c,h,p,_,b){this.listener=c,this.proxy=null,this.src=h,this.type=p,this.capture=!!_,this.ha=b,this.key=++zT,this.da=this.fa=!1}function jo(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Wo(c,h,p){for(const _ in c)h.call(p,c[_],_,c)}function WT(c,h){for(const p in c)h.call(void 0,c[p],p,c)}function rf(c){const h={};for(const p in c)h[p]=c[p];return h}const sf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function of(c,h){let p,_;for(let b=1;b<arguments.length;b++){_=arguments[b];for(p in _)c[p]=_[p];for(let P=0;P<sf.length;P++)p=sf[P],Object.prototype.hasOwnProperty.call(_,p)&&(c[p]=_[p])}}function $o(c){this.src=c,this.g={},this.h=0}$o.prototype.add=function(c,h,p,_,b){const P=c.toString();c=this.g[P],c||(c=this.g[P]=[],this.h++);const L=ul(c,h,_,b);return L>-1?(h=c[L],p||(h.fa=!1)):(h=new jT(h,this.src,P,!!_,b),h.fa=p,c.push(h)),h};function ll(c,h){const p=h.type;if(p in c.g){var _=c.g[p],b=Array.prototype.indexOf.call(_,h,void 0),P;(P=b>=0)&&Array.prototype.splice.call(_,b,1),P&&(jo(h),c.g[p].length==0&&(delete c.g[p],c.h--))}}function ul(c,h,p,_){for(let b=0;b<c.length;++b){const P=c[b];if(!P.da&&P.listener==h&&P.capture==!!p&&P.ha==_)return b}return-1}var hl="closure_lm_"+(Math.random()*1e6|0),dl={};function af(c,h,p,_,b){if(Array.isArray(h)){for(let P=0;P<h.length;P++)af(c,h[P],p,_,b);return null}return p=uf(p),c&&c[Xn]?c.J(h,p,a(_)?!!_.capture:!1,b):$T(c,h,p,!1,_,b)}function $T(c,h,p,_,b,P){if(!h)throw Error("Invalid event type");const L=a(b)?!!b.capture:!!b;let H=pl(c);if(H||(c[hl]=H=new $o(c)),p=H.add(h,p,_,L,P),p.proxy)return p;if(_=KT(),p.proxy=_,_.src=c,_.listener=p,c.addEventListener)C||(b=L),b===void 0&&(b=!1),c.addEventListener(h.toString(),_,b);else if(c.attachEvent)c.attachEvent(lf(h.toString()),_);else if(c.addListener&&c.removeListener)c.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function KT(){function c(p){return h.call(c.src,c.listener,p)}const h=HT;return c}function cf(c,h,p,_,b){if(Array.isArray(h))for(var P=0;P<h.length;P++)cf(c,h[P],p,_,b);else _=a(_)?!!_.capture:!!_,p=uf(p),c&&c[Xn]?(c=c.i,P=String(h).toString(),P in c.g&&(h=c.g[P],p=ul(h,p,_,b),p>-1&&(jo(h[p]),Array.prototype.splice.call(h,p,1),h.length==0&&(delete c.g[P],c.h--)))):c&&(c=pl(c))&&(h=c.g[h.toString()],c=-1,h&&(c=ul(h,p,_,b)),(p=c>-1?h[c]:null)&&fl(p))}function fl(c){if(typeof c!="number"&&c&&!c.da){var h=c.src;if(h&&h[Xn])ll(h.i,c);else{var p=c.type,_=c.proxy;h.removeEventListener?h.removeEventListener(p,_,c.capture):h.detachEvent?h.detachEvent(lf(p),_):h.addListener&&h.removeListener&&h.removeListener(_),(p=pl(h))?(ll(p,c),p.h==0&&(p.src=null,h[hl]=null)):jo(c)}}}function lf(c){return c in dl?dl[c]:dl[c]="on"+c}function HT(c,h){if(c.da)c=!0;else{h=new tt(h,this);const p=c.listener,_=c.ha||c.src;c.fa&&fl(c),c=p.call(_,h)}return c}function pl(c){return c=c[hl],c instanceof $o?c:null}var ml="__closure_events_fn_"+(Math.random()*1e9>>>0);function uf(c){return typeof c=="function"?c:(c[ml]||(c[ml]=function(h){return c.handleEvent(h)}),c[ml])}function Ke(){v.call(this),this.i=new $o(this),this.M=this,this.G=null}f(Ke,v),Ke.prototype[Xn]=!0,Ke.prototype.removeEventListener=function(c,h,p,_){cf(this,c,h,p,_)};function Xe(c,h){var p,_=c.G;if(_)for(p=[];_;_=_.G)p.push(_);if(c=c.M,_=h.type||h,typeof h=="string")h=new w(h,c);else if(h instanceof w)h.target=h.target||c;else{var b=h;h=new w(_,c),of(h,b)}b=!0;let P,L;if(p)for(L=p.length-1;L>=0;L--)P=h.g=p[L],b=Ko(P,_,!0,h)&&b;if(P=h.g=c,b=Ko(P,_,!0,h)&&b,b=Ko(P,_,!1,h)&&b,p)for(L=0;L<p.length;L++)P=h.g=p[L],b=Ko(P,_,!1,h)&&b}Ke.prototype.N=function(){if(Ke.Z.N.call(this),this.i){var c=this.i;for(const h in c.g){const p=c.g[h];for(let _=0;_<p.length;_++)jo(p[_]);delete c.g[h],c.h--}}this.G=null},Ke.prototype.J=function(c,h,p,_){return this.i.add(String(c),h,!1,p,_)},Ke.prototype.K=function(c,h,p,_){return this.i.add(String(c),h,!0,p,_)};function Ko(c,h,p,_){if(h=c.i.g[String(h)],!h)return!0;h=h.concat();let b=!0;for(let P=0;P<h.length;++P){const L=h[P];if(L&&!L.da&&L.capture==p){const H=L.listener,xe=L.ha||L.src;L.fa&&ll(c.i,L),b=H.call(xe,_)!==!1&&b}}return b&&!_.defaultPrevented}function QT(c,h){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=u(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(c,h||0)}function hf(c){c.g=QT(()=>{c.g=null,c.i&&(c.i=!1,hf(c))},c.l);const h=c.h;c.h=null,c.m.apply(null,h)}class YT extends v{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:hf(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ci(c){v.call(this),this.h=c,this.g={}}f(ci,v);var df=[];function ff(c){Wo(c.g,function(h,p){this.g.hasOwnProperty(p)&&fl(h)},c),c.g={}}ci.prototype.N=function(){ci.Z.N.call(this),ff(this)},ci.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var _l=o.JSON.stringify,JT=o.JSON.parse,XT=class{stringify(c){return o.JSON.stringify(c,void 0)}parse(c){return o.JSON.parse(c,void 0)}};function pf(){}function mf(){}var li={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function gl(){w.call(this,"d")}f(gl,w);function yl(){w.call(this,"c")}f(yl,w);var Zn={},_f=null;function Ho(){return _f=_f||new Ke}Zn.Ia="serverreachability";function gf(c){w.call(this,Zn.Ia,c)}f(gf,w);function ui(c){const h=Ho();Xe(h,new gf(h))}Zn.STAT_EVENT="statevent";function yf(c,h){w.call(this,Zn.STAT_EVENT,c),this.stat=h}f(yf,w);function Ze(c){const h=Ho();Xe(h,new yf(h,c))}Zn.Ja="timingevent";function If(c,h){w.call(this,Zn.Ja,c),this.size=h}f(If,w);function hi(c,h){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){c()},h)}function di(){this.g=!0}di.prototype.ua=function(){this.g=!1};function ZT(c,h,p,_,b,P){c.info(function(){if(c.g)if(P){var L="",H=P.split("&");for(let pe=0;pe<H.length;pe++){var xe=H[pe].split("=");if(xe.length>1){const Le=xe[0];xe=xe[1];const Rt=Le.split("_");L=Rt.length>=2&&Rt[1]=="type"?L+(Le+"="+xe+"&"):L+(Le+"=redacted&")}}}else L=null;else L=P;return"XMLHTTP REQ ("+_+") [attempt "+b+"]: "+h+`
`+p+`
`+L})}function ew(c,h,p,_,b,P,L){c.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+b+"]: "+h+`
`+p+`
`+P+" "+L})}function Gr(c,h,p,_){c.info(function(){return"XMLHTTP TEXT ("+h+"): "+nw(c,p)+(_?" "+_:"")})}function tw(c,h){c.info(function(){return"TIMEOUT: "+h})}di.prototype.info=function(){};function nw(c,h){if(!c.g)return h;if(!h)return null;try{const P=JSON.parse(h);if(P){for(c=0;c<P.length;c++)if(Array.isArray(P[c])){var p=P[c];if(!(p.length<2)){var _=p[1];if(Array.isArray(_)&&!(_.length<1)){var b=_[0];if(b!="noop"&&b!="stop"&&b!="close")for(let L=1;L<_.length;L++)_[L]=""}}}}return _l(P)}catch{return h}}var Qo={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ef={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Tf;function Il(){}f(Il,pf),Il.prototype.g=function(){return new XMLHttpRequest},Tf=new Il;function fi(c){return encodeURIComponent(String(c))}function rw(c){var h=1;c=c.split(":");const p=[];for(;h>0&&c.length;)p.push(c.shift()),h--;return c.length&&p.push(c.join(":")),p}function on(c,h,p,_){this.j=c,this.i=h,this.l=p,this.S=_||1,this.V=new ci(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new wf}function wf(){this.i=null,this.g="",this.h=!1}var vf={},El={};function Tl(c,h,p){c.M=1,c.A=Jo(bt(h)),c.u=p,c.R=!0,Af(c,null)}function Af(c,h){c.F=Date.now(),Yo(c),c.B=bt(c.A);var p=c.B,_=c.S;Array.isArray(_)||(_=[String(_)]),Lf(p.i,"t",_),c.C=0,p=c.j.L,c.h=new wf,c.g=tp(c.j,p?h:null,!c.u),c.P>0&&(c.O=new YT(u(c.Y,c,c.g),c.P)),h=c.V,p=c.g,_=c.ba;var b="readystatechange";Array.isArray(b)||(b&&(df[0]=b.toString()),b=df);for(let P=0;P<b.length;P++){const L=af(p,b[P],_||h.handleEvent,!1,h.h||h);if(!L)break;h.g[L.key]=L}h=c.J?rf(c.J):{},c.u?(c.v||(c.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,h)):(c.v="GET",c.g.ea(c.B,c.v,null,h)),ui(),ZT(c.i,c.v,c.B,c.l,c.S,c.u)}on.prototype.ba=function(c){c=c.target;const h=this.O;h&&ln(c)==3?h.j():this.Y(c)},on.prototype.Y=function(c){try{if(c==this.g)e:{const H=ln(this.g),xe=this.g.ya(),pe=this.g.ca();if(!(H<3)&&(H!=3||this.g&&(this.h.h||this.g.la()||jf(this.g)))){this.K||H!=4||xe==7||(xe==8||pe<=0?ui(3):ui(2)),wl(this);var h=this.g.ca();this.X=h;var p=sw(this);if(this.o=h==200,ew(this.i,this.v,this.B,this.l,this.S,H,h),this.o){if(this.U&&!this.L){t:{if(this.g){var _,b=this.g;if((_=b.g?b.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(_)){var P=_;break t}}P=null}if(c=P)Gr(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,vl(this,c);else{this.o=!1,this.m=3,Ze(12),er(this),pi(this);break e}}if(this.R){c=!0;let Le;for(;!this.K&&this.C<p.length;)if(Le=iw(this,p),Le==El){H==4&&(this.m=4,Ze(14),c=!1),Gr(this.i,this.l,null,"[Incomplete Response]");break}else if(Le==vf){this.m=4,Ze(15),Gr(this.i,this.l,p,"[Invalid Chunk]"),c=!1;break}else Gr(this.i,this.l,Le,null),vl(this,Le);if(Sf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),H!=4||p.length!=0||this.h.h||(this.m=1,Ze(16),c=!1),this.o=this.o&&c,!c)Gr(this.i,this.l,p,"[Invalid Chunked Response]"),er(this),pi(this);else if(p.length>0&&!this.W){this.W=!0;var L=this.j;L.g==this&&L.aa&&!L.P&&(L.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),kl(L),L.P=!0,Ze(11))}}else Gr(this.i,this.l,p,null),vl(this,p);H==4&&er(this),this.o&&!this.K&&(H==4?Jf(this.j,this):(this.o=!1,Yo(this)))}else Iw(this.g),h==400&&p.indexOf("Unknown SID")>0?(this.m=3,Ze(12)):(this.m=0,Ze(13)),er(this),pi(this)}}}catch{}finally{}};function sw(c){if(!Sf(c))return c.g.la();const h=jf(c.g);if(h==="")return"";let p="";const _=h.length,b=ln(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return er(c),pi(c),"";c.h.i=new o.TextDecoder}for(let P=0;P<_;P++)c.h.h=!0,p+=c.h.i.decode(h[P],{stream:!(b&&P==_-1)});return h.length=0,c.h.g+=p,c.C=0,c.h.g}function Sf(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function iw(c,h){var p=c.C,_=h.indexOf(`
`,p);return _==-1?El:(p=Number(h.substring(p,_)),isNaN(p)?vf:(_+=1,_+p>h.length?El:(h=h.slice(_,_+p),c.C=_+p,h)))}on.prototype.cancel=function(){this.K=!0,er(this)};function Yo(c){c.T=Date.now()+c.H,bf(c,c.H)}function bf(c,h){if(c.D!=null)throw Error("WatchDog timer not null");c.D=hi(u(c.aa,c),h)}function wl(c){c.D&&(o.clearTimeout(c.D),c.D=null)}on.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(tw(this.i,this.B),this.M!=2&&(ui(),Ze(17)),er(this),this.m=2,pi(this)):bf(this,this.T-c)};function pi(c){c.j.I==0||c.K||Jf(c.j,c)}function er(c){wl(c);var h=c.O;h&&typeof h.dispose=="function"&&h.dispose(),c.O=null,ff(c.V),c.g&&(h=c.g,c.g=null,h.abort(),h.dispose())}function vl(c,h){try{var p=c.j;if(p.I!=0&&(p.g==c||Al(p.h,c))){if(!c.L&&Al(p.h,c)&&p.I==3){try{var _=p.Ba.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var b=_;if(b[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<c.F)na(p),ea(p);else break e;Nl(p),Ze(18)}}else p.xa=b[1],0<p.xa-p.K&&b[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=hi(u(p.Va,p),6e3));Pf(p.h)<=1&&p.ta&&(p.ta=void 0)}else nr(p,11)}else if((c.L||p.g==c)&&na(p),!I(h))for(b=p.Ba.g.parse(h),h=0;h<b.length;h++){let pe=b[h];const Le=pe[0];if(!(Le<=p.K))if(p.K=Le,pe=pe[1],p.I==2)if(pe[0]=="c"){p.M=pe[1],p.ba=pe[2];const Rt=pe[3];Rt!=null&&(p.ka=Rt,p.j.info("VER="+p.ka));const rr=pe[4];rr!=null&&(p.za=rr,p.j.info("SVER="+p.za));const un=pe[5];un!=null&&typeof un=="number"&&un>0&&(_=1.5*un,p.O=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const hn=c.g;if(hn){const sa=hn.g?hn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(sa){var P=_.h;P.g||sa.indexOf("spdy")==-1&&sa.indexOf("quic")==-1&&sa.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Sl(P,P.h),P.h=null))}if(_.G){const Dl=hn.g?hn.g.getResponseHeader("X-HTTP-Session-Id"):null;Dl&&(_.wa=Dl,ge(_.J,_.G,Dl))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-c.F,p.j.info("Handshake RTT: "+p.T+"ms")),_=p;var L=c;if(_.na=ep(_,_.L?_.ba:null,_.W),L.L){Nf(_.h,L);var H=L,xe=_.O;xe&&(H.H=xe),H.D&&(wl(H),Yo(H)),_.g=L}else Qf(_);p.i.length>0&&ta(p)}else pe[0]!="stop"&&pe[0]!="close"||nr(p,7);else p.I==3&&(pe[0]=="stop"||pe[0]=="close"?pe[0]=="stop"?nr(p,7):Pl(p):pe[0]!="noop"&&p.l&&p.l.qa(pe),p.A=0)}}ui(4)}catch{}}var ow=class{constructor(c,h){this.g=c,this.map=h}};function Rf(c){this.l=c||10,o.PerformanceNavigationTiming?(c=o.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Cf(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Pf(c){return c.h?1:c.g?c.g.size:0}function Al(c,h){return c.h?c.h==h:c.g?c.g.has(h):!1}function Sl(c,h){c.g?c.g.add(h):c.h=h}function Nf(c,h){c.h&&c.h==h?c.h=null:c.g&&c.g.has(h)&&c.g.delete(h)}Rf.prototype.cancel=function(){if(this.i=kf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function kf(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let h=c.i;for(const p of c.g.values())h=h.concat(p.G);return h}return y(c.i)}var Df=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function aw(c,h){if(c){c=c.split("&");for(let p=0;p<c.length;p++){const _=c[p].indexOf("=");let b,P=null;_>=0?(b=c[p].substring(0,_),P=c[p].substring(_+1)):b=c[p],h(b,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function an(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;c instanceof an?(this.l=c.l,mi(this,c.j),this.o=c.o,this.g=c.g,_i(this,c.u),this.h=c.h,bl(this,Ff(c.i)),this.m=c.m):c&&(h=String(c).match(Df))?(this.l=!1,mi(this,h[1]||"",!0),this.o=gi(h[2]||""),this.g=gi(h[3]||"",!0),_i(this,h[4]),this.h=gi(h[5]||"",!0),bl(this,h[6]||"",!0),this.m=gi(h[7]||"")):(this.l=!1,this.i=new Ii(null,this.l))}an.prototype.toString=function(){const c=[];var h=this.j;h&&c.push(yi(h,xf,!0),":");var p=this.g;return(p||h=="file")&&(c.push("//"),(h=this.o)&&c.push(yi(h,xf,!0),"@"),c.push(fi(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&c.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&c.push("/"),c.push(yi(p,p.charAt(0)=="/"?uw:lw,!0))),(p=this.i.toString())&&c.push("?",p),(p=this.m)&&c.push("#",yi(p,dw)),c.join("")},an.prototype.resolve=function(c){const h=bt(this);let p=!!c.j;p?mi(h,c.j):p=!!c.o,p?h.o=c.o:p=!!c.g,p?h.g=c.g:p=c.u!=null;var _=c.h;if(p)_i(h,c.u);else if(p=!!c.h){if(_.charAt(0)!="/")if(this.g&&!this.h)_="/"+_;else{var b=h.h.lastIndexOf("/");b!=-1&&(_=h.h.slice(0,b+1)+_)}if(b=_,b==".."||b==".")_="";else if(b.indexOf("./")!=-1||b.indexOf("/.")!=-1){_=b.lastIndexOf("/",0)==0,b=b.split("/");const P=[];for(let L=0;L<b.length;){const H=b[L++];H=="."?_&&L==b.length&&P.push(""):H==".."?((P.length>1||P.length==1&&P[0]!="")&&P.pop(),_&&L==b.length&&P.push("")):(P.push(H),_=!0)}_=P.join("/")}else _=b}return p?h.h=_:p=c.i.toString()!=="",p?bl(h,Ff(c.i)):p=!!c.m,p&&(h.m=c.m),h};function bt(c){return new an(c)}function mi(c,h,p){c.j=p?gi(h,!0):h,c.j&&(c.j=c.j.replace(/:$/,""))}function _i(c,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);c.u=h}else c.u=null}function bl(c,h,p){h instanceof Ii?(c.i=h,fw(c.i,c.l)):(p||(h=yi(h,hw)),c.i=new Ii(h,c.l))}function ge(c,h,p){c.i.set(h,p)}function Jo(c){return ge(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function gi(c,h){return c?h?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function yi(c,h,p){return typeof c=="string"?(c=encodeURI(c).replace(h,cw),p&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function cw(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var xf=/[#\/\?@]/g,lw=/[#\?:]/g,uw=/[#\?]/g,hw=/[#\?@]/g,dw=/#/g;function Ii(c,h){this.h=this.g=null,this.i=c||null,this.j=!!h}function tr(c){c.g||(c.g=new Map,c.h=0,c.i&&aw(c.i,function(h,p){c.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}r=Ii.prototype,r.add=function(c,h){tr(this),this.i=null,c=zr(this,c);let p=this.g.get(c);return p||this.g.set(c,p=[]),p.push(h),this.h+=1,this};function Vf(c,h){tr(c),h=zr(c,h),c.g.has(h)&&(c.i=null,c.h-=c.g.get(h).length,c.g.delete(h))}function Of(c,h){return tr(c),h=zr(c,h),c.g.has(h)}r.forEach=function(c,h){tr(this),this.g.forEach(function(p,_){p.forEach(function(b){c.call(h,b,_,this)},this)},this)};function Mf(c,h){tr(c);let p=[];if(typeof h=="string")Of(c,h)&&(p=p.concat(c.g.get(zr(c,h))));else for(c=Array.from(c.g.values()),h=0;h<c.length;h++)p=p.concat(c[h]);return p}r.set=function(c,h){return tr(this),this.i=null,c=zr(this,c),Of(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[h]),this.h+=1,this},r.get=function(c,h){return c?(c=Mf(this,c),c.length>0?String(c[0]):h):h};function Lf(c,h,p){Vf(c,h),p.length>0&&(c.i=null,c.g.set(zr(c,h),y(p)),c.h+=p.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],h=Array.from(this.g.keys());for(let _=0;_<h.length;_++){var p=h[_];const b=fi(p);p=Mf(this,p);for(let P=0;P<p.length;P++){let L=b;p[P]!==""&&(L+="="+fi(p[P])),c.push(L)}}return this.i=c.join("&")};function Ff(c){const h=new Ii;return h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),h}function zr(c,h){return h=String(h),c.j&&(h=h.toLowerCase()),h}function fw(c,h){h&&!c.j&&(tr(c),c.i=null,c.g.forEach(function(p,_){const b=_.toLowerCase();_!=b&&(Vf(this,_),Lf(this,b,p))},c)),c.j=h}function pw(c,h){const p=new di;if(o.Image){const _=new Image;_.onload=d(cn,p,"TestLoadImage: loaded",!0,h,_),_.onerror=d(cn,p,"TestLoadImage: error",!1,h,_),_.onabort=d(cn,p,"TestLoadImage: abort",!1,h,_),_.ontimeout=d(cn,p,"TestLoadImage: timeout",!1,h,_),o.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=c}else h(!1)}function mw(c,h){const p=new di,_=new AbortController,b=setTimeout(()=>{_.abort(),cn(p,"TestPingServer: timeout",!1,h)},1e4);fetch(c,{signal:_.signal}).then(P=>{clearTimeout(b),P.ok?cn(p,"TestPingServer: ok",!0,h):cn(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(b),cn(p,"TestPingServer: error",!1,h)})}function cn(c,h,p,_,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),_(p)}catch{}}function _w(){this.g=new XT}function Rl(c){this.i=c.Sb||null,this.h=c.ab||!1}f(Rl,pf),Rl.prototype.g=function(){return new Xo(this.i,this.h)};function Xo(c,h){Ke.call(this),this.H=c,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}f(Xo,Ke),r=Xo.prototype,r.open=function(c,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=h,this.readyState=1,Ti(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(h.body=c),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ei(this)),this.readyState=0},r.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Ti(this)),this.g&&(this.readyState=3,Ti(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Uf(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function Uf(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}r.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var h=c.value?c.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!c.done}))&&(this.response=this.responseText+=h)}c.done?Ei(this):Ti(this),this.readyState==3&&Uf(this)}},r.Oa=function(c){this.g&&(this.response=this.responseText=c,Ei(this))},r.Na=function(c){this.g&&(this.response=c,Ei(this))},r.ga=function(){this.g&&Ei(this)};function Ei(c){c.readyState=4,c.l=null,c.j=null,c.B=null,Ti(c)}r.setRequestHeader=function(c,h){this.A.append(c,h)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,c.push(p[0]+": "+p[1]),p=h.next();return c.join(`\r
`)};function Ti(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Xo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Bf(c){let h="";return Wo(c,function(p,_){h+=_,h+=":",h+=p,h+=`\r
`}),h}function Cl(c,h,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=Bf(p),typeof c=="string"?p!=null&&fi(p):ge(c,h,p))}function Re(c){Ke.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}f(Re,Ke);var gw=/^https?$/i,yw=["POST","PUT"];r=Re.prototype,r.Fa=function(c){this.H=c},r.ea=function(c,h,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);h=h?h.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Tf.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(c),!0),this.B=!1}catch(P){qf(this,P);return}if(c=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var b in _)p.set(b,_[b]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const P of _.keys())p.set(P,_.get(P));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(P=>P.toLowerCase()=="content-type"),b=o.FormData&&c instanceof o.FormData,!(Array.prototype.indexOf.call(yw,h,void 0)>=0)||_||b||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,L]of p)this.g.setRequestHeader(P,L);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(P){qf(this,P)}};function qf(c,h){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=h,c.o=5,Gf(c),Zo(c)}function Gf(c){c.A||(c.A=!0,Xe(c,"complete"),Xe(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,Xe(this,"complete"),Xe(this,"abort"),Zo(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Zo(this,!0)),Re.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?zf(this):this.Xa())},r.Xa=function(){zf(this)};function zf(c){if(c.h&&typeof i<"u"){if(c.v&&ln(c)==4)setTimeout(c.Ca.bind(c),0);else if(Xe(c,"readystatechange"),ln(c)==4){c.h=!1;try{const P=c.ca();e:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var _;if(_=P===0){let L=String(c.D).match(Df)[1]||null;!L&&o.self&&o.self.location&&(L=o.self.location.protocol.slice(0,-1)),_=!gw.test(L?L.toLowerCase():"")}p=_}if(p)Xe(c,"complete"),Xe(c,"success");else{c.o=6;try{var b=ln(c)>2?c.g.statusText:""}catch{b=""}c.l=b+" ["+c.ca()+"]",Gf(c)}}finally{Zo(c)}}}}function Zo(c,h){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const p=c.g;c.g=null,h||Xe(c,"ready");try{p.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function ln(c){return c.g?c.g.readyState:0}r.ca=function(){try{return ln(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(c){if(this.g){var h=this.g.responseText;return c&&h.indexOf(c)==0&&(h=h.substring(c.length)),JT(h)}};function jf(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Iw(c){const h={};c=(c.g&&ln(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<c.length;_++){if(I(c[_]))continue;var p=rw(c[_]);const b=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const P=h[b]||[];h[b]=P,P.push(p)}WT(h,function(_){return _.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function wi(c,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[c]||h}function Wf(c){this.za=0,this.i=[],this.j=new di,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=wi("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=wi("baseRetryDelayMs",5e3,c),this.Za=wi("retryDelaySeedMs",1e4,c),this.Ta=wi("forwardChannelMaxRetries",2,c),this.va=wi("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new Rf(c&&c.concurrentRequestLimit),this.Ba=new _w,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=Wf.prototype,r.ka=8,r.I=1,r.connect=function(c,h,p,_){Ze(0),this.W=c,this.H=h||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.J=ep(this,null,this.W),ta(this)};function Pl(c){if($f(c),c.I==3){var h=c.V++,p=bt(c.J);if(ge(p,"SID",c.M),ge(p,"RID",h),ge(p,"TYPE","terminate"),vi(c,p),h=new on(c,c.j,h),h.M=2,h.A=Jo(bt(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=h.A,p=!0),p||(h.g=tp(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Yo(h)}Zf(c)}function ea(c){c.g&&(kl(c),c.g.cancel(),c.g=null)}function $f(c){ea(c),c.v&&(o.clearTimeout(c.v),c.v=null),na(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&o.clearTimeout(c.m),c.m=null)}function ta(c){if(!Cf(c.h)&&!c.m){c.m=!0;var h=c.Ea;oe||g(),ne||(oe(),ne=!0),T.add(h,c),c.D=0}}function Ew(c,h){return Pf(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=h.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=hi(u(c.Ea,c,h),Xf(c,c.D)),c.D++,!0)}r.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const b=new on(this,this.j,c);let P=this.o;if(this.U&&(P?(P=rf(P),of(P,this.U)):P=this.U),this.u!==null||this.R||(b.J=P,P=null),this.S)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,h>4096){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Hf(this,b,h),p=bt(this.J),ge(p,"RID",c),ge(p,"CVER",22),this.G&&ge(p,"X-HTTP-Session-Id",this.G),vi(this,p),P&&(this.R?h="headers="+fi(Bf(P))+"&"+h:this.u&&Cl(p,this.u,P)),Sl(this.h,b),this.Ra&&ge(p,"TYPE","init"),this.S?(ge(p,"$req",h),ge(p,"SID","null"),b.U=!0,Tl(b,p,null)):Tl(b,p,h),this.I=2}}else this.I==3&&(c?Kf(this,c):this.i.length==0||Cf(this.h)||Kf(this))};function Kf(c,h){var p;h?p=h.l:p=c.V++;const _=bt(c.J);ge(_,"SID",c.M),ge(_,"RID",p),ge(_,"AID",c.K),vi(c,_),c.u&&c.o&&Cl(_,c.u,c.o),p=new on(c,c.j,p,c.D+1),c.u===null&&(p.J=c.o),h&&(c.i=h.G.concat(c.i)),h=Hf(c,p,1e3),p.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),Sl(c.h,p),Tl(p,_,h)}function vi(c,h){c.H&&Wo(c.H,function(p,_){ge(h,_,p)}),c.l&&Wo({},function(p,_){ge(h,_,p)})}function Hf(c,h,p){p=Math.min(c.i.length,p);const _=c.l?u(c.l.Ka,c.l,c):null;e:{var b=c.i;let H=-1;for(;;){const xe=["count="+p];H==-1?p>0?(H=b[0].g,xe.push("ofs="+H)):H=0:xe.push("ofs="+H);let pe=!0;for(let Le=0;Le<p;Le++){var P=b[Le].g;const Rt=b[Le].map;if(P-=H,P<0)H=Math.max(0,b[Le].g-100),pe=!1;else try{P="req"+P+"_"||"";try{var L=Rt instanceof Map?Rt:Object.entries(Rt);for(const[rr,un]of L){let hn=un;a(un)&&(hn=_l(un)),xe.push(P+rr+"="+encodeURIComponent(hn))}}catch(rr){throw xe.push(P+"type="+encodeURIComponent("_badmap")),rr}}catch{_&&_(Rt)}}if(pe){L=xe.join("&");break e}}L=void 0}return c=c.i.splice(0,p),h.G=c,L}function Qf(c){if(!c.g&&!c.v){c.Y=1;var h=c.Da;oe||g(),ne||(oe(),ne=!0),T.add(h,c),c.A=0}}function Nl(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=hi(u(c.Da,c),Xf(c,c.A)),c.A++,!0)}r.Da=function(){if(this.v=null,Yf(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=hi(u(this.Wa,this),c)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ze(10),ea(this),Yf(this))};function kl(c){c.B!=null&&(o.clearTimeout(c.B),c.B=null)}function Yf(c){c.g=new on(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var h=bt(c.na);ge(h,"RID","rpc"),ge(h,"SID",c.M),ge(h,"AID",c.K),ge(h,"CI",c.F?"0":"1"),!c.F&&c.ia&&ge(h,"TO",c.ia),ge(h,"TYPE","xmlhttp"),vi(c,h),c.u&&c.o&&Cl(h,c.u,c.o),c.O&&(c.g.H=c.O);var p=c.g;c=c.ba,p.M=1,p.A=Jo(bt(h)),p.u=null,p.R=!0,Af(p,c)}r.Va=function(){this.C!=null&&(this.C=null,ea(this),Nl(this),Ze(19))};function na(c){c.C!=null&&(o.clearTimeout(c.C),c.C=null)}function Jf(c,h){var p=null;if(c.g==h){na(c),kl(c),c.g=null;var _=2}else if(Al(c.h,h))p=h.G,Nf(c.h,h),_=1;else return;if(c.I!=0){if(h.o)if(_==1){p=h.u?h.u.length:0,h=Date.now()-h.F;var b=c.D;_=Ho(),Xe(_,new If(_,p)),ta(c)}else Qf(c);else if(b=h.m,b==3||b==0&&h.X>0||!(_==1&&Ew(c,h)||_==2&&Nl(c)))switch(p&&p.length>0&&(h=c.h,h.i=h.i.concat(p)),b){case 1:nr(c,5);break;case 4:nr(c,10);break;case 3:nr(c,6);break;default:nr(c,2)}}}function Xf(c,h){let p=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(p*=2),p*h}function nr(c,h){if(c.j.info("Error code "+h),h==2){var p=u(c.bb,c),_=c.Ua;const b=!_;_=new an(_||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||mi(_,"https"),Jo(_),b?pw(_.toString(),p):mw(_.toString(),p)}else Ze(2);c.I=0,c.l&&c.l.pa(h),Zf(c),$f(c)}r.bb=function(c){c?(this.j.info("Successfully pinged google.com"),Ze(2)):(this.j.info("Failed to ping google.com"),Ze(1))};function Zf(c){if(c.I=0,c.ja=[],c.l){const h=kf(c.h);(h.length!=0||c.i.length!=0)&&(S(c.ja,h),S(c.ja,c.i),c.h.i.length=0,y(c.i),c.i.length=0),c.l.oa()}}function ep(c,h,p){var _=p instanceof an?bt(p):new an(p);if(_.g!="")h&&(_.g=h+"."+_.g),_i(_,_.u);else{var b=o.location;_=b.protocol,h=h?h+"."+b.hostname:b.hostname,b=+b.port;const P=new an(null);_&&mi(P,_),h&&(P.g=h),b&&_i(P,b),p&&(P.h=p),_=P}return p=c.G,h=c.wa,p&&h&&ge(_,p,h),ge(_,"VER",c.ka),vi(c,_),_}function tp(c,h,p){if(h&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=c.Aa&&!c.ma?new Re(new Rl({ab:p})):new Re(c.ma),h.Fa(c.L),h}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function np(){}r=np.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function ra(){}ra.prototype.g=function(c,h){return new ut(c,h)};function ut(c,h){Ke.call(this),this.g=new Wf(h),this.l=c,this.h=h&&h.messageUrlParams||null,c=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(c?c["X-WebChannel-Content-Type"]=h.messageContentType:c={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(c?c["X-WebChannel-Client-Profile"]=h.sa:c={"X-WebChannel-Client-Profile":h.sa}),this.g.U=c,(c=h&&h.Qb)&&!I(c)&&(this.g.u=c),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!I(h)&&(this.g.G=h,c=this.h,c!==null&&h in c&&(c=this.h,h in c&&delete c[h])),this.j=new jr(this)}f(ut,Ke),ut.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},ut.prototype.close=function(){Pl(this.g)},ut.prototype.o=function(c){var h=this.g;if(typeof c=="string"){var p={};p.__data__=c,c=p}else this.v&&(p={},p.__data__=_l(c),c=p);h.i.push(new ow(h.Ya++,c)),h.I==3&&ta(h)},ut.prototype.N=function(){this.g.l=null,delete this.j,Pl(this.g),delete this.g,ut.Z.N.call(this)};function rp(c){gl.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var h=c.__sm__;if(h){e:{for(const p in h){c=p;break e}c=void 0}(this.i=c)&&(c=this.i,h=h!==null&&c in h?h[c]:void 0),this.data=h}else this.data=c}f(rp,gl);function sp(){yl.call(this),this.status=1}f(sp,yl);function jr(c){this.g=c}f(jr,np),jr.prototype.ra=function(){Xe(this.g,"a")},jr.prototype.qa=function(c){Xe(this.g,new rp(c))},jr.prototype.pa=function(c){Xe(this.g,new sp)},jr.prototype.oa=function(){Xe(this.g,"b")},ra.prototype.createWebChannel=ra.prototype.g,ut.prototype.send=ut.prototype.o,ut.prototype.open=ut.prototype.m,ut.prototype.close=ut.prototype.close,ug=function(){return new ra},lg=function(){return Ho()},cg=Zn,ou={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Qo.NO_ERROR=0,Qo.TIMEOUT=8,Qo.HTTP_ERROR=6,_a=Qo,Ef.COMPLETE="complete",ag=Ef,mf.EventType=li,li.OPEN="a",li.CLOSE="b",li.ERROR="c",li.MESSAGE="d",Ke.prototype.listen=Ke.prototype.J,xi=mf,Re.prototype.listenOnce=Re.prototype.K,Re.prototype.getLastError=Re.prototype.Ha,Re.prototype.getLastErrorCode=Re.prototype.ya,Re.prototype.getStatus=Re.prototype.ca,Re.prototype.getResponseJson=Re.prototype.La,Re.prototype.getResponseText=Re.prototype.la,Re.prototype.send=Re.prototype.ea,Re.prototype.setWithCredentials=Re.prototype.Fa,og=Re}).apply(typeof ia<"u"?ia:typeof self<"u"?self:typeof window<"u"?window:{});const gp="@firebase/firestore",yp="4.9.2";/**
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
 */class Be{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Be.UNAUTHENTICATED=new Be(null),Be.GOOGLE_CREDENTIALS=new Be("google-credentials-uid"),Be.FIRST_PARTY=new Be("first-party-uid"),Be.MOCK_USER=new Be("mock-user");/**
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
 */const Dn=new Ec("@firebase/firestore");function Xr(){return Dn.logLevel}function rA(r){Dn.setLogLevel(r)}function x(r,...e){if(Dn.logLevel<=ee.DEBUG){const t=e.map(ah);Dn.debug(`Firestore (${Ws}): ${r}`,...t)}}function Pe(r,...e){if(Dn.logLevel<=ee.ERROR){const t=e.map(ah);Dn.error(`Firestore (${Ws}): ${r}`,...t)}}function dt(r,...e){if(Dn.logLevel<=ee.WARN){const t=e.map(ah);Dn.warn(`Firestore (${Ws}): ${r}`,...t)}}function ah(r){if(typeof r=="string")return r;try{/**
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
*/return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
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
 */function U(r,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,hg(r,n,t)}function hg(r,e,t){let n=`FIRESTORE (${Ws}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw Pe(n),new Error(n)}function q(r,e,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,r||hg(e,s,n)}function sA(r,e){r||U(57014,e)}function M(r,e){return r}/**
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
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends en{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class dg{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class fg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Be.UNAUTHENTICATED)))}shutdown(){}}class iA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class oA{constructor(e){this.t=e,this.currentUser=Be.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){q(this.o===void 0,42304);let n=this.i;const s=l=>this.i!==n?(n=this.i,t(l)):Promise.resolve();let i=new je;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new je,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},a=l=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>a(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new je)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((n=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(q(typeof n.accessToken=="string",31837,{l:n}),new dg(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return q(e===null||typeof e=="string",2055,{h:e}),new Be(e)}}class aA{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=Be.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class cA{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new aA(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Be.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class au{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class lA{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,yt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){q(this.o===void 0,3512);const n=i=>{i.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,x("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>n(i)))};const s=i=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new au(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(q(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new au(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}class uA{getToken(){return Promise.resolve(new au(""))}invalidateToken(){}start(e,t){}shutdown(){}}/**
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
 */function hA(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
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
 */class Tc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=hA(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<t&&(n+=e.charAt(s[i]%62))}return n}}function j(r,e){return r<e?-1:r>e?1:0}function cu(r,e){const t=Math.min(r.length,e.length);for(let n=0;n<t;n++){const s=r.charAt(n),i=e.charAt(n);if(s!==i)return Fl(s)===Fl(i)?j(s,i):Fl(s)?1:-1}return j(r.length,e.length)}const dA=55296,fA=57343;function Fl(r){const e=r.charCodeAt(0);return e>=dA&&e<=fA}function ms(r,e,t){return r.length===e.length&&r.every(((n,s)=>t(n,e[s])))}function pg(r){return r+"\0"}/**
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
 */const lu="__name__";class Ct{constructor(e,t,n){t===void 0?t=0:t>e.length&&U(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&U(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return Ct.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ct?e.forEach((n=>{t.push(n)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const i=Ct.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return j(e.length,t.length)}static compareSegments(e,t){const n=Ct.isNumericId(e),s=Ct.isNumericId(t);return n&&!s?-1:!n&&s?1:n&&s?Ct.extractNumericId(e).compare(Ct.extractNumericId(t)):cu(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Rn.fromString(e.substring(4,e.length-2))}}class J extends Ct{construct(e,t,n){return new J(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new D(R.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((s=>s.length>0)))}return new J(t)}static emptyPath(){return new J([])}}const pA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ie extends Ct{construct(e,t,n){return new Ie(e,t,n)}static isValidIdentifier(e){return pA.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ie.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===lu}static keyField(){return new Ie([lu])}static fromServerFormat(e){const t=[];let n="",s=0;const i=()=>{if(n.length===0)throw new D(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new D(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new D(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(n+=a,s++):(i(),s++)}if(i(),o)throw new D(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ie(t)}static emptyPath(){return new Ie([])}}/**
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
 */function ch(r,e,t){if(!t)throw new D(R.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function mg(r,e,t,n){if(e===!0&&n===!0)throw new D(R.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Ip(r){if(!O.isDocumentKey(r))throw new D(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Ep(r){if(O.isDocumentKey(r))throw new D(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function _g(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function wc(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(n){return n.constructor?n.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":U(12329,{type:typeof r})}function Z(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new D(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=wc(r);throw new D(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}function gg(r,e){if(e<=0)throw new D(R.INVALID_ARGUMENT,`Function ${r}() requires a positive number, but it was: ${e}.`)}/**
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
 */function De(r,e){const t={typeString:r};return e&&(t.value=e),t}function Or(r,e){if(!_g(r))throw new D(R.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const s=e[n].typeString,i="value"in e[n]?{value:e[n].value}:void 0;if(!(n in r)){t=`JSON missing required field: '${n}'`;break}const o=r[n];if(s&&typeof o!==s){t=`JSON field '${n}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${n}' field to equal '${i.value}'`;break}}if(t)throw new D(R.INVALID_ARGUMENT,t);return!0}/**
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
 */const Tp=-62135596800,wp=1e6;class ce{static now(){return ce.fromMillis(Date.now())}static fromDate(e){return ce.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*wp);return new ce(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new D(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new D(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Tp)throw new D(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/wp}_compareTo(e){return this.seconds===e.seconds?j(this.nanoseconds,e.nanoseconds):j(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ce._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Or(e,ce._jsonSchema))return new ce(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Tp;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ce._jsonSchemaVersion="firestore/timestamp/1.0",ce._jsonSchema={type:De("string",ce._jsonSchemaVersion),seconds:De("number"),nanoseconds:De("number")};/**
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
 */class z{static fromTimestamp(e){return new z(e)}static min(){return new z(new ce(0,0))}static max(){return new z(new ce(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const _s=-1;class gs{constructor(e,t,n,s){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=s}}function uu(r){return r.fields.find((e=>e.kind===2))}function or(r){return r.fields.filter((e=>e.kind!==2))}function mA(r,e){let t=j(r.collectionGroup,e.collectionGroup);if(t!==0)return t;for(let n=0;n<Math.min(r.fields.length,e.fields.length);++n)if(t=_A(r.fields[n],e.fields[n]),t!==0)return t;return j(r.fields.length,e.fields.length)}gs.UNKNOWN_ID=-1;class mr{constructor(e,t){this.fieldPath=e,this.kind=t}}function _A(r,e){const t=Ie.comparator(r.fieldPath,e.fieldPath);return t!==0?t:j(r.kind,e.kind)}class ys{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new ys(0,ft.min())}}function yg(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=z.fromTimestamp(n===1e9?new ce(t+1,0):new ce(t,n));return new ft(s,O.empty(),e)}function Ig(r){return new ft(r.readTime,r.key,_s)}class ft{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new ft(z.min(),O.empty(),_s)}static max(){return new ft(z.max(),O.empty(),_s)}}function lh(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=O.comparator(r.documentKey,e.documentKey),t!==0?t:j(r.largestBatchId,e.largestBatchId))}/**
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
 */const Eg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Tg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function zn(r){if(r.code!==R.FAILED_PRECONDITION||r.message!==Eg)throw r;x("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&U(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new A(((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof A?t:A.resolve(t)}catch(t){return A.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):A.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):A.reject(t)}static resolve(e){return new A(((t,n)=>{t(e)}))}static reject(e){return new A(((t,n)=>{n(e)}))}static waitFor(e){return new A(((t,n)=>{let s=0,i=0,o=!1;e.forEach((a=>{++s,a.next((()=>{++i,o&&i===s&&t()}),(l=>n(l)))})),o=!0,i===s&&t()}))}static or(e){let t=A.resolve(!1);for(const n of e)t=t.next((s=>s?A.resolve(s):n()));return t}static forEach(e,t){const n=[];return e.forEach(((s,i)=>{n.push(t.call(this,s,i))})),this.waitFor(n)}static mapArray(e,t){return new A(((n,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const u=l;t(e[u]).next((d=>{o[u]=d,++a,a===i&&n(o)}),(d=>s(d)))}}))}static doWhile(e,t){return new A(((n,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):n()};i()}))}}/**
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
 */const ht="SimpleDb";class vc{static open(e,t,n,s){try{return new vc(t,e.transaction(s,n))}catch(i){throw new Fi(t,i)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new je,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new Fi(e,t.error)):this.S.resolve()},this.transaction.onerror=n=>{const s=uh(n.target.error);this.S.reject(new Fi(e,s))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(x(ht,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new yA(t)}}class Vt{static delete(e){return x(ht,"Removing database:",e),lr(G_().indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!X_())return!1;if(Vt.F())return!0;const e=Ve(),t=Vt.M(e),n=0<t&&t<10,s=wg(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static F(){return typeof process<"u"&&process.__PRIVATE_env?.__PRIVATE_USE_MOCK_PERSISTENCE==="YES"}static O(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(e,t,n){this.name=e,this.version=t,this.N=n,this.B=null,Vt.M(Ve())===12.2&&Pe("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async L(e){return this.db||(x(ht,"Opening database:",this.name),this.db=await new Promise(((t,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{n(new Fi(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?n(new D(R.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?n(new D(R.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):n(new Fi(e,o))},s.onupgradeneeded=i=>{x(ht,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.N.k(o,s.transaction,i.oldVersion,this.version).next((()=>{x(ht,"Database upgrade to version "+this.version+" complete")}))}}))),this.q&&(this.db.onversionchange=t=>this.q(t)),this.db}$(e){this.q=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.L(e);const a=vc.open(this.db,e,i?"readonly":"readwrite",n),l=s(a).next((u=>(a.C(),u))).catch((u=>(a.abort(u),A.reject(u)))).toPromise();return l.catch((()=>{})),await a.D,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&o<3;if(x(ht,"Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function wg(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class gA{constructor(e){this.U=e,this.K=!1,this.W=null}get isDone(){return this.K}get G(){return this.W}set cursor(e){this.U=e}done(){this.K=!0}j(e){this.W=e}delete(){return lr(this.U.delete())}}class Fi extends D{constructor(e,t){super(R.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function jn(r){return r.name==="IndexedDbTransactionError"}class yA{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(x(ht,"PUT",this.store.name,e,t),n=this.store.put(t,e)):(x(ht,"PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),lr(n)}add(e){return x(ht,"ADD",this.store.name,e,e),lr(this.store.add(e))}get(e){return lr(this.store.get(e)).next((t=>(t===void 0&&(t=null),x(ht,"GET",this.store.name,e,t),t)))}delete(e){return x(ht,"DELETE",this.store.name,e),lr(this.store.delete(e))}count(){return x(ht,"COUNT",this.store.name),lr(this.store.count())}J(e,t){const n=this.options(e,t),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(n.range);return new A(((o,a)=>{i.onerror=l=>{a(l.target.error)},i.onsuccess=l=>{o(l.target.result)}}))}{const i=this.cursor(n),o=[];return this.H(i,((a,l)=>{o.push(l)})).next((()=>o))}}Y(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new A(((s,i)=>{n.onerror=o=>{i(o.target.error)},n.onsuccess=o=>{s(o.target.result)}}))}Z(e,t){x(ht,"DELETE ALL",this.store.name);const n=this.options(e,t);n.X=!1;const s=this.cursor(n);return this.H(s,((i,o,a)=>a.delete()))}ee(e,t){let n;t?n=e:(n={},t=e);const s=this.cursor(n);return this.H(s,t)}te(e){const t=this.cursor({});return new A(((n,s)=>{t.onerror=i=>{const o=uh(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next((a=>{a?o.continue():n()})):n()}}))}H(e,t){const n=[];return new A(((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const l=new gA(a),u=t(a.primaryKey,a.value,l);if(u instanceof A){const d=u.catch((f=>(l.done(),A.reject(f))));n.push(d)}l.isDone?s():l.G===null?a.continue():a.continue(l.G)}})).next((()=>A.waitFor(n)))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.X?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function lr(r){return new A(((e,t)=>{r.onsuccess=n=>{const s=n.target.result;e(s)},r.onerror=n=>{const s=uh(n.target.error);t(s)}}))}let vp=!1;function uh(r){const e=Vt.M(Ve());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const n=new D("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return vp||(vp=!0,setTimeout((()=>{throw n}),0)),n}}return r}const Ui="IndexBackfiller";class IA{constructor(e,t){this.asyncQueue=e,this.ne=t,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}re(e){x(Ui,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{const t=await this.ne.ie();x(Ui,`Documents written: ${t}`)}catch(t){jn(t)?x(Ui,"Ignoring IndexedDB error during index backfill: ",t):await zn(t)}await this.re(6e4)}))}}class EA{constructor(e,t){this.localStore=e,this.persistence=t}async ie(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.se(t,e)))}se(e,t){const n=new Set;let s=t,i=!0;return A.doWhile((()=>i===!0&&s>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((o=>{if(o!==null&&!n.has(o))return x(Ui,`Processing collection: ${o}`),this.oe(e,o,s).next((a=>{s-=a,n.add(o)}));i=!1})))).next((()=>t-s))}oe(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((s=>this.localStore.localDocuments.getNextDocuments(e,t,s,n).next((i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next((()=>this._e(s,i))).next((a=>(x(Ui,`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a)))).next((()=>o.size))}))))}_e(e,t){let n=e;return t.changes.forEach(((s,i)=>{const o=Ig(i);lh(o,n)>0&&(n=o)})),new ft(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class rt{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ae(n),this.ue=n=>t.writeSequenceNumber(n))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}rt.ce=-1;/**
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
 */const Cn=-1;function vo(r){return r==null}function to(r){return r===0&&1/r==-1/0}function vg(r){return typeof r=="number"&&Number.isInteger(r)&&!to(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const La="";function Ye(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Ap(e)),e=TA(r.get(t),e);return Ap(e)}function TA(r,e){let t=e;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":t+="";break;case La:t+="";break;default:t+=i}}return t}function Ap(r){return r+La+""}function kt(r){const e=r.length;if(q(e>=2,64408,{path:r}),e===2)return q(r.charAt(0)===La&&r.charAt(1)==="",56145,{path:r}),J.emptyPath();const t=e-2,n=[];let s="";for(let i=0;i<e;){const o=r.indexOf(La,i);switch((o<0||o>t)&&U(50515,{path:r}),r.charAt(o+1)){case"":const a=r.substring(i,o);let l;s.length===0?l=a:(s+=a,l=s,s=""),n.push(l);break;case"":s+=r.substring(i,o),s+="\0";break;case"":s+=r.substring(i,o+1);break;default:U(61167,{path:r})}i=o+2}return new J(n)}/**
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
 */const ar="remoteDocuments",Ao="owner",Wr="owner",no="mutationQueues",wA="userId",gt="mutations",Sp="batchId",fr="userMutationsIndex",bp=["userId","batchId"];/**
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
 */function ga(r,e){return[r,Ye(e)]}function Ag(r,e,t){return[r,Ye(e),t]}const vA={},Is="documentMutations",Fa="remoteDocumentsV14",AA=["prefixPath","collectionGroup","readTime","documentId"],ya="documentKeyIndex",SA=["prefixPath","collectionGroup","documentId"],Sg="collectionGroupIndex",bA=["collectionGroup","readTime","prefixPath","documentId"],ro="remoteDocumentGlobal",hu="remoteDocumentGlobalKey",Es="targets",bg="queryTargetsIndex",RA=["canonicalId","targetId"],Ts="targetDocuments",CA=["targetId","path"],hh="documentTargetsIndex",PA=["path","targetId"],Ua="targetGlobalKey",_r="targetGlobal",so="collectionParents",NA=["collectionId","parent"],ws="clientMetadata",kA="clientId",Ac="bundles",DA="bundleId",Sc="namedQueries",xA="name",dh="indexConfiguration",VA="indexId",du="collectionGroupIndex",OA="collectionGroup",Bi="indexState",MA=["indexId","uid"],Rg="sequenceNumberIndex",LA=["uid","sequenceNumber"],qi="indexEntries",FA=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Cg="documentKeyIndex",UA=["indexId","uid","orderedDocumentKey"],bc="documentOverlays",BA=["userId","collectionPath","documentId"],fu="collectionPathOverlayIndex",qA=["userId","collectionPath","largestBatchId"],Pg="collectionGroupOverlayIndex",GA=["userId","collectionGroup","largestBatchId"],fh="globals",zA="name",Ng=[no,gt,Is,ar,Es,Ao,_r,Ts,ws,ro,so,Ac,Sc],jA=[...Ng,bc],kg=[no,gt,Is,Fa,Es,Ao,_r,Ts,ws,ro,so,Ac,Sc,bc],Dg=kg,ph=[...Dg,dh,Bi,qi],WA=ph,xg=[...ph,fh],$A=xg;/**
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
 */class pu extends Tg{constructor(e,t){super(),this.le=e,this.currentSequenceNumber=t}}function Me(r,e){const t=M(r);return Vt.O(t.le,e)}/**
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
 */function Rp(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Wn(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Vg(r,e){const t=[];for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t.push(e(r[n],n,r));return t}function Og(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */let Se=class mu{constructor(e,t){this.comparator=e,this.root=t||Pn.EMPTY}insert(e,t){return new mu(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Pn.BLACK,null,null))}remove(e){return new mu(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new oa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new oa(this.root,e,this.comparator,!1)}getReverseIterator(){return new oa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new oa(this.root,e,this.comparator,!0)}},oa=class{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Pn=class Bt{constructor(e,t,n,s,i){this.key=e,this.value=t,this.color=n??Bt.RED,this.left=s??Bt.EMPTY,this.right=i??Bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,i){return new Bt(e??this.key,t??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const i=n(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,n),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Bt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Bt.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw U(43730,{key:this.key,value:this.value});if(this.right.isRed())throw U(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw U(27949);return e+(this.isRed()?0:1)}};Pn.EMPTY=null,Pn.RED=!0,Pn.BLACK=!1;Pn.EMPTY=new class{constructor(){this.size=0}get key(){throw U(57766)}get value(){throw U(16141)}get color(){throw U(16727)}get left(){throw U(29726)}get right(){throw U(36894)}copy(e,t,n,s,i){return this}insert(e,t,n){return new Pn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class he{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Cp(this.data.getIterator())}getIteratorFrom(e){return new Cp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((n=>{t=t.add(n)})),t}isEqual(e){if(!(e instanceof he)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new he(this.comparator);return t.data=e,t}}class Cp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function $r(r){return r.hasNext()?r.getNext():void 0}/**
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
 */class st{constructor(e){this.fields=e,e.sort(Ie.comparator)}static empty(){return new st([])}unionWith(e){let t=new he(Ie.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new st(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ms(this.fields,e.fields,((t,n)=>t.isEqual(n)))}}/**
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
 */class Mg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function KA(){return typeof atob<"u"}/**
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
 */class be{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Mg("Invalid base64 string: "+i):i}})(e);return new be(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new be(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return j(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}be.EMPTY_BYTE_STRING=new be("");const HA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ht(r){if(q(!!r,39018),typeof r=="string"){let e=0;const t=HA.exec(r);if(q(!!t,46558,{timestamp:r}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:Ee(r.seconds),nanos:Ee(r.nanos)}}function Ee(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Qt(r){return typeof r=="string"?be.fromBase64String(r):be.fromUint8Array(r)}/**
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
 */const Lg="server_timestamp",Fg="__type__",Ug="__previous_value__",Bg="__local_write_time__";function Rc(r){return(r?.mapValue?.fields||{})[Fg]?.stringValue===Lg}function Cc(r){const e=r.mapValue.fields[Ug];return Rc(e)?Cc(e):e}function io(r){const e=Ht(r.mapValue.fields[Bg].timestampValue);return new ce(e.seconds,e.nanos)}/**
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
 */class QA{constructor(e,t,n,s,i,o,a,l,u,d){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=d}}const oo="(default)";class xn{constructor(e,t){this.projectId=e,this.database=t||oo}static empty(){return new xn("","")}get isDefaultDatabase(){return this.database===oo}isEqual(e){return e instanceof xn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const mh="__type__",qg="__max__",wn={mapValue:{fields:{__type__:{stringValue:qg}}}},_h="__vector__",vs="value",Ia={nullValue:"NULL_VALUE"};function Vn(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Rc(r)?4:Gg(r)?9007199254740991:Pc(r)?10:11:U(28295,{value:r})}function Ft(r,e){if(r===e)return!0;const t=Vn(r);if(t!==Vn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return io(r).isEqual(io(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Ht(s.timestampValue),a=Ht(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(s,i){return Qt(s.bytesValue).isEqual(Qt(i.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(s,i){return Ee(s.geoPointValue.latitude)===Ee(i.geoPointValue.latitude)&&Ee(s.geoPointValue.longitude)===Ee(i.geoPointValue.longitude)})(r,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Ee(s.integerValue)===Ee(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ee(s.doubleValue),a=Ee(i.doubleValue);return o===a?to(o)===to(a):isNaN(o)&&isNaN(a)}return!1})(r,e);case 9:return ms(r.arrayValue.values||[],e.arrayValue.values||[],Ft);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Rp(o)!==Rp(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Ft(o[l],a[l])))return!1;return!0})(r,e);default:return U(52216,{left:r})}}function ao(r,e){return(r.values||[]).find((t=>Ft(t,e)))!==void 0}function On(r,e){if(r===e)return 0;const t=Vn(r),n=Vn(e);if(t!==n)return j(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return j(r.booleanValue,e.booleanValue);case 2:return(function(i,o){const a=Ee(i.integerValue||i.doubleValue),l=Ee(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1})(r,e);case 3:return Pp(r.timestampValue,e.timestampValue);case 4:return Pp(io(r),io(e));case 5:return cu(r.stringValue,e.stringValue);case 6:return(function(i,o){const a=Qt(i),l=Qt(o);return a.compareTo(l)})(r.bytesValue,e.bytesValue);case 7:return(function(i,o){const a=i.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const d=j(a[u],l[u]);if(d!==0)return d}return j(a.length,l.length)})(r.referenceValue,e.referenceValue);case 8:return(function(i,o){const a=j(Ee(i.latitude),Ee(o.latitude));return a!==0?a:j(Ee(i.longitude),Ee(o.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return Np(r.arrayValue,e.arrayValue);case 10:return(function(i,o){const a=i.fields||{},l=o.fields||{},u=a[vs]?.arrayValue,d=l[vs]?.arrayValue,f=j(u?.values?.length||0,d?.values?.length||0);return f!==0?f:Np(u,d)})(r.mapValue,e.mapValue);case 11:return(function(i,o){if(i===wn.mapValue&&o===wn.mapValue)return 0;if(i===wn.mapValue)return 1;if(o===wn.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),u=o.fields||{},d=Object.keys(u);l.sort(),d.sort();for(let f=0;f<l.length&&f<d.length;++f){const m=cu(l[f],d[f]);if(m!==0)return m;const y=On(a[l[f]],u[d[f]]);if(y!==0)return y}return j(l.length,d.length)})(r.mapValue,e.mapValue);default:throw U(23264,{he:t})}}function Pp(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return j(r,e);const t=Ht(r),n=Ht(e),s=j(t.seconds,n.seconds);return s!==0?s:j(t.nanos,n.nanos)}function Np(r,e){const t=r.values||[],n=e.values||[];for(let s=0;s<t.length&&s<n.length;++s){const i=On(t[s],n[s]);if(i)return i}return j(t.length,n.length)}function As(r){return _u(r)}function _u(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const n=Ht(t);return`time(${n.seconds},${n.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return Qt(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return O.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let n="[",s=!0;for(const i of t.values||[])s?s=!1:n+=",",n+=_u(i);return n+"]"})(r.arrayValue):"mapValue"in r?(function(t){const n=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of n)i?i=!1:s+=",",s+=`${o}:${_u(t.fields[o])}`;return s+"}"})(r.mapValue):U(61005,{value:r})}function Ea(r){switch(Vn(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Cc(r);return e?16+Ea(e):16;case 5:return 2*r.stringValue.length;case 6:return Qt(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((s,i)=>s+Ea(i)),0)})(r.arrayValue);case 10:case 11:return(function(n){let s=0;return Wn(n.fields,((i,o)=>{s+=i.length+Ea(o)})),s})(r.mapValue);default:throw U(13486,{value:r})}}function Er(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function gu(r){return!!r&&"integerValue"in r}function co(r){return!!r&&"arrayValue"in r}function kp(r){return!!r&&"nullValue"in r}function Dp(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Ta(r){return!!r&&"mapValue"in r}function Pc(r){return(r?.mapValue?.fields||{})[mh]?.stringValue===_h}function Gi(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return Wn(r.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Gi(n))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Gi(r.arrayValue.values[t]);return e}return{...r}}function Gg(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===qg}const zg={mapValue:{fields:{[mh]:{stringValue:_h},[vs]:{arrayValue:{}}}}};function YA(r){return"nullValue"in r?Ia:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?Er(xn.empty(),O.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?Pc(r)?zg:{mapValue:{}}:U(35942,{value:r})}function JA(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?Er(xn.empty(),O.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?zg:"mapValue"in r?Pc(r)?{mapValue:{}}:wn:U(61959,{value:r})}function xp(r,e){const t=On(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function Vp(r,e){const t=On(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
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
 */class $e{constructor(e){this.value=e}static empty(){return new $e({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Ta(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Gi(t)}setAll(e){let t=Ie.emptyPath(),n={},s=[];e.forEach(((o,a)=>{if(!t.isImmediateParentOf(a)){const l=this.getFieldsMap(t);this.applyChanges(l,n,s),n={},s=[],t=a.popLast()}o?n[a.lastSegment()]=Gi(o):s.push(a.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,s)}delete(e){const t=this.field(e.popLast());Ta(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ft(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];Ta(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){Wn(t,((s,i)=>e[s]=i));for(const s of n)delete e[s]}clone(){return new $e(Gi(this.value))}}function jg(r){const e=[];return Wn(r.fields,((t,n)=>{const s=new Ie([t]);if(Ta(n)){const i=jg(n.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new st(e)}/**
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
 */class ye{constructor(e,t,n,s,i,o,a){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ye(e,0,z.min(),z.min(),z.min(),$e.empty(),0)}static newFoundDocument(e,t,n,s){return new ye(e,1,t,z.min(),n,s,0)}static newNoDocument(e,t){return new ye(e,2,t,z.min(),z.min(),$e.empty(),0)}static newUnknownDocument(e,t){return new ye(e,3,t,z.min(),z.min(),$e.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=$e.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=$e.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ye&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ye(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Mn{constructor(e,t){this.position=e,this.inclusive=t}}function Op(r,e,t){let n=0;for(let s=0;s<r.position.length;s++){const i=e[s],o=r.position[s];if(i.field.isKeyField()?n=O.comparator(O.fromName(o.referenceValue),t.key):n=On(o,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function Mp(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!Ft(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class lo{constructor(e,t="asc"){this.field=e,this.dir=t}}function XA(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class Wg{}class te extends Wg{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new ZA(e,t,n):t==="array-contains"?new nS(e,n):t==="in"?new Jg(e,n):t==="not-in"?new rS(e,n):t==="array-contains-any"?new sS(e,n):new te(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new eS(e,n):new tS(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(On(t,this.value)):t!==null&&Vn(this.value)===Vn(t)&&this.matchesComparison(On(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class le extends Wg{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new le(e,t)}matches(e){return Ss(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Ss(r){return r.op==="and"}function yu(r){return r.op==="or"}function gh(r){return $g(r)&&Ss(r)}function $g(r){for(const e of r.filters)if(e instanceof le)return!1;return!0}function Iu(r){if(r instanceof te)return r.field.canonicalString()+r.op.toString()+As(r.value);if(gh(r))return r.filters.map((e=>Iu(e))).join(",");{const e=r.filters.map((t=>Iu(t))).join(",");return`${r.op}(${e})`}}function Kg(r,e){return r instanceof te?(function(n,s){return s instanceof te&&n.op===s.op&&n.field.isEqual(s.field)&&Ft(n.value,s.value)})(r,e):r instanceof le?(function(n,s){return s instanceof le&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce(((i,o,a)=>i&&Kg(o,s.filters[a])),!0):!1})(r,e):void U(19439)}function Hg(r,e){const t=r.filters.concat(e);return le.create(t,r.op)}function Qg(r){return r instanceof te?(function(t){return`${t.field.canonicalString()} ${t.op} ${As(t.value)}`})(r):r instanceof le?(function(t){return t.op.toString()+" {"+t.getFilters().map(Qg).join(" ,")+"}"})(r):"Filter"}class ZA extends te{constructor(e,t,n){super(e,t,n),this.key=O.fromName(n.referenceValue)}matches(e){const t=O.comparator(e.key,this.key);return this.matchesComparison(t)}}class eS extends te{constructor(e,t){super(e,"in",t),this.keys=Yg("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class tS extends te{constructor(e,t){super(e,"not-in",t),this.keys=Yg("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Yg(r,e){return(e.arrayValue?.values||[]).map((t=>O.fromName(t.referenceValue)))}class nS extends te{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return co(t)&&ao(t.arrayValue,this.value)}}class Jg extends te{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ao(this.value.arrayValue,t)}}class rS extends te{constructor(e,t){super(e,"not-in",t)}matches(e){if(ao(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ao(this.value.arrayValue,t)}}class sS extends te{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!co(t)||!t.arrayValue.values)&&t.arrayValue.values.some((n=>ao(this.value.arrayValue,n)))}}/**
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
 */class iS{constructor(e,t=null,n=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.Te=null}}function Eu(r,e=null,t=[],n=[],s=null,i=null,o=null){return new iS(r,e,t,n,s,i,o)}function Tr(r){const e=M(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((n=>Iu(n))).join(","),t+="|ob:",t+=e.orderBy.map((n=>(function(i){return i.field.canonicalString()+i.dir})(n))).join(","),vo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((n=>As(n))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((n=>As(n))).join(",")),e.Te=t}return e.Te}function So(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!XA(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Kg(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Mp(r.startAt,e.startAt)&&Mp(r.endAt,e.endAt)}function Ba(r){return O.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function qa(r,e){return r.filters.filter((t=>t instanceof te&&t.field.isEqual(e)))}function Lp(r,e,t){let n=Ia,s=!0;for(const i of qa(r,e)){let o=Ia,a=!0;switch(i.op){case"<":case"<=":o=YA(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,a=!1;break;case"!=":case"not-in":o=Ia}xp({value:n,inclusive:s},{value:o,inclusive:a})<0&&(n=o,s=a)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];xp({value:n,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}function Fp(r,e,t){let n=wn,s=!0;for(const i of qa(r,e)){let o=wn,a=!0;switch(i.op){case">=":case">":o=JA(i.value),a=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,a=!1;break;case"!=":case"not-in":o=wn}Vp({value:n,inclusive:s},{value:o,inclusive:a})>0&&(n=o,s=a)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];Vp({value:n,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}/**
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
 */class tn{constructor(e,t=null,n=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Xg(r,e,t,n,s,i,o,a){return new tn(r,e,t,n,s,i,o,a)}function $s(r){return new tn(r)}function Up(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function yh(r){return r.collectionGroup!==null}function is(r){const e=M(r);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new he(Ie.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((u=>{u.isInequality()&&(a=a.add(u.field))}))})),a})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new lo(i,n))})),t.has(Ie.keyField().canonicalString())||e.Ie.push(new lo(Ie.keyField(),n))}return e.Ie}function Je(r){const e=M(r);return e.Ee||(e.Ee=ey(e,is(r))),e.Ee}function Zg(r){const e=M(r);return e.de||(e.de=ey(e,r.explicitOrderBy)),e.de}function ey(r,e){if(r.limitType==="F")return Eu(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new lo(s.field,i)}));const t=r.endAt?new Mn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Mn(r.startAt.position,r.startAt.inclusive):null;return Eu(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function Tu(r,e){const t=r.filters.concat([e]);return new tn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function Ga(r,e,t){return new tn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function bo(r,e){return So(Je(r),Je(e))&&r.limitType===e.limitType}function ty(r){return`${Tr(Je(r))}|lt:${r.limitType}`}function Zr(r){return`Query(target=${(function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map((s=>Qg(s))).join(", ")}]`),vo(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((s=>As(s))).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((s=>As(s))).join(",")),`Target(${n})`})(Je(r))}; limitType=${r.limitType})`}function Ro(r,e){return e.isFoundDocument()&&(function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):O.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)})(r,e)&&(function(n,s){for(const i of is(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(r,e)&&(function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0})(r,e)&&(function(n,s){return!(n.startAt&&!(function(o,a,l){const u=Op(o,a,l);return o.inclusive?u<=0:u<0})(n.startAt,is(n),s)||n.endAt&&!(function(o,a,l){const u=Op(o,a,l);return o.inclusive?u>=0:u>0})(n.endAt,is(n),s))})(r,e)}function ny(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function ry(r){return(e,t)=>{let n=!1;for(const s of is(r)){const i=oS(s,e,t);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function oS(r,e,t){const n=r.field.isKeyField()?O.comparator(e.key,t.key):(function(i,o,a){const l=o.data.field(i),u=a.data.field(i);return l!==null&&u!==null?On(l,u):U(42886)})(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return U(19790,{direction:r.dir})}}/**
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
 */class nn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Wn(this.inner,((t,n)=>{for(const[s,i]of n)e(s,i)}))}isEmpty(){return Og(this.inner)}size(){return this.innerSize}}/**
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
 */const aS=new Se(O.comparator);function it(){return aS}const sy=new Se(O.comparator);function Vi(...r){let e=sy;for(const t of r)e=e.insert(t.key,t);return e}function iy(r){let e=sy;return r.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Dt(){return zi()}function oy(){return zi()}function zi(){return new nn((r=>r.toString()),((r,e)=>r.isEqual(e)))}const cS=new Se(O.comparator),lS=new he(O.comparator);function K(...r){let e=lS;for(const t of r)e=e.add(t);return e}const uS=new he(j);function Ih(){return uS}/**
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
 */function Eh(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:to(e)?"-0":e}}function ay(r){return{integerValue:""+r}}function cy(r,e){return vg(e)?ay(e):Eh(r,e)}/**
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
 */class Nc{constructor(){this._=void 0}}function hS(r,e,t){return r instanceof bs?(function(s,i){const o={fields:{[Fg]:{stringValue:Lg},[Bg]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Rc(i)&&(i=Cc(i)),i&&(o.fields[Ug]=i),{mapValue:o}})(t,e):r instanceof wr?uy(r,e):r instanceof vr?hy(r,e):(function(s,i){const o=ly(s,i),a=Bp(o)+Bp(s.Ae);return gu(o)&&gu(s.Ae)?ay(a):Eh(s.serializer,a)})(r,e)}function dS(r,e,t){return r instanceof wr?uy(r,e):r instanceof vr?hy(r,e):t}function ly(r,e){return r instanceof Rs?(function(n){return gu(n)||(function(i){return!!i&&"doubleValue"in i})(n)})(e)?e:{integerValue:0}:null}class bs extends Nc{}class wr extends Nc{constructor(e){super(),this.elements=e}}function uy(r,e){const t=dy(e);for(const n of r.elements)t.some((s=>Ft(s,n)))||t.push(n);return{arrayValue:{values:t}}}class vr extends Nc{constructor(e){super(),this.elements=e}}function hy(r,e){let t=dy(e);for(const n of r.elements)t=t.filter((s=>!Ft(s,n)));return{arrayValue:{values:t}}}class Rs extends Nc{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Bp(r){return Ee(r.integerValue||r.doubleValue)}function dy(r){return co(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class Co{constructor(e,t){this.field=e,this.transform=t}}function fS(r,e){return r.field.isEqual(e.field)&&(function(n,s){return n instanceof wr&&s instanceof wr||n instanceof vr&&s instanceof vr?ms(n.elements,s.elements,Ft):n instanceof Rs&&s instanceof Rs?Ft(n.Ae,s.Ae):n instanceof bs&&s instanceof bs})(r.transform,e.transform)}class pS{constructor(e,t){this.version=e,this.transformResults=t}}class Te{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Te}static exists(e){return new Te(void 0,e)}static updateTime(e){return new Te(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function wa(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class kc{}function fy(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Hs(r.key,Te.none()):new Ks(r.key,r.data,Te.none());{const t=r.data,n=$e.empty();let s=new he(Ie.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?n.delete(i):n.set(i,o),s=s.add(i)}return new rn(r.key,n,new st(s.toArray()),Te.none())}}function mS(r,e,t){r instanceof Ks?(function(s,i,o){const a=s.value.clone(),l=Gp(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()})(r,e,t):r instanceof rn?(function(s,i,o){if(!wa(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Gp(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(py(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(r,e,t):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function ji(r,e,t,n){return r instanceof Ks?(function(i,o,a,l){if(!wa(i.precondition,o))return a;const u=i.value.clone(),d=zp(i.fieldTransforms,l,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(r,e,t,n):r instanceof rn?(function(i,o,a,l){if(!wa(i.precondition,o))return a;const u=zp(i.fieldTransforms,l,o),d=o.data;return d.setAll(py(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((f=>f.field)))})(r,e,t,n):(function(i,o,a){return wa(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a})(r,e,t)}function _S(r,e){let t=null;for(const n of r.fieldTransforms){const s=e.data.field(n.field),i=ly(n.transform,s||null);i!=null&&(t===null&&(t=$e.empty()),t.set(n.field,i))}return t||null}function qp(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&ms(n,s,((i,o)=>fS(i,o)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Ks extends kc{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class rn extends kc{constructor(e,t,n,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function py(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}})),e}function Gp(r,e,t){const n=new Map;q(r.length===t.length,32656,{Re:t.length,Ve:r.length});for(let s=0;s<t.length;s++){const i=r[s],o=i.transform,a=e.data.field(i.field);n.set(i.field,dS(o,a,t[s]))}return n}function zp(r,e,t){const n=new Map;for(const s of r){const i=s.transform,o=t.data.field(s.field);n.set(s.field,hS(i,o,e))}return n}class Hs extends kc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Th extends kc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class wh{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&mS(i,e,n[s])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=ji(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=ji(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=oy();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(s.key)?null:a;const l=fy(o,a);l!==null&&n.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(z.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),K())}isEqual(e){return this.batchId===e.batchId&&ms(this.mutations,e.mutations,((t,n)=>qp(t,n)))&&ms(this.baseMutations,e.baseMutations,((t,n)=>qp(t,n)))}}class vh{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){q(e.mutations.length===n.length,58842,{me:e.mutations.length,fe:n.length});let s=(function(){return cS})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,n[o].version);return new vh(e,t,n,s)}}/**
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
 */class Ah{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class my{constructor(e,t,n){this.alias=e,this.aggregateType=t,this.fieldPath=n}}/**
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
 */class gS{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ke,re;function _y(r){switch(r){case R.OK:return U(64938);case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0;default:return U(15467,{code:r})}}function gy(r){if(r===void 0)return Pe("GRPC error has no .code"),R.UNKNOWN;switch(r){case ke.OK:return R.OK;case ke.CANCELLED:return R.CANCELLED;case ke.UNKNOWN:return R.UNKNOWN;case ke.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case ke.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case ke.INTERNAL:return R.INTERNAL;case ke.UNAVAILABLE:return R.UNAVAILABLE;case ke.UNAUTHENTICATED:return R.UNAUTHENTICATED;case ke.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case ke.NOT_FOUND:return R.NOT_FOUND;case ke.ALREADY_EXISTS:return R.ALREADY_EXISTS;case ke.PERMISSION_DENIED:return R.PERMISSION_DENIED;case ke.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case ke.ABORTED:return R.ABORTED;case ke.OUT_OF_RANGE:return R.OUT_OF_RANGE;case ke.UNIMPLEMENTED:return R.UNIMPLEMENTED;case ke.DATA_LOSS:return R.DATA_LOSS;default:return U(39323,{code:r})}}(re=ke||(ke={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
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
 */let wu=null;/**
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
 */function yy(){return new TextEncoder}/**
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
 */const yS=new Rn([4294967295,4294967295],0);function jp(r){const e=yy().encode(r),t=new ig;return t.update(e),new Uint8Array(t.digest())}function Wp(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Rn([t,n],0),new Rn([s,i],0)]}class Sh{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Oi(`Invalid padding: ${t}`);if(n<0)throw new Oi(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Oi(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Oi(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Rn.fromNumber(this.ge)}ye(e,t,n){let s=e.add(t.multiply(Rn.fromNumber(n)));return s.compare(yS)===1&&(s=new Rn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=jp(e),[n,s]=Wp(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(n,s,i);if(!this.we(o))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Sh(i,s,t);return n.forEach((a=>o.insert(a))),o}insert(e){if(this.ge===0)return;const t=jp(e),[n,s]=Wp(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(n,s,i);this.Se(o)}}Se(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Oi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Po{constructor(e,t,n,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,No.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Po(z.min(),s,new Se(j),it(),K())}}class No{constructor(e,t,n,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new No(n,t,K(),K(),K())}}/**
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
 */class va{constructor(e,t,n,s){this.be=e,this.removedTargetIds=t,this.key=n,this.De=s}}class Iy{constructor(e,t){this.targetId=e,this.Ce=t}}class Ey{constructor(e,t,n=be.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class $p{constructor(){this.ve=0,this.Fe=Kp(),this.Me=be.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=K(),t=K(),n=K();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:U(38017,{changeType:i})}})),new No(this.Me,this.xe,e,t,n)}qe(){this.Oe=!1,this.Fe=Kp()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,q(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class IS{constructor(e){this.Ge=e,this.ze=new Map,this.je=it(),this.Je=aa(),this.He=aa(),this.Ye=new Se(j)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const n=this.nt(t);switch(e.state){case 0:this.rt(t)&&n.Le(e.resumeToken);break;case 1:n.Ke(),n.Ne||n.qe(),n.Le(e.resumeToken);break;case 2:n.Ke(),n.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(n.We(),n.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),n.Le(e.resumeToken));break;default:U(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((n,s)=>{this.rt(s)&&t(s)}))}st(e){const t=e.targetId,n=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(Ba(i))if(n===0){const o=new O(i.path);this.et(t,o,ye.newNoDocument(o,z.min()))}else q(n===1,20013,{expectedCount:n});else{const o=this._t(t);if(o!==n){const a=this.ut(e),l=a?this.ct(a,e,o):1;if(l!==0){this.it(t);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,u)}wu?.lt((function(d,f,m,y,S){const N={localCacheCount:d,existenceFilterCount:f.count,databaseId:m.database,projectId:m.projectId},k=f.unchangedNames;return k&&(N.bloomFilter={applied:S===0,hashCount:k?.hashCount??0,bitmapLength:k?.bits?.bitmap?.length??0,padding:k?.bits?.padding??0,mightContain:F=>y?.mightContain(F)??!1}),N})(o,e.Ce,this.Ge.ht(),a,l))}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=t;let o,a;try{o=Qt(n).toUint8Array()}catch(l){if(l instanceof Mg)return dt("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Sh(o,s,i)}catch(l){return dt(l instanceof Oi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.ge===0?null:a}ct(e,t,n){return t.Ce.count===n-this.Pt(e,t.targetId)?0:2}Pt(e,t){const n=this.Ge.getRemoteKeysForTarget(t);let s=0;return n.forEach((i=>{const o=this.Ge.ht(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.et(t,i,null),s++)})),s}Tt(e){const t=new Map;this.ze.forEach(((i,o)=>{const a=this.ot(o);if(a){if(i.current&&Ba(a.target)){const l=new O(a.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,ye.newNoDocument(l,e))}i.Be&&(t.set(o,i.ke()),i.qe())}}));let n=K();this.He.forEach(((i,o)=>{let a=!0;o.forEachWhile((l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)})),a&&(n=n.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const s=new Po(e,t,this.Ye,this.je,n);return this.je=it(),this.Je=aa(),this.He=aa(),this.Ye=new Se(j),s}Xe(e,t){if(!this.rt(e))return;const n=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,n),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,n){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.Qe(t,1):s.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),n&&(this.je=this.je.insert(t,n))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new $p,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new he(j),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new he(j),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||x("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new $p),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function aa(){return new Se(O.comparator)}function Kp(){return new Se(O.comparator)}const ES={asc:"ASCENDING",desc:"DESCENDING"},TS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},wS={and:"AND",or:"OR"};class vS{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function vu(r,e){return r.useProto3Json||vo(e)?e:{value:e}}function Cs(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ty(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function AS(r,e){return Cs(r,e.toTimestamp())}function Ne(r){return q(!!r,49232),z.fromTimestamp((function(t){const n=Ht(t);return new ce(n.seconds,n.nanos)})(r))}function bh(r,e){return Au(r,e).canonicalString()}function Au(r,e){const t=(function(s){return new J(["projects",s.projectId,"databases",s.database])})(r).child("documents");return e===void 0?t:t.child(e)}function wy(r){const e=J.fromString(r);return q(ky(e),10190,{key:e.toString()}),e}function uo(r,e){return bh(r.databaseId,e.path)}function Ot(r,e){const t=wy(e);if(t.get(1)!==r.databaseId.projectId)throw new D(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new D(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new O(Sy(t))}function vy(r,e){return bh(r.databaseId,e)}function Ay(r){const e=wy(r);return e.length===4?J.emptyPath():Sy(e)}function Su(r){return new J(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Sy(r){return q(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Hp(r,e,t){return{name:uo(r,e),fields:t.value.mapValue.fields}}function Dc(r,e,t){const n=Ot(r,e.name),s=Ne(e.updateTime),i=e.createTime?Ne(e.createTime):z.min(),o=new $e({mapValue:{fields:e.fields}}),a=ye.newFoundDocument(n,s,i,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function SS(r,e){return"found"in e?(function(n,s){q(!!s.found,43571),s.found.name,s.found.updateTime;const i=Ot(n,s.found.name),o=Ne(s.found.updateTime),a=s.found.createTime?Ne(s.found.createTime):z.min(),l=new $e({mapValue:{fields:s.found.fields}});return ye.newFoundDocument(i,o,a,l)})(r,e):"missing"in e?(function(n,s){q(!!s.missing,3894),q(!!s.readTime,22933);const i=Ot(n,s.missing),o=Ne(s.readTime);return ye.newNoDocument(i,o)})(r,e):U(7234,{result:e})}function bS(r,e){let t;if("targetChange"in e){e.targetChange;const n=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:U(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,d){return u.useProto3Json?(q(d===void 0||typeof d=="string",58123),be.fromBase64String(d||"")):(q(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),be.fromUint8Array(d||new Uint8Array))})(r,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&(function(u){const d=u.code===void 0?R.UNKNOWN:gy(u.code);return new D(d,u.message||"")})(o);t=new Ey(n,s,i,a||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=Ot(r,n.document.name),i=Ne(n.document.updateTime),o=n.document.createTime?Ne(n.document.createTime):z.min(),a=new $e({mapValue:{fields:n.document.fields}}),l=ye.newFoundDocument(s,i,o,a),u=n.targetIds||[],d=n.removedTargetIds||[];t=new va(u,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=Ot(r,n.document),i=n.readTime?Ne(n.readTime):z.min(),o=ye.newNoDocument(s,i),a=n.removedTargetIds||[];t=new va([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=Ot(r,n.document),i=n.removedTargetIds||[];t=new va([],i,s,null)}else{if(!("filter"in e))return U(11601,{Rt:e});{e.filter;const n=e.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,o=new gS(s,i),a=n.targetId;t=new Iy(a,o)}}return t}function ho(r,e){let t;if(e instanceof Ks)t={update:Hp(r,e.key,e.value)};else if(e instanceof Hs)t={delete:uo(r,e.key)};else if(e instanceof rn)t={update:Hp(r,e.key,e.data),updateMask:DS(e.fieldMask)};else{if(!(e instanceof Th))return U(16599,{Vt:e.type});t={verify:uo(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((n=>(function(i,o){const a=o.transform;if(a instanceof bs)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof wr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof vr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Rs)return{fieldPath:o.field.canonicalString(),increment:a.Ae};throw U(20930,{transform:o.transform})})(0,n)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:AS(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:U(27497)})(r,e.precondition)),t}function bu(r,e){const t=e.currentDocument?(function(i){return i.updateTime!==void 0?Te.updateTime(Ne(i.updateTime)):i.exists!==void 0?Te.exists(i.exists):Te.none()})(e.currentDocument):Te.none(),n=e.updateTransforms?e.updateTransforms.map((s=>(function(o,a){let l=null;if("setToServerValue"in a)q(a.setToServerValue==="REQUEST_TIME",16630,{proto:a}),l=new bs;else if("appendMissingElements"in a){const d=a.appendMissingElements.values||[];l=new wr(d)}else if("removeAllFromArray"in a){const d=a.removeAllFromArray.values||[];l=new vr(d)}else"increment"in a?l=new Rs(o,a.increment):U(16584,{proto:a});const u=Ie.fromServerFormat(a.fieldPath);return new Co(u,l)})(r,s))):[];if(e.update){e.update.name;const s=Ot(r,e.update.name),i=new $e({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=(function(l){const u=l.fieldPaths||[];return new st(u.map((d=>Ie.fromServerFormat(d))))})(e.updateMask);return new rn(s,i,o,t,n)}return new Ks(s,i,t,n)}if(e.delete){const s=Ot(r,e.delete);return new Hs(s,t)}if(e.verify){const s=Ot(r,e.verify);return new Th(s,t)}return U(1463,{proto:e})}function RS(r,e){return r&&r.length>0?(q(e!==void 0,14353),r.map((t=>(function(s,i){let o=s.updateTime?Ne(s.updateTime):Ne(i);return o.isEqual(z.min())&&(o=Ne(i)),new pS(o,s.transformResults||[])})(t,e)))):[]}function by(r,e){return{documents:[vy(r,e.path)]}}function xc(r,e){const t={structuredQuery:{}},n=e.path;let s;e.collectionGroup!==null?(s=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=vy(r,s);const i=(function(u){if(u.length!==0)return Ny(le.create(u,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((d=>(function(m){return{field:_n(m.field),direction:PS(m.dir)}})(d)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=vu(r,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:t,parent:s}}function Ry(r,e,t,n){const{ft:s,parent:i}=xc(r,e),o={},a=[];let l=0;return t.forEach((u=>{const d=n?u.alias:"aggregate_"+l++;o[d]=u.alias,u.aggregateType==="count"?a.push({alias:d,count:{}}):u.aggregateType==="avg"?a.push({alias:d,avg:{field:_n(u.fieldPath)}}):u.aggregateType==="sum"&&a.push({alias:d,sum:{field:_n(u.fieldPath)}})})),{request:{structuredAggregationQuery:{aggregations:a,structuredQuery:s.structuredQuery},parent:s.parent},gt:o,parent:i}}function Cy(r){let e=Ay(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let s=null;if(n>0){q(n===1,65062);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=(function(f){const m=Py(f);return m instanceof le&&gh(m)?m.getFilters():[m]})(t.where));let o=[];t.orderBy&&(o=(function(f){return f.map((m=>(function(S){return new lo(es(S.field),(function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(S.direction))})(m)))})(t.orderBy));let a=null;t.limit&&(a=(function(f){let m;return m=typeof f=="object"?f.value:f,vo(m)?null:m})(t.limit));let l=null;t.startAt&&(l=(function(f){const m=!!f.before,y=f.values||[];return new Mn(y,m)})(t.startAt));let u=null;return t.endAt&&(u=(function(f){const m=!f.before,y=f.values||[];return new Mn(y,m)})(t.endAt)),Xg(e,s,o,i,a,"F",l,u)}function CS(r,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Py(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=es(t.unaryFilter.field);return te.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=es(t.unaryFilter.field);return te.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=es(t.unaryFilter.field);return te.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=es(t.unaryFilter.field);return te.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return U(61313);default:return U(60726)}})(r):r.fieldFilter!==void 0?(function(t){return te.create(es(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return U(58110);default:return U(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return le.create(t.compositeFilter.filters.map((n=>Py(n))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return U(1026)}})(t.compositeFilter.op))})(r):U(30097,{filter:r})}function PS(r){return ES[r]}function NS(r){return TS[r]}function kS(r){return wS[r]}function _n(r){return{fieldPath:r.canonicalString()}}function es(r){return Ie.fromServerFormat(r.fieldPath)}function Ny(r){return r instanceof te?(function(t){if(t.op==="=="){if(Dp(t.value))return{unaryFilter:{field:_n(t.field),op:"IS_NAN"}};if(kp(t.value))return{unaryFilter:{field:_n(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Dp(t.value))return{unaryFilter:{field:_n(t.field),op:"IS_NOT_NAN"}};if(kp(t.value))return{unaryFilter:{field:_n(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_n(t.field),op:NS(t.op),value:t.value}}})(r):r instanceof le?(function(t){const n=t.getFilters().map((s=>Ny(s)));return n.length===1?n[0]:{compositeFilter:{op:kS(t.op),filters:n}}})(r):U(54877,{filter:r})}function DS(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function ky(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class qt{constructor(e,t,n,s,i=z.min(),o=z.min(),a=be.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new qt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Dy{constructor(e){this.yt=e}}function xS(r,e){let t;if(e.document)t=Dc(r.yt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=O.fromSegments(e.noDocument.path),s=Sr(e.noDocument.readTime);t=ye.newNoDocument(n,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return U(56709);{const n=O.fromSegments(e.unknownDocument.path),s=Sr(e.unknownDocument.version);t=ye.newUnknownDocument(n,s)}}return e.readTime&&t.setReadTime((function(s){const i=new ce(s[0],s[1]);return z.fromTimestamp(i)})(e.readTime)),t}function Qp(r,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:za(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=(function(i,o){return{name:uo(i,o.key),fields:o.data.value.mapValue.fields,updateTime:Cs(i,o.version.toTimestamp()),createTime:Cs(i,o.createTime.toTimestamp())}})(r.yt,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:Ar(e.version)};else{if(!e.isUnknownDocument())return U(57904,{document:e});n.unknownDocument={path:t.path.toArray(),version:Ar(e.version)}}return n}function za(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function Ar(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Sr(r){const e=new ce(r.seconds,r.nanoseconds);return z.fromTimestamp(e)}function ur(r,e){const t=(e.baseMutations||[]).map((i=>bu(r.yt,i)));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const n=e.mutations.map((i=>bu(r.yt,i))),s=ce.fromMillis(e.localWriteTimeMs);return new wh(e.batchId,s,t,n)}function Mi(r){const e=Sr(r.readTime),t=r.lastLimboFreeSnapshotVersion!==void 0?Sr(r.lastLimboFreeSnapshotVersion):z.min();let n;return n=(function(i){return i.documents!==void 0})(r.query)?(function(i){const o=i.documents.length;return q(o===1,1966,{count:o}),Je($s(Ay(i.documents[0])))})(r.query):(function(i){return Je(Cy(i))})(r.query),new qt(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,e,t,be.fromBase64String(r.resumeToken))}function xy(r,e){const t=Ar(e.snapshotVersion),n=Ar(e.lastLimboFreeSnapshotVersion);let s;s=Ba(e.target)?by(r.yt,e.target):xc(r.yt,e.target).ft;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Tr(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function Vc(r){const e=Cy({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Ga(e,e.limit,"L"):e}function Ul(r,e){return new Ah(e.largestBatchId,bu(r.yt,e.overlayMutation))}function Yp(r,e){const t=e.path.lastSegment();return[r,Ye(e.path.popLast()),t]}function Jp(r,e,t,n){return{indexId:r,uid:e,sequenceNumber:t,readTime:Ar(n.readTime),documentKey:Ye(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
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
 */class VS{getBundleMetadata(e,t){return Xp(e).get(t).next((n=>{if(n)return(function(i){return{id:i.bundleId,createTime:Sr(i.createTime),version:i.version}})(n)}))}saveBundleMetadata(e,t){return Xp(e).put((function(s){return{bundleId:s.id,createTime:Ar(Ne(s.createTime)),version:s.version}})(t))}getNamedQuery(e,t){return Zp(e).get(t).next((n=>{if(n)return(function(i){return{name:i.name,query:Vc(i.bundledQuery),readTime:Sr(i.readTime)}})(n)}))}saveNamedQuery(e,t){return Zp(e).put((function(s){return{name:s.name,readTime:Ar(Ne(s.readTime)),bundledQuery:s.bundledQuery}})(t))}}function Xp(r){return Me(r,Ac)}function Zp(r){return Me(r,Sc)}/**
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
 */class Oc{constructor(e,t){this.serializer=e,this.userId=t}static wt(e,t){const n=t.uid||"";return new Oc(e,n)}getOverlay(e,t){return Ai(e).get(Yp(this.userId,t)).next((n=>n?Ul(this.serializer,n):null))}getOverlays(e,t){const n=Dt();return A.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&n.set(s,i)})))).next((()=>n))}saveOverlays(e,t,n){const s=[];return n.forEach(((i,o)=>{const a=new Ah(t,o);s.push(this.St(e,a))})),A.waitFor(s)}removeOverlaysForBatchId(e,t,n){const s=new Set;t.forEach((o=>s.add(Ye(o.getCollectionPath()))));const i=[];return s.forEach((o=>{const a=IDBKeyRange.bound([this.userId,o,n],[this.userId,o,n+1],!1,!0);i.push(Ai(e).Z(fu,a))})),A.waitFor(i)}getOverlaysForCollection(e,t,n){const s=Dt(),i=Ye(t),o=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Ai(e).J(fu,o).next((a=>{for(const l of a){const u=Ul(this.serializer,l);s.set(u.getKey(),u)}return s}))}getOverlaysForCollectionGroup(e,t,n,s){const i=Dt();let o;const a=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Ai(e).ee({index:Pg,range:a},((l,u,d)=>{const f=Ul(this.serializer,u);i.size()<s||f.largestBatchId===o?(i.set(f.getKey(),f),o=f.largestBatchId):d.done()})).next((()=>i))}St(e,t){return Ai(e).put((function(s,i,o){const[a,l,u]=Yp(i,o.mutation.key);return{userId:i,collectionPath:l,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:ho(s.yt,o.mutation)}})(this.serializer,this.userId,t))}}function Ai(r){return Me(r,bc)}/**
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
 */class OS{bt(e){return Me(e,fh)}getSessionToken(e){return this.bt(e).get("sessionToken").next((t=>{const n=t?.value;return n?be.fromUint8Array(n):be.EMPTY_BYTE_STRING}))}setSessionToken(e,t){return this.bt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class hr{constructor(){}Dt(e,t){this.Ct(e,t),t.vt()}Ct(e,t){if("nullValue"in e)this.Ft(t,5);else if("booleanValue"in e)this.Ft(t,10),t.Mt(e.booleanValue?1:0);else if("integerValue"in e)this.Ft(t,15),t.Mt(Ee(e.integerValue));else if("doubleValue"in e){const n=Ee(e.doubleValue);isNaN(n)?this.Ft(t,13):(this.Ft(t,15),to(n)?t.Mt(0):t.Mt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Ft(t,20),typeof n=="string"&&(n=Ht(n)),t.xt(`${n.seconds||""}`),t.Mt(n.nanos||0)}else if("stringValue"in e)this.Ot(e.stringValue,t),this.Nt(t);else if("bytesValue"in e)this.Ft(t,30),t.Bt(Qt(e.bytesValue)),this.Nt(t);else if("referenceValue"in e)this.Lt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Ft(t,45),t.Mt(n.latitude||0),t.Mt(n.longitude||0)}else"mapValue"in e?Gg(e)?this.Ft(t,Number.MAX_SAFE_INTEGER):Pc(e)?this.kt(e.mapValue,t):(this.qt(e.mapValue,t),this.Nt(t)):"arrayValue"in e?(this.Qt(e.arrayValue,t),this.Nt(t)):U(19022,{$t:e})}Ot(e,t){this.Ft(t,25),this.Ut(e,t)}Ut(e,t){t.xt(e)}qt(e,t){const n=e.fields||{};this.Ft(t,55);for(const s of Object.keys(n))this.Ot(s,t),this.Ct(n[s],t)}kt(e,t){const n=e.fields||{};this.Ft(t,53);const s=vs,i=n[s].arrayValue?.values?.length||0;this.Ft(t,15),t.Mt(Ee(i)),this.Ot(s,t),this.Ct(n[s],t)}Qt(e,t){const n=e.values||[];this.Ft(t,50);for(const s of n)this.Ct(s,t)}Lt(e,t){this.Ft(t,37),O.fromName(e).path.forEach((n=>{this.Ft(t,60),this.Ut(n,t)}))}Ft(e,t){e.Mt(t)}Nt(e){e.Mt(2)}}hr.Kt=new hr;/**
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
 */const Kr=255;function MS(r){if(r===0)return 8;let e=0;return r>>4||(e+=4,r<<=4),r>>6||(e+=2,r<<=2),r>>7||(e+=1),e}function em(r){const e=64-(function(n){let s=0;for(let i=0;i<8;++i){const o=MS(255&n[i]);if(s+=o,o!==8)break}return s})(r);return Math.ceil(e/8)}class LS{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Wt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Gt(n.value),n=t.next();this.zt()}jt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Jt(n.value),n=t.next();this.Ht()}Yt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Gt(n);else if(n<2048)this.Gt(960|n>>>6),this.Gt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Gt(480|n>>>12),this.Gt(128|63&n>>>6),this.Gt(128|63&n);else{const s=t.codePointAt(0);this.Gt(240|s>>>18),this.Gt(128|63&s>>>12),this.Gt(128|63&s>>>6),this.Gt(128|63&s)}}this.zt()}Zt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Jt(n);else if(n<2048)this.Jt(960|n>>>6),this.Jt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Jt(480|n>>>12),this.Jt(128|63&n>>>6),this.Jt(128|63&n);else{const s=t.codePointAt(0);this.Jt(240|s>>>18),this.Jt(128|63&s>>>12),this.Jt(128|63&s>>>6),this.Jt(128|63&s)}}this.Ht()}Xt(e){const t=this.en(e),n=em(t);this.tn(1+n),this.buffer[this.position++]=255&n;for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=255&t[s]}nn(e){const t=this.en(e),n=em(t);this.tn(1+n),this.buffer[this.position++]=~(255&n);for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}rn(){this.sn(Kr),this.sn(255)}_n(){this.an(Kr),this.an(255)}reset(){this.position=0}seed(e){this.tn(e.length),this.buffer.set(e,this.position),this.position+=e.length}un(){return this.buffer.slice(0,this.position)}en(e){const t=(function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)})(e),n=!!(128&t[0]);t[0]^=n?255:128;for(let s=1;s<t.length;++s)t[s]^=n?255:0;return t}Gt(e){const t=255&e;t===0?(this.sn(0),this.sn(255)):t===Kr?(this.sn(Kr),this.sn(0)):this.sn(t)}Jt(e){const t=255&e;t===0?(this.an(0),this.an(255)):t===Kr?(this.an(Kr),this.an(0)):this.an(e)}zt(){this.sn(0),this.sn(1)}Ht(){this.an(0),this.an(1)}sn(e){this.tn(1),this.buffer[this.position++]=e}an(e){this.tn(1),this.buffer[this.position++]=~e}tn(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class FS{constructor(e){this.cn=e}Bt(e){this.cn.Wt(e)}xt(e){this.cn.Yt(e)}Mt(e){this.cn.Xt(e)}vt(){this.cn.rn()}}class US{constructor(e){this.cn=e}Bt(e){this.cn.jt(e)}xt(e){this.cn.Zt(e)}Mt(e){this.cn.nn(e)}vt(){this.cn._n()}}class Si{constructor(){this.cn=new LS,this.ln=new FS(this.cn),this.hn=new US(this.cn)}seed(e){this.cn.seed(e)}Pn(e){return e===0?this.ln:this.hn}un(){return this.cn.un()}reset(){this.cn.reset()}}/**
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
 */class dr{constructor(e,t,n,s){this.Tn=e,this.In=t,this.En=n,this.dn=s}An(){const e=this.dn.length,t=e===0||this.dn[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.dn,0),t!==e?n.set([0],this.dn.length):++n[n.length-1],new dr(this.Tn,this.In,this.En,n)}Rn(e,t,n){return{indexId:this.Tn,uid:e,arrayValue:Aa(this.En),directionalValue:Aa(this.dn),orderedDocumentKey:Aa(t),documentKey:n.path.toArray()}}Vn(e,t,n){const s=this.Rn(e,t,n);return[s.indexId,s.uid,s.arrayValue,s.directionalValue,s.orderedDocumentKey,s.documentKey]}}function dn(r,e){let t=r.Tn-e.Tn;return t!==0?t:(t=tm(r.En,e.En),t!==0?t:(t=tm(r.dn,e.dn),t!==0?t:O.comparator(r.In,e.In)))}function tm(r,e){for(let t=0;t<r.length&&t<e.length;++t){const n=r[t]-e[t];if(n!==0)return n}return r.length-e.length}function Aa(r){return J_()?(function(t){let n="";for(let s=0;s<t.length;s++)n+=String.fromCharCode(t[s]);return n})(r):r}function nm(r){return typeof r!="string"?r:(function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n})(r)}class rm{constructor(e){this.mn=new he(((t,n)=>Ie.comparator(t.field,n.field))),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.fn=e.orderBy,this.gn=[];for(const t of e.filters){const n=t;n.isInequality()?this.mn=this.mn.add(n):this.gn.push(n)}}get pn(){return this.mn.size>1}yn(e){if(q(e.collectionGroup===this.collectionId,49279),this.pn)return!1;const t=uu(e);if(t!==void 0&&!this.wn(t))return!1;const n=or(e);let s=new Set,i=0,o=0;for(;i<n.length&&this.wn(n[i]);++i)s=s.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.mn.size>0){const a=this.mn.getIterator().getNext();if(!s.has(a.field.canonicalString())){const l=n[i];if(!this.Sn(a,l)||!this.bn(this.fn[o++],l))return!1}++i}for(;i<n.length;++i){const a=n[i];if(o>=this.fn.length||!this.bn(this.fn[o++],a))return!1}return!0}Dn(){if(this.pn)return null;let e=new he(Ie.comparator);const t=[];for(const n of this.gn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new mr(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new mr(n.field,0))}for(const n of this.fn)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new mr(n.field,n.dir==="asc"?0:1)));return new gs(gs.UNKNOWN_ID,this.collectionId,t,ys.empty())}wn(e){for(const t of this.gn)if(this.Sn(t,e))return!0;return!1}Sn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}bn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function Vy(r){if(q(r instanceof te||r instanceof le,20012),r instanceof te){if(r instanceof Jg){const t=r.value.arrayValue?.values?.map((n=>te.create(r.field,"==",n)))||[];return le.create(t,"or")}return r}const e=r.filters.map((t=>Vy(t)));return le.create(e,r.op)}function BS(r){if(r.getFilters().length===0)return[];const e=Pu(Vy(r));return q(Oy(e),7391),Ru(e)||Cu(e)?[e]:e.getFilters()}function Ru(r){return r instanceof te}function Cu(r){return r instanceof le&&gh(r)}function Oy(r){return Ru(r)||Cu(r)||(function(t){if(t instanceof le&&yu(t)){for(const n of t.getFilters())if(!Ru(n)&&!Cu(n))return!1;return!0}return!1})(r)}function Pu(r){if(q(r instanceof te||r instanceof le,34018),r instanceof te)return r;if(r.filters.length===1)return Pu(r.filters[0]);const e=r.filters.map((n=>Pu(n)));let t=le.create(e,r.op);return t=ja(t),Oy(t)?t:(q(t instanceof le,64498),q(Ss(t),40251),q(t.filters.length>1,57927),t.filters.reduce(((n,s)=>Rh(n,s))))}function Rh(r,e){let t;return q(r instanceof te||r instanceof le,38388),q(e instanceof te||e instanceof le,25473),t=r instanceof te?e instanceof te?(function(s,i){return le.create([s,i],"and")})(r,e):sm(r,e):e instanceof te?sm(e,r):(function(s,i){if(q(s.filters.length>0&&i.filters.length>0,48005),Ss(s)&&Ss(i))return Hg(s,i.getFilters());const o=yu(s)?s:i,a=yu(s)?i:s,l=o.filters.map((u=>Rh(u,a)));return le.create(l,"or")})(r,e),ja(t)}function sm(r,e){if(Ss(e))return Hg(e,r.getFilters());{const t=e.filters.map((n=>Rh(r,n)));return le.create(t,"or")}}function ja(r){if(q(r instanceof te||r instanceof le,11850),r instanceof te)return r;const e=r.getFilters();if(e.length===1)return ja(e[0]);if($g(r))return r;const t=e.map((s=>ja(s))),n=[];return t.forEach((s=>{s instanceof te?n.push(s):s instanceof le&&(s.op===r.op?n.push(...s.filters):n.push(s))})),n.length===1?n[0]:le.create(n,r.op)}/**
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
 */class qS{constructor(){this.Cn=new Ch}addToCollectionParentIndex(e,t){return this.Cn.add(t),A.resolve()}getCollectionParents(e,t){return A.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return A.resolve()}deleteFieldIndex(e,t){return A.resolve()}deleteAllFieldIndexes(e){return A.resolve()}createTargetIndexes(e,t){return A.resolve()}getDocumentsMatchingTarget(e,t){return A.resolve(null)}getIndexType(e,t){return A.resolve(0)}getFieldIndexes(e,t){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,t){return A.resolve(ft.min())}getMinOffsetFromCollectionGroup(e,t){return A.resolve(ft.min())}updateCollectionGroup(e,t,n){return A.resolve()}updateIndexEntries(e,t){return A.resolve()}}class Ch{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new he(J.comparator),i=!s.has(n);return this.index[t]=s.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new he(J.comparator)).toArray()}}/**
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
 */const im="IndexedDbIndexManager",ca=new Uint8Array(0);class GS{constructor(e,t){this.databaseId=t,this.vn=new Ch,this.Fn=new nn((n=>Tr(n)),((n,s)=>So(n,s))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.vn.has(t)){const n=t.lastSegment(),s=t.popLast();e.addOnCommittedListener((()=>{this.vn.add(t)}));const i={collectionId:n,parent:Ye(s)};return om(e).put(i)}return A.resolve()}getCollectionParents(e,t){const n=[],s=IDBKeyRange.bound([t,""],[pg(t),""],!1,!0);return om(e).J(s).next((i=>{for(const o of i){if(o.collectionId!==t)break;n.push(kt(o.parent))}return n}))}addFieldIndex(e,t){const n=bi(e),s=(function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map((l=>[l.fieldPath.canonicalString(),l.kind]))}})(t);delete s.indexId;const i=n.add(s);if(t.indexState){const o=Qr(e);return i.next((a=>{o.put(Jp(a,this.uid,t.indexState.sequenceNumber,t.indexState.offset))}))}return i.next()}deleteFieldIndex(e,t){const n=bi(e),s=Qr(e),i=Hr(e);return n.delete(t.indexId).next((()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}deleteAllFieldIndexes(e){const t=bi(e),n=Hr(e),s=Qr(e);return t.Z().next((()=>n.Z())).next((()=>s.Z()))}createTargetIndexes(e,t){return A.forEach(this.Mn(t),(n=>this.getIndexType(e,n).next((s=>{if(s===0||s===1){const i=new rm(n).Dn();if(i!=null)return this.addFieldIndex(e,i)}}))))}getDocumentsMatchingTarget(e,t){const n=Hr(e);let s=!0;const i=new Map;return A.forEach(this.Mn(t),(o=>this.xn(e,o).next((a=>{s&&(s=!!a),i.set(o,a)})))).next((()=>{if(s){let o=K();const a=[];return A.forEach(i,((l,u)=>{x(im,`Using index ${(function(B){return`id=${B.indexId}|cg=${B.collectionGroup}|f=${B.fields.map((se=>`${se.fieldPath}:${se.kind}`)).join(",")}`})(l)} to execute ${Tr(t)}`);const d=(function(B,se){const oe=uu(se);if(oe===void 0)return null;for(const ne of qa(B,oe.fieldPath))switch(ne.op){case"array-contains-any":return ne.value.arrayValue.values||[];case"array-contains":return[ne.value]}return null})(u,l),f=(function(B,se){const oe=new Map;for(const ne of or(se))for(const T of qa(B,ne.fieldPath))switch(T.op){case"==":case"in":oe.set(ne.fieldPath.canonicalString(),T.value);break;case"not-in":case"!=":return oe.set(ne.fieldPath.canonicalString(),T.value),Array.from(oe.values())}return null})(u,l),m=(function(B,se){const oe=[];let ne=!0;for(const T of or(se)){const g=T.kind===0?Lp(B,T.fieldPath,B.startAt):Fp(B,T.fieldPath,B.startAt);oe.push(g.value),ne&&(ne=g.inclusive)}return new Mn(oe,ne)})(u,l),y=(function(B,se){const oe=[];let ne=!0;for(const T of or(se)){const g=T.kind===0?Fp(B,T.fieldPath,B.endAt):Lp(B,T.fieldPath,B.endAt);oe.push(g.value),ne&&(ne=g.inclusive)}return new Mn(oe,ne)})(u,l),S=this.On(l,u,m),N=this.On(l,u,y),k=this.Nn(l,u,f),F=this.Bn(l.indexId,d,S,m.inclusive,N,y.inclusive,k);return A.forEach(F,(G=>n.Y(G,t.limit).next((B=>{B.forEach((se=>{const oe=O.fromSegments(se.documentKey);o.has(oe)||(o=o.add(oe),a.push(oe))}))}))))})).next((()=>a))}return A.resolve(null)}))}Mn(e){let t=this.Fn.get(e);return t||(e.filters.length===0?t=[e]:t=BS(le.create(e.filters,"and")).map((n=>Eu(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt))),this.Fn.set(e,t),t)}Bn(e,t,n,s,i,o,a){const l=(t!=null?t.length:1)*Math.max(n.length,i.length),u=l/(t!=null?t.length:1),d=[];for(let f=0;f<l;++f){const m=t?this.Ln(t[f/u]):ca,y=this.kn(e,m,n[f%u],s),S=this.qn(e,m,i[f%u],o),N=a.map((k=>this.kn(e,m,k,!0)));d.push(...this.createRange(y,S,N))}return d}kn(e,t,n,s){const i=new dr(e,O.empty(),t,n);return s?i:i.An()}qn(e,t,n,s){const i=new dr(e,O.empty(),t,n);return s?i.An():i}xn(e,t){const n=new rm(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next((i=>{let o=null;for(const a of i)n.yn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o}))}getIndexType(e,t){let n=2;const s=this.Mn(t);return A.forEach(s,(i=>this.xn(e,i).next((o=>{o?n!==0&&o.fields.length<(function(l){let u=new he(Ie.comparator),d=!1;for(const f of l.filters)for(const m of f.getFlattenedFilters())m.field.isKeyField()||(m.op==="array-contains"||m.op==="array-contains-any"?d=!0:u=u.add(m.field));for(const f of l.orderBy)f.field.isKeyField()||(u=u.add(f.field));return u.size+(d?1:0)})(i)&&(n=1):n=0})))).next((()=>(function(o){return o.limit!==null})(t)&&s.length>1&&n===2?1:n))}Qn(e,t){const n=new Si;for(const s of or(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=n.Pn(s.kind);hr.Kt.Dt(i,o)}return n.un()}Ln(e){const t=new Si;return hr.Kt.Dt(e,t.Pn(0)),t.un()}$n(e,t){const n=new Si;return hr.Kt.Dt(Er(this.databaseId,t),n.Pn((function(i){const o=or(i);return o.length===0?0:o[o.length-1].kind})(e))),n.un()}Nn(e,t,n){if(n===null)return[];let s=[];s.push(new Si);let i=0;for(const o of or(e)){const a=n[i++];for(const l of s)if(this.Un(t,o.fieldPath)&&co(a))s=this.Kn(s,o,a);else{const u=l.Pn(o.kind);hr.Kt.Dt(a,u)}}return this.Wn(s)}On(e,t,n){return this.Nn(e,t,n.position)}Wn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].un();return t}Kn(e,t,n){const s=[...e],i=[];for(const o of n.arrayValue.values||[])for(const a of s){const l=new Si;l.seed(a.un()),hr.Kt.Dt(o,l.Pn(t.kind)),i.push(l)}return i}Un(e,t){return!!e.filters.find((n=>n instanceof te&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in")))}getFieldIndexes(e,t){const n=bi(e),s=Qr(e);return(t?n.J(du,IDBKeyRange.bound(t,t)):n.J()).next((i=>{const o=[];return A.forEach(i,(a=>s.get([a.indexId,this.uid]).next((l=>{o.push((function(d,f){const m=f?new ys(f.sequenceNumber,new ft(Sr(f.readTime),new O(kt(f.documentKey)),f.largestBatchId)):ys.empty(),y=d.fields.map((([S,N])=>new mr(Ie.fromServerFormat(S),N)));return new gs(d.indexId,d.collectionGroup,y,m)})(a,l))})))).next((()=>o))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((t=>t.length===0?null:(t.sort(((n,s)=>{const i=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:j(n.collectionGroup,s.collectionGroup)})),t[0].collectionGroup)))}updateCollectionGroup(e,t,n){const s=bi(e),i=Qr(e);return this.Gn(e).next((o=>s.J(du,IDBKeyRange.bound(t,t)).next((a=>A.forEach(a,(l=>i.put(Jp(l.indexId,this.uid,o,n))))))))}updateIndexEntries(e,t){const n=new Map;return A.forEach(t,((s,i)=>{const o=n.get(s.collectionGroup);return(o?A.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next((a=>(n.set(s.collectionGroup,a),A.forEach(a,(l=>this.zn(e,s,l).next((u=>{const d=this.jn(i,l);return u.isEqual(d)?A.resolve():this.Jn(e,i,l,u,d)})))))))}))}Hn(e,t,n,s){return Hr(e).put(s.Rn(this.uid,this.$n(n,t.key),t.key))}Yn(e,t,n,s){return Hr(e).delete(s.Vn(this.uid,this.$n(n,t.key),t.key))}zn(e,t,n){const s=Hr(e);let i=new he(dn);return s.ee({index:Cg,range:IDBKeyRange.only([n.indexId,this.uid,Aa(this.$n(n,t))])},((o,a)=>{i=i.add(new dr(n.indexId,t,nm(a.arrayValue),nm(a.directionalValue)))})).next((()=>i))}jn(e,t){let n=new he(dn);const s=this.Qn(t,e);if(s==null)return n;const i=uu(t);if(i!=null){const o=e.data.field(i.fieldPath);if(co(o))for(const a of o.arrayValue.values||[])n=n.add(new dr(t.indexId,e.key,this.Ln(a),s))}else n=n.add(new dr(t.indexId,e.key,ca,s));return n}Jn(e,t,n,s,i){x(im,"Updating index entries for document '%s'",t.key);const o=[];return(function(l,u,d,f,m){const y=l.getIterator(),S=u.getIterator();let N=$r(y),k=$r(S);for(;N||k;){let F=!1,G=!1;if(N&&k){const B=d(N,k);B<0?G=!0:B>0&&(F=!0)}else N!=null?G=!0:F=!0;F?(f(k),k=$r(S)):G?(m(N),N=$r(y)):(N=$r(y),k=$r(S))}})(s,i,dn,(a=>{o.push(this.Hn(e,t,n,a))}),(a=>{o.push(this.Yn(e,t,n,a))})),A.waitFor(o)}Gn(e){let t=1;return Qr(e).ee({index:Rg,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((n,s,i)=>{i.done(),t=s.sequenceNumber+1})).next((()=>t))}createRange(e,t,n){n=n.sort(((o,a)=>dn(o,a))).filter(((o,a,l)=>!a||dn(o,l[a-1])!==0));const s=[];s.push(e);for(const o of n){const a=dn(o,e),l=dn(o,t);if(a===0)s[0]=e.An();else if(a>0&&l<0)s.push(o),s.push(o.An());else if(l>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.Zn(s[o],s[o+1]))return[];const a=s[o].Vn(this.uid,ca,O.empty()),l=s[o+1].Vn(this.uid,ca,O.empty());i.push(IDBKeyRange.bound(a,l))}return i}Zn(e,t){return dn(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(am)}getMinOffset(e,t){return A.mapArray(this.Mn(t),(n=>this.xn(e,n).next((s=>s||U(44426))))).next(am)}}function om(r){return Me(r,so)}function Hr(r){return Me(r,qi)}function bi(r){return Me(r,dh)}function Qr(r){return Me(r,Bi)}function am(r){q(r.length!==0,28825);let e=r[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;lh(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new ft(e.readTime,e.documentKey,t)}/**
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
 */const cm={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},My=41943040;class Qe{static withCacheSize(e){return new Qe(e,Qe.DEFAULT_COLLECTION_PERCENTILE,Qe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
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
 */function Ly(r,e,t){const n=r.store(gt),s=r.store(Is),i=[],o=IDBKeyRange.only(t.batchId);let a=0;const l=n.ee({range:o},((d,f,m)=>(a++,m.delete())));i.push(l.next((()=>{q(a===1,47070,{batchId:t.batchId})})));const u=[];for(const d of t.mutations){const f=Ag(e,d.key.path,t.batchId);i.push(s.delete(f)),u.push(d.key)}return A.waitFor(i).next((()=>u))}function Wa(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw U(14731);e=r.noDocument}return JSON.stringify(e).length}/**
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
 */Qe.DEFAULT_COLLECTION_PERCENTILE=10,Qe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Qe.DEFAULT=new Qe(My,Qe.DEFAULT_COLLECTION_PERCENTILE,Qe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Qe.DISABLED=new Qe(-1,0,0);class Mc{constructor(e,t,n,s){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=s,this.Xn={}}static wt(e,t,n,s){q(e.uid!=="",64387);const i=e.isAuthenticated()?e.uid:"";return new Mc(i,t,n,s)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return fn(e).ee({index:fr,range:n},((s,i,o)=>{t=!1,o.done()})).next((()=>t))}addMutationBatch(e,t,n,s){const i=ts(e),o=fn(e);return o.add({}).next((a=>{q(typeof a=="number",49019);const l=new wh(a,t,n,s),u=(function(y,S,N){const k=N.baseMutations.map((G=>ho(y.yt,G))),F=N.mutations.map((G=>ho(y.yt,G)));return{userId:S,batchId:N.batchId,localWriteTimeMs:N.localWriteTime.toMillis(),baseMutations:k,mutations:F}})(this.serializer,this.userId,l),d=[];let f=new he(((m,y)=>j(m.canonicalString(),y.canonicalString())));for(const m of s){const y=Ag(this.userId,m.key.path,a);f=f.add(m.key.path.popLast()),d.push(o.put(u)),d.push(i.put(y,vA))}return f.forEach((m=>{d.push(this.indexManager.addToCollectionParentIndex(e,m))})),e.addOnCommittedListener((()=>{this.Xn[a]=l.keys()})),A.waitFor(d).next((()=>l))}))}lookupMutationBatch(e,t){return fn(e).get(t).next((n=>n?(q(n.userId===this.userId,48,"Unexpected user for mutation batch",{userId:n.userId,batchId:t}),ur(this.serializer,n)):null))}er(e,t){return this.Xn[t]?A.resolve(this.Xn[t]):this.lookupMutationBatch(e,t).next((n=>{if(n){const s=n.keys();return this.Xn[t]=s,s}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return fn(e).ee({index:fr,range:s},((o,a,l)=>{a.userId===this.userId&&(q(a.batchId>=n,47524,{tr:n}),i=ur(this.serializer,a)),l.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=Cn;return fn(e).ee({index:fr,range:t,reverse:!0},((s,i,o)=>{n=i.batchId,o.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,Cn],[this.userId,Number.POSITIVE_INFINITY]);return fn(e).J(fr,t).next((n=>n.map((s=>ur(this.serializer,s)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=ga(this.userId,t.path),s=IDBKeyRange.lowerBound(n),i=[];return ts(e).ee({range:s},((o,a,l)=>{const[u,d,f]=o,m=kt(d);if(u===this.userId&&t.path.isEqual(m))return fn(e).get(f).next((y=>{if(!y)throw U(61480,{nr:o,batchId:f});q(y.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:y.userId,batchId:f}),i.push(ur(this.serializer,y))}));l.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new he(j);const s=[];return t.forEach((i=>{const o=ga(this.userId,i.path),a=IDBKeyRange.lowerBound(o),l=ts(e).ee({range:a},((u,d,f)=>{const[m,y,S]=u,N=kt(y);m===this.userId&&i.path.isEqual(N)?n=n.add(S):f.done()}));s.push(l)})),A.waitFor(s).next((()=>this.rr(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1,i=ga(this.userId,n),o=IDBKeyRange.lowerBound(i);let a=new he(j);return ts(e).ee({range:o},((l,u,d)=>{const[f,m,y]=l,S=kt(m);f===this.userId&&n.isPrefixOf(S)?S.length===s&&(a=a.add(y)):d.done()})).next((()=>this.rr(e,a)))}rr(e,t){const n=[],s=[];return t.forEach((i=>{s.push(fn(e).get(i).next((o=>{if(o===null)throw U(35274,{batchId:i});q(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:i}),n.push(ur(this.serializer,o))})))})),A.waitFor(s).next((()=>n))}removeMutationBatch(e,t){return Ly(e.le,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.ir(t.batchId)})),A.forEach(n,(s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))))}ir(e){delete this.Xn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return A.resolve();const n=IDBKeyRange.lowerBound((function(o){return[o]})(this.userId)),s=[];return ts(e).ee({range:n},((i,o,a)=>{if(i[0]===this.userId){const l=kt(i[1]);s.push(l)}else a.done()})).next((()=>{q(s.length===0,56720,{sr:s.map((i=>i.canonicalString()))})}))}))}containsKey(e,t){return Fy(e,this.userId,t)}_r(e){return Uy(e).get(this.userId).next((t=>t||{userId:this.userId,lastAcknowledgedBatchId:Cn,lastStreamToken:""}))}}function Fy(r,e,t){const n=ga(e,t.path),s=n[1],i=IDBKeyRange.lowerBound(n);let o=!1;return ts(r).ee({range:i,X:!0},((a,l,u)=>{const[d,f,m]=a;d===e&&f===s&&(o=!0),u.done()})).next((()=>o))}function fn(r){return Me(r,gt)}function ts(r){return Me(r,Is)}function Uy(r){return Me(r,no)}/**
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
 */class zS{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.lr(e).next((t=>{const n=new br(t.highestTargetId);return t.highestTargetId=n.next(),this.hr(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.lr(e).next((t=>z.fromTimestamp(new ce(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.lr(e).next((t=>t.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.lr(e).next((s=>(s.highestListenSequenceNumber=t,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.hr(e,s))))}addTargetData(e,t){return this.Pr(e,t).next((()=>this.lr(e).next((n=>(n.targetCount+=1,this.Tr(t,n),this.hr(e,n))))))}updateTargetData(e,t){return this.Pr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>Yr(e).delete(t.targetId))).next((()=>this.lr(e))).next((n=>(q(n.targetCount>0,8065),n.targetCount-=1,this.hr(e,n))))}removeTargets(e,t,n){let s=0;const i=[];return Yr(e).ee(((o,a)=>{const l=Mi(a);l.sequenceNumber<=t&&n.get(l.targetId)===null&&(s++,i.push(this.removeTargetData(e,l)))})).next((()=>A.waitFor(i))).next((()=>s))}forEachTarget(e,t){return Yr(e).ee(((n,s)=>{const i=Mi(s);t(i)}))}lr(e){return lm(e).get(Ua).next((t=>(q(t!==null,2888),t)))}hr(e,t){return lm(e).put(Ua,t)}Pr(e,t){return Yr(e).put(xy(this.serializer,t))}Tr(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.lr(e).next((t=>t.targetCount))}getTargetData(e,t){const n=Tr(t),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return Yr(e).ee({range:s,index:bg},((o,a,l)=>{const u=Mi(a);So(t,u.target)&&(i=u,l.done())})).next((()=>i))}addMatchingKeys(e,t,n){const s=[],i=gn(e);return t.forEach((o=>{const a=Ye(o.path);s.push(i.put({targetId:n,path:a})),s.push(this.referenceDelegate.addReference(e,n,o))})),A.waitFor(s)}removeMatchingKeys(e,t,n){const s=gn(e);return A.forEach(t,(i=>{const o=Ye(i.path);return A.waitFor([s.delete([n,o]),this.referenceDelegate.removeReference(e,n,i)])}))}removeMatchingKeysForTargetId(e,t){const n=gn(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),s=gn(e);let i=K();return s.ee({range:n,X:!0},((o,a,l)=>{const u=kt(o[1]),d=new O(u);i=i.add(d)})).next((()=>i))}containsKey(e,t){const n=Ye(t.path),s=IDBKeyRange.bound([n],[pg(n)],!1,!0);let i=0;return gn(e).ee({index:hh,X:!0,range:s},(([o,a],l,u)=>{o!==0&&(i++,u.done())})).next((()=>i>0))}At(e,t){return Yr(e).get(t).next((n=>n?Mi(n):null))}}function Yr(r){return Me(r,Es)}function lm(r){return Me(r,_r)}function gn(r){return Me(r,Ts)}/**
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
 */const um="LruGarbageCollector",By=1048576;function hm([r,e],[t,n]){const s=j(r,t);return s===0?j(e,n):s}class jS{constructor(e){this.Ir=e,this.buffer=new he(hm),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();hm(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class qy{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){x(um,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){jn(t)?x(um,"Ignoring IndexedDB error during garbage collection: ",t):await zn(t)}await this.Vr(3e5)}))}}class WS{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((n=>Math.floor(t/100*n)))}nthSequenceNumber(e,t){if(t===0)return A.resolve(rt.ce);const n=new jS(t);return this.mr.forEachTarget(e,(s=>n.Ar(s.sequenceNumber))).next((()=>this.mr.pr(e,(s=>n.Ar(s))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.mr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(x("LruGarbageCollector","Garbage collection skipped; disabled"),A.resolve(cm)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(x("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),cm):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let n,s,i,o,a,l,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((f=>(f>this.params.maximumSequenceNumbersToCollect?(x("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),s=this.params.maximumSequenceNumbersToCollect):s=f,o=Date.now(),this.nthSequenceNumber(e,s)))).next((f=>(n=f,a=Date.now(),this.removeTargets(e,n,t)))).next((f=>(i=f,l=Date.now(),this.removeOrphanedDocuments(e,n)))).next((f=>(u=Date.now(),Xr()<=ee.DEBUG&&x("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(l-a)+`ms
	Removed ${f} documents in `+(u-l)+`ms
Total Duration: ${u-d}ms`),A.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:f}))))}}function Gy(r,e){return new WS(r,e)}/**
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
 */class $S{constructor(e,t){this.db=e,this.garbageCollector=Gy(this,t)}gr(e){const t=this.wr(e);return this.db.getTargetCache().getTargetCount(e).next((n=>t.next((s=>n+s))))}wr(e){let t=0;return this.pr(e,(n=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}pr(e,t){return this.Sr(e,((n,s)=>t(s)))}addReference(e,t,n){return la(e,n)}removeReference(e,t,n){return la(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return la(e,t)}br(e,t){return(function(s,i){let o=!1;return Uy(s).te((a=>Fy(s,a,i).next((l=>(l&&(o=!0),A.resolve(!l)))))).next((()=>o))})(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.Sr(e,((o,a)=>{if(a<=t){const l=this.br(e,o).next((u=>{if(!u)return i++,n.getEntry(e,o).next((()=>(n.removeEntry(o,z.min()),gn(e).delete((function(f){return[0,Ye(f.path)]})(o)))))}));s.push(l)}})).next((()=>A.waitFor(s))).next((()=>n.apply(e))).next((()=>i))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return la(e,t)}Sr(e,t){const n=gn(e);let s,i=rt.ce;return n.ee({index:hh},(([o,a],{path:l,sequenceNumber:u})=>{o===0?(i!==rt.ce&&t(new O(kt(s)),i),i=u,s=l):i=rt.ce})).next((()=>{i!==rt.ce&&t(new O(kt(s)),i)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function la(r,e){return gn(r).put((function(n,s){return{targetId:0,path:Ye(n.path),sequenceNumber:s}})(e,r.currentSequenceNumber))}/**
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
 */class zy{constructor(){this.changes=new nn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ye.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?A.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class KS{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return sr(e).put(n)}removeEntry(e,t,n){return sr(e).delete((function(i,o){const a=i.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],za(o),a[a.length-1]]})(t,n))}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.Dr(e,n))))}getEntry(e,t){let n=ye.newInvalidDocument(t);return sr(e).ee({index:ya,range:IDBKeyRange.only(Ri(t))},((s,i)=>{n=this.Cr(t,i)})).next((()=>n))}vr(e,t){let n={size:0,document:ye.newInvalidDocument(t)};return sr(e).ee({index:ya,range:IDBKeyRange.only(Ri(t))},((s,i)=>{n={document:this.Cr(t,i),size:Wa(i)}})).next((()=>n))}getEntries(e,t){let n=it();return this.Fr(e,t,((s,i)=>{const o=this.Cr(s,i);n=n.insert(s,o)})).next((()=>n))}Mr(e,t){let n=it(),s=new Se(O.comparator);return this.Fr(e,t,((i,o)=>{const a=this.Cr(i,o);n=n.insert(i,a),s=s.insert(i,Wa(o))})).next((()=>({documents:n,Or:s})))}Fr(e,t,n){if(t.isEmpty())return A.resolve();let s=new he(pm);t.forEach((l=>s=s.add(l)));const i=IDBKeyRange.bound(Ri(s.first()),Ri(s.last())),o=s.getIterator();let a=o.getNext();return sr(e).ee({index:ya,range:i},((l,u,d)=>{const f=O.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&pm(a,f)<0;)n(a,null),a=o.getNext();a&&a.isEqual(f)&&(n(a,u),a=o.hasNext()?o.getNext():null),a?d.j(Ri(a)):d.done()})).next((()=>{for(;a;)n(a,null),a=o.hasNext()?o.getNext():null}))}getDocumentsMatchingQuery(e,t,n,s,i){const o=t.path,a=[o.popLast().toArray(),o.lastSegment(),za(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return sr(e).J(IDBKeyRange.bound(a,l,!0)).next((u=>{i?.incrementDocumentReadCount(u.length);let d=it();for(const f of u){const m=this.Cr(O.fromSegments(f.prefixPath.concat(f.collectionGroup,f.documentId)),f);m.isFoundDocument()&&(Ro(t,m)||s.has(m.key))&&(d=d.insert(m.key,m))}return d}))}getAllFromCollectionGroup(e,t,n,s){let i=it();const o=fm(t,n),a=fm(t,ft.max());return sr(e).ee({index:Sg,range:IDBKeyRange.bound(o,a,!0)},((l,u,d)=>{const f=this.Cr(O.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);i=i.insert(f.key,f),i.size===s&&d.done()})).next((()=>i))}newChangeBuffer(e){return new HS(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((t=>t.byteSize))}getMetadata(e){return dm(e).get(hu).next((t=>(q(!!t,20021),t)))}Dr(e,t){return dm(e).put(hu,t)}Cr(e,t){if(t){const n=xS(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(z.min())))return n}return ye.newInvalidDocument(e)}}function jy(r){return new KS(r)}class HS extends zy{constructor(e,t){super(),this.Nr=e,this.trackRemovals=t,this.Br=new nn((n=>n.toString()),((n,s)=>n.isEqual(s)))}applyChanges(e){const t=[];let n=0,s=new he(((i,o)=>j(i.canonicalString(),o.canonicalString())));return this.changes.forEach(((i,o)=>{const a=this.Br.get(i);if(t.push(this.Nr.removeEntry(e,i,a.readTime)),o.isValidDocument()){const l=Qp(this.Nr.serializer,o);s=s.add(i.path.popLast());const u=Wa(l);n+=u-a.size,t.push(this.Nr.addEntry(e,i,l))}else if(n-=a.size,this.trackRemovals){const l=Qp(this.Nr.serializer,o.convertToNoDocument(z.min()));t.push(this.Nr.addEntry(e,i,l))}})),s.forEach((i=>{t.push(this.Nr.indexManager.addToCollectionParentIndex(e,i))})),t.push(this.Nr.updateMetadata(e,n)),A.waitFor(t)}getFromCache(e,t){return this.Nr.vr(e,t).next((n=>(this.Br.set(t,{size:n.size,readTime:n.document.readTime}),n.document)))}getAllFromCache(e,t){return this.Nr.Mr(e,t).next((({documents:n,Or:s})=>(s.forEach(((i,o)=>{this.Br.set(i,{size:o,readTime:n.get(i).readTime})})),n)))}}function dm(r){return Me(r,ro)}function sr(r){return Me(r,Fa)}function Ri(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function fm(r,e){const t=e.documentKey.path.toArray();return[r,za(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function pm(r,e){const t=r.path.toArray(),n=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<n.length-2;++i)if(s=j(t[i],n[i]),s)return s;return s=j(t.length,n.length),s||(s=j(t[t.length-2],n[n.length-2]),s||j(t[t.length-1],n[n.length-1]))}/**
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
 */class QS{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Wy{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(n=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(n!==null&&ji(n.mutation,s,st.empty(),ce.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.getLocalViewOfDocuments(e,n,K()).next((()=>n))))}getLocalViewOfDocuments(e,t,n=K()){const s=Dt();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,n).next((i=>{let o=Vi();return i.forEach(((a,l)=>{o=o.insert(a,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const n=Dt();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,K())))}populateOverlays(e,t,n){const s=[];return n.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,a)=>{t.set(o,a)}))}))}computeViews(e,t,n,s){let i=it();const o=zi(),a=(function(){return zi()})();return t.forEach(((l,u)=>{const d=n.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof rn)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),ji(d.mutation,u,d.mutation.getFieldMask(),ce.now())):o.set(u.key,st.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((u,d)=>o.set(u,d))),t.forEach(((u,d)=>a.set(u,new QS(d,o.get(u)??null)))),a)))}recalculateAndSaveOverlays(e,t){const n=zi();let s=new Se(((o,a)=>o-a)),i=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const a of o)a.keys().forEach((l=>{const u=t.get(l);if(u===null)return;let d=n.get(l)||st.empty();d=a.applyToLocalView(u,d),n.set(l,d);const f=(s.get(a.batchId)||K()).add(l);s=s.insert(a.batchId,f)}))})).next((()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,d=l.value,f=oy();d.forEach((m=>{if(!i.has(m)){const y=fy(t.get(m),n.get(m));y!==null&&f.set(m,y),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return A.waitFor(o)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.recalculateAndSaveOverlays(e,n)))}getDocumentsMatchingQuery(e,t,n,s){return(function(o){return O.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):yh(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,s):this.getDocumentsMatchingCollectionQuery(e,t,n,s)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-i.size):A.resolve(Dt());let a=_s,l=i;return o.next((u=>A.forEach(u,((d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(d)?A.resolve():this.remoteDocumentCache.getEntry(e,d).next((m=>{l=l.insert(d,m)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,l,u,K()))).next((d=>({batchId:a,changes:iy(d)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new O(t)).next((n=>{let s=Vi();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,s){const i=t.collectionGroup;let o=Vi();return this.indexManager.getCollectionParents(e,i).next((a=>A.forEach(a,(l=>{const u=(function(f,m){return new tn(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)})(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,n,s).next((d=>{d.forEach(((f,m)=>{o=o.insert(f,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s)))).next((o=>{i.forEach(((l,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,ye.newInvalidDocument(d)))}));let a=Vi();return o.forEach(((l,u)=>{const d=i.get(l);d!==void 0&&ji(d.mutation,u,st.empty(),ce.now()),Ro(t,u)&&(a=a.insert(l,u))})),a}))}}/**
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
 */class YS{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return A.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:Ne(s.createTime)}})(t)),A.resolve()}getNamedQuery(e,t){return A.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(s){return{name:s.name,query:Vc(s.bundledQuery),readTime:Ne(s.readTime)}})(t)),A.resolve()}}/**
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
 */class JS{constructor(){this.overlays=new Se(O.comparator),this.qr=new Map}getOverlay(e,t){return A.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Dt();return A.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&n.set(s,i)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((s,i)=>{this.St(e,t,i)})),A.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.qr.get(n);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(n)),A.resolve()}getOverlaysForCollection(e,t,n){const s=Dt(),i=t.length+1,o=new O(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>n&&s.set(l.getKey(),l)}return A.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let i=new Se(((u,d)=>u-d));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>n){let d=i.get(u.largestBatchId);d===null&&(d=Dt(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const a=Dt(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((u,d)=>a.set(u,d))),!(a.size()>=s)););return A.resolve(a)}St(e,t,n){const s=this.overlays.get(n.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(n.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new Ah(t,n));let i=this.qr.get(t);i===void 0&&(i=K(),this.qr.set(t,i)),this.qr.set(t,i.add(n.key))}}/**
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
 */class XS{constructor(){this.sessionToken=be.EMPTY_BYTE_STRING}getSessionToken(e){return A.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,A.resolve()}}/**
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
 */class Ph{constructor(){this.Qr=new he(Ue.$r),this.Ur=new he(Ue.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const n=new Ue(e,t);this.Qr=this.Qr.add(n),this.Ur=this.Ur.add(n)}Wr(e,t){e.forEach((n=>this.addReference(n,t)))}removeReference(e,t){this.Gr(new Ue(e,t))}zr(e,t){e.forEach((n=>this.removeReference(n,t)))}jr(e){const t=new O(new J([])),n=new Ue(t,e),s=new Ue(t,e+1),i=[];return this.Ur.forEachInRange([n,s],(o=>{this.Gr(o),i.push(o.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new O(new J([])),n=new Ue(t,e),s=new Ue(t,e+1);let i=K();return this.Ur.forEachInRange([n,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const t=new Ue(e,0),n=this.Qr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Ue{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return O.comparator(e.key,t.key)||j(e.Yr,t.Yr)}static Kr(e,t){return j(e.Yr,t.Yr)||O.comparator(e.key,t.key)}}/**
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
 */class ZS{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new he(Ue.$r)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new wh(i,t,n,s);this.mutationQueue.push(o);for(const a of s)this.Zr=this.Zr.add(new Ue(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,t){return A.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.ei(n),i=s<0?0:s;return A.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?Cn:this.tr-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Ue(t,0),s=new Ue(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([n,s],(o=>{const a=this.Xr(o.Yr);i.push(a)})),A.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new he(j);return t.forEach((s=>{const i=new Ue(s,0),o=new Ue(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],(a=>{n=n.add(a.Yr)}))})),A.resolve(this.ti(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let i=n;O.isDocumentKey(i)||(i=i.child(""));const o=new Ue(new O(i),0);let a=new he(j);return this.Zr.forEachWhile((l=>{const u=l.key.path;return!!n.isPrefixOf(u)&&(u.length===s&&(a=a.add(l.Yr)),!0)}),o),A.resolve(this.ti(a))}ti(e){const t=[];return e.forEach((n=>{const s=this.Xr(n);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){q(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Zr;return A.forEach(t.mutations,(s=>{const i=new Ue(s.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Zr=n}))}ir(e){}containsKey(e,t){const n=new Ue(t,0),s=this.Zr.firstAfterOrEqual(n);return A.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class eb{constructor(e){this.ri=e,this.docs=(function(){return new Se(O.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),i=s?s.size:0,o=this.ri(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return A.resolve(n?n.document.mutableCopy():ye.newInvalidDocument(t))}getEntries(e,t){let n=it();return t.forEach((s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():ye.newInvalidDocument(s))})),A.resolve(n)}getDocumentsMatchingQuery(e,t,n,s){let i=it();const o=t.path,a=new O(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:d}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||lh(Ig(d),n)<=0||(s.has(d.key)||Ro(t,d))&&(i=i.insert(d.key,d.mutableCopy()))}return A.resolve(i)}getAllFromCollectionGroup(e,t,n,s){U(9500)}ii(e,t){return A.forEach(this.docs,(n=>t(n)))}newChangeBuffer(e){return new tb(this)}getSize(e){return A.resolve(this.size)}}class tb extends zy{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?t.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(n)})),A.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class nb{constructor(e){this.persistence=e,this.si=new nn((t=>Tr(t)),So),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.oi=0,this._i=new Ph,this.targetCount=0,this.ai=br.ur()}forEachTarget(e,t){return this.si.forEach(((n,s)=>t(s))),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.oi&&(this.oi=t),A.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new br(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,A.resolve()}updateTargetData(e,t){return this.Pr(t),A.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,t,n){let s=0;const i=[];return this.si.forEach(((o,a)=>{a.sequenceNumber<=t&&n.get(a.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)})),A.waitFor(i).next((()=>s))}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,t){const n=this.si.get(t)||null;return A.resolve(n)}addMatchingKeys(e,t,n){return this._i.Wr(t,n),A.resolve()}removeMatchingKeys(e,t,n){this._i.zr(t,n);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),A.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),A.resolve()}getMatchingKeysForTargetId(e,t){const n=this._i.Hr(t);return A.resolve(n)}containsKey(e,t){return A.resolve(this._i.containsKey(t))}}/**
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
 */class Nh{constructor(e,t){this.ui={},this.overlays={},this.ci=new rt(0),this.li=!1,this.li=!0,this.hi=new XS,this.referenceDelegate=e(this),this.Pi=new nb(this),this.indexManager=new qS,this.remoteDocumentCache=(function(s){return new eb(s)})((n=>this.referenceDelegate.Ti(n))),this.serializer=new Dy(t),this.Ii=new YS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new JS,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ui[e.toKey()];return n||(n=new ZS(t,this.referenceDelegate),this.ui[e.toKey()]=n),n}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,n){x("MemoryPersistence","Starting transaction:",e);const s=new rb(this.ci.next());return this.referenceDelegate.Ei(),n(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(e,t){return A.or(Object.values(this.ui).map((n=>()=>n.containsKey(e,t))))}}class rb extends Tg{constructor(e){super(),this.currentSequenceNumber=e}}class Lc{constructor(e){this.persistence=e,this.Ri=new Ph,this.Vi=null}static mi(e){return new Lc(e)}get fi(){if(this.Vi)return this.Vi;throw U(60996)}addReference(e,t,n){return this.Ri.addReference(n,t),this.fi.delete(n.toString()),A.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.fi.add(n.toString()),A.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),A.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((s=>this.fi.add(s.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>n.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.fi,(n=>{const s=O.fromPath(n);return this.gi(e,s).next((i=>{i||t.removeEntry(s,z.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((n=>{n?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return A.or([()=>A.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class $a{constructor(e,t){this.persistence=e,this.pi=new nn((n=>Ye(n.path)),((n,s)=>n.isEqual(s))),this.garbageCollector=Gy(this,t)}static mi(e,t){return new $a(e,t)}Ei(){}di(e){return A.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((n=>t.next((s=>n+s))))}wr(e){let t=0;return this.pr(e,(n=>{t++})).next((()=>t))}pr(e,t){return A.forEach(this.pi,((n,s)=>this.br(e,n,s).next((i=>i?A.resolve():t(s)))))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,(o=>this.br(e,o,t).next((a=>{a||(n++,i.removeEntry(o,z.min()))})))).next((()=>i.apply(e))).next((()=>n))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),A.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),A.resolve()}removeReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),A.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),A.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ea(e.data.value)),t}br(e,t,n){return A.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.pi.get(t);return A.resolve(s!==void 0&&s>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class sb{constructor(e){this.serializer=e}k(e,t,n,s){const i=new vc("createOrUpgrade",t);n<1&&s>=1&&((function(l){l.createObjectStore(Ao)})(e),(function(l){l.createObjectStore(no,{keyPath:wA}),l.createObjectStore(gt,{keyPath:Sp,autoIncrement:!0}).createIndex(fr,bp,{unique:!0}),l.createObjectStore(Is)})(e),mm(e),(function(l){l.createObjectStore(ar)})(e));let o=A.resolve();return n<3&&s>=3&&(n!==0&&((function(l){l.deleteObjectStore(Ts),l.deleteObjectStore(Es),l.deleteObjectStore(_r)})(e),mm(e)),o=o.next((()=>(function(l){const u=l.store(_r),d={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:z.min().toTimestamp(),targetCount:0};return u.put(Ua,d)})(i)))),n<4&&s>=4&&(n!==0&&(o=o.next((()=>(function(l,u){return u.store(gt).J().next((f=>{l.deleteObjectStore(gt),l.createObjectStore(gt,{keyPath:Sp,autoIncrement:!0}).createIndex(fr,bp,{unique:!0});const m=u.store(gt),y=f.map((S=>m.put(S)));return A.waitFor(y)}))})(e,i)))),o=o.next((()=>{(function(l){l.createObjectStore(ws,{keyPath:kA})})(e)}))),n<5&&s>=5&&(o=o.next((()=>this.yi(i)))),n<6&&s>=6&&(o=o.next((()=>((function(l){l.createObjectStore(ro)})(e),this.wi(i))))),n<7&&s>=7&&(o=o.next((()=>this.Si(i)))),n<8&&s>=8&&(o=o.next((()=>this.bi(e,i)))),n<9&&s>=9&&(o=o.next((()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)}))),n<10&&s>=10&&(o=o.next((()=>this.Di(i)))),n<11&&s>=11&&(o=o.next((()=>{(function(l){l.createObjectStore(Ac,{keyPath:DA})})(e),(function(l){l.createObjectStore(Sc,{keyPath:xA})})(e)}))),n<12&&s>=12&&(o=o.next((()=>{(function(l){const u=l.createObjectStore(bc,{keyPath:BA});u.createIndex(fu,qA,{unique:!1}),u.createIndex(Pg,GA,{unique:!1})})(e)}))),n<13&&s>=13&&(o=o.next((()=>(function(l){const u=l.createObjectStore(Fa,{keyPath:AA});u.createIndex(ya,SA),u.createIndex(Sg,bA)})(e))).next((()=>this.Ci(e,i))).next((()=>e.deleteObjectStore(ar)))),n<14&&s>=14&&(o=o.next((()=>this.Fi(e,i)))),n<15&&s>=15&&(o=o.next((()=>(function(l){l.createObjectStore(dh,{keyPath:VA,autoIncrement:!0}).createIndex(du,OA,{unique:!1}),l.createObjectStore(Bi,{keyPath:MA}).createIndex(Rg,LA,{unique:!1}),l.createObjectStore(qi,{keyPath:FA}).createIndex(Cg,UA,{unique:!1})})(e)))),n<16&&s>=16&&(o=o.next((()=>{t.objectStore(Bi).clear()})).next((()=>{t.objectStore(qi).clear()}))),n<17&&s>=17&&(o=o.next((()=>{(function(l){l.createObjectStore(fh,{keyPath:zA})})(e)}))),n<18&&s>=18&&J_()&&(o=o.next((()=>{t.objectStore(Bi).clear()})).next((()=>{t.objectStore(qi).clear()}))),o}wi(e){let t=0;return e.store(ar).ee(((n,s)=>{t+=Wa(s)})).next((()=>{const n={byteSize:t};return e.store(ro).put(hu,n)}))}yi(e){const t=e.store(no),n=e.store(gt);return t.J().next((s=>A.forEach(s,(i=>{const o=IDBKeyRange.bound([i.userId,Cn],[i.userId,i.lastAcknowledgedBatchId]);return n.J(fr,o).next((a=>A.forEach(a,(l=>{q(l.userId===i.userId,18650,"Cannot process batch from unexpected user",{batchId:l.batchId});const u=ur(this.serializer,l);return Ly(e,i.userId,u).next((()=>{}))}))))}))))}Si(e){const t=e.store(Ts),n=e.store(ar);return e.store(_r).get(Ua).next((s=>{const i=[];return n.ee(((o,a)=>{const l=new J(o),u=(function(f){return[0,Ye(f)]})(l);i.push(t.get(u).next((d=>d?A.resolve():(f=>t.put({targetId:0,path:Ye(f),sequenceNumber:s.highestListenSequenceNumber}))(l))))})).next((()=>A.waitFor(i)))}))}bi(e,t){e.createObjectStore(so,{keyPath:NA});const n=t.store(so),s=new Ch,i=o=>{if(s.add(o)){const a=o.lastSegment(),l=o.popLast();return n.put({collectionId:a,parent:Ye(l)})}};return t.store(ar).ee({X:!0},((o,a)=>{const l=new J(o);return i(l.popLast())})).next((()=>t.store(Is).ee({X:!0},(([o,a,l],u)=>{const d=kt(a);return i(d.popLast())}))))}Di(e){const t=e.store(Es);return t.ee(((n,s)=>{const i=Mi(s),o=xy(this.serializer,i);return t.put(o)}))}Ci(e,t){const n=t.store(ar),s=[];return n.ee(((i,o)=>{const a=t.store(Fa),l=(function(f){return f.document?new O(J.fromString(f.document.name).popFirst(5)):f.noDocument?O.fromSegments(f.noDocument.path):f.unknownDocument?O.fromSegments(f.unknownDocument.path):U(36783)})(o).path.toArray(),u={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(a.put(u))})).next((()=>A.waitFor(s)))}Fi(e,t){const n=t.store(gt),s=jy(this.serializer),i=new Nh(Lc.mi,this.serializer.yt);return n.J().next((o=>{const a=new Map;return o.forEach((l=>{let u=a.get(l.userId)??K();ur(this.serializer,l).keys().forEach((d=>u=u.add(d))),a.set(l.userId,u)})),A.forEach(a,((l,u)=>{const d=new Be(u),f=Oc.wt(this.serializer,d),m=i.getIndexManager(d),y=Mc.wt(d,this.serializer,m,i.referenceDelegate);return new Wy(s,y,f,m).recalculateAndSaveOverlaysForDocumentKeys(new pu(t,rt.ce),l).next()}))}))}}function mm(r){r.createObjectStore(Ts,{keyPath:CA}).createIndex(hh,PA,{unique:!0}),r.createObjectStore(Es,{keyPath:"targetId"}).createIndex(bg,RA,{unique:!0}),r.createObjectStore(_r)}const pn="IndexedDbPersistence",Bl=18e5,ql=5e3,Gl="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",$y="main";class kh{constructor(e,t,n,s,i,o,a,l,u,d,f=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Mi=i,this.window=o,this.document=a,this.xi=u,this.Oi=d,this.Ni=f,this.ci=null,this.li=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Bi=null,this.inForeground=!1,this.Li=null,this.ki=null,this.qi=Number.NEGATIVE_INFINITY,this.Qi=m=>Promise.resolve(),!kh.v())throw new D(R.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new $S(this,s),this.$i=t+$y,this.serializer=new Dy(l),this.Ui=new Vt(this.$i,this.Ni,new sb(this.serializer)),this.hi=new OS,this.Pi=new zS(this.referenceDelegate,this.serializer),this.remoteDocumentCache=jy(this.serializer),this.Ii=new VS,this.window&&this.window.localStorage?this.Ki=this.window.localStorage:(this.Ki=null,d===!1&&Pe(pn,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Wi().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new D(R.FAILED_PRECONDITION,Gl);return this.Gi(),this.zi(),this.ji(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.Pi.getHighestSequenceNumber(e)))})).then((e=>{this.ci=new rt(e,this.xi)})).then((()=>{this.li=!0})).catch((e=>(this.Ui&&this.Ui.close(),Promise.reject(e))))}Ji(e){return this.Qi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ui.$((async t=>{t.newVersion===null&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Mi.enqueueAndForget((async()=>{this.started&&await this.Wi()})))}Wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>ua(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.Hi(e).next((t=>{t||(this.isPrimary=!1,this.Mi.enqueueRetryable((()=>this.Qi(!1))))}))})).next((()=>this.Yi(e))).next((t=>this.isPrimary&&!t?this.Zi(e).next((()=>!1)):!!t&&this.Xi(e).next((()=>!0)))))).catch((e=>{if(jn(e))return x(pn,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return x(pn,"Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Mi.enqueueRetryable((()=>this.Qi(e))),this.isPrimary=e}))}Hi(e){return Ci(e).get(Wr).next((t=>A.resolve(this.es(t))))}ts(e){return ua(e).delete(this.clientId)}async ns(){if(this.isPrimary&&!this.rs(this.qi,Bl)){this.qi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(t=>{const n=Me(t,ws);return n.J().next((s=>{const i=this.ss(s,Bl),o=s.filter((a=>i.indexOf(a)===-1));return A.forEach(o,(a=>n.delete(a.clientId))).next((()=>o))}))})).catch((()=>[]));if(this.Ki)for(const t of e)this.Ki.removeItem(this._s(t.clientId))}}ji(){this.ki=this.Mi.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.Wi().then((()=>this.ns())).then((()=>this.ji()))))}es(e){return!!e&&e.ownerId===this.clientId}Yi(e){return this.Oi?A.resolve(!0):Ci(e).get(Wr).next((t=>{if(t!==null&&this.rs(t.leaseTimestampMs,ql)&&!this.us(t.ownerId)){if(this.es(t)&&this.networkEnabled)return!0;if(!this.es(t)){if(!t.allowTabSynchronization)throw new D(R.FAILED_PRECONDITION,Gl);return!1}}return!(!this.networkEnabled||!this.inForeground)||ua(e).J().next((n=>this.ss(n,ql).find((s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,a=this.networkEnabled===s.networkEnabled;if(i||o&&a)return!0}return!1}))===void 0))})).next((t=>(this.isPrimary!==t&&x(pn,`Client ${t?"is":"is not"} eligible for a primary lease.`),t)))}async shutdown(){this.li=!1,this.cs(),this.ki&&(this.ki.cancel(),this.ki=null),this.ls(),this.hs(),await this.Ui.runTransaction("shutdown","readwrite",[Ao,ws],(e=>{const t=new pu(e,rt.ce);return this.Zi(t).next((()=>this.ts(t)))})),this.Ui.close(),this.Ps()}ss(e,t){return e.filter((n=>this.rs(n.updateTimeMs,t)&&!this.us(n.clientId)))}Ts(){return this.runTransaction("getActiveClients","readonly",(e=>ua(e).J().next((t=>this.ss(t,Bl).map((n=>n.clientId))))))}get started(){return this.li}getGlobalsCache(){return this.hi}getMutationQueue(e,t){return Mc.wt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new GS(e,this.serializer.yt.databaseId)}getDocumentOverlayCache(e){return Oc.wt(this.serializer,e)}getBundleCache(){return this.Ii}runTransaction(e,t,n){x(pn,"Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=(function(l){return l===18?$A:l===17?xg:l===16?WA:l===15?ph:l===14?Dg:l===13?kg:l===12?jA:l===11?Ng:void U(60245)})(this.Ni);let o;return this.Ui.runTransaction(e,s,i,(a=>(o=new pu(a,this.ci?this.ci.next():rt.ce),t==="readwrite-primary"?this.Hi(o).next((l=>!!l||this.Yi(o))).next((l=>{if(!l)throw Pe(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Mi.enqueueRetryable((()=>this.Qi(!1))),new D(R.FAILED_PRECONDITION,Eg);return n(o)})).next((l=>this.Xi(o).next((()=>l)))):this.Is(o).next((()=>n(o)))))).then((a=>(o.raiseOnCommittedEvent(),a)))}Is(e){return Ci(e).get(Wr).next((t=>{if(t!==null&&this.rs(t.leaseTimestampMs,ql)&&!this.us(t.ownerId)&&!this.es(t)&&!(this.Oi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new D(R.FAILED_PRECONDITION,Gl)}))}Xi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Ci(e).put(Wr,t)}static v(){return Vt.v()}Zi(e){const t=Ci(e);return t.get(Wr).next((n=>this.es(n)?(x(pn,"Releasing primary lease."),t.delete(Wr)):A.resolve()))}rs(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(Pe(`Detected an update time that is in the future: ${e} > ${n}`),!1))}Gi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Li=()=>{this.Mi.enqueueAndForget((()=>(this.inForeground=this.document.visibilityState==="visible",this.Wi())))},this.document.addEventListener("visibilitychange",this.Li),this.inForeground=this.document.visibilityState==="visible")}ls(){this.Li&&(this.document.removeEventListener("visibilitychange",this.Li),this.Li=null)}zi(){typeof this.window?.addEventListener=="function"&&(this.Bi=()=>{this.cs();const e=/(?:Version|Mobile)\/1[456]/;Y_()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.Mi.enterRestrictedMode(!0),this.Mi.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Bi))}hs(){this.Bi&&(this.window.removeEventListener("pagehide",this.Bi),this.Bi=null)}us(e){try{const t=this.Ki?.getItem(this._s(e))!==null;return x(pn,`Client '${e}' ${t?"is":"is not"} zombied in LocalStorage`),t}catch(t){return Pe(pn,"Failed to get zombied client id.",t),!1}}cs(){if(this.Ki)try{this.Ki.setItem(this._s(this.clientId),String(Date.now()))}catch(e){Pe("Failed to set zombie client id.",e)}}Ps(){if(this.Ki)try{this.Ki.removeItem(this._s(this.clientId))}catch{}}_s(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Ci(r){return Me(r,Ao)}function ua(r){return Me(r,ws)}function Dh(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class xh{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.Es=n,this.ds=s}static As(e,t){let n=K(),s=K();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new xh(e,t.fromCache,n,s)}}/**
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
 */class ib{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Ky{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Y_()?8:wg(Ve())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,n,s){const i={result:null};return this.ys(e,t).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ws(e,t,s,n).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new ib;return this.Ss(e,t,o).next((a=>{if(i.result=a,this.Vs)return this.bs(e,t,o,a.size)}))})).next((()=>i.result))}bs(e,t,n,s){return n.documentReadCount<this.fs?(Xr()<=ee.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",Zr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),A.resolve()):(Xr()<=ee.DEBUG&&x("QueryEngine","Query:",Zr(t),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.gs*s?(Xr()<=ee.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",Zr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Je(t))):A.resolve())}ys(e,t){if(Up(t))return A.resolve(null);let n=Je(t);return this.indexManager.getIndexType(e,n).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=Ga(t,null,"F"),n=Je(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((i=>{const o=K(...i);return this.ps.getDocuments(e,o).next((a=>this.indexManager.getMinOffset(e,n).next((l=>{const u=this.Ds(t,a);return this.Cs(t,u,o,l.readTime)?this.ys(e,Ga(t,null,"F")):this.vs(e,u,t,l)}))))})))))}ws(e,t,n,s){return Up(t)||s.isEqual(z.min())?A.resolve(null):this.ps.getDocuments(e,n).next((i=>{const o=this.Ds(t,i);return this.Cs(t,o,n,s)?A.resolve(null):(Xr()<=ee.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Zr(t)),this.vs(e,o,t,yg(s,_s)).next((a=>a)))}))}Ds(e,t){let n=new he(ry(e));return t.forEach(((s,i)=>{Ro(e,i)&&(n=n.add(i))})),n}Cs(e,t,n,s){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,t,n){return Xr()<=ee.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",Zr(t)),this.ps.getDocumentsMatchingQuery(e,t,ft.min(),n)}vs(e,t,n,s){return this.ps.getDocumentsMatchingQuery(e,n,s).next((i=>(t.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
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
 */const Vh="LocalStore",ob=3e8;class ab{constructor(e,t,n,s){this.persistence=e,this.Fs=t,this.serializer=s,this.Ms=new Se(j),this.xs=new nn((i=>Tr(i)),So),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(n)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Wy(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function Hy(r,e,t,n){return new ab(r,e,t,n)}async function Qy(r,e){const t=M(r);return await t.persistence.runTransaction("Handle user change","readonly",(n=>{let s;return t.mutationQueue.getAllMutationBatches(n).next((i=>(s=i,t.Bs(e),t.mutationQueue.getAllMutationBatches(n)))).next((i=>{const o=[],a=[];let l=K();for(const u of s){o.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}for(const u of i){a.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}return t.localDocuments.getDocuments(n,l).next((u=>({Ls:u,removedBatchIds:o,addedBatchIds:a})))}))}))}function cb(r,e){const t=M(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const s=e.batch.keys(),i=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(a,l,u,d){const f=u.batch,m=f.keys();let y=A.resolve();return m.forEach((S=>{y=y.next((()=>d.getEntry(l,S))).next((N=>{const k=u.docVersions.get(S);q(k!==null,48541),N.version.compareTo(k)<0&&(f.applyToRemoteDocument(N,u),N.isValidDocument()&&(N.setReadTime(u.commitVersion),d.addEntry(N)))}))})),y.next((()=>a.mutationQueue.removeMutationBatch(l,f)))})(t,n,e,i).next((()=>i.apply(n))).next((()=>t.mutationQueue.performConsistencyCheck(n))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(n,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(a){let l=K();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l})(e)))).next((()=>t.localDocuments.getDocuments(n,s)))}))}function Yy(r){const e=M(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function lb(r,e){const t=M(r),n=e.snapshotVersion;let s=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=t.Ns.newChangeBuffer({trackRemovals:!0});s=t.Ms;const a=[];e.targetChanges.forEach(((d,f)=>{const m=s.get(f);if(!m)return;a.push(t.Pi.removeMatchingKeys(i,d.removedDocuments,f).next((()=>t.Pi.addMatchingKeys(i,d.addedDocuments,f))));let y=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?y=y.withResumeToken(be.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):d.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(d.resumeToken,n)),s=s.insert(f,y),(function(N,k,F){return N.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=ob?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0})(m,y,d)&&a.push(t.Pi.updateTargetData(i,y))}));let l=it(),u=K();if(e.documentUpdates.forEach((d=>{e.resolvedLimboDocuments.has(d)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))})),a.push(Jy(i,o,e.documentUpdates).next((d=>{l=d.ks,u=d.qs}))),!n.isEqual(z.min())){const d=t.Pi.getLastRemoteSnapshotVersion(i).next((f=>t.Pi.setTargetsMetadata(i,i.currentSequenceNumber,n)));a.push(d)}return A.waitFor(a).next((()=>o.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,l,u))).next((()=>l))})).then((i=>(t.Ms=s,i)))}function Jy(r,e,t){let n=K(),s=K();return t.forEach((i=>n=n.add(i))),e.getEntries(r,n).next((i=>{let o=it();return t.forEach(((a,l)=>{const u=i.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(z.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):x(Vh,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)})),{ks:o,qs:s}}))}function ub(r,e){const t=M(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(n=>(e===void 0&&(e=Cn),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e))))}function Ps(r,e){const t=M(r);return t.persistence.runTransaction("Allocate target","readwrite",(n=>{let s;return t.Pi.getTargetData(n,e).next((i=>i?(s=i,A.resolve(s)):t.Pi.allocateTargetId(n).next((o=>(s=new qt(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.Pi.addTargetData(n,s).next((()=>s)))))))})).then((n=>{const s=t.Ms.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(n.targetId,n),t.xs.set(e,n.targetId)),n}))}async function Ns(r,e,t){const n=M(r),s=n.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,(o=>n.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!jn(o))throw o;x(Vh,`Failed to update sequence numbers for target ${e}: ${o}`)}n.Ms=n.Ms.remove(e),n.xs.delete(s.target)}function Ka(r,e,t){const n=M(r);let s=z.min(),i=K();return n.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,u,d){const f=M(l),m=f.xs.get(d);return m!==void 0?A.resolve(f.Ms.get(m)):f.Pi.getTargetData(u,d)})(n,o,Je(e)).next((a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,n.Pi.getMatchingKeysForTargetId(o,a.targetId).next((l=>{i=l}))})).next((()=>n.Fs.getDocumentsMatchingQuery(o,e,t?s:z.min(),t?i:K()))).next((a=>(eI(n,ny(e),a),{documents:a,Qs:i})))))}function Xy(r,e){const t=M(r),n=M(t.Pi),s=t.Ms.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",(i=>n.At(i,e).next((o=>o?o.target:null))))}function Zy(r,e){const t=M(r),n=t.Os.get(e)||z.min();return t.persistence.runTransaction("Get new document changes","readonly",(s=>t.Ns.getAllFromCollectionGroup(s,e,yg(n,_s),Number.MAX_SAFE_INTEGER))).then((s=>(eI(t,e,s),s)))}function eI(r,e,t){let n=r.Os.get(e)||z.min();t.forEach(((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)})),r.Os.set(e,n)}async function hb(r,e,t,n){const s=M(r);let i=K(),o=it();for(const u of t){const d=e.$s(u.metadata.name);u.document&&(i=i.add(d));const f=e.Us(u);f.setReadTime(e.Ks(u.metadata.readTime)),o=o.insert(d,f)}const a=s.Ns.newChangeBuffer({trackRemovals:!0}),l=await Ps(s,(function(d){return Je($s(J.fromString(`__bundle__/docs/${d}`)))})(n));return s.persistence.runTransaction("Apply bundle documents","readwrite",(u=>Jy(u,a,o).next((d=>(a.apply(u),d))).next((d=>s.Pi.removeMatchingKeysForTargetId(u,l.targetId).next((()=>s.Pi.addMatchingKeys(u,i,l.targetId))).next((()=>s.localDocuments.getLocalViewOfDocuments(u,d.ks,d.qs))).next((()=>d.ks))))))}async function db(r,e,t=K()){const n=await Ps(r,Je(Vc(e.bundledQuery))),s=M(r);return s.persistence.runTransaction("Save named query","readwrite",(i=>{const o=Ne(e.readTime);if(n.snapshotVersion.compareTo(o)>=0)return s.Ii.saveNamedQuery(i,e);const a=n.withResumeToken(be.EMPTY_BYTE_STRING,o);return s.Ms=s.Ms.insert(a.targetId,a),s.Pi.updateTargetData(i,a).next((()=>s.Pi.removeMatchingKeysForTargetId(i,n.targetId))).next((()=>s.Pi.addMatchingKeys(i,t,n.targetId))).next((()=>s.Ii.saveNamedQuery(i,e)))}))}/**
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
 */const tI="firestore_clients";function _m(r,e){return`${tI}_${r}_${e}`}const nI="firestore_mutations";function gm(r,e,t){let n=`${nI}_${r}_${t}`;return e.isAuthenticated()&&(n+=`_${e.uid}`),n}const rI="firestore_targets";function zl(r,e){return`${rI}_${r}_${e}`}/**
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
 */const Pt="SharedClientState";class Ha{constructor(e,t,n,s){this.user=e,this.batchId=t,this.state=n,this.error=s}static Ws(e,t,n){const s=JSON.parse(n);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new D(s.error.code,s.error.message))),o?new Ha(e,t,s.state,i):(Pe(Pt,`Failed to parse mutation state for ID '${t}': ${n}`),null)}Gs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Wi{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Ws(e,t){const n=JSON.parse(t);let s,i=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return i&&n.error&&(i=typeof n.error.message=="string"&&typeof n.error.code=="string",i&&(s=new D(n.error.code,n.error.message))),i?new Wi(e,n.state,s):(Pe(Pt,`Failed to parse target state for ID '${e}': ${t}`),null)}Gs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Qa{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ws(e,t){const n=JSON.parse(t);let s=typeof n=="object"&&n.activeTargetIds instanceof Array,i=Ih();for(let o=0;s&&o<n.activeTargetIds.length;++o)s=vg(n.activeTargetIds[o]),i=i.add(n.activeTargetIds[o]);return s?new Qa(e,i):(Pe(Pt,`Failed to parse client data for instance '${e}': ${t}`),null)}}class Oh{constructor(e,t){this.clientId=e,this.onlineState=t}static Ws(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Oh(t.clientId,t.onlineState):(Pe(Pt,`Failed to parse online state: ${e}`),null)}}class Nu{constructor(){this.activeTargetIds=Ih()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class jl{constructor(e,t,n,s,i){this.window=e,this.Mi=t,this.persistenceKey=n,this.Js=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Hs=this.Ys.bind(this),this.Zs=new Se(j),this.started=!1,this.Xs=[];const o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.eo=_m(this.persistenceKey,this.Js),this.no=(function(l){return`firestore_sequence_number_${l}`})(this.persistenceKey),this.Zs=this.Zs.insert(this.Js,new Nu),this.ro=new RegExp(`^${tI}_${o}_([^_]*)$`),this.io=new RegExp(`^${nI}_${o}_(\\d+)(?:_(.*))?$`),this.so=new RegExp(`^${rI}_${o}_(\\d+)$`),this.oo=(function(l){return`firestore_online_state_${l}`})(this.persistenceKey),this._o=(function(l){return`firestore_bundle_loaded_v2_${l}`})(this.persistenceKey),this.window.addEventListener("storage",this.Hs)}static v(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Ts();for(const n of e){if(n===this.Js)continue;const s=this.getItem(_m(this.persistenceKey,n));if(s){const i=Qa.Ws(n,s);i&&(this.Zs=this.Zs.insert(i.clientId,i))}}this.ao();const t=this.storage.getItem(this.oo);if(t){const n=this.uo(t);n&&this.co(n)}for(const n of this.Xs)this.Ys(n);this.Xs=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.no,JSON.stringify(e))}getAllActiveQueryTargets(){return this.lo(this.Zs)}isActiveQueryTarget(e){let t=!1;return this.Zs.forEach(((n,s)=>{s.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.ho(e,"pending")}updateMutationState(e,t,n){this.ho(e,t,n),this.Po(e)}addLocalQueryTarget(e,t=!0){let n="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(zl(this.persistenceKey,e));if(s){const i=Wi.Ws(e,s);i&&(n=i.state)}}return t&&this.To.zs(e),this.ao(),n}removeLocalQueryTarget(e){this.To.js(e),this.ao()}isLocalQueryTarget(e){return this.To.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(zl(this.persistenceKey,e))}updateQueryState(e,t,n){this.Io(e,t,n)}handleUserChange(e,t,n){t.forEach((s=>{this.Po(s)})),this.currentUser=e,n.forEach((s=>{this.addPendingMutation(s)}))}setOnlineState(e){this.Eo(e)}notifyBundleLoaded(e){this.Ao(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Hs),this.removeItem(this.eo),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return x(Pt,"READ",e,t),t}setItem(e,t){x(Pt,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){x(Pt,"REMOVE",e),this.storage.removeItem(e)}Ys(e){const t=e;if(t.storageArea===this.storage){if(x(Pt,"EVENT",t.key,t.newValue),t.key===this.eo)return void Pe("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Mi.enqueueRetryable((async()=>{if(this.started){if(t.key!==null){if(this.ro.test(t.key)){if(t.newValue==null){const n=this.Ro(t.key);return this.Vo(n,null)}{const n=this.mo(t.key,t.newValue);if(n)return this.Vo(n.clientId,n)}}else if(this.io.test(t.key)){if(t.newValue!==null){const n=this.fo(t.key,t.newValue);if(n)return this.po(n)}}else if(this.so.test(t.key)){if(t.newValue!==null){const n=this.yo(t.key,t.newValue);if(n)return this.wo(n)}}else if(t.key===this.oo){if(t.newValue!==null){const n=this.uo(t.newValue);if(n)return this.co(n)}}else if(t.key===this.no){const n=(function(i){let o=rt.ce;if(i!=null)try{const a=JSON.parse(i);q(typeof a=="number",30636,{So:i}),o=a}catch(a){Pe(Pt,"Failed to read sequence number from WebStorage",a)}return o})(t.newValue);n!==rt.ce&&this.sequenceNumberHandler(n)}else if(t.key===this._o){const n=this.bo(t.newValue);await Promise.all(n.map((s=>this.syncEngine.Do(s))))}}}else this.Xs.push(t)}))}}get To(){return this.Zs.get(this.Js)}ao(){this.setItem(this.eo,this.To.Gs())}ho(e,t,n){const s=new Ha(this.currentUser,e,t,n),i=gm(this.persistenceKey,this.currentUser,e);this.setItem(i,s.Gs())}Po(e){const t=gm(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Eo(e){const t={clientId:this.Js,onlineState:e};this.storage.setItem(this.oo,JSON.stringify(t))}Io(e,t,n){const s=zl(this.persistenceKey,e),i=new Wi(e,t,n);this.setItem(s,i.Gs())}Ao(e){const t=JSON.stringify(Array.from(e));this.setItem(this._o,t)}Ro(e){const t=this.ro.exec(e);return t?t[1]:null}mo(e,t){const n=this.Ro(e);return Qa.Ws(n,t)}fo(e,t){const n=this.io.exec(e),s=Number(n[1]),i=n[2]!==void 0?n[2]:null;return Ha.Ws(new Be(i),s,t)}yo(e,t){const n=this.so.exec(e),s=Number(n[1]);return Wi.Ws(s,t)}uo(e){return Oh.Ws(e)}bo(e){return JSON.parse(e)}async po(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Co(e.batchId,e.state,e.error);x(Pt,`Ignoring mutation for non-active user ${e.user.uid}`)}wo(e){return this.syncEngine.vo(e.targetId,e.state,e.error)}Vo(e,t){const n=t?this.Zs.insert(e,t):this.Zs.remove(e),s=this.lo(this.Zs),i=this.lo(n),o=[],a=[];return i.forEach((l=>{s.has(l)||o.push(l)})),s.forEach((l=>{i.has(l)||a.push(l)})),this.syncEngine.Fo(o,a).then((()=>{this.Zs=n}))}co(e){this.Zs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}lo(e){let t=Ih();return e.forEach(((n,s)=>{t=t.unionWith(s.activeTargetIds)})),t}}class sI{constructor(){this.Mo=new Nu,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,n){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Nu,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class fb{Oo(e){}shutdown(){}}/**
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
 */const ym="ConnectivityMonitor";class Im{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){x(ym,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){x(ym,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ha=null;function ku(){return ha===null?ha=(function(){return 268435456+Math.round(2147483648*Math.random())})():ha++,"0x"+ha.toString(16)}/**
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
 */const Wl="RestConnection",pb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class mb{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${n}/databases/${s}`,this.Wo=this.databaseId.database===oo?`project_id=${n}`:`project_id=${n}&database_id=${s}`}Go(e,t,n,s,i){const o=ku(),a=this.zo(e,t.toUriEncodedString());x(Wl,`Sending RPC '${e}' ${o}:`,a,n);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:u}=new URL(a),d=Zt(u);return this.Jo(e,a,l,n,d).then((f=>(x(Wl,`Received RPC '${e}' ${o}: `,f),f)),(f=>{throw dt(Wl,`RPC '${e}' ${o} failed with error: `,f,"url: ",a,"request:",n),f}))}Ho(e,t,n,s,i,o){return this.Go(e,t,n,s,i)}jo(e,t,n){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ws})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),n&&n.headers.forEach(((s,i)=>e[i]=s))}zo(e,t){const n=pb[e];return`${this.Uo}/v1/${t}:${n}`}terminate(){}}/**
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
 */class _b{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const He="WebChannelConnection";class gb extends mb{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,n,s,i){const o=ku();return new Promise(((a,l)=>{const u=new og;u.setWithCredentials(!0),u.listenOnce(ag.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case _a.NO_ERROR:const f=u.getResponseJson();x(He,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),a(f);break;case _a.TIMEOUT:x(He,`RPC '${e}' ${o} timed out`),l(new D(R.DEADLINE_EXCEEDED,"Request time out"));break;case _a.HTTP_ERROR:const m=u.getStatus();if(x(He,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const S=y?.error;if(S&&S.status&&S.message){const N=(function(F){const G=F.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(G)>=0?G:R.UNKNOWN})(S.status);l(new D(N,S.message))}else l(new D(R.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new D(R.UNAVAILABLE,"Connection failed."));break;default:U(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{x(He,`RPC '${e}' ${o} completed.`)}}));const d=JSON.stringify(s);x(He,`RPC '${e}' ${o} sending request:`,s),u.send(t,"POST",d,n,15)}))}T_(e,t,n){const s=ku(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=ug(),a=lg(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;const d=i.join("");x(He,`Creating RPC '${e}' stream ${s}: ${d}`,l);const f=o.createWebChannel(d,l);this.I_(f);let m=!1,y=!1;const S=new _b({Yo:k=>{y?x(He,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(m||(x(He,`Opening RPC '${e}' stream ${s} transport.`),f.open(),m=!0),x(He,`RPC '${e}' stream ${s} sending:`,k),f.send(k))},Zo:()=>f.close()}),N=(k,F,G)=>{k.listen(F,(B=>{try{G(B)}catch(se){setTimeout((()=>{throw se}),0)}}))};return N(f,xi.EventType.OPEN,(()=>{y||(x(He,`RPC '${e}' stream ${s} transport opened.`),S.o_())})),N(f,xi.EventType.CLOSE,(()=>{y||(y=!0,x(He,`RPC '${e}' stream ${s} transport closed`),S.a_(),this.E_(f))})),N(f,xi.EventType.ERROR,(k=>{y||(y=!0,dt(He,`RPC '${e}' stream ${s} transport errored. Name:`,k.name,"Message:",k.message),S.a_(new D(R.UNAVAILABLE,"The operation could not be completed")))})),N(f,xi.EventType.MESSAGE,(k=>{if(!y){const F=k.data[0];q(!!F,16349);const G=F,B=G?.error||G[0]?.error;if(B){x(He,`RPC '${e}' stream ${s} received error:`,B);const se=B.status;let oe=(function(g){const E=ke[g];if(E!==void 0)return gy(E)})(se),ne=B.message;oe===void 0&&(oe=R.INTERNAL,ne="Unknown error status: "+se+" with message "+B.message),y=!0,S.a_(new D(oe,ne)),f.close()}else x(He,`RPC '${e}' stream ${s} received:`,F),S.u_(F)}})),N(a,cg.STAT_EVENT,(k=>{k.stat===ou.PROXY?x(He,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===ou.NOPROXY&&x(He,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{S.__()}),0),S}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}/**
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
 */function iI(){return typeof window<"u"?window:null}function Sa(){return typeof document<"u"?document:null}/**
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
 */function Mr(r){return new vS(r,!0)}/**
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
 */class Mh{constructor(e,t,n=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=n,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),n=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-n);s>0&&x("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Em="PersistentStream";class oI{constructor(e,t,n,s,i,o,a,l){this.Mi=e,this.S_=n,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Mh(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===R.RESOURCE_EXHAUSTED?(Pe(t.toString()),Pe("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,s])=>{this.D_===t&&this.G_(n,s)}),(n=>{e((()=>{const s=new D(R.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(s)}))}))}G_(e,t){const n=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{n((()=>this.listener.Xo()))})),this.stream.t_((()=>{n((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{n((()=>this.z_(s)))})),this.stream.onMessage((s=>{n((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return x(Em,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(x(Em,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class yb extends oI{constructor(e,t,n,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=bS(this.serializer,e),n=(function(i){if(!("targetChange"in i))return z.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?z.min():o.readTime?Ne(o.readTime):z.min()})(e);return this.listener.H_(t,n)}Y_(e){const t={};t.database=Su(this.serializer),t.addTarget=(function(i,o){let a;const l=o.target;if(a=Ba(l)?{documents:by(i,l)}:{query:xc(i,l).ft},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Ty(i,o.resumeToken);const u=vu(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(z.min())>0){a.readTime=Cs(i,o.snapshotVersion.toTimestamp());const u=vu(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a})(this.serializer,e);const n=CS(this.serializer,e);n&&(t.labels=n),this.q_(t)}Z_(e){const t={};t.database=Su(this.serializer),t.removeTarget=e,this.q_(t)}}class Ib extends oI{constructor(e,t,n,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return q(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,q(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){q(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=RS(e.writeResults,e.commitTime),n=Ne(e.commitTime);return this.listener.na(n,t)}ra(){const e={};e.database=Su(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((n=>ho(this.serializer,n)))};this.q_(t)}}/**
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
 */class Eb{}class Tb extends Eb{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new D(R.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,n,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Go(e,Au(t,n),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new D(R.UNKNOWN,i.toString())}))}Ho(e,t,n,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Ho(e,Au(t,n),s,o,a,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new D(R.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class wb{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
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
 */const Rr="RemoteStore";class vb{constructor(e,t,n,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((o=>{n.enqueueAndForget((async()=>{$n(this)&&(x(Rr,"Restarting streams for network reachability change."),await(async function(l){const u=M(l);u.Ea.add(4),await Qs(u),u.Ra.set("Unknown"),u.Ea.delete(4),await ko(u)})(this))}))})),this.Ra=new wb(n,s)}}async function ko(r){if($n(r))for(const e of r.da)await e(!0)}async function Qs(r){for(const e of r.da)await e(!1)}function Fc(r,e){const t=M(r);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Uh(t)?Fh(t):Js(t).O_()&&Lh(t,e))}function ks(r,e){const t=M(r),n=Js(t);t.Ia.delete(e),n.O_()&&aI(t,e),t.Ia.size===0&&(n.O_()?n.L_():$n(t)&&t.Ra.set("Unknown"))}function Lh(r,e){if(r.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(z.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Js(r).Y_(e)}function aI(r,e){r.Va.Ue(e),Js(r).Z_(e)}function Fh(r){r.Va=new IS({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),Js(r).start(),r.Ra.ua()}function Uh(r){return $n(r)&&!Js(r).x_()&&r.Ia.size>0}function $n(r){return M(r).Ea.size===0}function cI(r){r.Va=void 0}async function Ab(r){r.Ra.set("Online")}async function Sb(r){r.Ia.forEach(((e,t)=>{Lh(r,e)}))}async function bb(r,e){cI(r),Uh(r)?(r.Ra.ha(e),Fh(r)):r.Ra.set("Unknown")}async function Rb(r,e,t){if(r.Ra.set("Online"),e instanceof Ey&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const a of i.targetIds)s.Ia.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.Ia.delete(a),s.Va.removeTarget(a))})(r,e)}catch(n){x(Rr,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Ya(r,n)}else if(e instanceof va?r.Va.Ze(e):e instanceof Iy?r.Va.st(e):r.Va.tt(e),!t.isEqual(z.min()))try{const n=await Yy(r.localStore);t.compareTo(n)>=0&&await(function(i,o){const a=i.Va.Tt(o);return a.targetChanges.forEach(((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.Ia.get(u);d&&i.Ia.set(u,d.withResumeToken(l.resumeToken,o))}})),a.targetMismatches.forEach(((l,u)=>{const d=i.Ia.get(l);if(!d)return;i.Ia.set(l,d.withResumeToken(be.EMPTY_BYTE_STRING,d.snapshotVersion)),aI(i,l);const f=new qt(d.target,l,u,d.sequenceNumber);Lh(i,f)})),i.remoteSyncer.applyRemoteEvent(a)})(r,t)}catch(n){x(Rr,"Failed to raise snapshot:",n),await Ya(r,n)}}async function Ya(r,e,t){if(!jn(e))throw e;r.Ea.add(1),await Qs(r),r.Ra.set("Offline"),t||(t=()=>Yy(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{x(Rr,"Retrying IndexedDB access"),await t(),r.Ea.delete(1),await ko(r)}))}function lI(r,e){return e().catch((t=>Ya(r,t,e)))}async function Ys(r){const e=M(r),t=Ln(e);let n=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Cn;for(;Cb(e);)try{const s=await ub(e.localStore,n);if(s===null){e.Ta.length===0&&t.L_();break}n=s.batchId,Pb(e,s)}catch(s){await Ya(e,s)}uI(e)&&hI(e)}function Cb(r){return $n(r)&&r.Ta.length<10}function Pb(r,e){r.Ta.push(e);const t=Ln(r);t.O_()&&t.X_&&t.ea(e.mutations)}function uI(r){return $n(r)&&!Ln(r).x_()&&r.Ta.length>0}function hI(r){Ln(r).start()}async function Nb(r){Ln(r).ra()}async function kb(r){const e=Ln(r);for(const t of r.Ta)e.ea(t.mutations)}async function Db(r,e,t){const n=r.Ta.shift(),s=vh.from(n,e,t);await lI(r,(()=>r.remoteSyncer.applySuccessfulWrite(s))),await Ys(r)}async function xb(r,e){e&&Ln(r).X_&&await(async function(n,s){if((function(o){return _y(o)&&o!==R.ABORTED})(s.code)){const i=n.Ta.shift();Ln(n).B_(),await lI(n,(()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Ys(n)}})(r,e),uI(r)&&hI(r)}async function Tm(r,e){const t=M(r);t.asyncQueue.verifyOperationInProgress(),x(Rr,"RemoteStore received new credentials");const n=$n(t);t.Ea.add(3),await Qs(t),n&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await ko(t)}async function Du(r,e){const t=M(r);e?(t.Ea.delete(2),await ko(t)):e||(t.Ea.add(2),await Qs(t),t.Ra.set("Unknown"))}function Js(r){return r.ma||(r.ma=(function(t,n,s){const i=M(t);return i.sa(),new yb(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(r.datastore,r.asyncQueue,{Xo:Ab.bind(null,r),t_:Sb.bind(null,r),r_:bb.bind(null,r),H_:Rb.bind(null,r)}),r.da.push((async e=>{e?(r.ma.B_(),Uh(r)?Fh(r):r.Ra.set("Unknown")):(await r.ma.stop(),cI(r))}))),r.ma}function Ln(r){return r.fa||(r.fa=(function(t,n,s){const i=M(t);return i.sa(),new Ib(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:Nb.bind(null,r),r_:xb.bind(null,r),ta:kb.bind(null,r),na:Db.bind(null,r)}),r.da.push((async e=>{e?(r.fa.B_(),await Ys(r)):(await r.fa.stop(),r.Ta.length>0&&(x(Rr,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
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
 */class Bh{constructor(e,t,n,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new je,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,s,i){const o=Date.now()+n,a=new Bh(e,t,o,s,i);return a.start(n),a}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xs(r,e){if(Pe("AsyncQueue",`${e}: ${r}`),jn(r))return new D(R.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class gr{static emptySet(e){return new gr(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||O.comparator(t.key,n.key):(t,n)=>O.comparator(t.key,n.key),this.keyedMap=Vi(),this.sortedSet=new Se(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof gr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new gr;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
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
 */class wm{constructor(){this.ga=new Se(O.comparator)}track(e){const t=e.doc.key,n=this.ga.get(t);n?e.type!==0&&n.type===3?this.ga=this.ga.insert(t,e):e.type===3&&n.type!==1?this.ga=this.ga.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.ga=this.ga.remove(t):e.type===1&&n.type===2?this.ga=this.ga.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):U(63341,{Rt:e,pa:n}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Cr{constructor(e,t,n,s,i,o,a,l,u){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,t,n,s,i){const o=[];return t.forEach((a=>{o.push({type:0,doc:a})})),new Cr(e,t,gr.emptySet(t),o,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&bo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==n[s].type||!t[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
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
 */class Vb{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class Ob{constructor(){this.queries=vm(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,n){const s=M(t),i=s.queries;s.queries=vm(),i.forEach(((o,a)=>{for(const l of a.Sa)l.onError(n)}))})(this,new D(R.ABORTED,"Firestore shutting down"))}}function vm(){return new nn((r=>ty(r)),bo)}async function qh(r,e){const t=M(r);let n=3;const s=e.query;let i=t.queries.get(s);i?!i.ba()&&e.Da()&&(n=2):(i=new Vb,n=e.Da()?0:1);try{switch(n){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const a=Xs(o,`Initialization of query '${Zr(e.query)}' failed`);return void e.onError(a)}t.queries.set(s,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&zh(t)}async function Gh(r,e){const t=M(r),n=e.query;let s=3;const i=t.queries.get(n);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function Mb(r,e){const t=M(r);let n=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const a of o.Sa)a.Fa(s)&&(n=!0);o.wa=s}}n&&zh(t)}function Lb(r,e,t){const n=M(r),s=n.queries.get(e);if(s)for(const i of s.Sa)i.onError(t);n.queries.delete(e)}function zh(r){r.Ca.forEach((e=>{e.next()}))}var xu,Am;(Am=xu||(xu={})).Ma="default",Am.Cache="cache";class jh{constructor(e,t,n){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(e){if(!this.options.includeMetadataChanges){const n=[];for(const s of e.docChanges)s.type!==3&&n.push(s);e=new Cr(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const n=t!=="Offline";return(!this.options.qa||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Cr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==xu.Cache}}/**
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
 */class dI{constructor(e,t){this.Qa=e,this.byteLength=t}$a(){return"metadata"in this.Qa}}/**
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
 */class Sm{constructor(e){this.serializer=e}$s(e){return Ot(this.serializer,e)}Us(e){return e.metadata.exists?Dc(this.serializer,e.document,!1):ye.newNoDocument(this.$s(e.metadata.name),this.Ks(e.metadata.readTime))}Ks(e){return Ne(e)}}class Wh{constructor(e,t){this.Ua=e,this.serializer=t,this.Ka=[],this.Wa=[],this.collectionGroups=new Set,this.progress=fI(e)}get queries(){return this.Ka}get documents(){return this.Wa}Ga(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Qa.namedQuery)this.Ka.push(e.Qa.namedQuery);else if(e.Qa.documentMetadata){this.Wa.push({metadata:e.Qa.documentMetadata}),e.Qa.documentMetadata.exists||++t;const n=J.fromString(e.Qa.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.Qa.document&&(this.Wa[this.Wa.length-1].document=e.Qa.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,{...this.progress}):null}za(e){const t=new Map,n=new Sm(this.serializer);for(const s of e)if(s.metadata.queries){const i=n.$s(s.metadata.name);for(const o of s.metadata.queries){const a=(t.get(o)||K()).add(i);t.set(o,a)}}return t}async ja(e){const t=await hb(e,new Sm(this.serializer),this.Wa,this.Ua.id),n=this.za(this.documents);for(const s of this.Ka)await db(e,s,n.get(s.name));return this.progress.taskState="Success",{progress:this.progress,Ja:this.collectionGroups,Ha:t}}}function fI(r){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:r.totalDocuments,totalBytes:r.totalBytes}}/**
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
 */class pI{constructor(e){this.key=e}}class mI{constructor(e){this.key=e}}class _I{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=K(),this.mutatedKeys=K(),this.eu=ry(e),this.tu=new gr(this.eu)}get nu(){return this.Ya}ru(e,t){const n=t?t.iu:new wm,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((d,f)=>{const m=s.get(d),y=Ro(this.query,f)?f:null,S=!!m&&this.mutatedKeys.has(m.key),N=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let k=!1;m&&y?m.data.isEqual(y.data)?S!==N&&(n.track({type:3,doc:y}),k=!0):this.su(m,y)||(n.track({type:2,doc:y}),k=!0,(l&&this.eu(y,l)>0||u&&this.eu(y,u)<0)&&(a=!0)):!m&&y?(n.track({type:0,doc:y}),k=!0):m&&!y&&(n.track({type:1,doc:m}),k=!0,(l||u)&&(a=!0)),k&&(y?(o=o.add(y),i=N?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),n.track({type:1,doc:d})}return{tu:o,iu:n,Cs:a,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((d,f)=>(function(y,S){const N=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U(20277,{Rt:k})}};return N(y)-N(S)})(d.type,f.type)||this.eu(d.doc,f.doc))),this.ou(n),s=s??!1;const a=t&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,u=l!==this.Za;return this.Za=l,o.length!==0||u?{snapshot:new Cr(this.query,e.tu,i,o,e.mutatedKeys,l===0,u,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new wm,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=K(),this.tu.forEach((n=>{this.uu(n.key)&&(this.Xa=this.Xa.add(n.key))}));const t=[];return e.forEach((n=>{this.Xa.has(n)||t.push(new mI(n))})),this.Xa.forEach((n=>{e.has(n)||t.push(new pI(n))})),t}cu(e){this.Ya=e.Qs,this.Xa=K();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Cr.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Kn="SyncEngine";class Fb{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Ub{constructor(e){this.key=e,this.hu=!1}}class Bb{constructor(e,t,n,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new nn((a=>ty(a)),bo),this.Iu=new Map,this.Eu=new Set,this.du=new Se(O.comparator),this.Au=new Map,this.Ru=new Ph,this.Vu={},this.mu=new Map,this.fu=br.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function qb(r,e,t=!0){const n=Uc(r);let s;const i=n.Tu.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await gI(n,e,t,!0),s}async function Gb(r,e){const t=Uc(r);await gI(t,e,!0,!1)}async function gI(r,e,t,n){const s=await Ps(r.localStore,Je(e)),i=s.targetId,o=r.sharedClientState.addLocalQueryTarget(i,t);let a;return n&&(a=await $h(r,e,i,o==="current",s.resumeToken)),r.isPrimaryClient&&t&&Fc(r.remoteStore,s),a}async function $h(r,e,t,n,s){r.pu=(f,m,y)=>(async function(N,k,F,G){let B=k.view.ru(F);B.Cs&&(B=await Ka(N.localStore,k.query,!1).then((({documents:T})=>k.view.ru(T,B))));const se=G&&G.targetChanges.get(k.targetId),oe=G&&G.targetMismatches.get(k.targetId)!=null,ne=k.view.applyChanges(B,N.isPrimaryClient,se,oe);return Vu(N,k.targetId,ne.au),ne.snapshot})(r,f,m,y);const i=await Ka(r.localStore,e,!0),o=new _I(e,i.Qs),a=o.ru(i.documents),l=No.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",s),u=o.applyChanges(a,r.isPrimaryClient,l);Vu(r,t,u.au);const d=new Fb(e,t,o);return r.Tu.set(e,d),r.Iu.has(t)?r.Iu.get(t).push(e):r.Iu.set(t,[e]),u.snapshot}async function zb(r,e,t){const n=M(r),s=n.Tu.get(e),i=n.Iu.get(s.targetId);if(i.length>1)return n.Iu.set(s.targetId,i.filter((o=>!bo(o,e)))),void n.Tu.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Ns(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),t&&ks(n.remoteStore,s.targetId),Ds(n,s.targetId)})).catch(zn)):(Ds(n,s.targetId),await Ns(n.localStore,s.targetId,!0))}async function jb(r,e){const t=M(r),n=t.Tu.get(e),s=t.Iu.get(n.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),ks(t.remoteStore,n.targetId))}async function Wb(r,e,t){const n=Yh(r);try{const s=await(function(o,a){const l=M(o),u=ce.now(),d=a.reduce(((y,S)=>y.add(S.key)),K());let f,m;return l.persistence.runTransaction("Locally write mutations","readwrite",(y=>{let S=it(),N=K();return l.Ns.getEntries(y,d).next((k=>{S=k,S.forEach(((F,G)=>{G.isValidDocument()||(N=N.add(F))}))})).next((()=>l.localDocuments.getOverlayedDocuments(y,S))).next((k=>{f=k;const F=[];for(const G of a){const B=_S(G,f.get(G.key).overlayedDocument);B!=null&&F.push(new rn(G.key,B,jg(B.value.mapValue),Te.exists(!0)))}return l.mutationQueue.addMutationBatch(y,u,F,a)})).next((k=>{m=k;const F=k.applyToLocalDocumentSet(f,N);return l.documentOverlayCache.saveOverlays(y,k.batchId,F)}))})).then((()=>({batchId:m.batchId,changes:iy(f)})))})(n.localStore,e);n.sharedClientState.addPendingMutation(s.batchId),(function(o,a,l){let u=o.Vu[o.currentUser.toKey()];u||(u=new Se(j)),u=u.insert(a,l),o.Vu[o.currentUser.toKey()]=u})(n,s.batchId,t),await sn(n,s.changes),await Ys(n.remoteStore)}catch(s){const i=Xs(s,"Failed to persist write");t.reject(i)}}async function yI(r,e){const t=M(r);try{const n=await lb(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=t.Au.get(i);o&&(q(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?q(o.hu,14607):s.removedDocuments.size>0&&(q(o.hu,42227),o.hu=!1))})),await sn(t,n,e)}catch(n){await zn(n)}}function bm(r,e,t){const n=M(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const s=[];n.Tu.forEach(((i,o)=>{const a=o.view.va(e);a.snapshot&&s.push(a.snapshot)})),(function(o,a){const l=M(o);l.onlineState=a;let u=!1;l.queries.forEach(((d,f)=>{for(const m of f.Sa)m.va(a)&&(u=!0)})),u&&zh(l)})(n.eventManager,e),s.length&&n.Pu.H_(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function $b(r,e,t){const n=M(r);n.sharedClientState.updateQueryState(e,"rejected",t);const s=n.Au.get(e),i=s&&s.key;if(i){let o=new Se(O.comparator);o=o.insert(i,ye.newNoDocument(i,z.min()));const a=K().add(i),l=new Po(z.min(),new Map,new Se(j),o,a);await yI(n,l),n.du=n.du.remove(i),n.Au.delete(e),Qh(n)}else await Ns(n.localStore,e,!1).then((()=>Ds(n,e,t))).catch(zn)}async function Kb(r,e){const t=M(r),n=e.batch.batchId;try{const s=await cb(t.localStore,e);Hh(t,n,null),Kh(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await sn(t,s)}catch(s){await zn(s)}}async function Hb(r,e,t){const n=M(r);try{const s=await(function(o,a){const l=M(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let d;return l.mutationQueue.lookupMutationBatch(u,a).next((f=>(q(f!==null,37113),d=f.keys(),l.mutationQueue.removeMutationBatch(u,f)))).next((()=>l.mutationQueue.performConsistencyCheck(u))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(u,d,a))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d))).next((()=>l.localDocuments.getDocuments(u,d)))}))})(n.localStore,e);Hh(n,e,t),Kh(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await sn(n,s)}catch(s){await zn(s)}}async function Qb(r,e){const t=M(r);$n(t.remoteStore)||x(Kn,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const n=await(function(o){const a=M(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(l=>a.mutationQueue.getHighestUnacknowledgedBatchId(l)))})(t.localStore);if(n===Cn)return void e.resolve();const s=t.mu.get(n)||[];s.push(e),t.mu.set(n,s)}catch(n){const s=Xs(n,"Initialization of waitForPendingWrites() operation failed");e.reject(s)}}function Kh(r,e){(r.mu.get(e)||[]).forEach((t=>{t.resolve()})),r.mu.delete(e)}function Hh(r,e,t){const n=M(r);let s=n.Vu[n.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),n.Vu[n.currentUser.toKey()]=s}}function Ds(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Iu.get(e))r.Tu.delete(n),t&&r.Pu.yu(n,t);r.Iu.delete(e),r.isPrimaryClient&&r.Ru.jr(e).forEach((n=>{r.Ru.containsKey(n)||II(r,n)}))}function II(r,e){r.Eu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(ks(r.remoteStore,t),r.du=r.du.remove(e),r.Au.delete(t),Qh(r))}function Vu(r,e,t){for(const n of t)n instanceof pI?(r.Ru.addReference(n.key,e),Yb(r,n)):n instanceof mI?(x(Kn,"Document no longer in limbo: "+n.key),r.Ru.removeReference(n.key,e),r.Ru.containsKey(n.key)||II(r,n.key)):U(19791,{wu:n})}function Yb(r,e){const t=e.key,n=t.path.canonicalString();r.du.get(t)||r.Eu.has(n)||(x(Kn,"New document in limbo: "+t),r.Eu.add(n),Qh(r))}function Qh(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Eu.values().next().value;r.Eu.delete(e);const t=new O(J.fromString(e)),n=r.fu.next();r.Au.set(n,new Ub(t)),r.du=r.du.insert(t,n),Fc(r.remoteStore,new qt(Je($s(t.path)),n,"TargetPurposeLimboResolution",rt.ce))}}async function sn(r,e,t){const n=M(r),s=[],i=[],o=[];n.Tu.isEmpty()||(n.Tu.forEach(((a,l)=>{o.push(n.pu(l,e,t).then((u=>{if((u||t)&&n.isPrimaryClient){const d=u?!u.fromCache:t?.targetChanges.get(l.targetId)?.current;n.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(u){s.push(u);const d=xh.As(l.targetId,u);i.push(d)}})))})),await Promise.all(o),n.Pu.H_(s),await(async function(l,u){const d=M(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(f=>A.forEach(u,(m=>A.forEach(m.Es,(y=>d.persistence.referenceDelegate.addReference(f,m.targetId,y))).next((()=>A.forEach(m.ds,(y=>d.persistence.referenceDelegate.removeReference(f,m.targetId,y)))))))))}catch(f){if(!jn(f))throw f;x(Vh,"Failed to update sequence numbers: "+f)}for(const f of u){const m=f.targetId;if(!f.fromCache){const y=d.Ms.get(m),S=y.snapshotVersion,N=y.withLastLimboFreeSnapshotVersion(S);d.Ms=d.Ms.insert(m,N)}}})(n.localStore,i))}async function Jb(r,e){const t=M(r);if(!t.currentUser.isEqual(e)){x(Kn,"User change. New user:",e.toKey());const n=await Qy(t.localStore,e);t.currentUser=e,(function(i,o){i.mu.forEach((a=>{a.forEach((l=>{l.reject(new D(R.CANCELLED,o))}))})),i.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await sn(t,n.Ls)}}function Xb(r,e){const t=M(r),n=t.Au.get(e);if(n&&n.hu)return K().add(n.key);{let s=K();const i=t.Iu.get(e);if(!i)return s;for(const o of i){const a=t.Tu.get(o);s=s.unionWith(a.view.nu)}return s}}async function Zb(r,e){const t=M(r),n=await Ka(t.localStore,e.query,!0),s=e.view.cu(n);return t.isPrimaryClient&&Vu(t,e.targetId,s.au),s}async function eR(r,e){const t=M(r);return Zy(t.localStore,e).then((n=>sn(t,n)))}async function tR(r,e,t,n){const s=M(r),i=await(function(a,l){const u=M(a),d=M(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",(f=>d.er(f,l).next((m=>m?u.localDocuments.getDocuments(f,m):A.resolve(null)))))})(s.localStore,e);i!==null?(t==="pending"?await Ys(s.remoteStore):t==="acknowledged"||t==="rejected"?(Hh(s,e,n||null),Kh(s,e),(function(a,l){M(M(a).mutationQueue).ir(l)})(s.localStore,e)):U(6720,"Unknown batchState",{Su:t}),await sn(s,i)):x(Kn,"Cannot apply mutation batch with id: "+e)}async function nR(r,e){const t=M(r);if(Uc(t),Yh(t),e===!0&&t.gu!==!0){const n=t.sharedClientState.getAllActiveQueryTargets(),s=await Rm(t,n.toArray());t.gu=!0,await Du(t.remoteStore,!0);for(const i of s)Fc(t.remoteStore,i)}else if(e===!1&&t.gu!==!1){const n=[];let s=Promise.resolve();t.Iu.forEach(((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?n.push(o):s=s.then((()=>(Ds(t,o),Ns(t.localStore,o,!0)))),ks(t.remoteStore,o)})),await s,await Rm(t,n),(function(o){const a=M(o);a.Au.forEach(((l,u)=>{ks(a.remoteStore,u)})),a.Ru.Jr(),a.Au=new Map,a.du=new Se(O.comparator)})(t),t.gu=!1,await Du(t.remoteStore,!1)}}async function Rm(r,e,t){const n=M(r),s=[],i=[];for(const o of e){let a;const l=n.Iu.get(o);if(l&&l.length!==0){a=await Ps(n.localStore,Je(l[0]));for(const u of l){const d=n.Tu.get(u),f=await Zb(n,d);f.snapshot&&i.push(f.snapshot)}}else{const u=await Xy(n.localStore,o);a=await Ps(n.localStore,u),await $h(n,EI(u),o,!1,a.resumeToken)}s.push(a)}return n.Pu.H_(i),s}function EI(r){return Xg(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function rR(r){return(function(t){return M(M(t).persistence).Ts()})(M(r).localStore)}async function sR(r,e,t,n){const s=M(r);if(s.gu)return void x(Kn,"Ignoring unexpected query state notification.");const i=s.Iu.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await Zy(s.localStore,ny(i[0])),a=Po.createSynthesizedRemoteEventForCurrentChange(e,t==="current",be.EMPTY_BYTE_STRING);await sn(s,o,a);break}case"rejected":await Ns(s.localStore,e,!0),Ds(s,e,n);break;default:U(64155,t)}}async function iR(r,e,t){const n=Uc(r);if(n.gu){for(const s of e){if(n.Iu.has(s)&&n.sharedClientState.isActiveQueryTarget(s)){x(Kn,"Adding an already active target "+s);continue}const i=await Xy(n.localStore,s),o=await Ps(n.localStore,i);await $h(n,EI(i),o.targetId,!1,o.resumeToken),Fc(n.remoteStore,o)}for(const s of t)n.Iu.has(s)&&await Ns(n.localStore,s,!1).then((()=>{ks(n.remoteStore,s),Ds(n,s)})).catch(zn)}}function Uc(r){const e=M(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=yI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Xb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$b.bind(null,e),e.Pu.H_=Mb.bind(null,e.eventManager),e.Pu.yu=Lb.bind(null,e.eventManager),e}function Yh(r){const e=M(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Kb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Hb.bind(null,e),e}function oR(r,e,t){const n=M(r);(async function(i,o,a){try{const l=await o.getMetadata();if(await(function(y,S){const N=M(y),k=Ne(S.createTime);return N.persistence.runTransaction("hasNewerBundle","readonly",(F=>N.Ii.getBundleMetadata(F,S.id))).then((F=>!!F&&F.createTime.compareTo(k)>=0))})(i.localStore,l))return await o.close(),a._completeWith((function(y){return{taskState:"Success",documentsLoaded:y.totalDocuments,bytesLoaded:y.totalBytes,totalDocuments:y.totalDocuments,totalBytes:y.totalBytes}})(l)),Promise.resolve(new Set);a._updateProgress(fI(l));const u=new Wh(l,o.serializer);let d=await o.bu();for(;d;){const m=await u.Ga(d);m&&a._updateProgress(m),d=await o.bu()}const f=await u.ja(i.localStore);return await sn(i,f.Ha,void 0),await(function(y,S){const N=M(y);return N.persistence.runTransaction("Save bundle","readwrite",(k=>N.Ii.saveBundleMetadata(k,S)))})(i.localStore,l),a._completeWith(f.progress),Promise.resolve(f.Ja)}catch(l){return dt(Kn,`Loading bundle failed with ${l}`),a._failWith(l),Promise.resolve(new Set)}})(n,e,t).then((s=>{n.sharedClientState.notifyBundleLoaded(s)}))}class xs{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Mr(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Hy(this.persistence,new Ky,e.initialUser,this.serializer)}Cu(e){return new Nh(Lc.mi,this.serializer)}Du(e){return new sI}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}xs.provider={build:()=>new xs};class Jh extends xs{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){q(this.persistence.referenceDelegate instanceof $a,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new qy(n,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Qe.withCacheSize(this.cacheSizeBytes):Qe.DEFAULT;return new Nh((n=>$a.mi(n,t)),this.serializer)}}class Xh extends xs{constructor(e,t,n){super(),this.xu=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.xu.initialize(this,e),await Yh(this.xu.syncEngine),await Ys(this.xu.remoteStore),await this.persistence.Ji((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}vu(e){return Hy(this.persistence,new Ky,e.initialUser,this.serializer)}Fu(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new qy(n,e.asyncQueue,t)}Mu(e,t){const n=new EA(t,this.persistence);return new IA(e.asyncQueue,n)}Cu(e){const t=Dh(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?Qe.withCacheSize(this.cacheSizeBytes):Qe.DEFAULT;return new kh(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,iI(),Sa(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Du(e){return new sI}}class TI extends Xh{constructor(e,t){super(e,t,!1),this.xu=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.xu.syncEngine;this.sharedClientState instanceof jl&&(this.sharedClientState.syncEngine={Co:tR.bind(null,t),vo:sR.bind(null,t),Fo:iR.bind(null,t),Ts:rR.bind(null,t),Do:eR.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ji((async n=>{await nR(this.xu.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())}))}Du(e){const t=iI();if(!jl.v(t))throw new D(R.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Dh(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new jl(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class Fn{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>bm(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Jb.bind(null,this.syncEngine),await Du(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Ob})()}createDatastore(e){const t=Mr(e.databaseInfo.databaseId),n=(function(i){return new gb(i)})(e.databaseInfo);return(function(i,o,a,l){return new Tb(i,o,a,l)})(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return(function(n,s,i,o,a){return new vb(n,s,i,o,a)})(this.localStore,this.datastore,e.asyncQueue,(t=>bm(this.syncEngine,t,0)),(function(){return Im.v()?new Im:new fb})())}createSyncEngine(e,t){return(function(s,i,o,a,l,u,d){const f=new Bb(s,i,o,a,l,u);return d&&(f.gu=!0),f})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const n=M(t);x(Rr,"RemoteStore shutting down."),n.Ea.add(5),await Qs(n),n.Aa.shutdown(),n.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Fn.provider={build:()=>new Fn};function Cm(r,e=10240){let t=0;return{async read(){if(t<r.byteLength){const n={value:r.slice(t,t+e),done:!1};return t+=e,n}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class Bc{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Pe("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */class aR{constructor(e,t){this.Bu=e,this.serializer=t,this.metadata=new je,this.buffer=new Uint8Array,this.Lu=(function(){return new TextDecoder("utf-8")})(),this.ku().then((n=>{n&&n.$a()?this.metadata.resolve(n.Qa.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(n?.Qa)}`))}),(n=>this.metadata.reject(n)))}close(){return this.Bu.cancel()}async getMetadata(){return this.metadata.promise}async bu(){return await this.getMetadata(),this.ku()}async ku(){const e=await this.qu();if(e===null)return null;const t=this.Lu.decode(e),n=Number(t);isNaN(n)&&this.Qu(`length string (${t}) is not valid number`);const s=await this.$u(n);return new dI(JSON.parse(s),e.length+n)}Uu(){return this.buffer.findIndex((e=>e===123))}async qu(){for(;this.Uu()<0&&!await this.Ku(););if(this.buffer.length===0)return null;const e=this.Uu();e<0&&this.Qu("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async $u(e){for(;this.buffer.length<e;)await this.Ku()&&this.Qu("Reached the end of bundle when more is expected.");const t=this.Lu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Qu(e){throw this.Bu.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ku(){const e=await this.Bu.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class cR{constructor(e,t){this.bundleData=e,this.serializer=t,this.cursor=0,this.elements=[];let n=this.bu();if(!n||!n.$a())throw new Error(`The first element of the bundle is not a metadata object, it is
         ${JSON.stringify(n?.Qa)}`);this.metadata=n;do n=this.bu(),n!==null&&this.elements.push(n);while(n!==null)}getMetadata(){return this.metadata}Wu(){return this.elements}bu(){if(this.cursor===this.bundleData.length)return null;const e=this.qu(),t=this.$u(e);return new dI(JSON.parse(t),e)}$u(e){if(this.cursor+e>this.bundleData.length)throw new D(R.INTERNAL,"Reached the end of bundle when more is expected.");return this.bundleData.slice(this.cursor,this.cursor+=e)}qu(){const e=this.cursor;let t=this.cursor;for(;t<this.bundleData.length;){if(this.bundleData[t]==="{"){if(t===e)throw new Error("First character is a bracket and not a number");return this.cursor=t,Number(this.bundleData.slice(e,t))}t++}throw new Error("Reached the end of bundle when more is expected.")}}/**
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
 */class lR{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new D(R.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await(async function(s,i){const o=M(s),a={documents:i.map((f=>uo(o.serializer,f)))},l=await o.Ho("BatchGetDocuments",o.serializer.databaseId,J.emptyPath(),a,i.length),u=new Map;l.forEach((f=>{const m=SS(o.serializer,f);u.set(m.key.toString(),m)}));const d=[];return i.forEach((f=>{const m=u.get(f.toString());q(!!m,55234,{key:f}),d.push(m)})),d})(this.datastore,e);return t.forEach((n=>this.recordVersion(n))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(n){this.lastTransactionError=n}this.writtenDocs.add(e.toString())}delete(e){this.write(new Hs(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((t,n)=>{const s=O.fromPath(n);this.mutations.push(new Th(s,this.precondition(s)))})),await(async function(n,s){const i=M(n),o={writes:s.map((a=>ho(i.serializer,a)))};await i.Go("Commit",i.serializer.databaseId,J.emptyPath(),o)})(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw U(50498,{Gu:e.constructor.name});t=z.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new D(R.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(z.min())?Te.exists(!1):Te.updateTime(t):Te.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(z.min()))throw new D(R.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Te.updateTime(t)}return Te.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class uR{constructor(e,t,n,s,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=s,this.deferred=i,this.zu=n.maxAttempts,this.M_=new Mh(this.asyncQueue,"transaction_retry")}ju(){this.zu-=1,this.Ju()}Ju(){this.M_.p_((async()=>{const e=new lR(this.datastore),t=this.Hu(e);t&&t.then((n=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(n)})).catch((s=>{this.Yu(s)}))))})).catch((n=>{this.Yu(n)}))}))}Hu(e){try{const t=this.updateFunction(e);return!vo(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Yu(e){this.zu>0&&this.Zu(e)?(this.zu-=1,this.asyncQueue.enqueueAndForget((()=>(this.Ju(),Promise.resolve())))):this.deferred.reject(e)}Zu(e){if(e?.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!_y(t)}return!1}}/**
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
 */const Un="FirestoreClient";class hR{constructor(e,t,n,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=s,this.user=Be.UNAUTHENTICATED,this.clientId=Tc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,(async o=>{x(Un,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(n,(o=>(x(Un,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new je;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Xs(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function $l(r,e){r.asyncQueue.verifyOperationInProgress(),x(Un,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener((async s=>{n.isEqual(s)||(await Qy(e.localStore,s),n=s)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function Pm(r,e){r.asyncQueue.verifyOperationInProgress();const t=await Zh(r);x(Un,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((n=>Tm(e.remoteStore,n))),r.setAppCheckTokenChangeListener(((n,s)=>Tm(e.remoteStore,s))),r._onlineComponents=e}async function Zh(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){x(Un,"Using user provided OfflineComponentProvider");try{await $l(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===R.FAILED_PRECONDITION||s.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;dt("Error using user provided cache. Falling back to memory cache: "+t),await $l(r,new xs)}}else x(Un,"Using default OfflineComponentProvider"),await $l(r,new Jh(void 0));return r._offlineComponents}async function qc(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(x(Un,"Using user provided OnlineComponentProvider"),await Pm(r,r._uninitializedComponentsProvider._online)):(x(Un,"Using default OnlineComponentProvider"),await Pm(r,new Fn))),r._onlineComponents}function wI(r){return Zh(r).then((e=>e.persistence))}function Zs(r){return Zh(r).then((e=>e.localStore))}function vI(r){return qc(r).then((e=>e.remoteStore))}function ed(r){return qc(r).then((e=>e.syncEngine))}function AI(r){return qc(r).then((e=>e.datastore))}async function Vs(r){const e=await qc(r),t=e.eventManager;return t.onListen=qb.bind(null,e.syncEngine),t.onUnlisten=zb.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Gb.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=jb.bind(null,e.syncEngine),t}function dR(r){return r.asyncQueue.enqueue((async()=>{const e=await wI(r),t=await vI(r);return e.setNetworkEnabled(!0),(function(s){const i=M(s);return i.Ea.delete(0),ko(i)})(t)}))}function fR(r){return r.asyncQueue.enqueue((async()=>{const e=await wI(r),t=await vI(r);return e.setNetworkEnabled(!1),(async function(s){const i=M(s);i.Ea.add(0),await Qs(i),i.Ra.set("Offline")})(t)}))}function pR(r,e){const t=new je;return r.asyncQueue.enqueueAndForget((async()=>(async function(s,i,o){try{const a=await(function(u,d){const f=M(u);return f.persistence.runTransaction("read document","readonly",(m=>f.localDocuments.getDocument(m,d)))})(s,i);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new D(R.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const l=Xs(a,`Failed to get document '${i} from cache`);o.reject(l)}})(await Zs(r),e,t))),t.promise}function SI(r,e,t={}){const n=new je;return r.asyncQueue.enqueueAndForget((async()=>(function(i,o,a,l,u){const d=new Bc({next:m=>{d.Nu(),o.enqueueAndForget((()=>Gh(i,f)));const y=m.docs.has(a);!y&&m.fromCache?u.reject(new D(R.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&m.fromCache&&l&&l.source==="server"?u.reject(new D(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new jh($s(a.path),d,{includeMetadataChanges:!0,qa:!0});return qh(i,f)})(await Vs(r),r.asyncQueue,e,t,n))),n.promise}function mR(r,e){const t=new je;return r.asyncQueue.enqueueAndForget((async()=>(async function(s,i,o){try{const a=await Ka(s,i,!0),l=new _I(i,a.Qs),u=l.ru(a.documents),d=l.applyChanges(u,!1);o.resolve(d.snapshot)}catch(a){const l=Xs(a,`Failed to execute query '${i} against cache`);o.reject(l)}})(await Zs(r),e,t))),t.promise}function bI(r,e,t={}){const n=new je;return r.asyncQueue.enqueueAndForget((async()=>(function(i,o,a,l,u){const d=new Bc({next:m=>{d.Nu(),o.enqueueAndForget((()=>Gh(i,f))),m.fromCache&&l.source==="server"?u.reject(new D(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new jh(a,d,{includeMetadataChanges:!0,qa:!0});return qh(i,f)})(await Vs(r),r.asyncQueue,e,t,n))),n.promise}function _R(r,e,t){const n=new je;return r.asyncQueue.enqueueAndForget((async()=>{try{const s=await AI(r);n.resolve((async function(o,a,l){const u=M(o),{request:d,gt:f,parent:m}=Ry(u.serializer,Zg(a),l);u.connection.$o||delete d.parent;const y=(await u.Ho("RunAggregationQuery",u.serializer.databaseId,m,d,1)).filter((N=>!!N.result));q(y.length===1,64727);const S=y[0].result?.aggregateFields;return Object.keys(S).reduce(((N,k)=>(N[f[k]]=S[k],N)),{})})(s,e,t))}catch(s){n.reject(s)}})),n.promise}function gR(r,e){const t=new Bc(e);return r.asyncQueue.enqueueAndForget((async()=>(function(s,i){M(s).Ca.add(i),i.next()})(await Vs(r),t))),()=>{t.Nu(),r.asyncQueue.enqueueAndForget((async()=>(function(s,i){M(s).Ca.delete(i)})(await Vs(r),t)))}}function yR(r,e,t,n){const s=(function(o,a){let l;return l=typeof o=="string"?yy().encode(o):o,(function(d,f){return new aR(d,f)})((function(d,f){if(d instanceof Uint8Array)return Cm(d,f);if(d instanceof ArrayBuffer)return Cm(new Uint8Array(d),f);if(d instanceof ReadableStream)return d.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")})(l),a)})(t,Mr(e));r.asyncQueue.enqueueAndForget((async()=>{oR(await ed(r),s,n)}))}function IR(r,e){return r.asyncQueue.enqueue((async()=>(function(n,s){const i=M(n);return i.persistence.runTransaction("Get named query","readonly",(o=>i.Ii.getNamedQuery(o,s)))})(await Zs(r),e)))}function RI(r,e){return(function(n,s){return new cR(n,s)})(r,e)}function ER(r,e){return r.asyncQueue.enqueue((async()=>(async function(n,s){const i=M(n),o=i.indexManager,a=[];return i.persistence.runTransaction("Configure indexes","readwrite",(l=>o.getFieldIndexes(l).next((u=>(function(f,m,y,S,N){f=[...f],m=[...m],f.sort(y),m.sort(y);const k=f.length,F=m.length;let G=0,B=0;for(;G<F&&B<k;){const se=y(f[B],m[G]);se<0?N(f[B++]):se>0?S(m[G++]):(G++,B++)}for(;G<F;)S(m[G++]);for(;B<k;)N(f[B++])})(u,s,mA,(d=>{a.push(o.addFieldIndex(l,d))}),(d=>{a.push(o.deleteFieldIndex(l,d))})))).next((()=>A.waitFor(a)))))})(await Zs(r),e)))}function TR(r,e){return r.asyncQueue.enqueue((async()=>(function(n,s){M(n).Fs.Vs=s})(await Zs(r),e)))}function wR(r){return r.asyncQueue.enqueue((async()=>(function(t){const n=M(t),s=n.indexManager;return n.persistence.runTransaction("Delete All Indexes","readwrite",(i=>s.deleteAllFieldIndexes(i)))})(await Zs(r))))}/**
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
 */function CI(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const Nm=new Map;/**
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
 */const PI="firestore.googleapis.com",km=!0;class Dm{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new D(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=PI,this.ssl=km}else this.host=e.host,this.ssl=e.ssl??km;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=My;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<By)throw new D(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}mg("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=CI(e.experimentalLongPollingOptions??{}),(function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new D(R.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new D(R.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new D(R.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(n,s){return n.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Do{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Dm({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new D(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new D(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Dm(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new fg;switch(n.type){case"firstParty":return new cA(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new D(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const n=Nm.get(t);n&&(x("ComponentProvider","Removing Datastore"),Nm.delete(t),n.terminate())})(this),Promise.resolve()}}function NI(r,e,t,n={}){r=Z(r,Do);const s=Zt(e),i=r._getSettings(),o={...i,emulatorOptions:r._getEmulatorOptions()},a=`${e}:${t}`;s&&(yc(`https://${a}`),rh("Firestore",!0)),i.host!==PI&&i.host!==a&&dt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:a,ssl:s,emulatorOptions:n};if(!_t(l,o)&&(r._setSettings(l),n.mockUserToken)){let u,d;if(typeof n.mockUserToken=="string")u=n.mockUserToken,d=Be.MOCK_USER;else{u=K_(n.mockUserToken,r._app?.options.projectId);const f=n.mockUserToken.sub||n.mockUserToken.user_id;if(!f)throw new D(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new Be(f)}r._authCredentials=new iA(new dg(u,d))}}/**
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
 */class Oe{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Oe(this.firestore,e,this._query)}}class ue{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ue(this.firestore,e,this._key)}toJSON(){return{type:ue._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(Or(t,ue._jsonSchema))return new ue(e,n||null,new O(J.fromString(t.referencePath)))}}ue._jsonSchemaVersion="firestore/documentReference/1.0",ue._jsonSchema={type:De("string",ue._jsonSchemaVersion),referencePath:De("string")};class wt extends Oe{constructor(e,t,n){super(e,t,$s(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ue(this.firestore,null,new O(e))}withConverter(e){return new wt(this.firestore,e,this._path)}}function vR(r,e,...t){if(r=ie(r),ch("collection","path",e),r instanceof Do){const n=J.fromString(e,...t);return Ep(n),new wt(r,null,n)}{if(!(r instanceof ue||r instanceof wt))throw new D(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(J.fromString(e,...t));return Ep(n),new wt(r.firestore,null,n)}}function AR(r,e){if(r=Z(r,Do),ch("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new D(R.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Oe(r,null,(function(n){return new tn(J.emptyPath(),n)})(e))}function kI(r,e,...t){if(r=ie(r),arguments.length===1&&(e=Tc.newId()),ch("doc","path",e),r instanceof Do){const n=J.fromString(e,...t);return Ip(n),new ue(r,null,new O(n))}{if(!(r instanceof ue||r instanceof wt))throw new D(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(J.fromString(e,...t));return Ip(n),new ue(r.firestore,r instanceof wt?r.converter:null,new O(n))}}function SR(r,e){return r=ie(r),e=ie(e),(r instanceof ue||r instanceof wt)&&(e instanceof ue||e instanceof wt)&&r.firestore===e.firestore&&r.path===e.path&&r.converter===e.converter}function td(r,e){return r=ie(r),e=ie(e),r instanceof Oe&&e instanceof Oe&&r.firestore===e.firestore&&bo(r._query,e._query)&&r.converter===e.converter}/**
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
 */const xm="AsyncQueue";class Vm{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Mh(this,"async_queue_retry"),this._c=()=>{const n=Sa();n&&x(xm,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=e;const t=Sa();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Sa();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new je;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!jn(e))throw e;x(xm,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((n=>{throw this.nc=n,this.rc=!1,Pe("INTERNAL UNHANDLED ERROR: ",Om(n)),n})).then((n=>(this.rc=!1,n))))));return this.ac=t,t}enqueueAfterDelay(e,t,n){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=Bh.createAndSchedule(this,e,t,n,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&U(47125,{Pc:Om(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,n)=>t.targetTimeMs-n.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Om(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}/**
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
 */function os(r){return(function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1})(r,["next","error","complete"])}class DI{constructor(){this._progressObserver={},this._taskCompletionResolver=new je,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const bR=-1;class fe extends Do{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new Vm,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Vm(e),this._firestoreClient=void 0,await e}}}function RR(r,e,t){t||(t=oo);const n=js(r,"firestore");if(n.isInitialized(t)){const s=n.getImmediate({identifier:t}),i=n.getOptions(t);if(_t(i,e))return s;throw new D(R.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new D(R.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<By)throw new D(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&Zt(e.host)&&yc(e.host),n.initialize({options:e,instanceIdentifier:t})}function xI(r,e){const t=typeof r=="object"?r:oh(),n=typeof r=="string"?r:e||oo,s=js(t,"firestore").getImmediate({identifier:n});if(!s._initialized){const i=j_("firestore");i&&NI(s,...i)}return s}function we(r){if(r._terminated)throw new D(R.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||VI(r),r._firestoreClient}function VI(r){const e=r._freezeSettings(),t=(function(s,i,o,a){return new QA(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,CI(a.experimentalLongPollingOptions),a.useFetchStreams,a.isUsingEmulator)})(r._databaseId,r._app?.options.appId||"",r._persistenceKey,e);r._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new hR(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&(function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}})(r._componentsProvider))}function CR(r,e){dt("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=r._freezeSettings();return OI(r,Fn.provider,{build:n=>new Xh(n,t.cacheSizeBytes,e?.forceOwnership)}),Promise.resolve()}async function PR(r){dt("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=r._freezeSettings();OI(r,Fn.provider,{build:t=>new TI(t,e.cacheSizeBytes)})}function OI(r,e,t){if((r=Z(r,fe))._firestoreClient||r._terminated)throw new D(R.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(r._componentsProvider||r._getSettings().localCache)throw new D(R.FAILED_PRECONDITION,"SDK cache is already specified.");r._componentsProvider={_online:e,_offline:t},VI(r)}function NR(r){if(r._initialized&&!r._terminated)throw new D(R.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new je;return r._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await(async function(n){if(!Vt.v())return Promise.resolve();const s=n+$y;await Vt.delete(s)})(Dh(r._databaseId,r._persistenceKey)),e.resolve()}catch(t){e.reject(t)}})),e.promise}function kR(r){return(function(t){const n=new je;return t.asyncQueue.enqueueAndForget((async()=>Qb(await ed(t),n))),n.promise})(we(r=Z(r,fe)))}function DR(r){return dR(we(r=Z(r,fe)))}function xR(r){return fR(we(r=Z(r,fe)))}function VR(r){return Gv(r.app,"firestore",r._databaseId.database),r._delete()}function Ou(r,e){const t=we(r=Z(r,fe)),n=new DI;return yR(t,r._databaseId,e,n),n}function MI(r,e){return IR(we(r=Z(r,fe)),e).then((t=>t?new Oe(r,null,t.query):null))}/**
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
 */class Os{constructor(e="count",t){this._internalFieldPath=t,this.type="AggregateField",this.aggregateType=e}}class LI{constructor(e,t,n){this._userDataWriter=t,this._data=n,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
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
 */class nt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new nt(be.fromBase64String(e))}catch(t){throw new D(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new nt(be.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:nt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Or(e,nt._jsonSchema))return nt.fromBase64String(e.bytes)}}nt._jsonSchemaVersion="firestore/bytes/1.0",nt._jsonSchema={type:De("string",nt._jsonSchemaVersion),bytes:De("string")};/**
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
 */class Hn{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new D(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ie(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function OR(){return new Hn(lu)}/**
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
 */class Qn{constructor(e){this._methodName=e}}/**
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
 */class vt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new D(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new D(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return j(this._lat,e._lat)||j(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:vt._jsonSchemaVersion}}static fromJSON(e){if(Or(e,vt._jsonSchema))return new vt(e.latitude,e.longitude)}}vt._jsonSchemaVersion="firestore/geoPoint/1.0",vt._jsonSchema={type:De("string",vt._jsonSchemaVersion),latitude:De("number"),longitude:De("number")};/**
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
 */class mt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:mt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Or(e,mt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new mt(e.vectorValues);throw new D(R.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}mt._jsonSchemaVersion="firestore/vectorValue/1.0",mt._jsonSchema={type:De("string",mt._jsonSchemaVersion),vectorValues:De("object")};/**
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
 */const MR=/^__.*__$/;class LR{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new rn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ks(e,this.data,t,this.fieldTransforms)}}class FI{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new rn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function UI(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U(40011,{Ac:r})}}class Gc{constructor(e,t,n,s,i,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Gc({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),n=this.Vc({path:t,fc:!1});return n.gc(e),n}yc(e){const t=this.path?.child(e),n=this.Vc({path:t,fc:!1});return n.Rc(),n}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Ja(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(UI(this.Ac)&&MR.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class FR{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Mr(e)}Cc(e,t,n,s=!1){return new Gc({Ac:e,methodName:t,Dc:n,path:Ie.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Lr(r){const e=r._freezeSettings(),t=Mr(r._databaseId);return new FR(r._databaseId,!!e.ignoreUndefinedProperties,t)}function zc(r,e,t,n,s,i={}){const o=r.Cc(i.merge||i.mergeFields?2:0,e,t,s);cd("Data must be an object, but it was:",o,n);const a=GI(n,o);let l,u;if(i.merge)l=new st(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const f of i.mergeFields){const m=fo(e,f,t);if(!o.contains(m))throw new D(R.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);jI(d,m)||d.push(m)}l=new st(d),u=o.fieldTransforms.filter((f=>l.covers(f.field)))}else l=null,u=o.fieldTransforms;return new LR(new $e(a),l,u)}class xo extends Qn{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof xo}}function BI(r,e,t){return new Gc({Ac:3,Dc:e.settings.Dc,methodName:r._methodName,fc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class nd extends Qn{_toFieldTransform(e){return new Co(e.path,new bs)}isEqual(e){return e instanceof nd}}class rd extends Qn{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=BI(this,e,!0),n=this.vc.map((i=>Fr(i,t))),s=new wr(n);return new Co(e.path,s)}isEqual(e){return e instanceof rd&&_t(this.vc,e.vc)}}class sd extends Qn{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=BI(this,e,!0),n=this.vc.map((i=>Fr(i,t))),s=new vr(n);return new Co(e.path,s)}isEqual(e){return e instanceof sd&&_t(this.vc,e.vc)}}class id extends Qn{constructor(e,t){super(e),this.Fc=t}_toFieldTransform(e){const t=new Rs(e.serializer,cy(e.serializer,this.Fc));return new Co(e.path,t)}isEqual(e){return e instanceof id&&this.Fc===e.Fc}}function od(r,e,t,n){const s=r.Cc(1,e,t);cd("Data must be an object, but it was:",s,n);const i=[],o=$e.empty();Wn(n,((l,u)=>{const d=jc(e,l,t);u=ie(u);const f=s.yc(d);if(u instanceof xo)i.push(d);else{const m=Fr(u,f);m!=null&&(i.push(d),o.set(d,m))}}));const a=new st(i);return new FI(o,a,s.fieldTransforms)}function ad(r,e,t,n,s,i){const o=r.Cc(1,e,t),a=[fo(e,n,t)],l=[s];if(i.length%2!=0)throw new D(R.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)a.push(fo(e,i[m])),l.push(i[m+1]);const u=[],d=$e.empty();for(let m=a.length-1;m>=0;--m)if(!jI(u,a[m])){const y=a[m];let S=l[m];S=ie(S);const N=o.yc(y);if(S instanceof xo)u.push(y);else{const k=Fr(S,N);k!=null&&(u.push(y),d.set(y,k))}}const f=new st(u);return new FI(d,f,o.fieldTransforms)}function qI(r,e,t,n=!1){return Fr(t,r.Cc(n?4:3,e))}function Fr(r,e){if(zI(r=ie(r)))return cd("Unsupported field value:",e,r),GI(r,e);if(r instanceof Qn)return(function(n,s){if(!UI(s.Ac))throw s.Sc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(n,s){const i=[];let o=0;for(const a of n){let l=Fr(a,s.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}})(r,e)}return(function(n,s){if((n=ie(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return cy(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ce.fromDate(n);return{timestampValue:Cs(s.serializer,i)}}if(n instanceof ce){const i=new ce(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Cs(s.serializer,i)}}if(n instanceof vt)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof nt)return{bytesValue:Ty(s.serializer,n._byteString)};if(n instanceof ue){const i=s.databaseId,o=n.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:bh(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof mt)return(function(o,a){return{mapValue:{fields:{[mh]:{stringValue:_h},[vs]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw a.Sc("VectorValues must only contain numeric values.");return Eh(a.serializer,u)}))}}}}}})(n,s);throw s.Sc(`Unsupported field value: ${wc(n)}`)})(r,e)}function GI(r,e){const t={};return Og(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Wn(r,((n,s)=>{const i=Fr(s,e.mc(n));i!=null&&(t[n]=i)})),{mapValue:{fields:t}}}function zI(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof ce||r instanceof vt||r instanceof nt||r instanceof ue||r instanceof Qn||r instanceof mt)}function cd(r,e,t){if(!zI(t)||!_g(t)){const n=wc(t);throw n==="an object"?e.Sc(r+" a custom object"):e.Sc(r+" "+n)}}function fo(r,e,t){if((e=ie(e))instanceof Hn)return e._internalPath;if(typeof e=="string")return jc(r,e);throw Ja("Field path arguments must be of type string or ",r,!1,void 0,t)}const UR=new RegExp("[~\\*/\\[\\]]");function jc(r,e,t){if(e.search(UR)>=0)throw Ja(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Hn(...e.split("."))._internalPath}catch{throw Ja(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Ja(r,e,t,n,s){const i=n&&!n.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${n}`),o&&(l+=` in document ${s}`),l+=")"),new D(R.INVALID_ARGUMENT,a+r+l)}function jI(r,e){return r.some((t=>t.isEqual(e)))}/**
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
 */class po{constructor(e,t,n,s,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ue(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new BR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Wc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class BR extends po{data(){return super.data()}}function Wc(r,e){return typeof e=="string"?jc(r,e):e instanceof Hn?e._internalPath:e._delegate._internalPath}/**
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
 */function WI(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new D(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ld{}class ei extends ld{}function qR(r,e,...t){let n=[];e instanceof ld&&n.push(e),n=n.concat(t),(function(i){const o=i.filter((l=>l instanceof Ur)).length,a=i.filter((l=>l instanceof ti)).length;if(o>1||o>0&&a>0)throw new D(R.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(n);for(const s of n)r=s._apply(r);return r}class ti extends ei{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new ti(e,t,n)}_apply(e){const t=this._parse(e);return KI(e._query,t),new Oe(e.firestore,e.converter,Tu(e._query,t))}_parse(e){const t=Lr(e.firestore);return(function(i,o,a,l,u,d,f){let m;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new D(R.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Lm(f,d);const S=[];for(const N of f)S.push(Mm(l,i,N));m={arrayValue:{values:S}}}else m=Mm(l,i,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Lm(f,d),m=qI(a,o,f,d==="in"||d==="not-in");return te.create(u,d,m)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function GR(r,e,t){const n=e,s=Wc("where",r);return ti._create(s,n,t)}class Ur extends ld{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ur(e,t)}_parse(e){const t=this._queryConstraints.map((n=>n._parse(e))).filter((n=>n.getFilters().length>0));return t.length===1?t[0]:le.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let o=s;const a=i.getFlattenedFilters();for(const l of a)KI(o,l),o=Tu(o,l)})(e._query,t),new Oe(e.firestore,e.converter,Tu(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function zR(...r){return r.forEach((e=>HI("or",e))),Ur._create("or",r)}function jR(...r){return r.forEach((e=>HI("and",e))),Ur._create("and",r)}class $c extends ei{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new $c(e,t)}_apply(e){const t=(function(s,i,o){if(s.startAt!==null)throw new D(R.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new D(R.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new lo(i,o)})(e._query,this._field,this._direction);return new Oe(e.firestore,e.converter,(function(s,i){const o=s.explicitOrderBy.concat([i]);return new tn(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,t))}}function WR(r,e="asc"){const t=e,n=Wc("orderBy",r);return $c._create(n,t)}class Vo extends ei{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new Vo(e,t,n)}_apply(e){return new Oe(e.firestore,e.converter,Ga(e._query,this._limit,this._limitType))}}function $R(r){return gg("limit",r),Vo._create("limit",r,"F")}function KR(r){return gg("limitToLast",r),Vo._create("limitToLast",r,"L")}class Oo extends ei{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new Oo(e,t,n)}_apply(e){const t=$I(e,this.type,this._docOrFields,this._inclusive);return new Oe(e.firestore,e.converter,(function(s,i){return new tn(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)})(e._query,t))}}function HR(...r){return Oo._create("startAt",r,!0)}function QR(...r){return Oo._create("startAfter",r,!1)}class Mo extends ei{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new Mo(e,t,n)}_apply(e){const t=$I(e,this.type,this._docOrFields,this._inclusive);return new Oe(e.firestore,e.converter,(function(s,i){return new tn(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,i)})(e._query,t))}}function YR(...r){return Mo._create("endBefore",r,!1)}function JR(...r){return Mo._create("endAt",r,!0)}function $I(r,e,t,n){if(t[0]=ie(t[0]),t[0]instanceof po)return(function(i,o,a,l,u){if(!l)throw new D(R.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const d=[];for(const f of is(i))if(f.field.isKeyField())d.push(Er(o,l.key));else{const m=l.data.field(f.field);if(Rc(m))throw new D(R.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(m===null){const y=f.field.canonicalString();throw new D(R.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${y}' (used as the orderBy) does not exist.`)}d.push(m)}return new Mn(d,u)})(r._query,r.firestore._databaseId,e,t[0]._document,n);{const s=Lr(r.firestore);return(function(o,a,l,u,d,f){const m=o.explicitOrderBy;if(d.length>m.length)throw new D(R.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const y=[];for(let S=0;S<d.length;S++){const N=d[S];if(m[S].field.isKeyField()){if(typeof N!="string")throw new D(R.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof N}`);if(!yh(o)&&N.indexOf("/")!==-1)throw new D(R.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${N}' contains a slash.`);const k=o.path.child(J.fromString(N));if(!O.isDocumentKey(k))throw new D(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${k}' is not because it contains an odd number of segments.`);const F=new O(k);y.push(Er(a,F))}else{const k=qI(l,u,N);y.push(k)}}return new Mn(y,f)})(r._query,r.firestore._databaseId,s,e,t,n)}}function Mm(r,e,t){if(typeof(t=ie(t))=="string"){if(t==="")throw new D(R.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!yh(e)&&t.indexOf("/")!==-1)throw new D(R.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(J.fromString(t));if(!O.isDocumentKey(n))throw new D(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Er(r,new O(n))}if(t instanceof ue)return Er(r,t._key);throw new D(R.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${wc(t)}.`)}function Lm(r,e){if(!Array.isArray(r)||r.length===0)throw new D(R.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function KI(r,e){const t=(function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null})(r.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new D(R.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new D(R.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function HI(r,e){if(!(e instanceof ti||e instanceof Ur))throw new D(R.INVALID_ARGUMENT,`Function ${r}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class ud{convertValue(e,t="none"){switch(Vn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ee(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Qt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw U(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Wn(e,((s,i)=>{n[s]=this.convertValue(i,t)})),n}convertVectorValue(e){const t=e.fields?.[vs].arrayValue?.values?.map((n=>Ee(n.doubleValue)));return new mt(t)}convertGeoPoint(e){return new vt(Ee(e.latitude),Ee(e.longitude))}convertArray(e,t){return(e.values||[]).map((n=>this.convertValue(n,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Cc(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(io(e));default:return null}}convertTimestamp(e){const t=Ht(e);return new ce(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=J.fromString(e);q(ky(n),9688,{name:e});const s=new xn(n.get(1),n.get(3)),i=new O(n.popFirst(5));return s.isEqual(t)||Pe(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function Kc(r,e,t){let n;return n=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,n}class hd extends ud{constructor(e){super(),this.firestore=e}convertBytes(e){return new nt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ue(this.firestore,null,t)}}/**
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
 */function XR(r){return new Os("sum",fo("sum",r))}function ZR(r){return new Os("avg",fo("average",r))}function QI(){return new Os("count")}function eC(r,e){return r instanceof Os&&e instanceof Os&&r.aggregateType===e.aggregateType&&r._internalFieldPath?.canonicalString()===e._internalFieldPath?.canonicalString()}function tC(r,e){return td(r.query,e.query)&&_t(r.data(),e.data())}/**
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
 */const YI="NOT SUPPORTED";class Gt{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ct extends po{constructor(e,t,n,s,i,o){super(e,t,n,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new $i(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Wc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new D(R.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ct._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}function nC(r,e,t){if(Or(e,ct._jsonSchema)){if(e.bundle===YI)throw new D(R.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.");const n=Mr(r._databaseId),s=RI(e.bundle,n),i=s.Wu(),o=new Wh(s.getMetadata(),n);for(const d of i)o.Ga(d);const a=o.documents;if(a.length!==1)throw new D(R.INVALID_ARGUMENT,`Expected bundle data to contain 1 document, but it contains ${a.length} documents.`);const l=Dc(n,a[0].document),u=new O(J.fromString(e.bundleName));return new ct(r,new hd(r),u,l,new Gt(!1,!1),t||null)}}ct._jsonSchemaVersion="firestore/documentSnapshot/1.0",ct._jsonSchema={type:De("string",ct._jsonSchemaVersion),bundleSource:De("string","DocumentSnapshot"),bundleName:De("string"),bundle:De("string")};class $i extends ct{data(e={}){return super.data(e)}}class lt{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Gt(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new $i(this._firestore,this._userDataWriter,n.key,n,new Gt(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new D(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((a=>{const l=new $i(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Gt(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((a=>i||a.type!==3)).map((a=>{const l=new $i(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Gt(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:sC(a.type),doc:l,oldIndex:u,newIndex:d}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new D(R.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=lt._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Tc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),n.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function rC(r,e,t){if(Or(e,lt._jsonSchema)){if(e.bundle===YI)throw new D(R.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.");const n=Mr(r._databaseId),s=RI(e.bundle,n),i=s.Wu(),o=new Wh(s.getMetadata(),n);for(const m of i)o.Ga(m);if(o.queries.length!==1)throw new D(R.INVALID_ARGUMENT,`Snapshot data expected 1 query but found ${o.queries.length} queries.`);const a=Vc(o.queries[0].bundledQuery),l=o.documents;let u=new gr;l.map((m=>{const y=Dc(n,m.document);u=u.add(y)}));const d=Cr.fromInitialDocuments(a,u,K(),!1,!1),f=new Oe(r,t||null,a);return new lt(r,new hd(r),f,d)}}function sC(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U(61501,{type:r})}}function iC(r,e){return r instanceof ct&&e instanceof ct?r._firestore===e._firestore&&r._key.isEqual(e._key)&&(r._document===null?e._document===null:r._document.isEqual(e._document))&&r._converter===e._converter:r instanceof lt&&e instanceof lt&&r._firestore===e._firestore&&td(r.query,e.query)&&r.metadata.isEqual(e.metadata)&&r._snapshot.isEqual(e._snapshot)}/**
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
 */function oC(r){r=Z(r,ue);const e=Z(r.firestore,fe);return SI(we(e),r._key).then((t=>dd(e,r,t)))}lt._jsonSchemaVersion="firestore/querySnapshot/1.0",lt._jsonSchema={type:De("string",lt._jsonSchemaVersion),bundleSource:De("string","QuerySnapshot"),bundleName:De("string"),bundle:De("string")};class Yn extends ud{constructor(e){super(),this.firestore=e}convertBytes(e){return new nt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ue(this.firestore,null,t)}}function aC(r){r=Z(r,ue);const e=Z(r.firestore,fe),t=we(e),n=new Yn(e);return pR(t,r._key).then((s=>new ct(e,n,r._key,s,new Gt(s!==null&&s.hasLocalMutations,!0),r.converter)))}function cC(r){r=Z(r,ue);const e=Z(r.firestore,fe);return SI(we(e),r._key,{source:"server"}).then((t=>dd(e,r,t)))}function lC(r){r=Z(r,Oe);const e=Z(r.firestore,fe),t=we(e),n=new Yn(e);return WI(r._query),bI(t,r._query).then((s=>new lt(e,n,r,s)))}function uC(r){r=Z(r,Oe);const e=Z(r.firestore,fe),t=we(e),n=new Yn(e);return mR(t,r._query).then((s=>new lt(e,n,r,s)))}function hC(r){r=Z(r,Oe);const e=Z(r.firestore,fe),t=we(e),n=new Yn(e);return bI(t,r._query,{source:"server"}).then((s=>new lt(e,n,r,s)))}function dC(r,e,t){r=Z(r,ue);const n=Z(r.firestore,fe),s=Kc(r.converter,e,t);return ni(n,[zc(Lr(n),"setDoc",r._key,s,r.converter!==null,t).toMutation(r._key,Te.none())])}function fC(r,e,t,...n){r=Z(r,ue);const s=Z(r.firestore,fe),i=Lr(s);let o;return o=typeof(e=ie(e))=="string"||e instanceof Hn?ad(i,"updateDoc",r._key,e,t,n):od(i,"updateDoc",r._key,e),ni(s,[o.toMutation(r._key,Te.exists(!0))])}function pC(r){return ni(Z(r.firestore,fe),[new Hs(r._key,Te.none())])}function mC(r,e){const t=Z(r.firestore,fe),n=kI(r),s=Kc(r.converter,e);return ni(t,[zc(Lr(r.firestore),"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,Te.exists(!1))]).then((()=>n))}function Mu(r,...e){r=ie(r);let t={includeMetadataChanges:!1,source:"default"},n=0;typeof e[n]!="object"||os(e[n])||(t=e[n++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(os(e[n])){const l=e[n];e[n]=l.next?.bind(l),e[n+1]=l.error?.bind(l),e[n+2]=l.complete?.bind(l)}let i,o,a;if(r instanceof ue)o=Z(r.firestore,fe),a=$s(r._key.path),i={next:l=>{e[n]&&e[n](dd(o,r,l))},error:e[n+1],complete:e[n+2]};else{const l=Z(r,Oe);o=Z(l.firestore,fe),a=l._query;const u=new Yn(o);i={next:d=>{e[n]&&e[n](new lt(o,u,l,d))},error:e[n+1],complete:e[n+2]},WI(r._query)}return(function(u,d,f,m){const y=new Bc(m),S=new jh(d,y,f);return u.asyncQueue.enqueueAndForget((async()=>qh(await Vs(u),S))),()=>{y.Nu(),u.asyncQueue.enqueueAndForget((async()=>Gh(await Vs(u),S)))}})(we(o),a,s,i)}function _C(r,e,...t){const n=ie(r),s=(function(l){const u={bundle:"",bundleName:"",bundleSource:""},d=["bundle","bundleName","bundleSource"];for(const f of d){if(!(f in l)){u.error=`snapshotJson missing required field: ${f}`;break}const m=l[f];if(typeof m!="string"){u.error=`snapshotJson field '${f}' must be a string.`;break}if(m.length===0){u.error=`snapshotJson field '${f}' cannot be an empty string.`;break}f==="bundle"?u.bundle=m:f==="bundleName"?u.bundleName=m:f==="bundleSource"&&(u.bundleSource=m)}return u})(e);if(s.error)throw new D(R.INVALID_ARGUMENT,s.error);let i,o=0;if(typeof t[o]!="object"||os(t[o])||(i=t[o++]),s.bundleSource==="QuerySnapshot"){let a=null;if(typeof t[o]=="object"&&os(t[o])){const l=t[o++];a={next:l.next,error:l.error,complete:l.complete}}else a={next:t[o++],error:t[o++],complete:t[o++]};return(function(u,d,f,m,y){let S,N=!1;return Ou(u,d.bundle).then((()=>MI(u,d.bundleName))).then((F=>{F&&!N&&(y&&F.withConverter(y),S=Mu(F,f||{},m))})).catch((F=>(m.error&&m.error(F),()=>{}))),()=>{N||(N=!0,S&&S())}})(n,s,i,a,t[o])}if(s.bundleSource==="DocumentSnapshot"){let a=null;if(typeof t[o]=="object"&&os(t[o])){const l=t[o++];a={next:l.next,error:l.error,complete:l.complete}}else a={next:t[o++],error:t[o++],complete:t[o++]};return(function(u,d,f,m,y){let S,N=!1;return Ou(u,d.bundle).then((()=>{if(!N){const F=new ue(u,y||null,O.fromPath(d.bundleName));S=Mu(F,f||{},m)}})).catch((F=>(m.error&&m.error(F),()=>{}))),()=>{N||(N=!0,S&&S())}})(n,s,i,a,t[o])}throw new D(R.INVALID_ARGUMENT,`unsupported bundle source: ${s.bundleSource}`)}function gC(r,e){return gR(we(r=Z(r,fe)),os(e)?e:{next:e})}function ni(r,e){return(function(n,s){const i=new je;return n.asyncQueue.enqueueAndForget((async()=>Wb(await ed(n),s,i))),i.promise})(we(r),e)}function dd(r,e,t){const n=t.docs.get(e._key),s=new Yn(r);return new ct(r,s,e._key,n,new Gt(t.hasPendingWrites,t.fromCache),e.converter)}function yC(r){return JI(r,{count:QI()})}function JI(r,e){const t=Z(r.firestore,fe),n=we(t),s=Vg(e,((i,o)=>new my(o,i.aggregateType,i._internalFieldPath)));return _R(n,r._query,s).then((i=>(function(a,l,u){const d=new Yn(a);return new LI(l,d,u)})(t,r,i)))}class IC{constructor(e){this.kind="memory",this._onlineComponentProvider=Fn.provider,this._offlineComponentProvider=e?.garbageCollector?e.garbageCollector._offlineComponentProvider:{build:()=>new Jh(void 0)}}toJSON(){return{kind:this.kind}}}class EC{constructor(e){let t;this.kind="persistent",e?.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=XI(void 0),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class TC{constructor(){this.kind="memoryEager",this._offlineComponentProvider=xs.provider}toJSON(){return{kind:this.kind}}}class wC{constructor(e){this.kind="memoryLru",this._offlineComponentProvider={build:()=>new Jh(e)}}toJSON(){return{kind:this.kind}}}function vC(){return new TC}function AC(r){return new wC(r?.cacheSizeBytes)}function SC(r){return new IC(r)}function bC(r){return new EC(r)}class RC{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Fn.provider,this._offlineComponentProvider={build:t=>new Xh(t,e?.cacheSizeBytes,this.forceOwnership)}}}class CC{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Fn.provider,this._offlineComponentProvider={build:t=>new TI(t,e?.cacheSizeBytes)}}}function XI(r){return new RC(r?.forceOwnership)}function PC(){return new CC}/**
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
 */const NC={maxAttempts:5};/**
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
 */class ZI{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Lr(e)}set(e,t,n){this._verifyNotCommitted();const s=vn(e,this._firestore),i=Kc(s.converter,t,n),o=zc(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,n);return this._mutations.push(o.toMutation(s._key,Te.none())),this}update(e,t,n,...s){this._verifyNotCommitted();const i=vn(e,this._firestore);let o;return o=typeof(t=ie(t))=="string"||t instanceof Hn?ad(this._dataReader,"WriteBatch.update",i._key,t,n,s):od(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,Te.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=vn(e,this._firestore);return this._mutations=this._mutations.concat(new Hs(t._key,Te.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new D(R.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function vn(r,e){if((r=ie(r)).firestore!==e)throw new D(R.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
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
 */class kC{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Lr(e)}get(e){const t=vn(e,this._firestore),n=new hd(this._firestore);return this._transaction.lookup([t._key]).then((s=>{if(!s||s.length!==1)return U(24041);const i=s[0];if(i.isFoundDocument())return new po(this._firestore,n,i.key,i,t.converter);if(i.isNoDocument())return new po(this._firestore,n,t._key,null,t.converter);throw U(18433,{doc:i})}))}set(e,t,n){const s=vn(e,this._firestore),i=Kc(s.converter,t,n),o=zc(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,n);return this._transaction.set(s._key,o),this}update(e,t,n,...s){const i=vn(e,this._firestore);let o;return o=typeof(t=ie(t))=="string"||t instanceof Hn?ad(this._dataReader,"Transaction.update",i._key,t,n,s):od(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,o),this}delete(e){const t=vn(e,this._firestore);return this._transaction.delete(t._key),this}}/**
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
 */class eE extends kC{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=vn(e,this._firestore),n=new Yn(this._firestore);return super.get(e).then((s=>new ct(this._firestore,n,t._key,s._document,new Gt(!1,!1),t.converter)))}}function DC(r,e,t){r=Z(r,fe);const n={...NC,...t};return(function(i){if(i.maxAttempts<1)throw new D(R.INVALID_ARGUMENT,"Max attempts must be at least 1")})(n),(function(i,o,a){const l=new je;return i.asyncQueue.enqueueAndForget((async()=>{const u=await AI(i);new uR(i.asyncQueue,u,a,o,l).ju()})),l.promise})(we(r),(s=>e(new eE(r,s))),n)}/**
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
 */function xC(){return new xo("deleteField")}function VC(){return new nd("serverTimestamp")}function OC(...r){return new rd("arrayUnion",r)}function MC(...r){return new sd("arrayRemove",r)}function LC(r){return new id("increment",r)}function FC(r){return new mt(r)}/**
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
 */function UC(r){return we(r=Z(r,fe)),new ZI(r,(e=>ni(r,e)))}/**
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
 */function BC(r,e){const t=we(r=Z(r,fe));if(!t._uninitializedComponentsProvider||t._uninitializedComponentsProvider._offline.kind==="memory")return dt("Cannot enable indexes when persistence is disabled"),Promise.resolve();const n=(function(i){const o=typeof i=="string"?(function(u){try{return JSON.parse(u)}catch(d){throw new D(R.INVALID_ARGUMENT,"Failed to parse JSON: "+d?.message)}})(i):i,a=[];if(Array.isArray(o.indexes))for(const l of o.indexes){const u=Fm(l,"collectionGroup"),d=[];if(Array.isArray(l.fields))for(const f of l.fields){const m=jc("setIndexConfiguration",Fm(f,"fieldPath"));f.arrayConfig==="CONTAINS"?d.push(new mr(m,2)):f.order==="ASCENDING"?d.push(new mr(m,0)):f.order==="DESCENDING"&&d.push(new mr(m,1))}a.push(new gs(gs.UNKNOWN_ID,u,d,ys.empty()))}return a})(e);return ER(t,n)}function Fm(r,e){if(typeof r[e]!="string")throw new D(R.INVALID_ARGUMENT,"Missing string value for: "+e);return r[e]}/**
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
 */class tE{constructor(e){this._firestore=e,this.type="PersistentCacheIndexManager"}}function qC(r){r=Z(r,fe);const e=Um.get(r);if(e)return e;if(we(r)._uninitializedComponentsProvider?._offline.kind!=="persistent")return null;const n=new tE(r);return Um.set(r,n),n}function GC(r){nE(r,!0)}function zC(r){nE(r,!1)}function jC(r){wR(we(r._firestore)).then((e=>x("deleting all persistent cache indexes succeeded"))).catch((e=>dt("deleting all persistent cache indexes failed",e)))}function nE(r,e){TR(we(r._firestore),e).then((t=>x(`setting persistent cache index auto creation isEnabled=${e} succeeded`))).catch((t=>dt(`setting persistent cache index auto creation isEnabled=${e} failed`,t)))}const Um=new WeakMap;/**
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
 */function WC(r){const e=we(Z(r.firestore,fe)),t=e._onlineComponents?.datastore.serializer;return t===void 0?null:xc(t,Je(r._query)).ft}function $C(r,e){const t=Vg(e,((i,o)=>new my(o,i.aggregateType,i._internalFieldPath))),n=we(Z(r.firestore,fe)),s=n._onlineComponents?.datastore.serializer;return s===void 0?null:Ry(s,Zg(r._query),t,!0).request}/**
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
 */class KC{constructor(){throw new Error("instances of this class should not be created")}static onExistenceFilterMismatch(e){return fd.instance.onExistenceFilterMismatch(e)}}class fd{constructor(){this.Mc=new Map}static get instance(){return da||(da=new fd,(function(t){if(wu)throw new Error("a TestingHooksSpi instance is already set");wu=t})(da)),da}lt(e){this.Mc.forEach((t=>t(e)))}onExistenceFilterMismatch(e){const t=Symbol(),n=this.Mc;return n.set(t,e),()=>n.delete(t)}}let da=null;(function(e,t=!0){(function(s){Ws=s})(Vr),Ir(new kn("firestore",((n,{instanceIdentifier:s,options:i})=>{const o=n.getProvider("app").getImmediate(),a=new fe(new oA(n.getProvider("auth-internal")),new lA(o,n.getProvider("app-check-internal")),(function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new D(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xn(u.options.projectId,d)})(o,s),o);return i={useFetchStreams:t,...i},a._setSettings(i),a}),"PUBLIC").setMultipleInstances(!0)),xt(gp,yp,e),xt(gp,yp,"esm2020")})();const mx=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:ud,AggregateField:Os,AggregateQuerySnapshot:LI,Bytes:nt,CACHE_SIZE_UNLIMITED:bR,CollectionReference:wt,DocumentReference:ue,DocumentSnapshot:ct,FieldPath:Hn,FieldValue:Qn,Firestore:fe,FirestoreError:D,GeoPoint:vt,LoadBundleTask:DI,PersistentCacheIndexManager:tE,Query:Oe,QueryCompositeFilterConstraint:Ur,QueryConstraint:ei,QueryDocumentSnapshot:$i,QueryEndAtConstraint:Mo,QueryFieldFilterConstraint:ti,QueryLimitConstraint:Vo,QueryOrderByConstraint:$c,QuerySnapshot:lt,QueryStartAtConstraint:Oo,SnapshotMetadata:Gt,Timestamp:ce,Transaction:eE,VectorValue:mt,WriteBatch:ZI,_AutoId:Tc,_ByteString:be,_DatabaseId:xn,_DocumentKey:O,_EmptyAppCheckTokenProvider:uA,_EmptyAuthCredentialsProvider:fg,_FieldPath:Ie,_TestingHooks:KC,_cast:Z,_debugAssert:sA,_internalAggregationQueryToProtoRunAggregationQueryRequest:$C,_internalQueryToProtoQueryTarget:WC,_isBase64Available:KA,_logWarn:dt,_validateIsNotUsedTogether:mg,addDoc:mC,aggregateFieldEqual:eC,aggregateQuerySnapshotEqual:tC,and:jR,arrayRemove:MC,arrayUnion:OC,average:ZR,clearIndexedDbPersistence:NR,collection:vR,collectionGroup:AR,connectFirestoreEmulator:NI,count:QI,deleteAllPersistentCacheIndexes:jC,deleteDoc:pC,deleteField:xC,disableNetwork:xR,disablePersistentCacheIndexAutoCreation:zC,doc:kI,documentId:OR,documentSnapshotFromJSON:nC,enableIndexedDbPersistence:CR,enableMultiTabIndexedDbPersistence:PR,enableNetwork:DR,enablePersistentCacheIndexAutoCreation:GC,endAt:JR,endBefore:YR,ensureFirestoreConfigured:we,executeWrite:ni,getAggregateFromServer:JI,getCountFromServer:yC,getDoc:oC,getDocFromCache:aC,getDocFromServer:cC,getDocs:lC,getDocsFromCache:uC,getDocsFromServer:hC,getFirestore:xI,getPersistentCacheIndexManager:qC,increment:LC,initializeFirestore:RR,limit:$R,limitToLast:KR,loadBundle:Ou,memoryEagerGarbageCollector:vC,memoryLocalCache:SC,memoryLruGarbageCollector:AC,namedQuery:MI,onSnapshot:Mu,onSnapshotResume:_C,onSnapshotsInSync:gC,or:zR,orderBy:WR,persistentLocalCache:bC,persistentMultipleTabManager:PC,persistentSingleTabManager:XI,query:qR,queryEqual:td,querySnapshotFromJSON:rC,refEqual:SR,runTransaction:DC,serverTimestamp:VC,setDoc:dC,setIndexConfiguration:BC,setLogLevel:rA,snapshotEqual:iC,startAfter:QR,startAt:HR,sum:XR,terminate:VR,updateDoc:fC,vector:FC,waitForPendingWrites:kR,where:GR,writeBatch:UC},Symbol.toStringTag,{value:"Module"}));function rE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const HC=rE,sE=new wo("auth","Firebase",rE());/**
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
 */const Xa=new Ec("@firebase/auth");function QC(r,...e){Xa.logLevel<=ee.WARN&&Xa.warn(`Auth (${Vr}): ${r}`,...e)}function ba(r,...e){Xa.logLevel<=ee.ERROR&&Xa.error(`Auth (${Vr}): ${r}`,...e)}/**
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
 */function Yt(r,...e){throw pd(r,...e)}function Mt(r,...e){return pd(r,...e)}function iE(r,e,t){const n={...HC(),[e]:t};return new wo("auth","Firebase",n).create(e,{appName:r.name})}function yr(r){return iE(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function pd(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return sE.create(r,...e)}function $(r,e,...t){if(!r)throw pd(e,...t)}function zt(r){const e="INTERNAL ASSERTION FAILED: "+r;throw ba(e),new Error(e)}function Jt(r,e){r||zt(e)}/**
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
 */function Lu(){return typeof self<"u"&&self.location?.href||""}function YC(){return Bm()==="http:"||Bm()==="https:"}function Bm(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function JC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(YC()||Dw()||"connection"in navigator)?navigator.onLine:!0}function XC(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Lo{constructor(e,t){this.shortDelay=e,this.longDelay=t,Jt(t>e,"Short delay should be less than long delay!"),this.isMobile=sh()||Q_()}get(){return JC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function md(r,e){Jt(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class oE{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ZC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const eP=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],tP=new Lo(3e4,6e4);function _d(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function ri(r,e,t,n,s={}){return aE(r,s,async()=>{let i={},o={};n&&(e==="GET"?o=n:i={body:JSON.stringify(n)});const a=zs({key:r.config.apiKey,...o}).slice(1),l=await r._getAdditionalHeaders();l["Content-Type"]="application/json",r.languageCode&&(l["X-Firebase-Locale"]=r.languageCode);const u={method:e,headers:l,...i};return kw()||(u.referrerPolicy="no-referrer"),r.emulatorConfig&&Zt(r.emulatorConfig.host)&&(u.credentials="include"),oE.fetch()(await cE(r,r.config.apiHost,t,a),u)})}async function aE(r,e,t){r._canInitEmulator=!1;const n={...ZC,...e};try{const s=new rP(r),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw fa(r,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw fa(r,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw fa(r,"email-already-in-use",o);if(l==="USER_DISABLED")throw fa(r,"user-disabled",o);const d=n[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw iE(r,d,u);Yt(r,d)}}catch(s){if(s instanceof en)throw s;Yt(r,"network-request-failed",{message:String(s)})}}async function nP(r,e,t,n,s={}){const i=await ri(r,e,t,n,s);return"mfaPendingCredential"in i&&Yt(r,"multi-factor-auth-required",{_serverResponse:i}),i}async function cE(r,e,t,n){const s=`${e}${t}?${n}`,i=r,o=i.config.emulator?md(r.config,s):`${r.config.apiScheme}://${s}`;return eP.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class rP{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(Mt(this.auth,"network-request-failed")),tP.get())})}}function fa(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const s=Mt(r,e,n);return s.customData._tokenResponse=t,s}/**
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
 */async function sP(r,e){return ri(r,"POST","/v1/accounts:delete",e)}async function Za(r,e){return ri(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ki(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function iP(r,e=!1){const t=ie(r),n=await t.getIdToken(e),s=gd(n);$(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:n,authTime:Ki(Kl(s.auth_time)),issuedAtTime:Ki(Kl(s.iat)),expirationTime:Ki(Kl(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Kl(r){return Number(r)*1e3}function gd(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return ba("JWT malformed, contained fewer than 3 sections"),null;try{const s=Da(t);return s?JSON.parse(s):(ba("Failed to decode base64 JWT payload"),null)}catch(s){return ba("Caught error parsing JWT payload as JSON",s?.toString()),null}}function qm(r){const e=gd(r);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function mo(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof en&&oP(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function oP({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class aP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Fu{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ki(this.lastLoginAt),this.creationTime=Ki(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ec(r){const e=r.auth,t=await r.getIdToken(),n=await mo(r,Za(e,{idToken:t}));$(n?.users.length,e,"internal-error");const s=n.users[0];r._notifyReloadListener(s);const i=s.providerUserInfo?.length?lE(s.providerUserInfo):[],o=lP(r.providerData,i),a=r.isAnonymous,l=!(r.email&&s.passwordHash)&&!o?.length,u=a?l:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Fu(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(r,d)}async function cP(r){const e=ie(r);await ec(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lP(r,e){return[...r.filter(n=>!e.some(s=>s.providerId===n.providerId)),...e]}function lE(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function uP(r,e){const t=await aE(r,{},async()=>{const n=zs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=r.config,o=await cE(r,s,"/v1/token",`key=${i}`),a=await r._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:n};return r.emulatorConfig&&Zt(r.emulatorConfig.host)&&(l.credentials="include"),oE.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function hP(r,e){return ri(r,"POST","/v2/accounts:revokeToken",_d(r,e))}/**
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
 */class as{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){$(e.length!==0,"internal-error");const t=qm(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:i}=await uP(e,t);this.updateTokensAndExpiration(n,s,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:i}=t,o=new as;return n&&($(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),s&&($(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&($(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new as,this.toJSON())}_performRefresh(){return zt("not implemented")}}/**
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
 */function mn(r,e){$(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Et{constructor({uid:e,auth:t,stsTokenManager:n,...s}){this.providerId="firebase",this.proactiveRefresh=new aP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Fu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await mo(this,this.stsTokenManager.getToken(this.auth,e));return $(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return iP(this,e)}reload(){return cP(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Et({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ec(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(yt(this.auth.app))return Promise.reject(yr(this.auth));const e=await this.getIdToken();return await mo(this,sP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,a=t.tenantId??void 0,l=t._redirectEventId??void 0,u=t.createdAt??void 0,d=t.lastLoginAt??void 0,{uid:f,emailVerified:m,isAnonymous:y,providerData:S,stsTokenManager:N}=t;$(f&&N,e,"internal-error");const k=as.fromJSON(this.name,N);$(typeof f=="string",e,"internal-error"),mn(n,e.name),mn(s,e.name),$(typeof m=="boolean",e,"internal-error"),$(typeof y=="boolean",e,"internal-error"),mn(i,e.name),mn(o,e.name),mn(a,e.name),mn(l,e.name),mn(u,e.name),mn(d,e.name);const F=new Et({uid:f,auth:e,email:s,emailVerified:m,displayName:n,isAnonymous:y,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:k,createdAt:u,lastLoginAt:d});return S&&Array.isArray(S)&&(F.providerData=S.map(G=>({...G}))),l&&(F._redirectEventId=l),F}static async _fromIdTokenResponse(e,t,n=!1){const s=new as;s.updateFromServerResponse(t);const i=new Et({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await ec(i),i}static async _fromGetAccountInfoResponse(e,t,n){const s=t.users[0];$(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?lE(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,a=new as;a.updateFromIdToken(n);const l=new Et({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Fu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,u),l}}/**
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
 */const Gm=new Map;function jt(r){Jt(r instanceof Function,"Expected a class definition");let e=Gm.get(r);return e?(Jt(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Gm.set(r,e),e)}/**
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
 */class uE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}uE.type="NONE";const zm=uE;/**
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
 */function Ra(r,e,t){return`firebase:${r}:${e}:${t}`}class cs{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:i}=this.auth;this.fullUserKey=Ra(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ra("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Za(this.auth,{idToken:e}).catch(()=>{});return t?Et._fromGetAccountInfoResponse(this.auth,t,e):null}return Et._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new cs(jt(zm),e,n);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||jt(zm);const o=Ra(n,e.config.apiKey,e.name);let a=null;for(const u of t)try{const d=await u._get(o);if(d){let f;if(typeof d=="string"){const m=await Za(e,{idToken:d}).catch(()=>{});if(!m)break;f=await Et._fromGetAccountInfoResponse(e,m,d)}else f=Et._fromJSON(e,d);u!==i&&(a=f),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new cs(i,e,n):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new cs(i,e,n))}}/**
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
 */function jm(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_E(e))return"Blackberry";if(gE(e))return"Webos";if(dE(e))return"Safari";if((e.includes("chrome/")||fE(e))&&!e.includes("edge/"))return"Chrome";if(mE(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if(n?.length===2)return n[1]}return"Other"}function hE(r=Ve()){return/firefox\//i.test(r)}function dE(r=Ve()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fE(r=Ve()){return/crios\//i.test(r)}function pE(r=Ve()){return/iemobile/i.test(r)}function mE(r=Ve()){return/android/i.test(r)}function _E(r=Ve()){return/blackberry/i.test(r)}function gE(r=Ve()){return/webos/i.test(r)}function yd(r=Ve()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function dP(r=Ve()){return yd(r)&&!!window.navigator?.standalone}function fP(){return xw()&&document.documentMode===10}function yE(r=Ve()){return yd(r)||mE(r)||gE(r)||_E(r)||/windows phone/i.test(r)||pE(r)}/**
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
 */function IE(r,e=[]){let t;switch(r){case"Browser":t=jm(Ve());break;case"Worker":t=`${jm(Ve())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Vr}/${n}`}/**
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
 */class pP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n?.message})}}}/**
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
 */async function mP(r,e={}){return ri(r,"GET","/v2/passwordPolicy",_d(r,e))}/**
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
 */const _P=6;class gP{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??_P,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let s=0;s<e.length;s++)n=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class yP{constructor(e,t,n,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wm(this),this.idTokenSubscription=new Wm(this),this.beforeStateQueue=new pP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=sE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=jt(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await cs.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Za(this,{idToken:e}),n=await Et._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(yt(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=n?._redirectEventId,a=await this.tryRedirectSignIn(e);(!i||i===o)&&a?.user&&(n=a.user,s=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(n)}catch(i){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ec(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=XC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(yt(this.app))return Promise.reject(yr(this));const t=e?ie(e):null;return t&&$(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return yt(this.app)?Promise.reject(yr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return yt(this.app)?Promise.reject(yr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(jt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await mP(this),t=new gP(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new wo("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await hP(this,n)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&jt(e)||this._popupRedirectResolver;$(t,this,"argument-error"),this.redirectPersistenceManager=await cs.create(this,[jt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if($(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,n,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=IE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){if(yt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&QC(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Id(r){return ie(r)}class Wm{constructor(e){this.auth=e,this.observer=null,this.addObserver=Gw(t=>this.observer=t)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ed={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function IP(r){Ed=r}function EP(r){return Ed.loadJS(r)}function TP(){return Ed.gapiScript}function wP(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function vP(r,e){const t=js(r,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(_t(i,e??{}))return s;Yt(s,"already-initialized")}return t.initialize({options:e})}function AP(r,e){const t=e?.persistence||[],n=(Array.isArray(t)?t:[t]).map(jt);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e?.popupRedirectResolver)}function SP(r,e,t){const n=Id(r);$(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const s=!1,i=EE(e),{host:o,port:a}=bP(e),l=a===null?"":`:${a}`,u={url:`${i}//${o}${l}/`},d=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!n._canInitEmulator){$(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),$(_t(u,n.config.emulator)&&_t(d,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=u,n.emulatorConfig=d,n.settings.appVerificationDisabledForTesting=!0,Zt(o)?(yc(`${i}//${o}${l}`),rh("Auth",!0)):RP()}function EE(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function bP(r){const e=EE(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(n);if(s){const i=s[1];return{host:i,port:$m(n.substr(i.length+1))}}else{const[i,o]=n.split(":");return{host:i,port:$m(o)}}}function $m(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function RP(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class TE{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return zt("not implemented")}_getIdTokenResponse(e){return zt("not implemented")}_linkToIdToken(e,t){return zt("not implemented")}_getReauthenticationResolver(e){return zt("not implemented")}}/**
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
 */async function ls(r,e){return nP(r,"POST","/v1/accounts:signInWithIdp",_d(r,e))}/**
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
 */const CP="http://localhost";class Pr extends TE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Pr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Yt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s,...i}=t;if(!n||!s)return null;const o=new Pr(n,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return ls(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,ls(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ls(e,t)}buildRequest(){const e={requestUri:CP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=zs(t)}return e}}/**
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
 */class wE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Fo extends wE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class yn extends Fo{constructor(){super("facebook.com")}static credential(e){return Pr._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yn.credential(e.oauthAccessToken)}catch{return null}}}yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";yn.PROVIDER_ID="facebook.com";/**
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
 */class In extends Fo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Pr._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return In.credential(t,n)}catch{return null}}}In.GOOGLE_SIGN_IN_METHOD="google.com";In.PROVIDER_ID="google.com";/**
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
 */class En extends Fo{constructor(){super("github.com")}static credential(e){return Pr._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch{return null}}}En.GITHUB_SIGN_IN_METHOD="github.com";En.PROVIDER_ID="github.com";/**
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
 */class Tn extends Fo{constructor(){super("twitter.com")}static credential(e,t){return Pr._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Tn.credential(t,n)}catch{return null}}}Tn.TWITTER_SIGN_IN_METHOD="twitter.com";Tn.PROVIDER_ID="twitter.com";/**
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
 */class Ms{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const i=await Et._fromIdTokenResponse(e,n,s),o=Km(n);return new Ms({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=Km(n);return new Ms({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function Km(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class tc extends en{constructor(e,t,n,s){super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,tc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new tc(e,t,n,s)}}function vE(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?tc._fromErrorAndOperation(r,i,e,n):i})}async function PP(r,e,t=!1){const n=await mo(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Ms._forOperation(r,"link",n)}/**
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
 */async function NP(r,e,t=!1){const{auth:n}=r;if(yt(n.app))return Promise.reject(yr(n));const s="reauthenticate";try{const i=await mo(r,vE(n,s,e,r),t);$(i.idToken,n,"internal-error");const o=gd(i.idToken);$(o,n,"internal-error");const{sub:a}=o;return $(r.uid===a,n,"user-mismatch"),Ms._forOperation(r,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&Yt(n,"user-mismatch"),i}}/**
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
 */async function kP(r,e,t=!1){if(yt(r.app))return Promise.reject(yr(r));const n="signIn",s=await vE(r,n,e),i=await Ms._fromIdTokenResponse(r,n,s);return t||await r._updateCurrentUser(i.user),i}function DP(r,e,t,n){return ie(r).onIdTokenChanged(e,t,n)}function xP(r,e,t){return ie(r).beforeAuthStateChanged(e,t)}function _x(r,e,t,n){return ie(r).onAuthStateChanged(e,t,n)}function gx(r){return ie(r).signOut()}const nc="__sak";/**
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
 */class AE{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(nc,"1"),this.storage.removeItem(nc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const VP=1e3,OP=10;class SE extends AE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=yE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const n=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},i=this.storage.getItem(n);fP()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,OP):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},VP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}SE.type="LOCAL";const MP=SE;/**
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
 */class bE extends AE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}bE.type="SESSION";const RE=bE;/**
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
 */function LP(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Hc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const n=new Hc(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const a=Array.from(o).map(async u=>u(t.origin,i)),l=await LP(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hc.receivers=[];/**
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
 */function Td(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class FP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=Td("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},n);o={messageChannel:s,onMessage(f){const m=f;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(m.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Lt(){return window}function UP(r){Lt().location.href=r}/**
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
 */function CE(){return typeof Lt().WorkerGlobalScope<"u"&&typeof Lt().importScripts=="function"}async function BP(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qP(){return navigator?.serviceWorker?.controller||null}function GP(){return CE()?self:null}/**
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
 */const PE="firebaseLocalStorageDb",zP=1,rc="firebaseLocalStorage",NE="fbase_key";class Uo{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Qc(r,e){return r.transaction([rc],e?"readwrite":"readonly").objectStore(rc)}function jP(){const r=indexedDB.deleteDatabase(PE);return new Uo(r).toPromise()}function Uu(){const r=indexedDB.open(PE,zP);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(rc,{keyPath:NE})}catch(s){t(s)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(rc)?e(n):(n.close(),await jP(),e(await Uu()))})})}async function Hm(r,e,t){const n=Qc(r,!0).put({[NE]:e,value:t});return new Uo(n).toPromise()}async function WP(r,e){const t=Qc(r,!1).get(e),n=await new Uo(t).toPromise();return n===void 0?null:n.value}function Qm(r,e){const t=Qc(r,!0).delete(e);return new Uo(t).toPromise()}const $P=800,KP=3;class kE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Uu(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>KP)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return CE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hc._getInstance(GP()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await BP(),!this.activeServiceWorker)return;this.sender=new FP(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||qP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Uu();return await Hm(e,nc,"1"),await Qm(e,nc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Hm(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>WP(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Qm(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Qc(s,!1).getAll();return new Uo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$P)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}kE.type="LOCAL";const HP=kE;new Lo(3e4,6e4);/**
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
 */function QP(r,e){return e?jt(e):($(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class wd extends TE{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ls(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ls(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ls(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function YP(r){return kP(r.auth,new wd(r),r.bypassAuthState)}function JP(r){const{auth:e,user:t}=r;return $(t,e,"internal-error"),NP(t,new wd(r),r.bypassAuthState)}async function XP(r){const{auth:e,user:t}=r;return $(t,e,"internal-error"),PP(t,new wd(r),r.bypassAuthState)}/**
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
 */class DE{constructor(e,t,n,s,i=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return YP;case"linkViaPopup":case"linkViaRedirect":return XP;case"reauthViaPopup":case"reauthViaRedirect":return JP;default:Yt(this.auth,"internal-error")}}resolve(e){Jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ZP=new Lo(2e3,1e4);class ns extends DE{constructor(e,t,n,s,i){super(e,t,s,i),this.provider=n,this.authWindow=null,this.pollId=null,ns.currentPopupAction&&ns.currentPopupAction.cancel(),ns.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){Jt(this.filter.length===1,"Popup operations only handle one event");const e=Td();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ns.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ZP.get())};e()}}ns.currentPopupAction=null;/**
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
 */const eN="pendingRedirect",Ca=new Map;class tN extends DE{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Ca.get(this.auth._key());if(!e){try{const n=await nN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Ca.set(this.auth._key(),e)}return this.bypassAuthState||Ca.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nN(r,e){const t=iN(e),n=sN(r);if(!await n._isAvailable())return!1;const s=await n._get(t)==="true";return await n._remove(t),s}function rN(r,e){Ca.set(r._key(),e)}function sN(r){return jt(r._redirectPersistence)}function iN(r){return Ra(eN,r.config.apiKey,r.name)}async function oN(r,e,t=!1){if(yt(r.app))return Promise.reject(yr(r));const n=Id(r),s=QP(n,e),o=await new tN(n,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
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
 */const aN=600*1e3;class cN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lN(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!xE(e)){const n=e.error.code?.split("auth/")[1]||"internal-error";t.onError(Mt(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=aN&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ym(e))}saveEventToCache(e){this.cachedEventUids.add(Ym(e)),this.lastProcessedEventTime=Date.now()}}function Ym(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function xE({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function lN(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xE(r);default:return!1}}/**
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
 */async function uN(r,e={}){return ri(r,"GET","/v1/projects",e)}/**
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
 */const hN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dN=/^https?/;async function fN(r){if(r.config.emulator)return;const{authorizedDomains:e}=await uN(r);for(const t of e)try{if(pN(t))return}catch{}Yt(r,"unauthorized-domain")}function pN(r){const e=Lu(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const o=new URL(r);return o.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!dN.test(t))return!1;if(hN.test(r))return n===r;const s=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}/**
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
 */const mN=new Lo(3e4,6e4);function Jm(){const r=Lt().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function _N(r){return new Promise((e,t)=>{function n(){Jm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jm(),t(Mt(r,"network-request-failed"))},timeout:mN.get()})}if(Lt().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Lt().gapi?.load)n();else{const s=wP("iframefcb");return Lt()[s]=()=>{gapi.load?n():t(Mt(r,"network-request-failed"))},EP(`${TP()}?onload=${s}`).catch(i=>t(i))}}).catch(e=>{throw Pa=null,e})}let Pa=null;function gN(r){return Pa=Pa||_N(r),Pa}/**
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
 */const yN=new Lo(5e3,15e3),IN="__/auth/iframe",EN="emulator/auth/iframe",TN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vN(r){const e=r.config;$(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?md(e,EN):`https://${r.config.authDomain}/${IN}`,n={apiKey:e.apiKey,appName:r.name,v:Vr},s=wN.get(r.config.apiHost);s&&(n.eid=s);const i=r._getFrameworks();return i.length&&(n.fw=i.join(",")),`${t}?${zs(n).slice(1)}`}async function AN(r){const e=await gN(r),t=Lt().gapi;return $(t,r,"internal-error"),e.open({where:document.body,url:vN(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:TN,dontclear:!0},n=>new Promise(async(s,i)=>{await n.restyle({setHideOnLeave:!1});const o=Mt(r,"network-request-failed"),a=Lt().setTimeout(()=>{i(o)},yN.get());function l(){Lt().clearTimeout(a),s(n)}n.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const SN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bN=500,RN=600,CN="_blank",PN="http://localhost";class Xm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function NN(r,e,t,n=bN,s=RN){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let a="";const l={...SN,width:n.toString(),height:s.toString(),top:i,left:o},u=Ve().toLowerCase();t&&(a=fE(u)?CN:t),hE(u)&&(e=e||PN,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[y,S])=>`${m}${y}=${S},`,"");if(dP(u)&&a!=="_self")return kN(e||"",a),new Xm(null);const f=window.open(e||"",a,d);$(f,r,"popup-blocked");try{f.focus()}catch{}return new Xm(f)}function kN(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const DN="__/auth/handler",xN="emulator/auth/handler",VN=encodeURIComponent("fac");async function Zm(r,e,t,n,s,i){$(r.config.authDomain,r,"auth-domain-config-required"),$(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:Vr,eventId:s};if(e instanceof wE){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",xa(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof Fo){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}r.tenantId&&(o.tid=r.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await r._getAppCheckToken(),u=l?`#${VN}=${encodeURIComponent(l)}`:"";return`${ON(r)}?${zs(a).slice(1)}${u}`}function ON({config:r}){return r.emulator?md(r,xN):`https://${r.authDomain}/${DN}`}/**
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
 */const Hl="webStorageSupport";class MN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=RE,this._completeRedirectFn=oN,this._overrideRedirectResult=rN}async _openPopup(e,t,n,s){Jt(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Zm(e,t,n,Lu(),s);return NN(e,i,Td())}async _openRedirect(e,t,n,s){await this._originValidation(e);const i=await Zm(e,t,n,Lu(),s);return UP(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Jt(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await AN(e),n=new cN(e);return t.register("authEvent",s=>($(s?.authEvent,e,"invalid-auth-event"),{status:n.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Hl,{type:Hl},s=>{const i=s?.[0]?.[Hl];i!==void 0&&t(!!i),Yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=fN(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return yE()||dE()||yd()}}const LN=MN;var e_="@firebase/auth",t_="1.11.0";/**
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
 */class FN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e(n?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function UN(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function BN(r){Ir(new kn("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=n.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const l={apiKey:o,authDomain:a,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:IE(r)},u=new yP(n,s,i,l);return AP(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Ir(new kn("auth-internal",e=>{const t=Id(e.getProvider("auth").getImmediate());return(n=>new FN(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),xt(e_,t_,UN(r)),xt(e_,t_,"esm2020")}/**
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
 */const qN=300,GN=$_("authIdTokenMaxAge")||qN;let n_=null;const zN=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>GN)return;const s=t?.token;n_!==s&&(n_=s,await fetch(r,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function jN(r=oh()){const e=js(r,"auth");if(e.isInitialized())return e.getImmediate();const t=vP(r,{popupRedirectResolver:LN,persistence:[HP,MP,RE]}),n=$_("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(n,location.origin);if(location.origin===i.origin){const o=zN(i.toString());xP(t,o,()=>o(t.currentUser)),DP(t,a=>o(a))}}const s=z_("auth");return s&&SP(t,`http://${s}`),t}function WN(){return document.getElementsByTagName("head")?.[0]??document}IP({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=s=>{const i=Mt("internal-error");i.customData=s,t(i)},n.type="text/javascript",n.charset="UTF-8",WN().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});BN("Browser");var r_={};const s_="@firebase/database",i_="1.1.0";/**
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
 */let VE="";function $N(r){VE=r}/**
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
 */class KN{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ze(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Zi(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class HN{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ut(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const OE=function(r){try{if(typeof window<"u"&&typeof window[r]<"u"){const e=window[r];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new KN(e)}}catch{}return new HN},pr=OE("localStorage"),QN=OE("sessionStorage");/**
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
 */const us=new Ec("@firebase/database"),YN=(function(){let r=1;return function(){return r++}})(),ME=function(r){const e=Ww(r),t=new qw;t.update(e);const n=t.digest();return nh.encodeByteArray(n)},Bo=function(...r){let e="";for(let t=0;t<r.length;t++){const n=r[t];Array.isArray(n)||n&&typeof n=="object"&&typeof n.length=="number"?e+=Bo.apply(null,n):typeof n=="object"?e+=ze(n):e+=n,e+=" "}return e};let Hi=null,o_=!0;const JN=function(r,e){V(!0,"Can't turn on custom loggers persistently."),us.logLevel=ee.VERBOSE,Hi=us.log.bind(us)},Ge=function(...r){if(o_===!0&&(o_=!1,Hi===null&&QN.get("logging_enabled")===!0&&JN()),Hi){const e=Bo.apply(null,r);Hi(e)}},qo=function(r){return function(...e){Ge(r,...e)}},Bu=function(...r){const e="FIREBASE INTERNAL ERROR: "+Bo(...r);us.error(e)},Xt=function(...r){const e=`FIREBASE FATAL ERROR: ${Bo(...r)}`;throw us.error(e),new Error(e)},et=function(...r){const e="FIREBASE WARNING: "+Bo(...r);us.warn(e)},XN=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&et("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Yc=function(r){return typeof r=="number"&&(r!==r||r===Number.POSITIVE_INFINITY||r===Number.NEGATIVE_INFINITY)},ZN=function(r){if(document.readyState==="complete")r();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,r())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Ls="[MIN_NAME]",Nr="[MAX_NAME]",Br=function(r,e){if(r===e)return 0;if(r===Ls||e===Nr)return-1;if(e===Ls||r===Nr)return 1;{const t=a_(r),n=a_(e);return t!==null?n!==null?t-n===0?r.length-e.length:t-n:-1:n!==null?1:r<e?-1:1}},e0=function(r,e){return r===e?0:r<e?-1:1},Pi=function(r,e){if(e&&r in e)return e[r];throw new Error("Missing required key ("+r+") in object: "+ze(e))},vd=function(r){if(typeof r!="object"||r===null)return ze(r);const e=[];for(const n in r)e.push(n);e.sort();let t="{";for(let n=0;n<e.length;n++)n!==0&&(t+=","),t+=ze(e[n]),t+=":",t+=vd(r[e[n]]);return t+="}",t},LE=function(r,e){const t=r.length;if(t<=e)return[r];const n=[];for(let s=0;s<t;s+=e)s+e>t?n.push(r.substring(s,t)):n.push(r.substring(s,s+e));return n};function We(r,e){for(const t in r)r.hasOwnProperty(t)&&e(t,r[t])}const FE=function(r){V(!Yc(r),"Invalid JSON number");const e=11,t=52,n=(1<<e-1)-1;let s,i,o,a,l;r===0?(i=0,o=0,s=1/r===-1/0?1:0):(s=r<0,r=Math.abs(r),r>=Math.pow(2,1-n)?(a=Math.min(Math.floor(Math.log(r)/Math.LN2),n),i=a+n,o=Math.round(r*Math.pow(2,t-a)-Math.pow(2,t))):(i=0,o=Math.round(r/Math.pow(2,1-n-t))));const u=[];for(l=t;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(s?1:0),u.reverse();const d=u.join("");let f="";for(l=0;l<64;l+=8){let m=parseInt(d.substr(l,8),2).toString(16);m.length===1&&(m="0"+m),f=f+m}return f.toLowerCase()},t0=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},n0=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function r0(r,e){let t="Unknown Error";r==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":r==="permission_denied"?t="Client doesn't have permission to access the desired data.":r==="unavailable"&&(t="The service is unavailable");const n=new Error(r+" at "+e._path.toString()+": "+t);return n.code=r.toUpperCase(),n}const s0=new RegExp("^-?(0*)\\d{1,10}$"),i0=-2147483648,o0=2147483647,a_=function(r){if(s0.test(r)){const e=Number(r);if(e>=i0&&e<=o0)return e}return null},si=function(r){try{r()}catch(e){setTimeout(()=>{const t=e.stack||"";throw et("Exception was thrown by user callback.",t),e},Math.floor(0))}},a0=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Qi=function(r,e){const t=setTimeout(r,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class c0{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,yt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(n=>this.appCheck=n)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){et(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class l0{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Ge("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',et(e)}}class Na{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Na.OWNER="owner";/**
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
 */const Ad="5",UE="v",BE="s",qE="r",GE="f",zE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,jE="ls",WE="p",qu="ac",$E="websocket",KE="long_polling";/**
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
 */class HE{constructor(e,t,n,s,i=!1,o="",a=!1,l=!1,u=null){this.secure=t,this.namespace=n,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=pr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&pr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function u0(r){return r.host!==r.internalHost||r.isCustomHost()||r.includeNamespaceInQueryParams}function QE(r,e,t){V(typeof e=="string","typeof type must == string"),V(typeof t=="object","typeof params must == object");let n;if(e===$E)n=(r.secure?"wss://":"ws://")+r.internalHost+"/.ws?";else if(e===KE)n=(r.secure?"https://":"http://")+r.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);u0(r)&&(t.ns=r.namespace);const s=[];return We(t,(i,o)=>{s.push(i+"="+o)}),n+s.join("&")}/**
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
 */class h0{constructor(){this.counters_={}}incrementCounter(e,t=1){Ut(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Aw(this.counters_)}}/**
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
 */const Ql={},Yl={};function Sd(r){const e=r.toString();return Ql[e]||(Ql[e]=new h0),Ql[e]}function d0(r,e){const t=r.toString();return Yl[t]||(Yl[t]=e()),Yl[t]}/**
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
 */class f0{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const n=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<n.length;++s)n[s]&&si(()=>{this.onMessage_(n[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const c_="start",p0="close",m0="pLPCommand",_0="pRTLPCB",YE="id",JE="pw",XE="ser",g0="cb",y0="seg",I0="ts",E0="d",T0="dframe",ZE=1870,eT=30,w0=ZE-eT,v0=25e3,A0=3e4;class rs{constructor(e,t,n,s,i,o,a){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=qo(e),this.stats_=Sd(t),this.urlFn=l=>(this.appCheckToken&&(l[qu]=this.appCheckToken),QE(t,KE,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new f0(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(A0)),ZN(()=>{if(this.isClosed_)return;this.scriptTagHolder=new bd((...i)=>{const[o,a,l,u,d]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===c_)this.id=a,this.password=l;else if(o===p0)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const n={};n[c_]="t",n[XE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(n[g0]=this.scriptTagHolder.uniqueCallbackIdentifier),n[UE]=Ad,this.transportSessionId&&(n[BE]=this.transportSessionId),this.lastSessionId&&(n[jE]=this.lastSessionId),this.applicationId&&(n[WE]=this.applicationId),this.appCheckToken&&(n[qu]=this.appCheckToken),typeof location<"u"&&location.hostname&&zE.test(location.hostname)&&(n[qE]=GE);const s=this.urlFn(n);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){rs.forceAllow_=!0}static forceDisallow(){rs.forceDisallow_=!0}static isAvailable(){return rs.forceAllow_?!0:!rs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!t0()&&!n0()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=ze(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=B_(t),s=LE(n,w0);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const n={};n[T0]="t",n[YE]=e,n[JE]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=ze(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class bd{constructor(e,t,n,s){this.onDisconnect=n,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=YN(),window[m0+this.uniqueCallbackIdentifier]=e,window[_0+this.uniqueCallbackIdentifier]=t,this.myIFrame=bd.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ge("frame writing exception"),a.stack&&Ge(a.stack),Ge(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ge("No IE domain setting required")}catch{const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[YE]=this.myID,e[JE]=this.myPW,e[XE]=this.currentSerial;let t=this.urlFn(e),n="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+eT+n.length<=ZE;){const o=this.pendingSegs.shift();n=n+"&"+y0+s+"="+o.seg+"&"+I0+s+"="+o.ts+"&"+E0+s+"="+o.d,s++}return t=t+n,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(n,Math.floor(v0)),i=()=>{clearTimeout(s),n()};this.addTag(e,i)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const s=n.readyState;(!s||s==="loaded"||s==="complete")&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{Ge("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch{}},Math.floor(1))}}/**
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
 */const S0=16384,b0=45e3;let sc=null;typeof MozWebSocket<"u"?sc=MozWebSocket:typeof WebSocket<"u"&&(sc=WebSocket);class It{constructor(e,t,n,s,i,o,a){this.connId=e,this.applicationId=n,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=qo(this.connId),this.stats_=Sd(t),this.connURL=It.connectionURL_(t,o,a,s,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,s,i){const o={};return o[UE]=Ad,typeof location<"u"&&location.hostname&&zE.test(location.hostname)&&(o[qE]=GE),t&&(o[BE]=t),n&&(o[jE]=n),s&&(o[qu]=s),i&&(o[WE]=i),QE(e,$E,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,pr.set("previous_websocket_failure",!0);try{let n;Vw(),this.mySock=new sc(this.connURL,[],n)}catch(n){this.log_("Error instantiating WebSocket.");const s=n.message||n.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=n=>{this.handleIncomingFrame(n)},this.mySock.onerror=n=>{this.log_("WebSocket error.  Closing connection.");const s=n.message||n.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){It.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&sc!==null&&!It.forceDisallow_}static previouslyFailed(){return pr.isInMemoryStorage||pr.get("previous_websocket_failure")===!0}markConnectionHealthy(){pr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const n=Zi(t);this.onMessage(n)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(V(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const n=this.extractFrameCount_(t);n!==null&&this.appendFrame_(n)}}send(e){this.resetKeepAlive();const t=ze(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=LE(t,S0);n.length>1&&this.sendString_(String(n.length));for(let s=0;s<n.length;s++)this.sendString_(n[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(b0))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}It.responsesRequiredToBeHealthy=2;It.healthyTimeout=3e4;/**
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
 */class _o{static get ALL_TRANSPORTS(){return[rs,It]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=It&&It.isAvailable();let n=t&&!It.previouslyFailed();if(e.webSocketOnly&&(t||et("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[It];else{const s=this.transports_=[];for(const i of _o.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);_o.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}_o.globalTransportInitialized_=!1;/**
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
 */const R0=6e4,C0=5e3,P0=10*1024,N0=100*1024,Jl="t",l_="d",k0="s",u_="r",D0="e",h_="o",d_="a",f_="n",p_="p",x0="h";class V0{constructor(e,t,n,s,i,o,a,l,u,d){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=qo("c:"+this.id+":"),this.transportManager_=new _o(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Qi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>N0?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>P0?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Jl in e){const t=e[Jl];t===d_?this.upgradeIfSecondaryHealthy_():t===u_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===h_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Pi("t",e),n=Pi("d",e);if(t==="c")this.onSecondaryControl_(n);else if(t==="d")this.pendingDataMessages.push(n);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:p_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:d_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:f_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Pi("t",e),n=Pi("d",e);t==="c"?this.onControl_(n):t==="d"&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Pi(Jl,e);if(l_ in e){const n=e[l_];if(t===x0){const s={...n};this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===f_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===k0?this.onConnectionShutdown_(n):t===u_?this.onReset_(n):t===D0?Bu("Server Error: "+n):t===h_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Bu("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Ad!==n&&et("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Qi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(R0))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Qi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(C0))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:p_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(pr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class tT{put(e,t,n,s){}merge(e,t,n,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class nT{constructor(e){this.allowedEvents_=e,this.listeners_={},V(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let s=0;s<n.length;s++)n[s].callback.apply(n[s].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const s=this.getInitialEvent(e);s&&t.apply(n,s)}off(e,t,n){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===t&&(!n||n===s[i].context)){s.splice(i,1);return}}validateEventType_(e){V(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class ic extends nT{static getInstance(){return new ic}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!sh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return V(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const m_=32,__=768;class de{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let n=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[n]=this.pieces_[s],n++);this.pieces_.length=n,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function ae(){return new de("")}function Q(r){return r.pieceNum_>=r.pieces_.length?null:r.pieces_[r.pieceNum_]}function Bn(r){return r.pieces_.length-r.pieceNum_}function me(r){let e=r.pieceNum_;return e<r.pieces_.length&&e++,new de(r.pieces_,e)}function Rd(r){return r.pieceNum_<r.pieces_.length?r.pieces_[r.pieces_.length-1]:null}function O0(r){let e="";for(let t=r.pieceNum_;t<r.pieces_.length;t++)r.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(r.pieces_[t])));return e||"/"}function go(r,e=0){return r.pieces_.slice(r.pieceNum_+e)}function rT(r){if(r.pieceNum_>=r.pieces_.length)return null;const e=[];for(let t=r.pieceNum_;t<r.pieces_.length-1;t++)e.push(r.pieces_[t]);return new de(e,0)}function ve(r,e){const t=[];for(let n=r.pieceNum_;n<r.pieces_.length;n++)t.push(r.pieces_[n]);if(e instanceof de)for(let n=e.pieceNum_;n<e.pieces_.length;n++)t.push(e.pieces_[n]);else{const n=e.split("/");for(let s=0;s<n.length;s++)n[s].length>0&&t.push(n[s])}return new de(t,0)}function Y(r){return r.pieceNum_>=r.pieces_.length}function ot(r,e){const t=Q(r),n=Q(e);if(t===null)return e;if(t===n)return ot(me(r),me(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+r+")")}function M0(r,e){const t=go(r,0),n=go(e,0);for(let s=0;s<t.length&&s<n.length;s++){const i=Br(t[s],n[s]);if(i!==0)return i}return t.length===n.length?0:t.length<n.length?-1:1}function Cd(r,e){if(Bn(r)!==Bn(e))return!1;for(let t=r.pieceNum_,n=e.pieceNum_;t<=r.pieces_.length;t++,n++)if(r.pieces_[t]!==e.pieces_[n])return!1;return!0}function pt(r,e){let t=r.pieceNum_,n=e.pieceNum_;if(Bn(r)>Bn(e))return!1;for(;t<r.pieces_.length;){if(r.pieces_[t]!==e.pieces_[n])return!1;++t,++n}return!0}class L0{constructor(e,t){this.errorPrefix_=t,this.parts_=go(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=Ic(this.parts_[n]);sT(this)}}function F0(r,e){r.parts_.length>0&&(r.byteLength_+=1),r.parts_.push(e),r.byteLength_+=Ic(e),sT(r)}function U0(r){const e=r.parts_.pop();r.byteLength_-=Ic(e),r.parts_.length>0&&(r.byteLength_-=1)}function sT(r){if(r.byteLength_>__)throw new Error(r.errorPrefix_+"has a key path longer than "+__+" bytes ("+r.byteLength_+").");if(r.parts_.length>m_)throw new Error(r.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+m_+") or object contains a cycle "+cr(r))}function cr(r){return r.parts_.length===0?"":"in property '"+r.parts_.join(".")+"'"}/**
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
 */class Pd extends nT{static getInstance(){return new Pd}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const n=!document[e];n!==this.visible_&&(this.visible_=n,this.trigger("visible",n))},!1)}getInitialEvent(e){return V(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ni=1e3,B0=300*1e3,g_=30*1e3,q0=1.3,G0=3e4,z0="server_kill",y_=3;class $t extends tT{constructor(e,t,n,s,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=$t.nextPersistentConnectionId_++,this.log_=qo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ni,this.maxReconnectDelay_=B0,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Pd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ic.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const s=++this.requestNumber_,i={r:s,a:e,b:t};this.log_(ze(i)),V(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[s]=n)}get(e){this.initConnection_();const t=new Nt,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),V(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),V(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:n};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(e){const t=e.query,n=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+n+" for "+s);const i={p:n},o="q";e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,u=a.s;$t.warnOnListenWarnings_(l,t),(this.listens.get(n)&&this.listens.get(n).get(s))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(n,s),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Ut(e,"w")){const n=fs(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();et(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Bw(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=g_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Uw(e)?"auth":"gauth",n={cred:e};this.authOverride_===null?n.noauth=!0:typeof this.authOverride_=="object"&&(n.authvar=this.authOverride_),this.sendRequest(t,n,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,n=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){const n=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+s),V(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,s)&&this.connected_&&this.sendUnlisten_(n,s,e._queryObject,t)}sendUnlisten_(e,t,n,s){this.log_("Unlisten on "+e+" for "+t);const i={p:e},o="n";s&&(i.q=n,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,s){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,n,s){this.putInternal("p",e,t,n,s)}merge(e,t,n,s){this.putInternal("m",e,t,n,s)}putInternal(e,t,n,s,i){this.initConnection_();const o={p:t,d:n};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,i=>{this.log_(t+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,n=>{if(n.s!=="ok"){const i=n.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ze(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Bu("Unrecognized action received from server: "+ze(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){V(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ni,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ni,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>G0&&(this.reconnectDelay_=Ni),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*q0)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+$t.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,n())},u=function(f){V(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,m]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Ge("getToken() completed but was canceled"):(Ge("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=m&&m.token,a=new V0(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,y=>{et(y+" ("+this.repoInfo_.toString()+")"),this.interrupt(z0)},i))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&et(f),l())}}}interrupt(e){Ge("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ge("Resuming connection for reason: "+e),delete this.interruptReasons_[e],xa(this.interruptReasons_)&&(this.reconnectDelay_=Ni,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;t?n=t.map(i=>vd(i)).join("$"):n="default";const s=this.removeListen_(e,n);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const n=new de(e).toString();let s;if(this.listens.has(n)){const i=this.listens.get(n);s=i.get(t),i.delete(t),i.size===0&&this.listens.delete(n)}else s=void 0;return s}onAuthRevoked_(e,t){Ge("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=y_&&(this.reconnectDelay_=g_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Ge("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=y_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+VE.replace(/\./g,"-")]=1,sh()?e["framework.cordova"]=1:Q_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ic.getInstance().currentlyOnline();return xa(this.interruptReasons_)&&e}}$t.nextPersistentConnectionId_=0;$t.nextConnectionId_=0;/**
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
 */class Jc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new X(Ls,e),s=new X(Ls,t);return this.compare(n,s)!==0}minPost(){return X.MIN}}/**
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
 */let pa;class iT extends Jc{static get __EMPTY_NODE(){return pa}static set __EMPTY_NODE(e){pa=e}compare(e,t){return Br(e.name,t.name)}isDefinedOn(e){throw Gs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return X.MIN}maxPost(){return new X(Nr,pa)}makePost(e,t){return V(typeof e=="string","KeyIndex indexValue must always be a string."),new X(e,pa)}toString(){return".key"}}const hs=new iT;/**
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
 */class ma{constructor(e,t,n,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?n(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class qe{constructor(e,t,n,s,i){this.key=e,this.value=t,this.color=n??qe.RED,this.left=s??at.EMPTY_NODE,this.right=i??at.EMPTY_NODE}copy(e,t,n,s,i){return new qe(e??this.key,t??this.value,n??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const i=n(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,t,n),null):i===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return at.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,s;if(n=this,t(e,n.key)<0)!n.left.isEmpty()&&!n.left.isRed_()&&!n.left.left.isRed_()&&(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),!n.right.isEmpty()&&!n.right.isRed_()&&!n.right.left.isRed_()&&(n=n.moveRedRight_()),t(e,n.key)===0){if(n.right.isEmpty())return at.EMPTY_NODE;s=n.right.min_(),n=n.copy(s.key,s.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}qe.RED=!0;qe.BLACK=!1;class j0{copy(e,t,n,s,i){return this}insert(e,t,n){return new qe(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class at{constructor(e,t=at.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new at(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,qe.BLACK,null,null))}remove(e){return new at(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,qe.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),t===0)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,s=null;for(;!n.isEmpty();)if(t=this.comparator_(e,n.key),t===0){if(n.left.isEmpty())return s?s.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}else t<0?n=n.left:t>0&&(s=n,n=n.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ma(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ma(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ma(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ma(this.root_,null,this.comparator_,!0,e)}}at.EMPTY_NODE=new j0;/**
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
 */function W0(r,e){return Br(r.name,e.name)}function Nd(r,e){return Br(r,e)}/**
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
 */let Gu;function $0(r){Gu=r}const oT=function(r){return typeof r=="number"?"number:"+FE(r):"string:"+r},aT=function(r){if(r.isLeafNode()){const e=r.val();V(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ut(e,".sv"),"Priority must be a string or number.")}else V(r===Gu||r.isEmpty(),"priority of unexpected type.");V(r===Gu||r.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let I_;class Fe{static set __childrenNodeConstructor(e){I_=e}static get __childrenNodeConstructor(){return I_}constructor(e,t=Fe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,V(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),aT(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Fe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Fe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Y(e)?this:Q(e)===".priority"?this.priorityNode_:Fe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Fe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=Q(e);return n===null?t:t.isEmpty()&&n!==".priority"?this:(V(n!==".priority"||Bn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(n,Fe.__childrenNodeConstructor.EMPTY_NODE.updateChild(me(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+oT(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=FE(this.value_):e+=this.value_,this.lazyHash_=ME(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Fe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Fe.__childrenNodeConstructor?-1:(V(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,s=Fe.VALUE_TYPE_ORDER.indexOf(t),i=Fe.VALUE_TYPE_ORDER.indexOf(n);return V(s>=0,"Unknown leaf type: "+t),V(i>=0,"Unknown leaf type: "+n),s===i?n==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Fe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let cT,lT;function K0(r){cT=r}function H0(r){lT=r}class Q0 extends Jc{compare(e,t){const n=e.node.getPriority(),s=t.node.getPriority(),i=n.compareTo(s);return i===0?Br(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return X.MIN}maxPost(){return new X(Nr,new Fe("[PRIORITY-POST]",lT))}makePost(e,t){const n=cT(e);return new X(t,new Fe("[PRIORITY-POST]",n))}toString(){return".priority"}}const Ae=new Q0;/**
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
 */const Y0=Math.log(2);class J0{constructor(e){const t=i=>parseInt(Math.log(i)/Y0,10),n=i=>parseInt(Array(i+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=n(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const oc=function(r,e,t,n){r.sort(e);const s=function(l,u){const d=u-l;let f,m;if(d===0)return null;if(d===1)return f=r[l],m=t?t(f):f,new qe(m,f.node,qe.BLACK,null,null);{const y=parseInt(d/2,10)+l,S=s(l,y),N=s(y+1,u);return f=r[y],m=t?t(f):f,new qe(m,f.node,qe.BLACK,S,N)}},i=function(l){let u=null,d=null,f=r.length;const m=function(S,N){const k=f-S,F=f;f-=S;const G=s(k+1,F),B=r[k],se=t?t(B):B;y(new qe(se,B.node,N,null,G))},y=function(S){u?(u.left=S,u=S):(d=S,u=S)};for(let S=0;S<l.count;++S){const N=l.nextBitIsOne(),k=Math.pow(2,l.count-(S+1));N?m(k,qe.BLACK):(m(k,qe.BLACK),m(k,qe.RED))}return d},o=new J0(r.length),a=i(o);return new at(n||e,a)};/**
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
 */let Xl;const Jr={};class Wt{static get Default(){return V(Jr&&Ae,"ChildrenNode.ts has not been loaded"),Xl=Xl||new Wt({".priority":Jr},{".priority":Ae}),Xl}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=fs(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof at?t:null}hasIndex(e){return Ut(this.indexSet_,e.toString())}addIndex(e,t){V(e!==hs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let s=!1;const i=t.getIterator(X.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),n.push(o),o=i.getNext();let a;s?a=oc(n,e.getCompare()):a=Jr;const l=e.toString(),u={...this.indexSet_};u[l]=e;const d={...this.indexes_};return d[l]=a,new Wt(d,u)}addToIndexes(e,t){const n=Va(this.indexes_,(s,i)=>{const o=fs(this.indexSet_,i);if(V(o,"Missing index implementation for "+i),s===Jr)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(X.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),oc(a,o.getCompare())}else return Jr;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new X(e.name,a))),l.insert(e,e.node)}});return new Wt(n,this.indexSet_)}removeFromIndexes(e,t){const n=Va(this.indexes_,s=>{if(s===Jr)return s;{const i=t.get(e.name);return i?s.remove(new X(e.name,i)):s}});return new Wt(n,this.indexSet_)}}/**
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
 */let ki;class W{static get EMPTY_NODE(){return ki||(ki=new W(new at(Nd),null,Wt.Default))}constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&aT(this.priorityNode_),this.children_.isEmpty()&&V(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ki}updatePriority(e){return this.children_.isEmpty()?this:new W(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?ki:t}}getChild(e){const t=Q(e);return t===null?this:this.getImmediateChild(t).getChild(me(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(V(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const n=new X(e,t);let s,i;t.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(s=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const o=s.isEmpty()?ki:this.priorityNode_;return new W(s,o,i)}}updateChild(e,t){const n=Q(e);if(n===null)return t;{V(Q(e)!==".priority"||Bn(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(n).updateChild(me(e),t);return this.updateImmediateChild(n,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,s=0,i=!0;if(this.forEachChild(Ae,(o,a)=>{t[o]=a.val(e),n++,i&&W.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*n){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+oT(this.getPriority().val())+":"),this.forEachChild(Ae,(t,n)=>{const s=n.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":ME(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const s=this.resolveIndex_(n);if(s){const i=s.getPredecessorKey(new X(e,t));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const n=t.minKey();return n&&n.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new X(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const n=t.maxKey();return n&&n.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new X(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,X.Wrap);let i=s.peek();for(;i!=null&&t.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,X.Wrap);let i=s.peek();for(;i!=null&&t.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Go?-1:0}withIndex(e){if(e===hs||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new W(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===hs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const n=this.getIterator(Ae),s=t.getIterator(Ae);let i=n.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=n.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===hs?null:this.indexMap_.get(e.toString())}}W.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class X0 extends W{constructor(){super(new at(Nd),W.EMPTY_NODE,Wt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return W.EMPTY_NODE}isEmpty(){return!1}}const Go=new X0;Object.defineProperties(X,{MIN:{value:new X(Ls,W.EMPTY_NODE)},MAX:{value:new X(Nr,Go)}});iT.__EMPTY_NODE=W.EMPTY_NODE;Fe.__childrenNodeConstructor=W;$0(Go);H0(Go);/**
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
 */const Z0=!0;function Ce(r,e=null){if(r===null)return W.EMPTY_NODE;if(typeof r=="object"&&".priority"in r&&(e=r[".priority"]),V(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof r=="object"&&".value"in r&&r[".value"]!==null&&(r=r[".value"]),typeof r!="object"||".sv"in r){const t=r;return new Fe(t,Ce(e))}if(!(r instanceof Array)&&Z0){const t=[];let n=!1;if(We(r,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ce(a);l.isEmpty()||(n=n||!l.getPriority().isEmpty(),t.push(new X(o,l)))}}),t.length===0)return W.EMPTY_NODE;const i=oc(t,W0,o=>o.name,Nd);if(n){const o=oc(t,Ae.getCompare());return new W(i,Ce(e),new Wt({".priority":o},{".priority":Ae}))}else return new W(i,Ce(e),Wt.Default)}else{let t=W.EMPTY_NODE;return We(r,(n,s)=>{if(Ut(r,n)&&n.substring(0,1)!=="."){const i=Ce(s);(i.isLeafNode()||!i.isEmpty())&&(t=t.updateImmediateChild(n,i))}}),t.updatePriority(Ce(e))}}K0(Ce);/**
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
 */class ek extends Jc{constructor(e){super(),this.indexPath_=e,V(!Y(e)&&Q(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),s=this.extractChild(t.node),i=n.compareTo(s);return i===0?Br(e.name,t.name):i}makePost(e,t){const n=Ce(e),s=W.EMPTY_NODE.updateChild(this.indexPath_,n);return new X(t,s)}maxPost(){const e=W.EMPTY_NODE.updateChild(this.indexPath_,Go);return new X(Nr,e)}toString(){return go(this.indexPath_,0).join("/")}}/**
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
 */class tk extends Jc{compare(e,t){const n=e.node.compareTo(t.node);return n===0?Br(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return X.MIN}maxPost(){return X.MAX}makePost(e,t){const n=Ce(e);return new X(t,n)}toString(){return".value"}}const nk=new tk;/**
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
 */function uT(r){return{type:"value",snapshotNode:r}}function Fs(r,e){return{type:"child_added",snapshotNode:e,childName:r}}function yo(r,e){return{type:"child_removed",snapshotNode:e,childName:r}}function Io(r,e,t){return{type:"child_changed",snapshotNode:e,childName:r,oldSnap:t}}function rk(r,e){return{type:"child_moved",snapshotNode:e,childName:r}}/**
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
 */class kd{constructor(e){this.index_=e}updateChild(e,t,n,s,i,o){V(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(n.getChild(s))&&a.isEmpty()===n.isEmpty()||(o!=null&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(yo(t,a)):V(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Fs(t,n)):o.trackChildChange(Io(t,n,a))),e.isLeafNode()&&n.isEmpty())?e:e.updateImmediateChild(t,n).withIndex(this.index_)}updateFullNode(e,t,n){return n!=null&&(e.isLeafNode()||e.forEachChild(Ae,(s,i)=>{t.hasChild(s)||n.trackChildChange(yo(s,i))}),t.isLeafNode()||t.forEachChild(Ae,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||n.trackChildChange(Io(s,i,o))}else n.trackChildChange(Fs(s,i))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?W.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Eo{constructor(e){this.indexedFilter_=new kd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Eo.getStartPost_(e),this.endPost_=Eo.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,s,i,o){return this.matches(new X(t,n))||(n=W.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,s,i,o)}updateFullNode(e,t,n){t.isLeafNode()&&(t=W.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(W.EMPTY_NODE);const i=this;return t.forEachChild(Ae,(o,a)=>{i.matches(new X(o,a))||(s=s.updateImmediateChild(o,W.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class sk{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const n=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?n<=0:n<0},this.withinEndPost=t=>{const n=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?n<=0:n<0},this.rangedFilter_=new Eo(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,s,i,o){return this.rangedFilter_.matches(new X(t,n))||(n=W.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,s,i,o):this.fullLimitUpdateChild_(e,t,n,i,o)}updateFullNode(e,t,n){let s;if(t.isLeafNode()||t.isEmpty())s=W.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=W.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(W.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,W.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,s,i){let o;if(this.reverse_){const f=this.index_.getCompare();o=(m,y)=>f(y,m)}else o=this.index_.getCompare();const a=e;V(a.numChildren()===this.limit_,"");const l=new X(t,n),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(t)){const f=a.getImmediateChild(t);let m=s.getChildAfterChild(this.index_,u,this.reverse_);for(;m!=null&&(m.name===t||a.hasChild(m.name));)m=s.getChildAfterChild(this.index_,m,this.reverse_);const y=m==null?1:o(m,l);if(d&&!n.isEmpty()&&y>=0)return i?.trackChildChange(Io(t,n,f)),a.updateImmediateChild(t,n);{i?.trackChildChange(yo(t,f));const N=a.updateImmediateChild(t,W.EMPTY_NODE);return m!=null&&this.rangedFilter_.matches(m)?(i?.trackChildChange(Fs(m.name,m.node)),N.updateImmediateChild(m.name,m.node)):N}}else return n.isEmpty()?e:d&&o(u,l)>=0?(i!=null&&(i.trackChildChange(yo(u.name,u.node)),i.trackChildChange(Fs(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(u.name,W.EMPTY_NODE)):e}}/**
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
 */class Dd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ae}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return V(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return V(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ls}hasEnd(){return this.endSet_}getIndexEndValue(){return V(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return V(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Nr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return V(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ae}copy(){const e=new Dd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ik(r){return r.loadsAllData()?new kd(r.getIndex()):r.hasLimit()?new sk(r):new Eo(r)}function E_(r){const e={};if(r.isDefault())return e;let t;if(r.index_===Ae?t="$priority":r.index_===nk?t="$value":r.index_===hs?t="$key":(V(r.index_ instanceof ek,"Unrecognized index type!"),t=r.index_.toString()),e.orderBy=ze(t),r.startSet_){const n=r.startAfterSet_?"startAfter":"startAt";e[n]=ze(r.indexStartValue_),r.startNameSet_&&(e[n]+=","+ze(r.indexStartName_))}if(r.endSet_){const n=r.endBeforeSet_?"endBefore":"endAt";e[n]=ze(r.indexEndValue_),r.endNameSet_&&(e[n]+=","+ze(r.indexEndName_))}return r.limitSet_&&(r.isViewFromLeft()?e.limitToFirst=r.limit_:e.limitToLast=r.limit_),e}function T_(r){const e={};if(r.startSet_&&(e.sp=r.indexStartValue_,r.startNameSet_&&(e.sn=r.indexStartName_),e.sin=!r.startAfterSet_),r.endSet_&&(e.ep=r.indexEndValue_,r.endNameSet_&&(e.en=r.indexEndName_),e.ein=!r.endBeforeSet_),r.limitSet_){e.l=r.limit_;let t=r.viewFrom_;t===""&&(r.isViewFromLeft()?t="l":t="r"),e.vf=t}return r.index_!==Ae&&(e.i=r.index_.toString()),e}/**
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
 */class ac extends tT{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(V(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,n,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=s,this.log_=qo("p:rest:"),this.listens_={}}listen(e,t,n,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=ac.getListenId_(e,n),a={};this.listens_[o]=a;const l=E_(e._queryParams);this.restRequest_(i+".json",l,(u,d)=>{let f=d;if(u===404&&(f=null,u=null),u===null&&this.onDataUpdate_(i,f,!1,n),fs(this.listens_,o)===a){let m;u?u===401?m="permission_denied":m="rest_error:"+u:m="ok",s(m,null)}})}unlisten(e,t){const n=ac.getListenId_(e,t);delete this.listens_[n]}get(e){const t=E_(e._queryParams),n=e._path.toString(),s=new Nt;return this.restRequest_(n+".json",t,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(n,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(t.auth=s.accessToken),i&&i.token&&(t.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+zs(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Zi(a.responseText)}catch{et("Failed to parse JSON response for "+o+": "+a.responseText)}n(null,l)}else a.status!==401&&a.status!==404&&et("Got unsuccessful REST response for "+o+" Status: "+a.status),n(a.status);n=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class ok{constructor(){this.rootNode_=W.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function cc(){return{value:null,children:new Map}}function ii(r,e,t){if(Y(e))r.value=t,r.children.clear();else if(r.value!==null)r.value=r.value.updateChild(e,t);else{const n=Q(e);r.children.has(n)||r.children.set(n,cc());const s=r.children.get(n);e=me(e),ii(s,e,t)}}function zu(r,e){if(Y(e))return r.value=null,r.children.clear(),!0;if(r.value!==null){if(r.value.isLeafNode())return!1;{const t=r.value;return r.value=null,t.forEachChild(Ae,(n,s)=>{ii(r,new de(n),s)}),zu(r,e)}}else if(r.children.size>0){const t=Q(e);return e=me(e),r.children.has(t)&&zu(r.children.get(t),e)&&r.children.delete(t),r.children.size===0}else return!0}function ju(r,e,t){r.value!==null?t(e,r.value):ak(r,(n,s)=>{const i=new de(e.toString()+"/"+n);ju(s,i,t)})}function ak(r,e){r.children.forEach((t,n)=>{e(n,t)})}/**
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
 */class ck{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&We(this.last_,(n,s)=>{t[n]=t[n]-s}),this.last_=e,t}}/**
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
 */const w_=10*1e3,lk=30*1e3,uk=300*1e3;class hk{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new ck(e);const n=w_+(lk-w_)*Math.random();Qi(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;We(e,(s,i)=>{i>0&&Ut(this.statsToReport_,s)&&(t[s]=i,n=!0)}),n&&this.server_.reportStats(t),Qi(this.reportStats_.bind(this),Math.floor(Math.random()*2*uk))}}/**
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
 */var Tt;(function(r){r[r.OVERWRITE=0]="OVERWRITE",r[r.MERGE=1]="MERGE",r[r.ACK_USER_WRITE=2]="ACK_USER_WRITE",r[r.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Tt||(Tt={}));function xd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Vd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Od(r){return{fromUser:!1,fromServer:!0,queryId:r,tagged:!0}}/**
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
 */class lc{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Tt.ACK_USER_WRITE,this.source=xd()}operationForChild(e){if(Y(this.path)){if(this.affectedTree.value!=null)return V(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new de(e));return new lc(ae(),t,this.revert)}}else return V(Q(this.path)===e,"operationForChild called for unrelated child."),new lc(me(this.path),this.affectedTree,this.revert)}}/**
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
 */class To{constructor(e,t){this.source=e,this.path=t,this.type=Tt.LISTEN_COMPLETE}operationForChild(e){return Y(this.path)?new To(this.source,ae()):new To(this.source,me(this.path))}}/**
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
 */class kr{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Tt.OVERWRITE}operationForChild(e){return Y(this.path)?new kr(this.source,ae(),this.snap.getImmediateChild(e)):new kr(this.source,me(this.path),this.snap)}}/**
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
 */class Us{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Tt.MERGE}operationForChild(e){if(Y(this.path)){const t=this.children.subtree(new de(e));return t.isEmpty()?null:t.value?new kr(this.source,ae(),t.value):new Us(this.source,ae(),t)}else return V(Q(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Us(this.source,me(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Dr{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Y(e))return this.isFullyInitialized()&&!this.filtered_;const t=Q(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class dk{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function fk(r,e,t,n){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&r.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(rk(o.childName,o.snapshotNode))}),Di(r,s,"child_removed",e,n,t),Di(r,s,"child_added",e,n,t),Di(r,s,"child_moved",i,n,t),Di(r,s,"child_changed",e,n,t),Di(r,s,"value",e,n,t),s}function Di(r,e,t,n,s,i){const o=n.filter(a=>a.type===t);o.sort((a,l)=>mk(r,a,l)),o.forEach(a=>{const l=pk(r,a,i);s.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,r.query_))})})}function pk(r,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,r.index_)),e}function mk(r,e,t){if(e.childName==null||t.childName==null)throw Gs("Should only compare child_ events.");const n=new X(e.childName,e.snapshotNode),s=new X(t.childName,t.snapshotNode);return r.index_.compare(n,s)}/**
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
 */function Xc(r,e){return{eventCache:r,serverCache:e}}function Yi(r,e,t,n){return Xc(new Dr(e,t,n),r.serverCache)}function hT(r,e,t,n){return Xc(r.eventCache,new Dr(e,t,n))}function Wu(r){return r.eventCache.isFullyInitialized()?r.eventCache.getNode():null}function xr(r){return r.serverCache.isFullyInitialized()?r.serverCache.getNode():null}/**
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
 */let Zl;const _k=()=>(Zl||(Zl=new at(e0)),Zl);class _e{static fromObject(e){let t=new _e(null);return We(e,(n,s)=>{t=t.set(new de(n),s)}),t}constructor(e,t=_k()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:ae(),value:this.value};if(Y(e))return null;{const n=Q(e),s=this.children.get(n);if(s!==null){const i=s.findRootMostMatchingPathAndValue(me(e),t);return i!=null?{path:ve(new de(n),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Y(e))return this;{const t=Q(e),n=this.children.get(t);return n!==null?n.subtree(me(e)):new _e(null)}}set(e,t){if(Y(e))return new _e(t,this.children);{const n=Q(e),i=(this.children.get(n)||new _e(null)).set(me(e),t),o=this.children.insert(n,i);return new _e(this.value,o)}}remove(e){if(Y(e))return this.children.isEmpty()?new _e(null):new _e(null,this.children);{const t=Q(e),n=this.children.get(t);if(n){const s=n.remove(me(e));let i;return s.isEmpty()?i=this.children.remove(t):i=this.children.insert(t,s),this.value===null&&i.isEmpty()?new _e(null):new _e(this.value,i)}else return this}}get(e){if(Y(e))return this.value;{const t=Q(e),n=this.children.get(t);return n?n.get(me(e)):null}}setTree(e,t){if(Y(e))return t;{const n=Q(e),i=(this.children.get(n)||new _e(null)).setTree(me(e),t);let o;return i.isEmpty()?o=this.children.remove(n):o=this.children.insert(n,i),new _e(this.value,o)}}fold(e){return this.fold_(ae(),e)}fold_(e,t){const n={};return this.children.inorderTraversal((s,i)=>{n[s]=i.fold_(ve(e,s),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,ae(),t)}findOnPath_(e,t,n){const s=this.value?n(t,this.value):!1;if(s)return s;if(Y(e))return null;{const i=Q(e),o=this.children.get(i);return o?o.findOnPath_(me(e),ve(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ae(),t)}foreachOnPath_(e,t,n){if(Y(e))return this;{this.value&&n(t,this.value);const s=Q(e),i=this.children.get(s);return i?i.foreachOnPath_(me(e),ve(t,s),n):new _e(null)}}foreach(e){this.foreach_(ae(),e)}foreach_(e,t){this.children.inorderTraversal((n,s)=>{s.foreach_(ve(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}}/**
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
 */class At{constructor(e){this.writeTree_=e}static empty(){return new At(new _e(null))}}function Ji(r,e,t){if(Y(e))return new At(new _e(t));{const n=r.writeTree_.findRootMostValueAndPath(e);if(n!=null){const s=n.path;let i=n.value;const o=ot(s,e);return i=i.updateChild(o,t),new At(r.writeTree_.set(s,i))}else{const s=new _e(t),i=r.writeTree_.setTree(e,s);return new At(i)}}}function $u(r,e,t){let n=r;return We(t,(s,i)=>{n=Ji(n,ve(e,s),i)}),n}function v_(r,e){if(Y(e))return At.empty();{const t=r.writeTree_.setTree(e,new _e(null));return new At(t)}}function Ku(r,e){return qr(r,e)!=null}function qr(r,e){const t=r.writeTree_.findRootMostValueAndPath(e);return t!=null?r.writeTree_.get(t.path).getChild(ot(t.path,e)):null}function A_(r){const e=[],t=r.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Ae,(n,s)=>{e.push(new X(n,s))}):r.writeTree_.children.inorderTraversal((n,s)=>{s.value!=null&&e.push(new X(n,s.value))}),e}function Nn(r,e){if(Y(e))return r;{const t=qr(r,e);return t!=null?new At(new _e(t)):new At(r.writeTree_.subtree(e))}}function Hu(r){return r.writeTree_.isEmpty()}function Bs(r,e){return dT(ae(),r.writeTree_,e)}function dT(r,e,t){if(e.value!=null)return t.updateChild(r,e.value);{let n=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(V(i.value!==null,"Priority writes must always be leaf nodes"),n=i.value):t=dT(ve(r,s),i,t)}),!t.getChild(r).isEmpty()&&n!==null&&(t=t.updateChild(ve(r,".priority"),n)),t}}/**
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
 */function Md(r,e){return _T(e,r)}function gk(r,e,t,n,s){V(n>r.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),r.allWrites.push({path:e,snap:t,writeId:n,visible:s}),s&&(r.visibleWrites=Ji(r.visibleWrites,e,t)),r.lastWriteId=n}function yk(r,e,t,n){V(n>r.lastWriteId,"Stacking an older merge on top of newer ones"),r.allWrites.push({path:e,children:t,writeId:n,visible:!0}),r.visibleWrites=$u(r.visibleWrites,e,t),r.lastWriteId=n}function Ik(r,e){for(let t=0;t<r.allWrites.length;t++){const n=r.allWrites[t];if(n.writeId===e)return n}return null}function Ek(r,e){const t=r.allWrites.findIndex(a=>a.writeId===e);V(t>=0,"removeWrite called with nonexistent writeId.");const n=r.allWrites[t];r.allWrites.splice(t,1);let s=n.visible,i=!1,o=r.allWrites.length-1;for(;s&&o>=0;){const a=r.allWrites[o];a.visible&&(o>=t&&Tk(a,n.path)?s=!1:pt(n.path,a.path)&&(i=!0)),o--}if(s){if(i)return wk(r),!0;if(n.snap)r.visibleWrites=v_(r.visibleWrites,n.path);else{const a=n.children;We(a,l=>{r.visibleWrites=v_(r.visibleWrites,ve(n.path,l))})}return!0}else return!1}function Tk(r,e){if(r.snap)return pt(r.path,e);for(const t in r.children)if(r.children.hasOwnProperty(t)&&pt(ve(r.path,t),e))return!0;return!1}function wk(r){r.visibleWrites=fT(r.allWrites,vk,ae()),r.allWrites.length>0?r.lastWriteId=r.allWrites[r.allWrites.length-1].writeId:r.lastWriteId=-1}function vk(r){return r.visible}function fT(r,e,t){let n=At.empty();for(let s=0;s<r.length;++s){const i=r[s];if(e(i)){const o=i.path;let a;if(i.snap)pt(t,o)?(a=ot(t,o),n=Ji(n,a,i.snap)):pt(o,t)&&(a=ot(o,t),n=Ji(n,ae(),i.snap.getChild(a)));else if(i.children){if(pt(t,o))a=ot(t,o),n=$u(n,a,i.children);else if(pt(o,t))if(a=ot(o,t),Y(a))n=$u(n,ae(),i.children);else{const l=fs(i.children,Q(a));if(l){const u=l.getChild(me(a));n=Ji(n,ae(),u)}}}else throw Gs("WriteRecord should have .snap or .children")}}return n}function pT(r,e,t,n,s){if(!n&&!s){const i=qr(r.visibleWrites,e);if(i!=null)return i;{const o=Nn(r.visibleWrites,e);if(Hu(o))return t;if(t==null&&!Ku(o,ae()))return null;{const a=t||W.EMPTY_NODE;return Bs(o,a)}}}else{const i=Nn(r.visibleWrites,e);if(!s&&Hu(i))return t;if(!s&&t==null&&!Ku(i,ae()))return null;{const o=function(u){return(u.visible||s)&&(!n||!~n.indexOf(u.writeId))&&(pt(u.path,e)||pt(e,u.path))},a=fT(r.allWrites,o,e),l=t||W.EMPTY_NODE;return Bs(a,l)}}}function Ak(r,e,t){let n=W.EMPTY_NODE;const s=qr(r.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Ae,(i,o)=>{n=n.updateImmediateChild(i,o)}),n;if(t){const i=Nn(r.visibleWrites,e);return t.forEachChild(Ae,(o,a)=>{const l=Bs(Nn(i,new de(o)),a);n=n.updateImmediateChild(o,l)}),A_(i).forEach(o=>{n=n.updateImmediateChild(o.name,o.node)}),n}else{const i=Nn(r.visibleWrites,e);return A_(i).forEach(o=>{n=n.updateImmediateChild(o.name,o.node)}),n}}function Sk(r,e,t,n,s){V(n||s,"Either existingEventSnap or existingServerSnap must exist");const i=ve(e,t);if(Ku(r.visibleWrites,i))return null;{const o=Nn(r.visibleWrites,i);return Hu(o)?s.getChild(t):Bs(o,s.getChild(t))}}function bk(r,e,t,n){const s=ve(e,t),i=qr(r.visibleWrites,s);if(i!=null)return i;if(n.isCompleteForChild(t)){const o=Nn(r.visibleWrites,s);return Bs(o,n.getNode().getImmediateChild(t))}else return null}function Rk(r,e){return qr(r.visibleWrites,e)}function Ck(r,e,t,n,s,i,o){let a;const l=Nn(r.visibleWrites,e),u=qr(l,ae());if(u!=null)a=u;else if(t!=null)a=Bs(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],f=o.getCompare(),m=i?a.getReverseIteratorFrom(n,o):a.getIteratorFrom(n,o);let y=m.getNext();for(;y&&d.length<s;)f(y,n)!==0&&d.push(y),y=m.getNext();return d}else return[]}function Pk(){return{visibleWrites:At.empty(),allWrites:[],lastWriteId:-1}}function uc(r,e,t,n){return pT(r.writeTree,r.treePath,e,t,n)}function Ld(r,e){return Ak(r.writeTree,r.treePath,e)}function S_(r,e,t,n){return Sk(r.writeTree,r.treePath,e,t,n)}function hc(r,e){return Rk(r.writeTree,ve(r.treePath,e))}function Nk(r,e,t,n,s,i){return Ck(r.writeTree,r.treePath,e,t,n,s,i)}function Fd(r,e,t){return bk(r.writeTree,r.treePath,e,t)}function mT(r,e){return _T(ve(r.treePath,e),r.writeTree)}function _T(r,e){return{treePath:r,writeTree:e}}/**
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
 */class kk{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;V(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),V(n!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(n);if(s){const i=s.type;if(t==="child_added"&&i==="child_removed")this.changeMap.set(n,Io(n,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&i==="child_added")this.changeMap.delete(n);else if(t==="child_removed"&&i==="child_changed")this.changeMap.set(n,yo(n,s.oldSnap));else if(t==="child_changed"&&i==="child_added")this.changeMap.set(n,Fs(n,e.snapshotNode));else if(t==="child_changed"&&i==="child_changed")this.changeMap.set(n,Io(n,e.snapshotNode,s.oldSnap));else throw Gs("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Dk{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const gT=new Dk;class Ud{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const n=this.optCompleteServerCache_!=null?new Dr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Fd(this.writes_,e,n)}}getChildAfterChild(e,t,n){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:xr(this.viewCache_),i=Nk(this.writes_,s,t,1,n,e);return i.length===0?null:i[0]}}/**
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
 */function xk(r){return{filter:r}}function Vk(r,e){V(e.eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),V(e.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed")}function Ok(r,e,t,n,s){const i=new kk;let o,a;if(t.type===Tt.OVERWRITE){const u=t;u.source.fromUser?o=Qu(r,e,u.path,u.snap,n,s,i):(V(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!Y(u.path),o=dc(r,e,u.path,u.snap,n,s,a,i))}else if(t.type===Tt.MERGE){const u=t;u.source.fromUser?o=Lk(r,e,u.path,u.children,n,s,i):(V(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Yu(r,e,u.path,u.children,n,s,a,i))}else if(t.type===Tt.ACK_USER_WRITE){const u=t;u.revert?o=Bk(r,e,u.path,n,s,i):o=Fk(r,e,u.path,u.affectedTree,n,s,i)}else if(t.type===Tt.LISTEN_COMPLETE)o=Uk(r,e,t.path,n,i);else throw Gs("Unknown operation type: "+t.type);const l=i.getChanges();return Mk(e,o,l),{viewCache:o,changes:l}}function Mk(r,e,t){const n=e.eventCache;if(n.isFullyInitialized()){const s=n.getNode().isLeafNode()||n.getNode().isEmpty(),i=Wu(r);(t.length>0||!r.eventCache.isFullyInitialized()||s&&!n.getNode().equals(i)||!n.getNode().getPriority().equals(i.getPriority()))&&t.push(uT(Wu(e)))}}function yT(r,e,t,n,s,i){const o=e.eventCache;if(hc(n,t)!=null)return e;{let a,l;if(Y(t))if(V(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=xr(e),d=u instanceof W?u:W.EMPTY_NODE,f=Ld(n,d);a=r.filter.updateFullNode(e.eventCache.getNode(),f,i)}else{const u=uc(n,xr(e));a=r.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=Q(t);if(u===".priority"){V(Bn(t)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const f=S_(n,t,d,l);f!=null?a=r.filter.updatePriority(d,f):a=o.getNode()}else{const d=me(t);let f;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const m=S_(n,t,o.getNode(),l);m!=null?f=o.getNode().getImmediateChild(u).updateChild(d,m):f=o.getNode().getImmediateChild(u)}else f=Fd(n,u,e.serverCache);f!=null?a=r.filter.updateChild(o.getNode(),u,f,d,s,i):a=o.getNode()}}return Yi(e,a,o.isFullyInitialized()||Y(t),r.filter.filtersNodes())}}function dc(r,e,t,n,s,i,o,a){const l=e.serverCache;let u;const d=o?r.filter:r.filter.getIndexedFilter();if(Y(t))u=d.updateFullNode(l.getNode(),n,null);else if(d.filtersNodes()&&!l.isFiltered()){const y=l.getNode().updateChild(t,n);u=d.updateFullNode(l.getNode(),y,null)}else{const y=Q(t);if(!l.isCompleteForPath(t)&&Bn(t)>1)return e;const S=me(t),k=l.getNode().getImmediateChild(y).updateChild(S,n);y===".priority"?u=d.updatePriority(l.getNode(),k):u=d.updateChild(l.getNode(),y,k,S,gT,null)}const f=hT(e,u,l.isFullyInitialized()||Y(t),d.filtersNodes()),m=new Ud(s,f,i);return yT(r,f,t,s,m,a)}function Qu(r,e,t,n,s,i,o){const a=e.eventCache;let l,u;const d=new Ud(s,e,i);if(Y(t))u=r.filter.updateFullNode(e.eventCache.getNode(),n,o),l=Yi(e,u,!0,r.filter.filtersNodes());else{const f=Q(t);if(f===".priority")u=r.filter.updatePriority(e.eventCache.getNode(),n),l=Yi(e,u,a.isFullyInitialized(),a.isFiltered());else{const m=me(t),y=a.getNode().getImmediateChild(f);let S;if(Y(m))S=n;else{const N=d.getCompleteChild(f);N!=null?Rd(m)===".priority"&&N.getChild(rT(m)).isEmpty()?S=N:S=N.updateChild(m,n):S=W.EMPTY_NODE}if(y.equals(S))l=e;else{const N=r.filter.updateChild(a.getNode(),f,S,m,d,o);l=Yi(e,N,a.isFullyInitialized(),r.filter.filtersNodes())}}}return l}function b_(r,e){return r.eventCache.isCompleteForChild(e)}function Lk(r,e,t,n,s,i,o){let a=e;return n.foreach((l,u)=>{const d=ve(t,l);b_(e,Q(d))&&(a=Qu(r,a,d,u,s,i,o))}),n.foreach((l,u)=>{const d=ve(t,l);b_(e,Q(d))||(a=Qu(r,a,d,u,s,i,o))}),a}function R_(r,e,t){return t.foreach((n,s)=>{e=e.updateChild(n,s)}),e}function Yu(r,e,t,n,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;Y(t)?u=n:u=new _e(null).setTree(t,n);const d=e.serverCache.getNode();return u.children.inorderTraversal((f,m)=>{if(d.hasChild(f)){const y=e.serverCache.getNode().getImmediateChild(f),S=R_(r,y,m);l=dc(r,l,new de(f),S,s,i,o,a)}}),u.children.inorderTraversal((f,m)=>{const y=!e.serverCache.isCompleteForChild(f)&&m.value===null;if(!d.hasChild(f)&&!y){const S=e.serverCache.getNode().getImmediateChild(f),N=R_(r,S,m);l=dc(r,l,new de(f),N,s,i,o,a)}}),l}function Fk(r,e,t,n,s,i,o){if(hc(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(n.value!=null){if(Y(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return dc(r,e,t,l.getNode().getChild(t),s,i,a,o);if(Y(t)){let u=new _e(null);return l.getNode().forEachChild(hs,(d,f)=>{u=u.set(new de(d),f)}),Yu(r,e,t,u,s,i,a,o)}else return e}else{let u=new _e(null);return n.foreach((d,f)=>{const m=ve(t,d);l.isCompleteForPath(m)&&(u=u.set(d,l.getNode().getChild(m)))}),Yu(r,e,t,u,s,i,a,o)}}function Uk(r,e,t,n,s){const i=e.serverCache,o=hT(e,i.getNode(),i.isFullyInitialized()||Y(t),i.isFiltered());return yT(r,o,t,n,gT,s)}function Bk(r,e,t,n,s,i){let o;if(hc(n,t)!=null)return e;{const a=new Ud(n,e,s),l=e.eventCache.getNode();let u;if(Y(t)||Q(t)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=uc(n,xr(e));else{const f=e.serverCache.getNode();V(f instanceof W,"serverChildren would be complete if leaf node"),d=Ld(n,f)}d=d,u=r.filter.updateFullNode(l,d,i)}else{const d=Q(t);let f=Fd(n,d,e.serverCache);f==null&&e.serverCache.isCompleteForChild(d)&&(f=l.getImmediateChild(d)),f!=null?u=r.filter.updateChild(l,d,f,me(t),a,i):e.eventCache.getNode().hasChild(d)?u=r.filter.updateChild(l,d,W.EMPTY_NODE,me(t),a,i):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=uc(n,xr(e)),o.isLeafNode()&&(u=r.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||hc(n,ae())!=null,Yi(e,u,o,r.filter.filtersNodes())}}/**
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
 */class qk{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,s=new kd(n.getIndex()),i=ik(n);this.processor_=xk(i);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(W.EMPTY_NODE,o.getNode(),null),u=i.updateFullNode(W.EMPTY_NODE,a.getNode(),null),d=new Dr(l,o.isFullyInitialized(),s.filtersNodes()),f=new Dr(u,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=Xc(f,d),this.eventGenerator_=new dk(this.query_)}get query(){return this.query_}}function Gk(r){return r.viewCache_.serverCache.getNode()}function zk(r,e){const t=xr(r.viewCache_);return t&&(r.query._queryParams.loadsAllData()||!Y(e)&&!t.getImmediateChild(Q(e)).isEmpty())?t.getChild(e):null}function C_(r){return r.eventRegistrations_.length===0}function jk(r,e){r.eventRegistrations_.push(e)}function P_(r,e,t){const n=[];if(t){V(e==null,"A cancel should cancel all event registrations.");const s=r.query._path;r.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(t,s);o&&n.push(o)})}if(e){let s=[];for(let i=0;i<r.eventRegistrations_.length;++i){const o=r.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(r.eventRegistrations_.slice(i+1));break}}r.eventRegistrations_=s}else r.eventRegistrations_=[];return n}function N_(r,e,t,n){e.type===Tt.MERGE&&e.source.queryId!==null&&(V(xr(r.viewCache_),"We should always have a full cache before handling merges"),V(Wu(r.viewCache_),"Missing event cache, even though we have a server cache"));const s=r.viewCache_,i=Ok(r.processor_,s,e,t,n);return Vk(r.processor_,i.viewCache),V(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),r.viewCache_=i.viewCache,IT(r,i.changes,i.viewCache.eventCache.getNode(),null)}function Wk(r,e){const t=r.viewCache_.eventCache,n=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Ae,(i,o)=>{n.push(Fs(i,o))}),t.isFullyInitialized()&&n.push(uT(t.getNode())),IT(r,n,t.getNode(),e)}function IT(r,e,t,n){const s=n?[n]:r.eventRegistrations_;return fk(r.eventGenerator_,e,t,s)}/**
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
 */let fc;class $k{constructor(){this.views=new Map}}function Kk(r){V(!fc,"__referenceConstructor has already been defined"),fc=r}function Hk(){return V(fc,"Reference.ts has not been loaded"),fc}function Qk(r){return r.views.size===0}function Bd(r,e,t,n){const s=e.source.queryId;if(s!==null){const i=r.views.get(s);return V(i!=null,"SyncTree gave us an op for an invalid query."),N_(i,e,t,n)}else{let i=[];for(const o of r.views.values())i=i.concat(N_(o,e,t,n));return i}}function Yk(r,e,t,n,s){const i=e._queryIdentifier,o=r.views.get(i);if(!o){let a=uc(t,s?n:null),l=!1;a?l=!0:n instanceof W?(a=Ld(t,n),l=!1):(a=W.EMPTY_NODE,l=!1);const u=Xc(new Dr(a,l,!1),new Dr(n,s,!1));return new qk(e,u)}return o}function Jk(r,e,t,n,s,i){const o=Yk(r,e,n,s,i);return r.views.has(e._queryIdentifier)||r.views.set(e._queryIdentifier,o),jk(o,t),Wk(o,t)}function Xk(r,e,t,n){const s=e._queryIdentifier,i=[];let o=[];const a=qn(r);if(s==="default")for(const[l,u]of r.views.entries())o=o.concat(P_(u,t,n)),C_(u)&&(r.views.delete(l),u.query._queryParams.loadsAllData()||i.push(u.query));else{const l=r.views.get(s);l&&(o=o.concat(P_(l,t,n)),C_(l)&&(r.views.delete(s),l.query._queryParams.loadsAllData()||i.push(l.query)))}return a&&!qn(r)&&i.push(new(Hk())(e._repo,e._path)),{removed:i,events:o}}function ET(r){const e=[];for(const t of r.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function ds(r,e){let t=null;for(const n of r.views.values())t=t||zk(n,e);return t}function TT(r,e){if(e._queryParams.loadsAllData())return Zc(r);{const n=e._queryIdentifier;return r.views.get(n)}}function wT(r,e){return TT(r,e)!=null}function qn(r){return Zc(r)!=null}function Zc(r){for(const e of r.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let pc;function Zk(r){V(!pc,"__referenceConstructor has already been defined"),pc=r}function eD(){return V(pc,"Reference.ts has not been loaded"),pc}let tD=1;class k_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new _e(null),this.pendingWriteTree_=Pk(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function vT(r,e,t,n,s){return gk(r.pendingWriteTree_,e,t,n,s),s?oi(r,new kr(xd(),e,t)):[]}function nD(r,e,t,n){yk(r.pendingWriteTree_,e,t,n);const s=_e.fromObject(t);return oi(r,new Us(xd(),e,s))}function An(r,e,t=!1){const n=Ik(r.pendingWriteTree_,e);if(Ek(r.pendingWriteTree_,e)){let i=new _e(null);return n.snap!=null?i=i.set(ae(),!0):We(n.children,o=>{i=i.set(new de(o),!0)}),oi(r,new lc(n.path,i,t))}else return[]}function el(r,e,t){return oi(r,new kr(Vd(),e,t))}function rD(r,e,t){const n=_e.fromObject(t);return oi(r,new Us(Vd(),e,n))}function sD(r,e){return oi(r,new To(Vd(),e))}function iD(r,e,t){const n=Gd(r,t);if(n){const s=zd(n),i=s.path,o=s.queryId,a=ot(i,e),l=new To(Od(o),a);return jd(r,i,l)}else return[]}function Ju(r,e,t,n,s=!1){const i=e._path,o=r.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||wT(o,e))){const l=Xk(o,e,t,n);Qk(o)&&(r.syncPointTree_=r.syncPointTree_.remove(i));const u=l.removed;if(a=l.events,!s){const d=u.findIndex(m=>m._queryParams.loadsAllData())!==-1,f=r.syncPointTree_.findOnPath(i,(m,y)=>qn(y));if(d&&!f){const m=r.syncPointTree_.subtree(i);if(!m.isEmpty()){const y=cD(m);for(let S=0;S<y.length;++S){const N=y[S],k=N.query,F=bT(r,N);r.listenProvider_.startListening(Xi(k),mc(r,k),F.hashFn,F.onComplete)}}}!f&&u.length>0&&!n&&(d?r.listenProvider_.stopListening(Xi(e),null):u.forEach(m=>{const y=r.queryToTagMap.get(tl(m));r.listenProvider_.stopListening(Xi(m),y)}))}lD(r,u)}return a}function oD(r,e,t,n){const s=Gd(r,n);if(s!=null){const i=zd(s),o=i.path,a=i.queryId,l=ot(o,e),u=new kr(Od(a),l,t);return jd(r,o,u)}else return[]}function aD(r,e,t,n){const s=Gd(r,n);if(s){const i=zd(s),o=i.path,a=i.queryId,l=ot(o,e),u=_e.fromObject(t),d=new Us(Od(a),l,u);return jd(r,o,d)}else return[]}function D_(r,e,t,n=!1){const s=e._path;let i=null,o=!1;r.syncPointTree_.foreachOnPath(s,(m,y)=>{const S=ot(m,s);i=i||ds(y,S),o=o||qn(y)});let a=r.syncPointTree_.get(s);a?(o=o||qn(a),i=i||ds(a,ae())):(a=new $k,r.syncPointTree_=r.syncPointTree_.set(s,a));let l;i!=null?l=!0:(l=!1,i=W.EMPTY_NODE,r.syncPointTree_.subtree(s).foreachChild((y,S)=>{const N=ds(S,ae());N&&(i=i.updateImmediateChild(y,N))}));const u=wT(a,e);if(!u&&!e._queryParams.loadsAllData()){const m=tl(e);V(!r.queryToTagMap.has(m),"View does not exist, but we have a tag");const y=uD();r.queryToTagMap.set(m,y),r.tagToQueryMap.set(y,m)}const d=Md(r.pendingWriteTree_,s);let f=Jk(a,e,t,d,i,l);if(!u&&!o&&!n){const m=TT(a,e);f=f.concat(hD(r,e,m))}return f}function qd(r,e,t){const s=r.pendingWriteTree_,i=r.syncPointTree_.findOnPath(e,(o,a)=>{const l=ot(o,e),u=ds(a,l);if(u)return u});return pT(s,e,i,t,!0)}function oi(r,e){return AT(e,r.syncPointTree_,null,Md(r.pendingWriteTree_,ae()))}function AT(r,e,t,n){if(Y(r.path))return ST(r,e,t,n);{const s=e.get(ae());t==null&&s!=null&&(t=ds(s,ae()));let i=[];const o=Q(r.path),a=r.operationForChild(o),l=e.children.get(o);if(l&&a){const u=t?t.getImmediateChild(o):null,d=mT(n,o);i=i.concat(AT(a,l,u,d))}return s&&(i=i.concat(Bd(s,r,n,t))),i}}function ST(r,e,t,n){const s=e.get(ae());t==null&&s!=null&&(t=ds(s,ae()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,u=mT(n,o),d=r.operationForChild(o);d&&(i=i.concat(ST(d,a,l,u)))}),s&&(i=i.concat(Bd(s,r,n,t))),i}function bT(r,e){const t=e.query,n=mc(r,t);return{hashFn:()=>(Gk(e)||W.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return n?iD(r,t._path,n):sD(r,t._path);{const i=r0(s,t);return Ju(r,t,null,i)}}}}function mc(r,e){const t=tl(e);return r.queryToTagMap.get(t)}function tl(r){return r._path.toString()+"$"+r._queryIdentifier}function Gd(r,e){return r.tagToQueryMap.get(e)}function zd(r){const e=r.indexOf("$");return V(e!==-1&&e<r.length-1,"Bad queryKey."),{queryId:r.substr(e+1),path:new de(r.substr(0,e))}}function jd(r,e,t){const n=r.syncPointTree_.get(e);V(n,"Missing sync point for query tag that we're tracking");const s=Md(r.pendingWriteTree_,e);return Bd(n,t,s,null)}function cD(r){return r.fold((e,t,n)=>{if(t&&qn(t))return[Zc(t)];{let s=[];return t&&(s=ET(t)),We(n,(i,o)=>{s=s.concat(o)}),s}})}function Xi(r){return r._queryParams.loadsAllData()&&!r._queryParams.isDefault()?new(eD())(r._repo,r._path):r}function lD(r,e){for(let t=0;t<e.length;++t){const n=e[t];if(!n._queryParams.loadsAllData()){const s=tl(n),i=r.queryToTagMap.get(s);r.queryToTagMap.delete(s),r.tagToQueryMap.delete(i)}}}function uD(){return tD++}function hD(r,e,t){const n=e._path,s=mc(r,e),i=bT(r,t),o=r.listenProvider_.startListening(Xi(e),s,i.hashFn,i.onComplete),a=r.syncPointTree_.subtree(n);if(s)V(!qn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,d,f)=>{if(!Y(u)&&d&&qn(d))return[Zc(d).query];{let m=[];return d&&(m=m.concat(ET(d).map(y=>y.query))),We(f,(y,S)=>{m=m.concat(S)}),m}});for(let u=0;u<l.length;++u){const d=l[u];r.listenProvider_.stopListening(Xi(d),mc(r,d))}}return o}/**
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
 */class Wd{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Wd(t)}node(){return this.node_}}class $d{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=ve(this.path_,e);return new $d(this.syncTree_,t)}node(){return qd(this.syncTree_,this.path_)}}const dD=function(r){return r=r||{},r.timestamp=r.timestamp||new Date().getTime(),r},x_=function(r,e,t){if(!r||typeof r!="object")return r;if(V(".sv"in r,"Unexpected leaf node or priority contents"),typeof r[".sv"]=="string")return fD(r[".sv"],e,t);if(typeof r[".sv"]=="object")return pD(r[".sv"],e);V(!1,"Unexpected server value: "+JSON.stringify(r,null,2))},fD=function(r,e,t){switch(r){case"timestamp":return t.timestamp;default:V(!1,"Unexpected server value: "+r)}},pD=function(r,e,t){r.hasOwnProperty("increment")||V(!1,"Unexpected server value: "+JSON.stringify(r,null,2));const n=r.increment;typeof n!="number"&&V(!1,"Unexpected increment value: "+n);const s=e.node();if(V(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return n;const o=s.getValue();return typeof o!="number"?n:o+n},RT=function(r,e,t,n){return Kd(e,new $d(t,r),n)},CT=function(r,e,t){return Kd(r,new Wd(e),t)};function Kd(r,e,t){const n=r.getPriority().val(),s=x_(n,e.getImmediateChild(".priority"),t);let i;if(r.isLeafNode()){const o=r,a=x_(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new Fe(a,Ce(s)):r}else{const o=r;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new Fe(s))),o.forEachChild(Ae,(a,l)=>{const u=Kd(l,e.getImmediateChild(a),t);u!==l&&(i=i.updateImmediateChild(a,u))}),i}}/**
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
 */class Hd{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Qd(r,e){let t=e instanceof de?e:new de(e),n=r,s=Q(t);for(;s!==null;){const i=fs(n.node.children,s)||{children:{},childCount:0};n=new Hd(s,n,i),t=me(t),s=Q(t)}return n}function ai(r){return r.node.value}function PT(r,e){r.node.value=e,Xu(r)}function NT(r){return r.node.childCount>0}function mD(r){return ai(r)===void 0&&!NT(r)}function nl(r,e){We(r.node.children,(t,n)=>{e(new Hd(t,r,n))})}function kT(r,e,t,n){t&&e(r),nl(r,s=>{kT(s,e,!0)})}function _D(r,e,t){let n=r.parent;for(;n!==null;){if(e(n))return!0;n=n.parent}return!1}function zo(r){return new de(r.parent===null?r.name:zo(r.parent)+"/"+r.name)}function Xu(r){r.parent!==null&&gD(r.parent,r.name,r)}function gD(r,e,t){const n=mD(t),s=Ut(r.node.children,e);n&&s?(delete r.node.children[e],r.node.childCount--,Xu(r)):!n&&!s&&(r.node.children[e]=t.node,r.node.childCount++,Xu(r))}/**
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
 */const yD=/[\[\].#$\/\u0000-\u001F\u007F]/,ID=/[\[\].#$\u0000-\u001F\u007F]/,eu=10*1024*1024,Yd=function(r){return typeof r=="string"&&r.length!==0&&!yD.test(r)},DT=function(r){return typeof r=="string"&&r.length!==0&&!ID.test(r)},ED=function(r){return r&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),DT(r)},xT=function(r){return r===null||typeof r=="string"||typeof r=="number"&&!Yc(r)||r&&typeof r=="object"&&Ut(r,".sv")},Zu=function(r,e,t,n){rl(ps(r,"value"),e,t)},rl=function(r,e,t){const n=t instanceof de?new L0(t,r):t;if(e===void 0)throw new Error(r+"contains undefined "+cr(n));if(typeof e=="function")throw new Error(r+"contains a function "+cr(n)+" with contents = "+e.toString());if(Yc(e))throw new Error(r+"contains "+e.toString()+" "+cr(n));if(typeof e=="string"&&e.length>eu/3&&Ic(e)>eu)throw new Error(r+"contains a string greater than "+eu+" utf8 bytes "+cr(n)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(We(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!Yd(o)))throw new Error(r+" contains an invalid key ("+o+") "+cr(n)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);F0(n,o),rl(r,a,n),U0(n)}),s&&i)throw new Error(r+' contains ".value" child '+cr(n)+" in addition to actual children.")}},TD=function(r,e){let t,n;for(t=0;t<e.length;t++){n=e[t];const i=go(n);for(let o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!Yd(i[o]))throw new Error(r+"contains an invalid key ("+i[o]+") in path "+n.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(M0);let s=null;for(t=0;t<e.length;t++){if(n=e[t],s!==null&&pt(s,n))throw new Error(r+"contains a path "+s.toString()+" that is ancestor of another path "+n.toString());s=n}},VT=function(r,e,t,n){const s=ps(r,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const i=[];We(e,(o,a)=>{const l=new de(o);if(rl(s,a,ve(t,l)),Rd(l)===".priority"&&!xT(a))throw new Error(s+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");i.push(l)}),TD(s,i)},wD=function(r,e,t){if(Yc(e))throw new Error(ps(r,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!xT(e))throw new Error(ps(r,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},OT=function(r,e,t,n){if(!DT(t))throw new Error(ps(r,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},vD=function(r,e,t,n){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),OT(r,e,t)},ss=function(r,e){if(Q(e)===".info")throw new Error(r+" failed = Can't modify data under /.info/")},AD=function(r,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Yd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!ED(t))throw new Error(ps(r,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class SD{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function sl(r,e){let t=null;for(let n=0;n<e.length;n++){const s=e[n],i=s.getPath();t!==null&&!Cd(i,t.path)&&(r.eventLists_.push(t),t=null),t===null&&(t={events:[],path:i}),t.events.push(s)}t&&r.eventLists_.push(t)}function MT(r,e,t){sl(r,t),LT(r,n=>Cd(n,e))}function St(r,e,t){sl(r,t),LT(r,n=>pt(n,e)||pt(e,n))}function LT(r,e){r.recursionDepth_++;let t=!0;for(let n=0;n<r.eventLists_.length;n++){const s=r.eventLists_[n];if(s){const i=s.path;e(i)?(bD(r.eventLists_[n]),r.eventLists_[n]=null):t=!1}}t&&(r.eventLists_=[]),r.recursionDepth_--}function bD(r){for(let e=0;e<r.events.length;e++){const t=r.events[e];if(t!==null){r.events[e]=null;const n=t.getEventRunner();Hi&&Ge("event: "+t.toString()),si(n)}}}/**
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
 */const RD="repo_interrupt",CD=25;class PD{constructor(e,t,n,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new SD,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=cc(),this.transactionQueueTree_=new Hd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ND(r,e,t){if(r.stats_=Sd(r.repoInfo_),r.forceRestClient_||a0())r.server_=new ac(r.repoInfo_,(n,s,i,o)=>{V_(r,n,s,i,o)},r.authTokenProvider_,r.appCheckProvider_),setTimeout(()=>O_(r,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ze(t)}catch(n){throw new Error("Invalid authOverride provided: "+n)}}r.persistentConnection_=new $t(r.repoInfo_,e,(n,s,i,o)=>{V_(r,n,s,i,o)},n=>{O_(r,n)},n=>{DD(r,n)},r.authTokenProvider_,r.appCheckProvider_,t),r.server_=r.persistentConnection_}r.authTokenProvider_.addTokenChangeListener(n=>{r.server_.refreshAuthToken(n)}),r.appCheckProvider_.addTokenChangeListener(n=>{r.server_.refreshAppCheckToken(n.token)}),r.statsReporter_=d0(r.repoInfo_,()=>new hk(r.stats_,r.server_)),r.infoData_=new ok,r.infoSyncTree_=new k_({startListening:(n,s,i,o)=>{let a=[];const l=r.infoData_.getNode(n._path);return l.isEmpty()||(a=el(r.infoSyncTree_,n._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Jd(r,"connected",!1),r.serverSyncTree_=new k_({startListening:(n,s,i,o)=>(r.server_.listen(n,i,s,(a,l)=>{const u=o(a,l);St(r.eventQueue_,n._path,u)}),[]),stopListening:(n,s)=>{r.server_.unlisten(n,s)}})}function kD(r){const t=r.infoData_.getNode(new de(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function il(r){return dD({timestamp:kD(r)})}function V_(r,e,t,n,s){r.dataUpdateCount++;const i=new de(e);t=r.interceptServerDataCallback_?r.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(n){const l=Va(t,u=>Ce(u));o=aD(r.serverSyncTree_,i,l,s)}else{const l=Ce(t);o=oD(r.serverSyncTree_,i,l,s)}else if(n){const l=Va(t,u=>Ce(u));o=rD(r.serverSyncTree_,i,l)}else{const l=Ce(t);o=el(r.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=qs(r,i)),St(r.eventQueue_,a,o)}function O_(r,e){Jd(r,"connected",e),e===!1&&OD(r)}function DD(r,e){We(e,(t,n)=>{Jd(r,t,n)})}function Jd(r,e,t){const n=new de("/.info/"+e),s=Ce(t);r.infoData_.updateSnapshot(n,s);const i=el(r.infoSyncTree_,n,s);St(r.eventQueue_,n,i)}function Xd(r){return r.nextWriteId_++}function xD(r,e,t,n,s){ol(r,"set",{path:e.toString(),value:t,priority:n});const i=il(r),o=Ce(t,n),a=qd(r.serverSyncTree_,e),l=CT(o,a,i),u=Xd(r),d=vT(r.serverSyncTree_,e,l,u,!0);sl(r.eventQueue_,d),r.server_.put(e.toString(),o.val(!0),(m,y)=>{const S=m==="ok";S||et("set at "+e+" failed: "+m);const N=An(r.serverSyncTree_,u,!S);St(r.eventQueue_,e,N),Gn(r,s,m,y)});const f=ef(r,e);qs(r,f),St(r.eventQueue_,f,[])}function VD(r,e,t,n){ol(r,"update",{path:e.toString(),value:t});let s=!0;const i=il(r),o={};if(We(t,(a,l)=>{s=!1,o[a]=RT(ve(e,a),Ce(l),r.serverSyncTree_,i)}),s)Ge("update() called with empty data.  Don't do anything."),Gn(r,n,"ok",void 0);else{const a=Xd(r),l=nD(r.serverSyncTree_,e,o,a);sl(r.eventQueue_,l),r.server_.merge(e.toString(),t,(u,d)=>{const f=u==="ok";f||et("update at "+e+" failed: "+u);const m=An(r.serverSyncTree_,a,!f),y=m.length>0?qs(r,e):e;St(r.eventQueue_,y,m),Gn(r,n,u,d)}),We(t,u=>{const d=ef(r,ve(e,u));qs(r,d)}),St(r.eventQueue_,e,[])}}function OD(r){ol(r,"onDisconnectEvents");const e=il(r),t=cc();ju(r.onDisconnect_,ae(),(s,i)=>{const o=RT(s,i,r.serverSyncTree_,e);ii(t,s,o)});let n=[];ju(t,ae(),(s,i)=>{n=n.concat(el(r.serverSyncTree_,s,i));const o=ef(r,s);qs(r,o)}),r.onDisconnect_=cc(),St(r.eventQueue_,ae(),n)}function MD(r,e,t){r.server_.onDisconnectCancel(e.toString(),(n,s)=>{n==="ok"&&zu(r.onDisconnect_,e),Gn(r,t,n,s)})}function M_(r,e,t,n){const s=Ce(t);r.server_.onDisconnectPut(e.toString(),s.val(!0),(i,o)=>{i==="ok"&&ii(r.onDisconnect_,e,s),Gn(r,n,i,o)})}function LD(r,e,t,n,s){const i=Ce(t,n);r.server_.onDisconnectPut(e.toString(),i.val(!0),(o,a)=>{o==="ok"&&ii(r.onDisconnect_,e,i),Gn(r,s,o,a)})}function FD(r,e,t,n){if(xa(t)){Ge("onDisconnect().update() called with empty data.  Don't do anything."),Gn(r,n,"ok",void 0);return}r.server_.onDisconnectMerge(e.toString(),t,(s,i)=>{s==="ok"&&We(t,(o,a)=>{const l=Ce(a);ii(r.onDisconnect_,ve(e,o),l)}),Gn(r,n,s,i)})}function UD(r,e,t){let n;Q(e._path)===".info"?n=D_(r.infoSyncTree_,e,t):n=D_(r.serverSyncTree_,e,t),MT(r.eventQueue_,e._path,n)}function BD(r,e,t){let n;Q(e._path)===".info"?n=Ju(r.infoSyncTree_,e,t):n=Ju(r.serverSyncTree_,e,t),MT(r.eventQueue_,e._path,n)}function qD(r){r.persistentConnection_&&r.persistentConnection_.interrupt(RD)}function ol(r,...e){let t="";r.persistentConnection_&&(t=r.persistentConnection_.id+":"),Ge(t,...e)}function Gn(r,e,t,n){e&&si(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let i=s;n&&(i+=": "+n);const o=new Error(i);o.code=s,e(o)}})}function FT(r,e,t){return qd(r.serverSyncTree_,e,t)||W.EMPTY_NODE}function Zd(r,e=r.transactionQueueTree_){if(e||al(r,e),ai(e)){const t=BT(r,e);V(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&GD(r,zo(e),t)}else NT(e)&&nl(e,t=>{Zd(r,t)})}function GD(r,e,t){const n=t.map(u=>u.currentWriteId),s=FT(r,e,n);let i=s;const o=s.hash();for(let u=0;u<t.length;u++){const d=t[u];V(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const f=ot(e,d.path);i=i.updateChild(f,d.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;r.server_.put(l.toString(),a,u=>{ol(r,"transaction put response",{path:l.toString(),status:u});let d=[];if(u==="ok"){const f=[];for(let m=0;m<t.length;m++)t[m].status=2,d=d.concat(An(r.serverSyncTree_,t[m].currentWriteId)),t[m].onComplete&&f.push(()=>t[m].onComplete(null,!0,t[m].currentOutputSnapshotResolved)),t[m].unwatcher();al(r,Qd(r.transactionQueueTree_,e)),Zd(r,r.transactionQueueTree_),St(r.eventQueue_,e,d);for(let m=0;m<f.length;m++)si(f[m])}else{if(u==="datastale")for(let f=0;f<t.length;f++)t[f].status===3?t[f].status=4:t[f].status=0;else{et("transaction at "+l.toString()+" failed: "+u);for(let f=0;f<t.length;f++)t[f].status=4,t[f].abortReason=u}qs(r,e)}},o)}function qs(r,e){const t=UT(r,e),n=zo(t),s=BT(r,t);return zD(r,s,n),n}function zD(r,e,t){if(e.length===0)return;const n=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=ot(t,l.path);let d=!1,f;if(V(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,f=l.abortReason,s=s.concat(An(r.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=CD)d=!0,f="maxretry",s=s.concat(An(r.serverSyncTree_,l.currentWriteId,!0));else{const m=FT(r,l.path,o);l.currentInputSnapshot=m;const y=e[a].update(m.val());if(y!==void 0){rl("transaction failed: Data returned ",y,l.path);let S=Ce(y);typeof y=="object"&&y!=null&&Ut(y,".priority")||(S=S.updatePriority(m.getPriority()));const k=l.currentWriteId,F=il(r),G=CT(S,m,F);l.currentOutputSnapshotRaw=S,l.currentOutputSnapshotResolved=G,l.currentWriteId=Xd(r),o.splice(o.indexOf(k),1),s=s.concat(vT(r.serverSyncTree_,l.path,G,l.currentWriteId,l.applyLocally)),s=s.concat(An(r.serverSyncTree_,k,!0))}else d=!0,f="nodata",s=s.concat(An(r.serverSyncTree_,l.currentWriteId,!0))}St(r.eventQueue_,t,s),s=[],d&&(e[a].status=2,(function(m){setTimeout(m,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?n.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):n.push(()=>e[a].onComplete(new Error(f),!1,null))))}al(r,r.transactionQueueTree_);for(let a=0;a<n.length;a++)si(n[a]);Zd(r,r.transactionQueueTree_)}function UT(r,e){let t,n=r.transactionQueueTree_;for(t=Q(e);t!==null&&ai(n)===void 0;)n=Qd(n,t),e=me(e),t=Q(e);return n}function BT(r,e){const t=[];return qT(r,e,t),t.sort((n,s)=>n.order-s.order),t}function qT(r,e,t){const n=ai(e);if(n)for(let s=0;s<n.length;s++)t.push(n[s]);nl(e,s=>{qT(r,s,t)})}function al(r,e){const t=ai(e);if(t){let n=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[n]=t[s],n++);t.length=n,PT(e,t.length>0?t:void 0)}nl(e,n=>{al(r,n)})}function ef(r,e){const t=zo(UT(r,e)),n=Qd(r.transactionQueueTree_,e);return _D(n,s=>{tu(r,s)}),tu(r,n),kT(n,s=>{tu(r,s)}),t}function tu(r,e){const t=ai(e);if(t){const n=[];let s=[],i=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(V(i===o-1,"All SENT items should be at beginning of queue."),i=o,t[o].status=3,t[o].abortReason="set"):(V(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(An(r.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&n.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?PT(e,void 0):t.length=i+1,St(r.eventQueue_,zo(e),s);for(let o=0;o<n.length;o++)si(n[o])}}/**
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
 */function jD(r){let e="";const t=r.split("/");for(let n=0;n<t.length;n++)if(t[n].length>0){let s=t[n];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function WD(r){const e={};r.charAt(0)==="?"&&(r=r.substring(1));for(const t of r.split("&")){if(t.length===0)continue;const n=t.split("=");n.length===2?e[decodeURIComponent(n[0])]=decodeURIComponent(n[1]):et(`Invalid query segment '${t}' in query '${r}'`)}return e}const L_=function(r,e){const t=$D(r),n=t.namespace;t.domain==="firebase.com"&&Xt(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!n||n==="undefined")&&t.domain!=="localhost"&&Xt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||XN();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new HE(t.host,t.secure,n,s,e,"",n!==t.subdomain),path:new de(t.pathString)}},$D=function(r){let e="",t="",n="",s="",i="",o=!0,a="https",l=443;if(typeof r=="string"){let u=r.indexOf("//");u>=0&&(a=r.substring(0,u-1),r=r.substring(u+2));let d=r.indexOf("/");d===-1&&(d=r.length);let f=r.indexOf("?");f===-1&&(f=r.length),e=r.substring(0,Math.min(d,f)),d<f&&(s=jD(r.substring(d,f)));const m=WD(r.substring(Math.min(r.length,f)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const y=e.slice(0,u);if(y.toLowerCase()==="localhost")t="localhost";else if(y.split(".").length<=2)t=y;else{const S=e.indexOf(".");n=e.substring(0,S).toLowerCase(),t=e.substring(S+1),i=n}"ns"in m&&(i=m.ns)}return{host:e,port:l,domain:t,subdomain:n,secure:o,scheme:a,pathString:s,namespace:i}};/**
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
 */class KD{constructor(e,t,n,s){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ze(this.snapshot.exportVal())}}class HD{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class QD{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return V(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class YD{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new Nt;return MD(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){ss("OnDisconnect.remove",this._path);const e=new Nt;return M_(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){ss("OnDisconnect.set",this._path),Zu("OnDisconnect.set",e,this._path);const t=new Nt;return M_(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){ss("OnDisconnect.setWithPriority",this._path),Zu("OnDisconnect.setWithPriority",e,this._path),wD("OnDisconnect.setWithPriority",t);const n=new Nt;return LD(this._repo,this._path,e,t,n.wrapCallback(()=>{})),n.promise}update(e){ss("OnDisconnect.update",this._path),VT("OnDisconnect.update",e,this._path);const t=new Nt;return FD(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
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
 */class tf{constructor(e,t,n,s){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=s}get key(){return Y(this._path)?null:Rd(this._path)}get ref(){return new Jn(this._repo,this._path)}get _queryIdentifier(){const e=T_(this._queryParams),t=vd(e);return t==="{}"?"default":t}get _queryObject(){return T_(this._queryParams)}isEqual(e){if(e=ie(e),!(e instanceof tf))return!1;const t=this._repo===e._repo,n=Cd(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&n&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+O0(this._path)}}class Jn extends tf{constructor(e,t){super(e,t,new Dd,!1)}get parent(){const e=rT(this._path);return e===null?null:new Jn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class _c{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new de(e),n=eh(this.ref,e);return new _c(this._node.getChild(t),n,Ae)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(n,s)=>e(new _c(s,eh(this.ref,n),Ae)))}hasChild(e){const t=new de(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function yx(r,e){return r=ie(r),r._checkNotDeleted("ref"),e!==void 0?eh(r._root,e):r._root}function eh(r,e){return r=ie(r),Q(r._path)===null?vD("child","path",e):OT("child","path",e),new Jn(r._repo,ve(r._path,e))}function Ix(r){return r=ie(r),new YD(r._repo,r._path)}function Ex(r){return ss("remove",r._path),JD(r,null)}function JD(r,e){r=ie(r),ss("set",r._path),Zu("set",e,r._path);const t=new Nt;return xD(r._repo,r._path,e,null,t.wrapCallback(()=>{})),t.promise}function Tx(r,e){VT("update",e,r._path);const t=new Nt;return VD(r._repo,r._path,e,t.wrapCallback(()=>{})),t.promise}class nf{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const n=t._queryParams.getIndex();return new KD("value",this,new _c(e.snapshotNode,new Jn(t._repo,t._path),n))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new HD(this,e,t):null}matches(e){return e instanceof nf?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function XD(r,e,t,n,s){const i=new QD(t,void 0),o=new nf(i);return UD(r._repo,r,o),()=>BD(r._repo,r,o)}function wx(r,e,t,n){return XD(r,"value",e)}Kk(Jn);Zk(Jn);/**
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
 */const ZD="FIREBASE_DATABASE_EMULATOR_HOST",th={};let ex=!1;function tx(r,e,t,n){const s=e.lastIndexOf(":"),i=e.substring(0,s),o=Zt(i);r.repoInfo_=new HE(e,o,r.repoInfo_.namespace,r.repoInfo_.webSocketOnly,r.repoInfo_.nodeAdmin,r.repoInfo_.persistenceKey,r.repoInfo_.includeNamespaceInQueryParams,!0,t),n&&(r.authTokenProvider_=n)}function nx(r,e,t,n,s){let i=n||r.options.databaseURL;i===void 0&&(r.options.projectId||Xt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ge("Using default host for project ",r.options.projectId),i=`${r.options.projectId}-default-rtdb.firebaseio.com`);let o=L_(i,s),a=o.repoInfo,l;typeof process<"u"&&r_&&(l=r_[ZD]),l?(i=`http://${l}?ns=${a.namespace}`,o=L_(i,s),a=o.repoInfo):o.repoInfo.secure;const u=new l0(r.name,r.options,e);AD("Invalid Firebase Database URL",o),Y(o.path)||Xt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=sx(a,r,u,new c0(r,t));return new ix(d,r)}function rx(r,e){const t=th[e];(!t||t[r.key]!==r)&&Xt(`Database ${e}(${r.repoInfo_}) has already been deleted.`),qD(r),delete t[r.key]}function sx(r,e,t,n){let s=th[e.name];s||(s={},th[e.name]=s);let i=s[r.toURLString()];return i&&Xt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new PD(r,ex,t,n),s[r.toURLString()]=i,i}class ix{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ND(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Jn(this._repo,ae())),this._rootInternal}_delete(){return this._rootInternal!==null&&(rx(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Xt("Cannot call "+e+" on a deleted database.")}}function ox(r=oh(),e){const t=js(r,"database").getImmediate({identifier:e});if(!t._instanceStarted){const n=j_("database");n&&ax(t,...n)}return t}function ax(r,e,t,n={}){r=ie(r),r._checkNotDeleted("useEmulator");const s=`${e}:${t}`,i=r._repoInternal;if(r._instanceStarted){if(s===r._repoInternal.repoInfo_.host&&_t(n,i.repoInfo_.emulatorOptions))return;Xt("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(i.repoInfo_.nodeAdmin)n.mockUserToken&&Xt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Na(Na.OWNER);else if(n.mockUserToken){const a=typeof n.mockUserToken=="string"?n.mockUserToken:K_(n.mockUserToken,r.app.options.projectId);o=new Na(a)}Zt(e)&&(yc(e),rh("Database",!0)),tx(i,s,n,o)}/**
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
 */function cx(r){$N(Vr),Ir(new kn("database",(e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return nx(n,s,i,t)},"PUBLIC").setMultipleInstances(!0)),xt(s_,i_,r),xt(s_,i_,"esm2020")}/**
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
 */const lx={".sv":"timestamp"};function vx(){return lx}$t.prototype.simpleListen=function(r,e){this.sendRequest("q",{p:r},e)};$t.prototype.echo=function(r,e){this.sendRequest("echo",{d:r},e)};cx();const GT={apiKey:"AIzaSyDif5g62oVWT460e5q3Kpg7txgRN8VXk24",authDomain:"gustoplan-dev.firebaseapp.com",projectId:"gustoplan-dev",storageBucket:"gustoplan-dev.firebasestorage.app",messagingSenderId:"554162135180",appId:"1:554162135180:web:f5addf322a0977ffe31ba9",databaseURL:"https://gustoplan-dev-default-rtdb.europe-west1.firebasedatabase.app"},cl=ng(GT),ux=xI(cl),hx=jN(cl),dx=ox(cl),Ax=Object.freeze(Object.defineProperty({__proto__:null,auth:hx,db:ux,firebaseApp:cl,firebaseConfig:GT,rtdb:dx},Symbol.toStringTag,{value:"Module"}));export{Ex as A,Tx as B,vx as C,WR as D,DC as E,mx as F,Ax as _,hx as a,Mu as b,vR as c,ux as d,kI as e,GT as f,oC as g,lC as h,pC as i,mC as j,dC as k,MC as l,VC as m,UC as n,_x as o,xI as p,qR as q,OC as r,gx as s,dx as t,fC as u,yx as v,GR as w,Ix as x,JD as y,wx as z};
