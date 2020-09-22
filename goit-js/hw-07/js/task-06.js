const inputRef = document.querySelector('#validation-input');
const getTotalLenght = inputRef.getAttribute("data-length");
let inTotalLenght = parseInt(getTotalLenght, 10);

inputRef.addEventListener('input', event => {

    event.target.value.length !== inTotalLenght && event.target.value.length !== 0
    inputRef.classList.add("invalid");


    if (event.target.value.length === inTotalLenght) {
        inputRef.classList.replace("invalid", "valid")

    }

    if (event.target.value.length === 0) {
        inputRef.classList.remove("valid");
        inputRef.classList.remove("invalid");
    }


})