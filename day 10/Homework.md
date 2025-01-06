# JavaScript Practice Questions

## **Question 1: Count People with the Same Surname (5 Marks)**

Write a function that counts the number of students sharing the same surname from a list of full names.

```javascript
function countSameSurname(names) {
    // Your implementation here
}
const students = [
    "John Smith",
    "Alice Johnson",
    "Bob Smith",
    "Emily Davis",
    "Anna Smith",
];
countSameSurname(students);
```

**Input:** `["John Smith", "Alice Johnson", "Bob Smith", "Emily Davis", "Anna Smith"]`

**Output:**  
`Smith: 3`  
`Johnson: 1`  
`Davis: 1`

---

## **Question 2: Validate Phone Number (5 Marks)**

Write a function that validates a phone number with the following rules:

✅ **Rules for a valid phone number:**

1. Must contain exactly 10 digits.
2. Must not contain any letters or special characters.(Use a array of alphabets, a other array of special characters and use !includes )
3. Must not start with `0`.
4. Must be formatted as a continuous sequence of digits without spaces or dashes.

```javascript
function validatePhoneNumber(number) {
    // Your implementation here with all 5 rules
}
validatePhoneNumber("9876543210");
validatePhoneNumber("12345678901");
validatePhoneNumber("12345a7890");
validatePhoneNumber("0001234567");
```

**Input:** `"9876543210"`

**Output:** `Valid`

**Input:** `"12345678901"`

**Output:** `Invalid: More than 10 digits`

**Input:** `"12345a7890"`

**Output:** `Invalid: Contains non-numeric characters`

**Input:** `"0001234567"`

**Output:** `Invalid: Cannot start with 0`

---

## **Question 3: Count Students by Grade Using Switch Case (5 Marks)**

Write a function to count how many students scored in each grade category using a `switch` statement.

**Grades:**

-   **A:** 90-100
-   **B:** 75-89
-   **C:** 50-74
-   **F:** Below 50

```javascript
function countGradesSwitch(marks) {
    // Your implementation here using switch case
}
const marks = [95, 80, 45, 60, 77, 100, 88, 30];
countGradesSwitch(marks);
```

**Input:** `[95, 80, 45, 60, 77, 100, 88, 30]`  
**Output:**

-   `A: 3`
-   `B: 3`
-   `C: 1`
-   `F: 1`

---

## **Question 4: Validate Student Roll Numbers (5 Marks)**

Write a function to check if all student roll numbers are unique. Roll numbers should be numeric and not repeated.

```javascript
function validateRollNumbers(rollNumbers) {
    // Your implementation here
}
const rollNumbers = [101, 102, 103, 104, 101];
validateRollNumbers(rollNumbers);
```

**Input:** `[101, 102, 103, 104, 101]`  
**Output:** `"Duplicate roll number found"`

**Input:** `[201, 202, 203, 204]`  
**Output:** `"All roll numbers are unique"`

---

## **Question 5: Find the Longest Word in a Sentence (5 Marks)**

Write a function to find the longest word in a sentence and return its length.

```javascript
function findLongestWord(sentence) {
    // Your implementation here
}
findLongestWord("The quick brown fox jumped over the lazy dog");
```

**Input:** `"The quick brown fox jumped over the lazy dog"`

**Output:** `jumped: 6`
