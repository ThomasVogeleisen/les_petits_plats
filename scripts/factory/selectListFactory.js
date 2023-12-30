// Créé udes listes sans doublons pour les filtres à partir des recettes
function selectsListFactory (listeRecettes) {
    const liste = {
        ingredients: [],
        appareils: [],
        ustensiles: []
    }
    listeRecettes.forEach((recette) => {
        // Liste ingredients
        for (let i = 0; i < recette.ingredients.length; i++) {
            if (!liste.ingredients.includes(recette.ingredients[i].ingredient.toLowerCase())){
                liste.ingredients.push(recette.ingredients[i].ingredient.toLowerCase())
            }
        }
        // Liste ustensils
        for (let i = 0; i < recette.ustensils.length; i++) {
            if (!liste.ustensiles.includes(recette.ustensils[i].toLowerCase())){
                liste.ustensiles.push(recette.ustensils[i].toLowerCase())
            }
        }
        // Liste appareils
        if (!liste.appareils.includes(recette.appliance.toLowerCase())){
            liste.appareils.push(recette.appliance.toLowerCase())
        }
    })

    // Enlever les elements qui sont en tags
    const tags = getTags()
    tags.forEach(tag => {
        if (liste.ingredients.includes(tag)) {
            liste.ingredients.splice(liste.ingredients.indexOf(tag), 1)
        }
        if (liste.ustensiles.includes(tag)) {
            liste.ustensiles.splice(liste.ustensiles.indexOf(tag), 1)
        }
        if (liste.appareils.includes(tag)) {
            liste.appareils.splice(liste.appareils.indexOf(tag), 1)
        }
    })
    return liste
}