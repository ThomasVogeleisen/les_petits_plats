// ALGORITHME DE RECHERCHE AVEC BOUCLES
function algoRechercheBoucles(recipes, search, tags) {

    let result = []

    // RECHERCHE EN FONCTION DES DONNEES FOURNIES
    if (search.length > 2 && tags.length === 0) {
        // Recherche avec la barre de recherche
        result = searchBySearchBar(recipes, search)
    
    } else if (search.length <= 2 && tags.length > 0) {
        // Recherche avec les tags
        result = searchByTags(recipes, tags)
    
    } else if (search.length > 2 && tags.length > 0) {
        // recherche avec les tags et la barre de recherche
        result = searchBySearchBar(recipes, search)
        result = searchByTags(result, tags)
    
    } else {
        // Aucune recherche
        result = recipes
    }

    // Recherche avec les tags
    function searchByTags(recipes, tags) {
        
        // Recupere les recettes qui correspondent aux tags
        const resultByTags = []
        recipes.forEach(recipe => {
            let count = 0
            tags.forEach(tag => {
                if (recipe.appliance.toLowerCase().includes(tag.toLowerCase())) {
                    count++
                }
                recipe.ingredients.forEach(ingredient => {
                    if (ingredient.ingredient.toLowerCase().includes(tag.toLowerCase())) {
                        count++
                    }
                })
                recipe.ustensils.forEach(ustensil => {
                    if (ustensil.toLowerCase().includes(tag.toLowerCase())) {
                        count++
                    }
                })
            })
            if (count === tags.length) {
                resultByTags.push(recipe)
            }
        })

        return resultByTags
    }

    // Recherche avec la barre de recherche
    // ALGORYTHME DE RECHERCHE AVEC BOUCLES FOR
    function searchBySearchBar(recipes, search) {
        const resultBySearchBar = []

        // Recherche dans le nom, la description et les ingredients avec des boucles for
        for (let i = 0; i < recipes.length; i++) {
            if (recipes[i].name.toLowerCase().includes(search.toLowerCase())) {
                resultBySearchBar.push(recipes[i])
            } else if (recipes[i].description.toLowerCase().includes(search.toLowerCase())) {
                resultBySearchBar.push(recipes[i])
            } else {
                for (let j = 0; j < recipes[i].ingredients.length; j++) {
                    if (recipes[i].ingredients[j].ingredient.toLowerCase().includes(search.toLowerCase())) {
                        resultBySearchBar.push(recipes[i])
                    }
                }
            }
        }
        return resultBySearchBar
    }

    return result
}