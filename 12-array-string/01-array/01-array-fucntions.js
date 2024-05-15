const fruits = ["Banana", "Orange", "Apple", "Mango"];


// find element based on index
console.log(fruits.at(2))  // same as fruits[2]
console.log(fruits.at(-1))


// join all elements
console.log(fruits.join("-"))
console.log(fruits.toString()) 


// pop last element
console.log(fruits.pop())


// push element at last
console.log(fruits.push("Strawberry"))


// remove 1st element and shift other 
console.log(fruits.shift())

// insert at 1st index and unshift other 
console.log(fruits.unshift("Lemon"))


// to change element
console.log(fruits[1]="Water Melon")


// to get leanth of array
console.log(fruits.length);


// slice
console.log(fruits.slice(2))
console.log(fruits.slice(1, 3))

// if we want to remvoe elemets from Nth elements
fruits.splice(2, 1) // in placed
fruits.toSpliced(2, 1)  // outplaced

console.log(fruits)


// note : push, pop, shift, unshift, splice and toSpliced are inplaced methods 