// let temp = 20;

// if (temp > 0 && temp < 30){
//     console.log("The weather is good");
// }
// else {
//     console.log("The weather is bad");
// }

// let temp = 20;

// if (temp <= 0 || temp >= 30){
//     console.log("The weather is bad");
// }
// else {
//     console.log("The weather is good");
// }

let temp = 20;
let sunny = true; 

if (temp > 0 && temp < 30 && sunny){
    console.log("The weather is good");
}
else {
    console.log("The weather is bad");
}

// Not logical operator: typically used to reverse a condition's boolean value. 

let a = -15;
let sunnier = true;

if (!(a > 0)){
    console.log("It's cold outside");
}
else {
     console.log("It's warm outside");   
}

if (!sunnier) {
    console.log("It's sunny outside"); 
}
else {

    console.log("It's not sunny outside"); 
}