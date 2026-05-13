# Section 5: Practice Questions & Common Confusions — Loops

---

## Practice Questions

---

### Question 1 — Print numbers from 1 to 10 using a `for` loop

```js
for(let i = 1; i <= 10; i++) {
    console.log(i);
}
// Output: 1 2 3 4 5 6 7 8 9 10
```

**Explanation:**
Start at `1`, go until `i <= 10`, increment by `1` each time.
Classic fixed count scenario — `for` loop is the right choice.

---

### Question 2 — Print numbers from 10 to 1 using a `while` loop

```js
let i = 10;

while(i >= 1) {
    console.log(i);
    i--;
}
// Output: 10 9 8 7 6 5 4 3 2 1
```

**Explanation:**
Start at `10`, condition is `i >= 1`, decrement by `1` each time.
`i--` moves us backward — without it, infinite loop.

---

### Question 3 — Print even numbers from 1 to 20 using a `for` loop

```js
for(let i = 1; i <= 20; i++) {
    if(i % 2 === 0) {
        console.log(i);
    }
}
// Output: 2 4 6 8 10 12 14 16 18 20
```

**Explanation:**
Loop runs from 1 to 20.
`i % 2 === 0` checks if the number is divisible by 2 — that means it is even.
Only even numbers pass the condition and get printed.

---

### Question 4 — Print odd numbers from 1 to 15 using a `while` loop

```js
let i = 1;

while(i <= 15) {
    if(i % 2 !== 0) {
        console.log(i);
    }
    i++;
}
// Output: 1 3 5 7 9 11 13 15
```

**Explanation:**
`i % 2 !== 0` checks if the number is NOT divisible by 2 — that means it is odd.
`i++` keeps moving forward — loop runs until `i` exceeds `15`.

---

### Question 5 — Multiplication table of 5 using string interpolation

```js
for(let i = 1; i <= 10; i++) {
    console.log(`5 * ${i} = ${5 * i}`);
}
```

**Output:**
```
5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
5 * 4 = 20
5 * 5 = 25
5 * 6 = 30
5 * 7 = 35
5 * 8 = 40
5 * 9 = 45
5 * 10 = 50
```

**Explanation:**
`${i}` places the current value of `i` inside the string.
`${5 * i}` calculates the result and places it directly — no need for a separate variable.
This is the power of string interpolation.

---

### Question 6 — Sum of numbers from 1 to 100

```js
let sum = 0;

for(let i = 1; i <= 100; i++) {
    sum += i; // sum = sum + i
}

console.log(`Sum from 1 to 100 is: ${sum}`);
// Output: Sum from 1 to 100 is: 5050
```

**Explanation:**
`sum` starts at `0` — it is an accumulator variable.
Every iteration adds the current `i` to `sum`.
After the loop ends, `sum` holds the total of all numbers from 1 to 100.

---

### Question 7 — Numbers between 1 to 50 divisible by 3

```js
for(let i = 1; i <= 50; i++) {
    if(i % 3 === 0) {
        console.log(i);
    }
}
// Output: 3 6 9 12 15 18 21 24 27 30 33 36 39 42 45 48
```

**Explanation:**
`i % 3 === 0` checks if the number leaves no remainder when divided by 3.
If true — it is divisible by 3 — print it.

---

### Question 8 — Even or Odd for each number up to user's input

```js
let num = Number(prompt("Enter a number:"));

for(let i = 1; i <= num; i++) {
    if(i % 2 === 0) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    }
}
```

**Output (if user enters 5):**
```
1 is odd
2 is even
3 is odd
4 is even
5 is odd
```

**Explanation:**
`prompt` takes input from the user — returns a string.
`Number()` converts it to a number so the loop works correctly.
String interpolation is used to print clean readable output.
`i % 2 === 0` → even | else → odd.

---

### Question 9 — Count numbers divisible by both 3 and 5 between 1 to 100

```js
let count = 0;

for(let i = 1; i <= 100; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        count++;
    }
}

console.log(`Count: ${count}`);
// Output: Count: 6
```

**Explanation:**
`i % 3 === 0 && i % 5 === 0` — both conditions must be true at the same time.
Numbers divisible by both 3 and 5 are: 15, 30, 45, 60, 75, 90 — total 6.
`count++` increments the counter every time a match is found.

---

## `break` and `continue` Questions

---

### Question 1 — Stop at first multiple of 7

```js
for(let i = 1; i <= 100; i++) {
    if(i % 7 === 0) {
        console.log(`First multiple of 7 is: ${i}`);
        break;
    }
}
// Output: First multiple of 7 is: 7
```

**Explanation:**
Loop runs from 1 to 100.
As soon as a multiple of 7 is found — print it and `break` immediately.
No need to keep checking the rest — job is done.

---

### Question 2 — Skip multiples of 3

```js
for(let i = 1; i <= 20; i++) {
    if(i % 3 === 0) continue;
    console.log(i);
}
// Output: 1 2 4 5 7 8 10 11 13 14 16 17 19 20
```

**Explanation:**
When `i % 3 === 0` — `continue` skips that iteration.
`console.log` below it never runs for those numbers.
Loop keeps going for all other numbers.

---

### Question 3 — Print first 5 odd numbers only then stop

```js
let count = 0;

for(let i = 1; i <= 100; i++) {
    if(i % 2 === 0) continue; // skip even numbers

    console.log(i);
    count++;

    if(count === 5) break; // stop after 5 odd numbers
}

// Output: 1 3 5 7 9
```

**Explanation:**
`count` tracks how many odd numbers have been printed.
`continue` skips even numbers — they are ignored completely.
When an odd number is found — print it and increment `count`.
Once `count` reaches `5` — `break` exits the loop.
Three tools used together: `if`, `continue`, `counter` + `break`.

---

## Common Confusions

---

### 1. When to Use `for` vs `while`

**Simple way to decide:**

Use `for` when you know **start, end and step** — all three are clear.
Use `while` when you only know **when to stop** — the count is not fixed.

```js
// for — start(1), end(10), step(i++) all known
for(let i = 1; i <= 10; i++) {
    console.log(i);
}

// while — only condition known — count not fixed
let userInput = "";
while(userInput !== "stop") {
    userInput = prompt("Type stop to exit:");
}
```

**Explanation:**
In the `for` loop — everything about the loop is decided before it starts.
In the `while` loop — you have no idea how many times it will run.
It could be 1 time or 1000 times — depends entirely on the condition.

> If you can write the loop as `for(start; end; step)` cleanly → use `for`
> If you find yourself only writing a condition and nothing else → use `while`

---

## Quick Reference

> `i % 2 === 0` → even | `i % 2 !== 0` → odd
> `i % n === 0` → divisible by n
> Accumulator pattern → `let sum = 0` then `sum += i` inside loop
> `break` → stop the loop completely
> `continue` → skip current iteration, keep going
> `for` → start + end + step all known
> `while` → only condition known, count not fixed