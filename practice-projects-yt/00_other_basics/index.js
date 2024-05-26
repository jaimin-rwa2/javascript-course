import {PI} from './0_module.js'

/*  one */
// username = window.prompt("what is your username?")  // to get user input in string formate

let username;

document.getElementById("submit1").onclick = function(){
    // method chaing
    username = document.getElementById("myUsername").value.trim();
    username = username.charAt(0).toUpperCase() + username.slice(1).toLowerCase()
    document.getElementById("myH1").innerText = `Hello ${username}`
}


/* three */
let radius;
let circumference;

document.getElementById("submit2").onclick = function(){
    radius = document.getElementById("myRadius").value;
    radius = Number(radius)
    circumference = 2 * PI * radius;
    // circumference = Math.round(circumference, 2) // not working other solution
    document.getElementById("myp1").innerText = `circumference of circule ${circumference.toFixed(2)} cm`
}
