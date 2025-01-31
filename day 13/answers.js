// 1. Memoized Sum Function
const localMemory = {}; // Global Object to store previous results
function createMemoizedSum(a, b) {
    const key = `${a},${b}`; // Create a key based on the arguments
    if (localMemory[key] !== undefined) {
        return localMemory[key]; // Return cached result if it exists
    }
    const result = a + b;
    localMemory[key] = result; // Cache the result for future use
    return result;
}
console.log(createMemoizedSum(1, 2));
console.log(createMemoizedSum(1, 2));

printRightAlignedTriangle(5); // Output: Right-aligned triangle with 5 rows

// 2. Produts searching
// Function to get product details
function getProductDetails(id) {
    let productFound = false;

    for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            const price = (id * 100) / 3 - 75; // Calculate the price
            console.log(
                `${products[i].name} price: ${price.toFixed(
                    2
                )}, Status: Available`
            );
            productFound = true;
            return `${products[i].name} price: ${price.toFixed(
                2
            )}, Status: Available`;
        }
    }

    if (!productFound) {
        console.log(`Product with ID ${id} not found.`);
        return `Product with ID ${id} not found.`;
    }
}

// 3. Pattern Printing: Right-Aligned Triangle using for loops
// FOR TESTING PRNIT J OR Some symbol like # to see if number of spaces is correct
function printRightAlignedTriangle(n) {
    // Outer loop for each row
    for (let i = 1; i <= n; i++) {
        let row = "";

        // Inner loop for spaces: Number of spaces decreases with each row
        for (let j = n; j > i; j--) {
            row += " "; // Add space to the row,
        }

        // Inner loop for stars: Number of stars increases with each row
        for (let k = 1; k <= i; k++) {
            row += "*"; // Add star to the row
        }

        console.log(row); // Print the row
    }
}
