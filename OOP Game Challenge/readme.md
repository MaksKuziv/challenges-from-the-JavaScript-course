# OOP Game Challenge

**Instructions:**

- Create a constructor to create a `Player` object with a name
- Створити конструктор для створення об'єкту `Player` з іменем
- Player should have a `name` as well as a `lvl` set to **1** by default and `points` set to **0** by default
- Гравець повинен мати `name`, а також `lvl`, за замовчуванням встановлений на **1**, і `points, за замовчуванням встановлений на **0**.
- Create a method on the prototype called `gainXp` that takes in a number from 1-10 and adds it to the players `points`. If the current `points` are >= 10 then add 1 to the `lvl` and decrement the points by 10.
- Створіть на прототипі метод з назвою `gainXp`, який отримує число від 1 до 10 і додає його до `points` гравців. Якщо поточні `points` >= 10, то додайте 1 до `lvl` і зменшіть очки на 10.
- Create another prototype method called `describe` that displays the players stats (name, lvl, points)
- Створіть ще один прототип методу з назвою `describe`, який відображає статистику гравця (ім'я, рівень, очки)

You should be able to use the Plyer object like this:
Ви повинні вміти використовувати об'єкт Plyer таким чином:

```js
let player1 = new Player('Bob');
let player2 = new Player('Alice');

player1.gainXp(5);
player2.gainXp(7);
player1.gainXp(3);
player2.gainXp(2);
player1.gainXp(8);
player2.gainXp(4);

console.log(player1.describe()); // Bob is level 2 with 6 experience points
console.log(player2.describe()); // Alice is level 2 with 3 experience points
```
