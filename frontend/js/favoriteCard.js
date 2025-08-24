import { grabFavorites, deleteFavorite} from "../store/userStore.js"
import { createFavorites } from './welcome.js'
import { showModal } from './modal.js'



export async function createFavoriteCard(data) {


    let pokemon = data

    if(pokemon.url) {
        try {
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type' : 'application/json'
                }
            }

            const response = await fetch(pokemon.url, options)


            if(response.status === 200) {
                pokemon = await response.json()


            } else {
                console.log(response.status)
            }


        } catch (err) {
            console.log(err)
        }
    }



    


    let favoriteCard = document.createElement('div')
    let removeFavorite = document.createElement('button')
    let favoriteCardImg = document.createElement('img');
    let favoriteCardName = document.createElement('div');

    favoriteCard.className = 'favorite-card'
    removeFavorite.textContent = '-'
    removeFavorite.className = 'remove-favorite'
    favoriteCardImg.className = 'favorite-card-img'
    favoriteCardName.className = 'favorite-card-name'



    favoriteCardImg.src = pokemon.sprites.front_default
    favoriteCardName.textContent = pokemon.name


    removeFavorite.addEventListener('click', (e) => {
        e.stopPropagation()
        deleteFavorite(data)
        let arr = grabFavorites()

        createFavorites(arr)
    })
    

    favoriteCard.appendChild(removeFavorite)
    favoriteCard.appendChild(favoriteCardImg)
    favoriteCard.appendChild(favoriteCardName)



    favoriteCard.addEventListener('click', () => {
        showModal(pokemon)

    })


    return favoriteCard


}