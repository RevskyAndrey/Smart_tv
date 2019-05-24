'use strict';
document.addEventListener('DOMContentLoaded', function () {

    // function timePrint() {
    //     var Data = new Date();
    //     var Hour = Data.getHours();
    //     var Minutes = Data.getMinutes();
    //     var Seconds = Data.getSeconds();
    //
    //     Minutes = correctTime(Minutes);
    //     Seconds = correctTime(Seconds);
    //     // Вывод
    //     // document.write(Hour+":"+Minutes+":"+Seconds);
    //     document.getElementById("clock").innerHTML = Hour + ":" + Minutes + ":" + Seconds;
    //
    //     var t = setInterval(timePrint, 1000);
    // };

    function correctTime(i) {
        var i;
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }


//     function dataPrint() {
//         Data = new Date();
//         Year = Data.getFullYear();
//         Month = Data.getMonth();
//         Day = Data.getDate();
//
// // Преобразуем месяца
//         switch (Month) {
//             case 0:
//                 fMonth = "января";
//                 break;
//             case 1:
//                 fMonth = "февраля";
//                 break;
//             case 2:
//                 fMonth = "марта";
//                 break;
//             case 3:
//                 fMonth = "апреля";
//                 break;
//             case 4:
//                 fMonth = "мая";
//                 break;
//             case 5:
//                 fMonth = "июня";
//                 break;
//             case 6:
//                 fMonth = "июля";
//                 break;
//             case 7:
//                 fMonth = "августа";
//                 break;
//             case 8:
//                 fMonth = "сентября";
//                 break;
//             case 9:
//                 fMonth = "октября";
//                 break;
//             case 10:
//                 fMonth = "ноября";
//                 break;
//             case 11:
//                 fMonth = "декабря";
//                 break;
//         }
//
// // Вывод
// //document.write(Day+" "+fMonth+" "+Year+" г.");
//
//         document.getElementById("date").innerHTML = Day + " " + fMonth + " " + Year + " г.";
//     };


});


