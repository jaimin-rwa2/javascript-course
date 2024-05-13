function funcName(parameterss) {
    return 0
}

let funcWithVariable = function(parameterss) {
    return 0
}

let funcWithArrow = (parameterss) => {
    return 0
}

let myObj = {
    name: "jaimin",
    func: function (params) {
        console.log("this is first way")
    },
    func1(){
        console.log(this.name)
    },
    fucn2: ()=>{
        console.log("affrow function in obj")
    }
}