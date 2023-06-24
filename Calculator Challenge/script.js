/*
Створіть функцію під назвою калькулятор, яка приймає три параметри: 
num1, num2 і оператор. Оператором може бути +, -, * або /. 
Функція має повернути результат обчислення. 
Якщо передано щось інше, крім чотирьох операторів, 
функція має повернути повідомлення про помилку.
*/
function calculator(num1, num2, operator) {
    let result;
    switch (operator) {
        case '+': 
            result = num1 + num2;
            break;
        case '-': 
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = ('Error message');
    }
    console.log(result);
    return result;
}
calculator(3, 5, '/');
