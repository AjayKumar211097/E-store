# JavaScript Concepts Overview

## Variables

-   `var`, `let`, `const` are used to declare variables.
-   `const` is used for values that shouldn't change, while `let` is for reassignable variables.

## Data Types

-   **Primitive Types:** `string`, `number`, `boolean`, `null`, `undefined`
-   **Reference Types:** `array`, `object`, `function`

## Arrays

-   Collections of items, e.g., `const numbers = [1, 2, 3];`
-   Methods: `push`, `pop`, `shift`, `unshift`

```javascript
const numbers = [1, 2, 3, 4];
numbers.push(5); // Add to end
numbers.pop(); // Remove from end
numbers.shift(); // Remove from start
numbers.unshift(0); // Add to start
console.log(numbers);
```

## Objects

-   Key-value pairs for structured data storage.

```javascript
const bag = {
    price: 120,
    color: "red",
    getInfo: function () {
        console.log(`Bag price is $${this.price}`);
    },
};
bag.getInfo();
```

## Functions

-   Regular function declaration and usage:

```javascript
function add(a, b) {
    return a + b;
}
console.log(add(2, 3));
```

-   Arrow function:

```javascript
const multiply = (a, b) => a * b;
console.log(multiply(2, 3));
```

## For Loops

-   **Regular for loop:**

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

-   **For...in loop** (used for objects):

```javascript
const bag = { price: 120, color: "red" };
for (let key in bag) {
    console.log(`${key}: ${bag[key]}`);
}
```

-   **For...of loop** (used for arrays):

```javascript
const fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
    console.log(fruit);
}
```

## Math Functions

-   `Math.min()`, `Math.max()`, `Math.random()`

```javascript
const min = Math.min(2, 3, 1);
const random = Math.random();
console.log(min, random);
```

## Array Searching

-   `.includes()`

```javascript
const numbers = [1, 2, 3, 4, 5];
const isPresent = numbers.includes(3);
console.log("Is present:", isPresent);
```

## Conditional Statements

-   **If-else:**

```javascript
const age = 18;
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```

-   **Ternary Operator:**

```javascript
const isAdult = age >= 18 ? "Adult" : "Minor";
console.log(isAdult);
```
