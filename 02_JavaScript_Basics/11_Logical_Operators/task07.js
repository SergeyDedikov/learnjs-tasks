// Задача 7

/* Напишите условие if для проверки, что 
  значение переменной age2 НЕ находится в диапазоне 14 и 90 включительно.

Напишите два варианта: 
  - первый с использованием оператора НЕ !, 
  - второй – без этого оператора. */


// Решение 1

let age1 = +prompt('Введите возраст');

if (!(age1 >= 14 && age1 <= 90)) {
  alert('Это за пределами диапазона от 14 до 90')
}

// Решение 2

let age2 = +prompt('Введите возраст');

if (age2 < 14 || age2 > 90) {
  alert('Это за пределами диапазона от 14 до 90')
}
