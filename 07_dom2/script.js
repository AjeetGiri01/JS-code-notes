// getAttribute(attr)  --> to get the attribute value
let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let name = div.getAttribute("name");
console.log(name);

let para = document.querySelector("p");
console.log(para.getAttribute("class"));

// setAttribute(attr, value) --> to set the attribute val th
console.log(para.setAttribute("class", "newClass"));


//style..
div.style.backgroundColor = "green";
div.style.fontSize = "26px";
div.innerText = "Hello";
// div.style.visibility = "hidden";


//insert elements.. 1.->let el=document.createElement("div")  2.--> add
let newBtn = document.createElement("button");
newBtn.innerText = "click me!";
console.log(newBtn);

//node.append(el)-->adds at the end of node(inside)
