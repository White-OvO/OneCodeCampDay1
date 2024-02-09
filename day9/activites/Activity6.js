//Write a function named hoistedFunction and call it before the function declaration in your code. Does it work? Explain the behavior..


hoistedFunction();

function hoistedFunction() { 
    console.log("I am a function that has been hoisted!");
}

// it will still compile !