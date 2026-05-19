# Section 3: Practice Questions & Common Confusions — Operators

---

## Practice Questions — Predict the Output

---

### Question 1

```js
let x = 10;
let y = 20;

if(x > 5 && y < 25){
    console.log("A");
} else {
    console.log("B");
}
```

**Output:** `A`

**Explanation:**
`x > 5` → `10 > 5` → `true`
`y < 25` → `20 < 25` → `true`
`true && true` → `true` — both conditions are true so `"A"` is printed.

---

### Question 2

```js
let isAdmin = true;
let isLoggedIn = false;

if(isAdmin || isLoggedIn){
    console.log("Access granted");
} else {
    console.log("Access denied");
}
```

**Output:** `Access granted`

**Explanation:**
`isAdmin` is `true`, `isLoggedIn` is `false`.
`true || false` → `true` — with `||` only one condition needs to be true.
So `"Access granted"` is printed.

---

### Question 3

```js
let temp = 35;

if(!(temp < 30)){
    console.log("Hot");
} else {
    console.log("Pleasant");
}
```

**Output:** `Hot`

**Explanation:**
`temp < 30` → `35 < 30` → `false`
`!(false)` → `true` — `!` flips `false` to `true`
So the `if` block runs and prints `"Hot"`.

---

### Question 4

```js
let a = 0;

if(a) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}
```

**Output:** `Falsy`

**Explanation:**
`0` is a **falsy value** in JavaScript.
When `a = 0` is used in an `if` condition — it evaluates to `false`.
So the `else` block runs and prints `"Falsy"`.

---

### Question 5

```js
let score = 78;

let grade = score >= 90 ? "A" : score >= 75 ? "B" : score >= 60 ? "C" : "Fail";

console.log(grade);
```

**Output:** `B`

**Explanation:**
`score >= 90` → `78 >= 90` → `false` — skip A
`score >= 75` → `78 >= 75` → `true` — grade is `"B"`
Once a condition is true, the rest are skipped.
This is a **chained ternary** — works like if / else if / else.

---

### Question 6

```js
let points = 120;

let status = points > 100 ? "Gold" : points > 50 ? "Silver" : "Bronze";

console.log(status);
```

**Output:** `Gold`

**Explanation:**
`points > 100` → `120 > 100` → `true`
First condition is true — so `"Gold"` is returned immediately.
Rest of the ternary is skipped.

---

### Question 7

```js
let loggedIn = true;
let hasToken = false;

let access = loggedIn && hasToken ? "Allow" : "Deny";

console.log(access);
```

**Output:** `Deny`

**Explanation:**
`loggedIn && hasToken` → `true && false` → `false`
Since the condition is `false` → `"Deny"` is returned.
Both conditions must be true for `&&` to give `true`.

---

### Question 8 — Pre & Post Increment (Multiple Parts)

---

**Part 1:**
```js
let a = 5;
a++;
console.log(a); // 6
```

**Explanation:**
`a++` increments `a` by 1. `a` becomes `6`.

---

**Part 2:**
```js
let b = 7;
++b;
console.log(b); // 8
```

**Explanation:**
`++b` also increments `b` by 1. `b` becomes `8`.
Here both `a++` and `++b` give the same result because
we are not using the value in the same line — just incrementing.

---

**Part 3:**
```js
let x = 3;
let y = x++;
console.log(x, y); // 4, 3
```

**Output:** `4 3`

**Explanation:**
`x++` is post-increment — first the current value `3` is assigned to `y`,
then `x` is incremented to `4`.
So `y = 3` and `x = 4`.

---

**Part 4:**
```js
let p = 4;
let q = ++p;
console.log(p, q); // 5, 5
```

**Output:** `5 5`

**Explanation:**
`++p` is pre-increment — `p` is incremented to `5` first,
then that updated value `5` is assigned to `q`.
So both `p` and `q` are `5`.

---

**Part 5:**
```js
let m = 10;
console.log(m--); // 10
console.log(m);   // 9
```

**Output:**
```
10
9
```

**Explanation:**
`m--` is post-decrement — current value `10` is returned first (printed),
then `m` is decremented to `9`.
So line 1 prints `10`, line 2 prints `9`.

---

**Part 6:**
```js
let n = 5;
let result = n++ + ++n;
console.log(result); // 12
```

**Output:** `12`

**Explanation:**
Step 1 — `n++` → returns current value `5`, then increments `n` to `6`
Step 2 — `++n` → increments `n` from `6` to `7`, then returns `7`
Step 3 — `5 + 7 = 12`
So `result = 12`.

---

**Part 7:**
```js
let likes = 100;

function likePost(){
    return ++likes;
}

console.log(likePost()); // 101
console.log(likes);      // 101
```

**Output:**
```
101
101
```

**Explanation:**
`++likes` is pre-increment — `likes` is incremented to `101` first,
then returned from the function.
Since `likes` is a variable outside the function,
the change is permanent — so `console.log(likes)` also gives `101`.

---

**Part 8:**
```js
let count = 5;

if(count-- === 5){
    console.log("Matched");
} else {
    console.log("Not Matched");
}
```

**Output:** `Matched`

**Explanation:**
`count--` is post-decrement — the current value `5` is used in the comparison first,
then `count` is decremented to `4`.
So `5 === 5` → `true` → `"Matched"` is printed.
After the `if` block, `count` is `4` — but that doesn't affect the output here.

---

## Common Confusions

---

### 1. `!!` (Double Exclamation) for Truthiness

`!` flips the boolean value.
`!!` flips it twice — giving the **actual boolean nature** of any value.

```js
!!""      // false — empty string is falsy
!!"hello" // true  — non-empty string is truthy
!!0       // false — 0 is falsy
!!1       // true  — non-zero number is truthy
```

**Explanation:**
First `!` converts the value to its opposite boolean.
Second `!` flips it back — now you have the real boolean of that value.

```js
!""   // true  — flipped (opposite)
!!""  // false — flipped back (actual boolean nature)
```

Use `!!` whenever you want to quickly check
if a value is truthy or falsy without writing an `if` condition.

---

### 2. Pre vs Post Increment

```js
let i = 1;
console.log(++i); // 2 — pre-increment: increment first, then use
console.log(i++); // 2 — post-increment: use first, then increment
// now i is 3
```

**Explanation:**

`++i` (Pre-increment):
- Increments `i` first → `i` becomes `2`
- Then returns the updated value → prints `2`

`i++` (Post-increment):
- Returns the current value first → prints `2` (current value at that moment)
- Then increments `i` → `i` becomes `3`

So after both lines — `i` is `3`.

**Simple way to remember:**
> `++i` → increment **before** giving the value
> `i++` → give the value **before** incrementing