"use strict";

const subtract = document.querySelector(".subtract");
const reset = document.querySelector(".reset");
const add = document.querySelector(".add");
const count = document.querySelector(".count");

/* ##################################################
                  ? : Solution 1
################################################## */
// if (subtract) {
//   subtract.addEventListener("click", () => {
//     let newNumber = parseInt(count.textContent);
//     newNumber -= 1;
//     count.textContent = newNumber;
//   });
// }

// if (reset) {
//   reset.addEventListener("click", () => {
//     let initNumber = parseInt(count.textContent);
//     count.textContent = 0;
//   });
// }

// if (add) {
//   add.addEventListener("click", () => {
//     let newNumber = parseInt(count.textContent);
//     newNumber += 1;
//     count.textContent = newNumber;
//   });
// }

/* ##################################################
                  ? : Solution 2
################################################## */
// if (subtract) {
//   subtract.addEventListener("click", () => {
//     count.innerHTML--;
//   });
// }

// if (reset) {
//   reset.addEventListener("click", () => {
//     count.innerHTML = 0;
//   });
// }

// if (add) {
//   add.addEventListener("click", () => {
//     count.innerHTML++;
//   });
// }

/* ##################################################
                  ? : Solution 3
################################################## */
const buttons = document.querySelector(".buttons");
buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("subtract")) {
    count.innerHTML--;
    setColor() 
  }
  if (e.target.classList.contains("reset")) {
    count.innerHTML = 0;
    setColor() 
  }
  if (e.target.classList.contains("add")) {
    count.innerHTML++;
    setColor() 
  }
});

function setColor() {
  if (count.innerHTML > 0) {
    count.style.color = 'yellow';
  } else if (count.innerHTML < 0) {
    count.style.color = 'orange'
  }else {
    count.style.color = '#ffff'
  }
}
