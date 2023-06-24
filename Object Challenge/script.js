// Step 1
/*
Створіть масив об’єктів під назвою бібліотека. 
Додайте 3 об’єкти з властивостями назва, автор, статус. 
Заголовок і автор мають бути рядками (будь-яке значення, яке ви хочете), 
а статус має бути іншим об’єктом із властивостями own, reading і read. 
Усі вони мають бути логічними значеннями. 
Для всіх статусів встановіть для свого статусу значення true, 
а для читання та читання – значення false.
*/
const library = [
    {
     title: 'ІТ-Цунамі. Як вижити в третій хвилі інтернету',
     author: 'Стів Кейс',
     status: {
         own: true,
         reading: false,
         read: false,
     }
    },
    {
     title: 'Відьмак',
     author: 'Анджей Сапковський',
     status: {
         own: true,
         reading: false,
         read: false,
     }
    },
    {
     title: 'Хоббіт',
     author: 'Джон Толкін',
     status: {
         own: true,
         reading: false,
         read: false,
     }
    }
 ]
 
 // Step 2
 // Встановіть значення зчитування для всіх із них у значення true. 
 // Не редагуйте початковий об'єкт. Встановіть значення за допомогою крапкової нотації.
 library[0].status.read = true;
 library[1].status.read = true;
 library[2].status.read = true;
 
 console.log(library);
 
 // Step 3
 // Деструктуруйте назву першої книги та перейменуйте змінну на firstBook
 const { title: firstBook } = library[0];
 
 console.log(firstBook);
 
 // Step 4
 // Перетворіть об’єкт бібліотеки на рядок JSON
 const libraryJSON = JSON.stringify(library);
 
 console.log(libraryJSON);