const zero = (input) =>{
    let count = 0;
    for(var element = 0; element < input.length; element++){
        if (input[element] === 0){
            input.splice(element, 1);
            count++;
            element--;
        }
    }
    while (count !== 0){
        input.push(0);
        count--;
    }
    return input;
}

module.exports = {zero}
