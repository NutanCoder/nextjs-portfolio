---
title: "this in Arrow vs Regular Functions"
date: "2025-07-22"
---

# `this` in Arrow vs Regular Functions in JavaScript

Understanding how `this` behaves differently in **arrow functions** vs **regular functions** is key in JavaScript.

## ✅ Regular Function

- `this` is dynamic.
- Depends on how the function is **called**.

### Example:

```js
const obj = {
  name: "Nutan",
  greet: function () {
    console.log("Hello", this.name);
  },
};

obj.greet(); // Hello Nutan
```

In regular functions, `this` refers to the object that called the function.

---

## ✅ Arrow Function

- `this` is **lexically bound**.
- Inherits `this` from the surrounding scope.

### Example:

```js
const obj = {
  name: "Nutan",
  greet: () => {
    console.log("Hello", this.name);
  },
};

obj.greet(); // Hello undefined (in strict mode)
```

In arrow functions, `this` does not refer to the calling object. Instead, it inherits from the parent scope — often resulting in `undefined` in object methods.

---

## 🔍 Comparison Table

| Feature         | Arrow Function         | Regular Function         |
|------------------|-------------------------|---------------------------|
| `this` context   | Lexical (static)        | Dynamic (depends on call)|
| Suitable for     | Callbacks, `map`, etc.  | Object methods, constructors |
| Rebinding `this` | Not possible            | Possible via `bind`, `call`, `apply` |

---

## ✅ Conclusion

Use **arrow functions** for shorter syntax and lexical `this`, especially in callbacks. Use **regular functions** when you need dynamic context like in object methods or constructors.