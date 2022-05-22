// - factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

let factorial=1;
let i=2;

while(true){
    factorial*=i;
    i++;
    if(i>10) break;
}

console.log(factorial); //3628800