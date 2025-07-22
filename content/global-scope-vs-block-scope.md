---
title: "Global Scope vs Block Scope"
date: "2025-07-22"
---

# Global Scope vs Block Scope in JavaScript

Understanding **scope** is fundamental in JavaScript. It determines where variables are accessible.

---

## 🌍 Global Scope

- Variables declared **outside any block or function**.
- Accessible **anywhere** in the code.

### Example:

```js
var name = "Nutan";

function greet() {
  console.log("Hello", name);
}

greet(); // Hello Nutan
```

✅ `name` is globally accessible.

---

## 📦 Block Scope

- Introduced with `let` and `const`.
- Limited to the **block `{}`** where it's defined.

### Example:

```js
{
  let age = 25;
  console.log(age); // 25
}
console.log(age); // ❌ ReferenceError: age is not defined
```

Variables defined with `let` or `const` inside `{}` are not accessible outside.

---

## ⚠️ `var` Does NOT Respect Block Scope

```js
{
  var city = "Delhi";
}
console.log(city); // ✅ Delhi
```

❌ `var` is function-scoped, not block-scoped.

---

## 🔍 Comparison Table

| Scope Type     | Keyword(s)     | Accessible From       | Use Case                         |
|----------------|----------------|------------------------|----------------------------------|
| Global Scope   | `var`, `let`, `const` | Anywhere after declaration | App-wide constants, functions   |
| Block Scope    | `let`, `const` | Inside `{}` only       | Loops, conditionals, functions   |

---

## ✅ Best Practices

- Prefer `let` and `const` for **block scope safety**.
- Avoid polluting the global scope.