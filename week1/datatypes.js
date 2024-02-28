// function user(name, age){
//     return(name, age);
// }

// let userOne = new user("vera", 24);
// let userTwo = new user("susan", 22);


// let user = {
//     firstName: "Goodness",
//     lastName: "Favour",
//     age: 23
// };
// console.log(user.firstName);
// console.log(user['firstName']);

// let cohort = 18;
// console.log(`this is cohort ${cohort}`);

// let details = {
//     id: 10,
//     available: true,
//     count: 5000000,
//     name: 'vera',
//     author: 'susan'
// }
// console.log(details)

//tenary operation
// let age = 24;
// let output = (age > 16)? console.log(true):console.log(false);
// let x = 35;
// let y = x < 13 ? "Child" : x < 20 ? "Teenage" : x < 30 ? "Twenties" : "Old people";
// console.log(y);

//Array
//let arr = new Array();
// let myArray = [1, 2, 3, 4, 5];
// myArray.push(45) // push adds and inserts the number to the last index of the array
// console.log(myArray)

// myArray.pop(20) // pop removes thelast element of the array
// console.log(myArray)

// myArray.shift()
// console.log(myArray)
// console.log(myArray.concat([6, 7, 8]))

let answer = operate(2, 3, '-');
   console.log(answer)

function operate(left_operand, right_operand, operator){
    if (operator == '+') {
        ans = left_operand + right_operand
    }
    else if (operator == '-') {
        ans = right_operand - left_operand
    }
    else if (operator == '*') {
        ans = left_operand * right_operand
    }
    else if (operator == '/') {
        ans = left_operand / right_operand
    }

    return ans
}






