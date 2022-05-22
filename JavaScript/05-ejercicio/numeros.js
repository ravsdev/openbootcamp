// - Una variable que contenga tu altura en centímetros (entero)
const alturaCm=180;

// - Una variable que contenga tu altura en metros (número de coma flotante)
const alturaM=1.80;

// - Una variable que contenga tu peso en kilogramos (número de coma flotante)
const pesoKg=70.5;

// - Una variable que contenga tu altura en metros redondeada hacia arriba
const alturaCeil=Math.ceil(alturaM);
console.log(alturaCeil); //2

// - Una variable que contenga tu peso en kilogramos redondeado hacia abajo
const pesoFloor=Math.floor(peso);
console.log(pesoFloor); //70

// - Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
const esIgual=Number.MAX_VALUE+1===Number.MAX_VALUE;
console.log(esIgual);