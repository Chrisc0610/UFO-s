// import the data from data.js
// const tableData = data;

// Reference the HTML table using d3
// var tbody = d3.select("tbody");

// Simple JavaScript console.log statement dd a set of curly brackets, and then add the indented code between them.
printHello();
function printHello() {
console.log("Hello there!");
  }

// Takes two numbers and adds them
// function addition(a, b) {
//     return a + b;
//   }
// 

addition = (a, b) => a + b; // arrow function, another way to run a function
console.log(addition(1, 3));

// Functions can call other functions
// doubleAddition = (c, d) => {
//    return addition(c, d) * 2;
//   }

//   console.log(doubleAddition(65,34));

  // Original addition function
function addition(a, b) {
    return a + b;
  }

doubleAddition = (c,d) => addition(c,d) * 2
console.log(doubleAddition(33,25));

let friends = ["Sarah", "Greg", "Cindy", "Jeff"];
let animals = ["dog", "cat"]

listLoop(animals);

function listLoop(userList) {
    for (var i = 0; i < userList.length; i++) {
      console.log(userList[i]);
    }
 }

 let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

//  for (var i = 0; i < vegetables.length; i++) {
//      console.log(" I love " + vegetables[i])
// }

vegetables.forEach((vegetable, index) => console.log(vegetable))

for (var i = 1; i <= 10; i++) {
    console.log("I am " + i);
 }

// if-statement syntax
// if ( condition ) { code to execute }

// pseudocode practice
// if (a date is entered) {
//   Filter the default data to show only the date entered
// };