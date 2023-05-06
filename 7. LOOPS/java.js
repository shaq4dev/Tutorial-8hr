// like an if statement except it repeats some code, while a condition is true
// could potentially repeat infinitely

// let userName = "";

// while(userName == ""){
//     window.prompt("Enter your name:");
// }

// console.log("Hello", userName);

// DO WHILE LOOP

// let userName; 

// do {
//     userName = window.prompt("Enter your name");
// }

// while (userName == ""); 

// console.log("Hello", userName);
 
// For Loops

// for (let i = 10; i > 0; i -= 1){
//     console.log(i);
// }

// console.log("happy new year!");

// Break and continue statement

// for(let i = 1; i <= 20; i++){
//     if(i == 13){
//         break;
//     }
//     console.log(i);
// }

// for(let i = 1; i <= 20; i++){
//     if(i == 13){
//         continue;
//     }
//     console.log(i);
// }

// Nested loop 

// a loop inside of another loop

// for (i = 1; i <= 3; i++){
//     console.log(i);
// }

for (i = 1; i <= 3; i++){
    for (j = 1; j <= 3; j++){
    console.log(j);
    }
}

//nested loop for dom
//outer loop for rows, inner loop for columns

// let symbol = window.prompt("Enter symbol");
// let rows = window.prompt("Enter number of rows");
// let columns = window.prompt("Enter number of Columns");

// for (i = 1; i <= rows; i++){
//     for (j = 1; j <= columns; j++){
//         document.getElementById("myRectangle").innerHTML += symbol;
//     }
//     document.getElementById("myRectangle").innerHTML += "<br>"
// }
