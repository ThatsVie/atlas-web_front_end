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

1. Open your web browser and navigate to the web inspector.
2. Go to the "Console" tab.
3. Copy and paste the above code into the console.
4. Run the `welcome('Puggy', 'Wuggy');` function by typing it into the console and pressing Enter. You should see an alert with the message "Welcome Puggy Wuggy!"

![welcome('Holberton', 'School');](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/59e2e98b-1de2-41a6-90b7-daac420b7187)

5. Run `alert(fullName)` in the console, you should get a reference error because fullName is not defined in the global scope, demonstrating lexical scoping.

![Screenshot 2024-07-06 123650](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/ad60263f-263b-494e-b706-71d920634272)

