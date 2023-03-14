/* 
Задача 5

Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

Сделайте два решения: с использованием цикла и через рекурсию.
*/

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

// 1) через цикл

function printReverseList(list) {
  // необходимо создать массив значений,
  let arr = [];
  let tmp = list;

  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }

  // теперь проходим по массиву в обратном порядке
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

printReverseList(list);


// 2) через рекурсию

function printReverseListRec(list) {
  // обратный порядок действий
  if (list.next) {
    printReverseListRec(list.next);
  }
  
  console.log(list.value);
}

printReverseListRec(list);
