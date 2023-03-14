/* 

Создайте декоратор spy(func), который должен возвращать обёртку, 
которая сохраняет все вызовы функции в своём свойстве calls.

Каждый вызов должен сохраняться как массив аргументов.

*/

function spy(func) {

  wrapper.calls = [];                 // свойство-массив для хранения аргументов

  function wrapper(...args) {         // обёртка со всеми аргументами

    wrapper.calls.push(args);         // помещаем аргументы в массив

    return func.apply(this, args);    // возвращаем начальную функцию

  }

  return wrapper;

}

function work(a, b) {
  console.log(a + b); // произвольная функция или метод
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  console.log('call:' + args.join()); // "call:1,2", "call:4,5"
}
