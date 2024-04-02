// // Задание 1
// let str = 'js';
// console.log(str.toUpperCase());

// // Задание 2
// //let yourFn = ['кошка', 'кот', 'кора', 'тест', 'КОБРа'];
// function arrFromArr(arrStr, strSm) {
//     let arrStrNew = [];
//     strSm = strSm.toLowerCase();
    
//     for (let p = 0; p < arrStr.length; p++) {
//         if (arrStr[p].toLowerCase().includes(strSm.toLowerCase())) {  
//             arrStrNew.push(arrStr[p]);
//         }
//     }
//     console.log(arrStrNew);
// }
// //arrFromArr(yourFn, 'ко');

// // Задание 3
// let pN = 32.58884;
// console.log(Math.floor(pN));
// console.log(Math.ceil(pN));
// console.log(Math.round(pN));

// // Задание 4
// console.log(Math.max(52, 53, 49, 77, 21, 32));
// console.log(Math.min(52, 53, 49, 77, 21, 32));

// // Задание 5
// console.log(Math.ceil(Math.random() * 10));

// // Задание 6
// function generN(num) {
//     let arrRand = [];
//     for (let i = 0; i < num / 2; i ++) {
//          arrRand.push(Math.round(Math.random() * num));
//     }
//     return arrRand;
// }

// // Задание 7
// function getRandom(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// //console.log(getRandom(10, 12));

// // Задание 8
// let currentDate = new Date();
// console.log(currentDate);

// // Задание 9
// let currentDate1 = new Date();
// let days2 = 73 * 24 * 60 * 60 * 1000; //мс
// let daysAfter = +currentDate1 + days2;
// console.log(new Date(daysAfter));

// // Задание 10
// let myDate = new Date();

// function formatDate(myDate) {
//     const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг",
//     "Пятница", "Суббота"];
//     const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
//     "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
     
//     let fullDate = 'Дата: ' + myDate.getDate() + ' ' + months[myDate.getMonth()] + 
//     ' ' + myDate.getFullYear() + ' - это ' + days[myDate.getDay()] + 
//     ' Время: ' + myDate.getHours() + ':' +  myDate.getMinutes() + ':'+ myDate.getSeconds();
//     console.log(fullDate);
// }

// Задание 11
function guessWord() {
    //Создаем и сортируем массив
    let arrayWords = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];  
     arrayWords = arrayWords.sort(() => Math.random() - 0.5);    
     alert(arrayWords);

     let firstWord = prompt('Какое было первое слово?');
     let lastWord = prompt('Какое было последнее слово?');

     if (firstWord && lastWord) {
        if ((firstWord.toLowerCase() === arrayWords[0].toLowerCase()) && 
        (lastWord.toLowerCase() === arrayWords[arrayWords.length - 1].toLowerCase())) {
           alert('Супер! Угаданы оба слова!');
        }
   
       else if ((firstWord.toLowerCase() === arrayWords[0].toLowerCase()) ||
       (lastWord.toLowerCase() === arrayWords[arrayWords.length - 1].toLowerCase())) {
          alert('Только одно правильно!');
       }
   
       else {
           alert('Увы! Ни одно слово не верно!');
        }
     }
     else {
        alert('Вы не ввели одно или оба слова')
     }
}

//guessWord();




