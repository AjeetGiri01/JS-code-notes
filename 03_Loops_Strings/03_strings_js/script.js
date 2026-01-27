// strings are immutable in js..

let str = "Ajeet Giri";
console.log(str.length);
console.log(str[1]);

// Template Literals
let specialString = `This is a template literal`; // backtick symbol
console.log(specialString);
console.log(typeof(specialString));

let obj = {
    item: "pen",
    price: 10,
};
console.log("The cost of", obj.item, "is", obj.price, "rupees.");
console.log(`the cost of ${obj.item} is ${obj.price} rupees.`);

// Escape Character..
console.log("Ajeet \n Giri..");
console.log("Ajeet \t Giri");

// String Methods.."do not change in original string ..it creates a new string"
let sm = "  abcDEFghijkl ";
console.log(sm.toUpperCase());
console.log(sm);
console.log(sm.toLowerCase());
console.log(sm.trim()); //  removes whitespaces from start and end..
console.log(sm.slice(2, 5)); // returns part of string
console.log(sm.replace("bc", "n"));
console.log(sm.charAt(5));


// practice qs..1
let n = prompt("Enter your fullname: ");
let un = "@"
console.log(`Your username is : ${un+n+n.length}`);
