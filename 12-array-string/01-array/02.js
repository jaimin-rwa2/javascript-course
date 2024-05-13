
let myGirls = ["Cecilie", "Lone"];
let myBoys = ["Emil", "Tobias", "Linus"];
let others = ["Sital", "Mittal"]

let allStudents = myGirls.concat(myBoys, others);   // we can concat more ther one array at time
                                                    // myGirls + myBoys + others  : this will convert in string             

allStudents = allStudents.concat("Mayank"); // we can concat with indivisuls

console.log(allStudents);



const mdArr = [[1,2],[3,4],[5,6]];  // this is how multi dymention  array 
const flatArr = mdArr.flat();
console.log(flatArr);