//forEach loop => use only for arrays not for strings
// arr.forEach( callBackFunction )
// 3 parameters in callBackFunction => value, index, array
let arr = [1, 2, 3, 4, 5];
arr.forEach((val) => {
    console.log(val);
});

let cityName = ["Delhi", "Goa", "Mau", "Leh"];
cityName.forEach((city, idx, cityName) => {
    console.log(city.toUpperCase(), idx, cityName);
});

//pr qs => square of each value in an array
let nums = [23, 12, 5, 1, 6, 11];
nums.forEach((n) => {
    console.log(`square of ${n} is ${n*n}`);
});


/*
some more array methods..
1. Map => same as forEach, but returns a new array
*/
// nums.map((d) => {
//     console.log(d);
// });
let newArr = nums.map((d) => {
    return d*2;
});
console.log(newArr);
console.log(nums);


//2. filter => creates new array of elements that give true for a condition/filter. eg. all even elements
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNo = arr2.filter((e) => {
    return e%2===0;
});
console.log(evenNo);
console.log(arr2);


//3. reduce method => performs some operations and reduces the array to a single value.
let arr3 = [2, 4, 5, 3];
const output = arr3.reduce((pre, curr) => { // initially pre=2, curr=4
    return pre + curr;
});
console.log(output);

const great = arr3.reduce((pre, curr) => {
    if(pre>curr) return pre;
    return curr;
});
console.log(great);


//pr qs.. filter out marks more than 90..
const marks = [45, 97, 93, 23, 45, 65, 89, 78];
let high = marks.filter((m) => {
    return m>90;
});
console.log(high);


//pr qs..reduce method to calculate sum and product of nums.
const n = prompt("Enter any number for sum and product:");
let nums2 = [];
for(let i=1; i<=n; i++){
    nums2[i-1] = i;
}
console.log(nums2);
let sumNums = nums2.reduce((pre, curr) => {
    return pre+curr;
});
console.log(sumNums);
let prodNums = nums2.reduce((pre, curr) => {
    return pre*curr;
});
console.log(prodNums);