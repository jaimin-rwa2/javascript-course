const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};


// use of for in for objects.
for (let x in person) {
    console.log(`${x} : ${person[x]}`)
}

// delete key value pair in object
delete person.age;


// object inside object
const myObj = {
    name: "John",
    age: 30,
    cars: [
        { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
        { name: "BMW", models: ["320", "X3", "X5"] },
        { name: "Fiat", models: ["500", "Panda"] }
    ]
}


// i have used 
let x;
for (let car of myObj.cars) {
    x += "<h2>" + car.name + "</h2>";
    for (let model of car.models) {
        x += model + "<br>";
    }
}

document.getElementById("demo").innerHTML = x;
