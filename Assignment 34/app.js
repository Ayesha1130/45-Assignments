"use strict";
/*Task 34

Pizzas: Think of at least three kinds of your favorite pizza.
Store these pizza names in a array, and then use a for loop
to print the name of each pizza.*/
Object.defineProperty(exports, "__esModule", { value: true });
// Creating a Array
let favorite_pizza = ["Pepperoni", "veg pizza", "Chilli pizza"];
// Using for loop
for (let pizza of favorite_pizza) {
    console.log(`i really like ${pizza} pizza!`);
}
//Printing a Message outside of the for loop
console.log("Pizza Is Love");
