function init () {
    // Recupère les recettes
    const recettesListe = recipes
    // Affiche toutes les recettes au chargement de la page
    displayRecettes(recettesListe)
    // Affiche les selects
    selectTemplate(recettesListe)
}

// Affiche toutes les recettes
function displayRecettes (liste) {
    const blocRecettes = document.querySelector('.bloc-recettes')
    liste.forEach((recette) => {
        const nouvelleRecette = recetteTemplate(recette)
        blocRecettes.appendChild(nouvelleRecette)
    })
    // Met à jour le nombre de recettes
    document.querySelector('.numberOfResults').textContent = liste.length
}

init()