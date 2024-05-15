const arrOfObj = [
    {
        id: 1,
        name: "one"
    },
    {
        id: 2,
        name: "two"
    },
    {
        id: 3,
        name: "three"
    },
    {
        id: 4,
        name: "four"
    },
    {
        id: 5,
        name: "five"
    },
    {
        id: 6,
        name: "six"
    },

]

const find = 4
const result2 = arrOfObj.filter( (obj) => {
    return obj.id == find
})

console.log(result2)
console.log(result2[0].name)

// it return only array of object's with condition has mat