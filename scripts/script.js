function init () {
    // Recupère les recettes
    const recettesListe = recipes
    // Affiche toutes les recettes au chargement de la page
    displayRecettes(recettesListe)
    // Affiche les selects
    selectTemplate(recettesListe)
    // Création d'un event listener sur les boutons de tri
    createEventSelect()
}

// Affiche toutes les recettes
function displayRecettes (liste) {
    const blocRecettes = document.querySelector('.bloc-recettes')
    liste.forEach((recette) => {
        const nouvelleRecette = recetteTemplate(recette)
        blocRecettes.appendChild(nouvelleRecette)
    })
    // Met à jour le nombre de recettes
    updateRecettesNumber(liste.length)
}

// Mise a jour du nombre de recettes
function updateRecettesNumber (number) {
    document.querySelector('.numberOfResults').textContent = number
}

init()