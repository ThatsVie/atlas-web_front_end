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

### Task 11 - Add Hero Article Section with Background and Styles

For this task, we added the `hero-article` class, set a background image, and included specific content in the Hero section. We also updated the CSS to style the `hero-article` section.

**HTML Changes:**
```html
<header class="section-hero hero-article" style="background-image: url('images/pic-article-02.jpg');" data-section-theme="dark">
  <div class="container">
    <div class="section-body">
      <section class="section-inner">
        <span class="section-category">Digital Life</span>
        <h1 class="section-title">Ut alios omittam, hunc appello, quem ille unum secutus est</h1>
      </section>
    </div>
  </div>
</header>
```

**CSS Changes:**
```css
/*** ARTICLE PAGE ***/
/* Section HERO (article)
   ============================= */
.hero-article {
  background-size: 150rem 100rem;
  background-position: 50% 0;
}

.hero-article::before {
  content: '';
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
}

.hero-article .section-inner {
  text-align: center;
  align-items: center;
  min-height: 40vh;
}

.hero-article .section-body {
  position: relative;
  padding: 7rem 0 0;
  z-index: 2;
}
```

**To test, open the `11-article.html` file in a browser and inspect the `hero-article` section to ensure the new styles and content are applied correctly.**

![11 article html](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/9f2fecf8-31b4-46f7-9dac-030bfdabe2dc)


### Task 12 - Add Main Article Structure and Styles

For this task, we added the `main-article` structure with the specified classes and content. We also updated the CSS to style the `main-article`, `post`, `post-content`, and `post-aside`.

**HTML Changes:**
```html
<main>
  <!– Hero section –>
  <header class="section-hero hero-article" style="background-image: url('images/pic-article-02.jpg');" data-section-theme="dark">
    <div class="container">
      <div class="section-body">
        <section class="section-inner">
          <span class="section-category">Digital Life</span>
          <h1 class="section-title">Ut alios omittam, hunc appello, quem ille unum secutus est</h1>
        </section>
      </div>
    </div>
  </header>
  <div class="main-article">
    <div class="container">
      <div class="post">
        <article class="post-content">
        </article>
        <!-- Aside section -->
        <aside class="post-aside">
          <div class="post-meta"></div>
          <div class="post-share"></div>
        </aside>
      </div>
    </div>
  </div>
</main>
```
**CSS Changes:**
```css
.main-article {
  padding: 5rem 0;
}

/* Post
   ============================= */
.post {
  display: flex;
}

.post-content {
  width: 100%;
}

.post-aside {
  order: -1;
  min-width: 20%;
}
```
**To test, open the `12-article.html` file in a browser and inspect the `main-article` section to ensure the new structure and styles are applied correctly.**

![12 article html](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/3e34df71-7217-4812-a3de-3cf5dc401b4f)


### Task 13 - Add Post Meta Information and Styles

For this task, we added post meta information inside the `post-meta` div and updated the CSS to style the `post-meta` section.

**HTML Changes:**
```html
<div class="post-meta">
  <ul class="post-meta-list row">
    <li class="post-meta-author">
      <strong>Written by:</strong>
      <a href="#" rel="author">William Attaway</a>
    </li>
    <li class="post-meta-date">
      <strong>Posted on:</strong>
      <time datetime="2019-10">October 2019</time>
    </li>
    <li class="post-meta-tag">
      <strong>Tags:</strong>
      <ul class="tag-list">
        <li><a href="#" rel="tag">Web Design</a></li>
        <li><a href="#" rel="tag">UX</a></li>
      </ul>
    </li>
  </ul>
</div>
```
**CSS Changes:**
```css
/* Post Meta
      ============================= */

  .post-meta-list {
    flex-direction: column;
  }

  .post-meta-list strong {
    color: var(--color-primary);
    font-size: var(--font-size-small);
    text-transform: uppercase;
    display: block;
  }

  .post-meta-list [class*='post-meta-'] {
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 0.2rem solid var(--color-light-grey);
  }

  .post-meta-list [class*='post-meta-']:last-child {
    border: none;
    margin-bottom: 3rem;
  }

  /* Tag list
      ============================= */

  .tag-list {
    padding: 0;
    list-style: none;
  }

  .tag-list li {
    display: inline;
  }

  .tag-list li::after {
    content: ", ";
  }

  .tag-list li:last-child::after {
    content: '';
  }
```

**To test, open the `13-article.html` file in a browser and inspect the `post-meta` section to ensure the new structure and styles are applied correctly.**


![13 article html](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/b1d6e512-0967-44f3-bb98-2ab9443db73d)

### Task 14 - Add Social Share Links

For this task, we added social share links inside the `post-share` div by copying the existing social nav list from the footer, removing the Instagram link, and updating the href attributes.

**HTML Changes:**
```html
<div class="post-share">
  <ul class="social nav">
    <li class="social-item nav-item">
      <a href="#" class="social-link">
        <svg viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="25" height="25">
          <title>Facebook icon</title>
          <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z"/>
        </svg>
      </a>
    </li>
    <li class="social-item nav-item">
      <a href="#" class="social-link">
        <svg viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="25" height="25">
          <title>Twitter icon</title>
          <path d="M23.954 4.569a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.061a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.937 4.937 0 0 0 4.604 3.417 9.868 9.868 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 0 0 2.46-2.548l-.047-.02z"/>
        </svg>
      </a>
    </li>
  </ul>
</div>
```

**To test, open the `14-article.html` file in a browser and inspect the `post-share` section to ensure the new structure is applied correctly.**

![14 article html](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/7160c51e-318d-4dc8-87fb-4fb231e76e5d)


### Task 15 - Add Article Content and Styling
For this task, we added specific content to the article page and applied styles.

**HTML Changes:**
```html
<article class="post-content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tum mihi Piso: Quid ergo? Tum ille: Ain tandem? Non autem hoc: igitur ne illud quidem. Sed quod proximum fuit non vidit. Nos commodius agimus. An nisi populari fama?</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed haec omittamus; <b>Hoc Hieronymus summum bonum esse dixit.</b> Duo Reges: constructio interrete.</p>
                  <h2>Prioris generis est docilitas, memoria</h2>
                  <ol>
                    <li>Nec enim, dum metuit, iustus est, et certe, si metuere destiterit, non erit;</li>
                    <li>Quid enim de amicitia statueris utilitatis causa expetenda vides.</li>
                  </ol>
                  <p>Morbi pharetra congue ante ac tincidunt. Donec euismod eu mauris nec laoreet. Praesent id sodales ipsum. Aliquam erat volutpat. Ut porta sem eget libero faucibus, eget convallis nisi finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum accumsan euismod nunc quis viverra.</p>
                  <figure>
                    <img src="images/the-honest-company-j69c0Q650Hw-unsplash.jpg" alt="Glasses, baby converse shoes, black bag, wipes on a dresser with an open drawer" width="620" height="350">
                    <figcaption class="img-caption">Pugnant Stoici cum Peripateticis. Prioris generis est docilitas</figcaption>
                  </figure>
                  <p>Quare conare, quaeso. Dici enim nihil potest verius. Primum divisit ineleganter; Suam denique cuique naturam esse ad vivendum ducem.</p>
                  <blockquote cite="https://www.holbertonschool.com/">Ego autem tibi, Piso, assentior usu hoc venire, ut acrius aliquanto et attentius de claris viris locorum admonitu cogitemus.</blockquote>
                  <p>Omnia contraria, quos etiam insanos esse vultis. Tibi hoc incredibile, quod beatissimum.</p>
                  <h2>Piso igitur hoc modo, vir optimus tuique, ut scis, amantissimus.</h2>
                  <p><a href="https://www.holbertonschool.com/" target="_blank" rel="noopener noreferrer">Apparet statim, quae sint officia, quae actiones.</a> Quae in controversiam veniunt, de iis, si placet, disseramus.</p>
                  <ul>
                    <li>Tubulum fuisse, qua illum, cuius is condemnatus est rogatione, P.</li>
                    <li>Quis est autem dignus nomine hominis, qui unum diem totum velit esse in genere isto voluptatis?</li>
                    <li>Sed in rebus apertissimis nimium longi sumus.</li>
                  </ul>
                  <p>Hoc etsi multimodis reprehendi potest, tamen accipio, quod dant. Atqui, inquam, Cato, si istud optinueris, traducas me ad te totum licebit. Nemo nostrum istius generis asotos iucunde putat vivere. Res enim se praeclare habebat, et quidem in utraque parte. Qui autem esse poteris, nisi te amor ipse ceperit? Ita fit cum gravior, tum etiam splendidior oratio. De vacuitate doloris eadem sententia erit. Sin tantum modo ad indicia veteris memoriae cognoscenda, curiosorum.</p>
                </article>
```
**CSS Changes:**
```css
.post img {
    width: 100%;
    height: auto;
  }

  .post-content p:first-child {
    font-size: var(--font-size-x-large);
  }

  .post-content .img-caption {
    margin: 1rem 0;
    padding: 0 .5rem;
    font-size: var(--font-size-small);
    color: var(--color-grey);
    text-align: center;
  }
```
**To test, open the `100-article.html` file in a browser**


![100 article html 1](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/da37f63c-fa59-4446-9df2-43f0f85525e0)


![100 article html 2](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/3f3f95c9-f4e1-49ed-b03e-fe1090a28aea)


![100 article html 3](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/3399d244-5f0f-44f6-a52a-349444753e49)



