const fruits = [1, 2, 3, 4, 5];

// inplace algo
fruits.sort();
fruits.reverse();

// not in place
let rFruits = fruits.toReversed()
console.log(rFruits)
let sFruits = fruits.toSorted()
console.log(sFruits)

// console.log(fruits)

const users = [
    {n: 1, id: 1}, {n: 5, id: 2}, {n : 3, id: 3}, {n: 1, id: 4}, {n: 2, id: 5}] ;  // make user data dict default to use 

let sortedUsers = users.toSorted(function(a, b){return a.n - b.n});  // here we can use sort also for in place

console.log(sortedUsers)
console.log(users)


/* to find max min in array using apply */
// Math.min.apply(null, arr);
// Math.max.apply(null, arr);
