# En este segundo ejercicio, tenéis que crear una aplicación que obtendrá
# los elementos impares de una lista pasada por parámetro con filter y
# realizará una suma de todos estos elementos obtenidos mediante reduce.
from functools import reduce

def sumaImpares(lista):
    #Filtramos los impares con filter
    listaImpares = list(filter(lambda x : x%2!=0,lista))
    
    #Sumamos todos los valores con reduce
    resultado = reduce(lambda x,y: x+y,listaImpares)
    
    return resultado

def main():
    entrada = input("Introduce números separados por comas: ").split(",")
    lista = []

    #Filtramos sólo los valores numéricos
    for num in entrada:
        if num.isnumeric():
            lista.append(int(num))

    print(sumaImpares(lista))

if __name__ == '__main__':
    main()