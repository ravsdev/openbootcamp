// - Una función sin parámetros que devuelva siempre "true"
//Usando function
function devuelveTrue(){
    return true;
}

//Usando una función flecha
const devuelveTrueFlecha = ()=>true;

// console.log(devuelveTrueFlecha())

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
async function asincrona() {
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Hola soy una promesa"), 5000)
    });
    const response=await promesa;
    console.log(response);
}
    
asincrona();

// - Una función generadora de índices pares automáticos
function* generarId(){
    let index = 0;

    while(index<10){
        yield index+=2
    }
}

const gen = generarId();