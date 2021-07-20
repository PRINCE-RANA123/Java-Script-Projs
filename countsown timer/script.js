const newYear = "1 jan 2022";
const daysel = document.getElementById("days");
const hoursel = document.getElementById("hours");
const minsel =document.getElementById("mins");
const secel =document.getElementById("sec");

function countdown() {
    const newYearDate = new Date(newYear);
    const curDate = new Date();

    const totalSec = (newYearDate - curDate) / 1000;

    const min = Math.floor(totalSec / 60) % 60;
    const hrs = Math.floor(totalSec / 3600) % 24;
    const days = Math.floor(totalSec / 3600 / 24) ;
    const sec = Math.floor(totalSec % 60);
    daysel.innerHTML = formatTime(days);
    hoursel.innerHTML = formatTime(hrs);
    minsel.innerHTML = formatTime(min);
    secel.innerHTML = formatTime(sec);
}

function formatTime(time){
    if(time < 10){
        return `0${time}`;
    }
    else{
        return time;
    }
}
countdown();
setInterval(countdown, 1000);

