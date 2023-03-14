/* 
Напишите функцию formatDate(date), 
форматирующую date по следующему принципу:

Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, 
    если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, 
    если меньше часа, вывести "m мин. назад".
В противном случае, 
    полная дата в формате "DD.MM.YY HH:mm". 
    А именно: "день.месяц.год часы:минуты", 
    всё в виде двух цифр, т.е. 31.12.16 10:00.

Например:

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );

*/

function formatDate(date) {
  let delta = new Date() - date; // разница в миллисекундах

  if (delta < 1000) { // меньше 1 секунды
    return 'прямо сейчас';
  }

  let sec = Math.floor(delta / 1000); // преобразовать разницу в секунды

  if (sec < 60) {
    return sec + ' сек. назад';
  }

  let min = Math.floor(delta / 60000); // преобразовать разницу в минуты
  if (min < 60) {
    return min + ' мин. назад';
  }

  // отформатировать дату
  // добавить начальные нули к единственной цифре дню/месяцу/часам/минутам
  let d = date;
  str = [
    '0' + d.getDate(),
    '0' + (d.getMonth() + 1),
    '' + d.getFullYear(),
    '0' + d.getHours(),
    '0' + d.getMinutes()
  ].map(elem => elem.slice(-2)); // оставляем последние 2 цифры из каждого элемента даты

  // форматируем строку
  return str.slice(0, 3).join('.') + ' ' + str.slice(3).join(':');
}

alert(formatDate(new Date(new Date - 1))); // "прямо сейчас"
alert(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"
alert(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"
// вчерашняя дата вроде 31.12.2016, 20:00
alert(formatDate(new Date(new Date - 86400 * 1000)));
