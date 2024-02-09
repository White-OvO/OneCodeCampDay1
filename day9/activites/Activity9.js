//Write a function called applyFunction that takes a function and an array as parameters. It should apply the given function to each element of the array and return a new array with the results.



//write a function called applyFunction that takes a function and an array as parameters//
function applyFunction(fun, arr) { 
    const result = [];
    for (const element of arr) { 
        result.push(fun(element));      /// output : [1,4,9,16,25]
        

    }
    return result;
}
const numbers = [1,2,3,4,5];
const squareNumbers = applyFunction((x)=> x * x,numbers);
console.log(squareNumbers);
