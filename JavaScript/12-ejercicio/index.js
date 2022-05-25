// - Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])
function fibonacci(num){
    let resultado=[1,1];

    if(num===1) resultado=[1]
    else if(num===2) resultado=[1,1]
    else{
        for(let i=2;i<num;i++){
            resultado=[...resultado, resultado[i-1]+resultado[i-2]];
        }
    }
    return resultado;
}

const secuencia=fibonacci(6);