// TEMPLATE TAGS
function tagTemplate(tagName) {
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

    // suppression du tag
    deleteButton.addEventListener('click', (event) => {
        tag.remove()
        // Remet l'element dans la liste
        const listeItems = document.querySelectorAll('.dropdown-element')
        listeItems.forEach(item => {
            if (item.textContent === event.target.parentNode.textContent) {
                item.classList.remove('tag-hidden')
                item.style.display = 'block'
            }
        })
        
    })
}