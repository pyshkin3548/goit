let credits = 23580;
const pricePerDroid = 3000;
const amountOfDroids = prompt('Введите кол-во дроидов');
let totalPrise = 0;
// let leftCredits = 0;

if (amountOfDroids === null) {
    console.log('Отменено пользователем!');
}

else {totalPrise = pricePerDroid * amountOfDroids} 

    if (totalPrise > credits) {
        console.log('Недостаточно средств на счету!'); 
    }

    else {
        credits -= totalPrise; 
        console.log(`Вы купили ${amountOfDroids} дроидов, на счету осталось ${credits} 'кредитов.`);
}

