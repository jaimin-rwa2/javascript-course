function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;  // not working find
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`
    document.getElementById('clock').textContent = timeString;
}

updateClock()
setInterval(updateClock, 1000);


const display = document.getElementById("display")
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

document.getElementById("startBtn").addEventListener('click', function(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10)
        isRunning = true;
    }
})

document.getElementById("stopBtn").addEventListener('click', function(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
})

document.getElementById("resetBtn").addEventListener('click', function(){
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00"
})

function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60)).toString().padStart(2, 0);
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60).toString().padStart(2, 0);
    let seconds = Math.floor(elapsedTime / 1000 % 60).toString().padStart(2, 0);
    let milliseconds = Math.floor(elapsedTime % 1000 /10).toString().padStart(2, 0);

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`
}