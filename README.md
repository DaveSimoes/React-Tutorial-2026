<div align="center">
  <h1>🚀 React Tutorial 2026</h1>
  <p><strong>Your Complete Learning Guide to Modern React Development</strong></p>
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![Stars](https://img.shields.io/github/stars/DaveSimoes/React-Tutorial-2025?style=social)](https://github.com/DaveSimoes/React-Tutorial-2025)
  [![Forks](https://img.shields.io/github/forks/DaveSimoes/React-Tutorial-2025?style=social)](https://github.com/DaveSimoes/React-Tutorial-2025)
</div>

---

## 📚 Overview

Welcome to the **React Tutorial 2026** — a comprehensive, practical learning resource designed for developers of all skill levels. This tutorial covers everything from React fundamentals to advanced patterns, complete with real-world examples and best practices.

Whether you're a beginner just starting your React journey or an experienced developer looking to deepen your knowledge, this guide provides clear explanations, practical code examples, and professional development practices.

---

## 📋 Complete Table of Contents

1. [Introduction to React](#introduction-to-react)
2. [Starting Your First React Project](#start-a-new-react-project)
3. [Next.js - Pages Router](#nextjs)
4. [Next.js - App Router](#nextjs-app-router)
5. [Vite - Modern Build Tool](#vite)
6. [React Developer Tools](#react-developer-tools)
7. [JSX Fundamentals](#jsx)
8. [Functional Components](#functional-components)
9. [Class Components](#class-components)
10. [Props & Data Flow](#props)
11. [Component State](#state)
12. [Lifecycle Methods](#lifecycle-methods)
13. [Event Handling](#events-handling)
14. [React Hooks](#react-hooks)
15. [Controlled Components](#controlled-components)
16. [Error Boundaries](#error-boundaries)
17. [Higher Order Components (HOCs)](#higher-order-components)
18. [Rendering Lists](#rendering-lists)
19. [Context API](#context-api)
20. [Keys in Lists](#keys)
21. [Form Management](#forms)
22. [Styling Strategies](#styling-in-react)
23. [Render Props Pattern](#render-props)
24. [CSS Modules](#css-modules)
25. [Real-World Projects](#real-world-examples)
26. [Best Practices Guide](#best-practices)
27. [Advanced Topics](#additional-topics)
28. [Community Resources](#communities)
29. [License](#license-to-use)
30. [Official Documentation](#official-documentation)

---

## Introduction to React

React is a **JavaScript library** for building fast, interactive user interfaces. It enables developers to create reusable UI components and efficiently update the DOM using a virtual DOM for optimal performance.

### Key Advantages
- ⚡ **Virtual DOM** for high-performance rendering
- 🔄 **Component Reusability** for cleaner code
- 📱 **One-Way Data Flow** for predictable state management
- 🛠️ **Rich Ecosystem** with thousands of libraries

---

## Start a New React Project

When building a new React application, choosing the right framework is crucial. While you *can* use React without a framework, most production applications need solutions for:

- 📦 **Code Splitting** - Load only what you need
- 🗺️ **Routing** - Navigate between pages
- 📡 **Data Fetching** - Manage API calls efficiently
- 📄 **HTML Generation** - Server-side rendering and SEO

### Recommended Frameworks

Using a modern framework helps you avoid reinventing the wheel and allows you to focus on building great features.

---

## Next.js

[**Next.js' Pages Router**](https://nextjs.org/) is a full-stack React framework perfect for building applications of any size—from static blogs to complex dynamic applications.

### Quick Start

```bash
npx create-next-app@latest
cd my-app
npm run dev
```

### Maintained by: Vercel

[Vercel](https://vercel.com/) is the company behind Next.js and provides excellent support and deployment solutions.

### Deployment Options

Next.js offers flexible deployment options:

- 🖥️ **Node.js Servers** - Traditional server deployment
- ☁️ **Serverless Functions** - Deploy on AWS Lambda, Google Cloud Functions, Azure
- 📄 **Static Export** - Static HTML (no server required)

Learn more about all deployment options in the [official Next.js deployment guide](https://nextjs.org/docs/app/building-your-application/deploying)

---

## Next.js App Router

[**App Router**](https://nextjs.org/docs) is Next.js's modern approach to building applications. It's a redesign of the Next.js APIs that fulfills the React team's full-stack architecture vision. It enables **server-side components**, **asynchronous operations**, and improved performance.

### Key Features
- 🖥️ **Server Components** for secure backend logic
- ⚡ **Improved Performance** with optimized rendering
- 🔐 **Built-in Security** features
- 📊 **Better Data Fetching** strategies

### Quick Setup

```bash
npx create-next-app@latest --experimental-app
```

**Maintained by**: [Vercel](https://vercel.com/)

**Deployment**: Same flexible options as Pages Router - Node.js servers, serverless functions, or static export

[Learn more about Next.js App Router deployment](https://nextjs.org/docs/app/building-your-application/deploying)

---

## Vite

[**Vite**](https://vitejs.dev/) (French for "quick") is a modern build tool offering a faster and leaner development experience compared to traditional bundlers.

### Why Vite?

**Development Server Features**:
- ⚡ Extremely fast **Hot Module Replacement (HMR)**
- 🚀 Instant server start (even for large projects)
- 📦 Native ES module support

**Production Build**:
- Rollup-powered bundling
- Pre-optimized static assets
- Advanced tree-shaking

### Setting Up Vite with React

**Step 1: Create a New Vite Project**

```bash
npx create-vite my-react-app --template react
```

Replace `my-react-app` with your project name. Vite supports many frameworks, but we're specifying React with the `--template react` option.

**Step 2: Navigate to Your Project**

```bash
cd my-react-app
```

**Step 3: Install Dependencies and Start Development Server**

```bash
npm install
npm run dev
```

Your React app will now be running at `http://localhost:5173` ✨

You should see a message in your terminal showing the local development URL.

---

## React Developer Tools

**React Developer Tools** is an essential browser extension for inspecting, debugging, and profiling your React applications. It makes development much easier!

### Browser Extension Installation

Install for your preferred browser:

**Chrome**:
```
https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en
```

**Firefox**:
```
https://addons.mozilla.org/en-US/firefox/addon/react-devtools/
```

**Edge**:
```
https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil
```

### For Safari & Other Browsers

If you're using Safari or another browser, you can install the npm package:

```bash
# Install globally
npm install -g react-devtools

# Launch in terminal
react-devtools
```

Then add this script tag to the beginning of your `<head>`:

```html
<html>
  <head>
    <script src="http://localhost:8097"></script>
  </head>
  <body>
    <!-- Your app -->
  </body>
</html>
```

---

## JSX

JSX is a **syntax extension** that lets you write HTML-like code within JavaScript. It makes React components more readable and maintainable.

### What is JSX?

JSX is not valid JavaScript by itself. It must be compiled to JavaScript function calls.

### Basic Example

```javascript
// src/App.js
import React from 'react';

function App() {
  return (
    <div>
      <h1>Hello, React! 👋</h1>
      <p>Welcome to the future of web development</p>
    </div>
  );
}

export default App;
```

### JSX Rules

- ✅ Must return a single root element
- ✅ Can use any valid JavaScript inside `{}`
- ✅ Use `className` instead of `class`
- ✅ Use camelCase for attributes (`onClick`, `onChange`)
- ❌ Can't use `if` statements directly (use ternary operators)

---

## Functional Components

Functional components are simple JavaScript functions that return JSX. With **React Hooks**, they're as powerful as class components while being cleaner and easier to understand.

### Basic Syntax

```javascript
import React from 'react';

const FunctionalComponent = () => {
  return <p>This is a functional component! 🎉</p>;
};

export default FunctionalComponent;
```

### With Props

```javascript
const Greeting = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

// Usage: <Greeting name="Alice" />
```

### Advantages
- ✅ Simpler syntax and easier to read
- ✅ Easier to test
- ✅ Better performance with hooks
- ✅ Recommended by the React team

---

## Class Components

Class components are ES6 classes that extend `React.Component`. They have access to lifecycle methods and state management through `this.state`.

### Basic Syntax

```javascript
import React, { Component } from 'react';

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      message: 'Hello from class component!' 
    };
  }

  render() {
    return <p>{this.state.message}</p>;
  }
}

export default ClassComponent;
```

### With Methods

```javascript
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
```

### When to Use Class Components
- ✅ Legacy codebases that haven't migrated to hooks
- ✅ Complex lifecycle requirements
- ✅ Error boundaries (MUST use class components)
- ❌ New projects (use functional components with hooks)

---

## Props

Props (properties) are how you pass data from parent to child components. They're **immutable** and flow one direction, making data flow predictable and easier to debug.

### Basic Example

```javascript
const Greeting = (props) => {
  return <h1>Hello, {props.name}! 👋</h1>;
};

// Usage
export default function App() {
  return <Greeting name="Alice" />;
}
```

### Destructuring Props

```javascript
// Better approach - destructure props
const Greeting = ({ name, age }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Age: {age}</p>
    </div>
  );
};

// Usage
<Greeting name="Alice" age={25} />
```

### Props Best Practices
- ✅ Use **destructuring** for cleaner code
- ✅ Validate props with PropTypes or TypeScript
- ✅ Keep props simple and focused
- ✅ Document what props a component expects
- ❌ Never modify props directly

---

## State

State represents the **dynamic data** in a component that can change over time. When state updates, React automatically re-renders the component.

### State with Hooks (Modern Approach)

```javascript
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment ⬆️
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement ⬇️
      </button>
    </div>
  );
};

export default Counter;
```

### State with Classes (Legacy)

```javascript
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment ⬆️</button>
      </div>
    );
  }
}

export default Counter;
```

### State Rules (IMPORTANT)
- ✅ Never modify state directly
- ✅ Use `setState` (class) or hook functions (functional)
- ✅ State updates may be batched
- ✅ Keep state as simple as possible
- ✅ Move state up if multiple components need it
- ❌ Don't change state objects in place

---

## Lifecycle Methods

Lifecycle methods let you run code at specific times in a component's life. **Modern functional components use `useEffect` instead.**

### Key Lifecycle Methods

```javascript
import React, { Component } from 'react';

class LifecycleExample extends Component {
  // Called when component mounts (first appears on page)
  componentDidMount() {
    console.log('✅ Component mounted - fetch data here!');
    // Perfect for API calls, timers, subscriptions
  }

  // Called when component updates
  componentDidUpdate(prevProps, prevState) {
    console.log('🔄 Component updated');
    // Watch for prop changes
  }

  // Called when component is removed
  componentWillUnmount() {
    console.log('❌ Component unmounting - cleanup here!');
    // Cancel API calls, clear timers, remove listeners
  }

  render() {
    return <p>Check the console!</p>;
  }
}

export default LifecycleExample;
```

### Modern Alternative with useEffect

```javascript
import React, { useEffect } from 'react';

const ModernComponent = () => {
  // Runs once on mount
  useEffect(() => {
    console.log('✅ Component mounted');
    
    return () => {
      console.log('❌ Component unmounting - cleanup');
    };
  }, []);

  return <p>Modern approach with hooks!</p>;
};

export default ModernComponent;
```

---

## Events Handling

React uses **camelCase** for event names. Event handlers are functions that respond to user interactions like clicks, typing, submitting forms, etc.

### Common Events

```javascript
import React from 'react';

const EventsDemo = () => {
  // Click event
  const handleClick = () => {
    alert('✨ Button clicked!');
  };

  // Change event (for inputs)
  const handleChange = (e) => {
    console.log('Input value:', e.target.value);
  };

  // Submit event (for forms)
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log('Form submitted');
  };

  // Mouse events
  const handleMouseEnter = () => {
    console.log('Mouse entered');
  };

  const handleMouseLeave = () => {
    console.log('Mouse left');
  };

  return (
    <div>
      <button onClick={handleClick}>
        Click Me
      </button>

      <input 
        onChange={handleChange}
        placeholder="Type something..."
      />

      <form onSubmit={handleSubmit}>
        <button type="submit">Submit Form</button>
      </form>

      <div 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ padding: '20px', border: '1px solid gray' }}
      >
        Hover over me!
      </div>
    </div>
  );
};

export default EventsDemo;
```

### Event Object

React passes a synthetic event object to handlers:

```javascript
const handleChange = (e) => {
  console.log(e.target.value);      // Get input value
  console.log(e.target.name);       // Get input name
  console.log(e.target.checked);    // For checkboxes
  console.log(e.preventDefault());  // Stop default behavior
};
```

### Common Events List

| Event | Trigger |
|-------|---------|
| `onClick` | Element clicked |
| `onChange` | Input/select/textarea changed |
| `onSubmit` | Form submitted |
| `onFocus` | Element focused |
| `onBlur` | Element loses focus |
| `onMouseEnter` | Mouse enters element |
| `onMouseLeave` | Mouse leaves element |
| `onKeyDown` | Key pressed down |
| `onKeyUp` | Key released |

---

## React Hooks

**Hooks** are functions that let you "hook into" state and lifecycle features in functional components. Introduced in React 16.8, they revolutionized React development!

### useState Hook - Managing State

```javascript
import React, { useState } from 'react';

const Counter = () => {
  // Syntax: const [state, setState] = useState(initialValue)
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Enter your name"
      />
      <p>Hello, {name}!</p>

      <label>
        <input 
          type="checkbox"
          checked={isActive}
          onChange={(e) => setIsActive(e.target.checked)}
        />
        Active
      </label>
    </div>
  );
};

export default Counter;
```

### useEffect Hook - Side Effects

```javascript
import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Run once on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array = run once on mount

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return <p>Data: {JSON.stringify(data)}</p>;
};

export default DataFetcher;
```

### Other Useful Hooks

```javascript
import { useContext, useReducer, useMemo, useCallback } from 'react';

// useContext - Access context values
const theme = useContext(ThemeContext);

// useReducer - Complex state management
const [state, dispatch] = useReducer(reducer, initialState);

// useMemo - Memoize expensive computations
const memoizedValue = useMemo(() => {
  return expensiveCalculation(a, b);
}, [a, b]);

// useCallback - Memoize functions
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

---

## Controlled Components

Controlled components have their form data managed by React state. This gives you complete control over input values and makes validation easy.

### Basic Example

```javascript
import React, { useState } from 'react';

const ControlledInput = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with value:', value);
    setValue(''); // Clear input
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ControlledInput;
```

### Multiple Inputs

```javascript
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // Send to server
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your name"
      />
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your email"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your message"
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
```

---

## Error Boundaries

Error boundaries are **class components** that catch JavaScript errors anywhere in the component tree. They prevent the entire app from crashing.

### Creating an Error Boundary

```javascript
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so next render shows fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to service
    console.error('Error caught:', error, errorInfo);
    // You could send this to an error tracking service
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h1>⚠️ Oops! Something went wrong</h1>
          <p>{this.state.error?.message}</p>
          <button onClick={() => window.location.reload()}>
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

// Usage
// <ErrorBoundary>
//   <MyComponent />
// </ErrorBoundary>
```

### Important Notes

- ✅ Error boundaries catch errors in child components
- ❌ They do NOT catch errors in event handlers (use try/catch)
- ❌ They do NOT catch async errors
- ✅ They catch render, lifecycle, and constructor errors

---

## Higher Order Components (HOCs)

HOCs are **advanced functions** that take a component and return an enhanced version with additional functionality. They're a pattern for reusing component logic.

### Basic HOC

```javascript
import React from 'react';

// Higher Order Component
const withLogger = (WrappedComponent) => {
  return class extends React.Component {
    componentDidMount() {
      console.log(`✅ ${WrappedComponent.name} mounted`);
    }

    componentWillUnmount() {
      console.log(`❌ ${WrappedComponent.name} unmounting`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

// Regular component
const MyComponent = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

// Enhanced component
const EnhancedComponent = withLogger(MyComponent);

export default EnhancedComponent;
```

### HOC with Props

```javascript
const withTheme = (WrappedComponent) => {
  return (props) => {
    const [theme, setTheme] = React.useState('light');

    const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
      <WrappedComponent 
        {...props}
        theme={theme}
        toggleTheme={toggleTheme}
      />
    );
  };
};
```

---

## Rendering Lists

Use the **map()** function to render lists of items dynamically. Each item should have a unique **key**.

### Basic List

```javascript
import React from 'react';

const TodoList = () => {
  const todos = [
    { id: 1, text: 'Learn React', done: false },
    { id: 2, text: 'Build Projects', done: false },
    { id: 3, text: 'Master Hooks', done: true }
  ];

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input type="checkbox" checked={todo.done} />
          {todo.text}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
```

### List with Events

```javascript
import React, { useState } from 'react';

const DynamicList = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
  ]);

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const addItem = () => {
    const newItem = {
      id: Date.now(),
      name: `Item ${items.length + 1}`
    };
    setItems([...items, newItem]);
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DynamicList;
```

### Important: Keys

```javascript
// ✅ GOOD - Use stable unique IDs
{todos.map((todo) => (
  <li key={todo.id}>{todo.text}</li>
))}

// ❌ BAD - Never use array index as key
{todos.map((todo, index) => (
  <li key={index}>{todo.text}</li>
))}

// ❌ BAD - Never use random values
{todos.map((todo) => (
  <li key={Math.random()}>{todo.text}</li>
))}
```

---

## Context API

Context provides a way to pass data through the component tree **without prop drilling** (passing props through every level).

### Creating a Context

```javascript
// ThemeContext.js
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const value = {
    theme,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
```

### Using Context

```javascript
// App.js
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import Header from './Header';
import Content from './Content';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Content />
    </ThemeProvider>
  );
}

export default App;
```

```javascript
// Header.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header style={{
      background: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#000' : '#fff'
    }}>
      <h1>My App</h1>
      <button onClick={toggleTheme}>
        Toggle Theme (Current: {theme})
      </button>
    </header>
  );
};

export default Header;
```

### Benefits
- ✅ Avoids prop drilling through many levels
- ✅ Clean, organized state management
- ✅ Good for themes, authentication, user preferences
- ✅ Built-in to React (no extra libraries)

---

## Keys

Keys help React identify which items have changed, been added, or been removed in a list.

### Why Keys Matter

```javascript
// WITHOUT KEYS - React gets confused
const BadList = ({ items }) => (
  <ul>
    {items.map(item => (
      <li>{item.name}</li> {/* ❌ No key! */}
    ))}
  </ul>
);

// WITH KEYS - React knows exactly what changed
const GoodList = ({ items }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>{item.name}</li> {/* ✅ Good! */}
    ))}
  </ul>
);
```

### Key Rules

```javascript
// ✅ GOOD - Use stable, unique IDs from data
{users.map(user => (
  <div key={user.id}>{user.name}</div>
))}

// ✅ GOOD - Generate stable IDs if needed
const [nextId, setNextId] = useState(3);
const addItem = () => {
  const id = nextId;
  setNextId(nextId + 1);
  // use `id` as key
};

// ❌ BAD - Array index changes when list changes
{users.map((user, index) => (
  <div key={index}>{user.name}</div>
))}

// ❌ BAD - Random keys change every render
{users.map(user => (
  <div key={Math.random()}>{user.name}</div>
))}

// ❌ BAD - Non-unique keys
{users.map(user => (
  <div key={user.status}>{user.name}</div> // Multiple users might have same status
))}
```

---

## Forms

Managing forms in React involves handling input changes and form submissions through state.

### Simple Form

```javascript
import React, { useState } from 'react';

const SimpleForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name, 'Email:', email);
    // Reset form
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default SimpleForm;
```

### Complex Form with Validation

```javascript
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subscribe: false
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Send to server here
  };

  if (submitted) {
    return <p>Thank you! Your message has been sent.</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>

      <div>
        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="subscribe"
            checked={formData.subscribe}
            onChange={handleChange}
          />
          Subscribe to our newsletter
        </label>
      </div>

      <button type="submit">Send Message</button>
    </form>
  );
};

export default ContactForm;
```

---

## Styling in React

### Approach 1: Inline Styles (JavaScript Objects)

```javascript
import React from 'react';

const StyledComponent = () => {
  const styles = {
    container: {
      backgroundColor: '#f0f0f0',
      padding: '20px',
      borderRadius: '8px',
      maxWidth: '500px',
      margin: '0 auto'
    },
    title: {
      color: '#333',
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '10px'
    },
    button: {
      backgroundColor: '#007bff',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Styled with Objects</h1>
      <button style={styles.button}>Click Me</button>
    </div>
  );
};

export default StyledComponent;
```

**Pros**: ✅ Scoped, Dynamic
**Cons**: ❌ Less intuitive, no media queries easily

### Approach 2: CSS Classes (External CSS)

**styles.css**:
```css
.container {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  margin: 0 auto;
}

.title {
  color: #333;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button:hover {
  background-color: #0056b3;
}
```

**Component.js**:
```javascript
import React from 'react';
import './styles.css';

const StyledComponent = () => {
  return (
    <div className="container">
      <h1 className="title">Styled with CSS Classes</h1>
      <button className="button">Click Me</button>
    </div>
  );
};

export default StyledComponent;
```

**Pros**: ✅ Full CSS features, Easy to use
**Cons**: ❌ Global scope (class name conflicts)

### Approach 3: CSS Modules (Scoped CSS)

**Component.module.css**:
```css
.container {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  margin: 0 auto;
}

.title {
  color: #333;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button:hover {
  background-color: #0056b3;
}
```

**Component.js**:
```javascript
import React from 'react';
import styles from './Component.module.css';

const StyledComponent = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Styled with CSS Modules</h1>
      <button className={styles.button}>Click Me</button>
    </div>
  );
};

export default StyledComponent;
```

**Pros**: ✅ Scoped, Full CSS features
**Cons**: ❌ Slightly more setup

### Approach 4: Tailwind CSS (Popular)

**Install**:
```bash
npm install -D tailwindcss postcss autoprefixer
```

**Component.js**:
```javascript
import React from 'react';

const StyledComponent = () => {
  return (
    <div className="bg-gray-100 p-5 rounded-lg max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">
        Styled with Tailwind
      </h1>
      <button className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-700">
        Click Me
      </button>
    </div>
  );
};

export default StyledComponent;
```

---

## Render Props

Render props is a technique for sharing code using a **function as a child** or **render prop**. It's a more advanced pattern.

### Basic Example

```javascript
import React, { useState } from 'react';

// Component that uses render prop
const MouseTracker = ({ render }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY
    });
  };

  return (
    <div 
      style={{ width: '100%', height: '100vh' }}
      onMouseMove={handleMouseMove}
    >
      {render(position)}
    </div>
  );
};

// Usage
const App = () => (
  <MouseTracker
    render={(position) => (
      <p>
        Mouse position: X={position.x}, Y={position.y}
      </p>
    )}
  />
);

export default App;
```

### Render Props with Children

```javascript
import React, { useState } from 'react';

const DataProvider = ({ children }) => {
  const [data, setData] = useState('Initial data');

  return children(data, setData);
};

// Usage
const App = () => (
  <DataProvider>
    {(data, setData) => (
      <div>
        <p>{data}</p>
        <button onClick={() => setData('Updated!')}>Update</button>
      </div>
    )}
  </DataProvider>
);

export default App;
```

---

## CSS Modules

CSS Modules provide **scoped CSS** to prevent class name conflicts across your application.

### How It Works

**Button.module.css**:
```css
.button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.button:hover {
  background-color: #0056b3;
}

.button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.primary {
  background-color: #28a745;
}

.primary:hover {
  background-color: #218838;
}
```

**Button.js**:
```javascript
import React from 'react';
import styles from './Button.module.css';

const Button = ({ variant = 'default', ...props }) => {
  const className = variant === 'primary'
    ? `${styles.button} ${styles.primary}`
    : styles.button;

  return (
    <button className={className} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
```

### Advantages
- ✅ Scoped styles (no global conflicts)
- ✅ Dynamic class names
- ✅ Full CSS support
- ✅ Good for component libraries

---

## Real-World Examples

### Example 1: Complete To-Do List Application

A full-featured todo app with add, delete, and toggle functionality.

```javascript
import React, { useState } from 'react';
import './TodoApp.css';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all');

  // Add new todo
  const addTodo = () => {
    if (input.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: input,
          completed: false,
          createdAt: new Date()
        }
      ]);
      setInput('');
    }
  };

  // Toggle completion status
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Filter todos
  const getFilteredTodos = () => {
    switch(filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  };

  const filteredTodos = getFilteredTodos();
  const completedCount = todos.filter(t => t.completed).length;

  return (
    <div className="todo-app">
      <div className="header">
        <h1>My Todo List 📝</h1>
        <p>{completedCount} of {todos.length} completed</p>
      </div>

      {/* Input Section */}
      <div className="input-section">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Add a new todo..."
          className="input"
        />
        <button onClick={addTodo} className="add-button">Add</button>
      </div>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        <button
          onClick={() => setFilter('all')}
          className={filter === 'all' ? 'active' : ''}
        >
          All ({todos.length})
        </button>
        <button
          onClick={() => setFilter('active')}
          className={filter === 'active' ? 'active' : ''}
        >
          Active ({todos.filter(t => !t.completed).length})
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={filter === 'completed' ? 'active' : ''}
        >
          Completed ({completedCount})
        </button>
      </div>

      {/* Todos List */}
      <div className="todos-list">
        {filteredTodos.length === 0 ? (
          <p className="empty-message">No todos yet! 🎉</p>
        ) : (
          <ul>
            {filteredTodos.map(todo => (
              <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className="checkbox"
                />
                <span className="todo-text">{todo.text}</span>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="delete-button"
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TodoApp;
```

**TodoApp.css**:
```css
.todo-app {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

.input-section {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.add-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.filter-buttons {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  justify-content: center;
}

.filter-buttons button {
  padding: 8px 16px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
  border-radius: 4px;
}

.filter-buttons button.active {
  background: #007bff;
  color: white;
}

.todos-list ul {
  list-style: none;
  padding: 0;
}

.todos-list li {
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #eee;
  margin-bottom: 5px;
  border-radius: 4px;
}

.todos-list li.completed {
  background-color: #f0f0f0;
}

.todos-list .checkbox {
  margin-right: 10px;
}

.todos-list .todo-text {
  flex: 1;
}

.todos-list li.completed .todo-text {
  text-decoration: line-through;
  color: #999;
}

.delete-button {
  background: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 20px;
  width: 30px;
  height: 30px;
}

.empty-message {
  text-align: center;
  color: #999;
  padding: 20px;
}
```

---

## Best Practices

### 1. File and Folder Structure

```
src/
├── components/
│   ├── Common/
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   └── Navigation.js
│   ├── Features/
│   │   ├── Todo/
│   │   │   ├── TodoList.js
│   │   │   ├── TodoItem.js
│   │   │   ├── TodoForm.js
│   │   │   └── Todo.module.css
│   │   └── Auth/
│   │       ├── Login.js
│   │       └── Register.js
├── hooks/
│   ├── useWindowSize.js
│   └── useFetch.js
├── utils/
│   ├── api.js
│   └── helpers.js
├── contexts/
│   ├── AuthContext.js
│   └── ThemeContext.js
├── styles/
│   └── global.css
├── App.js
└── index.js
```

### 2. Naming Conventions

```javascript
// ✅ GOOD - Clear, descriptive names
const UserProfileCard = () => {}
const handleFormSubmit = () => {}
const isUserAuthenticated = false
const getUserData = async () => {}

// ❌ BAD - Vague or unclear names
const Card = () => {}
const handle = () => {}
const flag = false
const getData = async () => {}
```

### 3. Component Patterns

```javascript
// Single Responsibility Principle
// Each component should do ONE thing

// ✅ GOOD
const UserHeader = () => <h1>User Profile</h1>;
const UserForm = () => <form>{/* */}</form>;
const UserProfile = () => (
  <div>
    <UserHeader />
    <UserForm />
  </div>
);

// ❌ BAD - Too much in one component
const UserProfile = () => (
  <div>
    <h1>User Profile</h1>
    <form>{/* lots of logic */}</form>
    <div>{/* other stuff */}</div>
  </div>
);
```

### 4. Props Validation

```javascript
import PropTypes from 'prop-types';

const UserCard = ({ name, age, email, isActive }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
};

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  email: PropTypes.string.isRequired,
  isActive: PropTypes.bool
};

UserCard.defaultProps = {
  age: 0,
  isActive: true
};

export default UserCard;
```

### 5. Performance Optimization

```javascript
import React, { useMemo, useCallback, memo } from 'react';

// Use memo for expensive components
const ExpensiveComponent = memo(({ data }) => {
  return <div>{/* render heavy component */}</div>;
});

const Parent = ({ items }) => {
  // useMemo - memoize expensive calculations
  const expensiveValue = useMemo(() => {
    return items.reduce((sum, item) => sum + item.price, 0);
  }, [items]);

  // useCallback - memoize function references
  const handleDelete = useCallback((id) => {
    // delete logic
  }, []);

  return (
    <div>
      <p>Total: {expensiveValue}</p>
      <ExpensiveComponent data={items} onDelete={handleDelete} />
    </div>
  );
};

export default Parent;
```

### 6. Error Handling

```javascript
import React, { useState, useEffect } from 'react';

const DataFetcher = ({ url }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`API Error: ${response.status}`);
        }
        const result = await response.json();
        
        if (isMounted) {
          setData(result);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
          setData(null);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    // Cleanup
    return () => {
      isMounted = false;
    };
  }, [url]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return <div>{JSON.stringify(data)}</div>;
};

export default DataFetcher;
```

---

## Additional Topics

### State Management Options

**1. useState/useReducer (Built-in)**
```javascript
const [state, setState] = useState(initialValue);
const [state, dispatch] = useReducer(reducer, initialState);
```

**2. Context API**
```javascript
const MyContext = createContext();
<MyContext.Provider value={value}>{children}</MyContext.Provider>
```

**3. Redux**
```bash
npm install redux react-redux
```

**4. Zustand (Modern Alternative)**
```bash
npm install zustand
```

**5. Recoil (Facebook's State Management)**
```bash
npm install recoil
```

### Async Data Fetching Patterns

```javascript
// Pattern 1: Using useEffect
useEffect(() => {
  fetchData();
}, [dependencies]);

// Pattern 2: React Query (recommended)
npm install @tanstack/react-query

import { useQuery } from '@tanstack/react-query';

const { data, isLoading, error } = useQuery({
  queryKey: ['users'],
  queryFn: () => fetch('/api/users').then(r => r.json())
});
```

### Testing Components

```javascript
import { render, screen, fireEvent } from '@testing-library/react';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  test('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  test('handles click events', () => {
    render(<MyComponent />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(screen.getByText('Clicked!')).toBeInTheDocument();
  });
});
```

---

## Communities

Join these amazing React communities!

### Online Communities

- 💬 **[DEV.to React Community](https://dev.to/t/react)** - Read and share React articles
- 📚 **[Hashnode React](https://hashnode.com/n/reactjs)** - Technical blog platform
- 💭 **[Reactiflux Discord](https://discord.com/invite/reactiflux)** - Real-time chat and support
- 🔗 **[Reddit r/reactjs](https://www.reddit.com/r/reactjs/)** - Community discussions
- 🐦 **[Twitter React Community](https://twitter.com/search?q=%23ReactJS)** - Follow React news

### Learning Resources

- 📖 **[Official React Documentation](https://react.dev)** - The authoritative source
- 🎓 **[React Tutorial](https://react.dev/learn)** - Interactive tutorial
- 📺 **[YouTube Channels](https://youtube.com)** - Traversy Media, WebDev Simplified, etc.
- 💻 **[CodePen](https://codepen.io)** - Share React examples

---

## Contributing to This Tutorial

We'd love your contributions! Whether you're fixing typos, improving examples, or adding new sections, your help is valuable.

### How to Contribute

1. **Fork** the repository
   - Click the "Fork" button in the top right

2. **Clone** your fork
   ```bash
   git clone https://github.com/YOUR_USERNAME/React-Tutorial-2025.git
   cd React-Tutorial-2025
   ```

3. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make your changes**
   - Improve examples
   - Fix typos
   - Add new sections
   - Clarify explanations

5. **Commit your changes**
   ```bash
   git commit -m "Add/Fix: Brief description of changes"
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Add a clear title and description

### Contribution Guidelines

- ✅ Write clear, concise explanations
- ✅ Include working code examples
- ✅ Test code before submitting
- ✅ Follow consistent formatting
- ✅ Reference related sections
- ❌ Don't include large unrelated changes

---

## Coding Standards

### JavaScript/React Style Guide

```javascript
// ✅ GOOD - Consistent formatting and naming

// 1. Use const by default
const myVariable = 'value';

// 2. Use arrow functions
const myFunction = (param) => {
  return param * 2;
};

// 3. Destructure objects and arrays
const { name, age } = user;
const [first, second] = array;

// 4. Use template literals
const message = `Hello, ${name}!`;

// 5. Use meaningful variable names
const isUserAuthenticated = checkAuth();

// 6. Add comments for complex logic
// Fetch user data from API and cache for 5 minutes
const cachedData = useMemo(() => fetchUser(id), [id]);

// 7. Proper formatting
if (condition) {
  doSomething();
} else {
  doSomethingElse();
}

// ❌ AVOID - Inconsistent style

// Don't use var
var oldVariable = 'bad';

// Don't use regular functions without reason
function oldStyle(param) {
  return param * 2;
}

// Don't use single letter variables (except loop index)
const x = userData.age;

// Don't use concatenation
const msg = 'Hello, ' + name + '!';

// Vague variable names
const flag = true;
const data = processInput();
```

---

## Show Your Support ⭐

If you found this tutorial helpful, please consider giving it a **star**! Your support:

- 🌟 Motivates continued development
- 🚀 Helps others discover this resource
- 💪 Shows appreciation for the effort invested
- 📈 Improves visibility in GitHub search

**Thank you for being part of our React learning community!**

---

## License

<div align="center">
  <p>
    <strong>MIT License</strong> © 2026 David Simoes
  </p>
  <p style="font-size: 14px; margin-top: 10px;">
    Feel free to use this tutorial for learning, teaching, and sharing knowledge with others.
  </p>
  <p style="font-size: 12px; color: #666;">
    Made with ❤️ for the React community
  </p>
</div>

---

## Official Documentation

📖 **[React Official Documentation](https://react.dev)** - The authoritative source for React knowledge and best practices

---

**Happy Coding! 🚀**
