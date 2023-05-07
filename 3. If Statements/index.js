// document.getElementById("myButton").onclick = function (){

//     let checkedTrue = document.getElementById("myCheckBox").checked;

//     if (checkedTrue){
//         console.log("you are subscribe!");
//     }
//     else {
//         console.log("you are not subscribed");
//     }
// }

// alert ("this is a test");

// ternary operator (Used instead of an if else statement)

// let adult = checkAge(21);

// console.log(adult);

// function checkAge(age){
//     if(age >= 21) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// ternary ops

// let adult = checkAge(21);
// console.log(adult);

// function checkAge(age){
//     return age >= 18 ? true : false;
// }
checkWinner(true);
function checkWinner(win){
    win ? console.log('you win') : console.log('you lose');
}