/*Task 30
Hello Admin: Make a array of five or more usernames, including
the name 'admin'. Imagine you are writing code that will print
a greeting to each user after they log in to a website.
Loop through the array, and print a greeting to each user:*/
//Creating  a Array
let userNames = ["admin", "Erik", "John", "Jackson", "johnson"];
//Applying forEach Loop on Array
userNames.forEach(oneUser => {
    if (oneUser === "admin") {
        console.log(`Hello ${oneUser} would you like to see a status report? `);
    }
    else {
        console.log(`hello ${oneUser} thank you for logging in again. `);
    }
});
export {};
