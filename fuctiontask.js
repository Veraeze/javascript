let length = 3;
let width = 3;


let obj = [
    {row: 0, col: 0, value:"X"},
    {row: 0, col: 1, value:"X"},
    {row: 0, col: 2, value:"0"},
    {row: 1, col: 0, value:"O"},
    {row: 1, col: 1, value:" "},
    {row: 1, col: 2, value:"X"},
    {row: 2, col: 0, value:"X"},
    {row: 2, col: 1, value:"O"},
    {row: 2, col: 2, value:"O"}

]




let first = [[],];
let second = [[],];
let third = [[]];
let answer = first.concat(second, third);
console.log(answer)
let check = 0;

for (let key = 0; key < 3; key++){
        first[key].push(obj[newkey]['value']);
}     


console.log(answer)

