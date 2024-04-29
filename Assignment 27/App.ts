/*Task 27
If the alien is green, print a message that the player
earned 5 points.

If the alien is yellow, print a message that the player earned
10 points.

If the alien is red, print a message that the player earned 
15 points.*/

//Version 1

let alienColor = "Green";

if(alienColor === 'Green'){
    console.log("(version 1) Player earned 5 points");
}
else if(alienColor === 'Red'){
    console.log("Player earned 10 points");
}
else if(alienColor === 'Yellow'){
    console.log("Player earned 15 points");
}
 
// Version 2
let alienColor2 = "Red";

if (alienColor2 === 'Yellow') {
    console.log("Player earned 15 points");
}
else if(alienColor2 === 'Red'){
    console.log("(version 2) Player earned 10 points");
}
else if(alienColor2 === 'Green'){
    console.log("Player earned 5 points");
}

// Version 3

let alienColor3 = "Yellow";

if (alienColor3 === 'Green') {
    console.log("Player earned 5 points");
}
else if (alienColor3 === 'Red') {
    console.log("Player earned 10 points");
}
else if(alienColor3 === 'Yellow') {
    console.log("(version 3) Player earned 15 points");
}

