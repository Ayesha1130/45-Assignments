// Q 5
//Famous Quote 2: Repeat Exercise 4, but this time store the 
//famous person’s name in a variable called famous_person. Then 
//compose your message and store it in a new variable called 
//message. Print your message.


let famous_person : string = "Hazrat Ali !"; 

let quote : string = "No wealth like education and no poverty like ignorance.";

let message : string = (`${famous_person} once said , ${quote}`);

console.log(message);
