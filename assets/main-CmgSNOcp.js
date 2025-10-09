const Vf=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const Mf=()=>{};var tl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Of=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Mu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,u=s+2<n.length,h=u?n[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let y=(l&15)<<2|h>>6,C=h&63;u||(C=64,a||(y=64)),r.push(t[f],t[p],t[y],t[C])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Vu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Of(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new Ff;const y=i<<2|l>>4;if(r.push(y),h!==64){const C=l<<4&240|h>>2;if(r.push(C),p!==64){const P=h<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ff extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Uf=function(n){const e=Vu(n);return Mu.encodeByteArray(e,!0)},fi=function(n){return Uf(n).replace(/\./g,"")},Ou=function(n){try{return Mu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Bf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const jf=()=>Bf().__FIREBASE_DEFAULTS__,qf=()=>{if(typeof process>"u"||typeof tl>"u")return;const n=tl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},$f=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ou(n[1]);return e&&JSON.parse(e)},Bi=()=>{try{return Mf()||jf()||qf()||$f()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Fu=n=>Bi()?.emulatorHosts?.[n],Hf=n=>{const e=Fu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Uu=()=>Bi()?.config,Bu=n=>Bi()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Dr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ju(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Gf(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[fi(JSON.stringify(t)),fi(JSON.stringify(a)),""].join(".")}const is={};function Wf(){const n={prod:[],emulator:[]};for(const e of Object.keys(is))is[e]?n.emulator.push(e):n.prod.push(e);return n}function Kf(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let nl=!1;function qu(n,e){if(typeof window>"u"||typeof document>"u"||!Dr(window.location.host)||is[n]===e||is[n]||nl)return;is[n]=e;function t(y){return`__firebase__banner__${y}`}const r="__firebase__banner",i=Wf().prod.length>0;function a(){const y=document.getElementById(r);y&&y.remove()}function l(y){y.style.display="flex",y.style.background="#7faaf0",y.style.position="fixed",y.style.bottom="5px",y.style.left="5px",y.style.padding=".5em",y.style.borderRadius="5px",y.style.alignItems="center"}function u(y,C){y.setAttribute("width","24"),y.setAttribute("id",C),y.setAttribute("height","24"),y.setAttribute("viewBox","0 0 24 24"),y.setAttribute("fill","none"),y.style.marginLeft="-6px"}function h(){const y=document.createElement("span");return y.style.cursor="pointer",y.style.marginLeft="16px",y.style.fontSize="24px",y.innerHTML=" &times;",y.onclick=()=>{nl=!0,a()},y}function f(y,C){y.setAttribute("id",C),y.innerText="Learn more",y.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",y.setAttribute("target","__blank"),y.style.paddingLeft="5px",y.style.textDecoration="underline"}function p(){const y=Kf(r),C=t("text"),P=document.getElementById(C)||document.createElement("span"),V=t("learnmore"),N=document.getElementById(V)||document.createElement("a"),H=t("preprendIcon"),re=document.getElementById(H)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(y.created){const q=y.element;l(q),f(N,V);const ne=h();u(re,H),q.append(re,P,N,ne),document.body.appendChild(q)}i?(P.innerText="Preview backend disconnected.",re.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(re.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
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
 */function gt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gt())}function Jf(){const n=Bi()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Xf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Yf(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Zf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function em(){const n=gt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function tm(){return!Jf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function nm(){try{return typeof indexedDB=="object"}catch{return!1}}function rm(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm="FirebaseError";class dn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=sm,Object.setPrototypeOf(this,dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ts.prototype.create)}}class Ts{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?im(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new dn(s,l,r)}}function im(n,e){return n.replace(om,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const om=/\{\$([^}]+)}/g;function am(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function sn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(rl(i)&&rl(a)){if(!sn(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function rl(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function cm(n,e){const t=new lm(n,e);return t.subscribe.bind(t)}class lm{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");um(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=bo),s.error===void 0&&(s.error=bo),s.complete===void 0&&(s.complete=bo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function um(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function bo(){}/**
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
 */function $e(n){return n&&n._delegate?n._delegate:n}class nr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Jn="[DEFAULT]";/**
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
 */class dm{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new zf;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fm(e))try{this.getOrInitializeService({instanceIdentifier:Jn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Jn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Jn){return this.instances.has(e)}getOptions(e=Jn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:hm(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Jn){return this.component?this.component.multipleInstances?e:Jn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hm(n){return n===Jn?void 0:n}function fm(n){return n.instantiationMode==="EAGER"}/**
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
 */class mm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new dm(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ge||(ge={}));const pm={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},gm=ge.INFO,ym={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},_m=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=ym[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ya{constructor(e){this.name=e,this._logLevel=gm,this._logHandler=_m,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const vm=(n,e)=>e.some(t=>n instanceof t);let sl,il;function Em(){return sl||(sl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Im(){return il||(il=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $u=new WeakMap,Bo=new WeakMap,Hu=new WeakMap,To=new WeakMap,_a=new WeakMap;function wm(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Rn(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&$u.set(t,n)}).catch(()=>{}),_a.set(e,n),e}function bm(n){if(Bo.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Bo.set(n,e)}let jo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Bo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Hu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Rn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Tm(n){jo=n(jo)}function Am(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ao(this),e,...t);return Hu.set(r,e.sort?e.sort():[e]),Rn(r)}:Im().includes(n)?function(...e){return n.apply(Ao(this),e),Rn($u.get(this))}:function(...e){return Rn(n.apply(Ao(this),e))}}function Cm(n){return typeof n=="function"?Am(n):(n instanceof IDBTransaction&&bm(n),vm(n,Em())?new Proxy(n,jo):n)}function Rn(n){if(n instanceof IDBRequest)return wm(n);if(To.has(n))return To.get(n);const e=Cm(n);return e!==n&&(To.set(n,e),_a.set(e,n)),e}const Ao=n=>_a.get(n);function Sm(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=Rn(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Rn(a.result),u.oldVersion,u.newVersion,Rn(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Rm=["get","getKey","getAll","getAllKeys","count"],Pm=["put","add","delete","clear"],Co=new Map;function ol(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Co.get(e))return Co.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Pm.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Rm.includes(t)))return;const i=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),s&&u.done]))[0]};return Co.set(e,i),i}Tm(n=>({...n,get:(e,t,r)=>ol(e,t)||n.get(e,t,r),has:(e,t)=>!!ol(e,t)||n.has(e,t)}));/**
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
 */class xm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(km(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function km(n){return n.getComponent()?.type==="VERSION"}const qo="@firebase/app",al="0.14.3";/**
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
 */const on=new ya("@firebase/app"),Nm="@firebase/app-compat",Lm="@firebase/analytics-compat",Dm="@firebase/analytics",Vm="@firebase/app-check-compat",Mm="@firebase/app-check",Om="@firebase/auth",Fm="@firebase/auth-compat",Um="@firebase/database",Bm="@firebase/data-connect",jm="@firebase/database-compat",qm="@firebase/functions",$m="@firebase/functions-compat",Hm="@firebase/installations",zm="@firebase/installations-compat",Gm="@firebase/messaging",Wm="@firebase/messaging-compat",Km="@firebase/performance",Qm="@firebase/performance-compat",Jm="@firebase/remote-config",Xm="@firebase/remote-config-compat",Ym="@firebase/storage",Zm="@firebase/storage-compat",ep="@firebase/firestore",tp="@firebase/ai",np="@firebase/firestore-compat",rp="firebase",sp="12.3.0";/**
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
 */const $o="[DEFAULT]",ip={[qo]:"fire-core",[Nm]:"fire-core-compat",[Dm]:"fire-analytics",[Lm]:"fire-analytics-compat",[Mm]:"fire-app-check",[Vm]:"fire-app-check-compat",[Om]:"fire-auth",[Fm]:"fire-auth-compat",[Um]:"fire-rtdb",[Bm]:"fire-data-connect",[jm]:"fire-rtdb-compat",[qm]:"fire-fn",[$m]:"fire-fn-compat",[Hm]:"fire-iid",[zm]:"fire-iid-compat",[Gm]:"fire-fcm",[Wm]:"fire-fcm-compat",[Km]:"fire-perf",[Qm]:"fire-perf-compat",[Jm]:"fire-rc",[Xm]:"fire-rc-compat",[Ym]:"fire-gcs",[Zm]:"fire-gcs-compat",[ep]:"fire-fst",[np]:"fire-fst-compat",[tp]:"fire-vertex","fire-js":"fire-js",[rp]:"fire-js-all"};/**
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
 */const mi=new Map,op=new Map,Ho=new Map;function cl(n,e){try{n.container.addComponent(e)}catch(t){on.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Tr(n){const e=n.name;if(Ho.has(e))return on.debug(`There were multiple attempts to register component ${e}.`),!1;Ho.set(e,n);for(const t of mi.values())cl(t,n);for(const t of op.values())cl(t,n);return!0}function va(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ht(n){return n==null?!1:n.settings!==void 0}/**
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
 */const ap={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pn=new Ts("app","Firebase",ap);/**
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
 */class cp{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new nr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pn.create("app-deleted",{appName:this._name})}}/**
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
 */const Vr=sp;function zu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:$o,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Pn.create("bad-app-name",{appName:String(s)});if(t||(t=Uu()),!t)throw Pn.create("no-options");const i=mi.get(s);if(i){if(sn(t,i.options)&&sn(r,i.config))return i;throw Pn.create("duplicate-app",{appName:s})}const a=new mm(s);for(const u of Ho.values())a.addComponent(u);const l=new cp(t,r,a);return mi.set(s,l),l}function Gu(n=$o){const e=mi.get(n);if(!e&&n===$o&&Uu())return zu();if(!e)throw Pn.create("no-app",{appName:n});return e}function xn(n,e,t){let r=ip[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),on.warn(a.join(" "));return}Tr(new nr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const lp="firebase-heartbeat-database",up=1,ms="firebase-heartbeat-store";let So=null;function Wu(){return So||(So=Sm(lp,up,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ms)}catch(t){console.warn(t)}}}}).catch(n=>{throw Pn.create("idb-open",{originalErrorMessage:n.message})})),So}async function dp(n){try{const t=(await Wu()).transaction(ms),r=await t.objectStore(ms).get(Ku(n));return await t.done,r}catch(e){if(e instanceof dn)on.warn(e.message);else{const t=Pn.create("idb-get",{originalErrorMessage:e?.message});on.warn(t.message)}}}async function ll(n,e){try{const r=(await Wu()).transaction(ms,"readwrite");await r.objectStore(ms).put(e,Ku(n)),await r.done}catch(t){if(t instanceof dn)on.warn(t.message);else{const r=Pn.create("idb-set",{originalErrorMessage:t?.message});on.warn(r.message)}}}function Ku(n){return`${n.name}!${n.options.appId}`}/**
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
 */const hp=1024,fp=30;class mp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new gp(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ul();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>fp){const s=yp(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){on.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ul(),{heartbeatsToSend:t,unsentEntries:r}=pp(this._heartbeatsCache.heartbeats),s=fi(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return on.warn(e),""}}}function ul(){return new Date().toISOString().substring(0,10)}function pp(n,e=hp){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),dl(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),dl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class gp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nm()?rm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await dp(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ll(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ll(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function dl(n){return fi(JSON.stringify({version:2,heartbeats:n})).length}function yp(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function _p(n){Tr(new nr("platform-logger",e=>new xm(e),"PRIVATE")),Tr(new nr("heartbeat",e=>new mp(e),"PRIVATE")),xn(qo,al,n),xn(qo,al,"esm2020"),xn("fire-js","")}_p("");function Qu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vp=Qu,Ju=new Ts("auth","Firebase",Qu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi=new ya("@firebase/auth");function Ep(n,...e){pi.logLevel<=ge.WARN&&pi.warn(`Auth (${Vr}): ${n}`,...e)}function ri(n,...e){pi.logLevel<=ge.ERROR&&pi.error(`Auth (${Vr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(n,...e){throw Ea(n,...e)}function zt(n,...e){return Ea(n,...e)}function Xu(n,e,t){const r={...vp(),[e]:t};return new Ts("auth","Firebase",r).create(e,{appName:n.name})}function Zn(n){return Xu(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ea(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Ju.create(n,...e)}function ae(n,e,...t){if(!n)throw Ea(e,...t)}function nn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ri(e),new Error(e)}function cn(n,e){n||nn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(){return typeof self<"u"&&self.location?.href||""}function Ip(){return hl()==="http:"||hl()==="https:"}function hl(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ip()||Yf()||"connection"in navigator)?navigator.onLine:!0}function bp(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,t){this.shortDelay=e,this.longDelay=t,cn(t>e,"Short delay should be less than long delay!"),this.isMobile=Qf()||Zf()}get(){return wp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(n,e){cn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;nn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;nn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;nn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Cp=new Cs(3e4,6e4);function wa(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Mr(n,e,t,r,s={}){return Zu(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=As({key:n.config.apiKey,...a}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:u,...i};return Xf()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&Dr(n.emulatorConfig.host)&&(h.credentials="include"),Yu.fetch()(await ed(n,n.config.apiHost,t,l),h)})}async function Zu(n,e,t){n._canInitEmulator=!1;const r={...Tp,...e};try{const s=new Rp(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Js(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Js(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Js(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Js(n,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Xu(n,f,h);an(n,f)}}catch(s){if(s instanceof dn)throw s;an(n,"network-request-failed",{message:String(s)})}}async function Sp(n,e,t,r,s={}){const i=await Mr(n,e,t,r,s);return"mfaPendingCredential"in i&&an(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function ed(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?Ia(n.config,s):`${n.config.apiScheme}://${s}`;return Ap.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class Rp{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(zt(this.auth,"network-request-failed")),Cp.get())})}}function Js(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=zt(n,e,r);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pp(n,e){return Mr(n,"POST","/v1/accounts:delete",e)}async function gi(n,e){return Mr(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function xp(n,e=!1){const t=$e(n),r=await t.getIdToken(e),s=ba(r);ae(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i?.sign_in_provider;return{claims:s,token:r,authTime:os(Ro(s.auth_time)),issuedAtTime:os(Ro(s.iat)),expirationTime:os(Ro(s.exp)),signInProvider:a||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Ro(n){return Number(n)*1e3}function ba(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ri("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ou(t);return s?JSON.parse(s):(ri("Failed to decode base64 JWT payload"),null)}catch(s){return ri("Caught error parsing JWT payload as JSON",s?.toString()),null}}function fl(n){const e=ba(n);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ps(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof dn&&kp(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function kp({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=os(this.lastLoginAt),this.creationTime=os(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function yi(n){const e=n.auth,t=await n.getIdToken(),r=await ps(n,gi(e,{idToken:t}));ae(r?.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=s.providerUserInfo?.length?td(s.providerUserInfo):[],a=Dp(n.providerData,i),l=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!a?.length,h=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Go(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,f)}async function Lp(n){const e=$e(n);await yi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Dp(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function td(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vp(n,e){const t=await Zu(n,{},async()=>{const r=As({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await ed(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return n.emulatorConfig&&Dr(n.emulatorConfig.host)&&(u.credentials="include"),Yu.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Mp(n,e){return Mr(n,"POST","/v2/accounts:revokeToken",wa(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ae(e.length!==0,"internal-error");const t=fl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Vp(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Er;return r&&(ae(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ae(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(ae(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Er,this.toJSON())}_performRefresh(){return nn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(n,e){ae(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ot{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Np(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Go(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await ps(this,this.stsTokenManager.getToken(this.auth,e));return ae(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return xp(this,e)}reload(){return Lp(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ot({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await yi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ht(this.auth.app))return Promise.reject(Zn(this.auth));const e=await this.getIdToken();return await ps(this,Pp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,l=t.tenantId??void 0,u=t._redirectEventId??void 0,h=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:p,emailVerified:y,isAnonymous:C,providerData:P,stsTokenManager:V}=t;ae(p&&V,e,"internal-error");const N=Er.fromJSON(this.name,V);ae(typeof p=="string",e,"internal-error"),In(r,e.name),In(s,e.name),ae(typeof y=="boolean",e,"internal-error"),ae(typeof C=="boolean",e,"internal-error"),In(i,e.name),In(a,e.name),In(l,e.name),In(u,e.name),In(h,e.name),In(f,e.name);const H=new Ot({uid:p,auth:e,email:s,emailVerified:y,displayName:r,isAnonymous:C,photoURL:a,phoneNumber:i,tenantId:l,stsTokenManager:N,createdAt:h,lastLoginAt:f});return P&&Array.isArray(P)&&(H.providerData=P.map(re=>({...re}))),u&&(H._redirectEventId=u),H}static async _fromIdTokenResponse(e,t,r=!1){const s=new Er;s.updateFromServerResponse(t);const i=new Ot({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await yi(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];ae(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?td(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!i?.length,l=new Er;l.updateFromIdToken(r);const u=new Ot({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Go(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml=new Map;function rn(n){cn(n instanceof Function,"Expected a class definition");let e=ml.get(n);return e?(cn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ml.set(n,e),e)}/**
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
 */class nd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}nd.type="NONE";const pl=nd;/**
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
 */function si(n,e,t){return`firebase:${n}:${e}:${t}`}class Ir{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=si(this.userKey,s.apiKey,i),this.fullPersistenceKey=si("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await gi(this.auth,{idToken:e}).catch(()=>{});return t?Ot._fromGetAccountInfoResponse(this.auth,t,e):null}return Ot._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Ir(rn(pl),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||rn(pl);const a=si(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const f=await h._get(a);if(f){let p;if(typeof f=="string"){const y=await gi(e,{idToken:f}).catch(()=>{});if(!y)break;p=await Ot._fromGetAccountInfoResponse(e,y,f)}else p=Ot._fromJSON(e,f);h!==i&&(l=p),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Ir(i,e,r):(i=u[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Ir(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(od(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cd(e))return"Blackberry";if(ld(e))return"Webos";if(sd(e))return"Safari";if((e.includes("chrome/")||id(e))&&!e.includes("edge/"))return"Chrome";if(ad(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function rd(n=gt()){return/firefox\//i.test(n)}function sd(n=gt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function id(n=gt()){return/crios\//i.test(n)}function od(n=gt()){return/iemobile/i.test(n)}function ad(n=gt()){return/android/i.test(n)}function cd(n=gt()){return/blackberry/i.test(n)}function ld(n=gt()){return/webos/i.test(n)}function Ta(n=gt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Op(n=gt()){return Ta(n)&&!!window.navigator?.standalone}function Fp(){return em()&&document.documentMode===10}function ud(n=gt()){return Ta(n)||ad(n)||ld(n)||cd(n)||/windows phone/i.test(n)||od(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(n,e=[]){let t;switch(n){case"Browser":t=gl(gt());break;case"Worker":t=`${gl(gt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Vr}/${r}`}/**
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
 */class Up{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,l)=>{try{const u=e(i);a(u)}catch(u){l(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function Bp(n,e={}){return Mr(n,"GET","/v2/passwordPolicy",wa(n,e))}/**
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
 */const jp=6;class qp{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??jp,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yl(this),this.idTokenSubscription=new yl(this),this.beforeStateQueue=new Up(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ju,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=rn(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Ir.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await gi(this,{idToken:e}),r=await Ot._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Ht(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(a,a))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,a=r?._redirectEventId,l=await this.tryRedirectSignIn(e);(!i||i===a)&&l?.user&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await yi(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=bp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ht(this.app))return Promise.reject(Zn(this));const t=e?$e(e):null;return t&&ae(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ht(this.app)?Promise.reject(Zn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ht(this.app)?Promise.reject(Zn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(rn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Bp(this),t=new qp(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ts("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Mp(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&rn(e)||this._popupRedirectResolver;ae(t,this,"argument-error"),this.redirectPersistenceManager=await Ir.create(this,[rn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=dd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Ht(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Ep(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Aa(n){return $e(n)}class yl{constructor(e){this.auth=e,this.observer=null,this.addObserver=cm(t=>this.observer=t)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ca={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Hp(n){Ca=n}function zp(n){return Ca.loadJS(n)}function Gp(){return Ca.gapiScript}function Wp(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kp(n,e){const t=va(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(sn(i,e??{}))return s;an(s,"already-initialized")}return t.initialize({options:e})}function Qp(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(rn);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function Jp(n,e,t){const r=Aa(n);ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=hd(e),{host:a,port:l}=Xp(e),u=l===null?"":`:${l}`,h={url:`${i}//${a}${u}/`},f=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ae(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ae(sn(h,r.config.emulator)&&sn(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Dr(a)?(ju(`${i}//${a}${u}`),qu("Auth",!0)):Yp()}function hd(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Xp(n){const e=hd(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:_l(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:_l(a)}}}function _l(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Yp(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return nn("not implemented")}_getIdTokenResponse(e){return nn("not implemented")}_linkToIdToken(e,t){return nn("not implemented")}_getReauthenticationResolver(e){return nn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wr(n,e){return Sp(n,"POST","/v1/accounts:signInWithIdp",wa(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp="http://localhost";class rr extends fd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new rr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):an("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const a=new rr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return wr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,wr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,wr(e,t)}buildRequest(){const e={requestUri:Zp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=As(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ss extends md{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends Ss{constructor(){super("facebook.com")}static credential(e){return rr._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wn.credential(e.oauthAccessToken)}catch{return null}}}wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";wn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends Ss{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return rr._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return bn.credential(t,r)}catch{return null}}}bn.GOOGLE_SIGN_IN_METHOD="google.com";bn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends Ss{constructor(){super("github.com")}static credential(e){return rr._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tn.credential(e.oauthAccessToken)}catch{return null}}}Tn.GITHUB_SIGN_IN_METHOD="github.com";Tn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends Ss{constructor(){super("twitter.com")}static credential(e,t){return rr._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return An.credential(t,r)}catch{return null}}}An.TWITTER_SIGN_IN_METHOD="twitter.com";An.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Ot._fromIdTokenResponse(e,r,s),a=vl(r);return new Ar({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=vl(r);return new Ar({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function vl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i extends dn{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,_i.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new _i(e,t,r,s)}}function pd(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?_i._fromErrorAndOperation(n,i,e,r):i})}async function eg(n,e,t=!1){const r=await ps(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ar._forOperation(n,"link",r)}/**
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
 */async function tg(n,e,t=!1){const{auth:r}=n;if(Ht(r.app))return Promise.reject(Zn(r));const s="reauthenticate";try{const i=await ps(n,pd(r,s,e,n),t);ae(i.idToken,r,"internal-error");const a=ba(i.idToken);ae(a,r,"internal-error");const{sub:l}=a;return ae(n.uid===l,r,"user-mismatch"),Ar._forOperation(n,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&an(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ng(n,e,t=!1){if(Ht(n.app))return Promise.reject(Zn(n));const r="signIn",s=await pd(n,r,e),i=await Ar._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function rg(n,e,t,r){return $e(n).onIdTokenChanged(e,t,r)}function sg(n,e,t){return $e(n).beforeAuthStateChanged(e,t)}function ig(n,e,t,r){return $e(n).onAuthStateChanged(e,t,r)}function og(n){return $e(n).signOut()}const vi="__sak";/**
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
 */class gd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(vi,"1"),this.storage.removeItem(vi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag=1e3,cg=10;class yd extends gd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ud(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);Fp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,cg):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},ag)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}yd.type="LOCAL";const lg=yd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d extends gd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}_d.type="SESSION";const vd=_d;/**
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
 */function ug(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ji{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new ji(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async h=>h(t.origin,i)),u=await ug(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ji.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sa(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class dg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,u)=>{const h=Sa("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const y=p;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(y.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(){return window}function hg(n){Gt().location.href=n}/**
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
 */function Ed(){return typeof Gt().WorkerGlobalScope<"u"&&typeof Gt().importScripts=="function"}async function fg(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mg(){return navigator?.serviceWorker?.controller||null}function pg(){return Ed()?self:null}/**
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
 */const Id="firebaseLocalStorageDb",gg=1,Ei="firebaseLocalStorage",wd="fbase_key";class Rs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function qi(n,e){return n.transaction([Ei],e?"readwrite":"readonly").objectStore(Ei)}function yg(){const n=indexedDB.deleteDatabase(Id);return new Rs(n).toPromise()}function Wo(){const n=indexedDB.open(Id,gg);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ei,{keyPath:wd})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ei)?e(r):(r.close(),await yg(),e(await Wo()))})})}async function El(n,e,t){const r=qi(n,!0).put({[wd]:e,value:t});return new Rs(r).toPromise()}async function _g(n,e){const t=qi(n,!1).get(e),r=await new Rs(t).toPromise();return r===void 0?null:r.value}function Il(n,e){const t=qi(n,!0).delete(e);return new Rs(t).toPromise()}const vg=800,Eg=3;class bd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Eg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ed()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ji._getInstance(pg()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await fg(),!this.activeServiceWorker)return;this.sender=new dg(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wo();return await El(e,vi,"1"),await Il(e,vi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>El(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>_g(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Il(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=qi(s,!1).getAll();return new Rs(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bd.type="LOCAL";const Ig=bd;new Cs(3e4,6e4);/**
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
 */function wg(n,e){return e?rn(e):(ae(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Ra extends fd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return wr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return wr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return wr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function bg(n){return ng(n.auth,new Ra(n),n.bypassAuthState)}function Tg(n){const{auth:e,user:t}=n;return ae(t,e,"internal-error"),tg(t,new Ra(n),n.bypassAuthState)}async function Ag(n){const{auth:e,user:t}=n;return ae(t,e,"internal-error"),eg(t,new Ra(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bg;case"linkViaPopup":case"linkViaRedirect":return Ag;case"reauthViaPopup":case"reauthViaRedirect":return Tg;default:an(this.auth,"internal-error")}}resolve(e){cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg=new Cs(2e3,1e4);class _r extends Td{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,_r.currentPopupAction&&_r.currentPopupAction.cancel(),_r.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){cn(this.filter.length===1,"Popup operations only handle one event");const e=Sa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_r.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(zt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Cg.get())};e()}}_r.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg="pendingRedirect",ii=new Map;class Rg extends Td{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=ii.get(this.auth._key());if(!e){try{const r=await Pg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}ii.set(this.auth._key(),e)}return this.bypassAuthState||ii.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Pg(n,e){const t=Ng(e),r=kg(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function xg(n,e){ii.set(n._key(),e)}function kg(n){return rn(n._redirectPersistence)}function Ng(n){return si(Sg,n.config.apiKey,n.name)}async function Lg(n,e,t=!1){if(Ht(n.app))return Promise.reject(Zn(n));const r=Aa(n),s=wg(r,e),a=await new Rg(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg=600*1e3;class Vg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Mg(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Ad(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(zt(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Dg&&this.cachedEventUids.clear(),this.cachedEventUids.has(wl(e))}saveEventToCache(e){this.cachedEventUids.add(wl(e)),this.lastProcessedEventTime=Date.now()}}function wl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ad({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function Mg(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ad(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Og(n,e={}){return Mr(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ug=/^https?/;async function Bg(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Og(n);for(const t of e)try{if(jg(t))return}catch{}an(n,"unauthorized-domain")}function jg(n){const e=zo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Ug.test(t))return!1;if(Fg.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const qg=new Cs(3e4,6e4);function bl(){const n=Gt().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function $g(n){return new Promise((e,t)=>{function r(){bl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bl(),t(zt(n,"network-request-failed"))},timeout:qg.get()})}if(Gt().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Gt().gapi?.load)r();else{const s=Wp("iframefcb");return Gt()[s]=()=>{gapi.load?r():t(zt(n,"network-request-failed"))},zp(`${Gp()}?onload=${s}`).catch(i=>t(i))}}).catch(e=>{throw oi=null,e})}let oi=null;function Hg(n){return oi=oi||$g(n),oi}/**
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
 */const zg=new Cs(5e3,15e3),Gg="__/auth/iframe",Wg="emulator/auth/iframe",Kg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Qg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Jg(n){const e=n.config;ae(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ia(e,Wg):`https://${n.config.authDomain}/${Gg}`,r={apiKey:e.apiKey,appName:n.name,v:Vr},s=Qg.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${As(r).slice(1)}`}async function Xg(n){const e=await Hg(n),t=Gt().gapi;return ae(t,n,"internal-error"),e.open({where:document.body,url:Jg(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Kg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=zt(n,"network-request-failed"),l=Gt().setTimeout(()=>{i(a)},zg.get());function u(){Gt().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const Yg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Zg=500,ey=600,ty="_blank",ny="http://localhost";class Tl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ry(n,e,t,r=Zg,s=ey){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...Yg,width:r.toString(),height:s.toString(),top:i,left:a},h=gt().toLowerCase();t&&(l=id(h)?ty:t),rd(h)&&(e=e||ny,u.scrollbars="yes");const f=Object.entries(u).reduce((y,[C,P])=>`${y}${C}=${P},`,"");if(Op(h)&&l!=="_self")return sy(e||"",l),new Tl(null);const p=window.open(e||"",l,f);ae(p,n,"popup-blocked");try{p.focus()}catch{}return new Tl(p)}function sy(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const iy="__/auth/handler",oy="emulator/auth/handler",ay=encodeURIComponent("fac");async function Al(n,e,t,r,s,i){ae(n.config.authDomain,n,"auth-domain-config-required"),ae(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Vr,eventId:s};if(e instanceof md){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",am(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))a[f]=p}if(e instanceof Ss){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await n._getAppCheckToken(),h=u?`#${ay}=${encodeURIComponent(u)}`:"";return`${cy(n)}?${As(l).slice(1)}${h}`}function cy({config:n}){return n.emulator?Ia(n,oy):`https://${n.authDomain}/${iy}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po="webStorageSupport";class ly{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vd,this._completeRedirectFn=Lg,this._overrideRedirectResult=xg}async _openPopup(e,t,r,s){cn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Al(e,t,r,zo(),s);return ry(e,i,Sa())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Al(e,t,r,zo(),s);return hg(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(cn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Xg(e),r=new Vg(e);return t.register("authEvent",s=>(ae(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Po,{type:Po},s=>{const i=s?.[0]?.[Po];i!==void 0&&t(!!i),an(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Bg(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ud()||sd()||Ta()}}const uy=ly;var Cl="@firebase/auth",Sl="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hy(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fy(n){Tr(new nr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;ae(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dd(n)},h=new $p(r,s,i,u);return Qp(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Tr(new nr("auth-internal",e=>{const t=Aa(e.getProvider("auth").getImmediate());return(r=>new dy(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),xn(Cl,Sl,hy(n)),xn(Cl,Sl,"esm2020")}/**
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
 */const my=300,py=Bu("authIdTokenMaxAge")||my;let Rl=null;const gy=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>py)return;const s=t?.token;Rl!==s&&(Rl=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function yy(n=Gu()){const e=va(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Kp(n,{popupRedirectResolver:uy,persistence:[Ig,lg,vd]}),r=Bu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=gy(i.toString());sg(t,a,()=>a(t.currentUser)),rg(t,l=>a(l))}}const s=Fu("auth");return s&&Jp(t,`http://${s}`),t}function _y(){return document.getElementsByTagName("head")?.[0]??document}Hp({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=zt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",_y().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fy("Browser");var vy="firebase",Ey="12.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xn(vy,Ey,"app");var Pl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var kn,Cd;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,g){function _(){}_.prototype=g.prototype,I.F=g.prototype,I.prototype=new _,I.prototype.constructor=I,I.D=function(w,E,b){for(var v=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)v[xe-2]=arguments[xe];return g.prototype[E].apply(w,v)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,g,_){_||(_=0);const w=Array(16);if(typeof g=="string")for(var E=0;E<16;++E)w[E]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(E=0;E<16;++E)w[E]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=I.g[0],_=I.g[1],E=I.g[2];let b=I.g[3],v;v=g+(b^_&(E^b))+w[0]+3614090360&4294967295,g=_+(v<<7&4294967295|v>>>25),v=b+(E^g&(_^E))+w[1]+3905402710&4294967295,b=g+(v<<12&4294967295|v>>>20),v=E+(_^b&(g^_))+w[2]+606105819&4294967295,E=b+(v<<17&4294967295|v>>>15),v=_+(g^E&(b^g))+w[3]+3250441966&4294967295,_=E+(v<<22&4294967295|v>>>10),v=g+(b^_&(E^b))+w[4]+4118548399&4294967295,g=_+(v<<7&4294967295|v>>>25),v=b+(E^g&(_^E))+w[5]+1200080426&4294967295,b=g+(v<<12&4294967295|v>>>20),v=E+(_^b&(g^_))+w[6]+2821735955&4294967295,E=b+(v<<17&4294967295|v>>>15),v=_+(g^E&(b^g))+w[7]+4249261313&4294967295,_=E+(v<<22&4294967295|v>>>10),v=g+(b^_&(E^b))+w[8]+1770035416&4294967295,g=_+(v<<7&4294967295|v>>>25),v=b+(E^g&(_^E))+w[9]+2336552879&4294967295,b=g+(v<<12&4294967295|v>>>20),v=E+(_^b&(g^_))+w[10]+4294925233&4294967295,E=b+(v<<17&4294967295|v>>>15),v=_+(g^E&(b^g))+w[11]+2304563134&4294967295,_=E+(v<<22&4294967295|v>>>10),v=g+(b^_&(E^b))+w[12]+1804603682&4294967295,g=_+(v<<7&4294967295|v>>>25),v=b+(E^g&(_^E))+w[13]+4254626195&4294967295,b=g+(v<<12&4294967295|v>>>20),v=E+(_^b&(g^_))+w[14]+2792965006&4294967295,E=b+(v<<17&4294967295|v>>>15),v=_+(g^E&(b^g))+w[15]+1236535329&4294967295,_=E+(v<<22&4294967295|v>>>10),v=g+(E^b&(_^E))+w[1]+4129170786&4294967295,g=_+(v<<5&4294967295|v>>>27),v=b+(_^E&(g^_))+w[6]+3225465664&4294967295,b=g+(v<<9&4294967295|v>>>23),v=E+(g^_&(b^g))+w[11]+643717713&4294967295,E=b+(v<<14&4294967295|v>>>18),v=_+(b^g&(E^b))+w[0]+3921069994&4294967295,_=E+(v<<20&4294967295|v>>>12),v=g+(E^b&(_^E))+w[5]+3593408605&4294967295,g=_+(v<<5&4294967295|v>>>27),v=b+(_^E&(g^_))+w[10]+38016083&4294967295,b=g+(v<<9&4294967295|v>>>23),v=E+(g^_&(b^g))+w[15]+3634488961&4294967295,E=b+(v<<14&4294967295|v>>>18),v=_+(b^g&(E^b))+w[4]+3889429448&4294967295,_=E+(v<<20&4294967295|v>>>12),v=g+(E^b&(_^E))+w[9]+568446438&4294967295,g=_+(v<<5&4294967295|v>>>27),v=b+(_^E&(g^_))+w[14]+3275163606&4294967295,b=g+(v<<9&4294967295|v>>>23),v=E+(g^_&(b^g))+w[3]+4107603335&4294967295,E=b+(v<<14&4294967295|v>>>18),v=_+(b^g&(E^b))+w[8]+1163531501&4294967295,_=E+(v<<20&4294967295|v>>>12),v=g+(E^b&(_^E))+w[13]+2850285829&4294967295,g=_+(v<<5&4294967295|v>>>27),v=b+(_^E&(g^_))+w[2]+4243563512&4294967295,b=g+(v<<9&4294967295|v>>>23),v=E+(g^_&(b^g))+w[7]+1735328473&4294967295,E=b+(v<<14&4294967295|v>>>18),v=_+(b^g&(E^b))+w[12]+2368359562&4294967295,_=E+(v<<20&4294967295|v>>>12),v=g+(_^E^b)+w[5]+4294588738&4294967295,g=_+(v<<4&4294967295|v>>>28),v=b+(g^_^E)+w[8]+2272392833&4294967295,b=g+(v<<11&4294967295|v>>>21),v=E+(b^g^_)+w[11]+1839030562&4294967295,E=b+(v<<16&4294967295|v>>>16),v=_+(E^b^g)+w[14]+4259657740&4294967295,_=E+(v<<23&4294967295|v>>>9),v=g+(_^E^b)+w[1]+2763975236&4294967295,g=_+(v<<4&4294967295|v>>>28),v=b+(g^_^E)+w[4]+1272893353&4294967295,b=g+(v<<11&4294967295|v>>>21),v=E+(b^g^_)+w[7]+4139469664&4294967295,E=b+(v<<16&4294967295|v>>>16),v=_+(E^b^g)+w[10]+3200236656&4294967295,_=E+(v<<23&4294967295|v>>>9),v=g+(_^E^b)+w[13]+681279174&4294967295,g=_+(v<<4&4294967295|v>>>28),v=b+(g^_^E)+w[0]+3936430074&4294967295,b=g+(v<<11&4294967295|v>>>21),v=E+(b^g^_)+w[3]+3572445317&4294967295,E=b+(v<<16&4294967295|v>>>16),v=_+(E^b^g)+w[6]+76029189&4294967295,_=E+(v<<23&4294967295|v>>>9),v=g+(_^E^b)+w[9]+3654602809&4294967295,g=_+(v<<4&4294967295|v>>>28),v=b+(g^_^E)+w[12]+3873151461&4294967295,b=g+(v<<11&4294967295|v>>>21),v=E+(b^g^_)+w[15]+530742520&4294967295,E=b+(v<<16&4294967295|v>>>16),v=_+(E^b^g)+w[2]+3299628645&4294967295,_=E+(v<<23&4294967295|v>>>9),v=g+(E^(_|~b))+w[0]+4096336452&4294967295,g=_+(v<<6&4294967295|v>>>26),v=b+(_^(g|~E))+w[7]+1126891415&4294967295,b=g+(v<<10&4294967295|v>>>22),v=E+(g^(b|~_))+w[14]+2878612391&4294967295,E=b+(v<<15&4294967295|v>>>17),v=_+(b^(E|~g))+w[5]+4237533241&4294967295,_=E+(v<<21&4294967295|v>>>11),v=g+(E^(_|~b))+w[12]+1700485571&4294967295,g=_+(v<<6&4294967295|v>>>26),v=b+(_^(g|~E))+w[3]+2399980690&4294967295,b=g+(v<<10&4294967295|v>>>22),v=E+(g^(b|~_))+w[10]+4293915773&4294967295,E=b+(v<<15&4294967295|v>>>17),v=_+(b^(E|~g))+w[1]+2240044497&4294967295,_=E+(v<<21&4294967295|v>>>11),v=g+(E^(_|~b))+w[8]+1873313359&4294967295,g=_+(v<<6&4294967295|v>>>26),v=b+(_^(g|~E))+w[15]+4264355552&4294967295,b=g+(v<<10&4294967295|v>>>22),v=E+(g^(b|~_))+w[6]+2734768916&4294967295,E=b+(v<<15&4294967295|v>>>17),v=_+(b^(E|~g))+w[13]+1309151649&4294967295,_=E+(v<<21&4294967295|v>>>11),v=g+(E^(_|~b))+w[4]+4149444226&4294967295,g=_+(v<<6&4294967295|v>>>26),v=b+(_^(g|~E))+w[11]+3174756917&4294967295,b=g+(v<<10&4294967295|v>>>22),v=E+(g^(b|~_))+w[2]+718787259&4294967295,E=b+(v<<15&4294967295|v>>>17),v=_+(b^(E|~g))+w[9]+3951481745&4294967295,I.g[0]=I.g[0]+g&4294967295,I.g[1]=I.g[1]+(E+(v<<21&4294967295|v>>>11))&4294967295,I.g[2]=I.g[2]+E&4294967295,I.g[3]=I.g[3]+b&4294967295}r.prototype.v=function(I,g){g===void 0&&(g=I.length);const _=g-this.blockSize,w=this.C;let E=this.h,b=0;for(;b<g;){if(E==0)for(;b<=_;)s(this,I,b),b+=this.blockSize;if(typeof I=="string"){for(;b<g;)if(w[E++]=I.charCodeAt(b++),E==this.blockSize){s(this,w),E=0;break}}else for(;b<g;)if(w[E++]=I[b++],E==this.blockSize){s(this,w),E=0;break}}this.h=E,this.o+=g},r.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var g=1;g<I.length-8;++g)I[g]=0;g=this.o*8;for(var _=I.length-8;_<I.length;++_)I[_]=g&255,g/=256;for(this.v(I),I=Array(16),g=0,_=0;_<4;++_)for(let w=0;w<32;w+=8)I[g++]=this.g[_]>>>w&255;return I};function i(I,g){var _=l;return Object.prototype.hasOwnProperty.call(_,I)?_[I]:_[I]=g(I)}function a(I,g){this.h=g;const _=[];let w=!0;for(let E=I.length-1;E>=0;E--){const b=I[E]|0;w&&b==g||(_[E]=b,w=!1)}this.g=_}var l={};function u(I){return-128<=I&&I<128?i(I,function(g){return new a([g|0],g<0?-1:0)}):new a([I|0],I<0?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return p;if(I<0)return N(h(-I));const g=[];let _=1;for(let w=0;I>=_;w++)g[w]=I/_|0,_*=4294967296;return new a(g,0)}function f(I,g){if(I.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(I.charAt(0)=="-")return N(f(I.substring(1),g));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=h(Math.pow(g,8));let w=p;for(let b=0;b<I.length;b+=8){var E=Math.min(8,I.length-b);const v=parseInt(I.substring(b,b+E),g);E<8?(E=h(Math.pow(g,E)),w=w.j(E).add(h(v))):(w=w.j(_),w=w.add(h(v)))}return w}var p=u(0),y=u(1),C=u(16777216);n=a.prototype,n.m=function(){if(V(this))return-N(this).m();let I=0,g=1;for(let _=0;_<this.g.length;_++){const w=this.i(_);I+=(w>=0?w:4294967296+w)*g,g*=4294967296}return I},n.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(P(this))return"0";if(V(this))return"-"+N(this).toString(I);const g=h(Math.pow(I,6));var _=this;let w="";for(;;){const E=ne(_,g).g;_=H(_,E.j(g));let b=((_.g.length>0?_.g[0]:_.h)>>>0).toString(I);if(_=E,P(_))return b+w;for(;b.length<6;)b="0"+b;w=b+w}},n.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function P(I){if(I.h!=0)return!1;for(let g=0;g<I.g.length;g++)if(I.g[g]!=0)return!1;return!0}function V(I){return I.h==-1}n.l=function(I){return I=H(this,I),V(I)?-1:P(I)?0:1};function N(I){const g=I.g.length,_=[];for(let w=0;w<g;w++)_[w]=~I.g[w];return new a(_,~I.h).add(y)}n.abs=function(){return V(this)?N(this):this},n.add=function(I){const g=Math.max(this.g.length,I.g.length),_=[];let w=0;for(let E=0;E<=g;E++){let b=w+(this.i(E)&65535)+(I.i(E)&65535),v=(b>>>16)+(this.i(E)>>>16)+(I.i(E)>>>16);w=v>>>16,b&=65535,v&=65535,_[E]=v<<16|b}return new a(_,_[_.length-1]&-2147483648?-1:0)};function H(I,g){return I.add(N(g))}n.j=function(I){if(P(this)||P(I))return p;if(V(this))return V(I)?N(this).j(N(I)):N(N(this).j(I));if(V(I))return N(this.j(N(I)));if(this.l(C)<0&&I.l(C)<0)return h(this.m()*I.m());const g=this.g.length+I.g.length,_=[];for(var w=0;w<2*g;w++)_[w]=0;for(w=0;w<this.g.length;w++)for(let E=0;E<I.g.length;E++){const b=this.i(w)>>>16,v=this.i(w)&65535,xe=I.i(E)>>>16,se=I.i(E)&65535;_[2*w+2*E]+=v*se,re(_,2*w+2*E),_[2*w+2*E+1]+=b*se,re(_,2*w+2*E+1),_[2*w+2*E+1]+=v*xe,re(_,2*w+2*E+1),_[2*w+2*E+2]+=b*xe,re(_,2*w+2*E+2)}for(I=0;I<g;I++)_[I]=_[2*I+1]<<16|_[2*I];for(I=g;I<2*g;I++)_[I]=0;return new a(_,0)};function re(I,g){for(;(I[g]&65535)!=I[g];)I[g+1]+=I[g]>>>16,I[g]&=65535,g++}function q(I,g){this.g=I,this.h=g}function ne(I,g){if(P(g))throw Error("division by zero");if(P(I))return new q(p,p);if(V(I))return g=ne(N(I),g),new q(N(g.g),N(g.h));if(V(g))return g=ne(I,N(g)),new q(N(g.g),g.h);if(I.g.length>30){if(V(I)||V(g))throw Error("slowDivide_ only works with positive integers.");for(var _=y,w=g;w.l(I)<=0;)_=Q(_),w=Q(w);var E=Z(_,1),b=Z(w,1);for(w=Z(w,2),_=Z(_,2);!P(w);){var v=b.add(w);v.l(I)<=0&&(E=E.add(_),b=v),w=Z(w,1),_=Z(_,1)}return g=H(I,E.j(g)),new q(E,g)}for(E=p;I.l(g)>=0;){for(_=Math.max(1,Math.floor(I.m()/g.m())),w=Math.ceil(Math.log(_)/Math.LN2),w=w<=48?1:Math.pow(2,w-48),b=h(_),v=b.j(g);V(v)||v.l(I)>0;)_-=w,b=h(_),v=b.j(g);P(b)&&(b=y),E=E.add(b),I=H(I,v)}return new q(E,I)}n.B=function(I){return ne(this,I).h},n.and=function(I){const g=Math.max(this.g.length,I.g.length),_=[];for(let w=0;w<g;w++)_[w]=this.i(w)&I.i(w);return new a(_,this.h&I.h)},n.or=function(I){const g=Math.max(this.g.length,I.g.length),_=[];for(let w=0;w<g;w++)_[w]=this.i(w)|I.i(w);return new a(_,this.h|I.h)},n.xor=function(I){const g=Math.max(this.g.length,I.g.length),_=[];for(let w=0;w<g;w++)_[w]=this.i(w)^I.i(w);return new a(_,this.h^I.h)};function Q(I){const g=I.g.length+1,_=[];for(let w=0;w<g;w++)_[w]=I.i(w)<<1|I.i(w-1)>>>31;return new a(_,I.h)}function Z(I,g){const _=g>>5;g%=32;const w=I.g.length-_,E=[];for(let b=0;b<w;b++)E[b]=g>0?I.i(b+_)>>>g|I.i(b+_+1)<<32-g:I.i(b+_);return new a(E,I.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Cd=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,kn=a}).apply(typeof Pl<"u"?Pl:typeof self<"u"?self:typeof window<"u"?window:{});var Xs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Sd,ns,Rd,ai,Ko,Pd,xd,kd;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xs=="object"&&Xs];for(var c=0;c<o.length;++c){var d=o[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(o,c){if(c)e:{var d=r;o=o.split(".");for(var m=0;m<o.length-1;m++){var T=o[m];if(!(T in d))break e;d=d[T]}o=o[o.length-1],m=d[o],c=c(m),c!=m&&c!=null&&e(d,o,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(c){var d=[],m;for(m in c)Object.prototype.hasOwnProperty.call(c,m)&&d.push([m,c[m]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function l(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function u(o,c,d){return o.call.apply(o.bind,arguments)}function h(o,c,d){return h=u,h.apply(null,arguments)}function f(o,c){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function p(o,c){function d(){}d.prototype=c.prototype,o.Z=c.prototype,o.prototype=new d,o.prototype.constructor=o,o.Ob=function(m,T,R){for(var F=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)F[fe-2]=arguments[fe];return c.prototype[T].apply(m,F)}}var y=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function C(o){const c=o.length;if(c>0){const d=Array(c);for(let m=0;m<c;m++)d[m]=o[m];return d}return[]}function P(o,c){for(let m=1;m<arguments.length;m++){const T=arguments[m];var d=typeof T;if(d=d!="object"?d:T?Array.isArray(T)?"array":d:"null",d=="array"||d=="object"&&typeof T.length=="number"){d=o.length||0;const R=T.length||0;o.length=d+R;for(let F=0;F<R;F++)o[d+F]=T[F]}else o.push(T)}}class V{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function N(o){a.setTimeout(()=>{throw o},0)}function H(){var o=I;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class re{constructor(){this.h=this.g=null}add(c,d){const m=q.get();m.set(c,d),this.h?this.h.next=m:this.g=m,this.h=m}}var q=new V(()=>new ne,o=>o.reset());class ne{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Q,Z=!1,I=new re,g=()=>{const o=Promise.resolve(void 0);Q=()=>{o.then(_)}};function _(){for(var o;o=H();){try{o.h.call(o.g)}catch(d){N(d)}var c=q;c.j(o),c.h<100&&(c.h++,o.next=c.g,c.g=o)}Z=!1}function w(){this.u=this.u,this.C=this.C}w.prototype.u=!1,w.prototype.dispose=function(){this.u||(this.u=!0,this.N())},w.prototype[Symbol.dispose]=function(){this.dispose()},w.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var b=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};a.addEventListener("test",d,c),a.removeEventListener("test",d,c)}catch{}return o})();function v(o){return/^[\s\xa0]*$/.test(o)}function xe(o,c){E.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,c)}p(xe,E),xe.prototype.init=function(o,c){const d=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget,c||(d=="mouseover"?c=o.fromElement:d=="mouseout"&&(c=o.toElement)),this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&xe.Z.h.call(this)},xe.prototype.h=function(){xe.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var se="closure_listenable_"+(Math.random()*1e6|0),G=0;function me(o,c,d,m,T){this.listener=o,this.proxy=null,this.src=c,this.type=d,this.capture=!!m,this.ha=T,this.key=++G,this.da=this.fa=!1}function de(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Ae(o,c,d){for(const m in o)c.call(d,o[m],m,o)}function Te(o,c){for(const d in o)c.call(void 0,o[d],d,o)}function Ue(o){const c={};for(const d in o)c[d]=o[d];return c}const pe="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ke(o,c){let d,m;for(let T=1;T<arguments.length;T++){m=arguments[T];for(d in m)o[d]=m[d];for(let R=0;R<pe.length;R++)d=pe[R],Object.prototype.hasOwnProperty.call(m,d)&&(o[d]=m[d])}}function Ne(o){this.src=o,this.g={},this.h=0}Ne.prototype.add=function(o,c,d,m,T){const R=o.toString();o=this.g[R],o||(o=this.g[R]=[],this.h++);const F=oe(o,c,m,T);return F>-1?(c=o[F],d||(c.fa=!1)):(c=new me(c,this.src,R,!!m,T),c.fa=d,o.push(c)),c};function He(o,c){const d=c.type;if(d in o.g){var m=o.g[d],T=Array.prototype.indexOf.call(m,c,void 0),R;(R=T>=0)&&Array.prototype.splice.call(m,T,1),R&&(de(c),o.g[d].length==0&&(delete o.g[d],o.h--))}}function oe(o,c,d,m){for(let T=0;T<o.length;++T){const R=o[T];if(!R.da&&R.listener==c&&R.capture==!!d&&R.ha==m)return T}return-1}var ee="closure_lm_"+(Math.random()*1e6|0),W={};function K(o,c,d,m,T){if(Array.isArray(c)){for(let R=0;R<c.length;R++)K(o,c[R],d,m,T);return null}return d=Bs(d),o&&o[se]?o.J(c,d,l(m)?!!m.capture:!1,T):le(o,c,d,!1,m,T)}function le(o,c,d,m,T,R){if(!c)throw Error("Invalid event type");const F=l(T)?!!T.capture:!!T;let fe=Lt(o);if(fe||(o[ee]=fe=new Ne(o)),d=fe.add(c,d,m,F,R),d.proxy)return d;if(m=Ce(),d.proxy=m,m.src=o,m.listener=d,o.addEventListener)b||(T=F),T===void 0&&(T=!1),o.addEventListener(c.toString(),m,T);else if(o.attachEvent)o.attachEvent(en(c.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Ce(){function o(d){return c.call(o.src,o.listener,d)}const c=hn;return o}function Bt(o,c,d,m,T){if(Array.isArray(c))for(var R=0;R<c.length;R++)Bt(o,c[R],d,m,T);else m=l(m)?!!m.capture:!!m,d=Bs(d),o&&o[se]?(o=o.i,R=String(c).toString(),R in o.g&&(c=o.g[R],d=oe(c,d,m,T),d>-1&&(de(c[d]),Array.prototype.splice.call(c,d,1),c.length==0&&(delete o.g[R],o.h--)))):o&&(o=Lt(o))&&(c=o.g[c.toString()],o=-1,c&&(o=oe(c,d,m,T)),(d=o>-1?c[o]:null)&&Zt(d))}function Zt(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[se])He(c.i,o);else{var d=o.type,m=o.proxy;c.removeEventListener?c.removeEventListener(d,m,o.capture):c.detachEvent?c.detachEvent(en(d),m):c.addListener&&c.removeListener&&c.removeListener(m),(d=Lt(c))?(He(d,o),d.h==0&&(d.src=null,c[ee]=null)):de(o)}}}function en(o){return o in W?W[o]:W[o]="on"+o}function hn(o,c){if(o.da)o=!0;else{c=new xe(c,this);const d=o.listener,m=o.ha||o.src;o.fa&&Zt(o),o=d.call(m,c)}return o}function Lt(o){return o=o[ee],o instanceof Ne?o:null}var Hr="__closure_events_fn_"+(Math.random()*1e9>>>0);function Bs(o){return typeof o=="function"?o:(o[Hr]||(o[Hr]=function(c){return o.handleEvent(c)}),o[Hr])}function et(){w.call(this),this.i=new Ne(this),this.M=this,this.G=null}p(et,w),et.prototype[se]=!0,et.prototype.removeEventListener=function(o,c,d,m){Bt(this,o,c,d,m)};function A(o,c){var d,m=o.G;if(m)for(d=[];m;m=m.G)d.push(m);if(o=o.M,m=c.type||c,typeof c=="string")c=new E(c,o);else if(c instanceof E)c.target=c.target||o;else{var T=c;c=new E(m,o),ke(c,T)}T=!0;let R,F;if(d)for(F=d.length-1;F>=0;F--)R=c.g=d[F],T=S(R,m,!0,c)&&T;if(R=c.g=o,T=S(R,m,!0,c)&&T,T=S(R,m,!1,c)&&T,d)for(F=0;F<d.length;F++)R=c.g=d[F],T=S(R,m,!1,c)&&T}et.prototype.N=function(){if(et.Z.N.call(this),this.i){var o=this.i;for(const c in o.g){const d=o.g[c];for(let m=0;m<d.length;m++)de(d[m]);delete o.g[c],o.h--}}this.G=null},et.prototype.J=function(o,c,d,m){return this.i.add(String(o),c,!1,d,m)},et.prototype.K=function(o,c,d,m){return this.i.add(String(o),c,!0,d,m)};function S(o,c,d,m){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();let T=!0;for(let R=0;R<c.length;++R){const F=c[R];if(F&&!F.da&&F.capture==d){const fe=F.listener,Xe=F.ha||F.src;F.fa&&He(o.i,F),T=fe.call(Xe,m)!==!1&&T}}return T&&!m.defaultPrevented}function M(o,c){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=h(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(o,c||0)}function D(o){o.g=M(()=>{o.g=null,o.i&&(o.i=!1,D(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class x extends w{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:D(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function O(o){w.call(this),this.h=o,this.g={}}p(O,w);var z=[];function j(o){Ae(o.g,function(c,d){this.g.hasOwnProperty(d)&&Zt(c)},o),o.g={}}O.prototype.N=function(){O.Z.N.call(this),j(this)},O.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var X=a.JSON.stringify,he=a.JSON.parse,J=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function ue(){}function Se(){}var Le={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function yt(){E.call(this,"d")}p(yt,E);function it(){E.call(this,"c")}p(it,E);var ze={},It=null;function _t(){return It=It||new et}ze.Ia="serverreachability";function Ge(o){E.call(this,ze.Ia,o)}p(Ge,E);function xt(o){const c=_t();A(c,new Ge(c))}ze.STAT_EVENT="statevent";function dt(o,c){E.call(this,ze.STAT_EVENT,o),this.stat=c}p(dt,E);function we(o){const c=_t();A(c,new dt(c,o))}ze.Ja="timingevent";function Dt(o,c){E.call(this,ze.Ja,o),this.size=c}p(Dt,E);function Vt(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},c)}function wt(){this.g=!0}wt.prototype.ua=function(){this.g=!1};function Mt(o,c,d,m,T,R){o.info(function(){if(o.g)if(R){var F="",fe=R.split("&");for(let Pe=0;Pe<fe.length;Pe++){var Xe=fe[Pe].split("=");if(Xe.length>1){const tt=Xe[0];Xe=Xe[1];const qt=tt.split("_");F=qt.length>=2&&qt[1]=="type"?F+(tt+"="+Xe+"&"):F+(tt+"=redacted&")}}}else F=null;else F=R;return"XMLHTTP REQ ("+m+") [attempt "+T+"]: "+c+`
`+d+`
`+F})}function fn(o,c,d,m,T,R,F){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+T+"]: "+c+`
`+d+`
`+R+" "+F})}function vt(o,c,d,m){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+Hn(o,d)+(m?" "+m:"")})}function $n(o,c){o.info(function(){return"TIMEOUT: "+c})}wt.prototype.info=function(){};function Hn(o,c){if(!o.g)return c;if(!c)return null;try{const R=JSON.parse(c);if(R){for(o=0;o<R.length;o++)if(Array.isArray(R[o])){var d=R[o];if(!(d.length<2)){var m=d[1];if(Array.isArray(m)&&!(m.length<1)){var T=m[0];if(T!="noop"&&T!="stop"&&T!="close")for(let F=1;F<m.length;F++)m[F]=""}}}}return X(R)}catch{return c}}var kt={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},mn={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Tt;function co(){}p(co,ue),co.prototype.g=function(){return new XMLHttpRequest},Tt=new co;function zr(o){return encodeURIComponent(String(o))}function yf(o){var c=1;o=o.split(":");const d=[];for(;c>0&&o.length;)d.push(o.shift()),c--;return o.length&&d.push(o.join(":")),d}function pn(o,c,d,m){this.j=o,this.i=c,this.l=d,this.S=m||1,this.V=new O(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new _c}function _c(){this.i=null,this.g="",this.h=!1}var vc={},lo={};function uo(o,c,d){o.M=1,o.A=qs(jt(c)),o.u=d,o.R=!0,Ec(o,null)}function Ec(o,c){o.F=Date.now(),js(o),o.B=jt(o.A);var d=o.B,m=o.S;Array.isArray(m)||(m=[String(m)]),Lc(d.i,"t",m),o.C=0,d=o.j.L,o.h=new _c,o.g=Xc(o.j,d?c:null,!o.u),o.P>0&&(o.O=new x(h(o.Y,o,o.g),o.P)),c=o.V,d=o.g,m=o.ba;var T="readystatechange";Array.isArray(T)||(T&&(z[0]=T.toString()),T=z);for(let R=0;R<T.length;R++){const F=K(d,T[R],m||c.handleEvent,!1,c.h||c);if(!F)break;c.g[F.key]=F}c=o.J?Ue(o.J):{},o.u?(o.v||(o.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,c)):(o.v="GET",o.g.ea(o.B,o.v,null,c)),xt(),Mt(o.i,o.v,o.B,o.l,o.S,o.u)}pn.prototype.ba=function(o){o=o.target;const c=this.O;c&&_n(o)==3?c.j():this.Y(o)},pn.prototype.Y=function(o){try{if(o==this.g)e:{const fe=_n(this.g),Xe=this.g.ya(),Pe=this.g.ca();if(!(fe<3)&&(fe!=3||this.g&&(this.h.h||this.g.la()||Bc(this.g)))){this.K||fe!=4||Xe==7||(Xe==8||Pe<=0?xt(3):xt(2)),ho(this);var c=this.g.ca();this.X=c;var d=_f(this);if(this.o=c==200,fn(this.i,this.v,this.B,this.l,this.S,fe,c),this.o){if(this.U&&!this.L){t:{if(this.g){var m,T=this.g;if((m=T.g?T.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(m)){var R=m;break t}}R=null}if(o=R)vt(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,fo(this,o);else{this.o=!1,this.m=3,we(12),zn(this),Gr(this);break e}}if(this.R){o=!0;let tt;for(;!this.K&&this.C<d.length;)if(tt=vf(this,d),tt==lo){fe==4&&(this.m=4,we(14),o=!1),vt(this.i,this.l,null,"[Incomplete Response]");break}else if(tt==vc){this.m=4,we(15),vt(this.i,this.l,d,"[Invalid Chunk]"),o=!1;break}else vt(this.i,this.l,tt,null),fo(this,tt);if(Ic(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),fe!=4||d.length!=0||this.h.h||(this.m=1,we(16),o=!1),this.o=this.o&&o,!o)vt(this.i,this.l,d,"[Invalid Chunked Response]"),zn(this),Gr(this);else if(d.length>0&&!this.W){this.W=!0;var F=this.j;F.g==this&&F.aa&&!F.P&&(F.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Io(F),F.P=!0,we(11))}}else vt(this.i,this.l,d,null),fo(this,d);fe==4&&zn(this),this.o&&!this.K&&(fe==4?Wc(this.j,this):(this.o=!1,js(this)))}else Lf(this.g),c==400&&d.indexOf("Unknown SID")>0?(this.m=3,we(12)):(this.m=0,we(13)),zn(this),Gr(this)}}}catch{}finally{}};function _f(o){if(!Ic(o))return o.g.la();const c=Bc(o.g);if(c==="")return"";let d="";const m=c.length,T=_n(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return zn(o),Gr(o),"";o.h.i=new a.TextDecoder}for(let R=0;R<m;R++)o.h.h=!0,d+=o.h.i.decode(c[R],{stream:!(T&&R==m-1)});return c.length=0,o.h.g+=d,o.C=0,o.h.g}function Ic(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function vf(o,c){var d=o.C,m=c.indexOf(`
`,d);return m==-1?lo:(d=Number(c.substring(d,m)),isNaN(d)?vc:(m+=1,m+d>c.length?lo:(c=c.slice(m,m+d),o.C=m+d,c)))}pn.prototype.cancel=function(){this.K=!0,zn(this)};function js(o){o.T=Date.now()+o.H,wc(o,o.H)}function wc(o,c){if(o.D!=null)throw Error("WatchDog timer not null");o.D=Vt(h(o.aa,o),c)}function ho(o){o.D&&(a.clearTimeout(o.D),o.D=null)}pn.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?($n(this.i,this.B),this.M!=2&&(xt(),we(17)),zn(this),this.m=2,Gr(this)):wc(this,this.T-o)};function Gr(o){o.j.I==0||o.K||Wc(o.j,o)}function zn(o){ho(o);var c=o.O;c&&typeof c.dispose=="function"&&c.dispose(),o.O=null,j(o.V),o.g&&(c=o.g,o.g=null,c.abort(),c.dispose())}function fo(o,c){try{var d=o.j;if(d.I!=0&&(d.g==o||mo(d.h,o))){if(!o.L&&mo(d.h,o)&&d.I==3){try{var m=d.Ba.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var T=m;if(T[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<o.F)Ws(d),zs(d);else break e;Eo(d),we(18)}}else d.xa=T[1],0<d.xa-d.K&&T[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Vt(h(d.Va,d),6e3));Ac(d.h)<=1&&d.ta&&(d.ta=void 0)}else Wn(d,11)}else if((o.L||d.g==o)&&Ws(d),!v(c))for(T=d.Ba.g.parse(c),c=0;c<T.length;c++){let Pe=T[c];const tt=Pe[0];if(!(tt<=d.K))if(d.K=tt,Pe=Pe[1],d.I==2)if(Pe[0]=="c"){d.M=Pe[1],d.ba=Pe[2];const qt=Pe[3];qt!=null&&(d.ka=qt,d.j.info("VER="+d.ka));const Kn=Pe[4];Kn!=null&&(d.za=Kn,d.j.info("SVER="+d.za));const vn=Pe[5];vn!=null&&typeof vn=="number"&&vn>0&&(m=1.5*vn,d.O=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const En=o.g;if(En){const Qs=En.g?En.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Qs){var R=m.h;R.g||Qs.indexOf("spdy")==-1&&Qs.indexOf("quic")==-1&&Qs.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(po(R,R.h),R.h=null))}if(m.G){const wo=En.g?En.g.getResponseHeader("X-HTTP-Session-Id"):null;wo&&(m.wa=wo,De(m.J,m.G,wo))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-o.F,d.j.info("Handshake RTT: "+d.T+"ms")),m=d;var F=o;if(m.na=Jc(m,m.L?m.ba:null,m.W),F.L){Cc(m.h,F);var fe=F,Xe=m.O;Xe&&(fe.H=Xe),fe.D&&(ho(fe),js(fe)),m.g=F}else zc(m);d.i.length>0&&Gs(d)}else Pe[0]!="stop"&&Pe[0]!="close"||Wn(d,7);else d.I==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?Wn(d,7):vo(d):Pe[0]!="noop"&&d.l&&d.l.qa(Pe),d.A=0)}}xt(4)}catch{}}var Ef=class{constructor(o,c){this.g=o,this.map=c}};function bc(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Tc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Ac(o){return o.h?1:o.g?o.g.size:0}function mo(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function po(o,c){o.g?o.g.add(c):o.h=c}function Cc(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}bc.prototype.cancel=function(){if(this.i=Sc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Sc(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const d of o.g.values())c=c.concat(d.G);return c}return C(o.i)}var Rc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function If(o,c){if(o){o=o.split("&");for(let d=0;d<o.length;d++){const m=o[d].indexOf("=");let T,R=null;m>=0?(T=o[d].substring(0,m),R=o[d].substring(m+1)):T=o[d],c(T,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function gn(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;o instanceof gn?(this.l=o.l,Wr(this,o.j),this.o=o.o,this.g=o.g,Kr(this,o.u),this.h=o.h,go(this,Dc(o.i)),this.m=o.m):o&&(c=String(o).match(Rc))?(this.l=!1,Wr(this,c[1]||"",!0),this.o=Qr(c[2]||""),this.g=Qr(c[3]||"",!0),Kr(this,c[4]),this.h=Qr(c[5]||"",!0),go(this,c[6]||"",!0),this.m=Qr(c[7]||"")):(this.l=!1,this.i=new Xr(null,this.l))}gn.prototype.toString=function(){const o=[];var c=this.j;c&&o.push(Jr(c,Pc,!0),":");var d=this.g;return(d||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Jr(c,Pc,!0),"@"),o.push(zr(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&o.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Jr(d,d.charAt(0)=="/"?Tf:bf,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Jr(d,Cf)),o.join("")},gn.prototype.resolve=function(o){const c=jt(this);let d=!!o.j;d?Wr(c,o.j):d=!!o.o,d?c.o=o.o:d=!!o.g,d?c.g=o.g:d=o.u!=null;var m=o.h;if(d)Kr(c,o.u);else if(d=!!o.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var T=c.h.lastIndexOf("/");T!=-1&&(m=c.h.slice(0,T+1)+m)}if(T=m,T==".."||T==".")m="";else if(T.indexOf("./")!=-1||T.indexOf("/.")!=-1){m=T.lastIndexOf("/",0)==0,T=T.split("/");const R=[];for(let F=0;F<T.length;){const fe=T[F++];fe=="."?m&&F==T.length&&R.push(""):fe==".."?((R.length>1||R.length==1&&R[0]!="")&&R.pop(),m&&F==T.length&&R.push("")):(R.push(fe),m=!0)}m=R.join("/")}else m=T}return d?c.h=m:d=o.i.toString()!=="",d?go(c,Dc(o.i)):d=!!o.m,d&&(c.m=o.m),c};function jt(o){return new gn(o)}function Wr(o,c,d){o.j=d?Qr(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function Kr(o,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);o.u=c}else o.u=null}function go(o,c,d){c instanceof Xr?(o.i=c,Sf(o.i,o.l)):(d||(c=Jr(c,Af)),o.i=new Xr(c,o.l))}function De(o,c,d){o.i.set(c,d)}function qs(o){return De(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Qr(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Jr(o,c,d){return typeof o=="string"?(o=encodeURI(o).replace(c,wf),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function wf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Pc=/[#\/\?@]/g,bf=/[#\?:]/g,Tf=/[#\?]/g,Af=/[#\?@]/g,Cf=/#/g;function Xr(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function Gn(o){o.g||(o.g=new Map,o.h=0,o.i&&If(o.i,function(c,d){o.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}n=Xr.prototype,n.add=function(o,c){Gn(this),this.i=null,o=ur(this,o);let d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(c),this.h+=1,this};function xc(o,c){Gn(o),c=ur(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function kc(o,c){return Gn(o),c=ur(o,c),o.g.has(c)}n.forEach=function(o,c){Gn(this),this.g.forEach(function(d,m){d.forEach(function(T){o.call(c,T,m,this)},this)},this)};function Nc(o,c){Gn(o);let d=[];if(typeof c=="string")kc(o,c)&&(d=d.concat(o.g.get(ur(o,c))));else for(o=Array.from(o.g.values()),c=0;c<o.length;c++)d=d.concat(o[c]);return d}n.set=function(o,c){return Gn(this),this.i=null,o=ur(this,o),kc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=Nc(this,o),o.length>0?String(o[0]):c):c};function Lc(o,c,d){xc(o,c),d.length>0&&(o.i=null,o.g.set(ur(o,c),C(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(let m=0;m<c.length;m++){var d=c[m];const T=zr(d);d=Nc(this,d);for(let R=0;R<d.length;R++){let F=T;d[R]!==""&&(F+="="+zr(d[R])),o.push(F)}}return this.i=o.join("&")};function Dc(o){const c=new Xr;return c.i=o.i,o.g&&(c.g=new Map(o.g),c.h=o.h),c}function ur(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function Sf(o,c){c&&!o.j&&(Gn(o),o.i=null,o.g.forEach(function(d,m){const T=m.toLowerCase();m!=T&&(xc(this,m),Lc(this,T,d))},o)),o.j=c}function Rf(o,c){const d=new wt;if(a.Image){const m=new Image;m.onload=f(yn,d,"TestLoadImage: loaded",!0,c,m),m.onerror=f(yn,d,"TestLoadImage: error",!1,c,m),m.onabort=f(yn,d,"TestLoadImage: abort",!1,c,m),m.ontimeout=f(yn,d,"TestLoadImage: timeout",!1,c,m),a.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else c(!1)}function Pf(o,c){const d=new wt,m=new AbortController,T=setTimeout(()=>{m.abort(),yn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:m.signal}).then(R=>{clearTimeout(T),R.ok?yn(d,"TestPingServer: ok",!0,c):yn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(T),yn(d,"TestPingServer: error",!1,c)})}function yn(o,c,d,m,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),m(d)}catch{}}function xf(){this.g=new J}function yo(o){this.i=o.Sb||null,this.h=o.ab||!1}p(yo,ue),yo.prototype.g=function(){return new $s(this.i,this.h)};function $s(o,c){et.call(this),this.H=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p($s,et),n=$s.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=c,this.readyState=1,Zr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(c.body=o),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Yr(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Zr(this)),this.g&&(this.readyState=3,Zr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Vc(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Vc(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?Yr(this):Zr(this),this.readyState==3&&Vc(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,Yr(this))},n.Na=function(o){this.g&&(this.response=o,Yr(this))},n.ga=function(){this.g&&Yr(this)};function Yr(o){o.readyState=4,o.l=null,o.j=null,o.B=null,Zr(o)}n.setRequestHeader=function(o,c){this.A.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=c.next();return o.join(`\r
`)};function Zr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty($s.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Mc(o){let c="";return Ae(o,function(d,m){c+=m,c+=":",c+=d,c+=`\r
`}),c}function _o(o,c,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Mc(d),typeof o=="string"?d!=null&&zr(d):De(o,c,d))}function Be(o){et.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Be,et);var kf=/^https?$/i,Nf=["POST","PUT"];n=Be.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,c,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Tt.g(),this.g.onreadystatechange=y(h(this.Ca,this));try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(R){Oc(this,R);return}if(o=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var T in m)d.set(T,m[T]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const R of m.keys())d.set(R,m.get(R));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(R=>R.toLowerCase()=="content-type"),T=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Nf,c,void 0)>=0)||m||T||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,F]of d)this.g.setRequestHeader(R,F);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(R){Oc(this,R)}};function Oc(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.o=5,Fc(o),Hs(o)}function Fc(o){o.A||(o.A=!0,A(o,"complete"),A(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,A(this,"complete"),A(this,"abort"),Hs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Hs(this,!0)),Be.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Uc(this):this.Xa())},n.Xa=function(){Uc(this)};function Uc(o){if(o.h&&typeof i<"u"){if(o.v&&_n(o)==4)setTimeout(o.Ca.bind(o),0);else if(A(o,"readystatechange"),_n(o)==4){o.h=!1;try{const R=o.ca();e:switch(R){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var m;if(m=R===0){let F=String(o.D).match(Rc)[1]||null;!F&&a.self&&a.self.location&&(F=a.self.location.protocol.slice(0,-1)),m=!kf.test(F?F.toLowerCase():"")}d=m}if(d)A(o,"complete"),A(o,"success");else{o.o=6;try{var T=_n(o)>2?o.g.statusText:""}catch{T=""}o.l=T+" ["+o.ca()+"]",Fc(o)}}finally{Hs(o)}}}}function Hs(o,c){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const d=o.g;o.g=null,c||A(o,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function _n(o){return o.g?o.g.readyState:0}n.ca=function(){try{return _n(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),he(c)}};function Bc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Lf(o){const c={};o=(o.g&&_n(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(v(o[m]))continue;var d=yf(o[m]);const T=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const R=c[T]||[];c[T]=R,R.push(d)}Te(c,function(m){return m.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function es(o,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||c}function jc(o){this.za=0,this.i=[],this.j=new wt,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=es("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=es("baseRetryDelayMs",5e3,o),this.Za=es("retryDelaySeedMs",1e4,o),this.Ta=es("forwardChannelMaxRetries",2,o),this.va=es("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new bc(o&&o.concurrentRequestLimit),this.Ba=new xf,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=jc.prototype,n.ka=8,n.I=1,n.connect=function(o,c,d,m){we(0),this.W=o,this.H=c||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.J=Jc(this,null,this.W),Gs(this)};function vo(o){if(qc(o),o.I==3){var c=o.V++,d=jt(o.J);if(De(d,"SID",o.M),De(d,"RID",c),De(d,"TYPE","terminate"),ts(o,d),c=new pn(o,o.j,c),c.M=2,c.A=qs(jt(d)),d=!1,a.navigator&&a.navigator.sendBeacon)try{d=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!d&&a.Image&&(new Image().src=c.A,d=!0),d||(c.g=Xc(c.j,null),c.g.ea(c.A)),c.F=Date.now(),js(c)}Qc(o)}function zs(o){o.g&&(Io(o),o.g.cancel(),o.g=null)}function qc(o){zs(o),o.v&&(a.clearTimeout(o.v),o.v=null),Ws(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function Gs(o){if(!Tc(o.h)&&!o.m){o.m=!0;var c=o.Ea;Q||g(),Z||(Q(),Z=!0),I.add(c,o),o.D=0}}function Df(o,c){return Ac(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=c.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=Vt(h(o.Ea,o,c),Kc(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const T=new pn(this,this.j,o);let R=this.o;if(this.U&&(R?(R=Ue(R),ke(R,this.U)):R=this.U),this.u!==null||this.R||(T.J=R,R=null),this.S)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(c+=m,c>4096){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=Hc(this,T,c),d=jt(this.J),De(d,"RID",o),De(d,"CVER",22),this.G&&De(d,"X-HTTP-Session-Id",this.G),ts(this,d),R&&(this.R?c="headers="+zr(Mc(R))+"&"+c:this.u&&_o(d,this.u,R)),po(this.h,T),this.Ra&&De(d,"TYPE","init"),this.S?(De(d,"$req",c),De(d,"SID","null"),T.U=!0,uo(T,d,null)):uo(T,d,c),this.I=2}}else this.I==3&&(o?$c(this,o):this.i.length==0||Tc(this.h)||$c(this))};function $c(o,c){var d;c?d=c.l:d=o.V++;const m=jt(o.J);De(m,"SID",o.M),De(m,"RID",d),De(m,"AID",o.K),ts(o,m),o.u&&o.o&&_o(m,o.u,o.o),d=new pn(o,o.j,d,o.D+1),o.u===null&&(d.J=o.o),c&&(o.i=c.G.concat(o.i)),c=Hc(o,d,1e3),d.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),po(o.h,d),uo(d,m,c)}function ts(o,c){o.H&&Ae(o.H,function(d,m){De(c,m,d)}),o.l&&Ae({},function(d,m){De(c,m,d)})}function Hc(o,c,d){d=Math.min(o.i.length,d);const m=o.l?h(o.l.Ka,o.l,o):null;e:{var T=o.i;let fe=-1;for(;;){const Xe=["count="+d];fe==-1?d>0?(fe=T[0].g,Xe.push("ofs="+fe)):fe=0:Xe.push("ofs="+fe);let Pe=!0;for(let tt=0;tt<d;tt++){var R=T[tt].g;const qt=T[tt].map;if(R-=fe,R<0)fe=Math.max(0,T[tt].g-100),Pe=!1;else try{R="req"+R+"_"||"";try{var F=qt instanceof Map?qt:Object.entries(qt);for(const[Kn,vn]of F){let En=vn;l(vn)&&(En=X(vn)),Xe.push(R+Kn+"="+encodeURIComponent(En))}}catch(Kn){throw Xe.push(R+"type="+encodeURIComponent("_badmap")),Kn}}catch{m&&m(qt)}}if(Pe){F=Xe.join("&");break e}}F=void 0}return o=o.i.splice(0,d),c.G=o,F}function zc(o){if(!o.g&&!o.v){o.Y=1;var c=o.Da;Q||g(),Z||(Q(),Z=!0),I.add(c,o),o.A=0}}function Eo(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=Vt(h(o.Da,o),Kc(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,Gc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=Vt(h(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,we(10),zs(this),Gc(this))};function Io(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Gc(o){o.g=new pn(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var c=jt(o.na);De(c,"RID","rpc"),De(c,"SID",o.M),De(c,"AID",o.K),De(c,"CI",o.F?"0":"1"),!o.F&&o.ia&&De(c,"TO",o.ia),De(c,"TYPE","xmlhttp"),ts(o,c),o.u&&o.o&&_o(c,o.u,o.o),o.O&&(o.g.H=o.O);var d=o.g;o=o.ba,d.M=1,d.A=qs(jt(c)),d.u=null,d.R=!0,Ec(d,o)}n.Va=function(){this.C!=null&&(this.C=null,zs(this),Eo(this),we(19))};function Ws(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Wc(o,c){var d=null;if(o.g==c){Ws(o),Io(o),o.g=null;var m=2}else if(mo(o.h,c))d=c.G,Cc(o.h,c),m=1;else return;if(o.I!=0){if(c.o)if(m==1){d=c.u?c.u.length:0,c=Date.now()-c.F;var T=o.D;m=_t(),A(m,new Dt(m,d)),Gs(o)}else zc(o);else if(T=c.m,T==3||T==0&&c.X>0||!(m==1&&Df(o,c)||m==2&&Eo(o)))switch(d&&d.length>0&&(c=o.h,c.i=c.i.concat(d)),T){case 1:Wn(o,5);break;case 4:Wn(o,10);break;case 3:Wn(o,6);break;default:Wn(o,2)}}}function Kc(o,c){let d=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(d*=2),d*c}function Wn(o,c){if(o.j.info("Error code "+c),c==2){var d=h(o.bb,o),m=o.Ua;const T=!m;m=new gn(m||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Wr(m,"https"),qs(m),T?Rf(m.toString(),d):Pf(m.toString(),d)}else we(2);o.I=0,o.l&&o.l.pa(c),Qc(o),qc(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),we(2)):(this.j.info("Failed to ping google.com"),we(1))};function Qc(o){if(o.I=0,o.ja=[],o.l){const c=Sc(o.h);(c.length!=0||o.i.length!=0)&&(P(o.ja,c),P(o.ja,o.i),o.h.i.length=0,C(o.i),o.i.length=0),o.l.oa()}}function Jc(o,c,d){var m=d instanceof gn?jt(d):new gn(d);if(m.g!="")c&&(m.g=c+"."+m.g),Kr(m,m.u);else{var T=a.location;m=T.protocol,c=c?c+"."+T.hostname:T.hostname,T=+T.port;const R=new gn(null);m&&Wr(R,m),c&&(R.g=c),T&&Kr(R,T),d&&(R.h=d),m=R}return d=o.G,c=o.wa,d&&c&&De(m,d,c),De(m,"VER",o.ka),ts(o,m),m}function Xc(o,c,d){if(c&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Aa&&!o.ma?new Be(new yo({ab:d})):new Be(o.ma),c.Fa(o.L),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Yc(){}n=Yc.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Ks(){}Ks.prototype.g=function(o,c){return new At(o,c)};function At(o,c){et.call(this),this.g=new jc(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(o?o["X-WebChannel-Client-Profile"]=c.sa:o={"X-WebChannel-Client-Profile":c.sa}),this.g.U=o,(o=c&&c.Qb)&&!v(o)&&(this.g.u=o),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!v(c)&&(this.g.G=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new dr(this)}p(At,et),At.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){vo(this.g)},At.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.v&&(d={},d.__data__=X(o),o=d);c.i.push(new Ef(c.Ya++,o)),c.I==3&&Gs(c)},At.prototype.N=function(){this.g.l=null,delete this.j,vo(this.g),delete this.g,At.Z.N.call(this)};function Zc(o){yt.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const d in c){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}p(Zc,yt);function el(){it.call(this),this.status=1}p(el,it);function dr(o){this.g=o}p(dr,Yc),dr.prototype.ra=function(){A(this.g,"a")},dr.prototype.qa=function(o){A(this.g,new Zc(o))},dr.prototype.pa=function(o){A(this.g,new el)},dr.prototype.oa=function(){A(this.g,"b")},Ks.prototype.createWebChannel=Ks.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,kd=function(){return new Ks},xd=function(){return _t()},Pd=ze,Ko={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},kt.NO_ERROR=0,kt.TIMEOUT=8,kt.HTTP_ERROR=6,ai=kt,mn.COMPLETE="complete",Rd=mn,Se.EventType=Le,Le.OPEN="a",Le.CLOSE="b",Le.ERROR="c",Le.MESSAGE="d",et.prototype.listen=et.prototype.J,ns=Se,Be.prototype.listenOnce=Be.prototype.K,Be.prototype.getLastError=Be.prototype.Ha,Be.prototype.getLastErrorCode=Be.prototype.ya,Be.prototype.getStatus=Be.prototype.ca,Be.prototype.getResponseJson=Be.prototype.La,Be.prototype.getResponseText=Be.prototype.la,Be.prototype.send=Be.prototype.ea,Be.prototype.setWithCredentials=Be.prototype.Fa,Sd=Be}).apply(typeof Xs<"u"?Xs:typeof self<"u"?self:typeof window<"u"?window:{});const xl="@firebase/firestore",kl="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Or="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr=new ya("@firebase/firestore");function mr(){return sr.logLevel}function $(n,...e){if(sr.logLevel<=ge.DEBUG){const t=e.map(Pa);sr.debug(`Firestore (${Or}): ${n}`,...t)}}function ln(n,...e){if(sr.logLevel<=ge.ERROR){const t=e.map(Pa);sr.error(`Firestore (${Or}): ${n}`,...t)}}function Cr(n,...e){if(sr.logLevel<=ge.WARN){const t=e.map(Pa);sr.warn(`Firestore (${Or}): ${n}`,...t)}}function Pa(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function te(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Nd(n,r,t)}function Nd(n,e,t){let r=`FIRESTORE (${Or}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw ln(r),new Error(r)}function Ie(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Nd(e,s,r)}function ce(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends dn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Iy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(ft.UNAUTHENTICATED)))}shutdown(){}}class wy{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class by{constructor(e){this.t=e,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ie(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new Wt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Wt,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const u=i;e.enqueueRetryable((async()=>{await u.promise,await s(this.currentUser)}))},l=u=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((u=>l(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Wt)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ie(typeof r.accessToken=="string",31837,{l:r}),new Ld(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ie(e===null||typeof e=="string",2055,{h:e}),new ft(e)}}class Ty{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Ay{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Ty(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(ft.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Nl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Cy{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ht(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ie(this.o===void 0,3512);const r=i=>{i.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,$("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Nl(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Ie(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Nl(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Sy(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function ye(n,e){return n<e?-1:n>e?1:0}function Qo(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return xo(s)===xo(i)?ye(s,i):xo(s)?1:-1}return ye(n.length,e.length)}const Ry=55296,Py=57343;function xo(n){const e=n.charCodeAt(0);return e>=Ry&&e<=Py}function Sr(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll="__name__";class $t{constructor(e,t,r){t===void 0?t=0:t>e.length&&te(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&te(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return $t.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof $t?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=$t.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return ye(e.length,t.length)}static compareSegments(e,t){const r=$t.isNumericId(e),s=$t.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?$t.extractNumericId(e).compare($t.extractNumericId(t)):Qo(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return kn.fromString(e.substring(4,e.length-2))}}class Re extends $t{construct(e,t,r){return new Re(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new U(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new Re(t)}static emptyPath(){return new Re([])}}const xy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends $t{construct(e,t,r){return new ct(e,t,r)}static isValidIdentifier(e){return xy.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ll}static keyField(){return new ct([Ll])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new U(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new U(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new U(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new U(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ct(t)}static emptyPath(){return new ct([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Dd(n,e,t){if(!t)throw new U(k.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function ky(n,e,t,r){if(e===!0&&r===!0)throw new U(k.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Dl(n){if(!Y.isDocumentKey(n))throw new U(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Vl(n){if(Y.isDocumentKey(n))throw new U(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Vd(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function $i(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":te(12329,{type:typeof n})}function pt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new U(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=$i(n);throw new U(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Je(n,e){const t={typeString:n};return e&&(t.value=e),t}function Ps(n,e){if(!Vd(n))throw new U(k.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new U(k.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml=-62135596800,Ol=1e6;class Ve{static now(){return Ve.fromMillis(Date.now())}static fromDate(e){return Ve.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Ol);return new Ve(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new U(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new U(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Ml)throw new U(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ol}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ve._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ps(e,Ve._jsonSchema))return new Ve(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ml;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ve._jsonSchemaVersion="firestore/timestamp/1.0",Ve._jsonSchema={type:Je("string",Ve._jsonSchemaVersion),seconds:Je("number"),nanoseconds:Je("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{static fromTimestamp(e){return new ie(e)}static min(){return new ie(new Ve(0,0))}static max(){return new ie(new Ve(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const gs=-1;function Ny(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=ie.fromTimestamp(r===1e9?new Ve(t+1,0):new Ve(t,r));return new Dn(s,Y.empty(),e)}function Ly(n){return new Dn(n.readTime,n.key,gs)}class Dn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Dn(ie.min(),Y.empty(),gs)}static max(){return new Dn(ie.max(),Y.empty(),gs)}}function Dy(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Y.comparator(n.documentKey,e.documentKey),t!==0?t:ye(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vy="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class My{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fr(n){if(n.code!==k.FAILED_PRECONDITION||n.message!==Vy)throw n;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&te(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new L(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof L?t:L.resolve(t)}catch(t){return L.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):L.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):L.reject(t)}static resolve(e){return new L(((t,r)=>{t(e)}))}static reject(e){return new L(((t,r)=>{r(e)}))}static waitFor(e){return new L(((t,r)=>{let s=0,i=0,a=!1;e.forEach((l=>{++s,l.next((()=>{++i,a&&i===s&&t()}),(u=>r(u)))})),a=!0,i===s&&t()}))}static or(e){let t=L.resolve(!1);for(const r of e)t=t.next((s=>s?L.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,i)=>{r.push(t.call(this,s,i))})),this.waitFor(r)}static mapArray(e,t){return new L(((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let u=0;u<i;u++){const h=u;t(e[h]).next((f=>{a[h]=f,++l,l===i&&r(a)}),(f=>s(f)))}}))}static doWhile(e,t){return new L(((r,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):r()};i()}))}}function Oy(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ur(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Hi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Hi.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka=-1;function xs(n){return n==null}function Ii(n){return n===0&&1/n==-1/0}function Fy(n){return typeof n=="number"&&Number.isInteger(n)&&!Ii(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md="";function Uy(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Fl(e)),e=By(n.get(t),e);return Fl(e)}function By(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Md:t+="";break;default:t+=i}}return t}function Fl(n){return n+Md+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function jn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Od(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,t){this.comparator=e,this.root=t||ot.EMPTY}insert(e,t){return new Fe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ot.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ys(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ys(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ys(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ys(this.root,e,this.comparator,!0)}}class Ys{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ot{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??ot.RED,this.left=s??ot.EMPTY,this.right=i??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new ot(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return ot.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw te(43730,{key:this.key,value:this.value});if(this.right.isRed())throw te(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw te(27949);return e+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw te(57766)}get value(){throw te(16141)}get color(){throw te(16727)}get left(){throw te(29726)}get right(){throw te(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new ot(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Bl(this.data.getIterator())}getIteratorFrom(e){return new Bl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof Ze)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ze(this.comparator);return t.data=e,t}}class Bl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.fields=e,e.sort(ct.comparator)}static empty(){return new St([])}unionWith(e){let t=new Ze(ct.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new St(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Sr(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class Fd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Fd("Invalid base64 string: "+i):i}})(e);return new ut(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(e);return new ut(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const jy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vn(n){if(Ie(!!n,39018),typeof n=="string"){let e=0;const t=jy.exec(n);if(Ie(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:qe(n.seconds),nanos:qe(n.nanos)}}function qe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Mn(n){return typeof n=="string"?ut.fromBase64String(n):ut.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud="server_timestamp",Bd="__type__",jd="__previous_value__",qd="__local_write_time__";function Na(n){return(n?.mapValue?.fields||{})[Bd]?.stringValue===Ud}function zi(n){const e=n.mapValue.fields[jd];return Na(e)?zi(e):e}function ys(n){const e=Vn(n.mapValue.fields[qd].timestampValue);return new Ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(e,t,r,s,i,a,l,u,h,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f}}const wi="(default)";class _s{constructor(e,t){this.projectId=e,this.database=t||wi}static empty(){return new _s("","")}get isDefaultDatabase(){return this.database===wi}isEqual(e){return e instanceof _s&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d="__type__",$y="__max__",Zs={mapValue:{}},Hd="__vector__",bi="value";function On(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Na(n)?4:zy(n)?9007199254740991:Hy(n)?10:11:te(28295,{value:n})}function Xt(n,e){if(n===e)return!0;const t=On(n);if(t!==On(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ys(n).isEqual(ys(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Vn(s.timestampValue),l=Vn(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,i){return Mn(s.bytesValue).isEqual(Mn(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,i){return qe(s.geoPointValue.latitude)===qe(i.geoPointValue.latitude)&&qe(s.geoPointValue.longitude)===qe(i.geoPointValue.longitude)})(n,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return qe(s.integerValue)===qe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=qe(s.doubleValue),l=qe(i.doubleValue);return a===l?Ii(a)===Ii(l):isNaN(a)&&isNaN(l)}return!1})(n,e);case 9:return Sr(n.arrayValue.values||[],e.arrayValue.values||[],Xt);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Ul(a)!==Ul(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!Xt(a[u],l[u])))return!1;return!0})(n,e);default:return te(52216,{left:n})}}function vs(n,e){return(n.values||[]).find((t=>Xt(t,e)))!==void 0}function Rr(n,e){if(n===e)return 0;const t=On(n),r=On(e);if(t!==r)return ye(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ye(n.booleanValue,e.booleanValue);case 2:return(function(i,a){const l=qe(i.integerValue||i.doubleValue),u=qe(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1})(n,e);case 3:return jl(n.timestampValue,e.timestampValue);case 4:return jl(ys(n),ys(e));case 5:return Qo(n.stringValue,e.stringValue);case 6:return(function(i,a){const l=Mn(i),u=Mn(a);return l.compareTo(u)})(n.bytesValue,e.bytesValue);case 7:return(function(i,a){const l=i.split("/"),u=a.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=ye(l[h],u[h]);if(f!==0)return f}return ye(l.length,u.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,a){const l=ye(qe(i.latitude),qe(a.latitude));return l!==0?l:ye(qe(i.longitude),qe(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return ql(n.arrayValue,e.arrayValue);case 10:return(function(i,a){const l=i.fields||{},u=a.fields||{},h=l[bi]?.arrayValue,f=u[bi]?.arrayValue,p=ye(h?.values?.length||0,f?.values?.length||0);return p!==0?p:ql(h,f)})(n.mapValue,e.mapValue);case 11:return(function(i,a){if(i===Zs.mapValue&&a===Zs.mapValue)return 0;if(i===Zs.mapValue)return 1;if(a===Zs.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),h=a.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const y=Qo(u[p],f[p]);if(y!==0)return y;const C=Rr(l[u[p]],h[f[p]]);if(C!==0)return C}return ye(u.length,f.length)})(n.mapValue,e.mapValue);default:throw te(23264,{he:t})}}function jl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ye(n,e);const t=Vn(n),r=Vn(e),s=ye(t.seconds,r.seconds);return s!==0?s:ye(t.nanos,r.nanos)}function ql(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Rr(t[s],r[s]);if(i)return i}return ye(t.length,r.length)}function Pr(n){return Jo(n)}function Jo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Vn(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Mn(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return Y.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Jo(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Jo(t.fields[a])}`;return s+"}"})(n.mapValue):te(61005,{value:n})}function ci(n){switch(On(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=zi(n);return e?16+ci(e):16;case 5:return 2*n.stringValue.length;case 6:return Mn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+ci(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return jn(r.fields,((i,a)=>{s+=i.length+ci(a)})),s})(n.mapValue);default:throw te(13486,{value:n})}}function $l(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Xo(n){return!!n&&"integerValue"in n}function La(n){return!!n&&"arrayValue"in n}function Hl(n){return!!n&&"nullValue"in n}function zl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function li(n){return!!n&&"mapValue"in n}function Hy(n){return(n?.mapValue?.fields||{})[$d]?.stringValue===Hd}function as(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return jn(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=as(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=as(n.arrayValue.values[t]);return e}return{...n}}function zy(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===$y}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.value=e}static empty(){return new Et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!li(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=as(t)}setAll(e){let t=ct.emptyPath(),r={},s=[];e.forEach(((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=as(a):s.push(l.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());li(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Xt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];li(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){jn(t,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new Et(as(this.value))}}function zd(n){const e=[];return jn(n.fields,((t,r)=>{const s=new ct([t]);if(li(r)){const i=zd(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)})),new St(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,t,r,s,i,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new rt(e,0,ie.min(),ie.min(),ie.min(),Et.empty(),0)}static newFoundDocument(e,t,r,s){return new rt(e,1,t,ie.min(),r,s,0)}static newNoDocument(e,t){return new rt(e,2,t,ie.min(),ie.min(),Et.empty(),0)}static newUnknownDocument(e,t){return new rt(e,3,t,ie.min(),ie.min(),Et.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ti{constructor(e,t){this.position=e,this.inclusive=t}}function Gl(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=Y.comparator(Y.fromName(a.referenceValue),t.key):r=Rr(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Wl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Xt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ai{constructor(e,t="asc"){this.field=e,this.dir=t}}function Gy(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Gd{}class Ke extends Gd{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Ky(e,t,r):t==="array-contains"?new Xy(e,r):t==="in"?new Yy(e,r):t==="not-in"?new Zy(e,r):t==="array-contains-any"?new e_(e,r):new Ke(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Qy(e,r):new Jy(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Rr(t,this.value)):t!==null&&On(this.value)===On(t)&&this.matchesComparison(Rr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ft extends Gd{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Ft(e,t)}matches(e){return Wd(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Wd(n){return n.op==="and"}function Kd(n){return Wy(n)&&Wd(n)}function Wy(n){for(const e of n.filters)if(e instanceof Ft)return!1;return!0}function Yo(n){if(n instanceof Ke)return n.field.canonicalString()+n.op.toString()+Pr(n.value);if(Kd(n))return n.filters.map((e=>Yo(e))).join(",");{const e=n.filters.map((t=>Yo(t))).join(",");return`${n.op}(${e})`}}function Qd(n,e){return n instanceof Ke?(function(r,s){return s instanceof Ke&&r.op===s.op&&r.field.isEqual(s.field)&&Xt(r.value,s.value)})(n,e):n instanceof Ft?(function(r,s){return s instanceof Ft&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,l)=>i&&Qd(a,s.filters[l])),!0):!1})(n,e):void te(19439)}function Jd(n){return n instanceof Ke?(function(t){return`${t.field.canonicalString()} ${t.op} ${Pr(t.value)}`})(n):n instanceof Ft?(function(t){return t.op.toString()+" {"+t.getFilters().map(Jd).join(" ,")+"}"})(n):"Filter"}class Ky extends Ke{constructor(e,t,r){super(e,t,r),this.key=Y.fromName(r.referenceValue)}matches(e){const t=Y.comparator(e.key,this.key);return this.matchesComparison(t)}}class Qy extends Ke{constructor(e,t){super(e,"in",t),this.keys=Xd("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Jy extends Ke{constructor(e,t){super(e,"not-in",t),this.keys=Xd("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Xd(n,e){return(e.arrayValue?.values||[]).map((t=>Y.fromName(t.referenceValue)))}class Xy extends Ke{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return La(t)&&vs(t.arrayValue,this.value)}}class Yy extends Ke{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&vs(this.value.arrayValue,t)}}class Zy extends Ke{constructor(e,t){super(e,"not-in",t)}matches(e){if(vs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!vs(this.value.arrayValue,t)}}class e_ extends Ke{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!La(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>vs(this.value.arrayValue,r)))}}/**
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
 */class t_{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Te=null}}function Kl(n,e=null,t=[],r=[],s=null,i=null,a=null){return new t_(n,e,t,r,s,i,a)}function Da(n){const e=ce(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>Yo(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),xs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>Pr(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>Pr(r))).join(",")),e.Te=t}return e.Te}function Va(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Gy(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Qd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Wl(n.startAt,e.startAt)&&Wl(n.endAt,e.endAt)}function Zo(n){return Y.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function n_(n,e,t,r,s,i,a,l){return new ks(n,e,t,r,s,i,a,l)}function Gi(n){return new ks(n)}function Ql(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Yd(n){return n.collectionGroup!==null}function cs(n){const e=ce(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Ze(ct.comparator);return a.filters.forEach((u=>{u.getFlattenedFilters().forEach((h=>{h.isInequality()&&(l=l.add(h.field))}))})),l})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Ai(i,r))})),t.has(ct.keyField().canonicalString())||e.Ie.push(new Ai(ct.keyField(),r))}return e.Ie}function Kt(n){const e=ce(n);return e.Ee||(e.Ee=r_(e,cs(n))),e.Ee}function r_(n,e){if(n.limitType==="F")return Kl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Ai(s.field,i)}));const t=n.endAt?new Ti(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ti(n.startAt.position,n.startAt.inclusive):null;return Kl(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function ea(n,e){const t=n.filters.concat([e]);return new ks(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function ta(n,e,t){return new ks(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Wi(n,e){return Va(Kt(n),Kt(e))&&n.limitType===e.limitType}function Zd(n){return`${Da(Kt(n))}|lt:${n.limitType}`}function pr(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>Jd(s))).join(", ")}]`),xs(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>Pr(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>Pr(s))).join(",")),`Target(${r})`})(Kt(n))}; limitType=${n.limitType})`}function Ki(n,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Y.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,e)&&(function(r,s){for(const i of cs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(a,l,u){const h=Gl(a,l,u);return a.inclusive?h<=0:h<0})(r.startAt,cs(r),s)||r.endAt&&!(function(a,l,u){const h=Gl(a,l,u);return a.inclusive?h>=0:h>0})(r.endAt,cs(r),s))})(n,e)}function s_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function eh(n){return(e,t)=>{let r=!1;for(const s of cs(n)){const i=i_(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function i_(n,e,t){const r=n.field.isKeyField()?Y.comparator(e.key,t.key):(function(i,a,l){const u=a.data.field(i),h=l.data.field(i);return u!==null&&h!==null?Rr(u,h):te(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return te(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){jn(this.inner,((t,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return Od(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_=new Fe(Y.comparator);function un(){return o_}const th=new Fe(Y.comparator);function rs(...n){let e=th;for(const t of n)e=e.insert(t.key,t);return e}function nh(n){let e=th;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function Xn(){return ls()}function rh(){return ls()}function ls(){return new or((n=>n.toString()),((n,e)=>n.isEqual(e)))}const a_=new Fe(Y.comparator),c_=new Ze(Y.comparator);function _e(...n){let e=c_;for(const t of n)e=e.add(t);return e}const l_=new Ze(ye);function u_(){return l_}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ii(e)?"-0":e}}function sh(n){return{integerValue:""+n}}function d_(n,e){return Fy(e)?sh(e):Ma(n,e)}/**
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
 */class Qi{constructor(){this._=void 0}}function h_(n,e,t){return n instanceof Ci?(function(s,i){const a={fields:{[Bd]:{stringValue:Ud},[qd]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Na(i)&&(i=zi(i)),i&&(a.fields[jd]=i),{mapValue:a}})(t,e):n instanceof xr?oh(n,e):n instanceof kr?ah(n,e):(function(s,i){const a=ih(s,i),l=Jl(a)+Jl(s.Ae);return Xo(a)&&Xo(s.Ae)?sh(l):Ma(s.serializer,l)})(n,e)}function f_(n,e,t){return n instanceof xr?oh(n,e):n instanceof kr?ah(n,e):t}function ih(n,e){return n instanceof Si?(function(r){return Xo(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class Ci extends Qi{}class xr extends Qi{constructor(e){super(),this.elements=e}}function oh(n,e){const t=ch(e);for(const r of n.elements)t.some((s=>Xt(s,r)))||t.push(r);return{arrayValue:{values:t}}}class kr extends Qi{constructor(e){super(),this.elements=e}}function ah(n,e){let t=ch(e);for(const r of n.elements)t=t.filter((s=>!Xt(s,r)));return{arrayValue:{values:t}}}class Si extends Qi{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Jl(n){return qe(n.integerValue||n.doubleValue)}function ch(n){return La(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e,t){this.field=e,this.transform=t}}function m_(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof xr&&s instanceof xr||r instanceof kr&&s instanceof kr?Sr(r.elements,s.elements,Xt):r instanceof Si&&s instanceof Si?Xt(r.Ae,s.Ae):r instanceof Ci&&s instanceof Ci})(n.transform,e.transform)}class p_{constructor(e,t){this.version=e,this.transformResults=t}}class Qe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Qe}static exists(e){return new Qe(void 0,e)}static updateTime(e){return new Qe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ui(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ji{}function uh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ls(n.key,Qe.none()):new Ns(n.key,n.data,Qe.none());{const t=n.data,r=Et.empty();let s=new Ze(ct.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new qn(n.key,r,new St(s.toArray()),Qe.none())}}function g_(n,e,t){n instanceof Ns?(function(s,i,a){const l=s.value.clone(),u=Yl(s.fieldTransforms,i,a.transformResults);l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,e,t):n instanceof qn?(function(s,i,a){if(!ui(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Yl(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(dh(s)),u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(n,e,t):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function us(n,e,t,r){return n instanceof Ns?(function(i,a,l,u){if(!ui(i.precondition,a))return l;const h=i.value.clone(),f=Zl(i.fieldTransforms,u,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null})(n,e,t,r):n instanceof qn?(function(i,a,l,u){if(!ui(i.precondition,a))return l;const h=Zl(i.fieldTransforms,u,a),f=a.data;return f.setAll(dh(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(n,e,t,r):(function(i,a,l){return ui(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l})(n,e,t)}function y_(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=ih(r.transform,s||null);i!=null&&(t===null&&(t=Et.empty()),t.set(r.field,i))}return t||null}function Xl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Sr(r,s,((i,a)=>m_(i,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ns extends Ji{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class qn extends Ji{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function dh(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function Yl(n,e,t){const r=new Map;Ie(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,f_(a,l,t[s]))}return r}function Zl(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,h_(i,a,e))}return r}class Ls extends Ji{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hh extends Ji{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&g_(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=us(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=us(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=rh();return this.mutations.forEach((s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const u=uh(a,l);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(ie.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),_e())}isEqual(e){return this.batchId===e.batchId&&Sr(this.mutations,e.mutations,((t,r)=>Xl(t,r)))&&Sr(this.baseMutations,e.baseMutations,((t,r)=>Xl(t,r)))}}class Oa{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Ie(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return a_})();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Oa(e,t,r,s)}}/**
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
 */class v_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class E_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var We,Ee;function fh(n){switch(n){case k.OK:return te(64938);case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0;default:return te(15467,{code:n})}}function mh(n){if(n===void 0)return ln("GRPC error has no .code"),k.UNKNOWN;switch(n){case We.OK:return k.OK;case We.CANCELLED:return k.CANCELLED;case We.UNKNOWN:return k.UNKNOWN;case We.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case We.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case We.INTERNAL:return k.INTERNAL;case We.UNAVAILABLE:return k.UNAVAILABLE;case We.UNAUTHENTICATED:return k.UNAUTHENTICATED;case We.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case We.NOT_FOUND:return k.NOT_FOUND;case We.ALREADY_EXISTS:return k.ALREADY_EXISTS;case We.PERMISSION_DENIED:return k.PERMISSION_DENIED;case We.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case We.ABORTED:return k.ABORTED;case We.OUT_OF_RANGE:return k.OUT_OF_RANGE;case We.UNIMPLEMENTED:return k.UNIMPLEMENTED;case We.DATA_LOSS:return k.DATA_LOSS;default:return te(39323,{code:n})}}(Ee=We||(We={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function I_(){return new TextEncoder}/**
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
 */const w_=new kn([4294967295,4294967295],0);function eu(n){const e=I_().encode(n),t=new Cd;return t.update(e),new Uint8Array(t.digest())}function tu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new kn([t,r],0),new kn([s,i],0)]}class Fa{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ss(`Invalid padding: ${t}`);if(r<0)throw new ss(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ss(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ss(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=kn.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(kn.fromNumber(r)));return s.compare(w_)===1&&(s=new kn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=eu(e),[r,s]=tu(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Fa(i,s,t);return r.forEach((l=>a.insert(l))),a}insert(e){if(this.ge===0)return;const t=eu(e),[r,s]=tu(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ss extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Ds.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Xi(ie.min(),s,new Fe(ye),un(),_e())}}class Ds{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ds(r,t,_e(),_e(),_e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class ph{constructor(e,t){this.targetId=e,this.Ce=t}}class gh{constructor(e,t,r=ut.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class nu{constructor(){this.ve=0,this.Fe=ru(),this.Me=ut.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=_e(),t=_e(),r=_e();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:te(38017,{changeType:i})}})),new Ds(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=ru()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Ie(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class b_{constructor(e){this.Ge=e,this.ze=new Map,this.je=un(),this.Je=ei(),this.He=ei(),this.Ye=new Fe(ye)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:te(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((r,s)=>{this.rt(s)&&t(s)}))}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(Zo(i))if(r===0){const a=new Y(i.path);this.et(t,a,rt.newNoDocument(a,ie.min()))}else Ie(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const l=this.ut(e),u=l?this.ct(l,e,a):1;if(u!==0){this.it(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=Mn(r).toUint8Array()}catch(u){if(u instanceof Fd)return Cr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Fa(a,s,i)}catch(u){return Cr(u instanceof ss?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach((i=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(t,i,null),s++)})),s}Tt(e){const t=new Map;this.ze.forEach(((i,a)=>{const l=this.ot(a);if(l){if(i.current&&Zo(l.target)){const u=new Y(l.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,rt.newNoDocument(u,e))}i.Be&&(t.set(a,i.ke()),i.qe())}}));let r=_e();this.He.forEach(((i,a)=>{let l=!0;a.forEachWhile((u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(i))})),this.je.forEach(((i,a)=>a.setReadTime(e)));const s=new Xi(e,t,this.Ye,this.je,r);return this.je=un(),this.Je=ei(),this.He=ei(),this.Ye=new Fe(ye),s}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.Qe(t,1):s.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new nu,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Ze(ye),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Ze(ye),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||$("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new nu),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function ei(){return new Fe(Y.comparator)}function ru(){return new Fe(Y.comparator)}const T_={asc:"ASCENDING",desc:"DESCENDING"},A_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},C_={and:"AND",or:"OR"};class S_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function na(n,e){return n.useProto3Json||xs(e)?e:{value:e}}function Ri(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function yh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function R_(n,e){return Ri(n,e.toTimestamp())}function Rt(n){return Ie(!!n,49232),ie.fromTimestamp((function(t){const r=Vn(t);return new Ve(r.seconds,r.nanos)})(n))}function Ua(n,e){return ra(n,e).canonicalString()}function ra(n,e){const t=(function(s){return new Re(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function _h(n){const e=Re.fromString(n);return Ie(Th(e),10190,{key:e.toString()}),e}function Pi(n,e){return Ua(n.databaseId,e.path)}function ds(n,e){const t=_h(e);if(t.get(1)!==n.databaseId.projectId)throw new U(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new U(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Y(Eh(t))}function vh(n,e){return Ua(n.databaseId,e)}function P_(n){const e=_h(n);return e.length===4?Re.emptyPath():Eh(e)}function sa(n){return new Re(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Eh(n){return Ie(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function su(n,e,t){return{name:Pi(n,e),fields:t.value.mapValue.fields}}function x_(n,e){return"found"in e?(function(r,s){Ie(!!s.found,43571),s.found.name,s.found.updateTime;const i=ds(r,s.found.name),a=Rt(s.found.updateTime),l=s.found.createTime?Rt(s.found.createTime):ie.min(),u=new Et({mapValue:{fields:s.found.fields}});return rt.newFoundDocument(i,a,l,u)})(n,e):"missing"in e?(function(r,s){Ie(!!s.missing,3894),Ie(!!s.readTime,22933);const i=ds(r,s.missing),a=Rt(s.readTime);return rt.newNoDocument(i,a)})(n,e):te(7234,{result:e})}function k_(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:te(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(h,f){return h.useProto3Json?(Ie(f===void 0||typeof f=="string",58123),ut.fromBase64String(f||"")):(Ie(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),ut.fromUint8Array(f||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&(function(h){const f=h.code===void 0?k.UNKNOWN:mh(h.code);return new U(f,h.message||"")})(a);t=new gh(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ds(n,r.document.name),i=Rt(r.document.updateTime),a=r.document.createTime?Rt(r.document.createTime):ie.min(),l=new Et({mapValue:{fields:r.document.fields}}),u=rt.newFoundDocument(s,i,a,l),h=r.targetIds||[],f=r.removedTargetIds||[];t=new di(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ds(n,r.document),i=r.readTime?Rt(r.readTime):ie.min(),a=rt.newNoDocument(s,i),l=r.removedTargetIds||[];t=new di([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ds(n,r.document),i=r.removedTargetIds||[];t=new di([],i,s,null)}else{if(!("filter"in e))return te(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new E_(s,i),l=r.targetId;t=new ph(l,a)}}return t}function Ih(n,e){let t;if(e instanceof Ns)t={update:su(n,e.key,e.value)};else if(e instanceof Ls)t={delete:Pi(n,e.key)};else if(e instanceof qn)t={update:su(n,e.key,e.data),updateMask:B_(e.fieldMask)};else{if(!(e instanceof hh))return te(16599,{Vt:e.type});t={verify:Pi(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(i,a){const l=a.transform;if(l instanceof Ci)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof xr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof kr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Si)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw te(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:R_(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:te(27497)})(n,e.precondition)),t}function N_(n,e){return n&&n.length>0?(Ie(e!==void 0,14353),n.map((t=>(function(s,i){let a=s.updateTime?Rt(s.updateTime):Rt(i);return a.isEqual(ie.min())&&(a=Rt(i)),new p_(a,s.transformResults||[])})(t,e)))):[]}function L_(n,e){return{documents:[vh(n,e.path)]}}function D_(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=vh(n,s);const i=(function(h){if(h.length!==0)return bh(Ft.create(h,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const a=(function(h){if(h.length!==0)return h.map((f=>(function(y){return{field:gr(y.field),direction:O_(y.dir)}})(f)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=na(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{ft:t,parent:s}}function V_(n){let e=P_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Ie(r===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=(function(p){const y=wh(p);return y instanceof Ft&&Kd(y)?y.getFilters():[y]})(t.where));let a=[];t.orderBy&&(a=(function(p){return p.map((y=>(function(P){return new Ai(yr(P.field),(function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(P.direction))})(y)))})(t.orderBy));let l=null;t.limit&&(l=(function(p){let y;return y=typeof p=="object"?p.value:p,xs(y)?null:y})(t.limit));let u=null;t.startAt&&(u=(function(p){const y=!!p.before,C=p.values||[];return new Ti(C,y)})(t.startAt));let h=null;return t.endAt&&(h=(function(p){const y=!p.before,C=p.values||[];return new Ti(C,y)})(t.endAt)),n_(e,s,a,i,l,"F",u,h)}function M_(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return te(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function wh(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=yr(t.unaryFilter.field);return Ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=yr(t.unaryFilter.field);return Ke.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=yr(t.unaryFilter.field);return Ke.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=yr(t.unaryFilter.field);return Ke.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return te(61313);default:return te(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Ke.create(yr(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return te(58110);default:return te(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Ft.create(t.compositeFilter.filters.map((r=>wh(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return te(1026)}})(t.compositeFilter.op))})(n):te(30097,{filter:n})}function O_(n){return T_[n]}function F_(n){return A_[n]}function U_(n){return C_[n]}function gr(n){return{fieldPath:n.canonicalString()}}function yr(n){return ct.fromServerFormat(n.fieldPath)}function bh(n){return n instanceof Ke?(function(t){if(t.op==="=="){if(zl(t.value))return{unaryFilter:{field:gr(t.field),op:"IS_NAN"}};if(Hl(t.value))return{unaryFilter:{field:gr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(zl(t.value))return{unaryFilter:{field:gr(t.field),op:"IS_NOT_NAN"}};if(Hl(t.value))return{unaryFilter:{field:gr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:gr(t.field),op:F_(t.op),value:t.value}}})(n):n instanceof Ft?(function(t){const r=t.getFilters().map((s=>bh(s)));return r.length===1?r[0]:{compositeFilter:{op:U_(t.op),filters:r}}})(n):te(54877,{filter:n})}function B_(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Th(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,t,r,s,i=ie.min(),a=ie.min(),l=ut.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Cn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Cn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Cn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Cn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e){this.yt=e}}function q_(n){const e=V_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ta(e,e.limit,"L"):e}/**
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
 */class $_{constructor(){this.Cn=new H_}addToCollectionParentIndex(e,t){return this.Cn.add(t),L.resolve()}getCollectionParents(e,t){return L.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return L.resolve()}deleteFieldIndex(e,t){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,t){return L.resolve()}getDocumentsMatchingTarget(e,t){return L.resolve(null)}getIndexType(e,t){return L.resolve(0)}getFieldIndexes(e,t){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,t){return L.resolve(Dn.min())}getMinOffsetFromCollectionGroup(e,t){return L.resolve(Dn.min())}updateCollectionGroup(e,t,r){return L.resolve()}updateIndexEntries(e,t){return L.resolve()}}class H_{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Ze(Re.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ze(Re.comparator)).toArray()}}/**
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
 */const iu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ah=41943040;class bt{static withCacheSize(e){return new bt(e,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bt.DEFAULT_COLLECTION_PERCENTILE=10,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,bt.DEFAULT=new bt(Ah,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),bt.DISABLED=new bt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Nr(0)}static cr(){return new Nr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou="LruGarbageCollector",z_=1048576;function au([n,e],[t,r]){const s=ye(n,t);return s===0?ye(e,r):s}class G_{constructor(e){this.Ir=e,this.buffer=new Ze(au),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();au(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class W_{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){$(ou,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ur(t)?$(ou,"Ignoring IndexedDB error during garbage collection: ",t):await Fr(t)}await this.Vr(3e5)}))}}class K_{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return L.resolve(Hi.ce);const r=new G_(t);return this.mr.forEachTarget(e,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(e,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?($("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(iu)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?($("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),iu):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,s,i,a,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?($("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,l=Date.now(),this.removeTargets(e,r,t)))).next((p=>(i=p,u=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(h=Date.now(),mr()<=ge.DEBUG&&$("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function Q_(n,e){return new K_(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(){this.changes=new or((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,rt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?L.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class X_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&us(r.mutation,s,St.empty(),Ve.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,_e()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=_e()){const s=Xn();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((i=>{let a=rs();return i.forEach(((l,u)=>{a=a.insert(l,u.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const r=Xn();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,_e())))}populateOverlays(e,t,r){const s=[];return r.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((a,l)=>{t.set(a,l)}))}))}computeViews(e,t,r,s){let i=un();const a=ls(),l=(function(){return ls()})();return t.forEach(((u,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof qn)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),us(f.mutation,h,f.mutation.getFieldMask(),Ve.now())):a.set(h.key,St.empty())})),this.recalculateAndSaveOverlays(e,i).next((u=>(u.forEach(((h,f)=>a.set(h,f))),t.forEach(((h,f)=>l.set(h,new X_(f,a.get(h)??null)))),l)))}recalculateAndSaveOverlays(e,t){const r=ls();let s=new Fe(((a,l)=>a-l)),i=_e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const l of a)l.keys().forEach((u=>{const h=t.get(u);if(h===null)return;let f=r.get(u)||St.empty();f=l.applyToLocalView(h,f),r.set(u,f);const p=(s.get(l.batchId)||_e()).add(u);s=s.insert(l.batchId,p)}))})).next((()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,p=rh();f.forEach((y=>{if(!i.has(y)){const C=uh(t.get(y),r.get(y));C!==null&&p.set(y,C),i=i.add(y)}})),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return L.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(a){return Y.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Yd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):L.resolve(Xn());let l=gs,u=i;return a.next((h=>L.forEach(h,((f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next((y=>{u=u.insert(f,y)}))))).next((()=>this.populateOverlays(e,h,i))).next((()=>this.computeViews(e,u,h,_e()))).next((f=>({batchId:l,changes:nh(f)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Y(t)).next((r=>{let s=rs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=rs();return this.indexManager.getCollectionParents(e,i).next((l=>L.forEach(l,(u=>{const h=(function(p,y){return new ks(y,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next((f=>{f.forEach(((p,y)=>{a=a.insert(p,y)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s)))).next((a=>{i.forEach(((u,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,rt.newInvalidDocument(f)))}));let l=rs();return a.forEach(((u,h)=>{const f=i.get(u);f!==void 0&&us(f.mutation,h,St.empty(),Ve.now()),Ki(t,h)&&(l=l.insert(u,h))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return L.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:Rt(s.createTime)}})(t)),L.resolve()}getNamedQuery(e,t){return L.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(s){return{name:s.name,query:q_(s.bundledQuery),readTime:Rt(s.readTime)}})(t)),L.resolve()}}/**
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
 */class ev{constructor(){this.overlays=new Fe(Y.comparator),this.qr=new Map}getOverlay(e,t){return L.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Xn();return L.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,i)=>{this.St(e,t,i)})),L.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(r)),L.resolve()}getOverlaysForCollection(e,t,r){const s=Xn(),i=t.length+1,a=new Y(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return L.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Fe(((h,f)=>h-f));const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=Xn(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Xn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((h,f)=>l.set(h,f))),!(l.size()>=s)););return L.resolve(l)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new v_(t,r));let i=this.qr.get(t);i===void 0&&(i=_e(),this.qr.set(t,i)),this.qr.set(t,i.add(r.key))}}/**
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
 */class tv{constructor(){this.sessionToken=ut.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(){this.Qr=new Ze(nt.$r),this.Ur=new Ze(nt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new nt(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Gr(new nt(e,t))}zr(e,t){e.forEach((r=>this.removeReference(r,t)))}jr(e){const t=new Y(new Re([])),r=new nt(t,e),s=new nt(t,e+1),i=[];return this.Ur.forEachInRange([r,s],(a=>{this.Gr(a),i.push(a.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new Y(new Re([])),r=new nt(t,e),s=new nt(t,e+1);let i=_e();return this.Ur.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(e){const t=new nt(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class nt{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return Y.comparator(e.key,t.key)||ye(e.Yr,t.Yr)}static Kr(e,t){return ye(e.Yr,t.Yr)||Y.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Ze(nt.$r)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new __(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.Zr=this.Zr.add(new nt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(a)}lookupMutationBatch(e,t){return L.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ei(r),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?ka:this.tr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new nt(t,0),s=new nt(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],(a=>{const l=this.Xr(a.Yr);i.push(l)})),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ze(ye);return t.forEach((s=>{const i=new nt(s,0),a=new nt(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],(l=>{r=r.add(l.Yr)}))})),L.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;Y.isDocumentKey(i)||(i=i.child(""));const a=new nt(new Y(i),0);let l=new Ze(ye);return this.Zr.forEachWhile((u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(u.Yr)),!0)}),a),L.resolve(this.ti(l))}ti(e){const t=[];return e.forEach((r=>{const s=this.Xr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){Ie(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return L.forEach(t.mutations,(s=>{const i=new nt(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,t){const r=new nt(t,0),s=this.Zr.firstAfterOrEqual(r);return L.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e){this.ri=e,this.docs=(function(){return new Fe(Y.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return L.resolve(r?r.document.mutableCopy():rt.newInvalidDocument(t))}getEntries(e,t){let r=un();return t.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():rt.newInvalidDocument(s))})),L.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=un();const a=t.path,l=new Y(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||Dy(Ly(f),r)<=0||(s.has(f.key)||Ki(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(e,t,r,s){te(9500)}ii(e,t){return L.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new sv(this)}getSize(e){return L.resolve(this.size)}}class sv extends J_{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)})),L.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e){this.persistence=e,this.si=new or((t=>Da(t)),Va),this.lastRemoteSnapshotVersion=ie.min(),this.highestTargetId=0,this.oi=0,this._i=new Ba,this.targetCount=0,this.ai=Nr.ur()}forEachTarget(e,t){return this.si.forEach(((r,s)=>t(s))),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),L.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Nr(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,L.resolve()}updateTargetData(e,t){return this.Pr(t),L.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.si.forEach(((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)})),L.waitFor(i).next((()=>s))}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return L.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),L.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((a=>{i.push(s.markPotentiallyOrphaned(e,a))})),L.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),L.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return L.resolve(r)}containsKey(e,t){return L.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(e,t){this.ui={},this.overlays={},this.ci=new Hi(0),this.li=!1,this.li=!0,this.hi=new tv,this.referenceDelegate=e(this),this.Pi=new iv(this),this.indexManager=new $_,this.remoteDocumentCache=(function(s){return new rv(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new j_(t),this.Ii=new Z_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ev,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new nv(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){$("MemoryPersistence","Starting transaction:",e);const s=new ov(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(e,t){return L.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,t))))}}class ov extends My{constructor(e){super(),this.currentSequenceNumber=e}}class ja{constructor(e){this.persistence=e,this.Ri=new Ba,this.Vi=null}static mi(e){return new ja(e)}get fi(){if(this.Vi)return this.Vi;throw te(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),L.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),L.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>r.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.fi,(r=>{const s=Y.fromPath(r);return this.gi(e,s).next((i=>{i||t.removeEntry(s,ie.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return L.or([()=>L.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class xi{constructor(e,t){this.persistence=e,this.pi=new or((r=>Uy(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=Q_(this,t)}static mi(e,t){return new xi(e,t)}Ei(){}di(e){return L.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}wr(e){let t=0;return this.pr(e,(r=>{t++})).next((()=>t))}pr(e,t){return L.forEach(this.pi,((r,s)=>this.br(e,r,s).next((i=>i?L.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,(a=>this.br(e,a,t).next((l=>{l||(r++,i.removeEntry(a,ie.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),L.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),L.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ci(e.data.value)),t}br(e,t,r){return L.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.pi.get(t);return L.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=s}static As(e,t){let r=_e(),s=_e();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new qa(e,t.fromCache,r,s)}}/**
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
 */class av{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class cv{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return tm()?8:Oy(gt())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ys(e,t).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ws(e,t,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new av;return this.Ss(e,t,a).next((l=>{if(i.result=l,this.Vs)return this.bs(e,t,a,l.size)}))})).next((()=>i.result))}bs(e,t,r,s){return r.documentReadCount<this.fs?(mr()<=ge.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",pr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),L.resolve()):(mr()<=ge.DEBUG&&$("QueryEngine","Query:",pr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(mr()<=ge.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",pr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Kt(t))):L.resolve())}ys(e,t){if(Ql(t))return L.resolve(null);let r=Kt(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=ta(t,null,"F"),r=Kt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const a=_e(...i);return this.ps.getDocuments(e,a).next((l=>this.indexManager.getMinOffset(e,r).next((u=>{const h=this.Ds(t,l);return this.Cs(t,h,a,u.readTime)?this.ys(e,ta(t,null,"F")):this.vs(e,h,t,u)}))))})))))}ws(e,t,r,s){return Ql(t)||s.isEqual(ie.min())?L.resolve(null):this.ps.getDocuments(e,r).next((i=>{const a=this.Ds(t,i);return this.Cs(t,a,r,s)?L.resolve(null):(mr()<=ge.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),pr(t)),this.vs(e,a,t,Ny(s,gs)).next((l=>l)))}))}Ds(e,t){let r=new Ze(eh(e));return t.forEach(((s,i)=>{Ki(e,i)&&(r=r.add(i))})),r}Cs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,t,r){return mr()<=ge.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",pr(t)),this.ps.getDocumentsMatchingQuery(e,t,Dn.min(),r)}vs(e,t,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next((i=>(t.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a="LocalStore",lv=3e8;class uv{constructor(e,t,r,s){this.persistence=e,this.Fs=t,this.serializer=s,this.Ms=new Fe(ye),this.xs=new or((i=>Da(i)),Va),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Y_(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function dv(n,e,t,r){return new uv(n,e,t,r)}async function Sh(n,e){const t=ce(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,t.Bs(e),t.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],l=[];let u=_e();for(const h of s){a.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next((h=>({Ls:h,removedBatchIds:a,addedBatchIds:l})))}))}))}function hv(n,e){const t=ce(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(l,u,h,f){const p=h.batch,y=p.keys();let C=L.resolve();return y.forEach((P=>{C=C.next((()=>f.getEntry(u,P))).next((V=>{const N=h.docVersions.get(P);Ie(N!==null,48541),V.version.compareTo(N)<0&&(p.applyToRemoteDocument(V,h),V.isValidDocument()&&(V.setReadTime(h.commitVersion),f.addEntry(V)))}))})),C.next((()=>l.mutationQueue.removeMutationBatch(u,p)))})(t,r,e,i).next((()=>i.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let u=_e();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function Rh(n){const e=ce(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function fv(n,e){const t=ce(n),r=e.snapshotVersion;let s=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=t.Ns.newChangeBuffer({trackRemovals:!0});s=t.Ms;const l=[];e.targetChanges.forEach(((f,p)=>{const y=s.get(p);if(!y)return;l.push(t.Pi.removeMatchingKeys(i,f.removedDocuments,p).next((()=>t.Pi.addMatchingKeys(i,f.addedDocuments,p))));let C=y.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?C=C.withResumeToken(ut.EMPTY_BYTE_STRING,ie.min()).withLastLimboFreeSnapshotVersion(ie.min()):f.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(f.resumeToken,r)),s=s.insert(p,C),(function(V,N,H){return V.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=lv?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0})(y,C,f)&&l.push(t.Pi.updateTargetData(i,C))}));let u=un(),h=_e();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))})),l.push(mv(i,a,e.documentUpdates).next((f=>{u=f.ks,h=f.qs}))),!r.isEqual(ie.min())){const f=t.Pi.getLastRemoteSnapshotVersion(i).next((p=>t.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r)));l.push(f)}return L.waitFor(l).next((()=>a.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,u,h))).next((()=>u))})).then((i=>(t.Ms=s,i)))}function mv(n,e,t){let r=_e(),s=_e();return t.forEach((i=>r=r.add(i))),e.getEntries(n,r).next((i=>{let a=un();return t.forEach(((l,u)=>{const h=i.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(ie.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):$($a,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)})),{ks:a,qs:s}}))}function pv(n,e){const t=ce(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=ka),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function gv(n,e){const t=ce(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.Pi.getTargetData(r,e).next((i=>i?(s=i,L.resolve(s)):t.Pi.allocateTargetId(r).next((a=>(s=new Cn(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r}))}async function ia(n,e,t){const r=ce(n),s=r.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!Ur(a))throw a;$($a,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function cu(n,e,t){const r=ce(n);let s=ie.min(),i=_e();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(u,h,f){const p=ce(u),y=p.xs.get(f);return y!==void 0?L.resolve(p.Ms.get(y)):p.Pi.getTargetData(h,f)})(r,a,Kt(e)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,l.targetId).next((u=>{i=u}))})).next((()=>r.Fs.getDocumentsMatchingQuery(a,e,t?s:ie.min(),t?i:_e()))).next((l=>(yv(r,s_(e),l),{documents:l,Qs:i})))))}function yv(n,e,t){let r=n.Os.get(e)||ie.min();t.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),n.Os.set(e,r)}class lu{constructor(){this.activeTargetIds=u_()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class _v{constructor(){this.Mo=new lu,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new lu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class vv{Oo(e){}shutdown(){}}/**
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
 */const uu="ConnectivityMonitor";class du{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){$(uu,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){$(uu,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ti=null;function oa(){return ti===null?ti=(function(){return 268435456+Math.round(2147483648*Math.random())})():ti++,"0x"+ti.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko="RestConnection",Ev={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Iv{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===wi?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,t,r,s,i){const a=oa(),l=this.zo(e,t.toUriEncodedString());$(ko,`Sending RPC '${e}' ${a}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:h}=new URL(l),f=Dr(h);return this.Jo(e,l,u,r,f).then((p=>($(ko,`Received RPC '${e}' ${a}: `,p),p)),(p=>{throw Cr(ko,`RPC '${e}' ${a} failed with error: `,p,"url: ",l,"request:",r),p}))}Ho(e,t,r,s,i,a){return this.Go(e,t,r,s,i)}jo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Or})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}zo(e,t){const r=Ev[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht="WebChannelConnection";class bv extends Iv{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,s,i){const a=oa();return new Promise(((l,u)=>{const h=new Sd;h.setWithCredentials(!0),h.listenOnce(Rd.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case ai.NO_ERROR:const p=h.getResponseJson();$(ht,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),l(p);break;case ai.TIMEOUT:$(ht,`RPC '${e}' ${a} timed out`),u(new U(k.DEADLINE_EXCEEDED,"Request time out"));break;case ai.HTTP_ERROR:const y=h.getStatus();if($(ht,`RPC '${e}' ${a} failed with status:`,y,"response text:",h.getResponseText()),y>0){let C=h.getResponseJson();Array.isArray(C)&&(C=C[0]);const P=C?.error;if(P&&P.status&&P.message){const V=(function(H){const re=H.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(re)>=0?re:k.UNKNOWN})(P.status);u(new U(V,P.message))}else u(new U(k.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new U(k.UNAVAILABLE,"Connection failed."));break;default:te(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{$(ht,`RPC '${e}' ${a} completed.`)}}));const f=JSON.stringify(s);$(ht,`RPC '${e}' ${a} sending request:`,s),h.send(t,"POST",f,r,15)}))}T_(e,t,r){const s=oa(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=kd(),l=xd(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const f=i.join("");$(ht,`Creating RPC '${e}' stream ${s}: ${f}`,u);const p=a.createWebChannel(f,u);this.I_(p);let y=!1,C=!1;const P=new wv({Yo:N=>{C?$(ht,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(y||($(ht,`Opening RPC '${e}' stream ${s} transport.`),p.open(),y=!0),$(ht,`RPC '${e}' stream ${s} sending:`,N),p.send(N))},Zo:()=>p.close()}),V=(N,H,re)=>{N.listen(H,(q=>{try{re(q)}catch(ne){setTimeout((()=>{throw ne}),0)}}))};return V(p,ns.EventType.OPEN,(()=>{C||($(ht,`RPC '${e}' stream ${s} transport opened.`),P.o_())})),V(p,ns.EventType.CLOSE,(()=>{C||(C=!0,$(ht,`RPC '${e}' stream ${s} transport closed`),P.a_(),this.E_(p))})),V(p,ns.EventType.ERROR,(N=>{C||(C=!0,Cr(ht,`RPC '${e}' stream ${s} transport errored. Name:`,N.name,"Message:",N.message),P.a_(new U(k.UNAVAILABLE,"The operation could not be completed")))})),V(p,ns.EventType.MESSAGE,(N=>{if(!C){const H=N.data[0];Ie(!!H,16349);const re=H,q=re?.error||re[0]?.error;if(q){$(ht,`RPC '${e}' stream ${s} received error:`,q);const ne=q.status;let Q=(function(g){const _=We[g];if(_!==void 0)return mh(_)})(ne),Z=q.message;Q===void 0&&(Q=k.INTERNAL,Z="Unknown error status: "+ne+" with message "+q.message),C=!0,P.a_(new U(Q,Z)),p.close()}else $(ht,`RPC '${e}' stream ${s} received:`,H),P.u_(H)}})),V(l,Pd.STAT_EVENT,(N=>{N.stat===Ko.PROXY?$(ht,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===Ko.NOPROXY&&$(ht,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{P.__()}),0),P}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function No(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(n){return new S_(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&$("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu="PersistentStream";class Ph{constructor(e,t,r,s,i,a,l,u){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Ha(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===k.RESOURCE_EXHAUSTED?(ln(t.toString()),ln("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===t&&this.G_(r,s)}),(r=>{e((()=>{const s=new U(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return $(hu,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():($(hu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Tv extends Ph{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=k_(this.serializer,e),r=(function(i){if(!("targetChange"in i))return ie.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?ie.min():a.readTime?Rt(a.readTime):ie.min()})(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=sa(this.serializer),t.addTarget=(function(i,a){let l;const u=a.target;if(l=Zo(u)?{documents:L_(i,u)}:{query:D_(i,u).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=yh(i,a.resumeToken);const h=na(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(ie.min())>0){l.readTime=Ri(i,a.snapshotVersion.toTimestamp());const h=na(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l})(this.serializer,e);const r=M_(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=sa(this.serializer),t.removeTarget=e,this.q_(t)}}class Av extends Ph{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Ie(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ie(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ie(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=N_(e.writeResults,e.commitTime),r=Rt(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=sa(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>Ih(this.serializer,r)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{}class Sv extends Cv{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new U(k.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Go(e,ra(t,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(k.UNKNOWN,i.toString())}))}Ho(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.Ho(e,ra(t,r),s,a,l,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new U(k.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class Rv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ln(t),this.aa=!1):$("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir="RemoteStore";class Pv{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((a=>{r.enqueueAndForget((async()=>{ar(this)&&($(ir,"Restarting streams for network reachability change."),await(async function(u){const h=ce(u);h.Ea.add(4),await Vs(h),h.Ra.set("Unknown"),h.Ea.delete(4),await Zi(h)})(this))}))})),this.Ra=new Rv(r,s)}}async function Zi(n){if(ar(n))for(const e of n.da)await e(!0)}async function Vs(n){for(const e of n.da)await e(!1)}function xh(n,e){const t=ce(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Ka(t)?Wa(t):Br(t).O_()&&Ga(t,e))}function za(n,e){const t=ce(n),r=Br(t);t.Ia.delete(e),r.O_()&&kh(t,e),t.Ia.size===0&&(r.O_()?r.L_():ar(t)&&t.Ra.set("Unknown"))}function Ga(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ie.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Br(n).Y_(e)}function kh(n,e){n.Va.Ue(e),Br(n).Z_(e)}function Wa(n){n.Va=new b_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Br(n).start(),n.Ra.ua()}function Ka(n){return ar(n)&&!Br(n).x_()&&n.Ia.size>0}function ar(n){return ce(n).Ea.size===0}function Nh(n){n.Va=void 0}async function xv(n){n.Ra.set("Online")}async function kv(n){n.Ia.forEach(((e,t)=>{Ga(n,e)}))}async function Nv(n,e){Nh(n),Ka(n)?(n.Ra.ha(e),Wa(n)):n.Ra.set("Unknown")}async function Lv(n,e,t){if(n.Ra.set("Online"),e instanceof gh&&e.state===2&&e.cause)try{await(async function(s,i){const a=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ia.delete(l),s.Va.removeTarget(l))})(n,e)}catch(r){$(ir,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ki(n,r)}else if(e instanceof di?n.Va.Ze(e):e instanceof ph?n.Va.st(e):n.Va.tt(e),!t.isEqual(ie.min()))try{const r=await Rh(n.localStore);t.compareTo(r)>=0&&await(function(i,a){const l=i.Va.Tt(a);return l.targetChanges.forEach(((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ia.get(h);f&&i.Ia.set(h,f.withResumeToken(u.resumeToken,a))}})),l.targetMismatches.forEach(((u,h)=>{const f=i.Ia.get(u);if(!f)return;i.Ia.set(u,f.withResumeToken(ut.EMPTY_BYTE_STRING,f.snapshotVersion)),kh(i,u);const p=new Cn(f.target,u,h,f.sequenceNumber);Ga(i,p)})),i.remoteSyncer.applyRemoteEvent(l)})(n,t)}catch(r){$(ir,"Failed to raise snapshot:",r),await ki(n,r)}}async function ki(n,e,t){if(!Ur(e))throw e;n.Ea.add(1),await Vs(n),n.Ra.set("Offline"),t||(t=()=>Rh(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{$(ir,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Zi(n)}))}function Lh(n,e){return e().catch((t=>ki(n,t,e)))}async function eo(n){const e=ce(n),t=Fn(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:ka;for(;Dv(e);)try{const s=await pv(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,Vv(e,s)}catch(s){await ki(e,s)}Dh(e)&&Vh(e)}function Dv(n){return ar(n)&&n.Ta.length<10}function Vv(n,e){n.Ta.push(e);const t=Fn(n);t.O_()&&t.X_&&t.ea(e.mutations)}function Dh(n){return ar(n)&&!Fn(n).x_()&&n.Ta.length>0}function Vh(n){Fn(n).start()}async function Mv(n){Fn(n).ra()}async function Ov(n){const e=Fn(n);for(const t of n.Ta)e.ea(t.mutations)}async function Fv(n,e,t){const r=n.Ta.shift(),s=Oa.from(r,e,t);await Lh(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await eo(n)}async function Uv(n,e){e&&Fn(n).X_&&await(async function(r,s){if((function(a){return fh(a)&&a!==k.ABORTED})(s.code)){const i=r.Ta.shift();Fn(r).B_(),await Lh(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await eo(r)}})(n,e),Dh(n)&&Vh(n)}async function fu(n,e){const t=ce(n);t.asyncQueue.verifyOperationInProgress(),$(ir,"RemoteStore received new credentials");const r=ar(t);t.Ea.add(3),await Vs(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Zi(t)}async function Bv(n,e){const t=ce(n);e?(t.Ea.delete(2),await Zi(t)):e||(t.Ea.add(2),await Vs(t),t.Ra.set("Unknown"))}function Br(n){return n.ma||(n.ma=(function(t,r,s){const i=ce(t);return i.sa(),new Tv(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Xo:xv.bind(null,n),t_:kv.bind(null,n),r_:Nv.bind(null,n),H_:Lv.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),Ka(n)?Wa(n):n.Ra.set("Unknown")):(await n.ma.stop(),Nh(n))}))),n.ma}function Fn(n){return n.fa||(n.fa=(function(t,r,s){const i=ce(t);return i.sa(),new Av(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:Mv.bind(null,n),r_:Uv.bind(null,n),ta:Ov.bind(null,n),na:Fv.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await eo(n)):(await n.fa.stop(),n.Ta.length>0&&($(ir,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Wt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new Qa(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ja(n,e){if(ln("AsyncQueue",`${e}: ${n}`),Ur(n))return new U(k.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{static emptySet(e){return new br(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||Y.comparator(t.key,r.key):(t,r)=>Y.comparator(t.key,r.key),this.keyedMap=rs(),this.sortedSet=new Fe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof br)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new br;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(){this.ga=new Fe(Y.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):te(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,r)=>{e.push(r)})),e}}class Lr{constructor(e,t,r,s,i,a,l,u,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach((l=>{a.push({type:0,doc:l})})),new Lr(e,t,br.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Wi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class qv{constructor(){this.queries=pu(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=ce(t),i=s.queries;s.queries=pu(),i.forEach(((a,l)=>{for(const u of l.Sa)u.onError(r)}))})(this,new U(k.ABORTED,"Firestore shutting down"))}}function pu(){return new or((n=>Zd(n)),Wi)}async function Xa(n,e){const t=ce(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new jv,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=Ja(a,`Initialization of query '${pr(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&Za(t)}async function Ya(n,e){const t=ce(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function $v(n,e){const t=ce(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.Sa)l.Fa(s)&&(r=!0);a.wa=s}}r&&Za(t)}function Hv(n,e,t){const r=ce(n),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(t);r.queries.delete(e)}function Za(n){n.Ca.forEach((e=>{e.next()}))}var aa,gu;(gu=aa||(aa={})).Ma="default",gu.Cache="cache";class ec{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Lr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Lr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==aa.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e){this.key=e}}class Oh{constructor(e){this.key=e}}class zv{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=_e(),this.mutatedKeys=_e(),this.eu=eh(e),this.tu=new br(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new mu,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const y=s.get(f),C=Ki(this.query,p)?p:null,P=!!y&&this.mutatedKeys.has(y.key),V=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let N=!1;y&&C?y.data.isEqual(C.data)?P!==V&&(r.track({type:3,doc:C}),N=!0):this.su(y,C)||(r.track({type:2,doc:C}),N=!0,(u&&this.eu(C,u)>0||h&&this.eu(C,h)<0)&&(l=!0)):!y&&C?(r.track({type:0,doc:C}),N=!0):y&&!C&&(r.track({type:1,doc:y}),N=!0,(u||h)&&(l=!0)),N&&(C?(a=a.add(C),i=V?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:a,iu:r,Cs:l,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort(((f,p)=>(function(C,P){const V=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return te(20277,{Rt:N})}};return V(C)-V(P)})(f.type,p.type)||this.eu(f.doc,p.doc))),this.ou(r),s=s??!1;const l=t&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,h=u!==this.Za;return this.Za=u,a.length!==0||h?{snapshot:new Lr(this.query,e.tu,i,a,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new mu,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=_e(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const t=[];return e.forEach((r=>{this.Xa.has(r)||t.push(new Oh(r))})),this.Xa.forEach((r=>{e.has(r)||t.push(new Mh(r))})),t}cu(e){this.Ya=e.Qs,this.Xa=_e();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Lr.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const tc="SyncEngine";class Gv{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Wv{constructor(e){this.key=e,this.hu=!1}}class Kv{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new or((l=>Zd(l)),Wi),this.Iu=new Map,this.Eu=new Set,this.du=new Fe(Y.comparator),this.Au=new Map,this.Ru=new Ba,this.Vu={},this.mu=new Map,this.fu=Nr.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Qv(n,e,t=!0){const r=$h(n);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Fh(r,e,t,!0),s}async function Jv(n,e){const t=$h(n);await Fh(t,e,!0,!1)}async function Fh(n,e,t,r){const s=await gv(n.localStore,Kt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await Xv(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&xh(n.remoteStore,s),l}async function Xv(n,e,t,r,s){n.pu=(p,y,C)=>(async function(V,N,H,re){let q=N.view.ru(H);q.Cs&&(q=await cu(V.localStore,N.query,!1).then((({documents:I})=>N.view.ru(I,q))));const ne=re&&re.targetChanges.get(N.targetId),Q=re&&re.targetMismatches.get(N.targetId)!=null,Z=N.view.applyChanges(q,V.isPrimaryClient,ne,Q);return _u(V,N.targetId,Z.au),Z.snapshot})(n,p,y,C);const i=await cu(n.localStore,e,!0),a=new zv(e,i.Qs),l=a.ru(i.documents),u=Ds.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(l,n.isPrimaryClient,u);_u(n,t,h.au);const f=new Gv(e,t,a);return n.Tu.set(e,f),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),h.snapshot}async function Yv(n,e,t){const r=ce(n),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((a=>!Wi(a,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ia(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&za(r.remoteStore,s.targetId),ca(r,s.targetId)})).catch(Fr)):(ca(r,s.targetId),await ia(r.localStore,s.targetId,!0))}async function Zv(n,e){const t=ce(n),r=t.Tu.get(e),s=t.Iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),za(t.remoteStore,r.targetId))}async function eE(n,e,t){const r=aE(n);try{const s=await(function(a,l){const u=ce(a),h=Ve.now(),f=l.reduce(((C,P)=>C.add(P.key)),_e());let p,y;return u.persistence.runTransaction("Locally write mutations","readwrite",(C=>{let P=un(),V=_e();return u.Ns.getEntries(C,f).next((N=>{P=N,P.forEach(((H,re)=>{re.isValidDocument()||(V=V.add(H))}))})).next((()=>u.localDocuments.getOverlayedDocuments(C,P))).next((N=>{p=N;const H=[];for(const re of l){const q=y_(re,p.get(re.key).overlayedDocument);q!=null&&H.push(new qn(re.key,q,zd(q.value.mapValue),Qe.exists(!0)))}return u.mutationQueue.addMutationBatch(C,h,H,l)})).next((N=>{y=N;const H=N.applyToLocalDocumentSet(p,V);return u.documentOverlayCache.saveOverlays(C,N.batchId,H)}))})).then((()=>({batchId:y.batchId,changes:nh(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(a,l,u){let h=a.Vu[a.currentUser.toKey()];h||(h=new Fe(ye)),h=h.insert(l,u),a.Vu[a.currentUser.toKey()]=h})(r,s.batchId,t),await Ms(r,s.changes),await eo(r.remoteStore)}catch(s){const i=Ja(s,"Failed to persist write");t.reject(i)}}async function Uh(n,e){const t=ce(n);try{const r=await fv(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const a=t.Au.get(i);a&&(Ie(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?Ie(a.hu,14607):s.removedDocuments.size>0&&(Ie(a.hu,42227),a.hu=!1))})),await Ms(t,r,e)}catch(r){await Fr(r)}}function yu(n,e,t){const r=ce(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach(((i,a)=>{const l=a.view.va(e);l.snapshot&&s.push(l.snapshot)})),(function(a,l){const u=ce(a);u.onlineState=l;let h=!1;u.queries.forEach(((f,p)=>{for(const y of p.Sa)y.va(l)&&(h=!0)})),h&&Za(u)})(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function tE(n,e,t){const r=ce(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),i=s&&s.key;if(i){let a=new Fe(Y.comparator);a=a.insert(i,rt.newNoDocument(i,ie.min()));const l=_e().add(i),u=new Xi(ie.min(),new Map,new Fe(ye),a,l);await Uh(r,u),r.du=r.du.remove(i),r.Au.delete(e),nc(r)}else await ia(r.localStore,e,!1).then((()=>ca(r,e,t))).catch(Fr)}async function nE(n,e){const t=ce(n),r=e.batch.batchId;try{const s=await hv(t.localStore,e);jh(t,r,null),Bh(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Ms(t,s)}catch(s){await Fr(s)}}async function rE(n,e,t){const r=ce(n);try{const s=await(function(a,l){const u=ce(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next((p=>(Ie(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(h,p)))).next((()=>u.mutationQueue.performConsistencyCheck(h))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f))).next((()=>u.localDocuments.getDocuments(h,f)))}))})(r.localStore,e);jh(r,e,t),Bh(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Ms(r,s)}catch(s){await Fr(s)}}function Bh(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function jh(n,e,t){const r=ce(n);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function ca(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((r=>{n.Ru.containsKey(r)||qh(n,r)}))}function qh(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(za(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),nc(n))}function _u(n,e,t){for(const r of t)r instanceof Mh?(n.Ru.addReference(r.key,e),sE(n,r)):r instanceof Oh?($(tc,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||qh(n,r.key)):te(19791,{wu:r})}function sE(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||($(tc,"New document in limbo: "+t),n.Eu.add(r),nc(n))}function nc(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new Y(Re.fromString(e)),r=n.fu.next();n.Au.set(r,new Wv(t)),n.du=n.du.insert(t,r),xh(n.remoteStore,new Cn(Kt(Gi(t.path)),r,"TargetPurposeLimboResolution",Hi.ce))}}async function Ms(n,e,t){const r=ce(n),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach(((l,u)=>{a.push(r.pu(u,e,t).then((h=>{if((h||t)&&r.isPrimaryClient){const f=h?!h.fromCache:t?.targetChanges.get(u.targetId)?.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(h){s.push(h);const f=qa.As(u.targetId,h);i.push(f)}})))})),await Promise.all(a),r.Pu.H_(s),await(async function(u,h){const f=ce(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>L.forEach(h,(y=>L.forEach(y.Es,(C=>f.persistence.referenceDelegate.addReference(p,y.targetId,C))).next((()=>L.forEach(y.ds,(C=>f.persistence.referenceDelegate.removeReference(p,y.targetId,C)))))))))}catch(p){if(!Ur(p))throw p;$($a,"Failed to update sequence numbers: "+p)}for(const p of h){const y=p.targetId;if(!p.fromCache){const C=f.Ms.get(y),P=C.snapshotVersion,V=C.withLastLimboFreeSnapshotVersion(P);f.Ms=f.Ms.insert(y,V)}}})(r.localStore,i))}async function iE(n,e){const t=ce(n);if(!t.currentUser.isEqual(e)){$(tc,"User change. New user:",e.toKey());const r=await Sh(t.localStore,e);t.currentUser=e,(function(i,a){i.mu.forEach((l=>{l.forEach((u=>{u.reject(new U(k.CANCELLED,a))}))})),i.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ms(t,r.Ls)}}function oE(n,e){const t=ce(n),r=t.Au.get(e);if(r&&r.hu)return _e().add(r.key);{let s=_e();const i=t.Iu.get(e);if(!i)return s;for(const a of i){const l=t.Tu.get(a);s=s.unionWith(l.view.nu)}return s}}function $h(n){const e=ce(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Uh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=oE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=tE.bind(null,e),e.Pu.H_=$v.bind(null,e.eventManager),e.Pu.yu=Hv.bind(null,e.eventManager),e}function aE(n){const e=ce(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=nE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=rE.bind(null,e),e}class Ni{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Yi(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return dv(this.persistence,new cv,e.initialUser,this.serializer)}Cu(e){return new Ch(ja.mi,this.serializer)}Du(e){return new _v}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ni.provider={build:()=>new Ni};class cE extends Ni{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Ie(this.persistence.referenceDelegate instanceof xi,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new W_(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?bt.withCacheSize(this.cacheSizeBytes):bt.DEFAULT;return new Ch((r=>xi.mi(r,t)),this.serializer)}}class la{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>yu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=iE.bind(null,this.syncEngine),await Bv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new qv})()}createDatastore(e){const t=Yi(e.databaseInfo.databaseId),r=(function(i){return new bv(i)})(e.databaseInfo);return(function(i,a,l,u){return new Sv(i,a,l,u)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,i,a,l){return new Pv(r,s,i,a,l)})(this.localStore,this.datastore,e.asyncQueue,(t=>yu(this.syncEngine,t,0)),(function(){return du.v()?new du:new vv})())}createSyncEngine(e,t){return(function(s,i,a,l,u,h,f){const p=new Kv(s,i,a,l,u,h);return f&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const r=ce(t);$(ir,"RemoteStore shutting down."),r.Ea.add(5),await Vs(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}la.provider={build:()=>new la};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class rc{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):ln("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new U(k.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await(async function(s,i){const a=ce(s),l={documents:i.map((p=>Pi(a.serializer,p)))},u=await a.Ho("BatchGetDocuments",a.serializer.databaseId,Re.emptyPath(),l,i.length),h=new Map;u.forEach((p=>{const y=x_(a.serializer,p);h.set(y.key.toString(),y)}));const f=[];return i.forEach((p=>{const y=h.get(p.toString());Ie(!!y,55234,{key:p}),f.push(y)})),f})(this.datastore,e);return t.forEach((r=>this.recordVersion(r))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ls(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((t,r)=>{const s=Y.fromPath(r);this.mutations.push(new hh(s,this.precondition(s)))})),await(async function(r,s){const i=ce(r),a={writes:s.map((l=>Ih(i.serializer,l)))};await i.Go("Commit",i.serializer.databaseId,Re.emptyPath(),a)})(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw te(50498,{Gu:e.constructor.name});t=ie.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new U(k.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(ie.min())?Qe.exists(!1):Qe.updateTime(t):Qe.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(ie.min()))throw new U(k.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Qe.updateTime(t)}return Qe.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class uE{constructor(e,t,r,s,i){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=s,this.deferred=i,this.zu=r.maxAttempts,this.M_=new Ha(this.asyncQueue,"transaction_retry")}ju(){this.zu-=1,this.Ju()}Ju(){this.M_.p_((async()=>{const e=new lE(this.datastore),t=this.Hu(e);t&&t.then((r=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(r)})).catch((s=>{this.Yu(s)}))))})).catch((r=>{this.Yu(r)}))}))}Hu(e){try{const t=this.updateFunction(e);return!xs(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Yu(e){this.zu>0&&this.Zu(e)?(this.zu-=1,this.asyncQueue.enqueueAndForget((()=>(this.Ju(),Promise.resolve())))):this.deferred.reject(e)}Zu(e){if(e?.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!fh(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un="FirestoreClient";class dE{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=ft.UNAUTHENTICATED,this.clientId=xa.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{$(Un,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>($(Un,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Wt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Ja(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Lo(n,e){n.asyncQueue.verifyOperationInProgress(),$(Un,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Sh(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function vu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await hE(n);$(Un,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>fu(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>fu(e.remoteStore,s))),n._onlineComponents=e}async function hE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){$(Un,"Using user provided OfflineComponentProvider");try{await Lo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===k.FAILED_PRECONDITION||s.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;Cr("Error using user provided cache. Falling back to memory cache: "+t),await Lo(n,new Ni)}}else $(Un,"Using default OfflineComponentProvider"),await Lo(n,new cE(void 0));return n._offlineComponents}async function sc(n){return n._onlineComponents||(n._uninitializedComponentsProvider?($(Un,"Using user provided OnlineComponentProvider"),await vu(n,n._uninitializedComponentsProvider._online)):($(Un,"Using default OnlineComponentProvider"),await vu(n,new la))),n._onlineComponents}function fE(n){return sc(n).then((e=>e.syncEngine))}function mE(n){return sc(n).then((e=>e.datastore))}async function Li(n){const e=await sc(n),t=e.eventManager;return t.onListen=Qv.bind(null,e.syncEngine),t.onUnlisten=Yv.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Jv.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Zv.bind(null,e.syncEngine),t}function pE(n,e,t={}){const r=new Wt;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,l,u,h){const f=new rc({next:y=>{f.Nu(),a.enqueueAndForget((()=>Ya(i,p)));const C=y.docs.has(l);!C&&y.fromCache?h.reject(new U(k.UNAVAILABLE,"Failed to get document because the client is offline.")):C&&y.fromCache&&u&&u.source==="server"?h.reject(new U(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(y)},error:y=>h.reject(y)}),p=new ec(Gi(l.path),f,{includeMetadataChanges:!0,qa:!0});return Xa(i,p)})(await Li(n),n.asyncQueue,e,t,r))),r.promise}function gE(n,e,t={}){const r=new Wt;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,l,u,h){const f=new rc({next:y=>{f.Nu(),a.enqueueAndForget((()=>Ya(i,p))),y.fromCache&&u.source==="server"?h.reject(new U(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(y)},error:y=>h.reject(y)}),p=new ec(l,f,{includeMetadataChanges:!0,qa:!0});return Xa(i,p)})(await Li(n),n.asyncQueue,e,t,r))),r.promise}/**
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
 */function Hh(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh="firestore.googleapis.com",Iu=!0;class wu{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new U(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=zh,this.ssl=Iu}else this.host=e.host,this.ssl=e.ssl??Iu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Ah;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<z_)throw new U(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ky("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Hh(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new U(k.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new U(k.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new U(k.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class to{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new U(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new U(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Iy;switch(r.type){case"firstParty":return new Ay(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new U(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Eu.get(t);r&&($("ComponentProvider","Removing Datastore"),Eu.delete(t),r.terminate())})(this),Promise.resolve()}}function yE(n,e,t,r={}){n=pt(n,to);const s=Dr(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;s&&(ju(`https://${l}`),qu("Firestore",!0)),i.host!==zh&&i.host!==l&&Cr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!sn(u,a)&&(n._setSettings(u),r.mockUserToken)){let h,f;if(typeof r.mockUserToken=="string")h=r.mockUserToken,f=ft.MOCK_USER;else{h=Gf(r.mockUserToken,n._app?.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new U(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new ft(p)}n._authCredentials=new wy(new Ld(h,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new cr(this.firestore,e,this._query)}}class Oe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Nn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Oe(this.firestore,e,this._key)}toJSON(){return{type:Oe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Ps(t,Oe._jsonSchema))return new Oe(e,r||null,new Y(Re.fromString(t.referencePath)))}}Oe._jsonSchemaVersion="firestore/documentReference/1.0",Oe._jsonSchema={type:Je("string",Oe._jsonSchemaVersion),referencePath:Je("string")};class Nn extends cr{constructor(e,t,r){super(e,t,Gi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Oe(this.firestore,null,new Y(e))}withConverter(e){return new Nn(this.firestore,e,this._path)}}function be(n,e,...t){if(n=$e(n),Dd("collection","path",e),n instanceof to){const r=Re.fromString(e,...t);return Vl(r),new Nn(n,null,r)}{if(!(n instanceof Oe||n instanceof Nn))throw new U(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Re.fromString(e,...t));return Vl(r),new Nn(n.firestore,null,r)}}function ve(n,e,...t){if(n=$e(n),arguments.length===1&&(e=xa.newId()),Dd("doc","path",e),n instanceof to){const r=Re.fromString(e,...t);return Dl(r),new Oe(n,null,new Y(r))}{if(!(n instanceof Oe||n instanceof Nn))throw new U(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Re.fromString(e,...t));return Dl(r),new Oe(n.firestore,n instanceof Nn?n.converter:null,new Y(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu="AsyncQueue";class Tu{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Ha(this,"async_queue_retry"),this._c=()=>{const r=No();r&&$(bu,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=No();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=No();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Wt;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ur(e))throw e;$(bu,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,ln("INTERNAL UNHANDLED ERROR: ",Au(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=Qa.createAndSchedule(this,e,t,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&te(47125,{Pc:Au(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Au(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function Cu(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(n,["next","error","complete"])}class Ut extends to{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Tu,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Tu(e),this._firestoreClient=void 0,await e}}}function Gh(n,e){const t=typeof n=="object"?n:Gu(),r=typeof n=="string"?n:wi,s=va(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Hf("firestore");i&&yE(s,...i)}return s}function jr(n){if(n._terminated)throw new U(k.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||_E(n),n._firestoreClient}function _E(n){const e=n._freezeSettings(),t=(function(s,i,a,l){return new qy(s,i,a,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Hh(l.experimentalLongPollingOptions),l.useFetchStreams,l.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new dE(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ct(ut.fromBase64String(e))}catch(t){throw new U(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ct(ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ct._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ps(e,Ct._jsonSchema))return Ct.fromBase64String(e.bytes)}}Ct._jsonSchemaVersion="firestore/bytes/1.0",Ct._jsonSchema={type:Je("string",Ct._jsonSchemaVersion),bytes:Je("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new U(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new U(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new U(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Qt._jsonSchemaVersion}}static fromJSON(e){if(Ps(e,Qt._jsonSchema))return new Qt(e.latitude,e.longitude)}}Qt._jsonSchemaVersion="firestore/geoPoint/1.0",Qt._jsonSchema={type:Je("string",Qt._jsonSchemaVersion),latitude:Je("number"),longitude:Je("number")};/**
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
 */class Jt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Jt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ps(e,Jt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Jt(e.vectorValues);throw new U(k.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Jt._jsonSchemaVersion="firestore/vectorValue/1.0",Jt._jsonSchema={type:Je("string",Jt._jsonSchemaVersion),vectorValues:Je("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE=/^__.*__$/;class EE{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new qn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ns(e,this.data,t,this.fieldTransforms)}}class Wh{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new qn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Kh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te(40011,{Ac:n})}}class no{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new no({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Di(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Kh(this.Ac)&&vE.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class IE{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Yi(e)}Cc(e,t,r,s=!1){return new no({Ac:e,methodName:t,Dc:r,path:ct.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $r(n){const e=n._freezeSettings(),t=Yi(n._databaseId);return new IE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function ro(n,e,t,r,s,i={}){const a=n.Cc(i.merge||i.mergeFields?2:0,e,t,s);lc("Data must be an object, but it was:",a,r);const l=Jh(r,a);let u,h;if(i.merge)u=new St(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const y=ua(e,p,t);if(!a.contains(y))throw new U(k.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);Yh(f,y)||f.push(y)}u=new St(f),h=a.fieldTransforms.filter((p=>u.covers(p.field)))}else u=null,h=a.fieldTransforms;return new EE(new Et(l),u,h)}class so extends Os{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof so}}function Qh(n,e,t){return new no({Ac:3,Dc:e.settings.Dc,methodName:n._methodName,fc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class ic extends Os{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=Qh(this,e,!0),r=this.vc.map((i=>lr(i,t))),s=new xr(r);return new lh(e.path,s)}isEqual(e){return e instanceof ic&&sn(this.vc,e.vc)}}class oc extends Os{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=Qh(this,e,!0),r=this.vc.map((i=>lr(i,t))),s=new kr(r);return new lh(e.path,s)}isEqual(e){return e instanceof oc&&sn(this.vc,e.vc)}}function ac(n,e,t,r){const s=n.Cc(1,e,t);lc("Data must be an object, but it was:",s,r);const i=[],a=Et.empty();jn(r,((u,h)=>{const f=uc(e,u,t);h=$e(h);const p=s.yc(f);if(h instanceof so)i.push(f);else{const y=lr(h,p);y!=null&&(i.push(f),a.set(f,y))}}));const l=new St(i);return new Wh(a,l,s.fieldTransforms)}function cc(n,e,t,r,s,i){const a=n.Cc(1,e,t),l=[ua(e,r,t)],u=[s];if(i.length%2!=0)throw new U(k.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<i.length;y+=2)l.push(ua(e,i[y])),u.push(i[y+1]);const h=[],f=Et.empty();for(let y=l.length-1;y>=0;--y)if(!Yh(h,l[y])){const C=l[y];let P=u[y];P=$e(P);const V=a.yc(C);if(P instanceof so)h.push(C);else{const N=lr(P,V);N!=null&&(h.push(C),f.set(C,N))}}const p=new St(h);return new Wh(f,p,a.fieldTransforms)}function wE(n,e,t,r=!1){return lr(t,n.Cc(r?4:3,e))}function lr(n,e){if(Xh(n=$e(n)))return lc("Unsupported field value:",e,n),Jh(n,e);if(n instanceof Os)return(function(r,s){if(!Kh(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,s){const i=[];let a=0;for(const l of r){let u=lr(l,s.wc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}})(n,e)}return(function(r,s){if((r=$e(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return d_(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ve.fromDate(r);return{timestampValue:Ri(s.serializer,i)}}if(r instanceof Ve){const i=new Ve(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ri(s.serializer,i)}}if(r instanceof Qt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ct)return{bytesValue:yh(s.serializer,r._byteString)};if(r instanceof Oe){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ua(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Jt)return(function(a,l){return{mapValue:{fields:{[$d]:{stringValue:Hd},[bi]:{arrayValue:{values:a.toArray().map((h=>{if(typeof h!="number")throw l.Sc("VectorValues must only contain numeric values.");return Ma(l.serializer,h)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${$i(r)}`)})(n,e)}function Jh(n,e){const t={};return Od(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):jn(n,((r,s)=>{const i=lr(s,e.mc(r));i!=null&&(t[r]=i)})),{mapValue:{fields:t}}}function Xh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ve||n instanceof Qt||n instanceof Ct||n instanceof Oe||n instanceof Os||n instanceof Jt)}function lc(n,e,t){if(!Xh(t)||!Vd(t)){const r=$i(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function ua(n,e,t){if((e=$e(e))instanceof qr)return e._internalPath;if(typeof e=="string")return uc(n,e);throw Di("Field path arguments must be of type string or ",n,!1,void 0,t)}const bE=new RegExp("[~\\*/\\[\\]]");function uc(n,e,t){if(e.search(bE)>=0)throw Di(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new qr(...e.split("."))._internalPath}catch{throw Di(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Di(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new U(k.INVALID_ARGUMENT,l+n+u)}function Yh(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Oe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new TE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(dc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class TE extends Vi{data(){return super.data()}}function dc(n,e){return typeof e=="string"?uc(n,e):e instanceof qr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zh(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new U(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class hc{}class AE extends hc{}function mt(n,e,...t){let r=[];e instanceof hc&&r.push(e),r=r.concat(t),(function(i){const a=i.filter((u=>u instanceof fc)).length,l=i.filter((u=>u instanceof io)).length;if(a>1||a>0&&l>0)throw new U(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class io extends AE{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new io(e,t,r)}_apply(e){const t=this._parse(e);return ef(e._query,t),new cr(e.firestore,e.converter,ea(e._query,t))}_parse(e){const t=$r(e.firestore);return(function(i,a,l,u,h,f,p){let y;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new U(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Ru(p,f);const P=[];for(const V of p)P.push(Su(u,i,V));y={arrayValue:{values:P}}}else y=Su(u,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Ru(p,f),y=wE(l,a,p,f==="in"||f==="not-in");return Ke.create(h,f,y)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Me(n,e,t){const r=e,s=dc("where",n);return io._create(s,r,t)}class fc extends hc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new fc(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:Ft.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let a=s;const l=i.getFlattenedFilters();for(const u of l)ef(a,u),a=ea(a,u)})(e._query,t),new cr(e.firestore,e.converter,ea(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Su(n,e,t){if(typeof(t=$e(t))=="string"){if(t==="")throw new U(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Yd(e)&&t.indexOf("/")!==-1)throw new U(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Re.fromString(t));if(!Y.isDocumentKey(r))throw new U(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return $l(n,new Y(r))}if(t instanceof Oe)return $l(n,t._key);throw new U(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${$i(t)}.`)}function Ru(n,e){if(!Array.isArray(n)||n.length===0)throw new U(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ef(n,e){const t=(function(s,i){for(const a of s)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new U(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new U(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class tf{convertValue(e,t="none"){switch(On(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Mn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw te(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return jn(e,((s,i)=>{r[s]=this.convertValue(i,t)})),r}convertVectorValue(e){const t=e.fields?.[bi].arrayValue?.values?.map((r=>qe(r.doubleValue)));return new Jt(t)}convertGeoPoint(e){return new Qt(qe(e.latitude),qe(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=zi(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ys(e));default:return null}}convertTimestamp(e){const t=Vn(e);return new Ve(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Re.fromString(e);Ie(Th(r),9688,{name:e});const s=new _s(r.get(1),r.get(3)),i=new Y(r.popFirst(5));return s.isEqual(t)||ln(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class CE extends tf{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ct(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Oe(this.firestore,null,t)}}class vr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ln extends Vi{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new hi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(dc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new U(k.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ln._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Ln._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ln._jsonSchema={type:Je("string",Ln._jsonSchemaVersion),bundleSource:Je("string","DocumentSnapshot"),bundleName:Je("string"),bundle:Je("string")};class hi extends Ln{data(e={}){return super.data(e)}}class er{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new vr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new hi(this._firestore,this._userDataWriter,r.key,r,new vr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new U(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((l=>{const u=new hi(s._firestore,s._userDataWriter,l.doc.key,l.doc,new vr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const u=new hi(s._firestore,s._userDataWriter,l.doc.key,l.doc,new vr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:SE(l.type),doc:u,oldIndex:h,newIndex:f}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new U(k.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=er._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=xa.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function SE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return te(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(n){n=pt(n,Oe);const e=pt(n.firestore,Ut);return pE(jr(e),n._key).then((t=>nf(e,n,t)))}er._jsonSchemaVersion="firestore/querySnapshot/1.0",er._jsonSchema={type:Je("string",er._jsonSchemaVersion),bundleSource:Je("string","QuerySnapshot"),bundleName:Je("string"),bundle:Je("string")};class ao extends tf{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ct(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Oe(this.firestore,null,t)}}function st(n){n=pt(n,cr);const e=pt(n.firestore,Ut),t=jr(e),r=new ao(e);return Zh(n._query),gE(t,n._query).then((s=>new er(e,r,n,s)))}function Mi(n,e,t){n=pt(n,Oe);const r=pt(n.firestore,Ut),s=oo(n.converter,e,t);return Fs(r,[ro($r(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Qe.none())])}function Pt(n,e,t,...r){n=pt(n,Oe);const s=pt(n.firestore,Ut),i=$r(s);let a;return a=typeof(e=$e(e))=="string"||e instanceof qr?cc(i,"updateDoc",n._key,e,t,r):ac(i,"updateDoc",n._key,e),Fs(s,[a.toMutation(n._key,Qe.exists(!0))])}function Bn(n){return Fs(pt(n.firestore,Ut),[new Ls(n._key,Qe.none())])}function Nt(n,e){const t=pt(n.firestore,Ut),r=ve(n),s=oo(n.converter,e);return Fs(t,[ro($r(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Qe.exists(!1))]).then((()=>r))}function Es(n,...e){n=$e(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Cu(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Cu(e[r])){const u=e[r];e[r]=u.next?.bind(u),e[r+1]=u.error?.bind(u),e[r+2]=u.complete?.bind(u)}let i,a,l;if(n instanceof Oe)a=pt(n.firestore,Ut),l=Gi(n._key.path),i={next:u=>{e[r]&&e[r](nf(a,n,u))},error:e[r+1],complete:e[r+2]};else{const u=pt(n,cr);a=pt(u.firestore,Ut),l=u._query;const h=new ao(a);i={next:f=>{e[r]&&e[r](new er(a,h,u,f))},error:e[r+1],complete:e[r+2]},Zh(n._query)}return(function(h,f,p,y){const C=new rc(y),P=new ec(f,C,p);return h.asyncQueue.enqueueAndForget((async()=>Xa(await Li(h),P))),()=>{C.Nu(),h.asyncQueue.enqueueAndForget((async()=>Ya(await Li(h),P)))}})(jr(a),l,s,i)}function Fs(n,e){return(function(r,s){const i=new Wt;return r.asyncQueue.enqueueAndForget((async()=>eE(await fE(r),s,i))),i.promise})(jr(n),e)}function nf(n,e,t){const r=t.docs.get(e._key),s=new ao(n);return new Ln(n,s,e._key,r,new vr(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */const RE={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=$r(e)}set(e,t,r){this._verifyNotCommitted();const s=Sn(e,this._firestore),i=oo(s.converter,t,r),a=ro(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(a.toMutation(s._key,Qe.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=Sn(e,this._firestore);let a;return a=typeof(t=$e(t))=="string"||t instanceof qr?cc(this._dataReader,"WriteBatch.update",i._key,t,r,s):ac(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(a.toMutation(i._key,Qe.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Sn(e,this._firestore);return this._mutations=this._mutations.concat(new Ls(t._key,Qe.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new U(k.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Sn(n,e){if((n=$e(n)).firestore!==e)throw new U(k.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=$r(e)}get(e){const t=Sn(e,this._firestore),r=new CE(this._firestore);return this._transaction.lookup([t._key]).then((s=>{if(!s||s.length!==1)return te(24041);const i=s[0];if(i.isFoundDocument())return new Vi(this._firestore,r,i.key,i,t.converter);if(i.isNoDocument())return new Vi(this._firestore,r,t._key,null,t.converter);throw te(18433,{doc:i})}))}set(e,t,r){const s=Sn(e,this._firestore),i=oo(s.converter,t,r),a=ro(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,r);return this._transaction.set(s._key,a),this}update(e,t,r,...s){const i=Sn(e,this._firestore);let a;return a=typeof(t=$e(t))=="string"||t instanceof qr?cc(this._dataReader,"Transaction.update",i._key,t,r,s):ac(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,a),this}delete(e){const t=Sn(e,this._firestore);return this._transaction.delete(t._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE extends xE{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Sn(e,this._firestore),r=new ao(this._firestore);return super.get(e).then((s=>new Ln(this._firestore,r,t._key,s._document,new vr(!1,!1),t.converter)))}}function NE(n,e,t){n=pt(n,Ut);const r={...RE,...t};return(function(i){if(i.maxAttempts<1)throw new U(k.INVALID_ARGUMENT,"Max attempts must be at least 1")})(r),(function(i,a,l){const u=new Wt;return i.asyncQueue.enqueueAndForget((async()=>{const h=await mE(i);new uE(i.asyncQueue,h,l,a,u).ju()})),u.promise})(jr(n),(s=>e(new kE(n,s))),r)}function Pu(...n){return new ic("arrayUnion",n)}function LE(...n){return new oc("arrayRemove",n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xu(n){return jr(n=pt(n,Ut)),new PE(n,(e=>Fs(n,e)))}(function(e,t=!0){(function(s){Or=s})(Vr),Tr(new nr("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new Ut(new by(r.getProvider("auth-internal")),new Cy(a,r.getProvider("app-check-internal")),(function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new U(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _s(h.options.projectId,f)})(a,s),a);return i={useFetchStreams:t,...i},l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),xn(xl,kl,e),xn(xl,kl,"esm2020")})();const DE={apiKey:"AIzaSyAf2Fmg5SBU6zpZ9r-VP_eTF49r-e1go7Q",authDomain:"gustoplan-dev.firebaseapp.com",projectId:"gustoplan-dev",storageBucket:"gustoplan-dev.firebasestorage.app",messagingSenderId:"554162135180",appId:"1:554162135180:web:f5addf322a0977ffe31ba9"},mc=zu(DE),B=Gh(mc),da=yy(mc),VE=Object.freeze(Object.defineProperty({__proto__:null,auth:da,db:B,firebaseApp:mc},Symbol.toStringTag,{value:"Module"}));let Oi=null;function rf(){return new Promise(n=>{ig(da,e=>{if(Oi=e,e){console.log("User is logged in:",e.uid);const t=document.getElementById("logout-btn"),r=document.getElementById("profile-btn");t&&t.classList.remove("hidden"),r&&r.classList.remove("hidden"),t&&!t.hasAttribute("data-listener-attached")&&(t.addEventListener("click",()=>{og(da).catch(s=>{console.error("Sign Out Error",s)})}),t.setAttribute("data-listener-attached","true")),n(e)}else{console.log("User not logged in. Redirecting to login.html");const t=window.location.origin+"/login.html";window.location.href!==t&&(window.location.href=t),n(null)}})})}function lt(){return Oi?Oi.uid:null}function Us(){return Oi}const ME=Object.freeze(Object.defineProperty({__proto__:null,getCurrentUser:Us,getCurrentUserId:lt,protectPage:rf},Symbol.toStringTag,{value:"Module"}));class pc{constructor(e,t,r,s,i,a,l,u,h,f,p,y,C,P,V,N){this.db=e,this.modal=document.getElementById(t),this.form=document.getElementById(r),this.modalTitle=document.getElementById(s),this.recipeIdInput=document.getElementById(i),this.recipeNameInput=document.getElementById(a),this.recipeCategoryInput=document.getElementById(l),this.recipeServingsInput=document.getElementById(u),this.recipePrepTimeInput=document.getElementById(h),this.recipeDifficultyInput=document.getElementById(f),this.recipeStepsTextarea=document.getElementById(p),this.ingredientsListDiv=document.getElementById(y),this.addIngredientBtn=document.getElementById(C),this.saveRecipeBtn=document.getElementById(P),this.closeButton=document.getElementById(V),this.cancelButton=document.getElementById(N),this.masterIngredientList=[],this.boundAddIngredient=()=>this.addIngredientInput(void 0,this.form.ingredients),this.boundCloseForm=()=>this.closeForm(),this.boundHandleSubmit=H=>this.handleSubmit(H),this.addIngredientBtn.addEventListener("click",this.boundAddIngredient),this.closeButton.addEventListener("click",this.boundCloseForm),this.cancelButton.addEventListener("click",this.boundCloseForm),this.saveRecipeBtn.addEventListener("click",this.boundHandleSubmit)}destroy(){this.addIngredientBtn.removeEventListener("click",this.boundAddIngredient),this.closeButton.removeEventListener("click",this.boundCloseForm),this.cancelButton.removeEventListener("click",this.boundCloseForm),this.saveRecipeBtn.removeEventListener("click",this.boundHandleSubmit)}async openForm(e=null,t="Ajouter une recette"){await this.fetchMasterIngredients(),console.log("openForm called with recipe:",e,"and title:",t),this.form.reset(),this.ingredientsListDiv.innerHTML="",this.modalTitle.textContent=t;const r=[];if(this.form.ingredients=r,e){this.recipeIdInput.value=e.id||"",this.recipeNameInput.value=e.name||"";const s=e.category||"Plat";for(const i of this.recipeCategoryInput.options)if(i.value.toLowerCase()===s.toLowerCase()){i.selected=!0;break}this.recipeServingsInput.value=parseInt(e.servings)||"",this.recipePrepTimeInput.value=parseInt(e.prepTime)||"",this.recipeDifficultyInput.value=e.difficulty||"Moyen",this.recipeStepsTextarea.value=e.steps||"",e.ingredients&&e.ingredients.length>0?e.ingredients.forEach(i=>this.addIngredientInput({...i},r)):this.addIngredientInput(void 0,r)}else this.recipeIdInput.value="",this.addIngredientInput(void 0,r);this.modal.classList.remove("hidden")}closeForm(){this.modal.classList.add("hidden")}async fetchMasterIngredients(){if(this.masterIngredientList=[],!!this.db)try{const e=await st(be(this.db,"ingredients"));this.masterIngredientList=e.docs.map(t=>({id:t.id,...t.data()})),this.masterIngredientList.sort((t,r)=>t.name.localeCompare(r.name))}catch(e){console.error("Erreur lors de la récupération de la liste des ingrédients: ",e),alert("Impossible de charger la liste des ingrédients de base. La recherche ne fonctionnera pas.")}}addIngredientInput(e={quantity:"",name:"",unit:""},t){const r=document.createElement("div");r.className="relative flex items-stretch space-x-2 ingredient-row";const s={...e};t.push(s);const i=t.length-1,a=document.createElement("input");a.type="text",a.className="ingredient-quantity mt-1 block w-1/4 rounded-md border-gray-300 shadow-sm",a.placeholder="Qté",a.value=s.quantity,a.addEventListener("change",y=>{t[i].quantity=y.target.value});const l=document.createElement("input");l.type="text",l.className="ingredient-unit mt-1 block w-1/4 rounded-md border-gray-300 shadow-sm bg-gray-100",l.placeholder="Unité",l.readOnly=!0,l.value=s.unit||"";const u=document.createElement("div");u.className="relative w-1/2";const h=document.createElement("input");h.type="text",h.className="ingredient-name mt-1 block w-full rounded-md border-gray-300 shadow-sm",h.placeholder="Chercher un ingrédient...",h.value=s.name,u.appendChild(h);const f=document.createElement("div");f.className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg mt-1 hidden max-h-48 overflow-y-auto",u.appendChild(f),h.addEventListener("input",()=>{const y=h.value.toLowerCase();if(!y){f.classList.add("hidden");return}const C=this.masterIngredientList.filter(V=>V.name.toLowerCase().includes(y));f.innerHTML="",C.forEach(V=>{const N=document.createElement("div");N.className="p-2 hover:bg-tomato hover:text-white cursor-pointer",N.textContent=V.name,N.addEventListener("click",()=>{h.value=V.name,l.value=V.unit,f.classList.add("hidden"),t[i].name=V.name,t[i].unit=V.unit,t[i].id=V.id}),f.appendChild(N)});const P=document.createElement("div");P.className="p-2 bg-blue-50 hover:bg-blue-200 cursor-pointer font-bold text-blue-700",P.textContent=`+ Créer "${h.value}"`,P.addEventListener("click",async()=>{const V=h.value,N="pièce(s)";try{const H=await Nt(be(this.db,"ingredients"),{name:V,unit:N});await this.fetchMasterIngredients(),h.value=V,l.value=N,f.classList.add("hidden"),t[i].name=V,t[i].unit=N,t[i].id=H.id}catch(H){console.error("Erreur d'ajout d'ingrédient",H),alert("L'ingrédient n'a pas pu être créé.")}}),f.appendChild(P),f.classList.remove("hidden")});const p=document.createElement("button");p.type="button",p.className="btn btn-ghost text-red-500 hover:bg-red-50 btn-sm mt-1",p.innerHTML='<i class="fas fa-trash"></i>',p.addEventListener("click",()=>{r.remove(),t[i]=null}),r.appendChild(u),r.appendChild(a),r.appendChild(l),r.appendChild(p),this.ingredientsListDiv.appendChild(r)}async handleSubmit(e){e.preventDefault(),this.saveRecipeBtn.disabled=!0,this.saveRecipeBtn.innerHTML='<i class="fas fa-spinner fa-spin mr-2"></i> Sauvegarde...',console.log("Ingredients array from form before filter:",this.form.ingredients);const t=this.form.ingredients.filter(i=>i!==null&&i.quantity&&i.name);console.log("Ingredients array after filter:",t);const r={name:this.recipeNameInput.value,category:this.recipeCategoryInput.value,servings:parseInt(this.recipeServingsInput.value)||0,prepTime:parseInt(this.recipePrepTimeInput.value)||0,difficulty:this.recipeDifficultyInput.value,steps:this.recipeStepsTextarea.value,ingredients:t,imageUrl:""};console.log("Recipe data being sent to Firebase:",r);const s=this.recipeIdInput.value;try{s?await Mi(ve(this.db,"recipes",s),r):await Nt(be(this.db,"recipes"),r),this.closeForm(),console.log("Recipe saved successfully!"),this.onSaveCallback&&this.onSaveCallback()}catch(i){console.error("Erreur de sauvegarde: ",i),alert("Une erreur est survenue lors de la sauvegarde.")}finally{this.saveRecipeBtn.disabled=!1,this.saveRecipeBtn.textContent="Sauvegarder"}}setOnSaveCallback(e){this.onSaveCallback=e}}const OE=Object.freeze(Object.defineProperty({__proto__:null,RecipeFormHandler:pc},Symbol.toStringTag,{value:"Module"}));async function sf(n,e){const t=lt();if(!t||!e)return;const r=ve(B,"friend_requests",n),s=ve(B,"users",t),i=ve(B,"users",e);try{await Pt(r,{status:"accepted"}),await Pt(s,{friends:Pu(e)}),await Pt(i,{friends:Pu(t)})}catch(a){throw console.error("Erreur lors de l'acceptation de l'invitation : ",a),a}}async function of(n){const e=ve(B,"friend_requests",n);try{await Pt(e,{status:"declined"})}catch(t){throw console.error("Erreur lors du refus de l'invitation : ",t),t}}function FE(){const n=document.getElementById("search-friends-input"),e=document.getElementById("search-friends-btn"),t=document.getElementById("search-results-container");e.addEventListener("click",()=>{const l=n.value.trim();l?r(l):t.innerHTML=""});async function r(l){const u=lt();if(!u)return;t.innerHTML='<p class="text-gray-500">Recherche en cours...</p>';const h=l.toLowerCase();try{const f=be(B,"users"),p=mt(f,Me("displayName_lowercase",">=",h),Me("displayName_lowercase","<=",h+"")),y=mt(f,Me("email",">=",h),Me("email","<=",h+"")),[C,P]=await Promise.all([st(p),st(y)]),V=new Map;C.forEach(N=>{N.id!==u&&V.set(N.id,{id:N.id,...N.data()})}),P.forEach(N=>{N.id!==u&&!V.has(N.id)&&V.set(N.id,{id:N.id,...N.data()})}),s(Array.from(V.values()))}catch(f){console.error("Erreur lors de la recherche d'utilisateurs : ",f),t.innerHTML='<p class="text-red-500">Une erreur est survenue.</p>'}}function s(l){if(t.innerHTML="",l.length===0){t.innerHTML='<p class="text-gray-500">Aucun utilisateur trouvé.</p>';return}l.forEach(u=>{const h=document.createElement("div");h.className="flex items-center justify-between p-2 bg-gray-100 rounded-lg";const f=document.createElement("div");f.className="flex items-center";const p=document.createElement("img");p.src=u.photoURL||"https://placehold.co/40x40",p.alt=u.displayName,p.className="w-8 h-8 rounded-full mr-3",f.appendChild(p);const y=document.createElement("span");y.className="font-medium",y.textContent=u.displayName||u.email,f.appendChild(y),h.appendChild(f);const C=document.createElement("button");C.className="btn btn-primary btn-sm",C.innerHTML='<i class="fas fa-user-plus"></i>',C.title="Envoyer une invitation",C.addEventListener("click",()=>a(u.id,C)),h.appendChild(C),t.appendChild(h)})}async function i(){const l=lt();if(!l)return;const u=document.getElementById("friends-list-container");if(u){u.innerHTML='<p class="text-gray-500">Chargement...</p>';try{const h=await Yt(ve(B,"users",l));if(h.exists()){const p=h.data().friends||[];if(p.length===0){u.innerHTML=`<p class="text-gray-500">Vous n'avez pas encore d'amis.</p>`;return}u.innerHTML="";for(const y of p){const C=await Yt(ve(B,"users",y));if(C.exists()){const P=C.data(),V=document.createElement("div");V.className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm";const N=document.createElement("div");N.className="flex items-center";const H=document.createElement("img");H.src=P.photoURL||"https://placehold.co/40x40",H.alt=P.displayName,H.className="w-10 h-10 rounded-full mr-4",N.appendChild(H);const re=document.createElement("span");re.className="font-bold text-gray-700",re.textContent=P.displayName||P.email,N.appendChild(re),V.appendChild(N);const q=document.createElement("div");V.appendChild(q),u.appendChild(V)}}}}catch(h){console.error("Erreur lors du chargement des amis : ",h),u.innerHTML='<p class="text-red-500">Une erreur est survenue.</p>'}}}i();async function a(l,u){const h=lt();if(!(!h||!l||h===l)){u.disabled=!0,u.innerHTML='<i class="fas fa-check"></i>';try{const f=be(B,"friend_requests"),p=mt(f,Me("senderId","==",h),Me("receiverId","==",l)),y=mt(f,Me("senderId","==",l),Me("receiverId","==",h)),[C,P]=await Promise.all([st(p),st(y)]);if(!C.empty||!P.empty){console.log("Une demande d'ami existe déjà.");return}await Nt(f,{senderId:h,receiverId:l,status:"pending",createdAt:new Date})}catch(f){console.error("Erreur lors de l'envoi de la demande d'ami : ",f),u.disabled=!1,u.innerHTML='<i class="fas fa-user-plus"></i>'}}}}const UE=Object.freeze(Object.defineProperty({__proto__:null,acceptFriendRequest:sf,declineFriendRequest:of,default:FE},Symbol.toStringTag,{value:"Module"}));function BE(){const n=document.getElementById("ingredients-list-container"),e=document.getElementById("add-ingredient-btn"),t=document.getElementById("category-tabs"),r=document.getElementById("search-bar"),s=document.getElementById("ingredient-form-modal"),i=document.getElementById("ingredient-modal-title"),a=document.getElementById("close-ingredient-modal"),l=document.getElementById("cancel-ingredient-btn"),u=document.getElementById("ingredient-form"),h=document.getElementById("ingredient-id"),f=document.getElementById("ingredient-name"),p=document.getElementById("ingredient-unit"),y=document.getElementById("ingredient-category"),C=document.getElementById("manage-categories-btn"),P=document.getElementById("category-management-modal"),V=document.getElementById("close-category-modal"),N=document.getElementById("done-category-modal-btn"),H=document.getElementById("add-category-form"),re=document.getElementById("new-category-name"),q=document.getElementById("category-list");let ne=[],Q=[],Z="",I="",g=null;const _=["g","kg","ml","l","pièce(s)","c.à.s.","c.à.c.","pincée(s)"];async function w(){await E(),await b()}async function E(){if(B)try{Q=(await st(be(B,"ingredient_categories"))).docs.map(ee=>({id:ee.id,...ee.data()})),Q.sort((ee,W)=>ee.name.localeCompare(W.name))}catch(oe){console.error("Erreur lors de la récupération des catégories: ",oe)}}async function b(){if(B)try{ne=(await st(be(B,"ingredients"))).docs.map(ee=>({id:ee.id,...ee.data()})),pe(),Ne()}catch(oe){console.error("Erreur de chargement des ingrédients: ",oe)}}function v(oe=null){u.reset(),p.innerHTML="",_.forEach(le=>{const Ce=document.createElement("option");Ce.value=le,Ce.textContent=le,p.appendChild(Ce)});const ee=Q.map(le=>le.name),W=[...new Set(ne.map(le=>le.category).filter(Boolean))],K=[...new Set([...ee,...W])];K.sort((le,Ce)=>le.localeCompare(Ce.name)),y.innerHTML="",K.forEach(le=>{const Ce=document.createElement("option");Ce.value=le,Ce.textContent=le,y.appendChild(Ce)}),oe?(i.textContent="Modifier l'ingrédient",h.value=oe.id,f.value=oe.name,p.value=oe.unit||"",y.value=oe.category||(K.length>0?K[0]:"")):(i.textContent="Ajouter un ingrédient",h.value="",p.value=_[0],y.value=Z||(K.length>0?K[0]:"")),s.classList.remove("hidden")}function xe(){s.classList.add("hidden")}async function se(oe){oe.preventDefault();const ee=h.value,W={name:f.value,unit:p.value,category:y.value};if(!W.name||!W.category){alert("Le nom et la catégorie sont requis.");return}try{ee?await Mi(ve(B,"ingredients",ee),W):await Nt(be(B,"ingredients"),W),xe(),await b()}catch(K){console.error("Erreur de sauvegarde de l'ingrédient: ",K)}}function G(){de(),P.classList.remove("hidden")}function me(){P.classList.add("hidden")}function de(){if(q.innerHTML="",Q.length===0){q.innerHTML='<p class="text-gray-500">Aucune catégorie définie.</p>';return}Q.forEach(oe=>{const ee=document.createElement("div");ee.className="flex items-center justify-between p-2 border-b";const W=document.createElement("span");W.textContent=oe.name,ee.appendChild(W);const K=document.createElement("div");K.className="flex space-x-2";const le=document.createElement("button");le.className="btn btn-ghost btn-xs text-blue-500",le.innerHTML='<i class="fas fa-edit"></i>',le.addEventListener("click",()=>Te(oe)),K.appendChild(le);const Ce=document.createElement("button");Ce.className="btn btn-ghost btn-xs text-red-500",Ce.innerHTML='<i class="fas fa-trash"></i>',Ce.addEventListener("click",()=>Ue(oe)),K.appendChild(Ce),ee.appendChild(K),q.appendChild(ee)})}async function Ae(oe){oe.preventDefault();const ee=re.value.trim();if(ee&&!Q.find(W=>W.name.toLowerCase()===ee.toLowerCase()))try{await Nt(be(B,"ingredient_categories"),{name:ee}),re.value="",await E(),de(),pe()}catch(W){console.error("Erreur d'ajout de catégorie: ",W)}else alert("Cette catégorie existe déjà ou le nom est invalide.")}async function Te(oe){const ee=oe.name,W=prompt(`Entrez le nouveau nom pour la catégorie "${ee}":`,ee);if(W&&W.trim()!==""&&W!==ee)try{await Mi(ve(B,"ingredient_categories",oe.id),{name:W});const K=mt(be(B,"ingredients"),Me("category","==",ee)),le=await st(K),Ce=xu(B);le.forEach(Bt=>{Ce.update(Bt.ref,{category:W})}),await Ce.commit(),await w(),de()}catch(K){console.error("Erreur de renommage: ",K)}}async function Ue(oe){if(confirm(`Êtes-vous sûr de vouloir supprimer la catégorie "${oe.name}"?

Tous les ingrédients associés seront déplacés vers la catégorie "Inconnue".`))try{await Bn(ve(B,"ingredient_categories",oe.id));const ee=mt(be(B,"ingredients"),Me("category","==",oe.name)),W=await st(ee),K=xu(B);W.forEach(le=>{K.update(le.ref,{category:"Inconnue"})}),await K.commit(),Z="",await w(),de()}catch(ee){console.error("Erreur de suppression: ",ee)}}function pe(){t.innerHTML="";const oe=Q.map(K=>K.name),ee=[...new Set(ne.map(K=>K.category||"Inconnue"))];let W=[...new Set([...oe,...ee])];W.sort((K,le)=>K.localeCompare(le)),W.includes("Inconnue")&&(W=W.filter(K=>K!=="Inconnue"),W.push("Inconnue")),W.length===0&&ne.length>0&&W.push("Inconnue"),!Z&&W.length>0&&(Z=W[0]),W.forEach(K=>{const le=document.createElement("button"),Ce=K===Z;le.className=`px-4 py-2 text-sm font-medium rounded-t-lg ${Ce?"bg-tomato text-white":"text-gray-500 hover:text-tomato"}`,le.textContent=K,le.addEventListener("click",()=>ke(K)),t.appendChild(le)})}function ke(oe){Z=oe,pe(),Ne()}function Ne(){n.innerHTML="";const oe=Z||(Q.length>0?Q[0].name:"Inconnue");let ee=ne.filter(K=>(K.category||"Inconnue")===oe);if(I){const K=I.toLowerCase();ee=ee.filter(le=>le.name.toLowerCase().includes(K))}if(ee.length===0){n.innerHTML='<p class="text-center text-gray-500 p-10">Aucun ingrédient dans cette catégorie.</p>';return}ee.sort((K,le)=>K.name.localeCompare(le.name,"fr",{sensitivity:"base"}));const W=document.createElement("div");W.className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4",ee.forEach(K=>{const le=document.createElement("div");le.className="p-3 bg-white shadow-sm rounded-lg flex flex-col items-start space-y-2";const Ce=document.createElement("div");Ce.className="flex-grow w-full flex justify-between items-center";const Bt=document.createElement("span");Bt.className="font-medium text-gray-800",Bt.textContent=K.name;const Zt=document.createElement("span");Zt.className="text-gray-500 text-sm bg-gray-100 px-2 py-1 rounded-full",Zt.textContent=K.unit,Ce.appendChild(Bt),Ce.appendChild(Zt);const en=document.createElement("div");en.className="w-full flex justify-end items-center space-x-2 border-t pt-2 mt-2";const hn=document.createElement("button");hn.className="btn btn-ghost btn-xs text-blue-500 hover:bg-blue-50",hn.innerHTML='<i class="fas fa-edit"></i>',hn.addEventListener("click",()=>v(K));const Lt=document.createElement("button");Lt.className="btn btn-ghost btn-xs text-red-500 hover:bg-red-50",Lt.innerHTML='<i class="fas fa-trash-alt"></i>',Lt.addEventListener("click",()=>He(K.id,K.name)),en.appendChild(hn),en.appendChild(Lt),le.appendChild(Ce),le.appendChild(en),W.appendChild(le)}),n.appendChild(W)}async function He(oe,ee){if(confirm(`Êtes-vous sûr de vouloir supprimer l'ingrédient "${ee}" ?`))try{await Bn(ve(B,"ingredients",oe)),await b()}catch(W){console.error("Erreur de suppression de l'ingrédient: ",W)}}r.addEventListener("input",oe=>{const ee=oe.target.value.toLowerCase();if(!I&&ee&&(g=Z),I=ee,I){const W=ne.find(K=>K.name.toLowerCase().includes(I));W&&(Z=W.category||"Inconnue")}else g&&(Z=g,g=null);pe(),Ne()}),e.addEventListener("click",()=>v()),a.addEventListener("click",xe),l.addEventListener("click",xe),u.addEventListener("submit",se),C.addEventListener("click",G),V.addEventListener("click",me),N.addEventListener("click",me),H.addEventListener("submit",Ae),w()}const jE=Object.freeze(Object.defineProperty({__proto__:null,default:BE},Symbol.toStringTag,{value:"Module"})),at={modal:document.getElementById("share-modal"),closeBtn:document.getElementById("close-share-modal"),title:document.getElementById("share-modal-title"),friendsList:document.getElementById("share-friends-list"),sharePlanCheckbox:document.getElementById("share-planning-checkbox"),shareShoppingListCheckbox:document.getElementById("share-shopping-list-checkbox"),confirmBtn:document.getElementById("confirm-share-btn")};let tn={};function gc(){at.modal.classList.add("hidden")}async function qE(){const n=lt();if(!n||!tn.plan)return;const e=Array.from(at.friendsList.querySelectorAll('input[type="checkbox"]:checked')).map(r=>r.value),t=document.querySelector('input[name="share-mode"]:checked')?.value;if(e.length===0){alert("Veuillez sélectionner au moins un ami.");return}if(!t){alert("Veuillez sélectionner un mode de partage.");return}at.confirmBtn.disabled=!0,at.confirmBtn.textContent="Envoi en cours...";try{const r=be(B,"shares");let s={};t==="collaborate"?s={senderId:n,createdAt:new Date,type:"collaborative_plan_invite",planId:tn.plan.id,planName:tn.plan.name}:s={senderId:n,createdAt:new Date,type:"share",plan:{name:tn.plan.name,weeks:tn.plan.weeks||{},manualItems:tn.plan.manualItems||[],defaultNumPeople:tn.plan.defaultNumPeople||1,startDay:tn.plan.startDay||"Lundi"}};for(const i of e)await Nt(r,{...s,receiverId:i,status:"pending"});gc(),alert("Partage envoyé avec succès !")}catch(r){console.error("Erreur lors de l'envoi du partage : ",r),alert("Une erreur est survenue lors de l'envoi du partage.")}finally{at.confirmBtn.disabled=!1,at.confirmBtn.textContent="Envoyer le partage"}}async function yc(n={}){const{plan:e}=n;if(!e){alert("Aucun plan sélectionné à partager.");return}tn={plan:e},at.title.textContent=`Partager le plan "${e.name}"`,at.friendsList.innerHTML='<p class="text-gray-500">Chargement des amis...</p>',at.modal.classList.remove("hidden");const t=lt();if(t)try{const r=await Yt(ve(B,"users",t));if(r.exists()){const i=r.data().friends||[];if(i.length===0){at.friendsList.innerHTML=`<p class="text-gray-500">Vous n'avez pas d'amis à qui partager.</p>`;return}at.friendsList.innerHTML="";for(const a of i){const l=await Yt(ve(B,"users",a));if(l.exists()){const u=l.data(),h=document.createElement("label");h.className="flex items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer";const f=document.createElement("input");f.type="checkbox",f.value=u.uid,f.className="form-checkbox h-5 w-5 text-tomato rounded focus:ring-tomato",h.appendChild(f);const p=document.createElement("img");p.src=u.photoURL||"https://placehold.co/40x40",p.alt=u.displayName,p.className="w-8 h-8 rounded-full ml-3 mr-3",h.appendChild(p);const y=document.createElement("span");y.className="font-medium",y.textContent=u.displayName||u.email,h.appendChild(y),at.friendsList.appendChild(h)}}}}catch(r){console.error("Erreur lors du chargement des amis pour le partage : ",r),at.friendsList.innerHTML='<p class="text-red-500">Une erreur est survenue.</p>'}}at.closeBtn?.addEventListener("click",gc);at.modal?.addEventListener("click",n=>{n.target===at.modal&&gc()});at.confirmBtn?.addEventListener("click",qE);const $E=Object.freeze(Object.defineProperty({__proto__:null,openShareModal:yc},Symbol.toStringTag,{value:"Module"}));function HE(){const n=document.getElementById("search-bar"),e=document.getElementById("lists-container"),t=document.getElementById("add-list-btn"),r=document.getElementById("shared-lists-container"),s=document.getElementById("list-form-modal"),i=document.getElementById("list-modal-title"),a=document.getElementById("close-list-modal"),l=document.getElementById("cancel-list-btn"),u=document.getElementById("list-form"),h=document.getElementById("list-id"),f=document.getElementById("list-name"),p=document.getElementById("ingredients-list"),y=document.getElementById("add-ingredient-btn"),C=document.getElementById("save-list-btn");let P=[],V="",N=[],H=[];async function re(){await q(),await ne(),await Q()}async function q(){if(B)try{N=(await st(be(B,"ingredients"))).docs.map(G=>({id:G.id,...G.data()})),N.sort((G,me)=>G.name.localeCompare(me.name))}catch(se){console.error("Erreur lors de la récupération de la liste des ingrédients: ",se)}}async function ne(){const se=lt();if(!(!B||!se))try{const G=mt(be(B,"shopping_lists"),Me("userId","==",se));P=(await st(G)).docs.map(de=>({id:de.id,...de.data()})).filter(de=>de.isShared!==!0),w()}catch(G){console.error("Erreur de chargement des listes: ",G)}}async function Q(){const se=lt();if(!(!B||!se)){console.log(`Recherche de listes partagées pour userId: ${se}`);try{const G=mt(be(B,"shopping_lists"),Me("userId","==",se),Me("isShared","==",!0)),me=await st(G);console.log(`Trouvé ${me.size} liste(s) partagée(s).`);const de=me.docs.map(Ae=>({id:Ae.id,...Ae.data()}));E(de)}catch(G){console.error("Erreur de chargement des listes partagées: ",G)}}}async function Z(se=null){await q(),u.reset(),p.innerHTML="",H=[],se?(i.textContent="Modifier la liste",h.value=se.id,f.value=se.name,se.ingredients&&se.ingredients.length>0?se.ingredients.forEach(G=>_(G)):_()):(i.textContent="Créer une liste",h.value="",_()),s.classList.remove("hidden")}function I(){s.classList.add("hidden")}async function g(se){se.preventDefault(),C.disabled=!0;const G=lt();if(!G){alert("Erreur : utilisateur non connecté."),C.disabled=!1;return}const me=H.filter(Te=>Te&&Te.name&&Te.quantity),de={name:f.value,ingredients:me,userId:G};if(!de.name){alert("Le nom de la liste est requis."),C.disabled=!1;return}const Ae=h.value;try{Ae?await Mi(ve(B,"shopping_lists",Ae),de):await Nt(be(B,"shopping_lists"),de),I(),await ne()}catch(Te){console.error("Erreur de sauvegarde de la liste: ",Te)}finally{C.disabled=!1}}function _(se={quantity:"",name:"",unit:""}){const G=document.createElement("div");G.className="relative flex items-stretch space-x-2 ingredient-row";const me={...se};H.push(me);const de=H.length-1,Ae=document.createElement("input");Ae.type="text",Ae.className="ingredient-quantity mt-1 block w-1/4 rounded-md border-gray-300 shadow-sm",Ae.placeholder="Qté",Ae.value=me.quantity,Ae.addEventListener("change",He=>{H[de].quantity=He.target.value});const Te=document.createElement("input");Te.type="text",Te.className="ingredient-unit mt-1 block w-1/4 rounded-md border-gray-300 shadow-sm bg-gray-100",Te.placeholder="Unité",Te.readOnly=!0,Te.value=me.unit||"";const Ue=document.createElement("div");Ue.className="relative w-1/2";const pe=document.createElement("input");pe.type="text",pe.className="ingredient-name mt-1 block w-full rounded-md border-gray-300 shadow-sm",pe.placeholder="Chercher un ingrédient...",pe.value=me.name,Ue.appendChild(pe);const ke=document.createElement("div");ke.className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg mt-1 hidden max-h-48 overflow-y-auto",Ue.appendChild(ke),pe.addEventListener("input",()=>{const He=pe.value.toLowerCase();if(!He){ke.classList.add("hidden");return}const oe=N.filter(W=>W.name.toLowerCase().includes(He));ke.innerHTML="",oe.forEach(W=>{const K=document.createElement("div");K.className="p-2 hover:bg-tomato hover:text-white cursor-pointer",K.textContent=W.name,K.addEventListener("click",()=>{pe.value=W.name,Te.value=W.unit,ke.classList.add("hidden"),H[de].name=W.name,H[de].unit=W.unit,H[de].id=W.id}),ke.appendChild(K)});const ee=document.createElement("div");ee.className="p-2 bg-blue-50 hover:bg-blue-200 cursor-pointer font-bold text-blue-700",ee.textContent=`+ Créer "${pe.value}"`,ee.addEventListener("click",async()=>{const W=pe.value,K="pièce(s)";try{const le=await Nt(be(B,"ingredients"),{name:W,unit:K,category:"Inconnue"});await q(),pe.value=W,Te.value=K,ke.classList.add("hidden"),H[de].name=W,H[de].unit=K,H[de].id=le.id}catch(le){console.error("Erreur d'ajout d'ingrédient",le),alert("L'ingrédient n'a pas pu être créé.")}}),ke.appendChild(ee),ke.classList.remove("hidden")});const Ne=document.createElement("button");Ne.type="button",Ne.className="btn btn-ghost text-red-500 hover:bg-red-50 btn-sm mt-1",Ne.innerHTML='<i class="fas fa-trash"></i>',Ne.addEventListener("click",()=>{G.remove(),H[de]=null}),G.appendChild(Ue),G.appendChild(Ae),G.appendChild(Te),G.appendChild(Ne),p.appendChild(G)}function w(){e.innerHTML="";let se=P;if(V){const G=V.toLowerCase();se=P.filter(me=>me.name.toLowerCase().includes(G))}if(se.length===0){e.innerHTML='<p class="text-center text-gray-500 p-10 col-span-full">Aucune liste de courses trouvée.</p>';return}se.sort((G,me)=>G.name.localeCompare(me.name)),se.forEach(G=>{const me=document.createElement("div");me.className="bg-white rounded-lg shadow-md p-4 flex flex-col";const de=document.createElement("div");de.className="flex justify-between items-start border-b pb-2 mb-2";const Ae=document.createElement("h4");Ae.className="text-lg font-bold text-gray-800",Ae.textContent=G.name,de.appendChild(Ae);const Te=document.createElement("div");Te.className="flex space-x-2";const Ue=document.createElement("button");Ue.className="btn btn-ghost btn-sm text-blue-500",Ue.innerHTML='<i class="fas fa-edit"></i>',Ue.addEventListener("click",()=>Z(G)),Te.appendChild(Ue);const pe=document.createElement("button");pe.className="btn btn-ghost btn-sm text-green-500",pe.innerHTML='<i class="fas fa-share-alt"></i>',pe.addEventListener("click",()=>yc({})),Te.appendChild(pe);const ke=document.createElement("button");ke.className="btn btn-ghost btn-sm text-red-500",ke.innerHTML='<i class="fas fa-trash"></i>',ke.addEventListener("click",()=>b(G.id,G.name)),Te.appendChild(ke),de.appendChild(Te);const Ne=document.createElement("ul");Ne.className="space-y-1 text-sm text-gray-600 flex-grow",G.ingredients&&G.ingredients.length>0?G.ingredients.forEach(He=>{const oe=document.createElement("li");oe.textContent=`${He.quantity} ${He.unit||""} - ${He.name}`.trim(),Ne.appendChild(oe)}):Ne.innerHTML='<li class="italic text-gray-400">Cette liste est vide.</li>',me.appendChild(de),me.appendChild(Ne),e.appendChild(me)})}function E(se){if(r.innerHTML="",se.length===0){r.innerHTML='<p class="text-center text-gray-500 p-10 col-span-full">Aucune liste de courses partagée trouvée.</p>';return}se.sort((G,me)=>G.name.localeCompare(me.name)),se.forEach(G=>{const me=document.createElement("div");me.className="bg-white rounded-lg shadow-md p-4 flex flex-col";const de=document.createElement("div");de.className="flex justify-between items-start border-b pb-2 mb-2";const Ae=document.createElement("h4");Ae.className="text-lg font-bold text-gray-800",Ae.textContent=G.name,de.appendChild(Ae);const Te=document.createElement("div");Te.className="flex space-x-2";const Ue=document.createElement("button");Ue.className="btn btn-secondary btn-sm",Ue.innerHTML='<i class="fas fa-copy mr-2"></i> Copier dans mes listes',Ue.title="Copier cette liste dans vos listes personnelles",Ue.addEventListener("click",()=>xe(G.id)),Te.appendChild(Ue);const pe=document.createElement("button");pe.className="btn btn-ghost btn-sm text-red-500",pe.innerHTML='<i class="fas fa-trash"></i>',pe.title="Supprimer cette liste partagée",pe.addEventListener("click",()=>v(G.id,G.name)),Te.appendChild(pe),de.appendChild(Te);const ke=document.createElement("ul");ke.className="space-y-1 text-sm text-gray-600 flex-grow",G.ingredients&&G.ingredients.length>0?G.ingredients.forEach(Ne=>{const He=document.createElement("li");He.textContent=`${Ne.quantity} ${Ne.unit||""} - ${Ne.name}`.trim(),ke.appendChild(He)}):ke.innerHTML='<li class="italic text-gray-400">Cette liste est vide.</li>',me.appendChild(de),me.appendChild(ke),r.appendChild(me)})}async function b(se,G){if(confirm(`Êtes-vous sûr de vouloir supprimer la liste "${G}" ?`))try{await Bn(ve(B,"shopping_lists",se)),await ne()}catch(me){console.error("Erreur de suppression de la liste: ",me)}}async function v(se,G){if(confirm(`Êtes-vous sûr de vouloir supprimer la liste partagée "${G}" ?`))try{await Bn(ve(B,"shopping_lists",se)),await Q()}catch(me){console.error("Erreur de suppression de la liste partagée: ",me),alert("Une erreur est survenue.")}}async function xe(se){if(confirm("Voulez-vous vraiment copier cette liste dans vos listes personnelles ? Elle ne sera plus considérée comme une liste partagée."))try{const G=ve(B,"shopping_lists",se);await Pt(G,{isShared:!1}),await re()}catch(G){console.error("Erreur lors de la copie de la liste: ",G),alert("Une erreur est survenue.")}}n.addEventListener("input",se=>{V=se.target.value,w()}),t.addEventListener("click",()=>Z()),a.addEventListener("click",I),l.addEventListener("click",I),u.addEventListener("submit",g),y.addEventListener("click",()=>_()),B&&re()}const zE=Object.freeze(Object.defineProperty({__proto__:null,default:HE},Symbol.toStringTag,{value:"Module"}));let af=[],cf=[],lf=()=>{},uf=()=>{};const Ye={btn:null,badge:null,dropdown:null,list:null};async function GE(n,e,t){const r=lt();if(r)try{const s=ve(B,"shares",n);if(await Pt(s,{status:"accepted"}),e.plan){const i=t.displayName||"Inconnu",a=`Copie de "${e.plan.name}" (de ${i})`,l={...e.plan,userId:r,name:a,isShared:!0,originalOwnerId:e.senderId,sharedAt:new Date,collaborators:[]};delete l.id,await Nt(be(B,"plans"),l)}e.shoppingList&&await Nt(be(B,"shopping_lists"),{name:`${e.shoppingList.name} (de ${t.displayName})`,ingredients:e.shoppingList.ingredients,userId:r,isShared:!0,originalOwner:t.uid,sharedAt:new Date})}catch(s){console.error("Erreur lors de l'acceptation du partage : ",s),alert("Une erreur est survenue.")}}async function WE(n){try{const e=ve(B,"shares",n);await Pt(e,{status:"accepted"})}catch(e){console.error("Erreur lors de l'acceptation de l'invitation : ",e),alert("Une erreur est survenue.")}}async function ku(n){try{const e=ve(B,"shares",n);await Pt(e,{status:"declined"})}catch(e){console.error("Erreur lors du refus du partage : ",e),alert("Une erreur est survenue.")}}async function KE(n,e){try{await sf(n,e)}catch{alert("Erreur lors de l'acceptation.")}}async function QE(n){try{await of(n)}catch{alert("Erreur lors du refus.")}}function df(){if(!Ye.list)return;const n=[...af,...cf];n.sort((e,t)=>t.createdAt.toMillis()-e.createdAt.toMillis()),n.length>0?(Ye.badge.textContent=n.length,Ye.badge.classList.remove("hidden")):Ye.badge.classList.add("hidden"),Ye.list.innerHTML="",n.length===0?Ye.list.innerHTML='<p class="text-gray-500 text-center p-4">Aucune nouvelle notification.</p>':n.forEach(e=>{const t=JE(e);Ye.list.appendChild(t)})}function JE(n){const e=document.createElement("div");e.className="p-3 border-b border-gray-100 hover:bg-gray-50";const t=document.createElement("p");t.className="text-sm font-medium text-gray-800";const r=document.createElement("p");r.className="text-xs text-gray-500 mb-3";const s=document.createElement("div");if(s.className="flex space-x-2 justify-end",n.data.type==="collaborative_plan_invite"){t.textContent="Invitation à collaborer",r.textContent=`${n.sender.displayName} vous invite à modifier son plan "${n.data.planName}".`;const i=hr("Accepter","btn-secondary",l=>{l.target.textContent="...",l.target.disabled=!0,WE(n.id)}),a=hr("Refuser","btn-ghost text-red-500",l=>{l.target.disabled=!0,ku(n.id)});s.append(i,a)}else if(n.type==="share"){t.textContent=`Partage de ${n.sender.displayName||n.sender.email}`;let i=[];n.data.plan&&i.push("planification"),n.data.shoppingList&&i.push("liste de courses"),r.textContent=`Contenu : ${i.join(" et ")}`;const a=hr("Accepter","btn-secondary",u=>{u.target.textContent="...",u.target.disabled=!0,GE(n.id,n.data,n.sender)}),l=hr("Refuser","btn-ghost text-red-500",u=>{u.target.disabled=!0,ku(n.id)});s.append(a,l)}else if(n.type==="friend_request"){t.textContent="Invitation d'ami",r.textContent=`${n.sender.displayName||n.sender.email} vous a envoyé une invitation.`;const i=hr("Accepter","btn-secondary",l=>{l.target.textContent="...",l.target.disabled=!0,KE(n.id,n.data.senderId)}),a=hr("Refuser","btn-ghost text-red-500",l=>{l.target.disabled=!0,QE(n.id)});s.append(i,a)}return e.append(t,r,s),e}function hr(n,e,t){const r=document.createElement("button");return r.className=`btn btn-xs ${e}`,r.textContent=n,r.addEventListener("click",s=>{s.stopPropagation(),t(s)}),r}function XE(n){const e=be(B,"shares"),t=mt(e,Me("receiverId","==",n),Me("status","==","pending"));lf=Es(t,async r=>{const s=[];for(const i of r.docs){const a=i.data(),l=await Yt(ve(B,"users",a.senderId));l.exists()&&s.push({type:"share",id:i.id,data:a,sender:l.data(),createdAt:a.createdAt})}af=s,df()},r=>{console.error("Erreur d'écoute des partages:",r)})}function YE(n){const e=be(B,"friend_requests"),t=mt(e,Me("receiverId","==",n),Me("status","==","pending"));uf=Es(t,async r=>{const s=[];for(const i of r.docs){const a=i.data(),l=await Yt(ve(B,"users",a.senderId));l.exists()&&s.push({type:"friend_request",id:i.id,data:a,sender:l.data(),createdAt:a.createdAt})}cf=s,df()},r=>{console.error("Erreur d'écoute des invitations d'amis:",r)})}function hf(){if(Ye.btn=document.getElementById("notifications-btn"),Ye.badge=document.getElementById("notifications-badge"),Ye.dropdown=document.getElementById("notifications-dropdown"),Ye.list=document.getElementById("notifications-list"),!Ye.btn)return;const n=lt();n&&(lf(),uf(),XE(n),YE(n),Ye.btn.addEventListener("click",e=>{e.stopPropagation(),Ye.dropdown.classList.toggle("hidden")}),document.addEventListener("click",e=>{Ye.dropdown&&!Ye.dropdown.classList.contains("hidden")&&!Ye.btn.contains(e.target)&&!Ye.dropdown.contains(e.target)&&Ye.dropdown.classList.add("hidden")}))}const ZE=Object.freeze(Object.defineProperty({__proto__:null,initNotifications:hf},Symbol.toStringTag,{value:"Module"})),tr=Gh();let Is,Do,Vo,hs,je,ws,Mo,Oo,fs,Yn,bs,Fo,Uo,ha,fa,Fi=null,Ui=null;function eI(){Is&&Is.classList.remove("hidden")}function ma(){Is&&Is.classList.add("hidden"),hs&&hs.reset()}function tI(n,e){Ui=n,Yn&&(Yn.value=e),ws&&ws.classList.remove("hidden"),Yn&&Yn.focus()}function pa(){Ui=null,ws&&ws.classList.add("hidden"),fs&&fs.reset()}function nI(n,e){Fi=n,ha&&(ha.textContent="Confirmer la suppression"),fa&&(fa.textContent=`Êtes-vous sûr de vouloir supprimer le plan "${e}" ? Cette action est irréversible.`),bs&&bs.classList.remove("hidden")}function Nu(){Fi=null,bs&&bs.classList.add("hidden")}async function rI(n){const e=Us();if(e)try{await Nt(be(tr,"plans"),{userId:e.uid,name:n,type:"personal",weeks:{},manualItems:[],defaultNumPeople:1,startDay:"Lundi",lastUpdated:new Date}),ma()}catch(t){console.error("Error creating plan: ",t),alert("Erreur lors de la création du plan.")}}async function sI(n,e){if(!(!n||!e))try{const t=ve(tr,"plans",n);await Pt(t,{name:e}),pa()}catch(t){console.error("Error renaming plan: ",t),alert("Erreur lors du renommage du plan.")}}async function iI(n){const e=Us()?.uid;if(!(!n||!e)&&confirm("Voulez-vous vraiment quitter ce plan partagé ? Il n'apparaîtra plus dans votre liste."))try{const t=ve(tr,"plans",n);await Pt(t,{collaborators:LE(e)})}catch(t){console.error("Erreur pour quitter le plan: ",t),alert("Une erreur est survenue.")}}async function oI(n){if(n)try{await Bn(ve(tr,"plans",n))}catch(e){console.error("Error deleting plan: ",e),alert("Erreur lors de la suppression du plan.")}}function ff(n){const e=Us();if(!e)return()=>{};let t=new Map;const r=()=>{n(Array.from(t.values()).sort((h,f)=>h.name.localeCompare(f.name)))},s=async h=>{const p=[h.userId,...h.collaborators||[]].map(C=>Yt(ve(tr,"users",C)));return(await Promise.all(p)).map(C=>C.exists()?C.data():{uid:C.id,displayName:"Inconnu"})},i=mt(be(tr,"plans"),Me("userId","==",e.uid)),a=Es(i,async h=>{const p=h.docChanges().map(async y=>{if(y.type==="removed")t.delete(y.doc.id);else{const C=y.doc.data(),P=await s(C);t.set(y.doc.id,{id:y.doc.id,...C,isOwner:!0,participants:P})}});await Promise.all(p),r()}),l=mt(be(tr,"plans"),Me("collaborators","array-contains",e.uid)),u=Es(l,async h=>{const p=h.docChanges().map(async y=>{if(y.type==="removed")t.delete(y.doc.id);else{const C=y.doc.data(),P=await s(C),V=P.find(N=>N.uid===C.userId);t.set(y.doc.id,{id:y.doc.id,...C,isOwner:!1,ownerName:V?.displayName||"Inconnu",participants:P})}});await Promise.all(p),r()});return()=>{a(),u()}}function mf(n){if(!je)return;const e=je.value;if(je.innerHTML="",n.length===0){const t=document.createElement("option");t.value="",t.textContent="Aucun plan personnel",t.disabled=!0,je.appendChild(t);return}n.forEach(t=>{const r=document.createElement("option");r.value=t.id;let s=t.name;t.collaborators&&t.collaborators.length>0&&(t.isOwner?s=`👑 ${t.name} [Collab]`:s=`👥 ${t.name} [Collab] (de ${t.ownerName})`),r.textContent=s,je.appendChild(r)}),e&&je.querySelector(`option[value="${e}"]`)?je.value=e:je.selectedIndex=0}function pf(){Is=document.getElementById("create-plan-modal"),Do=document.getElementById("close-create-plan-modal"),Vo=document.getElementById("cancel-create-plan-btn"),hs=document.getElementById("create-plan-form"),je=document.getElementById("plan-select"),ws=document.getElementById("rename-plan-modal"),Mo=document.getElementById("close-rename-plan-modal"),Oo=document.getElementById("cancel-rename-plan-btn"),fs=document.getElementById("rename-plan-form"),Yn=document.getElementById("new-plan-name"),bs=document.getElementById("delete-confirm-modal"),Fo=document.getElementById("cancel-delete-btn"),Uo=document.getElementById("confirm-delete-btn"),ha=document.getElementById("delete-confirm-title"),fa=document.getElementById("delete-confirm-message");const n=document.getElementById("create-plan-btn"),e=document.getElementById("rename-plan-btn"),t=document.getElementById("leave-plan-btn"),r=document.getElementById("delete-plan-btn");n&&n.addEventListener("click",eI),e&&e.addEventListener("click",()=>{if(je&&je.value){const s=je.options[je.selectedIndex];tI(je.value,s.text)}else alert("Veuillez sélectionner un plan à renommer.")}),t&&t.addEventListener("click",()=>{je&&je.value?iI(je.value):alert("Veuillez sélectionner un plan.")}),r&&r.addEventListener("click",()=>{if(je&&je.value){const s=je.options[je.selectedIndex].text;nI(je.value,s)}else alert("Veuillez sélectionner un plan à supprimer.")}),Do&&Do.addEventListener("click",ma),Vo&&Vo.addEventListener("click",ma),hs&&hs.addEventListener("submit",s=>{s.preventDefault();const i=document.getElementById("plan-name");i&&i.value&&rI(i.value)}),Mo&&Mo.addEventListener("click",pa),Oo&&Oo.addEventListener("click",pa),fs&&fs.addEventListener("submit",s=>{s.preventDefault(),Ui&&Yn.value&&sI(Ui,Yn.value)}),Fo&&Fo.addEventListener("click",Nu),Uo&&Uo.addEventListener("click",()=>{Fi&&oI(Fi).then(()=>{Nu()})})}const aI=Object.freeze(Object.defineProperty({__proto__:null,getUserPlans:ff,initPlanManagement:pf,populatePlanSelector:mf},Symbol.toStringTag,{value:"Module"}));let fr=null;function cI(){const n=document.getElementById("search-bar"),e=document.getElementById("category-tabs"),t=document.getElementById("recipe-list-container"),r=document.getElementById("add-recipe-btn");fr&&fr.destroy(),fr=new pc(B,"recipe-form-modal","recipe-form","recipe-modal-title","recipe-id","recipe-name","recipe-category","recipe-servings","recipe-prep-time","recipe-difficulty","recipe-steps","ingredients-list","add-ingredient-btn","save-recipe-btn","close-recipe-modal","cancel-recipe-btn"),fr.setOnSaveCallback(C);let s=[],i="",a="",l=null;const u=["Entrée","Plat","Accompagnement","Dessert"],h={PLAT:"bg-orange-100",DESSERT:"bg-amber-100",ENTREE:"bg-lime-100",ACCOMPAGNEMENT:"bg-stone-200","PETIT-DEJEUNER":"bg-orange-100",BOISSON:"bg-cyan-100",SAUCE:"bg-red-100"},f={PLAT:"text-orange-800",DESSERT:"text-amber-800",ENTREE:"text-lime-800",ACCOMPAGNEMENT:"text-stone-800","PETIT-DEJEUNER":"text-orange-800",BOISSON:"text-cyan-800",SAUCE:"text-red-800"},p="bg-gray-100",y="text-gray-800";async function C(){if(console.log("fetchAllRecipes called."),!!B)try{s=(await st(be(B,"recipes"))).docs.map(ne=>({id:ne.id,...ne.data()})),console.log("Fetched recipes:",s),V(),N()}catch(q){console.error("Erreur lors de la récupération des recettes: ",q)}}function P(q){i=q,V(),N()}function V(){if(!e)return;e.innerHTML="";const ne=[...new Set(s.map(Q=>Q.category||"Non classé"))].sort((Q,Z)=>{const I=w=>{const E=w.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();for(let b=0;b<u.length;b++)if(u[b].normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()===E)return b;return-1},g=I(Q),_=I(Z);return g>-1&&_>-1?g-_:g>-1?-1:_>-1?1:Q.localeCompare(Z)});!i&&ne.length>0&&(i=ne[0]),ne.forEach(Q=>{const Z=document.createElement("button"),I=Q.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toUpperCase();if(Q===i){const _=h[I]||p,w=f[I]||y;Z.className=`px-4 py-2 text-sm font-bold rounded-t-lg ${_} ${w}`}else Z.className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-tomato";Z.textContent=Q,Z.addEventListener("click",()=>P(Q)),e.appendChild(Z)})}function N(){if(!t)return;t.innerHTML="";let q=s.filter(Q=>(Q.category||"Non classé")===i);if(a){const Q=a.toLowerCase();q=q.filter(Z=>Z.name.toLowerCase().includes(Q))}if(q.sort((Q,Z)=>Q.name.localeCompare(Z.name)),q.length===0){t.innerHTML='<p class="text-gray-500 text-center p-10">Aucune recette trouvée.</p>';return}const ne=document.createElement("div");ne.className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4",q.forEach(Q=>{ne.appendChild(H(Q))}),t.appendChild(ne)}function H(q){let ne=p;if(q.category){const b=q.category.normalize("NFD").replace(/[̀-ͯ]/g,"").toUpperCase();ne=h[b]||p}const Q=document.createElement("div");Q.className=`rounded-lg shadow-sm flex flex-col p-2 ${ne}`;const Z=document.createElement("h4");Z.className="text-sm font-bold text-gray-800 truncate",Z.textContent=q.name,Z.title=q.name,Q.appendChild(Z);const I=document.createElement("p");I.className="text-xs text-gray-600 mt-1",I.textContent=`${q.difficulty||""} - Pour ${q.servings||"?"} pers.`,Q.appendChild(I);const g=document.createElement("div");g.className="flex-grow",Q.appendChild(g);const _=document.createElement("div");_.className="flex justify-end space-x-2 mt-2";const w=document.createElement("button");w.className="btn btn-outline btn-xs border-gray-400 hover:bg-gray-200",w.innerHTML='<i class="fas fa-edit"></i>',w.title="Modifier",w.addEventListener("click",()=>fr.openForm(q,"Modifier la recette")),_.appendChild(w);const E=document.createElement("button");return E.className="btn btn-ghost text-red-700 hover:bg-red-100 btn-xs",E.innerHTML='<i class="fas fa-trash-alt"></i>',E.title="Supprimer",E.addEventListener("click",()=>re(q.id,q.name)),_.appendChild(E),Q.appendChild(_),Q}async function re(q,ne){if(confirm(`Êtes-vous sûr de vouloir supprimer la recette "${ne}" ?`))try{await Bn(ve(B,"recipes",q)),C()}catch(Q){console.error("Erreur lors de la suppression: ",Q)}}r.addEventListener("click",()=>fr.openForm(null,"Ajouter une recette")),n.addEventListener("input",q=>{const ne=q.target.value;if(!a&&ne&&(l=i),a=ne,a){const Q=a.toLowerCase(),Z=s.find(I=>I.name.toLowerCase().includes(Q));Z&&(i=Z.category||"Non classé")}else l&&(i=l,l=null);V(),N()}),B&&C()}const lI=Object.freeze(Object.defineProperty({__proto__:null,default:cI},Symbol.toStringTag,{value:"Module"}));let Qn=null;function uI(){const n={mealPlanGrid:document.getElementById("meal-plan-grid"),currentWeekDisplay:document.getElementById("current-week-display"),prevWeekBtn:document.getElementById("prev-week-btn"),nextWeekBtn:document.getElementById("next-week-btn"),clearMenuBtn:document.getElementById("clear-menu-btn"),shoppingListContainer:document.getElementById("shopping-list"),startDaySelect:document.getElementById("start-day-select"),defaultServingsControl:document.getElementById("default-servings-control"),mealSelectModal:document.getElementById("meal-select-modal"),closeMealSelectModalBtn:document.getElementById("close-meal-select-modal"),mealSelectModalTitle:document.getElementById("meal-select-modal-title"),mealSelectList:document.getElementById("meal-select-list"),recipeFormModal:document.getElementById("edit-recipe-form-modal"),closeRecipeModalBtn:document.getElementById("close-edit-recipe-modal"),cancelRecipeBtn:document.getElementById("edit-cancel-recipe-btn"),recipeForm:document.getElementById("edit-recipe-form"),addItemInput:document.getElementById("add-item-input"),addItemBtn:document.getElementById("add-item-btn"),addItemResults:document.getElementById("add-item-results"),importListBtn:document.getElementById("import-list-btn"),importListModal:document.getElementById("import-list-modal"),closeImportListModalBtn:document.getElementById("close-import-list-modal"),importListContainer:document.getElementById("import-list-container"),exportTxtBtn:document.getElementById("export-txt-btn"),exportPdfBtn:document.getElementById("export-pdf-btn"),sharePlanBtn:document.getElementById("share-plan-btn"),planSelect:document.getElementById("plan-select")};function e(A,S){const M=document.createElement("div");M.className="flex items-center space-x-2";const D=document.createElement("button");D.className="btn btn-outline btn-xs",D.textContent="-";const x=document.createElement("span");x.className="font-medium text-center w-6",x.textContent=A;const O=document.createElement("button");return O.className="btn btn-outline btn-xs",O.textContent="+",D.addEventListener("click",()=>{let z=parseInt(x.textContent,10);z>1&&(z--,x.textContent=z,S(z))}),O.addEventListener("click",()=>{let z=parseInt(x.textContent,10);z++,x.textContent=z,S(z)}),M.appendChild(D),M.appendChild(x),M.appendChild(O),M}function t(A,S,M,D=!1){const x=document.createElement("div");x.className="flex flex-col items-center justify-center h-full";const O=document.createElement("button");O.className="btn btn-ghost btn-xs p-0 h-4 flex items-center justify-center w-full",O.innerHTML='<i class="fas fa-plus"></i>',O.disabled=D;const z=document.createElement("span");z.className="font-medium text-center text-sm my-1",z.textContent=A;const j=document.createElement("button");return j.className="btn btn-ghost btn-xs p-0 h-4 flex items-center justify-center w-full",j.innerHTML='<i class="fas fa-minus"></i>',j.disabled=D,S&&(O.classList.add("text-white"),z.classList.add("text-white"),j.classList.add("text-white")),D||(O.addEventListener("click",()=>{let X=parseInt(z.textContent,10);X++,z.textContent=X,M(X)}),j.addEventListener("click",()=>{let X=parseInt(z.textContent,10);X>1&&(X--,z.textContent=X,M(X))})),x.appendChild(O),x.appendChild(z),x.appendChild(j),x}Qn&&Qn.destroy(),Qn=new pc(B,"edit-recipe-form-modal","edit-recipe-form","edit-recipe-modal-title","edit-recipe-id","edit-recipe-name","edit-recipe-category","edit-recipe-servings","edit-recipe-prep-time","edit-recipe-difficulty","edit-recipe-steps","edit-ingredients-list","edit-add-ingredient-btn","edit-save-recipe-btn","close-edit-recipe-modal","edit-cancel-recipe-btn"),Qn.setOnSaveCallback(async()=>{await re();for(const A in i){const S=i[A];if(Array.isArray(S)){const M=S.map(D=>{if(D&&D.id){const x=f.find(O=>O.id===D.id);return x?{...x}:D}return D});i[A]=M}}ne(n.mealPlanGrid,{menuData:i,servingsData:a,remarksData:l,defaultNumPeople:y,startDay:s},!1),await xe()});let r=1,s="Lundi",i={},a={},l={};const u=[];let h=null,f=[],p=[],y=1,C=[],P=null;function V(A){return A?A.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase():""}async function N(A){const S=document.getElementById("unit-select-modal"),M=document.getElementById("unit-modal-title"),D=document.getElementById("unit-modal-list"),x=document.getElementById("unit-modal-cancel");return M.textContent=`Choisir une unité pour "${A}"`,D.innerHTML="",new Promise((O,z)=>{const j=["g","kg","ml","l","pièce(s)","c.à.s.","c.à.c.","pincée(s)"],X=J=>{S.classList.add("hidden"),O(J)};j.forEach(J=>{const ue=document.createElement("button");ue.className="btn btn-outline",ue.textContent=J,ue.addEventListener("click",()=>X(J)),D.appendChild(ue)});const he=()=>{S.classList.add("hidden"),z()};x.addEventListener("click",he,{once:!0}),S.addEventListener("click",J=>{J.target===S&&he()},{once:!0}),S.classList.remove("hidden")})}async function H(){if(B)try{p=(await st(be(B,"ingredients"))).docs.map(S=>({id:S.id,...S.data()})),p.sort((S,M)=>S.name.localeCompare(M.name))}catch(A){console.error("Erreur lors de la récupération des ingrédients: ",A)}}async function re(){if(!B)return;const A=be(B,"recipes");try{f=(await st(A)).docs.map(M=>({id:M.id,...M.data()}))}catch(S){console.error("Error loading available meals from Firebase:",S)}}function q(){if(!P)i={},a={},l={},y=1,s="Lundi";else{const A=P.weeks?P.weeks[r]||{}:{};i=A.menuData||{},a=A.servingsData||{},l=A.remarksData||{},y=P.defaultNumPeople||1,s=P.startDay||"Lundi"}if(n.startDaySelect&&(n.startDaySelect.value=s),n.defaultServingsControl){n.defaultServingsControl.innerHTML="";const A=e(y,async S=>{if(y=S,P){const M=ve(B,"plans",P.id);await Pt(M,{defaultNumPeople:S,lastUpdated:new Date})}});n.defaultServingsControl.appendChild(A)}Bt(),ne(n.mealPlanGrid,{menuData:i,servingsData:a,remarksData:l,defaultNumPeople:y,startDay:s},!1),xe()}function ne(A,S,M=!1){if(!A)return;const D=S.menuData||{},x=S.servingsData||{},O=S.remarksData||{},z=S.defaultNumPeople||1,j=S.startDay||"Lundi",X=document.createDocumentFragment(),he=["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"],J=["lunch","dinner"],ue=5,Se=he.indexOf(j);[...he.slice(Se),...he.slice(0,Se)].forEach(yt=>{const it=he.indexOf(yt),ze=document.createElement("div");ze.className="grid grid-cols-[100px_35px_repeat(5,_minmax(0,_1fr))_35px_repeat(5,_minmax(0,_1fr))] items-stretch border-b border-gray-300";const It=document.createElement("div");It.className="font-bold p-2 flex items-center justify-center bg-gray-100 text-sm border-r border-gray-300",It.textContent=yt.toUpperCase(),ze.appendChild(It),J.forEach(_t=>{const Ge=`${it}-${_t}`,xt=x[Ge]||z,dt=x.hasOwnProperty(Ge),we=document.createElement("div"),Dt=t(xt,dt,wt=>{Hr(Ge,wt)},M);let Vt="border-r border-gray-300 flex items-center justify-center transition-colors duration-300";dt?Vt+=" bg-tomato":Vt+=_t==="lunch"?" bg-amber-50":" bg-stone-100",we.className=Vt,we.appendChild(Dt),ze.appendChild(we);for(let wt=0;wt<ue;wt++){const Mt=`${it}-${_t}-${wt}`,fn=D[Mt],vt=document.createElement("div"),$n=pe(Mt);let Hn="meal-slot p-1 min-h-[70px] flex flex-col justify-start border-r border-gray-300";if(Hn+=_t==="lunch"?" bg-amber-50":" bg-stone-100",vt.className=Hn,vt.dataset.slotId=Mt,$n==="Remarque")vt.appendChild(oe(Mt,O,M));else if(Array.isArray(fn)&&fn.length>0){const kt=document.createElement("div");kt.className="w-full",fn.forEach((mn,Tt)=>{kt.appendChild(ke(mn,Mt,Tt,M))}),vt.appendChild(kt),M||vt.appendChild(He(Mt,!0))}else M||vt.appendChild(He(Mt,!1));ze.appendChild(vt)}}),X.appendChild(ze)}),A.innerHTML="",A.appendChild(X),M||ee()}async function Q(){const A=lt();if(!B||!A)return[];try{const S=mt(be(B,"shopping_lists"),Me("userId","==",A));return(await st(S)).docs.map(O=>({id:O.id,...O.data()})).filter(O=>O.isShared!==!0)}catch(S){return console.error("Erreur de chargement des listes de courses sauvegardées: ",S),[]}}async function Z(){const A=await Q();if(n.importListContainer.innerHTML="",A.length===0){n.importListContainer.innerHTML='<p class="text-center text-gray-500">Aucune liste sauvegardée.</p>';return}A.forEach(S=>{const M=document.createElement("button");M.className="w-full text-left p-2 hover:bg-gray-100 rounded-lg transition-colors duration-150",M.textContent=S.name,M.addEventListener("click",()=>{confirm(`Voulez-vous vraiment importer les ingrédients de la liste "${S.name}" ?`)&&(S.ingredients.forEach(D=>{const x=parseFloat(String(D.quantity).replace(",","."))||0;E(D.name,x,D.unit)}),I())}),n.importListContainer.appendChild(M)}),n.importListModal.classList.remove("hidden")}function I(){n.importListModal.classList.add("hidden")}function g(){n.addItemInput?.addEventListener("input",()=>{const A=n.addItemInput.value.toLowerCase(),S=n.addItemResults;if(S.innerHTML="",!A){S.classList.add("hidden");return}p.filter(x=>x.name.toLowerCase().includes(A)).forEach(x=>{const O=document.createElement("div");O.className="p-2 hover:bg-gray-100 cursor-pointer",O.textContent=x.name,O.addEventListener("click",()=>{E(x.name,1,x.unit),n.addItemInput.value="",S.classList.add("hidden")}),S.appendChild(O)});const D=document.createElement("div");D.className="p-2 bg-green-50 hover:bg-green-200 cursor-pointer font-bold text-green-700",D.textContent=`+ Créer "${n.addItemInput.value}"`,D.addEventListener("click",async()=>{const x=n.addItemInput.value;try{const O=await N(x);await Nt(be(B,"ingredients"),{name:x,unit:O}),await H(),E(x,1,O),n.addItemInput.value="",S.classList.add("hidden")}catch{}}),S.appendChild(D),S.classList.remove("hidden")}),n.addItemBtn?.addEventListener("click",()=>{const A=n.addItemInput.value;A&&(E(A,1,""),n.addItemInput.value="",n.addItemResults.classList.add("hidden"))}),document.addEventListener("click",A=>{n.addItemInput&&!n.addItemInput.contains(A.target)&&!n.addItemResults.contains(A.target)&&n.addItemResults.classList.add("hidden")})}function _(){if(u.length===0){alert("La liste de courses est vide.");return}const A=u.reduce((x,O)=>{const z=O.category||"Inconnue";return x[z]||(x[z]=[]),x[z].push(O),x},{}),S=Object.keys(A).sort((x,O)=>x==="Inconnue"?1:O==="Inconnue"?-1:x.localeCompare(O));let M=`Liste de courses - GustoPlan

`;S.forEach(x=>{M+=`--- ${x.toUpperCase()} ---
`,A[x].sort((z,j)=>z.name.localeCompare(j.name)).forEach(z=>{let X=`${Number.isInteger(z.totalQuantity)?z.totalQuantity:parseFloat(z.totalQuantity.toFixed(2))} ${z.unit||""} ${z.name}`;if(z.sources&&z.sources.length>0){const he=z.sources.reduce((ue,Se)=>{const Le=`${Se.recipeName} (${Se.day} ${Se.time})`;return ue[Le]||(ue[Le]=0),ue[Le]+=Se.quantity,ue},{}),J=Object.keys(he).join(" / ");X+=` *** ${J} ***`}M+=X+`
`}),M+=`
`});const D=new Blob([M],{type:"text/plain;charset=utf-8"});saveAs(D,"liste-de-courses.txt")}function w(){if(u.length===0){alert("La liste de courses est vide.");return}const{jsPDF:A}=window.jspdf,S=new A,M=u.reduce((X,he)=>{const J=he.category||"Inconnue";return X[J]||(X[J]=[]),X[J].push(he),X},{}),D=Object.keys(M).sort((X,he)=>X==="Inconnue"?1:he==="Inconnue"?-1:X.localeCompare(he));S.setFontSize(18),S.text("Liste de courses - GustoPlan",14,22);let x=35;const O=S.internal.pageSize.height,z=20,j=()=>{x>O-z&&(S.addPage(),x=20)};D.forEach(X=>{j(),S.setFontSize(14),S.setFont(void 0,"bold"),S.text(`--- ${X.toUpperCase()} ---`,14,x),x+=8,S.setFont(void 0,"normal"),M[X].sort((J,ue)=>J.name.localeCompare(ue.name)).forEach(J=>{j(),S.setFontSize(12);const ue=Number.isInteger(J.totalQuantity)?J.totalQuantity:parseFloat(J.totalQuantity.toFixed(2));if(S.text(`${ue} ${J.unit||""} ${J.name}`,14,x),x+=6,J.sources&&J.sources.length>0){const Se=J.sources.reduce((Le,yt)=>{const it=`${yt.recipeName} (${yt.day} ${yt.time})`;return Le[it]||(Le[it]=0),Le[it]+=yt.quantity,Le},{});S.setFontSize(9),S.setTextColor(100);for(const Le in Se)j(),S.text(`  * ${Le}`,18,x),x+=5;S.setTextColor(0)}x+=2}),x+=5}),S.save("liste-de-courses.pdf")}async function E(A,S,M,D=!1){if(!P)return alert("Veuillez sélectionner un plan.");const x=ve(B,"plans",P.id);try{await NE(B,async O=>{const z=await O.get(x);if(!z.exists())throw"Le plan n'existe plus.";const j=z.data().manualItems||[],X=`${A.trim().toLowerCase()}_${M||""}`,he=j.findIndex(ue=>`${ue.name.trim().toLowerCase()}_${ue.unit||""}`===X);if(he>-1)j[he].totalQuantity+=S;else{const ue=p.find(Se=>Se.name.toLowerCase()===A.trim().toLowerCase());j.push({name:A.trim(),totalQuantity:S,unit:M,source:"manual",category:ue?ue.category:"Inconnue"})}const J=j.filter(ue=>ue.totalQuantity!==0);O.update(x,{manualItems:J,lastUpdated:new Date})})}catch(O){console.error("Erreur transactionnelle lors de l'ajustement de l'ingrédient: ",O),alert("Une erreur de synchronisation est survenue. Veuillez réessayer.")}}function b(A){const S=A?A.toLowerCase():"";return S.includes("g")||S.includes("ml")?10:1}function v(){const A=n.shoppingListContainer;if(!A)return;if(A.innerHTML="",u.length===0){A.innerHTML='<p class="text-center text-gray-500 italic py-4">Votre liste de courses est vide.</p>';return}const S=u.reduce((D,x)=>{const O=x.category||"Inconnue";return D[O]||(D[O]=[]),D[O].push(x),D},{});Object.keys(S).sort((D,x)=>D==="Inconnue"?1:x==="Inconnue"?-1:D.localeCompare(x)).forEach(D=>{const x=document.createElement("h4");x.className="text-sm font-bold text-stone-800 bg-stone-200 mt-4 mb-2 px-3 py-1 rounded-md",x.textContent=D,A.appendChild(x);const O=document.createElement("ul");O.className="space-y-2",S[D].sort((j,X)=>j.name.localeCompare(X.name)).forEach(j=>{const X=document.createElement("li");let he="p-2 rounded";X.className=he+(j.source==="manual"?" bg-lemon":" bg-gray-50");const J=document.createElement("div");J.className="flex justify-between items-center";const ue=document.createElement("span");ue.className="flex-grow text-sm font-medium",ue.textContent=j.name,J.appendChild(ue);const Se=document.createElement("div");Se.className="flex items-center space-x-2 mx-2";const Le=document.createElement("span");Le.className="font-medium w-20 text-center text-sm";const yt=Number.isInteger(j.totalQuantity)?j.totalQuantity:parseFloat(j.totalQuantity.toFixed(2));Le.textContent=`${yt} ${j.unit||""}`.trim();const it=document.createElement("div");it.className="flex flex-col";const ze=document.createElement("button");ze.className="btn btn-outline btn-xs rounded-b-none",ze.textContent="+",ze.addEventListener("click",async()=>{const Ge=b(j.unit);await E(j.name,Ge,j.unit)});const It=document.createElement("button");It.className="btn btn-outline btn-xs rounded-t-none -mt-px",It.textContent="-",It.addEventListener("click",async()=>{const Ge=b(j.unit);await E(j.name,-Ge,j.unit)}),it.appendChild(ze),it.appendChild(It),Se.appendChild(Le),Se.appendChild(it),J.appendChild(Se);const _t=document.createElement("button");if(_t.className="delete-item-btn text-red-500 hover:text-red-700",_t.innerHTML='<i class="fas fa-trash-alt"></i>',_t.addEventListener("click",()=>{E(j.name,-j.totalQuantity,j.unit,!0)}),J.appendChild(_t),X.appendChild(J),j.sources&&j.sources.length>0){const Ge=document.createElement("div");Ge.className="p-2 mt-1 ml-4 rounded-md bg-stone-100";const xt=j.sources.reduce((dt,we)=>{const Dt=`${we.recipeName} (${we.day} ${we.time})`;return dt[Dt]||(dt[Dt]=0),dt[Dt]+=we.quantity,dt},{});for(const dt in xt){const we=document.createElement("span");we.className="block text-xs text-gray-500",we.textContent=`↳ ${dt}`,Ge.appendChild(we)}X.appendChild(Ge)}O.appendChild(X)}),A.appendChild(O)})}async function xe(){if(!P){u.length=0,v();return}const A=P.manualItems?JSON.parse(JSON.stringify(P.manualItems)):[],S=new Map(A.map(x=>[`${x.name.trim().toLowerCase()}_${x.unit||""}`,x])),M=["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];if(P.weeks)for(const x in P.weeks){const O=P.weeks[x],z=O.menuData||{},j=O.servingsData||{};for(const X in z){const he=z[X];if(!Array.isArray(he))continue;const[J,ue]=X.split("-"),Se=parseInt(J,10),Le=M[Se]||"Jour inconnu",yt=ue==="lunch"?"midi":"soir",it=`${Se}-${ue}`,ze=parseInt(j[it]||P.defaultNumPeople,10);for(const It of he){const Ge=f.find(dt=>dt.id===It.id)||It;if(!Ge||!Array.isArray(Ge.ingredients))continue;const xt=Ge.servings||1;xt<=0||Ge.ingredients.forEach(dt=>{const{name:we,quantity:Dt,unit:Vt}=dt;if(!we||!Dt)return;const wt=p.find(Tt=>Tt.name.toLowerCase()===we.trim().toLowerCase()),Mt=wt?wt.category:"Inconnue",fn=parseFloat(String(Dt).replace(",","."));if(isNaN(fn))return;const $n=fn/xt*ze,Hn=Vt||"",kt=`${we.trim().toLowerCase()}_${Hn}`,mn={recipeName:Ge.name,day:`${Le} (S${x})`,time:yt,quantity:$n};if(S.has(kt)){const Tt=S.get(kt);Tt.totalQuantity+=$n,Tt.source==="manual"&&(Tt.source="mixed"),Array.isArray(Tt.sources)?Tt.sources.push(mn):Tt.sources=[mn]}else S.set(kt,{name:we.trim(),totalQuantity:$n,unit:Hn,source:"plan",category:Mt,sources:[mn]})})}}}const D=Array.from(S.values()).filter(x=>x.totalQuantity>0);u.length=0,u.push(...D.sort((x,O)=>x.name.localeCompare(O.name))),v()}function se(A){const S=pe(A);if(!S||!n.mealSelectModal)return;n.mealSelectModalTitle.textContent=`Sélectionner : ${S}`,n.mealSelectList.innerHTML="";const M=document.createElement("input");M.type="text",M.placeholder="Rechercher dans la catégorie...",M.className="w-full p-2 mb-4 border border-gray-300 rounded-lg",n.mealSelectList.appendChild(M);const D=V(S),x=f.filter(j=>V(j.category)===D).sort((j,X)=>j.name.localeCompare(X.name)),O=document.createElement("div");O.className="space-y-1 max-h-80 overflow-y-auto",n.mealSelectList.appendChild(O);function z(j=""){O.innerHTML="";const X=j.toLowerCase(),he=x.filter(J=>J.name.toLowerCase().includes(X));he.length===0?O.innerHTML='<p class="text-gray-500 p-4">Aucun plat ne correspond à votre recherche.</p>':he.forEach(J=>{const ue=document.createElement("button");ue.className="w-full text-left p-2 hover:bg-gray-100 rounded-lg transition-colors duration-150";const Se=document.createElement("p");Se.className="font-medium text-gray-800 text-sm",Se.textContent=J.name,ue.appendChild(Se),ue.addEventListener("click",()=>{W(A,J),G()}),O.appendChild(ue)})}M.addEventListener("input",j=>z(j.target.value)),z(),n.mealSelectModal.classList.remove("hidden"),M.focus()}function G(){n.mealSelectModal&&n.mealSelectModal.classList.add("hidden")}function me(A){h=A.target.closest(".meal-card");const S=h.closest(".meal-slot").dataset.slotId;A.dataTransfer.setData("text/plain",S),setTimeout(()=>{h&&(h.style.opacity="0.5")},0)}function de(){h&&(h.style.opacity="1",h=null)}function Ae(A){A.preventDefault();const S=A.target.closest(".meal-slot");S&&pe(S.dataset.slotId)!=="Remarque"&&S.classList.add("bg-gray-200")}function Te(A){const S=A.target.closest(".meal-slot");S&&S.classList.remove("bg-gray-200")}async function Ue(A){A.preventDefault();const S=A.dataTransfer.getData("text/plain"),M=A.target.closest(".meal-slot");if(M){M.classList.remove("bg-gray-200");const D=M.dataset.slotId,x=pe(D);if(x==="Remarque")return;if(S&&D&&S!==D){const O=i[S],z=pe(S);if(V(z)!==V(x)){alert(`Action impossible : un(e) "${z}" ne peut pas aller dans la catégorie "${x}".`);return}const j=i[D];i[D]=O,j?i[S]=j:delete i[S],ne(n.mealPlanGrid,{menuData:i,servingsData:a,remarksData:l,defaultNumPeople:y,startDay:s},!1),await saveCurrentPlan(),await xe()}}}function pe(A){switch(A.split("-")[2]){case"0":return"Entrée";case"1":return"Plat";case"2":return"Accompagnement";case"3":return"Dessert";case"4":return"Remarque";default:return""}}function ke(A,S,M,D=!1){const x=document.createElement("div");x.className="meal-card p-1 flex flex-col items-center bg-white rounded shadow-sm text-center relative w-full mb-1",D||(x.classList.add("cursor-grab"),x.draggable=!0);const O=document.createElement("span");if(O.className="text-xs font-medium p-1 break-words w-full",O.textContent=A.name,x.appendChild(O),!D){const X=document.createElement("div");X.className="absolute top-0 left-0 flex";const he=document.createElement("button");he.className="edit-meal-btn text-gray-600 hover:text-gray-800 hidden px-1 py-0.5",he.innerHTML='<i class="fas fa-pencil-alt fa-xs"></i>',he.title="Modifier la recette",he.addEventListener("click",ue=>{ue.stopPropagation();const Se=f.find(Le=>Le.id===A.id);Qn.openForm(Se||A,"Modifier la recette")}),X.appendChild(he);const J=document.createElement("button");J.className="delete-meal-btn text-red-700 hover:text-red-900 hidden px-1 py-0.5",J.innerHTML='<i class="fas fa-times-circle fa-xs"></i>',J.title="Retirer du planning",J.addEventListener("click",ue=>{ue.stopPropagation(),K(S,M)}),X.appendChild(J),x.appendChild(X),x.addEventListener("mouseenter",()=>{he.classList.remove("hidden"),J.classList.remove("hidden")}),x.addEventListener("mouseleave",()=>{he.classList.add("hidden"),J.classList.add("hidden")})}const z=document.createElement("div");z.className="absolute bottom-1 right-1";const j=document.createElement("button");return j.className="info-meal-btn bg-gray-500 text-white hover:bg-gray-600 rounded w-3 h-3 flex items-center justify-center shadow-sm",j.innerHTML='<i class="fas fa-plus fa-xs"></i>',j.title="Plus d'infos",j.dataset.slotId=S,j.dataset.mealIndex=M,z.appendChild(j),x.appendChild(z),x}function Ne(A,S){const M=A.classList.contains("info-open");if(document.querySelectorAll(".planner-ingredient-tooltip").forEach(D=>D.remove()),document.querySelectorAll(".info-meal-btn").forEach(D=>{D.classList.remove("info-open"),D.innerHTML='<i class="fas fa-plus fa-xs"></i>'}),!M){A.innerHTML='<i class="fas fa-times fa-xs"></i>',A.classList.add("info-open");const D=document.createElement("div");if(D.className="planner-ingredient-tooltip z-50 w-64 p-3 bg-white border border-gray-200 rounded-lg shadow-lg text-left text-sm",S.ingredients&&S.ingredients.length>0){if(S.servings&&S.servings>0){const J=document.createElement("p");J.className="mb-2 text-sm text-gray-600 flex items-center",J.innerHTML=`<i class="fas fa-users mr-2"></i> Pour ${S.servings} ${S.servings>1?"personnes":"personne"}`,D.appendChild(J)}const X=document.createElement("h4");X.className="font-bold mb-2 text-gray-800",X.textContent="Ingrédients :",D.appendChild(X);const he=document.createElement("ul");he.className="space-y-1 text-gray-600",S.ingredients.forEach(J=>{const ue=document.createElement("li");ue.textContent=`• ${J.quantity||""} ${J.unit||""} ${J.name}`.trim(),he.appendChild(ue)}),D.appendChild(he)}else D.textContent="Aucun ingrédient spécifié pour cette recette.";document.body.appendChild(D);const x=A.closest(".meal-card").getBoundingClientRect(),O=D.getBoundingClientRect();let z=x.right+10;z+O.width>window.innerWidth&&(z=x.left-O.width-10);let j=x.top;j+O.height>window.innerHeight&&(j=x.bottom-O.height),j<10&&(j=10),D.style.position="fixed",D.style.left=`${z}px`,D.style.top=`${j}px`}}function He(A,S=!1){const M=document.createElement("div"),D=document.createElement("button");return S?(M.className="w-full flex justify-center pt-1",D.className="add-more-meal-btn text-gray-400 hover:text-green-500 transition-colors duration-150",D.innerHTML='<i class="fas fa-plus-circle"></i>',D.title="Ajouter une autre recette"):(M.className="flex items-center justify-center h-full",D.className="add-meal-btn text-green-500 hover:text-green-700 transition-transform duration-150 hover:scale-125",D.innerHTML='<i class="fas fa-plus-circle text-lg"></i>'),D.addEventListener("click",()=>se(A)),M.appendChild(D),M}function oe(A,S,M=!1){if(M){const x=document.createElement("p");return x.className="w-full h-full p-1 text-xs text-gray-700",x.textContent=S[A]||"",x}const D=document.createElement("textarea");return D.className="w-full h-full p-1 text-xs bg-transparent border-0 rounded focus:outline-none focus:ring-1 focus:ring-tomato resize-none",D.placeholder="Remarque...",D.value=l[A]||"",D.addEventListener("change",x=>{const O=x.target.value;O?l[A]=O:delete l[A],saveCurrentPlan()}),D}function ee(){document.querySelectorAll(".meal-card").forEach(A=>{A.addEventListener("dragstart",me),A.addEventListener("dragend",de)}),document.querySelectorAll(".meal-slot").forEach(A=>{A.addEventListener("dragover",Ae),A.addEventListener("dragleave",Te),A.addEventListener("drop",Ue)})}async function W(A,S){const M=JSON.parse(JSON.stringify(i)),D=M[A];Array.isArray(D)?D.push({...S}):M[A]=[S];const x=ve(B,"plans",P.id);try{await Pt(x,{[`weeks.${r}.menuData`]:M,lastUpdated:new Date}),G()}catch(O){console.error("Erreur lors de l'ajout de la recette: ",O),alert("Une erreur est survenue.")}}async function K(A,S){if(!P||!i[A]||!Array.isArray(i[A]))return;const M=JSON.parse(JSON.stringify(i));M[A].splice(S,1),M[A].length===0&&delete M[A];const D=ve(B,"plans",P.id);try{await Pt(D,{[`weeks.${r}.menuData`]:M,lastUpdated:new Date})}catch(x){console.error("Erreur lors de la suppression de la recette: ",x),alert("Une erreur est survenue.")}}async function le(){if(confirm("Voulez-vous vraiment vider le menu de cette semaine ?")){const A={id:availablePlans.length>0?availablePlans[0].id:`${lt()}_semaine-${r}`,name:availablePlans.length>0?availablePlans[0].name:"Mon plan",menuData:{},servingsData:{},remarksData:{},defaultNumPeople:y,startDay:s,lastUpdated:new Date};loadPlan(A),availablePlans.length>0?availablePlans[0]=A:availablePlans.push(A),await saveCurrentPlan()}}function Ce(A){A>=1&&A<=52&&(r=A,q())}function Bt(){n.currentWeekDisplay&&(n.currentWeekDisplay.textContent=`Semaine ${r}`)}function Zt(){n.prevWeekBtn?.addEventListener("click",()=>Ce(r-1)),n.nextWeekBtn?.addEventListener("click",()=>Ce(r+1)),n.clearMenuBtn?.addEventListener("click",le),n.startDaySelect?.addEventListener("change",A=>{s=A.target.value,P&&(P.startDay=s),ne(n.mealPlanGrid,{menuData:i,servingsData:a,remarksData:l,defaultNumPeople:y,startDay:s},!1),saveCurrentPlan()}),n.planSelect?.addEventListener("change",Lt),n.closeMealSelectModalBtn?.addEventListener("click",G),n.mealSelectModal?.addEventListener("click",A=>{A.target===n.mealSelectModal&&G()}),n.closeRecipeModalBtn?.addEventListener("click",()=>Qn.closeForm()),n.cancelRecipeBtn?.addEventListener("click",()=>Qn.closeForm()),n.importListBtn?.addEventListener("click",Z),n.closeImportListModalBtn?.addEventListener("click",I),n.importListModal?.addEventListener("click",A=>{A.target===n.importListModal&&I()}),n.exportTxtBtn?.addEventListener("click",_),n.exportPdfBtn?.addEventListener("click",w),n.mealPlanGrid?.addEventListener("click",A=>{const S=A.target.closest(".info-meal-btn");if(S){const M=S.dataset.slotId,D=parseInt(S.dataset.mealIndex,10);if(M&&!isNaN(D)){const x=i[M]?.[D];x&&Ne(S,x)}}}),n.sharePlanBtn?.addEventListener("click",()=>{if(!P){alert("Veuillez sélectionner un plan à partager.");return}yc({plan:P})})}function en(A=""){return A.split(" ").map(D=>D[0]).join("").substring(0,2).toUpperCase()}function hn(A=[]){const S=document.getElementById("collaborators-bar"),M=document.getElementById("name-tooltip");if(!(!S||!M)){if(S.innerHTML="",A.length<=1){S.classList.add("hidden");return}A.forEach(D=>{const x=document.createElement("div");x.className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-300 text-white font-bold text-xs ring-2 ring-white cursor-pointer",x.dataset.name=D.displayName||"Inconnu",D.photoURL?x.innerHTML=`<img src="${D.photoURL}" alt="${D.displayName}" class="w-full h-full rounded-full object-cover">`:x.textContent=en(D.displayName),x.addEventListener("mouseenter",O=>{M.textContent=O.currentTarget.dataset.name,M.classList.remove("hidden");const z=O.currentTarget.getBoundingClientRect();M.style.left=`${z.left+z.width/2-M.offsetWidth/2}px`,M.style.top=`${z.top-M.offsetHeight-5}px`}),x.addEventListener("mouseleave",()=>{M.classList.add("hidden")}),S.appendChild(x)}),S.classList.remove("hidden")}}function Lt(){const A=n.planSelect.value;P=C.find(x=>x.id===A)||null;const S=document.getElementById("delete-plan-btn"),M=document.getElementById("rename-plan-btn"),D=document.getElementById("leave-plan-btn");S&&(S.style.display=P&&P.isOwner?"inline-flex":"none"),M&&(M.style.display=P&&P.isOwner?"inline-flex":"none"),D&&(D.style.display=P&&!P.isOwner?"inline-flex":"none"),hn(P?.participants),P&&(P.manualItems=P.manualItems||[]),q()}async function Hr(A,S){S===y?delete a[A]:a[A]=S,ne(n.mealPlanGrid,{menuData:i,servingsData:a,remarksData:l,defaultNumPeople:y,startDay:s},!1),await saveCurrentPlan(),await xe()}async function Bs(){return B?(pf(),Zt(),g(),await H(),await re(),await re(),ff(S=>{C=S,mf(S),Lt()})):void 0}const et=Bs();return async()=>{const A=await et;typeof A=="function"&&A()}}const dI=Object.freeze(Object.defineProperty({__proto__:null,default:uI},Symbol.toStringTag,{value:"Module"}));function hI(){const n=gf();return ga(),()=>{typeof n=="function"&&n()}}async function ga(){const n=document.getElementById("received-shares-container"),e=lt();if(!(!e||!n)){n.innerHTML='<p class="text-gray-500">Chargement des partages reçus...</p>';try{const t=mt(be(B,"plans"),Me("userId","==",e),Me("isShared","==",!0)),r=mt(be(B,"plans"),Me("collaborators","array-contains",e)),[s,i]=await Promise.all([st(t),st(r)]);let a=[];if(s.forEach(l=>a.push({id:l.id,type:"Planification (Copie)",...l.data()})),i.forEach(l=>a.push({id:l.id,type:"Planification (Collaboratif)",...l.data()})),a.length===0){n.innerHTML=`<p class="text-gray-500">Vous n'avez aucun contenu partagé par d'autres utilisateurs.</p>`;return}a.sort((l,u)=>(u.sharedAt?.seconds||u.lastUpdated?.seconds||0)-(l.sharedAt?.seconds||l.lastUpdated?.seconds||0)),n.innerHTML="";for(const l of a){const u=l.originalOwnerId||l.userId;if(!u)continue;const h=await Yt(ve(B,"users",u)),f=h.exists()?h.data().displayName:"Utilisateur inconnu";n.appendChild(fI(l,f))}}catch(t){console.error("Erreur lors du chargement des partages reçus : ",t),n.innerHTML='<p class="text-red-500">Une erreur est survenue.</p>'}}}function fI(n,e){const t=document.createElement("div");t.className="bg-white rounded-lg p-4 flex justify-between items-center shadow-sm";const r=document.createElement("div"),s=document.createElement("p");s.className="font-bold text-gray-800";let i="";n.type.includes("Collaboratif")?i=' <span class="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Collab</span>':n.type.includes("Copie")&&(i=' <span class="text-xs font-medium bg-gray-200 text-gray-800 px-2 py-1 rounded-full">Copie</span>'),s.innerHTML=`${n.name}${i}`;const a=document.createElement("p");a.className="text-sm text-gray-500 mt-1";const l=n.sharedAt?new Date(n.sharedAt.seconds*1e3).toLocaleDateString("fr-FR"):n.lastUpdated?new Date(n.lastUpdated.seconds*1e3).toLocaleDateString("fr-FR"):"date inconnue";a.textContent=`Partagé par ${e} le ${l}`,r.appendChild(s),r.appendChild(a),t.appendChild(r);const u=document.createElement("button");return u.className="btn btn-ghost text-red-500 btn-sm",u.innerHTML='<i class="fas fa-trash"></i>',u.title="Supprimer ce contenu partagé",u.addEventListener("click",()=>mI(n.id,n.type)),t.appendChild(u),t}async function mI(n,e){if(confirm(`Voulez-vous vraiment supprimer cette ${e.toLowerCase()} partagée ?`))try{const t=e.startsWith("Planification")?"plans":"shopping_lists",r=ve(B,t,n),s=await Yt(r);s.exists()&&s.data().userId===lt()?(await Bn(r),ga()):(alert("Vous n'avez pas la permission de supprimer cet élément ou il a déjà été supprimé."),ga())}catch(t){console.error("Erreur de suppression: ",t),alert("Une erreur est survenue.")}}async function gf(){const n=document.getElementById("sent-shares-container"),e=lt();if(!e||!n)return()=>{};n.innerHTML='<p class="text-gray-500">Chargement des partages envoyés...</p>';const t=be(B,"shares"),r=mt(t,Me("senderId","==",e));return Es(r,async s=>{if(s.empty){n.innerHTML=`<p class="text-gray-500">Vous n'avez envoyé aucun partage.</p>`;return}const i=s.docs.sort((a,l)=>(l.data().createdAt?.seconds||0)-(a.data().createdAt?.seconds||0));n.innerHTML="";for(const a of i){const l=a.data();try{const u=await Yt(ve(B,"users",l.receiverId));if(u.exists()){const h=u.data();n.appendChild(pI(l,h.displayName,a.id))}}catch(u){console.error("Could not load receiver for sent share",u)}}},s=>{console.error("Erreur lors du chargement des partages envoyés : ",s),n&&(n.innerHTML='<p class="text-red-500">Une erreur est survenue.</p>')})}function pI(n,e,t){const r=document.createElement("div");r.className="bg-white rounded-lg p-4 flex justify-between items-center shadow-sm";const s=document.createElement("div"),i=document.createElement("p");i.className="font-bold text-gray-800";let a=[];n.plan&&a.push("Planification"),n.shoppingList&&a.push("Liste de courses"),i.textContent=a.join(" et ");const l=document.createElement("p");l.className="text-sm text-gray-500";const u=new Date(n.createdAt.seconds*1e3).toLocaleDateString("fr-FR");l.textContent=`Envoyé à ${e} le ${u}`,s.appendChild(i),s.appendChild(l),r.appendChild(s);const h=document.createElement("div");h.className="flex items-center space-x-4";const f=document.createElement("span");f.textContent=n.status;let p="bg-gray-200 text-gray-800";switch(n.status){case"accepted":p="bg-green-100 text-green-800";break;case"declined":p="bg-red-100 text-red-800";break;case"pending":p="bg-yellow-100 text-yellow-800";break}f.className=`text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full ${p}`,h.appendChild(f);const y=document.createElement("button");return y.className="btn btn-ghost text-red-500 btn-sm",y.innerHTML='<i class="fas fa-trash"></i>',y.title="Annuler le partage",y.addEventListener("click",()=>gI(t)),h.appendChild(y),r.appendChild(h),r}async function gI(n){if(confirm("Voulez-vous vraiment annuler ce partage ? L'autre utilisateur ne le verra plus."))try{await Bn(ve(B,"shares",n)),gf()}catch(e){console.error("Erreur lors de la suppression du partage: ",e),alert("Une erreur est survenue.")}}const yI=Object.freeze(Object.defineProperty({__proto__:null,default:hI},Symbol.toStringTag,{value:"Module"})),Lu=document.querySelector("main"),_I={menu:{html:`
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
            <div class="md:col-span-2">
                <h3 class="text-xl font-bold text-gray-800 mb-4">Liste d'amis</h3>
                <div id="friends-list-container" class="space-y-4">
                    <!-- La liste d'amis sera chargée ici -->
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
        `,script:"./shared.js"}},vI=Object.assign({"./auth.js":ME,"./firebase-config.js":VE,"./form-handler.js":OE,"./friends.js":UE,"./ingredients.js":jE,"./lists.js":zE,"./main.js":Vf,"./notifications.js":ZE,"./plans.js":aI,"./recipes.js":lI,"./script.js":dI,"./shared.js":yI,"./sharing.js":$E});let ni=null;async function Du(n){typeof ni=="function"&&(ni(),ni=null);const e=_I[n];if(e&&Lu){if(Lu.innerHTML=e.html,e.script){const t=vI[e.script];t?t.default&&typeof t.default=="function"&&(ni=t.default()):console.error(`Module not found for path: ${e.script}`)}}else console.error(`Route not found: ${n}`)}function EI(){const n=Us();if(n){const t=document.getElementById("user-display-name");t&&(t.textContent=n.displayName||n.email)}const e=document.querySelectorAll(".nav-btn");e.forEach(t=>{t.addEventListener("click",r=>{const s=r.currentTarget.dataset.path;Du(s),e.forEach(i=>{i.classList.remove("bg-tomato","text-white"),i.classList.add("bg-white","text-tomato")}),r.currentTarget.classList.add("bg-tomato","text-white"),r.currentTarget.classList.remove("bg-white","text-tomato")})}),Du("menu"),hf()}document.addEventListener("DOMContentLoaded",()=>{rf().then(n=>{n&&EI()})});
