const studentName = "hein pyae"

const upperName = studentName.toUpperCase()

console.log("Student Name:", upperName)

const student = [
    { name: "Sara" , score: 80},
    { name : "Tom" ,score: 90}
]

const name = student.map((users) => users.name)

console.log(name)
