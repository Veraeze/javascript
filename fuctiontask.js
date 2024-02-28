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

let result = [[], [], []];

for (let key = 0; key < 3; key++){
        result[0].push(obj[key]['value']);
}
for (let key = 3; key < 6; key++){
    result[1].push(obj[key]['value']);
}  
for (let key = 6; key < 9; key++){
    result[2].push(obj[key]['value']);
}       

console.log(result)

