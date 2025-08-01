//IIFE -> Immediately Invoked Function Execution


/*When we don't want some other components(global elements) to interfere  with some important functionns
like DB connection functions then we are going to make use of IIFE*/
(function cps() {
    console.log(`Hi this is DB 1`);
    
})();

((name) => {
    console.log(`Hi this is DB ${name}`)
})('MYSQL')