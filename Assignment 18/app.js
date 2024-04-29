//Task 18
//Seeing the World: Think of at least five places in the world
// you’d like to visit.
let placesToVisit = ["dubai", "italy", "paris", "china", "japan"];
//printing original order.
console.log("original Order:", placesToVisit);
// Print your array in alphabetical order.
console.log("alphabetical Order:", placesToVisit.slice().sort());
//array is still in its original order by printing it.
console.log("original Order :", placesToVisit);
//Print  array in reverse alphabetical order without changing the order of the original list.
console.log(" reverse alphabetical Order:", placesToVisit.slice().sort().reverse());
//•array is still in its original order by printing it again.
console.log("original order after reverse:", placesToVisit);
//Reverse the order of your list. Print the array to show
// that its order has changed.
console.log("Reversed order changed:", placesToVisit);
placesToVisit.reverse();
console.log(placesToVisit);
//Reverse the order of your list again. Print the list to show
// it’s back to its original order
placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);
//Sort your array so it’s stored in alphabetical order. 
placesToVisit.sort();
console.log("sorted in alphabetical order:", placesToVisit);
//Sort to change your array so it’s stored in reverse
// alphabetical order.
console.log(" reverse alphabetical order changed:", placesToVisit.sort().reverse());
console.log(placesToVisit);
export {};
