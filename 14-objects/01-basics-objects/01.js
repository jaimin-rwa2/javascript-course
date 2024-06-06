const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    cars: {
        car1:"Ford",
        car2:"BMW",
        car3:"Fiat"
      }
  };
  

// to delete
delete person.age;  // person["age"];


// to access dict inside dict
let userCar = person.cars.car1