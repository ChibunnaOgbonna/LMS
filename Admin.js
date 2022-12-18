class Admin extends User{

    constructor(user, businessName){
        super()
        this.setUser(user)
        this.businessName = businessName
        this.studentDatabase = new StudentStore()
        this.courses = []
    }

    getAdmin(){
        return {businessName:this.businessName,...this.getUser()}
    }

    addStudent(student){
     //   console.log(student);
        this.studentDatabase.setStudent(student)
    }

    getStudent(id) {
       return this.studentDatabase.getStudent(id)
    }

    getStudents(){

        return this.studentDatabase.getStudents()
    }

    addCourse(course) {
        this.courses.push(course)
    }

    getCourse(id){
       return this.courses.find(course => course.id == id)
    }

    assignCourseToStudent(userId, courseId) {
     const student = this.getStudent(userId)
     const course = this.getCourse(courseId)
     student.addCourse(course)
    }
    
}

const course = new Course("Backend", "OOP", 23, 3)

const student = new Student()
student.setUser("chris", 1)
student.setStudent("","a@b.com","frontend")

const adminUser = new User("Wale", 2)

const genesisHub = new Admin(adminUser, "Genesis Tech Hub")

genesisHub.addStudent(student)
console.log(genesisHub.getStudents())
genesisHub.addCourse(course)
genesisHub.assignCourseToStudent(1, 3)
genesisHub.getStudents()

