/* 
Посмотрите на код. Какой будет результат у вызова на последней строке?


*/

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();  // ошибка, нет доступа к sayHi
