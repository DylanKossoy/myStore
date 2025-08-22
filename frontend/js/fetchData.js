


export async function fetchPokemon(offset) {

    let url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`

    let options = {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json'
        }
    }

    try {

        let response = await fetch(url, options) 

        if(response.status === 200) {
            const data = await response.json()

            return data

           
        } else {
            console.log(response.status)
        }

    } catch(err) {
        console.log(err)
    }
}