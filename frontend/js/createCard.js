
import { showModal } from "./modal.js"
import { addFavorite, grabFavorites} from "../store/userStore.js"
import { createFavorites } from './welcome.js'


export async function createCard(pokemon) {

    let data = pokemon

    
    if(data.url) {
        try {
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type' : 'application/json'
                }
            }
            const response = await fetch(data.url, options)
    
            if(response.status === 200) {
                data = await response.json()
                console.log(data)
    
                
            } else {
                console.log(response.status)
            }
        } catch(err) {
            console.log("error: " + err)
        }

    }

    
   

    let card = document.createElement('div');
    let pokeName = document.createElement('div')
    let pokeImg = document.createElement('img')
    let pokemonBase = document.createElement('div')
    let favoriteCard = document.createElement('div')

    

    
    favoriteCard.className = 'card-star'
    favoriteCard.tabIndex = 0;

    favoriteCard.addEventListener('click', async (e) => {
        e.stopPropagation()


        favoriteCard.id = 'gold'




        
        addFavorite(pokemon)
        let arr = grabFavorites()

        createFavorites(arr)

        console.log(grabFavorites())

    })


    
    pokemonBase.className = 'card-pokemon-base'
    pokemonBase.textContent = data.base_experience
    pokeImg.className = 'pokemon-img'
    pokeImg.src = data.sprites.front_default
    card.className = 'card'
    pokeName.className = 'card-pokemon-name'
    pokeName.textContent = data.name


    card.appendChild(pokeName)
    card.appendChild(pokeImg)
    card.appendChild(pokemonBase)
    card.appendChild(favoriteCard)


    card.addEventListener('click', () => {
        showModal(data)
    })





    




    return card
    

}