updateTime = () => {
    var current = new Date();
    var nowHour = numberHour(current.getHours()) + ':' + numberHour(current.getMinutes());
    const hour =  document.querySelector(".time__hour");
    hour.innerHTML = nowHour
}

function numberHour(n){
    if(n < 10){
        n = "0" + n;
    }
    return n;
}

updateTime();
setInterval(updateTime, 10000);