let userName = prompt("Adınızı giriniz:");
let time;
let clock = document.querySelector("#clock");

function digitalTime() {
    let dateTime = new Date();
    let hour = dateTime.getHours();
    let minute = dateTime.getMinutes();
    let second = dateTime.getSeconds();
    let day = dateTime.getDay();
    if (day == 1)
        day = "Pazartesi";
    else if (day == 2)
        day = "Salı";
    else if (day == 3)
        day = "Çarşamba";
    else if (day == 4)
        day = "Perşembe";
    else if (day == 5)
        day = "Cuma";
    else if (day == 6)
        day = "Cumartesi";
    else if (day == 7)
        day = "Pazar";

    time = ((hour < 10) ? "0" : "") + hour + ":" + ((minute < 10) ? "0" : "") +
        minute + ":" + ((second < 10) ? "0" : "") + second + " " + day.toString();
    clock.innerHTML = `Merhaba ${userName}! Hoşgeldiniz! 
    <br><br>
    <span> ${time} </span> 
    <br><br>
    tarihinde Kodluyoruz Frontend Web Development
    <br>
    Patikası'nın Javascript bölümü 1. Ödevindesiniz.`;
    setTimeout("digitalTime()", 1000);
}