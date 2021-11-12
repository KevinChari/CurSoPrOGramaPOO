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
}

const escuelaWeb = new LearningPaths(); 
const escuelaData = new LearningPaths(); 
const escuelaVideJuegos = new LearningPaths(); 


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

