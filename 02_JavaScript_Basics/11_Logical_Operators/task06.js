// Задача 6

// Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.

// «Включительно» означает, что значение переменной age может быть равно 14 или 90.

// Решение

let age = +prompt('Введите возраст');

if (age >= 14 && age <= 90) {
  alert('Это в диапазоне от 14 до 90')
} else {
  alert('Это за пределами диапазона от 14 до 90')
}
