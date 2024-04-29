/*Task 36
T-Shirt: Write a function called make_shirt() that accepts a 
size and the text of a message that should be printed on the
shirt. The function should print a sentence summarizing the 
size of the shirt and the message printed on it. Call the 
function.*/

//Create Function
function makeShirt(size: string,text:string){
    //Printing Message
    console.log(`you order a ${size} shirt that says ${text}`)

}
//Function call and Printing messages
makeShirt("Large", "I Love Typescript")
makeShirt("Medium", "I Need a big shirt")