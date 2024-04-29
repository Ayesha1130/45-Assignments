//Task 3
/*Checking Usernames: Do the following to create a program that simulates how
 websites ensure that everyone has a unique username.*/

// Create Array of current user
let current_users : string[] = ["admin","erik","John","Jackson","Johnson"];

// Create array of new user
let new_users : string[] = ["Ali","Zaviyar","Hussain","Erik","john"];

// Using Foreach Loop through new user to check for usernames availbility
new_users.forEach(new_users_one => {

// Making a condition for username already exist and save in our_condition variable    
  let our_condition = current_users.some(current_users_one => current_users_one.toLowerCase() === new_users_one.toLowerCase())

  // Printing different message using if-else statement
    if (our_condition) {
       console.log(`Sorry ${new_users_one} is already taken`)
    }else{
        console.log(`This username ${new_users_one} is available`);
        
    }
});


