const fruits = [
    {name: "apple", color: "red", calories: 95},
    {name: "orange", color: "orange", calories: 45},
    {name: "banana", color: "yellow", calories: 105},
    {name: "coconut", color: "white", calories: 159},
    {name: "pineapple", color: "yellow", calories: 45},
];

fruits.push({name: "grapges", color: "green", calories: 92});
// fruits.pop(); // last inserted element

console.log(fruits);
// fruits.splice(1, 2); // 2nd and 3ed elements are removed
// console.log(fruits);


fruits.forEach(fruit => console.log(fruit.name))

console_value = fruits.map(fruit => fruit.name)
console.log(console_value)

console_value = fruits.filter(fruit => ["red", "yellow", "blue"].includes(fruit.color))
console.log(console_value)

high_cal_fruit = fruits.reduce( (max_fruit, currunt_fruit ) => max_fruit.calories > currunt_fruit.calories ? max_fruit : currunt_fruit)
console.log(high_cal_fruit)

// inplace sorting 
// numbers
fruits.sort( (a, b) => a.calories - b.calories)  // acending sorting
console.log(fruits)
fruits.sort( (a, b) => b.calories - a.calories)  // decending sorting
console.log(fruits)

// strings : lexical graficaly
fruits.sort( (a, b) => a.name.localeCompare(b.name))
console.log(fruits)
fruits.sort( (a, b) => b.name.localeCompare(a.name))
console.log(fruits)

// we want to short based on mutliple values
fruits.sort( (a, b) => {
    if(b.calories != a.calories){
        return b.calories - a.calories
    }else{
        b.name - a.name
    }
})  // decending sorting
console.log(fruits)