const arr = [1,2,3,4,5]

// const res = arr.forEach((num) => {
//     return num
// })

// console.log(res); It won't work as for each is not designed to rteurn any values

// const res = arr.filter((num) => {
//     return num
// })

// console.log(res);

//----------------------------------------------------------------------------------------------

// const res = arr.map((num) => (num+10))

// console.log(res);

// const res1 = arr.map((num) => {
//     return num+10
// })

// console.log(res1)//It is mandatory to add a return in arrow functions when we are defining a block scope

//----------------------------------------------------------------------------------------------------------

const res  = arr.reduce((prevVal, currVal) => (prevVal+currVal),0)

const res1 = arr.reduce((prevVal, currVal) => {
    return prevVal + currVal
}, 0)

console.log(res);
console.log(res1);





