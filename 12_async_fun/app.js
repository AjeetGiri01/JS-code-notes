// //async fuction
// async function greet() {
//     // afv.asdf();
//     throw "404 page not found";
//     return "hello!";
// }

// greet()
// .then((result) => {
//     console.log("promise was resolved");
//     console.log("result was:", result);
// })
// .catch((err) => {
//     console.log("promise was rejected with error:", err);
// })

// let demo = async () => {
//     return 5;
// };


//------------------------------------
//await keyword -> pauses the execution of its surrounding async function until the promise is settled 
// function getNum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     });
// }
// async function demo() {
//     await getNum();
//     await getNum();
//     getNum();
// }

h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 5) + 1;
            if(num > 3) {
                reject("promise rejected");
            }
            h1.style.color = color;
            console.log(`color changed to ${color}!`);
            resolve("color changed!");
        }, delay);
    });
}

async function demo() {
    try { //handling rejections
        await changeColor("red", 1000);
        await changeColor("orange", 1000);
        await changeColor("green", 1000);
        await changeColor("blue", 1000);
    } catch(err) {
        console.log("error caught");
        console.log(err);
    }

    let a = 5; 
    console.log(a);
    console.log(`new number is ${a + 2}`);
}



//--------------------------------------------
//json -> api returns the json(javascript object notation) data 
let jsonRes = '{"fact":"In contrast to dogs, cats have not undergone major changes during their domestication process.","length":94}';
console.log(jsonRes);

// JSON.parse(data) --> to parse a sting data into a js object
let validRes = JSON.parse(jsonRes);
console.log(validRes);
console.log(validRes.fact);

//JSON.stringify(student) --> to parse a js object data into JSON
let student = {
    name: "ajeet",
    age: 20, 
    marks: 98
};
console.log(JSON.stringify(student));

//testing API requests --> hoppscotch and postman