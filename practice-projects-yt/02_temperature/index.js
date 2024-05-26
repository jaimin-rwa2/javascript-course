const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

textBox.defaultValue = 0;

document.getElementById("btn").onclick = function () {
    temp = Number(textBox.value)
    if(toFahrenheit.checked){
        temp = temp * 9 / 5 + 30
        toFahrenheit.checked = false
        result.textContent = `${temp.toFixed(1)}°F`
    }else if(toCelsius.checked){
        temp = (temp - 32) * ( 5 / 9 )
        toCelsius.checked = false
        result.textContent = `${temp.toFixed(1)}°C`
    }else{
        result.textContent = "Please Select a unit";
    }
}