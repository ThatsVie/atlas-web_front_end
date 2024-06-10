# Forms

## Learning Objectives

### How to create an HTML5 form:

In **Task 1**, we started by creating a basic HTML5 form structure. We used the `<form>` tag to define the form, and within it, we added various form elements such as `<fieldset>`, `<legend>`, and `<div>` containers to organize the form inputs.

### How to choose the right input type:

In **Task 3**, we added input fields with appropriate types to the form. We used `<input type="text">` for text inputs like "First Name" and "Last Name", and `<input type="email">` for the email field to ensure proper validation.

### How to constrain a form field with regular expressions:

In **Task 3**, we applied regular expressions to constrain the form fields. The "First Name" field uses the pattern `[A-Za-zÀ-ž\s]{3,}` to allow only letters and spaces with a minimum of three characters.

### How to style inputs for invalid, valid, and required fields:

In **Task 5**, we added CSS styles to visually indicate the validity of form inputs. We used pseudo-classes like `:required:invalid` and `:required:valid` to style inputs based on their validity, changing border colors and displaying icons for valid and invalid states.

### How to build a comment form:

In **Task 0**, we laid the basic structure for the comment form by adding a `<form>` element within a `<section>` and using a header to introduce the form with a heading and a brief instruction.

In **Task 1**, we organized the form fields using `<fieldset>` and `<legend>` elements to group related fields logically, improving both structure and accessibility.

In **Task 2**, we enhanced the form by adding labels and input containers, ensuring each form field is properly labeled and wrapped in a `<div>` with the appropriate classes for better styling and accessibility.

In **Task 3**, we added various input fields to the form, such as `text`, `email`, and `textarea`, with appropriate constraints like `pattern`, `maxlength`, and `required` attributes to ensure proper data entry and validation.

In **Task 4**, we introduced help messages that provide users with guidance on the required input format, enhancing the user experience by adding `<i>` elements for icons and `<p>` elements with class `form-help`.

In **Task 5**, we incorporated CSS-based error handling to give visual feedback on the form fields' validity, using pseudo-elements and state-based styling to indicate valid and invalid inputs clearly.

### How to build a simple search form:

In **Task 6**, we added a search form to the navigation bar. We used the `<form>` tag with `type="search"` for the input field, and included a button with a search icon to submit the form.

### How to create usable and accessible forms:

Throughout tasks 0-6, we ensured the forms were usable and accessible by:

- Adding labels to all form inputs for better accessibility.
- Using appropriate input types to aid in browser validation and user input.
- Styling inputs to provide visual feedback on validity.
- Including help messages and ARIA attributes to guide users in filling out the forms correctly.

## Tasks and Usage

### Task 0: Basic Comment Structure
The goal of this task is to add a basic comment form structure to the article page and style it appropriately.

**How we accomplished this:**

- In `01-article.html`, we added a new `<section>` with the class `post-comments` sibling to the `<div class="post">`.
- Inside this section, we added a header containing:
  - A level 2 heading with the class `section-title` and the text "Leave a Comment."
  - A paragraph with the text "All fields are required."
- Sibling to the header, we created a `<form>` element with the following properties:
  - Action set to `#`.
  - Method set to `post`.
- In `01-styles.css`, we added styles for the comment section and the basic form:
  - For the `.post-comments` class, we set the width to 80%, margin to `10rem 0 0 auto`, and padding-left to `7rem`.
  - For the `.section-title` class inside `.post-comments`, we set the font-variant to `small-caps`.
  - For the `form`, we set the display to `flex`, flex-direction to `column`, padding to `1rem 0`, and margin to `0`.

**To test these changes:**

1. Open `01-article.html` in your web browser.
2. Verify that a "Leave a Comment" section appears at the end of the article with the following:
    - A heading "Leave a Comment"
    - A paragraph "All fields are required."


**Before:**

The initial implementation (`00-article.html`) did not have a comment section at the end of the article.

![00-article.html](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/f3fffd81-71b3-437a-a403-4dca09793d2b)

**After:**

After making the changes (`01-article.html`), a "Leave a Comment" section appears with the required fields and styling, as shown in the final rendering image.

![01-article](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/4b2aaec8-e107-46a4-8824-3d4c8afcb0ec)


### Task 1: Add Fieldsets to the Comment Form
The goal of this task is to organize the comment form into fieldsets to improve structure and accessibility.

**How we accomplished this:**

- In `02-article.html`, we modified the form in the comment section:
  - Created a first `<fieldset>` with a `<legend>` that has the text "Your personal information" and the class `visually-hidden`.
  - Inside this `<fieldset>`, created three `<div>` elements:
    - The first `<div>` has the classes `form-group` and `col-1-2`.
    - The second `<div>` has the classes `form-group` and `col-1-2`.
    - The third `<div>` has the classes `form-group` and `col-2-3`.
  - Created a second `<fieldset>` sibling to the first, with a `<legend>` that has the text "Your comment" and the class `visually-hidden`.
  - Inside this `<fieldset>`, created three `<div>` elements:
    - The first `<div>` has the classes `form-group` and `col-2-3`.
    - The second `<div>` has the classes `form-group` and `col-2-3`.
    - The third `<div>` has the class `form-group`.
- In `02-styles.css`, we added styles for the fieldsets:
  - Targeted all `fieldset` elements and set the following rules:
    - `display: flex`
    - `flex-direction: column`
    - `justify-content: flex-start`
    - `border: none`
    - `padding: 0 0 2rem 0`

**To test these changes:**

1. Open `02-article.html` in your web browser.
2. Verify that the form in the "Leave a Comment" section is organized into two fieldsets as described.

After making the changes (`02-article.html`), the form is organized into fieldsets for better structure and accessibility. The appearance of the form remains the same because the legends are visually hidden by default.

![02-article](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/ac7e89c4-31af-4b6d-87e1-d2ef86740591)


### Task 2: Create Labels and Input Containers
The goal of this task is to add labels and input containers to the form for better accessibility and usability.

**How we accomplished this:**

- In `03-article.html`, we modified the form by adding labels and input containers:
  - For each `<div>` with the classes `form-group`, we added a `<label>` element with appropriate `for` attributes and text.
  - Sibling to each label, we created a `<div>` with the class `form-field`, and inside it, a `<span>` with the class `form-field-container`.
  - Added a `<button>` with the classes `button` and `button-primary` and the text "Post my comment" to the third `<div>` in the second fieldset.

- In `03-styles.css`, we added styles for the labels:
  - Set the cursor to `pointer`, display to `block`, white-space to `nowrap`, font-size to `1.4rem`, and padding to `0 0 .5rem`.

**To test these changes:**

1. Open `03-article.html` in your web browser.
2. Verify that the form now includes labels and input containers for "First Name," "Last Name," "Email," "Title," and "Comment" fields, along with a "Post my comment" button.

![03-article](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/84d6619c-e256-4fef-8525-e97346de9422)


### Task 3: Create the Inputs
The goal of this task is to add input fields to the form for user data collection.

**How we accomplished this:**

- In `04-article.html`, we modified the form by adding input fields:
  - In the first fieldset:
    - In the first span of the `form-field-container` class, we added an input field for "First Name."
    - In the second span of the `form-field-container` class, we added an input field for "Last Name."
    - In the third span of the `form-field-container` class, we added an input field for "Email."
  - In the second fieldset:
    - In the first span of the `form-field-container` class, we added an input field for "Title."
    - In the second span of the `form-field-container` class, we added a textarea for "Comment."

- In `04-styles.css`, we added styles for the input fields and textarea:
  - Set the position to `relative`, width to `100%`, padding to `1.2rem`, line-height to `1`, border to `.1rem solid var(--color-black)`, background-color to `var(--color-white)`, box-shadow to `none`, and outline to `0`.
  - Set the padding-right to `3rem` for input fields.
  - Set the focus state for input fields and textarea with a border of `.1rem solid var(--color-grey)` and background-color of `var(--color-light-grey)`.
  - Added styles for the placeholder with `font-style: italic` and `font-size: var(--font-size-small)`.

**To test these changes:**

1. Open `04-article.html` in your web browser.
2. Verify that the form now includes input fields for "First Name," "Last Name," "Email," "Title," and a textarea for "Comment," with appropriate styling and placeholder text.


![04-article](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/bd09c4a4-cb60-4558-b9b5-2bb89bcb288e)



### Task 4: Add Help Messages
The goal of this task is to add help messages to the form fields, providing users with guidance on the required input format.

**How we accomplished this:**

- In `05-article.html`, we added help messages to the form fields:
  - After each input inside the `span` with `form-field-container` class, we added an empty `<i>` with the `class form-field-icon`.
  - Added paragraphs with the class `form-help` inside the `div` with `form-field` class to provide instructions for the First Name, Last Name, Title, and Comment fields.
  
- In `05-styles.css`, we styled the help messages:
  - Added styles for the `.form-group`, `.form-field-container`, `.form-field-icon`, and .`form-help` classes to ensure the help messages are displayed correctly and provide useful feedback to users.

**To test these changes:**

1. Open `05-article.html` in your web browser.
2. Verify that help messages appear for the input fields when they are focused, providing guidance on the required input format.

**Final rendering when “Last name” is focused:**

![05-article](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/895742ae-88ff-41ba-905f-bcdafc7360f7)


### Task 5: Add Pure HTML/CSS Error Handling
The goal of this task is to add error handling to the form fields using HTML and CSS.

**How we accomplished this:**

- In `06-styles.css`, we added variables and error handling styles:
  - Added custom properties for error and valid colors.
  - Added styles for input fields to show error and valid icons, and change border colors based on validity.
  - Updated button styles for the `button-primary` class and its hover state.

**To test these changes:**

1. Open `06-article.html` in your web browser.
2. Verify that error and valid icons appear next to input fields based on their validity.
3. Ensure that the button's colors change appropriately on hover.

After making the changes (`06-article.html`), error and valid icons appear next to input fields based on their validity, providing visual feedback.


**Final rendering of validation layout**


![06-article](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/8b03e5b0-389f-49ec-807b-54deb70eb0b1)


### Task 6: Add the Search Form
The goal of this task is to add a search form to the navigation bar.

**How we accomplished this:**

- In `07-article.html`, we modified the navigation bar to include a search form:
  - Added a new `<li>` with the `nav-item` class.
  - Inside this `<li>`, created a `<form>` with the class `form-search`, containing an input field and a search button with an SVG icon.
    
- In `07-styles.css`, we added styles for the search form:
  - Styled the `.form-search` class to display the search form correctly.
  - Styled the `.search-button` class and its child `.search-icon`.
  - Styled the `input[type="search"]` to ensure it expands on focus.
  
**To test these changes:**

1. Open `07-article.html` in your web browser.
2. Verify that a search form appears in the navigation bar with an input field and search button.


**Final rendering of the search button**

![search button](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/bd47fe18-51bd-4d17-9259-127f8364c807)


**Final rendering of the search focus**

![search with focus](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/d839e196-7411-4eef-a0a6-cb9548a7db41)


**Final rendering of the search focus with text**

![search focus with text](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/ea9cdd4a-5f8d-427f-b15c-45a2385ba972)


















