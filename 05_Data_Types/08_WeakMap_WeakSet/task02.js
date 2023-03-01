/* 
Есть массив сообщений такой же, как в задаче 1.

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

Теперь вопрос стоит так: 
какую структуру данных вы бы предложили использовать 
для хранения информации о том, когда сообщение было прочитано?

В предыдущем задании нам нужно было сохранить только факт прочтения «да или нет». 
Теперь же нам нужно сохранить дату, 
и она должна исчезнуть из памяти при удалении «сборщиком мусора» сообщения.

P.S. Даты в JavaScript можно хранить как объекты встроенного класса Date, 
которые мы разберём позднее.

*/

// Очевидно, использовать WeakMap,
// где ключ — сам объект сообщения,
// а значением будет дата.

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

let readMessagesWithDate = new WeakMap();

// добавляем прочтённые сообщения в хранилище
// c отметкой времени
readMessagesWithDate.set(messages[0], new Date());
readMessagesWithDate.set(messages[1], new Date());

// проверка даты прочтения
// если, не прочитано, вернётся undefined
alert(readMessagesWithDate.get(messages[0]));  // отобразится дата
alert(readMessagesWithDate.get(messages[2]));  // undefined
