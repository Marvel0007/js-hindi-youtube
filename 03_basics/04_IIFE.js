(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// IIFE : global scope ke polution se problem fix
// ()()

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('shivam');
