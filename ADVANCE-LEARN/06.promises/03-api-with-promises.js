/* API call */
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums',
]

Promise.all(
    urls.map(url => fetch(url).then(resp => resp.json()))  // in urls.map we are not passing in array.  
).then(result => {
    // log's for only 1st object of response
    console.log("users :", result[0][0])
    console.log("posts :", result[1][0])
    console.log("albums :", result[2][0])
    }) 
    .catch(err => console.log(err + 'in API calls'))
    .finally( () => console.log("finaly run always"))  