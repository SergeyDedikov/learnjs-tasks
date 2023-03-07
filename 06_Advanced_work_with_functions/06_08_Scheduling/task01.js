/* 
Напишите функцию printNumbers(from, to), 
которая выводит число каждую секунду, 
начиная от from и заканчивая to.

Сделайте два варианта решения.

Используя setInterval.
Используя рекурсивный setTimeout.

*/


// 1) setInterval

function printNumbersI(from, to) {

  let number = from;

  function tick() {

    console.log(number);

    if (number == to) {
      clearInterval(timerId); // по завершении очистим интервал
    }

    number++;
  }

  tick();

  let timerId = setInterval(tick, 1000);

}

// printNumbersI(3, 10);


// 2) рекурсивный setTimeout

function printNumbersT(from, to) {

  let number = from;

  function tick() {

    console.log(number);

    if (number < to) {

      setTimeout(tick, 1000);

    }

    number++;

  }

  setTimeout(tick, 1000);

}

printNumbersT(4, 11);
