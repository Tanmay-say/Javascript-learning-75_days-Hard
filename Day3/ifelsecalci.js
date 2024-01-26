let z = true;
while(z){
let choice = prompt("Enter your choice\n1. For Addition\n2. For Substraction\n3. For Multiplication\n4. For Division\n5. For Modules\n6. For Exit\n");
choice = Number.parseInt(choice);
if(choice < 6){
let a = prompt("Enter value of A\n");
let b = prompt("Enter value of B\n");
if(choice == 1){
        alert(Number.parseInt(Number.parseInt(a)+Number.parseInt(b)));
    }
else if(choice == 2){
        alert(Number.parseInt(a-b));
    }
else if(choice == 3){
        alert(Number.parseInt(a*b));
    }
else if(choice == 4) {
        alert(Number.parseInt(a/b));
    }
else if(choice == 5) {
        alert(Number.parseInt(a%b));
    }
else{
    alert("Something went wrong");
}

while(true){
let conti = prompt("Do you want to continue \n1. To continue \n2. To exit \n");
if(conti == 1)
{
    alert("!!! Your are conitnuing !!!");
    break;
}else if(conti == 2)
{ z = false ;
break;}
else{alert("!!! Try Again !!!");}
}

}
else if(choice == 6)
{break;}
else{alert("!!! Try Again !!!");}

}