const myArr = [0,1,2,3,4];

// const newArr = [];

// for(let i = 0; i < 5; i++) {
//     newArr.push(i);
// }

// console.log(newArr);

// console.log(myArr.includes(7));
// console.log(myArr.length);


const newArr1 = myArr.slice(1,3);// Doesn't changes the original array only changes a copy of the array
console.log("A", myArr);
console.log("SLICED", newArr1);
console.log("ORIGINAL", myArr);

const newArr2 = myArr.splice(1,3);// It changes the original Array itself
console.log("A", myArr);
console.log("SPLICED", newArr2);


