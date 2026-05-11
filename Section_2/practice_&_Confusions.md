# Practice Questions & Common Confusions — Section 2

---

## Predict the Output

---

### Question 1

```js
true + false
```

**Output:** `1`

**Why?**
JavaScript converts booleans to numbers during math operations.
`true` becomes `1` and `false` becomes `0`.
So it becomes `1 + 0 = 1`.

---

### Question 2

```js
null + 1
```

**Output:** `1`

**Why?**
JavaScript converts `null` to `0` during math operations.
So it becomes `0 + 1 = 1`.

---

### Question 3

```js
5 + "5"
```

**Output:** `"55"`

**Why?**
`+` has two jobs — addition and concatenation.
When a string is involved, `+` chooses concatenation.
So `5` gets converted to `"5"` and joined → `"55"`.

---

### Question 4

```js
!!undefined
```

**Output:** `false`

**Why?**
`undefined` is a **falsy value**.
First `!` converts it to `true` (flips it).
Second `!` flips it back to `false`.
So `!!undefined` gives the actual boolean value → `false`.

---

## Common Confusions

---

### 1. Why is `NaN` of type `number`?

```js
typeof NaN === 'number' // true
```

**Simple Explanation:**
`NaN` stands for **Not a Number** — but it is the **result of a failed number operation**.

```js
2 * "Harsh" // NaN — you tried math on a string, it failed
```

Since it came from a **mathematical operation**, JavaScript keeps its type as `number`.
Think of it like — the operation was numeric, it just failed to produce a valid result.

> **Interview answer:**
> `NaN` is what you get when a math operation fails.
> The operation was numeric — so the type stays `number`.
> Just a quirk of JavaScript.

---

### 2. `undefined` vs `null`

```js
let x;
console.log(x); // undefined — JS assigned this automatically
```

```js
let y = null;
console.log(y); // null — you assigned this intentionally
```

| | `undefined` | `null` |
|---|---|---|
| Who sets it? | JavaScript automatically | You intentionally |
| Meaning | No value assigned yet | Value is deliberately empty |
| Type | `"undefined"` | `"object"` (JS bug) |

> **Interview answer:**
> `undefined` means JavaScript hasn't received a value yet.
> `null` means you intentionally said — this variable has no value right now.

---

### 3. Why `"5" + 1 = "51"` but `"5" - 1 = 4`?

```js
"5" + 1  // "51"
"5" - 1  // 4
```

**Simple Explanation:**

The `+` operator has **two jobs:**
- Add numbers
- Concatenate strings

When a string is involved — `+` picks concatenation.
So `1` becomes `"1"` and joins with `"5"` → `"51"`.

The `-` operator has **only one job** — subtraction.
No such thing as "string subtraction" exists.
So JS forcefully converts `"5"` to `5` and does `5 - 1 = 4`.

```js
"5" + 1  // "51" — + chose concatenation
"5" - 1  // 4    — - forced number conversion
"5" * 2  // 10   — * forced number conversion
"5" / 2  // 2.5  — / forced number conversion
```

> **Interview answer:**
> `+` is overloaded — string always wins with `+`.
> `-`, `*`, `/` have only one job so JS converts string to number automatically.

---

### 4. Implicit vs Explicit Conversion

---

#### Implicit Conversion (Type Coercion)
JavaScript **automatically** converts one type to another
without you asking for it.

```js
"5" + 1     // "51"  — JS auto converted 1 to "1"
true + 1    // 2     — JS auto converted true to 1
null + 1    // 1     — JS auto converted null to 0
```

You did not ask for any conversion — JS did it on its own.
This is called **implicit conversion** or **type coercion**.

---

#### Explicit Conversion
**You manually** convert a value from one type to another
using built-in functions.

```js
Number("5")       // 5     — string to number
Number(true)      // 1     — boolean to number
Number(null)      // 0     — null to number
Number(undefined) // NaN   — undefined to number

String(5)         // "5"   — number to string
String(true)      // "true"

Boolean(0)        // false
Boolean("Harsh")  // true
Boolean("")       // false
```

---

#### Difference Between Implicit and Explicit

| Feature       | Implicit                        | Explicit                         |
|---------------|---------------------------------|----------------------------------|
| Done by       | JavaScript automatically        | You manually                     |
| Control       | No control                      | Full control                     |
| Readability   | Can be confusing                | Clear and readable               |
| Risk          | Can cause unexpected bugs       | Safer and predictable            |
| Example       | `"5" + 1 → "51"`               | `Number("5") + 1 → 6`           |

> **Interview answer:**
> Implicit conversion is automatic — JS does it behind the scenes and
> can cause unexpected results.
> Explicit conversion is manual — you use `Number()`, `String()`, `Boolean()`
> to convert intentionally. Always prefer explicit conversion for safer code.

---

## Quick Summary Table

| Question          | Output  | Reason                              |
|-------------------|---------|-------------------------------------|
| `true + false`    | `1`     | `true=1`, `false=0` → `1+0`        |
| `null + 1`        | `1`     | `null=0` → `0+1`                   |
| `5 + "5"`         | `"55"`  | `+` picks concatenation             |
| `!!undefined`     | `false` | `undefined` is falsy                |