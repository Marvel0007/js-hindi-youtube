var c = 300

if (true) {
    let a = 10
    const b = 20
    // var c = 30
    c = 30
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "shivam"

    function two(){
        const website = "YT"
        console.log(username);
    }
    // console.log(website);

    two()
}

one()

// **************** interesting **********

console.log(addone(5));

function addone(num){
    return num + 1
}


const addtwo = function(num){
    return num + 2
}
addtwo()  // use after the declaretion