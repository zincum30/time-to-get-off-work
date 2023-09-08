function showTime(){
    var date = new Date();
    var h = 18-date.getHours(); // 0 - 23
    var m = 60-date.getMinutes(); // 0 - 59
    var s = 60-date.getSeconds(); // 0 - 59



    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);

}

showTime();
