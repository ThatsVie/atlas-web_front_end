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

### Task 4 - Adjust Grid Layout Using `calc`

For this task, we updated the grid layout to use the `calc` function for setting widths, and adjusted the margin and padding for the grid layout.

**CSS Changes:**
```css
/* Adjust widths using `calc` */
.col-1-3 {
  width: calc((100% / 3) - 2rem);
}

.col-1-2 {
  width: calc((100% / 2) - 2rem);
}

/* Update margin for grid columns */
[class*='col-'] {
  margin: 1rem;
}

/* Adjust margin for row */
ul.row {
  margin: -1rem;
}
```

**To test, open the `4-index.html` file in a browser and inspect the grid elements to ensure the widths and margins are set correctly.**

![ul row](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/a2b79f3e-c739-4d67-b4fa-672efa321a1e)


![li col](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/8739b6fc-5a24-423b-9cd0-f95f31af614e)


### Task 5 - Wrap Elements in Header and Adjust Styles

For this task, we wrapped specific elements in the Header section in a new container and adjusted the CSS to apply flexbox properties and remove redundant rules.

**HTML Changes:**
Wrapped the `header-logo` and `navbar-menu` in a new `div` with class `header-container`.

**CSS Changes:**
```css
.header-container {
  display: flex;
  justify-content: space-between;
}

/* Removed the following rules:
   - header-logo
   - header-logo a
   - navbar-menu
*/

/* Removed the following variables:
   - --header-logo-position
   - --header-logo-link-display
   - --header-logo-link-position
   - --header-logo-link-top
   - --header-logo-link-left
*/
```

**To test, open the `5-index.html` file in a browser and inspect the Header section to ensure the `header-container` class is applied and the styles are correct.**

![header container](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/69aa8565-edcf-45a9-b499-61bfa24fbe37)

### Task 6 - Adjust Navbar with Flexbox

For this task, we adjusted the navbar to use flexbox and modified the margin settings for the nav items.

**CSS Changes:**
```css
.nav {
  display: flex;
}

/* Removed the display declaration from .nav .nav-item */

/* Moved the margin declaration */
.nav-item + .nav-item {
  margin: var(--nav-item-margin);
}

/* Updated variable */
:root {
  --nav-item-margin: 0 0 0 2rem;
}
```
**To test, open the `6-index.html` file in a browser and inspect the navbar to ensure the flexbox properties and margin settings are applied correctly.**

![6 index](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/62b933fd-efdb-4f95-b245-be7a2b791186)

### Task 7 - Center Align Items in Header

For this task, we adjusted the header container to center align its items vertically.

**CSS Changes:**
```css
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center; /* added this line */
}
```

**To test, open the `7-index.html` file in a browser and inspect the header to ensure the items are centered vertically.**

![7 index](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/277e3d60-d51a-405b-aea8-fe6d92fca19c)

### Task 8 - Adjust Section Hero with Flexbox

For this task, we applied flexbox properties to the `section-inner` class within the `section-hero` class.

**CSS Changes:**
```css
.section-hero .section-inner {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-height: 50vh;
}
```

**To test, open the `8-index.html` file in a browser and inspect the `section-hero` section to ensure the flexbox properties are applied correctly.**

**Before changes to `section-inner`**

![before section inner](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/077851bd-170c-409d-8b3e-8f25dbca0b1d)


**After changes to `section-inner`**


![after section inner](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/d40c48a0-0d85-48ab-ba75-b750b5f2c7ab)


### Task 9 - Align Items in Section About Us

For this task, we targeted all classes that begin with `col-` inside the `section-about-us` class to center align the items.

**CSS Changes:**
```css
/* Section ABOUT US
   ============================= */
.section-about-us [class*='col-'] {
  align-self: center;
}
```

**To test, open the `9-index.html` file in a browser and inspect the `section-about-us` section to ensure the items are centered.**

**Before targeting**

![before align self center](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/8fa6f82d-0aaf-4bca-850d-19c36abdf387)

**After targeting**

![after align self center](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/646bcd0d-94e3-4adc-a998-fe63658a84a4)


### Task 10 - Adjust Section Hero and Add Hero Homepage Styles

For this task, we adjusted the `section-hero` styles and created a new `hero-homepage` class with specific styles for `section-body` and `section-category` within `section-hero`.

**CSS Changes:**
```css
.hero-homepage {
  background-position: 75% 0;
  background-repeat: no-repeat;
  background-size: 90rem auto;
  background-color: #010101;
}

.section-hero {
  position: relative;
  margin-top: -8.5rem;
}

.section-hero .section-body {
  padding: 10rem 4rem;
}

.section-hero .section-category {
  color: var(--color-white);
  text-transform: uppercase;
}
```
**HTML Changes:**
```html
<header class="section-hero hero-homepage" data-section-theme="dark">
  <div class="container">
    <div class="section-body">
      <section class="section-inner">
      </section>
    </div>
  </div>
</header>
```
**To test, open the `10-article.html` file in a browser and inspect the `section-hero` section to ensure the new styles are applied correctly.**


![10 article html](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/b5dfad63-badb-429b-a1c1-b8e993fe777b)























