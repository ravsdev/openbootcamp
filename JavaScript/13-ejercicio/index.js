// - Una cadena de texto con tu Nombre
const nombre="Raúl";

// - Otra cadena de texto con tu Apellido
const apellido='Vañes';

// - Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
const estudiante=nombre.concat(` `).concat(apellido);

// - Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
const estudianteMayus=estudiante.toUpperCase();

// console.log(estudianteMayus);

// - Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
const estudianteMinus=estudiante.toLowerCase();

// console.log(estudianteMinus);

// - Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
const estudianteLength=estudiante.length;

// - Una variable que contenga la primera letra del Nombre
const primeraLetra=nombre.charAt(0);

// console.log(primeraLetra);

// - Otra variable que contenga la última letra del Apellido
const ultimaLetra=apellido.charAt(apellido.length-1);

// console.log(ultimaLetra);

// - Una cadena de texto que elimine los espacios de la variable "estudiante"
const sinEspacios=estudiante.replace(" ","");

// console.log(sinEspacios)

// - Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
const isNombre=estudiante.includes(nombre);

// console.log(isNombre);