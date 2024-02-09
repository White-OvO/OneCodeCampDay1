// destructuring with array

let numbers = [1,2,3];

let[first, second, third]= numbers;


console.log(`${first}, ${second}, ${third}`);

// changin the order will change the variables
let numbers1 = [11,21,31];

let[second1, first1, third1]= numbers;

console.log(`${first1}, ${second1}, ${third1}`);


// w a object


const numObject = {
    firstNum: 1,
    secondNum: 2,
    thirdNum: 3
};
// {} with a object
const { firstNum, secondNum, thirdNum } = numObject;

console.log(firstNum, secondNum, thirdNum);

// output is : 1 – 2 – 3
// you can also give default values to your variable if they are not in the object



//destructring with default values

const painting = { 
    artist: "MichhaelAngelo",
    year: 1550,
    dimensions: "1000 x 1000"
}

const{artist, year = 1552, dimensions}
= painting;
console.log(artist,year,dimensions);

