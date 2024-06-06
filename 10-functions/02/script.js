// Function with four ways
// TNRN, TNRS, TSRN, TSRS



// Recursion 

// function recursiveFunc() {
// if(base_condition) {
//       // stops recursion if condition is met
//     }
//     // else recursion continues
//     recursiveFunc();
//   }


let num = 12345

function countNumSize(num){
    let last = num % 10
    console.log(last + " ")
    num = parseInt(num / 10)
    if(num == 0){
        return 0
    }
    countNumSize(num)
}

countNumSize(12345)



//  nested function

let a = 10
let b = 20
let c = 30

function sum(a) {

    fun = function fun2(b) {
        return a + b;
    }

    return fun;
}


let sumByA = sum(a)
let result1 = sumByA(b)
let result2 = sumByA(c)
console.log(result1);
console.log(result2);