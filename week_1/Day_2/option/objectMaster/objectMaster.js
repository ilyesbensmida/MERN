    const pokémon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);
    const bListPkmn = pokémon.filter( p => p.name[0] === "B" );
    console.log(bListPkmn);

    const pkmnIds = pokémon.map(p => p.id)
    console.log(pkmnIds);

    const divisibleBy3 = pokémon.filter( p => p.id %3 ===0);
    console.log(divisibleBy3);

    const fireType = pokémon.filter( p => p.types.includes("fire"))
    console.log(fireType);

    const multiTypes = pokémon.filter( p => p.types.length > 1)
    console.log(multiTypes);

    const names = pokémon.map( p => p.name)
    console.log(names);
    const namesGreater99 = pokémon.filter( p => p.id > 99).map(p => p.name)
    console.log(namesGreater99);
    const poissonType = pokémon.filter( p => p.types.length==1 )&&p.types[0] === "poison" .map( p => p.name );
    console.log(poissonType)
    const flyintype = pokémon.filter( p => p.types[1]=== "flying").map( p => p.types[0] );
    console.log(flyintype)
    const normalPkmn = pokémon.filter( p => p.types.includes("normal")).length;
    console.log(normalPkmn)




    // ***************************************************************************
    // 1. Array of pokemon objects where id is evenly divisible by 3
const pokemonDivisibleByThree = pokemon.filter(pokemon => pokemon.id % 3 === 0);

// 2. Array of pokemon objects that are "fire" type
const fireTypePokemon = pokemon.filter(pokemon => pokemon.types.includes("fire"));

// 3. Array of pokemon objects that have more than one type
const multiTypePokemon = pokemon.filter(pokemon => pokemon.types.length > 1);

// 4. Array with just the names of the pokemon
const pokemonNames = pokemon.map(pokemon => pokemon.name);

// 5. Array with names of pokemon with id greater than 99
const highIdNames = pokemon.filter(pokemon => pokemon.id > 99).map(pokemon => pokemon.name);

// 6. Names of pokemon whose only type is poison
const singlePoisonType = pokemon.filter(pokemon => pokemon.types.length === 1 && pokemon.types[0] === "poison").map(pokemon => pokemon.name);

// 7. Array containing just the first type of all pokemon whose second type is "flying" 
const firstTypeFlyingSecond = pokemon
  .filter(pokemon => pokemon.types.length === 2 && pokemon.types[1] === "flying")
  .map(pokemon => pokemon.types[0]);

// 8. Count of normal type pokemon
const normalTypeCount = pokemon.filter(pokemon => pokemon.types.includes("normal")).length;

console.log(pokemonDivisibleByThree);
console.log(fireTypePokemon);
console.log(multiTypePokemon);
console.log(pokemonNames);
console.log(highIdNames);
console.log(singlePoisonType);
console.log(firstTypeFlyingSecond);
console.log(normalTypeCount);

// ************************************************************************
//                             Challenge Section
// ************************************************************************

// 9. Create a function called `evolvesTo` that takes in a pokemon name as an argument and returns an array of all the pokemon that evolve from this
