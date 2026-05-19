# Section 7: Practice Questions — Arrays

---

### Question 1 — Create an Array and Print the Second Fruit

```js
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[1]); // Banana
```

**Explanation:**
Arrays are zero-indexed — index starts from `0`.
So `fruits[0]` = `"Apple"`, `fruits[1]` = `"Banana"`, `fruits[2]` = `"Mango"`.

---

### Question 2 — Add at End and Beginning

```js
let fruits = ["Apple", "Banana"];

fruits.push("Mango");       // adds at the END
fruits.unshift("Pineapple"); // adds at the BEGINNING

console.log(fruits); // ["Pineapple", "Apple", "Banana", "Mango"]
```

**Explanation:**
`push()` → adds element at the **end** of the array.
`unshift()` → adds element at the **beginning** of the array.

---

### Question 3 — Replace "Banana" with "Kiwi"

```js
let fruits = ["Apple", "Banana"];

fruits[1] = "Kiwi"; // directly replace using index

console.log(fruits); // ["Apple", "Kiwi"]
```

**Explanation:**
`"Banana"` is at index `1`.
Directly assigning a new value at that index replaces the old value.

---

### Question 4 — Difference Between `push` and `unshift`

| Method | What it does | Where it adds |
|--------|-------------|---------------|
| `push()` | Adds one or more elements | At the **END** of the array |
| `unshift()` | Adds one or more elements | At the **BEGINNING** of the array |

```js
let arr = [2, 3];
arr.push(4);    // [2, 3, 4]
arr.unshift(1); // [1, 2, 3, 4]
```

---

### Question 5 — Remove Last Item

```js
let numbers = [1, 2, 3, 4];

numbers.pop(); // removes the last element

console.log(numbers); // [1, 2, 3]
```

**Explanation:**
`pop()` removes and returns the last element of the array.
No index needed — it always targets the last item.

---

### Question 6 — Insert "Red" and "Blue" at Index 1

```js
let colors = ["Green", "Yellow"];

colors.splice(1, 0, "Red", "Blue");

console.log(colors); // ["Green", "Red", "Blue", "Yellow"]
```

**Explanation — How `splice` Works:**

> `splice(kis index se, kitne members ko hatana hai, ...jo add karna hai)`

`splice(1, 0, "Red", "Blue")` breaks down as:
- `1` → start at index 1
- `0` → remove 0 elements (we are not removing anything — just inserting)
- `"Red", "Blue"` → insert these two values at index 1

So `"Red"` and `"Blue"` are inserted between `"Green"` and `"Yellow"`.

---

### Question 7 — Extract Middle Three Elements Using `slice`

```js
let items = [1, 2, 3, 4, 5, 6, 7];

let middle = items.slice(2, 5);

console.log(middle); // [3, 4, 5]
```

**How `slice` Works:**
`slice(startIndex, endIndex)` — extracts elements from `startIndex`
up to but **not including** `endIndex`.

```
items = [1, 2, 3, 4, 5, 6, 7]
index =  0  1  2  3  4  5  6

slice(2, 5) → takes index 2, 3, 4 → [3, 4, 5]
```

**Important:** `slice` does **not** modify the original array —
it returns a new array.

---

### Question 8 — Sort Alphabetically and Reverse

```js
let names = ["Zara", "Arjun", "Mira", "Bhavya"];

names.sort().reverse();

console.log(names); // ["Zara", "Mira", "Bhavya", "Arjun"]
```

**Explanation:**
`sort()` → sorts the array alphabetically first → `["Arjun", "Bhavya", "Mira", "Zara"]`
`reverse()` → then reverses that sorted array → `["Zara", "Mira", "Bhavya", "Arjun"]`
Both methods modify the **original array**.

---

### Question 9 — Use `.map()` to Square Each Number

```js
let arr = [1, 2, 3, 4];

let newArr = arr.map(function(val) {
    return val * val;
});

console.log(newArr); // [1, 4, 9, 16]
```

**Explanation:**
`map()` runs the function for every element in the array.
`val` gets each value one by one — `1`, `2`, `3`, `4`.
Each value is squared and returned.
`map()` collects all returned values into a **new array**.
Original array `arr` is **not changed**.

---

### Question 10 — Use `.filter()` to Keep Numbers Greater Than 10

```js
let arr = [5, 12, 8, 20, 3];

let newArr = arr.filter((val) => {
    return val > 10;
});

console.log(newArr); // [12, 20]
```

**Explanation:**
`filter()` runs the function for every element.
If the function returns `true` → element is kept.
If the function returns `false` → element is removed.
Only `12` and `20` are greater than `10` — so only they are kept.
Returns a **new array** — original is not changed.

---

### Question 11 — Use `.reduce()` to Find Sum

```js
let arr = [5, 12, 8, 20, 3];

let sum = arr.reduce(function(acc, val) {
    return acc + val;
}, 0); // by default accumulator will start from 0

console.log(sum); // 48
```

**Explanation:**
`reduce()` goes through every element and **accumulates** a single result.
`acc` is the accumulator — it holds the running total.
`val` is the current element.
`0` is the starting value of `acc`.

Step by step:
- `acc = 0`, `val = 5`  → `acc = 5`
- `acc = 5`, `val = 12` → `acc = 17`
- `acc = 17`, `val = 8` → `acc = 25`
- `acc = 25`, `val = 20` → `acc = 45`
- `acc = 45`, `val = 3` → `acc = 48`

Final result → `48`.

---

### Question 12 — Use `.find()` to Get First Number Less Than 10

```js
let arr = [12, 15, 3, 8, 20];

let ans = arr.find(function(val) {
    return val < 10;
});

console.log(ans); // 3
```

**Explanation:**
`find()` goes through the array one by one.
It returns the **first element** that satisfies the condition — then stops.
`12 < 10` → false | `15 < 10` → false | `3 < 10` → true → returns `3` immediately.
`8` is never even checked — `find()` stops at the first match.

---

### Question 13 — Use `.some()` to Check if Any Student Scored Below 35

```js
let scores = [45, 60, 28, 90];

let result = scores.some(function(val) {
    return val < 35;
});

console.log(result); // true
```

**Explanation:**
`some()` checks if **at least one** element satisfies the condition.
Returns `true` if any one element passes — returns `false` if none do.
`28 < 35` → true → `some()` returns `true` immediately.
Think of it as — "does **any** value satisfy this?"

---

### Question 14 — Use `.every()` to Check if All Numbers Are Even

```js
let arr = [2, 4, 6, 8, 10];

let result = arr.every(function(val) {
    return val % 2 === 0;
});

console.log(result); // true
```

**Explanation:**
`every()` checks if **all** elements satisfy the condition.
Returns `true` only if every single element passes.
If even one fails → returns `false` immediately.
Here all numbers are even → returns `true`.
Think of it as — "do **all** values satisfy this?"

---

### Question 15 — Destructure Array to Get First and Last Name

```js
let fullName = ["Harsh", "Sharma"];

let [firstName, lastName] = fullName; // extract from fullName

console.log(firstName); // "Harsh"
console.log(lastName);  // "Sharma"
```

**Explanation:**
Array destructuring lets you unpack values from an array
into separate variables in one clean line.
`firstName` gets `fullName[0]` → `"Harsh"`.
`lastName` gets `fullName[1]` → `"Sharma"`.
The order of variables matches the order of elements in the array.

---

### Question 16 — Merge Two Arrays Using Spread Operator

```js
let a = [1, 2];
let b = [3, 4];

let c = [...a, ...b];

console.log(c); // [1, 2, 3, 4]
```

**Explanation:**
`...a` spreads all elements of `a` — `1, 2`.
`...b` spreads all elements of `b` — `3, 4`.
Both are combined into a new array `c`.
Original arrays `a` and `b` are **not changed**.

---

### Question 17 — Add "India" at Start Using Spread Operator

```js
let countries = ["USA", "UK"];

countries = ["India", ...countries];

console.log(countries); // ["India", "USA", "UK"]
```

**Explanation:**
`"India"` is placed first — then `...countries` spreads the existing values after it.
This creates a new array with `"India"` at the beginning.

---

### Question 18 — Clone Array Properly (Not by Reference)

```js
let arr = [1, 2, 3];

let arr2 = [...arr]; // real independent copy

arr2.push(4);

console.log(arr);  // [1, 2, 3] — not affected
console.log(arr2); // [1, 2, 3, 4]
```

**Explanation:**
`let arr2 = arr` would give a **reference copy** — both point to the same array.
Any change in `arr2` would reflect in `arr` as well.
`[...arr]` creates a **real independent copy** using spread operator.
Now `arr` and `arr2` are completely separate — changes in one don't affect the other.

---

## Quick Summary — Array Methods

| Method | What it does | Returns |
|--------|-------------|---------|
| `push()` | Add at end | New length |
| `pop()` | Remove from end | Removed element |
| `unshift()` | Add at beginning | New length |
| `shift()` | Remove from beginning | Removed element |
| `splice()` | Add/remove at any index | Removed elements |
| `slice()` | Extract a portion | New array |
| `map()` | Transform each element | New array |
| `filter()` | Keep elements that pass condition | New array |
| `reduce()` | Accumulate into single value | Single value |
| `find()` | Get first matching element | Single element |
| `some()` | Check if any element passes | `true` / `false` |
| `every()` | Check if all elements pass | `true` / `false` |
| `sort()` | Sort the array | Modified original |
| `reverse()` | Reverse the array | Modified original |