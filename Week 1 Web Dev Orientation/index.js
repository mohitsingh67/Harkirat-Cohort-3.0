// JavaScript Basics

//  js is interpreted lanaguage

// var name="mohit";
// name=34;
// name =true;
// console.log(name)     ---- js is a dynamically typed language

// js is single threaded ---process and one task only at a time

variable
let firstname="Mohit";
// const age=34;
var isStudent =true;
console.log("firstname");
console.log(age);
console.log(isStudent);

// Assignment
// Create a variable for each of the following: your favorite color, your height in centimeters, and whether you like pizza. Use appropriate variable declarations (let, const, or var). Try logging it using console.log

let favColor="Black";
const height =180;
let favFood="Pizza";

// // height=200;
// // console.log(height);   error becoz we have changed the const 

// if(favColor==Pizza){
//     console.log("i love Pizza")
// }else{
//     console.log("Dont love pizza");
// }




// Data types
// let num=23;
// let string="Mohit";
// let isActive =true;

// let nums=[1,2,3,4];

// console.log(nums[2]);

// let users=["Mohit","Ram", "Rohit"];
// console.log(users[0]);
// console.log(users[3]);


// operators

let age=19;
let canVote=(age>18);
console.log(canVote);


functions

function greet(name){
    return "Hello , "+name;
}

var name="Mohit";
let ans=greet(name);
console.log(ans)


function sum(a,b){
    return a+b;
}

console.log(sum(1,3))


