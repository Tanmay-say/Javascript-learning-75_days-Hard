//Program to design below pattern
//    * / / /
//    * * / /
//    * * * /
//    * * * *
let i = 1 , j = 1 ;
i = Number.parseInt(i);
j = Number.parseInt(j);
for(i = 1 ; i <= 4 ; i++)
{
    for(j = 1 ; j <= 4 ; j++)
    {
        if(i >= j)
        {
            console.log(" * ")
        }
        else{
            console.log(" / ")
        }
    }
}