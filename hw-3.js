// Задание 1
let password = '22';
let key = prompt("Введите пароль");
if (key === password) {alert('Пароль введен верно')}
else {alert("Пароль введен неправильно")}

// Задание 2
// var 0, 10, −3, 2
let c = 2;
if ((c > 0) && (c < 10)) {alert("Верно")}
else {alert("Неверно")}

// Задание 3
let d = 101;
let e = 11;
let result =  ((d > 100) || (e > 100)) ? 'Верно' : 'Неверно';
alert(result);

// Задание 4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));

// Задание 5
let monthNumber = prompt('Введите номер месяца');
switch (monthNumber) {
    case '12':
    case '1':
    case '2': console.log('Зима');
        break;
    case '3':
    case '4':
    case '5': console.log('Весна');
        break;
    case '6':
    case '7':
    case '8': console.log('Лето');
        break;
    case '9':
    case '10':
    case '11': console.log('Осень');
        break;
    default:
        console.log('Вы ввели что-то не то');
}

// Задание 7
// let number =  Number (prompt('Пожалуйста, введите любое число'));
// alert(number);

// if (number !== NaN) {
//     if (number % 2 === 0) {console.log('Число четное');}
//     else {console.log('Число нечетное');}
// }
// else {console.log('Вы ввели не число');}