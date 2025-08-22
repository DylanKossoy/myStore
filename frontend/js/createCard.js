



export async function createCard(pokemon) {

    let data = null


    const options = {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json'
        }
    }

    try {
        const response = await fetch(pokemon.url, options)

        if(response.status === 200) {
            data = await response.json()

            console.log(data)
        } else {
            console.log(response.status)
        }
    } catch(err) {
        console.log("error: " + err)
    }
   

    let card = document.createElement('div');
    let pokeName = document.createElement('div')
    let pokeImg = document.createElement('img')
    let pokemonBase = document.createElement('div')


    
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





    




    return card
    

}