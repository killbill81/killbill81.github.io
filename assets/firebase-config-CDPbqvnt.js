(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const ow=()=>{};var tp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V=function(r,e){if(!r)throw Bs(e)},Bs=function(r){return new Error("Firebase Database ("+M_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+r)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},aw=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const s=r[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[t++];e[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[t++],o=r[t++],a=r[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[n++]=String.fromCharCode(55296+(l>>10)),e[n++]=String.fromCharCode(56320+(l&1023))}else{const i=r[t++],o=r[t++];e[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ju={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],o=s+1<r.length,a=o?r[s+1]:0,l=s+2<r.length,u=l?r[s+2]:0,d=i>>2,f=(i&3)<<4|a>>4;let m=(a&15)<<2|u>>6,y=u&63;l||(y=64,o||(m=64)),n.push(t[d],t[f],t[m],t[y])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(L_(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):aw(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=t[r.charAt(s++)],a=s<r.length?t[r.charAt(s)]:0;++s;const u=s<r.length?t[r.charAt(s)]:64;++s;const f=s<r.length?t[r.charAt(s)]:64;if(++s,i==null||a==null||u==null||f==null)throw new cw;const m=i<<2|a>>4;if(n.push(m),u!==64){const y=a<<4&240|u>>2;if(n.push(y),f!==64){const S=u<<6&192|f;n.push(S)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class cw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const F_=function(r){const e=L_(r);return Ju.encodeByteArray(e,!0)},Ca=function(r){return F_(r).replace(/\./g,"")},Pa=function(r){try{return Ju.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lw(r){return U_(void 0,r)}function U_(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!uw(t)||(r[t]=U_(r[t],e[t]));return r}function uw(r){return r!=="__proto__"}/**
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
 */function B_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const hw=()=>B_().__FIREBASE_DEFAULTS__,dw=()=>{if(typeof process>"u"||typeof tp>"u")return;const r=tp.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},fw=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Pa(r[1]);return e&&JSON.parse(e)},pc=()=>{try{return ow()||hw()||dw()||fw()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},q_=r=>pc()?.emulatorHosts?.[r],G_=r=>{const e=q_(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},z_=()=>pc()?.config,j_=r=>pc()?.[`_${r}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
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
 */function Xt(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function mc(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function W_(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",s=r.iat||0,i=r.sub||r.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Ca(JSON.stringify(t)),Ca(JSON.stringify(o)),""].join(".")}const xi={};function pw(){const r={prod:[],emulator:[]};for(const e of Object.keys(xi))xi[e]?r.emulator.push(e):r.prod.push(e);return r}function mw(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let np=!1;function Xu(r,e){if(typeof window>"u"||typeof document>"u"||!Xt(window.location.host)||xi[r]===e||xi[r]||np)return;xi[r]=e;function t(m){return`__firebase__banner__${m}`}const n="__firebase__banner",i=pw().prod.length>0;function o(){const m=document.getElementById(n);m&&m.remove()}function a(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,y){m.setAttribute("width","24"),m.setAttribute("id",y),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{np=!0,o()},m}function d(m,y){m.setAttribute("id",y),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function f(){const m=mw(n),y=t("text"),S=document.getElementById(y)||document.createElement("span"),N=t("learnmore"),k=document.getElementById(N)||document.createElement("a"),F=t("preprendIcon"),G=document.getElementById(F)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const B=m.element;a(B),d(k,N);const se=u();l(G,F),B.append(G,S,k,se),document.body.appendChild(B)}i?(S.innerText="Preview backend disconnected.",G.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function Ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Zu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ve())}function $_(){const r=pc()?.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function _w(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function gw(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function K_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yw(){const r=Ve();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Iw(){return M_.NODE_ADMIN===!0}function H_(){return!$_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Q_(){return!$_()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function Y_(){try{return typeof indexedDB=="object"}catch{return!1}}function Ew(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw="FirebaseError";class Zt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=Tw,Object.setPrototypeOf(this,Zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yo.prototype.create)}}class yo{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?ww(i,n):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Zt(s,a,n)}}function ww(r,e){return r.replace(vw,(t,n)=>{const s=e[n];return s!=null?String(s):`<${n}?>`})}const vw=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(r){return JSON.parse(r)}function Ge(r){return JSON.stringify(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_=function(r){let e={},t={},n={},s="";try{const i=r.split(".");e=Hi(Pa(i[0])||""),t=Hi(Pa(i[1])||""),s=i[2],n=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:n,signature:s}},Aw=function(r){const e=J_(r),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Sw=function(r){const e=J_(r).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function ds(r,e){if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}function Na(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function ka(r,e,t){const n={};for(const s in r)Object.prototype.hasOwnProperty.call(r,s)&&(n[s]=e.call(t,r[s],s,r));return n}function pt(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const i=r[s],o=e[s];if(rp(i)&&rp(o)){if(!pt(i,o))return!1}else if(i!==o)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function rp(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)n[f]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let f=0;f<16;f++)n[f]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let f=16;f<80;f++){const m=n[f-3]^n[f-8]^n[f-14]^n[f-16];n[f]=(m<<1|m>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,d;for(let f=0;f<80;f++){f<40?f<20?(u=a^i&(o^a),d=1518500249):(u=i^o^a,d=1859775393):f<60?(u=i&o|a&(i|o),d=2400959708):(u=i^o^a,d=3395469782);const m=(s<<5|s>>>27)+u+l+d+n[f]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=m}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const n=t-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=n;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<t;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let n=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[s]>>i&255,++n;return e}}function Rw(r,e){const t=new Cw(r,e);return t.subscribe.bind(t)}class Cw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let s;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");Pw(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:n},s.next===void 0&&(s.next=Nl),s.error===void 0&&(s.error=Nl),s.complete===void 0&&(s.complete=Nl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Pw(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Nl(){}function fs(r,e){return`${r} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);if(s>=55296&&s<=56319){const i=s-55296;n++,V(n<r.length,"Surrogate pair missing trail surrogate.");const o=r.charCodeAt(n)-56320;s=65536+(i<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},_c=function(r){let e=0;for(let t=0;t<r.length;t++){const n=r.charCodeAt(t);n<128?e++:n<2048?e+=2:n>=55296&&n<=56319?(e+=4,t++):e+=3}return e};/**
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
 */const nr="[DEFAULT]";/**
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
 */class kw{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new Ct;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),n=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(n)return null;throw s}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xw(e))try{this.getOrInitializeService({instanceIdentifier:nr})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(e=nr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=nr){return this.instances.has(e)}getOptions(e=nr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);n===a&&o.resolve(s)}return s}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(n)??new Set;s.add(e),this.onInitCallbacks.set(n,s);const i=this.instances.get(n);return i&&e(i,n),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Dw(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=nr){return this.component?this.component.multipleInstances?e:nr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Dw(r){return r===nr?void 0:r}function xw(r){return r.instantiationMode==="EAGER"}/**
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
 */class Vw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new kw(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Z||(Z={}));const Ow={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},Mw=Z.INFO,Lw={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},Fw=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),s=Lw[e];if(s)console[s](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gc{constructor(e){this.name=e,this._logLevel=Mw,this._logHandler=Fw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ow[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const Uw=(r,e)=>e.some(t=>r instanceof t);let sp,ip;function Bw(){return sp||(sp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qw(){return ip||(ip=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const X_=new WeakMap,Zl=new WeakMap,Z_=new WeakMap,kl=new WeakMap,eh=new WeakMap;function Gw(r){const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",o)},i=()=>{t(Sn(r.result)),s()},o=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&X_.set(t,r)}).catch(()=>{}),eh.set(e,r),e}function zw(r){if(Zl.has(r))return;const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",o),r.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",o),r.addEventListener("abort",o)});Zl.set(r,e)}let eu={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Zl.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Z_.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Sn(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function jw(r){eu=r(eu)}function Ww(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(Dl(this),e,...t);return Z_.set(n,e.sort?e.sort():[e]),Sn(n)}:qw().includes(r)?function(...e){return r.apply(Dl(this),e),Sn(X_.get(this))}:function(...e){return Sn(r.apply(Dl(this),e))}}function $w(r){return typeof r=="function"?Ww(r):(r instanceof IDBTransaction&&zw(r),Uw(r,Bw())?new Proxy(r,eu):r)}function Sn(r){if(r instanceof IDBRequest)return Gw(r);if(kl.has(r))return kl.get(r);const e=$w(r);return e!==r&&(kl.set(r,e),eh.set(e,r)),e}const Dl=r=>eh.get(r);function Kw(r,e,{blocked:t,upgrade:n,blocking:s,terminated:i}={}){const o=indexedDB.open(r,e),a=Sn(o);return n&&o.addEventListener("upgradeneeded",l=>{n(Sn(o.result),l.oldVersion,l.newVersion,Sn(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Hw=["get","getKey","getAll","getAllKeys","count"],Qw=["put","add","delete","clear"],xl=new Map;function op(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(xl.get(e))return xl.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,s=Qw.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||Hw.includes(t)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return n&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),s&&l.done]))[0]};return xl.set(e,i),i}jw(r=>({...r,get:(e,t,n)=>op(e,t)||r.get(e,t,n),has:(e,t)=>!!op(e,t)||r.has(e,t)}));/**
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
 */class Yw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Jw(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function Jw(r){return r.getComponent()?.type==="VERSION"}const tu="@firebase/app",ap="0.14.3";/**
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
 */const $t=new gc("@firebase/app"),Xw="@firebase/app-compat",Zw="@firebase/analytics-compat",ev="@firebase/analytics",tv="@firebase/app-check-compat",nv="@firebase/app-check",rv="@firebase/auth",sv="@firebase/auth-compat",iv="@firebase/database",ov="@firebase/data-connect",av="@firebase/database-compat",cv="@firebase/functions",lv="@firebase/functions-compat",uv="@firebase/installations",hv="@firebase/installations-compat",dv="@firebase/messaging",fv="@firebase/messaging-compat",pv="@firebase/performance",mv="@firebase/performance-compat",_v="@firebase/remote-config",gv="@firebase/remote-config-compat",yv="@firebase/storage",Iv="@firebase/storage-compat",Ev="@firebase/firestore",Tv="@firebase/ai",wv="@firebase/firestore-compat",vv="firebase",Av="12.3.0";/**
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
 */const Da="[DEFAULT]",Sv={[tu]:"fire-core",[Xw]:"fire-core-compat",[ev]:"fire-analytics",[Zw]:"fire-analytics-compat",[nv]:"fire-app-check",[tv]:"fire-app-check-compat",[rv]:"fire-auth",[sv]:"fire-auth-compat",[iv]:"fire-rtdb",[ov]:"fire-data-connect",[av]:"fire-rtdb-compat",[cv]:"fire-fn",[lv]:"fire-fn-compat",[uv]:"fire-iid",[hv]:"fire-iid-compat",[dv]:"fire-fcm",[fv]:"fire-fcm-compat",[pv]:"fire-perf",[mv]:"fire-perf-compat",[_v]:"fire-rc",[gv]:"fire-rc-compat",[yv]:"fire-gcs",[Iv]:"fire-gcs-compat",[Ev]:"fire-fst",[wv]:"fire-fst-compat",[Tv]:"fire-vertex","fire-js":"fire-js",[vv]:"fire-js-all"};/**
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
 */const xa=new Map,bv=new Map,nu=new Map;function cp(r,e){try{r.container.addComponent(e)}catch(t){$t.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function _r(r){const e=r.name;if(nu.has(e))return $t.debug(`There were multiple attempts to register component ${e}.`),!1;nu.set(e,r);for(const t of xa.values())cp(t,r);for(const t of bv.values())cp(t,r);return!0}function Gs(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Rv(r,e,t=Da){Gs(r,e).clearInstance(t)}function gt(r){return r==null?!1:r.settings!==void 0}/**
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
 */const Cv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},bn=new yo("app","Firebase",Cv);/**
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
 */class Pv{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bn.create("app-deleted",{appName:this._name})}}/**
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
 */const Dr=Av;function eg(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n={name:Da,automaticDataCollectionEnabled:!0,...e},s=n.name;if(typeof s!="string"||!s)throw bn.create("bad-app-name",{appName:String(s)});if(t||(t=z_()),!t)throw bn.create("no-options");const i=xa.get(s);if(i){if(pt(t,i.options)&&pt(n,i.config))return i;throw bn.create("duplicate-app",{appName:s})}const o=new Vw(s);for(const l of nu.values())o.addComponent(l);const a=new Pv(t,n,o);return xa.set(s,a),a}function th(r=Da){const e=xa.get(r);if(!e&&r===Da&&z_())return eg();if(!e)throw bn.create("no-app",{appName:r});return e}function kt(r,e,t){let n=Sv[r]??r;t&&(n+=`-${t}`);const s=n.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${n}" with version "${e}":`];s&&o.push(`library name "${n}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$t.warn(o.join(" "));return}_r(new kn(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
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
 */const Nv="firebase-heartbeat-database",kv=1,Qi="firebase-heartbeat-store";let Vl=null;function tg(){return Vl||(Vl=Kw(Nv,kv,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Qi)}catch(t){console.warn(t)}}}}).catch(r=>{throw bn.create("idb-open",{originalErrorMessage:r.message})})),Vl}async function Dv(r){try{const t=(await tg()).transaction(Qi),n=await t.objectStore(Qi).get(ng(r));return await t.done,n}catch(e){if(e instanceof Zt)$t.warn(e.message);else{const t=bn.create("idb-get",{originalErrorMessage:e?.message});$t.warn(t.message)}}}async function lp(r,e){try{const n=(await tg()).transaction(Qi,"readwrite");await n.objectStore(Qi).put(e,ng(r)),await n.done}catch(t){if(t instanceof Zt)$t.warn(t.message);else{const n=bn.create("idb-set",{originalErrorMessage:t?.message});$t.warn(n.message)}}}function ng(r){return`${r.name}!${r.options.appId}`}/**
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
 */const xv=1024,Vv=30;class Ov{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Lv(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=up();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(s=>s.date===n))return;if(this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats.length>Vv){const s=Fv(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){$t.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=up(),{heartbeatsToSend:t,unsentEntries:n}=Mv(this._heartbeatsCache.heartbeats),s=Ca(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return $t.warn(e),""}}}function up(){return new Date().toISOString().substring(0,10)}function Mv(r,e=xv){const t=[];let n=r.slice();for(const s of r){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),hp(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),hp(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class Lv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Y_()?Ew().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Dv(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return lp(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return lp(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function hp(r){return Ca(JSON.stringify({version:2,heartbeats:r})).length}function Fv(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let n=1;n<r.length;n++)r[n].date<t&&(t=r[n].date,e=n);return e}/**
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
 */function Uv(r){_r(new kn("platform-logger",e=>new Yw(e),"PRIVATE")),_r(new kn("heartbeat",e=>new Ov(e),"PRIVATE")),kt(tu,ap,r),kt(tu,ap,"esm2020"),kt("fire-js","")}Uv("");function rg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Bv=rg,sg=new yo("auth","Firebase",rg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va=new gc("@firebase/auth");function qv(r,...e){Va.logLevel<=Z.WARN&&Va.warn(`Auth (${Dr}): ${r}`,...e)}function da(r,...e){Va.logLevel<=Z.ERROR&&Va.error(`Auth (${Dr}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(r,...e){throw nh(r,...e)}function Dt(r,...e){return nh(r,...e)}function ig(r,e,t){const n={...Bv(),[e]:t};return new yo("auth","Firebase",n).create(e,{appName:r.name})}function dr(r){return ig(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function nh(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return sg.create(r,...e)}function $(r,e,...t){if(!r)throw nh(e,...t)}function qt(r){const e="INTERNAL ASSERTION FAILED: "+r;throw da(e),new Error(e)}function Ht(r,e){r||qt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(){return typeof self<"u"&&self.location?.href||""}function Gv(){return dp()==="http:"||dp()==="https:"}function dp(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Gv()||gw()||"connection"in navigator)?navigator.onLine:!0}function jv(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ht(t>e,"Short delay should be less than long delay!"),this.isMobile=Zu()||K_()}get(){return zv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(r,e){Ht(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Kv=new Io(3e4,6e4);function sh(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function zs(r,e,t,n,s={}){return ag(r,s,async()=>{let i={},o={};n&&(e==="GET"?o=n:i={body:JSON.stringify(n)});const a=qs({key:r.config.apiKey,...o}).slice(1),l=await r._getAdditionalHeaders();l["Content-Type"]="application/json",r.languageCode&&(l["X-Firebase-Locale"]=r.languageCode);const u={method:e,headers:l,...i};return _w()||(u.referrerPolicy="no-referrer"),r.emulatorConfig&&Xt(r.emulatorConfig.host)&&(u.credentials="include"),og.fetch()(await cg(r,r.config.apiHost,t,a),u)})}async function ag(r,e,t){r._canInitEmulator=!1;const n={...Wv,...e};try{const s=new Qv(r),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ta(r,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ta(r,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ta(r,"email-already-in-use",o);if(l==="USER_DISABLED")throw ta(r,"user-disabled",o);const d=n[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ig(r,d,u);Kt(r,d)}}catch(s){if(s instanceof Zt)throw s;Kt(r,"network-request-failed",{message:String(s)})}}async function Hv(r,e,t,n,s={}){const i=await zs(r,e,t,n,s);return"mfaPendingCredential"in i&&Kt(r,"multi-factor-auth-required",{_serverResponse:i}),i}async function cg(r,e,t,n){const s=`${e}${t}?${n}`,i=r,o=i.config.emulator?rh(r.config,s):`${r.config.apiScheme}://${s}`;return $v.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class Qv{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(Dt(this.auth,"network-request-failed")),Kv.get())})}}function ta(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const s=Dt(r,e,n);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yv(r,e){return zs(r,"POST","/v1/accounts:delete",e)}async function Oa(r,e){return zs(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Jv(r,e=!1){const t=ie(r),n=await t.getIdToken(e),s=ih(n);$(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:n,authTime:Vi(Ol(s.auth_time)),issuedAtTime:Vi(Ol(s.iat)),expirationTime:Vi(Ol(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Ol(r){return Number(r)*1e3}function ih(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return da("JWT malformed, contained fewer than 3 sections"),null;try{const s=Pa(t);return s?JSON.parse(s):(da("Failed to decode base64 JWT payload"),null)}catch(s){return da("Caught error parsing JWT payload as JSON",s?.toString()),null}}function fp(r){const e=ih(r);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yi(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof Zt&&Xv(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function Xv({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vi(this.lastLoginAt),this.creationTime=Vi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ma(r){const e=r.auth,t=await r.getIdToken(),n=await Yi(r,Oa(e,{idToken:t}));$(n?.users.length,e,"internal-error");const s=n.users[0];r._notifyReloadListener(s);const i=s.providerUserInfo?.length?lg(s.providerUserInfo):[],o=tA(r.providerData,i),a=r.isAnonymous,l=!(r.email&&s.passwordHash)&&!o?.length,u=a?l:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new su(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(r,d)}async function eA(r){const e=ie(r);await Ma(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tA(r,e){return[...r.filter(n=>!e.some(s=>s.providerId===n.providerId)),...e]}function lg(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nA(r,e){const t=await ag(r,{},async()=>{const n=qs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=r.config,o=await cg(r,s,"/v1/token",`key=${i}`),a=await r._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:n};return r.emulatorConfig&&Xt(r.emulatorConfig.host)&&(l.credentials="include"),og.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function rA(r,e){return zs(r,"POST","/v2/accounts:revokeToken",sh(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){$(e.length!==0,"internal-error");const t=fp(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:i}=await nA(e,t);this.updateTokensAndExpiration(n,s,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:i}=t,o=new ss;return n&&($(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),s&&($(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&($(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ss,this.toJSON())}_performRefresh(){return qt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(r,e){$(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class It{constructor({uid:e,auth:t,stsTokenManager:n,...s}){this.providerId="firebase",this.proactiveRefresh=new Zv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new su(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Yi(this,this.stsTokenManager.getToken(this.auth,e));return $(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Jv(this,e)}reload(){return eA(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new It({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Ma(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(gt(this.auth.app))return Promise.reject(dr(this.auth));const e=await this.getIdToken();return await Yi(this,Yv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,a=t.tenantId??void 0,l=t._redirectEventId??void 0,u=t.createdAt??void 0,d=t.lastLoginAt??void 0,{uid:f,emailVerified:m,isAnonymous:y,providerData:S,stsTokenManager:N}=t;$(f&&N,e,"internal-error");const k=ss.fromJSON(this.name,N);$(typeof f=="string",e,"internal-error"),hn(n,e.name),hn(s,e.name),$(typeof m=="boolean",e,"internal-error"),$(typeof y=="boolean",e,"internal-error"),hn(i,e.name),hn(o,e.name),hn(a,e.name),hn(l,e.name),hn(u,e.name),hn(d,e.name);const F=new It({uid:f,auth:e,email:s,emailVerified:m,displayName:n,isAnonymous:y,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:k,createdAt:u,lastLoginAt:d});return S&&Array.isArray(S)&&(F.providerData=S.map(G=>({...G}))),l&&(F._redirectEventId=l),F}static async _fromIdTokenResponse(e,t,n=!1){const s=new ss;s.updateFromServerResponse(t);const i=new It({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await Ma(i),i}static async _fromGetAccountInfoResponse(e,t,n){const s=t.users[0];$(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?lg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,a=new ss;a.updateFromIdToken(n);const l=new It({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new su(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp=new Map;function Gt(r){Ht(r instanceof Function,"Expected a class definition");let e=pp.get(r);return e?(Ht(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,pp.set(r,e),e)}/**
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
 */class ug{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ug.type="NONE";const mp=ug;/**
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
 */function fa(r,e,t){return`firebase:${r}:${e}:${t}`}class is{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:i}=this.auth;this.fullUserKey=fa(this.userKey,s.apiKey,i),this.fullPersistenceKey=fa("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Oa(this.auth,{idToken:e}).catch(()=>{});return t?It._fromGetAccountInfoResponse(this.auth,t,e):null}return It._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new is(Gt(mp),e,n);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Gt(mp);const o=fa(n,e.config.apiKey,e.name);let a=null;for(const u of t)try{const d=await u._get(o);if(d){let f;if(typeof d=="string"){const m=await Oa(e,{idToken:d}).catch(()=>{});if(!m)break;f=await It._fromGetAccountInfoResponse(e,m,d)}else f=It._fromJSON(e,d);u!==i&&(a=f),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new is(i,e,n):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new is(i,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_g(e))return"Blackberry";if(gg(e))return"Webos";if(dg(e))return"Safari";if((e.includes("chrome/")||fg(e))&&!e.includes("edge/"))return"Chrome";if(mg(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if(n?.length===2)return n[1]}return"Other"}function hg(r=Ve()){return/firefox\//i.test(r)}function dg(r=Ve()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fg(r=Ve()){return/crios\//i.test(r)}function pg(r=Ve()){return/iemobile/i.test(r)}function mg(r=Ve()){return/android/i.test(r)}function _g(r=Ve()){return/blackberry/i.test(r)}function gg(r=Ve()){return/webos/i.test(r)}function oh(r=Ve()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function sA(r=Ve()){return oh(r)&&!!window.navigator?.standalone}function iA(){return yw()&&document.documentMode===10}function yg(r=Ve()){return oh(r)||mg(r)||gg(r)||_g(r)||/windows phone/i.test(r)||pg(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ig(r,e=[]){let t;switch(r){case"Browser":t=_p(Ve());break;case"Worker":t=`${_p(Ve())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Dr}/${n}`}/**
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
 */class oA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n?.message})}}}/**
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
 */async function aA(r,e={}){return zs(r,"GET","/v2/passwordPolicy",sh(r,e))}/**
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
 */const cA=6;class lA{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??cA,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let s=0;s<e.length;s++)n=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(e,t,n,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gp(this),this.idTokenSubscription=new gp(this),this.beforeStateQueue=new oA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=sg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Gt(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await is.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Oa(this,{idToken:e}),n=await It._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(gt(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=n?._redirectEventId,a=await this.tryRedirectSignIn(e);(!i||i===o)&&a?.user&&(n=a.user,s=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(n)}catch(i){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ma(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(gt(this.app))return Promise.reject(dr(this));const t=e?ie(e):null;return t&&$(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return gt(this.app)?Promise.reject(dr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return gt(this.app)?Promise.reject(dr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Gt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await aA(this),t=new lA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new yo("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await rA(this,n)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Gt(e)||this._popupRedirectResolver;$(t,this,"argument-error"),this.redirectPersistenceManager=await is.create(this,[Gt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if($(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,n,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ig(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){if(gt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&qv(`Error while retrieving App Check token: ${e.error}`),e?.token}}function ah(r){return ie(r)}class gp{constructor(e){this.auth=e,this.observer=null,this.addObserver=Rw(t=>this.observer=t)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ch={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function hA(r){ch=r}function dA(r){return ch.loadJS(r)}function fA(){return ch.gapiScript}function pA(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mA(r,e){const t=Gs(r,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(pt(i,e??{}))return s;Kt(s,"already-initialized")}return t.initialize({options:e})}function _A(r,e){const t=e?.persistence||[],n=(Array.isArray(t)?t:[t]).map(Gt);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e?.popupRedirectResolver)}function gA(r,e,t){const n=ah(r);$(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const s=!1,i=Eg(e),{host:o,port:a}=yA(e),l=a===null?"":`:${a}`,u={url:`${i}//${o}${l}/`},d=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!n._canInitEmulator){$(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),$(pt(u,n.config.emulator)&&pt(d,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=u,n.emulatorConfig=d,n.settings.appVerificationDisabledForTesting=!0,Xt(o)?(mc(`${i}//${o}${l}`),Xu("Auth",!0)):IA()}function Eg(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function yA(r){const e=Eg(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(n);if(s){const i=s[1];return{host:i,port:yp(n.substr(i.length+1))}}else{const[i,o]=n.split(":");return{host:i,port:yp(o)}}}function yp(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function IA(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return qt("not implemented")}_getIdTokenResponse(e){return qt("not implemented")}_linkToIdToken(e,t){return qt("not implemented")}_getReauthenticationResolver(e){return qt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function os(r,e){return Hv(r,"POST","/v1/accounts:signInWithIdp",sh(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA="http://localhost";class gr extends Tg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new gr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Kt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s,...i}=t;if(!n||!s)return null;const o=new gr(n,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return os(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,os(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,os(e,t)}buildRequest(){const e={requestUri:EA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=qs(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Eo extends wg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends Eo{constructor(){super("facebook.com")}static credential(e){return gr._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mn.credential(e.oauthAccessToken)}catch{return null}}}mn.FACEBOOK_SIGN_IN_METHOD="facebook.com";mn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends Eo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return gr._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return _n.credential(t,n)}catch{return null}}}_n.GOOGLE_SIGN_IN_METHOD="google.com";_n.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends Eo{constructor(){super("github.com")}static credential(e){return gr._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gn.credential(e.oauthAccessToken)}catch{return null}}}gn.GITHUB_SIGN_IN_METHOD="github.com";gn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends Eo{constructor(){super("twitter.com")}static credential(e,t){return gr._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return yn.credential(t,n)}catch{return null}}}yn.TWITTER_SIGN_IN_METHOD="twitter.com";yn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const i=await It._fromIdTokenResponse(e,n,s),o=Ip(n);return new ps({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=Ip(n);return new ps({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function Ip(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La extends Zt{constructor(e,t,n,s){super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,La.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new La(e,t,n,s)}}function vg(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?La._fromErrorAndOperation(r,i,e,n):i})}async function TA(r,e,t=!1){const n=await Yi(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return ps._forOperation(r,"link",n)}/**
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
 */async function wA(r,e,t=!1){const{auth:n}=r;if(gt(n.app))return Promise.reject(dr(n));const s="reauthenticate";try{const i=await Yi(r,vg(n,s,e,r),t);$(i.idToken,n,"internal-error");const o=ih(i.idToken);$(o,n,"internal-error");const{sub:a}=o;return $(r.uid===a,n,"user-mismatch"),ps._forOperation(r,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&Kt(n,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vA(r,e,t=!1){if(gt(r.app))return Promise.reject(dr(r));const n="signIn",s=await vg(r,n,e),i=await ps._fromIdTokenResponse(r,n,s);return t||await r._updateCurrentUser(i.user),i}function AA(r,e,t,n){return ie(r).onIdTokenChanged(e,t,n)}function SA(r,e,t){return ie(r).beforeAuthStateChanged(e,t)}function Qk(r,e,t,n){return ie(r).onAuthStateChanged(e,t,n)}function Yk(r){return ie(r).signOut()}const Fa="__sak";/**
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
 */class Ag{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Fa,"1"),this.storage.removeItem(Fa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bA=1e3,RA=10;class Sg extends Ag{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=yg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const n=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},i=this.storage.getItem(n);iA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,RA):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},bA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Sg.type="LOCAL";const CA=Sg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg extends Ag{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}bg.type="SESSION";const Rg=bg;/**
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
 */function PA(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class yc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const n=new yc(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const a=Array.from(o).map(async u=>u(t.origin,i)),l=await PA(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lh(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class NA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=lh("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},n);o={messageChannel:s,onMessage(f){const m=f;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(m.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(){return window}function kA(r){xt().location.href=r}/**
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
 */function Cg(){return typeof xt().WorkerGlobalScope<"u"&&typeof xt().importScripts=="function"}async function DA(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xA(){return navigator?.serviceWorker?.controller||null}function VA(){return Cg()?self:null}/**
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
 */const Pg="firebaseLocalStorageDb",OA=1,Ua="firebaseLocalStorage",Ng="fbase_key";class To{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ic(r,e){return r.transaction([Ua],e?"readwrite":"readonly").objectStore(Ua)}function MA(){const r=indexedDB.deleteDatabase(Pg);return new To(r).toPromise()}function iu(){const r=indexedDB.open(Pg,OA);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(Ua,{keyPath:Ng})}catch(s){t(s)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(Ua)?e(n):(n.close(),await MA(),e(await iu()))})})}async function Ep(r,e,t){const n=Ic(r,!0).put({[Ng]:e,value:t});return new To(n).toPromise()}async function LA(r,e){const t=Ic(r,!1).get(e),n=await new To(t).toPromise();return n===void 0?null:n.value}function Tp(r,e){const t=Ic(r,!0).delete(e);return new To(t).toPromise()}const FA=800,UA=3;class kg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await iu(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>UA)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Cg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yc._getInstance(VA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await DA(),!this.activeServiceWorker)return;this.sender=new NA(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await iu();return await Ep(e,Fa,"1"),await Tp(e,Fa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ep(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>LA(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Tp(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ic(s,!1).getAll();return new To(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),FA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}kg.type="LOCAL";const BA=kg;new Io(3e4,6e4);/**
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
 */function qA(r,e){return e?Gt(e):($(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class uh extends Tg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return os(e,this._buildIdpRequest())}_linkToIdToken(e,t){return os(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return os(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function GA(r){return vA(r.auth,new uh(r),r.bypassAuthState)}function zA(r){const{auth:e,user:t}=r;return $(t,e,"internal-error"),wA(t,new uh(r),r.bypassAuthState)}async function jA(r){const{auth:e,user:t}=r;return $(t,e,"internal-error"),TA(t,new uh(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e,t,n,s,i=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return GA;case"linkViaPopup":case"linkViaRedirect":return jA;case"reauthViaPopup":case"reauthViaRedirect":return zA;default:Kt(this.auth,"internal-error")}}resolve(e){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA=new Io(2e3,1e4);class ts extends Dg{constructor(e,t,n,s,i){super(e,t,s,i),this.provider=n,this.authWindow=null,this.pollId=null,ts.currentPopupAction&&ts.currentPopupAction.cancel(),ts.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){Ht(this.filter.length===1,"Popup operations only handle one event");const e=lh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ts.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,WA.get())};e()}}ts.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A="pendingRedirect",pa=new Map;class KA extends Dg{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=pa.get(this.auth._key());if(!e){try{const n=await HA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}pa.set(this.auth._key(),e)}return this.bypassAuthState||pa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function HA(r,e){const t=JA(e),n=YA(r);if(!await n._isAvailable())return!1;const s=await n._get(t)==="true";return await n._remove(t),s}function QA(r,e){pa.set(r._key(),e)}function YA(r){return Gt(r._redirectPersistence)}function JA(r){return fa($A,r.config.apiKey,r.name)}async function XA(r,e,t=!1){if(gt(r.app))return Promise.reject(dr(r));const n=ah(r),s=qA(n,e),o=await new KA(n,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZA=600*1e3;class eS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tS(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!xg(e)){const n=e.error.code?.split("auth/")[1]||"internal-error";t.onError(Dt(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ZA&&this.cachedEventUids.clear(),this.cachedEventUids.has(wp(e))}saveEventToCache(e){this.cachedEventUids.add(wp(e)),this.lastProcessedEventTime=Date.now()}}function wp(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function xg({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function tS(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xg(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nS(r,e={}){return zs(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sS=/^https?/;async function iS(r){if(r.config.emulator)return;const{authorizedDomains:e}=await nS(r);for(const t of e)try{if(oS(t))return}catch{}Kt(r,"unauthorized-domain")}function oS(r){const e=ru(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const o=new URL(r);return o.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!sS.test(t))return!1;if(rS.test(r))return n===r;const s=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}/**
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
 */const aS=new Io(3e4,6e4);function vp(){const r=xt().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function cS(r){return new Promise((e,t)=>{function n(){vp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vp(),t(Dt(r,"network-request-failed"))},timeout:aS.get()})}if(xt().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(xt().gapi?.load)n();else{const s=pA("iframefcb");return xt()[s]=()=>{gapi.load?n():t(Dt(r,"network-request-failed"))},dA(`${fA()}?onload=${s}`).catch(i=>t(i))}}).catch(e=>{throw ma=null,e})}let ma=null;function lS(r){return ma=ma||cS(r),ma}/**
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
 */const uS=new Io(5e3,15e3),hS="__/auth/iframe",dS="emulator/auth/iframe",fS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mS(r){const e=r.config;$(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?rh(e,dS):`https://${r.config.authDomain}/${hS}`,n={apiKey:e.apiKey,appName:r.name,v:Dr},s=pS.get(r.config.apiHost);s&&(n.eid=s);const i=r._getFrameworks();return i.length&&(n.fw=i.join(",")),`${t}?${qs(n).slice(1)}`}async function _S(r){const e=await lS(r),t=xt().gapi;return $(t,r,"internal-error"),e.open({where:document.body,url:mS(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fS,dontclear:!0},n=>new Promise(async(s,i)=>{await n.restyle({setHideOnLeave:!1});const o=Dt(r,"network-request-failed"),a=xt().setTimeout(()=>{i(o)},uS.get());function l(){xt().clearTimeout(a),s(n)}n.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const gS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yS=500,IS=600,ES="_blank",TS="http://localhost";class Ap{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wS(r,e,t,n=yS,s=IS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let a="";const l={...gS,width:n.toString(),height:s.toString(),top:i,left:o},u=Ve().toLowerCase();t&&(a=fg(u)?ES:t),hg(u)&&(e=e||TS,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[y,S])=>`${m}${y}=${S},`,"");if(sA(u)&&a!=="_self")return vS(e||"",a),new Ap(null);const f=window.open(e||"",a,d);$(f,r,"popup-blocked");try{f.focus()}catch{}return new Ap(f)}function vS(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const AS="__/auth/handler",SS="emulator/auth/handler",bS=encodeURIComponent("fac");async function Sp(r,e,t,n,s,i){$(r.config.authDomain,r,"auth-domain-config-required"),$(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:Dr,eventId:s};if(e instanceof wg){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",Na(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof Eo){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}r.tenantId&&(o.tid=r.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await r._getAppCheckToken(),u=l?`#${bS}=${encodeURIComponent(l)}`:"";return`${RS(r)}?${qs(a).slice(1)}${u}`}function RS({config:r}){return r.emulator?rh(r,SS):`https://${r.authDomain}/${AS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml="webStorageSupport";class CS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Rg,this._completeRedirectFn=XA,this._overrideRedirectResult=QA}async _openPopup(e,t,n,s){Ht(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Sp(e,t,n,ru(),s);return wS(e,i,lh())}async _openRedirect(e,t,n,s){await this._originValidation(e);const i=await Sp(e,t,n,ru(),s);return kA(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Ht(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await _S(e),n=new eS(e);return t.register("authEvent",s=>($(s?.authEvent,e,"invalid-auth-event"),{status:n.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ml,{type:Ml},s=>{const i=s?.[0]?.[Ml];i!==void 0&&t(!!i),Kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=iS(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return yg()||dg()||oh()}}const PS=CS;var bp="@firebase/auth",Rp="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e(n?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kS(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function DS(r){_r(new kn("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=n.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const l={apiKey:o,authDomain:a,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ig(r)},u=new uA(n,s,i,l);return _A(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),_r(new kn("auth-internal",e=>{const t=ah(e.getProvider("auth").getImmediate());return(n=>new NS(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),kt(bp,Rp,kS(r)),kt(bp,Rp,"esm2020")}/**
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
 */const xS=300,VS=j_("authIdTokenMaxAge")||xS;let Cp=null;const OS=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>VS)return;const s=t?.token;Cp!==s&&(Cp=s,await fetch(r,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function MS(r=th()){const e=Gs(r,"auth");if(e.isInitialized())return e.getImmediate();const t=mA(r,{popupRedirectResolver:PS,persistence:[BA,CA,Rg]}),n=j_("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(n,location.origin);if(location.origin===i.origin){const o=OS(i.toString());SA(t,o,()=>o(t.currentUser)),AA(t,a=>o(a))}}const s=q_("auth");return s&&gA(t,`http://${s}`),t}function LS(){return document.getElementsByTagName("head")?.[0]??document}hA({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=s=>{const i=Dt("internal-error");i.customData=s,t(i)},n.type="text/javascript",n.charset="UTF-8",LS().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});DS("Browser");var FS="firebase",US="12.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kt(FS,US,"app");var Pp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rn,Vg;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,g){function E(){}E.prototype=g.prototype,T.F=g.prototype,T.prototype=new E,T.prototype.constructor=T,T.D=function(v,w,C){for(var I=Array(arguments.length-2),tt=2;tt<arguments.length;tt++)I[tt-2]=arguments[tt];return g.prototype[w].apply(v,I)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(n,t),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,g,E){E||(E=0);const v=Array(16);if(typeof g=="string")for(var w=0;w<16;++w)v[w]=g.charCodeAt(E++)|g.charCodeAt(E++)<<8|g.charCodeAt(E++)<<16|g.charCodeAt(E++)<<24;else for(w=0;w<16;++w)v[w]=g[E++]|g[E++]<<8|g[E++]<<16|g[E++]<<24;g=T.g[0],E=T.g[1],w=T.g[2];let C=T.g[3],I;I=g+(C^E&(w^C))+v[0]+3614090360&4294967295,g=E+(I<<7&4294967295|I>>>25),I=C+(w^g&(E^w))+v[1]+3905402710&4294967295,C=g+(I<<12&4294967295|I>>>20),I=w+(E^C&(g^E))+v[2]+606105819&4294967295,w=C+(I<<17&4294967295|I>>>15),I=E+(g^w&(C^g))+v[3]+3250441966&4294967295,E=w+(I<<22&4294967295|I>>>10),I=g+(C^E&(w^C))+v[4]+4118548399&4294967295,g=E+(I<<7&4294967295|I>>>25),I=C+(w^g&(E^w))+v[5]+1200080426&4294967295,C=g+(I<<12&4294967295|I>>>20),I=w+(E^C&(g^E))+v[6]+2821735955&4294967295,w=C+(I<<17&4294967295|I>>>15),I=E+(g^w&(C^g))+v[7]+4249261313&4294967295,E=w+(I<<22&4294967295|I>>>10),I=g+(C^E&(w^C))+v[8]+1770035416&4294967295,g=E+(I<<7&4294967295|I>>>25),I=C+(w^g&(E^w))+v[9]+2336552879&4294967295,C=g+(I<<12&4294967295|I>>>20),I=w+(E^C&(g^E))+v[10]+4294925233&4294967295,w=C+(I<<17&4294967295|I>>>15),I=E+(g^w&(C^g))+v[11]+2304563134&4294967295,E=w+(I<<22&4294967295|I>>>10),I=g+(C^E&(w^C))+v[12]+1804603682&4294967295,g=E+(I<<7&4294967295|I>>>25),I=C+(w^g&(E^w))+v[13]+4254626195&4294967295,C=g+(I<<12&4294967295|I>>>20),I=w+(E^C&(g^E))+v[14]+2792965006&4294967295,w=C+(I<<17&4294967295|I>>>15),I=E+(g^w&(C^g))+v[15]+1236535329&4294967295,E=w+(I<<22&4294967295|I>>>10),I=g+(w^C&(E^w))+v[1]+4129170786&4294967295,g=E+(I<<5&4294967295|I>>>27),I=C+(E^w&(g^E))+v[6]+3225465664&4294967295,C=g+(I<<9&4294967295|I>>>23),I=w+(g^E&(C^g))+v[11]+643717713&4294967295,w=C+(I<<14&4294967295|I>>>18),I=E+(C^g&(w^C))+v[0]+3921069994&4294967295,E=w+(I<<20&4294967295|I>>>12),I=g+(w^C&(E^w))+v[5]+3593408605&4294967295,g=E+(I<<5&4294967295|I>>>27),I=C+(E^w&(g^E))+v[10]+38016083&4294967295,C=g+(I<<9&4294967295|I>>>23),I=w+(g^E&(C^g))+v[15]+3634488961&4294967295,w=C+(I<<14&4294967295|I>>>18),I=E+(C^g&(w^C))+v[4]+3889429448&4294967295,E=w+(I<<20&4294967295|I>>>12),I=g+(w^C&(E^w))+v[9]+568446438&4294967295,g=E+(I<<5&4294967295|I>>>27),I=C+(E^w&(g^E))+v[14]+3275163606&4294967295,C=g+(I<<9&4294967295|I>>>23),I=w+(g^E&(C^g))+v[3]+4107603335&4294967295,w=C+(I<<14&4294967295|I>>>18),I=E+(C^g&(w^C))+v[8]+1163531501&4294967295,E=w+(I<<20&4294967295|I>>>12),I=g+(w^C&(E^w))+v[13]+2850285829&4294967295,g=E+(I<<5&4294967295|I>>>27),I=C+(E^w&(g^E))+v[2]+4243563512&4294967295,C=g+(I<<9&4294967295|I>>>23),I=w+(g^E&(C^g))+v[7]+1735328473&4294967295,w=C+(I<<14&4294967295|I>>>18),I=E+(C^g&(w^C))+v[12]+2368359562&4294967295,E=w+(I<<20&4294967295|I>>>12),I=g+(E^w^C)+v[5]+4294588738&4294967295,g=E+(I<<4&4294967295|I>>>28),I=C+(g^E^w)+v[8]+2272392833&4294967295,C=g+(I<<11&4294967295|I>>>21),I=w+(C^g^E)+v[11]+1839030562&4294967295,w=C+(I<<16&4294967295|I>>>16),I=E+(w^C^g)+v[14]+4259657740&4294967295,E=w+(I<<23&4294967295|I>>>9),I=g+(E^w^C)+v[1]+2763975236&4294967295,g=E+(I<<4&4294967295|I>>>28),I=C+(g^E^w)+v[4]+1272893353&4294967295,C=g+(I<<11&4294967295|I>>>21),I=w+(C^g^E)+v[7]+4139469664&4294967295,w=C+(I<<16&4294967295|I>>>16),I=E+(w^C^g)+v[10]+3200236656&4294967295,E=w+(I<<23&4294967295|I>>>9),I=g+(E^w^C)+v[13]+681279174&4294967295,g=E+(I<<4&4294967295|I>>>28),I=C+(g^E^w)+v[0]+3936430074&4294967295,C=g+(I<<11&4294967295|I>>>21),I=w+(C^g^E)+v[3]+3572445317&4294967295,w=C+(I<<16&4294967295|I>>>16),I=E+(w^C^g)+v[6]+76029189&4294967295,E=w+(I<<23&4294967295|I>>>9),I=g+(E^w^C)+v[9]+3654602809&4294967295,g=E+(I<<4&4294967295|I>>>28),I=C+(g^E^w)+v[12]+3873151461&4294967295,C=g+(I<<11&4294967295|I>>>21),I=w+(C^g^E)+v[15]+530742520&4294967295,w=C+(I<<16&4294967295|I>>>16),I=E+(w^C^g)+v[2]+3299628645&4294967295,E=w+(I<<23&4294967295|I>>>9),I=g+(w^(E|~C))+v[0]+4096336452&4294967295,g=E+(I<<6&4294967295|I>>>26),I=C+(E^(g|~w))+v[7]+1126891415&4294967295,C=g+(I<<10&4294967295|I>>>22),I=w+(g^(C|~E))+v[14]+2878612391&4294967295,w=C+(I<<15&4294967295|I>>>17),I=E+(C^(w|~g))+v[5]+4237533241&4294967295,E=w+(I<<21&4294967295|I>>>11),I=g+(w^(E|~C))+v[12]+1700485571&4294967295,g=E+(I<<6&4294967295|I>>>26),I=C+(E^(g|~w))+v[3]+2399980690&4294967295,C=g+(I<<10&4294967295|I>>>22),I=w+(g^(C|~E))+v[10]+4293915773&4294967295,w=C+(I<<15&4294967295|I>>>17),I=E+(C^(w|~g))+v[1]+2240044497&4294967295,E=w+(I<<21&4294967295|I>>>11),I=g+(w^(E|~C))+v[8]+1873313359&4294967295,g=E+(I<<6&4294967295|I>>>26),I=C+(E^(g|~w))+v[15]+4264355552&4294967295,C=g+(I<<10&4294967295|I>>>22),I=w+(g^(C|~E))+v[6]+2734768916&4294967295,w=C+(I<<15&4294967295|I>>>17),I=E+(C^(w|~g))+v[13]+1309151649&4294967295,E=w+(I<<21&4294967295|I>>>11),I=g+(w^(E|~C))+v[4]+4149444226&4294967295,g=E+(I<<6&4294967295|I>>>26),I=C+(E^(g|~w))+v[11]+3174756917&4294967295,C=g+(I<<10&4294967295|I>>>22),I=w+(g^(C|~E))+v[2]+718787259&4294967295,w=C+(I<<15&4294967295|I>>>17),I=E+(C^(w|~g))+v[9]+3951481745&4294967295,T.g[0]=T.g[0]+g&4294967295,T.g[1]=T.g[1]+(w+(I<<21&4294967295|I>>>11))&4294967295,T.g[2]=T.g[2]+w&4294967295,T.g[3]=T.g[3]+C&4294967295}n.prototype.v=function(T,g){g===void 0&&(g=T.length);const E=g-this.blockSize,v=this.C;let w=this.h,C=0;for(;C<g;){if(w==0)for(;C<=E;)s(this,T,C),C+=this.blockSize;if(typeof T=="string"){for(;C<g;)if(v[w++]=T.charCodeAt(C++),w==this.blockSize){s(this,v),w=0;break}}else for(;C<g;)if(v[w++]=T[C++],w==this.blockSize){s(this,v),w=0;break}}this.h=w,this.o+=g},n.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var g=1;g<T.length-8;++g)T[g]=0;g=this.o*8;for(var E=T.length-8;E<T.length;++E)T[E]=g&255,g/=256;for(this.v(T),T=Array(16),g=0,E=0;E<4;++E)for(let v=0;v<32;v+=8)T[g++]=this.g[E]>>>v&255;return T};function i(T,g){var E=a;return Object.prototype.hasOwnProperty.call(E,T)?E[T]:E[T]=g(T)}function o(T,g){this.h=g;const E=[];let v=!0;for(let w=T.length-1;w>=0;w--){const C=T[w]|0;v&&C==g||(E[w]=C,v=!1)}this.g=E}var a={};function l(T){return-128<=T&&T<128?i(T,function(g){return new o([g|0],g<0?-1:0)}):new o([T|0],T<0?-1:0)}function u(T){if(isNaN(T)||!isFinite(T))return f;if(T<0)return k(u(-T));const g=[];let E=1;for(let v=0;T>=E;v++)g[v]=T/E|0,E*=4294967296;return new o(g,0)}function d(T,g){if(T.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(T.charAt(0)=="-")return k(d(T.substring(1),g));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=u(Math.pow(g,8));let v=f;for(let C=0;C<T.length;C+=8){var w=Math.min(8,T.length-C);const I=parseInt(T.substring(C,C+w),g);w<8?(w=u(Math.pow(g,w)),v=v.j(w).add(u(I))):(v=v.j(E),v=v.add(u(I)))}return v}var f=l(0),m=l(1),y=l(16777216);r=o.prototype,r.m=function(){if(N(this))return-k(this).m();let T=0,g=1;for(let E=0;E<this.g.length;E++){const v=this.i(E);T+=(v>=0?v:4294967296+v)*g,g*=4294967296}return T},r.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(S(this))return"0";if(N(this))return"-"+k(this).toString(T);const g=u(Math.pow(T,6));var E=this;let v="";for(;;){const w=se(E,g).g;E=F(E,w.j(g));let C=((E.g.length>0?E.g[0]:E.h)>>>0).toString(T);if(E=w,S(E))return C+v;for(;C.length<6;)C="0"+C;v=C+v}},r.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function S(T){if(T.h!=0)return!1;for(let g=0;g<T.g.length;g++)if(T.g[g]!=0)return!1;return!0}function N(T){return T.h==-1}r.l=function(T){return T=F(this,T),N(T)?-1:S(T)?0:1};function k(T){const g=T.g.length,E=[];for(let v=0;v<g;v++)E[v]=~T.g[v];return new o(E,~T.h).add(m)}r.abs=function(){return N(this)?k(this):this},r.add=function(T){const g=Math.max(this.g.length,T.g.length),E=[];let v=0;for(let w=0;w<=g;w++){let C=v+(this.i(w)&65535)+(T.i(w)&65535),I=(C>>>16)+(this.i(w)>>>16)+(T.i(w)>>>16);v=I>>>16,C&=65535,I&=65535,E[w]=I<<16|C}return new o(E,E[E.length-1]&-2147483648?-1:0)};function F(T,g){return T.add(k(g))}r.j=function(T){if(S(this)||S(T))return f;if(N(this))return N(T)?k(this).j(k(T)):k(k(this).j(T));if(N(T))return k(this.j(k(T)));if(this.l(y)<0&&T.l(y)<0)return u(this.m()*T.m());const g=this.g.length+T.g.length,E=[];for(var v=0;v<2*g;v++)E[v]=0;for(v=0;v<this.g.length;v++)for(let w=0;w<T.g.length;w++){const C=this.i(v)>>>16,I=this.i(v)&65535,tt=T.i(w)>>>16,Qn=T.i(w)&65535;E[2*v+2*w]+=I*Qn,G(E,2*v+2*w),E[2*v+2*w+1]+=C*Qn,G(E,2*v+2*w+1),E[2*v+2*w+1]+=I*tt,G(E,2*v+2*w+1),E[2*v+2*w+2]+=C*tt,G(E,2*v+2*w+2)}for(T=0;T<g;T++)E[T]=E[2*T+1]<<16|E[2*T];for(T=g;T<2*g;T++)E[T]=0;return new o(E,0)};function G(T,g){for(;(T[g]&65535)!=T[g];)T[g+1]+=T[g]>>>16,T[g]&=65535,g++}function B(T,g){this.g=T,this.h=g}function se(T,g){if(S(g))throw Error("division by zero");if(S(T))return new B(f,f);if(N(T))return g=se(k(T),g),new B(k(g.g),k(g.h));if(N(g))return g=se(T,k(g)),new B(k(g.g),g.h);if(T.g.length>30){if(N(T)||N(g))throw Error("slowDivide_ only works with positive integers.");for(var E=m,v=g;v.l(T)<=0;)E=oe(E),v=oe(v);var w=ne(E,1),C=ne(v,1);for(v=ne(v,2),E=ne(E,2);!S(v);){var I=C.add(v);I.l(T)<=0&&(w=w.add(E),C=I),v=ne(v,1),E=ne(E,1)}return g=F(T,w.j(g)),new B(w,g)}for(w=f;T.l(g)>=0;){for(E=Math.max(1,Math.floor(T.m()/g.m())),v=Math.ceil(Math.log(E)/Math.LN2),v=v<=48?1:Math.pow(2,v-48),C=u(E),I=C.j(g);N(I)||I.l(T)>0;)E-=v,C=u(E),I=C.j(g);S(C)&&(C=m),w=w.add(C),T=F(T,I)}return new B(w,T)}r.B=function(T){return se(this,T).h},r.and=function(T){const g=Math.max(this.g.length,T.g.length),E=[];for(let v=0;v<g;v++)E[v]=this.i(v)&T.i(v);return new o(E,this.h&T.h)},r.or=function(T){const g=Math.max(this.g.length,T.g.length),E=[];for(let v=0;v<g;v++)E[v]=this.i(v)|T.i(v);return new o(E,this.h|T.h)},r.xor=function(T){const g=Math.max(this.g.length,T.g.length),E=[];for(let v=0;v<g;v++)E[v]=this.i(v)^T.i(v);return new o(E,this.h^T.h)};function oe(T){const g=T.g.length+1,E=[];for(let v=0;v<g;v++)E[v]=T.i(v)<<1|T.i(v-1)>>>31;return new o(E,T.h)}function ne(T,g){const E=g>>5;g%=32;const v=T.g.length-E,w=[];for(let C=0;C<v;C++)w[C]=g>0?T.i(C+E)>>>g|T.i(C+E+1)<<32-g:T.i(C+E);return new o(w,T.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,Vg=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,Rn=o}).apply(typeof Pp<"u"?Pp:typeof self<"u"?self:typeof window<"u"?window:{});var na=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Og,Pi,Mg,_a,ou,Lg,Fg,Ug;(function(){var r,e=Object.defineProperty;function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof na=="object"&&na];for(var h=0;h<c.length;++h){var p=c[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var n=t(this);function s(c,h){if(h)e:{var p=n;c=c.split(".");for(var _=0;_<c.length-1;_++){var b=c[_];if(!(b in p))break e;p=p[b]}c=c[c.length-1],_=p[c],h=h(_),h!=_&&h!=null&&e(p,c,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(c){return c||function(h){var p=[],_;for(_ in h)Object.prototype.hasOwnProperty.call(h,_)&&p.push([_,h[_]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function a(c){var h=typeof c;return h=="object"&&c!=null||h=="function"}function l(c,h,p){return c.call.apply(c.bind,arguments)}function u(c,h,p){return u=l,u.apply(null,arguments)}function d(c,h){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),c.apply(this,_)}}function f(c,h){function p(){}p.prototype=h.prototype,c.Z=h.prototype,c.prototype=new p,c.prototype.constructor=c,c.Ob=function(_,b,P){for(var L=Array(arguments.length-2),H=2;H<arguments.length;H++)L[H-2]=arguments[H];return h.prototype[b].apply(_,L)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function y(c){const h=c.length;if(h>0){const p=Array(h);for(let _=0;_<h;_++)p[_]=c[_];return p}return[]}function S(c,h){for(let _=1;_<arguments.length;_++){const b=arguments[_];var p=typeof b;if(p=p!="object"?p:b?Array.isArray(b)?"array":p:"null",p=="array"||p=="object"&&typeof b.length=="number"){p=c.length||0;const P=b.length||0;c.length=p+P;for(let L=0;L<P;L++)c[p+L]=b[L]}else c.push(b)}}class N{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function k(c){o.setTimeout(()=>{throw c},0)}function F(){var c=T;let h=null;return c.g&&(h=c.g,c.g=c.g.next,c.g||(c.h=null),h.next=null),h}class G{constructor(){this.h=this.g=null}add(h,p){const _=B.get();_.set(h,p),this.h?this.h.next=_:this.g=_,this.h=_}}var B=new N(()=>new se,c=>c.reset());class se{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let oe,ne=!1,T=new G,g=()=>{const c=Promise.resolve(void 0);oe=()=>{c.then(E)}};function E(){for(var c;c=F();){try{c.h.call(c.g)}catch(p){k(p)}var h=B;h.j(c),h.h<100&&(h.h++,c.next=h.g,h.g=c)}ne=!1}function v(){this.u=this.u,this.C=this.C}v.prototype.u=!1,v.prototype.dispose=function(){this.u||(this.u=!0,this.N())},v.prototype[Symbol.dispose]=function(){this.dispose()},v.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function w(c,h){this.type=c,this.g=this.target=h,this.defaultPrevented=!1}w.prototype.h=function(){this.defaultPrevented=!0};var C=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var c=!1,h=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const p=()=>{};o.addEventListener("test",p,h),o.removeEventListener("test",p,h)}catch{}return c})();function I(c){return/^[\s\xa0]*$/.test(c)}function tt(c,h){w.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,h)}f(tt,w),tt.prototype.init=function(c,h){const p=this.type=c.type,_=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=h,h=c.relatedTarget,h||(p=="mouseover"?h=c.fromElement:p=="mouseout"&&(h=c.toElement)),this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&tt.Z.h.call(this)},tt.prototype.h=function(){tt.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Qn="closure_listenable_"+(Math.random()*1e6|0),CT=0;function PT(c,h,p,_,b){this.listener=c,this.proxy=null,this.src=h,this.type=p,this.capture=!!_,this.ha=b,this.key=++CT,this.da=this.fa=!1}function Bo(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function qo(c,h,p){for(const _ in c)h.call(p,c[_],_,c)}function NT(c,h){for(const p in c)h.call(void 0,c[p],p,c)}function Zd(c){const h={};for(const p in c)h[p]=c[p];return h}const ef="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function tf(c,h){let p,_;for(let b=1;b<arguments.length;b++){_=arguments[b];for(p in _)c[p]=_[p];for(let P=0;P<ef.length;P++)p=ef[P],Object.prototype.hasOwnProperty.call(_,p)&&(c[p]=_[p])}}function Go(c){this.src=c,this.g={},this.h=0}Go.prototype.add=function(c,h,p,_,b){const P=c.toString();c=this.g[P],c||(c=this.g[P]=[],this.h++);const L=al(c,h,_,b);return L>-1?(h=c[L],p||(h.fa=!1)):(h=new PT(h,this.src,P,!!_,b),h.fa=p,c.push(h)),h};function ol(c,h){const p=h.type;if(p in c.g){var _=c.g[p],b=Array.prototype.indexOf.call(_,h,void 0),P;(P=b>=0)&&Array.prototype.splice.call(_,b,1),P&&(Bo(h),c.g[p].length==0&&(delete c.g[p],c.h--))}}function al(c,h,p,_){for(let b=0;b<c.length;++b){const P=c[b];if(!P.da&&P.listener==h&&P.capture==!!p&&P.ha==_)return b}return-1}var cl="closure_lm_"+(Math.random()*1e6|0),ll={};function nf(c,h,p,_,b){if(Array.isArray(h)){for(let P=0;P<h.length;P++)nf(c,h[P],p,_,b);return null}return p=of(p),c&&c[Qn]?c.J(h,p,a(_)?!!_.capture:!1,b):kT(c,h,p,!1,_,b)}function kT(c,h,p,_,b,P){if(!h)throw Error("Invalid event type");const L=a(b)?!!b.capture:!!b;let H=hl(c);if(H||(c[cl]=H=new Go(c)),p=H.add(h,p,_,L,P),p.proxy)return p;if(_=DT(),p.proxy=_,_.src=c,_.listener=p,c.addEventListener)C||(b=L),b===void 0&&(b=!1),c.addEventListener(h.toString(),_,b);else if(c.attachEvent)c.attachEvent(sf(h.toString()),_);else if(c.addListener&&c.removeListener)c.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function DT(){function c(p){return h.call(c.src,c.listener,p)}const h=xT;return c}function rf(c,h,p,_,b){if(Array.isArray(h))for(var P=0;P<h.length;P++)rf(c,h[P],p,_,b);else _=a(_)?!!_.capture:!!_,p=of(p),c&&c[Qn]?(c=c.i,P=String(h).toString(),P in c.g&&(h=c.g[P],p=al(h,p,_,b),p>-1&&(Bo(h[p]),Array.prototype.splice.call(h,p,1),h.length==0&&(delete c.g[P],c.h--)))):c&&(c=hl(c))&&(h=c.g[h.toString()],c=-1,h&&(c=al(h,p,_,b)),(p=c>-1?h[c]:null)&&ul(p))}function ul(c){if(typeof c!="number"&&c&&!c.da){var h=c.src;if(h&&h[Qn])ol(h.i,c);else{var p=c.type,_=c.proxy;h.removeEventListener?h.removeEventListener(p,_,c.capture):h.detachEvent?h.detachEvent(sf(p),_):h.addListener&&h.removeListener&&h.removeListener(_),(p=hl(h))?(ol(p,c),p.h==0&&(p.src=null,h[cl]=null)):Bo(c)}}}function sf(c){return c in ll?ll[c]:ll[c]="on"+c}function xT(c,h){if(c.da)c=!0;else{h=new tt(h,this);const p=c.listener,_=c.ha||c.src;c.fa&&ul(c),c=p.call(_,h)}return c}function hl(c){return c=c[cl],c instanceof Go?c:null}var dl="__closure_events_fn_"+(Math.random()*1e9>>>0);function of(c){return typeof c=="function"?c:(c[dl]||(c[dl]=function(h){return c.handleEvent(h)}),c[dl])}function Ke(){v.call(this),this.i=new Go(this),this.M=this,this.G=null}f(Ke,v),Ke.prototype[Qn]=!0,Ke.prototype.removeEventListener=function(c,h,p,_){rf(this,c,h,p,_)};function Xe(c,h){var p,_=c.G;if(_)for(p=[];_;_=_.G)p.push(_);if(c=c.M,_=h.type||h,typeof h=="string")h=new w(h,c);else if(h instanceof w)h.target=h.target||c;else{var b=h;h=new w(_,c),tf(h,b)}b=!0;let P,L;if(p)for(L=p.length-1;L>=0;L--)P=h.g=p[L],b=zo(P,_,!0,h)&&b;if(P=h.g=c,b=zo(P,_,!0,h)&&b,b=zo(P,_,!1,h)&&b,p)for(L=0;L<p.length;L++)P=h.g=p[L],b=zo(P,_,!1,h)&&b}Ke.prototype.N=function(){if(Ke.Z.N.call(this),this.i){var c=this.i;for(const h in c.g){const p=c.g[h];for(let _=0;_<p.length;_++)Bo(p[_]);delete c.g[h],c.h--}}this.G=null},Ke.prototype.J=function(c,h,p,_){return this.i.add(String(c),h,!1,p,_)},Ke.prototype.K=function(c,h,p,_){return this.i.add(String(c),h,!0,p,_)};function zo(c,h,p,_){if(h=c.i.g[String(h)],!h)return!0;h=h.concat();let b=!0;for(let P=0;P<h.length;++P){const L=h[P];if(L&&!L.da&&L.capture==p){const H=L.listener,xe=L.ha||L.src;L.fa&&ol(c.i,L),b=H.call(xe,_)!==!1&&b}}return b&&!_.defaultPrevented}function VT(c,h){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=u(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(c,h||0)}function af(c){c.g=VT(()=>{c.g=null,c.i&&(c.i=!1,af(c))},c.l);const h=c.h;c.h=null,c.m.apply(null,h)}class OT extends v{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:af(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function si(c){v.call(this),this.h=c,this.g={}}f(si,v);var cf=[];function lf(c){qo(c.g,function(h,p){this.g.hasOwnProperty(p)&&ul(h)},c),c.g={}}si.prototype.N=function(){si.Z.N.call(this),lf(this)},si.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var fl=o.JSON.stringify,MT=o.JSON.parse,LT=class{stringify(c){return o.JSON.stringify(c,void 0)}parse(c){return o.JSON.parse(c,void 0)}};function uf(){}function hf(){}var ii={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function pl(){w.call(this,"d")}f(pl,w);function ml(){w.call(this,"c")}f(ml,w);var Yn={},df=null;function jo(){return df=df||new Ke}Yn.Ia="serverreachability";function ff(c){w.call(this,Yn.Ia,c)}f(ff,w);function oi(c){const h=jo();Xe(h,new ff(h))}Yn.STAT_EVENT="statevent";function pf(c,h){w.call(this,Yn.STAT_EVENT,c),this.stat=h}f(pf,w);function Ze(c){const h=jo();Xe(h,new pf(h,c))}Yn.Ja="timingevent";function mf(c,h){w.call(this,Yn.Ja,c),this.size=h}f(mf,w);function ai(c,h){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){c()},h)}function ci(){this.g=!0}ci.prototype.ua=function(){this.g=!1};function FT(c,h,p,_,b,P){c.info(function(){if(c.g)if(P){var L="",H=P.split("&");for(let fe=0;fe<H.length;fe++){var xe=H[fe].split("=");if(xe.length>1){const Me=xe[0];xe=xe[1];const St=Me.split("_");L=St.length>=2&&St[1]=="type"?L+(Me+"="+xe+"&"):L+(Me+"=redacted&")}}}else L=null;else L=P;return"XMLHTTP REQ ("+_+") [attempt "+b+"]: "+h+`
`+p+`
`+L})}function UT(c,h,p,_,b,P,L){c.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+b+"]: "+h+`
`+p+`
`+P+" "+L})}function qr(c,h,p,_){c.info(function(){return"XMLHTTP TEXT ("+h+"): "+qT(c,p)+(_?" "+_:"")})}function BT(c,h){c.info(function(){return"TIMEOUT: "+h})}ci.prototype.info=function(){};function qT(c,h){if(!c.g)return h;if(!h)return null;try{const P=JSON.parse(h);if(P){for(c=0;c<P.length;c++)if(Array.isArray(P[c])){var p=P[c];if(!(p.length<2)){var _=p[1];if(Array.isArray(_)&&!(_.length<1)){var b=_[0];if(b!="noop"&&b!="stop"&&b!="close")for(let L=1;L<_.length;L++)_[L]=""}}}}return fl(P)}catch{return h}}var Wo={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},_f={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},gf;function _l(){}f(_l,uf),_l.prototype.g=function(){return new XMLHttpRequest},gf=new _l;function li(c){return encodeURIComponent(String(c))}function GT(c){var h=1;c=c.split(":");const p=[];for(;h>0&&c.length;)p.push(c.shift()),h--;return c.length&&p.push(c.join(":")),p}function sn(c,h,p,_){this.j=c,this.i=h,this.l=p,this.S=_||1,this.V=new si(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new yf}function yf(){this.i=null,this.g="",this.h=!1}var If={},gl={};function yl(c,h,p){c.M=1,c.A=Ko(At(h)),c.u=p,c.R=!0,Ef(c,null)}function Ef(c,h){c.F=Date.now(),$o(c),c.B=At(c.A);var p=c.B,_=c.S;Array.isArray(_)||(_=[String(_)]),xf(p.i,"t",_),c.C=0,p=c.j.L,c.h=new yf,c.g=Jf(c.j,p?h:null,!c.u),c.P>0&&(c.O=new OT(u(c.Y,c,c.g),c.P)),h=c.V,p=c.g,_=c.ba;var b="readystatechange";Array.isArray(b)||(b&&(cf[0]=b.toString()),b=cf);for(let P=0;P<b.length;P++){const L=nf(p,b[P],_||h.handleEvent,!1,h.h||h);if(!L)break;h.g[L.key]=L}h=c.J?Zd(c.J):{},c.u?(c.v||(c.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,h)):(c.v="GET",c.g.ea(c.B,c.v,null,h)),oi(),FT(c.i,c.v,c.B,c.l,c.S,c.u)}sn.prototype.ba=function(c){c=c.target;const h=this.O;h&&cn(c)==3?h.j():this.Y(c)},sn.prototype.Y=function(c){try{if(c==this.g)e:{const H=cn(this.g),xe=this.g.ya(),fe=this.g.ca();if(!(H<3)&&(H!=3||this.g&&(this.h.h||this.g.la()||Bf(this.g)))){this.K||H!=4||xe==7||(xe==8||fe<=0?oi(3):oi(2)),Il(this);var h=this.g.ca();this.X=h;var p=zT(this);if(this.o=h==200,UT(this.i,this.v,this.B,this.l,this.S,H,h),this.o){if(this.U&&!this.L){t:{if(this.g){var _,b=this.g;if((_=b.g?b.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(_)){var P=_;break t}}P=null}if(c=P)qr(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,El(this,c);else{this.o=!1,this.m=3,Ze(12),Jn(this),ui(this);break e}}if(this.R){c=!0;let Me;for(;!this.K&&this.C<p.length;)if(Me=jT(this,p),Me==gl){H==4&&(this.m=4,Ze(14),c=!1),qr(this.i,this.l,null,"[Incomplete Response]");break}else if(Me==If){this.m=4,Ze(15),qr(this.i,this.l,p,"[Invalid Chunk]"),c=!1;break}else qr(this.i,this.l,Me,null),El(this,Me);if(Tf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),H!=4||p.length!=0||this.h.h||(this.m=1,Ze(16),c=!1),this.o=this.o&&c,!c)qr(this.i,this.l,p,"[Invalid Chunked Response]"),Jn(this),ui(this);else if(p.length>0&&!this.W){this.W=!0;var L=this.j;L.g==this&&L.aa&&!L.P&&(L.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),Cl(L),L.P=!0,Ze(11))}}else qr(this.i,this.l,p,null),El(this,p);H==4&&Jn(this),this.o&&!this.K&&(H==4?Kf(this.j,this):(this.o=!1,$o(this)))}else sw(this.g),h==400&&p.indexOf("Unknown SID")>0?(this.m=3,Ze(12)):(this.m=0,Ze(13)),Jn(this),ui(this)}}}catch{}finally{}};function zT(c){if(!Tf(c))return c.g.la();const h=Bf(c.g);if(h==="")return"";let p="";const _=h.length,b=cn(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return Jn(c),ui(c),"";c.h.i=new o.TextDecoder}for(let P=0;P<_;P++)c.h.h=!0,p+=c.h.i.decode(h[P],{stream:!(b&&P==_-1)});return h.length=0,c.h.g+=p,c.C=0,c.h.g}function Tf(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function jT(c,h){var p=c.C,_=h.indexOf(`
`,p);return _==-1?gl:(p=Number(h.substring(p,_)),isNaN(p)?If:(_+=1,_+p>h.length?gl:(h=h.slice(_,_+p),c.C=_+p,h)))}sn.prototype.cancel=function(){this.K=!0,Jn(this)};function $o(c){c.T=Date.now()+c.H,wf(c,c.H)}function wf(c,h){if(c.D!=null)throw Error("WatchDog timer not null");c.D=ai(u(c.aa,c),h)}function Il(c){c.D&&(o.clearTimeout(c.D),c.D=null)}sn.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(BT(this.i,this.B),this.M!=2&&(oi(),Ze(17)),Jn(this),this.m=2,ui(this)):wf(this,this.T-c)};function ui(c){c.j.I==0||c.K||Kf(c.j,c)}function Jn(c){Il(c);var h=c.O;h&&typeof h.dispose=="function"&&h.dispose(),c.O=null,lf(c.V),c.g&&(h=c.g,c.g=null,h.abort(),h.dispose())}function El(c,h){try{var p=c.j;if(p.I!=0&&(p.g==c||Tl(p.h,c))){if(!c.L&&Tl(p.h,c)&&p.I==3){try{var _=p.Ba.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var b=_;if(b[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<c.F)Xo(p),Yo(p);else break e;Rl(p),Ze(18)}}else p.xa=b[1],0<p.xa-p.K&&b[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=ai(u(p.Va,p),6e3));Sf(p.h)<=1&&p.ta&&(p.ta=void 0)}else Zn(p,11)}else if((c.L||p.g==c)&&Xo(p),!I(h))for(b=p.Ba.g.parse(h),h=0;h<b.length;h++){let fe=b[h];const Me=fe[0];if(!(Me<=p.K))if(p.K=Me,fe=fe[1],p.I==2)if(fe[0]=="c"){p.M=fe[1],p.ba=fe[2];const St=fe[3];St!=null&&(p.ka=St,p.j.info("VER="+p.ka));const er=fe[4];er!=null&&(p.za=er,p.j.info("SVER="+p.za));const ln=fe[5];ln!=null&&typeof ln=="number"&&ln>0&&(_=1.5*ln,p.O=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const un=c.g;if(un){const ea=un.g?un.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ea){var P=_.h;P.g||ea.indexOf("spdy")==-1&&ea.indexOf("quic")==-1&&ea.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(wl(P,P.h),P.h=null))}if(_.G){const Pl=un.g?un.g.getResponseHeader("X-HTTP-Session-Id"):null;Pl&&(_.wa=Pl,ge(_.J,_.G,Pl))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-c.F,p.j.info("Handshake RTT: "+p.T+"ms")),_=p;var L=c;if(_.na=Yf(_,_.L?_.ba:null,_.W),L.L){bf(_.h,L);var H=L,xe=_.O;xe&&(H.H=xe),H.D&&(Il(H),$o(H)),_.g=L}else Wf(_);p.i.length>0&&Jo(p)}else fe[0]!="stop"&&fe[0]!="close"||Zn(p,7);else p.I==3&&(fe[0]=="stop"||fe[0]=="close"?fe[0]=="stop"?Zn(p,7):bl(p):fe[0]!="noop"&&p.l&&p.l.qa(fe),p.A=0)}}oi(4)}catch{}}var WT=class{constructor(c,h){this.g=c,this.map=h}};function vf(c){this.l=c||10,o.PerformanceNavigationTiming?(c=o.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Af(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Sf(c){return c.h?1:c.g?c.g.size:0}function Tl(c,h){return c.h?c.h==h:c.g?c.g.has(h):!1}function wl(c,h){c.g?c.g.add(h):c.h=h}function bf(c,h){c.h&&c.h==h?c.h=null:c.g&&c.g.has(h)&&c.g.delete(h)}vf.prototype.cancel=function(){if(this.i=Rf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Rf(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let h=c.i;for(const p of c.g.values())h=h.concat(p.G);return h}return y(c.i)}var Cf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $T(c,h){if(c){c=c.split("&");for(let p=0;p<c.length;p++){const _=c[p].indexOf("=");let b,P=null;_>=0?(b=c[p].substring(0,_),P=c[p].substring(_+1)):b=c[p],h(b,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function on(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;c instanceof on?(this.l=c.l,hi(this,c.j),this.o=c.o,this.g=c.g,di(this,c.u),this.h=c.h,vl(this,Vf(c.i)),this.m=c.m):c&&(h=String(c).match(Cf))?(this.l=!1,hi(this,h[1]||"",!0),this.o=fi(h[2]||""),this.g=fi(h[3]||"",!0),di(this,h[4]),this.h=fi(h[5]||"",!0),vl(this,h[6]||"",!0),this.m=fi(h[7]||"")):(this.l=!1,this.i=new mi(null,this.l))}on.prototype.toString=function(){const c=[];var h=this.j;h&&c.push(pi(h,Pf,!0),":");var p=this.g;return(p||h=="file")&&(c.push("//"),(h=this.o)&&c.push(pi(h,Pf,!0),"@"),c.push(li(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&c.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&c.push("/"),c.push(pi(p,p.charAt(0)=="/"?QT:HT,!0))),(p=this.i.toString())&&c.push("?",p),(p=this.m)&&c.push("#",pi(p,JT)),c.join("")},on.prototype.resolve=function(c){const h=At(this);let p=!!c.j;p?hi(h,c.j):p=!!c.o,p?h.o=c.o:p=!!c.g,p?h.g=c.g:p=c.u!=null;var _=c.h;if(p)di(h,c.u);else if(p=!!c.h){if(_.charAt(0)!="/")if(this.g&&!this.h)_="/"+_;else{var b=h.h.lastIndexOf("/");b!=-1&&(_=h.h.slice(0,b+1)+_)}if(b=_,b==".."||b==".")_="";else if(b.indexOf("./")!=-1||b.indexOf("/.")!=-1){_=b.lastIndexOf("/",0)==0,b=b.split("/");const P=[];for(let L=0;L<b.length;){const H=b[L++];H=="."?_&&L==b.length&&P.push(""):H==".."?((P.length>1||P.length==1&&P[0]!="")&&P.pop(),_&&L==b.length&&P.push("")):(P.push(H),_=!0)}_=P.join("/")}else _=b}return p?h.h=_:p=c.i.toString()!=="",p?vl(h,Vf(c.i)):p=!!c.m,p&&(h.m=c.m),h};function At(c){return new on(c)}function hi(c,h,p){c.j=p?fi(h,!0):h,c.j&&(c.j=c.j.replace(/:$/,""))}function di(c,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);c.u=h}else c.u=null}function vl(c,h,p){h instanceof mi?(c.i=h,XT(c.i,c.l)):(p||(h=pi(h,YT)),c.i=new mi(h,c.l))}function ge(c,h,p){c.i.set(h,p)}function Ko(c){return ge(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function fi(c,h){return c?h?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function pi(c,h,p){return typeof c=="string"?(c=encodeURI(c).replace(h,KT),p&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function KT(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Pf=/[#\/\?@]/g,HT=/[#\?:]/g,QT=/[#\?]/g,YT=/[#\?@]/g,JT=/#/g;function mi(c,h){this.h=this.g=null,this.i=c||null,this.j=!!h}function Xn(c){c.g||(c.g=new Map,c.h=0,c.i&&$T(c.i,function(h,p){c.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}r=mi.prototype,r.add=function(c,h){Xn(this),this.i=null,c=Gr(this,c);let p=this.g.get(c);return p||this.g.set(c,p=[]),p.push(h),this.h+=1,this};function Nf(c,h){Xn(c),h=Gr(c,h),c.g.has(h)&&(c.i=null,c.h-=c.g.get(h).length,c.g.delete(h))}function kf(c,h){return Xn(c),h=Gr(c,h),c.g.has(h)}r.forEach=function(c,h){Xn(this),this.g.forEach(function(p,_){p.forEach(function(b){c.call(h,b,_,this)},this)},this)};function Df(c,h){Xn(c);let p=[];if(typeof h=="string")kf(c,h)&&(p=p.concat(c.g.get(Gr(c,h))));else for(c=Array.from(c.g.values()),h=0;h<c.length;h++)p=p.concat(c[h]);return p}r.set=function(c,h){return Xn(this),this.i=null,c=Gr(this,c),kf(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[h]),this.h+=1,this},r.get=function(c,h){return c?(c=Df(this,c),c.length>0?String(c[0]):h):h};function xf(c,h,p){Nf(c,h),p.length>0&&(c.i=null,c.g.set(Gr(c,h),y(p)),c.h+=p.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],h=Array.from(this.g.keys());for(let _=0;_<h.length;_++){var p=h[_];const b=li(p);p=Df(this,p);for(let P=0;P<p.length;P++){let L=b;p[P]!==""&&(L+="="+li(p[P])),c.push(L)}}return this.i=c.join("&")};function Vf(c){const h=new mi;return h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),h}function Gr(c,h){return h=String(h),c.j&&(h=h.toLowerCase()),h}function XT(c,h){h&&!c.j&&(Xn(c),c.i=null,c.g.forEach(function(p,_){const b=_.toLowerCase();_!=b&&(Nf(this,_),xf(this,b,p))},c)),c.j=h}function ZT(c,h){const p=new ci;if(o.Image){const _=new Image;_.onload=d(an,p,"TestLoadImage: loaded",!0,h,_),_.onerror=d(an,p,"TestLoadImage: error",!1,h,_),_.onabort=d(an,p,"TestLoadImage: abort",!1,h,_),_.ontimeout=d(an,p,"TestLoadImage: timeout",!1,h,_),o.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=c}else h(!1)}function ew(c,h){const p=new ci,_=new AbortController,b=setTimeout(()=>{_.abort(),an(p,"TestPingServer: timeout",!1,h)},1e4);fetch(c,{signal:_.signal}).then(P=>{clearTimeout(b),P.ok?an(p,"TestPingServer: ok",!0,h):an(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(b),an(p,"TestPingServer: error",!1,h)})}function an(c,h,p,_,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),_(p)}catch{}}function tw(){this.g=new LT}function Al(c){this.i=c.Sb||null,this.h=c.ab||!1}f(Al,uf),Al.prototype.g=function(){return new Ho(this.i,this.h)};function Ho(c,h){Ke.call(this),this.H=c,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}f(Ho,Ke),r=Ho.prototype,r.open=function(c,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=h,this.readyState=1,gi(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(h.body=c),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,_i(this)),this.readyState=0},r.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,gi(this)),this.g&&(this.readyState=3,gi(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Of(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function Of(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}r.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var h=c.value?c.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!c.done}))&&(this.response=this.responseText+=h)}c.done?_i(this):gi(this),this.readyState==3&&Of(this)}},r.Oa=function(c){this.g&&(this.response=this.responseText=c,_i(this))},r.Na=function(c){this.g&&(this.response=c,_i(this))},r.ga=function(){this.g&&_i(this)};function _i(c){c.readyState=4,c.l=null,c.j=null,c.B=null,gi(c)}r.setRequestHeader=function(c,h){this.A.append(c,h)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,c.push(p[0]+": "+p[1]),p=h.next();return c.join(`\r
`)};function gi(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Ho.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Mf(c){let h="";return qo(c,function(p,_){h+=_,h+=":",h+=p,h+=`\r
`}),h}function Sl(c,h,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=Mf(p),typeof c=="string"?p!=null&&li(p):ge(c,h,p))}function be(c){Ke.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}f(be,Ke);var nw=/^https?$/i,rw=["POST","PUT"];r=be.prototype,r.Fa=function(c){this.H=c},r.ea=function(c,h,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);h=h?h.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():gf.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(c),!0),this.B=!1}catch(P){Lf(this,P);return}if(c=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var b in _)p.set(b,_[b]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const P of _.keys())p.set(P,_.get(P));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(P=>P.toLowerCase()=="content-type"),b=o.FormData&&c instanceof o.FormData,!(Array.prototype.indexOf.call(rw,h,void 0)>=0)||_||b||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,L]of p)this.g.setRequestHeader(P,L);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(P){Lf(this,P)}};function Lf(c,h){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=h,c.o=5,Ff(c),Qo(c)}function Ff(c){c.A||(c.A=!0,Xe(c,"complete"),Xe(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,Xe(this,"complete"),Xe(this,"abort"),Qo(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Qo(this,!0)),be.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?Uf(this):this.Xa())},r.Xa=function(){Uf(this)};function Uf(c){if(c.h&&typeof i<"u"){if(c.v&&cn(c)==4)setTimeout(c.Ca.bind(c),0);else if(Xe(c,"readystatechange"),cn(c)==4){c.h=!1;try{const P=c.ca();e:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var _;if(_=P===0){let L=String(c.D).match(Cf)[1]||null;!L&&o.self&&o.self.location&&(L=o.self.location.protocol.slice(0,-1)),_=!nw.test(L?L.toLowerCase():"")}p=_}if(p)Xe(c,"complete"),Xe(c,"success");else{c.o=6;try{var b=cn(c)>2?c.g.statusText:""}catch{b=""}c.l=b+" ["+c.ca()+"]",Ff(c)}}finally{Qo(c)}}}}function Qo(c,h){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const p=c.g;c.g=null,h||Xe(c,"ready");try{p.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function cn(c){return c.g?c.g.readyState:0}r.ca=function(){try{return cn(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(c){if(this.g){var h=this.g.responseText;return c&&h.indexOf(c)==0&&(h=h.substring(c.length)),MT(h)}};function Bf(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function sw(c){const h={};c=(c.g&&cn(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<c.length;_++){if(I(c[_]))continue;var p=GT(c[_]);const b=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const P=h[b]||[];h[b]=P,P.push(p)}NT(h,function(_){return _.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function yi(c,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[c]||h}function qf(c){this.za=0,this.i=[],this.j=new ci,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=yi("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=yi("baseRetryDelayMs",5e3,c),this.Za=yi("retryDelaySeedMs",1e4,c),this.Ta=yi("forwardChannelMaxRetries",2,c),this.va=yi("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new vf(c&&c.concurrentRequestLimit),this.Ba=new tw,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=qf.prototype,r.ka=8,r.I=1,r.connect=function(c,h,p,_){Ze(0),this.W=c,this.H=h||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.J=Yf(this,null,this.W),Jo(this)};function bl(c){if(Gf(c),c.I==3){var h=c.V++,p=At(c.J);if(ge(p,"SID",c.M),ge(p,"RID",h),ge(p,"TYPE","terminate"),Ii(c,p),h=new sn(c,c.j,h),h.M=2,h.A=Ko(At(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=h.A,p=!0),p||(h.g=Jf(h.j,null),h.g.ea(h.A)),h.F=Date.now(),$o(h)}Qf(c)}function Yo(c){c.g&&(Cl(c),c.g.cancel(),c.g=null)}function Gf(c){Yo(c),c.v&&(o.clearTimeout(c.v),c.v=null),Xo(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&o.clearTimeout(c.m),c.m=null)}function Jo(c){if(!Af(c.h)&&!c.m){c.m=!0;var h=c.Ea;oe||g(),ne||(oe(),ne=!0),T.add(h,c),c.D=0}}function iw(c,h){return Sf(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=h.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=ai(u(c.Ea,c,h),Hf(c,c.D)),c.D++,!0)}r.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const b=new sn(this,this.j,c);let P=this.o;if(this.U&&(P?(P=Zd(P),tf(P,this.U)):P=this.U),this.u!==null||this.R||(b.J=P,P=null),this.S)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,h>4096){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=jf(this,b,h),p=At(this.J),ge(p,"RID",c),ge(p,"CVER",22),this.G&&ge(p,"X-HTTP-Session-Id",this.G),Ii(this,p),P&&(this.R?h="headers="+li(Mf(P))+"&"+h:this.u&&Sl(p,this.u,P)),wl(this.h,b),this.Ra&&ge(p,"TYPE","init"),this.S?(ge(p,"$req",h),ge(p,"SID","null"),b.U=!0,yl(b,p,null)):yl(b,p,h),this.I=2}}else this.I==3&&(c?zf(this,c):this.i.length==0||Af(this.h)||zf(this))};function zf(c,h){var p;h?p=h.l:p=c.V++;const _=At(c.J);ge(_,"SID",c.M),ge(_,"RID",p),ge(_,"AID",c.K),Ii(c,_),c.u&&c.o&&Sl(_,c.u,c.o),p=new sn(c,c.j,p,c.D+1),c.u===null&&(p.J=c.o),h&&(c.i=h.G.concat(c.i)),h=jf(c,p,1e3),p.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),wl(c.h,p),yl(p,_,h)}function Ii(c,h){c.H&&qo(c.H,function(p,_){ge(h,_,p)}),c.l&&qo({},function(p,_){ge(h,_,p)})}function jf(c,h,p){p=Math.min(c.i.length,p);const _=c.l?u(c.l.Ka,c.l,c):null;e:{var b=c.i;let H=-1;for(;;){const xe=["count="+p];H==-1?p>0?(H=b[0].g,xe.push("ofs="+H)):H=0:xe.push("ofs="+H);let fe=!0;for(let Me=0;Me<p;Me++){var P=b[Me].g;const St=b[Me].map;if(P-=H,P<0)H=Math.max(0,b[Me].g-100),fe=!1;else try{P="req"+P+"_"||"";try{var L=St instanceof Map?St:Object.entries(St);for(const[er,ln]of L){let un=ln;a(ln)&&(un=fl(ln)),xe.push(P+er+"="+encodeURIComponent(un))}}catch(er){throw xe.push(P+"type="+encodeURIComponent("_badmap")),er}}catch{_&&_(St)}}if(fe){L=xe.join("&");break e}}L=void 0}return c=c.i.splice(0,p),h.G=c,L}function Wf(c){if(!c.g&&!c.v){c.Y=1;var h=c.Da;oe||g(),ne||(oe(),ne=!0),T.add(h,c),c.A=0}}function Rl(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=ai(u(c.Da,c),Hf(c,c.A)),c.A++,!0)}r.Da=function(){if(this.v=null,$f(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=ai(u(this.Wa,this),c)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ze(10),Yo(this),$f(this))};function Cl(c){c.B!=null&&(o.clearTimeout(c.B),c.B=null)}function $f(c){c.g=new sn(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var h=At(c.na);ge(h,"RID","rpc"),ge(h,"SID",c.M),ge(h,"AID",c.K),ge(h,"CI",c.F?"0":"1"),!c.F&&c.ia&&ge(h,"TO",c.ia),ge(h,"TYPE","xmlhttp"),Ii(c,h),c.u&&c.o&&Sl(h,c.u,c.o),c.O&&(c.g.H=c.O);var p=c.g;c=c.ba,p.M=1,p.A=Ko(At(h)),p.u=null,p.R=!0,Ef(p,c)}r.Va=function(){this.C!=null&&(this.C=null,Yo(this),Rl(this),Ze(19))};function Xo(c){c.C!=null&&(o.clearTimeout(c.C),c.C=null)}function Kf(c,h){var p=null;if(c.g==h){Xo(c),Cl(c),c.g=null;var _=2}else if(Tl(c.h,h))p=h.G,bf(c.h,h),_=1;else return;if(c.I!=0){if(h.o)if(_==1){p=h.u?h.u.length:0,h=Date.now()-h.F;var b=c.D;_=jo(),Xe(_,new mf(_,p)),Jo(c)}else Wf(c);else if(b=h.m,b==3||b==0&&h.X>0||!(_==1&&iw(c,h)||_==2&&Rl(c)))switch(p&&p.length>0&&(h=c.h,h.i=h.i.concat(p)),b){case 1:Zn(c,5);break;case 4:Zn(c,10);break;case 3:Zn(c,6);break;default:Zn(c,2)}}}function Hf(c,h){let p=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(p*=2),p*h}function Zn(c,h){if(c.j.info("Error code "+h),h==2){var p=u(c.bb,c),_=c.Ua;const b=!_;_=new on(_||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||hi(_,"https"),Ko(_),b?ZT(_.toString(),p):ew(_.toString(),p)}else Ze(2);c.I=0,c.l&&c.l.pa(h),Qf(c),Gf(c)}r.bb=function(c){c?(this.j.info("Successfully pinged google.com"),Ze(2)):(this.j.info("Failed to ping google.com"),Ze(1))};function Qf(c){if(c.I=0,c.ja=[],c.l){const h=Rf(c.h);(h.length!=0||c.i.length!=0)&&(S(c.ja,h),S(c.ja,c.i),c.h.i.length=0,y(c.i),c.i.length=0),c.l.oa()}}function Yf(c,h,p){var _=p instanceof on?At(p):new on(p);if(_.g!="")h&&(_.g=h+"."+_.g),di(_,_.u);else{var b=o.location;_=b.protocol,h=h?h+"."+b.hostname:b.hostname,b=+b.port;const P=new on(null);_&&hi(P,_),h&&(P.g=h),b&&di(P,b),p&&(P.h=p),_=P}return p=c.G,h=c.wa,p&&h&&ge(_,p,h),ge(_,"VER",c.ka),Ii(c,_),_}function Jf(c,h,p){if(h&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=c.Aa&&!c.ma?new be(new Al({ab:p})):new be(c.ma),h.Fa(c.L),h}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Xf(){}r=Xf.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function Zo(){}Zo.prototype.g=function(c,h){return new at(c,h)};function at(c,h){Ke.call(this),this.g=new qf(h),this.l=c,this.h=h&&h.messageUrlParams||null,c=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(c?c["X-WebChannel-Content-Type"]=h.messageContentType:c={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(c?c["X-WebChannel-Client-Profile"]=h.sa:c={"X-WebChannel-Client-Profile":h.sa}),this.g.U=c,(c=h&&h.Qb)&&!I(c)&&(this.g.u=c),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!I(h)&&(this.g.G=h,c=this.h,c!==null&&h in c&&(c=this.h,h in c&&delete c[h])),this.j=new zr(this)}f(at,Ke),at.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},at.prototype.close=function(){bl(this.g)},at.prototype.o=function(c){var h=this.g;if(typeof c=="string"){var p={};p.__data__=c,c=p}else this.v&&(p={},p.__data__=fl(c),c=p);h.i.push(new WT(h.Ya++,c)),h.I==3&&Jo(h)},at.prototype.N=function(){this.g.l=null,delete this.j,bl(this.g),delete this.g,at.Z.N.call(this)};function Zf(c){pl.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var h=c.__sm__;if(h){e:{for(const p in h){c=p;break e}c=void 0}(this.i=c)&&(c=this.i,h=h!==null&&c in h?h[c]:void 0),this.data=h}else this.data=c}f(Zf,pl);function ep(){ml.call(this),this.status=1}f(ep,ml);function zr(c){this.g=c}f(zr,Xf),zr.prototype.ra=function(){Xe(this.g,"a")},zr.prototype.qa=function(c){Xe(this.g,new Zf(c))},zr.prototype.pa=function(c){Xe(this.g,new ep)},zr.prototype.oa=function(){Xe(this.g,"b")},Zo.prototype.createWebChannel=Zo.prototype.g,at.prototype.send=at.prototype.o,at.prototype.open=at.prototype.m,at.prototype.close=at.prototype.close,Ug=function(){return new Zo},Fg=function(){return jo()},Lg=Yn,ou={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Wo.NO_ERROR=0,Wo.TIMEOUT=8,Wo.HTTP_ERROR=6,_a=Wo,_f.COMPLETE="complete",Mg=_f,hf.EventType=ii,ii.OPEN="a",ii.CLOSE="b",ii.ERROR="c",ii.MESSAGE="d",Ke.prototype.listen=Ke.prototype.J,Pi=hf,be.prototype.listenOnce=be.prototype.K,be.prototype.getLastError=be.prototype.Ha,be.prototype.getLastErrorCode=be.prototype.ya,be.prototype.getStatus=be.prototype.ca,be.prototype.getResponseJson=be.prototype.La,be.prototype.getResponseText=be.prototype.la,be.prototype.send=be.prototype.ea,be.prototype.setWithCredentials=be.prototype.Fa,Og=be}).apply(typeof na<"u"?na:typeof self<"u"?self:typeof window<"u"?window:{});const Np="@firebase/firestore",kp="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let js="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn=new gc("@firebase/firestore");function Jr(){return Dn.logLevel}function Jk(r){Dn.setLogLevel(r)}function x(r,...e){if(Dn.logLevel<=Z.DEBUG){const t=e.map(hh);Dn.debug(`Firestore (${js}): ${r}`,...t)}}function Pe(r,...e){if(Dn.logLevel<=Z.ERROR){const t=e.map(hh);Dn.error(`Firestore (${js}): ${r}`,...t)}}function mt(r,...e){if(Dn.logLevel<=Z.WARN){const t=e.map(hh);Dn.warn(`Firestore (${js}): ${r}`,...t)}}function hh(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function U(r,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,Bg(r,n,t)}function Bg(r,e,t){let n=`FIRESTORE (${js}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw Pe(n),new Error(n)}function q(r,e,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,r||Bg(e,s,n)}function Xk(r,e){r||U(57014,e)}function M(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends Zt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class BS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ue.UNAUTHENTICATED)))}shutdown(){}}class qS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class GS{constructor(e){this.t=e,this.currentUser=Ue.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){q(this.o===void 0,42304);let n=this.i;const s=l=>this.i!==n?(n=this.i,t(l)):Promise.resolve();let i=new ze;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ze,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},a=l=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>a(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ze)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((n=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(q(typeof n.accessToken=="string",31837,{l:n}),new qg(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return q(e===null||typeof e=="string",2055,{h:e}),new Ue(e)}}class zS{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=Ue.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class jS{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new zS(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ue.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class au{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class WS{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,gt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){q(this.o===void 0,3512);const n=i=>{i.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,x("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>n(i)))};const s=i=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new au(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(q(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new au(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}class Zk{getToken(){return Promise.resolve(new au(""))}invalidateToken(){}start(e,t){}shutdown(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $S(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=$S(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<t&&(n+=e.charAt(s[i]%62))}return n}}function j(r,e){return r<e?-1:r>e?1:0}function cu(r,e){const t=Math.min(r.length,e.length);for(let n=0;n<t;n++){const s=r.charAt(n),i=e.charAt(n);if(s!==i)return Ll(s)===Ll(i)?j(s,i):Ll(s)?1:-1}return j(r.length,e.length)}const KS=55296,HS=57343;function Ll(r){const e=r.charCodeAt(0);return e>=KS&&e<=HS}function ms(r,e,t){return r.length===e.length&&r.every(((n,s)=>t(n,e[s])))}function Gg(r){return r+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu="__name__";class bt{constructor(e,t,n){t===void 0?t=0:t>e.length&&U(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&U(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return bt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof bt?e.forEach((n=>{t.push(n)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const i=bt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return j(e.length,t.length)}static compareSegments(e,t){const n=bt.isNumericId(e),s=bt.isNumericId(t);return n&&!s?-1:!n&&s?1:n&&s?bt.extractNumericId(e).compare(bt.extractNumericId(t)):cu(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Rn.fromString(e.substring(4,e.length-2))}}class J extends bt{construct(e,t,n){return new J(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new D(R.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((s=>s.length>0)))}return new J(t)}static emptyPath(){return new J([])}}const QS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ee extends bt{construct(e,t,n){return new Ee(e,t,n)}static isValidIdentifier(e){return QS.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ee.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===lu}static keyField(){return new Ee([lu])}static fromServerFormat(e){const t=[];let n="",s=0;const i=()=>{if(n.length===0)throw new D(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new D(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new D(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(n+=a,s++):(i(),s++)}if(i(),o)throw new D(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ee(t)}static emptyPath(){return new Ee([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function fh(r,e,t){if(!t)throw new D(R.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function YS(r,e,t,n){if(e===!0&&n===!0)throw new D(R.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Dp(r){if(!O.isDocumentKey(r))throw new D(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function xp(r){if(O.isDocumentKey(r))throw new D(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function zg(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Ec(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(n){return n.constructor?n.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":U(12329,{type:typeof r})}function ee(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new D(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ec(r);throw new D(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}function jg(r,e){if(e<=0)throw new D(R.INVALID_ARGUMENT,`Function ${r}() requires a positive number, but it was: ${e}.`)}/**
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
 */function De(r,e){const t={typeString:r};return e&&(t.value=e),t}function xr(r,e){if(!zg(r))throw new D(R.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const s=e[n].typeString,i="value"in e[n]?{value:e[n].value}:void 0;if(!(n in r)){t=`JSON missing required field: '${n}'`;break}const o=r[n];if(s&&typeof o!==s){t=`JSON field '${n}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${n}' field to equal '${i.value}'`;break}}if(t)throw new D(R.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp=-62135596800,Op=1e6;class ce{static now(){return ce.fromMillis(Date.now())}static fromDate(e){return ce.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*Op);return new ce(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new D(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new D(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Vp)throw new D(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Op}_compareTo(e){return this.seconds===e.seconds?j(this.nanoseconds,e.nanoseconds):j(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ce._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(xr(e,ce._jsonSchema))return new ce(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Vp;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ce._jsonSchemaVersion="firestore/timestamp/1.0",ce._jsonSchema={type:De("string",ce._jsonSchemaVersion),seconds:De("number"),nanoseconds:De("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const _s=-1;class gs{constructor(e,t,n,s){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=s}}function uu(r){return r.fields.find((e=>e.kind===2))}function rr(r){return r.fields.filter((e=>e.kind!==2))}function JS(r,e){let t=j(r.collectionGroup,e.collectionGroup);if(t!==0)return t;for(let n=0;n<Math.min(r.fields.length,e.fields.length);++n)if(t=XS(r.fields[n],e.fields[n]),t!==0)return t;return j(r.fields.length,e.fields.length)}gs.UNKNOWN_ID=-1;class fr{constructor(e,t){this.fieldPath=e,this.kind=t}}function XS(r,e){const t=Ee.comparator(r.fieldPath,e.fieldPath);return t!==0?t:j(r.kind,e.kind)}class ys{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new ys(0,dt.min())}}function Wg(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=z.fromTimestamp(n===1e9?new ce(t+1,0):new ce(t,n));return new dt(s,O.empty(),e)}function $g(r){return new dt(r.readTime,r.key,_s)}class dt{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new dt(z.min(),O.empty(),_s)}static max(){return new dt(z.max(),O.empty(),_s)}}function ph(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=O.comparator(r.documentKey,e.documentKey),t!==0?t:j(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Hg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gn(r){if(r.code!==R.FAILED_PRECONDITION||r.message!==Kg)throw r;x("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const ct="SimpleDb";class Tc{static open(e,t,n,s){try{return new Tc(t,e.transaction(s,n))}catch(i){throw new Oi(t,i)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new ze,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new Oi(e,t.error)):this.S.resolve()},this.transaction.onerror=n=>{const s=mh(n.target.error);this.S.reject(new Oi(e,s))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(x(ct,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new eb(t)}}class Vt{static delete(e){return x(ct,"Removing database:",e),or(B_().indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!Y_())return!1;if(Vt.F())return!0;const e=Ve(),t=Vt.M(e),n=0<t&&t<10,s=Qg(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static F(){return typeof process<"u"&&process.__PRIVATE_env?.__PRIVATE_USE_MOCK_PERSISTENCE==="YES"}static O(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(e,t,n){this.name=e,this.version=t,this.N=n,this.B=null,Vt.M(Ve())===12.2&&Pe("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async L(e){return this.db||(x(ct,"Opening database:",this.name),this.db=await new Promise(((t,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{n(new Oi(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?n(new D(R.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?n(new D(R.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):n(new Oi(e,o))},s.onupgradeneeded=i=>{x(ct,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.N.k(o,s.transaction,i.oldVersion,this.version).next((()=>{x(ct,"Database upgrade to version "+this.version+" complete")}))}}))),this.q&&(this.db.onversionchange=t=>this.q(t)),this.db}$(e){this.q=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.L(e);const a=Tc.open(this.db,e,i?"readonly":"readwrite",n),l=s(a).next((u=>(a.C(),u))).catch((u=>(a.abort(u),A.reject(u)))).toPromise();return l.catch((()=>{})),await a.D,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&o<3;if(x(ct,"Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Qg(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class ZS{constructor(e){this.U=e,this.K=!1,this.W=null}get isDone(){return this.K}get G(){return this.W}set cursor(e){this.U=e}done(){this.K=!0}j(e){this.W=e}delete(){return or(this.U.delete())}}class Oi extends D{constructor(e,t){super(R.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function zn(r){return r.name==="IndexedDbTransactionError"}class eb{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(x(ct,"PUT",this.store.name,e,t),n=this.store.put(t,e)):(x(ct,"PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),or(n)}add(e){return x(ct,"ADD",this.store.name,e,e),or(this.store.add(e))}get(e){return or(this.store.get(e)).next((t=>(t===void 0&&(t=null),x(ct,"GET",this.store.name,e,t),t)))}delete(e){return x(ct,"DELETE",this.store.name,e),or(this.store.delete(e))}count(){return x(ct,"COUNT",this.store.name),or(this.store.count())}J(e,t){const n=this.options(e,t),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(n.range);return new A(((o,a)=>{i.onerror=l=>{a(l.target.error)},i.onsuccess=l=>{o(l.target.result)}}))}{const i=this.cursor(n),o=[];return this.H(i,((a,l)=>{o.push(l)})).next((()=>o))}}Y(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new A(((s,i)=>{n.onerror=o=>{i(o.target.error)},n.onsuccess=o=>{s(o.target.result)}}))}Z(e,t){x(ct,"DELETE ALL",this.store.name);const n=this.options(e,t);n.X=!1;const s=this.cursor(n);return this.H(s,((i,o,a)=>a.delete()))}ee(e,t){let n;t?n=e:(n={},t=e);const s=this.cursor(n);return this.H(s,t)}te(e){const t=this.cursor({});return new A(((n,s)=>{t.onerror=i=>{const o=mh(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next((a=>{a?o.continue():n()})):n()}}))}H(e,t){const n=[];return new A(((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const l=new ZS(a),u=t(a.primaryKey,a.value,l);if(u instanceof A){const d=u.catch((f=>(l.done(),A.reject(f))));n.push(d)}l.isDone?s():l.G===null?a.continue():a.continue(l.G)}})).next((()=>A.waitFor(n)))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.X?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function or(r){return new A(((e,t)=>{r.onsuccess=n=>{const s=n.target.result;e(s)},r.onerror=n=>{const s=mh(n.target.error);t(s)}}))}let Mp=!1;function mh(r){const e=Vt.M(Ve());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const n=new D("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Mp||(Mp=!0,setTimeout((()=>{throw n}),0)),n}}return r}const Mi="IndexBackfiller";class tb{constructor(e,t){this.asyncQueue=e,this.ne=t,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}re(e){x(Mi,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{const t=await this.ne.ie();x(Mi,`Documents written: ${t}`)}catch(t){zn(t)?x(Mi,"Ignoring IndexedDB error during index backfill: ",t):await Gn(t)}await this.re(6e4)}))}}class nb{constructor(e,t){this.localStore=e,this.persistence=t}async ie(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.se(t,e)))}se(e,t){const n=new Set;let s=t,i=!0;return A.doWhile((()=>i===!0&&s>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((o=>{if(o!==null&&!n.has(o))return x(Mi,`Processing collection: ${o}`),this.oe(e,o,s).next((a=>{s-=a,n.add(o)}));i=!1})))).next((()=>t-s))}oe(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((s=>this.localStore.localDocuments.getNextDocuments(e,t,s,n).next((i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next((()=>this._e(s,i))).next((a=>(x(Mi,`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a)))).next((()=>o.size))}))))}_e(e,t){let n=e;return t.changes.forEach(((s,i)=>{const o=$g(i);ph(o,n)>0&&(n=o)})),new dt(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class nt{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ae(n),this.ue=n=>t.writeSequenceNumber(n))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}nt.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=-1;function wo(r){return r==null}function Ji(r){return r===0&&1/r==-1/0}function Yg(r){return typeof r=="number"&&Number.isInteger(r)&&!Ji(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba="";function Ye(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Lp(e)),e=rb(r.get(t),e);return Lp(e)}function rb(r,e){let t=e;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":t+="";break;case Ba:t+="";break;default:t+=i}}return t}function Lp(r){return r+Ba+""}function Pt(r){const e=r.length;if(q(e>=2,64408,{path:r}),e===2)return q(r.charAt(0)===Ba&&r.charAt(1)==="",56145,{path:r}),J.emptyPath();const t=e-2,n=[];let s="";for(let i=0;i<e;){const o=r.indexOf(Ba,i);switch((o<0||o>t)&&U(50515,{path:r}),r.charAt(o+1)){case"":const a=r.substring(i,o);let l;s.length===0?l=a:(s+=a,l=s,s=""),n.push(l);break;case"":s+=r.substring(i,o),s+="\0";break;case"":s+=r.substring(i,o+1);break;default:U(61167,{path:r})}i=o+2}return new J(n)}/**
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
 */const sr="remoteDocuments",vo="owner",jr="owner",Xi="mutationQueues",sb="userId",_t="mutations",Fp="batchId",ur="userMutationsIndex",Up=["userId","batchId"];/**
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
 */function ga(r,e){return[r,Ye(e)]}function Jg(r,e,t){return[r,Ye(e),t]}const ib={},Is="documentMutations",qa="remoteDocumentsV14",ob=["prefixPath","collectionGroup","readTime","documentId"],ya="documentKeyIndex",ab=["prefixPath","collectionGroup","documentId"],Xg="collectionGroupIndex",cb=["collectionGroup","readTime","prefixPath","documentId"],Zi="remoteDocumentGlobal",hu="remoteDocumentGlobalKey",Es="targets",Zg="queryTargetsIndex",lb=["canonicalId","targetId"],Ts="targetDocuments",ub=["targetId","path"],_h="documentTargetsIndex",hb=["path","targetId"],Ga="targetGlobalKey",pr="targetGlobal",eo="collectionParents",db=["collectionId","parent"],ws="clientMetadata",fb="clientId",wc="bundles",pb="bundleId",vc="namedQueries",mb="name",gh="indexConfiguration",_b="indexId",du="collectionGroupIndex",gb="collectionGroup",Li="indexState",yb=["indexId","uid"],ey="sequenceNumberIndex",Ib=["uid","sequenceNumber"],Fi="indexEntries",Eb=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],ty="documentKeyIndex",Tb=["indexId","uid","orderedDocumentKey"],Ac="documentOverlays",wb=["userId","collectionPath","documentId"],fu="collectionPathOverlayIndex",vb=["userId","collectionPath","largestBatchId"],ny="collectionGroupOverlayIndex",Ab=["userId","collectionGroup","largestBatchId"],yh="globals",Sb="name",ry=[Xi,_t,Is,sr,Es,vo,pr,Ts,ws,Zi,eo,wc,vc],bb=[...ry,Ac],sy=[Xi,_t,Is,qa,Es,vo,pr,Ts,ws,Zi,eo,wc,vc,Ac],iy=sy,Ih=[...iy,gh,Li,Fi],Rb=Ih,oy=[...Ih,yh],Cb=oy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu extends Hg{constructor(e,t){super(),this.le=e,this.currentSequenceNumber=t}}function Oe(r,e){const t=M(r);return Vt.O(t.le,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bp(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function jn(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function ay(r,e){const t=[];for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t.push(e(r[n],n,r));return t}function cy(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ae=class mu{constructor(e,t){this.comparator=e,this.root=t||Pn.EMPTY}insert(e,t){return new mu(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Pn.BLACK,null,null))}remove(e){return new mu(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ra(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ra(this.root,e,this.comparator,!1)}getReverseIterator(){return new ra(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ra(this.root,e,this.comparator,!0)}},ra=class{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Pn=class Bt{constructor(e,t,n,s,i){this.key=e,this.value=t,this.color=n??Bt.RED,this.left=s??Bt.EMPTY,this.right=i??Bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,i){return new Bt(e??this.key,t??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const i=n(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,n),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Bt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Bt.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw U(43730,{key:this.key,value:this.value});if(this.right.isRed())throw U(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw U(27949);return e+(this.isRed()?0:1)}};Pn.EMPTY=null,Pn.RED=!0,Pn.BLACK=!1;Pn.EMPTY=new class{constructor(){this.size=0}get key(){throw U(57766)}get value(){throw U(16141)}get color(){throw U(16727)}get left(){throw U(29726)}get right(){throw U(36894)}copy(e,t,n,s,i){return this}insert(e,t,n){return new Pn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.comparator=e,this.data=new Ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new qp(this.data.getIterator())}getIteratorFrom(e){return new qp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((n=>{t=t.add(n)})),t}isEqual(e){if(!(e instanceof ue)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new ue(this.comparator);return t.data=e,t}}class qp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Wr(r){return r.hasNext()?r.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.fields=e,e.sort(Ee.comparator)}static empty(){return new rt([])}unionWith(e){let t=new ue(Ee.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new rt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ms(this.fields,e.fields,((t,n)=>t.isEqual(n)))}}/**
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
 */class ly extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nD(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new ly("Invalid base64 string: "+i):i}})(e);return new Re(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new Re(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return j(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Re.EMPTY_BYTE_STRING=new Re("");const Pb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qt(r){if(q(!!r,39018),typeof r=="string"){let e=0;const t=Pb.exec(r);if(q(!!t,46558,{timestamp:r}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:Ie(r.seconds),nanos:Ie(r.nanos)}}function Ie(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Yt(r){return typeof r=="string"?Re.fromBase64String(r):Re.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy="server_timestamp",hy="__type__",dy="__previous_value__",fy="__local_write_time__";function Sc(r){return(r?.mapValue?.fields||{})[hy]?.stringValue===uy}function bc(r){const e=r.mapValue.fields[dy];return Sc(e)?bc(e):e}function to(r){const e=Qt(r.mapValue.fields[fy].timestampValue);return new ce(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e,t,n,s,i,o,a,l,u,d){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=d}}const no="(default)";class yr{constructor(e,t){this.projectId=e,this.database=t||no}static empty(){return new yr("","")}get isDefaultDatabase(){return this.database===no}isEqual(e){return e instanceof yr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh="__type__",py="__max__",Tn={mapValue:{fields:{__type__:{stringValue:py}}}},Th="__vector__",vs="value",Ia={nullValue:"NULL_VALUE"};function xn(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Sc(r)?4:my(r)?9007199254740991:Rc(r)?10:11:U(28295,{value:r})}function Ft(r,e){if(r===e)return!0;const t=xn(r);if(t!==xn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return to(r).isEqual(to(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Qt(s.timestampValue),a=Qt(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(s,i){return Yt(s.bytesValue).isEqual(Yt(i.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(s,i){return Ie(s.geoPointValue.latitude)===Ie(i.geoPointValue.latitude)&&Ie(s.geoPointValue.longitude)===Ie(i.geoPointValue.longitude)})(r,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Ie(s.integerValue)===Ie(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ie(s.doubleValue),a=Ie(i.doubleValue);return o===a?Ji(o)===Ji(a):isNaN(o)&&isNaN(a)}return!1})(r,e);case 9:return ms(r.arrayValue.values||[],e.arrayValue.values||[],Ft);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Bp(o)!==Bp(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Ft(o[l],a[l])))return!1;return!0})(r,e);default:return U(52216,{left:r})}}function ro(r,e){return(r.values||[]).find((t=>Ft(t,e)))!==void 0}function Vn(r,e){if(r===e)return 0;const t=xn(r),n=xn(e);if(t!==n)return j(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return j(r.booleanValue,e.booleanValue);case 2:return(function(i,o){const a=Ie(i.integerValue||i.doubleValue),l=Ie(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1})(r,e);case 3:return Gp(r.timestampValue,e.timestampValue);case 4:return Gp(to(r),to(e));case 5:return cu(r.stringValue,e.stringValue);case 6:return(function(i,o){const a=Yt(i),l=Yt(o);return a.compareTo(l)})(r.bytesValue,e.bytesValue);case 7:return(function(i,o){const a=i.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const d=j(a[u],l[u]);if(d!==0)return d}return j(a.length,l.length)})(r.referenceValue,e.referenceValue);case 8:return(function(i,o){const a=j(Ie(i.latitude),Ie(o.latitude));return a!==0?a:j(Ie(i.longitude),Ie(o.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return zp(r.arrayValue,e.arrayValue);case 10:return(function(i,o){const a=i.fields||{},l=o.fields||{},u=a[vs]?.arrayValue,d=l[vs]?.arrayValue,f=j(u?.values?.length||0,d?.values?.length||0);return f!==0?f:zp(u,d)})(r.mapValue,e.mapValue);case 11:return(function(i,o){if(i===Tn.mapValue&&o===Tn.mapValue)return 0;if(i===Tn.mapValue)return 1;if(o===Tn.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),u=o.fields||{},d=Object.keys(u);l.sort(),d.sort();for(let f=0;f<l.length&&f<d.length;++f){const m=cu(l[f],d[f]);if(m!==0)return m;const y=Vn(a[l[f]],u[d[f]]);if(y!==0)return y}return j(l.length,d.length)})(r.mapValue,e.mapValue);default:throw U(23264,{he:t})}}function Gp(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return j(r,e);const t=Qt(r),n=Qt(e),s=j(t.seconds,n.seconds);return s!==0?s:j(t.nanos,n.nanos)}function zp(r,e){const t=r.values||[],n=e.values||[];for(let s=0;s<t.length&&s<n.length;++s){const i=Vn(t[s],n[s]);if(i)return i}return j(t.length,n.length)}function As(r){return _u(r)}function _u(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const n=Qt(t);return`time(${n.seconds},${n.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return Yt(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return O.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let n="[",s=!0;for(const i of t.values||[])s?s=!1:n+=",",n+=_u(i);return n+"]"})(r.arrayValue):"mapValue"in r?(function(t){const n=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of n)i?i=!1:s+=",",s+=`${o}:${_u(t.fields[o])}`;return s+"}"})(r.mapValue):U(61005,{value:r})}function Ea(r){switch(xn(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=bc(r);return e?16+Ea(e):16;case 5:return 2*r.stringValue.length;case 6:return Yt(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((s,i)=>s+Ea(i)),0)})(r.arrayValue);case 10:case 11:return(function(n){let s=0;return jn(n.fields,((i,o)=>{s+=i.length+Ea(o)})),s})(r.mapValue);default:throw U(13486,{value:r})}}function Ir(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function gu(r){return!!r&&"integerValue"in r}function so(r){return!!r&&"arrayValue"in r}function jp(r){return!!r&&"nullValue"in r}function Wp(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Ta(r){return!!r&&"mapValue"in r}function Rc(r){return(r?.mapValue?.fields||{})[Eh]?.stringValue===Th}function Ui(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return jn(r.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Ui(n))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ui(r.arrayValue.values[t]);return e}return{...r}}function my(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===py}const _y={mapValue:{fields:{[Eh]:{stringValue:Th},[vs]:{arrayValue:{}}}}};function kb(r){return"nullValue"in r?Ia:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?Ir(yr.empty(),O.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?Rc(r)?_y:{mapValue:{}}:U(35942,{value:r})}function Db(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?Ir(yr.empty(),O.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?_y:"mapValue"in r?Rc(r)?{mapValue:{}}:Tn:U(61959,{value:r})}function $p(r,e){const t=Vn(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function Kp(r,e){const t=Vn(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.value=e}static empty(){return new $e({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Ta(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ui(t)}setAll(e){let t=Ee.emptyPath(),n={},s=[];e.forEach(((o,a)=>{if(!t.isImmediateParentOf(a)){const l=this.getFieldsMap(t);this.applyChanges(l,n,s),n={},s=[],t=a.popLast()}o?n[a.lastSegment()]=Ui(o):s.push(a.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,s)}delete(e){const t=this.field(e.popLast());Ta(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ft(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];Ta(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){jn(t,((s,i)=>e[s]=i));for(const s of n)delete e[s]}clone(){return new $e(Ui(this.value))}}function gy(r){const e=[];return jn(r.fields,((t,n)=>{const s=new Ee([t]);if(Ta(n)){const i=gy(n.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new rt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class On{constructor(e,t){this.position=e,this.inclusive=t}}function Hp(r,e,t){let n=0;for(let s=0;s<r.position.length;s++){const i=e[s],o=r.position[s];if(i.field.isKeyField()?n=O.comparator(O.fromName(o.referenceValue),t.key):n=Vn(o,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function Qp(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!Ft(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class io{constructor(e,t="asc"){this.field=e,this.dir=t}}function xb(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class yy{}class te extends yy{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new Vb(e,t,n):t==="array-contains"?new Lb(e,n):t==="in"?new Ay(e,n):t==="not-in"?new Fb(e,n):t==="array-contains-any"?new Ub(e,n):new te(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new Ob(e,n):new Mb(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Vn(t,this.value)):t!==null&&xn(this.value)===xn(t)&&this.matchesComparison(Vn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class le extends yy{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new le(e,t)}matches(e){return Ss(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Ss(r){return r.op==="and"}function yu(r){return r.op==="or"}function wh(r){return Iy(r)&&Ss(r)}function Iy(r){for(const e of r.filters)if(e instanceof le)return!1;return!0}function Iu(r){if(r instanceof te)return r.field.canonicalString()+r.op.toString()+As(r.value);if(wh(r))return r.filters.map((e=>Iu(e))).join(",");{const e=r.filters.map((t=>Iu(t))).join(",");return`${r.op}(${e})`}}function Ey(r,e){return r instanceof te?(function(n,s){return s instanceof te&&n.op===s.op&&n.field.isEqual(s.field)&&Ft(n.value,s.value)})(r,e):r instanceof le?(function(n,s){return s instanceof le&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce(((i,o,a)=>i&&Ey(o,s.filters[a])),!0):!1})(r,e):void U(19439)}function Ty(r,e){const t=r.filters.concat(e);return le.create(t,r.op)}function wy(r){return r instanceof te?(function(t){return`${t.field.canonicalString()} ${t.op} ${As(t.value)}`})(r):r instanceof le?(function(t){return t.op.toString()+" {"+t.getFilters().map(wy).join(" ,")+"}"})(r):"Filter"}class Vb extends te{constructor(e,t,n){super(e,t,n),this.key=O.fromName(n.referenceValue)}matches(e){const t=O.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ob extends te{constructor(e,t){super(e,"in",t),this.keys=vy("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Mb extends te{constructor(e,t){super(e,"not-in",t),this.keys=vy("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function vy(r,e){return(e.arrayValue?.values||[]).map((t=>O.fromName(t.referenceValue)))}class Lb extends te{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return so(t)&&ro(t.arrayValue,this.value)}}class Ay extends te{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ro(this.value.arrayValue,t)}}class Fb extends te{constructor(e,t){super(e,"not-in",t)}matches(e){if(ro(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ro(this.value.arrayValue,t)}}class Ub extends te{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!so(t)||!t.arrayValue.values)&&t.arrayValue.values.some((n=>ro(this.value.arrayValue,n)))}}/**
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
 */class Bb{constructor(e,t=null,n=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.Te=null}}function Eu(r,e=null,t=[],n=[],s=null,i=null,o=null){return new Bb(r,e,t,n,s,i,o)}function Er(r){const e=M(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((n=>Iu(n))).join(","),t+="|ob:",t+=e.orderBy.map((n=>(function(i){return i.field.canonicalString()+i.dir})(n))).join(","),wo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((n=>As(n))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((n=>As(n))).join(",")),e.Te=t}return e.Te}function Ao(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!xb(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Ey(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Qp(r.startAt,e.startAt)&&Qp(r.endAt,e.endAt)}function za(r){return O.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function ja(r,e){return r.filters.filter((t=>t instanceof te&&t.field.isEqual(e)))}function Yp(r,e,t){let n=Ia,s=!0;for(const i of ja(r,e)){let o=Ia,a=!0;switch(i.op){case"<":case"<=":o=kb(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,a=!1;break;case"!=":case"not-in":o=Ia}$p({value:n,inclusive:s},{value:o,inclusive:a})<0&&(n=o,s=a)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];$p({value:n,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}function Jp(r,e,t){let n=Tn,s=!0;for(const i of ja(r,e)){let o=Tn,a=!0;switch(i.op){case">=":case">":o=Db(i.value),a=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,a=!1;break;case"!=":case"not-in":o=Tn}Kp({value:n,inclusive:s},{value:o,inclusive:a})>0&&(n=o,s=a)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];Kp({value:n,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,t=null,n=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Sy(r,e,t,n,s,i,o,a){return new en(r,e,t,n,s,i,o,a)}function Ws(r){return new en(r)}function Xp(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function vh(r){return r.collectionGroup!==null}function as(r){const e=M(r);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ue(Ee.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((u=>{u.isInequality()&&(a=a.add(u.field))}))})),a})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new io(i,n))})),t.has(Ee.keyField().canonicalString())||e.Ie.push(new io(Ee.keyField(),n))}return e.Ie}function Je(r){const e=M(r);return e.Ee||(e.Ee=Ry(e,as(r))),e.Ee}function by(r){const e=M(r);return e.de||(e.de=Ry(e,r.explicitOrderBy)),e.de}function Ry(r,e){if(r.limitType==="F")return Eu(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new io(s.field,i)}));const t=r.endAt?new On(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new On(r.startAt.position,r.startAt.inclusive):null;return Eu(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function Tu(r,e){const t=r.filters.concat([e]);return new en(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function Wa(r,e,t){return new en(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function So(r,e){return Ao(Je(r),Je(e))&&r.limitType===e.limitType}function Cy(r){return`${Er(Je(r))}|lt:${r.limitType}`}function Xr(r){return`Query(target=${(function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map((s=>wy(s))).join(", ")}]`),wo(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((s=>As(s))).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((s=>As(s))).join(",")),`Target(${n})`})(Je(r))}; limitType=${r.limitType})`}function bo(r,e){return e.isFoundDocument()&&(function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):O.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)})(r,e)&&(function(n,s){for(const i of as(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(r,e)&&(function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0})(r,e)&&(function(n,s){return!(n.startAt&&!(function(o,a,l){const u=Hp(o,a,l);return o.inclusive?u<=0:u<0})(n.startAt,as(n),s)||n.endAt&&!(function(o,a,l){const u=Hp(o,a,l);return o.inclusive?u>=0:u>0})(n.endAt,as(n),s))})(r,e)}function Py(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Ny(r){return(e,t)=>{let n=!1;for(const s of as(r)){const i=qb(s,e,t);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function qb(r,e,t){const n=r.field.isKeyField()?O.comparator(e.key,t.key):(function(i,o,a){const l=o.data.field(i),u=a.data.field(i);return l!==null&&u!==null?Vn(l,u):U(42886)})(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return U(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){jn(this.inner,((t,n)=>{for(const[s,i]of n)e(s,i)}))}isEmpty(){return cy(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb=new Ae(O.comparator);function st(){return Gb}const ky=new Ae(O.comparator);function Ni(...r){let e=ky;for(const t of r)e=e.insert(t.key,t);return e}function Dy(r){let e=ky;return r.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Nt(){return Bi()}function xy(){return Bi()}function Bi(){return new tn((r=>r.toString()),((r,e)=>r.isEqual(e)))}const zb=new Ae(O.comparator),jb=new ue(O.comparator);function K(...r){let e=jb;for(const t of r)e=e.add(t);return e}const Wb=new ue(j);function Ah(){return Wb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sh(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ji(e)?"-0":e}}function Vy(r){return{integerValue:""+r}}function Oy(r,e){return Yg(e)?Vy(e):Sh(r,e)}/**
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
 */class Cc{constructor(){this._=void 0}}function $b(r,e,t){return r instanceof bs?(function(s,i){const o={fields:{[hy]:{stringValue:uy},[fy]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Sc(i)&&(i=bc(i)),i&&(o.fields[dy]=i),{mapValue:o}})(t,e):r instanceof Tr?Ly(r,e):r instanceof wr?Fy(r,e):(function(s,i){const o=My(s,i),a=Zp(o)+Zp(s.Ae);return gu(o)&&gu(s.Ae)?Vy(a):Sh(s.serializer,a)})(r,e)}function Kb(r,e,t){return r instanceof Tr?Ly(r,e):r instanceof wr?Fy(r,e):t}function My(r,e){return r instanceof Rs?(function(n){return gu(n)||(function(i){return!!i&&"doubleValue"in i})(n)})(e)?e:{integerValue:0}:null}class bs extends Cc{}class Tr extends Cc{constructor(e){super(),this.elements=e}}function Ly(r,e){const t=Uy(e);for(const n of r.elements)t.some((s=>Ft(s,n)))||t.push(n);return{arrayValue:{values:t}}}class wr extends Cc{constructor(e){super(),this.elements=e}}function Fy(r,e){let t=Uy(e);for(const n of r.elements)t=t.filter((s=>!Ft(s,n)));return{arrayValue:{values:t}}}class Rs extends Cc{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Zp(r){return Ie(r.integerValue||r.doubleValue)}function Uy(r){return so(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,t){this.field=e,this.transform=t}}function Hb(r,e){return r.field.isEqual(e.field)&&(function(n,s){return n instanceof Tr&&s instanceof Tr||n instanceof wr&&s instanceof wr?ms(n.elements,s.elements,Ft):n instanceof Rs&&s instanceof Rs?Ft(n.Ae,s.Ae):n instanceof bs&&s instanceof bs})(r.transform,e.transform)}class Qb{constructor(e,t){this.version=e,this.transformResults=t}}class Te{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Te}static exists(e){return new Te(void 0,e)}static updateTime(e){return new Te(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function wa(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Pc{}function By(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Ks(r.key,Te.none()):new $s(r.key,r.data,Te.none());{const t=r.data,n=$e.empty();let s=new ue(Ee.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?n.delete(i):n.set(i,o),s=s.add(i)}return new nn(r.key,n,new rt(s.toArray()),Te.none())}}function Yb(r,e,t){r instanceof $s?(function(s,i,o){const a=s.value.clone(),l=tm(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()})(r,e,t):r instanceof nn?(function(s,i,o){if(!wa(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=tm(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(qy(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(r,e,t):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function qi(r,e,t,n){return r instanceof $s?(function(i,o,a,l){if(!wa(i.precondition,o))return a;const u=i.value.clone(),d=nm(i.fieldTransforms,l,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(r,e,t,n):r instanceof nn?(function(i,o,a,l){if(!wa(i.precondition,o))return a;const u=nm(i.fieldTransforms,l,o),d=o.data;return d.setAll(qy(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((f=>f.field)))})(r,e,t,n):(function(i,o,a){return wa(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a})(r,e,t)}function Jb(r,e){let t=null;for(const n of r.fieldTransforms){const s=e.data.field(n.field),i=My(n.transform,s||null);i!=null&&(t===null&&(t=$e.empty()),t.set(n.field,i))}return t||null}function em(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&ms(n,s,((i,o)=>Hb(i,o)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class $s extends Pc{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class nn extends Pc{constructor(e,t,n,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function qy(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}})),e}function tm(r,e,t){const n=new Map;q(r.length===t.length,32656,{Re:t.length,Ve:r.length});for(let s=0;s<t.length;s++){const i=r[s],o=i.transform,a=e.data.field(i.field);n.set(i.field,Kb(o,a,t[s]))}return n}function nm(r,e,t){const n=new Map;for(const s of r){const i=s.transform,o=t.data.field(s.field);n.set(s.field,$b(i,o,e))}return n}class Ks extends Pc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class bh extends Pc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Yb(i,e,n[s])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=qi(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=qi(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=xy();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(s.key)?null:a;const l=By(o,a);l!==null&&n.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(z.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),K())}isEqual(e){return this.batchId===e.batchId&&ms(this.mutations,e.mutations,((t,n)=>em(t,n)))&&ms(this.baseMutations,e.baseMutations,((t,n)=>em(t,n)))}}class Ch{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){q(e.mutations.length===n.length,58842,{me:e.mutations.length,fe:n.length});let s=(function(){return zb})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,n[o].version);return new Ch(e,t,n,s)}}/**
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
 */class Ph{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Gy{constructor(e,t,n){this.alias=e,this.aggregateType=t,this.fieldPath=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke,re;function zy(r){switch(r){case R.OK:return U(64938);case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0;default:return U(15467,{code:r})}}function jy(r){if(r===void 0)return Pe("GRPC error has no .code"),R.UNKNOWN;switch(r){case ke.OK:return R.OK;case ke.CANCELLED:return R.CANCELLED;case ke.UNKNOWN:return R.UNKNOWN;case ke.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case ke.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case ke.INTERNAL:return R.INTERNAL;case ke.UNAVAILABLE:return R.UNAVAILABLE;case ke.UNAUTHENTICATED:return R.UNAUTHENTICATED;case ke.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case ke.NOT_FOUND:return R.NOT_FOUND;case ke.ALREADY_EXISTS:return R.ALREADY_EXISTS;case ke.PERMISSION_DENIED:return R.PERMISSION_DENIED;case ke.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case ke.ABORTED:return R.ABORTED;case ke.OUT_OF_RANGE:return R.OUT_OF_RANGE;case ke.UNIMPLEMENTED:return R.UNIMPLEMENTED;case ke.DATA_LOSS:return R.DATA_LOSS;default:return U(39323,{code:r})}}(re=ke||(ke={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Wy(){return new TextEncoder}/**
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
 */const Zb=new Rn([4294967295,4294967295],0);function rm(r){const e=Wy().encode(r),t=new Vg;return t.update(e),new Uint8Array(t.digest())}function sm(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Rn([t,n],0),new Rn([s,i],0)]}class Nh{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new ki(`Invalid padding: ${t}`);if(n<0)throw new ki(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new ki(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new ki(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Rn.fromNumber(this.ge)}ye(e,t,n){let s=e.add(t.multiply(Rn.fromNumber(n)));return s.compare(Zb)===1&&(s=new Rn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=rm(e),[n,s]=sm(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(n,s,i);if(!this.we(o))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Nh(i,s,t);return n.forEach((a=>o.insert(a))),o}insert(e){if(this.ge===0)return;const t=rm(e),[n,s]=sm(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(n,s,i);this.Se(o)}}Se(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class ki extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,t,n,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,Po.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Co(z.min(),s,new Ae(j),st(),K())}}class Po{constructor(e,t,n,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Po(n,t,K(),K(),K())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e,t,n,s){this.be=e,this.removedTargetIds=t,this.key=n,this.De=s}}class $y{constructor(e,t){this.targetId=e,this.Ce=t}}class Ky{constructor(e,t,n=Re.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class im{constructor(){this.ve=0,this.Fe=om(),this.Me=Re.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=K(),t=K(),n=K();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:U(38017,{changeType:i})}})),new Po(this.Me,this.xe,e,t,n)}qe(){this.Oe=!1,this.Fe=om()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,q(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class eR{constructor(e){this.Ge=e,this.ze=new Map,this.je=st(),this.Je=sa(),this.He=sa(),this.Ye=new Ae(j)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const n=this.nt(t);switch(e.state){case 0:this.rt(t)&&n.Le(e.resumeToken);break;case 1:n.Ke(),n.Ne||n.qe(),n.Le(e.resumeToken);break;case 2:n.Ke(),n.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(n.We(),n.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),n.Le(e.resumeToken));break;default:U(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((n,s)=>{this.rt(s)&&t(s)}))}st(e){const t=e.targetId,n=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(za(i))if(n===0){const o=new O(i.path);this.et(t,o,ye.newNoDocument(o,z.min()))}else q(n===1,20013,{expectedCount:n});else{const o=this._t(t);if(o!==n){const a=this.ut(e),l=a?this.ct(a,e,o):1;if(l!==0){this.it(t);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,u)}wu?.lt((function(d,f,m,y,S){const N={localCacheCount:d,existenceFilterCount:f.count,databaseId:m.database,projectId:m.projectId},k=f.unchangedNames;return k&&(N.bloomFilter={applied:S===0,hashCount:k?.hashCount??0,bitmapLength:k?.bits?.bitmap?.length??0,padding:k?.bits?.padding??0,mightContain:F=>y?.mightContain(F)??!1}),N})(o,e.Ce,this.Ge.ht(),a,l))}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=t;let o,a;try{o=Yt(n).toUint8Array()}catch(l){if(l instanceof ly)return mt("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Nh(o,s,i)}catch(l){return mt(l instanceof ki?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.ge===0?null:a}ct(e,t,n){return t.Ce.count===n-this.Pt(e,t.targetId)?0:2}Pt(e,t){const n=this.Ge.getRemoteKeysForTarget(t);let s=0;return n.forEach((i=>{const o=this.Ge.ht(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.et(t,i,null),s++)})),s}Tt(e){const t=new Map;this.ze.forEach(((i,o)=>{const a=this.ot(o);if(a){if(i.current&&za(a.target)){const l=new O(a.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,ye.newNoDocument(l,e))}i.Be&&(t.set(o,i.ke()),i.qe())}}));let n=K();this.He.forEach(((i,o)=>{let a=!0;o.forEachWhile((l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)})),a&&(n=n.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const s=new Co(e,t,this.Ye,this.je,n);return this.je=st(),this.Je=sa(),this.He=sa(),this.Ye=new Ae(j),s}Xe(e,t){if(!this.rt(e))return;const n=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,n),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,n){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.Qe(t,1):s.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),n&&(this.je=this.je.insert(t,n))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new im,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new ue(j),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new ue(j),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||x("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new im),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function sa(){return new Ae(O.comparator)}function om(){return new Ae(O.comparator)}const tR={asc:"ASCENDING",desc:"DESCENDING"},nR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},rR={and:"AND",or:"OR"};class sR{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function vu(r,e){return r.useProto3Json||wo(e)?e:{value:e}}function Cs(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Hy(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function iR(r,e){return Cs(r,e.toTimestamp())}function Ne(r){return q(!!r,49232),z.fromTimestamp((function(t){const n=Qt(t);return new ce(n.seconds,n.nanos)})(r))}function kh(r,e){return Au(r,e).canonicalString()}function Au(r,e){const t=(function(s){return new J(["projects",s.projectId,"databases",s.database])})(r).child("documents");return e===void 0?t:t.child(e)}function Qy(r){const e=J.fromString(r);return q(sI(e),10190,{key:e.toString()}),e}function oo(r,e){return kh(r.databaseId,e.path)}function Ot(r,e){const t=Qy(e);if(t.get(1)!==r.databaseId.projectId)throw new D(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new D(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new O(Xy(t))}function Yy(r,e){return kh(r.databaseId,e)}function Jy(r){const e=Qy(r);return e.length===4?J.emptyPath():Xy(e)}function Su(r){return new J(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Xy(r){return q(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function am(r,e,t){return{name:oo(r,e),fields:t.value.mapValue.fields}}function Nc(r,e,t){const n=Ot(r,e.name),s=Ne(e.updateTime),i=e.createTime?Ne(e.createTime):z.min(),o=new $e({mapValue:{fields:e.fields}}),a=ye.newFoundDocument(n,s,i,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function oR(r,e){return"found"in e?(function(n,s){q(!!s.found,43571),s.found.name,s.found.updateTime;const i=Ot(n,s.found.name),o=Ne(s.found.updateTime),a=s.found.createTime?Ne(s.found.createTime):z.min(),l=new $e({mapValue:{fields:s.found.fields}});return ye.newFoundDocument(i,o,a,l)})(r,e):"missing"in e?(function(n,s){q(!!s.missing,3894),q(!!s.readTime,22933);const i=Ot(n,s.missing),o=Ne(s.readTime);return ye.newNoDocument(i,o)})(r,e):U(7234,{result:e})}function aR(r,e){let t;if("targetChange"in e){e.targetChange;const n=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:U(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,d){return u.useProto3Json?(q(d===void 0||typeof d=="string",58123),Re.fromBase64String(d||"")):(q(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Re.fromUint8Array(d||new Uint8Array))})(r,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&(function(u){const d=u.code===void 0?R.UNKNOWN:jy(u.code);return new D(d,u.message||"")})(o);t=new Ky(n,s,i,a||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=Ot(r,n.document.name),i=Ne(n.document.updateTime),o=n.document.createTime?Ne(n.document.createTime):z.min(),a=new $e({mapValue:{fields:n.document.fields}}),l=ye.newFoundDocument(s,i,o,a),u=n.targetIds||[],d=n.removedTargetIds||[];t=new va(u,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=Ot(r,n.document),i=n.readTime?Ne(n.readTime):z.min(),o=ye.newNoDocument(s,i),a=n.removedTargetIds||[];t=new va([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=Ot(r,n.document),i=n.removedTargetIds||[];t=new va([],i,s,null)}else{if(!("filter"in e))return U(11601,{Rt:e});{e.filter;const n=e.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,o=new Xb(s,i),a=n.targetId;t=new $y(a,o)}}return t}function ao(r,e){let t;if(e instanceof $s)t={update:am(r,e.key,e.value)};else if(e instanceof Ks)t={delete:oo(r,e.key)};else if(e instanceof nn)t={update:am(r,e.key,e.data),updateMask:fR(e.fieldMask)};else{if(!(e instanceof bh))return U(16599,{Vt:e.type});t={verify:oo(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((n=>(function(i,o){const a=o.transform;if(a instanceof bs)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Tr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof wr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Rs)return{fieldPath:o.field.canonicalString(),increment:a.Ae};throw U(20930,{transform:o.transform})})(0,n)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:iR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:U(27497)})(r,e.precondition)),t}function bu(r,e){const t=e.currentDocument?(function(i){return i.updateTime!==void 0?Te.updateTime(Ne(i.updateTime)):i.exists!==void 0?Te.exists(i.exists):Te.none()})(e.currentDocument):Te.none(),n=e.updateTransforms?e.updateTransforms.map((s=>(function(o,a){let l=null;if("setToServerValue"in a)q(a.setToServerValue==="REQUEST_TIME",16630,{proto:a}),l=new bs;else if("appendMissingElements"in a){const d=a.appendMissingElements.values||[];l=new Tr(d)}else if("removeAllFromArray"in a){const d=a.removeAllFromArray.values||[];l=new wr(d)}else"increment"in a?l=new Rs(o,a.increment):U(16584,{proto:a});const u=Ee.fromServerFormat(a.fieldPath);return new Ro(u,l)})(r,s))):[];if(e.update){e.update.name;const s=Ot(r,e.update.name),i=new $e({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=(function(l){const u=l.fieldPaths||[];return new rt(u.map((d=>Ee.fromServerFormat(d))))})(e.updateMask);return new nn(s,i,o,t,n)}return new $s(s,i,t,n)}if(e.delete){const s=Ot(r,e.delete);return new Ks(s,t)}if(e.verify){const s=Ot(r,e.verify);return new bh(s,t)}return U(1463,{proto:e})}function cR(r,e){return r&&r.length>0?(q(e!==void 0,14353),r.map((t=>(function(s,i){let o=s.updateTime?Ne(s.updateTime):Ne(i);return o.isEqual(z.min())&&(o=Ne(i)),new Qb(o,s.transformResults||[])})(t,e)))):[]}function Zy(r,e){return{documents:[Yy(r,e.path)]}}function kc(r,e){const t={structuredQuery:{}},n=e.path;let s;e.collectionGroup!==null?(s=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=Yy(r,s);const i=(function(u){if(u.length!==0)return rI(le.create(u,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((d=>(function(m){return{field:In(m.field),direction:uR(m.dir)}})(d)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=vu(r,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:t,parent:s}}function eI(r,e,t,n){const{ft:s,parent:i}=kc(r,e),o={},a=[];let l=0;return t.forEach((u=>{const d=n?u.alias:"aggregate_"+l++;o[d]=u.alias,u.aggregateType==="count"?a.push({alias:d,count:{}}):u.aggregateType==="avg"?a.push({alias:d,avg:{field:In(u.fieldPath)}}):u.aggregateType==="sum"&&a.push({alias:d,sum:{field:In(u.fieldPath)}})})),{request:{structuredAggregationQuery:{aggregations:a,structuredQuery:s.structuredQuery},parent:s.parent},gt:o,parent:i}}function tI(r){let e=Jy(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let s=null;if(n>0){q(n===1,65062);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=(function(f){const m=nI(f);return m instanceof le&&wh(m)?m.getFilters():[m]})(t.where));let o=[];t.orderBy&&(o=(function(f){return f.map((m=>(function(S){return new io(Zr(S.field),(function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(S.direction))})(m)))})(t.orderBy));let a=null;t.limit&&(a=(function(f){let m;return m=typeof f=="object"?f.value:f,wo(m)?null:m})(t.limit));let l=null;t.startAt&&(l=(function(f){const m=!!f.before,y=f.values||[];return new On(y,m)})(t.startAt));let u=null;return t.endAt&&(u=(function(f){const m=!f.before,y=f.values||[];return new On(y,m)})(t.endAt)),Sy(e,s,o,i,a,"F",l,u)}function lR(r,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function nI(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Zr(t.unaryFilter.field);return te.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Zr(t.unaryFilter.field);return te.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Zr(t.unaryFilter.field);return te.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Zr(t.unaryFilter.field);return te.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return U(61313);default:return U(60726)}})(r):r.fieldFilter!==void 0?(function(t){return te.create(Zr(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return U(58110);default:return U(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return le.create(t.compositeFilter.filters.map((n=>nI(n))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return U(1026)}})(t.compositeFilter.op))})(r):U(30097,{filter:r})}function uR(r){return tR[r]}function hR(r){return nR[r]}function dR(r){return rR[r]}function In(r){return{fieldPath:r.canonicalString()}}function Zr(r){return Ee.fromServerFormat(r.fieldPath)}function rI(r){return r instanceof te?(function(t){if(t.op==="=="){if(Wp(t.value))return{unaryFilter:{field:In(t.field),op:"IS_NAN"}};if(jp(t.value))return{unaryFilter:{field:In(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Wp(t.value))return{unaryFilter:{field:In(t.field),op:"IS_NOT_NAN"}};if(jp(t.value))return{unaryFilter:{field:In(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:In(t.field),op:hR(t.op),value:t.value}}})(r):r instanceof le?(function(t){const n=t.getFilters().map((s=>rI(s)));return n.length===1?n[0]:{compositeFilter:{op:dR(t.op),filters:n}}})(r):U(54877,{filter:r})}function fR(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function sI(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,t,n,s,i=z.min(),o=z.min(),a=Re.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new zt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new zt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e){this.yt=e}}function pR(r,e){let t;if(e.document)t=Nc(r.yt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=O.fromSegments(e.noDocument.path),s=Ar(e.noDocument.readTime);t=ye.newNoDocument(n,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return U(56709);{const n=O.fromSegments(e.unknownDocument.path),s=Ar(e.unknownDocument.version);t=ye.newUnknownDocument(n,s)}}return e.readTime&&t.setReadTime((function(s){const i=new ce(s[0],s[1]);return z.fromTimestamp(i)})(e.readTime)),t}function cm(r,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:$a(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=(function(i,o){return{name:oo(i,o.key),fields:o.data.value.mapValue.fields,updateTime:Cs(i,o.version.toTimestamp()),createTime:Cs(i,o.createTime.toTimestamp())}})(r.yt,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:vr(e.version)};else{if(!e.isUnknownDocument())return U(57904,{document:e});n.unknownDocument={path:t.path.toArray(),version:vr(e.version)}}return n}function $a(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function vr(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Ar(r){const e=new ce(r.seconds,r.nanoseconds);return z.fromTimestamp(e)}function ar(r,e){const t=(e.baseMutations||[]).map((i=>bu(r.yt,i)));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const n=e.mutations.map((i=>bu(r.yt,i))),s=ce.fromMillis(e.localWriteTimeMs);return new Rh(e.batchId,s,t,n)}function Di(r){const e=Ar(r.readTime),t=r.lastLimboFreeSnapshotVersion!==void 0?Ar(r.lastLimboFreeSnapshotVersion):z.min();let n;return n=(function(i){return i.documents!==void 0})(r.query)?(function(i){const o=i.documents.length;return q(o===1,1966,{count:o}),Je(Ws(Jy(i.documents[0])))})(r.query):(function(i){return Je(tI(i))})(r.query),new zt(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,e,t,Re.fromBase64String(r.resumeToken))}function oI(r,e){const t=vr(e.snapshotVersion),n=vr(e.lastLimboFreeSnapshotVersion);let s;s=za(e.target)?Zy(r.yt,e.target):kc(r.yt,e.target).ft;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Er(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function Dc(r){const e=tI({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Wa(e,e.limit,"L"):e}function Fl(r,e){return new Ph(e.largestBatchId,bu(r.yt,e.overlayMutation))}function lm(r,e){const t=e.path.lastSegment();return[r,Ye(e.path.popLast()),t]}function um(r,e,t,n){return{indexId:r,uid:e,sequenceNumber:t,readTime:vr(n.readTime),documentKey:Ye(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{getBundleMetadata(e,t){return hm(e).get(t).next((n=>{if(n)return(function(i){return{id:i.bundleId,createTime:Ar(i.createTime),version:i.version}})(n)}))}saveBundleMetadata(e,t){return hm(e).put((function(s){return{bundleId:s.id,createTime:vr(Ne(s.createTime)),version:s.version}})(t))}getNamedQuery(e,t){return dm(e).get(t).next((n=>{if(n)return(function(i){return{name:i.name,query:Dc(i.bundledQuery),readTime:Ar(i.readTime)}})(n)}))}saveNamedQuery(e,t){return dm(e).put((function(s){return{name:s.name,readTime:vr(Ne(s.readTime)),bundledQuery:s.bundledQuery}})(t))}}function hm(r){return Oe(r,wc)}function dm(r){return Oe(r,vc)}/**
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
 */class xc{constructor(e,t){this.serializer=e,this.userId=t}static wt(e,t){const n=t.uid||"";return new xc(e,n)}getOverlay(e,t){return Ei(e).get(lm(this.userId,t)).next((n=>n?Fl(this.serializer,n):null))}getOverlays(e,t){const n=Nt();return A.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&n.set(s,i)})))).next((()=>n))}saveOverlays(e,t,n){const s=[];return n.forEach(((i,o)=>{const a=new Ph(t,o);s.push(this.St(e,a))})),A.waitFor(s)}removeOverlaysForBatchId(e,t,n){const s=new Set;t.forEach((o=>s.add(Ye(o.getCollectionPath()))));const i=[];return s.forEach((o=>{const a=IDBKeyRange.bound([this.userId,o,n],[this.userId,o,n+1],!1,!0);i.push(Ei(e).Z(fu,a))})),A.waitFor(i)}getOverlaysForCollection(e,t,n){const s=Nt(),i=Ye(t),o=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Ei(e).J(fu,o).next((a=>{for(const l of a){const u=Fl(this.serializer,l);s.set(u.getKey(),u)}return s}))}getOverlaysForCollectionGroup(e,t,n,s){const i=Nt();let o;const a=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Ei(e).ee({index:ny,range:a},((l,u,d)=>{const f=Fl(this.serializer,u);i.size()<s||f.largestBatchId===o?(i.set(f.getKey(),f),o=f.largestBatchId):d.done()})).next((()=>i))}St(e,t){return Ei(e).put((function(s,i,o){const[a,l,u]=lm(i,o.mutation.key);return{userId:i,collectionPath:l,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:ao(s.yt,o.mutation)}})(this.serializer,this.userId,t))}}function Ei(r){return Oe(r,Ac)}/**
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
 */class _R{bt(e){return Oe(e,yh)}getSessionToken(e){return this.bt(e).get("sessionToken").next((t=>{const n=t?.value;return n?Re.fromUint8Array(n):Re.EMPTY_BYTE_STRING}))}setSessionToken(e,t){return this.bt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class cr{constructor(){}Dt(e,t){this.Ct(e,t),t.vt()}Ct(e,t){if("nullValue"in e)this.Ft(t,5);else if("booleanValue"in e)this.Ft(t,10),t.Mt(e.booleanValue?1:0);else if("integerValue"in e)this.Ft(t,15),t.Mt(Ie(e.integerValue));else if("doubleValue"in e){const n=Ie(e.doubleValue);isNaN(n)?this.Ft(t,13):(this.Ft(t,15),Ji(n)?t.Mt(0):t.Mt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Ft(t,20),typeof n=="string"&&(n=Qt(n)),t.xt(`${n.seconds||""}`),t.Mt(n.nanos||0)}else if("stringValue"in e)this.Ot(e.stringValue,t),this.Nt(t);else if("bytesValue"in e)this.Ft(t,30),t.Bt(Yt(e.bytesValue)),this.Nt(t);else if("referenceValue"in e)this.Lt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Ft(t,45),t.Mt(n.latitude||0),t.Mt(n.longitude||0)}else"mapValue"in e?my(e)?this.Ft(t,Number.MAX_SAFE_INTEGER):Rc(e)?this.kt(e.mapValue,t):(this.qt(e.mapValue,t),this.Nt(t)):"arrayValue"in e?(this.Qt(e.arrayValue,t),this.Nt(t)):U(19022,{$t:e})}Ot(e,t){this.Ft(t,25),this.Ut(e,t)}Ut(e,t){t.xt(e)}qt(e,t){const n=e.fields||{};this.Ft(t,55);for(const s of Object.keys(n))this.Ot(s,t),this.Ct(n[s],t)}kt(e,t){const n=e.fields||{};this.Ft(t,53);const s=vs,i=n[s].arrayValue?.values?.length||0;this.Ft(t,15),t.Mt(Ie(i)),this.Ot(s,t),this.Ct(n[s],t)}Qt(e,t){const n=e.values||[];this.Ft(t,50);for(const s of n)this.Ct(s,t)}Lt(e,t){this.Ft(t,37),O.fromName(e).path.forEach((n=>{this.Ft(t,60),this.Ut(n,t)}))}Ft(e,t){e.Mt(t)}Nt(e){e.Mt(2)}}cr.Kt=new cr;/**
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
 */const $r=255;function gR(r){if(r===0)return 8;let e=0;return r>>4||(e+=4,r<<=4),r>>6||(e+=2,r<<=2),r>>7||(e+=1),e}function fm(r){const e=64-(function(n){let s=0;for(let i=0;i<8;++i){const o=gR(255&n[i]);if(s+=o,o!==8)break}return s})(r);return Math.ceil(e/8)}class yR{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Wt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Gt(n.value),n=t.next();this.zt()}jt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Jt(n.value),n=t.next();this.Ht()}Yt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Gt(n);else if(n<2048)this.Gt(960|n>>>6),this.Gt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Gt(480|n>>>12),this.Gt(128|63&n>>>6),this.Gt(128|63&n);else{const s=t.codePointAt(0);this.Gt(240|s>>>18),this.Gt(128|63&s>>>12),this.Gt(128|63&s>>>6),this.Gt(128|63&s)}}this.zt()}Zt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Jt(n);else if(n<2048)this.Jt(960|n>>>6),this.Jt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Jt(480|n>>>12),this.Jt(128|63&n>>>6),this.Jt(128|63&n);else{const s=t.codePointAt(0);this.Jt(240|s>>>18),this.Jt(128|63&s>>>12),this.Jt(128|63&s>>>6),this.Jt(128|63&s)}}this.Ht()}Xt(e){const t=this.en(e),n=fm(t);this.tn(1+n),this.buffer[this.position++]=255&n;for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=255&t[s]}nn(e){const t=this.en(e),n=fm(t);this.tn(1+n),this.buffer[this.position++]=~(255&n);for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}rn(){this.sn($r),this.sn(255)}_n(){this.an($r),this.an(255)}reset(){this.position=0}seed(e){this.tn(e.length),this.buffer.set(e,this.position),this.position+=e.length}un(){return this.buffer.slice(0,this.position)}en(e){const t=(function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)})(e),n=!!(128&t[0]);t[0]^=n?255:128;for(let s=1;s<t.length;++s)t[s]^=n?255:0;return t}Gt(e){const t=255&e;t===0?(this.sn(0),this.sn(255)):t===$r?(this.sn($r),this.sn(0)):this.sn(t)}Jt(e){const t=255&e;t===0?(this.an(0),this.an(255)):t===$r?(this.an($r),this.an(0)):this.an(e)}zt(){this.sn(0),this.sn(1)}Ht(){this.an(0),this.an(1)}sn(e){this.tn(1),this.buffer[this.position++]=e}an(e){this.tn(1),this.buffer[this.position++]=~e}tn(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class IR{constructor(e){this.cn=e}Bt(e){this.cn.Wt(e)}xt(e){this.cn.Yt(e)}Mt(e){this.cn.Xt(e)}vt(){this.cn.rn()}}class ER{constructor(e){this.cn=e}Bt(e){this.cn.jt(e)}xt(e){this.cn.Zt(e)}Mt(e){this.cn.nn(e)}vt(){this.cn._n()}}class Ti{constructor(){this.cn=new yR,this.ln=new IR(this.cn),this.hn=new ER(this.cn)}seed(e){this.cn.seed(e)}Pn(e){return e===0?this.ln:this.hn}un(){return this.cn.un()}reset(){this.cn.reset()}}/**
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
 */class lr{constructor(e,t,n,s){this.Tn=e,this.In=t,this.En=n,this.dn=s}An(){const e=this.dn.length,t=e===0||this.dn[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.dn,0),t!==e?n.set([0],this.dn.length):++n[n.length-1],new lr(this.Tn,this.In,this.En,n)}Rn(e,t,n){return{indexId:this.Tn,uid:e,arrayValue:Aa(this.En),directionalValue:Aa(this.dn),orderedDocumentKey:Aa(t),documentKey:n.path.toArray()}}Vn(e,t,n){const s=this.Rn(e,t,n);return[s.indexId,s.uid,s.arrayValue,s.directionalValue,s.orderedDocumentKey,s.documentKey]}}function dn(r,e){let t=r.Tn-e.Tn;return t!==0?t:(t=pm(r.En,e.En),t!==0?t:(t=pm(r.dn,e.dn),t!==0?t:O.comparator(r.In,e.In)))}function pm(r,e){for(let t=0;t<r.length&&t<e.length;++t){const n=r[t]-e[t];if(n!==0)return n}return r.length-e.length}function Aa(r){return Q_()?(function(t){let n="";for(let s=0;s<t.length;s++)n+=String.fromCharCode(t[s]);return n})(r):r}function mm(r){return typeof r!="string"?r:(function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n})(r)}class _m{constructor(e){this.mn=new ue(((t,n)=>Ee.comparator(t.field,n.field))),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.fn=e.orderBy,this.gn=[];for(const t of e.filters){const n=t;n.isInequality()?this.mn=this.mn.add(n):this.gn.push(n)}}get pn(){return this.mn.size>1}yn(e){if(q(e.collectionGroup===this.collectionId,49279),this.pn)return!1;const t=uu(e);if(t!==void 0&&!this.wn(t))return!1;const n=rr(e);let s=new Set,i=0,o=0;for(;i<n.length&&this.wn(n[i]);++i)s=s.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.mn.size>0){const a=this.mn.getIterator().getNext();if(!s.has(a.field.canonicalString())){const l=n[i];if(!this.Sn(a,l)||!this.bn(this.fn[o++],l))return!1}++i}for(;i<n.length;++i){const a=n[i];if(o>=this.fn.length||!this.bn(this.fn[o++],a))return!1}return!0}Dn(){if(this.pn)return null;let e=new ue(Ee.comparator);const t=[];for(const n of this.gn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new fr(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new fr(n.field,0))}for(const n of this.fn)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new fr(n.field,n.dir==="asc"?0:1)));return new gs(gs.UNKNOWN_ID,this.collectionId,t,ys.empty())}wn(e){for(const t of this.gn)if(this.Sn(t,e))return!0;return!1}Sn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}bn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function aI(r){if(q(r instanceof te||r instanceof le,20012),r instanceof te){if(r instanceof Ay){const t=r.value.arrayValue?.values?.map((n=>te.create(r.field,"==",n)))||[];return le.create(t,"or")}return r}const e=r.filters.map((t=>aI(t)));return le.create(e,r.op)}function TR(r){if(r.getFilters().length===0)return[];const e=Pu(aI(r));return q(cI(e),7391),Ru(e)||Cu(e)?[e]:e.getFilters()}function Ru(r){return r instanceof te}function Cu(r){return r instanceof le&&wh(r)}function cI(r){return Ru(r)||Cu(r)||(function(t){if(t instanceof le&&yu(t)){for(const n of t.getFilters())if(!Ru(n)&&!Cu(n))return!1;return!0}return!1})(r)}function Pu(r){if(q(r instanceof te||r instanceof le,34018),r instanceof te)return r;if(r.filters.length===1)return Pu(r.filters[0]);const e=r.filters.map((n=>Pu(n)));let t=le.create(e,r.op);return t=Ka(t),cI(t)?t:(q(t instanceof le,64498),q(Ss(t),40251),q(t.filters.length>1,57927),t.filters.reduce(((n,s)=>Dh(n,s))))}function Dh(r,e){let t;return q(r instanceof te||r instanceof le,38388),q(e instanceof te||e instanceof le,25473),t=r instanceof te?e instanceof te?(function(s,i){return le.create([s,i],"and")})(r,e):gm(r,e):e instanceof te?gm(e,r):(function(s,i){if(q(s.filters.length>0&&i.filters.length>0,48005),Ss(s)&&Ss(i))return Ty(s,i.getFilters());const o=yu(s)?s:i,a=yu(s)?i:s,l=o.filters.map((u=>Dh(u,a)));return le.create(l,"or")})(r,e),Ka(t)}function gm(r,e){if(Ss(e))return Ty(e,r.getFilters());{const t=e.filters.map((n=>Dh(r,n)));return le.create(t,"or")}}function Ka(r){if(q(r instanceof te||r instanceof le,11850),r instanceof te)return r;const e=r.getFilters();if(e.length===1)return Ka(e[0]);if(Iy(r))return r;const t=e.map((s=>Ka(s))),n=[];return t.forEach((s=>{s instanceof te?n.push(s):s instanceof le&&(s.op===r.op?n.push(...s.filters):n.push(s))})),n.length===1?n[0]:le.create(n,r.op)}/**
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
 */class wR{constructor(){this.Cn=new xh}addToCollectionParentIndex(e,t){return this.Cn.add(t),A.resolve()}getCollectionParents(e,t){return A.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return A.resolve()}deleteFieldIndex(e,t){return A.resolve()}deleteAllFieldIndexes(e){return A.resolve()}createTargetIndexes(e,t){return A.resolve()}getDocumentsMatchingTarget(e,t){return A.resolve(null)}getIndexType(e,t){return A.resolve(0)}getFieldIndexes(e,t){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,t){return A.resolve(dt.min())}getMinOffsetFromCollectionGroup(e,t){return A.resolve(dt.min())}updateCollectionGroup(e,t,n){return A.resolve()}updateIndexEntries(e,t){return A.resolve()}}class xh{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new ue(J.comparator),i=!s.has(n);return this.index[t]=s.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new ue(J.comparator)).toArray()}}/**
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
 */const ym="IndexedDbIndexManager",ia=new Uint8Array(0);class vR{constructor(e,t){this.databaseId=t,this.vn=new xh,this.Fn=new tn((n=>Er(n)),((n,s)=>Ao(n,s))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.vn.has(t)){const n=t.lastSegment(),s=t.popLast();e.addOnCommittedListener((()=>{this.vn.add(t)}));const i={collectionId:n,parent:Ye(s)};return Im(e).put(i)}return A.resolve()}getCollectionParents(e,t){const n=[],s=IDBKeyRange.bound([t,""],[Gg(t),""],!1,!0);return Im(e).J(s).next((i=>{for(const o of i){if(o.collectionId!==t)break;n.push(Pt(o.parent))}return n}))}addFieldIndex(e,t){const n=wi(e),s=(function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map((l=>[l.fieldPath.canonicalString(),l.kind]))}})(t);delete s.indexId;const i=n.add(s);if(t.indexState){const o=Hr(e);return i.next((a=>{o.put(um(a,this.uid,t.indexState.sequenceNumber,t.indexState.offset))}))}return i.next()}deleteFieldIndex(e,t){const n=wi(e),s=Hr(e),i=Kr(e);return n.delete(t.indexId).next((()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}deleteAllFieldIndexes(e){const t=wi(e),n=Kr(e),s=Hr(e);return t.Z().next((()=>n.Z())).next((()=>s.Z()))}createTargetIndexes(e,t){return A.forEach(this.Mn(t),(n=>this.getIndexType(e,n).next((s=>{if(s===0||s===1){const i=new _m(n).Dn();if(i!=null)return this.addFieldIndex(e,i)}}))))}getDocumentsMatchingTarget(e,t){const n=Kr(e);let s=!0;const i=new Map;return A.forEach(this.Mn(t),(o=>this.xn(e,o).next((a=>{s&&(s=!!a),i.set(o,a)})))).next((()=>{if(s){let o=K();const a=[];return A.forEach(i,((l,u)=>{x(ym,`Using index ${(function(B){return`id=${B.indexId}|cg=${B.collectionGroup}|f=${B.fields.map((se=>`${se.fieldPath}:${se.kind}`)).join(",")}`})(l)} to execute ${Er(t)}`);const d=(function(B,se){const oe=uu(se);if(oe===void 0)return null;for(const ne of ja(B,oe.fieldPath))switch(ne.op){case"array-contains-any":return ne.value.arrayValue.values||[];case"array-contains":return[ne.value]}return null})(u,l),f=(function(B,se){const oe=new Map;for(const ne of rr(se))for(const T of ja(B,ne.fieldPath))switch(T.op){case"==":case"in":oe.set(ne.fieldPath.canonicalString(),T.value);break;case"not-in":case"!=":return oe.set(ne.fieldPath.canonicalString(),T.value),Array.from(oe.values())}return null})(u,l),m=(function(B,se){const oe=[];let ne=!0;for(const T of rr(se)){const g=T.kind===0?Yp(B,T.fieldPath,B.startAt):Jp(B,T.fieldPath,B.startAt);oe.push(g.value),ne&&(ne=g.inclusive)}return new On(oe,ne)})(u,l),y=(function(B,se){const oe=[];let ne=!0;for(const T of rr(se)){const g=T.kind===0?Jp(B,T.fieldPath,B.endAt):Yp(B,T.fieldPath,B.endAt);oe.push(g.value),ne&&(ne=g.inclusive)}return new On(oe,ne)})(u,l),S=this.On(l,u,m),N=this.On(l,u,y),k=this.Nn(l,u,f),F=this.Bn(l.indexId,d,S,m.inclusive,N,y.inclusive,k);return A.forEach(F,(G=>n.Y(G,t.limit).next((B=>{B.forEach((se=>{const oe=O.fromSegments(se.documentKey);o.has(oe)||(o=o.add(oe),a.push(oe))}))}))))})).next((()=>a))}return A.resolve(null)}))}Mn(e){let t=this.Fn.get(e);return t||(e.filters.length===0?t=[e]:t=TR(le.create(e.filters,"and")).map((n=>Eu(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt))),this.Fn.set(e,t),t)}Bn(e,t,n,s,i,o,a){const l=(t!=null?t.length:1)*Math.max(n.length,i.length),u=l/(t!=null?t.length:1),d=[];for(let f=0;f<l;++f){const m=t?this.Ln(t[f/u]):ia,y=this.kn(e,m,n[f%u],s),S=this.qn(e,m,i[f%u],o),N=a.map((k=>this.kn(e,m,k,!0)));d.push(...this.createRange(y,S,N))}return d}kn(e,t,n,s){const i=new lr(e,O.empty(),t,n);return s?i:i.An()}qn(e,t,n,s){const i=new lr(e,O.empty(),t,n);return s?i.An():i}xn(e,t){const n=new _m(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next((i=>{let o=null;for(const a of i)n.yn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o}))}getIndexType(e,t){let n=2;const s=this.Mn(t);return A.forEach(s,(i=>this.xn(e,i).next((o=>{o?n!==0&&o.fields.length<(function(l){let u=new ue(Ee.comparator),d=!1;for(const f of l.filters)for(const m of f.getFlattenedFilters())m.field.isKeyField()||(m.op==="array-contains"||m.op==="array-contains-any"?d=!0:u=u.add(m.field));for(const f of l.orderBy)f.field.isKeyField()||(u=u.add(f.field));return u.size+(d?1:0)})(i)&&(n=1):n=0})))).next((()=>(function(o){return o.limit!==null})(t)&&s.length>1&&n===2?1:n))}Qn(e,t){const n=new Ti;for(const s of rr(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=n.Pn(s.kind);cr.Kt.Dt(i,o)}return n.un()}Ln(e){const t=new Ti;return cr.Kt.Dt(e,t.Pn(0)),t.un()}$n(e,t){const n=new Ti;return cr.Kt.Dt(Ir(this.databaseId,t),n.Pn((function(i){const o=rr(i);return o.length===0?0:o[o.length-1].kind})(e))),n.un()}Nn(e,t,n){if(n===null)return[];let s=[];s.push(new Ti);let i=0;for(const o of rr(e)){const a=n[i++];for(const l of s)if(this.Un(t,o.fieldPath)&&so(a))s=this.Kn(s,o,a);else{const u=l.Pn(o.kind);cr.Kt.Dt(a,u)}}return this.Wn(s)}On(e,t,n){return this.Nn(e,t,n.position)}Wn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].un();return t}Kn(e,t,n){const s=[...e],i=[];for(const o of n.arrayValue.values||[])for(const a of s){const l=new Ti;l.seed(a.un()),cr.Kt.Dt(o,l.Pn(t.kind)),i.push(l)}return i}Un(e,t){return!!e.filters.find((n=>n instanceof te&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in")))}getFieldIndexes(e,t){const n=wi(e),s=Hr(e);return(t?n.J(du,IDBKeyRange.bound(t,t)):n.J()).next((i=>{const o=[];return A.forEach(i,(a=>s.get([a.indexId,this.uid]).next((l=>{o.push((function(d,f){const m=f?new ys(f.sequenceNumber,new dt(Ar(f.readTime),new O(Pt(f.documentKey)),f.largestBatchId)):ys.empty(),y=d.fields.map((([S,N])=>new fr(Ee.fromServerFormat(S),N)));return new gs(d.indexId,d.collectionGroup,y,m)})(a,l))})))).next((()=>o))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((t=>t.length===0?null:(t.sort(((n,s)=>{const i=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:j(n.collectionGroup,s.collectionGroup)})),t[0].collectionGroup)))}updateCollectionGroup(e,t,n){const s=wi(e),i=Hr(e);return this.Gn(e).next((o=>s.J(du,IDBKeyRange.bound(t,t)).next((a=>A.forEach(a,(l=>i.put(um(l.indexId,this.uid,o,n))))))))}updateIndexEntries(e,t){const n=new Map;return A.forEach(t,((s,i)=>{const o=n.get(s.collectionGroup);return(o?A.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next((a=>(n.set(s.collectionGroup,a),A.forEach(a,(l=>this.zn(e,s,l).next((u=>{const d=this.jn(i,l);return u.isEqual(d)?A.resolve():this.Jn(e,i,l,u,d)})))))))}))}Hn(e,t,n,s){return Kr(e).put(s.Rn(this.uid,this.$n(n,t.key),t.key))}Yn(e,t,n,s){return Kr(e).delete(s.Vn(this.uid,this.$n(n,t.key),t.key))}zn(e,t,n){const s=Kr(e);let i=new ue(dn);return s.ee({index:ty,range:IDBKeyRange.only([n.indexId,this.uid,Aa(this.$n(n,t))])},((o,a)=>{i=i.add(new lr(n.indexId,t,mm(a.arrayValue),mm(a.directionalValue)))})).next((()=>i))}jn(e,t){let n=new ue(dn);const s=this.Qn(t,e);if(s==null)return n;const i=uu(t);if(i!=null){const o=e.data.field(i.fieldPath);if(so(o))for(const a of o.arrayValue.values||[])n=n.add(new lr(t.indexId,e.key,this.Ln(a),s))}else n=n.add(new lr(t.indexId,e.key,ia,s));return n}Jn(e,t,n,s,i){x(ym,"Updating index entries for document '%s'",t.key);const o=[];return(function(l,u,d,f,m){const y=l.getIterator(),S=u.getIterator();let N=Wr(y),k=Wr(S);for(;N||k;){let F=!1,G=!1;if(N&&k){const B=d(N,k);B<0?G=!0:B>0&&(F=!0)}else N!=null?G=!0:F=!0;F?(f(k),k=Wr(S)):G?(m(N),N=Wr(y)):(N=Wr(y),k=Wr(S))}})(s,i,dn,(a=>{o.push(this.Hn(e,t,n,a))}),(a=>{o.push(this.Yn(e,t,n,a))})),A.waitFor(o)}Gn(e){let t=1;return Hr(e).ee({index:ey,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((n,s,i)=>{i.done(),t=s.sequenceNumber+1})).next((()=>t))}createRange(e,t,n){n=n.sort(((o,a)=>dn(o,a))).filter(((o,a,l)=>!a||dn(o,l[a-1])!==0));const s=[];s.push(e);for(const o of n){const a=dn(o,e),l=dn(o,t);if(a===0)s[0]=e.An();else if(a>0&&l<0)s.push(o),s.push(o.An());else if(l>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.Zn(s[o],s[o+1]))return[];const a=s[o].Vn(this.uid,ia,O.empty()),l=s[o+1].Vn(this.uid,ia,O.empty());i.push(IDBKeyRange.bound(a,l))}return i}Zn(e,t){return dn(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Em)}getMinOffset(e,t){return A.mapArray(this.Mn(t),(n=>this.xn(e,n).next((s=>s||U(44426))))).next(Em)}}function Im(r){return Oe(r,eo)}function Kr(r){return Oe(r,Fi)}function wi(r){return Oe(r,gh)}function Hr(r){return Oe(r,Li)}function Em(r){q(r.length!==0,28825);let e=r[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;ph(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new dt(e.readTime,e.documentKey,t)}/**
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
 */const Tm={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},lI=41943040;class Qe{static withCacheSize(e){return new Qe(e,Qe.DEFAULT_COLLECTION_PERCENTILE,Qe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(r,e,t){const n=r.store(_t),s=r.store(Is),i=[],o=IDBKeyRange.only(t.batchId);let a=0;const l=n.ee({range:o},((d,f,m)=>(a++,m.delete())));i.push(l.next((()=>{q(a===1,47070,{batchId:t.batchId})})));const u=[];for(const d of t.mutations){const f=Jg(e,d.key.path,t.batchId);i.push(s.delete(f)),u.push(d.key)}return A.waitFor(i).next((()=>u))}function Ha(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw U(14731);e=r.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qe.DEFAULT_COLLECTION_PERCENTILE=10,Qe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Qe.DEFAULT=new Qe(lI,Qe.DEFAULT_COLLECTION_PERCENTILE,Qe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Qe.DISABLED=new Qe(-1,0,0);class Vc{constructor(e,t,n,s){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=s,this.Xn={}}static wt(e,t,n,s){q(e.uid!=="",64387);const i=e.isAuthenticated()?e.uid:"";return new Vc(i,t,n,s)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return fn(e).ee({index:ur,range:n},((s,i,o)=>{t=!1,o.done()})).next((()=>t))}addMutationBatch(e,t,n,s){const i=es(e),o=fn(e);return o.add({}).next((a=>{q(typeof a=="number",49019);const l=new Rh(a,t,n,s),u=(function(y,S,N){const k=N.baseMutations.map((G=>ao(y.yt,G))),F=N.mutations.map((G=>ao(y.yt,G)));return{userId:S,batchId:N.batchId,localWriteTimeMs:N.localWriteTime.toMillis(),baseMutations:k,mutations:F}})(this.serializer,this.userId,l),d=[];let f=new ue(((m,y)=>j(m.canonicalString(),y.canonicalString())));for(const m of s){const y=Jg(this.userId,m.key.path,a);f=f.add(m.key.path.popLast()),d.push(o.put(u)),d.push(i.put(y,ib))}return f.forEach((m=>{d.push(this.indexManager.addToCollectionParentIndex(e,m))})),e.addOnCommittedListener((()=>{this.Xn[a]=l.keys()})),A.waitFor(d).next((()=>l))}))}lookupMutationBatch(e,t){return fn(e).get(t).next((n=>n?(q(n.userId===this.userId,48,"Unexpected user for mutation batch",{userId:n.userId,batchId:t}),ar(this.serializer,n)):null))}er(e,t){return this.Xn[t]?A.resolve(this.Xn[t]):this.lookupMutationBatch(e,t).next((n=>{if(n){const s=n.keys();return this.Xn[t]=s,s}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return fn(e).ee({index:ur,range:s},((o,a,l)=>{a.userId===this.userId&&(q(a.batchId>=n,47524,{tr:n}),i=ar(this.serializer,a)),l.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=Cn;return fn(e).ee({index:ur,range:t,reverse:!0},((s,i,o)=>{n=i.batchId,o.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,Cn],[this.userId,Number.POSITIVE_INFINITY]);return fn(e).J(ur,t).next((n=>n.map((s=>ar(this.serializer,s)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=ga(this.userId,t.path),s=IDBKeyRange.lowerBound(n),i=[];return es(e).ee({range:s},((o,a,l)=>{const[u,d,f]=o,m=Pt(d);if(u===this.userId&&t.path.isEqual(m))return fn(e).get(f).next((y=>{if(!y)throw U(61480,{nr:o,batchId:f});q(y.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:y.userId,batchId:f}),i.push(ar(this.serializer,y))}));l.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ue(j);const s=[];return t.forEach((i=>{const o=ga(this.userId,i.path),a=IDBKeyRange.lowerBound(o),l=es(e).ee({range:a},((u,d,f)=>{const[m,y,S]=u,N=Pt(y);m===this.userId&&i.path.isEqual(N)?n=n.add(S):f.done()}));s.push(l)})),A.waitFor(s).next((()=>this.rr(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1,i=ga(this.userId,n),o=IDBKeyRange.lowerBound(i);let a=new ue(j);return es(e).ee({range:o},((l,u,d)=>{const[f,m,y]=l,S=Pt(m);f===this.userId&&n.isPrefixOf(S)?S.length===s&&(a=a.add(y)):d.done()})).next((()=>this.rr(e,a)))}rr(e,t){const n=[],s=[];return t.forEach((i=>{s.push(fn(e).get(i).next((o=>{if(o===null)throw U(35274,{batchId:i});q(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:i}),n.push(ar(this.serializer,o))})))})),A.waitFor(s).next((()=>n))}removeMutationBatch(e,t){return uI(e.le,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.ir(t.batchId)})),A.forEach(n,(s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))))}ir(e){delete this.Xn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return A.resolve();const n=IDBKeyRange.lowerBound((function(o){return[o]})(this.userId)),s=[];return es(e).ee({range:n},((i,o,a)=>{if(i[0]===this.userId){const l=Pt(i[1]);s.push(l)}else a.done()})).next((()=>{q(s.length===0,56720,{sr:s.map((i=>i.canonicalString()))})}))}))}containsKey(e,t){return hI(e,this.userId,t)}_r(e){return dI(e).get(this.userId).next((t=>t||{userId:this.userId,lastAcknowledgedBatchId:Cn,lastStreamToken:""}))}}function hI(r,e,t){const n=ga(e,t.path),s=n[1],i=IDBKeyRange.lowerBound(n);let o=!1;return es(r).ee({range:i,X:!0},((a,l,u)=>{const[d,f,m]=a;d===e&&f===s&&(o=!0),u.done()})).next((()=>o))}function fn(r){return Oe(r,_t)}function es(r){return Oe(r,Is)}function dI(r){return Oe(r,Xi)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Sr(0)}static cr(){return new Sr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.lr(e).next((t=>{const n=new Sr(t.highestTargetId);return t.highestTargetId=n.next(),this.hr(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.lr(e).next((t=>z.fromTimestamp(new ce(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.lr(e).next((t=>t.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.lr(e).next((s=>(s.highestListenSequenceNumber=t,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.hr(e,s))))}addTargetData(e,t){return this.Pr(e,t).next((()=>this.lr(e).next((n=>(n.targetCount+=1,this.Tr(t,n),this.hr(e,n))))))}updateTargetData(e,t){return this.Pr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>Qr(e).delete(t.targetId))).next((()=>this.lr(e))).next((n=>(q(n.targetCount>0,8065),n.targetCount-=1,this.hr(e,n))))}removeTargets(e,t,n){let s=0;const i=[];return Qr(e).ee(((o,a)=>{const l=Di(a);l.sequenceNumber<=t&&n.get(l.targetId)===null&&(s++,i.push(this.removeTargetData(e,l)))})).next((()=>A.waitFor(i))).next((()=>s))}forEachTarget(e,t){return Qr(e).ee(((n,s)=>{const i=Di(s);t(i)}))}lr(e){return wm(e).get(Ga).next((t=>(q(t!==null,2888),t)))}hr(e,t){return wm(e).put(Ga,t)}Pr(e,t){return Qr(e).put(oI(this.serializer,t))}Tr(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.lr(e).next((t=>t.targetCount))}getTargetData(e,t){const n=Er(t),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return Qr(e).ee({range:s,index:Zg},((o,a,l)=>{const u=Di(a);Ao(t,u.target)&&(i=u,l.done())})).next((()=>i))}addMatchingKeys(e,t,n){const s=[],i=En(e);return t.forEach((o=>{const a=Ye(o.path);s.push(i.put({targetId:n,path:a})),s.push(this.referenceDelegate.addReference(e,n,o))})),A.waitFor(s)}removeMatchingKeys(e,t,n){const s=En(e);return A.forEach(t,(i=>{const o=Ye(i.path);return A.waitFor([s.delete([n,o]),this.referenceDelegate.removeReference(e,n,i)])}))}removeMatchingKeysForTargetId(e,t){const n=En(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),s=En(e);let i=K();return s.ee({range:n,X:!0},((o,a,l)=>{const u=Pt(o[1]),d=new O(u);i=i.add(d)})).next((()=>i))}containsKey(e,t){const n=Ye(t.path),s=IDBKeyRange.bound([n],[Gg(n)],!1,!0);let i=0;return En(e).ee({index:_h,X:!0,range:s},(([o,a],l,u)=>{o!==0&&(i++,u.done())})).next((()=>i>0))}At(e,t){return Qr(e).get(t).next((n=>n?Di(n):null))}}function Qr(r){return Oe(r,Es)}function wm(r){return Oe(r,pr)}function En(r){return Oe(r,Ts)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm="LruGarbageCollector",fI=1048576;function Am([r,e],[t,n]){const s=j(r,t);return s===0?j(e,n):s}class SR{constructor(e){this.Ir=e,this.buffer=new ue(Am),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();Am(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class pI{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){x(vm,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){zn(t)?x(vm,"Ignoring IndexedDB error during garbage collection: ",t):await Gn(t)}await this.Vr(3e5)}))}}class bR{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((n=>Math.floor(t/100*n)))}nthSequenceNumber(e,t){if(t===0)return A.resolve(nt.ce);const n=new SR(t);return this.mr.forEachTarget(e,(s=>n.Ar(s.sequenceNumber))).next((()=>this.mr.pr(e,(s=>n.Ar(s))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.mr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(x("LruGarbageCollector","Garbage collection skipped; disabled"),A.resolve(Tm)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(x("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Tm):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let n,s,i,o,a,l,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((f=>(f>this.params.maximumSequenceNumbersToCollect?(x("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),s=this.params.maximumSequenceNumbersToCollect):s=f,o=Date.now(),this.nthSequenceNumber(e,s)))).next((f=>(n=f,a=Date.now(),this.removeTargets(e,n,t)))).next((f=>(i=f,l=Date.now(),this.removeOrphanedDocuments(e,n)))).next((f=>(u=Date.now(),Jr()<=Z.DEBUG&&x("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(l-a)+`ms
	Removed ${f} documents in `+(u-l)+`ms
Total Duration: ${u-d}ms`),A.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:f}))))}}function mI(r,e){return new bR(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e,t){this.db=e,this.garbageCollector=mI(this,t)}gr(e){const t=this.wr(e);return this.db.getTargetCache().getTargetCount(e).next((n=>t.next((s=>n+s))))}wr(e){let t=0;return this.pr(e,(n=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}pr(e,t){return this.Sr(e,((n,s)=>t(s)))}addReference(e,t,n){return oa(e,n)}removeReference(e,t,n){return oa(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return oa(e,t)}br(e,t){return(function(s,i){let o=!1;return dI(s).te((a=>hI(s,a,i).next((l=>(l&&(o=!0),A.resolve(!l)))))).next((()=>o))})(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.Sr(e,((o,a)=>{if(a<=t){const l=this.br(e,o).next((u=>{if(!u)return i++,n.getEntry(e,o).next((()=>(n.removeEntry(o,z.min()),En(e).delete((function(f){return[0,Ye(f.path)]})(o)))))}));s.push(l)}})).next((()=>A.waitFor(s))).next((()=>n.apply(e))).next((()=>i))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return oa(e,t)}Sr(e,t){const n=En(e);let s,i=nt.ce;return n.ee({index:_h},(([o,a],{path:l,sequenceNumber:u})=>{o===0?(i!==nt.ce&&t(new O(Pt(s)),i),i=u,s=l):i=nt.ce})).next((()=>{i!==nt.ce&&t(new O(Pt(s)),i)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function oa(r,e){return En(r).put((function(n,s){return{targetId:0,path:Ye(n.path),sequenceNumber:s}})(e,r.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(){this.changes=new tn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ye.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?A.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return tr(e).put(n)}removeEntry(e,t,n){return tr(e).delete((function(i,o){const a=i.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],$a(o),a[a.length-1]]})(t,n))}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.Dr(e,n))))}getEntry(e,t){let n=ye.newInvalidDocument(t);return tr(e).ee({index:ya,range:IDBKeyRange.only(vi(t))},((s,i)=>{n=this.Cr(t,i)})).next((()=>n))}vr(e,t){let n={size:0,document:ye.newInvalidDocument(t)};return tr(e).ee({index:ya,range:IDBKeyRange.only(vi(t))},((s,i)=>{n={document:this.Cr(t,i),size:Ha(i)}})).next((()=>n))}getEntries(e,t){let n=st();return this.Fr(e,t,((s,i)=>{const o=this.Cr(s,i);n=n.insert(s,o)})).next((()=>n))}Mr(e,t){let n=st(),s=new Ae(O.comparator);return this.Fr(e,t,((i,o)=>{const a=this.Cr(i,o);n=n.insert(i,a),s=s.insert(i,Ha(o))})).next((()=>({documents:n,Or:s})))}Fr(e,t,n){if(t.isEmpty())return A.resolve();let s=new ue(Rm);t.forEach((l=>s=s.add(l)));const i=IDBKeyRange.bound(vi(s.first()),vi(s.last())),o=s.getIterator();let a=o.getNext();return tr(e).ee({index:ya,range:i},((l,u,d)=>{const f=O.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&Rm(a,f)<0;)n(a,null),a=o.getNext();a&&a.isEqual(f)&&(n(a,u),a=o.hasNext()?o.getNext():null),a?d.j(vi(a)):d.done()})).next((()=>{for(;a;)n(a,null),a=o.hasNext()?o.getNext():null}))}getDocumentsMatchingQuery(e,t,n,s,i){const o=t.path,a=[o.popLast().toArray(),o.lastSegment(),$a(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return tr(e).J(IDBKeyRange.bound(a,l,!0)).next((u=>{i?.incrementDocumentReadCount(u.length);let d=st();for(const f of u){const m=this.Cr(O.fromSegments(f.prefixPath.concat(f.collectionGroup,f.documentId)),f);m.isFoundDocument()&&(bo(t,m)||s.has(m.key))&&(d=d.insert(m.key,m))}return d}))}getAllFromCollectionGroup(e,t,n,s){let i=st();const o=bm(t,n),a=bm(t,dt.max());return tr(e).ee({index:Xg,range:IDBKeyRange.bound(o,a,!0)},((l,u,d)=>{const f=this.Cr(O.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);i=i.insert(f.key,f),i.size===s&&d.done()})).next((()=>i))}newChangeBuffer(e){return new PR(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((t=>t.byteSize))}getMetadata(e){return Sm(e).get(hu).next((t=>(q(!!t,20021),t)))}Dr(e,t){return Sm(e).put(hu,t)}Cr(e,t){if(t){const n=pR(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(z.min())))return n}return ye.newInvalidDocument(e)}}function gI(r){return new CR(r)}class PR extends _I{constructor(e,t){super(),this.Nr=e,this.trackRemovals=t,this.Br=new tn((n=>n.toString()),((n,s)=>n.isEqual(s)))}applyChanges(e){const t=[];let n=0,s=new ue(((i,o)=>j(i.canonicalString(),o.canonicalString())));return this.changes.forEach(((i,o)=>{const a=this.Br.get(i);if(t.push(this.Nr.removeEntry(e,i,a.readTime)),o.isValidDocument()){const l=cm(this.Nr.serializer,o);s=s.add(i.path.popLast());const u=Ha(l);n+=u-a.size,t.push(this.Nr.addEntry(e,i,l))}else if(n-=a.size,this.trackRemovals){const l=cm(this.Nr.serializer,o.convertToNoDocument(z.min()));t.push(this.Nr.addEntry(e,i,l))}})),s.forEach((i=>{t.push(this.Nr.indexManager.addToCollectionParentIndex(e,i))})),t.push(this.Nr.updateMetadata(e,n)),A.waitFor(t)}getFromCache(e,t){return this.Nr.vr(e,t).next((n=>(this.Br.set(t,{size:n.size,readTime:n.document.readTime}),n.document)))}getAllFromCache(e,t){return this.Nr.Mr(e,t).next((({documents:n,Or:s})=>(s.forEach(((i,o)=>{this.Br.set(i,{size:o,readTime:n.get(i).readTime})})),n)))}}function Sm(r){return Oe(r,Zi)}function tr(r){return Oe(r,qa)}function vi(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function bm(r,e){const t=e.documentKey.path.toArray();return[r,$a(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Rm(r,e){const t=r.path.toArray(),n=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<n.length-2;++i)if(s=j(t[i],n[i]),s)return s;return s=j(t.length,n.length),s||(s=j(t[t.length-2],n[n.length-2]),s||j(t[t.length-1],n[n.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class NR{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(n=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(n!==null&&qi(n.mutation,s,rt.empty(),ce.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.getLocalViewOfDocuments(e,n,K()).next((()=>n))))}getLocalViewOfDocuments(e,t,n=K()){const s=Nt();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,n).next((i=>{let o=Ni();return i.forEach(((a,l)=>{o=o.insert(a,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const n=Nt();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,K())))}populateOverlays(e,t,n){const s=[];return n.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,a)=>{t.set(o,a)}))}))}computeViews(e,t,n,s){let i=st();const o=Bi(),a=(function(){return Bi()})();return t.forEach(((l,u)=>{const d=n.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof nn)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),qi(d.mutation,u,d.mutation.getFieldMask(),ce.now())):o.set(u.key,rt.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((u,d)=>o.set(u,d))),t.forEach(((u,d)=>a.set(u,new NR(d,o.get(u)??null)))),a)))}recalculateAndSaveOverlays(e,t){const n=Bi();let s=new Ae(((o,a)=>o-a)),i=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const a of o)a.keys().forEach((l=>{const u=t.get(l);if(u===null)return;let d=n.get(l)||rt.empty();d=a.applyToLocalView(u,d),n.set(l,d);const f=(s.get(a.batchId)||K()).add(l);s=s.insert(a.batchId,f)}))})).next((()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,d=l.value,f=xy();d.forEach((m=>{if(!i.has(m)){const y=By(t.get(m),n.get(m));y!==null&&f.set(m,y),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return A.waitFor(o)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.recalculateAndSaveOverlays(e,n)))}getDocumentsMatchingQuery(e,t,n,s){return(function(o){return O.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):vh(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,s):this.getDocumentsMatchingCollectionQuery(e,t,n,s)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-i.size):A.resolve(Nt());let a=_s,l=i;return o.next((u=>A.forEach(u,((d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(d)?A.resolve():this.remoteDocumentCache.getEntry(e,d).next((m=>{l=l.insert(d,m)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,l,u,K()))).next((d=>({batchId:a,changes:Dy(d)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new O(t)).next((n=>{let s=Ni();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,s){const i=t.collectionGroup;let o=Ni();return this.indexManager.getCollectionParents(e,i).next((a=>A.forEach(a,(l=>{const u=(function(f,m){return new en(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)})(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,n,s).next((d=>{d.forEach(((f,m)=>{o=o.insert(f,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s)))).next((o=>{i.forEach(((l,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,ye.newInvalidDocument(d)))}));let a=Ni();return o.forEach(((l,u)=>{const d=i.get(l);d!==void 0&&qi(d.mutation,u,rt.empty(),ce.now()),bo(t,u)&&(a=a.insert(l,u))})),a}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return A.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:Ne(s.createTime)}})(t)),A.resolve()}getNamedQuery(e,t){return A.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(s){return{name:s.name,query:Dc(s.bundledQuery),readTime:Ne(s.readTime)}})(t)),A.resolve()}}/**
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
 */class DR{constructor(){this.overlays=new Ae(O.comparator),this.qr=new Map}getOverlay(e,t){return A.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Nt();return A.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&n.set(s,i)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((s,i)=>{this.St(e,t,i)})),A.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.qr.get(n);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(n)),A.resolve()}getOverlaysForCollection(e,t,n){const s=Nt(),i=t.length+1,o=new O(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>n&&s.set(l.getKey(),l)}return A.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let i=new Ae(((u,d)=>u-d));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>n){let d=i.get(u.largestBatchId);d===null&&(d=Nt(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const a=Nt(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((u,d)=>a.set(u,d))),!(a.size()>=s)););return A.resolve(a)}St(e,t,n){const s=this.overlays.get(n.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(n.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new Ph(t,n));let i=this.qr.get(t);i===void 0&&(i=K(),this.qr.set(t,i)),this.qr.set(t,i.add(n.key))}}/**
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
 */class xR{constructor(){this.sessionToken=Re.EMPTY_BYTE_STRING}getSessionToken(e){return A.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,A.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(){this.Qr=new ue(Fe.$r),this.Ur=new ue(Fe.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const n=new Fe(e,t);this.Qr=this.Qr.add(n),this.Ur=this.Ur.add(n)}Wr(e,t){e.forEach((n=>this.addReference(n,t)))}removeReference(e,t){this.Gr(new Fe(e,t))}zr(e,t){e.forEach((n=>this.removeReference(n,t)))}jr(e){const t=new O(new J([])),n=new Fe(t,e),s=new Fe(t,e+1),i=[];return this.Ur.forEachInRange([n,s],(o=>{this.Gr(o),i.push(o.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new O(new J([])),n=new Fe(t,e),s=new Fe(t,e+1);let i=K();return this.Ur.forEachInRange([n,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const t=new Fe(e,0),n=this.Qr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Fe{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return O.comparator(e.key,t.key)||j(e.Yr,t.Yr)}static Kr(e,t){return j(e.Yr,t.Yr)||O.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new ue(Fe.$r)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Rh(i,t,n,s);this.mutationQueue.push(o);for(const a of s)this.Zr=this.Zr.add(new Fe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,t){return A.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.ei(n),i=s<0?0:s;return A.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?Cn:this.tr-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Fe(t,0),s=new Fe(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([n,s],(o=>{const a=this.Xr(o.Yr);i.push(a)})),A.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ue(j);return t.forEach((s=>{const i=new Fe(s,0),o=new Fe(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],(a=>{n=n.add(a.Yr)}))})),A.resolve(this.ti(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let i=n;O.isDocumentKey(i)||(i=i.child(""));const o=new Fe(new O(i),0);let a=new ue(j);return this.Zr.forEachWhile((l=>{const u=l.key.path;return!!n.isPrefixOf(u)&&(u.length===s&&(a=a.add(l.Yr)),!0)}),o),A.resolve(this.ti(a))}ti(e){const t=[];return e.forEach((n=>{const s=this.Xr(n);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){q(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Zr;return A.forEach(t.mutations,(s=>{const i=new Fe(s.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Zr=n}))}ir(e){}containsKey(e,t){const n=new Fe(t,0),s=this.Zr.firstAfterOrEqual(n);return A.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(e){this.ri=e,this.docs=(function(){return new Ae(O.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),i=s?s.size:0,o=this.ri(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return A.resolve(n?n.document.mutableCopy():ye.newInvalidDocument(t))}getEntries(e,t){let n=st();return t.forEach((s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():ye.newInvalidDocument(s))})),A.resolve(n)}getDocumentsMatchingQuery(e,t,n,s){let i=st();const o=t.path,a=new O(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:d}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||ph($g(d),n)<=0||(s.has(d.key)||bo(t,d))&&(i=i.insert(d.key,d.mutableCopy()))}return A.resolve(i)}getAllFromCollectionGroup(e,t,n,s){U(9500)}ii(e,t){return A.forEach(this.docs,(n=>t(n)))}newChangeBuffer(e){return new MR(this)}getSize(e){return A.resolve(this.size)}}class MR extends _I{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?t.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(n)})),A.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(e){this.persistence=e,this.si=new tn((t=>Er(t)),Ao),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.oi=0,this._i=new Vh,this.targetCount=0,this.ai=Sr.ur()}forEachTarget(e,t){return this.si.forEach(((n,s)=>t(s))),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.oi&&(this.oi=t),A.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Sr(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,A.resolve()}updateTargetData(e,t){return this.Pr(t),A.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,t,n){let s=0;const i=[];return this.si.forEach(((o,a)=>{a.sequenceNumber<=t&&n.get(a.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)})),A.waitFor(i).next((()=>s))}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,t){const n=this.si.get(t)||null;return A.resolve(n)}addMatchingKeys(e,t,n){return this._i.Wr(t,n),A.resolve()}removeMatchingKeys(e,t,n){this._i.zr(t,n);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),A.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),A.resolve()}getMatchingKeysForTargetId(e,t){const n=this._i.Hr(t);return A.resolve(n)}containsKey(e,t){return A.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(e,t){this.ui={},this.overlays={},this.ci=new nt(0),this.li=!1,this.li=!0,this.hi=new xR,this.referenceDelegate=e(this),this.Pi=new LR(this),this.indexManager=new wR,this.remoteDocumentCache=(function(s){return new OR(s)})((n=>this.referenceDelegate.Ti(n))),this.serializer=new iI(t),this.Ii=new kR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new DR,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ui[e.toKey()];return n||(n=new VR(t,this.referenceDelegate),this.ui[e.toKey()]=n),n}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,n){x("MemoryPersistence","Starting transaction:",e);const s=new FR(this.ci.next());return this.referenceDelegate.Ei(),n(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(e,t){return A.or(Object.values(this.ui).map((n=>()=>n.containsKey(e,t))))}}class FR extends Hg{constructor(e){super(),this.currentSequenceNumber=e}}class Oc{constructor(e){this.persistence=e,this.Ri=new Vh,this.Vi=null}static mi(e){return new Oc(e)}get fi(){if(this.Vi)return this.Vi;throw U(60996)}addReference(e,t,n){return this.Ri.addReference(n,t),this.fi.delete(n.toString()),A.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.fi.add(n.toString()),A.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),A.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((s=>this.fi.add(s.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>n.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.fi,(n=>{const s=O.fromPath(n);return this.gi(e,s).next((i=>{i||t.removeEntry(s,z.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((n=>{n?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return A.or([()=>A.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Qa{constructor(e,t){this.persistence=e,this.pi=new tn((n=>Ye(n.path)),((n,s)=>n.isEqual(s))),this.garbageCollector=mI(this,t)}static mi(e,t){return new Qa(e,t)}Ei(){}di(e){return A.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((n=>t.next((s=>n+s))))}wr(e){let t=0;return this.pr(e,(n=>{t++})).next((()=>t))}pr(e,t){return A.forEach(this.pi,((n,s)=>this.br(e,n,s).next((i=>i?A.resolve():t(s)))))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,(o=>this.br(e,o,t).next((a=>{a||(n++,i.removeEntry(o,z.min()))})))).next((()=>i.apply(e))).next((()=>n))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),A.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),A.resolve()}removeReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),A.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),A.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ea(e.data.value)),t}br(e,t,n){return A.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.pi.get(t);return A.resolve(s!==void 0&&s>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e){this.serializer=e}k(e,t,n,s){const i=new Tc("createOrUpgrade",t);n<1&&s>=1&&((function(l){l.createObjectStore(vo)})(e),(function(l){l.createObjectStore(Xi,{keyPath:sb}),l.createObjectStore(_t,{keyPath:Fp,autoIncrement:!0}).createIndex(ur,Up,{unique:!0}),l.createObjectStore(Is)})(e),Cm(e),(function(l){l.createObjectStore(sr)})(e));let o=A.resolve();return n<3&&s>=3&&(n!==0&&((function(l){l.deleteObjectStore(Ts),l.deleteObjectStore(Es),l.deleteObjectStore(pr)})(e),Cm(e)),o=o.next((()=>(function(l){const u=l.store(pr),d={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:z.min().toTimestamp(),targetCount:0};return u.put(Ga,d)})(i)))),n<4&&s>=4&&(n!==0&&(o=o.next((()=>(function(l,u){return u.store(_t).J().next((f=>{l.deleteObjectStore(_t),l.createObjectStore(_t,{keyPath:Fp,autoIncrement:!0}).createIndex(ur,Up,{unique:!0});const m=u.store(_t),y=f.map((S=>m.put(S)));return A.waitFor(y)}))})(e,i)))),o=o.next((()=>{(function(l){l.createObjectStore(ws,{keyPath:fb})})(e)}))),n<5&&s>=5&&(o=o.next((()=>this.yi(i)))),n<6&&s>=6&&(o=o.next((()=>((function(l){l.createObjectStore(Zi)})(e),this.wi(i))))),n<7&&s>=7&&(o=o.next((()=>this.Si(i)))),n<8&&s>=8&&(o=o.next((()=>this.bi(e,i)))),n<9&&s>=9&&(o=o.next((()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)}))),n<10&&s>=10&&(o=o.next((()=>this.Di(i)))),n<11&&s>=11&&(o=o.next((()=>{(function(l){l.createObjectStore(wc,{keyPath:pb})})(e),(function(l){l.createObjectStore(vc,{keyPath:mb})})(e)}))),n<12&&s>=12&&(o=o.next((()=>{(function(l){const u=l.createObjectStore(Ac,{keyPath:wb});u.createIndex(fu,vb,{unique:!1}),u.createIndex(ny,Ab,{unique:!1})})(e)}))),n<13&&s>=13&&(o=o.next((()=>(function(l){const u=l.createObjectStore(qa,{keyPath:ob});u.createIndex(ya,ab),u.createIndex(Xg,cb)})(e))).next((()=>this.Ci(e,i))).next((()=>e.deleteObjectStore(sr)))),n<14&&s>=14&&(o=o.next((()=>this.Fi(e,i)))),n<15&&s>=15&&(o=o.next((()=>(function(l){l.createObjectStore(gh,{keyPath:_b,autoIncrement:!0}).createIndex(du,gb,{unique:!1}),l.createObjectStore(Li,{keyPath:yb}).createIndex(ey,Ib,{unique:!1}),l.createObjectStore(Fi,{keyPath:Eb}).createIndex(ty,Tb,{unique:!1})})(e)))),n<16&&s>=16&&(o=o.next((()=>{t.objectStore(Li).clear()})).next((()=>{t.objectStore(Fi).clear()}))),n<17&&s>=17&&(o=o.next((()=>{(function(l){l.createObjectStore(yh,{keyPath:Sb})})(e)}))),n<18&&s>=18&&Q_()&&(o=o.next((()=>{t.objectStore(Li).clear()})).next((()=>{t.objectStore(Fi).clear()}))),o}wi(e){let t=0;return e.store(sr).ee(((n,s)=>{t+=Ha(s)})).next((()=>{const n={byteSize:t};return e.store(Zi).put(hu,n)}))}yi(e){const t=e.store(Xi),n=e.store(_t);return t.J().next((s=>A.forEach(s,(i=>{const o=IDBKeyRange.bound([i.userId,Cn],[i.userId,i.lastAcknowledgedBatchId]);return n.J(ur,o).next((a=>A.forEach(a,(l=>{q(l.userId===i.userId,18650,"Cannot process batch from unexpected user",{batchId:l.batchId});const u=ar(this.serializer,l);return uI(e,i.userId,u).next((()=>{}))}))))}))))}Si(e){const t=e.store(Ts),n=e.store(sr);return e.store(pr).get(Ga).next((s=>{const i=[];return n.ee(((o,a)=>{const l=new J(o),u=(function(f){return[0,Ye(f)]})(l);i.push(t.get(u).next((d=>d?A.resolve():(f=>t.put({targetId:0,path:Ye(f),sequenceNumber:s.highestListenSequenceNumber}))(l))))})).next((()=>A.waitFor(i)))}))}bi(e,t){e.createObjectStore(eo,{keyPath:db});const n=t.store(eo),s=new xh,i=o=>{if(s.add(o)){const a=o.lastSegment(),l=o.popLast();return n.put({collectionId:a,parent:Ye(l)})}};return t.store(sr).ee({X:!0},((o,a)=>{const l=new J(o);return i(l.popLast())})).next((()=>t.store(Is).ee({X:!0},(([o,a,l],u)=>{const d=Pt(a);return i(d.popLast())}))))}Di(e){const t=e.store(Es);return t.ee(((n,s)=>{const i=Di(s),o=oI(this.serializer,i);return t.put(o)}))}Ci(e,t){const n=t.store(sr),s=[];return n.ee(((i,o)=>{const a=t.store(qa),l=(function(f){return f.document?new O(J.fromString(f.document.name).popFirst(5)):f.noDocument?O.fromSegments(f.noDocument.path):f.unknownDocument?O.fromSegments(f.unknownDocument.path):U(36783)})(o).path.toArray(),u={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(a.put(u))})).next((()=>A.waitFor(s)))}Fi(e,t){const n=t.store(_t),s=gI(this.serializer),i=new Oh(Oc.mi,this.serializer.yt);return n.J().next((o=>{const a=new Map;return o.forEach((l=>{let u=a.get(l.userId)??K();ar(this.serializer,l).keys().forEach((d=>u=u.add(d))),a.set(l.userId,u)})),A.forEach(a,((l,u)=>{const d=new Ue(u),f=xc.wt(this.serializer,d),m=i.getIndexManager(d),y=Vc.wt(d,this.serializer,m,i.referenceDelegate);return new yI(s,y,f,m).recalculateAndSaveOverlaysForDocumentKeys(new pu(t,nt.ce),l).next()}))}))}}function Cm(r){r.createObjectStore(Ts,{keyPath:ub}).createIndex(_h,hb,{unique:!0}),r.createObjectStore(Es,{keyPath:"targetId"}).createIndex(Zg,lb,{unique:!0}),r.createObjectStore(pr)}const pn="IndexedDbPersistence",Ul=18e5,Bl=5e3,ql="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",II="main";class Mh{constructor(e,t,n,s,i,o,a,l,u,d,f=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Mi=i,this.window=o,this.document=a,this.xi=u,this.Oi=d,this.Ni=f,this.ci=null,this.li=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Bi=null,this.inForeground=!1,this.Li=null,this.ki=null,this.qi=Number.NEGATIVE_INFINITY,this.Qi=m=>Promise.resolve(),!Mh.v())throw new D(R.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new RR(this,s),this.$i=t+II,this.serializer=new iI(l),this.Ui=new Vt(this.$i,this.Ni,new UR(this.serializer)),this.hi=new _R,this.Pi=new AR(this.referenceDelegate,this.serializer),this.remoteDocumentCache=gI(this.serializer),this.Ii=new mR,this.window&&this.window.localStorage?this.Ki=this.window.localStorage:(this.Ki=null,d===!1&&Pe(pn,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Wi().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new D(R.FAILED_PRECONDITION,ql);return this.Gi(),this.zi(),this.ji(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.Pi.getHighestSequenceNumber(e)))})).then((e=>{this.ci=new nt(e,this.xi)})).then((()=>{this.li=!0})).catch((e=>(this.Ui&&this.Ui.close(),Promise.reject(e))))}Ji(e){return this.Qi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ui.$((async t=>{t.newVersion===null&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Mi.enqueueAndForget((async()=>{this.started&&await this.Wi()})))}Wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>aa(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.Hi(e).next((t=>{t||(this.isPrimary=!1,this.Mi.enqueueRetryable((()=>this.Qi(!1))))}))})).next((()=>this.Yi(e))).next((t=>this.isPrimary&&!t?this.Zi(e).next((()=>!1)):!!t&&this.Xi(e).next((()=>!0)))))).catch((e=>{if(zn(e))return x(pn,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return x(pn,"Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Mi.enqueueRetryable((()=>this.Qi(e))),this.isPrimary=e}))}Hi(e){return Ai(e).get(jr).next((t=>A.resolve(this.es(t))))}ts(e){return aa(e).delete(this.clientId)}async ns(){if(this.isPrimary&&!this.rs(this.qi,Ul)){this.qi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(t=>{const n=Oe(t,ws);return n.J().next((s=>{const i=this.ss(s,Ul),o=s.filter((a=>i.indexOf(a)===-1));return A.forEach(o,(a=>n.delete(a.clientId))).next((()=>o))}))})).catch((()=>[]));if(this.Ki)for(const t of e)this.Ki.removeItem(this._s(t.clientId))}}ji(){this.ki=this.Mi.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.Wi().then((()=>this.ns())).then((()=>this.ji()))))}es(e){return!!e&&e.ownerId===this.clientId}Yi(e){return this.Oi?A.resolve(!0):Ai(e).get(jr).next((t=>{if(t!==null&&this.rs(t.leaseTimestampMs,Bl)&&!this.us(t.ownerId)){if(this.es(t)&&this.networkEnabled)return!0;if(!this.es(t)){if(!t.allowTabSynchronization)throw new D(R.FAILED_PRECONDITION,ql);return!1}}return!(!this.networkEnabled||!this.inForeground)||aa(e).J().next((n=>this.ss(n,Bl).find((s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,a=this.networkEnabled===s.networkEnabled;if(i||o&&a)return!0}return!1}))===void 0))})).next((t=>(this.isPrimary!==t&&x(pn,`Client ${t?"is":"is not"} eligible for a primary lease.`),t)))}async shutdown(){this.li=!1,this.cs(),this.ki&&(this.ki.cancel(),this.ki=null),this.ls(),this.hs(),await this.Ui.runTransaction("shutdown","readwrite",[vo,ws],(e=>{const t=new pu(e,nt.ce);return this.Zi(t).next((()=>this.ts(t)))})),this.Ui.close(),this.Ps()}ss(e,t){return e.filter((n=>this.rs(n.updateTimeMs,t)&&!this.us(n.clientId)))}Ts(){return this.runTransaction("getActiveClients","readonly",(e=>aa(e).J().next((t=>this.ss(t,Ul).map((n=>n.clientId))))))}get started(){return this.li}getGlobalsCache(){return this.hi}getMutationQueue(e,t){return Vc.wt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new vR(e,this.serializer.yt.databaseId)}getDocumentOverlayCache(e){return xc.wt(this.serializer,e)}getBundleCache(){return this.Ii}runTransaction(e,t,n){x(pn,"Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=(function(l){return l===18?Cb:l===17?oy:l===16?Rb:l===15?Ih:l===14?iy:l===13?sy:l===12?bb:l===11?ry:void U(60245)})(this.Ni);let o;return this.Ui.runTransaction(e,s,i,(a=>(o=new pu(a,this.ci?this.ci.next():nt.ce),t==="readwrite-primary"?this.Hi(o).next((l=>!!l||this.Yi(o))).next((l=>{if(!l)throw Pe(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Mi.enqueueRetryable((()=>this.Qi(!1))),new D(R.FAILED_PRECONDITION,Kg);return n(o)})).next((l=>this.Xi(o).next((()=>l)))):this.Is(o).next((()=>n(o)))))).then((a=>(o.raiseOnCommittedEvent(),a)))}Is(e){return Ai(e).get(jr).next((t=>{if(t!==null&&this.rs(t.leaseTimestampMs,Bl)&&!this.us(t.ownerId)&&!this.es(t)&&!(this.Oi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new D(R.FAILED_PRECONDITION,ql)}))}Xi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Ai(e).put(jr,t)}static v(){return Vt.v()}Zi(e){const t=Ai(e);return t.get(jr).next((n=>this.es(n)?(x(pn,"Releasing primary lease."),t.delete(jr)):A.resolve()))}rs(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(Pe(`Detected an update time that is in the future: ${e} > ${n}`),!1))}Gi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Li=()=>{this.Mi.enqueueAndForget((()=>(this.inForeground=this.document.visibilityState==="visible",this.Wi())))},this.document.addEventListener("visibilitychange",this.Li),this.inForeground=this.document.visibilityState==="visible")}ls(){this.Li&&(this.document.removeEventListener("visibilitychange",this.Li),this.Li=null)}zi(){typeof this.window?.addEventListener=="function"&&(this.Bi=()=>{this.cs();const e=/(?:Version|Mobile)\/1[456]/;H_()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.Mi.enterRestrictedMode(!0),this.Mi.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Bi))}hs(){this.Bi&&(this.window.removeEventListener("pagehide",this.Bi),this.Bi=null)}us(e){try{const t=this.Ki?.getItem(this._s(e))!==null;return x(pn,`Client '${e}' ${t?"is":"is not"} zombied in LocalStorage`),t}catch(t){return Pe(pn,"Failed to get zombied client id.",t),!1}}cs(){if(this.Ki)try{this.Ki.setItem(this._s(this.clientId),String(Date.now()))}catch(e){Pe("Failed to set zombie client id.",e)}}Ps(){if(this.Ki)try{this.Ki.removeItem(this._s(this.clientId))}catch{}}_s(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Ai(r){return Oe(r,vo)}function aa(r){return Oe(r,ws)}function Lh(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.Es=n,this.ds=s}static As(e,t){let n=K(),s=K();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Fh(e,t.fromCache,n,s)}}/**
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
 */class BR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class EI{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return H_()?8:Qg(Ve())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,n,s){const i={result:null};return this.ys(e,t).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ws(e,t,s,n).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new BR;return this.Ss(e,t,o).next((a=>{if(i.result=a,this.Vs)return this.bs(e,t,o,a.size)}))})).next((()=>i.result))}bs(e,t,n,s){return n.documentReadCount<this.fs?(Jr()<=Z.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",Xr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),A.resolve()):(Jr()<=Z.DEBUG&&x("QueryEngine","Query:",Xr(t),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.gs*s?(Jr()<=Z.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",Xr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Je(t))):A.resolve())}ys(e,t){if(Xp(t))return A.resolve(null);let n=Je(t);return this.indexManager.getIndexType(e,n).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=Wa(t,null,"F"),n=Je(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((i=>{const o=K(...i);return this.ps.getDocuments(e,o).next((a=>this.indexManager.getMinOffset(e,n).next((l=>{const u=this.Ds(t,a);return this.Cs(t,u,o,l.readTime)?this.ys(e,Wa(t,null,"F")):this.vs(e,u,t,l)}))))})))))}ws(e,t,n,s){return Xp(t)||s.isEqual(z.min())?A.resolve(null):this.ps.getDocuments(e,n).next((i=>{const o=this.Ds(t,i);return this.Cs(t,o,n,s)?A.resolve(null):(Jr()<=Z.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Xr(t)),this.vs(e,o,t,Wg(s,_s)).next((a=>a)))}))}Ds(e,t){let n=new ue(Ny(e));return t.forEach(((s,i)=>{bo(e,i)&&(n=n.add(i))})),n}Cs(e,t,n,s){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,t,n){return Jr()<=Z.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",Xr(t)),this.ps.getDocumentsMatchingQuery(e,t,dt.min(),n)}vs(e,t,n,s){return this.ps.getDocumentsMatchingQuery(e,n,s).next((i=>(t.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh="LocalStore",qR=3e8;class GR{constructor(e,t,n,s){this.persistence=e,this.Fs=t,this.serializer=s,this.Ms=new Ae(j),this.xs=new tn((i=>Er(i)),Ao),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(n)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new yI(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function TI(r,e,t,n){return new GR(r,e,t,n)}async function wI(r,e){const t=M(r);return await t.persistence.runTransaction("Handle user change","readonly",(n=>{let s;return t.mutationQueue.getAllMutationBatches(n).next((i=>(s=i,t.Bs(e),t.mutationQueue.getAllMutationBatches(n)))).next((i=>{const o=[],a=[];let l=K();for(const u of s){o.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}for(const u of i){a.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}return t.localDocuments.getDocuments(n,l).next((u=>({Ls:u,removedBatchIds:o,addedBatchIds:a})))}))}))}function zR(r,e){const t=M(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const s=e.batch.keys(),i=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(a,l,u,d){const f=u.batch,m=f.keys();let y=A.resolve();return m.forEach((S=>{y=y.next((()=>d.getEntry(l,S))).next((N=>{const k=u.docVersions.get(S);q(k!==null,48541),N.version.compareTo(k)<0&&(f.applyToRemoteDocument(N,u),N.isValidDocument()&&(N.setReadTime(u.commitVersion),d.addEntry(N)))}))})),y.next((()=>a.mutationQueue.removeMutationBatch(l,f)))})(t,n,e,i).next((()=>i.apply(n))).next((()=>t.mutationQueue.performConsistencyCheck(n))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(n,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(a){let l=K();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l})(e)))).next((()=>t.localDocuments.getDocuments(n,s)))}))}function vI(r){const e=M(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function jR(r,e){const t=M(r),n=e.snapshotVersion;let s=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=t.Ns.newChangeBuffer({trackRemovals:!0});s=t.Ms;const a=[];e.targetChanges.forEach(((d,f)=>{const m=s.get(f);if(!m)return;a.push(t.Pi.removeMatchingKeys(i,d.removedDocuments,f).next((()=>t.Pi.addMatchingKeys(i,d.addedDocuments,f))));let y=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?y=y.withResumeToken(Re.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):d.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(d.resumeToken,n)),s=s.insert(f,y),(function(N,k,F){return N.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=qR?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0})(m,y,d)&&a.push(t.Pi.updateTargetData(i,y))}));let l=st(),u=K();if(e.documentUpdates.forEach((d=>{e.resolvedLimboDocuments.has(d)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))})),a.push(AI(i,o,e.documentUpdates).next((d=>{l=d.ks,u=d.qs}))),!n.isEqual(z.min())){const d=t.Pi.getLastRemoteSnapshotVersion(i).next((f=>t.Pi.setTargetsMetadata(i,i.currentSequenceNumber,n)));a.push(d)}return A.waitFor(a).next((()=>o.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,l,u))).next((()=>l))})).then((i=>(t.Ms=s,i)))}function AI(r,e,t){let n=K(),s=K();return t.forEach((i=>n=n.add(i))),e.getEntries(r,n).next((i=>{let o=st();return t.forEach(((a,l)=>{const u=i.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(z.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):x(Uh,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)})),{ks:o,qs:s}}))}function WR(r,e){const t=M(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(n=>(e===void 0&&(e=Cn),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e))))}function Ps(r,e){const t=M(r);return t.persistence.runTransaction("Allocate target","readwrite",(n=>{let s;return t.Pi.getTargetData(n,e).next((i=>i?(s=i,A.resolve(s)):t.Pi.allocateTargetId(n).next((o=>(s=new zt(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.Pi.addTargetData(n,s).next((()=>s)))))))})).then((n=>{const s=t.Ms.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(n.targetId,n),t.xs.set(e,n.targetId)),n}))}async function Ns(r,e,t){const n=M(r),s=n.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,(o=>n.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!zn(o))throw o;x(Uh,`Failed to update sequence numbers for target ${e}: ${o}`)}n.Ms=n.Ms.remove(e),n.xs.delete(s.target)}function Ya(r,e,t){const n=M(r);let s=z.min(),i=K();return n.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,u,d){const f=M(l),m=f.xs.get(d);return m!==void 0?A.resolve(f.Ms.get(m)):f.Pi.getTargetData(u,d)})(n,o,Je(e)).next((a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,n.Pi.getMatchingKeysForTargetId(o,a.targetId).next((l=>{i=l}))})).next((()=>n.Fs.getDocumentsMatchingQuery(o,e,t?s:z.min(),t?i:K()))).next((a=>(RI(n,Py(e),a),{documents:a,Qs:i})))))}function SI(r,e){const t=M(r),n=M(t.Pi),s=t.Ms.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",(i=>n.At(i,e).next((o=>o?o.target:null))))}function bI(r,e){const t=M(r),n=t.Os.get(e)||z.min();return t.persistence.runTransaction("Get new document changes","readonly",(s=>t.Ns.getAllFromCollectionGroup(s,e,Wg(n,_s),Number.MAX_SAFE_INTEGER))).then((s=>(RI(t,e,s),s)))}function RI(r,e,t){let n=r.Os.get(e)||z.min();t.forEach(((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)})),r.Os.set(e,n)}async function $R(r,e,t,n){const s=M(r);let i=K(),o=st();for(const u of t){const d=e.$s(u.metadata.name);u.document&&(i=i.add(d));const f=e.Us(u);f.setReadTime(e.Ks(u.metadata.readTime)),o=o.insert(d,f)}const a=s.Ns.newChangeBuffer({trackRemovals:!0}),l=await Ps(s,(function(d){return Je(Ws(J.fromString(`__bundle__/docs/${d}`)))})(n));return s.persistence.runTransaction("Apply bundle documents","readwrite",(u=>AI(u,a,o).next((d=>(a.apply(u),d))).next((d=>s.Pi.removeMatchingKeysForTargetId(u,l.targetId).next((()=>s.Pi.addMatchingKeys(u,i,l.targetId))).next((()=>s.localDocuments.getLocalViewOfDocuments(u,d.ks,d.qs))).next((()=>d.ks))))))}async function KR(r,e,t=K()){const n=await Ps(r,Je(Dc(e.bundledQuery))),s=M(r);return s.persistence.runTransaction("Save named query","readwrite",(i=>{const o=Ne(e.readTime);if(n.snapshotVersion.compareTo(o)>=0)return s.Ii.saveNamedQuery(i,e);const a=n.withResumeToken(Re.EMPTY_BYTE_STRING,o);return s.Ms=s.Ms.insert(a.targetId,a),s.Pi.updateTargetData(i,a).next((()=>s.Pi.removeMatchingKeysForTargetId(i,n.targetId))).next((()=>s.Pi.addMatchingKeys(i,t,n.targetId))).next((()=>s.Ii.saveNamedQuery(i,e)))}))}/**
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
 */const CI="firestore_clients";function Pm(r,e){return`${CI}_${r}_${e}`}const PI="firestore_mutations";function Nm(r,e,t){let n=`${PI}_${r}_${t}`;return e.isAuthenticated()&&(n+=`_${e.uid}`),n}const NI="firestore_targets";function Gl(r,e){return`${NI}_${r}_${e}`}/**
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
 */const Rt="SharedClientState";class Ja{constructor(e,t,n,s){this.user=e,this.batchId=t,this.state=n,this.error=s}static Ws(e,t,n){const s=JSON.parse(n);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new D(s.error.code,s.error.message))),o?new Ja(e,t,s.state,i):(Pe(Rt,`Failed to parse mutation state for ID '${t}': ${n}`),null)}Gs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Gi{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Ws(e,t){const n=JSON.parse(t);let s,i=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return i&&n.error&&(i=typeof n.error.message=="string"&&typeof n.error.code=="string",i&&(s=new D(n.error.code,n.error.message))),i?new Gi(e,n.state,s):(Pe(Rt,`Failed to parse target state for ID '${e}': ${t}`),null)}Gs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Xa{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ws(e,t){const n=JSON.parse(t);let s=typeof n=="object"&&n.activeTargetIds instanceof Array,i=Ah();for(let o=0;s&&o<n.activeTargetIds.length;++o)s=Yg(n.activeTargetIds[o]),i=i.add(n.activeTargetIds[o]);return s?new Xa(e,i):(Pe(Rt,`Failed to parse client data for instance '${e}': ${t}`),null)}}class Bh{constructor(e,t){this.clientId=e,this.onlineState=t}static Ws(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Bh(t.clientId,t.onlineState):(Pe(Rt,`Failed to parse online state: ${e}`),null)}}class Nu{constructor(){this.activeTargetIds=Ah()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zl{constructor(e,t,n,s,i){this.window=e,this.Mi=t,this.persistenceKey=n,this.Js=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Hs=this.Ys.bind(this),this.Zs=new Ae(j),this.started=!1,this.Xs=[];const o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.eo=Pm(this.persistenceKey,this.Js),this.no=(function(l){return`firestore_sequence_number_${l}`})(this.persistenceKey),this.Zs=this.Zs.insert(this.Js,new Nu),this.ro=new RegExp(`^${CI}_${o}_([^_]*)$`),this.io=new RegExp(`^${PI}_${o}_(\\d+)(?:_(.*))?$`),this.so=new RegExp(`^${NI}_${o}_(\\d+)$`),this.oo=(function(l){return`firestore_online_state_${l}`})(this.persistenceKey),this._o=(function(l){return`firestore_bundle_loaded_v2_${l}`})(this.persistenceKey),this.window.addEventListener("storage",this.Hs)}static v(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Ts();for(const n of e){if(n===this.Js)continue;const s=this.getItem(Pm(this.persistenceKey,n));if(s){const i=Xa.Ws(n,s);i&&(this.Zs=this.Zs.insert(i.clientId,i))}}this.ao();const t=this.storage.getItem(this.oo);if(t){const n=this.uo(t);n&&this.co(n)}for(const n of this.Xs)this.Ys(n);this.Xs=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.no,JSON.stringify(e))}getAllActiveQueryTargets(){return this.lo(this.Zs)}isActiveQueryTarget(e){let t=!1;return this.Zs.forEach(((n,s)=>{s.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.ho(e,"pending")}updateMutationState(e,t,n){this.ho(e,t,n),this.Po(e)}addLocalQueryTarget(e,t=!0){let n="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(Gl(this.persistenceKey,e));if(s){const i=Gi.Ws(e,s);i&&(n=i.state)}}return t&&this.To.zs(e),this.ao(),n}removeLocalQueryTarget(e){this.To.js(e),this.ao()}isLocalQueryTarget(e){return this.To.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Gl(this.persistenceKey,e))}updateQueryState(e,t,n){this.Io(e,t,n)}handleUserChange(e,t,n){t.forEach((s=>{this.Po(s)})),this.currentUser=e,n.forEach((s=>{this.addPendingMutation(s)}))}setOnlineState(e){this.Eo(e)}notifyBundleLoaded(e){this.Ao(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Hs),this.removeItem(this.eo),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return x(Rt,"READ",e,t),t}setItem(e,t){x(Rt,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){x(Rt,"REMOVE",e),this.storage.removeItem(e)}Ys(e){const t=e;if(t.storageArea===this.storage){if(x(Rt,"EVENT",t.key,t.newValue),t.key===this.eo)return void Pe("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Mi.enqueueRetryable((async()=>{if(this.started){if(t.key!==null){if(this.ro.test(t.key)){if(t.newValue==null){const n=this.Ro(t.key);return this.Vo(n,null)}{const n=this.mo(t.key,t.newValue);if(n)return this.Vo(n.clientId,n)}}else if(this.io.test(t.key)){if(t.newValue!==null){const n=this.fo(t.key,t.newValue);if(n)return this.po(n)}}else if(this.so.test(t.key)){if(t.newValue!==null){const n=this.yo(t.key,t.newValue);if(n)return this.wo(n)}}else if(t.key===this.oo){if(t.newValue!==null){const n=this.uo(t.newValue);if(n)return this.co(n)}}else if(t.key===this.no){const n=(function(i){let o=nt.ce;if(i!=null)try{const a=JSON.parse(i);q(typeof a=="number",30636,{So:i}),o=a}catch(a){Pe(Rt,"Failed to read sequence number from WebStorage",a)}return o})(t.newValue);n!==nt.ce&&this.sequenceNumberHandler(n)}else if(t.key===this._o){const n=this.bo(t.newValue);await Promise.all(n.map((s=>this.syncEngine.Do(s))))}}}else this.Xs.push(t)}))}}get To(){return this.Zs.get(this.Js)}ao(){this.setItem(this.eo,this.To.Gs())}ho(e,t,n){const s=new Ja(this.currentUser,e,t,n),i=Nm(this.persistenceKey,this.currentUser,e);this.setItem(i,s.Gs())}Po(e){const t=Nm(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Eo(e){const t={clientId:this.Js,onlineState:e};this.storage.setItem(this.oo,JSON.stringify(t))}Io(e,t,n){const s=Gl(this.persistenceKey,e),i=new Gi(e,t,n);this.setItem(s,i.Gs())}Ao(e){const t=JSON.stringify(Array.from(e));this.setItem(this._o,t)}Ro(e){const t=this.ro.exec(e);return t?t[1]:null}mo(e,t){const n=this.Ro(e);return Xa.Ws(n,t)}fo(e,t){const n=this.io.exec(e),s=Number(n[1]),i=n[2]!==void 0?n[2]:null;return Ja.Ws(new Ue(i),s,t)}yo(e,t){const n=this.so.exec(e),s=Number(n[1]);return Gi.Ws(s,t)}uo(e){return Bh.Ws(e)}bo(e){return JSON.parse(e)}async po(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Co(e.batchId,e.state,e.error);x(Rt,`Ignoring mutation for non-active user ${e.user.uid}`)}wo(e){return this.syncEngine.vo(e.targetId,e.state,e.error)}Vo(e,t){const n=t?this.Zs.insert(e,t):this.Zs.remove(e),s=this.lo(this.Zs),i=this.lo(n),o=[],a=[];return i.forEach((l=>{s.has(l)||o.push(l)})),s.forEach((l=>{i.has(l)||a.push(l)})),this.syncEngine.Fo(o,a).then((()=>{this.Zs=n}))}co(e){this.Zs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}lo(e){let t=Ah();return e.forEach(((n,s)=>{t=t.unionWith(s.activeTargetIds)})),t}}class kI{constructor(){this.Mo=new Nu,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,n){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Nu,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class HR{Oo(e){}shutdown(){}}/**
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
 */const km="ConnectivityMonitor";class Dm{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){x(km,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){x(km,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ca=null;function ku(){return ca===null?ca=(function(){return 268435456+Math.round(2147483648*Math.random())})():ca++,"0x"+ca.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl="RestConnection",QR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class YR{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${n}/databases/${s}`,this.Wo=this.databaseId.database===no?`project_id=${n}`:`project_id=${n}&database_id=${s}`}Go(e,t,n,s,i){const o=ku(),a=this.zo(e,t.toUriEncodedString());x(jl,`Sending RPC '${e}' ${o}:`,a,n);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:u}=new URL(a),d=Xt(u);return this.Jo(e,a,l,n,d).then((f=>(x(jl,`Received RPC '${e}' ${o}: `,f),f)),(f=>{throw mt(jl,`RPC '${e}' ${o} failed with error: `,f,"url: ",a,"request:",n),f}))}Ho(e,t,n,s,i,o){return this.Go(e,t,n,s,i)}jo(e,t,n){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+js})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),n&&n.headers.forEach(((s,i)=>e[i]=s))}zo(e,t){const n=QR[e];return`${this.Uo}/v1/${t}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He="WebChannelConnection";class XR extends YR{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,n,s,i){const o=ku();return new Promise(((a,l)=>{const u=new Og;u.setWithCredentials(!0),u.listenOnce(Mg.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case _a.NO_ERROR:const f=u.getResponseJson();x(He,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),a(f);break;case _a.TIMEOUT:x(He,`RPC '${e}' ${o} timed out`),l(new D(R.DEADLINE_EXCEEDED,"Request time out"));break;case _a.HTTP_ERROR:const m=u.getStatus();if(x(He,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const S=y?.error;if(S&&S.status&&S.message){const N=(function(F){const G=F.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(G)>=0?G:R.UNKNOWN})(S.status);l(new D(N,S.message))}else l(new D(R.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new D(R.UNAVAILABLE,"Connection failed."));break;default:U(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{x(He,`RPC '${e}' ${o} completed.`)}}));const d=JSON.stringify(s);x(He,`RPC '${e}' ${o} sending request:`,s),u.send(t,"POST",d,n,15)}))}T_(e,t,n){const s=ku(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Ug(),a=Fg(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;const d=i.join("");x(He,`Creating RPC '${e}' stream ${s}: ${d}`,l);const f=o.createWebChannel(d,l);this.I_(f);let m=!1,y=!1;const S=new JR({Yo:k=>{y?x(He,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(m||(x(He,`Opening RPC '${e}' stream ${s} transport.`),f.open(),m=!0),x(He,`RPC '${e}' stream ${s} sending:`,k),f.send(k))},Zo:()=>f.close()}),N=(k,F,G)=>{k.listen(F,(B=>{try{G(B)}catch(se){setTimeout((()=>{throw se}),0)}}))};return N(f,Pi.EventType.OPEN,(()=>{y||(x(He,`RPC '${e}' stream ${s} transport opened.`),S.o_())})),N(f,Pi.EventType.CLOSE,(()=>{y||(y=!0,x(He,`RPC '${e}' stream ${s} transport closed`),S.a_(),this.E_(f))})),N(f,Pi.EventType.ERROR,(k=>{y||(y=!0,mt(He,`RPC '${e}' stream ${s} transport errored. Name:`,k.name,"Message:",k.message),S.a_(new D(R.UNAVAILABLE,"The operation could not be completed")))})),N(f,Pi.EventType.MESSAGE,(k=>{if(!y){const F=k.data[0];q(!!F,16349);const G=F,B=G?.error||G[0]?.error;if(B){x(He,`RPC '${e}' stream ${s} received error:`,B);const se=B.status;let oe=(function(g){const E=ke[g];if(E!==void 0)return jy(E)})(se),ne=B.message;oe===void 0&&(oe=R.INTERNAL,ne="Unknown error status: "+se+" with message "+B.message),y=!0,S.a_(new D(oe,ne)),f.close()}else x(He,`RPC '${e}' stream ${s} received:`,F),S.u_(F)}})),N(a,Lg.STAT_EVENT,(k=>{k.stat===ou.PROXY?x(He,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===ou.NOPROXY&&x(He,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{S.__()}),0),S}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function DI(){return typeof window<"u"?window:null}function Sa(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(r){return new sR(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(e,t,n=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=n,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),n=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-n);s>0&&x("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm="PersistentStream";class xI{constructor(e,t,n,s,i,o,a,l){this.Mi=e,this.S_=n,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new qh(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===R.RESOURCE_EXHAUSTED?(Pe(t.toString()),Pe("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,s])=>{this.D_===t&&this.G_(n,s)}),(n=>{e((()=>{const s=new D(R.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(s)}))}))}G_(e,t){const n=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{n((()=>this.listener.Xo()))})),this.stream.t_((()=>{n((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{n((()=>this.z_(s)))})),this.stream.onMessage((s=>{n((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return x(xm,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(x(xm,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class ZR extends xI{constructor(e,t,n,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=aR(this.serializer,e),n=(function(i){if(!("targetChange"in i))return z.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?z.min():o.readTime?Ne(o.readTime):z.min()})(e);return this.listener.H_(t,n)}Y_(e){const t={};t.database=Su(this.serializer),t.addTarget=(function(i,o){let a;const l=o.target;if(a=za(l)?{documents:Zy(i,l)}:{query:kc(i,l).ft},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Hy(i,o.resumeToken);const u=vu(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(z.min())>0){a.readTime=Cs(i,o.snapshotVersion.toTimestamp());const u=vu(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a})(this.serializer,e);const n=lR(this.serializer,e);n&&(t.labels=n),this.q_(t)}Z_(e){const t={};t.database=Su(this.serializer),t.removeTarget=e,this.q_(t)}}class eC extends xI{constructor(e,t,n,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return q(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,q(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){q(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=cR(e.writeResults,e.commitTime),n=Ne(e.commitTime);return this.listener.na(n,t)}ra(){const e={};e.database=Su(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((n=>ao(this.serializer,n)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{}class nC extends tC{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new D(R.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,n,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Go(e,Au(t,n),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new D(R.UNKNOWN,i.toString())}))}Ho(e,t,n,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Ho(e,Au(t,n),s,o,a,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new D(R.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class rC{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
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
 */const br="RemoteStore";class sC{constructor(e,t,n,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((o=>{n.enqueueAndForget((async()=>{Wn(this)&&(x(br,"Restarting streams for network reachability change."),await(async function(l){const u=M(l);u.Ea.add(4),await Hs(u),u.Ra.set("Unknown"),u.Ea.delete(4),await No(u)})(this))}))})),this.Ra=new rC(n,s)}}async function No(r){if(Wn(r))for(const e of r.da)await e(!0)}async function Hs(r){for(const e of r.da)await e(!1)}function Mc(r,e){const t=M(r);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),jh(t)?zh(t):Ys(t).O_()&&Gh(t,e))}function ks(r,e){const t=M(r),n=Ys(t);t.Ia.delete(e),n.O_()&&VI(t,e),t.Ia.size===0&&(n.O_()?n.L_():Wn(t)&&t.Ra.set("Unknown"))}function Gh(r,e){if(r.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(z.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ys(r).Y_(e)}function VI(r,e){r.Va.Ue(e),Ys(r).Z_(e)}function zh(r){r.Va=new eR({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),Ys(r).start(),r.Ra.ua()}function jh(r){return Wn(r)&&!Ys(r).x_()&&r.Ia.size>0}function Wn(r){return M(r).Ea.size===0}function OI(r){r.Va=void 0}async function iC(r){r.Ra.set("Online")}async function oC(r){r.Ia.forEach(((e,t)=>{Gh(r,e)}))}async function aC(r,e){OI(r),jh(r)?(r.Ra.ha(e),zh(r)):r.Ra.set("Unknown")}async function cC(r,e,t){if(r.Ra.set("Online"),e instanceof Ky&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const a of i.targetIds)s.Ia.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.Ia.delete(a),s.Va.removeTarget(a))})(r,e)}catch(n){x(br,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Za(r,n)}else if(e instanceof va?r.Va.Ze(e):e instanceof $y?r.Va.st(e):r.Va.tt(e),!t.isEqual(z.min()))try{const n=await vI(r.localStore);t.compareTo(n)>=0&&await(function(i,o){const a=i.Va.Tt(o);return a.targetChanges.forEach(((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.Ia.get(u);d&&i.Ia.set(u,d.withResumeToken(l.resumeToken,o))}})),a.targetMismatches.forEach(((l,u)=>{const d=i.Ia.get(l);if(!d)return;i.Ia.set(l,d.withResumeToken(Re.EMPTY_BYTE_STRING,d.snapshotVersion)),VI(i,l);const f=new zt(d.target,l,u,d.sequenceNumber);Gh(i,f)})),i.remoteSyncer.applyRemoteEvent(a)})(r,t)}catch(n){x(br,"Failed to raise snapshot:",n),await Za(r,n)}}async function Za(r,e,t){if(!zn(e))throw e;r.Ea.add(1),await Hs(r),r.Ra.set("Offline"),t||(t=()=>vI(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{x(br,"Retrying IndexedDB access"),await t(),r.Ea.delete(1),await No(r)}))}function MI(r,e){return e().catch((t=>Za(r,t,e)))}async function Qs(r){const e=M(r),t=Mn(e);let n=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Cn;for(;lC(e);)try{const s=await WR(e.localStore,n);if(s===null){e.Ta.length===0&&t.L_();break}n=s.batchId,uC(e,s)}catch(s){await Za(e,s)}LI(e)&&FI(e)}function lC(r){return Wn(r)&&r.Ta.length<10}function uC(r,e){r.Ta.push(e);const t=Mn(r);t.O_()&&t.X_&&t.ea(e.mutations)}function LI(r){return Wn(r)&&!Mn(r).x_()&&r.Ta.length>0}function FI(r){Mn(r).start()}async function hC(r){Mn(r).ra()}async function dC(r){const e=Mn(r);for(const t of r.Ta)e.ea(t.mutations)}async function fC(r,e,t){const n=r.Ta.shift(),s=Ch.from(n,e,t);await MI(r,(()=>r.remoteSyncer.applySuccessfulWrite(s))),await Qs(r)}async function pC(r,e){e&&Mn(r).X_&&await(async function(n,s){if((function(o){return zy(o)&&o!==R.ABORTED})(s.code)){const i=n.Ta.shift();Mn(n).B_(),await MI(n,(()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Qs(n)}})(r,e),LI(r)&&FI(r)}async function Vm(r,e){const t=M(r);t.asyncQueue.verifyOperationInProgress(),x(br,"RemoteStore received new credentials");const n=Wn(t);t.Ea.add(3),await Hs(t),n&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await No(t)}async function Du(r,e){const t=M(r);e?(t.Ea.delete(2),await No(t)):e||(t.Ea.add(2),await Hs(t),t.Ra.set("Unknown"))}function Ys(r){return r.ma||(r.ma=(function(t,n,s){const i=M(t);return i.sa(),new ZR(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(r.datastore,r.asyncQueue,{Xo:iC.bind(null,r),t_:oC.bind(null,r),r_:aC.bind(null,r),H_:cC.bind(null,r)}),r.da.push((async e=>{e?(r.ma.B_(),jh(r)?zh(r):r.Ra.set("Unknown")):(await r.ma.stop(),OI(r))}))),r.ma}function Mn(r){return r.fa||(r.fa=(function(t,n,s){const i=M(t);return i.sa(),new eC(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:hC.bind(null,r),r_:pC.bind(null,r),ta:dC.bind(null,r),na:fC.bind(null,r)}),r.da.push((async e=>{e?(r.fa.B_(),await Qs(r)):(await r.fa.stop(),r.Ta.length>0&&(x(br,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e,t,n,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new ze,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,s,i){const o=Date.now()+n,a=new Wh(e,t,o,s,i);return a.start(n),a}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Js(r,e){if(Pe("AsyncQueue",`${e}: ${r}`),zn(r))return new D(R.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{static emptySet(e){return new mr(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||O.comparator(t.key,n.key):(t,n)=>O.comparator(t.key,n.key),this.keyedMap=Ni(),this.sortedSet=new Ae(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof mr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new mr;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(){this.ga=new Ae(O.comparator)}track(e){const t=e.doc.key,n=this.ga.get(t);n?e.type!==0&&n.type===3?this.ga=this.ga.insert(t,e):e.type===3&&n.type!==1?this.ga=this.ga.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.ga=this.ga.remove(t):e.type===1&&n.type===2?this.ga=this.ga.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):U(63341,{Rt:e,pa:n}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Rr{constructor(e,t,n,s,i,o,a,l,u){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,t,n,s,i){const o=[];return t.forEach((a=>{o.push({type:0,doc:a})})),new Rr(e,t,mr.emptySet(t),o,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&So(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==n[s].type||!t[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class _C{constructor(){this.queries=Mm(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,n){const s=M(t),i=s.queries;s.queries=Mm(),i.forEach(((o,a)=>{for(const l of a.Sa)l.onError(n)}))})(this,new D(R.ABORTED,"Firestore shutting down"))}}function Mm(){return new tn((r=>Cy(r)),So)}async function $h(r,e){const t=M(r);let n=3;const s=e.query;let i=t.queries.get(s);i?!i.ba()&&e.Da()&&(n=2):(i=new mC,n=e.Da()?0:1);try{switch(n){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const a=Js(o,`Initialization of query '${Xr(e.query)}' failed`);return void e.onError(a)}t.queries.set(s,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&Hh(t)}async function Kh(r,e){const t=M(r),n=e.query;let s=3;const i=t.queries.get(n);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function gC(r,e){const t=M(r);let n=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const a of o.Sa)a.Fa(s)&&(n=!0);o.wa=s}}n&&Hh(t)}function yC(r,e,t){const n=M(r),s=n.queries.get(e);if(s)for(const i of s.Sa)i.onError(t);n.queries.delete(e)}function Hh(r){r.Ca.forEach((e=>{e.next()}))}var xu,Lm;(Lm=xu||(xu={})).Ma="default",Lm.Cache="cache";class Qh{constructor(e,t,n){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(e){if(!this.options.includeMetadataChanges){const n=[];for(const s of e.docChanges)s.type!==3&&n.push(s);e=new Rr(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const n=t!=="Offline";return(!this.options.qa||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Rr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==xu.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e,t){this.Qa=e,this.byteLength=t}$a(){return"metadata"in this.Qa}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(e){this.serializer=e}$s(e){return Ot(this.serializer,e)}Us(e){return e.metadata.exists?Nc(this.serializer,e.document,!1):ye.newNoDocument(this.$s(e.metadata.name),this.Ks(e.metadata.readTime))}Ks(e){return Ne(e)}}class Yh{constructor(e,t){this.Ua=e,this.serializer=t,this.Ka=[],this.Wa=[],this.collectionGroups=new Set,this.progress=BI(e)}get queries(){return this.Ka}get documents(){return this.Wa}Ga(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Qa.namedQuery)this.Ka.push(e.Qa.namedQuery);else if(e.Qa.documentMetadata){this.Wa.push({metadata:e.Qa.documentMetadata}),e.Qa.documentMetadata.exists||++t;const n=J.fromString(e.Qa.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.Qa.document&&(this.Wa[this.Wa.length-1].document=e.Qa.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,{...this.progress}):null}za(e){const t=new Map,n=new Fm(this.serializer);for(const s of e)if(s.metadata.queries){const i=n.$s(s.metadata.name);for(const o of s.metadata.queries){const a=(t.get(o)||K()).add(i);t.set(o,a)}}return t}async ja(e){const t=await $R(e,new Fm(this.serializer),this.Wa,this.Ua.id),n=this.za(this.documents);for(const s of this.Ka)await KR(e,s,n.get(s.name));return this.progress.taskState="Success",{progress:this.progress,Ja:this.collectionGroups,Ha:t}}}function BI(r){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:r.totalDocuments,totalBytes:r.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e){this.key=e}}class GI{constructor(e){this.key=e}}class zI{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=K(),this.mutatedKeys=K(),this.eu=Ny(e),this.tu=new mr(this.eu)}get nu(){return this.Ya}ru(e,t){const n=t?t.iu:new Om,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((d,f)=>{const m=s.get(d),y=bo(this.query,f)?f:null,S=!!m&&this.mutatedKeys.has(m.key),N=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let k=!1;m&&y?m.data.isEqual(y.data)?S!==N&&(n.track({type:3,doc:y}),k=!0):this.su(m,y)||(n.track({type:2,doc:y}),k=!0,(l&&this.eu(y,l)>0||u&&this.eu(y,u)<0)&&(a=!0)):!m&&y?(n.track({type:0,doc:y}),k=!0):m&&!y&&(n.track({type:1,doc:m}),k=!0,(l||u)&&(a=!0)),k&&(y?(o=o.add(y),i=N?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),n.track({type:1,doc:d})}return{tu:o,iu:n,Cs:a,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((d,f)=>(function(y,S){const N=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U(20277,{Rt:k})}};return N(y)-N(S)})(d.type,f.type)||this.eu(d.doc,f.doc))),this.ou(n),s=s??!1;const a=t&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,u=l!==this.Za;return this.Za=l,o.length!==0||u?{snapshot:new Rr(this.query,e.tu,i,o,e.mutatedKeys,l===0,u,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Om,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=K(),this.tu.forEach((n=>{this.uu(n.key)&&(this.Xa=this.Xa.add(n.key))}));const t=[];return e.forEach((n=>{this.Xa.has(n)||t.push(new GI(n))})),this.Xa.forEach((n=>{e.has(n)||t.push(new qI(n))})),t}cu(e){this.Ya=e.Qs,this.Xa=K();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Rr.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const $n="SyncEngine";class IC{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class EC{constructor(e){this.key=e,this.hu=!1}}class TC{constructor(e,t,n,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new tn((a=>Cy(a)),So),this.Iu=new Map,this.Eu=new Set,this.du=new Ae(O.comparator),this.Au=new Map,this.Ru=new Vh,this.Vu={},this.mu=new Map,this.fu=Sr.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function wC(r,e,t=!0){const n=Lc(r);let s;const i=n.Tu.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await jI(n,e,t,!0),s}async function vC(r,e){const t=Lc(r);await jI(t,e,!0,!1)}async function jI(r,e,t,n){const s=await Ps(r.localStore,Je(e)),i=s.targetId,o=r.sharedClientState.addLocalQueryTarget(i,t);let a;return n&&(a=await Jh(r,e,i,o==="current",s.resumeToken)),r.isPrimaryClient&&t&&Mc(r.remoteStore,s),a}async function Jh(r,e,t,n,s){r.pu=(f,m,y)=>(async function(N,k,F,G){let B=k.view.ru(F);B.Cs&&(B=await Ya(N.localStore,k.query,!1).then((({documents:T})=>k.view.ru(T,B))));const se=G&&G.targetChanges.get(k.targetId),oe=G&&G.targetMismatches.get(k.targetId)!=null,ne=k.view.applyChanges(B,N.isPrimaryClient,se,oe);return Vu(N,k.targetId,ne.au),ne.snapshot})(r,f,m,y);const i=await Ya(r.localStore,e,!0),o=new zI(e,i.Qs),a=o.ru(i.documents),l=Po.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",s),u=o.applyChanges(a,r.isPrimaryClient,l);Vu(r,t,u.au);const d=new IC(e,t,o);return r.Tu.set(e,d),r.Iu.has(t)?r.Iu.get(t).push(e):r.Iu.set(t,[e]),u.snapshot}async function AC(r,e,t){const n=M(r),s=n.Tu.get(e),i=n.Iu.get(s.targetId);if(i.length>1)return n.Iu.set(s.targetId,i.filter((o=>!So(o,e)))),void n.Tu.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Ns(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),t&&ks(n.remoteStore,s.targetId),Ds(n,s.targetId)})).catch(Gn)):(Ds(n,s.targetId),await Ns(n.localStore,s.targetId,!0))}async function SC(r,e){const t=M(r),n=t.Tu.get(e),s=t.Iu.get(n.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),ks(t.remoteStore,n.targetId))}async function bC(r,e,t){const n=td(r);try{const s=await(function(o,a){const l=M(o),u=ce.now(),d=a.reduce(((y,S)=>y.add(S.key)),K());let f,m;return l.persistence.runTransaction("Locally write mutations","readwrite",(y=>{let S=st(),N=K();return l.Ns.getEntries(y,d).next((k=>{S=k,S.forEach(((F,G)=>{G.isValidDocument()||(N=N.add(F))}))})).next((()=>l.localDocuments.getOverlayedDocuments(y,S))).next((k=>{f=k;const F=[];for(const G of a){const B=Jb(G,f.get(G.key).overlayedDocument);B!=null&&F.push(new nn(G.key,B,gy(B.value.mapValue),Te.exists(!0)))}return l.mutationQueue.addMutationBatch(y,u,F,a)})).next((k=>{m=k;const F=k.applyToLocalDocumentSet(f,N);return l.documentOverlayCache.saveOverlays(y,k.batchId,F)}))})).then((()=>({batchId:m.batchId,changes:Dy(f)})))})(n.localStore,e);n.sharedClientState.addPendingMutation(s.batchId),(function(o,a,l){let u=o.Vu[o.currentUser.toKey()];u||(u=new Ae(j)),u=u.insert(a,l),o.Vu[o.currentUser.toKey()]=u})(n,s.batchId,t),await rn(n,s.changes),await Qs(n.remoteStore)}catch(s){const i=Js(s,"Failed to persist write");t.reject(i)}}async function WI(r,e){const t=M(r);try{const n=await jR(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=t.Au.get(i);o&&(q(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?q(o.hu,14607):s.removedDocuments.size>0&&(q(o.hu,42227),o.hu=!1))})),await rn(t,n,e)}catch(n){await Gn(n)}}function Um(r,e,t){const n=M(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const s=[];n.Tu.forEach(((i,o)=>{const a=o.view.va(e);a.snapshot&&s.push(a.snapshot)})),(function(o,a){const l=M(o);l.onlineState=a;let u=!1;l.queries.forEach(((d,f)=>{for(const m of f.Sa)m.va(a)&&(u=!0)})),u&&Hh(l)})(n.eventManager,e),s.length&&n.Pu.H_(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function RC(r,e,t){const n=M(r);n.sharedClientState.updateQueryState(e,"rejected",t);const s=n.Au.get(e),i=s&&s.key;if(i){let o=new Ae(O.comparator);o=o.insert(i,ye.newNoDocument(i,z.min()));const a=K().add(i),l=new Co(z.min(),new Map,new Ae(j),o,a);await WI(n,l),n.du=n.du.remove(i),n.Au.delete(e),ed(n)}else await Ns(n.localStore,e,!1).then((()=>Ds(n,e,t))).catch(Gn)}async function CC(r,e){const t=M(r),n=e.batch.batchId;try{const s=await zR(t.localStore,e);Zh(t,n,null),Xh(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await rn(t,s)}catch(s){await Gn(s)}}async function PC(r,e,t){const n=M(r);try{const s=await(function(o,a){const l=M(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let d;return l.mutationQueue.lookupMutationBatch(u,a).next((f=>(q(f!==null,37113),d=f.keys(),l.mutationQueue.removeMutationBatch(u,f)))).next((()=>l.mutationQueue.performConsistencyCheck(u))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(u,d,a))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d))).next((()=>l.localDocuments.getDocuments(u,d)))}))})(n.localStore,e);Zh(n,e,t),Xh(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await rn(n,s)}catch(s){await Gn(s)}}async function NC(r,e){const t=M(r);Wn(t.remoteStore)||x($n,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const n=await(function(o){const a=M(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(l=>a.mutationQueue.getHighestUnacknowledgedBatchId(l)))})(t.localStore);if(n===Cn)return void e.resolve();const s=t.mu.get(n)||[];s.push(e),t.mu.set(n,s)}catch(n){const s=Js(n,"Initialization of waitForPendingWrites() operation failed");e.reject(s)}}function Xh(r,e){(r.mu.get(e)||[]).forEach((t=>{t.resolve()})),r.mu.delete(e)}function Zh(r,e,t){const n=M(r);let s=n.Vu[n.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),n.Vu[n.currentUser.toKey()]=s}}function Ds(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Iu.get(e))r.Tu.delete(n),t&&r.Pu.yu(n,t);r.Iu.delete(e),r.isPrimaryClient&&r.Ru.jr(e).forEach((n=>{r.Ru.containsKey(n)||$I(r,n)}))}function $I(r,e){r.Eu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(ks(r.remoteStore,t),r.du=r.du.remove(e),r.Au.delete(t),ed(r))}function Vu(r,e,t){for(const n of t)n instanceof qI?(r.Ru.addReference(n.key,e),kC(r,n)):n instanceof GI?(x($n,"Document no longer in limbo: "+n.key),r.Ru.removeReference(n.key,e),r.Ru.containsKey(n.key)||$I(r,n.key)):U(19791,{wu:n})}function kC(r,e){const t=e.key,n=t.path.canonicalString();r.du.get(t)||r.Eu.has(n)||(x($n,"New document in limbo: "+t),r.Eu.add(n),ed(r))}function ed(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Eu.values().next().value;r.Eu.delete(e);const t=new O(J.fromString(e)),n=r.fu.next();r.Au.set(n,new EC(t)),r.du=r.du.insert(t,n),Mc(r.remoteStore,new zt(Je(Ws(t.path)),n,"TargetPurposeLimboResolution",nt.ce))}}async function rn(r,e,t){const n=M(r),s=[],i=[],o=[];n.Tu.isEmpty()||(n.Tu.forEach(((a,l)=>{o.push(n.pu(l,e,t).then((u=>{if((u||t)&&n.isPrimaryClient){const d=u?!u.fromCache:t?.targetChanges.get(l.targetId)?.current;n.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(u){s.push(u);const d=Fh.As(l.targetId,u);i.push(d)}})))})),await Promise.all(o),n.Pu.H_(s),await(async function(l,u){const d=M(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(f=>A.forEach(u,(m=>A.forEach(m.Es,(y=>d.persistence.referenceDelegate.addReference(f,m.targetId,y))).next((()=>A.forEach(m.ds,(y=>d.persistence.referenceDelegate.removeReference(f,m.targetId,y)))))))))}catch(f){if(!zn(f))throw f;x(Uh,"Failed to update sequence numbers: "+f)}for(const f of u){const m=f.targetId;if(!f.fromCache){const y=d.Ms.get(m),S=y.snapshotVersion,N=y.withLastLimboFreeSnapshotVersion(S);d.Ms=d.Ms.insert(m,N)}}})(n.localStore,i))}async function DC(r,e){const t=M(r);if(!t.currentUser.isEqual(e)){x($n,"User change. New user:",e.toKey());const n=await wI(t.localStore,e);t.currentUser=e,(function(i,o){i.mu.forEach((a=>{a.forEach((l=>{l.reject(new D(R.CANCELLED,o))}))})),i.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await rn(t,n.Ls)}}function xC(r,e){const t=M(r),n=t.Au.get(e);if(n&&n.hu)return K().add(n.key);{let s=K();const i=t.Iu.get(e);if(!i)return s;for(const o of i){const a=t.Tu.get(o);s=s.unionWith(a.view.nu)}return s}}async function VC(r,e){const t=M(r),n=await Ya(t.localStore,e.query,!0),s=e.view.cu(n);return t.isPrimaryClient&&Vu(t,e.targetId,s.au),s}async function OC(r,e){const t=M(r);return bI(t.localStore,e).then((n=>rn(t,n)))}async function MC(r,e,t,n){const s=M(r),i=await(function(a,l){const u=M(a),d=M(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",(f=>d.er(f,l).next((m=>m?u.localDocuments.getDocuments(f,m):A.resolve(null)))))})(s.localStore,e);i!==null?(t==="pending"?await Qs(s.remoteStore):t==="acknowledged"||t==="rejected"?(Zh(s,e,n||null),Xh(s,e),(function(a,l){M(M(a).mutationQueue).ir(l)})(s.localStore,e)):U(6720,"Unknown batchState",{Su:t}),await rn(s,i)):x($n,"Cannot apply mutation batch with id: "+e)}async function LC(r,e){const t=M(r);if(Lc(t),td(t),e===!0&&t.gu!==!0){const n=t.sharedClientState.getAllActiveQueryTargets(),s=await Bm(t,n.toArray());t.gu=!0,await Du(t.remoteStore,!0);for(const i of s)Mc(t.remoteStore,i)}else if(e===!1&&t.gu!==!1){const n=[];let s=Promise.resolve();t.Iu.forEach(((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?n.push(o):s=s.then((()=>(Ds(t,o),Ns(t.localStore,o,!0)))),ks(t.remoteStore,o)})),await s,await Bm(t,n),(function(o){const a=M(o);a.Au.forEach(((l,u)=>{ks(a.remoteStore,u)})),a.Ru.Jr(),a.Au=new Map,a.du=new Ae(O.comparator)})(t),t.gu=!1,await Du(t.remoteStore,!1)}}async function Bm(r,e,t){const n=M(r),s=[],i=[];for(const o of e){let a;const l=n.Iu.get(o);if(l&&l.length!==0){a=await Ps(n.localStore,Je(l[0]));for(const u of l){const d=n.Tu.get(u),f=await VC(n,d);f.snapshot&&i.push(f.snapshot)}}else{const u=await SI(n.localStore,o);a=await Ps(n.localStore,u),await Jh(n,KI(u),o,!1,a.resumeToken)}s.push(a)}return n.Pu.H_(i),s}function KI(r){return Sy(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function FC(r){return(function(t){return M(M(t).persistence).Ts()})(M(r).localStore)}async function UC(r,e,t,n){const s=M(r);if(s.gu)return void x($n,"Ignoring unexpected query state notification.");const i=s.Iu.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await bI(s.localStore,Py(i[0])),a=Co.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Re.EMPTY_BYTE_STRING);await rn(s,o,a);break}case"rejected":await Ns(s.localStore,e,!0),Ds(s,e,n);break;default:U(64155,t)}}async function BC(r,e,t){const n=Lc(r);if(n.gu){for(const s of e){if(n.Iu.has(s)&&n.sharedClientState.isActiveQueryTarget(s)){x($n,"Adding an already active target "+s);continue}const i=await SI(n.localStore,s),o=await Ps(n.localStore,i);await Jh(n,KI(i),o.targetId,!1,o.resumeToken),Mc(n.remoteStore,o)}for(const s of t)n.Iu.has(s)&&await Ns(n.localStore,s,!1).then((()=>{ks(n.remoteStore,s),Ds(n,s)})).catch(Gn)}}function Lc(r){const e=M(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=WI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=xC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=RC.bind(null,e),e.Pu.H_=gC.bind(null,e.eventManager),e.Pu.yu=yC.bind(null,e.eventManager),e}function td(r){const e=M(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=CC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=PC.bind(null,e),e}function qC(r,e,t){const n=M(r);(async function(i,o,a){try{const l=await o.getMetadata();if(await(function(y,S){const N=M(y),k=Ne(S.createTime);return N.persistence.runTransaction("hasNewerBundle","readonly",(F=>N.Ii.getBundleMetadata(F,S.id))).then((F=>!!F&&F.createTime.compareTo(k)>=0))})(i.localStore,l))return await o.close(),a._completeWith((function(y){return{taskState:"Success",documentsLoaded:y.totalDocuments,bytesLoaded:y.totalBytes,totalDocuments:y.totalDocuments,totalBytes:y.totalBytes}})(l)),Promise.resolve(new Set);a._updateProgress(BI(l));const u=new Yh(l,o.serializer);let d=await o.bu();for(;d;){const m=await u.Ga(d);m&&a._updateProgress(m),d=await o.bu()}const f=await u.ja(i.localStore);return await rn(i,f.Ha,void 0),await(function(y,S){const N=M(y);return N.persistence.runTransaction("Save bundle","readwrite",(k=>N.Ii.saveBundleMetadata(k,S)))})(i.localStore,l),a._completeWith(f.progress),Promise.resolve(f.Ja)}catch(l){return mt($n,`Loading bundle failed with ${l}`),a._failWith(l),Promise.resolve(new Set)}})(n,e,t).then((s=>{n.sharedClientState.notifyBundleLoaded(s)}))}class xs{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Vr(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return TI(this.persistence,new EI,e.initialUser,this.serializer)}Cu(e){return new Oh(Oc.mi,this.serializer)}Du(e){return new kI}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}xs.provider={build:()=>new xs};class nd extends xs{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){q(this.persistence.referenceDelegate instanceof Qa,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new pI(n,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Qe.withCacheSize(this.cacheSizeBytes):Qe.DEFAULT;return new Oh((n=>Qa.mi(n,t)),this.serializer)}}class rd extends xs{constructor(e,t,n){super(),this.xu=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.xu.initialize(this,e),await td(this.xu.syncEngine),await Qs(this.xu.remoteStore),await this.persistence.Ji((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}vu(e){return TI(this.persistence,new EI,e.initialUser,this.serializer)}Fu(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new pI(n,e.asyncQueue,t)}Mu(e,t){const n=new nb(t,this.persistence);return new tb(e.asyncQueue,n)}Cu(e){const t=Lh(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?Qe.withCacheSize(this.cacheSizeBytes):Qe.DEFAULT;return new Mh(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,DI(),Sa(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Du(e){return new kI}}class HI extends rd{constructor(e,t){super(e,t,!1),this.xu=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.xu.syncEngine;this.sharedClientState instanceof zl&&(this.sharedClientState.syncEngine={Co:MC.bind(null,t),vo:UC.bind(null,t),Fo:BC.bind(null,t),Ts:FC.bind(null,t),Do:OC.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ji((async n=>{await LC(this.xu.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())}))}Du(e){const t=DI();if(!zl.v(t))throw new D(R.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Lh(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new zl(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class Ln{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Um(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=DC.bind(null,this.syncEngine),await Du(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new _C})()}createDatastore(e){const t=Vr(e.databaseInfo.databaseId),n=(function(i){return new XR(i)})(e.databaseInfo);return(function(i,o,a,l){return new nC(i,o,a,l)})(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return(function(n,s,i,o,a){return new sC(n,s,i,o,a)})(this.localStore,this.datastore,e.asyncQueue,(t=>Um(this.syncEngine,t,0)),(function(){return Dm.v()?new Dm:new HR})())}createSyncEngine(e,t){return(function(s,i,o,a,l,u,d){const f=new TC(s,i,o,a,l,u);return d&&(f.gu=!0),f})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const n=M(t);x(br,"RemoteStore shutting down."),n.Ea.add(5),await Hs(n),n.Aa.shutdown(),n.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Ln.provider={build:()=>new Ln};function qm(r,e=10240){let t=0;return{async read(){if(t<r.byteLength){const n={value:r.slice(t,t+e),done:!1};return t+=e,n}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Fc{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Pe("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(e,t){this.Bu=e,this.serializer=t,this.metadata=new ze,this.buffer=new Uint8Array,this.Lu=(function(){return new TextDecoder("utf-8")})(),this.ku().then((n=>{n&&n.$a()?this.metadata.resolve(n.Qa.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(n?.Qa)}`))}),(n=>this.metadata.reject(n)))}close(){return this.Bu.cancel()}async getMetadata(){return this.metadata.promise}async bu(){return await this.getMetadata(),this.ku()}async ku(){const e=await this.qu();if(e===null)return null;const t=this.Lu.decode(e),n=Number(t);isNaN(n)&&this.Qu(`length string (${t}) is not valid number`);const s=await this.$u(n);return new UI(JSON.parse(s),e.length+n)}Uu(){return this.buffer.findIndex((e=>e===123))}async qu(){for(;this.Uu()<0&&!await this.Ku(););if(this.buffer.length===0)return null;const e=this.Uu();e<0&&this.Qu("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async $u(e){for(;this.buffer.length<e;)await this.Ku()&&this.Qu("Reached the end of bundle when more is expected.");const t=this.Lu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Qu(e){throw this.Bu.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ku(){const e=await this.Bu.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class zC{constructor(e,t){this.bundleData=e,this.serializer=t,this.cursor=0,this.elements=[];let n=this.bu();if(!n||!n.$a())throw new Error(`The first element of the bundle is not a metadata object, it is
         ${JSON.stringify(n?.Qa)}`);this.metadata=n;do n=this.bu(),n!==null&&this.elements.push(n);while(n!==null)}getMetadata(){return this.metadata}Wu(){return this.elements}bu(){if(this.cursor===this.bundleData.length)return null;const e=this.qu(),t=this.$u(e);return new UI(JSON.parse(t),e)}$u(e){if(this.cursor+e>this.bundleData.length)throw new D(R.INTERNAL,"Reached the end of bundle when more is expected.");return this.bundleData.slice(this.cursor,this.cursor+=e)}qu(){const e=this.cursor;let t=this.cursor;for(;t<this.bundleData.length;){if(this.bundleData[t]==="{"){if(t===e)throw new Error("First character is a bracket and not a number");return this.cursor=t,Number(this.bundleData.slice(e,t))}t++}throw new Error("Reached the end of bundle when more is expected.")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new D(R.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await(async function(s,i){const o=M(s),a={documents:i.map((f=>oo(o.serializer,f)))},l=await o.Ho("BatchGetDocuments",o.serializer.databaseId,J.emptyPath(),a,i.length),u=new Map;l.forEach((f=>{const m=oR(o.serializer,f);u.set(m.key.toString(),m)}));const d=[];return i.forEach((f=>{const m=u.get(f.toString());q(!!m,55234,{key:f}),d.push(m)})),d})(this.datastore,e);return t.forEach((n=>this.recordVersion(n))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(n){this.lastTransactionError=n}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ks(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((t,n)=>{const s=O.fromPath(n);this.mutations.push(new bh(s,this.precondition(s)))})),await(async function(n,s){const i=M(n),o={writes:s.map((a=>ao(i.serializer,a)))};await i.Go("Commit",i.serializer.databaseId,J.emptyPath(),o)})(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw U(50498,{Gu:e.constructor.name});t=z.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new D(R.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(z.min())?Te.exists(!1):Te.updateTime(t):Te.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(z.min()))throw new D(R.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Te.updateTime(t)}return Te.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class WC{constructor(e,t,n,s,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=s,this.deferred=i,this.zu=n.maxAttempts,this.M_=new qh(this.asyncQueue,"transaction_retry")}ju(){this.zu-=1,this.Ju()}Ju(){this.M_.p_((async()=>{const e=new jC(this.datastore),t=this.Hu(e);t&&t.then((n=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(n)})).catch((s=>{this.Yu(s)}))))})).catch((n=>{this.Yu(n)}))}))}Hu(e){try{const t=this.updateFunction(e);return!wo(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Yu(e){this.zu>0&&this.Zu(e)?(this.zu-=1,this.asyncQueue.enqueueAndForget((()=>(this.Ju(),Promise.resolve())))):this.deferred.reject(e)}Zu(e){if(e?.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!zy(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn="FirestoreClient";class $C{constructor(e,t,n,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=s,this.user=Ue.UNAUTHENTICATED,this.clientId=dh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,(async o=>{x(Fn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(n,(o=>(x(Fn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ze;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Js(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Wl(r,e){r.asyncQueue.verifyOperationInProgress(),x(Fn,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener((async s=>{n.isEqual(s)||(await wI(e.localStore,s),n=s)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function Gm(r,e){r.asyncQueue.verifyOperationInProgress();const t=await sd(r);x(Fn,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((n=>Vm(e.remoteStore,n))),r.setAppCheckTokenChangeListener(((n,s)=>Vm(e.remoteStore,s))),r._onlineComponents=e}async function sd(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){x(Fn,"Using user provided OfflineComponentProvider");try{await Wl(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===R.FAILED_PRECONDITION||s.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;mt("Error using user provided cache. Falling back to memory cache: "+t),await Wl(r,new xs)}}else x(Fn,"Using default OfflineComponentProvider"),await Wl(r,new nd(void 0));return r._offlineComponents}async function Uc(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(x(Fn,"Using user provided OnlineComponentProvider"),await Gm(r,r._uninitializedComponentsProvider._online)):(x(Fn,"Using default OnlineComponentProvider"),await Gm(r,new Ln))),r._onlineComponents}function QI(r){return sd(r).then((e=>e.persistence))}function Xs(r){return sd(r).then((e=>e.localStore))}function YI(r){return Uc(r).then((e=>e.remoteStore))}function id(r){return Uc(r).then((e=>e.syncEngine))}function JI(r){return Uc(r).then((e=>e.datastore))}async function Vs(r){const e=await Uc(r),t=e.eventManager;return t.onListen=wC.bind(null,e.syncEngine),t.onUnlisten=AC.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=vC.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=SC.bind(null,e.syncEngine),t}function KC(r){return r.asyncQueue.enqueue((async()=>{const e=await QI(r),t=await YI(r);return e.setNetworkEnabled(!0),(function(s){const i=M(s);return i.Ea.delete(0),No(i)})(t)}))}function HC(r){return r.asyncQueue.enqueue((async()=>{const e=await QI(r),t=await YI(r);return e.setNetworkEnabled(!1),(async function(s){const i=M(s);i.Ea.add(0),await Hs(i),i.Ra.set("Offline")})(t)}))}function QC(r,e){const t=new ze;return r.asyncQueue.enqueueAndForget((async()=>(async function(s,i,o){try{const a=await(function(u,d){const f=M(u);return f.persistence.runTransaction("read document","readonly",(m=>f.localDocuments.getDocument(m,d)))})(s,i);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new D(R.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const l=Js(a,`Failed to get document '${i} from cache`);o.reject(l)}})(await Xs(r),e,t))),t.promise}function XI(r,e,t={}){const n=new ze;return r.asyncQueue.enqueueAndForget((async()=>(function(i,o,a,l,u){const d=new Fc({next:m=>{d.Nu(),o.enqueueAndForget((()=>Kh(i,f)));const y=m.docs.has(a);!y&&m.fromCache?u.reject(new D(R.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&m.fromCache&&l&&l.source==="server"?u.reject(new D(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new Qh(Ws(a.path),d,{includeMetadataChanges:!0,qa:!0});return $h(i,f)})(await Vs(r),r.asyncQueue,e,t,n))),n.promise}function YC(r,e){const t=new ze;return r.asyncQueue.enqueueAndForget((async()=>(async function(s,i,o){try{const a=await Ya(s,i,!0),l=new zI(i,a.Qs),u=l.ru(a.documents),d=l.applyChanges(u,!1);o.resolve(d.snapshot)}catch(a){const l=Js(a,`Failed to execute query '${i} against cache`);o.reject(l)}})(await Xs(r),e,t))),t.promise}function ZI(r,e,t={}){const n=new ze;return r.asyncQueue.enqueueAndForget((async()=>(function(i,o,a,l,u){const d=new Fc({next:m=>{d.Nu(),o.enqueueAndForget((()=>Kh(i,f))),m.fromCache&&l.source==="server"?u.reject(new D(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new Qh(a,d,{includeMetadataChanges:!0,qa:!0});return $h(i,f)})(await Vs(r),r.asyncQueue,e,t,n))),n.promise}function JC(r,e,t){const n=new ze;return r.asyncQueue.enqueueAndForget((async()=>{try{const s=await JI(r);n.resolve((async function(o,a,l){const u=M(o),{request:d,gt:f,parent:m}=eI(u.serializer,by(a),l);u.connection.$o||delete d.parent;const y=(await u.Ho("RunAggregationQuery",u.serializer.databaseId,m,d,1)).filter((N=>!!N.result));q(y.length===1,64727);const S=y[0].result?.aggregateFields;return Object.keys(S).reduce(((N,k)=>(N[f[k]]=S[k],N)),{})})(s,e,t))}catch(s){n.reject(s)}})),n.promise}function XC(r,e){const t=new Fc(e);return r.asyncQueue.enqueueAndForget((async()=>(function(s,i){M(s).Ca.add(i),i.next()})(await Vs(r),t))),()=>{t.Nu(),r.asyncQueue.enqueueAndForget((async()=>(function(s,i){M(s).Ca.delete(i)})(await Vs(r),t)))}}function ZC(r,e,t,n){const s=(function(o,a){let l;return l=typeof o=="string"?Wy().encode(o):o,(function(d,f){return new GC(d,f)})((function(d,f){if(d instanceof Uint8Array)return qm(d,f);if(d instanceof ArrayBuffer)return qm(new Uint8Array(d),f);if(d instanceof ReadableStream)return d.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")})(l),a)})(t,Vr(e));r.asyncQueue.enqueueAndForget((async()=>{qC(await id(r),s,n)}))}function eP(r,e){return r.asyncQueue.enqueue((async()=>(function(n,s){const i=M(n);return i.persistence.runTransaction("Get named query","readonly",(o=>i.Ii.getNamedQuery(o,s)))})(await Xs(r),e)))}function eE(r,e){return(function(n,s){return new zC(n,s)})(r,e)}function tP(r,e){return r.asyncQueue.enqueue((async()=>(async function(n,s){const i=M(n),o=i.indexManager,a=[];return i.persistence.runTransaction("Configure indexes","readwrite",(l=>o.getFieldIndexes(l).next((u=>(function(f,m,y,S,N){f=[...f],m=[...m],f.sort(y),m.sort(y);const k=f.length,F=m.length;let G=0,B=0;for(;G<F&&B<k;){const se=y(f[B],m[G]);se<0?N(f[B++]):se>0?S(m[G++]):(G++,B++)}for(;G<F;)S(m[G++]);for(;B<k;)N(f[B++])})(u,s,JS,(d=>{a.push(o.addFieldIndex(l,d))}),(d=>{a.push(o.deleteFieldIndex(l,d))})))).next((()=>A.waitFor(a)))))})(await Xs(r),e)))}function nP(r,e){return r.asyncQueue.enqueue((async()=>(function(n,s){M(n).Fs.Vs=s})(await Xs(r),e)))}function rP(r){return r.asyncQueue.enqueue((async()=>(function(t){const n=M(t),s=n.indexManager;return n.persistence.runTransaction("Delete All Indexes","readwrite",(i=>s.deleteAllFieldIndexes(i)))})(await Xs(r))))}/**
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
 */function tE(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE="firestore.googleapis.com",jm=!0;class Wm{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new D(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=nE,this.ssl=jm}else this.host=e.host,this.ssl=e.ssl??jm;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=lI;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<fI)throw new D(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}YS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=tE(e.experimentalLongPollingOptions??{}),(function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new D(R.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new D(R.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new D(R.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(n,s){return n.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ko{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wm({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new D(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new D(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wm(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new BS;switch(n.type){case"firstParty":return new jS(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new D(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const n=zm.get(t);n&&(x("ComponentProvider","Removing Datastore"),zm.delete(t),n.terminate())})(this),Promise.resolve()}}function sP(r,e,t,n={}){r=ee(r,ko);const s=Xt(e),i=r._getSettings(),o={...i,emulatorOptions:r._getEmulatorOptions()},a=`${e}:${t}`;s&&(mc(`https://${a}`),Xu("Firestore",!0)),i.host!==nE&&i.host!==a&&mt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:a,ssl:s,emulatorOptions:n};if(!pt(l,o)&&(r._setSettings(l),n.mockUserToken)){let u,d;if(typeof n.mockUserToken=="string")u=n.mockUserToken,d=Ue.MOCK_USER;else{u=W_(n.mockUserToken,r._app?.options.projectId);const f=n.mockUserToken.sub||n.mockUserToken.user_id;if(!f)throw new D(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new Ue(f)}r._authCredentials=new qS(new qg(u,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new je(this.firestore,e,this._query)}}class de{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Mt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new de(this.firestore,e,this._key)}toJSON(){return{type:de._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(xr(t,de._jsonSchema))return new de(e,n||null,new O(J.fromString(t.referencePath)))}}de._jsonSchemaVersion="firestore/documentReference/1.0",de._jsonSchema={type:De("string",de._jsonSchemaVersion),referencePath:De("string")};class Mt extends je{constructor(e,t,n){super(e,t,Ws(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new de(this.firestore,null,new O(e))}withConverter(e){return new Mt(this.firestore,e,this._path)}}function rD(r,e,...t){if(r=ie(r),fh("collection","path",e),r instanceof ko){const n=J.fromString(e,...t);return xp(n),new Mt(r,null,n)}{if(!(r instanceof de||r instanceof Mt))throw new D(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(J.fromString(e,...t));return xp(n),new Mt(r.firestore,null,n)}}function sD(r,e){if(r=ee(r,ko),fh("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new D(R.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new je(r,null,(function(n){return new en(J.emptyPath(),n)})(e))}function iP(r,e,...t){if(r=ie(r),arguments.length===1&&(e=dh.newId()),fh("doc","path",e),r instanceof ko){const n=J.fromString(e,...t);return Dp(n),new de(r,null,new O(n))}{if(!(r instanceof de||r instanceof Mt))throw new D(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(J.fromString(e,...t));return Dp(n),new de(r.firestore,r instanceof Mt?r.converter:null,new O(n))}}function iD(r,e){return r=ie(r),e=ie(e),(r instanceof de||r instanceof Mt)&&(e instanceof de||e instanceof Mt)&&r.firestore===e.firestore&&r.path===e.path&&r.converter===e.converter}function rE(r,e){return r=ie(r),e=ie(e),r instanceof je&&e instanceof je&&r.firestore===e.firestore&&So(r._query,e._query)&&r.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m="AsyncQueue";class Km{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new qh(this,"async_queue_retry"),this._c=()=>{const n=Sa();n&&x($m,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=e;const t=Sa();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Sa();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new ze;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!zn(e))throw e;x($m,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((n=>{throw this.nc=n,this.rc=!1,Pe("INTERNAL UNHANDLED ERROR: ",Hm(n)),n})).then((n=>(this.rc=!1,n))))));return this.ac=t,t}enqueueAfterDelay(e,t,n){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=Wh.createAndSchedule(this,e,t,n,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&U(47125,{Pc:Hm(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,n)=>t.targetTimeMs-n.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Hm(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
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
 */function cs(r){return(function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1})(r,["next","error","complete"])}class oP{constructor(){this._progressObserver={},this._taskCompletionResolver=new ze,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oD=-1;class me extends ko{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new Km,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Km(e),this._firestoreClient=void 0,await e}}}function aD(r,e,t){t||(t=no);const n=Gs(r,"firestore");if(n.isInitialized(t)){const s=n.getImmediate({identifier:t}),i=n.getOptions(t);if(pt(i,e))return s;throw new D(R.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new D(R.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<fI)throw new D(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&Xt(e.host)&&mc(e.host),n.initialize({options:e,instanceIdentifier:t})}function aP(r,e){const t=typeof r=="object"?r:th(),n=typeof r=="string"?r:e||no,s=Gs(t,"firestore").getImmediate({identifier:n});if(!s._initialized){const i=G_("firestore");i&&sP(s,...i)}return s}function Se(r){if(r._terminated)throw new D(R.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||sE(r),r._firestoreClient}function sE(r){const e=r._freezeSettings(),t=(function(s,i,o,a){return new Nb(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,tE(a.experimentalLongPollingOptions),a.useFetchStreams,a.isUsingEmulator)})(r._databaseId,r._app?.options.appId||"",r._persistenceKey,e);r._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new $C(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&(function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}})(r._componentsProvider))}function cD(r,e){mt("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=r._freezeSettings();return iE(r,Ln.provider,{build:n=>new rd(n,t.cacheSizeBytes,e?.forceOwnership)}),Promise.resolve()}async function lD(r){mt("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=r._freezeSettings();iE(r,Ln.provider,{build:t=>new HI(t,e.cacheSizeBytes)})}function iE(r,e,t){if((r=ee(r,me))._firestoreClient||r._terminated)throw new D(R.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(r._componentsProvider||r._getSettings().localCache)throw new D(R.FAILED_PRECONDITION,"SDK cache is already specified.");r._componentsProvider={_online:e,_offline:t},sE(r)}function uD(r){if(r._initialized&&!r._terminated)throw new D(R.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new ze;return r._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await(async function(n){if(!Vt.v())return Promise.resolve();const s=n+II;await Vt.delete(s)})(Lh(r._databaseId,r._persistenceKey)),e.resolve()}catch(t){e.reject(t)}})),e.promise}function hD(r){return(function(t){const n=new ze;return t.asyncQueue.enqueueAndForget((async()=>NC(await id(t),n))),n.promise})(Se(r=ee(r,me)))}function dD(r){return KC(Se(r=ee(r,me)))}function fD(r){return HC(Se(r=ee(r,me)))}function pD(r){return Rv(r.app,"firestore",r._databaseId.database),r._delete()}function Qm(r,e){const t=Se(r=ee(r,me)),n=new oP;return ZC(t,r._databaseId,e,n),n}function cP(r,e){return eP(Se(r=ee(r,me)),e).then((t=>t?new je(r,null,t.query):null))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class co{constructor(e="count",t){this._internalFieldPath=t,this.type="AggregateField",this.aggregateType=e}}class lP{constructor(e,t,n){this._userDataWriter=t,this._data=n,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new lt(Re.fromBase64String(e))}catch(t){throw new D(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new lt(Re.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:lt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(xr(e,lt._jsonSchema))return lt.fromBase64String(e.bytes)}}lt._jsonSchemaVersion="firestore/bytes/1.0",lt._jsonSchema={type:De("string",lt._jsonSchemaVersion),bytes:De("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new D(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ee(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function mD(){return new Or(lu)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new D(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new D(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return j(this._lat,e._lat)||j(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Lt._jsonSchemaVersion}}static fromJSON(e){if(xr(e,Lt._jsonSchema))return new Lt(e.latitude,e.longitude)}}Lt._jsonSchemaVersion="firestore/geoPoint/1.0",Lt._jsonSchema={type:De("string",Lt._jsonSchemaVersion),latitude:De("number"),longitude:De("number")};/**
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
 */class Tt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Tt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(xr(e,Tt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Tt(e.vectorValues);throw new D(R.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Tt._jsonSchemaVersion="firestore/vectorValue/1.0",Tt._jsonSchema={type:De("string",Tt._jsonSchemaVersion),vectorValues:De("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uP=/^__.*__$/;class hP{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new nn(e,this.data,this.fieldMask,t,this.fieldTransforms):new $s(e,this.data,t,this.fieldTransforms)}}class oE{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new nn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function aE(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U(40011,{Ac:r})}}class Bc{constructor(e,t,n,s,i,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Bc({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),n=this.Vc({path:t,fc:!1});return n.gc(e),n}yc(e){const t=this.path?.child(e),n=this.Vc({path:t,fc:!1});return n.Rc(),n}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return ec(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(aE(this.Ac)&&uP.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class dP{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Vr(e)}Cc(e,t,n,s=!1){return new Bc({Ac:e,methodName:t,Dc:n,path:Ee.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Lr(r){const e=r._freezeSettings(),t=Vr(r._databaseId);return new dP(r._databaseId,!!e.ignoreUndefinedProperties,t)}function qc(r,e,t,n,s,i={}){const o=r.Cc(i.merge||i.mergeFields?2:0,e,t,s);dd("Data must be an object, but it was:",o,n);const a=uE(n,o);let l,u;if(i.merge)l=new rt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const f of i.mergeFields){const m=lo(e,f,t);if(!o.contains(m))throw new D(R.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);dE(d,m)||d.push(m)}l=new rt(d),u=o.fieldTransforms.filter((f=>l.covers(f.field)))}else l=null,u=o.fieldTransforms;return new hP(new $e(a),l,u)}class Do extends Mr{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Do}}function cE(r,e,t){return new Bc({Ac:3,Dc:e.settings.Dc,methodName:r._methodName,fc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class od extends Mr{_toFieldTransform(e){return new Ro(e.path,new bs)}isEqual(e){return e instanceof od}}class ad extends Mr{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=cE(this,e,!0),n=this.vc.map((i=>Fr(i,t))),s=new Tr(n);return new Ro(e.path,s)}isEqual(e){return e instanceof ad&&pt(this.vc,e.vc)}}class cd extends Mr{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=cE(this,e,!0),n=this.vc.map((i=>Fr(i,t))),s=new wr(n);return new Ro(e.path,s)}isEqual(e){return e instanceof cd&&pt(this.vc,e.vc)}}class ld extends Mr{constructor(e,t){super(e),this.Fc=t}_toFieldTransform(e){const t=new Rs(e.serializer,Oy(e.serializer,this.Fc));return new Ro(e.path,t)}isEqual(e){return e instanceof ld&&this.Fc===e.Fc}}function ud(r,e,t,n){const s=r.Cc(1,e,t);dd("Data must be an object, but it was:",s,n);const i=[],o=$e.empty();jn(n,((l,u)=>{const d=Gc(e,l,t);u=ie(u);const f=s.yc(d);if(u instanceof Do)i.push(d);else{const m=Fr(u,f);m!=null&&(i.push(d),o.set(d,m))}}));const a=new rt(i);return new oE(o,a,s.fieldTransforms)}function hd(r,e,t,n,s,i){const o=r.Cc(1,e,t),a=[lo(e,n,t)],l=[s];if(i.length%2!=0)throw new D(R.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)a.push(lo(e,i[m])),l.push(i[m+1]);const u=[],d=$e.empty();for(let m=a.length-1;m>=0;--m)if(!dE(u,a[m])){const y=a[m];let S=l[m];S=ie(S);const N=o.yc(y);if(S instanceof Do)u.push(y);else{const k=Fr(S,N);k!=null&&(u.push(y),d.set(y,k))}}const f=new rt(u);return new oE(d,f,o.fieldTransforms)}function lE(r,e,t,n=!1){return Fr(t,r.Cc(n?4:3,e))}function Fr(r,e){if(hE(r=ie(r)))return dd("Unsupported field value:",e,r),uE(r,e);if(r instanceof Mr)return(function(n,s){if(!aE(s.Ac))throw s.Sc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(n,s){const i=[];let o=0;for(const a of n){let l=Fr(a,s.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}})(r,e)}return(function(n,s){if((n=ie(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Oy(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ce.fromDate(n);return{timestampValue:Cs(s.serializer,i)}}if(n instanceof ce){const i=new ce(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Cs(s.serializer,i)}}if(n instanceof Lt)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof lt)return{bytesValue:Hy(s.serializer,n._byteString)};if(n instanceof de){const i=s.databaseId,o=n.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:kh(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof Tt)return(function(o,a){return{mapValue:{fields:{[Eh]:{stringValue:Th},[vs]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw a.Sc("VectorValues must only contain numeric values.");return Sh(a.serializer,u)}))}}}}}})(n,s);throw s.Sc(`Unsupported field value: ${Ec(n)}`)})(r,e)}function uE(r,e){const t={};return cy(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):jn(r,((n,s)=>{const i=Fr(s,e.mc(n));i!=null&&(t[n]=i)})),{mapValue:{fields:t}}}function hE(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof ce||r instanceof Lt||r instanceof lt||r instanceof de||r instanceof Mr||r instanceof Tt)}function dd(r,e,t){if(!hE(t)||!zg(t)){const n=Ec(t);throw n==="an object"?e.Sc(r+" a custom object"):e.Sc(r+" "+n)}}function lo(r,e,t){if((e=ie(e))instanceof Or)return e._internalPath;if(typeof e=="string")return Gc(r,e);throw ec("Field path arguments must be of type string or ",r,!1,void 0,t)}const fP=new RegExp("[~\\*/\\[\\]]");function Gc(r,e,t){if(e.search(fP)>=0)throw ec(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Or(...e.split("."))._internalPath}catch{throw ec(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function ec(r,e,t,n,s){const i=n&&!n.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${n}`),o&&(l+=` in document ${s}`),l+=")"),new D(R.INVALID_ARGUMENT,a+r+l)}function dE(r,e){return r.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,t,n,s,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new de(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new pP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(zc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class pP extends uo{data(){return super.data()}}function zc(r,e){return typeof e=="string"?Gc(r,e):e instanceof Or?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fE(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new D(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class fd{}class xo extends fd{}function _D(r,e,...t){let n=[];e instanceof fd&&n.push(e),n=n.concat(t),(function(i){const o=i.filter((l=>l instanceof Zs)).length,a=i.filter((l=>l instanceof Vo)).length;if(o>1||o>0&&a>0)throw new D(R.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(n);for(const s of n)r=s._apply(r);return r}class Vo extends xo{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Vo(e,t,n)}_apply(e){const t=this._parse(e);return mE(e._query,t),new je(e.firestore,e.converter,Tu(e._query,t))}_parse(e){const t=Lr(e.firestore);return(function(i,o,a,l,u,d,f){let m;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new D(R.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Jm(f,d);const S=[];for(const N of f)S.push(Ym(l,i,N));m={arrayValue:{values:S}}}else m=Ym(l,i,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Jm(f,d),m=lE(a,o,f,d==="in"||d==="not-in");return te.create(u,d,m)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function gD(r,e,t){const n=e,s=zc("where",r);return Vo._create(s,n,t)}class Zs extends fd{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Zs(e,t)}_parse(e){const t=this._queryConstraints.map((n=>n._parse(e))).filter((n=>n.getFilters().length>0));return t.length===1?t[0]:le.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let o=s;const a=i.getFlattenedFilters();for(const l of a)mE(o,l),o=Tu(o,l)})(e._query,t),new je(e.firestore,e.converter,Tu(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function yD(...r){return r.forEach((e=>_E("or",e))),Zs._create("or",r)}function ID(...r){return r.forEach((e=>_E("and",e))),Zs._create("and",r)}class pd extends xo{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new pd(e,t)}_apply(e){const t=(function(s,i,o){if(s.startAt!==null)throw new D(R.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new D(R.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new io(i,o)})(e._query,this._field,this._direction);return new je(e.firestore,e.converter,(function(s,i){const o=s.explicitOrderBy.concat([i]);return new en(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,t))}}function ED(r,e="asc"){const t=e,n=zc("orderBy",r);return pd._create(n,t)}class jc extends xo{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new jc(e,t,n)}_apply(e){return new je(e.firestore,e.converter,Wa(e._query,this._limit,this._limitType))}}function TD(r){return jg("limit",r),jc._create("limit",r,"F")}function wD(r){return jg("limitToLast",r),jc._create("limitToLast",r,"L")}class Wc extends xo{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new Wc(e,t,n)}_apply(e){const t=pE(e,this.type,this._docOrFields,this._inclusive);return new je(e.firestore,e.converter,(function(s,i){return new en(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)})(e._query,t))}}function vD(...r){return Wc._create("startAt",r,!0)}function AD(...r){return Wc._create("startAfter",r,!1)}class $c extends xo{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new $c(e,t,n)}_apply(e){const t=pE(e,this.type,this._docOrFields,this._inclusive);return new je(e.firestore,e.converter,(function(s,i){return new en(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,i)})(e._query,t))}}function SD(...r){return $c._create("endBefore",r,!1)}function bD(...r){return $c._create("endAt",r,!0)}function pE(r,e,t,n){if(t[0]=ie(t[0]),t[0]instanceof uo)return(function(i,o,a,l,u){if(!l)throw new D(R.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const d=[];for(const f of as(i))if(f.field.isKeyField())d.push(Ir(o,l.key));else{const m=l.data.field(f.field);if(Sc(m))throw new D(R.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(m===null){const y=f.field.canonicalString();throw new D(R.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${y}' (used as the orderBy) does not exist.`)}d.push(m)}return new On(d,u)})(r._query,r.firestore._databaseId,e,t[0]._document,n);{const s=Lr(r.firestore);return(function(o,a,l,u,d,f){const m=o.explicitOrderBy;if(d.length>m.length)throw new D(R.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const y=[];for(let S=0;S<d.length;S++){const N=d[S];if(m[S].field.isKeyField()){if(typeof N!="string")throw new D(R.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof N}`);if(!vh(o)&&N.indexOf("/")!==-1)throw new D(R.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${N}' contains a slash.`);const k=o.path.child(J.fromString(N));if(!O.isDocumentKey(k))throw new D(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${k}' is not because it contains an odd number of segments.`);const F=new O(k);y.push(Ir(a,F))}else{const k=lE(l,u,N);y.push(k)}}return new On(y,f)})(r._query,r.firestore._databaseId,s,e,t,n)}}function Ym(r,e,t){if(typeof(t=ie(t))=="string"){if(t==="")throw new D(R.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!vh(e)&&t.indexOf("/")!==-1)throw new D(R.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(J.fromString(t));if(!O.isDocumentKey(n))throw new D(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Ir(r,new O(n))}if(t instanceof de)return Ir(r,t._key);throw new D(R.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ec(t)}.`)}function Jm(r,e){if(!Array.isArray(r)||r.length===0)throw new D(R.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function mE(r,e){const t=(function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null})(r.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new D(R.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new D(R.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function _E(r,e){if(!(e instanceof Vo||e instanceof Zs))throw new D(R.INVALID_ARGUMENT,`Function ${r}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class gE{convertValue(e,t="none"){switch(xn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ie(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Yt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw U(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return jn(e,((s,i)=>{n[s]=this.convertValue(i,t)})),n}convertVectorValue(e){const t=e.fields?.[vs].arrayValue?.values?.map((n=>Ie(n.doubleValue)));return new Tt(t)}convertGeoPoint(e){return new Lt(Ie(e.latitude),Ie(e.longitude))}convertArray(e,t){return(e.values||[]).map((n=>this.convertValue(n,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=bc(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(to(e));default:return null}}convertTimestamp(e){const t=Qt(e);return new ce(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=J.fromString(e);q(sI(n),9688,{name:e});const s=new yr(n.get(1),n.get(3)),i=new O(n.popFirst(5));return s.isEqual(t)||Pe(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(r,e,t){let n;return n=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,n}class md extends gE{constructor(e){super(),this.firestore=e}convertBytes(e){return new lt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new de(this.firestore,null,t)}}/**
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
 */function RD(r){return new co("sum",lo("sum",r))}function CD(r){return new co("avg",lo("average",r))}function mP(){return new co("count")}function PD(r,e){return r instanceof co&&e instanceof co&&r.aggregateType===e.aggregateType&&r._internalFieldPath?.canonicalString()===e._internalFieldPath?.canonicalString()}function ND(r,e){return rE(r.query,e.query)&&pt(r.data(),e.data())}/**
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
 */const yE="NOT SUPPORTED";class wn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ut extends uo{constructor(e,t,n,s,i,o){super(e,t,n,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ba(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(zc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new D(R.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ut._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}function kD(r,e,t){if(xr(e,ut._jsonSchema)){if(e.bundle===yE)throw new D(R.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.");const n=Vr(r._databaseId),s=eE(e.bundle,n),i=s.Wu(),o=new Yh(s.getMetadata(),n);for(const d of i)o.Ga(d);const a=o.documents;if(a.length!==1)throw new D(R.INVALID_ARGUMENT,`Expected bundle data to contain 1 document, but it contains ${a.length} documents.`);const l=Nc(n,a[0].document),u=new O(J.fromString(e.bundleName));return new ut(r,new md(r),u,l,new wn(!1,!1),t||null)}}ut._jsonSchemaVersion="firestore/documentSnapshot/1.0",ut._jsonSchema={type:De("string",ut._jsonSchemaVersion),bundleSource:De("string","DocumentSnapshot"),bundleName:De("string"),bundle:De("string")};class ba extends ut{data(e={}){return super.data(e)}}class ht{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new wn(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new ba(this._firestore,this._userDataWriter,n.key,n,new wn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new D(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((a=>{const l=new ba(s._firestore,s._userDataWriter,a.doc.key,a.doc,new wn(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((a=>i||a.type!==3)).map((a=>{const l=new ba(s._firestore,s._userDataWriter,a.doc.key,a.doc,new wn(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:_P(a.type),doc:l,oldIndex:u,newIndex:d}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new D(R.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ht._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=dh.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),n.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function DD(r,e,t){if(xr(e,ht._jsonSchema)){if(e.bundle===yE)throw new D(R.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.");const n=Vr(r._databaseId),s=eE(e.bundle,n),i=s.Wu(),o=new Yh(s.getMetadata(),n);for(const m of i)o.Ga(m);if(o.queries.length!==1)throw new D(R.INVALID_ARGUMENT,`Snapshot data expected 1 query but found ${o.queries.length} queries.`);const a=Dc(o.queries[0].bundledQuery),l=o.documents;let u=new mr;l.map((m=>{const y=Nc(n,m.document);u=u.add(y)}));const d=Rr.fromInitialDocuments(a,u,K(),!1,!1),f=new je(r,t||null,a);return new ht(r,new md(r),f,d)}}function _P(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U(61501,{type:r})}}function xD(r,e){return r instanceof ut&&e instanceof ut?r._firestore===e._firestore&&r._key.isEqual(e._key)&&(r._document===null?e._document===null:r._document.isEqual(e._document))&&r._converter===e._converter:r instanceof ht&&e instanceof ht&&r._firestore===e._firestore&&rE(r.query,e.query)&&r.metadata.isEqual(e.metadata)&&r._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VD(r){r=ee(r,de);const e=ee(r.firestore,me);return XI(Se(e),r._key).then((t=>_d(e,r,t)))}ht._jsonSchemaVersion="firestore/querySnapshot/1.0",ht._jsonSchema={type:De("string",ht._jsonSchemaVersion),bundleSource:De("string","QuerySnapshot"),bundleName:De("string"),bundle:De("string")};class Kn extends gE{constructor(e){super(),this.firestore=e}convertBytes(e){return new lt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new de(this.firestore,null,t)}}function OD(r){r=ee(r,de);const e=ee(r.firestore,me),t=Se(e),n=new Kn(e);return QC(t,r._key).then((s=>new ut(e,n,r._key,s,new wn(s!==null&&s.hasLocalMutations,!0),r.converter)))}function MD(r){r=ee(r,de);const e=ee(r.firestore,me);return XI(Se(e),r._key,{source:"server"}).then((t=>_d(e,r,t)))}function LD(r){r=ee(r,je);const e=ee(r.firestore,me),t=Se(e),n=new Kn(e);return fE(r._query),ZI(t,r._query).then((s=>new ht(e,n,r,s)))}function FD(r){r=ee(r,je);const e=ee(r.firestore,me),t=Se(e),n=new Kn(e);return YC(t,r._query).then((s=>new ht(e,n,r,s)))}function UD(r){r=ee(r,je);const e=ee(r.firestore,me),t=Se(e),n=new Kn(e);return ZI(t,r._query,{source:"server"}).then((s=>new ht(e,n,r,s)))}function BD(r,e,t){r=ee(r,de);const n=ee(r.firestore,me),s=Kc(r.converter,e,t);return Oo(n,[qc(Lr(n),"setDoc",r._key,s,r.converter!==null,t).toMutation(r._key,Te.none())])}function qD(r,e,t,...n){r=ee(r,de);const s=ee(r.firestore,me),i=Lr(s);let o;return o=typeof(e=ie(e))=="string"||e instanceof Or?hd(i,"updateDoc",r._key,e,t,n):ud(i,"updateDoc",r._key,e),Oo(s,[o.toMutation(r._key,Te.exists(!0))])}function GD(r){return Oo(ee(r.firestore,me),[new Ks(r._key,Te.none())])}function zD(r,e){const t=ee(r.firestore,me),n=iP(r),s=Kc(r.converter,e);return Oo(t,[qc(Lr(r.firestore),"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,Te.exists(!1))]).then((()=>n))}function Xm(r,...e){r=ie(r);let t={includeMetadataChanges:!1,source:"default"},n=0;typeof e[n]!="object"||cs(e[n])||(t=e[n++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(cs(e[n])){const l=e[n];e[n]=l.next?.bind(l),e[n+1]=l.error?.bind(l),e[n+2]=l.complete?.bind(l)}let i,o,a;if(r instanceof de)o=ee(r.firestore,me),a=Ws(r._key.path),i={next:l=>{e[n]&&e[n](_d(o,r,l))},error:e[n+1],complete:e[n+2]};else{const l=ee(r,je);o=ee(l.firestore,me),a=l._query;const u=new Kn(o);i={next:d=>{e[n]&&e[n](new ht(o,u,l,d))},error:e[n+1],complete:e[n+2]},fE(r._query)}return(function(u,d,f,m){const y=new Fc(m),S=new Qh(d,y,f);return u.asyncQueue.enqueueAndForget((async()=>$h(await Vs(u),S))),()=>{y.Nu(),u.asyncQueue.enqueueAndForget((async()=>Kh(await Vs(u),S)))}})(Se(o),a,s,i)}function jD(r,e,...t){const n=ie(r),s=(function(l){const u={bundle:"",bundleName:"",bundleSource:""},d=["bundle","bundleName","bundleSource"];for(const f of d){if(!(f in l)){u.error=`snapshotJson missing required field: ${f}`;break}const m=l[f];if(typeof m!="string"){u.error=`snapshotJson field '${f}' must be a string.`;break}if(m.length===0){u.error=`snapshotJson field '${f}' cannot be an empty string.`;break}f==="bundle"?u.bundle=m:f==="bundleName"?u.bundleName=m:f==="bundleSource"&&(u.bundleSource=m)}return u})(e);if(s.error)throw new D(R.INVALID_ARGUMENT,s.error);let i,o=0;if(typeof t[o]!="object"||cs(t[o])||(i=t[o++]),s.bundleSource==="QuerySnapshot"){let a=null;if(typeof t[o]=="object"&&cs(t[o])){const l=t[o++];a={next:l.next,error:l.error,complete:l.complete}}else a={next:t[o++],error:t[o++],complete:t[o++]};return(function(u,d,f,m,y){let S,N=!1;return Qm(u,d.bundle).then((()=>cP(u,d.bundleName))).then((F=>{F&&!N&&(y&&F.withConverter(y),S=Xm(F,f||{},m))})).catch((F=>(m.error&&m.error(F),()=>{}))),()=>{N||(N=!0,S&&S())}})(n,s,i,a,t[o])}if(s.bundleSource==="DocumentSnapshot"){let a=null;if(typeof t[o]=="object"&&cs(t[o])){const l=t[o++];a={next:l.next,error:l.error,complete:l.complete}}else a={next:t[o++],error:t[o++],complete:t[o++]};return(function(u,d,f,m,y){let S,N=!1;return Qm(u,d.bundle).then((()=>{if(!N){const F=new de(u,y||null,O.fromPath(d.bundleName));S=Xm(F,f||{},m)}})).catch((F=>(m.error&&m.error(F),()=>{}))),()=>{N||(N=!0,S&&S())}})(n,s,i,a,t[o])}throw new D(R.INVALID_ARGUMENT,`unsupported bundle source: ${s.bundleSource}`)}function WD(r,e){return XC(Se(r=ee(r,me)),cs(e)?e:{next:e})}function Oo(r,e){return(function(n,s){const i=new ze;return n.asyncQueue.enqueueAndForget((async()=>bC(await id(n),s,i))),i.promise})(Se(r),e)}function _d(r,e,t){const n=t.docs.get(e._key),s=new Kn(r);return new ut(r,s,e._key,n,new wn(t.hasPendingWrites,t.fromCache),e.converter)}function $D(r){return gP(r,{count:mP()})}function gP(r,e){const t=ee(r.firestore,me),n=Se(t),s=ay(e,((i,o)=>new Gy(o,i.aggregateType,i._internalFieldPath)));return JC(n,r._query,s).then((i=>(function(a,l,u){const d=new Kn(a);return new lP(l,d,u)})(t,r,i)))}class yP{constructor(e){this.kind="memory",this._onlineComponentProvider=Ln.provider,this._offlineComponentProvider=e?.garbageCollector?e.garbageCollector._offlineComponentProvider:{build:()=>new nd(void 0)}}toJSON(){return{kind:this.kind}}}class IP{constructor(e){let t;this.kind="persistent",e?.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=AP(void 0),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class EP{constructor(){this.kind="memoryEager",this._offlineComponentProvider=xs.provider}toJSON(){return{kind:this.kind}}}class TP{constructor(e){this.kind="memoryLru",this._offlineComponentProvider={build:()=>new nd(e)}}toJSON(){return{kind:this.kind}}}function KD(){return new EP}function HD(r){return new TP(r?.cacheSizeBytes)}function QD(r){return new yP(r)}function YD(r){return new IP(r)}class wP{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Ln.provider,this._offlineComponentProvider={build:t=>new rd(t,e?.cacheSizeBytes,this.forceOwnership)}}}class vP{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Ln.provider,this._offlineComponentProvider={build:t=>new HI(t,e?.cacheSizeBytes)}}}function AP(r){return new wP(r?.forceOwnership)}function JD(){return new vP}/**
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
 */const SP={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bP{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Lr(e)}set(e,t,n){this._verifyNotCommitted();const s=vn(e,this._firestore),i=Kc(s.converter,t,n),o=qc(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,n);return this._mutations.push(o.toMutation(s._key,Te.none())),this}update(e,t,n,...s){this._verifyNotCommitted();const i=vn(e,this._firestore);let o;return o=typeof(t=ie(t))=="string"||t instanceof Or?hd(this._dataReader,"WriteBatch.update",i._key,t,n,s):ud(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,Te.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=vn(e,this._firestore);return this._mutations=this._mutations.concat(new Ks(t._key,Te.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new D(R.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function vn(r,e){if((r=ie(r)).firestore!==e)throw new D(R.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Lr(e)}get(e){const t=vn(e,this._firestore),n=new md(this._firestore);return this._transaction.lookup([t._key]).then((s=>{if(!s||s.length!==1)return U(24041);const i=s[0];if(i.isFoundDocument())return new uo(this._firestore,n,i.key,i,t.converter);if(i.isNoDocument())return new uo(this._firestore,n,t._key,null,t.converter);throw U(18433,{doc:i})}))}set(e,t,n){const s=vn(e,this._firestore),i=Kc(s.converter,t,n),o=qc(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,n);return this._transaction.set(s._key,o),this}update(e,t,n,...s){const i=vn(e,this._firestore);let o;return o=typeof(t=ie(t))=="string"||t instanceof Or?hd(this._dataReader,"Transaction.update",i._key,t,n,s):ud(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,o),this}delete(e){const t=vn(e,this._firestore);return this._transaction.delete(t._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CP extends RP{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=vn(e,this._firestore),n=new Kn(this._firestore);return super.get(e).then((s=>new ut(this._firestore,n,t._key,s._document,new wn(!1,!1),t.converter)))}}function XD(r,e,t){r=ee(r,me);const n={...SP,...t};return(function(i){if(i.maxAttempts<1)throw new D(R.INVALID_ARGUMENT,"Max attempts must be at least 1")})(n),(function(i,o,a){const l=new ze;return i.asyncQueue.enqueueAndForget((async()=>{const u=await JI(i);new WC(i.asyncQueue,u,a,o,l).ju()})),l.promise})(Se(r),(s=>e(new CP(r,s))),n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZD(){return new Do("deleteField")}function ex(){return new od("serverTimestamp")}function tx(...r){return new ad("arrayUnion",r)}function nx(...r){return new cd("arrayRemove",r)}function rx(r){return new ld("increment",r)}function sx(r){return new Tt(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ix(r){return Se(r=ee(r,me)),new bP(r,(e=>Oo(r,e)))}/**
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
 */function ox(r,e){const t=Se(r=ee(r,me));if(!t._uninitializedComponentsProvider||t._uninitializedComponentsProvider._offline.kind==="memory")return mt("Cannot enable indexes when persistence is disabled"),Promise.resolve();const n=(function(i){const o=typeof i=="string"?(function(u){try{return JSON.parse(u)}catch(d){throw new D(R.INVALID_ARGUMENT,"Failed to parse JSON: "+d?.message)}})(i):i,a=[];if(Array.isArray(o.indexes))for(const l of o.indexes){const u=Zm(l,"collectionGroup"),d=[];if(Array.isArray(l.fields))for(const f of l.fields){const m=Gc("setIndexConfiguration",Zm(f,"fieldPath"));f.arrayConfig==="CONTAINS"?d.push(new fr(m,2)):f.order==="ASCENDING"?d.push(new fr(m,0)):f.order==="DESCENDING"&&d.push(new fr(m,1))}a.push(new gs(gs.UNKNOWN_ID,u,d,ys.empty()))}return a})(e);return tP(t,n)}function Zm(r,e){if(typeof r[e]!="string")throw new D(R.INVALID_ARGUMENT,"Missing string value for: "+e);return r[e]}/**
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
 */class PP{constructor(e){this._firestore=e,this.type="PersistentCacheIndexManager"}}function ax(r){r=ee(r,me);const e=e_.get(r);if(e)return e;if(Se(r)._uninitializedComponentsProvider?._offline.kind!=="persistent")return null;const n=new PP(r);return e_.set(r,n),n}function cx(r){IE(r,!0)}function lx(r){IE(r,!1)}function ux(r){rP(Se(r._firestore)).then((e=>x("deleting all persistent cache indexes succeeded"))).catch((e=>mt("deleting all persistent cache indexes failed",e)))}function IE(r,e){nP(Se(r._firestore),e).then((t=>x(`setting persistent cache index auto creation isEnabled=${e} succeeded`))).catch((t=>mt(`setting persistent cache index auto creation isEnabled=${e} failed`,t)))}const e_=new WeakMap;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hx(r){const e=Se(ee(r.firestore,me)),t=e._onlineComponents?.datastore.serializer;return t===void 0?null:kc(t,Je(r._query)).ft}function dx(r,e){const t=ay(e,((i,o)=>new Gy(o,i.aggregateType,i._internalFieldPath))),n=Se(ee(r.firestore,me)),s=n._onlineComponents?.datastore.serializer;return s===void 0?null:eI(s,by(r._query),t,!0).request}/**
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
 */class fx{constructor(){throw new Error("instances of this class should not be created")}static onExistenceFilterMismatch(e){return gd.instance.onExistenceFilterMismatch(e)}}class gd{constructor(){this.Mc=new Map}static get instance(){return la||(la=new gd,(function(t){if(wu)throw new Error("a TestingHooksSpi instance is already set");wu=t})(la)),la}lt(e){this.Mc.forEach((t=>t(e)))}onExistenceFilterMismatch(e){const t=Symbol(),n=this.Mc;return n.set(t,e),()=>n.delete(t)}}let la=null;(function(e,t=!0){(function(s){js=s})(Dr),_r(new kn("firestore",((n,{instanceIdentifier:s,options:i})=>{const o=n.getProvider("app").getImmediate(),a=new me(new GS(n.getProvider("auth-internal")),new WS(o,n.getProvider("app-check-internal")),(function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new D(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yr(u.options.projectId,d)})(o,s),o);return i={useFetchStreams:t,...i},a._setSettings(i),a}),"PUBLIC").setMultipleInstances(!0)),kt(Np,kp,e),kt(Np,kp,"esm2020")})();var t_={};const n_="@firebase/database",r_="1.1.0";/**
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
 */let EE="";function NP(r){EE=r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kP{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ge(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Hi(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DP{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ut(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE=function(r){try{if(typeof window<"u"&&typeof window[r]<"u"){const e=window[r];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new kP(e)}}catch{}return new DP},hr=TE("localStorage"),xP=TE("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls=new gc("@firebase/database"),VP=(function(){let r=1;return function(){return r++}})(),wE=function(r){const e=Nw(r),t=new bw;t.update(e);const n=t.digest();return Ju.encodeByteArray(n)},Mo=function(...r){let e="";for(let t=0;t<r.length;t++){const n=r[t];Array.isArray(n)||n&&typeof n=="object"&&typeof n.length=="number"?e+=Mo.apply(null,n):typeof n=="object"?e+=Ge(n):e+=n,e+=" "}return e};let zi=null,s_=!0;const OP=function(r,e){V(!0,"Can't turn on custom loggers persistently."),ls.logLevel=Z.VERBOSE,zi=ls.log.bind(ls)},qe=function(...r){if(s_===!0&&(s_=!1,zi===null&&xP.get("logging_enabled")===!0&&OP()),zi){const e=Mo.apply(null,r);zi(e)}},Lo=function(r){return function(...e){qe(r,...e)}},Ou=function(...r){const e="FIREBASE INTERNAL ERROR: "+Mo(...r);ls.error(e)},Jt=function(...r){const e=`FIREBASE FATAL ERROR: ${Mo(...r)}`;throw ls.error(e),new Error(e)},et=function(...r){const e="FIREBASE WARNING: "+Mo(...r);ls.warn(e)},MP=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&et("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Hc=function(r){return typeof r=="number"&&(r!==r||r===Number.POSITIVE_INFINITY||r===Number.NEGATIVE_INFINITY)},LP=function(r){if(document.readyState==="complete")r();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,r())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Os="[MIN_NAME]",Cr="[MAX_NAME]",Ur=function(r,e){if(r===e)return 0;if(r===Os||e===Cr)return-1;if(e===Os||r===Cr)return 1;{const t=i_(r),n=i_(e);return t!==null?n!==null?t-n===0?r.length-e.length:t-n:-1:n!==null?1:r<e?-1:1}},FP=function(r,e){return r===e?0:r<e?-1:1},Si=function(r,e){if(e&&r in e)return e[r];throw new Error("Missing required key ("+r+") in object: "+Ge(e))},yd=function(r){if(typeof r!="object"||r===null)return Ge(r);const e=[];for(const n in r)e.push(n);e.sort();let t="{";for(let n=0;n<e.length;n++)n!==0&&(t+=","),t+=Ge(e[n]),t+=":",t+=yd(r[e[n]]);return t+="}",t},vE=function(r,e){const t=r.length;if(t<=e)return[r];const n=[];for(let s=0;s<t;s+=e)s+e>t?n.push(r.substring(s,t)):n.push(r.substring(s,s+e));return n};function We(r,e){for(const t in r)r.hasOwnProperty(t)&&e(t,r[t])}const AE=function(r){V(!Hc(r),"Invalid JSON number");const e=11,t=52,n=(1<<e-1)-1;let s,i,o,a,l;r===0?(i=0,o=0,s=1/r===-1/0?1:0):(s=r<0,r=Math.abs(r),r>=Math.pow(2,1-n)?(a=Math.min(Math.floor(Math.log(r)/Math.LN2),n),i=a+n,o=Math.round(r*Math.pow(2,t-a)-Math.pow(2,t))):(i=0,o=Math.round(r/Math.pow(2,1-n-t))));const u=[];for(l=t;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(s?1:0),u.reverse();const d=u.join("");let f="";for(l=0;l<64;l+=8){let m=parseInt(d.substr(l,8),2).toString(16);m.length===1&&(m="0"+m),f=f+m}return f.toLowerCase()},UP=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},BP=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function qP(r,e){let t="Unknown Error";r==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":r==="permission_denied"?t="Client doesn't have permission to access the desired data.":r==="unavailable"&&(t="The service is unavailable");const n=new Error(r+" at "+e._path.toString()+": "+t);return n.code=r.toUpperCase(),n}const GP=new RegExp("^-?(0*)\\d{1,10}$"),zP=-2147483648,jP=2147483647,i_=function(r){if(GP.test(r)){const e=Number(r);if(e>=zP&&e<=jP)return e}return null},ei=function(r){try{r()}catch(e){setTimeout(()=>{const t=e.stack||"";throw et("Exception was thrown by user callback.",t),e},Math.floor(0))}},WP=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ji=function(r,e){const t=setTimeout(r,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class $P{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,gt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(n=>this.appCheck=n)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){et(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KP{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(qe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',et(e)}}class Ra{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ra.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id="5",SE="v",bE="s",RE="r",CE="f",PE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,NE="ls",kE="p",Mu="ac",DE="websocket",xE="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(e,t,n,s,i=!1,o="",a=!1,l=!1,u=null){this.secure=t,this.namespace=n,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=hr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&hr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function HP(r){return r.host!==r.internalHost||r.isCustomHost()||r.includeNamespaceInQueryParams}function OE(r,e,t){V(typeof e=="string","typeof type must == string"),V(typeof t=="object","typeof params must == object");let n;if(e===DE)n=(r.secure?"wss://":"ws://")+r.internalHost+"/.ws?";else if(e===xE)n=(r.secure?"https://":"http://")+r.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);HP(r)&&(t.ns=r.namespace);const s=[];return We(t,(i,o)=>{s.push(i+"="+o)}),n+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QP{constructor(){this.counters_={}}incrementCounter(e,t=1){Ut(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return lw(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l={},Kl={};function Ed(r){const e=r.toString();return $l[e]||($l[e]=new QP),$l[e]}function YP(r,e){const t=r.toString();return Kl[t]||(Kl[t]=e()),Kl[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JP{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const n=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<n.length;++s)n[s]&&ei(()=>{this.onMessage_(n[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_="start",XP="close",ZP="pLPCommand",eN="pRTLPCB",ME="id",LE="pw",FE="ser",tN="cb",nN="seg",rN="ts",sN="d",iN="dframe",UE=1870,BE=30,oN=UE-BE,aN=25e3,cN=3e4;class ns{constructor(e,t,n,s,i,o,a){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Lo(e),this.stats_=Ed(t),this.urlFn=l=>(this.appCheckToken&&(l[Mu]=this.appCheckToken),OE(t,xE,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new JP(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(cN)),LP(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Td((...i)=>{const[o,a,l,u,d]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===o_)this.id=a,this.password=l;else if(o===XP)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const n={};n[o_]="t",n[FE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(n[tN]=this.scriptTagHolder.uniqueCallbackIdentifier),n[SE]=Id,this.transportSessionId&&(n[bE]=this.transportSessionId),this.lastSessionId&&(n[NE]=this.lastSessionId),this.applicationId&&(n[kE]=this.applicationId),this.appCheckToken&&(n[Mu]=this.appCheckToken),typeof location<"u"&&location.hostname&&PE.test(location.hostname)&&(n[RE]=CE);const s=this.urlFn(n);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ns.forceAllow_=!0}static forceDisallow(){ns.forceDisallow_=!0}static isAvailable(){return ns.forceAllow_?!0:!ns.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!UP()&&!BP()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Ge(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=F_(t),s=vE(n,oN);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const n={};n[iN]="t",n[ME]=e,n[LE]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Ge(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Td{constructor(e,t,n,s){this.onDisconnect=n,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=VP(),window[ZP+this.uniqueCallbackIdentifier]=e,window[eN+this.uniqueCallbackIdentifier]=t,this.myIFrame=Td.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){qe("frame writing exception"),a.stack&&qe(a.stack),qe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||qe("No IE domain setting required")}catch{const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ME]=this.myID,e[LE]=this.myPW,e[FE]=this.currentSerial;let t=this.urlFn(e),n="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+BE+n.length<=UE;){const o=this.pendingSegs.shift();n=n+"&"+nN+s+"="+o.seg+"&"+rN+s+"="+o.ts+"&"+sN+s+"="+o.d,s++}return t=t+n,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(n,Math.floor(aN)),i=()=>{clearTimeout(s),n()};this.addTag(e,i)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const s=n.readyState;(!s||s==="loaded"||s==="complete")&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{qe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lN=16384,uN=45e3;let tc=null;typeof MozWebSocket<"u"?tc=MozWebSocket:typeof WebSocket<"u"&&(tc=WebSocket);class yt{constructor(e,t,n,s,i,o,a){this.connId=e,this.applicationId=n,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Lo(this.connId),this.stats_=Ed(t),this.connURL=yt.connectionURL_(t,o,a,s,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,s,i){const o={};return o[SE]=Id,typeof location<"u"&&location.hostname&&PE.test(location.hostname)&&(o[RE]=CE),t&&(o[bE]=t),n&&(o[NE]=n),s&&(o[Mu]=s),i&&(o[kE]=i),OE(e,DE,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,hr.set("previous_websocket_failure",!0);try{let n;Iw(),this.mySock=new tc(this.connURL,[],n)}catch(n){this.log_("Error instantiating WebSocket.");const s=n.message||n.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=n=>{this.handleIncomingFrame(n)},this.mySock.onerror=n=>{this.log_("WebSocket error.  Closing connection.");const s=n.message||n.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){yt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&tc!==null&&!yt.forceDisallow_}static previouslyFailed(){return hr.isInMemoryStorage||hr.get("previous_websocket_failure")===!0}markConnectionHealthy(){hr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const n=Hi(t);this.onMessage(n)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(V(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const n=this.extractFrameCount_(t);n!==null&&this.appendFrame_(n)}}send(e){this.resetKeepAlive();const t=Ge(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=vE(t,lN);n.length>1&&this.sendString_(String(n.length));for(let s=0;s<n.length;s++)this.sendString_(n[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(uN))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}yt.responsesRequiredToBeHealthy=2;yt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{static get ALL_TRANSPORTS(){return[ns,yt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=yt&&yt.isAvailable();let n=t&&!yt.previouslyFailed();if(e.webSocketOnly&&(t||et("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[yt];else{const s=this.transports_=[];for(const i of ho.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);ho.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ho.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hN=6e4,dN=5e3,fN=10*1024,pN=100*1024,Hl="t",a_="d",mN="s",c_="r",_N="e",l_="o",u_="a",h_="n",d_="p",gN="h";class yN{constructor(e,t,n,s,i,o,a,l,u,d){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Lo("c:"+this.id+":"),this.transportManager_=new ho(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=ji(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>pN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>fN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Hl in e){const t=e[Hl];t===u_?this.upgradeIfSecondaryHealthy_():t===c_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===l_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Si("t",e),n=Si("d",e);if(t==="c")this.onSecondaryControl_(n);else if(t==="d")this.pendingDataMessages.push(n);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:d_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:u_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:h_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Si("t",e),n=Si("d",e);t==="c"?this.onControl_(n):t==="d"&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Si(Hl,e);if(a_ in e){const n=e[a_];if(t===gN){const s={...n};this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===h_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===mN?this.onConnectionShutdown_(n):t===c_?this.onReset_(n):t===_N?Ou("Server Error: "+n):t===l_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ou("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Id!==n&&et("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),ji(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(hN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ji(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(dN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:d_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(hr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{put(e,t,n,s){}merge(e,t,n,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(e){this.allowedEvents_=e,this.listeners_={},V(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let s=0;s<n.length;s++)n[s].callback.apply(n[s].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const s=this.getInitialEvent(e);s&&t.apply(n,s)}off(e,t,n){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===t&&(!n||n===s[i].context)){s.splice(i,1);return}}validateEventType_(e){V(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc extends GE{static getInstance(){return new nc}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Zu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return V(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f_=32,p_=768;class he{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let n=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[n]=this.pieces_[s],n++);this.pieces_.length=n,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function ae(){return new he("")}function Q(r){return r.pieceNum_>=r.pieces_.length?null:r.pieces_[r.pieceNum_]}function Un(r){return r.pieces_.length-r.pieceNum_}function pe(r){let e=r.pieceNum_;return e<r.pieces_.length&&e++,new he(r.pieces_,e)}function wd(r){return r.pieceNum_<r.pieces_.length?r.pieces_[r.pieces_.length-1]:null}function IN(r){let e="";for(let t=r.pieceNum_;t<r.pieces_.length;t++)r.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(r.pieces_[t])));return e||"/"}function fo(r,e=0){return r.pieces_.slice(r.pieceNum_+e)}function zE(r){if(r.pieceNum_>=r.pieces_.length)return null;const e=[];for(let t=r.pieceNum_;t<r.pieces_.length-1;t++)e.push(r.pieces_[t]);return new he(e,0)}function we(r,e){const t=[];for(let n=r.pieceNum_;n<r.pieces_.length;n++)t.push(r.pieces_[n]);if(e instanceof he)for(let n=e.pieceNum_;n<e.pieces_.length;n++)t.push(e.pieces_[n]);else{const n=e.split("/");for(let s=0;s<n.length;s++)n[s].length>0&&t.push(n[s])}return new he(t,0)}function Y(r){return r.pieceNum_>=r.pieces_.length}function it(r,e){const t=Q(r),n=Q(e);if(t===null)return e;if(t===n)return it(pe(r),pe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+r+")")}function EN(r,e){const t=fo(r,0),n=fo(e,0);for(let s=0;s<t.length&&s<n.length;s++){const i=Ur(t[s],n[s]);if(i!==0)return i}return t.length===n.length?0:t.length<n.length?-1:1}function vd(r,e){if(Un(r)!==Un(e))return!1;for(let t=r.pieceNum_,n=e.pieceNum_;t<=r.pieces_.length;t++,n++)if(r.pieces_[t]!==e.pieces_[n])return!1;return!0}function ft(r,e){let t=r.pieceNum_,n=e.pieceNum_;if(Un(r)>Un(e))return!1;for(;t<r.pieces_.length;){if(r.pieces_[t]!==e.pieces_[n])return!1;++t,++n}return!0}class TN{constructor(e,t){this.errorPrefix_=t,this.parts_=fo(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=_c(this.parts_[n]);jE(this)}}function wN(r,e){r.parts_.length>0&&(r.byteLength_+=1),r.parts_.push(e),r.byteLength_+=_c(e),jE(r)}function vN(r){const e=r.parts_.pop();r.byteLength_-=_c(e),r.parts_.length>0&&(r.byteLength_-=1)}function jE(r){if(r.byteLength_>p_)throw new Error(r.errorPrefix_+"has a key path longer than "+p_+" bytes ("+r.byteLength_+").");if(r.parts_.length>f_)throw new Error(r.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+f_+") or object contains a cycle "+ir(r))}function ir(r){return r.parts_.length===0?"":"in property '"+r.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad extends GE{static getInstance(){return new Ad}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const n=!document[e];n!==this.visible_&&(this.visible_=n,this.trigger("visible",n))},!1)}getInitialEvent(e){return V(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi=1e3,AN=300*1e3,m_=30*1e3,SN=1.3,bN=3e4,RN="server_kill",__=3;class Wt extends qE{constructor(e,t,n,s,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Wt.nextPersistentConnectionId_++,this.log_=Lo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=bi,this.maxReconnectDelay_=AN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ad.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&nc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const s=++this.requestNumber_,i={r:s,a:e,b:t};this.log_(Ge(i)),V(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[s]=n)}get(e){this.initConnection_();const t=new Ct,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),V(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),V(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:n};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(e){const t=e.query,n=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+n+" for "+s);const i={p:n},o="q";e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,u=a.s;Wt.warnOnListenWarnings_(l,t),(this.listens.get(n)&&this.listens.get(n).get(s))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(n,s),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Ut(e,"w")){const n=ds(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();et(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Sw(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=m_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Aw(e)?"auth":"gauth",n={cred:e};this.authOverride_===null?n.noauth=!0:typeof this.authOverride_=="object"&&(n.authvar=this.authOverride_),this.sendRequest(t,n,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,n=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){const n=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+s),V(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,s)&&this.connected_&&this.sendUnlisten_(n,s,e._queryObject,t)}sendUnlisten_(e,t,n,s){this.log_("Unlisten on "+e+" for "+t);const i={p:e},o="n";s&&(i.q=n,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,s){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,n,s){this.putInternal("p",e,t,n,s)}merge(e,t,n,s){this.putInternal("m",e,t,n,s)}putInternal(e,t,n,s,i){this.initConnection_();const o={p:t,d:n};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,i=>{this.log_(t+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,n=>{if(n.s!=="ok"){const i=n.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ge(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Ou("Unrecognized action received from server: "+Ge(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){V(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=bi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=bi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>bN&&(this.reconnectDelay_=bi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*SN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Wt.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,n())},u=function(f){V(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,m]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?qe("getToken() completed but was canceled"):(qe("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=m&&m.token,a=new yN(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,y=>{et(y+" ("+this.repoInfo_.toString()+")"),this.interrupt(RN)},i))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&et(f),l())}}}interrupt(e){qe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){qe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Na(this.interruptReasons_)&&(this.reconnectDelay_=bi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;t?n=t.map(i=>yd(i)).join("$"):n="default";const s=this.removeListen_(e,n);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const n=new he(e).toString();let s;if(this.listens.has(n)){const i=this.listens.get(n);s=i.get(t),i.delete(t),i.size===0&&this.listens.delete(n)}else s=void 0;return s}onAuthRevoked_(e,t){qe("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=__&&(this.reconnectDelay_=m_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){qe("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=__&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+EE.replace(/\./g,"-")]=1,Zu()?e["framework.cordova"]=1:K_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=nc.getInstance().currentlyOnline();return Na(this.interruptReasons_)&&e}}Wt.nextPersistentConnectionId_=0;Wt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Qc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new X(Os,e),s=new X(Os,t);return this.compare(n,s)!==0}minPost(){return X.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ua;class WE extends Qc{static get __EMPTY_NODE(){return ua}static set __EMPTY_NODE(e){ua=e}compare(e,t){return Ur(e.name,t.name)}isDefinedOn(e){throw Bs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return X.MIN}maxPost(){return new X(Cr,ua)}makePost(e,t){return V(typeof e=="string","KeyIndex indexValue must always be a string."),new X(e,ua)}toString(){return".key"}}const us=new WE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e,t,n,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?n(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Be{constructor(e,t,n,s,i){this.key=e,this.value=t,this.color=n??Be.RED,this.left=s??ot.EMPTY_NODE,this.right=i??ot.EMPTY_NODE}copy(e,t,n,s,i){return new Be(e??this.key,t??this.value,n??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const i=n(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,t,n),null):i===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return ot.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,s;if(n=this,t(e,n.key)<0)!n.left.isEmpty()&&!n.left.isRed_()&&!n.left.left.isRed_()&&(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),!n.right.isEmpty()&&!n.right.isRed_()&&!n.right.left.isRed_()&&(n=n.moveRedRight_()),t(e,n.key)===0){if(n.right.isEmpty())return ot.EMPTY_NODE;s=n.right.min_(),n=n.copy(s.key,s.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Be.RED=!0;Be.BLACK=!1;class CN{copy(e,t,n,s,i){return this}insert(e,t,n){return new Be(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ot{constructor(e,t=ot.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ot(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Be.BLACK,null,null))}remove(e){return new ot(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Be.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),t===0)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,s=null;for(;!n.isEmpty();)if(t=this.comparator_(e,n.key),t===0){if(n.left.isEmpty())return s?s.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}else t<0?n=n.left:t>0&&(s=n,n=n.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ha(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ha(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ha(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ha(this.root_,null,this.comparator_,!0,e)}}ot.EMPTY_NODE=new CN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PN(r,e){return Ur(r.name,e.name)}function Sd(r,e){return Ur(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lu;function NN(r){Lu=r}const $E=function(r){return typeof r=="number"?"number:"+AE(r):"string:"+r},KE=function(r){if(r.isLeafNode()){const e=r.val();V(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ut(e,".sv"),"Priority must be a string or number.")}else V(r===Lu||r.isEmpty(),"priority of unexpected type.");V(r===Lu||r.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let g_;class Le{static set __childrenNodeConstructor(e){g_=e}static get __childrenNodeConstructor(){return g_}constructor(e,t=Le.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,V(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),KE(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Le(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Le.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Y(e)?this:Q(e)===".priority"?this.priorityNode_:Le.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Le.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=Q(e);return n===null?t:t.isEmpty()&&n!==".priority"?this:(V(n!==".priority"||Un(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(n,Le.__childrenNodeConstructor.EMPTY_NODE.updateChild(pe(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+$E(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=AE(this.value_):e+=this.value_,this.lazyHash_=wE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Le.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Le.__childrenNodeConstructor?-1:(V(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,s=Le.VALUE_TYPE_ORDER.indexOf(t),i=Le.VALUE_TYPE_ORDER.indexOf(n);return V(s>=0,"Unknown leaf type: "+t),V(i>=0,"Unknown leaf type: "+n),s===i?n==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Le.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let HE,QE;function kN(r){HE=r}function DN(r){QE=r}class xN extends Qc{compare(e,t){const n=e.node.getPriority(),s=t.node.getPriority(),i=n.compareTo(s);return i===0?Ur(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return X.MIN}maxPost(){return new X(Cr,new Le("[PRIORITY-POST]",QE))}makePost(e,t){const n=HE(e);return new X(t,new Le("[PRIORITY-POST]",n))}toString(){return".priority"}}const ve=new xN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VN=Math.log(2);class ON{constructor(e){const t=i=>parseInt(Math.log(i)/VN,10),n=i=>parseInt(Array(i+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=n(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const rc=function(r,e,t,n){r.sort(e);const s=function(l,u){const d=u-l;let f,m;if(d===0)return null;if(d===1)return f=r[l],m=t?t(f):f,new Be(m,f.node,Be.BLACK,null,null);{const y=parseInt(d/2,10)+l,S=s(l,y),N=s(y+1,u);return f=r[y],m=t?t(f):f,new Be(m,f.node,Be.BLACK,S,N)}},i=function(l){let u=null,d=null,f=r.length;const m=function(S,N){const k=f-S,F=f;f-=S;const G=s(k+1,F),B=r[k],se=t?t(B):B;y(new Be(se,B.node,N,null,G))},y=function(S){u?(u.left=S,u=S):(d=S,u=S)};for(let S=0;S<l.count;++S){const N=l.nextBitIsOne(),k=Math.pow(2,l.count-(S+1));N?m(k,Be.BLACK):(m(k,Be.BLACK),m(k,Be.RED))}return d},o=new ON(r.length),a=i(o);return new ot(n||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ql;const Yr={};class jt{static get Default(){return V(Yr&&ve,"ChildrenNode.ts has not been loaded"),Ql=Ql||new jt({".priority":Yr},{".priority":ve}),Ql}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=ds(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ot?t:null}hasIndex(e){return Ut(this.indexSet_,e.toString())}addIndex(e,t){V(e!==us,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let s=!1;const i=t.getIterator(X.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),n.push(o),o=i.getNext();let a;s?a=rc(n,e.getCompare()):a=Yr;const l=e.toString(),u={...this.indexSet_};u[l]=e;const d={...this.indexes_};return d[l]=a,new jt(d,u)}addToIndexes(e,t){const n=ka(this.indexes_,(s,i)=>{const o=ds(this.indexSet_,i);if(V(o,"Missing index implementation for "+i),s===Yr)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(X.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),rc(a,o.getCompare())}else return Yr;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new X(e.name,a))),l.insert(e,e.node)}});return new jt(n,this.indexSet_)}removeFromIndexes(e,t){const n=ka(this.indexes_,s=>{if(s===Yr)return s;{const i=t.get(e.name);return i?s.remove(new X(e.name,i)):s}});return new jt(n,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ri;class W{static get EMPTY_NODE(){return Ri||(Ri=new W(new ot(Sd),null,jt.Default))}constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&KE(this.priorityNode_),this.children_.isEmpty()&&V(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ri}updatePriority(e){return this.children_.isEmpty()?this:new W(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Ri:t}}getChild(e){const t=Q(e);return t===null?this:this.getImmediateChild(t).getChild(pe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(V(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const n=new X(e,t);let s,i;t.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(s=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const o=s.isEmpty()?Ri:this.priorityNode_;return new W(s,o,i)}}updateChild(e,t){const n=Q(e);if(n===null)return t;{V(Q(e)!==".priority"||Un(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(n).updateChild(pe(e),t);return this.updateImmediateChild(n,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,s=0,i=!0;if(this.forEachChild(ve,(o,a)=>{t[o]=a.val(e),n++,i&&W.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*n){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+$E(this.getPriority().val())+":"),this.forEachChild(ve,(t,n)=>{const s=n.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":wE(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const s=this.resolveIndex_(n);if(s){const i=s.getPredecessorKey(new X(e,t));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const n=t.minKey();return n&&n.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new X(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const n=t.maxKey();return n&&n.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new X(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,X.Wrap);let i=s.peek();for(;i!=null&&t.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,X.Wrap);let i=s.peek();for(;i!=null&&t.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Fo?-1:0}withIndex(e){if(e===us||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new W(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===us||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const n=this.getIterator(ve),s=t.getIterator(ve);let i=n.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=n.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===us?null:this.indexMap_.get(e.toString())}}W.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class MN extends W{constructor(){super(new ot(Sd),W.EMPTY_NODE,jt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return W.EMPTY_NODE}isEmpty(){return!1}}const Fo=new MN;Object.defineProperties(X,{MIN:{value:new X(Os,W.EMPTY_NODE)},MAX:{value:new X(Cr,Fo)}});WE.__EMPTY_NODE=W.EMPTY_NODE;Le.__childrenNodeConstructor=W;NN(Fo);DN(Fo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LN=!0;function Ce(r,e=null){if(r===null)return W.EMPTY_NODE;if(typeof r=="object"&&".priority"in r&&(e=r[".priority"]),V(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof r=="object"&&".value"in r&&r[".value"]!==null&&(r=r[".value"]),typeof r!="object"||".sv"in r){const t=r;return new Le(t,Ce(e))}if(!(r instanceof Array)&&LN){const t=[];let n=!1;if(We(r,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ce(a);l.isEmpty()||(n=n||!l.getPriority().isEmpty(),t.push(new X(o,l)))}}),t.length===0)return W.EMPTY_NODE;const i=rc(t,PN,o=>o.name,Sd);if(n){const o=rc(t,ve.getCompare());return new W(i,Ce(e),new jt({".priority":o},{".priority":ve}))}else return new W(i,Ce(e),jt.Default)}else{let t=W.EMPTY_NODE;return We(r,(n,s)=>{if(Ut(r,n)&&n.substring(0,1)!=="."){const i=Ce(s);(i.isLeafNode()||!i.isEmpty())&&(t=t.updateImmediateChild(n,i))}}),t.updatePriority(Ce(e))}}kN(Ce);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN extends Qc{constructor(e){super(),this.indexPath_=e,V(!Y(e)&&Q(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),s=this.extractChild(t.node),i=n.compareTo(s);return i===0?Ur(e.name,t.name):i}makePost(e,t){const n=Ce(e),s=W.EMPTY_NODE.updateChild(this.indexPath_,n);return new X(t,s)}maxPost(){const e=W.EMPTY_NODE.updateChild(this.indexPath_,Fo);return new X(Cr,e)}toString(){return fo(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN extends Qc{compare(e,t){const n=e.node.compareTo(t.node);return n===0?Ur(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return X.MIN}maxPost(){return X.MAX}makePost(e,t){const n=Ce(e);return new X(t,n)}toString(){return".value"}}const BN=new UN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YE(r){return{type:"value",snapshotNode:r}}function Ms(r,e){return{type:"child_added",snapshotNode:e,childName:r}}function po(r,e){return{type:"child_removed",snapshotNode:e,childName:r}}function mo(r,e,t){return{type:"child_changed",snapshotNode:e,childName:r,oldSnap:t}}function qN(r,e){return{type:"child_moved",snapshotNode:e,childName:r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e){this.index_=e}updateChild(e,t,n,s,i,o){V(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(n.getChild(s))&&a.isEmpty()===n.isEmpty()||(o!=null&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(po(t,a)):V(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ms(t,n)):o.trackChildChange(mo(t,n,a))),e.isLeafNode()&&n.isEmpty())?e:e.updateImmediateChild(t,n).withIndex(this.index_)}updateFullNode(e,t,n){return n!=null&&(e.isLeafNode()||e.forEachChild(ve,(s,i)=>{t.hasChild(s)||n.trackChildChange(po(s,i))}),t.isLeafNode()||t.forEachChild(ve,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||n.trackChildChange(mo(s,i,o))}else n.trackChildChange(Ms(s,i))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?W.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e){this.indexedFilter_=new bd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=_o.getStartPost_(e),this.endPost_=_o.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,s,i,o){return this.matches(new X(t,n))||(n=W.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,s,i,o)}updateFullNode(e,t,n){t.isLeafNode()&&(t=W.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(W.EMPTY_NODE);const i=this;return t.forEachChild(ve,(o,a)=>{i.matches(new X(o,a))||(s=s.updateImmediateChild(o,W.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GN{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const n=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?n<=0:n<0},this.withinEndPost=t=>{const n=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?n<=0:n<0},this.rangedFilter_=new _o(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,s,i,o){return this.rangedFilter_.matches(new X(t,n))||(n=W.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,s,i,o):this.fullLimitUpdateChild_(e,t,n,i,o)}updateFullNode(e,t,n){let s;if(t.isLeafNode()||t.isEmpty())s=W.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=W.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(W.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,W.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,s,i){let o;if(this.reverse_){const f=this.index_.getCompare();o=(m,y)=>f(y,m)}else o=this.index_.getCompare();const a=e;V(a.numChildren()===this.limit_,"");const l=new X(t,n),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(t)){const f=a.getImmediateChild(t);let m=s.getChildAfterChild(this.index_,u,this.reverse_);for(;m!=null&&(m.name===t||a.hasChild(m.name));)m=s.getChildAfterChild(this.index_,m,this.reverse_);const y=m==null?1:o(m,l);if(d&&!n.isEmpty()&&y>=0)return i?.trackChildChange(mo(t,n,f)),a.updateImmediateChild(t,n);{i?.trackChildChange(po(t,f));const N=a.updateImmediateChild(t,W.EMPTY_NODE);return m!=null&&this.rangedFilter_.matches(m)?(i?.trackChildChange(Ms(m.name,m.node)),N.updateImmediateChild(m.name,m.node)):N}}else return n.isEmpty()?e:d&&o(u,l)>=0?(i!=null&&(i.trackChildChange(po(u.name,u.node)),i.trackChildChange(Ms(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(u.name,W.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ve}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return V(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return V(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Os}hasEnd(){return this.endSet_}getIndexEndValue(){return V(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return V(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Cr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return V(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ve}copy(){const e=new Rd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function zN(r){return r.loadsAllData()?new bd(r.getIndex()):r.hasLimit()?new GN(r):new _o(r)}function y_(r){const e={};if(r.isDefault())return e;let t;if(r.index_===ve?t="$priority":r.index_===BN?t="$value":r.index_===us?t="$key":(V(r.index_ instanceof FN,"Unrecognized index type!"),t=r.index_.toString()),e.orderBy=Ge(t),r.startSet_){const n=r.startAfterSet_?"startAfter":"startAt";e[n]=Ge(r.indexStartValue_),r.startNameSet_&&(e[n]+=","+Ge(r.indexStartName_))}if(r.endSet_){const n=r.endBeforeSet_?"endBefore":"endAt";e[n]=Ge(r.indexEndValue_),r.endNameSet_&&(e[n]+=","+Ge(r.indexEndName_))}return r.limitSet_&&(r.isViewFromLeft()?e.limitToFirst=r.limit_:e.limitToLast=r.limit_),e}function I_(r){const e={};if(r.startSet_&&(e.sp=r.indexStartValue_,r.startNameSet_&&(e.sn=r.indexStartName_),e.sin=!r.startAfterSet_),r.endSet_&&(e.ep=r.indexEndValue_,r.endNameSet_&&(e.en=r.indexEndName_),e.ein=!r.endBeforeSet_),r.limitSet_){e.l=r.limit_;let t=r.viewFrom_;t===""&&(r.isViewFromLeft()?t="l":t="r"),e.vf=t}return r.index_!==ve&&(e.i=r.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc extends qE{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(V(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,n,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=s,this.log_=Lo("p:rest:"),this.listens_={}}listen(e,t,n,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=sc.getListenId_(e,n),a={};this.listens_[o]=a;const l=y_(e._queryParams);this.restRequest_(i+".json",l,(u,d)=>{let f=d;if(u===404&&(f=null,u=null),u===null&&this.onDataUpdate_(i,f,!1,n),ds(this.listens_,o)===a){let m;u?u===401?m="permission_denied":m="rest_error:"+u:m="ok",s(m,null)}})}unlisten(e,t){const n=sc.getListenId_(e,t);delete this.listens_[n]}get(e){const t=y_(e._queryParams),n=e._path.toString(),s=new Ct;return this.restRequest_(n+".json",t,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(n,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(t.auth=s.accessToken),i&&i.token&&(t.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+qs(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Hi(a.responseText)}catch{et("Failed to parse JSON response for "+o+": "+a.responseText)}n(null,l)}else a.status!==401&&a.status!==404&&et("Got unsuccessful REST response for "+o+" Status: "+a.status),n(a.status);n=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jN{constructor(){this.rootNode_=W.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(){return{value:null,children:new Map}}function ti(r,e,t){if(Y(e))r.value=t,r.children.clear();else if(r.value!==null)r.value=r.value.updateChild(e,t);else{const n=Q(e);r.children.has(n)||r.children.set(n,ic());const s=r.children.get(n);e=pe(e),ti(s,e,t)}}function Fu(r,e){if(Y(e))return r.value=null,r.children.clear(),!0;if(r.value!==null){if(r.value.isLeafNode())return!1;{const t=r.value;return r.value=null,t.forEachChild(ve,(n,s)=>{ti(r,new he(n),s)}),Fu(r,e)}}else if(r.children.size>0){const t=Q(e);return e=pe(e),r.children.has(t)&&Fu(r.children.get(t),e)&&r.children.delete(t),r.children.size===0}else return!0}function Uu(r,e,t){r.value!==null?t(e,r.value):WN(r,(n,s)=>{const i=new he(e.toString()+"/"+n);Uu(s,i,t)})}function WN(r,e){r.children.forEach((t,n)=>{e(n,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&We(this.last_,(n,s)=>{t[n]=t[n]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_=10*1e3,KN=30*1e3,HN=300*1e3;class QN{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new $N(e);const n=E_+(KN-E_)*Math.random();ji(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;We(e,(s,i)=>{i>0&&Ut(this.statsToReport_,s)&&(t[s]=i,n=!0)}),n&&this.server_.reportStats(t),ji(this.reportStats_.bind(this),Math.floor(Math.random()*2*HN))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Et;(function(r){r[r.OVERWRITE=0]="OVERWRITE",r[r.MERGE=1]="MERGE",r[r.ACK_USER_WRITE=2]="ACK_USER_WRITE",r[r.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Et||(Et={}));function Cd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Pd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Nd(r){return{fromUser:!1,fromServer:!0,queryId:r,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Et.ACK_USER_WRITE,this.source=Cd()}operationForChild(e){if(Y(this.path)){if(this.affectedTree.value!=null)return V(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new he(e));return new oc(ae(),t,this.revert)}}else return V(Q(this.path)===e,"operationForChild called for unrelated child."),new oc(pe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,t){this.source=e,this.path=t,this.type=Et.LISTEN_COMPLETE}operationForChild(e){return Y(this.path)?new go(this.source,ae()):new go(this.source,pe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Et.OVERWRITE}operationForChild(e){return Y(this.path)?new Pr(this.source,ae(),this.snap.getImmediateChild(e)):new Pr(this.source,pe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Et.MERGE}operationForChild(e){if(Y(this.path)){const t=this.children.subtree(new he(e));return t.isEmpty()?null:t.value?new Pr(this.source,ae(),t.value):new Ls(this.source,ae(),t)}else return V(Q(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ls(this.source,pe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Y(e))return this.isFullyInitialized()&&!this.filtered_;const t=Q(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function JN(r,e,t,n){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&r.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(qN(o.childName,o.snapshotNode))}),Ci(r,s,"child_removed",e,n,t),Ci(r,s,"child_added",e,n,t),Ci(r,s,"child_moved",i,n,t),Ci(r,s,"child_changed",e,n,t),Ci(r,s,"value",e,n,t),s}function Ci(r,e,t,n,s,i){const o=n.filter(a=>a.type===t);o.sort((a,l)=>ZN(r,a,l)),o.forEach(a=>{const l=XN(r,a,i);s.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,r.query_))})})}function XN(r,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,r.index_)),e}function ZN(r,e,t){if(e.childName==null||t.childName==null)throw Bs("Should only compare child_ events.");const n=new X(e.childName,e.snapshotNode),s=new X(t.childName,t.snapshotNode);return r.index_.compare(n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(r,e){return{eventCache:r,serverCache:e}}function Wi(r,e,t,n){return Yc(new Nr(e,t,n),r.serverCache)}function JE(r,e,t,n){return Yc(r.eventCache,new Nr(e,t,n))}function Bu(r){return r.eventCache.isFullyInitialized()?r.eventCache.getNode():null}function kr(r){return r.serverCache.isFullyInitialized()?r.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yl;const e0=()=>(Yl||(Yl=new ot(FP)),Yl);class _e{static fromObject(e){let t=new _e(null);return We(e,(n,s)=>{t=t.set(new he(n),s)}),t}constructor(e,t=e0()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:ae(),value:this.value};if(Y(e))return null;{const n=Q(e),s=this.children.get(n);if(s!==null){const i=s.findRootMostMatchingPathAndValue(pe(e),t);return i!=null?{path:we(new he(n),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Y(e))return this;{const t=Q(e),n=this.children.get(t);return n!==null?n.subtree(pe(e)):new _e(null)}}set(e,t){if(Y(e))return new _e(t,this.children);{const n=Q(e),i=(this.children.get(n)||new _e(null)).set(pe(e),t),o=this.children.insert(n,i);return new _e(this.value,o)}}remove(e){if(Y(e))return this.children.isEmpty()?new _e(null):new _e(null,this.children);{const t=Q(e),n=this.children.get(t);if(n){const s=n.remove(pe(e));let i;return s.isEmpty()?i=this.children.remove(t):i=this.children.insert(t,s),this.value===null&&i.isEmpty()?new _e(null):new _e(this.value,i)}else return this}}get(e){if(Y(e))return this.value;{const t=Q(e),n=this.children.get(t);return n?n.get(pe(e)):null}}setTree(e,t){if(Y(e))return t;{const n=Q(e),i=(this.children.get(n)||new _e(null)).setTree(pe(e),t);let o;return i.isEmpty()?o=this.children.remove(n):o=this.children.insert(n,i),new _e(this.value,o)}}fold(e){return this.fold_(ae(),e)}fold_(e,t){const n={};return this.children.inorderTraversal((s,i)=>{n[s]=i.fold_(we(e,s),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,ae(),t)}findOnPath_(e,t,n){const s=this.value?n(t,this.value):!1;if(s)return s;if(Y(e))return null;{const i=Q(e),o=this.children.get(i);return o?o.findOnPath_(pe(e),we(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ae(),t)}foreachOnPath_(e,t,n){if(Y(e))return this;{this.value&&n(t,this.value);const s=Q(e),i=this.children.get(s);return i?i.foreachOnPath_(pe(e),we(t,s),n):new _e(null)}}foreach(e){this.foreach_(ae(),e)}foreach_(e,t){this.children.inorderTraversal((n,s)=>{s.foreach_(we(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.writeTree_=e}static empty(){return new wt(new _e(null))}}function $i(r,e,t){if(Y(e))return new wt(new _e(t));{const n=r.writeTree_.findRootMostValueAndPath(e);if(n!=null){const s=n.path;let i=n.value;const o=it(s,e);return i=i.updateChild(o,t),new wt(r.writeTree_.set(s,i))}else{const s=new _e(t),i=r.writeTree_.setTree(e,s);return new wt(i)}}}function qu(r,e,t){let n=r;return We(t,(s,i)=>{n=$i(n,we(e,s),i)}),n}function T_(r,e){if(Y(e))return wt.empty();{const t=r.writeTree_.setTree(e,new _e(null));return new wt(t)}}function Gu(r,e){return Br(r,e)!=null}function Br(r,e){const t=r.writeTree_.findRootMostValueAndPath(e);return t!=null?r.writeTree_.get(t.path).getChild(it(t.path,e)):null}function w_(r){const e=[],t=r.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(ve,(n,s)=>{e.push(new X(n,s))}):r.writeTree_.children.inorderTraversal((n,s)=>{s.value!=null&&e.push(new X(n,s.value))}),e}function Nn(r,e){if(Y(e))return r;{const t=Br(r,e);return t!=null?new wt(new _e(t)):new wt(r.writeTree_.subtree(e))}}function zu(r){return r.writeTree_.isEmpty()}function Fs(r,e){return XE(ae(),r.writeTree_,e)}function XE(r,e,t){if(e.value!=null)return t.updateChild(r,e.value);{let n=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(V(i.value!==null,"Priority writes must always be leaf nodes"),n=i.value):t=XE(we(r,s),i,t)}),!t.getChild(r).isEmpty()&&n!==null&&(t=t.updateChild(we(r,".priority"),n)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(r,e){return nT(e,r)}function t0(r,e,t,n,s){V(n>r.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),r.allWrites.push({path:e,snap:t,writeId:n,visible:s}),s&&(r.visibleWrites=$i(r.visibleWrites,e,t)),r.lastWriteId=n}function n0(r,e,t,n){V(n>r.lastWriteId,"Stacking an older merge on top of newer ones"),r.allWrites.push({path:e,children:t,writeId:n,visible:!0}),r.visibleWrites=qu(r.visibleWrites,e,t),r.lastWriteId=n}function r0(r,e){for(let t=0;t<r.allWrites.length;t++){const n=r.allWrites[t];if(n.writeId===e)return n}return null}function s0(r,e){const t=r.allWrites.findIndex(a=>a.writeId===e);V(t>=0,"removeWrite called with nonexistent writeId.");const n=r.allWrites[t];r.allWrites.splice(t,1);let s=n.visible,i=!1,o=r.allWrites.length-1;for(;s&&o>=0;){const a=r.allWrites[o];a.visible&&(o>=t&&i0(a,n.path)?s=!1:ft(n.path,a.path)&&(i=!0)),o--}if(s){if(i)return o0(r),!0;if(n.snap)r.visibleWrites=T_(r.visibleWrites,n.path);else{const a=n.children;We(a,l=>{r.visibleWrites=T_(r.visibleWrites,we(n.path,l))})}return!0}else return!1}function i0(r,e){if(r.snap)return ft(r.path,e);for(const t in r.children)if(r.children.hasOwnProperty(t)&&ft(we(r.path,t),e))return!0;return!1}function o0(r){r.visibleWrites=ZE(r.allWrites,a0,ae()),r.allWrites.length>0?r.lastWriteId=r.allWrites[r.allWrites.length-1].writeId:r.lastWriteId=-1}function a0(r){return r.visible}function ZE(r,e,t){let n=wt.empty();for(let s=0;s<r.length;++s){const i=r[s];if(e(i)){const o=i.path;let a;if(i.snap)ft(t,o)?(a=it(t,o),n=$i(n,a,i.snap)):ft(o,t)&&(a=it(o,t),n=$i(n,ae(),i.snap.getChild(a)));else if(i.children){if(ft(t,o))a=it(t,o),n=qu(n,a,i.children);else if(ft(o,t))if(a=it(o,t),Y(a))n=qu(n,ae(),i.children);else{const l=ds(i.children,Q(a));if(l){const u=l.getChild(pe(a));n=$i(n,ae(),u)}}}else throw Bs("WriteRecord should have .snap or .children")}}return n}function eT(r,e,t,n,s){if(!n&&!s){const i=Br(r.visibleWrites,e);if(i!=null)return i;{const o=Nn(r.visibleWrites,e);if(zu(o))return t;if(t==null&&!Gu(o,ae()))return null;{const a=t||W.EMPTY_NODE;return Fs(o,a)}}}else{const i=Nn(r.visibleWrites,e);if(!s&&zu(i))return t;if(!s&&t==null&&!Gu(i,ae()))return null;{const o=function(u){return(u.visible||s)&&(!n||!~n.indexOf(u.writeId))&&(ft(u.path,e)||ft(e,u.path))},a=ZE(r.allWrites,o,e),l=t||W.EMPTY_NODE;return Fs(a,l)}}}function c0(r,e,t){let n=W.EMPTY_NODE;const s=Br(r.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(ve,(i,o)=>{n=n.updateImmediateChild(i,o)}),n;if(t){const i=Nn(r.visibleWrites,e);return t.forEachChild(ve,(o,a)=>{const l=Fs(Nn(i,new he(o)),a);n=n.updateImmediateChild(o,l)}),w_(i).forEach(o=>{n=n.updateImmediateChild(o.name,o.node)}),n}else{const i=Nn(r.visibleWrites,e);return w_(i).forEach(o=>{n=n.updateImmediateChild(o.name,o.node)}),n}}function l0(r,e,t,n,s){V(n||s,"Either existingEventSnap or existingServerSnap must exist");const i=we(e,t);if(Gu(r.visibleWrites,i))return null;{const o=Nn(r.visibleWrites,i);return zu(o)?s.getChild(t):Fs(o,s.getChild(t))}}function u0(r,e,t,n){const s=we(e,t),i=Br(r.visibleWrites,s);if(i!=null)return i;if(n.isCompleteForChild(t)){const o=Nn(r.visibleWrites,s);return Fs(o,n.getNode().getImmediateChild(t))}else return null}function h0(r,e){return Br(r.visibleWrites,e)}function d0(r,e,t,n,s,i,o){let a;const l=Nn(r.visibleWrites,e),u=Br(l,ae());if(u!=null)a=u;else if(t!=null)a=Fs(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],f=o.getCompare(),m=i?a.getReverseIteratorFrom(n,o):a.getIteratorFrom(n,o);let y=m.getNext();for(;y&&d.length<s;)f(y,n)!==0&&d.push(y),y=m.getNext();return d}else return[]}function f0(){return{visibleWrites:wt.empty(),allWrites:[],lastWriteId:-1}}function ac(r,e,t,n){return eT(r.writeTree,r.treePath,e,t,n)}function Dd(r,e){return c0(r.writeTree,r.treePath,e)}function v_(r,e,t,n){return l0(r.writeTree,r.treePath,e,t,n)}function cc(r,e){return h0(r.writeTree,we(r.treePath,e))}function p0(r,e,t,n,s,i){return d0(r.writeTree,r.treePath,e,t,n,s,i)}function xd(r,e,t){return u0(r.writeTree,r.treePath,e,t)}function tT(r,e){return nT(we(r.treePath,e),r.writeTree)}function nT(r,e){return{treePath:r,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;V(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),V(n!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(n);if(s){const i=s.type;if(t==="child_added"&&i==="child_removed")this.changeMap.set(n,mo(n,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&i==="child_added")this.changeMap.delete(n);else if(t==="child_removed"&&i==="child_changed")this.changeMap.set(n,po(n,s.oldSnap));else if(t==="child_changed"&&i==="child_added")this.changeMap.set(n,Ms(n,e.snapshotNode));else if(t==="child_changed"&&i==="child_changed")this.changeMap.set(n,mo(n,e.snapshotNode,s.oldSnap));else throw Bs("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const rT=new _0;class Vd{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const n=this.optCompleteServerCache_!=null?new Nr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return xd(this.writes_,e,n)}}getChildAfterChild(e,t,n){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:kr(this.viewCache_),i=p0(this.writes_,s,t,1,n,e);return i.length===0?null:i[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g0(r){return{filter:r}}function y0(r,e){V(e.eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),V(e.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed")}function I0(r,e,t,n,s){const i=new m0;let o,a;if(t.type===Et.OVERWRITE){const u=t;u.source.fromUser?o=ju(r,e,u.path,u.snap,n,s,i):(V(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!Y(u.path),o=lc(r,e,u.path,u.snap,n,s,a,i))}else if(t.type===Et.MERGE){const u=t;u.source.fromUser?o=T0(r,e,u.path,u.children,n,s,i):(V(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Wu(r,e,u.path,u.children,n,s,a,i))}else if(t.type===Et.ACK_USER_WRITE){const u=t;u.revert?o=A0(r,e,u.path,n,s,i):o=w0(r,e,u.path,u.affectedTree,n,s,i)}else if(t.type===Et.LISTEN_COMPLETE)o=v0(r,e,t.path,n,i);else throw Bs("Unknown operation type: "+t.type);const l=i.getChanges();return E0(e,o,l),{viewCache:o,changes:l}}function E0(r,e,t){const n=e.eventCache;if(n.isFullyInitialized()){const s=n.getNode().isLeafNode()||n.getNode().isEmpty(),i=Bu(r);(t.length>0||!r.eventCache.isFullyInitialized()||s&&!n.getNode().equals(i)||!n.getNode().getPriority().equals(i.getPriority()))&&t.push(YE(Bu(e)))}}function sT(r,e,t,n,s,i){const o=e.eventCache;if(cc(n,t)!=null)return e;{let a,l;if(Y(t))if(V(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=kr(e),d=u instanceof W?u:W.EMPTY_NODE,f=Dd(n,d);a=r.filter.updateFullNode(e.eventCache.getNode(),f,i)}else{const u=ac(n,kr(e));a=r.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=Q(t);if(u===".priority"){V(Un(t)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const f=v_(n,t,d,l);f!=null?a=r.filter.updatePriority(d,f):a=o.getNode()}else{const d=pe(t);let f;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const m=v_(n,t,o.getNode(),l);m!=null?f=o.getNode().getImmediateChild(u).updateChild(d,m):f=o.getNode().getImmediateChild(u)}else f=xd(n,u,e.serverCache);f!=null?a=r.filter.updateChild(o.getNode(),u,f,d,s,i):a=o.getNode()}}return Wi(e,a,o.isFullyInitialized()||Y(t),r.filter.filtersNodes())}}function lc(r,e,t,n,s,i,o,a){const l=e.serverCache;let u;const d=o?r.filter:r.filter.getIndexedFilter();if(Y(t))u=d.updateFullNode(l.getNode(),n,null);else if(d.filtersNodes()&&!l.isFiltered()){const y=l.getNode().updateChild(t,n);u=d.updateFullNode(l.getNode(),y,null)}else{const y=Q(t);if(!l.isCompleteForPath(t)&&Un(t)>1)return e;const S=pe(t),k=l.getNode().getImmediateChild(y).updateChild(S,n);y===".priority"?u=d.updatePriority(l.getNode(),k):u=d.updateChild(l.getNode(),y,k,S,rT,null)}const f=JE(e,u,l.isFullyInitialized()||Y(t),d.filtersNodes()),m=new Vd(s,f,i);return sT(r,f,t,s,m,a)}function ju(r,e,t,n,s,i,o){const a=e.eventCache;let l,u;const d=new Vd(s,e,i);if(Y(t))u=r.filter.updateFullNode(e.eventCache.getNode(),n,o),l=Wi(e,u,!0,r.filter.filtersNodes());else{const f=Q(t);if(f===".priority")u=r.filter.updatePriority(e.eventCache.getNode(),n),l=Wi(e,u,a.isFullyInitialized(),a.isFiltered());else{const m=pe(t),y=a.getNode().getImmediateChild(f);let S;if(Y(m))S=n;else{const N=d.getCompleteChild(f);N!=null?wd(m)===".priority"&&N.getChild(zE(m)).isEmpty()?S=N:S=N.updateChild(m,n):S=W.EMPTY_NODE}if(y.equals(S))l=e;else{const N=r.filter.updateChild(a.getNode(),f,S,m,d,o);l=Wi(e,N,a.isFullyInitialized(),r.filter.filtersNodes())}}}return l}function A_(r,e){return r.eventCache.isCompleteForChild(e)}function T0(r,e,t,n,s,i,o){let a=e;return n.foreach((l,u)=>{const d=we(t,l);A_(e,Q(d))&&(a=ju(r,a,d,u,s,i,o))}),n.foreach((l,u)=>{const d=we(t,l);A_(e,Q(d))||(a=ju(r,a,d,u,s,i,o))}),a}function S_(r,e,t){return t.foreach((n,s)=>{e=e.updateChild(n,s)}),e}function Wu(r,e,t,n,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;Y(t)?u=n:u=new _e(null).setTree(t,n);const d=e.serverCache.getNode();return u.children.inorderTraversal((f,m)=>{if(d.hasChild(f)){const y=e.serverCache.getNode().getImmediateChild(f),S=S_(r,y,m);l=lc(r,l,new he(f),S,s,i,o,a)}}),u.children.inorderTraversal((f,m)=>{const y=!e.serverCache.isCompleteForChild(f)&&m.value===null;if(!d.hasChild(f)&&!y){const S=e.serverCache.getNode().getImmediateChild(f),N=S_(r,S,m);l=lc(r,l,new he(f),N,s,i,o,a)}}),l}function w0(r,e,t,n,s,i,o){if(cc(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(n.value!=null){if(Y(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return lc(r,e,t,l.getNode().getChild(t),s,i,a,o);if(Y(t)){let u=new _e(null);return l.getNode().forEachChild(us,(d,f)=>{u=u.set(new he(d),f)}),Wu(r,e,t,u,s,i,a,o)}else return e}else{let u=new _e(null);return n.foreach((d,f)=>{const m=we(t,d);l.isCompleteForPath(m)&&(u=u.set(d,l.getNode().getChild(m)))}),Wu(r,e,t,u,s,i,a,o)}}function v0(r,e,t,n,s){const i=e.serverCache,o=JE(e,i.getNode(),i.isFullyInitialized()||Y(t),i.isFiltered());return sT(r,o,t,n,rT,s)}function A0(r,e,t,n,s,i){let o;if(cc(n,t)!=null)return e;{const a=new Vd(n,e,s),l=e.eventCache.getNode();let u;if(Y(t)||Q(t)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=ac(n,kr(e));else{const f=e.serverCache.getNode();V(f instanceof W,"serverChildren would be complete if leaf node"),d=Dd(n,f)}d=d,u=r.filter.updateFullNode(l,d,i)}else{const d=Q(t);let f=xd(n,d,e.serverCache);f==null&&e.serverCache.isCompleteForChild(d)&&(f=l.getImmediateChild(d)),f!=null?u=r.filter.updateChild(l,d,f,pe(t),a,i):e.eventCache.getNode().hasChild(d)?u=r.filter.updateChild(l,d,W.EMPTY_NODE,pe(t),a,i):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ac(n,kr(e)),o.isLeafNode()&&(u=r.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||cc(n,ae())!=null,Wi(e,u,o,r.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,s=new bd(n.getIndex()),i=zN(n);this.processor_=g0(i);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(W.EMPTY_NODE,o.getNode(),null),u=i.updateFullNode(W.EMPTY_NODE,a.getNode(),null),d=new Nr(l,o.isFullyInitialized(),s.filtersNodes()),f=new Nr(u,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=Yc(f,d),this.eventGenerator_=new YN(this.query_)}get query(){return this.query_}}function b0(r){return r.viewCache_.serverCache.getNode()}function R0(r,e){const t=kr(r.viewCache_);return t&&(r.query._queryParams.loadsAllData()||!Y(e)&&!t.getImmediateChild(Q(e)).isEmpty())?t.getChild(e):null}function b_(r){return r.eventRegistrations_.length===0}function C0(r,e){r.eventRegistrations_.push(e)}function R_(r,e,t){const n=[];if(t){V(e==null,"A cancel should cancel all event registrations.");const s=r.query._path;r.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(t,s);o&&n.push(o)})}if(e){let s=[];for(let i=0;i<r.eventRegistrations_.length;++i){const o=r.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(r.eventRegistrations_.slice(i+1));break}}r.eventRegistrations_=s}else r.eventRegistrations_=[];return n}function C_(r,e,t,n){e.type===Et.MERGE&&e.source.queryId!==null&&(V(kr(r.viewCache_),"We should always have a full cache before handling merges"),V(Bu(r.viewCache_),"Missing event cache, even though we have a server cache"));const s=r.viewCache_,i=I0(r.processor_,s,e,t,n);return y0(r.processor_,i.viewCache),V(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),r.viewCache_=i.viewCache,iT(r,i.changes,i.viewCache.eventCache.getNode(),null)}function P0(r,e){const t=r.viewCache_.eventCache,n=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(ve,(i,o)=>{n.push(Ms(i,o))}),t.isFullyInitialized()&&n.push(YE(t.getNode())),iT(r,n,t.getNode(),e)}function iT(r,e,t,n){const s=n?[n]:r.eventRegistrations_;return JN(r.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uc;class N0{constructor(){this.views=new Map}}function k0(r){V(!uc,"__referenceConstructor has already been defined"),uc=r}function D0(){return V(uc,"Reference.ts has not been loaded"),uc}function x0(r){return r.views.size===0}function Od(r,e,t,n){const s=e.source.queryId;if(s!==null){const i=r.views.get(s);return V(i!=null,"SyncTree gave us an op for an invalid query."),C_(i,e,t,n)}else{let i=[];for(const o of r.views.values())i=i.concat(C_(o,e,t,n));return i}}function V0(r,e,t,n,s){const i=e._queryIdentifier,o=r.views.get(i);if(!o){let a=ac(t,s?n:null),l=!1;a?l=!0:n instanceof W?(a=Dd(t,n),l=!1):(a=W.EMPTY_NODE,l=!1);const u=Yc(new Nr(a,l,!1),new Nr(n,s,!1));return new S0(e,u)}return o}function O0(r,e,t,n,s,i){const o=V0(r,e,n,s,i);return r.views.has(e._queryIdentifier)||r.views.set(e._queryIdentifier,o),C0(o,t),P0(o,t)}function M0(r,e,t,n){const s=e._queryIdentifier,i=[];let o=[];const a=Bn(r);if(s==="default")for(const[l,u]of r.views.entries())o=o.concat(R_(u,t,n)),b_(u)&&(r.views.delete(l),u.query._queryParams.loadsAllData()||i.push(u.query));else{const l=r.views.get(s);l&&(o=o.concat(R_(l,t,n)),b_(l)&&(r.views.delete(s),l.query._queryParams.loadsAllData()||i.push(l.query)))}return a&&!Bn(r)&&i.push(new(D0())(e._repo,e._path)),{removed:i,events:o}}function oT(r){const e=[];for(const t of r.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function hs(r,e){let t=null;for(const n of r.views.values())t=t||R0(n,e);return t}function aT(r,e){if(e._queryParams.loadsAllData())return Jc(r);{const n=e._queryIdentifier;return r.views.get(n)}}function cT(r,e){return aT(r,e)!=null}function Bn(r){return Jc(r)!=null}function Jc(r){for(const e of r.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hc;function L0(r){V(!hc,"__referenceConstructor has already been defined"),hc=r}function F0(){return V(hc,"Reference.ts has not been loaded"),hc}let U0=1;class P_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new _e(null),this.pendingWriteTree_=f0(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function lT(r,e,t,n,s){return t0(r.pendingWriteTree_,e,t,n,s),s?ni(r,new Pr(Cd(),e,t)):[]}function B0(r,e,t,n){n0(r.pendingWriteTree_,e,t,n);const s=_e.fromObject(t);return ni(r,new Ls(Cd(),e,s))}function An(r,e,t=!1){const n=r0(r.pendingWriteTree_,e);if(s0(r.pendingWriteTree_,e)){let i=new _e(null);return n.snap!=null?i=i.set(ae(),!0):We(n.children,o=>{i=i.set(new he(o),!0)}),ni(r,new oc(n.path,i,t))}else return[]}function Xc(r,e,t){return ni(r,new Pr(Pd(),e,t))}function q0(r,e,t){const n=_e.fromObject(t);return ni(r,new Ls(Pd(),e,n))}function G0(r,e){return ni(r,new go(Pd(),e))}function z0(r,e,t){const n=Ld(r,t);if(n){const s=Fd(n),i=s.path,o=s.queryId,a=it(i,e),l=new go(Nd(o),a);return Ud(r,i,l)}else return[]}function $u(r,e,t,n,s=!1){const i=e._path,o=r.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||cT(o,e))){const l=M0(o,e,t,n);x0(o)&&(r.syncPointTree_=r.syncPointTree_.remove(i));const u=l.removed;if(a=l.events,!s){const d=u.findIndex(m=>m._queryParams.loadsAllData())!==-1,f=r.syncPointTree_.findOnPath(i,(m,y)=>Bn(y));if(d&&!f){const m=r.syncPointTree_.subtree(i);if(!m.isEmpty()){const y=$0(m);for(let S=0;S<y.length;++S){const N=y[S],k=N.query,F=dT(r,N);r.listenProvider_.startListening(Ki(k),dc(r,k),F.hashFn,F.onComplete)}}}!f&&u.length>0&&!n&&(d?r.listenProvider_.stopListening(Ki(e),null):u.forEach(m=>{const y=r.queryToTagMap.get(Zc(m));r.listenProvider_.stopListening(Ki(m),y)}))}K0(r,u)}return a}function j0(r,e,t,n){const s=Ld(r,n);if(s!=null){const i=Fd(s),o=i.path,a=i.queryId,l=it(o,e),u=new Pr(Nd(a),l,t);return Ud(r,o,u)}else return[]}function W0(r,e,t,n){const s=Ld(r,n);if(s){const i=Fd(s),o=i.path,a=i.queryId,l=it(o,e),u=_e.fromObject(t),d=new Ls(Nd(a),l,u);return Ud(r,o,d)}else return[]}function N_(r,e,t,n=!1){const s=e._path;let i=null,o=!1;r.syncPointTree_.foreachOnPath(s,(m,y)=>{const S=it(m,s);i=i||hs(y,S),o=o||Bn(y)});let a=r.syncPointTree_.get(s);a?(o=o||Bn(a),i=i||hs(a,ae())):(a=new N0,r.syncPointTree_=r.syncPointTree_.set(s,a));let l;i!=null?l=!0:(l=!1,i=W.EMPTY_NODE,r.syncPointTree_.subtree(s).foreachChild((y,S)=>{const N=hs(S,ae());N&&(i=i.updateImmediateChild(y,N))}));const u=cT(a,e);if(!u&&!e._queryParams.loadsAllData()){const m=Zc(e);V(!r.queryToTagMap.has(m),"View does not exist, but we have a tag");const y=H0();r.queryToTagMap.set(m,y),r.tagToQueryMap.set(y,m)}const d=kd(r.pendingWriteTree_,s);let f=O0(a,e,t,d,i,l);if(!u&&!o&&!n){const m=aT(a,e);f=f.concat(Q0(r,e,m))}return f}function Md(r,e,t){const s=r.pendingWriteTree_,i=r.syncPointTree_.findOnPath(e,(o,a)=>{const l=it(o,e),u=hs(a,l);if(u)return u});return eT(s,e,i,t,!0)}function ni(r,e){return uT(e,r.syncPointTree_,null,kd(r.pendingWriteTree_,ae()))}function uT(r,e,t,n){if(Y(r.path))return hT(r,e,t,n);{const s=e.get(ae());t==null&&s!=null&&(t=hs(s,ae()));let i=[];const o=Q(r.path),a=r.operationForChild(o),l=e.children.get(o);if(l&&a){const u=t?t.getImmediateChild(o):null,d=tT(n,o);i=i.concat(uT(a,l,u,d))}return s&&(i=i.concat(Od(s,r,n,t))),i}}function hT(r,e,t,n){const s=e.get(ae());t==null&&s!=null&&(t=hs(s,ae()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,u=tT(n,o),d=r.operationForChild(o);d&&(i=i.concat(hT(d,a,l,u)))}),s&&(i=i.concat(Od(s,r,n,t))),i}function dT(r,e){const t=e.query,n=dc(r,t);return{hashFn:()=>(b0(e)||W.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return n?z0(r,t._path,n):G0(r,t._path);{const i=qP(s,t);return $u(r,t,null,i)}}}}function dc(r,e){const t=Zc(e);return r.queryToTagMap.get(t)}function Zc(r){return r._path.toString()+"$"+r._queryIdentifier}function Ld(r,e){return r.tagToQueryMap.get(e)}function Fd(r){const e=r.indexOf("$");return V(e!==-1&&e<r.length-1,"Bad queryKey."),{queryId:r.substr(e+1),path:new he(r.substr(0,e))}}function Ud(r,e,t){const n=r.syncPointTree_.get(e);V(n,"Missing sync point for query tag that we're tracking");const s=kd(r.pendingWriteTree_,e);return Od(n,t,s,null)}function $0(r){return r.fold((e,t,n)=>{if(t&&Bn(t))return[Jc(t)];{let s=[];return t&&(s=oT(t)),We(n,(i,o)=>{s=s.concat(o)}),s}})}function Ki(r){return r._queryParams.loadsAllData()&&!r._queryParams.isDefault()?new(F0())(r._repo,r._path):r}function K0(r,e){for(let t=0;t<e.length;++t){const n=e[t];if(!n._queryParams.loadsAllData()){const s=Zc(n),i=r.queryToTagMap.get(s);r.queryToTagMap.delete(s),r.tagToQueryMap.delete(i)}}}function H0(){return U0++}function Q0(r,e,t){const n=e._path,s=dc(r,e),i=dT(r,t),o=r.listenProvider_.startListening(Ki(e),s,i.hashFn,i.onComplete),a=r.syncPointTree_.subtree(n);if(s)V(!Bn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,d,f)=>{if(!Y(u)&&d&&Bn(d))return[Jc(d).query];{let m=[];return d&&(m=m.concat(oT(d).map(y=>y.query))),We(f,(y,S)=>{m=m.concat(S)}),m}});for(let u=0;u<l.length;++u){const d=l[u];r.listenProvider_.stopListening(Ki(d),dc(r,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Bd(t)}node(){return this.node_}}class qd{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=we(this.path_,e);return new qd(this.syncTree_,t)}node(){return Md(this.syncTree_,this.path_)}}const Y0=function(r){return r=r||{},r.timestamp=r.timestamp||new Date().getTime(),r},k_=function(r,e,t){if(!r||typeof r!="object")return r;if(V(".sv"in r,"Unexpected leaf node or priority contents"),typeof r[".sv"]=="string")return J0(r[".sv"],e,t);if(typeof r[".sv"]=="object")return X0(r[".sv"],e);V(!1,"Unexpected server value: "+JSON.stringify(r,null,2))},J0=function(r,e,t){switch(r){case"timestamp":return t.timestamp;default:V(!1,"Unexpected server value: "+r)}},X0=function(r,e,t){r.hasOwnProperty("increment")||V(!1,"Unexpected server value: "+JSON.stringify(r,null,2));const n=r.increment;typeof n!="number"&&V(!1,"Unexpected increment value: "+n);const s=e.node();if(V(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return n;const o=s.getValue();return typeof o!="number"?n:o+n},fT=function(r,e,t,n){return Gd(e,new qd(t,r),n)},pT=function(r,e,t){return Gd(r,new Bd(e),t)};function Gd(r,e,t){const n=r.getPriority().val(),s=k_(n,e.getImmediateChild(".priority"),t);let i;if(r.isLeafNode()){const o=r,a=k_(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new Le(a,Ce(s)):r}else{const o=r;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new Le(s))),o.forEachChild(ve,(a,l)=>{const u=Gd(l,e.getImmediateChild(a),t);u!==l&&(i=i.updateImmediateChild(a,u))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function jd(r,e){let t=e instanceof he?e:new he(e),n=r,s=Q(t);for(;s!==null;){const i=ds(n.node.children,s)||{children:{},childCount:0};n=new zd(s,n,i),t=pe(t),s=Q(t)}return n}function ri(r){return r.node.value}function mT(r,e){r.node.value=e,Ku(r)}function _T(r){return r.node.childCount>0}function Z0(r){return ri(r)===void 0&&!_T(r)}function el(r,e){We(r.node.children,(t,n)=>{e(new zd(t,r,n))})}function gT(r,e,t,n){t&&e(r),el(r,s=>{gT(s,e,!0)})}function ek(r,e,t){let n=r.parent;for(;n!==null;){if(e(n))return!0;n=n.parent}return!1}function Uo(r){return new he(r.parent===null?r.name:Uo(r.parent)+"/"+r.name)}function Ku(r){r.parent!==null&&tk(r.parent,r.name,r)}function tk(r,e,t){const n=Z0(t),s=Ut(r.node.children,e);n&&s?(delete r.node.children[e],r.node.childCount--,Ku(r)):!n&&!s&&(r.node.children[e]=t.node,r.node.childCount++,Ku(r))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nk=/[\[\].#$\/\u0000-\u001F\u007F]/,rk=/[\[\].#$\u0000-\u001F\u007F]/,Jl=10*1024*1024,Wd=function(r){return typeof r=="string"&&r.length!==0&&!nk.test(r)},yT=function(r){return typeof r=="string"&&r.length!==0&&!rk.test(r)},sk=function(r){return r&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),yT(r)},IT=function(r){return r===null||typeof r=="string"||typeof r=="number"&&!Hc(r)||r&&typeof r=="object"&&Ut(r,".sv")},Hu=function(r,e,t,n){tl(fs(r,"value"),e,t)},tl=function(r,e,t){const n=t instanceof he?new TN(t,r):t;if(e===void 0)throw new Error(r+"contains undefined "+ir(n));if(typeof e=="function")throw new Error(r+"contains a function "+ir(n)+" with contents = "+e.toString());if(Hc(e))throw new Error(r+"contains "+e.toString()+" "+ir(n));if(typeof e=="string"&&e.length>Jl/3&&_c(e)>Jl)throw new Error(r+"contains a string greater than "+Jl+" utf8 bytes "+ir(n)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(We(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!Wd(o)))throw new Error(r+" contains an invalid key ("+o+") "+ir(n)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);wN(n,o),tl(r,a,n),vN(n)}),s&&i)throw new Error(r+' contains ".value" child '+ir(n)+" in addition to actual children.")}},ik=function(r,e){let t,n;for(t=0;t<e.length;t++){n=e[t];const i=fo(n);for(let o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!Wd(i[o]))throw new Error(r+"contains an invalid key ("+i[o]+") in path "+n.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(EN);let s=null;for(t=0;t<e.length;t++){if(n=e[t],s!==null&&ft(s,n))throw new Error(r+"contains a path "+s.toString()+" that is ancestor of another path "+n.toString());s=n}},ET=function(r,e,t,n){const s=fs(r,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const i=[];We(e,(o,a)=>{const l=new he(o);if(tl(s,a,we(t,l)),wd(l)===".priority"&&!IT(a))throw new Error(s+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");i.push(l)}),ik(s,i)},ok=function(r,e,t){if(Hc(e))throw new Error(fs(r,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!IT(e))throw new Error(fs(r,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},TT=function(r,e,t,n){if(!yT(t))throw new Error(fs(r,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},ak=function(r,e,t,n){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),TT(r,e,t)},rs=function(r,e){if(Q(e)===".info")throw new Error(r+" failed = Can't modify data under /.info/")},ck=function(r,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Wd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!sk(t))throw new Error(fs(r,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function nl(r,e){let t=null;for(let n=0;n<e.length;n++){const s=e[n],i=s.getPath();t!==null&&!vd(i,t.path)&&(r.eventLists_.push(t),t=null),t===null&&(t={events:[],path:i}),t.events.push(s)}t&&r.eventLists_.push(t)}function wT(r,e,t){nl(r,t),vT(r,n=>vd(n,e))}function vt(r,e,t){nl(r,t),vT(r,n=>ft(n,e)||ft(e,n))}function vT(r,e){r.recursionDepth_++;let t=!0;for(let n=0;n<r.eventLists_.length;n++){const s=r.eventLists_[n];if(s){const i=s.path;e(i)?(uk(r.eventLists_[n]),r.eventLists_[n]=null):t=!1}}t&&(r.eventLists_=[]),r.recursionDepth_--}function uk(r){for(let e=0;e<r.events.length;e++){const t=r.events[e];if(t!==null){r.events[e]=null;const n=t.getEventRunner();zi&&qe("event: "+t.toString()),ei(n)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hk="repo_interrupt",dk=25;class fk{constructor(e,t,n,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new lk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ic(),this.transactionQueueTree_=new zd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function pk(r,e,t){if(r.stats_=Ed(r.repoInfo_),r.forceRestClient_||WP())r.server_=new sc(r.repoInfo_,(n,s,i,o)=>{D_(r,n,s,i,o)},r.authTokenProvider_,r.appCheckProvider_),setTimeout(()=>x_(r,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ge(t)}catch(n){throw new Error("Invalid authOverride provided: "+n)}}r.persistentConnection_=new Wt(r.repoInfo_,e,(n,s,i,o)=>{D_(r,n,s,i,o)},n=>{x_(r,n)},n=>{_k(r,n)},r.authTokenProvider_,r.appCheckProvider_,t),r.server_=r.persistentConnection_}r.authTokenProvider_.addTokenChangeListener(n=>{r.server_.refreshAuthToken(n)}),r.appCheckProvider_.addTokenChangeListener(n=>{r.server_.refreshAppCheckToken(n.token)}),r.statsReporter_=YP(r.repoInfo_,()=>new QN(r.stats_,r.server_)),r.infoData_=new jN,r.infoSyncTree_=new P_({startListening:(n,s,i,o)=>{let a=[];const l=r.infoData_.getNode(n._path);return l.isEmpty()||(a=Xc(r.infoSyncTree_,n._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),$d(r,"connected",!1),r.serverSyncTree_=new P_({startListening:(n,s,i,o)=>(r.server_.listen(n,i,s,(a,l)=>{const u=o(a,l);vt(r.eventQueue_,n._path,u)}),[]),stopListening:(n,s)=>{r.server_.unlisten(n,s)}})}function mk(r){const t=r.infoData_.getNode(new he(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function rl(r){return Y0({timestamp:mk(r)})}function D_(r,e,t,n,s){r.dataUpdateCount++;const i=new he(e);t=r.interceptServerDataCallback_?r.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(n){const l=ka(t,u=>Ce(u));o=W0(r.serverSyncTree_,i,l,s)}else{const l=Ce(t);o=j0(r.serverSyncTree_,i,l,s)}else if(n){const l=ka(t,u=>Ce(u));o=q0(r.serverSyncTree_,i,l)}else{const l=Ce(t);o=Xc(r.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=Us(r,i)),vt(r.eventQueue_,a,o)}function x_(r,e){$d(r,"connected",e),e===!1&&Ik(r)}function _k(r,e){We(e,(t,n)=>{$d(r,t,n)})}function $d(r,e,t){const n=new he("/.info/"+e),s=Ce(t);r.infoData_.updateSnapshot(n,s);const i=Xc(r.infoSyncTree_,n,s);vt(r.eventQueue_,n,i)}function Kd(r){return r.nextWriteId_++}function gk(r,e,t,n,s){sl(r,"set",{path:e.toString(),value:t,priority:n});const i=rl(r),o=Ce(t,n),a=Md(r.serverSyncTree_,e),l=pT(o,a,i),u=Kd(r),d=lT(r.serverSyncTree_,e,l,u,!0);nl(r.eventQueue_,d),r.server_.put(e.toString(),o.val(!0),(m,y)=>{const S=m==="ok";S||et("set at "+e+" failed: "+m);const N=An(r.serverSyncTree_,u,!S);vt(r.eventQueue_,e,N),qn(r,s,m,y)});const f=Qd(r,e);Us(r,f),vt(r.eventQueue_,f,[])}function yk(r,e,t,n){sl(r,"update",{path:e.toString(),value:t});let s=!0;const i=rl(r),o={};if(We(t,(a,l)=>{s=!1,o[a]=fT(we(e,a),Ce(l),r.serverSyncTree_,i)}),s)qe("update() called with empty data.  Don't do anything."),qn(r,n,"ok",void 0);else{const a=Kd(r),l=B0(r.serverSyncTree_,e,o,a);nl(r.eventQueue_,l),r.server_.merge(e.toString(),t,(u,d)=>{const f=u==="ok";f||et("update at "+e+" failed: "+u);const m=An(r.serverSyncTree_,a,!f),y=m.length>0?Us(r,e):e;vt(r.eventQueue_,y,m),qn(r,n,u,d)}),We(t,u=>{const d=Qd(r,we(e,u));Us(r,d)}),vt(r.eventQueue_,e,[])}}function Ik(r){sl(r,"onDisconnectEvents");const e=rl(r),t=ic();Uu(r.onDisconnect_,ae(),(s,i)=>{const o=fT(s,i,r.serverSyncTree_,e);ti(t,s,o)});let n=[];Uu(t,ae(),(s,i)=>{n=n.concat(Xc(r.serverSyncTree_,s,i));const o=Qd(r,s);Us(r,o)}),r.onDisconnect_=ic(),vt(r.eventQueue_,ae(),n)}function Ek(r,e,t){r.server_.onDisconnectCancel(e.toString(),(n,s)=>{n==="ok"&&Fu(r.onDisconnect_,e),qn(r,t,n,s)})}function V_(r,e,t,n){const s=Ce(t);r.server_.onDisconnectPut(e.toString(),s.val(!0),(i,o)=>{i==="ok"&&ti(r.onDisconnect_,e,s),qn(r,n,i,o)})}function Tk(r,e,t,n,s){const i=Ce(t,n);r.server_.onDisconnectPut(e.toString(),i.val(!0),(o,a)=>{o==="ok"&&ti(r.onDisconnect_,e,i),qn(r,s,o,a)})}function wk(r,e,t,n){if(Na(t)){qe("onDisconnect().update() called with empty data.  Don't do anything."),qn(r,n,"ok",void 0);return}r.server_.onDisconnectMerge(e.toString(),t,(s,i)=>{s==="ok"&&We(t,(o,a)=>{const l=Ce(a);ti(r.onDisconnect_,we(e,o),l)}),qn(r,n,s,i)})}function vk(r,e,t){let n;Q(e._path)===".info"?n=N_(r.infoSyncTree_,e,t):n=N_(r.serverSyncTree_,e,t),wT(r.eventQueue_,e._path,n)}function Ak(r,e,t){let n;Q(e._path)===".info"?n=$u(r.infoSyncTree_,e,t):n=$u(r.serverSyncTree_,e,t),wT(r.eventQueue_,e._path,n)}function Sk(r){r.persistentConnection_&&r.persistentConnection_.interrupt(hk)}function sl(r,...e){let t="";r.persistentConnection_&&(t=r.persistentConnection_.id+":"),qe(t,...e)}function qn(r,e,t,n){e&&ei(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let i=s;n&&(i+=": "+n);const o=new Error(i);o.code=s,e(o)}})}function AT(r,e,t){return Md(r.serverSyncTree_,e,t)||W.EMPTY_NODE}function Hd(r,e=r.transactionQueueTree_){if(e||il(r,e),ri(e)){const t=bT(r,e);V(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&bk(r,Uo(e),t)}else _T(e)&&el(e,t=>{Hd(r,t)})}function bk(r,e,t){const n=t.map(u=>u.currentWriteId),s=AT(r,e,n);let i=s;const o=s.hash();for(let u=0;u<t.length;u++){const d=t[u];V(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const f=it(e,d.path);i=i.updateChild(f,d.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;r.server_.put(l.toString(),a,u=>{sl(r,"transaction put response",{path:l.toString(),status:u});let d=[];if(u==="ok"){const f=[];for(let m=0;m<t.length;m++)t[m].status=2,d=d.concat(An(r.serverSyncTree_,t[m].currentWriteId)),t[m].onComplete&&f.push(()=>t[m].onComplete(null,!0,t[m].currentOutputSnapshotResolved)),t[m].unwatcher();il(r,jd(r.transactionQueueTree_,e)),Hd(r,r.transactionQueueTree_),vt(r.eventQueue_,e,d);for(let m=0;m<f.length;m++)ei(f[m])}else{if(u==="datastale")for(let f=0;f<t.length;f++)t[f].status===3?t[f].status=4:t[f].status=0;else{et("transaction at "+l.toString()+" failed: "+u);for(let f=0;f<t.length;f++)t[f].status=4,t[f].abortReason=u}Us(r,e)}},o)}function Us(r,e){const t=ST(r,e),n=Uo(t),s=bT(r,t);return Rk(r,s,n),n}function Rk(r,e,t){if(e.length===0)return;const n=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=it(t,l.path);let d=!1,f;if(V(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,f=l.abortReason,s=s.concat(An(r.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=dk)d=!0,f="maxretry",s=s.concat(An(r.serverSyncTree_,l.currentWriteId,!0));else{const m=AT(r,l.path,o);l.currentInputSnapshot=m;const y=e[a].update(m.val());if(y!==void 0){tl("transaction failed: Data returned ",y,l.path);let S=Ce(y);typeof y=="object"&&y!=null&&Ut(y,".priority")||(S=S.updatePriority(m.getPriority()));const k=l.currentWriteId,F=rl(r),G=pT(S,m,F);l.currentOutputSnapshotRaw=S,l.currentOutputSnapshotResolved=G,l.currentWriteId=Kd(r),o.splice(o.indexOf(k),1),s=s.concat(lT(r.serverSyncTree_,l.path,G,l.currentWriteId,l.applyLocally)),s=s.concat(An(r.serverSyncTree_,k,!0))}else d=!0,f="nodata",s=s.concat(An(r.serverSyncTree_,l.currentWriteId,!0))}vt(r.eventQueue_,t,s),s=[],d&&(e[a].status=2,(function(m){setTimeout(m,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?n.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):n.push(()=>e[a].onComplete(new Error(f),!1,null))))}il(r,r.transactionQueueTree_);for(let a=0;a<n.length;a++)ei(n[a]);Hd(r,r.transactionQueueTree_)}function ST(r,e){let t,n=r.transactionQueueTree_;for(t=Q(e);t!==null&&ri(n)===void 0;)n=jd(n,t),e=pe(e),t=Q(e);return n}function bT(r,e){const t=[];return RT(r,e,t),t.sort((n,s)=>n.order-s.order),t}function RT(r,e,t){const n=ri(e);if(n)for(let s=0;s<n.length;s++)t.push(n[s]);el(e,s=>{RT(r,s,t)})}function il(r,e){const t=ri(e);if(t){let n=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[n]=t[s],n++);t.length=n,mT(e,t.length>0?t:void 0)}el(e,n=>{il(r,n)})}function Qd(r,e){const t=Uo(ST(r,e)),n=jd(r.transactionQueueTree_,e);return ek(n,s=>{Xl(r,s)}),Xl(r,n),gT(n,s=>{Xl(r,s)}),t}function Xl(r,e){const t=ri(e);if(t){const n=[];let s=[],i=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(V(i===o-1,"All SENT items should be at beginning of queue."),i=o,t[o].status=3,t[o].abortReason="set"):(V(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(An(r.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&n.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?mT(e,void 0):t.length=i+1,vt(r.eventQueue_,Uo(e),s);for(let o=0;o<n.length;o++)ei(n[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ck(r){let e="";const t=r.split("/");for(let n=0;n<t.length;n++)if(t[n].length>0){let s=t[n];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Pk(r){const e={};r.charAt(0)==="?"&&(r=r.substring(1));for(const t of r.split("&")){if(t.length===0)continue;const n=t.split("=");n.length===2?e[decodeURIComponent(n[0])]=decodeURIComponent(n[1]):et(`Invalid query segment '${t}' in query '${r}'`)}return e}const O_=function(r,e){const t=Nk(r),n=t.namespace;t.domain==="firebase.com"&&Jt(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!n||n==="undefined")&&t.domain!=="localhost"&&Jt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||MP();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new VE(t.host,t.secure,n,s,e,"",n!==t.subdomain),path:new he(t.pathString)}},Nk=function(r){let e="",t="",n="",s="",i="",o=!0,a="https",l=443;if(typeof r=="string"){let u=r.indexOf("//");u>=0&&(a=r.substring(0,u-1),r=r.substring(u+2));let d=r.indexOf("/");d===-1&&(d=r.length);let f=r.indexOf("?");f===-1&&(f=r.length),e=r.substring(0,Math.min(d,f)),d<f&&(s=Ck(r.substring(d,f)));const m=Pk(r.substring(Math.min(r.length,f)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const y=e.slice(0,u);if(y.toLowerCase()==="localhost")t="localhost";else if(y.split(".").length<=2)t=y;else{const S=e.indexOf(".");n=e.substring(0,S).toLowerCase(),t=e.substring(S+1),i=n}"ns"in m&&(i=m.ns)}return{host:e,port:l,domain:t,subdomain:n,secure:o,scheme:a,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(e,t,n,s){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ge(this.snapshot.exportVal())}}class Dk{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return V(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Vk{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new Ct;return Ek(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){rs("OnDisconnect.remove",this._path);const e=new Ct;return V_(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){rs("OnDisconnect.set",this._path),Hu("OnDisconnect.set",e,this._path);const t=new Ct;return V_(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){rs("OnDisconnect.setWithPriority",this._path),Hu("OnDisconnect.setWithPriority",e,this._path),ok("OnDisconnect.setWithPriority",t);const n=new Ct;return Tk(this._repo,this._path,e,t,n.wrapCallback(()=>{})),n.promise}update(e){rs("OnDisconnect.update",this._path),ET("OnDisconnect.update",e,this._path);const t=new Ct;return wk(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e,t,n,s){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=s}get key(){return Y(this._path)?null:wd(this._path)}get ref(){return new Hn(this._repo,this._path)}get _queryIdentifier(){const e=I_(this._queryParams),t=yd(e);return t==="{}"?"default":t}get _queryObject(){return I_(this._queryParams)}isEqual(e){if(e=ie(e),!(e instanceof Yd))return!1;const t=this._repo===e._repo,n=vd(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&n&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+IN(this._path)}}class Hn extends Yd{constructor(e,t){super(e,t,new Rd,!1)}get parent(){const e=zE(this._path);return e===null?null:new Hn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class fc{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new he(e),n=Qu(this.ref,e);return new fc(this._node.getChild(t),n,ve)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(n,s)=>e(new fc(s,Qu(this.ref,n),ve)))}hasChild(e){const t=new he(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function px(r,e){return r=ie(r),r._checkNotDeleted("ref"),e!==void 0?Qu(r._root,e):r._root}function Qu(r,e){return r=ie(r),Q(r._path)===null?ak("child","path",e):TT("child","path",e),new Hn(r._repo,we(r._path,e))}function mx(r){return r=ie(r),new Vk(r._repo,r._path)}function _x(r){return rs("remove",r._path),Ok(r,null)}function Ok(r,e){r=ie(r),rs("set",r._path),Hu("set",e,r._path);const t=new Ct;return gk(r._repo,r._path,e,null,t.wrapCallback(()=>{})),t.promise}function gx(r,e){ET("update",e,r._path);const t=new Ct;return yk(r._repo,r._path,e,t.wrapCallback(()=>{})),t.promise}class Jd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const n=t._queryParams.getIndex();return new kk("value",this,new fc(e.snapshotNode,new Hn(t._repo,t._path),n))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Dk(this,e,t):null}matches(e){return e instanceof Jd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Mk(r,e,t,n,s){const i=new xk(t,void 0),o=new Jd(i);return vk(r._repo,r,o),()=>Ak(r._repo,r,o)}function yx(r,e,t,n){return Mk(r,"value",e)}k0(Hn);L0(Hn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk="FIREBASE_DATABASE_EMULATOR_HOST",Yu={};let Fk=!1;function Uk(r,e,t,n){const s=e.lastIndexOf(":"),i=e.substring(0,s),o=Xt(i);r.repoInfo_=new VE(e,o,r.repoInfo_.namespace,r.repoInfo_.webSocketOnly,r.repoInfo_.nodeAdmin,r.repoInfo_.persistenceKey,r.repoInfo_.includeNamespaceInQueryParams,!0,t),n&&(r.authTokenProvider_=n)}function Bk(r,e,t,n,s){let i=n||r.options.databaseURL;i===void 0&&(r.options.projectId||Jt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),qe("Using default host for project ",r.options.projectId),i=`${r.options.projectId}-default-rtdb.firebaseio.com`);let o=O_(i,s),a=o.repoInfo,l;typeof process<"u"&&t_&&(l=t_[Lk]),l?(i=`http://${l}?ns=${a.namespace}`,o=O_(i,s),a=o.repoInfo):o.repoInfo.secure;const u=new KP(r.name,r.options,e);ck("Invalid Firebase Database URL",o),Y(o.path)||Jt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=Gk(a,r,u,new $P(r,t));return new zk(d,r)}function qk(r,e){const t=Yu[e];(!t||t[r.key]!==r)&&Jt(`Database ${e}(${r.repoInfo_}) has already been deleted.`),Sk(r),delete t[r.key]}function Gk(r,e,t,n){let s=Yu[e.name];s||(s={},Yu[e.name]=s);let i=s[r.toURLString()];return i&&Jt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new fk(r,Fk,t,n),s[r.toURLString()]=i,i}class zk{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(pk(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Hn(this._repo,ae())),this._rootInternal}_delete(){return this._rootInternal!==null&&(qk(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Jt("Cannot call "+e+" on a deleted database.")}}function jk(r=th(),e){const t=Gs(r,"database").getImmediate({identifier:e});if(!t._instanceStarted){const n=G_("database");n&&Wk(t,...n)}return t}function Wk(r,e,t,n={}){r=ie(r),r._checkNotDeleted("useEmulator");const s=`${e}:${t}`,i=r._repoInternal;if(r._instanceStarted){if(s===r._repoInternal.repoInfo_.host&&pt(n,i.repoInfo_.emulatorOptions))return;Jt("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(i.repoInfo_.nodeAdmin)n.mockUserToken&&Jt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Ra(Ra.OWNER);else if(n.mockUserToken){const a=typeof n.mockUserToken=="string"?n.mockUserToken:W_(n.mockUserToken,r.app.options.projectId);o=new Ra(a)}Xt(e)&&(mc(e),Xu("Database",!0)),Uk(i,s,n,o)}/**
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
 */function $k(r){NP(Dr),_r(new kn("database",(e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return Bk(n,s,i,t)},"PUBLIC").setMultipleInstances(!0)),kt(n_,r_,r),kt(n_,r_,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kk={".sv":"timestamp"};function Ix(){return Kk}Wt.prototype.simpleListen=function(r,e){this.sendRequest("q",{p:r},e)};Wt.prototype.echo=function(r,e){this.sendRequest("echo",{d:r},e)};$k();const Hk={apiKey:"AIzaSyDif5g62oVWT460e5q3Kpg7txgRN8VXk24",authDomain:"gustoplan-dev.firebaseapp.com",projectId:"gustoplan-dev",storageBucket:"gustoplan-dev.firebasestorage.app",messagingSenderId:"554162135180",appId:"1:554162135180:web:f5addf322a0977ffe31ba9",databaseURL:"https://gustoplan-dev-default-rtdb.europe-west1.firebasedatabase.app"},Xd=eg(Hk),Ex=aP(Xd),Tx=MS(Xd),wx=jk(Xd);export{Tt as $,gE as A,lP as B,lt as C,oD as D,Mt as E,de as F,ut as G,Or as H,Mr as I,me as J,D as K,Lt as L,oP as M,Zs as N,xo as O,PP as P,je as Q,ba as R,$c as S,Vo as T,jc as U,pd as V,ht as W,Wc as X,wn as Y,ce as Z,CP as _,iP as a,DD as a$,bP as a0,dh as a1,Re as a2,yr as a3,O as a4,Zk as a5,BS as a6,Ee as a7,fx as a8,ee as a9,bD as aA,SD as aB,Se as aC,Oo as aD,gP as aE,$D as aF,OD as aG,MD as aH,FD as aI,UD as aJ,ax as aK,rx as aL,aD as aM,TD as aN,wD as aO,Qm as aP,KD as aQ,QD as aR,HD as aS,cP as aT,jD as aU,WD as aV,yD as aW,YD as aX,JD as aY,AP as aZ,rE as a_,Xk as aa,dx as ab,hx as ac,nD as ad,mt as ae,YS as af,PD as ag,ND as ah,ID as ai,nx as aj,tx as ak,CD as al,uD as am,sD as an,sP as ao,mP as ap,ux as aq,ZD as ar,fD as as,lx as at,mD as au,kD as av,cD as aw,lD as ax,dD as ay,cx as az,zD as b,iD as b0,ex as b1,ox as b2,Jk as b3,xD as b4,AD as b5,vD as b6,RD as b7,pD as b8,sx as b9,hD as ba,Qk as bb,Yk as bc,Tx as bd,rD as c,Ex as d,ix as e,GD as f,LD as g,VD as h,aP as i,px as j,mx as k,Ok as l,yx as m,gx as n,Xm as o,_x as p,_D as q,wx as r,BD as s,Ix as t,qD as u,ED as v,gD as w,XD as x,Hk as y,co as z};
