/*  two */
function type_convert(){
    let x = Number("pizza");
    let y = String("pizza");
    let z = Boolean("pizza");

    console.log(x, typeof(x))
    console.log(y, typeof(y))
    console.log(z, typeof(z))
}

/* four */
// string's mathods and slicing
function StringMethodsAndSlicing() {
    let str = "this-is-a-string"
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    console.log(str.charAt(3));
    console.log(str[3]);
    console.log(str.indexOf('i'));
    console.log(str.lastIndexOf('i'));
    console.log(str.length);
    console.log(arr.length);

    newStr =  str.replaceAll("-", " ")
    console.log(newStr);

    console.log( str.slice(0, 7) )
    console.log( arr.slice(-5) )  // it will return -1 to -5, not just only -5
}


function forLoops() {
    let fruits = ["apple", "orange", "banana", "coconut"]

    for (let i = 0; i < fruits.length; i++) {
        console.log(`${i} - ${fruits[i]}`)
    }

    for(let fruit of fruits){
        console.log(fruit)
    }

    // array.foreach() : also this kind of loop in call back
}


function spreadOperator() {
    let myStr = "Jaimin B Patel"
    myArr = [...myStr]
    console.log(myArr)
    myStr = myArr.join("-")
    console.log(myStr)

    let fruits = ["apple", "orange", "banana", "coconut"]
    let vegetables = ["carrots", "celery", "potatoes", "tomato"]

    let foods = [...fruits, ...vegetables, "milk"]

    console.log(foods)
}

/* Rest Parameters */
function restParameters(...foods){ // ...foods it will convert every thing in array
    console.log(foods)
    return foods
}
const restParams = restParameters("apple", "orange", "carrots", "celery")

function sum(...nums){
    let total = 0;
    for(let num of nums){
        total += num
    }
    return total
}

function average(...nums){
    let avrage = sum(...nums) / nums.length
    return avrage
}


function destructuring(){
    // arrays 
    const colors = ["red", "green", "blue", "black", "white"];

    [colors[0], colors[4]] = [colors[4], colors[0]];

    console.log(colors);

    const [firstColor, secondColor, thirdColor, ...otherColors] = colors;  // ...otherColors this will accept other all as other color

    console.log(firstColor);
    console.log(secondColor);
    console.log(thirdColor);
    console.log(otherColors);

    // with objects
    let p1 = {
        firstName: "jaimin",
        lastName: "patel",
        age: 24,
        job: "software developer"
    }
    let p2 = {
        firstName: "gunjan",
        lastName: "patel",
        age: 23,
    }

    const {firstName, lastName, age, job="unemployed"} = p2; // same thing can be dose in function also

    console.log(firstName);
    console.log(lastName);
    console.log(age);
    console.log(job);
}


function learnTime(){
    year = 2024
    month = 3
    date = 21
    hour = 4
    minute = 10
    second = 45
    ms = 70
    const myDate = new Date(year, month, date)  // Date("2024-03-21") : this way is reliable way
    // const dt = new Date() // to get currunt date time
    console.log(myDate)      // we have get and set for every below fuctions
    console.log(myDate.getFullYear())  // setFullYear()
    console.log(myDate.getMonth())     // setMonth()
    console.log(myDate.getDate())
    // console.log(myDate.getHours())
    // console.log(myDate.getMinutes())
    // console.log(myDate.getSeconds())
    // console.log(myDate.getMilliseconds())
    
    console.log()
    console.log(myDate.getDay())
}

learnTime()