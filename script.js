let number = 0
let cron 
let h1 = document.querySelector("h1")

function play(){
    if (cron) return; 
    cron = setInterval (function(){
        number++
        h1.innerHTML = number
    }, 1000)
}

function stop(){
    clearInterval(cron)
    cron = null;
}

function reset() {
    stop();
    number = 0; 
    h1.innerHTML = 0;
}