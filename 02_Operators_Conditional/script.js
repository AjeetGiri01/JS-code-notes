console.log("Hello World");
// This is a comment..
/* This is a multi-
line comment */
let a = 12;
let b = 3;

// Arithmetic operator...
console.log("a =", a);
console.log("b =", b);
console.log("a + b =", a + b);
console.log("a - b =", a-b);
console.log("a * b = ", a*b);
console.log("a / b = ", a/b);
console.log("a % b = ", a%b);
console.log("a ** b = ", a**b);

// Unary Operator..  ++ --
a++;
b--;
console.log(a);
console.log(b);

// Assignment operators... = += -= *=
let c = 12;
let d = 5;
console.log("c += 3 = ", c+=3); 
console.log("c *= 2 = ", c*=2);

// Comparison Operator...== != === !== > >= <=
console.log("a == b", a==b);
console.log("a !== b", a!==b);

// Logical Operators...&& ||(pipe symbol) !
console.log(a>b && a>2);
 


// Conditional Statements...
let age = 20;
let mode = "dark";
let color;
if(mode === "dark") {
    color = "black";
} else {
    color = "White";
}
// if(mode === "light") {
//     color = "white";
// }
console.log(color);


if(age < 18) {
    console.log("Junior..");
} else if (age > 60) {
    console.log("Senior..");
} else {
    console.log("Medium..");
}


let num = 10;
if(num%2 === 0) {
    console.log(num, " is even");
} else {
    console.log(num, "is odd");
}

// Ternary Operators..
age > 18 ? console.log("adult") : console.log("not adult");


// Practice Qs1..
let x = prompt("Enter any number \n");
if(x%5 === 0) {
    console.log("Entered no. is multiple of 5");
} else {
    console.log('Entered no. is not multiple of 5');
}

alert("Hellow...");


// Practice Qs2..
let marks = prompt("Enter your achieved marks..");
if(marks>=90 && marks<=100) {
    console.log("Grade A");
}else if (marks>=70 && marks<=89) {
    console.log("Grade B");
}else if(marks>=60 && marks<=69) {
    console.log("Grade C");
}else if(marks>=50 && marks<=59) {
    console.log("Grade D");
}else if(marks>=0 && marks<=49) {
    console.log("Fail in exam NOT in life..");
}