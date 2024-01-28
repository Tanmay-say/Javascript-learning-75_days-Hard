//Program to add even natural numbers upto n 
let i  ;
let sum = 0 ;
sum = Number.parseInt(sum);
i = Number.parseInt(i);
let n = prompt("Enter the natural number");
n = Number.parseInt(n);
for(i = 1 ; i <= n ; i++)
{
    if(i % 2 ==0){
   sum = sum + i;}
}
console.log(sum);