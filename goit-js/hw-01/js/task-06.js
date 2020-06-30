let total = 0;

do {
    let userInput = prompt('Введите число');

    if (userInput === null) {
        break;
    }
    
    userInput = Number(userInput);

    const notANumber = Number.isNaN(userInput);

    if (notANumber) {
        alert(`Было введено не число, попробуйте еще раз`);
        continue;
    }

    total += userInput;

} while (true) 

alert(`Общая сумма чисел равна ${total}`)
 