// Задание 1
function minNumber(num1, num2) {
    if (num1 > num2) return num2;
    else return num1;
};
//console.log(minNumber(5,9));

//const getMin = (a, b) => a < b ? a : b;

// Задание 2
function numEven(num) {
    if (num % 2 === 0) {console.log('Число четное');}
    else console.log('Число нечетное'); 
}

// Задание 3.1
function powTwo(num) {
    console.log(num ** 2);
}

// Задание 3.2
function powTwo_2(num) {
    return (num ** 2);
}

// Задание 4
function helloFriend() {
    let age = prompt('Сколько вам лет?');
    age = Number(age);

    if (age < 0 || isNaN(age)) {
        alert('Вы ввели неправильное значение');
    }
    else if (age <= 12) {
        alert('Привет, друг!');
    }
    else {
        alert('Добро пожаловать!');
    }
}

// Задание 5
function ifNoNum(num1, num2) {
    if (isNaN(num1) || isNaN(num2)){
        alert ('Одно или оба значения не являются числом');
    }
    else {
        return (num1 * num2);
    }
}

// Задание 6
function testNum() {
    let num = prompt('Введите число');
    num = Number(num);

    if (isNaN(num)) {
        alert('Переданный параметр не является числом');
    }
    else {
        return (num ** 3);
    }
}

// Задание 7
const circle1 = {
    radius: 10,
    getCircleArea: getCircleArea,
    getCirclePerimeter: getCirclePerimeter,
};

const circle2 = {
    radius: 7,
    getCircleArea: getCircleArea,
    getCirclePerimeter: getCirclePerimeter,
};

function getCircleArea () {
    return Math.PI * this.radius ** 2;
}

function getCirclePerimeter() {
    return Math.PI * this.radius * 2;
}

// console.log(circle1.getCircleArea());
// console.log(circle2.getCircleArea());
// console.log(circle1.getCirclePerimeter());
// console.log(circle2.getCirclePerimeter());



