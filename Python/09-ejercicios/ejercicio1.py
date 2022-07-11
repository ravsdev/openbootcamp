# Crea un script que le pida al usuario una lista de países (separados por comas).
# Éstos se deben almacenar en una lista. No debería haber países repetidos(haz uso de set).
# Finalmente, muestra por consola la lista de países ordenados alfabéticamente
# y separados por comas.

def main():
    print("Escriba una lista de países separados por comas: ")
    paises = input()
    
    #Separamos los países por comas y ponemos la primera letra en mayúscula
    paises_cap = [pais.capitalize() for pais in paises.split(',')]

    #Unimos la lista por comas y usamos sorted para ordenar la lista
    #Lo convertimos a set para eliminar los elemenos duplicados
    print(",".join(sorted(set(paises_cap))))
    
if __name__ == '__main__':
    main()