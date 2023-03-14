/* 

Добавьте пункт к выпадающему списку

Имеется <select>:

<select id="genres">
  <option value="rock">Рок</option>
  <option value="blues" selected>Блюз</option>
</select>

Используя JavaScript:

Выведите значение и текст выбранного пункта.
Добавьте пункт: <option value="classic">Классика</option>.
Сделайте его выбранным.

*/

// Выведите значение и текст выбранного пункта.
let selected = Array.from(genres.options)
  .filter(option => option.selected)
  .map(option => `Значение: ${option.value}, текст: ${option.textContent}`);

console.log(selected);

// Добавьте пункт: <option value="classic">Классика</option>
let newOption = new Option('Классика', 'classic');

genres.append(newOption);

// Сделайте его выбранным.
newOption.selected = true;
