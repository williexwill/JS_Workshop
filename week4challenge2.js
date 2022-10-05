// array of student objects
let students = [
    {
        name: "Bob",
        grades: [88, 90, 80, 77, 89]
    },
    {
        name: "Alice",
        grades: [100, 95, 92, 89, 97]
    },
    {
        name: "Juan",
        grades: [91, 90, 94, 86, 90]
    }
];

// print all student names and their grades
function printGrades(students) {
    for (let i = 0; i < students.length; i++) {
        console.log(students[i].name + ": " + students[i].grades);
    }
}

//add a new student
function addStudent(name, grades) {
    let student = {
        name: name,
        grades: grades
    };
    students.push(student);
}

//remove a student
function dropLastStudent(array) {
    array.pop();
}

// convert grades to letters
function convertGrades(students) {
    for (let i = 0; i < students.length; i++) {
        let grades = students[i].grades;
        let letterGrade = "";
        for (let j = 0; j < grades.length; j++) {
            if (grades[j] >= 90) {
                letterGrade += "A ";
            } else if (grades[j] >= 80) {
                letterGrade += "B ";
            } else if (grades[j] >= 70) {
                letterGrade += "C ";
            } else if (grades[j] >= 60) {
                letterGrade += "D ";
            } else {
                letterGrade += "F ";
            }
        }
        console.log(students[i].name + ": " + letterGrade);
    }
}

// call functions
addStudent("Biff", [71, 80, 56, 65, 60]);
dropLastStudent(students);
printGrades(students);
convertGrades(students);

