/*Task 43

Unchanged Magicians: Start with your work from Exercise 42.
Call the function make_great() with a copy of the array of 
magicians’ names. Because the original array will be unchanged,
return the new array and store it in a separate array. Call
show_magicians() with each array to show that you have one
array of the original names and one array with the Great added
to each magician’s name.*/


//Define the function to show magicians name
function show_magicians(magicians:string[]){
    magicians.forEach(name => console.log(name));
    
}
 // Function make magicians great though .map() it will  modify array
function make_great(magicians:string[]){
    return magicians.map(name => `The Great ${name}`);
}

// Define an array of magicians name
let magician_names =["Ali Raza","Zaviyar","Hussain"];

//Making copy of orginal array through .slice() function
let copy_magicians_names = magician_names.slice();

//modified copied array to include "The Great" with their names
let copy_great_megicians = make_great(copy_magicians_names);

//show both array orginal and copy

//Orignal
console.log("\n***Orginal Array***");

show_magicians(magician_names);

//Copied
console.log("\n***Copied Array***");

show_magicians(copy_great_megicians);