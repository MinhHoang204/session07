interface Student {
    id: number;
    name: string;
    class: string;
}
const students1: Student[] = [
    { id: 1, name: "Alice", class: "A" },
    { id: 2, name: "Bob", class: "B" },
    { id: 3, name: "Charlie", class: "A" },
    { id: 4, name: "David", class: "C" }
];
function filterStudentsByClass(studentList: Student[], className: string): Student[] {
    return studentList.filter(student => student.class === className);
}
const studentsInClassA: Student[] = filterStudentsByClass(students1, "A");
console.log(studentsInClassA);