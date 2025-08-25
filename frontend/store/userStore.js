

let userData = sessionStorage.getItem('userData')
let favoriteArrays = []





export function addFavorite(pokemon) {

    const exist = favoriteArrays.some(poke => poke.name === pokemon.name)


    if(!exist) {
        favoriteArrays.push(pokemon)

       localStorage.setItem('favArray', JSON.stringify(favoriteArrays))

    }
  


    
}


export function grabFavorites() {
    return favoriteArrays
}


export function deleteFavorite(pokemon) {


    const idx = favoriteArrays.findIndex(poke => poke.name === pokemon.name)


    if(idx !== -1) {
       
        favoriteArrays.splice(idx, 1)
        localStorage.setItem('favArray', JSON.stringify(favoriteArrays))
    }
    
}


