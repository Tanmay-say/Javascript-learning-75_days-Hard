//7 types of primitive datatypes in java
//Null
//Number
//String
//Symbols
//Bollean
//Bigint
//Undefined

let a = null;
let b = 345;
let c = true;
let d = BigInt("567") + BigInt("3");
let e = "Tanmay";
let f = Symbol("I am a symbol");
let g = undefined;
console.log(a ,b ,c ,d ,e ,f ,g );

console.log(typeof d);

// Objects are non-primitive datatypes 

const item = {
    "Harry" : true ,
    "Shubh" : true ,
    "age" : 18 ,
    "age>12" : "Tanmay"
}
console.log(item["age"]);