import { createCard } from "./createCard.js";
import { fetchPokemon } from "./fetchData.js";

let pokemonArray = [];
let startOffset = 0;

let nextButton = document.querySelector(".card-next");
let searchButton = document.querySelector(".search-button");
let searchInput = document.querySelector(".search-input");

activateWelcomePage();

export async function activateWelcomePage() {
  let arr = await fetchPokemon(startOffset);

  pokemonArray.push(...arr.results);

  if (!searchInput.value) {
    createCards(pokemonArray);
  } else {

  }

  nextButton.addEventListener("click", async () => {
	if(searchInput.value) return
    startOffset += 20;
    let newArr = await fetchPokemon(startOffset);
    console.log(newArr);
    pokemonArray.push(...newArr.results);
    console.log(pokemonArray);

    createCards(pokemonArray);
  });


  searchInput.addEventListener("input", async (e) => {

	let container = document.querySelector('.card-container')
	if(!e.target.value) {
		if(!container) {
			let arr = await fetchPokemon(startOffset)

			createCards(...arr.results);
		} else {
			return
		}
	}



  })


  searchButton.addEventListener('click', async () => {
	let searchInputValue = document.querySelector('.search-input').value
	if(!searchInputValue) return




	

	let result = await searchPoke(searchInputValue)


	console.log(result)
	let card = await createCard(result)

	let container = document.querySelector('.card-container')
	container.textContent = ''
	
	if(card) {
		container.appendChild(card)
	}
	
	
  })
}

function createCards(arr) {
  let container = document.querySelector(".card-container");

  if (container) {
    container.textContent = "";

  }

  console.log(arr)


  arr.forEach(async (pokemon) => {
    let card = await createCard(pokemon);

    container.appendChild(card);
  });
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

      return data
    } else {
      console.log(response.status);
    }
  } catch (err) {
    console.log(err);
  }
}
