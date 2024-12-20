// Array
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.length);

numbers.push(6); // add at last
console.log(numbers);

numbers.pop(); // removes from last
console.log(numbers);

numbers.shift(); // deletes from first
console.log(numbers);

numbers.unshift(1); // Adds from first
console.log(numbers);

const last = numbers.pop(); // 5, numbers = [1,2,3,4]
numbers.pop(); // last second value
numbers.push(last); // readding last value

/* ------- */
// SPREAD operation

/* ------- */
console.log(numbers);
const isPresent = numbers.includes(5);
console.log("isPresent", isPresent);
/// Use case

const blackList = ["john", "Alan", "Henry"];
function checkPersonIsBlackListed(personName) {
    const isBlackListed = blackList.includes(personName);
    return isBlackListed;
}

console.log(checkPersonIsBlackListed("John")); // CaseSensitive
/* ------------ */
const multiLevelArray = [1, 2, 3, [4, 5, 6]];
console.log(multiLevelArray.flat()); // Default clears 1 level

function getSingleArray(arry, levels) {
    return arry.flat(3);
}
const array = [
    [[1, [2]], [3]],
    [4, 5],
];
const result = getSingleArray(array); // take 2 arrays and make one single array
console.log("🚀 ~ result:", result);
console.clear();
/* --------------- */
// Math funciton
const min = Math.min(2, 89, 3);
const max = Math.max(2, 89, 3);
const random = Math.random(); // random value from 0-1 (Eg: 0.158989,0,6899940)
const randomFrom09 = Math.floor(Math.random() * 10);
console.log("🚀 ~ random:", randomFrom09);
/* ------- */
