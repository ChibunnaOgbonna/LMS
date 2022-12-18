
class StudentStore{
   setStudent(student){
   if (this.students){
this.students.push(student)
   }else {
    this.students =[student]
   }
   } 
   getStudents(students){
    return this.students

   }
   getStudent(id){
return this.students.find(student=>student.id==id)
   }
}