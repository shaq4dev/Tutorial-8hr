// startProgram(); 

// function startProgram(){
//     let userName = "Shaquille";
//     let age = 27;

//     man(userName, age)
// }

// function man(a, b){
//     console.log("I am", a, ",I am", b, "and I am a strong man");
// }


// calculate area of rectangle

let area;
let width; 
let height;

width = window.prompt("enter width");
height = window.prompt("enter height");

area = getArea(width, height);
console.log("the area is", area);

function getArea(width, height){
    return width * height;
}