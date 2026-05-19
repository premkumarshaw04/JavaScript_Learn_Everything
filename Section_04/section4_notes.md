# Section 4: Control Flow in JavaScript

---

## What is Control Flow?

Control flow means **controlling which lines of code run and when**.
By default JavaScript runs line by line from top to bottom.
Control flow lets you make decisions, skip code, or repeat code.

---

## 1. `if`, `else if`, `else`

---

### `if`

Runs a block of code **only if the condition is true**.

```js
let age = 20;

if(age >= 18) {
    console.log("Adult"); // ✅ runs because condition is true
}
```

---

### `else`

Runs when the `if` condition is **false**.

```js
let age = 15;

if(age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor"); // ✅ runs because if condition was false
}
```

---

### `else if`

Used to check **multiple conditions** one by one.

```js
let marks = 72;

if(marks >= 90) {
    console.log("A");
} else if(marks >= 75) {
    console.log("B");
} else if(marks >= 60) {
    console.log("C"); // ✅ runs
} else {
    console.log("Fail");
}
```

---

### What Can You Put Inside the `if` Condition?

Three things can go inside an `if` condition:

**1. A direct boolean:**
```js
if(true) { console.log("runs"); }
if(false) { console.log("won't run"); }
```

**2. A comparison that returns true or false:**
```js
if(10 > 5) { console.log("runs"); }     // true
if(10 === "10") { console.log("runs"); } // false — strict check
```

**3. Any value — JS will convert it to truthy or falsy:**
```js
if(0)         { console.log("won't run"); } // 0 is falsy
if("")        { console.log("won't run"); } // empty string is falsy
if("Harsh")   { console.log("runs"); }      // non-empty string is truthy
if(null)      { console.log("won't run"); } // null is falsy
if([])        { console.log("runs"); }      // empty array is truthy
```

**Explanation:**
JavaScript automatically converts whatever is inside `if()` into `true` or `false`.
If it's a truthy value → runs. If it's a falsy value → skips.
Falsy values: `0, "", null, undefined, NaN, false`
Everything else is truthy.

---

## 2. Switch Case

Used when you want to **match a value against multiple options**.
Cleaner than writing many `else if` statements for the same variable.

```js
let day = "Monday";

switch(day) {
    case "Monday":
        console.log("Start of the week");
        break;
    case "Friday":
        console.log("End of the week");
        break;
    case "Sunday":
        console.log("Holiday");
        break;
    default:
        console.log("Regular day");
}

// Output: Start of the week
```

---

### Why `break` is Necessary

Without `break`, JavaScript **falls through** to the next case
and keeps running even if the case does not match.

```js
let color = "red";

switch(color) {
    case "red":
        console.log("Red");   // ✅ matches
    case "blue":
        console.log("Blue");  // ⚠️ also runs! (no break above)
    case "green":
        console.log("Green"); // ⚠️ also runs!
}

// Output:
// Red
// Blue
// Green
```

**With `break`:**
```js
switch(color) {
    case "red":
        console.log("Red"); // ✅ matches
        break;              // stops here
    case "blue":
        console.log("Blue");
        break;
}

// Output: Red
```

**Explanation:**
After every `case` always add `break`.
Without `break`, once a case matches, all the cases below it
also run automatically — this is called **fall-through**.

---

### `default` in Switch

`default` runs when **no case matches** — like `else` in an if-else.

```js
let fruit = "mango";

switch(fruit) {
    case "apple":
        console.log("Apple");
        break;
    case "banana":
        console.log("Banana");
        break;
    default:
        console.log("Unknown fruit"); // ✅ runs — no case matched
}
```

---

### Switch Uses Strict Comparison (`===`)

```js
let val = "1";

switch(val) {
    case 1:
        console.log("Number 1");
        break;
    case "1":
        console.log("String 1"); // ✅ runs — type also matched
        break;
}
```

**Explanation:**
Switch uses `===` internally — it checks both value and type.
So `"1"` and `1` are treated as different cases.

---

## 3. Early Return Pattern

---

### What is Early Return?

Early return means **returning from a function as soon as a condition is met**
instead of going through all the remaining conditions.

The idea is — once you know the answer, return it immediately.
Don't wait and check all the other conditions unnecessarily.

---

### Without Early Return (Normal Way)

```js
function getVal(val) {
    let grade;
    if(val < 25) {
        grade = "D";
    } else if(val < 50) {
        grade = "C";
    } else if(val < 75) {
        grade = "B";
    } else {
        grade = "A";
    }
    return grade;
}
```

Here even after the condition matches, the code continues
checking other conditions before finally returning.

---

### With Early Return Pattern

```js
function getVal(val) {
    if(val < 25) return "D";
    if(val < 50) return "C";
    if(val < 75) return "B";
    return "A";
}

console.log(getVal(76)); // "A"
```

**Explanation — Step by Step:**

`val = 76`

- `val < 25` → `76 < 25` → `false` → skip, move to next
- `val < 50` → `76 < 50` → `false` → skip, move to next
- `val < 75` → `76 < 75` → `false` → skip, move to next
- No more conditions — return `"A"` ✅

Now with `val = 30`:
- `val < 25` → `30 < 25` → `false` → skip
- `val < 50` → `30 < 50` → `true` → return `"C"` immediately ✅
- Remaining conditions are never even checked

---

### Why Use Early Return?

- Code becomes **cleaner and easier to read**
- No need for `else if` chains — each `if` is independent
- Once a condition matches — function exits immediately
- Avoids deeply nested `if-else` blocks

---

### Real World Usage

Early return is commonly used for **validation at the start of a function**:

```js
function processOrder(order) {
    if(!order) return "No order found";
    if(!order.item) return "Item is missing";
    if(order.quantity <= 0) return "Invalid quantity";

    // If we reach here — order is valid
    return `Processing ${order.quantity} x ${order.item}`;
}
```

**Explanation:**
Instead of wrapping the main logic inside multiple nested `if` blocks,
we check for invalid cases first and return early.
If all checks pass — the main logic runs cleanly at the bottom.

---

## Quick Reference

> `if` → runs when condition is true
> `else if` → checks another condition if previous was false
> `else` → runs when all conditions are false
> `switch` → matches a value against multiple cases using `===`
> `break` → stops fall-through in switch — always add it after each case
> `default` → runs when no case matches in switch
> **Early Return** → return immediately when condition matches — keeps code clean