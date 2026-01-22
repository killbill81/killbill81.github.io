const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/script-CsiUKiJg.js","assets/firebase-config-9gANoKOS.js","assets/firebase-config-DuwEdJQT.css","assets/recipes-CvIRsqX_.js","assets/sharing-JwcufOfh.js","assets/ingredient-modal-Bs8bmd4e.js","assets/ingredients-OlZaurYr.js","assets/lists-hHscrJxm.js","assets/shared-DWdinNsE.js","assets/all-plans-vN9IoeuL.js","assets/view-plan-VH7WosIz.js","assets/shopping-mode-C-z5w1x3.js","assets/ai-suggestions-CR5QF7pt.js"])))=>i.map(i=>d[i]);
import{be as ze,bf as xe,bg as re,q as M,c as w,d as m,w as E,g as _,b as v,u as S,o as j,j as P,am as Q,a as A,b4 as R,f as ge,s as Be,i as _e,z as Ae,an as be,C as Ge,D as Je,E as Qe,F as We,G as Ke,H as Xe,I as Ye,J as Ze,K as et,L as tt,M as st,N as nt,O as rt,P as at,Q as it,R as ot,S as dt,T as lt,U as ct,V as ut,W as mt,X as pt,Y as ft,Z as gt,_ as bt,$ as vt,a0 as ht,a1 as yt,a2 as xt,a3 as Et,a4 as wt,a5 as It,a6 as Lt,a7 as kt,a8 as Ct,a9 as St,aa as Mt,ab as Bt,ac as _t,ad as At,ae as Pt,af as Rt,ag as Tt,ah as Nt,ai as jt,aj as Dt,ak as qt,al as Ft,ao as Ut,ap as Ot,aq as Ht,ar as $t,as as Vt,at as zt,au as Gt,av as Jt,aw as Qt,ax as Wt,ay as Kt,az as Xt,aA as Yt,aB as Zt,aC as es,aD as ts,aE as ss,aF as ns,aG as rs,aH as as,aI as is,aJ as os,aK as ds,aL as ls,aM as cs,k as us,aN as ms,aO as ps,aP as fs,aQ as gs,aR as bs,aS as vs,aT as hs,aU as ys,aV as xs,aW as Es,aX as ws,aY as Is,aZ as Ls,y as ks,a_ as Cs,a$ as Ss,b0 as Ms,b1 as Bs,b2 as _s,b3 as As,A as Ps,b5 as Rs,b6 as Ts,b7 as Ns,b8 as js,b9 as Ds,ba as qs,bb as Fs,bc as Us,bd as Os,e as Hs}from"./firebase-config-9gANoKOS.js";const $s="modulepreload",Vs=function(t){return"/"+t},Ee={},B=function(e,s,n){let r=Promise.resolve();if(s&&s.length>0){let u=function(d){return Promise.all(d.map(l=>Promise.resolve(l).then(c=>({status:"fulfilled",value:c}),c=>({status:"rejected",reason:c}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),i=a?.nonce||a?.getAttribute("nonce");r=u(s.map(d=>{if(d=Vs(d),d in Ee)return;Ee[d]=!0;const l=d.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${c}`))return;const f=document.createElement("link");if(f.rel=l?"stylesheet":$s,l||(f.as="script"),f.crossOrigin="",f.href=d,i&&f.setAttribute("nonce",i),document.head.appendChild(f),l)return new Promise((h,g)=>{f.addEventListener("load",h),f.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${d}`)))})}))}function o(a){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=a,window.dispatchEvent(i),!i.defaultPrevented)throw a}return r.then(a=>{for(const i of a||[])i.status==="rejected"&&o(i.reason);return e().catch(o)})},we=document.querySelector("main"),zs={menu:{html:`
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
        `,script:"./shopping-mode.js"}},Ie={"./script.js":()=>B(()=>import("./script-CsiUKiJg.js"),__vite__mapDeps([0,1,2,3,4,5])),"./recipes.js":()=>B(()=>import("./recipes-CvIRsqX_.js").then(t=>t.a),__vite__mapDeps([3,1,2])),"./ingredients.js":()=>B(()=>import("./ingredients-OlZaurYr.js"),__vite__mapDeps([6,1,2,5])),"./lists.js":()=>B(()=>import("./lists-hHscrJxm.js"),__vite__mapDeps([7,1,2,4])),"./friends.js":()=>B(()=>Promise.resolve().then(()=>Zs),void 0),"./shared.js":()=>B(()=>import("./shared-DWdinNsE.js"),__vite__mapDeps([8,1,2])),"./all-plans.js":()=>B(()=>import("./all-plans-vN9IoeuL.js"),__vite__mapDeps([9,1,2])),"./view-plan.js":()=>B(()=>import("./view-plan-VH7WosIz.js"),__vite__mapDeps([10,1,2])),"./shopping-mode.js":()=>B(()=>import("./shopping-mode-C-z5w1x3.js"),__vite__mapDeps([11,1,2])),"./ingredient-modal.js":()=>B(()=>import("./ingredient-modal-Bs8bmd4e.js"),__vite__mapDeps([5,1,2])),"./ai-suggestions.js":()=>B(()=>import("./ai-suggestions-CR5QF7pt.js"),__vite__mapDeps([12,1,2]))};let Z=null;async function ee(t){typeof Z=="function"&&(Z(),Z=null);const e=zs[t];if(e&&we){if(we.innerHTML=e.html,e.script)try{let s;Ie[e.script]?s=await Ie[e.script]():s=await import(`${e.script}?v=${Date.now()}`),s.default&&typeof s.default=="function"&&(Z=s.default())}catch(s){console.error(`Error loading module ${e.script}:`,s)}}else console.error(`Route not found: ${t}`)}const xn=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:Ge,AggregateField:Je,AggregateQuerySnapshot:Qe,Bytes:We,CACHE_SIZE_UNLIMITED:Ke,CollectionReference:Xe,DocumentReference:Ye,DocumentSnapshot:Ze,FieldPath:et,FieldValue:tt,Firestore:st,FirestoreError:nt,GeoPoint:rt,LoadBundleTask:at,PersistentCacheIndexManager:it,Query:ot,QueryCompositeFilterConstraint:dt,QueryConstraint:lt,QueryDocumentSnapshot:ct,QueryEndAtConstraint:ut,QueryFieldFilterConstraint:mt,QueryLimitConstraint:pt,QueryOrderByConstraint:ft,QuerySnapshot:gt,QueryStartAtConstraint:bt,SnapshotMetadata:vt,Timestamp:ht,Transaction:yt,VectorValue:xt,WriteBatch:Et,_AutoId:wt,_ByteString:It,_DatabaseId:Lt,_DocumentKey:kt,_EmptyAppCheckTokenProvider:Ct,_EmptyAuthCredentialsProvider:St,_FieldPath:Mt,_TestingHooks:Bt,_cast:_t,_debugAssert:At,_internalAggregationQueryToProtoRunAggregationQueryRequest:Pt,_internalQueryToProtoQueryTarget:Rt,_isBase64Available:Tt,_logWarn:Nt,_validateIsNotUsedTogether:jt,addDoc:A,aggregateFieldEqual:Dt,aggregateQuerySnapshotEqual:qt,and:Ft,arrayRemove:Q,arrayUnion:be,average:Ut,clearIndexedDbPersistence:Ot,collection:w,collectionGroup:Ht,connectFirestoreEmulator:$t,count:Vt,deleteAllPersistentCacheIndexes:zt,deleteDoc:ge,deleteField:Gt,disableNetwork:Jt,disablePersistentCacheIndexAutoCreation:Qt,doc:v,documentId:Wt,documentSnapshotFromJSON:Kt,enableIndexedDbPersistence:Xt,enableMultiTabIndexedDbPersistence:Yt,enableNetwork:Zt,enablePersistentCacheIndexAutoCreation:es,endAt:ts,endBefore:ss,ensureFirestoreConfigured:ns,executeWrite:rs,getAggregateFromServer:as,getCountFromServer:is,getDoc:P,getDocFromCache:os,getDocFromServer:ds,getDocs:_,getDocsFromCache:ls,getDocsFromServer:cs,getFirestore:us,getPersistentCacheIndexManager:ms,increment:ps,initializeFirestore:fs,limit:gs,limitToLast:bs,loadBundle:vs,memoryEagerGarbageCollector:hs,memoryLocalCache:ys,memoryLruGarbageCollector:xs,namedQuery:Es,onSnapshot:j,onSnapshotResume:ws,onSnapshotsInSync:Is,or:Ls,orderBy:ks,persistentLocalCache:Cs,persistentMultipleTabManager:Ss,persistentSingleTabManager:Ms,query:M,queryEqual:Bs,querySnapshotFromJSON:_s,refEqual:As,runTransaction:Ps,serverTimestamp:R,setDoc:Be,setIndexConfiguration:Rs,setLogLevel:Ts,snapshotEqual:Ns,startAfter:js,startAt:Ds,sum:qs,terminate:Fs,updateDoc:S,vector:Us,waitForPendingWrites:Os,where:E,writeBatch:Hs},Symbol.toStringTag,{value:"Module"}));let te=null;function Gs(){return new Promise(t=>{ze(re,e=>{te=e;const s=document.getElementById("login-btn"),n=document.getElementById("logout-btn"),r=document.getElementById("profile-btn"),o=document.getElementById("user-display-name"),a=document.getElementById("menu-user-name");if(e){console.log("User is signed in:",e.uid,e.displayName),s&&s.classList.add("hidden"),n&&n.classList.remove("hidden"),r&&(r.classList.remove("hidden"),r.classList.add("flex")),o&&(o.textContent=e.displayName||e.email||"Utilisateur",o.classList.remove("hidden")),a&&(a.textContent=e.displayName||e.email||"Utilisateur");const i=document.getElementById("logout-btn"),u=document.getElementById("profile-btn");i&&i.classList.remove("hidden"),u&&u.classList.remove("hidden");const d=async()=>{try{await xe(re),console.log("User signed out"),window.location.href="index.html"}catch(f){console.error("Error signing out: ",f)}};n&&!n.hasAttribute("data-listener-attached")&&(n.addEventListener("click",d),n.setAttribute("data-listener-attached","true"));const l=document.getElementById("btn-logout");l&&!l.hasAttribute("data-listener-attached")&&(l.addEventListener("click",d),l.setAttribute("data-listener-attached","true"));const c=document.getElementById("logout-btn-mobile");c&&!c.hasAttribute("data-listener-attached")&&(c.addEventListener("click",()=>{xe(re).catch(f=>{console.error("Sign Out Error",f)})}),c.setAttribute("data-listener-attached","true")),t(e)}else{console.log("User is signed out"),s&&s.classList.remove("hidden"),n&&n.classList.add("hidden"),r&&(r.classList.add("hidden"),r.classList.remove("flex")),o&&(o.textContent=""),console.log("User not logged in. Redirecting to login.html");const i=window.location.origin+"/login.html";window.location.href!==i&&(window.location.href=i),t(null)}})})}function ve(){return te?te.uid:null}function I(){return te}let me=()=>{};function Js(){const t=document.getElementById("search-friends-input");return document.getElementById("search-friends-btn").addEventListener("click",()=>Le(t.value)),t.addEventListener("keyup",s=>{s.key==="Enter"&&Le(t.value)}),Qs(),Pe(),()=>{me&&me()}}async function Qs(){const t=document.getElementById("friends-list-container"),e=I()?.uid;if(!e||!t)return;t.innerHTML='<p class="text-gray-500">Chargement...</p>';const s=v(m,"users",e);me=j(s,async n=>{if(!n.exists()){t.innerHTML='<p class="text-red-500">Erreur: Utilisateur non trouvé.</p>';return}const r=n.data().friends||[];if(t.innerHTML="",r.length===0){t.innerHTML=`<p class="text-gray-500">Vous n'avez pas encore d'amis. Utilisez la recherche pour en ajouter.</p>`;return}for(const o of r)try{const a=await P(v(m,"users",o));a.exists()&&t.appendChild(Ws(a.data()))}catch(a){console.error("Erreur de chargement d'un ami",a)}})}function Ws(t){const e=document.createElement("div");e.className="bg-card text-card-foreground p-3 rounded-lg flex items-center justify-between shadow-sm border border-border";const s=document.createElement("div");s.className="flex items-center",s.innerHTML=`
        <img src="${t.photoURL||"https://placehold.co/40"}" 
             alt="Avatar" 
             class="w-10 h-10 rounded-full mr-3 object-cover bg-muted"
             onerror="this.onerror=null; this.src='https://placehold.co/40?text=${t.displayName?t.displayName.charAt(0).toUpperCase():"?"}';">
        <div>
            <p class="font-bold">${t.displayName}</p>
            <p class="text-sm text-muted-foreground">${t.email}</p>
        </div>
    `;const n=document.createElement("button");return n.className="text-red-500 hover:bg-red-50 text-sm px-3 py-1 rounded-md",n.innerHTML='<i class="fas fa-user-times"></i>',n.title="Retirer cet ami",n.addEventListener("click",()=>Ks(t.uid)),e.appendChild(s),e.appendChild(n),e}async function Ks(t){const e=I()?.uid;if(!e||!t){console.error("Impossible de supprimer l'ami : ID utilisateur ou ID ami manquant.");return}if(!confirm("Voulez-vous vraiment retirer cet ami ? Cette action est unilatérale."))return;console.log(`Tentative de suppression de l'ami ${t} pour l'utilisateur ${e}`);const s=v(m,"users",e);try{await S(s,{friends:Q(t)}),console.log("Ami supprimé avec succès de la base de données.")}catch(n){console.error("Erreur lors de la suppression de l'ami: ",n),alert("Une erreur est survenue.")}}async function Le(t){const e=document.getElementById("search-results-container"),s=I()?.uid;if(!(!t||!e)){e.innerHTML='<p class="text-gray-500">Recherche en cours...</p>';try{const n=t.toLowerCase(),r=n+"",o=M(w(m,"users"),E("displayName_lowercase",">=",n),E("displayName_lowercase","<",r)),a=M(w(m,"users"),E("email","==",n)),[i,u]=await Promise.all([_(o),_(a)]),d=new Map;if(i.forEach(l=>d.set(l.id,l.data())),u.forEach(l=>d.set(l.id,l.data())),e.innerHTML="",d.size===0){e.innerHTML='<p class="text-gray-500">Aucun utilisateur trouvé.</p>';return}d.forEach(l=>{if(l.uid===s)return;const c=document.createElement("div");c.className="bg-gray-50 p-2 rounded-lg flex items-center justify-between",c.innerHTML=`
                <div class="flex items-center">
                    <img src="${l.photoURL||"https://placehold.co/32"}" class="w-8 h-8 rounded-full mr-2">
                    <span class="font-medium text-sm">${l.displayName} (${l.email})</span>
                </div>
            `;const f=document.createElement("button");f.className="btn btn-secondary btn-xs",f.innerHTML='<i class="fas fa-user-plus"></i>',f.addEventListener("click",()=>Xs(l.uid)),c.appendChild(f),e.appendChild(c)})}catch(n){console.error("Erreur de recherche: ",n),e.innerHTML='<p class="text-red-500">Erreur de recherche.</p>'}}}async function Xs(t){const e=I()?.uid;if(!e||e===t)return;const s=M(w(m,"friend_requests"),E("senderId","==",e),E("receiverId","==",t)),n=M(w(m,"friend_requests"),E("senderId","==",t),E("receiverId","==",e)),[r,o]=await Promise.all([_(s),_(n)]);if(!r.empty||!o.empty)return alert("Une demande d'ami existe déjà avec cet utilisateur.");if((await P(v(m,"users",e))).data()?.friends?.includes(t))return alert("Vous êtes déjà ami avec cet utilisateur.");try{await A(w(m,"friend_requests"),{senderId:e,receiverId:t,status:"pending",createdAt:R()}),alert("Demande d'ami envoyée !")}catch(i){console.error("Erreur lors de l'envoi de la demande d'ami: ",i),alert("Une erreur est survenue.")}}async function Pe(){const t=document.getElementById("pending-requests-container"),e=document.getElementById("declined-requests-container"),s=I()?.uid;if(!(!s||!t||!e)){t.innerHTML='<p class="text-gray-500">Chargement...</p>',e.innerHTML='<p class="text-gray-500">Chargement...</p>';try{const n=M(w(m,"friend_requests"),E("senderId","==",s)),r=await _(n),o=[],a=[];for(const i of r.docs){const u={id:i.id,...i.data()},d=await P(v(m,"users",u.receiverId));d.exists()&&(u.receiver=d.data()),u.status==="pending"?o.push(u):u.status==="declined"&&a.push(u)}t.innerHTML="",o.length>0?o.forEach(i=>t.appendChild(ke(i))):t.innerHTML='<p class="text-gray-500">Aucune demande en attente.</p>',e.innerHTML="",a.length>0?a.forEach(i=>e.appendChild(ke(i))):e.innerHTML='<p class="text-gray-500">Aucune demande rejetée.</p>'}catch(n){console.error("Erreur lors du chargement des demandes envoyées: ",n),t.innerHTML='<p class="text-red-500">Erreur de chargement.</p>',e.innerHTML='<p class="text-red-500">Erreur de chargement.</p>'}}}function ke(t){const e=document.createElement("div");e.className="bg-card text-card-foreground p-3 rounded-lg flex items-center justify-between shadow-sm border border-border";const s=t.receiver,n=document.createElement("div");n.className="flex items-center",n.innerHTML=`
        <img src="${s?.photoURL||"https://placehold.co/40"}" 
             alt="Avatar" 
             class="w-10 h-10 rounded-full mr-3 object-cover bg-muted"
             onerror="this.onerror=null; this.src='https://placehold.co/40?text=${s?.displayName?s.displayName.charAt(0).toUpperCase():"?"}';">
        <div>
            <p class="font-bold">${s?.displayName||"Utilisateur inconnu"}</p>
            <p class="text-sm text-muted-foreground">Statut : <span class="font-medium">${t.status}</span></p>
        </div>
    `;const r=document.createElement("button");return r.className="text-red-500 hover:bg-red-50 text-sm px-3 py-1 rounded-md",r.innerHTML='<i class="fas fa-times-circle"></i>',r.title="Annuler la demande",r.addEventListener("click",async()=>{confirm("Voulez-vous vraiment annuler cette demande ?")&&(await ge(v(m,"friend_requests",t.id)),Pe())}),e.appendChild(n),e.appendChild(r),e}async function Re(t){try{const e=v(m,"friend_requests",t);await S(e,{status:"accepted"})}catch(e){throw console.error("Erreur lors de l'acceptation de la demande d'ami: ",e),e}}async function Ys(t){try{const e=v(m,"friend_requests",t);await S(e,{status:"declined"})}catch(e){throw console.error("Erreur lors du refus de la demande d'ami: ",e),e}}const Zs=Object.freeze(Object.defineProperty({__proto__:null,acceptFriendRequest:Re,declineFriendRequest:Ys,default:Js},Symbol.toStringTag,{value:"Module"}));async function Te(t){if(!t)return null;try{const e=v(m,"ai_profiles",t),s=await P(e);return s.exists()?s.data():null}catch(e){return console.error("Erreur getUserAIProfile:",e),null}}async function en(t,e){if(!(!t||!e))try{const s=v(m,"ai_profiles",t),n=await Te(t)||{global_stats:{total_meals_planned:0,avg_servings:0,top_categories:{}},recipe_frequency:{},last_updated:null},r=n.global_stats,o=n.recipe_frequency||{};let a=0;e.weeks&&Object.values(e.weeks).forEach(i=>{i.menuData&&Object.values(i.menuData).forEach(u=>{Array.isArray(u)&&u.forEach(d=>{const l=d.id||d.name;l&&(o[l]=(o[l]||0)+1,a++)})})}),r.total_meals_planned+=a,await Be(s,{global_stats:r,recipe_frequency:o,last_updated:R()},{merge:!0}),console.log("Profil IA mis à jour avec succès dans 'ai_profiles'.")}catch(s){console.error("Erreur updateProfileIncremental:",s)}}async function En(t){if(t){console.log("[IA] Appel de la fonction Cloud syncAIProfile...");try{const s=await _e(Ae,"syncAIProfile")();return console.log("[IA] Résultat brut Cloud:",JSON.stringify(s.data,null,2)),s.data}catch(e){throw console.error("[IA] ERREUR lors de la synchronisation Cloud:",e),e}}}async function wn(t){const e=await Te(t);if(!e)return"Aucune donnée d'habitude disponible.";try{return(await _e(Ae,"analyzeHistory")({profile:e})).data.summary}catch(s){return console.error("Erreur getAIProfileSummary:",s),"Impossible de générer le résumé IA."}}let z,ae,ie,$,y,G,oe,de,V,N,J,le,ce,pe,fe,se=null,ne=null;function Ce(){z&&z.classList.remove("hidden")}function O(){z&&z.classList.add("hidden"),$&&$.reset()}function tn(t,e){ne=t,N&&(N.value=e),G&&G.classList.remove("hidden"),N&&N.focus()}function H(){ne=null,G&&G.classList.add("hidden"),V&&V.reset()}function sn(t,e){se=t,pe&&(pe.textContent="Confirmer la suppression"),fe&&(fe.textContent=`Êtes-vous sûr de vouloir supprimer le menu "${e}" ? Cette action est irréversible.`),J&&J.classList.remove("hidden")}function ue(){se=null,J&&J.classList.add("hidden")}async function nn(t){const e=I();if(!e)return null;try{const s=await A(w(m,"plans"),{userId:e.uid,name:t,type:"personal",weeks:{},manualItems:[],checkedItems:{},defaultNumPeople:1,startDay:"Lundi",archivedBy:[],lastUpdated:new Date});return O(),s.id}catch(s){return console.error("Error creating plan: ",s),alert("Erreur lors de la création du menu."),null}}async function rn(t,e){if(!(!t||!e))try{const s=v(m,"plans",t);await S(s,{name:e}),H()}catch(s){console.error("Error renaming plan: ",s),alert("Erreur lors du renommage du menu.")}}async function an(t){const e=I()?.uid;if(!(!t||!e)&&confirm("Voulez-vous vraiment quitter ce menu partagé ? Il n'apparaîtra plus dans votre liste."))try{const s=v(m,"plans",t);await S(s,{collaborators:Q(e)})}catch(s){console.error("Erreur pour quitter le plan: ",s),alert("Une erreur est survenue.")}}async function on(t){if(t)try{await ge(v(m,"plans",t))}catch(e){console.error("Error deleting plan: ",e),alert("Erreur lors de la suppression du menu.")}}async function In(t,e=!0){if(!t)return;const s=I();if(s)try{const n=v(m,"plans",t);e?await S(n,{archivedBy:be(s.uid)}):await S(n,{archivedBy:Q(s.uid)})}catch(n){console.error("Error archiving plan: ",n),alert("Erreur lors de l'archivage du menu.")}}function Ln(t){const e=I();if(!e)return()=>{};let s=new Map;const n=()=>{t(Array.from(s.values()).sort((d,l)=>d.name.localeCompare(l.name)))},r=async d=>{const c=[d.userId,...d.collaborators||[]].map(h=>P(v(m,"users",h)));return(await Promise.all(c)).map(h=>h.exists()?h.data():{uid:h.id,displayName:"Inconnu"})},o=M(w(m,"plans"),E("userId","==",e.uid)),a=j(o,async d=>{const c=d.docChanges().map(async f=>{if(f.type==="removed")s.delete(f.doc.id);else{const h=f.doc.data(),g=await r(h);s.set(f.doc.id,{id:f.doc.id,...h,isOwner:!0,participants:g})}});await Promise.all(c),n()}),i=M(w(m,"plans"),E("collaborators","array-contains",e.uid)),u=j(i,async d=>{const c=d.docChanges().map(async f=>{if(f.type==="removed")s.delete(f.doc.id);else{const h=f.doc.data(),g=await r(h),L=g.find(k=>k.uid===h.userId);s.set(f.doc.id,{id:f.doc.id,...h,isOwner:!1,ownerName:L?.displayName||"Inconnu",participants:g})}});await Promise.all(c),n()});return()=>{a(),u()}}function kn(t){if(!y)return;const e=y.value;if(y.innerHTML="",t.length===0){const n=document.createElement("option");n.value="",n.textContent="Aucun menu personnel",n.disabled=!0,y.appendChild(n);return}const s=I();t.forEach(n=>{if(n.isArchived||s&&n.archivedBy&&n.archivedBy.includes(s.uid))return;const r=document.createElement("option");r.value=n.id;let o=n.name;n.collaborators&&n.collaborators.length>0&&(n.isOwner?o=`👑 ${n.name} [Collab]`:o=`👥 ${n.name} [Collab] (de ${n.ownerName})`),r.textContent=o,y.appendChild(r)}),e&&y.querySelector(`option[value="${e}"]`)?y.value=e:y.selectedIndex=0}function Cn(){z=document.getElementById("create-plan-modal"),ae=document.getElementById("close-create-plan-modal"),ie=document.getElementById("cancel-create-plan-btn"),$=document.getElementById("create-plan-form"),y=document.getElementById("plan-select"),G=document.getElementById("rename-plan-modal"),oe=document.getElementById("close-rename-plan-modal"),de=document.getElementById("cancel-rename-plan-btn"),V=document.getElementById("rename-plan-form"),N=document.getElementById("new-plan-name"),J=document.getElementById("delete-confirm-modal"),le=document.getElementById("cancel-delete-btn"),ce=document.getElementById("confirm-delete-btn"),pe=document.getElementById("delete-confirm-title"),fe=document.getElementById("delete-confirm-message");const t=document.getElementById("create-plan-btn"),e=document.getElementById("rename-plan-btn"),s=document.getElementById("leave-plan-btn"),n=document.getElementById("delete-plan-btn"),r=l=>{l.preventDefault();const c=document.getElementById("plan-name");c&&c.value&&nn(c.value)},o=l=>{l.preventDefault(),ne&&N.value&&rn(ne,N.value)},a=()=>{se&&on(se).then(()=>{ue()})},i=()=>{if(y&&y.value){const l=y.options[y.selectedIndex];tn(y.value,l.text)}else alert("Veuillez sélectionner un menu à renommer.")},u=()=>{y&&y.value?an(y.value):alert("Veuillez sélectionner un menu.")},d=()=>{if(y&&y.value){const l=y.options[y.selectedIndex].text;sn(y.value,l)}else alert("Veuillez sélectionner un menu à supprimer.")};return t?.addEventListener("click",Ce),e?.addEventListener("click",i),s?.addEventListener("click",u),n?.addEventListener("click",d),ae?.addEventListener("click",O),ie?.addEventListener("click",O),$?.addEventListener("submit",r),oe?.addEventListener("click",H),de?.addEventListener("click",H),V?.addEventListener("submit",o),le?.addEventListener("click",ue),ce?.addEventListener("click",a),()=>{t?.removeEventListener("click",Ce),e?.removeEventListener("click",i),s?.removeEventListener("click",u),n?.removeEventListener("click",d),ae?.removeEventListener("click",O),ie?.removeEventListener("click",O),$?.removeEventListener("submit",r),oe?.removeEventListener("click",H),de?.removeEventListener("click",H),V?.removeEventListener("submit",o),le?.removeEventListener("click",ue),ce?.removeEventListener("click",a)}}async function dn(t,e){if(!(!t||!e))try{const s=v(m,"plans",t);await S(s,{collaborators:be(e),type:"collaborative"})}catch(s){console.error("Error adding collaborator: ",s)}}async function Sn(t,e,s="Modification diverse"){if(!t||!e)return;const n=I();if(n)try{const r=w(m,"plans",t,"history"),o=JSON.parse(JSON.stringify(e));await A(r,{planState:o,timestamp:R(),modifiedBy:n.uid,modifiedByName:n.displayName||n.email,description:s})}catch(r){console.error("Error saving history:",r)}}async function Mn(t,e){const s=I();if(!(!s||!t||!e))try{const n=w(m,"plan_saves"),r=M(n,E("userId","==",s.uid),E("name","==",t)),o=await _(r);if(o.empty)await A(n,{userId:s.uid,name:t,savedAt:R(),planData:e});else{const a=o.docs[0].id,i=v(m,"plan_saves",a);await S(i,{planData:e,savedAt:R()})}await en(s.uid,e)}catch(n){console.error("Error saving or updating plan save:",n),alert("Erreur lors de la sauvegarde.")}}console.log("DEBUG: Loading notifications.js module");let Ne=[],je=[],De=()=>{},qe=()=>{};const b={btn:null,btnMobile:null,badge:null,badgeMobile:null,dropdown:null,list:null};async function ln(t,e,s){const n=ve();if(n)try{const r=v(m,"shares",t);if(await S(r,{status:"accepted"}),e.plan){const o=s.displayName||"Inconnu",a=`Copie de "${e.plan.name}" (de ${o})`,i={...e.plan,userId:n,name:a,isShared:!0,originalOwnerId:e.senderId,sharedAt:new Date,collaborators:[]};delete i.id,await A(w(m,"plans"),i)}e.shoppingList&&await A(w(m,"shopping_lists"),{name:`${e.shoppingList.name} (de ${s.displayName})`,ingredients:e.shoppingList.ingredients,userId:n,isShared:!0,originalOwner:s.uid,sharedAt:new Date})}catch(r){console.error("Erreur lors de l'acceptation du partage : ",r),alert("Une erreur est survenue.")}}async function cn(t,e){const s=ve();if(!(!s||!e||!e.planId))try{await dn(e.planId,s);const n=v(m,"shares",t);await S(n,{status:"accepted"})}catch(n){console.error("Erreur lors de l'acceptation de l'invitation : ",n),alert("Une erreur est survenue.")}}async function Se(t){try{const e=v(m,"shares",t);await S(e,{status:"declined"})}catch(e){console.error("Erreur lors du refus du partage : ",e),alert("Une erreur est survenue.")}}async function un(t){try{await Re(t)}catch{alert("Erreur lors de l'acceptation.")}}function Fe(){if(!b.list)return;const t=[...Ne,...je];t.sort((s,n)=>n.createdAt.toMillis()-s.createdAt.toMillis());const e=s=>{s&&(t.length>0?(s.textContent=t.length,s.classList.remove("hidden")):s.classList.add("hidden"))};e(b.badge),e(b.badgeMobile),b.list.innerHTML="",t.length===0?b.list.innerHTML='<p class="text-gray-500 text-center p-4">Aucune nouvelle notification.</p>':t.forEach(s=>{const n=mn(s);b.list.appendChild(n)})}function mn(t){const e=document.createElement("div");e.className="p-3 border-b border-gray-100 hover:bg-gray-50";const s=document.createElement("p");s.className="text-sm font-medium text-gray-800";const n=document.createElement("p");n.className="text-xs text-gray-500 mb-3";const r=document.createElement("div");r.className="flex space-x-2 justify-end";const o=t.data.type||t.type;if(o==="collaborative_plan_invite"){s.textContent="Invitation à collaborer",n.textContent=`${t.sender.displayName} vous invite à modifier son plan "${t.data.planName}".`;const a=F("Accepter","btn-secondary",u=>{u.target.textContent="...",u.target.disabled=!0,cn(t.id,t.data)}),i=F("Refuser","text-red-500 hover:bg-red-50 px-3 py-1 rounded-md",u=>{u.target.disabled=!0,Se(t.id)});r.append(a,i)}else if(o==="share"){s.textContent=`Partage de ${t.sender.displayName||t.sender.email}`;let a=[];t.data.plan&&a.push("planification"),t.data.shoppingList&&a.push("liste de courses"),n.textContent=`Contenu : ${a.join(" et ")}`;const i=F("Accepter","btn-secondary",d=>{d.target.textContent="...",d.target.disabled=!0,ln(t.id,t.data,t.sender)}),u=F("Refuser","text-red-500 hover:bg-red-50 px-3 py-1 rounded-md",d=>{d.target.disabled=!0,Se(t.id)});r.append(i,u)}else if(o==="friend_request"){s.textContent="Invitation d'ami",n.textContent=`${t.sender.displayName||t.sender.email} vous a envoyé une invitation.`;const a=F("Accepter","btn-secondary",u=>{u.target.textContent="...",u.target.disabled=!0,un(t.id)}),i=F("Refuser","text-red-500 hover:bg-red-50 px-3 py-1 rounded-md",u=>{});r.append(a,i)}return e.append(s,n,r),e}function F(t,e,s){const n=document.createElement("button");return n.className=`btn btn-xs ${e}`,n.textContent=t,n.addEventListener("click",r=>{r.stopPropagation(),s(r)}),n}function pn(t){const e=w(m,"shares"),s=M(e,E("receiverId","==",t),E("status","==","pending"));De=j(s,async n=>{const r=[];for(const o of n.docs){const a=o.data(),i=await P(v(m,"users",a.senderId));i.exists()&&r.push({type:a.type||"share",id:o.id,data:a,sender:i.data(),createdAt:a.createdAt})}Ne=r,Fe()},n=>{console.error("Erreur d'écoute des partages:",n)})}function fn(t){const e=w(m,"friend_requests"),s=M(e,E("receiverId","==",t),E("status","==","pending"));qe=j(s,async n=>{const r=[];for(const o of n.docs){const a=o.data(),i=await P(v(m,"users",a.senderId));i.exists()&&r.push({type:"friend_request",id:o.id,data:a,sender:i.data(),createdAt:a.createdAt})}je=r,Fe()},n=>{console.error("Erreur d'écoute des invitations d'amis:",n)})}function gn(){if(console.log("DEBUG: initNotifications called"),b.btn=document.getElementById("notifications-btn"),b.btnMobile=document.getElementById("notifications-btn-mobile"),b.badge=document.getElementById("notifications-badge"),b.badgeMobile=document.getElementById("notifications-badge-mobile"),b.dropdown=document.getElementById("notifications-dropdown"),b.list=document.getElementById("notifications-list"),console.log("DEBUG: Notification elements found:",{btn:!!b.btn,btnMobile:!!b.btnMobile,dropdown:!!b.dropdown}),!b.btn||!b.dropdown)return;const t=ve();if(!t)return;De(),qe(),pn(t),fn(t);const e=b.btn.cloneNode(!0);if(b.btn.parentNode.replaceChild(e,b.btn),b.btn=e,b.badge=document.getElementById("notifications-badge"),b.btnMobile){const n=b.btnMobile.cloneNode(!0);b.btnMobile.parentNode.replaceChild(n,b.btnMobile),b.btnMobile=n,b.badgeMobile=document.getElementById("notifications-badge-mobile")}const s=n=>{console.log("Notification click detected"),n.stopPropagation();const r=document.getElementById("notifications-dropdown");if(!r)return;if(r.classList.contains("hidden")){r.classList.remove("hidden"),document.body.appendChild(r);const a=window.innerWidth<768,u=(a?b.btnMobile:b.btn).getBoundingClientRect();Object.assign(r.style,{display:"block",position:"fixed",zIndex:"10000",top:`${u.bottom+8}px`,maxHeight:"80vh"}),a?Object.assign(r.style,{left:"50%",transform:"translateX(-50%)",width:"95vw",right:"auto"}):Object.assign(r.style,{left:"auto",right:`${window.innerWidth-u.right}px`,transform:"none",width:"20rem"})}else r.classList.add("hidden"),r.style.cssText=""};b.btn.addEventListener("click",s),b.btnMobile&&b.btnMobile.addEventListener("click",s),document.addEventListener("click",n=>{const r=document.getElementById("notifications-dropdown");r&&!r.classList.contains("hidden")&&(b.btn.contains(n.target)||b.btnMobile&&b.btnMobile.contains(n.target)||r.contains(n.target)||(r.classList.add("hidden"),r.style.cssText=""))})}class bn{constructor(){this.config={mode:"auto",forcedSeason:"Printemps",offSeasonBehavior:"last",recipeRules:{prioritizeSeasonal:!0,allowPartial:!0,warnOffSeason:!0},listRules:{limitSuggestions:!0,allowManualAdd:!0}},this.STORAGE_KEY="gustoplan_season_config",this.loadConfig()}loadConfig(){const e=localStorage.getItem(this.STORAGE_KEY);if(e)try{const s=JSON.parse(e);this.config={...this.config,...s,recipeRules:{...this.config.recipeRules,...s.recipeRules||{}},listRules:{...this.config.listRules,...s.listRules||{}}}}catch(s){console.error("Failed to parse seasonality config",s)}}saveConfig(){localStorage.setItem(this.STORAGE_KEY,JSON.stringify(this.config)),window.dispatchEvent(new CustomEvent("seasonality-config-changed",{detail:this.config}))}updateConfig(e){this.config={...this.config,...e},this.saveConfig()}getCurrentSeason(){if(this.config.mode==="disabled")return null;if(this.config.mode==="forced")return this.config.forcedSeason;const e=new Date().getMonth();return e===11||e===0||e===1?"Hiver":e>=2&&e<=4?"Printemps":e>=5&&e<=7?"Eté":e>=8&&e<=10?"Automne":"Printemps"}isMonthInSeason(e,s){return!0}getIngredientScore(e){if(this.config.mode==="disabled")return 2;if(this.getMonthsForCurrentDate(),!e.months||e.months.length===0){if(e.seasons&&e.seasons.length>0){const r=this.getCurrentSeason();return e.seasons.includes(r)?2:0}return 2}const s=this.getTargetMonthsForSeason(this.getCurrentSeason());return e.months.some(r=>s.includes(r))?2:0}getRecipeScore(e){if(this.config.mode==="disabled")return 2;const s=this.getCurrentSeason(),n=this.getTargetMonthsForSeason(s);let r=null;return e.months&&e.months.length>0?r=e.months.some(a=>n.includes(a))?2:0:e.seasons&&e.seasons.length>0&&(r=e.seasons.includes(s)?2:0),r!==null?r:2}getTargetMonthsForSeason(e){return{Printemps:["Mars","Avril","Mai"],Eté:["Juin","Juillet","Août"],Automne:["Septembre","Octobre","Novembre"],Hiver:["Décembre","Janvier","Février"]}[e]||[]}getMonthsForCurrentDate(){const e=["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],s=new Date().getMonth();return[e[s]]}}const Me=new bn;function vn(){const t=document.getElementsByName("season-mode"),e=document.getElementById("forced-season-selector"),s=document.getElementById("forced-season-select"),n=document.getElementById("off-season-behavior"),r=document.getElementById("rule-prioritize-seasonal"),o=document.getElementById("rule-warn-off-season"),a=document.getElementById("settings-modal"),i=document.getElementById("close-settings-modal"),u=document.getElementById("header-settings-btn"),d=document.getElementById("save-settings-btn"),l=document.getElementById("settings-friends-list"),c=document.getElementById("settings-friends-search-input"),f=document.getElementById("settings-friends-search-btn"),h=document.getElementById("settings-friends-search-results");let g={},L=null;function k(){a&&(g={...Me.config},Ve(g),a.classList.remove("hidden"),Ue())}function T(){a&&a.classList.add("hidden"),L&&(L(),L=null)}function D(){Me.updateConfig(g),T()}u&&u.addEventListener("click",k),i&&i.addEventListener("click",T),d&&d.addEventListener("click",D),a&&a.addEventListener("click",p=>{p.target===a&&T()}),f&&f.addEventListener("click",()=>he(c.value)),c&&c.addEventListener("keyup",p=>{p.key==="Enter"&&he(c.value)});async function Ue(){const p=I()?.uid;if(!p||!l)return;l.innerHTML='<p class="text-xs text-center text-gray-500 py-4"><i class="fas fa-spinner fa-spin mr-2"></i>Chargement des amis...</p>';const x=v(m,"users",p);L=j(x,async C=>{if(!C.exists())return;const U=C.data().friends||[];if(l.innerHTML="",U.length===0){l.innerHTML=`
                    <div class="text-center py-6 bg-gray-50 dark:bg-gray-700/30 rounded-xl border border-dashed border-gray-200 dark:border-gray-600">
                        <i class="fas fa-user-friends text-gray-300 text-2xl mb-2 block"></i>
                        <p class="text-xs text-gray-400">Aucun ami pour le moment</p>
                    </div>`;return}for(const W of U)try{const q=await P(v(m,"users",W));q.exists()&&l.appendChild(Oe(q.data()))}catch(q){console.error("Erreur de chargement d'un ami",q)}})}function Oe(p){const x=document.createElement("div");x.className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg shadow-sm",x.innerHTML=`
            <div class="flex items-center">
                <img src="${p.photoURL||"https://placehold.co/32"}" class="w-8 h-8 rounded-full mr-2 object-cover">
                <div class="leading-tight">
                    <p class="text-xs font-bold text-gray-800 dark:text-gray-200">${p.displayName}</p>
                    <p class="text-[10px] text-gray-400">${p.email}</p>
                </div>
            </div>
        `;const C=document.createElement("button");return C.className="text-gray-400 hover:text-red-500 p-1.5 transition-colors",C.innerHTML='<i class="fas fa-user-minus"></i>',C.onclick=()=>He(p.uid),x.appendChild(C),x}async function He(p){const x=I()?.uid;if(!(!x||!confirm("Retirer cet ami ?")))try{await S(v(m,"users",x),{friends:Q(p)})}catch{alert("Erreur lors de la suppression")}}async function he(p){if(!p||!h)return;const x=I()?.uid;h.innerHTML='<p class="text-[10px] text-center text-gray-500"><i class="fas fa-spinner fa-spin mr-1"></i>Recherche...</p>';try{const C=p.toLowerCase(),U=M(w(m,"users"),E("email","==",C)),W=await _(U);if(h.innerHTML="",W.empty){h.innerHTML='<p class="text-[10px] text-center text-gray-400 italic">Aucun utilisateur trouvé par email</p>';return}W.forEach(q=>{const K=q.data();if(K.uid===x)return;const X=document.createElement("div");X.className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg shadow-sm",X.innerHTML=`
                    <div class="flex items-center">
                        <img src="${K.photoURL||"https://placehold.co/24"}" class="w-6 h-6 rounded-full mr-2">
                        <span class="text-xs font-medium text-gray-700 dark:text-gray-300 truncate max-w-[120px]">${K.displayName}</span>
                    </div>
                `;const Y=document.createElement("button");Y.className="bg-tomato/10 hover:bg-tomato text-tomato hover:text-white px-2 py-1 rounded text-[10px] font-bold transition-all",Y.textContent="Ajouter",Y.onclick=()=>$e(K.uid),X.appendChild(Y),h.appendChild(X)})}catch{h.innerHTML='<p class="text-[10px] text-red-500 text-center">Erreur de recherche</p>'}}async function $e(p){const x=I()?.uid;if(x)try{const C=M(w(m,"friend_requests"),E("senderId","==",x),E("receiverId","==",p));if(!(await _(C)).empty)return alert("Demande déjà envoyée");await A(w(m,"friend_requests"),{senderId:x,receiverId:p,status:"pending",createdAt:R()}),alert("Demande envoyée !"),h.innerHTML="",c.value=""}catch{alert("Erreur d'envoi")}}function Ve(p){Array.from(t).forEach(x=>{x.value===p.mode&&(x.checked=!0)}),ye(p.mode),p.forcedSeason&&(s.value=p.forcedSeason),p.offSeasonBehavior&&(n.value=p.offSeasonBehavior),r&&(r.checked=p.recipeRules?.prioritizeSeasonal||!1),o&&(o.checked=p.recipeRules?.warnOffSeason||!1)}Array.from(t).forEach(p=>{p.addEventListener("change",x=>{g.mode=x.target.value,ye(x.target.value)})}),s.addEventListener("change",p=>{g.forcedSeason=p.target.value}),n.addEventListener("change",p=>{g.offSeasonBehavior=p.target.value}),r&&r.addEventListener("change",p=>{g.recipeRules={...g.recipeRules,prioritizeSeasonal:p.target.checked}}),o&&o.addEventListener("change",p=>{g.recipeRules={...g.recipeRules,warnOffSeason:p.target.checked}});function ye(p){p==="forced"?e.classList.remove("hidden"):e.classList.add("hidden")}}function hn(){const t=I();if(t){const a=document.getElementById("user-display-name");a&&(a.textContent=t.displayName||t.email)}const e=document.getElementById("feedback-btn"),s=document.getElementById("feedback-modal"),n=document.getElementById("close-feedback-modal"),r=document.getElementById("feedback-modal-form");console.log("DEBUG: Feedback Init:",{btn:!!e,modal:!!s,close:!!n}),e&&s&&n&&(e.addEventListener("click",a=>{console.log("DEBUG: Feedback Button Clicked"),a.preventDefault(),s.classList.remove("hidden")}),n.addEventListener("click",()=>{s.classList.add("hidden")}),s.addEventListener("click",a=>{a.target===s&&s.classList.add("hidden")})),r&&r.addEventListener("submit",async a=>{a.preventDefault();const i=r.querySelector('button[type="submit"]'),u=i.innerHTML;i.disabled=!0,i.innerHTML='<i class="fas fa-circle-notch fa-spin mr-2"></i> Envoi...';try{const d=r.querySelector('input[name="feedback-type"]:checked'),l=document.getElementById("feedback-message").value,c=document.getElementById("feedback-email").value,f={type:d?d.value:"avis",message:l,contactEmail:c||null,userAgent:navigator.userAgent,url:window.location.href,userId:t?t.uid:"unknown",timestamp:R()};if(console.log("DEBUG: Feedback Payload:",f),console.log("DEBUG: DB Instance:",m),!m)throw new Error("Database instance (db) is undefined");await A(w(m,"feedback"),f),alert("Merci ! Votre retour a bien été envoyé."),s.classList.add("hidden"),r.reset()}catch(d){console.error("Erreur feedback FULL:",d),console.error("Erreur feedback MSG:",d.message),console.error("Erreur feedback CODE:",d.code),alert("Une erreur est survenue: "+(d.message||"Erreur inconnue"))}finally{i.disabled=!1,i.innerHTML=u}});const o=document.querySelectorAll(".nav-btn");o.forEach(a=>{a.addEventListener("click",i=>{const u=i.currentTarget.dataset.path;u&&(ee(u),o.forEach(d=>{d.classList.remove("bg-tomato","text-white"),d.classList.add("bg-white","text-tomato")}),i.currentTarget.classList.add("bg-tomato","text-white"),i.currentTarget.classList.remove("bg-white","text-tomato"))})}),ee("menu"),console.log("DEBUG: Calling initNotifications..."),gn(),vn()}document.addEventListener("DOMContentLoaded",()=>{Gs().then(g=>{g&&hn()});const t=document.getElementById("profile-btn"),e=document.getElementById("profile-menu"),s=document.getElementById("user-display-name");if(t&&e){const g=L=>{L.stopPropagation(),e.classList.toggle("hidden");const k=!e.classList.contains("hidden");t.setAttribute("aria-expanded",k)};t.addEventListener("click",g),s&&(s.addEventListener("click",g),s.style.cursor="pointer"),document.addEventListener("click",L=>{!(e.contains(L.target)||t.contains(L.target)||s&&s.contains(L.target))&&!e.classList.contains("hidden")&&(e.classList.add("hidden"),t.setAttribute("aria-expanded","false"))})}const n=document.getElementById("settings-link"),r=document.getElementById("settings-modal"),o=document.getElementById("close-settings-modal"),a=document.getElementById("dark-mode-toggle"),i=g=>{g==="dark"?(document.documentElement.classList.add("dark"),a&&(a.checked=!0)):(document.documentElement.classList.remove("dark"),a&&(a.checked=!1)),localStorage.setItem("theme",g)},u=localStorage.getItem("theme");u?i(u):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?i("dark"):i("light"),n&&r&&n.addEventListener("click",g=>{g.preventDefault(),r.classList.remove("hidden")}),o&&r&&o.addEventListener("click",()=>{r.classList.add("hidden")}),r&&r.addEventListener("click",g=>{g.target===r&&r.classList.add("hidden")}),a&&a.addEventListener("change",()=>{const g=a.checked?"dark":"light";localStorage.setItem("theme",g),i(g)});const d=document.getElementById("mobile-menu-btn"),l=document.getElementById("mobile-menu");let c=null;d&&l?(console.log("Mobile menu initialized (Overlay Mode)"),d.addEventListener("click",g=>{g.stopPropagation(),c?(c.remove(),c=null):(c=document.createElement("div"),c.id="mobile-menu-overlay-container",c.innerHTML=l.innerHTML,Object.assign(c.style,{position:"fixed",top:"60px",left:"0",width:"100%",backgroundColor:"#3D405B",zIndex:"10000",boxShadow:"0 4px 6px rgba(0,0,0,0.1)",padding:"1rem",display:"block"}),c.addEventListener("click",L=>{const k=L.target.closest("button");if(!k)return;const T=k.dataset.path;if(T)console.log("Overlay: Navigating directly to",T),ee(T);else if(k.id==="profile-btn-mobile")console.log("Overlay: Opening settings"),r&&r.classList.remove("hidden");else{let D=null;k.id&&(D=document.getElementById(k.id)),D?(console.log("Overlay: Delegating click to original:",D),D.click()):console.warn("Overlay: No action found for",k)}c&&(c.remove(),c=null)}),document.body.appendChild(c))}),document.addEventListener("click",g=>{c&&!c.contains(g.target)&&!d.contains(g.target)&&(c.remove(),c=null)})):console.warn("Mobile menu elements missing");const f=document.getElementById("profile-btn-mobile");f&&r&&f.addEventListener("click",()=>{r.classList.remove("hidden")}),document.querySelectorAll(".nav-btn-mobile").forEach(g=>{g.addEventListener("click",L=>{const k=L.currentTarget.dataset.path;ee(k)})})});export{B as _,In as a,Ln as b,wn as c,on as d,I as e,Te as f,ve as g,nn as h,Cn as i,Sn as j,Mn as k,xn as l,ee as n,kn as p,En as r,Me as s};
