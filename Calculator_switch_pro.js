const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin ,
    output : process.stdout
});

function Calculator()
{
    console.log("Welcome to Tanmay's Calculator\n");
    console.log("1. To sum");
    console.log("2. To sub");
    console.log("3. To mul");
    console.log("4. To div");
    console.log("5. To mod");
    rl.question("Enter your Choice : ",(choice) => {
        choice = parseInt(choice);
        if(choice >=5 || choice >=1)
        {
            rl.question("Enter the value of a : ",(a) => {
                rl.question("Enter the value of b : ",(b) => {
                    a = parseFloat(a);
                    b = parseFloat(b);
                    switch(choice)
                    {
                        case 1 : console.log("Result of sum is : ",a+b);
                    }
                });
            });
        }else{
            rl.close();
        }
    });
    rl.close();
}

