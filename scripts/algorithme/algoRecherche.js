// ALGORITHME DE RECHERCHE AVEC BOUCLES
function algoRechercheArray(recipes, search, tags) {

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
    // ALGORYTHME DE RECHERCHE AVEC METHODES D'OBEJTS ARRAY
    function searchBySearchBar(recipes, search) {

        // Recherche dans le nom, la description et les ingredients avec les methodes d'objets array
        const resultBySearchBar = recipes.filter(recipe => {
            return recipe.name.toLowerCase().includes(search.toLowerCase()) ||
                recipe.description.toLowerCase().includes(search.toLowerCase()) ||
                recipe.ingredients.some(ingredient => {
                    return ingredient.ingredient.toLowerCase().includes(search.toLowerCase())
                })
        })
        
        return resultBySearchBar
    }

    return result
}