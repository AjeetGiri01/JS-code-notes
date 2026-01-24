let gameNum = 25;
let userNum = prompt("Guess the game number :");
console.log("Your first entered no. was", userNum);
while(userNum != gameNum){
    if(gameNum > userNum){
        userNum = prompt("Enter the bigger no. ");
    }else {
        userNum = prompt("Enter the smaller no. ");
    }
}
console.log("Congratulations, you entered the right number.");


