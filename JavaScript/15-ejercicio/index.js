// Crea una variable con tu nombre
const nombre="Raúl";

// - Crea una variable con tu apellido
const apellido="Vañes";

// - Crea un objeto con tu nombre y tu apellido
const persona={
    nombre: nombre,
    apellido: apellido
}

// - Almacena el objeto anterior en la SessionStorage
sessionStorage.setItem("persona-sesion",JSON.stringify(persona));

// - Almacena el objeto anterior en la LocalStorage
localStorage.setItem("persona-local",JSON.stringify(persona));

// - Crea una cookie que caduque en 2 minutos con los datos del objeto anterior
//Con expires
 document.cookie="persona-cookie-exp="+JSON.stringify(persona)
            +";expires="
            +new Date(Date.now()+2*60*1000).toUTCString();

//Con max-age
document.cookie="persona-cookie-maxage="+JSON.stringify(persona)+";max-age="+2*60;