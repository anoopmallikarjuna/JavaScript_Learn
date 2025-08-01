const obj = {
    "name" : "Anoop",
    "age" : 12
}

console.log(obj.name);

function  addCartElements(...num1) {//... works both as rest and spread operator based on the use cases
    //both are used to join things
        return num1;
}

console.log(addCartElements(123,456,789,101,112));

//passing an object as a parameter for the function
function myObj(anyobject) {
console.log(`Hello user ${anyobject.username} welcome to buyer portal. Your total is ${anyobject.price}`);

}

//passing argument for the same function
myObj({
    "username" : "Anoop",
    "price" : 234
})



const newArr = [10,20,30,40,50]

//passing a array as a parameter for function
function getArray(randomArr) {
    return randomArr[1];
}

//passing the same array as a argument for the function
console.log(getArray(newArr));