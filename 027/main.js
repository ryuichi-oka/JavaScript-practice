const textarea = document.querySelector('.textarea');

const string_num = document.querySelector('.string-num');

textarea.addEventListener('keyup', onKeyUp);

function onKeyUp() {
  const inputText = textarea.value;
  string_num.innerText = inputText.length;
}