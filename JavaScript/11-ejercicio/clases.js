// - Crea una nueva instancia de "Estudiante"
// - Haz la llamada al método obtenDatos

class Estudiante{
    nombre;
    asignaturas;
       
    constructor(nombre,asignaturas){
        this.nombre=nombre;
        this.asignaturas=asignaturas;
    }

    obtenDatos(){
        return {
            nombre: this.nombre,
            asignaturas: this.asignaturas
        }
    }
}

const nuevoEstudiante=new Estudiante("Raúl", ["Javascript", "HTML", "CSS"]);

console.log(nuevoEstudiante.obtenDatos());