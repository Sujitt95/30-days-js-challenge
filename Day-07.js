console.log(".................task 1");
let books={
    title:"abc",
    author:"cds",
    year:1995
}
console.log(books);


console.log(".................task 2");
console.log(` the name of the book is ${books.title} and the auther name is ${books.author} `);

//task 3
console.log(".................task 3");
books.method=function(){
    return `the book title is ${this.title} and the author name is ${this.author}`
}

console.log(books.method());

//task 4
console.log(".................task 4");

books.chngyear=function(newyear){
    this.year=newyear;
}
books.chngyear(2024)
console.log(`the new obj ${books}`);
console.log(books.year);

//task 5
console.log(".................task 5");

let libary={
    name:"central libary",
    books:[
        {
            bookname:"book one",
            publicyear:2000
        },
        {
            bookname:"book two",
            publicyear:2034
        },
        {
            bookname:"book three",
            publicyear:2023
        }
    ]
}
console.log(libary);

console.log(".................task 6");

console.log(`the libary name ${libary.name}`);

libary.books.forEach((i) => {
    console.log(i.bookname);
});

console.log(".................task 7");

books.method=function(){
    return `the book title is ${this.title} and the year is ${this.year}`
}

console.log(books.method());

console.log(".................task 8");

for (const key in books) {
   if(typeof books[key] !== 'function'){
    console.log(` ${key}=${books[key]}`);
   }
}

console.log(".................task 9");

console.log(Object.keys(books));
console.log(Object.values(books));