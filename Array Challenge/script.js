// Challenge 1:
/* 
Використовуйте деякі з методів масиву, 
щоб змінити наступний масив на = очікуваний результат нижче:
[6, 5, 4, 3, 2, 1, 0];
*/
const arr = [1, 2, 3, 4, 5];

arr.push(6);
arr.unshift(0);
arr.reverse();

console.log(arr);

// Challenge 2:
// Об’єднайте arr1 і arr2 у новий масив arr3 із такими елементами:
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

const arr3 = arr1.splice(0, 4).concat(arr2);

console.log(arr3);

// Solution 2
const arr4 = [...arr1, ...arr2];
arr4.splice(4, 1);

console.log(arr4);