/*
Візьміть змінну myString зробіть першу літеру слова великою, 
використовуючи деякі з методів, про які ми говорили в минулому відео. 
Помістіть результат у змінну під назвою myNewString.
*/
// Solution 1
const myString = 'developer';

let capitalizeFirstLetter;
let myNewString;

capitalizeFirstLetter = myString.charAt(0).toUpperCase();

myNewString = `${capitalizeFirstLetter}${myString.slice(1, 9)}`
console.log(myNewString);

// Solution 2
const myNewString2 = myString.charAt(0).toUpperCase() + myString.substring(1);

// Solution 3 (Uses string[0] instead of string.charAt(0))
const myNewString3 = myString[0].toUpperCase() + myString.substring(1);

// Solution 4 (Uses template literal and slice())
const myNewString4 = `${myString[0].toUpperCase()}${myString.slice(1)}`;
console.log(myNewString);