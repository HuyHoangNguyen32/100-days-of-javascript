function characterCount() {
  const input = document.getElementById('input');
  const showNumber = document.querySelector('.show-number');

  if (!input || !showNumber) return;

  input.addEventListener('input', () => {
    const number = input.value.length;
    showNumber.textContent = number;
  });
}

(() => {
  characterCount();
})();
