for(let i=1;i<=10;i++){
    console.log(i);
}

for (let i=1;i<=10;i++){
    console.log(`5 * ${i} = ${5*i} `);
}
let num =1
sum=0;
while (num<=10) {
    sum+=num;
    num++;
}
console.log(sum);

let x= 10;
while(x>=1){
    console.log(x);
    x--;
}


let i=1
do {
    console.log(i);
    i++;
} while (i<=5);


let j=1;
let f=1;
do {
    f*=j;
    j++;
} while (j<=5);
console.log(f);

for(let i=1;i<=5;i++){
    let x=""
    for(let j=1;j<=i;j++){
        x+="* ";
    }
    console.log(x);
}

for(let i=1;i<=10;i++){
    if(i==5) continue;
    console.log(i);
}

for(let i =1;i<=10;i++){
    if(i==7) break;
    console.log(i);
}