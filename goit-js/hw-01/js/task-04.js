let credits = 23580;
let pricePerDroid = 3000;
let amountOfDroids = prompt('Введите кол-во дроидов');
let totalPrise = 0;
let leftCredits = 0;
// console.log(Number(amountOfDroids))

if (amountOfDroids === null) {
    console.log('Отменено пользователем!');
}

else if (totalPrise = pricePerDroid * amountOfDroids) {
    if (totalPrise > credits) {
        console.log('Недостаточно средств на счету!'); 
    }

    else {
        leftCredits = (credits - totalPrise); 
        console.log(`Вы купили ${amountOfDroids} дроидов, на счету осталось ${leftCredits} 'кредитов.`);
    }
}
