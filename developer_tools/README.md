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

### Task 8: Hexadecimal to HSL Conversion

Find the HSL equivalent of the background color of the "Send" button on the website.

**Steps:**

Use Developer Tools to inspect the "Send" button and find its hexadecimal color code.

Convert the hexadecimal color to its HSL representation using a color conversion tool.

Document the HSL value in `8-hsl`

### Task 9: Determining Max-Width of the Container

Identify the maximum width setting for the first .container within the "About" section of the website under specific browser conditions.

 **Steps:**
 
Ensure the browser width is set between 1250px and 1440px.

Open Developer Tools and select the first .container within the "About" section.

Use the "Computed" tab to find the max-width property of the .container.

Record the value found and save it as max-width: <VALUE>; in `9-max_width`.

### Task 10: Rearranging Sections

Swap the "About" and "Portfolio" sections on the website to demonstrate DOM manipulation

This task shows how to use Developer Tools for real-time HTML structure changes without altering the source code, useful for testing layout adjustments.

**Steps:**

Open Developer Tools and locate the "About" and "Portfolio" sections in the DOM.

Drag the "About section above the "Portfolio" section to swap their positions.

Capture a screenshot showing the new order of these sections, name it `10-moved_around.png`

### Task 11: Determining File Size

Identify the file size of the freelancer.css file

**Steps:**

Open the Developer Tools in the browser and switch to the 'Network' tab.

Reload the page to capture all network requests.

Search for `freelancer.css` in the Network tab.

Click on the file name to view details, including the size of the file in bytes as reported by the browser. (seen under content-length)

This value is documented in the `11-coverage`

### Task 12: Emulating Print Media

Practice the ability to emulate different media types using Developer Tools to visualize how a web page would appear when printed.

**Steps:**

Open Developer Tools and navigate to the 'Rendering' panel.

Change the CSS media type to "print" to simulate how the page would look when printed.

Take a screenshot of the homepage in this mode. `12-print_version.png`

### Task 13: Console Reference to an Element

Utilize the $0 command in the browser's Developer Tools console to reference the last inspected element

**Steps:**

Use the Developer Tools to select the Avatar image in the header.

Switch to the Console tab and type $0, then press Enter to execute.

Observe the output, which shows the HTML representation of the selected Avatar image element.

The output is documented in file `13-logo_dollar0`

### Task 14: Logging Document Title

Utilize the console to log the title of the webpage

**Steps:**

Access the browser's Developer Tools and switch to the Console tab.

Enter `console.log(document.title)` in the console and press Enter to execute the command.

Note the output that the console returns.

The result is documented in the file `14-doc_title`

### Task 15: Identifying the Front-End Framework

Determine the front-end framework used by the Holberton School Developer Tools website.

**Steps:**

Open the browser's Developer Tools and inspect various elements, particularly looking at class names and CSS files included in the webpage.

The inspection reveals that the website uses Bootstrap as its front-end framework, as evidenced by the Bootstrap-specific class names and styles.(btn, container, row)

The result is documented in the file '15-hbtn_framework'



















