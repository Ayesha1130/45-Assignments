// Q 13

//Your Own Array: Think of your favorite mode of transportation,
// such as a motorcycle or a car, and make a list that stores 
//several examples. Use your list to print a series of statements
// about these items, such as “I would like to own a Honda
// motorcycle.”

//printing a transpot name in a array.

let transportationMode: string[] = ["Surf","motor cycle","Parado","BMW"];

// for loop

for (let i = 0; i < transportationMode.length; i++) {
    console.log(` I would like to own a ${transportationMode[i]}`);
    
    
}