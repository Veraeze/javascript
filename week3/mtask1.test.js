const {swap} = require("./mtask1")

test("swap elements", ()=>{
    let arr = [[2, 3], [4, 5]];
    let result = swap(arr);
    let value = [[2, 4], [3, 5]];
    expect(result).toEqual(value)
})

test("swap elements", ()=>{
    let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    let result = swap(arr);
    let value = [[1, 4, 7], [2, 5, 8], [3, 6, 9]];
    expect(result).toEqual(value)
})
