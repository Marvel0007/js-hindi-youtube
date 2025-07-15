const marvel = ["thor", "Ironman"]
const dc = ["superman", "flash"]

// marvel.push(dc)

// const merge = marvel.concat(dc)
// console.log(merge);

const all = [...marvel, ...dc]
// console.log(all);

const another_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_arr = another_arr.flat(Infinity)
// console.log(real_another_arr);

console.log(Array.isArray("Shivam"));
console.log(Array.from("Shivam"));
console.log(Array.from({name: "Shivam"})); //interesting

let score1 = 200
let score2 = 300
let score3 = 400

console.log(Array.of(score1, score2, score3));

