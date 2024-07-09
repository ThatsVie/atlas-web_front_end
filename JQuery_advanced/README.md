
![puggy_with_jquery_banner](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/ece2e7fc-1c10-4b87-a76a-7369748fbce7)

## Resources

- [jQuery Releases](https://releases.jquery.com/)
- [jQuery API Documentation](https://api.jquery.com/)
- [JSON Server](https://github.com/typicode/json-server)

## Learning Objectives

### Learn how to load jQuery from a CDN in a page
<details>
<summary>
In Task 0, we loaded jQuery from the CDN to ensure we had access to jQuery functions. </summary>

Here's an example from Task 0:

```html
<script src="https://code.jquery.com/jquery-3.7.1.slim.min.js" integrity="sha256-kmHvs0B+OpCW5GVHUNjv9rOmY0IvSIRcf7zGUDTDQM8=" crossorigin="anonymous"></script>

```
<details>

### Learn the different ways to create DOM elements with jQuery

<details>
<summary>Throughout the tasks, we used various methods to create and manipulate DOM elements using jQuery. </summary>

For example, in Task 1, we created a paragraph element and appended it to the body:

```javascript
function createTextElement() {
    const paragraph = $('<p>Lorem ipsum dolor sit amet...</p>');
    $('body').append(paragraph);
}
```

In Task 3, we chained jQuery methods to create and append multiple elements at once:

```javascript
$('<table></table>').append(
    $('<thead></thead>').append(
        $('<tr></tr>').append(
            $('<th></th>').text('Firstname'),
            $('<th></th>').text('Lastname')
        )
    )
).append(
    $('<tbody></tbody>').append(
        $('<tr></tr>').append(
            $('<td></td>').text('Guillaume'),
            $('<td></td>').text('Salva')
        ),
        $('<tr></tr>').append(
            $('<td></td>').text('Paulette'),
            $('<td></td>').text('Salva')
        ),
        $('<tr></tr>').append(
            $('<td></td>').text('Antoine'),
            $('<td></td>').text('Salva')
        )
    )
).appendTo('body');
```
</details>

### Learn how to modify elements

<details>
<summary>We modified elements in several tasks. </summary>

For example, in Task 6, we used `.val()` to get and set values of form elements, and `.css()` to modify the styles:

```javascript
$('input:last').click(function () {
    const firstName = $('input:first').val();
    const lastName = $('input:nth-of-type(2)').val();
    addNewMember(firstName, lastName, 'after');
});
```
</details>


### Learn how to add new elements to a page with different positions

<details>
<summary>In Task 6, we used `prepend` and `append` to add new rows to a table at different positions based on user input </summary>

```javascript
function addNewMember(firstName, lastName, position) {
    const newRow = $('<tr></tr>').append(
        $('<td></td>').text(firstName),
        $('<td></td>').text(lastName),
        $('<td></td>').text('(x)').css('background-color', 'orange').click(function() {
            $(this).parent().remove();
        })
    );
    if (position === 'before') {
        $('tbody').prepend(newRow);
    } else {
        $('tbody').append(newRow);
    }
}
```
</details>

### Learn how to add a click handler on an element

<details>
<summary>We added click handlers in multiple tasks. </summary>

In Task 5, we added a click handler to the third cell of each row to remove the row when clicked:

```javascript
$('td:last').click(function() {
    $(this).parent().remove();
});
```

In Task 12, we added a click handler to delete posts:

```javascript
$(`#row-${data.id} .delete`).click(function() {
    deletePost(data.id);
});
```
</details>

### Learn how to send GET, POST, DELETE or any type of AJAX query with jQuery

<details>
<summary>We used AJAX methods in multiple tasks </summary>

- **GET**: In Task 10, to list posts from the server:

    ```javascript
    $.get('http://localhost:3000/posts', function(response) {
        response.forEach(post => {
            addPostRow(post);
        });
    }).fail(function() {
        alert('Server Error');
    });
    ```

- **POST**: In Task 11, to send new posts to the server:

    ```javascript
    $.post('http://localhost:3000/posts', data, function(response) {
        addPostRow(response);
    }).fail(function() {
        alert('Error sending the POST query');
    });
    ```

- **DELETE**: In Task 12, to delete posts from the server:

    ```javascript
    $.ajax({
        url: `http://localhost:3000/posts/${id}`,
        type: 'DELETE',
        success: function() {
            $(`#row-${id}`).remove();
        },
        error: function() {
            alert('Post was not deleted');
        }
    });
    ```
</details>

### Learn how to create a pagination

<details>
<summary>In Task 8, we implemented pagination by creating a list of page numbers and handling page clicks to fetch the corresponding results. </summary>

```javascript
function buildPagination(numberOfItems, itemsPerPage, currentOffset) {
    const paginationList = $('#pagination');
    paginationList.empty();
    const totalPages = Math.ceil(numberOfItems / itemsPerPage);
    for (let i = 0; i < totalPages; i++) {
        const pageNumber = i + 1;
        const pageOffset = i * itemsPerPage;
        const listItem = $('<li></li>').text(pageNumber).css('cursor', 'pointer').css('margin-left', '10px');
        if (pageOffset === currentOffset) {
            listItem.css('font-weight', 'bold');
        }
        listItem.on('click', function() {
            const searchTerm = $('input[type="text"]').val();
            queryWikipedia(searchTerm, pageOffset);
        });
        paginationList.append(listItem);
    }
}
```
</details>

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

### Requirements

- Make sure your code is in a script of type application/javascript

### Implementation

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>

    <meta charset="utf-8" />
    <title>Task 0</title>
    <script src="https://code.jquery.com/jquery-3.7.1.slim.min.js" integrity="sha256-kmHvs0B+OpCW5GVHUNjv9rOmY0IvSIRcf7zGUDTDQM8=" crossorigin="anonymous"></script>
    <script type="application/javascript">
        if (jQuery === 'undefined') {
            console.log('jQuery has not been loaded correctly');
        } else {
            console.log('jQuery has been loaded correctly');
        }
    </script>

</head>

<body>

</body>

</html>
```

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

### Requirements:

- You must use jQuery only to generate the HTML tag and attach it to the page
- Use the keyword append to attach the element to the page

### Implementation

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <meta charset="utf-8" />
    <title>Task 1</title>
    <script src="https://code.jquery.com/jquery-3.7.1.slim.min.js" integrity="sha256-kmHvs0B+OpCW5GVHUNjv9rOmY0IvSIRcf7zGUDTDQM8=" crossorigin="anonymous"></script>
</head>

<body>
    <script type="application/javascript">
        function createTextElement() {
            const paragraph = $('<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in diam risus. Nunc sit amet euismod ipsum. Aenean tempus ex sed est volutpat, sed sodales velit tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin auctor sollicitudin eleifend. Vivamus porta enim vitae mauris commodo, vitae tempor tellus elementum. Quisque sed pellentesque nulla, at eleifend nisi. Phasellus eget tincidunt ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>');
            $('body').append(paragraph);
        }

        $(document).ready(function() {
            createTextElement();
        });
    </script>
</body>

</html>
```

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

### Requirements:

- You must use jQuery only to generate the HTML tag and attach it to the page
- The entire table code should be contained in one string

### Implementation

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <meta charset="utf-8" />
    <title>Task 2</title>
    <script src="https://code.jquery.com/jquery-3.7.1.slim.min.js" integrity="sha256-kmHvs0B+OpCW5GVHUNjv9rOmY0IvSIRcf7zGUDTDQM8=" crossorigin="anonymous"></script>
</head>

<body>

    <script type="application/javascript">
        function createFamilyTree() {
            $('body').append(`
            <table>
                <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Guillaume</td>
                        <td>Salva</td>
                    </tr>
                    <tr>
                        <td>Paulette</td>
                        <td>Salva</td>
                    </tr>
                    <tr>
                        <td>Antoine</td>
                        <td>Salva</td>
                    </tr>
                </tbody>
            </table>`);
        }

        $(document).ready(function() {
            createFamilyTree();
        });
    </script>

</body>

</html>
```

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

### Requirements:

- You must use jQuery only to generate the HTML tag and attach it to the page

### Implementation

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <meta charset="utf-8" />
    <title>Task 3</title>
    <script src="https://code.jquery.com/jquery-3.7.1.slim.min.js" integrity="sha256-kmHvs0B+OpCW5GVHUNjv9rOmY0IvSIRcf7zGUDTDQM8=" crossorigin="anonymous"></script>
</head>

<body>

    <script type="application/javascript">
        function createFamilyTree() {
            $('<table></table>').append(
                $('<thead></thead>').append(
                    $('<tr></tr>').append(
                        $('<th></th>').text('Firstname'),
                        $('<th></th>').text('Lastname')
                    )
                )
            ).append(
                $('<tbody></tbody>').append(
                    $('<tr></tr>').append(
                        $('<td></td>').text('Guillaume'),
                        $('<td></td>').text('Salva')
                    ),
                    $('<tr></tr>').append(
                        $('<td></td>').text('Paulette'),
                        $('<td></td>').text('Salva')
                    ),
                    $('<tr></tr>').append(
                        $('<td></td>').text('Antoine'),
                        $('<td></td>').text('Salva')
                    )
                )
            ).appendTo('body');
        }

        $(document).ready(function() {
            createFamilyTree();
        });
    </script>

</body>

</html>
```

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

## Task 4: HTML function

<details>
<summary>The goal of this task is to replace the content of a table using jQuery's `html` method. </summary>

### Task Description
In `4-index.html`:
- Reuse the template and function from Task 3.
- Create a new function named `replaceFamilyTree`:
  - It should replace the children of the `tbody` element with a new `tr`.
  - The `tr` element should contain two cells with "Gerard" and "Bonissa".
- Make sure both `createFamilyTree` and `replaceFamilyTree` are called.

### Requirements:

- You must use the keyword html to replace the content of the table

### Implementation
The implementation of the task is as follows:

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <meta charset="utf-8" />
    <title>Task 4</title>
    <script src="https://code.jquery.com/jquery-3.7.1.slim.min.js" integrity="sha256-kmHvs0B+OpCW5GVHUNjv9rOmY0IvSIRcf7zGUDTDQM8=" crossorigin="anonymous"></script>
</head>

<body>

    <script type="application/javascript">
        function createFamilyTree() {
            $('<table></table>').append(
                $('<thead></thead>').append(
                    $('<tr></tr>').append(
                        $('<th></th>').text('Firstname'),
                        $('<th></th>').text('Lastname')
                    )
                )
            ).append(
                $('<tbody></tbody>').append(
                    $('<tr></tr>').append(
                        $('<td></td>').text('Guillaume'),
                        $('<td></td>').text('Salva')
                    ),
                    $('<tr></tr>').append(
                        $('<td></td>').text('Paulette'),
                        $('<td></td>').text('Salva')
                    ),
                    $('<tr></tr>').append(
                        $('<td></td>').text('Antoine'),
                        $('<td></td>').text('Salva')
                    )
                )
            ).appendTo('body');
        }

        function replaceFamilyTree() {
            $('tbody').html(
                $('<tr></tr>').append(
                    $('<td></td>').text('Gerard'),
                    $('<td></td>').text('Bonissa')
                )
            );
        }

        $(document).ready(function() {
            createFamilyTree();
            replaceFamilyTree();
        });
    </script>

</body>

</html>
```

### Explanation
- **Loading jQuery from CDN**: The slim and minified version of jQuery 3.7.1 is loaded from the official jQuery CDN.
- **Creating and Appending Elements**:
  - The `createFamilyTree` function creates each element one by one using jQuery methods and chaining.
  - The `replaceFamilyTree` function replaces the children of the `tbody` element with a new row containing "Gerard" and "Bonissa".
  - The `html` method is used to replace the content of the `tbody`.
- **Calling the Functions**: Both `createFamilyTree` and `replaceFamilyTree` functions are called when the document is ready, ensuring the table is created and then modified as soon as the script runs.

### How to Test

1. Open the HTML file in a web browser.
2. You should see a table with the provided structure displayed on the page.

</details>

## Task 5: Click attribute and remove function

<details>
<summary>The goal of this task is to create a table and dynamically add rows with the ability to remove rows on click, using jQuery.</summary>

### Task Description

In `5-index.html`:
- Reuse the template from Task 4.
- Remove the `createFamilyTree` and `replaceFamilyTree` functions.
- Create a new function `createFamilyTree`:
  - It should append an empty table to the body, with a `thead` and two cells with text "Firstname" and "Lastname".
  - It should append an empty `tbody` element to the table after the `thead`.
- Create a new function `addNewMember`:
  - It accepts two arguments: `firstName` (string) and `lastName` (string).
  - It appends a new row to the body of the table with three cells.
  - The first cell displays the `firstName`, the second cell displays the `lastName`.
  - The third cell displays `(x)`.
  - On click on the third cell, it should remove the row.
  - Add CSS to the third cell to have an orange background.
- Call the function `createFamilyTree`.
- Using `addNewMember`, generate a fake table with:
  - The first row: Guillaume, Salva
  - The second row: Arielle, Snizt
  - The third row: Fanette, Snizt
  - The fourth row: Gerard, Snizt
  - The fifth row: Victor, Salva

### Requirements:

- You must use the keywords click, css, and remove

### Implementation

The implementation of the task is as follows:


```html
<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <meta charset="utf-8" />
    <title>Task 5</title>
    <script src="https://code.jquery.com/jquery-3.7.1.slim.min.js" integrity="sha256-kmHvs0B+OpCW5GVHUNjv9rOmY0IvSIRcf7zGUDTDQM8=" crossorigin="anonymous"></script>
</head>

<body>

    <script type="application/javascript">
        function createFamilyTree() {
            $('<table></table>').append(
                $('<thead></thead>').append(
                    $('<tr></tr>').append(
                        $('<th></th>').text('Firstname'),
                        $('<th></th>').text('Lastname')
                    )
                ),
                $('<tbody></tbody>')
            ).appendTo('body');
        }

        function addNewMember(firstName, lastName) {
            const row = $('<tr></tr>').append(
                $('<td></td>').text(firstName),
                $('<td></td>').text(lastName),
                $('<td></td>').text('(x)').css('background-color', 'orange').click(function() {
                    $(this).parent().remove();
                })
            );
            $('tbody').append(row);
        }

        $(document).ready(function() {
            createFamilyTree();
            addNewMember('Guillaume', 'Salva');
            addNewMember('Arielle', 'Snizt');
            addNewMember('Fanette', 'Snizt');
            addNewMember('Gerard', 'Snizt');
            addNewMember('Victor', 'Salva');
        });
    </script>

</body>

</html>

```

### Explanation
- **Loading jQuery from CDN**: The slim and minified version of jQuery 3.7.1 is loaded from the official jQuery CDN.
- **Creating the Table**:
  - The `createFamilyTree` function appends an empty table with a `thead` containing "Firstname" and "Lastname" cells, and an empty `tbody` after the `thead`.
- **Adding New Members**:
  - The `addNewMember` function appends a new row to the table with three cells for the `firstName`, `lastName`, and a remove button `(x)`.
  - The remove button is styled with an orange background using `css` and removes the row on click using the `click` and `remove` methods.
- **Generating the Fake Table**: The `addNewMember` function is called with the provided names to populate the table.

### How to Test

1. Open the HTML file in a web browser.
2. You should see a table with the provided structure and functionality

</details>

## Task 6: Val, before, and prepend functions
<details>
<summary>The goal of this task is to create a form to add rows to a table with the ability to position the new rows either at the top or bottom, and to remove rows on click, using jQuery.</summary>

### Task Description
In `6-index.html`:
- Reuse the template from Task 5.
- Reuse the `createFamilyTree` function from Task 5.
- Reuse the `addNewMember` function from Task 5 and modify it:
  - Add a new argument `position` (string).
  - When `position` is equal to `before`, it should add the row at the top of the table.
  - Otherwise, it should add the row at the bottom of the table.
- Write a new function `createForm`:
  - It should add two text input fields before the table.
  - It should add a select element with two options: `before` and `after`, with corresponding "Before" and "After" text.
  - It should add a submit input element.
  - When the user clicks on submit, it should call the `addNewMember` function with the values of the two inputs and the value of the select element.
- Call the `createFamilyTree` and `createForm` functions.

### Requirements:

- You must use the keywords first, before, and prepend
- To select the second input, use the nth-of-type selector

### Implementation
The implementation of the task is as follows:

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <meta charset="utf-8" />
    <title>Task 6</title>
    <script src="https://code.jquery.com/jquery-3.7.1.slim.min.js" integrity="sha256-kmHvs0B+OpCW5GVHUNjv9rOmY0IvSIRcf7zGUDTDQM8=" crossorigin="anonymous"></script>
</head>

<body>

    <script type="application/javascript">
        function createFamilyTree() {
            $('<table></table>').append(
                $('<thead></thead>').append(
                    $('<tr></tr>').append(
                        $('<th></th>').text('Firstname'),
                        $('<th></th>').text('Lastname')
                    )
                ),
                $('<tbody></tbody>')
            ).appendTo('body');
        }

        function addNewMember(firstName, lastName, position) {
            const row = $('<tr></tr>').append(
                $('<td></td>').text(firstName),
                $('<td></td>').text(lastName),
                $('<td></td>').text('(x)').css('background-color', 'orange').click(function() {
                    $(this).parent().remove();
                })
            );
            if (position === 'before') {
                $('tbody').prepend(row);
            } else {
                $('tbody').append(row);
            }
        }

        function createForm() {
            const form = $('<form></form>').append(
                $('<input type="text" placeholder="First name">'),
                $('<input type="text" placeholder="Last name">'),
                $('<select></select>').append(
                    $('<option value="before">Before</option>'),
                    $('<option value="after">After</option>')
                ),
                $('<input type="submit" value="Submit">')
            );
            form.on('submit', function(event) {
                event.preventDefault();
                const firstName = $(this).find('input:first-of-type').val();
                const lastName = $(this).find('input:nth-of-type(2)').val();
                const position = $(this).find('select').val();
                addNewMember(firstName, lastName, position);
            });
            $('table').before(form);
        }

        $(document).ready(function() {
            createFamilyTree();
            createForm();
        });
    </script>

</body>

</html>
```

### Explanation
- **createFamilyTree function**: Creates a table with `thead` and `tbody`.
- **addNewMember function**: Adds a new row either at the top (`before`) or at the bottom of the table based on the `position` argument.
- **createForm function**: Adds a form with two text inputs, a select element with options "Before" and "After", and a submit button. When the form is submitted, it calls `addNewMember` with the values from the inputs and select element.
- **Form Elements**: Uses `first`, `before`, and `nth-of-type` selectors as required.
- **Initial Setup**: Calls `createFamilyTree` and `createForm` on document ready.

### How to Test

1. Open the HTML file in a web browser.
2. You should see a form and a table with the provided structure and functionality
3. You can use the form to add new members to the table, either at the top or bottom, and verify that the remove functionality works.



</details>


## Task 7: Query - Setup your dev environment

<details>
<summary>The goal of this task is to create a form to search Wikipedia and display the results using jQuery.</summary>

### Task Description
In `7-index.html`:
- Reuse the template from Task 6.
- Remove the functions from the script.
- Import jQuery using the CDN and make sure you can access the AJAX methods.
- Create a form:
  - Create a function `createSearchForm`, it should append to the body:
    - An empty input of type text without ID, name, or class.
    - An input of type submit.
    - When the user clicks on the submit button, it should query the function `queryWikipedia` with the value of the text input.
    - An empty `ul` element.
- Create a function `addNewArticle` to add new items to a list:
  - It accepts three arguments `id` (string), `title` (string), and `snippet` (string).
  - It creates an element `li`.
  - Within the `li`, add two paragraph elements.
  - The first paragraph contains a `span` tag with the following text: `id -`, then a `b` element with the `title`.
  - The second paragraph should contain the `snippet`.
  - Appends the `li` to the `ul` element (created by `createSearchForm`).
- Implement a `get` function: create a function `queryWikipedia`:
  - It accepts one argument `search` (string).
  - Create a data object with attributes required to query a search using the string passed in the argument with Wikipedia.
  - For each result returned by the API, call the function `addNewArticle` with the result’s `pageid`, `title`, and `snippet`.
- Call the function `createSearchForm` when the page loads.

### Requirements:

- Look at the documentation from Wikipedia to query the API https://www.mediawiki.org/wiki/API:Search
- Use the minified only version of jQuery, so you can access the ajax methods
- When adding the snippet, make sure that the HTML coming from Wikipedia is correctly displayed

### Implementation
The implementation of the task is as follows:

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <meta charset="utf-8" />
    <title>Task 7</title>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
</head>

<body>

    <script type="application/javascript">
        function createSearchForm() {
            const form = $('<form></form>').append(
                $('<input type="text">'),
                $('<input type="submit" value="Submit">')
            );
            $('body').append(form, $('<ul></ul>'));
            form.on('submit', function(event) {
                event.preventDefault();
                const searchTerm = $(this).find('input[type="text"]').val();
                queryWikipedia(searchTerm);
            });
        }

        function addNewArticle(id, title, snippet) {
            const listItem = $('<li></li>').append(
                $('<p></p>').html(`<span>${id} - </span><b>${title}</b>`),
                $('<p></p>').html(snippet)
            );
            $('ul').append(listItem);
        }

        function queryWikipedia(search) {
            const url = "https://en.wikipedia.org/w/api.php";
            const data = {
                action: "query",
                list: "search",
                srsearch: search,
                format: "json",
                origin: "*"
            };
            $.ajax({
                url: url,
                data: data,
                success: function(response) {
                    $('ul').empty();
                    response.query.search.forEach(result => {
                        addNewArticle(result.pageid, result.title, result.snippet);
                    });
                },
                error: function() {
                    alert('Error fetching data from Wikipedia');
                }
            });
        }

        $(document).ready(function() {
            createSearchForm();
        });
    </script>

</body>

</html>
```

### Explanation
- **createSearchForm function**: Appends a form with a text input and a submit button to the body, along with an empty `ul` element. Handles form submission to call `queryWikipedia`.
- **addNewArticle function**: Creates a `li` element containing the article's `id`, `title`, and `snippet`. Appends the `li` to the `ul` element.
- **queryWikipedia function**: Constructs the URL with query parameters for the Wikipedia API request. Uses `$.ajax` to fetch data from the Wikipedia API. Processes the API response to extract relevant search results and calls `addNewArticle`.
- **Document Ready**: Calls `createSearchForm` on document ready to ensure the form is created and ready for user interaction.

### How to Test

1. Open the HTML file in a web browser.
2. You should see a form with a text input and a submit button.
3. Enter a search term and click the submit button.
4. The results should be displayed as a list of articles, with each article containing the `id`, `title`, and `snippet`.


</details>


## Task 8: Pagination

<details>
<summary>The goal of this task is to implement pagination functionality to search results from Wikipedia using jQuery. </summary>

### Task Description
In `8-index.html`:
- Reuse the code from Task 7.
- Modify the function `createSearchForm` to append another list with the id `pagination`.
- Modify the function `queryWikipedia`:
  - Add a new parameter named `offset` (number), defaulting to 0.
  - Modify the data object to add the `offset`.
  - When receiving the response from the API, call the function `buildPagination`.
- Create a new function `buildPagination`:
  - Accepts three arguments `numberOfItems` (number), `itemsPerPage` (number), and `currentOffset` (number).
  - Resets the pagination list to an empty tag.
  - Displays the pagination using the total number of items divided by the number of items per page.
  - For each page, creates a list item and adds CSS styles.
  - When clicking on a page number, calls `queryWikipedia` with the right offset.

### Requirements:

Use the `totalhits` value from Wikipedia to define the total number of items
Display 10 items per page
Make sure your pages are displayed in an horizontal line

### Implementation

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <meta charset="utf-8" />
    <title>Task 8</title>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
</head>

<body>

    <script type="application/javascript">
        function createSearchForm() {
            const form = $('<form></form>').append(
                $('<input type="text">'),
                $('<input type="submit" value="Submit">')
            );
            $('body').append(form, $('<ul></ul>'), $('<ul id="pagination"></ul>'));
            form.on('submit', function(event) {
                event.preventDefault();
                const searchTerm = $(this).find('input[type="text"]').val();
                queryWikipedia(searchTerm, 0);
            });
        }

        function addNewArticle(id, title, snippet) {
            const listItem = $('<li></li>').append(
                $('<p></p>').html(`<span>${id} - </span><b>${title}</b>`),
                $('<p></p>').html(snippet)
            );
            $('ul:first').append(listItem);
        }

        function queryWikipedia(search, offset = 0) {
            const url = "https://en.wikipedia.org/w/api.php";
            const data = {
                action: "query",
                list: "search",
                srsearch: search,
                format: "json",
                origin: "*",
                sroffset: offset,
                srlimit: 10
            };
            $.ajax({
                url: url,
                data: data,
                success: function(response) {
                    $('ul:first').empty();
                    response.query.search.forEach(result => {
                        addNewArticle(result.pageid, result.title, result.snippet);
                    });
                    buildPagination(response.query.searchinfo.totalhits, 10, offset);
                },
                error: function() {
                    alert('Error fetching data from Wikipedia');
                }
            });
        }

        function buildPagination(numberOfItems, itemsPerPage, currentOffset) {
            const paginationList = $('#pagination');
            paginationList.empty();
            const totalPages = Math.ceil(numberOfItems / itemsPerPage);
            for (let i = 0; i < totalPages; i++) {
                const pageNumber = i + 1;
                const pageOffset = i * itemsPerPage;
                const listItem = $('<li></li>').text(pageNumber).css({
                    'cursor': 'pointer',
                    'margin-left': '10px'
                });
                if (pageOffset === currentOffset) {
                    listItem.css('font-weight', 'bold');
                }
                listItem.on('click', function() {
                    const searchTerm = $('input[type="text"]').val();
                    queryWikipedia(searchTerm, pageOffset);
                });
                paginationList.append(listItem);
            }
        }

        $(document).ready(function() {
            createSearchForm();
        });
    </script>

    <style>
        #pagination {
            display: flex;
            list-style-type: none;
            padding: 0;
        }
    </style>

</body>

</html>
```

### Explanation
- **createSearchForm function**: Initializes the search form and appends it to the body along with the `searchResults` and `pagination` lists. Handles form submission to call `queryWikipedia` with the search term and an offset of 0.
- **addNewArticle function**: Appends search results to the `searchResults` list. Takes `articleId`, `articleTitle`, and `articleSnippet` as parameters.
- **queryWikipedia function**: Fetches data from the Wikipedia API using `$.ajax`, processes the response, and calls `addNewArticle` and `buildPagination`.
- **buildPagination function**: Creates pagination list items and appends them to the `pagination` list. Styles the current page item with bold font and handles click events to call `queryWikipedia` with the appropriate offset.
- **CSS for Pagination**: 
  - `display: flex`: Ensures the pagination items are displayed in a horizontal line.
  - `list-style-type: none`: Removes the default list style (bullets) from the pagination list.
  - `padding: 0`: Removes default padding from the pagination list.

The CSS is necessary to achieve the horizontal display and styling of the pagination items, as required by the task. It ensures that the pagination items are displayed in a row without default list styling and padding, providing a cleaner and more intuitive user interface.

### How to Test

1. Open the HTML file in a web browser.
2. You should see a form with a text input and a submit button.
3. Enter a search term and click the submit button.
4. The results should be displayed as a list of articles, with pagination links below.
5. Click on pagination links to navigate through pages of search results.



</details>


## Task 9: Wrap/unwrap

<details>
<summary>The goal of this task is to implement a loading effect using the `wrap` and `unwrap` functions of jQuery while querying data from the Wikipedia API.</summary>

### Task Description
In  `9-index.html`:
- Reuse the code from Task 8.
- In the header, add some CSS within the `style` tag:
  - Add a new class named `loading`.
  - Set the opacity to 0.2 within that class.
- Create a function named `displayLoading`:
  - It accepts one argument `loading`.
  - It selects the first `ul` element of the page.
  - If `loading` is `true`, it wraps the element with a `div` tag and the class `loading`.
  - If `loading` is `false`, it unwraps the `ul` from the `div`.
- Modify the `queryWikipedia` function:
  - Call the function `displayLoading` before querying the API.
  - Once the API returns the value, remove the opacity by calling the function again.

### Implementation


```html
<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <meta charset="utf-8" />
    <title>Task 9</title>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <style>
        .loading {
            opacity: 0.2;
        }

        #pagination {
            display: flex;
            list-style-type: none;
            padding: 0;
        }

        #pagination li {
            display: inline-block;
            cursor: pointer;
            margin-left: 10px;
        }

        #pagination li.bold {
            font-weight: bold;
        }
    </style>
</head>

<body>

    <script type="application/javascript">
        function createSearchForm() {
            const form = $('<form></form>').append(
                $('<input type="text">'),
                $('<input type="submit" value="Submit">')
            );
            $('body').append(form, $('<ul></ul>'), $('<ul id="pagination"></ul>'));
            form.on('submit', function(event) {
                event.preventDefault();
                const searchTerm = $(this).find('input[type="text"]').val();
                queryWikipedia(searchTerm, 0);
            });
        }

        function addNewArticle(id, title, snippet) {
            const listItem = $('<li></li>').append(
                $('<p></p>').html(`<span>${id} - </span><b>${title}</b>`),
                $('<p></p>').html(snippet)
            );
            $('ul:first').append(listItem);
        }

        function displayLoading(loading) {
            const firstUl = $('ul:first');
            if (loading) {
                firstUl.wrap('<div class="loading"></div>');
            } else {
                firstUl.unwrap();
            }
        }

        function queryWikipedia(search, offset = 0) {
            const url = "https://en.wikipedia.org/w/api.php";
            const data = {
                action: "query",
                list: "search",
                srsearch: search,
                format: "json",
                origin: "*",
                sroffset: offset,
                srlimit: 10
            };
            displayLoading(true);
            $.ajax({
                url: url,
                data: data,
                success: function(response) {
                    $('ul:first').empty();
                    response.query.search.forEach(result => {
                        addNewArticle(result.pageid, result.title, result.snippet);
                    });
                    buildPagination(response.query.searchinfo.totalhits, 10, offset);
                    displayLoading(false);
                },
                error: function() {
                    alert('Error fetching data from Wikipedia');
                    displayLoading(false);
                }
            });
        }

        function buildPagination(numberOfItems, itemsPerPage, currentOffset) {
            const paginationList = $('#pagination');
            paginationList.empty();
            const totalPages = Math.ceil(numberOfItems / itemsPerPage);
            for (let i = 0; i < totalPages; i++) {
                const pageNumber = i + 1;
                const pageOffset = i * itemsPerPage;
                const listItem = $('<li></li>').text(pageNumber);
                if (pageOffset === currentOffset) {
                    listItem.addClass('bold');
                }
                listItem.on('click', function() {
                    const searchTerm = $('input[type="text"]').val();
                    queryWikipedia(searchTerm, pageOffset);
                });
                paginationList.append(listItem);
            }
        }

        $(document).ready(function() {
            createSearchForm();
        });
    </script>

</body>

</html>
```

### Explanation
- **createSearchForm function**: Initializes the search form and appends it to the body along with the `searchResults` and `pagination` lists. Handles form submission to call `queryWikipedia` with the search term and an offset of 0.
- **addNewArticle function**: Appends search results to the `searchResults` list. Takes `articleId`, `articleTitle`, and `articleSnippet` as parameters.
- **displayLoading function**: Wraps the first `ul` with a `div` and the class `loading` if `loading` is true, otherwise unwraps the `ul`.
- **queryWikipedia function**: Fetches data from the Wikipedia API using `$.ajax`, processes the response, and calls `addNewArticle` and `buildPagination`. Calls `displayLoading` before and after the API request.
- **buildPagination function**: Creates pagination list items and appends them to the `pagination` list. Styles the current page item with bold font and handles click events to call `queryWikipedia` with the appropriate offset.
- **CSS for .loading class**: 
  - `opacity: 0.2`: Sets the opacity to 0.2 for the loading effect.

The CSS adjustments ensure that the pagination items are displayed horizontally.

### How to Test

1. Open the HTML file in a web browser.
2. You should see a form with a text input and a submit button.
3. Enter a search term and click the submit button.
4. The results should be displayed as a list of articles, with pagination links below.
5. While the results are being fetched, the list should be wrapped with a `div` having a class `loading`, reducing the opacity to 0.2.
6. Click on pagination links to navigate through pages of search results.



</details>


## Task 10: Another Get API

<details>
<summary>The goal of this task is to use `json-server` to simulate a REST API and fetch data from it using jQuery's `get` method.</summary>

### Task Description

1. **In 10-index.html`**:
    - Reuse your template from the previous task.
    - Remove the functions in your script and the style in the head.
    - Make sure you import jQuery using the CDN and make sure you can access the ajax methods.

2. **Create a function `addPostRow`**:
    - It takes an argument `data` (object).
    - It appends a paragraph to the body.
    - The paragraph should contain a span element with the text `Post created with id ID, title: TITLE, author: AUTHOR`.
    - Each variable (ID, TITLE, AUTHOR) is contained in the data object.

3. **Create a function named `listPosts`**:
    - It should query your local server on the `posts` endpoint.
    - When the server returns a 200 response, it should call the function `addPostRow` for each element in the response.
    - When the server is unavailable, display an alert with the message `Server Error`.

4. **Call the function `listPosts` when your page loads**.

#### Requirements
- You must use the `get` function from jQuery.

### Setup
1. **Install `json-server`**:
    ```bash
    npm install json-server
    ```
2. **Run the server**:
    ```bash
    json-server --watch db.json
    ```
    This command will start a local server at `http://localhost:3000` serving data from `db.json`.


### db.json Content
Ensure you have the following `db.json` file in your project directory:
```json
{
  "posts": [
    {
      "id": 1,
      "title": "Pug Life",
      "author": "PugLover"
    },
    {
      "id": 2,
      "title": "Adventures of Pug",
      "author": "PugFanatic"
    },
    {
      "id": 3,
      "title": "Pug Tricks",
      "author": "PugTrainer"
    },
    {
      "id": 4,
      "title": "Pug Health Tips",
      "author": "PugVet"
    },
    {
      "id": 5,
      "title": "Pug Food Recipes",
      "author": "PugChef"
    },
    {
      "id": 6,
      "title": "Pug Care Guide",
      "author": "PugGroomer"
    },
    {
      "id": 7,
      "title": "Pug Breeds",
      "author": "PugExpert"
    },
    {
      "id": 8,
      "title": "Pug History",
      "author": "PugHistorian"
    },
    {
      "id": 9,
      "title": "Pug Accessories",
      "author": "PugDesigner"
    },
    {
      "id": 10,
      "title": "Pug Fashion",
      "author": "PugStylist"
    }
  ],
  "comments": [
    {
      "id": 1,
      "body": "Pugs are the best!",
      "postId": 1
    },
    {
      "id": 2,
      "body": "I love this post about pug adventures!",
      "postId": 2
    }
  ],
  "profile": {
    "name": "PugEnthusiast"
  }
}
```

### Implementation

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <meta charset="utf-8" />
    <title>Task 10</title>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
</head>

<body>

    <script type="application/javascript">
        function addPostRow(data) {
            const postParagraph = $('<p></p>').html(
                `<span>Post created with id: ${data.id}, title: ${data.title}, author: ${data.author}</span>`
            );
            $('body').append(postParagraph);
        }

        function listPosts() {
            $.get('http://localhost:3000/posts', function(response) {
                response.forEach(post => {
                    addPostRow(post);
                });
            }).fail(function() {
                alert('Server Error');
            });
        }

        $(document).ready(function() {
            listPosts();
        });
    </script>

</body>

</html>
```

### Explanation
- **addPostRow function**:
  - Takes a data object as an argument.
  - Appends a paragraph to the body containing the post details (ID, title, author) in a span element.
- **listPosts function**:
  - Queries the local server at `http://localhost:3000/posts`.
  - If the server returns a 200 response, it calls `addPostRow` for each element in the response.
  - If the server is unavailable, it displays an alert with the message "Server Error".
- **jQuery get method**:
  - Used to make an AJAX GET request to fetch the posts from the local server.

### How to Test

1. Open the HTML file in a web browser.
2. The page should display a list of pug-related posts fetched from the JSON server running on `http://localhost:3000`.

</details>


## Task 11: Post Query

<details>
<summary>In this task, we reused the template from the previous task to create a form for submitting new posts to a local server using a POST request. The form includes input fields for author and title, and it submits the form without reloading the page. The posts are then displayed on the page. </summary>

### Task Description

1. **Create a new function `buildForm`**:
   - Appends a form element to the body.
   - Inside the form, adds:
     - A div element with a label for author and an input of type text with the id `author`.
     - A div element with a label for title and a textarea with the id `title`.
     - An input of type submit.
   - Binds the submit event to call the function `sendForm`.

2. **Create a new function `sendForm`**:
   - Adds a message after the form indicating that the query is about to be sent to the API.
   - Creates a data object with the title and author attributes, taking values from the input fields.
   - Sends a POST request to the server endpoint `/posts` with the data.
   - If the query succeeds, calls the function `addPostRow` with the response data.
   - If the query fails, displays an alert with the message "Error sending the POST query".

3. **Modify the function `listPosts`**:
   - Queries the local server at the `/posts` endpoint.
   - If the server returns a 200 response, calls `addPostRow` for each element in the response.
   - If the server is unavailable, displays an alert with the message "Server Error".

4. **Create a function `addPostRow`**:
   - Takes a data object as an argument.
   - Appends a paragraph to the body containing the post details (ID, title, author) in a span element.

5. **Call the functions `listPosts` and `buildForm` when the page loads**.

### Requirements
- When clicking on the label, the input text should be selected by the browser.
- When pressing enter on the input text, the form should be submitted without reloading the page.
- You must use the `after` function from jQuery.

### Implementation
```html
<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <meta charset="utf-8" />
    <title>Task 11</title>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
</head>

<body>

    <script type="application/javascript">
        function addPostRow(data) {
            const postParagraph = $('<p></p>').html(
                `<span>Post created with id: ${data.id}, title: ${data.title}, author: ${data.author}</span>`
            );
            $('body').append(postParagraph);
        }

        function listPosts() {
            $.get('http://localhost:3000/posts', function(response) {
                response.forEach(post => {
                    addPostRow(post);
                });
            }).fail(function() {
                alert('Server Error');
            });
        }

        function buildForm() {
            const form = $('<form></form>').append(
                $('<div></div>').append(
                    $('<label for="author">Author</label>'),
                    $('<input type="text" id="author">')
                ),
                $('<div></div>').append(
                    $('<label for="title">Title</label>'),
                    $('<textarea id="title"></textarea>')
                ),
                $('<input type="submit" value="Submit">')
            );
            $('body').append(form);
            form.on('submit', function(event) {
                event.preventDefault();
                sendForm();
            });
        }

        function sendForm() {
            const data = {
                author: $('#author').val(),
                title: $('#title').val()
            };
            $('form').after('<p>About to send the query to the API</p>');
            $.post('http://localhost:3000/posts', data, function(response) {
                addPostRow(response);
            }).fail(function() {
                alert('Error sending the POST query');
            });
        }

        $(document).ready(function() {
            listPosts();
            buildForm();
        });
    </script>

</body>

</html>
```


### Explanation
The code implements a form that allows users to submit new posts to a local server. It uses jQuery to handle the form submission without reloading the page. The `sendForm` function sends a POST request with the form data, and the `addPostRow` function displays the new post on the page. The `listPosts` function fetches and displays existing posts when the page loads. The `buildForm` function constructs the form and handles the form submission event.


### How to Test

1. Run the JSON server using `json-server --watch db.json`.
2. Open the HTML file in a web browser.
3. The page should display a form to submit new posts and a list of existing posts fetched from the JSON server.
4. Fill in the form and submit it to see the new post added to the list.

</details>

## Task 12: Delete Query

<details>
<summary>In this task, we enhance the functionality from the previous task by adding the ability to delete posts. Each post now includes a delete option, which allows users to remove the post from the server and the DOM.</summary>


### Task Description
1. **Modify the function `addPostRow`**:
   - Adds an `id` attribute to the paragraph with `row-ID` (the ID being the one of the post).
   - Appends a span element with the text `(delete)` before the span with the post information.
   - On click of the delete span, calls the function `deletePost` with the post ID.

2. **Create a function `deletePost`**:
   - Accepts one argument `id` (number).
   - Sends a DELETE request to the `/posts` endpoint with the post ID.
   - If the request is successful, removes the row from the DOM.
   - If the request fails, displays an alert with the message "Post was not deleted".

### Requirements:

- You must use the function `remove` from jQuery

### Implementation
```html
<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <meta charset="utf-8" />
    <title>Task 12</title>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
</head>

<body>

    <script type="application/javascript">
        function addPostRow(data) {
            const postParagraph = $('<p></p>').attr('id', `row-${data.id}`).html(
                `<span class="delete">(delete)</span> <span>Post created with id: ${data.id}, title: ${data.title}, author: ${data.author}</span>`
            );
            $('body').append(postParagraph);

            // Bind click event to delete span
            $(`#row-${data.id} .delete`).click(function() {
                deletePost(data.id);
            });
        }

        function listPosts() {
            $.get('http://localhost:3000/posts', function(response) {
                response.forEach(post => {
                    addPostRow(post);
                });
            }).fail(function() {
                alert('Server Error');
            });
        }

        function buildForm() {
            const form = $('<form></form>').append(
                $('<div></div>').append(
                    $('<label for="author">Author</label>'),
                    $('<input type="text" id="author">')
                ),
                $('<div></div>').append(
                    $('<label for="title">Title</label>'),
                    $('<textarea id="title"></textarea>')
                ),
                $('<input type="submit" value="Submit">')
            );
            $('body').append(form);
            form.on('submit', function(event) {
                event.preventDefault();
                sendForm();
            });
        }

        function sendForm() {
            const data = {
                author: $('#author').val(),
                title: $('#title').val()
            };
            $('form').after('<p>About to send the query to the API</p>');
            $.post('http://localhost:3000/posts', data, function(response) {
                addPostRow(response);
            }).fail(function() {
                alert('Error sending the POST query');
            });
        }

        function deletePost(id) {
            $.ajax({
                url: `http://localhost:3000/posts/${id}`,
                type: 'DELETE',
                success: function() {
                    $(`#row-${id}`).remove();
                },
                error: function() {
                    alert('Post was not deleted');
                }
            });
        }

        $(document).ready(function() {
            listPosts();
            buildForm();
        });
    </script>

</body>

</html>
```

### Explanation
- **Function `addPostRow(data)`**: Adds a new paragraph element to the DOM representing a post. Each paragraph includes a delete span that, when clicked, calls the `deletePost` function with the post ID.
- **Function `listPosts()`**: Fetches the list of posts from the server and calls `addPostRow` for each post received.
- **Function `buildForm()`**: Builds a form that allows users to submit new posts. When the form is submitted, it calls the `sendForm` function.
- **Function `sendForm()`**: Sends a POST request to the server to create a new post and calls `addPostRow` to add the new post to the DOM if the request is successful.
- **Function `deletePost(id)`**: Sends a DELETE request to the server to delete a post with the specified ID. If the request is successful, it removes the corresponding paragraph element from the DOM.

### How to Test

1. Run the JSON server using `json-server --watch db.json`.
2. Open the HTML file in a web browser.
3. The page should display a form to submit new posts and a list of existing posts with delete options.
4. Fill in the form and submit to create new posts.
5. Click on the delete span to delete posts and observe that they are removed from the server and the DOM.
</details>