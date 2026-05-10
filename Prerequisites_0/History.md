# History of JavaScript & Core Concepts

## History of JavaScript

- **1995** — A developer named **Brendan Eich** created a new language
  at Netscape (a browser company) in just **10 days**
- It was first named **Mocha**
- Then renamed to **LiveScript**
- Then finally renamed to **JavaScript**
  (to ride the popularity of Java at that time —
  but Java and JavaScript are **completely different languages**)
- JavaScript was originally built just to make web pages interactive

---

## Types of Languages

### 1. Programming Languages
Languages that can **independently build complete applications**.
They have full control over memory, hardware, logic, and system.
They are **compiled or interpreted** and can run on their own.

**Examples:**
- C
- C++
- Java
- Python
- Rust
- Go

---

### 2. Scripting Languages
Languages that are meant to **run inside another environment** (like a browser).
They cannot run independently — they need a host to execute them.
They are mostly used to **automate tasks or add behavior** to something.

**Examples:**
- JavaScript (runs inside browser / Node.js)
- PHP (runs inside a server)
- Bash (runs inside terminal)
- Ruby

> JavaScript started as a scripting language —
> but today with Node.js it has grown beyond that.

---

### 3. Markup Languages
Languages used to **structure and organize content** on a page.
They are NOT programming languages — they just define what goes where.

**Examples:**
- HTML (structures web pages)
- XML (structures data)
- Markdown (structures text documents)

---

### 4. Styling Languages
Languages used to **control the appearance** of content —
colors, fonts, layout, spacing, etc.

**Examples:**
- CSS
- SASS / SCSS
- LESS

---

## Summary Table — Language Types

| Language   | Type        | Purpose                          |
|------------|-------------|----------------------------------|
| C / C++    | Programming | System software, games, OS       |
| Java       | Programming | Enterprise apps, Android         |
| Python     | Programming | AI, data science, automation     |
| JavaScript | Scripting   | Web interactivity, behavior      |
| PHP        | Scripting   | Server side web development      |
| Bash       | Scripting   | Terminal automation              |
| HTML       | Markup      | Structure of web pages           |
| XML        | Markup      | Data storage and transfer        |
| CSS        | Styling     | Visual design of web pages       |
| SASS       | Styling     | Advanced CSS with extra features |

---

## Difference Between Programming and Scripting Languages

| Feature                  | Programming Language       | Scripting Language              |
|--------------------------|----------------------------|---------------------------------|
| Runs independently?      | ✅ Yes                     | ❌ Needs a host environment     |
| Compiled or Interpreted? | Usually compiled           | Usually interpreted             |
| Speed                    | Faster                     | Slower (interpreted at runtime) |
| Use case                 | Full applications, systems | Automate tasks, add behavior    |
| Examples                 | C, C++, Java               | JavaScript, PHP, Bash           |
| Complexity               | More complex               | Simpler and faster to write     |

---

## What is ECMAScript?

JavaScript was getting popular but different browsers were running it
differently — causing compatibility issues.

So a standards organization called **ECMA International** stepped in
and created a **standard rulebook** for JavaScript.

> **ECMAScript = The official standard / rules that JavaScript follows**

Think of it like:
- ECMAScript = the rulebook / specification
- JavaScript = the actual implementation of those rules

ECMAScript tells browser makers — *"this is how JavaScript should behave"*
and all browsers follow it.

---

### ES5 (ECMAScript 5) — 2009

- Major update that stabilized JavaScript
- Introduced `"use strict"` mode
- Introduced `var` for variable declaration
- This is the **old standard**

```js
// ES5 way
var name = "Prem";
var age = 21;
```

---

### ES6 (ECMAScript 6) — 2015

- The **biggest and most important update** in JavaScript history
- Also called **ES2015**
- Introduced modern JavaScript features we use today

Key features introduced in ES6:
- `let` and `const` (replacing `var`)
- Arrow functions `=>`
- Template literals
- Classes
- Promises
- Modules (`import` / `export`)
- Destructuring
- Spread operator

```js
// ES6 way
let name = "Prem";
const age = 21;

const greet = () => `Hello ${name}`;
```

> **`var` is ES5 — old**
> **`let` and `const` are ES6 — modern and recommended**

---

## Compiler vs Interpreter

These are two different ways a language **translates your code**
into something the computer can understand (machine code).

---

### Compiler

- Reads the **entire code first**
- Translates the whole program at once
- Then runs it
- If there is an error — it tells you **before running**
- Output is a separate executable file
- Generally **faster at runtime**

```
Your Code → [Compiler] → Machine Code → Run
```

**Languages that use Compiler:**
- C
- C++
- Java (compiled to bytecode first)
- Rust
- Go

---

### Interpreter

- Reads and runs code **line by line**
- Does not translate the whole program at once
- If there is an error on line 5 — lines 1 to 4 already ran
- No separate executable file produced
- Generally **slower than compiled languages**

```
Your Code → [Interpreter] → Run line by line
```

**Languages that use Interpreter:**
- JavaScript
- Python
- PHP
- Ruby
- Bash

---

### Compiler vs Interpreter — Comparison Table

| Feature              | Compiler                    | Interpreter                  |
|----------------------|-----------------------------|------------------------------|
| Reads code           | Entire program at once      | Line by line                 |
| Error detection      | Before running              | During running               |
| Speed                | Faster at runtime           | Slower at runtime            |
| Output               | Separate executable file    | No separate file             |
| Examples             | C, C++, Rust, Go            | JavaScript, Python, PHP      |

---

### What About JavaScript?

JavaScript uses an **interpreter** inside the browser.
Each browser has its own JavaScript engine:

| Browser | JS Engine  |
|---------|------------|
| Chrome  | V8         |
| Firefox | SpiderMonkey|
| Safari  | JavaScriptCore |
| Edge    | V8         |

> Modern JS engines also use a technique called **JIT (Just In Time) Compilation**
> which mixes both compiling and interpreting to make JS faster —
> but that is an advanced topic for later.

---

## Simple Rule to Remember

> JavaScript was created by **Brendan Eich** in 10 days — started as **Mocha**  
> **ECMAScript** = the rulebook JavaScript follows  
> **ES5** = old standard → `var`  
> **ES6** = modern standard → `let`, `const`, arrow functions and much more  
> **Compiler** = translates whole code first, then runs  
> **Interpreter** = reads and runs line by line  
> JavaScript uses an **Interpreter** (+ JIT in modern engines)