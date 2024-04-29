"use strict";
/*Task 41

Magicians: Make a array of magician’s names. Pass the array to
a function called show_magicians(), which prints the name of
each magician in the array.*/
Object.defineProperty(exports, "__esModule", { value: true });
//Define a function to each magicians name from an array
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
//Define an array containing magicians name
let magician_names = ["Ali Raza", "Zaviyar", "Hussain"];
// Calling the function to print each magician name
show_magicians(magician_names);
