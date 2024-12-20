const input = [3, 8, 1, 4, 10, 5];

/* Searching */
const exists = input.includes(5);

/* function search(input, toCheckNumber) {
    console.log(input);
    let found = false;
    for (let i = 0; i < input.length; i++) {
        // 1== 1
        if (input[i] === toCheckNumber) {
            // Check if currentNumber == toCheckNumber
            console.log("I found the number "); // CONCEPT, STORE THE VALUE found
            found = true;
        } else {
            //3==1, 8==1, 4 ==1, 10==1, 5==1
            console.log(`Not yet`);
        }
    } // for loop ends
    return found;
} */
/* function search(input, toCheckNumber) {
    console.log(input);
    for (let i = 0; i < input.length; i++) {
        if (input[i] === toCheckNumber) {
            // 1==1
            // Check if currentNumber == toCheckNumber
            console.log("I found the number "); // New CONCEPT,early retuns
            return true; /// Retrun will stop the function
        } else {
            // 3==1, 8==1,
            console.log(`Not yet`);
        }
    } // for loop ends
    return false;
} */
function simpleSearch(input, toCheckNumber) {
    for (let i = 0; i < input.length; i++) {
        if (input[i] === toCheckNumber) {
            return true;
        }
    }
    return false; // default condition, If we did not find anything in the loop, this will be printed
}
const exist = simpleSearch(input, 1);
console.log("🚀 ~ 5 exist :", exist);

/* Sorting */
const sortingArry = [21, 3, 8, 1, 4, 10, 5, 31];
/*  
[21, 3, 8, 1, 4, 10, 5, 31];
[1, 3, 4, 5, 21, 8, 10, 31];
 */
let firstValue = 21; //1
let secondValue = 1; //21

/* Simple swap */
let temp = 0;
console.log(firstValue, secondValue);
/* firstValue = secondValue; // value 1 to 21st place
secondValue = firstValue; // 21? but value is 1 */
///IMPORTANT : FIRST LINE OF EXECUTION ; LHS VALUE
temp = firstValue; //1
firstValue = secondValue;
secondValue = temp;

console.log(firstValue, secondValue);

function sort(input) {
    console.clear();
    console.log(input);
    for (let i = 0; i < input.length - 1; i++) {
        // last -1, So we dont cehck last value in upper loop
        for (let j = i + 1; j < input.length; j++) {
            // Last of the loop
            if (input[i] > input[j]) {
                let temp = input[i]; // Save first value
                input[i] = input[j]; // Assign second value To first variable
                input[j] = temp; // Assign already stored temp value to second variable
            }
        }
    }
    return input;
}

// console.log("Sorted arry", sort([21, 3, 8, 1, 4, 10, 5, 31]));
let first = 10;
let second = 4;
first = first + second; // 14
second = first - second; //14-4= 10
first = first - second; //14-10= 4
