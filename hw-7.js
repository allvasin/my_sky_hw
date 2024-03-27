// Задание 1
let str = 'js';
console.log(str.toUpperCase());

// Задание 2
let yourFn = ['кошка', 'кот', 'кора', 'тест', 'КОБРа'];
function arrFromArr(arrStr, strSm) {
    let arrStrNew = [];
    strSm = strSm.toLowerCase();
    
    for (let p = 0; p < arrStr.length; p++) {
        if (arrStr[p].toLowerCase().includes(strSm.toLowerCase())) {  
            arrStrNew.push(arrStr[p]);
        }
    }
    console.log(arrStrNew);
}
arrFromArr(yourFn, 'ко');

// Задание 3
let pN = 32.58884;
console.log(Math.floor(pN));
console.log(Math.ceil(pN));
console.log(Math.round(pN));

// Задание 4
console.log(Math.max(52, 53, 49, 77, 21, 32));
console.log(Math.min(52, 53, 49, 77, 21, 32));

// Задание 5
console.log(Math.ceil(Math.random() * 10));

// Задание 6
let arrRand = [];
function generN(num) {
    for (let i = 0; i < num / 2; i ++) {
         arrRand.push(Math.round(Math.random() * num));
    }
}
//console.log(Math.ceil(Math.random() * 10));
generN(100);
console.log(arrRand);

// Задание 7