
let obj1 = {
    name: "String",
    population: 1,
    temp: 10,
    currency: "String"

}
let obj2 = {
    name: "String",
    population: 1,
    temp: 10,
    currency: "String"

}
let obj3 = {
    name: "String",
    population: 1,
    temp: 10,
    currency: "String"

}
let obj4 = {
    name: "String",
    population: 2,
    temp: 10,
    currency: "String"

}
let obj5 = {
    name: "String",
    population: 2,
    temp: 10,
    currency: "String"

}
let obj6 = {
    name: "String",
    population: 2,
    temp: 10,
    currency: "String"

}
let obj7 = {
    name: "nigeria",
    population: 1,
    temp: 10,
    currency: "String"

}
let obj8 = {
    name: "niger",
    population: 1,
    temp: 10,
    currency: "String"

}
let obj9 = {
    name: "niger",
    population: 1,
    temp: 10,
    currency: "String"

}

let raw_array = [[null, obj1, obj2, obj3], 
                 [obj4, obj5, obj6, null], 
                 [obj7, null, obj8, obj9]];



let result = 0;
for (const key in raw_array){
    for(const value in raw_array[key]){
        if(raw_array[key][value] !== null){
            result = result + raw_array[key][value].population
        }
    }
}

console.log(result)
