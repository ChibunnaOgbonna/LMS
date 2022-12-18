class Student extends User{
    constructor(){
        super()
        this.availableCourses = []
    }

    getStudent(){
        return {...this.student}
    }
    setStudent(name, email, track){
        this.student = {name, email, track, ...this.getUser()}
    }

    addCourse(course) {
        this.availableCourses.push(course)
    }
}
