// 1. Simple: FizzBuzz with a Twist
// Problem: Write a function customFizzBuzz(n) that takes an integer n and prints the numbers from 1 to n
// with the following rules:
// - Print "Fizz" for multiples of 3.
// - Print "Buzz" for multiples of 5.
// - Print "FizzBuzz" for multiples of both 3 and 5.
// - Print the number itself for all other numbers.

function customFizzBuzz(n) {
    // Write your code here
}

// Example:
customFizzBuzz(5); // Output: 1, 2, Fizz, 4, Buzz
customFizzBuzz(15); // Output: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz
customFizzBuzz(1); // Output: 1

// ----------------------------------------------------------

// 2. Simple: Sum of Even Numbers in a Range
// Problem: Write a function sumEvenNumbers(start, end) that takes two integers start and end
// and returns the sum of all even numbers in the range [start, end].

function sumEvenNumbers(start, end) {
    // Write your code here
}

// Example:
console.log(sumEvenNumbers(1, 10)); // Output: 30 (2 + 4 + 6 + 8 + 10)
console.log(sumEvenNumbers(4, 8)); // Output: 18 (4 + 6 + 8)
console.log(sumEvenNumbers(1, 1)); // Output: 0 (no even numbers)

// ----------------------------------------------------------

// 3. Medium: Count Divisors in a Range
// Problem: Write a function countDivisors(start, end, divisor) that takes three integers start, end, and divisor
// and returns the count of numbers in the range [start, end] that are divisible by divisor.

function countDivisors(start, end, divisor) {
    // Write your code here
}

// Example:
console.log(countDivisors(1, 10, 3)); // Output: 3 (3, 6, 9)
console.log(countDivisors(5, 15, 5)); // Output: 3 (5, 10, 15)
console.log(countDivisors(1, 5, 7)); // Output: 0 (no numbers divisible by 7)

// ----------------------------------------------------------

// 4. Find Palindromic Numbers in Range
// Problem: Write a function findPalindromicNumbers(start, end) that takes two integers start and end
// and returns an array of numbers in the range [start, end] that are palindromes (read the same forward and backward).
// You can use function isPalindrome
const isPalindrome = (x) =>
    x === parseInt(x.toString().split("").reverse().join(""));
// Usage isPalindrome(32) output : false
// Usage isPalindrome(11) output : true

function findPalindromicNumbers(start, end) {
    // Write your code here
}

// Example:
console.log(findPalindromicNumbers(10, 20)); // Output: [11]
console.log(findPalindromicNumbers(1, 100)); // Output: [1, 2, 3, ..., 9, 11, 22, 33, 44, 55, 66, 77, 88, 99]
console.log(findPalindromicNumbers(50, 60)); // Output: []

// ----------------------------------------------------------

// 5. Medium-Hard: Generate Multiplication Table for a Range
// Problem: Write a function generateMultiplicationTable(start, end, multiplier) that takes three integers start, end, and multiplier.
// It should return an array where each element is the product of the number in the range [start, end] and multiplier.

function generateMultiplicationTable(start, end, multiplier) {
    // Write your code here
}

// Example:
console.log(generateMultiplicationTable(3, 5, 2)); // Output: [6, 8, 10] i.e ([3x2 = 6, 4x2 = 8, 5x2 = 10])
console.log(generateMultiplicationTable(1, 3, 5)); // Output: [5, 10, 15] i.e ([1x5 = 5, 2x5 = 10, 3x5 = 15])
console.log(generateMultiplicationTable(7, 7, 3)); // Output: [21] i.e ([7x3 = 21])
