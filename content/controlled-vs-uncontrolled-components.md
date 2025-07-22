---
title: "Controlled vs Uncontrolled Components"
date: "2025-07-22"
---

# Controlled vs Uncontrolled Components in React

Understanding the difference between **controlled** and **uncontrolled** components is essential for managing form inputs effectively in React.

## ✅ Controlled Components

In controlled components, the form data is handled by the component's state. The React component that renders the form also controls what happens in that form on subsequent user input.

### Example:

```jsx
import React, { useState } from "react";

function ControlledInput() {
  const [value, setValue] = useState("");

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
```

## ✅ Uncontrolled Components

Uncontrolled components store their own state internally. You can access the input value using a **ref**.

### Example:

```jsx
import React, { useRef } from "react";

function UncontrolledInput() {
  const inputRef = useRef();

  const handleSubmit = () => {
    alert(inputRef.current.value);
  };

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
```

## 🔍 Key Differences

| Feature           | Controlled                 | Uncontrolled               |
|------------------|----------------------------|----------------------------|
| State Management | Managed by React `useState`| Managed by DOM (ref)      |
| Re-rendering     | On every change            | No re-render on input     |
| Use Case         | When validation is needed  | Quick forms, file inputs  |

## ✅ Conclusion

Use **controlled components** for most cases when you want full control and validation. Use **uncontrolled components** when you want minimal code or need to integrate with non-React code.