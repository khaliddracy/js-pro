// arrays
const myArray = [0, 3, 2, "Khalid", true]
const myHeros = ["Ironman", "Thor", "Doctor Strange"]
 const arr = new Array(1,3,4,5,5)
// arr.push(9)
// arr.push(7)
// arr.pop()
//  console.log(arr)

// arr.unshift(7)
// arr.shift()
// console.log(arr);

// const newArray = arr.join()
// console.log(arr)
// console.log(newArray);
// console.log(typeof(newArray));


console.log("A",arr); // slice don't manipulates original array
const sliceArr = arr.slice(1,3)
console.log(sliceArr)

// splice manipulates original array 
console.log("B",arr);
const spliceArr = arr.splice(1,3)
console.log("C",arr)
console.log(spliceArr)
