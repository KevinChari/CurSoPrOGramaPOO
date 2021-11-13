// Reto de Clase mía
class ClassClasses {
    constructor({
        name,
        position,
    }){
        this.name = name;
        this.position =position;
    };
};

const pooyFotball = new ClassClasses({
    name:"Programación orientada a Objetos y Fotaball",
});
const introdVdj = new ClassClasses({
    name:"Introducción a los Videojuegos",
});
const queEsDatos = new ClassClasses({
    name:"Que es Data Science",
});
const paguinasWeb = new ClassClasses({
    name: "Qué son las Páginas Web",
});


class course {
    constructor({
        name,
        classes = [],
    }){
        this.name = name;
        this.classes = classes;
    };
};

const cursoProgBasica = new course({
    name: "Curso Gratis de Programación Básica",
    classes: [
        queEsDatos,
        pooyFotball,
        paguinasWeb,
    ],
});
const cursoDefinitivoHTML = new course({
    name: "Curso Definitivo de HTML y CSS",
    classes: [
        paguinasWeb,
    ],
});
const cursoPracticoHTML = new course({
    name: "Curso Práctico de HTML y CSS",
    classes: [
        paguinasWeb,
    ],
});
const cursoDataBusiness = new course({
    name: "Curso de Datos ne negocios",
    classes: [
        queEsDatos,
    ],
});
const cursoDataViz = new course({
    name: "Curso Data Viz",
    classes: [
        queEsDatos,
    ],
});
const cursoUnity = new course({
    name: "Curso Básico de Unity",
    classes: [
        introdVdj,
    ],
});
const cursoUnreal = new course({
    name: "Curso Básico de Unreal",
    classes: [
        introdVdj,
    ],
});



class LearningPaths {
    constructor({
        name,
        courses = [],
        difficulty,
        courseNumbers,
        percentage = undefined,
    }) {
        this.name = name;
        this.courses = courses;
        this.difficulty = difficulty;
        this.courseNumbers = courseNumbers;
        this.percentage = percentage;
    }
    addCourse(newCourse){
        this.courses.push(newCourse);
    };
};

const escuelaWeb = new LearningPaths({
    name:"Escuela desarrollo Web",
    courses: [
        cursoProgBasica,
        cursoDefinitivoHTML,
        cursoPracticoHTML,
    ],
    difficulty: "Básico",
    courseNumbers: 106,
}); 
const escuelaData = new LearningPaths({
    name:"Escuela desarrollo Web",
    courses: [
        cursoProgBasica,
        cursoDataBusiness,
        cursoDataViz,
    ],
    difficulty: "Básico",
    courseNumbers: 106,
}); 
const escuelaVideJuegos = new LearningPaths({
    name:"Escuela desarrollo Web",
    courses: [
        cursoProgBasica,
        cursoUnity,
        cursoUnreal,
    ],
    difficulty: "Básico",
    courseNumbers: 106,
}); 

//Parctico

class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}


const juan2 = new Student({
    name: "Juan DC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [
        escuelaWeb,
        escuelaVideJuegos,
    ],
});
const miguelito2 = new Student({
    name: "Miguelito",
    username: "miguelitoFeliz",
    email: "miguelito@juanito.com",
    instagram: "miguelito_feliz",
    learningPaths: [
        escuelaWeb,
        escuelaData,
    ],
});