(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const vu=()=>{};var Zo={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=function(n,e){if(!n)throw nn(e)},nn=function(n){return new Error("Firebase Database ("+Cl.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Iu=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[t++];e[i++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[t++],a=n[t++],h=n[t++],d=((s&7)<<18|(o&63)<<12|(a&63)<<6|h&63)-65536;e[i++]=String.fromCharCode(55296+(d>>10)),e[i++]=String.fromCharCode(56320+(d&1023))}else{const o=n[t++],a=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return e.join("")},cr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,h=a?n[s+1]:0,d=s+2<n.length,f=d?n[s+2]:0,E=o>>2,I=(o&3)<<4|h>>4;let C=(h&15)<<2|f>>6,k=f&63;d||(k=64,a||(C=64)),i.push(t[E],t[I],t[C],t[k])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Al(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Iu(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const o=t[n.charAt(s++)],h=s<n.length?t[n.charAt(s)]:0;++s;const f=s<n.length?t[n.charAt(s)]:64;++s;const I=s<n.length?t[n.charAt(s)]:64;if(++s,o==null||h==null||f==null||I==null)throw new wu;const C=o<<2|h>>4;if(i.push(C),f!==64){const k=h<<4&240|f>>2;if(i.push(k),I!==64){const R=f<<6&192|I;i.push(R)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class wu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bl=function(n){const e=Al(n);return cr.encodeByteArray(e,!0)},Si=function(n){return bl(n).replace(/\./g,"")},Ci=function(n){try{return cr.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(n){return Rl(void 0,n)}function Rl(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Tu(t)||(n[t]=Rl(n[t],e[t]));return n}function Tu(n){return n!=="__proto__"}/**
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
 */function Su(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Cu=()=>Su().__FIREBASE_DEFAULTS__,Au=()=>{if(typeof process>"u"||typeof Zo>"u")return;const n=Zo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},bu=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ci(n[1]);return e&&JSON.parse(e)},hr=()=>{try{return vu()||Cu()||Au()||bu()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},kl=n=>hr()?.emulatorHosts?.[n],Nl=n=>{const e=kl(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Pl=()=>hr()?.config,Ol=n=>hr()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function Dt(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function dr(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Dl(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Si(JSON.stringify(t)),Si(JSON.stringify(a)),""].join(".")}const kn={};function Ru(){const n={prod:[],emulator:[]};for(const e of Object.keys(kn))kn[e]?n.emulator.push(e):n.prod.push(e);return n}function ku(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let ea=!1;function fr(n,e){if(typeof window>"u"||typeof document>"u"||!Dt(window.location.host)||kn[n]===e||kn[n]||ea)return;kn[n]=e;function t(C){return`__firebase__banner__${C}`}const i="__firebase__banner",o=Ru().prod.length>0;function a(){const C=document.getElementById(i);C&&C.remove()}function h(C){C.style.display="flex",C.style.background="#7faaf0",C.style.position="fixed",C.style.bottom="5px",C.style.left="5px",C.style.padding=".5em",C.style.borderRadius="5px",C.style.alignItems="center"}function d(C,k){C.setAttribute("width","24"),C.setAttribute("id",k),C.setAttribute("height","24"),C.setAttribute("viewBox","0 0 24 24"),C.setAttribute("fill","none"),C.style.marginLeft="-6px"}function f(){const C=document.createElement("span");return C.style.cursor="pointer",C.style.marginLeft="16px",C.style.fontSize="24px",C.innerHTML=" &times;",C.onclick=()=>{ea=!0,a()},C}function E(C,k){C.setAttribute("id",k),C.innerText="Learn more",C.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",C.setAttribute("target","__blank"),C.style.paddingLeft="5px",C.style.textDecoration="underline"}function I(){const C=ku(i),k=t("text"),R=document.getElementById(k)||document.createElement("span"),O=t("learnmore"),D=document.getElementById(O)||document.createElement("a"),ne=t("preprendIcon"),X=document.getElementById(ne)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(C.created){const se=C.element;h(se),E(D,O);const be=f();d(X,ne),se.append(X,R,D,be),document.body.appendChild(se)}o?(R.innerText="Preview backend disconnected.",X.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(X.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",k)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",I):I()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pr(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(de())}function Nu(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Pu(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ml(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ou(){const n=de();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Du(){return Cl.NODE_ADMIN===!0}function Mu(){try{return typeof indexedDB=="object"}catch{return!1}}function Lu(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu="FirebaseError";class ze extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=xu,Object.setPrototypeOf(this,ze.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$n.prototype.create)}}class $n{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,o=this.errors[e],a=o?Uu(o,i):"Error",h=`${this.serviceName}: ${a} (${s}).`;return new ze(s,h,i)}}function Uu(n,e){return n.replace(Fu,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Fu=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(n){return JSON.parse(n)}function ie(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll=function(n){let e={},t={},i={},s="";try{const o=n.split(".");e=Fn(Ci(o[0])||""),t=Fn(Ci(o[1])||""),s=o[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},Vu=function(n){const e=Ll(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Bu=function(n){const e=Ll(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Xt(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function js(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ai(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function ct(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const o=n[s],a=e[s];if(ta(o)&&ta(a)){if(!ct(o,a))return!1}else if(o!==a)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function ta(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let I=0;I<16;I++)i[I]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let I=0;I<16;I++)i[I]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let I=16;I<80;I++){const C=i[I-3]^i[I-8]^i[I-14]^i[I-16];i[I]=(C<<1|C>>>31)&4294967295}let s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],h=this.chain_[3],d=this.chain_[4],f,E;for(let I=0;I<80;I++){I<40?I<20?(f=h^o&(a^h),E=1518500249):(f=o^a^h,E=1859775393):I<60?(f=o&a|h&(o|a),E=2400959708):(f=o^a^h,E=3395469782);const C=(s<<5|s>>>27)+f+d+E+i[I]&4294967295;d=h,h=a,a=(o<<30|o>>>2)&4294967295,o=s,s=C}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+h&4294967295,this.chain_[4]=this.chain_[4]+d&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const o=this.buf_;let a=this.inbuf_;for(;s<t;){if(a===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(o[a]=e.charCodeAt(s),++a,++s,a===this.blockSize){this.compress_(o),a=0;break}}else for(;s<t;)if(o[a]=e[s],++a,++s,a===this.blockSize){this.compress_(o),a=0;break}}this.inbuf_=a,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let o=24;o>=0;o-=8)e[i]=this.chain_[s]>>o&255,++i;return e}}function Wu(n,e){const t=new Hu(n,e);return t.subscribe.bind(t)}class Hu{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");$u(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=Cs),s.error===void 0&&(s.error=Cs),s.complete===void 0&&(s.complete=Cs);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $u(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Cs(){}function Gu(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const o=s-55296;i++,b(i<n.length,"Surrogate pair missing trail surrogate.");const a=n.charCodeAt(i)-56320;s=65536+(o<<10)+a}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Hi=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function ft(n){return n&&n._delegate?n._delegate:n}class ht{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const vt="[DEFAULT]";/**
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
 */class qu{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new ur;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),i=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Yu(e))try{this.getOrInitializeService({instanceIdentifier:vt})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:s});i.resolve(o)}catch{}}}}clearInstance(e=vt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vt){return this.instances.has(e)}getOptions(e=vt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[o,a]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(o);i===h&&a.resolve(s)}return s}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(i)??new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Ku(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=vt){return this.component?this.component.multipleInstances?e:vt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ku(n){return n===vt?void 0:n}function Yu(n){return n.instantiationMode==="EAGER"}/**
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
 */class Ju{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new qu(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var B;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(B||(B={}));const Xu={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},Qu=B.INFO,Zu={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},ed=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=Zu[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $i{constructor(e){this.name=e,this._logLevel=Qu,this._logHandler=ed,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in B))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Xu[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...e),this._logHandler(this,B.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...e),this._logHandler(this,B.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,B.INFO,...e),this._logHandler(this,B.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,B.WARN,...e),this._logHandler(this,B.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...e),this._logHandler(this,B.ERROR,...e)}}const td=(n,e)=>e.some(t=>n instanceof t);let na,ia;function nd(){return na||(na=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function id(){return ia||(ia=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xl=new WeakMap,Ws=new WeakMap,Ul=new WeakMap,As=new WeakMap,gr=new WeakMap;function sd(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(ot(n.result)),s()},a=()=>{i(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&xl.set(t,n)}).catch(()=>{}),gr.set(e,n),e}function rd(n){if(Ws.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),s()},a=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Ws.set(n,e)}let Hs={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ws.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ul.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ot(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function od(n){Hs=n(Hs)}function ad(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(bs(this),e,...t);return Ul.set(i,e.sort?e.sort():[e]),ot(i)}:id().includes(n)?function(...e){return n.apply(bs(this),e),ot(xl.get(this))}:function(...e){return ot(n.apply(bs(this),e))}}function ld(n){return typeof n=="function"?ad(n):(n instanceof IDBTransaction&&rd(n),td(n,nd())?new Proxy(n,Hs):n)}function ot(n){if(n instanceof IDBRequest)return sd(n);if(As.has(n))return As.get(n);const e=ld(n);return e!==n&&(As.set(n,e),gr.set(e,n)),e}const bs=n=>gr.get(n);function cd(n,e,{blocked:t,upgrade:i,blocking:s,terminated:o}={}){const a=indexedDB.open(n,e),h=ot(a);return i&&a.addEventListener("upgradeneeded",d=>{i(ot(a.result),d.oldVersion,d.newVersion,ot(a.transaction),d)}),t&&a.addEventListener("blocked",d=>t(d.oldVersion,d.newVersion,d)),h.then(d=>{o&&d.addEventListener("close",()=>o()),s&&d.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),h}const hd=["get","getKey","getAll","getAllKeys","count"],ud=["put","add","delete","clear"],Rs=new Map;function sa(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Rs.get(e))return Rs.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=ud.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||hd.includes(t)))return;const o=async function(a,...h){const d=this.transaction(a,s?"readwrite":"readonly");let f=d.store;return i&&(f=f.index(h.shift())),(await Promise.all([f[t](...h),s&&d.done]))[0]};return Rs.set(e,o),o}od(n=>({...n,get:(e,t,i)=>sa(e,t)||n.get(e,t,i),has:(e,t)=>!!sa(e,t)||n.has(e,t)}));/**
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
 */class dd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(fd(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function fd(n){return n.getComponent()?.type==="VERSION"}const $s="@firebase/app",ra="0.14.3";/**
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
 */const We=new $i("@firebase/app"),pd="@firebase/app-compat",gd="@firebase/analytics-compat",_d="@firebase/analytics",md="@firebase/app-check-compat",yd="@firebase/app-check",vd="@firebase/auth",Id="@firebase/auth-compat",wd="@firebase/database",Ed="@firebase/data-connect",Td="@firebase/database-compat",Sd="@firebase/functions",Cd="@firebase/functions-compat",Ad="@firebase/installations",bd="@firebase/installations-compat",Rd="@firebase/messaging",kd="@firebase/messaging-compat",Nd="@firebase/performance",Pd="@firebase/performance-compat",Od="@firebase/remote-config",Dd="@firebase/remote-config-compat",Md="@firebase/storage",Ld="@firebase/storage-compat",xd="@firebase/firestore",Ud="@firebase/ai",Fd="@firebase/firestore-compat",Vd="firebase",Bd="12.3.0";/**
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
 */const Gs="[DEFAULT]",jd={[$s]:"fire-core",[pd]:"fire-core-compat",[_d]:"fire-analytics",[gd]:"fire-analytics-compat",[yd]:"fire-app-check",[md]:"fire-app-check-compat",[vd]:"fire-auth",[Id]:"fire-auth-compat",[wd]:"fire-rtdb",[Ed]:"fire-data-connect",[Td]:"fire-rtdb-compat",[Sd]:"fire-fn",[Cd]:"fire-fn-compat",[Ad]:"fire-iid",[bd]:"fire-iid-compat",[Rd]:"fire-fcm",[kd]:"fire-fcm-compat",[Nd]:"fire-perf",[Pd]:"fire-perf-compat",[Od]:"fire-rc",[Dd]:"fire-rc-compat",[Md]:"fire-gcs",[Ld]:"fire-gcs-compat",[xd]:"fire-fst",[Fd]:"fire-fst-compat",[Ud]:"fire-vertex","fire-js":"fire-js",[Vd]:"fire-js-all"};/**
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
 */const bi=new Map,Wd=new Map,zs=new Map;function oa(n,e){try{n.container.addComponent(e)}catch(t){We.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function bt(n){const e=n.name;if(zs.has(e))return We.debug(`There were multiple attempts to register component ${e}.`),!1;zs.set(e,n);for(const t of bi.values())oa(t,n);for(const t of Wd.values())oa(t,n);return!0}function Gi(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function we(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Hd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},at=new $n("app","Firebase",Hd);/**
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
 */class $d{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ht("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw at.create("app-deleted",{appName:this._name})}}/**
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
 */const Mt=Bd;function Fl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i={name:Gs,automaticDataCollectionEnabled:!0,...e},s=i.name;if(typeof s!="string"||!s)throw at.create("bad-app-name",{appName:String(s)});if(t||(t=Pl()),!t)throw at.create("no-options");const o=bi.get(s);if(o){if(ct(t,o.options)&&ct(i,o.config))return o;throw at.create("duplicate-app",{appName:s})}const a=new Ju(s);for(const d of zs.values())a.addComponent(d);const h=new $d(t,i,a);return bi.set(s,h),h}function _r(n=Gs){const e=bi.get(n);if(!e&&n===Gs&&Pl())return Fl();if(!e)throw at.create("no-app",{appName:n});return e}function Me(n,e,t){let i=jd[n]??n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),We.warn(a.join(" "));return}bt(new ht(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Gd="firebase-heartbeat-database",zd=1,Vn="firebase-heartbeat-store";let ks=null;function Vl(){return ks||(ks=cd(Gd,zd,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Vn)}catch(t){console.warn(t)}}}}).catch(n=>{throw at.create("idb-open",{originalErrorMessage:n.message})})),ks}async function qd(n){try{const t=(await Vl()).transaction(Vn),i=await t.objectStore(Vn).get(Bl(n));return await t.done,i}catch(e){if(e instanceof ze)We.warn(e.message);else{const t=at.create("idb-get",{originalErrorMessage:e?.message});We.warn(t.message)}}}async function aa(n,e){try{const i=(await Vl()).transaction(Vn,"readwrite");await i.objectStore(Vn).put(e,Bl(n)),await i.done}catch(t){if(t instanceof ze)We.warn(t.message);else{const i=at.create("idb-set",{originalErrorMessage:t?.message});We.warn(i.message)}}}function Bl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Kd=1024,Yd=30;class Jd{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Qd(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=la();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats.length>Yd){const s=Zd(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){We.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=la(),{heartbeatsToSend:t,unsentEntries:i}=Xd(this._heartbeatsCache.heartbeats),s=Si(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return We.warn(e),""}}}function la(){return new Date().toISOString().substring(0,10)}function Xd(n,e=Kd){const t=[];let i=n.slice();for(const s of n){const o=t.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),ca(t)>e){o.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),ca(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Qd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Mu()?Lu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await qd(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return aa(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return aa(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ca(n){return Si(JSON.stringify({version:2,heartbeats:n})).length}function Zd(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
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
 */function ef(n){bt(new ht("platform-logger",e=>new dd(e),"PRIVATE")),bt(new ht("heartbeat",e=>new Jd(e),"PRIVATE")),Me($s,ra,n),Me($s,ra,"esm2020"),Me("fire-js","")}ef("");var tf="firebase",nf="12.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Me(tf,nf,"app");var ha=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mr;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(y,p){function _(){}_.prototype=p.prototype,y.F=p.prototype,y.prototype=new _,y.prototype.constructor=y,y.D=function(v,m,T){for(var g=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)g[fe-2]=arguments[fe];return p.prototype[m].apply(v,g)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,t),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(y,p,_){_||(_=0);const v=Array(16);if(typeof p=="string")for(var m=0;m<16;++m)v[m]=p.charCodeAt(_++)|p.charCodeAt(_++)<<8|p.charCodeAt(_++)<<16|p.charCodeAt(_++)<<24;else for(m=0;m<16;++m)v[m]=p[_++]|p[_++]<<8|p[_++]<<16|p[_++]<<24;p=y.g[0],_=y.g[1],m=y.g[2];let T=y.g[3],g;g=p+(T^_&(m^T))+v[0]+3614090360&4294967295,p=_+(g<<7&4294967295|g>>>25),g=T+(m^p&(_^m))+v[1]+3905402710&4294967295,T=p+(g<<12&4294967295|g>>>20),g=m+(_^T&(p^_))+v[2]+606105819&4294967295,m=T+(g<<17&4294967295|g>>>15),g=_+(p^m&(T^p))+v[3]+3250441966&4294967295,_=m+(g<<22&4294967295|g>>>10),g=p+(T^_&(m^T))+v[4]+4118548399&4294967295,p=_+(g<<7&4294967295|g>>>25),g=T+(m^p&(_^m))+v[5]+1200080426&4294967295,T=p+(g<<12&4294967295|g>>>20),g=m+(_^T&(p^_))+v[6]+2821735955&4294967295,m=T+(g<<17&4294967295|g>>>15),g=_+(p^m&(T^p))+v[7]+4249261313&4294967295,_=m+(g<<22&4294967295|g>>>10),g=p+(T^_&(m^T))+v[8]+1770035416&4294967295,p=_+(g<<7&4294967295|g>>>25),g=T+(m^p&(_^m))+v[9]+2336552879&4294967295,T=p+(g<<12&4294967295|g>>>20),g=m+(_^T&(p^_))+v[10]+4294925233&4294967295,m=T+(g<<17&4294967295|g>>>15),g=_+(p^m&(T^p))+v[11]+2304563134&4294967295,_=m+(g<<22&4294967295|g>>>10),g=p+(T^_&(m^T))+v[12]+1804603682&4294967295,p=_+(g<<7&4294967295|g>>>25),g=T+(m^p&(_^m))+v[13]+4254626195&4294967295,T=p+(g<<12&4294967295|g>>>20),g=m+(_^T&(p^_))+v[14]+2792965006&4294967295,m=T+(g<<17&4294967295|g>>>15),g=_+(p^m&(T^p))+v[15]+1236535329&4294967295,_=m+(g<<22&4294967295|g>>>10),g=p+(m^T&(_^m))+v[1]+4129170786&4294967295,p=_+(g<<5&4294967295|g>>>27),g=T+(_^m&(p^_))+v[6]+3225465664&4294967295,T=p+(g<<9&4294967295|g>>>23),g=m+(p^_&(T^p))+v[11]+643717713&4294967295,m=T+(g<<14&4294967295|g>>>18),g=_+(T^p&(m^T))+v[0]+3921069994&4294967295,_=m+(g<<20&4294967295|g>>>12),g=p+(m^T&(_^m))+v[5]+3593408605&4294967295,p=_+(g<<5&4294967295|g>>>27),g=T+(_^m&(p^_))+v[10]+38016083&4294967295,T=p+(g<<9&4294967295|g>>>23),g=m+(p^_&(T^p))+v[15]+3634488961&4294967295,m=T+(g<<14&4294967295|g>>>18),g=_+(T^p&(m^T))+v[4]+3889429448&4294967295,_=m+(g<<20&4294967295|g>>>12),g=p+(m^T&(_^m))+v[9]+568446438&4294967295,p=_+(g<<5&4294967295|g>>>27),g=T+(_^m&(p^_))+v[14]+3275163606&4294967295,T=p+(g<<9&4294967295|g>>>23),g=m+(p^_&(T^p))+v[3]+4107603335&4294967295,m=T+(g<<14&4294967295|g>>>18),g=_+(T^p&(m^T))+v[8]+1163531501&4294967295,_=m+(g<<20&4294967295|g>>>12),g=p+(m^T&(_^m))+v[13]+2850285829&4294967295,p=_+(g<<5&4294967295|g>>>27),g=T+(_^m&(p^_))+v[2]+4243563512&4294967295,T=p+(g<<9&4294967295|g>>>23),g=m+(p^_&(T^p))+v[7]+1735328473&4294967295,m=T+(g<<14&4294967295|g>>>18),g=_+(T^p&(m^T))+v[12]+2368359562&4294967295,_=m+(g<<20&4294967295|g>>>12),g=p+(_^m^T)+v[5]+4294588738&4294967295,p=_+(g<<4&4294967295|g>>>28),g=T+(p^_^m)+v[8]+2272392833&4294967295,T=p+(g<<11&4294967295|g>>>21),g=m+(T^p^_)+v[11]+1839030562&4294967295,m=T+(g<<16&4294967295|g>>>16),g=_+(m^T^p)+v[14]+4259657740&4294967295,_=m+(g<<23&4294967295|g>>>9),g=p+(_^m^T)+v[1]+2763975236&4294967295,p=_+(g<<4&4294967295|g>>>28),g=T+(p^_^m)+v[4]+1272893353&4294967295,T=p+(g<<11&4294967295|g>>>21),g=m+(T^p^_)+v[7]+4139469664&4294967295,m=T+(g<<16&4294967295|g>>>16),g=_+(m^T^p)+v[10]+3200236656&4294967295,_=m+(g<<23&4294967295|g>>>9),g=p+(_^m^T)+v[13]+681279174&4294967295,p=_+(g<<4&4294967295|g>>>28),g=T+(p^_^m)+v[0]+3936430074&4294967295,T=p+(g<<11&4294967295|g>>>21),g=m+(T^p^_)+v[3]+3572445317&4294967295,m=T+(g<<16&4294967295|g>>>16),g=_+(m^T^p)+v[6]+76029189&4294967295,_=m+(g<<23&4294967295|g>>>9),g=p+(_^m^T)+v[9]+3654602809&4294967295,p=_+(g<<4&4294967295|g>>>28),g=T+(p^_^m)+v[12]+3873151461&4294967295,T=p+(g<<11&4294967295|g>>>21),g=m+(T^p^_)+v[15]+530742520&4294967295,m=T+(g<<16&4294967295|g>>>16),g=_+(m^T^p)+v[2]+3299628645&4294967295,_=m+(g<<23&4294967295|g>>>9),g=p+(m^(_|~T))+v[0]+4096336452&4294967295,p=_+(g<<6&4294967295|g>>>26),g=T+(_^(p|~m))+v[7]+1126891415&4294967295,T=p+(g<<10&4294967295|g>>>22),g=m+(p^(T|~_))+v[14]+2878612391&4294967295,m=T+(g<<15&4294967295|g>>>17),g=_+(T^(m|~p))+v[5]+4237533241&4294967295,_=m+(g<<21&4294967295|g>>>11),g=p+(m^(_|~T))+v[12]+1700485571&4294967295,p=_+(g<<6&4294967295|g>>>26),g=T+(_^(p|~m))+v[3]+2399980690&4294967295,T=p+(g<<10&4294967295|g>>>22),g=m+(p^(T|~_))+v[10]+4293915773&4294967295,m=T+(g<<15&4294967295|g>>>17),g=_+(T^(m|~p))+v[1]+2240044497&4294967295,_=m+(g<<21&4294967295|g>>>11),g=p+(m^(_|~T))+v[8]+1873313359&4294967295,p=_+(g<<6&4294967295|g>>>26),g=T+(_^(p|~m))+v[15]+4264355552&4294967295,T=p+(g<<10&4294967295|g>>>22),g=m+(p^(T|~_))+v[6]+2734768916&4294967295,m=T+(g<<15&4294967295|g>>>17),g=_+(T^(m|~p))+v[13]+1309151649&4294967295,_=m+(g<<21&4294967295|g>>>11),g=p+(m^(_|~T))+v[4]+4149444226&4294967295,p=_+(g<<6&4294967295|g>>>26),g=T+(_^(p|~m))+v[11]+3174756917&4294967295,T=p+(g<<10&4294967295|g>>>22),g=m+(p^(T|~_))+v[2]+718787259&4294967295,m=T+(g<<15&4294967295|g>>>17),g=_+(T^(m|~p))+v[9]+3951481745&4294967295,y.g[0]=y.g[0]+p&4294967295,y.g[1]=y.g[1]+(m+(g<<21&4294967295|g>>>11))&4294967295,y.g[2]=y.g[2]+m&4294967295,y.g[3]=y.g[3]+T&4294967295}i.prototype.v=function(y,p){p===void 0&&(p=y.length);const _=p-this.blockSize,v=this.C;let m=this.h,T=0;for(;T<p;){if(m==0)for(;T<=_;)s(this,y,T),T+=this.blockSize;if(typeof y=="string"){for(;T<p;)if(v[m++]=y.charCodeAt(T++),m==this.blockSize){s(this,v),m=0;break}}else for(;T<p;)if(v[m++]=y[T++],m==this.blockSize){s(this,v),m=0;break}}this.h=m,this.o+=p},i.prototype.A=function(){var y=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);y[0]=128;for(var p=1;p<y.length-8;++p)y[p]=0;p=this.o*8;for(var _=y.length-8;_<y.length;++_)y[_]=p&255,p/=256;for(this.v(y),y=Array(16),p=0,_=0;_<4;++_)for(let v=0;v<32;v+=8)y[p++]=this.g[_]>>>v&255;return y};function o(y,p){var _=h;return Object.prototype.hasOwnProperty.call(_,y)?_[y]:_[y]=p(y)}function a(y,p){this.h=p;const _=[];let v=!0;for(let m=y.length-1;m>=0;m--){const T=y[m]|0;v&&T==p||(_[m]=T,v=!1)}this.g=_}var h={};function d(y){return-128<=y&&y<128?o(y,function(p){return new a([p|0],p<0?-1:0)}):new a([y|0],y<0?-1:0)}function f(y){if(isNaN(y)||!isFinite(y))return I;if(y<0)return D(f(-y));const p=[];let _=1;for(let v=0;y>=_;v++)p[v]=y/_|0,_*=4294967296;return new a(p,0)}function E(y,p){if(y.length==0)throw Error("number format error: empty string");if(p=p||10,p<2||36<p)throw Error("radix out of range: "+p);if(y.charAt(0)=="-")return D(E(y.substring(1),p));if(y.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=f(Math.pow(p,8));let v=I;for(let T=0;T<y.length;T+=8){var m=Math.min(8,y.length-T);const g=parseInt(y.substring(T,T+m),p);m<8?(m=f(Math.pow(p,m)),v=v.j(m).add(f(g))):(v=v.j(_),v=v.add(f(g)))}return v}var I=d(0),C=d(1),k=d(16777216);n=a.prototype,n.m=function(){if(O(this))return-D(this).m();let y=0,p=1;for(let _=0;_<this.g.length;_++){const v=this.i(_);y+=(v>=0?v:4294967296+v)*p,p*=4294967296}return y},n.toString=function(y){if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(R(this))return"0";if(O(this))return"-"+D(this).toString(y);const p=f(Math.pow(y,6));var _=this;let v="";for(;;){const m=be(_,p).g;_=ne(_,m.j(p));let T=((_.g.length>0?_.g[0]:_.h)>>>0).toString(y);if(_=m,R(_))return T+v;for(;T.length<6;)T="0"+T;v=T+v}},n.i=function(y){return y<0?0:y<this.g.length?this.g[y]:this.h};function R(y){if(y.h!=0)return!1;for(let p=0;p<y.g.length;p++)if(y.g[p]!=0)return!1;return!0}function O(y){return y.h==-1}n.l=function(y){return y=ne(this,y),O(y)?-1:R(y)?0:1};function D(y){const p=y.g.length,_=[];for(let v=0;v<p;v++)_[v]=~y.g[v];return new a(_,~y.h).add(C)}n.abs=function(){return O(this)?D(this):this},n.add=function(y){const p=Math.max(this.g.length,y.g.length),_=[];let v=0;for(let m=0;m<=p;m++){let T=v+(this.i(m)&65535)+(y.i(m)&65535),g=(T>>>16)+(this.i(m)>>>16)+(y.i(m)>>>16);v=g>>>16,T&=65535,g&=65535,_[m]=g<<16|T}return new a(_,_[_.length-1]&-2147483648?-1:0)};function ne(y,p){return y.add(D(p))}n.j=function(y){if(R(this)||R(y))return I;if(O(this))return O(y)?D(this).j(D(y)):D(D(this).j(y));if(O(y))return D(this.j(D(y)));if(this.l(k)<0&&y.l(k)<0)return f(this.m()*y.m());const p=this.g.length+y.g.length,_=[];for(var v=0;v<2*p;v++)_[v]=0;for(v=0;v<this.g.length;v++)for(let m=0;m<y.g.length;m++){const T=this.i(v)>>>16,g=this.i(v)&65535,fe=y.i(m)>>>16,pt=y.i(m)&65535;_[2*v+2*m]+=g*pt,X(_,2*v+2*m),_[2*v+2*m+1]+=T*pt,X(_,2*v+2*m+1),_[2*v+2*m+1]+=g*fe,X(_,2*v+2*m+1),_[2*v+2*m+2]+=T*fe,X(_,2*v+2*m+2)}for(y=0;y<p;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=p;y<2*p;y++)_[y]=0;return new a(_,0)};function X(y,p){for(;(y[p]&65535)!=y[p];)y[p+1]+=y[p]>>>16,y[p]&=65535,p++}function se(y,p){this.g=y,this.h=p}function be(y,p){if(R(p))throw Error("division by zero");if(R(y))return new se(I,I);if(O(y))return p=be(D(y),p),new se(D(p.g),D(p.h));if(O(p))return p=be(y,D(p)),new se(D(p.g),p.h);if(y.g.length>30){if(O(y)||O(p))throw Error("slowDivide_ only works with positive integers.");for(var _=C,v=p;v.l(y)<=0;)_=Ke(_),v=Ke(v);var m=_e(_,1),T=_e(v,1);for(v=_e(v,2),_=_e(_,2);!R(v);){var g=T.add(v);g.l(y)<=0&&(m=m.add(_),T=g),v=_e(v,1),_=_e(_,1)}return p=ne(y,m.j(p)),new se(m,p)}for(m=I;y.l(p)>=0;){for(_=Math.max(1,Math.floor(y.m()/p.m())),v=Math.ceil(Math.log(_)/Math.LN2),v=v<=48?1:Math.pow(2,v-48),T=f(_),g=T.j(p);O(g)||g.l(y)>0;)_-=v,T=f(_),g=T.j(p);R(T)&&(T=C),m=m.add(T),y=ne(y,g)}return new se(m,y)}n.B=function(y){return be(this,y).h},n.and=function(y){const p=Math.max(this.g.length,y.g.length),_=[];for(let v=0;v<p;v++)_[v]=this.i(v)&y.i(v);return new a(_,this.h&y.h)},n.or=function(y){const p=Math.max(this.g.length,y.g.length),_=[];for(let v=0;v<p;v++)_[v]=this.i(v)|y.i(v);return new a(_,this.h|y.h)},n.xor=function(y){const p=Math.max(this.g.length,y.g.length),_=[];for(let v=0;v<p;v++)_[v]=this.i(v)^y.i(v);return new a(_,this.h^y.h)};function Ke(y){const p=y.g.length+1,_=[];for(let v=0;v<p;v++)_[v]=y.i(v)<<1|y.i(v-1)>>>31;return new a(_,y.h)}function _e(y,p){const _=p>>5;p%=32;const v=y.g.length-_,m=[];for(let T=0;T<v;T++)m[T]=p>0?y.i(T+_)>>>p|y.i(T+_+1)<<32-p:y.i(T+_);return new a(m,y.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=E,mr=a}).apply(typeof ha<"u"?ha:typeof self<"u"?self:typeof window<"u"?window:{});var fi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var n,e=Object.defineProperty;function t(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof fi=="object"&&fi];for(var l=0;l<r.length;++l){var c=r[l];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var i=t(this);function s(r,l){if(l)e:{var c=i;r=r.split(".");for(var u=0;u<r.length-1;u++){var w=r[u];if(!(w in c))break e;c=c[w]}r=r[r.length-1],u=c[r],l=l(u),l!=u&&l!=null&&e(c,r,{configurable:!0,writable:!0,value:l})}}s("Symbol.dispose",function(r){return r||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(r){return r||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(r){return r||function(l){var c=[],u;for(u in l)Object.prototype.hasOwnProperty.call(l,u)&&c.push([u,l[u]]);return c}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function h(r){var l=typeof r;return l=="object"&&r!=null||l=="function"}function d(r,l,c){return r.call.apply(r.bind,arguments)}function f(r,l,c){return f=d,f.apply(null,arguments)}function E(r,l){var c=Array.prototype.slice.call(arguments,1);return function(){var u=c.slice();return u.push.apply(u,arguments),r.apply(this,u)}}function I(r,l){function c(){}c.prototype=l.prototype,r.Z=l.prototype,r.prototype=new c,r.prototype.constructor=r,r.Ob=function(u,w,S){for(var A=Array(arguments.length-2),P=2;P<arguments.length;P++)A[P-2]=arguments[P];return l.prototype[w].apply(u,A)}}var C=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?r=>r&&AsyncContext.Snapshot.wrap(r):r=>r;function k(r){const l=r.length;if(l>0){const c=Array(l);for(let u=0;u<l;u++)c[u]=r[u];return c}return[]}function R(r,l){for(let u=1;u<arguments.length;u++){const w=arguments[u];var c=typeof w;if(c=c!="object"?c:w?Array.isArray(w)?"array":c:"null",c=="array"||c=="object"&&typeof w.length=="number"){c=r.length||0;const S=w.length||0;r.length=c+S;for(let A=0;A<S;A++)r[c+A]=w[A]}else r.push(w)}}class O{constructor(l,c){this.i=l,this.j=c,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function D(r){a.setTimeout(()=>{throw r},0)}function ne(){var r=y;let l=null;return r.g&&(l=r.g,r.g=r.g.next,r.g||(r.h=null),l.next=null),l}class X{constructor(){this.h=this.g=null}add(l,c){const u=se.get();u.set(l,c),this.h?this.h.next=u:this.g=u,this.h=u}}var se=new O(()=>new be,r=>r.reset());class be{constructor(){this.next=this.g=this.h=null}set(l,c){this.h=l,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let Ke,_e=!1,y=new X,p=()=>{const r=Promise.resolve(void 0);Ke=()=>{r.then(_)}};function _(){for(var r;r=ne();){try{r.h.call(r.g)}catch(c){D(c)}var l=se;l.j(r),l.h<100&&(l.h++,r.next=l.g,l.g=r)}_e=!1}function v(){this.u=this.u,this.C=this.C}v.prototype.u=!1,v.prototype.dispose=function(){this.u||(this.u=!0,this.N())},v.prototype[Symbol.dispose]=function(){this.dispose()},v.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function m(r,l){this.type=r,this.g=this.target=l,this.defaultPrevented=!1}m.prototype.h=function(){this.defaultPrevented=!0};var T=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var r=!1,l=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const c=()=>{};a.addEventListener("test",c,l),a.removeEventListener("test",c,l)}catch{}return r})();function g(r){return/^[\s\xa0]*$/.test(r)}function fe(r,l){m.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r&&this.init(r,l)}I(fe,m),fe.prototype.init=function(r,l){const c=this.type=r.type,u=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;this.target=r.target||r.srcElement,this.g=l,l=r.relatedTarget,l||(c=="mouseover"?l=r.fromElement:c=="mouseout"&&(l=r.toElement)),this.relatedTarget=l,u?(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=r.pointerType,this.state=r.state,this.i=r,r.defaultPrevented&&fe.Z.h.call(this)},fe.prototype.h=function(){fe.Z.h.call(this);const r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var pt="closure_listenable_"+(Math.random()*1e6|0),Vh=0;function Bh(r,l,c,u,w){this.listener=r,this.proxy=null,this.src=l,this.type=c,this.capture=!!u,this.ha=w,this.key=++Vh,this.da=this.fa=!1}function ti(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function ni(r,l,c){for(const u in r)l.call(c,r[u],u,r)}function jh(r,l){for(const c in r)l.call(void 0,r[c],c,r)}function Zr(r){const l={};for(const c in r)l[c]=r[c];return l}const eo="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function to(r,l){let c,u;for(let w=1;w<arguments.length;w++){u=arguments[w];for(c in u)r[c]=u[c];for(let S=0;S<eo.length;S++)c=eo[S],Object.prototype.hasOwnProperty.call(u,c)&&(r[c]=u[c])}}function ii(r){this.src=r,this.g={},this.h=0}ii.prototype.add=function(r,l,c,u,w){const S=r.toString();r=this.g[S],r||(r=this.g[S]=[],this.h++);const A=es(r,l,u,w);return A>-1?(l=r[A],c||(l.fa=!1)):(l=new Bh(l,this.src,S,!!u,w),l.fa=c,r.push(l)),l};function Zi(r,l){const c=l.type;if(c in r.g){var u=r.g[c],w=Array.prototype.indexOf.call(u,l,void 0),S;(S=w>=0)&&Array.prototype.splice.call(u,w,1),S&&(ti(l),r.g[c].length==0&&(delete r.g[c],r.h--))}}function es(r,l,c,u){for(let w=0;w<r.length;++w){const S=r[w];if(!S.da&&S.listener==l&&S.capture==!!c&&S.ha==u)return w}return-1}var ts="closure_lm_"+(Math.random()*1e6|0),ns={};function no(r,l,c,u,w){if(Array.isArray(l)){for(let S=0;S<l.length;S++)no(r,l[S],c,u,w);return null}return c=ro(c),r&&r[pt]?r.J(l,c,h(u)?!!u.capture:!1,w):Wh(r,l,c,!1,u,w)}function Wh(r,l,c,u,w,S){if(!l)throw Error("Invalid event type");const A=h(w)?!!w.capture:!!w;let P=ss(r);if(P||(r[ts]=P=new ii(r)),c=P.add(l,c,u,A,S),c.proxy)return c;if(u=Hh(),c.proxy=u,u.src=r,u.listener=c,r.addEventListener)T||(w=A),w===void 0&&(w=!1),r.addEventListener(l.toString(),u,w);else if(r.attachEvent)r.attachEvent(so(l.toString()),u);else if(r.addListener&&r.removeListener)r.addListener(u);else throw Error("addEventListener and attachEvent are unavailable.");return c}function Hh(){function r(c){return l.call(r.src,r.listener,c)}const l=$h;return r}function io(r,l,c,u,w){if(Array.isArray(l))for(var S=0;S<l.length;S++)io(r,l[S],c,u,w);else u=h(u)?!!u.capture:!!u,c=ro(c),r&&r[pt]?(r=r.i,S=String(l).toString(),S in r.g&&(l=r.g[S],c=es(l,c,u,w),c>-1&&(ti(l[c]),Array.prototype.splice.call(l,c,1),l.length==0&&(delete r.g[S],r.h--)))):r&&(r=ss(r))&&(l=r.g[l.toString()],r=-1,l&&(r=es(l,c,u,w)),(c=r>-1?l[r]:null)&&is(c))}function is(r){if(typeof r!="number"&&r&&!r.da){var l=r.src;if(l&&l[pt])Zi(l.i,r);else{var c=r.type,u=r.proxy;l.removeEventListener?l.removeEventListener(c,u,r.capture):l.detachEvent?l.detachEvent(so(c),u):l.addListener&&l.removeListener&&l.removeListener(u),(c=ss(l))?(Zi(c,r),c.h==0&&(c.src=null,l[ts]=null)):ti(r)}}}function so(r){return r in ns?ns[r]:ns[r]="on"+r}function $h(r,l){if(r.da)r=!0;else{l=new fe(l,this);const c=r.listener,u=r.ha||r.src;r.fa&&is(r),r=c.call(u,l)}return r}function ss(r){return r=r[ts],r instanceof ii?r:null}var rs="__closure_events_fn_"+(Math.random()*1e9>>>0);function ro(r){return typeof r=="function"?r:(r[rs]||(r[rs]=function(l){return r.handleEvent(l)}),r[rs])}function re(){v.call(this),this.i=new ii(this),this.M=this,this.G=null}I(re,v),re.prototype[pt]=!0,re.prototype.removeEventListener=function(r,l,c,u){io(this,r,l,c,u)};function ce(r,l){var c,u=r.G;if(u)for(c=[];u;u=u.G)c.push(u);if(r=r.M,u=l.type||l,typeof l=="string")l=new m(l,r);else if(l instanceof m)l.target=l.target||r;else{var w=l;l=new m(u,r),to(l,w)}w=!0;let S,A;if(c)for(A=c.length-1;A>=0;A--)S=l.g=c[A],w=si(S,u,!0,l)&&w;if(S=l.g=r,w=si(S,u,!0,l)&&w,w=si(S,u,!1,l)&&w,c)for(A=0;A<c.length;A++)S=l.g=c[A],w=si(S,u,!1,l)&&w}re.prototype.N=function(){if(re.Z.N.call(this),this.i){var r=this.i;for(const l in r.g){const c=r.g[l];for(let u=0;u<c.length;u++)ti(c[u]);delete r.g[l],r.h--}}this.G=null},re.prototype.J=function(r,l,c,u){return this.i.add(String(r),l,!1,c,u)},re.prototype.K=function(r,l,c,u){return this.i.add(String(r),l,!0,c,u)};function si(r,l,c,u){if(l=r.i.g[String(l)],!l)return!0;l=l.concat();let w=!0;for(let S=0;S<l.length;++S){const A=l[S];if(A&&!A.da&&A.capture==c){const P=A.listener,J=A.ha||A.src;A.fa&&Zi(r.i,A),w=P.call(J,u)!==!1&&w}}return w&&!u.defaultPrevented}function Gh(r,l){if(typeof r!="function")if(r&&typeof r.handleEvent=="function")r=f(r.handleEvent,r);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:a.setTimeout(r,l||0)}function oo(r){r.g=Gh(()=>{r.g=null,r.i&&(r.i=!1,oo(r))},r.l);const l=r.h;r.h=null,r.m.apply(null,l)}class zh extends v{constructor(l,c){super(),this.m=l,this.l=c,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:oo(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function cn(r){v.call(this),this.h=r,this.g={}}I(cn,v);var ao=[];function lo(r){ni(r.g,function(l,c){this.g.hasOwnProperty(c)&&is(l)},r),r.g={}}cn.prototype.N=function(){cn.Z.N.call(this),lo(this)},cn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var os=a.JSON.stringify,qh=a.JSON.parse,Kh=class{stringify(r){return a.JSON.stringify(r,void 0)}parse(r){return a.JSON.parse(r,void 0)}};function co(){}function Yh(){}var hn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function as(){m.call(this,"d")}I(as,m);function ls(){m.call(this,"c")}I(ls,m);var Ut={},ho=null;function cs(){return ho=ho||new re}Ut.Ia="serverreachability";function uo(r){m.call(this,Ut.Ia,r)}I(uo,m);function un(r){const l=cs();ce(l,new uo(l))}Ut.STAT_EVENT="statevent";function fo(r,l){m.call(this,Ut.STAT_EVENT,r),this.stat=l}I(fo,m);function he(r){const l=cs();ce(l,new fo(l,r))}Ut.Ja="timingevent";function po(r,l){m.call(this,Ut.Ja,r),this.size=l}I(po,m);function dn(r,l){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){r()},l)}function fn(){this.g=!0}fn.prototype.ua=function(){this.g=!1};function Jh(r,l,c,u,w,S){r.info(function(){if(r.g)if(S){var A="",P=S.split("&");for(let H=0;H<P.length;H++){var J=P[H].split("=");if(J.length>1){const Q=J[0];J=J[1];const ke=Q.split("_");A=ke.length>=2&&ke[1]=="type"?A+(Q+"="+J+"&"):A+(Q+"=redacted&")}}}else A=null;else A=S;return"XMLHTTP REQ ("+u+") [attempt "+w+"]: "+l+`
`+c+`
`+A})}function Xh(r,l,c,u,w,S,A){r.info(function(){return"XMLHTTP RESP ("+u+") [ attempt "+w+"]: "+l+`
`+c+`
`+S+" "+A})}function Ft(r,l,c,u){r.info(function(){return"XMLHTTP TEXT ("+l+"): "+Zh(r,c)+(u?" "+u:"")})}function Qh(r,l){r.info(function(){return"TIMEOUT: "+l})}fn.prototype.info=function(){};function Zh(r,l){if(!r.g)return l;if(!l)return null;try{const S=JSON.parse(l);if(S){for(r=0;r<S.length;r++)if(Array.isArray(S[r])){var c=S[r];if(!(c.length<2)){var u=c[1];if(Array.isArray(u)&&!(u.length<1)){var w=u[0];if(w!="noop"&&w!="stop"&&w!="close")for(let A=1;A<u.length;A++)u[A]=""}}}}return os(S)}catch{return l}}var hs={NO_ERROR:0,TIMEOUT:8},eu={},go;function us(){}I(us,co),us.prototype.g=function(){return new XMLHttpRequest},go=new us;function pn(r){return encodeURIComponent(String(r))}function tu(r){var l=1;r=r.split(":");const c=[];for(;l>0&&r.length;)c.push(r.shift()),l--;return r.length&&c.push(r.join(":")),c}function Ye(r,l,c,u){this.j=r,this.i=l,this.l=c,this.S=u||1,this.V=new cn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new _o}function _o(){this.i=null,this.g="",this.h=!1}var mo={},ds={};function fs(r,l,c){r.M=1,r.A=oi(Re(l)),r.u=c,r.R=!0,yo(r,null)}function yo(r,l){r.F=Date.now(),ri(r),r.B=Re(r.A);var c=r.B,u=r.S;Array.isArray(u)||(u=[String(u)]),Po(c.i,"t",u),r.C=0,c=r.j.L,r.h=new _o,r.g=Yo(r.j,c?l:null,!r.u),r.P>0&&(r.O=new zh(f(r.Y,r,r.g),r.P)),l=r.V,c=r.g,u=r.ba;var w="readystatechange";Array.isArray(w)||(w&&(ao[0]=w.toString()),w=ao);for(let S=0;S<w.length;S++){const A=no(c,w[S],u||l.handleEvent,!1,l.h||l);if(!A)break;l.g[A.key]=A}l=r.J?Zr(r.J):{},r.u?(r.v||(r.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.B,r.v,r.u,l)):(r.v="GET",r.g.ea(r.B,r.v,null,l)),un(),Jh(r.i,r.v,r.B,r.l,r.S,r.u)}Ye.prototype.ba=function(r){r=r.target;const l=this.O;l&&Qe(r)==3?l.j():this.Y(r)},Ye.prototype.Y=function(r){try{if(r==this.g)e:{const P=Qe(this.g),J=this.g.ya(),H=this.g.ca();if(!(P<3)&&(P!=3||this.g&&(this.h.h||this.g.la()||Fo(this.g)))){this.K||P!=4||J==7||(J==8||H<=0?un(3):un(2)),ps(this);var l=this.g.ca();this.X=l;var c=nu(this);if(this.o=l==200,Xh(this.i,this.v,this.B,this.l,this.S,P,l),this.o){if(this.U&&!this.L){t:{if(this.g){var u,w=this.g;if((u=w.g?w.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(u)){var S=u;break t}}S=null}if(r=S)Ft(this.i,this.l,r,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,gs(this,r);else{this.o=!1,this.m=3,he(12),gt(this),gn(this);break e}}if(this.R){r=!0;let Q;for(;!this.K&&this.C<c.length;)if(Q=iu(this,c),Q==ds){P==4&&(this.m=4,he(14),r=!1),Ft(this.i,this.l,null,"[Incomplete Response]");break}else if(Q==mo){this.m=4,he(15),Ft(this.i,this.l,c,"[Invalid Chunk]"),r=!1;break}else Ft(this.i,this.l,Q,null),gs(this,Q);if(vo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),P!=4||c.length!=0||this.h.h||(this.m=1,he(16),r=!1),this.o=this.o&&r,!r)Ft(this.i,this.l,c,"[Invalid Chunked Response]"),gt(this),gn(this);else if(c.length>0&&!this.W){this.W=!0;var A=this.j;A.g==this&&A.aa&&!A.P&&(A.j.info("Great, no buffering proxy detected. Bytes received: "+c.length),Ts(A),A.P=!0,he(11))}}else Ft(this.i,this.l,c,null),gs(this,c);P==4&&gt(this),this.o&&!this.K&&(P==4?Go(this.j,this):(this.o=!1,ri(this)))}else mu(this.g),l==400&&c.indexOf("Unknown SID")>0?(this.m=3,he(12)):(this.m=0,he(13)),gt(this),gn(this)}}}catch{}finally{}};function nu(r){if(!vo(r))return r.g.la();const l=Fo(r.g);if(l==="")return"";let c="";const u=l.length,w=Qe(r.g)==4;if(!r.h.i){if(typeof TextDecoder>"u")return gt(r),gn(r),"";r.h.i=new a.TextDecoder}for(let S=0;S<u;S++)r.h.h=!0,c+=r.h.i.decode(l[S],{stream:!(w&&S==u-1)});return l.length=0,r.h.g+=c,r.C=0,r.h.g}function vo(r){return r.g?r.v=="GET"&&r.M!=2&&r.j.Aa:!1}function iu(r,l){var c=r.C,u=l.indexOf(`
`,c);return u==-1?ds:(c=Number(l.substring(c,u)),isNaN(c)?mo:(u+=1,u+c>l.length?ds:(l=l.slice(u,u+c),r.C=u+c,l)))}Ye.prototype.cancel=function(){this.K=!0,gt(this)};function ri(r){r.T=Date.now()+r.H,Io(r,r.H)}function Io(r,l){if(r.D!=null)throw Error("WatchDog timer not null");r.D=dn(f(r.aa,r),l)}function ps(r){r.D&&(a.clearTimeout(r.D),r.D=null)}Ye.prototype.aa=function(){this.D=null;const r=Date.now();r-this.T>=0?(Qh(this.i,this.B),this.M!=2&&(un(),he(17)),gt(this),this.m=2,gn(this)):Io(this,this.T-r)};function gn(r){r.j.I==0||r.K||Go(r.j,r)}function gt(r){ps(r);var l=r.O;l&&typeof l.dispose=="function"&&l.dispose(),r.O=null,lo(r.V),r.g&&(l=r.g,r.g=null,l.abort(),l.dispose())}function gs(r,l){try{var c=r.j;if(c.I!=0&&(c.g==r||_s(c.h,r))){if(!r.L&&_s(c.h,r)&&c.I==3){try{var u=c.Ba.g.parse(l)}catch{u=null}if(Array.isArray(u)&&u.length==3){var w=u;if(w[0]==0){e:if(!c.v){if(c.g)if(c.g.F+3e3<r.F)ui(c),ci(c);else break e;Es(c),he(18)}}else c.xa=w[1],0<c.xa-c.K&&w[2]<37500&&c.F&&c.A==0&&!c.C&&(c.C=dn(f(c.Va,c),6e3));To(c.h)<=1&&c.ta&&(c.ta=void 0)}else mt(c,11)}else if((r.L||c.g==r)&&ui(c),!g(l))for(w=c.Ba.g.parse(l),l=0;l<w.length;l++){let H=w[l];const Q=H[0];if(!(Q<=c.K))if(c.K=Q,H=H[1],c.I==2)if(H[0]=="c"){c.M=H[1],c.ba=H[2];const ke=H[3];ke!=null&&(c.ka=ke,c.j.info("VER="+c.ka));const yt=H[4];yt!=null&&(c.za=yt,c.j.info("SVER="+c.za));const Ze=H[5];Ze!=null&&typeof Ze=="number"&&Ze>0&&(u=1.5*Ze,c.O=u,c.j.info("backChannelRequestTimeoutMs_="+u)),u=c;const et=r.g;if(et){const di=et.g?et.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(di){var S=u.h;S.g||di.indexOf("spdy")==-1&&di.indexOf("quic")==-1&&di.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(ms(S,S.h),S.h=null))}if(u.G){const Ss=et.g?et.g.getResponseHeader("X-HTTP-Session-Id"):null;Ss&&(u.wa=Ss,$(u.J,u.G,Ss))}}c.I=3,c.l&&c.l.ra(),c.aa&&(c.T=Date.now()-r.F,c.j.info("Handshake RTT: "+c.T+"ms")),u=c;var A=r;if(u.na=Ko(u,u.L?u.ba:null,u.W),A.L){So(u.h,A);var P=A,J=u.O;J&&(P.H=J),P.D&&(ps(P),ri(P)),u.g=A}else Ho(u);c.i.length>0&&hi(c)}else H[0]!="stop"&&H[0]!="close"||mt(c,7);else c.I==3&&(H[0]=="stop"||H[0]=="close"?H[0]=="stop"?mt(c,7):ws(c):H[0]!="noop"&&c.l&&c.l.qa(H),c.A=0)}}un(4)}catch{}}var su=class{constructor(r,l){this.g=r,this.map=l}};function wo(r){this.l=r||10,a.PerformanceNavigationTiming?(r=a.performance.getEntriesByType("navigation"),r=r.length>0&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Eo(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function To(r){return r.h?1:r.g?r.g.size:0}function _s(r,l){return r.h?r.h==l:r.g?r.g.has(l):!1}function ms(r,l){r.g?r.g.add(l):r.h=l}function So(r,l){r.h&&r.h==l?r.h=null:r.g&&r.g.has(l)&&r.g.delete(l)}wo.prototype.cancel=function(){if(this.i=Co(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function Co(r){if(r.h!=null)return r.i.concat(r.h.G);if(r.g!=null&&r.g.size!==0){let l=r.i;for(const c of r.g.values())l=l.concat(c.G);return l}return k(r.i)}var Ao=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ru(r,l){if(r){r=r.split("&");for(let c=0;c<r.length;c++){const u=r[c].indexOf("=");let w,S=null;u>=0?(w=r[c].substring(0,u),S=r[c].substring(u+1)):w=r[c],l(w,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function Je(r){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;r instanceof Je?(this.l=r.l,_n(this,r.j),this.o=r.o,this.g=r.g,mn(this,r.u),this.h=r.h,ys(this,Oo(r.i)),this.m=r.m):r&&(l=String(r).match(Ao))?(this.l=!1,_n(this,l[1]||"",!0),this.o=yn(l[2]||""),this.g=yn(l[3]||"",!0),mn(this,l[4]),this.h=yn(l[5]||"",!0),ys(this,l[6]||"",!0),this.m=yn(l[7]||"")):(this.l=!1,this.i=new In(null,this.l))}Je.prototype.toString=function(){const r=[];var l=this.j;l&&r.push(vn(l,bo,!0),":");var c=this.g;return(c||l=="file")&&(r.push("//"),(l=this.o)&&r.push(vn(l,bo,!0),"@"),r.push(pn(c).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.u,c!=null&&r.push(":",String(c))),(c=this.h)&&(this.g&&c.charAt(0)!="/"&&r.push("/"),r.push(vn(c,c.charAt(0)=="/"?lu:au,!0))),(c=this.i.toString())&&r.push("?",c),(c=this.m)&&r.push("#",vn(c,hu)),r.join("")},Je.prototype.resolve=function(r){const l=Re(this);let c=!!r.j;c?_n(l,r.j):c=!!r.o,c?l.o=r.o:c=!!r.g,c?l.g=r.g:c=r.u!=null;var u=r.h;if(c)mn(l,r.u);else if(c=!!r.h){if(u.charAt(0)!="/")if(this.g&&!this.h)u="/"+u;else{var w=l.h.lastIndexOf("/");w!=-1&&(u=l.h.slice(0,w+1)+u)}if(w=u,w==".."||w==".")u="";else if(w.indexOf("./")!=-1||w.indexOf("/.")!=-1){u=w.lastIndexOf("/",0)==0,w=w.split("/");const S=[];for(let A=0;A<w.length;){const P=w[A++];P=="."?u&&A==w.length&&S.push(""):P==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),u&&A==w.length&&S.push("")):(S.push(P),u=!0)}u=S.join("/")}else u=w}return c?l.h=u:c=r.i.toString()!=="",c?ys(l,Oo(r.i)):c=!!r.m,c&&(l.m=r.m),l};function Re(r){return new Je(r)}function _n(r,l,c){r.j=c?yn(l,!0):l,r.j&&(r.j=r.j.replace(/:$/,""))}function mn(r,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);r.u=l}else r.u=null}function ys(r,l,c){l instanceof In?(r.i=l,uu(r.i,r.l)):(c||(l=vn(l,cu)),r.i=new In(l,r.l))}function $(r,l,c){r.i.set(l,c)}function oi(r){return $(r,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),r}function yn(r,l){return r?l?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function vn(r,l,c){return typeof r=="string"?(r=encodeURI(r).replace(l,ou),c&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function ou(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var bo=/[#\/\?@]/g,au=/[#\?:]/g,lu=/[#\?]/g,cu=/[#\?@]/g,hu=/#/g;function In(r,l){this.h=this.g=null,this.i=r||null,this.j=!!l}function _t(r){r.g||(r.g=new Map,r.h=0,r.i&&ru(r.i,function(l,c){r.add(decodeURIComponent(l.replace(/\+/g," ")),c)}))}n=In.prototype,n.add=function(r,l){_t(this),this.i=null,r=Vt(this,r);let c=this.g.get(r);return c||this.g.set(r,c=[]),c.push(l),this.h+=1,this};function Ro(r,l){_t(r),l=Vt(r,l),r.g.has(l)&&(r.i=null,r.h-=r.g.get(l).length,r.g.delete(l))}function ko(r,l){return _t(r),l=Vt(r,l),r.g.has(l)}n.forEach=function(r,l){_t(this),this.g.forEach(function(c,u){c.forEach(function(w){r.call(l,w,u,this)},this)},this)};function No(r,l){_t(r);let c=[];if(typeof l=="string")ko(r,l)&&(c=c.concat(r.g.get(Vt(r,l))));else for(r=Array.from(r.g.values()),l=0;l<r.length;l++)c=c.concat(r[l]);return c}n.set=function(r,l){return _t(this),this.i=null,r=Vt(this,r),ko(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[l]),this.h+=1,this},n.get=function(r,l){return r?(r=No(this,r),r.length>0?String(r[0]):l):l};function Po(r,l,c){Ro(r,l),c.length>0&&(r.i=null,r.g.set(Vt(r,l),k(c)),r.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],l=Array.from(this.g.keys());for(let u=0;u<l.length;u++){var c=l[u];const w=pn(c);c=No(this,c);for(let S=0;S<c.length;S++){let A=w;c[S]!==""&&(A+="="+pn(c[S])),r.push(A)}}return this.i=r.join("&")};function Oo(r){const l=new In;return l.i=r.i,r.g&&(l.g=new Map(r.g),l.h=r.h),l}function Vt(r,l){return l=String(l),r.j&&(l=l.toLowerCase()),l}function uu(r,l){l&&!r.j&&(_t(r),r.i=null,r.g.forEach(function(c,u){const w=u.toLowerCase();u!=w&&(Ro(this,u),Po(this,w,c))},r)),r.j=l}function du(r,l){const c=new fn;if(a.Image){const u=new Image;u.onload=E(Xe,c,"TestLoadImage: loaded",!0,l,u),u.onerror=E(Xe,c,"TestLoadImage: error",!1,l,u),u.onabort=E(Xe,c,"TestLoadImage: abort",!1,l,u),u.ontimeout=E(Xe,c,"TestLoadImage: timeout",!1,l,u),a.setTimeout(function(){u.ontimeout&&u.ontimeout()},1e4),u.src=r}else l(!1)}function fu(r,l){const c=new fn,u=new AbortController,w=setTimeout(()=>{u.abort(),Xe(c,"TestPingServer: timeout",!1,l)},1e4);fetch(r,{signal:u.signal}).then(S=>{clearTimeout(w),S.ok?Xe(c,"TestPingServer: ok",!0,l):Xe(c,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(w),Xe(c,"TestPingServer: error",!1,l)})}function Xe(r,l,c,u,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),u(c)}catch{}}function pu(){this.g=new Kh}function vs(r){this.i=r.Sb||null,this.h=r.ab||!1}I(vs,co),vs.prototype.g=function(){return new ai(this.i,this.h)};function ai(r,l){re.call(this),this.H=r,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}I(ai,re),n=ai.prototype,n.open=function(r,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=r,this.D=l,this.readyState=1,En(this)},n.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};r&&(l.body=r),(this.H||a).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,wn(this)),this.readyState=0},n.Pa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,En(this)),this.g&&(this.readyState=3,En(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Do(this)}else r.text().then(this.Oa.bind(this),this.ga.bind(this))};function Do(r){r.j.read().then(r.Ma.bind(r)).catch(r.ga.bind(r))}n.Ma=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var l=r.value?r.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!r.done}))&&(this.response=this.responseText+=l)}r.done?wn(this):En(this),this.readyState==3&&Do(this)}},n.Oa=function(r){this.g&&(this.response=this.responseText=r,wn(this))},n.Na=function(r){this.g&&(this.response=r,wn(this))},n.ga=function(){this.g&&wn(this)};function wn(r){r.readyState=4,r.l=null,r.j=null,r.B=null,En(r)}n.setRequestHeader=function(r,l){this.A.append(r,l)},n.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],l=this.h.entries();for(var c=l.next();!c.done;)c=c.value,r.push(c[0]+": "+c[1]),c=l.next();return r.join(`\r
`)};function En(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty(ai.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function Mo(r){let l="";return ni(r,function(c,u){l+=u,l+=":",l+=c,l+=`\r
`}),l}function Is(r,l,c){e:{for(u in c){var u=!1;break e}u=!0}u||(c=Mo(c),typeof r=="string"?c!=null&&pn(c):$(r,l,c))}function K(r){re.call(this),this.headers=new Map,this.L=r||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}I(K,re);var gu=/^https?$/i,_u=["POST","PUT"];n=K.prototype,n.Fa=function(r){this.H=r},n.ea=function(r,l,c,u){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);l=l?l.toUpperCase():"GET",this.D=r,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():go.g(),this.g.onreadystatechange=C(f(this.Ca,this));try{this.B=!0,this.g.open(l,String(r),!0),this.B=!1}catch(S){Lo(this,S);return}if(r=c||"",c=new Map(this.headers),u)if(Object.getPrototypeOf(u)===Object.prototype)for(var w in u)c.set(w,u[w]);else if(typeof u.keys=="function"&&typeof u.get=="function")for(const S of u.keys())c.set(S,u.get(S));else throw Error("Unknown input type for opt_headers: "+String(u));u=Array.from(c.keys()).find(S=>S.toLowerCase()=="content-type"),w=a.FormData&&r instanceof a.FormData,!(Array.prototype.indexOf.call(_u,l,void 0)>=0)||u||w||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,A]of c)this.g.setRequestHeader(S,A);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(r),this.v=!1}catch(S){Lo(this,S)}};function Lo(r,l){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=l,r.o=5,xo(r),li(r)}function xo(r){r.A||(r.A=!0,ce(r,"complete"),ce(r,"error"))}n.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=r||7,ce(this,"complete"),ce(this,"abort"),li(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),li(this,!0)),K.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Uo(this):this.Xa())},n.Xa=function(){Uo(this)};function Uo(r){if(r.h&&typeof o<"u"){if(r.v&&Qe(r)==4)setTimeout(r.Ca.bind(r),0);else if(ce(r,"readystatechange"),Qe(r)==4){r.h=!1;try{const S=r.ca();e:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var c;if(!(c=l)){var u;if(u=S===0){let A=String(r.D).match(Ao)[1]||null;!A&&a.self&&a.self.location&&(A=a.self.location.protocol.slice(0,-1)),u=!gu.test(A?A.toLowerCase():"")}c=u}if(c)ce(r,"complete"),ce(r,"success");else{r.o=6;try{var w=Qe(r)>2?r.g.statusText:""}catch{w=""}r.l=w+" ["+r.ca()+"]",xo(r)}}finally{li(r)}}}}function li(r,l){if(r.g){r.m&&(clearTimeout(r.m),r.m=null);const c=r.g;r.g=null,l||ce(r,"ready");try{c.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Qe(r){return r.g?r.g.readyState:0}n.ca=function(){try{return Qe(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(r){if(this.g){var l=this.g.responseText;return r&&l.indexOf(r)==0&&(l=l.substring(r.length)),qh(l)}};function Fo(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.F){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function mu(r){const l={};r=(r.g&&Qe(r)>=2&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let u=0;u<r.length;u++){if(g(r[u]))continue;var c=tu(r[u]);const w=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const S=l[w]||[];l[w]=S,S.push(c)}jh(l,function(u){return u.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Tn(r,l,c){return c&&c.internalChannelParams&&c.internalChannelParams[r]||l}function Vo(r){this.za=0,this.i=[],this.j=new fn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Tn("failFast",!1,r),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Tn("baseRetryDelayMs",5e3,r),this.Za=Tn("retryDelaySeedMs",1e4,r),this.Ta=Tn("forwardChannelMaxRetries",2,r),this.va=Tn("forwardChannelRequestTimeoutMs",2e4,r),this.ma=r&&r.xmlHttpFactory||void 0,this.Ua=r&&r.Rb||void 0,this.Aa=r&&r.useFetchStreams||!1,this.O=void 0,this.L=r&&r.supportsCrossDomainXhr||!1,this.M="",this.h=new wo(r&&r.concurrentRequestLimit),this.Ba=new pu,this.S=r&&r.fastHandshake||!1,this.R=r&&r.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=r&&r.Pb||!1,r&&r.ua&&this.j.ua(),r&&r.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&r&&r.detectBufferingProxy||!1,this.ia=void 0,r&&r.longPollingTimeout&&r.longPollingTimeout>0&&(this.ia=r.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Vo.prototype,n.ka=8,n.I=1,n.connect=function(r,l,c,u){he(0),this.W=r,this.H=l||{},c&&u!==void 0&&(this.H.OSID=c,this.H.OAID=u),this.F=this.X,this.J=Ko(this,null,this.W),hi(this)};function ws(r){if(Bo(r),r.I==3){var l=r.V++,c=Re(r.J);if($(c,"SID",r.M),$(c,"RID",l),$(c,"TYPE","terminate"),Sn(r,c),l=new Ye(r,r.j,l),l.M=2,l.A=oi(Re(c)),c=!1,a.navigator&&a.navigator.sendBeacon)try{c=a.navigator.sendBeacon(l.A.toString(),"")}catch{}!c&&a.Image&&(new Image().src=l.A,c=!0),c||(l.g=Yo(l.j,null),l.g.ea(l.A)),l.F=Date.now(),ri(l)}qo(r)}function ci(r){r.g&&(Ts(r),r.g.cancel(),r.g=null)}function Bo(r){ci(r),r.v&&(a.clearTimeout(r.v),r.v=null),ui(r),r.h.cancel(),r.m&&(typeof r.m=="number"&&a.clearTimeout(r.m),r.m=null)}function hi(r){if(!Eo(r.h)&&!r.m){r.m=!0;var l=r.Ea;Ke||p(),_e||(Ke(),_e=!0),y.add(l,r),r.D=0}}function yu(r,l){return To(r.h)>=r.h.j-(r.m?1:0)?!1:r.m?(r.i=l.G.concat(r.i),!0):r.I==1||r.I==2||r.D>=(r.Sa?0:r.Ta)?!1:(r.m=dn(f(r.Ea,r,l),zo(r,r.D)),r.D++,!0)}n.Ea=function(r){if(this.m)if(this.m=null,this.I==1){if(!r){this.V=Math.floor(Math.random()*1e5),r=this.V++;const w=new Ye(this,this.j,r);let S=this.o;if(this.U&&(S?(S=Zr(S),to(S,this.U)):S=this.U),this.u!==null||this.R||(w.J=S,S=null),this.S)e:{for(var l=0,c=0;c<this.i.length;c++){t:{var u=this.i[c];if("__data__"in u.map&&(u=u.map.__data__,typeof u=="string")){u=u.length;break t}u=void 0}if(u===void 0)break;if(l+=u,l>4096){l=c;break e}if(l===4096||c===this.i.length-1){l=c+1;break e}}l=1e3}else l=1e3;l=Wo(this,w,l),c=Re(this.J),$(c,"RID",r),$(c,"CVER",22),this.G&&$(c,"X-HTTP-Session-Id",this.G),Sn(this,c),S&&(this.R?l="headers="+pn(Mo(S))+"&"+l:this.u&&Is(c,this.u,S)),ms(this.h,w),this.Ra&&$(c,"TYPE","init"),this.S?($(c,"$req",l),$(c,"SID","null"),w.U=!0,fs(w,c,null)):fs(w,c,l),this.I=2}}else this.I==3&&(r?jo(this,r):this.i.length==0||Eo(this.h)||jo(this))};function jo(r,l){var c;l?c=l.l:c=r.V++;const u=Re(r.J);$(u,"SID",r.M),$(u,"RID",c),$(u,"AID",r.K),Sn(r,u),r.u&&r.o&&Is(u,r.u,r.o),c=new Ye(r,r.j,c,r.D+1),r.u===null&&(c.J=r.o),l&&(r.i=l.G.concat(r.i)),l=Wo(r,c,1e3),c.H=Math.round(r.va*.5)+Math.round(r.va*.5*Math.random()),ms(r.h,c),fs(c,u,l)}function Sn(r,l){r.H&&ni(r.H,function(c,u){$(l,u,c)}),r.l&&ni({},function(c,u){$(l,u,c)})}function Wo(r,l,c){c=Math.min(r.i.length,c);const u=r.l?f(r.l.Ka,r.l,r):null;e:{var w=r.i;let P=-1;for(;;){const J=["count="+c];P==-1?c>0?(P=w[0].g,J.push("ofs="+P)):P=0:J.push("ofs="+P);let H=!0;for(let Q=0;Q<c;Q++){var S=w[Q].g;const ke=w[Q].map;if(S-=P,S<0)P=Math.max(0,w[Q].g-100),H=!1;else try{S="req"+S+"_"||"";try{var A=ke instanceof Map?ke:Object.entries(ke);for(const[yt,Ze]of A){let et=Ze;h(Ze)&&(et=os(Ze)),J.push(S+yt+"="+encodeURIComponent(et))}}catch(yt){throw J.push(S+"type="+encodeURIComponent("_badmap")),yt}}catch{u&&u(ke)}}if(H){A=J.join("&");break e}}A=void 0}return r=r.i.splice(0,c),l.G=r,A}function Ho(r){if(!r.g&&!r.v){r.Y=1;var l=r.Da;Ke||p(),_e||(Ke(),_e=!0),y.add(l,r),r.A=0}}function Es(r){return r.g||r.v||r.A>=3?!1:(r.Y++,r.v=dn(f(r.Da,r),zo(r,r.A)),r.A++,!0)}n.Da=function(){if(this.v=null,$o(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var r=4*this.T;this.j.info("BP detection timer enabled: "+r),this.B=dn(f(this.Wa,this),r)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,he(10),ci(this),$o(this))};function Ts(r){r.B!=null&&(a.clearTimeout(r.B),r.B=null)}function $o(r){r.g=new Ye(r,r.j,"rpc",r.Y),r.u===null&&(r.g.J=r.o),r.g.P=0;var l=Re(r.na);$(l,"RID","rpc"),$(l,"SID",r.M),$(l,"AID",r.K),$(l,"CI",r.F?"0":"1"),!r.F&&r.ia&&$(l,"TO",r.ia),$(l,"TYPE","xmlhttp"),Sn(r,l),r.u&&r.o&&Is(l,r.u,r.o),r.O&&(r.g.H=r.O);var c=r.g;r=r.ba,c.M=1,c.A=oi(Re(l)),c.u=null,c.R=!0,yo(c,r)}n.Va=function(){this.C!=null&&(this.C=null,ci(this),Es(this),he(19))};function ui(r){r.C!=null&&(a.clearTimeout(r.C),r.C=null)}function Go(r,l){var c=null;if(r.g==l){ui(r),Ts(r),r.g=null;var u=2}else if(_s(r.h,l))c=l.G,So(r.h,l),u=1;else return;if(r.I!=0){if(l.o)if(u==1){c=l.u?l.u.length:0,l=Date.now()-l.F;var w=r.D;u=cs(),ce(u,new po(u,c)),hi(r)}else Ho(r);else if(w=l.m,w==3||w==0&&l.X>0||!(u==1&&yu(r,l)||u==2&&Es(r)))switch(c&&c.length>0&&(l=r.h,l.i=l.i.concat(c)),w){case 1:mt(r,5);break;case 4:mt(r,10);break;case 3:mt(r,6);break;default:mt(r,2)}}}function zo(r,l){let c=r.Qa+Math.floor(Math.random()*r.Za);return r.isActive()||(c*=2),c*l}function mt(r,l){if(r.j.info("Error code "+l),l==2){var c=f(r.bb,r),u=r.Ua;const w=!u;u=new Je(u||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||_n(u,"https"),oi(u),w?du(u.toString(),c):fu(u.toString(),c)}else he(2);r.I=0,r.l&&r.l.pa(l),qo(r),Bo(r)}n.bb=function(r){r?(this.j.info("Successfully pinged google.com"),he(2)):(this.j.info("Failed to ping google.com"),he(1))};function qo(r){if(r.I=0,r.ja=[],r.l){const l=Co(r.h);(l.length!=0||r.i.length!=0)&&(R(r.ja,l),R(r.ja,r.i),r.h.i.length=0,k(r.i),r.i.length=0),r.l.oa()}}function Ko(r,l,c){var u=c instanceof Je?Re(c):new Je(c);if(u.g!="")l&&(u.g=l+"."+u.g),mn(u,u.u);else{var w=a.location;u=w.protocol,l=l?l+"."+w.hostname:w.hostname,w=+w.port;const S=new Je(null);u&&_n(S,u),l&&(S.g=l),w&&mn(S,w),c&&(S.h=c),u=S}return c=r.G,l=r.wa,c&&l&&$(u,c,l),$(u,"VER",r.ka),Sn(r,u),u}function Yo(r,l,c){if(l&&!r.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=r.Aa&&!r.ma?new K(new vs({ab:c})):new K(r.ma),l.Fa(r.L),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Jo(){}n=Jo.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function me(r,l){re.call(this),this.g=new Vo(l),this.l=r,this.h=l&&l.messageUrlParams||null,r=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(r?r["X-WebChannel-Content-Type"]=l.messageContentType:r={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(r?r["X-WebChannel-Client-Profile"]=l.sa:r={"X-WebChannel-Client-Profile":l.sa}),this.g.U=r,(r=l&&l.Qb)&&!g(r)&&(this.g.u=r),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!g(l)&&(this.g.G=l,r=this.h,r!==null&&l in r&&(r=this.h,l in r&&delete r[l])),this.j=new Bt(this)}I(me,re),me.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},me.prototype.close=function(){ws(this.g)},me.prototype.o=function(r){var l=this.g;if(typeof r=="string"){var c={};c.__data__=r,r=c}else this.v&&(c={},c.__data__=os(r),r=c);l.i.push(new su(l.Ya++,r)),l.I==3&&hi(l)},me.prototype.N=function(){this.g.l=null,delete this.j,ws(this.g),delete this.g,me.Z.N.call(this)};function Xo(r){as.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var l=r.__sm__;if(l){e:{for(const c in l){r=c;break e}r=void 0}(this.i=r)&&(r=this.i,l=l!==null&&r in l?l[r]:void 0),this.data=l}else this.data=r}I(Xo,as);function Qo(){ls.call(this),this.status=1}I(Qo,ls);function Bt(r){this.g=r}I(Bt,Jo),Bt.prototype.ra=function(){ce(this.g,"a")},Bt.prototype.qa=function(r){ce(this.g,new Xo(r))},Bt.prototype.pa=function(r){ce(this.g,new Qo)},Bt.prototype.oa=function(){ce(this.g,"b")},me.prototype.send=me.prototype.o,me.prototype.open=me.prototype.m,me.prototype.close=me.prototype.close,hs.NO_ERROR=0,hs.TIMEOUT=8,hs.HTTP_ERROR=6,eu.COMPLETE="complete",Yh.EventType=hn,hn.OPEN="a",hn.CLOSE="b",hn.ERROR="c",hn.MESSAGE="d",re.prototype.listen=re.prototype.J,K.prototype.listenOnce=K.prototype.K,K.prototype.getLastError=K.prototype.Ha,K.prototype.getLastErrorCode=K.prototype.ya,K.prototype.getStatus=K.prototype.ca,K.prototype.getResponseJson=K.prototype.La,K.prototype.getResponseText=K.prototype.la,K.prototype.send=K.prototype.ea,K.prototype.setWithCredentials=K.prototype.Fa}).apply(typeof fi<"u"?fi:typeof self<"u"?self:typeof window<"u"?window:{});const ua="@firebase/firestore",da="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ue.UNAUTHENTICATED=new ue(null),ue.GOOGLE_CREDENTIALS=new ue("google-credentials-uid"),ue.FIRST_PARTY=new ue("first-party-uid"),ue.MOCK_USER=new ue("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gn="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt=new $i("@firebase/firestore");function Te(n,...e){if(Qt.logLevel<=B.DEBUG){const t=e.map(yr);Qt.debug(`Firestore (${Gn}): ${n}`,...t)}}function jl(n,...e){if(Qt.logLevel<=B.ERROR){const t=e.map(yr);Qt.error(`Firestore (${Gn}): ${n}`,...t)}}function sf(n,...e){if(Qt.logLevel<=B.WARN){const t=e.map(yr);Qt.warn(`Firestore (${Gn}): ${n}`,...t)}}function yr(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Bn(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,Wl(n,i,t)}function Wl(n,e,t){let i=`FIRESTORE (${Gn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw jl(i),new Error(i)}function Nn(n,e,t,i){let s="Unexpected state";typeof t=="string"?s=t:i=t,n||Wl(e,s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class V extends ze{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(ue.UNAUTHENTICATED)))}shutdown(){}}class of{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class af{constructor(e){this.t=e,this.currentUser=ue.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Nn(this.o===void 0,42304);let i=this.i;const s=d=>this.i!==i?(i=this.i,t(d)):Promise.resolve();let o=new Pn;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Pn,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const d=o;e.enqueueRetryable((async()=>{await d.promise,await s(this.currentUser)}))},h=d=>{Te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((d=>h(d))),setTimeout((()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?h(d):(Te("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Pn)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(Te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Nn(typeof i.accessToken=="string",31837,{l:i}),new Hl(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Nn(e===null||typeof e=="string",2055,{h:e}),new ue(e)}}class lf{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=ue.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class cf{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new lf(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(ue.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class fa{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hf{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,we(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Nn(this.o===void 0,3512);const i=o=>{o.error!=null&&Te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,Te("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable((()=>i(o)))};const s=o=>{Te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>s(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):Te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new fa(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Nn(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new fa(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=uf(40);for(let o=0;o<s.length;++o)i.length<20&&s[o]<t&&(i+=e.charAt(s[o]%62))}return i}}function ut(n,e){return n<e?-1:n>e?1:0}function ff(n,e){const t=Math.min(n.length,e.length);for(let i=0;i<t;i++){const s=n.charAt(i),o=e.charAt(i);if(s!==o)return Ns(s)===Ns(o)?ut(s,o):Ns(s)?1:-1}return ut(n.length,e.length)}const pf=55296,gf=57343;function Ns(n){const e=n.charCodeAt(0);return e>=pf&&e<=gf}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa="__name__";class Ne{constructor(e,t,i){t===void 0?t=0:t>e.length&&Bn(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&Bn(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return Ne.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ne?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let s=0;s<i;s++){const o=Ne.compareSegments(e.get(s),t.get(s));if(o!==0)return o}return ut(e.length,t.length)}static compareSegments(e,t){const i=Ne.isNumericId(e),s=Ne.isNumericId(t);return i&&!s?-1:!i&&s?1:i&&s?Ne.extractNumericId(e).compare(Ne.extractNumericId(t)):ff(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return mr.fromString(e.substring(4,e.length-2))}}class Ie extends Ne{construct(e,t,i){return new Ie(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new V(F.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((s=>s.length>0)))}return new Ie(t)}static emptyPath(){return new Ie([])}}const _f=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class wt extends Ne{construct(e,t,i){return new wt(e,t,i)}static isValidIdentifier(e){return _f.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),wt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===pa}static keyField(){return new wt([pa])}static fromServerFormat(e){const t=[];let i="",s=0;const o=()=>{if(i.length===0)throw new V(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let a=!1;for(;s<e.length;){const h=e[s];if(h==="\\"){if(s+1===e.length)throw new V(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const d=e[s+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new V(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=d,s+=2}else h==="`"?(a=!a,s++):h!=="."||a?(i+=h,s++):(o(),s++)}if(o(),a)throw new V(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new wt(t)}static emptyPath(){return new wt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.path=e}static fromPath(e){return new Et(Ie.fromString(e))}static fromName(e){return new Et(Ie.fromString(e).popFirst(5))}static empty(){return new Et(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ie.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Et(new Ie(e.slice()))}}function mf(n,e,t,i){if(e===!0&&i===!0)throw new V(F.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function yf(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function vf(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Bn(12329,{type:typeof n})}function If(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new V(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=vf(n);throw new V(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Y(n,e){const t={typeString:n};return e&&(t.value=e),t}function zn(n,e){if(!yf(n))throw new V(F.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const s=e[i].typeString,o="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const a=n[i];if(s&&typeof a!==s){t=`JSON field '${i}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){t=`Expected '${i}' field to equal '${o.value}'`;break}}if(t)throw new V(F.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga=-62135596800,_a=1e6;class Pe{static now(){return Pe.fromMillis(Date.now())}static fromDate(e){return Pe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*_a);return new Pe(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new V(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new V(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ga)throw new V(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/_a}_compareTo(e){return this.seconds===e.seconds?ut(this.nanoseconds,e.nanoseconds):ut(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Pe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(zn(e,Pe._jsonSchema))return new Pe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ga;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Pe._jsonSchemaVersion="firestore/timestamp/1.0",Pe._jsonSchema={type:Y("string",Pe._jsonSchemaVersion),seconds:Y("number"),nanoseconds:Y("number")};function wf(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Ef extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Ef("Invalid base64 string: "+o):o}})(e);return new Rt(t)}static fromUint8Array(e){const t=(function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o})(e);return new Rt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ut(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Rt.EMPTY_BYTE_STRING=new Rt("");const qs="(default)";class Ri{constructor(e,t){this.projectId=e,this.database=t||qs}static empty(){return new Ri("","")}get isDefaultDatabase(){return this.database===qs}isEqual(e){return e instanceof Ri&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e,t=null,i=[],s=[],o=null,a="F",h=null,d=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=s,this.limit=o,this.limitType=a,this.startAt=h,this.endAt=d,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Sf(n){return new Tf(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ma,L;(L=ma||(ma={}))[L.OK=0]="OK",L[L.CANCELLED=1]="CANCELLED",L[L.UNKNOWN=2]="UNKNOWN",L[L.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",L[L.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",L[L.NOT_FOUND=5]="NOT_FOUND",L[L.ALREADY_EXISTS=6]="ALREADY_EXISTS",L[L.PERMISSION_DENIED=7]="PERMISSION_DENIED",L[L.UNAUTHENTICATED=16]="UNAUTHENTICATED",L[L.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",L[L.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",L[L.ABORTED=10]="ABORTED",L[L.OUT_OF_RANGE=11]="OUT_OF_RANGE",L[L.UNIMPLEMENTED=12]="UNIMPLEMENTED",L[L.INTERNAL=13]="INTERNAL",L[L.UNAVAILABLE=14]="UNAVAILABLE",L[L.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new mr([4294967295,4294967295],0);/**
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
 */const Cf=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Af=1048576;function Ps(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e,t,i=1e3,s=1.5,o=6e4){this.Mi=e,this.timerId=t,this.d_=i,this.A_=s,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),i=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-i);s>0&&Te("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,t,i,s,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=s,this.removalCallback=o,this.deferred=new Pn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,s,o){const a=Date.now()+i,h=new vr(e,t,a,s,o);return h.start(i),h}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var ya,va;(va=ya||(ya={})).Ma="default",va.Cache="cache";/**
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
 */function Rf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l="firestore.googleapis.com",wa=!0;class Ea{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new V(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=$l,this.ssl=wa}else this.host=e.host,this.ssl=e.ssl??wa;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Cf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Af)throw new V(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}mf("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Rf(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new V(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new V(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new V(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,s){return i.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Gl{constructor(e,t,i,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ea({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new V(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ea(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new rf;switch(i.type){case"firstParty":return new cf(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new V(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=Ia.get(t);i&&(Te("ComponentProvider","Removing Datastore"),Ia.delete(t),i.terminate())})(this),Promise.resolve()}}function kf(n,e,t,i={}){n=If(n,Gl);const s=Dt(e),o=n._getSettings(),a={...o,emulatorOptions:n._getEmulatorOptions()},h=`${e}:${t}`;s&&(dr(`https://${h}`),fr("Firestore",!0)),o.host!==$l&&o.host!==h&&sf("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d={...o,host:h,ssl:s,emulatorOptions:i};if(!ct(d,a)&&(n._setSettings(d),i.mockUserToken)){let f,E;if(typeof i.mockUserToken=="string")f=i.mockUserToken,E=ue.MOCK_USER;else{f=Dl(i.mockUserToken,n._app?.options.projectId);const I=i.mockUserToken.sub||i.mockUserToken.user_id;if(!I)throw new V(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new ue(I)}n._authCredentials=new of(new Hl(f,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Ir(this.firestore,e,this._query)}}class Oe{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Oe(this.firestore,e,this._key)}toJSON(){return{type:Oe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(zn(t,Oe._jsonSchema))return new Oe(e,i||null,new Et(Ie.fromString(t.referencePath)))}}Oe._jsonSchemaVersion="firestore/documentReference/1.0",Oe._jsonSchema={type:Y("string",Oe._jsonSchemaVersion),referencePath:Y("string")};class wr extends Ir{constructor(e,t,i){super(e,t,Sf(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Oe(this.firestore,null,new Et(e))}withConverter(e){return new wr(this.firestore,e,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta="AsyncQueue";class Sa{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new bf(this,"async_queue_retry"),this._c=()=>{const i=Ps();i&&Te(Ta,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const t=Ps();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Ps();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Pn;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!wf(e))throw e;Te(Ta,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,jl("INTERNAL UNHANDLED ERROR: ",Ca(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=t,t}enqueueAfterDelay(e,t,i){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=vr.createAndSchedule(this,e,t,i,(o=>this.hc(o)));return this.tc.push(s),s}uc(){this.nc&&Bn(47125,{Pc:Ca(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Ca(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Nf extends Gl{constructor(e,t,i,s){super(e,t,i,s),this.type="firestore",this._queue=new Sa,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Sa(e),this._firestoreClient=void 0,await e}}}function Pf(n,e){const t=typeof n=="object"?n:_r(),i=typeof n=="string"?n:qs,s=Gi(t,"firestore").getImmediate({identifier:i});if(!s._initialized){const o=Nl("firestore");o&&kf(s,...o)}return s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ue(Rt.fromBase64String(e))}catch(t){throw new V(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ue(Rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ue._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(zn(e,Ue._jsonSchema))return Ue.fromBase64String(e.bytes)}}Ue._jsonSchemaVersion="firestore/bytes/1.0",Ue._jsonSchema={type:Y("string",Ue._jsonSchemaVersion),bytes:Y("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new V(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new wt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new V(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new V(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ut(this._lat,e._lat)||ut(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:St._jsonSchemaVersion}}static fromJSON(e){if(zn(e,St._jsonSchema))return new St(e.latitude,e.longitude)}}St._jsonSchemaVersion="firestore/geoPoint/1.0",St._jsonSchema={type:Y("string",St._jsonSchemaVersion),latitude:Y("number"),longitude:Y("number")};/**
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
 */class Ct{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,s){if(i.length!==s.length)return!1;for(let o=0;o<i.length;++o)if(i[o]!==s[o])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Ct._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(zn(e,Ct._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Ct(e.vectorValues);throw new V(F.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ct._jsonSchemaVersion="firestore/vectorValue/1.0",Ct._jsonSchema={type:Y("string",Ct._jsonSchemaVersion),vectorValues:Y("object")};const Of=new RegExp("[~\\*/\\[\\]]");function Df(n,e,t){if(e.search(Of)>=0)throw Aa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new zl(...e.split("."))._internalPath}catch{throw Aa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function Aa(n,e,t,i,s){let o=`Function ${e}() called with invalid data`;o+=". ";let a="";return new V(F.INVALID_ARGUMENT,o+n+a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e,t,i,s,o){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Oe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Mf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Kl("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Mf extends ql{data(){return super.data()}}function Kl(n,e){return typeof e=="string"?Df(n,e):e instanceof zl?e._internalPath:e._delegate._internalPath}class pi{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Gt extends ql{constructor(e,t,i,s,o,a){super(e,t,i,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new yi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(Kl("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new V(F.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Gt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Gt._jsonSchemaVersion="firestore/documentSnapshot/1.0",Gt._jsonSchema={type:Y("string",Gt._jsonSchemaVersion),bundleSource:Y("string","DocumentSnapshot"),bundleName:Y("string"),bundle:Y("string")};class yi extends Gt{data(e={}){return super.data(e)}}class On{constructor(e,t,i,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new pi(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new yi(this._firestore,this._userDataWriter,i.key,i,new pi(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new V(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((h=>{const d=new yi(s._firestore,s._userDataWriter,h.doc.key,h.doc,new pi(s._snapshot.mutatedKeys.has(h.doc.key),s._snapshot.fromCache),s.query.converter);return h.doc,{type:"added",doc:d,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((h=>o||h.type!==3)).map((h=>{const d=new yi(s._firestore,s._userDataWriter,h.doc.key,h.doc,new pi(s._snapshot.mutatedKeys.has(h.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,E=-1;return h.type!==0&&(f=a.indexOf(h.doc.key),a=a.delete(h.doc.key)),h.type!==1&&(a=a.add(h.doc),E=a.indexOf(h.doc.key)),{type:Lf(h.type),doc:d,oldIndex:f,newIndex:E}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new V(F.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=On._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=df.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],s=[];return this.docs.forEach((o=>{o._document!==null&&(t.push(o._document),i.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Lf(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Bn(61501,{type:n})}}On._jsonSchemaVersion="firestore/querySnapshot/1.0",On._jsonSchema={type:Y("string",On._jsonSchemaVersion),bundleSource:Y("string","QuerySnapshot"),bundleName:Y("string"),bundle:Y("string")};(function(e,t=!0){(function(s){Gn=s})(Mt),bt(new ht("firestore",((i,{instanceIdentifier:s,options:o})=>{const a=i.getProvider("app").getImmediate(),h=new Nf(new af(i.getProvider("auth-internal")),new hf(a,i.getProvider("app-check-internal")),(function(f,E){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new V(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ri(f.options.projectId,E)})(a,s),a);return o={useFetchStreams:t,...o},h._setSettings(o),h}),"PUBLIC").setMultipleInstances(!0)),Me(ua,da,e),Me(ua,da,"esm2020")})();function Yl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xf=Yl,Jl=new $n("auth","Firebase",Yl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki=new $i("@firebase/auth");function Uf(n,...e){ki.logLevel<=B.WARN&&ki.warn(`Auth (${Mt}): ${n}`,...e)}function vi(n,...e){ki.logLevel<=B.ERROR&&ki.error(`Auth (${Mt}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(n,...e){throw Er(n,...e)}function Le(n,...e){return Er(n,...e)}function Xl(n,e,t){const i={...xf(),[e]:t};return new $n("auth","Firebase",i).create(e,{appName:n.name})}function At(n){return Xl(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Er(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Jl.create(n,...e)}function N(n,e,...t){if(!n)throw Er(e,...t)}function Fe(n){const e="INTERNAL ASSERTION FAILED: "+n;throw vi(e),new Error(e)}function $e(n,e){n||Fe(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(){return typeof self<"u"&&self.location?.href||""}function Ff(){return ba()==="http:"||ba()==="https:"}function ba(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ff()||Pu()||"connection"in navigator)?navigator.onLine:!0}function Bf(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,t){this.shortDelay=e,this.longDelay=t,$e(t>e,"Short delay should be less than long delay!"),this.isMobile=pr()||Ml()}get(){return Vf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(n,e){$e(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Fe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Fe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Fe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Hf=new qn(3e4,6e4);function Sr(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function rn(n,e,t,i,s={}){return Zl(n,s,async()=>{let o={},a={};i&&(e==="GET"?a=i:o={body:JSON.stringify(i)});const h=sn({key:n.config.apiKey,...a}).slice(1),d=await n._getAdditionalHeaders();d["Content-Type"]="application/json",n.languageCode&&(d["X-Firebase-Locale"]=n.languageCode);const f={method:e,headers:d,...o};return Nu()||(f.referrerPolicy="no-referrer"),n.emulatorConfig&&Dt(n.emulatorConfig.host)&&(f.credentials="include"),Ql.fetch()(await ec(n,n.config.apiHost,t,h),f)})}async function Zl(n,e,t){n._canInitEmulator=!1;const i={...jf,...e};try{const s=new Gf(n),o=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw gi(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const h=o.ok?a.errorMessage:a.error.message,[d,f]=h.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw gi(n,"credential-already-in-use",a);if(d==="EMAIL_EXISTS")throw gi(n,"email-already-in-use",a);if(d==="USER_DISABLED")throw gi(n,"user-disabled",a);const E=i[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Xl(n,E,f);He(n,E)}}catch(s){if(s instanceof ze)throw s;He(n,"network-request-failed",{message:String(s)})}}async function $f(n,e,t,i,s={}){const o=await rn(n,e,t,i,s);return"mfaPendingCredential"in o&&He(n,"multi-factor-auth-required",{_serverResponse:o}),o}async function ec(n,e,t,i){const s=`${e}${t}?${i}`,o=n,a=o.config.emulator?Tr(n.config,s):`${n.config.apiScheme}://${s}`;return Wf.includes(t)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}class Gf{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Le(this.auth,"network-request-failed")),Hf.get())})}}function gi(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=Le(n,e,i);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zf(n,e){return rn(n,"POST","/v1/accounts:delete",e)}async function Ni(n,e){return rn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qf(n,e=!1){const t=ft(n),i=await t.getIdToken(e),s=Cr(i);N(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,a=o?.sign_in_provider;return{claims:s,token:i,authTime:Dn(Os(s.auth_time)),issuedAtTime:Dn(Os(s.iat)),expirationTime:Dn(Os(s.exp)),signInProvider:a||null,signInSecondFactor:o?.sign_in_second_factor||null}}function Os(n){return Number(n)*1e3}function Cr(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return vi("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ci(t);return s?JSON.parse(s):(vi("Failed to decode base64 JWT payload"),null)}catch(s){return vi("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Ra(n){const e=Cr(n);return N(e,"internal-error"),N(typeof e.exp<"u","internal-error"),N(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jn(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof ze&&Kf(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Kf({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Dn(this.lastLoginAt),this.creationTime=Dn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Pi(n){const e=n.auth,t=await n.getIdToken(),i=await jn(n,Ni(e,{idToken:t}));N(i?.users.length,e,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=s.providerUserInfo?.length?tc(s.providerUserInfo):[],a=Xf(n.providerData,o),h=n.isAnonymous,d=!(n.email&&s.passwordHash)&&!a?.length,f=h?d:!1,E={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ys(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,E)}async function Jf(n){const e=ft(n);await Pi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Xf(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function tc(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qf(n,e){const t=await Zl(n,{},async()=>{const i=sn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:o}=n.config,a=await ec(n,s,"/v1/token",`key=${o}`),h=await n._getAdditionalHeaders();h["Content-Type"]="application/x-www-form-urlencoded";const d={method:"POST",headers:h,body:i};return n.emulatorConfig&&Dt(n.emulatorConfig.host)&&(d.credentials="include"),Ql.fetch()(a,d)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Zf(n,e){return rn(n,"POST","/v2/accounts:revokeToken",Sr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){N(e.idToken,"internal-error"),N(typeof e.idToken<"u","internal-error"),N(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ra(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){N(e.length!==0,"internal-error");const t=Ra(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(N(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:o}=await Qf(e,t);this.updateTokensAndExpiration(i,s,Number(o))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:o}=t,a=new zt;return i&&(N(typeof i=="string","internal-error",{appName:e}),a.refreshToken=i),s&&(N(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),o&&(N(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zt,this.toJSON())}_performRefresh(){return Fe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(n,e){N(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Se{constructor({uid:e,auth:t,stsTokenManager:i,...s}){this.providerId="firebase",this.proactiveRefresh=new Yf(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ys(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await jn(this,this.stsTokenManager.getToken(this.auth,e));return N(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return qf(this,e)}reload(){return Jf(this)}_assign(e){this!==e&&(N(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Se({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Pi(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(we(this.auth.app))return Promise.reject(At(this.auth));const e=await this.getIdToken();return await jn(this,zf(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,s=t.email??void 0,o=t.phoneNumber??void 0,a=t.photoURL??void 0,h=t.tenantId??void 0,d=t._redirectEventId??void 0,f=t.createdAt??void 0,E=t.lastLoginAt??void 0,{uid:I,emailVerified:C,isAnonymous:k,providerData:R,stsTokenManager:O}=t;N(I&&O,e,"internal-error");const D=zt.fromJSON(this.name,O);N(typeof I=="string",e,"internal-error"),tt(i,e.name),tt(s,e.name),N(typeof C=="boolean",e,"internal-error"),N(typeof k=="boolean",e,"internal-error"),tt(o,e.name),tt(a,e.name),tt(h,e.name),tt(d,e.name),tt(f,e.name),tt(E,e.name);const ne=new Se({uid:I,auth:e,email:s,emailVerified:C,displayName:i,isAnonymous:k,photoURL:a,phoneNumber:o,tenantId:h,stsTokenManager:D,createdAt:f,lastLoginAt:E});return R&&Array.isArray(R)&&(ne.providerData=R.map(X=>({...X}))),d&&(ne._redirectEventId=d),ne}static async _fromIdTokenResponse(e,t,i=!1){const s=new zt;s.updateFromServerResponse(t);const o=new Se({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Pi(o),o}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];N(s.localId!==void 0,"internal-error");const o=s.providerUserInfo!==void 0?tc(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!o?.length,h=new zt;h.updateFromIdToken(i);const d=new Se({uid:s.localId,auth:e,stsTokenManager:h,isAnonymous:a}),f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Ys(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!o?.length};return Object.assign(d,f),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka=new Map;function Ve(n){$e(n instanceof Function,"Expected a class definition");let e=ka.get(n);return e?($e(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ka.set(n,e),e)}/**
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
 */class nc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}nc.type="NONE";const Na=nc;/**
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
 */function Ii(n,e,t){return`firebase:${n}:${e}:${t}`}class qt{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:o}=this.auth;this.fullUserKey=Ii(this.userKey,s.apiKey,o),this.fullPersistenceKey=Ii("persistence",s.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ni(this.auth,{idToken:e}).catch(()=>{});return t?Se._fromGetAccountInfoResponse(this.auth,t,e):null}return Se._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new qt(Ve(Na),e,i);const s=(await Promise.all(t.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let o=s[0]||Ve(Na);const a=Ii(i,e.config.apiKey,e.name);let h=null;for(const f of t)try{const E=await f._get(a);if(E){let I;if(typeof E=="string"){const C=await Ni(e,{idToken:E}).catch(()=>{});if(!C)break;I=await Se._fromGetAccountInfoResponse(e,C,E)}else I=Se._fromJSON(e,E);f!==o&&(h=I),o=f;break}}catch{}const d=s.filter(f=>f._shouldAllowMigration);return!o._shouldAllowMigration||!d.length?new qt(o,e,i):(o=d[0],h&&await o._set(a,h.toJSON()),await Promise.all(t.map(async f=>{if(f!==o)try{await f._remove(a)}catch{}})),new qt(o,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(oc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ic(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lc(e))return"Blackberry";if(cc(e))return"Webos";if(sc(e))return"Safari";if((e.includes("chrome/")||rc(e))&&!e.includes("edge/"))return"Chrome";if(ac(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if(i?.length===2)return i[1]}return"Other"}function ic(n=de()){return/firefox\//i.test(n)}function sc(n=de()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function rc(n=de()){return/crios\//i.test(n)}function oc(n=de()){return/iemobile/i.test(n)}function ac(n=de()){return/android/i.test(n)}function lc(n=de()){return/blackberry/i.test(n)}function cc(n=de()){return/webos/i.test(n)}function Ar(n=de()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function ep(n=de()){return Ar(n)&&!!window.navigator?.standalone}function tp(){return Ou()&&document.documentMode===10}function hc(n=de()){return Ar(n)||ac(n)||cc(n)||lc(n)||/windows phone/i.test(n)||oc(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(n,e=[]){let t;switch(n){case"Browser":t=Pa(de());break;case"Worker":t=`${Pa(de())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Mt}/${i}`}/**
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
 */class np{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=o=>new Promise((a,h)=>{try{const d=e(o);a(d)}catch(d){h(d)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
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
 */async function ip(n,e={}){return rn(n,"GET","/v2/passwordPolicy",Sr(n,e))}/**
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
 */const sp=6;class rp{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??sp,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Oa(this),this.idTokenSubscription=new Oa(this),this.beforeStateQueue=new np(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Jl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ve(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await qt.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ni(this,{idToken:e}),i=await Se._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(we(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=this.redirectUser?._redirectEventId,a=i?._redirectEventId,h=await this.tryRedirectSignIn(e);(!o||o===a)&&h?.user&&(i=h.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Pi(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Bf()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(we(this.app))return Promise.reject(At(this));const t=e?ft(e):null;return t&&N(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&N(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return we(this.app)?Promise.reject(At(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return we(this.app)?Promise.reject(At(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ve(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ip(this),t=new rp(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new $n("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await Zf(this,i)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ve(e)||this._popupRedirectResolver;N(t,this,"argument-error"),this.redirectPersistenceManager=await qt.create(this,[Ve(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let a=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(N(h,this,"internal-error"),h.then(()=>{a||o(this.currentUser)}),typeof t=="function"){const d=e.addObserver(t,i,s);return()=>{a=!0,d()}}else{const d=e.addObserver(t);return()=>{a=!0,d()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=uc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){if(we(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Uf(`Error while retrieving App Check token: ${e.error}`),e?.token}}function br(n){return ft(n)}class Oa{constructor(e){this.auth=e,this.observer=null,this.addObserver=Wu(t=>this.observer=t)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ap(n){Rr=n}function lp(n){return Rr.loadJS(n)}function cp(){return Rr.gapiScript}function hp(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(n,e){const t=Gi(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),o=t.getOptions();if(ct(o,e??{}))return s;He(s,"already-initialized")}return t.initialize({options:e})}function dp(n,e){const t=e?.persistence||[],i=(Array.isArray(t)?t:[t]).map(Ve);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e?.popupRedirectResolver)}function fp(n,e,t){const i=br(n);N(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,o=dc(e),{host:a,port:h}=pp(e),d=h===null?"":`:${h}`,f={url:`${o}//${a}${d}/`},E=Object.freeze({host:a,port:h,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){N(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),N(ct(f,i.config.emulator)&&ct(E,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=f,i.emulatorConfig=E,i.settings.appVerificationDisabledForTesting=!0,Dt(a)?(dr(`${o}//${a}${d}`),fr("Auth",!0)):gp()}function dc(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function pp(n){const e=dc(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const o=s[1];return{host:o,port:Da(i.substr(o.length+1))}}else{const[o,a]=i.split(":");return{host:o,port:Da(a)}}}function Da(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function gp(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Fe("not implemented")}_getIdTokenResponse(e){return Fe("not implemented")}_linkToIdToken(e,t){return Fe("not implemented")}_getReauthenticationResolver(e){return Fe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kt(n,e){return $f(n,"POST","/v1/accounts:signInWithIdp",Sr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p="http://localhost";class kt extends fc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new kt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):He("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s,...o}=t;if(!i||!s)return null;const a=new kt(i,s);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Kt(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Kt(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Kt(e,t)}buildRequest(){const e={requestUri:_p,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=sn(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Kn extends pc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt extends Kn{constructor(){super("facebook.com")}static credential(e){return kt._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nt.credentialFromTaggedObject(e)}static credentialFromError(e){return nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nt.credential(e.oauthAccessToken)}catch{return null}}}nt.FACEBOOK_SIGN_IN_METHOD="facebook.com";nt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends Kn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return kt._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return it.credential(t,i)}catch{return null}}}it.GOOGLE_SIGN_IN_METHOD="google.com";it.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends Kn{constructor(){super("github.com")}static credential(e){return kt._fromParams({providerId:st.PROVIDER_ID,signInMethod:st.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return st.credentialFromTaggedObject(e)}static credentialFromError(e){return st.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return st.credential(e.oauthAccessToken)}catch{return null}}}st.GITHUB_SIGN_IN_METHOD="github.com";st.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt extends Kn{constructor(){super("twitter.com")}static credential(e,t){return kt._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return rt.credential(t,i)}catch{return null}}}rt.TWITTER_SIGN_IN_METHOD="twitter.com";rt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const o=await Se._fromIdTokenResponse(e,i,s),a=Ma(i);return new Zt({user:o,providerId:a,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=Ma(i);return new Zt({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function Ma(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi extends ze{constructor(e,t,i,s){super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Oi.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new Oi(e,t,i,s)}}function gc(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Oi._fromErrorAndOperation(n,o,e,i):o})}async function mp(n,e,t=!1){const i=await jn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Zt._forOperation(n,"link",i)}/**
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
 */async function yp(n,e,t=!1){const{auth:i}=n;if(we(i.app))return Promise.reject(At(i));const s="reauthenticate";try{const o=await jn(n,gc(i,s,e,n),t);N(o.idToken,i,"internal-error");const a=Cr(o.idToken);N(a,i,"internal-error");const{sub:h}=a;return N(n.uid===h,i,"user-mismatch"),Zt._forOperation(n,s,o)}catch(o){throw o?.code==="auth/user-not-found"&&He(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vp(n,e,t=!1){if(we(n.app))return Promise.reject(At(n));const i="signIn",s=await gc(n,i,e),o=await Zt._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(o.user),o}function Ip(n,e,t,i){return ft(n).onIdTokenChanged(e,t,i)}function wp(n,e,t){return ft(n).beforeAuthStateChanged(e,t)}const Di="__sak";/**
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
 */class _c{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Di,"1"),this.storage.removeItem(Di),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep=1e3,Tp=10;class mc extends _c{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=hc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,h,d)=>{this.notifyListeners(a,d)});return}const i=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(i);!t&&this.localCache[i]===a||this.notifyListeners(i,a)},o=this.storage.getItem(i);tp()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Tp):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Ep)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}mc.type="LOCAL";const Sp=mc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc extends _c{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}yc.type="SESSION";const vc=yc;/**
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
 */function Cp(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class zi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new zi(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:o}=t.data,a=this.handlersMap[s];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const h=Array.from(a).map(async f=>f(t.origin,o)),d=await Cp(h);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:d})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Ap{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let o,a;return new Promise((h,d)=>{const f=kr("",20);s.port1.start();const E=setTimeout(()=>{d(new Error("unsupported_event"))},i);a={messageChannel:s,onMessage(I){const C=I;if(C.data.eventId===f)switch(C.data.status){case"ack":clearTimeout(E),o=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),h(C.data.response);break;default:clearTimeout(E),clearTimeout(o),d(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:f,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(){return window}function bp(n){xe().location.href=n}/**
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
 */function Ic(){return typeof xe().WorkerGlobalScope<"u"&&typeof xe().importScripts=="function"}async function Rp(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kp(){return navigator?.serviceWorker?.controller||null}function Np(){return Ic()?self:null}/**
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
 */const wc="firebaseLocalStorageDb",Pp=1,Mi="firebaseLocalStorage",Ec="fbase_key";class Yn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function qi(n,e){return n.transaction([Mi],e?"readwrite":"readonly").objectStore(Mi)}function Op(){const n=indexedDB.deleteDatabase(wc);return new Yn(n).toPromise()}function Js(){const n=indexedDB.open(wc,Pp);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Mi,{keyPath:Ec})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Mi)?e(i):(i.close(),await Op(),e(await Js()))})})}async function La(n,e,t){const i=qi(n,!0).put({[Ec]:e,value:t});return new Yn(i).toPromise()}async function Dp(n,e){const t=qi(n,!1).get(e),i=await new Yn(t).toPromise();return i===void 0?null:i.value}function xa(n,e){const t=qi(n,!0).delete(e);return new Yn(t).toPromise()}const Mp=800,Lp=3;class Tc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Js(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Lp)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ic()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zi._getInstance(Np()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Rp(),!this.activeServiceWorker)return;this.sender=new Ap(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Js();return await La(e,Di,"1"),await xa(e,Di),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>La(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Dp(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>xa(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const o=qi(s,!1).getAll();return new Yn(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:o}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Mp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Tc.type="LOCAL";const xp=Tc;new qn(3e4,6e4);/**
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
 */function Up(n,e){return e?Ve(e):(N(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Nr extends fc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Kt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Kt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Kt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Fp(n){return vp(n.auth,new Nr(n),n.bypassAuthState)}function Vp(n){const{auth:e,user:t}=n;return N(t,e,"internal-error"),yp(t,new Nr(n),n.bypassAuthState)}async function Bp(n){const{auth:e,user:t}=n;return N(t,e,"internal-error"),mp(t,new Nr(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e,t,i,s,o=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:o,error:a,type:h}=e;if(a){this.reject(a);return}const d={auth:this.auth,requestUri:t,sessionId:i,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(d))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Fp;case"linkViaPopup":case"linkViaRedirect":return Bp;case"reauthViaPopup":case"reauthViaRedirect":return Vp;default:He(this.auth,"internal-error")}}resolve(e){$e(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$e(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp=new qn(2e3,1e4);class Wt extends Sc{constructor(e,t,i,s,o){super(e,t,s,o),this.provider=i,this.authWindow=null,this.pollId=null,Wt.currentPopupAction&&Wt.currentPopupAction.cancel(),Wt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return N(e,this.auth,"internal-error"),e}async onExecution(){$e(this.filter.length===1,"Popup operations only handle one event");const e=kr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Le(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Le(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wt.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Le(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,jp.get())};e()}}Wt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp="pendingRedirect",wi=new Map;class Hp extends Sc{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=wi.get(this.auth._key());if(!e){try{const i=await $p(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}wi.set(this.auth._key(),e)}return this.bypassAuthState||wi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $p(n,e){const t=qp(e),i=zp(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function Gp(n,e){wi.set(n._key(),e)}function zp(n){return Ve(n._redirectPersistence)}function qp(n){return Ii(Wp,n.config.apiKey,n.name)}async function Kp(n,e,t=!1){if(we(n.app))return Promise.reject(At(n));const i=br(n),s=Up(i,e),a=await new Hp(i,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp=600*1e3;class Jp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Xp(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Cc(e)){const i=e.error.code?.split("auth/")[1]||"internal-error";t.onError(Le(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Yp&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ua(e))}saveEventToCache(e){this.cachedEventUids.add(Ua(e)),this.lastProcessedEventTime=Date.now()}}function Ua(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Cc({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function Xp(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Cc(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qp(n,e={}){return rn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,eg=/^https?/;async function tg(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Qp(n);for(const t of e)try{if(ng(t))return}catch{}He(n,"unauthorized-domain")}function ng(n){const e=Ks(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===i}if(!eg.test(t))return!1;if(Zp.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const ig=new qn(3e4,6e4);function Fa(){const n=xe().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function sg(n){return new Promise((e,t)=>{function i(){Fa(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fa(),t(Le(n,"network-request-failed"))},timeout:ig.get()})}if(xe().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(xe().gapi?.load)i();else{const s=hp("iframefcb");return xe()[s]=()=>{gapi.load?i():t(Le(n,"network-request-failed"))},lp(`${cp()}?onload=${s}`).catch(o=>t(o))}}).catch(e=>{throw Ei=null,e})}let Ei=null;function rg(n){return Ei=Ei||sg(n),Ei}/**
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
 */const og=new qn(5e3,15e3),ag="__/auth/iframe",lg="emulator/auth/iframe",cg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ug(n){const e=n.config;N(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Tr(e,lg):`https://${n.config.authDomain}/${ag}`,i={apiKey:e.apiKey,appName:n.name,v:Mt},s=hg.get(n.config.apiHost);s&&(i.eid=s);const o=n._getFrameworks();return o.length&&(i.fw=o.join(",")),`${t}?${sn(i).slice(1)}`}async function dg(n){const e=await rg(n),t=xe().gapi;return N(t,n,"internal-error"),e.open({where:document.body,url:ug(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cg,dontclear:!0},i=>new Promise(async(s,o)=>{await i.restyle({setHideOnLeave:!1});const a=Le(n,"network-request-failed"),h=xe().setTimeout(()=>{o(a)},og.get());function d(){xe().clearTimeout(h),s(i)}i.ping(d).then(d,()=>{o(a)})}))}/**
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
 */const fg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pg=500,gg=600,_g="_blank",mg="http://localhost";class Va{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yg(n,e,t,i=pg,s=gg){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let h="";const d={...fg,width:i.toString(),height:s.toString(),top:o,left:a},f=de().toLowerCase();t&&(h=rc(f)?_g:t),ic(f)&&(e=e||mg,d.scrollbars="yes");const E=Object.entries(d).reduce((C,[k,R])=>`${C}${k}=${R},`,"");if(ep(f)&&h!=="_self")return vg(e||"",h),new Va(null);const I=window.open(e||"",h,E);N(I,n,"popup-blocked");try{I.focus()}catch{}return new Va(I)}function vg(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const Ig="__/auth/handler",wg="emulator/auth/handler",Eg=encodeURIComponent("fac");async function Ba(n,e,t,i,s,o){N(n.config.authDomain,n,"auth-domain-config-required"),N(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Mt,eventId:s};if(e instanceof pc){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",js(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,I]of Object.entries({}))a[E]=I}if(e instanceof Kn){const E=e.getScopes().filter(I=>I!=="");E.length>0&&(a.scopes=E.join(","))}n.tenantId&&(a.tid=n.tenantId);const h=a;for(const E of Object.keys(h))h[E]===void 0&&delete h[E];const d=await n._getAppCheckToken(),f=d?`#${Eg}=${encodeURIComponent(d)}`:"";return`${Tg(n)}?${sn(h).slice(1)}${f}`}function Tg({config:n}){return n.emulator?Tr(n,wg):`https://${n.authDomain}/${Ig}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds="webStorageSupport";class Sg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vc,this._completeRedirectFn=Kp,this._overrideRedirectResult=Gp}async _openPopup(e,t,i,s){$e(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const o=await Ba(e,t,i,Ks(),s);return yg(e,o,kr())}async _openRedirect(e,t,i,s){await this._originValidation(e);const o=await Ba(e,t,i,Ks(),s);return bp(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:o}=this.eventManagers[t];return s?Promise.resolve(s):($e(o,"If manager is not set, promise should be"),o)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await dg(e),i=new Jp(e);return t.register("authEvent",s=>(N(s?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ds,{type:Ds},s=>{const o=s?.[0]?.[Ds];o!==void 0&&t(!!o),He(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=tg(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return hc()||sc()||Ar()}}const Cg=Sg;var ja="@firebase/auth",Wa="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bg(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Rg(n){bt(new ht("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:h}=i.options;N(a&&!a.includes(":"),"invalid-api-key",{appName:i.name});const d={apiKey:a,authDomain:h,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:uc(n)},f=new op(i,s,o,d);return dp(f,t),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),bt(new ht("auth-internal",e=>{const t=br(e.getProvider("auth").getImmediate());return(i=>new Ag(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Me(ja,Wa,bg(n)),Me(ja,Wa,"esm2020")}/**
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
 */const kg=300,Ng=Ol("authIdTokenMaxAge")||kg;let Ha=null;const Pg=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Ng)return;const s=t?.token;Ha!==s&&(Ha=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Og(n=_r()){const e=Gi(n,"auth");if(e.isInitialized())return e.getImmediate();const t=up(n,{popupRedirectResolver:Cg,persistence:[xp,Sp,vc]}),i=Ol("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(i,location.origin);if(location.origin===o.origin){const a=Pg(o.toString());wp(t,a,()=>a(t.currentUser)),Ip(t,h=>a(h))}}const s=kl("auth");return s&&fp(t,`http://${s}`),t}function Dg(){return document.getElementsByTagName("head")?.[0]??document}ap({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const o=Le("internal-error");o.customData=s,t(o)},i.type="text/javascript",i.charset="UTF-8",Dg().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Rg("Browser");var $a={};const Ga="@firebase/database",za="1.1.0";/**
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
 */let Ac="";function Mg(n){Ac=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ie(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Fn(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return qe(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Lg(e)}}catch{}return new xg},Tt=bc("localStorage"),Ug=bc("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt=new $i("@firebase/database"),Fg=(function(){let n=1;return function(){return n++}})(),Rc=function(n){const e=zu(n),t=new ju;t.update(e);const i=t.digest();return cr.encodeByteArray(i)},Jn=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Jn.apply(null,i):typeof i=="object"?e+=ie(i):e+=i,e+=" "}return e};let Mn=null,qa=!0;const Vg=function(n,e){b(!0,"Can't turn on custom loggers persistently."),Yt.logLevel=B.VERBOSE,Mn=Yt.log.bind(Yt)},oe=function(...n){if(qa===!0&&(qa=!1,Mn===null&&Ug.get("logging_enabled")===!0&&Vg()),Mn){const e=Jn.apply(null,n);Mn(e)}},Xn=function(n){return function(...e){oe(n,...e)}},Xs=function(...n){const e="FIREBASE INTERNAL ERROR: "+Jn(...n);Yt.error(e)},Ge=function(...n){const e=`FIREBASE FATAL ERROR: ${Jn(...n)}`;throw Yt.error(e),new Error(e)},ge=function(...n){const e="FIREBASE WARNING: "+Jn(...n);Yt.warn(e)},Bg=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ge("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},kc=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},jg=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},en="[MIN_NAME]",Nt="[MAX_NAME]",on=function(n,e){if(n===e)return 0;if(n===en||e===Nt)return-1;if(e===en||n===Nt)return 1;{const t=Ka(n),i=Ka(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},Wg=function(n,e){return n===e?0:n<e?-1:1},Cn=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+ie(e))},Pr=function(n){if(typeof n!="object"||n===null)return ie(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=ie(e[i]),t+=":",t+=Pr(n[e[i]]);return t+="}",t},Nc=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function ve(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Pc=function(n){b(!kc(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,o,a,h,d;n===0?(o=0,a=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(h=Math.min(Math.floor(Math.log(n)/Math.LN2),i),o=h+i,a=Math.round(n*Math.pow(2,t-h)-Math.pow(2,t))):(o=0,a=Math.round(n/Math.pow(2,1-i-t))));const f=[];for(d=t;d;d-=1)f.push(a%2?1:0),a=Math.floor(a/2);for(d=e;d;d-=1)f.push(o%2?1:0),o=Math.floor(o/2);f.push(s?1:0),f.reverse();const E=f.join("");let I="";for(d=0;d<64;d+=8){let C=parseInt(E.substr(d,8),2).toString(16);C.length===1&&(C="0"+C),I=I+C}return I.toLowerCase()},Hg=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},$g=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},Gg=new RegExp("^-?(0*)\\d{1,10}$"),zg=-2147483648,qg=2147483647,Ka=function(n){if(Gg.test(n)){const e=Number(n);if(e>=zg&&e<=qg)return e}return null},Qn=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ge("Exception was thrown by user callback.",t),e},Math.floor(0))}},Kg=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ln=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Yg{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,we(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){ge(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(oe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ge(e)}}class Ti{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ti.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or="5",Oc="v",Dc="s",Mc="r",Lc="f",xc=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Uc="ls",Fc="p",Qs="ac",Vc="websocket",Bc="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,t,i,s,o=!1,a="",h=!1,d=!1,f=null){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=o,this.persistenceKey=a,this.includeNamespaceInQueryParams=h,this.isUsingEmulator=d,this.emulatorOptions=f,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Tt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Tt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Xg(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Wc(n,e,t){b(typeof e=="string","typeof type must == string"),b(typeof t=="object","typeof params must == object");let i;if(e===Vc)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Bc)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Xg(n)&&(t.ns=n.namespace);const s=[];return ve(t,(o,a)=>{s.push(o+"="+a)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(){this.counters_={}}incrementCounter(e,t=1){qe(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Eu(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms={},Ls={};function Dr(n){const e=n.toString();return Ms[e]||(Ms[e]=new Qg),Ms[e]}function Zg(n,e){const t=n.toString();return Ls[t]||(Ls[t]=e()),Ls[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Qn(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya="start",t_="close",n_="pLPCommand",i_="pRTLPCB",Hc="id",$c="pw",Gc="ser",s_="cb",r_="seg",o_="ts",a_="d",l_="dframe",zc=1870,qc=30,c_=zc-qc,h_=25e3,u_=3e4;class Ht{constructor(e,t,i,s,o,a,h){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=o,this.transportSessionId=a,this.lastSessionId=h,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Xn(e),this.stats_=Dr(t),this.urlFn=d=>(this.appCheckToken&&(d[Qs]=this.appCheckToken),Wc(t,Bc,d))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new e_(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(u_)),jg(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Mr((...o)=>{const[a,h,d,f,E]=o;if(this.incrementIncomingBytes_(o),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,a===Ya)this.id=h,this.password=d;else if(a===t_)h?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(h,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+a)},(...o)=>{const[a,h]=o;this.incrementIncomingBytes_(o),this.myPacketOrderer.handleResponse(a,h)},()=>{this.onClosed_()},this.urlFn);const i={};i[Ya]="t",i[Gc]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[s_]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Oc]=Or,this.transportSessionId&&(i[Dc]=this.transportSessionId),this.lastSessionId&&(i[Uc]=this.lastSessionId),this.applicationId&&(i[Fc]=this.applicationId),this.appCheckToken&&(i[Qs]=this.appCheckToken),typeof location<"u"&&location.hostname&&xc.test(location.hostname)&&(i[Mc]=Lc);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ht.forceAllow_=!0}static forceDisallow(){Ht.forceDisallow_=!0}static isAvailable(){return Ht.forceAllow_?!0:!Ht.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Hg()&&!$g()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=ie(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=bl(t),s=Nc(i,c_);for(let o=0;o<s.length;o++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[o]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[l_]="t",i[Hc]=e,i[$c]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=ie(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Mr{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Fg(),window[n_+this.uniqueCallbackIdentifier]=e,window[i_+this.uniqueCallbackIdentifier]=t,this.myIFrame=Mr.createIFrame_();let o="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(o='<script>document.domain="'+document.domain+'";<\/script>');const a="<html><body>"+o+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(a),this.myIFrame.doc.close()}catch(h){oe("frame writing exception"),h.stack&&oe(h.stack),oe(h)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||oe("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Hc]=this.myID,e[$c]=this.myPW,e[Gc]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+qc+i.length<=zc;){const a=this.pendingSegs.shift();i=i+"&"+r_+s+"="+a.seg+"&"+o_+s+"="+a.ts+"&"+a_+s+"="+a.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(h_)),o=()=>{clearTimeout(s),i()};this.addTag(e,o)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{oe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_=16384,f_=45e3;let Li=null;typeof MozWebSocket<"u"?Li=MozWebSocket:typeof WebSocket<"u"&&(Li=WebSocket);class Ee{constructor(e,t,i,s,o,a,h){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=o,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Xn(this.connId),this.stats_=Dr(t),this.connURL=Ee.connectionURL_(t,a,h,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,o){const a={};return a[Oc]=Or,typeof location<"u"&&location.hostname&&xc.test(location.hostname)&&(a[Mc]=Lc),t&&(a[Dc]=t),i&&(a[Uc]=i),s&&(a[Qs]=s),o&&(a[Fc]=o),Wc(e,Vc,a)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Tt.set("previous_websocket_failure",!0);try{let i;Du(),this.mySock=new Li(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Ee.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Li!==null&&!Ee.forceDisallow_}static previouslyFailed(){return Tt.isInMemoryStorage||Tt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Tt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=Fn(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(b(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=ie(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Nc(t,d_);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(f_))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ee.responsesRequiredToBeHealthy=2;Ee.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{static get ALL_TRANSPORTS(){return[Ht,Ee]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Ee&&Ee.isAvailable();let i=t&&!Ee.previouslyFailed();if(e.webSocketOnly&&(t||ge("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Ee];else{const s=this.transports_=[];for(const o of Wn.ALL_TRANSPORTS)o&&o.isAvailable()&&s.push(o);Wn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Wn.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_=6e4,g_=5e3,__=10*1024,m_=100*1024,xs="t",Ja="d",y_="s",Xa="r",v_="e",Qa="o",Za="a",el="n",tl="p",I_="h";class w_{constructor(e,t,i,s,o,a,h,d,f,E){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=o,this.onMessage_=a,this.onReady_=h,this.onDisconnect_=d,this.onKill_=f,this.lastSessionId=E,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Xn("c:"+this.id+":"),this.transportManager_=new Wn(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Ln(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>m_?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>__?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(xs in e){const t=e[xs];t===Za?this.upgradeIfSecondaryHealthy_():t===Xa?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Qa&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Cn("t",e),i=Cn("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:tl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Za,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:el,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Cn("t",e),i=Cn("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Cn(xs,e);if(Ja in e){const i=e[Ja];if(t===I_){const s={...i};this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===el){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===y_?this.onConnectionShutdown_(i):t===Xa?this.onReset_(i):t===v_?Xs("Server Error: "+i):t===Qa?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Xs("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Or!==i&&ge("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),Ln(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(p_))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ln(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(g_))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:tl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Tt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e){this.allowedEvents_=e,this.listeners_={},b(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let o=0;o<s.length;o++)if(s[o].callback===t&&(!i||i===s[o].context)){s.splice(o,1);return}}validateEventType_(e){b(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi extends Yc{static getInstance(){return new xi}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!pr()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return b(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl=32,il=768;class q{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function W(){return new q("")}function x(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function dt(n){return n.pieces_.length-n.pieceNum_}function z(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new q(n.pieces_,e)}function Jc(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function E_(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Xc(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Qc(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new q(e,0)}function te(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof q)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new q(t,0)}function M(n){return n.pieceNum_>=n.pieces_.length}function ye(n,e){const t=x(n),i=x(e);if(t===null)return e;if(t===i)return ye(z(n),z(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Zc(n,e){if(dt(n)!==dt(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function Ce(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(dt(n)>dt(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class T_{constructor(e,t){this.errorPrefix_=t,this.parts_=Xc(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Hi(this.parts_[i]);eh(this)}}function S_(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Hi(e),eh(n)}function C_(n){const e=n.parts_.pop();n.byteLength_-=Hi(e),n.parts_.length>0&&(n.byteLength_-=1)}function eh(n){if(n.byteLength_>il)throw new Error(n.errorPrefix_+"has a key path longer than "+il+" bytes ("+n.byteLength_+").");if(n.parts_.length>nl)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+nl+") or object contains a cycle "+It(n))}function It(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr extends Yc{static getInstance(){return new Lr}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return b(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=1e3,A_=300*1e3,sl=30*1e3,b_=1.3,R_=3e4,k_="server_kill",rl=3;class je extends Kc{constructor(e,t,i,s,o,a,h,d){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=o,this.authTokenProvider_=a,this.appCheckTokenProvider_=h,this.authOverride_=d,this.id=je.nextPersistentConnectionId_++,this.log_=Xn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=An,this.maxReconnectDelay_=A_,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,d)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Lr.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&xi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,o={r:s,a:e,b:t};this.log_(ie(o)),b(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(o),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new ur,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:a=>{const h=a.d;a.s==="ok"?t.resolve(h):t.reject(h)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const o=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(o),t.promise}listen(e,t,i,s){this.initConnection_();const o=e._queryIdentifier,a=e._path.toString();this.log_("Listen called for "+a+" "+o),this.listens.has(a)||this.listens.set(a,new Map),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),b(!this.listens.get(a).has(o),"listen() called twice for same path/queryId.");const h={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(a).set(o,h),this.connected_&&this.sendListen_(h)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const o={p:i},a="q";e.tag&&(o.q=t._queryObject,o.t=e.tag),o.h=e.hashFn(),this.sendRequest(a,o,h=>{const d=h.d,f=h.s;je.warnOnListenWarnings_(d,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",h),f!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(f,d))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&qe(e,"w")){const i=Xt(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',o=t._path.toString();ge(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${o} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Bu(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=sl)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Vu(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const o=s.s,a=s.d||"error";this.authToken_===e&&(o==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(o,a))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const o={p:e},a="n";s&&(o.q=i,o.t=s),this.sendRequest(a,o)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const o={p:t,d:i};this.log_("onDisconnect "+e,o),this.sendRequest(e,o,a=>{s&&setTimeout(()=>{s(a.s,a.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,o){this.initConnection_();const a={p:t,d:i};o!==void 0&&(a.h=o),this.outstandingPuts_.push({action:e,request:a,onComplete:s}),this.outstandingPutCount_++;const h=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(h):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,o=>{this.log_(t+" response",o),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(o.s,o.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const o=i.d;this.log_("reportStats","Error sending stats: "+o)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ie(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Xs("Unrecognized action received from server: "+ie(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){b(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=An,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=An,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>R_&&(this.reconnectDelay_=An),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*b_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+je.nextConnectionId_++,o=this.lastSessionId;let a=!1,h=null;const d=function(){h?h.close():(a=!0,i())},f=function(I){b(h,"sendRequest call when we're not connected not allowed."),h.sendRequest(I)};this.realtime_={close:d,sendRequest:f};const E=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[I,C]=await Promise.all([this.authTokenProvider_.getToken(E),this.appCheckTokenProvider_.getToken(E)]);a?oe("getToken() completed but was canceled"):(oe("getToken() completed. Creating connection."),this.authToken_=I&&I.accessToken,this.appCheckToken_=C&&C.token,h=new w_(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,k=>{ge(k+" ("+this.repoInfo_.toString()+")"),this.interrupt(k_)},o))}catch(I){this.log_("Failed to get token: "+I),a||(this.repoInfo_.nodeAdmin&&ge(I),d())}}}interrupt(e){oe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){oe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],js(this.interruptReasons_)&&(this.reconnectDelay_=An,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(o=>Pr(o)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new q(e).toString();let s;if(this.listens.has(i)){const o=this.listens.get(i);s=o.get(t),o.delete(t),o.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){oe("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=rl&&(this.reconnectDelay_=sl,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){oe("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=rl&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Ac.replace(/\./g,"-")]=1,pr()?e["framework.cordova"]=1:Ml()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=xi.getInstance().currentlyOnline();return js(this.interruptReasons_)&&e}}je.nextPersistentConnectionId_=0;je.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new U(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new U(en,e),s=new U(en,t);return this.compare(i,s)!==0}minPost(){return U.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _i;class th extends Ki{static get __EMPTY_NODE(){return _i}static set __EMPTY_NODE(e){_i=e}compare(e,t){return on(e.name,t.name)}isDefinedOn(e){throw nn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return U.MIN}maxPost(){return new U(Nt,_i)}makePost(e,t){return b(typeof e=="string","KeyIndex indexValue must always be a string."),new U(e,_i)}toString(){return".key"}}const Jt=new th;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,t,i,s,o=null){this.isReverse_=s,this.resultGenerator_=o,this.nodeStack_=[];let a=1;for(;!e.isEmpty();)if(e=e,a=t?i(e.key,t):1,s&&(a*=-1),a<0)this.isReverse_?e=e.left:e=e.right;else if(a===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ee{constructor(e,t,i,s,o){this.key=e,this.value=t,this.color=i??ee.RED,this.left=s??pe.EMPTY_NODE,this.right=o??pe.EMPTY_NODE}copy(e,t,i,s,o){return new ee(e??this.key,t??this.value,i??this.color,s??this.left,o??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const o=i(e,s.key);return o<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):o===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return pe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return pe.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ee.RED=!0;ee.BLACK=!1;class N_{copy(e,t,i,s,o){return this}insert(e,t,i){return new ee(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class pe{constructor(e,t=pe.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new pe(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ee.BLACK,null,null))}remove(e){return new pe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ee.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new mi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new mi(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new mi(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new mi(this.root_,null,this.comparator_,!0,e)}}pe.EMPTY_NODE=new N_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P_(n,e){return on(n.name,e.name)}function xr(n,e){return on(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zs;function O_(n){Zs=n}const nh=function(n){return typeof n=="number"?"number:"+Pc(n):"string:"+n},ih=function(n){if(n.isLeafNode()){const e=n.val();b(typeof e=="string"||typeof e=="number"||typeof e=="object"&&qe(e,".sv"),"Priority must be a string or number.")}else b(n===Zs||n.isEmpty(),"priority of unexpected type.");b(n===Zs||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ol;class Z{static set __childrenNodeConstructor(e){ol=e}static get __childrenNodeConstructor(){return ol}constructor(e,t=Z.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,b(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ih(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Z(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Z.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return M(e)?this:x(e)===".priority"?this.priorityNode_:Z.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Z.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=x(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(b(i!==".priority"||dt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Z.__childrenNodeConstructor.EMPTY_NODE.updateChild(z(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+nh(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Pc(this.value_):e+=this.value_,this.lazyHash_=Rc(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Z.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Z.__childrenNodeConstructor?-1:(b(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=Z.VALUE_TYPE_ORDER.indexOf(t),o=Z.VALUE_TYPE_ORDER.indexOf(i);return b(s>=0,"Unknown leaf type: "+t),b(o>=0,"Unknown leaf type: "+i),s===o?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:o-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Z.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sh,rh;function D_(n){sh=n}function M_(n){rh=n}class L_ extends Ki{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),o=i.compareTo(s);return o===0?on(e.name,t.name):o}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return U.MIN}maxPost(){return new U(Nt,new Z("[PRIORITY-POST]",rh))}makePost(e,t){const i=sh(e);return new U(t,new Z("[PRIORITY-POST]",i))}toString(){return".priority"}}const le=new L_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_=Math.log(2);class U_{constructor(e){const t=o=>parseInt(Math.log(o)/x_,10),i=o=>parseInt(Array(o+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ui=function(n,e,t,i){n.sort(e);const s=function(d,f){const E=f-d;let I,C;if(E===0)return null;if(E===1)return I=n[d],C=t?t(I):I,new ee(C,I.node,ee.BLACK,null,null);{const k=parseInt(E/2,10)+d,R=s(d,k),O=s(k+1,f);return I=n[k],C=t?t(I):I,new ee(C,I.node,ee.BLACK,R,O)}},o=function(d){let f=null,E=null,I=n.length;const C=function(R,O){const D=I-R,ne=I;I-=R;const X=s(D+1,ne),se=n[D],be=t?t(se):se;k(new ee(be,se.node,O,null,X))},k=function(R){f?(f.left=R,f=R):(E=R,f=R)};for(let R=0;R<d.count;++R){const O=d.nextBitIsOne(),D=Math.pow(2,d.count-(R+1));O?C(D,ee.BLACK):(C(D,ee.BLACK),C(D,ee.RED))}return E},a=new U_(n.length),h=o(a);return new pe(i||e,h)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Us;const jt={};class Be{static get Default(){return b(jt&&le,"ChildrenNode.ts has not been loaded"),Us=Us||new Be({".priority":jt},{".priority":le}),Us}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Xt(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof pe?t:null}hasIndex(e){return qe(this.indexSet_,e.toString())}addIndex(e,t){b(e!==Jt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const o=t.getIterator(U.Wrap);let a=o.getNext();for(;a;)s=s||e.isDefinedOn(a.node),i.push(a),a=o.getNext();let h;s?h=Ui(i,e.getCompare()):h=jt;const d=e.toString(),f={...this.indexSet_};f[d]=e;const E={...this.indexes_};return E[d]=h,new Be(E,f)}addToIndexes(e,t){const i=Ai(this.indexes_,(s,o)=>{const a=Xt(this.indexSet_,o);if(b(a,"Missing index implementation for "+o),s===jt)if(a.isDefinedOn(e.node)){const h=[],d=t.getIterator(U.Wrap);let f=d.getNext();for(;f;)f.name!==e.name&&h.push(f),f=d.getNext();return h.push(e),Ui(h,a.getCompare())}else return jt;else{const h=t.get(e.name);let d=s;return h&&(d=d.remove(new U(e.name,h))),d.insert(e,e.node)}});return new Be(i,this.indexSet_)}removeFromIndexes(e,t){const i=Ai(this.indexes_,s=>{if(s===jt)return s;{const o=t.get(e.name);return o?s.remove(new U(e.name,o)):s}});return new Be(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bn;class j{static get EMPTY_NODE(){return bn||(bn=new j(new pe(xr),null,Be.Default))}constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&ih(this.priorityNode_),this.children_.isEmpty()&&b(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||bn}updatePriority(e){return this.children_.isEmpty()?this:new j(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?bn:t}}getChild(e){const t=x(e);return t===null?this:this.getImmediateChild(t).getChild(z(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(b(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new U(e,t);let s,o;t.isEmpty()?(s=this.children_.remove(e),o=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),o=this.indexMap_.addToIndexes(i,this.children_));const a=s.isEmpty()?bn:this.priorityNode_;return new j(s,a,o)}}updateChild(e,t){const i=x(e);if(i===null)return t;{b(x(e)!==".priority"||dt(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(z(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,o=!0;if(this.forEachChild(le,(a,h)=>{t[a]=h.val(e),i++,o&&j.INTEGER_REGEXP_.test(a)?s=Math.max(s,Number(a)):o=!1}),!e&&o&&s<2*i){const a=[];for(const h in t)a[h]=t[h];return a}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+nh(this.getPriority().val())+":"),this.forEachChild(le,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":Rc(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const o=s.getPredecessorKey(new U(e,t));return o?o.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new U(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new U(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,U.Wrap);let o=s.peek();for(;o!=null&&t.compare(o,e)<0;)s.getNext(),o=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,U.Wrap);let o=s.peek();for(;o!=null&&t.compare(o,e)>0;)s.getNext(),o=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Zn?-1:0}withIndex(e){if(e===Jt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new j(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Jt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(le),s=t.getIterator(le);let o=i.getNext(),a=s.getNext();for(;o&&a;){if(o.name!==a.name||!o.node.equals(a.node))return!1;o=i.getNext(),a=s.getNext()}return o===null&&a===null}else return!1;else return!1}}resolveIndex_(e){return e===Jt?null:this.indexMap_.get(e.toString())}}j.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class F_ extends j{constructor(){super(new pe(xr),j.EMPTY_NODE,Be.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return j.EMPTY_NODE}isEmpty(){return!1}}const Zn=new F_;Object.defineProperties(U,{MIN:{value:new U(en,j.EMPTY_NODE)},MAX:{value:new U(Nt,Zn)}});th.__EMPTY_NODE=j.EMPTY_NODE;Z.__childrenNodeConstructor=j;O_(Zn);M_(Zn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_=!0;function ae(n,e=null){if(n===null)return j.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),b(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Z(t,ae(e))}if(!(n instanceof Array)&&V_){const t=[];let i=!1;if(ve(n,(a,h)=>{if(a.substring(0,1)!=="."){const d=ae(h);d.isEmpty()||(i=i||!d.getPriority().isEmpty(),t.push(new U(a,d)))}}),t.length===0)return j.EMPTY_NODE;const o=Ui(t,P_,a=>a.name,xr);if(i){const a=Ui(t,le.getCompare());return new j(o,ae(e),new Be({".priority":a},{".priority":le}))}else return new j(o,ae(e),Be.Default)}else{let t=j.EMPTY_NODE;return ve(n,(i,s)=>{if(qe(n,i)&&i.substring(0,1)!=="."){const o=ae(s);(o.isLeafNode()||!o.isEmpty())&&(t=t.updateImmediateChild(i,o))}}),t.updatePriority(ae(e))}}D_(ae);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_ extends Ki{constructor(e){super(),this.indexPath_=e,b(!M(e)&&x(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),o=i.compareTo(s);return o===0?on(e.name,t.name):o}makePost(e,t){const i=ae(e),s=j.EMPTY_NODE.updateChild(this.indexPath_,i);return new U(t,s)}maxPost(){const e=j.EMPTY_NODE.updateChild(this.indexPath_,Zn);return new U(Nt,e)}toString(){return Xc(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_ extends Ki{compare(e,t){const i=e.node.compareTo(t.node);return i===0?on(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return U.MIN}maxPost(){return U.MAX}makePost(e,t){const i=ae(e);return new U(t,i)}toString(){return".value"}}const W_=new j_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H_(n){return{type:"value",snapshotNode:n}}function $_(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function G_(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function al(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function z_(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=le}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return b(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return b(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:en}hasEnd(){return this.endSet_}getIndexEndValue(){return b(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return b(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Nt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return b(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===le}copy(){const e=new Ur;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ll(n){const e={};if(n.isDefault())return e;let t;if(n.index_===le?t="$priority":n.index_===W_?t="$value":n.index_===Jt?t="$key":(b(n.index_ instanceof B_,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=ie(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=ie(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+ie(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=ie(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+ie(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function cl(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==le&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi extends Kc{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(b(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Xn("p:rest:"),this.listens_={}}listen(e,t,i,s){const o=e._path.toString();this.log_("Listen called for "+o+" "+e._queryIdentifier);const a=Fi.getListenId_(e,i),h={};this.listens_[a]=h;const d=ll(e._queryParams);this.restRequest_(o+".json",d,(f,E)=>{let I=E;if(f===404&&(I=null,f=null),f===null&&this.onDataUpdate_(o,I,!1,i),Xt(this.listens_,a)===h){let C;f?f===401?C="permission_denied":C="rest_error:"+f:C="ok",s(C,null)}})}unlisten(e,t){const i=Fi.getListenId_(e,t);delete this.listens_[i]}get(e){const t=ll(e._queryParams),i=e._path.toString(),s=new ur;return this.restRequest_(i+".json",t,(o,a)=>{let h=a;o===404&&(h=null,o=null),o===null?(this.onDataUpdate_(i,h,!1,null),s.resolve(h)):s.reject(new Error(h))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,o])=>{s&&s.accessToken&&(t.auth=s.accessToken),o&&o.token&&(t.ac=o.token);const a=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+sn(t);this.log_("Sending REST request for "+a);const h=new XMLHttpRequest;h.onreadystatechange=()=>{if(i&&h.readyState===4){this.log_("REST Response for "+a+" received. status:",h.status,"response:",h.responseText);let d=null;if(h.status>=200&&h.status<300){try{d=Fn(h.responseText)}catch{ge("Failed to parse JSON response for "+a+": "+h.responseText)}i(null,d)}else h.status!==401&&h.status!==404&&ge("Got unsuccessful REST response for "+a+" Status: "+h.status),i(h.status);i=null}},h.open("GET",a,!0),h.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(){this.rootNode_=j.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(){return{value:null,children:new Map}}function oh(n,e,t){if(M(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=x(e);n.children.has(i)||n.children.set(i,Vi());const s=n.children.get(i);e=z(e),oh(s,e,t)}}function er(n,e,t){n.value!==null?t(e,n.value):K_(n,(i,s)=>{const o=new q(e.toString()+"/"+i);er(s,o,t)})}function K_(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&ve(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl=10*1e3,J_=30*1e3,X_=300*1e3;class Q_{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Y_(e);const i=hl+(J_-hl)*Math.random();Ln(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;ve(e,(s,o)=>{o>0&&qe(this.statsToReport_,s)&&(t[s]=o,i=!0)}),i&&this.server_.reportStats(t),Ln(this.reportStats_.bind(this),Math.floor(Math.random()*2*X_))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(De||(De={}));function ah(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function lh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ch(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=De.ACK_USER_WRITE,this.source=ah()}operationForChild(e){if(M(this.path)){if(this.affectedTree.value!=null)return b(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new q(e));return new Bi(W(),t,this.revert)}}else return b(x(this.path)===e,"operationForChild called for unrelated child."),new Bi(z(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=De.OVERWRITE}operationForChild(e){return M(this.path)?new Pt(this.source,W(),this.snap.getImmediateChild(e)):new Pt(this.source,z(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=De.MERGE}operationForChild(e){if(M(this.path)){const t=this.children.subtree(new q(e));return t.isEmpty()?null:t.value?new Pt(this.source,W(),t.value):new Hn(this.source,W(),t)}else return b(x(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Hn(this.source,z(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(M(e))return this.isFullyInitialized()&&!this.filtered_;const t=x(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function Z_(n,e,t,i){const s=[],o=[];return e.forEach(a=>{a.type==="child_changed"&&n.index_.indexedValueChanged(a.oldSnap,a.snapshotNode)&&o.push(z_(a.childName,a.snapshotNode))}),Rn(n,s,"child_removed",e,i,t),Rn(n,s,"child_added",e,i,t),Rn(n,s,"child_moved",o,i,t),Rn(n,s,"child_changed",e,i,t),Rn(n,s,"value",e,i,t),s}function Rn(n,e,t,i,s,o){const a=i.filter(h=>h.type===t);a.sort((h,d)=>tm(n,h,d)),a.forEach(h=>{const d=em(n,h,o);s.forEach(f=>{f.respondsTo(h.type)&&e.push(f.createEvent(d,n.query_))})})}function em(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function tm(n,e,t){if(e.childName==null||t.childName==null)throw nn("Should only compare child_ events.");const i=new U(e.childName,e.snapshotNode),s=new U(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hh(n,e){return{eventCache:n,serverCache:e}}function xn(n,e,t,i){return hh(new Fr(e,t,i),n.serverCache)}function uh(n,e,t,i){return hh(n.eventCache,new Fr(e,t,i))}function tr(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Ot(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fs;const nm=()=>(Fs||(Fs=new pe(Wg)),Fs);class G{static fromObject(e){let t=new G(null);return ve(e,(i,s)=>{t=t.set(new q(i),s)}),t}constructor(e,t=nm()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:W(),value:this.value};if(M(e))return null;{const i=x(e),s=this.children.get(i);if(s!==null){const o=s.findRootMostMatchingPathAndValue(z(e),t);return o!=null?{path:te(new q(i),o.path),value:o.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(M(e))return this;{const t=x(e),i=this.children.get(t);return i!==null?i.subtree(z(e)):new G(null)}}set(e,t){if(M(e))return new G(t,this.children);{const i=x(e),o=(this.children.get(i)||new G(null)).set(z(e),t),a=this.children.insert(i,o);return new G(this.value,a)}}remove(e){if(M(e))return this.children.isEmpty()?new G(null):new G(null,this.children);{const t=x(e),i=this.children.get(t);if(i){const s=i.remove(z(e));let o;return s.isEmpty()?o=this.children.remove(t):o=this.children.insert(t,s),this.value===null&&o.isEmpty()?new G(null):new G(this.value,o)}else return this}}get(e){if(M(e))return this.value;{const t=x(e),i=this.children.get(t);return i?i.get(z(e)):null}}setTree(e,t){if(M(e))return t;{const i=x(e),o=(this.children.get(i)||new G(null)).setTree(z(e),t);let a;return o.isEmpty()?a=this.children.remove(i):a=this.children.insert(i,o),new G(this.value,a)}}fold(e){return this.fold_(W(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,o)=>{i[s]=o.fold_(te(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,W(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(M(e))return null;{const o=x(e),a=this.children.get(o);return a?a.findOnPath_(z(e),te(t,o),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,W(),t)}foreachOnPath_(e,t,i){if(M(e))return this;{this.value&&i(t,this.value);const s=x(e),o=this.children.get(s);return o?o.foreachOnPath_(z(e),te(t,s),i):new G(null)}}foreach(e){this.foreach_(W(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(te(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.writeTree_=e}static empty(){return new Ae(new G(null))}}function Un(n,e,t){if(M(e))return new Ae(new G(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let o=i.value;const a=ye(s,e);return o=o.updateChild(a,t),new Ae(n.writeTree_.set(s,o))}else{const s=new G(t),o=n.writeTree_.setTree(e,s);return new Ae(o)}}}function ul(n,e,t){let i=n;return ve(t,(s,o)=>{i=Un(i,te(e,s),o)}),i}function dl(n,e){if(M(e))return Ae.empty();{const t=n.writeTree_.setTree(e,new G(null));return new Ae(t)}}function nr(n,e){return Lt(n,e)!=null}function Lt(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(ye(t.path,e)):null}function fl(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(le,(i,s)=>{e.push(new U(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new U(i,s.value))}),e}function lt(n,e){if(M(e))return n;{const t=Lt(n,e);return t!=null?new Ae(new G(t)):new Ae(n.writeTree_.subtree(e))}}function ir(n){return n.writeTree_.isEmpty()}function tn(n,e){return dh(W(),n.writeTree_,e)}function dh(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,o)=>{s===".priority"?(b(o.value!==null,"Priority writes must always be leaf nodes"),i=o.value):t=dh(te(n,s),o,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(te(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(n,e){return yh(e,n)}function im(n,e,t,i,s){b(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=Un(n.visibleWrites,e,t)),n.lastWriteId=i}function sm(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function rm(n,e){const t=n.allWrites.findIndex(h=>h.writeId===e);b(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,o=!1,a=n.allWrites.length-1;for(;s&&a>=0;){const h=n.allWrites[a];h.visible&&(a>=t&&om(h,i.path)?s=!1:Ce(i.path,h.path)&&(o=!0)),a--}if(s){if(o)return am(n),!0;if(i.snap)n.visibleWrites=dl(n.visibleWrites,i.path);else{const h=i.children;ve(h,d=>{n.visibleWrites=dl(n.visibleWrites,te(i.path,d))})}return!0}else return!1}function om(n,e){if(n.snap)return Ce(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Ce(te(n.path,t),e))return!0;return!1}function am(n){n.visibleWrites=ph(n.allWrites,lm,W()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function lm(n){return n.visible}function ph(n,e,t){let i=Ae.empty();for(let s=0;s<n.length;++s){const o=n[s];if(e(o)){const a=o.path;let h;if(o.snap)Ce(t,a)?(h=ye(t,a),i=Un(i,h,o.snap)):Ce(a,t)&&(h=ye(a,t),i=Un(i,W(),o.snap.getChild(h)));else if(o.children){if(Ce(t,a))h=ye(t,a),i=ul(i,h,o.children);else if(Ce(a,t))if(h=ye(a,t),M(h))i=ul(i,W(),o.children);else{const d=Xt(o.children,x(h));if(d){const f=d.getChild(z(h));i=Un(i,W(),f)}}}else throw nn("WriteRecord should have .snap or .children")}}return i}function gh(n,e,t,i,s){if(!i&&!s){const o=Lt(n.visibleWrites,e);if(o!=null)return o;{const a=lt(n.visibleWrites,e);if(ir(a))return t;if(t==null&&!nr(a,W()))return null;{const h=t||j.EMPTY_NODE;return tn(a,h)}}}else{const o=lt(n.visibleWrites,e);if(!s&&ir(o))return t;if(!s&&t==null&&!nr(o,W()))return null;{const a=function(f){return(f.visible||s)&&(!i||!~i.indexOf(f.writeId))&&(Ce(f.path,e)||Ce(e,f.path))},h=ph(n.allWrites,a,e),d=t||j.EMPTY_NODE;return tn(h,d)}}}function cm(n,e,t){let i=j.EMPTY_NODE;const s=Lt(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(le,(o,a)=>{i=i.updateImmediateChild(o,a)}),i;if(t){const o=lt(n.visibleWrites,e);return t.forEachChild(le,(a,h)=>{const d=tn(lt(o,new q(a)),h);i=i.updateImmediateChild(a,d)}),fl(o).forEach(a=>{i=i.updateImmediateChild(a.name,a.node)}),i}else{const o=lt(n.visibleWrites,e);return fl(o).forEach(a=>{i=i.updateImmediateChild(a.name,a.node)}),i}}function hm(n,e,t,i,s){b(i||s,"Either existingEventSnap or existingServerSnap must exist");const o=te(e,t);if(nr(n.visibleWrites,o))return null;{const a=lt(n.visibleWrites,o);return ir(a)?s.getChild(t):tn(a,s.getChild(t))}}function um(n,e,t,i){const s=te(e,t),o=Lt(n.visibleWrites,s);if(o!=null)return o;if(i.isCompleteForChild(t)){const a=lt(n.visibleWrites,s);return tn(a,i.getNode().getImmediateChild(t))}else return null}function dm(n,e){return Lt(n.visibleWrites,e)}function fm(n,e,t,i,s,o,a){let h;const d=lt(n.visibleWrites,e),f=Lt(d,W());if(f!=null)h=f;else if(t!=null)h=tn(d,t);else return[];if(h=h.withIndex(a),!h.isEmpty()&&!h.isLeafNode()){const E=[],I=a.getCompare(),C=o?h.getReverseIteratorFrom(i,a):h.getIteratorFrom(i,a);let k=C.getNext();for(;k&&E.length<s;)I(k,i)!==0&&E.push(k),k=C.getNext();return E}else return[]}function pm(){return{visibleWrites:Ae.empty(),allWrites:[],lastWriteId:-1}}function sr(n,e,t,i){return gh(n.writeTree,n.treePath,e,t,i)}function _h(n,e){return cm(n.writeTree,n.treePath,e)}function pl(n,e,t,i){return hm(n.writeTree,n.treePath,e,t,i)}function ji(n,e){return dm(n.writeTree,te(n.treePath,e))}function gm(n,e,t,i,s,o){return fm(n.writeTree,n.treePath,e,t,i,s,o)}function Vr(n,e,t){return um(n.writeTree,n.treePath,e,t)}function mh(n,e){return yh(te(n.treePath,e),n.writeTree)}function yh(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;b(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),b(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const o=s.type;if(t==="child_added"&&o==="child_removed")this.changeMap.set(i,al(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&o==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&o==="child_changed")this.changeMap.set(i,G_(i,s.oldSnap));else if(t==="child_changed"&&o==="child_added")this.changeMap.set(i,$_(i,e.snapshotNode));else if(t==="child_changed"&&o==="child_changed")this.changeMap.set(i,al(i,e.snapshotNode,s.oldSnap));else throw nn("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const vh=new mm;class Br{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Fr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Vr(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ot(this.viewCache_),o=gm(this.writes_,s,t,1,i,e);return o.length===0?null:o[0]}}function ym(n,e){b(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),b(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function vm(n,e,t,i,s){const o=new _m;let a,h;if(t.type===De.OVERWRITE){const f=t;f.source.fromUser?a=rr(n,e,f.path,f.snap,i,s,o):(b(f.source.fromServer,"Unknown source."),h=f.source.tagged||e.serverCache.isFiltered()&&!M(f.path),a=Wi(n,e,f.path,f.snap,i,s,h,o))}else if(t.type===De.MERGE){const f=t;f.source.fromUser?a=wm(n,e,f.path,f.children,i,s,o):(b(f.source.fromServer,"Unknown source."),h=f.source.tagged||e.serverCache.isFiltered(),a=or(n,e,f.path,f.children,i,s,h,o))}else if(t.type===De.ACK_USER_WRITE){const f=t;f.revert?a=Sm(n,e,f.path,i,s,o):a=Em(n,e,f.path,f.affectedTree,i,s,o)}else if(t.type===De.LISTEN_COMPLETE)a=Tm(n,e,t.path,i,o);else throw nn("Unknown operation type: "+t.type);const d=o.getChanges();return Im(e,a,d),{viewCache:a,changes:d}}function Im(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),o=tr(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(o)||!i.getNode().getPriority().equals(o.getPriority()))&&t.push(H_(tr(e)))}}function Ih(n,e,t,i,s,o){const a=e.eventCache;if(ji(i,t)!=null)return e;{let h,d;if(M(t))if(b(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const f=Ot(e),E=f instanceof j?f:j.EMPTY_NODE,I=_h(i,E);h=n.filter.updateFullNode(e.eventCache.getNode(),I,o)}else{const f=sr(i,Ot(e));h=n.filter.updateFullNode(e.eventCache.getNode(),f,o)}else{const f=x(t);if(f===".priority"){b(dt(t)===1,"Can't have a priority with additional path components");const E=a.getNode();d=e.serverCache.getNode();const I=pl(i,t,E,d);I!=null?h=n.filter.updatePriority(E,I):h=a.getNode()}else{const E=z(t);let I;if(a.isCompleteForChild(f)){d=e.serverCache.getNode();const C=pl(i,t,a.getNode(),d);C!=null?I=a.getNode().getImmediateChild(f).updateChild(E,C):I=a.getNode().getImmediateChild(f)}else I=Vr(i,f,e.serverCache);I!=null?h=n.filter.updateChild(a.getNode(),f,I,E,s,o):h=a.getNode()}}return xn(e,h,a.isFullyInitialized()||M(t),n.filter.filtersNodes())}}function Wi(n,e,t,i,s,o,a,h){const d=e.serverCache;let f;const E=a?n.filter:n.filter.getIndexedFilter();if(M(t))f=E.updateFullNode(d.getNode(),i,null);else if(E.filtersNodes()&&!d.isFiltered()){const k=d.getNode().updateChild(t,i);f=E.updateFullNode(d.getNode(),k,null)}else{const k=x(t);if(!d.isCompleteForPath(t)&&dt(t)>1)return e;const R=z(t),D=d.getNode().getImmediateChild(k).updateChild(R,i);k===".priority"?f=E.updatePriority(d.getNode(),D):f=E.updateChild(d.getNode(),k,D,R,vh,null)}const I=uh(e,f,d.isFullyInitialized()||M(t),E.filtersNodes()),C=new Br(s,I,o);return Ih(n,I,t,s,C,h)}function rr(n,e,t,i,s,o,a){const h=e.eventCache;let d,f;const E=new Br(s,e,o);if(M(t))f=n.filter.updateFullNode(e.eventCache.getNode(),i,a),d=xn(e,f,!0,n.filter.filtersNodes());else{const I=x(t);if(I===".priority")f=n.filter.updatePriority(e.eventCache.getNode(),i),d=xn(e,f,h.isFullyInitialized(),h.isFiltered());else{const C=z(t),k=h.getNode().getImmediateChild(I);let R;if(M(C))R=i;else{const O=E.getCompleteChild(I);O!=null?Jc(C)===".priority"&&O.getChild(Qc(C)).isEmpty()?R=O:R=O.updateChild(C,i):R=j.EMPTY_NODE}if(k.equals(R))d=e;else{const O=n.filter.updateChild(h.getNode(),I,R,C,E,a);d=xn(e,O,h.isFullyInitialized(),n.filter.filtersNodes())}}}return d}function gl(n,e){return n.eventCache.isCompleteForChild(e)}function wm(n,e,t,i,s,o,a){let h=e;return i.foreach((d,f)=>{const E=te(t,d);gl(e,x(E))&&(h=rr(n,h,E,f,s,o,a))}),i.foreach((d,f)=>{const E=te(t,d);gl(e,x(E))||(h=rr(n,h,E,f,s,o,a))}),h}function _l(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function or(n,e,t,i,s,o,a,h){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let d=e,f;M(t)?f=i:f=new G(null).setTree(t,i);const E=e.serverCache.getNode();return f.children.inorderTraversal((I,C)=>{if(E.hasChild(I)){const k=e.serverCache.getNode().getImmediateChild(I),R=_l(n,k,C);d=Wi(n,d,new q(I),R,s,o,a,h)}}),f.children.inorderTraversal((I,C)=>{const k=!e.serverCache.isCompleteForChild(I)&&C.value===null;if(!E.hasChild(I)&&!k){const R=e.serverCache.getNode().getImmediateChild(I),O=_l(n,R,C);d=Wi(n,d,new q(I),O,s,o,a,h)}}),d}function Em(n,e,t,i,s,o,a){if(ji(s,t)!=null)return e;const h=e.serverCache.isFiltered(),d=e.serverCache;if(i.value!=null){if(M(t)&&d.isFullyInitialized()||d.isCompleteForPath(t))return Wi(n,e,t,d.getNode().getChild(t),s,o,h,a);if(M(t)){let f=new G(null);return d.getNode().forEachChild(Jt,(E,I)=>{f=f.set(new q(E),I)}),or(n,e,t,f,s,o,h,a)}else return e}else{let f=new G(null);return i.foreach((E,I)=>{const C=te(t,E);d.isCompleteForPath(C)&&(f=f.set(E,d.getNode().getChild(C)))}),or(n,e,t,f,s,o,h,a)}}function Tm(n,e,t,i,s){const o=e.serverCache,a=uh(e,o.getNode(),o.isFullyInitialized()||M(t),o.isFiltered());return Ih(n,a,t,i,vh,s)}function Sm(n,e,t,i,s,o){let a;if(ji(i,t)!=null)return e;{const h=new Br(i,e,s),d=e.eventCache.getNode();let f;if(M(t)||x(t)===".priority"){let E;if(e.serverCache.isFullyInitialized())E=sr(i,Ot(e));else{const I=e.serverCache.getNode();b(I instanceof j,"serverChildren would be complete if leaf node"),E=_h(i,I)}E=E,f=n.filter.updateFullNode(d,E,o)}else{const E=x(t);let I=Vr(i,E,e.serverCache);I==null&&e.serverCache.isCompleteForChild(E)&&(I=d.getImmediateChild(E)),I!=null?f=n.filter.updateChild(d,E,I,z(t),h,o):e.eventCache.getNode().hasChild(E)?f=n.filter.updateChild(d,E,j.EMPTY_NODE,z(t),h,o):f=d,f.isEmpty()&&e.serverCache.isFullyInitialized()&&(a=sr(i,Ot(e)),a.isLeafNode()&&(f=n.filter.updateFullNode(f,a,o)))}return a=e.serverCache.isFullyInitialized()||ji(i,W())!=null,xn(e,f,a,n.filter.filtersNodes())}}function Cm(n,e){const t=Ot(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!M(e)&&!t.getImmediateChild(x(e)).isEmpty())?t.getChild(e):null}function ml(n,e,t,i){e.type===De.MERGE&&e.source.queryId!==null&&(b(Ot(n.viewCache_),"We should always have a full cache before handling merges"),b(tr(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,o=vm(n.processor_,s,e,t,i);return ym(n.processor_,o.viewCache),b(o.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=o.viewCache,Am(n,o.changes,o.viewCache.eventCache.getNode())}function Am(n,e,t,i){const s=n.eventRegistrations_;return Z_(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yl;function bm(n){b(!yl,"__referenceConstructor has already been defined"),yl=n}function jr(n,e,t,i){const s=e.source.queryId;if(s!==null){const o=n.views.get(s);return b(o!=null,"SyncTree gave us an op for an invalid query."),ml(o,e,t,i)}else{let o=[];for(const a of n.views.values())o=o.concat(ml(a,e,t,i));return o}}function Wr(n,e){let t=null;for(const i of n.views.values())t=t||Cm(i,e);return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vl;function Rm(n){b(!vl,"__referenceConstructor has already been defined"),vl=n}class Il{constructor(e){this.listenProvider_=e,this.syncPointTree_=new G(null),this.pendingWriteTree_=pm(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function km(n,e,t,i,s){return im(n.pendingWriteTree_,e,t,i,s),s?Ji(n,new Pt(ah(),e,t)):[]}function $t(n,e,t=!1){const i=sm(n.pendingWriteTree_,e);if(rm(n.pendingWriteTree_,e)){let o=new G(null);return i.snap!=null?o=o.set(W(),!0):ve(i.children,a=>{o=o.set(new q(a),!0)}),Ji(n,new Bi(i.path,o,t))}else return[]}function Yi(n,e,t){return Ji(n,new Pt(lh(),e,t))}function Nm(n,e,t){const i=G.fromObject(t);return Ji(n,new Hn(lh(),e,i))}function Pm(n,e,t,i){const s=Sh(n,i);if(s!=null){const o=Ch(s),a=o.path,h=o.queryId,d=ye(a,e),f=new Pt(ch(h),d,t);return Ah(n,a,f)}else return[]}function Om(n,e,t,i){const s=Sh(n,i);if(s){const o=Ch(s),a=o.path,h=o.queryId,d=ye(a,e),f=G.fromObject(t),E=new Hn(ch(h),d,f);return Ah(n,a,E)}else return[]}function wh(n,e,t){const s=n.pendingWriteTree_,o=n.syncPointTree_.findOnPath(e,(a,h)=>{const d=ye(a,e),f=Wr(h,d);if(f)return f});return gh(s,e,o,t,!0)}function Ji(n,e){return Eh(e,n.syncPointTree_,null,fh(n.pendingWriteTree_,W()))}function Eh(n,e,t,i){if(M(n.path))return Th(n,e,t,i);{const s=e.get(W());t==null&&s!=null&&(t=Wr(s,W()));let o=[];const a=x(n.path),h=n.operationForChild(a),d=e.children.get(a);if(d&&h){const f=t?t.getImmediateChild(a):null,E=mh(i,a);o=o.concat(Eh(h,d,f,E))}return s&&(o=o.concat(jr(s,n,i,t))),o}}function Th(n,e,t,i){const s=e.get(W());t==null&&s!=null&&(t=Wr(s,W()));let o=[];return e.children.inorderTraversal((a,h)=>{const d=t?t.getImmediateChild(a):null,f=mh(i,a),E=n.operationForChild(a);E&&(o=o.concat(Th(E,h,d,f)))}),s&&(o=o.concat(jr(s,n,i,t))),o}function Sh(n,e){return n.tagToQueryMap.get(e)}function Ch(n){const e=n.indexOf("$");return b(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new q(n.substr(0,e))}}function Ah(n,e,t){const i=n.syncPointTree_.get(e);b(i,"Missing sync point for query tag that we're tracking");const s=fh(n.pendingWriteTree_,e);return jr(i,t,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Hr(t)}node(){return this.node_}}class $r{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=te(this.path_,e);return new $r(this.syncTree_,t)}node(){return wh(this.syncTree_,this.path_)}}const Dm=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},wl=function(n,e,t){if(!n||typeof n!="object")return n;if(b(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Mm(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Lm(n[".sv"],e);b(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Mm=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:b(!1,"Unexpected server value: "+n)}},Lm=function(n,e,t){n.hasOwnProperty("increment")||b(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&b(!1,"Unexpected increment value: "+i);const s=e.node();if(b(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const a=s.getValue();return typeof a!="number"?i:a+i},xm=function(n,e,t,i){return Gr(e,new $r(t,n),i)},Um=function(n,e,t){return Gr(n,new Hr(e),t)};function Gr(n,e,t){const i=n.getPriority().val(),s=wl(i,e.getImmediateChild(".priority"),t);let o;if(n.isLeafNode()){const a=n,h=wl(a.getValue(),e,t);return h!==a.getValue()||s!==a.getPriority().val()?new Z(h,ae(s)):n}else{const a=n;return o=a,s!==a.getPriority().val()&&(o=o.updatePriority(new Z(s))),a.forEachChild(le,(h,d)=>{const f=Gr(d,e.getImmediateChild(h),t);f!==d&&(o=o.updateImmediateChild(h,f))}),o}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function qr(n,e){let t=e instanceof q?e:new q(e),i=n,s=x(t);for(;s!==null;){const o=Xt(i.node.children,s)||{children:{},childCount:0};i=new zr(s,i,o),t=z(t),s=x(t)}return i}function an(n){return n.node.value}function bh(n,e){n.node.value=e,ar(n)}function Rh(n){return n.node.childCount>0}function Fm(n){return an(n)===void 0&&!Rh(n)}function Xi(n,e){ve(n.node.children,(t,i)=>{e(new zr(t,n,i))})}function kh(n,e,t,i){t&&e(n),Xi(n,s=>{kh(s,e,!0)})}function Vm(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function ei(n){return new q(n.parent===null?n.name:ei(n.parent)+"/"+n.name)}function ar(n){n.parent!==null&&Bm(n.parent,n.name,n)}function Bm(n,e,t){const i=Fm(t),s=qe(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,ar(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,ar(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm=/[\[\].#$\/\u0000-\u001F\u007F]/,Wm=/[\[\].#$\u0000-\u001F\u007F]/,Vs=10*1024*1024,Nh=function(n){return typeof n=="string"&&n.length!==0&&!jm.test(n)},Hm=function(n){return typeof n=="string"&&n.length!==0&&!Wm.test(n)},$m=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Hm(n)},Ph=function(n,e,t){const i=t instanceof q?new T_(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+It(i));if(typeof e=="function")throw new Error(n+"contains a function "+It(i)+" with contents = "+e.toString());if(kc(e))throw new Error(n+"contains "+e.toString()+" "+It(i));if(typeof e=="string"&&e.length>Vs/3&&Hi(e)>Vs)throw new Error(n+"contains a string greater than "+Vs+" utf8 bytes "+It(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,o=!1;if(ve(e,(a,h)=>{if(a===".value")s=!0;else if(a!==".priority"&&a!==".sv"&&(o=!0,!Nh(a)))throw new Error(n+" contains an invalid key ("+a+") "+It(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);S_(i,a),Ph(n,h,i),C_(i)}),s&&o)throw new Error(n+' contains ".value" child '+It(i)+" in addition to actual children.")}},Gm=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Nh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!$m(t))throw new Error(Gu(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function qm(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],o=s.getPath();t!==null&&!Zc(o,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:o}),t.events.push(s)}t&&n.eventLists_.push(t)}function xt(n,e,t){qm(n,t),Km(n,i=>Ce(i,e)||Ce(e,i))}function Km(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const o=s.path;e(o)?(Ym(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Ym(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();Mn&&oe("event: "+t.toString()),Qn(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm="repo_interrupt",Xm=25;class Qm{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new zm,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Vi(),this.transactionQueueTree_=new zr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Zm(n,e,t){if(n.stats_=Dr(n.repoInfo_),n.forceRestClient_||Kg())n.server_=new Fi(n.repoInfo_,(i,s,o,a)=>{El(n,i,s,o,a)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Tl(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ie(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new je(n.repoInfo_,e,(i,s,o,a)=>{El(n,i,s,o,a)},i=>{Tl(n,i)},i=>{ty(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=Zg(n.repoInfo_,()=>new Q_(n.stats_,n.server_)),n.infoData_=new q_,n.infoSyncTree_=new Il({startListening:(i,s,o,a)=>{let h=[];const d=n.infoData_.getNode(i._path);return d.isEmpty()||(h=Yi(n.infoSyncTree_,i._path,d),setTimeout(()=>{a("ok")},0)),h},stopListening:()=>{}}),Kr(n,"connected",!1),n.serverSyncTree_=new Il({startListening:(i,s,o,a)=>(n.server_.listen(i,o,s,(h,d)=>{const f=a(h,d);xt(n.eventQueue_,i._path,f)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function ey(n){const t=n.infoData_.getNode(new q(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Oh(n){return Dm({timestamp:ey(n)})}function El(n,e,t,i,s){n.dataUpdateCount++;const o=new q(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let a=[];if(s)if(i){const d=Ai(t,f=>ae(f));a=Om(n.serverSyncTree_,o,d,s)}else{const d=ae(t);a=Pm(n.serverSyncTree_,o,d,s)}else if(i){const d=Ai(t,f=>ae(f));a=Nm(n.serverSyncTree_,o,d)}else{const d=ae(t);a=Yi(n.serverSyncTree_,o,d)}let h=o;a.length>0&&(h=Jr(n,o)),xt(n.eventQueue_,h,a)}function Tl(n,e){Kr(n,"connected",e),e===!1&&iy(n)}function ty(n,e){ve(e,(t,i)=>{Kr(n,t,i)})}function Kr(n,e,t){const i=new q("/.info/"+e),s=ae(t);n.infoData_.updateSnapshot(i,s);const o=Yi(n.infoSyncTree_,i,s);xt(n.eventQueue_,i,o)}function ny(n){return n.nextWriteId_++}function iy(n){Dh(n,"onDisconnectEvents");const e=Oh(n),t=Vi();er(n.onDisconnect_,W(),(s,o)=>{const a=xm(s,o,n.serverSyncTree_,e);oh(t,s,a)});let i=[];er(t,W(),(s,o)=>{i=i.concat(Yi(n.serverSyncTree_,s,o));const a=ay(n,s);Jr(n,a)}),n.onDisconnect_=Vi(),xt(n.eventQueue_,W(),i)}function sy(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Jm)}function Dh(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),oe(t,...e)}function Mh(n,e,t){return wh(n.serverSyncTree_,e,t)||j.EMPTY_NODE}function Yr(n,e=n.transactionQueueTree_){if(e||Qi(n,e),an(e)){const t=xh(n,e);b(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&ry(n,ei(e),t)}else Rh(e)&&Xi(e,t=>{Yr(n,t)})}function ry(n,e,t){const i=t.map(f=>f.currentWriteId),s=Mh(n,e,i);let o=s;const a=s.hash();for(let f=0;f<t.length;f++){const E=t[f];b(E.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),E.status=1,E.retryCount++;const I=ye(e,E.path);o=o.updateChild(I,E.currentOutputSnapshotRaw)}const h=o.val(!0),d=e;n.server_.put(d.toString(),h,f=>{Dh(n,"transaction put response",{path:d.toString(),status:f});let E=[];if(f==="ok"){const I=[];for(let C=0;C<t.length;C++)t[C].status=2,E=E.concat($t(n.serverSyncTree_,t[C].currentWriteId)),t[C].onComplete&&I.push(()=>t[C].onComplete(null,!0,t[C].currentOutputSnapshotResolved)),t[C].unwatcher();Qi(n,qr(n.transactionQueueTree_,e)),Yr(n,n.transactionQueueTree_),xt(n.eventQueue_,e,E);for(let C=0;C<I.length;C++)Qn(I[C])}else{if(f==="datastale")for(let I=0;I<t.length;I++)t[I].status===3?t[I].status=4:t[I].status=0;else{ge("transaction at "+d.toString()+" failed: "+f);for(let I=0;I<t.length;I++)t[I].status=4,t[I].abortReason=f}Jr(n,e)}},a)}function Jr(n,e){const t=Lh(n,e),i=ei(t),s=xh(n,t);return oy(n,s,i),i}function oy(n,e,t){if(e.length===0)return;const i=[];let s=[];const a=e.filter(h=>h.status===0).map(h=>h.currentWriteId);for(let h=0;h<e.length;h++){const d=e[h],f=ye(t,d.path);let E=!1,I;if(b(f!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),d.status===4)E=!0,I=d.abortReason,s=s.concat($t(n.serverSyncTree_,d.currentWriteId,!0));else if(d.status===0)if(d.retryCount>=Xm)E=!0,I="maxretry",s=s.concat($t(n.serverSyncTree_,d.currentWriteId,!0));else{const C=Mh(n,d.path,a);d.currentInputSnapshot=C;const k=e[h].update(C.val());if(k!==void 0){Ph("transaction failed: Data returned ",k,d.path);let R=ae(k);typeof k=="object"&&k!=null&&qe(k,".priority")||(R=R.updatePriority(C.getPriority()));const D=d.currentWriteId,ne=Oh(n),X=Um(R,C,ne);d.currentOutputSnapshotRaw=R,d.currentOutputSnapshotResolved=X,d.currentWriteId=ny(n),a.splice(a.indexOf(D),1),s=s.concat(km(n.serverSyncTree_,d.path,X,d.currentWriteId,d.applyLocally)),s=s.concat($t(n.serverSyncTree_,D,!0))}else E=!0,I="nodata",s=s.concat($t(n.serverSyncTree_,d.currentWriteId,!0))}xt(n.eventQueue_,t,s),s=[],E&&(e[h].status=2,(function(C){setTimeout(C,Math.floor(0))})(e[h].unwatcher),e[h].onComplete&&(I==="nodata"?i.push(()=>e[h].onComplete(null,!1,e[h].currentInputSnapshot)):i.push(()=>e[h].onComplete(new Error(I),!1,null))))}Qi(n,n.transactionQueueTree_);for(let h=0;h<i.length;h++)Qn(i[h]);Yr(n,n.transactionQueueTree_)}function Lh(n,e){let t,i=n.transactionQueueTree_;for(t=x(e);t!==null&&an(i)===void 0;)i=qr(i,t),e=z(e),t=x(e);return i}function xh(n,e){const t=[];return Uh(n,e,t),t.sort((i,s)=>i.order-s.order),t}function Uh(n,e,t){const i=an(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);Xi(e,s=>{Uh(n,s,t)})}function Qi(n,e){const t=an(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,bh(e,t.length>0?t:void 0)}Xi(e,i=>{Qi(n,i)})}function ay(n,e){const t=ei(Lh(n,e)),i=qr(n.transactionQueueTree_,e);return Vm(i,s=>{Bs(n,s)}),Bs(n,i),kh(i,s=>{Bs(n,s)}),t}function Bs(n,e){const t=an(e);if(t){const i=[];let s=[],o=-1;for(let a=0;a<t.length;a++)t[a].status===3||(t[a].status===1?(b(o===a-1,"All SENT items should be at beginning of queue."),o=a,t[a].status=3,t[a].abortReason="set"):(b(t[a].status===0,"Unexpected transaction status in abort"),t[a].unwatcher(),s=s.concat($t(n.serverSyncTree_,t[a].currentWriteId,!0)),t[a].onComplete&&i.push(t[a].onComplete.bind(null,new Error("set"),!1,null))));o===-1?bh(e,void 0):t.length=o+1,xt(n.eventQueue_,ei(e),s);for(let a=0;a<i.length;a++)Qn(i[a])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ly(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function cy(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):ge(`Invalid query segment '${t}' in query '${n}'`)}return e}const Sl=function(n,e){const t=hy(n),i=t.namespace;t.domain==="firebase.com"&&Ge(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&Ge("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Bg();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new jc(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new q(t.pathString)}},hy=function(n){let e="",t="",i="",s="",o="",a=!0,h="https",d=443;if(typeof n=="string"){let f=n.indexOf("//");f>=0&&(h=n.substring(0,f-1),n=n.substring(f+2));let E=n.indexOf("/");E===-1&&(E=n.length);let I=n.indexOf("?");I===-1&&(I=n.length),e=n.substring(0,Math.min(E,I)),E<I&&(s=ly(n.substring(E,I)));const C=cy(n.substring(Math.min(n.length,I)));f=e.indexOf(":"),f>=0?(a=h==="https"||h==="wss",d=parseInt(e.substring(f+1),10)):f=e.length;const k=e.slice(0,f);if(k.toLowerCase()==="localhost")t="localhost";else if(k.split(".").length<=2)t=k;else{const R=e.indexOf(".");i=e.substring(0,R).toLowerCase(),t=e.substring(R+1),o=i}"ns"in C&&(o=C.ns)}return{host:e,port:d,domain:t,subdomain:i,secure:a,scheme:h,pathString:s,namespace:o}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return M(this._path)?null:Jc(this._path)}get ref(){return new ln(this._repo,this._path)}get _queryIdentifier(){const e=cl(this._queryParams),t=Pr(e);return t==="{}"?"default":t}get _queryObject(){return cl(this._queryParams)}isEqual(e){if(e=ft(e),!(e instanceof Xr))return!1;const t=this._repo===e._repo,i=Zc(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+E_(this._path)}}class ln extends Xr{constructor(e,t){super(e,t,new Ur,!1)}get parent(){const e=Qc(this._path);return e===null?null:new ln(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}bm(ln);Rm(ln);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy="FIREBASE_DATABASE_EMULATOR_HOST",lr={};let dy=!1;function fy(n,e,t,i){const s=e.lastIndexOf(":"),o=e.substring(0,s),a=Dt(o);n.repoInfo_=new jc(e,a,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),i&&(n.authTokenProvider_=i)}function py(n,e,t,i,s){let o=i||n.options.databaseURL;o===void 0&&(n.options.projectId||Ge("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),oe("Using default host for project ",n.options.projectId),o=`${n.options.projectId}-default-rtdb.firebaseio.com`);let a=Sl(o,s),h=a.repoInfo,d;typeof process<"u"&&$a&&(d=$a[uy]),d?(o=`http://${d}?ns=${h.namespace}`,a=Sl(o,s),h=a.repoInfo):a.repoInfo.secure;const f=new Jg(n.name,n.options,e);Gm("Invalid Firebase Database URL",a),M(a.path)||Ge("Database URL must point to the root of a Firebase Database (not including a child path).");const E=_y(h,n,f,new Yg(n,t));return new my(E,n)}function gy(n,e){const t=lr[e];(!t||t[n.key]!==n)&&Ge(`Database ${e}(${n.repoInfo_}) has already been deleted.`),sy(n),delete t[n.key]}function _y(n,e,t,i){let s=lr[e.name];s||(s={},lr[e.name]=s);let o=s[n.toURLString()];return o&&Ge("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new Qm(n,dy,t,i),s[n.toURLString()]=o,o}class my{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Zm(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ln(this._repo,W())),this._rootInternal}_delete(){return this._rootInternal!==null&&(gy(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ge("Cannot call "+e+" on a deleted database.")}}function yy(n=_r(),e){const t=Gi(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=Nl("database");i&&vy(t,...i)}return t}function vy(n,e,t,i={}){n=ft(n),n._checkNotDeleted("useEmulator");const s=`${e}:${t}`,o=n._repoInternal;if(n._instanceStarted){if(s===n._repoInternal.repoInfo_.host&&ct(i,o.repoInfo_.emulatorOptions))return;Ge("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let a;if(o.repoInfo_.nodeAdmin)i.mockUserToken&&Ge('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),a=new Ti(Ti.OWNER);else if(i.mockUserToken){const h=typeof i.mockUserToken=="string"?i.mockUserToken:Dl(i.mockUserToken,n.app.options.projectId);a=new Ti(h)}Dt(e)&&(dr(e),fr("Database",!0)),fy(o,s,i,a)}/**
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
 */function Iy(n){Mg(Mt),bt(new ht("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return py(i,s,o,t)},"PUBLIC").setMultipleInstances(!0)),Me(Ga,za,n),Me(Ga,za,"esm2020")}je.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};je.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Iy();const Fh={apiKey:"AIzaSyDif5g62oVWT460e5q3Kpg7txgRN8VXk24",authDomain:"gustoplan-dev.firebaseapp.com",projectId:"gustoplan-dev",storageBucket:"gustoplan-dev.firebasestorage.app",messagingSenderId:"554162135180",appId:"1:554162135180:web:f5addf322a0977ffe31ba9",databaseURL:"https://gustoplan-dev-default-rtdb.europe-west1.firebasedatabase.app"},Qr=Fl(Fh);Pf(Qr);Og(Qr);yy(Qr);firebase.initializeApp(Fh);const wy=new firebaseui.auth.AuthUI(firebase.auth()),Ey={callbacks:{signInSuccessWithAuthResult:function(n,e){const t=n.user;return t&&firebase.firestore().collection("users").doc(t.uid).set({uid:t.uid,displayName:t.displayName,email:t.email,photoURL:t.photoURL,displayName_lowercase:t.displayName?t.displayName.toLowerCase():""},{merge:!0}).then(()=>{window.location.assign("index.html")}).catch(o=>{console.error("Error writing user to Firestore: ",o),window.location.assign("index.html")}),!1},uiShown:function(){document.getElementById("loader").style.display="none"}},credentialHelper:firebaseui.auth.CredentialHelper.NONE,signInFlow:"popup",signInOptions:[firebase.auth.EmailAuthProvider.PROVIDER_ID,{provider:firebase.auth.GoogleAuthProvider.PROVIDER_ID,customParameters:{prompt:"select_account"}}]};wy.start("#firebaseui-auth-container",Ey);
