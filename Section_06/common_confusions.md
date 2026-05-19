# Section 6: Common Confusions — Functions

---

## 1. Arrow vs Regular Function — When to Use Which?

Arrow functions can be used **everywhere except inside objects**.

---

### The Problem — Arrow Function Inside an Object

```js
const obj = {
    value: 42,
    regular: function() { return this.value; }, // ✅ works
    arrow: () => this.value                      // ❌ does not work
};

console.log(obj.regular()); // 42
console.log(obj.arrow());   // undefined
```

**Explanation:**
In a regular function — `this` refers to the object that called it.
So `obj.regular()` → `this` is `obj` → `this.value` is `42`. ✅

In an arrow function — `this` is not its own.
Arrow function takes `this` from the **surrounding scope** where it was written.
Here the surrounding scope is the global scope — not `obj`.
So `this.value` gives `undefined`. ❌

---

### Simple Rule

| Situation | Use |
|-----------|-----|
| Object methods | ✅ Regular function |
| Callbacks (`forEach`, `map`, `setTimeout`) | ✅ Arrow function |
| Short one-liner functions | ✅ Arrow function |
| When you need `this` of the object | ✅ Regular function |
| When you need `this` of outer scope | ✅ Arrow function |

> Arrow function everywhere — **except as object methods**.

---

## 2. Function Hoisting and the Impact of Temporal Dead Zone

```js
// Case 1 — Function Declaration
greet();            // ✅ works — hoisting is performed here
function greet() {}

// Case 2 — Arrow Function with const
greet();            // ❌ error — calling in Temporal Dead Zone
const greet = () => {};
```

**Explanation:**

**Case 1 — Function Declaration:**
Function declarations are **fully hoisted** — the entire function
(name + body) is moved to the top before the code runs.
So `greet()` works even before the declaration line.

**Case 2 — Arrow Function with `const`:**
`const greet` is hoisted — but it lands in the **Temporal Dead Zone**.
JavaScript knows `greet` exists but has no value yet.
Calling `greet()` at this point → variable is in TDZ → error.

```
// What JS sees internally for Case 2:
const greet = TDZ;   // hoisted but no value — TDZ starts here
greet();             // ❌ accessing in TDZ — ReferenceError
greet = () => {};    // TDZ ends — value assigned here
```

---

## 3. When Does Hoisting Work in Functions?

| Type | Hoisted? | Usable Before Declaration? | Reason |
|------|----------|---------------------------|--------|
| Function Declaration | ✅ Fully | ✅ Yes | Entire function moved to top |
| Function Expression (`var`) | ⚠️ Partially | ❌ No — gives `undefined` | Only `var` is hoisted, not the function value |
| Function Expression (`let`/`const`) | ⚠️ Partially | ❌ No — gives TDZ error | `let`/`const` hoisted but stuck in TDZ |
| Arrow Function (`let`/`const`) | ⚠️ Partially | ❌ No — gives TDZ error | Same as above |

```js
// ✅ Works — function declaration
hello();
function hello() { console.log("Hello"); }

// ❌ undefined is not a function — var expression
hi();
var hi = function() { console.log("Hi"); }

// ❌ Cannot access before initialization — const/let expression
bye();
const bye = function() { console.log("Bye"); }

// ❌ Cannot access before initialization — arrow function
wave();
const wave = () => console.log("Wave");
```

**Simple Rule:**
> Hoisting works fully **only with function declarations**.
> Everything else — either TDZ error or `undefined` error.

---

## 4. Difference Between Closure and Higher Order Function

These two are related but different — a very common confusion.

| | Closure | Higher Order Function |
|--|---------|----------------------|
| **What** | Inner function that uses a variable from its parent function | A function that accepts or returns another function |
| **Key idea** | Variable from parent stays alive in memory | Function treated as a value — passed or returned |
| **Must return a function?** | ✅ Yes — and that function uses parent's variable | Not necessary — just needs to accept or return a function |
| **Must use parent variable?** | ✅ Yes — that is what makes it a closure | ❌ No |

---

### Closure — Inner Function Uses Parent's Variable

```js
function outer() {
    let count = 0;          // parent's variable
    return function() {
        count++;            // ✅ using parent's variable — this is closure
        return count;
    };
}

let c = outer();
console.log(c()); // 1
console.log(c()); // 2
```

---

### Higher Order Function — Accepts or Returns a Function

```js
// Returns a function — Higher Order Function
function multiplier(factor) {
    return function(num) {
        return num * factor; // also a closure — uses "factor"
    };
}

// Accepts a function — Higher Order Function
function runTwice(fn) {
    fn();
    fn();
}
```

---

### Can Something Be Both?

Yes — a function can be **both** a higher order function and create a closure
at the same time.

```js
function discountCalculator(discount) {  // Higher Order — returns a function
    return function(price) {
        return price - price * (discount / 100); // Closure — uses "discount"
    };
}
```

**Explanation:**
`discountCalculator` is a **higher order function** — it returns a function.
The returned function is a **closure** — it uses `discount` from the parent.
Both concepts applied together — very common in real world code.

---

## Quick Reference

> Arrow function → no own `this` → avoid inside object methods  
> Regular function → has own `this` → use as object methods  
> Function declaration → fully hoisted → can call before writing  
> Arrow / expression with `let`/`const` → TDZ → cannot call before declaration  
> Arrow / expression with `var` → hoisted as `undefined` → `TypeError` when called  
> **Closure** → inner function uses parent's variable → variable stays alive  
> **Higher order function** → accepts OR returns a function  
> Both can exist together — very common in real projects