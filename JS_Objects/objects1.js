const myObj = {// objects nesting
    name : {
        fullname : {
            firstname : "Anoop",
            lastname: "Mallikarjuna"
        }
    }
}

console.log(myObj.name.fullname.firstname);


const obj1 = {1 : "a", 2 : "b"};
const obj2 = {2 : "c" , 3 : "d", 4 : "e"};

const res = Object.assign(obj1, obj2);//modifys the object here

console.log(obj1);
console.log(obj2);
console.log(res);
console.log(obj1 === res);//here res and obj1 are equal because assign() method changes the obj1 too

const obj3 = {...obj1, ...obj2, ...res};//spread operator to join objects
console.log(obj3);

console.log(Object.keys(obj1));//gets the array of object keys
console.log(Object.values(obj1));//gets the array of object values





