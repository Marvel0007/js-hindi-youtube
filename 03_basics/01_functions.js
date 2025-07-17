function addTwoNum(num1, num2){

//   let result = num1 + num2
  return num1 + num2
    
}

const result = addTwoNum(3, 4)

// console.log("Result: ", result);

function login(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}
// console.log(login("shivam"));
// console.log(login());

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: 'shivam',
    price: 188
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

handleObject(user)

const myNewArray = [100, 200, 300]

function returnSecondValue(getArr){
    return getArr[1]
}
console.log(returnSecondValue(myNewArray));