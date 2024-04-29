"use strict";
/*Task 37

Large Shirts: Modify the make_shirt() function so that shirts
are large by default with a message that reads I love
TypeScript. Make a large shirt and a medium shirt with the
default message, and a shirt of any size with a different
message.*/
Object.defineProperty(exports, "__esModule", { value: true });
// Making a Function
function makeShirt(size = "Large", text = "I love typescript.") {
    console.log(`\n you have order a ${size}, shirt that says ${text}`);
}
//Calling a function with by default value
makeShirt();
//Calling a function now with medium size and default message
makeShirt("medium");
//Calling a function now with small size and print on different message
makeShirt("small", "I need a big shirt to wear.");
