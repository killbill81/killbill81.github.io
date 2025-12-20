import{o as G,s as B,a as j,d as y,b as h,u as E,g as H,c as W,e as I,q as O,w as k,f as q,h as F,i as R}from"./firebase-config-BSjdx3Os.js";const X="modulepreload",K=function(n){return"/"+n},D={},v=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){let p=function(m){return Promise.all(m.map(b=>Promise.resolve(b).then(c=>({status:"fulfilled",value:c}),c=>({status:"rejected",reason:c}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),d=o?.nonce||o?.getAttribute("nonce");s=p(t.map(m=>{if(m=K(m),m in D)return;D[m]=!0;const b=m.endsWith(".css"),c=b?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${c}`))return;const f=document.createElement("link");if(f.rel=b?"stylesheet":X,b||(f.as="script"),f.crossOrigin="",f.href=m,d&&f.setAttribute("nonce",d),document.head.appendChild(f),b)return new Promise((S,u)=>{f.addEventListener("load",S),f.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${m}`)))})}))}function l(o){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=o,window.dispatchEvent(d),!d.defaultPrevented)throw o}return s.then(o=>{for(const d of o||[])d.status==="rejected"&&l(d.reason);return e().catch(l)})},P=document.querySelector("main"),Y={menu:{html:`
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
        `,script:"./shopping-mode.js"}},Q={"./script.js":()=>v(()=>import("./script.js?v="+Date.now()),[]),"./recipes.js":()=>v(()=>import("./recipes.js?v="+Date.now()),[]),"./ingredients.js":()=>v(()=>import("./ingredients.js?v="+Date.now()),[]),"./lists.js":()=>v(()=>import("./lists.js?v="+Date.now()),[]),"./friends.js":()=>v(()=>import("./friends.js?v="+Date.now()),[]),"./shared.js":()=>v(()=>import("./shared.js?v="+Date.now()),[]),"./all-plans.js":()=>v(()=>import("./all-plans.js?v="+Date.now()),[]),"./view-plan.js":()=>v(()=>import("./view-plan.js?v="+Date.now()),[]),"./shopping-mode.js":()=>v(()=>import("./shopping-mode.js?v="+Date.now()),[]),"./ingredient-modal.js":()=>v(()=>import("./ingredient-modal.js?v="+Date.now()),[])};let M=null;async function _(n){typeof M=="function"&&(M(),M=null);const e=Y[n];if(e&&P){if(P.innerHTML=e.html,e.script){const t=Q[e.script];if(t)try{const i=await t();i.default&&typeof i.default=="function"&&(M=i.default())}catch(i){console.error(`Error loading module ${e.script}:`,i)}else console.error(`Module not found in map for path: ${e.script}`)}}else console.error(`Route not found: ${n}`)}let C=null;function Z(){return new Promise(n=>{G(j,e=>{if(C=e,e){console.log("User is logged in:",e.uid);const t=document.getElementById("logout-btn"),i=document.getElementById("profile-btn");t&&t.classList.remove("hidden"),i&&i.classList.remove("hidden"),t&&!t.hasAttribute("data-listener-attached")&&(t.addEventListener("click",()=>{B(j).catch(l=>{console.error("Sign Out Error",l)})}),t.setAttribute("data-listener-attached","true"));const s=document.getElementById("logout-btn-mobile");s&&!s.hasAttribute("data-listener-attached")&&(s.addEventListener("click",()=>{B(j).catch(l=>{console.error("Sign Out Error",l)})}),s.setAttribute("data-listener-attached","true")),n(e)}else{console.log("User not logged in. Redirecting to login.html");const t=window.location.origin+"/login.html";window.location.href!==t&&(window.location.href=t),n(null)}})})}function A(){return C?C.uid:null}function ee(){return C}async function te(n){try{const e=y(h,"friend_requests",n);await E(e,{status:"accepted"})}catch(e){throw console.error("Erreur lors de l'acceptation de la demande d'ami: ",e),e}}const se=H();async function ne(n,e){if(!(!n||!e))try{const t=y(se,"plans",n);await E(t,{collaborators:W(e),type:"collaborative"})}catch(t){console.error("Error adding collaborator: ",t)}}console.log("DEBUG: Loading notifications.js module");let U=[],$=[],z=()=>{},V=()=>{};const r={btn:null,btnMobile:null,badge:null,badgeMobile:null,dropdown:null,list:null};async function ie(n,e,t){const i=A();if(i)try{const s=y(h,"shares",n);if(await E(s,{status:"accepted"}),e.plan){const l=t.displayName||"Inconnu",o=`Copie de "${e.plan.name}" (de ${l})`,d={...e.plan,userId:i,name:o,isShared:!0,originalOwnerId:e.senderId,sharedAt:new Date,collaborators:[]};delete d.id,await R(I(h,"plans"),d)}e.shoppingList&&await R(I(h,"shopping_lists"),{name:`${e.shoppingList.name} (de ${t.displayName})`,ingredients:e.shoppingList.ingredients,userId:i,isShared:!0,originalOwner:t.uid,sharedAt:new Date})}catch(s){console.error("Erreur lors de l'acceptation du partage : ",s),alert("Une erreur est survenue.")}}async function oe(n,e){const t=A();if(!(!t||!e||!e.planId))try{await ne(e.planId,t);const i=y(h,"shares",n);await E(i,{status:"accepted"})}catch(i){console.error("Erreur lors de l'acceptation de l'invitation : ",i),alert("Une erreur est survenue.")}}async function N(n){try{const e=y(h,"shares",n);await E(e,{status:"declined"})}catch(e){console.error("Erreur lors du refus du partage : ",e),alert("Une erreur est survenue.")}}async function re(n){try{await te(n)}catch{alert("Erreur lors de l'acceptation.")}}function J(){if(!r.list)return;const n=[...U,...$];n.sort((t,i)=>i.createdAt.toMillis()-t.createdAt.toMillis());const e=t=>{t&&(n.length>0?(t.textContent=n.length,t.classList.remove("hidden")):t.classList.add("hidden"))};e(r.badge),e(r.badgeMobile),r.list.innerHTML="",n.length===0?r.list.innerHTML='<p class="text-gray-500 text-center p-4">Aucune nouvelle notification.</p>':n.forEach(t=>{const i=ae(t);r.list.appendChild(i)})}function ae(n){const e=document.createElement("div");e.className="p-3 border-b border-gray-100 hover:bg-gray-50";const t=document.createElement("p");t.className="text-sm font-medium text-gray-800";const i=document.createElement("p");i.className="text-xs text-gray-500 mb-3";const s=document.createElement("div");s.className="flex space-x-2 justify-end";const l=n.data.type||n.type;if(l==="collaborative_plan_invite"){t.textContent="Invitation à collaborer",i.textContent=`${n.sender.displayName} vous invite à modifier son plan "${n.data.planName}".`;const o=w("Accepter","btn-secondary",p=>{p.target.textContent="...",p.target.disabled=!0,oe(n.id,n.data)}),d=w("Refuser","text-red-500 hover:bg-red-50 px-3 py-1 rounded-md",p=>{p.target.disabled=!0,N(n.id)});s.append(o,d)}else if(l==="share"){t.textContent=`Partage de ${n.sender.displayName||n.sender.email}`;let o=[];n.data.plan&&o.push("planification"),n.data.shoppingList&&o.push("liste de courses"),i.textContent=`Contenu : ${o.join(" et ")}`;const d=w("Accepter","btn-secondary",m=>{m.target.textContent="...",m.target.disabled=!0,ie(n.id,n.data,n.sender)}),p=w("Refuser","text-red-500 hover:bg-red-50 px-3 py-1 rounded-md",m=>{m.target.disabled=!0,N(n.id)});s.append(d,p)}else if(l==="friend_request"){t.textContent="Invitation d'ami",i.textContent=`${n.sender.displayName||n.sender.email} vous a envoyé une invitation.`;const o=w("Accepter","btn-secondary",p=>{p.target.textContent="...",p.target.disabled=!0,re(n.id)}),d=w("Refuser","text-red-500 hover:bg-red-50 px-3 py-1 rounded-md",p=>{});s.append(o,d)}return e.append(t,i,s),e}function w(n,e,t){const i=document.createElement("button");return i.className=`btn btn-xs ${e}`,i.textContent=n,i.addEventListener("click",s=>{s.stopPropagation(),t(s)}),i}function de(n){const e=I(h,"shares"),t=O(e,k("receiverId","==",n),k("status","==","pending"));z=q(t,async i=>{const s=[];for(const l of i.docs){const o=l.data(),d=await F(y(h,"users",o.senderId));d.exists()&&s.push({type:o.type||"share",id:l.id,data:o,sender:d.data(),createdAt:o.createdAt})}U=s,J()},i=>{console.error("Erreur d'écoute des partages:",i)})}function le(n){const e=I(h,"friend_requests"),t=O(e,k("receiverId","==",n),k("status","==","pending"));V=q(t,async i=>{const s=[];for(const l of i.docs){const o=l.data(),d=await F(y(h,"users",o.senderId));d.exists()&&s.push({type:"friend_request",id:l.id,data:o,sender:d.data(),createdAt:o.createdAt})}$=s,J()},i=>{console.error("Erreur d'écoute des invitations d'amis:",i)})}function ce(){if(console.log("DEBUG: initNotifications called"),r.btn=document.getElementById("notifications-btn"),r.btnMobile=document.getElementById("notifications-btn-mobile"),r.badge=document.getElementById("notifications-badge"),r.badgeMobile=document.getElementById("notifications-badge-mobile"),r.dropdown=document.getElementById("notifications-dropdown"),r.list=document.getElementById("notifications-list"),console.log("DEBUG: Notification elements found:",{btn:!!r.btn,btnMobile:!!r.btnMobile,dropdown:!!r.dropdown}),!r.btn||!r.dropdown)return;const n=A();if(!n)return;z(),V(),de(n),le(n);const e=r.btn.cloneNode(!0);if(r.btn.parentNode.replaceChild(e,r.btn),r.btn=e,r.badge=document.getElementById("notifications-badge"),r.btnMobile){const i=r.btnMobile.cloneNode(!0);r.btnMobile.parentNode.replaceChild(i,r.btnMobile),r.btnMobile=i,r.badgeMobile=document.getElementById("notifications-badge-mobile")}const t=i=>{console.log("Notification click detected"),i.stopPropagation();const s=document.getElementById("notifications-dropdown");if(!s)return;if(s.classList.contains("hidden")){s.classList.remove("hidden"),document.body.appendChild(s);const o=window.innerWidth<768,p=(o?r.btnMobile:r.btn).getBoundingClientRect();Object.assign(s.style,{display:"block",position:"fixed",zIndex:"10000",top:`${p.bottom+8}px`,maxHeight:"80vh"}),o?Object.assign(s.style,{left:"50%",transform:"translateX(-50%)",width:"95vw",right:"auto"}):Object.assign(s.style,{left:"auto",right:`${window.innerWidth-p.right}px`,transform:"none",width:"20rem"})}else s.classList.add("hidden"),s.style.cssText=""};r.btn.addEventListener("click",t),r.btnMobile&&r.btnMobile.addEventListener("click",t),document.addEventListener("click",i=>{const s=document.getElementById("notifications-dropdown");s&&!s.classList.contains("hidden")&&(r.btn.contains(i.target)||r.btnMobile&&r.btnMobile.contains(i.target)||s.contains(i.target)||(s.classList.add("hidden"),s.style.cssText=""))})}class ue{constructor(){this.config={mode:"auto",forcedSeason:"Printemps",offSeasonBehavior:"last",recipeRules:{prioritizeSeasonal:!0,allowPartial:!0,warnOffSeason:!0},listRules:{limitSuggestions:!0,allowManualAdd:!0}},this.STORAGE_KEY="gustoplan_season_config",this.loadConfig()}loadConfig(){const e=localStorage.getItem(this.STORAGE_KEY);if(e)try{const t=JSON.parse(e);this.config={...this.config,...t,recipeRules:{...this.config.recipeRules,...t.recipeRules||{}},listRules:{...this.config.listRules,...t.listRules||{}}}}catch(t){console.error("Failed to parse seasonality config",t)}}saveConfig(){localStorage.setItem(this.STORAGE_KEY,JSON.stringify(this.config)),window.dispatchEvent(new CustomEvent("seasonality-config-changed",{detail:this.config}))}updateConfig(e){this.config={...this.config,...e},this.saveConfig()}getCurrentSeason(){if(this.config.mode==="disabled")return null;if(this.config.mode==="forced")return this.config.forcedSeason;const e=new Date().getMonth();return e===11||e===0||e===1?"Hiver":e>=2&&e<=4?"Printemps":e>=5&&e<=7?"Eté":e>=8&&e<=10?"Automne":"Printemps"}isMonthInSeason(e,t){return!0}getIngredientScore(e){if(this.config.mode==="disabled")return 2;if(this.getMonthsForCurrentDate(),!e.months||e.months.length===0){if(e.seasons&&e.seasons.length>0){const s=this.getCurrentSeason();return e.seasons.includes(s)?2:0}return 2}const t=this.getTargetMonthsForSeason(this.getCurrentSeason());return e.months.some(s=>t.includes(s))?2:0}getRecipeScore(e){if(this.config.mode==="disabled")return 2;const t=this.getCurrentSeason(),i=this.getTargetMonthsForSeason(t);let s=null;return e.months&&e.months.length>0?s=e.months.some(o=>i.includes(o))?2:0:e.seasons&&e.seasons.length>0&&(s=e.seasons.includes(t)?2:0),s!==null?s:2}getTargetMonthsForSeason(e){return{Printemps:["Mars","Avril","Mai"],Eté:["Juin","Juillet","Août"],Automne:["Septembre","Octobre","Novembre"],Hiver:["Décembre","Janvier","Février"]}[e]||[]}getMonthsForCurrentDate(){const e=["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],t=new Date().getMonth();return[e[t]]}}const T=new ue;function me(){const n=document.getElementsByName("season-mode"),e=document.getElementById("forced-season-selector"),t=document.getElementById("forced-season-select"),i=document.getElementById("off-season-behavior"),s=document.getElementById("rule-prioritize-seasonal"),l=document.getElementById("rule-warn-off-season"),o=document.getElementById("settings-modal"),d=document.getElementById("close-settings-modal"),p=document.getElementById("header-settings-btn"),m=document.getElementById("save-settings-btn");let b={};function c(){o&&(b={...T.config},u(b),o.classList.remove("hidden"))}function f(){o&&o.classList.add("hidden")}function S(){T.updateConfig(b),f()}p&&p.addEventListener("click",c),d&&d.addEventListener("click",f),m&&m.addEventListener("click",S),o&&o.addEventListener("click",a=>{a.target===o&&f()});function u(a){Array.from(n).forEach(x=>{x.value===a.mode&&(x.checked=!0)}),g(a.mode),a.forcedSeason&&(t.value=a.forcedSeason),a.offSeasonBehavior&&(i.value=a.offSeasonBehavior),s&&(s.checked=a.recipeRules?.prioritizeSeasonal||!1),l&&(l.checked=a.recipeRules?.warnOffSeason||!1)}Array.from(n).forEach(a=>{a.addEventListener("change",x=>{b.mode=x.target.value,g(x.target.value)})}),t.addEventListener("change",a=>{b.forcedSeason=a.target.value}),i.addEventListener("change",a=>{b.offSeasonBehavior=a.target.value}),s&&s.addEventListener("change",a=>{b.recipeRules={...b.recipeRules,prioritizeSeasonal:a.target.checked}}),l&&l.addEventListener("change",a=>{b.recipeRules={...b.recipeRules,warnOffSeason:a.target.checked}});function g(a){a==="forced"?e.classList.remove("hidden"):e.classList.add("hidden")}}function pe(){const n=ee();if(n){const t=document.getElementById("user-display-name");t&&(t.textContent=n.displayName||n.email)}const e=document.querySelectorAll(".nav-btn");e.forEach(t=>{t.addEventListener("click",i=>{const s=i.currentTarget.dataset.path;_(s),e.forEach(l=>{l.classList.remove("bg-tomato","text-white"),l.classList.add("bg-white","text-tomato")}),i.currentTarget.classList.add("bg-tomato","text-white"),i.currentTarget.classList.remove("bg-white","text-tomato")})}),_("menu"),console.log("DEBUG: Calling initNotifications..."),ce(),me()}document.addEventListener("DOMContentLoaded",()=>{Z().then(u=>{u&&pe()});const n=document.getElementById("profile-btn"),e=document.getElementById("profile-menu"),t=document.getElementById("user-display-name");if(n&&e){const u=g=>{g.stopPropagation(),e.classList.toggle("hidden");const a=!e.classList.contains("hidden");n.setAttribute("aria-expanded",a)};n.addEventListener("click",u),t&&(t.addEventListener("click",u),t.style.cursor="pointer"),document.addEventListener("click",g=>{!(e.contains(g.target)||n.contains(g.target)||t&&t.contains(g.target))&&!e.classList.contains("hidden")&&(e.classList.add("hidden"),n.setAttribute("aria-expanded","false"))})}const i=document.getElementById("settings-link"),s=document.getElementById("settings-modal"),l=document.getElementById("close-settings-modal"),o=document.getElementById("dark-mode-toggle"),d=u=>{u==="dark"?(document.documentElement.classList.add("dark"),o&&(o.checked=!0)):(document.documentElement.classList.remove("dark"),o&&(o.checked=!1))},p=localStorage.getItem("theme");p?d(p):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?d("dark"):d("light"),i&&s&&i.addEventListener("click",u=>{u.preventDefault(),s.classList.remove("hidden")}),l&&s&&l.addEventListener("click",()=>{s.classList.add("hidden")}),s&&s.addEventListener("click",u=>{u.target===s&&s.classList.add("hidden")}),o&&o.addEventListener("change",()=>{const u=o.checked?"dark":"light";localStorage.setItem("theme",u),d(u)});const m=document.getElementById("mobile-menu-btn"),b=document.getElementById("mobile-menu");let c=null;m&&b?(console.log("Mobile menu initialized (Overlay Mode)"),m.addEventListener("click",u=>{u.stopPropagation(),c?(c.remove(),c=null):(c=document.createElement("div"),c.id="mobile-menu-overlay-container",c.innerHTML=b.innerHTML,Object.assign(c.style,{position:"fixed",top:"60px",left:"0",width:"100%",backgroundColor:"#3D405B",zIndex:"10000",boxShadow:"0 4px 6px rgba(0,0,0,0.1)",padding:"1rem",display:"block"}),c.addEventListener("click",g=>{const a=g.target.closest("button");if(!a)return;const x=a.dataset.path;if(x)console.log("Overlay: Navigating directly to",x),_(x);else if(a.id==="profile-btn-mobile")console.log("Overlay: Opening settings"),s&&s.classList.remove("hidden");else{let L=null;a.id&&(L=document.getElementById(a.id)),L?(console.log("Overlay: Delegating click to original:",L),L.click()):console.warn("Overlay: No action found for",a)}c&&(c.remove(),c=null)}),document.body.appendChild(c))}),document.addEventListener("click",u=>{c&&!c.contains(u.target)&&!m.contains(u.target)&&(c.remove(),c=null)})):console.warn("Mobile menu elements missing");const f=document.getElementById("profile-btn-mobile");f&&s&&f.addEventListener("click",()=>{s.classList.remove("hidden")}),document.querySelectorAll(".nav-btn-mobile").forEach(u=>{u.addEventListener("click",g=>{const a=g.currentTarget.dataset.path;_(a)})})});
