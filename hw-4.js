// Задание 1
for (let i = 0; i < 2; i++) {
    console.log("Привет");
 }

 // Задание 2
 for (let k = 1; k < 6; k++) {
    console.log(k);
 }

  // Задание 3
 for (let j = 7; j < 23; j++) {
    console.log(j);
 }

// Задание 4
// const obj= {
//    Коля : '200',
//    Вася : '300',
//    Петя : '400',
// }
for (let key in obj) {
   console.log(`${key}: — зарплата ${obj[key]} долларов`);
} 

// Задание 5
let n = 1000;
let p = 0;
while (n > 50) {
   n /= 2;
   p++;
}
console.log(`Получилось число ${n}. Число итераций равно ${p}`);

// Задание 6
for (let firstFriday = 2; firstFriday <= 31; firstFriday += 7) {
   console.log(`Сегодня пятница ${firstFriday}-е число. Необходимо подготовить отчет.`);
}