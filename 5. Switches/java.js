let grade = "Pizza";

switch (grade){
    case "A": 
    console.log("You did great");
    break;
    case "B": 
    console.log("You did good");
    break;
    case "C": 
    console.log("You did ok");
    break;
    case "D": 
    console.log("You passed barely");
    break;
    case "F": 
    console.log("You Failed");
    break;
    default: 
        console.log(grade, "is not a letter grade")
}

// number grades 

let numGrade = 5;

switch(true) {
    case numGrade >= 90: 
    console.log("You did great");
    break;
    case numGrade >= 80: 
    console.log("You did good");
    break;
    case numGrade >= 70: 
    console.log("You did ok");
    break;
    case numGrade >= 60: 
    console.log("You passed barely");
    break;
    default:
        console.log("You Failed");
}