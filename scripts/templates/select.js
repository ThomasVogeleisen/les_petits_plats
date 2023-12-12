// AFFICHE LES SELECTS

function selectTemplate (recettesListe) {
    liste = selectsListFactory(recettesListe)
    const ingredientsList = document.querySelector('#ingredients-list')
    const appareilsList = document.querySelector('#appareils-list')
    const ustensilesList = document.querySelector('#ustensiles-list')
    
    // Affiche Liste ingredients
    for (let i = 0; i < liste.ingredients.length; i++) {
        const option = document.createElement('p')
        option.classList.add('dropdown-element')
        option.textContent = liste.ingredients[i]
        ingredientsList.appendChild(option)
    }
    // Affiche Liste appareils
    for (let i = 0; i < liste.appareils.length; i++) {
        const option = document.createElement('p')
        option.classList.add('dropdown-element')
        option.textContent = liste.appareils[i]
        appareilsList.appendChild(option)
    }
    // Affiche Liste ustensiles
    for (let i = 0; i < liste.ustensiles.length; i++) {
        const option = document.createElement('p')
        option.classList.add('dropdown-element')
        option.textContent = liste.ustensiles[i]
        ustensilesList.appendChild(option)
    }
}