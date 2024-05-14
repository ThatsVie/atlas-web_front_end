# Developer Tools

In this project we analyze [this website](https://dev-tools.hbtn.info/) using Developer Tools. We deepen our understanding of how web developers can use these tools to inspect elements, modify styles, audit accessibility and performance, and debug issues directly within the browser. We open and utilize Developer Tools in a Chrome browser, edit HTML and CSS in real-time, audit web pages for best practices with Lighthouse, create and execute JavaScript snippets, and investigate file and server configurations. We practice blocking requests, measuring resource usage, and rearranging elements on the page for testing purposes.

## Learning Objectives

### What are Developer Tools in your browser?

Developer Tools, often referred to as DevTools, are a set of tools integrated into most modern web browsers like Chrome, Firefox, Safari, and Edge. These tools help developers test and debug their web applications directly within the browser. They offer insights into the DOM, allow real-time CSS and HTML edits, show JavaScript errors, and much more. Throughout the tasks, such as **Task 4 (Styling Buttons)** and **Task 24 (CEvaluating Cache Policies for Static Assets)**, we extensively use DevTools to alter webpage styles and analyze resource loading efficiencies.

### How do we open the Developer Tools on Chrome, Firefox, Safari, and Edge?

Chrome/Firefox/Edge: Right click and scroll/press on inspect or Ctrl+Shift+I to open DevTools.

Safari: Enable the Develop menu in Safari's Advanced preferences, then press Option+Cmd+I.

### How do we use the elements tab to edit HTML and CSS?

The Elements tab allows you to inspect and modify HTML and CSS in real-time. In **Task 1 (Changing Background Color)**, we accessed the `<body>` tag in the Elements tab to change the background color, seeing the impact immediately without altering the actual files.

### How do we audit a page according to the tips suggested by Lighthouse?

Lighthouse is an open-source, automated tool for improving the quality of web pages. It can be run against any web page, public or requiring authentication. It has audits for performance, accessibility, progressive web apps, SEO, and more. In **Task 23 (Performing a Performance Audit with Lighthouse)**, we used Lighthouse to perform a performance audit, identifying potential improvements.

### How do we create and run snippets on a page?

Snippets are small scripts that you can write and execute within DevTools. **Task 29 (Creating and Running a Snippet)** involved creating a new snippet called allcolors.js, pasting provided JavaScript code, and running it directly in DevTools to observe outputs logged in the console.

### How do we get information about files and server configurations?

DevTools provides detailed insights into the resources loaded by a page, including files and server configurations. For instance, in **Task 11 (Determining File Size)**, we checked the size of a CSS file, gaining insight into its impact on the overall page load.

### How do we block requests?

Blocking requests can help simulate the absence of resources and understand their impact on the page. In **Task 30 (Blocking CSS Requests)**, we blocked all CSS requests to see how the page appears without any styles, which helps in understanding the criticality of CSS files.

### How do we know how much JavaScript or CSS is used on a page?

To determine the usage of JavaScript and CSS on a webpage, you can utilize the Network panel in Chrome DevTools. This panel allows you to view all resources loaded by the page, including JavaScript and CSS files. You can filter these resources by type to focus specifically on JavaScript or CSS files. By refreshing the page with the Network panel open, you can observe the files as they load and analyze details such as their size and load time.

In **Task 16 (Page Weight Analysis)**, the Network panel was used to measure the total weight of the page, including all JavaScript and CSS files. This task showed how you can view the size and number of requests for each type of file, providing insights into how much JavaScript and CSS are being used on the page. This information is important for identifying potential areas for optimization and ensuring efficient loading and execution of web resources.

### How do we detect 404 issues?

404 issues can be identified in the Network panel of DevTools, where it lists out all network requests made by the page along with their status codes. In various tasks, we monitored network requests to ensure all resources were loaded correctly(200) without any 404 errors.

### How do we move elements on a webpage?

The Elements panel can be used to drag and manipulate the position of HTML elements directly in the DOM tree. In **Task 10 (Rearranging Sections)**, we moved the sections of "About" and "Portfolio" to demonstrate this capability, showing how DevTools can be used for quick layout adjustments.

## Tasks

### Task 0: Capturing the Website on iPhone X

This task involves using the device toolbar in Developer Tools to emulate an iPhone X screen size and take a screenshot of the website. This helps demonstrate the site's responsive design capabilities and ensures that it looks appropriate on mobile devices.

**Steps:**

Open the website in a browser and access Developer Tools.

Switch to device emulation mode and select iPhone X as the target device.

Capture and save the screenshot as `0-responsive_device.png`

### Task 1: Changing the Background Color

In this task, the background color of the entire website is changed to #4233bd. This task demonstrates how Developer Tools can be used to modify the appearance of a website in real-time for testing and development purposes.

**Steps:**

Select the `<body>` tag in Developer Tools.

Modify the CSS directly within the Developer Tools to change the background color.

Navigate to the "PORTFOLIO" section and take a screenshot to capture the change, name it `1-change_bg_color.png`

### Task 2: Forcing the Hover State

This task focuses on demonstrating the ability to manipulate element states through Developer Tools. The hover state of the "cake" block in the "Portfolio" section was forced, and a screenshot was taken to capture this state.

**Steps:**

Use Developer Tools to select the "cake" block.

Force the hover state using the state simulation options in the Styles pane.

Take a screenshot named `2-pathways_menu.png` while the hover state is active, showing the visual effects applied to the "cake" block when hovered over. 

### Task 3: Extracting CSS Styling for "Download me!" Button

This task involves capturing all CSS styling applied to the "Download me!" button on the "https://dev-tools.hbtn.info/" website. The purpose is to  understand how CSS properties are used to style a specific element on a web page, providing insight into CSS specificity, inheritance, and the cascade.

**Steps:**

Use the Developer Tools in the browser to inspect the "Download me!" button.

Copy all CSS styles from both directly applied and inherited sources that affect the button’s appearance and behavior into file named `3-button_styles`

### Task 4: Styling Buttons

Update the styles of specific button types and document the changes.

**Steps:**

Modify the background color of `btn-primary` to `#0080ee` and text color of `btn-outline-light` to `#0020aa`.

Capture and save the updated buttons as 4-new_buttons.png

### Task 5: Removing an Element

Practice DOM manipulation by removing a specific element from the webpage and documenting the visual result.

**Steps:**

Use Developer Tools to remove the "cake" box div from the Portfolio section.

Document the change by taking and saving a screenshot as `5-deleted_elements.png`.

### Task 6: Identifying CSS Source for Styling

Determine the source file of the CSS property for an element using Developer Tools.

**Steps:**

Select the `h2` tag with the text "ABOUT" and inspect its margin-bottom property in the 'Computed' tab of Developer Tools to identify the source CSS file.

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

Identify the maximum width setting for the first `.container` within the "About" section of the website under specific browser conditions.

 **Steps:**
 
Ensure the browser width is set between 1250px and 1440px.

Open Developer Tools and select the first `.container` within the "About" section.

Use the "Computed" tab to find the max-width property of the `.container`.

Record the value found and save it as max-width: <VALUE>; in `9-max_width`.

### Task 10: Rearranging Sections

Swap the "About" and "Portfolio" sections on the website to demonstrate DOM manipulation

This task shows how to use Developer Tools for HTML structure changes without altering the source code, useful for testing layout adjustments.

**Steps:**

Open Developer Tools and locate the "About" and "Portfolio" sections in the DOM.

Drag the "About" section above the "Portfolio" section to swap their positions.

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

Note the output, which shows the HTML representation of the selected Avatar image element.

The output is documented in file `13-logo_dollar0`

### Task 14: Logging Document Title

Utilize the console to log the title of the webpage.

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

### Task 16: Page Weight Analysis

Determine and document the total weight of the webpage when fully loaded.

**Steps:**

Navigate to the Developer Tools on the browser while on the page.

Go to the 'Network' tab and refresh the page to load all resources.

Note the total data transferred and the resources loaded at the bottom of the Network tab.

Screenshot of the Network tab displaying these figures is saved as `16-weight.png`

### Task 17: Analyzing Network Requests

This task involves recording the number of network requests made when accessing the webpage to understand the complexity and potential load times associated with the site.

**Steps:**

Open the Developer Tools in Google Chrome and navigate to the 'Network' tab.

Clear any existing data if necessary

Reload the webpage to track all the network requests made during the page load.

After the page reloads, note the total number of requests displayed at the bottom of the Network tab.

This figure represents the total number of requests for resources such as images, scripts, CSS files, and more, which are essential for rendering the page.

Screenshot of the Network tab showing the number of requests is saved to `17-requests.png`

### Task 18: Counting CSS Resources

This task determines the number of CSS resources that the webpage loads.

**Steps:**

Access the website in Google Chrome and open the Developer Tools

Go to the 'Network' tab and clear any previous data

Reload the page to monitor all network activity from the start.

Apply a filter in the Network tab by typing "css" in the filter box to display only CSS files.

Count the CSS resource requests that appear filtered by this type.

Document the total number of CSS resources loaded into file `18-css_loaded`

### Task 19: Counting Image Resources

This task is focused on identifying the number of image resources that the webpage loads. 

**Steps:**

Open the website in Google Chrome and activate the Developer Tools

Navigate to the 'Network' tab and clear any previous data

Refresh the webpage to capture all network activities from the beginning.

Use the filter feature in the Network tab by typing "img" or selecting the 'Img' filter to isolate only the image resources.

Count the number of image resource requests that appear, which represents the total images loaded by the page.

Documented answer in file `19-images_loaded`

### Task 20: Determining Favicon Type

This task involves identifying the type of the favicon used on the webpage. Favicons are small icons associated with a webpage or website, displayed in browser tabs and bookmarks.

**Steps:**

Access the website in Google Chrome and activate the Developer Tools

Go to the 'Elements' tab to view the source HTML of the page.

Use the search function within the Elements panel (Ctrl+F) and search for "favicon" to  locate the `<link>` tag that defines the favicon.

Examine the type attribute of the `<link>` tag to find out the type of the favicon image, which describes the file format of the image.

Documented in `20-favicon_type`

### Task 21: Identifying the Icon Font Library

This task involves identifying the font library used for icons on the webpage

**Steps:**

Open the website in Google Chrome.

Activate the Developer Tools 

Navigate to the 'Elements' tab to inspect the source HTML of the page.

Search for references to icon fonts within <link> or <style> tags.

Identify that the website uses FontAwesome for its icons by finding the relevant font-family or source URLs linked to FontAwesome.

Documented answer in `21-hbtn_font_lib`

### Task 22: Identifying the Resource Generating XHR Calls

This task involves identifying the specific resource that generates exactly one XHR (XMLHttpRequest) call on the website. XHR facilitates asynchronous data fetching, allowing parts of a web page to be updated without a full reload.

**Steps:**

Open the website in Google Chrome.

Activate Developer Tools.

Navigate to the 'Network' tab, and then filter the traffic by selecting the 'Fetch/XHR' option 

Identify me.json as the resource responsible for exactly one XHR call during the page operations

Document answer in file `22-xhr_calls`

### Task 23: Performing a Performance Audit with Lighthouse

This task demonstrates how to perform a Performance audit using Lighthouse in Google Chrome's Developer Tools. Lighthouse provides a comprehensive assessment of various performance metrics that are crucial for understanding the efficiency and responsiveness of a website under optimal conditions.

**Steps:**

Navigate to the website using Google Chrome.

Open Developer Tools

Locate and click on the 'Lighthouse' tab within Developer Tools.

Configure the audit settings by selecting **Mode**: 'Navigation(Default)' **Categories**: 'Performance' and **Device**: 'Desktop' 

Start the audit by clicking on "Analyze page load" to evaluate the website's performance.

Capture and save a screenshot of the Lighthouse performance metrics once the audit completes. This screenshot is saved as `23-performance_audit.png` 

### Task 24: Evaluating Cache Policies for Static Assets

This task focuses on evaluating the efficiency of cache policies applied to static assets on the website.

**Steps:**

Navigate to website using Google Chrome.

Open Developer Tools

Switch to the 'Lighthouse' tab within the Developer Tools. Configure the audit to check only the "Performance" category to focus on static assets and caching.

Click on "Anylyze page load" to start the Lighthouse audit. Wait for the process to complete.

Once the audit is complete, the report will include a section titled "Serve static assets with an efficient cache policy". This section provides details about static assets that require better cache policies.

Screenshot of result is documented in `24-static_assets_audit.png`

### Task 25: Assessing Accessibility for Contrast Issues

This task involves conducting an accessibility audit to identify issues related to contrast.

**Steps:**

Run an accessibility audit using Developer Tools on the page.

Identify that the background and foreground colors do not have a sufficient contrast ratio.

Corresponding letter choice of contrast issue is Documented in file '25-contrast_issue'

### Task 26: Identifying Images Without Alt Attributes

This task requires identifying images that lack alt attributes and noting the classes assigned to these images.

**Steps:**

Run an Accessibility audit with Lighthouse

Navigate to the audit results concerning images without alt attributes.

Record the classes of the elements highlighted by the audit. Documented in `26-no_alt`


### Task 27: Identifying Missing Attributes in Links

This task involves identifying missing security attributes in links that open in new tabs (target="_blank") on the Developer Tools page. 

**Steps:**

Open the Developer Tools website using Google Chrome.

Right-click on the page and select "Inspect" to open Developer Tools.

Use the "Elements" panel and press Ctrl + F to bring up the search box.

Type "_blank" in the search box to find all occurrences within the HTML document.

Review these links to determine if they are missing the rel="noopener" or rel="noreferrer" attributes.

Confirm that both rel="noopener" and rel="noreferrer" are absent from these links.

Document answer in `27-missing_attr`

### Task 28: Identifying Links with Unclear Descriptions

This task involved identifying `<a>` tags with insufficient text descriptions, which could affect accessibility.

**Steps:**

Open the website and access Developer Tools.

Perform an accessibility audit.

Examine the audit results to identify links marked as having unclear text descriptions.

Use the Elements panel and Ctrl+F to search and verify these elements directly in the HTML structure.

Documented in `28-unclear_desc.png`

### Task 29: Creating and Running a Snippet

This task demonstrates how to utilize the Sources panel in Developer Tools to create, manage, and execute JavaScript snippets.

**Steps:**

Access the Sources panel and navigate to the Snippets tab.

Create a new snippet named allcolors.js.

Paste the provided JavaScript code into the snippet.

Execute the snippet by pressing Ctrl+Enter

Navigate to Console

Capture a screenshot showing the console output after running the snippet.

Documented in `29-how_many_colors.png`

### Task 30: Blocking CSS Requests

This task demonstrates how to disable all CSS files on a webpage using Developer Tools.

**Steps:**

Open Developer Tools and switch to the 'Network' tab.

Use the filter to display only CSS files.

Right-click on any CSS file and choose "Block request URL" or "Block request domain" to stop loading all CSS files.

Refresh the page to view the effects with all CSS requests blocked.

Documented in `30-no_css.png`

### Task 31: Session Storage Key Inspection

Identify the sole key stored in the session storage of the website.

**Steps:**

Open the Developer Tools and navigate to the Application panel.

In the left sidebar, expand the "Storage" section and click on "Session Storage," then select the site.

The only key present is named name with the value Bob Dylan.

Documented in file `31-session_storage_key`

### Task 32: Checking for Service Workers

This task involves determining whether the website employs service workers.

**Steps:**

Open the website in a browser and access Developer Tools.

Navigate to the Application panel.

Select the "Service Workers" from the left sidebar to view any registered service workers.

Verify that no service workers are registered for this page.

Documented in file `32-service_workers`

### Task 33: Identifying SSL Certificate Issuer

This task involves verifying the implementation of HTTPS by identifying the issuer of the SSL certificate used by the webpage.

**Steps:**

Open the website in a browser and access Developer Tools.

Navigate to the "Security" panel within Developer Tools.

Click on "View certificate" to open the certificate details.

Locate and record the name of the organization that issued the SSL certificate, which is listed under the issuer information.

Documented in file `33-ssl_cert`

### Task 34: SSL Certificate Expiration

This task requires checking the expiration date of the SSL certificate for the website.

**Steps:**

Open the website in the browser.

Access the Security panel in the Developer Tools.

View the SSL certificate details.

Locate and document the expiration date of the certificate.

Screenshot saved to `34-ssl_expiration.png`


