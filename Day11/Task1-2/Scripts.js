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
