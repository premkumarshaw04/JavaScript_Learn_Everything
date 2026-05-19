# Section 3: Operators in JavaScript

---

## What is an Operator?

An operator is a **symbol that performs an operation** on values.
Values on which the operation is performed are called **operands**.

```js
5 + 3  // "+" is the operator, 5 and 3 are operands
```

---

## Types of Operators

1. Arithmetic
2. Comparison
3. Logical
4. Assignment
5. Unary
6. Ternary

---

## 1. Arithmetic Operators

Used to perform mathematical operations.

| Operator | Name           | Example   | Output |
|----------|----------------|-----------|--------|
| `+`      | Addition       | `5 + 3`   | `8`    |
| `-`      | Subtraction    | `5 - 3`   | `2`    |
| `*`      | Multiplication | `5 * 3`   | `15`   |
| `/`      | Division       | `10 / 2`  | `5`    |
| `%`      | Modulus        | `10 % 3`  | `1`    |
| `**`     | Exponentiation | `2 ** 3`  | `8`    |

```js
console.log(10 % 3);  // 1 — remainder after dividing 10 by 3
console.log(2 ** 3);  // 8 — 2 to the power of 3
```

---

## 2. Comparison Operators

Used to compare two values — always returns `true` or `false`.

| Operator | Name                  | Example        | Output  |
|----------|-----------------------|----------------|---------|
| `==`     | Loose equality        | `12 == "12"`   | `true`  |
| `===`    | Strict equality       | `12 === "12"`  | `false` |
| `!=`     | Loose not equal       | `5 != "5"`     | `false` |
| `!==`    | Strict not equal      | `5 !== "5"`    | `true`  |
| `>`      | Greater than          | `5 > 3`        | `true`  |
| `<`      | Less than             | `5 < 3`        | `false` |
| `>=`     | Greater than or equal | `5 >= 5`       | `true`  |
| `<=`     | Less than or equal    | `3 <= 5`       | `true`  |

---

### `==` vs `===`

**`==` — Loose Equality (Not Strict)**
Does not check the type — it converts the types first and then compares.
This is why `12 == "12"` gives `true`, which is misleading.

```js
12 == "12"   // true — "12" gets converted to 12, then compared
```

**`===` — Strict Equality**
Checks both the value AND the type.
No type conversion happens — this fixes the problem with `==`.

```js
12 === "12"  // false — number vs string, types are different
12 === 12    // true  — same value, same type
```

**Explanation:**
Always prefer `===` over `==` in real code.
`==` can give unexpected results because of type conversion.
`===` is predictable and safe.

---

## 3. Assignment Operators

Used to assign values to variables.

| Operator | Example   | Same As       |
|----------|-----------|---------------|
| `=`      | `a = 5`   | `a = 5`       |
| `+=`     | `a += 3`  | `a = a + 3`   |
| `-=`     | `a -= 3`  | `a = a - 3`   |
| `*=`     | `a *= 3`  | `a = a * 3`   |
| `/=`     | `a /= 3`  | `a = a / 3`   |
| `%=`     | `a %= 3`  | `a = a % 3`   |

```js
let score = 10;
score += 5;  // 15
score -= 3;  // 12
score *= 2;  // 24
score /= 4;  // 6
score %= 4;  // 2
```

---

## 4. Logical Operators

Used to combine or reverse conditions.

| Operator | Name | Example           | Output  |
|----------|------|-------------------|---------|
| `&&`     | AND  | `true && false`   | `false` |
| `\|\|`   | OR   | `true \|\| false` | `true`  |
| `!`      | NOT  | `!true`           | `false` |

---

### Use Cases

```js
// AND — both conditions must be true
let age = 20;
let hasID = true;
if (age >= 18 && hasID) {
    console.log("Entry allowed"); // ✅ runs
}

// OR — at least one condition must be true
let isAdmin = false;
let isModerator = true;
if (isAdmin || isModerator) {
    console.log("Access granted"); // ✅ runs
}

// NOT — flips the boolean value
let isLoggedIn = false;
if (!isLoggedIn) {
    console.log("Please login"); // ✅ runs
}
```

---

### How `!!` Works to Find Truthy / Falsy Nature

`!` flips the boolean value of anything.
`!!` flips it twice — giving you the actual boolean nature of a value.

```js
!12   // false — 12 is truthy, ! flips it to false
!!12  // true  — ! of false flips back to true (actual boolean of 12)

!0    // true  — 0 is falsy, ! flips it to true
!!0   // false — actual boolean of 0

!!""      // false — empty string is falsy
!!"Harsh" // true  — non-empty string is truthy
```

**Explanation:**
`!` alone gives you the opposite boolean.
`!!` gives you the real truthy or falsy nature of any value.
This is the quickest trick to check if a value is truthy or falsy.

---

## 5. Unary Operators

Operators that work on a **single operand**.

| Operator | Name        | Example        |
|----------|-------------|----------------|
| `+`      | Unary plus  | `+"5"` → `5`   |
| `-`      | Unary minus | `-5`           |
| `!`      | Logical NOT | `!true`        |
| `typeof` | Type check  | `typeof 12`    |
| `++`     | Increment   | `a++` / `++a`  |
| `--`     | Decrement   | `a--` / `--a`  |

---

### Trick — Convert String to Number Using Unary `+`

Adding `+` before a value forces it to convert into a number.

```js
+"5"      // 5     — string "5" → number 5
+"3.14"   // 3.14  — works with decimals too
+"Harsh"  // NaN   — text cannot be converted to number
```

**Explanation:**
If the string contains a valid number → converts successfully.
If the string contains text → gives `NaN`.

---

### More Unary Tricks

```js
// Convert boolean to number
+true      // 1
+false     // 0

// Convert null to number
+null      // 0

// Convert undefined to number
+undefined // NaN

// Unary minus — negates the value
let a = 5;
console.log(-a);  // -5

// Negate a string number
-"5"       // -5

// Quick way to check falsy/truthy
!!0        // false
!!"Harsh"  // true
```

---

### `typeof` Operator

Used to check the type of a value — returns a string.

```js
typeof 12           // "number"
typeof "Harsh"      // "string"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof Symbol()     // "symbol"
typeof function(){} // "function"
```

---

### Pre vs Post Increment

Both increment the value by 1 — but the timing is different.

```js
// Post Increment (a++) — returns current value first, then increments
let a = 5;
console.log(a++); // 5 — current value returned first
console.log(a);   // 6 — incremented after

// Pre Increment (++a) — increments first, then returns updated value
let b = 5;
console.log(++b); // 6 — incremented first, then returned
console.log(b);   // 6
```

**Explanation:**
`a++` → use the value first, increment later.
`++a` → increment first, then use the updated value.

---

## 6. Ternary Operator

A shorthand for `if-else` written in a single line.

```
condition ? code if true : code if false
```

```js
let age = 20;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result); // "Adult"
```

**Explanation:**
If the condition is `true` → code after `?` runs.
If the condition is `false` → code after `:` runs.
Use ternary for simple conditions — for complex logic use regular `if-else`.

---

## `typeof` vs `instanceof`

---

### `typeof` — Mostly Used with Primitives

```js
typeof 12        // "number"
typeof "Harsh"   // "string"
typeof true      // "boolean"
typeof undefined // "undefined"
```

### ⚠️ typeof Quirks — Important

`typeof` gives wrong answers in some cases:

```js
typeof null   // "object"  ❌ — null is NOT an object (known JS bug)
typeof []     // "object"  ❌ — array shown as object (misleading)
typeof NaN    // "number"  ❌ — NaN shown as number (confusing)
```

**Explanation:**
`typeof null === "object"` is a bug that has existed since the beginning of JavaScript.
It was never fixed to avoid breaking old codebases.
For arrays, use `Array.isArray()` instead of `typeof`.

---

### `instanceof` — Used with Reference Types

`instanceof` checks if an object is an instance of a particular class.
It works by checking the **prototype chain** of the value.

```js
let b = {};
b instanceof Object  // true — b is an object, connected to Object ✅

let arr = [1, 2, 3];
arr instanceof Array   // true ✅
arr instanceof Object  // true — arrays are objects internally ✅
```

---

### Why `instanceof` Returns `false` for Primitives

```js
let a = 12;
a instanceof Number  // false ❌
```

**Explanation:**
`instanceof` checks the prototype chain — which only exists for reference types
like objects, arrays, and functions.
Primitive `12` is not an object — it has no prototype chain.
So `instanceof` always returns `false` for primitives.

This is why:
- `typeof` is used for **primitives**
- `instanceof` is used for **reference types**

---

### `typeof` vs `instanceof` — Comparison

| Feature         | `typeof`                       | `instanceof`                     |
|-----------------|--------------------------------|----------------------------------|
| Works best with | Primitive values               | Reference values (objects)       |
| Returns         | A string (`"number"` etc.)     | `true` or `false`                |
| Null check      | ❌ Says `"object"` (bug)       | `null instanceof Object` = false |
| Array check     | ❌ Says `"object"`             | `[] instanceof Array` = true ✅  |
| Primitive check | ✅ Works well                  | ❌ Always false for primitives   |

---

## Quick Reference

> `==` → loose, converts types → avoid it
> `===` → strict, checks value + type → always use this
> `&&` → both true | `\|\|` → one true | `!` → flips value
> `!!value` → quick truthy / falsy check
> `+"5"` → converts string to number using unary `+`
> `a++` → use then increment | `++a` → increment then use
> Ternary → `condition ? true : false`
> `typeof` → for primitives | `instanceof` → for reference types
> `typeof null === "object"` → known JS bug, just remember it