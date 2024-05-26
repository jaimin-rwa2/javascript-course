// var user1 = {name : "nerd", org: "dev"};
// var user2 = {name : "nerd", org: "dev"};
// var eq1 = user1 == user2;
// console.log(eq1); // gives false

// var eq2 = Object.toString(user1) == Object.toString(user2);
// console.log(eq2); // gives True


const number = 100
const string = "Jay"
let obj1 = {
  value: "a"
}
let obj2 = {
  value: "b"
}
let obj3 = obj2;
let arr = [1, 3, 4, 6]

function change(number, string, obj1, obj2, arr) {
    number = number * 10;
    string = "Pete";
    obj1 = obj2;
    obj2.value = "c";
    arr.push(2);
}

change(number, string, obj1, obj2, arr);

//objects and variables are pass by value, but Array are pass by refrance: 
console.log(number); 
console.log(string);
console.log(obj1.value);
console.log(arr);