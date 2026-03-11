
let clicks = 0
function cookieclick(){
    let sound = new Audio("/cookieclicker/audio/clicksoundeffect.mp3");
    const clickcount = document.getElementById("clickcount")
    clicks = clicks + 5
    clickcount.textContent = clicks
    sound.play()
}