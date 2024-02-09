//Create a function counter that returns a function. The returned function should increment a counter variable every time it's called. Use this to create two counters and observe if they share the same state.

const createCounter = (() => { 
    let count = 0 ;
    return() => { 
        count ++;
        return count;

    };
})(); 

// counter 
const counter1 = createCounter() ;
const counter2 = createCounter() ;


console.log(createCounter1());//1
console.log(createCounter1());//2


console.log(counter2()); // 1 seperate state
console.log(counter2()); // 2 serperate state 