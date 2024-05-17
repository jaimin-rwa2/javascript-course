// const arr = [1, 2, 3, 4, 5]
// // const arr = [1, 2] // for one it whould not run


// const result = arr.reduce( (prev, curr) => {   // we have  reduceRight also
//     return prev + curr
// })

// console.log(result)


const arrOfObj = [
    {
        id: 1,
        name: "one",
        age: 22
    },
    {
        id: 2,
        name: "two",
        age: 23
    },
    {
        id: 3,
        name: "three",
        age: 23
    },
    {
        id: 4,
        name: "four",
        age: 24
    },
    {
        id: 5,
        name: "five",
        age: 24
    },
    {
        id: 6,
        name: "six",
        age: 24
    },

]

const result2 = arrOfObj.reduce( (acc, curr) => {
    if(acc[curr.age]){
        acc[curr.age] += 1
    }else{
        acc[curr.age] = 1
    }
    return acc
}, {})  // we can pass default value

console.log(result2)