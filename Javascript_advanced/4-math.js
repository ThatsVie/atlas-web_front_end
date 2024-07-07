function divideBy(firstNumber) {
    return function(secondNumber) {
        return secondNumber / firstNumber;
    };
}

function addBy(firstNumber) {
    return function(secondNumber) {
        return firstNumber + secondNumber;
    };
}
const addBy100 = addBy(100);
const addBy1000 = addBy(1000);
const divideBy10 = divideBy(10);
const divideBy100 = divideBy(100);

// to test
console.log(addBy100(20));     // should display 120
console.log(divideBy10(20));   // should display 2
console.log(divideBy100(200)); // should display 2
console.log(addBy1000(20));    // should display 1020