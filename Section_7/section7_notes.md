# Section 7: Arrays in JavaScript

---

## What is an Array?

An array is a **collection of multiple values stored in a single variable**.

Instead of creating separate variables for each value:

```js
let fruit1 = "Apple";
let fruit2 = "Banana";
let fruit3 = "Mango";
```

You store them all in one place:

```js
let fruits = ["Apple", "Banana", "Mango"];
```

---

## How JavaScript Arrays are Different from Other Languages

In languages like C, Java — arrays are **strict and rigid**:

- You have to declare the size of the array beforehand
- All elements must be of the **same data type**
- Size cannot be changed once declared

JavaScript arrays are **flexible and dynamic**:

| Feature | Other Languages | JavaScript |
|---------|----------------|------------|
| Fixed size? | ✅ Yes — must declare size | ❌ No — grows dynamically |
| Same data type? | ✅ Yes — strict | ❌ No — can mix types |
| Can store functions? | ❌ No | ✅ Yes |
| Can store objects? | ❌ Not directly | ✅ Yes |
| Size changeable? | ❌ No | ✅ Yes — anytime |

```js
// JavaScript allows mixed types in one array
let mixed = [1, "Harsh", true, null, {name: "Alex"}, [1, 2]];
```

**Explanation:**

JavaScript arrays can hold **any type of value** — numbers, strings, booleans,
objects, functions, even other arrays — all in the same array.

This flexibility makes JavaScript arrays much more powerful and easy to use.

---

## Use Cases of Arrays in JavaScript

| Use Case | Example |
|----------|---------|
| Store a list of items | `["Apple", "Banana", "Mango"]` |
| Store user data | `["Harsh", 21, "Delhi"]` |
| Store API response items | List of products from a server |
| Loop through items | Print all names from a list |
| Filter and search | Find all users above age 18 |
| Stack and Queue operations | Push and pop items |

---

## Indexing Starts from 0

Arrays in JavaScript are **zero-indexed** — the first element is at index `0`,
not `1`.

```js
let fruits = ["Apple", "Banana", "Mango"];
//              0         1         2
```

**Explanation:**

`fruits[0]` → `"Apple"`

`fruits[1]` → `"Banana"`

`fruits[2]` → `"Mango"`

`fruits[3]` → `undefined` — index does not exist

This is one of the most common sources of confusion for beginners —
always remember indexing starts from `0`, not `1`.

---

## How to Create an Array

---

### Way 1 — Array Literal (Most Common ✅)

```js
let arr = [1, 2, 3, 4, 5];
```

**Explanation:**

This is the simplest and most commonly used way.

Square brackets `[]` define the array and values are separated by commas.

---

### Way 2 — Using `new Array()`

```js
let arr = new Array(); // creates an empty array
```

**Explanation:**

`new Array()` uses the **Array constructor** to create an array.

`new` is a keyword that creates a new instance of something — here it creates a new Array object.

```js
let arr1 = new Array();        // empty array — []
let arr2 = new Array(5);       // creates array with 5 empty slots — [ , , , , ]
let arr3 = new Array(1, 2, 3); // creates array with values — [1, 2, 3]
```

**Why prefer `[]` over `new Array()`?**

`new Array(5)` creates 5 empty slots — not 5 zeros.

This can cause confusion and unexpected behavior.

`[]` is cleaner, shorter and more predictable — always prefer it.

---

### Way 3 — Empty Array then Push Values

```js
let arr = [];
arr.push(1);
arr.push(2);
arr.push(3);

console.log(arr); // [1, 2, 3]
```

**Explanation:**

Start with an empty array and add values one by one using `push()`.

Useful when values are not known upfront and come in dynamically.

---

### Way 4 — Array from Another Source using `Array.from()`

```js
let str = "Harsh";
let arr = Array.from(str);

console.log(arr); // ["H", "a", "r", "s", "h"]
```

**Explanation:**

`Array.from()` converts any iterable (like a string) into an array.

Each character of the string becomes a separate element.

---

## How to Access Values in an Array

---

### Using Index

```js
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[0]); // "Apple"
console.log(fruits[1]); // "Banana"
console.log(fruits[2]); // "Mango"
```

---

### Accessing Last Element

```js
let fruits = ["Apple", "Banana", "Mango"];

// Using length
console.log(fruits[fruits.length - 1]); // "Mango"
```

**Explanation:**

`fruits.length` gives the total number of elements — `3`.

`3 - 1 = 2` — last element is always at index `length - 1`.

---

### Accessing Nested Array

```js
let nested = [[1, 2], [3, 4], [5, 6]];

console.log(nested[0]);    // [1, 2]
console.log(nested[0][1]); // 2
```

**Explanation:**

`nested[0]` gives the first inner array — `[1, 2]`.

`nested[0][1]` goes one level deeper — index `1` of `[1, 2]` → `2`.

---

### Accessing Out of Bounds Index

```js
let arr = [1, 2, 3];

console.log(arr[10]); // undefined — index does not exist
```

**Explanation:**

JavaScript does not throw an error for out of bounds access.

It simply returns `undefined` — another flexibility of JavaScript arrays.

---

## Quick Reference

> JavaScript arrays → dynamic size, mixed types, very flexible

> Indexing starts from `0` — first element is at index `0`

> `[]` → most common and preferred way to create arrays

> `new Array()` → constructor way — avoid for simple use cases

> `arr[arr.length - 1]` → always gives the last element

> Out of bounds access → returns `undefined`, no error

---

# Modifying Arrays & Methods

---

## Modifying Arrays

Arrays in JavaScript are mutable — meaning you can **change, add, or remove**
elements after the array is created.

JavaScript provides many built-in methods to do this.

---

## Array Methods

---

### 1. `push()` — Add at End

Adds one or more elements at the **end** of the array.

Modifies the original array.

```js
let fruits = ["Apple", "Banana"];

fruits.push("Mango");

console.log(fruits); // ["Apple", "Banana", "Mango"]
```

**Use Case:**

Adding a new item to a shopping cart, adding a new message to a chat list.

---

### 2. `pop()` — Remove from End

Removes the **last element** from the array and returns it.

Modifies the original array.

```js
let fruits = ["Apple", "Banana", "Mango"];

let removed = fruits.pop();

console.log(removed); // "Mango"

console.log(fruits);  // ["Apple", "Banana"]
```

**Use Case:**

Undo last action, removing the last item from a stack.

---

### 3. `unshift()` — Add at Beginning

Adds one or more elements at the **beginning** of the array.

Modifies the original array.

```js
let fruits = ["Apple", "Banana"];

fruits.unshift("Pineapple");

console.log(fruits); // ["Pineapple", "Apple", "Banana"]
```

**Use Case:**

Adding a new notification at the top of a notification list.

---

### 4. `shift()` — Remove from Beginning

Removes the **first element** from the array and returns it.

Modifies the original array.

```js
let fruits = ["Apple", "Banana", "Mango"];

let removed = fruits.shift();

console.log(removed); // "Apple"

console.log(fruits);  // ["Banana", "Mango"]
```

**Use Case:**

Processing items in a queue — first in, first out.

---

### 5. `splice()` — Add or Remove at Any Index

`splice()` **changes the actual array** — it modifies the original.

```
arr.splice(startIndex, deleteCount, ...itemsToAdd)
```

```js
let arr = [1, 2, 3, 4, 5];

arr.splice(2, 2); // 2nd index se two values ko remove karna hai

console.log(arr); // [1, 2, 5]
```

**Explanation:**

`splice(2, 2)` means:

- Start at index `2`

- Remove `2` elements — removes `3` and `4`

- What remains is `[1, 2, 5]`

**Adding elements with splice:**

```js
let arr = [1, 2, 5];

arr.splice(2, 0, 3, 4); // at index 2, remove 0, add 3 and 4

console.log(arr); // [1, 2, 3, 4, 5]
```

**Use Case:**

Removing a specific item from a list, inserting items at a specific position.

---

### 6. `slice()` — Extract Without Changing Original

`slice()` returns a **new copy of a portion of the array**.

It does **not** change the original array.

```js
let arr = [1, 2, 3, 4, 5];

let newArr = arr.slice(0, 3); // from index 0 up to but not including index 3

console.log(newArr); // [1, 2, 3]

console.log(arr);    // [1, 2, 3, 4, 5] — original unchanged
```

**Explanation:**

`slice(0, 3)` means start from index `0` and go up to `3 - 1 = 2`.

So it extracts index `0`, `1`, `2` → `[1, 2, 3]`.

The main array stays the same — `slice` never touches it.

**Use Case:**

Getting a portion of data to display, creating a copy of part of an array.

---

### 7. `reverse()` — Reverse the Array

Reverses the order of elements in the array.

Modifies the original array.

```js
let arr = [1, 2, 3, 4, 5];

arr.reverse();

console.log(arr); // [5, 4, 3, 2, 1]
```

**Use Case:**

Displaying a list in reverse order, reversing a string using split and reverse.

---

### 8. `sort()` — Sort the Array

By default `sort()` converts elements to **strings** and sorts them alphabetically.

This can give **wrong results** for numbers.

```js
// Works fine for strings
let names = ["Zara", "Arjun", "Mira"];
names.sort();
console.log(names); // ["Arjun", "Mira", "Zara"]
```

```js
// Wrong result for numbers — default sort
let arr = [11, 62, 3, 4, 25];
arr.sort();
console.log(arr); // [11, 25, 3, 4, 62] ❌ — sorted as strings, not numbers
```

**Explanation:**

Default `sort()` converts numbers to strings first.

`"11"` comes before `"3"` alphabetically — which is wrong for numeric sorting.

---

**Correct way — pass a comparison function:**

```js
let arr = [11, 62, 3, 4, 25];

// Ascending order
let asc = arr.sort(function(a, b) {
    return a - b;
});

console.log(asc); // [3, 4, 11, 25, 62] ✅
```

```js
// Descending order
let desc = arr.sort(function(a, b) {
    return b - a;
});

console.log(desc); // [62, 25, 11, 4, 3] ✅
```

**Explanation:**

`sort()` always accepts a comparison function with two parameters `a` and `b`.

`a - b` → if result is negative → `a` comes first → **ascending order**

`b - a` → if result is negative → `b` comes first → **descending order**

**Use Case:**

Sorting products by price, sorting names alphabetically, ranking scores.

---

## Difference Between `shift` and `unshift`

| Method | What it does | Where |
|--------|-------------|-------|
| `shift()` | **Removes** first element | Beginning |
| `unshift()` | **Adds** one or more elements | Beginning |

```js
let arr = [1, 2, 3];

arr.shift();       // removes 1 → [2, 3]

arr.unshift(0);    // adds 0 → [0, 2, 3]
```

---

## `slice()` vs `splice()` — Important Difference

---

### `slice()` — Does NOT Change Original

`slice()` extracts part of array **without changing the original**.

```js
let arr = [1, 2, 3, 4, 5];

let newArr = arr.slice(1, 4); // [2, 3, 4]

console.log(arr);    // [1, 2, 3, 4, 5] ✅ unchanged
```

---

### `splice()` — Changes the Original

`splice()` modifies the original array — adds or removes elements.

```js
let arr = [1, 2, 3, 4, 5];

arr.splice(1, 3); // removes 3 elements from index 1

console.log(arr); // [1, 5] ❗ changed
```

---

### Comparison Table

| Feature | `slice()` | `splice()` |
|---------|-----------|------------|
| Original Array | ❌ Not changed | ✅ Changed |
| Purpose | Extract a portion | Add / Remove elements |
| Return Value | New array with extracted elements | Array of removed elements |
| Safe to use? | ✅ Yes — non-destructive | ⚠️ Careful — destructive |

---

## Which is Better — `slice` or `splice`?

**`slice` is generally safer and preferred** in most situations.

**Why:**

`slice` does not touch the original array — it is **non-destructive**.

In modern JavaScript, especially in frameworks like React —
you should **never mutate the original data directly**.

`slice` follows this principle — it gives you a new array without touching the original.

`splice` is **destructive** — it changes the original array permanently.

Use `splice` only when you specifically need to **modify the original array in place**.

**Simple Rule:**

> If you just need to read or extract → use `slice`

> If you need to actually modify the array → use `splice`

---

## Quick Reference

> `push()` → add at end | `pop()` → remove from end

> `unshift()` → add at beginning | `shift()` → remove from beginning

> `splice()` → add/remove at any index — **changes original**

> `slice()` → extract portion — **does not change original**

> `sort()` default → alphabetical — **wrong for numbers** → always pass a compare function

> `a - b` → ascending | `b - a` → descending

> `slice` is safer — prefer it over `splice` when original should not be modified

---

# Arrays — Important Methods

---

## Common Thing About These Methods

When we apply `forEach`, `sort`, `map`, `filter`, `reduce` on arrays —
one thing is common in all of them:

> **They all accept a function as an argument.**

This is why they are called **higher order functions** — they take a function inside them
and run it for every element of the array.

---

## 1. `forEach()`

### What

`forEach()` runs a function **once for every element** in the array.

Array ke har element ke liye ek function chalega — aur baar baar `val` mein
ek ek value aayegi, aur andar likha hua code ek baar chalega array ke each element ke liye.

### How

```js
let arr = [11, 62, 3, 4, 25];

arr.forEach(function(val) {
    console.log(val);
});
```

**Output:**

```
11
62
3
4
25
```

**Explanation:**

`forEach` goes through every element one by one.

First iteration → `val = 11` → `console.log(11)`

Second iteration → `val = 62` → `console.log(62)`

And so on — until all elements are covered.

---

### `forEach` with Index

You can also access the **index** of each element as a second parameter.

```js
let arr = [11, 62, 3, 4, 25];

arr.forEach(function(val, index) {
    console.log(`Index ${index} : ${val}`);
});
```

**Output:**

```
Index 0 : 11
Index 1 : 62
Index 2 : 3
Index 3 : 4
Index 4 : 25
```

---

### Important — `forEach` Does NOT Return Anything

```js
let arr = [1, 2, 3];

let result = arr.forEach(function(val) {
    return val * 2; // return is ignored
});

console.log(result); // undefined
```

**Explanation:**

`forEach` is only meant for **looping and performing actions** — like printing,
updating a variable, calling an API, etc.

It does **not** return a new array.

If you need a new array from the result — use `map()` instead.

---

### Use Cases of `forEach`

| Use Case | Example |
|----------|---------|
| Print all items in a list | `arr.forEach(val => console.log(val))` |
| Add all values to a total | `arr.forEach(val => total += val)` |
| Display items on a webpage | Loop through data and create HTML elements |
| Send data to an API | Call an API for each item in the array |

---

### `forEach` vs Regular `for` Loop

| Feature | `for` loop | `forEach` |
|---------|-----------|-----------|
| Syntax | Longer | Cleaner |
| Works on arrays | ✅ | ✅ |
| Can `break` or `continue` | ✅ | ❌ — not supported |
| Returns something | ❌ | ❌ |
| Readability | Average | Better |

**Explanation:**

`forEach` is cleaner and more readable than a regular `for` loop for arrays.

But if you need `break` or `continue` — use a regular `for` loop instead
since `forEach` does not support them.

---

## Quick Reference

> `forEach` → runs a function for **every element** in the array

> `val` gets each element one by one in every iteration

> `forEach` does **not** return anything — returns `undefined`

> Use `forEach` for side effects — printing, updating variables, calling APIs

> Cannot use `break` or `continue` inside `forEach`

---

## 2. `map()`

### What

`map` sirf tab use karna hai jab aapko **ek naya array banana hai**,
based on the data of previous array.

As soon as you see a `map` — **visualize a blank array in your head**.

Now `map` method ke andar ka function jo jo `return` karega —
usko blank array me insert karte rehna.

---

### How

```js
let arr = [11, 62, 3, 4, 25];

let newArr = arr.map(function(val) {
    return 12;
});

// for the first value 11, 12 will be returned
// for 62: 12 returned
// same for remaining elements

// ultimately an array will be formed in which you will have five times 12.

// newArr = [12, 12, 12, 12, 12]
```

---

### Important Note

`map` is similar to `forEach` — but we have to use `return` mandatorily.

If we are not returning — then in our new array, five times `undefined` will be stored.

```js
let arr = [11, 62, 3, 4, 25];

let newArr = arr.map(function(val) {
    // no return
});

// newArr = [undefined, undefined, undefined, undefined, undefined]
```

If we are not returning anything — then `undefined` will be returned automatically.

> This is the biggest difference between `map` and `forEach` —
> in `map`, `return` is mandatory. In `forEach`, it is not needed.

---

### Lets Understand it by a Scenario

```js
let arr = [11, 32, 3, 4, 25];

let newArr = arr.map(function(val) {
    if(val > 10) return val;
});

// output: [11, 32, undefined, undefined, 25]
```

**Explanation:**

`11 > 10` → true → `11` returned → goes into new array

`32 > 10` → true → `32` returned → goes into new array

`3 > 10` → false → condition fails → nothing returned → `undefined` stored

`4 > 10` → false → condition fails → nothing returned → `undefined` stored

`25 > 10` → true → `25` returned → goes into new array

Final result → `[11, 32, undefined, undefined, 25]`

> This is why `map` is not used for filtering — use `filter()` for that.

> `map` always returns something for every element — if you don't return, `undefined` is stored.

---

### How to Identify When to Use `map`

In such type of cases where you can see that:

- A **new array** will be formed from an array
- That new array will keep **some transformed values**

Then we will use `map`.

```js
// Practical example — apply 10% discount on every price
let prices = [100, 200, 300];

let discounted = prices.map(function(val) {
    return val * 0.9;
});

console.log(discounted); // [90, 180, 270]
```

---

### `forEach` vs `map`

| Feature | `forEach` | `map` |
|---------|-----------|-------|
| Returns new array | ❌ No | ✅ Yes — always |
| `return` needed? | ❌ No | ✅ Yes — mandatory |
| Use when | Side effects — print, update | Transform data into new array |
| Result | `undefined` | New array with same length |

---

## Quick Reference

> `map` → use when you want to **create a new array** from an existing one

> Visualize a **blank array** — whatever is returned goes into that blank array

> `return` is **mandatory** in `map` — no return means `undefined` in new array

> `map` always creates a new array of the **same length** as original

> For skipping/filtering elements → use `filter()`, not `map()`

---

## 3. `filter()`

### What

Same as `map` — in `filter` also a **new array will be made**.

But unlike `map` — `filter` takes only **some members** from the previous array into the new array.

Here we return **boolean values**:

- `true` means that particular value **will go** in the new array
- `false` means that value **will not go** in the new array

---

### How

Make a new array in which keep only those elements which are bigger than 4.

```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let newArr = arr.filter(function(val) {
    if(val > 4) return true;
    // elements that are lesser will be discarded
});

// output: [5, 6, 7, 8]
```

**Explanation:**

`1 > 4` → false → discarded

`2 > 4` → false → discarded

`3 > 4` → false → discarded

`4 > 4` → false → discarded

`5 > 4` → true → goes into new array

`6 > 4` → true → goes into new array

`7 > 4` → true → goes into new array

`8 > 4` → true → goes into new array

Final result → `[5, 6, 7, 8]`

> A shorter way to write the same thing — the condition itself returns a boolean:

```js
let newArr = arr.filter(function(val) {
    return val > 4; // val > 4 directly returns true or false
});
```

---

### `map` vs `filter`

| Feature | `map` | `filter` |
|---------|-------|---------|
| New array length | Always same as original | Can be smaller |
| What goes in new array | Transformed value | Original value if condition is true |
| Returns boolean? | ❌ No | ✅ Yes |
| Use when | Transform every element | Pick only some elements |

---

## 4. `reduce()`

### What

`reduce` is the process of **reducing a big array into a single value**.

It can be used to find sum, product, maximum, minimum — anything that
needs to combine all elements into one result.

---

### How

Return the sum of all elements of the array.

```js
let arr = [1, 2, 3, 4, 5, 6];

let ans = arr.reduce(function(accumulator, val) {
    return accumulator + val;
}, 0);

// Output: 21
```

**Explanation — Each Part of the Code:**

`accumulator` → a special variable that **remembers its value** across all iterations.

`val` → the current element of the array.

`0` → the **initial value** of the accumulator — it starts from `0`.

`return accumulator + val` → adds current value to accumulator and returns the updated value.

Accumulator remembers its value and keeps updating throughout all the iterations —
even after returning, it updates its value for the next iteration.

---

### Dry Run — Step by Step

```
arr = [1, 2, 3, 4, 5, 6]
Initial accumulator = 0
```

| Iteration | accumulator | val | return (acc + val) |
|-----------|-------------|-----|--------------------|
| 1st | 0 | 1 | 1 |
| 2nd | 1 | 2 | 3 |
| 3rd | 3 | 3 | 6 |
| 4th | 6 | 4 | 10 |
| 5th | 10 | 5 | 15 |
| 6th | 15 | 6 | 21 |

Final answer → `21` ✅

---

### Use Cases of `reduce`

| Use Case | Example |
|----------|---------|
| Sum of all elements | Add all cart prices |
| Find maximum value | Find highest score |
| Count occurrences | Count how many times a value appears |
| Flatten nested arrays | Combine multiple arrays into one |

---

## 5. `find()`

### What

In your array — the **first element that satisfies the condition** —
that element will be returned.

`find` stops as soon as it finds the first match — it does not continue.

---

### How

This is an array that contains three elements which are objects.
We need to return the first element which has `key: 1`.

```js
let arr = [
    {id: 1, key: 1},
    {id: 2, key: 2},
    {id: 3, key: 1}
];

let ans = arr.find(function(val) {
    return val.key === 1;
});

// output: ans = {id: 1, key: 1}
```

**Explanation:**

`val` gets each object one by one.

First object → `{id: 1, key: 1}` → `val.key === 1` → true → **returned immediately**

`find` stops here — it does not check the third object even though it also has `key: 1`.

Only the **first match** is returned — not all matches.

> If no element satisfies the condition — `find` returns `undefined`.

---

### `find` vs `filter`

| Feature | `find` | `filter` |
|---------|--------|---------|
| Returns | First matching element | All matching elements in new array |
| Stops at first match? | ✅ Yes | ❌ No — checks all elements |
| Return type | Single element | Array |
| No match found | `undefined` | Empty array `[]` |

---

## Quick Reference

> `filter` → return `true` to keep element, `false` to discard → new array with fewer or equal elements

> `reduce` → reduce entire array into **one single value** → accumulator remembers across iterations

> The `0` at the end of `reduce` → **initial value** of accumulator

> `find` → returns the **first element** that satisfies the condition → stops immediately

> `find` returns a single value, not an array — `filter` returns an array
    
---

## 6. `some()`

### What

`some()` checks if **at least one element** in the array satisfies the condition.

It returns a **boolean** — `true` or `false`.

As soon as it finds the first element that passes the condition — it stops and returns `true`.

If no element passes — it returns `false`.

---

### How

Example: In the array of scores, find if there is any student who has scored more than 85.

```js
let arr = [10, 30, 32, 90];

let ans = arr.some(function(val) {
    return val > 85;
});

// Output: true
```

**Explanation:**

`10 > 85` → false → keep checking

`30 > 85` → false → keep checking

`32 > 85` → false → keep checking

`90 > 85` → true → returns `true` immediately — stops here

Since at least one element (`90`) passed the condition → answer is `true`.

---

### Use Cases of `some()`

| Use Case | Example |
|----------|---------|
| Check if any item is out of stock | Any product with quantity 0? |
| Check if any user is an admin | Any user with role "admin"? |
| Validate if any field is empty | Any form field that is empty? |

---

## 7. `every()`

### What

`every()` checks if **all elements** are passing the condition or not.

It is basically the **opposite of `some()`**.

It returns `true` only if every single element passes — if even one fails, it returns `false`.

---

### How

```js
let arr = [10, 30, 32, 90];

let ans = arr.every(function(val) {
    return val > 5; // checking that all elements are greater than 5 or not
});

// Output: true
```

**Explanation:**

`10 > 5` → true → keep checking

`30 > 5` → true → keep checking

`32 > 5` → true → keep checking

`90 > 5` → true → all passed → returns `true`

Since all elements passed the condition → answer is `true`.

---

### What if one element fails?

```js
let arr = [10, 30, 32, 90];

let ans = arr.every(function(val) {
    return val > 20;
});

// Output: false
```

**Explanation:**

`10 > 20` → false → `every()` stops immediately and returns `false`.

It does not check the remaining elements — one failure is enough to return `false`.

---

### Use Cases of `every()`

| Use Case | Example |
|----------|---------|
| Check if all students passed | All scores above 33? |
| Validate all form fields | All fields filled? |
| Check if all products are in stock | All quantities greater than 0? |

---

### `some()` vs `every()`

| Feature | `some()` | `every()` |
|---------|---------|---------|
| Returns `true` when | **At least one** passes | **All** pass |
| Returns `false` when | No element passes | Even one fails |
| Stops at | First `true` | First `false` |
| Think of it as | **OR** logic | **AND** logic |

---

## Destructuring

### What

Destructuring is a way to **unpack values from an array into separate variables**
in one clean line.

### Why

Without destructuring — you have to access each element by index separately:

```js
let arr = [1, 2, 3, 4, 5];

let a = arr[0]; // 1
let b = arr[1]; // 2
let c = arr[3]; // 4
```

With destructuring — same thing in one line:

```js
let arr = [1, 2, 3, 4, 5];

let [a, b, , c] = arr;
// a = 1 | b = 2 | c = 4
```

**Explanation:**

`a` gets `arr[0]` → `1`

`b` gets `arr[1]` → `2`

The empty `,` skips `arr[2]` → `3` is skipped

`c` gets `arr[3]` → `4`

The positions of variables match the positions of elements in the array.

---

### Use Cases of Destructuring

| Use Case | Example |
|----------|---------|
| Extract values from API response | `let [first, second] = apiData` |
| Swap two variables | `[a, b] = [b, a]` |
| Get first and last name | `let [firstName, lastName] = fullName` |
| Skip unwanted values | Use empty `,` to skip |

---

## Spread Operator (`...`)

### What

When we use `...` with arrays and objects — it is called **Spread Operator**.

Otherwise when `...` is used in function parameters — it is called **Rest Operator**.

### The Problem — Reference Copy

```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let arr2 = arr; // arr2 mein koi copy store nahi hui — sirf arr ka reference pass hua hai
```

**Explanation:**

`arr2 = arr` does not create a new copy.

Just a reference of `arr` is passed to `arr2`.

So if we made any changes in `arr2` — the changes will also reflect in `arr`.

```js
arr2.push(10);

console.log(arr);  // [1,2,3,4,5,6,7,8,9,10] — arr bhi change ho gaya!
console.log(arr2); // [1,2,3,4,5,6,7,8,9,10]
```

---

### The Solution — Spread Operator

```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let arr2 = [...arr]; // arr ke elements arr2 mein spread ho gaye
                     // arr2 ab ek alag naya array hai jiske apne elements hain
                     // arr ka reference nahi — apni copy hai
```

**Explanation:**

`[...arr]` spreads all elements of `arr` into a new array.

Now `arr2` is a completely separate array with its own elements.

If we try to make any changes with `arr2` — it will not affect `arr`,
because both are separate now.

```js
arr2.push(10);

console.log(arr);  // [1,2,3,4,5,6,7,8,9] — unchanged ✅
console.log(arr2); // [1,2,3,4,5,6,7,8,9,10]
```

---

### Other Use Cases of Spread Operator

```js
// Merging two arrays
let a = [1, 2, 3];
let b = [4, 5, 6];
let c = [...a, ...b]; // [1, 2, 3, 4, 5, 6]

// Adding element at start
let countries = ["USA", "UK"];
countries = ["India", ...countries]; // ["India", "USA", "UK"]

// Passing array elements as function arguments
let nums = [1, 2, 3];
console.log(Math.max(...nums)); // 3
```

---

### Advantages of Spread Operator

| Advantage | Explanation |
|-----------|-------------|
| Real copy of array | No reference sharing — independent copy |
| Merge arrays easily | Combine multiple arrays in one line |
| Add elements cleanly | Add at start or end without `push`/`unshift` |
| Pass array as arguments | Spread array elements into function parameters |

---

## Quick Reference

> `some()` → at least **one** passes → returns `true` | think: OR logic

> `every()` → **all** must pass → returns `true` | think: AND logic

> Destructuring → unpack array values into variables in one line

> Empty `,` in destructuring → skips that position

> `arr2 = arr` → reference copy — changes reflect in both

> `arr2 = [...arr]` → real independent copy — changes do not affect original

> `...` in arrays/objects → **Spread Operator** | `...` in function params → **Rest Operator**



