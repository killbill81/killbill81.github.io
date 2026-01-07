const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/script-rzsGheL2.js","assets/firebase-config-CPJ13vib.js","assets/firebase-config-DVv8XtdB.css","assets/recipes-YeGsctgT.js","assets/sharing-BV84mwUq.js","assets/ingredient-modal-D7goZ8KJ.js","assets/ingredients-5uGbRjtB.js","assets/lists-BmF-x7-R.js","assets/shared-CTLZNjqZ.js","assets/all-plans-BpGysxic.js","assets/view-plan-CiEXzWXb.js","assets/shopping-mode-BPwD2vhI.js","assets/ai-suggestions-Bfn1VM3D.js"])))=>i.map(i=>d[i]);
import{be as ze,bf as xe,bg as re,q as _,c as E,d as u,w,g as A,b as v,u as S,o as N,j as B,am as G,a as P,b4 as j,f as ge,s as Me,i as Ae,z as Be,an as be,C as Je,D as Qe,E as Ge,F as We,G as Ke,H as Xe,I as Ye,J as Ze,K as et,L as tt,M as st,N as nt,O as rt,P as at,Q as it,R as ot,S as dt,T as lt,U as ct,V as ut,W as mt,X as pt,Y as ft,Z as gt,_ as bt,$ as vt,a0 as ht,a1 as yt,a2 as xt,a3 as wt,a4 as Et,a5 as It,a6 as Lt,a7 as Ct,a8 as kt,a9 as St,aa as _t,ab as Mt,ac as At,ad as Bt,ae as Pt,af as Rt,ag as Tt,ah as Nt,ai as jt,aj as qt,ak as Dt,al as Ft,ao as Ot,ap as Ht,aq as Ut,ar as $t,as as Vt,at as zt,au as Jt,av as Qt,aw as Gt,ax as Wt,ay as Kt,az as Xt,aA as Yt,aB as Zt,aC as es,aD as ts,aE as ss,aF as ns,aG as rs,aH as as,aI as is,aJ as os,aK as ds,aL as ls,aM as cs,k as us,aN as ms,aO as ps,aP as fs,aQ as gs,aR as bs,aS as vs,aT as hs,aU as ys,aV as xs,aW as ws,aX as Es,aY as Is,aZ as Ls,y as Cs,a_ as ks,a$ as Ss,b0 as _s,b1 as Ms,b2 as As,b3 as Bs,A as Ps,b5 as Rs,b6 as Ts,b7 as Ns,b8 as js,b9 as qs,ba as Ds,bb as Fs,bc as Os,bd as Hs,e as Us}from"./firebase-config-CPJ13vib.js";const $s="modulepreload",Vs=function(t){return"/"+t},we={},M=function(e,s,n){let r=Promise.resolve();if(s&&s.length>0){let p=function(d){return Promise.all(d.map(l=>Promise.resolve(l).then(c=>({status:"fulfilled",value:c}),c=>({status:"rejected",reason:c}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=a?.nonce||a?.getAttribute("nonce");r=p(s.map(d=>{if(d=Vs(d),d in we)return;we[d]=!0;const l=d.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${c}`))return;const b=document.createElement("link");if(b.rel=l?"stylesheet":$s,l||(b.as="script"),b.crossOrigin="",b.href=d,o&&b.setAttribute("nonce",o),document.head.appendChild(b),l)return new Promise((h,f)=>{b.addEventListener("load",h),b.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${d}`)))})}))}function i(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&i(o.reason);return e().catch(i)})},Ee=document.querySelector("main"),zs={menu:{html:`
        <div class="flex flex-col md:flex-row md:space-x-2">

            <!-- Left Column: Meal Planner -->
            <div class="w-full md:w-5/6">
                <section id="meal-planning-section" aria-labelledby="meal-planning-heading" class="mb-8 md:mb-12">
                                    <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                                        <h2 id="meal-planning-heading" class="text-xl md:text-2xl font-bold text-foreground">Menu de la semaine</h2>
                                        <div class="mt-3 md:mt-0 flex items-center space-x-2 md:space-x-3 plan-actions">
                                            <button id="smart-plan-btn" class="btn btn-primary btn-sm" title="Générer un menu hebdomadaire intelligent avec l'IA">
                                                <i class="fas fa-magic mr-1 md:mr-2"></i> Menu Intelligent
                                            </button>
                                            <button id="clear-menu-btn" class="btn btn-outline btn-sm text-red-800 hover:bg-red-100">
                                                <i class="fas fa-trash-alt mr-1 md:mr-2"></i> Vider le menu
                                            </button>
                                            <button id="export-plan-pdf-btn" class="btn btn-outline btn-sm">
                                                <i class="fas fa-file-pdf mr-1 md:mr-2"></i> Exporter Menu (PDF)
                                            </button>
                                            <button id="share-plan-btn" class="btn btn-secondary btn-sm">
                                                <i class="fas fa-share-alt mr-1 md:mr-2"></i> Partager
                                            </button>
                                            <button id="save-plan-btn" class="btn btn-secondary btn-sm">
                                                <i class="fas fa-save mr-1 md:mr-2"></i> Sauvegarder Menu
                                            </button>
                                        </div>
                                    </div>
                            
                                    <!-- Week Navigation & Menu Selector -->
                                    <div class="flex flex-col md:flex-row justify-between items-center mb-4 space-y-3 md:space-y-0">
                                        <!-- Week Navigation -->
                                        <div class="flex justify-between items-center bg-card text-card-foreground border border-border p-2 md:p-3 rounded-lg shadow-sm">
                                            <button id="prev-week-btn" class="p-2 rounded-md hover:bg-gray-100 text-muted-foreground hover:text-tomato transition-colors" aria-label="Semaine précédente">
                                                <i class="fas fa-chevron-left mr-1 md:mr-2"></i> Préc.
                                            </button>
                                            <div id="current-week-display" class="text-gray-700 font-medium text-sm md:text-base text-center mx-4">Semaine X</div>
                                            <button id="next-week-btn" class="p-2 rounded-md hover:bg-gray-100 text-muted-foreground hover:text-tomato transition-colors" aria-label="Semaine suivante">
                                                Suiv. <i class="fas fa-chevron-right ml-1 md:ml-2"></i>
                                            </button>
                                        </div>
                                        <!-- Plan Selector -->
                                        <div class="flex flex-wrap items-center justify-center gap-2 bg-card text-card-foreground border border-border p-3 rounded-lg shadow-sm">
                                            <label for="plan-select" class="text-sm font-medium text-gray-700">Menu affiché:</label>
                                            <select id="plan-select" class="rounded-md border-gray-300 shadow-sm focus:border-tomato focus:ring focus:ring-tomato focus:ring-opacity-50 text-sm py-1">
                                                <!-- Options will be generated by JS -->
                                            </select>
                                            <button id="create-plan-btn" class="btn btn-primary btn-sm" title="Créer un nouveau menu">
                                                <i class="fas fa-plus"></i>
                                            </button>
                                            <button id="rename-plan-btn" class="text-blue-500 hover:bg-blue-100 text-sm px-3 py-1 rounded-md" title="Renommer le menu sélectionné">
                                                <i class="fas fa-pencil-alt"></i>
                                            </button>
                                            <button id="history-plan-btn" class="text-purple-500 hover:bg-purple-100 text-sm px-3 py-1 rounded-md" title="Historique des modifications">
                                                <i class="fas fa-history"></i>
                                            </button>
                                            <button id="archive-plan-btn" class="text-gray-500 hover:bg-gray-100 text-sm px-3 py-1 rounded-md" title="Archiver le menu (le masquer sans le supprimer)">
                                                <i class="fas fa-archive"></i>
                                            </button>
                                            <button id="leave-plan-btn" class="text-yellow-600 hover:bg-yellow-100 text-sm px-3 py-1 rounded-md" title="Quitter le menu collaboratif">
                                                <i class="fas fa-door-open"></i>
                                            </button>
                                            <button id="delete-plan-btn" class="text-red-500 hover:bg-red-100 text-sm px-3 py-1 rounded-md" title="Supprimer le menu sélectionné">
                                                <i class="fas fa-trash"></i>
                                            </button>
                                            <button id="invite-participant-btn" class="text-green-500 hover:bg-green-100 text-sm px-3 py-1 rounded-md hidden" title="Inviter un participant">
                                                <i class="fas fa-user-plus"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <!-- Collaborators Bar -->
                                    <div id="collaborators-bar" class="flex items-center space-x-2 mb-4 hidden">
                                        <!-- Avatars will be injected here -->
                                    </div>

                                    <!-- Activity Labels -->
                                    <div id="activity-labels-container" class="text-sm text-muted-foreground mb-4 h-6">
                                        <!-- e.g., 'Sophie is adding a recipe...' -->
                                    </div>
                            
                                            <!-- Settings Section -->
                                            <div class="inline-flex items-center space-x-6 bg-card text-card-foreground border border-border p-3 rounded-lg shadow-sm mb-4">                                        <div>
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
                                    </div>                    <!-- Responsive Meal Plan Grid -->
<div class="bg-card text-card-foreground rounded-xl shadow-md border border-border p-4">
                        <!-- Desktop Grid (Visible on large screens) -->
                        <div id="desktop-plan-container" class="hidden lg:block">
                            <div id="meal-plan-grid-layout">
                                <!-- Header -->
                                <div class="grid grid-cols-[100px_35px_repeat(5,_minmax(0,_1fr))_35px_repeat(5,_minmax(0,_1fr))] gap-1 text-center mb-1">
                                    <div class="p-2"></div> <!-- Empty corner -->
                                    <div class="p-2 rounded-t-lg bg-amber-100 text-amber-800 font-bold col-span-6">MIDI</div>
                                    <div class="p-2 rounded-t-lg bg-stone-200 text-stone-800 font-bold col-span-6">SOIR</div>
                                    
                                    <div class="p-1"></div> <!-- Empty under day name -->
                                    <div class="p-1 text-xs font-semibold"><i class="fas fa-users"></i></div>
                                    <div class="p-1 text-xs font-semibold text-muted-foreground">Entrée</div>
                                    <div class="p-1 text-xs font-semibold text-muted-foreground">Plat</div>
                                    <div class="p-1 text-xs font-semibold text-muted-foreground">Accomp.</div>
                                    <div class="p-1 text-xs font-semibold text-muted-foreground">Dessert</div>
                                    <div class="p-1 text-xs font-semibold text-muted-foreground">Remarque</div>

                                    <div class="p-1 text-xs font-semibold"><i class="fas fa-users"></i></div>
                                    <div class="p-1 text-xs font-semibold text-muted-foreground">Entrée</div>
                                    <div class="p-1 text-xs font-semibold text-muted-foreground">Plat</div>
                                    <div class="p-1 text-xs font-semibold text-muted-foreground">Accomp.</div>
                                    <div class="p-1 text-xs font-semibold text-muted-foreground">Dessert</div>
                                    <div class="p-1 text-xs font-semibold text-muted-foreground">Remarque</div>
                                </div>
                                <!-- Rows generated by JS -->
                                <div id="meal-plan-grid" class="space-y-1">
                                    <div class="p-10 text-center text-muted-foreground italic col-span-full">Chargement du planning...</div>
                                </div>
                            </div>
                        </div>

                        <!-- Mobile Accordion (Visible on small screens) -->
                        <div id="mobile-meal-plan" class="lg:hidden space-y-2">
                            <!-- Mobile content will be generated by JS here -->
                             <div class="p-10 text-center text-muted-foreground italic col-span-full">Chargement du planning...</div>
                        </div>
                    </div>
                                    </section>


                                </div>
                    
                                <!-- Right Column: Shopping List -->
                                <div class="w-full md:w-1/6">
                                    <section id="shopping-list-section" aria-labelledby="shopping-list-heading" class="mb-8 md:mb-12 md:sticky md:top-24">
                                        <div class="bg-card text-card-foreground rounded-xl shadow-md border border-border p-4 md:p-6">
                                            <div class="flex justify-between items-center mb-4">
                                        <h2 class="text-2xl font-bold text-foreground">Liste de courses</h2>
                                        <button id="open-trash-btn" class="flex items-center justify-center p-2 rounded-md hover:bg-gray-100 text-muted-foreground hover:text-gray-700 ml-2 transition-colors">
                                            <i class="fas fa-trash-alt text-lg"></i> <span id="trash-count" class="bg-gray-200 text-xs px-1.5 py-0.5 rounded-full ml-1">0</span>
                                        </button>
                                    </div>
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
                <button id="close-shared-plans-modal" class="absolute top-4 right-4 text-gray-400 hover:text-muted-foreground" aria-label="Fermer">
                    <i class="fas fa-times text-xl"></i>
                </button>
                <h3 id="shared-plans-modal-title" class="text-2xl font-bold mb-6">Menus partagés pour la Semaine X</h3>
                <div id="shared-plans-modal-container" class="space-y-6">
                    <!-- Shared plans will be loaded here -->
                </div>
            </div>
        </div>
        `,script:"./script.js"},recipes:{html:`
        <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl md:text-3xl font-bold text-foreground">Mes Recettes</h2>
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
                <button id="close-recipe-modal" class="absolute top-4 right-4 text-gray-400 hover:text-muted-foreground" aria-label="Fermer">
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
                        <h4 class="text-lg font-medium text-foreground mb-2">Ingrédients</h4>
                        <div id="ingredients-list" class="space-y-2"></div>
                        <button type="button" id="add-ingredient-btn" class="btn btn-outline btn-sm mt-2">
                            <i class="fas fa-plus mr-2"></i> Ajouter un ingrédient
                        </button>
                    </div>
                    <div>
                        <label for="recipe-steps" class="block text-lg font-medium text-foreground">Préparation</label>
                        <textarea id="recipe-steps" rows="8" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"></textarea>
                    </div>
                    <div class="flex justify-end space-x-4 pt-4">
                        <button type="button" id="cancel-recipe-btn" class="text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md">Annuler</button>
                        <button type="submit" id="save-recipe-btn" class="btn btn-primary">Sauvegarder</button>
                    </div>
                </form>
            </div>
        </div>
        `,script:"./recipes.js"},ingredients:{html:`
        <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl md:text-3xl font-bold text-foreground">Mes Ingrédients</h2>
            <div class="flex space-x-2">
                <button id="audit-ingredients-btn" class="btn btn-secondary">
                    <i class="fas fa-stethoscope mr-2"></i> Audit Qualité IA
                </button>
                <button id="manage-categories-btn" class="btn btn-outline">
                    <i class="fas fa-tags mr-2"></i> Gérer les catégories
                </button>
                <button id="add-ingredient-btn" class="btn btn-primary">
                    <i class="fas fa-plus mr-2"></i> Ajouter un ingrédient
                </button>
            </div>
        </div>

        <!-- Audit Results Modal -->
        <div id="audit-modal" class="fixed inset-0 bg-black/60 flex items-center justify-center z-[150] hidden">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 w-11/12 max-w-4xl max-h-[90vh] overflow-y-auto relative border border-gray-200 dark:border-gray-700 shadow-2xl">
                <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Audit de qualité des ingrédients</h3>
                <p class="text-gray-700 dark:text-gray-300 mb-6">L'IA a analysé vos ingrédients pour suggérer des unités et catégories standards. Cela facilitera la création des listes de courses.</p>
                
                <div class="overflow-x-auto border border-gray-200 dark:border-gray-700 rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead class="bg-gray-100 dark:bg-gray-700/50">
                            <tr>
                                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">Ingrédient</th>
                                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">Actuel</th>
                                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">Suggéré</th>
                                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">Raison</th>
                                <th class="px-4 py-3 text-center text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">Appliquer</th>
                            </tr>
                        </thead>
                        <tbody id="audit-results-list" class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                            <!-- Rows injected by JS -->
                        </tbody>
                    </table>
                </div>

                <div class="flex justify-end space-x-4 mt-8 sticky bottom-0 bg-white dark:bg-gray-800 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button id="close-audit-modal" class="px-5 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors">Annuler</button>
                    <button id="apply-audit-btn" class="btn btn-primary px-6 py-2">Enregistrer les sélectionnés</button>
                </div>
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
            <p class="text-center text-muted-foreground p-10">Chargement des ingrédients...</p>
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
                     <button type="button" id="close-category-modal" class="text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md">Annuler</button>
                    <button type="button" id="done-category-modal-btn" class="btn btn-primary">Terminé</button>
                </div>
            </div>
        </div>
        `,script:"./ingredients.js"},lists:{html:`
        <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl md:text-3xl font-bold text-foreground">Mes Listes de Courses</h2>
            <button id="add-list-btn" class="btn btn-primary">
                <i class="fas fa-plus mr-2"></i> Créer une liste
            </button>
            <button id="generate-seasonal-list-btn" class="btn btn-secondary ml-2">
                <i class="fas fa-magic mr-2"></i> Générer par saison
            </button>
        </div>

        <!-- Search Bar -->
        <div class="mb-6">
            <input type="text" id="search-bar" placeholder="Rechercher une liste..." class="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-tomato focus:border-tomato">
        </div>

        <!-- Lists Container -->
        <div id="lists-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>

        <div class="mt-12">
            <h2 class="text-2xl md:text-3xl font-bold text-foreground mb-6">Listes Partagées</h2>
            <div id="shared-lists-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Les listes partagées seront chargées ici par JS -->
            </div>
        </div>

        <!-- List Form Modal -->
        <div id="list-form-modal" class="fixed inset-0 bg-black bg-opacity-60 flex items-start justify-center z-[100] hidden pt-20">
            <div class="bg-white rounded-xl p-6 w-11/12 max-w-3xl min-h-[75vh] max-h-[90vh] overflow-y-auto relative">
                <button id="close-list-modal" class="absolute top-4 right-4 text-gray-400 hover:text-muted-foreground z-10"><i class="fas fa-times text-xl"></i></button>
                <h3 id="list-modal-title" class="text-lg font-bold mb-4">Créer une liste</h3>
                <form id="list-form" class="space-y-4 pb-20">
                    <input type="hidden" id="list-id">
                    <div>
                        <label for="list-name" class="block text-sm font-medium text-gray-700">Nom de la liste</label>
                        <input type="text" id="list-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" required>
                    </div>
                    <div>
                        <h4 class="text-md font-medium text-foreground mb-2">Ingrédients</h4>
                        <div id="ingredients-list" class="space-y-2"></div>
                        <button type="button" id="add-ingredient-btn" class="btn btn-outline btn-sm mt-2">
                            <i class="fas fa-plus mr-2"></i> Ajouter un ingrédient
                        </button>
                    </div>
                </form>
                <div class="absolute bottom-0 left-0 right-0 px-6 py-4 bg-white/95 backdrop-blur-sm border-t border-gray-200 flex justify-end space-x-4">
                    <button type="button" id="cancel-list-btn" class="text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md">Annuler</button>
                    <button type="submit" form="list-form" id="save-list-btn" class="btn btn-primary">Sauvegarder la liste</button>
                </div>
            </div>
        </div>
        `,script:"./lists.js"},shared:{html:`
        <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl md:text-3xl font-bold text-foreground">Mes Partages</h2>
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
        `,script:"./shared.js"},plans:{html:`
        <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl md:text-3xl font-bold text-foreground">Mes Plans Sauvegardés</h2>
        </div>
        <div id="all-plans-list" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <!-- La liste des plans sera chargée ici -->
            <p class="text-center text-muted-foreground p-10 col-span-full">Chargement de vos plans...</p>
        </div>

        <div class="border-t border-gray-200 pt-8">
            <h2 class="text-2xl font-bold text-foreground mb-6">Menus Archivés</h2>
            <div id="archived-plans-list" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Les plans archivés seront chargés ici -->
                <p class="text-center text-muted-foreground p-10 col-span-full">Chargement de vos archives...</p>
            </div>
        </div>
        `,script:"./all-plans.js"},"view-plan":{html:`
        <section aria-labelledby="meal-planning-heading" class="mb-8 md:mb-12">
            <div class="flex justify-between items-center mb-4">
                <h2 id="plan-view-name" class="text-xl md:text-2xl font-bold text-foreground">Chargement du plan...</h2>
                <button id="close-view-plan-btn" class="btn btn-outline">
                    <i class="fas fa-times mr-2"></i> Fermer et voir mes plans
                </button>
            </div>
            <div class="bg-card text-card-foreground rounded-xl shadow-md border border-border p-4">
                <div id="meal-plan-grid-layout">
                    <!-- Header -->
                    <div class="grid grid-cols-[100px_35px_repeat(5,_minmax(0,_1fr))_35px_repeat(5,_minmax(0,_1fr))] gap-1 text-center mb-1">
                        <div class="p-2"></div> <!-- Empty corner -->
                        <div class="p-2 rounded-t-lg bg-amber-100 text-amber-800 font-bold col-span-6">MIDI</div>
                        <div class="p-2 rounded-t-lg bg-stone-200 text-stone-800 font-bold col-span-6">SOIR</div>
                        <div class="p-1"></div> <!-- Empty under day name -->
                        <div class="p-1 text-xs font-semibold"><i class="fas fa-users"></i></div>
                        <div class="p-1 text-xs font-semibold text-muted-foreground">Entrée</div>
                        <div class="p-1 text-xs font-semibold text-muted-foreground">Plat</div>
                        <div class="p-1 text-xs font-semibold text-muted-foreground">Accomp.</div>
                        <div class="p-1 text-xs font-semibold text-muted-foreground">Dessert</div>
                        <div class="p-1 text-xs font-semibold text-muted-foreground">Remarque</div>
                        <div class="p-1 text-xs font-semibold"><i class="fas fa-users"></i></div>
                        <div class="p-1 text-xs font-semibold text-muted-foreground">Entrée</div>
                        <div class="p-1 text-xs font-semibold text-muted-foreground">Plat</div>
                        <div class="p-1 text-xs font-semibold text-muted-foreground">Accomp.</div>
                        <div class="p-1 text-xs font-semibold text-muted-foreground">Dessert</div>
                        <div class="p-1 text-xs font-semibold text-muted-foreground">Remarque</div>
                    </div>
                    <!-- Rows generated by JS -->
                    <div id="meal-plan-grid" class="space-y-1">
                        <div class="p-10 text-center text-muted-foreground italic col-span-full">Chargement de la planification...</div>
                    </div>
                </div>
            </div>
        </section>
        `,script:"./view-plan.js"},"ai-suggestions":{html:`
        <div class="max-w-4xl mx-auto p-4 md:p-6">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h2 class="text-3xl font-bold text-gray-900 leading-tight">Mon Profil Chef IA</h2>
                    <p class="text-gray-500 mt-1">Découvrez vos habitudes et recevez des conseils personnalisés.</p>
                </div>
                <button id="refresh-ai-btn" class="btn btn-secondary shadow-sm hover:shadow-md transition-all">
                    <i class="fas fa-sync-alt mr-2"></i> Actualiser mon analyse
                </button>
            </div>

            <div id="ai-profile-container" class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <!-- Statistiques Clés -->
                <div class="lg:col-span-2 space-y-6">
                    <div id="ai-stats-grid" class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <!-- Injected by JS -->
                    </div>
                    
                    <div id="ai-debug-wrapper" class="hidden">
                        <div class="bg-gray-900 rounded-xl p-4 shadow-inner mb-4">
                            <div class="flex justify-between items-center mb-2">
                                <span class="text-[10px] font-mono text-gray-500 uppercase tracking-wider">Diagnostics Techniques</span>
                                <button id="close-debug-btn" class="text-gray-500 hover:text-white"><i class="fas fa-times"></i></button>
                            </div>
                            <div id="ai-debug-info" class="text-green-400 text-[10px] font-mono overflow-x-auto max-h-60 space-y-1">
                                <!-- JS Injected -->
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                        <h3 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
                            <i class="fas fa-comment-alt-dots text-tomato mr-2"></i> Analyse du Chef Gusto
                        </h3>
                        <div id="ai-summary-text" class="text-gray-600 leading-relaxed min-h-[100px] flex items-center justify-center bg-gray-50 rounded-xl p-4 italic">
                            Cliquez sur "Actualiser" pour générer un résumé de vos habitudes alimentaires.
                        </div>
                    </div>
                </div>

                <!-- Recettes Favorites -->
                <div class="space-y-6">
                    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 h-full">
                        <h3 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
                            <i class="fas fa-heart text-red-500 mr-2"></i> Vos Incontournables
                        </h3>
                        <ul id="ai-top-recipes" class="space-y-3">
                            <!-- Injected by JS -->
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        `,script:"./ai-suggestions.js"},"shopping-mode":{html:`
        <div class="max-w-4xl mx-auto min-h-screen pb-20 md:pb-0 relative px-4">
            <div class="sticky top-0 bg-background z-20 pt-4 pb-3">
                <div class="flex justify-between items-center mb-4">
                    <div class="flex items-center space-x-3">
                        <button id="shopping-mode-back-btn" class="text-muted-foreground hover:text-tomato">
                            <i class="fas fa-arrow-left text-xl"></i>
                        </button>
                        <h2 class="text-2xl font-bold text-foreground">Faire les courses</h2>
                    </div>
                </div>
                <div class="flex justify-start items-center mb-4">
                    <label for="shopping-mode-plan-select" class="text-sm font-medium text-gray-700 mr-2">Menu:</label>
                    <select id="shopping-mode-plan-select" class="text-sm border-gray-300 rounded-md shadow-sm focus:ring-tomato focus:border-tomato font-medium text-gray-700 bg-white pr-8">
                        <option>Chargement...</option>
                    </select>
                </div>
            </div>
            
            <div id="shopping-mode-container" class="p-4 -mt-4">
                <p class="text-center text-muted-foreground mt-10">Chargement de la liste...</p>
            </div>
        </div>
        `,script:"./shopping-mode.js"}},Ie={"./script.js":()=>M(()=>import("./script-rzsGheL2.js"),__vite__mapDeps([0,1,2,3,4,5])),"./recipes.js":()=>M(()=>import("./recipes-YeGsctgT.js").then(t=>t.a),__vite__mapDeps([3,1,2])),"./ingredients.js":()=>M(()=>import("./ingredients-5uGbRjtB.js"),__vite__mapDeps([6,1,2,5])),"./lists.js":()=>M(()=>import("./lists-BmF-x7-R.js"),__vite__mapDeps([7,1,2,4])),"./friends.js":()=>M(()=>Promise.resolve().then(()=>Zs),void 0),"./shared.js":()=>M(()=>import("./shared-CTLZNjqZ.js"),__vite__mapDeps([8,1,2])),"./all-plans.js":()=>M(()=>import("./all-plans-BpGysxic.js"),__vite__mapDeps([9,1,2])),"./view-plan.js":()=>M(()=>import("./view-plan-CiEXzWXb.js"),__vite__mapDeps([10,1,2])),"./shopping-mode.js":()=>M(()=>import("./shopping-mode-BPwD2vhI.js"),__vite__mapDeps([11,1,2])),"./ingredient-modal.js":()=>M(()=>import("./ingredient-modal-D7goZ8KJ.js"),__vite__mapDeps([5,1,2])),"./ai-suggestions.js":()=>M(()=>import("./ai-suggestions-Bfn1VM3D.js"),__vite__mapDeps([12,1,2]))};let Z=null;async function ee(t){typeof Z=="function"&&(Z(),Z=null);const e=zs[t];if(e&&Ee){if(Ee.innerHTML=e.html,e.script)try{let s;Ie[e.script]?s=await Ie[e.script]():s=await import(`${e.script}?v=${Date.now()}`),s.default&&typeof s.default=="function"&&(Z=s.default())}catch(s){console.error(`Error loading module ${e.script}:`,s)}}else console.error(`Route not found: ${t}`)}const xn=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:Je,AggregateField:Qe,AggregateQuerySnapshot:Ge,Bytes:We,CACHE_SIZE_UNLIMITED:Ke,CollectionReference:Xe,DocumentReference:Ye,DocumentSnapshot:Ze,FieldPath:et,FieldValue:tt,Firestore:st,FirestoreError:nt,GeoPoint:rt,LoadBundleTask:at,PersistentCacheIndexManager:it,Query:ot,QueryCompositeFilterConstraint:dt,QueryConstraint:lt,QueryDocumentSnapshot:ct,QueryEndAtConstraint:ut,QueryFieldFilterConstraint:mt,QueryLimitConstraint:pt,QueryOrderByConstraint:ft,QuerySnapshot:gt,QueryStartAtConstraint:bt,SnapshotMetadata:vt,Timestamp:ht,Transaction:yt,VectorValue:xt,WriteBatch:wt,_AutoId:Et,_ByteString:It,_DatabaseId:Lt,_DocumentKey:Ct,_EmptyAppCheckTokenProvider:kt,_EmptyAuthCredentialsProvider:St,_FieldPath:_t,_TestingHooks:Mt,_cast:At,_debugAssert:Bt,_internalAggregationQueryToProtoRunAggregationQueryRequest:Pt,_internalQueryToProtoQueryTarget:Rt,_isBase64Available:Tt,_logWarn:Nt,_validateIsNotUsedTogether:jt,addDoc:P,aggregateFieldEqual:qt,aggregateQuerySnapshotEqual:Dt,and:Ft,arrayRemove:G,arrayUnion:be,average:Ot,clearIndexedDbPersistence:Ht,collection:E,collectionGroup:Ut,connectFirestoreEmulator:$t,count:Vt,deleteAllPersistentCacheIndexes:zt,deleteDoc:ge,deleteField:Jt,disableNetwork:Qt,disablePersistentCacheIndexAutoCreation:Gt,doc:v,documentId:Wt,documentSnapshotFromJSON:Kt,enableIndexedDbPersistence:Xt,enableMultiTabIndexedDbPersistence:Yt,enableNetwork:Zt,enablePersistentCacheIndexAutoCreation:es,endAt:ts,endBefore:ss,ensureFirestoreConfigured:ns,executeWrite:rs,getAggregateFromServer:as,getCountFromServer:is,getDoc:B,getDocFromCache:os,getDocFromServer:ds,getDocs:A,getDocsFromCache:ls,getDocsFromServer:cs,getFirestore:us,getPersistentCacheIndexManager:ms,increment:ps,initializeFirestore:fs,limit:gs,limitToLast:bs,loadBundle:vs,memoryEagerGarbageCollector:hs,memoryLocalCache:ys,memoryLruGarbageCollector:xs,namedQuery:ws,onSnapshot:N,onSnapshotResume:Es,onSnapshotsInSync:Is,or:Ls,orderBy:Cs,persistentLocalCache:ks,persistentMultipleTabManager:Ss,persistentSingleTabManager:_s,query:_,queryEqual:Ms,querySnapshotFromJSON:As,refEqual:Bs,runTransaction:Ps,serverTimestamp:j,setDoc:Me,setIndexConfiguration:Rs,setLogLevel:Ts,snapshotEqual:Ns,startAfter:js,startAt:qs,sum:Ds,terminate:Fs,updateDoc:S,vector:Os,waitForPendingWrites:Hs,where:w,writeBatch:Us},Symbol.toStringTag,{value:"Module"}));let te=null;function Js(){return new Promise(t=>{ze(re,e=>{if(te=e,e){console.log("User is logged in:",e.uid);const s=document.getElementById("logout-btn"),n=document.getElementById("profile-btn");s&&s.classList.remove("hidden"),n&&n.classList.remove("hidden"),s&&!s.hasAttribute("data-listener-attached")&&(s.addEventListener("click",()=>{xe(re).catch(i=>{console.error("Sign Out Error",i)})}),s.setAttribute("data-listener-attached","true"));const r=document.getElementById("logout-btn-mobile");r&&!r.hasAttribute("data-listener-attached")&&(r.addEventListener("click",()=>{xe(re).catch(i=>{console.error("Sign Out Error",i)})}),r.setAttribute("data-listener-attached","true")),t(e)}else{console.log("User not logged in. Redirecting to login.html");const s=window.location.origin+"/login.html";window.location.href!==s&&(window.location.href=s),t(null)}})})}function ve(){return te?te.uid:null}function I(){return te}let me=()=>{};function Qs(){const t=document.getElementById("search-friends-input");return document.getElementById("search-friends-btn").addEventListener("click",()=>Le(t.value)),t.addEventListener("keyup",s=>{s.key==="Enter"&&Le(t.value)}),Gs(),Pe(),()=>{me&&me()}}async function Gs(){const t=document.getElementById("friends-list-container"),e=I()?.uid;if(!e||!t)return;t.innerHTML='<p class="text-gray-500">Chargement...</p>';const s=v(u,"users",e);me=N(s,async n=>{if(!n.exists()){t.innerHTML='<p class="text-red-500">Erreur: Utilisateur non trouvé.</p>';return}const r=n.data().friends||[];if(t.innerHTML="",r.length===0){t.innerHTML=`<p class="text-gray-500">Vous n'avez pas encore d'amis. Utilisez la recherche pour en ajouter.</p>`;return}for(const i of r)try{const a=await B(v(u,"users",i));a.exists()&&t.appendChild(Ws(a.data()))}catch(a){console.error("Erreur de chargement d'un ami",a)}})}function Ws(t){const e=document.createElement("div");e.className="bg-card text-card-foreground p-3 rounded-lg flex items-center justify-between shadow-sm border border-border";const s=document.createElement("div");s.className="flex items-center",s.innerHTML=`
        <img src="${t.photoURL||"https://placehold.co/40"}" 
             alt="Avatar" 
             class="w-10 h-10 rounded-full mr-3 object-cover bg-muted"
             onerror="this.onerror=null; this.src='https://placehold.co/40?text=${t.displayName?t.displayName.charAt(0).toUpperCase():"?"}';">
        <div>
            <p class="font-bold">${t.displayName}</p>
            <p class="text-sm text-muted-foreground">${t.email}</p>
        </div>
    `;const n=document.createElement("button");return n.className="text-red-500 hover:bg-red-50 text-sm px-3 py-1 rounded-md",n.innerHTML='<i class="fas fa-user-times"></i>',n.title="Retirer cet ami",n.addEventListener("click",()=>Ks(t.uid)),e.appendChild(s),e.appendChild(n),e}async function Ks(t){const e=I()?.uid;if(!e||!t){console.error("Impossible de supprimer l'ami : ID utilisateur ou ID ami manquant.");return}if(!confirm("Voulez-vous vraiment retirer cet ami ? Cette action est unilatérale."))return;console.log(`Tentative de suppression de l'ami ${t} pour l'utilisateur ${e}`);const s=v(u,"users",e);try{await S(s,{friends:G(t)}),console.log("Ami supprimé avec succès de la base de données.")}catch(n){console.error("Erreur lors de la suppression de l'ami: ",n),alert("Une erreur est survenue.")}}async function Le(t){const e=document.getElementById("search-results-container"),s=I()?.uid;if(!(!t||!e)){e.innerHTML='<p class="text-gray-500">Recherche en cours...</p>';try{const n=t.toLowerCase(),r=n+"",i=_(E(u,"users"),w("displayName_lowercase",">=",n),w("displayName_lowercase","<",r)),a=_(E(u,"users"),w("email","==",n)),[o,p]=await Promise.all([A(i),A(a)]),d=new Map;if(o.forEach(l=>d.set(l.id,l.data())),p.forEach(l=>d.set(l.id,l.data())),e.innerHTML="",d.size===0){e.innerHTML='<p class="text-gray-500">Aucun utilisateur trouvé.</p>';return}d.forEach(l=>{if(l.uid===s)return;const c=document.createElement("div");c.className="bg-gray-50 p-2 rounded-lg flex items-center justify-between",c.innerHTML=`
                <div class="flex items-center">
                    <img src="${l.photoURL||"https://placehold.co/32"}" class="w-8 h-8 rounded-full mr-2">
                    <span class="font-medium text-sm">${l.displayName} (${l.email})</span>
                </div>
            `;const b=document.createElement("button");b.className="btn btn-secondary btn-xs",b.innerHTML='<i class="fas fa-user-plus"></i>',b.addEventListener("click",()=>Xs(l.uid)),c.appendChild(b),e.appendChild(c)})}catch(n){console.error("Erreur de recherche: ",n),e.innerHTML='<p class="text-red-500">Erreur de recherche.</p>'}}}async function Xs(t){const e=I()?.uid;if(!e||e===t)return;const s=_(E(u,"friend_requests"),w("senderId","==",e),w("receiverId","==",t)),n=_(E(u,"friend_requests"),w("senderId","==",t),w("receiverId","==",e)),[r,i]=await Promise.all([A(s),A(n)]);if(!r.empty||!i.empty)return alert("Une demande d'ami existe déjà avec cet utilisateur.");if((await B(v(u,"users",e))).data()?.friends?.includes(t))return alert("Vous êtes déjà ami avec cet utilisateur.");try{await P(E(u,"friend_requests"),{senderId:e,receiverId:t,status:"pending",createdAt:j()}),alert("Demande d'ami envoyée !")}catch(o){console.error("Erreur lors de l'envoi de la demande d'ami: ",o),alert("Une erreur est survenue.")}}async function Pe(){const t=document.getElementById("pending-requests-container"),e=document.getElementById("declined-requests-container"),s=I()?.uid;if(!(!s||!t||!e)){t.innerHTML='<p class="text-gray-500">Chargement...</p>',e.innerHTML='<p class="text-gray-500">Chargement...</p>';try{const n=_(E(u,"friend_requests"),w("senderId","==",s)),r=await A(n),i=[],a=[];for(const o of r.docs){const p={id:o.id,...o.data()},d=await B(v(u,"users",p.receiverId));d.exists()&&(p.receiver=d.data()),p.status==="pending"?i.push(p):p.status==="declined"&&a.push(p)}t.innerHTML="",i.length>0?i.forEach(o=>t.appendChild(Ce(o))):t.innerHTML='<p class="text-gray-500">Aucune demande en attente.</p>',e.innerHTML="",a.length>0?a.forEach(o=>e.appendChild(Ce(o))):e.innerHTML='<p class="text-gray-500">Aucune demande rejetée.</p>'}catch(n){console.error("Erreur lors du chargement des demandes envoyées: ",n),t.innerHTML='<p class="text-red-500">Erreur de chargement.</p>',e.innerHTML='<p class="text-red-500">Erreur de chargement.</p>'}}}function Ce(t){const e=document.createElement("div");e.className="bg-card text-card-foreground p-3 rounded-lg flex items-center justify-between shadow-sm border border-border";const s=t.receiver,n=document.createElement("div");n.className="flex items-center",n.innerHTML=`
        <img src="${s?.photoURL||"https://placehold.co/40"}" 
             alt="Avatar" 
             class="w-10 h-10 rounded-full mr-3 object-cover bg-muted"
             onerror="this.onerror=null; this.src='https://placehold.co/40?text=${s?.displayName?s.displayName.charAt(0).toUpperCase():"?"}';">
        <div>
            <p class="font-bold">${s?.displayName||"Utilisateur inconnu"}</p>
            <p class="text-sm text-muted-foreground">Statut : <span class="font-medium">${t.status}</span></p>
        </div>
    `;const r=document.createElement("button");return r.className="text-red-500 hover:bg-red-50 text-sm px-3 py-1 rounded-md",r.innerHTML='<i class="fas fa-times-circle"></i>',r.title="Annuler la demande",r.addEventListener("click",async()=>{confirm("Voulez-vous vraiment annuler cette demande ?")&&(await ge(v(u,"friend_requests",t.id)),Pe())}),e.appendChild(n),e.appendChild(r),e}async function Re(t){try{const e=v(u,"friend_requests",t);await S(e,{status:"accepted"})}catch(e){throw console.error("Erreur lors de l'acceptation de la demande d'ami: ",e),e}}async function Ys(t){try{const e=v(u,"friend_requests",t);await S(e,{status:"declined"})}catch(e){throw console.error("Erreur lors du refus de la demande d'ami: ",e),e}}const Zs=Object.freeze(Object.defineProperty({__proto__:null,acceptFriendRequest:Re,declineFriendRequest:Ys,default:Qs},Symbol.toStringTag,{value:"Module"}));async function Te(t){if(!t)return null;try{const e=v(u,"ai_profiles",t),s=await B(e);return s.exists()?s.data():null}catch(e){return console.error("Erreur getUserAIProfile:",e),null}}async function en(t,e){if(!(!t||!e))try{const s=v(u,"ai_profiles",t),n=await Te(t)||{global_stats:{total_meals_planned:0,avg_servings:0,top_categories:{}},recipe_frequency:{},last_updated:null},r=n.global_stats,i=n.recipe_frequency||{};let a=0;e.weeks&&Object.values(e.weeks).forEach(o=>{o.menuData&&Object.values(o.menuData).forEach(p=>{Array.isArray(p)&&p.forEach(d=>{const l=d.id||d.name;l&&(i[l]=(i[l]||0)+1,a++)})})}),r.total_meals_planned+=a,await Me(s,{global_stats:r,recipe_frequency:i,last_updated:j()},{merge:!0}),console.log("Profil IA mis à jour avec succès dans 'ai_profiles'.")}catch(s){console.error("Erreur updateProfileIncremental:",s)}}async function wn(t){if(t){console.log("[IA] Appel de la fonction Cloud syncAIProfile...");try{const s=await Ae(Be,"syncAIProfile")();return console.log("[IA] Résultat brut Cloud:",JSON.stringify(s.data,null,2)),s.data}catch(e){throw console.error("[IA] ERREUR lors de la synchronisation Cloud:",e),e}}}async function En(t){const e=await Te(t);if(!e)return"Aucune donnée d'habitude disponible.";try{return(await Ae(Be,"analyzeHistory")({profile:e})).data.summary}catch(s){return console.error("Erreur getAIProfileSummary:",s),"Impossible de générer le résumé IA."}}let z,ae,ie,$,y,J,oe,de,V,T,Q,le,ce,pe,fe,se=null,ne=null;function ke(){z&&z.classList.remove("hidden")}function H(){z&&z.classList.add("hidden"),$&&$.reset()}function tn(t,e){ne=t,T&&(T.value=e),J&&J.classList.remove("hidden"),T&&T.focus()}function U(){ne=null,J&&J.classList.add("hidden"),V&&V.reset()}function sn(t,e){se=t,pe&&(pe.textContent="Confirmer la suppression"),fe&&(fe.textContent=`Êtes-vous sûr de vouloir supprimer le menu "${e}" ? Cette action est irréversible.`),Q&&Q.classList.remove("hidden")}function ue(){se=null,Q&&Q.classList.add("hidden")}async function nn(t){const e=I();if(!e)return null;try{const s=await P(E(u,"plans"),{userId:e.uid,name:t,type:"personal",weeks:{},manualItems:[],checkedItems:{},defaultNumPeople:1,startDay:"Lundi",archivedBy:[],lastUpdated:new Date});return H(),s.id}catch(s){return console.error("Error creating plan: ",s),alert("Erreur lors de la création du menu."),null}}async function rn(t,e){if(!(!t||!e))try{const s=v(u,"plans",t);await S(s,{name:e}),U()}catch(s){console.error("Error renaming plan: ",s),alert("Erreur lors du renommage du menu.")}}async function an(t){const e=I()?.uid;if(!(!t||!e)&&confirm("Voulez-vous vraiment quitter ce menu partagé ? Il n'apparaîtra plus dans votre liste."))try{const s=v(u,"plans",t);await S(s,{collaborators:G(e)})}catch(s){console.error("Erreur pour quitter le plan: ",s),alert("Une erreur est survenue.")}}async function on(t){if(t)try{await ge(v(u,"plans",t))}catch(e){console.error("Error deleting plan: ",e),alert("Erreur lors de la suppression du menu.")}}async function In(t,e=!0){if(!t)return;const s=I();if(s)try{const n=v(u,"plans",t);e?await S(n,{archivedBy:be(s.uid)}):await S(n,{archivedBy:G(s.uid)})}catch(n){console.error("Error archiving plan: ",n),alert("Erreur lors de l'archivage du menu.")}}function Ln(t){const e=I();if(!e)return()=>{};let s=new Map;const n=()=>{t(Array.from(s.values()).sort((d,l)=>d.name.localeCompare(l.name)))},r=async d=>{const c=[d.userId,...d.collaborators||[]].map(h=>B(v(u,"users",h)));return(await Promise.all(c)).map(h=>h.exists()?h.data():{uid:h.id,displayName:"Inconnu"})},i=_(E(u,"plans"),w("userId","==",e.uid)),a=N(i,async d=>{const c=d.docChanges().map(async b=>{if(b.type==="removed")s.delete(b.doc.id);else{const h=b.doc.data(),f=await r(h);s.set(b.doc.id,{id:b.doc.id,...h,isOwner:!0,participants:f})}});await Promise.all(c),n()}),o=_(E(u,"plans"),w("collaborators","array-contains",e.uid)),p=N(o,async d=>{const c=d.docChanges().map(async b=>{if(b.type==="removed")s.delete(b.doc.id);else{const h=b.doc.data(),f=await r(h),L=f.find(C=>C.uid===h.userId);s.set(b.doc.id,{id:b.doc.id,...h,isOwner:!1,ownerName:L?.displayName||"Inconnu",participants:f})}});await Promise.all(c),n()});return()=>{a(),p()}}function Cn(t){if(!y)return;const e=y.value;if(y.innerHTML="",t.length===0){const n=document.createElement("option");n.value="",n.textContent="Aucun menu personnel",n.disabled=!0,y.appendChild(n);return}const s=I();t.forEach(n=>{if(n.isArchived||s&&n.archivedBy&&n.archivedBy.includes(s.uid))return;const r=document.createElement("option");r.value=n.id;let i=n.name;n.collaborators&&n.collaborators.length>0&&(n.isOwner?i=`👑 ${n.name} [Collab]`:i=`👥 ${n.name} [Collab] (de ${n.ownerName})`),r.textContent=i,y.appendChild(r)}),e&&y.querySelector(`option[value="${e}"]`)?y.value=e:y.selectedIndex=0}function kn(){z=document.getElementById("create-plan-modal"),ae=document.getElementById("close-create-plan-modal"),ie=document.getElementById("cancel-create-plan-btn"),$=document.getElementById("create-plan-form"),y=document.getElementById("plan-select"),J=document.getElementById("rename-plan-modal"),oe=document.getElementById("close-rename-plan-modal"),de=document.getElementById("cancel-rename-plan-btn"),V=document.getElementById("rename-plan-form"),T=document.getElementById("new-plan-name"),Q=document.getElementById("delete-confirm-modal"),le=document.getElementById("cancel-delete-btn"),ce=document.getElementById("confirm-delete-btn"),pe=document.getElementById("delete-confirm-title"),fe=document.getElementById("delete-confirm-message");const t=document.getElementById("create-plan-btn"),e=document.getElementById("rename-plan-btn"),s=document.getElementById("leave-plan-btn"),n=document.getElementById("delete-plan-btn"),r=l=>{l.preventDefault();const c=document.getElementById("plan-name");c&&c.value&&nn(c.value)},i=l=>{l.preventDefault(),ne&&T.value&&rn(ne,T.value)},a=()=>{se&&on(se).then(()=>{ue()})},o=()=>{if(y&&y.value){const l=y.options[y.selectedIndex];tn(y.value,l.text)}else alert("Veuillez sélectionner un menu à renommer.")},p=()=>{y&&y.value?an(y.value):alert("Veuillez sélectionner un menu.")},d=()=>{if(y&&y.value){const l=y.options[y.selectedIndex].text;sn(y.value,l)}else alert("Veuillez sélectionner un menu à supprimer.")};return t?.addEventListener("click",ke),e?.addEventListener("click",o),s?.addEventListener("click",p),n?.addEventListener("click",d),ae?.addEventListener("click",H),ie?.addEventListener("click",H),$?.addEventListener("submit",r),oe?.addEventListener("click",U),de?.addEventListener("click",U),V?.addEventListener("submit",i),le?.addEventListener("click",ue),ce?.addEventListener("click",a),()=>{t?.removeEventListener("click",ke),e?.removeEventListener("click",o),s?.removeEventListener("click",p),n?.removeEventListener("click",d),ae?.removeEventListener("click",H),ie?.removeEventListener("click",H),$?.removeEventListener("submit",r),oe?.removeEventListener("click",U),de?.removeEventListener("click",U),V?.removeEventListener("submit",i),le?.removeEventListener("click",ue),ce?.removeEventListener("click",a)}}async function dn(t,e){if(!(!t||!e))try{const s=v(u,"plans",t);await S(s,{collaborators:be(e),type:"collaborative"})}catch(s){console.error("Error adding collaborator: ",s)}}async function Sn(t,e,s="Modification diverse"){if(!t||!e)return;const n=I();if(n)try{const r=E(u,"plans",t,"history"),i=JSON.parse(JSON.stringify(e));await P(r,{planState:i,timestamp:j(),modifiedBy:n.uid,modifiedByName:n.displayName||n.email,description:s})}catch(r){console.error("Error saving history:",r)}}async function _n(t,e){const s=I();if(!(!s||!t||!e))try{const n=E(u,"plan_saves"),r=_(n,w("userId","==",s.uid),w("name","==",t)),i=await A(r);if(i.empty)await P(n,{userId:s.uid,name:t,savedAt:j(),planData:e});else{const a=i.docs[0].id,o=v(u,"plan_saves",a);await S(o,{planData:e,savedAt:j()})}await en(s.uid,e)}catch(n){console.error("Error saving or updating plan save:",n),alert("Erreur lors de la sauvegarde.")}}console.log("DEBUG: Loading notifications.js module");let Ne=[],je=[],qe=()=>{},De=()=>{};const g={btn:null,btnMobile:null,badge:null,badgeMobile:null,dropdown:null,list:null};async function ln(t,e,s){const n=ve();if(n)try{const r=v(u,"shares",t);if(await S(r,{status:"accepted"}),e.plan){const i=s.displayName||"Inconnu",a=`Copie de "${e.plan.name}" (de ${i})`,o={...e.plan,userId:n,name:a,isShared:!0,originalOwnerId:e.senderId,sharedAt:new Date,collaborators:[]};delete o.id,await P(E(u,"plans"),o)}e.shoppingList&&await P(E(u,"shopping_lists"),{name:`${e.shoppingList.name} (de ${s.displayName})`,ingredients:e.shoppingList.ingredients,userId:n,isShared:!0,originalOwner:s.uid,sharedAt:new Date})}catch(r){console.error("Erreur lors de l'acceptation du partage : ",r),alert("Une erreur est survenue.")}}async function cn(t,e){const s=ve();if(!(!s||!e||!e.planId))try{await dn(e.planId,s);const n=v(u,"shares",t);await S(n,{status:"accepted"})}catch(n){console.error("Erreur lors de l'acceptation de l'invitation : ",n),alert("Une erreur est survenue.")}}async function Se(t){try{const e=v(u,"shares",t);await S(e,{status:"declined"})}catch(e){console.error("Erreur lors du refus du partage : ",e),alert("Une erreur est survenue.")}}async function un(t){try{await Re(t)}catch{alert("Erreur lors de l'acceptation.")}}function Fe(){if(!g.list)return;const t=[...Ne,...je];t.sort((s,n)=>n.createdAt.toMillis()-s.createdAt.toMillis());const e=s=>{s&&(t.length>0?(s.textContent=t.length,s.classList.remove("hidden")):s.classList.add("hidden"))};e(g.badge),e(g.badgeMobile),g.list.innerHTML="",t.length===0?g.list.innerHTML='<p class="text-gray-500 text-center p-4">Aucune nouvelle notification.</p>':t.forEach(s=>{const n=mn(s);g.list.appendChild(n)})}function mn(t){const e=document.createElement("div");e.className="p-3 border-b border-gray-100 hover:bg-gray-50";const s=document.createElement("p");s.className="text-sm font-medium text-gray-800";const n=document.createElement("p");n.className="text-xs text-gray-500 mb-3";const r=document.createElement("div");r.className="flex space-x-2 justify-end";const i=t.data.type||t.type;if(i==="collaborative_plan_invite"){s.textContent="Invitation à collaborer",n.textContent=`${t.sender.displayName} vous invite à modifier son plan "${t.data.planName}".`;const a=F("Accepter","btn-secondary",p=>{p.target.textContent="...",p.target.disabled=!0,cn(t.id,t.data)}),o=F("Refuser","text-red-500 hover:bg-red-50 px-3 py-1 rounded-md",p=>{p.target.disabled=!0,Se(t.id)});r.append(a,o)}else if(i==="share"){s.textContent=`Partage de ${t.sender.displayName||t.sender.email}`;let a=[];t.data.plan&&a.push("planification"),t.data.shoppingList&&a.push("liste de courses"),n.textContent=`Contenu : ${a.join(" et ")}`;const o=F("Accepter","btn-secondary",d=>{d.target.textContent="...",d.target.disabled=!0,ln(t.id,t.data,t.sender)}),p=F("Refuser","text-red-500 hover:bg-red-50 px-3 py-1 rounded-md",d=>{d.target.disabled=!0,Se(t.id)});r.append(o,p)}else if(i==="friend_request"){s.textContent="Invitation d'ami",n.textContent=`${t.sender.displayName||t.sender.email} vous a envoyé une invitation.`;const a=F("Accepter","btn-secondary",p=>{p.target.textContent="...",p.target.disabled=!0,un(t.id)}),o=F("Refuser","text-red-500 hover:bg-red-50 px-3 py-1 rounded-md",p=>{});r.append(a,o)}return e.append(s,n,r),e}function F(t,e,s){const n=document.createElement("button");return n.className=`btn btn-xs ${e}`,n.textContent=t,n.addEventListener("click",r=>{r.stopPropagation(),s(r)}),n}function pn(t){const e=E(u,"shares"),s=_(e,w("receiverId","==",t),w("status","==","pending"));qe=N(s,async n=>{const r=[];for(const i of n.docs){const a=i.data(),o=await B(v(u,"users",a.senderId));o.exists()&&r.push({type:a.type||"share",id:i.id,data:a,sender:o.data(),createdAt:a.createdAt})}Ne=r,Fe()},n=>{console.error("Erreur d'écoute des partages:",n)})}function fn(t){const e=E(u,"friend_requests"),s=_(e,w("receiverId","==",t),w("status","==","pending"));De=N(s,async n=>{const r=[];for(const i of n.docs){const a=i.data(),o=await B(v(u,"users",a.senderId));o.exists()&&r.push({type:"friend_request",id:i.id,data:a,sender:o.data(),createdAt:a.createdAt})}je=r,Fe()},n=>{console.error("Erreur d'écoute des invitations d'amis:",n)})}function gn(){if(console.log("DEBUG: initNotifications called"),g.btn=document.getElementById("notifications-btn"),g.btnMobile=document.getElementById("notifications-btn-mobile"),g.badge=document.getElementById("notifications-badge"),g.badgeMobile=document.getElementById("notifications-badge-mobile"),g.dropdown=document.getElementById("notifications-dropdown"),g.list=document.getElementById("notifications-list"),console.log("DEBUG: Notification elements found:",{btn:!!g.btn,btnMobile:!!g.btnMobile,dropdown:!!g.dropdown}),!g.btn||!g.dropdown)return;const t=ve();if(!t)return;qe(),De(),pn(t),fn(t);const e=g.btn.cloneNode(!0);if(g.btn.parentNode.replaceChild(e,g.btn),g.btn=e,g.badge=document.getElementById("notifications-badge"),g.btnMobile){const n=g.btnMobile.cloneNode(!0);g.btnMobile.parentNode.replaceChild(n,g.btnMobile),g.btnMobile=n,g.badgeMobile=document.getElementById("notifications-badge-mobile")}const s=n=>{console.log("Notification click detected"),n.stopPropagation();const r=document.getElementById("notifications-dropdown");if(!r)return;if(r.classList.contains("hidden")){r.classList.remove("hidden"),document.body.appendChild(r);const a=window.innerWidth<768,p=(a?g.btnMobile:g.btn).getBoundingClientRect();Object.assign(r.style,{display:"block",position:"fixed",zIndex:"10000",top:`${p.bottom+8}px`,maxHeight:"80vh"}),a?Object.assign(r.style,{left:"50%",transform:"translateX(-50%)",width:"95vw",right:"auto"}):Object.assign(r.style,{left:"auto",right:`${window.innerWidth-p.right}px`,transform:"none",width:"20rem"})}else r.classList.add("hidden"),r.style.cssText=""};g.btn.addEventListener("click",s),g.btnMobile&&g.btnMobile.addEventListener("click",s),document.addEventListener("click",n=>{const r=document.getElementById("notifications-dropdown");r&&!r.classList.contains("hidden")&&(g.btn.contains(n.target)||g.btnMobile&&g.btnMobile.contains(n.target)||r.contains(n.target)||(r.classList.add("hidden"),r.style.cssText=""))})}class bn{constructor(){this.config={mode:"auto",forcedSeason:"Printemps",offSeasonBehavior:"last",recipeRules:{prioritizeSeasonal:!0,allowPartial:!0,warnOffSeason:!0},listRules:{limitSuggestions:!0,allowManualAdd:!0}},this.STORAGE_KEY="gustoplan_season_config",this.loadConfig()}loadConfig(){const e=localStorage.getItem(this.STORAGE_KEY);if(e)try{const s=JSON.parse(e);this.config={...this.config,...s,recipeRules:{...this.config.recipeRules,...s.recipeRules||{}},listRules:{...this.config.listRules,...s.listRules||{}}}}catch(s){console.error("Failed to parse seasonality config",s)}}saveConfig(){localStorage.setItem(this.STORAGE_KEY,JSON.stringify(this.config)),window.dispatchEvent(new CustomEvent("seasonality-config-changed",{detail:this.config}))}updateConfig(e){this.config={...this.config,...e},this.saveConfig()}getCurrentSeason(){if(this.config.mode==="disabled")return null;if(this.config.mode==="forced")return this.config.forcedSeason;const e=new Date().getMonth();return e===11||e===0||e===1?"Hiver":e>=2&&e<=4?"Printemps":e>=5&&e<=7?"Eté":e>=8&&e<=10?"Automne":"Printemps"}isMonthInSeason(e,s){return!0}getIngredientScore(e){if(this.config.mode==="disabled")return 2;if(this.getMonthsForCurrentDate(),!e.months||e.months.length===0){if(e.seasons&&e.seasons.length>0){const r=this.getCurrentSeason();return e.seasons.includes(r)?2:0}return 2}const s=this.getTargetMonthsForSeason(this.getCurrentSeason());return e.months.some(r=>s.includes(r))?2:0}getRecipeScore(e){if(this.config.mode==="disabled")return 2;const s=this.getCurrentSeason(),n=this.getTargetMonthsForSeason(s);let r=null;return e.months&&e.months.length>0?r=e.months.some(a=>n.includes(a))?2:0:e.seasons&&e.seasons.length>0&&(r=e.seasons.includes(s)?2:0),r!==null?r:2}getTargetMonthsForSeason(e){return{Printemps:["Mars","Avril","Mai"],Eté:["Juin","Juillet","Août"],Automne:["Septembre","Octobre","Novembre"],Hiver:["Décembre","Janvier","Février"]}[e]||[]}getMonthsForCurrentDate(){const e=["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],s=new Date().getMonth();return[e[s]]}}const _e=new bn;function vn(){const t=document.getElementsByName("season-mode"),e=document.getElementById("forced-season-selector"),s=document.getElementById("forced-season-select"),n=document.getElementById("off-season-behavior"),r=document.getElementById("rule-prioritize-seasonal"),i=document.getElementById("rule-warn-off-season"),a=document.getElementById("settings-modal"),o=document.getElementById("close-settings-modal"),p=document.getElementById("header-settings-btn"),d=document.getElementById("save-settings-btn"),l=document.getElementById("settings-friends-list"),c=document.getElementById("settings-friends-search-input"),b=document.getElementById("settings-friends-search-btn"),h=document.getElementById("settings-friends-search-results");let f={},L=null;function C(){a&&(f={..._e.config},Ve(f),a.classList.remove("hidden"),Oe())}function R(){a&&a.classList.add("hidden"),L&&(L(),L=null)}function q(){_e.updateConfig(f),R()}p&&p.addEventListener("click",C),o&&o.addEventListener("click",R),d&&d.addEventListener("click",q),a&&a.addEventListener("click",m=>{m.target===a&&R()}),b&&b.addEventListener("click",()=>he(c.value)),c&&c.addEventListener("keyup",m=>{m.key==="Enter"&&he(c.value)});async function Oe(){const m=I()?.uid;if(!m||!l)return;l.innerHTML='<p class="text-xs text-center text-gray-500 py-4"><i class="fas fa-spinner fa-spin mr-2"></i>Chargement des amis...</p>';const x=v(u,"users",m);L=N(x,async k=>{if(!k.exists())return;const O=k.data().friends||[];if(l.innerHTML="",O.length===0){l.innerHTML=`
                    <div class="text-center py-6 bg-gray-50 dark:bg-gray-700/30 rounded-xl border border-dashed border-gray-200 dark:border-gray-600">
                        <i class="fas fa-user-friends text-gray-300 text-2xl mb-2 block"></i>
                        <p class="text-xs text-gray-400">Aucun ami pour le moment</p>
                    </div>`;return}for(const W of O)try{const D=await B(v(u,"users",W));D.exists()&&l.appendChild(He(D.data()))}catch(D){console.error("Erreur de chargement d'un ami",D)}})}function He(m){const x=document.createElement("div");x.className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg shadow-sm",x.innerHTML=`
            <div class="flex items-center">
                <img src="${m.photoURL||"https://placehold.co/32"}" class="w-8 h-8 rounded-full mr-2 object-cover">
                <div class="leading-tight">
                    <p class="text-xs font-bold text-gray-800 dark:text-gray-200">${m.displayName}</p>
                    <p class="text-[10px] text-gray-400">${m.email}</p>
                </div>
            </div>
        `;const k=document.createElement("button");return k.className="text-gray-400 hover:text-red-500 p-1.5 transition-colors",k.innerHTML='<i class="fas fa-user-minus"></i>',k.onclick=()=>Ue(m.uid),x.appendChild(k),x}async function Ue(m){const x=I()?.uid;if(!(!x||!confirm("Retirer cet ami ?")))try{await S(v(u,"users",x),{friends:G(m)})}catch{alert("Erreur lors de la suppression")}}async function he(m){if(!m||!h)return;const x=I()?.uid;h.innerHTML='<p class="text-[10px] text-center text-gray-500"><i class="fas fa-spinner fa-spin mr-1"></i>Recherche...</p>';try{const k=m.toLowerCase(),O=_(E(u,"users"),w("email","==",k)),W=await A(O);if(h.innerHTML="",W.empty){h.innerHTML='<p class="text-[10px] text-center text-gray-400 italic">Aucun utilisateur trouvé par email</p>';return}W.forEach(D=>{const K=D.data();if(K.uid===x)return;const X=document.createElement("div");X.className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg shadow-sm",X.innerHTML=`
                    <div class="flex items-center">
                        <img src="${K.photoURL||"https://placehold.co/24"}" class="w-6 h-6 rounded-full mr-2">
                        <span class="text-xs font-medium text-gray-700 dark:text-gray-300 truncate max-w-[120px]">${K.displayName}</span>
                    </div>
                `;const Y=document.createElement("button");Y.className="bg-tomato/10 hover:bg-tomato text-tomato hover:text-white px-2 py-1 rounded text-[10px] font-bold transition-all",Y.textContent="Ajouter",Y.onclick=()=>$e(K.uid),X.appendChild(Y),h.appendChild(X)})}catch{h.innerHTML='<p class="text-[10px] text-red-500 text-center">Erreur de recherche</p>'}}async function $e(m){const x=I()?.uid;if(x)try{const k=_(E(u,"friend_requests"),w("senderId","==",x),w("receiverId","==",m));if(!(await A(k)).empty)return alert("Demande déjà envoyée");await P(E(u,"friend_requests"),{senderId:x,receiverId:m,status:"pending",createdAt:j()}),alert("Demande envoyée !"),h.innerHTML="",c.value=""}catch{alert("Erreur d'envoi")}}function Ve(m){Array.from(t).forEach(x=>{x.value===m.mode&&(x.checked=!0)}),ye(m.mode),m.forcedSeason&&(s.value=m.forcedSeason),m.offSeasonBehavior&&(n.value=m.offSeasonBehavior),r&&(r.checked=m.recipeRules?.prioritizeSeasonal||!1),i&&(i.checked=m.recipeRules?.warnOffSeason||!1)}Array.from(t).forEach(m=>{m.addEventListener("change",x=>{f.mode=x.target.value,ye(x.target.value)})}),s.addEventListener("change",m=>{f.forcedSeason=m.target.value}),n.addEventListener("change",m=>{f.offSeasonBehavior=m.target.value}),r&&r.addEventListener("change",m=>{f.recipeRules={...f.recipeRules,prioritizeSeasonal:m.target.checked}}),i&&i.addEventListener("change",m=>{f.recipeRules={...f.recipeRules,warnOffSeason:m.target.checked}});function ye(m){m==="forced"?e.classList.remove("hidden"):e.classList.add("hidden")}}function hn(){const t=I();if(t){const s=document.getElementById("user-display-name");s&&(s.textContent=t.displayName||t.email)}const e=document.querySelectorAll(".nav-btn");e.forEach(s=>{s.addEventListener("click",n=>{const r=n.currentTarget.dataset.path;ee(r),e.forEach(i=>{i.classList.remove("bg-tomato","text-white"),i.classList.add("bg-white","text-tomato")}),n.currentTarget.classList.add("bg-tomato","text-white"),n.currentTarget.classList.remove("bg-white","text-tomato")})}),ee("menu"),console.log("DEBUG: Calling initNotifications..."),gn(),vn()}document.addEventListener("DOMContentLoaded",()=>{Js().then(f=>{f&&hn()});const t=document.getElementById("profile-btn"),e=document.getElementById("profile-menu"),s=document.getElementById("user-display-name");if(t&&e){const f=L=>{L.stopPropagation(),e.classList.toggle("hidden");const C=!e.classList.contains("hidden");t.setAttribute("aria-expanded",C)};t.addEventListener("click",f),s&&(s.addEventListener("click",f),s.style.cursor="pointer"),document.addEventListener("click",L=>{!(e.contains(L.target)||t.contains(L.target)||s&&s.contains(L.target))&&!e.classList.contains("hidden")&&(e.classList.add("hidden"),t.setAttribute("aria-expanded","false"))})}const n=document.getElementById("settings-link"),r=document.getElementById("settings-modal"),i=document.getElementById("close-settings-modal"),a=document.getElementById("dark-mode-toggle"),o=f=>{f==="dark"?(document.documentElement.classList.add("dark"),a&&(a.checked=!0)):(document.documentElement.classList.remove("dark"),a&&(a.checked=!1))},p=localStorage.getItem("theme");p?o(p):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?o("dark"):o("light"),n&&r&&n.addEventListener("click",f=>{f.preventDefault(),r.classList.remove("hidden")}),i&&r&&i.addEventListener("click",()=>{r.classList.add("hidden")}),r&&r.addEventListener("click",f=>{f.target===r&&r.classList.add("hidden")}),a&&a.addEventListener("change",()=>{const f=a.checked?"dark":"light";localStorage.setItem("theme",f),o(f)});const d=document.getElementById("mobile-menu-btn"),l=document.getElementById("mobile-menu");let c=null;d&&l?(console.log("Mobile menu initialized (Overlay Mode)"),d.addEventListener("click",f=>{f.stopPropagation(),c?(c.remove(),c=null):(c=document.createElement("div"),c.id="mobile-menu-overlay-container",c.innerHTML=l.innerHTML,Object.assign(c.style,{position:"fixed",top:"60px",left:"0",width:"100%",backgroundColor:"#3D405B",zIndex:"10000",boxShadow:"0 4px 6px rgba(0,0,0,0.1)",padding:"1rem",display:"block"}),c.addEventListener("click",L=>{const C=L.target.closest("button");if(!C)return;const R=C.dataset.path;if(R)console.log("Overlay: Navigating directly to",R),ee(R);else if(C.id==="profile-btn-mobile")console.log("Overlay: Opening settings"),r&&r.classList.remove("hidden");else{let q=null;C.id&&(q=document.getElementById(C.id)),q?(console.log("Overlay: Delegating click to original:",q),q.click()):console.warn("Overlay: No action found for",C)}c&&(c.remove(),c=null)}),document.body.appendChild(c))}),document.addEventListener("click",f=>{c&&!c.contains(f.target)&&!d.contains(f.target)&&(c.remove(),c=null)})):console.warn("Mobile menu elements missing");const b=document.getElementById("profile-btn-mobile");b&&r&&b.addEventListener("click",()=>{r.classList.remove("hidden")}),document.querySelectorAll(".nav-btn-mobile").forEach(f=>{f.addEventListener("click",L=>{const C=L.currentTarget.dataset.path;ee(C)})})});export{M as _,In as a,Ln as b,En as c,on as d,I as e,Te as f,ve as g,nn as h,kn as i,Sn as j,_n as k,xn as l,ee as n,Cn as p,wn as r,_e as s};
