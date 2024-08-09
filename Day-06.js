//task 1
let arr =[1,2,3,4,5]
console.log(arr);

//task 2
console.log(`the first element of array is ${arr[0]}`);
console.log(`last position of array ${arr[arr.length-1]}`);

//activity 2
arr.push(6)
console.log("after push method ",arr);

arr.pop();
console.log("after pop ethod",arr);

arr.shift()
console.log("after sift method",arr);

arr.unshift(1)
console.log("after unsift method", arr);

// activity 3

arr=[5,10,15,20,25]

let maparr=arr.map( (i)=>i*2 )
console.log(maparr);

let even=arr.filter( (i)=>i%2===0)
console.log(even);

let count=maparr.reduce( (prv,cut)=>prv+cut,0 )
console.log(count);

// activity 4

arr =[1,2,3,4,5,6,7,8,9,10];
let k=[];
for(let i=0;i<arr.length;i++){
     k.push(arr[i])
}
console.log(k);

arr.forEach((i)=>{
    console.log(i);
});