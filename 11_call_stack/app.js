function one() {
    return 1;
}

function two() {
    return one() + one();
}

function three() {
    let ans = two() + one();
    console.log(ans);
}

three();


// -------------------------------
//js is single threaded language..
//it stores in the browser then it goes to the js callStack..
//Asynchronous nature..
setTimeout(() => {
    console.log("apna college");
}, 2000);
setTimeout(() => {
    console.log("hello world!");
}, 2000);
console.log("hello..");


//--------------------------------
// callBack hell -=> callback nesting..
h1 = document.querySelector("h1");

function changeColor(color, delay, nextColorChange) {
    setTimeout(() => {
        h1.style.color = color;
        if(nextColorChange) nextColorChange();
    }, delay);
}

changeColor("red", 1000, () => {
    changeColor("orange", 1000, () => {
        changeColor("green", 1000);
    });
});
