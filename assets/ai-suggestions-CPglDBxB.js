const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/firebase-config-DVWBM_53.js","assets/firebase-config-X9jPWnzj.css","assets/main-3FHrQZxb.js"])))=>i.map(i=>d[i]);
import{c as H,e as M,f as B,_ as T,r as D}from"./main-3FHrQZxb.js";import"./firebase-config-DVWBM_53.js";function S(){const m=M();if(!m)return;const L=document.getElementById("ai-profile-container"),b=document.getElementById("ai-summary-text"),s=document.getElementById("refresh-ai-btn"),p=document.getElementById("ai-stats-grid");async function x(){if(!s)return;const d=s.innerHTML;s.disabled=!0,s.innerHTML='<i class="fas fa-sync fa-spin mr-2"></i> Synchronisation...';try{const a=await D(m.uid);a&&a.profile?await y(a.profile,a.debug,a):await y()}catch(a){console.error(a),alert("Erreur lors de la ré-analyse.")}finally{s.disabled=!1,s.innerHTML=d}}async function y(d=null,a=null,v=null){if(!L)return;const n=d||await B(m.uid);if(!n){L.innerHTML=`
                <div class="text-center p-10 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
                    <i class="fas fa-robot text-4xl text-gray-300 mb-4"></i>
                    <p class="text-gray-500">Pas encore assez de données pour analyser vos habitudes.</p>
                    <p class="text-sm text-gray-400 mt-2 mb-4">L'IA se base sur vos menus sauvegardés ou archivés.</p>
                    <button id="force-sync-btn" class="btn btn-secondary btn-sm">
                        <i class="fas fa-sync-alt mr-2"></i> Analyser mon historique existant
                    </button>
                </div>
            `;const t=document.getElementById("force-sync-btn");t&&t.addEventListener("click",x);return}if(p){const t=n.global_stats||{};p.innerHTML=`
                <div class="bg-blue-50 p-4 rounded-lg text-center">
                    <span class="block text-2xl font-bold text-blue-700">${t.total_meals_planned||0}</span>
                    <span class="text-xs text-blue-600 uppercase font-semibold">Repas planifiés</span>
                </div>
                <div class="bg-purple-50 p-4 rounded-lg text-center">
                    <span class="block text-2xl font-bold text-purple-700">${Object.keys(n.recipe_frequency||{}).length}</span>
                    <span class="text-xs text-purple-600 uppercase font-semibold">Recettes différentes</span>
                </div>
            `,p.classList.remove("md:grid-cols-3"),p.classList.add("md:grid-cols-2")}const h=document.getElementById("ai-debug-wrapper"),I=document.getElementById("ai-debug-info"),E=document.getElementById("close-debug-btn"),_=document.getElementById("ai-stats-grid"),l=a||n&&n.debug_info;if(console.log("[IA-Debug] Rendering profile UI.",{hasDebugData:!!a,hasProfileDebug:!!(n&&n.debug_info),version:v?.version||n?.version||"Inconnue"}),I&&h){const t=l&&!Array.isArray(l)&&l.meals,c=t?l.meals:Array.isArray(l)?l:[],o=t?l.raw_stats:null;if(c.length>0){let r=`<div class="mb-2 text-white border-b border-gray-700 pb-1 flex flex-col text-[10px] font-mono">
                    <div class="flex justify-between w-full">
                        <span>V: ${v?.version||n?.version||"P"}</span>
                        <span>${c.length} repas</span>
                    </div>`;o&&o.total_servings!==void 0&&(r+=`<div class="text-orange-300 mt-1">Total: ${o.total_servings}p / ${o.servings_count}r = ${(o.total_servings/o.servings_count).toFixed(2)}</div>`),r+="</div>",c.forEach((f,e)=>{const i=f.items.map(g=>`${g.name}`).join(", ");r+=`<div class="mb-1">
                        <span class="text-orange-300 font-bold">${e+1}.</span> 
                        <span class="text-gray-400 text-[9px]">${f.path}</span>
                        <br>${i}
                    </div>`}),I.innerHTML=r}else I.innerHTML=`
                    <div class="text-orange-400 font-mono text-[10px]">
                        [ERREUR] Aucune donnée de comptage.<br>
                        - Version: ${v?.version||n?.version||"Inconnue"}<br>
                        - Raw: ${JSON.stringify(n).substring(0,100)}...
                    </div>`;if(E&&(E.onclick=()=>h.classList.add("hidden")),_&&!document.getElementById("show-debug-trigger")){console.log("[IA-Debug] Injecting trigger button");const r=document.createElement("div");r.id="show-debug-trigger",r.className="col-span-full text-center mt-2",r.innerHTML=`
                    <button class="btn btn-secondary btn-sm !text-[10px] !py-1 !px-3 shadow-sm hover:shadow-md transition-all">
                        <i class="fas fa-bug mr-2"></i> Voir le détail du comptage IA
                    </button>
                `,r.onclick=()=>{h.classList.remove("hidden"),console.log("[IA-Debug] Show wrapper click")},_.after(r)}}const $=n.recipe_frequency||{},A=Object.entries($).sort(([,t],[,c])=>c-t).slice(0,10),u=document.getElementById("ai-top-recipes");if(u)if(A.length===0)u.innerHTML='<li class="text-sm text-gray-400 italic">Aucune recette récurrente détectée.</li>';else{u.innerHTML='<div class="flex justify-center p-4"><i class="fas fa-spinner fa-spin text-gray-400"></i></div>';try{const{db:t}=await T(async()=>{const{db:e}=await import("./firebase-config-DVWBM_53.js").then(i=>i.bh);return{db:e}},__vite__mapDeps([0,1])),{doc:c,getDoc:o}=await T(async()=>{const{doc:e,getDoc:i}=await import("./main-3FHrQZxb.js").then(g=>g.l);return{doc:e,getDoc:i}},__vite__mapDeps([2,0,1])),r=A.map(async([e,i])=>{if(/^[a-zA-Z0-9]{15,}$/.test(e))try{const w=await o(c(t,"recipes",e));return{name:w.exists()?w.data().name:`Recette #${e.substring(0,5)}`,count:i}}catch{return{name:e,count:i}}else return{name:e,count:i}}),f=await Promise.all(r);u.innerHTML=f.map(e=>`
                        <li class="flex justify-between items-center p-3 bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 rounded-xl transition-all shadow-sm hover:shadow-md">
                            <span class="text-sm font-semibold text-gray-700">${e.name}</span>
                            <span class="bg-tomato text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm flex items-center">
                                <i class="fas fa-fire-alt mr-1 text-[8px]"></i> ${e.count} fois
                            </span>
                        </li>
                    `).join("")}catch(t){console.error("Error rendering AI list:",t),u.innerHTML='<li class="text-xs text-red-500">Erreur lors du rendu.</li>'}}}return s&&s.addEventListener("click",async()=>{s.disabled=!0,s.innerHTML='<i class="fas fa-spinner fa-spin mr-2"></i> Analyse en cours...';const d=await H(m.uid);b&&(b.innerHTML=`<div class="prose prose-sm">${d}</div>`,b.classList.remove("hidden")),s.disabled=!1,s.innerHTML='<i class="fas fa-sync-alt mr-2"></i> Actualiser mon analyse'}),y(),document.addEventListener("requestAISync",x),()=>{document.removeEventListener("requestAISync",x)}}export{S as default};
