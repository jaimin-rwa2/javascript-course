const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums',
]

// Replace this with async await
// Promise.all(
//     urls.map(url => fetch(url).then(resp => resp.json()))  // in urls.map we are not passing in array.  
// ).then(result => {
//     // log's for only 1st object of response
//         console.log("users :", result[0][0])
//         console.log("posts :", result[1][0])
//         console.log("albums :", result[2][0])
//     }) 
//     .catch(err => console.log(err + 'in API calls'))

const getData = async function() {
    try{
        const [users,  posts, albums] = await Promise.all(
            urls.map(url => fetch(url).then(resp => resp.json()))
        )  // in urls.map we are not passing in array.
        console.log("users :", users[0])
        console.log("posts :", posts[0])
        console.log("albums :", albums[0])
    }catch(error){
        // using try catch only this can be happen
        console.log(error);
    }finally{
        console.log("finaly run always")
    }
}
getData()
