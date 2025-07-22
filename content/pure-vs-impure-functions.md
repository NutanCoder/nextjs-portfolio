---
title: "Pure vs Impure Functions"
date: "2025-07-22"
---

# Pure vs Impure Functions in JavaScript

Understanding the difference between **pure** and **impure** functions is crucial for writing predictable, testable code.

## ✅ Pure Functions

A **pure function** is a function that:
- Returns the same output for the same input.
- Has no side effects (does not modify external state).

### Example:

```js
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // Always returns 5
```

✅ No mutation, no reliance on external state.

---

## ❌ Impure Functions

An **impure function**:
- May produce different outputs for the same inputs.
- Causes side effects (e.g., modifies global variables, logs to console, etc.).

### Example:

```js
let counter = 0;

function increment() {
  counter += 1;
  return counter;
}

console.log(increment()); // Changes global state
```

❌ Depends on external state and produces side effects.

---

## 🔍 Comparison Table

| Feature         | Pure Function          | Impure Function              |
|-----------------|------------------------|------------------------------|
| Output          | Same for same input    | May vary                     |
| Side Effects    | None                   | Yes                          |
| Testable        | Easy                   | Hard                         |
| Predictability  | High                   | Low                          |

---

## ✅ Why Prefer Pure Functions?

- Easier to test and debug.
- Enhances reusability and composability.
- Leads to more predictable code — a key concept in functional programming and Redux.