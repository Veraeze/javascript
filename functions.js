// nested functions
// arrow functions
// function as an argument - the function you pass into another function as an argumsnt is called a callback function.
// function as a returned object

// function arr(){} - function declaration
// const newArray = function(){} - function expression
// const myArr = ()=>{} - arrow function

// function as an argument
// let birthYears = [2000, 1972, 1999, 2001];
// let currentYear = 2024;

// const getResultArray = (birthYears, func) => {
//     const result = [];

//     for(let birthYear of birthYears){
//         let value = func(birthYear);
//         result.push(value);
//     }
//     return result;
// }

// const calculateAge = (birthYear) => {
//     let age = currentYear - birthYear;
//     return age;
// }

// console.log(getResultArray(birthYears, calculateAge));

// fuction as a returned object
// function questions(role){
//     switch(role) {
//         case 'Manager':
//             return function(name){
//                 return `Hi ${name}, what is the core value of this company?`;
//             };
//         case 'Native':
//             return function(name){
//                 return `Hi ${name}, what is your best programming language?`;
//             };
//         case 'Elders':
//             return function(name){
//                 return `Hi ${name}, do you love your job?`;
//             }
//         default:
//             return function(name){
//                 return `Hi ${name}, Please try again!`;
//             }
//     }
// }

// let answer= questions('hjvh');
// console.log(answer('vera'));

