export class StudentCollection{
  

    constructor(students){

        this.students=students

    }

    addStudent(student){

        this.students.push(student)

    }

   getStudentByName(nombre){

        for(let student of this.students){

            if(student.name==nombre)

           return student

        }

       return false
    }

    removeStudentByName(name){

       for(let student of this.students){

            if(student===this.returnStudentByName(name)) {

                this.students.pop(student)

            }

       }

      

    }

    updateGrades(nombre,newgrades){

         for(let student of this.students){

            if(student===this.returnStudentByName(nombre)) {

                student.grades=newgrades

            }

       }

    }
 caclculateMedia(nombre){

        let contador=0

        let suma=0

         for(let student of this.students){

            if(student===this.returnStudentByName(nombre)) {

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

         const top=this.students.filter(

            s=>s.enrrolled===true

         )

         enrrolled=top

        return enrrolled

    }

    returnStudentsAboveAge(age){

        let estudiantes=[]

         for(let student of this.students){

           if(student.edad>age){

            estudiantes.push(student)

           }
        
        }

        return estudiantes

    }

    returnBestAverage(){
        
        let best=0

        for(let student of this.students){

            if(this.caclculateMedia(student.name)>best){

                best=this.caclculateMedia(student.name)

            }

        }

        return best

    }

    getStudentSummaries(){

        let sumary=[]

         for(let student of this.students){

            sumary.push(student)

        }

        return sumary

    }

    getTopStudents(treshold){

        const top=this.students.filter(
            s=>this.caclculateMedia(s.name)>treshold
        )

        return top

    }

    getEnrroledStudentsNames(){

        let names=[]
        
        const top=this.returnEnrolledStudents()

        let studentCollection2=top

        for(let student of studentCollection2){

            names.push(student.name)

        }

        return names

    }

    formatGrades(){

        let formatGrades=[]
        
        for(let student of this.students){

            formatGrades.push(`${student.name}: ${student.grades}`)

        }

        return formatGrades

    }

    getHonorRollStudents(){

        const grades=this.students.filter(s=>this.caclculateMedia(s.name)>9
            
        )

        return grades

    }

     serializeStudents() {
    return JSON.stringify(this.students);
  }


  deserializeStudents(jsonString) {
    jsonString=this.serializeStudents()
    this.students = JSON.parse(jsonString);
    return this.students
  }


}

export class Student{

    constructor(name,grades,edad,enrrolled){
        this.name=name
        this.grades=grades
        this.enrrolled=enrrolled
        this.edad=edad
    }

    

}


