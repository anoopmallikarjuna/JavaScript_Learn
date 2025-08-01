const obj1 =  {
    name : "Anoop",
    class : 12,
    city : "Davanagere",
    welcomeMessage: function() {
            console.log(`Hi my name is ${this.name}`);
            
    }
}

obj1.welcomeMessage();

console.log(this);//gives an empty object

//gives the global object info in node and window object info in browser 
function thhis() {
console.log(this);
}
thhis();

//-----------------------------------------------------------------------------------------

//arrow functions basics
const myFunc = (num1, num2) => {
    return num1 + num2;
}

console.log(myFunc(2,3));

//how to declare a object inside the arrow functions?
const myFunc1 = ( num1, num2) => ({
        username : "Anoop",
        class : 12,
        marks : num1+num2

})

console.log(myFunc1(2,3))



