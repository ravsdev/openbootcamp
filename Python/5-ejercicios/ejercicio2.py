#Escribe una función que pueda decirte si un número (número entero) es primo o no.

def esPrimo(num):
    for contador in range(2,num):
        if num%contador==0:
            return False
    return True

print("Introduce un número: ")
valor=input()

print("Es primo" if esPrimo(int(valor)) else "No es primo")