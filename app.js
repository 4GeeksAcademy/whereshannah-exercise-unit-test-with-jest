// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

// We declare the function with the exact name "fromDollarToYen"
const fromDollarToYen = function(valueInDollar) {
    // Convert the given valueInDollar to yen
    let valueInYen = (valueInDollar / 1.07) * 156.5;
    // return the yen value
    return valueInYen;
}

// We declare the function with the exact name "fromYenToPound"
const fromYenToPound = function(valueInYen) {
    // Convert the given valueInYen to pounds
    let valueInPound = (valueInYen / 156.5) * 0.87;
    // return the pound value
    return valueInPound;
}

// This is my function that sums two numbers
const sum = (a, b) => {
    return a + b;
}

// Just a console log for ourselves
console.log(sum(7, 3))

// We include fromEuroToDollar, fromDollarToYen, and fromYenToPound here as well because they need to be exported
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
