// data types  : var, let, const 
// - if we will create variable in globle space then we can access it from anywhere.



function printLine() {
    stringNothing = "created using Nothing"
    var stringVar = "created using var"
    let stringLet = "created using let"
    const stringConst = "created using const"
}

if (true) {
    stringNothing = "created using Nothing"
    var stringVar = "created using var"
    let stringLet = "created using let"
    const stringConst = "created using const"
}

try {
    console.log(stringNothing)
    console.log(stringVar)
    console.log(stringLet)
    console.log(stringConst)
} catch (error) {
    console.log("we can not use it out side of function")
}   

try {
    let stringLet = "created using let"
    const stringConst = "created using const"


    stringLet = "updated values of stringLet"
    console.log("updated stringLet :", stringLet)
    
    stringConst = "updated values of stringConst"
    console.log("updated stringConst :", stringConst)

} catch (error) {
    console.log("we can not update const")
}