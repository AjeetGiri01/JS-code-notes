/* arrays are the collections of items..
These are special type of objects where keys are indices and values are elements..
These are mutable.
*/

// let marks = {
//     stu1 : 97,
//     stu2 : 93,
// }

let marks = [96, 96, 94, 95, 97];
console.log(marks);
console.log(marks.length); //property
console.log(typeof marks);
console.log(marks[3]);
marks[3] = 99;
console.log(marks);

//looping in an arrays.
let num = [2,34,37,46,4];
for(let i=0; i<num.length; i++){
    console.log(num[i]);
}

for (let n of num) {
    console.log(n);
}


//Array methods..
let foods = ["potato", "apple", "lichi"];
foods.push("chips", "burger", "paneer");
console.log(foods);
foods.pop();
console.log(foods);
console.log(foods.toString());
// concat returns a new array..
let marHeroes = ["ironman", "thor", "bucky", "nebula", "starLord"];
let dcHeroes = ["superman",  "batman"];
let heroes = marHeroes.concat(dcHeroes);
console.log(heroes);

marHeroes.unshift("antman"); //adds something in the starting..
console.log(marHeroes);
dcHeroes.shift(); //delete one from the starting..
console.log(dcHeroes);

console.log(marHeroes.slice(1, 3)); //slice returns a different array..
let s = [3, 23, 345, 456, 342, 656, 56];
//splice => change original array => splice(startIdx, delCount, newEl1..)
s.splice(2, 2, 1534, 34532);
console.log(s);
