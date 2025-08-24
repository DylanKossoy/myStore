import { createCard } from "./createCard.js";
import { fetchPokemon } from "./fetchData.js";
import { createFavoriteCard } from './favoriteCard.js'

let pokemonArray = [];
let startOffset = 0;

let nextButton = document.querySelector(".card-next");
let searchButton = document.querySelector(".search-button");
let searchInput = document.querySelector(".search-input");
let headerName = document.querySelector(".header-name");
let exitModalButton = document.querySelector('.exit-modal-button')

activateWelcomePage();

export async function activateWelcomePage() {


  let userData = JSON.parse(sessionStorage.getItem("userData"));
  console.log(userData)

 
  // headerName.textContent = userData.user.username;
  let arr = await fetchPokemon(startOffset);

  pokemonArray.push(...arr.results);

  if (!searchInput.value) {
    createCards(pokemonArray);
  } else {
  }



  exitModalButton.addEventListener('click', () => {
    let modalContainer = document.querySelector('.modal-container');

    modalContainer.style.display = 'none'
  })

  nextButton.addEventListener("click", async () => {
    if (searchInput.value) return;
    
    startOffset += 20;
    let newArr = await fetchPokemon(startOffset);
    console.log(newArr);
    pokemonArray.push(...newArr.results);
    console.log(pokemonArray);

    createCards(pokemonArray);
  });

 

  searchButton.addEventListener("click", async () => {
    let searchInputValue = document.querySelector(".search-input").value;
    if (!searchInputValue) return;

    let result = await searchPoke(searchInputValue);

    console.log(result);
    let card = await createCard(result);

    let container = document.querySelector(".card-container");
    container.textContent = "";

    if (card) {
      container.appendChild(card);
    }
  });
}

function createCards(arr) {
  let container = document.querySelector(".card-container");

  if (container) {
    container.textContent = "";
  }

  console.log(arr);

  arr.forEach(async (pokemon) => {
    let card = await createCard(pokemon);

    container.appendChild(card);
  });
}


export function createFavorites(arr) {
  let container = document.querySelector('.favorite-cards-container')


  if(!arr) return


  container.textContent = ''


  arr.forEach( async (pokemon) => {
    let card = await createFavoriteCard(pokemon);


    container.appendChild(card)
  })
}

async function searchPoke(name) {
  if (!name) return;

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, options);

    if (response.status === 200) {
      const data = await response.json();

      return data;
    } else {
      console.log(response.status);
    }
  } catch (err) {
    console.log(err);
  }
}
