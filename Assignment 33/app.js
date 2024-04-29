"use strict";
//Task 33
Object.defineProperty(exports, "__esModule", { value: true });
/*Ordinal Numbers: Ordinal numbers indicate their position in a array, such as
1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.*/
// Creating a Array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Using For loop
for (let number of numbers) {
    if (number === 1) {
        console.log(`${number}st`);
    }
    else if (number === 2) {
        console.log(`${number}nd`);
    }
    else if (number === 3) {
        console.log(`${number}rd`);
    }
    else {
        console.log(`${number}th`);
    }
}
