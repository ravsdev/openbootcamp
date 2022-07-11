# En este segundo ejercicios tendréis que crear un script
# que nos diga si es la hora de ir a casa.
# Tendréis que hacer uso del modulo time.
# Necesitaréis la fecha del sistema y poder comprobar la hora.

# En el caso de que sean más de las 7, se mostrará un mensaje 
# en caso contrario, haréis una operación para calcular el tiempo que queda de trabajo.
from time import strptime, localtime

def main():
    hora = localtime()
    # hora = strptime("16:00", "%H:%M") 

    #Devuelve las horas y minutos que faltan hasta las 19:00
    def remainTime(hours,mins):
        remainMins = (19*60)-(hours*60+mins)
        return f'{int(remainMins/60)} hora(s) y {int(remainMins%60)} minuto(s)'
    
    if hora.tm_hour >= 19:
        print("Ya puedes irte a casa")
    else:
        print(f'Faltan {remainTime(hora.tm_hour,hora.tm_min)}')


if __name__ == '__main__':
    main()