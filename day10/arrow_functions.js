// old way of making a function 

// function declarations
function helloWorld() { 
    console.log("Hello World!");
}


helloWorld();

// hello world represents a function



//functions exppressions
/*

const greet = function() { 


    console.log("Nice to meet you")
}
greet();

*/ 

const greet =() => console.log("Nice to meet you");

greet() ; 


// arrow functions w/parameters

const square =(num) => num * num;
console.log(square(4));


// arrow funtions w two or more parametes

const sum = (a,b) => a + b;

console.log(sum(5,7));


// arrow functions w multiple lines of code

const introduction = () => { 
let name = "chris";
let age = 28;
return "Hi my name is " + name + " and I am "+ age + " years old ";
}
console.log(introduction());



