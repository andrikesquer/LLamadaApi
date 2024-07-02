/*
async function handleCall() {

    const contContenido = document.getElementById("responses");

    const response = await fetch("https://v2.jokeapi.dev/joke/Programming");
    const data = await response.json();

    if(data.type === "single") {
        contContenido.innerHTML = data.joke;
    } else {
        contContenido.innerHTML = '${data.setup} ${data.delivery}'
    }
}


// Async 
// utilizando las palabras sync await
// utilizando promesas .then .catch

function handleCallPromt() {
    fetch("https://v2.jokeapi.dev/joke/Programming")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const contContenido = document.getElementById("responses");
            
            if (data.type === "single") {
                contContenido.innerHTML = data.joke;
            } else {
                contContenido.innerHTML = '${data.setup} ${data.delivery}';
            }
        }
    );
}
*/

async function handleCall() {
    const contContenido = document.getElementById("responses");

    const IdPokemon = Math.floor(Math.random() * 1302);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${IdPokemon}`);
    const data = await response.json();

    const pokemonName = data.name;
    const pokemonImage = data.sprites.front_default;
    contContenido.innerHTML = `<p>${pokemonName}</p><img src="${pokemonImage}">`;
}

function handleCallPromt() {
    const contContenido = document.getElementById("responses");

    const IdPokemon = Math.floor(Math.random() * 1302);

    fetch(`https://pokeapi.co/api/v2/pokemon/${IdPokemon}`)
        .then((response) => response.json())
        .then((data) => {
            const pokemonName = data.name;
            const pokemonImage = data.sprites.front_default;

            contContenido.innerHTML = `<p>${pokemonName}</p><img src="${pokemonImage}" alt="${pokemonName}">`;
        })
}
