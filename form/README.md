# Forms

## Learning Objectives

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






