const name = "shivam"

console.log(`Hello my name is ${name}`);
console.log(name[0]);
console.log(name._proto_);

console.log(name.toUpperCase());
console.log(name.charAt(2));
console.log(name.indexOf('a'));

const newString = name.substring(0, 4)
console.log(newString);
 
const anotherString = name.slice(-8, 4)
console.log(anotherString);

const newStr = "   Shivam  "
console.log(newStr);
console.log(newStr.trim());

const url = "shivam%20shukla"
console.log(url.replace('%20','-'));

console.log(url.includes('shiva'));

console.log(url.split('%20'));
