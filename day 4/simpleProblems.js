// basic of variables
// for loop
// functions
// Simple problems

const task = "Task 1";
const deadline = "deadline 1";
const status = "Pending 1";

/*
Template for quesitons
function questionName(input) {
    const result = 1;
    return result;
}
const result = questionName(23);
console.log(result); 
*/

// Arthimatic operators + - * / %
// conditional operators  && || !== ==

/* Calculator app  */
function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}
const result = add(54, 96);
console.log(result);
// sub, multiplication

function divide(firstNumber, secondNumber) {
    if (secondNumber !== 0) {
        // conditional checks
        return firstNumber / secondNumber;
    } else {
        return "Not divisible";
    }
}
const divisionResult = divide(2, 0);
console.log(divisionResult);

///////////
// Creating a new array or manipulating an existing array
// kmperHr = [40,80,120,160]
// miles
// 1 mile = kmperhr *0.62
function kmperHrToMiles(inputArray) {
    const milesArray = [];

    for (let i = 0; i < inputArray.length + 1; i++) {
        // inputArray = [40, 60, 80, 120]
        milesArray.push(inputArray[i] * 0.62); // for i = 0,  inputArray[0] = 40 , inputArray[i] * 0.62 = 40 *0.62
        //inputArray[i] * 0.62
        //40 *0.62 // when i = 0
        //60 *0.62  // when i = 1
        //80 * 0.62 // when i = 2
        //120 *0,62 // when i = 3
        //inputArray[4]
    }
    return milesArray;
}

const kmperHrToMilesResult = kmperHrToMiles([40, 60, 80, 120]);
console.log(kmperHrToMilesResult);
