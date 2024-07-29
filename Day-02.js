
const add=(a,b)=>{
    return a+b
}
const sub=(a,b)=>{
    return a-b
}
const mult=(a,b)=>{
    return a*b
}
const divd=(a,b)=>{
    return a/b
}
const reman=(a,b)=>{
    return a%b
}
console.log(`5+3=${add(5,3)}`);
console.log(`5-3=${sub(5,3)}`);
console.log(`4*2=${mult(4,2)}`);
console.log(`6/3=${divd(6,3)}`);
console.log(`remainder of 5/2 is ${reman(5,2)} `);

let num1=55;
console.log(num1+=5);

console.log(num1-=10);

console.log(5>4);
console.log(5<4);
console.log(6>=6);
console.log(5<=8);

console.log(6==6);
console.log(6=="6");

console.log(6==="6");
console.log(6===6);
 
let x =true;
let y =false;

console.log(x&&y)
console.log(x||y);
console.log((x&&y)||y);
console.log(`xor :${x!==y}`);

let num8=0;
console.log(num8>0?"positive":"negetive");