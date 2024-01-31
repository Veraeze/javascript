// while loop
// do/while loop
// for/in loop - prints the index/keys
// for/of loop - prints the values
// foreach loop

let user = {
    firstName: "precious",
    lastName: "obika",
    age: 23
}
for (const key in user){
    let result = user[key];
    console.log(result);
}