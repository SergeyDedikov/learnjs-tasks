/* 
Напишите функцию checkSpam(str), 
возвращающую true, если str содержит 'viagra' или 'XXX', 
а иначе false.

Функция должна быть нечувствительна к регистру:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
*/

function checkSpam(str) {
  let nStr = str.toLowerCase();

  return nStr.includes('viagra') || nStr.includes('xxx');
}
