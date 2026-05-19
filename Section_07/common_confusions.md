# Section 7: Common Confusions — Arrays

---

## 1. `splice` vs `slice`

`splice` will **change the original array** — but using `slice` it will **not affect the original array**.

The main difference:

`splice` removes the particular values that you want to — from the original array itself.

`slice` just takes out the values by creating a new array — without changing the original one.

```js
let arr = [1, 2, 3, 4, 5];

// splice — changes original
arr.splice(1, 2); // removes 2 elements from index 1
console.log(arr); // [1, 4, 5] — original is changed ❗

// slice — does not change original
let arr2 = [1, 2, 3, 4, 5];
let newArr = arr2.slice(1, 3); // extracts index 1 and 2
console.log(newArr); // [2, 3] — new array
console.log(arr2);   // [1, 2, 3, 4, 5] — original unchanged ✅
```

---

## 2. When to Use `splice` and When to Use `slice`

### Use `splice` when:

| Scenario | Example |
|----------|---------|
| Remove a specific item from a list | Delete a todo item from a list |
| Insert items at a specific position | Add a new item at index 2 |
| Modify the original array intentionally | Update a shopping cart |

```js
// Removing a todo item at index 2
let todos = ["Buy milk", "Go gym", "Read book", "Cook dinner"];
todos.splice(2, 1); // removes "Read book"
console.log(todos); // ["Buy milk", "Go gym", "Cook dinner"]
```

---

### Use `slice` when:

| Scenario | Example |
|----------|---------|
| Show only first 5 items from a large list | Pagination |
| Create a copy of array | Clone without reference |
| Extract a portion without touching original | Get items between two indexes |

```js
// Show first 3 products only
let products = ["Shoes", "Shirt", "Watch", "Bag", "Hat"];
let firstThree = products.slice(0, 3);
console.log(firstThree); // ["Shoes", "Shirt", "Watch"]
console.log(products);   // unchanged ✅
```

**Simple Rule:**

> Need to **modify** the original → use `splice`

> Need to **extract** without touching original → use `slice`

---

## 3. When to Use `map` and When to Use `forEach`

`forEach` has **no return** — it does not make a new array directly.

`forEach` is used when you just want to **do something** with each element —
like printing, updating a variable, calling an API.

But when we have to **make a new array from a previous array** — we use `map`.

In `map` we can return something — and whatever we return will go into the new array.

```js
let arr = [1, 2, 3, 4, 5];

// forEach — just doing something, no new array
arr.forEach(function(val) {
    console.log(val * 2); // just printing — nothing stored
});

// map — making a new array
let newArr = arr.map(function(val) {
    return val * 2; // returning — goes into new array
});

console.log(newArr); // [2, 4, 6, 8, 10] ✅
```

**Simple Rule:**

> Just want to **loop and do something** → use `forEach`

> Want to **create a new array** from existing one → use `map`

---

## 4. Big Blunder with `.sort()`

```js
[100, 20, 3].sort(); // ["100", "20", "3"] — Wrong ❌
```

### Why is this a Problem?

By default `.sort()` converts every element into a **string** first — then sorts them.

So numbers are compared as strings — not as numbers.

When sorted as strings:

`"100"` starts with `"1"`

`"20"` starts with `"2"`

`"3"` starts with `"3"`

Alphabetically `"1" < "2" < "3"` — so the order becomes `["100", "20", "3"]`

Which is completely **wrong** for numeric sorting.

```js
// Wrong — default sort
[100, 20, 3].sort();
// Output: [100, 20, 3] — sorted as strings "100", "20", "3"
```

**Explanation:**

This is a very common bug that developers run into.

The default sort was designed for strings — not numbers.

So it treats every element as a string and sorts character by character.

---

### The Correct Way — Pass a Compare Function

```js
let arr = [100, 20, 3];

arr.sort((a, b) => a - b); // ascending order because of a - b

console.log(arr); // [3, 20, 100] ✅
```

**How the Compare Function Works:**

`a - b` → if result is **negative** → `a` comes before `b` → ascending order

`b - a` → if result is **negative** → `b` comes before `a` → descending order

```js
// Descending
arr.sort((a, b) => b - a);
console.log(arr); // [100, 20, 3] ✅
```

**Simple Rule:**

> Default `.sort()` → works fine for **strings**

> For **numbers** → always pass a compare function `(a, b) => a - b`

> Never use default sort on a numeric array — it will give wrong results

---

## Quick Reference

> `splice` → changes original | `slice` → does not change original

> `splice` → modify/remove from original | `slice` → extract a portion safely

> `forEach` → loop and do something — no new array | `map` → create a new array

> Default `.sort()` → converts to strings first → **wrong for numbers**

> For numeric sort → always use `arr.sort((a, b) => a - b)`