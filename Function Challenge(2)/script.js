/* 
Створити ф-цію під назвою getCelsius() який приймає температуру у градусах
Фаренгейта як агрумент і повертає температуру в градусах Цельсія. 
*/

function getCelsius (temptInFahrenheit) {
    const temptInCelsius = (temptInFahrenheit - 32) * 5 / 9;
    return temptInCelsius;
}

console.log(`The temperature is ${getCelsius(32)} \xB0C`);

const getCelsius2 = (F) => ((F - 32) * 5 / 9);

console.log(`The temperature is ${getCelsius2(50)} \xB0C`);
/* 
Створити ф-цію під назвою minMax() яка приймає масив чисел і повертає
об'єкт із мінімальним і максимальним числом в масиві.
*/

function minMax(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return {
        min,
        max
    }
}
console.log(minMax([1, 2, 3, 4, 5]));

/* 
Створіть IIFE(Immediately Function Expression), який приймає
довжину та ширину прямокутника, виводить його на консоль у повідомленні,
щойно сторінка завантажується.
*/
((length, width) => {

    const area = length * width;

    const output = (`The area of a rectangle with a length of ${length} and a width of ${width} is ${area}`);

    console.log(output);
})(10, 5);