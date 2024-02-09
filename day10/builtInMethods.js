// string



// split(<splitter> )

const message = "Hello, World!";
const words = message.split(", ");
console.log(words);


// includes (<target>)

const sentence = "The quick brown fox jumps over the lazy dog."
const containsWord = sentence.includes("fox"); // true (returns a boolean)
console.log(containsWord);

// length 

const sampleString = "Modern JS features!";
const strLength = sampleString.length;
console.log(strLength);         // going to count the length of the string


console.log(Math.random());             // random number

// random() value between 0 and 1
console.log(Math.random() * 100); // * 100 to make it 0 - 100


// max(<numbers>) / min(<numbers>)
const numbers = [10, 5, 20];
console.log(Math.max(...numbers)); // 20
console.log(Math.min(...numbers)); // 5

const randomValue = 3.5;
console.log(Math.floor(randomValue)); // round it down to the nearest number (3)
console.log(Math.ceil(randomValue)); // round it up to the nearest number (4)
console.log(Math.round(randomValue)); // round it down for 0-4, round it up for 5-9



// numbe to .tofixed(<no. of decimal places>)

const fixedNumber = 3.141592.toFixed(2) // two decimal palces (rounded to the second place )
console.log(fixedNumber);

