// spead and rest opreators

// procides a convenien way to manipulate arrays. Object and functions arguments
        //spread
const sum = (x, y, z) => x + y + z; 
const numbers = [1 , 2, 3];
//const numbers =[1,2,3];
console.log(...numbers); //output 6

console.log(sum(...numbers));

console.log(numbers);





    //rest 
/*
const myFunction = (firstArgument, secondArg, ... restOfArgs) => {
    console.log(firstArgument);
    console.log(secondArg);
    console.log(restOfArgs);
};
myfunction("one", "two", "three", "four");
*/
const myFunction = (firstArg, secondArg, ...restOfArgs) => {
    console.log(firstArg);
    console.log(secondArg);
    console.log(restOfArgs);
};

myFunction("one", "two", "three", "four", "five", "six");



const grades ={ 
    math:94,
    english:81,
    science:72,
    pe:99
}

const gradeWithEc = { 
    extraCurr: 85, ...grades
}
console.log(gradeWithEc);


//default parameters 
const multiply = (a, b = 5) => a *b;
console.log(multiply(8)); // 8* 5 = 40
console.log(multiply(8,6)); // 8*6=48



