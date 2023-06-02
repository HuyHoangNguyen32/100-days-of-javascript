// a, e, i, o, and u

/* ##################################################
              ? : Solution 2 - Udemy
################################################## */

const word = document.querySelector('.input-text');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

btn.addEventListener('click', countVowel);

function countVowel() {
  let vowelCount = 0;
  let wordValue = word.value.toLowerCase();

  for (const letter of [...wordValue]) {
    if (letter.match(/([a,e,i,o,u])/)) {
      vowelCount++;
    }
  }

  result.innerHTML = `${word.value.toUpperCase()} has ${vowelCount} vowels`;
}

/* ##################################################
              ? : Solution 1 - Me
################################################## */
// function getText() {
//   const input = document.querySelector('.input-text');
//   if (!input) return;

//   const text = input.value;
//   return text;
// }

// function isVowels(text) {
//   const initVowelList = ['a', 'e', 'i', 'o', 'u'];
//   const textArr = [...text];
//   let vowelList = [];
//   const flag = false;

//   for (const vowel of initVowelList) {
//     for (const i of textArr) {
//       if (vowel == i) {
//         vowelList.push(i);
//       }
//     }
//   }

//   return vowelList.length;
// }

// function countVowel() {
//   const btn = document.querySelector('.btn');
//   if (!btn) return;

//   const showResult = document.querySelector('.result');

//   btn.addEventListener('click', () => {
//     const text = getText();
//     const result = isVowels(text);

//       showResult.textContent = `${text.toUpperCase()} has ${result} vowels`;

//     setTimeout(() => {
//       const input = document.querySelector('.input-text');
//       input.value = '';
//       showResult.textContent = '';
//     }, 2000);
//   });
// }

// (() => {
//   countVowel();
// })();
