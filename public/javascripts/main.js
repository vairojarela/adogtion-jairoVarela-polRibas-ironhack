'use stict'

const main = () => {
//   const submitButton = document.querySelector('.form-recipes')
//   submitButton.addEventListener('submit', async (event) => {
//     const listrecipes = document.querySelector('.recipe-list')
//     event.preventDefault()
//     addEventButton()

//     const recepie = {
//       title: event.srcElement.title.value,
//       level: event.srcElement.level.value,
//       cuisine: event.srcElement.cuisine.value,
//       duration: event.srcElement.duration.value
//     }
//     const response = await axios.post('/api/recipes', recepie)
//     submitButton.reset()
//     const newRecipe = response.data
//     const h3 = document.createElement('h3')
//     h3.innerHTML = `${newRecipe.title}<img src="https://png.pngtree.com/svg/20170427/48471fd69e.png" alt="delate" width="24px" id="${newRecipe._id}">`
//     listrecipes.appendChild(h3)
//     addEventButton()
//   })

//   const addEventButton = () => {
//     const delateButton = document.querySelectorAll('img')
//     delateButton.forEach((button) => {
//       if (button.getEventListeners) { button.removeEventListener('click') }
//     })
//     delateButton.forEach((button) => {
//       button.addEventListener('click', async (event) => {
//         await axios.post(`/api/recipes/${event.target.id}/delate`)
//         const h3 = event.target.parentElement
//         h3.remove()
//       })
//     })
//   }
}
window.addEventListener('load', main)
