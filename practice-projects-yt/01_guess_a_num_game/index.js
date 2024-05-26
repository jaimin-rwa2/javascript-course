document.getElementById("submit3").onclick = function(){
    min = 1;
    max = 10;
    attempts = 0
    random_num = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(random_num)
    let running_status = true;
    let guess = window.prompt("guess the number between 1 - 10 ");
    p2Tag = document.getElementById("myp2")
    while (running_status) {
        if(running_status==false){
            break;
        }
        if(guess=="exit"){
            p2Tag.innerText = `selected random number was ${random_num}`;
            break;
        }
        guess = Number(guess);
        if(isNaN(guess)){
            guess = window.prompt("please enter valid number.");
        }else if(!(min <= guess ) || !(guess <= max)){
            guess = window.prompt(`guess shoulde in between ${min} - ${max}`);
        }else if(guess < random_num){
            min = guess+1
            if(min == max){
                running_status = false;
                p2Tag.innerText = `you faild, Number is ${random_num}`;
                break;
            }
            guess = window.prompt(`guess is lowwer please try in between ${min} - ${max}`);
        }else if(guess > random_num){
            max = guess-1
            if(min == max){
                running_status = false;
                p2Tag.innerText = `you faild, Number is ${random_num}`;
                break;
            }
            guess = window.prompt(`guess is greater please try in between ${min} - ${max}`);
        }else{
            running_status = false;
            p2Tag.innerText = `you got the right guess ${random_num}`;
        }
        attempts += 1
    }
}
