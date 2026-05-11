# Section 2: Data types + Type system in JavaScript

## Two Categories of Data Types

### Primitive Data Types (No Brackets)
Stored **directly in memory** — simple single values.

| Type        | Example                  |
|-------------|--------------------------|
| Number      | `12`, `3.14`             |
| String      | `"Harsh"`, `'hello'`     |
| Boolean     | `true`, `false`          |
| Undefined   | `undefined`              |
| Null        | `null`                   |
| BigInt      | `12n`                    |
| Symbol      | `Symbol('id')`           |

---

### Reference Data Types (Come with Brackets)
Stored as a **reference in memory** — they point to a location.

| Type        | Example                  |
|-------------|--------------------------|
| Object      | `{ name: "Harsh" }`      |
| Array       | `[1, 2, 3]`              |
| Function    | `function() {}`          |

---

## Primitive — You Get a Real Copy

When you copy a primitive, JavaScript creates a **completely separate copy**.
Both variables are independent — changing one does NOT affect the other.

```js
let a = 12;
let b = a; // b gets its own copy of 12

a = a + 2; // a is now 14
console.log(a); // 14
console.log(b); // 12 — b is unchanged
```

**Why?**
Because `a` and `b` are stored at **separate memory locations**.
When `a` changes, `b` has no connection to it — it has its own `12`.

---

## Reference — You Get a Reference, Not a Real Copy

When you copy a reference type, JavaScript does **not** create a new copy.
Instead, both variables **point to the same location in memory**.
So changing one will reflect in the other.

```js
let a = [1, 2, 3];
let b = a; // b is just holding the reference of a

b.push(4);
console.log(a); // [1, 2, 3, 4] — a is also changed!
console.log(b); // [1, 2, 3, 4]
```

**Why?**
Because `a` and `b` are both pointing to the **same array in memory**.
`b` is not a new array — it is just another name for the same array.
So any change made through `b` is visible in `a` as well.

---

## How to Properly Copy a Reference Type?

Use the **Spread Operator `...`** — it creates a real independent copy.

```js
let a = [1, 2, 3];
let b = [...a]; // real copy using spread operator

b.push(4);
console.log(a); // [1, 2, 3] — a is NOT affected
console.log(b); // [1, 2, 3, 4]
```

For objects:
```js
let person = { name: "Harsh" };
let copy = { ...person }; // real copy

copy.name = "Sharma";
console.log(person.name); // "Harsh" — not affected
console.log(copy.name);   // "Sharma"
```

---

## Simple Summary

| Feature                   | Primitive                  | Reference                        |
|---------------------------|----------------------------|----------------------------------|
| Types                     | Number, String, Boolean etc| Object, Array, Function          |
| Copying                   | Real copy                  | Reference copy (same memory)     |
| Change affects original?  | ❌ No                      | ✅ Yes                           |
| How to truly copy         | Direct assignment `=`      | Spread operator `...`            |

---

## Simple Rule to Remember

> Primitive → copy with `=` → you get your **own copy**
> Reference → copy with `=` → you get the **same reference**
> To truly copy a reference type → use **spread operator `...`**

---

# Data Types in JavaScript — Detailed

## Two Categories

| Primitive | Reference |
|-----------|-----------|
| String, Number, Boolean, Null, Undefined, Symbol, BigInt | Arrays, Objects, Functions |

---

## Primitive Data Types

---

### 1. String
Used to store **text data**.

Three ways to declare a string:

```js
let name1 = 'Harsh';        // Single quotes
let name2 = "Harsh";        // Double quotes
let name3 = `Hello Harsh`;  // Backticks (Template Literals)
```

Backticks are special — they allow **embedding variables** directly inside:

```js
let name = "Harsh";
let msg = `Hello, my name is ${name}`; // Hello, my name is Harsh
```

> Use backticks when you need to mix variables and text together.

---

### 2. Number
Used to store **numeric values** — integers and decimals both.

```js
let age = 25;       // integer
let price = 99.99;  // decimal
let temp = -10;     // negative
```

---

### 3. Boolean
Only two possible values — `true` or `false`.
Used for **conditions and decisions**.

```js
let isLoggedIn = true;
let hasAccess = false;
```

---

### 4. Null
Represents **intentional absence of value**.
You set it yourself when you want to say "this variable has no value right now."

```js
let user = null; // deliberately empty
```

---

### 5. Undefined
Represents a variable that has been **declared but not given a value yet**.
JavaScript sets this automatically.

```js
let score;
console.log(score); // undefined — no value assigned yet
```

---

### Difference Between `null` and `undefined`

| Feature       | `null`                              | `undefined`                        |
|---------------|-------------------------------------|------------------------------------|
| Set by        | You (intentionally)                 | JavaScript (automatically)         |
| Meaning       | Variable exists, value is empty     | Variable exists, no value assigned |
| Type          | `object` (JS bug — known issue)     | `undefined`                        |

```js
let a = null;      // you said: "no value"
let b;             // JS said: "no value assigned yet"

console.log(a);    // null
console.log(b);    // undefined
```

> **Interview answer:**
> `null` is when **you** intentionally empty a variable.
> `undefined` is when **JavaScript** has not received any value for a variable yet.

---

### 6. Symbol
A Symbol is a **unique and immutable value**.
Even if two symbols have the same description — they are never equal.

```js
let u1 = Symbol("uid");
let u2 = Symbol("uid");

console.log(u1 === u2); // false — both are unique
```

---

#### Why is Symbol Useful? (Real World Use Case)

When you use a **third party library**, it often adds its own fields to objects.
If you accidentally create a field with the **same name** as the library's field —
your value will overwrite the library's original value and break things.

**Problem:**
```js
let obj = {
    uid: 1,
    name: "Harsh",
    age: 12,
    email: "test@test.com"
};

// Library internally uses "uid" field
// You also created "uid" — now you accidentally overwrote it
obj.uid = "001"; // ❌ Overwrites library's original uid
```

**Solution using Symbol:**
```js
let obj = {
    uid: 1,
    name: "Harsh",
    age: 12,
    email: "test@test.com"
};

let u1 = Symbol("uid"); // unique key — will never clash
obj[u1] = "001";        // ✅ Your uid and library's uid both exist separately

console.log(obj.uid);   // 1       — library's uid, untouched
console.log(obj[u1]);   // "001"   — your uid, safely stored
```

Because Symbol creates a **guaranteed unique key**,
it will never clash with any existing property — no matter what name you give it.

---

### 7. BigInt
Used when you need to store numbers **larger than JavaScript's safe integer limit**.

JavaScript's max safe number:
```js
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
```

Beyond this number — normal `number` type loses precision.
That's where `BigInt` comes in.

To create a BigInt — add `n` at the end of the number:

```js
let a = 9007199254740991n; // BigInt
let result = a + 12n;

console.log(result); // 9007199254741003n
```

> Note: You can only do math between two BigInts.
> Mixing BigInt and normal number will give an error.

```js
let a = 9007199254740991n;
let b = 12;
a + b; // ❌ Error — cannot mix BigInt and Number
a + 12n; // ✅ Correct
```

---

## Reference Data Types

---

### 1. Array
An ordered list of values.

```js
let fruits = ["apple", "mango", "banana"];
console.log(fruits[0]); // "apple"
```

---

### 2. Object
A collection of **key-value pairs**.

```js
let user = {
    name: "Harsh",
    age: 21,
    email: "harsh@test.com"
};

console.log(user.name); // "Harsh"
```

---

### 3. Function
A reusable block of code.

```js
function greet(name) {
    return `Hello, ${name}`;
}

console.log(greet("Harsh")); // Hello, Harsh
```

---

## The Big Problem with Reference Types — Changes Reflect in Parent

When you copy a reference type using `=`,
both variables point to the **same memory location**.
So a change in one reflects in the other.

```js
let a = {
    name: "Harsh"
};

let b = a; // b is just holding the reference of a

b.name = "Harshita"; // changed using b

console.log(a.name); // "Harshita" — a is also changed!
console.log(b.name); // "Harshita"
```

**Why?**
`b = a` does not create a new object.
Both `a` and `b` are pointing to the **same object in memory**.
So any change through `b` directly affects `a` as well.

**Fix — Use Spread Operator:**
```js
let a = { name: "Harsh" };
let b = { ...a }; // real independent copy

b.name = "Harshita";

console.log(a.name); // "Harsh"    — not affected
console.log(b.name); // "Harshita" — only b changed
```

---

## Full Summary Table

| Data Type   | Category  | Example                  | Use Case                        |
|-------------|-----------|--------------------------|----------------------------------|
| String      | Primitive | `"Hello"`                | Storing text                     |
| Number      | Primitive | `25`, `3.14`             | Storing numbers                  |
| Boolean     | Primitive | `true`, `false`          | Conditions and flags             |
| Null        | Primitive | `null`                   | Intentionally empty value        |
| Undefined   | Primitive | `undefined`              | No value assigned yet            |
| Symbol      | Primitive | `Symbol("id")`           | Unique keys, avoid name clashes  |
| BigInt      | Primitive | `9007199254740991n`      | Very large numbers               |
| Array       | Reference | `[1, 2, 3]`              | List of values                   |
| Object      | Reference | `{ name: "Harsh" }`      | Key-value data                   |
| Function    | Reference | `function() {}`          | Reusable logic                   |

---

# Type System in JavaScript

---

## Dynamic Typing

### What is Static Typing?
In languages like **C, C++, Java** — you have to declare the **type** of a variable
when you create it. Once set, you cannot change the type later.

```c
int age = 25;
age = "Harsh"; // ❌ Error — cannot change type in static typing
```

---

### What is Dynamic Typing?
In JavaScript — you do **not** declare the type.
JavaScript figures out the type on its own based on the value.
You can also **change the type of a variable anytime**.

```js
let a = 12;       // number
a = "Harsh";      // now string — no error
a = true;         // now boolean — still no error
```

---

### Static vs Dynamic Typing

| Feature              | Static Typing              | Dynamic Typing              |
|----------------------|----------------------------|-----------------------------|
| Type declaration     | Required                   | Not required                |
| Type change allowed? | ❌ No                      | ✅ Yes                      |
| Error detection      | At compile time (early)    | At runtime (late)           |
| Speed                | Faster                     | Slightly slower             |
| Flexibility          | Less flexible              | More flexible               |
| Examples             | C, C++, Java, TypeScript   | JavaScript, Python, Ruby    |

---

### Which is Better?

Both have their place — depends on the use case.

**Static Typing is better when:**
- Building large applications with big teams
- You need to catch errors early before running
- Code needs to be more predictable and maintainable

**Dynamic Typing is better when:**
- Writing quick scripts or small projects
- You need flexibility and speed of development
- Beginners learning programming

> **Interview answer:**
> Static typing catches errors early and is safer for large projects.
> Dynamic typing is more flexible and faster to write.
> JavaScript uses dynamic typing — that's why it's beginner friendly
> but can cause unexpected bugs in large codebases.
> That's exactly why **TypeScript** was created —
> to add static typing on top of JavaScript.

---

## `typeof` Operator

Used to **check the data type** of a value.

```js
typeof 42             // "number"
typeof "Harsh"        // "string"
typeof true           // "boolean"
typeof undefined      // "undefined"
typeof Symbol("id")   // "symbol"
typeof 9007199254740991n // "bigint"
typeof {}             // "object"
typeof []             // "object"
typeof function(){}   // "function"
```

---

## `typeof` Quirks ⚠️ (Frequently Asked in Interviews)

### 1. `typeof null === "object"`
```js
typeof null // "object" — but null is NOT an object!
```
This is a **known bug in JavaScript** that exists since the very beginning.
It was never fixed to avoid breaking old code.
Just remember — `null` is a primitive, not an object.

---

### 2. `typeof NaN === "number"`
```js
typeof NaN // "number" — but NaN means "Not a Number"!
```
`NaN` stands for **Not a Number** but its type is `number`.
This is because `NaN` is the result of a **failed number operation**.

```js
let result = "Harsh" - 5; // NaN — can't subtract string from number
typeof result;             // "number"
```

---

### 3. `typeof []  === "object"`
```js
typeof [] // "object" — not "array"!
```
Arrays are technically objects in JavaScript.
To properly check for an array use:
```js
Array.isArray([]); // true ✅
```

---

### 4. `typeof function(){} === "function"`
```js
typeof function(){} // "function"
```
Functions are objects internally — but `typeof` gives `"function"` for them.

---

### typeof Quirks Summary

| Expression              | Expected      | Actual       | Reason                        |
|-------------------------|---------------|--------------|-------------------------------|
| `typeof null`           | `"null"`      | `"object"`   | Old JS bug, never fixed       |
| `typeof NaN`            | `"NaN"`       | `"number"`   | NaN is result of failed math  |
| `typeof []`             | `"array"`     | `"object"`   | Arrays are objects in JS      |
| `typeof function(){}`   | `"object"`    | `"function"` | Special case for functions    |

---

## Type Coercion

Type coercion means JavaScript **automatically converts one type to another**
when you mix different types in an operation.

---

### `==` vs `===`

| Operator | Name                  | What it does                              |
|----------|-----------------------|-------------------------------------------|
| `==`     | Loose equality        | Compares values — **converts types first**|
| `===`    | Strict equality       | Compares value AND type — **no conversion**|

```js
5 == "5"   // true  — JS converts "5" to number then compares
5 === "5"  // false — different types, no conversion
```

> Always use `===` in real code to avoid unexpected results.

---

### Why `"5" + 1 = "51"` but `"5" - 1 = 4`?

```js
"5" + 1  // "51"  — string
"5" - 1  // 4     — number
```

**Reason:**

The `+` operator has **two jobs** in JavaScript:
- Add numbers
- Concatenate (join) strings

When JS sees `"5" + 1` — it has a string involved,
so it chooses **concatenation** and converts `1` to `"1"` → `"51"`.

The `-` operator has **only one job** — subtraction.
There is no "string subtraction" — so JS converts `"5"` to `5` and does `5 - 1 = 4`.

```js
"5" + 1   // "51"  — + chose concatenation (string wins)
"5" - 1   // 4     — - forced number conversion (only one job)
"5" * 2   // 10    — same, only one job
"5" / 2   // 2.5   — same, only one job
```

> **Interview answer:**
> `+` is overloaded — it does both addition and concatenation.
> When a string is involved, `+` prefers concatenation.
> Other operators like `-`, `*`, `/` only do math,
> so JS converts the string to a number automatically.

---

## Truthy and Falsy Values

In JavaScript every value is either **truthy** or **falsy**
when used in a condition.

---

### Falsy Values (Only these 7)

```js
false
0
""        // empty string
null
undefined
NaN
document.all  // special browser case
```

> Everything else is **truthy**.

---

### Truthy Values (Examples)

```js
1
"Harsh"      // non-empty string
[]           // empty array — truthy!
{}           // empty object — truthy!
-1
"0"          // string "0" — truthy! (not the number 0)
```

---

### Trick to Check Truthy or Falsy — Use `!!`

Double `!` converts any value to its **boolean equivalent**.

```js
!!""          // false — empty string is falsy
!!NaN         // false — NaN is falsy
!!0           // false — 0 is falsy
!!null        // false — null is falsy
!!undefined   // false — undefined is falsy

!!"Harsh"     // true  — non-empty string is truthy
!!1           // true  — non-zero number is truthy
!![]          // true  — empty array is truthy
!!{}          // true  — empty object is truthy
```

**How it works:**
- First `!` converts value to opposite boolean
- Second `!` flips it back to the correct boolean

```js
!""   // true  (flipped)
!!""  // false (flipped back — actual boolean value)
```

---

## Simple Rules to Remember

> **Dynamic typing** → JS decides the type, you can change it anytime
> **`typeof null`** → `"object"` — famous JS bug, just remember it
> **`typeof NaN`** → `"number"` — NaN is still of type number
> **`+` with string** → concatenation | **`-`** → always subtraction
> **`==`** → checks value only | **`===`** → checks value + type
> **Falsy values** → `false, 0, "", null, undefined, NaN` — only these 7
> **`!!value`** → quick trick to check if truthy or falsy

---








