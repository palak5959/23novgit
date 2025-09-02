// primitive datatypes-> call by value - humme datatype ki copy di jaati he or changes bhi usi me hi hote he original me nahi 

// 7 types : String, number, boolean, null, undefined, symbol, BigInt

const score = 100;
const islogged = false;
const scorevalue=100.3;

const temp = null;
let useremail;
//basic usage of ->symbol
const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id == anotherid);// as you know ki humne same value daali he fir bhi false aaa rha he kyuki symbols me esa hi hota he alg alg values hi hoti he 

//bigint

const bignumber =643682632362736n
// 


// Non-primitive datatypes -> call by reference 

// array, objects, functions

//arrays
const heros = ["hello","bccho","kese ho "];
console.log(heros);

//objects
let myobj ={
    name: "palak",
    age :22,
}
console.log(myobj);

//function
const myfunction = function(){
    console.log("hello bchho")
}
// console.log(myfunction);

console.log(typeof score);//number
console.log(typeof scorevalue);//number
console.log(typeof islogged);//boolean
console.log(typeof temp);//obj
console.log(typeof id);//symbol
console.log(typeof anotherid);//symbol
console.log(typeof bignumber);//bigint
console.log(typeof heros);//obj
console.log(typeof myobj);//obj
console.log(typeof myfunction);//function object




