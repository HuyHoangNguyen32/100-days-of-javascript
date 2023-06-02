/* ##################################################
              ? : Solution 2 - Udemy
################################################## */

const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

function palindrome() {
  const word = document.querySelector('.input-text').value;
  let len = word.length;

  let start = word.substring(0, Math.floor(len / 2)).toLowerCase(); // 0 ~ 2
  let end = word.substring(len - Math.floor(len / 2)).toLowerCase(); // 3 ~ 5

  // let flip = end.split('').reverse().join('');
  let flip = [...end].reverse().join('');

  if (start == flip) {
    result.innerHTML = `${word.toUpperCase()} is a palindrome`;
  } else {
    result.innerHTML = `${word.toUpperCase()} is NOT a palindrome`;
  }
}

btn.addEventListener('click', palindrome);

/* ##################################################
                  ? : Solution 1 - Me
################################################## */

// function getText() {
//   const input = document.querySelector('.input-text');
//   if (!input) return;

//   return input.value;
// }

// function isPalindrome(inputText) {
//   const text = inputText;
//   const arr = text.split('').reverse();
//   const newText = arr.join('');
//   return text === newText;
// }

// function showResult(inputText, checkPalindrome) {
//   const result = document.querySelector('.result');
//   if (!result) return;

//   const showText = inputText.toUpperCase();

//   if (checkPalindrome) {
//     result.textContent = `${showText} is a Palindrome`;
//   } else {
//     result.textContent = `${showText} is not a Palindrome`;
//   }
// }

// function palindrome() {
//   const checkBtn = document.querySelector('.btn');
//   if (!checkBtn) return;
//   checkBtn.addEventListener('click', () => {
//     const inputText = getText();
//     if (inputText) {
//       const checkPalindrome = isPalindrome(inputText);
//       showResult(inputText, checkPalindrome);

//       setTimeout(() => {
//         const input = document.querySelector('.input-text');
//         input.value = '';
//         const result = document.querySelector('.result');
//         result.textContent = '';
//       }, 2000);
//     }
//   });
// }

// (() => {
//   palindrome();
// })();
