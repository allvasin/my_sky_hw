function seasonYear() {

    let monthNumber = prompt('Введите номер месяца');
   
    switch (monthNumber) {
        case '12':
        case '1':
        case '2': alert('Зима');
            break;
        case '3':
        case '4':
        case '5': alert('Весна');
            break;
        case '6':
        case '7':
        case '8': alert('Лето');
            break;
        case '9':
        case '10':
        case '11': alert('Осень');
            break;
        default:
            alert('Вы ввели что-то не то');
    }
}

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

