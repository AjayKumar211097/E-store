// ARRAYS

const products = []; // declaration of array
const fruits = ["banana", "orange", "mango", "lemon"]; // ARRAYS can store multiple datatypes
// 100,"Hello" are called values or elements
// 0,1,2,3 // Index or keys

const firstValue = fruits[2]; // Accessing arrays is with [index]
// console.log("🚀 ~ firstValue:", firstValue);

// 4 important functions - add/remove (push-END, pop-END, shift-START, unshift-START)
// We want to add grapes
// 1. Push -  Remove one item from the end
// array.push(ELEMENT/VALUE) - * ALL SMALLS
console.log("🚀 ~ Before altering - fruits:", fruits);
const grapes = "NOT GRAPES"; // ELEMENTS CAN BE ANY VALID VALUE(STRING;etc)
const res = fruits.push(grapes); // Function call ()

// We want to remove an element
// 2. pop -  Remove one item from the end
//console.log("🚀 ~ Before poping - fruits:", fruits);
const lastValue = fruits.pop(); // Remove one item from the end
/* console.log("🚀 ~ After poping - fruits:", fruits);
console.log("🚀 ~ lastValue:", lastValue); */
// fruits.pop(); // No need to pass a value

// Example for pop
/* console.log("🚀 ~ fruits:", fruits);

const reverseArray = [];
const length = fruits.length;
for (let i = 0; i < length; i++) {
    reverseArray.push(fruits.pop());
}
console.log("🚀 ~ fruits:", fruits);
console.log("reverseArray", reverseArray);
 */

// 3 shift - Remove element from start of the array
console.log(fruits);
//fruits.shift();
// 4 unshift  - Add one item from start of the array
// fruits.unshift(grapes);
console.log(fruits);

// -------------------
//Manupilating arrays

// Reverse
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.reverse(); // No need to pass anything, index last to first
// IMPORTANT - IT WILL ALTER the ORIGINAL ARRAY
// INTERVIEW QUESTION -  Will revers function alter or return new array : ALTER original array
console.log("Reverse", numbers);
// sort
const alphabets = ["hello", "hamper"];
alphabets.sort(); // NUMBER - 1-9, Strings A-Z,a-z
console.log("sort", alphabets);
