import { StudentCollection,Student } from "./studentCollection.js";

let student = new Student("Nacho",[10,10,10,10],19,true)

let student2 = new Student("Alejandro",[2,9,2,10],19,true)

let student3 = new Student("Navarro",[5,7,10,5],21,false)

let student4 = new Student("Bordalas",[5,7,10,5],21,false)

let students=[];

students.push(student)
students.push(student2)
students.push(student3)
students.push(student4)

let studentCollection= new StudentCollection(students)

console.log(studentCollection.getStudentByName("Nacho"))

studentCollection.removeStudentByName("Bordalas")

console.log(students)

studentCollection.updateGrades("Alejandro",[0,0,0,0])

console.log(student2)

console.log(studentCollection.caclculateMedia("Nacho"))

console.log(studentCollection.returnEnrolledStudents())

console.log(studentCollection.returnStudentsAboveAge(18))

console.log(studentCollection.returnBestAverage())

console.log(studentCollection.getStudentSummaries())

console.log(studentCollection.getTopStudents("9"))

console.log(studentCollection.getEnrroledStudentsNames())

console.log(studentCollection.formatGrades())

console.log(studentCollection.getHonorRollStudents())

console.log(studentCollection.serializeStudents())

console.log(studentCollection.deserializeStudents())