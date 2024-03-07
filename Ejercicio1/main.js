const fs = require('fs');

function buscarPokemon(nombre) {
    fs.readFile('./archivo/response_ability.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return;
        }

        try {
            const jsonData = JSON.parse(data); //JSON.parse() se utiliza para analizar una cadena de texto JSON y convertirla en un objeto JavaScript.
            const pokemonEncontrado = jsonData.results.find(pokemon => pokemon.name === nombre); //se utiliza para buscar el primer elemento en un array que cumple con cierta condición especificada en una función de callback.

            if (pokemonEncontrado) {
                console.log(`¡Pokémon encontrado!\nNombre: ${pokemonEncontrado.name}\nURL: ${pokemonEncontrado.url}`);
            } else {
                console.log(`No se encontró un Pokémon con el nombre "${nombre}".`);
            }
        } catch (error) {
            console.error('Error al analizar el archivo JSON:', error);
        }
    });
}

// Ejemplo de uso
buscarPokemon("drizzle"); // Cambia "drizzle" por el nombre del Pokémon que deseas buscar
