const marvelHeroes = ["Doctor Strange", "Thor","Ironman"]
const dcHeroes = ["Batman","Superman","Flash"]
// marvelHeroes.push(dcHeroes) --> push on existing array
// console.log(marvelHeroes);

// const mdHeroes = marvelHeroes.concat(dcHeroes)  --> concat into a new array
// console.log(mdHeroes);

// const allHeroes = [...marvelHeroes,...dcHeroes] // can do more than two and spread them
// console.log(allHeroes);


// const anotherArray = [1,2,3,[4,5,6],7,[4,8,[6,7]]]
// const newAnotherArray = anotherArray.flat(Infinity)
// console.log(newAnotherArray);

console.log(Array.isArray("khalid"));
console.log(Array.from("khalid"));
console.log(Array.from({name:"khalid"})) // interesting


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))




