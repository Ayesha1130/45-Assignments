/*Task 42

Great Magicians: Start with a copy of your program from Exercise
39. Write a function called make_great() that modifies the 
array of magicians by adding the phrase the Great to each 
magician’s name. Call show_magicians() to see that the list 
has actually been modified.*/

//Define the function to show magicians name
function show_magicians(magicians:string[]){
    magicians.forEach(name => console.log(name));
    
}
 // Function make magicians great though .map() it will  modify array
function make_great(magicians:string[]){
    return magicians.map(name => `The Great ${name}`);
}

// Define an array of magicians name
let magician_names =["Ali Raza","Zaviyar","Hussain"]

// Call make great function to modify megicians names
let great_magicians = make_great(magician_names)

// Call show megicians function that show the modified list of megicians
show_magicians(great_magicians)
