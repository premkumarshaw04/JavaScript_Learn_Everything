# Section 8: Practice Questions & Common Confusions — Objects

---

## Practice Questions

---

### Question 1 — Create a Student Object

```js
const student = {
    name: "Harsh",
    age: 21,
    isEnrolled: true
};

console.log(student);
// { name: "Harsh", age: 21, isEnrolled: true }
```

**Explanation:**

An object groups related data together using key-value pairs.

`isEnrolled` is a boolean — objects can hold any data type as a value.

---

### Question 2 — Can an Object Key Be a Number or Boolean?

```js
let obj = {
    true: "Yes",
    42: "answer"
};

console.log(obj[42]);   // "answer"
console.log(obj[true]); // "Yes"
```

**Output:** `"answer"`

**Explanation:**

Yes — object keys can be numbers or booleans, but JavaScript **converts them to strings** internally.

So `42` becomes `"42"` and `true` becomes `"true"` as keys.

That is why `obj[42]` works — JavaScript converts `42` to `"42"` and finds the key.

You cannot use dot notation here — `obj.42` would be a syntax error.

Square bracket notation is the only option for numeric or boolean keys.

---

### Question 3 — Access "first-name" from Object

```js
const user = {
    "first-name": "Harsh",
};

user["first-name"]; // ✅ "Harsh" — allowed
user.first-name;    // ❌ SyntaxError — not allowed
```

**Explanation:**

`user["first-name"]` → works because square bracket notation accepts any string as a key —
including strings with hyphens or spaces.

`user.first-name` → JavaScript reads this as `user.first` minus `name` —
it treats `-` as the subtraction operator — causing a `SyntaxError`.

Dot notation only works with valid JavaScript identifier names — no hyphens, spaces or special characters.

---

### Question 4 — Access Using a Dynamic Key

```js
let key = "age";

const user = {
    age: 26,
};

console.log(user[key]); // 26
```

**Explanation:**

`user[key]` evaluates `key` first — it holds the string `"age"`.

So it becomes `user["age"]` → `26`.

`user.key` would look for a property literally named `"key"` — which does not exist — returning `undefined`.

This is exactly why square bracket notation exists — to handle dynamic key access.

---

### Question 5 — Print the Latitude

```js
const locations = {
    city: "Bhopal",
    coordinates: {
        lat: 23.2,
        lng: 77.4,
    },
};

console.log(locations.coordinates.lat); // 23.2
```

**Explanation:**

`locations.coordinates` → gets the nested `coordinates` object.

`.lat` → gets the `lat` value from that object → `23.2`.

---

### Question 6 — What if `coordinates` is Missing?

```js
const locations = {
    city: "Bhopal",
};

// Without optional chaining — crashes
console.log(locations.coordinates.lat);
// ❌ TypeError: Cannot read properties of undefined

// With optional chaining — safe
console.log(locations.coordinates?.lat);
// undefined ✅ — no error
```

**Explanation:**

When `coordinates` does not exist — `locations.coordinates` is `undefined`.

Trying to access `.lat` on `undefined` causes a `TypeError` and crashes the code.

Using `?.` — JavaScript checks if `coordinates` exists before going deeper.

If it is `undefined` — it stops and returns `undefined` instead of crashing.

---

### Question 7 — Destructure `city` and `lat`

```js
const locations = {
    city: "Bhopal",
    coordinates: {
        lat: 23.2,
        lng: 77.4,
    },
};

let { city } = locations;
let { lat } = locations.coordinates;

console.log(city); // "Bhopal"
console.log(lat);  // 23.2
```

**Explanation:**

`{ city }` destructures `city` from the top level of `locations`.

`{ lat }` destructures `lat` from the nested `coordinates` object.

Now both can be used directly without writing the full chain every time.

---

### Question 8 — Destructure a Key with a Hyphen

```js
const user = {
    "first-name": "Harsh",
};

let { "first-name": firstName } = user;

console.log(firstName); // "Harsh"
```

**Explanation:**

`"first-name": firstName` means — extract the key `"first-name"` from the object
and store its value in a variable called `firstName`.

You cannot use `first-name` directly as a variable name — hyphens are not valid in variable names.

So you **rename** while destructuring using `:` — the left side is the key, the right side is the new variable name.

---

### Question 9 — Use `for...in` to Log All Keys

```js
const course = {
    title: "JavaScript",
    duration: "4 weeks",
};

for(let key in course) {
    console.log(key);
}
```

**Output:**
```
title
duration
```

**Explanation:**

`for...in` loops through every key of the object one by one.

Each key comes into the `key` variable per iteration.

---

### Question 10 — Use `Object.entries()` to Print Key-Value Pairs

```js
const course = {
    title: "JavaScript",
    duration: "4 weeks",
};

Object.entries(course).forEach(function(val) {
    console.log(val[0] + ": " + val[1]);
});
```

**Output:**
```
title: JavaScript
duration: 4 weeks
```

**Explanation:**

`Object.entries(course)` returns `[["title", "JavaScript"], ["duration", "4 weeks"]]`.

Each `val` in `forEach` is one of those inner arrays — `["title", "JavaScript"]`.

`val[0]` → the key | `val[1]` → the value.

A cleaner version using destructuring:

```js
Object.entries(course).forEach(function([key, value]) {
    console.log(`${key}: ${value}`);
});
```

---

### Question 11 — Copy Using Spread Operator

```js
const original = { a: 1, b: 2 };

const copy = { ...original };

copy.a = 99;

console.log(original.a); // 1 — unchanged ✅
console.log(copy.a);     // 99
```

**Explanation:**

`{ ...original }` creates a new object with all properties of `original` copied into it.

Both are now independent — changes in `copy` do not affect `original`.

---

### Question 12 — What is the Problem Here?

```js
const obj1 = { info: { score: 80 } };
const clone = { ...obj1 };

clone.info.score = 100;

console.log(obj1.info.score); // 100 ❗
```

**Explanation:**

The problem is that cloning is not done properly — the **reference of the nested object is passed**.

Spread operator creates a **shallow copy** — top level properties are copied independently,
but nested objects are still shared by reference.

`clone.info` and `obj1.info` both point to the **same object in memory**.

So changing `clone.info.score` also changes `obj1.info.score`.

---

### Question 13 — Deep Clone the Object Safely

```js
const obj1 = { info: { score: 80 } };

let newObj = JSON.parse(JSON.stringify(obj1));

newObj.info.score = 100; // does not affect obj1

console.log(obj1.info.score); // 80 ✅ — original untouched
console.log(newObj.info.score); // 100
```

**Explanation:**

`JSON.stringify(obj1)` converts the entire object — including nested objects — into a plain string.

At this point there are no references — just text.

`JSON.parse(...)` converts that string back into a brand new object.

Since it is built fresh from a string — it shares no memory with `obj1`.

Any change in `newObj` stays in `newObj` — original is completely safe.

---

### Question 14 — Rewrite Safely Using Optional Chaining

```js
const person = {};

// Without optional chaining — crashes
console.log(person.profile.name);
// ❌ TypeError: Cannot read properties of undefined

// With optional chaining — safe
console.log(person?.profile?.name);
// undefined ✅ — no error
```

**Explanation:**

`person.profile` → `undefined` — key does not exist.

`person.profile.name` → accessing `.name` on `undefined` → crash.

`person?.profile?.name` → `?.` checks at each level — if anything is `undefined` it stops and returns `undefined`.

---

### Question 15 — Use a Variable to Dynamically Assign a Property

```js
const key = "role";

let obj = {
    name: "Harsh",
    [key]: "admin", // role: "admin"
};

console.log(obj.role); // "admin"
console.log(obj);      // { name: "Harsh", role: "admin" }
```

**Explanation:**

`[key]` is a computed property — JavaScript evaluates what is inside the brackets first.

`key` holds `"role"` — so `[key]` becomes `"role"` as the key name.

The object ends up with a property called `role` with value `"admin"`.

---

## Common Confusions

---

### Reference Copy (Shallow Copy) vs Deep Clone

```js
const a = { score: 90 };
const b = a;

b.score = 50;

console.log(a.score); // 50 ❗ — original changed
```

**Explanation:**

`const b = a` does not create a new object — it copies the **reference**.

Both `a` and `b` now point to the **same object in memory**.

When `b.score = 50` is executed — it modifies the object that both `a` and `b` are pointing to.

So `a.score` also becomes `50`.

To avoid this — always use spread or deep clone:

```js
// Shallow copy — works for flat objects
const b = { ...a };

// Deep clone — works for nested objects
const b = JSON.parse(JSON.stringify(a));

b.score = 50;
console.log(a.score); // 90 ✅ — original untouched
```

---

## Quick Reference

> Object keys are always strings internally — numbers and booleans get converted

> Keys with hyphens or spaces → must use square bracket notation to access

> Dynamic key access → always use `obj[variable]` not `obj.variable`

> Optional chaining `?.` → prevents crash when a nested property does not exist

> Computed property `[key]` → evaluates the variable and uses its value as the key

> `b = a` → reference copy — both point to same object — changes affect both

> `{ ...a }` → shallow copy — nested objects still shared

> `JSON.parse(JSON.stringify(a))` → deep clone — completely independent at all levels

---

# Shallow Copy vs Deep Copy in JavaScript

---

## What is Copying an Object?

When you copy an object in JavaScript — there are two types of copies:

1. **Shallow Copy** — copies only the top level
2. **Deep Copy** — copies everything at every level

Understanding the difference is critical — because the wrong type of copy
can cause silent bugs that are very hard to track down.

---

## Shallow Copy

### What

A shallow copy creates a new object and copies all **top level properties** independently.

But if any property holds a **nested object** — only the **reference** of that nested object
is copied — not the actual nested object itself.

So the top level is independent — but nested levels are still shared.

### How

```js
const original = {
    name: "Harsh",
    score: 90,
    address: {
        city: "Bhopal"
    }
};

const copy = { ...original }; // shallow copy using spread
```

### Behaviour

```js
// Changing top level property — safe ✅
copy.name = "Rahul";
console.log(original.name); // "Harsh" — not affected

// Changing nested property — problem ❌
copy.address.city = "Indore";
console.log(original.address.city); // "Indore" — original also changed!
```

**Explanation:**

`name` and `score` are primitive values — they are copied by value.

So changing `copy.name` does not affect `original.name`.

But `address` is a nested object — it is copied by **reference**.

`copy.address` and `original.address` both point to the **same object in memory**.

So changing `copy.address.city` changes the same object that `original.address.city` points to.

---

### Ways to Create a Shallow Copy

```js
// 1. Spread operator
const copy1 = { ...original };

// 2. Object.assign()
const copy2 = Object.assign({}, original);
```

Both give the same result — a shallow copy.

---

## Deep Copy

### What

A deep copy creates a **completely new and independent object** at every level.

No reference is shared anywhere — not at top level, not at nested levels.

Changes in the copy **never affect** the original — no matter how deeply nested the data is.

### How

```js
const original = {
    name: "Harsh",
    score: 90,
    address: {
        city: "Bhopal"
    }
};

const copy = JSON.parse(JSON.stringify(original)); // deep copy
```

### Behaviour

```js
// Changing top level — safe ✅
copy.name = "Rahul";
console.log(original.name); // "Harsh" — not affected

// Changing nested — also safe ✅
copy.address.city = "Indore";
console.log(original.address.city); // "Bhopal" — not affected
```

**Explanation:**

`JSON.stringify(original)` converts the entire object — including all nested objects —
into a plain JSON string.

At this point — there are no references, just text.

`JSON.parse(...)` builds a completely new object from that string.

Since it is built fresh — it shares no memory reference with the original.

---

### Ways to Create a Deep Copy

**Method 1 — `JSON.parse(JSON.stringify())`**

```js
const copy = JSON.parse(JSON.stringify(original));
```

Simple and works well for plain data objects.

Does not work when object contains functions, `undefined`, or `Date` objects
— those get lost during `JSON.stringify`.

**Method 2 — `structuredClone()` (Modern Way)**

```js
const copy = structuredClone(original);
```

A newer built-in JavaScript method that handles deep cloning properly.

Works with more data types than `JSON.parse(JSON.stringify())`.

Does not support functions — but handles `Date`, `Map`, `Set` correctly.

---

## Shallow vs Deep — Side by Side

```js
const original = {
    name: "Harsh",
    address: { city: "Bhopal" }
};

// Shallow copy
const shallow = { ...original };
shallow.address.city = "Indore";
console.log(original.address.city); // "Indore" ❗ — affected

// Deep copy
const deep = JSON.parse(JSON.stringify(original));
deep.address.city = "Indore";
console.log(original.address.city); // "Bhopal" ✅ — not affected
```

---

## Difference Between Shallow and Deep Copy

| Feature | Shallow Copy | Deep Copy |
|---------|-------------|-----------|
| Top level properties | ✅ Independent | ✅ Independent |
| Nested objects | ❌ Reference shared | ✅ Fully independent |
| Changes affect original? | ✅ For nested objects | ❌ Never |
| How to create | `{...obj}` or `Object.assign()` | `JSON.parse(JSON.stringify())` or `structuredClone()` |
| Performance | Fast | Slightly slower |
| Works with functions? | ✅ Yes | ❌ No — functions are dropped |
| Use when | Flat objects with no nesting | Objects with nested data |

---

## When to Use Which?

| Situation | Use |
|-----------|-----|
| Object has no nested objects | Shallow copy — faster and simpler |
| Object has nested objects and you don't want changes to affect original | Deep copy |
| Working with API response data | Deep copy — safe to modify |
| State management in React | Deep copy — never mutate original state |
| Simple cloning for flat config objects | Shallow copy |

---

## Quick Reference

> **Shallow copy** → top level independent — nested objects still shared by reference

> **Deep copy** → everything independent at every level — no reference shared

> `{ ...obj }` and `Object.assign()` → shallow copy

> `JSON.parse(JSON.stringify(obj))` → deep copy — drops functions and `undefined`

> `structuredClone(obj)` → modern deep copy — handles more data types

> If your object is flat → shallow is fine

> If your object has nested objects → always deep copy to be safe