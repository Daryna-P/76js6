const categoryArrayEl = document.querySelectorAll(`.item`);
console.log(`The number of categories is ${categoryArrayEl.length}`);
categoryArrayEl.forEach(category => {
    console.log(`Category ${category.querySelector(`h2`).textContent} contains ${category.querySelectorAll(`li`).length} items`)
})