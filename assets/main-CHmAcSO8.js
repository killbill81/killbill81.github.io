const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/script-BfT-krMU.js","assets/firebase-config-CDPbqvnt.js","assets/recipes-CUqsB9D2.js","assets/sharing-BLcsrPih.js","assets/ingredients-B41MzHJf.js","assets/lists-D_DgosNg.js","assets/shared-P9BvDplB.js","assets/all-plans-CJC5MwSb.js","assets/view-plan-CMOr-xWl.js","assets/shopping-mode-b57Ma2vE.js"])))=>i.map(i=>d[i]);
import{bb as Ce,bc as le,bd as J,q as I,c as h,d as f,w as x,g as M,a as v,u as C,o as T,h as B,aj as ie,b as A,b1 as D,f as oe,i as ge,ak as ve,A as ke,z as _e,B as Pe,C as Me,D as Ae,E as Be,F as Se,G as Te,H as Re,I as Ne,J as je,K as qe,L as De,M as Fe,P as Oe,Q as Ue,N as He,O as $e,R as Ve,S as ze,T as Qe,U as Ge,V as We,W as Je,X as Xe,Y as Ke,Z as Ze,_ as Ye,$ as et,a0 as tt,a1 as st,a2 as nt,a3 as at,a4 as rt,a5 as it,a6 as ot,a7 as dt,a8 as lt,a9 as ct,aa as ut,ab as mt,ac as pt,ad as bt,ae as ft,af as gt,ag as vt,ah as xt,ai as ht,al as yt,am as wt,an as Et,ao as Lt,ap as It,aq as Ct,ar as kt,as as _t,at as Pt,au as Mt,av as At,aw as Bt,ax as St,ay as Tt,az as Rt,aA as Nt,aB as jt,aC as qt,aD as Dt,aE as Ft,aF as Ot,aG as Ut,aH as Ht,aI as $t,aJ as Vt,aK as zt,aL as Qt,aM as Gt,aN as Wt,aO as Jt,aP as Xt,aQ as Kt,aR as Zt,aS as Yt,aT as es,aU as ts,aV as ss,aW as ns,v as as,aX as rs,aY as is,aZ as os,a_ as ds,a$ as ls,b0 as cs,x as us,s as ms,b2 as ps,b3 as bs,b4 as fs,b5 as gs,b6 as vs,b7 as xs,b8 as hs,b9 as ys,ba as ws,e as Es}from"./firebase-config-CDPbqvnt.js";const Ls="modulepreload",Is=function(e){return"/"+e},ce={},_=function(t,s,n){let a=Promise.resolve();if(s&&s.length>0){let m=function(d){return Promise.all(d.map(u=>Promise.resolve(u).then(l=>({status:"fulfilled",value:l}),l=>({status:"rejected",reason:l}))))};document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),i=r?.nonce||r?.getAttribute("nonce");a=m(s.map(d=>{if(d=Is(d),d in ce)return;ce[d]=!0;const u=d.endsWith(".css"),l=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${l}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":Ls,u||(p.as="script"),p.crossOrigin="",p.href=d,i&&p.setAttribute("nonce",i),document.head.appendChild(p),u)return new Promise((y,b)=>{p.addEventListener("load",y),p.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${d}`)))})}))}function o(r){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=r,window.dispatchEvent(i),!i.defaultPrevented)throw r}return a.then(r=>{for(const i of r||[])i.status==="rejected"&&o(i.reason);return t().catch(o)})},ue=document.querySelector("main"),Cs={menu:{html:`
        <div class="flex flex-col md:flex-row md:space-x-2">

            <!-- Left Column: Meal Planner -->
            <div class="w-full md:w-5/6">
                <section id="meal-planning-section" aria-labelledby="meal-planning-heading" class="mb-8 md:mb-12">
                                    <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                                        <h2 id="meal-planning-heading" class="text-xl md:text-2xl font-bold text-foreground">Planification des repas</h2>
                                        <div class="mt-3 md:mt-0 flex items-center space-x-2 md:space-x-3 plan-actions">
                                            <button id="generate-plan-ai-btn" class="btn btn-primary btn-sm">
                                                <i class="fas fa-robot mr-1 md:mr-2"></i> IA Semaine
                                            </button>
                                            <button id="clear-menu-btn" class="btn btn-outline btn-sm text-red-800 hover:bg-red-100">
                                                <i class="fas fa-trash-alt mr-1 md:mr-2"></i> Vider le menu
                                            </button>
                                            <button id="export-plan-pdf-btn" class="btn btn-outline btn-sm">
                                                <i class="fas fa-file-pdf mr-1 md:mr-2"></i> Exporter Plan (PDF)
                                            </button>
                                            <button id="share-plan-btn" class="btn btn-secondary btn-sm">
                                                <i class="fas fa-share-alt mr-1 md:mr-2"></i> Partager
                                            </button>
                                            <button id="save-plan-btn" class="btn btn-secondary btn-sm">
                                                <i class="fas fa-save mr-1 md:mr-2"></i> Sauvegarder Plan
                                            </button>
                                        </div>
                                    </div>
                            
                                    <!-- Week Navigation & Plan Selector -->
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
                                            <label for="plan-select" class="text-sm font-medium text-gray-700">Plan affiché:</label>
                                            <select id="plan-select" class="rounded-md border-gray-300 shadow-sm focus:border-tomato focus:ring focus:ring-tomato focus:ring-opacity-50 text-sm py-1">
                                                <!-- Options will be generated by JS -->
                                            </select>
                                            <button id="create-plan-btn" class="btn btn-primary btn-sm" title="Créer un nouveau plan">
                                                <i class="fas fa-plus"></i>
                                            </button>
                                            <button id="rename-plan-btn" class="text-blue-500 hover:bg-blue-100 text-sm px-3 py-1 rounded-md" title="Renommer le plan sélectionné">
                                                <i class="fas fa-pencil-alt"></i>
                                            </button>
                                            <button id="history-plan-btn" class="text-purple-500 hover:bg-purple-100 text-sm px-3 py-1 rounded-md" title="Historique des modifications">
                                                <i class="fas fa-history"></i>
                                            </button>
                                            <button id="leave-plan-btn" class="text-yellow-600 hover:bg-yellow-100 text-sm px-3 py-1 rounded-md" title="Quitter le plan collaboratif">
                                                <i class="fas fa-door-open"></i>
                                            </button>
                                            <button id="delete-plan-btn" class="text-red-500 hover:bg-red-100 text-sm px-3 py-1 rounded-md" title="Supprimer le plan sélectionné">
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
                <h3 id="shared-plans-modal-title" class="text-2xl font-bold mb-6">Plans partagés pour la Semaine X</h3>
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
            <p class="text-center text-muted-foreground p-10">Chargement des ingrédients...</p>
        </div>

        <!-- Ingredient Form Modal -->
        <div id="ingredient-form-modal" class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[100] hidden">
            <div class="bg-white rounded-xl p-6 w-11/12 max-w-md relative">
                <button id="close-ingredient-modal" class="absolute top-4 right-4 text-gray-400 hover:text-muted-foreground"><i class="fas fa-times text-xl"></i></button>
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
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Saisonnalité (Optionnel)</label>
                        <div class="flex flex-wrap gap-2">
                            <label class="flex items-center space-x-2 cursor-pointer bg-green-50 px-2 py-1 rounded-md border border-green-200">
                                <input type="checkbox" id="season-printemps" value="Printemps" class="form-checkbox h-4 w-4 text-green-600 focus:ring-green-500">
                                <span class="text-sm text-green-800">Printemps 🌸</span>
                            </label>
                            <label class="flex items-center space-x-2 cursor-pointer bg-yellow-50 px-2 py-1 rounded-md border border-yellow-200">
                                <input type="checkbox" id="season-ete" value="Eté" class="form-checkbox h-4 w-4 text-yellow-600 focus:ring-yellow-500">
                                <span class="text-sm text-yellow-800">Eté ☀️</span>
                            </label>
                            <label class="flex items-center space-x-2 cursor-pointer bg-orange-50 px-2 py-1 rounded-md border border-orange-200">
                                <input type="checkbox" id="season-automne" value="Automne" class="form-checkbox h-4 w-4 text-orange-600 focus:ring-orange-500">
                                <span class="text-sm text-orange-800">Automne 🍂</span>
                            </label>
                            <label class="flex items-center space-x-2 cursor-pointer bg-blue-50 px-2 py-1 rounded-md border border-blue-200">
                                <input type="checkbox" id="season-hiver" value="Hiver" class="form-checkbox h-4 w-4 text-blue-600 focus:ring-blue-500">
                                <span class="text-sm text-blue-800">Hiver ❄️</span>
                            </label>
                        </div>
                    </div>
                    <div>
                        <label for="ingredient-image-url" class="block text-sm font-medium text-gray-700">URL de l'image</label>
                        <input type="text" id="ingredient-image-url" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" placeholder="Laisser vide pour une image aléatoire">
                    </div>
                    <div class="flex justify-end space-x-4 pt-2">
                        <button type="button" id="cancel-ingredient-btn" class="text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md">Annuler</button>
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
        `,script:"./lists.js"},friends:{html:`
        <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl md:text-3xl font-bold text-foreground">Mes Amis</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="md:col-span-2 space-y-8">
                <div>
                    <h3 class="text-xl font-bold text-foreground mb-4">Liste d'amis</h3>
                    <div id="friends-list-container" class="space-y-4">
                        <!-- La liste d'amis sera chargée ici -->
                    </div>
                </div>
                <div>
                    <h3 class="text-xl font-bold text-foreground mb-4">Demandes envoyées en attente</h3>
                    <div id="pending-requests-container" class="space-y-4">
                        <!-- Les demandes envoyées en attente seront chargées ici -->
                    </div>
                </div>
                <div>
                    <h3 class="text-xl font-bold text-foreground mb-4">Demandes rejetées</h3>
                    <div id="declined-requests-container" class="space-y-4">
                        <!-- Les demandes rejetées seront chargées ici -->
                    </div>
                </div>
            </div>
            <div>
                <div class="bg-card text-card-foreground rounded-xl shadow-md border border-border p-6">
                    <h3 class="text-xl font-bold text-foreground mb-4">Rechercher un ami</h3>
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
        <div id="all-plans-list" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- La liste des plans sera chargée ici -->
            <p class="text-center text-muted-foreground p-10 col-span-full">Chargement de vos plans...</p>
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
        `,script:"./view-plan.js"},"shopping-mode":{html:`
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
                    <label for="shopping-mode-plan-select" class="text-sm font-medium text-gray-700 mr-2">Plan:</label>
                    <select id="shopping-mode-plan-select" class="text-sm border-gray-300 rounded-md shadow-sm focus:ring-tomato focus:border-tomato font-medium text-gray-700 bg-white pr-8">
                        <option>Chargement...</option>
                    </select>
                </div>
            </div>
            
            <div id="shopping-mode-container" class="p-4 -mt-4">
                <p class="text-center text-muted-foreground mt-10">Chargement de la liste...</p>
            </div>
        </div>
        `,script:"./shopping-mode.js"}},ks={"./script.js":()=>_(()=>import("./script-BfT-krMU.js"),__vite__mapDeps([0,1,2,3])),"./recipes.js":()=>_(()=>import("./recipes-CUqsB9D2.js").then(e=>e.r),__vite__mapDeps([2,1])),"./ingredients.js":()=>_(()=>import("./ingredients-B41MzHJf.js"),__vite__mapDeps([4,1])),"./lists.js":()=>_(()=>import("./lists-D_DgosNg.js"),__vite__mapDeps([5,1,3])),"./friends.js":()=>_(()=>Promise.resolve().then(()=>Rs),void 0),"./shared.js":()=>_(()=>import("./shared-P9BvDplB.js"),__vite__mapDeps([6,1])),"./all-plans.js":()=>_(()=>import("./all-plans-CJC5MwSb.js"),__vite__mapDeps([7,1])),"./view-plan.js":()=>_(()=>import("./view-plan-CMOr-xWl.js"),__vite__mapDeps([8,1])),"./shopping-mode.js":()=>_(()=>import("./shopping-mode-b57Ma2vE.js"),__vite__mapDeps([9,1]))};let $=null;async function V(e){typeof $=="function"&&($(),$=null);const t=Cs[e];if(t&&ue){if(ue.innerHTML=t.html,t.script){const s=ks[t.script];if(s)try{const n=await s();n.default&&typeof n.default=="function"&&($=n.default())}catch(n){console.error(`Error loading module ${t.script}:`,n)}else console.error(`Module not found in map for path: ${t.script}`)}}else console.error(`Route not found: ${e}`)}const Ks=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:ke,AggregateField:_e,AggregateQuerySnapshot:Pe,Bytes:Me,CACHE_SIZE_UNLIMITED:Ae,CollectionReference:Be,DocumentReference:Se,DocumentSnapshot:Te,FieldPath:Re,FieldValue:Ne,Firestore:je,FirestoreError:qe,GeoPoint:De,LoadBundleTask:Fe,PersistentCacheIndexManager:Oe,Query:Ue,QueryCompositeFilterConstraint:He,QueryConstraint:$e,QueryDocumentSnapshot:Ve,QueryEndAtConstraint:ze,QueryFieldFilterConstraint:Qe,QueryLimitConstraint:Ge,QueryOrderByConstraint:We,QuerySnapshot:Je,QueryStartAtConstraint:Xe,SnapshotMetadata:Ke,Timestamp:Ze,Transaction:Ye,VectorValue:et,WriteBatch:tt,_AutoId:st,_ByteString:nt,_DatabaseId:at,_DocumentKey:rt,_EmptyAppCheckTokenProvider:it,_EmptyAuthCredentialsProvider:ot,_FieldPath:dt,_TestingHooks:lt,_cast:ct,_debugAssert:ut,_internalAggregationQueryToProtoRunAggregationQueryRequest:mt,_internalQueryToProtoQueryTarget:pt,_isBase64Available:bt,_logWarn:ft,_validateIsNotUsedTogether:gt,addDoc:A,aggregateFieldEqual:vt,aggregateQuerySnapshotEqual:xt,and:ht,arrayRemove:ie,arrayUnion:ve,average:yt,clearIndexedDbPersistence:wt,collection:h,collectionGroup:Et,connectFirestoreEmulator:Lt,count:It,deleteAllPersistentCacheIndexes:Ct,deleteDoc:oe,deleteField:kt,disableNetwork:_t,disablePersistentCacheIndexAutoCreation:Pt,doc:v,documentId:Mt,documentSnapshotFromJSON:At,enableIndexedDbPersistence:Bt,enableMultiTabIndexedDbPersistence:St,enableNetwork:Tt,enablePersistentCacheIndexAutoCreation:Rt,endAt:Nt,endBefore:jt,ensureFirestoreConfigured:qt,executeWrite:Dt,getAggregateFromServer:Ft,getCountFromServer:Ot,getDoc:B,getDocFromCache:Ut,getDocFromServer:Ht,getDocs:M,getDocsFromCache:$t,getDocsFromServer:Vt,getFirestore:ge,getPersistentCacheIndexManager:zt,increment:Qt,initializeFirestore:Gt,limit:Wt,limitToLast:Jt,loadBundle:Xt,memoryEagerGarbageCollector:Kt,memoryLocalCache:Zt,memoryLruGarbageCollector:Yt,namedQuery:es,onSnapshot:T,onSnapshotResume:ts,onSnapshotsInSync:ss,or:ns,orderBy:as,persistentLocalCache:rs,persistentMultipleTabManager:is,persistentSingleTabManager:os,query:I,queryEqual:ds,querySnapshotFromJSON:ls,refEqual:cs,runTransaction:us,serverTimestamp:D,setDoc:ms,setIndexConfiguration:ps,setLogLevel:bs,snapshotEqual:fs,startAfter:gs,startAt:vs,sum:xs,terminate:hs,updateDoc:C,vector:ys,waitForPendingWrites:ws,where:x,writeBatch:Es},Symbol.toStringTag,{value:"Module"}));let z=null;function _s(){return new Promise(e=>{Ce(J,t=>{if(z=t,t){console.log("User is logged in:",t.uid);const s=document.getElementById("logout-btn"),n=document.getElementById("profile-btn");s&&s.classList.remove("hidden"),n&&n.classList.remove("hidden"),s&&!s.hasAttribute("data-listener-attached")&&(s.addEventListener("click",()=>{le(J).catch(o=>{console.error("Sign Out Error",o)})}),s.setAttribute("data-listener-attached","true"));const a=document.getElementById("logout-btn-mobile");a&&!a.hasAttribute("data-listener-attached")&&(a.addEventListener("click",()=>{le(J).catch(o=>{console.error("Sign Out Error",o)})}),a.setAttribute("data-listener-attached","true")),e(t)}else{console.log("User not logged in. Redirecting to login.html");const s=window.location.origin+"/login.html";window.location.href!==s&&(window.location.href=s),e(null)}})})}function de(){return z?z.uid:null}function k(){return z}let ne=()=>{};function Ps(){const e=document.getElementById("search-friends-input");return document.getElementById("search-friends-btn").addEventListener("click",()=>me(e.value)),e.addEventListener("keyup",s=>{s.key==="Enter"&&me(e.value)}),Ms(),xe(),()=>{ne&&ne()}}async function Ms(){const e=document.getElementById("friends-list-container"),t=k()?.uid;if(!t||!e)return;e.innerHTML='<p class="text-gray-500">Chargement...</p>';const s=v(f,"users",t);ne=T(s,async n=>{if(!n.exists()){e.innerHTML='<p class="text-red-500">Erreur: Utilisateur non trouvé.</p>';return}const a=n.data().friends||[];if(e.innerHTML="",a.length===0){e.innerHTML=`<p class="text-gray-500">Vous n'avez pas encore d'amis. Utilisez la recherche pour en ajouter.</p>`;return}for(const o of a)try{const r=await B(v(f,"users",o));r.exists()&&e.appendChild(As(r.data()))}catch(r){console.error("Erreur de chargement d'un ami",r)}})}function As(e){const t=document.createElement("div");t.className="bg-card text-card-foreground p-3 rounded-lg flex items-center justify-between shadow-sm border border-border";const s=document.createElement("div");s.className="flex items-center",s.innerHTML=`
        <img src="${e.photoURL||"https://placehold.co/40"}" 
             alt="Avatar" 
             class="w-10 h-10 rounded-full mr-3 object-cover bg-muted"
             onerror="this.onerror=null; this.src='https://placehold.co/40?text=${e.displayName?e.displayName.charAt(0).toUpperCase():"?"}';">
        <div>
            <p class="font-bold">${e.displayName}</p>
            <p class="text-sm text-muted-foreground">${e.email}</p>
        </div>
    `;const n=document.createElement("button");return n.className="text-red-500 hover:bg-red-50 text-sm px-3 py-1 rounded-md",n.innerHTML='<i class="fas fa-user-times"></i>',n.title="Retirer cet ami",n.addEventListener("click",()=>Bs(e.uid)),t.appendChild(s),t.appendChild(n),t}async function Bs(e){const t=k()?.uid;if(!t||!e){console.error("Impossible de supprimer l'ami : ID utilisateur ou ID ami manquant.");return}if(!confirm("Voulez-vous vraiment retirer cet ami ? Cette action est unilatérale."))return;console.log(`Tentative de suppression de l'ami ${e} pour l'utilisateur ${t}`);const s=v(f,"users",t);try{await C(s,{friends:ie(e)}),console.log("Ami supprimé avec succès de la base de données.")}catch(n){console.error("Erreur lors de la suppression de l'ami: ",n),alert("Une erreur est survenue.")}}async function me(e){const t=document.getElementById("search-results-container"),s=k()?.uid;if(!(!e||!t)){t.innerHTML='<p class="text-gray-500">Recherche en cours...</p>';try{const n=e.toLowerCase(),a=n+"",o=I(h(f,"users"),x("displayName_lowercase",">=",n),x("displayName_lowercase","<",a)),r=I(h(f,"users"),x("email","==",n)),[i,m]=await Promise.all([M(o),M(r)]),d=new Map;if(i.forEach(u=>d.set(u.id,u.data())),m.forEach(u=>d.set(u.id,u.data())),t.innerHTML="",d.size===0){t.innerHTML='<p class="text-gray-500">Aucun utilisateur trouvé.</p>';return}d.forEach(u=>{if(u.uid===s)return;const l=document.createElement("div");l.className="bg-gray-50 p-2 rounded-lg flex items-center justify-between",l.innerHTML=`
                <div class="flex items-center">
                    <img src="${u.photoURL||"https://placehold.co/32"}" class="w-8 h-8 rounded-full mr-2">
                    <span class="font-medium text-sm">${u.displayName} (${u.email})</span>
                </div>
            `;const p=document.createElement("button");p.className="btn btn-secondary btn-xs",p.innerHTML='<i class="fas fa-user-plus"></i>',p.addEventListener("click",()=>Ss(u.uid)),l.appendChild(p),t.appendChild(l)})}catch(n){console.error("Erreur de recherche: ",n),t.innerHTML='<p class="text-red-500">Erreur de recherche.</p>'}}}async function Ss(e){const t=k()?.uid;if(!t||t===e)return;const s=I(h(f,"friend_requests"),x("senderId","==",t),x("receiverId","==",e)),n=I(h(f,"friend_requests"),x("senderId","==",e),x("receiverId","==",t)),[a,o]=await Promise.all([M(s),M(n)]);if(!a.empty||!o.empty)return alert("Une demande d'ami existe déjà avec cet utilisateur.");if((await B(v(f,"users",t))).data()?.friends?.includes(e))return alert("Vous êtes déjà ami avec cet utilisateur.");try{await A(h(f,"friend_requests"),{senderId:t,receiverId:e,status:"pending",createdAt:D()}),alert("Demande d'ami envoyée !")}catch(i){console.error("Erreur lors de l'envoi de la demande d'ami: ",i),alert("Une erreur est survenue.")}}async function xe(){const e=document.getElementById("pending-requests-container"),t=document.getElementById("declined-requests-container"),s=k()?.uid;if(!(!s||!e||!t)){e.innerHTML='<p class="text-gray-500">Chargement...</p>',t.innerHTML='<p class="text-gray-500">Chargement...</p>';try{const n=I(h(f,"friend_requests"),x("senderId","==",s)),a=await M(n),o=[],r=[];for(const i of a.docs){const m={id:i.id,...i.data()},d=await B(v(f,"users",m.receiverId));d.exists()&&(m.receiver=d.data()),m.status==="pending"?o.push(m):m.status==="declined"&&r.push(m)}e.innerHTML="",o.length>0?o.forEach(i=>e.appendChild(pe(i))):e.innerHTML='<p class="text-gray-500">Aucune demande en attente.</p>',t.innerHTML="",r.length>0?r.forEach(i=>t.appendChild(pe(i))):t.innerHTML='<p class="text-gray-500">Aucune demande rejetée.</p>'}catch(n){console.error("Erreur lors du chargement des demandes envoyées: ",n),e.innerHTML='<p class="text-red-500">Erreur de chargement.</p>',t.innerHTML='<p class="text-red-500">Erreur de chargement.</p>'}}}function pe(e){const t=document.createElement("div");t.className="bg-card text-card-foreground p-3 rounded-lg flex items-center justify-between shadow-sm border border-border";const s=e.receiver,n=document.createElement("div");n.className="flex items-center",n.innerHTML=`
        <img src="${s?.photoURL||"https://placehold.co/40"}" 
             alt="Avatar" 
             class="w-10 h-10 rounded-full mr-3 object-cover bg-muted"
             onerror="this.onerror=null; this.src='https://placehold.co/40?text=${s?.displayName?s.displayName.charAt(0).toUpperCase():"?"}';">
        <div>
            <p class="font-bold">${s?.displayName||"Utilisateur inconnu"}</p>
            <p class="text-sm text-muted-foreground">Statut : <span class="font-medium">${e.status}</span></p>
        </div>
    `;const a=document.createElement("button");return a.className="text-red-500 hover:bg-red-50 text-sm px-3 py-1 rounded-md",a.innerHTML='<i class="fas fa-times-circle"></i>',a.title="Annuler la demande",a.addEventListener("click",async()=>{confirm("Voulez-vous vraiment annuler cette demande ?")&&(await oe(v(f,"friend_requests",e.id)),xe())}),t.appendChild(n),t.appendChild(a),t}async function he(e){try{const t=v(f,"friend_requests",e);await C(t,{status:"accepted"})}catch(t){throw console.error("Erreur lors de l'acceptation de la demande d'ami: ",t),t}}async function Ts(e){try{const t=v(f,"friend_requests",e);await C(t,{status:"declined"})}catch(t){throw console.error("Erreur lors du refus de la demande d'ami: ",t),t}}const Rs=Object.freeze(Object.defineProperty({__proto__:null,acceptFriendRequest:he,declineFriendRequest:Ts,default:Ps},Symbol.toStringTag,{value:"Module"})),L=ge();let F,X,K,j,g,O,Z,Y,q,P,U,ee,te,ae,re,Q=null,G=null;function be(){F&&F.classList.remove("hidden")}function R(){F&&F.classList.add("hidden"),j&&j.reset()}function Ns(e,t){G=e,P&&(P.value=t),O&&O.classList.remove("hidden"),P&&P.focus()}function N(){G=null,O&&O.classList.add("hidden"),q&&q.reset()}function js(e,t){Q=e,ae&&(ae.textContent="Confirmer la suppression"),re&&(re.textContent=`Êtes-vous sûr de vouloir supprimer le plan "${t}" ? Cette action est irréversible.`),U&&U.classList.remove("hidden")}function se(){Q=null,U&&U.classList.add("hidden")}async function qs(e){const t=k();if(t)try{await A(h(L,"plans"),{userId:t.uid,name:e,type:"personal",weeks:{},manualItems:[],checkedItems:{},defaultNumPeople:1,startDay:"Lundi",lastUpdated:new Date}),R()}catch(s){console.error("Error creating plan: ",s),alert("Erreur lors de la création du plan.")}}async function Ds(e,t){if(!(!e||!t))try{const s=v(L,"plans",e);await C(s,{name:t}),N()}catch(s){console.error("Error renaming plan: ",s),alert("Erreur lors du renommage du plan.")}}async function Fs(e){const t=k()?.uid;if(!(!e||!t)&&confirm("Voulez-vous vraiment quitter ce plan partagé ? Il n'apparaîtra plus dans votre liste."))try{const s=v(L,"plans",e);await C(s,{collaborators:ie(t)})}catch(s){console.error("Erreur pour quitter le plan: ",s),alert("Une erreur est survenue.")}}async function Os(e){if(e)try{await oe(v(L,"plans",e))}catch(t){console.error("Error deleting plan: ",t),alert("Erreur lors de la suppression du plan.")}}function Zs(e){const t=k();if(!t)return()=>{};let s=new Map;const n=()=>{e(Array.from(s.values()).sort((d,u)=>d.name.localeCompare(u.name)))},a=async d=>{const l=[d.userId,...d.collaborators||[]].map(y=>B(v(L,"users",y)));return(await Promise.all(l)).map(y=>y.exists()?y.data():{uid:y.id,displayName:"Inconnu"})},o=I(h(L,"plans"),x("userId","==",t.uid)),r=T(o,async d=>{const l=d.docChanges().map(async p=>{if(p.type==="removed")s.delete(p.doc.id);else{const y=p.doc.data(),b=await a(y);s.set(p.doc.id,{id:p.doc.id,...y,isOwner:!0,participants:b})}});await Promise.all(l),n()}),i=I(h(L,"plans"),x("collaborators","array-contains",t.uid)),m=T(i,async d=>{const l=d.docChanges().map(async p=>{if(p.type==="removed")s.delete(p.doc.id);else{const y=p.doc.data(),b=await a(y),E=b.find(w=>w.uid===y.userId);s.set(p.doc.id,{id:p.doc.id,...y,isOwner:!1,ownerName:E?.displayName||"Inconnu",participants:b})}});await Promise.all(l),n()});return()=>{r(),m()}}function Ys(e){if(!g)return;const t=g.value;if(g.innerHTML="",e.length===0){const s=document.createElement("option");s.value="",s.textContent="Aucun plan personnel",s.disabled=!0,g.appendChild(s);return}e.forEach(s=>{const n=document.createElement("option");n.value=s.id;let a=s.name;s.collaborators&&s.collaborators.length>0&&(s.isOwner?a=`👑 ${s.name} [Collab]`:a=`👥 ${s.name} [Collab] (de ${s.ownerName})`),n.textContent=a,g.appendChild(n)}),t&&g.querySelector(`option[value="${t}"]`)?g.value=t:g.selectedIndex=0}function en(){F=document.getElementById("create-plan-modal"),X=document.getElementById("close-create-plan-modal"),K=document.getElementById("cancel-create-plan-btn"),j=document.getElementById("create-plan-form"),g=document.getElementById("plan-select"),O=document.getElementById("rename-plan-modal"),Z=document.getElementById("close-rename-plan-modal"),Y=document.getElementById("cancel-rename-plan-btn"),q=document.getElementById("rename-plan-form"),P=document.getElementById("new-plan-name"),U=document.getElementById("delete-confirm-modal"),ee=document.getElementById("cancel-delete-btn"),te=document.getElementById("confirm-delete-btn"),ae=document.getElementById("delete-confirm-title"),re=document.getElementById("delete-confirm-message");const e=document.getElementById("create-plan-btn"),t=document.getElementById("rename-plan-btn"),s=document.getElementById("leave-plan-btn"),n=document.getElementById("delete-plan-btn"),a=u=>{u.preventDefault();const l=document.getElementById("plan-name");l&&l.value&&qs(l.value)},o=u=>{u.preventDefault(),G&&P.value&&Ds(G,P.value)},r=()=>{Q&&Os(Q).then(()=>{se()})},i=()=>{if(g&&g.value){const u=g.options[g.selectedIndex];Ns(g.value,u.text)}else alert("Veuillez sélectionner un plan à renommer.")},m=()=>{g&&g.value?Fs(g.value):alert("Veuillez sélectionner un plan.")},d=()=>{if(g&&g.value){const u=g.options[g.selectedIndex].text;js(g.value,u)}else alert("Veuillez sélectionner un plan à supprimer.")};return e?.addEventListener("click",be),t?.addEventListener("click",i),s?.addEventListener("click",m),n?.addEventListener("click",d),X?.addEventListener("click",R),K?.addEventListener("click",R),j?.addEventListener("submit",a),Z?.addEventListener("click",N),Y?.addEventListener("click",N),q?.addEventListener("submit",o),ee?.addEventListener("click",se),te?.addEventListener("click",r),()=>{e?.removeEventListener("click",be),t?.removeEventListener("click",i),s?.removeEventListener("click",m),n?.removeEventListener("click",d),X?.removeEventListener("click",R),K?.removeEventListener("click",R),j?.removeEventListener("submit",a),Z?.removeEventListener("click",N),Y?.removeEventListener("click",N),q?.removeEventListener("submit",o),ee?.removeEventListener("click",se),te?.removeEventListener("click",r)}}async function Us(e,t){if(!(!e||!t))try{const s=v(L,"plans",e);await C(s,{collaborators:ve(t),type:"collaborative"})}catch(s){console.error("Error adding collaborator: ",s)}}async function tn(e,t,s="Modification diverse"){if(!e||!t)return;const n=k();if(n)try{const a=h(L,"plans",e,"history"),o=JSON.parse(JSON.stringify(t));await A(a,{planState:o,timestamp:D(),modifiedBy:n.uid,modifiedByName:n.displayName||n.email,description:s})}catch(a){console.error("Error saving history:",a)}}async function sn(e,t){const s=k();if(!(!s||!e||!t))try{const n=h(L,"plan_saves"),a=I(n,x("userId","==",s.uid),x("name","==",e)),o=await M(a);if(o.empty)await A(n,{userId:s.uid,name:e,savedAt:D(),planData:t});else{const r=o.docs[0].id,i=v(L,"plan_saves",r);await C(i,{planData:t,savedAt:D()})}}catch(n){console.error("Error saving or updating plan save:",n),alert("Erreur lors de la sauvegarde.")}}console.log("DEBUG: Loading notifications.js module");let ye=[],we=[],Ee=()=>{},Le=()=>{};const c={btn:null,btnMobile:null,badge:null,badgeMobile:null,dropdown:null,list:null};async function Hs(e,t,s){const n=de();if(n)try{const a=v(f,"shares",e);if(await C(a,{status:"accepted"}),t.plan){const o=s.displayName||"Inconnu",r=`Copie de "${t.plan.name}" (de ${o})`,i={...t.plan,userId:n,name:r,isShared:!0,originalOwnerId:t.senderId,sharedAt:new Date,collaborators:[]};delete i.id,await A(h(f,"plans"),i)}t.shoppingList&&await A(h(f,"shopping_lists"),{name:`${t.shoppingList.name} (de ${s.displayName})`,ingredients:t.shoppingList.ingredients,userId:n,isShared:!0,originalOwner:s.uid,sharedAt:new Date})}catch(a){console.error("Erreur lors de l'acceptation du partage : ",a),alert("Une erreur est survenue.")}}async function $s(e,t){const s=de();if(!(!s||!t||!t.planId))try{await Us(t.planId,s);const n=v(f,"shares",e);await C(n,{status:"accepted"})}catch(n){console.error("Erreur lors de l'acceptation de l'invitation : ",n),alert("Une erreur est survenue.")}}async function fe(e){try{const t=v(f,"shares",e);await C(t,{status:"declined"})}catch(t){console.error("Erreur lors du refus du partage : ",t),alert("Une erreur est survenue.")}}async function Vs(e){try{await he(e)}catch{alert("Erreur lors de l'acceptation.")}}function Ie(){if(!c.list)return;const e=[...ye,...we];e.sort((s,n)=>n.createdAt.toMillis()-s.createdAt.toMillis());const t=s=>{s&&(e.length>0?(s.textContent=e.length,s.classList.remove("hidden")):s.classList.add("hidden"))};t(c.badge),t(c.badgeMobile),c.list.innerHTML="",e.length===0?c.list.innerHTML='<p class="text-gray-500 text-center p-4">Aucune nouvelle notification.</p>':e.forEach(s=>{const n=zs(s);c.list.appendChild(n)})}function zs(e){const t=document.createElement("div");t.className="p-3 border-b border-gray-100 hover:bg-gray-50";const s=document.createElement("p");s.className="text-sm font-medium text-gray-800";const n=document.createElement("p");n.className="text-xs text-gray-500 mb-3";const a=document.createElement("div");a.className="flex space-x-2 justify-end";const o=e.data.type||e.type;if(o==="collaborative_plan_invite"){s.textContent="Invitation à collaborer",n.textContent=`${e.sender.displayName} vous invite à modifier son plan "${e.data.planName}".`;const r=S("Accepter","btn-secondary",m=>{m.target.textContent="...",m.target.disabled=!0,$s(e.id,e.data)}),i=S("Refuser","text-red-500 hover:bg-red-50 px-3 py-1 rounded-md",m=>{m.target.disabled=!0,fe(e.id)});a.append(r,i)}else if(o==="share"){s.textContent=`Partage de ${e.sender.displayName||e.sender.email}`;let r=[];e.data.plan&&r.push("planification"),e.data.shoppingList&&r.push("liste de courses"),n.textContent=`Contenu : ${r.join(" et ")}`;const i=S("Accepter","btn-secondary",d=>{d.target.textContent="...",d.target.disabled=!0,Hs(e.id,e.data,e.sender)}),m=S("Refuser","text-red-500 hover:bg-red-50 px-3 py-1 rounded-md",d=>{d.target.disabled=!0,fe(e.id)});a.append(i,m)}else if(o==="friend_request"){s.textContent="Invitation d'ami",n.textContent=`${e.sender.displayName||e.sender.email} vous a envoyé une invitation.`;const r=S("Accepter","btn-secondary",m=>{m.target.textContent="...",m.target.disabled=!0,Vs(e.id)}),i=S("Refuser","text-red-500 hover:bg-red-50 px-3 py-1 rounded-md",m=>{});a.append(r,i)}return t.append(s,n,a),t}function S(e,t,s){const n=document.createElement("button");return n.className=`btn btn-xs ${t}`,n.textContent=e,n.addEventListener("click",a=>{a.stopPropagation(),s(a)}),n}function Qs(e){const t=h(f,"shares"),s=I(t,x("receiverId","==",e),x("status","==","pending"));Ee=T(s,async n=>{const a=[];for(const o of n.docs){const r=o.data(),i=await B(v(f,"users",r.senderId));i.exists()&&a.push({type:r.type||"share",id:o.id,data:r,sender:i.data(),createdAt:r.createdAt})}ye=a,Ie()},n=>{console.error("Erreur d'écoute des partages:",n)})}function Gs(e){const t=h(f,"friend_requests"),s=I(t,x("receiverId","==",e),x("status","==","pending"));Le=T(s,async n=>{const a=[];for(const o of n.docs){const r=o.data(),i=await B(v(f,"users",r.senderId));i.exists()&&a.push({type:"friend_request",id:o.id,data:r,sender:i.data(),createdAt:r.createdAt})}we=a,Ie()},n=>{console.error("Erreur d'écoute des invitations d'amis:",n)})}function Ws(){if(console.log("DEBUG: initNotifications called"),c.btn=document.getElementById("notifications-btn"),c.btnMobile=document.getElementById("notifications-btn-mobile"),c.badge=document.getElementById("notifications-badge"),c.badgeMobile=document.getElementById("notifications-badge-mobile"),c.dropdown=document.getElementById("notifications-dropdown"),c.list=document.getElementById("notifications-list"),console.log("DEBUG: Notification elements found:",{btn:!!c.btn,btnMobile:!!c.btnMobile,dropdown:!!c.dropdown}),!c.btn||!c.dropdown)return;const e=de();if(!e)return;Ee(),Le(),Qs(e),Gs(e);const t=c.btn.cloneNode(!0);if(c.btn.parentNode.replaceChild(t,c.btn),c.btn=t,c.badge=document.getElementById("notifications-badge"),c.btnMobile){const n=c.btnMobile.cloneNode(!0);c.btnMobile.parentNode.replaceChild(n,c.btnMobile),c.btnMobile=n,c.badgeMobile=document.getElementById("notifications-badge-mobile")}const s=n=>{console.log("Notification click detected"),n.stopPropagation();const a=document.getElementById("notifications-dropdown");if(!a)return;if(a.classList.contains("hidden")){a.classList.remove("hidden"),document.body.appendChild(a);const r=window.innerWidth<768,m=(r?c.btnMobile:c.btn).getBoundingClientRect();Object.assign(a.style,{display:"block",position:"fixed",zIndex:"10000",top:`${m.bottom+8}px`,maxHeight:"80vh"}),r?Object.assign(a.style,{left:"50%",transform:"translateX(-50%)",width:"95vw",right:"auto"}):Object.assign(a.style,{left:"auto",right:`${window.innerWidth-m.right}px`,transform:"none",width:"20rem"})}else a.classList.add("hidden"),a.style.cssText=""};c.btn.addEventListener("click",s),c.btnMobile&&c.btnMobile.addEventListener("click",s),document.addEventListener("click",n=>{const a=document.getElementById("notifications-dropdown");a&&!a.classList.contains("hidden")&&(c.btn.contains(n.target)||c.btnMobile&&c.btnMobile.contains(n.target)||a.contains(n.target)||(a.classList.add("hidden"),a.style.cssText=""))})}function Js(){const e=k();if(e){const s=document.getElementById("user-display-name");s&&(s.textContent=e.displayName||e.email)}const t=document.querySelectorAll(".nav-btn");t.forEach(s=>{s.addEventListener("click",n=>{const a=n.currentTarget.dataset.path;V(a),t.forEach(o=>{o.classList.remove("bg-tomato","text-white"),o.classList.add("bg-white","text-tomato")}),n.currentTarget.classList.add("bg-tomato","text-white"),n.currentTarget.classList.remove("bg-white","text-tomato")})}),V("menu"),console.log("DEBUG: Calling initNotifications..."),Ws()}document.addEventListener("DOMContentLoaded",()=>{_s().then(b=>{b&&Js()});const e=document.getElementById("profile-btn"),t=document.getElementById("profile-menu"),s=document.getElementById("user-display-name");if(e&&t){const b=E=>{E.stopPropagation(),t.classList.toggle("hidden");const w=!t.classList.contains("hidden");e.setAttribute("aria-expanded",w)};e.addEventListener("click",b),s&&(s.addEventListener("click",b),s.style.cursor="pointer"),document.addEventListener("click",E=>{!(t.contains(E.target)||e.contains(E.target)||s&&s.contains(E.target))&&!t.classList.contains("hidden")&&(t.classList.add("hidden"),e.setAttribute("aria-expanded","false"))})}const n=document.getElementById("settings-link"),a=document.getElementById("settings-modal"),o=document.getElementById("close-settings-modal"),r=document.getElementById("dark-mode-toggle"),i=b=>{b==="dark"?(document.documentElement.classList.add("dark"),r&&(r.checked=!0)):(document.documentElement.classList.remove("dark"),r&&(r.checked=!1))},m=localStorage.getItem("theme");m?i(m):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?i("dark"):i("light"),n&&a&&n.addEventListener("click",b=>{b.preventDefault(),a.classList.remove("hidden")}),o&&a&&o.addEventListener("click",()=>{a.classList.add("hidden")}),a&&a.addEventListener("click",b=>{b.target===a&&a.classList.add("hidden")}),r&&r.addEventListener("change",()=>{const b=r.checked?"dark":"light";localStorage.setItem("theme",b),i(b)});const d=document.getElementById("mobile-menu-btn"),u=document.getElementById("mobile-menu");let l=null;d&&u?(console.log("Mobile menu initialized (Overlay Mode)"),d.addEventListener("click",b=>{b.stopPropagation(),l?(l.remove(),l=null):(l=document.createElement("div"),l.id="mobile-menu-overlay-container",l.innerHTML=u.innerHTML,Object.assign(l.style,{position:"fixed",top:"60px",left:"0",width:"100%",backgroundColor:"#3D405B",zIndex:"10000",boxShadow:"0 4px 6px rgba(0,0,0,0.1)",padding:"1rem",display:"block"}),l.addEventListener("click",E=>{const w=E.target.closest("button");if(!w)return;const W=w.dataset.path;if(W)console.log("Overlay: Navigating directly to",W),V(W);else if(w.id==="profile-btn-mobile")console.log("Overlay: Opening settings"),a&&a.classList.remove("hidden");else{let H=null;w.id&&(H=document.getElementById(w.id)),H?(console.log("Overlay: Delegating click to original:",H),H.click()):console.warn("Overlay: No action found for",w)}l&&(l.remove(),l=null)}),document.body.appendChild(l))}),document.addEventListener("click",b=>{l&&!l.contains(b.target)&&!d.contains(b.target)&&(l.remove(),l=null)})):console.warn("Mobile menu elements missing");const p=document.getElementById("profile-btn-mobile");p&&a&&p.addEventListener("click",()=>{a.classList.remove("hidden")}),document.querySelectorAll(".nav-btn-mobile").forEach(b=>{b.addEventListener("click",E=>{const w=E.currentTarget.dataset.path;V(w)})})});export{_,Zs as a,k as b,sn as c,Ks as d,de as g,en as i,V as n,Ys as p,tn as s};
