 let numbers = [1, 5, 4, 10, 0, 3];

// Задание 1
for (let i = 0; i <= numbers.length; i ++) {
    console.log(numbers[i]);
    if (numbers[i] === 10) {   
        break;
    }   
}

// Задание 2
console.log(numbers.indexOf(4));

// Задание 3
const arr = [1, 3, 5, 10, 20];
console.log(arr.join(' '));

// Задание 4
let newArray = [];
//let m = 1
for (let j = 0; j < 3; j ++){
    newArray[j] = [];

    for(let k = 0; k < 3; k ++){
       // newArray[j].push(m);
        newArray[j].push(1);
       // m ++;
    }
}
console.log(newArray);

// Задание 5
const arr1 = [1, 1, 1];
arr1.push(2, 2, 2);
console.log(arr1);

// Задание 6
let arr2 = [9, 8, 7, 'a', 6, 5];
arr2.sort().pop();
console.log(arr2);

// Задание 7
let myArr = [9, 8, 7, 6, 5];

let yourNumber = prompt('Введите число');
yourNumber = Number(yourNumber);

if (!isNaN(yourNumber) && myArr.includes(yourNumber)) {
    alert('Угадал!')
}
else{
    alert('Не угадал!')
}

// Задание 8
let str = 'abcdef';
console.log(str.split('').reverse().join(''));

// Задание 9
const arr3 = [[1, 2, 3],[4, 5, 6]];
console.log(arr3.flat());

// Задание 10
let arrayNumbers = [3, 5, 7, 1, 2, 4, 9, 10, 6, 8];
for (let i = 0; i < arrayNumbers.length - 1; i ++){
    console.log(arrayNumbers[i] + arrayNumbers[i + 1]);
}

// Задание 11
//let arr = [1, 2, 3, 4, 5];

function arrPawTwo(arr) {
    let res = arr.map(function (elem) {
        return elem ** 2;
    });

    console.log(res);
}
//arrPawTwo(arr);

// Задание 12
let  arr = ['123', 'gdfs', 'hgs', 'yyyyy'];
function getStrArr(array){
   return array.map(el => el.length); 
}
 console.log(getStrArr(arr));

// Задание 13
//let arr4 = [3, 5, -7, 1, 2, -4, 9, -10, 6, -8]
function negativArr(array) {
    return array.filter(el => el < 0)
}
//console.log(negativArr(arr4));

// Задание 14
let arrRand = [];
for (let i = 0; i < 10; i ++) {
    arrRand[i] = Math.floor(Math.random() * 10);
}

console.log(arrRand);
let arrEven = arrRand.filter(el => el % 2 == 0);
console.log(arrEven);

// Задание 15
let arrRand1 = [];
let N = 6;
for (let i = 0; i < N; i ++) {
    arrRand1[i] = Math.floor(Math.random() * 10 + 1);
}

let res = arrRand1.reduce(function(sum, elem) {
	return sum + elem;}, 0);
   
res = res / N;
console.log(res);







