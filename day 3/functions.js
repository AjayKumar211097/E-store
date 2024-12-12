// variable
// let products = 123
// const array =[true, false , true]

// strings
// single
// qouble
// Backtick ``
// string interpolation ${variableName}

// forloop
// for(initialization; condition; increment/decrement){}

// functions
// Reusable block of code

//function -JavaScript KEYWORD

// function functionName(parameters) { code }

function largestOfTwoNumber(/* Paramets are optional  */) {
    // Code
}

function max(a, b) {
    console.log(a, b);
}

/* max(1, 2);
max(3, 2);
max(4, 2);
max(7, 2); */

function greet() {
    console.log("Hello world");
}

/* greet(); */

function largestOfTwoNumbers(a = 0, b = 0) {
    return a > b ? a : b;
}
const result = largestOfTwoNumbers(21, 85);

function smallestOfTwoNumbers(firstValue = 0, secondValue = 0) {
    const small = firstValue < secondValue ? firstValue : secondValue;
    return small;
}

function logger(a) {
    console.log(a);
}
