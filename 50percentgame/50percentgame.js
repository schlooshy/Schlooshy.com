function scaleToScreen(){
    const regularWidth = 2560;
    const scale = window.innerWidth / regularWidth;
    document.body.style.zoom = scale;
}

scaleToScreen();
window.addEventListener(`resize`, scaleToScreen)

let balanceDescription = document.getElementById("balance");
let failure = document.getElementById("fail");
let succeed = document.getElementById("success");
// let button = document.getElementById("button");
let successSound = new Audio("/50percentgame/audio/success.wav");
let failSound = new Audio("/50percentgame/audio/fail.wav");
let enemyBalanceDescription = document.getElementById("enemybalance");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let input = document.getElementById("input");
let dyslexiaButton = document.getElementById("dyslexiabutton");

input.addEventListener("input", () =>{
    if (input.value === ""){
        button1.disabled = true
        button2.disabled = true
    } else{
        button1.disabled = false
        button2.disabled = false
    }
})

button1.addEventListener("click", play);
button1.addEventListener("click", () => {
    choice = 1;
    buttonOneNumber = Math.floor(Math.random() * 2);
    buttonTwoNumber = 1 - buttonOneNumber;
});
button1.addEventListener("click", buttons);
button2.addEventListener("click", play);
button2.addEventListener("click", () =>{
    choice = 2;
    buttonOneNumber = Math.floor(Math.random() * 2);
    buttonTwoNumber = 1 - buttonOneNumber
});
button2.addEventListener("click", buttons);


let balance = 100;
let enemyBalance = 100;
balanceDescription.innerHTML = balance;
enemyBalanceDescription.innerHTML = enemyBalance;

function play(){
    balanceDescription.innerHTML = balance;
    enemyBalanceDescription.innerHTML = enemyBalance
    if (balance <= 0){
        failure.innerHTML = "ENEMY WINS! <br>NEGATIVE BALANCE.";
        button1.style.display = "none";
        button2.style.display = "none";
    }
    if (enemyBalance <= 0){
        succeed.innerHTML = "YOU WIN! <br>ENEMY HAS NEGATIVE BALANCE.";
        button1.style.display = "none";
        button2.style.display = "none";
    }

    /*if (enemyNumber === userNumber){
        succeed.innerHTML = `Enemy's number: ${enemyNumber} <br> User's number: ${userNumber} <br> <b><u> Success! </u> </b>`;
        failure.innerHTML = " "
        balance += 20;
        enemyBalance -= 10;
        successSound.play();
    }
    else{
        failure.innerHTML = `Enemy's number: ${enemyNumber} <br> User's number: ${userNumber} <br> <b><u> Failure! </u></b>`;
        succeed.innerHTML = " "
        balance -= 10;
        enemyBalance += 20;
        failSound.play();
    }
    extremeNumber = Math.floor(Math.random() * 100000);
    extremeUserNumber = Math.floor(Math.random() * 100000)

    if (extremeUserNumber === extremeNumber){
        balance -= 1000000
    }
    balanceDescription.innerHTML = balance;
    enemyBalanceDescription.innerHTML = enemyBalance*/

}
function buttons(){
    dyslexiaButton.style.display="none";
    let status = 0
    let bet = Number(input.value);
    console.log(`Bet: ${bet}`)
    if (bet > balance){
        failure.innerHTML = `You don't have enough for this bet!`
    }else if (bet <= balance){
        console.log(`Button One Number: ${buttonOneNumber}`);
        console.log(`Button Two Number: ${buttonTwoNumber}`);
        if (buttonOneNumber === 1 && choice === 1){
            status = 1;
        }else if (buttonOneNumber === 1 && choice === 2){
            status = 2;
        }else if (buttonTwoNumber === 1 && choice === 1){
            status = 2;
        }else if (buttonTwoNumber === 1 && choice === 2){
            status = 1;
        }
        
        if (status === 1){
            console.log(`Success!`)
            failure.innerHTML = ` `;
            succeed.innerHTML = `Correct Button!`;
            successSound.play();
            balance += bet;
            enemyBalance -= bet;
        }else if (status === 2){
            console.log(`Failure!`)
            succeed.innerHTML = ` `;
            failure.innerHTML = `Wrong Button!`;
            failSound.play();
            enemyBalance += bet;
            balance -= bet;
        }else{
            console.log(`Status Error!`);
        }
    }
    play();
}
function dyslexiamode(){
    document.body.classList.toggle("dyslexia-mode");
    
}