let obj = {
    firstName: 'vera',
    lastName: 'eze',
    cohort: '18',
    sex: 'Female',
    bestColor: 'blue',
    location: 'Lagos'
}
for (const key in obj){
    console.log(obj[key])
}

let myArr = [];
    for (let count =0; count < 20; count++){
        myArr[count] = count + 1;
    }
    console.log(myArr);
    
    const evenNumbers = myArr.filter((number) => number%2 == 0)
    console.log(evenNumbers)

    const timesTwo = myArr.forEach((number) => console.log(number * 2));
    

    const square = myArr.map((number) => number * number)
    console.log(square)

  
