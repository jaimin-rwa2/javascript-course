// callback : function passed as args to other function.
// use to handel 
// 1. reading file 
// 2. network request
// 3. Interacting with database


function start(callback) {
    console.log("start...")
    callback()
}

function end() {
    console.log("end...")
}

start(end)

// setTimeout(callback, time in ms)
// it will run this function after exection of call stack
setTimeout(function (){
    console.log("setTimeout(callback, time in ms)")
}, 100)


// .foreach() : it accepts callback function
// usefull when want to perform opration on each element of array
// foreach make changes in existing array
// make chages in same space here it also pass index, and array with elemet as bellow example
let numbers = [1,2,3,4,5,6,7,8]

function display(element) {
    console.log(element)
}

function double(element, index, arr) {
    arr[index] = 2 * element 
}

// numbers.forEach(display);
numbers.forEach(double);
console.log(numbers)


// .map() : it accepts callback function
// same as foreach, it returns new array
// we have only one params here

let fruits = ["apple", "orange", "banana", "coconut"]

function toUpperLowerCase(element) {
    // method chaing
    element = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()
    return element
}

cassedFruits = fruits.map(toUpperLowerCase);
console.log(cassedFruits)



// .filter() : it accepts callback function
// it filter array based on true and false of value of of callback function
// we can use to filter ages of users or get values based on lenths.
let numbs = [1,2,3,4,5,6,7,8]

function isEven(element) {
    return element % 2 === 0;
}
evenNumbs = numbs.filter(isEven)
console.log(evenNumbs)



// .reduce() : it accepts callback function
// after perfroming oprations getting single value as output
let prices = [5, 10, 15, 20, 25, 30]

function price_sum(accumulator, element) {
    return accumulator + element
}
function get_max(accumulator, element) {
    return Math.max(accumulator, element)
}

const total = prices.reduce(price_sum);
console.log(total)
const max_val = prices.reduce(get_max);
console.log(max_val)




let p1 = {
    firstName: "jaimin",
    lastName: "patel",
    age: 24,
    job: "software developer"
}

console.log("++++ foreach for objects ++++")
Object.keys(p1).forEach(key => {
    console.log(`${key}: ${p1[key]}`)
})
Object.entries(p1).forEach(entry => {
    // const [key, value] = entry;
    console.log(entry);
  });