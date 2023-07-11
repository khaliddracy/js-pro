// #primitive --> call by value
// 7 types : Strings, Number, Boolean , null, undefined, Symbol, BigInt

// symbol

let Id = Symbol("k")
let anotherId = Symbol("k")
console.log(Id == anotherId);

//big int
let bigNumber = 497397437438793n
console.log(typeof(bigNumber))



// Reference (Non primitive)
// Array,Objects, Functions

const name = ["Khalid","Ironman", "Thor"]
let intro = {
    name: khalid,
    age: 19
}
const greet = function() {
    console.log("Hello world");
}