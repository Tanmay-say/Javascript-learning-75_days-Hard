/*
//                                         '"Arithemetic operators"'
// + : Addition
// - : Substractions
// / : Division
// * : Multiplications
// ** : Power
// % : Modules
// ++ : Increment 
// -- : Decrement 

console.log("Operators in js : \n");
let a = 2 , b = 2 ;
console.log("a + b is : ",a+b);
console.log("a - b is : ",a-b);
console.log("a * b is : ",a*b);
console.log("a / b is : ",a/b);
console.log("a % b is : ",a%b);
console.log("a ** b is : ",a**b);
console.log("a++ is : ", (a++) ); //post - increment
console.log(a);
console.log("b-- is : ",(b--));
console.log(b);
console.log("++a is : ", (++a) ); //pre-incement
console.log("--b is : ", (--b) );



console.log("======================================================================\n\n");

//Q1 Problem to solve  :- 
let z = 100 ;
console.log("z++ : ", (z++) );    //101         //print : 100  
console.log("z++ : ", (z++) );    //102         //print : 101
console.log("++z : ", (++z) );    //103         //print : 103
console.log("++z : ", (++z) );    //104         //print : 104
console.log("z++ : ", (z++) );    //105         //print : 104
console.log("++z : ", (++z) );    //106         //print : 106 
console.log("++z : ", (++z) );    //107         //print : 107 
console.log("++z : ", (++z) );    //108         //print : 108
console.log("z++ : ", (z++) );    //109         //print : 108
console.log("++z : ", (++z) );    //110         //print : 110
console.log("z++ : ", (z++) );    //111         //print : 110

console.log("z : ",z);





console.log("======================================================================\n\n");
//Q2 Problem to solve is inc & dec operations : 

let y = 100 ;

console.log("y++ : ", (y++) );  //101             //print : 100
console.log("y++ : ", (y++) );  //102             //print : 101
console.log("--y : ", (--y) );  //101             //print : 101 
console.log("y-- : ", (y--) );  //100             //print : 101
console.log("y++ : ", (y++) );  //101             //print : 100
console.log("y-- : ", (y--) );  //100             //print : 101
console.log("y++ : ", (y++) );  //101             //print : 100
console.log("--y : ", (--y) );  //100             //print : 100
console.log("--y : ", (--y) );  //99             //print : 99
console.log("++y : ", (++y) );  //100             //print : 100 
console.log("--y : ", (--y) );  // 99            //print : 99
console.log("++y : ", (++y) );  // 100            //print : 100
console.log("y++ : ", (y++) );  // 101            //print : 100
console.log("y++ : ", (y++) );  // 102            //print : 101
console.log("y++ : ", (y++) );  // 103            //print : 102
console.log("++y : ", (++y) );  // 104            //print : 104
console.log("++y : ", (++y) );  // 105            //print : 105
console.log("y-- : ", (y--) );  // 104            //print : 105
console.log("--y : ", (--y) );  // 103            //print : 103
console.log("--y : ", (--y) );  // 102            //print : 102
console.log("y-- : ", (y--) );  // 101            //print : 102
console.log("y++ : ", (y++) );  // 102            //print : 101
console.log("y++ : ", (y++) );  // 103            //print : 102
console.log("y-- : ", (y--) );  // 102            //print : 103
console.log("--y : ", (--y) );  // 101            //print : 101
console.log("y-- : ", (y--) );  // 100            //print : 101

console.log(y);
*/

//                   ASSIGNMENT OPERATOR 
let a = 1 ;
a += 5 ;                          // a = a + 5
console.log(a);
let b = 5 ;
b %= 5 ;                          // b = b % 5
console.log(b);
let c = 1 ;
c -= 5 ;                         // c = c - 5
console.log(c);
let d = 100 ;
d /= 5 ;                        // d = d / 5 
console.log(d);
let e = 2 ;
e *= 5 ;                         // e = e * 5
console.log(e);
let f = 5 ;
f **= 5 ;                         // f = f ** 5
console.log(f);