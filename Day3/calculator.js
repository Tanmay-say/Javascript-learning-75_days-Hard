console.log("1. For Addition\n");
console.log("2. For Substraction\n");
console.log("3. For Multiplication\n");
console.log("4. For Division\n");
console.log("5. For Modules\n");
let choice = prompt("Enter your choice\n");
choice = Number.parseInt(choice);
let a = prompt("Enter value of a\n");
let b = prompt("Enter value of b\n");
switch(choice)
{
    case 1 : {
        console.log(Number.parseInt(Number.parseInt(a)+Number.parseInt(b)));
    }break;
    case 2 : {
        console.log(Number.parseInt(a-b));
    }break;
    case 3 : {
        console.log(Number.parseInt(a*b));
    }break;
    case 4 : {
        console.log(Number.parseInt(a/b));
    }break;
    case 5 : {
        console.log(Number.parseInt(a%b));
    }break;
    default : console.log("Something went wrong");
    break;
}