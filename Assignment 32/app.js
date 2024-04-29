//Task 3
// Create Array of current user
let current_users = ["admin", "erik", "John", "Jackson", "Johnson"];
// Create array of new user
let new_users = ["Ali", "Zaviyar", "Hussain", "Erik", "john"];
// Using Foreach Loop
new_users.forEach(new_users_one => {
    let our_condition = current_users.some(current_users_one => current_users_one.toLowerCase() === new_users_one.toLowerCase());
    if (our_condition) {
        console.log(`Sorry ${new_users_one} is already taken`);
    }
    else {
        console.log(`This username ${new_users_one} is available`);
    }
});
export {};
