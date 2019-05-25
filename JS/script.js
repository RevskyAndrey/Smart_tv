'use strict';
document.addEventListener('DOMContentLoaded', function () {

    function timePrint() {
        let Data = new Date();
        let Hour = Data.getHours();
        let Minutes = Data.getMinutes();
        let Seconds = Data.getSeconds();
        let Year = Data.getFullYear();
        let Month = Data.getMonth();
        let Day = Data.getDate();

        Minutes = correctTime(Minutes);
        Seconds = correctTime(Seconds);
        Month = switchMonth(Month);

        document.getElementById("clock").innerHTML = Hour + ":" + Minutes + ":" + Seconds;
        document.getElementById("date").innerHTML = Day + " " + Month + " " + Year + " г.";
        let t = setInterval(timePrint, 1000);
    }


    function correctTime(i) {
        var i;
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }


    function switchMonth(Month) {
        switch (Month) {
            case 0:
                Month = "января";
                break;
            case 1:
                Month = "февраля";
                break;
            case 2:
                Month = "марта";
                break;
            case 3:
                Month = "апреля";
                break;
            case 4:
                Month = "мая";
                break;
            case 5:
                Month = "июня";
                break;
            case 6:
                Month = "июля";
                break;
            case 7:
                Month = "августа";
                break;
            case 8:
                Month = "сентября";
                break;
            case 9:
                Month = "октября";
                break;
            case 10:
                Month = "ноября";
                break;
            case 11:
                Month = "декабря";
                break;
        }
        return Month;
    }

    timePrint()
})
;


