let i = 0 ;
i = Number.parseInt(i);
do{
i++;
console.log("1. For Addition\n");
console.log("2. For Substraction\n");
console.log("3. For Multiplication\n");
console.log("4. For Division\n");
console.log("5. For Modules\n");
console.log("6. For Exit\n");
let choice = prompt("Enter your choice\n");
choice = Number.parseInt(choice);
let a = prompt("Enter value of A\n");
let b = prompt("Enter value of B\n");
switch(choice)
{
    case 1 : {
        alert(Number.parseInt(Number.parseInt(a)+Number.parseInt(b)));
    }break;
    case 2 : {
        alert(Number.parseInt(a-b));
    }break;
    case 3 : {
        alert(Number.parseInt(a*b));
    }break;
    case 4 : {
        alert(Number.parseInt(a/b));
    }break;
    case 5 : {
        alert(Number.parseInt(a%b));
    }break;
    case 6 : {
        break;
    }
    default : alert("Something went wrong");
    break;
}
console.log("Do you want to continue ",i,"\n");
console.log("1. To continue \n");
console.log("2. To exit \n");
let conti = prompt("Enter 1 or 2 ");
if(conti == 1)
{
    let z = true;
}
else
break;

}while(true);