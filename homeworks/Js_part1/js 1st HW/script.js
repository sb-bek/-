
let notification1 = alert("Здравствуйте");
let clientText2 = prompt("как вас завуд?");
let clientchoose = confirm( clientText2 + " вы должны выводить дату рождения");
let clientText1 = prompt( clientText2 + " Когда вы родились?");

let clientText = 2022 - clientText1;

console.log(notification1);


console.log(clientchoose);
console.log(clientText2);
console.log(clientText);



let clientText3= clientText1
if (clientText < 0)  {console.log(clientText3);} /*    после "Bы выводили год который еще не наступил" как повтарит за ново от  " Вы должны выводить дату рождения"*/


if (clientText < 0) { let notification2 = alert( clientText2 + "  вы выводили год который еще не наступил "); console.log(notification2);}
   else if (clientText > 0 && clientText < 30) { let notification = alert(clientText2 + " вы молодой человек"); console.log(notification);}
  else if (clientText > 30 && clientText < 60) {let notification = alert(clientText2 + " у вас кризис среднего возраста"); console.log(notification);}
  else if (clientText > 60 ) {let notification = alert( clientText2 + " вам советую посетить доктора"); console.log(notification);} 
  /* проблема : если  возраст не указывая нажимаем  на кнопку " OK" выходит  все равно " вам советую посетить доктора"*/

