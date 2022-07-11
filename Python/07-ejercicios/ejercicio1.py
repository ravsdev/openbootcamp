# En este ejercicio tendréis que crear un módulo que contenga las operaciones básicas
# de una calculadora: sumar, restar, multiplicar y dividir.

# Este módulo lo importaréis a un archivo python y llamaréis a las funciones creadas.
# Los resultados tenéis que mostrarlos por consola.

from operaciones import sumar,restar,multiplicar,dividir

def main():
    x = 5
    y = 2
    print(sumar(x,y))
    print(restar(x,y))
    print(multiplicar(x,y))
    print(dividir(x,y))
    
if __name__ == '__main__':
    main()