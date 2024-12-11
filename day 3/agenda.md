# **Day 3: Functions and Arrow Functions in JavaScript**

## **1. What Are Functions?**

-   **Definition**: Functions are reusable blocks of code designed to perform a task or calculate a value.
-   **Syntax**:
    ```javascript
    function functionName(parameters) {
        // code to execute
        return value; // optional
    }
    ```

### **Examples**

-   Create a function to add two numbers:
    ```javascript
    function add(a, b) {
        return a + b;
    }
    ```
-   Create a function to greet a user:
    ```javascript
    function greet(name) {
        return "Hello, " + name + "!";
    }
    ```

---

## **2. Types of Functions**

### 2.1 Named Functions

-   Functions with an explicit name.
-   Example:
    ```javascript
    function sayHello() {
        console.log("Hello!");
    }
    ```

### 2.2 Anonymous Functions

-   Functions without a name, often assigned to variables or used as arguments.
-   Example:
    ```javascript
    const sayHi = function () {
        console.log("Hi!");
    };
    ```

### 2.3 Immediately Invoked Function Expressions (IIFE)

-   Functions that execute immediately after they are defined.
-   Example:
    ```javascript
    (function () {
        console.log("This is an IIFE.");
    })();
    ```

---

## **3. Arrow Functions**

-   **Definition**: A shorter syntax for writing functions, introduced in ES6.
-   **Syntax**:
    ```javascript
    const functionName = (parameters) => {
        // code to execute
        return value; // optional
    };
    ```

### **Examples**

-   Add two numbers using an arrow function:
    ```javascript
    const add = (a, b) => a + b;
    ```
-   Greet a user using an arrow function:
    ```javascript
    const greet = (name) => `Hello, ${name}!`;
    ```

---

## **4. Differences Between Regular and Arrow Functions**

### 4.1 No `this` Binding

-   Regular functions bind `this` dynamically.
-   Arrow functions do not bind `this`; they inherit it from their parent scope.
-   Example:

    ```javascript
    function regularFunction() {
        console.log(this);
    }

    const arrowFunction = () => {
        console.log(this);
    };
    ```

### 4.2 Syntax Simplification

-   Arrow functions reduce boilerplate code.
-   Example:

    ```javascript
    // Regular function
    function square(x) {
        return x * x;
    }

    // Arrow function
    const square = (x) => x * x;
    ```

---

## **6. Practice Questions**

### Functions

1. Write a function to calculate the square of a number.
2. Write a function to find the maximum of three numbers.
3. Write a function to reverse a string.
4. Write a function to check if a number is prime.
5. Write a function to calculate the factorial of a number.

### Arrow Functions

1. Convert a regular function to an arrow function:
    ```javascript
    function multiply(a, b) {
        return a * b;
    }
    ```
2. Write an arrow function to find the length of a string.
3. Write an arrow function to filter out odd numbers from an array.
4. Write an arrow function to find the sum of all numbers in an array.
5. Write an arrow function to return the first letter of each string in an array.
