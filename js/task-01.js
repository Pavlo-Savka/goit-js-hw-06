const items = document.querySelectorAll('#categories>li');
const itemCount = items.length;
console.log('Number of categories: ' + itemCount);
items.forEach((item) => {
    console.log('');
    console.log('Category: ' + item.firstElementChild.textContent);
    console.log('Elements: ' + item.lastElementChild.children.length);
});

