![puggy_with_large_banner](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/318fe145-6a89-4fa8-bc12-89f714b770c6)

## Resources

- [JavaScript.info: Closure](https://javascript.info/closure)
- [W3Schools: JavaScript Function Closures](https://www.w3schools.com/js/js_function_closures.asp)
- [MDN Web Docs: Call Stack](https://developer.mozilla.org/en-US/docs/Glossary/Call_stack)
- [JavaScript.info: bind](https://javascript.info/bind)
- [JavaScript.info: Callbacks](https://javascript.info/callbacks)


## Learning Objectives

### What is Lexical Scoping in JavaScript
<details>
<summary>
Lexical scoping refers to the scope of a variable being determined by its position within the source code. In other words, a variable defined inside a function is not accessible outside of it, and functions have access to variables defined in their outer scope.</summary>

**Example:**
In Task 0:
```javascript
function welcome(firstName, lastName) {
    const fullName = `${firstName} ${lastName}`;
    function displayFullName() {
        alert(`Welcome ${fullName}!`);
    }
    displayFullName();
}
```
Here, `fullName` is lexically scoped to the `welcome` function and accessible by the `displayFullName` function.</details>

### What is Closure in JavaScript
<details>
<summary>
A closure is a function that retains access to its outer scope even after the outer function has finished executing. Closures are created every time a function is created.</summary>

**Example:**
In Task 2:
```javascript
function welcomeMessage(fullName) {
    return function() {
        alert(`Welcome ${fullName}`);
    };
}

const guillaume = welcomeMessage('Guillaume');
guillaume(); // Alerts "Welcome Guillaume"
```
Here, the inner function retains access to `fullName` even after `welcomeMessage` has executed.
</details>

### How to Use Closure
<details>
<summary>
Closures can be used to create private variables, implement data encapsulation, and maintain state.
</summary>

**Example:**
In Task 6:
```javascript
const studentHogwarts = (() => {
    let privateScore = 0;
    let name = null;

    function changeScoreBy(points) {
        privateScore += points;
    }

    return {
        setName(newName) {
            name = newName;
        },
        rewardStudent() {
            changeScoreBy(1);
        },
        penalizeStudent() {
            changeScoreBy(-1);
        },
        getScore() {
            return `${name}: ${privateScore}`;
        }
    };
})();
```
Here, `privateScore` and `name` are private variables, and their state is maintained through closures.
</details>

### How to Chain Different Closures
<details>
<summary>
Chaining closures involves having functions return other functions that form a chain of function calls, each with access to the previous function's scope.</summary>

**Example:**
In Task 4:
```javascript
function addBy(firstNumber) {
    return function(secondNumber) {
        return firstNumber + secondNumber;
    };
}

const addBy100 = addBy(100);
console.log(addBy100(20)); // Outputs 120
```
Here, `addBy` returns a function that uses the scope of its parent function.
</details>

### How to Simulate Private Methods with Closure
<details>
<summary>
Private methods can be simulated by defining functions within closures that are not exposed outside their scope.</summary>

**Example:**
In Task 6:
```javascript
const studentHogwarts = (() => {
    let privateScore = 0;

    function changeScoreBy(points) {
        privateScore += points;
    }

    return {
        rewardStudent() {
            changeScoreBy(1);
        },
        penalizeStudent() {
            changeScoreBy(-1);
        }
    };
})();
```
Here, `changeScoreBy` is a private method that is not accessible outside the closure.
</details>

### The Execution Stack Order with JavaScript
<details>
<summary>
The execution stack order determines the sequence in which functions are executed in JavaScript. The event loop and `setTimeout` can affect this order.</summary>

**Example:**
In Task 7:
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
The `setTimeout` function defers the callback execution, demonstrating the execution stack order.
</details>

### How to Use Binding
<details>
<summary>
Binding is used to set the `this` value for a function, ensuring that it has the correct context.
</summary>

**Example:**
In Task 12:
```javascript
const roomDimensions = {
    width: 50,
    length: 100,
    getArea: function() {
        return this.width * this.length;
    }
};

const boundGetArea = roomDimensions.getArea.bind(roomDimensions);
console.log(boundGetArea()); // Outputs 5000
```
Here, `bind` ensures that `this` refers to `roomDimensions` when `getArea` is called.
</details>

### How to Use Callbacks
<details>
<summary>
Callbacks are functions passed as arguments to other functions and are executed within the outer function to complete some kind of action or routine.</summary>

**Example:**
In Task 14:
```javascript
function createElement(data) {
    const paragraph = document.createElement('p');
    paragraph.textContent = data;
    document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
    const xhr = new XMLHttpRequest();
    const url = 'https://en.wikipedia.org/w/api.php?...';

    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            const extract = response.query.pages[Object.keys(response.query.pages)[0]].extract;
            callback(extract);
        }
    };
    xhr.send();
}

queryWikipedia(createElement);
```
Here, `queryWikipedia` uses `createElement` as a callback to process the data after fetching it from Wikipedia.
</details>

## Requirements
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the js extension

## Tasks and Usage

 ## Task 0: Lexical Scoping and Welcome Message

<details>
<summary>
The goal of this task is to understand and implement lexical scoping in JavaScript by creating a function that displays a welcome message. </summary>

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

 ## Task 1: Closure Scope Chain
 
<details>
<summary>
The goal of this task is to understand and implement closure and scope chains in JavaScript by creating nested functions that access variables from their parent scopes. </summary>

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

## Task 2: Closure

<details>
<summary>
The goal of this task is to understand and implement closures in JavaScript by creating a function that returns another function, demonstrating how inner functions can access variables from their parent scope. </summary>

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

## Task 3: Closure and Loops
<details>
<summary>The goal of this task is to understand and implement closures within loops in JavaScript by creating functions that capture the loop variable. </summary>

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

![Screenshot 2024-07-07 124331](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/d8d57777-a6aa-47c2-b6d4-11684ed5ee4b)


</details>

## Task 4: Complex Closure

<details>
<summary>The goal of this task is to understand and implement complex closures in JavaScript by creating functions that return other functions, demonstrating how inner functions can perform mathematical operations using their parent scope's variables. </summary>

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
  
![Screenshot 2024-07-07 125036](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/97a7e0e2-132f-4737-ab15-2d6a5041a8bb)


</details>
 
## Task 5: Changing DOM with Closure

<details>
<summary>The goal of this task is to understand and implement closures in JavaScript by creating a function that changes the style of the entire page. This function will demonstrate how closures can be used to encapsulate functionality and maintain state. </summary>

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

**Start Screen**

![Screenshot 2024-07-07 133924](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/a5764c71-8318-478f-9058-b8e8f16e2b80)

**Spooky**

![Screenshot 2024-07-07 133936](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/55a7a623-8a4a-4ab9-8464-5bfe7578aebc)

**Dark Mode**
![Screenshot 2024-07-07 134002](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/d2e8276b-ef46-4706-9995-d83196ecbaf7)


**Scream Mode**

![Screenshot 2024-07-07 134017](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/a0258d24-9c82-4b05-8d61-1219951dcd25)

### Explanation

- The `changeMode` function accepts five arguments (size, weight, transform, background, color) and returns a function that changes the style of the entire page based on these arguments.
- The `main` function creates three mode change functions (`spooky`, `darkMode`, `screamMode`) by calling `changeMode` with specific arguments.
- It adds a paragraph and three buttons to the body of the page. Each button has an `onclick` event that calls the corresponding mode change function to update the page's style.
-  The `main` function is called to set up the page.
- In the context of this task, `innerHTML` is used to set the content of the buttons dynamically. By assigning a string to the `innerHTML` property of each button element, we can easily specify the text that appears on the button, such as "Spooky", "Dark mode", and "Scream mode". This allows us to create and configure the buttons programmatically within the `main` function.

</details>

## Task 6: Private Methods with Closure

<details>
<summary>The goal of this task is to understand and implement private methods in JavaScript using closures. This will demonstrate how closures can be used to encapsulate and protect internal state within a module. </summary>

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

![Screenshot 2024-07-07 134823](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/7e1d700d-83f3-4fbe-b54f-cdff45627f2a)

### Explanation

- The `studentHogwarts` module is defined as a function that returns an object with four public methods: `setName`, `rewardStudent`, `penalizeStudent`, and `getScore`.
- `privateScore` and `name` are private variables, and `changeScoreBy` is a private method that modifies `privateScore` by adding the provided `points`.
- The public methods allow interaction with the private variables and methods while keeping the internal state hidden from the outside.
- Instances for `harry` and `draco` are created, and their names are set using the `setName` method.
- `harry` is rewarded four times, and `draco` is rewarded once and penalized three times.
- The `getScore` method is used to log the name and score of each student to the console.

</details>

## Task 7: Stack Order and setTimeout

<details>
<summary>The goal of this task is to understand the execution order in JavaScript, especially how the event loop and the call stack work with `setTimeout`. </summary>

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
5. 
![Screenshot 2024-07-07 140117](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/e696012c-1a72-425b-8ddb-e99c2945f532)

![Screenshot 2024-07-07 140131](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/c72bca30-5858-4073-98e2-a7d706a475d6)


</details>

## Task 8: Stack Order in Functions

<details>
<summary>The goal of this task is to understand the execution order in JavaScript functions by creating a process order flow that involves logging messages to the console in a specific sequence.
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

### How to Test

1. Open your web browser and navigate to the developer tools.
2. Go to the "Console" tab.
3. Copy and paste the above code into the console and run it.
4. You should see the expected output in the console as below.

![Screenshot 2024-07-07 141735](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/21f622d4-eec0-476e-aac9-ee1de5b326a1)


### Explanation
- **processPayment**: This function takes an `amount` as an argument and logs the message `Collecting payment of <amount>` to the console.
- **processOrder**: This function takes `orderId` and `amount` as arguments, logs the message `<orderId> is being processed`, calls `processPayment` with the `amount`, and then logs the message `<orderId> has been fully processed`.
- In the main part of the code, we first log `Processing orders` to the console.
- We then call `processOrder` three times with different `orderId` and `amount` values.
- We log `All the orders have been processed` to the console.
</details>

 ## Task 9: Prime Numbers & Timing Execution

<details>
<summary>The goal of this task is to understand how to measure the execution time of a function using the performance API and to count the number of prime numbers between 2 and 100. </summary>

### Task Description
1. Write a function named `countPrimeNumbers` that:
    - Returns the number of prime numbers from 2 to 100.

2. Log to the console the time in milliseconds to execute the function in this format:
    ```
    Execution time of printing countPrimeNumbers was <time used> milliseconds.
    ```

### Implementation
The implementation of the task is as follows:

```javascript
function countPrimeNumbers() {
    let primeCount = 0;

    for (let num = 2; num <= 100; num++) {
        let isPrimeNumber = true;
        for (let divisor = 2; divisor <= Math.sqrt(num); divisor++) {
            if (num % divisor === 0) {
                isPrimeNumber = false;
                break;
            }
        }
        if (isPrimeNumber) {
            primeCount++;
        }
    }

    return primeCount;
}

const startTime = performance.now();
const totalPrimes = countPrimeNumbers();
const endTime = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${endTime - startTime} milliseconds.`);
console.log(`Number of prime numbers between 2 and 100: ${totalPrimes}`);
```

### How to Test

1. Open your web browser and navigate to the developer tools.
2. Go to the "Console" tab.
3. Copy and paste the above code into the console and run it.
4. You should see the execution time and the number of prime numbers between 2 and 100 displayed in the console.

![Screenshot 2024-07-07 155154](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/093dcdaa-943a-4a0c-a8f7-601ef1821b17)


### Explanation
- **countPrimeNumbers**: This function iterates from 2 to 100, checking each number to see if it is prime. It counts the number of prime numbers in this range and returns the count.
- **performance.now()**: This API is used to measure the time before and after calling `countPrimeNumbers` to determine how long the function takes to execute.
- The execution time and the count of prime numbers are logged to the console.
</details>


## Task 10: Execution Stack & Timing Execution

<details>
<summary>The goal of this task is to measure the execution time of a function that calculates prime numbers, by executing it 100 times, using the performance API. </summary>

### Task Description
1. Reuse the function `countPrimeNumbers` from `9-prime.js`:
    - This function will return the number of prime numbers from 2 to 100.

2. Execute the function `countPrimeNumbers` 100 times.
3. Log to the console the time in milliseconds to execute the function 100 times in this format:
    ```
    Execution time of calculating prime numbers 100 times was <time used> milliseconds.
    ```

### Implementation
The implementation of the task is as follows:

```javascript

function countPrimeNumbers() {
    let primeCount = 0;

    for (let num = 2; num <= 100; num++) {
        let isPrimeNumber = true;
        for (let divisor = 2; divisor <= Math.sqrt(num); divisor++) {
            if (num % divisor === 0) {
                isPrimeNumber = false;
                break;
            }
        }
        if (isPrimeNumber) {
            primeCount++;
        }
    }

    return primeCount;
}

const startTime = performance.now();
for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
    console.log(`Execution number ${i + 1}`);
}
const endTime = performance.now();
console.log(`Execution time of calculating prime numbers 100 times was ${endTime - startTime} milliseconds.`);

```

### How to Test

1. Open your web browser and navigate to the developer tools.
2. Go to the "Console" tab.
3. Copy and paste the above code into the console and run it.
4. You should see the execution time displayed in the console.

![Screenshot 2024-07-07 162755](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/700112a2-ee8d-4862-b94e-1db245849127)


![Screenshot 2024-07-07 162811](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/942fa1c4-a77c-4d1b-92c4-6579132a72d4)


### Explanation
- **countPrimeNumbers**: This function counts the number of prime numbers between 2 and 100.
- The function is executed 100 times in a loop.
- **performance.now()**: This API is used to measure the time before and after the loop to determine how long it takes to execute the function 100 times.
- The execution time is logged to the console.
</details>


## Task 11: Changing Stack Order using setTimeout

<details>
<summary>The goal of this task is to measure the execution time of a function that calculates prime numbers, by executing it 100 times, and ensuring the calculations are done at the end of the execution stack using `setTimeout`. </summary>

### Task Description
1. Reuse the function `countPrimeNumbers` from `10-prime.js`:
    - This function will return the number of prime numbers from 2 to 100.

2. Use `setTimeout` to defer the execution of the function `countPrimeNumbers` 100 times to the end of the execution stack.
3. Log to the console the time in milliseconds to execute the function 100 times in this format:
    ```
    Execution time of calculating prime numbers 100 times was <time used> milliseconds.
    ```

### Implementation
The implementation of the task is as follows:

```javascript
(function() {
    function countPrimeNumbers() {
        let primeCount = 0;

        for (let num = 2; num <= 100; num++) {
            let isPrimeNumber = true;
            for (let divisor = 2; divisor <= Math.sqrt(num); divisor++) {
                if (num % divisor === 0) {
                    isPrimeNumber = false;
                    break;
                }
            }
            if (isPrimeNumber) {
                primeCount++;
            }
        }

        return primeCount;
    }

    const startTime = performance.now();
    setTimeout(() => {
        for (let i = 0; i < 100; i++) {
            countPrimeNumbers();
        }
        const endTime = performance.now();
        console.log(`Execution time of calculating prime numbers 100 times was ${endTime - startTime} milliseconds.`);
    }, 0);
})();
```

### Explanation

- **setTimeout**: The `setTimeout` function in JavaScript allows you to schedule a function to be executed after a specified delay (in milliseconds). When `0` milliseconds is specified, it defers the function execution until after the current event loop cycle, effectively pushing it to the end of the current stack. This ensures that the code inside `setTimeout` runs asynchronously.

- **IIFE (Immediately Invoked Function Expression)**: An IIFE is a function that runs as soon as it is defined. It creates a local scope for the variables and functions within it, preventing them from polluting the global scope. In this task, the IIFE is used to encapsulate the code, ensuring that the variables and functions do not interfere with other scripts or commands in the console.

### Expected Output
Your code should display something similar to:
```
Execution time of calculating prime numbers 100 times was 0.03999999910593033 milliseconds.
```

### How to Test

1. Open your web browser and navigate to the developer tools.
2. Go to the "Console" tab.
3. Copy and paste the above code into the console and run it.

![Screenshot 2024-07-07 165700](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/ec431238-da96-45a0-ad11-1ca5f3d63794)


</details>

## Task 12: Binding

<details>
<summary>The goal of this task is to understand how to use the `bind` method in JavaScript to ensure that the `this` context is correctly set when calling a function. </summary>

### Task Description
1. Create an object named `roomDimensions` with the following three attributes:
    - `width`: 50
    - `length`: 100
    - `getArea`: A function that returns the surface area of the object using the `width` and `length`.

2. Create a variable named `boundGetArea` that will bind the object `roomDimensions` to the `getArea` function.

### Implementation
The implementation of the task is as follows:

```javascript

const roomDimensions = {
    width: 50,
    length: 100,
    getArea: function() {
        return this.width * this.length;
    }
};

const boundGetArea = roomDimensions.getArea.bind(roomDimensions);

console.log(boundGetArea()); // Should display 5000
```

### Explanation

- **roomDimensions Object**: This object has three attributes: `width`, `length`, and `getArea`.
  - `width`: The width of the room.
  - `length`: The length of the room.
  - `getArea`: A function that calculates the area of the room using `width` and `length`.

- **bind Method**: The `bind` method creates a new function that, when called, has its `this` keyword set to the provided value. In this case, `roomDimensions.getArea.bind(roomDimensions)` creates a new function where `this` inside `getArea` refers to the `roomDimensions` object.

- **boundGetArea**: This variable stores the bound function created by `bind`, ensuring that `getArea` will correctly refer to the `roomDimensions` object when called.

### Usage
To test the `boundGetArea` function:

1. Open your web browser and navigate to the developer tools.
2. Go to the "Console" tab.
3. Copy and paste the above code into the console.
4. Run `boundGetArea();` by typing it into the console and pressing Enter. You should see `5000` displayed.

![Screenshot 2024-07-07 171037](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/fcdb528b-ed67-4793-b208-64993d850b3e)


</details>

## Task 13: Binding + Closure

<details>
<summary>The goal of this task is to understand how to use the `bind` method in conjunction with closures to ensure that the `this` context is correctly set when calling a function. </summary>

### Task Description
1. Write an object named `user` with the following attributes:
    - `hobby`: Calligraphy
    - `favoriteSport`: Hockey
    - `astrologicalSign`: Aries
    - `firstName`: Buillaume
    - `lastName`: Johns
    - `location`: Netherlands
    - `occupation`: Engineer

2. Create a function named `logWelcomeUser` that:
    - Takes one argument `welcomeString` (String).
    - Logs to the console `<welcomeString>, <firstName>. Your occupation is: <occupation>`.

3. Create a variable named `bindLogWelcomeUser` that binds the `logWelcomeUser` function to the `user` object.
4. Call the function with the string `Welcome`.

### Implementation
The implementation of the task is as follows:

```javascript

const user = {
    hobby: 'Calligraphy',
    favoriteSport: 'Hockey',
    astrologicalSign: 'Aries',
    firstName: 'Buillaume',
    lastName: 'Johns',
    location: 'Netherlands',
    occupation: 'Engineer'
};

function logWelcomeUser(welcomeString) {
    console.log(`${welcomeString}, ${this.firstName}. Your occupation is: ${this.occupation}`);
}

const bindLogWelcomeUser = logWelcomeUser.bind(user);

//  usage
bindLogWelcomeUser('Welcome'); // Should display "Welcome, Buillaume. Your occupation is: Engineer"
```

### Explanation

- **user Object**: This object has multiple attributes: `hobby`, `favoriteSport`, `astrologicalSign`, `firstName`, `lastName`, `location`, and `occupation`.
- **logWelcomeUser Function**: This function takes one argument, `welcomeString`, and logs a welcome message that includes the user's first name and occupation using `this`.
- **bind Method**: The `bind` method is used to create a new function (`bindLogWelcomeUser`) with `this` bound to the `user` object.
- **Example Usage**: Calling `bindLogWelcomeUser('Welcome')` logs the welcome message to the console with the bound `this` context.

### Usage
To test the `bindLogWelcomeUser` function:

1. Open your web browser and navigate to the developer tools (usually accessible by right-clicking on the page and selecting "Inspect" or pressing F12).
2. Go to the "Console" tab.
3. Copy and paste the above code into the console.
4. Run `bindLogWelcomeUser('Welcome');` by typing it into the console and pressing Enter. You should see `Welcome, Buillaume. Your occupation is: Engineer` displayed.
5. Run `bindLogWelcomeUser('Hello');` by typing it into the console and pressing Enter. You should see `Hello, Buillaume. Your occupation is: Engineer` displayed.

![Screenshot 2024-07-07 172325](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/bba5d63a-e97d-4958-8a3a-56638f2d4d2d)

</details>

## Task 14: Simple Callback

<details>
<summary>The goal of this task is to understand how to use callbacks in JavaScript by fetching data from an API and dynamically creating an HTML element to display the data. </summary>

### Task Description
1. Write a new function named `createElement` that:
    - Accepts one argument `data` (String).
    - Creates a paragraph element.
    - Sets the content of the paragraph to `data`.
    - Appends the paragraph to the document body.

2. Write a new function named `queryWikipedia` that:
    - Accepts one argument `callback` (function).
    - Uses `XMLHttpRequest` to fetch the Stack Overflow article from Wikipedia's API.
    - Calls the `callback` function with the extract of the API response once the fetch is successfully completed.

3. Call `queryWikipedia` with `createElement` as the callback.

### Implementation
The implementation of the task is as follows:

```javascript

function createElement(data) {
    const paragraph = document.createElement('p');
    paragraph.textContent = data;
    document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
    const xhr = new XMLHttpRequest();
    const url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*';

    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            const pages = response.query.pages;
            const pageId = Object.keys(pages)[0];
            const extract = pages[pageId].extract;
            callback(extract);
        }
    };
    xhr.send();
}

queryWikipedia(createElement);
```

### Explanation

- **createElement Function**: This function creates a paragraph element, sets its content to the provided `data`, and appends it to the document body.
- **queryWikipedia Function**: This function takes a `callback` function as an argument. It performs an `XMLHttpRequest` to fetch the Stack Overflow article from Wikipedia's API. Upon successful completion of the request, it parses the response, extracts the relevant text, and calls the `callback` function with the extracted text.
- **XMLHttpRequest**: This is used to perform the AJAX request to the Wikipedia API without using any frameworks.

### Usage
To test the functionality:

1. Save this html as 14-wikipedia.html
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Wikipedia Query</title>
    </head>
    <body>
        <script src="14-wikipedia.js"></script>
    </body>
    </html>
    ```
3. Open the HTML file in a web browser.
4. You should see the introductory content of the Stack Overflow article from Wikipedia appended as a paragraph to the body of the document.

### Expected Output
The introductory content of the Stack Overflow article from Wikipedia should be displayed as a paragraph on the web page.
![Screenshot 2024-07-07 173732](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/1044c981-d4e1-4566-9dd7-9b1f52023607)

</details>

## Task 15: Multiple Callbacks

<details>
<summary>The goal of this task is to understand how to use multiple callbacks in JavaScript to handle different scenarios when processing orders.</summary>

### Task Description
1. Create a variable named `stock`:
    - It contains the stock for the items you are selling.
    - It’s an object with the values `macbook: 2` and `iphone: 4`.

2. Write a new function named `processPayment` that:
    - Accepts one argument `itemName` (String).
    - Decreases the stock by one for the specified item.
    - Logs to the console the text `Payment is being processed for item <itemName>`.

3. Write a new function named `processError` that:
    - Accepts one argument `itemName` (String).
    - Logs to the console the text `No more <itemName> in stock`.
    - Logs to the console the text `Payment is not being processed`.

4. Write a new function named `processOrder` that:
    - Accepts three arguments `itemName` (String), `callbackPayment` (function), and `callbackError` (function).
    - Logs to the console the text `Verifying the stock of <itemName>`.
    - If there is enough stock for the item, it calls `callbackPayment`.
    - If there is not enough stock for the item, it calls `callbackError`.
    - If the item is not recognized, it logs a message indicating that the item is not available in the stock.

5. Prompt the user with the message `Please enter the item you would like to purchase (Macbook, iPhone)` and pass the right callbacks.

### Implementation
The implementation of the task is as follows:

```javascript

const stock = {
    macbook: 2,
    iphone: 4
};


function processPayment(itemName) {
    stock[itemName.toLowerCase()] -= 1;
    console.log(`Payment is being processed for item ${itemName}`);
}

function processError(itemName) {
    console.log(`No more ${itemName} in stock`);
    console.log('Payment is not being processed');
}

function processOrder(itemName, callbackPayment, callbackError) {
    console.log(`Verifying the stock of ${itemName}`);
    itemName = itemName.toLowerCase();
    if (stock[itemName] !== undefined) {
        if (stock[itemName] > 0) {
            callbackPayment(itemName);
        } else {
            callbackError(itemName);
        }
    } else {
        console.log(`Item ${itemName} is not available in our stock`);
    }
}

const item = prompt("Please enter the item you would like to purchase (Macbook, iPhone)");

processOrder(item, processPayment, processError);
```

### Explanation

- **stock Object**: This object holds the current stock levels for `macbook` and `iphone`.
- **processPayment Function**: This function decreases the stock of the specified item by 1 and logs a message indicating that payment is being processed.
- **processError Function**: This function logs an error message indicating that there is no stock for the specified item and that payment is not being processed.
- **processOrder Function**: This function checks the stock for the specified item. If there is stock available, it calls the `callbackPayment` function. If there is no stock available, it calls the `callbackError` function. If the item is not recognized, it logs a message indicating that the item is not available in the stock.
- **User Prompt**: The user is prompted to enter the item they would like to purchase, and the input is passed to `processOrder` along with the appropriate callbacks.

### Usage
To test the functionality:

1.  Save this html as 100-stock.html
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Stock Management</title>
    </head>
    <body>
        <script src="100-stock.js"></script>
    </body>
    </html>
    ```
3. Open the HTML file in a web browser.
4. You will be prompted to enter the item you would like to purchase. Enter "Macbook" or "iPhone" to see the corresponding messages and stock updates in Console .

### Expected Output
You will see messages indicating whether the item is in stock, whether the payment is being processed, or if there is an error due to no stock or an unrecognized item.

![Screenshot 2024-07-07 175040](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/1d02c98c-3828-44a8-ac1a-e8cbefb6f7c2)

![Screenshot 2024-07-07 175101](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/2a6fb323-ebd5-46b5-9bdd-ff860cd961a0)

![Screenshot 2024-07-07 175126](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/0b3a9e38-20cc-4c50-aa61-607320178c9c)

![Screenshot 2024-07-07 175141](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/31a69209-ea28-45aa-b299-ef876bd9fead)

![Screenshot 2024-07-07 175156](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/61fab0a3-512c-4025-9783-fb31e485cb09)

![Screenshot 2024-07-07 175213](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/a5f33453-ffbb-4d03-8413-2dcf313305b4)


</details>








</details>
