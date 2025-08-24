


export function showModal(pokemon) {

    let modalContainer = document.querySelector('.modal-container')

    let pokemonImg = document.querySelector('.modal-pokemon-img')
    let pokemonName = document.querySelector('.modal-pokemon-name')
    let baseExperience = document.querySelector('.databox-base')
    let height = document.querySelector('.databox-height')
    let weight = document.querySelector('.databox-weight')
    let id = document.querySelector('.databox-id')
    let order = document.querySelector('.databox-order')

    pokemonImg.src = pokemon.sprites.front_default
    pokemonName.textContent = pokemon.name
    baseExperience.textContent = pokemon.base_experience
    height.textContent = pokemon.height
    weight.textContent = pokemon.weight
    id.textContent = pokemon.id
    order.textContent = pokemon.order


    modalContainer.style.display = 'flex'
    console.log(pokemon)
}