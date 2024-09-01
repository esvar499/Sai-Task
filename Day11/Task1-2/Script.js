// Function to check if a number is a power of 2
const Powerof2 = (n) => {
    // If n is 0, it's not a power of 2
    if (n === 0) {
        return false;
    }
    // A number is a power of 2 if it has only one bit set in its binary representation
    // This expression checks that condition using bitwise AND
    return (n & (n - 1)) === 0;
};

console.log(`This is Power of 2`);
console.log(Powerof2(16)); // true, 16 is a power of 2
console.log(Powerof2(20)); // false, 20 is not a power of 2

console.log(`Print Pattern in Triangle`);

// Function to print a right-angled triangle pattern with 1's
const printPattern = (n) => {
    // Loop from 1 to n to create each row
    // 'i' starts at 1 and increments by 1 in each iteration until it is greater than 'n'
    for (let i = 1; i <= n; i++) {
        // Print '1' repeated 'i' times to create the pattern
        console.log('1'.repeat(i));
    }
};

// Call the function to print the pattern with 3 rows
printPattern(3);

// Function to print a square pattern of size n x n with 1's
const printSquare = (n) => {
    // Loop from 1 to n to create each row
    for (let i = 1; i <= n; i++) {
        // Initialize an empty string for each row
        let row = '';
        // Loop from 1 to n to append '1' to the row string
        for (let j = 1; j <= n; j++) {
            row += '1'; // Append '1' to the row string
        }
        // Print the row string
        console.log(row);
    }
};

// Call the function to print the 3x3 square pattern
printSquare(3);
