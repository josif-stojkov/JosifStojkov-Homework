let birthDay = 10; // The day when i was born
let fullNameSum = 12; // The sum of the numbers of my full name
let yearDiff = 77; // Subtract the first 2 numbers from the year i'm are born from the second two numbers
let birthYearSum = 28; // Sum all the numbers in the year i was born

let isHigher = birthDay > fullNameSum;
let remainder = yearDiff % birthYearSum;

let message = "I am the " + (isHigher && remainder < 3 ? "light" : "darkness");
console.log(message);

