# Section 5: Loops in JavaScript

## Mindset to think where which loop will be used

### For loop:
    >[kaha se jana hai -> kahatak jana hai -> kaise jana hai]

## while loop:
    >[kaha se jana hai -> kab rukna hai -> kaise jana hai, Kitni baar me rukega iski koi gaurantey nhi hai]
---

## What is a Loop?

A loop is a way to **run the same block of code multiple times**
without writing it again and again.

```js
// Without loop — repetitive and bad
console.log(1);
console.log(2);
console.log(3);

// With loop — clean and efficient
for(let i = 1; i <= 3; i++) {
    console.log(i);
}
```

---

## Two Main Loops — `for` and `while`

---

## 1. `for` Loop

### What
A loop where you **know exactly how many times** you want to run the code.

### Why
When the start point, end point, and step are all known beforehand —
`for` loop is the right choice.
It keeps everything (start, condition, step) in one line — clean and readable.

### How

```
for(start ; condition ; step) {
    // code to run
}
```

```js
// Start from 1, go until 50, increment by 1
for(let i = 1; i <= 50; i++) {
    console.log(i);
}
```

**Explanation:**
- `let i = 1` → start from 1
- `i <= 50` → keep going until i reaches 50
- `i++` → increment by 1 each time
- Once `i` becomes 51 — condition is false — loop stops

Think of it as:
> **Where to start → Where to stop → How to move**

---

### More Examples

```js
// 20 to 30
for(let i = 20; i <= 30; i++) {
    console.log(i);
}

// Count down from 10 to 1
for(let i = 10; i >= 1; i--) {
    console.log(i);
}

// Increment by 2 (even numbers)
for(let i = 0; i <= 10; i += 2) {
    console.log(i); // 0, 2, 4, 6, 8, 10
}
```

---

## 2. `while` Loop

### What
A loop where you **don't know exactly how many times** it will run —
you just know a condition to keep going and a condition to stop.

### Why
When the number of iterations is not fixed — it depends on something
that can change at any point — `while` loop is the right choice.

### How

```
while(condition) {
    // code to run
}
```

```js
// Keep counting until I say stop
let i = 1;

while(i <= 10) {
    console.log(i);
    i++;
}
```

**Explanation:**
- `i = 1` → start from 1 (declared outside the loop)
- `i <= 10` → keep going as long as this is true
- `i++` → move forward — without this it will run forever (infinite loop)
- Once `i` becomes 11 — condition is false — loop stops

Think of it as:
> **Where to start → When to stop → How to move**
> (How many times it will run — no guarantee)

---

### Real World Example of `while`

```js
// Keep asking for input until user types "hello"
let userInput = "";

while(userInput !== "hello") {
    userInput = prompt("Say hello to continue:");
}

console.log("You said hello — moving forward!");
```

**Explanation:**
We don't know how many times the user will type the wrong thing.
It could be 1 time or 100 times — no fixed count.
The loop just keeps running until the condition becomes false.
This is exactly where `while` makes more sense than `for`.

---

## Mindset — When to Use Which Loop

This is the most important thing to understand about loops.

| Situation | Loop to Use |
|-----------|-------------|
| Count from 1 to 40 | `for` — start, end, step all known |
| Count from 20 to 30 | `for` — start, end, step all known |
| Keep going until user says "hello" | `while` — end point is not fixed |
| Print all items in a list of 10 | `for` — count is known |
| Keep retrying until server responds | `while` — count not known |
| Run exactly 5 times | `for` — fixed count |

---

### Examples with Code

**1 to 40 → `for` loop**
```js
for(let i = 1; i <= 40; i++) {
    console.log(i);
}
```

**20 to 30 → `for` loop**
```js
for(let i = 20; i <= 30; i++) {
    console.log(i);
}
```

**Keep going until condition → `while` loop**
```js
let input = "";

while(input !== "hello") {
    input = prompt("Type hello to stop:");
}
console.log("Loop ended!");
```

---

## `for` vs `while` — Comparison

| Feature              | `for` loop                     | `while` loop                        |
|----------------------|--------------------------------|-------------------------------------|
| When to use          | Fixed number of iterations     | Unknown number of iterations        |
| Start, stop, step    | All written in one line        | Start outside, stop in condition    |
| Readability          | Clean for counted loops        | Clean for condition-based loops     |
| Risk of infinite loop| Lower — step is always visible | Higher — easy to forget updating    |
| Example              | Print 1 to 100                 | Keep going until user says "hello"  |

---

## Quick Reference

> `for` → you know **exactly** how many times → start, end, step in one line
> `while` → you know the **condition to stop** but not the count
> Always update the variable inside `while` — otherwise infinite loop
> Think: **fixed count → `for`** | **condition based → `while`**

---

# Loops — Part 2


## 1. `do...while` Loop

### What
A loop that **runs the code block at least once** — no matter what the condition is.
After the first run it checks the condition — if true, it keeps running.

### Why
In a normal `while` loop — if the condition is false from the start,
the code never runs even once.
But sometimes you **must run the code at least once** before checking the condition.
That is exactly where `do...while` is used.

### How

```
start
do {
    // code
    change
} while(condition);
```

```js
let i = 1;

do {
    console.log(i);
    i++;
} while(i <= 5);

// Output: 1 2 3 4 5
```

**Explanation:**
- Code inside `do { }` runs first — no condition check at this point
- After running, `while(condition)` is checked
- If true → runs again | If false → loop stops
- Guaranteed to run **at least once**

---

### The Special Case — Condition is False from the Start

This is what makes `do...while` different from `while`.

```js
// while loop — condition false from start
let i = 10;

while(i < 5) {
    console.log("while:", i); // never runs
}

// do...while — runs once even if condition is false
let j = 10;

do {
    console.log("do while:", j); // runs once — prints 10
    j++;
} while(j < 5); // false — but already ran once
```

**Explanation:**
`while` checks condition first — if false, code never runs.
`do...while` runs code first — then checks condition.
So even with `j = 10` and condition `j < 5` being false — it still ran once.

---

### Real World Scenario

The most common real world use of `do...while` is
showing a **menu or prompt at least once**:

```js
let choice;

do {
    choice = prompt("Enter 1 to continue or 0 to exit:");
} while(choice !== "0");

console.log("Exited!");
```

**Explanation:**
The prompt must show at least once — you can't check the input
before even asking for it.
After the first input, it checks — if user typed `"0"` → stop,
otherwise → ask again.
This is a perfect `do...while` scenario.

---

### `while` vs `do...while`

| Feature                    | `while`                        | `do...while`                    |
|----------------------------|--------------------------------|---------------------------------|
| When condition checked     | Before running the code        | After running the code          |
| Minimum runs               | 0 — may never run              | 1 — always runs at least once   |
| Use case                   | Condition must be true first   | Code must run at least once     |
| Example                    | Keep going if server is alive  | Show menu at least once         |

---

## 2. `break` and `continue`

---

## `break`

### What
`break` completely **stops the loop** and exits it immediately.
No more iterations happen after `break`.

### Why
Sometimes you are searching for something inside a loop —
once you find it, there is no point in continuing the loop.
`break` lets you exit early and saves unnecessary iterations.

### How

```js
for(let i = 1; i <= 10; i++) {
    if(i === 5) break; // stop the loop when i is 5
    console.log(i);
}

// Output: 1 2 3 4
```

**Explanation:**
Loop starts from 1 — when `i` becomes `5`, `break` fires.
The loop exits completely — `5` and everything after is never printed.

---

### Real World Scenario for `break`

```js
let users = ["Alice", "Bob", "Harsh", "Charlie"];
let target = "Harsh";

for(let i = 0; i < users.length; i++) {
    if(users[i] === target) {
        console.log("Found at index:", i); // Found at index: 2
        break; // no need to keep searching
    }
}
```

**Explanation:**
Once the user is found — there is no reason to loop through the rest.
`break` exits the loop immediately after finding the target.
This makes the code more efficient.

---

## `continue`

### What
`continue` **skips the current iteration** and jumps to the next one.
The loop does not stop — it just skips that one step.

### Why
When you want to skip certain values that don't meet a condition
but still want the loop to keep running for the rest.

### How

```js
for(let i = 1; i <= 10; i++) {
    if(i === 5) continue; // skip 5, keep going
    console.log(i);
}

// Output: 1 2 3 4 6 7 8 9 10
```

**Explanation:**
When `i === 5` — `continue` fires, the `console.log` below it is skipped.
Loop moves to next iteration — `i` becomes `6` and continues normally.
`5` is the only number missing from the output.

---

### Real World Scenario for `continue`

```js
// Print only odd numbers
for(let i = 1; i <= 10; i++) {
    if(i % 2 === 0) continue; // skip even numbers
    console.log(i);
}

// Output: 1 3 5 7 9
```

**Explanation:**
Every even number gets skipped using `continue`.
Loop keeps running — just skips even numbers and prints odd ones.

---

## `break` vs `continue` — Difference

| Feature         | `break`                          | `continue`                        |
|-----------------|----------------------------------|-----------------------------------|
| What it does    | Exits the loop completely        | Skips current iteration only      |
| Loop after it   | Stops — no more iterations       | Continues with next iteration     |
| Use case        | Found what you need — stop       | Skip specific values — keep going |
| Example         | Stop when target is found        | Skip even numbers                 |

---

### Side by Side

```js
// break — exits completely at 5
for(let i = 1; i <= 8; i++) {
    if(i === 5) break;
    console.log(i);
}
// Output: 1 2 3 4

// continue — skips 5, keeps going
for(let i = 1; i <= 8; i++) {
    if(i === 5) continue;
    console.log(i);
}
// Output: 1 2 3 4 6 7 8
```

---

## Quick Reference

> `do...while` → runs **at least once** — condition checked after first run
> Use `do...while` when code must run before the condition is checked
> `break` → **exits the loop** completely — no more iterations
> `continue` → **skips current iteration** — loop keeps going
> `break` = stop everything | `continue` = skip this one, move to next

---

## How to Identify Which Loop to Use

This is a thinking skill — before writing any loop, ask yourself these questions:

---

### The Three Questions to Ask

**1. Do I know the exact count of iterations?**
**2. Do I have a condition to stop?**
**3. Must the code run at least once before checking?**

---

### Decision Flow

```
Do I know the exact number of iterations?
        |
       YES → use for loop
        |
        NO → Does the code need to run at least once?
                    |
                   YES → use do...while
                    |
                    NO → use while loop
```

---

### Identifying by Scenario

| Scenario | Loop | Reason |
|----------|------|--------|
| Print numbers 1 to 100 | `for` | Fixed count — start and end known |
| Loop through a list of 10 items | `for` | Count is known — length of list |
| Keep asking until user types "yes" | `while` | Count not fixed — depends on user |
| Retry until server responds | `while` | Count unknown — depends on server |
| Show a menu then check choice | `do...while` | Must show menu at least once |
| Loop through an array | `forEach` | Made exactly for arrays — cleaner |
| Print even numbers from 1 to 50 | `for` | Fixed range — start and end known |
| Keep running until battery is 0% | `while` | Condition based — count not fixed |

---

### Simple Rule to Remember

> **Fixed count or range** → `for`
> **Condition based, unknown count** → `while`
> **Must run at least once** → `do...while`
> **Looping over an array** → `forEach`

---

### Code Examples for Each

```js
// for — fixed count
for(let i = 1; i <= 10; i++) {
    console.log(i);
}

// while — condition based
let fuel = 100;
while(fuel > 0) {
    console.log("Driving... fuel:", fuel);
    fuel -= 10;
}

// do...while — must run at least once
let input;
do {
    input = prompt("Enter your name:");
} while(input === "");

// forEach — looping over array
let names = ["Harsh", "Alice", "Bob"];
names.forEach(function(name) {
    console.log(name);
});
```

---

## String Interpolation

### What
String interpolation is a way to **embed variables or expressions
directly inside a string** without using `+` to join them.

### Why
Before string interpolation, to include a variable in a string
you had to break the string and join with `+` — messy and hard to read.
String interpolation solves this by letting you write everything in one clean line.

### How
Use **backticks** (`` ` ``) instead of quotes, and wrap variables with `${}`.

```js
let name = "Harsh";
let age = 21;

// Old way — using + (string concatenation)
let msg1 = "Hello, my name is " + name + " and I am " + age + " years old.";

// New way — string interpolation (template literals)
let msg2 = `Hello, my name is ${name} and I am ${age} years old.`;

console.log(msg1); // Hello, my name is Harsh and I am 21 years old.
console.log(msg2); // Hello, my name is Harsh and I am 21 years old.
```

**Explanation:**
Both give the same output — but the backtick version is much cleaner.
`${}` acts like a placeholder — whatever is inside it gets evaluated
and placed directly inside the string.

---

### You Can Put Expressions Inside `${}`

Not just variables — any valid JavaScript expression works inside `${}`.

```js
let a = 10;
let b = 20;

console.log(`Sum of ${a} and ${b} is ${a + b}`);
// Output: Sum of 10 and 20 is 30

console.log(`Is a greater? ${a > b}`);
// Output: Is a greater? false
```

---

### Multi-line Strings

With backticks you can also write strings across multiple lines
without any special characters.

```js
// Old way — ugly
let old = "Line 1\n" + "Line 2\n" + "Line 3";

// New way — clean
let modern = `Line 1
Line 2
Line 3`;

console.log(modern);
```

---

### Benefits of String Interpolation

| Feature | Old way (`+`) | String Interpolation (`` ` ``) |
|---------|--------------|-------------------------------|
| Readability | Hard to read with many variables | Clean and easy to read |
| Expressions | Have to break string | Write directly inside `${}` |
| Multi-line | Need `\n` | Just press enter |
| Error prone | Easy to miss a `+` or space | Less chance of mistakes |

---

## `prompt`

### What
`prompt` is a **built-in browser function** that shows a popup dialog box
asking the user to type something.
It **returns whatever the user typed** as a string.

### Why
When you need to take input from the user directly in the browser
without building a full HTML form — `prompt` is the quickest way.

### How

```js
let name = prompt("What is your name?");
console.log(`Hello, ${name}!`);
```

**Explanation:**
- Browser shows a popup with the message `"What is your name?"`
- User types something and clicks OK
- Whatever the user typed is returned and stored in `name`
- If user clicks Cancel → returns `null`

---

### Important Things About `prompt`

**1. Always returns a string**
```js
let age = prompt("Enter your age:");
console.log(typeof age); // "string" — even if user types a number

// Convert to number if needed
let ageNum = Number(prompt("Enter your age:"));
console.log(typeof ageNum); // "number"
```

**2. Returns `null` if user cancels**
```js
let input = prompt("Enter something:");

if(input === null) {
    console.log("User cancelled");
} else {
    console.log(`You entered: ${input}`);
}
```

**3. Using `prompt` with a loop**
```js
let userInput;

do {
    userInput = prompt("Type 'hello' to continue:");
} while(userInput !== "hello");

console.log("You said hello!");
```

**Explanation:**
This is a perfect `do...while` + `prompt` combo.
Prompt must show at least once — and keeps showing until user types `"hello"`.

---

### Note
`prompt` only works in the **browser** — not in Node.js.
For taking input in Node.js, different methods are used.

---

## Quick Reference

> **Fixed count** → `for` | **Unknown count** → `while` | **At least once** → `do...while` | **Array** → `forEach`
> String interpolation → use backticks `` ` `` and `${}` for variables
> `${}` can hold variables, expressions, or any valid JS code
> `prompt` → takes input from user in browser — always returns a string
> If user cancels `prompt` → returns `null`

---
>for-of, foreach for arrays (we will learn it in arrays section)

>for-in, Object.entries for objects (we will learn it in object section)

---































