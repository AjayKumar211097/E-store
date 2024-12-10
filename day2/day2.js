/* Strings declarations */
const singleQuote = true; // single quote
const doubleQuote = "line1 "; // double quote
const backtick = `Date  `; // backtick
const dynamicValue = `Day ${singleQuote + doubleQuote} `; // backtick - JS logic in betweek strings ${} EG: ${variables}
//${}` backtick ${5 + "treui"}`;
const story = `Line 1
Line 2, 
Line 3
Line 4, `;

/* Question */
//let num1 = 15;
//let num2 = 20;
//let sentence = `The sum of ${num1} and ${num2} is ${num1 + num2}`;

function printMax(a, b) {
    const max = a > b ? a : b;
    return `The max of ${a}, ${b} is ${max}`;
}

/* For loops basic*/
// Repeat work
// Arrays, strings, object

for (let i = 1; i <= 10; i++) {
    // For loop is clear
    const result = i * 2; // 2,4,6,8,10     // i manipulation
    // console.log(`2 x ${i}  = ${result}`); // String interpolation
}
// Q:  Write a for loop to print the square of numbers from 1 to 10.
// Q:  Write a loop that finds the factorial of the number 6.
// 6!= 1*2*3*4*5*6
// 8!= 1*2*3*4*5*6*7*8
// 1-5

let fact = 1;
for (let x = 1; x <= 8; x++) {
    fact = fact * x;
}
console.log("fact of 8 is", fact);
