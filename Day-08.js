// task 1
let name = "sujitt";
let age = 22;

console.log(`hi its ${name} and i am ${age}`);

// task 2
console.log(`hii my name is 
    ${name} and 
    my age is ${age}`);

// task 3

let arr =[1,2,3,4,5];
let [first,second] = arr
console.log( ` the first element is  ${first}`);

// task 4
let books ={
    book:"bddhcbs",
    author:"aiuh",
    dop:"20/03/2002"
}
let {book,author}=books;
console.log(`the name of the book is ${book} and the auther is ${author}`);

// task 5

let newarr =[...arr , 6,7,8,9,10];
console.log(newarr);


// task 6

function sumall(...num){
    return num.reduce( (a,b)=>(a+=b),0 )
}

console.log(sumall(1,2,4,5));


// task 7
function product(a,b=1){
    return a*b;
}
console.log(product(5));

// task 8

let student ={
    name:"yysg",
    age:23,
    phy:68,
    che:89,
    mat:90,
    total(){
        return this.phy + this.che + this.mat
    }
}

console.log(student);
console.log(student.name);
console.log(student.total());

let prop1 ="gender"
let prop2 ="address"

student= {...student,[prop1]:"mail",[prop2]:"bbsr"}

console.log(student["gender"],"and ",student.address);

