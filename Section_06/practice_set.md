# Section 6: Practice Questions — Functions

---

### Question 1 — Predict the Output

```js
greet();

function greet() {
    console.log("Hello");
}
```

**Output:** `Hello`

**Explanation:**
Function declarations are fully hoisted — the entire function is moved to the top
by JavaScript before the code runs.
So calling `greet()` before its declaration works perfectly fine.

---

### Question 2 — Convert to Arrow Function

```js
// Normal function
function multiply(a, b) {
    return a * b;
}

// Arrow function
const multiply = (a, b) => a * b;

console.log(multiply(4, 5)); // 20
```

**Explanation:**
Single line arrow function — no need for `{}` and `return`.
`(a, b) => a * b` is cleaner and does exactly the same thing.

---

### Question 3 — Identify Parameters and Arguments

```js
function welcome(name) {  // "name" → PARAMETER
    console.log(name);
}

welcome("Harsh");         // "Harsh" → ARGUMENT
```

**Explanation:**
`name` is the parameter — a placeholder defined when the function is created.
`"Harsh"` is the argument — the actual value passed when the function is called.

---

### Question 4 — How Many Parameters and Arguments?

```js
function demo(a, b, c) {  // 3 parameters
}

demo(1, 2); // 2 arguments passed
```

**Output:** `c` will be `undefined`

**Explanation:**
Function has 3 parameters — `a`, `b`, `c`.
But only 2 arguments are passed — `1` and `2`.
`a = 1`, `b = 2`, `c` receives nothing → JavaScript sets it to `undefined`.

---

### Question 5 — Predict the Output (Default Parameter)

```js
function sayHi(name = "Guest") {
    console.log("Hi", name);
}

sayHi();
```

**Output:** `Hi Guest`

**Explanation:**
No argument is passed — so `name` falls back to its default value `"Guest"`.
Default parameters kick in only when no argument is provided.

---

### Question 6 — What Does `...` Mean in Parameters?

```js
function abcd(...val) {
    console.log(val);
}

abcd(1, 2, 3, 4, 5, 6);
```

**Output:** `[1, 2, 3, 4, 5, 6]`

**Explanation:**
`...val` is a **rest parameter** — it collects all passed arguments
into a single array called `val`.
No matter how many arguments you pass — all of them land in that array.

---

### Question 7 — Use Rest Parameter to Get Total Score

```js
function getScore(...scores) {
    let total = 0;
    scores.forEach(function(val) {
        // scores ke har ek value ke liye function chalega
        // har baar ek ek value, val ke andar aayegi
        total = total + val;
    });
    return total;
}

console.log(getScore(10, 12, 14, 18)); // 54
```

**Output:** `54`

**Explanation:**
`...scores` collects all arguments into an array — `[10, 12, 14, 18]`.
`forEach` loops through each value — each value comes into `val` one by one.
`total` keeps adding each value.
After the loop — `total` is `54` and returned.

---

### Question 8 — Fix Using Early Return

```js
// Before fix
function checkAge(age) {
    if(age < 18) {
        console.log("Too young");
    } else {
        console.log("Allowed");
    }
}
```

```js
// After fix — using early return
function checkAge(age) {
    if(age < 18) return "Too young";
    return "Allowed";
}

console.log(checkAge(23)); // Allowed
```

**Explanation:**
Early return removes the need for `else`.
If `age < 18` — return immediately.
If not — the function naturally falls to the next `return`.
Cleaner and easier to read.

---

### Question 9 — What is the Return Value?

```js
function f() {
    return;
}

console.log(f()); // undefined
```

**Output:** `undefined`

**Explanation:**
`return` with no value returns `undefined`.
JavaScript treats an empty `return` as returning nothing — which is `undefined`.

---

### Question 10 — Assign Function to Variable and Call It

```js
const greet = function() {
    console.log("Hello!");
}

greet(); // Hello!
```

**Explanation:**
Yes — functions can be stored in variables just like any other value.
This is a function expression.
`greet` holds the function — `greet()` calls it.

---

### Question 11 — Pass a Function Into Another Function

```js
function abcd(val) {
    val(); // calling the function that was passed in
}

abcd(function() {
    console.log("Hello");
});
```

**Output:** `Hello`

**Explanation:**
`abcd` receives a function as argument — stored in `val`.
Inside, `val()` calls that function.
The function passed at call time is called a **callback function**.
This works because of **first class functions** in JavaScript.

---

### Question 12 — `.map()` with a Function

```js
[1, 2, 3].map(function(x) {
    return x * 2;
});
```

**Output:** `[2, 4, 6]`

**Explanation:**
`map` is a higher order function — it accepts a function as argument.
It runs that function for every element in the array.
`x` gets each value one by one — `1`, `2`, `3`.
Each value is multiplied by `2` and returned.
`map` collects all returned values into a new array — `[2, 4, 6]`.

---

### Question 13 — Pure or Impure?

```js
let total = 0;

function addToTotal(num) {
    total += num; // modifying outer variable
}
```

**Answer:** ❌ Impure Function

**Explanation:**
`addToTotal` is modifying `total` — a variable that lives outside the function.
Any function that changes an outer variable is an **impure function**.
It has a side effect — the outer world is changed after calling it.

---

### Question 14 — Convert to Pure Function

```js
// Impure — modifies outer variable
let total = 0;
function addToTotal(num) {
    total += num;
}

// Pure — no outer variable touched
function addToTotal(currentTotal, num) {
    return currentTotal + num;
}

let total = 0;
total = addToTotal(total, 5);
console.log(total); // 5
total = addToTotal(total, 10);
console.log(total); // 15
```

**Explanation:**
Instead of modifying the outer `total` directly —
the pure function takes `currentTotal` as a parameter and returns the new value.
Same input always gives same output — no side effects.

---

### Question 15 — What is Closure? When is it Created?

**Closure** is created when an inner function is returned from an outer function
and that inner function uses a variable from the outer function.

Even after the outer function finishes — the inner function
**remembers and keeps access to** the outer function's variable.
That memory is the closure.

```js
function outer() {
    let name = "Harsh"; // outer variable
    return function() {
        console.log(name); // closure — using outer variable
    }
}

let fn = outer();
fn(); // Harsh — outer is done but "name" is still accessible
```

---

### Question 16 — Predict the Output (Closure)

```js
function outer() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
    };
}

const counter = outer();
counter(); // 1
counter(); // 2
```

**Output:**
```
1
2
```

**Explanation:**
`outer()` runs and returns the inner function — stored in `counter`.
`count` starts at `0` — and is kept alive through closure.
First `counter()` → `count` becomes `1` → prints `1`.
Second `counter()` → `count` becomes `2` → prints `2`.
Each call remembers the updated `count` from the previous call.

---

### Question 17 — Convert to IIFE

```js
// Normal function
function init() {
    console.log("Initialized");
}

// Converted to IIFE
(function init() {
    console.log("Initialized");
})();
```

**Output:** `Initialized`

**Explanation:**
Wrapped the function in `()` to make it an expression.
Added `()` at the end to call it immediately.
Runs once — right away — no need to call it separately.

---

### Question 18 — What is the Use of IIFE?

IIFE is used to create **private variables** — variables that are not
accessible from outside the function.

```js
(function() {
    let secret = "hidden"; // private — not accessible outside
    console.log("IIFE ran!");
})();

console.log(secret); // ❌ ReferenceError — not accessible
```

**Real world use case:**
Initializing app configuration once at the start — without leaking
any variables into the global scope.

---

### Question 19 — Predict the Output and Why (Hoisting)

```js
greet();

var greet = function() {
    console.log("Hi");
};
```

**Output:** `TypeError: greet is not a function`

**Explanation:**
`var greet` is hoisted — but only the declaration, not the value.
So at the time `greet()` is called — `greet` is `undefined`, not a function.
Calling `undefined()` throws a `TypeError`.

Internally JavaScript sees it as:
```js
var greet = undefined; // hoisted — but value not set yet
greet();               // ❌ undefined is not a function
greet = function() { console.log("Hi"); }
```

---

### Question 20 — Predict the Output and Why

```js
greet();

function greet() {
    console.log("Hi");
}
```

**Output:** `Hi`

**Explanation:**
Function declarations are **fully hoisted** — the entire function body is moved to the top.
So `greet()` works perfectly even before the declaration line.

---

### Question 21 — BMI Calculator

```js
function bmi(weight, height) {
    return weight / (height * height);
}

console.log(bmi(69, 1.7).toFixed(2)); // 23.88
```

**Explanation:**
BMI formula → `weight / (height * height)`
`weight = 69kg`, `height = 1.7m`
`69 / (1.7 * 1.7)` = `69 / 2.89` = `23.87...`

**What does `.toFixed(2)` do?**
`.toFixed(2)` sets the precision after the decimal point.
It rounds the number to exactly 2 decimal places.
`23.8754... → 23.88`

---

### Question 22 — Reusable Discount Calculator (Higher Order Function)

```js
function discountCalculator(discount) {
    return function(price) {
        return price - price * (discount / 100);
    };
}

let ten = discountCalculator(10);
let twenty = discountCalculator(20);

console.log(ten(1200));   // 1080
console.log(twenty(1600)); // 1280
```

**Explanation — Step by Step:**

`discountCalculator(10)` → runs and returns a function that knows `discount = 10`.
That returned function is stored in `ten`.

`discountCalculator(20)` → runs and returns a function that knows `discount = 20`.
That returned function is stored in `twenty`.

`ten(1200)` → runs the inner function with `price = 1200` and `discount = 10`
→ `1200 - 1200 * (10/100)` = `1200 - 120` = `1080`

`twenty(1600)` → runs with `price = 1600` and `discount = 20`
→ `1600 - 1600 * (20/100)` = `1600 - 320` = `1280`

This is a **closure** — the inner function remembers `discount`
from the outer function even after `discountCalculator` has finished.
This is also a **higher order function** — it returns a function.

---

### Question 23 — Counter Using Closure

```js
function counter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

let c = counter();
console.log(c()); // 1
console.log(c()); // 2
console.log(c()); // 3

let d = counter();
console.log(d()); // 1
console.log(d()); // 2
```

**Explanation:**
`counter()` creates a new `count = 0` and returns the inner function.
`c` and `d` are two **separate calls** to `counter()` —
so they each get their **own separate `count`**.

`c()` calls its own inner function — `count` goes 1 → 2 → 3.
`d()` is a fresh counter — starts from 0 again → 1 → 2.

They don't share `count` — each has its own closure.

---

### Question 24 — Pure Function to Transform a Value

```js
function double(num) {
    return num * 2; // no outer variable touched
}

function square(num) {
    return num * num;
}

console.log(double(5));  // 10
console.log(square(4));  // 16
```

**Explanation:**
Both functions only work with their own parameters.
No outer variable is touched — same input always gives same output.
These are **pure functions**.

---

### Question 25 — Use IIFE to Isolate Variables

```js
(function() {
    let username = "Harsh";   // private — not accessible outside
    let role = "Admin";

    console.log(`${username} is logged in as ${role}`);
})();

console.log(username); // ❌ ReferenceError — not accessible outside
```

**Output:**
```
Harsh is logged in as Admin
ReferenceError: username is not defined
```

**Explanation:**
`username` and `role` are created inside the IIFE.  
Once the IIFE finishes — they are gone.  
Nothing from inside leaks to the outside scope.  
This is the main purpose of IIFE — **variable isolation**.