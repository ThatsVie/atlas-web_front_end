# Flexbox
## Learning Objectives

### What is Flexbox?

### How do we convert float positioning to a flex display?

### How do we horizontally and vertically align elements using Flexbox?

### Whats is the difference between the main and cross axes?

### What properties work on flex elements vs flex container?

### What are Shorthands for flex?

### How do we create a new page with flex in mind?

## Tasks and Usage

### Task 0: Add Display Flex

**Objective:** 
Modify the provided HTML and CSS to use Flexbox for the `.row` class.

**Steps:**


1. **Copy Starter Files:**
   - Copy the provided HTML into `0-index.html`.
   - Copy the provided CSS into `0-styles.css`.

2. **Modify the CSS:**
   - Add `display: flex` to the `.row` class.
   - Remove the `row::after` declaration.
   - Remove `float: left` from `[class*='col-']`.

**Code Changes:**

```css
/* Grid */
.row {
  display: flex; /* Add this line */
}

/* Remove this block */
.row::after {
  content: '';
  display: table;
  clear: both;
}

/* Adjust this block */
[class*='col-'] {
  padding: 0.5rem;
  /* Remove float: left; */
}
```

**To test these changes:**

Open `0-index.html` in a web browser to ensure that the layout appears as intended.

Use the browser's Developer Tools to inspect `row` elements and verify that their children are now flex items.

In the provided HTML structure, the `.row` class has `<li>` elements as its direct children. When you apply `display: flex` to the `.row` class, these `<li>` elements will become flex items. 

The `.row` class should use Flexbox, making all its direct children (`<li>` elements) flex items.

The layout should remain the same visually, but now it's managed with Flexbox properties.
