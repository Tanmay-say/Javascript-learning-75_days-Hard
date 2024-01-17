const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculator() {
    console.log("Welcome to Tanmay's Calculator\n\n");
    console.log("1. To sum\n");
    console.log("2. To sub\n");
    console.log("3. To mul\n");
    console.log("4. To div\n");
    console.log("5. To mod\n");

    rl.question("Enter your choice: ", (choice) => {
        choice = parseInt(choice);

        if (choice >= 1 && choice <= 5) {
            rl.question("Enter the value of a: ", (a) => {
                rl.question("Enter the value of b: ", (b) => {
                    a = parseFloat(a);
                    b = parseFloat(b);

                    if (choice === 1) {
                        console.log("Result: ", a + b);
                    } else if (choice === 2) {
                        console.log("Result: ", a - b);
                    } else if (choice === 3) {
                        console.log("Result: ", a * b);
                    } else if (choice === 4) {
                        if (b !== 0) {
                            console.log("Result: ", a / b);
                        } else {
                            console.log("Error: Division by zero");
                        }
                    } else if (choice === 5) {
                        if (b !== 0) {
                            console.log("Result: ", a % b);
                        } else {
                            console.log("Error: Modulus by zero");
                        }
                    }

                    // Ask if the user wants to continue
                    console.log("\nDo you want to continue?");
                    console.log("1. Yes");
                    console.log("2. No");

                    rl.question("Choice please: ", (rep) => {
                        rep = parseInt(rep);
                        if (rep === 1) {
                            // Call calculator again for the next iteration
                            calculator();
                        } else {
                            // Close the interface if the user chooses to exit
                            rl.close();
                        }
                    });
                });
            });
        } else {
            console.log("Invalid choice\n\t\t\t\t=====================================================================");
            console.log("Do you want to continue?");
            console.log("1. Yes");
            console.log("2. No");

            rl.question("Choice please: ", (rep) => {
                rep = parseInt(rep);
                if (rep === 2) {
                    // Close the interface if the user chooses to exit
                    rl.close();
                } else {
                    // Call calculator again for the next iteration
                    calculator();
                }
            });
        }
    });
}

// Start the calculator
calculator();
