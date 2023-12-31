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