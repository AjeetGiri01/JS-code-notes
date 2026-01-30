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