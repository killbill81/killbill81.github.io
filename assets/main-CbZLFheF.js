const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/script-DSTraoOJ.js","assets/firebase-config-DV_efyn3.js","assets/firebase-config-DlqHKZ9G.css","assets/recipes-DSYjS_--.js","assets/sharing-D43OWtnT.js","assets/ingredient-modal-Bgusu1c_.js","assets/ingredients-B3bhOZXL.js","assets/lists-Bb3TalTX.js","assets/shared-CXia-6kR.js","assets/all-plans-DznQnuGX.js","assets/view-plan-cKJkyXan.js","assets/shopping-mode-D67ll3qS.js"])))=>i.map(i=>d[i]);
import{bb as Se,bc as le,bd as W,q as L,c as E,d as g,w as y,g as k,b as h,u as C,o as T,h as P,aj as oe,a as A,b1 as F,f as ie,i as ve,ak as he,A as Me,z as _e,B as Be,C as ke,D as Ae,E as Pe,F as Re,G as Te,H as Ne,I as De,J as je,K as qe,L as Fe,M as Oe,P as Ue,Q as He,N as $e,O as Ve,R as ze,S as Qe,T as Je,U as Ge,V as We,W as Ke,X as Xe,Y as Ye,Z as Ze,_ as et,$ as tt,a0 as st,a1 as nt,a2 as at,a3 as rt,a4 as ot,a5 as it,a6 as dt,a7 as lt,a8 as ct,a9 as ut,aa as mt,ab as pt,ac as ft,ad as bt,ae as gt,af as vt,ag as ht,ah as xt,ai as yt,al as Et,am as wt,an as It,ao as Lt,ap as Ct,aq as St,ar as Mt,as as _t,at as Bt,au as kt,av as At,aw as Pt,ax as Rt,ay as Tt,az as Nt,aA as Dt,aB as jt,aC as qt,aD as Ft,aE as Ot,aF as Ut,aG as Ht,aH as $t,aI as Vt,aJ as zt,aK as Qt,aL as Jt,aM as Gt,aN as Wt,aO as Kt,aP as Xt,aQ as Yt,aR as Zt,aS as es,aT as ts,aU as ss,aV as ns,aW as as,v as rs,aX as os,aY as is,aZ as ds,a_ as ls,a$ as cs,b0 as us,x as ms,s as ps,b2 as fs,b3 as bs,b4 as gs,b5 as vs,b6 as hs,b7 as xs,b8 as ys,b9 as Es,ba as ws,e as Is}from"./firebase-config-DV_efyn3.js";const Ls="modulepreload",Cs=function(t){return"/"+t},ce={},M=function(e,s,n){let a=Promise.resolve();if(s&&s.length>0){let p=function(l){return Promise.all(l.map(d=>Promise.resolve(d).then(c=>({status:"fulfilled",value:c}),c=>({status:"rejected",reason:c}))))};document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),i=r?.nonce||r?.getAttribute("nonce");a=p(s.map(l=>{if(l=Cs(l),l in ce)return;ce[l]=!0;const d=l.endsWith(".css"),c=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${c}`))return;const f=document.createElement("link");if(f.rel=d?"stylesheet":Ls,d||(f.as="script"),f.crossOrigin="",f.href=l,i&&f.setAttribute("nonce",i),document.head.appendChild(f),d)return new Promise((x,b)=>{f.addEventListener("load",x),f.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(r){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=r,window.dispatchEvent(i),!i.defaultPrevented)throw r}return a.then(r=>{for(const i of r||[])i.status==="rejected"&&o(i.reason);return e().catch(o)})},ue=document.querySelector("main"),Ss={menu:{html:`
        <div class="flex flex-col md:flex-row md:space-x-2">

            <!-- Left Column: Meal Planner -->
            <div class="w-full md:w-5/6">
                <section id="meal-planning-section" aria-labelledby="meal-planning-heading" class="mb-8 md:mb-12">
                                    <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                                        <h2 id="meal-planning-heading" class="text-xl md:text-2xl font-bold text-foreground">Menu de la semaine</h2>
                                        <div class="mt-3 md:mt-0 flex items-center space-x-2 md:space-x-3 plan-actions">
                                            <button id="generate-plan-ai-btn" class="btn btn-primary btn-sm">
                                                <i class="fas fa-robot mr-1 md:mr-2"></i> IA Semaine
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
        `,script:"./shopping-mode.js"}},Ms={"./script.js":()=>M(()=>import("./script-DSTraoOJ.js"),__vite__mapDeps([0,1,2,3,4,5])),"./recipes.js":()=>M(()=>import("./recipes-DSYjS_--.js").then(t=>t.r),__vite__mapDeps([3,1,2])),"./ingredients.js":()=>M(()=>import("./ingredients-B3bhOZXL.js"),__vite__mapDeps([6,1,2,5])),"./lists.js":()=>M(()=>import("./lists-Bb3TalTX.js"),__vite__mapDeps([7,1,2,4])),"./friends.js":()=>M(()=>Promise.resolve().then(()=>Ns),void 0),"./shared.js":()=>M(()=>import("./shared-CXia-6kR.js"),__vite__mapDeps([8,1,2])),"./all-plans.js":()=>M(()=>import("./all-plans-DznQnuGX.js"),__vite__mapDeps([9,1,2])),"./view-plan.js":()=>M(()=>import("./view-plan-cKJkyXan.js"),__vite__mapDeps([10,1,2])),"./shopping-mode.js":()=>M(()=>import("./shopping-mode-D67ll3qS.js"),__vite__mapDeps([11,1,2])),"./ingredient-modal.js":()=>M(()=>import("./ingredient-modal-Bgusu1c_.js"),__vite__mapDeps([5,1,2]))};let V=null;async function z(t){typeof V=="function"&&(V(),V=null);const e=Ss[t];if(e&&ue){if(ue.innerHTML=e.html,e.script){const s=Ms[e.script];if(s)try{const n=await s();n.default&&typeof n.default=="function"&&(V=n.default())}catch(n){console.error(`Error loading module ${e.script}:`,n)}else console.error(`Module not found in map for path: ${e.script}`)}}else console.error(`Route not found: ${t}`)}const en=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:Me,AggregateField:_e,AggregateQuerySnapshot:Be,Bytes:ke,CACHE_SIZE_UNLIMITED:Ae,CollectionReference:Pe,DocumentReference:Re,DocumentSnapshot:Te,FieldPath:Ne,FieldValue:De,Firestore:je,FirestoreError:qe,GeoPoint:Fe,LoadBundleTask:Oe,PersistentCacheIndexManager:Ue,Query:He,QueryCompositeFilterConstraint:$e,QueryConstraint:Ve,QueryDocumentSnapshot:ze,QueryEndAtConstraint:Qe,QueryFieldFilterConstraint:Je,QueryLimitConstraint:Ge,QueryOrderByConstraint:We,QuerySnapshot:Ke,QueryStartAtConstraint:Xe,SnapshotMetadata:Ye,Timestamp:Ze,Transaction:et,VectorValue:tt,WriteBatch:st,_AutoId:nt,_ByteString:at,_DatabaseId:rt,_DocumentKey:ot,_EmptyAppCheckTokenProvider:it,_EmptyAuthCredentialsProvider:dt,_FieldPath:lt,_TestingHooks:ct,_cast:ut,_debugAssert:mt,_internalAggregationQueryToProtoRunAggregationQueryRequest:pt,_internalQueryToProtoQueryTarget:ft,_isBase64Available:bt,_logWarn:gt,_validateIsNotUsedTogether:vt,addDoc:A,aggregateFieldEqual:ht,aggregateQuerySnapshotEqual:xt,and:yt,arrayRemove:oe,arrayUnion:he,average:Et,clearIndexedDbPersistence:wt,collection:E,collectionGroup:It,connectFirestoreEmulator:Lt,count:Ct,deleteAllPersistentCacheIndexes:St,deleteDoc:ie,deleteField:Mt,disableNetwork:_t,disablePersistentCacheIndexAutoCreation:Bt,doc:h,documentId:kt,documentSnapshotFromJSON:At,enableIndexedDbPersistence:Pt,enableMultiTabIndexedDbPersistence:Rt,enableNetwork:Tt,enablePersistentCacheIndexAutoCreation:Nt,endAt:Dt,endBefore:jt,ensureFirestoreConfigured:qt,executeWrite:Ft,getAggregateFromServer:Ot,getCountFromServer:Ut,getDoc:P,getDocFromCache:Ht,getDocFromServer:$t,getDocs:k,getDocsFromCache:Vt,getDocsFromServer:zt,getFirestore:ve,getPersistentCacheIndexManager:Qt,increment:Jt,initializeFirestore:Gt,limit:Wt,limitToLast:Kt,loadBundle:Xt,memoryEagerGarbageCollector:Yt,memoryLocalCache:Zt,memoryLruGarbageCollector:es,namedQuery:ts,onSnapshot:T,onSnapshotResume:ss,onSnapshotsInSync:ns,or:as,orderBy:rs,persistentLocalCache:os,persistentMultipleTabManager:is,persistentSingleTabManager:ds,query:L,queryEqual:ls,querySnapshotFromJSON:cs,refEqual:us,runTransaction:ms,serverTimestamp:F,setDoc:ps,setIndexConfiguration:fs,setLogLevel:bs,snapshotEqual:gs,startAfter:vs,startAt:hs,sum:xs,terminate:ys,updateDoc:C,vector:Es,waitForPendingWrites:ws,where:y,writeBatch:Is},Symbol.toStringTag,{value:"Module"}));let Q=null;function _s(){return new Promise(t=>{Se(W,e=>{if(Q=e,e){console.log("User is logged in:",e.uid);const s=document.getElementById("logout-btn"),n=document.getElementById("profile-btn");s&&s.classList.remove("hidden"),n&&n.classList.remove("hidden"),s&&!s.hasAttribute("data-listener-attached")&&(s.addEventListener("click",()=>{le(W).catch(o=>{console.error("Sign Out Error",o)})}),s.setAttribute("data-listener-attached","true"));const a=document.getElementById("logout-btn-mobile");a&&!a.hasAttribute("data-listener-attached")&&(a.addEventListener("click",()=>{le(W).catch(o=>{console.error("Sign Out Error",o)})}),a.setAttribute("data-listener-attached","true")),t(e)}else{console.log("User not logged in. Redirecting to login.html");const s=window.location.origin+"/login.html";window.location.href!==s&&(window.location.href=s),t(null)}})})}function de(){return Q?Q.uid:null}function S(){return Q}let ne=()=>{};function Bs(){const t=document.getElementById("search-friends-input");return document.getElementById("search-friends-btn").addEventListener("click",()=>me(t.value)),t.addEventListener("keyup",s=>{s.key==="Enter"&&me(t.value)}),ks(),xe(),()=>{ne&&ne()}}async function ks(){const t=document.getElementById("friends-list-container"),e=S()?.uid;if(!e||!t)return;t.innerHTML='<p class="text-gray-500">Chargement...</p>';const s=h(g,"users",e);ne=T(s,async n=>{if(!n.exists()){t.innerHTML='<p class="text-red-500">Erreur: Utilisateur non trouvé.</p>';return}const a=n.data().friends||[];if(t.innerHTML="",a.length===0){t.innerHTML=`<p class="text-gray-500">Vous n'avez pas encore d'amis. Utilisez la recherche pour en ajouter.</p>`;return}for(const o of a)try{const r=await P(h(g,"users",o));r.exists()&&t.appendChild(As(r.data()))}catch(r){console.error("Erreur de chargement d'un ami",r)}})}function As(t){const e=document.createElement("div");e.className="bg-card text-card-foreground p-3 rounded-lg flex items-center justify-between shadow-sm border border-border";const s=document.createElement("div");s.className="flex items-center",s.innerHTML=`
        <img src="${t.photoURL||"https://placehold.co/40"}" 
             alt="Avatar" 
             class="w-10 h-10 rounded-full mr-3 object-cover bg-muted"
             onerror="this.onerror=null; this.src='https://placehold.co/40?text=${t.displayName?t.displayName.charAt(0).toUpperCase():"?"}';">
        <div>
            <p class="font-bold">${t.displayName}</p>
            <p class="text-sm text-muted-foreground">${t.email}</p>
        </div>
    `;const n=document.createElement("button");return n.className="text-red-500 hover:bg-red-50 text-sm px-3 py-1 rounded-md",n.innerHTML='<i class="fas fa-user-times"></i>',n.title="Retirer cet ami",n.addEventListener("click",()=>Ps(t.uid)),e.appendChild(s),e.appendChild(n),e}async function Ps(t){const e=S()?.uid;if(!e||!t){console.error("Impossible de supprimer l'ami : ID utilisateur ou ID ami manquant.");return}if(!confirm("Voulez-vous vraiment retirer cet ami ? Cette action est unilatérale."))return;console.log(`Tentative de suppression de l'ami ${t} pour l'utilisateur ${e}`);const s=h(g,"users",e);try{await C(s,{friends:oe(t)}),console.log("Ami supprimé avec succès de la base de données.")}catch(n){console.error("Erreur lors de la suppression de l'ami: ",n),alert("Une erreur est survenue.")}}async function me(t){const e=document.getElementById("search-results-container"),s=S()?.uid;if(!(!t||!e)){e.innerHTML='<p class="text-gray-500">Recherche en cours...</p>';try{const n=t.toLowerCase(),a=n+"",o=L(E(g,"users"),y("displayName_lowercase",">=",n),y("displayName_lowercase","<",a)),r=L(E(g,"users"),y("email","==",n)),[i,p]=await Promise.all([k(o),k(r)]),l=new Map;if(i.forEach(d=>l.set(d.id,d.data())),p.forEach(d=>l.set(d.id,d.data())),e.innerHTML="",l.size===0){e.innerHTML='<p class="text-gray-500">Aucun utilisateur trouvé.</p>';return}l.forEach(d=>{if(d.uid===s)return;const c=document.createElement("div");c.className="bg-gray-50 p-2 rounded-lg flex items-center justify-between",c.innerHTML=`
                <div class="flex items-center">
                    <img src="${d.photoURL||"https://placehold.co/32"}" class="w-8 h-8 rounded-full mr-2">
                    <span class="font-medium text-sm">${d.displayName} (${d.email})</span>
                </div>
            `;const f=document.createElement("button");f.className="btn btn-secondary btn-xs",f.innerHTML='<i class="fas fa-user-plus"></i>',f.addEventListener("click",()=>Rs(d.uid)),c.appendChild(f),e.appendChild(c)})}catch(n){console.error("Erreur de recherche: ",n),e.innerHTML='<p class="text-red-500">Erreur de recherche.</p>'}}}async function Rs(t){const e=S()?.uid;if(!e||e===t)return;const s=L(E(g,"friend_requests"),y("senderId","==",e),y("receiverId","==",t)),n=L(E(g,"friend_requests"),y("senderId","==",t),y("receiverId","==",e)),[a,o]=await Promise.all([k(s),k(n)]);if(!a.empty||!o.empty)return alert("Une demande d'ami existe déjà avec cet utilisateur.");if((await P(h(g,"users",e))).data()?.friends?.includes(t))return alert("Vous êtes déjà ami avec cet utilisateur.");try{await A(E(g,"friend_requests"),{senderId:e,receiverId:t,status:"pending",createdAt:F()}),alert("Demande d'ami envoyée !")}catch(i){console.error("Erreur lors de l'envoi de la demande d'ami: ",i),alert("Une erreur est survenue.")}}async function xe(){const t=document.getElementById("pending-requests-container"),e=document.getElementById("declined-requests-container"),s=S()?.uid;if(!(!s||!t||!e)){t.innerHTML='<p class="text-gray-500">Chargement...</p>',e.innerHTML='<p class="text-gray-500">Chargement...</p>';try{const n=L(E(g,"friend_requests"),y("senderId","==",s)),a=await k(n),o=[],r=[];for(const i of a.docs){const p={id:i.id,...i.data()},l=await P(h(g,"users",p.receiverId));l.exists()&&(p.receiver=l.data()),p.status==="pending"?o.push(p):p.status==="declined"&&r.push(p)}t.innerHTML="",o.length>0?o.forEach(i=>t.appendChild(pe(i))):t.innerHTML='<p class="text-gray-500">Aucune demande en attente.</p>',e.innerHTML="",r.length>0?r.forEach(i=>e.appendChild(pe(i))):e.innerHTML='<p class="text-gray-500">Aucune demande rejetée.</p>'}catch(n){console.error("Erreur lors du chargement des demandes envoyées: ",n),t.innerHTML='<p class="text-red-500">Erreur de chargement.</p>',e.innerHTML='<p class="text-red-500">Erreur de chargement.</p>'}}}function pe(t){const e=document.createElement("div");e.className="bg-card text-card-foreground p-3 rounded-lg flex items-center justify-between shadow-sm border border-border";const s=t.receiver,n=document.createElement("div");n.className="flex items-center",n.innerHTML=`
        <img src="${s?.photoURL||"https://placehold.co/40"}" 
             alt="Avatar" 
             class="w-10 h-10 rounded-full mr-3 object-cover bg-muted"
             onerror="this.onerror=null; this.src='https://placehold.co/40?text=${s?.displayName?s.displayName.charAt(0).toUpperCase():"?"}';">
        <div>
            <p class="font-bold">${s?.displayName||"Utilisateur inconnu"}</p>
            <p class="text-sm text-muted-foreground">Statut : <span class="font-medium">${t.status}</span></p>
        </div>
    `;const a=document.createElement("button");return a.className="text-red-500 hover:bg-red-50 text-sm px-3 py-1 rounded-md",a.innerHTML='<i class="fas fa-times-circle"></i>',a.title="Annuler la demande",a.addEventListener("click",async()=>{confirm("Voulez-vous vraiment annuler cette demande ?")&&(await ie(h(g,"friend_requests",t.id)),xe())}),e.appendChild(n),e.appendChild(a),e}async function ye(t){try{const e=h(g,"friend_requests",t);await C(e,{status:"accepted"})}catch(e){throw console.error("Erreur lors de l'acceptation de la demande d'ami: ",e),e}}async function Ts(t){try{const e=h(g,"friend_requests",t);await C(e,{status:"declined"})}catch(e){throw console.error("Erreur lors du refus de la demande d'ami: ",e),e}}const Ns=Object.freeze(Object.defineProperty({__proto__:null,acceptFriendRequest:ye,declineFriendRequest:Ts,default:Bs},Symbol.toStringTag,{value:"Module"})),I=ve();let O,K,X,j,v,U,Y,Z,q,B,H,ee,te,ae,re,J=null,G=null;function fe(){O&&O.classList.remove("hidden")}function N(){O&&O.classList.add("hidden"),j&&j.reset()}function Ds(t,e){G=t,B&&(B.value=e),U&&U.classList.remove("hidden"),B&&B.focus()}function D(){G=null,U&&U.classList.add("hidden"),q&&q.reset()}function js(t,e){J=t,ae&&(ae.textContent="Confirmer la suppression"),re&&(re.textContent=`Êtes-vous sûr de vouloir supprimer le menu "${e}" ? Cette action est irréversible.`),H&&H.classList.remove("hidden")}function se(){J=null,H&&H.classList.add("hidden")}async function qs(t){const e=S();if(e)try{await A(E(I,"plans"),{userId:e.uid,name:t,type:"personal",weeks:{},manualItems:[],checkedItems:{},defaultNumPeople:1,startDay:"Lundi",lastUpdated:new Date}),N()}catch(s){console.error("Error creating plan: ",s),alert("Erreur lors de la création du menu.")}}async function Fs(t,e){if(!(!t||!e))try{const s=h(I,"plans",t);await C(s,{name:e}),D()}catch(s){console.error("Error renaming plan: ",s),alert("Erreur lors du renommage du menu.")}}async function Os(t){const e=S()?.uid;if(!(!t||!e)&&confirm("Voulez-vous vraiment quitter ce menu partagé ? Il n'apparaîtra plus dans votre liste."))try{const s=h(I,"plans",t);await C(s,{collaborators:oe(e)})}catch(s){console.error("Erreur pour quitter le plan: ",s),alert("Une erreur est survenue.")}}async function Us(t){if(t)try{await ie(h(I,"plans",t))}catch(e){console.error("Error deleting plan: ",e),alert("Erreur lors de la suppression du menu.")}}function tn(t){const e=S();if(!e)return()=>{};let s=new Map;const n=()=>{t(Array.from(s.values()).sort((l,d)=>l.name.localeCompare(d.name)))},a=async l=>{const c=[l.userId,...l.collaborators||[]].map(x=>P(h(I,"users",x)));return(await Promise.all(c)).map(x=>x.exists()?x.data():{uid:x.id,displayName:"Inconnu"})},o=L(E(I,"plans"),y("userId","==",e.uid)),r=T(o,async l=>{const c=l.docChanges().map(async f=>{if(f.type==="removed")s.delete(f.doc.id);else{const x=f.doc.data(),b=await a(x);s.set(f.doc.id,{id:f.doc.id,...x,isOwner:!0,participants:b})}});await Promise.all(c),n()}),i=L(E(I,"plans"),y("collaborators","array-contains",e.uid)),p=T(i,async l=>{const c=l.docChanges().map(async f=>{if(f.type==="removed")s.delete(f.doc.id);else{const x=f.doc.data(),b=await a(x),w=b.find(u=>u.uid===x.userId);s.set(f.doc.id,{id:f.doc.id,...x,isOwner:!1,ownerName:w?.displayName||"Inconnu",participants:b})}});await Promise.all(c),n()});return()=>{r(),p()}}function sn(t){if(!v)return;const e=v.value;if(v.innerHTML="",t.length===0){const s=document.createElement("option");s.value="",s.textContent="Aucun menu personnel",s.disabled=!0,v.appendChild(s);return}t.forEach(s=>{const n=document.createElement("option");n.value=s.id;let a=s.name;s.collaborators&&s.collaborators.length>0&&(s.isOwner?a=`👑 ${s.name} [Collab]`:a=`👥 ${s.name} [Collab] (de ${s.ownerName})`),n.textContent=a,v.appendChild(n)}),e&&v.querySelector(`option[value="${e}"]`)?v.value=e:v.selectedIndex=0}function nn(){O=document.getElementById("create-plan-modal"),K=document.getElementById("close-create-plan-modal"),X=document.getElementById("cancel-create-plan-btn"),j=document.getElementById("create-plan-form"),v=document.getElementById("plan-select"),U=document.getElementById("rename-plan-modal"),Y=document.getElementById("close-rename-plan-modal"),Z=document.getElementById("cancel-rename-plan-btn"),q=document.getElementById("rename-plan-form"),B=document.getElementById("new-plan-name"),H=document.getElementById("delete-confirm-modal"),ee=document.getElementById("cancel-delete-btn"),te=document.getElementById("confirm-delete-btn"),ae=document.getElementById("delete-confirm-title"),re=document.getElementById("delete-confirm-message");const t=document.getElementById("create-plan-btn"),e=document.getElementById("rename-plan-btn"),s=document.getElementById("leave-plan-btn"),n=document.getElementById("delete-plan-btn"),a=d=>{d.preventDefault();const c=document.getElementById("plan-name");c&&c.value&&qs(c.value)},o=d=>{d.preventDefault(),G&&B.value&&Fs(G,B.value)},r=()=>{J&&Us(J).then(()=>{se()})},i=()=>{if(v&&v.value){const d=v.options[v.selectedIndex];Ds(v.value,d.text)}else alert("Veuillez sélectionner un menu à renommer.")},p=()=>{v&&v.value?Os(v.value):alert("Veuillez sélectionner un menu.")},l=()=>{if(v&&v.value){const d=v.options[v.selectedIndex].text;js(v.value,d)}else alert("Veuillez sélectionner un menu à supprimer.")};return t?.addEventListener("click",fe),e?.addEventListener("click",i),s?.addEventListener("click",p),n?.addEventListener("click",l),K?.addEventListener("click",N),X?.addEventListener("click",N),j?.addEventListener("submit",a),Y?.addEventListener("click",D),Z?.addEventListener("click",D),q?.addEventListener("submit",o),ee?.addEventListener("click",se),te?.addEventListener("click",r),()=>{t?.removeEventListener("click",fe),e?.removeEventListener("click",i),s?.removeEventListener("click",p),n?.removeEventListener("click",l),K?.removeEventListener("click",N),X?.removeEventListener("click",N),j?.removeEventListener("submit",a),Y?.removeEventListener("click",D),Z?.removeEventListener("click",D),q?.removeEventListener("submit",o),ee?.removeEventListener("click",se),te?.removeEventListener("click",r)}}async function Hs(t,e){if(!(!t||!e))try{const s=h(I,"plans",t);await C(s,{collaborators:he(e),type:"collaborative"})}catch(s){console.error("Error adding collaborator: ",s)}}async function an(t,e,s="Modification diverse"){if(!t||!e)return;const n=S();if(n)try{const a=E(I,"plans",t,"history"),o=JSON.parse(JSON.stringify(e));await A(a,{planState:o,timestamp:F(),modifiedBy:n.uid,modifiedByName:n.displayName||n.email,description:s})}catch(a){console.error("Error saving history:",a)}}async function rn(t,e){const s=S();if(!(!s||!t||!e))try{const n=E(I,"plan_saves"),a=L(n,y("userId","==",s.uid),y("name","==",t)),o=await k(a);if(o.empty)await A(n,{userId:s.uid,name:t,savedAt:F(),planData:e});else{const r=o.docs[0].id,i=h(I,"plan_saves",r);await C(i,{planData:e,savedAt:F()})}}catch(n){console.error("Error saving or updating plan save:",n),alert("Erreur lors de la sauvegarde.")}}console.log("DEBUG: Loading notifications.js module");let Ee=[],we=[],Ie=()=>{},Le=()=>{};const m={btn:null,btnMobile:null,badge:null,badgeMobile:null,dropdown:null,list:null};async function $s(t,e,s){const n=de();if(n)try{const a=h(g,"shares",t);if(await C(a,{status:"accepted"}),e.plan){const o=s.displayName||"Inconnu",r=`Copie de "${e.plan.name}" (de ${o})`,i={...e.plan,userId:n,name:r,isShared:!0,originalOwnerId:e.senderId,sharedAt:new Date,collaborators:[]};delete i.id,await A(E(g,"plans"),i)}e.shoppingList&&await A(E(g,"shopping_lists"),{name:`${e.shoppingList.name} (de ${s.displayName})`,ingredients:e.shoppingList.ingredients,userId:n,isShared:!0,originalOwner:s.uid,sharedAt:new Date})}catch(a){console.error("Erreur lors de l'acceptation du partage : ",a),alert("Une erreur est survenue.")}}async function Vs(t,e){const s=de();if(!(!s||!e||!e.planId))try{await Hs(e.planId,s);const n=h(g,"shares",t);await C(n,{status:"accepted"})}catch(n){console.error("Erreur lors de l'acceptation de l'invitation : ",n),alert("Une erreur est survenue.")}}async function be(t){try{const e=h(g,"shares",t);await C(e,{status:"declined"})}catch(e){console.error("Erreur lors du refus du partage : ",e),alert("Une erreur est survenue.")}}async function zs(t){try{await ye(t)}catch{alert("Erreur lors de l'acceptation.")}}function Ce(){if(!m.list)return;const t=[...Ee,...we];t.sort((s,n)=>n.createdAt.toMillis()-s.createdAt.toMillis());const e=s=>{s&&(t.length>0?(s.textContent=t.length,s.classList.remove("hidden")):s.classList.add("hidden"))};e(m.badge),e(m.badgeMobile),m.list.innerHTML="",t.length===0?m.list.innerHTML='<p class="text-gray-500 text-center p-4">Aucune nouvelle notification.</p>':t.forEach(s=>{const n=Qs(s);m.list.appendChild(n)})}function Qs(t){const e=document.createElement("div");e.className="p-3 border-b border-gray-100 hover:bg-gray-50";const s=document.createElement("p");s.className="text-sm font-medium text-gray-800";const n=document.createElement("p");n.className="text-xs text-gray-500 mb-3";const a=document.createElement("div");a.className="flex space-x-2 justify-end";const o=t.data.type||t.type;if(o==="collaborative_plan_invite"){s.textContent="Invitation à collaborer",n.textContent=`${t.sender.displayName} vous invite à modifier son plan "${t.data.planName}".`;const r=R("Accepter","btn-secondary",p=>{p.target.textContent="...",p.target.disabled=!0,Vs(t.id,t.data)}),i=R("Refuser","text-red-500 hover:bg-red-50 px-3 py-1 rounded-md",p=>{p.target.disabled=!0,be(t.id)});a.append(r,i)}else if(o==="share"){s.textContent=`Partage de ${t.sender.displayName||t.sender.email}`;let r=[];t.data.plan&&r.push("planification"),t.data.shoppingList&&r.push("liste de courses"),n.textContent=`Contenu : ${r.join(" et ")}`;const i=R("Accepter","btn-secondary",l=>{l.target.textContent="...",l.target.disabled=!0,$s(t.id,t.data,t.sender)}),p=R("Refuser","text-red-500 hover:bg-red-50 px-3 py-1 rounded-md",l=>{l.target.disabled=!0,be(t.id)});a.append(i,p)}else if(o==="friend_request"){s.textContent="Invitation d'ami",n.textContent=`${t.sender.displayName||t.sender.email} vous a envoyé une invitation.`;const r=R("Accepter","btn-secondary",p=>{p.target.textContent="...",p.target.disabled=!0,zs(t.id)}),i=R("Refuser","text-red-500 hover:bg-red-50 px-3 py-1 rounded-md",p=>{});a.append(r,i)}return e.append(s,n,a),e}function R(t,e,s){const n=document.createElement("button");return n.className=`btn btn-xs ${e}`,n.textContent=t,n.addEventListener("click",a=>{a.stopPropagation(),s(a)}),n}function Js(t){const e=E(g,"shares"),s=L(e,y("receiverId","==",t),y("status","==","pending"));Ie=T(s,async n=>{const a=[];for(const o of n.docs){const r=o.data(),i=await P(h(g,"users",r.senderId));i.exists()&&a.push({type:r.type||"share",id:o.id,data:r,sender:i.data(),createdAt:r.createdAt})}Ee=a,Ce()},n=>{console.error("Erreur d'écoute des partages:",n)})}function Gs(t){const e=E(g,"friend_requests"),s=L(e,y("receiverId","==",t),y("status","==","pending"));Le=T(s,async n=>{const a=[];for(const o of n.docs){const r=o.data(),i=await P(h(g,"users",r.senderId));i.exists()&&a.push({type:"friend_request",id:o.id,data:r,sender:i.data(),createdAt:r.createdAt})}we=a,Ce()},n=>{console.error("Erreur d'écoute des invitations d'amis:",n)})}function Ws(){if(console.log("DEBUG: initNotifications called"),m.btn=document.getElementById("notifications-btn"),m.btnMobile=document.getElementById("notifications-btn-mobile"),m.badge=document.getElementById("notifications-badge"),m.badgeMobile=document.getElementById("notifications-badge-mobile"),m.dropdown=document.getElementById("notifications-dropdown"),m.list=document.getElementById("notifications-list"),console.log("DEBUG: Notification elements found:",{btn:!!m.btn,btnMobile:!!m.btnMobile,dropdown:!!m.dropdown}),!m.btn||!m.dropdown)return;const t=de();if(!t)return;Ie(),Le(),Js(t),Gs(t);const e=m.btn.cloneNode(!0);if(m.btn.parentNode.replaceChild(e,m.btn),m.btn=e,m.badge=document.getElementById("notifications-badge"),m.btnMobile){const n=m.btnMobile.cloneNode(!0);m.btnMobile.parentNode.replaceChild(n,m.btnMobile),m.btnMobile=n,m.badgeMobile=document.getElementById("notifications-badge-mobile")}const s=n=>{console.log("Notification click detected"),n.stopPropagation();const a=document.getElementById("notifications-dropdown");if(!a)return;if(a.classList.contains("hidden")){a.classList.remove("hidden"),document.body.appendChild(a);const r=window.innerWidth<768,p=(r?m.btnMobile:m.btn).getBoundingClientRect();Object.assign(a.style,{display:"block",position:"fixed",zIndex:"10000",top:`${p.bottom+8}px`,maxHeight:"80vh"}),r?Object.assign(a.style,{left:"50%",transform:"translateX(-50%)",width:"95vw",right:"auto"}):Object.assign(a.style,{left:"auto",right:`${window.innerWidth-p.right}px`,transform:"none",width:"20rem"})}else a.classList.add("hidden"),a.style.cssText=""};m.btn.addEventListener("click",s),m.btnMobile&&m.btnMobile.addEventListener("click",s),document.addEventListener("click",n=>{const a=document.getElementById("notifications-dropdown");a&&!a.classList.contains("hidden")&&(m.btn.contains(n.target)||m.btnMobile&&m.btnMobile.contains(n.target)||a.contains(n.target)||(a.classList.add("hidden"),a.style.cssText=""))})}class Ks{constructor(){this.config={mode:"auto",forcedSeason:"Printemps",offSeasonBehavior:"last",recipeRules:{prioritizeSeasonal:!0,allowPartial:!0,warnOffSeason:!0},listRules:{limitSuggestions:!0,allowManualAdd:!0}},this.STORAGE_KEY="gustoplan_season_config",this.loadConfig()}loadConfig(){const e=localStorage.getItem(this.STORAGE_KEY);if(e)try{const s=JSON.parse(e);this.config={...this.config,...s,recipeRules:{...this.config.recipeRules,...s.recipeRules||{}},listRules:{...this.config.listRules,...s.listRules||{}}}}catch(s){console.error("Failed to parse seasonality config",s)}}saveConfig(){localStorage.setItem(this.STORAGE_KEY,JSON.stringify(this.config)),window.dispatchEvent(new CustomEvent("seasonality-config-changed",{detail:this.config}))}updateConfig(e){this.config={...this.config,...e},this.saveConfig()}getCurrentSeason(){if(this.config.mode==="disabled")return null;if(this.config.mode==="forced")return this.config.forcedSeason;const e=new Date().getMonth();return e===11||e===0||e===1?"Hiver":e>=2&&e<=4?"Printemps":e>=5&&e<=7?"Eté":e>=8&&e<=10?"Automne":"Printemps"}isMonthInSeason(e,s){return!0}getIngredientScore(e){if(this.config.mode==="disabled")return 2;if(this.getMonthsForCurrentDate(),!e.months||e.months.length===0){if(e.seasons&&e.seasons.length>0){const a=this.getCurrentSeason();return e.seasons.includes(a)?2:0}return 2}const s=this.getTargetMonthsForSeason(this.getCurrentSeason());return e.months.some(a=>s.includes(a))?2:0}getRecipeScore(e){if(this.config.mode==="disabled")return 2;const s=this.getCurrentSeason(),n=this.getTargetMonthsForSeason(s);let a=null;return e.months&&e.months.length>0?a=e.months.some(r=>n.includes(r))?2:0:e.seasons&&e.seasons.length>0&&(a=e.seasons.includes(s)?2:0),a!==null?a:2}getTargetMonthsForSeason(e){return{Printemps:["Mars","Avril","Mai"],Eté:["Juin","Juillet","Août"],Automne:["Septembre","Octobre","Novembre"],Hiver:["Décembre","Janvier","Février"]}[e]||[]}getMonthsForCurrentDate(){const e=["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],s=new Date().getMonth();return[e[s]]}}const ge=new Ks;function Xs(){const t=document.getElementsByName("season-mode"),e=document.getElementById("forced-season-selector"),s=document.getElementById("forced-season-select"),n=document.getElementById("off-season-behavior"),a=document.getElementById("rule-prioritize-seasonal"),o=document.getElementById("rule-warn-off-season"),r=document.getElementById("settings-modal"),i=document.getElementById("close-settings-modal"),p=document.getElementById("header-settings-btn"),l=document.getElementById("save-settings-btn");let d={};function c(){r&&(d={...ge.config},b(d),r.classList.remove("hidden"))}function f(){r&&r.classList.add("hidden")}function x(){ge.updateConfig(d),f()}p&&p.addEventListener("click",c),i&&i.addEventListener("click",f),l&&l.addEventListener("click",x),r&&r.addEventListener("click",u=>{u.target===r&&f()});function b(u){Array.from(t).forEach(_=>{_.value===u.mode&&(_.checked=!0)}),w(u.mode),u.forcedSeason&&(s.value=u.forcedSeason),u.offSeasonBehavior&&(n.value=u.offSeasonBehavior),a&&(a.checked=u.recipeRules?.prioritizeSeasonal||!1),o&&(o.checked=u.recipeRules?.warnOffSeason||!1)}Array.from(t).forEach(u=>{u.addEventListener("change",_=>{d.mode=_.target.value,w(_.target.value)})}),s.addEventListener("change",u=>{d.forcedSeason=u.target.value}),n.addEventListener("change",u=>{d.offSeasonBehavior=u.target.value}),a&&a.addEventListener("change",u=>{d.recipeRules={...d.recipeRules,prioritizeSeasonal:u.target.checked}}),o&&o.addEventListener("change",u=>{d.recipeRules={...d.recipeRules,warnOffSeason:u.target.checked}});function w(u){u==="forced"?e.classList.remove("hidden"):e.classList.add("hidden")}}function Ys(){const t=S();if(t){const s=document.getElementById("user-display-name");s&&(s.textContent=t.displayName||t.email)}const e=document.querySelectorAll(".nav-btn");e.forEach(s=>{s.addEventListener("click",n=>{const a=n.currentTarget.dataset.path;z(a),e.forEach(o=>{o.classList.remove("bg-tomato","text-white"),o.classList.add("bg-white","text-tomato")}),n.currentTarget.classList.add("bg-tomato","text-white"),n.currentTarget.classList.remove("bg-white","text-tomato")})}),z("menu"),console.log("DEBUG: Calling initNotifications..."),Ws(),Xs()}document.addEventListener("DOMContentLoaded",()=>{_s().then(b=>{b&&Ys()});const t=document.getElementById("profile-btn"),e=document.getElementById("profile-menu"),s=document.getElementById("user-display-name");if(t&&e){const b=w=>{w.stopPropagation(),e.classList.toggle("hidden");const u=!e.classList.contains("hidden");t.setAttribute("aria-expanded",u)};t.addEventListener("click",b),s&&(s.addEventListener("click",b),s.style.cursor="pointer"),document.addEventListener("click",w=>{!(e.contains(w.target)||t.contains(w.target)||s&&s.contains(w.target))&&!e.classList.contains("hidden")&&(e.classList.add("hidden"),t.setAttribute("aria-expanded","false"))})}const n=document.getElementById("settings-link"),a=document.getElementById("settings-modal"),o=document.getElementById("close-settings-modal"),r=document.getElementById("dark-mode-toggle"),i=b=>{b==="dark"?(document.documentElement.classList.add("dark"),r&&(r.checked=!0)):(document.documentElement.classList.remove("dark"),r&&(r.checked=!1))},p=localStorage.getItem("theme");p?i(p):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?i("dark"):i("light"),n&&a&&n.addEventListener("click",b=>{b.preventDefault(),a.classList.remove("hidden")}),o&&a&&o.addEventListener("click",()=>{a.classList.add("hidden")}),a&&a.addEventListener("click",b=>{b.target===a&&a.classList.add("hidden")}),r&&r.addEventListener("change",()=>{const b=r.checked?"dark":"light";localStorage.setItem("theme",b),i(b)});const l=document.getElementById("mobile-menu-btn"),d=document.getElementById("mobile-menu");let c=null;l&&d?(console.log("Mobile menu initialized (Overlay Mode)"),l.addEventListener("click",b=>{b.stopPropagation(),c?(c.remove(),c=null):(c=document.createElement("div"),c.id="mobile-menu-overlay-container",c.innerHTML=d.innerHTML,Object.assign(c.style,{position:"fixed",top:"60px",left:"0",width:"100%",backgroundColor:"#3D405B",zIndex:"10000",boxShadow:"0 4px 6px rgba(0,0,0,0.1)",padding:"1rem",display:"block"}),c.addEventListener("click",w=>{const u=w.target.closest("button");if(!u)return;const _=u.dataset.path;if(_)console.log("Overlay: Navigating directly to",_),z(_);else if(u.id==="profile-btn-mobile")console.log("Overlay: Opening settings"),a&&a.classList.remove("hidden");else{let $=null;u.id&&($=document.getElementById(u.id)),$?(console.log("Overlay: Delegating click to original:",$),$.click()):console.warn("Overlay: No action found for",u)}c&&(c.remove(),c=null)}),document.body.appendChild(c))}),document.addEventListener("click",b=>{c&&!c.contains(b.target)&&!l.contains(b.target)&&(c.remove(),c=null)})):console.warn("Mobile menu elements missing");const f=document.getElementById("profile-btn-mobile");f&&a&&f.addEventListener("click",()=>{a.classList.remove("hidden")}),document.querySelectorAll(".nav-btn-mobile").forEach(b=>{b.addEventListener("click",w=>{const u=w.currentTarget.dataset.path;z(u)})})});export{M as _,tn as a,S as b,an as c,rn as d,en as e,de as g,nn as i,z as n,sn as p,ge as s};
