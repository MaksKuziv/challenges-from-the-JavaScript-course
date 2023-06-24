/*
Інструкції:

Створіть змінну під назвою x, яка є випадковим числом від 1 до 100, 
а також змінну під назвою y, яка є випадковим числом від 1 до 50.

Створіть змінну для суми, різниці, добутку, частки та залишку від x і y. 
Зареєструйте вивід у рядку, який показує два числа x і y разом з оператором і результатом.
*/
const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);

console.log("x: ", x,"y ", y);
const sumOutput = x + y; // Сума
const differenceOutput = x - y; // Різниця
const productOutput = x * y; // Добуток
const qoutientOutput = x / y; // Частка
const rmOutput = x % y; // Остача

console.log(`
Сума: ${sumOutput},
Різниця: ${differenceOutput}, 
Добуток: ${productOutput}, 
Частка: ${qoutientOutput}, 
Остача: ${rmOutput}`);
