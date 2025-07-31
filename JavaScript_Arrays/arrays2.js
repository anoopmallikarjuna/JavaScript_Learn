const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9,10];
//arr1.push(arr2)
console.log(arr1) // gives unexpected behaviour

//[ 1, 2, 3, 4, 5, [ 6, 7, 8, 9, 10 ] ]

//to fix this we can use concat or spread opearator

//concat
const arr3 = arr1.concat(arr2);
console.log(arr3);

//spread operator
const arr4 = [...arr1, ...arr2];
console.log(arr4);// One advantage over concat is we can concatenate multiple objects

const name  = "Anoop";
const nameArr = Array.from(name);// Can convert a object into  array
console.log(nameArr);

const var1 = "abc";
const var2 = "def";
const var3 = "ghi";
const arr5 = Array.of(var1, var2, var3);// combines multiple objects into a single array
console.log(arr5);



