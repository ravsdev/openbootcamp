# En este ejercicio tendréis que crear una tabla llamada Alumnos que constará de tres
# columnas: la columna id de tipo entero, la columna nombre que será de tipo texto
# y la columna apellido que también será de tipo texto.

# Una vez creada la tabla, tenéis que insertarle datos, como mínimo tenéis
# que insertar 8 alumnos a la tabla.

# Por último, tienes que realizar una búsqueda de un alumno por nombre y
# mostrar los datos por consola.

import logging
import sqlite3

'''
Clase simple para manejar una base de datos
'''
class baseDatos:
    def __init__(self,dbFile):
        self.dbFile = dbFile

    def connect(self):
        self.conn = sqlite3.connect(self.dbFile)
        self.cursor = self.conn.cursor()

    def disconnect(self):
        self.cursor.close()
        self.conn.close()

    def create(self,command):
        self.cursor.execute(command)

    def insert(self,command):     
        try:
            self.cursor.execute(command)
            self.conn.commit()
        except sqlite3.IntegrityError:
            logging.error('La id ya existe: '+command)

    def query(self,command):
        rows = self.cursor.execute(command)
        return rows

    def delete(self, command):
        self.cursor.execute(command)

def main():
    datosAlumnos = (('Juan','Vázquez'),('Pepe','Hidalgo'),('Antonio','Martínez'),
                    ('Daniel','Fernández'),('María','Molina'),('Beatriz','Segura'),
                    ('Sara','Sanchez'),('Raquel','Hidalgo'))

    #Indicamos el archivo de la base de datos
    alumnos = baseDatos('basedatos.db')

    #Establecemos conexión con la base de datos
    alumnos.connect()

    #Creamos una tabla alumnos, si no existe.
    alumnos.create(f'CREATE TABLE IF NOT EXISTS alumnos(id INTEGER PRIMARY KEY,nombre TEXT NOT NULL, apellido TEXT NOT NULL );')

    #Insertamos datos
    for id in range(len(datosAlumnos)):
        alumnos.insert(f'INSERT INTO alumnos(id,nombre,apellido) VALUES({id},"{datosAlumnos[id][0]}","{datosAlumnos[id][1]}")')
    
    #Hacemos una consulta
    resultado=alumnos.query(f'SELECT * FROM alumnos WHERE apellido="Hidalgo"')
    print(resultado.fetchall())

    #Desconectamos
    alumnos.disconnect()
    
if __name__ == '__main__':
    main()