/* 
Написати ф-цію congratsIfMoreThan100(), яка приймає масив даних(підписників)
і виводить на екран за допомогою ф-цію alert() привітання, якщо у вас більше 100 підписників
*/

function congratsIfMoreThan100(arr) {
    if(arr.length > 100) {
        alert('У вас більше 100 підписників, вітаю Вас!')
    } else {
        alert('Вам ще рости й рости в медіа-індустрії')
    }
}

congratsIfMoreThan100([1, 2, 3, 4, 5,]);