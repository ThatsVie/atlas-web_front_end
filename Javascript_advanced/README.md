# JavaScript Advanced

## Learning Objectives
### What is lexical scoping in JavaScript
### What is closure in JavaScript
### How to use closure
### How to chain different closures
### How to simulate private methods with Closure
### The execution stack order with JavaScript
### How to use binding
### How to use callbacks

## Tasks and Usage

<details>
<summary>## Task 0: Lexical Scoping and Welcome Message </summary>
The goal of this task is to understand and implement lexical scoping in JavaScript by creating a function that displays a welcome message.

### Task Description
Create a function named `welcome` that takes two arguments: `firstName` (string) and `lastName` (string). Within this function:
- Define a variable named `fullName` that combines the `firstName` and `lastName` with a space in between.
- Write a nested function named `displayFullName` that displays an alert with the message `Welcome <fullName>!`.
- Call the `displayFullName` function at the end of the `welcome` function.

### Implementation
The implementation of the `welcome` function is as follows:

```javascript
function welcome(firstName, lastName) {
    const fullName = `${firstName} ${lastName}`;
    function displayFullName() {
        alert(`Welcome ${fullName}!`);
    }
    displayFullName();
}
```

### Usage
To test the `welcome` function:

1. Open your web browser and navigate to the developer tools. (right-click on the page and select "Inspect")
2. Go to the "Console" tab.
3. Copy and paste the above code into the console.
4. Run the `welcome('Holberton', 'School');` function by typing it into the console and pressing Enter. You should see an alert with the message "Welcome Holberton School!"

![welcome('Holberton', 'School');](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/8786a58e-1896-4cd2-b5aa-40f9087180e5)

5. Run `alert(fullName)` in the console. You should get a reference error because fullName is not defined in the global scope, demonstrating lexical scoping.

![alert(fullName);](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/2c4cf75a-b588-455d-99ae-a6c659481510)


</details>
<details>
<summary>## Task 1: Closure Scope Chain</summary>

The goal of this task is to understand and implement closure and scope chains in JavaScript by creating nested functions that access variables from their parent scopes.

### Task Description
1. Create a variable named `globalVariable` with the value `Welcome`.
2. Create a function named `outer` that:
    - Alerts the content of the variable `globalVariable`.
    - Creates a variable named `course` with the value `Holberton`.
    - Creates a nested function named `inner` that:
        - Alerts the content of the variables `globalVariable` and `course` concatenated.
        - Creates a variable named `exclamation` with the value `!`.
        - Creates a nested function named `inception` that:
            - Alerts the content of the variables `globalVariable`, `course`, and `exclamation` concatenated.
        - Calls the function `inception`.
    - Calls the function `inner`.
3. Call the function `outer` in the main code (outside any function).

### Implementation
The implementation of the task is as follows:

```javascript
const globalVariable = 'Welcome';

function outer() {
    alert(globalVariable);
    const course = 'Holberton';
    function inner() {
        alert(globalVariable + ' ' + course);
        const exclamation = '!';
        function inception() {
            alert(globalVariable + ' ' + course + exclamation);
        }
        inception();
    }
    inner();
}
outer();
```
### Usage
To test the `outer` function:

1. Open your web browser and navigate to the developer tools.
2. Go to the "Console" tab.
3. Copy and paste the above code into the console.
4. Run the script by pressing Enter. You should see three alerts in sequence: "Welcome", "Welcome Holberton", and "Welcome Holberton!".

![Screenshot 2024-07-06 132301](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/182fbeff-5db5-4342-bf9f-85a76f814459)

![Screenshot 2024-07-06 132315](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/020bb0a1-f89b-41ac-b473-c70acfae5fd5)

![Screenshot 2024-07-06 132328](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/3f6ed971-cfbb-4435-9cc1-930e8c789ddf)

</details>
<details>
<summary>## Task 2: Closure</summary>

The goal of this task is to understand and implement closures in JavaScript by creating a function that returns another function, demonstrating how inner functions can access variables from their parent scope.

### Task Description
1. Write a function named `welcomeMessage` that:
    - Accepts one argument `fullName` (string).
    - Returns a new function that alerts `Welcome <fullName>`.
2. After defining `welcomeMessage`, create three variables:
    - `guillaume` that contains a call to `welcomeMessage` with "Guillaume" as the argument.
    - `alex` that contains a call to `welcomeMessage` with "Alex" as the argument.
    - `fred` that contains a call to `welcomeMessage` with "Fred" as the argument.

### Implementation
The implementation of the task is as follows:
```javascript
function welcomeMessage(fullName) {
    return function() {
      alert(`Welcome ${fullName}`);
    }
  }
  var guillaume = welcomeMessage('Guillaume');
  var alex = welcomeMessage('Alex');
  var fred = welcomeMessage('Fred');
  
  ```

### Usage
To test the `welcomeMessage` function:

1. Open your web browser and navigate to the developer tools.
2. Go to the "Console" tab.
3. Copy and paste the above code into the console.
4. Execute the following in the console:
    - `guillaume();` should alert "Welcome Guillaume"
    - `alex();` should alert "Welcome Alex"
    - `fred();` should alert "Welcome Fred"

![Screenshot 2024-07-06 134815](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/af3602ed-d920-4a14-8a6c-0f776b2745a2)

![Screenshot 2024-07-06 134830](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/31a041b0-5309-490d-b72c-c20c5f1d9517)

![Screenshot 2024-07-06 134845](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/05dbe7a7-03c8-45fb-b583-51bedd94d159)

</details>
<details>
<summary>## Task 3: Closure and Loops </summary>

The goal of this task is to understand and implement closures within loops in JavaScript by creating functions that capture the loop variable.

### Task Description
1. Write a function named `createClassRoom` that:
    - Takes one argument `numbersOfStudents` (number).
    - Contains a nested function `studentSeat` that takes one argument `seat` (number) and returns a function that returns the seat number.
    - Creates and populates a variable `students` (array).
    - Uses a loop from `0` to `numbersOfStudents`, passing the number of the iteration plus `1` to `studentSeat` and adding its return value to the `students` array.
    - Returns the `students` array.
2. Create a closure `classRoom` by calling `createClassRoom` with `10` students.

### Implementation
The implementation of the task is as follows:

```javascript
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
```

### Usage
To test the `createClassRoom` function:

1. Open your web browser and navigate to the developer tools.
2. Go to the "Console" tab.
3. Copy and paste the above code into the console.
4. Execute the following in the console:
    - `console.log(classRoom[0]());` should return `1`
    - `console.log(classRoom[3]());` should return `4`
    - `console.log(classRoom[9]());` should return `10`

</details>
<details>
<summary>## Task 4: Complex Closure </summary>

The goal of this task is to understand and implement complex closures in JavaScript by creating functions that return other functions, demonstrating how inner functions can perform mathematical operations using their parent scope's variables.

### Task Description
1. Create a function named `divideBy` that:
    - Takes one argument `firstNumber` (number).
    - Returns a function that takes one argument `secondNumber` (number).
    - The returned function divides the `secondNumber` by the `firstNumber`.
2. Create a function named `addBy` that:
    - Takes one argument `firstNumber` (number).
    - Returns a function that takes one argument `secondNumber` (number).
    - The returned function adds the `firstNumber` and `secondNumber`.
3. Create four closures:
    - `addBy100` that uses the function `addBy` with the number `100`.
    - `addBy1000` that uses the function `addBy` with the number `1000`.
    - `divideBy10` that uses the function `divideBy` with the number `10`.
    - `divideBy100` that uses the function `divideBy` with the number `100`.

### Implementation
The implementation of the task is as follows:

```javascript
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
```

### Usage
To test the `divideBy` and `addBy` functions:

1. Open your web browser and navigate to the developer tools.
2. Go to the "Console" tab.
3. Copy and paste the above code into the console.
4. Execute the following in the console:
    - `console.log(addBy100(20));` should display `120`
    - `console.log(divideBy10(20));` should display `2`
    - `console.log(divideBy100(200));` should display `2`
    - `console.log(addBy1000(20));` should display `1020`
</details>
<details>
<summary>## Task 5: Changing DOM with Closure </summary>

The goal of this task is to understand and implement closures in JavaScript by creating a function that changes the style of the entire page. This function will demonstrate how closures can be used to encapsulate functionality and maintain state.

### Task Description
1. Create a function named `changeMode` that:
    - Accepts five arguments: `size` (number), `weight` (string), `transform` (string), `background` (string), and `color` (string).
    - Returns a function that, when called, changes the style of the entire page by setting the `font-size`, `font-weight`, `text-transform`, `background-color`, and `color`.

2. Write a function named `main` that:
    - Sets a variable named `spooky` to call `changeMode` with the arguments `9`, `bold`, `uppercase`, `pink`, and `green`.
    - Sets a variable named `darkMode` to call `changeMode` with the arguments `12`, `bold`, `capitalize`, `black`, and `white`.
    - Sets a variable named `screamMode` to call `changeMode` with the arguments `12`, `normal`, `lowercase`, `white`, and `black`.
    - Adds a paragraph to the body of the page with the text "Welcome Holberton!".
    - Adds a button to the body with the text "Spooky".
    - Adds a button to the body with the text "Dark mode".
    - Adds a button to the body with the text "Scream mode".
    - When clicking on each button, the page's CSS should change to the corresponding themes created previously.

3. Call the `main` function

### Implementation
The implementation of the task is as follows:

```javascript

function changeMode(size, weight, transform, background, color) {
    return () => {
        document.body.style.fontSize = `${size}px`;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    };
}
function main() {
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    const paragraph = document.createElement('p');
    const text = document.createTextNode("Welcome Holberton!");
    paragraph.appendChild(text);
    document.body.appendChild(paragraph);

    const spookyButton = document.createElement('button');
    spookyButton.innerHTML = 'Spooky';
    spookyButton.addEventListener('click', spooky);
    document.body.appendChild(spookyButton);

    const darkModeButton = document.createElement('button');
    darkModeButton.innerHTML = 'Dark mode';
    darkModeButton.addEventListener('click', darkMode);
    document.body.appendChild(darkModeButton);

    const screamModeButton = document.createElement('button');
    screamModeButton.innerHTML = 'Scream mode';
    screamModeButton.addEventListener('click', screamMode);
    document.body.appendChild(screamModeButton);
}

main();
```

### How to Test

1. Save the following HTML code in a file named `5-mode.html`:
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Mode</title>
    </head>
    <body>
        <script src="5-mode.js"></script>
    </body>
    </html>
    ```
2. Open the `5-mode.html` file in a web browser.
3. You should see a paragraph with the text "Welcome Holberton!" and three buttons: "Spooky", "Dark mode", and "Scream mode".
4. Clicking each button should change the page's CSS to the corresponding theme.

### Explanation

- The `changeMode` function accepts five arguments (size, weight, transform, background, color) and returns a function that changes the style of the entire page based on these arguments.
- The `main` function creates three mode change functions (`spooky`, `darkMode`, `screamMode`) by calling `changeMode` with specific arguments.
- It adds a paragraph and three buttons to the body of the page. Each button has an `onclick` event that calls the corresponding mode change function to update the page's style.
-  The `main` function is called to set up the page.
- In the context of this task, `innerHTML` is used to set the content of the buttons dynamically. By assigning a string to the `innerHTML` property of each button element, we can easily specify the text that appears on the button, such as "Spooky", "Dark mode", and "Scream mode". This allows us to create and configure the buttons programmatically within the `main` function.

</details>
<details>
<summary>## Task 6: Private Methods with Closure </summary>

The goal of this task is to understand and implement private methods in JavaScript using closures. This will demonstrate how closures can be used to encapsulate and protect internal state within a module.

### Task Description
1. Write a module named `studentHogwarts` that:
    - Contains two private variables: `privateScore` set to 0 and `name` set to `null`.
    - Contains one private method `changeScoreBy`, which takes `points` as an argument and adds it to `privateScore`.
    - Returns an object with four public methods:
        - `setName(newName)`: Sets the private variable `name`.
        - `rewardStudent()`: Calls the method `changeScoreBy` with `1`.
        - `penalizeStudent()`: Calls the method `changeScoreBy` with `-1`.
        - `getScore()`: Returns the string `name: score` (e.g., "Harry: 14").

2. Create an instance of `studentHogwarts` for `harry`:
    - Set the name of the object to "Harry".
    - Reward the student four times.
    - Log to the console the name and score.

3. Create an instance of `studentHogwarts` for `draco`:
    - Set the name of the object to "Draco".
    - Reward the student once and penalize the student three times.
    - Log to the console the name and score.

### Implementation
The implementation of the task is as follows:

```javascript

const studentHogwarts = () => {
    let privateScore = 0;
    let name = null;

    const changeScoreBy = (points) => {
        privateScore += points;
    };

    return {
        setName: (newName) => {
            name = newName;
        },
        rewardStudent: () => {
            changeScoreBy(1);
        },
        penalizeStudent: () => {
            changeScoreBy(-1);
        },
        getScore: () => {
            return `${name}: ${privateScore}`;
        }
    };
};

const harry = studentHogwarts();
harry.setName('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore()); // Should display "Harry: 4"

const draco = studentHogwarts();
draco.setName('Draco');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore()); // Should display "Draco: -2"
```

### How to Test

1. Open your web browser and navigate to the developer tools.
2. Go to the "Console" tab.
3. Copy and paste the above code into the console and run it.
4. You should see the following output in the console:
    ```
    Harry: 4
    Draco: -2
    ```

### Explanation

- The `studentHogwarts` module is defined as a function that returns an object with four public methods: `setName`, `rewardStudent`, `penalizeStudent`, and `getScore`.
- `privateScore` and `name` are private variables, and `changeScoreBy` is a private method that modifies `privateScore` by adding the provided `points`.
- The public methods allow interaction with the private variables and methods while keeping the internal state hidden from the outside.
- Instances for `harry` and `draco` are created, and their names are set using the `setName` method.
- `harry` is rewarded four times, and `draco` is rewarded once and penalized three times.
- The `getScore` method is used to log the name and score of each student to the console.

</details>
<details>
<summary>## Task 7: Stack Order and setTimeout</summary>
The goal of this task is to understand the execution order in JavaScript, especially how the event loop and the call stack work with `setTimeout`.

### Task Description
1. Write the following commands in the specified order:
    - Log to the console "Start of the execution queue".
    - Log to the console "Final code block to be executed" using `setTimeout` with a delay of 0.
    - Use a loop that iterates 100 times, logging the iteration number to the console on each iteration.
    - Log to the console "End of the loop printing".

### Implementation
The implementation of the task is as follows:

```javascript

console.log('Start of the execution queue');

setTimeout(() => {
    console.log('Final code block to be executed');
}, 0);

for (let i = 1; i <= 100; i++) {
    console.log(i);
}

console.log('End of the loop printing');
```

### Expected Output
Your code should log to the console the following:
```
Start of the execution queue
1
2
...
100
End of the loop printing
Final code block to be executed
```

### Explanation
- **Start of the execution queue**: This message is logged immediately as the script starts executing.
- **setTimeout with 0 delay**: This sets up a callback to be executed after the current call stack is cleared, but it doesn't run immediately.
- **Loop from 1 to 100**: Each iteration logs the iteration number to the console.
- **End of the loop printing**: This message is logged after the loop completes.
- **Final code block to be executed**: This is the message set up by `setTimeout` and will execute after the main script has finished running.

### How to Test

1. Open your web browser and navigate to the developer tools.
2. Go to the "Console" tab.
3. Copy and paste the above code into the console and run it.
4. You should see the expected output in the console as described above.

</details>
<details>
<summary>
## Task 8: Stack Order in Functions

The goal of this task is to understand the execution order in JavaScript functions by creating a process order flow that involves logging messages to the console in a specific sequence.
</summary>
### Task Description
1. Write a function named `processPayment` that:
    - Takes one argument `amount` (number).
    - Logs to the console `Collecting payment of <amount>`.

2. Write a function named `processOrder` that:
    - Takes two arguments `orderId` (number) and `amount` (number).
    - Logs to the console `<orderId> is being processed`.
    - Calls the function `processPayment`.
    - Logs to the console `<orderId> has been fully processed`.

3. In the main part of the code:
    - Log to the console `Processing orders`.
    - Call `processOrder` with `12321` and `10.99`.
    - Call `processOrder` with `12322` and `12.99`.
    - Call `processOrder` with `12323` and `15.0`.
    - Log to the console `All the orders have been processed`.

### Implementation
The implementation of the task is as follows:

```javascript

function processPayment(amount) {
    console.log(`Collecting payment of ${amount}`);
}

function processOrder(orderId, amount) {
    console.log(`${orderId} is being processed`);
    processPayment(amount);
    console.log(`${orderId} has been fully processed`);
}

console.log('Processing orders');

processOrder(12321, 10.99);
processOrder(12322, 12.99);
processOrder(12323, 15.0);

console.log('All the orders have been processed');
```

### Expected Output
Your code should log the following to the console:
```
Processing orders
12321 is being processed
Collecting payment of 10.99
12321 has been fully processed
12322 is being processed
Collecting payment of 12.99
12322 has been fully processed
12323 is being processed
Collecting payment of 15
12323 has been fully processed
All the orders have been processed
```

### How to Test

1. Open your web browser and navigate to the developer tools.
2. Go to the "Console" tab.
3. Copy and paste the above code into the console and run it.
4. You should see the expected output in the console as described above.

### Explanation
- **processPayment**: This function takes an `amount` as an argument and logs the message `Collecting payment of <amount>` to the console.
- **processOrder**: This function takes `orderId` and `amount` as arguments, logs the message `<orderId> is being processed`, calls `processPayment` with the `amount`, and then logs the message `<orderId> has been fully processed`.
- In the main part of the code, we first log `Processing orders` to the console.
- We then call `processOrder` three times with different `orderId` and `amount` values.
- Finally, we log `All the orders have been processed` to the console.
</details>