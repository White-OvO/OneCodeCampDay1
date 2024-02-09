//Declare a global variable globalVar with a value. Then, create a function that declares a local variable with the same name globalVar. Log the values of both variables inside and outside the function. What do you observe?

function myFunction() {
    var localVar = "This is local!";
    console.log("Inside function:", localVar);
    return localVar;
  }
  
  // Call the function
  var globalVar = myFunction();
  
  // Log the global variable outside the function
  console.log("Outside function:", globalVar);