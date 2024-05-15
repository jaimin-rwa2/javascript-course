// for arrays
const numArray = [1, 2, 3, 4, 5];
function sum(a, b, c, ...other) {
    console.log("other : ", other) // others accepts array
    return a + b + c
}
const value = sum(...numArray)
console.log(value)


// for objects
const obj = {
    tiget: 23,
    lion: 5,
    monkey: 2,
    hours: 12
}
const {tiget, lion, ...rest} = obj;

function objectSpread(p1, p2, p3) {
    console.log(p1)
    console.log(p2)
    console.log(p3)
}
objectSpread(tiget, lion, rest)
/* output : 
23
5 
{monkey: 2, hours: 12}
// only values will be passed not key
// for ...rest it pass object(key value pair)  
*/
