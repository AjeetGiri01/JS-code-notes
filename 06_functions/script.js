/* Functions =>
Block of code that performs a specific task, can be invoked whenever needed..
NaN -> not a number
*/

function myName() { //parameter -> input
    console.log("Ajeet Giri");
}
myName();//function call "argument"


function sum(x, y) {
    s = x + y;
    return s;
}
let val = sum(11, 7);
console.log(val);

//arrow function => compact method to create functions
const arrowMul = (a, b) => {
    console.log(a * b);
};
arrowMul(4, 7);

//pr..count the vowels in the string
function noVowels(anyString) {
    let s = anyString;
    s.toLowerCase();
    let count = 0;
    for(let c of s){
        if(c === 'a' || c==='e' || c==='i' || c==='o' || c==='u'){
            count++;
        }
    }
    console.log(count);
}
noVowels("Radhey Radhey");
