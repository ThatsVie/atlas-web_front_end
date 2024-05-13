# Developer Tools

## Learning Objectives

### What Developer Tools in your browser are

### How to open the Developer Tools on Chrome, Firefox, Safari, and Edge.

### How to use the elements tab to edit HTML and CSS

### How to audit a page according to the tips suggested by Lighthouse

### How to create and run snippets on a page

### How to get information about files and server configurations

### How to block requests

### How to know how much JavaScript or CSS is used on a page

### How to detect 404 issues

### How to move elements on a webpage

## Tasks

### Task 0: Capturing the Website on iPhone X

This task involved using the device toolbar in Developer Tools to emulate an iPhone X screen size and take a screenshot of the website. This helps demonstrate the site's responsive design capabilities and ensures that it looks appropriate on mobile devices.

**Steps:**

Opened the website in a browser and accessed Developer Tools.

Switched to device emulation mode and selected iPhone X as the target device.

Capture and save the screenshot as `0-responsive_device.png`

### Task 1: Changing the Background Color

In this task, the background color of the entire website was changed to #4233bd. This task demonstrates how Developer Tools can be used to modify the appearance of a website in real-time for testing and development purposes.

**Steps:**

Select the `<body>` tag in Developer Tools.

Modified the CSS directly within the Developer Tools to change the background color.

Navigated to the "PORTFOLIO" section and took a screenshot to capture the change, named it `1-change_bg_color.png`

### Task 2: Forcing the Hover State

This task focused on demonstrating the ability to manipulate element states through Developer Tools. Specifically, the hover state of the "cake" block in the "Portfolio" section was forced, and a screenshot was taken to capture this state.

**Steps:**

Used Developer Tools to select the "cake" block.

Forced the hover state using the state simulation options in the Styles pane.

Took a screenshot named `2-pathways_menu.png` while the hover state was active, showing the visual effects applied to the "cake" block when hovered over. 

### Task 3: Extracting CSS Styling for "Download me!" Button

This task involved capturing all CSS styling applied to the "Download me!" button on the "https://dev-tools.hbtn.info/" website. The purpose was to understand how CSS properties are used to style a specific element on a web page, providing insight into CSS specificity, inheritance, and the cascade.

**Steps:**

Used the Developer Tools in the browser to inspect the "Download me!" button.

Copied all CSS styles from both directly applied and inherited sources that affect the button’s appearance and behavior into file named `3-button_styles`

### Task 4: Styling Buttons

Update the styles of specific button types and document the changes.

**Steps:**

Modify the background color of `btn-primary` to `#0080ee` and text color of `btn-outline-light` to `#0020aa`.

Capture and save the updated buttons as 4-new_buttons.png

### Task 5: Removing an Element

Practice DOM manipulation by removing a specific element from the webpage and documenting the visual result.

**Steps:**

Use Developer Tools to remove the "cake" box div from the Portfolio section.

Document the change by taking and saving a screenshot as 5-deleted_elements.png.

### Task 6: Identifying CSS Source for Styling

Determine the source file of the CSS property for an element using Developer Tools.

**Steps:**

Select the h2 tag with the text "ABOUT" and inspect its margin-bottom property in the 'Computed' tab of Developer Tools to identify the source CSS file.

Documented in `6-declaration_file`

### Task 7: Counting Click Event Listeners

Determine the number of times click events are referenced in the JavaScript files of the website.

**Steps:**

Access Developer tools

Go to the 'Sources' tab where the site’s files are listed.

Search through JavaScript files for instances of click event references using the search functionality (Ctrl+F)

Count each occurrence where a click event is added to elements 

The result is documented in `7-number_of_listeners~












