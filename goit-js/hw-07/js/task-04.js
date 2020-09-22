const btnIcrementRef = document.querySelector('.js-btn-incr');
const btnDecrementRef = document.querySelector('.js-btn-decr');
const valueRef = document.querySelector('#value')

let counterValue = 0;

const increment = () => {

    counterValue += 1;

    valueRef.textContent = counterValue;

};

const decrement = () => {

    counterValue -= 1;

    valueRef.textContent = counterValue;

}

btnIcrementRef.addEventListener('click', increment)
btnDecrementRef.addEventListener('click', decrement)