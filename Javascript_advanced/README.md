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
## Task 0: Lexical Scoping and Welcome Message
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


## Task 1: Closure Scope Chain

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


## Task 2: Closure

### Objective
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











