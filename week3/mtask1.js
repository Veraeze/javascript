const swap = (arr) =>{
    if(arr.length == 2){
    let keep = arr[0][1];
    arr[0][1] = arr[1][0];
    arr[1][0] = keep;
    return arr;}
    if (arr.length == 3){
        let newArray = [[],[],[]]
        for(const key in arr){
                newArray[0].push(arr[key][0])
                newArray[1].push(arr[key][1])
                newArray[2].push(arr[key][2])
        }
        return newArray
    }

}

function create2Darray(length){
 let result = new Array();
 while(length != 0){
    result.push(new Array());
    length -= 1;
 }
 return result;
}

module.exports = {swap}
