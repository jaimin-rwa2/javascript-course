// Variables 
let a = 12
let b = a
b = 10
console.log(a)
console.log(b)

// Arrays 
var arr1 = [1, 2, 3, 4]
var arr2 = [].concat(arr1)
arr2.push(5)

console.log(arr1)
console.log(arr2)


// Objects
var obj1 = {
    name: 'jaimin',
    age: 24,
    deep_love: {
        name: 'gunjan',
        age: 23,
    }
}

var obj2 = JSON.parse(JSON.stringify(obj1)) // {...obj1}  //Object.assign({}, obj1)  :- this 2 dose not make inner objects copy.
obj2.name = 'gunjan';
obj2.age = 23;
obj2.deep_love.name = 'jaimin';
obj2.deep_love.age = 24;

console.log(obj1)
console.log(obj2)



// Array of object
var objx = {
    name: 'jaimin',
    age: 24,
}
var objy = {
    name: 'gunjan',
    age: 23,
}

let arrayOfObj = [objx, objy]
let arrayOfObj2 = {...arrayOfObj}  // for this it works

arrayOfObj2[2] = {
    name: 'shivam',
    age: 19,
}

console.log(arrayOfObj)
console.log(arrayOfObj2)