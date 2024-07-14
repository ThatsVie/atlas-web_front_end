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


## Task 4: Use js-cookie

<details>
<summary>
The goal of this task is to learn how to use js-cookie for cookie manipulation, enhancing the login functionality with a third-party library. Task 4 accomplishes the same functionality as Task 3 but uses the js-cookie library to manage cookies more efficiently.</summary>


### Task Details
Reusing the code from the previous task:
   - Add js-cookie to your HTML page using the jsdelivr CDN.
   - Delete the `getCookie` function and use js-cookie's `get` function instead.
   - Use js-cookie's `remove` function within the `deleteCookiesAndShowForm` function.
   - Use js-cookie's `set` function within a new function `setCookiesAndShowWelcomeMessage` that sets cookies and calls `showWelcomeMessageOrForm`.
   - **Requirements**:
     - Access your code with `http://localhost:8080/4-index.html`
     - Build the Welcome message with JavaScript without using HTML
     - Use js-cookie for every cookie manipulation

### Implementation


### `4-index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>4-index.html</title>
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
    <script src="https://cdn.jsdelivr.net/npm/js-cookie@3.0.5/dist/js.cookie.min.js"></script>
</head>
<body onload="showWelcomeMessageOrForm()">
    <div id="login-form">
        <h2>Login to the website</h2>
        <input type="text" id="firstname" placeholder="Firstname">
        <input type="email" id="email" placeholder="Email">
        <button onclick="setCookiesAndShowWelcomeMessage()">Log me in</button>
    </div>

    <script>
        function setCookiesAndShowWelcomeMessage() {
            const firstname = document.getElementById('firstname').value;
            const email = document.getElementById('email').value;
            
            Cookies.set('firstname', firstname, { expires: 10, path: '/' });
            Cookies.set('email', email, { expires: 10, path: '/' });
            
            showWelcomeMessageOrForm();
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
            Cookies.remove('firstname', { path: '/' });
            Cookies.remove('email', { path: '/' });
            document.getElementById('firstname').value = '';
            document.getElementById('email').value = '';
            showForm();
        }

        function showWelcomeMessageOrForm() {
            const firstname = Cookies.get('firstname');
            const email = Cookies.get('email');

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

- **setCookiesAndShowWelcomeMessage()**: This new function uses js-cookie's `set` function to set the cookies for `firstname` and `email` with an expiration date of 10 days and then calls `showWelcomeMessageOrForm` to update the UI.
  - `Cookies.set('firstname', firstname, { expires: 10, path: '/' });`: Sets the `firstname` cookie with the expiration date and path.
  - `Cookies.set('email', email, { expires: 10, path: '/' });`: Sets the `email` cookie with the expiration date and path.

- **showForm()**: This function shows the login form and removes the welcome message if it exists.
  - `const welcomeMessage = document.getElementById('welcome-message');`: Gets the welcome message element.
  - `if (welcomeMessage) { welcomeMessage.remove(); }`: Removes the welcome message if it exists.
  - `document.getElementById('login-form').style.display = 'block';`: Shows the login form.

- **hideForm()**: This function hides the login form.
  - `document.getElementById('login-form').style.display = 'none';`: Hides the login form.

- **deleteCookiesAndShowForm()**: This function uses js-cookie's `remove` function to delete the `firstname` and `email` cookies, clears the input fields, and shows the login form.
  - `Cookies.remove('firstname', { path: '/' });`: Deletes the `firstname` cookie.
  - `Cookies.remove('email', { path: '/' });`: Deletes the `email` cookie.
  - `document.getElementById('firstname').value = '';`: Clears the `firstname` input field.
  - `document.getElementById('email').value = '';`: Clears the `email` input field.
  - `showForm();`: Calls the `showForm` function to show the login form.

- **showWelcomeMessageOrForm()**: This function checks if the user is logged in by verifying if the `firstname` and `email` cookies exist using js-cookie's `get` function. If the user is logged in, it hides the form and displays the welcome message. If the user is not logged in, it shows the form.
  - `const firstname = Cookies.get('firstname');`: Gets the `firstname` cookie.
  - `const email = Cookies.get('email');`: Gets the `email` cookie.
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
2. **Open your browser** to `http://localhost:8080/4-index.html` and test the functionality:
   - Enter values into the `Firstname` and `Email` input fields.
   - Click the “Log me in” button to set the cookies using js-cookie and display the welcome message.
   - Click the “logout” link to delete the cookies using js-cookie, clear the input fields, and show the login form again.


https://github.com/user-attachments/assets/b76f5f6b-6556-4409-8a78-3aab9c2cdd0a

</details>

## Task 5: Local Storage

<details>
<summary>
The goal of this task is to have a fully functional shopping cart that uses local storage to add cart items.  Creative freedom was used  to include additional features to clear the cart and enhanced styling for a better user experience.</summary>

### Task Details
In this task, we built a basic shopping cart using local storage.
 We added the following features:
- Created an array `availableItems` containing all the available items: Shampoo, Soap, Sponge, and Water.
- Checked if local storage is enabled in the browser. If not, displayed an alert with the message "Sorry, your browser does not support Web storage. Try again with a better one."
- If local storage is available, displayed the application and called the functions `createStore` and `displayCart`.

### Functions Implemented

1. **addItemToCart(item)**:
   - Takes one argument `item` (string).
   - Adds a key to the local storage with the name of the item and sets the value to `true`.

2. **createStore()**:
   - Creates a `ul` and appends it to the DOM.
   - Loops through the array of items and creates a list item to add to the `ul`.
   - The item displays the name of the available product.
   - On click, the item calls the function `addItemToCart`.

3. **displayCart()**:
   - If the local storage does not contain any items, this function does nothing.
   - If the local storage contains any items, it displays the message "You previously had X items in your cart" in a `p` element that is appended to the body.

### Additional Features

1. **Clear Cart Button**:
   - Added a button with the text "Clear Cart" that calls the function `clearCart`.
   - The `clearCart` function removes all items from the local storage and updates the cart display.
   - The purpose of this addition is to provide users with an easy way to clear their cart and reset the application.

2. **Enhanced Styling**:
   - Applied a vibrant and bold color scheme to make the interface more visually appealing.
   - Ensured high contrast and accessibility by using colors that stand out and are easy to read.
   - The purpose of these styling additions is to improve the user experience and make the application more modern and attractive.

### Implementation

Create an HTML file named `5-index.html`:

### `5-index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>5-index.html</title>
    <style>
        body {
            margin: 20px;
            font-family: 'Lato', sans-serif;
            background-color: #f0f0f0;
            color: #2f4f4f;
        }
        h1 {
            color: #ff6347;
            font-size: 2rem;
        }
        ul {
            list-style-type: none;
            padding: 0;
        }
        li {
            cursor: pointer;
            margin: 5px 0;
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
            background-color: #fff;
            transition: background-color 0.3s, box-shadow 0.3s;
        }
        li:hover, li:focus {
            background-color: #ffd700;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            outline: none;
        }
        .clear-cart {
            margin-top: 20px;
            padding: 15px;
            border: 1px solid #4682b4;
            background-color: #4682b4;
            border-radius: 5px;
            color: white;
            cursor: pointer;
            transition: background-color 0.3s, box-shadow 0.3s;
            font-size: 1rem;
        }
        .clear-cart:hover, .clear-cart:focus {
            background-color: #2c5d8a;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            outline: none;
        }
        p {
            margin-top: 20px;
            font-size: 1rem;
            background-color: #ff6347;
            color: white;
            padding: 15px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        @media (prefers-reduced-motion: no-preference) {
            * {
                scroll-behavior: smooth;
            }
        }
        @media (max-width: 600px) {
            body {
                margin: 10px;
            }
            h1 {
                font-size: 1.5rem;
            }
            li, .clear-cart, p {
                font-size: 0.9rem;
                padding: 10px;
            }
        }
    </style>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap">
</head>
<body>
    <h1>Shopping Cart</h1>
    <script>
        const availableItems = ["Shampoo", "Soap", "Sponge", "Water"];

        if (typeof(Storage) === "undefined") {
            alert("Sorry, your browser does not support Web storage. Try again with a better one.");
        } else {
            createStore();
            displayCart();
        }

        function addItemToCart(item) {
            localStorage.setItem(item, true);
            displayCart();
        }

        function createStore() {
            const ul = document.createElement('ul');
            document.body.appendChild(ul);
            availableItems.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                li.setAttribute('tabindex', '0');
                li.onclick = () => addItemToCart(item);
                li.onkeypress = (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        addItemToCart(item);
                    }
                };
                ul.appendChild(li);
            });

            const clearCartButton = document.createElement('button');
            clearCartButton.textContent = "Clear Cart";
            clearCartButton.className = "clear-cart";
            clearCartButton.onclick = clearCart;
            clearCartButton.setAttribute('tabindex', '0');
            document.body.appendChild(clearCartButton);
        }

        function displayCart() {
            const itemsInCart = Object.keys(localStorage).filter(key => availableItems.includes(key));
            const existingMessage = document.getElementById('cart-message');
            if (existingMessage) {
                existingMessage.remove();
            }
            if (itemsInCart.length === 0) return;

            const p = document.createElement('p');
            p.id = 'cart-message';
            p.textContent = `You previously had ${itemsInCart.length} items in your cart`;
            document.body.appendChild(p);
        }

        function clearCart() {
            availableItems.forEach(item => {
                localStorage.removeItem(item);
            });
            displayCart();
        }
    </script>
</body>
</html>
```

### Summary of Accessibility and Responsiveness Features

#### Media Queries for Accessibility and Responsiveness

1. **Reduced Motion Preference**:
   - **CSS Rule**: `@media (prefers-reduced-motion: no-preference)`
   - **Effect**: Applies smooth scrolling behavior when users have not indicated a preference for reduced motion.
   - **Purpose**: Enhances accessibility by respecting user preferences, preventing discomfort for users with vestibular disorders who are sensitive to motion and animation.

2. **Smaller Screen Adjustments**:
   - **CSS Rule**: `@media (max-width: 600px)`
   - **Effects**:
     - **Body Margin**: Reduced to `10px` to utilize more screen space.
     - **Heading Font Size**: Reduced to `1.5rem` to prevent text from being too large on small screens.
     - **List Items, Clear Cart Button, and Paragraph**: Font size reduced to `0.9rem` and padding to `10px` for better fit and readability.
   - **Purpose**: Ensures the application is responsive, providing an optimal user experience on mobile devices.

#### Additional Accessibility Features

1. **High Contrast Colors**:
   - **Text Color**: Dark slate gray (`#2f4f4f`) ensures good readability against the light gray background (`#f0f0f0`).
   - **Hover and Focus States**: Clear and distinct colors for interactive elements to ensure they are easily noticeable.

2. **Keyboard Accessibility**:
   - **Tabindex**: Added `tabindex="0"` to interactive elements like list items and buttons, making them focusable.
   - **Keypress Events**: Added keypress event handlers to ensure list items can be activated using the Enter or Space keys.

3. **Clear Focus Styles**:
   - **Focus States**: Applied clear styles for when elements are focused, ensuring users can easily navigate using the keyboard.

4. **Responsive Design**:
   - **Media Queries**: Adjustments for smaller screens to ensure the interface remains user-friendly and readable on mobile devices.

5. **Font Selection**:
   - **Modern Font**: Used 'Lato', a clean and modern sans-serif font that improves readability.

### Usage

1. **Start the development server:**
   ```bash
   npm start
   ```
2. **Open your browser** to `http://localhost:8080/5-index.html` and test the functionality:
   - **DevTools Setup**:
     - Open the browser's Developer Toolsgit.
     - Navigate to the **Application** tab.
     - In the left sidebar, under **Storage**, click on **Local Storage**.
     - Select `http://localhost:8080` to view the local storage for the page.
   - **Interacting with the Shopping Cart**:
     - You should see a list of available items (Shampoo, Soap, Sponge, Water).
     - Click on an item to add it to the cart. Observe the local storage updating with the item.
     - Refresh the page to see the message "You previously had X items in your cart" and confirm the items are still in local storage.
     - Open a new tab and navigate to `http://localhost:8080/5-index.html` to see the same message, confirming the persistence of local storage.
     - Click the "Clear Cart" button to remove all items from the cart and observe local storage being cleared.
     - Refresh the page to confirm the cart is empty and local storage remains cleared.



https://github.com/user-attachments/assets/1a6ad24f-7448-413c-b20e-eb5fceab1d08



</details>


## Task 6: Session Storage

<details>
<summary>
In this task we transitioned the shopping cart application from using local storage to session storage. The goal is to ensure that the cart data persists only for the duration of the browser session, demonstrating the use of session storage which clears data when the session ends, unlike local storage which persists data across sessions.</summary>


### Task Details
In this task, we replaced the use of local storage with session storage in our shopping cart application. Session storage keeps data for the duration of the page session and does not persist across tabs or windows.

### Functions Implemented

1. **addItemToCart(item)**:
   - Takes one argument `item` (string).
   - Adds a key to the session storage with the name of the item and sets the value to `true`.

2. **createStore()**:
   - Creates a `ul` and appends it to the DOM.
   - Loops through the array of items and creates a list item to add to the `ul`.
   - The item displays the name of the available product.
   - On click, the item calls the function `addItemToCart`.

3. **displayCart()**:
   - If the session storage does not contain any items, this function does nothing.
   - If the session storage contains any items, it displays the message "You previously had X items in your cart" in a `p` element that is appended to the body.

4. **clearCart()**:
   - Removes all items from session storage and updates the cart display.


### Implementation

### `6-index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>6-index.html</title>
    <style>
        body {
            margin: 20px;
            font-family: 'Lato', sans-serif;
            background-color: #f0f0f0;
            color: #2f4f4f;
        }
        h1 {
            color: #ff6347;
            font-size: 2rem;
        }
        ul {
            list-style-type: none;
            padding: 0;
        }
        li {
            cursor: pointer;
            margin: 5px 0;
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
            background-color: #fff;
            transition: background-color 0.3s, box-shadow 0.3s;
        }
        li:hover, li:focus {
            background-color: #ffd700;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            outline: none;
        }
        .clear-cart {
            margin-top: 20px;
            padding: 15px;
            border: 1px solid #4682b4;
            background-color: #4682b4;
            border-radius: 5px;
            color: white;
            cursor: pointer;
            transition: background-color 0.3s, box-shadow 0.3s;
            font-size: 1rem;
        }
        .clear-cart:hover, .clear-cart:focus {
            background-color: #2c5d8a; /* Darker shade of blue */
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            outline: none;
        }
        p {
            margin-top: 20px;
            font-size: 1rem;
            background-color: #ff6347;
            color: white;
            padding: 15px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        @media (prefers-reduced-motion: no-preference) {
            * {
                scroll-behavior: smooth;
            }
        }
        @media (max-width: 600px) {
            body {
                margin: 10px;
            }
            h1 {
                font-size: 1.5rem;
            }
            li, .clear-cart, p {
                font-size: 0.9rem;
                padding: 10px;
            }
        }
    </style>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap">
</head>
<body>
    <h1>Shopping Cart</h1>
    <script>
        const availableItems = ["Shampoo", "Soap", "Sponge", "Water"];

        if (typeof(Storage) === "undefined") {
            alert("Sorry, your browser does not support Web storage. Try again with a better one.");
        } else {
            createStore();
            displayCart();
        }

        function addItemToCart(item) {
            sessionStorage.setItem(item, true);
            displayCart();
        }

        function createStore() {
            const ul = document.createElement('ul');
            document.body.appendChild(ul);
            availableItems.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                li.setAttribute('tabindex', '0');
                li.onclick = () => addItemToCart(item);
                li.onkeypress = (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        addItemToCart(item);
                    }
                };
                ul.appendChild(li);
            });

            const clearCartButton = document.createElement('button');
            clearCartButton.textContent = "Clear Cart";
            clearCartButton.className = "clear-cart";
            clearCartButton.onclick = clearCart;
            clearCartButton.setAttribute('tabindex', '0');
            document.body.appendChild(clearCartButton);
        }

        function displayCart() {
            const itemsInCart = Object.keys(sessionStorage).filter(key => availableItems.includes(key));
            const existingMessage = document.getElementById('cart-message');
            if (existingMessage) {
                existingMessage.remove();
            }
            if (itemsInCart.length === 0) return;

            const p = document.createElement('p');
            p.id = 'cart-message';
            p.textContent = `You previously had ${itemsInCart.length} items in your cart`;
            document.body.appendChild(p);
        }

        function clearCart() {
            availableItems.forEach(item => {
                sessionStorage.removeItem(item);
            });
            displayCart();
        }
    </script>
</body>
</html>
```

### Explanation

- **Session Storage**: Unlike local storage, session storage data is only available for the duration of the page session. This means that data persists across page reloads but not across different tabs or windows.
- **Transition from Local Storage**: The code changes involve replacing `localStorage` methods with `sessionStorage` methods to meet the task requirements.

### Usage

1. **Start the development server:**
   ```bash
   npm start
   ```
2. **Open your browser** to `http://localhost:8080/6-index.html` and test the functionality:
   - **DevTools Setup**:
     - Open the browser's Developer Tools (usually by pressing `F12` or `Ctrl+Shift+I`).
     - Navigate to the **Application** tab.
     - In the left sidebar, under **Storage**, click on **Session Storage**.
     - Select `http://localhost:8080` to view the session storage for the page.
   - **Interacting with the Shopping Cart**:
     - You should see a list of available items (Shampoo, Soap, Sponge, Water).
     - Click on an item to add it to the cart. Observe the session storage updating with the item.
     - Refresh the page to see the message "You previously had X items in your cart" and confirm the items are still in session storage.
     - Open a new tab and navigate to `http://localhost:8080/6-index.html` to see that the session storage does not persist, and no items are shown in the cart.
     - Click the "Clear Cart" button to remove all items from the cart and observe session storage being cleared.
     - Refresh the page to confirm the cart is empty and session storage remains cleared.



</details>