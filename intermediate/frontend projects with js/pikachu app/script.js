const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-button');
const pokemonName= document.getElementById('pokemon-name');
const id= document.getElementById('pokemon-id');
const height= document.getElementById('height');
const weight= document.getElementById('weight');
const hp= document.getElementById('hp');
const defense= document.getElementById('defense');
const attack= document.getElementById('attack');
const specialAtk= document.getElementById('special-attack');
const specialDef= document.getElementById('special-defense');
const speed= document.getElementById('speed');
const img= document.getElementById('sprite');
const type= document.getElementById('types');

let apiLink="https://pokeapi.co/api/v2/pokemon/";  // Use the official PokeAPI

const fetchData = async (link) => {
  try {
    const res = await fetch(link);

    if (res.status === 404) {
      alert("Pokémon not found");
      return; // Stop further execution if Pokémon is not found
    }

    if (!res.ok) { 
      throw new Error(`Error: ${res.status} - ${res.statusText}`);
    }

    const data = await res.json();
    display(data);  // Call the display function if data is valid
    console.log(data);
  } catch (err) {
    console.error(err.message);
  }
};

const rename = (input) => {
  let name = input.toLowerCase().replace(/ /g, '-');
  const link = apiLink + name;
  return link;
}

const display = (data) => {
  pokemonName.textContent = data.name;
  id.textContent = '#' + data.id;
  height.textContent = 'Height: ' + data.height;
  weight.textContent = 'Weight: ' + data.weight;
  hp.textContent = data.stats[0].base_stat;
  attack.textContent = data.stats[1].base_stat;
  defense.textContent = data.stats[2].base_stat;
  specialAtk.textContent = data.stats[3].base_stat; 
  specialDef.textContent = data.stats[4].base_stat;
  speed.textContent = data.stats[5].base_stat;
  img.src = data.sprites.front_default;
  img.alt = `${data.name} image`;
  img.style.height='200px';
  img.style.width='200px';
  type.innerHTML = '';  // Clear any previous types
  data.types.forEach((typeInfo) => {
    const typeElement = document.createElement('span');
    typeElement.textContent = typeInfo.type.name.toUpperCase();
    type.appendChild(typeElement);
  });
};

searchBtn.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent form submission/reload
  if (searchInput.value) {
    const formattedName = rename(searchInput.value);
    fetchData(formattedName);
  } else {
    alert('Please enter a value.');
  }
});