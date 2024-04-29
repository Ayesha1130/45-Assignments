// Q 17Shrinking Guest List: You just found out that your new
// dinner table won’t arrive in time for the dinner, and you
// have space for only two guests.
//Printing Guest List In Array
let guestsList = ["Hoorain", "Aflah", "Ayesha"];
//Print the name who can`t make dinner.
let canNotAttend = guestsList[0];
// Printing Message who cant invite
console.log(`${canNotAttend},cant invite for dinner`); //"can not make  dinner."
//Delete and Add name using splice()
guestsList.splice(0, 1, "Ayesha");
console.log("Great New ! we found a bigger dinner table");
//unshift()
guestsList.unshift("Hareem");
//splice()
guestsList.splice(Math.floor(guestsList.length / 2), 0, "Fatima");
//push()
guestsList.push("Farah");
guestsList.forEach(guest => {
    console.log(`Dear ${guest}, you all are cordially invited to dinner`);
});
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
