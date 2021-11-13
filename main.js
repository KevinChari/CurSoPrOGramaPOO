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

//Prototipos con la sintaxis de Clases
class Student2 {
    //Este es el método que se ejecuta, básicamente cuando llammeos a los parentesisi al crear nuestra instancia de clase.
    //this. en este caso ara referencia a nuestra clase prototipo Student2
    constructor(name, age, cursosAprobados) {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    }
}; 


const miguelito = new Student2(
    "Miguel",
    28,
    [
        "Cursos de Análisis de Negocios para Ciencia de Datos",
        "Principios de Visualización de Datos para BI",
    ],
);

//sintaxis mejorada 
class Student2 {
    constructor({
        name, 
        age, 
        cursosAprobados,
    }) {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    }
}; 


const miguelito = new Student2({
    name: "Miguel",
    age: 28,
    cursosAprobados: [
        "Cursos de Análisis de Negocios para Ciencia de Datos",
        "Principios de Visualización de Datos para BI",
    ],
});


let errorNames = [
    "El Curso es Malo",
    "Curso Malito de Programación",
    "Curso Difícl de Programación",
    "Curso Imposible de Programación",
];

function SintaxisPrototype(value1, value2) {
    this._value1 = value1;
    this.value2 = value2;
}

SintaxisPrototype.prototype = {
    get value1(){
        return this._value1;
    },
    set value1(addNewName){
        if(addNewName === errorNames) {
            console.error("Tranquilizate Maquinola");
        } else {
            this._value1 = addNewName;
        }
    }
    
}