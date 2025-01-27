// JavaScript Interview Questions

// 1. Memoized Sum Function
function memoizedSum(a, b) {
    // Implement your code here
}

//2.
function getProductDetails(id) {
    // Implement your code here
}

// 3. Pattern Printing: Right-Aligned Triangle
function printRightAlignedTriangle(n) {
    //implement your code here
}

// ---- Problem Descriptions ----

// **Problem 1: Memoized Sum Function**
/*
    Problem:
    Write a program to create a memoized version of a function that computes the sum of two numbers.
    The memoized function should store the results of previously computed sums and return the cached (From Memory) result for repeated inputs.

    Hints:
    1. Use a global object to store previously computed results (this is the cache or memory).
    2. The key for caching can be a string representation of the arguments (e.g., `"a,b"`).
    3. If the sum for the given arguments already exists in the cache, return it directly; otherwise, compute and store it.

    Example 1:
    Input:
    console.log(memoizedSum(3, 4)); // Output: 7
    console.log(memoizedSum(3, 4)); // Output: 7 (From Memory)
    console.log(memoizedSum(4, 5)); // Output: 9

    Example 2:
    Input:
    console.log(memoizedSum(1, 2)); // Output: 3
    console.log(memoizedSum(1, 2)); // Output: 3 (From Memory)
    console.log(memoizedSum(2, 2)); // Output: 4

    Example 3:
    Input:
    console.log(memoizedSum(10, 20)); // Output: 30
    console.log(memoizedSum(10, 20)); // Output: 30 (From Memory)
    console.log(memoizedSum(5, 5));  // Output: 10
    console.log(memoizedSum(10, 20)); // Output: 30 (From Memory)
*/

// **Problem 2: Fetch Product Details and Calculate Price**
/*
    Problem:
    You are given an array of product objects with their IDs and names. 
    Write a function `getProductDetails(id)` that:
    1. Searches for the product with the given ID from the array.
    2. Calculates the price using the formula:
       `price = id * 100`.
    3. Returns the product's name, calculated price, and status.

    Task:
    Use a for-loop to find the product in the array by its ID. If found, calculate and display FAKE product's details."Look at message in examples".
    If the ID does not exist, display an appropriate FAKE message "Look at message in examples".

    Example Input:
    const products = [
        { id: 1, name: "Product A" },
        { id: 2, name: "Product B" },
        { id: 3, name: "Product C" }
    ];

    Example Output:
    If `id = 2`, and it exits in products then the output should be:
    "Product B price: 200, Status: Available"
    If `id = 5`, and it does not exits in products then the output should be:
    "Product C is not available."
*/

// **Problem 3: Pattern Printing - Right-Aligned Triangle**
/*
    Problem:
    Given a number `n`, print a right-aligned triangle pattern made of asterisks (`*`) where the number of rows is equal to `n`.
    Each row should have one more star than the previous row, and the stars should be aligned to the right.

    Hints:
    1. Dive the problem into steps and use as many for loops as needed
    2. Focus on printing the correct number of spaces before the stars. 
    2. The number of spaces decreases as the rows progress, while the number of stars increases.
    3. Start by printing spaces, followed by stars in each row.
    
    Example 1:
    Input: 4
    Output:
       *
      **
     ***
    ****

    Example 2:
    Input: 5
    Output:
        *
       **
      ***
     ****
    *****
  
    Example 3:
    Input: 3
    Output:
      *
     **
    ***
*/

// Array of products
const products = [
    { id: 13, name: "Samsung Galaxy M35 5G " },
    { id: 8, name: "Redmi A4 5G " },
    { id: 74, name: "iPhone 16 128 GB" },
    { id: 32, name: "OnePlus 13 256 GB " },
    { id: 12, name: "POCO x6 Neo 5G " },
    { id: 71, name: "Samsung S23 Ultra 5G" },
];

console.log("\nMemoized Sum Test:");
console.log(memoizedSum(10, 20)); // Output: 30
console.log(memoizedSum(2, 2)); // Output: 4
console.log(memoizedSum(5, 5)); // Output: 10
console.log(memoizedSum(1, 2)); // Output: 3 (From Memory)
console.log(memoizedSum(10, 20)); // Output: 30 (From Memory)
console.log(memoizedSum(1, 2)); // Output: 3
console.log(memoizedSum(3, 4)); // Output: 7
console.log(memoizedSum(10, 20)); // Output: 30 (From Memory)
console.log(memoizedSum(3, 4)); // Output: 7 (From Memory)
console.log(memoizedSum(4, 5)); // Output: 9

/* console.log("\nFetch Product Details and Calculate Price:");
getProductDetails(99); // Fetch and display details for product with id 2
getProductDetails(8); // Fetch and display details for product with id 2
getProductDetails(51); // Try to fetch details for a non-existent product
getProductDetails(32); // Fetch and display details for product with id 2
getProductDetails(12); // Fetch and display details for product with id 2
getProductDetails(-1); // Try to fetch details for a non-existent product */

/* console.log("Pattern Printing Test:");
printRightAlignedTriangle(4); // Output: Right-aligned triangle with 4 rows
printRightAlignedTriangle(5); // Output: Right-aligned triangle with 5 rows
printRightAlignedTriangle(3); // Output: Right-aligned triangle with 3 rows
 */
