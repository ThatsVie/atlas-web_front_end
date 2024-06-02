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

![display flex](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/05f8c39b-f290-4d1d-8b17-5c42a5c4fecb)


In the provided HTML structure, the `.row` class has `<li>` elements as its direct children. When you apply `display: flex` to the `.row` class, these `<li>` elements will become flex items. 

The `.row` class should use Flexbox, making all its direct children (`<li>` elements) flex items.

The layout should remain the same visually, but now it's managed with Flexbox properties.

### Task 1 - Add new classes on sections

For this task, we added specific classes to the outermost section tags for various sections in the HTML file.

**Updated Sections:**
- Services: `section-services`
- Works: `section-works`
- About Us: `section-about-us`
- Latest News: `section-latest-news`
- Testimonials: `section-testimonial`
- Contact: `section-contact`

**To test, open the `1-index.html` file in a browser and inspect the section tags to ensure the new classes have been added correctly.**

![1-index](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/f801692b-a300-463b-a171-faecb0c732a9)



### Task 2 - Adjust Flex Direction for Latest News Section

For this task, we changed the flex direction of the "Latest news" section to `row-reverse`.

**CSS Changes:**
```css
/* Section Latest news
   ============================= */
.section-latest-news .row {
  flex-direction: row-reverse;
}
```

**To test, open the `2-index.html` file in a browser and inspect the "Latest news" section to ensure the news items are displayed in reverse order.**

**Before reversal:**
![pre reversal](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/c65cedea-5171-43ca-b970-6b721c736a12)

**After reversal:**

![post reversal](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/f32d584c-f974-40a4-b005-75809a96a7a0)


![2 index](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/5649cce0-89aa-420d-bcda-586dac081bbf)



### Task 3 - Simplify services list

For this task, we ensured that the flex items in the Services section can wrap onto multiple lines.

**HTML Changes:**
Merged the two `<ul>` elements in the Services section into one.

**CSS Changes:**
```css
/* Section SERVICES
   ============================= */
.section-services .row {
  flex-wrap: wrap;
}
```

**To test, open the `3-index.html` file in a browser and inspect the Services section to ensure the items wrap correctly.**

**With `flex-wrap`:**
![with flex wrap](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/f41b24d8-f272-4fe4-b528-36f6ff1fc888)


**Without `flex-wrap`:**

![without flex wrap](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/bb65e94f-6c36-42ea-82b1-b3d6bba8bb10)








































