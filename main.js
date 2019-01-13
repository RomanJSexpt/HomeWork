"use strict";
var first,
    second,
    number,
    test;

let dice = "";
let total = 0;
let i = 0;

while (i < 15) {
    i++;

    if (i === 8 || i === 13) {
        continue;
    }
    first = Math.floor((Math.random() * 6) + 1);
    second = Math.floor((Math.random() * 6) + 1);


    dice += "Первая кость: " + first + "  Вторая кость: " + second + " ";
    test += "Первая кость: " + first + "  Вторая кость: " + second + "<br>"; // проверка


    if (first === second) {
        dice += "Выпал дубль. Число " + first + ":" + second + "<br>";
        number = first + ":" + second + '<br>'; // проверка
    } else if ((first < 3 && second > 4) || (first > 4 && second < 3)) {
        dice += "Большой разброс между костями. Разница состовляет " + Math.abs(first - second) + "<br>";
    } else {
        dice += "<br>"
    }
    
    total += first + second;
}

(total >= 100) ? dice += "Победа Вы набрали : " + total + " point":
    dice += "Вы Проиграли.Вы Набрали : " + total + " point";

//document.getElementById("result").innerHTML += "Первая кость: " + first + "Вторая кость: " + second + "<br>";
//document.getElementById("result").innerHTML += "Выпал дубль. Число : " + number + "<br>" ;
//document.getElementById("result").innerHTML += "Большой разброс между костями. Разница составляет : "+ Math.abs(first - second) + "<br>"; 
document.getElementById("result").innerHTML = dice;