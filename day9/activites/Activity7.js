//Create a higher-order function called mathOperation that takes two numbers and a callback function as parameters. The callback function should perform a mathematical operation. Use this higher-order function to add, subtract, multiply, and divide two numbers.

function mathOperation(num1, num2, opreation){ 
        return opreation(num1, num2) ;
}

function add(a,b) { 
    return a + b;

}
function subtract(a,b){ 
    return a-b;

}
function  multiply(a,b) { 
    return a *b;
}

function divide(a,b) { 
    return a /b;

}

const num1 = 10;
const num2 =5;

const resultAdd = mathOperation(num1, num2, add);
console.log(`Adition: ${num1}+${num2}=${resultAdd}`);



const resultSubtraction=mathOperation(num1, num2, subtract);
console.log(`Subtraction: ${num1}-${num2}=${resultSubtraction}`);

const resultMultiply = mathOperation(num1, num2, multiply); 
console.log(`Multiplication : ${num1}*${num2}=${resultMultiply}`);

const resultDivision = mathOperation(num1, num2, divide);
console.log(`division : ${num1}/${num2}=${resultDivision}`);

