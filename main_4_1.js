(function run() { //самозапускающаяся 
    'use strict'
    let string = "";
    let totalSum = 0;
    let = first, second;

    function getRndNumber() {
        Math.floor((Math.random() * 6) + 1); // ф-ция рандомных чисел
    }

    function setResult(result) { // склеивает строки в одну.
        string += result;
    }

    function isNumbersEqual(first, second) { // записывает если есть дубли.
        if (first === second) {
            setResult("Выпал дубль. Число " + first + ":" + second + "<br>")
        }
    }

    function isBigDifference(first, second) { // приклеивает разницу к 
        if ((first < 3 && second > 4) || (first > 4 && second < 3)) {
            setResult("Большой разброс между костями. Разница состовляет " + Math.abs(first - second) + "<br>")
        }
    }


    function total(first, second) {
        totalSum += first + second;
    }

    function printResult(string) {
        document.getElementById("result").innerHTML = string;
    }



    for (var i = 0; i < 15; i++) {
        if (i === 8 || i === 13) {
            continue;
        }

        first = getRndNumber();
        second = getRndNumber();

        setResult("Первая кость: " + first + "  Вторая кость: " + second + "<br>")

        isNumbersEqual(first, second)
        isBigDifference(first, second)

        total(first, second)
    }

    (totalSum > 100) ? setResult("Победа Вы набрали : " + totalSum + " point"): setResult("Вы Проиграли.Вы Набрали : " + total + " point")

printResult(string)
})()