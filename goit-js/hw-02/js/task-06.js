
const numbers = [];
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

    numbers.push(userInput);
    console.log(numbers);
    
    
} while (true)

for (const number of numbers) {
    total += number;  
}

console.log((`Общая сумма чисел равна ${total}`) )

