```javascript
function isValidAddressId(addresses, selectedAddressId) {
    const ids = [];
    for (const address of addresses) {
        ids.push(address.id);
    }
    return ids.includes(selectedAddressId);
}

function calculateTotal(cart) {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity;
    }
    return total;
}

function findPriceExtremes(cart) {
    let maxPrice = cart[0].price;
    let minPrice = cart[0].price;
    for (let i = 1; i < cart.length; i++) {
        if (cart[i].price > maxPrice) maxPrice = cart[i].price;
        if (cart[i].price < minPrice) minPrice = cart[i].price;
    }
    return { maxPrice, minPrice };
}

function getBillingAddress(addresses, selectedAddressId) {
    for (const address of addresses) {
        if (address.id === selectedAddressId) {
            const { street, city, zipCode, country } = address;
            return `${street}, ${city}, ${zipCode}, ${country}`;
        }
    }
    return "Address not found!";
}

function processBilling(addresses, cart, selectedAddressId) {
    if (!isValidAddressId(addresses, selectedAddressId)) {
        return "Invalid Address ID provided!";
    }

    const totalAmount = calculateTotal(cart);
    const { maxPrice, minPrice } = findPriceExtremes(cart);
    const billingAddress = getBillingAddress(addresses, selectedAddressId);

    return `Billing Summary:\n- Total Amount: $${totalAmount}\n- Highest Priced Item: $${maxPrice}\n- Lowest Priced Item: $${minPrice}\n- Billing Address: ${billingAddress}`;
}

const addresses = [
    {
        id: "addr1",
        street: "123 MG Road",
        city: "Bangalore",
        zipCode: "560001",
        country: "India",
    },
    {
        id: "addr2",
        street: "456 Anna Salai",
        city: "Chennai",
        zipCode: "600002",
        country: "India",
    },
];

const cart = [
    { item: "Laptop", price: 1000, quantity: 1 },
    { item: "Headphones", price: 200, quantity: 2 },
    { item: "Keyboard", price: 150, quantity: 1 },
];

const selectedId = "addr1";

// Execution
const billingSummary = processBilling(addresses, cart, selectedId);
console.log(billingSummary);
```

## Billing System Homework Explanation

### Objective:

This billing system homework is designed to help you practice JavaScript concepts like:

-   **Objects and Arrays**
-   **For Loops**
-   **Functions and Function Calls**
-   **String Manipulation using Template Literals**
-   **Destructuring**
-   **Math Functions**

### Write hti

### Example Input:

```javascript
const addresses = [
    {
        id: "addr1",
        street: "123 MG Road",
        city: "Bangalore",
        zipCode: "560001",
        country: "India",
    },
    {
        id: "addr2",
        street: "456 Anna Salai",
        city: "Chennai",
        zipCode: "600002",
        country: "India",
    },
];

const cart = [
    { item: "Laptop", price: 1000, quantity: 1 },
    { item: "Headphones", price: 200, quantity: 2 },
    { item: "Keyboard", price: 150, quantity: 1 },
];

const selectedId = "addr1";
```

### Expected Output:

```
Billing Summary:
- Total Amount: $1550
- Highest Priced Item: $1000
- Lowest Priced Item: $150
- Billing Address: 123 MG Road, Bangalore, 560001, India
```

### Real-World Application:

This task mimics a checkout system used in online shopping platforms. Understanding how to manipulate objects and arrays in JavaScript is essential for building such features in e-commerce websites.

### Homework Task:

-   Comment on each concept used, e.g., `if()` // We are comparing this with that to get this, `function ()` // Used to calculate total price.
-   Write a new function applyDiscount() to create a discount feature where a 10% discount is applied if the total exceeds \$1000.
-   Write a new function getCostlyItems() that returns only the items costing above \$500.
-   Write a function convertPricesToINR() that shows currency in INR, 1usd = INR 85.9, Default price in objects is USD.
-   Write a function getTotalItemsInCart() that calculates the total number of items in the cart.

### Common Mistakes to Avoid:

-   Forgetting to return values from functions.
-   Incorrect use of loop counters.
-   Not validating data before performing operations.

Happy coding!
