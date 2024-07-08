
![puggy_with_jquery_banner](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/ece2e7fc-1c10-4b87-a76a-7369748fbce7)

## Resources

- [jQuery Releases](https://releases.jquery.com/)
- [jQuery API Documentation](https://api.jquery.com/)
- [JSON Server](https://github.com/typicode/json-server)

## Learning Objectives

### Learn how to load jQuery from a CDN in a page
### Learn the different ways to create DOM elements with jQuery
### Learn how to modify elements
### Learn how to add new elements to a page with different positions
### Learn how to add a click handler on an element
### Learn how to send GET, POST, DELETE or any type of AJAX query with jQuery
### Learn how to create a pagination

## Requirements

- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory

## Tasks and Usage

## Task 0: Setup your dev environment

<details>
<summary>The goal of this task is to load the latest version of jQuery from a CDN and verify that it has been loaded correctly.</summary>

### Task Description
In `0-index.html`:
- Load the latest version of jQuery using their code.jquery.com CDN.
- Use the Slim & minified version of jQuery.
- When the page is being loaded, verify that jQuery is loaded correctly.
- If jQuery is ready to be used, log to the console `jQuery has been loaded correctly`.
- If jQuery has not been loaded properly, log to the console `jQuery has not been loaded correctly`.


### Explanation
- **Loading jQuery from CDN**: The latest slim and minified version of jQuery is loaded from the official jQuery CDN.
- **Verifying jQuery Load**: The script checks if `typeof jQuery` is `undefined` to determine if jQuery has been loaded. If it is, an error message is logged. Otherwise, a success message is logged.
- **Script Type**: The `<script>` tags include `type="application/javascript"` as required.

### How to Test

1. Open the HTML file in a web browser.
2. Open the developer tools console.
3. You should see `jQuery has been loaded correctly` logged in the console.

![Screenshot 2024-07-08 132724](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/5ea62877-b7ba-4028-94a9-d25447e6c444)


</details>

## Task 1: Creating a DOM element

<details>
<summary>The goal of this task is to create and append a DOM element using jQuery. </summary>

### Task Description
In  `1-index.html`:
- Reuse the template from Task 0.
- Remove the code that verifies jQuery loaded and logs messages to the console.
- Create a function named `createTextElement`:
  - Within the function, create a `<p>` HTML element.
  - The paragraph should display the provided text.
  - Add the paragraph to the body of the page.
  - Call the `createTextElement` function.


### Explanation
- **Loading jQuery from CDN**: The latest slim and minified version of jQuery is loaded from the official jQuery CDN.
- **Creating and Appending Paragraph**:
  - The `createTextElement` function creates a `<p>` element containing the provided text using jQuery.
  - The paragraph is appended to the body of the page using the `append` method.
- **Calling the Function**: The `createTextElement` function is called when the document is ready, ensuring the DOM is fully loaded before executing the script.

### How to Test

1. Open the HTML file in a web browser.
2. You should see a paragraph with the provided text displayed on the page.

![Screenshot 2024-07-08 134155](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/f0eb1006-971c-4845-a973-c4102e2a83a9)


</details>


## Task 2: Creating multiple DOM elements at once

<details>
<summary>The goal of this task is to create and append multiple DOM elements at once using jQuery.</summary>

### Task Description
In `2-index.html`:
- Reuse the template from Task 1.
- Remove the function `createTextElement`.
- Create a function named `createFamilyTree`:
  - It should create a `<table>` element.
  - The head of the table should display "Firstname" and "Lastname" in two cells.
  - The body of the table should have three rows:
    - The first row should contain two cells with "Guillaume" and "Salva".
    - The second row should contain two cells with "Paulette" and "Salva".
    - The third row should contain two cells with "Antoine" and "Salva".
- Use the keyword `append` only once to attach all the elements of the table to the page.
- Call the `createFamilyTree` function.


### Explanation
- **Loading jQuery from CDN**: The slim and minified version of jQuery is loaded from the official jQuery CDN.
- **Creating and Appending Table**:
  - The `createFamilyTree` function uses template literals to create the entire table structure as a string.
  - The table is appended to the body of the page using the `append` method.
- **Calling the Function**: The `createFamilyTree` function is called when the document is ready, ensuring the table is added to the DOM as soon as the script runs.

### How to Test

1. Open the HTML file in a web browser.
2. You should see a table with the provided structure displayed on the page.

![Screenshot 2024-07-08 142941](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/dce72640-b98b-40a1-9dca-8c833628c5d3)

</details>


## Task 3: Chain DOM elements

<details>
<summary>The goal of this task is to create and append multiple DOM elements using jQuery by chaining methods, without creating any intermediate variables.</summary>

### Task Description
In `3-index.html`:
- Reuse the template and function from Task 2.
- The table should contain the same values as the previous task.
- Create each element one by one using jQuery methods.
- Use the `append` method for each element and the `text` method for the cells.
- Do not create any intermediate variables.
- Call the `createFamilyTree` function.


### Explanation
- **Loading jQuery from CDN**: The slim and minified version of jQuery 3.7.1 is loaded from the official jQuery CDN.
- **Creating and Appending Elements**:
  - The `createFamilyTree` function creates each element one by one using jQuery methods and chaining.
  - It uses the `append` method to add elements to the DOM.
  - The `text` method is used to set the text content of the table cells.
  - The `appendTo` method is used to append the complete table to the body.
- **Calling the Function**: The `createFamilyTree` function is called when the document is ready, ensuring the table is added to the DOM as soon as the script runs.

### How to Test

1. Open the HTML file in a web browser.
2. You should see a table with the provided structure displayed on the page.


![Screenshot 2024-07-08 144411](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/f9f8b078-8ad9-459a-8eae-03a457cfac83)

</details>
