// Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:
// - Tu nombre (string)
// - Tu edad (number)
// - ¿Eres desarrollador? (boolean)
// - Tu fecha de nacimiento (Date)
// - Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
const lista = [
    "Raúl",
    41,
    true,
    new Date(1981, 3, 15),
    {
        titulo: "El Quijote",
        autor: "Miguel de Cervantes",
        fecha: new Date(1605, 0, 1),
        url: "https://es.wikipedia.org/wiki/Don_Quijote_de_la_Mancha"
    }
];

// console.log(lista);