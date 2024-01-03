function init () {
    // Affiche toutes les recettes au chargement de la page
    displayRecettes(getRecettes())
    // Affiche les selects
    selectTemplate(getRecettes())
    // Bouton de suppression de la recherche principale
    clearSearchBar()
    // Demarre la recherche
    const searchInput = document.querySelector('#search-bar')
    searchInput.addEventListener('input', () => {
        displayClearSearchBar(getSearchBar().length)
        search()
        displayError()
    })
}

// Affiche toutes les recettes
function displayRecettes (liste) {
    const blocRecettes = document.querySelector('.bloc-recettes')
    blocRecettes.innerHTML = ''
    liste.forEach((recette) => {
        const nouvelleRecette = recetteTemplate(recette)
        blocRecettes.appendChild(nouvelleRecette)
    })
    // Met à jour le nombre de recettes
    document.querySelector('.numberOfResults').textContent = liste.length
}

// Recuperation des tags
function getTags() {
    const tags = document.querySelectorAll('.tags-item')
    let tagsList = []
    tags.forEach(tag => {
        tagsList.push(tag.textContent)
    })
    return tagsList
}

// Recuperation du contenu de la barre de recherche
function getSearchBar() {
    return document.querySelector('#search-bar').value
}

function getRecettes() {
    return recipes
}

// Recherche des recettes
function search() {
    const listeRecetteFiltree = algoRechercheBoucles(getRecettes(), getSearchBar(), getTags())
    displayRecettes(listeRecetteFiltree)
    selectTemplate(listeRecetteFiltree)
}

// VIDER LES CHAMP DE RECHERCHE DES FILTRES
function clearSearch(searchIngredients, searchAppareils, searchUstensils) {
    const clearSearch = document.querySelectorAll('.dropdown-close-icon')
    const searchList = [searchIngredients, searchAppareils, searchUstensils]

    for (let i = 0; i < clearSearch.length; i++) {
        clearSearch[i].addEventListener('click', (event) => {
            searchList[i].value = ''
            searchList[i].dispatchEvent(new Event('input'))
            searchList[i].focus()
        })
    }
}

// Vider le champs de recherche principal
function clearSearchBar() {
    const searchBar = document.querySelector('#search-bar')
    const clearButton = document.querySelector('.search-close-btn')
    
    clearButton.addEventListener('click', () => {
        searchBar.value = ''
        searchBar.dispatchEvent(new Event('input'))
        displayClearSearchBar(0)
        searchBar.focus()
    })
}

// AFFICHER OU MASQUE LE BOUTON DE SUPPRESSION DE LA RECHERCHE
function displayClearSearchBar(searchBarLength) {
    const clearButton = document.querySelector('.search-close-btn')
    if (searchBarLength < 1) {
        clearButton.classList.add('search-close-btn-hidden')
    } else {
        clearButton.classList.remove('search-close-btn-hidden')
    }
}

// AFFICHER MESSAGE D'ERREUR
function displayError() {
    const blocErreur = document.querySelector('.no-result')
    const errorMessage = document.getElementById('searchValue')
    const numberOfResults = document.querySelector('.numberOfResults').textContent
    if (getSearchBar().length > 2 && numberOfResults < 1) {
        blocErreur.classList.remove('no-result-hidden')
        errorMessage.textContent = getSearchBar()
    } else {
        blocErreur.classList.add('no-result-hidden')
    }
}

init()