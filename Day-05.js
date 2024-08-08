function even_odd(num1) {
    if (num1 % 2 == 0) {
        console.log(`${num1} is a even number `);
    }
    else {
        console.log(` ${num1} is odd number `);
    }
}

even_odd(6);

function squareOfnumber(n) {
    return n * n
}

console.log(squareOfnumber(8));


function findMax(a, b) {
    return a > b ? `${a} is greater` : `${b} is greater`;
}

console.log(findMax(5, 7));

function strAdd(x, y) {
    return x + " " + y
}

console.log(strAdd("hii", "byy"));

const add = (a, b) => {
    return a + b
}
console.log(add(5, 8));

const findChar = (str, char) => {
    if (str.indexOf(char) > -1) {
        return true
    }
    else {
        return false
    }
}
console.log(findChar("sujitt", "k"));

const product = (a, b = 10) => {
    return a * b
}
console.log(product(5, 6));
console.log(product(5));

//task 8 

const greet = (name, age = 18) => {
    console.log(` Hii ${name} is your age ${age}`);
}
greet("sujitt", 456);

//task 9
function print() {
    console.log("Hiii");
}
function higfun(fun, num) {
    for (let i = 1; i <= num; i++) {
        fun();
    }
}
higfun(print, 5);


//task 10

const first_function = (x) => {
    return x +10
}
const second_function = (y) => {
    return y+10
}

function calculate(fun1,fun2,num){
    return fun2(fun1(num))
}

console.log(calculate(first_function,second_function,100));