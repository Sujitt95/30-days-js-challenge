let a = 0;

if (a > 0) {
    console.log("posetive");
}
else if (a === 0) {
    console.log("it's zero");
} else {
    console.log("negative");
}


let age = 88;
console.log(age>=18?"eligble":"not eligble");

let x = 53;
let y = 23;
let z = 82;
if (x > y) {
    if (x > z) {
        console.log(x);
    }else{
        console.log(z);
    }
}
else {
    if (y > z) {
        console.log(y);
    }
    else {
        console.log(z);
    }
}

let day=5;

switch (day) {
    case 1:
        console.log("sunday");
        break;
    case 2:
        console.log("monday");
        break;
    case 3:
        console.log("tuseday");
        break;
    case 4:
        console.log("wednesday");
        break;
    case 5:
        console.log("thursday");
        break;
    case 6:
        console.log("friday");
        break;
    case 7:
        console.log("saturday");
        break;
    default:
        console.log("invalid day");
        break;
}

let score=89;

switch (true){
    case score>=90:
        console.log(`grade A`);
        break;
    case score>=80:
        console.log(`grade B`);
        break;
    case score>=70:
        console.log(`grade C`);
        break;
    case score>=60:
        console.log(`grade D`);
        break;
    case score>=50:
        console.log(`grade E`);
        break;
    default:
        console.log(`invalide score`);
}

let num =55;
console.log(num%2==0?"even":"odd");

let year=2024;

if((year % 4==0 && year % 100 !=0) || year % 400 == 0 ){
    console.log("leap year");
}
else{
    console.log("not a leap year");
}