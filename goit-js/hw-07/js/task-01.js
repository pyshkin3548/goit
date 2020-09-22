let list = document.querySelector('#categories');
let items = document.querySelectorAll('.item')

console.log(`In list is ${items.length} categories`);

items.forEach((node) => {
    let h2 = node.querySelector('h2');
    let li = node.querySelectorAll('li');

    console.log(`Category name: ${h2.textContent}. In list is ${li.length} items`)
}
)