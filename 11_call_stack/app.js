// function one() {
//     return 1;
// }

// function two() {
//     return one() + one();
// }

// function three() {
//     let ans = two() + one();
//     console.log(ans);
// }

// three();


// // --------------------------------------
// //js is single threaded language..
// //it stores in the browser then it goes to the js callStack..
// //Asynchronous nature..
// setTimeout(() => {
//     console.log("apna college");
// }, 2000);
// setTimeout(() => {
//     console.log("hello world!");
// }, 2000);
// console.log("hello..");


// //---------------------------------------
// // callBack hell -=> callback nesting..
// h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     }, delay);
// }

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000);
//     });
// });


//-----------------------------------------
//setting up for promises
// function savetoDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if(internetSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }
// }

// savetoDb("apna college", () => {
//     console.log("success : your data was saved");
//     savetoDb("hello world", () => {
//         console.log("success2: data2 saved");
//     }, () => {
//         console.log("failure2: weak connection");
//     });
// }, () => {
//     console.log("failure: weak connection. data not saved");
// });


// //--------------------------------------------
// //promises -> a kind of object resolve(success) & reject(failure)
// // state -> pending, rejected(error), fulfilled(resolved)
// function savetoDb(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if(internetSpeed > 4) {
//             resolve("success: data was saved");
//         } else {
//             reject("failure: weak connection");
//         }
//     });
// }
// // savetoDb("giri tech");


// // ---------------------------------------
// // then() & catch() method.. //req = promise obj
// savetoDb("giri technologies") 
// .then((result) => {
//     console.log("data1 saved: promise was resolved");
//     console.log("result of promise:", result);
//     return savetoDb("helloworld");
// })
// .then((result) => {
//     console.log("data2 saved");
//     console.log("result of promise:", result);
//     return savetoDb("ajeet");
// })
// .then((result) => {
//     console.log("data3 saved!");
//     console.log("result of promise:", result);
// })
// .catch((error) => {
//     console.log("promise was rejected");
//     console.log("error of promise:", error);
// })
// //promise chaining --^^^^^
// //promises are rejected and resolved with some data(valid results or errors)--^^^



//-------------------------------------------
h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed!");
        }, delay);
    })
}

changeColor("red", 1000)
.then(() => {
    console.log("red color was completed");
    return changeColor("orange", 1000);
})
.then(() => {
    console.log("orange was completed");
    return changeColor("green", 1000);
})
.then(() => {
    console.log("green was completed");
})
.catch(() => {
    console.log("something wrong");
})

