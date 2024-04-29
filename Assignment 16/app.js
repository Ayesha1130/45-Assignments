"use strict";
//Q 16
//More Guests: You just found a bigger dinner table, so now more 
//space is available. Think of three more guests to invite to 
//dinner.
Object.defineProperty(exports, "__esModule", { value: true });
//Printing Guest List In Array
let guestList = ["Hoorain", "Aflah", "Ayesha"];
//Print the name who can`t make dinner.
let canNotAttend = guestList[0];
// Printing Message who cant invite
console.log(`${canNotAttend},cant invite for dinner`); //"can not make  dinner."
//Delete and Add name using splice()
guestList.splice(0, 1, "Ayesha");
console.log("Great New ! we found a bigger dinner table");
//unshift()
guestList.unshift("Hareem");
//splice()
guestList.splice(Math.floor(guestList.length / 2), 0, "Fatima");
//push()
guestList.push("Farah");
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you all are cordially invited to dinner`);
});
