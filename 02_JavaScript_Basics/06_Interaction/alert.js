let userName = prompt('Давайте знакомиться. Я — Актриса. А как Вас зовут? ', '');
alert(`Приятно познакомиться, ${userName}!`);
let isNice = confirm('А Вам приятно?');
if (isNice) {
  alert('Очень рада, что Вам тоже приятно.')
} else {
  alert('Это Ваши проблемы...')
}
