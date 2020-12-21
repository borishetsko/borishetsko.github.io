let Eldays = document.getElementById('days');
let Elhours = document.getElementById('hours');
let Elminutes = document.getElementById('minutes');
let Elseconds = document.getElementById('seconds');

function count () {
    let newYearDate = new Date(2021,0,1,0,0,0);
    let currentDate = new Date();

    let days = Math.floor((newYearDate - currentDate) / (1000 * 60 * 60 * 24));
    let hours = Math.floor((newYearDate - currentDate) / (1000 * 60 * 60) % 24);
    let minutes = Math.floor((newYearDate - currentDate) / (1000 * 60) % 60);
    let seconds = Math.floor(((newYearDate - currentDate) / 1000) % 60);
    
    Eldays.innerHTML = days;
    Elhours.innerHTML = changeTime(hours);
    Elminutes.innerHTML = changeTime(minutes);
    Elseconds.innerHTML = changeTime(seconds);
}

function changeTime (time) {
    return time < 10 ? (`0${time}`) : time;
}

count();
setInterval(count,1000);