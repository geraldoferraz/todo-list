const input = document.querySelector('.form-add-todo')
const ul = document.querySelector('.todos-container')
const search = document.querySelector('.form-search input')


input.addEventListener('submit', event => {
    event.preventDefault()
    const inputValue = event.target.add.value.trim()

   if(inputValue.length){
   ul.innerHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${inputValue}">
        <span>${inputValue}</span>
        <i class="far fa-trash-alt delete" data-trash="${inputValue}"></i>
    </li>
    `
    event.target.reset()
}
})

ul.addEventListener('click', event => {
    const clickedElement = event.target
    if(clickedElement.dataset.trash){ //retorna o valor de todos os atributos que possuem o data-algo
        document.querySelector(`[data-todo='${clickedElement.dataset.trash}']`).remove()
    }

    // if(Array.from(clickedElement.classList).includes('delete')){
    //     const element = event.target.parentElement
    //     element.remove()
    // }
})

search.addEventListener('input' , event => {
    const inputValue = event.target.value.trim().toLowerCase()
    Array.from(ul.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(inputValue))
        .forEach(todo => {
            todo.classList.remove('d-flex')
            todo.classList.add('hidden')
        })

    Array.from(ul.children)
        .filter(todo => todo.textContent.toLowerCase().includes(inputValue))
        .forEach(todo => {
            todo.classList.remove('hidden')
            todo.classList.add('d-flex')
        })
})