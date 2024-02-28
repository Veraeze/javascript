const {sum} = require("./practice01")

test("sum of any two numbers a and b", ()=>{
    let first = 2;
    let second = 4;
    let result = sum(first,second);

    expect (result).toBe(6);
})