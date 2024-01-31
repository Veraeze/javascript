let arr = [["car", 2000], ["truck", 500], ["bike", 6500]];
arr.push(["scooter", 1500])
add(arr, 0, ("toyota ,"+ " nissan"))
add(arr, 1, "Ford") 
add(arr, 2, "Honda")

console.log(arr)

function add(Array, position, value){
    Array[position].push([value])
    return Array
}