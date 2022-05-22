// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
const compra=[
    "Pan",
    "Leche",
    "Manzanas",
    "Yogur",
    "Pollo"
];

// - Modifica la lista de la compra y añádele "Aceite de Girasol"
compra.push("Aceite de Girasol");

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
compra.pop();

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculas=[
    {
        titulo: "Alien: el octavo pasajero",
        director:"Ridley Scott",
        fecha: new Date(1979,08,25)
    },
    {
        titulo: "Mad Max: Furia en la carretera ",
        director:"George Miller",
        fecha: new Date(2015,04,15)
    },
    {
        titulo: "300",
        director:"James Cameron",
        fecha: new Date("March 9, 2007")
    }
]

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const ultimasPeliculas=peliculas.filter(({fecha})=>fecha.getFullYear()>2010);

console.log(ultimasPeliculas);

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores=peliculas.map(({director})=>director);

// console.log(directores);

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulos=peliculas.map((pelicula)=>pelicula.titulo);

// console.log(titulos);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const directorTitulo=directores.concat(titulos);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const directorTituloProg=[...directores,...titulos];

// console.log(directorTituloProg);