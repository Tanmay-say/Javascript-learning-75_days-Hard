let i = 1 ;
i = Number.parseInt(i);
while(true){
let choice = prompt("Enter your choice\n1. For Addition\n2. For Substraction\n3. For Multiplication\n4. For Division\n5. For Modules\n6. For Exit\n");
choice = Number.parseInt(choice);
if(choice < 6){
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
    default : alert("Something went wrong");
    break;
}
let conti = prompt("Do you want to continue \n1. To continue \n2. To exit \n");
if(conti == 1)
{
    alert("!!! Your are conitnuing !!!");
}
else{break;}

}
else if(choice == 6)
{break;}
else{alert("!!! Try Again !!!");}

}