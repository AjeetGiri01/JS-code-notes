// // For loop..
// for(let i=1; i<=5; i++) {
//     console.log("ajeet giri");
// }

// // while loop..
// let i=1;
// while(i<=5){
//     console.log(i);
//     i++;
// }

// // do while..
// let i=1;
// do {
//     console.log(i);
//     i++;
// } while(i<=5);

// // for-of loop...
// let str = "AjeetGiri";
// let size = 0;
// for(let i of str){
//     console.log("i=", i);
//     size++;
// }
// console.log("string size =", size);

// for-in loop..
let student = {
    name: "Ajeet Giri",
    age: 20,
    cgpa: 9.2,
    isPass: true,
};
for (let key in student) {
    console.log("keys =", key, "value =", student[key]);
}