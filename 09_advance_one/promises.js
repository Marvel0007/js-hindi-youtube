const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task is Completed");
        resolve()
    }, 1000)
})
promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const ppromiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "chai", email: "chai@example"})
    }, 1000)
})
ppromiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "shivam", password: "123"})
        } else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})
promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("Promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "youtube", pass:"123"})
        } else{
            reject('ERROR: JS Went Wrong')
        }
    }, 1000)
})
async function consumePromisefive(){
    try{
    const response = await promiseFive
    console.log(response);
    } catch(error){
        console.log(error);
    }
}
consumePromisefive()

// async function getAlluser(){
//     try{
//         const response = await fetch('hjkdshjfhja')
//         const data = await response.json()
//         console.log(data);
//     } catch(error){
//         console.log("E: ", error);
//     }
// }
// getAlluser()

fetch('https://api.github.com/users/hiteshchoudhary').then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))