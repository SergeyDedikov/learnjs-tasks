/* 
Задача 4

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
Напишите функцию printList(list), которая выводит элементы списка по одному.

Сделайте два варианта решения: используя цикл и через рекурсию.

Как лучше: с рекурсией или без?
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

function printList(list) {
  let tmp = list;

  while (tmp) {
    console.log(tmp.value);
    tmp = tmp.next;
  }

}

printList(list);


// 2) через рекурсию

function printListRec(list) {

  console.log(list.value);

  if (list.next) {
    printListRec(list.next);
  }

}

printListRec(list);
