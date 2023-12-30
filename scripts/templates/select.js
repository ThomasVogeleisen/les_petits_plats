// AFFICHE LES SELECTS
function selectTemplate (recettesListe) {
    liste = selectsListFactory(recettesListe)
    const ingredientsList = document.querySelector('#ingredients-list')
    const appareilsList = document.querySelector('#appareils-list')
    const ustensilesList = document.querySelector('#ustensiles-list')

    // EFFACER LES LISTES
    ingredientsList.innerHTML = ''
    appareilsList.innerHTML = ''
    ustensilesList.innerHTML = ''
    
    // Affiche Liste ingredients
    for (let i = 0; i < liste.ingredients.length; i++) {
        const option = document.createElement('p')
        option.classList.add('dropdown-element')
        option.textContent = liste.ingredients[i]
        ingredientsList.appendChild(option)
    }
    // Affiche Liste appareils
    for (let i = 0; i < liste.appareils.length; i++) {
        const option = document.createElement('p')
        option.classList.add('dropdown-element')
        option.textContent = liste.appareils[i]
        appareilsList.appendChild(option)
    }
    // Affiche Liste ustensiles
    for (let i = 0; i < liste.ustensiles.length; i++) {
        const option = document.createElement('p')
        option.classList.add('dropdown-element')
        option.textContent = liste.ustensiles[i]
        ustensilesList.appendChild(option)
    }
    // Création d'un event listener sur les boutons de tri
    createEventSelect(recettesListe)
}

// CREATION D'UN EVENT LISTENER SUR LES BOUTONS DE TRI
function createEventSelect(recettesListe) {
    const searchIngredients = document.querySelector('#search-ingredients')
    const searchAppareils = document.querySelector('#search-appareils')
    const searchUstensils = document.querySelector('#search-ustensils')

    // Vider le champs de recherche des filtres
    clearSearch(searchIngredients, searchAppareils, searchUstensils)

    // Cree un event pour afficher les tags
    createEventTags(recettesListe)

    // Recherche par ingredients
    searchIngredients.addEventListener('input', (event) => {

        // Recuperer la liste des ingredients
        const ingredients = document.querySelectorAll('#ingredients-list .dropdown-element')

        // supprimer les ingredients qui ne correspondent pas
        for (let i = 0; i < ingredients.length; i++) {
            if (ingredients[i].textContent.toLowerCase().includes(event.target.value.toLowerCase()) && ingredients[i].classList.contains('tag-hidden') === false) {
                ingredients[i].style.display = 'block'
            } else {
                ingredients[i].style.display = 'none'
            }
        }
    })

    // Recherche par appareils
    searchAppareils.addEventListener('input', (event) => {

        // Recuperer la liste des appareils
        const appareils = document.querySelectorAll('#appareils-list .dropdown-element')

        // supprimer les appareils qui ne correspondent pas
        for (let i = 0; i < appareils.length; i++) {
            if (appareils[i].textContent.toLowerCase().includes(event.target.value.toLowerCase()) && appareils[i].classList.contains('tag-hidden') === false) {
                appareils[i].style.display = 'block'
            } else {
                appareils[i].style.display = 'none'
            }
        }
    })

    // Recherche par ustensiles
    searchUstensils.addEventListener('input', (event) => {

        // Recuperer la liste des ustensiles
        const ustensils = document.querySelectorAll('#ustensiles-list .dropdown-element')

        // supprimer les ustensiles qui ne correspondent pas
        for (let i = 0; i < ustensils.length; i++) {
            if (ustensils[i].textContent.toLowerCase().includes(event.target.value.toLowerCase()) && ustensils[i].classList.contains('tag-hidden') === false) {
                ustensils[i].style.display = 'block'
            } else {
                ustensils[i].style.display = 'none'
            }
        }
    })
}

// VIDER LE CHAMP DE RECHERCHE DES FILTRES
function clearSearch(searchIngredients, searchAppareils, searchUstensils) {
    const clearSearch = document.querySelectorAll('.dropdown-close-icon')
    const searchList = [searchIngredients, searchAppareils, searchUstensils]

    for (let i = 0; i < clearSearch.length; i++) {
        clearSearch[i].addEventListener('click', () => {
            searchList[i].value = ''
            searchList[i].dispatchEvent(new Event('input'))
            searchList[i].focus()
        })
    }
}

// CREE UN EVENTLISTER SUR LES TOUS ELEMENTS DE LA LISTE POUR CREER UN TAG
function createEventTags(recettesListe) {
    const elements = document.querySelectorAll('.dropdown-element')
    elements.forEach(element => {
        element.addEventListener('click', (event) => {

            // CREE LE TAG
            tagTemplate(event.target.textContent, recettesListe)

            // Lancer la recherche
            search()

            // vider la zone de recherche
            const searchInput = document.querySelectorAll('.dropdown-search-bar')
            searchInput.forEach(search => {
                search.value = ''
                // search.dispatchEvent(new Event('input'))
            })


            // MASQUER L'ELEMENT DANS LA LISTE
            element.classList.add('tag-hidden')
            element.style.display = 'none'
        })
    })
}
