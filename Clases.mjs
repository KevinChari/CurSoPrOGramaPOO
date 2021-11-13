function videoPlay(id) {
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log(`Se está reproduciendo desde la url ${urlSecreta}`);
}
function videoStop(id) {
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log(`Pusamos la url ${urlSecreta}`);
}


export class PlatziClass {
    constructor({
        name,
        videoID,
    }) {
        this.name = name;
        this.videoID = videoID;
    }

    reproducir(){
        videoPlay(this.videoID); 
    }
    pausar(){
        videoStop(this.videoID);
    }
}


















class Course {
    constructor({
        name, 
        classes = [],
    }){
        this._name = name;
        this.classes = classes;
    };
    
    get name() {
        return this._name;
    }
    
    set name(nuevoNombrecito) {
        if(nuevoNombrecito === "Curso Malito de Programación Básica") {
            console.error("Web... no");
        } else {
            this._name = nuevoNombrecito;
        }
    }

} 

const cursoProgBasica = new Course({
    name: "Curso Gratis de Programación Básica",
});

cursoProgBasica.name
cursoProgBasica.name = "El nombre que tu decide ponerlo"

const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
});
const cursoPracticoHTML = new Course({
    name: "Curso Práctico de HTML y CSS",
});


class LearningPaths {
    constructor({
        name, 
        courses = [],
    }){
        this.name = name;
        this.courses = courses;
    };
};

const escuelaWeb = new LearningPaths({
    name: "Escuela de Desarrolo Web",
    courses: [
        cursoProgBasica,
        cursoDefinitivoHTML,
        cursoPracticoHTML,
    ],
}); 
const escuelaData = new LearningPaths({
    name: "Escuela de Data Science",
    courses: [
        cursoProgBasica,
        "Curso Data Business",
        "Curso Dataviz",
    ],
}); 
const escuelaVideJuegos = new LearningPaths({
    name: "Escuela de Video Juegos",
    courses: [
        cursoProgBasica,
        "Curso de Unity",
        "Curso de Unreal",
    ],
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

