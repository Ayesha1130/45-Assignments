/*Task 44

Sandwiches: Write a function that accepts a array of items a
person wants on a sandwich. The function should have one 
parameter that collects as many items as the function call 
provides, and it should print a summary of the sandwich that 
is being ordered. Call the function three times, using a 
different number of arguments each time.*/

//Define a function with a rest parameter that accept arguments representing our sandwich
function sandwich(...items: string[]): void {
  console.log("\n***Sandwish order:***");

  //Using For loop
  for (let i = 0; i < items.length; i++) {
    console.log(`${items[i]}`);
  }
}
//Pringing message
console.log("\n***Ayesha Enjoy Your Sandwich***");

//calling function three times with 3 different number of arguments
sandwich("chicken", "ketchup", "Mayo");

sandwich("green chilli", "beef", "spice", "bread");

sandwich("ketchup", "Mayo", "chicken", "Egg", "bread");
