//Program to design below pattern
//    * / / *
//    / / / /
//    / / / /
//    * / / *
let i = 1 , j = 1 ;
i = Number.parseInt(i);
j = Number.parseInt(j);
let n = prompt("Enter the value of n");
n = Number.parseInt(n);
for(i = 1 ; i <= n ; i++)
{
    for(j = 1 ; j <= n ; j++)
    {
        if((i == n&&j==n || i == 1 && j ==1) || (i == 1 && j == n) || (i == n && j == 1))
        {
            console.log(i,j,'*');
        }
        else
        {
            console.log(i,j,'/');
        }
    }
}