//                       CONDITIONAL EXPRESS
/*
IF
IF...ELSE
IF...ELSE IF .....ELSE 
*/


let a = 97;
a = parseInt(a);
console.log(typeof a);
if(a > 0)
{
if (a <= 9)
{
    console.log("you are a kid");
}
else if(a < 18)
{
    console.log("You are under age");
}
else if(18 <= a && a < 90)
{
    console.log("You can vote");
}
else
console.log("Something went wrong");
}
else
console.log("Age can't be negative");