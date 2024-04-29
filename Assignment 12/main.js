"use strict";
//Q 12
//Greetings: Start with the array you used in Exercise 11,
// but instead of just printing each person’s name, print a
// message to them. The text of each message should be the same,
// but each message should be personalized with the person’s name.
let names = ["Hoorain", "Ajwa", "Aflah", "Nabiha", "Hareem"];
//for each loop
names.forEach(name => {
    console.log(` Dear, ${name}! We invite you to our wedding`);
});
