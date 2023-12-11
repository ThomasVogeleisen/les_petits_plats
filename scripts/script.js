// Affiche toutes les recettes
function displayRecettes (listeRecettes) {
    const blocRecettes = document.querySelector('.bloc-recettes')
    listeRecettes.forEach((recette) => {
        const nouvelleRecette = recetteTemplate(recette)
        blocRecettes.appendChild(nouvelleRecette)
    })
    updateRecettesNumber(listeRecettes.length)
}

// Mise a jour du nombre de recettes
function updateRecettesNumber (number) {
    document.querySelector('.numberOfResults').textContent = number
}

displayRecettes(recipes)