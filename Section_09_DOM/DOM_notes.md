# DOM — Document Object Model

## Video Resource: [JavaScript DOM | Learn What Matters - Sheryians Coding School](https://youtu.be/2IPEp_4obGw?si=cUmWC5TiXfVnl11j)


## What is the DOM?

When a browser loads an HTML file — it does not just display it as plain text.

It reads the entire HTML and creates a **tree-like structure** of all the elements in memory.

This tree is called the **Document Object Model — DOM**.

Every HTML element — `div`, `h1`, `button`, `input` — becomes a **node** in this tree.

JavaScript can then interact with this tree — read it, modify it, add to it, delete from it.

```
Document
└── html
    ├── head
    │     └── title
    └── body
          ├── h1
          ├── p
          └── button
```

**Explanation:**

The DOM is not HTML — it is the **browser's representation of HTML** as a structured object.

HTML is just a text file — DOM is what the browser builds from that text file.

JavaScript talks to the DOM — not directly to the HTML file.

---

## What is DOM Manipulation?

DOM manipulation means **using JavaScript to interact with and change**
the structure, content, or style of a webpage — without reloading the page.

```js
// Changing the text of an element
document.getElementById("title").innerText = "Hello, World!";

// Changing the color of an element
document.getElementById("title").style.color = "red";
```

**Explanation:**

Before DOM manipulation — if you wanted to change something on a webpage,
you had to reload the entire page.

With DOM manipulation — JavaScript can update any part of the page
**instantly and dynamically** — without any reload.

---

## What Can You Make or Do With the DOM?

The DOM is what makes websites **interactive and dynamic**.

Almost everything you see on a modern website is powered by DOM manipulation:

| What You Can Do | Real Example |
|----------------|--------------|
| Change text or content | Update a like count when button is clicked |
| Change styles dynamically | Toggle dark mode on a website |
| Show or hide elements | Dropdown menus, modals, popups |
| Add or remove elements | Add items to a todo list |
| Handle user events | Button clicks, form submissions, keyboard input |
| Validate forms | Show error if email is empty |
| Create animations | Smooth transitions without CSS only |
| Build interactive UIs | Image sliders, tabs, accordions |
| Fetch and display data | Show API data on the page without reload |

---

## Advantages of the DOM

**1. Dynamic Content Updates**

You can update any part of the page without a full page reload —
making the experience fast and smooth for the user.

**2. User Interaction**

DOM lets you respond to user actions — clicks, typing, scrolling, hovering —
and update the page accordingly.

**3. Complete Control Over the Page**

Every element, attribute, style and content is accessible and modifiable
through the DOM — you have full control over what the user sees.

**4. Works in Real Time**

Changes happen instantly — no server request needed for simple UI updates.

**5. Foundation for Frameworks**

React, Vue, Angular — all modern frontend frameworks are built on top of DOM manipulation.
Understanding the DOM gives you the foundation to learn these frameworks faster.

---

## Use Cases of DOM in Real World

| Use Case | How DOM is Used |
|----------|----------------|
| Todo App | Add, delete, mark complete — all done via DOM |
| E-commerce Cart | Add items, update quantity, show total — DOM manipulation |
| Form Validation | Show/hide error messages based on user input |
| Image Slider | Change the displayed image on button click |
| Dark Mode Toggle | Add/remove a CSS class on the body element |
| Search Filter | Show only matching results as user types |
| Chat Application | Append new messages to the chat window in real time |
| Notification System | Show and auto-hide notifications |

---

## Does DOM Mean Frontend JavaScript?

**Yes — DOM is essentially Frontend JavaScript.**

Here is why:

JavaScript has two environments where it runs:

| Environment | Where | What it does |
|-------------|-------|-------------|
| **Browser (Frontend)** | Chrome, Firefox, Safari | Interacts with DOM — makes pages interactive |
| **Node.js (Backend)** | Server | Handles databases, APIs, file system |

The DOM **only exists in the browser** — it is a browser feature, not a JavaScript feature.

Node.js does not have a DOM — because there is no webpage to manipulate on a server.

So when people say "Frontend JavaScript" — they mean JavaScript that runs in the browser
and interacts with the DOM to build interactive user interfaces.

**Explanation:**

JavaScript the language is the same everywhere.

But DOM manipulation is **exclusively a browser thing** — making it the core of frontend development.

---

## Why Do We Need to Learn the DOM?

**1. It is the bridge between JavaScript and the webpage**

Without DOM — JavaScript has no way to interact with what the user sees.
DOM is how JavaScript talks to the browser.

**2. Every frontend project uses it**

Whether you are building a simple form or a complex dashboard —
DOM manipulation is always involved.

**3. Foundation for frameworks**

React, Vue, Angular all do DOM manipulation under the hood.
If you understand the DOM — frameworks become much easier to learn.

**4. Makes you a complete frontend developer**

Knowing HTML and CSS is not enough — DOM is what brings a webpage to life.

---

## Significance of DOM in Real World

Before DOM and JavaScript — webpages were **static**.

Every time you clicked something — the page would reload to show new content.

With DOM manipulation:

- Pages became **interactive** — respond to user actions instantly
- User experience became **smooth and fast** — no more full page reloads
- **Single Page Applications (SPAs)** became possible — Gmail, Twitter, Instagram
  all work without reloading the page — all powered by DOM manipulation
- **Real time updates** became possible — live scores, chat messages, notifications

**Explanation:**

The shift from static HTML pages to dynamic interactive web apps —
was made possible by JavaScript's ability to manipulate the DOM.

Every modern website you use daily — Amazon, YouTube, Zomato, LinkedIn —
relies heavily on DOM manipulation for its interactivity.

---

## Quick Reference

> DOM → browser's tree-like representation of HTML elements

> DOM Manipulation → using JavaScript to change content, style or structure without page reload

> DOM is a **browser feature** — does not exist in Node.js

> DOM = Frontend JavaScript — it is what makes webpages interactive

> Every frontend framework — React, Vue, Angular — is built on top of DOM

> Learning DOM → foundation for becoming a complete frontend developer

---

# 4 Pillars of DOM


## The 4 Pillars of DOM

Everything you do with the DOM revolves around these 4 core pillars:

1. **Selection of an Element** — select an HTML element in JavaScript
2. **Changing HTML** — update content of elements
3. **Changing CSS** — update styles of elements
4. **Event Listener** — respond to user actions

---

## Pillar 1 — Selection of an Element

### What

Selection means — taking an HTML element that is written in your HTML file
and **grabbing it inside JavaScript** so you can work with it.

Think of it like — your HTML has elements sitting on the page,
and JavaScript needs to point at one of them and say
"I want to work with this element."

### Why It Is Required

Without selecting an element — JavaScript has no idea which part of the page
you want to change, read, or interact with.

Selection is always the **first step** — before you can change anything,
you need to select it first.

### What is `document`?

`document` is a **built-in object** that the browser gives you automatically.

It represents the **entire HTML page** — the whole DOM tree.

Think of `document` as the entry point — the door through which
JavaScript enters and accesses any element on the page.

```js
console.log(document); // prints the entire HTML page as an object
```

---

### `document.querySelector()`

The most commonly used method to select elements.

You pass a **CSS selector** inside the quotes — and it returns
the **first matching element** it finds on the page.

```js
document.querySelector("h1"); // selects the first h1 element on the page
```

---

### Different Ways to Use `document.querySelector()`

---

**1. Select by HTML Tag Name**

```js
document.querySelector("h1");       // selects first <h1>
document.querySelector("p");        // selects first <p>
document.querySelector("button");   // selects first <button>
```

**Explanation:**

Just write the tag name as a string — same as CSS tag selector.

Selects the **first** matching element on the page.

---

**2. Select by ID**

```js
document.querySelector("#title");   // selects element with id="title"
document.querySelector("#navbar");  // selects element with id="navbar"
```

**Explanation:**

Add `#` before the id name — same as CSS id selector.

IDs are unique — so this always targets one specific element.

---

**3. Select by Class**

```js
document.querySelector(".card");    // selects first element with class="card"
document.querySelector(".btn");     // selects first element with class="btn"
```

**Explanation:**

Add `.` before the class name — same as CSS class selector.

If multiple elements have the same class — `querySelector` returns only the **first one**.

---

**4. Select by Attribute**

```js
document.querySelector("[type='text']");   // selects first input with type="text"
document.querySelector("[placeholder]");   // selects first element with placeholder attribute
```

---

**5. Select Nested Elements**

```js
document.querySelector(".card h2");  // selects h2 inside an element with class="card"
document.querySelector("nav a");     // selects first anchor tag inside nav
```

**Explanation:**

You can chain selectors just like CSS — to target elements inside other elements.

---

### Storing the Selected Element in a Variable

Once you select an element — you can store it in a variable
so you don't have to select it again every time you need it.

```js
var a = document.querySelector("h1");
console.log(a); // prints the h1 element
```

**Explanation:**

`a` now holds a reference to that `h1` element.

You can use `a` anywhere in your code to read or modify that element —
without writing `document.querySelector("h1")` every single time.

```js
let title = document.querySelector("#title");
let btn = document.querySelector(".submit-btn");
let input = document.querySelector("input");
```

---

### Other Selection Methods

| Method | What it selects | Returns |
|--------|----------------|---------|
| `document.querySelector("css")` | First matching element | Single element |
| `document.querySelectorAll("css")` | All matching elements | NodeList (like array) |
| `document.getElementById("id")` | Element by id | Single element |
| `document.getElementsByClassName("class")` | Elements by class | HTMLCollection |
| `document.getElementsByTagName("tag")` | Elements by tag | HTMLCollection |

**Explanation:**

`querySelector` and `querySelectorAll` are the **modern and preferred** methods —
they accept any CSS selector making them very flexible.

`getElementById`, `getElementsByClassName` are older methods —
still work but less flexible since they only accept one type of selector.

---

### Use Cases of Element Selection

| Use Case | Example |
|----------|---------|
| Change heading text on button click | Select `h1` then update its text |
| Read value from an input field | Select `input` then read its value |
| Show or hide a modal | Select the modal element then toggle visibility |
| Add a class to highlight an element | Select the element then add a class |

---

## Quick Reference

> `document` → entry point to the entire DOM — represents the whole page

> `document.querySelector("css selector")` → selects the **first** matching element

> Use `#id` for id, `.class` for class, `tag` for tag name — same as CSS

> Store selected element in a variable — avoids selecting the same element repeatedly

> `querySelectorAll` → selects **all** matching elements → returns a NodeList

---

## Pillar 2 — Changing HTML

### What

After selecting an element — the next thing you want to do is
**read or change its content**.

Changing HTML means updating what is displayed inside an element
on the page — without touching the HTML file and without reloading the page.

### Why It Is Required

In real applications — content on a page is never fully static.

A like count updates, a cart total changes, a username appears after login,
an error message shows up on wrong input — all of this is done by
changing HTML content through JavaScript.

### How

```js
var a = document.querySelector("h1");
a.innerHTML = "Hey guys, What's up"; // changes the content of h1
```

**Explanation:**

`a` holds the selected `h1` element.

`a.innerHTML = "Hey guys, What's up"` — replaces whatever was inside
the `h1` with the new text.

The page updates instantly — no reload needed.

---

### Short Way vs Stored Variable Way

**Short way — one line:**

```js
document.querySelector("h1").innerHTML = "Hello guys, What's up";
```

**Stored variable way:**

```js
var a = document.querySelector("h1");
a.innerHTML = "Hey guys, What's up";
```

**Explanation:**

Both do exactly the same thing.

But if you need to work with the same element **multiple times** —
storing it in a variable is the better approach.

It avoids selecting the same element again and again —
which would make the browser search through the DOM repeatedly.

```js
// Without variable — selecting h1 three times (inefficient)
document.querySelector("h1").innerHTML = "Hello";
document.querySelector("h1").style.color = "red";
document.querySelector("h1").style.fontSize = "40px";

// With variable — selecting h1 once (efficient)
var heading = document.querySelector("h1");
heading.innerHTML = "Hello";
heading.style.color = "red";
heading.style.fontSize = "40px";
```

---

## All Ways to Change HTML Content

---

### 1. `innerHTML`

Reads or sets the **HTML content** inside an element — including any HTML tags.

```js
var a = document.querySelector("div");

// Reading
console.log(a.innerHTML); // returns everything inside the div including HTML tags

// Setting
a.innerHTML = "<h2>Hello <strong>World</strong></h2>";
// renders actual HTML — h2 and strong tags will be applied
```

**Explanation:**

`innerHTML` interprets the string as **HTML** — so any tags you write
will actually be rendered as HTML elements on the page.

---

### 2. `textContent`

Reads or sets the **plain text content** inside an element — ignores all HTML tags.

```js
var a = document.querySelector("h1");

// Reading
console.log(a.textContent); // returns only the raw text — no HTML tags

// Setting
a.textContent = "<strong>Hello</strong>";
// does NOT render HTML — prints literally: <strong>Hello</strong>
```

**Explanation:**

`textContent` treats everything as plain text.

Even if you write HTML tags — they are displayed as raw text, not rendered.

---

### 3. `innerText`

Similar to `textContent` — reads or sets visible text only.

But it is **aware of CSS styling** — it respects `display: none` and `visibility: hidden`.

```js
var a = document.querySelector("p");

console.log(a.innerText);    // returns only visible text
console.log(a.textContent);  // returns all text including hidden elements
```

---

### 4. `outerHTML`

Returns or sets the **entire element including its own tag** — not just the content inside.

```js
var a = document.querySelector("h1");

console.log(a.outerHTML); // <h1>Hello World</h1> — includes the h1 tag itself

a.outerHTML = "<h2>Replaced Heading</h2>"; // replaces the entire h1 with an h2
```

**Explanation:**

`innerHTML` gives you what is **inside** the tag.

`outerHTML` gives you the **tag itself + everything inside** it.

---

## `innerHTML` vs `textContent` vs `innerText`

| Feature | `innerHTML` | `textContent` | `innerText` |
|---------|------------|--------------|------------|
| Reads HTML tags? | ✅ Yes | ❌ No — raw text | ❌ No — raw text |
| Renders HTML tags when setting? | ✅ Yes | ❌ No | ❌ No |
| CSS aware? | ❌ No | ❌ No | ✅ Yes |
| Performance | Slower | Faster | Medium |
| Security risk? | ⚠️ Yes — XSS risk | ✅ Safe | ✅ Safe |

---

## When to Use Which?

**Use `innerHTML` when:**

- You want to insert actual HTML elements dynamically
- Building UI elements like cards, lists, buttons from JavaScript

```js
document.querySelector(".container").innerHTML = `
    <div class="card">
        <h2>Harsh</h2>
        <p>Developer</p>
    </div>
`;
```

**Use `textContent` when:**

- You just want to update plain text
- You are displaying user input — safer, avoids security risks

```js
document.querySelector("h1").textContent = userName; // safe — no HTML injection
```

**Use `innerText` when:**

- You want only the **visible text** on screen
- You need to respect CSS — like ignoring hidden elements

---

### ⚠️ Security Warning — `innerHTML` XSS Risk

`innerHTML` can be dangerous if you are inserting **user-provided content** directly.

```js
// ❌ Dangerous — if userInput contains malicious script
document.querySelector("div").innerHTML = userInput;

// ✅ Safe — always use textContent for user input
document.querySelector("div").textContent = userInput;
```

**Explanation:**

If a user types something like `<script>stealData()</script>` —
and you insert it with `innerHTML` — it could execute malicious code.

This is called **XSS (Cross Site Scripting)** — a very common security vulnerability.

Always use `textContent` when displaying user input — use `innerHTML` only
when you are inserting your own trusted HTML.

---

## Use Cases of Changing HTML

| Use Case | Method | Example |
|----------|--------|---------|
| Update a counter | `textContent` | Like count, cart items |
| Show username after login | `textContent` | Display user's name |
| Insert a card dynamically | `innerHTML` | Product cards from API |
| Show error message | `textContent` | Form validation error |
| Replace an entire section | `innerHTML` | Load new content section |

---

## Quick Reference

> `innerHTML` → reads/sets HTML content — **renders HTML tags**

> `textContent` → reads/sets plain text — **does not render HTML tags**

> `innerText` → like textContent but **CSS aware** — only visible text

> `outerHTML` → includes the **element's own tag** — not just inner content

> Use `innerHTML` for inserting HTML | Use `textContent` for plain text and user input

> Never use `innerHTML` with user input — **XSS security risk**

> Store element in variable if using it multiple times — more efficient

---

## Pillar 3 — Changing CSS

### What

After selecting an element — you can also **change its styles directly through JavaScript**.

This means updating colors, sizes, fonts, visibility, positioning — anything you can do in CSS —
but doing it dynamically through JavaScript.

### Why It Is Required

CSS is static — it is written before the page loads and stays the same.

But in real applications — styles need to **change based on user actions**.

A button changes color when hovered, a modal appears when clicked,
a dark mode toggles on and off — none of this is possible with CSS alone.

JavaScript + DOM makes styles dynamic and interactive.

### How

```js
var a = document.querySelector("h1");
a.style.color = "red"; // changes the color of h1 to red
```

**Explanation:**

`a.style` gives you access to the **inline style** of the selected element.

You then set any CSS property as a key-value pair — just like CSS, but in JavaScript syntax.

---

## Most Important Rule — camelCase in JavaScript

In CSS — properties with multiple words are written with a **hyphen `-`**:

```css
background-color: black;
font-size: 20px;
border-radius: 10px;
```

But in JavaScript — you **cannot use `-`** in property names
because `-` is treated as the **subtraction operator**.

So in DOM — all CSS properties are written in **camelCase**:

```js
var a = document.querySelector("h1");

a.style.backgroundColor = "black";  // background-color → backgroundColor
a.style.fontSize = "20px";          // font-size → fontSize
a.style.borderRadius = "10px";      // border-radius → borderRadius
```

**Explanation:**

The rule is simple — whenever you see a `-` in a CSS property name,
remove the `-` and capitalize the next letter.

`background-color` → `backgroundColor`

`font-size` → `fontSize`

`margin-top` → `marginTop`

`z-index` → `zIndex`

---

## What Can You Target Using `.style`?

Every CSS property is available through `.style` — here are the most commonly used ones:

---

### Text & Font

```js
a.style.color = "red";              // text color
a.style.fontSize = "24px";          // font size
a.style.fontWeight = "bold";        // font weight
a.style.fontFamily = "Arial";       // font family
a.style.textAlign = "center";       // text alignment
a.style.textDecoration = "none";    // underline, none, etc
a.style.lineHeight = "1.5";         // line height
a.style.letterSpacing = "2px";      // letter spacing
```

---

### Background

```js
a.style.backgroundColor = "black";          // background color
a.style.backgroundImage = "url('img.jpg')"; // background image
a.style.backgroundSize = "cover";           // background size
```

---

### Box Model — Margin, Padding, Border

```js
a.style.margin = "10px";            // all sides margin
a.style.marginTop = "20px";         // top margin only
a.style.padding = "10px";           // all sides padding
a.style.paddingLeft = "15px";       // left padding only
a.style.border = "1px solid red";   // border shorthand
a.style.borderRadius = "10px";      // border radius
a.style.boxShadow = "2px 2px 5px gray"; // box shadow
```

---

### Size & Layout

```js
a.style.width = "200px";            // width
a.style.height = "100px";           // height
a.style.maxWidth = "500px";         // max width
a.style.display = "none";           // hide element
a.style.display = "block";          // show element
a.style.display = "flex";           // flexbox
a.style.flexDirection = "column";   // flex direction
a.style.justifyContent = "center";  // justify content
a.style.alignItems = "center";      // align items
a.style.gap = "10px";               // gap between flex items
```

---

### Positioning

```js
a.style.position = "absolute";      // position type
a.style.top = "20px";               // top offset
a.style.left = "10px";              // left offset
a.style.zIndex = "10";              // z-index
a.style.overflow = "hidden";        // overflow
```

---

### Visibility & Opacity

```js
a.style.opacity = "0.5";            // 50% transparent
a.style.visibility = "hidden";      // hides but keeps space
a.style.display = "none";           // hides and removes space
```

---

### Cursor & Pointer

```js
a.style.cursor = "pointer";         // hand cursor on hover
```

---

## Advantages of Changing CSS Through DOM

**1. Dynamic Styling**

Styles change based on user interaction — without page reload.

**2. Conditional Styling**

Apply different styles based on conditions — like a score turning red if below passing marks.

```js
let score = 25;
let scoreEl = document.querySelector(".score");

if(score < 33) {
    scoreEl.style.color = "red";
} else {
    scoreEl.style.color = "green";
}
```

**3. Animations and Transitions**

Trigger CSS transitions by changing styles through JavaScript.

```js
let box = document.querySelector(".box");
box.style.transform = "translateX(200px)";
box.style.transition = "all 0.3s ease";
```

---

## Use Cases of Changing CSS

| Use Case | Style Changed |
|----------|--------------|
| Dark mode toggle | `backgroundColor`, `color` |
| Highlight selected item | `backgroundColor`, `border` |
| Show / hide a dropdown | `display` |
| Progress bar | `width` |
| Error highlight on input | `border`, `color` |
| Fade in an element | `opacity` |
| Responsive font size | `fontSize` |

---

## Better Approach — Using Classes Instead of Inline Styles

While `.style` works — for larger style changes, a better approach is
to **add or remove CSS classes** instead of setting individual properties.

```js
// Instead of this
a.style.backgroundColor = "black";
a.style.color = "white";
a.style.padding = "10px";

// Do this — toggle a class
a.classList.add("dark-mode"); // adds the class
a.classList.remove("dark-mode"); // removes the class
a.classList.toggle("dark-mode"); // adds if not there, removes if there
```

**Explanation:**

Define the styles in CSS using a class — then just add or remove the class in JavaScript.

This keeps styles in CSS where they belong — and keeps JavaScript clean.

This will be covered in detail in the next topic.

---

## Quick Reference

> `element.style.property = "value"` → sets inline style on the element

> CSS uses `kebab-case` — DOM uses `camelCase` → `background-color` becomes `backgroundColor`

> Every CSS property is accessible through `.style`

> For multiple style changes — adding/removing a CSS class is cleaner than setting individual styles

> `display: "none"` → hides element and removes space | `visibility: "hidden"` → hides but keeps space

---

## Pillar 4 — Event Listener

### What is an Event?

An **event** is any action that happens on a webpage —
either by the user or by the browser itself.

Clicking a button, typing in an input, hovering over an image,
scrolling the page, submitting a form — all of these are events.

**Events are predefined** — JavaScript and the browser already know about them.
You just need to tell JavaScript — "when this event happens, run this code."

### What is an Event Listener?

An event listener is a way to **listen for a specific event on an element**
and execute a function when that event occurs.

Think of it like setting up a watchman — "keep watching this element,
and the moment this event happens — run this code."

---

## Types of Events in DOM

---

### Mouse Events

| Event | When it fires |
|-------|--------------|
| `click` | When element is clicked |
| `dblclick` | When element is double clicked |
| `mouseenter` | When mouse enters the element |
| `mouseleave` | When mouse leaves the element |
| `mouseover` | When mouse moves over element or its children |
| `mouseout` | When mouse moves out of element |
| `mousemove` | Every time mouse moves inside the element |
| `mousedown` | When mouse button is pressed down |
| `mouseup` | When mouse button is released |
| `contextmenu` | When right click is done |

---

### Keyboard Events

| Event | When it fires |
|-------|--------------|
| `keydown` | When any key is pressed down |
| `keyup` | When any key is released |
| `keypress` | When a key that produces a character is pressed (deprecated) |

---

### Form Events

| Event | When it fires |
|-------|--------------|
| `submit` | When a form is submitted |
| `change` | When value of input, select or textarea changes |
| `input` | Every time the value of an input changes (real time) |
| `focus` | When an element gets focus (clicked into) |
| `blur` | When an element loses focus |
| `reset` | When a form is reset |

---

### Window / Document Events

| Event | When it fires |
|-------|--------------|
| `load` | When the page fully loads |
| `DOMContentLoaded` | When HTML is fully parsed (before images load) |
| `resize` | When browser window is resized |
| `scroll` | When user scrolls the page |
| `unload` | When user leaves the page |

---

### Touch Events (Mobile)

| Event | When it fires |
|-------|--------------|
| `touchstart` | When finger touches the screen |
| `touchend` | When finger is lifted from screen |
| `touchmove` | When finger moves on screen |

---

### Clipboard Events

| Event | When it fires |
|-------|--------------|
| `copy` | When user copies content |
| `paste` | When user pastes content |
| `cut` | When user cuts content |

---

## How to Use an Event Listener

```js
var a = document.querySelector("h1");

a.addEventListener("click", function() {
    a.innerHTML = "changed";
    a.style.color = "yellow";
    a.style.backgroundColor = "#000";
    console.log("Hello");
});
```

**Theme of this block of code:**

As soon as we click the `h1` — the code written inside the function will be executed.

---

### Breaking Down the Code Line by Line

**Line 1:**
```js
var a = document.querySelector("h1");
```
Selects the first `h1` on the page and stores it in variable `a`.

**Line 2:**
```js
a.addEventListener("click", function() {
```
`addEventListener` is called on element `a`.

It takes two arguments:
- First → the **event name** as a string — `"click"`
- Second → a **function** that runs when the event happens — called a **callback function**

**Lines 3, 4, 5:**
```js
a.innerHTML = "changed";
a.style.color = "yellow";
a.style.backgroundColor = "#000";
```
These three lines run **only when the h1 is clicked**:
- Content of `h1` changes to `"changed"`
- Text color becomes yellow
- Background becomes black

**Line 6:**
```js
console.log("Hello");
```
Logs `"Hello"` in the browser console — also runs only on click.

---

### Syntax of `addEventListener`

```js
element.addEventListener("eventName", function() {
    // code to run when event happens
});
```

Or using arrow function — cleaner:

```js
element.addEventListener("click", () => {
    // code to run when event happens
});
```

---

### More Examples

**Click event — change button text:**

```js
let btn = document.querySelector("button");

btn.addEventListener("click", function() {
    btn.innerHTML = "Clicked!";
});
```

**Mouseover event — highlight element:**

```js
let card = document.querySelector(".card");

card.addEventListener("mouseenter", function() {
    card.style.backgroundColor = "lightblue";
});

card.addEventListener("mouseleave", function() {
    card.style.backgroundColor = "white";
});
```

**Keydown event — detect key press:**

```js
document.addEventListener("keydown", function(event) {
    console.log("Key pressed:", event.key);
});
```

**Input event — real time typing:**

```js
let input = document.querySelector("input");

input.addEventListener("input", function() {
    console.log(input.value); // logs value as user types
});
```

**Submit event — form submission:**

```js
let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // stops page from reloading
    console.log("Form submitted!");
});
```

---

## The `event` Object

Every event listener automatically receives an **event object** —
it contains information about the event that just happened.

```js
a.addEventListener("click", function(event) {
    console.log(event);         // full event object
    console.log(event.target);  // the element that was clicked
    console.log(event.type);    // "click"
});
```

**Explanation:**

`event.target` → the exact element that triggered the event — very useful
when you have many elements and need to know which one was interacted with.

`event.preventDefault()` → stops the default browser behavior —
like stopping a form from reloading the page on submit.

---

## Use Cases of Event Listeners

| Use Case | Event Used |
|----------|-----------|
| Button click action | `click` |
| Dark mode toggle | `click` |
| Form validation on submit | `submit` |
| Real time search filter | `input` |
| Keyboard shortcut | `keydown` |
| Highlight on hover | `mouseenter` / `mouseleave` |
| Detect scroll position | `scroll` |
| Responsive behavior on resize | `resize` |
| Show tooltip on hover | `mouseover` |

---

## Advantages of Event Listeners

**1. Makes Pages Interactive**

Without event listeners — pages are static and do not respond to user actions.

**2. Separation of Concerns**

HTML handles structure, CSS handles style, JavaScript handles behavior —
event listeners are the bridge between user actions and JavaScript behavior.

**3. Multiple Listeners on One Element**

You can add multiple event listeners to the same element for different events.

```js
btn.addEventListener("click", handleClick);
btn.addEventListener("mouseenter", handleHover);
btn.addEventListener("keydown", handleKey);
```

**4. Remove When Not Needed**

You can remove an event listener when it is no longer needed.

```js
btn.removeEventListener("click", handleClick);
```

---

## Quick Reference

> Event → any action that happens on a webpage — click, keypress, scroll, etc.

> Events are **predefined** — JavaScript already knows all of them

> `addEventListener("eventName", function)` → listens for event and runs function when it happens

> The function inside `addEventListener` is called a **callback function**

> `event` object → automatically passed to the callback — contains info about the event

> `event.target` → the element that triggered the event

> `event.preventDefault()` → stops default browser behavior

> Multiple event listeners can be added to the same element    

---

# Multiple Events

## What are Multiple Events?

Multiple events means **attaching more than one event listener** —
either on the same element or on different elements.

In real applications — a single element often needs to respond
to more than one type of user interaction.

---

## Multiple Events on the Same Element

You can call `addEventListener` multiple times on the same element
for different events — each one is independent.

```js
let btn = document.querySelector("button");

btn.addEventListener("click", function() {
    btn.innerHTML = "Clicked!";
    btn.style.backgroundColor = "green";
});

btn.addEventListener("mouseenter", function() {
    btn.style.backgroundColor = "lightblue";
});

btn.addEventListener("mouseleave", function() {
    btn.style.backgroundColor = "";
});
```

**Explanation:**

Three separate event listeners are attached to the same `btn` element.

When user **clicks** → text changes to "Clicked!" and background turns green.

When user **hovers over** the button → background turns light blue.

When user **moves mouse away** → background resets to default.

All three work independently — one does not interfere with the other.

---

## Multiple Events on Different Elements

You can also attach events to multiple different elements — each doing its own thing.

```js
let heading = document.querySelector("h1");
let para = document.querySelector("p");
let btn = document.querySelector("button");

heading.addEventListener("click", function() {
    heading.style.color = "red";
});

para.addEventListener("mouseenter", function() {
    para.style.backgroundColor = "yellow";
});

btn.addEventListener("click", function() {
    btn.innerHTML = "Submitted!";
});
```

**Explanation:**

Each element has its own event listener — they all work independently.

Clicking `h1` makes it red.

Hovering over `p` highlights it yellow.

Clicking `button` changes its text.

---

## Real World Example — Dark Mode Toggle

A very common use case that uses multiple events together.

```js
let toggleBtn = document.querySelector(".toggle-btn");
let body = document.querySelector("body");
let heading = document.querySelector("h1");

// Click event — toggle dark mode
toggleBtn.addEventListener("click", function() {
    body.style.backgroundColor = body.style.backgroundColor === "black" ? "white" : "black";
    body.style.color = body.style.color === "white" ? "black" : "white";
    toggleBtn.innerHTML = toggleBtn.innerHTML === "Dark Mode" ? "Light Mode" : "Dark Mode";
});

// Mouseenter — highlight button on hover
toggleBtn.addEventListener("mouseenter", function() {
    toggleBtn.style.opacity = "0.8";
});

// Mouseleave — reset button opacity
toggleBtn.addEventListener("mouseleave", function() {
    toggleBtn.style.opacity = "1";
});
```

**Explanation:**

`click` event → toggles dark and light mode by switching background and text color.

`mouseenter` event → slightly fades the button when hovered — giving a visual feedback.

`mouseleave` event → resets the opacity when mouse moves away.

Three events working together on the same button — creating a smooth user experience.

---

## Real World Example — Form with Multiple Events

```js
let input = document.querySelector("input");
let submitBtn = document.querySelector(".submit-btn");
let errorMsg = document.querySelector(".error");

// input event — real time feedback as user types
input.addEventListener("input", function() {
    if(input.value.length > 0) {
        input.style.border = "2px solid green";
        errorMsg.style.display = "none";
    } else {
        input.style.border = "2px solid red";
    }
});

// focus event — highlight input when clicked into
input.addEventListener("focus", function() {
    input.style.outline = "2px solid blue";
});

// blur event — remove highlight when clicked away
input.addEventListener("blur", function() {
    input.style.outline = "";
});

// click event — validate on submit
submitBtn.addEventListener("click", function() {
    if(input.value === "") {
        errorMsg.style.display = "block";
        errorMsg.innerHTML = "Field cannot be empty!";
    } else {
        errorMsg.innerHTML = "Submitted successfully!";
        errorMsg.style.color = "green";
    }
});
```

**Explanation:**

`input` event → fires every time user types — gives real time green/red border feedback.

`focus` event → fires when user clicks into the input — adds a blue outline.

`blur` event → fires when user clicks away — removes the outline.

`click` event on button → fires when submitted — validates and shows error or success.

Four different events working together — creating a complete form experience.

---

## Real World Example — Image Gallery

```js
let images = document.querySelectorAll(".gallery-img");
let preview = document.querySelector(".preview");

images.forEach(function(img) {

    // click — show image in preview
    img.addEventListener("click", function() {
        preview.style.backgroundImage = `url(${img.src})`;
        preview.style.display = "block";
    });

    // mouseenter — add highlight border
    img.addEventListener("mouseenter", function() {
        img.style.border = "3px solid blue";
        img.style.cursor = "pointer";
    });

    // mouseleave — remove highlight border
    img.addEventListener("mouseleave", function() {
        img.style.border = "none";
    });
});
```

**Explanation:**

`querySelectorAll` selects all gallery images — returns a NodeList.

`forEach` loops through all images and attaches **three event listeners** to each one.

`click` → displays the clicked image in the preview area.

`mouseenter` → adds a blue border when hovered — shows it is clickable.

`mouseleave` → removes the border when mouse moves away.

This is a real world pattern — attaching the same set of events to multiple elements using a loop.

---

## Key Things to Remember

**1. Order of events matters**

Events fire in the order they are triggered — not the order they are defined.

**2. Each `addEventListener` is independent**

Adding a new listener does not remove or override the previous one.

**3. Same event, same element, two listeners — both run**

```js
btn.addEventListener("click", function() { console.log("First"); });
btn.addEventListener("click", function() { console.log("Second"); });

// Output on click:
// First
// Second
```

**Explanation:**

Both listeners run — one does not cancel the other.

This is different from `onclick` property — which gets overwritten:

```js
btn.onclick = function() { console.log("First"); };
btn.onclick = function() { console.log("Second"); }; // overwrites the first

// Output on click:
// Second — only second runs
```

---

## Quick Reference

> Multiple events → attach as many `addEventListener` calls as needed — all work independently

> Same element, different events → each listener handles its own event

> Same element, same event, multiple listeners → all listeners run

> `addEventListener` does not overwrite — `onclick` does

> Use `forEach` to attach the same events to multiple elements cleanly

> Multiple events together create **complete and smooth user experiences**

---

# Section 9: DOM — Selecting Multiple Elements

---

## The Problem with `querySelector`

If you have three `h1` elements in your HTML and try to select them
using `document.querySelector("h1")` — it will **not** select all three.

It only selects the **first matching element** and stops there.

```html
<h1>Heading 1</h1>
<h1>Heading 2</h1>
<h1>Heading 3</h1>
```

```js
var h = document.querySelector("h1");
console.log(h); // only <h1>Heading 1</h1> — first one only
```

**Explanation:**

`querySelector` is designed to return a **single element** — the first match it finds.

If you need all matching elements — you need a different method.

---

## Solution — `document.querySelectorAll()`

`querySelectorAll` selects **all elements** that match the given CSS selector
and returns them together.

```js
var h = document.querySelectorAll("h1");
console.log(h); // NodeList(3) [h1, h1, h1]
```

---

## What is a NodeList?

When `querySelectorAll` finds all matching elements —
it does not return a regular JavaScript array.

It returns a **NodeList** — a special list-like collection of DOM elements.

It looks like an array and behaves like one in many ways —
but it is not a full array.

```js
var h = document.querySelectorAll("h1");

console.log(h);        // NodeList(3) [h1, h1, h1]
console.log(h[0]);     // first h1 element
console.log(h[1]);     // second h1 element
console.log(h.length); // 3
```

**What NodeList supports:**

- Access by index → `h[0]`, `h[1]`
- `.length` property
- `forEach` loop

**What NodeList does NOT support (unlike arrays):**

- `map()`, `filter()`, `reduce()` — these are array methods, not available on NodeList directly

To use array methods — convert NodeList to an array first:

```js
var h = document.querySelectorAll("h1");
var arr = Array.from(h); // convert NodeList to array

arr.map(function(el) {
    el.style.color = "red";
});
```

---

## Looping Through All Selected Elements

Once you have all elements in a NodeList — use `forEach` to loop through
and do something with each one.

```js
var h = document.querySelectorAll("h1");

h.forEach(function(e) {
    console.log(e); // logs each h1 element one by one
});
```

**Explanation:**

`forEach` goes through the NodeList one element at a time.

`e` holds each `h1` element — one per iteration.

This is exactly like `forEach` on arrays — but working on a NodeList.

---

## Practical Examples

---

### Change All h1 Colors at Once

```js
var headings = document.querySelectorAll("h1");

headings.forEach(function(e) {
    e.style.color = "red";
    e.style.fontSize = "32px";
});
```

**Explanation:**

Instead of selecting each `h1` separately and changing it —
`querySelectorAll` grabs all of them at once.

`forEach` then applies the same style change to every `h1` on the page.

---

### Add Click Event to All Buttons

```js
var buttons = document.querySelectorAll("button");

buttons.forEach(function(btn) {
    btn.addEventListener("click", function() {
        btn.style.backgroundColor = "green";
        btn.innerHTML = "Clicked!";
    });
});
```

**Explanation:**

All buttons on the page are selected at once.

`forEach` loops through each button and attaches a `click` event listener to it.

When any button is clicked — it turns green and shows "Clicked!".

This is much cleaner than writing a separate `addEventListener` for each button.

---

### Select by Class — Multiple Elements

```js
var cards = document.querySelectorAll(".card");

cards.forEach(function(card) {
    card.addEventListener("mouseenter", function() {
        card.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
    });

    card.addEventListener("mouseleave", function() {
        card.style.boxShadow = "none";
    });
});
```

**Explanation:**

All elements with class `card` are selected.

Each card gets a hover shadow effect — without writing separate code for each card.

---

## `querySelector` vs `querySelectorAll`

| Feature | `querySelector` | `querySelectorAll` |
|---------|----------------|-------------------|
| Returns | First matching element | All matching elements |
| Return type | Single DOM element | NodeList |
| Use when | You need one specific element | You need all matching elements |
| Supports `forEach`? | ❌ Not needed — single element | ✅ Yes |
| Supports array methods? | ❌ Not applicable | ❌ Not directly — convert first |

---

## Quick Reference

> `querySelector` → returns **only the first** matching element

> `querySelectorAll` → returns **all** matching elements as a **NodeList**

> NodeList → list-like collection — supports index access, `.length`, and `forEach`

> NodeList is **not an array** — use `Array.from()` to convert if you need array methods

> Use `forEach` on NodeList to loop through all selected elements

> Combine `querySelectorAll` + `forEach` + `addEventListener` to attach events to multiple elements at once

---

# Different Ways to Select Elements


## Why Are There Multiple Ways to Select Elements?

JavaScript has evolved over time — older methods like `getElementById`
and `getElementsByClassName` existed first.

Later `querySelector` and `querySelectorAll` were introduced —
which are more flexible and powerful.

Today both exist — so it is important to know all of them.

---

## 1. `document.querySelector()`

Selects the **first element** that matches the given CSS selector.

```js
// By tag name
document.querySelector("h1");

// By id
document.querySelector("#title");

// By class
document.querySelector(".card");

// By attribute
document.querySelector("[type='text']");

// Nested selector
document.querySelector(".container h2");
```

**Explanation:**

Accepts any valid CSS selector — tag, id, class, attribute, nested.

Always returns **one element** — the first match.

If no match found → returns `null`.

---

## 2. `document.querySelectorAll()`

Selects **all elements** that match the given CSS selector.

```js
// All h1 elements
document.querySelectorAll("h1");

// All elements with class "card"
document.querySelectorAll(".card");

// All input elements of type text
document.querySelectorAll("input[type='text']");
```

**Explanation:**

Returns a **NodeList** — a list of all matching elements.

If no match found → returns an empty NodeList `[]`, not `null`.

Use `forEach` to loop through the results.

```js
let cards = document.querySelectorAll(".card");

cards.forEach(function(card) {
    card.style.border = "1px solid red";
});
```

---

## 3. `document.getElementById()`

Selects a **single element by its `id`** attribute.

```js
document.getElementById("title");    // selects element with id="title"
document.getElementById("navbar");   // selects element with id="navbar"
```

**Explanation:**

You do **not** write `#` before the id name here — just the id name directly.

IDs are unique — so this always returns one specific element.

If no match → returns `null`.

```js
// querySelector way — needs #
document.querySelector("#title");

// getElementById way — no #
document.getElementById("title");

// Both give the same result
```

---

## 4. `document.getElementsByClassName()`

Selects **all elements** that have the given class name.

```js
document.getElementsByClassName("card");    // all elements with class="card"
document.getElementsByClassName("btn");     // all elements with class="btn"
```

**Explanation:**

You do **not** write `.` before the class name — just the class name directly.

Returns an **HTMLCollection** — similar to NodeList but slightly different.

```js
let cards = document.getElementsByClassName("card");
console.log(cards); // HTMLCollection [div.card, div.card, div.card]
```

**Important difference — HTMLCollection vs NodeList:**

HTMLCollection does **not** support `forEach` directly.

You need to convert it to an array first:

```js
let cards = document.getElementsByClassName("card");

Array.from(cards).forEach(function(card) {
    card.style.color = "red";
});
```

---

## 5. `document.getElementsByTagName()`

Selects **all elements** of a given HTML tag.

```js
document.getElementsByTagName("h1");       // all h1 elements
document.getElementsByTagName("p");        // all paragraph elements
document.getElementsByTagName("button");   // all button elements
document.getElementsByTagName("*");        // every single element on the page
```

**Explanation:**

Returns an **HTMLCollection** of all matching tag elements.

Same as `getElementsByClassName` — does not support `forEach` directly.

Convert to array to use array methods.

```js
let allButtons = document.getElementsByTagName("button");

Array.from(allButtons).forEach(function(btn) {
    btn.style.backgroundColor = "blue";
});
```

---

## 6. `document.getElementsByName()`

Selects all elements with a given `name` attribute — mostly used with form inputs.

```js
document.getElementsByName("username");   // all elements with name="username"
document.getElementsByName("gender");     // all elements with name="gender"
```

**Explanation:**

Returns a **NodeList** — supports `forEach`.

Most commonly used with radio buttons and checkboxes in forms
where multiple inputs share the same `name`.

```html
<input type="radio" name="gender" value="male">
<input type="radio" name="gender" value="female">
```

```js
let genderOptions = document.getElementsByName("gender");

genderOptions.forEach(function(option) {
    console.log(option.value);
});
```

---

## All Methods — Side by Side Comparison

| Method | Selector Type | Returns | `forEach` Support |
|--------|--------------|---------|------------------|
| `querySelector("css")` | Any CSS selector | Single element | ❌ Not needed |
| `querySelectorAll("css")` | Any CSS selector | NodeList | ✅ Yes |
| `getElementById("id")` | id only | Single element | ❌ Not needed |
| `getElementsByClassName("class")` | class only | HTMLCollection | ❌ Convert first |
| `getElementsByTagName("tag")` | tag only | HTMLCollection | ❌ Convert first |
| `getElementsByName("name")` | name attribute | NodeList | ✅ Yes |

---

## Which One Should You Use?

| Situation | Recommended Method |
|-----------|-------------------|
| Select one specific element by id | `getElementById` or `querySelector("#id")` |
| Select first matching element | `querySelector` |
| Select all matching elements | `querySelectorAll` |
| Need any CSS selector | `querySelector` / `querySelectorAll` |
| Working with old codebases | You may see `getElementsByClassName` / `getElementsByTagName` |

**Simple Rule:**

> In modern JavaScript — prefer `querySelector` and `querySelectorAll` for everything.

> They accept any CSS selector — making them the most flexible and powerful.

> `getElementById`, `getElementsByClassName`, `getElementsByTagName` are older methods —
> you will still see them in older codebases so it is important to know them.

---

## NodeList vs HTMLCollection

| Feature | NodeList | HTMLCollection |
|---------|---------|---------------|
| Returned by | `querySelectorAll`, `getElementsByName` | `getElementsByClassName`, `getElementsByTagName` |
| Access by index | ✅ Yes | ✅ Yes |
| `.length` | ✅ Yes | ✅ Yes |
| `forEach` | ✅ Yes | ❌ No — convert first |
| Array methods | ❌ Convert first | ❌ Convert first |
| Convert to array | `Array.from(nodeList)` | `Array.from(htmlCollection)` |

---

## Quick Reference

> `querySelector` → first match → any CSS selector → single element

> `querySelectorAll` → all matches → any CSS selector → NodeList

> `getElementById` → single element by id → no `#` needed

> `getElementsByClassName` → all by class → no `.` needed → HTMLCollection

> `getElementsByTagName` → all by tag → HTMLCollection

> `getElementsByName` → all by name attribute → NodeList

> Prefer `querySelector` and `querySelectorAll` in modern code — most flexible

> HTMLCollection does not support `forEach` — use `Array.from()` to convert first

---

# Asynchronous JavaScript

---

## What is Asynchronous JavaScript?

By default — JavaScript is **synchronous** — it runs code **line by line**,
one at a time, in order.

It waits for each line to finish before moving to the next.

```js
console.log("First");
console.log("Second");
console.log("Third");

// Output:
// First
// Second
// Third
```

**The Problem with Synchronous Code:**

Imagine you are fetching data from a server — it takes 5 seconds.

In synchronous JavaScript — the entire code would **freeze and wait** for 5 seconds
before moving to the next line.

The user would see a completely unresponsive page — no clicks, no scrolling, nothing.

---

### What is Asynchronous JavaScript?

Asynchronous JavaScript means — **certain tasks can run in the background**
without blocking the rest of the code.

JavaScript starts the task, moves on to other code,
and comes back to handle the result when the task is done.

```js
console.log("First");

setTimeout(function() {
    console.log("Second"); // runs after 2 seconds — but doesn't block
}, 2000);

console.log("Third");

// Output:
// First
// Third
// Second  ← comes after 2 seconds
```

**Explanation:**

`setTimeout` starts a timer in the background.

JavaScript does not wait for it — it immediately moves to `console.log("Third")`.

After 2 seconds — `"Second"` is printed.

This is asynchronous behavior — non-blocking, runs in the background.

---

### Why Does JavaScript Need Async?

JavaScript runs on a **single thread** — it can only do one thing at a time.

Without async — any slow task (API call, file read, timer) would freeze everything.

Async lets JavaScript **handle slow tasks without blocking** the user experience.

---

### Common Async Tools in JavaScript

| Tool | Purpose |
|------|---------|
| `setTimeout` | Run code once after a delay |
| `setInterval` | Run code repeatedly at a fixed interval |
| `Promises` | Handle async operations cleanly |
| `async / await` | Modern way to write async code |
| `fetch` | Make API calls asynchronously |

---

## `setTimeout()`

### What

`setTimeout` is a built-in JavaScript function that **runs a piece of code
once after a specified delay** (in milliseconds).

### Why

When you want something to happen after a certain amount of time —
like showing a notification after 3 seconds, hiding a popup after 5 seconds,
or delaying an animation — `setTimeout` is the tool.

### How

```js
setTimeout(function() {
    console.log("This runs after 2 seconds");
}, 2000); // 2000 milliseconds = 2 seconds
```

**Explanation:**

First argument → the function to run after the delay.

Second argument → the delay in **milliseconds** — `1000ms = 1 second`.

JavaScript does not wait — it sets the timer in the background and moves on.

After the time is up — the function runs.

---

### Storing `setTimeout` in a Variable

You can store the timeout in a variable — this lets you cancel it later.

```js
let timer = setTimeout(function() {
    console.log("This will run after 3 seconds");
}, 3000);

// Cancel the timeout before it runs
clearTimeout(timer);
```

**Explanation:**

`clearTimeout(timer)` cancels the scheduled function — it will never run.

Useful when the user performs an action that makes the timeout unnecessary —
like dismissing a popup before it auto-closes.

---

### Real World Examples of `setTimeout`

**Auto-hide a success message:**

```js
let message = document.querySelector(".success-msg");
message.style.display = "block";

setTimeout(function() {
    message.style.display = "none"; // hide after 3 seconds
}, 3000);
```

**Delayed redirect after form submit:**

```js
setTimeout(function() {
    window.location.href = "/dashboard"; // redirect after 2 seconds
}, 2000);
```

**Show a welcome popup after page loads:**

```js
setTimeout(function() {
    document.querySelector(".popup").style.display = "block";
}, 1000); // show after 1 second
```

---

### Use Cases of `setTimeout`

| Use Case | Delay |
|----------|-------|
| Auto-hide notification | 3-5 seconds |
| Delayed page redirect | 2 seconds |
| Show welcome popup | 1 second after load |
| Debounce user input | Short delay after typing stops |
| Animation delay | Stagger animations one by one |

---

## `setInterval()`

### What

`setInterval` is a built-in JavaScript function that **runs a piece of code
repeatedly at a fixed time interval** — until you stop it.

### Why

When you need something to happen again and again at a regular interval —
like a clock updating every second, a slideshow changing every 5 seconds,
or a countdown timer — `setInterval` is the tool.

### How

```js
setInterval(function() {
    console.log("This runs every 2 seconds");
}, 2000);
```

**Explanation:**

The function runs every `2000ms` — every 2 seconds — indefinitely.

It keeps running until you stop it with `clearInterval`.

---

### Stopping `setInterval` with `clearInterval`

```js
let counter = 0;

let interval = setInterval(function() {
    counter++;
    console.log("Count:", counter);

    if(counter === 5) {
        clearInterval(interval); // stop after 5 times
        console.log("Stopped!");
    }
}, 1000);
```

**Explanation:**

`clearInterval(interval)` stops the interval from running further.

Always store `setInterval` in a variable — so you can stop it when needed.

Without `clearInterval` — it runs forever and causes **memory leaks**.

---

### Real World Examples of `setInterval`

**Live Clock:**

```js
setInterval(function() {
    let now = new Date();
    document.querySelector(".clock").innerHTML =
        `${now.getHours()} : ${now.getMinutes()} : ${now.getSeconds()}`;
}, 1000); // updates every second
```

**Countdown Timer:**

```js
let timeLeft = 10;

let countdown = setInterval(function() {
    document.querySelector(".timer").innerHTML = timeLeft;
    timeLeft--;

    if(timeLeft < 0) {
        clearInterval(countdown);
        document.querySelector(".timer").innerHTML = "Time's Up!";
    }
}, 1000);
```

**Auto Image Slideshow:**

```js
let images = ["img1.jpg", "img2.jpg", "img3.jpg"];
let index = 0;

setInterval(function() {
    document.querySelector(".slide").src = images[index];
    index = (index + 1) % images.length; // loops back to 0
}, 3000); // changes every 3 seconds
```

---

### Use Cases of `setInterval`

| Use Case | Interval |
|----------|---------|
| Digital clock | Every 1 second |
| Countdown timer | Every 1 second |
| Auto image slideshow | Every 3-5 seconds |
| Live data refresh | Every 10-30 seconds |
| Progress bar animation | Every 100ms |
| Blinking cursor | Every 500ms |

---

## `setTimeout` vs `setInterval`

| Feature | `setTimeout` | `setInterval` |
|---------|-------------|--------------|
| Runs | Once after a delay | Repeatedly at fixed intervals |
| Stops automatically? | ✅ Yes — after running once | ❌ No — runs forever until stopped |
| Cancel with | `clearTimeout()` | `clearInterval()` |
| Use when | One time delayed action | Repeated action at fixed rate |
| Example | Auto-hide notification | Live clock, countdown timer |

---

## Quick Reference

> **Synchronous** → one line at a time — blocks everything until done

> **Asynchronous** → runs in background — does not block other code

> `setTimeout(fn, ms)` → runs `fn` **once** after `ms` milliseconds

> `setInterval(fn, ms)` → runs `fn` **every** `ms` milliseconds — forever

> `clearTimeout(timer)` → cancels a scheduled `setTimeout`

> `clearInterval(interval)` → stops a running `setInterval`

> Always store `setInterval` in a variable — so you can stop it with `clearInterval`

> `1000ms = 1 second` — always pass time in milliseconds

---

# Section 10: Async JavaScript — Promises, async/await & fetch

---

## The Problem Before Promises — Callback Hell

Before promises existed — async operations were handled using **callbacks**.

When multiple async operations needed to happen one after another —
the code became deeply nested and hard to read.

```js
setTimeout(function() {
    console.log("Step 1 done");
    setTimeout(function() {
        console.log("Step 2 done");
        setTimeout(function() {
            console.log("Step 3 done");
            // keeps nesting deeper and deeper...
        }, 1000);
    }, 1000);
}, 1000);
```

**Explanation:**

This deeply nested structure is called **Callback Hell** — also called the **Pyramid of Doom**.

It is very hard to read, debug and maintain.

Promises were introduced to solve exactly this problem.

---

## Promises

### What

A **Promise** is an object that represents the **eventual result of an async operation**.

It is like a real life promise — "I promise to give you the result,
either it will succeed or it will fail."

A Promise has three possible states:

| State | Meaning |
|-------|---------|
| `Pending` | Operation is still running — result not ready yet |
| `Fulfilled` | Operation completed successfully — result is ready |
| `Rejected` | Operation failed — something went wrong |

### Why

Promises make async code **cleaner, more readable and easier to chain** —
without falling into callback hell.

### How

```js
let promise = new Promise(function(resolve, reject) {
    // async operation here
    let success = true;

    if(success) {
        resolve("Data received successfully!"); // fulfilled
    } else {
        reject("Something went wrong!");        // rejected
    }
});
```

**Explanation:**

`new Promise()` creates a promise.

It takes a function with two parameters — `resolve` and `reject`.

`resolve(value)` → call this when the operation succeeds — fulfills the promise.

`reject(error)` → call this when the operation fails — rejects the promise.

---

### Handling a Promise — `.then()` and `.catch()`

```js
promise
    .then(function(result) {
        console.log(result); // "Data received successfully!"
    })
    .catch(function(error) {
        console.log(error); // "Something went wrong!"
    });
```

**Explanation:**

`.then()` → runs when the promise is **fulfilled** — receives the resolved value.

`.catch()` → runs when the promise is **rejected** — receives the error.

`.finally()` → runs regardless of success or failure — useful for cleanup.

```js
promise
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    })
    .finally(function() {
        console.log("Always runs — success or failure");
    });
```

---

### Promise Chaining

One of the biggest advantages of promises — you can **chain multiple `.then()` calls**
without nesting.

```js
fetch("https://api.example.com/user")
    .then(function(response) {
        return response.json(); // convert response to JSON
    })
    .then(function(data) {
        console.log(data.name); // use the data
    })
    .catch(function(error) {
        console.log("Error:", error);
    });
```

**Explanation:**

Each `.then()` receives the return value of the previous `.then()`.

This is clean, flat and readable — no nesting needed.

---

## `async` / `await`

### What

`async` / `await` is the **modern and cleanest way to write asynchronous code**.

It is built on top of Promises — but makes async code look and read
like normal synchronous code.

### Why

Even with promises and `.then()` chaining — the code can get complex
when there are many steps.

`async/await` makes async code look simple, clean and easy to understand.

### How

**`async`** — add this keyword before a function to make it asynchronous.

An `async` function always returns a Promise.

**`await`** — add this before a Promise to **wait for it to resolve** —
before moving to the next line.

`await` can only be used inside an `async` function.

```js
async function getData() {
    let result = await fetch("https://api.example.com/users");
    let data = await result.json();
    console.log(data);
}

getData();
```

**Explanation:**

`async` makes `getData` an asynchronous function.

`await fetch(...)` — waits for the fetch to complete before moving forward.

`await result.json()` — waits for the JSON conversion to complete.

The code reads top to bottom — just like synchronous code — but runs asynchronously.

---

### Handling Errors with `async/await` — `try/catch`

```js
async function getData() {
    try {
        let result = await fetch("https://api.example.com/users");
        let data = await result.json();
        console.log(data);
    } catch(error) {
        console.log("Error:", error); // handles any error that occurred
    } finally {
        console.log("Always runs");
    }
}

getData();
```

**Explanation:**

`try` → wrap the async code here — if anything fails it jumps to `catch`.

`catch(error)` → handles the error — equivalent to `.catch()` in promises.

`finally` → always runs — equivalent to `.finally()` in promises.

---

### Promises vs `async/await` — Same Thing, Different Syntax

```js
// Using Promises
function getUser() {
    fetch("https://api.example.com/user")
        .then(function(res) { return res.json(); })
        .then(function(data) { console.log(data); })
        .catch(function(err) { console.log(err); });
}

// Using async/await — cleaner
async function getUser() {
    try {
        let res = await fetch("https://api.example.com/user");
        let data = await res.json();
        console.log(data);
    } catch(err) {
        console.log(err);
    }
}
```

**Explanation:**

Both do exactly the same thing — `async/await` is just cleaner syntax on top of Promises.

In modern JavaScript — `async/await` is the preferred way to handle async operations.

---

## `fetch()`

### What

`fetch` is a built-in browser function used to **make HTTP requests to APIs**
and get data from a server.

It is the modern replacement for the older `XMLHttpRequest`.

### Why

In real applications — data rarely lives in your JavaScript file.

It comes from a **server or an API** — like getting a list of users,
products, weather data, or any other dynamic content.

`fetch` is how JavaScript talks to that server.

### How

```js
fetch("https://jsonplaceholder.typicode.com/users")
    .then(function(response) {
        return response.json(); // convert raw response to JSON
    })
    .then(function(data) {
        console.log(data); // array of users
    })
    .catch(function(error) {
        console.log("Error:", error);
    });
```

---

### How `fetch` Works — Step by Step

**Step 1 — Make the request:**

```js
fetch("https://api.example.com/users")
```

`fetch` sends a request to the URL and returns a **Promise**.

The Promise resolves with a **Response object** — not the actual data yet.

**Step 2 — Convert to JSON:**

```js
.then(function(response) {
    return response.json();
})
```

`response.json()` reads the response body and converts it to a JavaScript object.

This is also async — it returns another Promise.

**Step 3 — Use the data:**

```js
.then(function(data) {
    console.log(data); // actual data — array, object, etc.
})
```

Now `data` holds the actual usable JavaScript data.

---

### `fetch` with `async/await` — Cleaner Way

```js
async function getUsers() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();
        console.log(data);
    } catch(error) {
        console.log("Error:", error);
    }
}

getUsers();
```

---

### Displaying Fetched Data on the Page — Real World Example

```js
async function loadUsers() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let users = await response.json();

        let container = document.querySelector(".users-container");

        users.forEach(function(user) {
            container.innerHTML += `
                <div class="card">
                    <h2>${user.name}</h2>
                    <p>${user.email}</p>
                </div>
            `;
        });
    } catch(error) {
        console.log("Failed to load users:", error);
    }
}

loadUsers();
```

**Explanation:**

Fetches a list of users from a public API.

Loops through each user and creates a card with their name and email.

Inserts each card into the `.users-container` on the page.

This is a very common real world pattern — fetch data from API, display on page.

---

### `fetch` with POST Request — Sending Data

`fetch` is not only for getting data — you can also **send data** to a server.

```js
async function createPost() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",                        // HTTP method
            headers: {
                "Content-Type": "application/json" // telling server we are sending JSON
            },
            body: JSON.stringify({                 // convert JS object to JSON string
                title: "My Post",
                body: "Post content here",
                userId: 1
            })
        });

        let data = await response.json();
        console.log("Created:", data);
    } catch(error) {
        console.log("Error:", error);
    }
}

createPost();
```

**Explanation:**

By default `fetch` makes a `GET` request — to receive data.

To send data — pass a second argument with `method`, `headers`, and `body`.

`JSON.stringify()` converts the JavaScript object into a JSON string — required for sending.

---

## Promises vs `async/await` vs Callbacks

| Feature | Callbacks | Promises | `async/await` |
|---------|-----------|---------|--------------|
| Readability | ❌ Hard — deeply nested | ✅ Better — chaining | ✅ Best — reads like sync code |
| Error handling | `if(err)` checks | `.catch()` | `try/catch` |
| Debugging | ❌ Hard | ✅ Easier | ✅ Easiest |
| Modern? | ❌ Old | ✅ Yes | ✅ Most modern |
| Built on | — | Callbacks | Promises |

---

## Quick Reference

> **Promise** → object representing future result — `pending`, `fulfilled`, `rejected`

> `.then()` → runs on success | `.catch()` → runs on failure | `.finally()` → always runs

> **`async`** → makes a function return a Promise

> **`await`** → waits for a Promise to resolve — only inside `async` functions

> `async/await` is built on Promises — cleaner syntax, same behavior

> **`fetch`** → makes HTTP requests to APIs — returns a Promise

> Always call `response.json()` to convert raw response to usable data

> Use `try/catch` with `async/await` for error handling

> `fetch` default → GET request | Pass options object for POST, PUT, DELETE
