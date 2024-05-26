function multiply(a, b){
    return a*b
}

// console.log(multiply(5, 10))

let multiplyByTwo = multiply.bind(this, 2)  // multiply(2, ?) :- this will bind function like this 
let multiplyByTen = multiply.bind(this, 10)  // multiply(10, ?) :- this will bind function like this 

console.log("6 multiplyByTwo : ", multiplyByTwo(6))
console.log("6 multiplyByTen : ", multiplyByTen(6))