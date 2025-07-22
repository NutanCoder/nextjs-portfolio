---
title: "Functional vs Class Components"
date: "2025-07-22"
---

# Functional vs Class Components in React

React provides two main ways to define components: **Functional Components** and **Class Components**. Both serve the same purpose — to render UI — but differ in syntax and capabilities.

## ✅ Functional Components

Functional components are JavaScript functions that return JSX. With the introduction of Hooks in React 16.8, functional components can now manage state and side effects.

### Example:

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

## ✅ Class Components

Class components are ES6 classes that extend `React.Component` and require a `render()` method to return JSX. Before Hooks, this was the only way to manage state and lifecycle methods.

### Example:

```jsx
import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
```

## 🔍 Key Differences

| Feature           | Functional Component | Class Component             |
| ----------------- | -------------------- | --------------------------- |
| Syntax            | Function-based       | Class-based                 |
| State Management  | `useState` Hook      | `this.state` and `setState` |
| Lifecycle Methods | `useEffect` Hook     | `componentDidMount`, etc.   |
| `this` Keyword    | Not used             | Used frequently             |
| Performance       | Slightly better      | Slightly heavier            |

## ✅ Conclusion

Prefer **functional components** for new React development due to cleaner syntax, improved readability, and the power of Hooks. Class components are still supported but are becoming less common in modern React applications.
