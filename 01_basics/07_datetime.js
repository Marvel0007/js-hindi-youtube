// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreateDate = new Date(2025, 6, 15)
// console.log(myCreateDate.toDateString());
let myCreateDate = new Date("01-14-2025")
// console.log(myCreateDate.toLocaleString());

let mmyTimeStamp = Date.now()
// console.log(mmyTimeStamp);
// console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));

