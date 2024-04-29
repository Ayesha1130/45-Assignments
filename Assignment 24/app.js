//Task 24
//More Conditional Tests: You don’t have to limit the number of 
//tests you create to 10. If you want to try more comparisons, 
//write more tests. Have at least one True and one False result 
//for each of the following:
//NO 1  Tests for equality and inequality with strings
let apple = "Apple";
let upperCase = "APPLE";
let ten = 10;
let twenty = 20;
//Print Array
let fruit = ["Apple", "Orange", "Banana"];
//Printing equality
console.log("\nIs Apple Equal to Apple?");
console.log(apple == 'Apple');
// Printing Inequality 
console.log("\nIs Apple Not Equal to Apple");
console.log(apple != 'Apple');
//• Tests using the lower case function
console.log("\nIs APPLE is equal to apple after converting to lower case?");
console.log(upperCase.toLowerCase() == 'apple');
console.log("\n APPLE is not equal to apple after after converting to lower case?");
console.log(upperCase.toLowerCase() != 'apple');
/*• Numerical tests involving equality and inequality, greater than and less than,
greater than or equal to, and less than or equal to*/
//Equality
console.log("\nIs ten is equal to 10?");
console.log(ten == 10);
//Inequality
console.log("\nIs ten is not equal to 10");
console.log(ten != 10);
//Greater than
console.log("\nIs twenty greater than 10?");
console.log(twenty > ten);
//Less than
console.log("\nIs ten less than 5?");
console.log(ten < 5);
// greater than equal
console.log("\nIs twenty greater than equal 30?");
console.log(twenty >= 10);
// Less than equal
console.log("\nIs twenty less than equal 5?");
console.log(twenty <= 5);
//• Tests using "and" and "or" operators
//using && operator
console.log("\n  Is twenty not equal to ten and Is ten greater than twenty?");
console.log(twenty != ten && ten > twenty);
//using || operator
console.log("\n Is twenty less then ten or Is twenty not equal to ten?");
console.log(twenty < 10 || twenty != 10);
//• Test whether an item is in a array
console.log("\n Is Orange includes fruit array?");
console.log(fruit.includes("Orange"));
//Test whether an item is not in a array
console.log("Is banana not includes fruit array?");
console.log(!fruit.includes("Banana"));
export {};
