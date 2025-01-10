// Regular function
// declaration of function with name, a,b as inputs parameters
function name(a, b) {
    return a + b;
}
// funciton calling
const res = name(1, 2); // 1,2 are parameters
// res = ? 3
console.log(res);

// Arrow functions = shortcut of regular functions
// when to use it, we want to have small, quick, functions
// 5-10 lines max
const nameOfFunction = () => {
    return;
};
// Template : always "const" nameOfFunctiun = (inputprameter) "=>" you have curly braces{ logic }

// if total is greater thatn 1000, 10%
// practice , aptitude question , How to get 98% discount , 100 - 98 = 2/100 , value *0.02
const applyDiscount = (total) => {
    if (total > 1000) {
        return total * 0.9;
    }
};

console.log(applyDiscount(1150));
// Ramya: Write a new function getCostlyItems(items) that returns only the items (items.price), costing above \$500.
// Meghana: Write a function convertPricesToINR(items) (items.price) that shows currency in INR, 1usd = INR 85.9, Default price in objects is USD.
const convertPricesToINR = (items) => {
    return items.price * 85.9;
};
console.log(convertPricesToINR({ price: 200 }));
// e-commerce, Helper functions
function caclulateOrder() {}

//------for. in

// for of , Sequence of items : arrays or strings
const obj = { price: 200, name: "Baggit", status: true };
for (const key in obj) {
    console.log(key, obj[key]);
}
///
console.clear();
const students = ["Asha", "jai", "sai"];
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}
console.log("-------");
for (const student of students) {
    console.log(student);
}
//-----------

// arrow function , new concept For of, revies For in
