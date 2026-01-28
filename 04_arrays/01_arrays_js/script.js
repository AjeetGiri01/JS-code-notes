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

//pr question 1.. average of the student marks?
let stdMarks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for(let n of stdMarks) {
    sum += n;
}
console.log(sum/stdMarks.length);

//pr question 2.. offer is 10% on each price and return the new prices array..
let prices = [250, 645, 300, 900, 50];
for(let i=0; i<prices.length; i++) {
    let off = (prices[i]*10)/100;
    prices[i] -= off;
}
console.log(prices); 
