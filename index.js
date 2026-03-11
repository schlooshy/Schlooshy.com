
function checkcode(){
    const input = document.getElementById("codeinput").value.trim();
    const error = document.getElementById("error");

    const introductioncode = "1";
    const briancode = "0302";
    const sixthreefoureight = "6348";
    const att = "999";
    const clicker = "3004";
    const threefoursixseveneight = "67";
    const cookieclicker = "2";

    if (input === introductioncode) {

        window.location.href = "/introductionpage/introduction.html";
    } 
    else if (input === briancode){
        window.location.href = "/brianpage/brian.html";
    }
    else if (input===sixthreefoureight){
        console.log("You found the secret code!")
    }
    else if (input===att){
        window.location.href = "/attendancecalculator/attendancecalculator.html"
    }
    else if (input===clicker){
        window.location.href = "/cookieclicker/cookieclicker.html"
    }
    else if (input===threefoursixseveneight){
        window.location.href = "/cityboi/cityboi.html"
    }
    else if (input===cookieclicker){
        window.location.href = 
    }
    else{ 
        error.textContent = "Invalid Input!"}
}

function dyslexiamode(){
    document.body.classList.toggle("dyslexia-mode");
}