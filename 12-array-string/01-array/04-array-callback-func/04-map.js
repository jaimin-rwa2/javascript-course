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
const result2 = arrOfObj.map( (obj) => {    // we have something call flatMap   
    return obj.name
})

console.log(result2)


// it return new array