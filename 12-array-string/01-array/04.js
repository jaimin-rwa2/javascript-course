const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Includes : dose this exist or not
console.log(fruits.includes("Mango"));
console.log(fruits.includes("Apple"));


const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);
let last = numbers.findLast(myFunction);
let allNum = numbers.filter(myFunction);
let firstIndex = numbers.findIndex(myFunction);
let lastIndex = numbers.findLastIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

console.log(first)
console.log(last)
console.log(allNum)
console.log(firstIndex)