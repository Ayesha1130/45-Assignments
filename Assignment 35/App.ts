/*Task 35
Animals: Think of at least three different animals that have a
common characteristic. Store the names of these animals in a
list, and then use a for loop to print out the name of each 
animal.*/

//Creating a Array
let animals : string[] = ["Dog","Goat","Cat"];

// Using For loop and  Store the names of these animals in a list
for(let animal of animals){
    console.log(animal)
}

//Using For loop and print a statement about each animal, 
for(let animal of animals){
    console.log(`A ${animal} would make a great pet!`)
}

//Printing a Messege outside of the loop
console.log("All Pets Are Great!")