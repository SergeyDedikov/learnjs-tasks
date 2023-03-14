/* 
Создайте интерфейс, позволяющий ввести сумму банковского вклада и процент, 
а затем рассчитать, какая это будет сумма через заданный промежуток времени.

Любое изменение введённых данных должно быть обработано немедленно.

Формула:

// initial: начальная сумма денег
// interest: проценты, например, 0.05 означает 5% в год
// years: сколько лет ждать
let result = Math.round(initial * (1 + interest) ** years);

*/

const form = document.forms.calculator;

form.money.oninput = calculate;
form.months.onchange = calculate;
form.interest.oninput = calculate;

function calculate() {

  let initial = +form.money.value;
  if (!initial) return;

  let interest = form.interest.value / 100;
  if (!interest) return;

  let years = form.months.value / 12;
  if (!years) return;

  let result = Math.round(initial * (1 + interest) ** years);

  let height = result / form.money.value * 100 + 'px';

  document.getElementById('money-before').innerHTML = initial;
  document.getElementById('money-after').innerHTML = result;
  document.getElementById('height-after').style.height = height;

}

calculate();
