// document.getElementById("submit").onclick = function (){

// let checkSub = document.getElementById("myCheckBox").checked;

// if (checkSub) {
//     console.log("You are subscribed!");
// }
// else {
//     console.log("You are not subscribed.");
// }
// }


document.getElementById("submitPayment").checked = function (){

    let visa = document.getElementById("visaPayment");
    let masterCard = document.getElementById("masterCardPayment");
    let payPal = document.getElementById("payPalPayment");

    if (visa.checked) {
        // document.getElementById("thanks").innerHTML = "Thank you for your payment with Visa!";
        console.log ("Visa");
    }
    else if(masterCard.checked) {
        // document.getElementById("thanks").innerHTML = "Thank you for your payment with Mastercard!";
        console.log ("master");
        
    }
    else if (payPal.checked){
        // document.getElementById("thanks").innerHTML = "Thank you for your payment with PayPal!";
        console.log ("Paypal");
        
    }
    else {
        // document.getElementById("thanks").innerHTML = "Please choose a payment method.";
        console.log ("Pay");
        
    }
}