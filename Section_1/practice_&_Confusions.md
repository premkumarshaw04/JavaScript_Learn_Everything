# Practice Questions — Guess the Output

---

## Question 1

```js
console.log(nm);
var nm = "Harsh";
```

**Output:** `undefined`

**Why?**  
Because of **hoisting**. JavaScript moves the declaration of `nm` to the top
before running the code. So internally it becomes:

```js
var nm = undefined; // hoisted to top
console.log(nm);    // undefined
nm = "Harsh";       // initialization stays here
```

`var` is hoisted with value `undefined` —
so no error, but no actual value either.

---

## Question 2

```js
console.log(age);
let age = 25;
```

**Output:** `ReferenceError: Cannot access 'age' before initialization`

**Why?**  
`let` is also hoisted — but it lands in the **Temporal Dead Zone (TDZ)**.
JavaScript knows `age` exists but refuses to give its value
until the declaration line is reached.
Accessing it before that line = accessing it in TDZ = error.

---

## Question 3

```js
var x = 1;
{
    var x = 2;
}
console.log(x);
```

**Output:** `2`

**Why?**  
`var` does **not respect block scope**.
Both `var x = 1` and `var x = 2` are in the **same global scope**.
The second `var x = 2` simply **overwrites** the first one.
So when `console.log(x)` runs — it prints `2`.

---

## Question 4

```js
let a = 10;
{
    let a = 20;
    console.log("Inside:", a);
}
console.log("Outside:", a);
```

**Output:**
```
Inside: 20
Outside: 10
```

**Why?**  
`let` is **block scoped**.
The `a = 20` inside the block `{ }` is a **completely separate variable**
from the `a = 10` outside.
Inside the block — it sees its own `a = 20`.
Outside the block — it sees the outer `a = 10`.
Both variables have the **same name but different scopes** —
they don't affect each other.

---

## Quick Summary

| Question | Concept Tested               | Output                          |
|----------|------------------------------|---------------------------------|
| 1        | Hoisting with `var`          | `undefined`                     |
| 2        | TDZ with `let`               | `ReferenceError`                |
| 3        | `var` ignores block scope    | `2`                             |
| 4        | `let` respects block scope   | `Inside: 20` / `Outside: 10`   |

---

# Common Confusions in JavaScript

---

## Confusion 1 — Why `var` leaks outside block but `let` does not?

```js
if (true) {
    var a = 1;
    let b = 2;
}
console.log(a); // 1 — No error
console.log(b); // ❌ ReferenceError: b is not defined
```

**Reason:**

`var` is **function scoped** — it only respects function boundaries.
A block `{ }` like `if`, `for`, or plain `{ }` means **nothing** to `var`.
So `var a` leaks out of the block and is accessible everywhere.

`let` is **block scoped** — it respects every `{ }` boundary.
Once the block ends, `let b` is destroyed and cannot be accessed outside.

**Simple way to remember:**
> `var` only stops at a **function wall**
> `let` stops at every **curly brace wall**

---

## Confusion 2 — Why `const` allows changing object properties?

```js
const person = { name: "Harsh" };
person.name = "Sharma"; // ✅ Allowed
person = {};             // ❌ TypeError: Assignment to constant variable
```

**Reason:**

`const` does not mean the **value is frozen**.
It means you **cannot reassign using `=` operator**.

When you do `person.name = "Sharma"` —
you are **not reassigning** `person`, you are just **updating a property inside it**.
The variable `person` still points to the same object in memory.

When you do `person = {}` —
you are trying to **reassign** `person` to a completely new object.
That is what `const` prevents.

**Simple way to remember:**
> `const` locks the **box** (the variable)
> but does NOT lock what is **inside the box** (the properties)

---

### Want to fully freeze an object? Use `Object.freeze()`

```js
const person = Object.freeze({ name: "Harsh" });
person.name = "Sharma"; // ❌ Silently ignored — no error, no change
console.log(person.name); // "Harsh"
```

`Object.freeze()` makes the object **completely immutable** —
no property can be added, changed, or deleted after freezing.

---

## Quick Summary

| Confusion                          | Reason                                              |
|------------------------------------|-----------------------------------------------------|
| `var` leaks out of block           | `var` is function scoped — ignores block `{ }`     |
| `let` stays inside block           | `let` is block scoped — respects every `{ }`       |
| `const` allows property change     | `const` prevents reassignment, not property update |
| `const` prevents `person = {}`    | That is reassignment using `=` — not allowed       |
| `Object.freeze()` fully locks object | No property can be changed after freezing        |

---






