// Créé une liste sans doublons à partir des recettes
function selectsListFactory (listeRecettes) {
    const liste = {
        ingredients: [],
        appareils: [],
        ustensiles: []
    }
    listeRecettes.forEach((recette) => {
        // Liste ingredients
        for (let i = 0; i < recette.ingredients.length; i++) {
            if (!liste.ingredients.includes(recette.ingredients[i].ingredient)){
                liste.ingredients.push(recette.ingredients[i].ingredient)
            }
        }
        // Liste ustensils
        for (let i = 0; i < recette.ustensils.length; i++) {
            if (!liste.ustensiles.includes(recette.ustensils[i])){
                liste.ustensiles.push(recette.ustensils[i])
            }
        }
        // Liste appareils
        if (!liste.appareils.includes(recette.appliance)){
            liste.appareils.push(recette.appliance)
        }
    })
    return liste
}