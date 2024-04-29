/*Task 39

City Names: Write a function called city_country() that takes in
the name of a city and its country. The function should return 
a string formatted like this:
"Lahore, Pakistan"
Call your function with at least three city-country pairs, and
print the value that’s returned.*/


//Creating a function with perameters which return a value in string

function cityCountry(city: string, country: string): string {
    return `${city} , ${country}`
}

// Calling a function and print the returned value

console.log(cityCountry("Lahore", "Pakistan"));

console.log(cityCountry("Dubai" , "UAE"));

console.log(cityCountry("London" ,"UK"))


