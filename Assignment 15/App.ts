//Q 15

//Changing Guest List: You just heard that one of your guests 
//can’t make the dinner, so you need to send out a new set of
// invitations. You’ll have to think of someone else to invite.

//Printig guest list in array
let guestList : string[] = ["Hoorain","Nabiha","Aflah"];

//Print the name who can`t make dinner.
let canNotAttend = guestList[0];
 
 // Printing Message who cant invite
console.log(`${canNotAttend},cant invite for dinner`);//"can not make  dinner."

//Delete and Add name using splice()
guestList.splice(0,1,"Ayesha")


//Printing message for all guests using forEach loop
guestList.forEach(guest => {
    console.log(`Dear ${guest} You are invited to  dinner`)
});













