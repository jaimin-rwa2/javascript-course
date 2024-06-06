const hon = {
    name: "John Sina",
    age: 50,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ],
    getHtmlOfCars: function () {  
        let html = `<h1>${this.name}<h1>`;
        for(let car of this.cars){
            html = html.concat(`<h2>${car.name.toUpperCase()}<h2>\n`)
            for(let model of car.models){
                html = html.concat(`<li>${model}</li>`)
            }
        }
        html += '<br><br>'
        return html
    }
  }

let honKon = {...hon};  // not work for any function

console.log(honKon);
honKon.name = "honkon kon"
honKon.age = 45


const div = document.getElementById("cars")
div.innerHTML = hon.getHtmlOfCars()
div.innerHTML += honKon.getHtmlOfCars()






