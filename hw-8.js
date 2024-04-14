// Задание 1
//С помощью метода массива sort отсортируйте массив people
// возрастанию возраста и выведите результат в консоль.
const people1 = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];

let newMassive = people1.sort((a, b) =>  a.age - b.age);
console.log(newMassive);

// Задание 2
//Реализуйте функцию filter, кот должна принимать массив
// и функцию-правило (которое возвращает true или false для каждого элемента),
// а возвращать — новый массив, который содержит только те элементы, для которых функция-правило  
// возвращает true
function isPositive(element) {
  return element > 0;
}

function isMale(element) {
  return element.gender === 'male';
}

function filter(arr, funcVar) {
  let array = [];
    for (const element of arr) {
      if (funcVar(element)) {
        array.push(element);
      }  
    }
    return array;
}
  
  console.log(filter([3, -4, 1, 9], isPositive));
  
  const people = [
     {name: 'Глеб', gender: 'male'},
     {name: 'Анна', gender: 'female'},
     {name: 'Олег', gender: 'male'},
     {name: 'Оксана', gender: 'female'}
  ];
  
  console.log(filter(people, isMale));

// Задание 3
let currentDay = new Date();

let id = setInterval(() => {
	console.log(currentDay);
}, 1000 * 3);

setTimeout(() => {
	console.log('30 секунд прошло');
    clearTimeout(id);
}, 1000 * 30 );

// Задание 4
function delayForSecond(callback) {
  setTimeout(() => callback(), 1000);
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
})

// Задание 5
// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк

function delayForSecond(cb) {
  setTimeout(() => {
      console.log('Прошла одна секунда');
      if(cb) {  cb(); }
  }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
  console.log(`Привет, ${name}!`);
}

delayForSecond(() => (sayHi('Глеб')));