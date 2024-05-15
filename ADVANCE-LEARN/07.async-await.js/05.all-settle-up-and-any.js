const promiseOne = new Promise((resolve, reject) =>
  setTimeout(() => resolve("one"), 3000)
);

const promiseTwo = new Promise((resolve, reject) =>
  setTimeout(() => reject("two"), 3000)
);

const promiseThree = new Promise((resolve, reject) =>
  setTimeout(() => resolve("three"), 4000)
);


async function promiseAll() {
    const p = await Promise.all([promiseOne, promiseTwo])
        .then(data => console.log(data))
        .catch( err => console.log("error:",err))

    return p
}




async function promiseAllSettled() {
    const p = await Promise.allSettled([promiseOne, promiseTwo])
        .then(console.log)
        .catch( err => console.log(err))
    return p
}


async function promiseAny() {
    const p = await Promise.any([promiseOne, promiseThree]) //.catch( err => console.log(err))
    console.log(p)
        // .then(console.log)
    return p
}


// promiseAll()
// promiseAllSettled()
// promiseAny() // giving an error.