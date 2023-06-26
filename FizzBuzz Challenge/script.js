/*
Інструкції:

Роздрукувати/записати числа від 1 до 100
Для числа, кратного трьом, надрукуйте "Fizz" замість числа
Для числа, кратного п'яти, надрукуйте "Buzz"
Для чисел, кратних трьом і п'яти, надрукуйте "FizzBuzz".
*/
for(let i = 1; i <= 100; i++){
    if(i % 15 == 0) {
        console.log('FizzBuz');
    } else if(i % 3 === 0){
        console.log('Fizz');
    } else if( i % 5  === 0){
        console.log('Buzz');
    } else{
        console.log(`Number ${i}`);
    }
}