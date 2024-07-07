function createClassRoom(numbersOfStudents) {
    function studentSeat(seat) {
        return function() {
            return seat;
        };
    }
    let students = [];
    for (let i = 0; i < numbersOfStudents; i++) {
        students.push(studentSeat(i + 1));
    }
    return students;
}
const classRoom = createClassRoom(10);

// to test:

console.log(classRoom[0]()); // should return 1
console.log(classRoom[3]()); // should return 4
console.log(classRoom[9]()); // should return 10