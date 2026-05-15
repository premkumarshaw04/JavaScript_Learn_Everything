# Section 6: Functions in JavaScript

---

## What is a Function?

A function is a **reusable block of code** that performs a specific task.
You write the code once — and call it whenever you need it.
Without functions you would have to write the same code again and again.

```js
// Without function — repetitive
console.log("Hello, Harsh!");
console.log("Hello, Alice!");
console.log("Hello, Bob!");

// With function — write once, use many times
function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet("Harsh");  // Hello, Harsh!
greet("Alice");  // Hello, Alice!
greet("Bob");    // Hello, Bob!
```

---

## Why Do We Use Functions?

- **Reusability** — write once, use anywhere in the code
- **Cleaner code** — break big problems into smaller pieces
- **Easy to maintain** — change in one place reflects everywhere
- **Avoid repetition** — no need to write same logic again and again
- **Better readability** — code reads like steps of a plan

---

## How to Create a Function

```
function functionName(parameters) {
    // code to run
    return value; // optional
}
```

```js
function add(a, b) {
    return a + b;
}

let result = add(5, 3);
console.log(result); // 8
```

**Explanation:**
- `function` → keyword to declare a function
- `add` → name of the function
- `a, b` → parameters — placeholders for values passed in
- `return` → sends the result back to wherever the function was called
- `add(5, 3)` → calling the function with arguments `5` and `3`

---

## Advantages of Using Functions

**1. Reusability**
```js
function calculateTax(price) {
    return price * 0.18;
}

console.log(calculateTax(100)); // 18
console.log(calculateTax(500)); // 90
console.log(calculateTax(250)); // 45
```

Same logic used three times — written only once.

---

**2. Easy to Maintain**
```js
// If tax rate changes — update only in one place
function calculateTax(price) {
    return price * 0.20; // changed from 0.18 to 0.20
}
```

Without a function you would have to find and update every place
where tax is calculated — very error prone.

---

**3. Breaking Big Problems into Small Pieces**
```js
function getUserInput() { ... }
function validateInput(input) { ... }
function processOrder(order) { ... }
function sendConfirmation(order) { ... }
```

Each function handles one job — code becomes organized and readable.

---

## Use Cases of Functions

| Use Case | Example |
|----------|---------|
| Perform calculations | `calculateArea(radius)` |
| Validate user input | `isValidEmail(email)` |
| Reusable UI actions | `showAlert(message)` |
| API calls | `fetchUserData(userId)` |
| Event handling | `handleClick()` |
| Data transformation | `formatDate(date)` |

---

## Function Naming Rules

### Rules — Must Follow

**1. Must start with a letter, `_` or `$` — never a number**
```js
function greet() {}    // ✅
function _helper() {}  // ✅
function $init() {}    // ✅
function 1greet() {}   // ❌ cannot start with number
```

**2. No spaces in the name**
```js
function getUserName() {} // ✅
function get user name() {} // ❌ spaces not allowed
```

**3. No special characters except `_` and `$`**
```js
function get-name() {} // ❌ hyphen not allowed
function get_name() {} // ✅ underscore allowed
```

**4. Cannot use reserved keywords as function names**
```js
function if() {}     // ❌ if is a keyword
function return() {} // ❌ return is a keyword
function myFunc() {} // ✅
```

---

### Conventions — Should Follow

**1. Use camelCase for function names**
```js
function getUserData() {}   // ✅ camelCase
function get_user_data() {} // ⚠️ works but not preferred in JS
```

**2. Name should describe what the function does**
```js
function x() {}           // ❌ meaningless name
function calculateAge() {} // ✅ clear and descriptive
```

**3. Use a verb at the start — functions perform actions**
```js
function name() {}        // ❌ noun — unclear
function getName() {}     // ✅ verb + noun — clear
function validateForm() {} // ✅
function fetchData() {}    // ✅
function isLoggedIn() {}   // ✅ for boolean returning functions
```

---

## Quick Reference

> Function → reusable block of code — write once, use many times
> `function name(params) { return value; }` → basic syntax
> Always name functions with a **verb** — they perform actions
> Use **camelCase** for function names
> Cannot start with number, use spaces, or use reserved keywords

---

# Section 6: Functions — Part 2

---

## Different Ways to Create Functions

In JavaScript, functions are **first class citizens** —
meaning functions can be stored in variables, passed around, and used like any other value.
This is why JavaScript gives us multiple ways to create functions.

---

## 1. Function Declaration (Function Statement)

### What
The most basic and traditional way to define a function.
Uses the `function` keyword followed by a name.

### How

```js
function greet(name) {
    return `Hello, ${name}!`;
}

greet("Harsh"); // Hello, Harsh!
```

### Key Points
- Starts with the `function` keyword
- Has a name — always
- Gets **hoisted** — can be called even before it is declared in the code

```js
// Calling before declaration — works because of hoisting
greet("Harsh"); // ✅ Hello, Harsh!

function greet(name) {
    return `Hello, ${name}!`;
}
```

**Explanation:**
Function declarations are hoisted to the top by JavaScript.
So even if you call the function before writing it — it works.

---

## 2. Function Expression

### What
A function that is **stored inside a variable**.
In JavaScript, since we can store anything in a variable —
we can store a function in a variable too.

### How

```js
let fnc = function() {
    console.log("I am a function expression");
}

fnc(); // I am a function expression
```

**Explanation:**
Here the function has no name of its own — it is called an **anonymous function**.
The variable `fnc` holds the function.
So `fnc` becomes the name used to call it.

```js
let add = function(a, b) {
    return a + b;
}

console.log(add(5, 3)); // 8
```

### Key Points
- Function is stored in a variable
- The function itself has no name — variable name is used to call it
- **Not hoisted** — cannot be called before the line where it is defined

```js
fnc(); // ❌ Error — cannot access before initialization

let fnc = function() {
    console.log("Hello");
}
```

---

## 3. Arrow Function (ES6)
    > it is also called as fat arrow function.

### What
A shorter and cleaner way to write functions.
Introduced in ES6 — very commonly used in modern JavaScript.

### How

```js
const abc = () => {
    console.log("I am an arrow function");
}

abc(); // I am an arrow function
```

```js
const add = (a, b) => {
    return a + b;
}

console.log(add(5, 3)); // 8
```

### Shorthand — Single Line Arrow Function
If the function only has one line that returns a value —
you can skip the `{}` and `return` keyword.

```js
// Full arrow function
const multiply = (a, b) => {
    return a * b;
}

// Shorthand — same result
const multiply = (a, b) => a * b;

console.log(multiply(4, 5)); // 20
```

### Single Parameter — No Brackets Needed
If there is only one parameter — parentheses are optional.

```js
const greet = name => `Hello, ${name}!`;

console.log(greet("Harsh")); // Hello, Harsh!
```

### Key Points
- Shorter syntax — cleaner to read and write
- Also stored in a variable — not hoisted
- Behaves differently with `this` keyword (advanced topic — covered later)

---

## All Three Side by Side

```js
// 1. Function Declaration
function greetDeclaration(name) {
    return `Hello, ${name}!`;
}

// 2. Function Expression
const greetExpression = function(name) {
    return `Hello, ${name}!`;
}

// 3. Arrow Function
const greetArrow = (name) => `Hello, ${name}!`;

// All three give the same output
console.log(greetDeclaration("Harsh"));  // Hello, Harsh!
console.log(greetExpression("Harsh"));   // Hello, Harsh!
console.log(greetArrow("Harsh"));        // Hello, Harsh!
```

---

## Comparison — All Three Ways

| Feature | Function Declaration | Function Expression | Arrow Function |
|---------|---------------------|--------------------|--------------:|
| Syntax | `function name(){}` | `let name = function(){}` | `let name = () => {}` |
| Hoisted? | ✅ Yes | ❌ No | ❌ No |
| Has own name? | ✅ Yes | ❌ Anonymous | ❌ Anonymous |
| Stored in variable? | ❌ No | ✅ Yes | ✅ Yes |
| Modern? | Old style | Modern | Most modern (ES6) |
| Short syntax? | ❌ No | ❌ No | ✅ Yes |

---

## Quick Reference

> **Function Declaration** → `function name() {}` → hoisted → can call before declaration
> **Function Expression** → `let fn = function() {}` → not hoisted → stored in variable
> **Arrow Function** → `let fn = () => {}` → not hoisted → cleanest syntax
> In JS — functions can be stored in variables just like any other value
> Single line arrow function → skip `{}` and `return` → `(a, b) => a + b`

---

# Section 6: Functions — Part 3

---

## Why Use Arrow Functions When We Already Have Normal Functions?

This is a very common question — and a frequent interview topic.
Arrow functions are not just a shorter syntax — they have real differences
that make them more useful in certain situations.

---

## Reason 1 — Cleaner and Shorter Syntax

Normal functions have more boilerplate to write.
Arrow functions reduce that noise — especially for small functions.

```js
// Normal function
function add(a, b) {
    return a + b;
}

// Arrow function — same result, less code
const add = (a, b) => a + b;
```

**Explanation:**
When a function does one simple thing — arrow function keeps it in one clean line.
No need for `function` keyword, no need for `{}`, no need for `return`.
This makes code easier to read at a glance.

---

## Reason 2 — Works Beautifully with Array Methods

Arrow functions are used heavily with array methods like
`forEach`, `map`, `filter`, `reduce` — which are used all the time in real projects.

```js
let numbers = [1, 2, 3, 4, 5];

// Normal function — verbose
let doubled = numbers.map(function(num) {
    return num * 2;
});

// Arrow function — clean
let doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8, 10]
```

**Explanation:**
The arrow function version reads almost like plain English —
"map each num to num times 2".
This is why arrow functions are the standard in modern JavaScript code.

---

## Reason 3 — No Own `this` (Most Important Difference)

This is the **biggest and most important reason** arrow functions exist.

In normal functions — `this` changes depending on how the function is called.
This causes a very common and confusing bug.

Arrow functions do **not have their own `this`** —
they take `this` from the surrounding code where they are written.

```js
// Problem with normal function
const person = {
    name: "Harsh",
    greet: function() {
        setTimeout(function() {
            console.log(`Hello, ${this.name}`); // ❌ undefined
        }, 1000);
    }
}

person.greet();
```

**Explanation:**
Inside `setTimeout`, the normal function creates its own `this`.
That `this` is no longer the `person` object — it is lost.
So `this.name` gives `undefined`.

```js
// Fixed with arrow function
const person = {
    name: "Harsh",
    greet: function() {
        setTimeout(() => {
            console.log(`Hello, ${this.name}`); // ✅ Harsh
        }, 1000);
    }
}

person.greet();
```

**Explanation:**
Arrow function does not create its own `this`.
It looks at the surrounding scope — which is the `greet` method —
where `this` correctly refers to the `person` object.
So `this.name` gives `"Harsh"`.

---

## Reason 4 — Implicit Return for One-Liners

Normal functions always need an explicit `return` statement.
Arrow functions can return a value without writing `return` — for single line functions.

```js
// Normal function — needs return
function square(n) {
    return n * n;
}

// Arrow function — implicit return
const square = n => n * n;

console.log(square(5)); // 25
```

---

## When NOT to Use Arrow Functions

Arrow functions are not always the right choice.

**1. As object methods — avoid arrow functions**
```js
const person = {
    name: "Harsh",
    // ❌ Arrow function — this will not refer to person
    greet: () => {
        console.log(`Hello, ${this.name}`); // undefined
    },
    // ✅ Normal function — this correctly refers to person
    greet: function() {
        console.log(`Hello, ${this.name}`); // Harsh
    }
}
```

**2. When you need the `arguments` object**
Arrow functions do not have their own `arguments` object.
Normal functions do.

```js
function normalFn() {
    console.log(arguments); // ✅ works
}

const arrowFn = () => {
    console.log(arguments); // ❌ not available
}
```

---

## Normal Function vs Arrow Function — Full Comparison

| Feature | Normal Function | Arrow Function |
|---------|----------------|----------------|
| Syntax | Longer | Shorter and cleaner |
| `this` | Has its own `this` | Takes `this` from surrounding scope |
| Hoisted? | ✅ Yes (declaration) | ❌ No |
| Use as method? | ✅ Preferred | ❌ Avoid |
| Implicit return | ❌ No | ✅ Yes (single line) |
| `arguments` object | ✅ Available | ❌ Not available |
| Best for | Object methods, constructors | Callbacks, array methods, short functions |

---

## Quick Reference

> Arrow function → shorter syntax → perfect for small one-liner functions
> Arrow function → no own `this` → safe to use inside callbacks and `setTimeout`
> Arrow function → implicit return → no need for `return` in single line functions
> Avoid arrow functions as object methods → `this` will not work correctly
> Modern JavaScript code uses arrow functions heavily with `map`, `filter`, `forEach`

---

# Section 6: Functions — Part 4

---

## Parameters and Arguments

These two words are often used interchangeably — but they are different things.

### Parameter
A **placeholder variable** defined in the function — when the function is created.

### Argument
The **actual value** passed to the function — when the function is called.

```js
function dance(val) {       // "val" is the PARAMETER
    console.log(`${val} is dancing`);
}

dance("Alex");              // "Alex" is the ARGUMENT
// Output: Alex is dancing
```

**Explanation:**
Think of parameter as an empty box with a label.
When you call the function — the argument is the actual value you put in that box.

| Term | When | Example |
|------|------|---------|
| Parameter | At function definition | `val` in `function dance(val)` |
| Argument | At function call | `"Alex"` in `dance("Alex")` |

---

# Parameters vs Arguments

---

## Difference

| | Parameter | Argument |
|--|-----------|----------|
| **What** | Placeholder variable in the function | Actual value passed to the function |
| **When** | At function **definition** | At function **call** |
| **Example** | `val` in `function dance(val)` | `"Alex"` in `dance("Alex")` |

```js
function dance(val) {   // "val" → PARAMETER
    console.log(`${val} is dancing`);
}

dance("Alex");          // "Alex" → ARGUMENT
```

> Parameter = empty box waiting for a value
> Argument = the actual value put into that box

---

## Default Parameters

### The Problem

When a function is called without passing arguments —
the parameters get `undefined` by default.
This can cause unexpected results.

```js
function add(v1, v2) {
    console.log(v1, v2);
}

add();
// Output: undefined undefined
```

If you try to perform math with `undefined`:

```js
function add(v1, v2) {
    console.log(v1 + v2);
}

add();
// Output: NaN
```

**Explanation:**
`undefined + undefined` gives `NaN` — because you cannot add undefined values.
This is a problem when the user forgets to pass arguments.

---

### The Solution — Default Parameters

You can set a **default value** for a parameter —
so if no argument is passed, the default value is used instead.

```js
function add(v1 = 1, v2 = 2) {
    console.log(v1 + v2);
}

add();        // Output: 3  — uses default values 1 and 2
add(5, 6);    // Output: 11 — uses passed arguments 5 and 6
add(10);      // Output: 12 — v1 is 10, v2 uses default 2
```

**Explanation:**
`v1 = 1` means — if no value is passed for `v1`, use `1`.
`v2 = 2` means — if no value is passed for `v2`, use `2`.
When arguments are passed — default values are ignored and actual arguments are used.

---

## Rest Parameters (`...`)

### The Problem

What if you want to pass many arguments to a function
but you don't know how many there will be?
Making a separate parameter for each is not practical.

```js
function add(a, b, c, d, e) { // what if there are 100 values?
    console.log(a + b + c + d + e);
}
```

---

### The Solution — Rest Parameter (`...`)

Adding `...` before a parameter name collects **all remaining arguments
into an array** inside the function.

```js
function abcd(...val) {
    console.log(val);
}

abcd(1, 2, 3, 4, 5, 6);
// Output: [1, 2, 3, 4, 5, 6]
```

**Explanation:**
`...val` collects all passed arguments and puts them into an array called `val`.
No matter how many arguments you pass — all of them land in that array.

---

### Rest Parameter with Other Parameters

You can also combine regular parameters with rest parameter.
The rest parameter must always be **the last parameter**.

```js
function abcd(a, b, c, ...val) {
    console.log(a, b, c, val);
}

abcd(1, 2, 3, 4, 5, 6);
// Output: 1 2 3 [4, 5, 6]
```

**Explanation:**
- `1` goes to `a`
- `2` goes to `b`
- `3` goes to `c`
- `4, 5, 6` — all remaining values go into `val` as an array

The values collected by rest parameter always come back as an **array**.
So you can loop through them, use array methods on them, etc.

```js
function sum(...numbers) {
    let total = 0;
    for(let num of numbers) {
        total += num;
    }
    return total;
}

console.log(sum(1, 2, 3));          // 6
console.log(sum(10, 20, 30, 40));   // 100
```

---

### `...` as Rest vs Spread

`...` (three dots) is used in two different ways in JavaScript:

| Where used | Name | What it does |
|-----------|------|--------------|
| In function **parameters** | Rest parameter | Collects multiple arguments into an array |
| In arrays and objects | Spread operator | Expands items out of an array or object |

> **Note:** Spread operator will be covered in detail in a later section
> when we get to arrays and objects — it makes more sense in that context.

---

## Quick Reference

> **Parameter** → placeholder at function definition → `function fn(val)`
> **Argument** → actual value at function call → `fn("Alex")`
> **Default parameter** → fallback value when no argument is passed → `function fn(val = 10)`
> **Rest parameter** → collects all extra arguments into an array → `function fn(...val)`
> Rest parameter must always be the **last parameter**
> Values in rest parameter are always returned as an **array**
> `...` in parameters = rest | `...` in arrays/objects = spread (covered later)

---

# Section 6: Functions — Part 5

---

## Return Values

### What
`return` sends a value back from a function to the place where it was called.

### How it Works

> जहाँ से आये हो वहीं डाल देंगे।

If you made a function between line 1 and 10,
and you are calling that function from line 35 —
the return value will go back to line 35 only.

```js
function add(a, b) {
    return a + b;       // sends the result back
}

let result = add(5, 3); // return value lands right here — line 35
console.log(result);    // 8
```

**Explanation:**
`add(5, 3)` is called — function runs and returns `8`.
That `8` comes back to exactly where the function was called
and gets stored in `result`.
The function does not print anything — it just sends the value back.

---

### What Happens Without `return`

```js
function add(a, b) {
    let sum = a + b; // calculated but never returned
}

let result = add(5, 3);
console.log(result); // undefined
```

**Explanation:**
If there is no `return` — the function gives back `undefined` by default.
The calculation happens inside the function but the result never comes out.

---

## Early Return

### What
Returning from a function **immediately** when a condition is met —
without running the rest of the code below it.

```js
// Normal return — runs everything, returns at the end
function getDiscount(age) {
    let discount;
    if(age >= 60) {
        discount = 30;
    } else {
        discount = 10;
    }
    return discount;
}

// Early return — exits immediately when condition matches
function getDiscount(age) {
    if(age >= 60) return 30; // exits here if condition is true
    return 10;               // only reaches here if condition was false
}
```

---

### Difference Between `return` and Early Return

| | `return` | Early Return |
|--|----------|-------------|
| **When** | At the end of the function | In the middle — as soon as condition is met |
| **Purpose** | Send the final result back | Exit the function immediately |
| **Code after it** | Nothing — it is the last line | Everything below it is skipped |
| **Use case** | Simple functions | Validation, guard checks, multiple conditions |

---

### Real World Example of Early Return

```js
function processPayment(amount) {
    if(amount <= 0) return "Invalid amount";       // exits immediately
    if(amount > 10000) return "Amount too large";  // exits immediately

    // only reaches here if both checks passed
    return `Payment of ${amount} processed successfully`;
}

console.log(processPayment(-5));    // Invalid amount
console.log(processPayment(15000)); // Amount too large
console.log(processPayment(500));   // Payment of 500 processed successfully
```

**Explanation:**
Invalid cases are handled first with early returns.
If all checks pass — the main logic runs cleanly at the bottom.
This keeps the code flat and easy to read.

---

## First Class Functions

### What
In JavaScript, functions are **first class citizens** —
meaning functions can be treated just like any other value.

Functions in JavaScript can be:
- Stored in a variable
- Passed as an argument to another function
- Returned from another function

---

### 1. Stored in a Variable

```js
const greet = function() {
    console.log("Hello!");
}

greet(); // Hello!
```

---

### 2. Passed as an Argument to Another Function

Ek function ko doosre function mein argument ki tarah pass kar sakte hain.

```js
function abcd(val) {
    val(); // val ko hum andar function ki tarah use kar sakte hain
}

abcd(function() {
    console.log("I was passed as an argument!");
});

// Output: I was passed as an argument!
```

**Explanation:**
`abcd` receives a function as its argument — stored in `val`.
Inside `abcd`, we call `val()` — which runs the function that was passed in.
The function passed at the time of calling is called a **callback function**.

Another example:

```js
function runTwice(fn) {
    fn();
    fn();
}

runTwice(function() {
    console.log("Running!");
});

// Output:
// Running!
// Running!
```

---

### 3. Returned from Another Function

```js
function outer() {
    return function() {
        console.log("I was returned from a function!");
    }
}

let inner = outer(); // outer returns a function — stored in inner
inner();             // I was returned from a function!
```

**Explanation:**
`outer()` returns a function — not a value, but a whole function.
That returned function gets stored in `inner`.
Then `inner()` is called to run it.

---

### Why First Class Functions Matter

This is what makes JavaScript very powerful.
Features like **callbacks**, **array methods** (`map`, `filter`, `forEach`),
and **higher order functions** — all work because of first class functions.

```js
// forEach uses first class functions internally
let names = ["Harsh", "Alice", "Bob"];

names.forEach(function(name) {
    console.log(`Hello, ${name}!`);
});
```

**Explanation:**
`forEach` receives a function as an argument and calls it for every item.
This is only possible because JavaScript treats functions as values.

---

## Quick Reference

> `return` → sends value back to the exact line where function was called
> No `return` → function gives back `undefined` by default
> Early return → exit immediately when condition is met — skip the rest
> First class functions → functions treated as values in JavaScript
> Functions can be → stored in variables, passed as arguments, returned from functions
> A function passed as argument → called a **callback function**

---

# Section 6: Functions — Part 6

---

## Higher Order Functions

### What
Higher order function wo function hota hai jo ki:
- **Return kare ek function** — ya
- **Accept kare ek function** apne parameter mein

Agar in dono mein se ek bhi condition met hoti hai —
to wo function ek **higher order function** ban jaata hai.

---

### Case 1 — Function that Returns a Function

```js
function abcd() {
    return function() {
        console.log("hello");
    };
}

abcd()(); // hello
```

**Explanation — Why Two `()()` Brackets?**

`abcd()` → calls the outer function — which **returns a function** (not a value).
At this point you have a function sitting there — but it has not been called yet.
The second `()` → calls that returned function.

Breaking it down:

```js
let returned = abcd();  // Step 1 — call abcd, get the returned function
returned();             // Step 2 — now call that returned function
// Output: hello

// OR in one line:
abcd()();               // both steps combined
```

Think of it like this:
> First `()` — opens the outer box and gets what is inside
> Second `()` — uses what came out of the box

---

### Case 2 — Function that Accepts a Function as Argument

```js
function runIt(fn) {
    fn(); // calling the function that was passed in
}

runIt(function() {
    console.log("I was passed as argument!");
});
// Output: I was passed as argument!
```

**Explanation:**
`runIt` accepts a function as its parameter `fn`.
Inside, it calls `fn()` — which runs the passed function.
`runIt` is the higher order function here.

---

### Real World Example

Array methods like `forEach`, `map`, `filter` are all higher order functions —
because they accept a function as an argument.

```js
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(num) {  // forEach is a higher order function
    console.log(num * 2);
});
// Output: 2 4 6 8 10
```

---

### Summary — What Makes a Function Higher Order?

| Condition | Example |
|-----------|---------|
| Returns a function | `function outer() { return function() {} }` |
| Accepts a function as argument | `function run(fn) { fn() }` |

> If either condition is true — it is a higher order function.

---

## Pure vs Impure Functions

---

## Pure Functions

### What
Aisa function jo ki **bahar ki kisi bhi value ko na badle** —
sirf apna kaam kare aur result return kare.

### How to Identify
- Does not modify any variable outside the function
- Same input always gives same output
- No side effects

```js
let a = 12;

function abcd() {
    console.log("hehehe"); // sirf console log kar raha hai — bahar kuch nahi badal raha
}
```

```js
// Pure function — only works with its own parameters
function add(a, b) {
    return a + b; // no outside variable touched
}

console.log(add(2, 3)); // 5 — always
console.log(add(2, 3)); // 5 — same input, always same output
```

**Explanation:**
Pure functions are **predictable** — you always know what they will do.
They do not touch anything outside — so they cannot cause unexpected bugs.

---

## Impure Functions

### What
Aisa function jo **bahar ki values ko badal de** — wo impure function hota hai.

### How to Identify
- Modifies a variable that lives outside the function
- Same input may give different output
- Has side effects

```js
let a = 12;

function abc() {
    a++; // bahar ki value badal raha hai — so it is impure
}

abc();
console.log(a); // 13 — outer variable was changed
```

```js
// Another impure function example
let total = 0;

function addToTotal(num) {
    total += num; // modifying outer variable
}

addToTotal(5);
console.log(total); // 5
addToTotal(5);
console.log(total); // 10 — same input, different output each time
```

**Explanation:**
Impure functions are **unpredictable** — their result depends on the outside state.
The same function call can give different results each time.
This makes bugs harder to find and fix.

---

## Pure vs Impure — Comparison

| Feature | Pure Function | Impure Function |
|---------|--------------|-----------------|
| Modifies outer variables? | ❌ Never | ✅ Yes |
| Same input = same output? | ✅ Always | ❌ Not always |
| Predictable? | ✅ Yes | ❌ No |
| Side effects? | ❌ None | ✅ Has side effects |
| Easier to test? | ✅ Yes | ❌ No |

---

## Quick Reference

> Higher order function → accepts a function OR returns a function
> `abcd()()` → first `()` calls outer function, second `()` calls the returned function
> Pure function → bahar ki koi value nahi badalta — predictable and safe
> Impure function → bahar ki value badal deta hai — can cause unexpected bugs
> Always try to write pure functions where possible — easier to test and maintain

---

# Section 6: Functions — Part 7

---

## Closure and Lexical Scoping

> ⭐ **Frequently Asked in Interviews**

---

## Lexical Scoping

### What
Lexical scoping means the **scope of a variable is determined by its physical position
in the code** — where it is written, not where it is called from.

In simple words — a variable's scope is defined by which block or function
it is written inside.

```js
function abcd() {
    let a = 12;         // lexical scope of "a" is inside function abcd

    function defg() {
        let b = 13;     // lexical scope of "b" is inside function defg

        function ghij() {
            let c = 14; // lexical scope of "c" is inside function ghij
        }
    }
}
```

**Explanation:**
- `a` lives inside `abcd` — only `abcd` and everything inside it can access `a`
- `b` lives inside `defg` — only `defg` and everything inside it can access `b`
- `c` lives inside `ghij` — only `ghij` can access `c`

The inner functions can access variables of their outer functions —
but outer functions **cannot** access variables of their inner functions.

```js
function abcd() {
    let a = 12;

    function defg() {
        console.log(a); // ✅ can access "a" — it is in the outer scope
    }

    defg();
}

abcd(); // 12
```

```js
function abcd() {
    function defg() {
        let b = 13;
    }
    console.log(b); // ❌ cannot access "b" — it is in the inner scope
}
```

**Explanation:**
Think of lexical scope like **nested boxes**.
Inner box can see outside — but outer box cannot see inside.
This is determined by where the code is physically written.

---

## Closure

> ⭐ **Frequently Asked in Interviews**

### What
Ek function jo return kare ek aur function, aur return hone wala function
use kare parent function ka koi ek variable — **isse closure kehte hain**.

### How

```js
// Yaha return hone wale function mein parent function ke variable ka use ho raha hai
function abcd() {
    let a = 12;
    return function() {
        console.log(a); // using parent's variable "a"
    }
}

let fn = abcd();
fn(); // 12
```

**Explanation:**
`abcd()` is called — it returns a function and the execution of `abcd` is done.
Normally when a function finishes — its variables are destroyed.
But here the returned function is still using `a` —
so JavaScript **keeps `a` alive in memory** even after `abcd` has finished.
This is called a **closure** — the inner function closes over the variable `a`.

---

### Step by Step Breakdown

```js
function abcd() {
    let a = 12;             // Step 1 — "a" is created inside abcd
    return function() {
        console.log(a);     // Step 2 — inner function uses "a"
    }
}

let fn = abcd();            // Step 3 — abcd runs and returns the inner function
                            //          abcd is done — but "a" is still alive
fn();                       // Step 4 — inner function runs and prints "a"
// Output: 12
```

---

### Real World Example — Counter

Closure is commonly used to create **private variables** —
variables that cannot be accessed or changed from outside.

```js
function createCounter() {
    let count = 0;          // private variable — cannot be accessed outside

    return function() {
        count++;
        console.log(count);
    }
}

let counter = createCounter();
counter(); // 1
counter(); // 2
counter(); // 3
```

**Explanation:**
`count` is inside `createCounter` — no one outside can directly access or change it.
But the returned function remembers `count` through closure —
and updates it every time it is called.
This is a very powerful pattern used in real projects.

---

## Lexical Scoping vs Closure

| Feature | Lexical Scoping | Closure |
|---------|----------------|---------|
| **What** | Scope decided by physical position in code | Inner function remembers outer function's variables |
| **When** | Always — it is how JS reads scope | When inner function is returned and used outside |
| **Key idea** | Inner can access outer — not the other way | Variable stays alive even after outer function finishes |

---

## Quick Reference

> **Lexical scope** → variable ka scope uski physical position se decide hota hai
> Inner function → outer variables access kar sakta hai
> Outer function → inner variables access nahi kar sakta
> **Closure** → returned function jo parent ka variable use kare
> Closure mein → parent function khatam hone ke baad bhi variable memory mein alive rehta hai
> Closure use case → private variables, counters, data hiding

---

# Section 6: Functions — Part 8

---

## IIFE — Immediately Invoked Function Expression

> ⭐ **Frequently Asked in Interviews**

### What
IIFE is a function that is **defined and called at the same time** —
immediately when JavaScript reads it.
You don't need to call it separately — it runs on its own.

### Why
- To run some code **immediately** without polluting the global scope
- Variables inside IIFE are **private** — not accessible from outside
- Used to avoid naming conflicts in large codebases
- Used to **initialize** something once at the start

---

### How to Make an IIFE — Step by Step

**Step 1 — Write a normal function**

```js
function() {

}
```

**Step 2 — Wrap the whole function in brackets**

This converts it into a function expression.

```js
(function() {

})
```

**Step 3 — Call it immediately with `()`**

```js
(function() {
    console.log("I run immediately!");
})();
// Output: I run immediately!
```

**Explanation:**
The outer `( )` wraps the function and makes JavaScript treat it as an expression.
The `()` at the end immediately invokes (calls) it.
It runs once — right away — without needing a separate function call.

---

### IIFE with Parameters

```js
(function(name) {
    console.log(`Hello, ${name}!`);
})("Harsh");
// Output: Hello, Harsh!
```

**Explanation:**
Arguments are passed inside the last `()` — just like a normal function call.

---

### IIFE with Arrow Function

```js
(() => {
    console.log("Arrow IIFE!");
})();
// Output: Arrow IIFE!
```

---

### Use Cases of IIFE

**1. Avoid polluting global scope**

```js
// Without IIFE — "count" goes to global scope
let count = 0;

// With IIFE — "count" stays private
(function() {
    let count = 0; // only lives here — not accessible outside
    count++;
    console.log(count); // 1
})();

console.log(count); // ❌ ReferenceError — count is not defined outside
```

**2. Run initialization code once**

```js
(function() {
    console.log("App initialized!");
    // setup code that should run only once
})();
```

**3. Avoid naming conflicts in large projects**

```js
// Two different IIFEs — both use "name" but they don't clash
(function() {
    let name = "Module A";
    console.log(name);
})();

(function() {
    let name = "Module B";
    console.log(name);
})();
```

---

### Advantages of IIFE

| Advantage | Explanation |
|-----------|-------------|
| Private scope | Variables inside cannot be accessed from outside |
| Runs immediately | No need for a separate function call |
| Avoids global pollution | Does not add variables to global scope |
| Avoids naming conflicts | Each IIFE has its own isolated scope |

---

## Hoisting in Functions

### What
Hoisting in JavaScript means declarations are moved to the top
before the code runs.
This is allowed in JavaScript — not in most other languages like C, Java, Python.

---

### Hoisting Works with Function Declaration ✅

```js
abcd(); // ✅ works — called before declaration

function abcd() {
    console.log("Hello from function declaration");
}
```

**Explanation:**
Function declarations are fully hoisted —
the entire function (name + body) is moved to the top by JavaScript.
So calling it before writing it works perfectly.

---

### Hoisting Does NOT Work with Function Expression ❌

```js
abcd(); // ❌ Error: Cannot access 'abcd' before initialization

let abcd = function() {
    console.log("Hello");
}
```

**Explanation:**
Function expressions are stored in variables.
`let` and `const` variables are hoisted but land in the **Temporal Dead Zone** —
they exist but have no value yet.
So calling `abcd()` before it is initialized throws an error.

---

### Side by Side Comparison

```js
// Function Declaration — hoisting works ✅
greet();  // Hello!

function greet() {
    console.log("Hello!");
}

// Function Expression — hoisting does NOT work ❌
sayBye(); // ❌ Cannot access 'sayBye' before initialization

let sayBye = function() {
    console.log("Bye!");
}
```

---

### Hoisting Summary for Functions

| Type | Hoisted? | Can call before declaration? |
|------|----------|------------------------------|
| Function Declaration | ✅ Fully hoisted | ✅ Yes |
| Function Expression (`let`/`const`) | ⚠️ Variable hoisted — TDZ | ❌ No — error |
| Arrow Function | ⚠️ Variable hoisted — TDZ | ❌ No — error |

---

## What is the V8 Engine?

### What
V8 is a **JavaScript engine** built by Google.
It is the program that actually **reads and runs JavaScript code**.

### Why
JavaScript is a high level language — computers don't understand it directly.
The V8 engine takes your JavaScript code and converts it into
**machine code** that the computer can execute.

### Where it is Used
- **Google Chrome** browser uses V8 to run JavaScript
- **Node.js** also uses V8 — which is why JavaScript can run on servers too

### How it Works (Simple Version)

```
Your JS Code
     ↓
  V8 Engine
     ↓
Parses the code (reads and understands it)
     ↓
Compiles to Machine Code (using JIT — Just In Time compilation)
     ↓
Executes (runs the code)
```

**Explanation:**
V8 does not just interpret JavaScript line by line — it also **compiles** it
using JIT (Just In Time) compilation which makes it much faster.
This is why JavaScript is fast despite being an interpreted language.

### Other JS Engines

| Browser / Environment | Engine |
|-----------------------|--------|
| Chrome / Node.js | V8 (Google) |
| Firefox | SpiderMonkey (Mozilla) |
| Safari | JavaScriptCore (Apple) |
| Edge | V8 (Google) |

---

## Quick Reference

> **IIFE** → define and call at the same time → `(function(){ })();`
> IIFE → private scope → variables inside not accessible outside
> IIFE → used for initialization, avoiding global pollution, naming conflicts
> **Function Declaration** → fully hoisted → can call before writing it
> **Function Expression** → not hoisted → cannot call before initialization
> **V8 Engine** → Google's JS engine → used in Chrome and Node.js
> V8 converts JS code to machine code using JIT compilation
