const myObj = {
    name : "Anoop M",
    age : 23,
    Eduation: "B.E CsE",
    City: "Davanegere",
}

const mySym = Symbol("symbol1");

const myObj1 = {
    "name" : "Akshay",
    age : 25,
    Education: "B.E CsE",
    City: "Bangalore",
    [mySym] : "ABCDE"// This is the correct syntax of declaring the symbols , else a error will be thrown
}

console.log(`Hello, my name is ${myObj.name}`);//  String interpoletion 

console.log(myObj.name);//gives the name of myObj
console.log(myObj1["name"]);//gives the name of myObj1

//Object.freeze(myObj);//freezes the object can't make any changes there

myObj.City = "Bangalore";
console.log(myObj);

myObj.greeting = function() {
    console.log(`Hello, ${this.name} nice to  meet you`);
}
console.log(myObj.greeting());


console.log(myObj1);
