//Basic Function syntax in JavaScript

function myfunc() {
    console.log("HI");
    console.log("My ");
    console.log("Name");
    console.log(" is Anoop");
    
}

myfunc();

function nameDis(username) {
    console.log(`Hello, ${username} welcome to KodNest`);
    
}

nameDis("Anoop");

function addition(number1, number2) {
    return number1 + number2;
}

const res = addition(2,3);
console.log(res);


function display(username) {
    if(username == undefined) {
        console.log("Please enter your name");
        return;
    } else {
        console.log(`Welcome, ${username}`);
    }
}

display("Anoop");