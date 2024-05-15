/* basics of promise */
const key = true;   
const promise = new Promise( (resolve, reject) => {
    if(key){
        resolve('problem resolve')
    }else{
        reject('error in problem')
    }
})

promise
    .then(result => result + ' success!')  // result : we are getting it from promise
    .then(result => {
        console.log(result)
        // throw Error("error in .then")
    })
    .catch(err => console.log(err))  // it catch error happend in promises or any .then() methods
    .finally( () => console.log("finaly run always"))
    // allways put .catch() last.
