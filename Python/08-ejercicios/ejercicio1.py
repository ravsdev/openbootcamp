# En este ejercicio, tendréis que crear un archivo py donde creéis un archivo txt,
# lo abráis y escribáis dentro del archivo. Para ello, tendréis que acceder dos
# veces al archivo creado.
from os.path import exists

def main():
    file = 'archivo.txt'
    
    if not exists(file):
        f = open(file,'x')
        f.close()

    f=open(file,'a')
    f.write("Escribimos texto")
    f.close()

if __name__ == '__main__':
    main()