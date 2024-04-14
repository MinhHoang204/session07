"use strict";
var students = [
    { id: 1, name: "Alice", class: "A" },
    { id: 2, name: "Bob", class: "B" },
    { id: 3, name: "Charlie", class: "A" },
    { id: 4, name: "David", class: "C" }
];
function filterStudentsByClass(studentList, className) {
    return studentList.filter(function (student) { return student.class === className; });
}
var studentsInClassA = filterStudentsByClass(students, "A");
console.log(studentsInClassA);