let score = null
// console.log(typeof(score));
// console.log(typeof score)

let scoreNumber = Number(score)
// console.log(typeof(scoreNumber));
// console.log(scoreNumber);

// in conversion all value type will be number but value will be wither number or Nan
// "88" => 88
// "88abc" => Nan
// true => 1
// null => 0
// undefined => Nan

let isLoggedIn = "khalid"
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1=> true; 0=> false; 
// "" => false; "khalid"=> true

let num = 4
let stringNum = String(num)
// console.log(stringNum);
// console.log(typeof(stringNum));





// ************* Operations *************


let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
