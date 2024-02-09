//Write a function called isEven that takes a number as a parameter and returns true if it's even and false if it's odd. Test the function with various numbers./



const num = Number(prompt("Enter a number il tell you if its odd or even :")); 

function isEven(num) {
   while (true){
     if (num%2 === 0){ 
    return true;
} else { 
        return  false;
    }
}
}
console.log(num , "is ",  ((isEven(num)) ? "even" : "odd"));
