/* 
Создайте «тормозящий» декоратор throttle(f, ms), 
который возвращает обёртку, 
передавая вызов в f не более одного раза в ms миллисекунд. 
Те вызовы, которые попадают в период «торможения», игнорируются.

Отличие от debounce – если проигнорированный вызов 
является последним во время «задержки», 
то он выполняется в конце.

*/

function throttle(func, ms) {

  let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {

    if (isThrottled) {
      savedArgs = arguments;  // в "режиме задержки" сохраним контекст
      savedThis = this;       // и аргументы
      return;                 // и ничего не делаем
    }

    func.apply(this, arguments);  // выполняем функцию

    isThrottled = true;           // переходим в режим задержки

    setTimeout(function () {

      isThrottled = false;      // по истечении таймаута выходим из режима задержки
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);  // передаём наружу последние данные
        savedArgs = savedThis = null;         // обнуляем контекст и аргументы
      }

    }, ms);
  }

  return wrapper;
}

function f(a) {
  console.log(a)
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано
