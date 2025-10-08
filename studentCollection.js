export class StudentCollection {
  constructor(students) {
    this.students = students;
  }

  //It adds  the student into the students group whit a student object

  addStudent(student) {
    this.students.push(student);
  }

  //It receives the name and return the student

  getStudentByName(nombre) {
    for (let student of this.students) {
      if (student.name == nombre) return student;
    }

    return false;
  }

  //it receives a name and delete the student by other function

  removeStudentByName(name) {
    for (let student of this.students) {
      if (student === this.getStudentByName(name)) {
        this.students.pop(student);
      }
    }
  }

  //Pass the name and the new grades for the student

  updateGrades(nombre, newgrades) {
    for (let student of this.students) {
      if (student === this.getStudentByName(nombre)) {
        student.grades = newgrades;
      }
    }
  }

  //return the average grade with a name

  caclculateMedia(nombre) {
    let contador = 0;

    let suma = 0;

    for (let student of this.students) {
      if (student === this.getStudentByName(nombre)) {
        for (let i = 0; i < student.grades.length; i++) {
          contador++;

          suma = suma + student.grades[i];
        }
      }
    }

    return suma / contador;
  }

  //Returns all the enrolled students

  returnEnrolledStudents() {
    let enrrolled = [];

    const top = this.students.filter((s) => s.enrrolled === true);

    enrrolled = top;

    return enrrolled;
  }

  //It returns the students with an age above the parameter introduced

  returnStudentsAboveAge(age) {
    let estudiantes = [];

    for (let student of this.students) {
      if (student.edad > age) {
        estudiantes.push(student);
      }
    }

    return estudiantes;
  }

  //It returns the best average of grades

  returnBestAverage() {
    let best = 0;

    for (let student of this.students) {
      if (this.caclculateMedia(student.name) > best) {
        best = this.caclculateMedia(student.name);
      }
    }

    return best;
  }

  getStudentSummaries() {
    let sumary = [];

    for (let student of this.students) {
      //It returns the summary of each student

      sumary.push(student);
    }

    return sumary;
  }

  getTopStudents(treshold) {
    const top = this.students.filter(
      (s) => this.caclculateMedia(s.name) > treshold
    );

    return top;
  }

  //Returns the names of the enrolled students

  getEnrroledStudentsNames() {
    let names = [];

    const top = this.returnEnrolledStudents();

    let studentCollection2 = top;

    for (let student of studentCollection2) {
      names.push(student.name);
    }

    return names;
  }

  //Return the format grades like an array of string

  formatGrades() {
    let formatGrades = [];

    for (let student of this.students) {
      formatGrades.push(`${student.name}: ${student.grades}`);
    }

    return formatGrades;
  }

  //Return all the students with an average over nine

  getHonorRollStudents() {
    const grades = this.students.filter(
      (s) => this.caclculateMedia(s.name) > 9
    );

    return grades;
  }

  //Return a JSON of all the students

  serializeStudents() {
    return JSON.stringify(this.students);
  }

  //Return a JSON converted to sstring

  deserializeStudents(jsonString) {
    jsonString = this.serializeStudents();
    this.students = JSON.parse(jsonString);
    return this.students;
  }
}

export class Student {
  constructor(name, grades, edad, enrrolled) {
    this.name = name;
    this.grades = grades;
    this.enrrolled = enrrolled;
    this.edad = edad;
  }
}
