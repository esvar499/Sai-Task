// Arrays of numbers
let num1 = [2, 7, 10];
let num2 = [19, 71, 28];

// Function to calculate the sum of digits of each number in an array
const sumOfDigits = numbers => {
    // Flatten the array, convert each number to string, split into digits, map to numbers, and sum them up
    return numbers
        .flatMap(number => number.toString().split('')) // Flatten and split each number into digits
        .map(Number) // Convert string digits to numbers
        .reduce((acc, digit) => acc + digit, 0); // Sum up all digits
};

console.log(sumOfDigits(num1)); // Output: 20
console.log(sumOfDigits(num2)); // Output: 35
