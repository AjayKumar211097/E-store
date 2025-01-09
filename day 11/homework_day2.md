## Practice Problems with Hints and Tips

1. **Create an object representing a student profile with 10 properties like name, age**

    - **Hint:** Think of a student in your class. Example: `{ name: 'Asha', age: 14, +10 }`

2. **Edit and Add a new property to the student object after question 1 is completed, that logs a summary of the student.**

    - **Hint:** Use a function to print a sentence like: `console.log(\`\${this.name} is in grade \${this.grade}\`)`

3. **Destructure the student object and log each property individually.**

    - **Hint:** Use `{}` to destructure. Example: `const { name, age } = student;`

4. **Create an array of objects representing atleast 5 breakfasts(idly, dosa, +3) with properties like name, region, and ingredients.**

    - **Hint:** Example: `[{ name: 'Dosa', region: 'Tamil Nadu', ingredients: ['rice', 'urad dal'] }]`

5. **Write a function that accepts any object and logs all only keys.**

    - **Hint:** Use a `for...in` loop to iterate through the object properties.

6. **Write a function that accepts any object and logs all only values.**

    - **Hint:** Use a `for...in` loop to iterate through the object properties.

7. **Edit and Add a new property to a school object dynamically using a variable.**

    - **Hint:** Use square brackets to add a property: `school[newKey] = value;`

8. **Write a loop that finds the highest mark in an object containing student marks.**

    - **Hint:** Keep a variable `maxMark` and update it while looping through marks.

---

## Problem 1: Calculate the Total Marks of Students

**Input Example:**

```javascript
const studentMarks = {
    Priya: 90,
    Ravi: 85,
    Sneha: 95,
    Haripriya: 90,
    Anand: 85,
    Chandan: 95,
    Asha: 84,
    Jai: 95,
};
```

-   **Real-world Use Case:** Calculating the total marks scored in a class test.

---

## Problem 2: Find the Student with the Shortest Name

**Input Example:**

```javascript
const students = {
    Priya: 90,
    Ravi: 85,
    Sneha: 95,
    Haripriya: 90,
    Anand: 85,
    Chandan: 95,
    Asha: 84,
    Jai: 95,
};
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

## Problem 4: Filter all Indian Cities with Population Over a 7000000

**Input Example:**

```javascript
const cities = [
    {
        city: "Mumbai",
        population: 21900000,
    },
    {
        city: "Delhi",
        population: 31870000,
    },
    {
        city: "Bangalore",
        population: 12700000,
    },
    {
        city: "Hyderabad",
        population: 10400000,
    },
    {
        city: "Ahmedabad",
        population: 8300000,
    },
    {
        city: "Chennai",
        population: 11400000,
    },
    {
        city: "Kolkata",
        population: 15000000,
    },
    {
        city: "Pune",
        population: 7600000,
    },
    {
        city: "Jaipur",
        population: 4300000,
    },
    {
        city: "Lucknow",
        population: 3900000,
    },
];
```

-   **Real-world Use Case:** Filtering South Indian cities for a cultural event. Use: IF > 70000

---

## Problem 5: Merge Two Student Groups and Find Common Names

**Input Example:**

```javascript
const groupA = { Asha: 1, Ravi: 2 };
const groupB = { Ravi: 3, Sneha: 4 };
```

-   **Real-world Use Case:** Combining two school clubs and identifying members in both groups., Use : array to store students in both groups
