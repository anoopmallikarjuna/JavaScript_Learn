//var keyword is not much used for the purpose of declaring variables as it disrupts the scope of the variable

if(true){
let a = 20;
const b = 40;
var c = 30;
}

//console.log(a);
//console.log(b);
console.log(c);

//lets say I am going to declare a var variable outside a local scope and let's see what our output will be

var a = 100

if(true) {
    let b = 20;
    const c = 30;
    a = 10;
}

console.log(a);

//function declaration
abc();//works only for normal function declaration
function abc() {
    console.log("Hi ");
    
}


const greet3 = function def() {
    console.log("I am anoop");
    
}
greet();//first have to declare and initialize the variable and then have to call it or else will get a error.

//nested functions rule
greet("Meg");
function greet(username) {
        console.log(`Hi ${username}`);
        function greet1(website) {
            console.log(`This is your ${website}`);
            
        }
        // console.log(website) //inaccessible 
        greet1("youtube");
        
}
