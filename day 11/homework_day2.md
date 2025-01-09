## Practice Problems with Hints and Tips

1. **Create an object representing a student with properties like name, age, and grade.**

    - **Hint:** Think of a student in your class. Example: `{ name: 'Asha', age: 14, grade: '9th' }`

2. **Add a method to the student object that logs a summary of the student.**

    - **Hint:** Use a method to print a sentence like: `console.log(\`\${this.name} is in grade \${this.grade}\`)`

3. **Destructure the student object and log each property individually.**

    - **Hint:** Use `{}` to destructure. Example: `const { name, grade } = student;`

4. **Create an array of objects representing South Indian dishes with properties like name, region, and ingredients.**

    - **Hint:** Example: `[{ name: 'Dosa', region: 'Tamil Nadu', ingredients: ['rice', 'urad dal'] }]`

5. **Write a function that accepts an object and logs all its key-value pairs.**

    - **Hint:** Use a `for...in` loop to iterate through the object properties.

6. **Convert a person object into a JSON string and back into an object.**

    - **Hint:** Use `JSON.stringify()` and `JSON.parse()` to serialize and deserialize.

7. **Add a new property to a school object dynamically using a variable.**

    - **Hint:** Use square brackets to add a property: `school[newKey] = value;`

8. **Write a loop that finds the highest mark in an object containing student marks.**

    - **Hint:** Keep a variable `maxMark` and update it while looping through marks.

9. **Write a method in a cricket team object that modifies the score property.**

    - **Hint:** Use `this.score += 10;` within the method to update score.

10. **Use the spread operator to merge two family objects.**
    - **Hint:** Example: `const mergedFamily = { ...family1, ...family2 };`

---

## Problem 1: Calculate the Total Marks of Students

**Input Example:**

```javascript
const studentMarks = { Priya: 90, Ravi: 85, Sneha: 95 };
```

-   **Real-world Use Case:** Calculating the total marks scored in a class test.

---

## Problem 2: Find the Student with the Shortest Name

**Input Example:**

```javascript
const students = { Asha: 14, Ravi: 16, Jai: 15 };
```

-   **Real-world Use Case:** Identifying students with short names for a seating arrangement activity.

---

## Problem 3: Count the Number of Ingredients in a South Indian Dish

**Input Example:**

```javascript
const dosa = { name: "Dosa", ingredients: ["rice", "urad dal", "salt"] };
```

-   **Real-world Use Case:** Checking the number of ingredients needed for a cooking competition.

---

## Problem 4: Filter South Indian Cities with Population Over a Certain Number

**Input Example:**

```javascript
const cities = [
    { name: "Chennai", population: 10_000_000 },
    { name: "Coimbatore", population: 1_500_000 },
];
```

-   **Real-world Use Case:** Filtering South Indian cities for a cultural event.

---

## Problem 5: Merge Two Student Groups and Find Common Names

**Input Example:**

```javascript
const groupA = { Asha: 1, Ravi: 2 };
const groupB = { Ravi: 3, Sneha: 4 };
```

-   **Real-world Use Case:** Combining two school clubs and identifying members in both groups., Use : array to store students in both groups
