const array = [1, 2, 3, 4, 5]

for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}

array.forEach(item => {
    console.log(item);
});


for (const item of array) {
    // good to use with array but can't use with objects
    console.log(item);
}

    
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
    // we can use it with Array but best to use with objects
    console.log(key, obj[key]);
}


// Array.from(anyObj)  // use to conver object or any other datatypes into array so we can perform array methods on that