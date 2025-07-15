// primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
const str = "abc"
const num = 123
const isTrue = true
const temp = null
let username;

const id = Symbol('123')
const anotherId = Symbol('123')
//  id != anotherId
const bigNumber = 2987498758746n

// Reference (non primitive)
// Array, Object, Functions

let arr = ["ab", "cd", "dc"];

let obj = {
    name: "shivam",
    age: 22,
}

const myFunction = function (){
    console.log("Hello");
}

// console.log(typeof id); //Symbol
// console.log(typeof str);
// console.log(typeof num);
// console.log(typeof isTrue);
// console.log(typeof username); //undefined
// console.log(typeof bigNumber); //bigInt
// console.log(typeof temp); //null => object
// console.log(typeof arr);  //arr => object
// console.log(typeof obj);  
// console.log(typeof myFunction);

// *************************************
// stack(primitive), Heap(Non-Primitive)

let myYtName = "Shivam"
let anotherName = myYtName
anotherName = "Shukla"

console.log(myYtName);
console.log(anotherName);

let userOne = {
    email: "shsajkhio",
    upi: "8276487lkah"
}

let userTwo = userOne

userTwo.email = "Shivam@email"

console.log(userOne.email);  //Shivam@email
console.log(userTwo.email);  //Shivam@email


