const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/script-C3jMTa83.js","assets/firebase-config-CDPbqvnt.js","assets/recipes-uktjmjHd.js","assets/sharing-DASuy-ML.js","assets/ingredients-B41MzHJf.js","assets/lists-BXR9Icw-.js","assets/shared-DZIetxCy.js","assets/all-plans-5WBnOtoY.js","assets/view-plan-B1xlrnE5.js","assets/shopping-mode-Boo8tMvl.js"])))=>i.map(i=>d[i]);
import{bb as Le,bc as oe,bd as G,q as E,c as h,d as b,w as x,g as _,a as v,u as L,o as S,h as M,aj as ae,b as P,b1 as D,f as re,i as be,ak as fe,A as Ie,z as Ce,B as ke,C as _e,D as Pe,E as Me,F as Ae,G as Be,H as Se,I as Te,J as Re,K as je,L as Ne,M as qe,P as De,Q as Fe,N as Oe,O as Ue,R as He,S as $e,T as Ve,U as ze,V as Qe,W as Ge,X as We,Y as Je,Z as Xe,_ as Ke,$ as Ze,a0 as Ye,a1 as et,a2 as tt,a3 as st,a4 as nt,a5 as at,a6 as rt,a7 as it,a8 as ot,a9 as dt,aa as lt,ab as ct,ac as ut,ad as mt,ae as pt,af as bt,ag as ft,ah as gt,ai as vt,al as xt,am as ht,an as yt,ao as wt,ap as Et,aq as Lt,ar as It,as as Ct,at as kt,au as _t,av as Pt,aw as Mt,ax as At,ay as Bt,az as St,aA as Tt,aB as Rt,aC as jt,aD as Nt,aE as qt,aF as Dt,aG as Ft,aH as Ot,aI as Ut,aJ as Ht,aK as $t,aL as Vt,aM as zt,aN as Qt,aO as Gt,aP as Wt,aQ as Jt,aR as Xt,aS as Kt,aT as Zt,aU as Yt,aV as es,aW as ts,v as ss,aX as ns,aY as as,aZ as rs,a_ as is,a$ as os,b0 as ds,x as ls,s as cs,b2 as us,b3 as ms,b4 as ps,b5 as bs,b6 as fs,b7 as gs,b8 as vs,b9 as xs,ba as hs,e as ys}from"./firebase-config-CDPbqvnt.js";const ws="modulepreload",Es=function(e){return"/"+e},de={},C=function(t,s,n){let a=Promise.resolve();if(s&&s.length>0){let m=function(c){return Promise.all(c.map(d=>Promise.resolve(d).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),l=r?.nonce||r?.getAttribute("nonce");a=m(s.map(c=>{if(c=Es(c),c in de)return;de[c]=!0;const d=c.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${p}`))return;const o=document.createElement("link");if(o.rel=d?"stylesheet":ws,d||(o.as="script"),o.crossOrigin="",o.href=c,l&&o.setAttribute("nonce",l),document.head.appendChild(o),d)return new Promise((g,y)=>{o.addEventListener("load",g),o.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(r){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=r,window.dispatchEvent(l),!l.defaultPrevented)throw r}return a.then(r=>{for(const l of r||[])l.status==="rejected"&&i(l.reason);return t().catch(i)})},le=document.querySelector("main"),Ls={menu:{html:`
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
                    <button id="shopping-mode-trash-btn" class="text-muted-foreground hover:text-gray-700 relative hidden p-2">
                        <i class="fas fa-trash-alt text-lg"></i>
                        <span id="shopping-mode-trash-count" class="absolute top-0 right-0 bg-red-500 text-white text-[10px] px-1 rounded-full">0</span>
                    </button>
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

            <!-- Shopping Mode Trash Modal -->
            <div id="shopping-trash-modal" class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 hidden" role="dialog">
                <div class="bg-white rounded-xl p-5 w-11/12 max-w-md relative max-h-[80vh] flex flex-col">
                    <button id="close-shopping-trash-modal" class="absolute top-3 right-3 text-gray-400 hover:text-muted-foreground p-2">
                        <i class="fas fa-times text-xl"></i>
                    </button>
                    <div class="flex justify-between items-center mb-4 pr-8">
                        <h3 class="text-lg font-bold text-foreground"><i class="fas fa-trash-alt mr-2"></i> Corbeille</h3>
                        <button id="shopping-empty-trash-btn" class="text-sm text-red-500 hover:text-red-700 font-medium hover:underline hidden">
                            Vider
                        </button>
                    </div>
                    <div id="shopping-trash-list" class="flex-grow overflow-y-auto pr-1">
                        <!-- Deleted items will be generated here -->
                    </div>
                </div>
            </div>
        </div>
        `,script:"./shopping-mode.js"}},Is={"./script.js":()=>C(()=>import("./script-C3jMTa83.js"),__vite__mapDeps([0,1,2,3])),"./recipes.js":()=>C(()=>import("./recipes-uktjmjHd.js").then(e=>e.r),__vite__mapDeps([2,1])),"./ingredients.js":()=>C(()=>import("./ingredients-B41MzHJf.js"),__vite__mapDeps([4,1])),"./lists.js":()=>C(()=>import("./lists-BXR9Icw-.js"),__vite__mapDeps([5,1,3])),"./friends.js":()=>C(()=>Promise.resolve().then(()=>Ss),void 0),"./shared.js":()=>C(()=>import("./shared-DZIetxCy.js"),__vite__mapDeps([6,1])),"./all-plans.js":()=>C(()=>import("./all-plans-5WBnOtoY.js"),__vite__mapDeps([7,1])),"./view-plan.js":()=>C(()=>import("./view-plan-B1xlrnE5.js"),__vite__mapDeps([8,1])),"./shopping-mode.js":()=>C(()=>import("./shopping-mode-Boo8tMvl.js"),__vite__mapDeps([9,1]))};let H=null;async function $(e){typeof H=="function"&&(H(),H=null);const t=Ls[e];if(t&&le){if(le.innerHTML=t.html,t.script){const s=Is[t.script];if(s)try{const n=await s();n.default&&typeof n.default=="function"&&(H=n.default())}catch(n){console.error(`Error loading module ${t.script}:`,n)}else console.error(`Module not found in map for path: ${t.script}`)}}else console.error(`Route not found: ${e}`)}const Js=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:Ie,AggregateField:Ce,AggregateQuerySnapshot:ke,Bytes:_e,CACHE_SIZE_UNLIMITED:Pe,CollectionReference:Me,DocumentReference:Ae,DocumentSnapshot:Be,FieldPath:Se,FieldValue:Te,Firestore:Re,FirestoreError:je,GeoPoint:Ne,LoadBundleTask:qe,PersistentCacheIndexManager:De,Query:Fe,QueryCompositeFilterConstraint:Oe,QueryConstraint:Ue,QueryDocumentSnapshot:He,QueryEndAtConstraint:$e,QueryFieldFilterConstraint:Ve,QueryLimitConstraint:ze,QueryOrderByConstraint:Qe,QuerySnapshot:Ge,QueryStartAtConstraint:We,SnapshotMetadata:Je,Timestamp:Xe,Transaction:Ke,VectorValue:Ze,WriteBatch:Ye,_AutoId:et,_ByteString:tt,_DatabaseId:st,_DocumentKey:nt,_EmptyAppCheckTokenProvider:at,_EmptyAuthCredentialsProvider:rt,_FieldPath:it,_TestingHooks:ot,_cast:dt,_debugAssert:lt,_internalAggregationQueryToProtoRunAggregationQueryRequest:ct,_internalQueryToProtoQueryTarget:ut,_isBase64Available:mt,_logWarn:pt,_validateIsNotUsedTogether:bt,addDoc:P,aggregateFieldEqual:ft,aggregateQuerySnapshotEqual:gt,and:vt,arrayRemove:ae,arrayUnion:fe,average:xt,clearIndexedDbPersistence:ht,collection:h,collectionGroup:yt,connectFirestoreEmulator:wt,count:Et,deleteAllPersistentCacheIndexes:Lt,deleteDoc:re,deleteField:It,disableNetwork:Ct,disablePersistentCacheIndexAutoCreation:kt,doc:v,documentId:_t,documentSnapshotFromJSON:Pt,enableIndexedDbPersistence:Mt,enableMultiTabIndexedDbPersistence:At,enableNetwork:Bt,enablePersistentCacheIndexAutoCreation:St,endAt:Tt,endBefore:Rt,ensureFirestoreConfigured:jt,executeWrite:Nt,getAggregateFromServer:qt,getCountFromServer:Dt,getDoc:M,getDocFromCache:Ft,getDocFromServer:Ot,getDocs:_,getDocsFromCache:Ut,getDocsFromServer:Ht,getFirestore:be,getPersistentCacheIndexManager:$t,increment:Vt,initializeFirestore:zt,limit:Qt,limitToLast:Gt,loadBundle:Wt,memoryEagerGarbageCollector:Jt,memoryLocalCache:Xt,memoryLruGarbageCollector:Kt,namedQuery:Zt,onSnapshot:S,onSnapshotResume:Yt,onSnapshotsInSync:es,or:ts,orderBy:ss,persistentLocalCache:ns,persistentMultipleTabManager:as,persistentSingleTabManager:rs,query:E,queryEqual:is,querySnapshotFromJSON:os,refEqual:ds,runTransaction:ls,serverTimestamp:D,setDoc:cs,setIndexConfiguration:us,setLogLevel:ms,snapshotEqual:ps,startAfter:bs,startAt:fs,sum:gs,terminate:vs,updateDoc:L,vector:xs,waitForPendingWrites:hs,where:x,writeBatch:ys},Symbol.toStringTag,{value:"Module"}));let V=null;function Cs(){return new Promise(e=>{Le(G,t=>{if(V=t,t){console.log("User is logged in:",t.uid);const s=document.getElementById("logout-btn"),n=document.getElementById("profile-btn");s&&s.classList.remove("hidden"),n&&n.classList.remove("hidden"),s&&!s.hasAttribute("data-listener-attached")&&(s.addEventListener("click",()=>{oe(G).catch(i=>{console.error("Sign Out Error",i)})}),s.setAttribute("data-listener-attached","true"));const a=document.getElementById("logout-btn-mobile");a&&!a.hasAttribute("data-listener-attached")&&(a.addEventListener("click",()=>{oe(G).catch(i=>{console.error("Sign Out Error",i)})}),a.setAttribute("data-listener-attached","true")),e(t)}else{console.log("User not logged in. Redirecting to login.html");const s=window.location.origin+"/login.html";window.location.href!==s&&(window.location.href=s),e(null)}})})}function ie(){return V?V.uid:null}function I(){return V}let te=()=>{};function ks(){const e=document.getElementById("search-friends-input");return document.getElementById("search-friends-btn").addEventListener("click",()=>ce(e.value)),e.addEventListener("keyup",s=>{s.key==="Enter"&&ce(e.value)}),_s(),ge(),()=>{te&&te()}}async function _s(){const e=document.getElementById("friends-list-container"),t=I()?.uid;if(!t||!e)return;e.innerHTML='<p class="text-gray-500">Chargement...</p>';const s=v(b,"users",t);te=S(s,async n=>{if(!n.exists()){e.innerHTML='<p class="text-red-500">Erreur: Utilisateur non trouvé.</p>';return}const a=n.data().friends||[];if(e.innerHTML="",a.length===0){e.innerHTML=`<p class="text-gray-500">Vous n'avez pas encore d'amis. Utilisez la recherche pour en ajouter.</p>`;return}for(const i of a)try{const r=await M(v(b,"users",i));r.exists()&&e.appendChild(Ps(r.data()))}catch(r){console.error("Erreur de chargement d'un ami",r)}})}function Ps(e){const t=document.createElement("div");t.className="bg-card text-card-foreground p-3 rounded-lg flex items-center justify-between shadow-sm border border-border";const s=document.createElement("div");s.className="flex items-center",s.innerHTML=`
        <img src="${e.photoURL||"https://placehold.co/40"}" 
             alt="Avatar" 
             class="w-10 h-10 rounded-full mr-3 object-cover bg-muted"
             onerror="this.onerror=null; this.src='https://placehold.co/40?text=${e.displayName?e.displayName.charAt(0).toUpperCase():"?"}';">
        <div>
            <p class="font-bold">${e.displayName}</p>
            <p class="text-sm text-muted-foreground">${e.email}</p>
        </div>
    `;const n=document.createElement("button");return n.className="text-red-500 hover:bg-red-50 text-sm px-3 py-1 rounded-md",n.innerHTML='<i class="fas fa-user-times"></i>',n.title="Retirer cet ami",n.addEventListener("click",()=>Ms(e.uid)),t.appendChild(s),t.appendChild(n),t}async function Ms(e){const t=I()?.uid;if(!t||!e){console.error("Impossible de supprimer l'ami : ID utilisateur ou ID ami manquant.");return}if(!confirm("Voulez-vous vraiment retirer cet ami ? Cette action est unilatérale."))return;console.log(`Tentative de suppression de l'ami ${e} pour l'utilisateur ${t}`);const s=v(b,"users",t);try{await L(s,{friends:ae(e)}),console.log("Ami supprimé avec succès de la base de données.")}catch(n){console.error("Erreur lors de la suppression de l'ami: ",n),alert("Une erreur est survenue.")}}async function ce(e){const t=document.getElementById("search-results-container"),s=I()?.uid;if(!(!e||!t)){t.innerHTML='<p class="text-gray-500">Recherche en cours...</p>';try{const n=e.toLowerCase(),a=n+"",i=E(h(b,"users"),x("displayName_lowercase",">=",n),x("displayName_lowercase","<",a)),r=E(h(b,"users"),x("email","==",n)),[l,m]=await Promise.all([_(i),_(r)]),c=new Map;if(l.forEach(d=>c.set(d.id,d.data())),m.forEach(d=>c.set(d.id,d.data())),t.innerHTML="",c.size===0){t.innerHTML='<p class="text-gray-500">Aucun utilisateur trouvé.</p>';return}c.forEach(d=>{if(d.uid===s)return;const p=document.createElement("div");p.className="bg-gray-50 p-2 rounded-lg flex items-center justify-between",p.innerHTML=`
                <div class="flex items-center">
                    <img src="${d.photoURL||"https://placehold.co/32"}" class="w-8 h-8 rounded-full mr-2">
                    <span class="font-medium text-sm">${d.displayName} (${d.email})</span>
                </div>
            `;const o=document.createElement("button");o.className="btn btn-secondary btn-xs",o.innerHTML='<i class="fas fa-user-plus"></i>',o.addEventListener("click",()=>As(d.uid)),p.appendChild(o),t.appendChild(p)})}catch(n){console.error("Erreur de recherche: ",n),t.innerHTML='<p class="text-red-500">Erreur de recherche.</p>'}}}async function As(e){const t=I()?.uid;if(!t||t===e)return;const s=E(h(b,"friend_requests"),x("senderId","==",t),x("receiverId","==",e)),n=E(h(b,"friend_requests"),x("senderId","==",e),x("receiverId","==",t)),[a,i]=await Promise.all([_(s),_(n)]);if(!a.empty||!i.empty)return alert("Une demande d'ami existe déjà avec cet utilisateur.");if((await M(v(b,"users",t))).data()?.friends?.includes(e))return alert("Vous êtes déjà ami avec cet utilisateur.");try{await P(h(b,"friend_requests"),{senderId:t,receiverId:e,status:"pending",createdAt:D()}),alert("Demande d'ami envoyée !")}catch(l){console.error("Erreur lors de l'envoi de la demande d'ami: ",l),alert("Une erreur est survenue.")}}async function ge(){const e=document.getElementById("pending-requests-container"),t=document.getElementById("declined-requests-container"),s=I()?.uid;if(!(!s||!e||!t)){e.innerHTML='<p class="text-gray-500">Chargement...</p>',t.innerHTML='<p class="text-gray-500">Chargement...</p>';try{const n=E(h(b,"friend_requests"),x("senderId","==",s)),a=await _(n),i=[],r=[];for(const l of a.docs){const m={id:l.id,...l.data()},c=await M(v(b,"users",m.receiverId));c.exists()&&(m.receiver=c.data()),m.status==="pending"?i.push(m):m.status==="declined"&&r.push(m)}e.innerHTML="",i.length>0?i.forEach(l=>e.appendChild(ue(l))):e.innerHTML='<p class="text-gray-500">Aucune demande en attente.</p>',t.innerHTML="",r.length>0?r.forEach(l=>t.appendChild(ue(l))):t.innerHTML='<p class="text-gray-500">Aucune demande rejetée.</p>'}catch(n){console.error("Erreur lors du chargement des demandes envoyées: ",n),e.innerHTML='<p class="text-red-500">Erreur de chargement.</p>',t.innerHTML='<p class="text-red-500">Erreur de chargement.</p>'}}}function ue(e){const t=document.createElement("div");t.className="bg-card text-card-foreground p-3 rounded-lg flex items-center justify-between shadow-sm border border-border";const s=e.receiver,n=document.createElement("div");n.className="flex items-center",n.innerHTML=`
        <img src="${s?.photoURL||"https://placehold.co/40"}" 
             alt="Avatar" 
             class="w-10 h-10 rounded-full mr-3 object-cover bg-muted"
             onerror="this.onerror=null; this.src='https://placehold.co/40?text=${s?.displayName?s.displayName.charAt(0).toUpperCase():"?"}';">
        <div>
            <p class="font-bold">${s?.displayName||"Utilisateur inconnu"}</p>
            <p class="text-sm text-muted-foreground">Statut : <span class="font-medium">${e.status}</span></p>
        </div>
    `;const a=document.createElement("button");return a.className="text-red-500 hover:bg-red-50 text-sm px-3 py-1 rounded-md",a.innerHTML='<i class="fas fa-times-circle"></i>',a.title="Annuler la demande",a.addEventListener("click",async()=>{confirm("Voulez-vous vraiment annuler cette demande ?")&&(await re(v(b,"friend_requests",e.id)),ge())}),t.appendChild(n),t.appendChild(a),t}async function ve(e){try{const t=v(b,"friend_requests",e);await L(t,{status:"accepted"})}catch(t){throw console.error("Erreur lors de l'acceptation de la demande d'ami: ",t),t}}async function Bs(e){try{const t=v(b,"friend_requests",e);await L(t,{status:"declined"})}catch(t){throw console.error("Erreur lors du refus de la demande d'ami: ",t),t}}const Ss=Object.freeze(Object.defineProperty({__proto__:null,acceptFriendRequest:ve,declineFriendRequest:Bs,default:ks},Symbol.toStringTag,{value:"Module"})),w=be();let F,W,J,N,f,O,X,K,q,k,U,Z,Y,se,ne,z=null,Q=null;function me(){F&&F.classList.remove("hidden")}function R(){F&&F.classList.add("hidden"),N&&N.reset()}function Ts(e,t){Q=e,k&&(k.value=t),O&&O.classList.remove("hidden"),k&&k.focus()}function j(){Q=null,O&&O.classList.add("hidden"),q&&q.reset()}function Rs(e,t){z=e,se&&(se.textContent="Confirmer la suppression"),ne&&(ne.textContent=`Êtes-vous sûr de vouloir supprimer le plan "${t}" ? Cette action est irréversible.`),U&&U.classList.remove("hidden")}function ee(){z=null,U&&U.classList.add("hidden")}async function js(e){const t=I();if(t)try{await P(h(w,"plans"),{userId:t.uid,name:e,type:"personal",weeks:{},manualItems:[],checkedItems:{},defaultNumPeople:1,startDay:"Lundi",lastUpdated:new Date}),R()}catch(s){console.error("Error creating plan: ",s),alert("Erreur lors de la création du plan.")}}async function Ns(e,t){if(!(!e||!t))try{const s=v(w,"plans",e);await L(s,{name:t}),j()}catch(s){console.error("Error renaming plan: ",s),alert("Erreur lors du renommage du plan.")}}async function qs(e){const t=I()?.uid;if(!(!e||!t)&&confirm("Voulez-vous vraiment quitter ce plan partagé ? Il n'apparaîtra plus dans votre liste."))try{const s=v(w,"plans",e);await L(s,{collaborators:ae(t)})}catch(s){console.error("Erreur pour quitter le plan: ",s),alert("Une erreur est survenue.")}}async function Ds(e){if(e)try{await re(v(w,"plans",e))}catch(t){console.error("Error deleting plan: ",t),alert("Erreur lors de la suppression du plan.")}}function Xs(e){const t=I();if(!t)return()=>{};let s=new Map;const n=()=>{e(Array.from(s.values()).sort((c,d)=>c.name.localeCompare(d.name)))},a=async c=>{const p=[c.userId,...c.collaborators||[]].map(g=>M(v(w,"users",g)));return(await Promise.all(p)).map(g=>g.exists()?g.data():{uid:g.id,displayName:"Inconnu"})},i=E(h(w,"plans"),x("userId","==",t.uid)),r=S(i,async c=>{const p=c.docChanges().map(async o=>{if(o.type==="removed")s.delete(o.doc.id);else{const g=o.doc.data(),y=await a(g);s.set(o.doc.id,{id:o.doc.id,...g,isOwner:!0,participants:y})}});await Promise.all(p),n()}),l=E(h(w,"plans"),x("collaborators","array-contains",t.uid)),m=S(l,async c=>{const p=c.docChanges().map(async o=>{if(o.type==="removed")s.delete(o.doc.id);else{const g=o.doc.data(),y=await a(g),T=y.find(A=>A.uid===g.userId);s.set(o.doc.id,{id:o.doc.id,...g,isOwner:!1,ownerName:T?.displayName||"Inconnu",participants:y})}});await Promise.all(p),n()});return()=>{r(),m()}}function Ks(e){if(!f)return;const t=f.value;if(f.innerHTML="",e.length===0){const s=document.createElement("option");s.value="",s.textContent="Aucun plan personnel",s.disabled=!0,f.appendChild(s);return}e.forEach(s=>{const n=document.createElement("option");n.value=s.id;let a=s.name;s.collaborators&&s.collaborators.length>0&&(s.isOwner?a=`👑 ${s.name} [Collab]`:a=`👥 ${s.name} [Collab] (de ${s.ownerName})`),n.textContent=a,f.appendChild(n)}),t&&f.querySelector(`option[value="${t}"]`)?f.value=t:f.selectedIndex=0}function Zs(){F=document.getElementById("create-plan-modal"),W=document.getElementById("close-create-plan-modal"),J=document.getElementById("cancel-create-plan-btn"),N=document.getElementById("create-plan-form"),f=document.getElementById("plan-select"),O=document.getElementById("rename-plan-modal"),X=document.getElementById("close-rename-plan-modal"),K=document.getElementById("cancel-rename-plan-btn"),q=document.getElementById("rename-plan-form"),k=document.getElementById("new-plan-name"),U=document.getElementById("delete-confirm-modal"),Z=document.getElementById("cancel-delete-btn"),Y=document.getElementById("confirm-delete-btn"),se=document.getElementById("delete-confirm-title"),ne=document.getElementById("delete-confirm-message");const e=document.getElementById("create-plan-btn"),t=document.getElementById("rename-plan-btn"),s=document.getElementById("leave-plan-btn"),n=document.getElementById("delete-plan-btn"),a=d=>{d.preventDefault();const p=document.getElementById("plan-name");p&&p.value&&js(p.value)},i=d=>{d.preventDefault(),Q&&k.value&&Ns(Q,k.value)},r=()=>{z&&Ds(z).then(()=>{ee()})},l=()=>{if(f&&f.value){const d=f.options[f.selectedIndex];Ts(f.value,d.text)}else alert("Veuillez sélectionner un plan à renommer.")},m=()=>{f&&f.value?qs(f.value):alert("Veuillez sélectionner un plan.")},c=()=>{if(f&&f.value){const d=f.options[f.selectedIndex].text;Rs(f.value,d)}else alert("Veuillez sélectionner un plan à supprimer.")};return e?.addEventListener("click",me),t?.addEventListener("click",l),s?.addEventListener("click",m),n?.addEventListener("click",c),W?.addEventListener("click",R),J?.addEventListener("click",R),N?.addEventListener("submit",a),X?.addEventListener("click",j),K?.addEventListener("click",j),q?.addEventListener("submit",i),Z?.addEventListener("click",ee),Y?.addEventListener("click",r),()=>{e?.removeEventListener("click",me),t?.removeEventListener("click",l),s?.removeEventListener("click",m),n?.removeEventListener("click",c),W?.removeEventListener("click",R),J?.removeEventListener("click",R),N?.removeEventListener("submit",a),X?.removeEventListener("click",j),K?.removeEventListener("click",j),q?.removeEventListener("submit",i),Z?.removeEventListener("click",ee),Y?.removeEventListener("click",r)}}async function Fs(e,t){if(!(!e||!t))try{const s=v(w,"plans",e);await L(s,{collaborators:fe(t),type:"collaborative"})}catch(s){console.error("Error adding collaborator: ",s)}}async function Ys(e,t,s="Modification diverse"){if(!e||!t)return;const n=I();if(n)try{const a=h(w,"plans",e,"history"),i=JSON.parse(JSON.stringify(t));await P(a,{planState:i,timestamp:D(),modifiedBy:n.uid,modifiedByName:n.displayName||n.email,description:s})}catch(a){console.error("Error saving history:",a)}}async function en(e,t){const s=I();if(!(!s||!e||!t))try{const n=h(w,"plan_saves"),a=E(n,x("userId","==",s.uid),x("name","==",e)),i=await _(a);if(i.empty)await P(n,{userId:s.uid,name:e,savedAt:D(),planData:t});else{const r=i.docs[0].id,l=v(w,"plan_saves",r);await L(l,{planData:t,savedAt:D()})}}catch(n){console.error("Error saving or updating plan save:",n),alert("Erreur lors de la sauvegarde.")}}console.log("DEBUG: Loading notifications.js module");let xe=[],he=[],ye=()=>{},we=()=>{};const u={btn:null,btnMobile:null,badge:null,badgeMobile:null,dropdown:null,list:null};async function Os(e,t,s){const n=ie();if(n)try{const a=v(b,"shares",e);if(await L(a,{status:"accepted"}),t.plan){const i=s.displayName||"Inconnu",r=`Copie de "${t.plan.name}" (de ${i})`,l={...t.plan,userId:n,name:r,isShared:!0,originalOwnerId:t.senderId,sharedAt:new Date,collaborators:[]};delete l.id,await P(h(b,"plans"),l)}t.shoppingList&&await P(h(b,"shopping_lists"),{name:`${t.shoppingList.name} (de ${s.displayName})`,ingredients:t.shoppingList.ingredients,userId:n,isShared:!0,originalOwner:s.uid,sharedAt:new Date})}catch(a){console.error("Erreur lors de l'acceptation du partage : ",a),alert("Une erreur est survenue.")}}async function Us(e,t){const s=ie();if(!(!s||!t||!t.planId))try{await Fs(t.planId,s);const n=v(b,"shares",e);await L(n,{status:"accepted"})}catch(n){console.error("Erreur lors de l'acceptation de l'invitation : ",n),alert("Une erreur est survenue.")}}async function pe(e){try{const t=v(b,"shares",e);await L(t,{status:"declined"})}catch(t){console.error("Erreur lors du refus du partage : ",t),alert("Une erreur est survenue.")}}async function Hs(e){try{await ve(e)}catch{alert("Erreur lors de l'acceptation.")}}function Ee(){if(!u.list)return;const e=[...xe,...he];e.sort((s,n)=>n.createdAt.toMillis()-s.createdAt.toMillis());const t=s=>{s&&(e.length>0?(s.textContent=e.length,s.classList.remove("hidden")):s.classList.add("hidden"))};t(u.badge),t(u.badgeMobile),u.list.innerHTML="",e.length===0?u.list.innerHTML='<p class="text-gray-500 text-center p-4">Aucune nouvelle notification.</p>':e.forEach(s=>{const n=$s(s);u.list.appendChild(n)})}function $s(e){const t=document.createElement("div");t.className="p-3 border-b border-gray-100 hover:bg-gray-50";const s=document.createElement("p");s.className="text-sm font-medium text-gray-800";const n=document.createElement("p");n.className="text-xs text-gray-500 mb-3";const a=document.createElement("div");a.className="flex space-x-2 justify-end";const i=e.data.type||e.type;if(i==="collaborative_plan_invite"){s.textContent="Invitation à collaborer",n.textContent=`${e.sender.displayName} vous invite à modifier son plan "${e.data.planName}".`;const r=B("Accepter","btn-secondary",m=>{m.target.textContent="...",m.target.disabled=!0,Us(e.id,e.data)}),l=B("Refuser","text-red-500 hover:bg-red-50 px-3 py-1 rounded-md",m=>{m.target.disabled=!0,pe(e.id)});a.append(r,l)}else if(i==="share"){s.textContent=`Partage de ${e.sender.displayName||e.sender.email}`;let r=[];e.data.plan&&r.push("planification"),e.data.shoppingList&&r.push("liste de courses"),n.textContent=`Contenu : ${r.join(" et ")}`;const l=B("Accepter","btn-secondary",c=>{c.target.textContent="...",c.target.disabled=!0,Os(e.id,e.data,e.sender)}),m=B("Refuser","text-red-500 hover:bg-red-50 px-3 py-1 rounded-md",c=>{c.target.disabled=!0,pe(e.id)});a.append(l,m)}else if(i==="friend_request"){s.textContent="Invitation d'ami",n.textContent=`${e.sender.displayName||e.sender.email} vous a envoyé une invitation.`;const r=B("Accepter","btn-secondary",m=>{m.target.textContent="...",m.target.disabled=!0,Hs(e.id)}),l=B("Refuser","text-red-500 hover:bg-red-50 px-3 py-1 rounded-md",m=>{});a.append(r,l)}return t.append(s,n,a),t}function B(e,t,s){const n=document.createElement("button");return n.className=`btn btn-xs ${t}`,n.textContent=e,n.addEventListener("click",a=>{a.stopPropagation(),s(a)}),n}function Vs(e){const t=h(b,"shares"),s=E(t,x("receiverId","==",e),x("status","==","pending"));ye=S(s,async n=>{const a=[];for(const i of n.docs){const r=i.data(),l=await M(v(b,"users",r.senderId));l.exists()&&a.push({type:r.type||"share",id:i.id,data:r,sender:l.data(),createdAt:r.createdAt})}xe=a,Ee()},n=>{console.error("Erreur d'écoute des partages:",n)})}function zs(e){const t=h(b,"friend_requests"),s=E(t,x("receiverId","==",e),x("status","==","pending"));we=S(s,async n=>{const a=[];for(const i of n.docs){const r=i.data(),l=await M(v(b,"users",r.senderId));l.exists()&&a.push({type:"friend_request",id:i.id,data:r,sender:l.data(),createdAt:r.createdAt})}he=a,Ee()},n=>{console.error("Erreur d'écoute des invitations d'amis:",n)})}function Qs(){if(console.log("DEBUG: initNotifications called"),u.btn=document.getElementById("notifications-btn"),u.btnMobile=document.getElementById("notifications-btn-mobile"),u.badge=document.getElementById("notifications-badge"),u.badgeMobile=document.getElementById("notifications-badge-mobile"),u.dropdown=document.getElementById("notifications-dropdown"),u.list=document.getElementById("notifications-list"),console.log("DEBUG: Notification elements found:",{btn:!!u.btn,btnMobile:!!u.btnMobile,dropdown:!!u.dropdown}),!u.btn||!u.dropdown)return;const e=ie();if(!e)return;ye(),we(),Vs(e),zs(e);const t=u.btn.cloneNode(!0);if(u.btn.parentNode.replaceChild(t,u.btn),u.btn=t,u.badge=document.getElementById("notifications-badge"),u.btnMobile){const n=u.btnMobile.cloneNode(!0);u.btnMobile.parentNode.replaceChild(n,u.btnMobile),u.btnMobile=n,u.badgeMobile=document.getElementById("notifications-badge-mobile")}const s=n=>{console.log("Notification click detected"),n.stopPropagation();const a=document.getElementById("notifications-dropdown");if(!a)return;if(a.classList.contains("hidden")){a.classList.remove("hidden"),document.body.appendChild(a);const r=window.innerWidth<768,m=(r?u.btnMobile:u.btn).getBoundingClientRect();Object.assign(a.style,{display:"block",position:"fixed",zIndex:"10000",top:`${m.bottom+8}px`,maxHeight:"80vh"}),r?Object.assign(a.style,{left:"50%",transform:"translateX(-50%)",width:"95vw",right:"auto"}):Object.assign(a.style,{left:"auto",right:`${window.innerWidth-m.right}px`,transform:"none",width:"20rem"})}else a.classList.add("hidden"),a.style.cssText=""};u.btn.addEventListener("click",s),u.btnMobile&&u.btnMobile.addEventListener("click",s),document.addEventListener("click",n=>{const a=document.getElementById("notifications-dropdown");a&&!a.classList.contains("hidden")&&(u.btn.contains(n.target)||u.btnMobile&&u.btnMobile.contains(n.target)||a.contains(n.target)||(a.classList.add("hidden"),a.style.cssText=""))})}function Gs(){const e=I();if(e){const s=document.getElementById("user-display-name");s&&(s.textContent=e.displayName||e.email)}const t=document.querySelectorAll(".nav-btn");t.forEach(s=>{s.addEventListener("click",n=>{const a=n.currentTarget.dataset.path;$(a),t.forEach(i=>{i.classList.remove("bg-tomato","text-white"),i.classList.add("bg-white","text-tomato")}),n.currentTarget.classList.add("bg-tomato","text-white"),n.currentTarget.classList.remove("bg-white","text-tomato")})}),$("menu"),console.log("DEBUG: Calling initNotifications..."),Qs()}document.addEventListener("DOMContentLoaded",()=>{Cs().then(o=>{o&&Gs()});const e=document.getElementById("profile-btn"),t=document.getElementById("profile-menu");e&&t&&(e.addEventListener("click",o=>{o.stopPropagation(),t.classList.toggle("hidden");const g=!t.classList.contains("hidden");e.setAttribute("aria-expanded",g)}),document.addEventListener("click",o=>{!(t.contains(o.target)||e.contains(o.target))&&!t.classList.contains("hidden")&&(t.classList.add("hidden"),e.setAttribute("aria-expanded","false"))}));const s=document.getElementById("settings-link"),n=document.getElementById("settings-modal"),a=document.getElementById("close-settings-modal"),i=document.getElementById("dark-mode-toggle"),r=o=>{o==="dark"?(document.documentElement.classList.add("dark"),i&&(i.checked=!0)):(document.documentElement.classList.remove("dark"),i&&(i.checked=!1))},l=localStorage.getItem("theme");l?r(l):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?r("dark"):r("light"),s&&n&&s.addEventListener("click",o=>{o.preventDefault(),n.classList.remove("hidden")}),a&&n&&a.addEventListener("click",()=>{n.classList.add("hidden")}),n&&n.addEventListener("click",o=>{o.target===n&&n.classList.add("hidden")}),i&&i.addEventListener("change",()=>{const o=i.checked?"dark":"light";localStorage.setItem("theme",o),r(o)});const m=document.getElementById("mobile-menu-btn"),c=document.getElementById("mobile-menu");let d=null;m&&c?(console.log("Mobile menu initialized (Overlay Mode)"),m.addEventListener("click",o=>{o.stopPropagation(),d?(d.remove(),d=null):(d=document.createElement("div"),d.id="mobile-menu-overlay-container",d.innerHTML=c.innerHTML,Object.assign(d.style,{position:"fixed",top:"60px",left:"0",width:"100%",backgroundColor:"#3D405B",zIndex:"10000",boxShadow:"0 4px 6px rgba(0,0,0,0.1)",padding:"1rem",display:"block"}),d.addEventListener("click",g=>{const y=g.target.closest("button");if(!y)return;const T=y.dataset.path;if(T)console.log("Overlay: Navigating directly to",T),$(T);else if(y.id==="profile-btn-mobile")console.log("Overlay: Opening settings"),n&&n.classList.remove("hidden");else{let A=null;y.id&&(A=document.getElementById(y.id)),A?(console.log("Overlay: Delegating click to original:",A),A.click()):console.warn("Overlay: No action found for",y)}d&&(d.remove(),d=null)}),document.body.appendChild(d))}),document.addEventListener("click",o=>{d&&!d.contains(o.target)&&!m.contains(o.target)&&(d.remove(),d=null)})):console.warn("Mobile menu elements missing");const p=document.getElementById("profile-btn-mobile");p&&n&&p.addEventListener("click",()=>{n.classList.remove("hidden")}),mobileNavButtons.forEach(o=>{o.addEventListener("click",g=>{const y=g.currentTarget.dataset.path;$(y)})})});export{C as _,Xs as a,I as b,en as c,Js as d,ie as g,Zs as i,$ as n,Ks as p,Ys as s};
