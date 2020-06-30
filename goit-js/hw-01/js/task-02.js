const total = 100;
const ordered = 120;

if (ordered > total) {
    console.log('На складе недостаточно твоаров!')
}

if (ordered <= total) {
    console.log('Заказ оформлен, с вами свяжется менеджер')
}