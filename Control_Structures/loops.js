// const arr = [1,2,3,4,5]

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element);
    
// }
//---------------------------------------------------------------------------------
// const arr = [1,2,3,4,5]
// for (const key in arr) {
//     console.log(arr[key])
// }
// 
//-----------------------------------------------------------------------------------------

// const map = new Map();
// map.set('abc', 'abcd')
// map.set('def', 'abcd')
// map.set('ghi', 'abcd')
// map.set('jkl', 'abcd')

// for (const [key,values] of map) {
//     console.log(`Map keys are ${key} and values are ${values}`);
    
// }

//--------------------------------------------------------------------------------------------
// const myObj = {
//     "name" : "Anoop",
//     "class" : 12
// }

// for (const key in myObj) {
//   console.log(`${key} -> ${myObj[key]}`);
  
// }

//-------------------------------------------------------------------------------------------
const arr = ['abc', 'def', 'ghi', 'jkl', 'mno'];

//foreach
arr.forEach( function(key) {
    console.log(key)
})

arr.forEach((item) =>{
console.log(item);

})