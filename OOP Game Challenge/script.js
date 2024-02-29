// Клас Player має конструктор, який приймає аргумент name 
// і встановлює властивості name, lvl, points зі значенням 1 і 0 відповідно
function Player(name) {
    this.name = name;
    this.lvl = 1;
    this.points = 0;
}
// Метод gainXp(xp) додає отримані очки досвіду xp до властивості points. 
// Якщо сума очок досвіду перевищує або дорівнює 10, рівень гравця збільшується на одиницю, 
// а 10 очків віднімаються від points.
Player.prototype.gainXp = function(xp) {
    this.points += xp;

    if (this.points >= 10) {
        this.lvl++;
        this.points -= 10;
    }
}
// Метод describe() повертає рядок, що описує гравця з його ім'ям, рівнем і кількістю очків досвіду.
Player.prototype.describe = function () {
    return `${this.name} is level ${this.lvl} with ${this.points} experience points`;
}

// Player.prototype.describe = function() {
//     console.log(`Ім'я: ${this.name}`);
//     console.log(`Рівень: ${this.lvl}`);
//     console.log(`Очки: ${this.points}`);
// };
  

// Створюються два гравці з іменами "Bob" і "Alice" за допомогою конструктора Player.
const player1 = new Player('Bob');
const player2 = new Player('Alice');

// Для кожного гравця викликаються методи gainXp() з різними значеннями очків досвіду.
player1.gainXp(4);
player2.gainXp(7);
player1.gainXp(5);
player2.gainXp(1);
player1.gainXp(7);
player2.gainXp(9);
player1.gainXp(5);
player2.gainXp(2);

// Виводиться інформація про кожного гравця, використовуючи метод describe().
console.log(player1.describe());
console.log(player2.describe());