# Section 8: Objects in JavaScript

---

## What is an Object?

An object is a way to store **related data and behavior together** in one place
using a **key-value structure**.

In real life — everything around you is an object.
A person has a name, age, and address.
A car has a brand, color, and speed.

JavaScript objects work the same way — they group related properties together.

```js
let person = {
    name: "Harsh",
    age: 21,
    city: "Delhi"
};
```

---

## Why We Create Objects

When you have multiple related pieces of data about one thing —
storing them in separate variables becomes messy and hard to manage.

```js
// Without object — messy
let name = "Harsh";
let age = 21;
let city = "Delhi";

// With object — clean and organized
let person = {
    name: "Harsh",
    age: 21,
    city: "Delhi"
};
```

Objects keep related data **organized, readable and easy to pass around** in your code.

---

## How to Create an Object

### Object Literal (Most Common ✅)

```js
let person = {
    name: "Harsh",
    age: 21,
    city: "Delhi"
};
```

### Empty Object

```js
let person = {};         // empty object literal
let person = new Object(); // using constructor
```

### Using `new Object()`

```js
let person = new Object();
person.name = "Harsh";
person.age = 21;
```

**Explanation:**

`new Object()` creates an empty object — properties are added one by one after.

`{}` is cleaner and preferred — both give the same result.

---

## Key-Value Structure

Every piece of data in an object is stored as a **key-value pair**.

```js
let car = {
    brand: "Toyota",   // key: "brand", value: "Toyota"
    color: "Red",      // key: "color", value: "Red"
    speed: 180         // key: "speed", value: 180
};
```

- **Key** → the name/label of the property
- **Value** → the actual data stored at that key

Values can be anything — strings, numbers, booleans, arrays, functions, even other objects.

```js
let user = {
    name: "Harsh",          // string
    age: 21,                // number
    isLoggedIn: true,       // boolean
    scores: [85, 90, 78],   // array
    address: {              // nested object
        city: "Delhi",
        pin: 110001
    },
    greet: function() {     // function
        console.log("Hello!");
    }
};
```

---

## When to Create Objects — Real Life Use Cases

| Situation | Object |
|-----------|--------|
| Store user profile data | `{ name, age, email, role }` |
| Product in a shopping cart | `{ id, name, price, quantity }` |
| API response data | `{ status, data, message }` |
| Form data before submitting | `{ username, password, email }` |
| Configuration settings | `{ theme, language, fontSize }` |

---

## Advantages of Objects

**1. Keeps related data together**

Instead of managing 10 separate variables — one object holds everything cleanly.

**2. Easy to pass around**

You can pass a whole object to a function instead of passing many arguments separately.

```js
// Without object — too many arguments
function createUser(name, age, city, email) {}

// With object — clean
function createUser(user) {
    console.log(user.name, user.age);
}

createUser({ name: "Harsh", age: 21, city: "Delhi", email: "h@test.com" });
```

**3. Real world representation**

Objects mirror real world entities — makes code more intuitive and readable.

**4. Dynamic — add or remove properties anytime**

```js
let person = { name: "Harsh" };
person.age = 21;        // add new property anytime
delete person.name;     // remove property anytime
```

---

## All Types of Objects in JavaScript

| Type | Example | Description |
|------|---------|-------------|
| Object Literal | `{ name: "Harsh" }` | Most common way |
| Array | `[1, 2, 3]` | Special object with numeric keys |
| Function | `function() {}` | Callable object |
| Date | `new Date()` | Stores date and time |
| Math | `Math.max()` | Built-in math object |
| Nested Object | `{ address: { city: "Delhi" } }` | Object inside object |
| null | `null` | Empty object reference (typeof shows "object") |

**Explanation:**

In JavaScript — arrays, functions, and dates are all technically objects under the hood.

This is why `typeof []` gives `"object"` and `typeof function(){}` gives `"function"` —
because functions are a special type of object.

---

## Difference Between Arrays and Objects

| Feature | Array | Object |
|---------|-------|--------|
| Keys | Numeric index — `0, 1, 2` | Named keys — `name, age, city` |
| Order | Ordered — order matters | Unordered — order does not matter |
| Access | `arr[0]` | `obj.name` or `obj["name"]` |
| Use when | List of similar items | Collection of related properties |
| Example | `["Apple", "Mango"]` | `{ name: "Harsh", age: 21 }` |

**Explanation:**

Use an **array** when you have a **list of similar things** — like a list of names or prices.

Use an **object** when you have **different properties about one thing** — like a user profile.

---

## Quick Reference

> Object → key-value pairs — stores related data together

> `{}` → most common and preferred way to create objects

> Keys are always strings — values can be anything

> Use objects when you have multiple related properties about one entity

> Arrays → ordered list of similar items | Objects → named properties of one entity

> In JavaScript — arrays, functions, dates are all objects under the hood

---

## Two Ways to Access Object Properties

JavaScript gives you two ways to access values from an object:

1. **Dot Notation** → `obj.key`
2. **Square Bracket Notation** → `obj["key"]`

---

## Dot Notation

The most common and cleanest way to access object properties.

```js
let obj = {
    name: "Harsh",
    age: 26,
    khana: "daal chawal"
};

console.log(obj.name);  // "Harsh"
console.log(obj.age);   // 26
console.log(obj.khana); // "daal chawal"
```

**Explanation:**

Write the object name, then a `.`, then the key name directly.

Simple, readable and works for most cases.

---

## Square Bracket Notation

Access properties by passing the key as a **string inside square brackets**.

```js
let obj = {
    name: "Harsh",
    age: 26,
    khana: "daal chawal"
};

console.log(obj["name"]);  // "Harsh"
console.log(obj["age"]);   // 26
console.log(obj["khana"]); // "daal chawal"
```

---

## Why Are There Two Ways? — The Real Reason

This is the most important part to understand.

Dot notation is simple — but it has one limitation.

**It cannot use a variable as a key.**

```js
let obj = {
    name: "Harsh",
    age: 26,
    khana: "daal chawal"
};

let aa = "name";

obj.aa;  // undefined ❌ — aa will NOT be converted to "name"
         // JS looks for a key literally called "aa" — which does not exist
```

**Explanation:**

When you write `obj.aa` — JavaScript treats `aa` as a hardcoded key name.

It does not look at what `aa` holds — it looks for a property called `"aa"` in the object.

Since there is no key `"aa"` in the object — it returns `undefined`.

---

### Square Bracket Notation Fixes This

```js
let aa = "name";

obj[aa]; // "Harsh" ✅ — aa is evaluated first, becomes "name", then accesses obj["name"]
```

**Explanation:**

When you write `obj[aa]` — JavaScript first **evaluates** what is inside the brackets.

`aa` holds the string `"name"` — so it becomes `obj["name"]` → returns `"Harsh"`.

This is why square bracket notation exists — it allows **dynamic key access** using variables.

---

### Real World Use Case — Dynamic Key Access

```js
let user = {
    name: "Harsh",
    age: 26,
    city: "Delhi"
};

let key = "city"; // this could come from user input or an API

console.log(user[key]); // "Delhi" ✅ — works dynamically
console.log(user.key);  // undefined ❌ — looks for key literally named "key"
```

**Explanation:**

In real projects — the key you want to access is often stored in a variable

and comes dynamically from user input, a loop, or an API response.

In those cases square bracket notation is the only option.

---

## Difference Between Dot and Square Bracket Notation

| Feature | Dot Notation | Square Bracket Notation |
|---------|-------------|------------------------|
| Syntax | `obj.key` | `obj["key"]` or `obj[variable]` |
| Readability | Cleaner and simpler | Slightly more verbose |
| Dynamic key access | ❌ Not possible | ✅ Possible using variables |
| Key with spaces | ❌ Not possible | ✅ Possible — `obj["my key"]` |
| Key with special characters | ❌ Not possible | ✅ Possible |
| Most common use | Everyday access | When key is dynamic or has special characters |

---

### Keys with Spaces — Only Square Bracket Works

```js
let obj = {
    "full name": "Harsh Sharma",
    age: 26
};

console.log(obj["full name"]); // "Harsh Sharma" ✅
console.log(obj.full name);    // ❌ SyntaxError — spaces not allowed with dot
```

---

## Quick Reference

> Dot notation → `obj.key` → simple and clean → use for everyday access

> Square bracket → `obj["key"]` or `obj[variable]` → use when key is dynamic

> `obj.aa` → looks for a key literally named `"aa"` — does not evaluate the variable

> `obj[aa]` → evaluates `aa` first, then uses its value as the key

> Square bracket is the only option when key has spaces or special characters

---

# Object Nesting, Deep Access & Destructuring


## Nested Objects

An object can contain another object as its value — this is called a **nested object**.

In real world — data is rarely flat. A user has an address, and that address
has a location, and that location has coordinates. This hierarchy is natural
and objects handle it perfectly.

```js
const user = {
    name: "Harsh",
    address: {
        city: "Bhopal",
        pin: 462001,
        location: {
            lat: 3.2,   // latitude
            lng: 77.4   // longitude
        },
    },
};
```

**Explanation:**

`user` is the outer object.

`address` is a nested object inside `user`.

`location` is a nested object inside `address`.

This creates a **hierarchy of data** — just like real world relationships.

---

## Deep Access — Accessing Nested Values

To access deeply nested values — chain the dot notation one level at a time.

```js
user.address.location.lng; // 77.4
```

**Explanation — Step by Step:**

`user` → the main object

`user.address` → goes one level deep → gets the `address` object

`user.address.location` → goes another level deep → gets the `location` object

`user.address.location.lng` → gets the final value → `77.4`

Each `.` goes one level deeper into the nested structure.

---

### More Deep Access Examples

```js
console.log(user.name);                    // "Harsh"
console.log(user.address.city);            // "Bhopal"
console.log(user.address.pin);             // 462001
console.log(user.address.location.lat);    // 3.2
console.log(user.address.location.lng);    // 77.4
```

---

### What Happens if a Level Does Not Exist?

```js
console.log(user.phone);                   // undefined — key does not exist
console.log(user.address.country);         // undefined — key does not exist
console.log(user.phone.number);            // ❌ TypeError — cannot read property of undefined
```

**Explanation:**

Accessing a key that does not exist returns `undefined` — no error.

But trying to go one level deeper on `undefined` — like `user.phone.number` —
throws a `TypeError` because you cannot access a property on `undefined`.

To safely access deep properties — use **optional chaining** `?.`:

```js
console.log(user.phone?.number); // undefined — no error ✅
```

---

## Object Destructuring

### What

Object destructuring lets you **extract specific properties from an object
into separate variables** in one clean line.

### Why

Without destructuring — to access nested values you have to write
the full chain every single time.

```js
// Without destructuring — repetitive
console.log(user.address.location.lat);
console.log(user.address.location.lng);
// writing user.address.location every time is tedious
```

With destructuring — extract once, use directly.

```js
const user = {
    name: "Harsh",
    address: {
        city: "Bhopal",
        pin: 462001,
        location: {
            lat: 3.2,
            lng: 77.4
        },
    },
};

let { lat, lng } = user.address.location;

console.log(lat); // 3.2
console.log(lng); // 77.4
```

**Explanation:**

`{ lat, lng }` tells JavaScript — extract the keys `lat` and `lng`
from `user.address.location` and store them in variables with the same names.

Now instead of writing `user.address.location.lng` every time —
you can just write `lng` directly.

---

### Destructuring at Different Levels

```js
// Destructuring from the top level
let { name } = user;
console.log(name); // "Harsh"

// Destructuring one level deep
let { city, pin } = user.address;
console.log(city); // "Bhopal"
console.log(pin);  // 462001

// Destructuring two levels deep
let { lat, lng } = user.address.location;
console.log(lat); // 3.2
console.log(lng); // 77.4
```

---

### Renaming While Destructuring

You can give the extracted variable a different name using `:`.

```js
let { lat: latitude, lng: longitude } = user.address.location;

console.log(latitude);  // 3.2
console.log(longitude); // 77.4
```

**Explanation:**

`lat: latitude` means — extract the key `lat` but store it in a variable called `latitude`.

Useful when the key name clashes with an existing variable or is not descriptive enough.

---

### Default Values in Destructuring

If the key does not exist — you can provide a default value.

```js
let { lat, lng, alt = 0 } = user.address.location;

console.log(alt); // 0 — key "alt" doesn't exist, default value used
```

---

## Quick Reference

> Nested objects → object inside an object → mirrors real world data hierarchy

> Deep access → chain dot notation → `user.address.location.lng`

> Each `.` goes one level deeper into the object

> Accessing missing key → `undefined` | Accessing property on `undefined` → `TypeError`

> Use `?.` optional chaining to safely access deep values

> Destructuring → extract properties into variables in one line

> `let { lat, lng } = user.address.location` → now use `lat` and `lng` directly

> Rename while destructuring → `let { lat: latitude } = obj`

---

# Looping Through Objects


## Why Loop Through Objects?

Unlike arrays — objects do not have a direct index to loop through.
JavaScript provides specific ways to iterate over object keys and values.

Three main ways:
1. `for...in` loop
2. `Object.keys()`
3. `Object.entries()`

---

## 1. `for...in` Loop

### What

`for...in` loops through every **key** of an object one by one.

Every time the loop runs — the current key comes into the loop variable.

### How

```js
let obj = {
    name: "Harsh",
    age: 26,
    email: "test@test.com"
};

for(let key in obj) {    // every time all the keys will come in "key" variable
    console.log(key);    // name, age, email
}
```

**Output:**
```
name
age
email
```

---

### Accessing Values Inside `for...in`

This is where a very common mistake happens.

```js
for(let key in obj) {
    console.log(obj.key);  // ❌ undefined — wrong
}
```

**Why is `obj.key` wrong?**

`obj.key` means JavaScript is looking for a property literally named `"key"` in the object.

It does not evaluate what `key` holds — it treats `key` as a hardcoded property name.

Since there is no property called `"key"` in the object — it returns `undefined`.

---

### The Correct Way — Square Bracket Notation

```js
for(let key in obj) {
    console.log(obj[key]); // ✅ "Harsh", 26, "test@test.com"
}
```

**Explanation:**

`obj[key]` evaluates the variable `key` first — gets its value (`"name"`, `"age"`, `"email"`)
and then uses that as the property name to access the object.

This is exactly why square bracket notation exists — to handle dynamic keys.

---

### Accessing Both Key and Value Together

```js
for(let key in obj) {
    console.log(`${key} : ${obj[key]}`);
}
```

**Output:**
```
name : Harsh
age : 26
email : test@test.com
```

---

## 2. `Object.keys()`

### What

`Object.keys()` returns an **array of all the keys** of an object.

### Why

Sometimes you just need the list of keys — to loop through them,
check if a key exists, or count how many properties an object has.

### How

```js
let obj = {
    name: "Harsh",
    age: 26,
    email: "test@test.com"
};

let keys = Object.keys(obj);

console.log(keys); // ["name", "age", "email"]
```

**Explanation:**

`Object.keys()` takes the object as an argument and returns
all its keys collected into a new array.

Since it returns an array — you can use all array methods on it.

---

### Practical Use Cases

```js
// Count number of properties
console.log(Object.keys(obj).length); // 3

// Loop through keys using forEach
Object.keys(obj).forEach(function(key) {
    console.log(key, obj[key]);
});

// Check if a key exists
console.log(Object.keys(obj).includes("name")); // true
```

---

## 3. `Object.entries()`

### What

`Object.entries()` returns an **array of key-value pairs** —
each pair is itself a small array with two elements: `[key, value]`.

### Why

When you need **both the key and the value** at the same time —
`Object.entries()` is the cleanest way to get them together.

### How

```js
let obj = {
    name: "Harsh",
    age: 26,
    email: "test@test.com"
};

let entries = Object.entries(obj);

console.log(entries);
// [
//   ["name", "Harsh"],
//   ["age", 26],
//   ["email", "test@test.com"]
// ]
```

**Explanation:**

Each element of the returned array is a pair — `[key, value]`.

`entries[0]` → `["name", "Harsh"]`

`entries[0][0]` → `"name"` (key)

`entries[0][1]` → `"Harsh"` (value)

---

### Looping with `Object.entries()` + Destructuring

The cleanest way to loop through both keys and values together.

```js
Object.entries(obj).forEach(function([key, value]) {
    console.log(`${key} : ${value}`);
});
```

**Output:**
```
name : Harsh
age : 26
email : test@test.com
```

**Explanation:**

Since each entry is `[key, value]` — we can destructure it directly
in the function parameter to get both at once.

---

## Comparison — All Three Ways

| Feature | `for...in` | `Object.keys()` | `Object.entries()` |
|---------|-----------|----------------|-------------------|
| Returns | Keys one by one | Array of keys | Array of [key, value] pairs |
| Access values | `obj[key]` needed | `obj[key]` needed | Value already included |
| Can use array methods? | ❌ No | ✅ Yes | ✅ Yes |
| Best for | Simple key iteration | Getting/counting keys | When both key and value needed |

---

## Quick Reference

> `for...in` → loops through every key of an object one by one

> Inside `for...in` → always use `obj[key]` not `obj.key` to access values

> `obj.key` → looks for property literally named `"key"` → wrong ❌

> `Object.keys()` → returns array of all keys → can use array methods on it

> `Object.entries()` → returns array of `[key, value]` pairs → cleanest when you need both

> Use destructuring with `Object.entries()` for the cleanest syntax

---

# Copying Objects


## The Problem with Direct Copy

Before understanding the solutions — understand why copying objects needs special handling.

```js
let obj = { name: "Harsh", age: 26 };

let obj2 = obj; // NOT a copy — just a reference
obj2.name = "Rahul";

console.log(obj.name); // "Rahul" — original also changed! ❗
```

**Explanation:**

`obj2 = obj` does not create a new object — both variables point to the **same object in memory**.

Any change made through `obj2` directly affects `obj` as well.

To actually copy an object — you need one of the following methods.

---

## 1. Spread Operator — Shallow Copy

### What

The spread operator `...` spreads all key-value pairs of an object
into a new object — creating an independent copy.

### Why

It is the cleanest and most commonly used way to copy objects in modern JavaScript.

### How

```js
let obj = {
    name: "Harsh",
    age: 26,
    email: "test@test.com"
};

let obj2 = { ...obj };
```

**Explanation:**

`{ ...obj }` creates a new object `{}` and then spreads all properties of `obj` into it.

So `obj2` gets its own copies of `name`, `age`, and `email` — completely independent from `obj`.

```js
obj2.name = "Rahul";

console.log(obj.name);  // "Harsh" — original unchanged ✅
console.log(obj2.name); // "Rahul" — only obj2 changed
```

---

## 2. `Object.assign()` — Shallow Copy

### What

`Object.assign()` copies all properties from one or more source objects
into a target object.

### Why

It is another way to copy objects — works similarly to spread operator.
However it is not as widely used because spread operator achieves the same result
with cleaner syntax.

### How

```js
let obj = {
    name: "Harsh",
    age: 26,
    email: "test@test.com"
};

let obj2 = Object.assign({}, obj);
```

**Explanation:**

`Object.assign({}, obj)` takes two arguments:

- First argument `{}` → the **target** — an empty object where properties will be copied into
- Second argument `obj` → the **source** — the object whose properties will be copied

All properties from `obj` are copied into the empty `{}` — result is stored in `obj2`.

---

### Different Ways to Use `Object.assign()`

**Copy into a blank object:**

```js
let obj2 = Object.assign({}, obj);
// obj2 = { name: "Harsh", age: 26, email: "test@test.com" }
```

**Copy into an object that already has properties:**

```js
let obj2 = Object.assign({ profession: "Teacher" }, obj);
// obj2 = { profession: "Teacher", name: "Harsh", age: 26, email: "test@test.com" }
```

**Explanation:**

When you pass a pre-filled object as the target — the copied properties are **merged** into it.

So `obj2` ends up with both the existing `profession` key and all properties from `obj`.

If any key exists in both — the source (`obj`) value overwrites the target value.

---

### Spread vs `Object.assign()`

| Feature | Spread `{...obj}` | `Object.assign({}, obj)` |
|---------|------------------|--------------------------|
| Syntax | Cleaner | Verbose |
| Result | Same | Same |
| Widely used | ✅ Yes | ❌ Less common now |
| Merge objects | ✅ `{...obj1, ...obj2}` | ✅ `Object.assign({}, obj1, obj2)` |

---

## The Limitation — Both Are Shallow Copies

Both spread and `Object.assign()` only create a **shallow copy**.

This means — top level properties are copied independently,
but **nested objects are still passed by reference**.

```js
let obj = {
    name: "Harsh",
    age: 26,
    email: "test@test.com",
    address: {
        city: "Bhopal"
    }
};

let obj2 = { ...obj };
obj2.address.city = "Indore"; // ❗ Problem here

console.log(obj.address.city);  // "Indore" — original also changed!
console.log(obj2.address.city); // "Indore"
```

**Explanation — Why This Happens:**

When spread copies the object — `name`, `age`, and `email` are primitive values.

Primitives are copied by value — so they are truly independent.

But `address` is a nested object — and objects are always copied by **reference**.

So `obj2.address` and `obj.address` both point to the **same address object in memory**.

Changing `obj2.address.city` changes the same object that `obj.address.city` points to.

---

## 3. Deep Clone — `JSON.parse(JSON.stringify())`

### What

A deep clone creates a **completely independent copy** of an object —
including all nested objects at every level.

No reference is shared — changes in the copy never affect the original.

### Why

When your object has nested objects — spread and `Object.assign()` are not enough.

Deep clone is needed when you want a truly isolated copy of the entire object.

### How

```js
let obj2 = JSON.parse(JSON.stringify(obj));
```

---

### Step by Step — How This Works

**Step 1 — `JSON.stringify(obj)`**

Converts the entire object into a **JSON string**.

```js
JSON.stringify(obj);
// '{"name":"Harsh","age":26,"email":"test@test.com","address":{"city":"Bhopal"}}'
```

At this point — the object is just a plain string.

Strings in JavaScript are primitives — they have no reference.

So the nested `address` object is also converted to plain text — no reference remains.

**Step 2 — `JSON.parse(...)`**

Converts the JSON string back into a **brand new object**.

```js
JSON.parse('{"name":"Harsh","age":26,...}');
// { name: "Harsh", age: 26, email: "test@test.com", address: { city: "Bhopal" } }
```

This new object is completely fresh — built from the string.

It shares no reference with the original `obj`.

---

### Why This Works — And Why Spread Does Not

| | Spread `{...obj}` | Deep Clone `JSON.parse(JSON.stringify())` |
|--|------------------|------------------------------------------|
| Top level copy | ✅ Independent | ✅ Independent |
| Nested object copy | ❌ Reference shared | ✅ Completely independent |
| Changes affect original? | ✅ For nested objects | ❌ Never |

```js
let obj2 = JSON.parse(JSON.stringify(obj));
obj2.address.city = "Indore";

console.log(obj.address.city);  // "Bhopal" — original untouched ✅
console.log(obj2.address.city); // "Indore" — only obj2 changed ✅
```

---

### Limitations of `JSON.parse(JSON.stringify())`

| Limitation | Explanation |
|-----------|-------------|
| Functions are lost | Functions cannot be converted to JSON — they are dropped |
| `undefined` values are lost | `undefined` is not valid JSON — dropped during stringify |
| `Date` objects become strings | Dates are converted to strings — lose their Date type |

For simple objects with just data (strings, numbers, booleans, nested objects) —
this method works perfectly and is widely used.

For complex objects with functions — use libraries like **Lodash** (`_.cloneDeep()`).

---

### Use Cases of Deep Clone

| Use Case | Reason |
|----------|--------|
| Copying API response data before modifying | Avoid mutating original data |
| State management in React | Never mutate state directly |
| Undo / redo functionality | Save snapshots of data at each step |
| Working with nested configuration objects | Avoid unintended side effects |

---

## Quick Reference

> Direct copy `obj2 = obj` → reference copy → changes affect both ❌

> Spread `{...obj}` → shallow copy → top level independent, nested still shared

> `Object.assign({}, obj)` → same as spread → less commonly used today

> Both spread and `Object.assign` → fail for nested objects → reference is shared

> Deep clone → `JSON.parse(JSON.stringify(obj))` → completely independent at all levels

> `JSON.stringify` → object to string | `JSON.parse` → string back to object

> Deep clone drops functions and `undefined` — only use for plain data objects

---

# Optional Chaining & Computed Properties

## Optional Chaining (`?.`)

### What

Optional chaining is a safe way to **access deeply nested properties**
without worrying about whether an intermediate property exists or not.

Instead of throwing an error when a property is `null` or `undefined` —
it simply returns `undefined` and moves on.

### The Problem It Solves

When accessing deeply nested object properties — if any level in the chain
does not exist, JavaScript throws a `TypeError` and crashes the code.

```js
let user = {
    name: "Harsh",
    address: {
        city: "Bhopal"
    }
};

console.log(user.phone.number);
// ❌ TypeError: Cannot read properties of undefined (reading 'number')
```

**Explanation:**

`user.phone` → `undefined` — the key does not exist.

`user.phone.number` → trying to access `.number` on `undefined` → crash.

In real applications — data often comes from APIs where some fields may or may not exist.

Without protection — your entire app can crash because of one missing field.

---

### How — Using `?.`

```js
console.log(user.phone?.number);
// undefined — no error ✅
```

**Explanation:**

`?.` checks if the thing before it exists.

If it is `null` or `undefined` — it stops right there and returns `undefined`.

It does not try to go deeper — so no error is thrown.

---

### More Examples

```js
let user = {
    name: "Harsh",
    address: {
        city: "Bhopal",
        location: {
            lat: 3.2,
            lng: 77.4
        }
    }
};

// Safe access — all levels exist
console.log(user?.address?.city);             // "Bhopal" ✅

// Safe access — location exists
console.log(user?.address?.location?.lat);    // 3.2 ✅

// Safe access — phone does not exist
console.log(user?.phone?.number);             // undefined ✅ — no crash

// Safe access — calling a method that may not exist
console.log(user?.getDetails?.());            // undefined ✅ — no crash
```

---

### Scenarios Where Optional Chaining is Required

| Scenario | Example |
|----------|---------|
| API response with missing fields | `response?.data?.user?.name` |
| User profile with optional fields | `user?.address?.city` |
| Calling methods that may not exist | `obj?.method?.()` |
| Accessing array elements safely | `arr?.[0]?.name` |

---

### Advantages of Optional Chaining

| Advantage | Explanation |
|-----------|-------------|
| No more crashes | Safely handles `null` and `undefined` at any level |
| Cleaner code | Removes need for multiple `if` checks before accessing |
| Works with methods | `obj?.method?.()` safely calls a method if it exists |
| Works with arrays | `arr?.[0]` safely accesses array element |

---

### Without vs With Optional Chaining

```js
// Without optional chaining — messy
if(user && user.address && user.address.city) {
    console.log(user.address.city);
}

// With optional chaining — clean
console.log(user?.address?.city);
```

**Explanation:**

Before optional chaining — you had to check every level manually with `&&`.

Optional chaining does all that checking in one clean line.

---

## Computed Properties

### What

Computed properties allow you to use a **variable or expression as a key name**
inside an object — directly at the time of creating the object.

The key name is computed (evaluated) at runtime — not hardcoded.

### The Problem It Solves

Without computed properties — you could not use a variable as a key
when defining an object.

```js
let role = "admin";

// Old way — cannot use variable as key directly
let obj = {};
obj[role] = "Harsh"; // had to do it separately after creating the object
```

With computed properties — you can do it directly inside the object definition.

### How

```js
let role = "admin";

let obj = {
    name: "Harsh",
    age: 26,
    email: "test@test.com",
    address: {
        city: "Bhopal",
    },
    [role]: "Harsh", // computed property — "admin" key will be added
};
```

**Explanation:**

`[role]` tells JavaScript — evaluate what is inside the brackets first.

`role` holds `"admin"` — so `[role]` becomes `"admin"`.

The object now has a key called `"admin"` with value `"Harsh"`.

```js
console.log(obj.admin); // "Harsh" ✅
console.log(obj[role]); // "Harsh" ✅
```

---

### More Examples

```js
// Dynamic key from a function
let getKey = (type) => `user_${type}`;

let data = {
    [getKey("name")]: "Harsh",   // key: "user_name"
    [getKey("age")]: 26,          // key: "user_age"
};

console.log(data.user_name); // "Harsh"
console.log(data.user_age);  // 26
```

```js
// Creating multiple objects with dynamic keys in a loop
let fields = ["name", "age", "city"];
let values = ["Harsh", 26, "Bhopal"];

let user = {};
fields.forEach((field, index) => {
    user[field] = values[index];
});

console.log(user); // { name: "Harsh", age: 26, city: "Bhopal" }
```

---

### Scenarios Where Computed Properties are Required

| Scenario | Example |
|----------|---------|
| Dynamic key from a variable | `[role]: "Harsh"` |
| Building objects from API data | Key names come from server dynamically |
| Creating objects in a loop | Key is generated at each iteration |
| Form handling | Field name is a variable |

---

### Advantages of Computed Properties

| Advantage | Explanation |
|-----------|-------------|
| Dynamic key assignment | Use variables or expressions as keys at object creation |
| Cleaner code | No need to create object first and add keys separately |
| Works with any expression | Can use function calls, template literals, variables |
| Flexible object building | Perfect for when keys are not known until runtime |

---

## Quick Reference

> Optional chaining `?.` → safely access nested properties — returns `undefined` instead of crashing

> Use `?.` when data comes from APIs or has optional/missing fields

> `user?.address?.city` → checks each level — stops and returns `undefined` if anything is missing

> Computed properties `[variable]` → use a variable or expression as a key name in an object

> `[role]: "Harsh"` → evaluates `role` first, uses its value as the key

> Without computed properties → had to add dynamic keys separately after object creation
