# Accessibility

## Learning Objectives

### What is ARIA’s main purpose?

ARIA (Accessible Rich Internet Applications) is designed to make web content and applications more accessible to people with disabilities. It provides additional attributes that can be applied to HTML elements to provide information to assistive technologies.

In **Task 1**, we used ARIA landmarks such as aria-label in the skip links to help users navigate directly to primary navigation or main content.

### What are WCAG conformance levels (A, AA and AAA)?
The Web Content Accessibility Guidelines (WCAG) are organized into three levels of conformance:

**Level A:** The most basic web accessibility features.

**Level AA:** Deals with the biggest and most common barriers for disabled users.

**Level AAA:** The highest and most complex level of web accessibility.

**Level A:** In **Task 6**, ensuring that form elements have labels meets basic accessibility requirements.

**Level AA:** In **Task 2**, ensuring elements have sufficient color contrast is a requirement for Level AA.

**Level AAA:** Although not explicitly stated, many of the proactive steps taken in these tasks could align with Level AAA standards.

### What is the importance of Web Accessibility?
Web accessibility ensures that websites, tools, and technologies are designed and developed so that people with disabilities can use them. It is crucial for providing equal access and opportunities to all users.

Throughout **Tasks 0-11**, making elements focus-visible (**Task 0**), adding skip links (**Task 1**), ensuring sufficient color contrast (**Task 2**), adding a `<title>` element (**Task 3**), including a `lang` attribute (**Task 4TT), providing alternate text for images (**Task 5**), labeling form elements (**Task 6**), ensuring links have discernible text (**Task 7**), and structuring content with landmarks (**Task 9**) all contribute to making the web more accessible.

### What are Tools to use for Web Accessibility?
Several tools are available to help developers identify and fix accessibility issues. These include browser extensions, validators, and automated testing tools.

**Axe**: Used in tasks 2, 3, 4, 5, 6, 7, 8, and 10 to run accessibility checks and ensure the issues are resolved.

**HeadingsMap**: Recommended in task 9 for visual representation of heading structures.

**Landmarks Extension**: Used in tasks 9 and 10 to visualize landmarks on the page.

## Tasks and Usage

### Task 0: Make the "Works" Card Focus Visible
The goal of this task is to ensure that the focus state of the "Works" cards is visually apparent when navigating using the keyboard in the desktop version of the webpage. To accomplish this, we updated the CSS to remove opacity settings and properly handle focus states.

**To test these changes:**

- Open `01-index.html` in your web browser.
- Use the TAB key to navigate through the links on the page.
- Verify that the "Works" card titles become visible with a dark background on focus, similar to the hover effect.

**Before:**

In the initial implementation (`00-index.html`), the focus on the "Works" cards is not visually apparent when navigating using the TAB key.

![before](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/b9983161-89e5-41b0-81ea-ca95a23673d5)

**After:**

After making the changes (`01-index.html`), the focus state is visible with a dark background when navigating using the TAB key.

![after](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/6f08af58-828d-4614-9ae7-abea26b9734c)

### Task 1: Add the Skip Links
The goal of this task is to improve accessibility by adding skip links, allowing users to quickly navigate to the primary navigation and main content using keyboard shortcuts. To accomplish this, we added skip links just after the `<body>` tag and updated the necessary IDs and styles.


**To test these changes:**
- Open `skip-links/01-index.html` and `skip-links/01-article.html` in your web browser.
- Use the TAB key to navigate through the links on the page.
- Verify that the skip links appear at the top left when focused and allow navigation to the primary navigation and main content sections.


![primary in article](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/32ddf943-6bd7-4f0e-a777-fe6e41e7d17d)

![main in article](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/2db82638-16da-4be4-87a2-5c4fb406bfd6)

![primary in index](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/f8833514-0240-457a-b099-64ff6d6838d0)

![main in index](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/00accd87-03aa-4220-9454-5332a5ef5ce9)

### Task 2: Ensure Elements Have Sufficient Color Contrast
The goal of this task is to improve accessibility by ensuring that elements have sufficient color contrast. To accomplish this we removed `color: #a6a5a5;` and `background-color: #5f7a8a;` from the body styles in `fix-a11y/01-index.html`.

**To test these changes:**

- **Use the Axe Chrome Extension:**
   - Install the Axe Chrome Extension from the Chrome Web Store.
   - Open `fix-a11y/01-index.html` in your browser.
   - Open Chrome DevTools
   - Navigate to the "Axe" tab in DevTools.
   - Click "Scan" to run the accessibility checks.
   
- **Review the Results:**
   - Check for color contrast issues and other accessibility concerns.
   - Follow the suggestions provided by Axe to fix any issues.

**Before:**

In the initial implementation (`fix-a11y/00-index.html`), the color contrast is poor, making it difficult for users to read the content.
![Screenshot 2024-06-08 153313](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/17d028ad-b908-4d52-bb1d-eca652ce8524)


**After:**

After removing the problematic styles (`fix-a11y/01-index.html`), the color contrast is improved, providing better readability.

![Screenshot 2024-06-08 153324](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/75f09ddc-bd5f-4039-8bd5-de72bf5cc5d1)


### Task 3: Ensure Documents Have a `<title>` Element
The goal of this task is to improve accessibility by ensuring that all documents have a `<title>` element to aid in navigation. We accomplished this by adding `<title>Homepage - A fake website</title>` to the `<head>` section of `fix-a11y/02-index.html`.

**To test these changes:**

- Open `fix-a11y/02-index.html` in your web browser.
- Open Chrome DevTools 
- Navigate to the "Axe" tab in DevTools.
- Click "Scan" to run the accessibility checks.
- Check for issues related to the absence of a `<title>` element and verify that the issue is resolved.

![title issue resolved](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/fa58edcc-0c17-45a7-b767-2a437a01efcc)


### Task 4: Ensure the Document has a `lang` Attribute
The goal of this task is to improve accessibility by ensuring that the document has a `lang` attribute to indicate the language of the content. We accomplished this by adding `lang="en"` to the `<html>` tag in `fix-a11y/03-index.html`.

**To test these changes:**

- Open `fix-a11y/03-index.html` in your browser.
- Open Chrome DevTools
- Navigate to the "Axe" tab in DevTools.
- Click "Scan" to run the accessibility checks.
- Check for issues related to the absence of a `lang` attribute and verify that the issue is resolved.

![lang en](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/f7fcf7f0-1053-4767-a60f-aed51383bb92)


### Task 5: Ensure Images Have Alternate Text
The goal of this task is to improve accessibility by ensuring that all images have appropriate alternate text. To accomplish this we added an `alt` attribute with the text `Name of the logo` to the `<img>` tag pointing to `logo.png` and added an empty `alt` attribute (`alt=""`) to the `<img>` tag pointing to `hero-img.png`.

**To test these changes:**

- Open `fix-a11y/04-index.html` in your web browser.
- Open Chrome DevTools
- Navigate to the "Axe" tab in DevTools.
- Click "Scan" to run the accessibility checks.
- Verify that there are no issues related to missing or improper `alt` attributes for images.


![alt image fix](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/5cc0283a-4166-4696-8c8d-92276dbf57de)


### Task 6: Ensure Form Elements Have Labels
The goal of this task is to improve accessibility by ensuring that form elements have appropriate labels.

To accomplish this we:
- Added a label just before the input with the class `visually-hidden` and `for="email"`.
- Updated the input element with `id="email"`, `type="email"`, `autocomplete="email"`, `required`, and `aria-required="true"`.
- Changed the submit link from an `<a>` tag to a `<button>` element for better accessibility.

**To test these changes:**

- Open `fix-a11y/05-index.html` in your web browser.
- Open Chrome DevTools
- Navigate to the "Axe" tab in DevTools.
- Click "Scan" to run the accessibility checks.
- Verify that there are no issues related to missing or improper labels for form elements.


![Screenshot 2024-06-08 175137](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/45f5e8fb-1605-403f-b0fd-d0d915bc7f48)

### Task 7: Ensure Links Have Discernible Text
The goal of this task is to improve accessibility by ensuring that links have discernible text, especially when they use icons instead of text.

**To accomplish this:**
- Added `aria-label="Facebook"` to the `<a>` tag containing the `facebook-icon`.
- Added `aria-label="Twitter"` to the `<a>` tag containing the `twitter-icon`.

**To test these changes:**

- Open `fix-a11y/06-index.html` in your web browser.
- Open Chrome DevTools
- Navigate to the "Axe" tab in DevTools.
- Click "Scan" to run the accessibility checks.
- Verify that there are no issues related to links without discernible text.

![Screenshot 2024-06-08 175751](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/161b468b-9bd4-46c3-8da8-cb2bb466d897)

### Task 8: Ensure Zooming and Scaling Are Not Disabled
The goal of this task is to improve accessibility by ensuring that zooming and scaling are not disabled on the webpage.
To accomplish this we removed `user-scalable=no` from the `<meta name="viewport">` tag in `fix-a11y/07-index.html`.

**To test these changes:**

- Open `fix-a11y/07-index.html` in your web browser.
- Open Chrome DevTools
- Navigate to the "Axe" tab in DevTools.
- Click "Scan" to run the accessibility checks.
- Verify that there are no issues related to zooming and scaling being disabled.

![Screenshot 2024-06-08 180614](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/3448f25e-9e17-440e-92b8-4f50ac7f885b)


### Task 9: Ensure Heading Levels Increase by One and All Content is Contained by Landmarks
The goal of this task is to improve accessibility by ensuring that heading levels only increase by one and all page content is contained by landmarks.

**To accomplish this:**
- Added an `<h1>` element with the text "Homepage" just after the `<div class="header">` closing tag.
- Adjusted heading levels to follow a logical structure, changing inappropriate headings to more suitable tags (e.g., `<h1>` to `<h2>`, `<h6>` to `<h2>`, `<h4>` to `<h3>`, etc.).

**To test these changes:**

- Open `fix-a11y/08-index.html` in your web browser.
- Install the HeadingsMap extension for a visual representation of your headings.
- Open Chrome DevTools
- Navigate to the "Axe" tab in DevTools.
- Click "Scan" to run the accessibility checks.
- Verify that there are no issues related to improper heading levels and all content is contained by landmarks.

**Before changes:**

![Screenshot 2024-06-09 113018](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/e540e177-aea5-4577-a147-c19836c16cf8)


**After changes:**


![Screenshot 2024-06-09 113044](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/8fec3e93-4fc5-4319-917a-b5fa7e732f4a)


### Task 10: Ensure Document Has One Main Landmark
The goal of this task is to improve accessibility by ensuring the document has one main landmark and all content is contained within appropriate landmark elements.

**To accomplish this:**
- Converted relevant `<div>` tags to semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>`) to define the structure of the document clearly.

**To test these changes:**

- Open `fix-a11y/09-index.html` in your web browser.
- Install the Landmarks extension for a visual representation of your landmarks.
- Open Chrome DevTools
- Navigate to the "Axe" tab in DevTools.
- Click "Scan" to run the accessibility checks.
- Verify that there are no issues related to missing or improper landmarks.


![Screenshot 2024-06-09 121831](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/f57417f1-8853-4b82-ad88-ae0c7b778eda)

### Task 11: Ensure Elements Become a List
The goal of this task is to enhance accessibility by correctly marking up elements that should be structured as lists. It is important to note that automated tools do not always identify elements that should be formatted as lists. Therefore, there was no initial warning, but we proactively addressed this issue.

**To accomplish this:**
- Converted the navigation `<div>` to a `<ul>` with each `<p>` transformed to an `<li>`.
- Transformed the children of the `<div class="package-list">` to a `<ul>`, with each `<span>` inside being an `<li>`.

**To test these changes:**

- Open `fix-a11y/10-index.html` in your web browser.
- Open Chrome DevTools.
- Navigate to the "Axe" tab in DevTools.
- Click "Scan" to run the accessibility checks.
- Verify that there are no issues related to elements that should exist as a list.

![Screenshot 2024-06-09 124117](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/c6085fa1-3d17-4574-9745-d80f574f8c8d)





















