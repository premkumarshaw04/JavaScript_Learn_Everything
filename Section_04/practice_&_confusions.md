# Section 4: Practice Questions & Common Confusions — Control Flow

---

## Practice Questions

---

### Question 1 — Grade Calculator

**Problem:**
Write a function `getGrade(score)` that takes a student's marks (0 to 100)
and returns the grade based on this logic:

| Marks    | Grade         |
|----------|---------------|
| 90 - 100 | A+            |
| 80 - 89  | A             |
| 70 - 79  | B             |
| 60 - 69  | C             |
| 33 - 59  | D             |
| 0 - 32   | Fail          |
| Anything else | Invalid marks |

---

**Solution 1 — Using `if / else if / else`**

```js
function getGrade(score) {
    if(score >= 90 && score <= 100) {
        return "A+";
    } else if(score >= 80 && score <= 89) {
        return "A";
    } else if(score >= 70 && score <= 79) {
        return "B";
    } else if(score >= 60 && score <= 69) {
        return "C";
    } else if(score >= 33 && score <= 59) {
        return "D";
    } else if(score >= 0 && score <= 32) {
        return "Fail";
    } else {
        return "Invalid marks";
    }
}

console.log(getGrade(78)); // B
```

**Explanation:**
Each condition checks a range using `&&`.
For `score = 78` — first three conditions are checked:
- `78 >= 90` → false → skip
- `78 >= 80` → false → skip
- `78 >= 70 && 78 <= 79` → true → return `"B"` ✅

---

**Solution 2 — Using Early Return (Cleaner)**

```js
function getGrade(score) {
    if(score >= 90 && score <= 100) return "A+";
    if(score >= 80 && score <= 89) return "A";
    if(score >= 70 && score <= 79) return "B";
    if(score >= 60 && score <= 69) return "C";
    if(score >= 33 && score <= 59) return "D";
    if(score >= 0 && score <= 32) return "Fail";
    return "Invalid marks";
}

console.log(getGrade(78)); // B
```

**Explanation:**
Same logic — but with early return pattern.
As soon as a condition matches, the function returns immediately.
No `else if` needed — each `if` is independent.
The last `return "Invalid marks"` acts as the fallback —
if no condition matched, it means the score is invalid.
This version is **cleaner and easier to read**.

---

### Question 2 — Rock Paper Scissors

```js
function rps(user, computer) {
    if(user === computer) return "draw";

    // all conditions where user wins
    if(user === "rock"    && computer === "scissor") return "user";
    if(user === "scissor" && computer === "paper")   return "user";
    if(user === "paper"   && computer === "rock")    return "user";

    // if none of the above — computer wins
    return "computer";
}

console.log(rps("rock", "rock"));   // draw
console.log(rps("rock", "scissor")); // user
console.log(rps("paper", "rock"));   // user
console.log(rps("rock", "paper"));   // computer
```

**Explanation — Step by Step:**

For `rps("rock", "rock")`:
- `user === computer` → `"rock" === "rock"` → `true` → return `"draw"` ✅

For `rps("rock", "scissor")`:
- `user === computer` → false → skip
- `user === "rock" && computer === "scissor"` → true → return `"user"` ✅

For `rps("rock", "paper")`:
- `user === computer` → false → skip
- All three user-win conditions → false → skip
- Falls through to the last line → return `"computer"` ✅

**Why this is a great example of early return:**
- Draw is checked first — most obvious case
- All winning conditions for user are checked next
- If nothing matched — computer wins by default
- No need for a separate "computer wins" condition — the last `return` handles it

---

## Common Confusions

---

### 1. Fall-Through in Switch Case

```js
let x = 2;

switch(x) {
    case 2:
        console.log("Two");
    case 3:
        console.log("Three");
}
```

**Output:**
```
Two
Three
```

**Explanation:**
`x = 2` matches `case 2` — so `"Two"` is printed.
But there is **no `break`** after `case 2`.
So JavaScript keeps going and runs `case 3` as well — even though `x` is not `3`.
This is called **fall-through** — a very common bug when `break` is forgotten.

**Fix — Always add `break` after each case:**

```js
let x = 2;

switch(x) {
    case 2:
        console.log("Two");
        break; // ✅ stops here
    case 3:
        console.log("Three");
        break;
}

// Output: Two
```

**When is fall-through useful on purpose?**
Sometimes you want multiple cases to run the same code:

```js
let day = "Saturday";

switch(day) {
    case "Saturday":
    case "Sunday":
        console.log("Weekend"); // ✅ runs for both Saturday and Sunday
        break;
    default:
        console.log("Weekday");
}
```

**Explanation:**
`case "Saturday"` has no `break` — so it falls through to `case "Sunday"`.
Both share the same block of code.
This is the **only time fall-through is used on purpose**.

---

## Quick Reference

> Early return → return immediately when condition matches — no need for `else if`
> The last `return` in early return pattern acts as the **default / fallback**
> Switch fall-through → happens when `break` is missing — always add `break`
> Fall-through on purpose → useful when multiple cases share the same code