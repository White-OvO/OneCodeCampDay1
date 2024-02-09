//prompt (" enter a number ") ; 
const num = Number(prompt("Enter a number il tell you if its odd or even :")); 


/*
console.log (isEven(5)); // false
console.log (isEven(6)); // true

*/
function isEven(num) {
    if (num%2 === 0){ 
    return true;
} else { 
        return  false;
    }
}
console.log(num , "is ",  ((isEven(num)) ? "even" : "odd"));



// Step 2: Use a for loop to iterate from 0 to 10. Call the isEven function for each iteration and log the result to the console.
    for (let i = 0; i <= 10; i++){ 
        const number = i;
        const isEvenNumber = isEven(number);
        const message = "Is " + number + " even? " + isEvenNumber;
        console.log(message);
    }
// Step 3: Declare a function named multiply that takes two numbers as parameters and returns their product.

// Step 4: Use a while loop to repeatedly prompt the user to enter two numbers and calculate their product using the multiply function. Log the result to the console. Terminate the loop when the user enters a negative number as any of the inputs.


function multiply(number1, number2) { 
    return number1 * number2; 
  }
  
  let number1 = Number(prompt("Multuply number 1: "));
  let number2 = Number(prompt("Enter the second number to (X) :"));
  
  while (number1 >= 0 && number2 >= 0) { 
    const product = multiply(number1, number2);
    console.log(`The product of ${number1} and ${number2} is ${product}.`);
    number1 = Number(prompt("Enter the first number:"));
    number2 = Number(prompt("Enter the second number:"));
    if (number1 < 0 || number2 < 0){ 
        console.log("Negative numbers terminate the program ");
        break;
    }
  }

  // Step 5: Declare a function named reverseString that takes a string as a parameter and returns the reversed version of the string.
  const Word = prompt("Enter a word: ti esrever lli ");

  function reverseString(str) { 
      return str.split("").reverse().join("");
  }
  
  const reversedWord = reverseString(Word);
  console.log(reversedWord);
  
  function test1(input) { 
      return reverseString(input);
  }
  
  console.log(test1("Hello"));
  
///    ^
// Step 6: Call the reverseString function with the string 'hello' and log the result to the console.


const inputWord = "JavaScript";
// Step 8: Call the countVowels function with the string 'JavaScript' and log the result to the console.
const vowelWord = prompt("Enter a L E T T E R ill tell you about their vowels ");


// Step 7: Declare a function named countVowels that takes a string as a parameter and returns the number of vowels in the string.
//      V

const result2 = countVowels(inputWord);
function countVowels(strVowels) {
    // to get the vowels from the string 
    const lowerStr = strVowels.toLowerCase() ; 

    // inject what what are looking for in this case vowels 
    const vowels = new Set(['a', 'e' , 'i', 'o' , 'u']);

    //count the vowels through the string 
    let vowelCount = 0; 
    for (const char of lowerStr) {
        if (vowels.has(char)) {
            vowelCount++;
        }
    }
    
    return vowelCount;
}

const result = countVowels(vowelWord);

console.log(`Number of vowels in "${vowelWord}": ${result}`);
console.log(`Number of vowels in "${inputWord}": ${result}`);
    //
 






// Step 9: Declare a function named findMax that takes an array of numbers as a parameter and returns the maximum value in the array.
//              V


//const arrayNumber = prompt("Enter the sets of numbers inside of an array  array");
// empty array 
const arrayNumbers = [];
//const allNumber = prompt("Enter the set of numbers ");
    while(true) {   // ASSUMING HTERE ARE NUMBERS INSIDE 
        const input3 = prompt(" Enter a set of number and well find out who is larger " ) ; 
        if (input3 === null || input3 === "") {
            break;
        }
        const parsedNumber = parseFloat(input3);
    if (!isNaN(parsedNumber)) {
        arrayNumbers.push(parsedNumber);
    }
   }

function findMax(input3) { 
    let max = -Infinity;
    for(let i = 0; i< input3.length; i++ ){ 
        if(input3[i] > max) { 
        max = input3[i];

    }
}

return max; 
} 
const maxNumber = findMax(arrayNumbers);
console.log(`The maximum value in the array is: ${maxNumber}`);









// Step 11: Declare a function named calculateFactorial that takes a number as a parameter and returns its factorial value.

// Step 12: Call the calculateFactorial function with the number 5 and log the result to the console.
//                  VV 
const test54 = 5;
const numberFactor = parseInt(prompt("Enter a number to find its factorial: "));

function calculateFactorial(numberFactor) {
    if (numberFactor < 0) {
        return "Factorials are not defined for negative numbers.";
    } else if (numberFactor === 0) {
        return 1;
    } else {
        let factorial = 1;
        for (let i = 1; i <= numberFactor; i++) {
            factorial *= i;
        }
        return factorial;
    }
}

const result52 = calculateFactorial(numberFactor);
console.log(`The factorial of ${numberFactor} is ${result52}`);
console.log(`The factorial of ${test54} is ${result52}`);



// Step 13: Declare a function named isPalindrome that takes a string as a parameter and returns true if the string is a palindrome and false otherwise.
//


// Step 14: Call the isPalindrome function with the string 'level' and log the result to the console.
const test69 = "level";
const inputString= prompt("Palindrome time / Enter a word :");
function isPalindrome(str) { 
    const lowerCaseSwitch = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    for (let i=0; i < Math.floor(lowerCaseSwitch.length / 2); i++ ){ 
        if(lowerCaseSwitch[i] !==  lowerCaseSwitch[lowerCaseSwitch.length -1 -i])   {
            return false; 
    }
}

return true;
} 

const result98 = isPalindrome(inputString);
//const result98 = isPalindrome(inputString);
console.log(`Is "${inputString}" a palindrome? ${result98}`);

console.log(`Is "${test69}" a palindrome? ${result98}`);





// Step 15: Declare a function named sumArray that takes an array of numbers as a parameter and returns the sum of all the numbers in the array.


function sumArray(array) {
    let sum = 0;
    for (const num of array) { 
        sum += num; 
    }
    return sum; 
}

const numbers = [];
const numbersTest = [1,2,3,4,5];
let input;

while (true) {
    input = prompt("Enter a number to ADD (press 0 to stop):");
    if (input === null || input === "") { 
        break; 
    }
    const num = parseFloat(input); 
    numbers.push(num);
} 

console.log("Number\tSum");  
console.log("------\t---"); 
for (let i = 0; i < numbers.length; i++) { 
    const partialSum = sumArray(numbers.slice(0, i + 1)); 
  
    console.log(`${numbers[i]}\t${partialSum}`);  

}

// Step 16: Call the sumArray function with the array [1, 2, 3, 4, 5] and log the result to the console.

const testArraySum = sumArray(numbersTest);
console.log(`The sum for the test array [1, 2, 3, 4, 5] is: ${testArraySum}`);






// Step 17: Declare a function named capitalizeFirstLetter that takes a string as a parameter and returns the string with the first letter capitalized.



function capitalizeFirstLetter() {
    const input79 = prompt("Enter a word that we can uppercase the first letter on: ");
    if (input79 === null || input79.trim() === "") {
        console.log("No input was selected");
        return;
    }

    // Function to capitalize the string
    const capitalizedString = input79.charAt(0).toUpperCase() + input79.slice(1);
    console.log(`Capitalized result: ${capitalizedString}`);
}

capitalizeFirstLetter();
// Step 18: Call the capitalizeFirstLetter function with the string 'javascript' and log the result to the console.

const capTest101 = "javascript";
const capitalizedString = capTest101.charAt(0).toUpperCase() + capTest101.slice(1);
console.log(`Capitalized result: ${capTest101} is now ${capitalizedString}`);







// Step 19: Declare a function named filterEvenNumbers that takes an array of numbers as a parameter and returns a new array with only the even numbers.

const arrayNumbers79 = [];

while (true) {
    const inputNumber79 = prompt("Enter a number (or leave empty to finish):");
    if (inputNumber79 === null || inputNumber79 === "") {
        break; // Exit the loop when input is empty or null
    }
    const parsedNumber79 = parseFloat(inputNumber79);
    if (!isNaN(parsedNumber79)) {
        arrayNumbers79.push(parsedNumber79);
    }
}

function filterEvenNumbers(numbers) {
    return numbers.filter((x) => x % 2 === 0);
}

const evenNumbers79 = filterEvenNumbers(arrayNumbers79);
console.log(evenNumbers79);
console.log(`Even numbers: ${evenNumbers79}`);

const filterEvenNumbersTest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers791 = filterEvenNumbers(filterEvenNumbersTest);
console.log(`Even numbers in ${filterEvenNumbersTest} are: ${evenNumbers791}`);

// Step 20: Call the filterEvenNumbers function with the array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and log the result to the consoles





