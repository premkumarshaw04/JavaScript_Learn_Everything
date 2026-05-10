# Variables in JavaScript

## What is a Variable?
A variable is a container that stores a value.
You can think of it like a box with a label on it.

---

# Word vs Keyword in JavaScript

## What is a Word (Identifier)?

A word that **you create** to name your variables, functions, etc.
These are called **identifiers**.

```js
let score = 10;       // "score" is an identifier (your word)
let playerName = "Prem";  // "playerName" is an identifier
```

---

## What is a Keyword?

A word that **JavaScript already owns** and uses for its own purpose.
You cannot use keywords as variable names.

```js
let let = 5;     // ❌ Error — "let" is a keyword
let const = 10;  // ❌ Error — "const" is a keyword
let if = 3;      // ❌ Error — "if" is a keyword
```

---

## Common JavaScript Keywords

| Keyword      | Purpose                        |
|--------------|--------------------------------|
| `var`        | Declare a variable (old)       |
| `let`        | Declare a variable (modern)    |
| `const`      | Declare a constant             |
| `if`         | Conditional check              |
| `else`       | Alternative condition          |
| `for`        | Loop                           |
| `while`      | Loop                           |
| `function`   | Declare a function             |
| `return`     | Return a value from function   |
| `true/false` | Boolean values                 |
| `null`       | Empty value                    |
| `new`        | Create an object               |
| `this`       | Refers to current object       |
| `typeof`     | Check type of a value          |

---

## Simple Difference

| Word (Identifier)      | Keyword               |
|------------------------|-----------------------|
| Created by you         | Owned by JavaScript   |
| Can be anything valid  | Fixed, reserved words |
| `score`, `userName`    | `let`, `if`, `return` |

---

## Simple Rule to Remember

> If JavaScript already uses the word for something — it's a **keyword**.  
> If you made it up to name something — it's an **identifier (your word)**.

---

## Trap

- Keywords are **case-sensitive** — `let` is a keyword but `Let` is not
- Avoid naming variables after keywords — it will throw an error
- Also avoid built-in names like `console`, `alert`, `document`
  (not keywords, but using them as variable names causes confusion)

---

## `var` vs `let` vs `const`

| Feature        | var           | let            | const          |
|----------------|---------------|----------------|----------------|
| Re-declarable  | ✅ Yes        | ❌ No          | ❌ No          |
| Re-assignable  | ✅ Yes        | ✅ Yes         | ❌ No          |
| Scope          | Function      | Block          | Block          |
| Hoisting       | ✅ (undefined)| ❌ (error)     | ❌ (error)     |
| Modern?        | ❌ Old        | ✅ Recommended | ✅ Recommended |

---

## Why Avoid `var`? (Old Way)

`var` has some weird behaviors that can cause bugs:

### Problem 1 — No Block Scope
var leaks outside of blocks like `if`, `for`, etc.

```js
if (true) {
  var name = "Prem";
}
console.log(name); // "Prem" — leaks out! (unexpected)
```

### Problem 2 — Can be Re-declared (causes silent bugs)
```js
var score = 10;
var score = 99; // No error! Overwrites silently
console.log(score); // 99
```

### Problem 3 — Hoisting gives `undefined` (confusing)
```js
console.log(age); // undefined (no error, just wrong)
var age = 20;
```

---

## Why Use `let` and `const`? (Modern Way)

They are block-scoped, predictable, and safer to use.

---

## `let` — Use When Value Will Change in Future

Use `let` when you know the value needs to be updated later.

```js
let score = 0;
score = 10;  // ✅ Allowed
score = 50;  // ✅ Allowed again
console.log(score); // 50
```

Real-world example:
```js
let lives = 3;
lives = lives - 1; // Player lost a life
console.log(lives); // 2
```

---

## `const` — Use When Value Will Never Change

Use `const` for fixed values that should not be reassigned.

```js
const pi = 3.14159;
pi = 3; // ❌ Error: Assignment to constant variable
```

Real-world example:
```js
const gravity = 9.8;       // never changes
const appName = "MyApp";   // never changes
```

---

## `let` vs `const` — When to Use Which?

| Situation                          | Use     |
|------------------------------------|---------|
| Value will change later            | `let`   |
| Value is fixed / won't change      | `const` |
| Storing a math constant (pi, e)    | `const` |
| Score, counter, timer              | `let`   |
| API URL, app config                | `const` |

### Example — Real Use Case
```js
const pi = 3.14159;   // Fixed mathematical value — never changes
let score = 0;        // Game score — will keep changing

score = score + 10;
console.log(score);   // 10
console.log(pi);      // 3.14159
```

---

## Simple Rule to Remember

> If the value **will change** → use `let`  
> If the value **won't change** → use `const`  
> Never use `var` in modern JavaScript

---

## Trap

- `const` does NOT mean the value is completely frozen for objects/arrays
  (that's a later topic — don't worry about it now)
- Always declare variables before using them with `let` / `const`
- One `const` or `let` per variable is enough — never re-declare

---

# Variables in JavaScript — Deep Dive

## Why Do We Make Variables?

Variables are used to **store data** so we can use it later in the program.

### Real-Life Usages:
- Store a user's name → `let userName = "Prem";`
- Store a game score → `let score = 0;`
- Store a fixed tax rate → `const taxRate = 0.18;`
- Store result of a calculation → `let total = price * quantity;`
- Store user input from a form → `let email = getUserInput();`

Without variables, you would have to repeat values everywhere —
which makes code messy and hard to update.

---

## Declaration vs Initialization

| Term             | Meaning                              | Example          |
|------------------|--------------------------------------|------------------|
| **Declaration**  | Creating the variable (just the box) | `let score;`     |
| **Initialization**| Giving it a value for the first time | `score = 10;`    |
| **Both together**| Declare + give value in one line     | `let score = 10;`|

```js
let score;       // Declaration — box is created but empty (undefined)
score = 10;      // Initialization — value is put inside the box
```

---

## Different Ways to Create Variables

### 1. `a = 12;` — No keyword (Bad ❌ Not Appreciated)

```js
a = 12;
```

- No `let`, `var`, or `const` used
- JavaScript creates it as a **global variable** automatically
- This is considered **bad practice** — pollutes global scope
- Can cause unexpected bugs in large programs
- **Never do this**

---

### 2. `var a;` — Declaration only

```js
var a;
console.log(a); // undefined
```

- Variable is declared but **not given a value yet**
- JavaScript automatically sets it to `undefined`
- Value can be assigned later
- **Situation:** When you know you'll need the variable but don't have the value yet
  *(though with modern JS, prefer `let` for this)*

---

### 3. `var a = 12;` — Declaration + Initialization

```js
var a = 12;
console.log(a); // 12
```

- Old way of declaring variables
- Works, but **avoid in modern JavaScript**
- Has problems (explained below)
- **Situation:** You might see this in old codebases — just understand it, don't use it

---

### 4. `let a;` — Declaration only (Modern)

```js
let a;
console.log(a); // undefined
```

- Declares a variable without a value
- Value will be assigned later
- **Situation:** When you need the variable now but the value depends on something later

```js
let userScore;

if (playerWon) {
  userScore = 100;
} else {
  userScore = 0;
}
```

---

### 5. `let a = 12;` — Declaration + Initialization (Modern ✅)

```js
let a = 12;
a = 20; // ✅ Can change later
console.log(a); // 20
```

- Most commonly used way
- Block-scoped and safe
- **Situation:** Use when value will change in the future

---

### 6. `const a;` — ❌ Not Allowed

```js
const a; // ❌ SyntaxError: Missing initializer in const declaration
```

- `const` means the value is **fixed and will never change**
- So JavaScript **forces you to give a value immediately**
- You cannot declare a `const` without initializing it
- **Reason:** If you're not giving a value now and it can't change later — what's the point?

---

### 7. `const a = 12;` — Declaration + Initialization (Modern ✅)

```js
const a = 12;
a = 20; // ❌ Error: Assignment to constant variable
console.log(a); // 12
```

- Value is **locked** — cannot be changed
- **Situation:** Use for values that should never change

```js
const pi = 3.14159;
const maxPlayers = 4;
const appName = "MyApp";
```

---

## Summary — All Ways at a Glance

| Way           | Valid? | Re-assignable | Situation                          |
|---------------|--------|---------------|------------------------------------|
| `a = 12`      | ⚠️ Bad | ✅ Yes        | Never use — bad practice           |
| `var a`       | ✅     | ✅ Yes        | Old code only — avoid              |
| `var a = 12`  | ✅     | ✅ Yes        | Old code only — avoid              |
| `let a`       | ✅     | ✅ Yes        | When value comes later             |
| `let a = 12`  | ✅     | ✅ Yes        | When value will change             |
| `const a`     | ❌     | -             | Not allowed — must initialize      |
| `const a = 12`| ✅     | ❌ No         | When value will never change       |

---

## Problems with `var`

### Problem 1 — Attaches to `window` (Global Object)

When you declare a variable with `var` at the top level,
it gets **attached to the `window` object** in the browser.

```js
var userName = "Prem";
console.log(window.userName); // "Prem" ← attached to window!

let score = 10;
console.log(window.score); // undefined ← let does NOT attach to window
```

This is dangerous because it can accidentally **overwrite** existing
window properties or clash with other scripts.

---

### Problem 2 — Function Scoped (Not Block Scoped)

`var` only respects **function boundaries**, not block boundaries
like `if`, `for`, `while`.

```js
if (true) {
  var age = 25;    // inside block
}
console.log(age);  // 25 ← leaks outside the block! (Bad)

if (true) {
  let name = "Prem";  // inside block
}
console.log(name);    // ❌ Error — correctly blocked (Good)
```

This leaking behavior causes unexpected bugs.

---

### Problem 3 — Can be Re-declared (No Error)

With `var`, you can declare the same variable **twice** and get no error.
This causes **silent bugs** that are hard to find.

```js
var score = 10;
var score = 99;  // No error! Silently overwrites
console.log(score); // 99

let points = 10;
let points = 99; // ❌ Error: already been declared (Caught immediately — safer)
```

---

## Difference Between `var`, `let`, and `const`

| Feature              | `var`              | `let`            | `const`          |
|----------------------|--------------------|------------------|------------------|
| Scope                | Function           | Block            | Block            |
| Re-declarable        | ✅ Yes             | ❌ No            | ❌ No            |
| Re-assignable        | ✅ Yes             | ✅ Yes           | ❌ No            |
| Attaches to window   | ✅ Yes             | ❌ No            | ❌ No            |
| Hoisting             | ✅ (undefined)     | ❌ (throws error) | ❌ (throws error)|
| Must initialize      | ❌ No              | ❌ No            | ✅ Yes           |
| Modern / Recommended | ❌ No              | ✅ Yes           | ✅ Yes           |

---

## Simple Rule to Remember

> `a = 12` → Never use  
> `var` → Old, has problems, avoid  
> `let` → Use when value will change  
> `const` → Use when value will never change  
> `const a;` → Not allowed, must give value immediately

---

# Scope in JavaScript

## What is Scope?

Scope means **where a variable can be accessed** in your code.
If a variable is "in scope" — you can use it.
If it is "out of scope" — you cannot access it.

---

## Types of Scope

### 1. Global Scope

A variable declared **outside any block or function** is in global scope.
It can be accessed **anywhere** in the code.

```js
var a = 12; // Global scope

{
  console.log(a); // ✅ 12 — accessible inside block
}

console.log(a); // ✅ 12 — accessible outside too
```

---

### 2. Block Scope

A **block** is anything inside curly braces `{ }` —
like `if`, `for`, `while`, or just plain `{ }`.

Block scoped variables **only live inside that block**.
Once the block ends — the variable is gone.

```js
{
  let name = "Prem"; // Block scoped
  console.log(name); // ✅ "Prem" — accessible inside block
}

console.log(name); // ❌ Error — not accessible outside block
```

---

### 3. Function Scope

A variable declared **inside a function** is only accessible
within that function — not outside.

```js
function greet() {
  var message = "Hello!"; // Function scoped
  console.log(message);   // ✅ Accessible inside function
}

greet();
console.log(message); // ❌ Error — not accessible outside function
```

---

## `var` Does NOT Respect Block Scope

This is one of the biggest problems with `var`.

When you declare a variable with `var` inside a block `{ }`,
it **leaks outside** the block — like the block never existed.

```js
var a = 12;

{
  var b = 134; // Inside block — but var doesn't care
}

console.log(a); // ✅ 12
console.log(b); // ✅ 134 — leaked outside the block!
```

Both `a` and `b` are accessible anywhere in the code.
The block `{ }` had **no effect** on `var`.

This causes unexpected bugs because variables meant to be
temporary inside a block end up being accessible everywhere.

---

## `let` Respects Block Scope ✅

`let` stays **inside the block** it was declared in.
It cannot be accessed outside that block.

```js
let a = 12; // Global — accessible everywhere

{
  let b = 134; // Block scoped — only lives here
  console.log(a); // ✅ 12 — can access outer variable
  console.log(b); // ✅ 134 — accessible inside block
}

console.log(a); // ✅ 12
console.log(b); // ❌ Error — b is not defined outside block
```

---

## `var` vs `let` — Scope Comparison

```js
// --- var (No block scope) ---
{
  var x = 10;
}
console.log(x); // ✅ 10 — leaked out (bad)

// --- let (Block scoped) ---
{
  let y = 20;
}
console.log(y); // ❌ Error — correctly blocked (good)
```

---

## Visual Summary

```
Global Scope
│
├── var a = 12          ← accessible everywhere
│
├── { Block }
│     ├── var b = 134   ← leaks out (bad)
│     └── let c = 99    ← stays inside block (good)
│
└── function greet()
      └── var msg = "hi" ← stays inside function
```

---

## Scope Summary Table

| Scope Type  | `var`              | `let`            | `const`          |
|-------------|--------------------|------------------|------------------|
| Global      | ✅ Accessible      | ✅ Accessible    | ✅ Accessible    |
| Block `{ }` | ❌ Leaks out       | ✅ Stays inside  | ✅ Stays inside  |
| Function    | ✅ Stays inside    | ✅ Stays inside  | ✅ Stays inside  |

---

## Simple Rule to Remember

> `var` — only respects **function** boundaries, ignores blocks  
> `let` and `const` — respect **both** block and function boundaries  
> Always use `let` / `const` to avoid scope-related bugs

---

# Reassignment and Redeclaration in JavaScript

## Two Different Things

| Term              | Meaning                                      | Example             |
|-------------------|----------------------------------------------|---------------------|
| **Reassignment**  | Changing the value of an existing variable   | `a = 32;`           |
| **Redeclaration** | Declaring the same variable again with keyword | `var a = 233;`    |

---

## Reassignment

Reassignment means **updating the value** of a variable that already exists.
No keyword (`var`, `let`, `const`) is used — just the variable name.

```js
var a = 12;
a = 32;     // ✅ Reassignment — just updating the value
```

```js
let b = 12;
b = 32;     // ✅ Reassignment — allowed with let too
```

> Both `var` and `let` allow reassignment.
> `const` does NOT allow reassignment.

---

## Redeclaration

Redeclaration means **declaring the same variable again**
using a keyword like `var` or `let`.

---

### `var` — Redeclaration Allowed ❌ (Bad)

```js
var a = 12;
a = 32;      // ✅ Reassignment — fine

var a = 233; // ✅ No error — redeclaration allowed with var
console.log(a); // 233
```

This is dangerous because you can **accidentally redeclare** a variable
you already created — and JavaScript will not warn you at all.

In large codebases this causes **silent bugs** that are very hard to find.

---

### `let` — Redeclaration NOT Allowed ✅ (Safe)

```js
let b = 12;
b = 32;      // ✅ Reassignment — fine

let b = 433; // ❌ SyntaxError: Identifier 'b' has already been declared
```

`let` immediately throws an error if you try to redeclare.
This is actually **good** — it catches your mistake right away.

---

## Side by Side Comparison

```js
// ---- var ----
var a = 12;
a = 32;      // ✅ Reassignment allowed
var a = 233; // ✅ Redeclaration allowed (dangerous)

// ---- let ----
let b = 12;
b = 32;      // ✅ Reassignment allowed
let b = 433; // ❌ Error — Redeclaration NOT allowed (safe)
```

---

## What About `const`?

`const` allows **neither** reassignment nor redeclaration.

```js
const c = 12;
c = 32;      // ❌ Error — Reassignment not allowed
const c = 50; // ❌ Error — Redeclaration not allowed
```

---

## Full Comparison Table

| Action          | `var` | `let` | `const` |
|-----------------|-------|-------|---------|
| Reassignment    | ✅    | ✅    | ❌      |
| Redeclaration   | ✅    | ❌    | ❌      |

---

## Simple Rule to Remember

> **Reassignment** → updating value → `let` allows, `const` does not  
> **Redeclaration** → re-using keyword on same variable → only `var` allows it  
> `var` allowing redeclaration is a **bug waiting to happen** — avoid it

---

# Temporal Dead Zone (TDZ) in JavaScript

## What is Temporal Dead Zone?

Temporal Dead Zone is the **area (lines of code) where JavaScript knows
that a variable exists, but it cannot give you its value yet.**

In simple words:
> The zone **before the variable is declared** is called its Temporal Dead Zone.
> If you try to access the variable in this zone — you get an error.

---

## How JavaScript Reads Code (Hoisting)

Before running your code, JavaScript **scans the entire file first**
and becomes aware of all variables.

- For `var` — it hoists and sets value to `undefined`
- For `let` and `const` — it hoists but does **NOT** give any value yet
  → This "no value yet" period is the **Temporal Dead Zone**

---

## TDZ Exists in `let` and `const` — NOT in `var`

---

### Case 1 — Variable never declared (using `var` behavior)

```js
console.log(a); // undefined — no error (var is hoisted with undefined)

var a = 12;
```

`var` does not have TDZ.
JavaScript gives `undefined` instead of throwing an error.

---

### Case 2 — Accessing before declaration (no declaration at all)

```js
console.log(a); // ❌ ReferenceError: a is not defined
```

Here `a` doesn't exist anywhere in the code.
JavaScript has no idea about `a` — so it says **"not defined"**.

---

### Case 3 — Accessing `let` before its declaration (TDZ)

```js
console.log(a); // ❌ ReferenceError: Cannot access 'a' before initialization

let a = 12;
```

Here JavaScript **knows `a` exists** (it scanned the file),
but `a` is still in its **Temporal Dead Zone**.

So it says **"cannot access before initialization"** — not "not defined".

> This difference in error message is important:
> - `a is not defined` → variable doesn't exist at all
> - `Cannot access 'a' before initialization` → variable exists but is in TDZ

---

## Visualizing TDZ

```
Line 1:  console.log(a);  ← 🚫 TDZ — a exists but no value yet
Line 2:  console.log(a);  ← 🚫 TDZ — still in dead zone
Line 3:  let a = 12;      ← ✅ TDZ ends here — a is now initialized
Line 4:  console.log(a);  ← ✅ 12 — accessible now
```

The lines **before `let a = 12;`** are the **Temporal Dead Zone** for `a`.

---

## TDZ with `const`

Same behavior as `let` — `const` also has TDZ.

```js
console.log(pi); // ❌ ReferenceError: Cannot access 'pi' before initialization

const pi = 3.14;
```

---

## `var` Has No TDZ

```js
console.log(a); // ✅ undefined — no error (bad but no crash)

var a = 12;

console.log(a); // ✅ 12
```

`var` is hoisted and automatically set to `undefined`.
This is why `var` can give wrong values silently — another reason to avoid it.

---

## Error Message Difference (Important for Interviews)

| Situation                              | Error Message                                      |
|----------------------------------------|----------------------------------------------------|
| Variable doesn't exist anywhere        | `ReferenceError: a is not defined`                 |
| `let`/`const` accessed before declaration | `ReferenceError: Cannot access 'a' before initialization` |
| `var` accessed before declaration      | No error — gives `undefined`                       |

---

## TDZ Comparison Table

| Feature                  | `var`         | `let`             | `const`           |
|--------------------------|---------------|-------------------|-------------------|
| Hoisted?                 | ✅ Yes        | ✅ Yes            | ✅ Yes            |
| Value during hoisting    | `undefined`   | ❌ No value (TDZ) | ❌ No value (TDZ) |
| Temporal Dead Zone       | ❌ No TDZ     | ✅ Yes            | ✅ Yes            |
| Access before declaration| `undefined`   | ❌ Error          | ❌ Error          |

---

## Simple Rule to Remember

> TDZ = the lines of code **before** a `let` or `const` variable is declared  
> In TDZ — JS knows the variable exists but **refuses to give its value**  
> `var` has no TDZ — it just gives `undefined` silently (dangerous)  
> Two different errors — **"not defined"** vs **"before initialization"** — know the difference

---

## Gotchas(Trap)

- TDZ is the reason `let` and `const` are **safer** than `var`
- Even though hoisting happens for `let`/`const`, they are NOT usable until declared
- This question is asked very frequently in interviews —
  always mention the **error message difference** between the two cases


---
# Hoisting in JavaScript

## What is Hoisting?

Hoisting is a JavaScript behavior where **variable and function declarations
are moved to the top of their scope automatically** before the code runs.

In simple words:
> Before running your code, JavaScript **reads through the entire file first**
> and picks up all declarations — and moves them to the top mentally.

You don't see this happening in your code — JavaScript does it **internally**.

---

## Why Does Hoisting Exist in JavaScript?

JavaScript was designed to be **flexible and forgiving** for beginners.
The idea was — even if you use a variable before declaring it,
the program should not crash.

Most other languages like **C, C++, Java, Python** do NOT do this.
If you use a variable before declaring it there — you get an error immediately.

JavaScript was built for the web and needed to be more lenient —
that's why hoisting exists.

---

## How Hoisting Works — Step by Step

When you write:

```js
var a = 12;
```

JavaScript internally **breaks this into two parts:**

```js
var a = undefined; // Declaration — moved to TOP
a = 12;            // Initialization — stays at original position
```

So even if you access `a` before the line `var a = 12;`,
JavaScript already has `a` at the top with value `undefined`.

---

### Step by Step Example

What you write:
```js
console.log(a); // Line 1
var a = 12;     // Line 2
console.log(a); // Line 3
```

What JavaScript actually runs internally:
```js
var a = undefined; // Declaration hoisted to top

console.log(a);    // undefined — no error (a exists but no value yet)
a = 12;            // Initialization stays here
console.log(a);    // 12
```

**Output:**
```
undefined
12
```

No error — because `a` was already declared at the top by JavaScript.

---

## Hoisting Happens in All Three — `var`, `let`, `const`

But the **behavior is different** for each.

---

### Hoisting with `var` — Value set to `undefined`

```js
console.log(a); // undefined — no error

var a = 12;

console.log(a); // 12
```

- Declaration is hoisted to top
- Value is automatically set to `undefined`
- No error when accessed before declaration
- This silent `undefined` can cause hard to find bugs

---

### Hoisting with `let` — No value is set (TDZ)

```js
console.log(a); // ❌ ReferenceError: Cannot access 'a' before initialization

let a = 12;
```

```js
// Internally what JavaScript does:
let a;          // Hoisted — but NO value set (not even undefined)
console.log(a); // ❌ Error — you are in Temporal Dead Zone
a = 12;         // Initialization stays here
```

- Declaration is hoisted to top
- But **no value is set** — not even `undefined`
- Accessing it before declaration = accessing it in **Temporal Dead Zone**
- You get error: `Cannot access 'a' before initialization`

---

### Hoisting with `const` — No value is set, Reference Error

```js
console.log(pi); // ❌ ReferenceError: Cannot access 'pi' before initialization

const pi = 3.14;
```

- Same behavior as `let`
- Declaration hoisted but no value set
- Accessing before declaration throws error
- Also `const` must be initialized at the time of declaration

---

## Hoisting Summary Table

| Feature                   | `var`       | `let`             | `const`           |
|---------------------------|-------------|-------------------|-------------------|
| Hoisted?                  | ✅ Yes      | ✅ Yes            | ✅ Yes            |
| Value during hoisting     | `undefined` | ❌ Nothing (TDZ)  | ❌ Nothing (TDZ)  |
| Access before declaration | `undefined` | ❌ Error          | ❌ Error          |
| Temporal Dead Zone        | ❌ No       | ✅ Yes            | ✅ Yes            |

---

## Hosting vs Hoisting ⚠️

| Word        | Meaning                                                  |
|-------------|----------------------------------------------------------|
| **Hosting** | Putting a website/app on a server so others can access it|
| **Hoisting**| JavaScript moving declarations to the top before running |

These are **completely different things** — just similar spelling.
Hosting = servers and deployment.
Hoisting = JavaScript internal behavior.

---

## `undefined` vs `not defined` ⭐ (Important)

This is one of the **most asked differences** in JavaScript interviews.

### `undefined`
- The variable **exists** in memory
- But no value has been assigned to it yet
- JavaScript itself sets this during hoisting for `var`

```js
var a;
console.log(a); // undefined — variable exists, no value yet
```

```js
console.log(a); // undefined — hoisted by JS, value not assigned yet
var a = 12;
```

---

### `not defined`
- The variable **does not exist at all** in memory
- JavaScript has no idea about it

```js
console.log(a); // ❌ ReferenceError: a is not defined
// no var/let/const for a anywhere in the code
```

---

### Side by Side

```js
// undefined
var a;
console.log(a);      // undefined ✅ (exists, no value)

// not defined
console.log(b);      // ❌ ReferenceError: b is not defined (doesn't exist)
```

---

### Key Difference Table

| Term          | Variable Exists? | Has Value? | Error?                        |
|---------------|------------------|------------|-------------------------------|
| `undefined`   | ✅ Yes           | ❌ No      | No error                      |
| `not defined` | ❌ No            | ❌ No      | ❌ ReferenceError             |

---

## Simple Rule to Remember

> **Hoisting** → JS moves declarations to top before running code  
> `var` → hoisted with `undefined` (silent, dangerous)  
> `let` / `const` → hoisted but no value → TDZ → error if accessed early  
> `undefined` → variable exists but has no value  
> `not defined` → variable doesn't exist at all  
> **Hosting ≠ Hoisting** — completely different words, completely different meaning

---

## Important

- Hoisting only moves the **declaration** — never the initialization
- `let` and `const` ARE hoisted — but they land in TDZ, not `undefined`
- Interviewers love asking: *"Is `let` hoisted?"* — answer is YES,
  but it goes into TDZ instead of getting `undefined`
- Always write declarations at the **top of your code** to avoid hoisting confusion

---





