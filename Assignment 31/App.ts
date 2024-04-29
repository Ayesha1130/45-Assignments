/*Task 31
No Users: Add an if test to Exercise 28 to make sure the list of
users is not empty.

If the list is empty, print the message We need to find someusers!
Remove all of the usernames from your array, and make sure the
correct message is printed.*/


//Creating a Array
let usernames: string[] = ["Admin", "Erik", "john", "jackson", "johnson"];

//Creating Empty Array
usernames = [];

//Applying If Else chain and forEach loop
if (usernames.length === 0) {
  console.log("your array is empty we need to find some users!");
} else {
  usernames.forEach(username => {
    if (username === "admin") {
      console.log(`hello ${username} would you like to see a status report?`);
    } else `Hellow ${username} , thank you for logging in again.`;
  });
}


