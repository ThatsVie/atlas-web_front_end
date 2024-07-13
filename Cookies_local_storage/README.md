
# Cookies & Local Storage



![blackandwhitepuggywithcookie](https://github.com/user-attachments/assets/2c25b83b-4b19-45d3-b4a9-d68fade79673)




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

### `0-index.html`:
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

## Task 1: Create Cookie with Expiration Date and Specific Path

<details>
<summary>The goal of this task is to modify the cookie-setting function to include an expiration date of 10 days.</summary>

### Task Details
   - **Reuse the code from the previous task**
   - **Modify the way you are setting cookies to expire in 10 days**
   - **Requirements**:
     - Access your code with `http://localhost:8080/1-index.html`
     - Use vanilla JavaScript to complete the task

### Implementation

 ### `1-index.html`:

   In the root directory:
```
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>1-index.html</title>
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
               
               const expirationDate = new Date();
               expirationDate.setTime(expirationDate.getTime() + (10 * 24 * 60 * 60 * 1000)); // 10 days in milliseconds
               const expires = "expires=" + expirationDate.toUTCString();
               
               document.cookie = `firstname=${firstname};${expires};path=/`;
               document.cookie = `email=${email};${expires};path=/`;
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

- **Expiration Date**: We added code to set the cookies to expire in 10 days.
  - `const expirationDate = new Date();`: Creates a new Date object representing the current date and time.
  - `expirationDate.setTime(expirationDate.getTime() + (10 * 24 * 60 * 60 * 1000));`: Adds 10 days (in milliseconds) to the current time.
  - `const expires = "expires=" + expirationDate.toUTCString();`: Converts the date to a UTC string suitable for setting in a cookie.

### Viewing and Testing Cookies

To verify the expiration date of the cookies, you can check the cookies using your browser's developer tools.

1. **Open your browser's developer tools**:
   - Right-click on the page and select "Inspect" or press `F12`.
   - Navigate to the "Application" tab.
   - Under "Storage", click on "Cookies".
   - Select the URL of your current site.

You should see a list of cookies set by your site, including their names, values, and expiration dates.

### Usage

1. **Start the development server:**
   ```bash
   npm start
   ```
2. **Open your browser** to `http://localhost:8080/1-index.html` and test the functionality:
   - Enter values into the `Firstname` and `Email` input fields.
   - Click the “Log me in” button to set the cookies.
   - Click the “Show the cookies” button to display the cookies on the page.
   - Check the expiration date of the cookies in the browser's developer tools.

![Screenshot 2024-07-12 180149](https://github.com/user-attachments/assets/71ea9638-cb79-4ec9-985c-99396efd37c5)

The screenshot from `http://localhost:8080/1-index.html` shows that the expiration date for the cookies is `2024-07-22T22:57:11.000Z`, which is 10 days from the date when the cookies were generated.

</details>


## Task 2: Create a Function to Retrieve a Cookie and Modify Display

<details>
<summary>The goal of this task is to learn how to set cookies, retrieve them by name, and display them in a specified format using vanilla JavaScript.</summary>

### Task Details
Create a function to retrieve a cookie and modify display
   - **Reuse the code from the previous task**
   - **Create a function `getCookie`:**
     - It accepts `name` as an argument
     - It should return the value of the cookie with the name passed in the argument
     - If the cookie does not exist, it should return an empty string
   - **Modify the function `showCookies`:**
     - It should display the paragraph `Email: EMAIL - Firstname: FIRSTNAME`
   - **Requirements**:
     - Access your code with `http://localhost:8080/2-index.html`
     - Use vanilla JavaScript to complete the task

### Implementation

 ### `2-index.html`:

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>2-index.html</title>
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
               
               const expirationDate = new Date();
               expirationDate.setTime(expirationDate.getTime() + (10 * 24 * 60 * 60 * 1000)); // 10 days in milliseconds
               const expires = "expires=" + expirationDate.toUTCString();
               
               document.cookie = `firstname=${firstname};${expires};path=/`;
               document.cookie = `email=${email};${expires};path=/`;
           }

           function getCookie(name) {
               const cookies = document.cookie.split('; ');
               for (let cookie of cookies) {
                   const [cookieName, cookieValue] = cookie.split('=');
                   if (cookieName === name) {
                       return cookieValue;
                   }
               }
               return '';
           }

           function showCookies() {
               const firstname = getCookie('firstname');
               const email = getCookie('email');

               const p = document.createElement('p');
               p.innerHTML = `Email: ${email} - Firstname: ${firstname}`;
               document.body.appendChild(p);
           }
       </script>
   </body>
   </html>
   ```

### Explanation

- **`getCookie(name)`**: This function accepts a cookie name as an argument and returns the value of the cookie with the specified name. If the cookie does not exist, it returns an empty string.
  - `const cookies = document.cookie.split('; ');`: Splits the document cookies into an array.
  - `for (let cookie of cookies)`: Loops through each cookie.
  - `const [cookieName, cookieValue] = cookie.split('=');`: Splits each cookie into its name and value.
  - `if (cookieName === name) { return cookieValue; }`: Checks if the cookie name matches the provided name and returns the value.
  - `return '';`: Returns an empty string if the cookie does not exist.
  
- **Modified `showCookies()`**:
  - Retrieves the `firstname` and `email` cookies using the `getCookie` function.
  - Displays the cookies in the format `Email: EMAIL - Firstname: FIRSTNAME`.

### Usage

1. **Start the development server:**
   ```bash
   npm start
   ```
2. **Open your browser** to `http://localhost:8080/2-index.html` and test the functionality:
   - Enter values into the `Firstname` and `Email` input fields.
   - Click the “Log me in” button to set the cookies.
   - Click the “Show the cookies” button to display the cookies on the page in the specified format.

- When no input is provided, clicking the 'Show the cookies' button results in `Email: - Firstname:`, which indicates that the `getCookie` function correctly returns an empty string when the cookie does not exist.
![Screenshot 2024-07-13 125447](https://github.com/user-attachments/assets/89489759-5a2a-4d7f-a475-414707db2ecd)

- When input is provided and the 'Log me in' button is pressed, followed by clicking the 'Show the cookies' button, the output displays `Email: puggilicious@pugs.com - Firstname: puggilicious`, confirming that the cookies are correctly set and retrieved.

![Screenshot 2024-07-13 123816](https://github.com/user-attachments/assets/70a5d166-d768-45f3-835f-d2a49426c8f4)




</details>

## Task 3: Delete Cookie and Mini Application

<details>
<summary>
The goal of this task is to learn how to create a mini application that can log in users, display a welcome message, and log them out by deleting cookies using vanilla JavaScript.</summary>

### Task Details
In a `3-index.html`:
   - **Reuse your code from the previous task**
   - Add a `div` in HTML that will contain the login form:
     - You can reuse the one you previously wrote
     - It has one `h2`
     - It has two text inputs
     - It has one button
   - Write a function named `showForm`:
     - It should remove the Welcome message if it exists
     - It should show the form
   - Write a function named `hideForm`:
     - It should hide the form
   - Write a function named `deleteCookiesAndShowForm`:
     - It should remove the two cookies
     - It should show the form by calling the `showForm` function
   - Write a function named `showWelcomeMessageOrForm`:
     - If the user is not logged in, the function `showForm` is called
     - If the user is logged in, replace the body of the page with an `h1`
     - It should display `Welcome FIRSTNAME (logout)`
     - `(logout)` should be a link
     - The link font should be displayed in normal weight, italic, and 10px to the right of the message
     - On click, call the function `deleteCookiesAndShowForm`, hide the welcome message, and show the form
   - **Requirements**:
     - Access your code with `http://localhost:8080/3-index.html`
     - Use vanilla JavaScript to complete the task
     - Build the Welcome message with JavaScript without using HTML
     - The login form should look like the provided image
     - When a user is logged in, the page should look like the provided image

### Implementation

### `3-index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3-index.html</title>
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
        .logout {
            font-weight: normal;
            font-style: italic;
            margin-left: 10px;
            cursor: pointer;
        }
    </style>
</head>
<body onload="showWelcomeMessageOrForm()">
    <div id="login-form">
        <h2>Login to the website</h2>
        <input type="text" id="firstname" placeholder="Firstname">
        <input type="email" id="email" placeholder="Email">
        <button onclick="setCookies()">Log me in</button>
    </div>

    <script>
        function setCookies() {
            const firstname = document.getElementById('firstname').value;
            const email = document.getElementById('email').value;
            
            const expirationDate = new Date();
            expirationDate.setTime(expirationDate.getTime() + (10 * 24 * 60 * 60 * 1000)); // 10 days in milliseconds
            const expires = "expires=" + expirationDate.toUTCString();
            
            document.cookie = `firstname=${firstname};${expires};path=/`;
            document.cookie = `email=${email};${expires};path=/`;
            showWelcomeMessageOrForm();
        }

        function getCookie(name) {
            const cookies = document.cookie.split('; ');
            for (let cookie of cookies) {
                const [cookieName, cookieValue] = cookie.split('=');
                if (cookieName === name) {
                    return cookieValue;
                }
            }
            return '';
        }

        function showForm() {
            const welcomeMessage = document.getElementById('welcome-message');
            if (welcomeMessage) {
                welcomeMessage.remove();
            }
            document.getElementById('login-form').style.display = 'block';
        }

        function hideForm() {
            document.getElementById('login-form').style.display = 'none';
        }

        function deleteCookiesAndShowForm() {
            document.cookie = "firstname=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            document.getElementById('firstname').value = '';
            document.getElementById('email').value = '';
            showForm();
        }

        function showWelcomeMessageOrForm() {
            const firstname = getCookie('firstname');
            const email = getCookie('email');

            if (!firstname || !email) {
                showForm();
            } else {
                hideForm();
                const welcomeMessage = document.createElement('h1');
                welcomeMessage.id = 'welcome-message';
                welcomeMessage.innerHTML = `Welcome: ${firstname} <span class="logout" onclick="deleteCookiesAndShowForm()">(logout)</span>`;
                document.body.appendChild(welcomeMessage);
            }
        }
    </script>
</body>
</html>
```

### Explanation

- **setCookies()**: This function sets the cookies for `firstname` and `email` with an expiration date of 10 days from the current date.
  - `const expirationDate = new Date();`: Creates a new Date object representing the current date and time.
  - `expirationDate.setTime(expirationDate.getTime() + (10 * 24 * 60 * 60 * 1000));`: Adds 10 days (in milliseconds) to the current time.
  - `const expires = "expires=" + expirationDate.toUTCString();`: Converts the date to a UTC string suitable for setting in a cookie.
  - ```javascript
    document.cookie = `firstname=${firstname};${expires};path=/`;
    ```
    Sets the `firstname` cookie with the expiration date.
  - ```javascript
    document.cookie = `email=${email};${expires};path=/`;
    ```
    Sets the `email` cookie with the expiration date.
  - `showWelcomeMessageOrForm();`: Calls the `showWelcomeMessageOrForm` function to update the UI.



- **getCookie(name)**: This function retrieves the value of the specified cookie. If the cookie does not exist, it returns an empty string.
  - `const cookies = document.cookie.split('; ');`: Splits the document cookies into an array.
  - `for (let cookie of cookies)`: Loops through each cookie.
  - `const [cookieName, cookieValue] = cookie.split('=');`: Splits each cookie into its name and value.
  - `if (cookieName === name) { return cookieValue; }`: Checks if the cookie name matches the provided name and returns the value.
  - `return '';`: Returns an empty string if the cookie does not exist.

- **showForm()**: This function shows the login form and removes the welcome message if it exists.
  - `const welcomeMessage = document.getElementById('welcome-message');`: Gets the welcome message element.
  - `if (welcomeMessage) { welcomeMessage.remove(); }`: Removes the welcome message if it exists.
  - `document.getElementById('login-form').style.display = 'block';`: Shows the login form.

- **hideForm()**: This function hides the login form.
  - `document.getElementById('login-form').style.display = 'none';`: Hides the login form.

- **deleteCookiesAndShowForm()**: This function deletes the `firstname` and `email` cookies, clears the input fields, and shows the login form.
  - `document.cookie = "firstname=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";`: Deletes the `firstname` cookie.
  - `document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";`: Deletes the `email` cookie.
  - (The specific date of "Thu, 01 Jan 1970 00:00:00 UTC" is used because it is the epoch time (the start of Unix time), which is the earliest possible date in most computer systems. Setting the cookie's expiration date to this time effectively deletes the cookie, as the expiration date is in the past.)
  - `document.getElementById('firstname').value = '';`: Clears the `firstname` input field.
  - `document.getElementById('email').value = '';`: Clears the `email` input field.
  - `showForm();`: Calls the `showForm` function to show the login form.

- **showWelcomeMessageOrForm()**: This function checks if the user is logged in by verifying if the `firstname` and `email` cookies exist. If the user is logged in, it hides the form and displays the welcome message. If the user is not logged in, it shows the form.
  - `const firstname = getCookie('firstname');`: Gets the `firstname` cookie.
  - `const email = getCookie('email');`: Gets the `email` cookie.
  - `if (!firstname || !email) { showForm(); } else { hideForm(); }`: Checks if the cookies exist. If they do not, it shows the form. If they do, it hides the form.
  - `const welcomeMessage = document.createElement('h1');`: Creates an `h1` element for the welcome message.
  - `welcomeMessage.id = 'welcome-message';`: Sets the id of the welcome message element.
  - `welcomeMessage.innerHTML = `Welcome: ${firstname} <span class="logout" onclick="deleteCookiesAndShowForm()">logout</span>`;`: Sets the inner HTML of the welcome message.
  - `document.body.appendChild(welcomeMessage);`: Appends the welcome message to the body.

### Usage

1. **Start the development server:**
   ```bash
   npm start
   ```
2. **Open your browser** to `http://localhost:8080/3-index.html` and test the functionality:
   - Enter values into the `Firstname` and `Email` input fields.
   - Click the “Log me in” button to set the cookies and display the welcome message.
   - Click the “logout” link to delete the cookies, clear the input fields(not explicitly asked for in the task but included for a polished user experience), and show the login form again.



https://github.com/user-attachments/assets/b8549258-fecf-4b1e-9efe-f7dd672c997c


This video effectively demonstrates the full cycle of logging in, setting cookies, displaying a welcome message, logging out, and verifying the deletion of cookies.

**Video Demonstration of Functionality and Usage**

1. **Initial Login:**
   - Enters `Pugster` in the `Firstname` input field.
   - Enters `Pugster@pugmail.com` in the `Email` input field.
   - Click the `Log me in` button.
   - The login form is replaced with the message: `Welcome: Pugster (logout)`.

2. **Inspecting Cookies:**
   - Open the browser's Developer Tools (Inspect Tools) to show the cookies set by the application.
   - The cookies `firstname` and `email` are displayed with the values `Pugster` and `Pugster@pugmail.com` respectively, confirming they were successfully set.

3. **Logout:**
   - Click the `logout` link.
   - The `firstname` and `email` cookies are deleted.
   - The login form is displayed again.

4. **Verification of Cookie Deletion:**
   - Close the Developer Tools, refresh the page, and open the Developer Tools again.
   - The absence of the `firstname` and `email` cookies confirms they were successfully deleted.

</details>



