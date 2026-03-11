let count = 0;
let multiplier = 1;
const errormessage = document.getElementById("error");

function powerUp() {
    console.log(`Powered up`);
    if (count >= 100) {
        count -= 100;
        multiplier = 2;
        document.getElementById("counter").innerHTML = count;
    }else{
        errormessage.innerHTML = "You don't have enough clicks!"
    }
}

function pressed() {
    count += multiplier

    document.getElementById("counter").innerHTML = count;
    errormessage.innerHTML = "";
}