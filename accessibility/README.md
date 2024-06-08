# Accessibility

## Learning Objectives

## Tasks and Usage

### Task 0: Make the "Works" Card Focus Visible
The goal of this task is to ensure that the focus state of the "Works" cards is visually apparent when navigating using the keyboard in the desktop version of the webpage.

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
The goal of this task is to improve accessibility by adding skip links, allowing users to quickly navigate to the primary navigation and main content using keyboard shortcuts.

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

- **Open `fix-a11y/01-index.html` in your web browser.**
- **Use the Axe Chrome Extension:**
   - Install the Axe Chrome Extension from the Chrome Web Store.
   - Open `fix-a11y/01-index.html` in your browser.
   - Open Chrome DevTools
   - Navigate to the "Axe" tab in DevTools.
   - Click "Analyze" to run the accessibility checks.
- **Review the Results:**
   - Check for color contrast issues and other accessibility concerns.
   - Follow the suggestions provided by Axe to fix any issues.

**Before:**

In the initial implementation (`fix-a11y/00-index.html`), the color contrast is poor, making it difficult for users to read the content.
![Screenshot 2024-06-08 153313](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/17d028ad-b908-4d52-bb1d-eca652ce8524)


**After:**

After removing the problematic styles (`fix-a11y/01-index.html`), the color contrast is improved, providing better readability.

![Screenshot 2024-06-08 153324](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/75f09ddc-bd5f-4039-8bd5-de72bf5cc5d1)

















