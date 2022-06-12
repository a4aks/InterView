
// callBack functions

let students = [
    {name:"Ashish", subject: "React"},
    {name:"Saurav", subject: "React JS"},
    {name:"Sumit", subject: "SSC"}
]

function enrollStudents (student,callBack){
    setTimeout(function(){
      students.push(student);
      console.log("Student has been enrolled")
      callBack()
    },3000)
}

function getStudents(){
    setTimeout(function (){
       let str = ""
       students.forEach(function(student){
           str = str + student.name + " "
       })
       console.log(str)
    },1000)
}

let newStudent = 
    {name:"Kriti", subject: "Cooking"}

enrollStudents(newStudent,getStudents)

