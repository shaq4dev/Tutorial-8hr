let fruits = ['apple','orange','banana'];

// fruits[0] = 'coconut';
fruits.push('lemon'); //adds an element
fruits.pop(); //removes last element
fruits.unshift('manog'); //add element to beginning
fruits.shift(); //removes element from beginning

let length = fruits.length;
let index = fruits.indexOf("banana");
// console.log(index);

// loop through elements of an array

let prices = [5,10,15,20,25];

// for (let i = 0; i < prices.length; i+=1){
//     console.log(prices[i]);
// }

//iterate backwards

// for (let i = prices.length - 1; i >= 0; i-=1){
//     console.log(prices[i]);
// }

// for up statement

for(let price of prices){
    console.log(prices);
}