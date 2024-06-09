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
  - Included input fields for "First Name," "Last Name," "Email," "Title," and "Comment," each wrapped in `<div class="form-group">` elements.
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

![01-article.html](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/6204475e-8e61-4c4e-aeb2-c62c5f614dc4)
