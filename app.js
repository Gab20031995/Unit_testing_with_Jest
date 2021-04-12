// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3));



const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the doller value
    return valueInDollar;
}

console.log(fromEuroToDollar(1));

const fromDollarToYen = function(valueInDollar){
    return (valueInDollar * 0.83) * 127.9;
}

console.log(fromDollarToYen(1));

const fromYenToPound = function(valueInYen){
    return (valueInYen * 0.0078) * 0.8;
}

console.log(fromYenToPound(1));


// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };