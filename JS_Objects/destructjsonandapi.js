const abc = {
    name : " Anoop",
    class : "7Th",
    StudID : 12345
}

console.log(abc);

const {StudID:studentID} = abc;//destructuring of objects very useful in react.js

console.log(studentID);

/*An API (Application Programming Interface) is a set of rules that allows two software systems to communicate with each other.
For example, when a frontend application needs data from a backend server, it uses APIs to make requests.
In earlier days, API responses were commonly in XML, which was harder to parse. Now, JSON (JavaScript Object Notation) is widely used because it's lightweight and easier to work with in JavaScript.
The most commonly used HTTP methods in APIs are:

GET – to fetch data

POST – to send or create data

PUT – to update existing data

DELETE – to remove data
APIs are essential for building modern applications and integrating external services.*/
