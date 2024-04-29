// Q 19
//Dinner Guests: Working with one of the programs from Exercises
// 14 through 18, print a message indicating the number of people
// you are inviting to dinner.
//print guest list in array.
let guestsList = ["Ayesha", "Aflah", "Ajwa", "Fatima"];
//Print message
console.log("unfortunately! the new dinner table wont arrive so we can invite only 2 guest.");
//unshift 
guestsList.unshift("Zaviyar", "Ali");
//update guest list
console.log("updated list of guest:", guestsList);
//remove guest from the list
while (guestsList.length > 2) {
    let removedGuest = guestsList.pop();
    if (removedGuest !== undefined) {
        console.log(`Sorry, ${removedGuest}, we cant invite you`);
    }
}
//Print a message to each of the two people still on your list, 
//letting them know they’re still invited.
guestsList.forEach(guest => {
    console.log(`Dear ${guest} you both are still invited for the dinner`);
});
//remove 2 names from the list
guestsList.splice(0, guestsList.length);
//print updated empty list
console.log("update empty list of guest:", guestsList);
export {};
