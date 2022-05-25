// - La fecha de hoy
const hoy=new Date();

// - La fecha de tu nacimiento
const nacimiento=new Date("April 15, 1981");
const nac2=new Date(1981,3,15);
// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const masTarde=hoy.getTime()>nacimiento.getTime();
console.log(masTarde);

// - Una variable que contenga el día de tu nacimiento
const diaNacimiento=nacimiento.getDate();
console.log(diaNacimiento);

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mesNacimiento=nacimiento.getMonth()+1;
console.log(mesNacimiento);

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const anyoNacimiento=nacimiento.getFullYear()
console.log(anyoNacimiento);