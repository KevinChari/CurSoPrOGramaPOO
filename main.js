const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS",
    ],
    //Lo que vamos hacer es crear métodos de mi objeto literal
    //Como empujamos este nuevoCursito a la propiedad cursosAprobados desde un método qu está dentro
    //del mismo objeto que el atributo qu queremos modificar.
    //Para eso utilizamos la palabara revervada .this y este hace referencia a este mismo objeto
    // en este caso natalia.
    aprobarCurso(nuevoCursito){
       this.cursosAprobados.push(nuevoCursito);
    },

};

// Hacer que Natalya apruebe otro curso
//Con el punto podemos acceder a sus propiedades y también el futuro a sus métodos 
//Dentro de natalia está la propeidad cursos aprovados.
//Utilizaremos el método .push() de los arrays de el que hereda del prototipo Arrays, para 
//empujar un nuevo curso.
/* natalia.cursosAprobados.push("Curso de Responsive Desing"); */

function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados; 
    //Dos forams de escribir métodos en los prototipos. 
    /* this.aprobarCurso = function(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    }  */

}
Student.prototype.aprobarCurso = function(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
}

// Los prototipos en JS se cren con la palabra reserveda new

const juanita = new Student(
    "Juanita Alejandra",
    15,
    [
        "Curso de Introducción a ala producción de VideoJuegos",
        "Creación de Personajes",
    ],
);