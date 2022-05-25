// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const datos={
    nombre: "Raúl",
    apellido: "Vañes",
    edad: 40,
    altura: 180,
    eresDesarrollador: true
}

// - Una variable que obtenga tu edad a partir del objeto anterior
const edad=datos.edad;

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const datosPersonales=[
    {...datos},
    {
        nombre: "Alfredo",
        apellido: "López",
        edad: 28,
        altura: 178,
        eresDesarrollador: false
    },
    {
        nombre: "Javier",
        apellido: "Diaz",
        edad: 35,
        altura: 184,
        eresDesarrollador: true
    }
];

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const sortedDatosPersonales=datosPersonales.sort((a,b)=>b.edad-a.edad);

// console.log(sortedDatosPersonales);