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
