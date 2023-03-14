/* 
Пусть arr – массив строк.

Напишите функцию unique(arr), 
которая возвращает массив, 
содержащий только уникальные элементы arr.

Например:

function unique(arr) {
  * ваш код *
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert(unique(strings)); // кришна, харе, :-O
*/

function unique(arr) {
  return arr.filter((el, i) => arr.indexOf(el) === i);
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert(unique(strings)); // кришна, харе, :-O
