class StudentCollection{
  

    constructor(students){

        this.students=students

    }

    addStudent(student){

        this.students.push(student)

    }

    static returnStudentByName(nombre){

        for(let student of students){

            if(student.name==nombre)

           return student

        }

       return false
    }

    removeStudentByName(name){

       for(let student in this.students){

            if(student===this.returnStudentByName(name)) {

                this.students.pop(student)

            }

       }

      

    }

    updateGrades(nombre,newgrades){

         for(let student of this.students){

            if(student===StudentCollection.returnStudentByName(nombre)) {

                student.grades=newgrades

            }

       }

    }

    static caclculateMedia(nombre){

        let contador=0

        let suma=0

         for(let student of students){

            if(student===StudentCollection.returnStudentByName(nombre)) {

                for(let i=0;i<student.grades.length;i++){

                    contador++

                    suma=suma+student.grades[i]

                }

            }

       }

       return suma/contador

    }

    returnEnrolledStudents(){

        let enrrolled=[]

         for(let student of students){

           if(student.enrrolled==true){

            enrrolled.push(student)

           }
        
        }

        return enrrolled

    }

    returnStudentsAboveAge(age){

        let estudiantes=[]

         for(let student of students){

           if(student.edad>age){

            estudiantes.push(student)

           }
        
        }

        return estudiantes

    }

    returnBestAverage(){
        
        let best=0

        for(let student of students){

            if(StudentCollection.caclculateMedia(student.name)>best){

                best=StudentCollection.caclculateMedia(student.name)

            }

        }

        return best

    }

    getStudentSummaries(){

        let sumary=[]

         for(let student of students){

            sumary.push(student)

        }

        return sumary

    }

    getTopStudents(treshold){

        const top=students.filter(
            s=>StudentCollection.caclculateMedia(s.name)>treshold
        )

        return top

    }

    getEnrroledStudents(studentCollection){

        let names=[]
        
        const top=studentCollection.returnEnrolledStudents().filter(
            s=>(studentCollection.returnEnrolledStudents())
        )

        let studentCollection2=top

        for(let student of studentCollection2){

            names.push(student.name)

        }

        return names

    }

    returnFormatGrades(){

        let formatGrades=[]
        
        for(let student of students){

            formatGrades.push(`${student.name}: ${student.grades}`)

        }

        return formatGrades

    }

    getHonorRollStudents(){

        const grades=students.filter(s=>StudentCollection.caclculateMedia(s.name)>9
            
        )

        return grades

    }

     serializeStudents() {
    return JSON.stringify(this.students);
  }


  deserializeStudents(jsonString) {
    this.students = JSON.parse(jsonString);
  }


}

class Student{

    constructor(name,grades,edad,enrrolled){
        this.name=name
        this.grades=grades
        this.enrrolled=enrrolled
        this.edad=edad
    }

    

}

let student= new Student("Nacho",[7,10,9,9],19,true)
let student2= new Student("Alejandro",[2,3,4,0],20,true)
let student3= new Student("Navarro",[6,3,2,7],30,false)

let students=[student,student2,student3]

let studentCollection = new StudentCollection(students)

console.log(StudentCollection.returnStudentByName("Nacho"))

console.log(StudentCollection.caclculateMedia("Alejandro"))

let grades=[10,10,10,10]

studentCollection.updateGrades("Nacho",grades)

console.log(student)

console.log(studentCollection.returnEnrolledStudents())

console.log(studentCollection.returnStudentsAboveAge(140))

console.log(studentCollection.returnBestAverage())

console.log(studentCollection.getStudentSummaries())

console.log(studentCollection.getTopStudents(6))

console.log(studentCollection.getEnrroledStudents(studentCollection))

console.log(studentCollection.returnFormatGrades())

console.log(studentCollection.getHonorRollStudents(studentCollection))

let json = studentCollection.serializeStudents()
console.log(json)

studentCollection.deserializeStudents(json)
console.log(studentCollection.students) 



