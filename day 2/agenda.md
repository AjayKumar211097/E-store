# Day 2: Strings, Backticks, and For Loops in JavaScript

## 1. Strings in JavaScript

### 1.1 Introduction to Strings

Strings are sequences of characters used to store and manipulate text.

### 1.2 Types of String Declarations

-   **Single Quotes**: `'text'`
-   **Double Quotes**: `"text"`
-   **Backticks (Template Literals)**: \`text\`

#### Key Features of Template Literals:

-   Allows embedding variables and expressions using `${}`.
-   Supports multi-line strings.

### Examples:

1. Basic Template Literal:

    - `const name = "Ajay";`
    - \`Hello, ${name}!\`

2. Embedding Expressions:
    - `const a = 5;`
    - `const b = 10;`
    - \`The sum is ${a + b}.\`

### Practice Questions:

1. Create a string using backticks to display the result of `10 + 20`.
2. Generate a multi-line string using backticks with 3 lines of your choice.
3. Use a backtick to embed the current day and month into a sentence.
4. Write a dynamic string combining a name and an age.
5. Combine three strings using backticks.

---

## 2. For Loops in JavaScript

### 2.1 Basic For Loop

The **for loop** is used to execute a block of code a certain number of times.

#### Syntax:

```js
for (initialization; condition; increment / decrement) {
    // Code to execute
}
```

#### Examples:

1. Print numbers from 1 to 5:
    - `for (let i = 1; i <= 5; i++) console.log(i);`
2. Print the first 10 multiples of 2:
    - `for (let i = 1; i <= 10; i++) console.log(i * 2);`

### Practice Questions:

1. Write a loop to print the square of numbers from 1 to 10.
2. Write a loop to calculate the factorial of 5.
3. Create a loop to print all even numbers from 1 to 20.
4. Write a loop to print a countdown from 10 to 1.
5. Use a loop to calculate the sum of the first 100 numbers.

---

## 3. Applying Strings and Loops Together

### Examples:

1. Use a loop to generate a dynamic string for the multiplication table of 3.
2. Create a multi-line string dynamically inside a loop for the days of the week.

### Practice Questions:

1. Write a loop to generate a string for the squares of numbers from 1 to 5.
2. Use a loop to create a string listing numbers divisible by 3 between 1 and 30.
3. Dynamically generate a string that lists all letters in the word "JavaScript".

---

## 4. Advanced String Manipulations

### Example:

Combine multiple variables into a single sentence:

```js
const firstName = "Ajay";
const lastName = "Kumar";
const age = 21;
console.log(`My name is ${firstName} ${lastName} and I am ${age} years old.`);
```

### Practice Questions:

1. Write a backtick string to generate the sentence: `Today is Monday, and the time is 10:00 AM`.
2. Create a string that dynamically changes based on the values of two numbers.
3. Use a loop to concatenate the words in an array into a single string with spaces.
4. Generate a story string dynamically with at least 3 variables.
5. Create a formatted output for a shopping list using backticks and a loop.

---

## 5. Summary:

-   Strings can be declared using single quotes, double quotes, or backticks.
-   Template literals (backticks) are useful for embedding variables and creating dynamic content.
-   For loops are powerful for repeating tasks and generating strings programmatically.

Practice these concepts to strengthen your understanding and prepare for advanced topics like array manipulations and higher-order functions!
