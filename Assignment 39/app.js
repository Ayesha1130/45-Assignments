"use strict";
/*Task 39

City Names: Write a function called city_country() that takes in
the name of a city and its country. The function should return
a string formatted like this:
"Lahore, Pakistan"
Call your function with at least three city-country pairs, and
print the value that’s returned.*/
Object.defineProperty(exports, "__esModule", { value: true });
//Creating a function with perameters which return a value in string
function cityCountry(city, country) {
    return `${city} , ${country}`;
}
// Calling a function and print the returned value
let c1 = cityCountry(`Lahore`, `Pakistan`);
let c2 = cityCountry(`Dubai`, `UAE`);
let c3 = cityCountry(`London`, `UK`);
console.log(c1);
console.log(c2);
console.log(c3);
