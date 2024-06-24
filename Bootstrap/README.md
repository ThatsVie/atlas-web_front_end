# Bootstrap

## Learning Objectives

### Usage of Containers

Containers are the most basic layout element in Bootstrap and are used to contain, pad, and align your content within a given viewport. Bootstrap comes with three types of containers:

- **.container**: A responsive fixed-width container.
- **.container-fluid**: A full-width container, spanning the entire width of the viewport.
- **.container-{breakpoint}**: A responsive container with fixed widths at each breakpoint.


**Example from Task 5:**
```html
<div class="container-md bg-info p-2 rounded border border-info d-flex justify-content-between">
    <!-- Responsive container with medium width breakpoint -->
</div>
```

### Usage of the Grid System

The Bootstrap grid system is a mobile-first flexbox system for building layouts of all shapes and sizes thanks to a twelve-column system, five default responsive tiers, Sass variables and mixins, and dozens of predefined classes.

- **.row**: Defines a row in the grid system.
- **.col**: Defines columns within a row. The columns will automatically resize based on the viewport size.

**Example from Task 1:**
```html
<div class="row">
    <div class="col-lg bg-primary text-white text-center">Primary</div>
    <div class="col-lg bg-success text-white text-center">Success</div>
    <div class="col-lg bg-danger text-white text-center">Danger</div>
    <div class="col-lg bg-warning text-white text-center">Warning</div>
</div>
```

**Example from Task 3:**
```html
<div class="row">
    <div class="col-sm mt-4">
        <div class="card">
            <!-- Card content -->
        </div>
    </div>
    <div class="col-sm mt-4">
        <div class="card">
            <!-- Card content -->
        </div>
    </div>
    <div class="col-sm mt-4">
        <div class="card">
            <!-- Card content -->
        </div>
    </div>
</div>
```

### Usage of Components

Bootstrap components are pre-styled building blocks for your web application, providing functionalities such as navigation bars, cards, modals, buttons, alerts, and more.

**Example from Task 3 (Card Component):**
```html
<div class="card">
    <div class="card-header">Coding</div>
    <img class="card-img-top" src="https://via.placeholder.com/450x200" />
    <div class="card-body">
        <h5 class="card-title">HTML</h5>
        <p class="card-text">Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser.</p>
        <button class="btn btn-danger" data-toggle="modal" data-target="#playModal">Play with</button>
    </div>
    <div class="card-footer">40h</div>
</div>
```


### Usage of Utilities

Bootstrap utilities are a collection of classes that help you quickly and easily style your content without needing to write custom CSS. These include spacing, text alignment, display properties, and more.

**Example from Task 4:**
```html
<ul class="nav nav-tabs">
    <li class="nav-item">
        <a class="nav-link active" href="#">Introduction</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Discography</a>
    </li>
</ul>
```


## Tasks

### Task 0: Reboot Styling

In Task 0 The provided HTML file was styled using the Bootstrap CSS framework, version 4.4.1. The addition of the Bootstrap CDN link in the `<head>` section ensured that all default browser styles were reset, and Bootstrap's base styles were applied. 

### Task 1: Blocks

The goal of Task 1 was to create a responsive web page using Bootstrap classes. The HTML structure could not be changed; only classes were added. The page includes various blocks styled with Bootstrap utility classes to achieve specific layouts and styling for different screen sizes. Each block's background color represents a different Bootstrap contextual color: primary (blue), success (green), danger (red), and warning (yellow).

**Class Names Summary:**


The class `block-lg-primary` indicates a block within the grid layout designed for large screens with a primary color. `block-lg-success`, `block-lg-danger`, and `block-lg-warning` follow the same naming convention, indicating blocks with success, danger, and warning colors, respectively, for large screens.

The class `block-sm-primary` indicates a block for small screens with a primary color. `block-sm-success`, `block-sm-danger`, and `block-sm-warning` indicate blocks with success, danger, and warning colors for small screens.

The class `block-lg-2-primary` indicates a block with a width of 2 out of 12 columns in the grid for large screens with a primary color. `block-lg-4-success` and `block-lg-6-danger` follow the same pattern for blocks with success and danger colors, respectively, with widths of 4 and 6 columns.

The class `block-flex-primary` indicates a block that is part of a flexbox layout with a primary color. `block-flex-success`, `block-flex-danger`, and `block-flex-warning` indicate flexbox blocks with success, danger, and warning colors.

The class `block-md-2-primary` indicates a block with a width of 2 out of 12 columns in the grid for medium screens with a primary color. `block-md-2-offset-success` and `block-md-2-offset-danger` indicate blocks with success and danger colors, respectively, with an offset applied for medium screens.

### Task 2: Table of Chemical Elements
The objective of Task 2 was to build a responsive web page using Bootstrap classes to style and structure the content. The page features a header, an informational alert, and a table listing the first five chemical elements. The HTML structure was provided, and the styling was achieved solely through Bootstrap classes without altering the HTML.

**Class Names and Their Functions:**

The `header` class styles the header section with a border at the bottom, padding, a margin at the bottom, and a light background color. The `nav-list` class applies styles to the navigation list within the header, making it a flex container and removing default list styling. The `logo` class targets the list item containing the logo, while the `logo-image` class applies rounded borders to the logo image.

For alignment, `ml-auto` automatically adjusts the margin-left to push elements to the right within the flex container, and `mr-auto` adjusts the margin-right to push elements to the left. The `content` class styles the main content area, making it span the full width of the viewport.

The `alert-section` class styles the section containing the alert, and within this section, the `alert` class from Bootstrap is used to create an informational alert box. The `elements-section` class styles the section containing the table of elements, while the `elements-title` class styles the title of this section.

The `table-wrapper` class makes the table responsive, and the `elements-table` class applies dark styling and row hover effects to the table using Bootstrap’s table classes.

### Task 3: Cards

The goal of Task 3 was to create a responsive web page using Bootstrap classes. The HTML structure could not be changed; only classes were added. The page includes a series of cards that provide information about different coding languages, and each card contains a header, an image, a body with a title and description, and a footer with the duration.

The implementation of the cards and modal used Bootstrap's grid system and utility classes to create a responsive layout

**Class Names Summary:**

The `container` class wraps the entire content with responsive padding on all sides. The `row` class creates a horizontal group of columns. Each card is contained within a column, styled with `col-md-4 mt-4` to ensure they are responsive and have margin at the bottom.

The `card` class is used for the card layout, while `card-header` styles the header section of the card. The `card-img-top` class is used for the image at the top of the card, ensuring it spans the width of the card. The `card-body` class contains the main content of the card, including the `card-title` for the title and `card-text` for the description.

The `btn btn-danger` class is applied to the button, giving it a red "danger" style and the ability to trigger the modal. The `card-footer` class styles the footer of the card.

For the modal, the `modal fade` classes are used for the modal itself, and `modal-dialog-centered` centers the modal vertically and horizontally. The `modal-content` class wraps the content inside the modal, and `modal-header`, `modal-body`, and `modal-footer` classes structure the content within the modal.



### Task 4: Bob Dylan

The goal of Task 4 was to create a responsive web page using Bootstrap classes. The HTML structure could not be changed. Only classes were added. The page includes tabs for "Introduction" and "Discography," with the latter containing collapsible content for each album.

**Class Names Summary:**

The `container-lg bg-light p-3 mt-4` class wraps the content inside a large container with a light background, padding of 3 units, and a top margin of 4 units. The `mb-4` class adds a bottom margin to the `<h1>` element.

The `nav nav-tabs mb-3` classes style the `<ul>` as a tabbed navigation with a bottom margin of 3 units. Within the tabbed navigation, `nav-item` styles each list item, and `nav-link` styles the links. The `tab-content bg-white p-3` class styles the tab content container with padding of 3 units and a white background.

The `tab-pane fade show active` class makes the "Introduction" tab active by default with a fade effect, while `tab-pane fade` adds a fade effect to the "Discography" tab content. The `list-group` class styles the `<ul>` within the "Discography" tab as a grouped list, and `list-group-item` styles each list item. The  `collapse` class adds collapsible behavior to the album descriptions. The `mt-2` class adds a top margin to the paragraphs within the collapsible sections.

### Task 5: Show/Hide - Screen Size

The objective of Task 5 was to create a responsive web page that changes the display of elements based on the screen size. The HTML structure could not be changed; only Bootstrap classes were added to achieve the desired behaviors and styles.

**Class Names Summary:**

The `d-block d-md-none` class ensures the small title is displayed only for screen widths ≤ 768px, while the `d-none d-md-block` class ensures the big title is displayed only for screen widths > 768px.

The `container-md bg-info p-2 rounded border border-info d-flex justify-content-between` class centers the container, makes it take full width for screen widths ≤ 768px, adds a background color of "info," (cyan), padding on all sides, rounded corners, and uses flexbox layout for wrapping the children with justified space between.

The `float-left text-light p-1 border-right border-bottom` class aligns the left div to the left, adds a light text color(gray), padding on all sides, and a border on the right and bottom.

The `d-none d-md-block text-light p-1 border-left border-right border-bottom shadow` class hides the middle div for screen widths ≤ 768px, adds a light text color, padding on all sides, borders on the right, left, and bottom, and a shadow effect.

The `float-right text-light p-1 border-left border-bottom` class aligns the right div to the right, adds a light text color, padding on all sides, and borders on the left and bottom.

### Task 6: Overwrite CSS

Task 6 involved creating a custom stylesheet to override specific Bootstrap styles and achieve a customized layout. The HTML structure remains unchanged, and all customizations are done through CSS.

**Custom Styles**

For button styling, the `.btn-primary` class sets the primary button with white text, a bright red background, and border. On hover, focus, and active states, the background and border change to a darker red. The `.btn-outline-primary` class sets the outline primary button with bright red text and border. On hover, the background changes to bright red, and the text color becomes white.

For link styling, the `a.text-dark:hover, a.text-dark:focus` class changes the link color to bright red on hover and focus, and removes the underline.

For card styling, the `.card` class sets the card border color to bright red and applies a border radius of 1rem. The `.card-header` class sets the background color of card headers to bright red and the text color to white. The top corners of the card header have a slightly smaller border radius to align with the overall card border radius.

The `.border-bottom` class sets the bottom border color to bright red. The `.text-muted` class sets the text color to a grey shade.
