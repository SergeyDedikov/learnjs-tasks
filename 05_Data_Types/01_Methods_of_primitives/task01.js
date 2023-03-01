/* 
Взгляните на следующий код:

let str = "Привет";

str.test = 5;

alert(str.test);

Как вы думаете, это сработает? Что выведется на экран?

*/

'use strict'

let str = "Привет";

str.test = 5;     // Uncaught TypeError: Cannot create property 'test' on string 'Привет'

alert(str.test);  // Этот код не выполнится
