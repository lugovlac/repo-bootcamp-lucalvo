// nros del 1 al 10
let nros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1: multiplicados por 2
let multiplicados = [];
nros.forEach((n) => multiplicados.push(n * 2));

// 2: mayores a 5
let may5 = multiplicados.filter(m => m >= 5);

// 3: el primero mayor a 10

let may10 = may5.find(n => n >= 10);

// 4: Pokemone' con poder menor a 10

let pokemones = [ 
    { nombre: 'pikachu', poder: 12 },
    { nombre: 'bulbasaur', poder: 6 },
    { nombre: 'charizard', poder: 19 },
    { nombre: 'squirtle', poder: 3 },
    { nombre: 'metwo', poder: 6 }, 
];

let poderMenor10 = pokemones.filter(poke => poke.poder < 10);
    
console.log(nros)
console.log(multiplicados)
console.log(may5)
console.log(may10)
console.log(poderMenor10)