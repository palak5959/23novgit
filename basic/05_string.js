const nname  = "palak";
const num = 13
console.log(nname+num+"value");//bekar

console.log(`my name is ${nname} i am ${num}`)//string interpolation
//we can do this also and etc etc 
console.log(`my name is ${nname.toUpperCase()} i am ${num}`)//string interpolation


console.log(nname.__proto__);

const gamename = new String('palakc');// 2 way - in this we can see the key value pairs str[0] = p
console.log(gamename[0]);
console.log(gamename.__proto__);// to check all the prototypes of the string you can chek this on browser 
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('p'));

const nnew = gamename.substring(0,4);
console.log(nnew);
const aan = gamename.substring(-8,4);
console.log(aan);

const newstring ="    palak   ";
console.log(newstring);
console.log(newstring.trim());

const url = "http://palak.com/palak%20choudhary"

console.log(url.replace('%20','-'));

console.log(url.includes('elina'));
console.log(gamename.split('-'));  // 





