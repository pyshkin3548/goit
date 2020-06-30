const ADMIN_PASSWORD = 'jqueryismyjam';
let message = prompt('Введите пароль');
// message = Number(message);

// console.log(message);
// console.log(ADMIN_PASSWORD === message);

if (message === ADMIN_PASSWORD) {

    console.log('Добро пожаловать!');
}

else if (message === null) {
    console.log('Отменено пользователем!');
}

else {
    console.log('Доступ запрещен, неверный пароль!');
}

alert(message);