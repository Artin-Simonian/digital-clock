function date(){
    let dateDisplay = new Date();
    let hours = dateDisplay.getHours();
    let minutes = dateDisplay.getMinutes();
    let seconds = dateDisplay.getSeconds();
    let session = document.getElementById('session');

    if (hours >= 12){
        session.innerHTML = 'PM'
    }
    else{
        session.innerHTML = 'AM'
    }

    if(hours > 12){
        hours = hours -12;
    }

    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
}

setInterval(date, 1000);
