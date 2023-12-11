// AFFICHAGE DES RECETTES

function recetteTemplate (data) {
    const { image, name, time, description, ingredients } = data

    // Ajout balise Article
    const article = document.createElement('article')
    article.classList.add('recette-card')

    // Ajout du conteneur de l'image
    const divImage = document.createElement('div')
    divImage.classList.add('recette-card-img')
    article.appendChild(divImage)

    // Ajout de l'image
    const imageRecette = document.createElement('img')
    imageRecette.classList.add('img-recette')
    imageRecette.setAttribute('src', `../assets/images/${image}`)
    imageRecette.setAttribute('alt', `${name}`)
    divImage.appendChild(imageRecette)

    // Ajout du temps de préparation
    const timeRecette = document.createElement('span')
    timeRecette.classList.add('recette-time')
    timeRecette.textContent = `${time}min`
    divImage.appendChild(timeRecette)

    // Ajout de la div qui contient la recette
    const divRecette = document.createElement('div')
    divRecette.classList.add('recette-card-content')
    article.appendChild(divRecette)

    // Ajout du titre de la recette
    const titleRecette = document.createElement('h2')
    titleRecette.classList.add('recette-title')
    titleRecette.textContent = `${name}`
    divRecette.appendChild(titleRecette)

    // Ajout du titre recette
    const titreRecette = document.createElement('h3')
    titreRecette.classList.add('recette-instructions-title')
    titreRecette.textContent = 'recette'
    divRecette.appendChild(titreRecette)

    // Ajout des instructions de la recette
    const instructionsRecette = document.createElement('p')
    instructionsRecette.classList.add('recette-instructions')
    instructionsRecette.textContent = `${description}`
    divRecette.appendChild(instructionsRecette)

    // ajout du titre ingredients
    const titreIngredients = document.createElement('h3')
    titreIngredients.classList.add('recette-ingredients-title')
    titreIngredients.textContent = 'ingrédients'
    divRecette.appendChild(titreIngredients)

    // ajout de la div ingredients
    const divIngredients = document.createElement('div')
    divIngredients.classList.add('recette-ingredients-bloc')
    divRecette.appendChild(divIngredients)

    // Ajout des ingredients
    ingredients.forEach((ingredient) => {
        // Bloc ingredient
        const item = document.createElement('div')
        item.classList.add('recette-ingredients-item')
        divIngredients.appendChild(item)
        // ingredient
        const nomIngredient = document.createElement('h4')
        nomIngredient.classList.add('recette-ingredient-item-title')
        nomIngredient.textContent = ingredient.ingredient
        item.appendChild(nomIngredient)
        // Quantite
        const quantiteIngredient = document.createElement('p')
        quantiteIngredient.classList.add('recette-ingredients-item-quantite')
        quantiteIngredient.textContent = `${ingredient.quantity ? ingredient.quantity : ''} ${ingredient.unit ? ingredient.unit : ''}`
        item.appendChild(quantiteIngredient)
    })

    return (article)
}