// // usign this we can make DRY code, 
// // Mainly by passing function inside function
// // Ex : After chacking flag, we will pass diff argument to function based on flag.
// let funVar = function toVariable(){console.log("we can assigne function to variable")}
// funVar() // this will call function

// function fun(){
//     console.log("we can pass function inside function")
// }
// function passFun(fun){
//     fun()
// }
// passFun(fun) // after passing fuction we can call function


// function retFun(){
//     return function (){console.log("we can return function")}
// }
// let retVar = retFun()
// retVar()  // this will call function


// // Higer Order Function : used to wright Dry Code.
// const multiplyBy = (num1) => (num2) => num1*num2
// // const multiply_by = function(num1) { // abow function also we can wright this way also
// //     return function(num2){
// //         return num1*num2
// //     }
// // }

// multiplyByFour = multiplyBy(4)
// console.log(multiplyByFour(6))
// console.log(multiplyByFour(10))
// // console.log(multiply_by(4)(6))



// function a(){
// 	let grandpa = 'grandpa'
//     return function b(){
//         let father = 'father'
//         return function c(){
//             let son = 'son'
//             return `${grandpa} > ${father} > ${son}`
//         }
//     }
// }

// b = a()
// c = b()
// console.log(c())



function BigArray(size) {
    const bigArray = new Array(size).fill(1)  // learn more about array
    return function (index) {
        return bigArray[index]
    } 
}

myArray = BigArray(10)

console.log(myArray(9))





