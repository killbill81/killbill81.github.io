(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const Pg=()=>{};var su={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O=function(n,e){if(!n)throw os(e)},os=function(n){return new Error("Firebase Database ("+dd.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Ng=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],a=n[t++],c=n[t++],l=((i&7)<<18|(r&63)<<12|(a&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],a=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|a&63)}}return e.join("")},Ba={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],a=i+1<n.length,c=a?n[i+1]:0,l=i+2<n.length,h=l?n[i+2]:0,f=r>>2,p=(r&3)<<4|c>>4;let g=(c&15)<<2|h>>6,C=h&63;l||(C=64,a||(g=64)),s.push(t[f],t[p],t[g],t[C])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(fd(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ng(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;const h=i<n.length?t[n.charAt(i)]:64;++i;const p=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||c==null||h==null||p==null)throw new kg;const g=r<<2|c>>4;if(s.push(g),h!==64){const C=c<<4&240|h>>2;if(s.push(C),p!==64){const P=h<<6&192|p;s.push(P)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class kg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pd=function(n){const e=fd(n);return Ba.encodeByteArray(e,!0)},sr=function(n){return pd(n).replace(/\./g,"")},ir=function(n){try{return Ba.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(n){return md(void 0,n)}function md(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Og(t)||(n[t]=md(n[t],e[t]));return n}function Og(n){return n!=="__proto__"}/**
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
 */function Vg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Mg=()=>Vg().__FIREBASE_DEFAULTS__,Lg=()=>{if(typeof process>"u"||typeof su>"u")return;const n=su.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},xg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ir(n[1]);return e&&JSON.parse(e)},Or=()=>{try{return Pg()||Mg()||Lg()||xg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},gd=n=>Or()?.emulatorHosts?.[n],_d=n=>{const e=gd(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},yd=()=>Or()?.config,Ed=n=>Or()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function nn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ja(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Td(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[sr(JSON.stringify(t)),sr(JSON.stringify(a)),""].join(".")}const js={};function Fg(){const n={prod:[],emulator:[]};for(const e of Object.keys(js))js[e]?n.emulator.push(e):n.prod.push(e);return n}function Ug(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let iu=!1;function Wa(n,e){if(typeof window>"u"||typeof document>"u"||!nn(window.location.host)||js[n]===e||js[n]||iu)return;js[n]=e;function t(g){return`__firebase__banner__${g}`}const s="__firebase__banner",r=Fg().prod.length>0;function a(){const g=document.getElementById(s);g&&g.remove()}function c(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function l(g,C){g.setAttribute("width","24"),g.setAttribute("id",C),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function h(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{iu=!0,a()},g}function f(g,C){g.setAttribute("id",C),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=Ug(s),C=t("text"),P=document.getElementById(C)||document.createElement("span"),D=t("learnmore"),N=document.getElementById(D)||document.createElement("a"),j=t("preprendIcon"),W=document.getElementById(j)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const K=g.element;c(K),f(N,D);const Ae=h();l(W,j),K.append(W,P,N,Ae),document.body.appendChild(K)}r?(P.innerText="Preview backend disconnected.",W.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(W.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",C)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $a(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Me())}function Bg(){const n=Or()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function qg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function jg(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Id(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Wg(){const n=Me();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function $g(){return dd.NODE_ADMIN===!0}function zg(){return!Bg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Hg(){try{return typeof indexedDB=="object"}catch{return!1}}function Gg(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg="FirebaseError";class Rt extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Kg,Object.setPrototypeOf(this,Rt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ci.prototype.create)}}class ci{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],a=r?Qg(r,s):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new Rt(i,c,s)}}function Qg(n,e){return n.replace(Yg,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Yg=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(n){return JSON.parse(n)}function Ce(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=Js(ir(r[0])||""),t=Js(ir(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},Xg=function(n){const e=vd(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Jg=function(n){const e=vd(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Kn(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Zo(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function rr(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function Tt(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],a=e[i];if(ru(r)&&ru(a)){if(!Tt(r,a))return!1}else if(r!==a)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function ru(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)s[p]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let p=0;p<16;p++)s[p]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let p=16;p<80;p++){const g=s[p-3]^s[p-8]^s[p-14]^s[p-16];s[p]=(g<<1|g>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],a=this.chain_[2],c=this.chain_[3],l=this.chain_[4],h,f;for(let p=0;p<80;p++){p<40?p<20?(h=c^r&(a^c),f=1518500249):(h=r^a^c,f=1859775393):p<60?(h=r&a|c&(r|a),f=2400959708):(h=r^a^c,f=3395469782);const g=(i<<5|i>>>27)+h+l+f+s[p]&4294967295;l=c,c=a,a=(r<<30|r>>>2)&4294967295,r=i,i=g}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let a=this.inbuf_;for(;i<t;){if(a===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[a]=e.charCodeAt(i),++a,++i,a===this.blockSize){this.compress_(r),a=0;break}}else for(;i<t;)if(r[a]=e[i],++a,++i,a===this.blockSize){this.compress_(r),a=0;break}}this.inbuf_=a,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function e_(n,e){const t=new t_(n,e);return t.subscribe.bind(t)}class t_{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let i;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");n_(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:s},i.next===void 0&&(i.next=Vo),i.error===void 0&&(i.error=Vo),i.complete===void 0&&(i.complete=Vo);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function n_(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Vo(){}function s_(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,O(s<n.length,"Surrogate pair missing trail surrogate.");const a=n.charCodeAt(s)-56320;i=65536+(r<<10)+a}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Vr=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function pe(n){return n&&n._delegate?n._delegate:n}class Kt{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const dn="[DEFAULT]";/**
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
 */class r_{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new qa;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(a_(e))try{this.getOrInitializeService({instanceIdentifier:dn})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=dn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=dn){return this.instances.has(e)}getOptions(e=dn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(r);s===c&&a.resolve(i)}return i}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(s)??new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:o_(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=dn){return this.component?this.component.multipleInstances?e:dn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function o_(n){return n===dn?void 0:n}function a_(n){return n.instantiationMode==="EAGER"}/**
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
 */class c_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new r_(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})($||($={}));const l_={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},u_=$.INFO,h_={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},d_=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=h_[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mr{constructor(e){this.name=e,this._logLevel=u_,this._logHandler=d_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?l_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...e),this._logHandler(this,$.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...e),this._logHandler(this,$.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$.INFO,...e),this._logHandler(this,$.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$.WARN,...e),this._logHandler(this,$.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...e),this._logHandler(this,$.ERROR,...e)}}const f_=(n,e)=>e.some(t=>n instanceof t);let ou,au;function p_(){return ou||(ou=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function m_(){return au||(au=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wd=new WeakMap,ea=new WeakMap,Ad=new WeakMap,Mo=new WeakMap,za=new WeakMap;function g_(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",a)},r=()=>{t(qt(n.result)),i()},a=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&wd.set(t,n)}).catch(()=>{}),za.set(e,n),e}function __(n){if(ea.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",a),n.removeEventListener("abort",a)},r=()=>{t(),i()},a=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",a),n.addEventListener("abort",a)});ea.set(n,e)}let ta={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ea.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ad.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return qt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function y_(n){ta=n(ta)}function E_(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Lo(this),e,...t);return Ad.set(s,e.sort?e.sort():[e]),qt(s)}:m_().includes(n)?function(...e){return n.apply(Lo(this),e),qt(wd.get(this))}:function(...e){return qt(n.apply(Lo(this),e))}}function T_(n){return typeof n=="function"?E_(n):(n instanceof IDBTransaction&&__(n),f_(n,p_())?new Proxy(n,ta):n)}function qt(n){if(n instanceof IDBRequest)return g_(n);if(Mo.has(n))return Mo.get(n);const e=T_(n);return e!==n&&(Mo.set(n,e),za.set(e,n)),e}const Lo=n=>za.get(n);function I_(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const a=indexedDB.open(n,e),c=qt(a);return s&&a.addEventListener("upgradeneeded",l=>{s(qt(a.result),l.oldVersion,l.newVersion,qt(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const v_=["get","getKey","getAll","getAllKeys","count"],w_=["put","add","delete","clear"],xo=new Map;function cu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(xo.get(e))return xo.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=w_.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||v_.includes(t)))return;const r=async function(a,...c){const l=this.transaction(a,i?"readwrite":"readonly");let h=l.store;return s&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),i&&l.done]))[0]};return xo.set(e,r),r}y_(n=>({...n,get:(e,t,s)=>cu(e,t)||n.get(e,t,s),has:(e,t)=>!!cu(e,t)||n.has(e,t)}));/**
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
 */class A_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(C_(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function C_(n){return n.getComponent()?.type==="VERSION"}const na="@firebase/app",lu="0.14.3";/**
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
 */const It=new Mr("@firebase/app"),S_="@firebase/app-compat",R_="@firebase/analytics-compat",b_="@firebase/analytics",P_="@firebase/app-check-compat",N_="@firebase/app-check",k_="@firebase/auth",D_="@firebase/auth-compat",O_="@firebase/database",V_="@firebase/data-connect",M_="@firebase/database-compat",L_="@firebase/functions",x_="@firebase/functions-compat",F_="@firebase/installations",U_="@firebase/installations-compat",B_="@firebase/messaging",q_="@firebase/messaging-compat",j_="@firebase/performance",W_="@firebase/performance-compat",$_="@firebase/remote-config",z_="@firebase/remote-config-compat",H_="@firebase/storage",G_="@firebase/storage-compat",K_="@firebase/firestore",Q_="@firebase/ai",Y_="@firebase/firestore-compat",X_="firebase",J_="12.3.0";/**
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
 */const sa="[DEFAULT]",Z_={[na]:"fire-core",[S_]:"fire-core-compat",[b_]:"fire-analytics",[R_]:"fire-analytics-compat",[N_]:"fire-app-check",[P_]:"fire-app-check-compat",[k_]:"fire-auth",[D_]:"fire-auth-compat",[O_]:"fire-rtdb",[V_]:"fire-data-connect",[M_]:"fire-rtdb-compat",[L_]:"fire-fn",[x_]:"fire-fn-compat",[F_]:"fire-iid",[U_]:"fire-iid-compat",[B_]:"fire-fcm",[q_]:"fire-fcm-compat",[j_]:"fire-perf",[W_]:"fire-perf-compat",[$_]:"fire-rc",[z_]:"fire-rc-compat",[H_]:"fire-gcs",[G_]:"fire-gcs-compat",[K_]:"fire-fst",[Y_]:"fire-fst-compat",[Q_]:"fire-vertex","fire-js":"fire-js",[X_]:"fire-js-all"};/**
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
 */const or=new Map,ey=new Map,ia=new Map;function uu(n,e){try{n.container.addComponent(e)}catch(t){It.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function yn(n){const e=n.name;if(ia.has(e))return It.debug(`There were multiple attempts to register component ${e}.`),!1;ia.set(e,n);for(const t of or.values())uu(t,n);for(const t of ey.values())uu(t,n);return!0}function Lr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Qe(n){return n==null?!1:n.settings!==void 0}/**
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
 */const ty={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},jt=new ci("app","Firebase",ty);/**
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
 */class ny{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Kt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jt.create("app-deleted",{appName:this._name})}}/**
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
 */const Cn=J_;function Cd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:sa,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw jt.create("bad-app-name",{appName:String(i)});if(t||(t=yd()),!t)throw jt.create("no-options");const r=or.get(i);if(r){if(Tt(t,r.options)&&Tt(s,r.config))return r;throw jt.create("duplicate-app",{appName:i})}const a=new c_(i);for(const l of ia.values())a.addComponent(l);const c=new ny(t,s,a);return or.set(i,c),c}function Ha(n=sa){const e=or.get(n);if(!e&&n===sa&&yd())return Cd();if(!e)throw jt.create("no-app",{appName:n});return e}function rt(n,e,t){let s=Z_[n]??n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&a.push("and"),r&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),It.warn(a.join(" "));return}yn(new Kt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const sy="firebase-heartbeat-database",iy=1,Zs="firebase-heartbeat-store";let Fo=null;function Sd(){return Fo||(Fo=I_(sy,iy,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Zs)}catch(t){console.warn(t)}}}}).catch(n=>{throw jt.create("idb-open",{originalErrorMessage:n.message})})),Fo}async function ry(n){try{const t=(await Sd()).transaction(Zs),s=await t.objectStore(Zs).get(Rd(n));return await t.done,s}catch(e){if(e instanceof Rt)It.warn(e.message);else{const t=jt.create("idb-get",{originalErrorMessage:e?.message});It.warn(t.message)}}}async function hu(n,e){try{const s=(await Sd()).transaction(Zs,"readwrite");await s.objectStore(Zs).put(e,Rd(n)),await s.done}catch(t){if(t instanceof Rt)It.warn(t.message);else{const s=jt.create("idb-set",{originalErrorMessage:t?.message});It.warn(s.message)}}}function Rd(n){return`${n.name}!${n.options.appId}`}/**
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
 */const oy=1024,ay=30;class cy{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new uy(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=du();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats.length>ay){const i=hy(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){It.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=du(),{heartbeatsToSend:t,unsentEntries:s}=ly(this._heartbeatsCache.heartbeats),i=sr(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return It.warn(e),""}}}function du(){return new Date().toISOString().substring(0,10)}function ly(n,e=oy){const t=[];let s=n.slice();for(const i of n){const r=t.find(a=>a.agent===i.agent);if(r){if(r.dates.push(i.date),fu(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),fu(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class uy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Hg()?Gg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ry(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return hu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return hu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function fu(n){return sr(JSON.stringify({version:2,heartbeats:n})).length}function hy(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function dy(n){yn(new Kt("platform-logger",e=>new A_(e),"PRIVATE")),yn(new Kt("heartbeat",e=>new cy(e),"PRIVATE")),rt(na,lu,n),rt(na,lu,"esm2020"),rt("fire-js","")}dy("");function bd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fy=bd,Pd=new ci("auth","Firebase",bd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar=new Mr("@firebase/auth");function py(n,...e){ar.logLevel<=$.WARN&&ar.warn(`Auth (${Cn}): ${n}`,...e)}function Hi(n,...e){ar.logLevel<=$.ERROR&&ar.error(`Auth (${Cn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(n,...e){throw Ga(n,...e)}function ot(n,...e){return Ga(n,...e)}function Nd(n,e,t){const s={...fy(),[e]:t};return new ci("auth","Firebase",s).create(e,{appName:n.name})}function gn(n){return Nd(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ga(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Pd.create(n,...e)}function F(n,e,...t){if(!n)throw Ga(e,...t)}function mt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Hi(e),new Error(e)}function wt(n,e){n||mt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(){return typeof self<"u"&&self.location?.href||""}function my(){return pu()==="http:"||pu()==="https:"}function pu(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(my()||jg()||"connection"in navigator)?navigator.onLine:!0}function _y(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,t){this.shortDelay=e,this.longDelay=t,wt(t>e,"Short delay should be less than long delay!"),this.isMobile=$a()||Id()}get(){return gy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(n,e){wt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Ty=new li(3e4,6e4);function Qa(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function cs(n,e,t,s,i={}){return Dd(n,i,async()=>{let r={},a={};s&&(e==="GET"?a=s:r={body:JSON.stringify(s)});const c=as({key:n.config.apiKey,...a}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:l,...r};return qg()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&nn(n.emulatorConfig.host)&&(h.credentials="include"),kd.fetch()(await Od(n,n.config.apiHost,t,c),h)})}async function Dd(n,e,t){n._canInitEmulator=!1;const s={...yy,...e};try{const i=new vy(n),r=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await r.json();if("needConfirmation"in a)throw Fi(n,"account-exists-with-different-credential",a);if(r.ok&&!("errorMessage"in a))return a;{const c=r.ok?a.errorMessage:a.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fi(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Fi(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw Fi(n,"user-disabled",a);const f=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Nd(n,f,h);vt(n,f)}}catch(i){if(i instanceof Rt)throw i;vt(n,"network-request-failed",{message:String(i)})}}async function Iy(n,e,t,s,i={}){const r=await cs(n,e,t,s,i);return"mfaPendingCredential"in r&&vt(n,"multi-factor-auth-required",{_serverResponse:r}),r}async function Od(n,e,t,s){const i=`${e}${t}?${s}`,r=n,a=r.config.emulator?Ka(n.config,i):`${n.config.apiScheme}://${i}`;return Ey.includes(t)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(a).toString():a}class vy{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(ot(this.auth,"network-request-failed")),Ty.get())})}}function Fi(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const i=ot(n,e,s);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wy(n,e){return cs(n,"POST","/v1/accounts:delete",e)}async function cr(n,e){return cs(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ay(n,e=!1){const t=pe(n),s=await t.getIdToken(e),i=Ya(s);F(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,a=r?.sign_in_provider;return{claims:i,token:s,authTime:Ws(Uo(i.auth_time)),issuedAtTime:Ws(Uo(i.iat)),expirationTime:Ws(Uo(i.exp)),signInProvider:a||null,signInSecondFactor:r?.sign_in_second_factor||null}}function Uo(n){return Number(n)*1e3}function Ya(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Hi("JWT malformed, contained fewer than 3 sections"),null;try{const i=ir(t);return i?JSON.parse(i):(Hi("Failed to decode base64 JWT payload"),null)}catch(i){return Hi("Caught error parsing JWT payload as JSON",i?.toString()),null}}function mu(n){const e=Ya(n);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ei(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Rt&&Cy(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function Cy({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ws(this.lastLoginAt),this.creationTime=Ws(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function lr(n){const e=n.auth,t=await n.getIdToken(),s=await ei(n,cr(e,{idToken:t}));F(s?.users.length,e,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const r=i.providerUserInfo?.length?Vd(i.providerUserInfo):[],a=by(n.providerData,r),c=n.isAnonymous,l=!(n.email&&i.passwordHash)&&!a?.length,h=c?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new oa(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(n,f)}async function Ry(n){const e=pe(n);await lr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function by(n,e){return[...n.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Vd(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Py(n,e){const t=await Dd(n,{},async()=>{const s=as({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,a=await Od(n,i,"/v1/token",`key=${r}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:s};return n.emulatorConfig&&nn(n.emulatorConfig.host)&&(l.credentials="include"),kd.fetch()(a,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Ny(n,e){return cs(n,"POST","/v2/accounts:revokeToken",Qa(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):mu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){F(e.length!==0,"internal-error");const t=mu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(F(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:i,expiresIn:r}=await Py(e,t);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:i,expirationTime:r}=t,a=new qn;return s&&(F(typeof s=="string","internal-error",{appName:e}),a.refreshToken=s),i&&(F(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),r&&(F(typeof r=="number","internal-error",{appName:e}),a.expirationTime=r),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qn,this.toJSON())}_performRefresh(){return mt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(n,e){F(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Xe{constructor({uid:e,auth:t,stsTokenManager:s,...i}){this.providerId="firebase",this.proactiveRefresh=new Sy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new oa(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await ei(this,this.stsTokenManager.getToken(this.auth,e));return F(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ay(this,e)}reload(){return Ry(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Xe({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await lr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qe(this.auth.app))return Promise.reject(gn(this.auth));const e=await this.getIdToken();return await ei(this,wy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,i=t.email??void 0,r=t.phoneNumber??void 0,a=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,h=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:p,emailVerified:g,isAnonymous:C,providerData:P,stsTokenManager:D}=t;F(p&&D,e,"internal-error");const N=qn.fromJSON(this.name,D);F(typeof p=="string",e,"internal-error"),Mt(s,e.name),Mt(i,e.name),F(typeof g=="boolean",e,"internal-error"),F(typeof C=="boolean",e,"internal-error"),Mt(r,e.name),Mt(a,e.name),Mt(c,e.name),Mt(l,e.name),Mt(h,e.name),Mt(f,e.name);const j=new Xe({uid:p,auth:e,email:i,emailVerified:g,displayName:s,isAnonymous:C,photoURL:a,phoneNumber:r,tenantId:c,stsTokenManager:N,createdAt:h,lastLoginAt:f});return P&&Array.isArray(P)&&(j.providerData=P.map(W=>({...W}))),l&&(j._redirectEventId=l),j}static async _fromIdTokenResponse(e,t,s=!1){const i=new qn;i.updateFromServerResponse(t);const r=new Xe({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await lr(r),r}static async _fromGetAccountInfoResponse(e,t,s){const i=t.users[0];F(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?Vd(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!r?.length,c=new qn;c.updateFromIdToken(s);const l=new Xe({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new oa(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!r?.length};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu=new Map;function gt(n){wt(n instanceof Function,"Expected a class definition");let e=gu.get(n);return e?(wt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,gu.set(n,e),e)}/**
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
 */class Md{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Md.type="NONE";const _u=Md;/**
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
 */function Gi(n,e,t){return`firebase:${n}:${e}:${t}`}class jn{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Gi(this.userKey,i.apiKey,r),this.fullPersistenceKey=Gi("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await cr(this.auth,{idToken:e}).catch(()=>{});return t?Xe._fromGetAccountInfoResponse(this.auth,t,e):null}return Xe._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new jn(gt(_u),e,s);const i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let r=i[0]||gt(_u);const a=Gi(s,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(a);if(f){let p;if(typeof f=="string"){const g=await cr(e,{idToken:f}).catch(()=>{});if(!g)break;p=await Xe._fromGetAccountInfoResponse(e,g,f)}else p=Xe._fromJSON(e,f);h!==r&&(c=p),r=h;break}}catch{}const l=i.filter(h=>h._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new jn(r,e,s):(r=l[0],c&&await r._set(a,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==r)try{await h._remove(a)}catch{}})),new jn(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ud(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ld(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qd(e))return"Blackberry";if(jd(e))return"Webos";if(xd(e))return"Safari";if((e.includes("chrome/")||Fd(e))&&!e.includes("edge/"))return"Chrome";if(Bd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if(s?.length===2)return s[1]}return"Other"}function Ld(n=Me()){return/firefox\//i.test(n)}function xd(n=Me()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Fd(n=Me()){return/crios\//i.test(n)}function Ud(n=Me()){return/iemobile/i.test(n)}function Bd(n=Me()){return/android/i.test(n)}function qd(n=Me()){return/blackberry/i.test(n)}function jd(n=Me()){return/webos/i.test(n)}function Xa(n=Me()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function ky(n=Me()){return Xa(n)&&!!window.navigator?.standalone}function Dy(){return Wg()&&document.documentMode===10}function Wd(n=Me()){return Xa(n)||Bd(n)||jd(n)||qd(n)||/windows phone/i.test(n)||Ud(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $d(n,e=[]){let t;switch(n){case"Browser":t=yu(Me());break;case"Worker":t=`${yu(Me())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Cn}/${s}`}/**
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
 */class Oy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=r=>new Promise((a,c)=>{try{const l=e(r);a(l)}catch(l){c(l)}});s.onAbort=t,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function Vy(n,e={}){return cs(n,"GET","/v2/passwordPolicy",Qa(n,e))}/**
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
 */const My=6;class Ly{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??My,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(e,t,s,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Eu(this),this.idTokenSubscription=new Eu(this),this.beforeStateQueue=new Oy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Pd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=gt(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await jn.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await cr(this,{idToken:e}),s=await Xe._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Qe(this.app)){const r=this.app.settings.authIdToken;return r?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(r).then(a,a))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=this.redirectUser?._redirectEventId,a=s?._redirectEventId,c=await this.tryRedirectSignIn(e);(!r||r===a)&&c?.user&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(r){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(r))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await lr(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_y()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qe(this.app))return Promise.reject(gn(this));const t=e?pe(e):null;return t&&F(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qe(this.app)?Promise.reject(gn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qe(this.app)?Promise.reject(gn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Vy(this),t=new Ly(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ci("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await Ny(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&gt(e)||this._popupRedirectResolver;F(t,this,"argument-error"),this.redirectPersistenceManager=await jn.create(this,[gt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,i){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(F(c,this,"internal-error"),c.then(()=>{a||r(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,s,i);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$d(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(Qe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&py(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Ja(n){return pe(n)}class Eu{constructor(e){this.auth=e,this.observer=null,this.addObserver=e_(t=>this.observer=t)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Za={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Fy(n){Za=n}function Uy(n){return Za.loadJS(n)}function By(){return Za.gapiScript}function qy(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jy(n,e){const t=Lr(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),r=t.getOptions();if(Tt(r,e??{}))return i;vt(i,"already-initialized")}return t.initialize({options:e})}function Wy(n,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(gt);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e?.popupRedirectResolver)}function $y(n,e,t){const s=Ja(n);F(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=zd(e),{host:a,port:c}=zy(e),l=c===null?"":`:${c}`,h={url:`${r}//${a}${l}/`},f=Object.freeze({host:a,port:c,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){F(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),F(Tt(h,s.config.emulator)&&Tt(f,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=h,s.emulatorConfig=f,s.settings.appVerificationDisabledForTesting=!0,nn(a)?(ja(`${r}//${a}${l}`),Wa("Auth",!0)):Hy()}function zd(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function zy(n){const e=zd(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Tu(s.substr(r.length+1))}}else{const[r,a]=s.split(":");return{host:r,port:Tu(a)}}}function Tu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Hy(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return mt("not implemented")}_getIdTokenResponse(e){return mt("not implemented")}_linkToIdToken(e,t){return mt("not implemented")}_getReauthenticationResolver(e){return mt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wn(n,e){return Iy(n,"POST","/v1/accounts:signInWithIdp",Qa(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gy="http://localhost";class En extends Hd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new En(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):vt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i,...r}=t;if(!s||!i)return null;const a=new En(s,i);return a.idToken=r.idToken||void 0,a.accessToken=r.accessToken||void 0,a.secret=r.secret,a.nonce=r.nonce,a.pendingToken=r.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Wn(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Wn(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Wn(e,t)}buildRequest(){const e={requestUri:Gy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=as(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ui extends Gd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt extends ui{constructor(){super("facebook.com")}static credential(e){return En._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Lt.credentialFromTaggedObject(e)}static credentialFromError(e){return Lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Lt.credential(e.oauthAccessToken)}catch{return null}}}Lt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Lt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends ui{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return En._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return xt.credential(t,s)}catch{return null}}}xt.GOOGLE_SIGN_IN_METHOD="google.com";xt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends ui{constructor(){super("github.com")}static credential(e){return En._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ft.credentialFromTaggedObject(e)}static credentialFromError(e){return Ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ft.credential(e.oauthAccessToken)}catch{return null}}}Ft.GITHUB_SIGN_IN_METHOD="github.com";Ft.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends ui{constructor(){super("twitter.com")}static credential(e,t){return En._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Ut.credential(t,s)}catch{return null}}}Ut.TWITTER_SIGN_IN_METHOD="twitter.com";Ut.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,i=!1){const r=await Xe._fromIdTokenResponse(e,s,i),a=Iu(s);return new Qn({user:r,providerId:a,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const i=Iu(s);return new Qn({user:e,providerId:i,_tokenResponse:s,operationType:t})}}function Iu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends Rt{constructor(e,t,s,i){super(t.code,t.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,ur.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,i){return new ur(e,t,s,i)}}function Kd(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?ur._fromErrorAndOperation(n,r,e,s):r})}async function Ky(n,e,t=!1){const s=await ei(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Qn._forOperation(n,"link",s)}/**
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
 */async function Qy(n,e,t=!1){const{auth:s}=n;if(Qe(s.app))return Promise.reject(gn(s));const i="reauthenticate";try{const r=await ei(n,Kd(s,i,e,n),t);F(r.idToken,s,"internal-error");const a=Ya(r.idToken);F(a,s,"internal-error");const{sub:c}=a;return F(n.uid===c,s,"user-mismatch"),Qn._forOperation(n,i,r)}catch(r){throw r?.code==="auth/user-not-found"&&vt(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yy(n,e,t=!1){if(Qe(n.app))return Promise.reject(gn(n));const s="signIn",i=await Kd(n,s,e),r=await Qn._fromIdTokenResponse(n,s,i);return t||await n._updateCurrentUser(r.user),r}function Xy(n,e,t,s){return pe(n).onIdTokenChanged(e,t,s)}function Jy(n,e,t){return pe(n).beforeAuthStateChanged(e,t)}function mS(n,e,t,s){return pe(n).onAuthStateChanged(e,t,s)}function gS(n){return pe(n).signOut()}const hr="__sak";/**
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
 */class Qd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(hr,"1"),this.storage.removeItem(hr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zy=1e3,eE=10;class Yd extends Qd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Wd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),i=this.localCache[t];s!==i&&e(t,i,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const s=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(s);!t&&this.localCache[s]===a||this.notifyListeners(s,a)},r=this.storage.getItem(s);Dy()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,eE):i()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},Zy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Yd.type="LOCAL";const tE=Yd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd extends Qd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Xd.type="SESSION";const Jd=Xd;/**
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
 */function nE(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class xr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const s=new xr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:i,data:r}=t.data,a=this.handlersMap[i];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const c=Array.from(a).map(async h=>h(t.origin,r)),l=await nE(c);t.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class sE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,a;return new Promise((c,l)=>{const h=ec("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},s);a={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),c(g.data.response);break;default:clearTimeout(f),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(){return window}function iE(n){at().location.href=n}/**
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
 */function Zd(){return typeof at().WorkerGlobalScope<"u"&&typeof at().importScripts=="function"}async function rE(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function oE(){return navigator?.serviceWorker?.controller||null}function aE(){return Zd()?self:null}/**
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
 */const ef="firebaseLocalStorageDb",cE=1,dr="firebaseLocalStorage",tf="fbase_key";class hi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Fr(n,e){return n.transaction([dr],e?"readwrite":"readonly").objectStore(dr)}function lE(){const n=indexedDB.deleteDatabase(ef);return new hi(n).toPromise()}function aa(){const n=indexedDB.open(ef,cE);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(dr,{keyPath:tf})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(dr)?e(s):(s.close(),await lE(),e(await aa()))})})}async function vu(n,e,t){const s=Fr(n,!0).put({[tf]:e,value:t});return new hi(s).toPromise()}async function uE(n,e){const t=Fr(n,!1).get(e),s=await new hi(t).toPromise();return s===void 0?null:s.value}function wu(n,e){const t=Fr(n,!0).delete(e);return new hi(t).toPromise()}const hE=800,dE=3;class nf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await aa(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>dE)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xr._getInstance(aE()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await rE(),!this.activeServiceWorker)return;this.sender=new sE(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||oE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await aa();return await vu(e,hr,"1"),await wu(e,hr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>vu(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>uE(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>wu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Fr(i,!1).getAll();return new hi(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}nf.type="LOCAL";const fE=nf;new li(3e4,6e4);/**
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
 */function pE(n,e){return e?gt(e):(F(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class tc extends Hd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Wn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Wn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function mE(n){return Yy(n.auth,new tc(n),n.bypassAuthState)}function gE(n){const{auth:e,user:t}=n;return F(t,e,"internal-error"),Qy(t,new tc(n),n.bypassAuthState)}async function _E(n){const{auth:e,user:t}=n;return F(t,e,"internal-error"),Ky(t,new tc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e,t,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:i,tenantId:r,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return mE;case"linkViaPopup":case"linkViaRedirect":return _E;case"reauthViaPopup":case"reauthViaRedirect":return gE;default:vt(this.auth,"internal-error")}}resolve(e){wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE=new li(2e3,1e4);class Fn extends sf{constructor(e,t,s,i,r){super(e,t,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Fn.currentPopupAction&&Fn.currentPopupAction.cancel(),Fn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){wt(this.filter.length===1,"Popup operations only handle one event");const e=ec();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fn.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ot(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,yE.get())};e()}}Fn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EE="pendingRedirect",Ki=new Map;class TE extends sf{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Ki.get(this.auth._key());if(!e){try{const s=await IE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Ki.set(this.auth._key(),e)}return this.bypassAuthState||Ki.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function IE(n,e){const t=AE(e),s=wE(n);if(!await s._isAvailable())return!1;const i=await s._get(t)==="true";return await s._remove(t),i}function vE(n,e){Ki.set(n._key(),e)}function wE(n){return gt(n._redirectPersistence)}function AE(n){return Gi(EE,n.config.apiKey,n.name)}async function CE(n,e,t=!1){if(Qe(n.app))return Promise.reject(gn(n));const s=Ja(n),i=pE(s,e),a=await new TE(s,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await s._persistUserIfCurrent(a.user),await s._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE=600*1e3;class RE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!bE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!rf(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";t.onError(ot(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=SE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Au(e))}saveEventToCache(e){this.cachedEventUids.add(Au(e)),this.lastProcessedEventTime=Date.now()}}function Au(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function rf({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function bE(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rf(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PE(n,e={}){return cs(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kE=/^https?/;async function DE(n){if(n.config.emulator)return;const{authorizedDomains:e}=await PE(n);for(const t of e)try{if(OE(t))return}catch{}vt(n,"unauthorized-domain")}function OE(n){const e=ra(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===s}if(!kE.test(t))return!1;if(NE.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const VE=new li(3e4,6e4);function Cu(){const n=at().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function ME(n){return new Promise((e,t)=>{function s(){Cu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Cu(),t(ot(n,"network-request-failed"))},timeout:VE.get()})}if(at().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(at().gapi?.load)s();else{const i=qy("iframefcb");return at()[i]=()=>{gapi.load?s():t(ot(n,"network-request-failed"))},Uy(`${By()}?onload=${i}`).catch(r=>t(r))}}).catch(e=>{throw Qi=null,e})}let Qi=null;function LE(n){return Qi=Qi||ME(n),Qi}/**
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
 */const xE=new li(5e3,15e3),FE="__/auth/iframe",UE="emulator/auth/iframe",BE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jE(n){const e=n.config;F(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ka(e,UE):`https://${n.config.authDomain}/${FE}`,s={apiKey:e.apiKey,appName:n.name,v:Cn},i=qE.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${t}?${as(s).slice(1)}`}async function WE(n){const e=await LE(n),t=at().gapi;return F(t,n,"internal-error"),e.open({where:document.body,url:jE(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:BE,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const a=ot(n,"network-request-failed"),c=at().setTimeout(()=>{r(a)},xE.get());function l(){at().clearTimeout(c),i(s)}s.ping(l).then(l,()=>{r(a)})}))}/**
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
 */const $E={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zE=500,HE=600,GE="_blank",KE="http://localhost";class Su{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function QE(n,e,t,s=zE,i=HE){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const l={...$E,width:s.toString(),height:i.toString(),top:r,left:a},h=Me().toLowerCase();t&&(c=Fd(h)?GE:t),Ld(h)&&(e=e||KE,l.scrollbars="yes");const f=Object.entries(l).reduce((g,[C,P])=>`${g}${C}=${P},`,"");if(ky(h)&&c!=="_self")return YE(e||"",c),new Su(null);const p=window.open(e||"",c,f);F(p,n,"popup-blocked");try{p.focus()}catch{}return new Su(p)}function YE(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const XE="__/auth/handler",JE="emulator/auth/handler",ZE=encodeURIComponent("fac");async function Ru(n,e,t,s,i,r){F(n.config.authDomain,n,"auth-domain-config-required"),F(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Cn,eventId:i};if(e instanceof Gd){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Zo(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))a[f]=p}if(e instanceof ui){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await n._getAppCheckToken(),h=l?`#${ZE}=${encodeURIComponent(l)}`:"";return`${eT(n)}?${as(c).slice(1)}${h}`}function eT({config:n}){return n.emulator?Ka(n,JE):`https://${n.authDomain}/${XE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo="webStorageSupport";class tT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jd,this._completeRedirectFn=CE,this._overrideRedirectResult=vE}async _openPopup(e,t,s,i){wt(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const r=await Ru(e,t,s,ra(),i);return QE(e,r,ec())}async _openRedirect(e,t,s,i){await this._originValidation(e);const r=await Ru(e,t,s,ra(),i);return iE(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:r}=this.eventManagers[t];return i?Promise.resolve(i):(wt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await WE(e),s=new RE(e);return t.register("authEvent",i=>(F(i?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Bo,{type:Bo},i=>{const r=i?.[0]?.[Bo];r!==void 0&&t(!!r),vt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=DE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Wd()||xd()||Xa()}}const nT=tT;var bu="@firebase/auth",Pu="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iT(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function rT(n){yn(new Kt("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=s.options;F(a&&!a.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$d(n)},h=new xy(s,i,r,l);return Wy(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),yn(new Kt("auth-internal",e=>{const t=Ja(e.getProvider("auth").getImmediate());return(s=>new sT(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),rt(bu,Pu,iT(n)),rt(bu,Pu,"esm2020")}/**
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
 */const oT=300,aT=Ed("authIdTokenMaxAge")||oT;let Nu=null;const cT=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>aT)return;const i=t?.token;Nu!==i&&(Nu=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function lT(n=Ha()){const e=Lr(n,"auth");if(e.isInitialized())return e.getImmediate();const t=jy(n,{popupRedirectResolver:nT,persistence:[fE,tE,Jd]}),s=Ed("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const a=cT(r.toString());Jy(t,a,()=>a(t.currentUser)),Xy(t,c=>a(c))}}const i=gd("auth");return i&&$y(t,`http://${i}`),t}function uT(){return document.getElementsByTagName("head")?.[0]??document}Fy({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=i=>{const r=ot("internal-error");r.customData=i,t(r)},s.type="text/javascript",s.charset="UTF-8",uT().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});rT("Browser");var hT="firebase",dT="12.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rt(hT,dT,"app");var ku=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wt,of;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,_){function E(){}E.prototype=_.prototype,I.F=_.prototype,I.prototype=new E,I.prototype.constructor=I,I.D=function(v,T,A){for(var y=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)y[Ue-2]=arguments[Ue];return _.prototype[T].apply(v,y)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,_,E){E||(E=0);const v=Array(16);if(typeof _=="string")for(var T=0;T<16;++T)v[T]=_.charCodeAt(E++)|_.charCodeAt(E++)<<8|_.charCodeAt(E++)<<16|_.charCodeAt(E++)<<24;else for(T=0;T<16;++T)v[T]=_[E++]|_[E++]<<8|_[E++]<<16|_[E++]<<24;_=I.g[0],E=I.g[1],T=I.g[2];let A=I.g[3],y;y=_+(A^E&(T^A))+v[0]+3614090360&4294967295,_=E+(y<<7&4294967295|y>>>25),y=A+(T^_&(E^T))+v[1]+3905402710&4294967295,A=_+(y<<12&4294967295|y>>>20),y=T+(E^A&(_^E))+v[2]+606105819&4294967295,T=A+(y<<17&4294967295|y>>>15),y=E+(_^T&(A^_))+v[3]+3250441966&4294967295,E=T+(y<<22&4294967295|y>>>10),y=_+(A^E&(T^A))+v[4]+4118548399&4294967295,_=E+(y<<7&4294967295|y>>>25),y=A+(T^_&(E^T))+v[5]+1200080426&4294967295,A=_+(y<<12&4294967295|y>>>20),y=T+(E^A&(_^E))+v[6]+2821735955&4294967295,T=A+(y<<17&4294967295|y>>>15),y=E+(_^T&(A^_))+v[7]+4249261313&4294967295,E=T+(y<<22&4294967295|y>>>10),y=_+(A^E&(T^A))+v[8]+1770035416&4294967295,_=E+(y<<7&4294967295|y>>>25),y=A+(T^_&(E^T))+v[9]+2336552879&4294967295,A=_+(y<<12&4294967295|y>>>20),y=T+(E^A&(_^E))+v[10]+4294925233&4294967295,T=A+(y<<17&4294967295|y>>>15),y=E+(_^T&(A^_))+v[11]+2304563134&4294967295,E=T+(y<<22&4294967295|y>>>10),y=_+(A^E&(T^A))+v[12]+1804603682&4294967295,_=E+(y<<7&4294967295|y>>>25),y=A+(T^_&(E^T))+v[13]+4254626195&4294967295,A=_+(y<<12&4294967295|y>>>20),y=T+(E^A&(_^E))+v[14]+2792965006&4294967295,T=A+(y<<17&4294967295|y>>>15),y=E+(_^T&(A^_))+v[15]+1236535329&4294967295,E=T+(y<<22&4294967295|y>>>10),y=_+(T^A&(E^T))+v[1]+4129170786&4294967295,_=E+(y<<5&4294967295|y>>>27),y=A+(E^T&(_^E))+v[6]+3225465664&4294967295,A=_+(y<<9&4294967295|y>>>23),y=T+(_^E&(A^_))+v[11]+643717713&4294967295,T=A+(y<<14&4294967295|y>>>18),y=E+(A^_&(T^A))+v[0]+3921069994&4294967295,E=T+(y<<20&4294967295|y>>>12),y=_+(T^A&(E^T))+v[5]+3593408605&4294967295,_=E+(y<<5&4294967295|y>>>27),y=A+(E^T&(_^E))+v[10]+38016083&4294967295,A=_+(y<<9&4294967295|y>>>23),y=T+(_^E&(A^_))+v[15]+3634488961&4294967295,T=A+(y<<14&4294967295|y>>>18),y=E+(A^_&(T^A))+v[4]+3889429448&4294967295,E=T+(y<<20&4294967295|y>>>12),y=_+(T^A&(E^T))+v[9]+568446438&4294967295,_=E+(y<<5&4294967295|y>>>27),y=A+(E^T&(_^E))+v[14]+3275163606&4294967295,A=_+(y<<9&4294967295|y>>>23),y=T+(_^E&(A^_))+v[3]+4107603335&4294967295,T=A+(y<<14&4294967295|y>>>18),y=E+(A^_&(T^A))+v[8]+1163531501&4294967295,E=T+(y<<20&4294967295|y>>>12),y=_+(T^A&(E^T))+v[13]+2850285829&4294967295,_=E+(y<<5&4294967295|y>>>27),y=A+(E^T&(_^E))+v[2]+4243563512&4294967295,A=_+(y<<9&4294967295|y>>>23),y=T+(_^E&(A^_))+v[7]+1735328473&4294967295,T=A+(y<<14&4294967295|y>>>18),y=E+(A^_&(T^A))+v[12]+2368359562&4294967295,E=T+(y<<20&4294967295|y>>>12),y=_+(E^T^A)+v[5]+4294588738&4294967295,_=E+(y<<4&4294967295|y>>>28),y=A+(_^E^T)+v[8]+2272392833&4294967295,A=_+(y<<11&4294967295|y>>>21),y=T+(A^_^E)+v[11]+1839030562&4294967295,T=A+(y<<16&4294967295|y>>>16),y=E+(T^A^_)+v[14]+4259657740&4294967295,E=T+(y<<23&4294967295|y>>>9),y=_+(E^T^A)+v[1]+2763975236&4294967295,_=E+(y<<4&4294967295|y>>>28),y=A+(_^E^T)+v[4]+1272893353&4294967295,A=_+(y<<11&4294967295|y>>>21),y=T+(A^_^E)+v[7]+4139469664&4294967295,T=A+(y<<16&4294967295|y>>>16),y=E+(T^A^_)+v[10]+3200236656&4294967295,E=T+(y<<23&4294967295|y>>>9),y=_+(E^T^A)+v[13]+681279174&4294967295,_=E+(y<<4&4294967295|y>>>28),y=A+(_^E^T)+v[0]+3936430074&4294967295,A=_+(y<<11&4294967295|y>>>21),y=T+(A^_^E)+v[3]+3572445317&4294967295,T=A+(y<<16&4294967295|y>>>16),y=E+(T^A^_)+v[6]+76029189&4294967295,E=T+(y<<23&4294967295|y>>>9),y=_+(E^T^A)+v[9]+3654602809&4294967295,_=E+(y<<4&4294967295|y>>>28),y=A+(_^E^T)+v[12]+3873151461&4294967295,A=_+(y<<11&4294967295|y>>>21),y=T+(A^_^E)+v[15]+530742520&4294967295,T=A+(y<<16&4294967295|y>>>16),y=E+(T^A^_)+v[2]+3299628645&4294967295,E=T+(y<<23&4294967295|y>>>9),y=_+(T^(E|~A))+v[0]+4096336452&4294967295,_=E+(y<<6&4294967295|y>>>26),y=A+(E^(_|~T))+v[7]+1126891415&4294967295,A=_+(y<<10&4294967295|y>>>22),y=T+(_^(A|~E))+v[14]+2878612391&4294967295,T=A+(y<<15&4294967295|y>>>17),y=E+(A^(T|~_))+v[5]+4237533241&4294967295,E=T+(y<<21&4294967295|y>>>11),y=_+(T^(E|~A))+v[12]+1700485571&4294967295,_=E+(y<<6&4294967295|y>>>26),y=A+(E^(_|~T))+v[3]+2399980690&4294967295,A=_+(y<<10&4294967295|y>>>22),y=T+(_^(A|~E))+v[10]+4293915773&4294967295,T=A+(y<<15&4294967295|y>>>17),y=E+(A^(T|~_))+v[1]+2240044497&4294967295,E=T+(y<<21&4294967295|y>>>11),y=_+(T^(E|~A))+v[8]+1873313359&4294967295,_=E+(y<<6&4294967295|y>>>26),y=A+(E^(_|~T))+v[15]+4264355552&4294967295,A=_+(y<<10&4294967295|y>>>22),y=T+(_^(A|~E))+v[6]+2734768916&4294967295,T=A+(y<<15&4294967295|y>>>17),y=E+(A^(T|~_))+v[13]+1309151649&4294967295,E=T+(y<<21&4294967295|y>>>11),y=_+(T^(E|~A))+v[4]+4149444226&4294967295,_=E+(y<<6&4294967295|y>>>26),y=A+(E^(_|~T))+v[11]+3174756917&4294967295,A=_+(y<<10&4294967295|y>>>22),y=T+(_^(A|~E))+v[2]+718787259&4294967295,T=A+(y<<15&4294967295|y>>>17),y=E+(A^(T|~_))+v[9]+3951481745&4294967295,I.g[0]=I.g[0]+_&4294967295,I.g[1]=I.g[1]+(T+(y<<21&4294967295|y>>>11))&4294967295,I.g[2]=I.g[2]+T&4294967295,I.g[3]=I.g[3]+A&4294967295}s.prototype.v=function(I,_){_===void 0&&(_=I.length);const E=_-this.blockSize,v=this.C;let T=this.h,A=0;for(;A<_;){if(T==0)for(;A<=E;)i(this,I,A),A+=this.blockSize;if(typeof I=="string"){for(;A<_;)if(v[T++]=I.charCodeAt(A++),T==this.blockSize){i(this,v),T=0;break}}else for(;A<_;)if(v[T++]=I[A++],T==this.blockSize){i(this,v),T=0;break}}this.h=T,this.o+=_},s.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var _=1;_<I.length-8;++_)I[_]=0;_=this.o*8;for(var E=I.length-8;E<I.length;++E)I[E]=_&255,_/=256;for(this.v(I),I=Array(16),_=0,E=0;E<4;++E)for(let v=0;v<32;v+=8)I[_++]=this.g[E]>>>v&255;return I};function r(I,_){var E=c;return Object.prototype.hasOwnProperty.call(E,I)?E[I]:E[I]=_(I)}function a(I,_){this.h=_;const E=[];let v=!0;for(let T=I.length-1;T>=0;T--){const A=I[T]|0;v&&A==_||(E[T]=A,v=!1)}this.g=E}var c={};function l(I){return-128<=I&&I<128?r(I,function(_){return new a([_|0],_<0?-1:0)}):new a([I|0],I<0?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return p;if(I<0)return N(h(-I));const _=[];let E=1;for(let v=0;I>=E;v++)_[v]=I/E|0,E*=4294967296;return new a(_,0)}function f(I,_){if(I.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(I.charAt(0)=="-")return N(f(I.substring(1),_));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=h(Math.pow(_,8));let v=p;for(let A=0;A<I.length;A+=8){var T=Math.min(8,I.length-A);const y=parseInt(I.substring(A,A+T),_);T<8?(T=h(Math.pow(_,T)),v=v.j(T).add(h(y))):(v=v.j(E),v=v.add(h(y)))}return v}var p=l(0),g=l(1),C=l(16777216);n=a.prototype,n.m=function(){if(D(this))return-N(this).m();let I=0,_=1;for(let E=0;E<this.g.length;E++){const v=this.i(E);I+=(v>=0?v:4294967296+v)*_,_*=4294967296}return I},n.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(P(this))return"0";if(D(this))return"-"+N(this).toString(I);const _=h(Math.pow(I,6));var E=this;let v="";for(;;){const T=Ae(E,_).g;E=j(E,T.j(_));let A=((E.g.length>0?E.g[0]:E.h)>>>0).toString(I);if(E=T,P(E))return A+v;for(;A.length<6;)A="0"+A;v=A+v}},n.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function P(I){if(I.h!=0)return!1;for(let _=0;_<I.g.length;_++)if(I.g[_]!=0)return!1;return!0}function D(I){return I.h==-1}n.l=function(I){return I=j(this,I),D(I)?-1:P(I)?0:1};function N(I){const _=I.g.length,E=[];for(let v=0;v<_;v++)E[v]=~I.g[v];return new a(E,~I.h).add(g)}n.abs=function(){return D(this)?N(this):this},n.add=function(I){const _=Math.max(this.g.length,I.g.length),E=[];let v=0;for(let T=0;T<=_;T++){let A=v+(this.i(T)&65535)+(I.i(T)&65535),y=(A>>>16)+(this.i(T)>>>16)+(I.i(T)>>>16);v=y>>>16,A&=65535,y&=65535,E[T]=y<<16|A}return new a(E,E[E.length-1]&-2147483648?-1:0)};function j(I,_){return I.add(N(_))}n.j=function(I){if(P(this)||P(I))return p;if(D(this))return D(I)?N(this).j(N(I)):N(N(this).j(I));if(D(I))return N(this.j(N(I)));if(this.l(C)<0&&I.l(C)<0)return h(this.m()*I.m());const _=this.g.length+I.g.length,E=[];for(var v=0;v<2*_;v++)E[v]=0;for(v=0;v<this.g.length;v++)for(let T=0;T<I.g.length;T++){const A=this.i(v)>>>16,y=this.i(v)&65535,Ue=I.i(T)>>>16,on=I.i(T)&65535;E[2*v+2*T]+=y*on,W(E,2*v+2*T),E[2*v+2*T+1]+=A*on,W(E,2*v+2*T+1),E[2*v+2*T+1]+=y*Ue,W(E,2*v+2*T+1),E[2*v+2*T+2]+=A*Ue,W(E,2*v+2*T+2)}for(I=0;I<_;I++)E[I]=E[2*I+1]<<16|E[2*I];for(I=_;I<2*_;I++)E[I]=0;return new a(E,0)};function W(I,_){for(;(I[_]&65535)!=I[_];)I[_+1]+=I[_]>>>16,I[_]&=65535,_++}function K(I,_){this.g=I,this.h=_}function Ae(I,_){if(P(_))throw Error("division by zero");if(P(I))return new K(p,p);if(D(I))return _=Ae(N(I),_),new K(N(_.g),N(_.h));if(D(_))return _=Ae(I,N(_)),new K(N(_.g),_.h);if(I.g.length>30){if(D(I)||D(_))throw Error("slowDivide_ only works with positive integers.");for(var E=g,v=_;v.l(I)<=0;)E=Fe(E),v=Fe(v);var T=ye(E,1),A=ye(v,1);for(v=ye(v,2),E=ye(E,2);!P(v);){var y=A.add(v);y.l(I)<=0&&(T=T.add(E),A=y),v=ye(v,1),E=ye(E,1)}return _=j(I,T.j(_)),new K(T,_)}for(T=p;I.l(_)>=0;){for(E=Math.max(1,Math.floor(I.m()/_.m())),v=Math.ceil(Math.log(E)/Math.LN2),v=v<=48?1:Math.pow(2,v-48),A=h(E),y=A.j(_);D(y)||y.l(I)>0;)E-=v,A=h(E),y=A.j(_);P(A)&&(A=g),T=T.add(A),I=j(I,y)}return new K(T,I)}n.B=function(I){return Ae(this,I).h},n.and=function(I){const _=Math.max(this.g.length,I.g.length),E=[];for(let v=0;v<_;v++)E[v]=this.i(v)&I.i(v);return new a(E,this.h&I.h)},n.or=function(I){const _=Math.max(this.g.length,I.g.length),E=[];for(let v=0;v<_;v++)E[v]=this.i(v)|I.i(v);return new a(E,this.h|I.h)},n.xor=function(I){const _=Math.max(this.g.length,I.g.length),E=[];for(let v=0;v<_;v++)E[v]=this.i(v)^I.i(v);return new a(E,this.h^I.h)};function Fe(I){const _=I.g.length+1,E=[];for(let v=0;v<_;v++)E[v]=I.i(v)<<1|I.i(v-1)>>>31;return new a(E,I.h)}function ye(I,_){const E=_>>5;_%=32;const v=I.g.length-E,T=[];for(let A=0;A<v;A++)T[A]=_>0?I.i(A+E)>>>_|I.i(A+E+1)<<32-_:I.i(A+E);return new a(T,I.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,of=s,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Wt=a}).apply(typeof ku<"u"?ku:typeof self<"u"?self:typeof window<"u"?window:{});var Ui=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var af,Fs,cf,Yi,ca,lf,uf,hf;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ui=="object"&&Ui];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var s=t(this);function i(o,u){if(u)e:{var d=s;o=o.split(".");for(var m=0;m<o.length-1;m++){var w=o[m];if(!(w in d))break e;d=d[w]}o=o[o.length-1],m=d[o],u=u(m),u!=m&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}i("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(o){return o||function(u){var d=[],m;for(m in u)Object.prototype.hasOwnProperty.call(u,m)&&d.push([m,u[m]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var r=r||{},a=this||self;function c(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function l(o,u,d){return o.call.apply(o.bind,arguments)}function h(o,u,d){return h=l,h.apply(null,arguments)}function f(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function p(o,u){function d(){}d.prototype=u.prototype,o.Z=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Ob=function(m,w,S){for(var k=Array(arguments.length-2),q=2;q<arguments.length;q++)k[q-2]=arguments[q];return u.prototype[w].apply(m,k)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function C(o){const u=o.length;if(u>0){const d=Array(u);for(let m=0;m<u;m++)d[m]=o[m];return d}return[]}function P(o,u){for(let m=1;m<arguments.length;m++){const w=arguments[m];var d=typeof w;if(d=d!="object"?d:w?Array.isArray(w)?"array":d:"null",d=="array"||d=="object"&&typeof w.length=="number"){d=o.length||0;const S=w.length||0;o.length=d+S;for(let k=0;k<S;k++)o[d+k]=w[k]}else o.push(w)}}class D{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function N(o){a.setTimeout(()=>{throw o},0)}function j(){var o=I;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class W{constructor(){this.h=this.g=null}add(u,d){const m=K.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var K=new D(()=>new Ae,o=>o.reset());class Ae{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Fe,ye=!1,I=new W,_=()=>{const o=Promise.resolve(void 0);Fe=()=>{o.then(E)}};function E(){for(var o;o=j();){try{o.h.call(o.g)}catch(d){N(d)}var u=K;u.j(o),u.h<100&&(u.h++,o.next=u.g,u.g=o)}ye=!1}function v(){this.u=this.u,this.C=this.C}v.prototype.u=!1,v.prototype.dispose=function(){this.u||(this.u=!0,this.N())},v.prototype[Symbol.dispose]=function(){this.dispose()},v.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function T(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var A=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};a.addEventListener("test",d,u),a.removeEventListener("test",d,u)}catch{}return o})();function y(o){return/^[\s\xa0]*$/.test(o)}function Ue(o,u){T.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,u)}p(Ue,T),Ue.prototype.init=function(o,u){const d=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget,u||(d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement)),this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&Ue.Z.h.call(this)},Ue.prototype.h=function(){Ue.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var on="closure_listenable_"+(Math.random()*1e6|0),Xm=0;function Jm(o,u,d,m,w){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=w,this.key=++Xm,this.da=this.fa=!1}function wi(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Ai(o,u,d){for(const m in o)u.call(d,o[m],m,o)}function Zm(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function nl(o){const u={};for(const d in o)u[d]=o[d];return u}const sl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function il(o,u){let d,m;for(let w=1;w<arguments.length;w++){m=arguments[w];for(d in m)o[d]=m[d];for(let S=0;S<sl.length;S++)d=sl[S],Object.prototype.hasOwnProperty.call(m,d)&&(o[d]=m[d])}}function Ci(o){this.src=o,this.g={},this.h=0}Ci.prototype.add=function(o,u,d,m,w){const S=o.toString();o=this.g[S],o||(o=this.g[S]=[],this.h++);const k=uo(o,u,m,w);return k>-1?(u=o[k],d||(u.fa=!1)):(u=new Jm(u,this.src,S,!!m,w),u.fa=d,o.push(u)),u};function lo(o,u){const d=u.type;if(d in o.g){var m=o.g[d],w=Array.prototype.indexOf.call(m,u,void 0),S;(S=w>=0)&&Array.prototype.splice.call(m,w,1),S&&(wi(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function uo(o,u,d,m){for(let w=0;w<o.length;++w){const S=o[w];if(!S.da&&S.listener==u&&S.capture==!!d&&S.ha==m)return w}return-1}var ho="closure_lm_"+(Math.random()*1e6|0),fo={};function rl(o,u,d,m,w){if(Array.isArray(u)){for(let S=0;S<u.length;S++)rl(o,u[S],d,m,w);return null}return d=cl(d),o&&o[on]?o.J(u,d,c(m)?!!m.capture:!1,w):eg(o,u,d,!1,m,w)}function eg(o,u,d,m,w,S){if(!u)throw Error("Invalid event type");const k=c(w)?!!w.capture:!!w;let q=mo(o);if(q||(o[ho]=q=new Ci(o)),d=q.add(u,d,m,k,S),d.proxy)return d;if(m=tg(),d.proxy=m,m.src=o,m.listener=d,o.addEventListener)A||(w=k),w===void 0&&(w=!1),o.addEventListener(u.toString(),m,w);else if(o.attachEvent)o.attachEvent(al(u.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function tg(){function o(d){return u.call(o.src,o.listener,d)}const u=ng;return o}function ol(o,u,d,m,w){if(Array.isArray(u))for(var S=0;S<u.length;S++)ol(o,u[S],d,m,w);else m=c(m)?!!m.capture:!!m,d=cl(d),o&&o[on]?(o=o.i,S=String(u).toString(),S in o.g&&(u=o.g[S],d=uo(u,d,m,w),d>-1&&(wi(u[d]),Array.prototype.splice.call(u,d,1),u.length==0&&(delete o.g[S],o.h--)))):o&&(o=mo(o))&&(u=o.g[u.toString()],o=-1,u&&(o=uo(u,d,m,w)),(d=o>-1?u[o]:null)&&po(d))}function po(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[on])lo(u.i,o);else{var d=o.type,m=o.proxy;u.removeEventListener?u.removeEventListener(d,m,o.capture):u.detachEvent?u.detachEvent(al(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=mo(u))?(lo(d,o),d.h==0&&(d.src=null,u[ho]=null)):wi(o)}}}function al(o){return o in fo?fo[o]:fo[o]="on"+o}function ng(o,u){if(o.da)o=!0;else{u=new Ue(u,this);const d=o.listener,m=o.ha||o.src;o.fa&&po(o),o=d.call(m,u)}return o}function mo(o){return o=o[ho],o instanceof Ci?o:null}var go="__closure_events_fn_"+(Math.random()*1e9>>>0);function cl(o){return typeof o=="function"?o:(o[go]||(o[go]=function(u){return o.handleEvent(u)}),o[go])}function be(){v.call(this),this.i=new Ci(this),this.M=this,this.G=null}p(be,v),be.prototype[on]=!0,be.prototype.removeEventListener=function(o,u,d,m){ol(this,o,u,d,m)};function Le(o,u){var d,m=o.G;if(m)for(d=[];m;m=m.G)d.push(m);if(o=o.M,m=u.type||u,typeof u=="string")u=new T(u,o);else if(u instanceof T)u.target=u.target||o;else{var w=u;u=new T(m,o),il(u,w)}w=!0;let S,k;if(d)for(k=d.length-1;k>=0;k--)S=u.g=d[k],w=Si(S,m,!0,u)&&w;if(S=u.g=o,w=Si(S,m,!0,u)&&w,w=Si(S,m,!1,u)&&w,d)for(k=0;k<d.length;k++)S=u.g=d[k],w=Si(S,m,!1,u)&&w}be.prototype.N=function(){if(be.Z.N.call(this),this.i){var o=this.i;for(const u in o.g){const d=o.g[u];for(let m=0;m<d.length;m++)wi(d[m]);delete o.g[u],o.h--}}this.G=null},be.prototype.J=function(o,u,d,m){return this.i.add(String(o),u,!1,d,m)},be.prototype.K=function(o,u,d,m){return this.i.add(String(o),u,!0,d,m)};function Si(o,u,d,m){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();let w=!0;for(let S=0;S<u.length;++S){const k=u[S];if(k&&!k.da&&k.capture==d){const q=k.listener,ge=k.ha||k.src;k.fa&&lo(o.i,k),w=q.call(ge,m)!==!1&&w}}return w&&!m.defaultPrevented}function sg(o,u){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=h(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:a.setTimeout(o,u||0)}function ll(o){o.g=sg(()=>{o.g=null,o.i&&(o.i=!1,ll(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class ig extends v{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:ll(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ys(o){v.call(this),this.h=o,this.g={}}p(ys,v);var ul=[];function hl(o){Ai(o.g,function(u,d){this.g.hasOwnProperty(d)&&po(u)},o),o.g={}}ys.prototype.N=function(){ys.Z.N.call(this),hl(this)},ys.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var _o=a.JSON.stringify,rg=a.JSON.parse,og=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function dl(){}function fl(){}var Es={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function yo(){T.call(this,"d")}p(yo,T);function Eo(){T.call(this,"c")}p(Eo,T);var an={},pl=null;function Ri(){return pl=pl||new be}an.Ia="serverreachability";function ml(o){T.call(this,an.Ia,o)}p(ml,T);function Ts(o){const u=Ri();Le(u,new ml(u))}an.STAT_EVENT="statevent";function gl(o,u){T.call(this,an.STAT_EVENT,o),this.stat=u}p(gl,T);function xe(o){const u=Ri();Le(u,new gl(u,o))}an.Ja="timingevent";function _l(o,u){T.call(this,an.Ja,o),this.size=u}p(_l,T);function Is(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},u)}function vs(){this.g=!0}vs.prototype.ua=function(){this.g=!1};function ag(o,u,d,m,w,S){o.info(function(){if(o.g)if(S){var k="",q=S.split("&");for(let te=0;te<q.length;te++){var ge=q[te].split("=");if(ge.length>1){const Ee=ge[0];ge=ge[1];const nt=Ee.split("_");k=nt.length>=2&&nt[1]=="type"?k+(Ee+"="+ge+"&"):k+(Ee+"=redacted&")}}}else k=null;else k=S;return"XMLHTTP REQ ("+m+") [attempt "+w+"]: "+u+`
`+d+`
`+k})}function cg(o,u,d,m,w,S,k){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+w+"]: "+u+`
`+d+`
`+S+" "+k})}function Nn(o,u,d,m){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+ug(o,d)+(m?" "+m:"")})}function lg(o,u){o.info(function(){return"TIMEOUT: "+u})}vs.prototype.info=function(){};function ug(o,u){if(!o.g)return u;if(!u)return null;try{const S=JSON.parse(u);if(S){for(o=0;o<S.length;o++)if(Array.isArray(S[o])){var d=S[o];if(!(d.length<2)){var m=d[1];if(Array.isArray(m)&&!(m.length<1)){var w=m[0];if(w!="noop"&&w!="stop"&&w!="close")for(let k=1;k<m.length;k++)m[k]=""}}}}return _o(S)}catch{return u}}var bi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},yl={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},El;function To(){}p(To,dl),To.prototype.g=function(){return new XMLHttpRequest},El=new To;function ws(o){return encodeURIComponent(String(o))}function hg(o){var u=1;o=o.split(":");const d=[];for(;u>0&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function Pt(o,u,d,m){this.j=o,this.i=u,this.l=d,this.S=m||1,this.V=new ys(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Tl}function Tl(){this.i=null,this.g="",this.h=!1}var Il={},Io={};function vo(o,u,d){o.M=1,o.A=Ni(tt(u)),o.u=d,o.R=!0,vl(o,null)}function vl(o,u){o.F=Date.now(),Pi(o),o.B=tt(o.A);var d=o.B,m=o.S;Array.isArray(m)||(m=[String(m)]),Ml(d.i,"t",m),o.C=0,d=o.j.L,o.h=new Tl,o.g=Zl(o.j,d?u:null,!o.u),o.P>0&&(o.O=new ig(h(o.Y,o,o.g),o.P)),u=o.V,d=o.g,m=o.ba;var w="readystatechange";Array.isArray(w)||(w&&(ul[0]=w.toString()),w=ul);for(let S=0;S<w.length;S++){const k=rl(d,w[S],m||u.handleEvent,!1,u.h||u);if(!k)break;u.g[k.key]=k}u=o.J?nl(o.J):{},o.u?(o.v||(o.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,u)):(o.v="GET",o.g.ea(o.B,o.v,null,u)),Ts(),ag(o.i,o.v,o.B,o.l,o.S,o.u)}Pt.prototype.ba=function(o){o=o.target;const u=this.O;u&&Dt(o)==3?u.j():this.Y(o)},Pt.prototype.Y=function(o){try{if(o==this.g)e:{const q=Dt(this.g),ge=this.g.ya(),te=this.g.ca();if(!(q<3)&&(q!=3||this.g&&(this.h.h||this.g.la()||jl(this.g)))){this.K||q!=4||ge==7||(ge==8||te<=0?Ts(3):Ts(2)),wo(this);var u=this.g.ca();this.X=u;var d=dg(this);if(this.o=u==200,cg(this.i,this.v,this.B,this.l,this.S,q,u),this.o){if(this.U&&!this.L){t:{if(this.g){var m,w=this.g;if((m=w.g?w.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(m)){var S=m;break t}}S=null}if(o=S)Nn(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ao(this,o);else{this.o=!1,this.m=3,xe(12),cn(this),As(this);break e}}if(this.R){o=!0;let Ee;for(;!this.K&&this.C<d.length;)if(Ee=fg(this,d),Ee==Io){q==4&&(this.m=4,xe(14),o=!1),Nn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ee==Il){this.m=4,xe(15),Nn(this.i,this.l,d,"[Invalid Chunk]"),o=!1;break}else Nn(this.i,this.l,Ee,null),Ao(this,Ee);if(wl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),q!=4||d.length!=0||this.h.h||(this.m=1,xe(16),o=!1),this.o=this.o&&o,!o)Nn(this.i,this.l,d,"[Invalid Chunked Response]"),cn(this),As(this);else if(d.length>0&&!this.W){this.W=!0;var k=this.j;k.g==this&&k.aa&&!k.P&&(k.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Do(k),k.P=!0,xe(11))}}else Nn(this.i,this.l,d,null),Ao(this,d);q==4&&cn(this),this.o&&!this.K&&(q==4?Ql(this.j,this):(this.o=!1,Pi(this)))}else Rg(this.g),u==400&&d.indexOf("Unknown SID")>0?(this.m=3,xe(12)):(this.m=0,xe(13)),cn(this),As(this)}}}catch{}finally{}};function dg(o){if(!wl(o))return o.g.la();const u=jl(o.g);if(u==="")return"";let d="";const m=u.length,w=Dt(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return cn(o),As(o),"";o.h.i=new a.TextDecoder}for(let S=0;S<m;S++)o.h.h=!0,d+=o.h.i.decode(u[S],{stream:!(w&&S==m-1)});return u.length=0,o.h.g+=d,o.C=0,o.h.g}function wl(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function fg(o,u){var d=o.C,m=u.indexOf(`
`,d);return m==-1?Io:(d=Number(u.substring(d,m)),isNaN(d)?Il:(m+=1,m+d>u.length?Io:(u=u.slice(m,m+d),o.C=m+d,u)))}Pt.prototype.cancel=function(){this.K=!0,cn(this)};function Pi(o){o.T=Date.now()+o.H,Al(o,o.H)}function Al(o,u){if(o.D!=null)throw Error("WatchDog timer not null");o.D=Is(h(o.aa,o),u)}function wo(o){o.D&&(a.clearTimeout(o.D),o.D=null)}Pt.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(lg(this.i,this.B),this.M!=2&&(Ts(),xe(17)),cn(this),this.m=2,As(this)):Al(this,this.T-o)};function As(o){o.j.I==0||o.K||Ql(o.j,o)}function cn(o){wo(o);var u=o.O;u&&typeof u.dispose=="function"&&u.dispose(),o.O=null,hl(o.V),o.g&&(u=o.g,o.g=null,u.abort(),u.dispose())}function Ao(o,u){try{var d=o.j;if(d.I!=0&&(d.g==o||Co(d.h,o))){if(!o.L&&Co(d.h,o)&&d.I==3){try{var m=d.Ba.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var w=m;if(w[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<o.F)Mi(d),Oi(d);else break e;ko(d),xe(18)}}else d.xa=w[1],0<d.xa-d.K&&w[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Is(h(d.Va,d),6e3));Rl(d.h)<=1&&d.ta&&(d.ta=void 0)}else un(d,11)}else if((o.L||d.g==o)&&Mi(d),!y(u))for(w=d.Ba.g.parse(u),u=0;u<w.length;u++){let te=w[u];const Ee=te[0];if(!(Ee<=d.K))if(d.K=Ee,te=te[1],d.I==2)if(te[0]=="c"){d.M=te[1],d.ba=te[2];const nt=te[3];nt!=null&&(d.ka=nt,d.j.info("VER="+d.ka));const hn=te[4];hn!=null&&(d.za=hn,d.j.info("SVER="+d.za));const Ot=te[5];Ot!=null&&typeof Ot=="number"&&Ot>0&&(m=1.5*Ot,d.O=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Vt=o.g;if(Vt){const xi=Vt.g?Vt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(xi){var S=m.h;S.g||xi.indexOf("spdy")==-1&&xi.indexOf("quic")==-1&&xi.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(So(S,S.h),S.h=null))}if(m.G){const Oo=Vt.g?Vt.g.getResponseHeader("X-HTTP-Session-Id"):null;Oo&&(m.wa=Oo,se(m.J,m.G,Oo))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-o.F,d.j.info("Handshake RTT: "+d.T+"ms")),m=d;var k=o;if(m.na=Jl(m,m.L?m.ba:null,m.W),k.L){bl(m.h,k);var q=k,ge=m.O;ge&&(q.H=ge),q.D&&(wo(q),Pi(q)),m.g=k}else Gl(m);d.i.length>0&&Vi(d)}else te[0]!="stop"&&te[0]!="close"||un(d,7);else d.I==3&&(te[0]=="stop"||te[0]=="close"?te[0]=="stop"?un(d,7):No(d):te[0]!="noop"&&d.l&&d.l.qa(te),d.A=0)}}Ts(4)}catch{}}var pg=class{constructor(o,u){this.g=o,this.map=u}};function Cl(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Sl(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Rl(o){return o.h?1:o.g?o.g.size:0}function Co(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function So(o,u){o.g?o.g.add(u):o.h=u}function bl(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Cl.prototype.cancel=function(){if(this.i=Pl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Pl(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.G);return u}return C(o.i)}var Nl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mg(o,u){if(o){o=o.split("&");for(let d=0;d<o.length;d++){const m=o[d].indexOf("=");let w,S=null;m>=0?(w=o[d].substring(0,m),S=o[d].substring(m+1)):w=o[d],u(w,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function Nt(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;o instanceof Nt?(this.l=o.l,Cs(this,o.j),this.o=o.o,this.g=o.g,Ss(this,o.u),this.h=o.h,Ro(this,Ll(o.i)),this.m=o.m):o&&(u=String(o).match(Nl))?(this.l=!1,Cs(this,u[1]||"",!0),this.o=Rs(u[2]||""),this.g=Rs(u[3]||"",!0),Ss(this,u[4]),this.h=Rs(u[5]||"",!0),Ro(this,u[6]||"",!0),this.m=Rs(u[7]||"")):(this.l=!1,this.i=new Ps(null,this.l))}Nt.prototype.toString=function(){const o=[];var u=this.j;u&&o.push(bs(u,kl,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(bs(u,kl,!0),"@"),o.push(ws(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&o.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(bs(d,d.charAt(0)=="/"?yg:_g,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",bs(d,Tg)),o.join("")},Nt.prototype.resolve=function(o){const u=tt(this);let d=!!o.j;d?Cs(u,o.j):d=!!o.o,d?u.o=o.o:d=!!o.g,d?u.g=o.g:d=o.u!=null;var m=o.h;if(d)Ss(u,o.u);else if(d=!!o.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var w=u.h.lastIndexOf("/");w!=-1&&(m=u.h.slice(0,w+1)+m)}if(w=m,w==".."||w==".")m="";else if(w.indexOf("./")!=-1||w.indexOf("/.")!=-1){m=w.lastIndexOf("/",0)==0,w=w.split("/");const S=[];for(let k=0;k<w.length;){const q=w[k++];q=="."?m&&k==w.length&&S.push(""):q==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),m&&k==w.length&&S.push("")):(S.push(q),m=!0)}m=S.join("/")}else m=w}return d?u.h=m:d=o.i.toString()!=="",d?Ro(u,Ll(o.i)):d=!!o.m,d&&(u.m=o.m),u};function tt(o){return new Nt(o)}function Cs(o,u,d){o.j=d?Rs(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Ss(o,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);o.u=u}else o.u=null}function Ro(o,u,d){u instanceof Ps?(o.i=u,Ig(o.i,o.l)):(d||(u=bs(u,Eg)),o.i=new Ps(u,o.l))}function se(o,u,d){o.i.set(u,d)}function Ni(o){return se(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Rs(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function bs(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,gg),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function gg(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var kl=/[#\/\?@]/g,_g=/[#\?:]/g,yg=/[#\?]/g,Eg=/[#\?@]/g,Tg=/#/g;function Ps(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function ln(o){o.g||(o.g=new Map,o.h=0,o.i&&mg(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=Ps.prototype,n.add=function(o,u){ln(this),this.i=null,o=kn(this,o);let d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function Dl(o,u){ln(o),u=kn(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Ol(o,u){return ln(o),u=kn(o,u),o.g.has(u)}n.forEach=function(o,u){ln(this),this.g.forEach(function(d,m){d.forEach(function(w){o.call(u,w,m,this)},this)},this)};function Vl(o,u){ln(o);let d=[];if(typeof u=="string")Ol(o,u)&&(d=d.concat(o.g.get(kn(o,u))));else for(o=Array.from(o.g.values()),u=0;u<o.length;u++)d=d.concat(o[u]);return d}n.set=function(o,u){return ln(this),this.i=null,o=kn(this,o),Ol(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=Vl(this,o),o.length>0?String(o[0]):u):u};function Ml(o,u,d){Dl(o,u),d.length>0&&(o.i=null,o.g.set(kn(o,u),C(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(let m=0;m<u.length;m++){var d=u[m];const w=ws(d);d=Vl(this,d);for(let S=0;S<d.length;S++){let k=w;d[S]!==""&&(k+="="+ws(d[S])),o.push(k)}}return this.i=o.join("&")};function Ll(o){const u=new Ps;return u.i=o.i,o.g&&(u.g=new Map(o.g),u.h=o.h),u}function kn(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Ig(o,u){u&&!o.j&&(ln(o),o.i=null,o.g.forEach(function(d,m){const w=m.toLowerCase();m!=w&&(Dl(this,m),Ml(this,w,d))},o)),o.j=u}function vg(o,u){const d=new vs;if(a.Image){const m=new Image;m.onload=f(kt,d,"TestLoadImage: loaded",!0,u,m),m.onerror=f(kt,d,"TestLoadImage: error",!1,u,m),m.onabort=f(kt,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=f(kt,d,"TestLoadImage: timeout",!1,u,m),a.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else u(!1)}function wg(o,u){const d=new vs,m=new AbortController,w=setTimeout(()=>{m.abort(),kt(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:m.signal}).then(S=>{clearTimeout(w),S.ok?kt(d,"TestPingServer: ok",!0,u):kt(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(w),kt(d,"TestPingServer: error",!1,u)})}function kt(o,u,d,m,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),m(d)}catch{}}function Ag(){this.g=new og}function bo(o){this.i=o.Sb||null,this.h=o.ab||!1}p(bo,dl),bo.prototype.g=function(){return new ki(this.i,this.h)};function ki(o,u){be.call(this),this.H=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(ki,be),n=ki.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=u,this.readyState=1,ks(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(u.body=o),(this.H||a).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ns(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ks(this)),this.g&&(this.readyState=3,ks(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;xl(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function xl(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Ns(this):ks(this),this.readyState==3&&xl(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,Ns(this))},n.Na=function(o){this.g&&(this.response=o,Ns(this))},n.ga=function(){this.g&&Ns(this)};function Ns(o){o.readyState=4,o.l=null,o.j=null,o.B=null,ks(o)}n.setRequestHeader=function(o,u){this.A.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function ks(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ki.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Fl(o){let u="";return Ai(o,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function Po(o,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Fl(d),typeof o=="string"?d!=null&&ws(d):se(o,u,d))}function ce(o){be.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(ce,be);var Cg=/^https?$/i,Sg=["POST","PUT"];n=ce.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():El.g(),this.g.onreadystatechange=g(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(S){Ul(this,S);return}if(o=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var w in m)d.set(w,m[w]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const S of m.keys())d.set(S,m.get(S));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(S=>S.toLowerCase()=="content-type"),w=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Sg,u,void 0)>=0)||m||w||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,k]of d)this.g.setRequestHeader(S,k);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(S){Ul(this,S)}};function Ul(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.o=5,Bl(o),Di(o)}function Bl(o){o.A||(o.A=!0,Le(o,"complete"),Le(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,Le(this,"complete"),Le(this,"abort"),Di(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Di(this,!0)),ce.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?ql(this):this.Xa())},n.Xa=function(){ql(this)};function ql(o){if(o.h&&typeof r<"u"){if(o.v&&Dt(o)==4)setTimeout(o.Ca.bind(o),0);else if(Le(o,"readystatechange"),Dt(o)==4){o.h=!1;try{const S=o.ca();e:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=S===0){let k=String(o.D).match(Nl)[1]||null;!k&&a.self&&a.self.location&&(k=a.self.location.protocol.slice(0,-1)),m=!Cg.test(k?k.toLowerCase():"")}d=m}if(d)Le(o,"complete"),Le(o,"success");else{o.o=6;try{var w=Dt(o)>2?o.g.statusText:""}catch{w=""}o.l=w+" ["+o.ca()+"]",Bl(o)}}finally{Di(o)}}}}function Di(o,u){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const d=o.g;o.g=null,u||Le(o,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Dt(o){return o.g?o.g.readyState:0}n.ca=function(){try{return Dt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),rg(u)}};function jl(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Rg(o){const u={};o=(o.g&&Dt(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(y(o[m]))continue;var d=hg(o[m]);const w=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const S=u[w]||[];u[w]=S,S.push(d)}Zm(u,function(m){return m.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ds(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function Wl(o){this.za=0,this.i=[],this.j=new vs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ds("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ds("baseRetryDelayMs",5e3,o),this.Za=Ds("retryDelaySeedMs",1e4,o),this.Ta=Ds("forwardChannelMaxRetries",2,o),this.va=Ds("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new Cl(o&&o.concurrentRequestLimit),this.Ba=new Ag,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Wl.prototype,n.ka=8,n.I=1,n.connect=function(o,u,d,m){xe(0),this.W=o,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.J=Jl(this,null,this.W),Vi(this)};function No(o){if($l(o),o.I==3){var u=o.V++,d=tt(o.J);if(se(d,"SID",o.M),se(d,"RID",u),se(d,"TYPE","terminate"),Os(o,d),u=new Pt(o,o.j,u),u.M=2,u.A=Ni(tt(d)),d=!1,a.navigator&&a.navigator.sendBeacon)try{d=a.navigator.sendBeacon(u.A.toString(),"")}catch{}!d&&a.Image&&(new Image().src=u.A,d=!0),d||(u.g=Zl(u.j,null),u.g.ea(u.A)),u.F=Date.now(),Pi(u)}Xl(o)}function Oi(o){o.g&&(Do(o),o.g.cancel(),o.g=null)}function $l(o){Oi(o),o.v&&(a.clearTimeout(o.v),o.v=null),Mi(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function Vi(o){if(!Sl(o.h)&&!o.m){o.m=!0;var u=o.Ea;Fe||_(),ye||(Fe(),ye=!0),I.add(u,o),o.D=0}}function bg(o,u){return Rl(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=u.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=Is(h(o.Ea,o,u),Yl(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const w=new Pt(this,this.j,o);let S=this.o;if(this.U&&(S?(S=nl(S),il(S,this.U)):S=this.U),this.u!==null||this.R||(w.J=S,S=null),this.S)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,u>4096){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Hl(this,w,u),d=tt(this.J),se(d,"RID",o),se(d,"CVER",22),this.G&&se(d,"X-HTTP-Session-Id",this.G),Os(this,d),S&&(this.R?u="headers="+ws(Fl(S))+"&"+u:this.u&&Po(d,this.u,S)),So(this.h,w),this.Ra&&se(d,"TYPE","init"),this.S?(se(d,"$req",u),se(d,"SID","null"),w.U=!0,vo(w,d,null)):vo(w,d,u),this.I=2}}else this.I==3&&(o?zl(this,o):this.i.length==0||Sl(this.h)||zl(this))};function zl(o,u){var d;u?d=u.l:d=o.V++;const m=tt(o.J);se(m,"SID",o.M),se(m,"RID",d),se(m,"AID",o.K),Os(o,m),o.u&&o.o&&Po(m,o.u,o.o),d=new Pt(o,o.j,d,o.D+1),o.u===null&&(d.J=o.o),u&&(o.i=u.G.concat(o.i)),u=Hl(o,d,1e3),d.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),So(o.h,d),vo(d,m,u)}function Os(o,u){o.H&&Ai(o.H,function(d,m){se(u,m,d)}),o.l&&Ai({},function(d,m){se(u,m,d)})}function Hl(o,u,d){d=Math.min(o.i.length,d);const m=o.l?h(o.l.Ka,o.l,o):null;e:{var w=o.i;let q=-1;for(;;){const ge=["count="+d];q==-1?d>0?(q=w[0].g,ge.push("ofs="+q)):q=0:ge.push("ofs="+q);let te=!0;for(let Ee=0;Ee<d;Ee++){var S=w[Ee].g;const nt=w[Ee].map;if(S-=q,S<0)q=Math.max(0,w[Ee].g-100),te=!1;else try{S="req"+S+"_"||"";try{var k=nt instanceof Map?nt:Object.entries(nt);for(const[hn,Ot]of k){let Vt=Ot;c(Ot)&&(Vt=_o(Ot)),ge.push(S+hn+"="+encodeURIComponent(Vt))}}catch(hn){throw ge.push(S+"type="+encodeURIComponent("_badmap")),hn}}catch{m&&m(nt)}}if(te){k=ge.join("&");break e}}k=void 0}return o=o.i.splice(0,d),u.G=o,k}function Gl(o){if(!o.g&&!o.v){o.Y=1;var u=o.Da;Fe||_(),ye||(Fe(),ye=!0),I.add(u,o),o.A=0}}function ko(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=Is(h(o.Da,o),Yl(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,Kl(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=Is(h(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,xe(10),Oi(this),Kl(this))};function Do(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Kl(o){o.g=new Pt(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var u=tt(o.na);se(u,"RID","rpc"),se(u,"SID",o.M),se(u,"AID",o.K),se(u,"CI",o.F?"0":"1"),!o.F&&o.ia&&se(u,"TO",o.ia),se(u,"TYPE","xmlhttp"),Os(o,u),o.u&&o.o&&Po(u,o.u,o.o),o.O&&(o.g.H=o.O);var d=o.g;o=o.ba,d.M=1,d.A=Ni(tt(u)),d.u=null,d.R=!0,vl(d,o)}n.Va=function(){this.C!=null&&(this.C=null,Oi(this),ko(this),xe(19))};function Mi(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Ql(o,u){var d=null;if(o.g==u){Mi(o),Do(o),o.g=null;var m=2}else if(Co(o.h,u))d=u.G,bl(o.h,u),m=1;else return;if(o.I!=0){if(u.o)if(m==1){d=u.u?u.u.length:0,u=Date.now()-u.F;var w=o.D;m=Ri(),Le(m,new _l(m,d)),Vi(o)}else Gl(o);else if(w=u.m,w==3||w==0&&u.X>0||!(m==1&&bg(o,u)||m==2&&ko(o)))switch(d&&d.length>0&&(u=o.h,u.i=u.i.concat(d)),w){case 1:un(o,5);break;case 4:un(o,10);break;case 3:un(o,6);break;default:un(o,2)}}}function Yl(o,u){let d=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(d*=2),d*u}function un(o,u){if(o.j.info("Error code "+u),u==2){var d=h(o.bb,o),m=o.Ua;const w=!m;m=new Nt(m||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Cs(m,"https"),Ni(m),w?vg(m.toString(),d):wg(m.toString(),d)}else xe(2);o.I=0,o.l&&o.l.pa(u),Xl(o),$l(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),xe(2)):(this.j.info("Failed to ping google.com"),xe(1))};function Xl(o){if(o.I=0,o.ja=[],o.l){const u=Pl(o.h);(u.length!=0||o.i.length!=0)&&(P(o.ja,u),P(o.ja,o.i),o.h.i.length=0,C(o.i),o.i.length=0),o.l.oa()}}function Jl(o,u,d){var m=d instanceof Nt?tt(d):new Nt(d);if(m.g!="")u&&(m.g=u+"."+m.g),Ss(m,m.u);else{var w=a.location;m=w.protocol,u=u?u+"."+w.hostname:w.hostname,w=+w.port;const S=new Nt(null);m&&Cs(S,m),u&&(S.g=u),w&&Ss(S,w),d&&(S.h=d),m=S}return d=o.G,u=o.wa,d&&u&&se(m,d,u),se(m,"VER",o.ka),Os(o,m),m}function Zl(o,u,d){if(u&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Aa&&!o.ma?new ce(new bo({ab:d})):new ce(o.ma),u.Fa(o.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function eu(){}n=eu.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Li(){}Li.prototype.g=function(o,u){return new We(o,u)};function We(o,u){be.call(this),this.g=new Wl(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(o?o["X-WebChannel-Client-Profile"]=u.sa:o={"X-WebChannel-Client-Profile":u.sa}),this.g.U=o,(o=u&&u.Qb)&&!y(o)&&(this.g.u=o),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!y(u)&&(this.g.G=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Dn(this)}p(We,be),We.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},We.prototype.close=function(){No(this.g)},We.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.v&&(d={},d.__data__=_o(o),o=d);u.i.push(new pg(u.Ya++,o)),u.I==3&&Vi(u)},We.prototype.N=function(){this.g.l=null,delete this.j,No(this.g),delete this.g,We.Z.N.call(this)};function tu(o){yo.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}p(tu,yo);function nu(){Eo.call(this),this.status=1}p(nu,Eo);function Dn(o){this.g=o}p(Dn,eu),Dn.prototype.ra=function(){Le(this.g,"a")},Dn.prototype.qa=function(o){Le(this.g,new tu(o))},Dn.prototype.pa=function(o){Le(this.g,new nu)},Dn.prototype.oa=function(){Le(this.g,"b")},Li.prototype.createWebChannel=Li.prototype.g,We.prototype.send=We.prototype.o,We.prototype.open=We.prototype.m,We.prototype.close=We.prototype.close,hf=function(){return new Li},uf=function(){return Ri()},lf=an,ca={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},bi.NO_ERROR=0,bi.TIMEOUT=8,bi.HTTP_ERROR=6,Yi=bi,yl.COMPLETE="complete",cf=yl,fl.EventType=Es,Es.OPEN="a",Es.CLOSE="b",Es.ERROR="c",Es.MESSAGE="d",be.prototype.listen=be.prototype.J,Fs=fl,ce.prototype.listenOnce=ce.prototype.K,ce.prototype.getLastError=ce.prototype.Ha,ce.prototype.getLastErrorCode=ce.prototype.ya,ce.prototype.getStatus=ce.prototype.ca,ce.prototype.getResponseJson=ce.prototype.La,ce.prototype.getResponseText=ce.prototype.la,ce.prototype.send=ce.prototype.ea,ce.prototype.setWithCredentials=ce.prototype.Fa,af=ce}).apply(typeof Ui<"u"?Ui:typeof self<"u"?self:typeof window<"u"?window:{});const Du="@firebase/firestore",Ou="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ne.UNAUTHENTICATED=new Ne(null),Ne.GOOGLE_CREDENTIALS=new Ne("google-credentials-uid"),Ne.FIRST_PARTY=new Ne("first-party-uid"),Ne.MOCK_USER=new Ne("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ls="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn=new Mr("@firebase/firestore");function Vn(){return Tn.logLevel}function M(n,...e){if(Tn.logLevel<=$.DEBUG){const t=e.map(nc);Tn.debug(`Firestore (${ls}): ${n}`,...t)}}function At(n,...e){if(Tn.logLevel<=$.ERROR){const t=e.map(nc);Tn.error(`Firestore (${ls}): ${n}`,...t)}}function Yn(n,...e){if(Tn.logLevel<=$.WARN){const t=e.map(nc);Tn.warn(`Firestore (${ls}): ${n}`,...t)}}function nc(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function x(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,df(n,s,t)}function df(n,e,t){let s=`FIRESTORE (${ls}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw At(s),new Error(s)}function Z(n,e,t,s){let i="Unexpected state";typeof t=="string"?i=t:s=t,n||df(e,i,s)}function B(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends Rt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class fT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ne.UNAUTHENTICATED)))}shutdown(){}}class pT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class mT{constructor(e){this.t=e,this.currentUser=Ne.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Z(this.o===void 0,42304);let s=this.i;const i=l=>this.i!==s?(s=this.i,t(l)):Promise.resolve();let r=new $t;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new $t,e.enqueueRetryable((()=>i(this.currentUser)))};const a=()=>{const l=r;e.enqueueRetryable((async()=>{await l.promise,await i(this.currentUser)}))},c=l=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new $t)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Z(typeof s.accessToken=="string",31837,{l:s}),new ff(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Z(e===null||typeof e=="string",2055,{h:e}),new Ne(e)}}class gT{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ne.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class _T{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new gT(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ne.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Vu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yT{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Qe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Z(this.o===void 0,3512);const s=r=>{r.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const a=r.token!==this.m;return this.m=r.token,M("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable((()=>s(r)))};const i=r=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((r=>i(r))),setTimeout((()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?i(r):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Vu(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Z(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Vu(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ET(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const i=ET(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<t&&(s+=e.charAt(i[r]%62))}return s}}function z(n,e){return n<e?-1:n>e?1:0}function la(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const i=n.charAt(s),r=e.charAt(s);if(i!==r)return qo(i)===qo(r)?z(i,r):qo(i)?1:-1}return z(n.length,e.length)}const TT=55296,IT=57343;function qo(n){const e=n.charCodeAt(0);return e>=TT&&e<=IT}function Xn(n,e,t){return n.length===e.length&&n.every(((s,i)=>t(s,e[i])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu="__name__";class st{constructor(e,t,s){t===void 0?t=0:t>e.length&&x(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&x(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return st.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof st?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let i=0;i<s;i++){const r=st.compareSegments(e.get(i),t.get(i));if(r!==0)return r}return z(e.length,t.length)}static compareSegments(e,t){const s=st.isNumericId(e),i=st.isNumericId(t);return s&&!i?-1:!s&&i?1:s&&i?st.extractNumericId(e).compare(st.extractNumericId(t)):la(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Wt.fromString(e.substring(4,e.length-2))}}class ne extends st{construct(e,t,s){return new ne(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new V(R.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((i=>i.length>0)))}return new ne(t)}static emptyPath(){return new ne([])}}const vT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Se extends st{construct(e,t,s){return new Se(e,t,s)}static isValidIdentifier(e){return vT.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Se.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Mu}static keyField(){return new Se([Mu])}static fromServerFormat(e){const t=[];let s="",i=0;const r=()=>{if(s.length===0)throw new V(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let a=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new V(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new V(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(s+=c,i++):(r(),i++)}if(r(),a)throw new V(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Se(t)}static emptyPath(){return new Se([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(ne.fromString(e))}static fromName(e){return new L(ne.fromString(e).popFirst(5))}static empty(){return new L(ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ne.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new ne(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(n,e,t){if(!t)throw new V(R.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function wT(n,e,t,s){if(e===!0&&s===!0)throw new V(R.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Lu(n){if(!L.isDocumentKey(n))throw new V(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function xu(n){if(L.isDocumentKey(n))throw new V(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function mf(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ur(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":x(12329,{type:typeof n})}function yt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new V(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ur(n);throw new V(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function fe(n,e){const t={typeString:n};return e&&(t.value=e),t}function di(n,e){if(!mf(n))throw new V(R.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const i=e[s].typeString,r="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const a=n[s];if(i&&typeof a!==i){t=`JSON field '${s}' must be a ${i}.`;break}if(r!==void 0&&a!==r.value){t=`Expected '${s}' field to equal '${r.value}'`;break}}if(t)throw new V(R.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu=-62135596800,Uu=1e6;class oe{static now(){return oe.fromMillis(Date.now())}static fromDate(e){return oe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Uu);return new oe(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new V(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new V(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Fu)throw new V(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Uu}_compareTo(e){return this.seconds===e.seconds?z(this.nanoseconds,e.nanoseconds):z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:oe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(di(e,oe._jsonSchema))return new oe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Fu;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}oe._jsonSchemaVersion="firestore/timestamp/1.0",oe._jsonSchema={type:fe("string",oe._jsonSchemaVersion),seconds:fe("number"),nanoseconds:fe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{static fromTimestamp(e){return new U(e)}static min(){return new U(new oe(0,0))}static max(){return new U(new oe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ti=-1;function AT(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,i=U.fromTimestamp(s===1e9?new oe(t+1,0):new oe(t,s));return new Qt(i,L.empty(),e)}function CT(n){return new Qt(n.readTime,n.key,ti)}class Qt{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Qt(U.min(),L.empty(),ti)}static max(){return new Qt(U.max(),L.empty(),ti)}}function ST(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=L.comparator(n.documentKey,e.documentKey),t!==0?t:z(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class bT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function us(n){if(n.code!==R.FAILED_PRECONDITION||n.message!==RT)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&x(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new b(((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(t,r).next(s,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof b?t:b.resolve(t)}catch(t){return b.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):b.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):b.reject(t)}static resolve(e){return new b(((t,s)=>{t(e)}))}static reject(e){return new b(((t,s)=>{s(e)}))}static waitFor(e){return new b(((t,s)=>{let i=0,r=0,a=!1;e.forEach((c=>{++i,c.next((()=>{++r,a&&r===i&&t()}),(l=>s(l)))})),a=!0,r===i&&t()}))}static or(e){let t=b.resolve(!1);for(const s of e)t=t.next((i=>i?b.resolve(i):s()));return t}static forEach(e,t){const s=[];return e.forEach(((i,r)=>{s.push(t.call(this,i,r))})),this.waitFor(s)}static mapArray(e,t){return new b(((s,i)=>{const r=e.length,a=new Array(r);let c=0;for(let l=0;l<r;l++){const h=l;t(e[h]).next((f=>{a[h]=f,++c,c===r&&s(a)}),(f=>i(f)))}}))}static doWhile(e,t){return new b(((s,i)=>{const r=()=>{e()===!0?t().next((()=>{r()}),i):s()};r()}))}}function PT(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function hs(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Br{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Br.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic=-1;function qr(n){return n==null}function fr(n){return n===0&&1/n==-1/0}function NT(n){return typeof n=="number"&&Number.isInteger(n)&&!fr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf="";function kT(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Bu(e)),e=DT(n.get(t),e);return Bu(e)}function DT(n,e){let t=e;const s=n.length;for(let i=0;i<s;i++){const r=n.charAt(i);switch(r){case"\0":t+="";break;case gf:t+="";break;default:t+=r}}return t}function Bu(n){return n+gf+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function sn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function _f(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let me=class ua{constructor(e,t){this.comparator=e,this.root=t||zt.EMPTY}insert(e,t){return new ua(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,zt.BLACK,null,null))}remove(e){return new ua(this.comparator,this.root.remove(e,this.comparator).copy(null,null,zt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return t+s.left.size;i<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Bi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Bi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Bi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Bi(this.root,e,this.comparator,!0)}},Bi=class{constructor(e,t,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?s(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},zt=class pt{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??pt.RED,this.left=i??pt.EMPTY,this.right=r??pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,i,r){return new pt(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return pt.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw x(43730,{key:this.key,value:this.value});if(this.right.isRed())throw x(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw x(27949);return e+(this.isRed()?0:1)}};zt.EMPTY=null,zt.RED=!0,zt.BLACK=!1;zt.EMPTY=new class{constructor(){this.size=0}get key(){throw x(57766)}get value(){throw x(16141)}get color(){throw x(16727)}get left(){throw x(29726)}get right(){throw x(36894)}copy(e,t,s,i,r){return this}insert(e,t,s){return new zt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.comparator=e,this.data=new me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ju(this.data.getIterator())}getIteratorFrom(e){return new ju(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof _e)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new _e(this.comparator);return t.data=e,t}}class ju{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.fields=e,e.sort(Se.comparator)}static empty(){return new $e([])}unionWith(e){let t=new _e(Se.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new $e(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Xn(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class yf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new yf("Invalid base64 string: "+r):r}})(e);return new Re(t)}static fromUint8Array(e){const t=(function(i){let r="";for(let a=0;a<i.length;++a)r+=String.fromCharCode(i[a]);return r})(e);return new Re(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let i=0;i<t.length;i++)s[i]=t.charCodeAt(i);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Re.EMPTY_BYTE_STRING=new Re("");const OT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Yt(n){if(Z(!!n,39018),typeof n=="string"){let e=0;const t=OT.exec(n);if(Z(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:le(n.seconds),nanos:le(n.nanos)}}function le(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Xt(n){return typeof n=="string"?Re.fromBase64String(n):Re.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef="server_timestamp",Tf="__type__",If="__previous_value__",vf="__local_write_time__";function rc(n){return(n?.mapValue?.fields||{})[Tf]?.stringValue===Ef}function jr(n){const e=n.mapValue.fields[If];return rc(e)?jr(e):e}function ni(n){const e=Yt(n.mapValue.fields[vf].timestampValue);return new oe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(e,t,s,i,r,a,c,l,h,f){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=f}}const pr="(default)";class si{constructor(e,t){this.projectId=e,this.database=t||pr}static empty(){return new si("","")}get isDefaultDatabase(){return this.database===pr}isEqual(e){return e instanceof si&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf="__type__",MT="__max__",qi={mapValue:{}},Af="__vector__",mr="value";function Jt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?rc(n)?4:xT(n)?9007199254740991:LT(n)?10:11:x(28295,{value:n})}function ft(n,e){if(n===e)return!0;const t=Jt(n);if(t!==Jt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ni(n).isEqual(ni(e));case 3:return(function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const a=Yt(i.timestampValue),c=Yt(r.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(i,r){return Xt(i.bytesValue).isEqual(Xt(r.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(i,r){return le(i.geoPointValue.latitude)===le(r.geoPointValue.latitude)&&le(i.geoPointValue.longitude)===le(r.geoPointValue.longitude)})(n,e);case 2:return(function(i,r){if("integerValue"in i&&"integerValue"in r)return le(i.integerValue)===le(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const a=le(i.doubleValue),c=le(r.doubleValue);return a===c?fr(a)===fr(c):isNaN(a)&&isNaN(c)}return!1})(n,e);case 9:return Xn(n.arrayValue.values||[],e.arrayValue.values||[],ft);case 10:case 11:return(function(i,r){const a=i.mapValue.fields||{},c=r.mapValue.fields||{};if(qu(a)!==qu(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!ft(a[l],c[l])))return!1;return!0})(n,e);default:return x(52216,{left:n})}}function ii(n,e){return(n.values||[]).find((t=>ft(t,e)))!==void 0}function Jn(n,e){if(n===e)return 0;const t=Jt(n),s=Jt(e);if(t!==s)return z(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return z(n.booleanValue,e.booleanValue);case 2:return(function(r,a){const c=le(r.integerValue||r.doubleValue),l=le(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(n,e);case 3:return Wu(n.timestampValue,e.timestampValue);case 4:return Wu(ni(n),ni(e));case 5:return la(n.stringValue,e.stringValue);case 6:return(function(r,a){const c=Xt(r),l=Xt(a);return c.compareTo(l)})(n.bytesValue,e.bytesValue);case 7:return(function(r,a){const c=r.split("/"),l=a.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=z(c[h],l[h]);if(f!==0)return f}return z(c.length,l.length)})(n.referenceValue,e.referenceValue);case 8:return(function(r,a){const c=z(le(r.latitude),le(a.latitude));return c!==0?c:z(le(r.longitude),le(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return $u(n.arrayValue,e.arrayValue);case 10:return(function(r,a){const c=r.fields||{},l=a.fields||{},h=c[mr]?.arrayValue,f=l[mr]?.arrayValue,p=z(h?.values?.length||0,f?.values?.length||0);return p!==0?p:$u(h,f)})(n.mapValue,e.mapValue);case 11:return(function(r,a){if(r===qi.mapValue&&a===qi.mapValue)return 0;if(r===qi.mapValue)return 1;if(a===qi.mapValue)return-1;const c=r.fields||{},l=Object.keys(c),h=a.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const g=la(l[p],f[p]);if(g!==0)return g;const C=Jn(c[l[p]],h[f[p]]);if(C!==0)return C}return z(l.length,f.length)})(n.mapValue,e.mapValue);default:throw x(23264,{he:t})}}function Wu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return z(n,e);const t=Yt(n),s=Yt(e),i=z(t.seconds,s.seconds);return i!==0?i:z(t.nanos,s.nanos)}function $u(n,e){const t=n.values||[],s=e.values||[];for(let i=0;i<t.length&&i<s.length;++i){const r=Jn(t[i],s[i]);if(r)return r}return z(t.length,s.length)}function Zn(n){return ha(n)}function ha(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=Yt(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Xt(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return L.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",i=!0;for(const r of t.values||[])i?i=!1:s+=",",s+=ha(r);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let i="{",r=!0;for(const a of s)r?r=!1:i+=",",i+=`${a}:${ha(t.fields[a])}`;return i+"}"})(n.mapValue):x(61005,{value:n})}function Xi(n){switch(Jt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=jr(n);return e?16+Xi(e):16;case 5:return 2*n.stringValue.length;case 6:return Xt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((i,r)=>i+Xi(r)),0)})(n.arrayValue);case 10:case 11:return(function(s){let i=0;return sn(s.fields,((r,a)=>{i+=r.length+Xi(a)})),i})(n.mapValue);default:throw x(13486,{value:n})}}function zu(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function da(n){return!!n&&"integerValue"in n}function oc(n){return!!n&&"arrayValue"in n}function Hu(n){return!!n&&"nullValue"in n}function Gu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ji(n){return!!n&&"mapValue"in n}function LT(n){return(n?.mapValue?.fields||{})[wf]?.stringValue===Af}function $s(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return sn(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=$s(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=$s(n.arrayValue.values[t]);return e}return{...n}}function xT(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===MT}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.value=e}static empty(){return new qe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Ji(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=$s(t)}setAll(e){let t=Se.emptyPath(),s={},i=[];e.forEach(((a,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,s,i),s={},i=[],t=c.popLast()}a?s[c.lastSegment()]=$s(a):i.push(c.lastSegment())}));const r=this.getFieldsMap(t);this.applyChanges(r,s,i)}delete(e){const t=this.field(e.popLast());Ji(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ft(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=t.mapValue.fields[e.get(s)];Ji(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,s){sn(t,((i,r)=>e[i]=r));for(const i of s)delete e[i]}clone(){return new qe($s(this.value))}}function Cf(n){const e=[];return sn(n.fields,((t,s)=>{const i=new Se([t]);if(Ji(s)){const r=Cf(s.mapValue).fields;if(r.length===0)e.push(i);else for(const a of r)e.push(i.child(a))}else e.push(i)})),new $e(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,t,s,i,r,a,c){this.key=e,this.documentType=t,this.version=s,this.readTime=i,this.createTime=r,this.data=a,this.documentState=c}static newInvalidDocument(e){return new ke(e,0,U.min(),U.min(),U.min(),qe.empty(),0)}static newFoundDocument(e,t,s,i){return new ke(e,1,t,U.min(),s,i,0)}static newNoDocument(e,t){return new ke(e,2,t,U.min(),U.min(),qe.empty(),0)}static newUnknownDocument(e,t){return new ke(e,3,t,U.min(),U.min(),qe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=qe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=qe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ke&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ke(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class gr{constructor(e,t){this.position=e,this.inclusive=t}}function Ku(n,e,t){let s=0;for(let i=0;i<n.position.length;i++){const r=e[i],a=n.position[i];if(r.field.isKeyField()?s=L.comparator(L.fromName(a.referenceValue),t.key):s=Jn(a,t.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Qu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ft(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class _r{constructor(e,t="asc"){this.field=e,this.dir=t}}function FT(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Sf{}class de extends Sf{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new BT(e,t,s):t==="array-contains"?new WT(e,s):t==="in"?new $T(e,s):t==="not-in"?new zT(e,s):t==="array-contains-any"?new HT(e,s):new de(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new qT(e,s):new jT(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Jn(t,this.value)):t!==null&&Jt(this.value)===Jt(t)&&this.matchesComparison(Jn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return x(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class et extends Sf{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new et(e,t)}matches(e){return Rf(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Rf(n){return n.op==="and"}function bf(n){return UT(n)&&Rf(n)}function UT(n){for(const e of n.filters)if(e instanceof et)return!1;return!0}function fa(n){if(n instanceof de)return n.field.canonicalString()+n.op.toString()+Zn(n.value);if(bf(n))return n.filters.map((e=>fa(e))).join(",");{const e=n.filters.map((t=>fa(t))).join(",");return`${n.op}(${e})`}}function Pf(n,e){return n instanceof de?(function(s,i){return i instanceof de&&s.op===i.op&&s.field.isEqual(i.field)&&ft(s.value,i.value)})(n,e):n instanceof et?(function(s,i){return i instanceof et&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce(((r,a,c)=>r&&Pf(a,i.filters[c])),!0):!1})(n,e):void x(19439)}function Nf(n){return n instanceof de?(function(t){return`${t.field.canonicalString()} ${t.op} ${Zn(t.value)}`})(n):n instanceof et?(function(t){return t.op.toString()+" {"+t.getFilters().map(Nf).join(" ,")+"}"})(n):"Filter"}class BT extends de{constructor(e,t,s){super(e,t,s),this.key=L.fromName(s.referenceValue)}matches(e){const t=L.comparator(e.key,this.key);return this.matchesComparison(t)}}class qT extends de{constructor(e,t){super(e,"in",t),this.keys=kf("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class jT extends de{constructor(e,t){super(e,"not-in",t),this.keys=kf("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function kf(n,e){return(e.arrayValue?.values||[]).map((t=>L.fromName(t.referenceValue)))}class WT extends de{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return oc(t)&&ii(t.arrayValue,this.value)}}class $T extends de{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ii(this.value.arrayValue,t)}}class zT extends de{constructor(e,t){super(e,"not-in",t)}matches(e){if(ii(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ii(this.value.arrayValue,t)}}class HT extends de{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!oc(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>ii(this.value.arrayValue,s)))}}/**
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
 */class GT{constructor(e,t=null,s=[],i=[],r=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=a,this.endAt=c,this.Te=null}}function Yu(n,e=null,t=[],s=[],i=null,r=null,a=null){return new GT(n,e,t,s,i,r,a)}function ac(n){const e=B(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>fa(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(r){return r.field.canonicalString()+r.dir})(s))).join(","),qr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>Zn(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>Zn(s))).join(",")),e.Te=t}return e.Te}function cc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!FT(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Pf(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Qu(n.startAt,e.startAt)&&Qu(n.endAt,e.endAt)}function pa(n){return L.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,t=null,s=[],i=[],r=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=a,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function KT(n,e,t,s,i,r,a,c){return new fi(n,e,t,s,i,r,a,c)}function Wr(n){return new fi(n)}function Xu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Df(n){return n.collectionGroup!==null}function zs(n){const e=B(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const r of e.explicitOrderBy)e.Ie.push(r),t.add(r.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new _e(Se.comparator);return a.filters.forEach((l=>{l.getFlattenedFilters().forEach((h=>{h.isInequality()&&(c=c.add(h.field))}))})),c})(e).forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.Ie.push(new _r(r,s))})),t.has(Se.keyField().canonicalString())||e.Ie.push(new _r(Se.keyField(),s))}return e.Ie}function ct(n){const e=B(n);return e.Ee||(e.Ee=QT(e,zs(n))),e.Ee}function QT(n,e){if(n.limitType==="F")return Yu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((i=>{const r=i.dir==="desc"?"asc":"desc";return new _r(i.field,r)}));const t=n.endAt?new gr(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new gr(n.startAt.position,n.startAt.inclusive):null;return Yu(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function ma(n,e){const t=n.filters.concat([e]);return new fi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function ga(n,e,t){return new fi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function $r(n,e){return cc(ct(n),ct(e))&&n.limitType===e.limitType}function Of(n){return`${ac(ct(n))}|lt:${n.limitType}`}function Mn(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((i=>Nf(i))).join(", ")}]`),qr(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((i=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(i))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((i=>Zn(i))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((i=>Zn(i))).join(",")),`Target(${s})`})(ct(n))}; limitType=${n.limitType})`}function zr(n,e){return e.isFoundDocument()&&(function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):L.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)})(n,e)&&(function(s,i){for(const r of zs(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0})(n,e)&&(function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0})(n,e)&&(function(s,i){return!(s.startAt&&!(function(a,c,l){const h=Ku(a,c,l);return a.inclusive?h<=0:h<0})(s.startAt,zs(s),i)||s.endAt&&!(function(a,c,l){const h=Ku(a,c,l);return a.inclusive?h>=0:h>0})(s.endAt,zs(s),i))})(n,e)}function YT(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Vf(n){return(e,t)=>{let s=!1;for(const i of zs(n)){const r=XT(i,e,t);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function XT(n,e,t){const s=n.field.isKeyField()?L.comparator(e.key,t.key):(function(r,a,c){const l=a.data.field(r),h=c.data.field(r);return l!==null&&h!==null?Jn(l,h):x(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return x(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[t]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){sn(this.inner,((t,s)=>{for(const[i,r]of s)e(i,r)}))}isEmpty(){return _f(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JT=new me(L.comparator);function Ct(){return JT}const Mf=new me(L.comparator);function Us(...n){let e=Mf;for(const t of n)e=e.insert(t.key,t);return e}function Lf(n){let e=Mf;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function pn(){return Hs()}function xf(){return Hs()}function Hs(){return new Sn((n=>n.toString()),((n,e)=>n.isEqual(e)))}const ZT=new me(L.comparator),eI=new _e(L.comparator);function H(...n){let e=eI;for(const t of n)e=e.add(t);return e}const tI=new _e(z);function nI(){return tI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fr(e)?"-0":e}}function Ff(n){return{integerValue:""+n}}function sI(n,e){return NT(e)?Ff(e):lc(n,e)}/**
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
 */class Hr{constructor(){this._=void 0}}function iI(n,e,t){return n instanceof yr?(function(i,r){const a={fields:{[Tf]:{stringValue:Ef},[vf]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&rc(r)&&(r=jr(r)),r&&(a.fields[If]=r),{mapValue:a}})(t,e):n instanceof es?Bf(n,e):n instanceof ri?qf(n,e):(function(i,r){const a=Uf(i,r),c=Ju(a)+Ju(i.Ae);return da(a)&&da(i.Ae)?Ff(c):lc(i.serializer,c)})(n,e)}function rI(n,e,t){return n instanceof es?Bf(n,e):n instanceof ri?qf(n,e):t}function Uf(n,e){return n instanceof Er?(function(s){return da(s)||(function(r){return!!r&&"doubleValue"in r})(s)})(e)?e:{integerValue:0}:null}class yr extends Hr{}class es extends Hr{constructor(e){super(),this.elements=e}}function Bf(n,e){const t=jf(e);for(const s of n.elements)t.some((i=>ft(i,s)))||t.push(s);return{arrayValue:{values:t}}}class ri extends Hr{constructor(e){super(),this.elements=e}}function qf(n,e){let t=jf(e);for(const s of n.elements)t=t.filter((i=>!ft(i,s)));return{arrayValue:{values:t}}}class Er extends Hr{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Ju(n){return le(n.integerValue||n.doubleValue)}function jf(n){return oc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e,t){this.field=e,this.transform=t}}function aI(n,e){return n.field.isEqual(e.field)&&(function(s,i){return s instanceof es&&i instanceof es||s instanceof ri&&i instanceof ri?Xn(s.elements,i.elements,ft):s instanceof Er&&i instanceof Er?ft(s.Ae,i.Ae):s instanceof yr&&i instanceof yr})(n.transform,e.transform)}class cI{constructor(e,t){this.version=e,this.transformResults=t}}class lt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new lt}static exists(e){return new lt(void 0,e)}static updateTime(e){return new lt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Zi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Gr{}function Wf(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new zf(n.key,lt.none()):new pi(n.key,n.data,lt.none());{const t=n.data,s=qe.empty();let i=new _e(Se.comparator);for(let r of e.fields)if(!i.has(r)){let a=t.field(r);a===null&&r.length>1&&(r=r.popLast(),a=t.field(r)),a===null?s.delete(r):s.set(r,a),i=i.add(r)}return new rn(n.key,s,new $e(i.toArray()),lt.none())}}function lI(n,e,t){n instanceof pi?(function(i,r,a){const c=i.value.clone(),l=eh(i.fieldTransforms,r,a.transformResults);c.setAll(l),r.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,e,t):n instanceof rn?(function(i,r,a){if(!Zi(i.precondition,r))return void r.convertToUnknownDocument(a.version);const c=eh(i.fieldTransforms,r,a.transformResults),l=r.data;l.setAll($f(i)),l.setAll(c),r.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,e,t):(function(i,r,a){r.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function Gs(n,e,t,s){return n instanceof pi?(function(r,a,c,l){if(!Zi(r.precondition,a))return c;const h=r.value.clone(),f=th(r.fieldTransforms,l,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null})(n,e,t,s):n instanceof rn?(function(r,a,c,l){if(!Zi(r.precondition,a))return c;const h=th(r.fieldTransforms,l,a),f=a.data;return f.setAll($f(r)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map((p=>p.field)))})(n,e,t,s):(function(r,a,c){return Zi(r.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(n,e,t)}function uI(n,e){let t=null;for(const s of n.fieldTransforms){const i=e.data.field(s.field),r=Uf(s.transform,i||null);r!=null&&(t===null&&(t=qe.empty()),t.set(s.field,r))}return t||null}function Zu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&Xn(s,i,((r,a)=>aI(r,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class pi extends Gr{constructor(e,t,s,i=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class rn extends Gr{constructor(e,t,s,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function $f(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function eh(n,e,t){const s=new Map;Z(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let i=0;i<t.length;i++){const r=n[i],a=r.transform,c=e.data.field(r.field);s.set(r.field,rI(a,c,t[i]))}return s}function th(n,e,t){const s=new Map;for(const i of n){const r=i.transform,a=t.data.field(i.field);s.set(i.field,iI(r,a,e))}return s}class zf extends Gr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hI extends Gr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e,t,s,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&lI(r,e,s[i])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Gs(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Gs(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=xf();return this.mutations.forEach((i=>{const r=e.get(i.key),a=r.overlayedDocument;let c=this.applyToLocalView(a,r.mutatedFields);c=t.has(i.key)?null:c;const l=Wf(a,c);l!==null&&s.set(i.key,l),a.isValidDocument()||a.convertToNoDocument(U.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),H())}isEqual(e){return this.batchId===e.batchId&&Xn(this.mutations,e.mutations,((t,s)=>Zu(t,s)))&&Xn(this.baseMutations,e.baseMutations,((t,s)=>Zu(t,s)))}}class uc{constructor(e,t,s,i){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=i}static from(e,t,s){Z(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let i=(function(){return ZT})();const r=e.mutations;for(let a=0;a<r.length;a++)i=i.insert(r[a].key,s[a].version);return new uc(e,t,s,i)}}/**
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
 */class fI{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class pI{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he,Q;function mI(n){switch(n){case R.OK:return x(64938);case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0;default:return x(15467,{code:n})}}function Hf(n){if(n===void 0)return At("GRPC error has no .code"),R.UNKNOWN;switch(n){case he.OK:return R.OK;case he.CANCELLED:return R.CANCELLED;case he.UNKNOWN:return R.UNKNOWN;case he.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case he.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case he.INTERNAL:return R.INTERNAL;case he.UNAVAILABLE:return R.UNAVAILABLE;case he.UNAUTHENTICATED:return R.UNAUTHENTICATED;case he.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case he.NOT_FOUND:return R.NOT_FOUND;case he.ALREADY_EXISTS:return R.ALREADY_EXISTS;case he.PERMISSION_DENIED:return R.PERMISSION_DENIED;case he.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case he.ABORTED:return R.ABORTED;case he.OUT_OF_RANGE:return R.OUT_OF_RANGE;case he.UNIMPLEMENTED:return R.UNIMPLEMENTED;case he.DATA_LOSS:return R.DATA_LOSS;default:return x(39323,{code:n})}}(Q=he||(he={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function gI(){return new TextEncoder}/**
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
 */const _I=new Wt([4294967295,4294967295],0);function nh(n){const e=gI().encode(n),t=new of;return t.update(e),new Uint8Array(t.digest())}function sh(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Wt([t,s],0),new Wt([i,r],0)]}class hc{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Bs(`Invalid padding: ${t}`);if(s<0)throw new Bs(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Bs(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Bs(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Wt.fromNumber(this.ge)}ye(e,t,s){let i=e.add(t.multiply(Wt.fromNumber(s)));return i.compare(_I)===1&&(i=new Wt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=nh(e),[s,i]=sh(t);for(let r=0;r<this.hashCount;r++){const a=this.ye(s,i,r);if(!this.we(a))return!1}return!0}static create(e,t,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),a=new hc(r,i,t);return s.forEach((c=>a.insert(c))),a}insert(e){if(this.ge===0)return;const t=nh(e),[s,i]=sh(t);for(let r=0;r<this.hashCount;r++){const a=this.ye(s,i,r);this.Se(a)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Bs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,t,s,i,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const i=new Map;return i.set(e,mi.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Kr(U.min(),i,new me(z),Ct(),H())}}class mi{constructor(e,t,s,i,r){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new mi(s,t,H(),H(),H())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,t,s,i){this.be=e,this.removedTargetIds=t,this.key=s,this.De=i}}class Gf{constructor(e,t){this.targetId=e,this.Ce=t}}class Kf{constructor(e,t,s=Re.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=i}}class ih{constructor(){this.ve=0,this.Fe=rh(),this.Me=Re.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=H(),t=H(),s=H();return this.Fe.forEach(((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:s=s.add(i);break;default:x(38017,{changeType:r})}})),new mi(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=rh()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Z(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class yI{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ct(),this.Je=ji(),this.He=ji(),this.Ye=new me(z)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:x(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,i)=>{this.rt(i)&&t(i)}))}st(e){const t=e.targetId,s=e.Ce.count,i=this.ot(t);if(i){const r=i.target;if(pa(r))if(s===0){const a=new L(r.path);this.et(t,a,ke.newNoDocument(a,U.min()))}else Z(s===1,20013,{expectedCount:s});else{const a=this._t(t);if(a!==s){const c=this.ut(e),l=c?this.ct(c,e,a):1;if(l!==0){this.it(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:i=0},hashCount:r=0}=t;let a,c;try{a=Xt(s).toUint8Array()}catch(l){if(l instanceof yf)return Yn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new hc(a,i,r)}catch(l){return Yn(l instanceof Bs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let i=0;return s.forEach((r=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${r.path.canonicalString()}`;e.mightContain(c)||(this.et(t,r,null),i++)})),i}Tt(e){const t=new Map;this.ze.forEach(((r,a)=>{const c=this.ot(a);if(c){if(r.current&&pa(c.target)){const l=new L(c.target.path);this.It(l).has(a)||this.Et(a,l)||this.et(a,l,ke.newNoDocument(l,e))}r.Be&&(t.set(a,r.ke()),r.qe())}}));let s=H();this.He.forEach(((r,a)=>{let c=!0;a.forEachWhile((l=>{const h=this.ot(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(s=s.add(r))})),this.je.forEach(((r,a)=>a.setReadTime(e)));const i=new Kr(e,t,this.Ye,this.je,s);return this.je=Ct(),this.Je=ji(),this.He=ji(),this.Ye=new me(z),i}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,t)?i.Qe(t,1):i.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new ih,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new _e(z),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new _e(z),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||M("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new ih),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function ji(){return new me(L.comparator)}function rh(){return new me(L.comparator)}const EI={asc:"ASCENDING",desc:"DESCENDING"},TI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},II={and:"AND",or:"OR"};class vI{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function _a(n,e){return n.useProto3Json||qr(e)?e:{value:e}}function Tr(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Qf(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function wI(n,e){return Tr(n,e.toTimestamp())}function ut(n){return Z(!!n,49232),U.fromTimestamp((function(t){const s=Yt(t);return new oe(s.seconds,s.nanos)})(n))}function dc(n,e){return ya(n,e).canonicalString()}function ya(n,e){const t=(function(i){return new ne(["projects",i.projectId,"databases",i.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Yf(n){const e=ne.fromString(n);return Z(tp(e),10190,{key:e.toString()}),e}function Ea(n,e){return dc(n.databaseId,e.path)}function jo(n,e){const t=Yf(e);if(t.get(1)!==n.databaseId.projectId)throw new V(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new V(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new L(Jf(t))}function Xf(n,e){return dc(n.databaseId,e)}function AI(n){const e=Yf(n);return e.length===4?ne.emptyPath():Jf(e)}function Ta(n){return new ne(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Jf(n){return Z(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function oh(n,e,t){return{name:Ea(n,e),fields:t.value.mapValue.fields}}function CI(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:x(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=(function(h,f){return h.useProto3Json?(Z(f===void 0||typeof f=="string",58123),Re.fromBase64String(f||"")):(Z(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Re.fromUint8Array(f||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&(function(h){const f=h.code===void 0?R.UNKNOWN:Hf(h.code);return new V(f,h.message||"")})(a);t=new Kf(s,i,r,c||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=jo(n,s.document.name),r=ut(s.document.updateTime),a=s.document.createTime?ut(s.document.createTime):U.min(),c=new qe({mapValue:{fields:s.document.fields}}),l=ke.newFoundDocument(i,r,a,c),h=s.targetIds||[],f=s.removedTargetIds||[];t=new er(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=jo(n,s.document),r=s.readTime?ut(s.readTime):U.min(),a=ke.newNoDocument(i,r),c=s.removedTargetIds||[];t=new er([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=jo(n,s.document),r=s.removedTargetIds||[];t=new er([],r,i,null)}else{if(!("filter"in e))return x(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,a=new pI(i,r),c=s.targetId;t=new Gf(c,a)}}return t}function SI(n,e){let t;if(e instanceof pi)t={update:oh(n,e.key,e.value)};else if(e instanceof zf)t={delete:Ea(n,e.key)};else if(e instanceof rn)t={update:oh(n,e.key,e.data),updateMask:MI(e.fieldMask)};else{if(!(e instanceof hI))return x(16599,{Vt:e.type});t={verify:Ea(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(r,a){const c=a.transform;if(c instanceof yr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof es)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof ri)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Er)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw x(20930,{transform:a.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(i,r){return r.updateTime!==void 0?{updateTime:wI(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:x(27497)})(n,e.precondition)),t}function RI(n,e){return n&&n.length>0?(Z(e!==void 0,14353),n.map((t=>(function(i,r){let a=i.updateTime?ut(i.updateTime):ut(r);return a.isEqual(U.min())&&(a=ut(r)),new cI(a,i.transformResults||[])})(t,e)))):[]}function bI(n,e){return{documents:[Xf(n,e.path)]}}function PI(n,e){const t={structuredQuery:{}},s=e.path;let i;e.collectionGroup!==null?(i=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Xf(n,i);const r=(function(h){if(h.length!==0)return ep(et.create(h,"and"))})(e.filters);r&&(t.structuredQuery.where=r);const a=(function(h){if(h.length!==0)return h.map((f=>(function(g){return{field:Ln(g.field),direction:DI(g.dir)}})(f)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=_a(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{ft:t,parent:i}}function NI(n){let e=AI(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let i=null;if(s>0){Z(s===1,65062);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let r=[];t.where&&(r=(function(p){const g=Zf(p);return g instanceof et&&bf(g)?g.getFilters():[g]})(t.where));let a=[];t.orderBy&&(a=(function(p){return p.map((g=>(function(P){return new _r(xn(P.field),(function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(P.direction))})(g)))})(t.orderBy));let c=null;t.limit&&(c=(function(p){let g;return g=typeof p=="object"?p.value:p,qr(g)?null:g})(t.limit));let l=null;t.startAt&&(l=(function(p){const g=!!p.before,C=p.values||[];return new gr(C,g)})(t.startAt));let h=null;return t.endAt&&(h=(function(p){const g=!p.before,C=p.values||[];return new gr(C,g)})(t.endAt)),KT(e,i,a,r,c,"F",l,h)}function kI(n,e){const t=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return x(28987,{purpose:i})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Zf(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=xn(t.unaryFilter.field);return de.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=xn(t.unaryFilter.field);return de.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=xn(t.unaryFilter.field);return de.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=xn(t.unaryFilter.field);return de.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return x(61313);default:return x(60726)}})(n):n.fieldFilter!==void 0?(function(t){return de.create(xn(t.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return x(58110);default:return x(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return et.create(t.compositeFilter.filters.map((s=>Zf(s))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return x(1026)}})(t.compositeFilter.op))})(n):x(30097,{filter:n})}function DI(n){return EI[n]}function OI(n){return TI[n]}function VI(n){return II[n]}function Ln(n){return{fieldPath:n.canonicalString()}}function xn(n){return Se.fromServerFormat(n.fieldPath)}function ep(n){return n instanceof de?(function(t){if(t.op==="=="){if(Gu(t.value))return{unaryFilter:{field:Ln(t.field),op:"IS_NAN"}};if(Hu(t.value))return{unaryFilter:{field:Ln(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Gu(t.value))return{unaryFilter:{field:Ln(t.field),op:"IS_NOT_NAN"}};if(Hu(t.value))return{unaryFilter:{field:Ln(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ln(t.field),op:OI(t.op),value:t.value}}})(n):n instanceof et?(function(t){const s=t.getFilters().map((i=>ep(i)));return s.length===1?s[0]:{compositeFilter:{op:VI(t.op),filters:s}}})(n):x(54877,{filter:n})}function MI(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function tp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,t,s,i,r=U.min(),a=U.min(),c=Re.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Bt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(e){this.yt=e}}function xI(n){const e=NI({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ga(e,e.limit,"L"):e}/**
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
 */class FI{constructor(){this.Cn=new UI}addToCollectionParentIndex(e,t){return this.Cn.add(t),b.resolve()}getCollectionParents(e,t){return b.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return b.resolve()}deleteFieldIndex(e,t){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,t){return b.resolve()}getDocumentsMatchingTarget(e,t){return b.resolve(null)}getIndexType(e,t){return b.resolve(0)}getFieldIndexes(e,t){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,t){return b.resolve(Qt.min())}getMinOffsetFromCollectionGroup(e,t){return b.resolve(Qt.min())}updateCollectionGroup(e,t,s){return b.resolve()}updateIndexEntries(e,t){return b.resolve()}}class UI{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t]||new _e(ne.comparator),r=!i.has(s);return this.index[t]=i.add(s),r}has(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t];return i&&i.has(s)}getEntries(e){return(this.index[e]||new _e(ne.comparator)).toArray()}}/**
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
 */const ah={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},np=41943040;class Be{static withCacheSize(e){return new Be(e,Be.DEFAULT_COLLECTION_PERCENTILE,Be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Be.DEFAULT_COLLECTION_PERCENTILE=10,Be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Be.DEFAULT=new Be(np,Be.DEFAULT_COLLECTION_PERCENTILE,Be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Be.DISABLED=new Be(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new ts(0)}static cr(){return new ts(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch="LruGarbageCollector",BI=1048576;function lh([n,e],[t,s]){const i=z(n,t);return i===0?z(e,s):i}class qI{constructor(e){this.Ir=e,this.buffer=new _e(lh),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();lh(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class jI{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){M(ch,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){hs(t)?M(ch,"Ignoring IndexedDB error during garbage collection: ",t):await us(t)}await this.Vr(3e5)}))}}class WI{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return b.resolve(Br.ce);const s=new qI(t);return this.mr.forEachTarget(e,(i=>s.Ar(i.sequenceNumber))).next((()=>this.mr.pr(e,(i=>s.Ar(i))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(M("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(ah)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(M("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ah):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,i,r,a,c,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(M("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,a=Date.now(),this.nthSequenceNumber(e,i)))).next((p=>(s=p,c=Date.now(),this.removeTargets(e,s,t)))).next((p=>(r=p,l=Date.now(),this.removeOrphanedDocuments(e,s)))).next((p=>(h=Date.now(),Vn()<=$.DEBUG&&M("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${i} in `+(c-a)+`ms
	Removed ${r} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:r,documentsRemoved:p}))))}}function $I(n,e){return new WI(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(){this.changes=new Sn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ke.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?b.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class HI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e,t,s,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(s=i,this.remoteDocumentCache.getEntry(e,t)))).next((i=>(s!==null&&Gs(s.mutation,i,$e.empty(),oe.now()),i)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,H()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=H()){const i=pn();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,s).next((r=>{let a=Us();return r.forEach(((c,l)=>{a=a.insert(c,l.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const s=pn();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,H())))}populateOverlays(e,t,s){const i=[];return s.forEach((r=>{t.has(r)||i.push(r)})),this.documentOverlayCache.getOverlays(e,i).next((r=>{r.forEach(((a,c)=>{t.set(a,c)}))}))}computeViews(e,t,s,i){let r=Ct();const a=Hs(),c=(function(){return Hs()})();return t.forEach(((l,h)=>{const f=s.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof rn)?r=r.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Gs(f.mutation,h,f.mutation.getFieldMask(),oe.now())):a.set(h.key,$e.empty())})),this.recalculateAndSaveOverlays(e,r).next((l=>(l.forEach(((h,f)=>a.set(h,f))),t.forEach(((h,f)=>c.set(h,new HI(f,a.get(h)??null)))),c)))}recalculateAndSaveOverlays(e,t){const s=Hs();let i=new me(((a,c)=>a-c)),r=H();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const c of a)c.keys().forEach((l=>{const h=t.get(l);if(h===null)return;let f=s.get(l)||$e.empty();f=c.applyToLocalView(h,f),s.set(l,f);const p=(i.get(c.batchId)||H()).add(l);i=i.insert(c.batchId,p)}))})).next((()=>{const a=[],c=i.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,p=xf();f.forEach((g=>{if(!r.has(g)){const C=Wf(t.get(g),s.get(g));C!==null&&p.set(g,C),r=r.add(g)}})),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return b.waitFor(a)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,i){return(function(a){return L.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Df(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,i):this.getDocumentsMatchingCollectionQuery(e,t,s,i)}getNextDocuments(e,t,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,i).next((r=>{const a=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,i-r.size):b.resolve(pn());let c=ti,l=r;return a.next((h=>b.forEach(h,((f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),r.get(f)?b.resolve():this.remoteDocumentCache.getEntry(e,f).next((g=>{l=l.insert(f,g)}))))).next((()=>this.populateOverlays(e,h,r))).next((()=>this.computeViews(e,l,h,H()))).next((f=>({batchId:c,changes:Lf(f)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new L(t)).next((s=>{let i=Us();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,i){const r=t.collectionGroup;let a=Us();return this.indexManager.getCollectionParents(e,r).next((c=>b.forEach(c,(l=>{const h=(function(p,g){return new fi(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(t,l.child(r));return this.getDocumentsMatchingCollectionQuery(e,h,s,i).next((f=>{f.forEach(((p,g)=>{a=a.insert(p,g)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,s,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((a=>(r=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,r,i)))).next((a=>{r.forEach(((l,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,ke.newInvalidDocument(f)))}));let c=Us();return a.forEach(((l,h)=>{const f=r.get(l);f!==void 0&&Gs(f.mutation,h,$e.empty(),oe.now()),zr(t,h)&&(c=c.insert(l,h))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return b.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(i){return{id:i.id,version:i.version,createTime:ut(i.createTime)}})(t)),b.resolve()}getNamedQuery(e,t){return b.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(i){return{name:i.name,query:xI(i.bundledQuery),readTime:ut(i.readTime)}})(t)),b.resolve()}}/**
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
 */class QI{constructor(){this.overlays=new me(L.comparator),this.qr=new Map}getOverlay(e,t){return b.resolve(this.overlays.get(t))}getOverlays(e,t){const s=pn();return b.forEach(t,(i=>this.getOverlay(e,i).next((r=>{r!==null&&s.set(i,r)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((i,r)=>{this.St(e,t,r)})),b.resolve()}removeOverlaysForBatchId(e,t,s){const i=this.qr.get(s);return i!==void 0&&(i.forEach((r=>this.overlays=this.overlays.remove(r))),this.qr.delete(s)),b.resolve()}getOverlaysForCollection(e,t,s){const i=pn(),r=t.length+1,a=new L(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return b.resolve(i)}getOverlaysForCollectionGroup(e,t,s,i){let r=new me(((h,f)=>h-f));const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>s){let f=r.get(h.largestBatchId);f===null&&(f=pn(),r=r.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=pn(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((h,f)=>c.set(h,f))),!(c.size()>=i)););return b.resolve(c)}St(e,t,s){const i=this.overlays.get(s.key);if(i!==null){const a=this.qr.get(i.largestBatchId).delete(s.key);this.qr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(s.key,new fI(t,s));let r=this.qr.get(t);r===void 0&&(r=H(),this.qr.set(t,r)),this.qr.set(t,r.add(s.key))}}/**
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
 */class YI{constructor(){this.sessionToken=Re.EMPTY_BYTE_STRING}getSessionToken(e){return b.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,b.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(){this.Qr=new _e(Ie.$r),this.Ur=new _e(Ie.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new Ie(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Gr(new Ie(e,t))}zr(e,t){e.forEach((s=>this.removeReference(s,t)))}jr(e){const t=new L(new ne([])),s=new Ie(t,e),i=new Ie(t,e+1),r=[];return this.Ur.forEachInRange([s,i],(a=>{this.Gr(a),r.push(a.key)})),r}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new L(new ne([])),s=new Ie(t,e),i=new Ie(t,e+1);let r=H();return this.Ur.forEachInRange([s,i],(a=>{r=r.add(a.key)})),r}containsKey(e){const t=new Ie(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Ie{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return L.comparator(e.key,t.key)||z(e.Yr,t.Yr)}static Kr(e,t){return z(e.Yr,t.Yr)||L.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new _e(Ie.$r)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,i){const r=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new dI(r,t,s,i);this.mutationQueue.push(a);for(const c of i)this.Zr=this.Zr.add(new Ie(c.key,r)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return b.resolve(a)}lookupMutationBatch(e,t){return b.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,i=this.ei(s),r=i<0?0:i;return b.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?ic:this.tr-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Ie(t,0),i=new Ie(t,Number.POSITIVE_INFINITY),r=[];return this.Zr.forEachInRange([s,i],(a=>{const c=this.Xr(a.Yr);r.push(c)})),b.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new _e(z);return t.forEach((i=>{const r=new Ie(i,0),a=new Ie(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([r,a],(c=>{s=s.add(c.Yr)}))})),b.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,i=s.length+1;let r=s;L.isDocumentKey(r)||(r=r.child(""));const a=new Ie(new L(r),0);let c=new _e(z);return this.Zr.forEachWhile((l=>{const h=l.key.path;return!!s.isPrefixOf(h)&&(h.length===i&&(c=c.add(l.Yr)),!0)}),a),b.resolve(this.ti(c))}ti(e){const t=[];return e.forEach((s=>{const i=this.Xr(s);i!==null&&t.push(i)})),t}removeMutationBatch(e,t){Z(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return b.forEach(t.mutations,(i=>{const r=new Ie(i.key,t.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,t){const s=new Ie(t,0),i=this.Zr.firstAfterOrEqual(s);return b.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(e){this.ri=e,this.docs=(function(){return new me(L.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,i=this.docs.get(s),r=i?i.size:0,a=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:a}),this.size+=a-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return b.resolve(s?s.document.mutableCopy():ke.newInvalidDocument(t))}getEntries(e,t){let s=Ct();return t.forEach((i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():ke.newInvalidDocument(i))})),b.resolve(s)}getDocumentsMatchingQuery(e,t,s,i){let r=Ct();const a=t.path,c=new L(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||ST(CT(f),s)<=0||(i.has(f.key)||zr(t,f))&&(r=r.insert(f.key,f.mutableCopy()))}return b.resolve(r)}getAllFromCollectionGroup(e,t,s,i){x(9500)}ii(e,t){return b.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new ZI(this)}getSize(e){return b.resolve(this.size)}}class ZI extends zI{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,i)=>{i.isValidDocument()?t.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(s)})),b.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(e){this.persistence=e,this.si=new Sn((t=>ac(t)),cc),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.oi=0,this._i=new fc,this.targetCount=0,this.ai=ts.ur()}forEachTarget(e,t){return this.si.forEach(((s,i)=>t(i))),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),b.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new ts(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,b.resolve()}updateTargetData(e,t){return this.Pr(t),b.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,t,s){let i=0;const r=[];return this.si.forEach(((a,c)=>{c.sequenceNumber<=t&&s.get(c.targetId)===null&&(this.si.delete(a),r.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)})),b.waitFor(r).next((()=>i))}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return b.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),b.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach((a=>{r.push(i.markPotentiallyOrphaned(e,a))})),b.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),b.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return b.resolve(s)}containsKey(e,t){return b.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e,t){this.ui={},this.overlays={},this.ci=new Br(0),this.li=!1,this.li=!0,this.hi=new YI,this.referenceDelegate=e(this),this.Pi=new ev(this),this.indexManager=new FI,this.remoteDocumentCache=(function(i){return new JI(i)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new LI(t),this.Ii=new KI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new QI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new XI(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){M("MemoryPersistence","Starting transaction:",e);const i=new tv(this.ci.next());return this.referenceDelegate.Ei(),s(i).next((r=>this.referenceDelegate.di(i).next((()=>r)))).toPromise().then((r=>(i.raiseOnCommittedEvent(),r)))}Ai(e,t){return b.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,t))))}}class tv extends bT{constructor(e){super(),this.currentSequenceNumber=e}}class pc{constructor(e){this.persistence=e,this.Ri=new fc,this.Vi=null}static mi(e){return new pc(e)}get fi(){if(this.Vi)return this.Vi;throw x(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),b.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),b.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),b.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((i=>this.fi.add(i.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((i=>{i.forEach((r=>this.fi.add(r.toString())))})).next((()=>s.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.fi,(s=>{const i=L.fromPath(s);return this.gi(e,i).next((r=>{r||t.removeEntry(i,U.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return b.or([()=>b.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Ir{constructor(e,t){this.persistence=e,this.pi=new Sn((s=>kT(s.path)),((s,i)=>s.isEqual(i))),this.garbageCollector=$I(this,t)}static mi(e,t){return new Ir(e,t)}Ei(){}di(e){return b.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((i=>s+i))))}wr(e){let t=0;return this.pr(e,(s=>{t++})).next((()=>t))}pr(e,t){return b.forEach(this.pi,((s,i)=>this.br(e,s,i).next((r=>r?b.resolve():t(i)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const i=this.persistence.getRemoteDocumentCache(),r=i.newChangeBuffer();return i.ii(e,(a=>this.br(e,a,t).next((c=>{c||(s++,r.removeEntry(a,U.min()))})))).next((()=>r.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),b.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),b.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),b.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),b.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Xi(e.data.value)),t}br(e,t,s){return b.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.pi.get(t);return b.resolve(i!==void 0&&i>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,t,s,i){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=i}static As(e,t){let s=H(),i=H();for(const r of t.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new mc(e,t.fromCache,s,i)}}/**
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
 */class nv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class sv{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return zg()?8:PT(Me())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,i){const r={result:null};return this.ys(e,t).next((a=>{r.result=a})).next((()=>{if(!r.result)return this.ws(e,t,i,s).next((a=>{r.result=a}))})).next((()=>{if(r.result)return;const a=new nv;return this.Ss(e,t,a).next((c=>{if(r.result=c,this.Vs)return this.bs(e,t,a,c.size)}))})).next((()=>r.result))}bs(e,t,s,i){return s.documentReadCount<this.fs?(Vn()<=$.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",Mn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),b.resolve()):(Vn()<=$.DEBUG&&M("QueryEngine","Query:",Mn(t),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.gs*i?(Vn()<=$.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",Mn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ct(t))):b.resolve())}ys(e,t){if(Xu(t))return b.resolve(null);let s=ct(t);return this.indexManager.getIndexType(e,s).next((i=>i===0?null:(t.limit!==null&&i===1&&(t=ga(t,null,"F"),s=ct(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((r=>{const a=H(...r);return this.ps.getDocuments(e,a).next((c=>this.indexManager.getMinOffset(e,s).next((l=>{const h=this.Ds(t,c);return this.Cs(t,h,a,l.readTime)?this.ys(e,ga(t,null,"F")):this.vs(e,h,t,l)}))))})))))}ws(e,t,s,i){return Xu(t)||i.isEqual(U.min())?b.resolve(null):this.ps.getDocuments(e,s).next((r=>{const a=this.Ds(t,r);return this.Cs(t,a,s,i)?b.resolve(null):(Vn()<=$.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Mn(t)),this.vs(e,a,t,AT(i,ti)).next((c=>c)))}))}Ds(e,t){let s=new _e(Vf(e));return t.forEach(((i,r)=>{zr(e,r)&&(s=s.add(r))})),s}Cs(e,t,s,i){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Ss(e,t,s){return Vn()<=$.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",Mn(t)),this.ps.getDocumentsMatchingQuery(e,t,Qt.min(),s)}vs(e,t,s,i){return this.ps.getDocumentsMatchingQuery(e,s,i).next((r=>(t.forEach((a=>{r=r.insert(a.key,a)})),r)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc="LocalStore",iv=3e8;class rv{constructor(e,t,s,i){this.persistence=e,this.Fs=t,this.serializer=i,this.Ms=new me(z),this.xs=new Sn((r=>ac(r)),cc),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new GI(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function ov(n,e,t,s){return new rv(n,e,t,s)}async function ip(n,e){const t=B(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let i;return t.mutationQueue.getAllMutationBatches(s).next((r=>(i=r,t.Bs(e),t.mutationQueue.getAllMutationBatches(s)))).next((r=>{const a=[],c=[];let l=H();for(const h of i){a.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of r){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(s,l).next((h=>({Ls:h,removedBatchIds:a,addedBatchIds:c})))}))}))}function av(n,e){const t=B(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const i=e.batch.keys(),r=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(c,l,h,f){const p=h.batch,g=p.keys();let C=b.resolve();return g.forEach((P=>{C=C.next((()=>f.getEntry(l,P))).next((D=>{const N=h.docVersions.get(P);Z(N!==null,48541),D.version.compareTo(N)<0&&(p.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),f.addEntry(D)))}))})),C.next((()=>c.mutationQueue.removeMutationBatch(l,p)))})(t,s,e,r).next((()=>r.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(c){let l=H();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l})(e)))).next((()=>t.localDocuments.getDocuments(s,i)))}))}function rp(n){const e=B(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function cv(n,e){const t=B(n),s=e.snapshotVersion;let i=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(r=>{const a=t.Ns.newChangeBuffer({trackRemovals:!0});i=t.Ms;const c=[];e.targetChanges.forEach(((f,p)=>{const g=i.get(p);if(!g)return;c.push(t.Pi.removeMatchingKeys(r,f.removedDocuments,p).next((()=>t.Pi.addMatchingKeys(r,f.addedDocuments,p))));let C=g.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(p)!==null?C=C.withResumeToken(Re.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):f.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(f.resumeToken,s)),i=i.insert(p,C),(function(D,N,j){return D.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=iv?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0})(g,C,f)&&c.push(t.Pi.updateTargetData(r,C))}));let l=Ct(),h=H();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(r,f))})),c.push(lv(r,a,e.documentUpdates).next((f=>{l=f.ks,h=f.qs}))),!s.isEqual(U.min())){const f=t.Pi.getLastRemoteSnapshotVersion(r).next((p=>t.Pi.setTargetsMetadata(r,r.currentSequenceNumber,s)));c.push(f)}return b.waitFor(c).next((()=>a.apply(r))).next((()=>t.localDocuments.getLocalViewOfDocuments(r,l,h))).next((()=>l))})).then((r=>(t.Ms=i,r)))}function lv(n,e,t){let s=H(),i=H();return t.forEach((r=>s=s.add(r))),e.getEntries(n,s).next((r=>{let a=Ct();return t.forEach(((c,l)=>{const h=r.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(c)),l.isNoDocument()&&l.version.isEqual(U.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):M(gc,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)})),{ks:a,qs:i}}))}function uv(n,e){const t=B(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=ic),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function hv(n,e){const t=B(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let i;return t.Pi.getTargetData(s,e).next((r=>r?(i=r,b.resolve(i)):t.Pi.allocateTargetId(s).next((a=>(i=new Bt(e,a,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,i).next((()=>i)))))))})).then((s=>{const i=t.Ms.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s}))}async function Ia(n,e,t){const s=B(n),i=s.Ms.get(e),r=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",r,(a=>s.persistence.referenceDelegate.removeTarget(a,i)))}catch(a){if(!hs(a))throw a;M(gc,`Failed to update sequence numbers for target ${e}: ${a}`)}s.Ms=s.Ms.remove(e),s.xs.delete(i.target)}function uh(n,e,t){const s=B(n);let i=U.min(),r=H();return s.persistence.runTransaction("Execute query","readwrite",(a=>(function(l,h,f){const p=B(l),g=p.xs.get(f);return g!==void 0?b.resolve(p.Ms.get(g)):p.Pi.getTargetData(h,f)})(s,a,ct(e)).next((c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(a,c.targetId).next((l=>{r=l}))})).next((()=>s.Fs.getDocumentsMatchingQuery(a,e,t?i:U.min(),t?r:H()))).next((c=>(dv(s,YT(e),c),{documents:c,Qs:r})))))}function dv(n,e,t){let s=n.Os.get(e)||U.min();t.forEach(((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)})),n.Os.set(e,s)}class hh{constructor(){this.activeTargetIds=nI()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fv{constructor(){this.Mo=new hh,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new hh,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class pv{Oo(e){}shutdown(){}}/**
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
 */const dh="ConnectivityMonitor";class fh{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){M(dh,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){M(dh,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Wi=null;function va(){return Wi===null?Wi=(function(){return 268435456+Math.round(2147483648*Math.random())})():Wi++,"0x"+Wi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo="RestConnection",mv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class gv{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${i}`,this.Wo=this.databaseId.database===pr?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Go(e,t,s,i,r){const a=va(),c=this.zo(e,t.toUriEncodedString());M(Wo,`Sending RPC '${e}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,i,r);const{host:h}=new URL(c),f=nn(h);return this.Jo(e,c,l,s,f).then((p=>(M(Wo,`Received RPC '${e}' ${a}: `,p),p)),(p=>{throw Yn(Wo,`RPC '${e}' ${a} failed with error: `,p,"url: ",c,"request:",s),p}))}Ho(e,t,s,i,r,a){return this.Go(e,t,s,i,r)}jo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ls})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((i,r)=>e[r]=i)),s&&s.headers.forEach(((i,r)=>e[r]=i))}zo(e,t){const s=mv[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe="WebChannelConnection";class yv extends gv{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,i,r){const a=va();return new Promise(((c,l)=>{const h=new af;h.setWithCredentials(!0),h.listenOnce(cf.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case Yi.NO_ERROR:const p=h.getResponseJson();M(Pe,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),c(p);break;case Yi.TIMEOUT:M(Pe,`RPC '${e}' ${a} timed out`),l(new V(R.DEADLINE_EXCEEDED,"Request time out"));break;case Yi.HTTP_ERROR:const g=h.getStatus();if(M(Pe,`RPC '${e}' ${a} failed with status:`,g,"response text:",h.getResponseText()),g>0){let C=h.getResponseJson();Array.isArray(C)&&(C=C[0]);const P=C?.error;if(P&&P.status&&P.message){const D=(function(j){const W=j.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(W)>=0?W:R.UNKNOWN})(P.status);l(new V(D,P.message))}else l(new V(R.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new V(R.UNAVAILABLE,"Connection failed."));break;default:x(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{M(Pe,`RPC '${e}' ${a} completed.`)}}));const f=JSON.stringify(i);M(Pe,`RPC '${e}' ${a} sending request:`,i),h.send(t,"POST",f,s,15)}))}T_(e,t,s){const i=va(),r=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=hf(),c=uf(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,t,s),l.encodeInitMessageHeaders=!0;const f=r.join("");M(Pe,`Creating RPC '${e}' stream ${i}: ${f}`,l);const p=a.createWebChannel(f,l);this.I_(p);let g=!1,C=!1;const P=new _v({Yo:N=>{C?M(Pe,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(g||(M(Pe,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),M(Pe,`RPC '${e}' stream ${i} sending:`,N),p.send(N))},Zo:()=>p.close()}),D=(N,j,W)=>{N.listen(j,(K=>{try{W(K)}catch(Ae){setTimeout((()=>{throw Ae}),0)}}))};return D(p,Fs.EventType.OPEN,(()=>{C||(M(Pe,`RPC '${e}' stream ${i} transport opened.`),P.o_())})),D(p,Fs.EventType.CLOSE,(()=>{C||(C=!0,M(Pe,`RPC '${e}' stream ${i} transport closed`),P.a_(),this.E_(p))})),D(p,Fs.EventType.ERROR,(N=>{C||(C=!0,Yn(Pe,`RPC '${e}' stream ${i} transport errored. Name:`,N.name,"Message:",N.message),P.a_(new V(R.UNAVAILABLE,"The operation could not be completed")))})),D(p,Fs.EventType.MESSAGE,(N=>{if(!C){const j=N.data[0];Z(!!j,16349);const W=j,K=W?.error||W[0]?.error;if(K){M(Pe,`RPC '${e}' stream ${i} received error:`,K);const Ae=K.status;let Fe=(function(_){const E=he[_];if(E!==void 0)return Hf(E)})(Ae),ye=K.message;Fe===void 0&&(Fe=R.INTERNAL,ye="Unknown error status: "+Ae+" with message "+K.message),C=!0,P.a_(new V(Fe,ye)),p.close()}else M(Pe,`RPC '${e}' stream ${i} received:`,j),P.u_(j)}})),D(c,lf.STAT_EVENT,(N=>{N.stat===ca.PROXY?M(Pe,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===ca.NOPROXY&&M(Pe,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{P.__()}),0),P}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function $o(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(n){return new vI(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e,t,s=1e3,i=1.5,r=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=i,this.R_=r,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-s);i>0&&M("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph="PersistentStream";class ap{constructor(e,t,s,i,r,a,c,l){this.Mi=e,this.S_=s,this.b_=i,this.connection=r,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new op(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===R.RESOURCE_EXHAUSTED?(At(t.toString()),At("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,i])=>{this.D_===t&&this.G_(s,i)}),(s=>{e((()=>{const i=new V(R.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(i)}))}))}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((i=>{s((()=>this.z_(i)))})),this.stream.onMessage((i=>{s((()=>++this.F_==1?this.J_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return M(ph,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(M(ph,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Ev extends ap{constructor(e,t,s,i,r,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,i,a),this.serializer=r}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=CI(this.serializer,e),s=(function(r){if(!("targetChange"in r))return U.min();const a=r.targetChange;return a.targetIds&&a.targetIds.length?U.min():a.readTime?ut(a.readTime):U.min()})(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=Ta(this.serializer),t.addTarget=(function(r,a){let c;const l=a.target;if(c=pa(l)?{documents:bI(r,l)}:{query:PI(r,l).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Qf(r,a.resumeToken);const h=_a(r,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(U.min())>0){c.readTime=Tr(r,a.snapshotVersion.toTimestamp());const h=_a(r,a.expectedCount);h!==null&&(c.expectedCount=h)}return c})(this.serializer,e);const s=kI(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=Ta(this.serializer),t.removeTarget=e,this.q_(t)}}class Tv extends ap{constructor(e,t,s,i,r,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,i,a),this.serializer=r}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Z(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Z(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Z(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=RI(e.writeResults,e.commitTime),s=ut(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=Ta(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>SI(this.serializer,s)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{}class vv extends Iv{constructor(e,t,s,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new V(R.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,a])=>this.connection.Go(e,ya(t,s),i,r,a))).catch((r=>{throw r.name==="FirebaseError"?(r.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new V(R.UNKNOWN,r.toString())}))}Ho(e,t,s,i,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Ho(e,ya(t,s),i,a,c,r))).catch((a=>{throw a.name==="FirebaseError"?(a.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new V(R.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class wv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(At(t),this.aa=!1):M("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In="RemoteStore";class Av{constructor(e,t,s,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=r,this.Aa.Oo((a=>{s.enqueueAndForget((async()=>{Rn(this)&&(M(In,"Restarting streams for network reachability change."),await(async function(l){const h=B(l);h.Ea.add(4),await gi(h),h.Ra.set("Unknown"),h.Ea.delete(4),await Yr(h)})(this))}))})),this.Ra=new wv(s,i)}}async function Yr(n){if(Rn(n))for(const e of n.da)await e(!0)}async function gi(n){for(const e of n.da)await e(!1)}function cp(n,e){const t=B(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Tc(t)?Ec(t):ds(t).O_()&&yc(t,e))}function _c(n,e){const t=B(n),s=ds(t);t.Ia.delete(e),s.O_()&&lp(t,e),t.Ia.size===0&&(s.O_()?s.L_():Rn(t)&&t.Ra.set("Unknown"))}function yc(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(U.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ds(n).Y_(e)}function lp(n,e){n.Va.Ue(e),ds(n).Z_(e)}function Ec(n){n.Va=new yI({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),ds(n).start(),n.Ra.ua()}function Tc(n){return Rn(n)&&!ds(n).x_()&&n.Ia.size>0}function Rn(n){return B(n).Ea.size===0}function up(n){n.Va=void 0}async function Cv(n){n.Ra.set("Online")}async function Sv(n){n.Ia.forEach(((e,t)=>{yc(n,e)}))}async function Rv(n,e){up(n),Tc(n)?(n.Ra.ha(e),Ec(n)):n.Ra.set("Unknown")}async function bv(n,e,t){if(n.Ra.set("Online"),e instanceof Kf&&e.state===2&&e.cause)try{await(async function(i,r){const a=r.cause;for(const c of r.targetIds)i.Ia.has(c)&&(await i.remoteSyncer.rejectListen(c,a),i.Ia.delete(c),i.Va.removeTarget(c))})(n,e)}catch(s){M(In,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await vr(n,s)}else if(e instanceof er?n.Va.Ze(e):e instanceof Gf?n.Va.st(e):n.Va.tt(e),!t.isEqual(U.min()))try{const s=await rp(n.localStore);t.compareTo(s)>=0&&await(function(r,a){const c=r.Va.Tt(a);return c.targetChanges.forEach(((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=r.Ia.get(h);f&&r.Ia.set(h,f.withResumeToken(l.resumeToken,a))}})),c.targetMismatches.forEach(((l,h)=>{const f=r.Ia.get(l);if(!f)return;r.Ia.set(l,f.withResumeToken(Re.EMPTY_BYTE_STRING,f.snapshotVersion)),lp(r,l);const p=new Bt(f.target,l,h,f.sequenceNumber);yc(r,p)})),r.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(s){M(In,"Failed to raise snapshot:",s),await vr(n,s)}}async function vr(n,e,t){if(!hs(e))throw e;n.Ea.add(1),await gi(n),n.Ra.set("Offline"),t||(t=()=>rp(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{M(In,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Yr(n)}))}function hp(n,e){return e().catch((t=>vr(n,t,e)))}async function Xr(n){const e=B(n),t=Zt(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:ic;for(;Pv(e);)try{const i=await uv(e.localStore,s);if(i===null){e.Ta.length===0&&t.L_();break}s=i.batchId,Nv(e,i)}catch(i){await vr(e,i)}dp(e)&&fp(e)}function Pv(n){return Rn(n)&&n.Ta.length<10}function Nv(n,e){n.Ta.push(e);const t=Zt(n);t.O_()&&t.X_&&t.ea(e.mutations)}function dp(n){return Rn(n)&&!Zt(n).x_()&&n.Ta.length>0}function fp(n){Zt(n).start()}async function kv(n){Zt(n).ra()}async function Dv(n){const e=Zt(n);for(const t of n.Ta)e.ea(t.mutations)}async function Ov(n,e,t){const s=n.Ta.shift(),i=uc.from(s,e,t);await hp(n,(()=>n.remoteSyncer.applySuccessfulWrite(i))),await Xr(n)}async function Vv(n,e){e&&Zt(n).X_&&await(async function(s,i){if((function(a){return mI(a)&&a!==R.ABORTED})(i.code)){const r=s.Ta.shift();Zt(s).B_(),await hp(s,(()=>s.remoteSyncer.rejectFailedWrite(r.batchId,i))),await Xr(s)}})(n,e),dp(n)&&fp(n)}async function mh(n,e){const t=B(n);t.asyncQueue.verifyOperationInProgress(),M(In,"RemoteStore received new credentials");const s=Rn(t);t.Ea.add(3),await gi(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Yr(t)}async function Mv(n,e){const t=B(n);e?(t.Ea.delete(2),await Yr(t)):e||(t.Ea.add(2),await gi(t),t.Ra.set("Unknown"))}function ds(n){return n.ma||(n.ma=(function(t,s,i){const r=B(t);return r.sa(),new Ev(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)})(n.datastore,n.asyncQueue,{Xo:Cv.bind(null,n),t_:Sv.bind(null,n),r_:Rv.bind(null,n),H_:bv.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),Tc(n)?Ec(n):n.Ra.set("Unknown")):(await n.ma.stop(),up(n))}))),n.ma}function Zt(n){return n.fa||(n.fa=(function(t,s,i){const r=B(t);return r.sa(),new Tv(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:kv.bind(null,n),r_:Vv.bind(null,n),ta:Dv.bind(null,n),na:Ov.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await Xr(n)):(await n.fa.stop(),n.Ta.length>0&&(M(In,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e,t,s,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new $t,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,i,r){const a=Date.now()+s,c=new Ic(e,t,a,i,r);return c.start(s),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vc(n,e){if(At("AsyncQueue",`${e}: ${n}`),hs(n))return new V(R.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{static emptySet(e){return new $n(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||L.comparator(t.key,s.key):(t,s)=>L.comparator(t.key,s.key),this.keyedMap=Us(),this.sortedSet=new me(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof $n)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new $n;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(){this.ga=new me(L.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):x(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class ns{constructor(e,t,s,i,r,a,c,l,h){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,s,i,r){const a=[];return t.forEach((c=>{a.push({type:0,doc:c})})),new ns(e,t,$n.emptySet(t),a,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$r(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==s[i].type||!t[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class xv{constructor(){this.queries=_h(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const i=B(t),r=i.queries;i.queries=_h(),r.forEach(((a,c)=>{for(const l of c.Sa)l.onError(s)}))})(this,new V(R.ABORTED,"Firestore shutting down"))}}function _h(){return new Sn((n=>Of(n)),$r)}async function pp(n,e){const t=B(n);let s=3;const i=e.query;let r=t.queries.get(i);r?!r.ba()&&e.Da()&&(s=2):(r=new Lv,s=e.Da()?0:1);try{switch(s){case 0:r.wa=await t.onListen(i,!0);break;case 1:r.wa=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const c=vc(a,`Initialization of query '${Mn(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,r),r.Sa.push(e),e.va(t.onlineState),r.wa&&e.Fa(r.wa)&&wc(t)}async function mp(n,e){const t=B(n),s=e.query;let i=3;const r=t.queries.get(s);if(r){const a=r.Sa.indexOf(e);a>=0&&(r.Sa.splice(a,1),r.Sa.length===0?i=e.Da()?0:1:!r.ba()&&e.Da()&&(i=2))}switch(i){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function Fv(n,e){const t=B(n);let s=!1;for(const i of e){const r=i.query,a=t.queries.get(r);if(a){for(const c of a.Sa)c.Fa(i)&&(s=!0);a.wa=i}}s&&wc(t)}function Uv(n,e,t){const s=B(n),i=s.queries.get(e);if(i)for(const r of i.Sa)r.onError(t);s.queries.delete(e)}function wc(n){n.Ca.forEach((e=>{e.next()}))}var wa,yh;(yh=wa||(wa={})).Ma="default",yh.Cache="cache";class gp{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new ns(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=ns.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==wa.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e){this.key=e}}class yp{constructor(e){this.key=e}}class Bv{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=H(),this.mutatedKeys=H(),this.eu=Vf(e),this.tu=new $n(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new gh,i=t?t.tu:this.tu;let r=t?t.mutatedKeys:this.mutatedKeys,a=i,c=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((f,p)=>{const g=i.get(f),C=zr(this.query,p)?p:null,P=!!g&&this.mutatedKeys.has(g.key),D=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let N=!1;g&&C?g.data.isEqual(C.data)?P!==D&&(s.track({type:3,doc:C}),N=!0):this.su(g,C)||(s.track({type:2,doc:C}),N=!0,(l&&this.eu(C,l)>0||h&&this.eu(C,h)<0)&&(c=!0)):!g&&C?(s.track({type:0,doc:C}),N=!0):g&&!C&&(s.track({type:1,doc:g}),N=!0,(l||h)&&(c=!0)),N&&(C?(a=a.add(C),r=D?r.add(f):r.delete(f)):(a=a.delete(f),r=r.delete(f)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),r=r.delete(f.key),s.track({type:1,doc:f})}return{tu:a,iu:s,Cs:c,mutatedKeys:r}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,i){const r=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort(((f,p)=>(function(C,P){const D=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return x(20277,{Rt:N})}};return D(C)-D(P)})(f.type,p.type)||this.eu(f.doc,p.doc))),this.ou(s),i=i??!1;const c=t&&!i?this._u():[],l=this.Xa.size===0&&this.current&&!i?1:0,h=l!==this.Za;return this.Za=l,a.length!==0||h?{snapshot:new ns(this.query,e.tu,r,a,e.mutatedKeys,l===0,h,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new gh,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=H(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const t=[];return e.forEach((s=>{this.Xa.has(s)||t.push(new yp(s))})),this.Xa.forEach((s=>{e.has(s)||t.push(new _p(s))})),t}cu(e){this.Ya=e.Qs,this.Xa=H();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return ns.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Ac="SyncEngine";class qv{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class jv{constructor(e){this.key=e,this.hu=!1}}class Wv{constructor(e,t,s,i,r,a){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Sn((c=>Of(c)),$r),this.Iu=new Map,this.Eu=new Set,this.du=new me(L.comparator),this.Au=new Map,this.Ru=new fc,this.Vu={},this.mu=new Map,this.fu=ts.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function $v(n,e,t=!0){const s=Ap(n);let i;const r=s.Tu.get(e);return r?(s.sharedClientState.addLocalQueryTarget(r.targetId),i=r.view.lu()):i=await Ep(s,e,t,!0),i}async function zv(n,e){const t=Ap(n);await Ep(t,e,!0,!1)}async function Ep(n,e,t,s){const i=await hv(n.localStore,ct(e)),r=i.targetId,a=n.sharedClientState.addLocalQueryTarget(r,t);let c;return s&&(c=await Hv(n,e,r,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&cp(n.remoteStore,i),c}async function Hv(n,e,t,s,i){n.pu=(p,g,C)=>(async function(D,N,j,W){let K=N.view.ru(j);K.Cs&&(K=await uh(D.localStore,N.query,!1).then((({documents:I})=>N.view.ru(I,K))));const Ae=W&&W.targetChanges.get(N.targetId),Fe=W&&W.targetMismatches.get(N.targetId)!=null,ye=N.view.applyChanges(K,D.isPrimaryClient,Ae,Fe);return Th(D,N.targetId,ye.au),ye.snapshot})(n,p,g,C);const r=await uh(n.localStore,e,!0),a=new Bv(e,r.Qs),c=a.ru(r.documents),l=mi.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",i),h=a.applyChanges(c,n.isPrimaryClient,l);Th(n,t,h.au);const f=new qv(e,t,a);return n.Tu.set(e,f),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),h.snapshot}async function Gv(n,e,t){const s=B(n),i=s.Tu.get(e),r=s.Iu.get(i.targetId);if(r.length>1)return s.Iu.set(i.targetId,r.filter((a=>!$r(a,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(i.targetId),s.sharedClientState.isActiveQueryTarget(i.targetId)||await Ia(s.localStore,i.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(i.targetId),t&&_c(s.remoteStore,i.targetId),Aa(s,i.targetId)})).catch(us)):(Aa(s,i.targetId),await Ia(s.localStore,i.targetId,!0))}async function Kv(n,e){const t=B(n),s=t.Tu.get(e),i=t.Iu.get(s.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),_c(t.remoteStore,s.targetId))}async function Qv(n,e,t){const s=nw(n);try{const i=await(function(a,c){const l=B(a),h=oe.now(),f=c.reduce(((C,P)=>C.add(P.key)),H());let p,g;return l.persistence.runTransaction("Locally write mutations","readwrite",(C=>{let P=Ct(),D=H();return l.Ns.getEntries(C,f).next((N=>{P=N,P.forEach(((j,W)=>{W.isValidDocument()||(D=D.add(j))}))})).next((()=>l.localDocuments.getOverlayedDocuments(C,P))).next((N=>{p=N;const j=[];for(const W of c){const K=uI(W,p.get(W.key).overlayedDocument);K!=null&&j.push(new rn(W.key,K,Cf(K.value.mapValue),lt.exists(!0)))}return l.mutationQueue.addMutationBatch(C,h,j,c)})).next((N=>{g=N;const j=N.applyToLocalDocumentSet(p,D);return l.documentOverlayCache.saveOverlays(C,N.batchId,j)}))})).then((()=>({batchId:g.batchId,changes:Lf(p)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),(function(a,c,l){let h=a.Vu[a.currentUser.toKey()];h||(h=new me(z)),h=h.insert(c,l),a.Vu[a.currentUser.toKey()]=h})(s,i.batchId,t),await _i(s,i.changes),await Xr(s.remoteStore)}catch(i){const r=vc(i,"Failed to persist write");t.reject(r)}}async function Tp(n,e){const t=B(n);try{const s=await cv(t.localStore,e);e.targetChanges.forEach(((i,r)=>{const a=t.Au.get(r);a&&(Z(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a.hu=!0:i.modifiedDocuments.size>0?Z(a.hu,14607):i.removedDocuments.size>0&&(Z(a.hu,42227),a.hu=!1))})),await _i(t,s,e)}catch(s){await us(s)}}function Eh(n,e,t){const s=B(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const i=[];s.Tu.forEach(((r,a)=>{const c=a.view.va(e);c.snapshot&&i.push(c.snapshot)})),(function(a,c){const l=B(a);l.onlineState=c;let h=!1;l.queries.forEach(((f,p)=>{for(const g of p.Sa)g.va(c)&&(h=!0)})),h&&wc(l)})(s.eventManager,e),i.length&&s.Pu.H_(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Yv(n,e,t){const s=B(n);s.sharedClientState.updateQueryState(e,"rejected",t);const i=s.Au.get(e),r=i&&i.key;if(r){let a=new me(L.comparator);a=a.insert(r,ke.newNoDocument(r,U.min()));const c=H().add(r),l=new Kr(U.min(),new Map,new me(z),a,c);await Tp(s,l),s.du=s.du.remove(r),s.Au.delete(e),Cc(s)}else await Ia(s.localStore,e,!1).then((()=>Aa(s,e,t))).catch(us)}async function Xv(n,e){const t=B(n),s=e.batch.batchId;try{const i=await av(t.localStore,e);vp(t,s,null),Ip(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await _i(t,i)}catch(i){await us(i)}}async function Jv(n,e,t){const s=B(n);try{const i=await(function(a,c){const l=B(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next((p=>(Z(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(h,p)))).next((()=>l.mutationQueue.performConsistencyCheck(h))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f))).next((()=>l.localDocuments.getDocuments(h,f)))}))})(s.localStore,e);vp(s,e,t),Ip(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await _i(s,i)}catch(i){await us(i)}}function Ip(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function vp(n,e,t){const s=B(n);let i=s.Vu[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(t?r.reject(t):r.resolve(),i=i.remove(e)),s.Vu[s.currentUser.toKey()]=i}}function Aa(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Iu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((s=>{n.Ru.containsKey(s)||wp(n,s)}))}function wp(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(_c(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),Cc(n))}function Th(n,e,t){for(const s of t)s instanceof _p?(n.Ru.addReference(s.key,e),Zv(n,s)):s instanceof yp?(M(Ac,"Document no longer in limbo: "+s.key),n.Ru.removeReference(s.key,e),n.Ru.containsKey(s.key)||wp(n,s.key)):x(19791,{wu:s})}function Zv(n,e){const t=e.key,s=t.path.canonicalString();n.du.get(t)||n.Eu.has(s)||(M(Ac,"New document in limbo: "+t),n.Eu.add(s),Cc(n))}function Cc(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new L(ne.fromString(e)),s=n.fu.next();n.Au.set(s,new jv(t)),n.du=n.du.insert(t,s),cp(n.remoteStore,new Bt(ct(Wr(t.path)),s,"TargetPurposeLimboResolution",Br.ce))}}async function _i(n,e,t){const s=B(n),i=[],r=[],a=[];s.Tu.isEmpty()||(s.Tu.forEach(((c,l)=>{a.push(s.pu(l,e,t).then((h=>{if((h||t)&&s.isPrimaryClient){const f=h?!h.fromCache:t?.targetChanges.get(l.targetId)?.current;s.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(h){i.push(h);const f=mc.As(l.targetId,h);r.push(f)}})))})),await Promise.all(a),s.Pu.H_(i),await(async function(l,h){const f=B(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>b.forEach(h,(g=>b.forEach(g.Es,(C=>f.persistence.referenceDelegate.addReference(p,g.targetId,C))).next((()=>b.forEach(g.ds,(C=>f.persistence.referenceDelegate.removeReference(p,g.targetId,C)))))))))}catch(p){if(!hs(p))throw p;M(gc,"Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const C=f.Ms.get(g),P=C.snapshotVersion,D=C.withLastLimboFreeSnapshotVersion(P);f.Ms=f.Ms.insert(g,D)}}})(s.localStore,r))}async function ew(n,e){const t=B(n);if(!t.currentUser.isEqual(e)){M(Ac,"User change. New user:",e.toKey());const s=await ip(t.localStore,e);t.currentUser=e,(function(r,a){r.mu.forEach((c=>{c.forEach((l=>{l.reject(new V(R.CANCELLED,a))}))})),r.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await _i(t,s.Ls)}}function tw(n,e){const t=B(n),s=t.Au.get(e);if(s&&s.hu)return H().add(s.key);{let i=H();const r=t.Iu.get(e);if(!r)return i;for(const a of r){const c=t.Tu.get(a);i=i.unionWith(c.view.nu)}return i}}function Ap(n){const e=B(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Tp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=tw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Yv.bind(null,e),e.Pu.H_=Fv.bind(null,e.eventManager),e.Pu.yu=Uv.bind(null,e.eventManager),e}function nw(n){const e=B(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Xv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Jv.bind(null,e),e}class wr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Qr(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return ov(this.persistence,new sv,e.initialUser,this.serializer)}Cu(e){return new sp(pc.mi,this.serializer)}Du(e){return new fv}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}wr.provider={build:()=>new wr};class sw extends wr{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Z(this.persistence.referenceDelegate instanceof Ir,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new jI(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Be.withCacheSize(this.cacheSizeBytes):Be.DEFAULT;return new sp((s=>Ir.mi(s,t)),this.serializer)}}class Ca{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Eh(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=ew.bind(null,this.syncEngine),await Mv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new xv})()}createDatastore(e){const t=Qr(e.databaseInfo.databaseId),s=(function(r){return new yv(r)})(e.databaseInfo);return(function(r,a,c,l){return new vv(r,a,c,l)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,i,r,a,c){return new Av(s,i,r,a,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>Eh(this.syncEngine,t,0)),(function(){return fh.v()?new fh:new pv})())}createSyncEngine(e,t){return(function(i,r,a,c,l,h,f){const p=new Wv(i,r,a,c,l,h);return f&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const s=B(t);M(In,"RemoteStore shutting down."),s.Ea.add(5),await gi(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Ca.provider={build:()=>new Ca};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Cp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):At("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en="FirestoreClient";class iw{constructor(e,t,s,i,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=i,this.user=Ne.UNAUTHENTICATED,this.clientId=sc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(s,(async a=>{M(en,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(s,(a=>(M(en,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $t;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=vc(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function zo(n,e){n.asyncQueue.verifyOperationInProgress(),M(en,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async i=>{s.isEqual(i)||(await ip(e.localStore,i),s=i)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Ih(n,e){n.asyncQueue.verifyOperationInProgress();const t=await rw(n);M(en,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>mh(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,i)=>mh(e.remoteStore,i))),n._onlineComponents=e}async function rw(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M(en,"Using user provided OfflineComponentProvider");try{await zo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(i){return i.name==="FirebaseError"?i.code===R.FAILED_PRECONDITION||i.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(t))throw t;Yn("Error using user provided cache. Falling back to memory cache: "+t),await zo(n,new wr)}}else M(en,"Using default OfflineComponentProvider"),await zo(n,new sw(void 0));return n._offlineComponents}async function Sp(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M(en,"Using user provided OnlineComponentProvider"),await Ih(n,n._uninitializedComponentsProvider._online)):(M(en,"Using default OnlineComponentProvider"),await Ih(n,new Ca))),n._onlineComponents}function ow(n){return Sp(n).then((e=>e.syncEngine))}async function Sa(n){const e=await Sp(n),t=e.eventManager;return t.onListen=$v.bind(null,e.syncEngine),t.onUnlisten=Gv.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=zv.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Kv.bind(null,e.syncEngine),t}function aw(n,e,t={}){const s=new $t;return n.asyncQueue.enqueueAndForget((async()=>(function(r,a,c,l,h){const f=new Cp({next:g=>{f.Nu(),a.enqueueAndForget((()=>mp(r,p)));const C=g.docs.has(c);!C&&g.fromCache?h.reject(new V(R.UNAVAILABLE,"Failed to get document because the client is offline.")):C&&g.fromCache&&l&&l.source==="server"?h.reject(new V(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new gp(Wr(c.path),f,{includeMetadataChanges:!0,qa:!0});return pp(r,p)})(await Sa(n),n.asyncQueue,e,t,s))),s.promise}/**
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
 */function Rp(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp="firestore.googleapis.com",wh=!0;class Ah{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new V(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=bp,this.ssl=wh}else this.host=e.host,this.ssl=e.ssl??wh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=np;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<BI)throw new V(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}wT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Rp(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new V(R.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new V(R.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new V(R.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,i){return s.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Jr{constructor(e,t,s,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ah({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new V(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ah(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new fT;switch(s.type){case"firstParty":return new _T(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new V(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=vh.get(t);s&&(M("ComponentProvider","Removing Datastore"),vh.delete(t),s.terminate())})(this),Promise.resolve()}}function cw(n,e,t,s={}){n=yt(n,Jr);const i=nn(e),r=n._getSettings(),a={...r,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;i&&(ja(`https://${c}`),Wa("Firestore",!0)),r.host!==bp&&r.host!==c&&Yn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...r,host:c,ssl:i,emulatorOptions:s};if(!Tt(l,a)&&(n._setSettings(l),s.mockUserToken)){let h,f;if(typeof s.mockUserToken=="string")h=s.mockUserToken,f=Ne.MOCK_USER;else{h=Td(s.mockUserToken,n._app?.options.projectId);const p=s.mockUserToken.sub||s.mockUserToken.user_id;if(!p)throw new V(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Ne(p)}n._authCredentials=new pT(new ff(h,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new fs(this.firestore,e,this._query)}}class ue{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ht(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ue(this.firestore,e,this._key)}toJSON(){return{type:ue._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(di(t,ue._jsonSchema))return new ue(e,s||null,new L(ne.fromString(t.referencePath)))}}ue._jsonSchemaVersion="firestore/documentReference/1.0",ue._jsonSchema={type:fe("string",ue._jsonSchemaVersion),referencePath:fe("string")};class Ht extends fs{constructor(e,t,s){super(e,t,Wr(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ue(this.firestore,null,new L(e))}withConverter(e){return new Ht(this.firestore,e,this._path)}}function ES(n,e,...t){if(n=pe(n),pf("collection","path",e),n instanceof Jr){const s=ne.fromString(e,...t);return xu(s),new Ht(n,null,s)}{if(!(n instanceof ue||n instanceof Ht))throw new V(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(ne.fromString(e,...t));return xu(s),new Ht(n.firestore,null,s)}}function lw(n,e,...t){if(n=pe(n),arguments.length===1&&(e=sc.newId()),pf("doc","path",e),n instanceof Jr){const s=ne.fromString(e,...t);return Lu(s),new ue(n,null,new L(s))}{if(!(n instanceof ue||n instanceof Ht))throw new V(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(ne.fromString(e,...t));return Lu(s),new ue(n.firestore,n instanceof Ht?n.converter:null,new L(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch="AsyncQueue";class Sh{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new op(this,"async_queue_retry"),this._c=()=>{const s=$o();s&&M(Ch,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=$o();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=$o();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new $t;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!hs(e))throw e;M(Ch,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,At("INTERNAL UNHANDLED ERROR: ",Rh(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=Ic.createAndSchedule(this,e,t,s,(r=>this.hc(r)));return this.tc.push(i),i}uc(){this.nc&&x(47125,{Pc:Rh(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Rh(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function bh(n){return(function(t,s){if(typeof t!="object"||t===null)return!1;const i=t;for(const r of s)if(r in i&&typeof i[r]=="function")return!0;return!1})(n,["next","error","complete"])}class ss extends Jr{constructor(e,t,s,i){super(e,t,s,i),this.type="firestore",this._queue=new Sh,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Sh(e),this._firestoreClient=void 0,await e}}}function uw(n,e){const t=typeof n=="object"?n:Ha(),s=typeof n=="string"?n:pr,i=Lr(t,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=_d("firestore");r&&cw(i,...r)}return i}function Sc(n){if(n._terminated)throw new V(R.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||hw(n),n._firestoreClient}function hw(n){const e=n._freezeSettings(),t=(function(i,r,a,c){return new VT(i,r,a,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,Rp(c.experimentalLongPollingOptions),c.useFetchStreams,c.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new iw(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(i){const r=i?._online.build();return{_offline:i?._offline.build(r),_online:r}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this._byteString=e}static fromBase64String(e){try{return new He(Re.fromBase64String(e))}catch(t){throw new V(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new He(Re.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:He._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(di(e,He._jsonSchema))return He.fromBase64String(e.bytes)}}He._jsonSchemaVersion="firestore/bytes/1.0",He._jsonSchema={type:fe("string",He._jsonSchemaVersion),bytes:fe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new V(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Se(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new V(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new V(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return z(this._lat,e._lat)||z(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ht._jsonSchemaVersion}}static fromJSON(e){if(di(e,ht._jsonSchema))return new ht(e.latitude,e.longitude)}}ht._jsonSchemaVersion="firestore/geoPoint/1.0",ht._jsonSchema={type:fe("string",ht._jsonSchemaVersion),latitude:fe("number"),longitude:fe("number")};/**
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
 */class dt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,i){if(s.length!==i.length)return!1;for(let r=0;r<s.length;++r)if(s[r]!==i[r])return!1;return!0})(this._values,e._values)}toJSON(){return{type:dt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(di(e,dt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new dt(e.vectorValues);throw new V(R.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}dt._jsonSchemaVersion="firestore/vectorValue/1.0",dt._jsonSchema={type:fe("string",dt._jsonSchemaVersion),vectorValues:fe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw=/^__.*__$/;class fw{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new rn(e,this.data,this.fieldMask,t,this.fieldTransforms):new pi(e,this.data,t,this.fieldTransforms)}}class Pp{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new rn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Np(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x(40011,{Ac:n})}}class to{constructor(e,t,s,i,r,a){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Rc(),this.fieldTransforms=r||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new to({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Ar(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Np(this.Ac)&&dw.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class pw{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Qr(e)}Cc(e,t,s,i=!1){return new to({Ac:e,methodName:t,Dc:s,path:Se.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Rc(n){const e=n._freezeSettings(),t=Qr(n._databaseId);return new pw(n._databaseId,!!e.ignoreUndefinedProperties,t)}function mw(n,e,t,s,i,r={}){const a=n.Cc(r.merge||r.mergeFields?2:0,e,t,i);Pc("Data must be an object, but it was:",a,s);const c=kp(s,a);let l,h;if(r.merge)l=new $e(a.fieldMask),h=a.fieldTransforms;else if(r.mergeFields){const f=[];for(const p of r.mergeFields){const g=Ra(e,p,t);if(!a.contains(g))throw new V(R.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Op(f,g)||f.push(g)}l=new $e(f),h=a.fieldTransforms.filter((p=>l.covers(p.field)))}else l=null,h=a.fieldTransforms;return new fw(new qe(c),l,h)}class no extends eo{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof no}}function gw(n,e,t){return new to({Ac:3,Dc:e.settings.Dc,methodName:n._methodName,fc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class bc extends eo{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=gw(this,e,!0),s=this.vc.map((r=>ps(r,t))),i=new es(s);return new oI(e.path,i)}isEqual(e){return e instanceof bc&&Tt(this.vc,e.vc)}}function _w(n,e,t,s){const i=n.Cc(1,e,t);Pc("Data must be an object, but it was:",i,s);const r=[],a=qe.empty();sn(s,((l,h)=>{const f=Nc(e,l,t);h=pe(h);const p=i.yc(f);if(h instanceof no)r.push(f);else{const g=ps(h,p);g!=null&&(r.push(f),a.set(f,g))}}));const c=new $e(r);return new Pp(a,c,i.fieldTransforms)}function yw(n,e,t,s,i,r){const a=n.Cc(1,e,t),c=[Ra(e,s,t)],l=[i];if(r.length%2!=0)throw new V(R.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<r.length;g+=2)c.push(Ra(e,r[g])),l.push(r[g+1]);const h=[],f=qe.empty();for(let g=c.length-1;g>=0;--g)if(!Op(h,c[g])){const C=c[g];let P=l[g];P=pe(P);const D=a.yc(C);if(P instanceof no)h.push(C);else{const N=ps(P,D);N!=null&&(h.push(C),f.set(C,N))}}const p=new $e(h);return new Pp(f,p,a.fieldTransforms)}function Ew(n,e,t,s=!1){return ps(t,n.Cc(s?4:3,e))}function ps(n,e){if(Dp(n=pe(n)))return Pc("Unsupported field value:",e,n),kp(n,e);if(n instanceof eo)return(function(s,i){if(!Np(i.Ac))throw i.Sc(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${s._methodName}() is not currently supported inside arrays`);const r=s._toFieldTransform(i);r&&i.fieldTransforms.push(r)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,i){const r=[];let a=0;for(const c of s){let l=ps(c,i.wc(a));l==null&&(l={nullValue:"NULL_VALUE"}),r.push(l),a++}return{arrayValue:{values:r}}})(n,e)}return(function(s,i){if((s=pe(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return sI(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const r=oe.fromDate(s);return{timestampValue:Tr(i.serializer,r)}}if(s instanceof oe){const r=new oe(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Tr(i.serializer,r)}}if(s instanceof ht)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof He)return{bytesValue:Qf(i.serializer,s._byteString)};if(s instanceof ue){const r=i.databaseId,a=s.firestore._databaseId;if(!a.isEqual(r))throw i.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:dc(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof dt)return(function(a,c){return{mapValue:{fields:{[wf]:{stringValue:Af},[mr]:{arrayValue:{values:a.toArray().map((h=>{if(typeof h!="number")throw c.Sc("VectorValues must only contain numeric values.");return lc(c.serializer,h)}))}}}}}})(s,i);throw i.Sc(`Unsupported field value: ${Ur(s)}`)})(n,e)}function kp(n,e){const t={};return _f(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):sn(n,((s,i)=>{const r=ps(i,e.mc(s));r!=null&&(t[s]=r)})),{mapValue:{fields:t}}}function Dp(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof oe||n instanceof ht||n instanceof He||n instanceof ue||n instanceof eo||n instanceof dt)}function Pc(n,e,t){if(!Dp(t)||!mf(t)){const s=Ur(t);throw s==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+s)}}function Ra(n,e,t){if((e=pe(e))instanceof Zr)return e._internalPath;if(typeof e=="string")return Nc(n,e);throw Ar("Field path arguments must be of type string or ",n,!1,void 0,t)}const Tw=new RegExp("[~\\*/\\[\\]]");function Nc(n,e,t){if(e.search(Tw)>=0)throw Ar(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Zr(...e.split("."))._internalPath}catch{throw Ar(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ar(n,e,t,s,i){const r=s&&!s.isEmpty(),a=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(r||a)&&(l+=" (found",r&&(l+=` in field ${s}`),a&&(l+=` in document ${i}`),l+=")"),new V(R.INVALID_ARGUMENT,c+n+l)}function Op(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e,t,s,i,r){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new ue(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Iw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(kc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Iw extends Vp{data(){return super.data()}}function kc(n,e){return typeof e=="string"?Nc(n,e):e instanceof Zr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vw(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new V(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Dc{}class ww extends Dc{}function TS(n,e,...t){let s=[];e instanceof Dc&&s.push(e),s=s.concat(t),(function(r){const a=r.filter((l=>l instanceof Oc)).length,c=r.filter((l=>l instanceof so)).length;if(a>1||a>0&&c>0)throw new V(R.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const i of s)n=i._apply(n);return n}class so extends ww{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new so(e,t,s)}_apply(e){const t=this._parse(e);return Mp(e._query,t),new fs(e.firestore,e.converter,ma(e._query,t))}_parse(e){const t=Rc(e.firestore);return(function(r,a,c,l,h,f,p){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new V(R.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Nh(p,f);const P=[];for(const D of p)P.push(Ph(l,r,D));g={arrayValue:{values:P}}}else g=Ph(l,r,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Nh(p,f),g=Ew(c,a,p,f==="in"||f==="not-in");return de.create(h,f,g)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function IS(n,e,t){const s=e,i=kc("where",n);return so._create(i,s,t)}class Oc extends Dc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Oc(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:et.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(i,r){let a=i;const c=r.getFlattenedFilters();for(const l of c)Mp(a,l),a=ma(a,l)})(e._query,t),new fs(e.firestore,e.converter,ma(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Ph(n,e,t){if(typeof(t=pe(t))=="string"){if(t==="")throw new V(R.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Df(e)&&t.indexOf("/")!==-1)throw new V(R.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(ne.fromString(t));if(!L.isDocumentKey(s))throw new V(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return zu(n,new L(s))}if(t instanceof ue)return zu(n,t._key);throw new V(R.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ur(t)}.`)}function Nh(n,e){if(!Array.isArray(n)||n.length===0)throw new V(R.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Mp(n,e){const t=(function(i,r){for(const a of i)for(const c of a.getFlattenedFilters())if(r.indexOf(c.op)>=0)return c.op;return null})(n.filters,(function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new V(R.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new V(R.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Aw{convertValue(e,t="none"){switch(Jt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Xt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw x(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return sn(e,((i,r)=>{s[i]=this.convertValue(r,t)})),s}convertVectorValue(e){const t=e.fields?.[mr].arrayValue?.values?.map((s=>le(s.doubleValue)));return new dt(t)}convertGeoPoint(e){return new ht(le(e.latitude),le(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=jr(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(ni(e));default:return null}}convertTimestamp(e){const t=Yt(e);return new oe(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=ne.fromString(e);Z(tp(s),9688,{name:e});const i=new si(s.get(1),s.get(3)),r=new L(s.popFirst(5));return i.isEqual(t)||At(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cw(n,e,t){let s;return s=n?n.toFirestore(e):e,s}class qs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _n extends Vp{constructor(e,t,s,i,r,a){super(e,t,s,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new tr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(kc("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new V(R.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=_n._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}_n._jsonSchemaVersion="firestore/documentSnapshot/1.0",_n._jsonSchema={type:fe("string",_n._jsonSchemaVersion),bundleSource:fe("string","DocumentSnapshot"),bundleName:fe("string"),bundle:fe("string")};class tr extends _n{data(e={}){return super.data(e)}}class zn{constructor(e,t,s,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new qs(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new tr(this._firestore,this._userDataWriter,s.key,s,new qs(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new V(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,r){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map((c=>{const l=new tr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new qs(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}}))}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((c=>r||c.type!==3)).map((c=>{const l=new tr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new qs(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:Sw(c.type),doc:l,oldIndex:h,newIndex:f}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new V(R.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=zn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=sc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],i=[];return this.docs.forEach((r=>{r._document!==null&&(t.push(r._document),s.push(this._userDataWriter.convertObjectMap(r._document.data.value.mapValue.fields,"previous")),i.push(r.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Sw(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return x(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vS(n){n=yt(n,ue);const e=yt(n.firestore,ss);return aw(Sc(e),n._key).then((t=>Fp(e,n,t)))}zn._jsonSchemaVersion="firestore/querySnapshot/1.0",zn._jsonSchema={type:fe("string",zn._jsonSchemaVersion),bundleSource:fe("string","QuerySnapshot"),bundleName:fe("string"),bundle:fe("string")};class Lp extends Aw{constructor(e){super(),this.firestore=e}convertBytes(e){return new He(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ue(this.firestore,null,t)}}function wS(n,e,t,...s){n=yt(n,ue);const i=yt(n.firestore,ss),r=Rc(i);let a;return a=typeof(e=pe(e))=="string"||e instanceof Zr?yw(r,"updateDoc",n._key,e,t,s):_w(r,"updateDoc",n._key,e),xp(i,[a.toMutation(n._key,lt.exists(!0))])}function AS(n,e){const t=yt(n.firestore,ss),s=lw(n),i=Cw(n.converter,e);return xp(t,[mw(Rc(n.firestore),"addDoc",s._key,i,n.converter!==null,{}).toMutation(s._key,lt.exists(!1))]).then((()=>s))}function CS(n,...e){n=pe(n);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||bh(e[s])||(t=e[s++]);const i={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(bh(e[s])){const l=e[s];e[s]=l.next?.bind(l),e[s+1]=l.error?.bind(l),e[s+2]=l.complete?.bind(l)}let r,a,c;if(n instanceof ue)a=yt(n.firestore,ss),c=Wr(n._key.path),r={next:l=>{e[s]&&e[s](Fp(a,n,l))},error:e[s+1],complete:e[s+2]};else{const l=yt(n,fs);a=yt(l.firestore,ss),c=l._query;const h=new Lp(a);r={next:f=>{e[s]&&e[s](new zn(a,h,l,f))},error:e[s+1],complete:e[s+2]},vw(n._query)}return(function(h,f,p,g){const C=new Cp(g),P=new gp(f,C,p);return h.asyncQueue.enqueueAndForget((async()=>pp(await Sa(h),P))),()=>{C.Nu(),h.asyncQueue.enqueueAndForget((async()=>mp(await Sa(h),P)))}})(Sc(a),c,i,r)}function xp(n,e){return(function(s,i){const r=new $t;return s.asyncQueue.enqueueAndForget((async()=>Qv(await ow(s),i,r))),r.promise})(Sc(n),e)}function Fp(n,e,t){const s=t.docs.get(e._key),i=new Lp(n);return new _n(n,i,e._key,s,new qs(t.hasPendingWrites,t.fromCache),e.converter)}function SS(...n){return new bc("arrayUnion",n)}(function(e,t=!0){(function(i){ls=i})(Cn),yn(new Kt("firestore",((s,{instanceIdentifier:i,options:r})=>{const a=s.getProvider("app").getImmediate(),c=new ss(new mT(s.getProvider("auth-internal")),new yT(a,s.getProvider("app-check-internal")),(function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new V(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new si(h.options.projectId,f)})(a,i),a);return r={useFetchStreams:t,...r},c._setSettings(r),c}),"PUBLIC").setMultipleInstances(!0)),rt(Du,Ou,e),rt(Du,Ou,"esm2020")})();var kh={};const Dh="@firebase/database",Oh="1.1.0";/**
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
 */let Up="";function Rw(n){Up=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ce(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Js(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return bt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new bw(e)}}catch{}return new Pw},mn=Bp("localStorage"),Nw=Bp("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn=new Mr("@firebase/database"),kw=(function(){let n=1;return function(){return n++}})(),qp=function(n){const e=i_(n),t=new Zg;t.update(e);const s=t.digest();return Ba.encodeByteArray(s)},yi=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=yi.apply(null,s):typeof s=="object"?e+=Ce(s):e+=s,e+=" "}return e};let Ks=null,Vh=!0;const Dw=function(n,e){O(!0,"Can't turn on custom loggers persistently."),Hn.logLevel=$.VERBOSE,Ks=Hn.log.bind(Hn)},De=function(...n){if(Vh===!0&&(Vh=!1,Ks===null&&Nw.get("logging_enabled")===!0&&Dw()),Ks){const e=yi.apply(null,n);Ks(e)}},Ei=function(n){return function(...e){De(n,...e)}},ba=function(...n){const e="FIREBASE INTERNAL ERROR: "+yi(...n);Hn.error(e)},St=function(...n){const e=`FIREBASE FATAL ERROR: ${yi(...n)}`;throw Hn.error(e),new Error(e)},ze=function(...n){const e="FIREBASE WARNING: "+yi(...n);Hn.warn(e)},Ow=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ze("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},jp=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Vw=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},is="[MIN_NAME]",vn="[MAX_NAME]",ms=function(n,e){if(n===e)return 0;if(n===is||e===vn)return-1;if(e===is||n===vn)return 1;{const t=Mh(n),s=Mh(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},Mw=function(n,e){return n===e?0:n<e?-1:1},Vs=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Ce(e))},Vc=function(n){if(typeof n!="object"||n===null)return Ce(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=Ce(e[s]),t+=":",t+=Vc(n[e[s]]);return t+="}",t},Wp=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function Ke(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const $p=function(n){O(!jp(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,a,c,l;n===0?(r=0,a=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(c=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=c+s,a=Math.round(n*Math.pow(2,t-c)-Math.pow(2,t))):(r=0,a=Math.round(n/Math.pow(2,1-s-t))));const h=[];for(l=t;l;l-=1)h.push(a%2?1:0),a=Math.floor(a/2);for(l=e;l;l-=1)h.push(r%2?1:0),r=Math.floor(r/2);h.push(i?1:0),h.reverse();const f=h.join("");let p="";for(l=0;l<64;l+=8){let g=parseInt(f.substr(l,8),2).toString(16);g.length===1&&(g="0"+g),p=p+g}return p.toLowerCase()},Lw=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},xw=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},Fw=new RegExp("^-?(0*)\\d{1,10}$"),Uw=-2147483648,Bw=2147483647,Mh=function(n){if(Fw.test(n)){const e=Number(n);if(e>=Uw&&e<=Bw)return e}return null},Ti=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ze("Exception was thrown by user callback.",t),e},Math.floor(0))}},qw=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Qs=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class jw{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Qe(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){ze(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(De("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ze(e)}}class nr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}nr.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc="5",zp="v",Hp="s",Gp="r",Kp="f",Qp=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Yp="ls",Xp="p",Pa="ac",Jp="websocket",Zp="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e,t,s,i,r=!1,a="",c=!1,l=!1,h=null){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=a,this.includeNamespaceInQueryParams=c,this.isUsingEmulator=l,this.emulatorOptions=h,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=mn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&mn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function $w(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function tm(n,e,t){O(typeof e=="string","typeof type must == string"),O(typeof t=="object","typeof params must == object");let s;if(e===Jp)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Zp)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);$w(n)&&(t.ns=n.namespace);const i=[];return Ke(t,(r,a)=>{i.push(r+"="+a)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(){this.counters_={}}incrementCounter(e,t=1){bt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Dg(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho={},Go={};function Lc(n){const e=n.toString();return Ho[e]||(Ho[e]=new zw),Ho[e]}function Hw(n,e){const t=n.toString();return Go[t]||(Go[t]=e()),Go[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Ti(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh="start",Kw="close",Qw="pLPCommand",Yw="pRTLPCB",nm="id",sm="pw",im="ser",Xw="cb",Jw="seg",Zw="ts",eA="d",tA="dframe",rm=1870,om=30,nA=rm-om,sA=25e3,iA=3e4;class Un{constructor(e,t,s,i,r,a,c){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=a,this.lastSessionId=c,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ei(e),this.stats_=Lc(t),this.urlFn=l=>(this.appCheckToken&&(l[Pa]=this.appCheckToken),tm(t,Zp,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Gw(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(iA)),Vw(()=>{if(this.isClosed_)return;this.scriptTagHolder=new xc((...r)=>{const[a,c,l,h,f]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,a===Lh)this.id=c,this.password=l;else if(a===Kw)c?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(c,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+a)},(...r)=>{const[a,c]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(a,c)},()=>{this.onClosed_()},this.urlFn);const s={};s[Lh]="t",s[im]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Xw]=this.scriptTagHolder.uniqueCallbackIdentifier),s[zp]=Mc,this.transportSessionId&&(s[Hp]=this.transportSessionId),this.lastSessionId&&(s[Yp]=this.lastSessionId),this.applicationId&&(s[Xp]=this.applicationId),this.appCheckToken&&(s[Pa]=this.appCheckToken),typeof location<"u"&&location.hostname&&Qp.test(location.hostname)&&(s[Gp]=Kp);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Un.forceAllow_=!0}static forceDisallow(){Un.forceDisallow_=!0}static isAvailable(){return Un.forceAllow_?!0:!Un.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Lw()&&!xw()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Ce(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=pd(t),i=Wp(s,nA);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[tA]="t",s[nm]=e,s[sm]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Ce(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class xc{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=kw(),window[Qw+this.uniqueCallbackIdentifier]=e,window[Yw+this.uniqueCallbackIdentifier]=t,this.myIFrame=xc.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const a="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(a),this.myIFrame.doc.close()}catch(c){De("frame writing exception"),c.stack&&De(c.stack),De(c)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||De("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[nm]=this.myID,e[sm]=this.myPW,e[im]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+om+s.length<=rm;){const a=this.pendingSegs.shift();s=s+"&"+Jw+i+"="+a.seg+"&"+Zw+i+"="+a.ts+"&"+eA+i+"="+a.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(sA)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{De("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rA=16384,oA=45e3;let Cr=null;typeof MozWebSocket<"u"?Cr=MozWebSocket:typeof WebSocket<"u"&&(Cr=WebSocket);class Ye{constructor(e,t,s,i,r,a,c){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ei(this.connId),this.stats_=Lc(t),this.connURL=Ye.connectionURL_(t,a,c,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const a={};return a[zp]=Mc,typeof location<"u"&&location.hostname&&Qp.test(location.hostname)&&(a[Gp]=Kp),t&&(a[Hp]=t),s&&(a[Yp]=s),i&&(a[Pa]=i),r&&(a[Xp]=r),tm(e,Jp,a)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,mn.set("previous_websocket_failure",!0);try{let s;$g(),this.mySock=new Cr(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ye.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Cr!==null&&!Ye.forceDisallow_}static previouslyFailed(){return mn.isInMemoryStorage||mn.get("previous_websocket_failure")===!0}markConnectionHealthy(){mn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Js(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(O(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=Ce(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Wp(t,rA);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(oA))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ye.responsesRequiredToBeHealthy=2;Ye.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{static get ALL_TRANSPORTS(){return[Un,Ye]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Ye&&Ye.isAvailable();let s=t&&!Ye.previouslyFailed();if(e.webSocketOnly&&(t||ze("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ye];else{const i=this.transports_=[];for(const r of oi.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);oi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}oi.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA=6e4,cA=5e3,lA=10*1024,uA=100*1024,Ko="t",xh="d",hA="s",Fh="r",dA="e",Uh="o",Bh="a",qh="n",jh="p",fA="h";class pA{constructor(e,t,s,i,r,a,c,l,h,f){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=a,this.onReady_=c,this.onDisconnect_=l,this.onKill_=h,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ei("c:"+this.id+":"),this.transportManager_=new oi(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Qs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>uA?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>lA?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ko in e){const t=e[Ko];t===Bh?this.upgradeIfSecondaryHealthy_():t===Fh?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Uh&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Vs("t",e),s=Vs("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:jh,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Bh,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:qh,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Vs("t",e),s=Vs("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Vs(Ko,e);if(xh in e){const s=e[xh];if(t===fA){const i={...s};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===qh){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===hA?this.onConnectionShutdown_(s):t===Fh?this.onReset_(s):t===dA?ba("Server Error: "+s):t===Uh?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ba("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Mc!==s&&ze("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Qs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(aA))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Qs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(cA))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:jh,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(mn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e){this.allowedEvents_=e,this.listeners_={},O(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){O(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr extends cm{static getInstance(){return new Sr}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!$a()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return O(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh=32,$h=768;class ae{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function ee(){return new ae("")}function Y(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function tn(n){return n.pieces_.length-n.pieceNum_}function re(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new ae(n.pieces_,e)}function lm(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function mA(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function um(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function hm(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new ae(e,0)}function we(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof ae)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new ae(t,0)}function G(n){return n.pieceNum_>=n.pieces_.length}function Ge(n,e){const t=Y(n),s=Y(e);if(t===null)return e;if(t===s)return Ge(re(n),re(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function dm(n,e){if(tn(n)!==tn(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function Je(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(tn(n)>tn(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class gA{constructor(e,t){this.errorPrefix_=t,this.parts_=um(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Vr(this.parts_[s]);fm(this)}}function _A(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Vr(e),fm(n)}function yA(n){const e=n.parts_.pop();n.byteLength_-=Vr(e),n.parts_.length>0&&(n.byteLength_-=1)}function fm(n){if(n.byteLength_>$h)throw new Error(n.errorPrefix_+"has a key path longer than "+$h+" bytes ("+n.byteLength_+").");if(n.parts_.length>Wh)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Wh+") or object contains a cycle "+fn(n))}function fn(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc extends cm{static getInstance(){return new Fc}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return O(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms=1e3,EA=300*1e3,zh=30*1e3,TA=1.3,IA=3e4,vA="server_kill",Hh=3;class Et extends am{constructor(e,t,s,i,r,a,c,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=a,this.appCheckTokenProvider_=c,this.authOverride_=l,this.id=Et.nextPersistentConnectionId_++,this.log_=Ei("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ms,this.maxReconnectDelay_=EA,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Fc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Sr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(Ce(r)),O(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new qa,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:a=>{const c=a.d;a.s==="ok"?t.resolve(c):t.reject(c)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,a=e._path.toString();this.log_("Listen called for "+a+" "+r),this.listens.has(a)||this.listens.set(a,new Map),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),O(!this.listens.get(a).has(r),"listen() called twice for same path/queryId.");const c={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(a).set(r,c),this.connected_&&this.sendListen_(c)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},a="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(a,r,c=>{const l=c.d,h=c.s;Et.warnOnListenWarnings_(l,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",c),h!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(h,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&bt(e,"w")){const s=Kn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();ze(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Jg(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=zh)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Xg(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,a=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,a))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},a="n";i&&(r.q=s,r.t=i),this.sendRequest(a,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,a=>{i&&setTimeout(()=>{i(a.s,a.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const a={p:t,d:s};r!==void 0&&(a.h=r),this.outstandingPuts_.push({action:e,request:a,onComplete:i}),this.outstandingPutCount_++;const c=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(c):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ce(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):ba("Unrecognized action received from server: "+Ce(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){O(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ms,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ms,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>IA&&(this.reconnectDelay_=Ms),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*TA)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Et.nextConnectionId_++,r=this.lastSessionId;let a=!1,c=null;const l=function(){c?c.close():(a=!0,s())},h=function(p){O(c,"sendRequest call when we're not connected not allowed."),c.sendRequest(p)};this.realtime_={close:l,sendRequest:h};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,g]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);a?De("getToken() completed but was canceled"):(De("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=g&&g.token,c=new pA(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,C=>{ze(C+" ("+this.repoInfo_.toString()+")"),this.interrupt(vA)},r))}catch(p){this.log_("Failed to get token: "+p),a||(this.repoInfo_.nodeAdmin&&ze(p),l())}}}interrupt(e){De("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){De("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Zo(this.interruptReasons_)&&(this.reconnectDelay_=Ms,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>Vc(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new ae(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){De("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Hh&&(this.reconnectDelay_=zh,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){De("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Hh&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Up.replace(/\./g,"-")]=1,$a()?e["framework.cordova"]=1:Id()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Sr.getInstance().currentlyOnline();return Zo(this.interruptReasons_)&&e}}Et.nextPersistentConnectionId_=0;Et.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class io{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new X(is,e),i=new X(is,t);return this.compare(s,i)!==0}minPost(){return X.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $i;class pm extends io{static get __EMPTY_NODE(){return $i}static set __EMPTY_NODE(e){$i=e}compare(e,t){return ms(e.name,t.name)}isDefinedOn(e){throw os("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return X.MIN}maxPost(){return new X(vn,$i)}makePost(e,t){return O(typeof e=="string","KeyIndex indexValue must always be a string."),new X(e,$i)}toString(){return".key"}}const Gn=new pm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let a=1;for(;!e.isEmpty();)if(e=e,a=t?s(e.key,t):1,i&&(a*=-1),a<0)this.isReverse_?e=e.left:e=e.right;else if(a===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ve{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??ve.RED,this.left=i??je.EMPTY_NODE,this.right=r??je.EMPTY_NODE}copy(e,t,s,i,r){return new ve(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return je.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return je.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ve.RED=!0;ve.BLACK=!1;class wA{copy(e,t,s,i,r){return this}insert(e,t,s){return new ve(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class je{constructor(e,t=je.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new je(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ve.BLACK,null,null))}remove(e){return new je(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ve.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new zi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new zi(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new zi(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new zi(this.root_,null,this.comparator_,!0,e)}}je.EMPTY_NODE=new wA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AA(n,e){return ms(n.name,e.name)}function Uc(n,e){return ms(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Na;function CA(n){Na=n}const mm=function(n){return typeof n=="number"?"number:"+$p(n):"string:"+n},gm=function(n){if(n.isLeafNode()){const e=n.val();O(typeof e=="string"||typeof e=="number"||typeof e=="object"&&bt(e,".sv"),"Priority must be a string or number.")}else O(n===Na||n.isEmpty(),"priority of unexpected type.");O(n===Na||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gh;class Te{static set __childrenNodeConstructor(e){Gh=e}static get __childrenNodeConstructor(){return Gh}constructor(e,t=Te.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,O(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),gm(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Te(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Te.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return G(e)?this:Y(e)===".priority"?this.priorityNode_:Te.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Te.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=Y(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(O(s!==".priority"||tn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Te.__childrenNodeConstructor.EMPTY_NODE.updateChild(re(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+mm(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=$p(this.value_):e+=this.value_,this.lazyHash_=qp(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Te.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Te.__childrenNodeConstructor?-1:(O(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=Te.VALUE_TYPE_ORDER.indexOf(t),r=Te.VALUE_TYPE_ORDER.indexOf(s);return O(i>=0,"Unknown leaf type: "+t),O(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Te.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _m,ym;function SA(n){_m=n}function RA(n){ym=n}class bA extends io{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?ms(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return X.MIN}maxPost(){return new X(vn,new Te("[PRIORITY-POST]",ym))}makePost(e,t){const s=_m(e);return new X(t,new Te("[PRIORITY-POST]",s))}toString(){return".priority"}}const Ve=new bA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA=Math.log(2);class NA{constructor(e){const t=r=>parseInt(Math.log(r)/PA,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Rr=function(n,e,t,s){n.sort(e);const i=function(l,h){const f=h-l;let p,g;if(f===0)return null;if(f===1)return p=n[l],g=t?t(p):p,new ve(g,p.node,ve.BLACK,null,null);{const C=parseInt(f/2,10)+l,P=i(l,C),D=i(C+1,h);return p=n[C],g=t?t(p):p,new ve(g,p.node,ve.BLACK,P,D)}},r=function(l){let h=null,f=null,p=n.length;const g=function(P,D){const N=p-P,j=p;p-=P;const W=i(N+1,j),K=n[N],Ae=t?t(K):K;C(new ve(Ae,K.node,D,null,W))},C=function(P){h?(h.left=P,h=P):(f=P,h=P)};for(let P=0;P<l.count;++P){const D=l.nextBitIsOne(),N=Math.pow(2,l.count-(P+1));D?g(N,ve.BLACK):(g(N,ve.BLACK),g(N,ve.RED))}return f},a=new NA(n.length),c=r(a);return new je(s||e,c)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qo;const On={};class _t{static get Default(){return O(On&&Ve,"ChildrenNode.ts has not been loaded"),Qo=Qo||new _t({".priority":On},{".priority":Ve}),Qo}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Kn(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof je?t:null}hasIndex(e){return bt(this.indexSet_,e.toString())}addIndex(e,t){O(e!==Gn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(X.Wrap);let a=r.getNext();for(;a;)i=i||e.isDefinedOn(a.node),s.push(a),a=r.getNext();let c;i?c=Rr(s,e.getCompare()):c=On;const l=e.toString(),h={...this.indexSet_};h[l]=e;const f={...this.indexes_};return f[l]=c,new _t(f,h)}addToIndexes(e,t){const s=rr(this.indexes_,(i,r)=>{const a=Kn(this.indexSet_,r);if(O(a,"Missing index implementation for "+r),i===On)if(a.isDefinedOn(e.node)){const c=[],l=t.getIterator(X.Wrap);let h=l.getNext();for(;h;)h.name!==e.name&&c.push(h),h=l.getNext();return c.push(e),Rr(c,a.getCompare())}else return On;else{const c=t.get(e.name);let l=i;return c&&(l=l.remove(new X(e.name,c))),l.insert(e,e.node)}});return new _t(s,this.indexSet_)}removeFromIndexes(e,t){const s=rr(this.indexes_,i=>{if(i===On)return i;{const r=t.get(e.name);return r?i.remove(new X(e.name,r)):i}});return new _t(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ls;class J{static get EMPTY_NODE(){return Ls||(Ls=new J(new je(Uc),null,_t.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&gm(this.priorityNode_),this.children_.isEmpty()&&O(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ls}updatePriority(e){return this.children_.isEmpty()?this:new J(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Ls:t}}getChild(e){const t=Y(e);return t===null?this:this.getImmediateChild(t).getChild(re(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(O(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new X(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const a=i.isEmpty()?Ls:this.priorityNode_;return new J(i,a,r)}}updateChild(e,t){const s=Y(e);if(s===null)return t;{O(Y(e)!==".priority"||tn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(re(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(Ve,(a,c)=>{t[a]=c.val(e),s++,r&&J.INTEGER_REGEXP_.test(a)?i=Math.max(i,Number(a)):r=!1}),!e&&r&&i<2*s){const a=[];for(const c in t)a[c]=t[c];return a}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+mm(this.getPriority().val())+":"),this.forEachChild(Ve,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":qp(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new X(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new X(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new X(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,X.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,X.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ii?-1:0}withIndex(e){if(e===Gn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new J(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Gn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(Ve),i=t.getIterator(Ve);let r=s.getNext(),a=i.getNext();for(;r&&a;){if(r.name!==a.name||!r.node.equals(a.node))return!1;r=s.getNext(),a=i.getNext()}return r===null&&a===null}else return!1;else return!1}}resolveIndex_(e){return e===Gn?null:this.indexMap_.get(e.toString())}}J.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class kA extends J{constructor(){super(new je(Uc),J.EMPTY_NODE,_t.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return J.EMPTY_NODE}isEmpty(){return!1}}const Ii=new kA;Object.defineProperties(X,{MIN:{value:new X(is,J.EMPTY_NODE)},MAX:{value:new X(vn,Ii)}});pm.__EMPTY_NODE=J.EMPTY_NODE;Te.__childrenNodeConstructor=J;CA(Ii);RA(Ii);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA=!0;function Oe(n,e=null){if(n===null)return J.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),O(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Te(t,Oe(e))}if(!(n instanceof Array)&&DA){const t=[];let s=!1;if(Ke(n,(a,c)=>{if(a.substring(0,1)!=="."){const l=Oe(c);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),t.push(new X(a,l)))}}),t.length===0)return J.EMPTY_NODE;const r=Rr(t,AA,a=>a.name,Uc);if(s){const a=Rr(t,Ve.getCompare());return new J(r,Oe(e),new _t({".priority":a},{".priority":Ve}))}else return new J(r,Oe(e),_t.Default)}else{let t=J.EMPTY_NODE;return Ke(n,(s,i)=>{if(bt(n,s)&&s.substring(0,1)!=="."){const r=Oe(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(Oe(e))}}SA(Oe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA extends io{constructor(e){super(),this.indexPath_=e,O(!G(e)&&Y(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?ms(e.name,t.name):r}makePost(e,t){const s=Oe(e),i=J.EMPTY_NODE.updateChild(this.indexPath_,s);return new X(t,i)}maxPost(){const e=J.EMPTY_NODE.updateChild(this.indexPath_,Ii);return new X(vn,e)}toString(){return um(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA extends io{compare(e,t){const s=e.node.compareTo(t.node);return s===0?ms(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return X.MIN}maxPost(){return X.MAX}makePost(e,t){const s=Oe(e);return new X(t,s)}toString(){return".value"}}const MA=new VA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LA(n){return{type:"value",snapshotNode:n}}function xA(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function FA(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Kh(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function UA(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ve}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return O(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return O(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:is}hasEnd(){return this.endSet_}getIndexEndValue(){return O(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return O(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:vn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return O(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ve}copy(){const e=new Bc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Qh(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Ve?t="$priority":n.index_===MA?t="$value":n.index_===Gn?t="$key":(O(n.index_ instanceof OA,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Ce(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=Ce(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+Ce(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=Ce(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+Ce(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Yh(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Ve&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br extends am{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(O(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Ei("p:rest:"),this.listens_={}}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const a=br.getListenId_(e,s),c={};this.listens_[a]=c;const l=Qh(e._queryParams);this.restRequest_(r+".json",l,(h,f)=>{let p=f;if(h===404&&(p=null,h=null),h===null&&this.onDataUpdate_(r,p,!1,s),Kn(this.listens_,a)===c){let g;h?h===401?g="permission_denied":g="rest_error:"+h:g="ok",i(g,null)}})}unlisten(e,t){const s=br.getListenId_(e,t);delete this.listens_[s]}get(e){const t=Qh(e._queryParams),s=e._path.toString(),i=new qa;return this.restRequest_(s+".json",t,(r,a)=>{let c=a;r===404&&(c=null,r=null),r===null?(this.onDataUpdate_(s,c,!1,null),i.resolve(c)):i.reject(new Error(c))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const a=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+as(t);this.log_("Sending REST request for "+a);const c=new XMLHttpRequest;c.onreadystatechange=()=>{if(s&&c.readyState===4){this.log_("REST Response for "+a+" received. status:",c.status,"response:",c.responseText);let l=null;if(c.status>=200&&c.status<300){try{l=Js(c.responseText)}catch{ze("Failed to parse JSON response for "+a+": "+c.responseText)}s(null,l)}else c.status!==401&&c.status!==404&&ze("Got unsuccessful REST response for "+a+" Status: "+c.status),s(c.status);s=null}},c.open("GET",a,!0),c.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(){this.rootNode_=J.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(){return{value:null,children:new Map}}function Em(n,e,t){if(G(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=Y(e);n.children.has(s)||n.children.set(s,Pr());const i=n.children.get(s);e=re(e),Em(i,e,t)}}function ka(n,e,t){n.value!==null?t(e,n.value):qA(n,(s,i)=>{const r=new ae(e.toString()+"/"+s);ka(i,r,t)})}function qA(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&Ke(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh=10*1e3,WA=30*1e3,$A=300*1e3;class zA{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new jA(e);const s=Xh+(WA-Xh)*Math.random();Qs(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;Ke(e,(i,r)=>{r>0&&bt(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),Qs(this.reportStats_.bind(this),Math.floor(Math.random()*2*$A))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var it;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(it||(it={}));function Tm(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Im(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function vm(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=it.ACK_USER_WRITE,this.source=Tm()}operationForChild(e){if(G(this.path)){if(this.affectedTree.value!=null)return O(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ae(e));return new Nr(ee(),t,this.revert)}}else return O(Y(this.path)===e,"operationForChild called for unrelated child."),new Nr(re(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=it.OVERWRITE}operationForChild(e){return G(this.path)?new wn(this.source,ee(),this.snap.getImmediateChild(e)):new wn(this.source,re(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=it.MERGE}operationForChild(e){if(G(this.path)){const t=this.children.subtree(new ae(e));return t.isEmpty()?null:t.value?new wn(this.source,ee(),t.value):new ai(this.source,ee(),t)}else return O(Y(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ai(this.source,re(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(G(e))return this.isFullyInitialized()&&!this.filtered_;const t=Y(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function HA(n,e,t,s){const i=[],r=[];return e.forEach(a=>{a.type==="child_changed"&&n.index_.indexedValueChanged(a.oldSnap,a.snapshotNode)&&r.push(UA(a.childName,a.snapshotNode))}),xs(n,i,"child_removed",e,s,t),xs(n,i,"child_added",e,s,t),xs(n,i,"child_moved",r,s,t),xs(n,i,"child_changed",e,s,t),xs(n,i,"value",e,s,t),i}function xs(n,e,t,s,i,r){const a=s.filter(c=>c.type===t);a.sort((c,l)=>KA(n,c,l)),a.forEach(c=>{const l=GA(n,c,r);i.forEach(h=>{h.respondsTo(c.type)&&e.push(h.createEvent(l,n.query_))})})}function GA(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function KA(n,e,t){if(e.childName==null||t.childName==null)throw os("Should only compare child_ events.");const s=new X(e.childName,e.snapshotNode),i=new X(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(n,e){return{eventCache:n,serverCache:e}}function Ys(n,e,t,s){return wm(new qc(e,t,s),n.serverCache)}function Am(n,e,t,s){return wm(n.eventCache,new qc(e,t,s))}function Da(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function An(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yo;const QA=()=>(Yo||(Yo=new je(Mw)),Yo);class ie{static fromObject(e){let t=new ie(null);return Ke(e,(s,i)=>{t=t.set(new ae(s),i)}),t}constructor(e,t=QA()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:ee(),value:this.value};if(G(e))return null;{const s=Y(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(re(e),t);return r!=null?{path:we(new ae(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(G(e))return this;{const t=Y(e),s=this.children.get(t);return s!==null?s.subtree(re(e)):new ie(null)}}set(e,t){if(G(e))return new ie(t,this.children);{const s=Y(e),r=(this.children.get(s)||new ie(null)).set(re(e),t),a=this.children.insert(s,r);return new ie(this.value,a)}}remove(e){if(G(e))return this.children.isEmpty()?new ie(null):new ie(null,this.children);{const t=Y(e),s=this.children.get(t);if(s){const i=s.remove(re(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new ie(null):new ie(this.value,r)}else return this}}get(e){if(G(e))return this.value;{const t=Y(e),s=this.children.get(t);return s?s.get(re(e)):null}}setTree(e,t){if(G(e))return t;{const s=Y(e),r=(this.children.get(s)||new ie(null)).setTree(re(e),t);let a;return r.isEmpty()?a=this.children.remove(s):a=this.children.insert(s,r),new ie(this.value,a)}}fold(e){return this.fold_(ee(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(we(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,ee(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(G(e))return null;{const r=Y(e),a=this.children.get(r);return a?a.findOnPath_(re(e),we(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ee(),t)}foreachOnPath_(e,t,s){if(G(e))return this;{this.value&&s(t,this.value);const i=Y(e),r=this.children.get(i);return r?r.foreachOnPath_(re(e),we(t,i),s):new ie(null)}}foreach(e){this.foreach_(ee(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(we(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.writeTree_=e}static empty(){return new Ze(new ie(null))}}function Xs(n,e,t){if(G(e))return new Ze(new ie(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const a=Ge(i,e);return r=r.updateChild(a,t),new Ze(n.writeTree_.set(i,r))}else{const i=new ie(t),r=n.writeTree_.setTree(e,i);return new Ze(r)}}}function Jh(n,e,t){let s=n;return Ke(t,(i,r)=>{s=Xs(s,we(e,i),r)}),s}function Zh(n,e){if(G(e))return Ze.empty();{const t=n.writeTree_.setTree(e,new ie(null));return new Ze(t)}}function Oa(n,e){return bn(n,e)!=null}function bn(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Ge(t.path,e)):null}function ed(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Ve,(s,i)=>{e.push(new X(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new X(s,i.value))}),e}function Gt(n,e){if(G(e))return n;{const t=bn(n,e);return t!=null?new Ze(new ie(t)):new Ze(n.writeTree_.subtree(e))}}function Va(n){return n.writeTree_.isEmpty()}function rs(n,e){return Cm(ee(),n.writeTree_,e)}function Cm(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(O(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=Cm(we(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(we(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm(n,e){return km(e,n)}function YA(n,e,t,s,i){O(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=Xs(n.visibleWrites,e,t)),n.lastWriteId=s}function XA(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function JA(n,e){const t=n.allWrites.findIndex(c=>c.writeId===e);O(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,a=n.allWrites.length-1;for(;i&&a>=0;){const c=n.allWrites[a];c.visible&&(a>=t&&ZA(c,s.path)?i=!1:Je(s.path,c.path)&&(r=!0)),a--}if(i){if(r)return eC(n),!0;if(s.snap)n.visibleWrites=Zh(n.visibleWrites,s.path);else{const c=s.children;Ke(c,l=>{n.visibleWrites=Zh(n.visibleWrites,we(s.path,l))})}return!0}else return!1}function ZA(n,e){if(n.snap)return Je(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Je(we(n.path,t),e))return!0;return!1}function eC(n){n.visibleWrites=Rm(n.allWrites,tC,ee()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function tC(n){return n.visible}function Rm(n,e,t){let s=Ze.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const a=r.path;let c;if(r.snap)Je(t,a)?(c=Ge(t,a),s=Xs(s,c,r.snap)):Je(a,t)&&(c=Ge(a,t),s=Xs(s,ee(),r.snap.getChild(c)));else if(r.children){if(Je(t,a))c=Ge(t,a),s=Jh(s,c,r.children);else if(Je(a,t))if(c=Ge(a,t),G(c))s=Jh(s,ee(),r.children);else{const l=Kn(r.children,Y(c));if(l){const h=l.getChild(re(c));s=Xs(s,ee(),h)}}}else throw os("WriteRecord should have .snap or .children")}}return s}function bm(n,e,t,s,i){if(!s&&!i){const r=bn(n.visibleWrites,e);if(r!=null)return r;{const a=Gt(n.visibleWrites,e);if(Va(a))return t;if(t==null&&!Oa(a,ee()))return null;{const c=t||J.EMPTY_NODE;return rs(a,c)}}}else{const r=Gt(n.visibleWrites,e);if(!i&&Va(r))return t;if(!i&&t==null&&!Oa(r,ee()))return null;{const a=function(h){return(h.visible||i)&&(!s||!~s.indexOf(h.writeId))&&(Je(h.path,e)||Je(e,h.path))},c=Rm(n.allWrites,a,e),l=t||J.EMPTY_NODE;return rs(c,l)}}}function nC(n,e,t){let s=J.EMPTY_NODE;const i=bn(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ve,(r,a)=>{s=s.updateImmediateChild(r,a)}),s;if(t){const r=Gt(n.visibleWrites,e);return t.forEachChild(Ve,(a,c)=>{const l=rs(Gt(r,new ae(a)),c);s=s.updateImmediateChild(a,l)}),ed(r).forEach(a=>{s=s.updateImmediateChild(a.name,a.node)}),s}else{const r=Gt(n.visibleWrites,e);return ed(r).forEach(a=>{s=s.updateImmediateChild(a.name,a.node)}),s}}function sC(n,e,t,s,i){O(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=we(e,t);if(Oa(n.visibleWrites,r))return null;{const a=Gt(n.visibleWrites,r);return Va(a)?i.getChild(t):rs(a,i.getChild(t))}}function iC(n,e,t,s){const i=we(e,t),r=bn(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const a=Gt(n.visibleWrites,i);return rs(a,s.getNode().getImmediateChild(t))}else return null}function rC(n,e){return bn(n.visibleWrites,e)}function oC(n,e,t,s,i,r,a){let c;const l=Gt(n.visibleWrites,e),h=bn(l,ee());if(h!=null)c=h;else if(t!=null)c=rs(l,t);else return[];if(c=c.withIndex(a),!c.isEmpty()&&!c.isLeafNode()){const f=[],p=a.getCompare(),g=r?c.getReverseIteratorFrom(s,a):c.getIteratorFrom(s,a);let C=g.getNext();for(;C&&f.length<i;)p(C,s)!==0&&f.push(C),C=g.getNext();return f}else return[]}function aC(){return{visibleWrites:Ze.empty(),allWrites:[],lastWriteId:-1}}function Ma(n,e,t,s){return bm(n.writeTree,n.treePath,e,t,s)}function Pm(n,e){return nC(n.writeTree,n.treePath,e)}function td(n,e,t,s){return sC(n.writeTree,n.treePath,e,t,s)}function kr(n,e){return rC(n.writeTree,we(n.treePath,e))}function cC(n,e,t,s,i,r){return oC(n.writeTree,n.treePath,e,t,s,i,r)}function jc(n,e,t){return iC(n.writeTree,n.treePath,e,t)}function Nm(n,e){return km(we(n.treePath,e),n.writeTree)}function km(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;O(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),O(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,Kh(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,FA(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,xA(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,Kh(s,e.snapshotNode,i.oldSnap));else throw os("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Dm=new uC;class Wc{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new qc(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return jc(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:An(this.viewCache_),r=cC(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}function hC(n,e){O(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),O(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function dC(n,e,t,s,i){const r=new lC;let a,c;if(t.type===it.OVERWRITE){const h=t;h.source.fromUser?a=La(n,e,h.path,h.snap,s,i,r):(O(h.source.fromServer,"Unknown source."),c=h.source.tagged||e.serverCache.isFiltered()&&!G(h.path),a=Dr(n,e,h.path,h.snap,s,i,c,r))}else if(t.type===it.MERGE){const h=t;h.source.fromUser?a=pC(n,e,h.path,h.children,s,i,r):(O(h.source.fromServer,"Unknown source."),c=h.source.tagged||e.serverCache.isFiltered(),a=xa(n,e,h.path,h.children,s,i,c,r))}else if(t.type===it.ACK_USER_WRITE){const h=t;h.revert?a=_C(n,e,h.path,s,i,r):a=mC(n,e,h.path,h.affectedTree,s,i,r)}else if(t.type===it.LISTEN_COMPLETE)a=gC(n,e,t.path,s,r);else throw os("Unknown operation type: "+t.type);const l=r.getChanges();return fC(e,a,l),{viewCache:a,changes:l}}function fC(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Da(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(LA(Da(e)))}}function Om(n,e,t,s,i,r){const a=e.eventCache;if(kr(s,t)!=null)return e;{let c,l;if(G(t))if(O(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const h=An(e),f=h instanceof J?h:J.EMPTY_NODE,p=Pm(s,f);c=n.filter.updateFullNode(e.eventCache.getNode(),p,r)}else{const h=Ma(s,An(e));c=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const h=Y(t);if(h===".priority"){O(tn(t)===1,"Can't have a priority with additional path components");const f=a.getNode();l=e.serverCache.getNode();const p=td(s,t,f,l);p!=null?c=n.filter.updatePriority(f,p):c=a.getNode()}else{const f=re(t);let p;if(a.isCompleteForChild(h)){l=e.serverCache.getNode();const g=td(s,t,a.getNode(),l);g!=null?p=a.getNode().getImmediateChild(h).updateChild(f,g):p=a.getNode().getImmediateChild(h)}else p=jc(s,h,e.serverCache);p!=null?c=n.filter.updateChild(a.getNode(),h,p,f,i,r):c=a.getNode()}}return Ys(e,c,a.isFullyInitialized()||G(t),n.filter.filtersNodes())}}function Dr(n,e,t,s,i,r,a,c){const l=e.serverCache;let h;const f=a?n.filter:n.filter.getIndexedFilter();if(G(t))h=f.updateFullNode(l.getNode(),s,null);else if(f.filtersNodes()&&!l.isFiltered()){const C=l.getNode().updateChild(t,s);h=f.updateFullNode(l.getNode(),C,null)}else{const C=Y(t);if(!l.isCompleteForPath(t)&&tn(t)>1)return e;const P=re(t),N=l.getNode().getImmediateChild(C).updateChild(P,s);C===".priority"?h=f.updatePriority(l.getNode(),N):h=f.updateChild(l.getNode(),C,N,P,Dm,null)}const p=Am(e,h,l.isFullyInitialized()||G(t),f.filtersNodes()),g=new Wc(i,p,r);return Om(n,p,t,i,g,c)}function La(n,e,t,s,i,r,a){const c=e.eventCache;let l,h;const f=new Wc(i,e,r);if(G(t))h=n.filter.updateFullNode(e.eventCache.getNode(),s,a),l=Ys(e,h,!0,n.filter.filtersNodes());else{const p=Y(t);if(p===".priority")h=n.filter.updatePriority(e.eventCache.getNode(),s),l=Ys(e,h,c.isFullyInitialized(),c.isFiltered());else{const g=re(t),C=c.getNode().getImmediateChild(p);let P;if(G(g))P=s;else{const D=f.getCompleteChild(p);D!=null?lm(g)===".priority"&&D.getChild(hm(g)).isEmpty()?P=D:P=D.updateChild(g,s):P=J.EMPTY_NODE}if(C.equals(P))l=e;else{const D=n.filter.updateChild(c.getNode(),p,P,g,f,a);l=Ys(e,D,c.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function nd(n,e){return n.eventCache.isCompleteForChild(e)}function pC(n,e,t,s,i,r,a){let c=e;return s.foreach((l,h)=>{const f=we(t,l);nd(e,Y(f))&&(c=La(n,c,f,h,i,r,a))}),s.foreach((l,h)=>{const f=we(t,l);nd(e,Y(f))||(c=La(n,c,f,h,i,r,a))}),c}function sd(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function xa(n,e,t,s,i,r,a,c){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,h;G(t)?h=s:h=new ie(null).setTree(t,s);const f=e.serverCache.getNode();return h.children.inorderTraversal((p,g)=>{if(f.hasChild(p)){const C=e.serverCache.getNode().getImmediateChild(p),P=sd(n,C,g);l=Dr(n,l,new ae(p),P,i,r,a,c)}}),h.children.inorderTraversal((p,g)=>{const C=!e.serverCache.isCompleteForChild(p)&&g.value===null;if(!f.hasChild(p)&&!C){const P=e.serverCache.getNode().getImmediateChild(p),D=sd(n,P,g);l=Dr(n,l,new ae(p),D,i,r,a,c)}}),l}function mC(n,e,t,s,i,r,a){if(kr(i,t)!=null)return e;const c=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(G(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return Dr(n,e,t,l.getNode().getChild(t),i,r,c,a);if(G(t)){let h=new ie(null);return l.getNode().forEachChild(Gn,(f,p)=>{h=h.set(new ae(f),p)}),xa(n,e,t,h,i,r,c,a)}else return e}else{let h=new ie(null);return s.foreach((f,p)=>{const g=we(t,f);l.isCompleteForPath(g)&&(h=h.set(f,l.getNode().getChild(g)))}),xa(n,e,t,h,i,r,c,a)}}function gC(n,e,t,s,i){const r=e.serverCache,a=Am(e,r.getNode(),r.isFullyInitialized()||G(t),r.isFiltered());return Om(n,a,t,s,Dm,i)}function _C(n,e,t,s,i,r){let a;if(kr(s,t)!=null)return e;{const c=new Wc(s,e,i),l=e.eventCache.getNode();let h;if(G(t)||Y(t)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=Ma(s,An(e));else{const p=e.serverCache.getNode();O(p instanceof J,"serverChildren would be complete if leaf node"),f=Pm(s,p)}f=f,h=n.filter.updateFullNode(l,f,r)}else{const f=Y(t);let p=jc(s,f,e.serverCache);p==null&&e.serverCache.isCompleteForChild(f)&&(p=l.getImmediateChild(f)),p!=null?h=n.filter.updateChild(l,f,p,re(t),c,r):e.eventCache.getNode().hasChild(f)?h=n.filter.updateChild(l,f,J.EMPTY_NODE,re(t),c,r):h=l,h.isEmpty()&&e.serverCache.isFullyInitialized()&&(a=Ma(s,An(e)),a.isLeafNode()&&(h=n.filter.updateFullNode(h,a,r)))}return a=e.serverCache.isFullyInitialized()||kr(s,ee())!=null,Ys(e,h,a,n.filter.filtersNodes())}}function yC(n,e){const t=An(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!G(e)&&!t.getImmediateChild(Y(e)).isEmpty())?t.getChild(e):null}function id(n,e,t,s){e.type===it.MERGE&&e.source.queryId!==null&&(O(An(n.viewCache_),"We should always have a full cache before handling merges"),O(Da(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=dC(n.processor_,i,e,t,s);return hC(n.processor_,r.viewCache),O(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,EC(n,r.changes,r.viewCache.eventCache.getNode())}function EC(n,e,t,s){const i=n.eventRegistrations_;return HA(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rd;function TC(n){O(!rd,"__referenceConstructor has already been defined"),rd=n}function $c(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return O(r!=null,"SyncTree gave us an op for an invalid query."),id(r,e,t,s)}else{let r=[];for(const a of n.views.values())r=r.concat(id(a,e,t,s));return r}}function zc(n,e){let t=null;for(const s of n.views.values())t=t||yC(s,e);return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let od;function IC(n){O(!od,"__referenceConstructor has already been defined"),od=n}class ad{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ie(null),this.pendingWriteTree_=aC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function vC(n,e,t,s,i){return YA(n.pendingWriteTree_,e,t,s,i),i?oo(n,new wn(Tm(),e,t)):[]}function Bn(n,e,t=!1){const s=XA(n.pendingWriteTree_,e);if(JA(n.pendingWriteTree_,e)){let r=new ie(null);return s.snap!=null?r=r.set(ee(),!0):Ke(s.children,a=>{r=r.set(new ae(a),!0)}),oo(n,new Nr(s.path,r,t))}else return[]}function ro(n,e,t){return oo(n,new wn(Im(),e,t))}function wC(n,e,t){const s=ie.fromObject(t);return oo(n,new ai(Im(),e,s))}function AC(n,e,t,s){const i=xm(n,s);if(i!=null){const r=Fm(i),a=r.path,c=r.queryId,l=Ge(a,e),h=new wn(vm(c),l,t);return Um(n,a,h)}else return[]}function CC(n,e,t,s){const i=xm(n,s);if(i){const r=Fm(i),a=r.path,c=r.queryId,l=Ge(a,e),h=ie.fromObject(t),f=new ai(vm(c),l,h);return Um(n,a,f)}else return[]}function Vm(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(a,c)=>{const l=Ge(a,e),h=zc(c,l);if(h)return h});return bm(i,e,r,t,!0)}function oo(n,e){return Mm(e,n.syncPointTree_,null,Sm(n.pendingWriteTree_,ee()))}function Mm(n,e,t,s){if(G(n.path))return Lm(n,e,t,s);{const i=e.get(ee());t==null&&i!=null&&(t=zc(i,ee()));let r=[];const a=Y(n.path),c=n.operationForChild(a),l=e.children.get(a);if(l&&c){const h=t?t.getImmediateChild(a):null,f=Nm(s,a);r=r.concat(Mm(c,l,h,f))}return i&&(r=r.concat($c(i,n,s,t))),r}}function Lm(n,e,t,s){const i=e.get(ee());t==null&&i!=null&&(t=zc(i,ee()));let r=[];return e.children.inorderTraversal((a,c)=>{const l=t?t.getImmediateChild(a):null,h=Nm(s,a),f=n.operationForChild(a);f&&(r=r.concat(Lm(f,c,l,h)))}),i&&(r=r.concat($c(i,n,s,t))),r}function xm(n,e){return n.tagToQueryMap.get(e)}function Fm(n){const e=n.indexOf("$");return O(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new ae(n.substr(0,e))}}function Um(n,e,t){const s=n.syncPointTree_.get(e);O(s,"Missing sync point for query tag that we're tracking");const i=Sm(n.pendingWriteTree_,e);return $c(s,t,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Hc(t)}node(){return this.node_}}class Gc{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=we(this.path_,e);return new Gc(this.syncTree_,t)}node(){return Vm(this.syncTree_,this.path_)}}const SC=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},cd=function(n,e,t){if(!n||typeof n!="object")return n;if(O(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return RC(n[".sv"],e,t);if(typeof n[".sv"]=="object")return bC(n[".sv"],e);O(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},RC=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:O(!1,"Unexpected server value: "+n)}},bC=function(n,e,t){n.hasOwnProperty("increment")||O(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&O(!1,"Unexpected increment value: "+s);const i=e.node();if(O(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const a=i.getValue();return typeof a!="number"?s:a+s},PC=function(n,e,t,s){return Kc(e,new Gc(t,n),s)},NC=function(n,e,t){return Kc(n,new Hc(e),t)};function Kc(n,e,t){const s=n.getPriority().val(),i=cd(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const a=n,c=cd(a.getValue(),e,t);return c!==a.getValue()||i!==a.getPriority().val()?new Te(c,Oe(i)):n}else{const a=n;return r=a,i!==a.getPriority().val()&&(r=r.updatePriority(new Te(i))),a.forEachChild(Ve,(c,l)=>{const h=Kc(l,e.getImmediateChild(c),t);h!==l&&(r=r.updateImmediateChild(c,h))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Yc(n,e){let t=e instanceof ae?e:new ae(e),s=n,i=Y(t);for(;i!==null;){const r=Kn(s.node.children,i)||{children:{},childCount:0};s=new Qc(i,s,r),t=re(t),i=Y(t)}return s}function gs(n){return n.node.value}function Bm(n,e){n.node.value=e,Fa(n)}function qm(n){return n.node.childCount>0}function kC(n){return gs(n)===void 0&&!qm(n)}function ao(n,e){Ke(n.node.children,(t,s)=>{e(new Qc(t,n,s))})}function jm(n,e,t,s){t&&e(n),ao(n,i=>{jm(i,e,!0)})}function DC(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function vi(n){return new ae(n.parent===null?n.name:vi(n.parent)+"/"+n.name)}function Fa(n){n.parent!==null&&OC(n.parent,n.name,n)}function OC(n,e,t){const s=kC(t),i=bt(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,Fa(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,Fa(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VC=/[\[\].#$\/\u0000-\u001F\u007F]/,MC=/[\[\].#$\u0000-\u001F\u007F]/,Xo=10*1024*1024,Wm=function(n){return typeof n=="string"&&n.length!==0&&!VC.test(n)},LC=function(n){return typeof n=="string"&&n.length!==0&&!MC.test(n)},xC=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),LC(n)},$m=function(n,e,t){const s=t instanceof ae?new gA(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+fn(s));if(typeof e=="function")throw new Error(n+"contains a function "+fn(s)+" with contents = "+e.toString());if(jp(e))throw new Error(n+"contains "+e.toString()+" "+fn(s));if(typeof e=="string"&&e.length>Xo/3&&Vr(e)>Xo)throw new Error(n+"contains a string greater than "+Xo+" utf8 bytes "+fn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Ke(e,(a,c)=>{if(a===".value")i=!0;else if(a!==".priority"&&a!==".sv"&&(r=!0,!Wm(a)))throw new Error(n+" contains an invalid key ("+a+") "+fn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);_A(s,a),$m(n,c,s),yA(s)}),i&&r)throw new Error(n+' contains ".value" child '+fn(s)+" in addition to actual children.")}},FC=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Wm(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!xC(t))throw new Error(s_(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function BC(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!dm(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function Pn(n,e,t){BC(n,t),qC(n,s=>Je(s,e)||Je(e,s))}function qC(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(jC(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function jC(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Ks&&De("event: "+t.toString()),Ti(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC="repo_interrupt",$C=25;class zC{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new UC,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Pr(),this.transactionQueueTree_=new Qc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function HC(n,e,t){if(n.stats_=Lc(n.repoInfo_),n.forceRestClient_||qw())n.server_=new br(n.repoInfo_,(s,i,r,a)=>{ld(n,s,i,r,a)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>ud(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ce(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Et(n.repoInfo_,e,(s,i,r,a)=>{ld(n,s,i,r,a)},s=>{ud(n,s)},s=>{KC(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Hw(n.repoInfo_,()=>new zA(n.stats_,n.server_)),n.infoData_=new BA,n.infoSyncTree_=new ad({startListening:(s,i,r,a)=>{let c=[];const l=n.infoData_.getNode(s._path);return l.isEmpty()||(c=ro(n.infoSyncTree_,s._path,l),setTimeout(()=>{a("ok")},0)),c},stopListening:()=>{}}),Xc(n,"connected",!1),n.serverSyncTree_=new ad({startListening:(s,i,r,a)=>(n.server_.listen(s,r,i,(c,l)=>{const h=a(c,l);Pn(n.eventQueue_,s._path,h)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function GC(n){const t=n.infoData_.getNode(new ae(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function zm(n){return SC({timestamp:GC(n)})}function ld(n,e,t,s,i){n.dataUpdateCount++;const r=new ae(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let a=[];if(i)if(s){const l=rr(t,h=>Oe(h));a=CC(n.serverSyncTree_,r,l,i)}else{const l=Oe(t);a=AC(n.serverSyncTree_,r,l,i)}else if(s){const l=rr(t,h=>Oe(h));a=wC(n.serverSyncTree_,r,l)}else{const l=Oe(t);a=ro(n.serverSyncTree_,r,l)}let c=r;a.length>0&&(c=Zc(n,r)),Pn(n.eventQueue_,c,a)}function ud(n,e){Xc(n,"connected",e),e===!1&&YC(n)}function KC(n,e){Ke(e,(t,s)=>{Xc(n,t,s)})}function Xc(n,e,t){const s=new ae("/.info/"+e),i=Oe(t);n.infoData_.updateSnapshot(s,i);const r=ro(n.infoSyncTree_,s,i);Pn(n.eventQueue_,s,r)}function QC(n){return n.nextWriteId_++}function YC(n){Hm(n,"onDisconnectEvents");const e=zm(n),t=Pr();ka(n.onDisconnect_,ee(),(i,r)=>{const a=PC(i,r,n.serverSyncTree_,e);Em(t,i,a)});let s=[];ka(t,ee(),(i,r)=>{s=s.concat(ro(n.serverSyncTree_,i,r));const a=eS(n,i);Zc(n,a)}),n.onDisconnect_=Pr(),Pn(n.eventQueue_,ee(),s)}function XC(n){n.persistentConnection_&&n.persistentConnection_.interrupt(WC)}function Hm(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),De(t,...e)}function Gm(n,e,t){return Vm(n.serverSyncTree_,e,t)||J.EMPTY_NODE}function Jc(n,e=n.transactionQueueTree_){if(e||co(n,e),gs(e)){const t=Qm(n,e);O(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&JC(n,vi(e),t)}else qm(e)&&ao(e,t=>{Jc(n,t)})}function JC(n,e,t){const s=t.map(h=>h.currentWriteId),i=Gm(n,e,s);let r=i;const a=i.hash();for(let h=0;h<t.length;h++){const f=t[h];O(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const p=Ge(e,f.path);r=r.updateChild(p,f.currentOutputSnapshotRaw)}const c=r.val(!0),l=e;n.server_.put(l.toString(),c,h=>{Hm(n,"transaction put response",{path:l.toString(),status:h});let f=[];if(h==="ok"){const p=[];for(let g=0;g<t.length;g++)t[g].status=2,f=f.concat(Bn(n.serverSyncTree_,t[g].currentWriteId)),t[g].onComplete&&p.push(()=>t[g].onComplete(null,!0,t[g].currentOutputSnapshotResolved)),t[g].unwatcher();co(n,Yc(n.transactionQueueTree_,e)),Jc(n,n.transactionQueueTree_),Pn(n.eventQueue_,e,f);for(let g=0;g<p.length;g++)Ti(p[g])}else{if(h==="datastale")for(let p=0;p<t.length;p++)t[p].status===3?t[p].status=4:t[p].status=0;else{ze("transaction at "+l.toString()+" failed: "+h);for(let p=0;p<t.length;p++)t[p].status=4,t[p].abortReason=h}Zc(n,e)}},a)}function Zc(n,e){const t=Km(n,e),s=vi(t),i=Qm(n,t);return ZC(n,i,s),s}function ZC(n,e,t){if(e.length===0)return;const s=[];let i=[];const a=e.filter(c=>c.status===0).map(c=>c.currentWriteId);for(let c=0;c<e.length;c++){const l=e[c],h=Ge(t,l.path);let f=!1,p;if(O(h!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)f=!0,p=l.abortReason,i=i.concat(Bn(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=$C)f=!0,p="maxretry",i=i.concat(Bn(n.serverSyncTree_,l.currentWriteId,!0));else{const g=Gm(n,l.path,a);l.currentInputSnapshot=g;const C=e[c].update(g.val());if(C!==void 0){$m("transaction failed: Data returned ",C,l.path);let P=Oe(C);typeof C=="object"&&C!=null&&bt(C,".priority")||(P=P.updatePriority(g.getPriority()));const N=l.currentWriteId,j=zm(n),W=NC(P,g,j);l.currentOutputSnapshotRaw=P,l.currentOutputSnapshotResolved=W,l.currentWriteId=QC(n),a.splice(a.indexOf(N),1),i=i.concat(vC(n.serverSyncTree_,l.path,W,l.currentWriteId,l.applyLocally)),i=i.concat(Bn(n.serverSyncTree_,N,!0))}else f=!0,p="nodata",i=i.concat(Bn(n.serverSyncTree_,l.currentWriteId,!0))}Pn(n.eventQueue_,t,i),i=[],f&&(e[c].status=2,(function(g){setTimeout(g,Math.floor(0))})(e[c].unwatcher),e[c].onComplete&&(p==="nodata"?s.push(()=>e[c].onComplete(null,!1,e[c].currentInputSnapshot)):s.push(()=>e[c].onComplete(new Error(p),!1,null))))}co(n,n.transactionQueueTree_);for(let c=0;c<s.length;c++)Ti(s[c]);Jc(n,n.transactionQueueTree_)}function Km(n,e){let t,s=n.transactionQueueTree_;for(t=Y(e);t!==null&&gs(s)===void 0;)s=Yc(s,t),e=re(e),t=Y(e);return s}function Qm(n,e){const t=[];return Ym(n,e,t),t.sort((s,i)=>s.order-i.order),t}function Ym(n,e,t){const s=gs(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);ao(e,i=>{Ym(n,i,t)})}function co(n,e){const t=gs(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,Bm(e,t.length>0?t:void 0)}ao(e,s=>{co(n,s)})}function eS(n,e){const t=vi(Km(n,e)),s=Yc(n.transactionQueueTree_,e);return DC(s,i=>{Jo(n,i)}),Jo(n,s),jm(s,i=>{Jo(n,i)}),t}function Jo(n,e){const t=gs(e);if(t){const s=[];let i=[],r=-1;for(let a=0;a<t.length;a++)t[a].status===3||(t[a].status===1?(O(r===a-1,"All SENT items should be at beginning of queue."),r=a,t[a].status=3,t[a].abortReason="set"):(O(t[a].status===0,"Unexpected transaction status in abort"),t[a].unwatcher(),i=i.concat(Bn(n.serverSyncTree_,t[a].currentWriteId,!0)),t[a].onComplete&&s.push(t[a].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Bm(e,void 0):t.length=r+1,Pn(n.eventQueue_,vi(e),i);for(let a=0;a<s.length;a++)Ti(s[a])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tS(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function nS(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ze(`Invalid query segment '${t}' in query '${n}'`)}return e}const hd=function(n,e){const t=sS(n),s=t.namespace;t.domain==="firebase.com"&&St(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&St("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Ow();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new em(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new ae(t.pathString)}},sS=function(n){let e="",t="",s="",i="",r="",a=!0,c="https",l=443;if(typeof n=="string"){let h=n.indexOf("//");h>=0&&(c=n.substring(0,h-1),n=n.substring(h+2));let f=n.indexOf("/");f===-1&&(f=n.length);let p=n.indexOf("?");p===-1&&(p=n.length),e=n.substring(0,Math.min(f,p)),f<p&&(i=tS(n.substring(f,p)));const g=nS(n.substring(Math.min(n.length,p)));h=e.indexOf(":"),h>=0?(a=c==="https"||c==="wss",l=parseInt(e.substring(h+1),10)):h=e.length;const C=e.slice(0,h);if(C.toLowerCase()==="localhost")t="localhost";else if(C.split(".").length<=2)t=C;else{const P=e.indexOf(".");s=e.substring(0,P).toLowerCase(),t=e.substring(P+1),r=s}"ns"in g&&(r=g.ns)}return{host:e,port:l,domain:t,subdomain:s,secure:a,scheme:c,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return G(this._path)?null:lm(this._path)}get ref(){return new _s(this._repo,this._path)}get _queryIdentifier(){const e=Yh(this._queryParams),t=Vc(e);return t==="{}"?"default":t}get _queryObject(){return Yh(this._queryParams)}isEqual(e){if(e=pe(e),!(e instanceof el))return!1;const t=this._repo===e._repo,s=dm(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+mA(this._path)}}class _s extends el{constructor(e,t){super(e,t,new Bc,!1)}get parent(){const e=hm(this._path);return e===null?null:new _s(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}TC(_s);IC(_s);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS="FIREBASE_DATABASE_EMULATOR_HOST",Ua={};let rS=!1;function oS(n,e,t,s){const i=e.lastIndexOf(":"),r=e.substring(0,i),a=nn(r);n.repoInfo_=new em(e,a,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function aS(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||St("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),De("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let a=hd(r,i),c=a.repoInfo,l;typeof process<"u"&&kh&&(l=kh[iS]),l?(r=`http://${l}?ns=${c.namespace}`,a=hd(r,i),c=a.repoInfo):a.repoInfo.secure;const h=new Ww(n.name,n.options,e);FC("Invalid Firebase Database URL",a),G(a.path)||St("Database URL must point to the root of a Firebase Database (not including a child path).");const f=lS(c,n,h,new jw(n,t));return new uS(f,n)}function cS(n,e){const t=Ua[e];(!t||t[n.key]!==n)&&St(`Database ${e}(${n.repoInfo_}) has already been deleted.`),XC(n),delete t[n.key]}function lS(n,e,t,s){let i=Ua[e.name];i||(i={},Ua[e.name]=i);let r=i[n.toURLString()];return r&&St("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new zC(n,rS,t,s),i[n.toURLString()]=r,r}class uS{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(HC(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new _s(this._repo,ee())),this._rootInternal}_delete(){return this._rootInternal!==null&&(cS(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&St("Cannot call "+e+" on a deleted database.")}}function hS(n=Ha(),e){const t=Lr(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=_d("database");s&&dS(t,...s)}return t}function dS(n,e,t,s={}){n=pe(n),n._checkNotDeleted("useEmulator");const i=`${e}:${t}`,r=n._repoInternal;if(n._instanceStarted){if(i===n._repoInternal.repoInfo_.host&&Tt(s,r.repoInfo_.emulatorOptions))return;St("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let a;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&St('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),a=new nr(nr.OWNER);else if(s.mockUserToken){const c=typeof s.mockUserToken=="string"?s.mockUserToken:Td(s.mockUserToken,n.app.options.projectId);a=new nr(c)}nn(e)&&(ja(e),Wa("Database",!0)),oS(r,i,s,a)}/**
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
 */function fS(n){Rw(Cn),yn(new Kt("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return aS(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),rt(Dh,Oh,n),rt(Dh,Oh,"esm2020")}Et.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Et.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};fS();const pS={apiKey:"AIzaSyDif5g62oVWT460e5q3Kpg7txgRN8VXk24",authDomain:"gustoplan-dev.firebaseapp.com",projectId:"gustoplan-dev",storageBucket:"gustoplan-dev.firebasestorage.app",messagingSenderId:"554162135180",appId:"1:554162135180:web:f5addf322a0977ffe31ba9",databaseURL:"https://gustoplan-dev-default-rtdb.europe-west1.firebasedatabase.app"},tl=Cd(pS),RS=uw(tl),bS=lT(tl);hS(tl);export{bS as a,RS as b,SS as c,lw as d,ES as e,CS as f,uw as g,vS as h,AS as i,pS as j,mS as o,TS as q,gS as s,wS as u,IS as w};
