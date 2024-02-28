const {zero} = require("./mtask2")

test("push zeros to the back", ()=>{
    let arr = [0, 4, 2, 0, 5];
    let result = zero(arr);
    let value = [4, 2, 5, 0, 0];
    expect(result).toEqual(value)
})

test("push zeros to the back", ()=>{
    let arr = [0, 4, 0, 3, 0, 5];
    let result = zero(arr);
    let value = [4, 3, 5, 0, 0, 0];
    expect(result).toEqual(value)
})

test("push zeros to the back", ()=>{
    let arr = [4, 0, 0, 5, 7];
    let result = zero(arr);
    let value = [4, 5, 7, 0, 0];
    expect(result).toEqual(value)
})