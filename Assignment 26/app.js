/*Task 26
 If the alien’s color is green, print a statement that the
player just earned 5 points for shooting the alien.

If the alien’s color isn’t green, print a statement that the
player just earned 10 points.*/
let alien_color = "Green";
if (`alien_color === "Green"`) {
    console.log("\nplayer just earned 5 points for shooting the alien ");
}
else {
    console.log("player just earn 10 points");
}
//• If the alien’s color isn’t green, print a statement that the player just
//earned 10 points.
if (alien_color === "Red") {
    console.log("\nplayer just earned 10 points.");
}
else {
    console.log("player just earned 5 points for shooting the alien.");
}
//Write one version of this program that runs the if block and another that runs the 
//else block.
if (alien_color === "yellow") {
    console.log("\nplayer just earned 10 points.");
}
else {
    console.log("player just earned 5 points for shooting the alien.");
}
export {};
