'use strict';

/* ##################################################
                  ? : Solution 1
################################################## */
// function randomNumber() {
//   return Math.trunc(Math.random() * 10 + 1);
// }
// const showNumber = document.querySelector('.number');
// const randomButton = document.querySelector('.random-button');

// if (randomButton) {
//   randomButton.addEventListener('click', () => {
//     const number = randomNumber();
//     showNumber.textContent = number;
//   });
// }

/* ##################################################
                  ? : Solution 2
################################################## */
const showNumber = document.querySelector('.number');
const randomButton = document.querySelector('.random-button');

const generateNumber = () => {
  const randomNumber = Math.floor(Math.random() * 10 + 1);
  showNumber.innerHTML = randomNumber;
};

randomButton.addEventListener('click', generateNumber);

generateNumber();
