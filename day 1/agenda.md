# Day 1: Variables, Primitive Types, and Arrays

## **1. Variables in JavaScript**

### **Key Concepts:**
- **var**: Function-scoped, can be redeclared.
- **let**: Block-scoped, cannot be redeclared in the same scope.
- **const**: Block-scoped, used for constants, cannot be reassigned.

### **Examples:**
1. `var value = 0;` // Declares a variable.
2. `let firstValue = 1;` // Declares a block-scoped variable.
3. `const secondValue = 2;` // Declares a constant variable.

### **Practice Questions:**
1. Declare a variable using `let` and assign it a number. Try reassigning a new value.
2. Use `const` to declare a variable. Attempt to change its value. What happens?
3. Compare the behavior of `var` and `let` in a loop.
4. Create three variables: one with `var`, one with `let`, and one with `const`. Print them.
5. Use `let` inside a function. Observe its behavior when accessed outside the function.

---

## **2. Primitive Data Types in JavaScript**

### **Key Concepts:**
- **String**: Sequence of characters (`"AJAY Kumar"`).
- **Number**: Numeric values (`234`).
- **Boolean**: Logical values (`true` or `false`).
- **Null**: Explicitly no value.
- **Undefined**: Variable declared but not initialized.

### **Examples:**
1. `let name = "AJAY Kumar";` // String declaration.
2. `let number = 234;` // Number declaration.
3. `let flag = true;` // Boolean declaration.
4. `let check = null;` // Null declaration.
5. `let isTrue = undefined;` // Undefined declaration.

### **Practice Questions:**
1. Create a string variable and concatenate it with another string.
2. Declare a number variable and perform addition with another number.
3. Use a boolean variable in a conditional statement.
4. Assign `null` to a variable and print its type.
5. Declare an undefined variable and observe its output.

---

## **3. Arrays in JavaScript**

### **Key Concepts:**
- Arrays store multiple values in a single variable.
- Arrays can hold different data types.

### **Examples:**
1. `const arrNumbers = [1, 2, 3, 4, 5];` // Numeric array.
2. `const arrMultiType = [1, "2", true, undefined, arrNumbers];` // Mixed array.

### **Practice Questions:**
1. Create an array of five strings. Access the third element.
2. Declare an array of numbers. Add a new number to it using `.push()`.
3. Write a loop to print all elements of an array.
4. Combine two arrays into one using `.concat()`.
5. Check if a value exists in an array using `.includes()`.

---

## **Summary**
- Variables in JavaScript can be declared using `var`, `let`, and `const`.
- Primitive types include strings, numbers, booleans, null, and undefined.
- Arrays can hold multiple values of any type.

**Next Step:** Practice the questions to reinforce today's concepts!
