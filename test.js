// Import the functions from the app.js file
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
    expect(dollars).toBe(expected);
});

test("One dollar should be 146.26168 yen", function() {
    // Use the function like its supposed to be used
    const yen = fromDollarToYen(1);

    // If 1 dollar is 146.26168 yen, then 1 dollar should be approximately 146.26168 yen
    const expected = (1 / 1.07) * 156.5;
    
    // This is the comparison for the unit test
    expect(yen).toBeCloseTo(expected, 5);
});

test("One yen should be 0.00496 pounds", function() {
    // Use the function like its supposed to be used
    const pounds = fromYenToPound(1);

    // If 1 yen is 0.00496 pounds, then 1 yen should be approximately 0.00496 pounds
    const expected = (1 / 156.5) * 0.87;
    
    // This is the comparison for the unit test
    expect(pounds).toBeCloseTo(expected, 5);
});
