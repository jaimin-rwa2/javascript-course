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
        id: 4,
        name: "six"
    },

]

const find = 4
const result2 = arrOfObj.findIndex( (obj) => {  // arrOfObj.findLastIndex( callbackfunc(data, index, array) )
    return obj.id == find
})

console.log(result2)
console.log(arrOfObj[result2])
console.log(arrOfObj[result2].name)

// it will return 1st match