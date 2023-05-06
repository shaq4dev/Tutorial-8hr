// useful string properties & methods

let userName = "Shaquille Blackwood";

let nameLength = userName.length;

console.log(nameLength);

let firstLetter = userName.charAt(0);
console.log(firstLetter);

// first occurence

console.log(userName.indexOf("d"));

// last index of

console.log(userName.lastIndexOf("l"));

// Trim spaces

let nameUser = "    Shaquille Blackwood     "; 
let phoneNumber = "123-456-7890";

console.log(nameUser.trim());

nameUser1 = nameUser.toUpperCase();
nameUser2 = nameUser.toLowerCase();

console.log(nameUser1);
console.log(nameUser2);

phoneNumber = phoneNumber.replaceAll("-", "/"); 
console.log(phoneNumber);

// slice method

let fullName = "Bible Explosion";
let firstName; 
let lastName;

// lastName = fullName.slice(10);
// firstName = fullName.slice(0,9);

lastName = fullName.slice(fullName.indexOf(" ") + 1);
firstName = fullName.slice(0,fullName.indexOf(" ") + 1);

console.log(lastName);
console.log(firstName);

