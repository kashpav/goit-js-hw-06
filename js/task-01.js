const itemEl = document.querySelectorAll(".item");

const numbersItem = itemEl.length;

const listItems = document.querySelector("#categories");

const firstItem = listItems.firstElementChild;

const lastItem = listItems.lastElementChild;

const secondItem = lastItem.previousElementSibling;

const firstCategory = firstItem.firstElementChild;

const secondCategory = secondItem.firstElementChild;

const lastcategory = lastItem.firstElementChild;

const itemsFirstCategory = firstItem.querySelectorAll("li");

const itemsSecondCategory = secondItem.querySelectorAll("li");

const itemsLastCategory = lastItem.querySelectorAll("li");

console.log(`Number of categories:`, numbersItem);
console.log("");
console.log("Category:", firstCategory.textContent);
console.log("Elements:", itemsFirstCategory.length);
console.log("");
console.log("Category:", secondCategory.textContent);
console.log("Elements:", itemsSecondCategory.length);
console.log("");
console.log("Category:", lastcategory.textContent);
console.log("Elements:", itemsLastCategory.length);
