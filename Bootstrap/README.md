# Bootstrap
This project involves using Bootstrap 4.4 to style a webpage. Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS and JavaScript design templates for typography, forms, buttons, navigation, and other interface components.

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






