// Objects - Important

// datatypes
// Advanced Data types Array, objects

const x = 0;

const array = [1, true, 32, false];
const object = {}; // empty object
// Objects consists of Key-value pairs - used - to store data and functions

// Template for object
const nameOfObject = {}; // Curly braces
/*
{
key:value ,
key1:value, // unique key 
key2:value // every key-value you should have "," 
}
*/

const bag = {
    // Declaration

    price: 120,
    status: true,
    getTitle: function (name) {
        console.log("I am a funciton ", name);
    },
};

// Access
console.log(bag["price"]); // objectName["KEY"]-squarebrackets
console.log(bag.price); // objectName.KeyName

// Edit value
bag.price = 10; // objectName.KeyName - dot notation
bag["price"] = 7; // objectName["KEY"]-squarebrackets
console.log("After editing", bag.price); // objectName.KeyName

// Add new properties == key + value
console.log("Before new property:", bag.coupon); // objectName.KeyName
bag.coupon = "Summer10"; // Add a new value
bag["coupon"] = 7; // Add a new value - objectName["KEY"]-squarebrackets
console.log("After new property:", bag.coupon); // objectName.KeyName

bag.getTitle("Passing new name");

bag.getTitle = function () {
    // Updating existing function
    console.log("New function");
};
bag.getTitle();

bag.getTitle = "TITLE";
console.log(bag.getTitle);

// Deconstruction of objects
console.log(bag);

const temp = array[1]; // [1,true]
console.log(temp);

const { price } = bag;
console.log("Deconstruction", price);

const { status, coupons } = bag; // Deconstruction of multiple values from object
console.log("Spelling mistake, Coupons", coupons);

const [fakeName, secound] = array; //[1, true, 32, false] [0,1,2,3]
console.log("Deconstruction of array", fakeName, secound);

// for i, array[i] //index 0-length
// Repeat a object
console.clear();
for (const key in bag) {
    /*   console.log(key); // Keys--------------------Get All keys
    console.log(bag.key); // key = price , bag.key , bag.price, wrong
    console.log(bag[key]); // Square brackets, "key"x, key --------------------Get All values */

    console.log(`${key} : ${bag[key]}`);
}

const keyNameInsideAVariable = "Password";
bag.Password = "100"; // Object has that exact key
console.log(bag["Password"]);
console.log(bag[keyNameInsideAVariable]); // Then i can dynamically use keynamekeyNameInsideAVariable
