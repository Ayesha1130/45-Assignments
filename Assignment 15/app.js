"use strict";
//Q 15
Object.defineProperty(exports, "__esModule", { value: true });
//Changing Guest List: You just heard that one of your guests 
//can’t make the dinner, so you need to send out a new set of
// invitations. You’ll have to think of someone else to invite.
let guestList = ["Hoorain", "Nabiha", "Aflah"];
guestList.forEach(guest => {
    console.log(`Dear ${guest} You are invited to  dinner`);
});
//Print the name who can`t make dinner.
let canNotAttend = guestList.slice(1, 1)[0];
console.log(`${canNotAttend},cant invite for dinner`); //"can not make  dinner."
//push guest
guestList.push("Ayesha");
console.log(guestList);
//Print a message
guestList.forEach(guest => {
    console.log(`Dear ${guest} you are invited `);
});
