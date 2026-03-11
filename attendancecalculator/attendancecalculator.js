
function calculate(){
    const inputfield = document.getElementById("input")
    const error = document.getElementById("error")
    const resultoutput = document.getElementById("resultoutput")

    error.textContent = ""

    if (inputfield.value === "") {
        error.textContent = "Invalid input, please enter a number!";
        return;
    }

    const holidaydays = 39
    const insetdays = 5
    const bankholidays = 8

    const totalbreakdays = holidaydays + insetdays + bankholidays + 105
    const totalschooldays = 365 - totalbreakdays

    const onepercent = totalschooldays/100

    let attendance = Number(inputfield.value)

    let result;

    if (attendance>100){
        error.textContent = "Invalid input, please select a number under 100!"}
    else if (attendance<=100){
            result = Math.round(totalschooldays-attendance*onepercent)  
            resultoutput.textContent = `${result}`
    }
}

function dyslexiamode(){
    document.body.classList.toggle("dyslexia-mode");
    
}