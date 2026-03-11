let count = 0;
let multiplier = 1;
const errormessage = document.getElementById("error");
const powerup = document.getElementById("powerup");
const counter = document.getElementById("counter");
const numberinput = document.getElementById("numberinput");

function powerUp() {
    console.log(`Powered up`);
    if (count >= 500) {
        count -= 500;
        multiplier = 5
        counter.innerHTML = count;
    }else if (count >= 100) {
        count -= 100;
        multiplier = 2;
        counter.innerHTML = count;
        powerup.innerHTML = "Power up <br> 5 Clicks Per Click <br> 500 Clicks Required"
    }
    else{
        errormessage.innerHTML = "You don't have enough clicks!"
    }
}

function pressed() {
    count += multiplier

    counter.innerHTML = count;
    errormessage.innerHTML = "";
}

function submit(){
    counter.innerHTML = count;
    count = Number(numberinput.value);
}