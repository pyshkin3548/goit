const inputRef = document.querySelector('#name-input');
const nameLabelRef = document.querySelector('h1 > span');

inputRef.addEventListener('input', event => {

    console.log(event);
    nameLabelRef.textContent = event.target.value;

    if (inputRef.value === '') {

        nameLabelRef.textContent = 'незнакомец';
    }

});