# Cookies & Local Storage

![puglookingatcookie](https://github.com/user-attachments/assets/e5c378e3-9b40-4b47-98af-8b7e3bfe6b21)



## Resources
- [W3Schools - JavaScript Cookies](https://www.w3schools.com/js/js_cookies.asp)
- [MDN Web Docs - HTTP Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
- [js-cookie GitHub Repository](https://github.com/js-cookie/js-cookie)
- [W3Schools - HTML5 Web Storage](https://www.w3schools.com/html/html5_webstorage.asp)

## Learning Objectives
- Understand how to create cookies using JavaScript
- Learn how to set specific settings for the cookie
- Learn how to read cookies with JavaScript
- How to use js-cookie for easy cookie manipulation
- How to use the browser web storage
- The differences between local storage and session storage

## Requirements
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the `.js` extension
- All of your code will be compiled/executed on Ubuntu 18.04 using Node 12.x and npm 6.x
- `src/index.js` should stay empty - all your JavaScript must be in your HTML, inside `<script>` tag

## Task 0: Create Basic Cookie
<details>
<summary>
The goal of this task is to learn how to set, get, and display cookies using vanilla JavaScript in a simple web application.</summary>

### Task Details
 
   - **Install your development environment:**
     - Install `webpack-dev-server` by running `npm install webpack-dev-server --save-dev` (if you have some errors of missing dependencies, install these packages: `npm i -D webpack` and `npm i -D webpack-cli`)
     - Create an empty file `src/index.js`
     - Run your server with `node_modules/.bin/webpack-dev-server`
   - **In a file `0-index.html`, create a basic HTML template:**
     - Add two text inputs, with the id `firstname` and `email`
     - Add one button with the text “Log me in” that will call the function `setCookies`
     - Add one button with the text “Show the cookies” that will call the function `showCookies`
   - **Create a function `setCookies`:**
     - It should set the cookie `firstname` with the value in the firstname input
     - It should set the cookie `email` with the value in the email input
   - **Create a function `showCookies`:**
     - It should create a DOM element `p`
     - It should set the inner HTML with `Cookies:` and the value of the cookie
     - It should append the paragraph at the bottom of the page

### Installation

1. **Set up your development environment**:
    - Ensure you have Node.js installed. 
    - Install `webpack-dev-server` by running:
      ```bash
      npm install webpack-dev-server --save-dev
      ```
    - If you encounter any errors of missing dependencies, run:
      ```bash
      npm i -D webpack
      npm i -D webpack-cli
      ```
    - Create an empty file `src/index.js`:
     
    - Create a `webpack.config.js` file in the root directory with the following content:
      ```javascript
      const path = require('path');

      module.exports = {
        entry: './src/index.js',
        output: {
          filename: 'main.js',
          path: path.resolve(__dirname, 'dist'),
        },
        mode: 'development',
        devServer: {
          static: {
            directory: __dirname,  // Serve from the root directory
          },
          port: 8080,
        },
      };
      ```

2. **Run your server**:
    - Start the webpack-dev-server:
      ```bash
      npm start
      ```

### Implementation

1. **0-index.html**:
   In the root directory:

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>0-index.html</title>
       <style>
           body {
               margin: 20px;
               font-family: "Times New Roman", Times, serif;
               font-weight: bold;
           }
           h1, h2 {
               margin-bottom: 10px;
           }
           input {
               margin-right: 10px;
               padding: 5px;
               border: 1px solid gray;
           }
           button {
               padding: 5px 10px;
               background-color: white;
               border: 1px solid gray;
               border-radius: 5px;
               color: black;
               cursor: pointer;
               font-weight: bold;
               box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
           }
           button:hover {
               background-color: #f0f0f0;
           }
       </style>
   </head>
   <body>
       <h1>Login to the website</h1>
       <input type="text" id="firstname" placeholder="Firstname">
       <input type="email" id="email" placeholder="Email">
       <button onclick="setCookies()">Log me in</button>
       
       <h2>Cookies</h2>
       <button onclick="showCookies()">Show the cookies</button>

       <script>
           function setCookies() {
               const firstname = document.getElementById('firstname').value;
               const email = document.getElementById('email').value;
               document.cookie = `firstname=${firstname};path=/`;
               document.cookie = `email=${email};path=/`;
           }

           function showCookies() {
               const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
                   const [name, value] = cookie.split('=');
                   acc[name] = value;
                   return acc;
               }, {});

               const p = document.createElement('p');
               p.innerHTML = `Cookies: ${JSON.stringify(cookies)}`;
               document.body.appendChild(p);
           }
       </script>
   </body>
   </html>
   ```

### Explanation

#### Installation Explanation

1. **Node.js and npm**: These are essential tools for JavaScript development, providing a runtime environment and package management.
2. **webpack-dev-server**: This is a development server that provides live reloading for your web application, making development faster and easier.
3. **`src/index.js`**: This is the entry point for webpack, but it remains empty for this project as all JavaScript is included directly in the HTML file.
4. **`webpack.config.js`**: This configuration file tells webpack how to bundle your application and where to serve the content from. The `devServer` section specifies that content should be served from the root directory and sets the port to 8080.

#### HTML and JavaScript Explanation

- **HTML Structure**: The HTML file creates a simple form with input fields for `firstname` and `email`, and buttons to set and display cookies.
- **CSS Styling**: Basic styling is applied to ensure the page looks like the provided example
- **JavaScript Functions**:
  - `setCookies()`: This function reads the values from the input fields and sets them as cookies.
  - `showCookies()`: This function reads the cookies, formats them as a JSON string, and displays them in a new paragraph element.

### Usage

1. **Start the development server**:
   ```bash
   npm start
   ```

2. **Open the browser**:
   Navigate to `http://localhost:8080/0-index.html`.

3. **Test the functionality**:
   - Enter values into the `Firstname` and `Email` input fields.
   - Click the “Log me in” button to set the cookies.
   - Click the “Show the cookies” button to display the cookies on the page.

![Screenshot 2024-07-12 171613](https://github.com/user-attachments/assets/0be00050-dbf2-492b-b435-b281db091f57)


</details>
