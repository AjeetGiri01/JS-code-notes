/*Events in js..
the change in the state of an object is known as an event.
events are fired to notify code of "interesting changes" that may affect code execution.
> mouse events
> keyboard events
> form events
> print event & many more

js handling is high priority then the inline handling..
we can't handle one thing multiple times...it becomes overright..

*/

let btn1 = document.querySelector("#btn1");
btn1.onclick = (evt) => {
    console.log("btn1 was clicked!");
    let a = 23;
    a++;
    console.log(a);

    //event object-> evt
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
}

let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("you are inside the div!");
}

/* EVENT OBJECT..
it is a special object that has details about the event.
all event handlers have access to the event object's properties and methods.
node.event = (evt) => {
    //handle here..
}
*/


/*EVENT LISTENERS..
node.addEventListener(event, callback)
node.removeEventListener(event, callback)
note-> the callback reference should be same to remove
*/
let btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", (evt3) => {
    console.log("3rd button was clicked!");
    console.log(evt3);
    console.log(evt3.type);
})
btn3.addEventListener("click", () => {
    console.log("3rd button was clicked - handler2");
})
const handler3 = () => {
    console.log("3rd button was clicked - handler3")
}
btn3.addEventListener("click", handler3);
btn3.addEventListener("click", () => {
    console.log("3rd button was clicked - handler4");
})

btn3.removeEventListener("click", handler3);


//pr qs.. toggle button that changes the screen to dark and light mode again after clicking.
let mode = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";
mode.addEventListener("click", () =>{
    if(currMode === "light"){
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);
})
