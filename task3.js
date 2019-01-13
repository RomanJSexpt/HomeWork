/*Сократите код используя циклы:

elemResult.innerHTML += 'Число: <b>100</b><br>';
elemResult.innerHTML += 'Число: <b>80</b><br>';
elemResult.innerHTML += 'Число: <b>60</b><br>';
elemResult.innerHTML += 'Число: <b>50</b><br>';
elemResult.innerHTML += 'Число: <b>40</b><br>';
elemResult.innerHTML += 'Число: <b>20</b><br>';
elemResult.innerHTML += 'Число: <b>10</b><br>';
elemResult.innerHTML += 'Число: <b>0</b><br>'; */

var result;
var number = 120;

for (var i = 1; i < 10; i++) {
    result = (number > 70) ? number += -20 : number += -10 ;
    result = "elemResult.innerHTML += 'Число: <b>" + number + "</b><br>'"

    console.log(result)
}