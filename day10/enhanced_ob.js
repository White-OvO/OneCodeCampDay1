// enhanced object literals offers sorthand syntax for defininf objects


const person = {
    name:"Christopher",
    age: 28,
    greeting(){ 
        // the ` and ' are diffrent 
      //  return 'hi my name is ${this.name}. I am ${this.age} years old. '
      return `Hi, my name is ${this.name}. I am ${this.age} years old.`

    }
}

console.log(person.greeting());



