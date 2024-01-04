// TEMPLATE TAGS
function tagTemplate(tagName, listId) {
    const tagsContainer = document.querySelector('.tags-filter')

    // Creation d'un tag
    const tag = document.createElement('p')
    tag.classList.add('tags-item')
    tag.textContent = tagName
    tagsContainer.appendChild(tag)

    // ajout du bouton de suppression
    const deleteButton = document.createElement('img')
    deleteButton.classList.add('close-tag-btn')
    deleteButton.src = '../assets/icons/close-tag.svg'
    tag.appendChild(deleteButton)
    
    // Ajout du tag dans la liste en jaune
    const selectListTags = document.getElementById(listId)
    const tagYellow = document.createElement('p')
    tagYellow.classList.add('dropdown-element-tag')
    tagYellow.textContent = tagName
    selectListTags.appendChild(tagYellow)

    // ajout du bouton de suppression dans la liste jaune
    const deleteButtonYellow = document.createElement('img')
    deleteButtonYellow.classList.add('dropdown-element-tag-close-btn')
    deleteButtonYellow.src = '../assets/icons/close-tag-black.svg'
    tagYellow.appendChild(deleteButtonYellow)

    // suppression du tag
    deleteButton.addEventListener('click', (event) => {
        tag.remove()
        tagYellow.remove()
        // Remet l'element dans la liste
        const listeItems = document.querySelectorAll('.dropdown-element')
        listeItems.forEach(item => {
            if (item.textContent === event.target.parentNode.textContent) {
                item.classList.remove('tag-hidden')
                item.style.display = 'block'
            }
        })
        // Lance la recherche
        search()
    })

     // suppression du tag via la liste jaune
     deleteButtonYellow.addEventListener('click', (event) => {
        tag.remove()
        tagYellow.remove()
        // Remet l'element dans la liste
        const listeItems = document.querySelectorAll('.dropdown-element')
        listeItems.forEach(item => {
            if (item.textContent === event.target.parentNode.textContent) {
                item.classList.remove('tag-hidden')
                item.style.display = 'block'
            }
        })
        // Lance la recherche
        search()
    })
}