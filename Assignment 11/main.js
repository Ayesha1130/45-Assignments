"use strict";
// Q 11
//Names: Store the names of a few of your friends in a array 
//called names. Print each person’s name by accessing each element
// in the list, one at a time.
//Defines an array of names.
let names = ["Hoorain", "Nabiha", "Aflah", "Ajwa", "Hareem"];
// for loop
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//for each
names.forEach(name => {
    console.log(name);
});
//for of loop
for (const friendsName of names) {
    console.log(friendsName);
}
