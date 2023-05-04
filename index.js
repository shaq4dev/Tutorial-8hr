// playing ludo

// not working
let a;
let b;


document.getElementById("roll-die").onclick = function (){

    a = Math.floor((Math.random() * 6) + 1);
    b = Math.floor((Math.random() * 6) + 1);
    

    document.getElementById("dice-one").innerHTML = a;
    document.getElementById("dice-two").innerHTML = b;

}

// working
let x; 
let y;

document.getElementById("roll").onclick = function (){

    x = Math.floor((Math.random() * 6) + 1);
    y = Math.floor((Math.random() * 6) + 1);

    document.getElementById("x-label").innerHTML = x;
    document.getElementById("y-label").innerHTML = y;
}


