// replacing this with promises
// fetch('https://jsonplaceholder.typicode.com/users')  // as we know fetch return's promise
//     .then(response => response.json())
//     .then(result => console.log(result[0]))


async function getUsers(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')  // keep await before Promise
    const data = await response.json()
    console.log(data[0])
}
getUsers()